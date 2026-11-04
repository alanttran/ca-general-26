import type { Race } from '../types/ballot-types';
import { resolveCandidateForPick } from './red-flags';

/**
 * Election results after Nov 3, 2026, keyed by race id. Kept apart from the research so picks never change.
 *
 * - `called`: AP (or, for races AP doesn't call, the county or state once results are certified) has
 *   projected or declared a winner.
 * - `leading`: no call yet; who leads in the latest official count. California counts for weeks, so a
 *   leader can change.
 *
 * `winner` is a candidate's last name (several separated by `, ` for multi-seat races), `Yes`/`No` for
 * measures, or free text for retention (e.g. `All retained`). Updated by the daily results check.
 */
export interface RaceResult {
  status: 'called' | 'leading';
  winner: string;
  /** Who made the call or published the count, e.g. `AP`, `LA County Registrar`, `CA Secretary of State`. */
  source: string;
  /** For `called`: when the call was made, e.g. `Nov 4`. For `leading`: which update, e.g. `Nov 6 update`. */
  when: string;
  url: string;
  /**
   * For `leading`: the leader's share of the vote in that count (a measure's Yes share), e.g. `52.4`.
   * Multi-seat races list one share per name in `winner`, in the same order.
   */
  pct?: number | number[];
}

// Sources (latest count read for each counter). Each helper fills `source`, `when` and `url` for one counter.
const AP_HOUSE = 'https://apnews.com/projects/elections-2026/california-us-house-results/';
const AP_CA = 'https://apnews.com/projects/elections-2026/';
const ap = (winner: string, url: string, when = 'Nov 3'): RaceResult => ({ status: 'called', winner, source: 'AP', when, url });
const lead = (source: string, when: string, url: string) => (winner: string, pct?: number | number[]): RaceResult => ({ status: 'leading', winner, source, when, url, ...(pct === undefined ? {} : { pct }) });
const sos = lead('CA Secretary of State', 'Nov 4, 8:08 a.m. update', 'https://electionresults.sos.ca.gov/');
const sosBm = lead('CA Secretary of State', 'Nov 4, 8:08 a.m. update', 'https://electionresults.sos.ca.gov/returns/ballot-measures');
const sdc = lead('San Diego County Registrar', 'Nov 4, 2:51 a.m. update', 'https://www.livevoterturnout.com/ENR/sandiegocaenr/25/en/Index_25.html');
const lac = lead('LA County Registrar', 'Nov 4, 3:11 a.m. update', 'https://results.lavote.gov/#year=2026&election=4348');
const occ = lead('Orange County Registrar', 'Nov 4, 1:36 a.m. update', 'https://www.livevoterturnout.com/ENR/orangecaenr/24/en/phkv4sV_Index_24.html');
const riv = lead('Riverside County Registrar', 'Nov 4, 4:22 a.m. update', 'https://www.livevoterturnout.com/ENR/riversidecaenr/12/en/Index_12.html');
const plc = lead('Placer County Elections', 'Nov 3 election-night update', 'https://www.placercountyelections.gov/election-results/');
const ala = lead('Alameda County Registrar', 'Nov 4, 2:07 a.m. update', 'https://alamedacountyca.gov/rovresults/260');
const scc = lead('Santa Clara County Registrar', 'Nov 3, 11:22 p.m. update', 'https://results.enr.clarityelections.com/CA/Santa_Clara/127570/web.345435/#/summary');
const cos = lead('Colorado Secretary of State', 'Nov 4, 9:16 a.m. MT update', 'https://results.enr.clarityelections.com/CO/127407/');
const den = lead('Denver Elections', 'Nov 3, 11:30 p.m. MT update', 'https://results.enr.clarityelections.com/CO/Denver/127425/');

