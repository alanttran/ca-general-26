import type { BallotProfile } from './ballot-profiles';

/**
 * ZIPs outside San Diego County (see docs/wave3-*-scope.md). Contests covering ≥20% of a ZIP’s
 * residents are listed (with `partialShares` when not ~all); smaller slivers are named in the note.
 * List order inside a category follows the printed ballot; county measures precede city and
 * school measures.
 */

function profile(
  zip: string,
  scopeLabel: string,
  registrarLabel: string,
  registrarUrl: string,
  verificationNote: string,
  localRaceIds: string[],
  partialShares?: Record<string, number>,
): BallotProfile {
  return { zip, scopeLabel, verificationNote, registrarLabel, registrarUrl, localRaceIds, partialShares };
}

const LA = ['Los Angeles County Registrar-Recorder/County Clerk', 'https://www.lavote.gov'] as const;

/** Countywide Los Angeles contests on every LA ballot we cover. */
const LA_COUNTYWIDE = [
  'boe-d3',
  'us-rep-ca30',
  'retention-dca2',
  'la-superior-court-64',
  'la-superior-court-65',
  'la-superior-court-87',
  'la-superior-court-131',
  'laccd-seat-2',
  'laccd-seat-4',
  'laccd-seat-6',
  'la-sheriff',
  'la-measure-a',
  'la-measure-e',
];

