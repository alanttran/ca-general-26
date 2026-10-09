import type { BallotProfile } from './ballot-profiles';

/**
 * San Diego County ZIPs beyond 92126, built from the Registrar’s Nov 2026 ballot-type map and sample
 * ballots (see docs/wave2-sd-zip-scope.md). Contests covering ≥20% of a ZIP’s residents are listed
 * (with `partialShares` when not ~all); smaller slivers are named in the note instead.
 */

const SD_REGISTRAR = {
  registrarLabel: 'San Diego County Registrar of Voters',
  registrarUrl: 'https://www.sdvote.com',
};

/** Countywide lines every San Diego County ballot shares (category sort puts them in ballot order). */
const SD_COUNTYWIDE = ['boe-d4', 'retention-dca4', 'sd-county-assessor', 'sd-county-treasurer', 'sd-measure-a', 'sd-measure-b'];

export function sd(zip: string, scopeLabel: string, verificationNote: string, localRaceIds: string[], partialShares?: Record<string, number>): BallotProfile {
  // County measures print before school-district measures (e.g. SDUSD Measure M).
  const schoolMeasures = localRaceIds.filter((id) => id === 'sdusd-measure-m');
  const rest = localRaceIds.filter((id) => id !== 'sdusd-measure-m');
  return { zip, scopeLabel, verificationNote, ...SD_REGISTRAR, localRaceIds: [...rest, ...SD_COUNTYWIDE, ...schoolMeasures], partialShares };
}

