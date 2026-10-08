/**
 * Full audit — prints every issue (does not stop at the first).
 * Run: cd site && npm run audit-typology
 */
import { BALLOT_PROFILES } from '../src/data/ballot-profiles';
import { mergeRaceDerivedFields } from '../src/data/merge-races';
import { LOCAL_RACES, STATEWIDE_RACES } from '../src/data/races';
import { collectProfileIssues, collectQualificationIssues, collectRedFlagIssues, collectTypologyValidationIssues } from '../src/data/validate-typology-picks';

const ALL_RACES = mergeRaceDerivedFields([...STATEWIDE_RACES, ...LOCAL_RACES]);

const errors = [
  ...collectTypologyValidationIssues(ALL_RACES),
  ...collectRedFlagIssues(ALL_RACES),
  ...collectQualificationIssues(ALL_RACES),
  ...collectProfileIssues(ALL_RACES, Object.values(BALLOT_PROFILES)),
];

console.log(`Audited ${ALL_RACES.length} races.\n`);

if (errors.length === 0) {
  console.log('No issues found.');
  process.exit(0);
}

console.log(`Issues: ${errors.length}`);
for (const i of errors) {
  console.log(`  • ${i.raceId}${i.typology ? ` [${i.typology}]` : ''}: ${i.message}`);
}
process.exit(1);
