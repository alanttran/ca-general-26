import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Long Beach / Orange County district races: CA-42, CA-45, CA-47 (Prop 50 map), SD-36,
 * AD-59, AD-67, AD-70, AD-72, AD-73, AD-74. Finalists from the Secretary of State’s Certified List of
 * Candidates (Aug 27, 2026); primary shares from the June 2, 2026 Statement of Vote. Research as of Oct 9, 2026.
 */

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
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const ASSEMBLY_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
  { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const FEC_NOTE = 'No verified FEC totals gathered for this guide; see https://www.fec.gov/data/ for current filings.';
const CAL_ACCESS = 'No verified current filing totals; see Cal-Access at https://cal-access.sos.ca.gov/.';
const NONE_VERIFIED = 'No endorsement list verified as of Oct 9, 2026.';


const ASM_STAKES_1 =
  'Assembly members vote on the state budget, housing and land-use law, energy and utility rules, public safety and school funding, and serve two-year terms within a 12-year legislative limit.';

export const RACES_D_LA_OC: Race[] = [
  // ───────────────────────────── CA-42 ─────────────────────────────
  {
    id: 'us-rep-ca42',
    categoryId: 'federal',
    title: 'U.S. Representative, 42nd District',
    tldrLabel: 'CA-42',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense and infrastructure spending, and oversight of the executive branch, and runs a casework office for help with federal agencies.',
      'Under Proposition 50 the 42nd keeps all of Long Beach but drops southeast Los Angeles County cities and adds Huntington Beach and Newport Beach; CalMatters reported a Democratic registration edge of about 10 points. Garcia is the top Democrat on House Oversight.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Robert Garcia took 56.5%, Republican Brian Burley 20.6% and Republican Noah Von Blom 16.8%, with two others splitting the rest (Statement of Vote). The race turns on whether the new Orange County coast, with its Republican-led cities, narrows Garcia’s margin. No public general-election polling was found.',
    ],
    readingLinks: [
      { label: 'CalMatters — Prop 50 would move Garcia into Orange County (Oct 2025)', url: 'https://calmatters.org/politics/2025/10/robert-garcia-proposition-50/', summary: 'How the redrawn 42nd adds Huntington Beach and Newport Beach, and local reaction.' },
      { label: 'The Ballot Brief — CA-42', url: 'https://theballotbrief.com/district/ca-42', summary: 'Neutral roster with short candidate backgrounds.' },
    ],
    candidates: [
      {
        id: 'robert-garcia',
        name: 'Robert Garcia',
        party: 'D',
        role: 'United States Congressman',
        campaignUrl: 'https://robertgarcia.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since January 2023 and ranking Democrat on the Oversight Committee since 2025, after eight years as Long Beach mayor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. representative since Jan 3, 2023; co-sponsored the Stop Ballroom Bribery Act and sponsored an LGBTQ+ rights envoy bill (Nov 2025).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Ranking member, Oversight and Government Reform (2025–); member, Transportation and Infrastructure.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Long Beach councilmember 2009–2014 and mayor 2014–2022; new Orange County areas are less familiar territory.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Helped lead the 311–114 vote to expel Rep. George Santos (Dec 2023); serves in the minority.' },
          ],
        },
        bio: [
          'Garcia, a CSU Long Beach graduate with a doctorate in education, founded the Long Beach Post and taught at local colleges. He won a Long Beach council seat in 2009, served as mayor from 2014 to 2022, and was elected to Congress in 2022.',
          'He became the top Democrat on the House Oversight Committee in 2025 and would likely chair it if Democrats win the House (CalMatters).',
        ],
        recordVsChange:
          'Garcia holds the Oversight ranking-member post, which would likely become a chairmanship in a Democratic House; replacing him trades that seniority for a first-time Republican aligned with the new coastal cities.',
        scorecard: [
          { topic: 'Trump/House majority', position: '✓✓ Leads Democratic oversight of the Trump administration; would likely chair Oversight in a Democratic House', comparison: 'Burley would add a Republican vote to the House majority.' },
          { topic: 'Immigration', position: '✗ Called for abolishing ICE after a fatal Minneapolis shooting (Jan 2026)', comparison: 'Burley has not published an immigration platform.' },
          { topic: 'Ethics & accountability', position: '✓ Co-sponsored the Stop Ballroom Bribery Act on White House construction donations (Nov 2025)', comparison: 'Burley pitches himself as a steward of taxpayer dollars.' },
          { topic: 'District clout', position: '✓✓ Former eight-year Long Beach mayor; ranking committee member', comparison: 'Burley is a first-term Huntington Beach school trustee.' },
        ],
        money: FEC_NOTE,
        endorsements: NONE_VERIFIED,
        notes: [
          'In February 2025 he received a Justice Department letter over a remark that Democrats should “bring actual weapons” to a fight over Elon Musk’s influence; he said no reasonable person would read it as a threat (Wikipedia summary of news reports).',
        ],
      },
      {
        id: 'brian-burley',
        name: 'Brian Burley',
        party: 'R',
        role: 'Trustee, Huntington Beach City School District',
        campaignUrl: 'https://burley4congress.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Huntington Beach City School District trustee since 2025 and a USC IT systems administrator; no legislative experience found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative or policy-drafting record found.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'School board member (Area 1) since 2025, a district-budget role (BallotReady).' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Elected locally in Huntington Beach; no Long Beach record found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of passing legislation.' },
          ],
        },
        bio: [
          'Burley holds a USC political-economy degree (2016), works as a systems administrator at USC’s school of social work, and owns two small technology firms, per BallotReady. He won a Huntington Beach City School District seat in 2024.',
          'His campaign stresses safe neighborhoods, quality schools, parents’ voices and careful use of taxpayer money.',
        ],
        scorecard: [
          { topic: 'Trump/House majority', position: '✓ Would add a Republican vote to the House majority', comparison: 'Garcia leads Democratic oversight of the administration.' },
          { topic: 'Education', position: '✓ Says he worked on the school board to protect parents’ voices', comparison: 'Garcia backed tuition-free community college as mayor.' },
          { topic: 'Taxes & spending', position: '✓ Pitches himself as a steward of taxpayer dollars', comparison: 'Garcia focuses on ethics bills and oversight.' },
          { topic: 'District clout', position: '? First-term school trustee; no federal experience', comparison: 'Garcia is a committee ranking member.' },
        ],
        money: FEC_NOTE,
        endorsements: NONE_VERIFIED,
      },
    ],
    crossTypology: ct([
      ['PL', 'Garcia', '●', 'Progressive Left voters back a progressive Democrat leading oversight of the administration and calling for abolishing ICE.'],
      ['EL', 'Garcia', '●', 'Establishment Liberals value Garcia’s mayoral record and his likely Oversight chairmanship in a Democratic House.'],
      ['DM', 'Garcia', '●', 'Democratic Mainstays follow the party and keep a senior Long Beach Democrat in a seat that matters for House control.'],
      ['OL', 'Garcia', '●', 'Outsider Left voters want aggressive checks on Trump, which is Garcia’s main role in the House.'],
      ['SS', 'Garcia', '○', 'Stressed Sideliners pay little attention to Congress; Garcia’s long local record gives a slight edge over an unknown trustee.'],
      ['AR', 'Burley', '○', 'Ambivalent Right voters may prefer a Republican focused on schools and spending, but Burley’s thin record makes it a weak lean.', 'Ambivalent Right voters who value proven competence could back Garcia, a former two-term mayor and committee ranking member, giving up a Republican vote and accepting his progressive positions on immigration.'],
      ['PR', 'Burley', '●', 'Populist Right voters back a Republican who would support the House GOP majority against Garcia’s oversight push.'],
      ['CC', 'Burley', '●', 'Committed Conservatives favor the Republican’s emphasis on taxpayer stewardship and parental involvement.'],
      ['FF', 'Burley', '●', 'Faith and Flag Conservatives favor a school trustee who campaigns on protecting parents’ voices in schools.'],
    ]),
    counterArguments: [
      'PR (Burley ●): But consider that Burley has about two years in any elected office, while Garcia’s Oversight post gives this district unusual clout regardless of which party holds the House.',
      'PL (Garcia ●): But consider that the new district adds Republican-leaning coastal cities, and Garcia’s national oversight role may leave less attention for their local concerns.',
    ],
  },

  // ───────────────────────────── CA-45 ─────────────────────────────
  {
    id: 'us-rep-ca45',
    categoryId: 'federal',
    title: 'U.S. Representative, 45th District',
    tldrLabel: 'CA-45',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense and veterans’ spending, and oversight of the executive branch, and runs a casework office for help with federal agencies.',
      'Tran won in 2024 by 653 votes. Prop 50 added Democratic parts of Los Angeles County, moving the seat from D+1 to D+5 per Inside Elections, and forecasters rate it Likely to Tilt Democratic. Republicans held a 219–212 House majority as of August 2026.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Derek Tran took 53.8% and Republican Chuong Vo 15.3%, with four other Republicans combining for about 41% (Statement of Vote). The race turns on whether Republicans consolidate behind Vo in a district with a large Vietnamese American community. Tran had raised $4.98 million to Vo’s $496,000 as of June 30 (Ballotpedia).',
    ],
    readingLinks: [
      { label: 'Ballotpedia News — Tran and Vo in the redrawn 45th (Aug 2026)', url: 'https://news.ballotpedia.org/2026/08/03/tran-d-and-vo-r-running-in-californias-redrawn-45th-congressional-district-on-november-3/', summary: 'District shift, ratings and fundraising through June 30.' },
      { label: 'NBC Los Angeles — Five Asian American candidates in the 45th (May 2026)', url: 'https://www.nbclosangeles.com/news/local/orange-county-westminster-vietnamese-american-house-district-45/3890764/', summary: 'Primary-season profiles of Tran and Vo.' },
    ],
    candidates: [
      {
        id: 'derek-tran',
        name: 'Derek Tran',
        party: 'D',
        role: 'Representative/Business Owner',
        campaignUrl: 'https://tran.house.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term representative since January 2025 on Armed Services and Small Business, with prior work as an employment and injury lawyer.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. representative since Jan 3, 2025; co-introduced the No Getting Rich in Congress Act (Mar 2026) and a bill to reinstate fired veteran federal workers (2025).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Armed Services member; ranking member of a Small Business oversight subcommittee.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Orange resident since 2012; former Orange traffic commissioner; opened an inquiry into the Garden Grove GKN chemical leak (May 2026).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Co-leads the Democratic National Security Task Force; voted with Republicans on the Laken Riley Act; minority member.' },
          ],
        },
        bio: [
          'Tran, son of Vietnamese refugees, enlisted in the Army at 18 and served through 2006, including in the Reserve. A Glendale University law graduate, he practiced personal-injury and employment law and founded the Tran Firm in Huntington Beach in 2020.',
          'He beat Rep. Michelle Steel in 2024 by 653 votes and sits on Armed Services and Small Business.',
        ],
        recordVsChange:
          'Tran is in his first term with modest seniority but has built a centrist record on veterans, stock-trading limits and border enforcement votes; replacing him swaps that for a Republican with city council and police experience.',
        scorecard: [
          { topic: 'Immigration', position: '~ Voted for the Laken Riley Act and a resolution thanking law enforcement including ICE (2025)', comparison: 'Vo emphasizes public safety from 28 years in policing.' },
          { topic: 'Ethics', position: '✓ Co-introduced a ban on members trading individual stocks (Mar 2026)', comparison: 'Vo lists government accountability as a priority.' },
          { topic: 'Veterans & defense', position: '✓ Army veteran on Armed Services; bill to reinstate fired veteran federal workers', comparison: 'Vo has no federal defense record.' },
          { topic: 'Trump/House majority', position: '✓ Frontline Democrat whose seat could decide House control', comparison: 'Vo would add a Republican vote to the majority.' },
          { topic: 'District clout', position: '✓ Pressed GKN Aerospace over the Garden Grove chemical leak with Rep. Robert Garcia (May 2026)', comparison: 'Vo served on the Cerritos council.' },
        ],
        money: 'Raised $4.98 million through June 30, 2026 (Ballotpedia, from FEC filings).',
        endorsements: 'DCCC Frontline program member (2026). No other list verified as of Oct 9, 2026.',
        notes: [
          'In June 2025 the immigrant-rights group VietRISE criticized his vote for a resolution thanking law enforcement, including ICE.',
        ],
      },
      {
        id: 'chuong-vo',
        name: 'Chuong V. Vo',
        party: 'R',
        role: 'Retired Police Officer',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Retired Torrance police officer who served on the Cerritos City Council from 2020 to 2025; no legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Cerritos councilmember 2020–2025, voting on local ordinances (Ballotpedia).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Five years voting on a city budget; no federal committee experience.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Cerritos is in the Los Angeles County portion of the district; nearly three decades of 911 response with Torrance police.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of passing legislation.' },
          ],
        },
        bio: [
          'Vo is a retired Torrance Police Department officer who joined the force in 1999 and served on the Cerritos City Council from 2020 to 2025; NBC Los Angeles also describes him as a former Cerritos mayor.',
          'He campaigns on public safety, lower costs and government accountability, and says his family fled communism for American values.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓✓ Nearly three decades as a police officer; public safety is his top priority', comparison: 'Tran voted for the Laken Riley Act but has no policing background.' },
          { topic: 'Cost of living', position: '✓ Lists lowering costs as a priority; no specific plan published', comparison: 'Tran focuses on veterans and stock-trading limits.' },
          { topic: 'Ethics', position: '✓ Lists government accountability as a priority', comparison: 'Tran co-wrote a member stock-trading ban.' },
          { topic: 'Trump/House majority', position: '✓ Would add a Republican vote to the House majority', comparison: 'Tran is a Democratic Frontline member.' },
        ],
        money: 'Raised $496,000 through June 30, 2026 (Ballotpedia, from FEC filings).',
        endorsements: 'State Sen. Tony Strickland among Republican backers (NBC Los Angeles, May 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Tran', '◐', 'Progressive Left voters back the Democrat for House control, though Tran’s votes for the Laken Riley Act and an ICE-thanking resolution cut against them.'],
      ['EL', 'Tran', '●', 'Establishment Liberals value Tran’s Armed Services seat, veterans focus and ethics bill in a seat that could decide the House.'],
      ['DM', 'Tran', '●', 'Democratic Mainstays back the Democratic incumbent defending a swing seat.'],
      ['OL', 'Tran', '◐', 'Outsider Left voters want a check on Trump, though Tran’s centrist immigration votes temper their enthusiasm.'],
      ['SS', 'Tran', '○', 'Stressed Sideliners have little to go on; Tran’s constituent work on the Garden Grove chemical leak gives a slight edge.'],
      ['AR', 'Vo', '○', 'Ambivalent Right voters may like a retired officer focused on costs, but Tran’s centrist votes make it a weak lean.', 'Ambivalent Right voters who want experience in the job could back Tran, a sitting member on Armed Services who has crossed party lines on border votes, giving up a Republican vote for the House majority.'],
      ['PR', 'Vo', '●', 'Populist Right voters back a Republican police veteran who would strengthen the House GOP majority.'],
      ['CC', 'Vo', '●', 'Committed Conservatives favor the Republican on public safety and keeping the House majority.'],
      ['FF', 'Vo', '●', 'Faith and Flag Conservatives favor Vo’s patriotic, anti-communist framing and law-and-order focus.'],
    ]),
    counterArguments: [
      'PR (Vo ●): But consider that Vo has raised about a tenth of Tran’s money and has no legislative record, while Tran already votes with Republicans on some border bills.',
      'EL (Tran ●): But consider that Tran is a first-termer with little seniority, and his 2024 win came by just 653 votes.',
    ],
  },

  // ───────────────────────────── CA-47 ─────────────────────────────
  {
    id: 'us-rep-ca47',
    categoryId: 'federal',
    title: 'U.S. Representative, 47th District',
    tldrLabel: 'CA-47',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, energy and coastal policy, and oversight of the executive branch, and runs a casework office for help with federal agencies.',
      'Prop 50 redrew this Orange County seat to help Min, a first-term Democrat; Huntington Beach moved to the 42nd. Cook Political Report rated the race Solid Democratic in June 2026 (Fox News).',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Dave Min took 45.4% and Republican Jenny Rae Le Roux 25.0%, ahead of five other candidates (Statement of Vote). Le Roux argues Min governs as a progressive and neglects constituents; Min’s side says his office has recovered over $5 million for constituents. No public general-election polling was found.',
    ],
    readingLinks: [
      { label: 'Fox News — Le Roux wins GOP spot in CA-47 (Jun 2026)', url: 'https://www.foxnews.com/politics/gop-victor-ca-house-primary-cites-major-momentum-shift-deep-blue-state-californians-tired', summary: 'Le Roux’s pitch and the DCCC response.' },
      { label: 'The Ballot Brief — CA-47', url: 'https://theballotbrief.com/district/ca-47', summary: 'Neutral roster with candidate backgrounds.' },
    ],
    candidates: [
      {
        id: 'dave-min',
        name: 'Dave Min',
        party: 'D',
        role: 'United States Representative/Father',
        campaignUrl: 'https://min.house.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term congressman since January 2025 after four years as a state senator who chaired Natural Resources and Water; former SEC lawyer and UC Irvine law professor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. representative since 2025; state senator 2020–2024, authored the “30 by 30” conservation law (2023) and a gun-show ban on public property.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'House Natural Resources and Oversight committees; chaired Senate Natural Resources and Water.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Represented Orange County in the state Senate since 2020; office reports recovering $5.7 million for constituents (DCCC).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Multiple state laws enacted; in the House minority, voted with Republicans on the Laken Riley Act.' },
          ],
        },
        bio: [
          'Min, a Harvard Law graduate, was an SEC staff attorney, counsel to Sen. Chuck Schumer on the Senate Banking Committee, and a UC Irvine law professor from 2012. He won a state Senate seat in 2020, chairing Natural Resources and Water.',
          'He succeeded Katie Porter in Congress in January 2025 and sits on Natural Resources and Oversight.',
        ],
        recordVsChange:
          'Min brings state lawmaking experience and committee seats on Natural Resources and Oversight; replacing him trades that for a first-time officeholder, while keeping him means accepting his 2023 DUI conviction, for which he took responsibility.',
        scorecard: [
          { topic: 'Climate', position: '✓✓ Wrote California’s “30 by 30” land-conservation law; pushed to end offshore drilling leases', comparison: 'Le Roux has not published a climate platform.' },
          { topic: 'Democracy & elections', position: '✓ Wrote SB 1174 to block local voter ID rules after Huntington Beach’s measure', comparison: 'Le Roux stresses fraud investigations and spending transparency.' },
          { topic: 'Immigration', position: '~ Voted for the Laken Riley Act, one of 46 House Democrats', comparison: 'Le Roux calls herself a staunch conservative.' },
          { topic: 'Taxes & spending', position: '✗ Opposed the One Big Beautiful Bill Act as a “disaster for California families”', comparison: 'Le Roux promises full spending transparency and fiscal conservatism.' },
          { topic: 'Trump/House majority', position: '✓ Democratic vote; Oversight Committee member', comparison: 'Le Roux would add a Republican vote.' },
        ],
        money: FEC_NOTE,
        endorsements: NONE_VERIFIED,
        redFlags: [
          {
            severity: 'severe',
            status: 'convicted',
            text: 'Min was stopped in Sacramento in May 2023 while a state senator and pleaded no contest to misdemeanor drunk driving that August; he received three years of informal probation and an alcohol-education program. He said he accepted full responsibility and apologized.',
            whyItMatters: 'A lawmaker’s criminal conviction bears on judgment and public trust, though no later incident has been reported.',
            sources: [
              { label: 'Patch — OC senator gets 3 years’ probation (Aug 2023)', url: 'https://patch.com/california/lakeforest-ca/oc-senator-gets-3-years-probation-dui-charge' },
              { label: 'Audacy/KROQ — Min arrested for DUI (May 2023)', url: 'https://www.audacy.com/kroq/news/ca-state-senator-dave-min-arrested-for-dui' },
            ],
          },
        ],
      },
      {
        id: 'jenny-rae-le-roux',
        name: 'Jenny Rae Le Roux',
        party: 'R',
        role: 'Entrepreneur/Investor',
        campaignUrl: 'https://jennyraeca.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Business founder and director of the private CAL DOGE initiative; ran for governor in 2021 and 2022 but has never held office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative record found.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Directs CAL DOGE, a private effort launched in 2026 by Steve Hilton that reviews state spending.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'Says her campaign handles constituent requests; no public office in the district.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of passing legislation.' },
          ],
        },
        bio: [
          'Le Roux holds a University of Virginia economics degree and a Columbia MBA, co-founded energy and financial-services companies, and ran a technology services firm (The Ballot Brief). She ran for governor in the 2021 recall and finished fourth in the 2022 primary.',
          'She directs CAL DOGE, a private spending-review effort founded by Steve Hilton, and calls herself a staunch conservative.',
        ],
        scorecard: [
          { topic: 'Taxes & spending', position: '✓✓ Fiscal conservative; wants full transparency of government spending', comparison: 'Min opposed the 2025 GOP tax-and-spending bill.' },
          { topic: 'Ethics', position: '✓ Says CAL DOGE has uncovered nearly $700 million in misused funds (campaign claim, unverified)', comparison: 'Min points to $5.7 million recovered for constituents.' },
          { topic: 'Local control', position: '✓ Wants power returned to local control', comparison: 'Min wrote a bill to block local voter ID rules.' },
          { topic: 'Trump/House majority', position: '✓ Would add a Republican vote to the House majority', comparison: 'Min is a Democrat on Oversight.' },
        ],
        money: FEC_NOTE,
        endorsements: NONE_VERIFIED,
        notes: [
          'She is a cousin of Virginia Gov. Abigail Spanberger, a Democrat (Fox News, Mar 2026).',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Min', '◐', 'Progressive Left voters back Min’s conservation and anti-voter-ID record, weighed against his 2023 DUI conviction.'],
      ['EL', 'Min', '◐', 'Establishment Liberals value Min’s policy expertise and committee seats, tempered by his 2023 misdemeanor DUI conviction.'],
      ['DM', 'Min', '◐', 'Democratic Mainstays back the Democratic incumbent, though his 2023 DUI conviction is a mark on his record.'],
      ['OL', 'Min', '◐', 'Outsider Left voters want a vote against Trump’s agenda, despite Min’s establishment résumé and DUI conviction.'],
      ['SS', 'Min', '○', 'Stressed Sideliners have little information on Le Roux; Min’s constituent casework gives a slight edge despite his DUI.'],
      ['AR', 'Le Roux', '○', 'Ambivalent Right voters may favor Le Roux’s spending-transparency pitch, but her lack of any office makes it a weak lean.', 'Ambivalent Right voters who want experience could back Min, a former state committee chair who crossed party lines on the Laken Riley Act, accepting his 2023 DUI conviction and giving up a Republican vote.'],
      ['PR', 'Le Roux', '●', 'Populist Right voters back a Republican attacking Sacramento fraud and “one-party rule.”'],
      ['CC', 'Le Roux', '●', 'Committed Conservatives favor a self-described staunch fiscal conservative.'],
      ['FF', 'Le Roux', '●', 'Faith and Flag Conservatives back the Republican nominee over a progressive-leaning Democrat.'],
    ]),
    counterArguments: [
      'EL (Min ◐): But consider that Min pleaded no contest to drunk driving in 2023 while a sitting senator; he accepted responsibility and no later incident has been reported.',
      'PR (Le Roux ●): But consider that Le Roux has never held office and her CAL DOGE fraud figures are her own claims, not audited findings.',
    ],
  },

  // ───────────────────────────── SD-36 ─────────────────────────────
  {
    id: 'senate-sd36',
    categoryId: 'state-leg',
    title: 'State Senate, District 36',
    tldrLabel: 'SD-36',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: SENATE_CRITERIA('SD-36 spans parts of Orange and Los Angeles counties, including Huntington Beach, with coastal, housing and cost-of-living issues.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the state budget, housing and land-use law, energy and insurance rules, public safety statutes, and confirmations of governor appointees; they serve four-year terms.',
      'Strickland won this seat in a 2025 special election to succeed Janet Nguyen. Duncan, a former San Clemente mayor, twice lost Assembly races to Laurie Davies, and is running against Strickland’s record on housing and campaign finance.',
    ],
    introParagraphs: [
      'In the June 2 primary, Republican incumbent Tony Strickland took 53.4% and Democrat Chris Duncan 46.6% in a two-person field (Statement of Vote). The race turns on whether Duncan’s cost-of-living and anti-tariff message can close a 7-point gap. No public polling was found.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Senate District 36', url: 'https://theballotbrief.com/state/california/orange-county/california-senate-district-36', summary: 'Neutral roster with primary results and stated priorities.' },
    ],
    candidates: [
      {
        id: 'tony-strickland',
        name: 'Tony Strickland',
        party: 'R',
        role: 'State Senator/Businessman',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Sitting senator since March 2025, with earlier Assembly (1998–2004) and Senate (2008–2012) terms and a stint as Huntington Beach mayor.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'Assembly 1998–2004, Senate 2008–2012 and since March 11, 2025 (Wikipedia).' },
            { criterionId: 'budget-oversight', assessment: 'met', evidence: 'More than a decade of budget votes across both houses.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Huntington Beach councilmember 2022–2025 and mayor 2022–2023.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Minority-party member; Ballot Brief cites a student health bill as a priority.' },
          ],
        },
        bio: [
          'Strickland, a Whittier College graduate, served in the Assembly from 1998 to 2004 and the Senate from 2008 to 2012, and lost races for controller and Congress. He joined the Huntington Beach council in 2022 as part of a conservative slate and was mayor in 2023.',
          'He won a 2025 special election for this seat.',
        ],
        recordVsChange:
          'Strickland brings long legislative experience; replacing him trades that for a Democrat with prosecutorial and city experience who would join the Senate majority.',
        scorecard: [
          { topic: 'Housing & transit', position: '✗ As Huntington Beach mayor opposed state housing mandates; city was sued over halting ADU applications', comparison: 'Duncan lists housing and homelessness as priorities.' },
          { topic: 'Education', position: '✓ Championed a student health bill (Ballot Brief)', comparison: 'Duncan has not published an education platform.' },
          { topic: 'Taxes', position: '✓ Raises affordability concerns; Republican opposed to tax increases', comparison: 'Duncan also promises lower taxes and utility costs.' },
          { topic: 'Caucus / ideology', position: '✓ Conservative Republican; 2016 Trump delegate and pro-Trump super PAC chair', comparison: 'Duncan runs as an anti-tariff Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: NONE_VERIFIED,
        redFlags: [
          {
            severity: 'severe',
            status: 'official-finding',
            text: 'In May 2016 the Fair Political Practices Commission approved a $40,000 fine against Strickland for eight violations tied to his 2010 controller race: earmarked, over-the-limit contributions routed through two county Republican committees and related false reports. He accepted responsibility but said he did not personally solicit the donations.',
            whyItMatters: 'Senators write the state’s campaign-finance laws, so a past finding of evading contribution limits bears on trust.',
            sources: [
              { label: 'FPPC — Enforcement decisions (May 2016)', url: 'https://www.fppc.ca.gov/news-releases/2016/fppc-enforcement-decisions-may-2016/' },
              { label: 'CBS Sacramento — Strickland admits violating campaign law', url: 'https://www.cbsnews.com/sacramento/news/donald-trump-delegate-tony-strickland-admits-violating-campaign-law/' },
            ],
          },
        ],
        notes: [
          'Wikipedia reports he lives in a unit listed as state-mandated affordable housing, which drew hypocrisy criticism given his housing votes.',
        ],
      },
      {
        id: 'chris-duncan',
        name: 'Chris Duncan',
        party: 'D',
        role: 'Anti-Tariff Attorney',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Former San Clemente councilmember and 2022 mayor with 16+ years as a federal government lawyer; no legislative experience.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'partial', evidence: 'Federal prosecutor 16+ years, including Assistant Chief Counsel at U.S. Customs and Border Protection (Ballot Brief).' },
            { criterionId: 'budget-oversight', assessment: 'partial', evidence: 'San Clemente council budget votes; mayor in 2022.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'South Orange County officeholder; twice ran for the overlapping AD-74.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record.' },
          ],
        },
        bio: [
          'Duncan spent more than 16 years as a federal government lawyer, including as Assistant Chief Counsel at U.S. Customs and Border Protection. He was the first Democrat elected to the San Clemente City Council and served as mayor in 2022 (The Ballot Brief).',
          'He lost Assembly District 74 races to Laurie Davies in 2022 and 2024.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Lists reducing homelessness and public safety as top priorities', comparison: 'Strickland opposed state housing mandates as Huntington Beach mayor.' },
          { topic: 'Taxes', position: '✓ Promises lower taxes, utility costs and insurance premiums', comparison: 'Strickland also stresses affordability.' },
          { topic: 'Public safety', position: '✓ Former federal prosecutor; backs gun-safety enforcement', comparison: 'Strickland has a law-and-order Republican record.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat running against tariffs; would join the Senate majority', comparison: 'Strickland is a conservative Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'California Democratic Party and Orange County Democrats, per the Blue Voter Guide listing (accessed Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Duncan', '●', 'Progressive Left voters back the Democrat on gun safety and reproductive rights over a former pro-Trump super PAC chair.'],
      ['EL', 'Duncan', '●', 'Establishment Liberals value a former federal prosecutor and mayor who would join the Senate majority.'],
      ['DM', 'Duncan', '●', 'Democratic Mainstays back the party nominee and a chance to flip the seat.'],
      ['OL', 'Duncan', '●', 'Outsider Left voters favor Duncan’s anti-tariff, anti-Trump message over a veteran Republican insider.'],
      ['SS', 'Strickland', '○', 'Stressed Sideliners lean toward the known incumbent on cost-of-living messaging, weighed against his 2016 campaign-finance fine.'],
      ['AR', 'Strickland', '◐', 'Ambivalent Right voters like his experience and housing skepticism but may be uneasy about his FPPC fine.'],
      ['PR', 'Strickland', '◐', 'Populist Right voters back a pro-Trump Republican, though his FPPC fine cuts against an anti-corruption message.'],
      ['CC', 'Strickland', '◐', 'Committed Conservatives back a veteran conservative legislator, with the FPPC finding as a caveat.'],
      ['FF', 'Strickland', '◐', 'Faith and Flag Conservatives favor the Republican, noting his 2016 campaign-finance penalty.'],
    ]),
    counterArguments: [
      'CC (Strickland ◐): But consider that the FPPC found Strickland routed $65,000 in over-the-limit donations through county parties in 2010; he admitted the violations and paid $40,000.',
      'EL (Duncan ●): But consider that Duncan has no legislative experience, and Strickland has served in both houses.',
    ],
  },

  // ───────────────────────────── AD-59 ─────────────────────────────
  {
    id: 'assembly-ad59',
    categoryId: 'state-leg',
    title: 'State Assembly, District 59',
    tldrLabel: 'AD-59',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-59 covers northern Orange County and part of San Bernardino County.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASM_STAKES_1,
      'This Republican-held seat has no Democrat on the ballot: Green Party member Victor Hernandez is the only challenger, one of two Greens to reach a November legislative ballot in California this year.',
    ],
    introParagraphs: [
      'In a two-person June primary, Republican incumbent Phillip Chen took 66.3% and Green Victor Hernandez 33.7% (Statement of Vote). Left-of-center voters choose between a Green with no office record and a five-term Republican. No polling was found.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 59', url: 'https://theballotbrief.com/state/california/orange-county/california-assembly-district-59', summary: 'Roster with priorities for both candidates.' },
    ],
    candidates: [
      {
        id: 'phillip-chen',
        name: 'Phillip Chen',
        party: 'R',
        role: 'Assemblyman/Business Owner',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since December 2016, vice chair of Banking and Finance, after two terms on the Walnut Valley school board.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since 2016 (55th, then 59th district); several bills died in committee, per Wikipedia.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Vice chair, Banking and Finance; co-chair, Legislative Ethics (Ballot Brief); Republican deputy whip.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Represents northern Orange County; helped secure funding for Cal State Fullerton’s Titan Gateway bridge (2021).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Minority-party member; Wikipedia lists no enacted signature bills.' },
          ],
        },
        bio: [
          'Chen holds a USC master’s in public administration and doctorate, owns a property-management company, and was a Walnut Valley school board member from 2011. He was a health deputy to LA County Supervisor Michael Antonovich and a reserve sheriff’s deputy.',
          'He won the Assembly in 2016 and was re-elected four times.',
        ],
        recordVsChange:
          'Chen has a decade of seniority and a vice-chair post; the only alternative is a Green with no office record, so a change would mainly be a protest vote.',
        scorecard: [
          { topic: 'Housing & transit', position: '~ Proposed a Caltrans homeless-encampment program (2019); died in committee', comparison: 'Hernandez lists affordable housing as a priority.' },
          { topic: 'Health care', position: '? No distinctive health-access platform found', comparison: 'Hernandez wants expanded health-care access.' },
          { topic: 'Public safety', position: '✓ Former reserve deputy; proposed an Orange County property-crime task force', comparison: 'Hernandez focuses on protecting immigrant communities.' },
          { topic: 'Caucus / ideology', position: '✓ Republican deputy whip', comparison: 'Hernandez is a Green Party central committee member.' },
        ],
        money: CAL_ACCESS,
        endorsements: NONE_VERIFIED,
      },
      {
        id: 'victor-hernandez',
        name: 'Victor Hernandez',
        party: 'Green',
        role: 'Account Sales Manager',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Green Party of Orange County central committee member and mutual-aid volunteer; no elected or legislative experience found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative or policy record found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No public budget or committee experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Active in local mutual-aid events (campaign site via Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record.' },
          ],
        },
        bio: [
          'Hernandez serves on the Green Party of Orange County central committee and has been active in local mutual-aid events. His campaign rejects corporate and super PAC donations, per the Green Party of California.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Lists affordable housing as a priority', comparison: 'Chen’s housing bills have not become law.' },
          { topic: 'Health care', position: '✓✓ Wants expanded health-care access', comparison: 'Chen has no comparable platform.' },
          { topic: 'Immigration', position: '✓ Pledges to protect immigrant communities', comparison: 'Chen has no stated immigration platform.' },
          { topic: 'Caucus / ideology', position: '✓ Green; rejects corporate and super PAC money', comparison: 'Chen is a Republican deputy whip.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Green Party of Orange County (Green Party of California, June 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Hernandez', '●', 'Progressive Left voters back the Green on health care, housing and immigrant protections over a Republican.'],
      ['EL', '—', '—', 'Establishment Liberals have no Democrat here and are wary of both a Republican and an untested Green.', 'Establishment Liberals who prize experience could back Chen, a 10-year legislator who co-chairs the ethics committee, giving up a vote for progressive priorities.'],
      ['DM', 'Hernandez', '○', 'Democratic Mainstays lacking a Democrat may lean to the left-of-center option as a protest vote.', 'Democratic Mainstays focused on effective representation could back Chen, an experienced incumbent, giving up a left-leaning protest vote.'],
      ['OL', 'Hernandez', '●', 'Outsider Left voters favor a grassroots Green who refuses corporate money.'],
      ['SS', 'Chen', '○', 'Stressed Sideliners lean toward the incumbent they know.'],
      ['AR', 'Chen', '●', 'Ambivalent Right voters back an experienced Republican over a Green.'],
      ['PR', 'Chen', '●', 'Populist Right voters back the Republican over a left-wing challenger.'],
      ['CC', 'Chen', '●', 'Committed Conservatives back a Republican deputy whip.'],
      ['FF', 'Chen', '●', 'Faith and Flag Conservatives favor the Republican incumbent.'],
    ]),
    counterArguments: [
      'PL (Hernandez ●): But consider that Hernandez has no public-office record, and a Green Assembly member would have few allies in the Legislature.',
    ],
  },

  // ───────────────────────────── AD-67 ─────────────────────────────
  {
    id: 'assembly-ad67',
    categoryId: 'state-leg',
    title: 'State Assembly, District 67',
    tldrLabel: 'AD-67',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-67 runs from Cerritos to Anaheim, including Buena Park, Cypress, La Palma, parts of Fullerton, Artesia and Hawaiian Gardens.'),
    seatContext: 'Open (term limits)',
    kind: 'candidates',
    stakesParagraphs: [
      ASM_STAKES_1,
      'Democrat Sharon Quirk-Silva is termed out. The district straddles north Orange County and southeast Los Angeles County, and Democrats split their primary vote among four candidates.',
    ],
    introParagraphs: [
      'Republican Paulo Morales led the June 2 primary with 31.6%, ahead of Democrat Mark Pulido at 25.9% and Democrat Ada Briceño at 23.7% (Statement of Vote). Democrats together won well over half the vote, so the race turns on whether Briceño’s voters consolidate behind Pulido. No polling was found.',
    ],
    readingLinks: [
      { label: 'Voice of OC — Primary night results, AD-67 (Jun 2026)', url: 'https://voiceofoc.org/2026/06/2026-primary-election-night-results-67th-state-assembly-district/', summary: 'Primary-night returns and the field.' },
      { label: 'The Ballot Brief — Assembly District 67', url: 'https://theballotbrief.com/state/california/orange-county/california-assembly-district-67', summary: 'Roster and stated priorities.' },
    ],
    candidates: [
      {
        id: 'mark-pulido',
        name: 'Mark Pulido',
        party: 'D',
        role: 'City Councilmember',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Three-term Cerritos councilmember and two-time mayor, a decade on the ABC school board, and a former legislative consultant to three Assembly leaders.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Legislative consultant for Robert Hertzberg, Herb Wesson and Fabian Núñez; district director for Rep. Alan Lowenthal.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'ABC Unified board 2001–2011 (president 2007–08); Cerritos council since 2011 with a 2020–2025 gap, mayor twice.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Cerritos is in the district; decades of local office there.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'State commission appointments 2013–2019; no legislative bills of his own.' },
          ],
        },
        bio: [
          'Pulido, a UCLA graduate with a University of Chicago public-policy master’s, served on the ABC Unified school board from 2001 to 2011 and has been on the Cerritos council since 2011, apart from a 2020–2025 term-limit break, serving as mayor twice.',
          'He worked as a consultant to three Assembly leaders and as a congressional district director.',
        ],
        scorecard: [
          { topic: 'Education', position: '✓✓ Former ABC school board president; lists improving schools as a priority', comparison: 'Morales stresses fundamentals and parent transparency.' },
          { topic: 'Housing & transit', position: '✓ Wants more affordable housing', comparison: 'Morales wants cities to have more flexibility in development.' },
          { topic: 'Public safety', position: '✓ Lists supporting public safety as a priority', comparison: 'Morales is a law-enforcement officer.' },
          { topic: 'Taxes', position: '? No tax platform found; wants to ease costs on working families', comparison: 'Morales wants lower taxes and fees.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat with labor and Asian American groups’ support', comparison: 'Morales is a Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Labor unions and Asian American political groups during the primary (Los Angeles Lamplighter, June 2026).',
      },
      {
        id: 'paulo-morales',
        name: 'Paulo Morales',
        party: 'R',
        role: 'Law Enforcement Officer',
        campaignUrl: 'https://paulomoralesca.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Law-enforcement officer who served on the Cypress City Council from 2019 to 2022, including as mayor; no legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Cypress councilmember 2019–2022, voting on local ordinances.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Cypress mayor from December 2021; city budget votes.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Cypress is in the district; former Cypress police officer (Daily Titan via Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record.' },
          ],
        },
        bio: [
          'Morales is a former Cypress police officer who served on the Cypress City Council from 2019 to 2022 and was appointed mayor in December 2021. His ballot designation is Law Enforcement Officer.',
          'He campaigns on lower taxes and fees, cutting wasteful spending, local control of growth and public safety.',
        ],
        scorecard: [
          { topic: 'Taxes', position: '✓✓ Wants lower taxes and fees and cuts to programs that don’t deliver', comparison: 'Pulido has no stated tax-cut agenda.' },
          { topic: 'Housing & transit', position: '~ Wants cities to have tools and flexibility to grow responsibly', comparison: 'Pulido emphasizes more affordable housing.' },
          { topic: 'Education', position: '✓ Fundamentals, real-world skills and transparency for parents', comparison: 'Pulido led a school board for a decade.' },
          { topic: 'Public safety', position: '✓✓ Law-enforcement career; “balanced policies” to reduce crime', comparison: 'Pulido lists public safety without a policing background.' },
        ],
        money: CAL_ACCESS,
        endorsements: NONE_VERIFIED,
      },
    ],
    crossTypology: ct([
      ['PL', 'Pulido', '●', 'Progressive Left voters back the Democrat with union support and an education and housing focus.'],
      ['EL', 'Pulido', '●', 'Establishment Liberals value Pulido’s long school-board, council and Capitol staff résumé.'],
      ['DM', 'Pulido', '●', 'Democratic Mainstays back the Democrat to keep a Democratic seat.'],
      ['OL', 'Pulido', '◐', 'Outsider Left voters back the Democrat, though Pulido is a long-time local insider.'],
      ['SS', 'Morales', '○', 'Stressed Sideliners may lean toward a police officer promising lower taxes and fees, a weak lean.'],
      ['AR', 'Morales', '◐', 'Ambivalent Right voters like Morales’s cost-cutting and local-control pitch, but Pulido has the deeper résumé.'],
      ['PR', 'Morales', '●', 'Populist Right voters back a police officer promising lower taxes and less waste.'],
      ['CC', 'Morales', '●', 'Committed Conservatives back the Republican on taxes and spending.'],
      ['FF', 'Morales', '●', 'Faith and Flag Conservatives favor a law-enforcement Republican stressing parental transparency.'],
    ]),
    counterArguments: [
      'PR (Morales ●): But consider that Pulido has worked inside the Capitol for Assembly leaders, while Morales would arrive in the minority with no legislative experience.',
      'EL (Pulido ●): But consider that Pulido finished second in the primary, and Morales led every other candidate.',
    ],
  },

  // ───────────────────────────── AD-70 ─────────────────────────────
  {
    id: 'assembly-ad70',
    categoryId: 'state-leg',
    title: 'State Assembly, District 70',
    tldrLabel: 'AD-70',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-70 covers Westminster, Garden Grove, Fountain Valley, Stanton, Los Alamitos and parts of Seal Beach, Santa Ana and Huntington Beach.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASM_STAKES_1,
      'The district includes Little Saigon. Ta, the first Vietnamese American mayor of Westminster, is seeking a third term; recent local issues include the Garden Grove chemical emergency and utility rates.',
    ],
    introParagraphs: [
      'In a two-person June primary, Republican incumbent Tri Ta took 53.8% and Democrat Paula Swift 46.2% (Statement of Vote). The race turns on whether Swift, a first-time candidate, can close a 7-point gap with a cost-of-living message. No polling was found.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 70', url: 'https://theballotbrief.com/state/california/orange-county/california-assembly-district-70', summary: 'Roster with committee roles and priorities.' },
    ],
    candidates: [
      {
        id: 'tri-ta',
        name: 'Tri Ta',
        party: 'R',
        role: 'California Assemblyman/Businessman',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since December 2022, vice chair of Local Government, after a decade as Westminster councilmember and mayor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since 2022; a 2024 autism-treatment access bill was signed into law (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Vice chair, Local Government; serves on Appropriations, Housing, Rules, and Utilities and Energy (Ballot Brief).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Westminster mayor from 2012, re-elected 2014–2018; 2026 bill to exempt Garden Grove chemical-emergency settlements from state tax.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Minority-party member with at least one bill signed.' },
          ],
        },
        bio: [
          'Ta came to the U.S. as a refugee in 1992, earned a Cal State LA political science degree, and served on the Westminster council before becoming its first Vietnamese American mayor in 2012. He survived a 2020 recall.',
          'Elected to the Assembly in 2022, he was a 2024 Trump delegate.',
        ],
        recordVsChange:
          'Ta has committee seats on Appropriations and Utilities and Energy and local ties in Little Saigon; replacing him trades that for a first-time Democratic candidate who would join the majority.',
        scorecard: [
          { topic: 'Cost of living', position: '✓ Advanced a 2025 bill limiting some utility rate increases to inflation', comparison: 'Swift focuses on lowering Orange County living costs.' },
          { topic: 'Taxes', position: '✓ 2026 bill exempting Garden Grove chemical-emergency settlements from state income tax', comparison: 'Swift has no stated tax position.' },
          { topic: 'Health care', position: '✓ Autism and developmental-disability treatment access law signed (2024)', comparison: 'Swift lists health care as a priority.' },
          { topic: 'Caucus / ideology', position: '✓ Republican; 2024 Trump delegate', comparison: 'Swift is a Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: NONE_VERIFIED,
      },
      {
        id: 'paula-swift',
        name: 'Paula Swift',
        party: 'D',
        role: 'Small Business Owner',
        campaignUrl: 'https://votepaulaswift.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Business CEO and educator with a USC doctorate in organizational leadership; no elected or legislative experience found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative or policy-drafting record found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'Runs a business as CEO; company not named on her site.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No local office or commission role found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record.' },
          ],
        },
        bio: [
          'Swift is a small business owner and educator with a USC doctorate in organizational change and leadership (The Ballot Brief). Her campaign says gun violence left her a widowed single mother and that she put herself through school while raising a family.',
        ],
        scorecard: [
          { topic: 'Cost of living', position: '✓ Making Orange County more affordable is her stated focus', comparison: 'Ta has a utility-rate cap bill.' },
          { topic: 'Public safety', position: '✓ Lists safety and thriving communities first; personal experience with gun violence', comparison: 'Ta has no distinctive gun-policy record found.' },
          { topic: 'Education', position: '✓ Strong public schools for every child', comparison: 'Ta pushed Mendez v. Westminster into the curriculum.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat; would join the majority', comparison: 'Ta is a Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: NONE_VERIFIED,
      },
    ],
    crossTypology: ct([
      ['PL', 'Swift', '●', 'Progressive Left voters back the Democrat on gun safety, health care and public schools.'],
      ['EL', 'Swift', '◐', 'Establishment Liberals prefer a Democrat but note Swift has no public-office experience.', 'Establishment Liberals who prize experience could back Ta, a former mayor with Appropriations and Utilities seats, giving up a Democratic vote and accepting his 2024 Trump delegate role.'],
      ['DM', 'Swift', '●', 'Democratic Mainstays back the Democratic nominee.'],
      ['OL', 'Swift', '●', 'Outsider Left voters favor a first-time candidate shaped by gun violence over a Trump delegate.'],
      ['SS', 'Ta', '○', 'Stressed Sideliners lean toward the incumbent whose utility-rate bill speaks to bills they pay.'],
      ['AR', 'Ta', '●', 'Ambivalent Right voters back an experienced Republican focused on utility costs and local relief.'],
      ['PR', 'Ta', '●', 'Populist Right voters back a Trump delegate and Republican incumbent.'],
      ['CC', 'Ta', '●', 'Committed Conservatives back the Republican on taxes and limits on rate increases.'],
      ['FF', 'Ta', '●', 'Faith and Flag Conservatives favor a refugee-turned-mayor Republican.'],
    ]),
    counterArguments: [
      'PL (Swift ●): But consider that Swift has no public-office record, while Ta brings a decade of local and state experience.',
      'CC (Ta ●): But consider that Ta was a party to bitter Westminster council feuds, including a 2020 recall attempt.',
    ],
  },

  // ───────────────────────────── AD-72 ─────────────────────────────
  {
    id: 'assembly-ad72',
    categoryId: 'state-leg',
    title: 'State Assembly, District 72',
    tldrLabel: 'AD-72',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-72 runs along the Orange County coast from Seal Beach to Laguna Beach and inland to Aliso Viejo, Lake Forest and Laguna Woods.'),
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      ASM_STAKES_1,
      'Republican Diane Dixon is leaving the seat. Republicans outnumbered Democrats roughly 40% to 32% in registration as of February (Van Der Mark campaign, citing the Secretary of State), and the race pits two Huntington Beach culture-war figures against each other.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Chris Kluwe took 43.8%, Republican Gracey Van Der Mark 37.7%, Republican Matthew Harper 16.4% and an independent 2.1% (Statement of Vote). Republicans combined for about 54%, so the race turns on whether Harper’s voters back Van Der Mark. No polling was found.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 72', url: 'https://theballotbrief.com/state/california/orange-county/california-assembly-district-72', summary: 'Roster with stated priorities.' },
      { label: 'CalMatters — Huntington Beach voters back rightward turn (Mar 2024)', url: 'https://calmatters.org/politics/elections/2024/03/california-election-huntington-beach/', summary: 'Background on the council majority Van Der Mark led as mayor.' },
    ],
    candidates: [
      {
        id: 'chris-kluwe',
        name: 'Chris Kluwe',
        party: 'D',
        role: 'Businessman/Coach/Father',
        campaignUrl: 'https://kluweoc.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Former NFL punter, author and high-school coach known for activism; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative record; filed an amicus brief in Hollingsworth v. Perry (2013).' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No public budget experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Edison High coach 2017–2025; frequent speaker at Huntington Beach council meetings.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record.' },
          ],
        },
        bio: [
          'Kluwe punted for UCLA and the Minnesota Vikings from 2005 to 2012, became known for same-sex marriage advocacy, and has written essays and science fiction. He coached at Edison High from 2017 until 2025.',
          'In February 2025 he was arrested protesting a “MAGA” library plaque at a Huntington Beach council meeting.',
        ],
        scorecard: [
          { topic: 'Education', position: '✓✓ Strengthening public education; opposes book bans in Huntington Beach', comparison: 'Van Der Mark led Huntington Beach’s library book-review effort.' },
          { topic: 'Housing & transit', position: '✓ Lower housing and health costs; no detailed plan published', comparison: 'Van Der Mark stresses fiscal responsibility.' },
          { topic: 'Climate', position: '✓ Clean, safe beaches and climate resiliency', comparison: 'Van Der Mark has no stated climate platform.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive Democrat and activist', comparison: 'Van Der Mark is endorsed by the state GOP.' },
        ],
        money: CAL_ACCESS,
        endorsements: NONE_VERIFIED,
        redFlags: [
          {
            severity: 'severe',
            status: 'charged',
            text: 'Kluwe was arrested on Feb 18, 2025, after walking toward council members during a protest at a Huntington Beach City Council meeting, and was charged with a misdemeanor for disturbing a public assembly; an April 2025 arraignment was set. He called it peaceful civil disobedience. No report of the case’s outcome was found.',
            whyItMatters: 'A pending or unresolved criminal charge bears on a lawmaker’s judgment, though it arose from nonviolent protest.',
            sources: [
              { label: 'The Advocate — Kluwe arrest update (Apr 2025)', url: 'https://www.advocate.com/exclusives/chris-kluwe-pride-flag-arrest-update' },
              { label: 'Spectrum News — Former NFL punter arrested (Feb 2025)', url: 'https://spectrumnews1.com/ca/la/politics/2025/02/20/former-ucla--nfl-punter-arrested-at-huntington-beach-city-council-meeting' },
            ],
          },
        ],
      },
      {
        id: 'gracey-van-der-mark',
        name: 'Gracey Van Der Mark',
        party: 'R',
        role: 'Councilwoman/Business Owner',
        campaignUrl: 'https://graceyforassembly.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Huntington Beach councilmember since 2022 and mayor in 2024; no legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Led the council’s library book-review policy (2023) and its voter-ID charter amendment push.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'City budget votes since December 2022; mayor December 2023–December 2024.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Elected in Huntington Beach, the district’s largest city.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Part of a four-member conservative council majority; voters later repealed the library review board.' },
          ],
        },
        bio: [
          'Van Der Mark, born to immigrant parents, was elected to the Huntington Beach council in 2022 on a conservative slate and served as mayor in 2024, the city’s first Latina mayor. She led creation of a committee to review library books for sexual content; voters later eliminated the board.',
          'She is endorsed by the California Republican Party.',
        ],
        scorecard: [
          { topic: 'Education', position: '✓ Parental rights; led library book-review panel that voters later repealed', comparison: 'Kluwe opposes book bans.' },
          { topic: 'Taxes', position: '✓ Fiscal responsibility is a top priority', comparison: 'Kluwe has no stated tax plan.' },
          { topic: 'Public safety', position: '✓ Lists public safety as a priority', comparison: 'Kluwe faces a misdemeanor charge from a 2025 council protest.' },
          { topic: 'Caucus / ideology', position: '✓ Conservative; backed Huntington Beach voter ID', comparison: 'Kluwe is a progressive activist.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'California Republican Party (Jan 2026) and Supervisor Janet Nguyen, per her campaign.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Kluwe', '◐', 'Progressive Left voters back Kluwe’s fight against book bans, noting the misdemeanor charge from his 2025 protest.'],
      ['EL', 'Kluwe', '◐', 'Establishment Liberals prefer the Democrat but weigh his lack of office experience and his 2025 protest charge.'],
      ['DM', 'Kluwe', '◐', 'Democratic Mainstays back the Democratic nominee, despite his 2025 arrest and charge.'],
      ['OL', 'Kluwe', '◐', 'Outsider Left voters admire Kluwe’s civil disobedience, though the resulting charge is a legal caveat.'],
      ['SS', 'Van Der Mark', '○', 'Stressed Sideliners may lean to a former mayor over an activist, a weak lean.'],
      ['AR', 'Van Der Mark', '◐', 'Ambivalent Right voters like her fiscal focus but some may be wary of the culture-war fights she led.'],
      ['PR', 'Van Der Mark', '●', 'Populist Right voters back a conservative who pushed voter ID and library limits.'],
      ['CC', 'Van Der Mark', '●', 'Committed Conservatives back the state GOP’s endorsed candidate on fiscal responsibility.'],
      ['FF', 'Van Der Mark', '●', 'Faith and Flag Conservatives favor her parental-rights record.'],
    ]),
    counterArguments: [
      'PL (Kluwe ◐): But consider that Kluwe was charged with a misdemeanor after his 2025 council protest, and no outcome has been reported.',
      'PR (Van Der Mark ●): But consider that Huntington Beach voters repealed the library review board she championed.',
    ],
  },

  // ───────────────────────────── AD-73 ─────────────────────────────
  {
    id: 'assembly-ad73',
    categoryId: 'state-leg',
    title: 'State Assembly, District 73',
    tldrLabel: 'AD-73',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-73 covers Irvine, Costa Mesa and Tustin.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASM_STAKES_1,
      'Petrie-Norris chairs the Utilities and Energy Committee, which shapes electricity rates, grid reliability and energy policy statewide, and she also sits on Budget.',
    ],
    introParagraphs: [
      'In a two-person June primary, Democratic incumbent Cottie Petrie-Norris took 60.9% and Republican Urson Russell 39.1% (Statement of Vote). Russell has no published campaign platform found; the race turns on turnout more than issues. No polling was found.',
    ],
    readingLinks: [
      { label: 'Assemblywoman Petrie-Norris — official biography', url: 'https://a73.asmdc.org/biography', summary: 'Committee roles and recognition.' },
    ],
    candidates: [
      {
        id: 'cottie-petrie-norris',
        name: 'Cottie Petrie-Norris',
        party: 'D',
        role: 'California State Assemblymember',
        campaignUrl: 'https://a73.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since December 2018 who chairs Utilities and Energy and sits on Budget.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since 2018; four general-election wins (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair, Utilities and Energy; member, Budget, Insurance, and Privacy and Consumer Protection (official biography).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Represents Costa Mesa, Irvine and Tustin; earlier Laguna Beach housing committee member.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Named Legislator of the Year by business and life-sciences groups and given the Sierra Club’s Political Leadership Award.' },
          ],
        },
        bio: [
          'Petrie-Norris, a Yale graduate and businesswoman, unseated Republican Matthew Harper in 2018 and moved to the redrawn 73rd in 2022. She chairs the Assembly Utilities and Energy Committee and sits on Budget.',
          'She has drawn awards from both the Sierra Club and business groups such as TechNet.',
        ],
        recordVsChange:
          'As chair of Utilities and Energy she shapes statewide electricity policy; replacing her trades that clout for a first-time candidate with no published platform.',
        scorecard: [
          { topic: 'Climate', position: '✓ Sierra Club Political Leadership Award for climate-resilience work', comparison: 'Russell has no published climate position.' },
          { topic: 'Energy costs', position: '✓✓ Chairs the committee overseeing utility rates and grid policy', comparison: 'Russell has no published energy position.' },
          { topic: 'Caucus / ideology', position: '✓ Business-friendly moderate Democrat; TechNet and family-business awards', comparison: 'Russell is a Republican businessman.' },
          { topic: 'District clout', position: '✓ Secures state funding for Orange County projects, per her office', comparison: 'Russell has held no office.' },
        ],
        money: CAL_ACCESS,
        endorsements: NONE_VERIFIED,
      },
      {
        id: 'urson-russell',
        name: 'Urson Russell',
        party: 'R',
        role: 'Businessman',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Businessman on the ballot; no campaign site, platform or public-office record found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'Russell’s ballot designation is Businessman. No campaign website or questionnaire response was found as of Sept 2026 (The Ballot Brief).',
        ],
        scorecard: [
          { topic: 'Caucus / ideology', position: '? Republican; no published platform', comparison: 'Petrie-Norris is a moderate Democrat.' },
          { topic: 'Energy costs', position: '? No position found', comparison: 'Petrie-Norris chairs Utilities and Energy.' },
        ],
        money: CAL_ACCESS,
        endorsements: NONE_VERIFIED,
      },
    ],
    crossTypology: ct([
      ['PL', 'Petrie-Norris', '◐', 'Progressive Left voters back the Democrat with Sierra Club recognition, though she is a business-friendly moderate.'],
      ['EL', 'Petrie-Norris', '●', 'Establishment Liberals value a committee chair with influence over statewide energy policy.'],
      ['DM', 'Petrie-Norris', '●', 'Democratic Mainstays back the Democratic incumbent.'],
      ['OL', 'Petrie-Norris', '◐', 'Outsider Left voters prefer the Democrat but are cool on her business-group ties.'],
      ['SS', 'Petrie-Norris', '○', 'Stressed Sideliners have no information on Russell and lean to the known incumbent.'],
      ['AR', 'Russell', '○', 'Ambivalent Right voters may default to the Republican, but with no platform it is a weak lean.', 'Ambivalent Right voters who want competence could back Petrie-Norris, a business-friendly committee chair, giving up a Republican vote for a candidate whose views are unknown.'],
      ['PR', 'Russell', '◐', 'Populist Right voters back the Republican as an outsider, though he has published nothing.', 'Populist Right voters who want someone able to deliver could back Petrie-Norris, an experienced chair, accepting a Democrat in exchange for clout on energy costs.'],
      ['CC', 'Russell', '●', 'Committed Conservatives back the Republican nominee on party principle.'],
      ['FF', 'Russell', '●', 'Faith and Flag Conservatives back the Republican nominee over a Democrat.'],
    ]),
    counterArguments: [
      'CC (Russell ●): But consider that Russell has no published platform or campaign site, so voters cannot check what he would do.',
    ],
  },

  // ───────────────────────────── AD-74 ─────────────────────────────
  {
    id: 'assembly-ad74',
    categoryId: 'state-leg',
    title: 'State Assembly, District 74',
    tldrLabel: 'AD-74',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-74 covers southern Orange County (Laguna Niguel, Dana Point, San Juan Capistrano, San Clemente) and northern San Diego County coast.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASM_STAKES_1,
      'Davies won this seat narrowly, with 52.6% in 2022 and 50.8% in 2024, both times against Democrat Chris Duncan, making it one of the closer Assembly districts in Southern California.',
    ],
    introParagraphs: [
      'In a two-person June primary, Republican incumbent Laurie Davies took 52.3% and Democrat Sergio Farias 47.7% (Statement of Vote). Farias, a San Juan Capistrano councilmember, is pitching bipartisan local experience on costs and public safety. No polling was found.',
    ],
    readingLinks: [
      { label: 'Capistrano Dispatch — Farias running for Assembly (Feb 2025)', url: 'https://www.picketfencemedia.com/thecapistranodispatch/eye-on-sjc/sergio-farias-running-for-state-assembly/article_41bf0df0-ea5c-11ef-9c77-23f17afcd297.html', summary: 'Farias’s background and priorities.' },
      { label: 'The Ballot Brief — Assembly District 74', url: 'https://theballotbrief.com/state/california/orange-county/california-assembly-district-74', summary: 'Roster with priorities for both candidates.' },
    ],
    candidates: [
      {
        id: 'laurie-davies',
        name: 'Laurie Davies',
        party: 'R',
        role: 'Assemblywoman/Business Owner',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since December 2020 after eight years on the Laguna Niguel council, including as mayor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since 2020 (73rd, then 74th district).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Committee assignments not confirmed in sources reviewed; Laguna Niguel council 2012–2020.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Laguna Niguel mayor in 2016 and 2020; represents the district since 2022.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Minority-party member; organized a lawmaker coalition letter against South Coast AQMD gas-appliance rules.' },
          ],
        },
        bio: [
          'Davies founded Five Star Wedding and Events in 2000 after managing Orange County restaurants and event venues. She served on the Laguna Niguel council from 2012 to 2020, including as mayor.',
          'She won the Assembly in 2020 and has twice held off Democrat Chris Duncan.',
        ],
        recordVsChange:
          'Davies offers six years of Assembly experience in a closely divided seat; replacing her brings a Democrat with long city-council experience who would join the majority.',
        scorecard: [
          { topic: 'Climate', position: '✗ Led a letter urging regulators to reject phasing out gas water and space heaters', comparison: 'Farias has no published climate position.' },
          { topic: 'Cost of living', position: '✓ Keeping prices affordable for families is a stated priority', comparison: 'Farias also lists lowering costs.' },
          { topic: 'Public safety', position: '✓ Neighborhood safety and wildfire-risk reduction', comparison: 'Farias cites more law enforcement in San Juan Capistrano.' },
          { topic: 'Caucus / ideology', position: '✓ Republican', comparison: 'Farias is a Democrat who touts work with both parties.' },
        ],
        money: CAL_ACCESS,
        endorsements: NONE_VERIFIED,
      },
      {
        id: 'sergio-farias',
        name: 'Sergio Farias',
        party: 'D',
        role: 'City Councilmember/Businessman',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'San Juan Capistrano councilmember since December 2016 and former mayor, and longtime landscaping-business owner; no legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'City councilmember since 2016, voting on local ordinances.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'City budget votes; says projects were completed “without new debt.”' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Lifelong San Juan Capistrano resident and neighborhood leader.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Says he has worked with Democrats and Republicans locally.' },
          ],
        },
        bio: [
          'Farias, a lifelong San Juan Capistrano resident, has owned a landscape-maintenance company for nearly two decades and has served on the city council since December 2016, including as mayor (Capistrano Dispatch).',
          'He cites road, sidewalk, park and trolley improvements done without new city debt.',
        ],
        scorecard: [
          { topic: 'Cost of living', position: '✓ Lowering costs and housing affordability are top priorities', comparison: 'Davies also stresses affordability.' },
          { topic: 'Public safety', position: '✓ Cites added law enforcement and safer sidewalks in his city', comparison: 'Davies lists neighborhood safety.' },
          { topic: 'Housing & transit', position: '✓ Reducing homelessness and expanding affordability; expanded trolley service locally', comparison: 'Davies has no distinctive housing bill found.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat; touts bipartisan local work', comparison: 'Davies is a Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'California Democratic Party, per the Blue Voter Guide listing (accessed Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Farias', '●', 'Progressive Left voters back the Democrat on housing affordability and homelessness.'],
      ['EL', 'Farias', '●', 'Establishment Liberals value Farias’s eight years of practical city governance.'],
      ['DM', 'Farias', '●', 'Democratic Mainstays back the Democratic nominee in a winnable seat.'],
      ['OL', 'Farias', '◐', 'Outsider Left voters favor a small-business owner over an incumbent, though Farias runs as a pragmatic centrist.', 'Outsider Left voters who weigh experience could back Davies, a six-year legislator, giving up a Democratic vote and accepting her opposition to gas-appliance phase-outs.'],
      ['SS', 'Davies', '○', 'Stressed Sideliners lean toward the incumbent they know, a weak lean.'],
      ['AR', 'Davies', '◐', 'Ambivalent Right voters like Davies’s cost focus but may find Farias’s bipartisan pitch appealing.'],
      ['PR', 'Davies', '●', 'Populist Right voters back the Republican who fought gas-appliance rules as costly for families.'],
      ['CC', 'Davies', '●', 'Committed Conservatives back the Republican incumbent on taxes and regulation.'],
      ['FF', 'Davies', '●', 'Faith and Flag Conservatives favor the Republican incumbent.'],
    ]),
    counterArguments: [
      'PR (Davies ●): But consider that Farias has run a business and a city for years without new debt, which matches the cost focus Davies campaigns on.',
      'PL (Farias ●): But consider that Davies has won this district three times, and Farias would arrive with no legislative experience.',
    ],
  },
];
