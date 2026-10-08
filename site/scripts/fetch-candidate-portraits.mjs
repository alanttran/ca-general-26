/**
 * Downloads Wikipedia REST "page/summary" thumbnails, crops to square WebP
 * under public/images/candidates/. Run from repo: cd site && node scripts/fetch-candidate-portraits.mjs
 *
 * Only candidates with a verified English Wikipedia title are listed.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

import { WIKI_BY_CANDIDATE_ID, wikiSummaryUrl } from './wiki-portrait-map.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.join(__dirname, '..');
const outDir = path.join(siteRoot, 'public', 'images', 'candidates');

async function fetchJson(url) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(url, {
      headers: { 'user-agent': 'ca-general-26-voter-guide/1.0 (portrait fetch; educational)' },
    });
    if (res.status === 429) {
      const wait = 2500 * (attempt + 1);
      console.warn('429 summary, retry in', wait, 'ms');
      await new Promise((r) => setTimeout(r, wait));
      continue;
    }
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return res.json();
  }
  throw new Error('429 after retries (summary)');
}

async function fetchBuffer(url) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(url, {
      headers: { 'user-agent': 'ca-general-26-voter-guide/1.0 (portrait fetch; educational)' },
    });
    if (res.status === 429) {
      const wait = 2500 * (attempt + 1);
      console.warn('429 thumb, retry in', wait, 'ms');
      await new Promise((r) => setTimeout(r, wait));
      continue;
    }
    if (!res.ok) throw new Error(`thumb ${res.status}`);
    return Buffer.from(await res.arrayBuffer());
  }
  throw new Error('429 after retries (thumb)');
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const onlyIds = process.env.ONLY?.split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const wikiEntries = Object.entries(WIKI_BY_CANDIDATE_ID).filter(
    ([id]) => !onlyIds?.length || onlyIds.includes(id),
  );
  if (!wikiEntries.length) {
    console.error('No entries match ONLY=', process.env.ONLY);
    process.exit(1);
  }

  await fs.mkdir(outDir, { recursive: true });
  const attribution = [];
  const ok = [];
  const fail = [];

  for (const [id, wikiTitle] of wikiEntries) {
    try {
      const data = await fetchJson(wikiSummaryUrl(wikiTitle));
      if (data.type === 'disambiguation' || !data.thumbnail?.source) {
        fail.push([id, wikiTitle, 'no thumbnail or disambiguation']);
        continue;
      }
      const buf = await fetchBuffer(data.thumbnail.source);
      const dest = path.join(outDir, `${id}.webp`);
      await sharp(buf)
        .resize(256, 256, { fit: 'cover', position: 'centre' })
        .webp({ quality: 82 })
        .toFile(dest);
      ok.push(id);
      attribution.push({
        photoSlug: id,
        wikipediaTitle: data.title,
        wikipediaUrl: data.content_urls?.desktop?.page ?? `https://en.wikipedia.org/wiki/${encodeURIComponent(wikiTitle.replace(/ /g, '_'))}`,
        thumbnailSource: data.thumbnail.source,
        originalImage: data.originalimage?.source ?? null,
      });
      console.log('ok', id);
      await sleep(900);
    } catch (e) {
      fail.push([id, wikiTitle, String(e.message ?? e)]);
      console.warn('fail', id, e);
    }
  }

  await fs.writeFile(
    path.join(siteRoot, 'scripts', 'portrait-fetch-report.json'),
    JSON.stringify({ ok, fail, attribution }, null, 2),
    'utf8',
  );
  console.log('\nDone.', ok.length, 'written;', fail.length, 'failed');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
