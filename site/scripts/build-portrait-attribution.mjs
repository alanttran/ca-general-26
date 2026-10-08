/**
 * Rebuilds portrait-fetch-report.json from existing WebP files using only
 * Wikipedia summary API (no Commons thumbnail downloads — avoids 429s).
 * Run: cd site && node scripts/build-portrait-attribution.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { WIKI_BY_CANDIDATE_ID, wikiSummaryUrl } from './wiki-portrait-map.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.join(__dirname, '..');
const outDir = path.join(siteRoot, 'public', 'images', 'candidates');

async function fetchJson(url) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(url, {
      headers: { 'user-agent': 'ca-general-26-voter-guide/1.0 (attribution rebuild)' },
    });
    if (res.status === 429) {
      await new Promise((r) => setTimeout(r, 2500 * (attempt + 1)));
      continue;
    }
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return res.json();
  }
  throw new Error('429 after retries');
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const files = await fs.readdir(outDir);
  const webpIds = new Set(
    files.filter((f) => f.endsWith('.webp')).map((f) => path.basename(f, '.webp')),
  );
  const attribution = [];
  const fail = [];

  for (const [id, wikiTitle] of Object.entries(WIKI_BY_CANDIDATE_ID)) {
    if (!webpIds.has(id)) continue;
    try {
      const data = await fetchJson(wikiSummaryUrl(wikiTitle));
      if (data.type === 'disambiguation' || !data.thumbnail?.source) {
        fail.push([id, wikiTitle, 'no thumbnail']);
        continue;
      }
      attribution.push({
        photoSlug: id,
        wikipediaTitle: data.title,
        wikipediaUrl: data.content_urls?.desktop?.page ?? `https://en.wikipedia.org/wiki/${encodeURIComponent(wikiTitle)}`,
        thumbnailSource: data.thumbnail.source,
        originalImage: data.originalimage?.source ?? null,
      });
      console.log('attr', id);
    } catch (e) {
      fail.push([id, wikiTitle, String(e.message ?? e)]);
      console.warn('fail', id, e);
    }
    await sleep(700);
  }

  attribution.sort((a, b) => a.photoSlug.localeCompare(b.photoSlug));
  const ok = attribution.map((a) => a.photoSlug);

  await fs.writeFile(
    path.join(siteRoot, 'scripts', 'portrait-fetch-report.json'),
    JSON.stringify({ ok, fail, attribution }, null, 2),
    'utf8',
  );
  console.log('Wrote', attribution.length, 'attribution rows');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
