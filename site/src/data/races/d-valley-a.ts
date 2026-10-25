import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * San Joaquin Valley / Sierra district races (group A): CA-5, CA-13, CA-21, CA-22 (Prop 50 map),
 * SD-14, SD-16, AD-22, AD-27. Research as of Oct 8, 2026.
 * June 2 primary shares are from the Secretary of State Statement of Vote.
 */

const SOV_HOUSE = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/76-us-rep.pdf';
const SOV_SENATE = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/90-state-senator.pdf';
const SOV_ASSEMBLY = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/95-state-assembly.pdf';
const CAL_ACCESS = 'No current filing totals verified; see Cal-Access at https://cal-access.sos.ca.gov/.';

const US_REP_LEGAL =
  'At least 25 years old, a U.S. citizen for at least 7 years, and an inhabitant of California when elected (U.S. Constitution art. I, section 2); two-year term.';

const US_REP_CRITERIA: QualificationCriterion[] = [
  { id: 'lawmaking', label: 'Lawmaking and policy experience', detail: 'The job is writing, amending and voting on federal law.' },
  { id: 'committee-budget', label: 'Committee and budget/appropriations work', detail: 'Most legislative work happens in committees that shape spending and oversight.' },
  { id: 'district-service', label: 'Constituent services and knowledge of the district', detail: 'Members run casework offices and carry local priorities to Washington.' },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Little becomes law without bipartisan or cross-chamber partners.' },
];

const LEGAL_LEG =
  'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

const SENATE_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'law-policy', label: 'Lawmaking, legal drafting or policy experience', detail: 'Senators write, amend and vote on state statutes and confirm appointees.' },
  { id: 'budget-oversight', label: 'Budget and committee work', detail: 'The state budget and policy committees are central to a senator’s workload.' },
  { id: 'public-mgmt', label: 'Managing a public agency or elected body', detail: 'Experience running or governing a public organization transfers to oversight of state agencies.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
];

