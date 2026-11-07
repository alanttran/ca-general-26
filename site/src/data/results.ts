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
const sos = lead('CA Secretary of State', 'Nov 6, 5:37 p.m. update', 'https://electionresults.sos.ca.gov/');
const sosBm = lead('CA Secretary of State', 'Nov 6, 5:37 p.m. update', 'https://electionresults.sos.ca.gov/returns/ballot-measures');
const sdc = lead('San Diego County Registrar', 'Nov 6, 5:46 p.m. update', 'https://www.livevoterturnout.com/ENR/sandiegocaenr/25/en/Index_25.html');
const lac = lead('LA County Registrar', 'Nov 6, 4:37 p.m. update', 'https://results.lavote.gov/#year=2026&election=4348');
const occ = lead('Orange County Registrar', 'Nov 6, 5:00 p.m. update', 'https://www.livevoterturnout.com/ENR/orangecaenr/24/en/phkv4sV_Index_24.html');
const riv = lead('Riverside County Registrar', 'Nov 6, 5:18 p.m. update', 'https://www.livevoterturnout.com/ENR/riversidecaenr/12/en/Index_12.html');
const plc = lead('Placer County Elections', 'Nov 4, 12:16 a.m. update', 'https://www.placercountyelections.gov/Uploads/documents/11032026/11032026_results05.pdf');
const ala = lead('Alameda County Registrar', 'Nov 6, 5:32 p.m. update', 'https://alamedacountyca.gov/rovresults/260');
const scc = lead('Santa Clara County Registrar', 'Nov 6, 5:07 p.m. update', 'https://results.enr.clarityelections.com/CA/Santa_Clara/127570/web.345435/#/summary');
const cos = lead('Colorado Secretary of State', 'Nov 6, 4:28 p.m. MT update', 'https://results.enr.clarityelections.com/CO/127407/');
const den = lead('Denver Elections', 'Nov 6, 3:49 p.m. MT update', 'https://results.enr.clarityelections.com/CO/Denver/127425/');

