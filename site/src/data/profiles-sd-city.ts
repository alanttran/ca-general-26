import type { BallotProfile } from './ballot-profiles';
import { sd } from './profiles-sd-wave2';

/**
 * Every remaining ZIP mainly in the City of San Diego, built from the Registrar’s Nov 2026 ballot-type
 * map, precinct district codes and sample ballots (see docs/sd-city-scope.md). Contests covering ≥8% of
 * a ZIP’s residents are listed (with `partialShares` when under 95%); smaller slivers are named in the note.
 */
export const SD_CITY_PROFILES: Record<string, BallotProfile> = {
  '92014': sd(
    '92014',
    'Del Mar Heights / Torrey Hills / Del Mar, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is about 56% City of San Diego (Del Mar Heights / Torrey Hills) and 30% City of Del Mar: CA-49, Senate 38, Assembly 77 and County Board of Education District 5 for everyone. There is no San Diego City Council race (District 1 isn’t up this year) and no SDUSD Measure M. Other seats depend on your address: about 81% vote for the Del Mar Union School board, 65% for San Dieguito Union High Trustee Area 3, and 30% (the City of Del Mar) for Del Mar City Council. Smaller slivers in Solana Beach also vote on Solana Beach Council District 4 (~5%) and Solana Beach Measure C (~7%), which we don’t cover. Trust your official sample ballot over us.',
    ['us-rep-ca49', 'senate-sd38', 'assembly-ad77', 'sd-county-board-ed-d5', 'sduhsd-trustee-area-3', 'del-mar-usd-board', 'del-mar-city-council'],
    { 'sduhsd-trustee-area-3': 65, 'del-mar-usd-board': 81, 'del-mar-city-council': 30 },
  ),
  '92037': sd(
    '92037',
    'La Jolla, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-50, Assembly 77, Community College District A, SDUSD District C and SDUSD Measure M for everyone. About 88% are in Senate 38 and 12% in Senate 40. Most of La Jolla is in City Council District 1, which isn’t up this year; about 12% vote for District 6. A sliver of about 2% is in CA-49 instead. Trust your official sample ballot over us.',
    ['us-rep-ca50', 'senate-sd38', 'senate-sd40', 'assembly-ad77', 'sdccd-district-a', 'sdusd-district-c', 'sd-city-council-d6', 'sdusd-measure-m'],
    { 'senate-sd38': 88, 'senate-sd40': 12, 'sd-city-council-d6': 12 },
  ),
  '92092': sd(
    '92092',
    'UC San Diego campus',
    'Built from the county’s ballot-type map for this campus ZIP, where most residents live in student housing. Its one ballot type has the same local contests as La Jolla’s sample ballot: CA-49, Senate 38, Assembly 77, Community College District A, SDUSD District C and SDUSD Measure M. There is no City Council race (District 1 isn’t up this year). Trust your official sample ballot over us.',
    ['us-rep-ca49', 'senate-sd38', 'assembly-ad77', 'sdccd-district-a', 'sdusd-district-c', 'sdusd-measure-m'],
  ),
  '92093': sd(
    '92093',
    'UC San Diego campus',
    'Built from the county’s ballot-type map for this campus ZIP, where most residents live in student housing. Its one ballot type has the same local contests as La Jolla’s sample ballot: CA-49, Senate 38, Assembly 77, Community College District A, SDUSD District C and SDUSD Measure M. There is no City Council race (District 1 isn’t up this year). Trust your official sample ballot over us.',
    ['us-rep-ca49', 'senate-sd38', 'assembly-ad77', 'sdccd-district-a', 'sdusd-district-c', 'sdusd-measure-m'],
  ),
  '92101': sd(
    '92101',
    'Downtown / Little Italy / East Village, San Diego',
    'Built from the county’s sample ballots for this ZIP: SDUSD Measure M for everyone, with CA-50 and Assembly 77 for about 90% of residents and CA-51 and Assembly 78 for the other 10%. There is no State Senate race (District 39 isn’t up until 2028) and no City Council race (Downtown is in District 3, which isn’t up this year). About 21% also vote for Community College District C and 10% for Supervisor District 4; most Downtown residents have no other local candidate race. Trust your official sample ballot over us.',
    ['us-rep-ca50', 'us-rep-ca51', 'assembly-ad77', 'assembly-ad78', 'sdccd-district-c', 'sd-supervisor-d4', 'sdusd-measure-m'],
    { 'us-rep-ca50': 90, 'us-rep-ca51': 10, 'assembly-ad77': 90, 'assembly-ad78': 10, 'sdccd-district-c': 21, 'sd-supervisor-d4': 10 },
  ),
  '92102': sd(
    '92102',
    'Golden Hill / Sherman Heights / Stockton, San Diego',
    'Built from the county’s sample ballots for this ZIP: SDUSD Measure M for everyone. The rest depends on your address: CA-52 (~67%) or CA-51 (~33%); Senate 18 for about 73% (the rest are in District 39, which isn’t up until 2028); Assembly 79 (~40%), 78 (~33%) or 80 (~27%). About 27% vote for City Council District 4 and Supervisor District 4, 19% for Council District 8, and 8% for County Board of Education District 3. The rest of the ZIP is in odd-numbered council districts, which aren’t up this year. Trust your official sample ballot over us.',
    ['us-rep-ca51', 'us-rep-ca52', 'senate-sd18', 'assembly-ad78', 'assembly-ad79', 'assembly-ad80', 'sd-county-board-ed-d3', 'sd-supervisor-d4', 'sd-city-council-d4', 'sd-city-council-d8', 'sdusd-measure-m'],
    {
      'us-rep-ca51': 33, 'us-rep-ca52': 67, 'senate-sd18': 73, 'assembly-ad78': 33, 'assembly-ad79': 40, 'assembly-ad80': 27,
      'sd-county-board-ed-d3': 8, 'sd-supervisor-d4': 27, 'sd-city-council-d4': 27, 'sd-city-council-d8': 19,
    },
  ),
  '92103': sd(
    '92103',
    'Hillcrest / Mission Hills / Bankers Hill, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-51, Assembly 78, Community College District C, Supervisor District 4 and SDUSD Measure M. There is no State Senate race (District 39 isn’t up until 2028) and no City Council race (District 3 isn’t up this year). Trust your official sample ballot over us.',
    ['us-rep-ca51', 'assembly-ad78', 'sdccd-district-c', 'sd-supervisor-d4', 'sdusd-measure-m'],
  ),
  '92104': sd(
    '92104',
    'North Park / South Park, San Diego',
    'Built from the county’s sample ballots for this ZIP: Supervisor District 4 and SDUSD Measure M for nearly everyone. The rest depends on your address: CA-51 (~81%) or CA-52 (~19%), Assembly 78 (~75%) or 79 (~25%). About 32% vote for Community College District C, 22% for County Board of Education District 3, 14% for SDUSD District B and 11% for Senate 18. Most residents have no State Senate race (District 39 isn’t up until 2028), and there is no City Council race (the ZIP is in odd-numbered districts, which aren’t up this year). Trust your official sample ballot over us.',
    ['us-rep-ca51', 'us-rep-ca52', 'senate-sd18', 'assembly-ad78', 'assembly-ad79', 'sd-county-board-ed-d3', 'sdccd-district-c', 'sdusd-district-b', 'sd-supervisor-d4', 'sdusd-measure-m'],
    {
      'us-rep-ca51': 81, 'us-rep-ca52': 19, 'senate-sd18': 11, 'assembly-ad78': 75, 'assembly-ad79': 25,
      'sd-county-board-ed-d3': 22, 'sdccd-district-c': 32, 'sdusd-district-b': 14,
    },
  ),
  '92105': sd(
    '92105',
    'City Heights, San Diego',
    'Built from the county’s sample ballots for this ZIP: Assembly 79, County Board of Education District 3, Supervisor District 4 and SDUSD Measure M for everyone, with CA-52 for about 84% and CA-51 for 16%. There is no State Senate race for most residents (District 39 isn’t up until 2028). Most of City Heights is in City Council District 9, which isn’t up this year; about 21% vote for District 4. Smaller slivers also vote on Senate 18 (~4%) or SDUSD District B (~4%), which we don’t cover here. Trust your official sample ballot over us.',
    ['us-rep-ca51', 'us-rep-ca52', 'assembly-ad79', 'sd-county-board-ed-d3', 'sd-supervisor-d4', 'sd-city-council-d4', 'sdusd-measure-m'],
    { 'us-rep-ca51': 16, 'us-rep-ca52': 84, 'sd-city-council-d4': 21 },
  ),
  '92106': sd(
    '92106',
    'Point Loma, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-50, Assembly 77, Community College District C, SDUSD District C, City Council District 2 and SDUSD Measure M. There is no State Senate race (District 39 isn’t up until 2028). Trust your official sample ballot over us.',
    ['us-rep-ca50', 'assembly-ad77', 'sdccd-district-c', 'sdusd-district-c', 'sd-city-council-d2', 'sdusd-measure-m'],
  ),
  '92107': sd(
    '92107',
    'Ocean Beach, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-50, Assembly 77, Community College District C, SDUSD District C, City Council District 2 and SDUSD Measure M. There is no State Senate race (District 39 isn’t up until 2028). Trust your official sample ballot over us.',
    ['us-rep-ca50', 'assembly-ad77', 'sdccd-district-c', 'sdusd-district-c', 'sd-city-council-d2', 'sdusd-measure-m'],
  ),
  '92108': sd(
    '92108',
    'Mission Valley, San Diego',
    'Built from the county’s sample ballots for this ZIP: Assembly 78, Supervisor District 4 and SDUSD Measure M for everyone, with CA-51 for about 89% and CA-50 for 11%. There is no State Senate race for most residents (District 39 isn’t up until 2028) and no City Council race (Mission Valley is in odd-numbered districts, which aren’t up this year). School seats depend on your address: about 88% vote for SDUSD District B, 64% for Community College District C and 21% for County Board of Education District 3. A sliver of about 6% also votes on Senate 38, which we don’t cover here. Trust your official sample ballot over us.',
    ['us-rep-ca50', 'us-rep-ca51', 'assembly-ad78', 'sd-county-board-ed-d3', 'sdccd-district-c', 'sdusd-district-b', 'sd-supervisor-d4', 'sdusd-measure-m'],
    { 'us-rep-ca50': 11, 'us-rep-ca51': 89, 'sd-county-board-ed-d3': 21, 'sdccd-district-c': 64, 'sdusd-district-b': 88 },
  ),
  '92109': sd(
    '92109',
    'Pacific Beach / Mission Beach, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-50, Senate 38, Assembly 77, SDUSD District C and SDUSD Measure M. Most residents vote for Community College District A (~91%) and have no City Council race (District 1 isn’t up this year); about 9% vote for Community College District C and City Council District 2 instead. Trust your official sample ballot over us.',
    ['us-rep-ca50', 'senate-sd38', 'assembly-ad77', 'sdccd-district-a', 'sdccd-district-c', 'sdusd-district-c', 'sd-city-council-d2', 'sdusd-measure-m'],
    { 'sdccd-district-a': 91, 'sdccd-district-c': 9, 'sd-city-council-d2': 9 },
  ),
  '92110': sd(
    '92110',
    'Bay Park / Morena / Old Town, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-50, Community College District C and SDUSD Measure M for nearly everyone. The rest depends on your address: Senate 38 for about 58% (the rest are in District 39, which isn’t up until 2028); Assembly 78 (~64%) or 77 (~36%); Supervisor District 4 (~64%); City Council District 2 (~63%; the rest are in an odd-numbered district that isn’t up); and SDUSD District C (~33%). A sliver of about 7% is in CA-51 instead. Trust your official sample ballot over us.',
    ['us-rep-ca50', 'senate-sd38', 'assembly-ad77', 'assembly-ad78', 'sdccd-district-c', 'sdusd-district-c', 'sd-supervisor-d4', 'sd-city-council-d2', 'sdusd-measure-m'],
    {
      'us-rep-ca50': 93, 'senate-sd38': 58, 'assembly-ad77': 36, 'assembly-ad78': 64,
      'sdusd-district-c': 33, 'sd-supervisor-d4': 64, 'sd-city-council-d2': 63,
    },
  ),
  '92113': sd(
    '92113',
    'Logan Heights / Barrio Logan / Southcrest, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-52 and SDUSD Measure M for nearly everyone, with Senate 18 for about 84% (the rest are in District 39, which isn’t up until 2028) and Assembly 79 (~61%) or 80 (~34%). About 54% vote for City Council District 8 and 36% for District 4; the rest are in an odd-numbered district that isn’t up. About 12% also vote for Supervisor District 4. A sliver of about 5% near Downtown is in CA-50 and Assembly 77 instead, which we don’t list here. Trust your official sample ballot over us.',
    ['us-rep-ca52', 'senate-sd18', 'assembly-ad79', 'assembly-ad80', 'sd-supervisor-d4', 'sd-city-council-d4', 'sd-city-council-d8', 'sdusd-measure-m'],
    { 'senate-sd18': 84, 'assembly-ad79': 61, 'assembly-ad80': 34, 'sd-supervisor-d4': 12, 'sd-city-council-d4': 36, 'sd-city-council-d8': 54 },
  ),
  '92114': sd(
    '92114',
    'Encanto / Skyline / Lomita / Bay Terraces, San Diego',
    'Built from the county’s sample ballots for this ZIP: Assembly 79, Supervisor District 4, City Council District 4 and SDUSD Measure M, with CA-52 for about 57% and CA-51 for 43%. There is no State Senate race (District 39 isn’t up until 2028). About 26% also vote for County Board of Education District 3. Smaller slivers on the Lemon Grove / La Mesa edge also vote on Grossmont-Cuyamaca College Trustee Area 5 and Measure G (~5%), Grossmont Healthcare District Zone 2 (~4%) or a La Mesa-Spring Valley School District bond (~2%), which we don’t cover; those residents don’t get Measure M. Trust your official sample ballot over us.',
    ['us-rep-ca51', 'us-rep-ca52', 'assembly-ad79', 'sd-county-board-ed-d3', 'sd-supervisor-d4', 'sd-city-council-d4', 'sdusd-measure-m'],
    { 'us-rep-ca51': 43, 'us-rep-ca52': 57, 'sd-county-board-ed-d3': 26 },
  ),
  '92115': sd(
    '92115',
    'College Area / Rolando / El Cerrito, San Diego',
    'Built from the county’s sample ballots for this ZIP: County Board of Education District 3, Supervisor District 4 and SDUSD Measure M for nearly everyone, with CA-51 for about 86% and CA-52 for 14%, and Assembly 79 (~73%) or 78 (~27%). About 53% also vote for SDUSD District B. There is no State Senate race (District 39 isn’t up until 2028), and most of the ZIP has no City Council race (it’s mainly in District 9, which isn’t up this year). Smaller slivers also vote on City Council District 4 (~5%) or Grossmont-Cuyamaca College Trustee Area 5 and Measure G (~4%), which we don’t cover here. Trust your official sample ballot over us.',
    ['us-rep-ca51', 'us-rep-ca52', 'assembly-ad78', 'assembly-ad79', 'sd-county-board-ed-d3', 'sdusd-district-b', 'sd-supervisor-d4', 'sdusd-measure-m'],
    { 'us-rep-ca51': 86, 'us-rep-ca52': 14, 'assembly-ad78': 27, 'assembly-ad79': 73, 'sdusd-district-b': 53 },
  ),
  '92117': sd(
    '92117',
    'Clairemont, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-50, Assembly 78, Community College District A, Supervisor District 4, City Council District 2 and SDUSD Measure M. About 36% also vote for Senate 38 (the rest are in District 39, which isn’t up until 2028), and about 10% for SDUSD District C. A sliver of about 1% votes for City Council District 6 instead of District 2. Trust your official sample ballot over us.',
    ['us-rep-ca50', 'senate-sd38', 'assembly-ad78', 'sdccd-district-a', 'sdusd-district-c', 'sd-supervisor-d4', 'sd-city-council-d2', 'sdusd-measure-m'],
    { 'senate-sd38': 36, 'sdusd-district-c': 10 },
  ),
  '92119': sd(
    '92119',
    'San Carlos, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-51, Assembly 78, County Board of Education District 3, SDUSD District B and SDUSD Measure M. There is no State Senate race (District 39 isn’t up until 2028) and no City Council race (District 7 isn’t up this year). Trust your official sample ballot over us.',
    ['us-rep-ca51', 'assembly-ad78', 'sd-county-board-ed-d3', 'sdusd-district-b', 'sdusd-measure-m'],
  ),
  '92120': sd(
    '92120',
    'Del Cerro / Allied Gardens / Grantville, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-51, Assembly 78, County Board of Education District 3, SDUSD District B and SDUSD Measure M. There is no State Senate race (District 39 isn’t up until 2028) and no City Council race (District 7 isn’t up this year). A sliver of about 6% also votes for Supervisor District 4, which we don’t list here. Trust your official sample ballot over us.',
    ['us-rep-ca51', 'assembly-ad78', 'sd-county-board-ed-d3', 'sdusd-district-b', 'sdusd-measure-m'],
  ),
  '92121': sd(
    '92121',
    'Sorrento Valley / Sorrento Mesa, San Diego',
    'Built from the county’s sample ballots for this ZIP: Senate 40, City Council District 6 and SDUSD Measure M for everyone. The rest depends on your address: CA-50 (~87%) or CA-49 (~13%), and Assembly 78 (~59%) or 77 (~41%). About 41% also vote for Community College District A and SDUSD District C. Trust your official sample ballot over us.',
    ['us-rep-ca49', 'us-rep-ca50', 'senate-sd40', 'assembly-ad77', 'assembly-ad78', 'sdccd-district-a', 'sdusd-district-c', 'sd-city-council-d6', 'sdusd-measure-m'],
    { 'us-rep-ca49': 13, 'us-rep-ca50': 87, 'assembly-ad77': 41, 'assembly-ad78': 59, 'sdccd-district-a': 41, 'sdusd-district-c': 41 },
  ),
  '92122': sd(
    '92122',
    'University City, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-50, Senate 40, Assembly 77, Community College District A, SDUSD District C, City Council District 6 and SDUSD Measure M. Trust your official sample ballot over us.',
    ['us-rep-ca50', 'senate-sd40', 'assembly-ad77', 'sdccd-district-a', 'sdusd-district-c', 'sd-city-council-d6', 'sdusd-measure-m'],
  ),
  '92123': sd(
    '92123',
    'Serra Mesa / Kearny Mesa, San Diego',
    'Built from the county’s sample ballots for this ZIP: Assembly 78, SDUSD District B and SDUSD Measure M for everyone, with CA-51 for about 87% and CA-50 for 13%. There is no State Senate race (District 39 isn’t up until 2028). Most of the ZIP has no City Council race (District 7 isn’t up this year); about 13% vote for District 6. About 17% also vote for Supervisor District 4 and 15% for Community College District C. Trust your official sample ballot over us.',
    ['us-rep-ca50', 'us-rep-ca51', 'assembly-ad78', 'sdccd-district-c', 'sdusd-district-b', 'sd-supervisor-d4', 'sd-city-council-d6', 'sdusd-measure-m'],
    { 'us-rep-ca50': 13, 'us-rep-ca51': 87, 'sdccd-district-c': 15, 'sd-supervisor-d4': 17, 'sd-city-council-d6': 13 },
  ),
  '92124': sd(
    '92124',
    'Tierrasanta, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-51, Assembly 78, County Board of Education District 3, SDUSD District B and SDUSD Measure M. There is no State Senate race (District 39 isn’t up until 2028) and no City Council race (District 7 isn’t up this year). Trust your official sample ballot over us.',
    ['us-rep-ca51', 'assembly-ad78', 'sd-county-board-ed-d3', 'sdusd-district-b', 'sdusd-measure-m'],
  ),
  '92127': sd(
    '92127',
    'Rancho Bernardo West / Black Mountain Ranch / Santaluz, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is about 60% City of San Diego and 40% unincorporated (4S Ranch and the Rancho Santa Fe edge): CA-49, Senate 40, Assembly 76 and Palomar College Trustee Area 1 for nearly everyone. There is no City Council race (the city part is in an odd-numbered district that isn’t up this year) and no SDUSD Measure M. About 50% vote for Poway Unified Trustee Area C; the rest have no school-board race. About 38% vote for Palomar Health Division 7; most of the rest are in Division 6, which has no seat up. Smaller slivers also vote on Palomar Health Division 3 (~3%) or County Board of Education District 5 (~2%), which we don’t cover. Trust your official sample ballot over us.',
    ['us-rep-ca49', 'senate-sd40', 'assembly-ad76', 'palomar-ccd-area-1', 'poway-usd-area-c', 'palomar-health-div-7'],
    { 'poway-usd-area-c': 50, 'palomar-health-div-7': 38 },
  ),
  '92128': sd(
    '92128',
    'Rancho Bernardo / Carmel Mountain Ranch / Sabre Springs, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-50 and Senate 40 for everyone, with Assembly 76 (~78%) or 75 (~22%). There is no City Council race (District 5 isn’t up this year) and no SDUSD Measure M. Other seats depend on your address: Poway Unified Trustee Area B (~45%), D (~32%) or C (~10%); Palomar College Trustee Area 1 (~45%); and Palomar Health Division 5 (~89%) or 7 (~11%). Trust your official sample ballot over us.',
    [
      'us-rep-ca50', 'senate-sd40', 'assembly-ad75', 'assembly-ad76',
      'palomar-ccd-area-1', 'poway-usd-area-b', 'poway-usd-area-c', 'poway-usd-area-d',
      'palomar-health-div-5', 'palomar-health-div-7',
    ],
    {
      'assembly-ad75': 22, 'assembly-ad76': 78, 'palomar-ccd-area-1': 45,
      'poway-usd-area-b': 45, 'poway-usd-area-c': 10, 'poway-usd-area-d': 32,
      'palomar-health-div-5': 89, 'palomar-health-div-7': 11,
    },
  ),
  '92129': sd(
    '92129',
    'Rancho Peñasquitos / Torrey Highlands, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-49 and Assembly 76 for nearly everyone, with Senate 40 (~87%) or 38 (~13%). There is no City Council race for most residents (District 5 isn’t up this year) and no SDUSD Measure M. Other seats depend on your address: Palomar College Trustee Area 1 (~86%), Poway Unified Trustee Area D (~50%) or C (~18%), and Palomar Health Division 7 (~55%). A sliver of about 4% is in CA-50 and Assembly 78 instead, and also votes on City Council District 6 and SDUSD Measure M; we don’t list those here. Trust your official sample ballot over us.',
    ['us-rep-ca49', 'senate-sd38', 'senate-sd40', 'assembly-ad76', 'palomar-ccd-area-1', 'poway-usd-area-c', 'poway-usd-area-d', 'palomar-health-div-7'],
    {
      'senate-sd38': 13, 'senate-sd40': 87, 'palomar-ccd-area-1': 86,
      'poway-usd-area-c': 18, 'poway-usd-area-d': 50, 'palomar-health-div-7': 55,
    },
  ),
  '92136': sd(
    '92136',
    'Naval Base San Diego, San Diego',
    'Built from the county’s sample ballots for this ZIP, where most residents live on base: CA-52, Senate 18, Assembly 80, City Council District 8 and SDUSD Measure M. Trust your official sample ballot over us.',
    ['us-rep-ca52', 'senate-sd18', 'assembly-ad80', 'sd-city-council-d8', 'sdusd-measure-m'],
  ),
  '92140': sd(
    '92140',
    'MCRD / Loma Portal, San Diego',
    'Built from the county’s sample ballots for this ZIP, where most residents live on base: CA-50, Assembly 77, Community College District C, SDUSD District C, City Council District 2 and SDUSD Measure M. There is no State Senate race (District 39 isn’t up until 2028). Trust your official sample ballot over us.',
    ['us-rep-ca50', 'assembly-ad77', 'sdccd-district-c', 'sdusd-district-c', 'sd-city-council-d2', 'sdusd-measure-m'],
  ),
  '92145': sd(
    '92145',
    'MCAS Miramar, San Diego',
    'Built from the county’s ballot-type map for this ZIP, where most residents live on base (its sample ballot wasn’t checked, but each contest is confirmed on nearby ballots): CA-50, Senate 40, Assembly 78, City Council District 6 and SDUSD Measure M. Trust your official sample ballot over us.',
    ['us-rep-ca50', 'senate-sd40', 'assembly-ad78', 'sd-city-council-d6', 'sdusd-measure-m'],
  ),
  '92154': sd(
    '92154',
    'Otay Mesa / Nestor, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-52, Senate 18 and Assembly 80 for nearly everyone, and City Council District 8 for the City of San Diego part (~96%). There is no SDUSD Measure M here. School seats depend on your address: about 29% vote for Chula Vista Elementary seats 1, 3 and 5, 25% for Southwestern College Trustee Area 4, and 20% for the San Ysidro School District board. A sliver of about 4% is in Assembly 75 instead, which we don’t list here. Trust your official sample ballot over us.',
    ['us-rep-ca52', 'senate-sd18', 'assembly-ad80', 'swc-trustee-area-4', 'cvesd-seat-1', 'cvesd-seat-3', 'cvesd-seat-5', 'san-ysidro-sd-board', 'sd-city-council-d8'],
    { 'swc-trustee-area-4': 25, 'cvesd-seat-1': 29, 'cvesd-seat-3': 29, 'cvesd-seat-5': 29, 'san-ysidro-sd-board': 20 },
  ),
  '92173': sd(
    '92173',
    'San Ysidro, San Diego',
    'Built from the county’s sample ballots for this ZIP: CA-52, Senate 18, Assembly 80 and City Council District 8. About 76% also vote for the San Ysidro School District board (vote for 3). There is no SDUSD Measure M here. Trust your official sample ballot over us.',
    ['us-rep-ca52', 'senate-sd18', 'assembly-ad80', 'san-ysidro-sd-board', 'sd-city-council-d8'],
    { 'san-ysidro-sd-board': 76 },
  ),
};
