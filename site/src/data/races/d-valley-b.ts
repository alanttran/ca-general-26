import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Southern San Joaquin Valley districts: U.S. House CA-20 (Prop 50 map); State Senate SD-12;
 * Assembly AD-8, AD-31, AD-32, AD-33, AD-35; Court of Appeal, 5th District retention.
 * Finalists from the certified June 2, 2026 Statement of Vote (Secretary of State). Research as of Oct 9, 2026.
 */

const SOV_HOUSE = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/76-us-rep.pdf';
const SOV_SENATE = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/90-state-senator.pdf';
const SOV_ASSEMBLY = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/95-state-assembly.pdf';
const CAL_ACCESS = 'No current totals verified here; see Cal-Access at https://cal-access.sos.ca.gov/.';

const US_REP_LEGAL =
  'At least 25 years old, a U.S. citizen for at least 7 years, and an inhabitant of California when elected (U.S. Constitution art. I, section 2); two-year term.';

const US_REP_CRITERIA: QualificationCriterion[] = [
  { id: 'lawmaking', label: 'Lawmaking and policy experience', detail: 'The job is writing, amending and voting on federal law.' },
  { id: 'committee-budget', label: 'Committee and budget/appropriations work', detail: 'Most legislative work happens in committees that shape spending and oversight.' },
  { id: 'district-service', label: 'Constituent services and knowledge of the district', detail: 'Members run casework offices and carry local priorities to Washington.' },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Little becomes law without bipartisan or cross-chamber partners.' },
];

const LEG_LEGAL =
  'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

const SENATE_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'law-policy', label: 'Lawmaking, legal drafting or policy experience', detail: 'Senators write, amend and vote on state statutes and confirm appointees.' },
  { id: 'budget-oversight', label: 'Budget and committee work', detail: 'The state budget and policy committees are central to a senator’s workload.' },
  { id: 'public-mgmt', label: 'Governing a public agency or elected body', detail: 'Experience running or governing a public organization transfers to oversight of state agencies.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
];

