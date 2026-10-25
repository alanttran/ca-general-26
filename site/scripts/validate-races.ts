/**
 * Validate only the races exported by the given race files (for parallel edits).
 * Run: cd site && npx tsx scripts/validate-races.ts statewide-a props-b
 */
import type { Race } from '../src/types/ballot-types';
import { mergeRaceDerivedFields } from '../src/data/merge-races';
import {
  collectExperienceRationaleIssues,
  collectLegacyTypologyIssues,
  collectMeasureIssues,
  collectQualificationIssues,
  collectRedFlagIssues,
  collectTypologyValidationIssues,
} from '../src/data/validate-typology-picks';

const files = process.argv.slice(2);
if (!files.length) throw new Error('Pass one or more race file names, e.g. statewide-a');

// Merge every passed file first so cross-file links (e.g. related measures) resolve.
const byFile = new Map<string, Race[]>();
for (const f of files) {
  const mod = (await import(`../src/data/races/${f.replace(/\.ts$/, '')}.ts`)) as Record<string, unknown>;
  byFile.set(f, Object.values(mod).filter(Array.isArray).flat() as Race[]);
}
const races = mergeRaceDerivedFields([...byFile.values()].flat());
const issues = [
  ...collectTypologyValidationIssues(races),
  ...collectRedFlagIssues(races),
  ...collectQualificationIssues(races),
  ...collectExperienceRationaleIssues(races),
  ...collectMeasureIssues(races),
  ...collectLegacyTypologyIssues(races),
];
for (const [f, list] of byFile) {
  const ids = new Set(list.map((r) => r.id));
  const mine = issues.filter((i) => ids.has(i.raceId));
  console.log(`${f}: ${list.length} races, ${mine.length} issues`);
  for (const i of mine) console.log(`  • ${i.raceId}${i.typology ? ` [${i.typology}]` : ''}: ${i.message}`);
}
process.exitCode = issues.length ? 1 : 0;
