import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * San Diego County Board of Supervisors, County Board of Education, community college and school board seats,
 * and City of San Diego Council contests (Wave 2 ZIPs: 92009, 92026, 92111, 92130, 92139; County Board of Education
 * District 3 added Oct 9, 2026 for 92116).
 * All nonpartisan offices. Research current as of Oct 7, 2026. Money and endorsement dates are stated in-line.
 */

const SUPERVISOR_CRITERIA = [
  { id: 'governance', label: 'Policy and governance experience', detail: 'Supervisors act as both legislature and executive board for a county of more than three million people.' },
  { id: 'budget', label: 'Large-budget oversight', detail: 'The Board adopts a county budget in the billions, including health, social services, public safety and land use.' },
  { id: 'land-use', label: 'Land use and public-safety systems', detail: 'The Board decides unincorporated-area land use and funds the Sheriff, jails and probation.' },
  { id: 'constituent', label: 'Constituent service and district knowledge', detail: 'Each supervisor represents hundreds of thousands of residents and handles district-level requests.' },
];

const COUNCIL_CRITERIA = [
  { id: 'governance', label: 'Municipal policy and governance', detail: 'Councilmembers pass city laws, oversee departments and sit on regional boards.' },
  { id: 'land-budget', label: 'Land use and budget', detail: 'The Council adopts the city budget, fees, and zoning and community plans.' },
  { id: 'constituent', label: 'Constituent services and district knowledge', detail: 'The office handles resident requests and represents neighborhoods in its district.' },
  { id: 'coalition', label: 'Coalition-building', detail: 'Passing items takes votes from at least five of nine members and work with the mayor and regional agencies.' },
];

const COLLEGE_CRITERIA = [
  { id: 'governance', label: 'Board governance experience', detail: 'Trustees set policy and hire and evaluate the chancellor for a multi-college district.' },
  { id: 'budget', label: 'Budget and bond oversight', detail: 'The board approves the district budget and oversees construction bonds.' },
  { id: 'education', label: 'Knowledge of higher education', detail: 'Trustees weigh faculty, student-success and workforce-training decisions.' },
  { id: 'community', label: 'Community knowledge of the trustee area', detail: 'Trustees are elected from one geographic area of San Diego.' },
];

