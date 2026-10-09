import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Statewide district sweep — Inland Empire, high desert and Coachella Valley Assembly seats:
 * AD-34, AD-45, AD-47, AD-50, AD-53, AD-58, AD-60, AD-63.
 * Finalists checked against the Secretary of State's November 3, 2026 returns pages (api.sos.ca.gov/returns)
 * and The Ballot Brief's roster (certified list of Aug 27, 2026; June 2 Statement of Vote). Research as of Oct 8, 2026.
 */

const LEG_ELIGIBILITY =
  'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

function legCriteria(districtDetail: string): QualificationCriterion[] {
  return [
    { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
    { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
    { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
    { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
  ];
}

const CAC = 'No verified current totals; see Cal-Access at https://cal-access.sos.ca.gov/ (as of Oct 8, 2026).';
const NO_ENDORSE = 'No endorsement list verified (as of Oct 8, 2026).';

const ASSEMBLY_STAKES_1 =
  'Assembly members write and vote on state laws and the state budget, serve two-year terms, and sit on committees that shape housing, health, schools, criminal justice and taxes.';

const BB = (slug: string) => `https://theballotbrief.com/state/california/${slug}`;

export const RACES_D_INLAND_B: Race[] = [
  // ───────────────────────────── AD-34 ─────────────────────────────
  {
    id: 'assembly-ad34',
    categoryId: 'state-leg',
    title: 'State Assembly, District 34',
    tldrLabel: 'AD-34',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-34 covers about 18,000 square miles of the high desert and mountains: Bear Valley, rural San Bernardino County and parts of Los Angeles and Kern counties.'),
    seatContext: 'Open seat (term limits)',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'Republican Tom Lackey is termed out. The vast, traditionally Republican district runs from Big Bear through the Victor Valley to the Antelope Valley; rural health care, public lands, warehousing and the cost of living dominate. A Democratic win would be a rare pickup in the high desert.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Randall Putz, Big Bear Lake’s mayor, led with 39.2%; Republican Charles Hughes took 36.7%, ahead of Republicans Steve Fox (19.0%) and Manny Lin (5.1%) (Statement of Vote via The Ballot Brief). Republicans combined for about 61%, so Putz needs independents and crossover voters; Hughes has outraised him about three to one.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 34', url: BB('los-angeles-county/california-assembly-district-34'), summary: 'Neutral roster with June results and stated priorities for both finalists.' },
      { label: 'Big Bear Grizzly — Big Bear Lake mayor leads state Assembly race (June 2026)', url: 'https://www.bigbeargrizzly.net/news/big-bear-lake-mayor-leads-state-assembly-race/article_300840b0-0605-474b-8bc7-933aeffa74fe.html', summary: 'Primary results and fundraising for both campaigns.' },
    ],
    candidates: [
      {
        id: 'randall-putz',
        name: 'Randall Putz',
        party: 'D',
        role: 'Mayor/Business Owner',
        campaignUrl: 'https://putzforassembly.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'About 18 years in small-town local office (school board, city council, mayor); no state legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Big Bear Lake City Council since 2014, including terms as mayor; Bear Valley Unified school board from 2008 (Big Bear Grizzly via The Ballot Brief).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on a small-city budget; no county or state budget role found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Long local record in Bear Valley, one corner of a district that is mostly high desert.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No state legislative record; says he can work with the Democratic supermajority as a former Republican.' },
          ],
        },
        bio: [
          'Putz joined the Bear Valley Unified school board in 2008 and the Big Bear Lake City Council in 2014, and has served as mayor. A former registered Republican, he calls his campaign a “purple ticket.”',
          'He wants more state attention for rural areas, protection of public lands, rural health-care recruitment, affordable housing and school funding, and has raised sales-tax equity tied to warehousing (Big Bear Grizzly).',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Lists affordable housing as a priority; no specific plan published', comparison: 'Hughes stresses cutting taxes and red tape.' },
          { topic: 'Climate', position: '✓ Protect public lands; Joshua tree protections with “common sense” management', comparison: 'Hughes has no published environmental platform.' },
          { topic: 'Education', position: '✓ Public education funding', comparison: 'Hughes backs school choice and career programs.' },
          { topic: 'Taxes', position: '~ Sales-tax equity for warehousing communities; no broad tax plan', comparison: 'Hughes promises tax cuts.' },
          { topic: 'Caucus / ideology', position: '~ Moderate Democrat and ex-Republican running as “purple”', comparison: 'Hughes is a conventional Republican backed by the party.' },
        ],
        money: `Raised $159,813 for the primary, including a $55,000 personal contribution reported in 2025 (Big Bear Grizzly, June 2026). ${CAC}`,
        endorsements: NO_ENDORSE,
      },
      {
        id: 'charles-hughes',
        name: 'Charles Hughes',
        party: 'R',
        role: 'Small Business Owner',
        campaignUrl: 'https://www.votecharleshughes.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Navy veteran, retired law enforcement officer and Antelope Valley business owner; no state legislative record found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No legislative or policy-drafting record found in sources opened.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public budget role verified.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Antelope Valley resident and business owner; endorsed by mayors across Lancaster, Palmdale, Victor Valley and Barstow.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Assembled endorsements from the state GOP, Republican legislators, police unions, firefighters and Howard Jarvis (campaign site).' },
          ],
        },
        bio: [
          'Hughes is a U.S. Navy veteran and retired law enforcement officer who is now a small business owner; he is from the Antelope Valley. He is married with five children and eight grandchildren.',
          'His campaign centers on cutting taxes and regulation, supporting law enforcement, school choice and career-focused education, and services for veterans.',
        ],
        scorecard: [
          { topic: 'Taxes', position: '✓✓ Cut taxes and everyday costs; backed by Howard Jarvis Taxpayers Association', comparison: 'Putz targets warehouse sales-tax equity, not broad cuts.' },
          { topic: 'Public safety', position: '✓✓ Support law enforcement; endorsed by a dozen police unions', comparison: 'Putz has not featured public safety.' },
          { topic: 'Education', position: '✓ School choice, core academics, career programs', comparison: 'Putz emphasizes public school funding.' },
          { topic: 'Housing & transit', position: '~ Cut red tape and invest in infrastructure; no housing plan', comparison: 'Putz lists affordable housing as a priority.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Republican; endorsed by the California Republican Party', comparison: 'Putz is a self-described purple Democrat.' },
        ],
        money: `Raised $547,842 by the primary (Big Bear Grizzly, June 2026). ${CAC}`,
        endorsements: 'California Republican Party; Asm. Tom Lackey; Sen. Shannon Grove; Rep. Jay Obernolte; California Professional Firefighters; Howard Jarvis Taxpayers Association; many police associations (campaign site, Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Putz', '◐', 'Progressive Left voters back the Democrat, though Putz is a self-styled moderate ex-Republican rather than a progressive.'],
      ['EL', 'Putz', '●', 'Establishment Liberals value Putz’s long local-government record and his pitch to work across party lines.'],
      ['DM', 'Putz', '●', 'Democratic Mainstays support the Democrat with a shot at flipping a long-Republican seat.'],
      ['OL', 'Putz', '◐', 'Outsider Left voters prefer Putz’s rural-neglect and public-lands message to the Republican, without much enthusiasm for a centrist.'],
      ['SS', 'Putz', '○', 'Stressed Sideliners may like a small-town mayor focused on rural health care, though Hughes’ tax-cut message also speaks to costs.'],
      ['AR', 'Hughes', '○', 'Ambivalent Right voters lean to the Republican on taxes and police, but Putz’s purple pitch could draw some of them.'],
      ['PR', 'Hughes', '●', 'Populist Right voters favor a veteran and former officer promising to cut taxes and back law enforcement.'],
      ['CC', 'Hughes', '●', 'Committed Conservatives back the GOP-endorsed candidate on taxes, regulation and school choice.'],
      ['FF', 'Hughes', '●', 'Faith and Flag Conservatives favor the Navy veteran with strong police backing and a parental-choice platform.'],
    ]),
    counterArguments: [
      'CC (Hughes ●): But consider that Putz has 18 years in local office while Hughes has no verified record in elected office, and Putz is a former Republican.',
      'PL (Putz ◐): But consider that Putz runs as a centrist and has not published positions on climate or labor priorities.',
    ],
  },

  // ───────────────────────────── AD-45 ─────────────────────────────
  {
    id: 'assembly-ad45',
    categoryId: 'state-leg',
    title: 'State Assembly, District 45',
    tldrLabel: 'AD-45',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-45 covers San Bernardino, Fontana, Rialto, Highland, Redlands, Mentone and Muscoy.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'Democrat James Ramos, the first California Native American state lawmaker, seeks a fifth term in a solidly Democratic San Bernardino-area seat. He chairs the budget subcommittee on public safety, which gives the district a voice on prison, policing and court spending.',
    ],
    introParagraphs: [
      'Ramos took 65.6% in the June 2 primary to Republican Greg Abdouch’s 34.4% (Statement of Vote via The Ballot Brief). Ramos has won his four general elections by 17 to 28 points; no public polling exists.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 45', url: BB('san-bernardino-county/california-assembly-district-45'), summary: 'Roster with June results and bios for both finalists.' },
      { label: 'Digital Democracy — James Ramos', url: 'https://calmatters.digitaldemocracy.org/legislators/james-ramos-149649', summary: 'Bills, votes and interest-group alignment.' },
    ],
    candidates: [
      {
        id: 'james-ramos',
        name: 'James C. Ramos',
        party: 'D',
        role: 'Assemblymember/Business Owner',
        campaignUrl: 'https://www.jamesramos.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In the Assembly since 2018 and chair of a budget subcommittee; earlier a San Bernardino County supervisor and board chair.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since Dec 2018; 34 bills this session, 22 passed, including AB 31 on tribal police (Digital Democracy).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs Budget Subcommittee No. 6 on Public Safety; sits on Budget, Governmental Organization, Local Government and Public Safety (assembly.ca.gov).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'County supervisor for the 3rd District from 2012, board chair 2015–2017; lifelong resident of the San Manuel reservation.' },
            { criterionId: 'coalition', assessment: 'met', evidence: '22 of 34 bills passed this session (Digital Democracy).' },
          ],
        },
        bio: [
          'Ramos, a Serrano/Cahuilla tribal member, became the first California Native American state lawmaker in 2018. He previously sat on the State Board of Education, the San Bernardino Community College board and the county Board of Supervisors, which he chaired from 2015 to 2017.',
          'He chairs the budget subcommittee on public safety and the Select Committee on Native American Affairs.',
        ],
        recordVsChange: 'Ramos has a high bill-passage rate and a budget subcommittee gavel; Abdouch offers a conservative cost and school-transparency message but no government record, so a change would trade clout for a new direction.',
        scorecard: [
          { topic: 'Public safety', position: '✓ Chairs the public-safety budget subcommittee; authored AB 31 on tribal police', comparison: 'Abdouch wants tougher sentencing and more police support.' },
          { topic: 'Education', position: '✓ AB 1581 on American Indian student data; CTA alignment 88%', comparison: 'Abdouch wants more parental voice and school transparency.' },
          { topic: 'Taxes', position: '~ Howard Jarvis alignment 65%, CalChamber 62% (Digital Democracy)', comparison: 'Abdouch promises lower taxes and less regulation.' },
          { topic: 'Climate', position: '~ Environmental Voters 68%, Sierra Club 40%', comparison: 'Abdouch has no environmental platform.' },
          { topic: 'Caucus / ideology', position: '~ Moderate Democrat; Courage California alignment 32%', comparison: 'Abdouch is a conservative Republican.' },
        ],
        money: CAC,
        endorsements: NO_ENDORSE,
      },
      {
        id: 'greg-abdouch',
        name: 'Greg Abdouch',
        party: 'R',
        role: 'Small Business Owner',
        campaignUrl: 'https://abdouchforca.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Longtime construction-business owner and parent activist; no elected or government experience found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office or legislative work found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No public budget role found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'San Bernardino County resident for 45+ years; founded the Not On Our Watch parent coalition on school-board transparency.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation.' },
          ],
        },
        bio: [
          'Abdouch ran a construction company for 16 years and has more than 30 years in private-sector sales and contract management. He founded Not On Our Watch, a parent coalition pressing school boards on transparency (campaign site via The Ballot Brief).',
        ],
        scorecard: [
          { topic: 'Taxes', position: '✓✓ Lower taxes and cut “wasteful spending”', comparison: 'Ramos has moderate taxpayer-group scores.' },
          { topic: 'Public safety', position: '✓✓ Hold criminals accountable, back police', comparison: 'Ramos oversees public-safety budgets.' },
          { topic: 'Education', position: '✓ Parental voice and school transparency', comparison: 'Ramos is aligned with the teachers union.' },
          { topic: 'Housing & transit', position: '~ Accountability for homelessness spending; no specific plan', comparison: 'Ramos has no signature housing bill.' },
        ],
        money: CAC,
        endorsements: NO_ENDORSE,
      },
    ],
    crossTypology: ct([
      ['PL', 'Ramos', '◐', 'Progressive Left voters back the Democrat, though Ramos’ 32% Courage California score marks him as a moderate.'],
      ['EL', 'Ramos', '●', 'Establishment Liberals value a senior lawmaker with a budget gavel and a long public résumé.'],
      ['DM', 'Ramos', '●', 'Democratic Mainstays support the veteran Democratic incumbent and his representation of Native Californians.'],
      ['OL', 'Ramos', '◐', 'Outsider Left voters prefer Ramos to the Republican but may find his business-friendly votes too cautious.'],
      ['SS', 'Ramos', '◐', 'Stressed Sideliners get a known local figure with a long service record over an untested newcomer.'],
      ['AR', 'Ramos', '○', 'Ambivalent Right voters may accept Ramos’ moderate record (65% with Howard Jarvis) over a challenger with no government experience.'],
      ['PR', 'Abdouch', '●', 'Populist Right voters favor the parent activist promising lower taxes and tougher crime laws.'],
      ['CC', 'Abdouch', '●', 'Committed Conservatives back the Republican on taxes, spending and policing.'],
      ['FF', 'Abdouch', '●', 'Faith and Flag Conservatives favor Abdouch’s parental-rights and school-transparency focus.'],
    ]),
    counterArguments: [
      'CC (Abdouch ●): But consider that Ramos already sides with taxpayer and business groups more often than most Democrats, and Abdouch has no government record.',
    ],
  },

  // ───────────────────────────── AD-47 ─────────────────────────────
  {
    id: 'assembly-ad47',
    categoryId: 'state-leg',
    title: 'State Assembly, District 47',
    tldrLabel: 'AD-47',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-47 covers the Coachella Valley, including Palm Springs, plus Joshua Tree and parts of Riverside and San Bernardino counties.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'This is one of the Assembly’s few true swing seats: Republican Greg Wallis won it by 85 votes in 2022 and by about 2.4 points in 2024. He breaks with his party more often than any other legislator and is vice chair of the Insurance Committee.',
    ],
    introParagraphs: [
      'Wallis took 48.1% in the June 2 primary; Democrat Leila Namvar, an Indio city employee and union leader, took 32.3% and Democrat Jason Byors 19.5% (Statement of Vote via The Ballot Brief). Democrats combined for about 52%, so the outcome turns on whether Byors’ voters consolidate behind Namvar.',
    ],
    readingLinks: [
      { label: 'NBC Palm Springs — Candidates outline priorities in AD-47 (May 2026)', url: 'https://www.nbcpalmsprings.com/2026/05/13/candidates-outline-priorities-in-californias-47th-assembly-district-race', summary: 'Wallis, Namvar and Byors on costs, housing and immigration.' },
      { label: 'KPBS/CalMatters — Most lawmakers never buck their party; these few do (Jul 2026)', url: 'https://www.kpbs.org/news/politics/2026/07/21/most-california-lawmakers-never-buck-their-party-these-few-do', summary: 'Wallis broke with his party 8% of the time, the highest rate.' },
    ],
    candidates: [
      {
        id: 'greg-wallis',
        name: 'Greg Wallis',
        party: 'R',
        role: 'Member of the State Assembly',
        campaignUrl: 'https://www.gregwallis.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Two-term incumbent and Insurance Committee vice chair; earlier a district director for an Assemblymember.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since Dec 2022; 32 bills this session, 9 passed, including AB 1663 on Joshua tree removal (Digital Democracy).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Vice chair of Insurance; member of Budget and its education-finance and state-administration subcommittees (assembly.ca.gov).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'District director for Asm. Chad Mayes from 2014; represents the valley since 2022 (Wikipedia).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Problem Solvers Caucus member; broke with his party 8% of the time, the most of any legislator (CalMatters, Jul 2026).' },
          ],
        },
        bio: [
          'Wallis was district director for Assemblymember Chad Mayes and earlier led the Inland Empire Taxpayers’ Association. He won the seat in 2022 by 85 votes over Christy Holstege and beat her again in 2024, 51.2% to 48.8%.',
          'He is vice chair of the Insurance Committee and the Legislature’s most frequent party-line breaker (CalMatters).',
        ],
        recordVsChange: 'Wallis has passed local bills (Joshua tree management, student heat-illness rules) and is a bipartisan swing vote; Namvar would add a reliable Democratic vote on wages and health care but starts without legislative experience.',
        scorecard: [
          { topic: 'Taxes', position: '✓ Cut regulations that raise costs; 100% CalChamber, 85% Howard Jarvis (Digital Democracy)', comparison: 'Namvar centers wages and “corporate greed.”' },
          { topic: 'Climate', position: '✗ Environmental Voters 12%, Sierra Club 0%', comparison: 'Namvar has not published climate positions.' },
          { topic: 'Public safety', position: '~ Backs local-federal cooperation on convicted undocumented immigrants, opposes tactics that scare law-abiding residents', comparison: 'Namvar has not addressed immigration enforcement.' },
          { topic: 'Health care', position: '~ 100% Planned Parenthood alignment; no health-access plan', comparison: 'Namvar wants expanded access to care.' },
          { topic: 'Caucus / ideology', position: '~ Moderate Republican; Problem Solvers Caucus', comparison: 'Namvar is a labor Democrat.' },
        ],
        money: CAC,
        endorsements: NO_ENDORSE,
      },
      {
        id: 'leila-namvar',
        name: 'Leila Namvar',
        party: 'D',
        role: 'Civil Servant/Mom',
        campaignUrl: 'https://www.leilanamvar.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Indio city employee since 2005 and former union chapter president; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office or legislative work found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No public budget role found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Has worked for the City of Indio since 2005.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Former SEIU 721 chapter president at the City of Indio (campaign site).' },
          ],
        },
        bio: [
          'Namvar immigrated from Iran in 2002, says she worked four jobs to pay for gas and rent, and has worked for the City of Indio since 2005, where she was SEIU 721 chapter president. She would be the district’s first Muslim and first Iranian American representative.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ “Attainable” and affordable housing', comparison: 'Wallis focuses on cutting regulation.' },
          { topic: 'Health care', position: '✓ Expand access to quality health care', comparison: 'Wallis has no comparable plan.' },
          { topic: 'Education', position: '✓ Expand access to education', comparison: 'Wallis is 70% aligned with CTA.' },
          { topic: 'Caucus / ideology', position: '✓ Labor Democrat; wages and “corporate greed”', comparison: 'Wallis is a business-aligned moderate Republican.' },
        ],
        money: CAC,
        endorsements: NO_ENDORSE,
      },
    ],
    crossTypology: ct([
      ['PL', 'Namvar', '●', 'Progressive Left voters back the union leader running on wages, health care and corporate power against a 12% Environmental Voters Republican.'],
      ['EL', 'Namvar', '◐', 'Establishment Liberals want a Democratic seat but may respect Wallis’ bipartisan record and Namvar’s thin résumé.', 'Experience-first Establishment Liberals could back Wallis, a two-term Insurance vice chair who breaks with his party more than any legislator; they give up a reliable Democratic vote on climate and labor.'],
      ['DM', 'Namvar', '●', 'Democratic Mainstays back the Democrat in a top party target seat.'],
      ['OL', 'Namvar', '●', 'Outsider Left voters like a first-time immigrant candidate from the labor movement.'],
      ['SS', 'Wallis', '○', 'Stressed Sideliners may favor the incumbent’s cost-cutting focus and local fixes, though Namvar’s wage message also fits.'],
      ['AR', 'Wallis', '●', 'Ambivalent Right voters fit a pragmatic, bipartisan Republican focused on costs and insurance.'],
      ['PR', 'Wallis', '◐', 'Populist Right voters prefer the Republican but may dislike his frequent votes with Democrats.'],
      ['CC', 'Wallis', '●', 'Committed Conservatives back Wallis’ business- and taxpayer-aligned record.'],
      ['FF', 'Wallis', '◐', 'Faith and Flag Conservatives back the Republican, though his Planned Parenthood alignment cuts against their priorities.'],
    ]),
    counterArguments: [
      'PL (Namvar ●): But consider that Namvar has no legislative experience and has published few specifics, against a seasoned incumbent.',
      'CC (Wallis ●): But consider that Wallis votes with Democrats more than any Republican, including on abortion-related bills.',
    ],
  },

  // ───────────────────────────── AD-50 ─────────────────────────────
  {
    id: 'assembly-ad50',
    categoryId: 'state-leg',
    title: 'State Assembly, District 50',
    tldrLabel: 'AD-50',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-50 includes Colton and Loma Linda and parts of San Bernardino, Redlands, Rialto, Rancho Cucamonga, Fontana and Ontario, plus Bloomington.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'First-term Democrat Robert Garcia, an Assistant Majority Leader, faces a Republican school-board member in a Democratic-leaning Inland Empire seat. Garcia lists education, housing, homelessness and Inland Empire air quality as priorities.',
    ],
    introParagraphs: [
      'Garcia took 58.2% in the June 2 primary to Republican Victoria Viveros Mageno’s 38.7%; no-party candidate Roberto Moreno Jr. took 3.1% (Statement of Vote via The Ballot Brief). Garcia won the seat in 2024 over a fellow Democrat, 56.4% to 43.6%.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 50', url: BB('san-bernardino-county/california-assembly-district-50'), summary: 'Roster with June results.' },
      { label: 'Redlands Community News — Garcia announces committees and priorities (Jan 2025)', url: 'https://www.redlandscommunitynews.com/news/assemblymember-garcia-announces-committee-appointments-and-priorities/article_7495a29e-da9d-11ef-a35d-23363f7025cc.html', summary: 'Background and first-term priorities.' },
    ],
    candidates: [
      {
        id: 'robert-garcia-ad50',
        name: 'Robert Garcia',
        party: 'D',
        role: 'State Assemblymember/Educator',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term incumbent and Assistant Majority Leader; eight years on a school board and about 20 years as a teacher and administrator.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since Dec 2024.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Member of Education, Housing, Natural Resources, Public Employment and Retirement and Rules; no chair (assembly.ca.gov).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Etiwanda School District trustee 2016–2024 (Redlands Community News); district office in Rancho Cucamonga.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Named Assistant Majority Leader by Speaker Rivas in Dec 2024; no signature bill verified.' },
          ],
        },
        bio: [
          'Garcia holds a UCLA biology degree and a USC public policy master’s, and spent about 20 years as a math and science teacher and administrator. He was an Etiwanda School District trustee from 2016 to 2024, then won this seat, succeeding Eloise Gómez Reyes, who endorsed him.',
        ],
        recordVsChange: 'Garcia holds a leadership post after one term but has no verified signature legislation; Mageno would shift the seat right on schools and taxes but would start in the minority.',
        scorecard: [
          { topic: 'Education', position: '✓ Former teacher and trustee; Education Committee member', comparison: 'Mageno is a sitting elementary-district board member.' },
          { topic: 'Housing & transit', position: '✓ Expand housing, address homelessness', comparison: 'Mageno has no published housing plan.' },
          { topic: 'Climate', position: '✓ Inland Empire air quality; Natural Resources member', comparison: 'Mageno has no published environmental platform.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat in Assembly leadership', comparison: 'Mageno is a Republican.' },
        ],
        money: CAC,
        endorsements: NO_ENDORSE,
      },
      {
        id: 'victoria-viveros-mageno',
        name: 'Victoria Viveros Mageno',
        party: 'R',
        role: 'Cucamonga School District Member Governing Board Area 1',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Sitting member of the Cucamonga School District board, per her ballot designation; no other public record found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Local school-board policymaking (ballot designation, certified list).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on a small elementary-district budget.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Represents a Rancho Cucamonga school-board area.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No campaign website or endorsements found.' },
          ],
        },
        bio: [
          'Mageno’s ballot designation lists her as a member of the Cucamonga School District governing board. No campaign website or further biography was found as of Oct 8, 2026.',
        ],
        scorecard: [
          { topic: 'Education', position: '? Sits on a school board; no published platform', comparison: 'Garcia is a former teacher and trustee.' },
          { topic: 'Caucus / ideology', position: '? Republican; positions unpublished', comparison: 'Garcia is a mainstream Democrat.' },
          { topic: 'Housing & transit', position: '? No published position', comparison: 'Garcia lists housing and homelessness as priorities.' },
          { topic: 'Taxes', position: '? No published position', comparison: 'Garcia cites cost of living and responsible spending.' },
        ],
        money: CAC,
        endorsements: NO_ENDORSE,
      },
    ],
    crossTypology: ct([
      ['PL', 'Garcia', '◐', 'Progressive Left voters back the Democrat focused on air quality and housing, though he is a leadership loyalist rather than a movement progressive.'],
      ['EL', 'Garcia', '●', 'Establishment Liberals value a former educator in Assembly leadership.'],
      ['DM', 'Garcia', '●', 'Democratic Mainstays back the Democratic incumbent endorsed by his predecessor.'],
      ['OL', 'Garcia', '◐', 'Outsider Left voters prefer the Democrat but see little anti-establishment edge.'],
      ['SS', 'Garcia', '○', 'Stressed Sideliners have little to go on from the challenger and default to the known incumbent.'],
      ['AR', 'Mageno', '○', 'Ambivalent Right voters lean Republican but have no published platform from Mageno to weigh.', 'Experience-first Ambivalent Right voters could back Garcia, a sitting legislator and longtime educator in leadership; they give up a Republican vote on taxes and regulation.'],
      ['PR', 'Mageno', '●', 'Populist Right voters back the Republican outsider against a Sacramento leadership Democrat.'],
      ['CC', 'Mageno', '●', 'Committed Conservatives back the Republican as a check on the supermajority.'],
      ['FF', 'Mageno', '●', 'Faith and Flag Conservatives back the Republican school-board member.'],
    ]),
    counterArguments: [
      'CC (Mageno ●): But consider that Mageno has published no platform, so voters cannot tell what she would prioritize.',
    ],
  },

  // ───────────────────────────── AD-53 ─────────────────────────────
  {
    id: 'assembly-ad53',
    categoryId: 'state-leg',
    title: 'State Assembly, District 53',
    tldrLabel: 'AD-53',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-53 spans parts of eastern Los Angeles County and western San Bernardino County; the district office is in Chino.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'First-term Democrat Michelle Rodriguez, an Assistant Majority Whip, seeks re-election in a Democratic-leaning seat she won in 2024 after her husband, Freddie Rodriguez, termed out. Her committee seats cover banking, insurance and taxes, which bear on household costs.',
    ],
    introParagraphs: [
      'Rodriguez took 62.3% in the June 2 primary to Republican Rafaela Romero’s 37.7% (Statement of Vote via The Ballot Brief). Rodriguez won in 2024 by about 15 points; Romero has a thin public profile.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 53', url: BB('los-angeles-county/california-assembly-district-53'), summary: 'Roster with June results and what is known about each finalist.' },
    ],
    candidates: [
      {
        id: 'michelle-rodriguez',
        name: 'Michelle Rodriguez',
        party: 'D',
        role: 'Assemblymember/Mom',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term incumbent and Assistant Majority Whip; earlier a health-plan administrator and member of the state POST commission.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since Dec 2024 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Member of Banking and Finance, Insurance, Revenue and Taxation, Rules and others; no chair (assembly.ca.gov).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Lifelong district resident who worked in local schools and health care (official site via The Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Assistant Majority Whip (official site via The Ballot Brief); no signature bill verified.' },
          ],
        },
        bio: [
          'Rodriguez worked in local public schools and health care, including for Inter Valley Health Plan and ProMed Healthcare Administrators, and served on the state Commission on Peace Officer Standards and Training. She won the seat in 2024 over Republican Nick Wilson, 57.6% to 42.4%, and is an Assistant Majority Whip.',
        ],
        recordVsChange: 'Rodriguez sits in leadership and on finance committees after one term; Romero has published no platform, so a change would trade a known Democratic vote for an unknown.',
        scorecard: [
          { topic: 'Public safety', position: '✓ Former POST commissioner; domestic-violence prevention priority', comparison: 'Romero has no published position.' },
          { topic: 'Health care', position: '✓ Health-plan background; lists universal health care as a priority', comparison: 'Romero has no published position.' },
          { topic: 'Taxes', position: '? Revenue and Taxation member; no tax platform found', comparison: 'Romero has no published position.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat in Assembly leadership', comparison: 'Romero is endorsed by the conservative California Republican Assembly.' },
        ],
        money: CAC,
        endorsements: NO_ENDORSE,
      },
      {
        id: 'rafaela-romero',
        name: 'Rafaela Romero',
        party: 'R',
        role: 'Special Education Aide',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'No campaign website, occupation or public record found beyond an endorsement listing.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'Endorsed by the California Republican Assembly before the primary.' },
          ],
        },
        bio: [
          'Romero was endorsed by the California Republican Assembly, a conservative volunteer group, before the primary. No campaign website or occupation was found as of Oct 8, 2026.',
        ],
        scorecard: [
          { topic: 'Caucus / ideology', position: '✓ Conservative Republican (CRA-endorsed)', comparison: 'Rodriguez is a mainstream Democrat.' },
          { topic: 'Taxes', position: '? No published position', comparison: 'Rodriguez sits on Revenue and Taxation.' },
          { topic: 'Public safety', position: '? No published position', comparison: 'Rodriguez is a former POST commissioner.' },
          { topic: 'Health care', position: '? No published position', comparison: 'Rodriguez lists universal health care as a priority.' },
        ],
        money: CAC,
        endorsements: 'California Republican Assembly (pre-primary endorsement list, via The Ballot Brief).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Rodriguez', '◐', 'Progressive Left voters back the Democrat who lists universal health care as a priority, though she is a leadership loyalist.'],
      ['EL', 'Rodriguez', '●', 'Establishment Liberals value an incumbent in leadership with a public-health and public-safety background.'],
      ['DM', 'Rodriguez', '●', 'Democratic Mainstays back the Democratic incumbent in a family-held local seat.'],
      ['OL', 'Rodriguez', '◐', 'Outsider Left voters prefer the Democrat but may dislike the family succession.'],
      ['SS', 'Rodriguez', '○', 'Stressed Sideliners have nothing from the challenger to weigh and default to the incumbent.'],
      ['AR', 'Romero', '○', 'Ambivalent Right voters lean Republican but have no platform from Romero to judge.', 'Experience-first Ambivalent Right voters could back Rodriguez, a sitting legislator on finance committees with a POST commission background; they give up a Republican vote and accept a reliable Democratic one.'],
      ['PR', 'Romero', '●', 'Populist Right voters back the Republican against an establishment Democrat.'],
      ['CC', 'Romero', '●', 'Committed Conservatives back the conservative CRA-endorsed candidate.'],
      ['FF', 'Romero', '●', 'Faith and Flag Conservatives back the CRA-endorsed Republican.'],
    ]),
    counterArguments: [
      'CC (Romero ●): But consider that Romero has no public record or platform, so a vote for her is purely a party vote.',
    ],
  },

  // ───────────────────────────── AD-58 ─────────────────────────────
  {
    id: 'assembly-ad58',
    categoryId: 'state-leg',
    title: 'State Assembly, District 58',
    tldrLabel: 'AD-58',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-58 covers parts of western Riverside County, including parts of Riverside and Corona, and a slice of San Bernardino County.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'A 2024 rematch and one of the state’s top battlegrounds: Republican Leticia Castillo beat Democrat Clarissa Cervantes by 596 votes in a Democratic-leaning seat. Parental rights, public safety and the cost of living frame the race.',
    ],
    introParagraphs: [
      'Cervantes led the June 2 primary 54.5% to Castillo’s 45.5% in a two-person field (Statement of Vote via The Ballot Brief), a reversal of 2024, when Castillo led the primary. November turnout is larger and more Democratic than June’s, which helps Cervantes.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 58', url: BB('riverside-county/california-assembly-district-58'), summary: 'Roster with June results and both candidates’ stated priorities.' },
      { label: 'Digital Democracy — Leticia Castillo', url: 'https://calmatters.digitaldemocracy.org/legislators/leticia-castillo-187479', summary: 'Committees and bill record.' },
    ],
    candidates: [
      {
        id: 'leticia-castillo',
        name: 'Leticia Castillo',
        party: 'R',
        role: 'Assemblywoman/Licensed Psychotherapist',
        campaignUrl: 'https://castilloforassembly.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term incumbent and committee vice chair; earlier a county mental-health psychotherapist and private-practice owner.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since Dec 2024; 22 bills this session, 1 passed (AB 1597, notary fees), 17 failed (Digital Democracy).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Vice chair of Economic Development, Growth and Household Impact; member of Budget and its climate/energy subcommittee (assembly.ca.gov).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Corona-based; former Riverside County Department of Mental Health clinician (campaign site).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'One of 22 bills passed; voter-ID bill was voted down (Wikipedia).' },
          ],
        },
        bio: [
          'Castillo was a licensed clinical psychotherapist for Riverside County’s mental-health department before opening a private practice. After a third-place finish in 2022, she won this seat in 2024 by 596 votes.',
          'In 2025 she introduced parental-rights bills on gender identity and school lessons and backed a voter-ID bill; most of her bills have failed in the Democratic-run Legislature.',
        ],
        recordVsChange: 'Castillo is a committee vice chair but has passed one bill; Cervantes would bring a Riverside council record and a vote with the majority party, at the cost of losing a conservative voice on parental-rights issues.',
        scorecard: [
          { topic: 'Education', position: '✓✓ Parental rights; bills to let parents opt children out of lessons on gender identity', comparison: 'Cervantes has not published education positions.' },
          { topic: 'Public safety', position: '✓✓ Says Sacramento is “protecting criminals”; restore public safety', comparison: 'Cervantes has not published public-safety positions.' },
          { topic: 'Taxes', position: '✓✓ Protect Prop 13 and lower taxes', comparison: 'Cervantes cites small-business microgrants.' },
          { topic: 'Caucus / ideology', position: '✓ Conservative: anti-abortion, Second Amendment, voter ID', comparison: 'Cervantes is a liberal Democrat.' },
        ],
        money: CAC,
        endorsements: NO_ENDORSE,
        notes: ['Wikipedia describes her 2025 gender-identity bills as anti-trans; she frames them as protecting parental rights. The California Family Council backed her adoption-as-alternative-to-abortion bill.'],
      },
      {
        id: 'clarissa-cervantes',
        name: 'Clarissa Cervantes',
        party: 'D',
        role: 'Councilmember/Businesswoman/Mother',
        campaignUrl: 'https://www.clarissacervantes.com/',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Riverside City Council member for Ward 2, former council field representative and campaign organizer; no state legislative record.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Riverside City Council, Ward 2; voted to expand affordable housing (campaign site).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on the Riverside city budget; pushed road-repair funding (campaign site).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Council member and former field representative to Riverside Councilmember Andy Melendrez.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Led the June primary; no state legislative record.' },
          ],
        },
        bio: [
          'Cervantes represents Ward 2 on the Riverside City Council, the first woman in that seat. She was a field representative to a Riverside councilmember and a campaign organizer, and holds an urban-planning master’s from Cal Poly Pomona.',
          'She runs on road repairs, small-business microgrants and open-space protection.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Voted to expand affordable housing; road repairs', comparison: 'Castillo has no housing plan.' },
          { topic: 'Climate', position: '✓ Environmental and open-space protections', comparison: 'Castillo has no climate platform.' },
          { topic: 'Taxes', position: '~ Small-business microgrants; no tax platform', comparison: 'Castillo promises lower taxes and Prop 13 protection.' },
          { topic: 'Caucus / ideology', position: '✓ Liberal Democrat', comparison: 'Castillo is a social conservative.' },
        ],
        money: CAC,
        endorsements: NO_ENDORSE,
      },
    ],
    crossTypology: ct([
      ['PL', 'Cervantes', '●', 'Progressive Left voters back the Democrat against a Republican who pushed bills targeting gender-affirming care.'],
      ['EL', 'Cervantes', '●', 'Establishment Liberals favor the city council member with a planning background in a top Democratic target seat.'],
      ['DM', 'Cervantes', '●', 'Democratic Mainstays back the Democrat to win back the seat.'],
      ['OL', 'Cervantes', '●', 'Outsider Left voters favor the organizer-turned-council member on housing and the environment.'],
      ['SS', 'Cervantes', '○', 'Stressed Sideliners may prefer local road and small-business work over culture-war bills, though Castillo’s cost message also resonates.'],
      ['AR', 'Castillo', '◐', 'Ambivalent Right voters like her tax and public-safety focus but may be wary of her emphasis on social issues.'],
      ['PR', 'Castillo', '●', 'Populist Right voters back an incumbent who says Sacramento protects criminals and pushes voter ID.'],
      ['CC', 'Castillo', '●', 'Committed Conservatives back her Prop 13, tax and public-safety positions.'],
      ['FF', 'Castillo', '●', 'Faith and Flag Conservatives strongly fit her parental-rights, anti-abortion and family-values agenda.'],
    ]),
    counterArguments: [
      'FF (Castillo ●): But consider that 17 of her 22 bills failed, so her agenda has limited reach in a Democratic Legislature.',
      'PL (Cervantes ●): But consider that she has published few specifics on state issues beyond local road and housing votes.',
    ],
  },

  // ───────────────────────────── AD-60 ─────────────────────────────
  {
    id: 'assembly-ad60',
    categoryId: 'state-leg',
    title: 'State Assembly, District 60',
    tldrLabel: 'AD-60',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-60 covers parts of Riverside, Moreno Valley and Perris.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'Second-term Democrat Corey Jackson, a progressive who chairs the budget subcommittee on human services, faces a Moreno Valley councilmember and former assistant sheriff. Social services funding, public safety and housing costs define the contrast.',
    ],
    introParagraphs: [
      'Jackson took 59.8% in the June 2 primary; Republican Ed Delgado took 25.1% and Republican Ron Edwards 15.1% (Statement of Vote via The Ballot Brief). Republicans combined for about 40%; Jackson won in 2024 with 55.4%.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 60', url: BB('riverside-county/california-assembly-district-60'), summary: 'Roster with June results and bios.' },
      { label: 'Digital Democracy — Corey Jackson', url: 'https://calmatters.digitaldemocracy.org/legislators/corey-jackson-165443', summary: 'Bills, votes and alignment scores.' },
    ],
    candidates: [
      {
        id: 'corey-jackson',
        name: 'Corey A. Jackson',
        party: 'D',
        role: 'State Assembly Member',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Two-term incumbent who chairs a budget subcommittee; earlier a county board of education member and nonprofit founder.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since Dec 2022; 35 bills this session, 11 passed (Digital Democracy).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs Budget Subcommittee No. 2 on Human Services; on the Joint Legislative Budget Committee (assembly.ca.gov).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Riverside County Board of Education 2020–2022; founded SBX Youth and Family Services (The Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Passed AB 2599 (corporate slavery disclosures), AB 1969 and AB 96 this session (Digital Democracy).' },
          ],
        },
        bio: [
          'Jackson, who holds master’s and doctoral degrees in social work, founded a youth and family nonprofit and served on the Riverside County Board of Education before winning this seat in 2022. He is the first openly gay Black man in the Legislature.',
          'He chairs the human services budget subcommittee and the Select Committee on Racism, Hate and Xenophobia.',
        ],
        recordVsChange: 'Jackson has a budget gavel and passes bills; Delgado would bring law-enforcement management experience and a conservative public-safety focus but sit in the minority.',
        scorecard: [
          { topic: 'Education', position: '✓✓ Authored legislation barring school boards from banning instructional materials over LGBTQ and race content; CTA 91%', comparison: 'Delgado has not published education positions.' },
          { topic: 'Climate', position: '✓✓ Environmental Voters 99%, Sierra Club 90%', comparison: 'Delgado has no environmental platform.' },
          { topic: 'Public safety', position: '~ Social-services and anti-hate focus', comparison: 'Delgado is a 25-year sheriff’s veteran running on public safety.' },
          { topic: 'Taxes', position: '✗ CalChamber 0%, Howard Jarvis 0%', comparison: 'Delgado runs on affordability.' },
          { topic: 'Caucus / ideology', position: '✓✓ Progressive Caucus member; Courage California 95%', comparison: 'Delgado is a Republican calling for a “two-party state.”' },
        ],
        money: CAC,
        endorsements: NO_ENDORSE,
        notes: [
          'The conservative California Globe reported in Sept 2026 that a $6 million 2026–27 budget allocation went to a nonprofit Jackson founded; no independent outlet or official body had confirmed or acted on the claim as of Oct 8, 2026. https://californiaglobe.com/fl/report-california-assemblyman-steers-6-million-to-his-own-nonprofit/',
        ],
      },
      {
        id: 'ed-delgado',
        name: 'Ed Delgado',
        party: 'R',
        role: 'City Council Member',
        campaignUrl: 'https://www.voteeddelgado.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Moreno Valley councilmember since 2021 and retired assistant sheriff who ran the county jail system; no state legislative record.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Moreno Valley City Council, District 2, elected 2021 (campaign site).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on a city budget; oversaw the sheriff’s Corrections Division as assistant sheriff.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Moreno Valley resident and councilmember; 25 years with the Riverside County Sheriff’s Department.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No state legislative record; no endorsements named on his site.' },
          ],
        },
        bio: [
          'Delgado served 10 years in the Coast Guard and 25 years with the Riverside County Sheriff’s Department, rising to assistant sheriff over corrections. He was elected to the Moreno Valley City Council in 2021 and sits on the League of California Cities’ public safety committee.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓✓ Former assistant sheriff; top priority', comparison: 'Jackson focuses on social services.' },
          { topic: 'Taxes', position: '✓ Affordability is a top priority; no specific plan', comparison: 'Jackson scores 0% with Howard Jarvis.' },
          { topic: 'Caucus / ideology', position: '✓ Republican seeking a “two-party state”', comparison: 'Jackson is a Progressive Caucus member.' },
          { topic: 'Housing & transit', position: '? No published position', comparison: 'Jackson passed a bill on homeowner-association fees.' },
        ],
        money: CAC,
        endorsements: NO_ENDORSE,
      },
    ],
    crossTypology: ct([
      ['PL', 'Jackson', '●', 'Progressive Left voters back a Progressive Caucus member with near-perfect environmental and labor scores.'],
      ['EL', 'Jackson', '●', 'Establishment Liberals value a budget subcommittee chair who passes bills.'],
      ['DM', 'Jackson', '●', 'Democratic Mainstays support the two-term Democrat focused on families and human services.'],
      ['OL', 'Jackson', '●', 'Outsider Left voters favor his anti-racism and equity agenda.'],
      ['SS', 'Jackson', '○', 'Stressed Sideliners may value his social-services work, though Delgado’s public-safety pitch also appeals.'],
      ['AR', 'Delgado', '◐', 'Ambivalent Right voters favor an experienced local official and law-enforcement manager over a 0% CalChamber incumbent.', 'Experience-first Ambivalent Right voters could back Jackson, a two-term legislator who chairs a budget subcommittee; they give up a public-safety-focused Republican.'],
      ['PR', 'Delgado', '●', 'Populist Right voters back the former assistant sheriff calling for a two-party state.'],
      ['CC', 'Delgado', '●', 'Committed Conservatives back the Republican on public safety and costs.'],
      ['FF', 'Delgado', '●', 'Faith and Flag Conservatives back a veteran and career lawman.'],
    ]),
    counterArguments: [
      'PR (Delgado ●): But consider that Jackson holds a budget gavel that steers human-services money to the district, which a minority-party member could not.',
    ],
  },

  // ───────────────────────────── AD-63 ─────────────────────────────
  {
    id: 'assembly-ad63',
    categoryId: 'state-leg',
    title: 'State Assembly, District 63',
    tldrLabel: 'AD-63',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-63 is centered on Corona, Lake Elsinore and nearby western Riverside County communities.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'Republican Natasha Johnson won an August 2025 special election after Bill Essayli left to become U.S. Attorney. No Democrat made the November ballot; her only opponent is a Peace and Freedom write-in qualifier, so the outcome is not in doubt.',
    ],
    introParagraphs: [
      'Johnson was the only candidate printed on the June 2 ballot and took 99.3%; Peace and Freedom write-in Kevin Akin took 0.7%, enough to advance (Statement of Vote via The Ballot Brief). Johnson won the 2025 special general 53.5% to 46.5% over Democrat Chris Shoults.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 63', url: BB('riverside-county/california-assembly-district-63'), summary: 'Roster with June results and both candidates’ priorities.' },
    ],
    candidates: [
      {
        id: 'natasha-johnson',
        name: 'Natasha Johnson',
        party: 'R',
        role: 'Assemblywoman/Business Owner',
        campaignUrl: 'https://natashajohnsonforassembly.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Incumbent since Sept 2025 and two-committee vice chair, after 13 years on the Lake Elsinore City Council including three stints as mayor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since Sept 8, 2025; Lake Elsinore City Council 2012–2025 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Vice chair of Business and Professions and of Elections; member of Budget (assembly.ca.gov).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Lake Elsinore mayor 2014–15, 2018–19 and 2023–24 (Wikipedia).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Minority-party member for one year; no signature bill verified.' },
          ],
        },
        bio: [
          'Johnson worked in banking and personal finance, most recently in marketing for Navy Federal Credit Union, and owns a small business. She served on the Lake Elsinore City Council from 2012 to 2025, three times as mayor, and won the 2025 special election to replace Bill Essayli.',
        ],
        recordVsChange: 'Johnson has a long local record and two vice-chair posts; Akin offers a socialist working-class platform but no government experience.',
        scorecard: [
          { topic: 'Public safety', position: '✓✓ More law-enforcement funding; as a councilmember opposed the state sanctuary law (2018)', comparison: 'Akin centers workers and social programs.' },
          { topic: 'Taxes', position: '✓ Lower costs for families and small businesses', comparison: 'Akin backs free college and universal health care.' },
          { topic: 'Housing & transit', position: '✓ Homelessness through mental-health services and transitional housing', comparison: 'Akin backs affordable housing and transit.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Republican', comparison: 'Akin is a Peace and Freedom socialist.' },
        ],
        money: CAC,
        endorsements: NO_ENDORSE,
      },
      {
        id: 'kevin-akin',
        name: 'Kevin Akin',
        party: 'PF',
        role: 'No Ballot Designation',
        campaignUrl: 'https://kevinakin4california.org/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Union tradesman and nonprofit volunteer; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No public budget role found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Born and raised in western Riverside County; nonprofit and neighborhood board service (campaign site).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'Member of four unions; no legislative record.' },
          ],
        },
        bio: [
          'Akin, born and raised in western Riverside County, has worked as a carpenter, steelworker and steam engineer and belonged to four unions. He refuses corporate contributions and runs on free public education from preschool through university, universal medical care and affordable housing, childcare and transit.',
        ],
        scorecard: [
          { topic: 'Education', position: '✓✓ Free public education from preschool through university', comparison: 'Johnson has no comparable plan.' },
          { topic: 'Health care', position: '✓✓ Medical care for all', comparison: 'Johnson focuses on mental-health services for homelessness.' },
          { topic: 'Caucus / ideology', position: '✓ Peace and Freedom socialist; no corporate money', comparison: 'Johnson is a mainstream Republican.' },
          { topic: 'Housing & transit', position: '✓ Affordable housing, childcare and transportation', comparison: 'Johnson backs transitional housing with mental-health services.' },
        ],
        money: CAC,
        endorsements: `${NO_ENDORSE} Certified for the November ballot as the Peace and Freedom candidate (campaign site, July 14, 2026).`,
      },
    ],
    crossTypology: ct([
      ['PL', 'Akin', '●', 'Progressive Left voters, with no Democrat on the ballot, fit Akin’s universal health care, free college and no-corporate-money platform; he is far to Johnson’s left.'],
      ['EL', '—', '—', 'Establishment Liberals have no Democrat to support and little reason to back either a Republican or a minor-party socialist.', 'Experience-first Establishment Liberals could back Johnson, a former three-time mayor now on two Assembly committees as vice chair; they give up any liberal vote on climate or social policy.'],
      ['DM', '—', '—', 'Democratic Mainstays have no Democratic nominee; many will skip the race or write in a name.', 'Experience-first Democratic Mainstays could back Johnson for her 13 years of local government and current seat; they accept a Republican vote in Sacramento.'],
      ['OL', 'Akin', '◐', 'Outsider Left voters like a union tradesman outside both major parties, though his chances are minimal.', 'Experience-first Outsider Left voters could back Johnson, the only finalist with government experience; they give up Akin’s working-class platform.'],
      ['SS', 'Johnson', '○', 'Stressed Sideliners lean to the known incumbent focused on living costs.'],
      ['AR', 'Johnson', '●', 'Ambivalent Right voters back a pragmatic local-government Republican.'],
      ['PR', 'Johnson', '●', 'Populist Right voters favor her law-enforcement and anti-sanctuary record.'],
      ['CC', 'Johnson', '●', 'Committed Conservatives back the Republican on costs and public safety.'],
      ['FF', 'Johnson', '●', 'Faith and Flag Conservatives back the Republican incumbent.'],
    ]),
    counterArguments: [
      'PL (Akin ●): But consider that Akin has no government experience and almost no chance of winning, so the vote is mainly a protest.',
    ],
  },
];