export const WAVE3_PROFILES: Record<string, BallotProfile> = {
  '90028': profile(
    '90028',
    'Hollywood, Los Angeles County',
    ...LA,
    'Built from the LA County Registrar’s November contest list for this ZIP: CA-30, Board of Equalization 3, Assembly 51, State Senate 24 (about a fifth of residents are in Senate 26 instead), the countywide Sheriff, judicial and community-college races, and City of Los Angeles races and measures. The Assessor, Supervisor District 3, City Controller and Council District 13 were decided in June. Trust your official sample ballot over us.',
    [
      ...LA_COUNTYWIDE.slice(0, 2),
      'senate-sd24',
      'senate-sd26',
      'assembly-ad51',
      ...LA_COUNTYWIDE.slice(2),
      'la-mayor',
      'la-city-attorney',
      'la-measure-te',
      'la-measure-la',
      'la-measure-pl',
      'la-measure-ee',
      'la-measure-prk',
      'la-measure-prt',
      'la-measure-sc',
      'la-measure-fd',
    ],
    { 'senate-sd24': 78, 'senate-sd26': 22 },
  ),
  '91501': profile(
    '91501',
    'Burbank, Los Angeles County',
    ...LA,
    'Built from the LA County Registrar’s November contest list for this ZIP: CA-30, Board of Equalization 3, Senate 20, Assembly 44, the countywide Sheriff, judicial and community-college races, and Burbank’s council, clerk, treasurer and measures. Burbank Unified Trustee Area 4 has no election—George Saikali is being appointed because no one else filed. Trust your official sample ballot over us.',
    [
      ...LA_COUNTYWIDE.slice(0, 2),
      'senate-sd20',
      'assembly-ad44',
      ...LA_COUNTYWIDE.slice(2),
      'busd-trustee-area-3',
      'burbank-city-council',
      'burbank-city-clerk',
      'burbank-city-treasurer',
      'burbank-measure-c',
      'burbank-measure-cc',
      'burbank-measure-cd',
    ],
    { 'busd-trustee-area-3': 24 },
  ),
  '92868': profile(
    '92868',
    'Orange, Orange County',
    'Orange County Registrar of Voters',
    'https://www.ocvote.gov',
    'Built from the Orange County Registrar’s November candidate and measure lists for this ZIP: CA-46, Senate 34, Assembly 68, Board of Equalization 4, the 4th District Court of Appeal, Orange’s mayor and Measures I, J and K, and MWDOC Division 2. Most of the ZIP is in City Council District 2, which isn’t up; small parts also vote on Council District 1 (~11%), Rancho Santiago College Area 2 (~15%) or Orange Unified Area 7 (~4%), which we don’t cover. Trust your official sample ballot over us.',
    ['boe-d4', 'us-rep-ca46', 'senate-sd34', 'assembly-ad68', 'retention-dca4', 'orange-mayor', 'mwdoc-division-2', 'orange-measure-i', 'orange-measure-j', 'orange-measure-k'],
  ),
  '92562': profile(
    '92562',
    'Murrieta, Riverside County',
    'Riverside County Registrar of Voters',
    'https://www.voteinfo.net',
    'Built from the Riverside County Registrar’s November lists for this ZIP: CA-40, Senate 32, Assembly 71, Board of Equalization 4, the 4th District Court of Appeal, Superior Court Office 10, Murrieta Valley Unified seats and Measure M, and countywide Measure A. Murrieta Valley Unified trustee areas 1 and 2 each cover part of the ZIP—you’ll see only one. No Murrieta City Council seat in this ZIP is on the ballot. Trust your official sample ballot over us.',
    [
      'boe-d4', 'us-rep-ca40', 'senate-sd32', 'assembly-ad71', 'retention-dca4', 'rivco-superior-court-10',
      'mvusd-trustee-area-1', 'mvusd-trustee-area-2', 'rcwd-board', 'rctc-measure-a', 'mvusd-measure-m',
    ],
    { 'rcwd-board': 27 },
  ),
  '95765': profile(
    '95765',
    'Rocklin, Placer County',
    'Placer County Elections',
    'https://www.placerelections.com',
    'Built from Placer County’s November sample ballots for this ZIP: CA-6, Senate 6, Assembly 5, Board of Equalization 1, the 3rd District Court of Appeal, Rocklin City Council and Measure C, Rocklin Unified Measure D, and Placer County Measures G and H. Rocklin Unified trustee seats depend on your address; about 3% are in Area 2, and about 31% have no seat up. Trust your official sample ballot over us.',
    [
      'boe-d1', 'us-rep-ca6', 'senate-sd6', 'assembly-ad5', 'retention-dca3',
      'rusd-trustee-area-4', 'rusd-trustee-area-5', 'rocklin-city-council',
      'placer-measure-g', 'placer-measure-h', 'rocklin-measure-c', 'rusd-measure-d',
    ],
    { 'rusd-trustee-area-4': 33, 'rusd-trustee-area-5': 33 },
  ),
  '94544': profile(
    '94544',
    'Hayward, Alameda County',
    'Alameda County Registrar of Voters',
    'https://acvote.alamedacountyca.gov/',
    'Built from Alameda County’s November candidate and measure lists and district maps (the county’s sample ballots need a voter lookup): CA-14, Senate 10, Assembly 20, Board of Equalization 2, the 1st District Court of Appeal, Hayward’s mayor and Measure CC, and AC Transit, BART and East Bay Regional Park seats. School, college and council contests depend on your address; small parts of the ZIP also vote on Hayward Unified Area 2, Hayward Area Recreation & Park District seats or Eden Health District, which we don’t cover. Trust your official sample ballot over us.',
    [
      'boe-d2', 'us-rep-ca14', 'senate-sd10', 'assembly-ad20', 'retention-dca1',
      'husd-trustee-area-4', 'clpccd-area-6', 'clpccd-area-3',
      'hayward-mayor', 'hayward-council-d6',
      'ac-transit-ward-4', 'bart-district-4', 'ebrpd-ward-3',
      'bay-area-regional-transit-measure', 'hayward-measure-cc',
    ],
    { 'husd-trustee-area-4': 44, 'clpccd-area-6': 35, 'clpccd-area-3': 24, 'hayward-council-d6': 34, 'bart-district-4': 56 },
  ),
  '94043': profile(
    '94043',
    'Mountain View, Santa Clara County',
    'Santa Clara County Registrar of Voters',
    'https://vote.santaclaracounty.gov',
    'Built from Santa Clara County’s November candidate and measure lists and district maps (the county’s sample ballots need a voter lookup): CA-16, Assembly 23, Board of Equalization 2, the 6th District Court of Appeal, Mountain View City Council and Measures E and F, Mountain View Whisman and Mountain View–Los Altos school seats, Valley Water District 7, El Camino Healthcare Measure S and the regional transit measure. There is no State Senate race (District 13 isn’t up). Only eastern Mountain View (south of Central Expressway) votes for Mountain View–Los Altos Trustee Area 3; Areas 1 and 2 are unopposed this year. Trust your official sample ballot over us.',
    [
      'boe-d2', 'us-rep-ca16', 'assembly-ad23', 'retention-dca6',
      'mvwsd-board', 'mvlahsd-trustee-area-3', 'mountain-view-city-council', 'valley-water-d7',
      'bay-area-regional-transit-measure', 'mountain-view-measure-e', 'mountain-view-measure-f', 'el-camino-measure-s',
    ],
  ),
};