const ASSEMBLY_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
  { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee roles and budget votes shape what reaches the floor.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const ASSEMBLY_STAKES =
  'Assembly members vote on the state budget, water and energy rules, housing and land use, criminal law and school funding, and serve two-year terms.';

const FIFTH_DCA = 'https://appellate.courts.ca.gov/district-courts/5dca/bio';
const JUDICIAL_LIST = 'https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/judicial.pdf';

export const RACES_D_VALLEY_B: Race[] = [
  // ───────────────────────────── CA-20 ─────────────────────────────
  {
    id: 'us-rep-ca20',
    categoryId: 'federal',
    title: 'U.S. Representative, 20th District',
    tldrLabel: 'CA-20',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, Medicaid and other health programs, immigration, defense and infrastructure spending, and oversight of the executive branch, and runs a casework office for veterans’ benefits, Social Security and federal agencies.',
      'The redrawn 20th takes in parts of Kern, Tulare, Kings and Fresno counties. Water deliveries, oil and energy permitting, East Kern aerospace, and federal Medicaid changes that reach many Valley families are the issues with the most local weight.',
    ],
    introParagraphs: [
      'In the June 2 primary Republican Rep. Vince Fong took 68.2% and Democrat Sandra Van Scotter 28.8%, with two no-party candidates splitting the rest (certified Statement of Vote). November turns on whether Van Scotter’s first-time, health-care-focused campaign can cut into a very large Republican margin.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote (U.S. House)', url: SOV_HOUSE, summary: 'Certified district totals for every primary candidate.' },
      {
        label: 'KGET — 2026 candidate questionnaire, Congressional District 20',
        url: 'https://www.kget.com/news/politics/your-local-elections/2026-candidate-questionnaire-california-congressional-district-20/amp/',
        summary: 'Each candidate’s own background, party history and political philosophy, in their words.',
      },
    ],
    candidates: [
      {
        id: 'vince-fong',
        photoSlug: 'vince-fong',
        name: 'Vince Fong',
        party: 'R',
        role: 'United States Representative',
        campaignUrl: 'https://fong.house.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In the House since May 2024 after eight years in the state Assembly and nearly a decade as district director for Rep. Kevin McCarthy.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'State Assembly 2016–2024; U.S. House since May 21, 2024 (official House biography).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Serves on the House Transportation and Infrastructure and Science, Space, and Technology committees (official House biography).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Born and raised in Bakersfield; ran McCarthy’s district office for nearly a decade (KGET questionnaire; House biography).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Says he helped secure $450 million for local water infrastructure (KGET questionnaire); votes mostly with the House Republican majority.' },
          ],
        },
        bio: [
          'Fong, a Bakersfield native with degrees from UCLA and Princeton, began in policy working for Ways and Means Chair Bill Thomas, then spent nearly a decade as Kevin McCarthy’s district director. He served in the Assembly from 2016 to 2024 and won the 2024 special election to succeed McCarthy.',
          'He sits on the Transportation and Infrastructure and Science committees and lists border security, defense and energy independence as priorities.',
        ],
        recordVsChange:
          'Fong brings McCarthy-era district relationships, a seat on the infrastructure committee and alignment with the House majority and President Trump; Van Scotter offers a health-care and constituent-access focus but no governing record, so change means trading majority-party access for a different agenda.',
        scorecard: [
          { topic: 'Health care', position: '✗ Voted for H.R. 1 (July 3, 2025), which CBO estimated cuts about $700 billion in Medicaid funding', comparison: 'Van Scotter, a former respiratory therapist, says expanding health-care access is a priority.' },
          { topic: 'Water', position: '✓ Says he helped secure $450 million for local water infrastructure', comparison: 'Van Scotter names water security as a priority without a specific plan.' },
          { topic: 'Energy', position: '✓✓ Backs expanding domestic oil and energy production for energy independence', comparison: 'Van Scotter has not published an energy position.' },
          { topic: 'Immigration', position: '✓ Prioritizes border security', comparison: 'Van Scotter has not addressed immigration in questionnaires found.' },
          { topic: 'Trump/House majority', position: '✓ Says he works with President Trump on district priorities', comparison: 'Van Scotter would add a Democratic vote and stresses cross-party problem-solving.' },
        ],
        money: 'See FEC filings at https://www.fec.gov/ (no current totals verified here, Oct 2026).',
        endorsements: 'No current endorsement list verified here (Oct 2026).',
        notes: ['His office said H.R. 1 delivers tax relief and protects the long-term health of safety-net programs (press release, July 2025): https://fong.house.gov/media/press-releases/congressman-fong-votes-pass-one-big-beautiful-bill-act-delivering-historic-0'],
      },
      {
        id: 'sandra-van-scotter',
        name: 'Sandra Van Scotter',
        party: 'D',
        role: 'Disability Community Advocate',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'A former respiratory therapist and disability-services worker from Ridgecrest with no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative or policy-office experience found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No committee or budget experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Ridgecrest resident; Kern Regional Center advisory committee since 2022 (KGET questionnaire).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation or leading coalitions found.' },
          ],
        },
        bio: [
          'Van Scotter grew up in Chicago and lives in Ridgecrest. She worked as a respiratory therapist from 1995 to 2021, has served on a Kern Regional Center advisory committee since 2022 and has worked as a direct support professional since 2023 (KGET).',
          'She was registered no-party-preference from 2014 to 2025 and campaigns on health-care access, water security and rural economic opportunity.',
        ],
        scorecard: [
          { topic: 'Health care', position: '✓ Lists expanding health-care access and protecting hospitals as priorities', comparison: 'Fong voted for H.R. 1’s Medicaid cuts.' },
          { topic: 'Water', position: '~ Names water security as a priority; no specific plan', comparison: 'Fong cites $450 million in water funding.' },
          { topic: 'Energy', position: '? No energy position found', comparison: 'Fong strongly backs expanded oil production.' },
          { topic: 'Immigration', position: '? Not addressed', comparison: 'Fong prioritizes border security.' },
          { topic: 'Trump/House majority', position: '~ Stresses evidence-based decisions and cross-party common ground', comparison: 'Fong works closely with the Republican majority and Trump.' },
        ],
        money: 'See FEC filings at https://www.fec.gov/ (no current totals verified here, Oct 2026).',
        endorsements: 'No endorsement list verified here (Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Van Scotter', '●', 'Leftward Progressives back the Democrat who centers health-care access over an incumbent who voted for deep federal Medicaid cuts.'],
      ['LL', 'Van Scotter', '◐', 'Loyal Liberals share Van Scotter’s party and evidence-based, health-care priorities but notice Van Scotter has no governing record against a seasoned incumbent.', 'Experience-first Loyal Liberals could back Fong, an eight-year Assembly veteran on the House infrastructure committee who brings water money home; it is a cross-party vote that gives up opposition to Medicaid cuts and the Republican majority.'],
      ['LO', 'Van Scotter', '●', 'Left-Out Left voters like a first-time, non-career candidate and former no-party voter focused on health care for working families, against a former McCarthy aide.'],
      ['OO', 'Van Scotter', '◐', 'Order and Opportunity Left voters want health coverage protected and lean to the former respiratory therapist, though Fong’s border-security and water work also speak to them.', 'Experience-first Order and Opportunity Left voters could back Fong, who has held office since 2016 and cites $450 million for local water; it is a cross-party vote that accepts his Medicaid-cut vote.'],
      ['TM', 'Van Scotter', '○', 'Tuned-Out Middle voters who rely on Medi-Cal may lean to the candidate promising to protect health access and hospitals, though few follow this lopsided race.', 'Experience-first Tuned-Out Middle voters could stay with Fong, the familiar incumbent who brought home water money; they accept his vote for H.R. 1’s Medicaid cuts.'],
      ['PP', 'Fong', '◐', 'Pragmatic and Polite Right voters favor an experienced, mainstream Republican focused on infrastructure and water, though Fong’s Medicaid vote and close ties to Trump give some pause.'],
      ['UR', 'Fong', '●', 'Unconventional Right voters back a Republican who prioritizes border security, tax relief and domestic energy production.'],
      ['FC', 'Fong', '●', 'Faith First Conservatives back a reliable Republican vote for the House majority, border security and the military.'],
      ['NA', 'Fong', '●', 'No Apologies Right voters back a Republican who works with President Trump on border security, tax cuts and expanded oil production.'],
    ]),
    counterArguments: [
      'NA (Fong ●): But consider that H.R. 1’s Medicaid cuts fall heavily on a Valley district where many households use Medi-Cal, which affects local hospitals as well as enrollees.',
      'LP (Van Scotter ●): But consider that Van Scotter has no legislative experience and was registered no-party until 2025, so her policy positions are largely unwritten.',
    ],
  },

  // ───────────────────────────── SD-12 ─────────────────────────────
  {
    id: 'senate-sd12',
    categoryId: 'state-leg',
    title: 'State Senate, District 12',
    tldrLabel: 'SD-12',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: SENATE_CRITERIA('SD-12 runs from Clovis and the Sierra foothills through Visalia to Tehachapi, with farm water, oil and wildfire issues at the center.'),
    seatContext: 'Open (Grove termed out)',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the state budget, water and energy law, criminal justice and taxes, and confirm the governor’s appointees; they serve four-year terms.',
      'District 12 spans parts of Fresno, Tulare and Kern counties. Republican Sen. Shannon Grove is termed out after eight years. Water reliability, state oil regulation and wildfire insurance dominate, and the winner joins a small Republican minority or, unusually, adds a Libertarian voice.',
    ],
    introParagraphs: [
      'No Democrat ran. In the June 2 primary Fresno County Supervisor Nathan Magsig (R) took 59.5%, Libertarian William Brown Jr. 26.5% and Republican Louis Miramontes 14.0% (certified Statement of Vote). Magsig is the heavy favorite; November turns on whether Democrats and independents back Brown as an alternative or skip the race.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote (State Senate)', url: SOV_SENATE, summary: 'Certified district totals.' },
      {
        label: 'KGET — 2026 Senate District 12 candidate questionnaire',
        url: 'https://www.kget.com/news/politics/your-local-elections/2026-california-senate-district-12-candidate-questionnaire/amp/',
        summary: 'Backgrounds and philosophies of all three primary candidates in their own words.',
      },
      {
        label: 'Tehachapi News — Senate District 12, a race with no Democrats (May 2026)',
        url: 'https://www.tehachapinews.com/news/senate-district-12-a-california-race-with-no-democrats/article_2b44cb8a-c7b6-5351-8148-29fd041d1748.html',
        summary: 'Positions on oil, AB 32 and AB 5, fundraising and endorsements.',
      },
    ],
    candidates: [
      {
        id: 'nathan-magsig',
        name: 'Nathan Magsig',
        party: 'R',
        role: 'County Supervisor/Businessman',
        campaignUrl: 'https://www.fresnocountyca.gov/Departments/Board-of-Supervisors/Supervisor-Nathan-Magsig',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'About 25 years in local office: 16 years on the Clovis City Council (twice mayor) and a Fresno County supervisor since 2017, after early work as Assembly staff.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'partial', evidence: 'Worked as legislative staff in the California Assembly (county biography); local ordinance-making, no state legislative office.' },
            { criterionId: 'budget-oversight', assessment: 'met', evidence: 'Votes on Fresno County’s budget as a supervisor and sits on the county Retirement Board and Fresno Council of Governments (county biography).' },
            { criterionId: 'public-mgmt', assessment: 'met', evidence: 'Clovis council 16 years and mayor twice; county supervisor since 2017 (county biography; Tehachapi News).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Lifelong Clovis resident representing a mostly rural, mountainous county district (KGET; county biography).' },
          ],
        },
        bio: [
          'Magsig, a lifelong Clovis resident and licensed general contractor with criminology and business master’s degrees from Fresno State, served 16 years on the Clovis City Council, twice as mayor, and has been a Fresno County supervisor since 2017. Earlier he was Assembly staff, a youth pastor and director of a nonprofit affordable-housing developer.',
          'He says lowering the cost of living is his top priority.',
        ],
        scorecard: [
          { topic: 'Water', position: '✓✓ Wants fewer regulations so farmers get reliable supply; backs dams and water storage', comparison: 'Brown has not addressed water.' },
          { topic: 'Climate & energy', position: '✗ Wants to revisit AB 32, roll back state oil rules and allow fracking; open to small nuclear reactors', comparison: 'Brown broadly favors repealing regulations but has no energy specifics.' },
          { topic: 'Public safety', position: '✓ Opposes “anti-law enforcement” policies; endorsed by Kern Sheriff Donny Youngblood', comparison: 'Brown, a prison social worker, has not addressed public safety.' },
          { topic: 'Taxes', position: '✓ Opposes big government and wasteful spending; wants more local control', comparison: 'Brown wants lower taxes and limited government.' },
          { topic: 'Caucus / ideology', position: '✓ Lifelong Republican backed by Grove and Kern’s Republican supervisors', comparison: 'Brown is a Libertarian who would sit outside both caucuses.' },
        ],
        money: 'More than $600,000 cash on hand (Tehachapi News, May 2026); later totals at https://cal-access.sos.ca.gov/.',
        endorsements: 'Sen. Shannon Grove, Kern County’s Republican supervisors, Sheriff Donny Youngblood, IBEW and building trades unions, several law-enforcement groups (Tehachapi News, May 2026).',
      },
      {
        id: 'william-brown-jr',
        name: 'William Brown Jr.',
        party: 'L',
        role: 'Social Worker/Businessman',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'A Marine veteran and clinical social worker in the state prison system with no elected or policy experience; he ran for Assembly in 2024.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'not-met', evidence: 'No legislative or policy-office experience found.' },
            { criterionId: 'budget-oversight', assessment: 'not-met', evidence: 'No budget or committee experience found.' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Supervising Psychiatric Social Worker I at CDCR (2018–2021); U.S. Marine Corps 2000–2013 (KGET).' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Visalia resident for about eight years; ran for the 32nd Assembly District in 2024 (KGET; Tehachapi News).' },
          ],
        },
        bio: [
          'Brown, a Pensacola native living in Visalia, served in the Marine Corps from 2000 to 2013, earned degrees from Arizona State, USC (MSW) and West Texas A&M (MBA), and has worked as a clinical social worker with the state prison system since 2018, now as a contractor and private-practice therapist (KGET).',
          'A former “Never Trump” Republican, he has been a Libertarian for six years and refuses campaign donations.',
        ],
        scorecard: [
          { topic: 'Water', position: '? Not addressed', comparison: 'Magsig wants deregulation and new storage.' },
          { topic: 'Climate & energy', position: '~ Wants state regulations repealed or revised and favors markets; no energy specifics', comparison: 'Magsig wants to revisit AB 32 and expand oil drilling.' },
          { topic: 'Public safety', position: '? Not addressed', comparison: 'Magsig is endorsed by law-enforcement groups.' },
          { topic: 'Taxes', position: '✓✓ Lower taxes, free markets, fewer barriers for small business; wants AB 5 revised', comparison: 'Magsig opposes wasteful spending.' },
          { topic: 'Caucus / ideology', position: '~ Libertarian who says he would hold both parties accountable', comparison: 'Magsig would join the Republican caucus.' },
        ],
        money: 'Says he accepts no campaign donations (KGET; Tehachapi News, 2026).',
        endorsements: 'None reported (Tehachapi News, May 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', '—', '—', 'Leftward Progressives have no candidate near their views: one finalist wants to roll back climate law and the other wants to shrink government.', 'Experience-first Leftward Progressives could back Magsig, with 25 years of local office and building-trades support, but they would be electing a senator who wants to expand oil drilling and revisit AB 32.'],
      ['LL', 'Magsig', '○', 'Loyal Liberals value governing experience and labor-trades backing, which only Magsig offers, though they disagree with his climate positions.'],
      ['LO', 'Magsig / Brown', '=', 'Left-Out Left voters, who think most officials run for money, weigh distrust of donors against labor-backed results: if refusing money matters most, Brown, who takes no donations and opposed Trump, though he wants to shrink government; if a senator with union support matters more, Magsig, a 25-year local officeholder, though he wants more oil drilling.'],
      ['OO', 'Magsig', '◐', 'Order and Opportunity Left voters with no Democrat to choose value Magsig’s law-enforcement and building-trades backing and his cost-of-living focus, though his climate rollback runs against them.'],
      ['TM', 'Magsig', '○', 'Tuned-Out Middle voters focused on cost of living lean toward the better-known supervisor who promises lower costs and reliable water.'],
      ['PP', 'Magsig', '◐', 'Pragmatic and Polite Right voters favor a seasoned local official focused on water, wildfire and costs, though Brown’s Never-Trump independence appeals to some.'],
      ['UR', 'Magsig', '◐', 'Unconventional Right voters like Magsig’s push against state oil and climate rules and big government, though Brown’s libertarian, no-donations pitch has some pull.'],
      ['FC', 'Magsig', '●', 'Faith First Conservatives favor a former youth pastor and lifelong Republican endorsed by law enforcement.'],
      ['NA', 'Magsig', '●', 'No Apologies Right voters back the Republican who wants to revisit AB 32, roll back oil rules and allow fracking, over a former Never-Trump Libertarian.'],
    ]),
    counterArguments: [
      'NA (Magsig ●): But consider that Brown also promises lower taxes and smaller government and takes no donations, which some conservatives may see as more independent from interest groups.',
      'LO (Toss-up): But consider that Brown has not addressed water, public safety or energy, the issues that dominate this district.',
    ],
  },

  // ───────────────────────────── AD-8 ─────────────────────────────
  {
    id: 'assembly-ad8',
    categoryId: 'state-leg',
    title: 'State Assembly, District 8',
    tldrLabel: 'AD-8',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-8 runs from Clovis and eastern Fresno County through the Sierra foothill counties of Madera, Mariposa, Tuolumne and Calaveras to Inyo and Mono.'),
    seatContext: 'Incumbent (unopposed)',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'District 8 covers parts of Fresno and Madera counties and all or part of five mountain and eastern Sierra counties. Wildfire, forest management, rural roads and high-speed rail spending in the Valley are recurring issues.',
    ],
    introParagraphs: [
      'Republican Assemblymember David Tangipa was the only candidate in the June 2 primary (100%, 103,817 votes, certified Statement of Vote), so he is the only name on the November ballot.',
    ],
    readingLinks: [{ label: 'Secretary of State — June 2, 2026 primary Statement of Vote (Assembly)', url: SOV_ASSEMBLY, summary: 'Certified district totals.' }],
    candidates: [
      {
        id: 'david-tangipa',
        photoSlug: 'david-tangipa',
        name: 'David Tangipa',
        party: 'R',
        role: 'State Assemblymember',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assemblymember since December 2024 and Republican whip since August 2026; earlier a field representative for Supervisor Nathan Magsig.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 2, 2024; AB 377 (high-speed rail funding plan) signed in 2025 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Named Assembly Republican minority whip in August 2026 (GV Wire); committee roles not verified here.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Field representative for Fresno County Supervisor Magsig before election (Wikipedia).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'AB 377 passed both houses with bipartisan support (Wikipedia).' },
          ],
        },
        bio: [
          'Tangipa, born in 1995, played tight end at Fresno State, where he earned a political science and criminology degree and an MBA, then worked as a field representative for Supervisor Nathan Magsig. He beat former Rep. George Radanovich 53.7% to 46.3% in 2024 and wrote AB 377, requiring a funding plan for the Merced–Bakersfield high-speed rail segment.',
        ],
        scorecard: [
          { topic: 'Transit', position: '✓ AB 377 requires a detailed Merced–Bakersfield high-speed rail funding plan', comparison: 'Unopposed.' },
          { topic: 'Caucus / ideology', position: '✓ Republican; named minority whip by Leader Macedo in Aug 2026', comparison: 'Unopposed.' },
        ],
        money: CAL_ACCESS,
      },
    ],
    crossTypology: ct([
      ['LP', '—', '—', 'Leftward Progressives have no candidate who shares their views; a blank or write-in protest fits.'],
      ['LL', 'Tangipa', '○', 'Loyal Liberals may accept the only sitting officeholder on the ballot, whose high-speed rail funding-plan law passed with bipartisan votes.'],
      ['LO', '—', '—', 'Left-Out Left voters have no candidate near their views and may skip the race.'],
      ['OO', 'Tangipa', '○', 'Order and Opportunity Left voters face no choice and may accept the incumbent as the only name on the ballot.'],
      ['TM', 'Tangipa', '○', 'Tuned-Out Middle voters face no choice; the incumbent is the default.'],
      ['PP', 'Tangipa', '●', 'Pragmatic and Polite Right voters back a Republican who passed a bipartisan bill demanding a funding plan for high-speed rail.'],
      ['UR', 'Tangipa', '●', 'Unconventional Right voters like Tangipa’s scrutiny of high-speed rail spending.'],
      ['FC', 'Tangipa', '●', 'Faith First Conservatives back the Republican incumbent.'],
      ['NA', 'Tangipa', '●', 'No Apologies Right voters back the Republican whip who fights high-speed rail spending.'],
    ]),
    counterArguments: ['LP (—): But consider that Tangipa wins regardless, so a blank vote only lowers his margin; it does not change the outcome.'],
  },

  // ───────────────────────────── AD-31 ─────────────────────────────
  {
    id: 'assembly-ad31',
    categoryId: 'state-leg',
    title: 'State Assembly, District 31',
    tldrLabel: 'AD-31',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-31 covers much of the city of Fresno and nearby Fresno County communities, with high poverty, air-quality and housing-cost pressures.'),
    seatContext: 'Open (Arambula not running)',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'District 31 lies in Fresno County and is 45% Democratic and 23% Republican by registration. Assemblymember Joaquin Arambula chose to run for Fresno City Council rather than challenge term limits in court (GV Wire). Housing costs, public safety and Fresno’s share of state money are the main issues.',
    ],
    introParagraphs: [
      'In the June 2 primary Fresno City Councilmember Annalisa Perea (D) took 44.6%, retired engineering technician Jim Polsgrove (R) 34.4% and progressive Democrat Sandra Celedon 21.0% (certified Statement of Vote). A Republican-led PAC attacked Celedon before the primary. Perea is favored; the question is whether Celedon’s voters turn out for her.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote (Assembly)', url: SOV_ASSEMBLY, summary: 'Certified district totals.' },
      { label: 'GV Wire — Perea will face Polsgrove (June 3, 2026)', url: 'https://gvwire.com/2026/06/03/perea-vanquishes-dem-rival-will-face-gops-polsgrove-in-runoff/', summary: 'Primary-night report, including the PAC that attacked Celedon.' },
      { label: 'The Ballot Brief — Assembly District 31', url: 'https://theballotbrief.com/state/california/fresno-county/california-assembly-district-31', summary: 'Neutral roster page with both finalists’ backgrounds and priorities.' },
    ],
    candidates: [
      {
        id: 'annalisa-perea',
        name: 'Annalisa Perea',
        party: 'D',
        role: 'City Councilmember/Mother',
        campaignUrl: 'https://www.pereaforassembly.com/',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Fresno City Councilmember since 2022, including a term as council president, after serving on the State Center Community College board; a certified city planner.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Local ordinances as a Fresno councilmember since 2022; certified city planner with CEQA expertise (SJV Sun).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'As council president negotiated a new tax-sharing agreement with Fresno County (SJV Sun).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Represents a Fresno council district; earlier State Center Community College trustee (SJV Sun).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Endorsed by Sen. Anna Caballero, Asm. Esmeralda Soria and area building trades (SJV Sun, 2025).' },
          ],
        },
        bio: [
          'Perea served on the State Center Community College board before winning a Fresno City Council seat in 2022, succeeding Esmeralda Soria. A certified city planner, she negotiated a tax-sharing agreement with Fresno County as council president (SJV Sun).',
          'She says she will focus on rising costs, violent crime and the needs of working families and seniors.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Lists housing affordability as a top priority; planning and CEQA background', comparison: 'Polsgrove has not published a housing plan.' },
          { topic: 'Public safety', position: '✓ Names violent crime as a focus', comparison: 'Polsgrove wants tougher laws to hold criminals accountable.' },
          { topic: 'Taxes', position: '~ No tax-cut pledge; negotiated city–county tax sharing', comparison: 'Polsgrove wants lower taxes and less state debt.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat backed by party officials and building trades', comparison: 'Polsgrove is a conservative Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Sen. Anna Caballero, Asm. Esmeralda Soria, Supervisor Luis Chavez, Fresno-area Building and Construction Trades Council (SJV Sun, Apr 2025).',
      },
      {
        id: 'jim-polsgrove',
        name: 'Jim Polsgrove',
        party: 'R',
        role: 'Retired Engineering Technician',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'A Fresno native with 39 years of local-government engineering work and no elected or policy experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative or policy-office experience found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No budget or committee experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'About 31 years in City of Fresno engineering roles, later Fresno County utility coordinator (The Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of legislative coalition work found.' },
          ],
        },
        bio: [
          'Polsgrove, a Fresno native, spent 39 years in civil service, starting at the Fresno Metropolitan Flood Control District, then about 31 years in City of Fresno engineering roles up to supervising engineering technician, and later Fresno County utility coordinator (The Ballot Brief). His campaign was bare-bones in the primary (GV Wire).',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? No housing plan published', comparison: 'Perea lists housing affordability first.' },
          { topic: 'Public safety', position: '✓✓ Tougher laws to hold criminals accountable', comparison: 'Perea also names violent crime as a focus.' },
          { topic: 'Taxes', position: '✓✓ Reduce state debt and lower taxes', comparison: 'Perea has no tax-cut pledge.' },
          { topic: 'Caucus / ideology', position: '✓ Conservative; stresses constitutional rights', comparison: 'Perea is a mainstream Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'None verified; a PAC headed by Republican Solomon Verduzco advertised “Yes on Polsgrove” while attacking Celedon (GV Wire, June 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Perea', '◐', 'Leftward Progressives preferred Celedon, but Perea, a Democrat focused on housing and working families, is far closer to their views than Polsgrove.'],
      ['LL', 'Perea', '●', 'Loyal Liberals value Perea’s council leadership, planning expertise and broad institutional support.'],
      ['LO', 'Perea', '○', 'Left-Out Left voters see Perea as the establishment choice who beat the progressive outsider, but Perea’s focus on costs and working families beats a Republican on their priorities.'],
      ['OO', 'Perea', '●', 'Order and Opportunity Left voters want both cost relief and safety, and Perea names rising costs, violent crime and working families as her focus.'],
      ['TM', 'Perea', '○', 'Tuned-Out Middle voters worried about costs lean to the better-known local official with a housing focus.'],
      ['PP', 'Perea', '○', 'Pragmatic and Polite Right voters weigh competence over party and may favor a council president with planning expertise over a bare-bones campaign.'],
      ['UR', 'Polsgrove', '◐', 'Unconventional Right voters favor a non-politician promising tougher criminal laws, less state debt and lower taxes.', 'Experience-first Unconventional Right voters could back Perea, a council president who negotiated city–county tax sharing; they give up a vote for lower taxes.'],
      ['FC', 'Polsgrove', '◐', 'Faith First Conservatives support the Republican who stresses constitutional rights and tough crime laws, though Polsgrove says little on faith and family issues.', 'Experience-first Faith First Conservatives could back Perea, who has city budget and planning experience; it is a cross-party vote for a Democrat.'],
      ['NA', 'Polsgrove', '●', 'No Apologies Right voters back the Republican on lower taxes, state debt and tougher criminal laws.'],
    ]),
    counterArguments: [
      'NA (Polsgrove ●): But consider that Polsgrove has no policy experience and ran a minimal campaign, while Perea has city budget and planning experience.',
      'LP (Perea ◐): But consider that a Republican-led PAC helped defeat the progressive candidate, and Perea’s agenda is more moderate than Celedon’s.',
    ],
  },

  // ───────────────────────────── AD-32 ─────────────────────────────
  {
    id: 'assembly-ad32',
    categoryId: 'state-leg',
    title: 'State Assembly, District 32',
    tldrLabel: 'AD-32',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-32 covers parts of Kern and Tulare counties, including much of Bakersfield and greater Tehachapi, where oil and agriculture anchor the economy.'),
    seatContext: 'Open (unopposed)',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'District 32 covers parts of Kern and Tulare counties. Republican Stan Ellis announced in September 2025 that he would not seek reelection and endorsed Kern County Supervisor David Couch. Oil permitting and state business regulation are the leading local issues.',
    ],
    introParagraphs: [
      'Couch was the only candidate in the June 2 primary (100%, 90,040 votes, certified Statement of Vote), so he is the only name on the November ballot.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote (Assembly)', url: SOV_ASSEMBLY, summary: 'Certified district totals.' },
      { label: 'Tehachapi News — Running unopposed, Couch says he’s ready for Sacramento (May 2026)', url: 'https://www.tehachapinews.com/news/running-unopposed-couch-says-hes-ready-for-sacramento/article_2a748726-6f5c-5ca2-9946-0a9984e70913.html', summary: 'His priorities on oil permits, agriculture and business regulation.' },
    ],
    candidates: [
      {
        id: 'david-couch',
        name: 'David Couch',
        party: 'R',
        role: 'Kern County Supervisor',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Bakersfield City Council 1999–2013 and Kern County supervisor since 2013; no state legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Local ordinance-making on Bakersfield council and Kern Board of Supervisors (Tehachapi News).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Votes on Kern County’s budget as supervisor since 2013 (Tehachapi News).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'About 27 years in Bakersfield and Kern elected office (Tehachapi News).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No state legislative record yet.' },
          ],
        },
        bio: [
          'Couch, a longtime businessman, served on the Bakersfield City Council from 1999 to 2013 and has been a Kern County supervisor since 2013. He wants Kern’s SB 237 oil-permit allowance made permanent and statewide and criticizes state rules such as the clean truck check program (Tehachapi News).',
        ],
        scorecard: [
          { topic: 'Climate & energy', position: '✗ Wants SB 237’s Kern oil-permit allowance made permanent and statewide', comparison: 'Unopposed.' },
          { topic: 'Caucus / ideology', position: '✓ Republican endorsed by retiring Asm. Stan Ellis', comparison: 'Unopposed.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Asm. Stan Ellis (Tehachapi News, 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', '—', '—', 'Leftward Progressives oppose expanding oil drilling and have no candidate near their views.'],
      ['LL', 'Couch', '○', 'Loyal Liberals may accept an experienced county official as the only name on the ballot, though they disagree with his oil-permit push.'],
      ['LO', '—', '—', 'Left-Out Left voters have no candidate near their views and may skip the race.'],
      ['OO', 'Couch', '○', 'Order and Opportunity Left voters face no choice and may accept a longtime local official focused on oil and farm jobs.'],
      ['TM', 'Couch', '○', 'Tuned-Out Middle voters face no choice; the experienced local official is the default.'],
      ['PP', 'Couch', '●', 'Pragmatic and Polite Right voters value a seasoned local official focused on jobs in oil and agriculture.'],
      ['UR', 'Couch', '●', 'Unconventional Right voters like Couch’s fight against state oil and trucking rules.'],
      ['FC', 'Couch', '●', 'Faith First Conservatives back the Republican nominee who wants lighter state regulation.'],
      ['NA', 'Couch', '●', 'No Apologies Right voters back a Republican who wants oil permitting eased statewide and attacks state trucking rules.'],
    ]),
    counterArguments: ['LP (—): But consider that Couch wins regardless, so a blank vote only lowers his margin; it does not change the outcome.'],
  },

  // ───────────────────────────── AD-33 ─────────────────────────────
  {
    id: 'assembly-ad33',
    categoryId: 'state-leg',
    title: 'State Assembly, District 33',
    tldrLabel: 'AD-33',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-33 covers parts of Tulare, Kings and Fresno counties, including Visalia, Tulare and farm towns such as Lindsay.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'District 33 covers parts of Tulare, Kings and Fresno counties. Its incumbent, Alexandra Macedo, became Assembly Republican leader in August 2026, so the seat carries unusual statewide weight. Water, dairy and farm regulation and high-speed rail are the main issues.',
    ],
    introParagraphs: [
      'In the June 2 primary Macedo (R) took 61.2% and former Lindsay mayor Hipolito Cerros (D) 38.8% (certified Statement of Vote). No public polling is available; Macedo is a heavy favorite, and the race mainly tests the size of her margin as she leads the Republican caucus.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote (Assembly)', url: SOV_ASSEMBLY, summary: 'Certified district totals.' },
      { label: 'GV Wire — Republicans make Macedo their Assembly leader (Aug 3, 2026)', url: 'https://gvwire.com/2026/08/03/republicans-make-macedo-their-california-assembly-leader/', summary: 'How Macedo replaced Heath Flora as Republican leader.' },
    ],
    candidates: [
      {
        id: 'alexandra-macedo',
        photoSlug: 'alexandra-macedo',
        name: 'Alexandra Macedo',
        party: 'R',
        role: 'Cattlewoman/Business Owner',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assemblymember since December 2024 and Assembly Republican leader since August 2026; earlier ran agricultural and environmental consulting firms.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 2, 2024 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Vice chair of Judiciary and of Privacy and Consumer Protection (The Ballot Brief, from the Assembly roster); Republican leader since Aug 3, 2026 (GV Wire).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Tulare native from a farm family; father was Tulare mayor (Wikipedia).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Won the caucus leader vote; no signed bills verified here.' },
          ],
        },
        bio: [
          'Macedo, born in Tulare in 1994 to a Portuguese-American farm family, has a law degree from San Joaquin College of Law and runs agricultural and environmental consulting firms. She won the seat in 2024 with 62.9% and on Aug 3, 2026 replaced Heath Flora as Assembly Republican leader, naming David Tangipa whip (Wikipedia; GV Wire).',
          'She has led efforts to stop high-speed rail.',
        ],
        recordVsChange:
          'Re-electing Macedo keeps the sitting Assembly Republican leader and her voice in budget talks; Cerros offers a Democratic seat in the majority caucus but with only small-city experience.',
        scorecard: [
          { topic: 'Housing & transit', position: '✗ Leads efforts to stop high-speed rail', comparison: 'Cerros focuses on local street and park funding.' },
          { topic: 'Climate & water', position: '~ Environmental-compliance consultant to dairies and farms; favors fewer state mandates', comparison: 'Cerros stresses water-infrastructure funding.' },
          { topic: 'Taxes', position: '✓ Cost of living and accountability for state bureaucrats are caucus priorities', comparison: 'Cerros has no stated tax position.' },
          { topic: 'Caucus / ideology', position: '✓✓ Assembly Republican leader', comparison: 'Cerros would join the Democratic majority.' },
        ],
        money: CAL_ACCESS,
      },
      {
        id: 'hipolito-cerros',
        name: 'Hipolito Angel Cerros',
        party: 'D',
        role: 'Public Policy Fellow',
        campaignUrl: 'https://hipolitocerros.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Lindsay city councilmember and former mayor; no state or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'City council votes in Lindsay, a small Tulare County city (campaign site; Sun Gazette).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Says he secured funding for public safety, water, parks and streets as mayor (campaign site).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Born and raised in Lindsay (campaign site).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record; his council colleagues replaced him as mayor in Feb 2024 (Sun Gazette).' },
          ],
        },
        bio: [
          'Cerros, a first-generation UC Davis graduate born and raised in Lindsay, served on the Lindsay City Council and as mayor. He says he worked across party lines to fund public safety, water infrastructure, parks and streets (campaign site).',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Street and park improvements', comparison: 'Macedo opposes high-speed rail.' },
          { topic: 'Climate & water', position: '✓ Water-infrastructure funding for small towns', comparison: 'Macedo favors fewer state mandates on farms.' },
          { topic: 'Taxes', position: '? Not addressed', comparison: 'Macedo stresses cost of living.' },
          { topic: 'Caucus / ideology', position: '~ Democrat who stresses working across party lines', comparison: 'Macedo leads the Republican caucus.' },
        ],
        money: CAL_ACCESS,
        notes: [
          'In February 2024 the Lindsay council voted 3-0-2 to replace him as mayor, citing inexperience, overstepping with staff and possible Brown Act concerns; he said he accepted the decision and remained on the council (Sun Gazette): https://thesungazette.com/?p=105203',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Cerros', '●', 'Leftward Progressives back the Democrat focused on small-town water and park funding over the Republican leader who wants fewer state mandates on farms.'],
      ['LL', 'Cerros', '○', 'Loyal Liberals share Cerros’s party, though Cerros’s removal as mayor and thin record weaken the case.', 'Experience-first Loyal Liberals could back Macedo, a sitting member now leading her caucus in budget talks; it is a cross-party vote for a high-speed rail opponent.'],
      ['LO', 'Cerros', '◐', 'Left-Out Left voters like a young, first-generation small-town leader focused on water and streets, though his own council removed him as mayor.', 'Experience-first Left-Out Left voters could back Macedo, the sitting Republican leader with a voice in budget talks; it is a cross-party vote that gives up a working-class outsider.'],
      ['OO', 'Macedo / Cerros', '=', 'Order and Opportunity Left voters weigh steady, competent representation against party and local help: if experience matters most, Macedo, the well-known incumbent focused on costs, given that Lindsay’s council removed Cerros as mayor citing inexperience; if a Democrat focused on small-town water and park funding matters more, Cerros.'],
      ['TM', 'Macedo', '○', 'Tuned-Out Middle voters lean to the well-known incumbent from a local farm family who stresses cost of living.'],
      ['PP', 'Macedo', '◐', 'Pragmatic and Polite Right voters value a law-trained farm-country leader now heading the Republican caucus, though Macedo has served under two years.'],
      ['UR', 'Macedo', '●', 'Unconventional Right voters like Macedo’s fight against high-speed rail and Sacramento bureaucrats.'],
      ['FC', 'Macedo', '●', 'Faith First Conservatives back the Republican incumbent and caucus leader.'],
      ['NA', 'Macedo', '●', 'No Apologies Right voters back the Assembly Republican leader who fights high-speed rail and state farm mandates.'],
    ]),
    counterArguments: [
      'LP (Cerros ●): But consider that Cerros’s own council removed him as mayor in 2024, and he would be a junior member with little clout.',
      'UR (Macedo ●): But consider that Macedo has served less than two years and her signature fight, stopping high-speed rail, has not yet produced results.',
    ],
  },

  // ───────────────────────────── AD-35 ─────────────────────────────
  {
    id: 'assembly-ad35',
    categoryId: 'state-leg',
    title: 'State Assembly, District 35',
    tldrLabel: 'AD-35',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-35 covers just over half of Bakersfield plus Lamont, Arvin, McFarland and other Kern County farm towns.'),
    seatContext: 'Open (Bains running for Congress)',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'District 35, in Kern County, is 44% Democratic and 25% Republican by registration. Democrat Jasmeet Bains left to run for Congress. Jobs, homelessness, public safety and Kern’s share of state money are the main issues.',
    ],
    introParagraphs: [
      'The June 2 primary was a near tie: Bakersfield Councilmember Andrae Gonzales (D) took 18,338 votes and McFarland Mayor Saul Ayon (R) 18,299, both 36.7%, with Democrat Ana Palacio at 26.6% (certified Statement of Vote). Democrats combined for 63%; November turns on whether Palacio voters back Gonzales.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote (Assembly)', url: SOV_ASSEMBLY, summary: 'Certified district totals.' },
      { label: 'KGET — 2026 Assembly District 35 candidate questionnaire', url: 'https://www.kget.com/news/politics/your-local-elections/2026-california-assembly-district-35-candidate-questionnaire/amp/', summary: 'Each candidate’s background and philosophy in their own words.' },
    ],
    candidates: [
      {
        id: 'andrae-gonzales',
        name: 'Andrae Gonzales',
        party: 'D',
        role: 'Councilmember/Nonprofit Director',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Bakersfield Ward 2 councilmember since 2016 and former city school board trustee; runs a nonprofit.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'City ordinances as councilmember since 2016; earlier Bakersfield City School District trustee (KGET).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on Bakersfield’s budget; helped launch the city’s community land trust (KGET).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'East Bakersfield native representing downtown Ward 2 (KGET).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Small-business programs through B3K and Bakersfield College partnerships (KGET).' },
          ],
        },
        bio: [
          'Gonzales, an East Bakersfield native and UC Berkeley graduate, founded Faith in Action Kern County (2006–2010) and has led the nonprofit Stewards since 2010. He was a Bakersfield City School District trustee and has represented downtown Ward 2 on the city council since 2016 (KGET).',
          'He wants Kern to get more state resources and backs first-time homebuyer help, vocational training and fewer unnecessary business regulations.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ First-time homebuyer policies; helped launch a community land trust', comparison: 'Ayon has not addressed housing.' },
          { topic: 'Education', position: '✓ Career and technical education and apprenticeships', comparison: 'Ayon, a high school teacher, also backs vocational training.' },
          { topic: 'Public safety', position: '~ Wants safer neighborhoods; focus on homelessness', comparison: 'Ayon, a 25-year deputy, is strongly pro-law enforcement.' },
          { topic: 'Taxes', position: '~ Wants a more business-friendly state; no tax pledge', comparison: 'Ayon opposes raising taxes to balance budgets.' },
          { topic: 'Caucus / ideology', position: '✓ Business-friendly Democrat', comparison: 'Ayon is a Republican who stresses local control.' },
        ],
        money: CAL_ACCESS,
      },
      {
        id: 'saul-ayon',
        name: 'Saul Ayon',
        party: 'R',
        role: 'Mayor/Teacher',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'McFarland mayor since 2022 after two years on its council, following nearly 25 years with the Kern County Sheriff’s Office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'McFarland City Council 2020–2022, mayor since 2022 (KGET).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Says he eliminated a $2.9 million city deficit without raising taxes (KGET).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Lifelong McFarland resident; nearly 25 years with the Kern County Sheriff (KGET).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No state legislative record.' },
          ],
        },
        bio: [
          'Ayon, a lifelong McFarland resident, spent nearly 25 years with the Kern County Sheriff’s Office and has taught criminal justice at McFarland High School since 2021. He joined the city council in 2020 and has been mayor since 2022 (KGET; BakersfieldNow).',
          'He calls his approach “firm but fair” and says he closed a $2.9 million city deficit without new taxes.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? Not addressed', comparison: 'Gonzales backs first-time homebuyer help.' },
          { topic: 'Education', position: '✓ Expand vocational training', comparison: 'Gonzales also backs career-technical education.' },
          { topic: 'Public safety', position: '✓✓ Strongly pro-law enforcement; former deputy', comparison: 'Gonzales focuses on homelessness and safer neighborhoods.' },
          { topic: 'Taxes', position: '✓✓ Opposes tax increases; wants audits and transparency', comparison: 'Gonzales has no tax pledge.' },
          { topic: 'Caucus / ideology', position: '✓ Republican; local control over state mandates', comparison: 'Gonzales would join the Democratic majority.' },
        ],
        money: CAL_ACCESS,
      },
    ],
    crossTypology: ct([
      ['LP', 'Gonzales', '◐', 'Leftward Progressives preferred Palacio’s Medi-Cal focus, but Gonzales’s community land trust and organizing roots beat a Republican.'],
      ['LL', 'Gonzales', '●', 'Loyal Liberals value a decade on the city council and a pragmatic Democratic agenda on homeownership and job training.'],
      ['LO', 'Gonzales', '◐', 'Left-Out Left voters may see Gonzales as a downtown insider, but his first-time homebuyer help and community-organizing roots offer working families more than the Republican.'],
      ['OO', 'Gonzales', '◐', 'Order and Opportunity Left voters want opportunity, and Gonzales offers homebuyer help and apprenticeships, though Ayon’s 25 years as a deputy speak to their wish for order.'],
      ['TM', 'Gonzales / Ayon', '=', 'Tuned-Out Middle voters weigh tax restraint against help getting ahead: if avoiding new taxes matters most, Ayon, the mayor who closed a deficit without raising them; if first-time homebuyer help and apprenticeships matter more, Gonzales.'],
      ['PP', 'Ayon', '◐', 'Pragmatic and Polite Right voters like a “firm but fair” small-town mayor who balanced the books without tax hikes, though Gonzales is a business-friendly Democrat with more years in office.'],
      ['UR', 'Ayon', '●', 'Unconventional Right voters favor a law-enforcement veteran who opposes tax increases and pushes local control over Sacramento mandates.'],
      ['FC', 'Ayon', '◐', 'Faith First Conservatives back a former sheriff’s deputy running as a Republican, though Ayon campaigns on taxes and policing rather than faith and family issues.'],
      ['NA', 'Ayon', '●', 'No Apologies Right voters back the Republican on no new taxes, audits and strong policing.'],
    ]),
    counterArguments: [
      'UR (Ayon ●): But consider that Gonzales also backs fewer business regulations and vocational training, and has more years of budget experience.',
      'LL (Gonzales ●): But consider that Ayon’s deficit work in McFarland and long law-enforcement career give him real executive experience.',
    ],
  },

  // ───────────────────────────── 5th DCA retention ─────────────────────────────
  {
    id: 'retention-dca5',
    categoryId: 'judicial',
    title: 'Court of Appeal, 5th District — retention',
    tldrLabel: 'Appeals Court, 5th Dist.',
    seatContext: 'Retention (Yes/No)',
    kind: 'retention',
    candidates: [],
    stakesParagraphs: [
      'For each justice you vote Yes or No on a 12-year term (or the rest of a predecessor’s term). A majority No creates a vacancy the governor fills, subject to the Commission on Judicial Appointments. New appointees Guerra and Sandhu need voter confirmation to start a term in January 2027.',
      'The Fresno-based 5th District hears appeals from Fresno, Kern, Kings, Madera, Mariposa, Merced, Stanislaus, Tulare and Tuolumne counties. For most criminal, civil, family and water cases its decision is final, and its published opinions bind trial courts statewide.',
    ],
    introParagraphs: [
      'Six justices are on the ballot: Meehan, Snauffer and DeSantos (Brown appointees retained in 2018) and Newsom appointees Harrell (2025), Guerra and Sandhu (2026). No Commission on Judicial Performance public discipline or organized “vote no” campaign was found for any of them.',
    ],
    readingLinks: [{ label: 'Secretary of State — list of judicial retention contests (Aug 24, 2026)', url: JUDICIAL_LIST, summary: 'Certified list of every justice on the Nov 3 ballot.' }],
    retention: {
      justices: [
        {
          name: 'Kathleen A. Meehan',
          court: 'Court of Appeal, 5th District',
          title: 'Associate Justice',
          appointedBy: 'Governor Brown (2017)',
          notes: [
            'A securities and business litigator in Los Angeles and later a shareholder at Fresno’s Baker, Manock & Jensen, she represented public agencies at the state Attorney General’s office (2008), became a Fresno Superior Court commissioner (2011) and judge (2014), and was confirmed to the court Feb 9, 2017. She was on the 2018 retention ballot.',
          ],
          sources: [
            { label: 'Court of Appeal bio', url: `${FIFTH_DCA}/kathleen-meehan` },
            { label: 'Tuolumne County election history (2018)', url: 'https://electionhistory.tuolumnecounty.ca.gov/eng/candidates/view/Kathleen-A-Meehan' },
          ],
        },
        {
          name: 'Mark W. Snauffer',
          court: 'Court of Appeal, 5th District',
          title: 'Associate Justice',
          appointedBy: 'Governor Brown (2018)',
          notes: [
            'A civil litigator in Fresno and Sacramento for over 20 years, mostly at Baker, Manock & Jensen (1982–2000), he was a Fresno Superior Court judge from 2000 and was confirmed to the court July 26, 2018. He was on the 2018 retention ballot.',
          ],
          sources: [
            { label: 'Court of Appeal bio', url: `${FIFTH_DCA}/mark-w-snauffer` },
            { label: 'Tuolumne County election history (2018)', url: 'https://electionhistory.tuolumnecounty.ca.gov/eng/candidates/view/Mark-W-Snauffer' },
          ],
        },
        {
          name: 'Thomas DeSantos',
          court: 'Court of Appeal, 5th District',
          title: 'Associate Justice',
          appointedBy: 'Governor Brown (2018)',
          notes: [
            'A Hanford lawyer in private practice from 1981 to 2003, he was appointed to the Kings County Superior Court by Gov. Gray Davis in 2003 and served as its presiding judge (2012–2014). Confirmed to the court July 26, 2018; on the 2018 retention ballot.',
          ],
          sources: [
            { label: 'Court of Appeal bio', url: `${FIFTH_DCA}/thomas-desantos` },
            { label: 'Tuolumne County election history (2018)', url: 'https://electionhistory.tuolumnecounty.ca.gov/eng/candidates/view/Thomas-Desantos' },
          ],
        },
        {
          name: 'Arlan L. Harrell',
          court: 'Court of Appeal, 5th District',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2025)',
          notes: [
            'A Fresno County deputy district attorney (1994–2003), court commissioner (2003–2006) and Superior Court judge from 2006 (appointed by Gov. Schwarzenegger), including presiding judge 2020–2022. Nominated Aug 2025 to replace retiring Justice Charles Poochigian; confirmed Nov 17, 2025. First retention vote.',
          ],
          sources: [
            { label: 'Court of Appeal bio', url: `${FIFTH_DCA}/arlan-l-harrell` },
            { label: 'Governor’s Aug 7, 2025 appointments', url: 'https://www.gov.ca.gov/2025/08/07/governor-newsom-announces-judicial-appointments-8-7-25/' },
          ],
        },
        {
          name: 'Amy K. Guerra',
          court: 'Court of Appeal, 5th District',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2026)',
          notes: [
            'A former AmeriCorps VISTA member, she worked at the Fresno County Alternate Defense Office from 2007, as chief defense attorney 2014–2018, then was a Fresno Superior Court judge from 2018. Nominated Feb 2026 to replace retiring Justice Bruce Smith; confirmed May 22, 2026. First retention vote.',
          ],
          sources: [
            { label: 'Court of Appeal bio', url: `${FIFTH_DCA}/amy-k-guerra` },
            { label: 'Commission confirms five appointments (May 2026)', url: 'https://newsroom.courts.ca.gov/news/commission-confirms-five-appointments-courts-appeal-0' },
          ],
        },
        {
          name: 'Sonny S. Sandhu',
          court: 'Court of Appeal, 5th District',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2026)',
          notes: [
            'A Stanislaus County deputy public defender from 2003, then chief deputy and Public Defender (2017–2018), he became a Stanislaus Superior Court judge in 2018 and its presiding judge in 2025. Nominated June 2, 2026 to replace retiring Justice Rosendo Peña Jr.; confirmed Aug 6, 2026. First retention vote.',
          ],
          sources: [
            { label: 'Court of Appeal bio', url: `${FIFTH_DCA}/sonny-s-sandhu` },
            { label: 'Governor’s June 2, 2026 appointments', url: 'https://www.gov.ca.gov/2026/06/02/governor-newsom-announces-judicial-appointments-6-2-2026/' },
          ],
        },
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes on all', '◐', 'Leftward Progressives generally retain qualified justices, and nothing on the public record argues against these six.'],
      ['LL', 'Yes on all', '●', 'Loyal Liberals treat retention as a fitness check by vetted institutions, and every justice here passes on the public record.'],
      ['LO', 'Yes on all', '○', 'Left-Out Left voters distrust insiders, but with no discipline or documented problem a Yes is the defensible default.'],
      ['OO', 'Yes on all', '◐', 'Order and Opportunity Left voters respect authority and stable courts, and no discipline or organized opposition was found for any justice.'],
      ['TM', 'Yes on all', '○', 'Tuned-Out Middle voters rarely know appellate judges; nothing on record distinguishes these six, so retention is the default.'],
      ['PP', 'Yes on all', '●', 'Pragmatic and Polite Right voters value the rule of law and stable courts, and each justice has a long trial-court career with no sourced misconduct.'],
      ['UR', 'Yes on all', '○', 'Unconventional Right voters see no scandal, and half the bench was appointed by Gov. Brown after long local trial-court careers.'],
      ['FC', 'Yes on all', '○', 'Faith First Conservatives value law and order and see no documented misconduct, though some may hesitate over appointees of a governor they oppose.'],
      ['NA', 'No on all', '○', 'No Apologies Right voters distrust institutional authority and governor-appointed officials and may cast a protest No; this reflects that distrust, not any finding about a justice.'],
    ]),
    counterArguments: [
      'NA (No on all ○): But consider that a No vote only hands the governor a vacancy to fill, because nothing on record shows misconduct by any of these justices.',
      'TM (Yes on all ○): But consider that Guerra and Sandhu have almost no appellate record yet, because both joined the court in 2026, so a voter wanting more evidence could reasonably skip those two lines.',
    ],
  },
];
