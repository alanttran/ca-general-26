import type { CriterionAssessment, CandidateQualification, ExperienceLevel, QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * South County and East County local contests for the San Diego County cities wave (Nov 3, 2026):
 * Chula Vista Council District 2, Southwestern College Area 1 and Sweetwater Union HSD Area 1 (91910),
 * El Cajon mayor and Council District 1, Cajon Valley Union SD Areas 2 and 3, and Grossmont Union HSD
 * Area 3 (92020), and Grossmont Union HSD Area 4 (92071). All offices are nonpartisan; party labels in the
 * text come from party endorsements and news reports, not from the ballot. Candidate order and ballot
 * designations are as printed on the county sample ballots (BT 364, 512, 544, 667).
 */

const NO_MONEY = 'No campaign finance totals found in news coverage as of Oct 13, 2026; filings are posted on the county or city campaign-disclosure site.';
const NO_STATEMENT = 'No candidate statement in the county voter guide and no platform found';

function qual(
  level: ExperienceLevel,
  summary: string,
  rows: [criterionId: string, assessment: CriterionAssessment['assessment'], evidence: string][],
): CandidateQualification {
  return {
    level,
    legal: 'meets',
    summary,
    criteria: rows.map(([criterionId, assessment, evidence]) => ({ criterionId, assessment, evidence })),
  };
}

const SCHOOL_LEGAL =
  'U.S. citizen, 18 or older, registered voter living in the trustee area; not an employee of the district (Cal. Education Code § 35107).';

const K12_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Board governance and oversight', detail: 'Trustees adopt policy, approve contracts, and hire and evaluate the superintendent as one vote on a five-member board.' },
  { id: 'budget', label: 'Budget and fiscal oversight', detail: 'The board adopts the district budget, sets reserves and negotiates staff pay.' },
  { id: 'instruction', label: 'Knowledge of teaching and student services', detail: 'Trustees approve curriculum, student-support contracts, and discipline and graduation policies.' },
  { id: 'community', label: 'Parent, staff and community engagement', detail: 'Trustees answer to families and employees in public meetings and represent one trustee area.' },
];

const SWC_CRITERIA: QualificationCriterion[] = [
  { id: 'budget', label: 'Budget and fiscal oversight', detail: 'The board adopts the district budget and approves contracts and capital projects.' },
  { id: 'higher-ed', label: 'Education and higher-education knowledge', detail: 'Trustees oversee academic programs, transfer pathways and workforce training.' },
  { id: 'governance', label: 'Board governance and executive oversight', detail: 'The board hires and evaluates the college president and sets policy.' },
  { id: 'community', label: 'Community and student engagement', detail: 'Trustees represent a geographic area and the students and families in it.' },
];

const COUNCIL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Municipal policy and governance', detail: 'The council passes city laws, oversees the city manager and sits on regional boards.' },
  { id: 'budget', label: 'Budget and finance', detail: 'The council adopts the city budget, sets fees and approves major contracts.' },
  { id: 'landuse', label: 'Housing, land use and development', detail: 'The council decides zoning, development approvals and local homelessness policy.' },
  { id: 'constituent', label: 'District knowledge and constituent service', detail: 'Councilmembers field resident requests and represent one district’s neighborhoods.' },
];

