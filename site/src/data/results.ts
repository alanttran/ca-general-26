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
const AP_CA_ALL = `${AP_CA}california-results/`;
const AP_CO_ALL = `${AP_CA}colorado-results/`;
const ap = (winner: string, url: string, when = 'Nov 3'): RaceResult => ({ status: 'called', winner, source: 'AP', when, url });
const lead = (source: string, when: string, url: string) => (winner: string, pct?: number | number[]): RaceResult => ({ status: 'leading', winner, source, when, url, ...(pct === undefined ? {} : { pct }) });
const sos = lead('CA Secretary of State', 'Nov 9, 5:14 p.m. update', 'https://electionresults.sos.ca.gov/');
const sosBm = lead('CA Secretary of State', 'Nov 9, 5:14 p.m. update', 'https://electionresults.sos.ca.gov/returns/ballot-measures');
const sdc = lead('San Diego County Registrar', 'Nov 9, 5:57 p.m. update', 'https://www.livevoterturnout.com/ENR/sandiegocaenr/25/en/Index_25.html');
const lac = lead('LA County Registrar', 'Nov 9, 4:45 p.m. update', 'https://results.lavote.gov/#year=2026&election=4348');
const occ = lead('Orange County Registrar', 'Nov 9, 5:00 p.m. update', 'https://www.livevoterturnout.com/ENR/orangecaenr/24/en/phkv4sV_Index_24.html');
const riv = lead('Riverside County Registrar', 'Nov 9, 5:55 p.m. update', 'https://www.livevoterturnout.com/ENR/riversidecaenr/12/en/Index_12.html');
const plc = lead('Placer County Elections', 'Nov 4, 12:16 a.m. update', 'https://www.placercountyelections.gov/Uploads/documents/11032026/11032026_results05.pdf');
const ala = lead('Alameda County Registrar', 'Nov 9, 4:59 p.m. update', 'https://alamedacountyca.gov/rovresults/260');
const scc = lead('Santa Clara County Registrar', 'Nov 9, 5:02 p.m. update', 'https://results.enr.clarityelections.com/CA/Santa_Clara/127570/web.345435/#/summary');
const cos = lead('Colorado Secretary of State', 'Nov 9, 5:19 p.m. MT update', 'https://results.enr.clarityelections.com/CO/127407/');
const den = lead('Denver Elections', 'Nov 6, 3:49 p.m. MT update', 'https://results.enr.clarityelections.com/CO/Denver/127425/');

