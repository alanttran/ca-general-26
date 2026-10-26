import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * North State district races: U.S. House CA-1 to CA-4 (Prop 50 map), State Senate SD-2 and SD-4,
 * Assembly AD-1 to AD-4. Primary shares are from the Secretary of State’s certified Statement of Vote
 * for the June 2, 2026 primary. Research as of Oct 8, 2026.
 */

const SOV_HOUSE = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/76-us-rep.pdf';
const SOV_SENATE = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/90-state-senator.pdf';
const SOV_ASSEMBLY = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/95-state-assembly.pdf';
const CAL_ACCESS = 'No verified current totals found; see Cal-Access at https://cal-access.sos.ca.gov/.';

const US_REP_LEGAL =
  'At least 25 years old, a U.S. citizen for at least 7 years, and an inhabitant of California when elected (U.S. Constitution art. I, section 2); two-year term.';

const US_REP_STAKES =
  'A U.S. representative votes on federal taxes, health programs, immigration, defense, disaster and wildfire money, and oversight of the executive branch, and runs a casework office that helps constituents with veterans’ benefits, Social Security and federal agencies.';

const US_REP_CRITERIA: QualificationCriterion[] = [
  { id: 'lawmaking', label: 'Lawmaking and policy experience', detail: 'The job is writing, amending and voting on federal law.' },
  { id: 'committee-budget', label: 'Committee and budget work', detail: 'Most legislative work happens in committees that shape spending and oversight.' },
  { id: 'district-service', label: 'Constituent services and knowledge of the district', detail: 'Members run casework offices and carry local priorities to Washington.' },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Little becomes law without bipartisan or cross-chamber partners.' },
];

const LEGAL_LEG =
  'At least 18, a registered voter, a U.S. citizen, a California resident for 3 years and a district resident for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