const ASSEMBLY_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
  { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const HOUSE_STAKES_1 =
  'A U.S. representative votes on federal taxes, health programs such as Medicaid, immigration, farm and water policy, and oversight of the executive branch, and runs a casework office for veterans’ benefits, Social Security and other federal agencies. Terms are two years.';

export const RACES_D_VALLEY_A: Race[] = [
  // ───────────────────────────── CA-5 ─────────────────────────────
  {
    id: 'us-rep-ca5',
    categoryId: 'federal',
    title: 'U.S. Representative, 5th District',
    tldrLabel: 'CA-5',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES_1,
      'The Prop 50 map keeps CA-5 a Sierra foothill and mountain district, from the Sacramento suburbs through Amador, Calaveras, Tuolumne and Mariposa to newly added Mono and Inyo counties. Forest management, wildfire, federal lands and water storage dominate local concerns; Republicans remain heavily favored.',
    ],
    introParagraphs: [
      'In the June 2 primary, Republican incumbent Tom McClintock took 61.3% and Democrat Michael Masuda 24.3%, ahead of Democrats Michael Barkley (9.1%) and Dan Stroud (5.3%) (Secretary of State Statement of Vote). The runoff turns on whether a first-time candidate can cut into a nine-term incumbent’s margin in a strongly Republican district.',
    ],
    readingLinks: [
      { label: 'SoS Statement of Vote — U.S. House (June 2026)', url: SOV_HOUSE, summary: 'Official certified primary results by district and county.' },
      {
        label: 'Turlock Journal — Democrat Masuda seeking to unseat McClintock',
        url: 'https://www.turlockjournal.com/news/government/democrat-masuda-seeking-to-unseat-mcclintock-for-ca-5/',
        summary: 'Profile of Masuda’s background and campaign themes (2025).',
      },
    ],
    candidates: [
      {
        id: 'tom-mcclintock',
        photoSlug: 'tom-mcclintock',
        name: 'Tom McClintock',
        party: 'R',
        role: 'United States Representative',
        campaignUrl: 'https://mcclintock.house.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2009, after more than two decades in the California Assembly and state Senate.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House member since January 2009; earlier served in the state Assembly and state Senate.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Senior member of the House Judiciary and Natural Resources committees.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented most of the Sierra foothill counties in this district since 2009; Mono and Inyo are new to him under Prop 50 (Inyo Register).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Known as a fiscal hard-liner who often votes against his own party’s spending bills; few bipartisan bills of note.' },
          ],
        },
        bio: [
          'McClintock, of Elk Grove, has represented the district since 2009. He served in the state Assembly and Senate from the 1980s to 2008 and ran for governor in the 2003 recall.',
          'He is one of the House’s most consistent small-government conservatives, focused on federal lands, forest thinning, water storage and spending limits; in January 2021 he opposed objections to certifying the presidential election results.',
        ],
        recordVsChange:
          'McClintock brings seniority on Judiciary and Natural Resources and a long record on forest and federal-land policy; critics, including Masuda, say he is seldom seen in the district and rarely works across the aisle.',
        scorecard: [
          { topic: 'Housing', position: '~ Favors cutting regulation and federal spending; no signature housing bill', comparison: 'Masuda says the housing system is not working but has no detailed plan.' },
          { topic: 'Climate', position: '✗ Opposes climate mandates; backs aggressive forest thinning for wildfire', comparison: 'Masuda has not published a detailed climate platform.' },
          { topic: 'Health care', position: '✗ Opposes expanding federal health programs; voted for the 2025 GOP budget law', comparison: 'Masuda says the health care system is not working for people.' },
          { topic: 'Immigration', position: '✓ Favors strict enforcement; senior Judiciary Committee Republican', comparison: 'Masuda calls for reform but gives few specifics.' },
          { topic: 'Trump/House majority', position: '✓ Votes with the Republican majority on most major bills', comparison: 'Masuda warns that Trump is consolidating power.' },
        ],
        money: 'FEC: $928,788 raised this cycle, $201,472 cash on hand as of June 30, 2026.',
        endorsements: 'No endorsement list verified as of Oct 8, 2026.',
      },
      {
        id: 'michael-masuda',
        name: 'Michael Masuda',
        party: 'D',
        role: 'Foreign Affairs Officer',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Engineer and former State Department civil servant; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Worked as a U.S. State Department civil servant during the Biden administration (Turlock Journal); no legislative role.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of budget or committee work.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Grew up in Amador County and lives there; no constituent-service role.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation.' },
          ],
        },
        bio: [
          'Masuda grew up in Amador County, studied electrical engineering at Cal Poly, and worked as an engineer at the Johns Hopkins Applied Physics Lab and General Dynamics before joining the State Department, which he left after the 2025 change in administration (Turlock Journal).',
          'The grandson of Japanese Americans interned in World War II, he campaigns on money in politics, debt, health care, housing and checks on presidential power.',
        ],
        scorecard: [
          { topic: 'Housing', position: '? Says the housing system is not working; no detailed plan published', comparison: 'McClintock favors deregulation.' },
          { topic: 'Climate', position: '? No detailed climate platform found', comparison: 'McClintock opposes climate mandates.' },
          { topic: 'Health care', position: '✓ Says the health system is failing people and needs a new direction', comparison: 'McClintock voted for the 2025 GOP budget law.' },
          { topic: 'Immigration', position: '~ Calls for fixing the immigration system; few specifics', comparison: 'McClintock favors strict enforcement.' },
          { topic: 'Trump/House majority', position: '✗ Warns of rising authoritarian practices under Trump', comparison: 'McClintock votes with the Republican majority.' },
        ],
        money: 'FEC: $361,735 raised this cycle, $89,452 cash on hand as of June 30, 2026.',
        endorsements: 'No major endorsements verified as of Oct 8, 2026.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Masuda', '●', 'Leftward Progressives back the Democrat who warns about concentrated presidential power and wants health care and money-in-politics reform, against one of the House’s most conservative members.'],
      ['LL', 'Masuda', '●', 'Loyal Liberals favor a Democrat with a State Department and engineering background who would add a vote for the Democratic House agenda and checks on the executive.'],
      [
        'LO',
        'Masuda',
        '◐',
        'Left-Out Left voters like a political newcomer who attacks money in politics and says the health system is failing people, though Masuda offers few specifics.',
        'Experience-first Left-Out Left voters could see McClintock, in Congress since 2009, as the only finalist who has done the job; they give up a vote against the Republican majority and Masuda’s push on money in politics.',
      ],
      [
        'OO',
        'Masuda',
        '◐',
        'Order and Opportunity Left voters want the government to help with health costs, and McClintock voted for the 2025 budget law and opposes expanding federal health programs, though Masuda’s plans are thin.',
        'Experience-first Order and Opportunity Left voters could back McClintock, a 17-year incumbent on forest and wildfire policy; it is a cross-party vote that gives up a check on health-program cuts.',
      ],
      [
        'TM',
        'Masuda',
        '○',
        'Tuned-Out Middle voters who lean on public health coverage may lean to the Democrat over an incumbent who voted for the 2025 budget law, though few follow this lopsided race.',
        'Experience-first Tuned-Out Middle voters could stay with McClintock, the familiar long-serving incumbent with a working casework office; they give up a vote against the 2025 health cuts.',
      ],
      ['PP', 'McClintock', '◐', 'Pragmatic and Polite Right voters value McClintock’s fiscal restraint and his 2021 stand against objecting to certified election results, though his hard-line votes against bipartisan deals cut against their preference for compromise.'],
      ['UR', 'McClintock', '●', 'Unconventional Right voters back a small-government conservative who favors strict immigration enforcement and federal-land reform for rural Sierra counties.'],
      ['FC', 'McClintock', '●', 'Faith First Conservatives back the Republican incumbent who votes with the conservative majority on spending, immigration and limited government.'],
      ['NA', 'McClintock', '●', 'No Apologies Right voters back a deregulatory, anti-climate-mandate conservative who favors strict immigration enforcement over a Democrat warning about Trump.'],
    ]),
    counterArguments: [
      'UR (McClintock ●): But consider that McClintock’s frequent votes against his own party’s bills and few bipartisan laws limit what he delivers for the district, and Masuda argues McClintock is rarely present locally.',
      'LP (Masuda ●): But consider that Masuda has no record in office and few detailed positions, so Masuda’s priorities in Congress are hard to predict.',
    ],
  },

  // ───────────────────────────── CA-13 ─────────────────────────────
  {
    id: 'us-rep-ca13',
    categoryId: 'federal',
    title: 'U.S. Representative, 13th District',
    tldrLabel: 'CA-13',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES_1,
      'Prop 50 added Stockton and moved Coalinga, Huron and Mendota out, shifting CA-13 from an even district to about D+6 (Ballotpedia News). Gray won in 2024 by 187 votes, and Republicans held a 219-212 House majority in July 2026, so this seat could help decide control of the House.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic Rep. Adam Gray took 42.0% and Republican Kevin Lincoln 27.7%, ahead of Republican Vin Kruttiventi (15.2%) and Democrat Daniel Garibay Rodriguez (15.1%) (Statement of Vote). The runoff pits a Blue Dog Democrat stressing bipartisan results against a Trump-endorsed former Stockton mayor running on costs and crime.',
    ],
    readingLinks: [
      {
        label: 'Ballotpedia News — Redistricting adds Stockton to CA-13 (July 2026)',
        url: 'https://news.ballotpedia.org/2026/07/20/redistricting-adds-stockton-to-ca-13-as-rep-gray-d-and-former-mayor-lincoln-r-face-off-on-nov-3/',
        summary: 'Backgrounds, fundraising, ratings (Lean/Tilt Democratic) and how the new lines changed the district.',
      },
      {
        label: 'KMPH — 13th District adds Stockton, Trump-backed candidate (May 2026)',
        url: 'https://kmph.com/news/local-politics/13th-congressional-district-sees-addition-of-stockton-trump-backed-candidate',
        summary: 'Gray’s committee roles and priorities; Trump and Speaker Johnson’s backing of Lincoln.',
      },
      { label: 'SoS Statement of Vote — U.S. House (June 2026)', url: SOV_HOUSE },
    ],
    candidates: [
      {
        id: 'adam-gray',
        photoSlug: 'adam-gray',
        name: 'Adam Gray',
        party: 'D',
        role: 'United States Representative/Educator',
        campaignUrl: 'https://gray.house.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term congressman who previously served 10 years in the state Assembly representing Merced and Stanislaus counties.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since January 2025; state Assembly (21st District) 2012–2022.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Sits on the House Agriculture and Natural Resources committees (KMPH, May 2026).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Merced native who represented much of the district in the Assembly for a decade.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Blue Dog Coalition whip; voted with Republicans to end the fall 2025 government shutdown.' },
          ],
        },
        bio: [
          'Gray, of Merced, served 10 years in the Assembly, lost the 2022 House race to Republican John Duarte by 564 votes, then beat Duarte in 2024 by 187 votes. He sits on the Agriculture and Natural Resources committees and is a whip for the moderate Blue Dog Coalition.',
          'He broke with most Democrats to vote to end the 2025 government shutdown and voted against the 2025 GOP budget law, saying two-thirds of his district relies on Medicaid.',
        ],
        recordVsChange:
          'Gray offers a centrist, agriculture-focused vote with Assembly seniority behind it; replacing him with Lincoln would add a Republican vote for the House majority and Trump’s agenda.',
        scorecard: [
          { topic: 'Housing', position: '✓ Campaigns on lowering housing, food and utility costs', comparison: 'Lincoln also stresses housing costs and homelessness.' },
          { topic: 'Climate', position: '~ Moderate; prioritizes water supply and farm interests over new climate rules', comparison: 'Lincoln backs energy and tech growth, not climate rules.' },
          { topic: 'Health care', position: '✓✓ Voted against the 2025 GOP budget law over Medicaid cuts', comparison: 'Lincoln has not detailed a Medicaid position.' },
          { topic: 'Immigration', position: '~ Blue Dog; has backed some enforcement measures', comparison: 'Lincoln is endorsed by Trump.' },
          { topic: 'Trump/House majority', position: '✓ Would add a Democratic seat, though often votes across party lines', comparison: 'Lincoln would add a Republican vote.' },
        ],
        money: 'FEC: $4.19 million raised this cycle, $2.07 million cash on hand as of June 30, 2026.',
        endorsements: 'Democratic incumbent; Blue Dog Coalition member (KMPH, May 2026).',
      },
      {
        id: 'kevin-lincoln',
        photoSlug: 'kevin-lincoln',
        name: 'Kevin Lincoln',
        party: 'R',
        role: 'Small Business Owner',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Mayor of Stockton, a city of about 320,000, from 2021 to 2024; Marine veteran and security-company executive.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Voted on city ordinances as Stockton mayor 2021–2024; no state or federal legislative role.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Presided over Stockton city budget adoption as mayor.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Led Stockton, now the district’s largest city, for four years.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing state or federal legislation.' },
          ],
        },
        bio: [
          'Lincoln, 45, is a U.S. Marine veteran, pastor and former security-company executive who served as Stockton mayor from 2021 to 2024. He lost the 2024 race for the 9th District to Democrat Josh Harder, 51.8% to 48.2% (Ballotpedia News).',
          'President Trump and Speaker Mike Johnson endorsed him. He campaigns on grocery, gas and housing costs, homelessness and violent crime, and supports Trump’s AI Action Plan and crypto-friendly rules.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Cites housing costs and homelessness as priorities', comparison: 'Gray also campaigns on housing costs.' },
          { topic: 'Climate', position: '? No climate platform; backs tech and energy growth', comparison: 'Gray focuses on water and farm interests.' },
          { topic: 'Health care', position: '? No detailed Medicaid or health plan found', comparison: 'Gray voted against the 2025 GOP budget law.' },
          { topic: 'Immigration', position: '✓ Trump-endorsed; emphasizes crime and enforcement', comparison: 'Gray is a moderate Democrat.' },
          { topic: 'Trump/House majority', position: '✓ Would add a Republican vote; endorsed by Trump and Johnson', comparison: 'Gray would add a Democratic seat.' },
        ],
        money: 'FEC: $2.24 million raised this cycle, $837,885 cash on hand as of June 30, 2026.',
        endorsements: 'President Trump and Speaker Mike Johnson (KMPH, May 2026).',
        notes: ['Gray’s campaign has attacked Lincoln’s record as mayor on housing and utility costs, crime and “taxpayer-funded perks”; these are campaign claims.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Gray', '◐', 'Leftward Progressives back the Democrat for House control and his vote against Medicaid cuts, though Gray is a centrist Blue Dog who sided with Republicans to end the shutdown.'],
      ['LL', 'Gray', '●', 'Loyal Liberals value Gray’s decade of legislative experience and a Democratic seat that could decide control of the House.'],
      ['LO', 'Gray', '◐', 'Left-Out Left voters find little to excite them in a Blue Dog, but Gray voted against Medicaid cuts in a district where two-thirds rely on it, which matters more to them than a Trump-endorsed alternative.'],
      ['OO', 'Gray', '◐', 'Order and Opportunity Left voters like Lincoln’s crime focus and Marine service but want a steady moderate who protects health coverage, and Gray voted against the 2025 Medicaid cuts.'],
      ['TM', 'Gray', '○', 'Tuned-Out Middle voters in a district where most rely on Medi-Cal or ACA coverage may lean to the incumbent who voted to protect Medicaid, though Lincoln’s grocery and gas-price message also lands.'],
      ['PP', 'Gray / Lincoln', '=', 'Pragmatic and Polite Right voters weigh bipartisanship against their usual party lean: if rewarding a bipartisan, incremental member matters most, Gray, a Blue Dog who voted with Republicans to end the shutdown; if a mainstream Republican matters more, Lincoln, who ran a city of 320,000 without a record of combative politics.'],
      ['UR', 'Lincoln', '◐', 'Unconventional Right voters like Lincoln’s focus on crime, homelessness and costs, though Gray’s cross-party votes and their own cooling on Trump give some reason to hesitate.'],
      ['FC', 'Lincoln', '●', 'Faith First Conservatives favor a pastor and Marine veteran endorsed by President Trump.'],
      ['NA', 'Lincoln', '●', 'No Apologies Right voters back the Trump- and Johnson-endorsed Republican who would protect the House majority and the 2025 tax cuts.'],
    ]),
    counterArguments: [
      'NA (Lincoln ●): But consider that Gray is one of the few Democrats who has crossed party lines on key votes, and Lincoln has no record in state or federal office.',
      'LL (Gray ●): But consider that Lincoln ran the district’s largest city for four years and argues that Stockton voters, newly added, deserve a member from their city.',
    ],
  },

  // ───────────────────────────── CA-21 ─────────────────────────────
  {
    id: 'us-rep-ca21',
    categoryId: 'federal',
    title: 'U.S. Representative, 21st District',
    tldrLabel: 'CA-21',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES_1,
      'CA-21 is centered on Fresno and nearby Valley communities, where farm labor, groundwater, air quality and Medi-Cal coverage are everyday concerns. Democrats are strongly favored; the race mainly decides whether a long-serving moderate Democrat keeps the seat.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic Rep. Jim Costa took 42.2% and Republican Kyle Kirkland 26.3%, ahead of Republican Lorenzo Rios (14.9%) and Democrat Lourin Hubbard (10.3%) (Statement of Vote). Costa, in Congress since 2005, faces a self-funded-style business challenger who has never held office.',
    ],
    readingLinks: [
      {
        label: 'GV Wire — Costa will face well-known GOP opponent (June 2026)',
        url: 'https://gvwire.com/?p=250794',
        summary: 'Primary-night results and the general-election matchup.',
      },
      { label: 'SoS Statement of Vote — U.S. House (June 2026)', url: SOV_HOUSE },
    ],
    candidates: [
      {
        id: 'jim-costa',
        photoSlug: 'jim-costa',
        name: 'Jim Costa',
        party: 'D',
        role: 'Farmer/Representative',
        campaignUrl: 'https://costa.house.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2005 after 24 years in the state Assembly and Senate.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since January 2005; state Assembly and Senate from 1978 to 2002.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Senior member of the House Agriculture and Foreign Affairs committees.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Fresno native from a farm family; has represented Fresno-area districts for two decades.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Longtime Blue Dog Coalition leader known for bipartisan farm and water work.' },
          ],
        },
        bio: [
          'Costa, 74, a Fresno Democrat from a dairy-farming family, has served in Congress since 2005 after a long state legislative career. He is a leader of the moderate Blue Dog Coalition.',
          'His office lists agriculture, water, health care and veterans as core issues. He voted against the 2025 GOP budget law.',
        ],
        recordVsChange:
          'Costa brings two decades of House seniority on agriculture and water; the case for change is mainly generational and about new ideas, since Kirkland has not held office.',
        scorecard: [
          { topic: 'Housing', position: '~ No signature housing bill; supports federal housing programs', comparison: 'Kirkland blames over-regulation for costs.' },
          { topic: 'Climate', position: '~ Moderate; prioritizes water storage and farm interests', comparison: 'Kirkland wants fewer regulations on growers.' },
          { topic: 'Health care', position: '✓ Voted against the 2025 GOP budget law and its Medicaid cuts', comparison: 'Kirkland blames over-regulation for high costs.' },
          { topic: 'Immigration', position: '~ Backs farmworker legalization and border security', comparison: 'Kirkland emphasizes stopping fentanyl and cartels.' },
          { topic: 'Trump/House majority', position: '✓ Democratic vote, often a swing vote on farm issues', comparison: 'Kirkland would add a Republican vote.' },
        ],
        money: 'FEC: $1.34 million raised this cycle, $938,779 cash on hand as of June 30, 2026.',
        endorsements: 'Democratic incumbent; no new major endorsements verified as of Oct 8, 2026.',
      },
      {
        id: 'kyle-kirkland',
        name: 'Kyle Kirkland',
        party: 'R',
        role: 'Entrepreneur/Nonprofit CEO',
        campaignUrl: 'https://kirkland2026.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Business executive and Fresno casino owner who has chaired large boards; no elected office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'President of the California Gaming Association since 2013, an industry lobbying role (campaign site).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Former chairman of Steinway Musical Instruments; chaired the Fresno Chaffee Zoo Corporation board from 2019 (campaign site).' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Has owned Club One Casino in Fresno since 2008; no constituent-service role.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record.' },
          ],
        },
        bio: [
          'Kirkland, a Harvard and Stanford MBA graduate, worked at Bain & Company, led the 1995 purchase of Steinway & Sons and later chaired the company. He bought Fresno’s Club One Casino in 2008 and has led the California Gaming Association since 2013 (campaign site).',
          'He campaigns on cutting regulation, water storage, auditing government waste and backing police; the Fresno Police Officers’ Association endorsed him.',
        ],
        scorecard: [
          { topic: 'Housing', position: '~ Blames over-regulation for costs; no specific housing plan', comparison: 'Costa supports federal housing programs.' },
          { topic: 'Climate', position: '✗ Wants to end “regulatory burden” on growers; backs water storage', comparison: 'Costa is a moderate on climate rules.' },
          { topic: 'Health care', position: '? Calls care “brutally expensive” from over-regulation; no plan', comparison: 'Costa opposed the 2025 Medicaid cuts.' },
          { topic: 'Immigration', position: '✓ Focus on fentanyl, trafficking and cartels “while respecting legal immigration”', comparison: 'Costa backs farmworker legalization.' },
          { topic: 'Trump/House majority', position: '✓ Would add a Republican vote; campaign site does not mention Trump', comparison: 'Costa is a Democratic vote.' },
        ],
        money: 'FEC: $338,971 raised this cycle, $17,934 cash on hand as of June 30, 2026.',
        endorsements: 'Fresno Police Officers’ Association (campaign site, Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Costa', '◐', 'Leftward Progressives back the Democrat for House control, though Costa is a centrist Blue Dog rather than a progressive.'],
      ['LL', 'Costa', '●', 'Loyal Liberals value Costa’s seniority and his decades of farm and water dealmaking.'],
      ['LO', 'Costa', '◐', 'Left-Out Left voters may want a fresher face than a 21-year incumbent, but Costa’s vote against Medicaid cuts beats a Bain-trained casino owner who leads a gaming-industry lobby.'],
      ['OO', 'Costa', '◐', 'Order and Opportunity Left voters like Kirkland’s police endorsement but prefer a steady moderate who backs both border security and farmworker legalization and voted to protect Medicaid.'],
      ['TM', 'Costa', '○', 'Tuned-Out Middle voters dependent on Medi-Cal may lean to the incumbent who voted against the 2025 Medicaid cuts.'],
      ['PP', 'Costa', '◐', 'Pragmatic and Polite Right voters reward bipartisan, incremental dealmakers and may cross party lines for a Blue Dog with two decades of farm and water work over a challenger with no governing record.'],
      [
        'UR',
        'Kirkland',
        '◐',
        'Unconventional Right voters like a businessman promising to audit waste, cut regulation and fight cartels, though Kirkland has no governing record.',
        'Experience-first Unconventional Right voters could back Costa, a two-decade incumbent with a moderate, farm-focused record; they give up a Republican vote and Kirkland’s deregulation agenda.',
      ],
      [
        'FC',
        'Kirkland',
        '◐',
        'Faith First Conservatives favor Republican Kirkland and his “back the blue” message, though a casino owner whose campaign says little about faith or family is an imperfect fit.',
        'Experience-first Faith First Conservatives could back Costa, who has represented Fresno for 20 years, but would give up a vote for Republican House control.',
      ],
      ['NA', 'Kirkland', '●', 'No Apologies Right voters back the Republican who promises deregulation, government audits and a crackdown on cartels.'],
    ]),
    counterArguments: [
      'NA (Kirkland ●): But consider that Kirkland has never held office and had little cash on hand mid-year, while Costa’s seniority carries weight on Valley water fights.',
      'LL (Costa ●): But consider that Costa, 74, has been in elected office since 1978, and some voters want generational change.',
    ],
  },

  // ───────────────────────────── CA-22 ─────────────────────────────
  {
    id: 'us-rep-ca22',
    categoryId: 'federal',
    title: 'U.S. Representative, 22nd District',
    tldrLabel: 'CA-22',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES_1,
      'CA-22 covers Kings County and parts of Tulare and Kern, and has a larger share of Medicaid enrollees than any other Republican-held district. Prop 50 made it somewhat bluer; Cook rates it a toss-up and Sabato’s Crystal Ball Lean Democratic (GV Wire, Sept 29, 2026), making it a key House-control race.',
    ],
    introParagraphs: [
      'In the June 2 primary, Republican Rep. David Valadao took 40.7% and progressive Democrat Randy Villegas 32.4%, edging Democratic Assemblymember Jasmeet Bains (26.9%) (Statement of Vote). The runoff turns on Valadao’s vote for the 2025 GOP budget law and its Medicaid changes versus his independent brand, and whether Villegas is seen as too far left.',
    ],
    readingLinks: [
      {
        label: 'Ballotpedia News — Valadao and Villegas advance (June 2026)',
        url: 'https://news.ballotpedia.org/2026/06/12/incumbent-david-valadao-r-and-randy-villegas-d-advanced-from-the-top-two-primary-for-californias-22nd-congressional-district-on-june-2-2026/',
        summary: 'Backgrounds, messaging, party endorsements and ratings.',
      },
      {
        label: 'CalMatters — Valadao and Medicaid cuts (Feb 2026)',
        url: 'https://calmatters.org/politics/2026/02/congress-valadao-medicaid-cuts/',
        summary: 'How the 2025 budget law’s Medicaid changes play in a heavily Medi-Cal district.',
      },
      { label: 'SoS Statement of Vote — U.S. House (June 2026)', url: SOV_HOUSE },
    ],
    candidates: [
      {
        id: 'david-valadao',
        photoSlug: 'david-valadao',
        name: 'David Valadao',
        party: 'R',
        role: 'Congressman/Dairy Farmer',
        campaignUrl: 'https://valadao.house.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Six terms in Congress (2013–2019, 2021–present) after two years in the state Assembly; House Appropriations member.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House 2013–2019 and since 2021; state Assembly 2010–2012.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Member of the House Appropriations Committee.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Kings County dairy farmer who has represented the area for most of 14 years.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'One of 10 House Republicans who voted to impeach Trump in 2021; cultivates a bipartisan brand.' },
          ],
        },
        bio: [
          'Valadao, a Kings County dairy farmer, served in the Assembly from 2010 and has been in Congress since 2013, except for 2019–2021 after losing to TJ Cox. He beat Rudy Salas in 2022 and 2024 and sits on Appropriations.',
          'He voted to impeach Trump in 2021. In 2025 he voted for the GOP budget law after helping lead a letter warning against Medicaid cuts; he says it preserves Medicaid for its intended recipients and funds rural hospitals.',
        ],
        recordVsChange:
          'Valadao brings Appropriations seniority and a record of occasional independence; the case for change rests on his decisive vote for Medicaid cuts in a district where many residents depend on Medi-Cal.',
        scorecard: [
          { topic: 'Housing', position: '~ No signature housing bill; focuses on farm and water infrastructure', comparison: 'Villegas campaigns on affordability for working families.' },
          { topic: 'Climate', position: '✗ Prioritizes water deliveries for farms over environmental rules', comparison: 'Villegas backs a more progressive platform.' },
          { topic: 'Health care', position: '✗ Voted for the 2025 budget law with Medicaid cuts; touts $50B rural health fund', comparison: 'Villegas makes the Medicaid vote his central attack.' },
          { topic: 'Immigration', position: '~ Long supported farmworker legalization while backing enforcement', comparison: 'Villegas, a progressive, opposes harsh enforcement.' },
          { topic: 'Trump/House majority', position: '✓ Would keep a Republican seat; voted to impeach Trump in 2021', comparison: 'Villegas would add a Democratic seat.' },
        ],
        money: 'FEC: $4.93 million raised this cycle, $3.37 million cash on hand as of June 30, 2026.',
        endorsements: 'California Republican Party (Ballotpedia News, June 2026); Speaker Mike Johnson rallied for him Sept 30, 2026 (GV Wire).',
      },
      {
        id: 'randy-villegas',
        name: 'Randy Villegas',
        party: 'D',
        role: 'Teacher/Business Owner',
        campaignUrl: 'https://www.villegasforcongress.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Political science professor and Visalia Unified school board trustee since 2021; no state or federal office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Votes on district policy as a Visalia Unified trustee since December 2021; teaches political science at College of the Sequoias.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on the Visalia Unified school budget as a trustee.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Visalia resident and local elected official; Visalia is partly in the district.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record.' },
          ],
        },
        bio: [
          'Villegas, 31, teaches political science at College of the Sequoias, co-owns an auto shop, and has served on the Visalia Unified board since a 2021 appointment, winning election in 2022. He received a 2025 American Political Science Association community-college faculty award.',
          'Endorsed by Bernie Sanders, Dolores Huerta and the Congressional Progressive Caucus, he frames the race as working families versus billionaires.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Campaigns on making life affordable for working families', comparison: 'Valadao has no signature housing bill.' },
          { topic: 'Climate', position: '✓ Progressive platform backed by environmental and labor groups', comparison: 'Valadao prioritizes farm water deliveries.' },
          { topic: 'Health care', position: '✓✓ Centers his campaign on reversing the 2025 Medicaid cuts', comparison: 'Valadao voted for the budget law.' },
          { topic: 'Immigration', position: '✓ Progressive; endorsed by Dolores Huerta and Latino Victory Fund', comparison: 'Valadao backs enforcement plus farmworker legalization.' },
          { topic: 'Trump/House majority', position: '✓ Would add a Democratic seat', comparison: 'Valadao would keep a Republican seat.' },
        ],
        money: 'FEC: $2.65 million raised this cycle, $571,792 cash on hand as of June 30, 2026.',
        endorsements: 'Sen. Bernie Sanders, Dolores Huerta, Congressional Progressive Caucus, Working Families Party, Latino Victory Fund (as of primary, 2026).',
        notes: ['Republicans portray Villegas as too far left for the district; the California Democratic Party did not endorse in the primary.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Villegas', '●', 'Leftward Progressives back a Sanders-endorsed challenger who frames the race as working families versus billionaires and wants to reverse the Medicaid cuts.'],
      [
        'LL',
        'Villegas',
        '◐',
        'Loyal Liberals want a Democratic House and a reversal of the Medicaid cuts, though many party leaders had preferred the more moderate Bains in the primary.',
        'Experience-first Loyal Liberals could respect Valadao’s Appropriations seniority and his 2021 impeachment vote, but it is a cross-party vote that gives up a Democratic seat and accepts his vote for the Medicaid cuts.',
      ],
      ['LO', 'Villegas', '●', 'Left-Out Left voters like a young teacher and auto-shop co-owner who beat the party favorite and centers his campaign on restoring Medicaid in a district that depends on it.'],
      [
        'OO',
        'Villegas',
        '◐',
        'Order and Opportunity Left voters want health coverage protected and lean to Villegas, though Valadao’s mix of border enforcement and farmworker legalization matches their moderate immigration views.',
        'Experience-first Order and Opportunity Left voters could back Valadao, a six-term Appropriations member; it is a cross-party vote that accepts his vote for the 2025 Medicaid cuts.',
      ],
      [
        'TM',
        'Villegas',
        '○',
        'Tuned-Out Middle voters in a district heavily reliant on Medi-Cal may lean to the challenger running against Medicaid cuts.',
        'Experience-first Tuned-Out Middle voters could stick with Valadao, a familiar local farmer with Appropriations clout, though they accept his vote for the 2025 Medicaid cuts.',
      ],
      ['PP', 'Valadao', '●', 'Pragmatic and Polite Right voters value Valadao’s independent, rule-of-law record, including his 2021 impeachment vote, and his Appropriations experience over a first-time candidate pitched against billionaires.'],
      ['UR', 'Valadao', '◐', 'Unconventional Right voters back the Republican seat, though Valadao’s support for farmworker legalization and his impeachment vote cut against their immigration views and Trump leanings.'],
      ['FC', 'Valadao', '●', 'Faith First Conservatives prefer the Republican incumbent over a Sanders-endorsed progressive.'],
      ['NA', 'Valadao', '◐', 'No Apologies Right voters back the Republican who supported the 2025 tax and spending law, but they have not forgotten Valadao’s 2021 vote to impeach Trump.'],
    ]),
    counterArguments: [
      'PP (Valadao ●): But consider that Valadao voted for the Medicaid cuts after warning against them, and his district has the highest share of Medicaid enrollees of any Republican seat.',
      'LP (Villegas ●): But consider that Villegas has never held office above a school board, and a progressive platform may struggle in a district Trump carried in 2024.',
    ],
  },

  // ───────────────────────────── SD-14 ─────────────────────────────
  {
    id: 'senate-sd14',
    categoryId: 'state-leg',
    title: 'State Senate, District 14',
    tldrLabel: 'SD-14',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: SENATE_CRITERIA('SD-14 covers much of Fresno County, all of Madera and Merced counties and part of Tulare County, where farm water, hospitals and flood recovery are recurring issues.'),
    seatContext: 'Open (Caballero termed out)',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the budget, water and land-use law, health care and public safety, and confirm governor appointees; they serve four-year terms.',
      'Sen. Anna Caballero is termed out. Democrats hold a 42% to 27% registration edge, but Kamala Harris carried the district by only about 4 points in 2024 (SJV Sun), so the seat is more competitive than registration suggests.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic Assemblymember Esmeralda Soria took 45.8% and Republican Merced Councilmember Darin DuPont 40.4%, ahead of Democrat Esmeralda Hurtado (13.8%) (Statement of Vote). The runoff turns on affordability and water, and on whether DuPont can win over Latino and independent voters who have drifted right.',
    ],
    readingLinks: [
      { label: 'SJV Sun — DuPont launches campaign for Senate (Feb 2026)', url: 'https://sjvsun.com/?p=103115', summary: 'DuPont’s background, priorities and endorsements.' },
      {
        label: 'GV Wire — Soria fundraising email draws criticism (Mar 2026)',
        url: 'https://gvwire.com/2026/03/23/soria-fundraising-email-tied-to-chavez-controversy-draws-criticism/',
        summary: 'Exchange between the two finalists during the primary.',
      },
      { label: 'SoS Statement of Vote — State Senate (June 2026)', url: SOV_SENATE },
    ],
    candidates: [
      {
        id: 'esmeralda-soria',
        photoSlug: 'esmeralda-soria',
        name: 'Esmeralda Soria',
        party: 'D',
        role: 'State Assemblymember',
        campaignUrl: 'https://soriaforcalifornia.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assemblymember since 2022 and Assembly Agriculture Committee chair, after eight years on the Fresno City Council.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'State Assembly since December 2022; UC Davis law graduate and former legislative aide and policy adviser.' },
            { criterionId: 'budget-oversight', assessment: 'met', evidence: 'Chair of the Assembly Agriculture Committee since 2023; helped secure $300 million for the Distressed Hospital Loan Program (AB 112, 2023).' },
            { criterionId: 'public-mgmt', assessment: 'met', evidence: 'Fresno City Council about 2014–2022, including as its first Latina council president.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Represents Fresno, Madera and Merced areas in the Assembly; raised in Tulare County.' },
          ],
        },
        bio: [
          'Soria, the daughter of immigrant farmworkers, grew up in Tulare County, graduated from UC Berkeley and UC Davis law school, and served on the Fresno City Council before winning AD-27 in 2022.',
          'She chairs the Assembly Agriculture Committee and points to hospital funding, the effort to reopen Madera Community Hospital and $20 million in flood recovery for Planada.',
        ],
        recordVsChange:
          'Soria would bring Assembly seniority and the Agriculture chair’s relationships to the Senate; DuPont offers a fiscally conservative counterweight in a Democratic supermajority but has under two years in office.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Lists affordable housing among her priorities', comparison: 'DuPont focuses on affordability for young families.' },
          { topic: 'Climate', position: '~ Prioritizes farm economy and flood recovery', comparison: 'DuPont emphasizes water storage.' },
          { topic: 'Education', position: '✓ Says she authored laws to increase education funding', comparison: 'DuPont has no detailed education plan.' },
          { topic: 'Public safety', position: '✓ Cites public-safety investments', comparison: 'DuPont runs on “safe communities.”' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat, Speaker Rivas ally', comparison: 'DuPont is endorsed by the Senate Republican leader.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Democratic nominee; no list verified as of Oct 8, 2026.',
        notes: ['In March 2026 she sent a fundraising email about the Cesar Chavez allegations; DuPont called it inappropriate (GV Wire).'],
      },
      {
        id: 'darin-dupont',
        name: 'Darin DuPont',
        party: 'R',
        role: 'Councilman/Water Attorney',
        campaignUrl: 'https://dupontforsenate.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Attorney elected to the Merced City Council in November 2024; no state legislative experience.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'partial', evidence: 'Practicing attorney; votes on city ordinances since late 2024.' },
            { criterionId: 'budget-oversight', assessment: 'partial', evidence: 'Votes on the Merced city budget as a councilmember since December 2024.' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Under two years on an elected city council.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Merced native serving on the council of one of the district’s main cities.' },
          ],
        },
        bio: [
          'DuPont, a Merced native and attorney, won a Merced City Council seat in November 2024 and launched his Senate run in February 2026.',
          'He runs on affordability for young families, water storage and government accountability, with endorsements from Senate Republican Leader Brian Jones and supervisors in Fresno, Merced and Madera counties.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Centers his campaign on affordability for young families', comparison: 'Soria also lists affordable housing.' },
          { topic: 'Climate', position: '~ Focus on expanding water storage and infrastructure', comparison: 'Soria prioritizes farm economy and flood recovery.' },
          { topic: 'Education', position: '? No detailed education platform found', comparison: 'Soria cites education-funding laws.' },
          { topic: 'Taxes', position: '✓ Runs on accountability and lower costs; endorsed by GOP leaders', comparison: 'Soria is a mainstream Democrat.' },
          { topic: 'Caucus / ideology', position: '✓ Conservative Republican', comparison: 'Soria would join the Democratic supermajority.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Senate Republican Leader Brian Jones; Supervisors Nathan Magsig, Daron McDaniel, Rob Poythress (SJV Sun, Feb 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Soria', '◐', 'Leftward Progressives back a farmworkers’ daughter focused on hospitals and rural farmworker communities, though Soria is a mainstream ally of the Speaker rather than a movement progressive.'],
      ['LL', 'Soria', '●', 'Loyal Liberals value Soria’s legislative record and her Agriculture Committee chair.'],
      ['LO', 'Soria', '◐', 'Left-Out Left voters may see Soria as a party insider, but her hospital funding and flood recovery for Planada are the practical help they want.'],
      ['OO', 'Soria', '●', 'Order and Opportunity Left voters want steady help and safety, and Soria points to reopening Madera Community Hospital, flood recovery and public-safety investments.'],
      ['TM', 'Soria', '○', 'Tuned-Out Middle voters may lean to Soria’s work keeping local hospitals open, though both finalists run on costs.'],
      [
        'PP',
        'DuPont',
        '◐',
        'Pragmatic and Polite Right voters lean to a mainstream Republican attorney running on fiscal accountability and water storage, though DuPont has been in office under two years.',
        'Experience-first Pragmatic and Polite Right voters could back Soria, an Agriculture Committee chair with eight years on the Fresno council; it is a cross-party vote that adds to the Democratic supermajority.',
      ],
      [
        'UR',
        'DuPont',
        '◐',
        'Unconventional Right voters like DuPont’s affordability and government-accountability pitch as a check on Sacramento, though DuPont is new to office.',
        'Experience-first Unconventional Right voters could back Soria, who already chairs a committee important to Valley farms; they give up a Republican check on the supermajority.',
      ],
      [
        'FC',
        'DuPont',
        '◐',
        'Faith First Conservatives prefer the Republican, though DuPont’s campaign centers on economics rather than faith and family issues.',
        'Experience-first Faith First Conservatives could back Soria’s longer record, though Soria would vote with the Democratic majority on social issues.',
      ],
      ['NA', 'DuPont', '●', 'No Apologies Right voters back the Republican endorsed by the Senate GOP leader who pledges to cut costs and hold government accountable.'],
    ]),
    counterArguments: [
      'NA (DuPont ●): But consider that DuPont has served under two years on a city council, while Soria already chairs a legislative committee important to Valley farms.',
      'LL (Soria ●): But consider that a Republican senator could give this swing-leaning region a check on one-party control in Sacramento.',
    ],
  },

  // ───────────────────────────── SD-16 ─────────────────────────────
  {
    id: 'senate-sd16',
    categoryId: 'state-leg',
    title: 'State Senate, District 16',
    tldrLabel: 'SD-16',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: SENATE_CRITERIA('SD-16 runs from Fresno County to Kern County, including all of Kings County, part of Tulare County and parts of Bakersfield and Visalia.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the budget, water and energy law, health care and public safety, and confirm governor appointees; they serve four-year terms.',
      'Trump carried SD-16 by nearly nine points in 2024 despite an eight-point Democratic registration edge (SJV Sun), and Hurtado won in 2022 by about 20 votes, making this one of the Senate’s most competitive seats.',
    ],
    introParagraphs: [
      'In the June 2 primary, Republican Guillermo Gonzalez took 45.2% and Democratic Sen. Melissa Hurtado 35.6%, ahead of Bakersfield Vice Mayor Manpreet Kaur (D, 19.1%) (Statement of Vote). Combined Democratic votes topped Gonzalez, so the runoff turns on turnout and Hurtado’s record.',
    ],
    readingLinks: [
      {
        label: 'SJV Sun — Gonzalez launches challenge to Hurtado (Jan 2026)',
        url: 'https://sjvsun.com/news/politics/guillermo-gonzalez-launches-senate-challenge-to-hurtado-with-gop-backing',
        summary: 'Gonzalez’s background and endorsements; district partisanship.',
      },
      {
        label: 'KGET — Hurtado discusses reelection (2026)',
        url: 'https://www.kget.com/news/politics/your-local-elections/sen-melissa-hurtado-discusses-reelection-and-her-time-in-sacramento/amp/',
        summary: 'Hurtado on her budget-oversight role and priorities.',
      },
      { label: 'SoS Statement of Vote — State Senate (June 2026)', url: SOV_SENATE },
    ],
    candidates: [
      {
        id: 'melissa-hurtado',
        photoSlug: 'melissa-hurtado',
        name: 'Melissa Hurtado',
        party: 'D',
        role: 'State Senator',
        campaignUrl: 'https://www.melissahurtado.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'State senator since 2018 and chair of Senate Budget Subcommittee No. 4; former city councilmember.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'State senator since December 2018 (two terms).' },
            { criterionId: 'budget-oversight', assessment: 'met', evidence: 'Chair of Senate Budget Subcommittee No. 4 (state administration, about 80 agencies) and member of the Joint Legislative Budget Committee since 2026.' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Former city councilmember (Sanger) before the Senate.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented much of this region since 2018.' },
          ],
        },
        bio: [
          'Hurtado, raised in the Valley by farmworker parents, was elected in 2018 as the youngest woman ever in the state Senate. She won re-election in 2022 by about 20 votes and ran unsuccessfully for CA-22 in the 2024 primary.',
          'She chairs a budget subcommittee overseeing about 80 state agencies and says her 2026 focus is oversight, including property-tax fraud.',
        ],
        recordVsChange:
          'Hurtado offers budget-subcommittee leadership and eight years of seniority; critics, including both primary opponents, say she has not listened enough to constituents.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Says she championed housing working families can afford', comparison: 'Gonzalez opposes a per-mile driving tax.' },
          { topic: 'Climate', position: '~ Prioritizes water infrastructure for farms', comparison: 'Gonzalez also stresses water for agriculture.' },
          { topic: 'Education', position: '✓ Endorsed by the California Teachers Association', comparison: 'Gonzalez has no detailed education plan.' },
          { topic: 'Public safety', position: '✓ Endorsed by CHP officers and firefighters; funds local police', comparison: 'Gonzalez has no detailed public-safety plan.' },
          { topic: 'Caucus / ideology', position: '~ Moderate Democrat with an independent streak', comparison: 'Gonzalez is backed by the state Republican Party.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'California Teachers Association, California Nurses Association, California Professional Firefighters, California Association of Highway Patrolmen (campaign site, Oct 2026).',
      },
      {
        id: 'guillermo-gonzalez',
        name: 'Guillermo Gonzalez',
        party: 'R',
        role: 'Small Business Owner',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Field representative for Rep. David Valadao and restaurant owner; no elected office.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'partial', evidence: 'Works in Rep. Valadao’s district office as a field representative (SJV Sun).' },
            { criterionId: 'budget-oversight', assessment: 'unknown', evidence: 'No public budget or committee experience.' },
            { criterionId: 'public-mgmt', assessment: 'not-met', evidence: 'Has not run a public agency or served on an elected body.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Congressional field representative in the region; runs family restaurants in McFarland and Delano.' },
          ],
        },
        bio: [
          'Gonzalez was born in Bakersfield, raised in Mexico, and returned as a teenager to graduate from Bakersfield High. His family runs the Idle Spur Cafe in McFarland and he owns Guillermo’s Steakhouse in Delano.',
          'A Valadao field representative, he is endorsed by Valadao, Rep. Vince Fong, Sen. Shannon Grove and the California Republican Party.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✗ Opposes a per-mile tax on drivers', comparison: 'Hurtado says she backed affordable housing.' },
          { topic: 'Climate', position: '~ Backs water and energy production', comparison: 'Hurtado prioritizes farm water infrastructure.' },
          { topic: 'Taxes', position: '✓ Endorsers say he will oppose new taxes and spending', comparison: 'Hurtado says she fights for oversight of spending.' },
          { topic: 'Public safety', position: '? No detailed plan', comparison: 'Hurtado is endorsed by CHP officers and firefighters.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Republican aligned with Valadao', comparison: 'Hurtado is a moderate Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'California Republican Party; Reps. David Valadao and Vince Fong; Sen. Shannon Grove; Asm. Stan Ellis (SJV Sun, Jan 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Hurtado', '◐', 'Leftward Progressives back the Democrat and her teacher and nurse support, though Hurtado is a moderate with an independent streak.'],
      ['LL', 'Hurtado', '●', 'Loyal Liberals value Hurtado’s budget-subcommittee chair and eight years of seniority.'],
      ['LO', 'Hurtado', '◐', 'Left-Out Left voters like Hurtado’s farmworker-family roots and focus on property-tax fraud oversight, though both primary rivals said Hurtado has not listened enough to constituents.'],
      ['OO', 'Hurtado', '●', 'Order and Opportunity Left voters want safety and affordable housing, and Hurtado is endorsed by CHP officers and firefighters, funds local police and backs working-family housing.'],
      [
        'TM',
        'Gonzalez',
        '○',
        'Tuned-Out Middle voters wary of new costs may lean to the restaurant owner who opposes a per-mile driving tax, though Hurtado also claims affordable-housing work.',
        'Experience-first Tuned-Out Middle voters could back Hurtado, a budget subcommittee chair with eight years in the Senate; they give up a candidate focused on blocking a new driving tax.',
      ],
      [
        'PP',
        'Gonzalez',
        '◐',
        'Pragmatic and Polite Right voters favor a mainstream Republican from Valadao’s moderate wing who opposes new taxes and spending, though Gonzalez has never held office.',
        'Experience-first Pragmatic and Polite Right voters could back Hurtado, a moderate budget subcommittee chair; it is a cross-party vote that gives up a Republican seat in a Trump-won district.',
      ],
      ['UR', 'Gonzalez', '●', 'Unconventional Right voters favor the Republican small-business owner who opposes a per-mile driving tax and new spending.'],
      ['FC', 'Gonzalez', '●', 'Faith First Conservatives favor the Republican running to protect “our values and way of life.”'],
      ['NA', 'Gonzalez', '●', 'No Apologies Right voters back the GOP-endorsed nominee who opposes new taxes and spending in a Trump-won district.'],
    ]),
    counterArguments: [
      'UR (Gonzalez ●): But consider that Gonzalez has never held elected office, while Hurtado now chairs a budget subcommittee with oversight of about 80 agencies.',
      'LL (Hurtado ●): But consider that Hurtado finished second in the primary and both primary opponents said Hurtado is not responsive enough to constituents.',
    ],
  },

  // ───────────────────────────── AD-22 ─────────────────────────────
  {
    id: 'assembly-ad22',
    categoryId: 'state-leg',
    title: 'State Assembly, District 22',
    tldrLabel: 'AD-22',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-22 covers most of Stanislaus County, including Modesto and Turlock, and part of Merced County.'),
    seatContext: 'Incumbent, unopposed',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members vote on the state budget, public safety, housing, water and education law; they serve two-year terms.',
      'Republican Juan Alanis is the only candidate on the ballot, the sole partisan legislator in California running unopposed in a district where the other party has more registered voters (Ceres Courier). Only his margin is in question.',
    ],
    introParagraphs: [
      'Alanis was the only candidate in the June 2 primary and received 100% of the vote (Statement of Vote). No write-in candidates qualified for the general election, per the Secretary of State’s certified write-in list.',
    ],
    readingLinks: [
      {
        label: 'Ceres Courier — Alanis unopposed in a Democratic-leaning district',
        url: 'https://www.cerescourier.com/news/local/alanis-in-a-rare-position-unopposed-in-a-state-dominated-by-democrats/',
        summary: 'His record, committee roles and fundraising.',
      },
      { label: 'SoS Statement of Vote — State Assembly (June 2026)', url: SOV_ASSEMBLY },
    ],
    candidates: [
      {
        id: 'juan-alanis',
        photoSlug: 'juan-alanis',
        name: 'Juan Alanis',
        party: 'R',
        role: 'Assemblyman',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Two-term Assemblymember and Assembly Republican Caucus chair; 27 years as a Stanislaus County sheriff’s sergeant.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since December 2022; says 19 of his bills have become law (Ceres Courier).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Vice chair of the Public Safety and Labor and Employment committees; Assembly Republican Caucus chair.' },
            { criterionId: 'district-service', assessment: 'met', evidence: '27 years with the Stanislaus County Sheriff’s Office before the Assembly (Turlock Journal).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Passed bills as a minority-party member, which requires Democratic votes.' },
          ],
        },
        bio: [
          'Alanis, a Republican, retired as a sergeant after 27 years with the Stanislaus County Sheriff’s Office and won the Assembly seat in 2022 and 2024.',
          'He chairs the Assembly Republican Caucus, focusing on cost of living, protecting children, agriculture and public safety.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓✓ Former sheriff’s sergeant; vice chair of Public Safety Committee', comparison: 'Unopposed.' },
          { topic: 'Caucus / ideology', position: '✓ Republican Caucus chair; focuses on cost of living and agriculture', comparison: 'Unopposed.' },
        ],
        money: 'Over $800,000 raised this election year and $563,000 cash on hand (Ceres Courier, May 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', '—', '—', 'Leftward Progressives have no left-of-center option and may leave this unopposed Republican race blank.'],
      ['LL', 'Alanis', '○', 'Loyal Liberals who vote in every race may accept an experienced incumbent with a record of bills signed with Democratic votes.'],
      ['LO', '—', '—', 'Left-Out Left voters have no option that reflects their views and may leave the race blank.'],
      ['OO', 'Alanis', '◐', 'Order and Opportunity Left voters who value public safety and police may accept a former sheriff’s sergeant focused on cost of living.'],
      ['TM', 'Alanis', '◐', 'Tuned-Out Middle voters who vote will find only the incumbent, whose cost-of-living focus matches their concerns.'],
      ['PP', 'Alanis', '●', 'Pragmatic and Polite Right voters back a steady Republican with a law-enforcement background who passes bills across party lines.'],
      ['UR', 'Alanis', '●', 'Unconventional Right voters back the former sheriff’s sergeant on public safety and cost of living.'],
      ['FC', 'Alanis', '●', 'Faith First Conservatives back the Republican focused on protecting children and public safety.'],
      ['NA', 'Alanis', '●', 'No Apologies Right voters back the Assembly Republican Caucus chair and former sheriff’s sergeant.'],
    ]),
    counterArguments: [
      'NA (Alanis ●): But consider that an uncontested seat means no one is debating Alanis’s record, so voters may want to check his votes before marking the ballot.',
    ],
  },

  // ───────────────────────────── AD-27 ─────────────────────────────
  {
    id: 'assembly-ad27',
    categoryId: 'state-leg',
    title: 'State Assembly, District 27',
    tldrLabel: 'AD-27',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-27 includes parts of Fresno, Madera and Merced counties, with farm, water and rural health care concerns.'),
    seatContext: 'Open (Soria running for Senate)',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members vote on the state budget, water, health care, housing and public safety law; they serve two-year terms.',
      'The seat is open because Esmeralda Soria is running for SD-14. AD-27 voted for Biden by 13.6 points in 2020 but for Trump by 2.7 in 2024 (California Target Book via SJV Sun), so it is a genuine swing seat.',
    ],
    introParagraphs: [
      'In the June 2 primary, Republican former Merced Mayor Mike Murphy took 43.4% and Democratic Fresno County Supervisor Brian Pacheco 40.3%, ahead of Livingston Councilmember Japjeet Singh Uppal (D, 16.3%) (Statement of Vote). The runoff pits two experienced local officials, and turns on Democratic turnout and independents.',
    ],
    readingLinks: [
      {
        label: 'SJV Sun — Pacheco launches Assembly bid (Dec 2025)',
        url: 'https://sjvsun.com/news/politics/brian-pacheco-launches-campaign-for-assembly/',
        summary: 'Pacheco’s background and endorsements from Soria and Speaker Rivas.',
      },
      { label: 'SJV Sun — Murphy launches Assembly campaign (2025)', url: 'https://sjvsun.com/?p=97918', summary: 'Murphy’s background and priorities.' },
      {
        label: 'Merced FOCUS — 27th Assembly District debate',
        url: 'https://themercedfocus.org/27thassemblydebate/',
        summary: 'Primary debate coverage; Pacheco did not attend a May 8 UC Merced debate.',
      },
      { label: 'SoS Statement of Vote — State Assembly (June 2026)', url: SOV_ASSEMBLY },
    ],
    candidates: [
      {
        id: 'brian-pacheco',
        name: 'Brian Pacheco',
        party: 'D',
        role: 'County Supervisor/Farmer',
        campaignUrl: 'https://pachecoforca.com/',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Fresno County supervisor since 2015 and a former 12-year Kerman Unified board member; no state legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Adopts county ordinances as a Fresno County supervisor since 2015.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Votes on Fresno County’s budget as supervisor; 12 years on the Kerman Unified board, including as president.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Represents northwestern Fresno County; fourth-generation dairy farmer.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Builds majorities on a five-member county board; no legislative record.' },
          ],
        },
        bio: [
          'Pacheco, a fourth-generation dairy farmer with a UC Davis agricultural-economics degree, has been a Fresno County supervisor since 2015 and served 12 years on the Kerman Unified school board.',
          'Endorsed by Soria and Speaker Robert Rivas, he runs on farm water, school, safety and health funding, no middle-class tax hikes, and opposition to tariffs.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '~ Runs on lowering prices; no detailed housing plan', comparison: 'Murphy pledges to improve transportation.' },
          { topic: 'Climate', position: '~ Prioritizes clean, reliable water for farms and towns', comparison: 'Murphy stresses a secure water supply.' },
          { topic: 'Education', position: '✓ 12 years on a school board; seeks a “fair share” of school funding', comparison: 'Murphy has no detailed education plan.' },
          { topic: 'Taxes', position: '✓ Opposes middle-class tax increases and tariffs', comparison: 'Murphy pledges to reduce the cost of living.' },
          { topic: 'Caucus / ideology', position: '~ Moderate farm Democrat backed by the Speaker', comparison: 'Murphy is a Republican pitching bipartisanship.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Assembly Speaker Robert Rivas; Asm. Esmeralda Soria (SJV Sun, Dec 2025).',
      },
      {
        id: 'mike-murphy',
        name: 'Mike Murphy',
        party: 'R',
        role: 'Small Business Owner',
        campaignUrl: 'https://mikemurphy4assembly.com/',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Merced councilmember from 2011 and mayor 2015–2020; small-business lawyer.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Adopted city ordinances as Merced councilmember and mayor, 2011–2020; attorney.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Presided over Merced city budgets as mayor 2015–2020.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Led Merced, one of the district’s main cities, for about nine years in elected office.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Built council majorities; no legislative record.' },
          ],
        },
        bio: [
          'Murphy returned to Merced from law school in 2009, worked as a small-business lawyer, joined the City Council in 2011 and served as mayor from 2015 through 2020.',
          'He pledges to improve public safety, lower the cost of living, improve transportation and health-care access, and secure water, promising a cross-aisle approach.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Pledges to improve transportation and reduce cost of living', comparison: 'Pacheco also runs on lowering prices.' },
          { topic: 'Climate', position: '~ Focus on a secure water supply', comparison: 'Pacheco prioritizes farm water.' },
          { topic: 'Public safety', position: '✓ Lists increased public safety first', comparison: 'Pacheco also cites public-safety funding.' },
          { topic: 'Taxes', position: '✓ Promises lower cost of living', comparison: 'Pacheco opposes middle-class tax hikes.' },
          { topic: 'Caucus / ideology', position: '~ Republican pitching cross-aisle cooperation', comparison: 'Pacheco is a moderate Democrat.' },
        ],
        money: 'Reported $191,417 cash on hand as of June 30, 2025 (GV Wire, Dec 2025); see Cal-Access for current totals.',
        endorsements: 'No list verified as of Oct 8, 2026.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Pacheco', '◐', 'Leftward Progressives back the Democrat over a Republican, though Pacheco is a moderate farm Democrat who rules out middle-class tax hikes.'],
      ['LL', 'Pacheco', '●', 'Loyal Liberals value Pacheco’s decade of county governance and 12 years on a school board.'],
      ['LO', 'Pacheco', '○', 'Left-Out Left voters see a party-backed moderate who skipped a primary debate, but Pacheco’s stand against tariffs and middle-class tax hikes offers more than a Republican.'],
      ['OO', 'Pacheco', '◐', 'Order and Opportunity Left voters want safety and opportunity, and Pacheco pairs public-safety and school funding with opposition to tariffs that hurt farm jobs, though Murphy lists public safety first.'],
      ['TM', 'Pacheco', '○', 'Tuned-Out Middle voters may lean to Pacheco’s opposition to tariffs and middle-class tax hikes, though Murphy also runs on costs.'],
      ['PP', 'Murphy', '◐', 'Pragmatic and Polite Right voters like a former mayor promising a cross-aisle approach, though Pacheco is an equally experienced moderate.'],
      ['UR', 'Murphy', '◐', 'Unconventional Right voters back the Republican on public safety and cost of living, though Murphy’s tone is moderate.'],
      ['FC', 'Murphy', '◐', 'Faith First Conservatives prefer the Republican, though Murphy’s campaign focuses on local services rather than faith and family issues.'],
      ['NA', 'Murphy', '◐', 'No Apologies Right voters back the Republican to flip a Trump-won seat, though Murphy pitches bipartisanship rather than a fight.'],
    ]),
    counterArguments: [
      'PP (Murphy ◐): But consider that Pacheco is a dairy farmer who also opposes middle-class tax hikes and has more recent experience in county government.',
      'LL (Pacheco ●): But consider that Pacheco skipped at least one primary debate, while Murphy has run a city and pledges bipartisanship.',
    ],
  },
];
