import type { CrossTypologyRow, QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * City of Monterey Park contests (ZIP 91755), Nov 3, 2026.
 * Contest list and ballot designations from the LA County Registrar-Recorder candidate-statement feed and the
 * City Clerk's certified candidate list (Aug 28, 2026); measure text from the Registrar's measures list and the
 * City Attorney's impartial analyses. Research current as of Nov 3, 2026. See docs/wave4-91755-scope.md.
 * Council District 1 (Thomas Wong, unopposed) is omitted: no part of ZIP 91755 is in District 1.
 */

const CITY_ELECTION_URL = 'https://www.montereypark.ca.gov/1738/2026-General-Election-Information';
const CANDIDATE_LIST_URL = 'https://www.montereypark.ca.gov/DocumentCenter/View/19520/Candidate-Status-Table-ballot-order-08282026';
const LA_STATEMENTS_URL = 'https://apps.lavote.gov/candidate-statements/';
const RRCC_MEASURES_URL =
  'https://content.lavote.gov/docs/rrcc/documents/measures-appearing-on-the-ballot---november-3-2026-rev-8-14-2026-v-4.pdf';
const LA_FORWARD_URL = 'https://laforwardguide.org/guide/monterey-park';
const NGO_SITE = 'https://vinhtngo.com/about-vinh';
const KUNG_SITE = 'https://www.kungformpk.com/';
const NDC_OPINION_URL = 'https://www.coloradoboulevard.net/guest-opinion-who-really-stopped-the-data-center-in-monterey-park';
const LAIST_DATA_CENTER_URL = 'https://laist.com/news/politics/developer-pulls-monterey-park-data-center-plan-after-backlash';
const NGO_MAYOR_URL = 'https://www.coloradoboulevard.net/monterey-park-city-council-reorganization-and-mayoral-installation-ceremony';

const HOM_PAGE_URL = 'https://www.montereypark.ca.gov/1757/HOM-Ballot-Measure';
const HOM_ANALYSIS_URL =
  'https://www.montereypark.ca.gov/DocumentCenter/View/19435/20260810MP---HOME-Proposition---Impartial-Analysis-10-August-20261';
const HOM_ARGUMENT_URL = 'https://www.montereypark.ca.gov/DocumentCenter/View/19514/Vote-Yes-on-Measure-XX';
const HOM_RESOLUTION_URL =
  'https://www.montereypark.ca.gov/DocumentCenter/View/19418/2026-R63-REVISED-HOME-Ballot-Proposition-November-3-2026';
const HOM_NEWS_URL = 'https://www.coloradoboulevard.net/monterey-park-voters-to-decide-on-home-housing-overlay-measure-in-november/';

const AAA_PAGE_URL = 'https://www.montereypark.ca.gov/1758/Measure-AAA';
const AAA_ANALYSIS_URL =
  'https://www.montereypark.ca.gov/DocumentCenter/View/19364/MP---TOT-Proposition-City-Attorney-Impartial-Analysis-JV-9-July-2026';
const AAA_ARGUMENT_URL =
  'https://www.montereypark.ca.gov/DocumentCenter/View/19419/Revised---Measure-XX-will-enhance-our-quality-of-life-in-Monterey-Park-without-raising-taxes-on-residents-or-businesses';
const AAA_RESOLUTION_URL =
  'https://www.montereypark.ca.gov/DocumentCenter/View/19304/2026-R57-Place-TOT-on-Ballot-on-November-3-2026-Election';

const NO_POS = '? No public position found';

const COUNCIL_CRITERIA: QualificationCriterion[] = [
  { id: 'fiscal', label: 'City budget and fiscal oversight', detail: 'The Council adopts the city budget and puts taxes such as Measure AAA before voters.' },
  { id: 'land', label: 'Housing, land use and planning', detail: 'The Council writes zoning, including the rules that would implement Measure HOM, and decides land-use cases such as the Saturn Park data center.' },
  { id: 'services', label: 'Public safety and city services', detail: 'Monterey Park runs its own police, fire, water and public works departments under the Council and city manager.' },
  { id: 'governance', label: 'Public-board governance', detail: 'Council members act as a body under open-meeting and ethics rules and oversee a city manager and city attorney.' },
  { id: 'community', label: 'Community engagement', detail: 'Council members hear from residents, businesses and neighborhood groups and explain their votes.' },
];

const GROUPS = [
  ['LP', 'Leftward Progressives'],
  ['LL', 'Loyal Liberals'],
  ['LO', 'Left-Out Left voters'],
  ['OO', 'Order and Opportunity Left voters'],
  ['TM', 'Tuned-Out Middle voters'],
  ['PP', 'Pragmatic and Polite Right voters'],
  ['UR', 'Unconventional Right voters'],
  ['FC', 'Faith First Conservatives'],
  ['NA', 'No Apologies Right voters'],
] as const;
const unopposedRows = (name: string, office: string): CrossTypologyRow[] =>
  ct(GROUPS.map(([code, group]) => [code, name, '●', `${group} have one choice: ${name} is the only candidate for ${office}, a nonpartisan administrative office.`]));

export const RACES_MONTEREY_PARK: Race[] = [
  {
    id: 'monterey-park-council-d5',
    categoryId: 'city',
    title: 'Monterey Park City Council, District 5',
    tldrLabel: 'Monterey Park Council D5',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Council sets Monterey Park’s budget and taxes, writes zoning and land-use rules, oversees the city’s police, fire, water and public works departments, and appoints the city manager and city attorney. Council members rotate through the mayor’s seat. Members are elected by district for four-year terms; this one runs to November 2030.',
      'This year the Council will write the zoning that would put Measure HOM’s housing overlays into effect if voters approve it, and it will keep handling the aftermath of the Saturn Park data center fight that led to Measure NDC, the citywide data-center ban voters approved in June. District 5 covers the southern and eastern part of the city, about 44% of ZIP 91755.',
    ],
    introParagraphs: [
      'Incumbent Vinh T. Ngo, a former mayor and former Garvey School District trustee, faces Steven Kung, a filmmaker who co-founded No Data Center Monterey Park and ran the Yes on Measure NDC committee. The race turns largely on the data center: Ngo says he authored Measure NDC, while Kung and his co-founders argue that Ngo’s earlier votes gave the project a lifeline and that residents, not the Council, stopped it (Colorado Boulevard guest opinion, Oct. 28, 2026). The developer, HMC StratCap, withdrew its application in spring 2026 (LAist).',
      'Ngo has the support of the county Democratic Party, organized labor, the city’s police and fire associations and nearly every regional elected official; Kung is endorsed by LA Forward, the California Working Families Party and No Data Center Monterey Park. No independent poll or fundraising totals were found.',
    ],
    readingLinks: [
      { label: 'City of Monterey Park: 2026 General Election', url: CITY_ELECTION_URL, summary: 'Offices, measures, key dates and vote centers.' },
      { label: 'Certified candidates in ballot order (Aug. 28, 2026)', url: CANDIDATE_LIST_URL, summary: 'Official list with ballot designations.' },
      { label: 'LA County candidate statements', url: LA_STATEMENTS_URL, summary: 'Candidate statements as printed in the county voter guide.' },
      { label: 'LAist: developer pulls Monterey Park data center plan (Apr. 2, 2026)', url: LAIST_DATA_CENTER_URL, summary: 'Neutral account of the Saturn Park proposal, the moratorium and Measure NDC.' },
      { label: 'Colorado Boulevard guest opinion: who really stopped the data center (Oct. 28, 2026)', url: NDC_OPINION_URL, summary: 'Opinion by Kung and other No Data Center Monterey Park co-founders criticizing Ngo’s record; advocacy, not news.' },
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter residing in Council District 5 of the City of Monterey Park (Gov. Code § 34882; Elections Code § 201).',
    qualificationCriteria: COUNCIL_CRITERIA,
    candidates: [
      {
        id: 'steven-kung',
        name: 'Steven Kung',
        party: 'NP',
        role: 'Filmmaker/Community Organizer',
        campaignUrl: KUNG_SITE,
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Kung is a writer-director who moved to Monterey Park in 2022 and led a citywide ballot campaign in 2026. He has not held public office or served on a city commission.',
          criteria: [
            { criterionId: 'fiscal', assessment: 'not-met', evidence: 'No public budget role found.' },
            { criterionId: 'land', assessment: 'partial', evidence: 'Co-founded No Data Center Monterey Park, which organized against the Saturn Park data center through Council hearings (LA Forward; campaign site).' },
            { criterionId: 'services', assessment: 'unknown', evidence: 'No public-safety or city-services role found.' },
            { criterionId: 'governance', assessment: 'not-met', evidence: 'No elected, appointed board or commission service found.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Ran the Yes on Measure NDC ballot committee; the measure passed with about 88% of the vote in June 2026 (LA Forward).' },
          ],
        },
        bio: [
          'Kung is a writer-director who moved to Monterey Park with his husband in 2022 (campaign site). He became active in city politics when a developer proposed a roughly 250,000-square-foot hyperscale data center in the Saturn Park business park near his home, co-founded No Data Center Monterey Park, and ran the committee for Measure NDC, which voters approved in June 2026 (LA Forward; LAist).',
          'His platform calls for more housing and walkability, revitalizing commercial areas and downtown, reducing pollution and noise, making Saturn Park a neighborhood hub, transparency at City Hall, and opposition to ICE enforcement and Flock license-plate cameras (campaign site; LA Forward).',
        ],
        scorecard: [
          { topic: 'Data centers & land use', position: '✓✓ Led the citizen campaign for the Measure NDC ban', comparison: 'Ngo moved the ballot measure on the Council; Kung ran the campaign committee.' },
          { topic: 'Housing', position: '✓ Wants more housing and walkable neighborhoods; no stated position on Measure HOM', comparison: 'Ngo has no published HOM position either; the full Council placed HOM on the ballot.' },
          { topic: 'Public safety & surveillance', position: '✗ Opposes Flock license-plate cameras and ICE enforcement (LA Forward)', comparison: 'Ngo is endorsed by the police and fire associations and cites added police and fire staffing.' },
          { topic: 'Budget', position: NO_POS, comparison: 'Ngo cites three balanced budgets with surpluses.' },
          { topic: 'Transparency', position: '✓ Makes accountability and resident engagement a central theme', comparison: 'Criticizes how the data center reached Council agendas before residents knew of it.' },
        ],
        money: 'No fundraising totals appeared in the coverage reviewed (as of Nov. 3, 2026); filings are posted by the City Clerk.',
        endorsements:
          'LA Forward; California Working Families Party; No Data Center Monterey Park; Jane Fonda Climate PAC; La Comadre Network; SGVoices Communities for Change (LA Forward guide, Nov. 2026).',
        notes: [
          'Kung’s campaign and a guest opinion he co-wrote say Ngo “pushed for the data center”; this is an opponent’s characterization of Ngo’s votes, not an official finding. ' + NDC_OPINION_URL,
        ],
      },
      {
        id: 'vinh-ngo',
        name: 'Vinh T. Ngo',
        party: 'NP',
        role: 'Monterey Park City Councilmember',
        campaignUrl: NGO_SITE,
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Ngo has held this seat since 2022, served as mayor from December 2024 to September 2025, and earlier served five years on the Garvey School District board.',
          criteria: [
            { criterionId: 'fiscal', assessment: 'met', evidence: 'Has voted on city budgets since Dec. 2022 and cites three balanced budgets; career commercial real estate risk executive at Bank of America since 1996; USC degrees in accounting and real estate finance (campaign site).' },
            { criterionId: 'land', assessment: 'met', evidence: 'Council votes on Urgency Ordinance 2245 (June 2024), Ordinance 2253 (Nov. 2024), the 2026 data-center moratorium and Measures NDC and HOM.' },
            { criterionId: 'services', assessment: 'met', evidence: 'Council oversight of police and fire; cites expanded police and fire staffing and the city response to the January 2023 mass shooting (campaign site).' },
            { criterionId: 'governance', assessment: 'met', evidence: 'Mayor Dec. 2024 to Sept. 2025 (Colorado Boulevard); Garvey School District trustee 2017-2022, twice board president.' },
            { criterionId: 'community', assessment: 'met', evidence: 'President of the Garvey Education Foundation; chair emeritus of the Chinatown Service Center (campaign site).' },
          ],
        },
        recordVsChange:
          'Ngo cites three balanced budgets with surpluses, street resurfacing, added police and fire staffing, a faster permit process and moving Measure NDC to the ballot. The case for change rests on his handling of the data center before the 2026 moratorium, which critics say was too accommodating to the developer; keeping him preserves a former mayor’s experience and his support from public-safety unions and labor.',
        bio: [
          'Ngo grew up in Monterey Park and attended its public schools, then earned USC degrees in accounting and real estate finance. He has worked at Bank of America since 1996 and is a managing director and risk executive in commercial real estate banking (campaign site).',
          'He served on the Garvey School District board from 2017 to 2022, was elected to the Council in 2022, and was mayor from December 2024 to September 2025 (Colorado Boulevard). He says he authored Measure NDC and helped deliver balanced budgets, a One-Stop permit process, street resurfacing, more police and fire staffing, and new gun-safety ordinances after the January 2023 mass shooting.',
        ],
        scorecard: [
          { topic: 'Data centers & land use', position: '~ Voted for 2024 interim rules on Saturn Park and data centers; later moved the Measure NDC ban to the ballot', comparison: 'Kung led the citizen campaign and argues the 2024 votes kept the project alive.' },
          { topic: 'Budget', position: '✓✓ Cites three balanced budgets with more than $6.6 million in combined surpluses; signed the ballot argument for Measure AAA', comparison: 'Kung has not published a budget plan.' },
          { topic: 'Public safety', position: '✓✓ Endorsed by the police and fire associations; cites added staffing and gun-violence restraining-order policies', comparison: 'Kung opposes Flock cameras and ICE enforcement.' },
          { topic: 'Housing', position: NO_POS, comparison: 'The full Council placed Measure HOM on the ballot; no individual position found for either candidate.' },
          { topic: 'Business & permits', position: '✓ Championed a One-Stop Building Permit process', comparison: 'Kung backs revitalizing commercial areas and downtown.' },
        ],
        money: 'No fundraising totals appeared in the coverage reviewed (as of Nov. 3, 2026); filings are posted by the City Clerk.',
        endorsements:
          'Los Angeles County Democratic Party; LA County Federation of Labor; SEIU 721; SEIU 121RN; Monterey Park Police Officers Association; Monterey Park Fire Fighters Association; Los Angeles League of Conservation Voters; BizFed PAC; Rep. Judy Chu; Asm. Mike Fong; State Sens. Sasha Perez and María Elena Durazo; Supervisor Hilda Solis; Mayor Henry Lo and the other three Monterey Park councilmembers (campaign endorsement page, as of Nov. 3, 2026).',
        notes: [
          'Critics, including Kung, say Ngo was initially defensive about the data center and that the 2024 ordinances he supported matched the developer’s plans; Ngo is listed among the official supporters of Measure NDC. These are disputed political claims, not findings. ' + NDC_OPINION_URL,
          'Mayoral installation, Dec. 10, 2024: ' + NGO_MAYOR_URL,
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Kung', '●', 'Leftward Progressives favor the outsider who led a grassroots fight against a corporate data center and opposes Flock cameras and ICE enforcement, over a banker incumbent backed by business and police groups.'],
      ['LL', 'Ngo', '●', 'Loyal Liberals value experienced, institution-minded governing, and Ngo, a former mayor and school board president with budget experience, offers it (the county Democratic Party and labor also back him).'],
      [
        'LO',
        'Kung',
        '◐',
        'Left-Out Left voters, three-quarters of whom say few officials run to serve the public, are drawn to the resident organizer who says City Hall let the data center advance until neighbors forced a ban.',
        'An experience-first Left-Out Left voter could back Ngo, a former mayor and school board president who has voted on city budgets since 2022, giving up Kung’s outsider push for more accountability over the data-center process.',
      ],
      ['OO', 'Ngo', '●', 'Order and Opportunity Left voters want steady, mainstream leadership and public safety, and Ngo has the police and fire associations’ endorsements and a record of added staffing, while Kung opposes Flock cameras.'],
      ['TM', 'Ngo', '○', 'Tuned-Out Middle voters look for concrete services and plain trustworthiness; Ngo points to balanced budgets and street repairs, though the data-center dispute gives some reason for doubt.'],
      ['PP', 'Ngo', '●', 'Pragmatic and Polite Right voters reward experience, fiscal prudence and support from police, and Ngo, a former mayor and bank risk executive, offers all three.'],
      ['UR', 'Ngo', '◐', 'Unconventional Right voters prioritize crime and enforcement and oppose Kung’s stance against Flock cameras and ICE, though they are cool to an establishment Democrat.'],
      ['FC', 'Ngo', '◐', 'Faith First Conservatives value law and order and family-centered civic service such as Ngo’s school board work, and Kung’s platform runs to their left on policing and immigration.'],
      ['NA', 'Ngo', '○', 'No Apologies Right voters dislike both Democrats’ coalitions but reject Kung’s opposition to ICE enforcement and license-plate cameras more strongly than Ngo’s labor-backed record.'],
    ]),
    counterArguments: [
      'LL (Ngo ●): But consider Kung, because voters approved the data-center ban with about 88% after residents, not the Council, led the campaign, and he would bring that accountability push inside City Hall.',
      'LP (Kung ●): But consider Ngo, because he moved Measure NDC onto the ballot and brings budget experience Kung lacks.',
      'PP (Ngo ●): But consider Kung if you weigh the critics’ account that Ngo’s 2024 votes kept the data center alive, though that account comes from Kung’s own campaign.',
    ],
  },
  {
    id: 'monterey-park-city-clerk',
    categoryId: 'city',
    title: 'Monterey Park City Clerk',
    tldrLabel: 'Monterey Park City Clerk',
    seatContext: 'Open seat, unopposed',
    kind: 'candidates',
    stakesParagraphs: [
      'The elected City Clerk keeps Monterey Park’s official records, Council agendas and minutes, runs municipal elections with the county, and collects campaign-finance and conflict-of-interest filings.',
      'Dora Leung is the only name on the ballot, so the outcome is not in doubt. Incumbent Maychelle Yee, elected in 2022, did not file. Voters can leave the line blank or write someone in.',
    ],
    introParagraphs: [
      'Leung is unopposed for a four-year term ending in November 2030 (City Clerk certified candidate list, Aug. 28, 2026; LA County candidate feed).',
    ],
    readingLinks: [{ label: 'Certified candidates in ballot order (Aug. 28, 2026)', url: CANDIDATE_LIST_URL, summary: 'Official list with ballot designations.' }],
    legalRequirements: 'Registered voter residing in the City of Monterey Park.',
    qualificationCriteria: [
      { id: 'records', label: 'Public records and meeting administration', detail: 'The Clerk keeps Council minutes, ordinances and public records.' },
      { id: 'elections', label: 'Election administration', detail: 'The Clerk runs the city’s municipal elections and candidate filings.' },
      { id: 'disclosure', label: 'Campaign and ethics filings', detail: 'The Clerk collects campaign-finance and economic-interest disclosures.' },
    ],
    candidates: [
      {
        id: 'dora-leung',
        name: 'Dora Leung',
        party: 'NP',
        role: 'Mother/Realtor/Entrepreneur',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Leung’s ballot designation is Mother/Realtor/Entrepreneur. No records, elections or public-office experience was found.',
          criteria: [
            { criterionId: 'records', assessment: 'unknown', evidence: 'No public records or clerk role found.' },
            { criterionId: 'elections', assessment: 'unknown', evidence: 'No election administration role found.' },
            { criterionId: 'disclosure', assessment: 'unknown', evidence: 'No disclosure-filing role found.' },
          ],
        },
        bio: ['Leung’s ballot designation is Mother/Realtor/Entrepreneur. No campaign site, public priorities or news coverage were found for this uncontested race.'],
        scorecard: [
          { topic: 'Records & transparency', position: NO_POS },
          { topic: 'Election administration', position: NO_POS },
        ],
        money: 'Unopposed; no fundraising totals reported.',
        endorsements: 'None found.',
      },
    ],
    crossTypology: unopposedRows('Leung', 'City Clerk'),
    counterArguments: ['Unopposed: voters who want a different clerk can leave the line blank or write someone in, but Leung will be elected.'],
  },
  {
    id: 'monterey-park-city-treasurer',
    categoryId: 'city',
    title: 'Monterey Park City Treasurer',
    tldrLabel: 'Monterey Park City Treasurer',
    seatContext: 'Incumbent, unopposed',
    kind: 'candidates',
    stakesParagraphs: [
      'The elected City Treasurer oversees the investment and safekeeping of Monterey Park’s cash under the city’s investment policy and reports on it to the Council.',
      'Amy Lee is the only name on the ballot, so the outcome is not in doubt. Voters can leave the line blank or write someone in.',
    ],
    introParagraphs: [
      'Lee won the office in 2022 and is unopposed for a term ending in November 2030 (City Clerk certified candidate list; LA County candidate feed).',
    ],
    readingLinks: [{ label: 'Certified candidates in ballot order (Aug. 28, 2026)', url: CANDIDATE_LIST_URL, summary: 'Official list with ballot designations.' }],
    legalRequirements: 'Registered voter residing in the City of Monterey Park.',
    qualificationCriteria: [
      { id: 'investments', label: 'Public investment management', detail: 'The Treasurer invests city funds under a written policy.' },
      { id: 'cash', label: 'Cash management and banking', detail: 'The Treasurer oversees deposits and custody of city funds.' },
      { id: 'reporting', label: 'Reporting and transparency', detail: 'The Treasurer reports on the city’s investments to the Council.' },
    ],
    candidates: [
      {
        id: 'amy-lee',
        name: 'Amy Lee',
        party: 'NP',
        role: 'City Treasurer/Attorney',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Lee is the sitting City Treasurer, elected in 2022, and an attorney.',
          criteria: [
            { criterionId: 'investments', assessment: 'met', evidence: 'Serving as Monterey Park City Treasurer since Dec. 2022.' },
            { criterionId: 'cash', assessment: 'met', evidence: 'Serving as Monterey Park City Treasurer since Dec. 2022.' },
            { criterionId: 'reporting', assessment: 'unknown', evidence: 'No public treasurer’s reports were reviewed.' },
          ],
        },
        bio: ['Lee is the incumbent City Treasurer and an attorney; in 2022 she ran as Mother/Attorney/Businesswoman. She endorsed Councilmember Ngo this year. No campaign site or stated priorities were found for this uncontested race.'],
        scorecard: [
          { topic: 'Investment policy', position: NO_POS },
          { topic: 'Transparency', position: NO_POS },
        ],
        money: 'Unopposed; no fundraising totals reported.',
        endorsements: 'None found.',
      },
    ],
    crossTypology: unopposedRows('Lee', 'City Treasurer'),
    counterArguments: ['Unopposed: voters who want a different treasurer can leave the line blank or write someone in, but the incumbent will be elected.'],
  },
  {
    id: 'monterey-park-measure-hom',
    categoryId: 'local-measures',
    title: 'Monterey Park Measure HOM — Housing overlays in commercial and industrial areas',
    tldrLabel: 'Monterey Park Measure HOM — Housing overlays',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Since 1982, any change to Monterey Park’s Land Use Element, the core of its General Plan, needs a citywide vote; Measure JJ (2020) is the current version. Measure HOM asks voters to add a Housing Overlay Mixed Environments (HOME) designation that would let apartments, townhomes, condos and mixed-use housing be built in identified commercial and industrial areas, such as the high-vacancy Saturn Park business park.',
      'It approves no project and no zoning by itself. The Council would first adopt implementing zoning; then each property owner would apply, and the Council would decide parcel by parcel at a public hearing. R-1 and R-2 neighborhoods are excluded, and the June data-center ban stays in place.',
    ],
    introParagraphs: [
      'The Council placed HOM on the ballot in August 2026 after its “Vacant to Vibrant” outreach on empty commercial and industrial space, and wrote the argument in favor. No argument against was found. LA Forward recommends Yes; no organized opposition was found. The ballot question’s wording (“keep residential neighborhoods intact,” “prevent crime/homeless encampments”) was written by the city and is promotional; the impartial analysis is the plainer description.',
    ],
    measure: {
      question:
        'Shall a measure amending the Monterey Park Land Use Element to keep residential neighborhoods intact through maintaining voter-approved land use restrictions and Monterey Park’s local control over the state for housing decisions, continue prohibiting data centers, provide housing for residents, prevent crime/homeless encampments, attract businesses, and improve the local economy by allowing limited residential uses in underutilized industrial, commercial/office areas, requiring public input, ensuring environmental protections, protecting public safety, parks/open space, be adopted?',
      yesMeans: 'Creates the HOME housing designation for identified commercial and industrial areas and lets the Council adopt zoning so owners can apply, parcel by parcel, to build housing there.',
      noMeans: 'Keeps the current Land Use Element and map, so housing stays off the table in those commercial and industrial areas unless voters approve another amendment.',
      funding: {
        asOf: 'Nov. 3, 2026',
        note: 'No campaign committee for or against Measure HOM, or any fundraising totals, appeared in the coverage reviewed.',
        sources: [{ label: 'City of Monterey Park: 2026 General Election (campaign filings)', url: CITY_ELECTION_URL }],
      },
      positions: [],
      measureType: 'General Plan amendment (Council-placed)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'The impartial analysis gives no cost estimate; the measure itself approves no development. Any fiscal effects would follow from later zoning and individual projects.',
      supporters: 'Monterey Park City Council (argument in favor).',
      opponents: 'None filed or found.',
      voterConnection: [
        'Nothing changes on your street if you live in an R-1 or R-2 neighborhood: those zones are excluded.',
        'If you rent or hope to buy, it opens a path for new apartments, townhomes and condos on vacant or underused commercial and industrial land.',
        'Every overlay still needs Council approval at a public hearing, so neighbors keep a say on each site.',
        'It keeps the citywide data-center ban voters approved in June.',
      ],
      mechanismBullets: [
        'Amends the Land Use and Urban Design Element to create the Housing Overlay Mixed Environments (HOME) designation and ratifies matching Land Use Policy Map changes (Resolution 2026-R63).',
        'Allows multifamily, townhome, condominium and mixed-use housing only in commercial and industrial areas shown on the Land Use Policy Map; not available in R-1 or R-2 zones.',
        'The Council must adopt implementing zoning before any application is accepted.',
        'Each property needs Council approval at a public hearing to activate the overlay, plus all other required approvals and environmental review.',
        'Leaves the Measure NDC data-center prohibition in place.',
      ],
      argumentsFor: [
        'It lets the city put housing on vacant and underused commercial and industrial land without touching single-family neighborhoods.',
        'The Council keeps parcel-by-parcel control, so no project is approved automatically.',
        'It responds to residents’ requests in the Vacant to Vibrant outreach for housing that serves families and young adults.',
        'It offers a productive use for business parks like Saturn Park, where a data center was rejected.',
      ],
      argumentsAgainst: [
        'The measure does not cap density or unit counts, so the scale of future projects is left to later Council zoning.',
        'It shifts land-use decisions from citywide votes to the Council for these areas, loosening the voter control Measure JJ provides.',
        'Housing near industrial uses can raise air-quality and traffic concerns that depend on later environmental review.',
        'The ballot question’s promotional wording (crime, encampments, “local control over the state”) goes beyond what the impartial analysis says the measure does.',
      ],
      readingLinks: [
        { label: 'City Attorney’s impartial analysis', url: HOM_ANALYSIS_URL, summary: 'Plain description of what a Yes and a No vote do.' },
        { label: 'City Council argument in favor', url: HOM_ARGUMENT_URL, summary: 'The Council’s case; no argument against was filed.' },
        { label: 'Resolution 2026-R63 (measure text)', url: HOM_RESOLUTION_URL, summary: 'Full text and map amendments.' },
        { label: 'City HOM measure page and overlay maps', url: HOM_PAGE_URL, summary: 'FAQ, Vacant to Vibrant reports and overlay maps.' },
        { label: 'Colorado Boulevard: voters to decide on HOME housing overlay (Sept. 1, 2026)', url: HOM_NEWS_URL, summary: 'News summary of the measure and why a vote is required.' },
        { label: 'LA County measures list (rev. Aug. 14, 2026)', url: RRCC_MEASURES_URL, summary: 'Official ballot label and vote threshold.' },
        { label: 'LA Forward voter guide: Monterey Park', url: LA_FORWARD_URL, summary: 'Progressive endorser list (Yes on HOM).' },
      ],
      explainerUrl: HOM_NEWS_URL,
    },
    crossTypology: ct([
      ['LP', 'Yes', '●', 'Leftward Progressives want more housing and tenant opportunity, and opening vacant commercial and industrial land to apartments and condos does that without displacing current residents.'],
      ['LL', 'Yes', '●', 'Loyal Liberals back expert-driven housing policy and incremental reform through institutions, and this measure keeps the Council and public hearings in charge of every site.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters, who feel the cost-of-living squeeze most, gain from more homes, though they may doubt the Council will hold developers to account on each site.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters value homeownership and reducing blight, and townhomes and condos on vacant lots offer both while single-family zones stay untouched.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters care most about costs, and more housing supply is a modest, slow-acting help that costs them nothing directly.'],
      ['PP', 'Yes', '◐', 'Pragmatic and Polite Right voters prefer cautious, incremental change, and this one excludes R-1 and R-2 areas and requires a Council hearing for every parcel.'],
      ['UR', 'Yes', '○', 'Unconventional Right voters favor letting property owners put empty land to use, though some distrust state housing pressure behind measures like this.'],
      ['FC', 'No', '○', 'Faith First Conservatives tend to protect existing neighborhood character and limited government, and they may see denser housing near their neighborhoods as an unwelcome change.'],
      ['NA', 'No', '○', 'No Apologies Right voters distrust state housing mandates and the city’s promotional ballot wording, though the measure’s deregulation of land use cuts the other way.'],
    ]),
    hinges: {
      LP: 'Yes if more homes of every type on vacant commercial land are worth backing even without set affordability requirements. No if you want binding affordable-housing guarantees written in before land is opened up.',
      LL: 'Yes if you trust the Council’s parcel-by-parcel review and the Vacant to Vibrant process. No if you think land-use changes of this kind should stay with citywide votes.',
      LO: 'Yes if more housing supply is the practical help working families need. No if you expect developers, not residents, to be the main winners.',
      OO: 'Yes if homeownership options and reviving empty lots matter most. No if you worry about traffic, parking and crowding near your neighborhood.',
      TM: 'Yes if anything that could ease rents and home prices is worth a try. No if you don’t see it changing your costs anytime soon.',
      PP: 'Yes if a cautious framework with public hearings for each site is the prudent fix. No if you want unit caps and density limits spelled out before approving it.',
      UR: 'Yes if property owners should be free to put vacant commercial land to use. No if you see it as bending to Sacramento’s housing pressure.',
      FC: 'Yes if new family housing that leaves single-family zones untouched fits your priorities. No if you want to keep the current land-use plan and neighborhood character as they are.',
      NA: 'Yes if loosening land-use rules for private owners outweighs your distrust of state housing mandates. No if you reject measures driven by state housing pressure and the city’s promotional ballot wording.',
    },
    counterArguments: [
      'LP (Yes ●): But consider No if you want affordability requirements locked in first, since the measure sets none and leaves the details to later Council zoning.',
      'FC (No ○): But consider Yes, because R-1 and R-2 neighborhoods are excluded and every site still needs a Council hearing.',
    ],
  },
  {
    id: 'monterey-park-measure-aaa',
    categoryId: 'local-measures',
    title: 'Monterey Park Measure AAA — Hotel and short-term rental tax increase',
    tldrLabel: 'Monterey Park Measure AAA — Hotel tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure AAA raises the transient occupancy tax that hotel and motel guests pay on stays of 30 days or less from 13% to 14%, and the rate for short-term rental guests from 13% to 16%. The city estimates about $600,000 a year in new general-fund money on top of the roughly $4.5 million the current tax is projected to raise in 2026-27, with no end date unless voters repeal it.',
      'Because the money goes to the general fund, the Council can spend it on any city purpose; the ballot label lists police, fire, 911 response, street repair and property-crime prevention. It needs a simple majority.',
    ],
    introParagraphs: [
      'The Council placed AAA on the ballot by Resolution 2026-R57, and all five members signed the argument in favor. No argument against was filed. LA Forward recommends Yes; no organized opposition was found.',
    ],
    measure: {
      question:
        'Shall the ordinance maintaining City of Monterey Park’s services like fire, police, 911 response; keeping public areas safe/clean; helping prevent property crimes/human trafficking in Monterey Park; repairing streets/potholes; for other city services; by increasing the transient occupancy tax paid only by hotel/motel guests from 13% to 14%, and short-term rental guests, from 13% to 16%, providing approximately $600,000 annually until ended by voters; requiring audits, spending disclosure, local control over all funds, be adopted?',
      yesMeans: 'Raises the tax on hotel and motel stays from 13% to 14% and on short-term rental stays from 13% to 16%, adding about $600,000 a year for general city services.',
      noMeans: 'Keeps the 13% rate for hotel, motel and short-term rental stays.',
      funding: {
        asOf: 'Nov. 3, 2026',
        note: 'No campaign committee for or against Measure AAA, or any fundraising totals, appeared in the coverage reviewed.',
        sources: [{ label: 'City of Monterey Park: 2026 General Election (campaign filings)', url: CITY_ELECTION_URL }],
      },
      positions: [],
      measureType: 'Ordinance (general tax, Council-placed)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'The City Attorney’s analysis says the current 13% tax is estimated to raise $4.5 million in fiscal 2026-27 and the increase about $600,000 a year more, usable for any general governmental purpose.',
      supporters: 'Mayor Henry Lo, Mayor Pro Tem Jose Sanchez, Councilmembers Thomas Wong, Vinh Ngo and Elizabeth Yang.',
      opponents: 'None filed or found.',
      voterConnection: [
        'Residents pay nothing unless they stay in a Monterey Park hotel, motel or short-term rental.',
        'Residents who rent out rooms or homes short term would see their guests’ tax rise to 16%, which could affect bookings.',
        'The roughly $600,000 a year is about a 13% increase in hotel-tax revenue and goes to the general fund, not a locked account.',
        'The ballot label promises audits and spending disclosure, but the Council decides how the money is spent each year.',
      ],
      mechanismBullets: [
        'Hotel and motel transient occupancy tax: 13% to 14%.',
        'Short-term rental transient occupancy tax: 13% to 16%.',
        'Applies to stays of 30 days or less; collected by operators from guests.',
        'Estimated $600,000 a year; general tax, any city purpose.',
        'No sunset: continues until ended by voters.',
      ],
      argumentsFor: [
        'Visitors, not residents or businesses, pay it.',
        'It funds police, fire, 911, street repair and other services without a resident tax.',
        'The Council says the 14% rate aligns Monterey Park with other LA County cities.',
        'It includes audits and public disclosure of spending.',
      ],
      argumentsAgainst: [
        'Because it is a general tax, nothing requires the money to go to the services listed on the ballot.',
        'A 16% rate on short-term rentals could push guests to neighboring cities and hurts residents who host.',
        'Higher hotel taxes can make local hotels less competitive with nearby cities.',
        'It has no expiration date.',
      ],
      readingLinks: [
        { label: 'City Attorney’s impartial analysis', url: AAA_ANALYSIS_URL, summary: 'Current revenue, the increase and what Yes and No mean.' },
        { label: 'City Council argument in favor', url: AAA_ARGUMENT_URL, summary: 'Signed by all five councilmembers; no argument against was filed.' },
        { label: 'Resolution 2026-R57', url: AAA_RESOLUTION_URL, summary: 'Council action placing the tax on the ballot.' },
        { label: 'City Measure AAA page', url: AAA_PAGE_URL, summary: 'City information page.' },
        { label: 'LA County measures list (rev. Aug. 14, 2026)', url: RRCC_MEASURES_URL, summary: 'Official ballot label and vote threshold.' },
        { label: 'LA Forward voter guide: Monterey Park', url: LA_FORWARD_URL, summary: 'Progressive endorser list (Yes on AAA).' },
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes', '●', 'Leftward Progressives support raising public revenue for services, and a tax paid by visitors rather than working residents fits that well.'],
      ['LL', 'Yes', '●', 'Loyal Liberals accept taxes for services and follow the unanimous Council’s recommendation, backed by audits and disclosure.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters like a tax that falls on visitors rather than residents, though their distrust of officials makes a general fund with no spending lock a real concern.'],
      ['OO', 'Yes', '●', 'Order and Opportunity Left voters want police, fire and 911 response well funded, and this pays for them without taxing residents.'],
      ['TM', 'Yes', '◐', 'Tuned-Out Middle voters are wary of taxes that hit them, but this one is paid only by hotel and short-term rental guests while funding services they use.'],
      ['PP', 'Yes', '◐', 'Pragmatic and Polite Right voters accept modest, targeted revenue with audits, and a one-point hotel tax increase paid by visitors is a cautious step.'],
      ['UR', 'Yes / No', '=', 'Unconventional Right voters weigh public-safety funding paid by outsiders against their preference for lower taxes and smaller government: if police and fire funding matters most, Yes; if any open-ended tax increase is too much, No.'],
      ['FC', 'No', '○', 'Faith First Conservatives generally oppose new taxes and want smaller government, though this tax falls on visitors and is aimed at public safety.'],
      ['NA', 'No', '◐', 'No Apologies Right voters oppose nearly all new taxes, and a permanent general tax with no spending lock and a steep short-term rental rate is no exception.'],
    ]),
    hinges: {
      LP: 'Yes if raising revenue from visitors to fund city services is the right approach. No if a general tax without any spending lock is not worth backing.',
      LL: 'Yes if you trust the Council’s budget process and the promised audits. No if you would rather see a dedicated tax tied to specific services.',
      LO: 'Yes if making visitors pay more for city services is fair. No if you don’t trust the Council to spend a general tax the way the ballot label says.',
      OO: 'Yes if more money for police, fire and 911 response matters most. No if the higher short-term rental rate would hurt residents who host guests.',
      TM: 'Yes if city services funded by out-of-town guests are a good deal for you. No if you or your family rent out a room or home short term.',
      PP: 'Yes if a modest, audited increase paid by visitors is prudent. No if a permanent tax with no sunset is a step too far.',
      UR: 'Yes if public-safety funding paid by outsiders outweighs your dislike of taxes. No if any open-ended tax increase is too much.',
      FC: 'Yes if funding police and fire without taxing residents fits your priorities. No if you oppose growing government revenue even when visitors pay.',
      NA: 'Yes if making visitors rather than residents pay is acceptable to you. No if you oppose new taxes on principle and want the city to cut spending instead.',
    },
    counterArguments: [
      'NA (No ◐): But consider Yes, because residents pay nothing unless they stay in a local hotel or short-term rental, and the money funds police and fire among other services.',
      'LO (Yes ◐): But consider No if you want a dedicated tax, since nothing locks this general-fund money to the services named on the ballot.',
    ],
  },
];