export const RESULTS: Record<string, RaceResult> = {
  // California statewide
  governor: ap('Becerra', `${AP_CA}california-governor-results/`),
  'lt-governor': ap('Ma', `${AP_CA}california-lieutenant-governor-results/`),
  'secretary-state': ap('Weber', `${AP_CA}california-secretary-of-state-results/`),
  'attorney-general': ap('Bonta', `${AP_CA}california-attorney-general-results/`),
  controller: sos('Cohen', 63.8),
  treasurer: sos('Kounalakis', 64),
  'insurance-commissioner': sos('Kim', 52),
  spi: sos('Barrera', 57.1),
  'retention-supreme': sos('All retained'),
  'retention-dca1': sos('All retained'),
  'retention-dca2': sos('All retained'),
  'retention-dca3': sos('All retained'),
  'retention-dca4': sos('All retained'),
  'retention-dca5': sos('All retained'),
  'retention-dca6': sos('All retained'),
  'prop-1': sosBm('Yes', 59.4),
  'prop-2': sosBm('Yes', 59.6),
  'prop-3': sosBm('Yes', 58.7),
  'prop-4': sosBm('No', 48),
  'prop-5': sosBm('Yes', 50.3),
  'prop-37': ap('Yes', `${AP_CA}california-proposition-37-results/`),
  'prop-38': sosBm('Yes', 55.7),
  'prop-39': ap('No', `${AP_CA}california-proposition-39-results/`),
  'prop-40': sosBm('No', 44.4),
  'prop-41': sosBm('No', 47.6),
  'prop-42': sosBm('Yes', 54.3),
  'prop-43': sosBm('No', 45.1),
  'prop-44': sosBm('No', 18.2),
  'prop-45': sosBm('No', 45.9),
  'boe-d1': sos('Esparza', 53.8),
  'boe-d2': sos('Lieber', 59.7),
  'boe-d3': sos('Gipson', 59.5),
  'boe-d4': sos('Umberg', 56.4),

  // U.S. House: AP calls, otherwise the SOS count
  'us-rep-ca1': ap('McGuire', `${AP_HOUSE}#1`),
  'us-rep-ca2': ap('Huffman', `${AP_HOUSE}#2`),
  'us-rep-ca3': ap('Bera', `${AP_HOUSE}#3`),
  'us-rep-ca4': sos('Jones', 51.5),
  'us-rep-ca5': ap('McClintock', `${AP_HOUSE}#5`),
  'us-rep-ca6': ap('Pan', `${AP_HOUSE}#6`),
  'us-rep-ca7': sos('Matsui', 57.4),
  'us-rep-ca8': ap('Garamendi', `${AP_HOUSE}#8`),
  'us-rep-ca9': ap('Harder', `${AP_HOUSE}#9`),
  'us-rep-ca10': ap('DeSaulnier', `${AP_HOUSE}#10`),
  'us-rep-ca11': sos('Wiener', 55.4),
  'us-rep-ca12': ap('Simon', `${AP_HOUSE}#12`),
  'us-rep-ca13': sos('Gray', 61.3),
  'us-rep-ca14': sos('Wahab', 56.5),
  'us-rep-ca15': ap('Mullin', `${AP_HOUSE}#15`),
  'us-rep-ca16': ap('Liccardo', `${AP_HOUSE}#16`),
  'us-rep-ca17': ap('Khanna', `${AP_HOUSE}#17`),
  'us-rep-ca18': ap('Lofgren', `${AP_HOUSE}#18`),
  'us-rep-ca19': ap('Panetta', `${AP_HOUSE}#19`),
  'us-rep-ca20': ap('Fong', `${AP_HOUSE}#20`),
  'us-rep-ca21': ap('Costa', `${AP_HOUSE}#21`),
  'us-rep-ca22': sos('Villegas', 66.4),
  'us-rep-ca23': sos('Obernolte', 51.3),
  'us-rep-ca24': ap('Carbajal', `${AP_HOUSE}#24`),
  'us-rep-ca25': ap('Ruiz', `${AP_HOUSE}#25`),
  'us-rep-ca26': ap('Irwin', `${AP_HOUSE}#26`),
  'us-rep-ca27': ap('Whitesides', `${AP_HOUSE}#27`),
  'us-rep-ca28': ap('Chu', `${AP_HOUSE}#28`),
  'us-rep-ca29': sos('Rivas', 60.2),
  'us-rep-ca30': ap('Friedman', `${AP_HOUSE}#30`),
  'us-rep-ca31': ap('Cisneros', `${AP_HOUSE}#31`),
  'us-rep-ca32': ap('Sherman', `${AP_HOUSE}#32`),
  'us-rep-ca33': ap('Aguilar', `${AP_HOUSE}#33`),
  'us-rep-ca34': sos('Gonzales-Torres', 58.7),
  'us-rep-ca35': ap('Torres', `${AP_HOUSE}#35`),
  'us-rep-ca36': ap('Lieu', `${AP_HOUSE}#36`),
  'us-rep-ca37': ap('Kamlager-Dove', `${AP_HOUSE}#37`),
  'us-rep-ca38': ap('Solis', `${AP_HOUSE}#38`),
  'us-rep-ca39': ap('Takano', `${AP_HOUSE}#39`),
  'us-rep-ca40': sos('Calvert', 54.5),
  'us-rep-ca41': ap('Sánchez', `${AP_HOUSE}#41`),
  'us-rep-ca42': ap('Garcia', `${AP_HOUSE}#42`),
  'us-rep-ca43': ap('Waters', `${AP_HOUSE}#43`),
  'us-rep-ca44': ap('Barragán', `${AP_HOUSE}#44`),
  'us-rep-ca45': ap('Tran', `${AP_HOUSE}#45`),
  'us-rep-ca46': ap('Correa', `${AP_HOUSE}#46`),
  'us-rep-ca47': sos('Min', 56.7),
  'us-rep-ca48': sos('Von Wilpert', 59.6),
  'us-rep-ca49': ap('Levin', `${AP_HOUSE}#49`),
  'us-rep-ca50': ap('Peters', `${AP_HOUSE}#50`),
  'us-rep-ca51': ap('Jacobs', `${AP_HOUSE}#51`),
  'us-rep-ca52': ap('Vargas', `${AP_HOUSE}#52`),

  // State Senate (SOS count)
  'senate-sd2': sos('Connolly', 74.8),
  'senate-sd4': sos('Duarte', 52.2),
  'senate-sd6': sos('Niello', 51.8),
  'senate-sd8': sos('Ashby', 72.4),
  'senate-sd10': sos('Sakakihara', 72.4),
  'senate-sd12': sos('Magsig', 63.6),
  'senate-sd14': sos('Soria', 64.2),
  'senate-sd16': sos('Hurtado', 60.3),
  'senate-sd18': sos('Padilla', 67),
  'senate-sd20': sos('Menjivar', 73.9),
  'senate-sd22': sos('Rubio', 67),
  'senate-sd24': sos('Goldsmith', 58),
  'senate-sd26': sos('Hernandez', 57),
  'senate-sd28': sos('Smallwood-Cuevas', 83.9),
  'senate-sd30': sos('Archuleta', 67.2),
  'senate-sd32': sos('Seyarto', 53.1),
  'senate-sd34': sos('Valencia', 67),
  'senate-sd36': sos('Duncan', 50.2),
  'senate-sd38': sos('Blakespear', 55.9),
  'senate-sd40': sos('Elliott', 52.5),

  // State Assembly (SOS count)
  'assembly-ad1': sos('Hadwick', 56.8),
  'assembly-ad2': sos('Rogers', 70.8),
  'assembly-ad3': sos('Belza', 57),
  'assembly-ad4': sos('Aguiar-Curry', 100),
  'assembly-ad5': sos('Patterson', 56.3),
  'assembly-ad6': sos('Krell', 83.4),
  'assembly-ad7': sos('Slavensky', 52.5),
  'assembly-ad8': sos('Tangipa', 100),
  'assembly-ad9': sos('Flora', 57.4),
  'assembly-ad10': sos('Nguyen', 72.3),
  'assembly-ad11': sos('Wilson', 64.4),
  'assembly-ad12': sos('Elward', 56.7),
  'assembly-ad13': sos('Ransom', 65.4),
  'assembly-ad14': sos('Wicks', 79.8),
  'assembly-ad15': sos('Ávila Farías', 69.2),
  'assembly-ad16': sos('Bauer-Kahan', 68.3),
  'assembly-ad17': sos('Haney', 88.9),
  'assembly-ad18': sos('Bonta', 78.4),
  'assembly-ad19': sos('Stefani', 81.2),
  'assembly-ad20': sos('Ortega', 75.2),
  'assembly-ad21': sos('Papan', 77.4),
  'assembly-ad22': sos('Alanis', 100),
  'assembly-ad23': sos('Berman', 75),
  'assembly-ad24': sos('Lee', 70.2),
  'assembly-ad25': sos('Kalra', 72.3),
  'assembly-ad26': sos('Ahrens', 74.4),
  'assembly-ad27': sos('Pacheco', 63.3),
  'assembly-ad28': sos('Pellerin', 71.4),
  'assembly-ad29': sos('Rivas', 71),
  'assembly-ad30': sos('Addis', 66.4),
  'assembly-ad31': sos('Perea', 67.4),
  'assembly-ad32': sos('Couch', 100),
  'assembly-ad33': sos('Macedo', 51.9),
  'assembly-ad34': sos('Hughes', 53),
  'assembly-ad35': sos('Gonzales', 68.3),
  'assembly-ad36': sos('Obeso-Martinez', 58.7),
  'assembly-ad37': sos('Hart', 66.3),
  'assembly-ad38': sos('Bennett', 70.2),
  'assembly-ad39': sos('Carrillo', 69.4),
  'assembly-ad40': sos('Schiavo', 58.6),
  'assembly-ad41': sos('Harabedian', 65),
  'assembly-ad42': sos('Klein Lopez', 55.9),
  'assembly-ad43': sos('Rodriguez', 78.6),
  'assembly-ad44': sos('Schultz', 71.1),
  'assembly-ad45': sos('Ramos', 70.8),
  'assembly-ad46': sos('Gabriel', 68.7),
  'assembly-ad47': sos('Namvar', 55.9),
  'assembly-ad48': sos('Rubio', 67.4),
  'assembly-ad49': sos('Fong', 67.3),
  'assembly-ad50': sos('Garcia', 66),
  'assembly-ad51': sos('Zbur', 62.8),
  'assembly-ad52': sos('Caloza', 86),
  'assembly-ad53': sos('Rodriguez', 66.7),
  'assembly-ad54': sos('Gonzalez', 81.5),
  'assembly-ad55': sos('Bryan', 66.3),
  'assembly-ad56': sos('Calderon', 65.9),
  'assembly-ad57': sos('Elhawary', 88.4),
  'assembly-ad58': sos('Cervantes', 60.3),
  'assembly-ad59': sos('Chen', 61.6),
  'assembly-ad60': sos('Jackson', 65.2),
  'assembly-ad61': sos('McKinnor', 83),
  'assembly-ad62': sos('Solache', 75.7),
  'assembly-ad63': sos('Johnson', 57.3),
  'assembly-ad64': sos('Pacheco', 69.5),
  'assembly-ad65': sos('Davis', 80.4),
  'assembly-ad66': sos('Seo', 61.9),
  'assembly-ad67': sos('Pulido', 61.7),
  'assembly-ad68': sos('Penaloza', 52.4),
  'assembly-ad69': sos('Lowenthal', 67.5),
  'assembly-ad70': sos('Ta', 50.8),
  'assembly-ad71': sos('Sanchez', 54.3),
  'assembly-ad72': sos('Van Der Mark', 50.8),
  'assembly-ad73': sos('Petrie-Norris', 61.9),
  'assembly-ad74': sos('Davies', 50.2),
  'assembly-ad75': sos('DeMaio', 56),
  'assembly-ad76': sos('Patel', 58.5),
  'assembly-ad77': sos('Boerner', 63.1),
  'assembly-ad78': sos('Ward', 70.3),
  'assembly-ad79': sos('Sharp-Collins', 66.8),
  'assembly-ad80': sos('Alvarez', 67.9),

  // San Diego County
  'sd-county-assessor': sdc('Marks', 100),
  'sd-county-treasurer': sdc('Cohen', 57.31),
  'sd-supervisor-d4': sdc('Montgomery Steppe', 64.7),
  'sd-supervisor-d5': sdc('Jones', 60.74),
  'sd-county-board-ed-d3': sdc('Muñoz', 61),
  'sd-county-board-ed-d5': sdc('Shea', 67.21),
  'sd-measure-a': sdc('Yes', 51.68),
  'sd-measure-b': sdc('Yes', 51.62),
  'sdusd-measure-m': sdc('Yes', 64.86),
  'sdusd-district-b': sdc('Hazan', 100),
  'sdusd-district-c': sdc('Gore', 100),
  'sdccd-district-a': sdc('Nieto Senour', 79.06),
  'sdccd-district-c': sdc('Milgrim', 71.48),
  'sd-city-council-d2': sdc('Crosby', 54.19),
  'sd-city-council-d4': sdc('Abraham', 53.46),
  'sd-city-council-d6': sdc('Lee', 59.63),
  'sd-city-council-d8': sdc('Martinez', 56.85),
  'san-ysidro-sd-board': sdc('Lopez, Rosario, Arias', [18.61, 16.5, 16.34]),
  'sduhsd-trustee-area-3': sdc('Doyle', 61.96),
  'sduhsd-trustee-area-5': sdc('Moodie', 57.12),
  'del-mar-city-council': sdc('Spieker, Grewal', [33.6, 27.1]),
  'poway-usd-area-b': sdc('Sosnowski', 54.05),
  'poway-usd-area-c': sdc('Plotzke', 59.65),
  'poway-usd-area-d': sdc("O'Connor-Ratcliff", 52.98),
  'palomar-ccd-area-1': sdc('Patacsil', 54.99),
  'palomar-ccd-area-5': sdc('Jeffries', 45.61),
  'palomar-health-div-3': sdc('Telahun', 50.03),
  'palomar-health-div-5': sdc('Christensen', 53.86),
  'palomar-health-div-7': sdc('Butler', 56.93),
  'cvesd-seat-1': sdc('Castillo Tolston', 55.36),
  'cvesd-seat-3': sdc('Segura', 45.12),
  'cvesd-seat-5': sdc('Dominguez Cervantes', 41.82),
  'swc-trustee-area-1': sdc('Moreno', 56.28),
  'swc-trustee-area-4': sdc('Cuellar-Martinez', 48.09),
  'chula-vista-mayor': sdc('McCann', 58.47),
  'chula-vista-council-d1': sdc('Chavez', 57.04),
  'chula-vista-council-d2': sdc('Preciado', 51.68),
  'chula-vista-city-attorney': sdc('Verdugo', 100),
  'otay-water-div-3': sdc('Croucher', 74.04),
  'encinitas-usd-board': sdc('Hargrave, Shen, Cocayne', [23.66, 21.45, 21.01]),
  'del-mar-usd-board': sdc('Kholos, Rafner, Cochrane', [32.16, 26.49, 20.81]),
  'carlsbad-mayor': sdc('Blackburn', 72.66),
  'carlsbad-city-clerk': sdc('Freisinger', 100),
  'carlsbad-city-treasurer': sdc('Peacox', 66.88),
  'carlsbad-council-d3': sdc('Bhat-Patel', 70.31),
  'euhsd-trustee-area-1': sdc('Weller', 58.31),
  'euhsd-trustee-area-2': sdc('Hinrichs', 45.3),
  'euhsd-trustee-area-5': sdc('Vincent', 60.26),
  'eusd-trustee-area-2': sdc('Shulok', 54.37),
  'eusd-trustee-area-4': sdc('Harper', 59.34),
  'eusd-trustee-area-5': sdc('Wagner', 57.65),
  'escondido-mayor': sdc('White', 52.51),
  'escondido-council-d1': sdc('Valenzuela', 63.83),
  'escondido-council-d2': sdc('DiMartino', 51.12),
  'deer-springs-fire-board': sdc('Gordon, Kerrin, Caples', [29.36, 25.18, 22.17]),
  'rincon-water-div-3': sdc('Martinez', 50.38),
  'suhsd-trustee-area-1': sdc('Betancourt-Castañeda', 67.42),
  'el-cajon-mayor': sdc('Wells', 60.94),
  'el-cajon-council-d1': sdc('Kaye', 56.85),
  'cajon-valley-trustee-area-2': sdc('Covell', 60.88),
  'cajon-valley-trustee-area-3': sdc('Schworm', 54.24),
  'guhsd-trustee-area-3': sdc('Littrell', 50.91),
  'guhsd-trustee-area-4': sdc('Mull', 48.49),
  'la-mesa-mayor': sdc('Normandy-Dillard', 45.93),
  'la-mesa-city-council': sdc('Natalia, Alo', [50.44, 49.56]),
  'la-mesa-city-treasurer': sdc('Stewart', 50.24),
  'lmsvsd-trustee-area-1': sdc('Tweedle', 51.4),
  'lmsvsd-trustee-area-2': sdc('Littig', 48.58),
  'lmsvsd-trustee-area-3': sdc('Coston', 60.55),
  'helix-water-div-2': sdc('Damsky', 69.5),
  'helix-water-div-4': sdc('Hedberg', 65.23),
  'lmsvsd-measure-aa': sdc('Yes', 63.22),
  'gcccd-measure-g': sdc('No', 52.69), // bonds need 55% Yes
  'santee-council-d1': sdc('McNelis', 63.57),
  'santee-council-d2': sdc('Hall', 60.51),
  'santee-sd-seat-1': sdc('Petretta', 60.43),
  'santee-sd-seat-5': sdc('Dobesh', 55.76),
  'padre-dam-water-div-1': sdc('Woods', 51.63),
  'santee-measure-y': sdc('No', 41.3),
  'santee-sd-measure-bb': sdc('No', 49.93),
  'oceanside-council-d1': sdc('Joyce', 59.99),
  'oceanside-council-d2': sdc('Robinson', 41.43),
  'oceanside-usd-trustee-area-1': sdc('Licona', 59.31),
  'oceanside-usd-trustee-area-3': sdc('Pearson', 52.42),
  'oceanside-usd-trustee-area-4': sdc('Riojas Alvarez', 56.97),
  'tri-city-healthcare-zone-2': sdc('Lauriano', 56.97),
  'oceanside-measure-r': sdc('Yes', 63.91),
  'oceanside-measure-s': sdc('No', 49.56),
  'vista-mayor': sdc('Green', 51.24),
  'vista-council-d1': sdc('Contreras', 46.24),
  'vista-council-d4': sdc("O'Donnell", 72.3),
  'vista-usd-trustee-area-3': sdc('Alvarado', 67.06),
  'san-marcos-usd-area-e': sdc('Baker', 55.17),
  'vista-irrigation-div-2': sdc('Vásquez', 45.38),
  'vista-usd-measure-n': sdc('Yes', 56.34), // bonds need 55% Yes
  'fuesd-measure-k': sdc('No', 53), // bonds need 55% Yes

  // Los Angeles County
  'la-sheriff': lac('Luna', 68.5),
  'la-measure-a': lac('Yes', 64.5),
  'la-measure-e': lac('Yes', 72.9),
  'laccd-seat-2': lac('Veres', 41.3),
  'laccd-seat-4': lac('Harris', 54.8),
  'laccd-seat-6': lac('Winston', 36.5),
  'la-mayor': lac('Raman', 51.1),
  'la-city-attorney': lac('Roy', 66.1),
  'la-measure-te': lac('Yes', 64),
  'la-measure-la': lac('Yes', 60.4),
  'la-measure-pl': lac('Yes', 70.3),
  'la-measure-ee': lac('Yes', 53.9),
  'la-measure-prk': lac('Yes', 76.9),
  'la-measure-prt': lac('Yes', 75.5),
  'la-measure-sc': lac('Yes', 77.8),
  'la-measure-fd': lac('Yes', 53.6),
  'la-superior-court-64': lac('Ghobadi', 54.1),
  'la-superior-court-65': lac('Clayton', 55.4),
  'la-superior-court-87': lac('Bayne', 54.4),
  'la-superior-court-131': lac('Tryfman', 52.5),
  'burbank-city-council': lac('Perez, Van Gorder, Southerland', [22.2, 13.6, 11.6]),
  'burbank-city-clerk': lac('Clark', 100),
  'burbank-city-treasurer': lac('Palmer', 100),
  'burbank-measure-c': lac('Yes', 78.2),
  'burbank-measure-cc': lac('Yes', 53),
  'burbank-measure-cd': lac('No', 22.7),
  'busd-trustee-area-3': lac('Morrison', 48.5),
  'monterey-park-council-d5': lac('Ngo', 51.3),
  'monterey-park-city-clerk': lac('Leung', 100),
  'monterey-park-city-treasurer': lac('Lee', 100),
  'monterey-park-measure-hom': lac('Yes', 85.2),
  'monterey-park-measure-aaa': lac('Yes', 76.3),

  // Orange County
  'orange-mayor': occ('Slater', 59.24),
  'mwdoc-division-2': occ('Dick', 43.2),
  'orange-measure-i': occ('Yes', 54.54),
  'orange-measure-j': occ('Yes', 58.83),
  'orange-measure-k': occ('No', 36.25),
  'nocccd-trustee-area-1': occ('Dunsheath', 67.46),
  'coast-ccd-trustee-area-1': occ('Kalmick', 46.2),
  'ggusd-trustee-area-2': occ('Nguyen', 60.65),
  'oc-supervisor-d4': occ('Shaw', 50.32),
  'garden-grove-mayor': occ('Klopfenstein', 55.19),
  'garden-grove-council-d1': occ('Flanders', 49.86),
  'garden-grove-council-d3': occ('Tran', 56.4),

  // Riverside County
  'rivco-superior-court-10': riv('Paradise', 55.34),
  'mvusd-trustee-area-1': riv('Pardue', 55.02),
  'mvusd-trustee-area-2': riv('Young', 54.68),
  'rcwd-board': riv('Plummer, Brady, Harkey, Edwards', [22.96, 22.88, 22.85, 16.7]),
  'mvusd-measure-m': riv('No', 49.47),
  'rctc-measure-a': riv('Yes', 70),
  'temecula-council-d5': riv('Schwank', 37.74),
  'tvusd-trustee-area-2': riv('Barham', 53.28),
  'tvusd-trustee-area-4': riv('Sola', 53.55),
  'msjc-trustee-area-3': riv('Carpenter', 66.33),
  'tvusd-measure-s': riv('No', 51.91), // bonds need 55% Yes

  // Placer County
  'rocklin-city-council': plc('Halldin, Gayaldo'),
  'rusd-trustee-area-4': plc('Hoehne'),
  'rusd-trustee-area-5': plc('Counter'),
  'placer-measure-g': plc('Yes'),
  'placer-measure-h': plc('Yes'),
  'rocklin-measure-c': plc('Yes'),
  'rusd-measure-d': plc('No'), // 52.2% Yes; bonds need 55%

  // Alameda County
  'hayward-mayor': ala('Salinas', 75.31),
  'hayward-council-d6': ala('Roche', 100),
  'husd-trustee-area-4': ala('Fernelius', 51.6),
  'clpccd-area-6': ala('Gin', 58.52),
  'clpccd-area-3': ala('Mojadedi', 54.59),
  'ac-transit-ward-4': ala('Syed', 78.37),
  'bart-district-4': ala('Raburn', 67.49),
  'ebrpd-ward-3': ala('Lewington', 49.57),
  'hayward-measure-cc': ala('Yes', 64.96),
  'bay-area-regional-transit-measure': ala('Yes', 65.18), // Alameda's share only; no combined multi-county total posted yet

  // Santa Clara County
  'mountain-view-city-council': scc('Sylvester, Paymer, Cox', [18.39, 15.69, 15.29]),
  'mvwsd-board': scc('Conley, Lambert', [34.09, 28.27]),
  'mvlahsd-trustee-area-3': scc('Cornes', 55.88),
  'valley-water-d7': scc('Dailey', 57.55),
  'mountain-view-measure-e': scc('Yes', 69.35),
  'mountain-view-measure-f': scc('Yes', 78.48),
  'el-camino-measure-s': scc('Yes', 91.3),

  // Colorado statewide
  'co-us-senate': ap('Hickenlooper', `${AP_CA}colorado-us-senate-results/`),
  'co-us-rep-cd1': ap('Kiros', `${AP_CA}colorado-us-house-results/#1`),
  'co-governor': ap('Weiser', `${AP_CA}colorado-governor-results/`),
  'co-secretary-of-state': ap('Gonzalez', `${AP_CA}colorado-secretary-of-state-results/`),
  'co-attorney-general': ap('Griswold', `${AP_CA}colorado-attorney-general-results/`),
  'co-treasurer': cos('Bridges', 58.5),
  'co-state-board-ed-cd1': cos('Escárcega', 82.88),
  'co-retention-supreme': cos('All retained'),
  'co-retention-appeals': cos('All retained'),
  'co-amendment-81': cos('No', 44.97),
  'co-amendment-82': cos('No', 46.13),
  'co-amendment-83': cos('No', 44.84),
  'co-amendment-84': cos('No', 36.64),
  'co-amendment-85': cos('No', 50.79), // constitutional amendments need 55% Yes
  'co-amendment-86': cos('No', 46.61),
  'co-amendment-87': cos('No', 50.49), // constitutional amendments need 55% Yes
  'co-prop-nn': cos('Yes', 55.41),
  'co-prop-132': cos('Yes', 52.7),
  'co-prop-133': cos('Yes', 61.84),
  'co-prop-134': cos('Yes', 52.37),
  'co-prop-135': cos('Yes', 51.87),
  'co-prop-136': cos('No', 47.34),
  'co-prop-137': cos('Yes', 50.32),

  // Denver
  'co-retention-denver-district': den('All retained'),
  'co-retention-denver-county': den('All retained'),
  'co-senate-sd34': den('Garcia Irlando', 85.77),
  'co-senate-sd31': den('Ball', 100),
  'co-house-hd4': den('Espenoza', 85.82),
  'co-house-hd5': den('Sandoval', 89.44),
  'denver-council-at-large-b': den('Mejía', 28.75),
  'co-rtd-district-c': den('Meyer', 100),
  'denver-measure-2h': den('Yes', 86.42),
  'denver-measure-2i': den('Yes', 65.52),
  'denver-measure-2j': den('Yes', 79.78),
  'denver-measure-2k': den('Yes', 68.49),
  'denver-measure-311': den('Yes', 66.55),
  'dps-measure-4a': den('Yes', 68),
};

