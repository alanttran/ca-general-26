/**
 * Build-time ballot data guard (typology picks, race structure, ZIP profile race ids).
 * Run: cd site && npm run validate-typology
 */
import { BALLOT_PROFILES } from '../src/data/ballot-profiles';
import { mergeRaceDerivedFields } from '../src/data/merge-races';
import { LOCAL_RACES, STATEWIDE_RACES } from '../src/data/races';
import { assertBallotDataValid } from '../src/data/validate-typology-picks';
import { ZIP_AREA_ZIPS } from '../src/data/zip-areas';

const ALL_RACES = mergeRaceDerivedFields([...STATEWIDE_RACES, ...LOCAL_RACES]);

assertBallotDataValid(ALL_RACES, Object.values(BALLOT_PROFILES));
// Every hand-built ZIP shows up exactly once in the grouped ZIP list under the ZIP box.
const profileZips = Object.keys(BALLOT_PROFILES);
const unlisted = profileZips.filter((z) => !ZIP_AREA_ZIPS.includes(z));
const unknown = ZIP_AREA_ZIPS.filter((z) => !BALLOT_PROFILES[z]);
const twice = ZIP_AREA_ZIPS.filter((z, i) => ZIP_AREA_ZIPS.indexOf(z) !== i);
if (unlisted.length || unknown.length || twice.length) {
  throw new Error(`zip-areas.ts is out of sync — missing: ${unlisted.join(', ') || 'none'}; no profile: ${unknown.join(', ') || 'none'}; listed twice: ${twice.join(', ') || 'none'}`);
}
console.log(`Ballot data validation passed (${ALL_RACES.length} races).`);
