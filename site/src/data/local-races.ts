import type { Race } from '../types/ballot-types';
import MANIFEST from './race-manifest.json';

/**
 * On-demand local race files. Each becomes its own small chunk, so a ZIP downloads only the files its
 * races live in instead of every local race in the state. `race-manifest.json` is regenerated on build.
 */
const FILES = import.meta.glob<Record<string, unknown>>([
  './races/*.ts',
  '!./races/index.ts',
  '!./races/helpers.ts',
  '!./races/statewide.ts',
  '!./races/statewide-a.ts',
  '!./races/statewide-b.ts',
  '!./races/retention.ts',
  '!./races/props-a.ts',
  '!./races/props-b.ts',
  '!./races/props-c.ts',
]);

const manifest = MANIFEST as Record<string, string>;

export const ON_DEMAND_RACE_IDS: string[] = Object.keys(manifest);

const isRace = (x: unknown): x is Race =>
  Boolean(x && typeof x === 'object' && 'id' in x && 'crossTypology' in x);

/** Loads every file holding one of `ids`; ids that aren't on-demand (bundled or unknown) are ignored. */
export async function loadLocalRaces(ids: string[]): Promise<Race[]> {
  const stems = [...new Set(ids.map((id) => manifest[id]).filter(Boolean))];
  const mods = await Promise.all(stems.map((stem) => FILES[`./races/${stem}.ts`]?.()));
  const wanted = new Set(ids);
  return mods
    .flatMap((mod) => Object.values(mod ?? {}))
    .filter(Array.isArray)
    .flatMap((arr: unknown[]) => arr.filter(isRace))
    .filter((r) => wanted.has(r.id));
}