/** “✓ Won: Becerra (AP call, Nov 4)” / “Leading: Becerra (LA County Registrar, Nov 6 update)”. */
export function resultLabel(r: RaceResult): string {
  const who = r.winner === 'Yes' ? 'Passed' : r.winner === 'No' ? 'Failed' : undefined;
  if (r.status === 'called') return who ? `✓ ${who} (${r.source} call, ${r.when})` : `✓ Won: ${r.winner} (${r.source} call, ${r.when})`;
  const share = pctText(r);
  const shareNote = share ? (who ? ` with ${share} Yes` : ` with ${share}`) : '';
  return who
    ? `${who === 'Passed' ? 'Passing' : 'Failing'}${shareNote} (${r.source}, ${r.when})`
    : `Leading: ${r.winner}${shareNote} (${r.source}, ${r.when})`;
}

/** “52.4%”, or “31.2%, 28.0%” for a multi-seat lead; empty when the count wasn’t recorded. */
export function pctText(r: RaceResult): string {
  if (r.status !== 'leading' || r.pct === undefined) return '';
  const list = Array.isArray(r.pct) ? r.pct : [r.pct];
  return list.map((p) => `${p.toFixed(1)}%`).join(', ');
}

/**
 * Compact chip text: `main` is the outcome (“✓ Becerra”, “Leading: Bass”, “✓ Passed”, “Failing”);
 * `meta` is a short source tag (“AP · Nov 4”, “Nov 6 count”). The full `resultLabel` goes in the tooltip.
 */
