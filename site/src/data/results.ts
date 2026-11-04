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
}

// Sources (election-night counts, Nov 3, 2026). Each helper fills `source`, `when` and `url` for one counter.
const AP_HOUSE = 'https://apnews.com/projects/elections-2026/california-us-house-results/';
const AP_CA = 'https://apnews.com/projects/elections-2026/';
const ap = (winner: string, url: string, when = 'Nov 3'): RaceResult => ({ status: 'called', winner, source: 'AP', when, url });
const lead = (source: string, when: string, url: string) => (winner: string): RaceResult => ({ status: 'leading', winner, source, when, url });
const sos = lead('CA Secretary of State', 'Nov 3, 10:25 p.m. update', 'https://electionresults.sos.ca.gov/');
const sosBm = lead('CA Secretary of State', 'Nov 3, 11:13 p.m. update', 'https://electionresults.sos.ca.gov/returns/ballot-measures');
const sdc = lead('San Diego County Registrar', 'Nov 3, 10:03 p.m. update', 'https://www.livevoterturnout.com/ENR/sandiegocaenr/25/en/Index_25.html');
// Contests re-read at the later count (the rest of the summary page didn't load).
const sdc2 = lead('San Diego County Registrar', 'Nov 3, 10:58 p.m. update', 'https://www.livevoterturnout.com/ENR/sandiegocaenr/25/en/Index_25.html');
const lac = lead('LA County Registrar', 'Nov 3 election-night update', 'https://results.lavote.gov/#year=2026&election=4348');
const occ = lead('Orange County Registrar', 'Nov 3, 10:31 p.m. update', 'https://www.livevoterturnout.com/ENR/orangecaenr/24/en/phkv4sV_Index_24.html');
const riv = lead('Riverside County Registrar', 'Nov 3, 10:13 p.m. update', 'https://www.livevoterturnout.com/ENR/riversidecaenr/12/en/Index_12.html');
const riv2 = lead('Riverside County Registrar', 'Nov 3, 11:11 p.m. update', 'https://www.livevoterturnout.com/ENR/riversidecaenr/12/en/Index_12.html');
const plc = lead('Placer County Elections', 'Nov 3 election-night update', 'https://www.placercountyelections.gov/election-results/');
const ala = lead('Alameda County Registrar', 'Nov 3, 11:11 p.m. update', 'https://alamedacountyca.gov/rovresults/260');
const scc = lead('Santa Clara County Registrar', 'Nov 3, 11:22 p.m. update', 'https://results.enr.clarityelections.com/CA/Santa_Clara/127570/web.345435/#/summary');
const cos = lead('Colorado Secretary of State', 'Nov 4, 12:21 a.m. MT update', 'https://results.enr.clarityelections.com/CO/127407/');
const den = lead('Denver Elections', 'Nov 3, 11:30 p.m. MT update', 'https://results.enr.clarityelections.com/CO/Denver/127425/');

