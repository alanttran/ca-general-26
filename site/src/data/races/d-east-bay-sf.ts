import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * East Bay and San Francisco district races: U.S. House CA-10, CA-11, CA-12 (Prop 50 map) and
 * State Assembly AD-14 through AD-19. Finalists from the SoS Certified List of Candidates (Aug 27, 2026);
 * primary shares from the SoS June 2, 2026 Statement of Vote. Research as of Oct 8, 2026.
 */

const CAL_ACCESS = 'Totals not compiled here (as of Oct 8, 2026); see Cal-Access at https://cal-access.sos.ca.gov/.';
const FEC_NOTE = 'Totals not compiled here (as of Oct 8, 2026); see FEC filings at https://www.fec.gov/.';

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

const ASSEMBLY_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
  { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const US_REP_STAKES =
  'A U.S. representative votes on federal taxes, health programs, immigration, defense, climate and transit money, and oversight of the executive branch, and runs a casework office for help with Social Security, veterans’ benefits and federal agencies.';

const ASSEMBLY_STAKES =
  'Assembly members vote on the state budget, housing and land-use law, health care, schools, public safety and taxes, and serve two-year terms; in a supermajority-Democratic Legislature, committee chairs often decide which bills survive.';

export const RACES_D_EAST_BAY_SF: Race[] = [
  // ───────────────────────────── CA-10 ─────────────────────────────
  {
    id: 'us-rep-ca10',
    categoryId: 'federal',
    title: 'U.S. Representative, 10th District',
    tldrLabel: 'CA-10',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      US_REP_STAKES,
      'CA-10 is mainly central and eastern Contra Costa County plus a sliver of Alameda County including eastern Dublin; Proposition 50 changed its lines only slightly. It is safely Democratic, so the question is whether to return a 12-year incumbent or send a first-time Republican candidate focused on costs and election rules.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic Rep. Mark DeSaulnier took 59.7% and Republican Jeff Frese 12.9%, ahead of Republicans Katherine Piccinini (11.5%) and Angela Griffiths (6.7%) and three other Democrats (SoS Statement of Vote). Republicans combined for about 31%. The runoff turns on DeSaulnier’s seniority and record against Frese’s call for less regulation, term limits and voter ID.',
    ],
    readingLinks: [
      {
        label: 'The Independent — Meet the candidates for the 10th District (May 28, 2026)',
        url: 'https://www.independentnews.com/news/regional_and_ca/meet-the-candidates-vying-for-californias-10th-congressional-district/article_f0a596db-2a14-4607-bee5-4e7654499443.html',
        summary: 'Pre-primary profiles with each candidate’s priorities and DeSaulnier’s endorsements.',
      },
      {
        label: 'DanvilleSanRamon — Crowded CD-10 contest (May 25, 2026)',
        url: 'https://www.danvillesanramon.com/?p=470856',
        summary: 'Profiles of all seven primary candidates, including Frese’s platform.',
      },
    ],
    candidates: [
      {
        id: 'mark-desaulnier',
        photoSlug: 'mark-desaulnier',
        name: 'Mark DeSaulnier',
        party: 'D',
        role: 'United States Congressman',
        campaignUrl: 'https://desaulnierforcongress.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2015, after a city council, county supervisor, Assembly and state Senate career in Contra Costa County.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since 2015; state Assembly 2006–2008 and state Senate 2008–2015 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Ranking member of the House Ethics Committee since Feb 2025; serves on Education and the Workforce and Transportation and Infrastructure (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Concord resident; Concord council 1991–1994 and Contra Costa supervisor 1994–2006 before Sacramento.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Long legislative tenure, but few high-profile bills signed into federal law were found in this review.' },
          ],
        },
        bio: [
          'DeSaulnier, 73, has represented central Contra Costa County in Congress since 2015 and is the top Democrat on the House Ethics Committee. A former probation officer and restaurant owner, he served on the Concord council, the county Board of Supervisors and in both houses of the Legislature. He was diagnosed with chronic lymphocytic leukemia in 2015 and has kept serving.',
        ],
        recordVsChange:
          'DeSaulnier brings 11 years of seniority, an Ethics ranking-member post and transportation-committee seats that matter for BART and the I-680 corridor; replacing him with a first-time candidate would give up that seniority without a record to weigh.',
        scorecard: [
          { topic: 'Housing', position: '✓ Says lowering housing and health costs is a top priority (The Independent, May 2026)', comparison: 'Frese would cut federal regulations he says raise housing costs.' },
          { topic: 'Health care', position: '✓✓ Member of the Medicare for All Caucus; protecting Medicare and Social Security is a stated priority', comparison: 'Frese has not published a health-care plan.' },
          { topic: 'Climate', position: '✓ Endorsed by the Sierra Club; Safe Climate Caucus member', comparison: 'Frese focuses on wildfire risk through federal forest management.' },
          { topic: 'Trump / House majority', position: '✓ Would vote with House Democrats; Progressive Caucus member', comparison: 'Frese would add to the Republican conference.' },
          { topic: 'District clout', position: '✓ Seniority, Ethics ranking member, and Transportation committee seat for Bay Area transit and highway work', comparison: 'Frese would be a first-term member.' },
        ],
        money: FEC_NOTE,
        endorsements: 'Nancy Pelosi, Sierra Club, United Professional Firefighters of Contra Costa County, United Farm Workers (The Independent, May 28, 2026).',
      },
      {
        id: 'jeff-frese',
        name: 'Jeff Frese',
        party: 'R',
        role: 'Small Business Owner',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Moraga small-business owner and first-time candidate; no public office or policy record found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office or legislative-staff experience found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of budget or committee work found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'Lives in Moraga in the district; no record of local public service found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation or building legislative coalitions.' },
          ],
        },
        bio: [
          'Frese lives in Moraga and runs a small business; local papers found little else about his background, and he did not supply a biography to voter guides. His platform centers on cutting federal regulations he says raise housing, energy and food costs, federal forest management to reduce wildfire risk, term limits, and paper ballots with voter ID.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Cut federal “red tape” that he says drives up housing, energy and food costs', comparison: 'DeSaulnier lists lower housing costs as a priority without a deregulation agenda.' },
          { topic: 'Health care', position: '? No public position found beyond lowering insurance costs', comparison: 'DeSaulnier backs Medicare for All.' },
          { topic: 'Climate', position: '~ Wildfire prevention through federal land and forest management; no broader climate plan', comparison: 'DeSaulnier is Sierra Club-endorsed.' },
          { topic: 'Trump / House majority', position: '✓ Would add to the Republican majority; backs voter ID, paper ballots and congressional term limits', comparison: 'DeSaulnier would vote with House Democrats.' },
        ],
        money: FEC_NOTE,
        endorsements: 'None found as of Oct 8, 2026.',
      },
    ],
    crossTypology: ct([
      ['LP', 'DeSaulnier', '●', 'Leftward Progressives back a Medicare for All Caucus and Progressive Caucus member endorsed by the Sierra Club over a Republican running on deregulation.'],
      ['LL', 'DeSaulnier', '●', 'Loyal Liberals value DeSaulnier’s decades of public office, his ranking post on House Ethics and Pelosi’s endorsement.'],
      ['LO', 'DeSaulnier', '◐', 'Left-Out Left voters may see a career officeholder in office since 1991, but DeSaulnier’s defense of Medicare and Social Security (about 62% of them want its benefits expanded) helps working families more than Frese’s deregulation pitch.'],
      ['OO', 'DeSaulnier', '◐', 'Order and Opportunity Left voters like DeSaulnier’s firefighter and farmworker backing and his health-cost focus, though many share Frese’s support for voter ID (84% favor photo ID to vote).'],
      ['TM', 'DeSaulnier', '○', 'Tuned-Out Middle voters get an incumbent protecting Medicare and Social Security, though Frese’s promise to cut regulations that raise food and energy costs has some appeal.'],
      ['PP', 'DeSaulnier', '○', 'Pragmatic and Polite Right voters value competence and ethics oversight, and DeSaulnier is the House Ethics ranking member while Frese has no public record or biography.'],
      ['UR', 'Frese', '◐', 'Unconventional Right voters, about 91% of whom favor photo ID to vote, fit Frese’s outsider pitch for less regulation, term limits and voter ID.', 'Unconventional Right voters who put experience first could back DeSaulnier, a former county supervisor and 11-year member with the Ethics ranking post, giving up Frese’s deregulation push and adding a vote for the Democratic caucus.'],
      ['FC', 'Frese', '●', 'Faith First Conservatives, about 75% of whom want government services reduced, back the Republican who wants smaller government over a Medicare for All Caucus Democrat.'],
      ['NA', 'Frese', '●', 'No Apologies Right voters, about 98% of whom favor photo ID to vote, back the Republican who wants to cut federal regulation, impose term limits and require paper ballots with voter ID.'],
    ]),
    counterArguments: [
      'PP (DeSaulnier ○): But consider that Frese’s deregulation and voter-ID planks match what many Pragmatic and Polite Right voters want, because a DeSaulnier vote also supports a Democratic House majority.',
      'UR (Frese ◐): But consider that Frese has no public record or detailed biography, because voters have little to judge beyond his platform.',
      'LO (DeSaulnier ◐): But consider that DeSaulnier has served in elected office since 1991, because a primary challenger argued the district needs a younger generation.',
    ],
  },

  // ───────────────────────────── CA-11 ─────────────────────────────
  {
    id: 'us-rep-ca11',
    categoryId: 'federal',
    title: 'U.S. Representative, 11th District',
    tldrLabel: 'CA-11',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Open seat (Pelosi retiring)',
    kind: 'candidates',
    stakesParagraphs: [
      US_REP_STAKES,
      'Nancy Pelosi is retiring after nearly four decades, opening San Francisco’s main House seat for the first time since 1987. Both finalists are Democrats; the choice is between Wiener’s pro-building, state-preemption record and Chan’s labor-backed, neighborhood-input approach.',
    ],
    introParagraphs: [
      'In the 12-candidate June 2 primary, state Sen. Scott Wiener took 40.7%, Supervisor Connie Chan 29.7% and Saikat Chakrabarti 17.9% (SoS Statement of Vote). Pelosi endorsed Chan in May, and Chakrabarti backed her after the primary. Two sponsored summer polls showed a close race. The runoff turns on housing policy and which wing of the party San Francisco sends to Congress.',
    ],
    polling: [
      { resultDisplay: 'Wiener 45%, Chan 40%, undecided 11%', pollsterCredit: 'Lake Research Partners for the Chan campaign (500 likely voters; campaign-sponsored)', fieldDatesLabel: 'Jul 14–19, 2026', sourceUrl: 'https://missionlocal.org/2026/07/wiener-chan-tight-race-congress-polls/' },
    ],
    readingLinks: [
      {
        label: 'Ballotpedia News — The CA-11 finalists take opposing sides on housing (Jul 16, 2026)',
        url: 'https://news.ballotpedia.org/2026/07/16/two-democratic-candidates-running-in-the-general-election-for-californias-11th-congressional-district-take-opposing-sides-on-housing-policy/',
        summary: 'Neutral overview of both records, endorsements and the housing divide.',
      },
      {
        label: 'Mission Local — Would you support Hakeem Jeffries for Speaker? (Sep 14, 2026)',
        url: 'https://missionlocal.org/2026/09/sf-congress-candidates-chan-wiener-democrats-leadership-speaker/',
        summary: 'Wiener says yes; Chan says any Speaker must earn her vote.',
      },
      {
        label: 'SF Examiner — Wiener grows cash lead; Chan contributions jump (Jul 2026)',
        url: 'https://www.sfexaminer.com/news/politics/wiener-grows-cash-lead-in-d11-race-chan-contributions-jump/article_9c204bb4-5302-4641-9547-8c93e77dd3f9.html',
        summary: 'June 30 FEC totals and cash on hand for both campaigns.',
      },
    ],
    candidates: [
      {
        id: 'scott-wiener',
        photoSlug: 'scott-wiener',
        name: 'Scott Wiener',
        party: 'D',
        role: 'State Senator',
        campaignUrl: 'https://scottwiener.com/',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'State senator for San Francisco since 2016 and a supervisor before that, with a long record of passing state law; no federal office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'State Senate (SD-11) since Dec 2016; authored SB 35 (2017), SB 53 (AI safety, 2025) and SB 79 (transit-area housing, 2025); campaign cites about 100 laws.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Named chair of the Senate Budget and Fiscal Review Committee in 2024.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'SF Board of Supervisors, District 8, 2011–2016; his Senate district covers San Francisco.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Has passed contested housing and AI bills through both houses and won the governor’s signature.' },
          ],
        },
        bio: [
          'Wiener, a lawyer and former deputy city attorney, represented the Castro area on the Board of Supervisors from 2011 to 2016 and has been San Francisco’s state senator since. He is best known for laws that override local zoning to allow more housing, including SB 79 near transit, and for AI-safety bills. Politico describes him as the more moderate finalist.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓✓ Leading advocate for building more housing, including state preemption of local zoning (SB 79)', comparison: 'Chan sponsored a Board resolution opposing SB 79 unless amended to keep local control.' },
          { topic: 'Health care', position: '✓ Says ending last fall’s shutdown without protecting health coverage was a mistake', comparison: 'Chan stresses lowering health, child-care and education costs.' },
          { topic: 'Climate', position: '✓ Long record on transit and clean-energy bills in Sacramento', comparison: 'Chan has no comparable state climate record.' },
          { topic: 'Trump / House majority', position: '✓ Would back Hakeem Jeffries for Speaker and push leadership to oppose Trump aggressively', comparison: 'Chan says Jeffries or anyone must earn her vote.' },
          { topic: 'District clout', position: '✓ Statewide network and California Democratic Party endorsement', comparison: 'Chan has Pelosi’s backing and broad labor support.' },
        ],
        money: 'More than $4.4M raised since 2023 and about $1.2M–$1.3M cash on hand as of June 30, 2026 (SF Examiner; SF Standard).',
        endorsements: 'California Democratic Party, Attorney General Rob Bonta, Board President Rafael Mandelman (Ballotpedia, Jul 2026); Dolores Huerta, National Union of Healthcare Workers, California Conference of Carpenters.',
        notes: ['Wiener is termed out of the state Senate in 2028.'],
      },
      {
        id: 'connie-chan',
        photoSlug: 'connie-chan',
        name: 'Connie Chan',
        party: 'D',
        role: 'San Francisco Supervisor',
        campaignUrl: 'https://www.conniechansf.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Supervisor for the Richmond District since 2021 and a longtime city staffer; no state or federal legislative office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'SF Board of Supervisors, District 1, since Jan 2021, reelected 2024; local ordinances only.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Has chaired the Board’s Budget and Appropriations Committee; no state or federal budget role.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Hong Kong-born immigrant raised in San Francisco; earlier worked for the city, including as a staffer for then-DA Kamala Harris (Ballotpedia).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Assembled a broad labor coalition (about 40 unions) and Pelosi’s endorsement; her SB 79 resolution failed 7–4 on the Board.' },
          ],
        },
        bio: [
          'Chan immigrated from Hong Kong as a teenager and worked in city government before winning the District 1 supervisor seat in 2020. Politico describes her as the more progressive finalist. She emphasizes affordability, community input on development and protecting residents from rapid change. Pelosi endorsed her on May 18, 2026.',
        ],
        scorecard: [
          { topic: 'Housing', position: '~ Backs affordable housing for working families but favors local input; opposed SB 79 unless amended', comparison: 'Wiener wrote SB 79 and favors state-mandated upzoning.' },
          { topic: 'Health care', position: '✓ Pledges to lower health-care, child-care and education costs', comparison: 'Wiener also campaigns on affordability and health coverage.' },
          { topic: 'Climate', position: '? No distinct federal climate plan found', comparison: 'Wiener has a longer climate and transit record.' },
          { topic: 'Trump / House majority', position: '✓ Opposes Trump; says Democratic leaders have lacked urgency and any Speaker must earn her vote', comparison: 'Wiener commits to backing Jeffries.' },
          { topic: 'District clout', position: '✓ Pelosi, Sen. Adam Schiff and labor support', comparison: 'Wiener has the state party endorsement.' },
        ],
        money: 'Almost $1.1M raised since Nov 2025 and about $362K cash on hand as of June 30, 2026 (SF Examiner).',
        endorsements: 'Nancy Pelosi (May 18, 2026), Sen. Adam Schiff, Saikat Chakrabarti (June 2026), California Labor Federation, SF Labor Council, National Nurses United, California Teachers Association.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Chan', '◐', 'Leftward Progressives, only 61% of whom view the Democratic Party favorably, favor Chan, the more progressive, labor-backed finalist endorsed by Chakrabarti who says party leaders lack urgency against Trump, though many like Wiener’s climate record.'],
      ['LL', 'Wiener', '◐', 'Loyal Liberals, 81% of whom say the Democratic Party represents them well, value Wiener’s long lawmaking record, Budget chair and state-party endorsement, though Pelosi’s backing gives Chan institutional weight too.'],
      ['LO', 'Chan', '◐', 'Left-Out Left voters prefer Chan, the immigrant supervisor with broad labor support who refuses to pledge her vote to party leaders, over a Sacramento power broker.'],
      ['OO', 'Wiener', '○', 'Order and Opportunity Left voters want a path to homeownership, and Wiener, the more moderate finalist, has pushed hardest to build more housing.'],
      ['TM', 'Wiener / Chan', '=', 'Tuned-Out Middle voters squeezed by living costs weigh rent against family bills: if rent matters most, Wiener, who has pushed hardest to build more housing; if child-care and health costs matter more, Chan, who pledges to lower them.'],
      ['PP', 'Wiener', '◐', 'Pragmatic and Polite Right voters prefer Wiener, the more moderate and experienced lawmaker who commits to working within his party’s leadership.'],
      ['UR', 'Wiener / Chan', '=', 'Unconventional Right voters, facing two progressive Democrats, weigh red tape against local control: if cutting building rules matters most, Wiener, whose SB 79 overrides local zoning; if keeping decisions with neighborhoods matters more, Chan, who opposed SB 79 unless amended to keep local control.'],
      ['FC', 'Chan', '○', 'Faith First Conservatives who prize neighborhood stability may lean to Chan’s local-control approach, a weak fit between two progressive Democrats.'],
      ['NA', 'Wiener / Chan', '=', 'No Apologies Right voters dislike both and weigh deregulation against a state mandate: if cutting local building rules matters most, Wiener; if resisting Sacramento overriding neighborhoods matters more, Chan, who opposed SB 79 unless amended, accepting her labor-backed agenda.'],
    ]),
    counterArguments: [
      'LP (Chan ◐): But consider that Wiener has passed far more state law, including transit and clean-energy bills, because housing advocates criticize Chan’s opposition to upzoning as limiting supply.',
      'LL (Wiener ◐): But consider that Pelosi, who knows the job best, chose Chan, because Chan also has broader labor support.',
      'OO (Wiener ○): But consider that Chan stresses lower health-care and child-care costs, because Wiener’s SB 79 overrides neighborhood input many residents value.',
    ],
  },

  // ───────────────────────────── CA-12 ─────────────────────────────
  {
    id: 'us-rep-ca12',
    categoryId: 'federal',
    title: 'U.S. Representative, 12th District',
    tldrLabel: 'CA-12',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      US_REP_STAKES,
      'CA-12 covers Oakland, Berkeley, Alameda, Albany, Emeryville, San Leandro and Piedmont and is one of the most Democratic seats in the country. With no Republican on the ballot, the choice is between a first-term Progressive Caucus vice chair and a reform-minded challenger who says the party needs an overhaul.',
    ],
    introParagraphs: [
      'In the June 2 primary, Rep. Lateefah Simon took 84.2% and fellow Democrat Jamie Joyce 15.6%, with a Republican write-in under 1% (SoS Statement of Vote). Simon won the open seat in 2024 with 65%. The runoff turns on whether voters want Simon’s progressive record or Joyce’s call for sweeping reforms on AI, surveillance and money in politics.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — CA-12',
        url: 'https://theballotbrief.com/district/ca-12',
        summary: 'Neutral roster page with short bios of both finalists.',
      },
    ],
    candidates: [
      {
        id: 'lateefah-simon',
        photoSlug: 'lateefah-simon',
        name: 'Lateefah Simon',
        party: 'D',
        role: 'U.S. Representative',
        campaignUrl: 'https://www.lateefahsimon.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Sitting member since Jan 2025 who has passed several bills in the House, after eight years on the BART board.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since Jan 2025; the Information Quality Assurance Act passed the House 362–1 in Feb 2026, her fourth bill to clear the chamber (her office).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Serves on Oversight and Government Reform and Small Business; BART board 2016–2024, president in 2020.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Oakland-raised; led the Young Women’s Freedom Center and the Lawyers’ Committee for Civil Rights of the SF Bay Area.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'First bill (Feb 2025) co-led with Republican Roger Williams; IQAA co-led with Republican Lisa McClain.' },
          ],
        },
        bio: [
          'Simon, a 2003 MacArthur Fellow, led the Young Women’s Freedom Center and the Lawyers’ Committee for Civil Rights before serving on the BART board. She succeeded Barbara Lee in 2025 and is a vice chair of the Congressional Progressive Caucus. She has pushed transit-safety and transit-planning bills and co-sponsored a $25 federal minimum wage.',
        ],
        recordVsChange:
          'Simon has passed bipartisan bills in her first term and holds a Progressive Caucus leadership post; Joyce offers a reform agenda but no governing record, so replacing Simon trades a working member for an untested platform.',
        scorecard: [
          { topic: 'Housing', position: '✓ Co-introduced a transit-oriented development planning bill with Rep. Sara Jacobs (2026)', comparison: 'Joyce lists housing and affordability as goals without specific bills.' },
          { topic: 'Immigration', position: '✓ Opposes Trump administration enforcement; Progressive Caucus vice chair', comparison: 'Joyce’s MAD Act includes a title restricting ICE.' },
          { topic: 'Trump / House majority', position: '✓ Opposed the 2025 Iran strikes without congressional authorization; voted in July 2026 to remove U.S. forces from hostilities with Iran', comparison: 'Joyce proposes a 12-member bloc that would withhold votes from leadership.' },
          { topic: 'Health care', position: '✓ Votes with progressives against cuts to health programs', comparison: 'Joyce mentions health care generally without a plan.' },
          { topic: 'District clout', position: '✓ Incumbent with House-passed bills and transit expertise', comparison: 'Joyce would be a first-term member.' },
        ],
        money: FEC_NOTE,
        endorsements: 'Not compiled here (as of Oct 8, 2026).',
        notes: ['In Jan 2026 she joined Republicans and eight other Democrats on the Oversight Committee in recommending contempt for Bill Clinton over an Epstein subpoena (Wikipedia).'],
      },
      {
        id: 'jamie-joyce',
        name: 'Jamie Joyce',
        party: 'D',
        role: 'Nonprofit Executive Director',
        campaignUrl: 'https://jamiejoyce.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Founder of a civic-research nonprofit with no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Drafted the “MAD Act,” a 650–750-page omnibus bill proposal; no legislative office or staff role.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No budget or committee experience found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'Berkeley resident; no record of local public service found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation.' },
          ],
        },
        bio: [
          'Joyce, of Berkeley, founded the Society Library, a nonprofit that maps arguments on public debates, in 2018 and was a project lead at the Internet Archive in 2022–2023 (BallotReady). She runs on her MAD Act: AI regulation, dismantling surveillance, releasing more Epstein files, restricting ICE and exposing dark money. She says she takes no corporate PAC money.',
        ],
        scorecard: [
          { topic: 'Housing', position: '? Lists affordable living and housing as goals; no specific plan found', comparison: 'Simon has a transit-oriented housing planning bill.' },
          { topic: 'Immigration', position: '✓ “Get ICE off our streets” through a MAD Act title', comparison: 'Simon also opposes current enforcement.' },
          { topic: 'Trump / House majority', position: '~ Criticizes the party’s corporate wing; proposes a “Just 12” bloc to withhold votes until bills serve the public', comparison: 'Simon works within the Progressive Caucus leadership.' },
          { topic: 'Health care', position: '? Mentions health care generally', comparison: 'Simon votes with progressives on health funding.' },
        ],
        money: FEC_NOTE,
        endorsements: 'AI ethicist Tristan Harris (campaign site, Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Simon', '●', 'Leftward Progressives, 92% of whom say the economic system is not fair, back a Progressive Caucus vice chair with civil-rights movement roots who backs a $25 minimum wage and opposed the Iran strikes.'],
      ['LL', 'Simon', '●', 'Loyal Liberals value Simon’s bipartisan House-passed bills and BART governing experience.'],
      ['LO', 'Simon', '◐', 'Left-Out Left voters may like Joyce’s no-corporate-PAC reform pitch, but Simon’s $25 minimum-wage push and long movement work offer more concrete help.'],
      ['OO', 'Simon', '◐', 'Order and Opportunity Left voters like Simon’s minimum-wage and transit-safety work, though her opposition to immigration enforcement is further left than many of them.'],
      ['TM', 'Simon', '○', 'Tuned-Out Middle voters, 73% of whom say government is responsible for an adequate standard of living, get a member backing a much higher minimum wage, though neither campaign targets disengaged voters.'],
      ['PP', 'Simon', '◐', 'Pragmatic and Polite Right voters, 78% of whom prefer incremental fixes over risky quick ones, prefer Simon’s bipartisan bills with Republican co-leads over Joyce’s plan for a 650-page omnibus and a bloc that would withhold votes.'],
      ['UR', 'Joyce', '○', 'Unconventional Right voters drawn to anti-establishment messages fit Joyce’s push to dismantle surveillance, release more Epstein files and break party-leadership control, though Joyce would also restrict ICE.', 'Unconventional Right voters who put experience first could back Simon, who voted to hold Bill Clinton in contempt over an Epstein subpoena and has passed bills with Republicans, giving up Joyce’s outsider bloc strategy.'],
      ['FC', '—', '—', 'Faith First Conservatives have no fit between two progressive Democrats, neither of whom speaks to faith or social-conservative concerns.', 'With no fit on values, Faith First Conservatives who go by experience could back Simon, a sitting member with bipartisan bills, accepting her progressive positions.'],
      ['NA', 'Joyce', '○', 'No Apologies Right voters dislike both but may prefer Joyce, a disruptor who would release more Epstein files and challenge Democratic leaders.', 'No Apologies Right voters who put experience first could back Simon, who joined Republicans on the Clinton contempt vote, accepting a Progressive Caucus vice chair.'],
    ]),
    counterArguments: [
      'UR (Joyce ○): But consider that Joyce has never held office, because Joyce’s plan depends on recruiting 11 more members to a voting bloc.',
      'LP (Simon ●): But consider that Joyce raises AI and surveillance issues Simon has not made central, because some progressives want more confrontation with party leaders.',
    ],
  },

  // ───────────────────────────── AD-14 ─────────────────────────────
  {
    id: 'assembly-ad14',
    categoryId: 'state-leg',
    title: 'State Assembly, District 14',
    tldrLabel: 'AD-14',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-14 covers Berkeley, Richmond, El Cerrito, Albany and nearby West Contra Costa and North Alameda communities, home to UC Berkeley and the Chevron refinery.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'AD-14’s incumbent chairs the Appropriations Committee, which decides which spending bills move, and led 2025’s rollback of environmental review for infill housing. Her challenger is a Green running to her left on single-payer health care, social housing and converting the Chevron refinery.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Buffy Wicks took 81.2%, Green Mark Rendón 10.0% and Republican Borgar Solnordal 8.8% (SoS Statement of Vote), putting a Green on the November ballot. The runoff turns on whether left voters reward Wicks’ housing record or register a protest for CalCare and refinery conversion.',
    ],
    readingLinks: [
      {
        label: 'CalMatters — Wicks’ push to speed construction permitting (Mar 2025)',
        url: 'https://calmatters.org/housing/2025/03/california-construction-permitting-wicks/',
        summary: 'Background on the permitting and CEQA reforms Wicks led.',
      },
      {
        label: 'Green Party — Two Greens move on to November (Jul 13, 2026)',
        url: 'https://www.gp.org/2_greens_move_on_to_the_nov_general_election',
        summary: 'Rendón’s platform in his party’s words.',
      },
    ],
    candidates: [
      {
        id: 'buffy-wicks',
        photoSlug: 'buffy-wicks',
        name: 'Buffy Wicks',
        party: 'D',
        role: 'Assemblymember/Mom',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2018 and Appropriations chair, with major housing and permitting laws.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 2018; her AB 609 infill-housing CEQA exemption was folded into budget trailer bill AB 130, signed June 2025.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair of the Assembly Appropriations Committee (2025 reporting); chaired a select committee on permitting reform.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Oakland/East Bay resident representing the district since 2018.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Moved CEQA reform through both houses with the governor’s backing over environmental-group objections.' },
          ],
        },
        bio: [
          'Wicks, a former Obama campaign organizer and 2016 California director for Hillary Clinton, has represented the district since 2018 and chairs Appropriations. She is a leading pro-housing Democrat who championed exempting most urban infill housing from CEQA review in 2025.',
        ],
        recordVsChange:
          'Wicks controls the Appropriations gate and has delivered major housing laws; a first-term Green would have no committee power in a Democratic supermajority.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓✓ Led 2025 CEQA exemptions for infill housing and permitting reform', comparison: 'Rendón favors publicly built social housing.' },
          { topic: 'Climate', position: '~ Supports clean energy but drew environmental-group criticism over CEQA rollbacks', comparison: 'Rendón would convert the Chevron refinery to renewables.' },
          { topic: 'Public safety', position: '? No signature public-safety platform found', comparison: 'Rendón has no published public-safety plan.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream pro-housing Democrat in leadership', comparison: 'Rendón runs to her left as a Green.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Not compiled here (as of Oct 8, 2026).',
      },
      {
        id: 'mark-rendon',
        name: 'Mark Rendón',
        party: 'Green',
        role: 'Teacher',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Retired Oakland public-school music teacher and union activist; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office or legislative-staff experience found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No budget or committee experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Longtime Oakland Unified music teacher active in the Oakland Education Association and CTA (Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record; started a Green caucus within CTA.' },
          ],
        },
        bio: [
          'Rendón is a retired Oakland Unified music teacher and teachers-union activist who started a Green Party caucus in the California Teachers Association. His platform: CalCare single-payer health care, social housing to end homelessness, converting the Chevron refinery to renewable energy, and divesting from war.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Social housing to end homelessness', comparison: 'Wicks favors deregulating private construction.' },
          { topic: 'Climate', position: '✓✓ Convert the Chevron refinery to renewable energy', comparison: 'Wicks has no refinery-conversion plan.' },
          { topic: 'Education', position: '✓ Free, lifelong education', comparison: 'Wicks has not made education her signature issue.' },
          { topic: 'Caucus / ideology', position: '✓ Green Party; rejects corporate and super PAC money', comparison: 'Wicks is a Democratic leader.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Green Party of California (Jul 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Rendón', '◐', 'Leftward Progressives, 70% of whom want more parties to choose from, fit Rendón’s Green, no-corporate-money campaign for CalCare, social housing and converting the Chevron refinery, the most left option on the ballot.', 'Leftward Progressives who put experience first could back Wicks, the Appropriations chair who passed major housing laws, giving up a vote for single-payer and refinery conversion.'],
      ['LL', 'Wicks', '●', 'Loyal Liberals value Wicks’ Appropriations chair and record passing major housing reform.'],
      ['LO', 'Wicks / Rendón', '=', 'Left-Out Left voters weigh distrust of party insiders against results on rent: if rejecting corporate money and the Democratic establishment matters most, Rendón, a union teacher, though a Green would have little leverage; if lower rents matter more, Wicks, whose infill-housing law aims to bring them down.'],
      ['OO', 'Wicks', '●', 'Order and Opportunity Left voters prefer the mainstream Democrat whose housing laws aim to build more homes over a Green platform to shut down a major refinery employer.'],
      ['TM', 'Wicks', '○', 'Tuned-Out Middle voters worried about rent may lean to Wicks’ push to build more housing faster.'],
      ['PP', 'Wicks', '●', 'Pragmatic and Polite Right voters value Wicks’ experience and permitting reform over a Green plan to convert the Chevron refinery.'],
      ['UR', 'Wicks', '◐', 'Unconventional Right voters, about 51% of whom say health coverage is not the government’s job, have no Republican option and prefer Wicks’ cuts to environmental review over Rendón’s single-payer plan.'],
      ['FC', 'Wicks', '○', 'Faith First Conservatives have no Republican option and lean to the more moderate finalist.'],
      ['NA', 'Wicks', '◐', 'No Apologies Right voters, 86% of whom say health coverage is not the government’s job, prefer Wicks’ rollback of CEQA red tape over Rendón’s refinery conversion and single-payer plans.'],
    ]),
    counterArguments: [
      'LP (Rendón ◐): But consider that a Green member would have little leverage in the Democratic supermajority, because Wicks controls which spending bills move.',
      'NA (Wicks ◐): But consider that Wicks is a progressive Democratic leader, because her budget decisions are ones conservatives would usually oppose.',
    ],
  },

  // ───────────────────────────── AD-15 ─────────────────────────────
  {
    id: 'assembly-ad15',
    categoryId: 'state-leg',
    title: 'State Assembly, District 15',
    tldrLabel: 'AD-15',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-15 covers central and eastern Contra Costa County communities, including Martinez and Concord.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'Freshman Anamarie Ávila Farías, a housing-finance veteran, faces a no-party-preference engineer who says he takes no money from either major party and wants to stop tax increases and cut housing regulation.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Anamarie Ávila Farías took 69.6% and independent Arthur Webb 30.4% in a two-person field (SoS Statement of Vote). She won the open seat in 2024 with 64.1%. The runoff turns on whether voters want a Democratic housing advocate or an independent focused on taxes and limiting state government.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 15',
        url: 'https://theballotbrief.com/state/california/contra-costa-county/california-assembly-district-15',
        summary: 'Neutral roster page with both candidates’ bios and priorities.',
      },
    ],
    candidates: [
      {
        id: 'anamarie-avila-farias',
        photoSlug: 'anamarie-avila-farias',
        name: 'Anamarie Ávila Farías',
        party: 'D',
        role: 'Member of the State Assembly, District 15',
        campaignUrl: 'https://anamarieforassembly.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term Assembly member with earlier city, county school board and state housing-finance board service.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 2024; Martinez City Council 2012–2016 (CalHFA).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Appointed to the California Housing Finance Agency board by Govs. Brown and Newsom; no Assembly chair found.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Contra Costa County Board of Education; decades at the Housing Authority of Contra Costa County (CalHFA).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'First term; no signature law identified in this review.' },
          ],
        },
        bio: [
          'Ávila Farías, granddaughter of Bracero Program immigrants, was the first Latina elected to the Martinez City Council (2012) and later served on the county Board of Education and the CalHFA board, after a career in affordable housing. She was elected to the Assembly in 2024 and prioritizes child-care and housing affordability.',
        ],
        recordVsChange:
          'She has a short Assembly record but deep housing-finance experience; Webb offers an independent, anti-tax voice without any office-holding record.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Affordable-housing career; championed ADUs and housing programs at CalHFA', comparison: 'Webb wants fewer regulatory barriers to housing.' },
          { topic: 'Taxes', position: '? No tax-specific platform found', comparison: 'Webb opposes gas and diesel tax increases and new school bonds.' },
          { topic: 'Education', position: '✓ Former county school board member; prioritizes child-care funding', comparison: 'Webb wants to reduce reliance on school bonds.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat', comparison: 'Webb is a self-described moderate independent.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Not compiled here (as of Oct 8, 2026).',
      },
      {
        id: 'arthur-webb',
        name: 'Arthur Webb',
        party: 'NP',
        role: 'Retired Technology Manager',
        campaignUrl: 'https://www.arthurwebbassembly.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Retired engineer and technology manager with no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office or legislative-staff experience found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'Technical manager at Contra Costa Health Services (BallotReady); no budget role documented.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No record of local public service found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record.' },
          ],
        },
        bio: [
          'Webb holds engineering degrees from UC Berkeley (1969, 1971) and has worked in academic publishing, rail-car leasing, employment-discrimination law and county health services. He runs as a moderate independent taking no money from either major party, focused on stopping tax increases, cutting housing regulation, election integrity and limiting state government.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Reduce regulatory barriers to housing', comparison: 'Ávila Farías emphasizes subsidized affordable housing.' },
          { topic: 'Taxes', position: '✓✓ Oppose gas and diesel tax increases and reduce school bonds', comparison: 'Ávila Farías has no stated tax-cut agenda.' },
          { topic: 'Public safety', position: '~ Curb fraud, waste and corruption', comparison: 'Ávila Farías has no signature public-safety platform.' },
          { topic: 'Caucus / ideology', position: '✓ Independent; limit state government and restore “Freedom to Choose”', comparison: 'Ávila Farías is a Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'None listed on campaign site (Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Ávila Farías', '●', 'Leftward Progressives favor a career affordable-housing advocate who prioritizes subsidized housing and child care over an independent who opposes new taxes and school bonds.'],
      ['LL', 'Ávila Farías', '●', 'Loyal Liberals value Ávila Farías’s housing-finance expertise on the CalHFA board and her city and school-board service.'],
      ['LO', 'Ávila Farías', '◐', 'Left-Out Left voters relate to Ávila Farías, a Bracero Program granddaughter with an affordable-housing career, though Webb’s refusal of money from either party appeals to their distrust of insiders (75% say few or no officials ran to serve the public).'],
      ['OO', 'Ávila Farías', '●', 'Order and Opportunity Left voters want housing and child-care help, which is Ávila Farías’s core agenda.'],
      ['TM', 'Ávila Farías', '○', 'Tuned-Out Middle voters may like Webb’s opposition to gas-tax increases, but Ávila Farías’s child-care and housing focus addresses daily costs more directly.'],
      ['PP', 'Webb', '◐', 'Pragmatic and Polite Right voters fit Webb’s moderate, independent pitch for fiscal restraint, fewer housing barriers and curbing waste.', 'Pragmatic and Polite Right voters who put experience first could back Ávila Farías, a former councilmember and CalHFA board member, giving up Webb’s anti-tax independence.'],
      ['UR', 'Webb', '●', 'Unconventional Right voters, only 26% of whom are strong Republicans, back the independent who rejects both parties, opposes gas-tax increases and wants to limit state government.'],
      ['FC', 'Webb', '◐', 'Faith First Conservatives prefer Webb’s limited-government platform, though Webb does not campaign on social issues.', 'Faith First Conservatives who put experience first could back Ávila Farías, a seasoned local official, accepting her Democratic positions.'],
      ['NA', 'Webb', '●', 'No Apologies Right voters, about 80% of whom say regulation does more harm than good, back the candidate who opposes tax increases, wants less regulation and stresses election integrity.'],
    ]),
    counterArguments: [
      'UR (Webb ●): But consider that Webb has never held office, because an independent has little leverage in the Democratic supermajority.',
      'PP (Webb ◐): But consider that Ávila Farías has decades of housing-finance experience, because Webb has no record in public office.',
      'LL (Ávila Farías ●): But consider that Ávila Farías is in her first term and has no signature law yet, because legislative results matter.',
    ],
  },

  // ───────────────────────────── AD-16 ─────────────────────────────
  {
    id: 'assembly-ad16',
    categoryId: 'state-leg',
    title: 'State Assembly, District 16',
    tldrLabel: 'AD-16',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-16 covers suburban central Contra Costa and Tri-Valley communities, including Orinda, Alamo, Danville and Pleasanton.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'Rebecca Bauer-Kahan has chaired the Privacy and Consumer Protection Committee, through which most AI and tech bills pass. This is her fourth matchup with Republican Joe Rubay, who wants more Prop 36 funding and fiscal restraint.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Rebecca Bauer-Kahan took 65.6%, Republican Joseph Rubay 30.6% and independent Chirag Kathrani 3.8% (SoS Statement of Vote). She beat Rubay 64.1% to 35.9% in 2024. The runoff turns on her tech-regulation record versus Rubay’s public-safety and spending message.',
    ],
    readingLinks: [
      {
        label: 'Pleasanton Weekly — Bauer-Kahan facing two challengers (May 21, 2026)',
        url: 'https://www.pleasantonweekly.com/election/2026/05/21/bauer-kahan-facing-two-challengers-in-race-for-assembly-district-16/',
        summary: 'Profiles of both finalists and their priorities.',
      },
    ],
    candidates: [
      {
        id: 'rebecca-bauer-kahan',
        photoSlug: 'rebecca-bauer-kahan',
        name: 'Rebecca Bauer-Kahan',
        party: 'D',
        role: 'Assemblymember/Mother',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Four-term Assembly member and committee chair on privacy and AI.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since 2018; six bills signed in fall 2025, including AB 45 on health and location data (her office).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair of the Assembly Privacy and Consumer Protection Committee (named 2024).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Orinda resident representing the district since 2018; campaign cites local project funding.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Most-watched AI chatbot bill for minors, AB 1064, was vetoed in Oct 2025.' },
          ],
        },
        bio: [
          'Bauer-Kahan, an environmental-compliance attorney and former law professor, flipped the seat in 2018 and is seeking a fifth term. Her focus is protecting children online, stabilizing the homeowners-insurance market, school funding and reproductive rights.',
        ],
        recordVsChange:
          'She chairs the committee that writes California’s AI and privacy rules; Rubay would bring a Republican vote but no legislative record.',
        scorecard: [
          { topic: 'Public safety', position: '~ Focus on children’s online safety rather than Prop 36 funding', comparison: 'Rubay wants more Prop 36 funding.' },
          { topic: 'Education', position: '✓ Investing in local schools', comparison: 'Rubay wants social issues kept out of schools.' },
          { topic: 'Taxes', position: '? No tax-specific platform found', comparison: 'Rubay emphasizes fiscal responsibility.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat; campaign says she works “across the ideological spectrum”', comparison: 'Rubay wants to break the Democratic supermajority.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Not compiled here (as of Oct 8, 2026).',
      },
      {
        id: 'joseph-rubay',
        name: 'Joseph A. Rubay',
        party: 'R',
        role: 'Businessman/Father',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Real-estate appraiser and local advisory-board member; no elected legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office found.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Chaired, now vice chair, the Alamo Police Services Advisory Committee; Contra Costa County Fair Board member.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Longtime Alamo resident; owns an appraisal business 30+ years.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record.' },
          ],
        },
        bio: [
          'Rubay, a Cal State East Bay graduate from Alamo, has owned a real-estate appraisal business for over 30 years and worked on Pete Wilson’s campaigns. This is his fourth run against Bauer-Kahan. He wants more Prop 36 funding, social issues kept out of schools and state fiscal restraint.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓✓ More funding for Prop 36', comparison: 'Bauer-Kahan focuses on online child safety.' },
          { topic: 'Education', position: '✓ Keep social issues out of schools', comparison: 'Bauer-Kahan backs school investment.' },
          { topic: 'Taxes', position: '✓ State financial responsibility', comparison: 'Bauer-Kahan has no tax-cut agenda.' },
          { topic: 'Caucus / ideology', position: '✓ Republican running to “break the one party super majority”', comparison: 'Bauer-Kahan is a Democratic chair.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Not compiled here (as of Oct 8, 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Bauer-Kahan', '●', 'Leftward Progressives, about 97% of whom say abortion should be legal in all or most cases, back Bauer-Kahan’s fights with big tech over AI and kids’ data and her reproductive-rights record.'],
      ['LL', 'Bauer-Kahan', '●', 'Loyal Liberals, 92% of whom say experts make better policy decisions, value a committee chair with a policy-heavy, expert-driven record on privacy and AI.'],
      ['LO', 'Bauer-Kahan', '●', 'Left-Out Left voters who distrust large corporations (about 89% say they make too much profit) like Bauer-Kahan’s push to rein in tech companies’ use of children’s and health data.'],
      ['OO', 'Bauer-Kahan', '◐', 'Order and Opportunity Left voters like Bauer-Kahan’s insurance and child-safety work, though Rubay’s push for Prop 36 funding speaks to their concern about crime (about 52% call violent crime a very big problem).'],
      ['TM', 'Bauer-Kahan / Rubay', '=', 'Tuned-Out Middle voters weigh household costs against public safety: if homeowners-insurance costs matter most, Bauer-Kahan, who focuses on them; if public safety matters more, Rubay, whose message centers on it.'],
      ['PP', 'Rubay', '◐', 'Pragmatic and Polite Right voters in the suburbs, about 84% of whom have confidence in police, fit Rubay, a mainstream Republican who served on a local police advisory committee and wants fiscal restraint and a check on the supermajority.', 'Pragmatic and Polite Right voters who put experience first could back Bauer-Kahan, a committee chair with six 2025 laws, giving up a Republican check on the supermajority.'],
      ['UR', 'Rubay', '●', 'Unconventional Right voters back Rubay’s Prop 36 push, fiscal restraint and opposition to one-party rule.'],
      ['FC', 'Rubay', '●', 'Faith First Conservatives back the Republican who wants social issues kept out of schools.'],
      ['NA', 'Rubay', '●', 'No Apologies Right voters back the Republican running to break the Democratic supermajority on crime and spending.'],
    ]),
    counterArguments: [
      'PP (Rubay ◐): But consider that Rubay has lost this race three times and has no legislative record, because Bauer-Kahan already chairs a major committee.',
      'LP (Bauer-Kahan ●): But consider that Bauer-Kahan’s top AI bill for minors was vetoed, because results depend on the governor as well.',
    ],
  },

  // ───────────────────────────── AD-17 ─────────────────────────────
  {
    id: 'assembly-ad17',
    categoryId: 'state-leg',
    title: 'State Assembly, District 17',
    tldrLabel: 'AD-17',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-17 covers eastern San Francisco, including downtown, SoMa, the Mission and the Tenderloin.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'Matt Haney chairs the Housing and Community Development Committee and the Renters’ Caucus. His opponent qualified as a write-in and has run no visible campaign, so the result is not in doubt; the vote mostly signals support for Haney’s housing agenda.',
    ],
    introParagraphs: [
      'Haney was the only name on the June 2 ballot and took 99.4%; Republican Manuel Noris-Barrera advanced as a write-in with about 0.4% (SoS Statement of Vote). Haney beat Noris-Barrera 84.6% to 15.4% in 2024.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 17',
        url: 'https://theballotbrief.com/state/california/san-francisco-county/california-assembly-district-17',
        summary: 'Neutral roster page with primary results and short bios.',
      },
    ],
    candidates: [
      {
        id: 'matt-haney',
        photoSlug: 'matt-haney',
        name: 'Matt Haney',
        party: 'D',
        role: 'Assemblymember',
        campaignUrl: 'https://matthaney.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2022 and housing committee chair, after city and school board service.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since 2022; AB 12 (2023) capped security deposits; AB 507 (2025) eased office-to-housing conversions.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair of the Assembly Housing and Community Development Committee and Legislative Renters’ Caucus (official bio).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'SF Supervisor, District 6, 2019–2022; SF Board of Education before that.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Renters’ Caucus moved all five priority bills to the governor in 2023; his bills were in Newsom’s Sept 29, 2026 housing signing.' },
          ],
        },
        bio: [
          'Haney, a Stanford-trained lawyer, served on the San Francisco school board and as District 6 supervisor before winning a 2022 special election. He chairs the Assembly housing committee and the Renters’ Caucus, with a focus on housing supply, tenant protections and small businesses.',
        ],
        recordVsChange: 'Haney chairs the committee that shapes state housing law; his opponent has no visible campaign or platform.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓✓ Housing chair; security-deposit cap and office-to-housing conversions', comparison: 'Noris-Barrera has no published platform.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive Democrat, renters’ advocate', comparison: 'Noris-Barrera is a Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Not compiled here (as of Oct 8, 2026).',
      },
      {
        id: 'manuel-noris-barrera',
        name: 'Manuel Noris-Barrera',
        party: 'R',
        role: 'No Ballot Designation',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Republican who ran in 2024 and qualified in 2026 as a write-in; no public record or platform found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'Noris-Barrera was the Republican nominee in 2024, winning 15.4%. In 2026 he advanced as a write-in with no ballot designation; no campaign website was found as of Sept 21, 2026 (Ballot Brief).',
        ],
        scorecard: [
          { topic: 'Caucus / ideology', position: '? Republican; no platform found', comparison: 'Haney is a progressive Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'None found as of Oct 8, 2026.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Haney', '●', 'Leftward Progressives back the renters’ champion who chairs the housing committee and capped security deposits.'],
      ['LL', 'Haney', '●', 'Loyal Liberals value Haney’s committee leadership and legislative output.'],
      ['LO', 'Haney', '●', 'Left-Out Left voters struggling with rent get Haney’s tenant protections and security-deposit cap.'],
      ['OO', 'Haney', '●', 'Order and Opportunity Left voters want affordable housing, and Haney has passed laws to build more of it.'],
      ['TM', 'Haney', '◐', 'Tuned-Out Middle voters facing high rent benefit from Haney’s deposit cap and housing work.'],
      ['PP', 'Haney', '◐', 'Pragmatic and Polite Right voters value Haney’s competence as a committee chair over a write-in with no campaign or platform.'],
      ['UR', 'Noris-Barrera', '○', 'Unconventional Right voters may prefer a Republican check, though Noris-Barrera offers no platform.', 'Unconventional Right voters who put experience first could back Haney, the housing chair, giving up a symbolic Republican vote.'],
      ['FC', 'Noris-Barrera', '◐', 'Faith First Conservatives lean to the Republican, though Noris-Barrera has published no platform.', 'Faith First Conservatives who put experience first could back Haney, an experienced chair, accepting his progressive positions.'],
      ['NA', 'Noris-Barrera', '●', 'No Apologies Right voters back the only Republican as a protest against one-party rule.'],
    ]),
    counterArguments: [
      'NA (Noris-Barrera ●): But consider that Noris-Barrera has no published platform or campaign, because the vote is purely symbolic.',
    ],
  },

  // ───────────────────────────── AD-18 ─────────────────────────────
  {
    id: 'assembly-ad18',
    categoryId: 'state-leg',
    title: 'State Assembly, District 18',
    tldrLabel: 'AD-18',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-18 covers Oakland, Alameda and Emeryville.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'Mia Bonta chairs the Assembly Health Committee, which handles Medi-Cal and hospital policy. Her challenger, a social-services manager, ran in 2024 as an American Independent and is now a Democrat backed by young Democrats and the centrist Forward Party.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Mia Bonta took 76.9%, Democrat Andre Sandford 10.9%, Republican Ned Nuerge 7.2% and Green Michael Goldstein 5.0% (SoS Statement of Vote). Bonta beat Sandford 80.3% to 19.7% in 2024. The runoff turns on her health record versus his rent-freeze and prevention platform.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 18',
        url: 'https://theballotbrief.com/state/california/alameda-county/california-assembly-district-18',
        summary: 'Neutral roster page with primary results and bios.',
      },
    ],
    candidates: [
      {
        id: 'mia-bonta',
        photoSlug: 'mia-bonta',
        name: 'Mia Bonta',
        party: 'D',
        role: 'California State Assemblymember, Assembly District 18',
        campaignUrl: 'https://www.miabonta.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2021 who chairs the Health Committee.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since a 2021 special election; AB 55 (Freedom to Birth Act) among bills signed (her office).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair of the Assembly Health Committee (2026 committee agenda).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Former Alameda Unified school board member; led an East Bay nonprofit; founded the Legislative Children’s Caucus.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Twelve-bill 2026 package advanced to the Senate (May 28, 2026 release).' },
          ],
        },
        bio: [
          'Bonta, who previously led an East Bay nonprofit and served on the Alameda school board, won a 2021 special election for the seat once held by her husband, Attorney General Rob Bonta. She chairs the Health Committee and founded the Children’s Caucus; her 2026 package includes AB 1709, a minimum age of 16 for addictive social media.',
        ],
        recordVsChange: 'She chairs the Health Committee during Medi-Cal funding fights; Sandford offers new ideas but no legislative record.',
        scorecard: [
          { topic: 'Housing & transit', position: '? No signature housing bill found', comparison: 'Sandford wants a rent freeze, rent cap and state land bank.' },
          { topic: 'Public safety', position: '✓ Public-safety investments a stated priority', comparison: 'Sandford wants a community prevention agency and fentanyl accountability.' },
          { topic: 'Education', position: '✓ Children’s Caucus founder; AB 1709 social-media age limit', comparison: 'Sandford backs universal preschool and smaller classes.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive Democrat in leadership', comparison: 'Sandford mixes left economics with Forward Party backing.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Not compiled here (as of Oct 8, 2026).',
      },
      {
        id: 'andre-sandford',
        name: 'Andre Sandford',
        party: 'D',
        role: 'Housing Program Director',
        campaignUrl: 'https://andresandfordforassembly.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Social-services and housing-program manager with no elected experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public budget role found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Oakland resident; nine-plus years in child protective services, foster care and clinical mental-health management (campaign site).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record.' },
          ],
        },
        bio: [
          'Sandford, of Oakland, has worked in child protective services, foster care and mental-health management and now runs a housing and homelessness-prevention program. He ran in 2024 under the American Independent Party label (SoS) and is now a Democrat. His platform: rent freeze and cap, universal child care, a community prevention agency, and fentanyl accountability.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓✓ Rent freeze, rent cap, state land bank, lower construction costs', comparison: 'Bonta has no signature housing bill.' },
          { topic: 'Public safety', position: '✓ Community prevention agency; fentanyl accountability and recovery', comparison: 'Bonta lists public-safety investment.' },
          { topic: 'Education', position: '✓ Universal preschool, smaller classes, vocational training', comparison: 'Bonta focuses on children’s online safety.' },
          { topic: 'Caucus / ideology', position: '~ Endorsed by Black Young Dems of the Bay, CA Young Democrats Bay Area and Forward California; Green Party of Alameda County recommendation', comparison: 'Bonta is a mainstream progressive.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Black Young Dems of the Bay; California Young Democrats Bay Area Region; Forward California; recommended by Green Party of Alameda County (campaign site, Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Bonta', '◐', 'Leftward Progressives may like Sandford’s rent freeze, but Bonta is the proven progressive Health chair, and Sandford ran as an American Independent in 2024.'],
      ['LL', 'Bonta', '●', 'Loyal Liberals value Bonta’s Health Committee chair and legislative output.'],
      ['LO', 'Sandford', '○', 'Left-Out Left voters may prefer Sandford’s rent freeze and outsider run against a political family, though Sandford has no record.', 'Left-Out Left voters who put experience first could back Bonta, the Health chair with signed laws, giving up a rent-freeze outsider.'],
      ['OO', 'Bonta', '◐', 'Order and Opportunity Left voters prefer the steady, experienced Health chair, though Sandford’s fentanyl-accountability and child-care ideas appeal to them.'],
      ['TM', 'Sandford', '○', 'Tuned-Out Middle voters struggling with bills (56% are lower income) may favor Sandford’s rent freeze and universal child care as direct help.', 'Tuned-Out Middle voters who put experience first could back Bonta, who chairs the Health Committee during Medi-Cal fights, giving up Sandford’s rent-freeze promise.'],
      ['PP', 'Bonta', '◐', 'Pragmatic and Polite Right voters, 78% of whom prefer incremental fixes over risky quick ones, prefer experienced, incremental governance over a rent freeze and a new state agency.'],
      ['UR', 'Sandford', '○', 'Unconventional Right voters may lean to Sandford’s fentanyl accountability and centrist Forward Party backing over a progressive incumbent.', 'Unconventional Right voters who put experience first could back Bonta, an experienced chair, giving up Sandford’s centrist backing.'],
      ['FC', '—', '—', 'Faith First Conservatives have no fit between two left-of-center Democrats.', 'Faith First Conservatives who put experience first could back Bonta, a seasoned legislator, accepting her progressive positions.'],
      ['NA', 'Sandford', '○', 'No Apologies Right voters dislike both but may prefer an outsider over the spouse of the Democratic attorney general.', 'No Apologies Right voters who put experience first could back Bonta, who chairs Health, giving up an outsider vote.'],
    ]),
    counterArguments: [
      'LP (Bonta ◐): But consider that Sandford proposes a rent freeze and cap, because Bonta has not championed rent relief.',
      'TM (Sandford ○): But consider that Sandford has never held office, because a rent freeze would need majorities Bonta is better placed to build.',
    ],
  },

  // ───────────────────────────── AD-19 ─────────────────────────────
  {
    id: 'assembly-ad19',
    categoryId: 'state-leg',
    title: 'State Assembly, District 19',
    tldrLabel: 'AD-19',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-19 covers western San Francisco and northern San Mateo County.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'Catherine Stefani, a former prosecutor and gun-safety advocate, is seeking a second term. Her Republican challenger, a retired financial advisor, has no campaign website or published platform.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Catherine Stefani took 83.0% and Republican Philip Louis Wing 17.0% (SoS Statement of Vote). She won the open seat in 2024 over David Lee, 60.5% to 39.5%. The runoff is lopsided; it turns on her first-term record.',
    ],
    readingLinks: [
      {
        label: 'Richmond Sunset News — Stefani’s 2025 year-end column (Nov 4, 2025)',
        url: 'https://richmondsunsetnews.com/2025/11/04/assembly-catherine-stefani-7/',
        summary: 'Her own account of seven bills signed in 2025 (campaign perspective).',
      },
    ],
    candidates: [
      {
        id: 'catherine-stefani',
        photoSlug: 'catherine-stefani',
        name: 'Catherine Stefani',
        party: 'D',
        role: 'Assemblymember',
        campaignUrl: 'https://votecatherinestefani.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term Assembly member with six years as an SF supervisor and prosecutorial experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 2024; AB 1363 (Wyland’s Law, protective orders) and AB 627 signed Oct 2025 (governor’s releases).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Voted on city budgets as supervisor; no Assembly chair found.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'SF Supervisor, District 2, 2018–2024.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Says seven bills were signed in her first year (Richmond Sunset News, Nov 2025).' },
          ],
        },
        bio: [
          'Stefani, a former Contra Costa County prosecutor who founded the San Francisco chapter of Moms Demand Action, served as District 2 supervisor before winning the Assembly seat in 2024. Her priorities are gun-violence prevention, faster affordable-housing construction near transit, and school funding.',
        ],
        recordVsChange: 'She passed several bills in her first year; Wing offers no published platform or record.',
        scorecard: [
          { topic: 'Public safety', position: '✓✓ Gun-violence prevention; Wyland’s Law closes protective-order database gaps', comparison: 'Wing has no published platform.' },
          { topic: 'Housing & transit', position: '✓ Streamline affordable housing and housing near transit', comparison: 'Wing has no published platform.' },
          { topic: 'Education', position: '✓ More funding for schools and teachers', comparison: 'Wing has no published platform.' },
          { topic: 'Caucus / ideology', position: '✓ Moderate Democrat, former prosecutor', comparison: 'Wing is a Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Not compiled here (as of Oct 8, 2026).',
      },
      {
        id: 'philip-wing',
        name: 'Philip Louis Wing',
        party: 'R',
        role: 'Retired Financial Advisor',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Retired financial advisor; no public record or platform found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'Wing’s ballot designation is retired financial advisor. No campaign website was found as of Sept 27, 2026 (Ballot Brief), and no platform has been published.',
        ],
        scorecard: [
          { topic: 'Caucus / ideology', position: '? Republican; no platform found', comparison: 'Stefani is a moderate Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'None found as of Oct 8, 2026.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Stefani', '◐', 'Leftward Progressives, about 74% of whom call gun violence a very big problem, back the Democrat on gun safety and school funding, though Stefani is a moderate former prosecutor.'],
      ['LL', 'Stefani', '●', 'Loyal Liberals value a productive first term built on prosecutorial and city experience.'],
      ['LO', 'Stefani', '◐', 'Left-Out Left voters may find Stefani a moderate insider, but she is the only candidate with a housing and schools agenda.'],
      ['OO', 'Stefani', '●', 'Order and Opportunity Left voters, about 71% of whom call gun violence a very big problem, like a former prosecutor focused on gun violence, housing near transit and school funding.'],
      ['TM', 'Stefani', '○', 'Tuned-Out Middle voters get an incumbent focused on safety and housing, against a challenger with no platform.'],
      ['PP', 'Stefani', '◐', 'Pragmatic and Polite Right voters prefer a moderate former prosecutor with signed laws over an unknown challenger.'],
      ['UR', 'Stefani / Wing', '=', 'Unconventional Right voters may want a check on one-party rule and new gun rules, but Wing has no platform, while Stefani is a moderate former prosecutor with signed laws: if a protest vote against one-party rule matters most, Wing; if a crime-focused moderate matters more, Stefani.'],
      ['FC', 'Wing', '●', 'Faith First Conservatives, 55% of whom are comfortable with open carry, back the Republican over the founder of a local Moms Demand Action chapter.'],
      ['NA', 'Wing', '●', 'No Apologies Right voters, 55% of whom want less strict gun laws, back the Republican over a gun-control Democrat.'],
    ]),
    counterArguments: [
      'FC (Wing ●): But consider that Wing has published no platform, because voters cannot judge his priorities.',
      'PP (Stefani ◐): But consider that a Republican vote is the only check on one-party control, because Stefani votes with the Democratic supermajority.',
    ],
  },
];