export function resultChipParts(r: RaceResult): { main: string; meta: string } {
  const who = r.winner === 'Yes' ? 'Passed' : r.winner === 'No' ? 'Failed' : undefined;
  const day = r.when.match(/^[A-Z][a-z]{2} \d{1,2}/)?.[0] ?? r.when;
  if (r.status === 'called') {
    return { main: who ? `✓ ${who}` : `✓ ${r.winner}`, meta: `${r.source === 'AP' ? 'AP' : 'Certified'} · ${day}` };
  }
  const share = pctText(r);
  const main = who ? (who === 'Passed' ? 'Passing' : 'Failing') : `Leading: ${r.winner}`;
  return { main: share ? `${main} · ${share}${who ? ' Yes' : ''}` : main, meta: `${day} count` };
}

/** Build-time check: every result names a real race and a real candidate (or Yes/No), with a source link. */
export function resultIssues(races: Race[]): string[] {
  const issues: string[] = [];
  const byId = new Map(races.map((r) => [r.id, r]));
  for (const [id, r] of Object.entries(RESULTS)) {
    const race = byId.get(id);
    if (!race) {
      issues.push(`results.ts: no race with id ${id}`);
      continue;
    }
    if (!/^https?:\/\//.test(r.url)) issues.push(`results.ts ${id}: url must be a link`);
    if (!r.source.trim() || !r.when.trim()) issues.push(`results.ts ${id}: source and when are required`);
    if (r.pct !== undefined) {
      const shares = Array.isArray(r.pct) ? r.pct : [r.pct];
      if (shares.some((p) => !(p >= 0 && p <= 100))) issues.push(`results.ts ${id}: pct must be 0–100`);
      if (shares.length !== r.winner.split(',').length) issues.push(`results.ts ${id}: one pct per name in winner`);
    }
    if (race.kind === 'measure') {
      if (r.winner !== 'Yes' && r.winner !== 'No') issues.push(`results.ts ${id}: a measure's winner is Yes or No`);
    } else if (race.kind === 'candidates') {
      const names = r.winner.split(',').map((n) => n.trim());
      if (names.length > (race.voteFor ?? 1)) issues.push(`results.ts ${id}: more winners than seats`);
      for (const n of names) {
        if (!resolveCandidateForPick(n, race.candidates)) issues.push(`results.ts ${id}: “${n}” isn’t a candidate in this race`);
      }
    }
  }
  return issues;
}
