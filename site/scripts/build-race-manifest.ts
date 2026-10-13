/**
 * Writes `src/data/race-manifest.json`: which on-demand race file holds each local race id, so the
 * browser loads only the files a ZIP needs. Runs before every build; fails if a race file isn't
 * registered in `races/index.ts` (the build-time validator only sees registered races).
 * Run: cd site && npm run race-manifest
 */
import { readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { Race } from '../src/types/ballot-types';
import { LOCAL_RACES } from '../src/data/races';
import { BUNDLED_LOCAL_RACES, STATEWIDE_FILES } from '../src/data/races/statewide';

const here = dirname(fileURLToPath(import.meta.url));
const racesDir = join(here, '../src/data/races');
const SKIP = new Set([...STATEWIDE_FILES, 'index', 'helpers', 'statewide']);

const isRace = (x: unknown): x is Race =>
  Boolean(x && typeof x === 'object' && 'id' in x && 'crossTypology' in x);

const manifest: Record<string, string> = {};
for (const file of readdirSync(racesDir).filter((f) => f.endsWith('.ts')).sort()) {
  const stem = file.replace(/\.ts$/, '');
  if (SKIP.has(stem)) continue;
  const mod = (await import(pathToFileURL(join(racesDir, file)).href)) as Record<string, unknown>;
  for (const value of Object.values(mod)) {
    if (!Array.isArray(value)) continue;
    for (const race of value.filter(isRace)) {
      if (manifest[race.id]) throw new Error(`Race id ${race.id} is in both ${manifest[race.id]} and ${stem}`);
      manifest[race.id] = stem;
    }
  }
}

const bundled = new Set(BUNDLED_LOCAL_RACES.map((r) => r.id));
const unregistered = Object.keys(manifest).filter((id) => !LOCAL_RACES.some((r) => r.id === id));
if (unregistered.length) throw new Error(`Not registered in races/index.ts: ${unregistered.join(', ')}`);
const unmapped = LOCAL_RACES.filter((r) => !manifest[r.id] && !bundled.has(r.id)).map((r) => r.id);
if (unmapped.length) throw new Error(`No on-demand file found for: ${unmapped.join(', ')}`);

writeFileSync(join(here, '../src/data/race-manifest.json'), `${JSON.stringify(manifest, null, 0)}\n`);
console.log(`Race manifest: ${Object.keys(manifest).length} local races in ${new Set(Object.values(manifest)).size} files.`);
