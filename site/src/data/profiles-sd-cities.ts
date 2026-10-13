import type { BallotProfile } from './ballot-profiles';
import { sd } from './profiles-sd-wave2';

/**
 * The remaining ZIPs mainly in Chula Vista, Oceanside, El Cajon, La Mesa, Santee and Vista, built from the
 * Registrar’s Nov 2026 ballot-type map, precinct district codes and sample ballots (see docs/sd-cities-scope.md).
 * Contests covering ≥8% of a ZIP’s residents are listed (with `partialShares` when under 95%); smaller slivers
 * are named in the note.
 */
export const SD_CITIES_PROFILES: Record<string, BallotProfile> = {
  '91910': sd(
    '91910',
    'Chula Vista (northwest and central), San Diego',
    'Built from the county’s sample ballots for this ZIP, which is about 98% City of Chula Vista: CA-52, Senate 18, Assembly 80, Chula Vista Mayor and City Attorney, and Chula Vista Elementary seats 1, 3 and 5 for everyone. Most residents vote for City Council District 2 (~80%), and about 18% for District 1. Other seats depend on your address: Southwestern College Trustee Area 1 (~52%) or Area 4 (~22%), and Sweetwater Union High Trustee Area 1 (~49%). A sliver of about 1% also votes for the Sweetwater Community Planning Group, which we don’t list here. Trust your official sample ballot over us.',
    [
      'us-rep-ca52', 'senate-sd18', 'assembly-ad80',
      'swc-trustee-area-1', 'swc-trustee-area-4', 'suhsd-trustee-area-1', 'cvesd-seat-1', 'cvesd-seat-3', 'cvesd-seat-5',
      'chula-vista-mayor', 'chula-vista-council-d1', 'chula-vista-council-d2', 'chula-vista-city-attorney',
    ],
    {
      'swc-trustee-area-1': 52, 'swc-trustee-area-4': 22, 'suhsd-trustee-area-1': 49,
      'chula-vista-council-d1': 18, 'chula-vista-council-d2': 80,
    },
  ),
  '91913': sd(
    '91913',
    'Otay Ranch / East Chula Vista, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is all City of Chula Vista: CA-52, Senate 18, Assembly 80, Chula Vista Mayor and City Attorney, and Chula Vista Elementary seats 1, 3 and 5 for everyone. About 70% vote for Southwestern College Trustee Area 4, 18% for City Council District 1 (the rest are in Districts 3 and 4, which aren’t up this year) and 13% for Otay Water Division 3. Trust your official sample ballot over us.',
    [
      'us-rep-ca52', 'senate-sd18', 'assembly-ad80',
      'swc-trustee-area-4', 'cvesd-seat-1', 'cvesd-seat-3', 'cvesd-seat-5',
      'chula-vista-mayor', 'chula-vista-council-d1', 'chula-vista-city-attorney', 'otay-water-div-3',
    ],
    { 'swc-trustee-area-4': 70, 'chula-vista-council-d1': 18, 'otay-water-div-3': 13 },
  ),
  '91915': sd(
    '91915',
    'Eastlake / Otay Ranch east, Chula Vista, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is all City of Chula Vista: CA-52, Senate 18, Assembly 80, Chula Vista Mayor and City Attorney, and Chula Vista Elementary seats 1, 3 and 5 for everyone. About 59% also vote for City Council District 1; the rest are in a district that isn’t up this year. There is no Southwestern College or Otay Water race here. Trust your official sample ballot over us.',
    [
      'us-rep-ca52', 'senate-sd18', 'assembly-ad80',
      'cvesd-seat-1', 'cvesd-seat-3', 'cvesd-seat-5',
      'chula-vista-mayor', 'chula-vista-council-d1', 'chula-vista-city-attorney',
    ],
    { 'chula-vista-council-d1': 59 },
  ),
  '91941': sd(
    '91941',
    'La Mesa east / Mount Helix edge, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is about 60% City of La Mesa and 40% unincorporated (Mount Helix and Casa de Oro edge): CA-51, Supervisor District 4, County Board of Education District 3 and Grossmont-Cuyamaca College Measure G for everyone, with Assembly 79 (~65%) or 75 (~35%). There is no State Senate race here. The city part (~60%) votes for La Mesa Mayor, City Council and City Treasurer. Other seats depend on your address: La Mesa-Spring Valley Trustee Area 3 (~41%) or Area 2 (~22%), Helix Water Division 4 (~41%) or Division 2 (~16%), and La Mesa-Spring Valley Measure AA (~69%). About 5% also vote for Grossmont-Cuyamaca College Trustee Area 5 or Grossmont Healthcare Zone 2, which we don’t list here. Trust your official sample ballot over us.',
    [
      'us-rep-ca51', 'assembly-ad75', 'assembly-ad79',
      'sd-county-board-ed-d3', 'lmsvsd-trustee-area-2', 'lmsvsd-trustee-area-3',
      'sd-supervisor-d4', 'la-mesa-mayor', 'la-mesa-city-council', 'la-mesa-city-treasurer',
      'helix-water-div-2', 'helix-water-div-4',
      'gcccd-measure-g', 'lmsvsd-measure-aa',
    ],
    {
      'assembly-ad75': 35, 'assembly-ad79': 65, 'lmsvsd-trustee-area-2': 22, 'lmsvsd-trustee-area-3': 41,
      'la-mesa-mayor': 60, 'la-mesa-city-council': 60, 'la-mesa-city-treasurer': 60,
      'helix-water-div-2': 16, 'helix-water-div-4': 41, 'lmsvsd-measure-aa': 69,
    },
  ),
  '91942': sd(
    '91942',
    'La Mesa west / Grossmont, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is all City of La Mesa: CA-51, Assembly 79, Supervisor District 4, County Board of Education District 3, La Mesa Mayor, City Council and City Treasurer, Grossmont-Cuyamaca College Measure G and La Mesa-Spring Valley Measure AA for everyone. There is no State Senate race here. Other seats depend on your address: La Mesa-Spring Valley Trustee Area 2 (~49%) or Area 1 (~46%), and Helix Water Division 2 (~53%) or Division 4 (~35%). About 5% vote for La Mesa-Spring Valley Trustee Area 3 instead, which we don’t list here. Trust your official sample ballot over us.',
    [
      'us-rep-ca51', 'assembly-ad79',
      'sd-county-board-ed-d3', 'lmsvsd-trustee-area-1', 'lmsvsd-trustee-area-2',
      'sd-supervisor-d4', 'la-mesa-mayor', 'la-mesa-city-council', 'la-mesa-city-treasurer',
      'helix-water-div-2', 'helix-water-div-4',
      'gcccd-measure-g', 'lmsvsd-measure-aa',
    ],
    { 'lmsvsd-trustee-area-1': 46, 'lmsvsd-trustee-area-2': 49, 'helix-water-div-2': 53, 'helix-water-div-4': 35 },
  ),
  '92020': sd(
    '92020',
    'El Cajon central and south, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is about 94% City of El Cajon: CA-51, County Board of Education District 3 and Grossmont-Cuyamaca College Measure G for everyone, El Cajon Mayor for about 95%, and Assembly 79 (~72%) or 78 (~23%). There is no State Senate race here, and Supervisor District 2 isn’t up. About 45% vote for City Council District 1; the rest of the city is in Districts 2 and 4, which aren’t up this year. Other seats depend on your address: Grossmont Union High Trustee Area 3 (~87%), Cajon Valley Union Trustee Area 3 (~34%) or Area 2 (~9%), La Mesa-Spring Valley Trustee Area 1 and Measure AA (~16%), and Helix Water Division 2 (~52%) or Division 4 (~16%). Small slivers (5% or less) are in Assembly 75 or Supervisor District 4, or vote on Santee School District seats and Measure BB or Padre Dam Water Division 1, which we don’t list here. Trust your official sample ballot over us.',
    [
      'us-rep-ca51', 'assembly-ad78', 'assembly-ad79',
      'sd-county-board-ed-d3', 'guhsd-trustee-area-3', 'cajon-valley-trustee-area-2', 'cajon-valley-trustee-area-3', 'lmsvsd-trustee-area-1',
      'el-cajon-mayor', 'el-cajon-council-d1',
      'helix-water-div-2', 'helix-water-div-4',
      'gcccd-measure-g', 'lmsvsd-measure-aa',
    ],
    {
      'assembly-ad78': 23, 'assembly-ad79': 72, 'guhsd-trustee-area-3': 87,
      'cajon-valley-trustee-area-2': 9, 'cajon-valley-trustee-area-3': 34, 'lmsvsd-trustee-area-1': 16,
      'el-cajon-council-d1': 45, 'helix-water-div-2': 52, 'helix-water-div-4': 16, 'lmsvsd-measure-aa': 16,
    },
  ),
  '92054': sd(
    '92054',
    'Oceanside coastal / downtown, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is all City of Oceanside: CA-49, Senate 38, Assembly 74, Supervisor District 5, County Board of Education District 5 and Oceanside Measures R and S for everyone. About 67% vote for City Council District 1 (Oceanside has no mayor race this year). Other seats depend on your address: Oceanside Unified Trustee Area 1 (~54%) or Area 3 (~9%). A sliver of about 1% also votes for Tri-City Healthcare Zone 2, which we don’t list here. Trust your official sample ballot over us.',
    [
      'us-rep-ca49', 'senate-sd38', 'assembly-ad74',
      'sd-county-board-ed-d5', 'oceanside-usd-trustee-area-1', 'oceanside-usd-trustee-area-3',
      'sd-supervisor-d5', 'oceanside-council-d1',
      'oceanside-measure-r', 'oceanside-measure-s',
    ],
    { 'oceanside-usd-trustee-area-1': 54, 'oceanside-usd-trustee-area-3': 9, 'oceanside-council-d1': 67 },
  ),
  '92056': sd(
    '92056',
    'Oceanside east / Rancho del Oro, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is all City of Oceanside: Senate 38, Assembly 74, Supervisor District 5, County Board of Education District 5 and Oceanside Measures R and S for everyone, with CA-49 (~54%) or CA-48 (~46%). Most of this ZIP is in City Council districts that aren’t up this year. Many residents are in Vista Unified rather than Oceanside Unified: about 63% vote on Vista Unified Measure N and 36% for Vista Unified Trustee Area 3, and about 30% vote for Palomar College Trustee Area 5. Small slivers vote for Carlsbad Unified Trustee Area 5 (~6%) or Oceanside Council District 2 (~1%), which we don’t list here. Trust your official sample ballot over us.',
    [
      'us-rep-ca48', 'us-rep-ca49', 'senate-sd38', 'assembly-ad74',
      'sd-county-board-ed-d5', 'palomar-ccd-area-5', 'vista-usd-trustee-area-3',
      'sd-supervisor-d5',
      'oceanside-measure-r', 'oceanside-measure-s', 'vista-usd-measure-n',
    ],
    { 'us-rep-ca48': 46, 'us-rep-ca49': 54, 'palomar-ccd-area-5': 30, 'vista-usd-trustee-area-3': 36, 'vista-usd-measure-n': 63 },
  ),
  '92057': sd(
    '92057',
    'Oceanside north / Mission San Luis Rey, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is all City of Oceanside: CA-49, Senate 38, Assembly 74, Supervisor District 5 and Oceanside Measures R and S for everyone, and County Board of Education District 5 for about 93%. About 51% vote for City Council District 2 and 13% for District 1. Other seats depend on your address: Tri-City Healthcare Zone 2 (~59%), Oceanside Unified Trustee Area 4 (~27%) or Area 3 (~9%), Palomar College Trustee Area 5 (~21%), and Vista Unified Measure N (~17%). About 6% vote for Vista Unified Trustee Area 3, which we don’t list here. Trust your official sample ballot over us.',
    [
      'us-rep-ca49', 'senate-sd38', 'assembly-ad74',
      'sd-county-board-ed-d5', 'palomar-ccd-area-5', 'oceanside-usd-trustee-area-3', 'oceanside-usd-trustee-area-4',
      'sd-supervisor-d5', 'oceanside-council-d1', 'oceanside-council-d2', 'tri-city-healthcare-zone-2',
      'oceanside-measure-r', 'oceanside-measure-s', 'vista-usd-measure-n',
    ],
    {
      'sd-county-board-ed-d5': 93, 'palomar-ccd-area-5': 21, 'oceanside-usd-trustee-area-3': 9, 'oceanside-usd-trustee-area-4': 27,
      'oceanside-council-d1': 13, 'oceanside-council-d2': 51, 'tri-city-healthcare-zone-2': 59, 'vista-usd-measure-n': 17,
    },
  ),
  '92058': sd(
    '92058',
    'Oceanside northeast / Camp Pendleton south, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is about 52% City of Oceanside and 48% Camp Pendleton: CA-49, Senate 38, Assembly 74, Supervisor District 5 and County Board of Education District 5 for everyone. The Oceanside part (~52%) votes on Oceanside Measures R and S and Tri-City Healthcare Zone 2, with City Council District 2 (~27%) or District 1 (~24%). School seats depend on your address: Oceanside Unified Trustee Area 3 (~38%), Area 4 (~27%) or Area 1 (~14%), and Palomar College Trustee Area 5 (~20%). The Camp Pendleton area in Fallbrook Union Elementary (~20%) votes on its Measure K. Trust your official sample ballot over us.',
    [
      'us-rep-ca49', 'senate-sd38', 'assembly-ad74',
      'sd-county-board-ed-d5', 'palomar-ccd-area-5', 'oceanside-usd-trustee-area-1', 'oceanside-usd-trustee-area-3', 'oceanside-usd-trustee-area-4',
      'sd-supervisor-d5', 'oceanside-council-d1', 'oceanside-council-d2', 'tri-city-healthcare-zone-2',
      'oceanside-measure-r', 'oceanside-measure-s', 'fuesd-measure-k',
    ],
    {
      'palomar-ccd-area-5': 20, 'oceanside-usd-trustee-area-1': 14, 'oceanside-usd-trustee-area-3': 38, 'oceanside-usd-trustee-area-4': 27,
      'oceanside-council-d1': 24, 'oceanside-council-d2': 27, 'tri-city-healthcare-zone-2': 52,
      'oceanside-measure-r': 52, 'oceanside-measure-s': 52, 'fuesd-measure-k': 20,
    },
  ),
  '92071': sd(
    '92071',
    'Santee, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is nearly all City of Santee: CA-50, Senate 40, Assembly 75, Grossmont Union High Trustee Area 4, Santee School District seats 1 and 5, Santee Measure Y, Grossmont-Cuyamaca College Measure G and Santee School District Measure BB for everyone. About 26% vote for City Council District 1 and 25% for District 2 (Santee has no mayor race this year, and Districts 3 and 4 aren’t up). About 31% also vote for Padre Dam Water Division 1. Supervisor District 2 isn’t up this year. Trust your official sample ballot over us.',
    [
      'us-rep-ca50', 'senate-sd40', 'assembly-ad75',
      'guhsd-trustee-area-4', 'santee-sd-seat-1', 'santee-sd-seat-5',
      'santee-council-d1', 'santee-council-d2', 'padre-dam-water-div-1',
      'santee-measure-y', 'gcccd-measure-g', 'santee-sd-measure-bb',
    ],
    { 'santee-council-d1': 26, 'santee-council-d2': 25, 'padre-dam-water-div-1': 31 },
  ),
  '92081': sd(
    '92081',
    'Vista south / Shadowridge, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is about 94% City of Vista: Supervisor District 5 and County Board of Education District 5 for everyone, and CA-48, Senate 38, Assembly 74 and Vista Mayor for nearly everyone. About 71% vote for City Council District 4. About 87% vote on Vista Unified Measure N, and about 13% (in San Marcos Unified) for its Trustee Area E. Slivers of 2–3% are in CA-49, Senate 40 or Assembly 76, which we don’t list here. Trust your official sample ballot over us.',
    [
      'us-rep-ca48', 'senate-sd38', 'assembly-ad74',
      'sd-county-board-ed-d5', 'san-marcos-usd-area-e',
      'sd-supervisor-d5', 'vista-mayor', 'vista-council-d4',
      'vista-usd-measure-n',
    ],
    { 'san-marcos-usd-area-e': 13, 'vista-council-d4': 71, 'vista-usd-measure-n': 87 },
  ),
  '92083': sd(
    '92083',
    'Vista west and central, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is about 89% City of Vista: CA-48 and Supervisor District 5 for everyone, County Board of Education District 5 and Vista Unified Measure N for about 95%, and Vista Mayor for about 89%. Most residents are in Senate 38 and Assembly 74 (~89%); about 11% are in Senate 40 and Assembly 76. About 30% vote for City Council District 1 and 11% for District 4. Other seats depend on your address: Vista Irrigation Division 2 (~64%) and Vista Unified Trustee Area 3 (~18%). About 3% vote for San Marcos Unified Trustee Area E, which we don’t list here. Trust your official sample ballot over us.',
    [
      'us-rep-ca48', 'senate-sd38', 'senate-sd40', 'assembly-ad74', 'assembly-ad76',
      'sd-county-board-ed-d5', 'vista-usd-trustee-area-3',
      'sd-supervisor-d5', 'vista-mayor', 'vista-council-d1', 'vista-council-d4', 'vista-irrigation-div-2',
      'vista-usd-measure-n',
    ],
    {
      'senate-sd38': 89, 'senate-sd40': 11, 'assembly-ad74': 89, 'assembly-ad76': 11, 'vista-usd-trustee-area-3': 18,
      'vista-mayor': 89, 'vista-council-d1': 30, 'vista-council-d4': 11, 'vista-irrigation-div-2': 64,
    },
  ),
  '92084': sd(
    '92084',
    'Vista north / Bonsall edge, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is about 73% City of Vista: CA-48, Supervisor District 5, County Board of Education District 5 and Vista Unified Measure N for nearly everyone, and Vista Mayor for about 75%. Most residents are in Senate 38 and Assembly 74 (~75%); about 25% are in Senate 40 and Assembly 76. About 27% vote for City Council District 1 and 23% for Palomar College Trustee Area 5. Small slivers are in CA-49, Assembly 75 or Bonsall Unified Trustee Area B, which we don’t list here. Trust your official sample ballot over us.',
    [
      'us-rep-ca48', 'senate-sd38', 'senate-sd40', 'assembly-ad74', 'assembly-ad76',
      'sd-county-board-ed-d5', 'palomar-ccd-area-5',
      'sd-supervisor-d5', 'vista-mayor', 'vista-council-d1',
      'vista-usd-measure-n',
    ],
    {
      'senate-sd38': 75, 'senate-sd40': 25, 'assembly-ad74': 75, 'assembly-ad76': 24, 'palomar-ccd-area-5': 23,
      'vista-mayor': 75, 'vista-council-d1': 27,
    },
  ),
};
