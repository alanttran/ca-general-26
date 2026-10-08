/**
 * Build-time ballot data guard (typology picks, race structure, ZIP profile race ids).
 * Run: cd site && npm run validate-typology
 */
import { BALLOT_PROFILES } from '../src/data/ballot-profiles';
import { mergeRaceDerivedFields } from '../src/data/merge-races';
import { LOCAL_RACES, STATEWIDE_RACES } from '../src/data/races';
import { assertBallotDataValid } from '../src/data/validate-typology-picks';

const ALL_RACES = mergeRaceDerivedFields([...STATEWIDE_RACES, ...LOCAL_RACES]);

assertBallotDataValid(ALL_RACES, Object.values(BALLOT_PROFILES));
console.log(`Ballot data validation passed (${ALL_RACES.length} races).`);