export const RACES_SD_COUNTY_CITY: Race[] = [
  {
    id: 'sd-supervisor-d4',
    categoryId: 'county',
    title: 'County Supervisor, District 4',
    tldrLabel: 'County Supervisor D4',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Board of Supervisors is both the legislature and the executive board of San Diego County. It sets a budget in the billions of dollars and controls health and social services, the Sheriff and jail funding, and land use in the unincorporated areas. District 4 covers parts of the City of San Diego and nearby communities, including Linda Vista and Paradise Hills.',
      'The Board currently has a 3-2 Democratic majority (Aguirre, Lawson-Remer, Montgomery Steppe versus Anderson and Desmond). District 4 gave the Democrat about 62% in the 2023 special election, so this contest is more about the kind of supervisor the district gets than about control of the Board. The seat is also on the ballot with County Measures A and B, on which the two candidates disagree.',
    ],
    introParagraphs: [
      'Monica Montgomery Steppe has held the seat since December 2023, when she won a special election with about 62% of the vote over Republican Amy Reichert. Kristine Alessio, a land-use attorney and former La Mesa councilmember, is the Republican Party of San Diego County’s endorsed candidate. The office is nonpartisan on the ballot, but both candidates’ party ties shape the contest (KPBS, Sept. 30, 2026).',
    ],
    legalRequirements: 'Registered voter of the county and resident of the supervisorial district at the time of filing.',
    qualificationCriteria: SUPERVISOR_CRITERIA,
    readingLinks: [
      { label: 'KPBS: Board of Supervisors race explainer', url: 'https://www.kpbs.org/news/politics/2026/04/22/meet-the-candidates-for-board-of-supervisors-district-5-2026-primary-election-san-diego-county-race-explainer', summary: 'Candidate positions, endorsements and money for Districts 4 and 5.' },
      { label: 'KPBS: General election endorsement guide (Sept. 30, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian', summary: 'Party endorsements for local seats.' },
    ],
    candidates: [
      {
        id: 'monica-montgomery-steppe',
        photoSlug: 'monica-montgomery-steppe',
        name: 'Monica Montgomery Steppe',
        party: 'NP',
        role: 'San Diego County Supervisor',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Montgomery Steppe has held this seat since December 2023 and previously served on the San Diego City Council from 2018 to 2023, including as Council President Pro Tem.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'County Supervisor since Dec 5, 2023 and Board Vice Chair since July 2025; City Councilmember 2018-2023 (Wikipedia).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Votes on the county budget as a supervisor; voted to use county reserves to cover costs tied to federal cuts (KPBS, Sept. 2026).' },
            { criterionId: 'land-use', assessment: 'met', evidence: 'Has voted on county land-use and public-safety items since 2023; earlier an ACLU criminal-justice advocate; specific committee assignments are not publicly documented.' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Represented City Council District 4 for five years before moving to the Board; her county website cites $200 million directed to affordable housing in the district.' },
          ],
        },
        bio: [
          'Montgomery Steppe is a Democrat, born in San Diego in 1978, with a degree from Spelman College and a law degree from California Western School of Law. She worked as a criminal-justice advocate for the ACLU of San Diego & Imperial Counties before winning the City Council seat in 2018 by defeating the incumbent, and was re-elected in 2022 (Wikipedia).',
          'She joined the Board of Supervisors in December 2023 and has been Vice Chair since July 2025. Her campaign website lists affordability, housing and homelessness, and public health and safety as priorities.',
        ],
        recordVsChange:
          'She has held the seat for under three years and has helped the Board’s Democratic majority pass its agenda, including placing Measure A on the ballot; the case for change is the challenger’s argument that the county should avoid new taxes and stop drawing on reserves.',
        scorecard: [
          { topic: 'Housing & homelessness', position: '✓✓ Says she directed $200 million to affordable housing in the district (her campaign website)', comparison: 'Alessio opposes higher-density housing.' },
          { topic: 'County budget', position: '✓ Voted to use county reserves to cover costs tied to federal cuts; says the county is “mandated to take care of our most vulnerable communities” (KPBS)', comparison: 'Alessio opposes using reserves, including for employee bonuses.' },
          { topic: 'Taxes (Measure B)', position: '✓ Supports County Measure B, the half-cent sales tax', comparison: 'Alessio opposes Measure B.' },
          { topic: 'Transparency / charter (Measure A)', position: '~ Voted in May 2026 to place the charter package on the ballot; supports it despite its term-limit extension', comparison: 'Alessio opposes Measure A, citing no sunset provision.' },
          { topic: 'Public safety', position: '✓ Background in criminal-justice reform; her website says she prioritizes transparency in public safety', comparison: 'Alessio lists public safety as a priority without verified specifics.' },
        ],
        money: 'Holds a significant fundraising advantage over Alessio as of Sept. 23, 2026; top donor is the county Democratic Party; no independent expenditures reported for either candidate as of that date (KPBS).',
        endorsements: 'San Diego County Democratic Party; California Federation of Labor Unions; San Diego & Imperial Counties Labor Council; Working Families Party; Planned Parenthood Action Fund of the Southwest (KPBS; Doug Porter).',
      },
      {
        id: 'kristine-alessio',
        name: 'Kristine C. Alessio',
        party: 'NP',
        role: 'Attorney',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Alessio is a land-use attorney who served on the La Mesa City Council starting in 2012 and earlier on its Planning Commission; she has not held county office.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'La Mesa City Council member beginning in 2012 (East County Magazine); term end dates are not publicly documented.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Voted on a city budget as a councilmember; no county-scale budget role.' },
            { criterionId: 'land-use', assessment: 'met', evidence: 'Land-use attorney and former La Mesa planning commissioner.' },
            { criterionId: 'constituent', assessment: 'partial', evidence: 'Born and raised in La Mesa; ran unsuccessfully for La Mesa mayor in 2022. District 4 includes parts of the City of San Diego beyond her home city.' },
          ],
        },
        bio: [
          'Alessio is a Republican, an attorney who specializes in land use, and a former La Mesa city councilmember who earlier served on the La Mesa Planning Commission. She ran unsuccessfully for La Mesa mayor in 2022 (East County Magazine).',
          'Her campaign stresses affordability, opposition to new taxes, accountability for the January 2024 floods, and opposition to higher-density housing (KPBS).',
        ],
        scorecard: [
          { topic: 'Taxes (Measure B)', position: '✗ Opposes Measure B and new taxes generally; her campaign says “We can do something - together we say NO to more taxes.”', comparison: 'Montgomery Steppe supports Measure B.' },
          { topic: 'Charter / term limits (Measure A)', position: '✗ Opposes Measure A, saying it has no sunset provision', comparison: 'Montgomery Steppe supports it.' },
          { topic: 'Housing', position: '✗ Opposes higher-density housing', comparison: 'Montgomery Steppe backs affordable-housing funding.' },
          { topic: 'County budget', position: '✓ Opposes the Board’s use of reserve funds, including for employee bonuses', comparison: 'Montgomery Steppe voted to use reserves for federal-cut costs.' },
          { topic: 'Flood accountability', position: '✓ Calls for accountability for the January 2024 floods', comparison: 'Montgomery Steppe did not respond to KPBS on this topic.' },
        ],
        money: 'Trails the incumbent by a wide margin as of Sept. 23, 2026; nearly half of her fundraising is a $4,000 party donation (KPBS).',
        endorsements: 'Republican Party of San Diego County; Lincoln Club Business League; San Diego Union-Tribune editorial board (opinion).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Montgomery Steppe', '●', 'Leftward Progressives want an expansive safety net and public investment in housing, and Montgomery Steppe, a former ACLU criminal-justice advocate, backs affordable-housing money and using reserves to protect vulnerable residents, while Alessio opposes new revenue and density.'],
      ['LL', 'Montgomery Steppe', '●', 'Loyal Liberals value experienced, institution-minded governance, and Montgomery Steppe brings five years on the City Council and nearly three on the Board, with labor and Democratic Party backing.'],
      ['LO', 'Montgomery Steppe', '◐', 'Left-Out Left voters want cost-of-living help and the county’s safety net protected, which favors Montgomery Steppe, though Montgomery Steppe’s support for Measure A’s longer supervisor terms looks like the self-serving insider politics they distrust.'],
      ['OO', 'Montgomery Steppe', '◐', 'Order and Opportunity Left voters want affordable housing and steady services, which Montgomery Steppe has funded, though Alessio’s focus on flood accountability and Montgomery Steppe’s reform-first public-safety background make this a trade-off for a group that values order.'],
      ['TM', 'Montgomery Steppe / Alessio', '=', 'Tuned-Out Middle voters weigh direct help against a new tax: if keeping services running after federal cuts, as Montgomery Steppe did by using reserves, matters most, Montgomery Steppe; if avoiding the sales tax Montgomery Steppe supports matters more, Alessio, who runs on no new taxes.'],
      ['PP', 'Alessio', '◐', 'Pragmatic and Polite Right voters prize fiscal prudence and dislike officials changing rules to benefit themselves, so Alessio, a former La Mesa councilmember who opposes drawing down reserves and extending supervisors’ terms, is a reasonable fit, though Montgomery Steppe is the more experienced county official.'],
      ['UR', 'Alessio', '◐', 'Unconventional Right voters favor lower taxes and smaller government, which Alessio’s opposition to Measure B and to reserve spending offers, though the Unconventional Right’s lukewarm party loyalty and Alessio’s low profile keep the lean moderate.'],
      ['FC', 'Alessio', '●', 'Faith First Conservatives want limited government and low taxes, and Alessio opposes the sales tax and reserve spending, while Montgomery Steppe is backed by Planned Parenthood, at odds with their views on abortion.'],
      ['NA', 'Alessio', '●', 'No Apologies Right voters oppose nearly all new taxes and bigger government, and Alessio’s campaign is built on saying no to Measure B and to the Board majority’s spending.'],
    ]),
    counterArguments: [
      'FC/NA (Alessio ●): But consider that the district gave the Democrat about 62% in 2023 and Alessio trails badly in money, because a vote for Alessio here is more likely a protest than a change in who holds the seat.',
      'LP/LL (Montgomery Steppe ●): But consider Montgomery Steppe’s vote to put Measure A on the ballot, because it would let supervisors serve a third term and critics across the spectrum call that self-serving.',
      'PP (Alessio ◐): But consider Montgomery Steppe’s much longer governing record, because a group that values experience and steadiness could see a three-year incumbent as the safer choice.',
    ],
  },

  {
    id: 'sd-supervisor-d5',
    categoryId: 'county',
    title: 'County Supervisor, District 5',
    tldrLabel: 'County Supervisor D5',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The Board of Supervisors sets the county budget, runs health, social-services and public-safety programs, and controls land use in unincorporated areas. District 5 covers a large part of North County and rural areas, so its supervisor decides wildfire, flood and growth issues for communities with no city government of their own.',
      'The seat is open because Republican Jim Desmond is termed out and running for Congress in the 48th District. The Board is currently 3-2 Democratic, and KPBS reports that this race could give Democrats a 4-1 majority, which makes it the contest that decides whether one party controls the Board with no check.',
    ],
    introParagraphs: [
      'Rebecca Jones, the San Marcos mayor, led the five-way June 2 primary with 38.3%; Kyle Krahel, a Democrat and former county Democratic Party chair, finished second with 22.1% ahead of Vista Mayor John Franklin, a Republican, at about 18% (Times of San Diego; Voice of San Diego). Jones is endorsed by the county Republican Party and Reform California; Krahel by the county Democratic Party.',
    ],
    legalRequirements: 'Registered voter of the county and resident of the supervisorial district at the time of filing.',
    qualificationCriteria: SUPERVISOR_CRITERIA,
    readingLinks: [
      { label: 'KPBS: Board of Supervisors race explainer', url: 'https://www.kpbs.org/news/politics/2026/04/22/meet-the-candidates-for-board-of-supervisors-district-5-2026-primary-election-san-diego-county-race-explainer', summary: 'Positions, endorsements and money (as of Sept. 26, 2026).' },
      { label: 'Doug Porter: County Supervisor candidates', url: 'https://dougporter.substack.com/p/san-diego-county-supervisor-candidates', summary: 'Opinionated Substack review; treat as commentary.' },
    ],
    candidates: [
      {
        id: 'kyle-krahel',
        name: 'Kyle Krahel',
        party: 'NP',
        role: 'Small Business Owner',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Krahel has been an Oceanside planning commissioner and congressional staffer and chaired the county Democratic Party, but has never held elected office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Oceanside Planning Commission member and chair; deputy chief of staff and district director for Rep. Mike Levin; elected county Democratic Party chair in 2025 (resigned to run).' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No documented role overseeing a public budget.' },
            { criterionId: 'land-use', assessment: 'met', evidence: 'Served on and chaired the Oceanside Planning Commission.' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Oceanside native; district director for a congressmember, handling district-level constituent matters.' },
          ],
        },
        bio: [
          'Krahel is a Democrat from Oceanside who has worked as a congressional staffer for Rep. Mike Levin (reported as deputy chief of staff and district director), served on and chaired the Oceanside Planning Commission, and was elected chair of the San Diego County Democratic Party in 2025, a post he stepped down from to run (North County Pipeline; Doug Porter). His ballot designation is Small Business Owner. He has a government degree from Harvard.',
          'He says his priorities are cost of living, housing affordability, energy costs and homelessness, and has criticized Desmond for focusing on “Fox News hits” about bike lanes and immigrants.',
        ],
        scorecard: [
          { topic: 'Housing & homelessness', position: '✓✓ Backs transit-oriented “smart growth” housing and more mental-health and substance-use treatment', comparison: 'Jones emphasizes clearing encampments and shelters, and points to low homelessness in San Marcos.' },
          { topic: 'Public safety', position: '✓ Supports enforcing existing laws and holding repeat offenders accountable, alongside criminal-justice reform', comparison: 'Jones stresses San Marcos’s low crime rate and the sheriff’s substation.' },
          { topic: 'Climate & transit', position: '✓ Aims to cut greenhouse-gas emissions by 2030 and expand public transit', comparison: 'Jones focuses on flood control, wildfire defense and insurance costs.' },
          { topic: 'Cost of living', position: '~ Lists affordability and energy costs as top priorities; no specific county budget plan on public record', comparison: 'Jones says she cut over $1 million in waste in San Marcos.' },
          { topic: 'Party / Board balance', position: '✓ Democrat; backed by the county Democratic Party and the congressional delegation', comparison: 'Jones says she would prevent a Democratic supermajority on the Board.' },
        ],
        money: 'Has loaned his campaign $25,000 and received $15,000 from the county Democratic Party as of Sept. 26, 2026; KPBS says this suggests the campaign is struggling to raise money.',
        endorsements: 'San Diego County Democratic Party; Sen. Adam Schiff; Reps. Mike Levin, Juan Vargas, Scott Peters and Sara Jacobs; Planned Parenthood Action Fund of the Pacific Southwest; San Diego Building and Construction Trades Council (KPBS; Doug Porter).',
      },
      {
        id: 'rebecca-jones',
        name: 'Rebecca Jones',
        party: 'NP',
        role: 'San Marcos Mayor/Businesswoman',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Jones has served on the San Marcos City Council since 2007 and as mayor since 2018, running a mid-sized city but not a county-scale agency.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'San Marcos City Council since 2007; mayor since 2018.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Has voted on San Marcos city budgets; says she cut over $1 million in waste. No county-scale budget role.' },
            { criterionId: 'land-use', assessment: 'met', evidence: 'City land-use and public-safety decisions in San Marcos; cites a Class 1 fire rating and a sheriff’s substation.' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Long-serving elected local official; also a small-business owner (KPBS).' },
          ],
        },
        bio: [
          'Jones is a Republican who has served on the San Marcos City Council since 2007 and as mayor since 2018. She is also a small-business owner. Her campaign emphasizes public safety, affordability, homelessness and customer-service-style government.',
          'The county Republican Party did not endorse in the primary (its central committee majority backed Franklin, but endorsement requires a supermajority); Reform California backed Jones. The party’s endorsement list published in September 2026 names her for the general election (KPBS).',
        ],
        scorecard: [
          { topic: 'Homelessness', position: '✓ Supports clearing encampments plus more shelter and mental-health funding; points to a 76% reduction in San Marcos homelessness (her own claim, Voice of San Diego)', comparison: 'Krahel backs transit-oriented housing and treatment, with enforcement against repeat offenders.' },
          { topic: 'Public safety', position: '✓✓ Says San Marcos has its lowest crime rate in its 63-year history', comparison: 'Krahel emphasizes enforcement alongside criminal-justice reform.' },
          { topic: 'County budget', position: '✓ Says she cut over $1 million in waste in San Marcos; wants to apply the same efficiency at the county', comparison: 'Krahel has no public budget plan.' },
          { topic: 'Environment & hazards', position: '✓ Focuses on flood control, wildfire defense and lowering insurance premiums', comparison: 'Krahel stresses greenhouse-gas cuts and transit.' },
          { topic: 'Transparency', position: '~ Skipped a League of Women Voters primary forum, the only primary candidate to do so (Doug Porter)', comparison: 'Krahel took part in primary forums.' },
        ],
        money: 'As of Sept. 26, 2026 she had spent $107,500 on campaign consulting and $64,000 on slate mailers, mostly with Reform California, and issued 34 refunds totaling $22,794.21 (KPBS).',
        endorsements: 'San Diego County Republican Party; Reform California; San Diego Regional Chamber of Commerce; California Women’s Leadership Association (KPBS; Doug Porter).',
        notes: ['Her campaign’s claim of fighting a “mileage tax” is disputed by Doug Porter, who argues state law AB 1421 only authorized a study (commentary).'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Krahel', '●', 'Leftward Progressives want strong climate action and housing-plus-treatment approaches to homelessness, which Krahel offers with transit-oriented housing and 2030 emissions targets, over Jones’s enforcement-first approach.'],
      ['LL', 'Krahel', '●', 'Loyal Liberals back the Democratic Party-endorsed candidate with planning-commission and congressional-staff experience in an open seat that decides the Board’s balance.'],
      ['LO', 'Krahel', '◐', 'Left-Out Left voters want cost-of-living relief, which Krahel lists first, but Krahel is a former county party chair and congressional staffer, exactly the kind of insider they distrust.'],
      ['OO', 'Krahel / Jones', '=', 'Order and Opportunity Left voters want both affordable housing and safety: if smart-growth housing paired with holding repeat offenders accountable matters most, Krahel; if a proven low-crime record as San Marcos mayor matters more, Jones.'],
      ['TM', 'Jones', '○', 'Tuned-Out Middle voters choose on concrete costs, and Jones points to cutting waste in San Marcos and lowering insurance premiums through wildfire defense, while Krahel has no published budget plan.'],
      ['PP', 'Jones', '◐', 'Pragmatic and Polite Right voters value proven competence, and Jones has run a city as mayor since 2018, though Jones skipped a League of Women Voters forum and leaned on Reform California slate mailers, which this civility-minded group may dislike.'],
      ['UR', 'Jones', '◐', 'Unconventional Right voters want smaller government and tougher action on encampments, which Jones promises, though the Unconventional Right’s weak party ties keep this a lean rather than a lock.'],
      ['FC', 'Jones', '●', 'Faith First Conservatives want limited government and law and order, which Jones’s low-crime, cut-waste record offers, over a Democrat endorsed by Planned Parenthood.'],
      ['NA', 'Jones', '●', 'No Apologies Right voters want a Board check on Democrats, and Jones, backed by Reform California, promises to prevent a Democratic supermajority and clear encampments.'],
    ]),
    counterArguments: [
      'FC/NA (Jones ●): But consider that Jones skipped a League of Women Voters forum and spent heavily on slate mailers, because voters who want open accountability may want more answers first.',
      'LP/LL (Krahel ●): But consider that Krahel has never held elected office and KPBS reports Krahel’s campaign is leaning on loans and party money, because a longtime mayor may manage a multi-billion-dollar budget more safely.',
      'TM (Jones ○): But consider Krahel’s focus on energy costs and housing affordability, because those are also pocketbook issues and Jones’s waste-cutting claim is about a much smaller city.',
    ],
  },

  {
    id: 'sd-county-board-ed-d5',
    categoryId: 'school',
    title: 'County Board of Education, District 5',
    tldrLabel: 'County Board of Ed D5',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The elected County Board of Education oversees the San Diego County Office of Education, which runs court and community schools for students in juvenile justice and at-risk programs, reviews school districts’ budgets, and hears appeals on charter schools and student expulsions. It does not run neighborhood schools.',
      'District 5 runs along the coast from Del Mar to Camp Pendleton and includes parts of inland North County. The race is low-profile, and the main question is whether to keep a long-serving incumbent with a deep county-education background or an unknown challenger.',
    ],
    introParagraphs: [
      'Rick Shea has held the seat since the board appointed him in 2015 and voters elected him in 2016, 2018 and 2022. He is the Democratic Party-endorsed candidate; Bianca Ragonesi-Lasche is a retired accountant with no endorsements from Democratic or progressive groups listed (KPBS; Blue Voter Guide). The office is nonpartisan.',
    ],
    legalRequirements: 'Registered voter and resident of the board trustee area at the time of filing.',
    qualificationCriteria: [
      { id: 'governance', label: 'School-board governance', detail: 'The board sets county education policy and approves its budget.' },
      { id: 'budget', label: 'Education budget oversight', detail: 'The board reviews county and district budgets and the county office’s own finances.' },
      { id: 'special-ed', label: 'At-risk and court-school programs', detail: 'The county office educates students in juvenile court and community schools.' },
      { id: 'appeals', label: 'Appeals and charter oversight', detail: 'The board decides charter petitions and expulsion appeals.' },
    ],
    candidates: [
      {
        id: 'rick-shea',
        name: 'Rick Shea',
        party: 'NP',
        role: 'Governing Board Member',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Shea has held the seat since 2015, serving as board vice president and as 2021 president of the California County Boards of Education, after a career at the county office of education.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'County Board member since 2015; vice president; president of the California County Boards of Education in 2021; former Encinitas mayor and councilmember (SDCOE).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Retired as Special Assistant to the County Superintendent and Administrative Services Officer at the County Office of Education (SDCOE).' },
            { criterionId: 'special-ed', assessment: 'met', evidence: 'Former head teacher for the Juvenile Court Schools and juvenile probation officer (SDCOE; La Prensa San Diego).' },
            { criterionId: 'appeals', assessment: 'met', evidence: 'Has served as a board member since 2015 on a board that decides charter and appeal matters; specific votes are not publicly documented.' },
          ],
        },
        bio: [
          'Shea was appointed to the County Board in 2015 and elected in 2016, 2018 and 2022 (in 2022 he defeated Emily Wichmann). He has lived in Encinitas for more than 40 years and is a former Encinitas mayor and councilmember who also served on several local special-district boards, including the North County Transit District.',
          'He retired from the County Office of Education as Special Assistant to the County Superintendent and Administrative Services Officer, and earlier worked as a classroom teacher, head teacher for the Juvenile Court Schools and a juvenile probation officer.',
        ],
        recordVsChange:
          'He has led the board’s state association and spent decades in county education administration, which gives him budget and court-school expertise; the case for change is simply that no challenger has documented a platform or record to compare.',
        scorecard: [
          { topic: 'Court & community schools', position: '✓✓ Long record with the Juvenile Court Schools and at-risk students (La Prensa San Diego)', comparison: 'Ragonesi-Lasche has no public position.' },
          { topic: 'Budget oversight', position: '✓ Career in county office administration and budget services', comparison: 'Ragonesi-Lasche’s ballot designation (Retired Accountant) suggests finance skills, but no oversight record was found.' },
          { topic: 'Board leadership', position: '✓ Board vice president; president of the statewide association in 2021', comparison: 'Ragonesi-Lasche has no governance record found.' },
          { topic: 'Charter schools', position: '? No specific stance on public record', comparison: 'Ragonesi-Lasche has no public stance.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026).',
      },
      {
        id: 'bianca-ragonesi-lasche',
        name: 'Bianca Ragonesi-Lasche',
        party: 'NP',
        role: 'Retired Accountant',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Her ballot designation is Retired Accountant; no public record of school-board, education or budget-oversight experience was found.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No governing-board experience on public record.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Ballot designation is Retired Accountant; no oversight role documented.' },
            { criterionId: 'special-ed', assessment: 'unknown', evidence: 'No education or at-risk youth work documented.' },
            { criterionId: 'appeals', assessment: 'unknown', evidence: 'No appeals or charter-related role documented.' },
          ],
        },
        bio: [
          'Ragonesi-Lasche is a retired accountant seeking the District 5 seat. A Blue Voter Guide profile lists her as a nonpartisan candidate without endorsements from Democratic or progressive organizations, and the San Diego County Republican Party did not list her as an endorsed candidate in KPBS’s guide.',
          'Beyond her ballot designation and candidacy, little public information about her platform or background is available.',
        ],
        scorecard: [
          { topic: 'Court & community schools', position: '? No position on public record', comparison: 'Shea has decades of experience in this area.' },
          { topic: 'Budget oversight', position: '? Ballot designation is Retired Accountant; no budget platform on public record', comparison: 'Shea worked in county office administration.' },
          { topic: 'Board governance', position: '? No governing-board experience on public record', comparison: 'Shea has served since 2015.' },
          { topic: 'Charter schools', position: '? No public stance found', comparison: 'Shea’s stance is not publicly documented either.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'No endorsements on public record.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Shea', '◐', 'Leftward Progressives want support for at-risk youth, and Shea, a former court-school teacher endorsed by the Democratic Party, has worked with those students for decades, though the race does not turn on ideology.'],
      ['LL', 'Shea', '●', 'Loyal Liberals trust experienced administrators, and Shea spent a career in county education administration and led the statewide county boards association.'],
      ['LO', 'Shea', '○', 'Left-Out Left voters may want a fresh face after 11 years, but the challenger has no documented platform, so Shea’s record is the only one they can judge.'],
      ['OO', 'Shea', '◐', 'Order and Opportunity Left voters value both opportunity and order, and Shea’s background as a juvenile probation officer and court-school teacher speaks to both.'],
      ['TM', 'Shea', '○', 'Tuned-Out Middle voters are unlikely to know either name, and Shea’s record is the only one that can be checked.'],
      ['PP', 'Shea', '●', 'Pragmatic and Polite Right voters reward competence and experience over party, and Shea has decades of court-school and budget work while the challenger has no public record.'],
      ['UR', 'Shea', '○', 'Unconventional Right voters are not party-driven on low-profile boards, and with no message from the challenger to reward, Shea’s long record is a weak default.'],
      ['FC', 'Ragonesi-Lasche', '○', 'Faith First Conservatives may prefer a change from a Democratic Party-endorsed incumbent, though Ragonesi-Lasche has stated no positions on curriculum or parental rights, so the lean is weak.', 'Faith First Conservatives who put experience first could back Shea, a former juvenile probation officer and court-school teacher with a decade on the board, giving up a change vote but not a known conservative platform, since Ragonesi-Lasche has none on record.'],
      ['NA', 'Ragonesi-Lasche', '○', 'No Apologies Right voters distrust long-serving, Democratic-endorsed insiders, so they may lean to the challenger even though Ragonesi-Lasche has published no platform.', 'No Apologies Right voters who weigh experience could keep Shea, who ran budget services at the County Office of Education, accepting a Democratic-endorsed incumbent over a retired accountant with no public record.'],
    ]),
    counterArguments: [
      'FC/NA (Ragonesi-Lasche ○): But consider that Ragonesi-Lasche has no public platform and no endorsements, because a vote for Ragonesi-Lasche rests only on wanting a change.',
      'LL/PP (Shea ●): But consider that Shea has held the seat since 2015, because voters who think the board needs new oversight may reasonably want turnover even with little known about the challenger.',
    ],
  },

  {
    id: 'sd-county-board-ed-d3',
    categoryId: 'school',
    title: 'County Board of Education, District 3',
    tldrLabel: 'County Board of Ed D3',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The elected County Board of Education oversees the San Diego County Office of Education, which runs juvenile court and community schools, reviews school districts’ budgets, and decides charter-school and expulsion appeals. It does not run neighborhood schools.',
      'District 3 covers much of the southeastern county and, on the Registrar’s ballots, mid-city San Diego neighborhoods such as Normal Heights and Kensington. The choice is between a three-term incumbent backed by Democrats and labor and a Republican-endorsed newcomer with little public record.',
    ],
    introParagraphs: [
      'Alicia Muñoz, first elected in 2014, says in her county voter-guide statement that she won the June primary with 57% of the vote. Cory Brown, whose ballot designation is Parent/Business Owner, is the other finalist and filed no statement. The county Democratic Party backs Muñoz; the county Republican Party and Reform California back Brown (KPBS, Sept. 30, 2026). The office is nonpartisan.',
    ],
    readingLinks: [
      { label: 'KPBS: General election endorsement guide (Sept. 30, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian', summary: 'Party and group endorsements for County Board of Education seats.' },
      { label: 'SDCOE: Alicia Muñoz board bio', url: 'https://www.sdcoe.net/board-of-education/bio/~const-id/4027', summary: 'The County Office of Education’s profile of the incumbent.' },
    ],
    legalRequirements: 'Registered voter and resident of the board trustee area at the time of filing.',
    qualificationCriteria: [
      { id: 'governance', label: 'School-board governance', detail: 'The board sets county education policy and approves its budget.' },
      { id: 'budget', label: 'Education budget oversight', detail: 'The board reviews county and district budgets and the county office’s own finances.' },
      { id: 'special-ed', label: 'At-risk and court-school programs', detail: 'The county office educates students in juvenile court and community schools.' },
      { id: 'appeals', label: 'Appeals and charter oversight', detail: 'The board decides charter petitions and expulsion appeals.' },
    ],
    candidates: [
      {
        id: 'alicia-munoz',
        name: 'Alicia Muñoz',
        party: 'NP',
        role: 'Governing Board Member, San Diego County Board of Education',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Muñoz has held the seat since winning it in 2014, has served as board president and vice president, and spent 25 years at Cuyamaca College, ending as interim vice president of instruction.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'County Board member since the 2014 election; board president and vice president; Policy Committee (SDCOE; county voter-guide statement).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on the county office budget as a member since 2015; was a college academic dean and interim vice president of instruction (SDCOE).' },
            { criterionId: 'special-ed', assessment: 'partial', evidence: 'Says she worked with SDCOE staff on programs for English learners, foster, homeless and at-risk youth (county voter-guide statement); no court-school role of her own documented.' },
            { criterionId: 'appeals', assessment: 'met', evidence: 'Has sat on the board that decides charter and expulsion appeals since 2015; specific votes are not summarized in public sources found.' },
          ],
        },
        bio: [
          'Muñoz retired in 2023 from Cuyamaca College after 25 years as an ESL professor, ESL department chair, Academic Senate president, academic dean and interim vice president of instruction. She holds an M.A. in English from San Francisco State and a B.A. from UC Berkeley (SDCOE).',
          'She was elected in 2014 and kept the seat in 2018, when a charter-school group spent about $305,000 backing her opponent and she won with 56.7% (KPBS).',
        ],
        recordVsChange:
          'She has led the board and brings long community-college administration experience; the case for change rests on wanting a different direction after 12 years, though the challenger has published no platform to compare.',
        scorecard: [
          { topic: 'Board governance', position: '✓✓ Board president and vice president; member since 2015', comparison: 'Brown has no governing-board record found.' },
          { topic: 'English learners & at-risk youth', position: '✓ Lists English learners, foster, homeless and at-risk youth as priorities (county voter-guide statement)', comparison: 'Brown has no public position.' },
          { topic: 'Charter schools', position: '~ Backed by teachers’ groups when charter supporters spent against her in 2018 (KPBS)', comparison: 'Brown’s stance is not on public record.' },
          { topic: 'Budget oversight', position: '✓ Former college dean and interim vice president of instruction', comparison: 'Brown’s designation is Parent/Business Owner; no oversight record found.' },
        ],
        money: 'No campaign finance totals found as of Oct 9, 2026; filings are posted on the county campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026). Her ballot statement lists the American Federation of Teachers, the San Diego Labor Council and her fellow County Board members.',
        notes: ['Source for statement claims: county sample ballot and voter information guide, Nov 3, 2026 (https://www.sdvote.com).'],
      },
      {
        id: 'cory-brown',
        name: 'Cory Brown',
        party: 'NP',
        role: 'Parent/Business Owner',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'His ballot designation is Parent/Business Owner; he filed no voter-guide statement, and no public record of school-board, education or budget-oversight experience was found.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No governing-board experience on public record.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'Ballot designation is Parent/Business Owner; no budget-oversight role documented.' },
            { criterionId: 'special-ed', assessment: 'unknown', evidence: 'No education or at-risk youth work documented.' },
            { criterionId: 'appeals', assessment: 'unknown', evidence: 'No appeals or charter-related role documented.' },
          ],
        },
        bio: [
          'Brown’s ballot designation is Parent/Business Owner. He did not submit a candidate statement for the county voter guide, and no campaign website or news coverage of his platform could be found.',
          'He is endorsed by the Republican Party of San Diego County and Reform California (KPBS, Sept. 30, 2026).',
        ],
        scorecard: [
          { topic: 'Board governance', position: '? No governing-board experience on public record', comparison: 'Muñoz has served since 2015.' },
          { topic: 'English learners & at-risk youth', position: '? No position on public record', comparison: 'Muñoz lists these as priorities.' },
          { topic: 'Charter schools', position: '? No public stance found', comparison: 'Muñoz was backed by teachers’ groups against a charter-funded challenger in 2018.' },
          { topic: 'Budget oversight', position: '? Designation is Parent/Business Owner; no budget platform on public record', comparison: 'Muñoz was a college dean.' },
        ],
        money: 'No campaign finance totals found as of Oct 9, 2026; filings are posted on the county campaign-disclosure site.',
        endorsements: 'Republican Party of San Diego County; Reform California (KPBS, Sept. 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Muñoz', '●', 'Leftward Progressives back labor and teachers’ unions and services for vulnerable students, and Muñoz is endorsed by the American Federation of Teachers and lists English learners and homeless youth as priorities.'],
      ['LL', 'Muñoz', '●', 'Loyal Liberals value institutional experience, and Muñoz has led the board and spent 25 years in community-college administration.'],
      ['LO', 'Muñoz', '◐', 'Left-Out Left voters want help for working families’ children, which Muñoz’s focus on English learners and foster youth offers, though 12 years in office cuts against their appetite for new faces.'],
      ['OO', 'Muñoz', '◐', 'Order and Opportunity Left voters care about opportunity for kids in diverse working neighborhoods, and Muñoz’s focus on English learners and at-risk youth fits, while Brown has said nothing.'],
      ['TM', 'Muñoz', '○', 'Tuned-Out Middle voters are unlikely to know either name, and only Muñoz has a record they can check.'],
      ['PP', 'Muñoz', '◐', 'Pragmatic and Polite Right voters reward experience and competence over party labels, and Muñoz has run the board while Brown filed no statement, though the Republican endorsement of Brown pulls some in this group the other way.'],
      ['UR', 'Brown', '○', 'Unconventional Right voters lean toward a parent outsider over a long-serving incumbent, though weakly because Brown has published no platform.', 'Unconventional Right voters who want a proven hand could choose Muñoz, a former college dean who has led the board, giving up a change of direction for a Democratic- and labor-backed incumbent.'],
      ['FC', 'Brown', '◐', 'Faith First Conservatives want parents to have more say in schools, and Brown, a parent backed by the county Republican Party, is the likelier ally, though Brown has stated no curriculum positions.', 'Faith First Conservatives who put experience first could pick Muñoz for her decade on the board and long college career, giving up a Republican-endorsed parent whose views are not on the public record.'],
      ['NA', 'Brown', '◐', 'No Apologies Right voters want to shake up an education establishment they distrust, and Brown is the Reform California-endorsed challenger to a 12-year, union-backed incumbent.', 'No Apologies Right voters who value know-how could keep Muñoz, who has reviewed county education budgets since 2015, accepting a union-backed incumbent over a challenger with no statement or record.'],
    ]),
    counterArguments: [
      'FC/NA (Brown ◐): But consider that Brown filed no voter-guide statement and has no public platform, because a vote for Brown rests on endorsements alone.',
      'LP/LL (Muñoz ●): But consider that Muñoz has held the seat since 2015, because voters who want a new direction at the county office may reasonably want turnover.',
    ],
  },

  {
    id: 'sdccd-district-a',
    categoryId: 'school',
    title: 'San Diego Community College District, District A',
    tldrLabel: 'SDCCD District A',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Governing Board of the San Diego Community College District oversees San Diego City, Mesa and Miramar colleges and the College of Continuing Education. It hires the chancellor, adopts the district budget, and oversees construction bonds and workforce-training programs.',
      'District A covers University City, La Jolla, Pacific Beach, Clairemont Mesa, Torrey Pines and Bay Ho. Maria Nieto Senour has held the seat for more than 35 years, so the choice is between continuity and an unknown challenger.',
    ],
    introParagraphs: [
      'Nieto Senour was first elected in 1990 and was board president from 2015 to 2023; the county Democratic Party endorsed her (SDCCD; KPBS, Sept. 30, 2026). Challenger Jonny Brown’s ballot designation is Student Advocate/Writer; no news coverage, endorsements or campaign site could be found for him. The office is nonpartisan.',
    ],
    legalRequirements: 'Registered voter and resident of the trustee area at the time of filing.',
    qualificationCriteria: COLLEGE_CRITERIA,
    candidates: [
      {
        id: 'maria-nieto-senour',
        name: 'Maria Nieto Senour',
        party: 'NP',
        role: 'Governing Board Member',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Nieto Senour has served on the SDCCD board since 1990, including as president from 2015 to 2023, and holds a Ph.D. and a career in education.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Board member since 1990 (nine elections); board president 2015-2023; current Vice President for Diversity, Equity, and Inclusion (SDCCD).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on the district budget and bonds as a board member since 1990; specific committee roles are not publicly documented.' },
            { criterionId: 'education', assessment: 'met', evidence: 'Former elementary teacher and counselor; retired SDSU counseling faculty who directed the Community Based Block program; Ph.D. from Wayne State.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Has represented District A (University City, La Jolla, Pacific Beach, Clairemont Mesa and nearby) since 1990.' },
          ],
        },
        bio: [
          'Nieto Senour was first elected to the SDCCD board in 1990 and re-elected eight times, serving as board president from 2015 to 2023. She is a former elementary teacher and counselor who retired from San Diego State University’s counseling and school psychology department. She also serves on the California Library Services Board.',
          'In 2026 she reported on forming a Progressive Caucus of community college trustees and administrators and was honored in late 2025 as Trustee of the Year by a statewide Latino trustees group (SDCCD).',
        ],
        recordVsChange:
          'She has more than three decades of institutional knowledge and continuity in board leadership; the case for change is simply that no challenger has a public record, though very long tenure invites questions about turnover.',
        scorecard: [
          { topic: 'Governance', position: '✓✓ Board member since 1990; president 2015-2023', comparison: 'Brown has no public governing record.' },
          { topic: 'Equity & student support', position: '✓ Current Vice President for Diversity, Equity, and Inclusion; met with Muslim students at Mesa College after the May 2026 Islamic Center shooting', comparison: 'Brown’s ballot designation is Student Advocate/Writer; no public stance found.' },
          { topic: 'Budget & facilities', position: '? No specific budget position on public record', comparison: 'Brown has no public position.' },
          { topic: 'Workforce & transfer', position: '~ Board member of a district with workforce and transfer programs; no personal stance on public record', comparison: 'Brown has no public position.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026); San Diego Young Democrats (June 2026 primary list).',
      },
      {
        id: 'jonny-brown',
        name: 'Jonny Brown',
        party: 'NP',
        role: 'Student Advocate/Writer',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Brown’s ballot designation is Student Advocate/Writer; no public record of governing-board or education-administration experience was found.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No governing-board experience on public record.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget role documented.' },
            { criterionId: 'education', assessment: 'partial', evidence: 'Ballot designation is Student Advocate/Writer; details of advocacy work are not publicly documented.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'Residence in District A is implied by qualifying for the ballot; no community role documented.' },
          ],
        },
        bio: [
          'Brown is listed on the ballot as a Student Advocate/Writer. No news coverage, candidate statement text or campaign site could be verified.',
        ],
        scorecard: [
          { topic: 'Governance', position: '? No public record found', comparison: 'Nieto Senour has served since 1990.' },
          { topic: 'Student advocacy', position: '? Ballot designation suggests a student-focused platform; no specifics published', comparison: 'Nieto Senour is a former educator with a long board record.' },
          { topic: 'Budget & facilities', position: '? No position on public record', comparison: 'Nieto Senour’s specific stance is also not publicly documented.' },
          { topic: 'Workforce & transfer', position: '? No position on public record', comparison: 'not publicly documented for either candidate.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'No endorsements on public record.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Nieto Senour', '●', 'Leftward Progressives want equity-focused leaders, and Nieto Senour holds the board’s diversity, equity and inclusion role and is organizing a Progressive Caucus of trustees.'],
      ['LL', 'Nieto Senour', '●', 'Loyal Liberals value expertise and continuity, and Nieto Senour is a Ph.D. educator who led the board for eight years.'],
      ['LO', 'Nieto Senour', '○', 'Left-Out Left voters may chafe at 36 years in office, but Brown offers no documented platform, so they have no credible outsider to back.'],
      ['OO', 'Nieto Senour', '○', 'Order and Opportunity Left voters want colleges that lead to jobs, and only Nieto Senour has a record of running the district, though neither candidate has said much about workforce training.'],
      ['TM', 'Nieto Senour', '○', 'Tuned-Out Middle voters will probably know neither name, and Nieto Senour’s service is the only evidence available.'],
      ['PP', 'Nieto Senour', '◐', 'Pragmatic and Polite Right voters value steady, experienced stewardship, and Nieto Senour has decades of budget and bond votes, though very long tenure invites fair questions.'],
      ['UR', 'Brown', '○', 'Unconventional Right voters are skeptical of diversity programs, and Nieto Senour leads the board’s equity work, so they may lean to Brown, though Brown has published nothing.', 'Unconventional Right voters who value experience could keep Nieto Senour, a board member since 1990 and president for eight years, giving up a vote against the board’s equity focus.'],
      ['FC', 'Brown', '○', 'Faith First Conservatives are unlikely to share Nieto Senour’s Progressive Caucus and equity agenda, so they may lean to Brown, weakly because Brown’s views are unknown.', 'Faith First Conservatives who put a known record first could choose Nieto Senour, a former teacher and counselor with decades of budget votes, though her progressive and equity agenda is not theirs.'],
      ['NA', 'Brown', '◐', 'No Apologies Right voters are the strongest opponents of diversity programs and want insiders replaced, so a vote for Brown over a 36-year incumbent who leads the board’s equity work fits, despite Brown’s blank record.', 'No Apologies Right voters who still prize experience could keep Nieto Senour for more than three decades of district budget and bond oversight, accepting a trustee whose equity and progressive work they oppose.'],
    ]),
    counterArguments: [
      'UR/FC/NA (Brown ○/◐): But consider that nothing about Brown’s platform, background or endorsements could be verified, because the vote is effectively against Nieto Senour rather than for a known alternative.',
      'LP/LL (Nieto Senour ●): But consider that Nieto Senour has held the seat since 1990, because voters who value turnover and fresh oversight of district spending may reasonably want a change.',
    ],
  },

  {
    id: 'sdccd-district-c',
    categoryId: 'school',
    title: 'San Diego Community College District, District C',
    tldrLabel: 'SDCCD District C',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Governing Board of the San Diego Community College District oversees San Diego City, Mesa and Miramar colleges and the College of Continuing Education. It hires the chancellor, adopts the district budget, and oversees construction bonds and workforce-training programs.',
      'District C includes Point Loma, Ocean Beach, Mission Hills, Mission Valley, Hillcrest, University Heights, Linda Vista, Midway, Old Town and Balboa Park. The contest pairs a two-term incumbent and retired biology professor against a newcomer with little public record.',
    ],
    introParagraphs: [
      'Craig Milgrim was first elected in 2018 and re-elected in 2022; the county Democratic Party endorsed him (SDCCD; KPBS, Sept. 30, 2026). Samantha Ely’s ballot designation reads Appointed Program Manager; a Blue Voter Guide profile lists her with no endorsements from Democratic or progressive groups, and no news coverage or campaign details could be found. The office is nonpartisan.',
    ],
    legalRequirements: 'Registered voter and resident of the trustee area at the time of filing.',
    qualificationCriteria: COLLEGE_CRITERIA,
    candidates: [
      {
        id: 'craig-milgrim',
        name: 'Craig Milgrim',
        party: 'NP',
        role: 'Governing Board Member',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Milgrim has served on the SDCCD board since 2018 after 26 years on the Grossmont College biology faculty.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Board member since 2018 (elected 2018 and 2022); current Executive Vice President of the board (SDCCD).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on the district budget and bonds since 2018; asked in an August 2026 board report for a resolution supporting the countywide sales-tax measure; specific committee roles not publicly documented.' },
            { criterionId: 'education', assessment: 'met', evidence: 'Taught biology at Grossmont College for 26 years; department co-chair 2007-2020; named Professor Emeritus.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Has represented District C (Point Loma through Hillcrest and Linda Vista) since 2018.' },
          ],
        },
        bio: [
          'Milgrim is a retired biology professor who taught at Grossmont College for 26 years and was named Distinguished Faculty for 2020-21. He was first elected to the SDCCD board in 2018, is its Executive Vice President, and is described as the board’s first openly gay trustee. He has a bachelor’s degree in biology from the University of Cincinnati and a master’s in botany from the University of Vermont.',
          'His stated priorities include diversity, equity and inclusion, student food and housing insecurity, and support for LGBTQ+ faculty, staff and students (SDCCD).',
        ],
        recordVsChange:
          'He brings faculty-side classroom knowledge and eight years of board work, including the response to a May 2026 district cyber-attack; the case for change is that no challenger has a public record to weigh.',
        scorecard: [
          { topic: 'Governance', position: '✓✓ Two terms on the board; Executive Vice President', comparison: 'Ely has no public governing record.' },
          { topic: 'Student basic needs', position: '✓ Lists food and housing insecurity among students as a priority', comparison: 'Ely’s no public stance found.' },
          { topic: 'Equity', position: '✓ Priority on diversity, equity and inclusion and LGBTQ+ support', comparison: 'Ely’s no public stance found.' },
          { topic: 'Budget & bonds', position: '✓ Asked in August 2026 for a board resolution supporting the countywide sales-tax measure; no bond-specific position on public record', comparison: 'Ely’s no public stance found.' },
          { topic: 'IT & security', position: '~ Credited district IT staff for their response to a recent cyber-attack (May 2026 board report)', comparison: 'Ely has no public position.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026); San Diego Young Democrats (June 2026 primary list).',
      },
      {
        id: 'samantha-ely',
        name: 'Samantha Ely',
        party: 'NP',
        role: 'Appointed Program Manager',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Ely’s ballot designation is Appointed Program Manager; her program and role are not publicly documented, and no board or education-administration experience could be confirmed.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No governing-board experience on public record; the meaning of “Appointed” in her designation is not publicly explained.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget role documented.' },
            { criterionId: 'education', assessment: 'unknown', evidence: 'No education work documented beyond the ballot designation.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'No community role documented.' },
          ],
        },
        bio: [
          'Ely is listed on the ballot as an Appointed Program Manager. Beyond her candidacy and ballot designation, no news coverage, candidate statement text or campaign site could be verified.',
        ],
        scorecard: [
          { topic: 'Governance', position: '? No public record found', comparison: 'Milgrim has served since 2018.' },
          { topic: 'Student basic needs', position: '? No position on public record', comparison: 'Milgrim lists it as a priority.' },
          { topic: 'Budget & bonds', position: '? No position on public record', comparison: 'not publicly documented for either candidate beyond Milgrim’s board votes.' },
          { topic: 'Equity', position: '? No position on public record', comparison: 'Milgrim lists DEI as a priority.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'No endorsements on public record.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Milgrim', '●', 'Leftward Progressives want student basic needs and LGBTQ+ inclusion prioritized, and Milgrim, the board’s first openly gay trustee, lists food and housing insecurity and equity as top goals.'],
      ['LL', 'Milgrim', '●', 'Loyal Liberals value expertise, and Milgrim taught college biology for 26 years and is the board’s executive vice president.'],
      ['LO', 'Milgrim', '◐', 'Left-Out Left voters want practical help for struggling students, which Milgrim’s focus on food and housing insecurity offers, though Milgrim is an incumbent and they would welcome a credible outsider.'],
      ['OO', 'Milgrim', '◐', 'Order and Opportunity Left voters want affordable paths to good jobs, and Milgrim’s student-support record and experience running the district fit, while Ely has offered nothing to compare.'],
      ['TM', 'Milgrim', '○', 'Tuned-Out Middle voters will probably know neither name, and Milgrim’s record is the only one they can check.'],
      ['PP', 'Milgrim', '◐', 'Pragmatic and Polite Right voters value experience and steady management, and Milgrim has eight years on the board, though Milgrim’s push for a board resolution backing the countywide sales tax gives fiscal conservatives pause.'],
      ['UR', 'Ely', '○', 'Unconventional Right voters are skeptical of diversity programs and new taxes, and Milgrim emphasizes both equity programs and the countywide sales tax, so they may lean to Ely, weakly because Ely’s views are unknown.', 'Unconventional Right voters who value experience could keep Milgrim, a longtime college professor in his second board term, giving up a vote against his equity and sales-tax positions.'],
      ['FC', 'Ely', '○', 'Faith First Conservatives are unlikely to share Milgrim’s LGBTQ+ and equity priorities, so they may lean to Ely, weakly because Ely has said nothing.', 'Faith First Conservatives who prize a known record could choose Milgrim for eight years of district budget and bond votes, though his equity and LGBTQ+ priorities are not theirs.'],
      ['NA', 'Ely', '◐', 'No Apologies Right voters oppose diversity programs and new taxes, and Milgrim backs both, so Ely is their pick even with a blank record.', 'No Apologies Right voters who still want experience could keep Milgrim, a 26-year professor and board executive vice president, accepting a trustee who backed the countywide sales tax.'],
    ]),
    counterArguments: [
      'UR/FC/NA (Ely ○/◐): But consider that Ely’s program, platform and background could not be verified, because the vote is effectively against Milgrim rather than for a known alternative.',
      'PP (Milgrim ◐): But consider Milgrim’s request for a board resolution backing the countywide sales tax, because voters who want trustees to stay out of tax campaigns may see that as overreach.',
    ],
  },

  {
    id: 'sdusd-district-b',
    categoryId: 'school',
    title: 'San Diego Unified Board of Education, District B',
    tldrLabel: 'SDUSD Board D-B',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member San Diego Unified School District board hires and evaluates the superintendent, adopts the district budget, and sets policy for one of California’s largest school districts. The board also oversees SDUSD’s facilities bond program.',
      'Shana Hazan is the only candidate on the ballot, so the outcome is not in doubt. Voters who dislike the choice can leave the line blank or write in a candidate; the practical decision is whether to vote in this contest at all.',
    ],
    introParagraphs: [
      'Hazan, a former public elementary school teacher, was first elected in 2022 (60.3% over Godwin Higa), served as board vice president and was elected board president for 2024 (Ballotpedia). The county Democratic Party endorsed her (KPBS, Sept. 30, 2026). The office is nonpartisan.',
    ],
    legalRequirements: 'Registered voter and resident of the board trustee area at the time of filing.',
    qualificationCriteria: [
      { id: 'governance', label: 'School-board governance', detail: 'The board sets policy and hires the superintendent.' },
      { id: 'budget', label: 'Large education budget oversight', detail: 'The board adopts and monitors the district’s multi-billion-dollar-scale budget.' },
      { id: 'education', label: 'Classroom and education knowledge', detail: 'Trustees weigh instruction, special education and student-support decisions.' },
    ],
    candidates: [
      {
        id: 'shana-hazan',
        name: 'Shana Hazan',
        party: 'NP',
        role: 'Board Member',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Hazan has served on the San Diego Unified board since December 2022, including as vice president and as board president in 2024, and is a former public school teacher.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Board member since Dec 2022; vice president; elected board president for 2024 (Ballotpedia; SD Jewish World).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on the district budget as a board member since 2022; specific committee roles not publicly documented.' },
            { criterionId: 'education', assessment: 'met', evidence: 'Spent most of her career as a public elementary school teacher and holds a master’s in education and social policy (campaign materials).' },
          ],
        },
        bio: [
          'Hazan is a San Diego Unified graduate and former public elementary school teacher who also worked as Chief Philanthropy Officer for Jewish Family Service of San Diego and runs a social-impact consulting firm. She serves on the California First 5 Commission.',
        ],
        scorecard: [
          { topic: 'Board leadership', position: '✓✓ Board president for 2024; vice president before that', comparison: 'No opponent on the ballot.' },
          { topic: 'Education background', position: '✓ Former public elementary school teacher', comparison: 'No opponent on the ballot.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Hazan', '◐', 'Leftward Progressives have only Hazan on the ballot, a former public school teacher backed by the Democratic Party, so a vote for Hazan supports public schools even if she is not a movement progressive.'],
      ['LL', 'Hazan', '●', 'Loyal Liberals value an experienced former teacher and board president endorsed by the county party.'],
      ['LO', 'Hazan', '○', 'Left-Out Left voters have no alternative, and leaving the line blank is also a reasonable protest against an uncontested seat.'],
      ['OO', 'Hazan', '◐', 'Order and Opportunity Left voters want steady, competent school leadership, and Hazan has led the board as president.'],
      ['TM', 'Hazan', '○', 'Tuned-Out Middle voters can vote for the only name or skip a line that will not change the outcome.'],
      ['PP', 'Hazan', '◐', 'Pragmatic and Polite Right voters value experience and steadiness, and Hazan, a former teacher and board president, offers both even if they would prefer a contested race.'],
      ['UR', 'Hazan', '○', 'Unconventional Right voters have no alternative, so a vote for Hazan or a blank line are both reasonable.'],
      ['FC', 'Hazan', '○', 'Faith First Conservatives have no alternative on a one-name ballot, and a write-in or blank line is a reasonable protest.'],
      ['NA', 'Hazan', '○', 'No Apologies Right voters have no alternative, and a write-in or blank line is the only way to register disapproval.'],
    ]),
    counterArguments: [
      'FC/NA (Hazan ○): But consider leaving the line blank or writing someone in, because an uncontested race still allows a protest vote.',
    ],
  },

  {
    id: 'sd-city-council-d2',
    categoryId: 'city',
    title: 'San Diego City Council, District 2',
    tldrLabel: 'SD City Council D2',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The nine-member San Diego City Council sets the city budget, zoning and land-use rules, and fees, and acts as a check on the strong mayor. District 2 covers Clairemont, Mission Beach, Mission Bay Park, Ocean Beach, Old Town and Point Loma, and the seat has been open since term limits ended Jen Campbell’s service.',
      'The city faces a structural budget deficit and a stormwater and infrastructure backlog, and the two finalists disagree sharply on whether to cut City Hall staffing or defend it. The Times of San Diego reports this is the most expensive of the city’s four council races this year, with heavy outside spending on both sides.',
    ],
    introParagraphs: [
      'Richard Bailey led the June 2 primary with 34.8% (14,800 votes) and Nicole Crosby followed with 33.7% (14,325); Democrat Josh Coyne finished third at 13.3% (City of San Diego election history). Bailey was a Republican until February 2026 and now has no party preference; Crosby is the county Democratic Party’s endorsed candidate (KPBS, Sept. 29, 2026).',
    ],
    legalRequirements:
      'Resident and elector of the City of San Diego, and an actual resident and elector of the district from which nominated (City Charter, Art. II, § 7).',
    qualificationCriteria: COUNCIL_CRITERIA,
    readingLinks: [
      { label: 'KPBS: City Council races explainer (Districts 2, 4, 6, 8)', url: 'https://www.kpbs.org/news/politics/2026/09/29/2026-general-election-san-diego-city-council-races-explainer-districts-2-4-6-8', summary: 'Candidate backgrounds, positions, endorsements and money as of June 30, 2026.' },
      { label: 'Times of San Diego: Bailey and Crosby at Sept. 28 forum', url: 'https://timesofsandiego.com/?p=403131', summary: 'Positions on budget, homelessness, governance and license-plate readers.' },
      { label: 'FPPC warning letter to Richard Bailey (March 2026)', url: 'https://www.fppc.ca.gov/siteassets/documents/enforcement_div/enf_letters/2026/march/warning-letter-re-fppc-no.-2023-00541-richard-bailey_redacted.pdf', summary: 'State enforcement letter on late economic-interest filings.' },
    ],
    candidates: [
      {
        id: 'richard-bailey',
        photoSlug: 'richard-bailey',
        name: 'Richard Bailey',
        party: 'NP',
        role: 'San Diego Business Owner',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Bailey was Coronado’s mayor from 2016 to 2024 and a councilmember from 2012 to 2016, running a small city rather than San Diego, and recently moved to Point Loma.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Coronado City Council 2012-2016; mayor 2016-2024 (Wikipedia).' },
            { criterionId: 'land-budget', assessment: 'partial', evidence: 'Voted on Coronado city budgets and land use for 12 years; the scale is much smaller than San Diego’s. Background in corporate aerospace finance.' },
            { criterionId: 'constituent', assessment: 'partial', evidence: 'Recently moved to Point Loma (Times of San Diego); no prior role in the district.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Led a five-member council as Coronado’s mayor for eight years.' },
          ],
        },
        bio: [
          'Bailey served on the Coronado City Council from 2012 to 2016 and as the city’s mayor from 2016 to 2024, taking office at 30 as its youngest mayor. He has a business-finance degree from Cal Poly San Luis Obispo and a master’s in applied economics from the University of North Dakota, worked in corporate aerospace finance, and teaches as an adjunct economics professor at the University of San Diego. He left the Republican Party in February 2026.',
          'He wants to cut City Hall personnel back to 2015 levels (which he says would save $220 million), repeal new fees such as Balboa Park parking fees, build more housing, and replace the strong-mayor system with a city manager (KPBS; Times of San Diego).',
        ],
        scorecard: [
          { topic: 'Budget & fees', position: '✓✓ Says the city has a spending problem; would cut City Hall staff to 2015 levels and repeal new fees including Balboa Park parking fees', comparison: 'Crosby opposes cutting staffing and would audit contracts and pursue grants.' },
          { topic: 'Housing', position: '✓ Lists housing growth as a priority; no specifics published', comparison: 'Crosby emphasizes homeownership and limits on corporate home buying.' },
          { topic: 'Homelessness', position: '✓ Would increase enforcement of ordinances such as the vehicle-habitation ban', comparison: 'Crosby says police enforcement is not a good use of resources and favors housing and treatment.' },
          { topic: 'Public safety', position: '✓ Would hire more police to reduce overtime and speed response times', comparison: 'Crosby stresses quick response to priority-one calls.' },
          { topic: 'Governance & surveillance', position: '~ Wants a city manager; wants more guardrails on license-plate readers, including one-week data deletion', comparison: 'Crosby would defer to voters on a city manager.' },
        ],
        money: 'Campaign account held $150,150.40 as of June 30, 2026, the most in the primary. Outside committees supporting him include a Lincoln Club-sponsored committee that reported $15,000 from a beverage and restaurant group and another that reported $100,000 from attorney Steven Richter; a committee opposing him reported $120,000 from unions and affiliates in September (KPBS).',
        endorsements: 'Assemblymember Carl DeMaio; Larry Turner; Lincoln Club Business League; San Diego Union-Tribune editorial board (opinion).',
        redFlags: [
          {
            severity: 'notable',
            status: 'official-finding',
            text: 'The state Fair Political Practices Commission’s enforcement division sent Bailey a warning letter dated March 16, 2026 after a sworn complaint alleging he failed to timely report stock holdings on his annual statements of economic interests for 2020, 2021 and 2022. The matter was closed with a warning rather than a fine. No response from Bailey was found.',
            whyItMatters: 'Councilmembers must file public financial-interest disclosures so voters can spot conflicts when they vote on land use, contracts and budgets.',
            sources: [
              { label: 'FPPC warning letter (March 2026)', url: 'https://www.fppc.ca.gov/siteassets/documents/enforcement_div/enf_letters/2026/march/warning-letter-re-fppc-no.-2023-00541-richard-bailey_redacted.pdf' },
              { label: 'Times of San Diego (Peninsula Beacon newsletter)', url: 'https://timesofsandiego.com/?p=386140' },
            ],
          },
        ],
        notes: ['Several outside committees are spending on this race; see the money line for what each reported.'],
      },
      {
        id: 'nicole-crosby',
        name: 'Nicole Crosby',
        party: 'NP',
        role: 'Deputy City Attorney',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Crosby is a deputy city attorney and former Clairemont Town Council president who has not held elected city office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Deputy city attorney; Clairemont Town Council president and PTA president; no elected city office.' },
            { criterionId: 'land-budget', assessment: 'partial', evidence: 'City attorney’s office experience in renter protection and gun-violence response; no budget-writing role documented.' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Longtime Clairemont community leader (Clairemont Town Council president), inside District 2.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Led the city’s Gun Violence Response Unit (KPBS); no record of passing legislation.' },
          ],
        },
        bio: [
          'Crosby is a Democrat who works as a deputy city attorney, where she says she protected renters, prosecuted hate crimes and domestic violence, and led the city’s Gun Violence Response Unit. She is a former president of the Clairemont Town Council and a PTA president.',
          'Her priorities are affordability (including homeownership and limits on corporate home buying), public safety, and repairing roads, sidewalks and streetlights. She has said Mayor Todd Gloria has not endorsed her and that she does not work at City Hall.',
        ],
        scorecard: [
          { topic: 'Budget & fees', position: '~ Opposes cutting staffing; says comparing to 2015 ignores post-Proposition B austerity; would audit contracts and leases and seek grants', comparison: 'Bailey would cut staff to 2015 levels and repeal new fees.' },
          { topic: 'Housing & affordability', position: '✓✓ Backs homeownership programs, limits on corporate home buying and opposes short-term vacation rentals', comparison: 'Bailey lists housing growth but with fewer specifics.' },
          { topic: 'Homelessness', position: '✓ Says unsheltered people need housing and treatment, not enforcement', comparison: 'Bailey would increase enforcement of the vehicle-habitation ban.' },
          { topic: 'Public safety', position: '✓ Led the city’s Gun Violence Response Unit; emphasizes quick response to priority-one calls', comparison: 'Bailey wants more police to cut overtime.' },
          { topic: 'Surveillance', position: '~ Does not trust the license-plate reader vendor to aggregate government data for private purposes', comparison: 'Bailey wants more guardrails, including one-week data deletion.' },
        ],
        money: 'Campaign account held $12,175.94 as of June 30, 2026, with $8,341.12 in outstanding debts. A pro-Crosby committee reported a $50,000 donation from LIUNA Local 89 (KPBS).',
        endorsements: 'San Diego County Democratic Party; San Diego City Firefighters IAFF Local 145; San Diego & Imperial Counties Labor Council; California Working Families Party; Lt. Gov. Eleni Kounalakis; Assemblymember Darshana Patel; OB Rag (KPBS; Wikipedia).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Crosby', '●', 'Leftward Progressives want tenant protections and housing-first homelessness policy, and Crosby, who protected renters as a deputy city attorney and wants limits on corporate home buying, fits far better than Bailey’s staff cuts and enforcement.'],
      ['LL', 'Crosby', '●', 'Loyal Liberals favor the Democratic Party-, labor- and firefighter-endorsed deputy city attorney over a former Republican mayor who wants to shrink City Hall.'],
      ['LO', 'Crosby', '◐', 'Left-Out Left voters distrust big money and self-dealing, so Crosby’s limits on corporate home buying appeal and Bailey’s state warning for late stock disclosures and heavy outside money count against Bailey, though Crosby works inside the city attorney’s office.'],
      ['OO', 'Bailey / Crosby', '=', 'Order and Opportunity Left voters want homeownership and safety: if homeownership programs and a candidate who led the city’s Gun Violence Response Unit matter most, Crosby; if a plan to hire more police matters more, Bailey.'],
      ['TM', 'Bailey', '◐', 'Tuned-Out Middle voters are pocketbook-first, and Bailey promises to repeal new fees such as Balboa Park parking, a concrete cost they feel.'],
      ['PP', 'Bailey', '◐', 'Pragmatic and Polite Right voters value fiscal prudence and experience, and Bailey ran Coronado for eight years and left the Republican Party, though the state warning over Bailey’s late financial disclosures is a mark against the rule-following they prize.'],
      ['UR', 'Bailey', '●', 'Unconventional Right voters want smaller government and tougher enforcement, and Bailey would cut City Hall staff to 2015 levels, hire more police and enforce the vehicle-habitation ban.'],
      ['FC', 'Bailey', '◐', 'Faith First Conservatives favor limited government and law and order, which Bailey offers, though Bailey has no social-conservative platform and left the Republican Party.'],
      ['NA', 'Bailey', '◐', 'No Apologies Right voters want deep cuts and DeMaio’s backing, which Bailey has, but Bailey left the Republican Party and pitches himself as a pragmatist rather than a fighter.'],
    ]),
    counterArguments: [
      'UR/NA (Bailey ●/◐): But consider the state Fair Political Practices Commission warning letter over Bailey’s late reporting of stock holdings for three years, because councilmembers vote on contracts and land use where conflicts matter.',
      'LP/LL (Crosby ●): But consider that Crosby has never held elected office, her campaign was nearly out of money in June, and her deficit answer is an audit rather than a plan, because voters worried about city finances may find Bailey’s cuts more concrete.',
    ],
  },

  {
    id: 'sd-city-council-d4',
    categoryId: 'city',
    title: 'San Diego City Council, District 4',
    tldrLabel: 'SD City Council D4',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The nine-member San Diego City Council sets the city budget, zoning and land-use rules, and fees. District 4 covers southeastern San Diego neighborhoods including Paradise Hills, and its councilmember decides how infrastructure and flood-repair money is spent after the January 2024 floods.',
      'Both finalists are Democrats, so the contest turns on the city’s budget and fees, flood and infrastructure response, and whether voters want the incumbent’s party-and-labor-backed approach or a nurse-outsider’s critique of City Hall. The June primary was decided by a handful of votes.',
    ],
    introParagraphs: [
      'Henry Foster III won the 2024 special election with about 54% to replace Monica Montgomery Steppe, who moved to the county Board. In the June 2 primary he finished first by 12 votes over Martha Abraham: 9,138 (40.73%) to 9,126 (40.67%), with Johnny Lee Dang at 18.6% (City of San Diego election history). Both are Democrats; the county Democratic Party endorsed Foster. ',
    ],
    legalRequirements:
      'Resident and elector of the City of San Diego, and an actual resident and elector of the district from which nominated (City Charter, Art. II, § 7).',
    qualificationCriteria: COUNCIL_CRITERIA,
    readingLinks: [
      { label: 'KPBS: City Council races explainer (Districts 2, 4, 6, 8)', url: 'https://www.kpbs.org/news/politics/2026/09/29/2026-general-election-san-diego-city-council-races-explainer-districts-2-4-6-8', summary: 'Candidate backgrounds, positions, endorsements and money as of June 30, 2026.' },
      { label: 'Times of San Diego: Foster and Abraham primary count', url: 'https://timesofsandiego.com/politics/2026/06/10/san-diego-district-4-election-close/', summary: 'How the June count shifted between the two.' },
      { label: 'La Prensa San Diego: Abraham endorsement', url: 'https://laprensa.org/endorsement-martha-abraham-sd-city-council', summary: 'Newspaper endorsement (opinion).' },
    ],
    candidates: [
      {
        id: 'henry-foster-iii',
        name: 'Henry Foster III',
        party: 'NP',
        role: 'Councilmember',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Foster has held the District 4 seat since April 2024 and chairs the Budget & Government Efficiency Committee; earlier he was chief of staff to the previous District 4 councilmember.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Councilmember since April 2024; Chair of the Budget & Government Efficiency Committee (City of San Diego).' },
            { criterionId: 'land-budget', assessment: 'met', evidence: 'Chairs the committee that reviews the budget; voted for the Balboa Park parking fees (per Abraham’s campaign).' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Former District 4 chief of staff and construction manager; represents the district.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Won a special election with 53.8% in March 2024; endorsed by several council colleagues and county officials (Wikipedia’s endorsement list).' },
          ],
        },
        bio: [
          'Foster is a Democrat who won the March 2024 special election to replace Monica Montgomery Steppe and was sworn in in April 2024. He was previously her chief of staff on the Council and a construction manager.',
          'His priorities are quality of life (commercial corridors, parks and libraries), infrastructure (he redirected millions from the Community Equity Fund after the January 2024 floods and says he secured federal funding) and public safety. On the deficit he has called for “more detailed conversations” about which services are core (KPBS).',
        ],
        recordVsChange:
          'He has chaired the council’s budget committee and has the county Democratic Party, Labor and Working Families Party backing; the case for change is that Abraham criticizes his votes on city fees and the council’s deficit.',
        scorecard: [
          { topic: 'Budget & fees', position: '~ Chairs the Budget & Government Efficiency Committee; Abraham says he voted for the Balboa Park parking fees', comparison: 'Abraham opposes the parking fees and criticizes tax and fee increases.' },
          { topic: 'Infrastructure & floods', position: '✓ Redirected millions from the Community Equity Fund after the January 2024 floods and says he secured federal funding; says the city is designing to a 100-year flood standard but may only meet a 20-year one', comparison: 'Abraham floated a roughly $100 million bond for channel repairs.' },
          { topic: 'Public safety', position: '✓ Lists public safety as a priority; no specifics published', comparison: 'Abraham’s public-safety specifics are not published.' },
          { topic: 'Quality of life', position: '✓ Priority on commercial corridors, parks and libraries', comparison: 'Abraham emphasizes parks and environmental justice.' },
          { topic: 'Housing', position: '? No specific housing stance on public record', comparison: 'Abraham emphasizes housing equity and protecting affordable housing.' },
        ],
        money: 'Campaign account held $83,992.73 as of June 30, 2026, with $22,227.50 in outstanding debts (KPBS).',
        endorsements: 'San Diego County Democratic Party; San Diego Union-Tribune editorial board (opinion); California Working Families Party; AFSCME Local 127; Secretary of State Shirley Weber; Sen. Akilah Weber Pierson; Supervisor Monica Montgomery Steppe; Reps. Juan Vargas and Sara Jacobs (KPBS; Wikipedia; Times of San Diego).',
        notes: ['Wikipedia’s endorsement list says San Diego City Firefighters IAFF Local 145 rescinded an earlier endorsement of Foster; the date and details has not been independently confirmed.'],
      },
      {
        id: 'martha-abraham',
        name: 'Martha Abraham',
        party: 'NP',
        role: 'Neonatal ICU Nurse/Mother',
        campaignUrl: 'https://martha4sandiego.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Abraham is a neonatal ICU nurse and community activist who has not held public office; her budget and land-use experience is not documented.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No government or board role documented in available coverage.' },
            { criterionId: 'land-budget', assessment: 'unknown', evidence: 'No budget or planning role documented; offers positions on the deficit, flood bond and parking fees.' },
            { criterionId: 'constituent', assessment: 'partial', evidence: 'Longtime District 4 resident and community activist; registered nurse with a master’s in nursing (La Prensa San Diego).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Earned endorsements from the Sierra Club San Diego, United Nurses Associations of California and two community newspapers; no legislative record.' },
          ],
        },
        bio: [
          'Abraham is a Democrat and a registered nurse who works in a neonatal intensive care unit. La Prensa San Diego reports she was born in a refugee camp in Sudan and brought to San Diego as a baby, and that she earned a nursing degree at San Diego State University and a master’s in nursing.',
          'Her campaign stresses housing equity and protecting affordable housing, parks and environmental justice, and safe infrastructure. She criticizes the council for a $150 million deficit despite tax and fee increases and opposes the Balboa Park parking fees.',
        ],
        scorecard: [
          { topic: 'Budget & fees', position: '✓✓ Opposes the Balboa Park parking fees; says the budget should not be balanced “on the backs of residents and visitors”', comparison: 'Foster chairs the budget committee and, per Abraham, voted for the fees.' },
          { topic: 'Housing', position: '✓ Priority on housing equity and protecting affordable housing', comparison: 'Foster has no public specific housing stance.' },
          { topic: 'Infrastructure & floods', position: '✓ Says residents affected by flooding should help decide repairs; floated a roughly $100 million bond for channel repairs', comparison: 'Foster says he secured federal funding and redirected equity-fund money.' },
          { topic: 'Governance', position: '✓ Pledges a town hall within 30 days of taking office to set community priorities', comparison: 'Foster calls for more detailed conversations about core services.' },
          { topic: 'Public safety', position: '? No specific policy on public record', comparison: 'Foster lists it as a priority without verified specifics.' },
        ],
        money: 'Campaign account held $6,285.90 as of June 30, 2026 (KPBS).',
        endorsements: 'Sierra Club San Diego; United Nurses Associations of California/Union of Health Care Professionals; Run Women Run; La Prensa San Diego and San Diego Voice & Viewpoint (newspaper endorsements, opinion) (KPBS; Times of San Diego).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Abraham', '◐', 'Leftward Progressives favor the more left, less establishment option, and Abraham, backed by the Sierra Club and the nurses’ union and focused on environmental justice and housing equity, is that candidate, though Foster also has Working Families Party support.', 'Leftward Progressives who put experience first could back Foster, who chairs the council budget committee and has Working Families Party support, giving up Abraham’s environmental-justice focus and outsider stance.'],
      ['LL', 'Foster', '●', 'Loyal Liberals value institutional experience and party backing, and Foster chairs the budget committee with the county Democratic Party, labor and many local officials behind him.'],
      ['LO', 'Abraham', '●', 'Left-Out Left voters distrust City Hall insiders and want cost-of-living relief, and Abraham, a nurse born in a refugee camp who opposes new fees, is challenging the former chief of staff who inherited the seat’s network.'],
      ['OO', 'Foster', '◐', 'Order and Opportunity Left voters want steady, competent leaders who deliver basic services, and Foster has steered flood-repair money and lists public safety as a priority, though Abraham’s opposition to fees speaks to their budgets.'],
      ['TM', 'Abraham', '○', 'Tuned-Out Middle voters feel fees directly, and Abraham opposes the Balboa Park parking fees Foster supported, though neither name is well known.', 'Tuned-Out Middle voters who want someone who already knows the job could back Foster, who redirected millions to flood repairs and says he secured federal money, giving up Abraham’s opposition to the parking fees.'],
      ['PP', 'Foster', '●', 'Pragmatic and Polite Right voters value competence and incremental governing, and Foster runs the budget committee while Abraham’s $100 million flood-bond idea has no cost plan.'],
      ['UR', 'Foster / Abraham', '=', 'Unconventional Right voters face two Democrats: if punishing City Hall for rising fees and the deficit matters most, Abraham, though she is a progressive Democrat; if budget know-how matters more, Foster, a former construction manager who chairs the budget committee, though he is tied to the fee increases.'],
      ['FC', 'Foster', '○', 'Faith First Conservatives see two Democrats with no difference on social issues, and Foster’s budget experience edges out Abraham’s proposal to borrow $100 million.'],
      ['NA', 'Abraham', '○', 'No Apologies Right voters want to punish City Hall for fees and a deficit, and Abraham attacks both, though Abraham’s environmental-justice platform is far from theirs.', 'No Apologies Right voters who still want a known record could choose Foster, the councilmember since 2024 and budget committee chair, while accepting the incumbent who voted for the fees they oppose.'],
    ]),
    counterArguments: [
      'LO (Abraham ●): But consider that Abraham has no government experience, raised far less money, and floated a flood bond without a cost plan, because Abraham would learn the city budget on the job.',
      'LL/PP (Foster ●): But consider that Foster led the primary by only 12 votes and supported fees that many residents oppose, because voters may reasonably want a council member more skeptical of City Hall spending.',
    ],
  },
];