export const RACES_SDC_SOUTH_EAST: Race[] = [
  // ───────────────────────────── Chula Vista Council District 2 ─────────────────────────────
  {
    id: 'chula-vista-council-d2',
    categoryId: 'city',
    title: 'Chula Vista City Council, District 2',
    tldrLabel: 'Chula Vista Council D2',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Chula Vista’s five-member City Council (four district members plus the mayor) adopts the budget of the county’s second-largest city, sets land-use and housing rules, and oversees the city’s own police and fire departments. Councilmembers also vote on council pay and on the Bayfront and downtown redevelopment.',
      'District 2 covers northwest and central Chula Vista, including Hilltop, Third Avenue and the Sweetwater Marsh area. The runoff pits a Democratic incumbent backed by labor and public-safety unions against a Republican-endorsed challenger who is running on public safety, homelessness and opposition to new taxes.',
    ],
    introParagraphs: [
      'Chula Vista elects council seats in a June primary with a November runoff when no one wins a majority. In the June 2 primary Jose Preciado led with about 48.6% and Angelica Martinez was second with about 27.2% (Times of San Diego, unofficial June results); Russ Hall, a former Planning Commission chair, and a fourth candidate were eliminated.',
      'Preciado won the seat in 2022 by less than one percentage point, 50.4% to 49.6% (Ballotpedia). The primary campaign turned personal: Martinez posted, then removed, a doctored poster of Preciado, and the city’s Board of Ethics dismissed an ethics complaint she filed against him (Voice of San Diego, May 2026).',
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living in Council District 2 of the City of Chula Vista.',
    qualificationCriteria: COUNCIL_CRITERIA,
    readingLinks: [
      { label: 'Voice of San Diego: South County Report (May 21, 2026)', url: 'https://voiceofsandiego.org/2026/05/21/south-county-report-knives-out-in-south-county-elections/', summary: 'Covers the District 2 primary, the doctored poster and the dismissed ethics complaint.' },
      { label: 'Times of San Diego: June 2 primary results', url: 'https://timesofsandiego.com/politics/2026/06/12/complete-election-results-june-2-primary-san-diego-county/', summary: 'Unofficial primary shares for District 2.' },
      { label: 'KPBS: party endorsements for the general election (Sept 30, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian' },
    ],
    candidates: [
      {
        id: 'jose-preciado',
        name: 'Jose Preciado',
        party: 'NP',
        role: 'Chula Vista Councilmember/Educator',
        campaignUrl: 'https://votejosepreciado.com/',
        qualification: qual('extensive', 'Preciado has held this seat since December 2022 and earlier served as an elected director of the Sweetwater Authority water board and as Chula Vista’s representative on the San Diego County Water Authority board.', [
          ['governance', 'met', 'District 2 councilmember since December 2022 (City of Chula Vista); previously an elected Sweetwater Authority director and a San Diego County Water Authority board member (The Star-News).'],
          ['budget', 'met', 'Has voted on four city budgets; his statement says he voted for 7 more police officers, 24 firefighters and Fire Station 12.'],
          ['landuse', 'met', 'Council votes on housing and the Bayfront; his statement cites 289 new affordable homes, a ban on encampments that block streets near schools and parks, and the Gaylord hotel project.'],
          ['constituent', 'met', 'Elected by District 2 voters in 2022; his statement cites upgrades to Hilltop and Eucalyptus parks and Third Avenue.'],
        ]),
        bio: [
          'Preciado is an educator at San Diego State University (per his ballot statement) who was elected to the District 2 seat in November 2022, defeating Steve Stenberg 50.4% to 49.6% (Ballotpedia). Before that he served as an elected director of the Sweetwater Authority and represented Chula Vista on the San Diego County Water Authority board.',
          'His campaign highlights added police and firefighters, the Gaylord Pacific hotel on the Bayfront, and a “Good Neighbor” ordinance he says limits warrantless immigration enforcement on city property. He is a Democrat and is endorsed by the county Democratic Party and the Labor Council.',
        ],
        recordVsChange:
          'Preciado can point to new public-safety positions, Bayfront development and park upgrades during his term, and he says he voted against council pay raises. He acknowledged in May 2026 that crime has risen in the district and blamed encampment sweeps for displacing people into neighborhoods (Voice of San Diego). The case for change rests on that concern and on Martinez’s pledge to add police and oppose new taxes.',
        scorecard: [
          { topic: 'Public safety', position: '✓ Says he added 7 police officers, 24 firefighters and Fire Station 12; endorsed by police and firefighters (ballot statement)', comparison: 'Martinez also promises more police officers but has no council record.' },
          { topic: 'Homelessness', position: '✓ Backed banning encampments that block streets near schools and parks (ballot statement)', comparison: 'Martinez says she will get homeless people off the streets “with compassion while requiring accountability.”' },
          { topic: 'Housing', position: '✓ Cites 289 new affordable homes and blocking “surprise evictions” (ballot statement)', comparison: 'Martinez focuses on first-time buyers and protecting single-family neighborhoods.' },
          { topic: 'Immigration enforcement', position: '✓✓ Opposes federal ICE raids; backed the city’s Good Neighbor ordinance on city property (ballot statement)', comparison: 'Martinez’s statement does not address immigration.' },
          { topic: 'Taxes and council pay', position: '~ Says he voted against “unjustified” council pay raises; no stated position on new taxes', comparison: 'Martinez opposes mileage, gas and sales-tax increases and campaigned against a council pay raise.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party; San Diego & Imperial Counties Labor Council (both as of Sept–Oct 2026); his ballot statement lists Chula Vista firefighters, police and healthcare workers.',
        notes: [
          'An ethics complaint Martinez filed accusing Preciado of bullying her after a Feb. 2 council meeting was dismissed by the city’s Board of Ethics with little discussion (Voice of San Diego, May 21, 2026).',
        ],
      },
      {
        id: 'angelica-s-martinez',
        name: 'Angelica S. Martinez',
        party: 'NP',
        role: 'Educator/Parent',
        qualification: qual('limited', 'Martinez is a former teacher and a member of a Sweetwater Union High School District parent advisory council. No elected office, city commission or budget role is documented.', [
          ['governance', 'unknown', 'No elected or appointed city role found.'],
          ['budget', 'unknown', 'Her statement calls her an experienced businesswoman; no business or budget role is documented.'],
          ['landuse', 'unknown', 'No planning or housing role found; her statement pledges to finish Hilltop Park and protect single-family neighborhoods.'],
          ['constituent', 'partial', 'Lives in the district with her family; member of a Sweetwater Union HSD parent advisory council (Voice of San Diego).'],
        ]),
        bio: [
          'Martinez is a former teacher and a member of a Sweetwater Union High School District parent advisory council (Voice of San Diego). She lives in Chula Vista with her husband and three sons.',
          'She is a Republican, endorsed by the Republican Party of San Diego County and by Assemblymember Carl DeMaio. Her statement says she led opposition to a proposed council pay raise and pledges more police, affordable homes for first-time buyers and opposition to mileage, gas and sales-tax increases.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓ Pledges more police officers (ballot statement)', comparison: 'Preciado says he has already added officers and firefighters.' },
          { topic: 'Taxes', position: '✓✓ Opposes mileage, gas and sales-tax increases (ballot statement)', comparison: 'Preciado has not stated a position on new taxes.' },
          { topic: 'Council pay', position: '✓ Says she led the fight against a 70% council salary increase (ballot statement)', comparison: 'Preciado says he voted against unjustified pay raises.' },
          { topic: 'Homelessness', position: '✓ Get people off the streets “with compassion while requiring accountability” (ballot statement)', comparison: 'Preciado backed an encampment ban near schools and parks.' },
          { topic: 'Housing', position: '~ More first-time-buyer homes and affordable rentals, while “preserving the character” of single-family neighborhoods', comparison: 'Preciado cites 289 affordable homes approved.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County (KPBS, Sept 30, 2026); Assemblymember Carl DeMaio (Voice of San Diego, May 2026).',
        notes: [
          'During the primary Martinez posted, then removed, a poster using an old photo of Preciado from when he weighed more than 600 pounds, doctored with an attack message; Preciado called it “despicable” and third candidate Russ Hall called it “shameful” (Voice of San Diego, May 21, 2026). She did not respond to the outlet.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Preciado', '●', 'Progressive Left voters back the Labor Council– and Democratic-endorsed incumbent who opposes ICE raids and cites affordable-housing approvals.'],
      ['EL', 'Preciado', '●', 'Establishment Liberals value an incumbent with a council record, police and firefighter endorsements, and party backing.'],
      ['DM', 'Preciado', '●', 'Democratic Mainstays follow the county party, labor and public-safety unions to the incumbent.'],
      ['OL', 'Preciado', '◐', 'Outsider Left voters favor his stance on immigration enforcement and renter protections, though he is an establishment-backed incumbent.'],
      ['SS', '—', '—', 'Stressed Sideliners see both candidates promising more police and lower costs, and the primary was dominated by personal attacks rather than a clear choice.', 'With both sides promising safety and affordability, Stressed Sideliners can let experience decide: Preciado has held the seat since 2022 and served on two water boards, while Martinez has no documented public office.'],
      ['AR', 'Martinez', '○', 'Ambivalent Right voters may lean to the challenger who opposes new taxes and council raises, but without strong conviction given her thin record and the doctored-poster episode.', 'Ambivalent Right voters who weigh experience could back Preciado, who has four years on the council and helped add police and firefighters; they give up Martinez’s firm no-new-taxes pledge.'],
      ['PR', 'Martinez', '●', 'Populist Right voters favor the DeMaio-backed challenger running against politicians’ pay raises and gas, mileage and sales taxes.'],
      ['CC', 'Martinez', '●', 'Committed Conservatives back the Republican Party–endorsed candidate who opposes tax increases and pledges more police.'],
      ['FF', 'Martinez', '◐', 'Faith and Flag Conservatives lean to the Republican-endorsed mother of three who stresses family neighborhoods, though values issues are not central to this race.', 'An experience-first Faith and Flag voter could pick Preciado, who has run the district for four years and is endorsed by police and firefighters; the cost is backing a Democrat who opposes federal immigration raids.'],
    ]),
    counterArguments: [
      'PL/EL/DM (Preciado ●): But crime has risen in the district on his watch by his own account, and he won by under one point in 2022, so this is not a safe seat for his priorities.',
      'PR/CC (Martinez ●): But Martinez has no documented city or budget experience, and her doctored poster of Preciado drew criticism even from a former Republican candidate in the race.',
    ],
  },

  // ───────────────────────────── Southwestern College Area 1 ─────────────────────────────
  {
    id: 'swc-trustee-area-1',
    categoryId: 'school',
    title: 'Southwestern Community College District, Trustee Area 1',
    tldrLabel: 'Southwestern College Trustee Area 1',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Southwestern Community College District board governs Southwestern College and its South County centers. It adopts the budget, approves contracts, decides whether to put bonds on the ballot and hires and evaluates the college president.',
      'Area 1 covers National City and northwest Chula Vista. Both candidates are Democrats: a first-term trustee backed by the party and the college’s faculty and staff unions, and a former Chula Vista mayor and Assemblymember who later sat on the statewide community college Board of Governors.',
    ],
    introParagraphs: [
      'This is a single November contest. Robert Moreno won the seat in 2022, the district’s first year of trustee-area elections, defeating Gonzalo Quintero (Chula Vista Today). Mary Salas, Chula Vista’s mayor from 2014 to 2022, is challenging him. Little news coverage of the race was found as of Oct 13, 2026.',
    ],
    legalRequirements: 'Registered voter residing in Trustee Area 1 of the Southwestern Community College District.',
    qualificationCriteria: SWC_CRITERIA,
    readingLinks: [
      { label: 'KPBS: Southwestern College races explainer (Oct 2, 2026)', url: 'https://www.kpbs.org/news/politics/2026/10/02/meet-the-candidates-for-southwestern-community-college-district-boards', summary: 'What the board does and the candidate list; candidate details are in KPBS’s interactive guide.' },
      { label: 'Southwestern College: Governing Board members', url: 'https://www.swccd.edu/about-swc/leadership/governing-board/governing-board-members.aspx' },
    ],
    candidates: [
      {
        id: 'mary-salas',
        photoSlug: 'mary-salas',
        name: 'Mary Salas',
        party: 'NP',
        role: 'Retired Mayor Chula Vista',
        qualification: qual('extensive', 'Salas was Chula Vista mayor for eight years and a state Assemblymember, and she later served on the California Community Colleges Board of Governors. She has not served on this district’s board.', [
          ['budget', 'met', 'Mayor of Chula Vista 2014–2022, presiding over city budgets; Assemblymember 2006–2010 (Wikipedia).'],
          ['higher-ed', 'met', 'Appointed by Gov. Newsom to the California Community Colleges Board of Governors (Wikipedia, citing Southwestern College); Southwestern College alumna (ballot statement).'],
          ['governance', 'met', 'Presided over the Chula Vista City Council as mayor; earlier a councilmember (1996–2004, 2012–2014) and Sweetwater Authority director.'],
          ['community', 'met', 'Decades of elected service in Chula Vista; Area 1 includes northwest Chula Vista.'],
        ]),
        bio: [
          'Salas is a Democrat who served on the Chula Vista City Council, in the State Assembly (79th District, 2006–2010) and as Chula Vista’s first Latina mayor from 2014 to 2022 (Wikipedia). Gov. Gavin Newsom later appointed her to the California Community Colleges Board of Governors.',
          'Her statement says she enrolled at Southwestern at 37 as a divorced single mother, earned an associate degree and transferred to San Diego State. She says the college must invest in training for in-demand careers while keeping strong transfer pathways.',
        ],
        scorecard: [
          { topic: 'Workforce training', position: '✓ Wants more affordable career training for in-demand jobs (ballot statement)', comparison: 'Moreno also stresses career education leading to good-paying jobs.' },
          { topic: 'Transfer pathways', position: '✓ Wants to preserve strong transfer pathways to four-year universities', comparison: 'Moreno cites new bachelor’s programs and a UC San Diego partnership.' },
          { topic: 'Budget', position: '? No specific budget position; eight years presiding over city budgets as mayor', comparison: 'Moreno says he voted for four balanced budgets.' },
          { topic: 'Labor relations', position: '? No union endorsements found', comparison: 'Moreno is endorsed by the faculty union and CSEA Chapter 524.' },
          { topic: 'Party backing', position: '~ Longtime Democrat; the county party endorsed her opponent', comparison: 'Moreno has the Democratic Party and Labor Council endorsements.' },
        ],
        money: NO_MONEY,
        endorsements: 'None found as of Oct 13, 2026.',
        notes: [
          'Why Salas chose to challenge a fellow Democrat was not explained in any coverage found.',
        ],
      },
      {
        id: 'robert-moreno',
        name: 'Robert Moreno',
        party: 'NP',
        role: 'Southwestern College Governing Board Member',
        qualification: qual('extensive', 'Moreno has held this seat since December 2022. He is a Southwestern College and SDSU graduate and a former Chula Vista redistricting commissioner, but has no documented work in higher education.', [
          ['budget', 'met', 'Trustee since December 2022; his statement says he voted for four consecutive balanced budgets.'],
          ['higher-ed', 'partial', 'Board votes on bachelor’s programs and dual enrollment (ballot statement); journalism graduate of Southwestern and SDSU; no teaching or college staff role documented.'],
          ['governance', 'met', 'Area 1 trustee since December 2022 (college board page); he and trustee Corina Soto voted against cutting public speaker time.'],
          ['community', 'met', 'National City native and Sweetwater High graduate; former Chula Vista redistricting commissioner and YMCA board member (Chula Vista Today, 2022).'],
        ]),
        bio: [
          'Moreno grew up in National City and graduated from Sweetwater High School, Southwestern College and San Diego State, where he studied journalism. He was a Chula Vista redistricting commissioner before winning the Area 1 seat in 2022 (Chula Vista Today).',
          'His statement says he backed four balanced budgets, bachelor’s degree programs closer to home and dual enrollment with Sweetwater high schools. He wants affordable student housing and competitive pay for employees.',
        ],
        recordVsChange:
          'Moreno can point to balanced budgets, new bachelor’s and UC San Diego partnerships, and the backing of faculty and classified-staff unions. The case for change is Salas’s much longer record in elected office and on the statewide community college board, which some voters may see as more weight for South County at the state level.',
        scorecard: [
          { topic: 'Budget', position: '✓ Says he voted for four consecutive balanced budgets (ballot statement)', comparison: 'Salas has no record on this board.' },
          { topic: 'Four-year degrees', position: '✓✓ Backed bachelor’s programs in South County, including transborder environmental design and a UC San Diego public health partnership', comparison: 'Salas stresses transfer pathways.' },
          { topic: 'Student housing', position: '✓ Pledges affordable student housing', comparison: 'Salas’s statement does not address housing.' },
          { topic: 'Employees', position: '✓ Wants competitive pay to retain staff; endorsed by faculty and classified unions', comparison: 'No union endorsements found for Salas.' },
          { topic: 'Public participation', position: '✓ Voted against cutting public comment from five minutes to three', comparison: 'Salas has no record on this board.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party; San Diego & Imperial Counties Labor Council; SEIU Local 221; San Diego Young Democrats; Southwestern College Education Association and CSEA Chapter 524 (per his ballot statement) (as of Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Moreno', '◐', 'Progressive Left voters favor the trustee backed by faculty, classified-staff unions and SEIU who wants affordable student housing; Salas is also a Democrat, so the edge is moderate.'],
      ['EL', 'Salas', '◐', 'Establishment Liberals value Salas’s long record as mayor, Assemblymember and statewide community college governor, even though the county party endorsed Moreno.'],
      ['DM', 'Moreno', '◐', 'Democratic Mainstays follow the county Democratic Party and Labor Council endorsements to the incumbent.'],
      ['OL', 'Moreno', '○', 'Outsider Left voters lean to the younger first-term trustee who has dissented on public-comment limits over a veteran officeholder.'],
      ['SS', '—', '—', 'Stressed Sideliners see two Democrats with similar goals for affordable, job-focused college and have no clear reason to prefer either.', 'With little to separate them, Stressed Sideliners can let experience decide: Salas spent eight years as Chula Vista mayor and sat on the statewide community college Board of Governors, while Moreno has one term on this board.'],
      ['AR', 'Salas', '○', 'Ambivalent Right voters may prefer the former mayor with a record of managing city budgets over the union-backed incumbent, though both are Democrats.'],
      ['PR', '—', '—', 'Populist Right voters find no outsider or conservative choice between two Democrats.', 'Populist Right voters with no ideological pick can fall back on experience: Salas has eight years as mayor plus state-level college governance, versus Moreno’s single term; either way they are choosing a Democrat.'],
      ['CC', 'Salas', '○', 'Committed Conservatives lean slightly to the former mayor’s budget experience over the labor-backed incumbent, with no conservative option on the ballot.'],
      ['FF', 'Salas', '○', 'Faith and Flag Conservatives have no values contrast here and lean weakly to the candidate with the longer record and fewer union ties.'],
    ]),
    counterArguments: [
      'EL/AR/CC (Salas ◐/○): But Salas has never sat on this board, and the faculty and staff who work at the college endorsed Moreno.',
      'PL/DM (Moreno ◐): But Moreno has one term of experience against a candidate who has run a city of 275,000 and helped govern the statewide college system.',
    ],
  },

  // ───────────────────────────── Sweetwater Union HSD Area 1 ─────────────────────────────
  {
    id: 'suhsd-trustee-area-1',
    categoryId: 'school',
    title: 'Sweetwater Union High School District, Trustee Area 1',
    tldrLabel: 'Sweetwater Union HSD, Area 1',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The Sweetwater Union High School District runs middle and high schools and adult schools across South County. Its five-member board adopts the budget, approves contracts and hires the superintendent, and in recent years has been rebuilding its finances after a fiscal crisis; one candidate notes the district’s improved S&P credit rating.',
      'Area 1 covers National City and the bay side of northwest Chula Vista. Trustee Arturo Solis is termed out, so the seat is open. Both candidates are Democrats and both are endorsed by the county Democratic Party.',
    ],
    introParagraphs: [
      'This is a single November contest. Maria Betancourt-Castañeda is a 12-year trustee of the National School District, the K-6 district in National City; Fermin Eusebio Jimenez is a Navy veteran and substitute teacher who serves on National School District’s bond oversight committee. The Labor Council endorsed Betancourt-Castañeda; the county Democratic Party endorsed both (KPBS, Sept 30, 2026).',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: K12_CRITERIA,
    readingLinks: [
      { label: 'KPBS: Meet the candidates for San Diego County school boards (Sept 29, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/29/meet-the-candidates-for-all-school-board-races-in-san-diego-county' },
      { label: 'Sweetwater Union HSD: board terms of office', url: 'https://schoolboard.sweetwaterschools.org/board-member-terms-of-office/', summary: 'Shows Solis’s term ending in 2026 and the district’s two-term limit.' },
    ],
    candidates: [
      {
        id: 'fermin-eusebio-jimenez',
        name: 'Fermin Eusebio Jimenez',
        party: 'NP',
        role: 'Substitute Teacher/Paralegal',
        qualification: qual('some', 'Jimenez is a substitute teacher and Navy veteran who is vice chair of a school bond oversight committee. He has not held elected office.', [
          ['governance', 'partial', 'Vice chair of the National School District bond oversight committee (ballot statement); no elected board service.'],
          ['budget', 'partial', 'Bond oversight committee role reviews bond spending (ballot statement).'],
          ['instruction', 'partial', 'Substitute teacher (ballot designation); school and years not published.'],
          ['community', 'partial', 'Navy veteran and former Hospital Corpsman; bachelor’s in political science from SDSU (ballot statement).'],
        ]),
        bio: [
          'Jimenez, 38, is a U.S. Navy veteran and former Hospital Corpsman who later worked as a federal civilian employee and now works as a substitute teacher and paralegal (ballot statement). He holds a political science degree from San Diego State and a paralegal associate degree.',
          'He says he will focus on academic achievement and fiscal responsibility, crediting the district’s improved S&P credit rating while saying more work is needed. He is vice chair of the National School District bond oversight committee.',
        ],
        scorecard: [
          { topic: 'Fiscal management', position: '✓ Stresses transparent spending; cites the district’s improved S&P rating (ballot statement)', comparison: 'Betancourt-Castañeda cites passing two school bonds in National School District.' },
          { topic: 'Academics', position: '✓ Pledges to improve academic achievement', comparison: 'Betancourt-Castañeda cites year-over-year gains in her district.' },
          { topic: 'Teacher resources', position: '✓ Wants students and teachers to have needed resources', comparison: 'Betancourt-Castañeda has the Labor Council endorsement.' },
          { topic: 'Board experience', position: '~ Bond oversight committee only', comparison: 'Betancourt-Castañeda has 12 years as an elected trustee.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party (dual endorsement with Betancourt-Castañeda; KPBS, Sept 30, 2026).',
      },
      {
        id: 'maria-betancourt-castaneda',
        name: 'Maria Betancourt-Castañeda',
        party: 'NP',
        role: 'Governing Board Trustee, National School District',
        qualification: qual('substantial', 'Betancourt-Castañeda has served 12 years as an elected trustee of the National School District, a K-6 district inside this trustee area. She has not served on a high school board and no classroom career is documented.', [
          ['governance', 'met', 'National School District trustee for 12 years; CSBA delegate (ballot statement).'],
          ['budget', 'met', 'Says she championed National School District bond Measures N and HH and oversaw campus modernization (ballot statement).'],
          ['instruction', 'partial', 'Board oversight of K-6 programs; no teaching role documented.'],
          ['community', 'met', 'Lifelong National City resident, former PTA president; attended Sweetwater High (ballot statement).'],
        ]),
        bio: [
          'Betancourt-Castañeda is a lifelong National City resident who attended Sweetwater High School and raised her children there. She began as a PTA president and has served 12 years on the National School District board, including as a California School Boards Association delegate (ballot statement).',
          'She credits the district’s bond-funded campus rebuilding, accessible playgrounds and state and national wellness and environmental awards to her leadership, and says she will bring that record to Sweetwater.',
        ],
        scorecard: [
          { topic: 'Facilities', position: '✓✓ Championed bond Measures N and HH in National School District (ballot statement)', comparison: 'Jimenez reviews bond spending as an oversight committee vice chair.' },
          { topic: 'Student wellness', position: '✓ Cites Heart Safe and Healthiest Schools recognition in her district', comparison: 'Jimenez does not address wellness.' },
          { topic: 'Fiscal management', position: '~ Calls herself a trusted steward; no Sweetwater budget plan stated', comparison: 'Jimenez emphasizes fiscal responsibility and transparency.' },
          { topic: 'Labor support', position: '✓ Endorsed by the Labor Council', comparison: 'Jimenez does not have the Labor Council endorsement.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party (dual endorsement); San Diego & Imperial Counties Labor Council (as of Oct 2026).',
        notes: ['The county candidate list spells the name without the ñ; the accent is as rendered by KPBS.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Betancourt-Castañeda', '◐', 'Progressive Left voters favor the Labor Council–endorsed trustee with a record of bond-funded school upgrades and student wellness programs.'],
      ['EL', 'Betancourt-Castañeda', '●', 'Establishment Liberals value 12 years of elected school-board service and the labor and party endorsements behind it.'],
      ['DM', 'Betancourt-Castañeda', '◐', 'Democratic Mainstays get a dual party endorsement but follow the Labor Council to Betancourt-Castañeda.'],
      ['OL', 'Jimenez', '○', 'Outsider Left voters may prefer the newcomer veteran and working substitute teacher over a long-serving trustee, weakly given how close their goals are.'],
      ['SS', '—', '—', 'Stressed Sideliners see two Democrats with similar aims and no sharp contrast on everyday concerns.', 'Stressed Sideliners can let experience break the tie: Betancourt-Castañeda has 12 years as a trustee in National City’s elementary district, while Jimenez has served on a bond oversight committee.'],
      ['AR', 'Jimenez', '○', 'Ambivalent Right voters may lean to the candidate stressing fiscal responsibility and taxpayer value over one whose record centers on passing bonds.'],
      ['PR', 'Jimenez', '○', 'Populist Right voters may prefer the Navy veteran newcomer over a long-serving officeholder, though both are Democrats.'],
      ['CC', 'Jimenez', '○', 'Committed Conservatives lean slightly to the candidate who emphasizes careful spending, with no conservative option on the ballot.'],
      ['FF', 'Jimenez', '○', 'Faith and Flag Conservatives may lean to the Navy veteran, with little else to separate the two on values.'],
    ]),
    counterArguments: [
      'AR/PR/CC (Jimenez ○): But Jimenez has never held elected office, and his budget experience is limited to an advisory bond committee.',
      'EL (Betancourt-Castañeda ●): But her record is in a K-6 district; Sweetwater’s high schools and its recent fiscal recovery are a different scale of job.',
    ],
  },

  // ───────────────────────────── El Cajon Mayor ─────────────────────────────
  {
    id: 'el-cajon-mayor',
    categoryId: 'city',
    title: 'El Cajon Mayor',
    tldrLabel: 'El Cajon Mayor',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'El Cajon’s mayor is elected citywide and is one vote on the five-member City Council, which adopts the budget, sets land-use policy and oversees the police and fire departments. The mayor sets the tone on regional issues such as homelessness and, lately, immigration enforcement.',
      'The choice is stark: a Republican mayor in office since 2013 who backed the city’s “not a sanctuary city” resolution and its lawsuit against the state, against a democratic socialist who would repeal that resolution, add a city minimum wage and tax large landlords.',
    ],
    introParagraphs: [
      'This is a single November contest; only two candidates qualified. Bill Wells was appointed mayor in 2013 and has won three elections since; he lost a 2024 race for Congress (CA-51) to Sara Jacobs, 60.7% to 39.3%. Alexander Kraft is endorsed by the Labor Council, the Democratic Socialists of America and the Green and Peace and Freedom parties; the county Democratic Party made no endorsement (KPBS, Oct 5 and Sept 30, 2026).',
      'The state Attorney General has sued El Cajon over sharing license-plate-reader data with out-of-state agencies, and the city sued the Attorney General in April 2026 over the state sanctuary law (KPBS).',
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living in the City of El Cajon.',
    qualificationCriteria: [
      { id: 'executive', label: 'City leadership and governance', detail: 'The mayor presides over the council and represents the city regionally.' },
      { id: 'budget', label: 'Budget and finance', detail: 'The council adopts the city budget and approves major contracts.' },
      { id: 'landuse', label: 'Housing, land use and development', detail: 'The council decides zoning and redevelopment, including Parkway Plaza and Main Street.' },
      { id: 'safety', label: 'Public safety and homelessness', detail: 'The city runs its own police and fire departments and sets homelessness policy.' },
    ],
    readingLinks: [
      { label: 'KPBS: El Cajon mayoral race explainer (Oct 5, 2026)', url: 'https://www.kpbs.org/news/politics/2026/10/05/2026-general-election-el-cajon-mayoral-race-explainer', summary: 'Positions on taxes, homelessness, immigration and Parkway Plaza, plus fundraising through Sept 30.' },
      { label: 'Attorney General: lawsuit over El Cajon license-plate data', url: 'https://oag.ca.gov/news/press-releases/attorney-general-bonta-sues-el-cajon-illegally-sharing-license-plate-data-out' },
    ],
    candidates: [
      {
        id: 'alexander-kraft',
        name: 'Alexander Kraft',
        party: 'NP',
        role: 'Legal Support Assistant',
        campaignUrl: 'https://kraftformayor.com/',
        qualification: qual('limited', 'Kraft works as an administrative employee for the County of San Diego and holds an elected union post. He has not held public office or served on a city board.', [
          ['executive', 'not-met', 'No elected or appointed government role documented.'],
          ['budget', 'unknown', 'No budget role documented.'],
          ['landuse', 'unknown', 'No planning role documented; proposes municipal social housing (KPBS).'],
          ['safety', 'unknown', 'No public-safety role documented.'],
        ]),
        bio: [
          'Kraft, 42, is an El Cajon native who has worked in retail, technology and education and now works as an administrative employee for the County of San Diego. He holds an elected union position and is a delegate to the San Diego & Imperial Counties Labor Council (KPBS).',
          'He describes himself as the only progressive in the race and a democratic socialist. He proposes a tax on owners of more than 50 units to fund low-cost housing, a city minimum wage matching San Diego’s, prevailing wages on city projects, and repealing the city’s ICE resolution on his first day.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓✓ City-financed social housing paid for by a tax on owners of 50+ units (KPBS)', comparison: 'Wells opposes new taxes.' },
          { topic: 'Wages', position: '✓✓ City minimum wage matching San Diego’s; a Labor Standards Office', comparison: 'Wells has proposed no wage policy.' },
          { topic: 'Immigration', position: '✓✓ Repeal the city’s ICE resolution; audit police cooperation with ICE', comparison: 'Wells led the “not a sanctuary city” resolution.' },
          { topic: 'Public safety', position: '~ “Improve public safety, not create a police state”', comparison: 'Wells wants to hire more officers and fully fund police.' },
          { topic: 'Parkway Plaza', position: '✓ Mixed-use redevelopment with housing, keeping parking and the theater', comparison: 'Wells also wants to revive the mall.' },
        ],
        money: 'Raised $28,319 through Sept 30, 2026, including $1,000 of his own; largest donor SEIU Local 221 (KPBS, citing The Ballot Book).',
        endorsements: 'San Diego & Imperial Counties Labor Council; Democratic Socialists of America; Latinos En Acción; Green Party and Peace and Freedom Party of San Diego County (KPBS, Sept 30 and Oct 5, 2026).',
        notes: ['KPBS lists his party registration as Peace and Freedom.'],
      },
      {
        id: 'bill-wells',
        name: 'Bill Wells',
        party: 'NP',
        role: 'Mayor of El Cajon',
        campaignUrl: 'https://www.votebillwells.com',
        qualification: qual('extensive', 'Wells has been El Cajon’s mayor since 2013, after serving on the City Council from 2008 and the Planning Commission from 2004.', [
          ['executive', 'met', 'Mayor since 2013 (appointed, then elected in 2014, 2018 and 2022); councilmember from 2008 (Ballotpedia).'],
          ['budget', 'met', 'Has voted on every city budget since 2008; says the city has a balanced budget and healthy reserves (ballot statement).'],
          ['landuse', 'met', 'Planning commissioner from 2004; council votes on Parkway Plaza and Main Street redevelopment.'],
          ['safety', 'met', 'Says police and fire are fully staffed; fought county motel-voucher placements of homeless people in El Cajon (KPBS).'],
        ]),
        bio: [
          'Wells has led El Cajon since 2013 and served on the council and planning commission before that. His campaign says he worked in health care, including as an emergency room nurse, and holds a doctorate in clinical psychology (KPBS). He is a Republican and lost the 2024 race for California’s 51st Congressional District.',
          'He campaigns on a balanced budget, well-kept roads, full police and fire staffing, reviving Parkway Plaza and bringing a new hospital to the city. He has led the city’s stand against state sanctuary law. He did not respond to KPBS interview requests.',
        ],
        recordVsChange:
          'Wells can point to 13 years without a budget crisis, full police and fire staffing, and Main Street redevelopment; he says the city stayed peaceful after a local police shooting. The case for change is that the city now faces state litigation over license-plate data and its own suit over sanctuary law, and Parkway Plaza, once a major sales-tax source, still awaits revival.',
        scorecard: [
          { topic: 'Taxes', position: '✓✓ Opposes any new tax (KPBS)', comparison: 'Kraft would tax large landlords.' },
          { topic: 'Homelessness', position: '✓ Mandatory treatment, transitional housing, family reunification; fought county motel placements', comparison: 'Kraft calls homelessness a policy failure and backs social housing.' },
          { topic: 'Immigration', position: '✓✓ Backed the “not a sanctuary city” resolution and the April 2026 suit against the state', comparison: 'Kraft would repeal the resolution.' },
          { topic: 'Public safety', position: '✓✓ Hire more officers, fully fund police', comparison: 'Kraft warns against “a police state.”' },
          { topic: 'Data sharing', position: '~ Called the Attorney General’s license-plate-data lawsuit “a political maneuver” (KPBS, 2025)', comparison: 'Kraft says the data sharing violates state law.' },
        ],
        money: 'Raised $279,152 through Sept 30, 2026; top donors include David and Connie Wick ($25,000 total) and Dan and Jamie Feder ($40,000 total) (KPBS, citing The Ballot Book).',
        endorsements: 'Republican Party of San Diego County (KPBS, Sept 30, 2026); his site lists no others, per KPBS.',
        notes: [
          'The Attorney General’s lawsuit over license-plate data names the city, not Wells personally; it is a policy dispute, so it is listed here rather than as a red flag.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Kraft', '●', 'Progressive Left voters back the Labor Council– and DSA-endorsed candidate pledging social housing, a city minimum wage and an end to ICE cooperation.'],
      ['EL', '—', '—', 'Establishment Liberals have no Democratic Party pick here and may be wary of a socialist with no government experience, though they reject Wells’s sanctuary-law fight.', 'An experience-first Establishment Liberal could back Wells for his 13 years running the city and balanced budgets, but that means supporting the mayor who led El Cajon’s fight against state sanctuary law.'],
      ['DM', 'Kraft', '◐', 'Democratic Mainstays follow the Labor Council to Kraft and oppose the city’s ICE resolution, though the county party stayed out of the race.', 'Democratic Mainstays who weigh experience could back Wells, mayor since 2013 with full police and fire staffing; they would be backing a Republican who opposes state immigration protections.'],
      ['OL', 'Kraft', '●', 'Outsider Left voters favor the working-class socialist challenger who would tax large landlords and repeal the ICE resolution.'],
      ['SS', '—', '—', 'Stressed Sideliners face a choice between continuity and sweeping change, with no clear tilt on everyday costs.', 'Stressed Sideliners can let experience decide: Wells has run the city for 13 years with a balanced budget and staffed police and fire, while Kraft has never held office.'],
      ['AR', 'Wells', '●', 'Ambivalent Right voters value the incumbent’s balanced budgets, reserves and opposition to new taxes.'],
      ['PR', 'Wells', '●', 'Populist Right voters back the mayor who defied state sanctuary law and fought county motel placements of homeless people.'],
      ['CC', 'Wells', '●', 'Committed Conservatives back the Republican mayor’s fiscal record, police funding and no-new-taxes stance.'],
      ['FF', 'Wells', '●', 'Faith and Flag Conservatives support Wells’s immigration stance and law-and-order priorities.'],
    ]),
    counterArguments: [
      'AR/PR/CC/FF (Wells ●): But Wells’s policies have drawn the city into two lawsuits with the state, and after 13 years Parkway Plaza still awaits revival.',
      'PL/OL (Kraft ●): But Kraft has no government or budget experience and would face a council majority unlikely to pass a landlord tax.',
    ],
  },

  // ───────────────────────────── El Cajon Council District 1 ─────────────────────────────
  {
    id: 'el-cajon-council-d1',
    categoryId: 'city',
    title: 'El Cajon City Council, District 1',
    tldrLabel: 'El Cajon Council D1',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The El Cajon City Council adopts the budget, sets zoning and development rules, and oversees police and fire for a city of about 106,000. Recent votes have included the city’s immigration-enforcement resolution, license-plate-reader data sharing and plans for the struggling Parkway Plaza mall.',
      'District 1 is open because Councilmember Gary Kendrick, in El Cajon office for 24 years, withdrew from re-election for health reasons in August 2026 (East County Magazine). The winner could shift how often Mayor Wells’s conservative majority prevails.',
    ],
    introParagraphs: [
      'This is a single November contest with three candidates. Chuck Kaye, a retired police chief, is endorsed by the Republican Party; Patrick Grillot, a healthcare manager and president of the East County Democratic Club, is endorsed by the Democratic Party and the Labor Council; Osama Bayati, 24, says he would be the youngest councilmember in city history. A plurality wins.',
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living in Council District 1 of the City of El Cajon.',
    qualificationCriteria: COUNCIL_CRITERIA,
    readingLinks: [
      { label: 'El Cajon City Clerk: 2026 election information', url: 'https://www.elcajon.gov/your-government/departments/city-clerk/election-info' },
      { label: 'KPBS: party endorsements for the general election (Sept 30, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian' },
    ],
    candidates: [
      {
        id: 'chuck-kaye',
        name: 'Chuck Kaye',
        party: 'NP',
        role: 'Retired Police Chief',
        qualification: qual('some', 'Kaye spent 28 years with the San Diego Police Department, retiring as an assistant chief, and five years as Coronado’s police chief, a city department head. He has not held elected office.', [
          ['governance', 'partial', 'Coronado police chief for five years, reporting to the city manager (ballot statement); no elected role.'],
          ['budget', 'partial', 'Ran the Coronado Police Department and was an SDPD assistant chief; department budget figures not published.'],
          ['landuse', 'unknown', 'No planning or housing role documented; supports redeveloping Parkway Plaza with ownership housing (ballot statement).'],
          ['constituent', 'partial', 'Decades of community policing in the region; no El Cajon civic role documented.'],
        ]),
        bio: [
          'Kaye served 28 years with the San Diego Police Department, retiring as an assistant chief, then five years as Coronado’s police chief; East County Magazine also reports earlier service with the San Diego State University police (Aug 2026).',
          'He says he will attract businesses and dining, redevelop Parkway Plaza with ownership housing and jobs, and use a stronger economy to fund police, fire, parks and roads.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓✓ 33 years in police leadership; public safety is his core pitch', comparison: 'Grillot has overseen public-safety facility bond spending; Bayati proposes a homeless crisis team.' },
          { topic: 'Economic development', position: '✓ Attract businesses, dining and jobs', comparison: 'Grillot wants more restaurants, shops and grocery stores.' },
          { topic: 'Parkway Plaza', position: '✓ Supports redevelopment with ownership housing', comparison: 'Grillot calls buying Parkway Plaza a “wasteful misadventure.”' },
          { topic: 'Taxes', position: '? No stated position', comparison: 'Grillot and Bayati both oppose raising taxes.' },
          { topic: 'Partisanship', position: '~ Republican Party–endorsed', comparison: 'Grillot is Democratic Party–endorsed.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County (KPBS, Sept 30, 2026).',
      },
      {
        id: 'osama-bayati',
        name: 'Osama Bayati',
        party: 'NP',
        role: 'Civic Affairs Director',
        campaignUrl: 'https://www.bayati4elcajon.com/',
        qualification: qual('limited', 'Bayati, 24, is a lifelong El Cajon resident whose ballot designation is Civic Affairs Director; the employer is not published. No public office or city commission service is documented.', [
          ['governance', 'unknown', 'No elected or appointed role documented.'],
          ['budget', 'unknown', 'No budget role documented.'],
          ['landuse', 'unknown', 'No planning role documented.'],
          ['constituent', 'partial', 'Lifelong El Cajon resident (ballot statement).'],
        ]),
        bio: [
          'Bayati is a 24-year-old lifelong El Cajon resident who says he grew up close to poverty and, through mentorships, went “from Disney sets to Harvard classrooms” (ballot statement). His employer as civic affairs director is not published.',
          'He pledges council term limits, faster small-business permitting, a homeless crisis response team and opposition to new taxes. No endorsements or party affiliation were found.',
        ],
        scorecard: [
          { topic: 'Term limits', position: '✓✓ Wants council term limits', comparison: 'Kaye and Grillot have not proposed term limits.' },
          { topic: 'Homelessness', position: '✓ Create a homeless crisis response team', comparison: 'Grillot also lists homelessness as a priority.' },
          { topic: 'Taxes', position: '✓ Opposes additional taxation', comparison: 'Grillot opposes raising the sales tax; Kaye has not said.' },
          { topic: 'Small business', position: '✓ Streamline small-business growth', comparison: 'Kaye stresses attracting new businesses.' },
        ],
        money: NO_MONEY,
        endorsements: 'None found as of Oct 13, 2026.',
      },
      {
        id: 'patrick-grillot',
        name: 'Patrick Grillot',
        party: 'NP',
        role: 'Healthcare Manager/Parent',
        campaignUrl: 'https://patrickforelcajon.com/',
        qualification: qual('some', 'Grillot has served on El Cajon’s Public Safety Facility Financing Oversight Committee since 2021 (vice chair) and manages a healthcare program. He has not held elected office.', [
          ['governance', 'partial', 'Appointed to the city’s Public Safety Facility Financing Oversight Committee in 2021; now vice chair (East County Magazine; ballot statement).'],
          ['budget', 'partial', 'The oversight committee reviews spending on fire-station upgrades and police equipment (ballot statement).'],
          ['landuse', 'unknown', 'No planning role documented.'],
          ['constituent', 'partial', 'District homeowner and parent; president of the East County Democratic Club (East County Magazine, Aug 2026).'],
        ]),
        bio: [
          'Grillot, 35, is a healthcare program manager, a homeowner and father of a two-year-old. He has served on El Cajon’s Public Safety Facility Financing Oversight Committee since 2021 and is president of the East County Democratic Club (East County Magazine, Aug 2026).',
          'He lists safer streets and parks, higher wages and lower housing costs, less helicopter noise and responsible spending without raising the sales tax. He criticizes the council for “failed lawsuits” and for buying Parkway Plaza.',
        ],
        scorecard: [
          { topic: 'Spending', position: '✓ Responsible spending without a sales-tax increase; five years overseeing public-safety bond money', comparison: 'Kaye ties services to economic growth; Bayati opposes new taxes.' },
          { topic: 'City lawsuits', position: '✓ Criticizes “failed lawsuits” and buying Parkway Plaza (ballot statement)', comparison: 'Kaye supports redeveloping Parkway Plaza.' },
          { topic: 'Cost of living', position: '✓ Higher wages and lower housing costs', comparison: 'Kaye stresses jobs; Bayati stresses working families.' },
          { topic: 'Public safety', position: '✓ Safer streets and parks, faster nuisance resolution', comparison: 'Kaye brings 33 years of police leadership.' },
          { topic: 'Partisanship', position: '~ Democratic Party– and Labor Council–endorsed', comparison: 'Kaye is Republican Party–endorsed.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party; San Diego & Imperial Counties Labor Council; San Diego Democrats for Equality (as of Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Grillot', '●', 'Progressive Left voters back the Labor Council– and Democratic-endorsed candidate who criticizes the council’s lawsuits and wants higher wages.'],
      ['EL', 'Grillot', '●', 'Establishment Liberals value Grillot’s five years on a city oversight committee and his party and labor backing.'],
      ['DM', 'Grillot', '●', 'Democratic Mainstays follow the county party and Labor Council to Grillot.'],
      ['OL', 'Grillot', '◐', 'Outsider Left voters prefer the labor-backed Democrat, though Bayati’s term-limits pitch may appeal to their distrust of officeholders.'],
      ['SS', '—', '—', 'Stressed Sideliners see three newcomers who all promise safer streets and no new taxes, with no clear experience gap between the top two.'],
      ['AR', 'Kaye', '◐', 'Ambivalent Right voters value a retired police chief focused on business growth over partisan fights.'],
      ['PR', 'Kaye', '◐', 'Populist Right voters lean to the law-enforcement candidate endorsed by the Republican Party, though Bayati’s term limits and no-new-taxes pledge are also outsider appeals.'],
      ['CC', 'Kaye', '●', 'Committed Conservatives back the Republican-endorsed retired chief who ties strong police funding to economic growth.'],
      ['FF', 'Kaye', '◐', 'Faith and Flag Conservatives favor the law-and-order candidate, with values issues not central to this race.'],
    ]),
    counterArguments: [
      'CC/AR/PR (Kaye): But Kaye has no stated position on taxes or homelessness, and his career is in San Diego and Coronado rather than El Cajon civic life.',
      'PL/EL/DM (Grillot ●): But Grillot’s government experience is an advisory committee, and his opposition to raising the sales tax limits how he could pay for new priorities.',
    ],
  },

  // ───────────────────────────── Cajon Valley Union SD Area 2 ─────────────────────────────
  {
    id: 'cajon-valley-trustee-area-2',
    categoryId: 'school',
    title: 'Cajon Valley Union School District, Trustee Area 2',
    tldrLabel: 'Cajon Valley Union SD, Area 2',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Cajon Valley Union School District runs the K-8 schools of El Cajon and nearby unincorporated areas. Its five-member board adopts the budget, approves curriculum such as the district’s World of Work career program, and hires the superintendent.',
      'Area 2 pits a first-term trustee who stresses staff pay and after-school programs against a Republican-endorsed business owner focused on technology and data-safety policy.',
    ],
    introParagraphs: [
      'This is a single November contest. Jolyana Jirjees was the only candidate for Area 2 in 2022 and was seated in lieu of an election (East County Magazine, Nov 2022). Dana Covell is endorsed by the Republican Party of San Diego County (KPBS, Sept 30, 2026). Little news coverage of the race was found.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: K12_CRITERIA,
    readingLinks: [
      { label: 'Cajon Valley USD: trustee area elections', url: 'https://www.cajonvalley.net/leadership/governing-board/trustee-area-elections' },
      { label: 'KPBS: party endorsements for the general election (Sept 30, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian' },
    ],
    candidates: [
      {
        id: 'dana-covell',
        name: 'Dana Covell',
        party: 'NP',
        role: 'Business Owner/Mother',
        qualification: qual('limited', 'Covell owns an information technology business and has volunteered in district schools for about a decade. She has not held public office.', [
          ['governance', 'unknown', 'No elected or board service documented.'],
          ['budget', 'partial', 'Owns an IT business; holds a business management degree and a master’s in information systems (ballot statement). Business size not published.'],
          ['instruction', 'unknown', 'No teaching role documented.'],
          ['community', 'partial', 'Parent volunteer for more than a decade; children enrolled in district schools 9+ years (ballot statement).'],
        ]),
        bio: [
          'Covell, 46, owns an information technology business and holds a business degree and a master’s in information systems. She is the mother of three children who have attended Cajon Valley schools for more than nine years and says she most enjoys volunteering in the arts (ballot statement).',
          'She wants fiscally and technologically responsible policies, especially rules protecting students’ data and governing classroom technology. She is endorsed by the Republican Party of San Diego County.',
        ],
        scorecard: [
          { topic: 'Student data and technology', position: '✓✓ Wants clear policy on equipment, software and student data (ballot statement)', comparison: 'Jirjees supports consistent AI guidelines.' },
          { topic: 'Budget', position: '✓ Fiscally responsible policies', comparison: 'Jirjees opposes using reserves for non-emergencies.' },
          { topic: 'Arts', position: '✓ Wants arts programs available to all students', comparison: 'Jirjees emphasizes after-school programs.' },
          { topic: 'Staff pay', position: '~ Says staff should have “vital resources”; no pay position', comparison: 'Jirjees calls a livable wage one of the most important issues.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County (KPBS, Sept 30, 2026).',
      },
      {
        id: 'jolyana-jirjees',
        name: 'Jolyana Jirjees',
        party: 'NP',
        role: 'Incumbent',
        qualification: qual('substantial', 'Jirjees has been the Area 2 trustee since December 2022 and leads the Chaldean Community Council, a social-services nonprofit. She has not worked as a teacher.', [
          ['governance', 'met', 'Area 2 trustee since 2022 (district board page; East County Magazine).'],
          ['budget', 'met', 'Has voted on four district budgets; executive director of the Chaldean Community Council (East County Magazine, Apr 2024).'],
          ['instruction', 'partial', 'Board votes on curriculum; former peer advisor at Grossmont College; no K-8 teaching role.'],
          ['community', 'met', 'Leads a community social-services nonprofit serving El Cajon’s Chaldean community.'],
        ]),
        bio: [
          'Jirjees, 33, joined the board in December 2022 after running unopposed. She was social services director and became executive director of the Chaldean Community Council in 2024, and earlier worked as a peer advisor at Grossmont College (East County Magazine).',
          'Her statement says livable wages for school employees are among the most important issues, and she backs affordable after-school programs, consistent AI guidelines and keeping reserves for emergencies.',
        ],
        recordVsChange:
          'Jirjees brings four years on the board and ties to one of the district’s largest immigrant communities. The case for change is Covell’s focus on technology and data policy and the fact that Jirjees has never faced voters in a contested race.',
        scorecard: [
          { topic: 'Staff pay', position: '✓✓ Calls a livable wage for school employees a top issue (ballot statement)', comparison: 'Covell does not take a pay position.' },
          { topic: 'After-school programs', position: '✓✓ Advocate for accessible, affordable after-school programs', comparison: 'Covell emphasizes arts programs.' },
          { topic: 'Reserves', position: '✓ Opposes using reserves for non-emergencies', comparison: 'Covell backs fiscally responsible policy.' },
          { topic: 'AI and technology', position: '✓ Consistent AI guidelines for parents, teachers and students', comparison: 'Covell makes technology and data safety her focus.' },
        ],
        money: NO_MONEY,
        endorsements: 'None found as of Oct 13, 2026 (the county Democratic and Republican parties did not endorse her; KPBS, Sept 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Jirjees', '◐', 'Progressive Left voters favor the trustee who puts livable wages for school staff and after-school programs first.'],
      ['EL', 'Jirjees', '◐', 'Establishment Liberals value an incumbent with board experience who leads a community nonprofit, against a Republican-endorsed challenger.'],
      ['DM', 'Jirjees', '◐', 'Democratic Mainstays lean to the incumbent focused on employee pay, though no party endorsed her.'],
      ['OL', 'Jirjees', '○', 'Outsider Left voters lean weakly to the trustee focused on workers and families.'],
      ['SS', '—', '—', 'Stressed Sideliners have little information on either candidate in a low-coverage race.', 'Stressed Sideliners can let experience decide: Jirjees has served on the board since 2022 and runs a community nonprofit, while Covell has volunteer and business experience but no board service.'],
      ['AR', 'Covell', '○', 'Ambivalent Right voters may like a business owner’s focus on technology policy and fiscal responsibility, weakly given her thin public record.', 'Ambivalent Right voters who weigh experience could keep Jirjees, who has four years of budget votes and opposes spending reserves on non-emergencies; they give up Covell’s business background.'],
      ['PR', 'Covell', '◐', 'Populist Right voters favor the Republican-endorsed parent who wants protection of children’s data.', 'Experience-first Populist Right voters could back Jirjees, who has served a full term and wants reserves kept for emergencies, though she lacks the Republican endorsement Covell carries.'],
      ['CC', 'Covell', '●', 'Committed Conservatives back the Republican Party–endorsed business owner who stresses fiscal and technological responsibility.'],
      ['FF', 'Covell', '◐', 'Faith and Flag Conservatives lean to the Republican-endorsed mother of three, with values issues not central to either campaign.', 'Faith and Flag voters who prize experience could choose Jirjees, a full-term trustee rooted in El Cajon’s Chaldean community; they give up the Republican-endorsed challenger.'],
    ]),
    counterArguments: [
      'CC (Covell ●): But Covell has no board or public-budget experience, and her platform is mostly about technology policy.',
      'PL/EL/DM (Jirjees ◐): But Jirjees has never won a contested election, and she has not published a record of specific votes.',
    ],
  },

  // ───────────────────────────── Cajon Valley Union SD Area 3 ─────────────────────────────
  {
    id: 'cajon-valley-trustee-area-3',
    categoryId: 'school',
    title: 'Cajon Valley Union School District, Trustee Area 3',
    tldrLabel: 'Cajon Valley Union SD, Area 3',
    seatContext: 'Appointed incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Cajon Valley Union School District board governs El Cajon-area K-8 schools: it adopts the budget, sets policy and approves programs such as World of Work and Camp Cajon. The board has had a conservative majority; trustee Anthony Carnevale’s 2023 public comment was the trigger for the Grossmont Union board’s mental-health contract decision later criticized by the county grand jury.',
      'Area 3 has four candidates: the appointed incumbent, the former trustee she replaced, a special-education parent and a candidate with no statement. A plurality wins.',
    ],
    introParagraphs: [
      'Jo Alegría held Area 3 for about 10 years before resigning in February 2024, citing a new job; East County Magazine noted she had missed two meetings beforehand. The board, whose four voting members are all conservatives, appointed teacher Emily “Lily” Schworm in April 2024, and Schworm says she then won election to the rest of the term (East County Magazine; ballot statement). The Republican Party endorsed Schworm (KPBS, Sept 30, 2026).',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: K12_CRITERIA,
    readingLinks: [
      { label: 'East County Magazine: Alegria resigns from Cajon Valley board (Feb 2024)', url: 'https://www.eastcountymagazine.org/alegria-resigns-cajon-valley-school-board' },
      { label: 'Cajon Valley USD: trustee area elections', url: 'https://www.cajonvalley.net/leadership/governing-board/trustee-area-elections' },
    ],
    candidates: [
      {
        id: 'marbriza-alcala',
        name: 'Marbriza Alcala',
        party: 'NP',
        role: 'Parent Volunteer',
        qualification: qual('limited', 'Alcala is a district parent, School Site Council member and classroom volunteer. She has not held elected office.', [
          ['governance', 'partial', 'School Site Council member (ballot statement); no elected board service.'],
          ['budget', 'unknown', 'No budget role documented.'],
          ['instruction', 'partial', 'Parent of special-education students at Lexington Elementary and the district’s virtual academy; comes from a family of educators (ballot statement).'],
          ['community', 'partial', 'Active classroom volunteer (ballot statement).'],
        ]),
        bio: [
          'Alcala is a Cajon Valley parent whose children receive special-education services at Lexington Elementary and the district’s Virtual Learning Academy. She serves on a School Site Council and volunteers in classrooms (ballot statement).',
          'She wants fully funded classrooms; more arts, STEM and bilingual education; recruiting and retaining teachers; and transparent, collaborative board decisions. No endorsements were found.',
        ],
        scorecard: [
          { topic: 'Special education', position: '✓✓ Parent of special-education students; wants every child supported', comparison: 'Alegría cites a growing number of students with disabilities as a challenge.' },
          { topic: 'Bilingual education', position: '✓ Expand bilingual education, arts and STEM', comparison: 'Schworm is a bilingual-credentialed teacher but does not list it as a policy goal.' },
          { topic: 'Teachers', position: '✓ Recruit and retain outstanding educators', comparison: 'Alegría stresses teamwork with staff.' },
          { topic: 'Transparency', position: '✓ Listen to parents, staff and community before decisions', comparison: 'Schworm stresses respect, efficiency and accountability.' },
        ],
        money: NO_MONEY,
        endorsements: 'None found as of Oct 13, 2026.',
      },
      {
        id: 'jo-alegria',
        name: 'Jo Alegría',
        party: 'NP',
        role: 'Business Owner/Director',
        qualification: qual('substantial', 'Alegría served about 10 years as the Area 3 trustee before resigning in February 2024. She is a business owner and director of development.', [
          ['governance', 'met', 'Area 3 trustee for about 10 years until February 2024 (East County Magazine; ballot statement).'],
          ['budget', 'met', 'Voted on district budgets for a decade; cites budgeting and labor-relations experience (ballot statement).'],
          ['instruction', 'partial', 'Says she had a role in creating the district’s World of Work curriculum; no teaching role documented.'],
          ['community', 'partial', 'Long-time area trustee; resigned mid-term after missing two meetings (East County Magazine).'],
        ]),
        bio: [
          'Alegría (listed by the county as Jo Alegria and earlier as Jo Medina-Alegria) represented Area 3 for about a decade. She resigned in February 2024, citing a new job; she told Times of San Diego she would be an MTS bus driver (East County Magazine).',
          'Her statement stresses experience, fiscal responsibility, a board that works together, and “traditional family values.” She lists endorsements from former Rep. Duncan Hunter, County Assessor Jordan Marks, and current and former Cajon Valley trustees.',
        ],
        scorecard: [
          { topic: 'Experience', position: '✓✓ About 10 years as Area 3 trustee', comparison: 'Schworm has served since April 2024; Alcala and Bucy have no board service.' },
          { topic: 'Curriculum', position: '✓ Helped create World of Work career curriculum', comparison: 'Alcala wants more arts, STEM and bilingual programs.' },
          { topic: 'Budget', position: '✓ Fiscal responsibility; cites budgeting and labor-relations experience', comparison: 'Schworm stresses efficiency and accountability.' },
          { topic: 'Values', position: '✓ “I believe in traditional family values”', comparison: 'Schworm cites her church and family values.' },
        ],
        money: NO_MONEY,
        endorsements: 'Per her ballot statement: former Rep. Duncan L. Hunter; County Assessor/Recorder/Clerk Jordan Marks; Cajon Valley trustees Karen Clark-Mejia and Jim Miller; former trustee Tamara Otero (as printed, Oct 2026).',
        notes: [
          'She is challenging the trustee appointed to replace her after she resigned in 2024.',
          'The accent in “Alegría” follows the printed ballot; the county candidate list and her statement header spell it Alegria.',
        ],
      },
      {
        id: 'emily-schworm',
        name: '"Lily" Emily Schworm',
        party: 'NP',
        role: 'Teacher/Board Member',
        campaignUrl: 'https://lilyforschoolboard.com/',
        qualification: qual('substantial', 'Schworm has been the Area 3 trustee since an April 2024 appointment and is a credentialed teacher who taught five years at Lexington Elementary.', [
          ['governance', 'met', 'Appointed April 2024, then elected to the rest of the term (East County Magazine; ballot statement).'],
          ['budget', 'partial', 'Has voted on district budgets since 2024; no other finance role documented.'],
          ['instruction', 'met', 'Holds a bilingual teaching credential; taught in several districts, including five years at Lexington Elementary (ballot statement).'],
          ['community', 'partial', 'Long-time El Cajon resident and church youth-program volunteer; homeschools her four daughters (ballot statement).'],
        ]),
        bio: [
          'Schworm, 44, has lived most of her life in El Cajon. She holds a linguistics degree from SDSU and a bilingual teaching credential, taught in several districts including five years at Lexington Elementary, and ran for El Cajon City Council in 2012 (East County Magazine).',
          'The board appointed her to Area 3 in April 2024 after Alegría resigned. She homeschools her four daughters, has attended Foothills Christian Church for 26 years, and is endorsed by the Republican Party of San Diego County.',
        ],
        recordVsChange:
          'Schworm brings classroom experience and two and a half years on the board, and says her votes show respect, efficiency and accountability. The case for change is that she was first placed on the board by appointment, and she homeschools her own children rather than enrolling them in the district.',
        scorecard: [
          { topic: 'Teaching', position: '✓✓ Credentialed bilingual teacher; five years at Lexington Elementary', comparison: 'Alegría and Alcala have not taught.' },
          { topic: 'Family choice', position: '✓ Homeschools her daughters; supports families finding “the right educational fit”', comparison: 'Alcala’s children attend district schools.' },
          { topic: 'Accountability', position: '✓ Cites respect, efficiency and accountability in her voting record', comparison: 'Alegría stresses experience and teamwork.' },
          { topic: 'Values', position: '✓ Cites passing on family values and long church involvement', comparison: 'Alegría cites traditional family values.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County (KPBS, Sept 30, 2026).',
      },
      {
        id: 'michael-william-bucy',
        name: 'Michael William Bucy',
        party: 'NP',
        role: 'Father/Care Provider',
        qualification: qual('limited', 'Bucy’s ballot designation is Father/Care Provider. He filed no statement, and no background could be verified.', [
          ['governance', 'unknown', 'No public record found.'],
          ['budget', 'unknown', 'No public record found.'],
          ['instruction', 'unknown', 'No public record found.'],
          ['community', 'unknown', 'No public record found.'],
        ]),
        bio: ['Bucy’s ballot designation is Father/Care Provider. He did not file a candidate statement, and no platform or endorsements were found.'],
        scorecard: [
          { topic: 'Platform', position: `? ${NO_STATEMENT}`, comparison: 'The other three candidates filed statements.' },
          { topic: 'Experience', position: '? No board or school role found', comparison: 'Alegría and Schworm have board service.' },
        ],
        money: NO_MONEY,
        endorsements: 'None found as of Oct 13, 2026.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Alcala', '◐', 'Progressive Left voters favor the special-education parent who wants bilingual education, fully funded classrooms and transparent decisions over two conservative-aligned trustees.'],
      ['EL', 'Alcala', '○', 'Establishment Liberals lean to the only candidate outside the board’s conservative bloc, weakly because she has no board experience.'],
      ['DM', 'Alcala', '○', 'Democratic Mainstays have no party endorsement to follow and lean weakly to the parent focused on teachers and support for every child.'],
      ['OL', 'Alcala', '○', 'Outsider Left voters lean to the newcomer parent over two people the current board majority has backed.'],
      ['SS', '—', '—', 'Stressed Sideliners face four names with little coverage and no clear everyday-cost contrast.'],
      ['AR', 'Schworm', '◐', 'Ambivalent Right voters value a credentialed teacher who stresses efficiency and accountability over a former trustee who left mid-term.'],
      ['PR', 'Alegría', '○', 'Populist Right voters may prefer the former trustee backed by Duncan Hunter and other local Republicans who stresses traditional values, though she left the board mid-term.'],
      ['CC', 'Schworm', '●', 'Committed Conservatives back the Republican Party–endorsed incumbent teacher.'],
      ['FF', 'Schworm', '◐', 'Faith and Flag Conservatives favor the churchgoing homeschooling mother who emphasizes passing on family values; Alegría makes a similar appeal.'],
    ]),
    counterArguments: [
      'CC/AR/FF (Schworm): But Schworm first joined the board by appointment from a conservative majority, and she does not send her own children to district schools.',
      'PL/EL (Alcala): But Alcala has no board or budget experience, and a split of the non-conservative vote in a four-way race makes her a long shot.',
    ],
  },

  // ───────────────────────────── Grossmont Union HSD Area 3 ─────────────────────────────
  {
    id: 'guhsd-trustee-area-3',
    categoryId: 'school',
    title: 'Grossmont Union High School District, Trustee Area 3',
    tldrLabel: 'Grossmont Union HSD, Area 3',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Grossmont Union High School District runs the high schools of El Cajon, La Mesa, Santee, Lakeside and nearby areas. Its five-member board adopts the budget, sets library, curriculum and student-services policy, and hires the superintendent.',
      'Since 2025 a four-member conservative majority, including Area 3 trustee Gary Woods, has drawn protests over librarian layoffs, a reported private text thread among majority members, lawsuits alleging an anti-LGBTQ+ agenda, and a June 2026 civil grand jury report criticizing its 2023 cancellation of a student mental-health contract. Three majority seats are on the ballot, so control of the board is at stake.',
    ],
    introParagraphs: [
      'This is a single November contest. Woods, on the board since 2014 and its president in 2025, is endorsed by the Republican Party. Jeneé Littrell, a former district counselor and administrator, is endorsed by the Grossmont Education Association (the teachers’ union), the El Cajon Police Officers’ Association, the Democratic Party and the Labor Council.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: K12_CRITERIA,
    readingLinks: [
      { label: 'Times of San Diego: grand jury report on Grossmont Union board (June 12, 2026)', url: 'https://timesofsandiego.com/education/2026/06/12/grand-jury-grossmont-union-board-mental-healthcare', summary: 'Findings on the 2023 mental-health contract decision and the district’s response.' },
      { label: 'County civil grand jury report: “Come As You Are”', url: 'https://www.sandiegocounty.gov/content/dam/sdc/grandjury/reports/2025-2026/east-county-students/Come%20As%20You%20Are-%20Final.pdf' },
      { label: 'KPBS: lawsuits allege anti-LGBTQ+ agenda (Apr 14, 2026)', url: 'https://www.kpbs.org/news/education/2026/04/14/grossmont-union-high-school-district-facing-lawsuits-alleging-anti-lgbtq-agenda' },
      { label: 'KPBS: recall effort falls short (Dec 5, 2025)', url: 'https://www.kpbs.org/news/local/2025/12/05/grossmont-union-high-school-board-recall-effort-falls-short' },
    ],
    candidates: [
      {
        id: 'gary-woods',
        name: 'Gary Woods',
        party: 'NP',
        role: 'Governing Board Member, Grossmont Union High School District',
        qualification: qual('extensive', 'Woods has been a trustee since 2014 and was board president in 2025. He holds a doctorate in education and has taught college and online courses, but has not worked in K-12 schools.', [
          ['governance', 'met', 'Trustee since 2014; Area 3 since districting; board president in 2025 (KPBS; East County Magazine, 2018).'],
          ['budget', 'met', 'A decade of budget votes; his statement credits the board with $1 billion in facilities funding including matching grants and $27 million returned to taxpayers (unverified campaign claims).'],
          ['instruction', 'partial', 'Ed.D. in technology and learning (Alliant International University); taught psychology and online courses at Southern California Seminary and Liberty University (East County Magazine, 2012/2018); no K-12 role.'],
          ['community', 'partial', 'Long-time area trustee; a civil grand jury found the board’s 2023 mental-health contract decision created lasting community distrust.'],
        ]),
        bio: [
          'Woods was first elected to the Grossmont Union board in 2014 and won Area 3 in 2018 and 2022. He holds a doctorate in education and has taught psychology and online courses for Southern California Seminary and Liberty University (East County Magazine). He was board president in 2025.',
          'His slogan is “strong academics, no politics.” He credits the board with AI-focused career pathways, dual enrollment, facilities upgrades and eliminating “overpriced, outdated positions.” In 2025 the board majority laid off most district librarians; in a December 2025 statement he called recall organizers “socialist” officials and “radical extremists” before asking that it be replaced with a milder one (KPBS).',
        ],
        recordVsChange:
          'Woods can point to new career pathways, dual enrollment, facilities work and outside awards he cites. The case for change is the grand jury’s finding that the board cut student mental-health services on false claims, the lawsuits and the open conflict with teachers, and whether the majority has kept politics out of the district as his slogan promises.',
        scorecard: [
          { topic: 'Career pathways', position: '✓✓ Credits the board with AI-focused career pathways and dual enrollment (ballot statement)', comparison: 'Littrell wants to protect CTE alongside arts and athletics.' },
          { topic: 'Student mental health', position: '✗ Voted in 2023 to end the San Diego Youth Services contract, saying it did not “reflect East County values” (KPBS)', comparison: 'Littrell pledges to restore essential student services.' },
          { topic: 'Libraries and staffing', position: '✗ Part of the majority that laid off nearly all librarians in 2025 (Voice of San Diego)', comparison: 'Littrell is endorsed by the teachers’ union.' },
          { topic: 'Spending', position: '✓ Says the board cut dozens of positions and returned $27 million to taxpayers (campaign claim)', comparison: 'Littrell pledges transparent use of taxpayer dollars.' },
          { topic: 'Ideology', position: '~ Republican Party–endorsed; leads the conservative majority', comparison: 'Littrell is backed by Democrats, labor and the El Cajon police union.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County (KPBS, Sept 30, 2026).',
        redFlags: [
          {
            severity: 'serious',
            status: 'official-finding',
            text: 'A San Diego County civil grand jury report released June 1, 2026 found that the board’s July 2023 decision not to renew its San Diego Youth Services mental-health contract “was not based on performance concerns or misconduct” but on “falsehoods and misrepresentations” in a single public comment, and that students went about four months without services in violation of board policies. Woods voted to end the services, saying the provider did not “reflect East County values.” The district says the report “presents little, if any, new evidence” and that disagreement with a board decision does not show a violation of policy or law.',
            whyItMatters: 'A trustee’s core duty is to make decisions on verified facts and keep student services running; the grand jury found the board did neither on this contract.',
            sources: [
              { label: 'Times of San Diego (June 12, 2026)', url: 'https://timesofsandiego.com/education/2026/06/12/grand-jury-grossmont-union-board-mental-healthcare' },
              { label: 'Civil grand jury report', url: 'https://www.sandiegocounty.gov/content/dam/sdc/grandjury/reports/2025-2026/east-county-students/Come%20As%20You%20Are-%20Final.pdf' },
              { label: 'KPBS (Apr 14, 2026)', url: 'https://www.kpbs.org/news/education/2026/04/14/grossmont-union-high-school-district-facing-lawsuits-alleging-anti-lgbtq-agenda' },
            ],
          },
          {
            severity: 'notable',
            status: 'alleged',
            text: 'In April 2026 former district librarians sued, alleging the board majority (Woods, Scott Eckert, Robert Shield and Jim Kelly) pursued an anti-LGBTQ+ agenda, banned books and retaliated against staff; a 2025 Union-Tribune investigation reported private text threads among the same four members about ending DEI and cutting librarians. The district says it will defend itself fully; Woods did not respond to KPBS.',
            whyItMatters: 'Pending litigation over board conduct can cost the district money and bears on whether trustees follow anti-discrimination and open-meeting rules.',
            sources: [
              { label: 'KPBS (Apr 14, 2026)', url: 'https://www.kpbs.org/news/education/2026/04/14/grossmont-union-high-school-district-facing-lawsuits-alleging-anti-lgbtq-agenda' },
              { label: 'KPBS (Oct 7, 2026)', url: 'https://www.kpbs.org/news/politics/2026/10/07/grossmont-union-high-trustee-faces-censure-over-disclosure-of-confidential-information' },
            ],
          },
        ],
        notes: [
          'The teachers’ union said it withheld its endorsement from incumbents over what it called ethical misconduct and a breakdown in labor relations (East County Magazine, May 2026); these are the union’s allegations.',
          'Achievement and savings figures in his statement are campaign claims and were not independently verified.',
        ],
      },
      {
        id: 'jenee-littrell',
        name: 'Jeneé Littrell',
        party: 'NP',
        role: 'Public School Counselor',
        qualification: qual('substantial', 'Littrell has nearly 30 years in public education, including 15 years in this district as a counselor, assistant principal and administrator, and later served as an associate and deputy superintendent. She has not served on a school board.', [
          ['governance', 'partial', 'Former associate and deputy superintendent supporting 23 school districts (ballot statement); no elected board service.'],
          ['budget', 'met', 'Says she oversaw more than $65 million in public funds as a deputy superintendent (ballot statement).'],
          ['instruction', 'met', '15 years in Grossmont Union as counselor, assistant principal and district administrator; later a principal (ballot statement).'],
          ['community', 'met', 'GUHSD graduate; led the Project Shield school-safety effort after the 2001 Santana High shooting (East County Magazine).'],
        ]),
        bio: [
          'Littrell has spent nearly 30 years in public education, 15 of them in the Grossmont district as a counselor, assistant principal and district administrator. She later worked as a principal and as an associate and deputy superintendent supporting 23 districts (ballot statement). She led Project Shield, a school-safety initiative begun after the 2001 Santana High shooting (East County Magazine).',
          'She attended district schools, as did her husband and daughters. She pledges to restore student services, protect academics, CTE, arts and athletics, and demand transparent spending and public input before major decisions.',
        ],
        scorecard: [
          { topic: 'Student services', position: '✓✓ Restore safe, supportive schools and essential student services (ballot statement)', comparison: 'Woods voted to end the 2023 mental-health contract.' },
          { topic: 'Career and academics', position: '✓ Protect CTE, arts, athletics and college, trades and military pathways', comparison: 'Woods emphasizes AI-focused career pathways.' },
          { topic: 'Transparency', position: '✓ Hear parents, educators and students before major decisions', comparison: 'Woods’s majority faces reports of private group texts.' },
          { topic: 'School safety', position: '✓✓ Led Project Shield; endorsed by El Cajon police officers', comparison: 'Woods lists student safety among his priorities.' },
          { topic: 'Labor relations', position: '✓ Endorsed by the Grossmont Education Association', comparison: 'The union backed challengers against the majority incumbents.' },
        ],
        money: NO_MONEY,
        endorsements: 'Grossmont Education Association; El Cajon Police Officers’ Association (ballot statement); San Diego County Democratic Party; San Diego & Imperial Counties Labor Council (as of Oct 2026).',
      },
   ],
    crossTypology: ct([
      ['PL', 'Littrell', '●', 'Progressive Left voters back the teacher-endorsed challenger pledging to restore student services after the board cut a mental-health contract over LGBTQ+ claims.'],
      ['EL', 'Littrell', '●', 'Establishment Liberals value Littrell’s 30 years in education leadership and the grand jury’s rebuke of the current majority.'],
      ['DM', 'Littrell', '●', 'Democratic Mainstays follow the Democratic Party, Labor Council and teachers’ union to Littrell.'],
      ['OL', 'Littrell', '◐', 'Outsider Left voters want to break the conservative majority, though Littrell is a career administrator rather than an outsider.'],
      ['SS', 'Littrell', '○', 'Stressed Sideliners may lean to the counselor focused on student services and safety over a board mired in lawsuits.'],
      ['AR', 'Littrell', '○', 'Ambivalent Right voters may prefer a police-endorsed career educator promising less politics to a trustee the grand jury faulted, though Woods is the Republican pick.'],
      ['PR', 'Woods', '◐', 'Populist Right voters back the Republican-endorsed trustee who fights “socialist” activists and teachers’ union pressure, tempered by the grand jury findings.'],
      ['CC', 'Woods', '◐', 'Committed Conservatives value the majority’s staff cuts and taxpayer savings claims, but the grand jury finding and pending lawsuits are real costs.'],
      ['FF', 'Woods', '●', 'Faith and Flag Conservatives support the trustee who ended a provider he said did not reflect “East County values” and resisted LGBTQ+-related programs.'],
    ]),
    counterArguments: [
      'PR/CC/FF (Woods): But a civil grand jury found that the board Woods helped lead cut student mental-health services based on false claims, and the district now faces lawsuits over the majority’s conduct.',
      'PL/EL/DM (Littrell ●): But Littrell has never served on a board, and replacing Woods could flip control of a board that says it has cut costs and expanded career programs.',
    ],
  },

  // ───────────────────────────── Grossmont Union HSD Area 4 ─────────────────────────────
  {
    id: 'guhsd-trustee-area-4',
    categoryId: 'school',
    title: 'Grossmont Union High School District, Trustee Area 4',
    tldrLabel: 'Grossmont Union HSD, Area 4',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The Grossmont Union High School District board sets budget, library, curriculum and student-services policy for East County’s high schools, including Santee’s Santana and West Hills. A four-member conservative majority has faced a grand jury rebuke, lawsuits and a falling-out with the teachers’ union.',
      'Area 4, which includes Santee, is held by board majority member Robert Shield, whose term ends in 2026 and who is not on the ballot. The winner helps decide whether the conservative majority holds.',
    ],
    introParagraphs: [
      'This is a single November contest with three candidates; a plurality wins. Steve Mull, a retired Lakeside principal, is endorsed by the teachers’ union, the Democratic Party and the Labor Council; Charissa “Chrissy” McCullough, a loan officer and parent, is endorsed by the Republican Party (KPBS, Sept 30, 2026). Jimmy Merino, a public adjuster and coach, has no reported endorsements.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: K12_CRITERIA,
    readingLinks: [
      { label: 'KPBS: Meet the candidates for San Diego County school boards (Sept 29, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/29/meet-the-candidates-for-all-school-board-races-in-san-diego-county' },
      { label: 'Times of San Diego: grand jury report on Grossmont Union board (June 12, 2026)', url: 'https://timesofsandiego.com/education/2026/06/12/grand-jury-grossmont-union-board-mental-healthcare' },
    ],
    candidates: [
      {
        id: 'charissa-mccullough',
        name: 'Charissa "Chrissy" McCullough',
        party: 'NP',
        role: 'Loan Officer/Mother',
        qualification: qual('limited', 'McCullough is a loan officer and parent volunteer with children in district high schools. Her statement calls her an educator, but no teaching role or board service is documented.', [
          ['governance', 'unknown', 'No elected or board service documented.'],
          ['budget', 'unknown', 'Loan officer by ballot designation; no public-budget role documented.'],
          ['instruction', 'partial', 'Statement calls her an educator; details not published. Has navigated the IEP process as a parent.'],
          ['community', 'partial', 'Parent volunteer with high-school-age children (ballot statement).'],
        ]),
        bio: [
          'McCullough describes herself as a mother, educator, businesswoman and parent volunteer whose faith guides her service; her ballot designation is Loan Officer/Mother. She has high-school-age children and has navigated the special-education IEP process (ballot statement).',
          'She pledges to keep the focus on academics “not political agendas,” prioritize classroom funding, make activities more affordable, oppose unnecessary taxes and bond measures, and uphold Title IX protections for girls’ sports. She is endorsed by the Republican Party.',
        ],
        scorecard: [
          { topic: 'Taxes and bonds', position: '✓✓ Opposes unnecessary taxes and bond measures (ballot statement)', comparison: 'Mull and Merino do not take a position on bonds.' },
          { topic: 'Girls’ sports', position: '✓✓ Uphold Title IX protections for girls’ sports', comparison: 'Mull and Merino do not address it.' },
          { topic: 'Special education', position: '✓ Students and educators need IEP support and training', comparison: 'Mull cites 34 years in schools.' },
          { topic: 'Parent involvement', position: '✓ Keep parents involved in their children’s education', comparison: 'Merino wants to rebuild trust between leaders and community.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County (KPBS, Sept 30, 2026).',
      },
      {
        id: 'jimmy-merino',
        name: 'Jimmy Merino',
        party: 'NP',
        role: 'Public Adjuster/Coach',
        qualification: qual('limited', 'Merino is a small-business owner and public adjuster who has coached youth and varsity baseball for 10 years. No board or school-administration experience is documented.', [
          ['governance', 'unknown', 'No elected or board service documented.'],
          ['budget', 'partial', 'Small-business owner (ballot statement); business size not published.'],
          ['instruction', 'unknown', 'No teaching role documented; coaches baseball.'],
          ['community', 'partial', 'Youth and varsity baseball coach for 10 years; parent of district students (ballot statement).'],
        ]),
        bio: [
          'Merino, 43, is a fourth-generation San Diegan raised in East County and an SDSU graduate. He owns a business as a public adjuster, has coached little league and varsity baseball for 10 years, and describes himself as an inventor (ballot statement).',
          'He says students, parents, coaches and teachers have endured neglect and wants to rebuild trust between district leaders and the community and protect libraries and music programs. No endorsements were found.',
        ],
        scorecard: [
          { topic: 'Accountability', position: '✓ Says he holds powerful institutions accountable as a public adjuster', comparison: 'Mull stresses professionalism and consensus.' },
          { topic: 'Libraries and music', position: '✓ Calls libraries and music programs foundational', comparison: 'Mull pledges to protect arts and music.' },
          { topic: 'Community trust', position: '✓ Wants to rebuild trust between leaders and the community', comparison: 'McCullough wants academics over political agendas.' },
          { topic: 'Budget', position: '? No stated budget position', comparison: 'McCullough opposes unnecessary taxes and bonds.' },
        ],
        money: NO_MONEY,
        endorsements: 'None found as of Oct 13, 2026.',
      },
      {
        id: 'steve-mull',
        name: 'Steve Mull',
        party: 'NP',
        role: 'Public School Teacher',
        qualification: qual('substantial', 'Mull spent 34 years in the Lakeside School District, including 20 years as principal of Lakeside Middle School. He has not served on a school board.', [
          ['governance', 'partial', 'Twenty years as a school principal; no board service (ballot statement; East County Magazine).'],
          ['budget', 'partial', 'Managed a school site as principal; no district-level budget role documented.'],
          ['instruction', 'met', 'Classroom teacher, vice principal and 20-year principal (ballot statement).'],
          ['community', 'met', 'Decades working with students, parents and teachers in Lakeside, which feeds Grossmont Union high schools.'],
        ]),
        bio: [
          'Mull retired from the Lakeside School District after 34 years, including 20 years as principal of Lakeside Middle School (East County Magazine; ballot statement). His ballot designation is Public School Teacher.',
          'He pledges to put students first, protect STEM, arts, music, CTE and athletics, and “bring professionalism back to the board” with decisions centered on students “not politics.” He is endorsed by the Grossmont Education Association, the Democratic Party and the Labor Council.',
        ],
        scorecard: [
          { topic: 'Board conduct', position: '✓✓ “Bring professionalism back to the board”; consensus and transparency', comparison: 'McCullough also wants to keep politics out; Merino wants to rebuild trust.' },
          { topic: 'Programs', position: '✓ Protect STEM, arts, music, CTE and athletics', comparison: 'McCullough backs arts, athletics and clubs; Merino libraries and music.' },
          { topic: 'Teachers', position: '✓ Endorsed by the teachers’ union', comparison: 'McCullough is Republican-endorsed; Merino has no endorsements.' },
          { topic: 'Spending', position: '~ “Responsible steward of taxpayer dollars”; no stated position on bonds', comparison: 'McCullough opposes unnecessary taxes and bonds.' },
        ],
        money: NO_MONEY,
        endorsements: 'Grossmont Education Association; San Diego County Democratic Party; San Diego & Imperial Counties Labor Council (as of Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Mull', '●', 'Progressive Left voters back the teachers’ union pick who would help end the conservative majority behind the librarian layoffs and the mental-health contract cut.'],
      ['EL', 'Mull', '●', 'Establishment Liberals value a 20-year principal promising professionalism and consensus on a divided board.'],
      ['DM', 'Mull', '●', 'Democratic Mainstays follow the party, Labor Council and teachers to Mull.'],
      ['OL', 'Mull', '◐', 'Outsider Left voters want to change the board majority, though Mull is an establishment-backed career educator.'],
      ['SS', 'Mull', '○', 'Stressed Sideliners may lean to the veteran educator who promises less politics and steady schools.'],
      ['AR', 'Mull', '○', 'Ambivalent Right voters may prefer the experienced principal’s “no politics” pitch to continuing the board’s conflicts, though McCullough is the Republican pick.'],
      ['PR', 'Merino', '○', 'Populist Right voters may like the unendorsed coach who says he fights powerful institutions for a living and wants power back with “the people.”', 'Populist Right voters who weigh experience could back Mull, who ran a Lakeside middle school for 20 years; they give up an outsider and back the teachers’-union candidate.'],
      ['CC', 'McCullough', '●', 'Committed Conservatives back the Republican Party–endorsed parent who opposes unnecessary taxes and bond measures.'],
      ['FF', 'McCullough', '●', 'Faith and Flag Conservatives support the faith-driven mother pledging Title IX protections for girls’ sports and academics over “political agendas.”'],
    ]),
    counterArguments: [
      'CC/FF (McCullough ●): But McCullough has no documented board, budget or school-administration experience for a district-wide board seat.',
      'PL/EL/DM (Mull ●): But Mull’s career was in a K-8 district, and the union endorsement may make it harder for him to bridge the board’s divide he promises to fix.',
    ],
  },
];
