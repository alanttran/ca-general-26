import type { BallotProfile } from './ballot-profiles';
import { sd } from './profiles-sd-wave2';

/**
 * The remaining ZIPs mainly in the City of Escondido (92026 is in SD_WAVE2_PROFILES), built from the
 * Registrar’s Nov 2026 ballot-type map, precinct district codes and sample ballots (see docs/escondido-scope.md).
 * Contests covering ≥8% of a ZIP’s residents are listed (with `partialShares` when under 95%); smaller slivers
 * are named in the note.
 */
export const ESCONDIDO_PROFILES: Record<string, BallotProfile> = {
  '92025': sd(
    '92025',
    'Central and south Escondido, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is about 89% City of Escondido: Senate 40 and Assembly 76 for everyone, with CA-48 (~73%) or CA-50 (~27%), and Supervisor District 5 and Escondido Mayor for about 92%. About 24% also vote for City Council District 1; the rest of the city part is in Districts 3 and 4, which aren’t up this year. Other seats depend on your address: Escondido Union High Trustee Area 1 (~44%) or Area 2 (~8%), Escondido Union School Trustee Area 2 (~11%), Rincon del Diablo Water Division 3 (~40%) and Palomar Health Division 3 (~17%). There is no Palomar College race here. Trust your official sample ballot over us.',
    [
      'us-rep-ca48', 'us-rep-ca50', 'senate-sd40', 'assembly-ad76', 'sd-supervisor-d5',
      'euhsd-trustee-area-1', 'euhsd-trustee-area-2', 'eusd-trustee-area-2',
      'escondido-mayor', 'escondido-council-d1', 'rincon-water-div-3', 'palomar-health-div-3',
    ],
    {
      'us-rep-ca48': 73, 'us-rep-ca50': 27, 'sd-supervisor-d5': 93,
      'euhsd-trustee-area-1': 44, 'euhsd-trustee-area-2': 8, 'eusd-trustee-area-2': 11,
      'escondido-mayor': 92, 'escondido-council-d1': 24, 'rincon-water-div-3': 40, 'palomar-health-div-3': 17,
    },
  ),
  '92027': sd(
    '92027',
    'East Escondido, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is about 93% City of Escondido: Senate 40, Assembly 76 and Supervisor District 5 for nearly everyone, with CA-48 (~71%) or CA-50 (~29%), and Escondido Mayor for about 94%. About 34% vote for City Council District 2 and 27% for District 1; the rest are in Districts 3 and 4, which aren’t up this year. School seats depend on your address: Escondido Union School Trustee Area 4 (~54%) or Area 5 (~13%), and Escondido Union High Trustee Area 5 (~14%). About 9% also vote for Rincon del Diablo Water Division 3. Smaller slivers vote on Escondido Union High Trustee Area 1 (~7%), or Assembly 75 and Valley Center-Pauma Unified Trustee Area 4 (~1%), which we don’t list here. Trust your official sample ballot over us.',
    [
      'us-rep-ca48', 'us-rep-ca50', 'senate-sd40', 'assembly-ad76', 'sd-supervisor-d5',
      'euhsd-trustee-area-5', 'eusd-trustee-area-4', 'eusd-trustee-area-5',
      'escondido-mayor', 'escondido-council-d2', 'escondido-council-d1', 'rincon-water-div-3',
    ],
    {
      'us-rep-ca48': 71, 'us-rep-ca50': 29, 'euhsd-trustee-area-5': 14, 'eusd-trustee-area-4': 54, 'eusd-trustee-area-5': 13,
      'escondido-mayor': 94, 'escondido-council-d2': 34, 'escondido-council-d1': 27, 'rincon-water-div-3': 9,
    },
  ),
  '92029': sd(
    '92029',
    'Southwest Escondido / Felicita / Harmony Grove, San Diego',
    'Built from the county’s sample ballots for this ZIP, which is about 65% City of Escondido and 35% unincorporated (Felicita Park, Harmony Grove, Del Dios and Elfin Forest): Assembly 76 for everyone, and Senate 40, Escondido Union High Trustee Area 2, Escondido Union School Trustee Area 2 and Palomar Health Division 3 for nearly everyone. Most residents are in CA-50 (~84%; ~14% are in CA-48). About 69% vote for Supervisor District 5 (the rest are in Districts 2 and 3, which aren’t up), 67% for Palomar College Trustee Area 1 and 66% for Escondido Mayor. There is no City Council race (the city part is in Districts 3 and 4). A sliver of about 3% in Elfin Forest is in CA-49 and Senate 38 and votes on County Board of Education District 5 and the Rancho Santa Fe School District board, which we don’t list here. Trust your official sample ballot over us.',
    [
      'us-rep-ca48', 'us-rep-ca50', 'senate-sd40', 'assembly-ad76', 'sd-supervisor-d5',
      'palomar-ccd-area-1', 'euhsd-trustee-area-2', 'eusd-trustee-area-2',
      'escondido-mayor', 'palomar-health-div-3',
    ],
    { 'us-rep-ca48': 14, 'us-rep-ca50': 84, 'sd-supervisor-d5': 69, 'palomar-ccd-area-1': 67, 'escondido-mayor': 66 },
  ),
};