export const RESULTS: Record<string, RaceResult> = {
  // California statewide
  governor: ap('Becerra', `${AP_CA}california-governor-results/`),
  'lt-governor': ap('Ma', `${AP_CA}california-lieutenant-governor-results/`),
  'secretary-state': ap('Weber', `${AP_CA}california-secretary-of-state-results/`),
  'attorney-general': ap('Bonta', `${AP_CA}california-attorney-general-results/`),
  controller: sos('Cohen'),
  treasurer: sos('Kounalakis'),
  'insurance-commissioner': sos('Kim'),
  spi: sos('Barrera'),
  'retention-supreme': sos('All retained'),
  'retention-dca1': sos('All retained'),
  'retention-dca2': sos('All retained'),
  'retention-dca3': sos('All retained'),
  'retention-dca4': sos('All retained'),
  'retention-dca5': sos('All retained'),
  'retention-dca6': sos('All retained'),
  'prop-1': sosBm('Yes'),
  'prop-2': sosBm('Yes'),
  'prop-3': sosBm('Yes'),
  'prop-4': sosBm('No'),
  'prop-5': sosBm('Yes'),
  'prop-37': ap('Yes', `${AP_CA}california-proposition-37-results/`),
  'prop-38': sosBm('Yes'),
  'prop-39': ap('No', `${AP_CA}california-proposition-39-results/`),
  'prop-40': sosBm('No'),
  'prop-41': sosBm('No'),
  'prop-42': sosBm('Yes'),
  'prop-43': sosBm('No'),
  'prop-44': sosBm('No'),
  'prop-45': sosBm('No'),
  'boe-d1': sos('Esparza'),
  'boe-d2': sos('Lieber'),
  'boe-d3': sos('Gipson'),
  'boe-d4': sos('Umberg'),

  // U.S. House: AP calls, otherwise the SOS count
  'us-rep-ca1': ap('McGuire', `${AP_HOUSE}#1`),
  'us-rep-ca2': ap('Huffman', `${AP_HOUSE}#2`),
  'us-rep-ca3': ap('Bera', `${AP_HOUSE}#3`),
  'us-rep-ca4': sos('Jones'),
  'us-rep-ca5': sos('McClintock'),
  'us-rep-ca6': sos('Pan'),
  'us-rep-ca7': sos('Matsui'),
  'us-rep-ca8': ap('Garamendi', `${AP_HOUSE}#8`),
  'us-rep-ca9': ap('Harder', `${AP_HOUSE}#9`),
  'us-rep-ca10': ap('DeSaulnier', `${AP_HOUSE}#10`),
  'us-rep-ca11': sos('Wiener'),
  'us-rep-ca12': ap('Simon', `${AP_HOUSE}#12`),
  'us-rep-ca13': sos('Gray'),
  'us-rep-ca14': sos('Wahab'),
  'us-rep-ca15': ap('Mullin', `${AP_HOUSE}#15`),
  'us-rep-ca16': ap('Liccardo', `${AP_HOUSE}#16`),
  'us-rep-ca17': ap('Khanna', `${AP_HOUSE}#17`),
  'us-rep-ca18': ap('Lofgren', `${AP_HOUSE}#18`),
  'us-rep-ca19': ap('Panetta', `${AP_HOUSE}#19`),
  'us-rep-ca20': ap('Fong', `${AP_HOUSE}#20`),
  'us-rep-ca21': ap('Costa', `${AP_HOUSE}#21`),
  'us-rep-ca22': sos('Villegas'),
  'us-rep-ca23': sos('Obernolte'),
  'us-rep-ca24': ap('Carbajal', `${AP_HOUSE}#24`),
  'us-rep-ca25': ap('Ruiz', `${AP_HOUSE}#25`),
  'us-rep-ca26': ap('Irwin', `${AP_HOUSE}#26`),
  'us-rep-ca27': ap('Whitesides', `${AP_HOUSE}#27`),
  'us-rep-ca28': ap('Chu', `${AP_HOUSE}#28`),
  'us-rep-ca29': sos('Rivas'),
  'us-rep-ca30': ap('Friedman', `${AP_HOUSE}#30`),
  'us-rep-ca31': ap('Cisneros', `${AP_HOUSE}#31`),
  'us-rep-ca32': ap('Sherman', `${AP_HOUSE}#32`),
  'us-rep-ca33': ap('Aguilar', `${AP_HOUSE}#33`),
  'us-rep-ca34': sos('Gonzales-Torres'),
  'us-rep-ca35': ap('Torres', `${AP_HOUSE}#35`),
  'us-rep-ca36': ap('Lieu', `${AP_HOUSE}#36`),
  'us-rep-ca37': ap('Kamlager-Dove', `${AP_HOUSE}#37`),
  'us-rep-ca38': ap('Solis', `${AP_HOUSE}#38`),
  'us-rep-ca39': ap('Takano', `${AP_HOUSE}#39`),
  'us-rep-ca40': sos('Calvert'),
  'us-rep-ca41': ap('Sánchez', `${AP_HOUSE}#41`),
  'us-rep-ca42': ap('Garcia', `${AP_HOUSE}#42`),
  'us-rep-ca43': ap('Waters', `${AP_HOUSE}#43`),
  'us-rep-ca44': ap('Barragán', `${AP_HOUSE}#44`),
  'us-rep-ca45': sos('Tran'),
  'us-rep-ca46': ap('Correa', `${AP_HOUSE}#46`),
  'us-rep-ca47': sos('Min'),
  'us-rep-ca48': sos('Von Wilpert'),
  'us-rep-ca49': sos('Levin'),
  'us-rep-ca50': ap('Peters', `${AP_HOUSE}#50`),
  'us-rep-ca51': ap('Jacobs', `${AP_HOUSE}#51`),
  'us-rep-ca52': ap('Vargas', `${AP_HOUSE}#52`),

  // State Senate (SOS count)
  'senate-sd2': sos('Connolly'),
  'senate-sd4': sos('Duarte'),
  'senate-sd6': sos('Frame'),
  'senate-sd8': sos('Ashby'),
  'senate-sd10': sos('Sakakihara'),
  'senate-sd12': sos('Magsig'),
  'senate-sd14': sos('Soria'),
  'senate-sd16': sos('Hurtado'),
  'senate-sd18': sos('Padilla'),
  'senate-sd20': sos('Menjivar'),
  'senate-sd22': sos('Rubio'),
  'senate-sd24': sos('Goldsmith'),
  'senate-sd26': sos('Hernandez'),
  'senate-sd28': sos('Smallwood-Cuevas'),
  'senate-sd30': sos('Archuleta'),
  'senate-sd32': sos('Seyarto'),
  'senate-sd34': sos('Valencia'),
  'senate-sd36': sos('Duncan'),
  'senate-sd38': sos('Blakespear'),
  'senate-sd40': sos('Elliott'),

  // State Assembly (SOS count)
  'assembly-ad1': sos('Hadwick'),
  'assembly-ad2': sos('Rogers'),
  'assembly-ad3': sos('Belza'),
  'assembly-ad4': sos('Aguiar-Curry'),
  'assembly-ad5': sos('Patterson'),
  'assembly-ad6': sos('Krell'),
  'assembly-ad7': sos('Slavensky'),
  'assembly-ad8': sos('Tangipa'),
  'assembly-ad9': sos('Flora'),
  'assembly-ad10': sos('Nguyen'),
  'assembly-ad11': sos('Wilson'),
  'assembly-ad12': sos('Elward'),
  'assembly-ad13': sos('Ransom'),
  'assembly-ad14': sos('Wicks'),
  'assembly-ad15': sos('Ávila Farías'),
  'assembly-ad16': sos('Bauer-Kahan'),
  'assembly-ad17': sos('Haney'),
  'assembly-ad18': sos('Bonta'),
  'assembly-ad19': sos('Stefani'),
  'assembly-ad20': sos('Ortega'),
  'assembly-ad21': sos('Papan'),
  'assembly-ad22': sos('Alanis'),
  'assembly-ad23': sos('Berman'),
  'assembly-ad24': sos('Lee'),
  'assembly-ad25': sos('Kalra'),
  'assembly-ad26': sos('Ahrens'),
  'assembly-ad27': sos('Pacheco'),
  'assembly-ad28': sos('Pellerin'),
  'assembly-ad29': sos('Rivas'),
  'assembly-ad30': sos('Addis'),
  'assembly-ad31': sos('Perea'),
  'assembly-ad32': sos('Couch'),
  'assembly-ad33': sos('Macedo'),
  'assembly-ad34': sos('Hughes'),
  'assembly-ad35': sos('Gonzales'),
  'assembly-ad36': sos('Obeso-Martinez'),
  'assembly-ad37': sos('Hart'),
  'assembly-ad38': sos('Bennett'),
  'assembly-ad39': sos('Carrillo'),
  'assembly-ad40': sos('Schiavo'),
  'assembly-ad41': sos('Harabedian'),
  'assembly-ad42': sos('Klein Lopez'),
  'assembly-ad43': sos('Rodriguez'),
  'assembly-ad44': sos('Schultz'),
  'assembly-ad45': sos('Ramos'),
  'assembly-ad46': sos('Gabriel'),
  'assembly-ad47': sos('Namvar'),
  'assembly-ad48': sos('Rubio'),
  'assembly-ad49': sos('Fong'),
  'assembly-ad50': sos('Garcia'),
  'assembly-ad51': sos('Zbur'),
  'assembly-ad52': sos('Caloza'),
  'assembly-ad53': sos('Rodriguez'),
  'assembly-ad54': sos('Gonzalez'),
  'assembly-ad55': sos('Bryan'),
  'assembly-ad56': sos('Calderon'),
  'assembly-ad57': sos('Elhawary'),
  'assembly-ad58': sos('Cervantes'),
  'assembly-ad59': sos('Chen'),
  'assembly-ad60': sos('Jackson'),
  'assembly-ad61': sos('McKinnor'),
  'assembly-ad62': sos('Solache'),
  'assembly-ad63': sos('Johnson'),
  'assembly-ad64': sos('Pacheco'),
  'assembly-ad65': sos('Davis'),
  'assembly-ad66': sos('Seo'),
  'assembly-ad67': sos('Pulido'),
  'assembly-ad68': sos('Penaloza'),
  'assembly-ad69': sos('Lowenthal'),
  'assembly-ad70': sos('Swift'),
  'assembly-ad71': sos('Sanchez'),
  'assembly-ad72': sos('Kluwe'),
  'assembly-ad73': sos('Petrie-Norris'),
  'assembly-ad74': sos('Farias'),
  'assembly-ad75': sos('DeMaio'),
  'assembly-ad76': sos('Patel'),
  'assembly-ad77': sos('Boerner'),
  'assembly-ad78': sos('Ward'),
  'assembly-ad79': sos('Sharp-Collins'),
  'assembly-ad80': sos('Alvarez'),

  // San Diego County
  'sd-county-assessor': sdc('Marks'),
  'sd-county-treasurer': sdc('Cohen'),
  'sd-supervisor-d4': sdc('Montgomery Steppe'),
  'sd-supervisor-d5': sdc('Jones'),
  'sd-county-board-ed-d3': sdc2('Muñoz'),
  'sd-county-board-ed-d5': sdc2('Shea'),
  'sd-measure-a': sdc('Yes'),
  'sd-measure-b': sdc('Yes'),
  'sdusd-measure-m': sdc('Yes'),
  'sdusd-district-b': sdc2('Hazan'),
  'sdusd-district-c': sdc2('Gore'),
  'sdccd-district-a': sdc2('Nieto Senour'),
  'sdccd-district-c': sdc2('Milgrim'),
  'sd-city-council-d2': sdc('Crosby'),
  'sd-city-council-d4': sdc('Abraham'),
  'sd-city-council-d6': sdc('Lee'),
  'sd-city-council-d8': sdc('Martinez'),
  'san-ysidro-sd-board': sdc('Lopez, Rosario, Arias'),
  'sduhsd-trustee-area-3': sdc('Doyle'),
  'sduhsd-trustee-area-5': sdc('Moodie'),
  'del-mar-city-council': sdc('Spieker, Grewal'),
  'poway-usd-area-b': sdc2('Sosnowski'),
  'poway-usd-area-c': sdc2('Plotzke'),
  'poway-usd-area-d': sdc2("O'Connor-Ratcliff"),
  'palomar-ccd-area-1': sdc2('Patacsil'),
  'palomar-ccd-area-5': sdc2('Jeffries'),
  'palomar-health-div-3': sdc('Edwards-Tate'),
  'palomar-health-div-5': sdc('Christensen'),
  'palomar-health-div-7': sdc('Butler'),
  'cvesd-seat-1': sdc('Castillo Tolston'),
  'cvesd-seat-3': sdc('Segura'),
  'cvesd-seat-5': sdc('Dominguez Cervantes'),
  'swc-trustee-area-1': sdc2('Moreno'),
  'swc-trustee-area-4': sdc2('Cuellar-Martinez'),
  'chula-vista-mayor': sdc('McCann'),
  'chula-vista-council-d1': sdc('Chavez'),
  'chula-vista-council-d2': sdc('Preciado'),
  'chula-vista-city-attorney': sdc('Verdugo'),
  'otay-water-div-3': sdc('Croucher'),
  'encinitas-usd-board': sdc('Hargrave, Shen, Cocayne'),
  'del-mar-usd-board': sdc('Kholos, Rafner, Fitzpatrick'),
  'carlsbad-mayor': sdc('Blackburn'),
  'carlsbad-city-clerk': sdc('Freisinger'),
  'carlsbad-city-treasurer': sdc('Peacox'),
  'carlsbad-council-d3': sdc('Bhat-Patel'),
  'euhsd-trustee-area-1': sdc('Weller'),
  'euhsd-trustee-area-2': sdc('Hinrichs'),
  'euhsd-trustee-area-5': sdc('Vincent'),
  'eusd-trustee-area-2': sdc('Shulok'),
  'eusd-trustee-area-4': sdc('Harper'),
  'eusd-trustee-area-5': sdc('Wagner'),
  'escondido-mayor': sdc('White'),
  'escondido-council-d1': sdc('Valenzuela'),
  'escondido-council-d2': sdc('DiMartino'),
  'deer-springs-fire-board': sdc('Gordon, Kerrin, Caples'),
  'rincon-water-div-3': sdc('Hoving'),
  'suhsd-trustee-area-1': sdc('Betancourt-Castañeda'),
  'el-cajon-mayor': sdc('Wells'),
  'el-cajon-council-d1': sdc('Kaye'),
  'cajon-valley-trustee-area-2': sdc('Covell'),
  'cajon-valley-trustee-area-3': sdc('Schworm'),
  'guhsd-trustee-area-3': sdc('Littrell'),
  'guhsd-trustee-area-4': sdc('Mull'),
  'la-mesa-mayor': sdc('Normandy-Dillard'),
  'la-mesa-city-council': sdc('Natalia, Alo'),
  'la-mesa-city-treasurer': sdc('Exeter'),
  'lmsvsd-trustee-area-1': sdc('Tweedle'),
  'lmsvsd-trustee-area-2': sdc('Littig'),
  'lmsvsd-trustee-area-3': sdc('Coston'),
  'helix-water-div-2': sdc('Damsky'),
  'helix-water-div-4': sdc('Hedberg'),
  'lmsvsd-measure-aa': sdc('Yes'),
  'gcccd-measure-g': sdc('No'), // 51.6% Yes; bonds need 55%
  'santee-council-d1': sdc('McNelis'),
  'santee-council-d2': sdc('Hall'),
  'santee-sd-seat-1': sdc('Petretta'),
  'santee-sd-seat-5': sdc('Dobesh'),
  'padre-dam-water-div-1': sdc('Woods'),
  'santee-measure-y': sdc('No'),
  'santee-sd-measure-bb': sdc('No'),
  'oceanside-council-d1': sdc('Joyce'),
  'oceanside-council-d2': sdc('Robinson'),
  'oceanside-usd-trustee-area-1': sdc2('Licona'),
  'oceanside-usd-trustee-area-3': sdc2('Pearson'),
  'oceanside-usd-trustee-area-4': sdc2('Riojas Alvarez'),
  'tri-city-healthcare-zone-2': sdc('Lauriano'),
  'oceanside-measure-r': sdc('Yes'),
  'oceanside-measure-s': sdc('No'),
  'vista-mayor': sdc('Green'),
  'vista-council-d1': sdc('Contreras'),
  'vista-council-d4': sdc("O'Donnell"),
  'vista-usd-trustee-area-3': sdc2('Alvarado'),
  'san-marcos-usd-area-e': sdc2('Baker'),
  'vista-irrigation-div-2': sdc('Vásquez'),
  'vista-usd-measure-n': sdc('No'), // 17,515 of 31,848 = 54.995% Yes; bonds need 55%
  'fuesd-measure-k': sdc('No'), // 51.5% Yes; bonds need 55%

  // Los Angeles County
  'la-sheriff': lac('Luna'),
  'la-measure-a': lac('Yes'),
  'la-measure-e': lac('Yes'),
  'laccd-seat-2': lac('Veres'),
  'laccd-seat-4': lac('Harris'),
  'laccd-seat-6': lac('Winston'),
  'la-mayor': lac('Bass'),
  'la-city-attorney': lac('Roy'),
  'la-measure-te': lac('Yes'),
  'la-measure-la': lac('Yes'),
  'la-measure-pl': lac('Yes'),
  'la-measure-ee': lac('Yes'),
  'la-measure-prk': lac('Yes'),
  'la-measure-prt': lac('Yes'),
  'la-measure-sc': lac('Yes'),
  'la-measure-fd': lac('Yes'),
  'la-superior-court-64': lac('Ghobadi'),
  'la-superior-court-65': lac('Clayton'),
  'la-superior-court-87': lac('Bayne'),
  'la-superior-court-131': lac('Tryfman'),
  'burbank-city-council': lac('Perez, Van Gorder, Southerland'),
  'burbank-city-clerk': lac('Clark'),
  'burbank-city-treasurer': lac('Palmer'),
  'burbank-measure-c': lac('Yes'),
  'burbank-measure-cc': lac('Yes'),
  'burbank-measure-cd': lac('No'),
  'busd-trustee-area-3': lac('Morrison'),
  'monterey-park-council-d5': lac('Ngo'),
  'monterey-park-city-clerk': lac('Leung'),
  'monterey-park-city-treasurer': lac('Lee'),
  'monterey-park-measure-hom': lac('Yes'),
  'monterey-park-measure-aaa': lac('Yes'),

  // Orange County
  'orange-mayor': occ('Slater'),
  'mwdoc-division-2': occ('Dick'),
  'orange-measure-i': occ('Yes'),
  'orange-measure-j': occ('Yes'),
  'orange-measure-k': occ('No'),
  'nocccd-trustee-area-1': occ('Dunsheath'),
  'coast-ccd-trustee-area-1': occ('Kalmick'),
  'ggusd-trustee-area-2': occ('Nguyen'),
  'oc-supervisor-d4': occ('Traut'),
  'garden-grove-mayor': occ('Klopfenstein'),
  'garden-grove-council-d1': occ('Flanders'),
  'garden-grove-council-d3': occ('Tran'),

  // Riverside County
  'rivco-superior-court-10': riv2('Paradise'),
  'mvusd-trustee-area-1': riv2('Pardue'),
  'mvusd-trustee-area-2': riv2('Young'),
  'rcwd-board': riv('Harkey, Plummer, Brady, Edwards'),
  'mvusd-measure-m': riv('No'),
  'rctc-measure-a': riv('Yes'),
  'temecula-council-d5': riv2('Schwank'),
  'tvusd-trustee-area-2': riv2('Barham'),
  'tvusd-trustee-area-4': riv2('Sola'),
  'msjc-trustee-area-3': riv2('Carpenter'),
  'tvusd-measure-s': riv('No'), // 51.6% Yes; bonds need 55%

  // Placer County
  'rocklin-city-council': plc('Halldin, Gayaldo'),
  'rusd-trustee-area-4': plc('Hoehne'),
  'rusd-trustee-area-5': plc('Counter'),
  'placer-measure-g': plc('Yes'),
  'placer-measure-h': plc('Yes'),
  'rocklin-measure-c': plc('Yes'),
  'rusd-measure-d': plc('No'), // 52.2% Yes; bonds need 55%

  // Alameda County
  'hayward-mayor': ala('Salinas'),
  'hayward-council-d6': ala('Roche'),
  'husd-trustee-area-4': ala('Fernelius'),
  'clpccd-area-6': ala('Gin'),
  'clpccd-area-3': ala('Mojadedi'),
  'ac-transit-ward-4': ala('Syed'),
  'bart-district-4': ala('Raburn'),
  'ebrpd-ward-3': ala('Lewington'),
  'hayward-measure-cc': ala('Yes'),
  'bay-area-regional-transit-measure': ala('Yes'), // Alameda's share only; no combined multi-county total posted yet

  // Santa Clara County
  'mountain-view-city-council': scc('Sylvester, Paymer, Cox'),
  'mvwsd-board': scc('Conley, Lambert'),
  'mvlahsd-trustee-area-3': scc('Cornes'),
  'valley-water-d7': scc('Dailey'),
  'mountain-view-measure-e': scc('Yes'),
  'mountain-view-measure-f': scc('Yes'),
  'el-camino-measure-s': scc('Yes'),

  // Colorado statewide
  'co-us-senate': ap('Hickenlooper', `${AP_CA}colorado-us-senate-results/`),
  'co-us-rep-cd1': ap('Kiros', `${AP_CA}colorado-us-house-results/#1`),
  'co-governor': ap('Weiser', `${AP_CA}colorado-governor-results/`),
  'co-secretary-of-state': ap('Gonzalez', `${AP_CA}colorado-secretary-of-state-results/`),
  'co-attorney-general': ap('Griswold', `${AP_CA}colorado-attorney-general-results/`),
  'co-treasurer': cos('Bridges'),
  'co-state-board-ed-cd1': cos('Escárcega'),
  'co-retention-supreme': cos('All retained'),
  'co-retention-appeals': cos('All retained'),
  'co-amendment-81': cos('No'),
  'co-amendment-82': cos('No'),
  'co-amendment-83': cos('No'),
  'co-amendment-84': cos('No'),
  'co-amendment-85': cos('No'), // 50.6% Yes; constitutional amendments need 55%
  'co-amendment-86': cos('No'),
  'co-amendment-87': cos('No'), // 50.6% Yes; constitutional amendments need 55%
  'co-prop-nn': cos('Yes'),
  'co-prop-132': cos('Yes'),
  'co-prop-133': cos('Yes'),
  'co-prop-134': cos('Yes'),
  'co-prop-135': cos('Yes'),
  'co-prop-136': cos('No'),
  'co-prop-137': cos('Yes'),

  // Denver
  'co-retention-denver-district': den('All retained'),
  'co-retention-denver-county': den('All retained'),
  'co-senate-sd34': den('Garcia Irlando'),
  'co-senate-sd31': den('Ball'),
  'co-house-hd4': den('Espenoza'),
  'co-house-hd5': den('Sandoval'),
  'denver-council-at-large-b': den('Mejía'),
  'co-rtd-district-c': den('Meyer'),
  'denver-measure-2h': den('Yes'),
  'denver-measure-2i': den('Yes'),
  'denver-measure-2j': den('Yes'),
  'denver-measure-2k': den('Yes'),
  'denver-measure-311': den('Yes'),
  'dps-measure-4a': den('Yes'),
};

/** “✓ Won: Becerra (AP call, Nov 4)” / “Leading: Becerra (LA County Registrar, Nov 6 update)”. */
export function resultLabel(r: RaceResult): string {
  const who = r.winner === 'Yes' ? 'Passed' : r.winner === 'No' ? 'Failed' : undefined;
  if (r.status === 'called') return who ? `✓ ${who} (${r.source} call, ${r.when})` : `✓ Won: ${r.winner} (${r.source} call, ${r.when})`;
  return who ? `${who === 'Passed' ? 'Passing' : 'Failing'} (${r.source}, ${r.when})` : `Leading: ${r.winner} (${r.source}, ${r.when})`;
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
  return { main: who ? (who === 'Passed' ? 'Passing' : 'Failing') : `Leading: ${r.winner}`, meta: `${day} count` };
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