export const SD_WAVE2_PROFILES: Record<string, BallotProfile> = {
  '91911': sd(
    '91911',
    'Chula Vista, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-52, Senate 18, Assembly 80, Chula Vista Mayor and City Attorney, and Chula Vista Elementary seats 1, 3 and 5. Smaller parts of the ZIP also vote on Southwestern College Trustee Area 1 (~8%), Chula Vista Council District 2 (~7%) or Sweetwater Union High Trustee Area 1 (~4%), which we don’t cover. Trust your official sample ballot over us.',
    ['us-rep-ca52', 'senate-sd18', 'assembly-ad80', 'cvesd-seat-1', 'cvesd-seat-3', 'cvesd-seat-5', 'swc-trustee-area-4', 'chula-vista-mayor', 'chula-vista-city-attorney'],
    { 'swc-trustee-area-4': 25 },
  ),
  '91914': sd(
    '91914',
    'East Chula Vista, San Diego',
    'Built from the county’s sample ballots for this ZIP (Eastlake / Otay Ranch): CA-52, Senate 18, Assembly 80, Chula Vista Mayor, Council District 1 and City Attorney, and Chula Vista Elementary seats 1, 3 and 5. About 28% of residents also vote for Otay Water District Division 3. Trust your official sample ballot over us.',
    ['us-rep-ca52', 'senate-sd18', 'assembly-ad80', 'cvesd-seat-1', 'cvesd-seat-3', 'cvesd-seat-5', 'chula-vista-mayor', 'chula-vista-council-d1', 'chula-vista-city-attorney', 'otay-water-div-3'],
    { 'otay-water-div-3': 28 },
  ),
  '92009': sd(
    '92009',
    'Carlsbad, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-49, Senate 38, Assembly 77, County Board of Education District 5, and Carlsbad’s Mayor, City Clerk and City Treasurer. School and council contests depend on your address. Smaller slivers also vote on Palomar Health Division 3 (~15%), Carlsbad Unified Trustee Area 5 (~11%), San Dieguito Union High Trustee Area 1 or Palomar College Trustee Area 1 (under 3%), which we don’t cover. Trust your official sample ballot over us.',
    ['us-rep-ca49', 'senate-sd38', 'assembly-ad77', 'sd-county-board-ed-d5', 'encinitas-usd-board', 'carlsbad-mayor', 'carlsbad-city-clerk', 'carlsbad-city-treasurer', 'carlsbad-council-d3'],
    { 'encinitas-usd-board': 53, 'carlsbad-council-d3': 32 },
  ),
  '92026': sd(
    '92026',
    'Escondido, San Diego',
    'This ZIP spans the City of Escondido and unincorporated land to the north, and is split across 36 ballot types, so check which races apply to you. Most residents are in CA-48 (about 16% are in CA-50 instead), Senate 40, Assembly 76 (about 23% are in Assembly 75), and Supervisor District 5. About 17% also vote for Palomar Health Division 3. Smaller slivers vote on Escondido Union School Trustee Area 4 (~6%) or San Marcos Unified Area E (~7%), which we don’t cover. Trust your official sample ballot over us.',
    [
      'us-rep-ca48', 'senate-sd40', 'assembly-ad76', 'assembly-ad75', 'sd-supervisor-d5',
      'euhsd-trustee-area-5', 'euhsd-trustee-area-2', 'euhsd-trustee-area-1', 'eusd-trustee-area-5', 'eusd-trustee-area-2',
      'palomar-ccd-area-5',
      'escondido-mayor', 'escondido-council-d2', 'escondido-council-d1', 'deer-springs-fire-board', 'palomar-health-div-3',
    ],
    {
      'us-rep-ca48': 84, 'assembly-ad76': 77, 'assembly-ad75': 23,
      'euhsd-trustee-area-5': 49, 'euhsd-trustee-area-2': 21, 'euhsd-trustee-area-1': 13,
      'eusd-trustee-area-5': 51, 'eusd-trustee-area-2': 15, 'palomar-ccd-area-5': 40,
      'escondido-mayor': 72, 'escondido-council-d2': 36, 'escondido-council-d1': 21, 'deer-springs-fire-board': 23,
      'palomar-health-div-3': 17,
    },
  ),
  '92111': sd(
    '92111',
    'Linda Vista / Clairemont, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-50, Assembly 78, Supervisor District 4 and SDUSD Measure M. There is no State Senate race (District 39 isn’t up until 2028). The ZIP is split three ways for city council, community college and school board seats, and about half of residents have no council race this year. Trust your official sample ballot over us.',
    ['us-rep-ca50', 'assembly-ad78', 'sd-supervisor-d4', 'sdccd-district-c', 'sdccd-district-a', 'sdusd-district-b', 'sd-city-council-d2', 'sdusd-measure-m'],
    { 'sdccd-district-c': 54, 'sdccd-district-a': 45, 'sdusd-district-b': 20, 'sd-city-council-d2': 45 },
  ),
  '92116': sd(
    '92116',
    'Normal Heights / Kensington, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-51, Assembly 78, Supervisor District 4 and SDUSD Measure M for everyone. There is no State Senate race (District 39 isn’t up until 2028) and no City Council race (92116 is in Districts 3 and 9, neither up this year). School and college seats depend on your address: about 81% vote for SDUSD District B, 68% for Community College District C and 58% for County Board of Education District 3. Trust your official sample ballot over us.',
    ['us-rep-ca51', 'assembly-ad78', 'sd-county-board-ed-d3', 'sdccd-district-c', 'sdusd-district-b', 'sd-supervisor-d4', 'sdusd-measure-m'],
    { 'sd-county-board-ed-d3': 58, 'sdccd-district-c': 68, 'sdusd-district-b': 81 },
  ),
  '92130': sd(
    '92130',
    'Carmel Valley, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-49 and County Board of Education District 5, with Senate 38 or 40 and Assembly 76 or 77 depending on your address. There is no City Council race (District 1 isn’t up) and no SDUSD Measure M here. About a quarter of residents have no school-board contest. Trust your official sample ballot over us.',
    ['us-rep-ca49', 'senate-sd38', 'senate-sd40', 'assembly-ad76', 'assembly-ad77', 'sd-county-board-ed-d5', 'del-mar-usd-board', 'sduhsd-trustee-area-5'],
    { 'senate-sd38': 71, 'senate-sd40': 29, 'assembly-ad76': 52, 'assembly-ad77': 48, 'del-mar-usd-board': 64, 'sduhsd-trustee-area-5': 60 },
  ),
  '92131': sd(
    '92131',
    'Scripps Ranch, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-50, Senate 40, Assembly 75 and SDUSD Measure M. Most of Scripps Ranch is in City Council District 5, which isn’t up this year; about 23% are in District 6. About 15% vote for Palomar Health Division 7 and about 10% for County Board of Education District 3. A smaller sliver votes on Palomar College Trustee Area 1 (~6%), which we don’t cover. Trust your official sample ballot over us.',
    ['us-rep-ca50', 'senate-sd40', 'assembly-ad75', 'sd-county-board-ed-d3', 'sd-city-council-d6', 'palomar-health-div-7', 'sdusd-measure-m'],
    { 'sd-county-board-ed-d3': 10, 'sd-city-council-d6': 23, 'palomar-health-div-7': 15, 'sdusd-measure-m': 91 },
  ),
  '92139': sd(
    '92139',
    'Paradise Hills, San Diego',
    'Built from the county’s sample ballots for this ZIP: Assembly 79, Supervisor District 4, City Council District 4 and SDUSD Measure M. The ZIP is split almost evenly between CA-51 and CA-52, so check which one is on your ballot. There is no State Senate race (District 39 isn’t up until 2028). Trust your official sample ballot over us.',
    ['us-rep-ca51', 'us-rep-ca52', 'assembly-ad79', 'sd-supervisor-d4', 'sd-city-council-d4', 'sdusd-measure-m'],
    { 'us-rep-ca51': 52, 'us-rep-ca52': 48 },
  ),
};
