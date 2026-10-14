import type { BallotProfile } from './ballot-profiles';

/**
 * ZIPs mainly in the City of Temecula, built from the Riverside County Registrar’s Nov 2026 district layer,
 * candidate list and Measure S notice (see docs/temecula-scope.md). Contests covering ≥8% of a ZIP’s
 * residents are listed (with `partialShares` when under 95%); smaller slivers are named in the note.
 */
const RIVERSIDE = { registrarLabel: 'Riverside County Registrar of Voters', registrarUrl: 'https://www.voteinfo.net' };

function temecula(
  zip: string,
  scopeLabel: string,
  verificationNote: string,
  localRaceIds: string[],
  partialShares?: Record<string, number>,
): BallotProfile {
  return { zip, scopeLabel, verificationNote, ...RIVERSIDE, localRaceIds, partialShares };
}

export const TEMECULA_PROFILES: Record<string, BallotProfile> = {
  '92590': temecula(
    '92590',
    'Old Town / west Temecula, Riverside County',
    'Built from the Riverside County Registrar’s November district map and candidate list for this ZIP, which is about 58% City of Temecula and 42% unincorporated (De Luz and the Santa Rosa Plateau): Senate 32, Assembly 71, Board of Equalization 4, the 4th District Court of Appeal, Superior Court Office 10, Rancho California Water District and countywide Measure A for nearly everyone. The Temecula part votes in CA-48, City Council District 5 and Temecula Valley Unified Measure S; the unincorporated part is in CA-40 and votes on Murrieta Valley Unified Measure M instead. No school board seat here is up this year. No Riverside supervisor seat is on the ballot. Trust your official sample ballot over us.',
    [
      'boe-d4', 'us-rep-ca40', 'us-rep-ca48', 'senate-sd32', 'assembly-ad71', 'retention-dca4', 'rivco-superior-court-10',
      'temecula-council-d5', 'rcwd-board', 'rctc-measure-a', 'tvusd-measure-s', 'mvusd-measure-m',
    ],
    { 'us-rep-ca40': 41, 'us-rep-ca48': 59, 'temecula-council-d5': 58, 'tvusd-measure-s': 60, 'mvusd-measure-m': 40 },
  ),
  '92591': temecula(
    '92591',
    'North Temecula, Riverside County',
    'Built from the Riverside County Registrar’s November district map and candidate list for this ZIP, which is nearly all City of Temecula: CA-48, Senate 32, Assembly 71, Board of Equalization 4, the 4th District Court of Appeal, Superior Court Office 10, Temecula Valley Unified Measure S, Rancho California Water District and countywide Measure A for nearly everyone. About 64% vote for Temecula Valley Unified Trustee Area 2 and 43% for City Council District 5 (Temecula’s other council seats aren’t contested this year). About 13% along the north edge also vote for Mt. San Jacinto College Trustee Area 3. No Riverside supervisor seat is on the ballot. Trust your official sample ballot over us.',
    [
      'boe-d4', 'us-rep-ca48', 'senate-sd32', 'assembly-ad71', 'retention-dca4', 'rivco-superior-court-10',
      'msjc-trustee-area-3', 'tvusd-trustee-area-2',
      'temecula-council-d5', 'rcwd-board', 'rctc-measure-a', 'tvusd-measure-s',
    ],
    { 'msjc-trustee-area-3': 13, 'tvusd-trustee-area-2': 64, 'temecula-council-d5': 43 },
  ),
  '92592': temecula(
    '92592',
    'South and east Temecula / wine country, Riverside County',
    'Built from the Riverside County Registrar’s November district map and candidate list for this ZIP, which is about 83% City of Temecula plus unincorporated wine country and Vail Ranch: CA-48, Senate 32, Board of Equalization 4, the 4th District Court of Appeal, Superior Court Office 10, Temecula Valley Unified Measure S, Rancho California Water District and countywide Measure A for nearly everyone, and Assembly 71 for about 97%. About 41% also vote for Temecula Valley Unified Trustee Area 4. There is no City Council race for most of this ZIP (about 2% are in District 5). Small slivers are in Assembly 36 (~3%) or Mt. San Jacinto College Trustee Area 3 (~4%), which we don’t list here. No Riverside supervisor seat is on the ballot. Trust your official sample ballot over us.',
    [
      'boe-d4', 'us-rep-ca48', 'senate-sd32', 'assembly-ad71', 'retention-dca4', 'rivco-superior-court-10',
      'tvusd-trustee-area-4',
      'rcwd-board', 'rctc-measure-a', 'tvusd-measure-s',
    ],
    { 'tvusd-trustee-area-4': 41 },
  ),
};