export const RESULTS: Record<string, RaceResult> = {
  // California statewide
  governor: ap('Becerra', `${AP_CA}california-governor-results/`),
  'lt-governor': ap('Ma', `${AP_CA}california-lieutenant-governor-results/`),
  'secretary-state': ap('Weber', `${AP_CA}california-secretary-of-state-results/`),
  'attorney-general': ap('Bonta', `${AP_CA}california-attorney-general-results/`),
  controller: ap('Cohen', AP_CA_ALL),
  treasurer: ap('Kounalakis', AP_CA_ALL),
  'insurance-commissioner': ap('Kim', AP_CA_ALL, 'Nov 7'),
  spi: ap('Barrera', AP_CA_ALL, 'Nov 6'),
  'retention-supreme': sos('All retained'),
  'retention-dca1': sos('All retained'),
  'retention-dca2': sos('All retained'),
  'retention-dca3': sos('All retained'),
  'retention-dca4': sos('All retained'),
  'retention-dca5': sos('All retained'),
  'retention-dca6': sos('All retained'),
  'prop-1': ap('Yes', AP_CA_ALL),
  'prop-2': ap('Yes', AP_CA_ALL),
  'prop-3': ap('Yes', AP_CA_ALL, 'Nov 4'),
  'prop-4': sosBm('No', 49.7),
  'prop-5': sosBm('Yes', 52.0),
  'prop-37': ap('Yes', `${AP_CA}california-proposition-37-results/`),
  'prop-38': sosBm('Yes', 54.1),
  'prop-39': ap('No', `${AP_CA}california-proposition-39-results/`),
  'prop-40': sosBm('No', 47.1),
  'prop-41': ap('No', `${AP_CA}california-proposition-41-results/`, 'Nov 7'),
  'prop-42': sosBm('Yes', 51.7),
  'prop-43': ap('No', AP_CA_ALL, 'Nov 7'),
  'prop-44': ap('No', AP_CA_ALL),
  'prop-45': ap('No', AP_CA_ALL, 'Nov 7'),
  'boe-d1': sos('Esparza', 54.8),
  'boe-d2': ap('Lieber', AP_CA_ALL, 'Nov 7'),
  'boe-d3': ap('Gipson', AP_CA_ALL, 'Nov 5'),
  'boe-d4': ap('Umberg', AP_CA_ALL, 'Nov 7'),

  // U.S. House: AP calls, otherwise the SOS count
  'us-rep-ca1': ap('McGuire', `${AP_HOUSE}#1`),
  'us-rep-ca2': ap('Huffman', `${AP_HOUSE}#2`),
  'us-rep-ca3': ap('Bera', `${AP_HOUSE}#3`),
  'us-rep-ca4': sos('Jones', 52.3),
  'us-rep-ca5': ap('McClintock', `${AP_HOUSE}#5`),
  'us-rep-ca6': ap('Pan', `${AP_HOUSE}#6`),
  'us-rep-ca7': sos('Matsui', 55.8),
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
  'us-rep-ca23': sos('Obernolte', 50.8),
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
  'us-rep-ca40': sos('Calvert', 53.7),
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
  'senate-sd2': ap('Connolly', AP_CA_ALL),
  'senate-sd4': sos('Duarte', 53.1),
  'senate-sd6': sos('Niello', 51.0),
  'senate-sd8': ap('Ashby', AP_CA_ALL),
  'senate-sd10': ap('Sakakihara', AP_CA_ALL),
  'senate-sd12': ap('Magsig', AP_CA_ALL, 'Nov 5'),
  'senate-sd14': ap('Soria', AP_CA_ALL, 'Nov 5'),
  'senate-sd16': ap('Hurtado', AP_CA_ALL, 'Nov 5'),
  'senate-sd18': ap('Padilla', AP_CA_ALL),
  'senate-sd20': ap('Menjivar', AP_CA_ALL),
  'senate-sd22': ap('Rubio', AP_CA_ALL),
  'senate-sd24': ap('Goldsmith', AP_CA_ALL, 'Nov 6'),
  'senate-sd26': ap('Hernandez', AP_CA_ALL, 'Nov 8'),
  'senate-sd28': ap('Smallwood-Cuevas', AP_CA_ALL),
  'senate-sd30': ap('Archuleta', AP_CA_ALL),
  'senate-sd32': sos('Seyarto', 52.6),
  'senate-sd34': ap('Valencia', AP_CA_ALL),
  'senate-sd36': sos('Duncan', 50.9),
  'senate-sd38': ap('Blakespear', AP_CA_ALL, 'Nov 7'),
  'senate-sd40': sos('Elliott', 53.2),

  // State Assembly (SOS count)
  'assembly-ad1': ap('Hadwick', AP_CA_ALL, 'Nov 7'),
  'assembly-ad2': ap('Rogers', AP_CA_ALL),
  'assembly-ad3': sos('Belza', 57.1),
  'assembly-ad4': ap('Aguiar-Curry', AP_CA_ALL),
  'assembly-ad5': ap('Patterson', AP_CA_ALL, 'Nov 6'),
  'assembly-ad6': ap('Krell', AP_CA_ALL),
  'assembly-ad7': sos('Slavensky', 53.1),
  'assembly-ad8': ap('Tangipa', AP_CA_ALL),
  'assembly-ad9': sos('Flora', 56.1),
  'assembly-ad10': ap('Nguyen', AP_CA_ALL),
  'assembly-ad11': ap('Wilson', AP_CA_ALL),
  'assembly-ad12': sos('Elward', 56.1),
  'assembly-ad13': ap('Ransom', AP_CA_ALL, 'Nov 4'),
  'assembly-ad14': ap('Wicks', AP_CA_ALL),
  'assembly-ad15': ap('Ávila Farías', AP_CA_ALL, 'Nov 4'),
  'assembly-ad16': ap('Bauer-Kahan', AP_CA_ALL),
  'assembly-ad17': ap('Haney', AP_CA_ALL),
  'assembly-ad18': ap('Bonta', AP_CA_ALL),
  'assembly-ad19': ap('Stefani', AP_CA_ALL),
  'assembly-ad20': ap('Ortega', AP_CA_ALL),
  'assembly-ad21': ap('Papan', AP_CA_ALL),
  'assembly-ad22': ap('Alanis', AP_CA_ALL),
  'assembly-ad23': ap('Berman', AP_CA_ALL),
  'assembly-ad24': ap('Lee', AP_CA_ALL),
  'assembly-ad25': ap('Kalra', AP_CA_ALL),
  'assembly-ad26': ap('Ahrens', AP_CA_ALL),
  'assembly-ad27': ap('Pacheco', AP_CA_ALL, 'Nov 4'),
  'assembly-ad28': ap('Pellerin', AP_CA_ALL),
  'assembly-ad29': ap('Rivas', AP_CA_ALL),
  'assembly-ad30': ap('Addis', AP_CA_ALL),
  'assembly-ad31': ap('Perea', AP_CA_ALL),
  'assembly-ad32': ap('Couch', AP_CA_ALL),
  'assembly-ad33': sos('Macedo', 51.2),
  'assembly-ad34': sos('Hughes', 52.6),
  'assembly-ad35': ap('Gonzales', AP_CA_ALL),
  'assembly-ad36': ap('Obeso-Martinez', AP_CA_ALL, 'Nov 7'),
  'assembly-ad37': ap('Hart', AP_CA_ALL),
  'assembly-ad38': ap('Bennett', AP_CA_ALL, 'Nov 4'),
  'assembly-ad39': ap('Carrillo', AP_CA_ALL),
  'assembly-ad40': ap('Schiavo', AP_CA_ALL, 'Nov 4'),
  'assembly-ad41': ap('Harabedian', AP_CA_ALL),
  'assembly-ad42': sos('Klein Lopez', 56.5),
  'assembly-ad43': ap('Rodriguez', AP_CA_ALL),
  'assembly-ad44': ap('Schultz', AP_CA_ALL),
  'assembly-ad45': ap('Ramos', AP_CA_ALL),
  'assembly-ad46': ap('Gabriel', AP_CA_ALL),
  'assembly-ad47': sos('Namvar', 54.8),
  'assembly-ad48': ap('Rubio', AP_CA_ALL),
  'assembly-ad49': ap('Fong', AP_CA_ALL),
  'assembly-ad50': ap('Garcia', AP_CA_ALL, 'Nov 4'),
  'assembly-ad51': ap('Zbur', AP_CA_ALL, 'Nov 5'),
  'assembly-ad52': ap('Caloza', AP_CA_ALL),
  'assembly-ad53': ap('Rodriguez', AP_CA_ALL),
  'assembly-ad54': ap('Gonzalez', AP_CA_ALL),
  'assembly-ad55': ap('Bryan', AP_CA_ALL, 'Nov 4'),
  'assembly-ad56': ap('Calderon', AP_CA_ALL),
  'assembly-ad57': ap('Elhawary', AP_CA_ALL),
  'assembly-ad58': ap('Cervantes', AP_CA_ALL, 'Nov 7'),
  'assembly-ad59': ap('Chen', AP_CA_ALL, 'Nov 5'),
  'assembly-ad60': ap('Jackson', AP_CA_ALL, 'Nov 4'),
  'assembly-ad61': ap('McKinnor', AP_CA_ALL),
  'assembly-ad62': ap('Solache', AP_CA_ALL),
  'assembly-ad63': sos('Johnson', 57.2),
  'assembly-ad64': ap('Pacheco', AP_CA_ALL),
  'assembly-ad65': ap('Davis', AP_CA_ALL),
  'assembly-ad66': ap('Seo', AP_CA_ALL, 'Nov 7'),
  'assembly-ad67': ap('Pulido', AP_CA_ALL, 'Nov 4'),
  'assembly-ad68': sos('Lopez', 51.3),
  'assembly-ad69': ap('Lowenthal', AP_CA_ALL, 'Nov 4'),
  'assembly-ad70': sos('Swift', 51.0),
  'assembly-ad71': sos('Sanchez', 53.9),
  'assembly-ad72': sos('Van Der Mark', 50.3),
  'assembly-ad73': ap('Petrie-Norris', AP_CA_ALL, 'Nov 5'),
  'assembly-ad74': sos('Davies', 50.4),
  'assembly-ad75': sos('DeMaio', 55.6),
  'assembly-ad76': ap('Patel', AP_CA_ALL, 'Nov 7'),
  'assembly-ad77': ap('Boerner', AP_CA_ALL, 'Nov 5'),
  'assembly-ad78': ap('Ward', AP_CA_ALL),
  'assembly-ad79': ap('Sharp-Collins', AP_CA_ALL, 'Nov 4'),
  'assembly-ad80': ap('Alvarez', AP_CA_ALL, 'Nov 4'),

  // San Diego County
  'sd-county-assessor': sdc('Marks', 100),
  'sd-county-treasurer': sdc('Cohen', 58.14),
  'sd-supervisor-d4': sdc('Montgomery Steppe', 66.55),
  'sd-supervisor-d5': sdc('Jones', 59.04),
  'sd-county-board-ed-d3': sdc('Muñoz', 62.92),
  'sd-county-board-ed-d5': sdc('Shea', 68.15),
  'sd-measure-a': sdc('Yes', 52.77),
  'sd-measure-b': sdc('Yes', 52.81),
  'sdusd-measure-m': sdc('Yes', 67.07),
  'sdusd-district-b': sdc('Hazan', 100),
  'sdusd-district-c': sdc('Gore', 100),
  'sdccd-district-a': sdc('Nieto Senour', 79.11),
  'sdccd-district-c': sdc('Milgrim', 73.17),
  'sd-city-council-d2': sdc('Crosby', 56.36),
  'sd-city-council-d4': sdc('Abraham', 53.1),
  'sd-city-council-d6': sdc('Lee', 61.59),
  'sd-city-council-d8': sdc('Martinez', 56.89),
  'san-ysidro-sd-board': sdc('Lopez, Arias, Rosario', [18.13, 16.75, 16.6]),
  'sduhsd-trustee-area-3': sdc('Doyle', 63.33),
  'sduhsd-trustee-area-5': sdc('Moodie', 58.38),
  'del-mar-city-council': sdc('Spieker, Grewal', [32.92, 27.02]),
  'poway-usd-area-b': sdc('Sosnowski', 55.32),
  'poway-usd-area-c': sdc('Plotzke', 60.52),
  'poway-usd-area-d': sdc("O'Connor-Ratcliff", 54.35),
  'palomar-ccd-area-1': sdc('Patacsil', 55.72),
  'palomar-ccd-area-5': sdc('Jeffries', 45.73),
  'palomar-health-div-3': sdc('Telahun', 50.84),
  'palomar-health-div-5': sdc('Christensen', 54.92),
  'palomar-health-div-7': sdc('Butler', 55.98),
  'cvesd-seat-1': sdc('Castillo Tolston', 55.12),
  'cvesd-seat-3': sdc('Segura', 46.32),
  'cvesd-seat-5': sdc('Dominguez Cervantes', 40.27),
  'swc-trustee-area-1': sdc('Moreno', 57.86),
  'swc-trustee-area-4': sdc('Cuellar-Martinez', 49.19),
  'chula-vista-mayor': sdc('McCann', 56.91),
  'chula-vista-council-d1': sdc('Chavez', 57.98),
  'chula-vista-council-d2': sdc('Preciado', 52.79),
  'chula-vista-city-attorney': sdc('Verdugo', 100),
  'otay-water-div-3': sdc('Croucher', 73.88),
  'encinitas-usd-board': sdc('Hargrave, Shen, Cocayne', [23.77, 21.74, 21.38]),
  'del-mar-usd-board': sdc('Kholos, Rafner, Fitzpatrick', [32.2, 26.34, 21.09]),
  'carlsbad-mayor': sdc('Blackburn', 71.25),
  'carlsbad-city-clerk': sdc('Freisinger', 100),
  'carlsbad-city-treasurer': sdc('Peacox', 66.73),
  'carlsbad-council-d3': sdc('Bhat-Patel', 70.75),
  'euhsd-trustee-area-1': sdc('Weller', 55.13),
  'euhsd-trustee-area-2': sdc('Hinrichs', 44.79),
  'euhsd-trustee-area-5': sdc('Vincent', 57.93),
  'eusd-trustee-area-2': sdc('Shulok', 55.55),
  'eusd-trustee-area-4': sdc('Harper', 56.81),
  'eusd-trustee-area-5': sdc('Wagner', 60.44),
  'escondido-mayor': sdc('Velazquez', 50.3),
  'escondido-council-d1': sdc('Valenzuela', 67.43),
  'escondido-council-d2': sdc('DiMartino', 52.26),
  'deer-springs-fire-board': sdc('Gordon, Kerrin, Caples', [29.08, 24.92, 21.76]),
  'rincon-water-div-3': sdc('Martinez', 51.99),
  'suhsd-trustee-area-1': sdc('Betancourt-Castañeda', 67.38),
  'el-cajon-mayor': sdc('Wells', 58.08),
  'el-cajon-council-d1': sdc('Kaye', 53.7),
  'cajon-valley-trustee-area-2': sdc('Covell', 59),
  'cajon-valley-trustee-area-3': sdc('Schworm', 52.35),
  'guhsd-trustee-area-3': sdc('Littrell', 53.65),
  'guhsd-trustee-area-4': sdc('Mull', 49.63),
  'la-mesa-mayor': sdc('Normandy-Dillard', 47.5),
  'la-mesa-city-council': sdc('Natalia, Alo', [50.04, 49.96]),
  'la-mesa-city-treasurer': sdc('Stewart', 52.1),
  'lmsvsd-trustee-area-1': sdc('Tweedle', 52.46),
  'lmsvsd-trustee-area-2': sdc('Littig', 50.7),
  'lmsvsd-trustee-area-3': sdc('Coston', 59.98),
  'helix-water-div-2': sdc('Damsky', 70.59),
  'helix-water-div-4': sdc('Hedberg', 63.17),
  'lmsvsd-measure-aa': sdc('Yes', 65.52),
  'gcccd-measure-g': sdc('No', 54.13), // bonds need 55% Yes
  'santee-council-d1': sdc('McNelis', 62.14),
  'santee-council-d2': sdc('Hall', 58.41),
  'santee-sd-seat-1': sdc('Petretta', 59.68),
  'santee-sd-seat-5': sdc('Dobesh', 55.66),
  'padre-dam-water-div-1': sdc('Fordyce', 50.1),
  'santee-measure-y': sdc('No', 40.98),
  'santee-sd-measure-bb': sdc('No', 51.73),
  'oceanside-council-d1': sdc('Joyce', 61.98),
  'oceanside-council-d2': sdc('Robinson', 39.06),
  'oceanside-usd-trustee-area-1': sdc('Licona', 61.37),
  'oceanside-usd-trustee-area-3': sdc('Pearson', 54.44),
  'oceanside-usd-trustee-area-4': sdc('Riojas Alvarez', 58.55),
  'tri-city-healthcare-zone-2': sdc('Lauriano', 60.43),
  'oceanside-measure-r': sdc('Yes', 64.39),
  'oceanside-measure-s': sdc('No', 49.8),
  'vista-mayor': sdc('Zuniga', 50.84),
  'vista-council-d1': sdc('Contreras', 48.71),
  'vista-council-d4': sdc("O'Donnell", 71.18),
  'vista-usd-trustee-area-3': sdc('Alvarado', 67.93),
  'san-marcos-usd-area-e': sdc('Baker', 55.93),
  'vista-irrigation-div-2': sdc('Vásquez', 46.11),
  'vista-usd-measure-n': sdc('Yes', 57.99), // bonds need 55% Yes
  'fuesd-measure-k': sdc('No', 54.54), // bonds need 55% Yes

  // Los Angeles County
  'la-sheriff': ap('Luna', AP_CA_ALL),
  'la-measure-a': lac('Yes', 62.23),
  'la-measure-e': lac('Yes', 75.07),
  'laccd-seat-2': lac('Veres', 40.91),
  'laccd-seat-4': lac('Harris', 57.31),
  'laccd-seat-6': lac('Winston', 38.66),
  'la-mayor': ap('Raman', `${AP_CA}california-los-angeles-mayor-results/`, 'Nov 5'),
  'la-city-attorney': lac('Roy', 68.42),
  'la-measure-te': lac('Yes', 60.95),
  'la-measure-la': lac('Yes', 62.37),
  'la-measure-pl': lac('Yes', 71.66),
  'la-measure-ee': lac('Yes', 52.77),
  'la-measure-prk': lac('Yes', 79.17),
  'la-measure-prt': lac('Yes', 77.28),
  'la-measure-sc': lac('Yes', 79.04),
  'la-measure-fd': lac('Yes', 53.72),
  'la-superior-court-64': lac('Ghobadi', 51.7),
  'la-superior-court-65': lac('Clayton', 56.64),
  'la-superior-court-87': lac('Bayne', 55.34),
  'la-superior-court-131': lac('Tryfman', 50.16),
  'burbank-city-council': lac('Perez, Van Gorder, Southerland', [22.87, 14.72, 12.84]),
  'burbank-city-clerk': lac('Clark', 100),
  'burbank-city-treasurer': lac('Palmer', 100),
  'burbank-measure-c': lac('Yes', 78.99),
  'burbank-measure-cc': lac('Yes', 52.69),
  'burbank-measure-cd': lac('No', 21.42),
  'busd-trustee-area-3': lac('Morrison', 50.44),
  'monterey-park-council-d5': lac('Ngo', 50.06),
  'monterey-park-city-clerk': lac('Leung', 100),
  'monterey-park-city-treasurer': lac('Lee', 100),
  'monterey-park-measure-hom': lac('Yes', 86.43),
  'monterey-park-measure-aaa': lac('Yes', 77.22),

  // Orange County
  'orange-mayor': occ('Slater', 57.24),
  'mwdoc-division-2': occ('Dick', 42.16),
  'orange-measure-i': occ('Yes', 54.67),
  'orange-measure-j': occ('Yes', 59.55),
  'orange-measure-k': occ('No', 35.29),
  'nocccd-trustee-area-1': occ('Dunsheath', 67.68),
  'coast-ccd-trustee-area-1': occ('Kalmick', 46.02),
  'ggusd-trustee-area-2': occ('Nguyen', 58.78),
  'oc-supervisor-d4': occ('Traut', 51.69),
  'garden-grove-mayor': occ('Klopfenstein', 54.19),
  'garden-grove-council-d1': occ('Flanders', 49.65),
  'garden-grove-council-d3': occ('Tran', 54.56),

  // Riverside County
  'rivco-superior-court-10': riv('Paradise', 54.07),
  'mvusd-trustee-area-1': riv('Pardue', 55.47),
  'mvusd-trustee-area-2': riv('Young', 53.77),
  'rcwd-board': riv('Plummer, Brady, Harkey, Edwards', [23.03, 22.92, 22.6, 16.25]),
  'mvusd-measure-m': riv('No', 50.04),
  'rctc-measure-a': riv('Yes', 70.45),
  'temecula-council-d5': riv('Schwank', 36.3),
  'tvusd-trustee-area-2': riv('Barham', 53.03),
  'tvusd-trustee-area-4': riv('Sola', 54.35),
  'msjc-trustee-area-3': riv('Carpenter', 65.59),
  'tvusd-measure-s': riv('No', 52.74), // bonds need 55% Yes

  // Placer County
  'rocklin-city-council': plc('Halldin, Gayaldo', [44.48, 37.47]),
  'rusd-trustee-area-4': plc('Hoehne', 58.65),
  'rusd-trustee-area-5': plc('Counter', 55.75),
  'placer-measure-g': plc('Yes', 69.8),
  'placer-measure-h': plc('Yes', 51.64),
  'rocklin-measure-c': plc('Yes', 52.83),
  'rusd-measure-d': plc('No', 52.16), // bonds need 55% Yes

  // Alameda County
  'hayward-mayor': ala('Salinas', 76.74),
  'hayward-council-d6': ala('Roche', 100),
  'husd-trustee-area-4': ala('Fernelius', 53.44),
  'clpccd-area-6': ala('Gin', 60.27),
  'clpccd-area-3': ala('Mojadedi', 57.16),
  'ac-transit-ward-4': ala('Syed', 79),
  'bart-district-4': ala('Raburn', 69.03),
  'ebrpd-ward-3': ala('Lewington', 50.51),
  'hayward-measure-cc': ala('Yes', 65.02),
  'bay-area-regional-transit-measure': ala('Yes', 66.83), // Alameda's share only; no combined multi-county total posted yet

  // Santa Clara County
  'mountain-view-city-council': scc('Sylvester, Poicon, Paymer', [18.33, 15.18, 15.17]),
  'mvwsd-board': scc('Conley, Lambert', [33.76, 26.95]),
  'mvlahsd-trustee-area-3': scc('Cornes', 56.97),
  'valley-water-d7': scc('Dailey', 58.52),
  'mountain-view-measure-e': scc('Yes', 71.29),
  'mountain-view-measure-f': scc('Yes', 79.39),
  'el-camino-measure-s': scc('Yes', 91.68),

  // Colorado statewide
  'co-us-senate': ap('Hickenlooper', `${AP_CA}colorado-us-senate-results/`),
  'co-us-rep-cd1': ap('Kiros', `${AP_CA}colorado-us-house-results/#1`),
  'co-governor': ap('Weiser', `${AP_CA}colorado-governor-results/`),
  'co-secretary-of-state': ap('Gonzalez', `${AP_CA}colorado-secretary-of-state-results/`),
  'co-attorney-general': ap('Griswold', `${AP_CA}colorado-attorney-general-results/`),
  'co-treasurer': ap('Bridges', AP_CO_ALL),
  'co-state-board-ed-cd1': ap('Escárcega', AP_CO_ALL),
  'co-retention-supreme': cos('All retained'),
  'co-retention-appeals': cos('All retained'),
  'co-amendment-81': ap('No', `${AP_CA}colorado-amendment-81-results/`, 'Nov 4'),
  'co-amendment-82': ap('No', `${AP_CA}colorado-amendment-82-results/`, 'Nov 4'),
  'co-amendment-83': ap('No', AP_CO_ALL, 'Nov 4'),
  'co-amendment-84': ap('No', AP_CO_ALL),
  'co-amendment-85': ap('No', AP_CO_ALL, 'Nov 6'),
  'co-amendment-86': ap('No', AP_CO_ALL, 'Nov 6'),
  'co-amendment-87': ap('Yes', AP_CO_ALL, 'Nov 6'),
  'co-prop-nn': ap('Yes', AP_CO_ALL),
  'co-prop-132': ap('Yes', `${AP_CA}colorado-proposition-132-results/`, 'Nov 6'),
  'co-prop-133': ap('Yes', AP_CO_ALL),
  'co-prop-134': ap('Yes', `${AP_CA}colorado-proposition-134-results/`, 'Nov 5'),
  'co-prop-135': ap('Yes', `${AP_CA}colorado-proposition-135-results/`, 'Nov 6'),
  'co-prop-136': ap('No', AP_CO_ALL, 'Nov 6'),
  'co-prop-137': ap('Yes', AP_CO_ALL, 'Nov 6'),

  // Denver
  'co-retention-denver-district': den('All retained'),
  'co-retention-denver-county': den('All retained'),
  'co-senate-sd34': ap('Garcia Irlando', AP_CO_ALL),
  'co-senate-sd31': ap('Ball', AP_CO_ALL),
  'co-house-hd4': ap('Espenoza', AP_CO_ALL),
  'co-house-hd5': ap('Sandoval', AP_CO_ALL),
  'denver-council-at-large-b': den('Mejía', 29.35),
  'co-rtd-district-c': ap('Meyer', AP_CO_ALL),
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