export const RESULTS: Record<string, RaceResult> = {
  // California statewide
  governor: ap('Becerra', `${AP_CA}california-governor-results/`),
  'lt-governor': ap('Ma', `${AP_CA}california-lieutenant-governor-results/`),
  'secretary-state': ap('Weber', `${AP_CA}california-secretary-of-state-results/`),
  'attorney-general': ap('Bonta', `${AP_CA}california-attorney-general-results/`),
  controller: sos('Cohen', 65.1),
  treasurer: sos('Kounalakis', 65.3),
  'insurance-commissioner': sos('Kim', 53),
  spi: sos('Barrera', 58.5),
  'retention-supreme': sos('All retained'),
  'retention-dca1': sos('All retained'),
  'retention-dca2': sos('All retained'),
  'retention-dca3': sos('All retained'),
  'retention-dca4': sos('All retained'),
  'retention-dca5': sos('All retained'),
  'retention-dca6': sos('All retained'),
  'prop-1': sosBm('Yes', 60.5),
  'prop-2': sosBm('Yes', 60.8),
  'prop-3': sosBm('Yes', 59.9),
  'prop-4': sosBm('No', 49.1),
  'prop-5': sosBm('Yes', 51.5),
  'prop-37': ap('Yes', `${AP_CA}california-proposition-37-results/`),
  'prop-38': sosBm('Yes', 54.7),
  'prop-39': ap('No', `${AP_CA}california-proposition-39-results/`),
  'prop-40': sosBm('No', 46.1),
  'prop-41': sosBm('No', 46),
  'prop-42': sosBm('Yes', 52.6),
  'prop-43': sosBm('No', 43.6),
  'prop-44': sosBm('No', 18),
  'prop-45': sosBm('No', 44.6),
  'boe-d1': sos('Esparza', 54.6),
  'boe-d2': sos('Lieber', 60),
  'boe-d3': sos('Gipson', 57.7),
  'boe-d4': sos('Umberg', 56.9),

  // U.S. House: AP calls, otherwise the SOS count
  'us-rep-ca1': ap('McGuire', `${AP_HOUSE}#1`),
  'us-rep-ca2': ap('Huffman', `${AP_HOUSE}#2`),
  'us-rep-ca3': ap('Bera', `${AP_HOUSE}#3`),
  'us-rep-ca4': sos('Jones', 51.4),
  'us-rep-ca5': ap('McClintock', `${AP_HOUSE}#5`),
  'us-rep-ca6': ap('Pan', `${AP_HOUSE}#6`),
  'us-rep-ca7': sos('Matsui', 55.7),
  'us-rep-ca8': ap('Garamendi', `${AP_HOUSE}#8`),
  'us-rep-ca9': ap('Harder', `${AP_HOUSE}#9`),
  'us-rep-ca10': ap('DeSaulnier', `${AP_HOUSE}#10`),
  'us-rep-ca11': ap('Wiener', `${AP_HOUSE}#11`, 'Nov 6'),
  'us-rep-ca12': ap('Simon', `${AP_HOUSE}#12`),
  'us-rep-ca13': ap('Gray', `${AP_HOUSE}#13`, 'Nov 4'),
  'us-rep-ca14': ap('Wahab', `${AP_HOUSE}#14`, 'Nov 6'),
  'us-rep-ca15': ap('Mullin', `${AP_HOUSE}#15`),
  'us-rep-ca16': ap('Liccardo', `${AP_HOUSE}#16`),
  'us-rep-ca17': ap('Khanna', `${AP_HOUSE}#17`),
  'us-rep-ca18': ap('Lofgren', `${AP_HOUSE}#18`),
  'us-rep-ca19': ap('Panetta', `${AP_HOUSE}#19`),
  'us-rep-ca20': ap('Fong', `${AP_HOUSE}#20`),
  'us-rep-ca21': ap('Costa', `${AP_HOUSE}#21`),
  'us-rep-ca22': ap('Villegas', `${AP_HOUSE}#22`, 'Nov 4'),
  'us-rep-ca23': sos('Obernolte', 51.2),
  'us-rep-ca24': ap('Carbajal', `${AP_HOUSE}#24`),
  'us-rep-ca25': ap('Ruiz', `${AP_HOUSE}#25`),
  'us-rep-ca26': ap('Irwin', `${AP_HOUSE}#26`),
  'us-rep-ca27': ap('Whitesides', `${AP_HOUSE}#27`),
  'us-rep-ca28': ap('Chu', `${AP_HOUSE}#28`),
  'us-rep-ca29': ap('Rivas', `${AP_HOUSE}#29`, 'Nov 5'),
  'us-rep-ca30': ap('Friedman', `${AP_HOUSE}#30`),
  'us-rep-ca31': ap('Cisneros', `${AP_HOUSE}#31`),
  'us-rep-ca32': ap('Sherman', `${AP_HOUSE}#32`),
  'us-rep-ca33': ap('Aguilar', `${AP_HOUSE}#33`),
  'us-rep-ca34': ap('Gonzales-Torres', `${AP_HOUSE}#34`, 'Nov 4'),
  'us-rep-ca35': ap('Torres', `${AP_HOUSE}#35`),
  'us-rep-ca36': ap('Lieu', `${AP_HOUSE}#36`),
  'us-rep-ca37': ap('Kamlager-Dove', `${AP_HOUSE}#37`),
  'us-rep-ca38': ap('Solis', `${AP_HOUSE}#38`),
  'us-rep-ca39': ap('Takano', `${AP_HOUSE}#39`),
  'us-rep-ca40': sos('Calvert', 53.9),
  'us-rep-ca41': ap('Sánchez', `${AP_HOUSE}#41`),
  'us-rep-ca42': ap('Garcia', `${AP_HOUSE}#42`),
  'us-rep-ca43': ap('Waters', `${AP_HOUSE}#43`),
  'us-rep-ca44': ap('Barragán', `${AP_HOUSE}#44`),
  'us-rep-ca45': ap('Tran', `${AP_HOUSE}#45`),
  'us-rep-ca46': ap('Correa', `${AP_HOUSE}#46`),
  'us-rep-ca47': ap('Min', `${AP_HOUSE}#47`, 'Nov 4'),
  'us-rep-ca48': ap('Von Wilpert', `${AP_HOUSE}#48`, 'Nov 4'),
  'us-rep-ca49': ap('Levin', `${AP_HOUSE}#49`),
  'us-rep-ca50': ap('Peters', `${AP_HOUSE}#50`),
  'us-rep-ca51': ap('Jacobs', `${AP_HOUSE}#51`),
  'us-rep-ca52': ap('Vargas', `${AP_HOUSE}#52`),

  // State Senate (SOS count)
  'senate-sd2': sos('Connolly', 74.4),
  'senate-sd4': sos('Duarte', 52.7),
  'senate-sd6': sos('Niello', 51),
  'senate-sd8': sos('Ashby', 73.4),
  'senate-sd10': sos('Sakakihara', 73.5),
  'senate-sd12': sos('Magsig', 63.1),
  'senate-sd14': sos('Soria', 64.3),
  'senate-sd16': sos('Hurtado', 60.4),
  'senate-sd18': sos('Padilla', 67.4),
  'senate-sd20': sos('Menjivar', 75.6),
  'senate-sd22': sos('Rubio', 68.4),
  'senate-sd24': sos('Goldsmith', 56.3),
  'senate-sd26': sos('Hernandez', 54.2),
  'senate-sd28': sos('Smallwood-Cuevas', 84.9),
  'senate-sd30': sos('Archuleta', 68.8),
  'senate-sd32': sos('Seyarto', 52.8),
  'senate-sd34': sos('Valencia', 68.6),
  'senate-sd36': sos('Duncan', 50.6),
  'senate-sd38': sos('Blakespear', 56),
  'senate-sd40': sos('Elliott', 53),

  // State Assembly (SOS count)
  'assembly-ad1': sos('Hadwick', 57.5),
  'assembly-ad2': sos('Rogers', 70.1),
  'assembly-ad3': sos('Belza', 56.5),
  'assembly-ad4': sos('Aguiar-Curry', 100),
  'assembly-ad5': sos('Patterson', 56.7),
  'assembly-ad6': sos('Krell', 83.9),
  'assembly-ad7': sos('Slavensky', 53.1),
  'assembly-ad8': sos('Tangipa', 100),
  'assembly-ad9': sos('Flora', 56.6),
  'assembly-ad10': sos('Nguyen', 73),
  'assembly-ad11': sos('Wilson', 64.9),
  'assembly-ad12': sos('Elward', 56.5),
  'assembly-ad13': sos('Ransom', 66.7),
  'assembly-ad14': sos('Wicks', 78.8),
  'assembly-ad15': sos('Ávila Farías', 69.6),
  'assembly-ad16': sos('Bauer-Kahan', 69),
  'assembly-ad17': sos('Haney', 90.1),
  'assembly-ad18': sos('Bonta', 79.2),
  'assembly-ad19': sos('Stefani', 83.4),
  'assembly-ad20': sos('Ortega', 76.5),
  'assembly-ad21': sos('Papan', 78.2),
  'assembly-ad22': sos('Alanis', 100),
  'assembly-ad23': sos('Berman', 75.9),
  'assembly-ad24': sos('Lee', 70.8),
  'assembly-ad25': sos('Kalra', 72.9),
  'assembly-ad26': sos('Ahrens', 75.4),
  'assembly-ad27': sos('Pacheco', 63.2),
  'assembly-ad28': sos('Pellerin', 72),
  'assembly-ad29': sos('Rivas', 71.5),
  'assembly-ad30': sos('Addis', 66.4),
  'assembly-ad31': sos('Perea', 67.8),
  'assembly-ad32': sos('Couch', 100),
  'assembly-ad33': sos('Macedo', 51.2),
  'assembly-ad34': sos('Hughes', 52.3),
  'assembly-ad35': sos('Gonzales', 68.7),
  'assembly-ad36': sos('Obeso-Martinez', 59.2),
  'assembly-ad37': sos('Hart', 66.5),
  'assembly-ad38': sos('Bennett', 70.2),
  'assembly-ad39': sos('Carrillo', 70.9),
  'assembly-ad40': sos('Schiavo', 60.1),
  'assembly-ad41': sos('Harabedian', 66.6),
  'assembly-ad42': sos('Klein Lopez', 56.3),
  'assembly-ad43': sos('Rodriguez', 80),
  'assembly-ad44': sos('Schultz', 72.8),
  'assembly-ad45': sos('Ramos', 71.2),
  'assembly-ad46': sos('Gabriel', 70.3),
  'assembly-ad47': sos('Namvar', 55.8),
  'assembly-ad48': sos('Rubio', 69),
  'assembly-ad49': sos('Fong', 69.2),
  'assembly-ad50': sos('Garcia', 66.3),
  'assembly-ad51': sos('Zbur', 60.7),
  'assembly-ad52': sos('Caloza', 87.1),
  'assembly-ad53': sos('Rodriguez', 67.7),
  'assembly-ad54': sos('Gonzalez', 82.9),
  'assembly-ad55': sos('Bryan', 66.6),
  'assembly-ad56': sos('Calderon', 67.6),
  'assembly-ad57': sos('Elhawary', 89.3),
  'assembly-ad58': sos('Cervantes', 61.3),
  'assembly-ad59': sos('Chen', 60.7),
  'assembly-ad60': sos('Jackson', 66.7),
  'assembly-ad61': sos('McKinnor', 84),
  'assembly-ad62': sos('Solache', 77.1),
  'assembly-ad63': sos('Johnson', 57.1),
  'assembly-ad64': sos('Pacheco', 71.5),
  'assembly-ad65': sos('Davis', 81.6),
  'assembly-ad66': sos('Seo', 60.7),
  'assembly-ad67': sos('Pulido', 63.1),
  'assembly-ad68': sos('Penaloza', 50.4),
  'assembly-ad69': sos('Lowenthal', 66.7),
  'assembly-ad70': sos('Swift', 50.1),
  'assembly-ad71': sos('Sanchez', 53.9),
  'assembly-ad72': sos('Van Der Mark', 50.6),
  'assembly-ad73': sos('Petrie-Norris', 62.8),
  'assembly-ad74': sos('Davies', 50.6),
  'assembly-ad75': sos('DeMaio', 55.7),
  'assembly-ad76': sos('Patel', 59),
  'assembly-ad77': sos('Boerner', 63.4),
  'assembly-ad78': sos('Ward', 70.7),
  'assembly-ad79': sos('Sharp-Collins', 67),
  'assembly-ad80': sos('Alvarez', 68.2),

  // San Diego County
  'sd-county-assessor': sdc('Marks', 100),
  'sd-county-treasurer': sdc('Cohen', 57.68),
  'sd-supervisor-d4': sdc('Montgomery Steppe', 65.45),
  'sd-supervisor-d5': sdc('Jones', 60.15),
  'sd-county-board-ed-d3': sdc('Muñoz', 61.73),
  'sd-county-board-ed-d5': sdc('Shea', 67.53),
  'sd-measure-a': sdc('Yes', 52.07),
  'sd-measure-b': sdc('Yes', 52),
  'sdusd-measure-m': sdc('Yes', 65.67),
  'sdusd-district-b': sdc('Hazan', 100),
  'sdusd-district-c': sdc('Gore', 100),
  'sdccd-district-a': sdc('Nieto Senour', 79.16),
  'sdccd-district-c': sdc('Milgrim', 72.23),
  'sd-city-council-d2': sdc('Crosby', 55.07),
  'sd-city-council-d4': sdc('Abraham', 53.37),
  'sd-city-council-d6': sdc('Lee', 60.58),
  'sd-city-council-d8': sdc('Martinez', 56.8),
  'san-ysidro-sd-board': sdc('Lopez, Arias, Rosario', [18.18, 16.33, 16.29]),
  'sduhsd-trustee-area-3': sdc('Doyle', 62.7),
  'sduhsd-trustee-area-5': sdc('Moodie', 57.61),
  'del-mar-city-council': sdc('Spieker, Grewal', [33.32, 26.91]),
  'poway-usd-area-b': sdc('Sosnowski', 54.55),
  'poway-usd-area-c': sdc('Plotzke', 59.94),
  'poway-usd-area-d': sdc("O'Connor-Ratcliff", 53.8),
  'palomar-ccd-area-1': sdc('Patacsil', 55.31),
  'palomar-ccd-area-5': sdc('Jeffries', 45.56),
  'palomar-health-div-3': sdc('Telahun', 50.4),
  'palomar-health-div-5': sdc('Christensen', 54.3),
  'palomar-health-div-7': sdc('Butler', 56.64),
  'cvesd-seat-1': sdc('Castillo Tolston', 55.28),
  'cvesd-seat-3': sdc('Segura', 45.56),
  'cvesd-seat-5': sdc('Dominguez Cervantes', 41.21),
  'swc-trustee-area-1': sdc('Moreno', 57.12),
  'swc-trustee-area-4': sdc('Cuellar-Martinez', 48.56),
  'chula-vista-mayor': sdc('McCann', 57.94),
  'chula-vista-council-d1': sdc('Chavez', 57.16),
  'chula-vista-council-d2': sdc('Preciado', 52.24),
  'chula-vista-city-attorney': sdc('Verdugo', 100),
  'otay-water-div-3': sdc('Croucher', 74.22),
  'encinitas-usd-board': sdc('Hargrave, Shen, Cocayne', [23.77, 21.58, 21.19]),
  'del-mar-usd-board': sdc('Kholos, Rafner, Fitzpatrick', [32.17, 26.46, 20.71]),
  'carlsbad-mayor': sdc('Blackburn', 72.23),
  'carlsbad-city-clerk': sdc('Freisinger', 100),
  'carlsbad-city-treasurer': sdc('Peacox', 66.8),
  'carlsbad-council-d3': sdc('Bhat-Patel', 70.62),
  'euhsd-trustee-area-1': sdc('Weller', 56.72),
  'euhsd-trustee-area-2': sdc('Hinrichs', 45.09),
  'euhsd-trustee-area-5': sdc('Vincent', 59.26),
  'eusd-trustee-area-2': sdc('Shulok', 55.03),
  'eusd-trustee-area-4': sdc('Harper', 58.5),
  'eusd-trustee-area-5': sdc('Wagner', 58.52),
  'escondido-mayor': sdc('White', 51.62),
  'escondido-council-d1': sdc('Valenzuela', 64.69),
  'escondido-council-d2': sdc('DiMartino', 51.32),
  'deer-springs-fire-board': sdc('Gordon, Kerrin, Caples', [29.43, 24.95, 21.93]),
  'rincon-water-div-3': sdc('Martinez', 51.12),
  'suhsd-trustee-area-1': sdc('Betancourt-Castañeda', 67.49),
  'el-cajon-mayor': sdc('Wells', 59.94),
  'el-cajon-council-d1': sdc('Kaye', 55.05),
  'cajon-valley-trustee-area-2': sdc('Covell', 59.96),
  'cajon-valley-trustee-area-3': sdc('Schworm', 53.32),
  'guhsd-trustee-area-3': sdc('Littrell', 52.06),
  'guhsd-trustee-area-4': sdc('Mull', 48.76),
  'la-mesa-mayor': sdc('Normandy-Dillard', 46.56),
  'la-mesa-city-council': sdc('Natalia, Alo', [50.23, 49.77]),
  'la-mesa-city-treasurer': sdc('Stewart', 51.07),
  'lmsvsd-trustee-area-1': sdc('Tweedle', 51.78),
  'lmsvsd-trustee-area-2': sdc('Littig', 49.2),
  'lmsvsd-trustee-area-3': sdc('Coston', 60.5),
  'helix-water-div-2': sdc('Damsky', 69.97),
  'helix-water-div-4': sdc('Hedberg', 64.34),
  'lmsvsd-measure-aa': sdc('Yes', 64.09),
  'gcccd-measure-g': sdc('No', 53.17), // bonds need 55% Yes
  'santee-council-d1': sdc('McNelis', 63.47),
  'santee-council-d2': sdc('Hall', 59.24),
  'santee-sd-seat-1': sdc('Petretta', 60.33),
  'santee-sd-seat-5': sdc('Dobesh', 56),
  'padre-dam-water-div-1': sdc('Woods', 50.98),
  'santee-measure-y': sdc('No', 40.84),
  'santee-sd-measure-bb': sdc('No', 50.26),
  'oceanside-council-d1': sdc('Joyce', 60.34),
  'oceanside-council-d2': sdc('Robinson', 40.87),
  'oceanside-usd-trustee-area-1': sdc('Licona', 60.05),
  'oceanside-usd-trustee-area-3': sdc('Pearson', 53.08),
  'oceanside-usd-trustee-area-4': sdc('Riojas Alvarez', 57.39),
  'tri-city-healthcare-zone-2': sdc('Lauriano', 58.09),
  'oceanside-measure-r': sdc('Yes', 64.01),
  'oceanside-measure-s': sdc('No', 49.52),
  'vista-mayor': sdc('Green', 50.7),
  'vista-council-d1': sdc('Contreras', 46.9),
  'vista-council-d4': sdc("O'Donnell", 71.79),
  'vista-usd-trustee-area-3': sdc('Alvarado', 67.4),
  'san-marcos-usd-area-e': sdc('Baker', 55.55),
  'vista-irrigation-div-2': sdc('Vásquez', 45.91),
  'vista-usd-measure-n': sdc('Yes', 56.65), // bonds need 55% Yes
  'fuesd-measure-k': sdc('No', 53.51), // bonds need 55% Yes

  // Los Angeles County
  'la-sheriff': lac('Luna', 69.75),
  'la-measure-a': lac('Yes', 62.98),
  'la-measure-e': lac('Yes', 74.37),
  'laccd-seat-2': lac('Veres', 41.24),
  'laccd-seat-4': lac('Harris', 56.68),
  'laccd-seat-6': lac('Winston', 38.09),
  'la-mayor': ap('Raman', `${AP_CA}california-los-angeles-mayor-results/`, 'Nov 5'),
  'la-city-attorney': lac('Roy', 67.72),
  'la-measure-te': lac('Yes', 61.88),
  'la-measure-la': lac('Yes', 61.75),
  'la-measure-pl': lac('Yes', 71.29),
  'la-measure-ee': lac('Yes', 53.19),
  'la-measure-prk': lac('Yes', 78.47),
  'la-measure-prt': lac('Yes', 76.76),
  'la-measure-sc': lac('Yes', 78.64),
  'la-measure-fd': lac('Yes', 53.67),
  'la-superior-court-64': lac('Ghobadi', 52.49),
  'la-superior-court-65': lac('Clayton', 56.25),
  'la-superior-court-87': lac('Bayne', 55.04),
  'la-superior-court-131': lac('Tryfman', 50.87),
  'burbank-city-council': lac('Perez, Van Gorder, Southerland', [22.76, 14.57, 12.65]),
  'burbank-city-clerk': lac('Clark', 100),
  'burbank-city-treasurer': lac('Palmer', 100),
  'burbank-measure-c': lac('Yes', 78.92),
  'burbank-measure-cc': lac('Yes', 52.77),
  'burbank-measure-cd': lac('No', 21.57),
  'busd-trustee-area-3': lac('Morrison', 50.15),
  'monterey-park-council-d5': lac('Ngo', 50.65),
  'monterey-park-city-clerk': lac('Leung', 100),
  'monterey-park-city-treasurer': lac('Lee', 100),
  'monterey-park-measure-hom': lac('Yes', 86.07),
  'monterey-park-measure-aaa': lac('Yes', 77.19),

  // Orange County
  'orange-mayor': occ('Slater', 57.89),
  'mwdoc-division-2': occ('Dick', 42.88),
  'orange-measure-i': occ('Yes', 54.83),
  'orange-measure-j': occ('Yes', 59.45),
  'orange-measure-k': occ('No', 35.38),
  'nocccd-trustee-area-1': occ('Dunsheath', 67.59),
  'coast-ccd-trustee-area-1': occ('Kalmick', 46.26),
  'ggusd-trustee-area-2': occ('Nguyen', 60.06),
  'oc-supervisor-d4': occ('Traut', 51.14),
  'garden-grove-mayor': occ('Klopfenstein', 54.64),
  'garden-grove-council-d1': occ('Flanders', 49.27),
  'garden-grove-council-d3': occ('Tran', 54.99),

  // Riverside County
  'rivco-superior-court-10': riv('Paradise', 54.55),
  'mvusd-trustee-area-1': riv('Pardue', 55.43),
  'mvusd-trustee-area-2': riv('Young', 53.95),
  'rcwd-board': riv('Plummer, Brady, Harkey, Edwards', [23.02, 22.9, 22.55, 16.4]),
  'mvusd-measure-m': riv('No', 49.89),
  'rctc-measure-a': riv('Yes', 70.38),
  'temecula-council-d5': riv('Schwank', 36.35),
  'tvusd-trustee-area-2': riv('Barham', 52.81),
  'tvusd-trustee-area-4': riv('Sola', 53.88),
  'msjc-trustee-area-3': riv('Carpenter', 65.65),
  'tvusd-measure-s': riv('No', 52.66), // bonds need 55% Yes

  // Placer County
  'rocklin-city-council': plc('Halldin, Gayaldo', [44.48, 37.47]),
  'rusd-trustee-area-4': plc('Hoehne', 58.65),
  'rusd-trustee-area-5': plc('Counter', 55.75),
  'placer-measure-g': plc('Yes', 69.8),
  'placer-measure-h': plc('Yes', 51.64),
  'rocklin-measure-c': plc('Yes', 52.83),
  'rusd-measure-d': plc('No', 52.16), // bonds need 55% Yes

  // Alameda County
  'hayward-mayor': ala('Salinas', 76.54),
  'hayward-council-d6': ala('Roche', 100),
  'husd-trustee-area-4': ala('Fernelius', 53.19),
  'clpccd-area-6': ala('Gin', 60.09),
  'clpccd-area-3': ala('Mojadedi', 56.36),
  'ac-transit-ward-4': ala('Syed', 79.35),
  'bart-district-4': ala('Raburn', 68.85),
  'ebrpd-ward-3': ala('Lewington', 50.38),
  'hayward-measure-cc': ala('Yes', 65.5),
  'bay-area-regional-transit-measure': ala('Yes', 66.49), // Alameda's share only; no combined multi-county total posted yet

  // Santa Clara County
  'mountain-view-city-council': scc('Sylvester, Paymer, Cox', [18.57, 15.27, 15.06]),
  'mvwsd-board': scc('Conley, Lambert', [33.91, 27.6]),
  'mvlahsd-trustee-area-3': scc('Cornes', 56.67),
  'valley-water-d7': scc('Dailey', 58.09),
  'mountain-view-measure-e': scc('Yes', 70.76),
  'mountain-view-measure-f': scc('Yes', 79.1),
  'el-camino-measure-s': scc('Yes', 91.6),

  // Colorado statewide
  'co-us-senate': ap('Hickenlooper', `${AP_CA}colorado-us-senate-results/`),
  'co-us-rep-cd1': ap('Kiros', `${AP_CA}colorado-us-house-results/#1`),
  'co-governor': ap('Weiser', `${AP_CA}colorado-governor-results/`),
  'co-secretary-of-state': ap('Gonzalez', `${AP_CA}colorado-secretary-of-state-results/`),
  'co-attorney-general': ap('Griswold', `${AP_CA}colorado-attorney-general-results/`),
  'co-treasurer': cos('Bridges', 58.72),
  'co-state-board-ed-cd1': cos('Escárcega', 82.48),
  'co-retention-supreme': cos('All retained'),
  'co-retention-appeals': cos('All retained'),
  'co-amendment-81': ap('No', `${AP_CA}colorado-amendment-81-results/`, 'Nov 4'),
  'co-amendment-82': ap('No', `${AP_CA}colorado-amendment-82-results/`, 'Nov 4'),
  'co-amendment-83': cos('No', 45.13),
  'co-amendment-84': cos('No', 36.64),
  'co-amendment-85': cos('No', 51.12), // constitutional amendments need 55% Yes
  'co-amendment-86': cos('No', 46.86),
  'co-amendment-87': cos('No', 51.55), // constitutional amendments need 55% Yes
  'co-prop-nn': cos('Yes', 56.85),
  'co-prop-132': ap('Yes', `${AP_CA}colorado-proposition-132-results/`, 'Nov 6'),
  'co-prop-133': cos('Yes', 62.09),
  'co-prop-134': ap('Yes', `${AP_CA}colorado-proposition-134-results/`, 'Nov 5'),
  'co-prop-135': ap('Yes', `${AP_CA}colorado-proposition-135-results/`, 'Nov 6'),
  'co-prop-136': cos('No', 47.21),
  'co-prop-137': cos('Yes', 51.8),

  // Denver
  'co-retention-denver-district': den('All retained'),
  'co-retention-denver-county': den('All retained'),
  'co-senate-sd34': den('Garcia Irlando', 84.89),
  'co-senate-sd31': den('Ball', 100),
  'co-house-hd4': den('Espenoza', 84.81),
  'co-house-hd5': den('Sandoval', 88.66),
  'denver-council-at-large-b': den('Mejía', 29.35),
  'co-rtd-district-c': den('Meyer', 100),
  'denver-measure-2h': den('Yes', 86.57),
  'denver-measure-2i': den('Yes', 65.83),
  'denver-measure-2j': den('Yes', 79.4),
  'denver-measure-2k': den('Yes', 66.39),
  'denver-measure-311': den('Yes', 67.63),
  'dps-measure-4a': den('Yes', 69.03),
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