const LEG_CRITERIA = (chamber: 'Senators' | 'Assembly members', districtDetail: string): QualificationCriterion[] => [
  { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: `${chamber} write, amend and vote on state statutes.` },
  { id: 'committee-budget', label: 'Budget, committee or public-agency governance work', detail: 'The state budget and policy committees shape what reaches the floor.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const SENATE_STAKES =
  'State senators vote on the state budget, housing and land-use law, water, wildfire and energy rules, taxes and public-safety statutes, and confirm the governor’s appointees; they serve four-year terms.';
const ASSEMBLY_STAKES =
  'Assembly members vote on the state budget, housing and land-use law, water, wildfire, insurance and energy rules, taxes and public-safety statutes; they serve two-year terms.';

export const RACES_D_NORTH_STATE: Race[] = [
  // ───────────────────────────── CA-1 ─────────────────────────────
  {
    id: 'us-rep-ca1',
    categoryId: 'federal',
    title: 'U.S. Representative, 1st District',
    tldrLabel: 'CA-1',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent (elected in June special election)',
    kind: 'candidates',
    stakesParagraphs: [
      US_REP_STAKES,
      'Proposition 50 moved CA-1 west and south: it now takes in Santa Rosa and much of Sonoma County, Lake and Mendocino counties, Chico and Paradise, and drops Redding and Yuba City. Kamala Harris would have won the new lines by about 12 points, versus Trump’s 25-point win on the old ones (NSPR).',
    ],
    introParagraphs: [
      'Republican James Gallagher won the June 2 special election for the late Rep. Doug LaMalfa’s seat on the old lines and was sworn in in June. On the new lines the same day, Gallagher took 42.1% and Democratic state Sen. Mike McGuire 41.8%, with Democrat Audrey Denney at 14.2% (certified Statement of Vote). Cook rates the redrawn seat Solid Democratic; November turns on Denney voters and Sonoma County turnout.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote', url: SOV_HOUSE, summary: 'Certified district totals for every primary candidate.' },
      {
        label: 'Sacramento Bee — Your guide to California’s 1st Congressional District race (Oct 5, 2026)',
        url: 'https://www.yahoo.com/news/politics/articles/guide-california-1st-congressional-district-113000869.html',
        summary: 'Backgrounds, new district lines and FEC fundraising through June for both finalists.',
      },
      {
        label: 'NSPR — Gallagher and McGuire head to November (June 5, 2026)',
        url: 'https://www.mynspr.org/news/2026-06-05/james-gallagher-mike-mcguire-congress-november-general-election-campaign-what-to-know',
        summary: 'How Prop 50 changed the seat, the Cook rating, and the health-care and “rigged map” lines of attack.',
      },
    ],
    candidates: [
      {
        id: 'james-gallagher',
        photoSlug: 'james-gallagher',
        name: 'James Gallagher',
        party: 'R',
        role: 'United States Representative/Farmer',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Sitting member of Congress since June 2026 after 11-plus years in the Assembly, including a stint as Assembly Republican leader; earlier a Sutter County supervisor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly member (3rd District) from 2014 until his 2026 resignation; U.S. representative since June 2026 (Sacramento Bee).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Assembly Republican leader Feb 2022–Sept 2025, voting on and negotiating state budgets; on the House Foreign Affairs and Transportation committees since June 2026 (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Represented the Sacramento Valley and North State in the Assembly; Santa Rosa and most of Sonoma County, now in CA-1, are new to him.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'As minority leader he worked in a chamber with a Democratic supermajority; no specific bipartisan federal law found yet.' },
          ],
        },
        bio: [
          'Yuba City native, attorney, partner in his family’s rice and walnut farm and former Sutter County supervisor, 45, with degrees from UC Berkeley and UC Davis law school. He served in the Assembly from 2014 and was Assembly Republican leader from 2022 to 2025.',
          'He won the June special election and resigned his Assembly seat. He campaigns on lower taxes and fees, tougher crime laws and protecting farms from regulation, and calls the Prop 50 lines “rigged” for McGuire.',
        ],
        recordVsChange:
          'He has held the seat only since June, so there is little federal record to judge; the case for keeping him rests on his Assembly leadership and continuity with LaMalfa’s North State priorities, while the redrawn district is far more Democratic than the one he was elected in.',
        scorecard: [
          { topic: 'Health care', position: '? No detailed plan found', comparison: 'McGuire makes defending health coverage and Medicaid his main contrast.' },
          { topic: 'Immigration', position: '✓ Tougher border security (Sacramento Bee)', comparison: 'McGuire’s immigration position is not detailed in coverage.' },
          { topic: 'Taxes and regulation', position: '✓✓ Lower taxes and fees; shield farms from excessive regulation', comparison: 'McGuire stresses school funding and expanded health coverage.' },
          { topic: 'Trump / House majority', position: '✓✓ Endorsed by President Trump; would add to the Republican majority', comparison: 'McGuire says he has pushed back on Trump policies.' },
          { topic: 'District clout', position: '~ Brief seniority since June 2026; former Assembly Republican leader', comparison: 'McGuire led the state Senate as president pro tem.' },
        ],
        money:
          'About $1.24 million raised in the first half of 2026, about $333,000 on hand at June 30; donors include PACs tied to Reps. Jim Jordan, Brett Guthrie and Tom Emmer (FEC filings via Sacramento Bee, Oct 5, 2026).',
        endorsements:
          'President Donald Trump; Jill LaMalfa, widow of Rep. Doug LaMalfa; Mendocino County Republican Central Committee (Mendocino Voice, May 2026).',
        redFlags: [],
      },
      {
        id: 'mike-mcguire',
        photoSlug: 'mike-mcguire',
        name: 'Mike McGuire',
        party: 'D',
        role: 'California State Senator',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'State senator since 2014 who served as majority leader and then president pro tempore; earlier a Sonoma County supervisor and Healdsburg councilmember. No federal office held.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'State Senate since 2014 representing the North Coast; Senate majority leader, then president pro tempore (Sacramento Bee).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'As pro tem he led the Senate in state budget negotiations; previously a county supervisor voting on Sonoma County budgets.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented Sonoma, Mendocino and the North Coast in the Senate; Santa Rosa is his political base; Butte, Tehama and Lassen are new to him.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Led a 40-member chamber and moved budgets through both houses as pro tem.' },
          ],
        },
        bio: [
          'Healdsburg native from a farming family, 47, with a political science degree from Sonoma State. He served on the Healdsburg City Council and Sonoma County Board of Supervisors before winning a state Senate seat in 2014, later serving as majority leader and Senate president pro tem.',
          'He centers his campaign on health care, saying Republican Medicaid cuts paid for tax breaks for the wealthy, and on school funding.',
        ],
        scorecard: [
          { topic: 'Health care', position: '✓✓ Says he expanded coverage in Sacramento; opposes federal Medicaid cuts (NSPR)', comparison: 'Gallagher has no detailed health plan in coverage.' },
          { topic: 'Immigration', position: '? Not detailed in coverage', comparison: 'Gallagher backs tougher border security.' },
          { topic: 'Taxes and regulation', position: '~ Criticizes tax cuts for the wealthy; no federal tax plan found', comparison: 'Gallagher wants lower taxes and fees.' },
          { topic: 'Trump / House majority', position: '✓✓ Endorsed by Gov. Newsom and Sen. Padilla; says he has pushed back on Trump', comparison: 'Gallagher is Trump-endorsed.' },
          { topic: 'District clout', position: '~ Led the state Senate; would be a first-term member', comparison: 'Gallagher already holds the seat, though only since June.' },
        ],
        money:
          'About $1.83 million raised from November 2025 through June 2026, about $152,000 on hand; donors include SEIU COPE and the Resource Conservation PAC (FEC filings via Sacramento Bee, Oct 5, 2026).',
        endorsements: 'Gov. Gavin Newsom; Sen. Alex Padilla; Inland Mendocino Democratic Club (Mendocino Voice, May 2026).',
        redFlags: [],
        notes: [
          'Gallagher and others accuse McGuire, who as pro tem helped advance Prop 50, of drawing CA-1 for himself; McGuire’s campaign focuses on health care instead (NSPR, June 2026).',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'McGuire', '●', 'Leftward Progressives want Democrats to push back on Trump and protect the safety net, and McGuire makes opposing Medicaid cuts that paid for tax breaks for the wealthy his central issue.'],
      ['LL', 'McGuire', '●', 'Loyal Liberals value a former state Senate leader who has moved budgets through both houses and is endorsed by Gov. Newsom and Sen. Padilla.'],
      ['LO', 'McGuire', '◐', 'Left-Out Left voters want health coverage protected, which McGuire stresses, though they distrust that a top Sacramento insider helped pass the map that drew the seat he is running for.'],
      ['OO', 'McGuire', '◐', 'Order and Opportunity Left voters want health-care help and school funding, which favor McGuire, though Gallagher’s tougher-crime and lower-fees message speaks to their wish for order and lower costs.'],
      ['TM', 'Gallagher / McGuire', '=', 'Tuned-Out Middle voters support government health coverage but also want lower costs: if defending Medicaid matters most, McGuire; if lower taxes and fees matter more, Gallagher.'],
      ['PP', 'Gallagher', '◐', 'Pragmatic and Polite Right voters value experience and fiscal restraint, and Gallagher led the Assembly Republicans through budget talks with a Democratic majority, though his Trump endorsement and “rigged” map attacks give some of them pause.'],
      ['UR', 'Gallagher', '●', 'Unconventional Right voters want border security, lower taxes and less regulation, which are the core of Gallagher’s campaign.'],
      ['FC', 'Gallagher', '●', 'Faith First Conservatives want limited government, tougher crime laws and border security, and Gallagher is the Republican running on all three.'],
      ['NA', 'Gallagher', '●', 'No Apologies Right voters want a Trump-endorsed fighter who shields farms from regulation and calls the Prop 50 lines “rigged.”'],
    ]),
    counterArguments: [
      'LL (McGuire ●): But consider that McGuire, as Senate leader, helped advance the Prop 50 map that drew this seat, which critics call a conflict, and Gallagher already holds the seat.',
      'PP (Gallagher ◐): But consider that Gallagher is endorsed by Trump and would add to a Republican majority aligned with him, while McGuire has led a 40-member chamber through budgets.',
      'NA (Gallagher ●): But consider that the redrawn seat is rated Solid Democratic, so McGuire’s leadership experience may give the district more leverage in a Democratic House.',
    ],
  },

  // ───────────────────────────── CA-2 ─────────────────────────────
  {
    id: 'us-rep-ca2',
    categoryId: 'federal',
    title: 'U.S. Representative, 2nd District',
    tldrLabel: 'CA-2',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      US_REP_STAKES,
      'Prop 50 stretched CA-2 from Marin up the coast and inland to heavily Republican Shasta, Siskiyou and Modoc counties, including Redding. Wolves and ranching, water, wildfire and rural health-care access are central issues; Cook rates the seat Solid Democratic.',
    ],
    introParagraphs: [
      'Democratic Rep. Jared Huffman took 56.5% in the June 2 primary. Four Republicans split about 31%; Robin Littau led them with 11.4% (certified Statement of Vote). November turns on whether a united Republican vote in the new inland counties can cut into Huffman’s coastal base.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote', url: SOV_HOUSE, summary: 'Certified district totals for every primary candidate.' },
      {
        label: 'Jefferson Public Radio — Huffman and Littau make their case (Oct 1, 2026)',
        url: 'https://www.ijpr.org/politics-government/2026-10-01/huffman-and-littau-make-their-case-in-a-redrawn-northern-california-district',
        summary: 'Forum recap: health care, homelessness, wolves and ranchers, and each campaign’s fundraising.',
      },
      {
        label: 'KRCR — Voters to decide Huffman-Littau matchup',
        url: 'https://krcrtv.com/north-coast-news/north-coast-know-your-candidates/voters-to-decide-huffman-littau-matchup-in-californias-2nd-congressional-district',
        summary: 'Local TV profile of both finalists.',
      },
    ],
    candidates: [
      {
        id: 'jared-huffman',
        photoSlug: 'jared-huffman',
        name: 'Jared Huffman',
        party: 'D',
        role: 'U.S. Representative',
        campaignUrl: 'https://huffman.house.gov',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Member of Congress since 2013 and the top Democrat on the House Natural Resources Committee; earlier a state Assembly member and NRDC attorney.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since January 2013; California Assembly 2006–2012.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Ranking member of the House Natural Resources Committee, which oversees public lands, water and wildlife.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Has represented the North Coast since 2013; Shasta, Siskiyou and Modoc, added by Prop 50, are new to him.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Long tenure in the minority and majority; no specific recent bipartisan law verified for this guide.' },
          ],
        },
        bio: [
          'San Rafael Democrat first elected in 2012; previously a senior attorney at the Natural Resources Defense Council and a state Assembly member. He is the ranking Democrat on the House Natural Resources Committee.',
          'He emphasizes health-care costs and access, opposes tax breaks for corporations and the wealthy, and on wolves wants to restore deer, elk and antelope habitat so wolves have more natural prey (Jefferson Public Radio).',
        ],
        recordVsChange:
          'Thirteen years in the House and a ranking-member post give the district seniority on water, forests and public lands; the case for change is that most of the new inland counties have never chosen him and voted for Trump.',
        scorecard: [
          { topic: 'Health care', position: '✓✓ Says the core issues are access and affordability; opposes cuts that fund tax breaks', comparison: 'Littau would hunt for waste, fraud and administrative cost in health spending.' },
          { topic: 'Climate', position: '✓✓ Former NRDC attorney; leads Democrats on Natural Resources', comparison: 'Littau calls for fewer restrictive regulations and more forest management.' },
          { topic: 'Wolves and ranching', position: '~ Habitat restoration for wolves’ natural prey among several approaches', comparison: 'Littau welcomes deterrent and compensation funding for ranchers.' },
          { topic: 'Trump / House majority', position: '✓✓ Would vote with House Democrats', comparison: 'Littau would add to the Republican majority.' },
          { topic: 'District clout', position: '✓ Ranking member of a major committee', comparison: 'Littau would be a first-term member.' },
        ],
        money: 'Nearly $1 million raised since 2025 (federal filings via Jefferson Public Radio, Oct 1, 2026).',
        endorsements: 'No verified endorsement list found for this guide.',
        redFlags: [],
      },
      {
        id: 'robin-littau',
        name: 'Robin Littau',
        party: 'R',
        role: 'Enterprise Elementary School Board Member',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Shasta County school board member and small-business owner; no legislative or partisan office held.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative experience found; serves on the Enterprise Elementary School District board in Shasta County (Patch questionnaire).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on a school district budget as a trustee.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Redding resident and business owner; no record in the coastal half of the district.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of building legislative coalitions.' },
          ],
        },
        bio: [
          'Coast Guard veteran and single mother who owns a Redding cleaning business and a faith-based lifestyle magazine; she serves on the Enterprise Elementary School District board.',
          'She lists homelessness, public safety, government waste, fire prevention and forest management, water and affordability as priorities, and backs voter ID and a “parental bill of rights.”',
        ],
        scorecard: [
          { topic: 'Health care', position: '~ Cut waste, fraud and administrative costs so more money reaches local services', comparison: 'Huffman focuses on access and opposing cuts.' },
          { topic: 'Climate', position: '~ Fewer restrictive regulations; more fire prevention and forest management', comparison: 'Huffman is a longtime environmental lawyer and legislator.' },
          { topic: 'Immigration', position: '✓ Immigration reform and support for law enforcement (campaign platform)', comparison: 'Huffman votes with House Democrats.' },
          { topic: 'Trump / House majority', position: '✓ Would add to the Republican majority', comparison: 'Huffman would vote with Democrats.' },
          { topic: 'District clout', position: '✗ No federal or legislative experience', comparison: 'Huffman is a committee ranking member.' },
        ],
        money: 'Less than $5,000 raised (federal filings via Jefferson Public Radio, Oct 1, 2026).',
        endorsements: 'No verified endorsement list found for this guide.',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Huffman', '●', 'Leftward Progressives want strong climate action and taxes on the wealthy, and Huffman is a former NRDC attorney who leads House Democrats on public lands and opposes tax breaks for corporations and the rich.'],
      ['LL', 'Huffman', '●', 'Loyal Liberals value a 13-year incumbent with a ranking-member post and deep policy expertise on water, forests and wildlife.'],
      ['LO', 'Huffman', '◐', 'Left-Out Left voters may want fresher faces than a 13-year incumbent, but Huffman focuses on health-care access and opposes tax breaks for the wealthy, which fits their economics.'],
      ['OO', 'Huffman', '◐', 'Order and Opportunity Left voters want health-care access and steady representation, which favor Huffman, though Littau’s focus on homelessness and public safety appeals to them.'],
      ['TM', 'Huffman', '○', 'Tuned-Out Middle voters focused on health costs lean to Huffman’s access-and-affordability focus, though Littau’s message on waste and homelessness also resonates.'],
      ['PP', 'Huffman', '○', 'Pragmatic and Polite Right voters reward competence, and Huffman’s seniority on water and forest policy outweighs a first-time candidate who raised under $5,000, though his climate views are further left than theirs.'],
      ['UR', 'Littau', '◐', 'Unconventional Right voters want less regulation and support for law enforcement, and Littau calls for fewer restrictive rules, more forest management and voter ID.', 'Unconventional Right voters who value experience could back Huffman, who leads Democrats on Natural Resources and knows water and forest policy, giving up a Republican vote and Littau’s waste-cutting and voter-ID message.'],
      ['FC', 'Littau', '●', 'Faith First Conservatives favor a Coast Guard veteran who publishes a faith-based magazine and backs a “parental bill of rights.”'],
      ['NA', 'Littau', '●', 'No Apologies Right voters want deregulation and voter ID, and Littau would cut restrictive regulations and add to the Republican majority.'],
    ]),
    counterArguments: [
      'FC (Littau ●): But consider that Littau has raised under $5,000 and has no legislative experience, so her ability to deliver for ranchers and rural counties is untested.',
      'PP (Huffman ○): But consider that most of the new inland counties have never chosen Huffman and voted for Trump, and his environmental record is the regulation Littau says burdens rural areas.',
    ],
  },

  // ───────────────────────────── CA-3 ─────────────────────────────
  {
    id: 'us-rep-ca3',
    categoryId: 'federal',
    title: 'U.S. Representative, 3rd District',
    tldrLabel: 'CA-3',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent from another district (redrawn)',
    kind: 'candidates',
    stakesParagraphs: [
      US_REP_STAKES,
      'Prop 50 turned CA-3, formerly Kevin Kiley’s Republican seat, into a Democratic-leaning district running from Lake Tahoe through Placer, El Dorado and Nevada counties to Folsom, Rancho Cordova and Arden Arcade. Wildfire insurance, costs and the Iran war dominate the race (CapRadio).',
    ],
    introParagraphs: [
      'Rep. Ami Bera, who has represented Sacramento County since 2013, took 34.3% in the June 2 primary and Nevada County Supervisor Robb Tucker 29.9%, ahead of Democrat Heidi Hall (12.8%) and Republican Christine Bish (11.9%) (certified Statement of Vote). Democrats combined for about 56%. The race turns on whether Tucker’s rural pitch can win suburban Sacramento voters.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote', url: SOV_HOUSE, summary: 'Certified district totals for every primary candidate.' },
      {
        label: 'India West — Bera and Tucker clash in KCRA debate (Oct 7, 2026)',
        url: 'https://indiawest.com/ami-bera-disagrees-in-debate-with-gop-opponent-over-iran-war-ai-environment/',
        summary: 'Positions on the Iran war, tariffs, AI, wildfire insurance, offshore drilling and immigration from the Oct 6 debate.',
      },
      {
        label: 'CapRadio — Meet the candidates for Congressional District 3 (Sept 18, 2026)',
        url: 'https://www.capradio.org/articles/2026/09/18/meet-the-candidates-running-for-californias-congressional-district-3/',
        summary: 'Profiles and district background.',
      },
    ],
    candidates: [
      {
        id: 'ami-bera',
        photoSlug: 'ami-bera',
        name: 'Ami Bera',
        party: 'D',
        role: 'United States Congressman',
        campaignUrl: 'https://bera.house.gov',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Seven-term member of Congress (since 2013) on the Foreign Affairs and Intelligence committees; physician and former medical-school teacher.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since January 2013, representing Sacramento County districts.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Member of the House Foreign Affairs Committee and the Permanent Select Committee on Intelligence.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'His office says it has helped about 40,000 people with immigration and IRS issues (CapRadio); the foothill and Tahoe areas are new to him.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Long tenure; no specific recent bipartisan law verified for this guide.' },
          ],
        },
        bio: [
          'Physician and former UC Davis medical-school teacher who has served in Congress since 2013; his current 6th District overlaps the Sacramento County part of the new CA-3.',
          'He calls the Iran war illegal without congressional approval, wants Trump’s tariffs rolled back, proposes starter homes on vacant public land and a secondary market to spread catastrophic wildfire risk (KCRA debate, Oct 6).',
        ],
        recordVsChange:
          'Thirteen years of seniority and foreign-affairs expertise carry over; the case for change is that half the new district is foothill and Tahoe country he has never represented.',
        scorecard: [
          { topic: 'Housing', position: '✓ Starter homes on vacant public land', comparison: 'Tucker would cut regulations, permitting and fees that raise building costs.' },
          { topic: 'Climate', position: '✓ Opposes expanding offshore drilling; would slow California’s 2035 gas-car phase-out', comparison: 'Tucker supports offshore drilling and opposes the 2035 rule.' },
          { topic: 'Wildfire insurance', position: '✓ Secondary market for catastrophic risk; tax credits for home hardening', comparison: 'Tucker blames environmental rules for limiting forest clearing.' },
          { topic: 'Immigration', position: '✓ Local police should not help deportations except for criminals', comparison: 'Tucker says local agencies should be allowed to help federal agents.' },
          { topic: 'Trump / House majority', position: '✓✓ Calls the Iran war illegal; opposes tariffs', comparison: 'Tucker backs regime change in Iran and would add to the GOP majority.' },
        ],
        money: 'No verified current FEC totals found for this guide; see https://www.fec.gov/.',
        endorsements: 'No verified endorsement list found for this guide.',
        redFlags: [],
      },
      {
        id: 'robb-tucker',
        name: 'Robb Tucker',
        party: 'R',
        role: 'County Supervisor/Businessman',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Nevada County supervisor since January 2025 and a business owner; no state or federal legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Nevada County Board of Supervisors, District 2, since January 2025; local ordinances only.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on the Nevada County budget.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Represents part of Nevada County; Sacramento County suburbs, most of the district’s voters, are new to him.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of building legislative coalitions.' },
          ],
        },
        bio: [
          'Businessman elected to the Nevada County Board of Supervisors in 2024. He says the district needs someone who will represent rural interests, and lists public safety, wildfire preparedness and job creation as priorities.',
          'He says 16 years of state homelessness policy have failed, supports expanded offshore drilling and backs regime change in Iran.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Cut regulations, permitting and fees that raise construction costs', comparison: 'Bera proposes starter homes on public land.' },
          { topic: 'Climate', position: '✗ Supports offshore drilling; opposes the 2035 gas-car rule', comparison: 'Bera opposes new offshore drilling.' },
          { topic: 'Wildfire insurance', position: '~ Blames environmental rules that limit forest clearing', comparison: 'Bera proposes a catastrophic-risk secondary market.' },
          { topic: 'Immigration', position: '✓ Local agencies should be allowed to assist federal agents', comparison: 'Bera opposes police help with deportations except for criminals.' },
          { topic: 'Trump / House majority', position: '✓ Would add to the Republican majority; backs Iran regime change', comparison: 'Bera calls the war illegal.' },
        ],
        money: 'No verified current FEC totals found for this guide; see https://www.fec.gov/.',
        endorsements: 'No verified endorsement list found for this guide.',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Bera', '◐', 'Leftward Progressives back the Democrat who calls the Iran war illegal and opposes offshore drilling, though Bera wants to slow the state’s 2035 gas-car phase-out.'],
      ['LL', 'Bera', '●', 'Loyal Liberals value a seven-term physician on the Foreign Affairs and Intelligence committees who works through institutions.'],
      ['LO', 'Bera', '◐', 'Left-Out Left voters oppose deportation drives and want lower prices, and Bera opposes local police helping deportations except for criminals and wants tariffs rolled back, though he is a long-time incumbent.'],
      ['OO', 'Bera', '●', 'Order and Opportunity Left voters want homeownership and moderation on immigration, and Bera proposes starter homes on public land and supports police help only with deporting criminals.'],
      ['TM', 'Bera', '◐', 'Tuned-Out Middle voters want concrete cost relief, and Bera offers tax credits for home hardening, a wildfire-insurance backstop and tariff rollbacks, while Tucker’s plan is cutting fees and rules.'],
      ['PP', 'Bera', '◐', 'Pragmatic and Polite Right voters prefer cautious, experienced members, and Bera’s foreign-affairs record and incremental insurance fixes suit them better than Tucker’s call for regime change in Iran, even across party lines.'],
      ['UR', 'Tucker', '◐', 'Unconventional Right voters want immigration enforcement and lighter regulation, and Tucker wants local agencies to help federal agents and to cut building fees and permits.', 'Unconventional Right voters who want a seasoned member could back Bera, a 13-year congressman who wants to slow the 2035 gas-car rule, accepting a Democrat who opposes local help with deportations over a supervisor with under two years in office.'],
      ['FC', 'Tucker', '●', 'Faith First Conservatives want border enforcement and a strong national defense, and Tucker backs local cooperation with immigration agents and a hard line on Iran.'],
      ['NA', 'Tucker', '●', 'No Apologies Right voters want more drilling, less climate regulation and immigration enforcement, and Tucker backs offshore drilling, opposes the 2035 gas-car rule and supports helping federal agents.'],
    ]),
    counterArguments: [
      'NA (Tucker ●): But consider that Tucker has served under two years in local office, while Bera’s foreign-affairs seniority carries weight in a Congress debating the Iran war.',
      'PP (Bera ◐): But consider that Bera opposes local police helping with deportations except for criminals and would vote with House Democrats, which cuts against this group’s Republican lean on border security.',
    ],
  },

  // ───────────────────────────── CA-4 ─────────────────────────────
  {
    id: 'us-rep-ca4',
    categoryId: 'federal',
    title: 'U.S. Representative, 4th District',
    tldrLabel: 'CA-4',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      US_REP_STAKES,
      'The redrawn CA-4 runs from Napa and Sonoma wine country to the rice fields of Yuba and Sutter counties. This is a Democrat-versus-Democrat race: a 27-year Blue Dog incumbent against a self-funded 35-year-old newcomer courting Republicans. Cook rates it Solid Democratic.',
    ],
    introParagraphs: [
      'Rep. Mike Thompson took 41.0% in the June 2 primary; Democrat Eric Jones edged Republican Ray Riehle for second, 22.2% to 20.7% (certified Statement of Vote). With no Republican on the ballot, Jones has pivoted to court centrists and Republicans and won Riehle’s endorsement (CalMatters). The race turns on where Riehle’s voters go.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote', url: SOV_HOUSE, summary: 'Certified district totals for every primary candidate.' },
      {
        label: 'CalMatters — He’s a Democrat running for a liberal district. He wants Republicans’ help (Sept 2026)',
        url: 'https://calmatters.org/politics/2026/09/california-congressional-race-thompson-jones/',
        summary: 'Jones’s pivot to Republican voters, his self-funding, and Thompson’s record and age.',
      },
      {
        label: 'Press Democrat — Jones poised to face Thompson (June 12, 2026)',
        url: 'https://www.pressdemocrat.com/2026/06/12/eric-jone-mike-thompson-democrats-congress/',
        summary: 'How Jones edged Riehle for the runoff spot.',
      },
    ],
    candidates: [
      {
        id: 'mike-thompson',
        photoSlug: 'mike-thompson',
        name: 'Mike Thompson',
        party: 'D',
        role: 'Member of Congress',
        campaignUrl: 'https://mikethompson.house.gov',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Fourteen-term member of Congress (since 1999) and senior member of the Ways and Means Committee; earlier a state legislator.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since January 1999; previously in the state Legislature.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Senior member of the tax-writing Ways and Means Committee (CalMatters).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented much of the district for 27 years; helped win USDA emergency aid for peach growers (CalMatters).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Worked with the late Republican Rep. Doug LaMalfa to exempt wildfire settlement funds from federal income tax (CalMatters).' },
          ],
        },
        bio: [
          'Vietnam veteran, 75, first elected in 1998 and a member of the centrist Blue Dog Coalition. He sits on Ways and Means and has long chaired House Democrats’ gun-violence-prevention task force.',
          'He says his age is not an issue and that Jones is trying to “buy” the seat; he defends accepting PG&E employee PAC money.',
        ],
        recordVsChange:
          'Decades of seniority on the tax-writing committee and bipartisan wildfire-relief work are concrete; the case for change is generational, plus Jones’s argument that long incumbency and utility-PAC money breed complacency.',
        scorecard: [
          { topic: 'Health care', position: '✓ Votes with Democrats to protect coverage; no new plan in coverage', comparison: 'Jones would expand Medicare to vision, dental, hearing and in-home care.' },
          { topic: 'Taxes', position: '~ Ways and Means member; Blue Dog fiscal centrist', comparison: 'Jones would end federal income tax for earners under $150,000 and raise corporate rates.' },
          { topic: 'Wildfire', position: '✓✓ Co-led tax exemption for wildfire settlements with LaMalfa', comparison: 'Jones has no legislative record.' },
          { topic: 'Ethics / reform', position: '~ Defends taking PG&E employee PAC money', comparison: 'Jones backs a 12-year congressional term limit and attacks “corporate cronyism.”' },
          { topic: 'District clout', position: '✓✓ 27 years of seniority', comparison: 'Jones would be a first-term member.' },
        ],
        money: 'Accepted $20,000 from the PG&E Employee Energy PAC across his last two reelections (CalMatters, Sept 2026); current totals not verified, see https://www.fec.gov/.',
        endorsements: 'California Democratic Party and top state Democratic leaders (Press Democrat, June 2026).',
        redFlags: [],
      },
      {
        id: 'eric-jones',
        name: 'Eric Jones',
        party: 'D',
        role: 'Businessman/Nonprofit Executive',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Former venture capitalist and philanthropist with no elected or government experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative or government service found (CalMatters).' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No public budget experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Moved from San Francisco to Napa in 2021.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'Has assembled support across parties, including Republican Ray Riehle, but has no legislative record.' },
          ],
        },
        bio: [
          'Former venture capitalist and philanthropist, 35, who moved to Napa in 2021. He has put more than $5 million of his own money into the race.',
          'His 27-point platform includes a 12-year congressional term limit, ending federal income tax for earners under $150,000, a national housing-construction bank and higher corporate taxes. After the primary he courted Republicans and praised Rep. James Gallagher.',
        ],
        scorecard: [
          { topic: 'Health care', position: '✓✓ Expand Medicare to vision, dental, hearing aids and in-home care', comparison: 'Thompson votes with Democrats but has no new expansion plan.' },
          { topic: 'Taxes', position: '~ No federal income tax under $150,000; raise corporate rates', comparison: 'Thompson is a Blue Dog on Ways and Means.' },
          { topic: 'Housing', position: '✓ National Housing Construction Bank for low-cost builder loans', comparison: 'Thompson has no distinct housing plan in coverage.' },
          { topic: 'Ethics / reform', position: '✓✓ 12-year congressional term limits; attacks “corporate cronyism” and PG&E donations', comparison: 'Thompson takes PG&E employee PAC money.' },
          { topic: 'District clout', position: '✗ No experience in office', comparison: 'Thompson has 27 years of seniority.' },
        ],
        money:
          'More than $5.1 million of his own money (CalMatters, Sept 2026); more than $8 million total including $5.35 million self-funded, per the Press Democrat (June 2026).',
        endorsements: 'Republican Ray Riehle, third in the primary (Aug 2026); Republican consultant Rob Stutzman works with the campaign (CalMatters).',
        redFlags: [],
        notes: ['He supported Prop 50 but later said he was “ashamed” of how Democrats framed it (CalMatters).'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Jones', '◐', 'Leftward Progressives favor Jones’s Medicare expansion, higher corporate taxes and attacks on corporate PAC money over a Blue Dog who takes PG&E employee PAC money, though Jones is a self-funding former venture capitalist courting Republicans.', 'Leftward Progressives who weigh experience could back Thompson, a 27-year member on Ways and Means who votes with House Democrats, giving up Jones’s Medicare expansion for a Blue Dog who takes PG&E employee PAC money.'],
      ['LL', 'Thompson', '●', 'Loyal Liberals value Thompson’s seniority on the tax-writing committee, his gun-violence-prevention leadership and the state party’s endorsement.'],
      ['LO', 'Jones', '◐', 'Left-Out Left voters distrust long-time insiders and corporate money, and Jones backs term limits and attacks PG&E donations, though Jones is a wealthy newcomer spending $5 million of his own money.', 'Left-Out Left voters who want proven help could back Thompson, who won aid for peach growers and tax relief for wildfire victims, giving up Jones’s term limits and anti-corporate-money push.'],
      ['OO', 'Thompson', '◐', 'Order and Opportunity Left voters prefer steady, mainstream members, and Thompson is a Vietnam veteran who leads on gun-violence prevention and delivered local aid, though Jones’s tax cut for middle earners appeals to them.'],
      ['TM', 'Jones', '○', 'Tuned-Out Middle voters may be drawn to Jones’s promise of no federal income tax under $150,000 and expanded Medicare, though such a plan is unlikely to pass.', 'Tuned-Out Middle voters who want proven help could pick Thompson, who won federal aid for peach growers and tax relief for wildfire victims, giving up Jones’s sweeping tax-cut promise.'],
      ['PP', 'Thompson', '●', 'Pragmatic and Polite Right voters reward incremental, bipartisan work, and Thompson is a Blue Dog who teamed with Republican Doug LaMalfa on wildfire tax relief.'],
      ['UR', 'Thompson / Jones', '=', 'Unconventional Right voters weigh shaking up the establishment against a fiscally cautious member who delivers: if term limits and an outsider matter most, Jones, who has a Republican endorsement and praised Rep. Gallagher, accepting his higher corporate taxes; if smaller spending and proven results matter more, Thompson, a Blue Dog who worked with Republican Doug LaMalfa on wildfire relief, accepting a gun-violence-prevention leader.'],
      ['FC', 'Thompson', '○', 'Faith First Conservatives want government services reduced, so Thompson’s Blue Dog fiscal centrism edges Jones’s Medicare expansion, a weak lean between two Democrats.'],
      ['NA', 'Thompson / Jones', '=', 'No Apologies Right voters weigh shaking up the establishment against smaller government: if disruption matters most, Jones, who runs with a Republican consultant and the third-place Republican’s endorsement, accepting his corporate tax hike and Medicare expansion; if limiting new spending matters more, Thompson, a Blue Dog who worked with LaMalfa, accepting a Democratic leader on gun-violence prevention.'],
    ]),
    counterArguments: [
      'LP (Jones ◐): But consider that Jones has no government experience, has self-funded more than $5 million and has pivoted toward Republicans since June, so his platform may not translate into votes in Congress.',
      'PP (Thompson ●): But consider that Thompson is 75 and seeking a 15th term, and he defends taking PG&E employee PAC money.',
    ],
  },

  // ───────────────────────────── SD-2 ─────────────────────────────
  {
    id: 'senate-sd2',
    categoryId: 'state-leg',
    title: 'State Senate, District 2',
    tldrLabel: 'SD-2',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: LEG_CRITERIA('Senators', 'SD-2 runs up the North Coast from Marin and Sonoma to Del Norte, including Humboldt, Mendocino, Lake and Trinity counties.'),
    seatContext: 'Open (McGuire termed out, running for Congress)',
    kind: 'candidates',
    stakesParagraphs: [
      SENATE_STAKES,
      'SD-2 covers about a third of California’s coastline. Wildfire prevention, home-insurance costs, utility rates and housing affordability are the main issues as Mike McGuire, who held the seat since 2014, leaves to run for Congress.',
    ],
    introParagraphs: [
      'Democratic Assemblymember Damon Connolly took 73.4% in the June 2 primary; Republican Tief Gibbs was second with 16.2%, ahead of Republican Aaron Smith at 10.5% (certified Statement of Vote). Republicans combined for about 27%, so Connolly is the strong favorite.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote', url: SOV_SENATE, summary: 'Certified district totals for every primary candidate.' },
      {
        label: 'KRCB — Three candidates vie to replace Sen. Mike McGuire (May 12, 2026)',
        url: 'https://www.krcb.org/20260512101000/news-feed/three-candidates-vie-to-replace-sen-mike-mcguire-in-district-2',
        summary: 'Primary profiles of Connolly, Gibbs and Smith.',
      },
    ],
    candidates: [
      {
        id: 'damon-connolly',
        photoSlug: 'damon-connolly',
        name: 'Damon Connolly',
        party: 'D',
        role: 'California State Assemblymember',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2022 and earlier a Marin County supervisor; has represented Marin and southern Sonoma in the Legislature.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly District 12 since December 2022 (KRCB).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Votes on state budgets; previously voted on county budgets as a Marin County supervisor.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Represents Marin and southern Sonoma; the North Coast counties are new to him.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Two Assembly terms in the majority party; no specific bipartisan law verified.' },
          ],
        },
        bio: [
          'Marin County Democrat who has represented the 12th Assembly District since 2022 after serving as a Marin County supervisor.',
          'He emphasizes wildfire prevention, affordable home insurance and utility rate reform, along with environmental and worker protections and fiscal responsibility (KRCB).',
        ],
        scorecard: [
          { topic: 'Housing & insurance', position: '✓ Affordable home insurance and utility rate reform', comparison: 'Gibbs blames state leaders for high costs and housing prices.' },
          { topic: 'Climate', position: '✓✓ Environmental protection and wildfire prevention', comparison: 'Gibbs has no published climate position.' },
          { topic: 'Public safety', position: '? No detailed position in coverage', comparison: 'Gibbs lists public safety and quality of life as priorities.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat; CRPA graded him F', comparison: 'Gibbs is a longtime conservative activist; CRPA graded her A.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'No verified endorsement list found; the California Rifle & Pistol Association’s 2026 guide graded him F.',
        redFlags: [],
      },
      {
        id: 'tief-gibbs',
        name: 'Tief Gibbs',
        party: 'R',
        role: 'Small Businesswoman',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Small-business co-owner and longtime conservative activist; no elected office held.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative or government service found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No public budget experience found; former president of Novato Republican Women (KRCB).' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Novato resident and community volunteer.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record.' },
          ],
        },
        bio: [
          'Novato small-business co-owner, community volunteer and former president of the Novato Republican Women.',
          'She says long-serving officeholders have failed the state and cites rising costs, housing affordability, public safety and declining quality of life; she wants her adult children to be able to afford California (KRCB).',
        ],
        scorecard: [
          { topic: 'Housing & insurance', position: '~ Blames state leadership for costs; no detailed plan', comparison: 'Connolly targets insurance and utility rates.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Connolly emphasizes environmental protection.' },
          { topic: 'Public safety', position: '✓ A top priority', comparison: 'Connolly has not detailed a position.' },
          { topic: 'Caucus / ideology', position: '✓ Conservative activist; CRPA graded her A', comparison: 'Connolly is a mainstream Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'No verified endorsement list found; the California Rifle & Pistol Association’s 2026 guide graded her A.',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Connolly', '●', 'Leftward Progressives back the Democrat focused on environmental and worker protections and utility rate reform.'],
      ['LL', 'Connolly', '●', 'Loyal Liberals value a sitting Assembly member and former county supervisor stepping up to the Senate.'],
      ['LO', 'Connolly', '◐', 'Left-Out Left voters want relief from utility and insurance bills, which Connolly targets, though he is a career officeholder rather than an outsider.'],
      ['OO', 'Connolly', '◐', 'Order and Opportunity Left voters want affordability and steady leadership, and Connolly targets insurance and utility costs, though Gibbs’s public-safety focus appeals to them.'],
      ['TM', 'Connolly', '◐', 'Tuned-Out Middle voters care about bills they pay, and Connolly names insurance and utility rates specifically, while Gibbs offers frustration without a plan.'],
      ['PP', 'Connolly', '○', 'Pragmatic and Polite Right voters reward experience and fiscal responsibility, which Connolly stresses, over an activist with no office record, though his F grade from the gun-rights group CRPA cuts against their Republican lean.'],
      ['UR', 'Gibbs', '◐', 'Unconventional Right voters distrust career politicians and want public safety, and Gibbs says long-serving officeholders have failed the state.', 'Unconventional Right voters who value a track record could pick Connolly, a sitting Assembly member focused on insurance and utility costs, giving up a Republican vote and Gibbs’s change-the-leadership message.'],
      ['FC', 'Gibbs', '●', 'Faith First Conservatives want a conservative senator who backs gun rights and public safety, and Gibbs earned an A from CRPA.'],
      ['NA', 'Gibbs', '●', 'No Apologies Right voters want a fighter against Sacramento’s leadership and a gun-rights vote, and Gibbs offers both.'],
    ]),
    counterArguments: [
      'FC (Gibbs ●): But consider that Gibbs has never held office and published no detailed plan, while Connolly has a record on insurance and utility costs.',
      'PP (Connolly ○): But consider that Connolly would join a large Democratic majority, which limits the checks on spending this group values.',
    ],
  },

  // ───────────────────────────── SD-4 ─────────────────────────────
  {
    id: 'senate-sd4',
    categoryId: 'state-leg',
    title: 'State Senate, District 4',
    tldrLabel: 'SD-4',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: LEG_CRITERIA('Senators', 'SD-4 covers all or part of 12 counties from Stanislaus through the Mother Lode and Sierra foothills to Inyo and Mono.'),
    seatContext: 'Open (incumbent lost in primary)',
    kind: 'candidates',
    stakesParagraphs: [
      SENATE_STAKES,
      'SD-4 spans Stanislaus County, the Mother Lode and the eastern Sierra. Water, wildfire and insurance, rural jobs and immigration enforcement split the finalists. Incumbent Marie Alvarado-Gil, elected as a Democrat in 2022 who later became a Republican, finished third and is out.',
    ],
    introParagraphs: [
      'Tuolumne County Supervisor Jaron Brandon, a Democrat, led the June 2 primary with 41.3%; Republican Alexandra Duarte took 32.1% and Alvarado-Gil 26.6% (certified Statement of Vote). Republicans combined for about 59%, so November turns on whether Alvarado-Gil’s voters consolidate behind Duarte.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote', url: SOV_SENATE, summary: 'Certified district totals for every primary candidate.' },
      {
        label: 'Ceres Courier — Three feisty candidates hope to represent county in the state Senate',
        url: 'https://www.cerescourier.com/news/local/three-feisty-candidates-hope-to-represent-county-in-the-state-senate/',
        summary: 'Primary forum: ICE, energy, housing, crime and the candidates’ attacks on each other.',
      },
      {
        label: 'myMotherLode — Hear from the SD-4 candidates (Oct 6, 2026)',
        url: 'https://mymotherlode.com/news/local/11197997/hear-from-the-senate-district-four-candidates-duarte-and-brandon.html',
        summary: 'KVML radio debate between Brandon and Duarte.',
      },
    ],
    candidates: [
      {
        id: 'jaron-brandon',
        name: 'Jaron Brandon',
        party: 'D',
        role: 'County Supervisor',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Two-term Tuolumne County supervisor; no state legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Two terms on the Tuolumne County Board of Supervisors; local ordinances only (Ceres Courier).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on the Tuolumne County budget.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Grew up near Modesto and represents part of Tuolumne County; most of the district’s voters are in Stanislaus.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record.' },
          ],
        },
        bio: [
          'Two-term Tuolumne County supervisor who grew up in a trailer park outside Modesto and was the first in his family to attend college. He calls himself a moderate and pragmatist.',
          'He wants to “abolish and reformat” ICE, backs “all of the above” energy and utility accountability, more affordable housing without Newsom’s “top-down” mandates, and more flexible state money for local governments (Ceres Courier).',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ More affordable housing; opposes “punitive and top-down” state mandates', comparison: 'Duarte stresses affordability via lower taxes.' },
          { topic: 'Climate & energy', position: '~ “All of the above” energy; grid investment; hold utilities accountable', comparison: 'Duarte backs oil, gas, hydro and biomass.' },
          { topic: 'Public safety & immigration', position: '✓ Abolish and reformat ICE', comparison: 'Duarte wants local police to work with immigration agents.' },
          { topic: 'Taxes', position: '? No tax position in coverage', comparison: 'Duarte promises tax cuts.' },
          { topic: 'Caucus / ideology', position: '~ Self-described moderate Democrat', comparison: 'Duarte aligns with President Trump’s agenda.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'No verified endorsement list found for this guide.',
        redFlags: [],
      },
      {
        id: 'alexandra-duarte',
        name: 'Alexandra Duarte',
        party: 'R',
        role: 'Mother/Farmer',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Agricultural business leader with no elected office held.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative or government service found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No public budget or agency experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Farmer who has raised her children in the area (Ceres Courier).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record.' },
          ],
        },
        bio: [
          'Agricultural business leader who calls herself “a mom and a farmer”; she is married to former Republican Rep. John Duarte.',
          'She aligns with President Trump’s agenda and runs on cutting taxes, cracking down on crime, exposing fraud, local cooperation with immigration agents, parents’ rights and oil, gas, hydro and biomass energy (Ceres Courier).',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '~ More affordable living through lower taxes; no housing plan found', comparison: 'Brandon backs more affordable housing with local control.' },
          { topic: 'Climate & energy', position: '✗ Drill for oil and gas; expand hydro and biomass', comparison: 'Brandon backs “all of the above” plus grid investment.' },
          { topic: 'Public safety & immigration', position: '✓✓ Crack down on crime; let police talk with federal immigration agents', comparison: 'Brandon would abolish and reformat ICE.' },
          { topic: 'Taxes', position: '✓✓ Cut taxes', comparison: 'Brandon has no tax position in coverage.' },
          { topic: 'Caucus / ideology', position: '✓✓ Aligns with Trump’s agenda; parents’ rights', comparison: 'Brandon calls himself a moderate Democrat.' },
        ],
        money: 'Raised just under $1 million for the primary (Modesto Bee, June 2026); see Cal-Access for current totals.',
        endorsements: 'No verified endorsement list found for this guide.',
        redFlags: [],
        notes: [
          'In the primary, Brandon and Alvarado-Gil cited past lawsuits and environmental fines against Duarte family businesses and COVID-era federal aid; these are opponents’ claims, and Duarte disputed Alvarado-Gil’s FPPC-related allegation (Ceres Courier).',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Brandon', '◐', 'Leftward Progressives back the Democrat who wants to abolish and remake ICE and hold utilities accountable, though Brandon calls himself a moderate who backs “all of the above” energy.'],
      ['LL', 'Brandon', '●', 'Loyal Liberals value a two-term county supervisor and the Democrat in a race against a Trump-aligned Republican with no office experience.'],
      ['LO', 'Brandon', '●', 'Left-Out Left voters want working people in office, and Brandon grew up in a trailer park, was the first in his family to attend college and wants more flexible money for local governments.'],
      ['OO', 'Brandon', '◐', 'Order and Opportunity Left voters want affordable housing and oppose deportation drives, which Brandon offers, though his call to abolish ICE and Duarte’s crime crackdown pull against their wish for order.'],
      ['TM', 'Duarte', '○', 'Tuned-Out Middle voters are wary of costs that hit them, and Duarte promises tax cuts while Brandon has no tax position, a weak lean.'],
      ['PP', 'Brandon / Duarte', '=', 'Pragmatic and Polite Right voters weigh experience and moderation against their usual Republican lean: if a proven, measured officeholder matters most, Brandon, a two-term supervisor who calls himself a pragmatist, though he wants to “abolish and reformat” ICE; if party and immigration enforcement matter more, Duarte, though she has no office record and aligns with Trump’s agenda.'],
      ['UR', 'Duarte', '●', 'Unconventional Right voters want tax cuts and immigration enforcement, and Duarte wants police to work with immigration agents and lower taxes.'],
      ['FC', 'Duarte', '●', 'Faith First Conservatives put parental rights and law and order first, and Duarte runs on both.'],
      ['NA', 'Duarte', '●', 'No Apologies Right voters want a Trump-aligned candidate who backs drilling, tax cuts and immigration enforcement.'],
    ]),
    counterArguments: [
      'NA (Duarte ●): But consider that Duarte has never held public office, while Brandon has two terms governing a county in the district.',
      'OO (Brandon ◐): But consider that Duarte’s crime crackdown and local cooperation with immigration agents may fit voters who rank public safety first.',
    ],
  },

  // ───────────────────────────── AD-1 ─────────────────────────────
  {
    id: 'assembly-ad1',
    categoryId: 'state-leg',
    title: 'State Assembly, District 1',
    tldrLabel: 'AD-1',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: LEG_CRITERIA('Assembly members', 'AD-1 covers Shasta, Siskiyou, Modoc, Lassen, Plumas and Sierra counties and parts of Nevada, Placer, El Dorado, Amador and Alpine.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'AD-1 is a vast rural district from the Oregon border to the Sierra foothills. Fire insurance, wildfire recovery, wolves and ranching, water and rural jobs are the dominant issues.',
    ],
    introParagraphs: [
      'Republican incumbent Heather Hadwick took 48.7% in the June 2 primary and Democrat Dianna James 38.5%; Republican Darin Hale had 12.8% (certified Statement of Vote). Republicans combined for about 61%, so Hadwick is favored.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote', url: SOV_ASSEMBLY, summary: 'Certified district totals for every primary candidate.' },
      {
        label: 'The Mountain Messenger — AD-1 candidates share backgrounds and priorities (May 13, 2026)',
        url: 'https://www.themountainmessenger.org/article/assembly-district-1-candidates-share-background-and-priorities',
        summary: 'Hadwick’s and Hale’s answers on wildfire, insurance and public safety.',
      },
      {
        label: 'The Mountain Messenger — Democratic candidate shares background and priorities',
        url: 'https://www.themountainmessenger.org/article/democratic-candidate-for-assembly-district-1-shares-background-and-priorities',
        summary: 'James on wildfire resilience, utility relief and rural representation.',
      },
    ],
    candidates: [
      {
        id: 'heather-hadwick',
        photoSlug: 'heather-hadwick',
        name: 'Heather Hadwick',
        party: 'R',
        role: 'Farmer/Assemblywoman',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'First-term Assembly member (elected 2024) and former county deputy director of emergency services.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly District 1 since December 2024; reports six bills signed in her first year (Mountain Messenger).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on state budgets as a minority-party member; previously a deputy director of emergency services.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Raised in Siskiyou County; family farms in Modoc County; represents the district since 2024.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Six bills signed by a Democratic governor in her first year (her account, Mountain Messenger).' },
          ],
        },
        bio: [
          'Alturas Republican elected in 2024; former teacher, small-business owner, school safety specialist and deputy director of emergency services, whose family farms in Modoc County.',
          'Her priorities are public safety, wildfire prevention and recovery, agriculture, access to fire insurance and affordability; she cites a pro-Second Amendment bill among six signed in her first year (Mountain Messenger).',
        ],
        recordVsChange:
          'In under two years she reports six signed bills on emergency response and small business; the case for change is mainly ideological, since James offers a Democratic voice in the majority caucus.',
        scorecard: [
          { topic: 'Wildfire & insurance', position: '✓✓ Access to fire insurance and wildfire mitigation money are top issues', comparison: 'James stresses wildfire resilience and utility relief.' },
          { topic: 'Public safety', position: '✓✓ Bills on emergency response and first responders; pro-Second Amendment bill', comparison: 'James has not detailed a position.' },
          { topic: 'Agriculture & wildlife', position: '✓ Agriculture and the “wildlife predator issue”', comparison: 'James focuses on protecting land and water.' },
          { topic: 'Caucus / ideology', position: '✓ Republican minority caucus', comparison: 'James would join the Democratic majority.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'CAL FIRE Local 2881 and California Professional Firefighters (The Orion).',
        redFlags: [],
      },
      {
        id: 'dianna-james',
        name: 'Dianna James',
        party: 'D',
        role: 'Community Organizer',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Twenty-five years advising governments abroad on governance and accountability, including as a State Department foreign affairs officer; no elected office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Says she has advised governments on institutional reform for 25 years with USAID and international organizations; no legislative service.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public budget experience documented.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Mount Shasta resident and fifth-generation Californian.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record.' },
          ],
        },
        bio: [
          'Mount Shasta Democrat and fifth-generation Californian who says she spent 25 years advising governments on democratic governance and accountability across Asia, Africa and the Middle East, including as a State Department foreign affairs officer.',
          'She wants living-wage rural jobs, fewer barriers for small businesses, protection of land and water, wildfire resilience and utility relief (Plumas Sun).',
        ],
        scorecard: [
          { topic: 'Wildfire & insurance', position: '✓ Wildfire resilience and utility relief', comparison: 'Hadwick prioritizes fire-insurance access and mitigation funding.' },
          { topic: 'Jobs & economy', position: '✓ Living-wage rural jobs; ease small-business barriers', comparison: 'Hadwick lists economic growth and affordability.' },
          { topic: 'Climate & land', position: '✓ Protect land and water', comparison: 'Hadwick focuses on agriculture and predator management.' },
          { topic: 'Caucus / ideology', position: '✓ Would join the Democratic majority', comparison: 'Hadwick is a Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'No verified endorsement list found for this guide.',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'James', '●', 'Leftward Progressives back the Democrat focused on land and water protection and living-wage rural jobs.'],
      ['LL', 'James', '●', 'Loyal Liberals value a career governance professional and former State Department officer who would join the majority caucus.'],
      ['LO', 'James', '◐', 'Left-Out Left voters like a non-politician who wants living-wage jobs and utility relief, though James’s platform is broad rather than specific.'],
      ['OO', 'Hadwick', '◐', 'Order and Opportunity Left voters want public safety and practical help, and Hadwick is a former emergency-services official backed by firefighters with six bills signed, so she wins them across party lines.'],
      ['TM', 'Hadwick', '◐', 'Tuned-Out Middle voters worried about losing fire insurance get Hadwick’s focus on insurance access and wildfire money, backed by firefighters.'],
      ['PP', 'Hadwick', '●', 'Pragmatic and Polite Right voters reward competent, practical lawmakers, and Hadwick got six bills signed by a Democratic governor in her first year.'],
      ['UR', 'Hadwick', '●', 'Unconventional Right voters want public safety and rural jobs, and Hadwick focuses on emergency response, agriculture and predator management.'],
      ['FC', 'Hadwick', '●', 'Faith First Conservatives value gun rights and rural communities, and Hadwick passed a pro-Second Amendment bill.'],
      ['NA', 'Hadwick', '◐', 'No Apologies Right voters back the Republican with a pro-Second Amendment bill, though Hadwick’s pragmatic style is less combative than they prefer.'],
    ]),
    counterArguments: [
      'OO (Hadwick ◐): But consider that as a minority-party member Hadwick has limited influence, and a Democrat in the majority might win more for the district, though James has no legislative record.',
      'LL (James ●): But consider that James has no legislative or budget record, while Hadwick has firefighter backing and six signed bills.',
    ],
  },

  // ───────────────────────────── AD-2 ─────────────────────────────
  {
    id: 'assembly-ad2',
    categoryId: 'state-leg',
    title: 'State Assembly, District 2',
    tldrLabel: 'AD-2',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: LEG_CRITERIA('Assembly members', 'AD-2 runs from Santa Rosa to the Oregon border: part of Sonoma and all of Mendocino, Humboldt, Trinity and Del Norte counties, with more tribal governments than any other district.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'This is a 2024 rematch. Wildfire recovery, PG&E infrastructure, North Coast health-care shortages, salmon and the Klamath, and rural school funding are the main issues.',
    ],
    introParagraphs: [
      'Democratic incumbent Chris Rogers took 69.7% and Republican Mike Greer 30.3% in the June 2 two-candidate primary (certified Statement of Vote). Rogers beat Greer 66% to 34% in 2024 (KRCB), so he is a heavy favorite.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote', url: SOV_ASSEMBLY, summary: 'Certified district totals for every primary candidate.' },
      {
        label: 'KRCB — Rogers highlights wildfire resilience and North Coast investment (May 11, 2026)',
        url: 'https://krcb.org/20260511100985/news-feed/rogers-highlights-wildfire-resilience-and-north-coast-investment-in-bid-for-state-assembly',
        summary: 'Rogers on his first-term record and priorities.',
      },
      {
        label: 'KRCB — Greer pledges local accountability and affordability focus (May 5, 2026)',
        url: 'https://krcb.org/20260505100954/news-feed/mike-greer-pledges-local-accountability-and-affordability-focus-in-bid-for-state-assembly',
        summary: 'Greer on costs, local control and school funding.',
      },
    ],
    candidates: [
      {
        id: 'chris-rogers',
        photoSlug: 'chris-rogers',
        name: 'Chris Rogers',
        party: 'D',
        role: 'Assemblymember',
        campaignUrl: 'https://rogers.asmdc.org',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'First-term Assembly member and former Santa Rosa mayor and councilmember.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since December 2024; says a North Coast waterways bill was signed in 2025 (KRCB); AB 263 on Klamath tributary salmon flows was signed in Sept 2025 (Ch. 130, Statutes of 2025).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Sits on Budget Subcommittee No. 4 (climate, resources, energy, transportation) and Utilities & Energy (his office, Jan 2025); former Santa Rosa mayor.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Says he has held about 30 town halls across the district since taking office (KRCB).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Majority-party member with several bills passed; no specific bipartisan coalition documented.' },
          ],
        },
        bio: [
          'Santa Rosa Democrat elected in 2024 after serving on the city council and as mayor; he cites the 2017 Tubbs Fire and later fires as shaping his focus on preparedness and rebuilding.',
          'He has pursued bills on foster youth, North Coast health-worker shortages, PG&E underinvestment, drug prices and a forestry bill treating forests as carbon sinks (KRCB).',
        ],
        recordVsChange:
          'In his first term he moved a Klamath salmon-flow bill through the Legislature and holds budget and utilities committee seats; Greer argues the Legislature as a whole has made the region unaffordable.',
        scorecard: [
          { topic: 'Wildfire & utilities', position: '✓✓ Preparedness and rebuilding; pressing PG&E on infrastructure', comparison: 'Greer blames state policy for insurance and energy costs.' },
          { topic: 'Climate', position: '✓ Forests as carbon sinks; Klamath salmon flows', comparison: 'Greer says statewide climate rules like electric school buses don’t fit rural counties.' },
          { topic: 'Health care', position: '✓ Incentives for North Coast doctors and nurses; opposes federal cuts', comparison: 'Greer has no health-care position in coverage.' },
          { topic: 'Education', position: '? No distinct education plan found', comparison: 'Greer would send education money straight to counties.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat in the majority caucus', comparison: 'Greer is a Republican focused on local control.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'No verified endorsement list found for this guide.',
        redFlags: [],
      },
      {
        id: 'mike-greer',
        name: 'Mike Greer',
        party: 'R',
        role: 'Retired Teacher',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Del Norte school trustee and longtime education lobbyist; no legislative office held.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Says he has lobbied on education, retirement and wildfire protection in Sacramento and Washington for over 20 years (KRCB).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Del Norte unified school district and county board of education trustee; Paradise school board president during the Camp Fire.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Crescent City resident for about six years; represents four North Coast counties for the California School Boards Association.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record.' },
          ],
        },
        bio: [
          'Del Norte County school trustee who moved to Crescent City about six years ago; he was Paradise school board president during the 2018 Camp Fire and says he has lobbied on education and wildfire issues for over 20 years.',
          'He says the Legislature caused the affordability crisis through regulation and wants more local control and education money sent directly to counties (KRCB).',
        ],
        scorecard: [
          { topic: 'Wildfire & utilities', position: '~ Blames state policy for high insurance and energy costs', comparison: 'Rogers is pressing PG&E on infrastructure.' },
          { topic: 'Climate', position: '✗ Statewide mandates such as electric school buses don’t fit rural areas', comparison: 'Rogers backs forest-carbon and salmon-flow policy.' },
          { topic: 'Education', position: '✓ Send state and federal school money directly to counties', comparison: 'Rogers has no distinct education plan in coverage.' },
          { topic: 'Caucus / ideology', position: '✓ Republican; local control and less regulation', comparison: 'Rogers is a Democrat in the majority.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'No verified endorsement list found for this guide.',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Rogers', '●', 'Leftward Progressives back the Democrat focused on salmon flows, forests, foster youth, drug prices and pressing PG&E.'],
      ['LL', 'Rogers', '●', 'Loyal Liberals value a former mayor with a budget-subcommittee seat and signed legislation.'],
      ['LO', 'Rogers', '◐', 'Left-Out Left voters want utilities and drug companies held to account, and Rogers is pressing PG&E and working on drug prices, though he is a career officeholder.'],
      ['OO', 'Rogers', '●', 'Order and Opportunity Left voters want practical help, and Rogers focuses on wildfire rebuilding and incentives for North Coast doctors and nurses.'],
      ['TM', 'Rogers', '◐', 'Tuned-Out Middle voters want concrete relief, and Rogers targets health-worker shortages and PG&E underinvestment, though Greer’s cost-of-living message also speaks to them.'],
      ['PP', 'Greer', '○', 'Pragmatic and Polite Right voters lean Republican when the nominee is mainstream, and Greer is a school trustee and Camp Fire-era school leader focused on local control, though Rogers has more governing experience.'],
      ['UR', 'Greer', '●', 'Unconventional Right voters want less regulation and local control, and Greer blames state rules for high costs.'],
      ['FC', 'Greer', '●', 'Faith First Conservatives want local control of schools and limited government, and Greer would send school money directly to counties.'],
      ['NA', 'Greer', '●', 'No Apologies Right voters oppose climate mandates and regulation, and Greer says statewide rules like electric school buses don’t fit rural areas.'],
    ]),
    counterArguments: [
      'NA (Greer ●): But consider that Rogers sits on a budget subcommittee in the majority caucus, which gives the North Coast more leverage than a minority-party freshman.',
      'PP (Greer ○): But consider that Rogers beat Greer by 32 points in 2024 and has moved bills such as the Klamath salmon-flow law through the Legislature.',
    ],
  },

  // ───────────────────────────── AD-3 ─────────────────────────────
  {
    id: 'assembly-ad3',
    categoryId: 'state-leg',
    title: 'State Assembly, District 3',
    tldrLabel: 'AD-3',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: LEG_CRITERIA('Assembly members', 'AD-3 covers Butte, Glenn, Sutter, Tehama and Yuba counties and part of Placer.'),
    seatContext: 'Open (Gallagher elected to Congress)',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'AD-3 is a farm-country seat left open when James Gallagher went to Congress. Both finalists are Republicans, so voters choose between a grassroots activist and a former statewide farm-lobby leader; water, energy costs and wildfire dominate.',
    ],
    introParagraphs: [
      'Former Marysville councilmember Dom Belza took 45.2% in the June 2 primary, Jamie Johansson 29.3% and former Chico mayor Andrew Coolidge 25.5%, all Republicans (certified Statement of Vote). Coolidge has since endorsed Johansson, so November turns on whether his voters follow.',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote', url: SOV_ASSEMBLY, summary: 'Certified district totals for every primary candidate.' },
      {
        label: 'Appeal-Democrat — Three Republicans vie for 3rd Assembly seat (May 20, 2026)',
        url: 'https://www.appeal-democrat.com/colusa_sun_herald/three-republicans-vie-for-3rd-assembly-seat/article_8af2b3f3-ac28-4d1b-a2bd-b96084bf0e16.html',
        summary: 'Red Bluff forum: backgrounds, taxes, unions, schools and immigration.',
      },
      {
        label: 'KRCR — Belza, Johansson outline priorities (Sept 29, 2026)',
        url: 'https://krcrtv.com/news/know-your-candidates/belza-johansson-outline-priorities-in-california-assembly-district-3-race',
        summary: 'Water policy versus energy costs as top issues.',
      },
    ],
    candidates: [
      {
        id: 'dom-belza',
        name: 'Dom Belza',
        party: 'R',
        role: 'Agricultural Businessman/Father',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Former Marysville city councilmember and planning commissioner; farmer and commercial real estate broker.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Former Marysville City Council member and planning commissioner (Appeal-Democrat).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Voted on a small city budget as a councilmember.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Family has farmed in Yuba and Sutter counties for four generations.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Founded the Free California PAC and campaigned for Proposition 36.' },
          ],
        },
        bio: [
          'Fourth-generation Yuba-Sutter farmer and commercial real estate broker who served on the Marysville City Council and planning commission. He founded the conservative Free California PAC and campaigned for Proposition 36.',
          'He prioritizes water storage, lower taxes and regulation, fire-safe infrastructure, school choice and limiting public-employee union influence. In July 2026 his 11-year-old daughter died of leukemia complications (NSPR).',
        ],
        scorecard: [
          { topic: 'Water', position: '✓✓ Top issue: more storage and accountable water management', comparison: 'Johansson also has deep farm-water policy experience.' },
          { topic: 'Taxes', position: '✓✓ Lower taxes; keep more sales tax local', comparison: 'Johansson also opposes taxes and regulation on farmers.' },
          { topic: 'Public safety', position: '✓ Campaigned for Prop 36; endorsed by Crime Victims United', comparison: 'Johansson opposes sanctuary cities and amnesty.' },
          { topic: 'Education', position: '✓ School choice; focus on basics', comparison: 'Johansson backs vouchers.' },
          { topic: 'Caucus / ideology', position: '✓ Grassroots conservative activist (Free California PAC)', comparison: 'Johansson led the California Farm Bureau, an established statewide group.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Crime Victims United of California.',
        redFlags: [],
      },
      {
        id: 'jamie-johansson',
        name: 'Jamie Johansson',
        party: 'R',
        role: 'Farmer',
        campaignUrl: 'https://www.votejohansson.com',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Former president of the California Farm Bureau and former Oroville city councilmember; long experience lobbying on farm, water and resource policy.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Led statewide Farm Bureau advocacy on taxes, regulation, water and resources; served on the Oroville City Council (Appeal-Democrat).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Ran the California Farm Bureau as vice president and president; city budget votes in Oroville.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Butte County olive and citrus farmer; lived in Oroville about 30 years (Appeal-Democrat).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Led a statewide farm organization working with legislators of both parties on agricultural policy.' },
          ],
        },
        bio: [
          'Butte County farmer who grows olives and citrus near Oroville and runs his own olive-oil company, Lodestar Farms. He served on the Oroville City Council, including as vice mayor, and as vice president and then, from December 2017, president of the California Farm Bureau.',
          'He calls cost of living, especially electricity rates, the district’s top issue; backs vouchers and local control of state grants; and opposes amnesty and sanctuary cities.',
        ],
        scorecard: [
          { topic: 'Water', position: '✓ Long Farm Bureau work on water and natural-resource policy', comparison: 'Belza makes water storage his top issue.' },
          { topic: 'Taxes', position: '✓✓ Worked to cut taxes and regulations on farmers', comparison: 'Belza also pledges lower taxes.' },
          { topic: 'Public safety', position: '✓ Opposes amnesty and sanctuary cities; penalties for border violations', comparison: 'Belza campaigned for Prop 36.' },
          { topic: 'Energy costs', position: '✓✓ Top issue: electricity rates about double the national average', comparison: 'Belza emphasizes water over energy.' },
          { topic: 'Caucus / ideology', position: '~ Mainstream ag-business conservative', comparison: 'Belza is a grassroots PAC founder.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Andrew Coolidge, former Chico mayor and third-place primary finisher (Johansson campaign, partisan source).',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', '—', '—', 'Leftward Progressives share little with either Republican, since both back vouchers and lower taxes, so no pick is made.', 'Leftward Progressives who still want to weigh in could pick Johansson, whose Farm Bureau presidency and city council service give him the deeper policy record, accepting a voucher supporter who opposes amnesty.'],
      ['LL', 'Johansson', '◐', 'Loyal Liberals have no Democrat here and prefer the former Farm Bureau president with an institutional record of working with legislators of both parties.'],
      ['LO', 'Johansson', '○', 'Left-Out Left voters care most about costs, and Johansson calls electricity rates the top issue, though he led a statewide lobby rather than coming from outside.'],
      ['OO', 'Johansson', '◐', 'Order and Opportunity Left voters want relief on bills and steady leadership, and Johansson focuses on electricity rates and has worked with both parties.'],
      ['TM', 'Johansson', '◐', 'Tuned-Out Middle voters worried about power bills get Johansson’s focus on electricity rates about double the national average.'],
      ['PP', 'Johansson', '●', 'Pragmatic and Polite Right voters prefer mainstream, experienced conservatives, and Johansson led the state Farm Bureau and worked with lawmakers of both parties.'],
      ['UR', 'Belza / Johansson', '=', 'Unconventional Right voters weigh grassroots crime fighting against a hard line on immigration: if an outsider who cuts taxes and fights crime matters most, Belza, who founded Free California PAC and campaigned for Prop 36; if immigration matters more, Johansson, who opposes amnesty and sanctuary cities and backs penalties for border violations.'],
      ['FC', 'Belza', '◐', 'Faith First Conservatives lean to Belza, who frames school choice as a parental right and is backed by crime-victim advocates, though both are conservative.'],
      ['NA', 'Belza', '●', 'No Apologies Right voters prefer fighters, and Belza is a grassroots activist who wants to limit public-employee union influence and cut taxes.'],
    ]),
    counterArguments: [
      'NA (Belza ●): But consider that Johansson led the state’s largest farm group and may get more done for the district’s growers in a Democratic Legislature.',
      'PP (Johansson ●): But consider that Belza won 45% in the primary and has a four-generation local farming base, so he may better reflect the district’s voters.',
    ],
  },

  // ───────────────────────────── AD-4 ─────────────────────────────
  {
    id: 'assembly-ad4',
    categoryId: 'state-leg',
    title: 'State Assembly, District 4',
    tldrLabel: 'AD-4',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: LEG_CRITERIA('Assembly members', 'AD-4 covers Napa, Yolo, Lake and Colusa counties and part of Sonoma.'),
    seatContext: 'Incumbent (unopposed)',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'AD-4 is a largely agricultural district spanning Napa, Yolo, Lake, Colusa and part of Sonoma. Its member is the Assembly majority leader, which gives the district an unusually senior voice in budget and floor negotiations.',
    ],
    introParagraphs: [
      'Assembly Majority Leader Cecilia Aguiar-Curry was the only candidate in the June 2 primary and received 100% (certified Statement of Vote). She is the only name on the November ballot and is seeking her final term (Napa Valley Register).',
    ],
    readingLinks: [
      { label: 'Secretary of State — June 2, 2026 primary Statement of Vote', url: SOV_ASSEMBLY, summary: 'Certified district totals for every primary candidate.' },
      {
        label: 'Napa Valley Register / Sacramento Bee — Your guide to the 4th Assembly District race',
        url: 'https://napavalleyregister.com/news/regional/your-guide-to-california-s-assembly-4th-district-primary-race/article_9be80b6e-0eef-5d52-b9e6-e4ead5aae4e7.html',
        summary: 'Notes that the majority leader is unopposed for her final term.',
      },
    ],
    candidates: [
      {
        id: 'cecilia-aguiar-curry',
        photoSlug: 'cecilia-aguiar-curry',
        name: 'Cecilia Aguiar-Curry',
        party: 'D',
        role: 'State Assemblymember',
        campaignUrl: 'https://aguiar-curry.asmdc.org',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2016 and Assembly Majority Leader; former mayor of Winters.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since December 2016 (4th District).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Assembly Majority Leader as of June 2026 (Assembly press release).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Former Winters mayor; has represented the district for a decade.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'As majority leader she manages floor votes for the Democratic caucus.' },
          ],
        },
        bio: [
          'Winters Democrat and former mayor who has served in the Assembly since 2016 and is the Assembly Majority Leader. She is unopposed for her final term.',
        ],
        scorecard: [
          { topic: 'Caucus / ideology', position: '✓ Majority-party leader in the Democratic caucus', comparison: 'Unopposed.' },
          { topic: 'District clout', position: '✓✓ Second-ranking leadership post in the Assembly', comparison: 'Unopposed.' },
        ],
        money: CAL_ACCESS,
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Aguiar-Curry', '◐', 'Leftward Progressives can back the only candidate, a Democratic caucus leader, though she is an institutional leader rather than a left voice.'],
      ['LL', 'Aguiar-Curry', '●', 'Loyal Liberals value the majority leader’s seniority and institutional role.'],
      ['LO', 'Aguiar-Curry', '○', 'Left-Out Left voters find a caucus leader too much of an insider, but she is the only name on the ballot.'],
      ['OO', 'Aguiar-Curry', '◐', 'Order and Opportunity Left voters value steady, mainstream representation, and a majority leader gives the district a strong voice in the budget.'],
      ['TM', 'Aguiar-Curry', '○', 'Tuned-Out Middle voters have no alternative, so a vote for the only candidate is a low-stakes default.'],
      ['PP', 'Aguiar-Curry', '○', 'Pragmatic and Polite Right voters value experience and civility, and the unopposed majority leader is a weak default for them.'],
      ['UR', '—', '—', 'Unconventional Right voters have no Republican or outsider option, so no pick is made.'],
      ['FC', '—', '—', 'Faith First Conservatives have no candidate aligned with their values, so no pick is made.'],
      ['NA', '—', '—', 'No Apologies Right voters have no candidate who shares their views, so no pick is made.'],
    ]),
    counterArguments: [
      'PP (Aguiar-Curry ○): But consider that Aguiar-Curry will win regardless, and leaving the line blank has no effect on the outcome.',
    ],
  },
];
