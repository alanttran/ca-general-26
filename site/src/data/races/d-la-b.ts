import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Los Angeles County district races (group B): U.S. House CA-36, CA-37, CA-38, CA-41, CA-43, CA-44 (Prop 50 map),
 * State Senate SD-30, and Assembly AD-46, AD-48, AD-49, AD-52, AD-54, AD-55.
 * Finalists from the Secretary of State's Certified List of Candidates (Aug 27, 2026); June 2 shares from the
 * certified Statement of Vote. Research as of Oct 9, 2026.
 */

const CERT_LIST = 'https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/cert-list-candidates.pdf';
const SOV_US_REP = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/76-us-rep.pdf';
const SOV_SENATE = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/90-state-senator.pdf';
const SOV_ASSEMBLY = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/95-state-assembly.pdf';
const CDP_ENDORSE = 'https://cadem.org/wp-content/uploads/2026/08/8.5.26-FINAL-2026-General-Election-Endorsements.pdf';
const CDP_LINE = `California Democratic Party (general-election endorsement list, Aug 5, 2026) — ${CDP_ENDORSE}`;
const CAL_ACCESS = 'Current Cal-Access totals not compiled for this guide as of Oct 9, 2026; see https://cal-access.sos.ca.gov/.';
const NO_ENDORSE = 'No endorsements listed on the campaign site or found in news coverage as of Oct 9, 2026.';

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
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const ASSEMBLY_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
  { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const HOUSE_STAKES =
  'A U.S. representative votes on federal taxes, health programs, immigration, defense spending and infrastructure money, oversees the executive branch, and runs a casework office that helps constituents with veterans’ benefits, Social Security and federal agencies.';

const SENATE_STAKES =
  'State senators vote on the state budget, housing and land-use law, climate and energy rules, public safety and criminal-justice statutes, and confirmations of governor appointees; they serve four-year terms.';

const ASSEMBLY_STAKES =
  'Assembly members vote on the state budget, housing and land-use law, schools and colleges, climate and energy rules, and public safety statutes; they serve two-year terms and handle constituent casework with state agencies.';

const UNKNOWN_LAW = 'No elected, legislative or policy-drafting experience found.';
const UNKNOWN_COMMITTEE = 'No legislative committee or public budget-writing experience found.';
const UNKNOWN_COALITION = 'No public record of passing legislation or building legislative coalitions found.';

export const RACES_D_LA_B: Race[] = [
  // ───────────────────────── CA-36 ─────────────────────────
  {
    id: 'us-rep-ca36',
    categoryId: 'federal',
    title: 'U.S. Representative, 36th District',
    tldrLabel: 'CA-36',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'Proposition 50 left CA-36, a Westside seat that includes UCLA, unchanged (Daily Bruin). Lieu is vice chair of the House Democratic Caucus and one of Congress’s most active members on AI policy, so the race is about keeping a leadership seat versus sending a first-time Republican.',
    ],
    introParagraphs: [
      'Democratic Rep. Ted Lieu took 60.9% in the June 2 primary. Republican Houston Brignano was second with 15.3%, narrowly ahead of fellow Republican Melissa Toomim (13.1%) (certified Statement of Vote). Republicans combined for about 28%, so Brignano, running a small donor-funded campaign, needs heavy crossover support from Democrats and independents.',
    ],
    readingLinks: [
      {
        label: 'Daily Bruin — Lieu, Brignano advance in the 36th (June 8, 2026)',
        url: 'https://dailybruin.com/2026/06/08/ted-lieu-houston-brignano-win-36th-district-representative-primary/',
        summary: 'Primary-night report on both finalists’ priorities and funding.',
      },
      { label: 'Certified Statement of Vote — U.S. Representative (June 2, 2026)', url: SOV_US_REP },
    ],
    candidates: [
      {
        id: 'ted-lieu',
        photoSlug: 'ted-lieu',
        name: 'Ted W. Lieu',
        party: 'D',
        role: 'United States Representative, 36th District',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2015 and in House Democratic leadership since 2023, after a decade in the state Legislature and three years on the Torrance City Council.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since January 2015; State Senate 2011–2014; State Assembly 2005–2010; Torrance City Council 2002–2005 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Judiciary and Foreign Affairs committees; vice chair of the House Democratic Caucus since January 2023 (Wikipedia; Daily Bruin).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented CA-36 since 2023 and the predecessor 33rd District from 2015 to 2023.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Introduced the AI Kill Switch Act with Republican Rep. Nathaniel Moran in July 2026; in Sacramento authored the 2012 law making California the first state to ban sexual-orientation change efforts for minors (Wikipedia).' },
          ],
        },
        bio: [
          'A Stanford computer-science graduate and Georgetown Law editor-in-chief, Lieu served on active duty as an Air Force lawyer (1995–1999) and in the Reserve until 2021, retiring as a colonel. He was elected to Congress in 2014 after serving on the Torrance council and in both houses of the Legislature.',
          'He is vice chair of the House Democratic Caucus. His campaign emphasizes civil rights, more humane immigration policy and regulating AI (Daily Bruin).',
        ],
        recordVsChange:
          'Lieu is in House Democratic leadership and leads on AI legislation, including a bipartisan 2026 bill; Brignano offers a Republican vote and a jobs-retraining message but no record in office, so a change would trade that seniority for a first-term member.',
        scorecard: [
          { topic: 'Technology / AI', position: '✓✓ AI Kill Switch Act (2026) would require developers to be able to shut down advanced AI systems', comparison: 'Brignano focuses on AI job training and reskilling rather than regulation.' },
          { topic: 'Immigration', position: '✓ Campaign calls for more humane immigration policies (Daily Bruin)', comparison: 'Brignano wants a system that prioritizes American-born workers.' },
          { topic: 'Climate', position: '✓ Introduced the Climate Solutions Act in 2015 (Wikipedia)', comparison: 'Brignano has published no climate position.' },
          { topic: 'Housing', position: '? No specific federal housing plan found', comparison: 'Brignano says homeownership is out of reach but lists no plan.' },
          { topic: 'Trump / House majority', position: '✓ Democratic Caucus vice chair; a vote for a Democratic House', comparison: 'Brignano would add a Republican vote; he has not published views on Trump.' },
        ],
        money: 'Raised $1.83M with $1.19M cash on hand for the 2025–26 cycle as of June 30, 2026 (FEC, candidate H4CA33119).',
        endorsements: CDP_LINE,
        redFlags: [],
      },
      {
        id: 'houston-brignano',
        name: 'Houston Brignano',
        party: 'R',
        role: 'Technology Executive',
        campaignUrl: 'https://www.voteforhouston.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Marine Corps veteran with two Iraq deployments and local volunteer board service; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: UNKNOWN_LAW },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: UNKNOWN_COMMITTEE },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'South Bay native; serves on the boards of a Redondo Beach homeschool co-op and an Old Torrance church (campaign site).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: UNKNOWN_COALITION },
          ],
        },
        bio: [
          'A South Bay native who joined the Marine Corps after high school and deployed twice to Iraq. His ballot designation is Technology Executive; his campaign site does not name an employer. He and his wife homeschool their three daughters.',
          'His priorities are training young people to use AI, reskilling workers whose jobs are threatened by automation, and student debt and housing costs.',
        ],
        scorecard: [
          { topic: 'Technology / AI', position: '✓ AI training for young people and reskilling programs to protect jobs from automation', comparison: 'Lieu focuses on regulating advanced AI systems.' },
          { topic: 'Immigration', position: '✓ Wants an immigration system that prioritizes American-born citizens in the job market (Daily Bruin)', comparison: 'Lieu backs more humane immigration policies.' },
          { topic: 'Housing', position: '~ Cites a median first-time buyer age of 40; no specific plan published', comparison: 'Lieu has no specific federal housing plan found.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Lieu introduced a climate bill in 2015.' },
          { topic: 'Trump / House majority', position: '? No published views on Trump; would add a Republican vote', comparison: 'Lieu is in House Democratic leadership.' },
        ],
        money: 'Raised $5,139 and had $801 cash on hand as of June 30, 2026 (FEC, candidate H6CA36208).',
        endorsements: NO_ENDORSE,
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Lieu', '◐', 'Leftward Progressives back Lieu on civil rights, humane immigration policy and AI regulation, though Lieu is a party leadership figure rather than an insurgent.'],
      ['LL', 'Lieu', '●', 'Loyal Liberals, 92% of whom say experts make better policy decisions than others, value Lieu, the House Democratic Caucus vice chair and an expert-minded leader on AI policy.'],
      ['LO', 'Lieu', '◐', 'Left-Out Left voters prefer Lieu’s Democratic vote, though Brignano’s plan to retrain workers displaced by automation speaks to their economic worries.'],
      ['OO', 'Lieu', '●', 'Order and Opportunity Left voters, only about 14% of whom back a national deportation effort, fit Lieu, a retired Air Force colonel who backs humane immigration policy and a Democratic House.'],
      ['TM', 'Brignano', '○', 'Tuned-Out Middle voters weigh jobs and costs first, and Brignano runs on worker reskilling, student debt and housing costs.', 'Experience-first Tuned-Out Middle voters could back Lieu, in Congress since 2015 and in party leadership; they give up Brignano’s jobs-and-costs focus.'],
      ['PP', 'Lieu', '◐', 'Pragmatic and Polite Right voters value competence and experience, and Lieu, a retired Air Force colonel with a decade in Congress, offers more than a first-time candidate.'],
      ['UR', 'Brignano', '◐', 'Unconventional Right voters like Brignano, a Marine veteran who wants immigration rules that put American-born workers first.', 'Experience-first Unconventional Right voters could back Lieu, a retired Air Force colonel in House leadership; they give up a Republican vote on immigration.'],
      ['FC', 'Brignano', '◐', 'Faith First Conservatives lean to Brignano, a Marine veteran who homeschools his daughters, though Brignano has published little on social issues.', 'Experience-first Faith First Conservatives could back Lieu, a veteran with a decade in Congress; they give up a Republican vote for a Democratic House.'],
      ['NA', 'Brignano', '◐', 'No Apologies Right voters back the Republican against a prominent Democratic leader, though Brignano has published no views on Trump, whom 89% of them approve of.', 'Experience-first No Apologies Right voters could back Lieu, the only finalist with legislative experience; they give up a Republican House vote.'],
    ]),
    counterArguments: [
      'PP (Lieu ◐): But consider that a vote for Lieu also supports Democratic leadership in the House, because their mild lean to the Republican side and lower spending may matter more than seniority.',
      'TM (Brignano ○): But consider that Brignano has published no specific housing or student-debt plan, because a promise without details may not bring concrete help.',
    ],
  },

  // ───────────────────────── CA-37 ─────────────────────────
  {
    id: 'us-rep-ca37',
    categoryId: 'federal',
    title: 'U.S. Representative, 37th District',
    tldrLabel: 'CA-37',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent (Democrat vs. Democrat)',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'Both finalists are Democrats, so the seat will stay Democratic. The choice is between a two-term incumbent who sits on Foreign Affairs and Judiciary and belongs to the Progressive Caucus, and a first-time candidate who calls herself an activist and organizer, “not a career politician.”',
    ],
    introParagraphs: [
      'Rep. Sydney Kamlager-Dove took 55.2% in a ten-candidate June 2 primary. Democrat Samantha Mota edged Republican Baltazar Fedalizo for second, 11.7% to 10.7% (certified Statement of Vote). With no Republican on the November ballot, Mota needs Republican and independent voters plus Democrats looking for a change.',
    ],
    readingLinks: [
      { label: 'Certified List of Candidates — Nov 3, 2026 (Secretary of State)', url: CERT_LIST },
      { label: 'Certified Statement of Vote — U.S. Representative (June 2, 2026)', url: SOV_US_REP },
    ],
    candidates: [
      {
        id: 'sydney-kamlager-dove',
        photoSlug: 'sydney-kamlager-dove',
        name: 'Sydney Kamlager-Dove',
        party: 'D',
        role: 'U.S. Representative, 37th District',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2023 after serving in the State Assembly and State Senate and on the LA Community College District board.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since January 2023; State Senate March 2021–December 2022; State Assembly April 2018–March 2021; LA Community College District trustee from 2015 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Foreign Affairs (ranking member, South and Central Asia Subcommittee) and Judiciary in the 119th Congress (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Succeeded Karen Bass in CA-37 in 2023; earlier district director for then-Assemblymember Holly Mitchell (2010).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Assembly bills signed into law include AB 987 (Clippers arena) and AB 241 and AB 242 (implicit-bias training, 2019) (Wikipedia).' },
          ],
        },
        bio: [
          'Kamlager-Dove worked in public art and nonprofit public affairs before serving as a district director for Holly Mitchell. She won an LA Community College board seat in 2015, then special elections to the Assembly (2018) and State Senate (2021), and succeeded Karen Bass in Congress in 2023.',
          'A Progressive Caucus member, she walked out of a heated June 2026 hearing exchange with Secretary of State Marco Rubio (Wikipedia).',
        ],
        recordVsChange:
          'Kamlager-Dove brings a subcommittee ranking post and a long legislative record; Mota offers a fresh, activist voice but no record in office or published policy detail, so replacing the incumbent would trade seniority for an untested first-term member of the same party.',
        scorecard: [
          { topic: 'Caucus / ideology', position: '✓ Congressional Progressive Caucus member (Wikipedia)', comparison: 'Mota runs as an outsider Democrat with no voting record.' },
          { topic: 'Health care', position: '? No federal health plan found in sources reviewed', comparison: 'Mota lists universal health care as a top priority.' },
          { topic: 'Public safety', position: '✓ In the Assembly pushed stronger police use-of-force standards and parole voting rights', comparison: 'Mota has published no criminal-justice platform.' },
          { topic: 'Trump administration', position: '✓ Clashed with Secretary of State Rubio at a June 2026 hearing and walked out', comparison: 'Mota has published no position on the administration.' },
          { topic: 'District clout', position: '✓ Ranking member of a Foreign Affairs subcommittee; endorsed by the state party', comparison: 'Mota would be a first-term member with no prior office.' },
        ],
        money: 'Raised $1.15M with $185K cash on hand for the 2025–26 cycle as of June 30, 2026 (FEC, candidate H2CA37304).',
        endorsements: CDP_LINE,
        redFlags: [],
        notes: [
          'Journalist Matt Taibbi sued her for libel in April 2025 over remarks at a House hearing; U.S. District Judge Evelyn Padin dismissed the suit, finding she acted within the scope of her job (Techdirt, June 2026) — https://www.techdirt.com/2026/06/11/apparently-one-dismissed-speech-suppressing-slapp-suit-wasnt-enough-for-matt-taibbi/',
        ],
      },
      {
        id: 'samantha-mota',
        name: 'Samantha Mota',
        party: 'D',
        role: 'Community Advocate',
        campaignUrl: 'https://www.motaforcongress.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Describes herself as an activist, advocate and organizer; no elected office, education or job history published.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: UNKNOWN_LAW },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: UNKNOWN_COMMITTEE },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'Campaign site describes community organizing but names no specific roles or organizations.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: UNKNOWN_COALITION },
          ],
        },
        bio: [
          'Mota describes herself as an activist, advocate and organizer and “not a career politician.” Her campaign site gives no detail on her education or jobs, and this is her first listed run for office (GoodParty.org).',
          'Her listed priorities are economic security, community-based projects, immigration reform, universal health care and families.',
        ],
        scorecard: [
          { topic: 'Caucus / ideology', position: '~ Outsider Democrat; no voting record', comparison: 'Kamlager-Dove is a Progressive Caucus member.' },
          { topic: 'Health care', position: '✓ Lists universal health care as a top priority', comparison: 'Kamlager-Dove has no federal health plan found in sources reviewed.' },
          { topic: 'Immigration', position: '✓ Lists immigration reform as a priority; no specifics published', comparison: 'Kamlager-Dove sits on the Judiciary Committee, which handles immigration law.' },
          { topic: 'District clout', position: '? Would be a first-term member with no prior office', comparison: 'Kamlager-Dove is a subcommittee ranking member.' },
        ],
        money: 'Raised $11,409 with $208 cash on hand as of Sept 30, 2026 (FEC data via watch.vote).',
        endorsements: NO_ENDORSE,
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Kamlager-Dove', '●', 'Leftward Progressives, only 28% of whom are confident in the police, fit Kamlager-Dove, a Progressive Caucus member who pushed police use-of-force limits and confronts the Trump administration.'],
      ['LL', 'Kamlager-Dove', '●', 'Loyal Liberals, 81% of whom say the Democratic Party represents them well, value Kamlager-Dove, a state-party-endorsed incumbent with Assembly, Senate and congressional experience.'],
      ['LO', 'Kamlager-Dove / Mota', '=', 'Left-Out Left voters weigh distrust of career politicians against wanting a credible representative: if an outsider who says she is “not a career politician” and puts universal health care first matters most, Mota, though she has published no education, work history or specific plans; if experience in both houses of the Legislature and in Congress matters more, Kamlager-Dove.'],
      ['OO', 'Kamlager-Dove', '◐', 'Order and Opportunity Left voters, 74% of whom call themselves respectful of authority, prefer Kamlager-Dove’s experience, though Kamlager-Dove’s walkout from a hearing is less respectful of authority than they like.'],
      ['TM', 'Kamlager-Dove / Mota', '=', 'Tuned-Out Middle voters want direct help from someone who can deliver: if a promise of economic security and universal health care matters most, Mota, while Kamlager-Dove has no stated health plan; if a two-term incumbent who ranks on a Foreign Affairs subcommittee matters more, Kamlager-Dove, since Mota would be a first-term member with no prior office.'],
      ['PP', 'Kamlager-Dove', '◐', 'Pragmatic and Polite Right voters value Kamlager-Dove’s long legislative record, though Kamlager-Dove’s walkout during a heated hearing is the kind of conflict they dislike, since 86% say officials should avoid heated language.'],
      ['UR', 'Kamlager-Dove / Mota', '=', 'Unconventional Right voters face two Democrats: if a vote against a career politician matters most, Mota, the anti-establishment option, though she is still a progressive Democrat; if an incumbent with state and federal experience matters more, Kamlager-Dove, though she is a Progressive Caucus member.'],
      ['FC', '—', '—', 'Faith First Conservatives see no Republican and no social conservative in this race, and many will skip it.', 'Experience-first Faith First Conservatives could back Kamlager-Dove, the finalist with years in office; they accept a Progressive Caucus member.'],
      ['NA', 'Kamlager-Dove / Mota', '=', 'No Apologies Right voters dislike both Democrats: if a protest vote against Kamlager-Dove, who clashed with Secretary of State Rubio and walked out of a hearing, matters most, Mota; if not backing a candidate who lists universal health care and immigration reform as priorities matters more, Kamlager-Dove, the experienced incumbent.'],
    ]),
    counterArguments: [
      'OO (Kamlager-Dove ◐): But consider Mota’s promise of economic security and universal health care, because this group wants government help with costs, though Mota has published little and has never held office.',
    ],
  },

  // ───────────────────────── CA-38 ─────────────────────────
  {
    id: 'us-rep-ca38',
    categoryId: 'federal',
    title: 'U.S. Representative, 38th District',
    tldrLabel: 'CA-38',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'Proposition 50 redrew CA-38 as a southeast Los Angeles County seat, and Rep. Linda Sánchez moved to the new CA-41, leaving it open. Supervisor Hilda Solis, termed out of the county board, is trying to return to the House she left in 2009 to become Labor Secretary (The Eastsider).',
    ],
    introParagraphs: [
      'Solis took 47.6% in the June 2 primary; Republican Pedro Antonio Casas was second with 35.8%, ahead of Democrats Monica M. Sanchez (13.3%) and Erik Lutz (3.2%) (certified Statement of Vote). Democrats combined for about 64%, so Casas needs nearly every Republican plus many independents and Democrats.',
    ],
    readingLinks: [
      {
        label: 'The Eastsider — Solis leans on Eastside record as she eyes Congress (Sept 2025)',
        url: 'https://www.theeastsiderla.com/news/government_and_politics/hilda-solis-leans-on-eastside-track-record-as-she-eyes-a-run-for-congress/article_0ad21a4c-01f3-417e-9acf-2b3345c3c335.html',
        summary: 'Why Solis is running and the housing, transit and hospital record she is campaigning on.',
      },
      { label: 'Certified Statement of Vote — U.S. Representative (June 2, 2026)', url: SOV_US_REP },
    ],
    candidates: [
      {
        id: 'hilda-solis',
        photoSlug: 'hilda-solis',
        name: 'Hilda Solis',
        party: 'D',
        role: 'County Supervisor',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Former four-term congresswoman and U.S. Labor Secretary, now finishing 12 years as a Los Angeles County supervisor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House 2001–2009; State Senate 1994–2000; State Assembly 1992–1994 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'U.S. Secretary of Labor 2009–2013; LA County supervisor since December 2014, voting on the county budget and serving as board chair (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Raised in La Puente; supervisor for about 2 million residents of eastern LA County since 2014 (The Eastsider).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Led a successful ballot drive to raise the state minimum wage after a veto; her 1999 environmental-justice law was the first of its kind in the nation (Wikipedia).' },
          ],
        },
        bio: [
          'Solis served in the Assembly and State Senate in the 1990s, then in Congress from 2001 to 2009 before President Obama named her Labor Secretary. She has been an LA County supervisor since 2014.',
          'She says she has “unfinished business” on housing and affordability and cites helping create thousands of housing units, Metro transit projects and plans to transform LA General Hospital (The Eastsider).',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Says affordability is her focus; cites thousands of housing units created, including for formerly homeless people', comparison: 'Casas cites rent and mortgage costs and wants lower taxes and regulation.' },
          { topic: 'Workers / wages', position: '✓✓ Former Labor Secretary; led a 1990s minimum-wage ballot drive', comparison: 'Casas emphasizes cutting taxes and regulation on small businesses.' },
          { topic: 'Climate', position: '✓ Wrote California’s first environmental-justice law (1999)', comparison: 'Casas has published no environmental position.' },
          { topic: 'Immigration', position: '? No 2026 position found in sources reviewed', comparison: 'Casas wants a secure southern border and to stop fentanyl trafficking.' },
          { topic: 'Trump / House majority', position: '✓ Would add a Democratic vote', comparison: 'Casas would add a Republican vote.' },
        ],
        money: 'Raised $1.05M with $155K cash on hand as of June 30, 2026 (FEC, candidate H6CA38139).',
        endorsements: `${CDP_LINE}; La Opinión editorial board (primary, May 6, 2026; opinion).`,
        redFlags: [],
        notes: [
          'In 2014 reports said federal authorities were examining whether she solicited subordinates for Obama’s 2012 campaign; she said she did nothing wrong, and no finding has been reported (Wikipedia).',
        ],
      },
      {
        id: 'pedro-antonio-casas',
        name: 'Pedro Antonio Casas',
        party: 'R',
        role: 'No Ballot Designation',
        campaignUrl: 'https://casasforcongress.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Retired Army colonel and psychologist with command experience; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: UNKNOWN_LAW },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'More than 29 years in the Army, including service as a wartime commander (campaign site); no legislative budget work found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Says he is a native of the district and calls Baldwin Park his hometown (campaign site).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: UNKNOWN_COALITION },
          ],
        },
        bio: [
          'A retired U.S. Army colonel with more than 29 years of service and three wartime deployments, Casas is a clinical, forensic and aero-medical psychologist with a Ph.D. He calls Baldwin Park his hometown.',
          'He runs on border security and fentanyl, tougher criminal accountability, tax and regulation cuts for small business, and limiting sports to competition between athletes of the same biological sex (campaign site).',
        ],
        scorecard: [
          { topic: 'Immigration', position: '✓✓ Secure the southern border and prioritize national security in immigration reform', comparison: 'Solis has no 2026 immigration position found in sources reviewed.' },
          { topic: 'Taxes / economy', position: '✓ Cut taxes, reduce regulation on small businesses, rely on the free market', comparison: 'Solis is a former Labor Secretary focused on wages.' },
          { topic: 'Public safety', position: '✓ Hold offenders accountable and advocate for crime victims', comparison: 'Solis has no published public-safety platform for this race.' },
          { topic: 'Housing', position: '~ Cites rent, mortgage and interest-rate costs; no specific plan', comparison: 'Solis cites county housing production.' },
          { topic: 'Trump / House majority', position: '? No published views on Trump; would add a Republican vote', comparison: 'Solis would add a Democratic vote.' },
        ],
        money: 'No FEC totals matched to his name as of Oct 9, 2026 (watch.vote); his site lists FEC committee ID C00863365.',
        endorsements: NO_ENDORSE,
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Solis', '●', 'Leftward Progressives fit Solis, a former Labor Secretary who led a minimum-wage ballot drive and wrote the state’s first environmental-justice law.'],
      ['LL', 'Solis', '●', 'Loyal Liberals value Solis, a former congresswoman, cabinet secretary and county supervisor endorsed by the state party.'],
      ['LO', 'Solis', '◐', 'Left-Out Left voters like Solis’s pro-worker and housing record, though Solis has held office since the 1990s and is the definition of an insider.'],
      ['OO', 'Solis', '●', 'Order and Opportunity Left voters fit Solis’s focus on wages, affordable housing and the county hospital.'],
      ['TM', 'Solis', '◐', 'Tuned-Out Middle voters get concrete help from Solis’s record on wages and housing units.'],
      ['PP', 'Casas', '◐', 'Pragmatic and Polite Right voters lean to Casas, a retired Army colonel and psychologist with a measured, mainstream platform on border security (about 71% of them favor a military presence at the border) and small-business costs.', 'Experience-first Pragmatic and Polite Right voters could back Solis, a former congresswoman, Labor Secretary and supervisor; they give up a Republican House vote on taxes and the border.'],
      ['UR', 'Casas', '●', 'Unconventional Right voters back Casas on border security, fentanyl, tax cuts and limiting sports to athletes of the same biological sex, with about 85% favoring a military presence at the border and about 87% saying gender is set at birth.'],
      ['FC', 'Casas', '●', 'Faith First Conservatives, 97% of whom say gender is determined by sex at birth, back Casas, a retired colonel focused on crime victims, the border and sex-based sports teams.'],
      ['NA', 'Casas', '●', 'No Apologies Right voters, about 80% of whom say regulation does more harm than good, back Casas on border enforcement, deregulation and free-market economics.'],
    ]),
    counterArguments: [
      'PP (Casas ◐): But consider that Solis has served in Congress, the cabinet and county government, because experience and competence are what they value most.',
      'LO (Solis ◐): But consider that Solis has been in office for three decades, because they distrust long-time insiders.',
    ],
  },

  // ───────────────────────── CA-41 ─────────────────────────
  {
    id: 'us-rep-ca41',
    categoryId: 'federal',
    title: 'U.S. Representative, 41st District',
    tldrLabel: 'CA-41',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent (moved from CA-38)',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'Proposition 50 turned CA-41, held by Republican Ken Calvert, into an eastern Los Angeles County seat that Inside Elections called D+16 (Ballotpedia News). Rep. Linda Sánchez, who represented the old CA-38, is running here; Calvert ran in CA-40.',
    ],
    introParagraphs: [
      'Sánchez took 37.5% in the June 2 primary and Republican Mitch Clemmons 35.8%; Democrats Hector De La Torre (13.9%) and Shonique Williams (12.8%) split the rest (certified Statement of Vote). Democrats combined for about 64%, so the close top-two margin overstates Clemmons’s chances unless he wins many Democratic voters.',
    ],
    readingLinks: [
      {
        label: 'Ballotpedia News — Sánchez and Clemmons compete for the redrawn 41st (July 15, 2026)',
        url: 'https://news.ballotpedia.org/2026/07/15/u-s-rep-linda-sanchez-d-ca-38-and-mitch-clemmons-r-compete-for-californias-redrawn-41st-congressional-district/',
        summary: 'District lean under the new map and both finalists’ backgrounds.',
      },
      { label: 'Certified Statement of Vote — U.S. Representative (June 2, 2026)', url: SOV_US_REP },
    ],
    candidates: [
      {
        id: 'linda-sanchez',
        photoSlug: 'linda-sanchez',
        name: 'Linda Sánchez',
        party: 'D',
        role: 'Congresswoman/Mom',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2003, now on Ways and Means as ranking member of its Trade Subcommittee; former Democratic Caucus vice chair.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since January 2003 (39th, then 38th District) (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Ways and Means, ranking member of the Trade Subcommittee and member of the Health Subcommittee; ranking member of House Ethics through 2017 (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Represented neighboring southeast LA County communities in the old CA-38 since 2013; the redrawn CA-41 is new territory for her in part.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Led the 2005 push that got President Bush to reinstate Davis-Bacon wage rules after Hurricane Katrina; Democratic Caucus vice chair 2017–2019 (Wikipedia).' },
          ],
        },
        bio: [
          'A labor lawyer and former executive secretary-treasurer of the Orange County AFL-CIO, Sánchez was elected to Congress in 2002. She chaired the Congressional Hispanic Caucus (2015–2017) and was vice chair of the House Democratic Caucus (2017–2019).',
          'She sits on Ways and Means and is campaigning on lowering costs, saying congressional Republicans have done “nothing to address rising costs” (Ballotpedia News).',
        ],
        recordVsChange:
          'Sánchez brings more than 20 years of seniority and a Ways and Means seat that shapes taxes, trade and Medicare; Clemmons offers a small-business owner’s perspective but no record in office, so a change would give up that committee clout.',
        scorecard: [
          { topic: 'Cost of living', position: '✓ Campaign centers on lowering prices for working families', comparison: 'Clemmons emphasizes everyday concerns and responsible leadership without specific proposals.' },
          { topic: 'Workers', position: '✓✓ Former union official; pushed to restore Davis-Bacon wage rules after Katrina', comparison: 'Clemmons has run his own plumbing business since 2002.' },
          { topic: 'Health care', position: '✓ Opposed overturning Roe v. Wade; sits on the Ways and Means Health Subcommittee', comparison: 'Clemmons has published no health-care position.' },
          { topic: 'Guns', position: '✓ Supports universal background checks and closing the gun-show loophole', comparison: 'Clemmons has published no position.' },
          { topic: 'Trump / House majority', position: '✓ Would add a Democratic vote', comparison: 'Clemmons would add a Republican vote.' },
        ],
        money: 'Raised $1.60M with $416K cash on hand for the 2025–26 cycle as of June 30, 2026 (FEC, candidate H2CA39078).',
        endorsements: CDP_LINE,
        redFlags: [],
      },
      {
        id: 'mitch-clemmons',
        name: 'Mitch Clemmons',
        party: 'R',
        role: 'Plumbing Contractor',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Small-business owner and 2022 State Senate nominee; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: UNKNOWN_LAW },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: UNKNOWN_COMMITTEE },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'Ran for State Senate District 30 in 2022, losing 61%–39% (Ballotpedia News); no constituent-service role found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: UNKNOWN_COALITION },
          ],
        },
        bio: [
          'Clemmons studied aerospace engineering technology at Cal Poly Pomona, worked as a warehouse manager for Lantis Eyewear, and has run his own plumbing company since 2002. He lost the 2022 race for State Senate District 30, 61% to 39%.',
          'He says his campaign is about everyday concerns, responsible leadership and clear communication (Ballotpedia News).',
        ],
        scorecard: [
          { topic: 'Cost of living', position: '~ Emphasizes everyday concerns; no specific plan published', comparison: 'Sánchez centers her campaign on lowering prices.' },
          { topic: 'Small business', position: '✓ Has owned and run a plumbing company since 2002', comparison: 'Sánchez is a former labor lawyer and union official.' },
          { topic: 'Health care', position: '? No public position found', comparison: 'Sánchez sits on the Ways and Means Health Subcommittee.' },
          { topic: 'Trump / House majority', position: '? No published views on Trump; would add a Republican vote', comparison: 'Sánchez would add a Democratic vote.' },
        ],
        money: 'No FEC totals matched to his name as of Oct 9, 2026 (watch.vote).',
        endorsements: NO_ENDORSE,
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Sánchez', '●', 'Leftward Progressives, about 74% of whom call gun violence a very big problem, fit Sánchez, a labor lawyer and former union official who backs universal background checks.'],
      ['LL', 'Sánchez', '●', 'Loyal Liberals value Sánchez, a senior Ways and Means member and former Democratic Caucus vice chair.'],
      ['LO', 'Sánchez', '◐', 'Left-Out Left voters like Sánchez’s focus on lowering prices for working families, though Sánchez has been in Congress since 2003.'],
      ['OO', 'Sánchez', '●', 'Order and Opportunity Left voters, about 71% of whom call gun violence a very big problem, fit Sánchez’s worker-focused, cost-of-living platform and support for background checks.'],
      ['TM', 'Sánchez', '◐', 'Tuned-Out Middle voters prefer Sánchez’s direct focus on lowering prices to Clemmons, who has no specific plan.'],
      ['PP', 'Clemmons', '○', 'Pragmatic and Polite Right voters like Clemmons’s pitch for responsible leadership and clear communication from a longtime small-business owner, though Clemmons has never held office.', 'Experience-first Pragmatic and Polite Right voters could back Sánchez, a senior Ways and Means member; they give up a Republican House vote.'],
      ['UR', 'Clemmons', '◐', 'Unconventional Right voters lean to Clemmons, a plumbing contractor, as a small-government outsider.', 'Experience-first Unconventional Right voters could back Sánchez, who has more than two decades in Congress; they give up a Republican House vote.'],
      ['FC', 'Clemmons', '◐', 'Faith First Conservatives, 83% of whom say abortion should be illegal in most cases, back Clemmons over Sánchez, who opposed overturning Roe v. Wade, though Clemmons has published no social-issue positions.', 'Experience-first Faith First Conservatives could back Sánchez, a senior member of Congress; they give up a Republican vote on abortion and spending.'],
      ['NA', 'Clemmons', '◐', 'No Apologies Right voters, 53% of whom like seeing opponents humiliated, back the Republican, though Clemmons’s mild, everyday-concerns campaign is not the fight they want.', 'Experience-first No Apologies Right voters could back Sánchez, the only finalist with legislative experience; they give up a Republican House vote.'],
    ]),
    counterArguments: [
      'PP (Clemmons ○): But consider that Clemmons has published no specific plans, because they prize demonstrated competence and Sánchez has decades of it.',
      'LO (Sánchez ◐): But consider that Sánchez has been in Congress for over 20 years, because they want outsiders when one is credible.',
    ],
  },

  // ───────────────────────── CA-43 ─────────────────────────
  {
    id: 'us-rep-ca43',
    categoryId: 'federal',
    title: 'U.S. Representative, 43rd District',
    tldrLabel: 'CA-43',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'Waters, first elected in 1990, is the top Democrat on the Financial Services Committee, which oversees banks, housing finance and financial regulation; she chaired it from 2019 to 2023 when Democrats held the House. The race is about keeping that seniority versus a first-time Republican challenger.',
    ],
    introParagraphs: [
      'Rep. Maxine Waters took 63.8% in the June 2 primary. Republican Cristian Morales was second with 16.9%, just ahead of Democrat Myla Rahman (15.0%) (certified Statement of Vote). Morales would need far more crossover support than recent Republican challengers have won.',
    ],
    readingLinks: [{ label: 'Certified Statement of Vote — U.S. Representative (June 2, 2026)', url: SOV_US_REP }],
    candidates: [
      {
        id: 'maxine-waters',
        photoSlug: 'maxine-waters',
        name: 'Maxine Waters',
        party: 'D',
        role: 'United States Congresswoman',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 1991 after 14 years in the State Assembly; former chair and current ranking member of Financial Services.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since January 1991; State Assembly 1976–1990 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chaired House Financial Services 2019–2023; ranking member since 2013 except while chair (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented South Los Angeles–area communities since 1991 (district renumbered 29th, 35th, 43rd).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Chaired the Congressional Black Caucus (1997–1999) and Financial Services; specific enacted bills were not reviewed for this guide.' },
          ],
        },
        bio: [
          'Waters began as a Head Start assistant teacher in Watts, served seven terms in the Assembly from 1976, and has been in Congress since 1991. She chaired the Congressional Black Caucus and, from 2019 to 2023, the Financial Services Committee.',
          'A prominent Trump critic, she drew national attention in 2018 for urging supporters to confront administration officials in public (Fox News).',
        ],
        recordVsChange:
          'Waters is the senior Democrat on a major committee and chaired it when Democrats last held the House; Morales offers business experience but no record in office. Voters weighing a change are trading that seniority against concerns about her campaign’s payments to family.',
        scorecard: [
          { topic: 'Financial regulation', position: '✓✓ Top Democrat on Financial Services; chaired it 2019–2023', comparison: 'Morales favors less government and lower taxes.' },
          { topic: 'Trump / House majority', position: '✓✓ Longtime Trump critic; would add a Democratic vote', comparison: 'Morales is endorsed by the California Republican Party.' },
          { topic: 'Immigration', position: '? No 2026 position found in sources reviewed', comparison: 'Morales says government should “secure our borders.”' },
          { topic: 'District clout', position: '✓✓ 35 years in Congress; committee ranking member', comparison: 'Morales would be a first-term member.' },
        ],
        money: 'Raised $864K with $270K cash on hand for the 2025–26 cycle as of June 30, 2026 (FEC, candidate H4CA23011).',
        endorsements: CDP_LINE,
        redFlags: [
          {
            severity: 'notable',
            status: 'documented',
            text: 'FEC filings show her campaign paid her daughter, Karen Waters, about $240,000 in the 2019–20 cycle, mostly for managing the campaign’s slate-mailer operation, in which other candidates pay to appear on its endorsement mailers. No recent response was reported; in 2004 Waters said of relatives’ business dealings, “They do their business and I do mine.”',
            whyItMatters: 'Routing campaign money to a family member raises self-dealing questions about how a House member uses donor funds.',
            sources: [{ label: 'Fox News (Dec 4, 2020), citing FEC records', url: 'https://www.foxnews.com/politics/maxine-waters-campaign-paid-her-daughter-240g-over-2019-20-election-cycle-fec-records-show.amp' }],
          },
        ],
        notes: [
          'In 2010 the House Ethics Committee charged her over efforts to help OneUnited Bank, where her husband held stock; the committee cleared her in September 2012 (Wikipedia).',
        ],
      },
      {
        id: 'cristian-morales',
        name: 'Cristian Morales',
        party: 'R',
        role: 'Manufacturing Executive',
        campaignUrl: 'https://forallvoices.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Manufacturing operations executive with labor-relations training; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: UNKNOWN_LAW },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'Vice president of operations at Industrial Electronic Engineers since 2022 (iVoterGuide); no public budget work found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No constituent-service role found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: UNKNOWN_COALITION },
          ],
        },
        bio: [
          'Morales is vice president of operations at Industrial Electronic Engineers and holds a management degree from Purdue and a master’s in industrial and labor relations from Cornell. iVoterGuide lists him as a 2021–22 candidate for governor.',
          'His campaign calls for secure borders, safe communities, smaller government and stronger Republican outreach to Latino voters.',
        ],
        scorecard: [
          { topic: 'Taxes / economy', position: '✓ Cites California’s high income and sales taxes; says “we don’t need a bigger government”', comparison: 'Waters is a senior Democrat on financial regulation.' },
          { topic: 'Immigration', position: '✓ Says government should “secure our borders”; no specifics', comparison: 'Waters has no 2026 immigration position found in sources reviewed.' },
          { topic: 'Housing', position: '~ Cites home-affordability statistics; no plan published', comparison: 'Waters oversees housing finance as Financial Services ranking member.' },
          { topic: 'Trump / House majority', position: '? No published views on Trump; would add a Republican vote', comparison: 'Waters is a longtime Trump critic.' },
        ],
        money: 'No FEC totals matched to his name as of Oct 9, 2026 (watch.vote).',
        endorsements:
          'California Republican Party; California Republican Assembly; Reform California; Los Angeles Hispanic Republican Club (as listed by iVoterGuide, a conservative voter guide, Oct 2026).',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Waters', '●', 'Leftward Progressives, about 95% of whom dislike the way Trump conducts himself, fit Waters, a longtime Trump critic and the top Democrat overseeing banks and Wall Street.'],
      ['LL', 'Waters', '●', 'Loyal Liberals value Waters’s seniority as ranking member of Financial Services.'],
      ['LO', 'Waters', '○', 'Left-Out Left voters like Waters’s fights with banks but distrust officeholders who enrich family (75% say few or no officials ran to serve the public), and Waters’s campaign paid her daughter about $240,000 in one cycle.'],
      ['OO', 'Waters', '◐', 'Order and Opportunity Left voters prefer Waters’s Democratic vote and seniority, though Morales’s safe-communities message also speaks to them, since about 52% call violent crime a very big problem.'],
      ['TM', 'Morales', '○', 'Tuned-Out Middle voters feel California’s high income and sales taxes, which Morales highlights, and are wary of 35 years of the same incumbent.', 'Experience-first Tuned-Out Middle voters could back Waters, ranking member of Financial Services; they give up Morales’s smaller-government message and accept payments from the campaign to her daughter.'],
      ['PP', 'Morales', '◐', 'Pragmatic and Polite Right voters, 86% of whom say officials should avoid heated language, dislike heated rhetoric like Waters’s 2018 call to confront officials in public, and lean to Morales, a manufacturing executive with labor-relations training.', 'Experience-first Pragmatic and Polite Right voters could back Waters, with 35 years in Congress and a committee ranking post; they give up a measured Republican.'],
      ['UR', 'Morales', '●', 'Unconventional Right voters back Morales on secure borders, safe communities and smaller government.'],
      ['FC', 'Morales', '●', 'Faith First Conservatives back Morales, endorsed by the California Republican Assembly, on smaller government and public safety.'],
      ['NA', 'Morales', '●', 'No Apologies Right voters, 63% of whom call Trump the best president of the last 40 years, back Morales against Waters, one of Trump’s sharpest critics.'],
    ]),
    counterArguments: [
      'PP (Morales ◐): But consider that Waters is the top Democrat on Financial Services, because that seniority brings clout that a first-time member would not have.',
      'LO (Waters ○): But consider that the campaign’s payments to Waters’s daughter were mostly for running a slate-mailer operation, because the arrangement is legal and documented.',
    ],
  },

  // ───────────────────────── CA-44 ─────────────────────────
  {
    id: 'us-rep-ca44',
    categoryId: 'federal',
    title: 'U.S. Representative, 44th District',
    tldrLabel: 'CA-44',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'Barragán, in Congress since 2017, sits on Energy and Commerce, which writes health, energy and telecommunications law. Republican Genevieve Angel, a nurse executive making her first run, says health care should cost less and be easier to reach.',
    ],
    introParagraphs: [
      'Rep. Nanette Barragán won 77.0% in the June 2 primary to Angel’s 23.0%, with only a write-in otherwise (certified Statement of Vote). Angel had raised about $14,000 to Barragán’s $786,000 by June 30 (FEC), a wide gap for a challenger to close.',
    ],
    readingLinks: [{ label: 'Certified Statement of Vote — U.S. Representative (June 2, 2026)', url: SOV_US_REP }],
    candidates: [
      {
        id: 'nanette-barragan',
        photoSlug: 'nanette-barragan',
        name: 'Nanette Diaz Barragán',
        party: 'D',
        role: 'U.S. Representative, 44th District',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2017 on Energy and Commerce; former Congressional Hispanic Caucus chair and Hermosa Beach councilmember.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since January 2017; Hermosa Beach City Council 2013–2015 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Energy and Commerce, with Health, Environment, and Communications and Technology subcommittees (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Born in Harbor City; has represented CA-44 since 2017, reelected with 68%–72% from 2018 to 2024.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Chaired the Congressional Hispanic Caucus 2023–2025; specific enacted bills were not reviewed for this guide.' },
          ],
        },
        bio: [
          'A USC-trained lawyer who worked at Latham & Watkins, Barragán became Hermosa Beach’s first Latina councilmember in 2013 and won the open CA-44 seat in 2016.',
          'She chaired the Congressional Hispanic Caucus from 2023 to 2025, a tenure that began with staff departures and the firing of its executive director, and supports banning hydrofluoric acid at oil refineries (Wikipedia).',
        ],
        recordVsChange:
          'Barragán holds a seat on one of the House’s most powerful committees and has a decade of seniority; Angel brings health-care management experience but no record in office, so a change would trade that committee seat for a first-term member.',
        scorecard: [
          { topic: 'Climate / environment', position: '✓ Supports banning hydrofluoric acid at oil refineries', comparison: 'Angel has published no environmental position.' },
          { topic: 'Health care', position: '✓ Sits on the Energy and Commerce Health Subcommittee; called the Dobbs decision “a sad day”', comparison: 'Angel wants lower out-of-pocket costs and wider access.' },
          { topic: 'Immigration', position: '✓ Former Congressional Hispanic Caucus chair; toured border facilities in 2019', comparison: 'Angel calls for secure borders and fair legal pathways.' },
          { topic: 'Trump / House majority', position: '✓ Would add a Democratic vote', comparison: 'Angel would add a Republican vote.' },
        ],
        money: 'Raised $786K with $1.09M cash on hand for the 2025–26 cycle as of June 30, 2026 (FEC, candidate H6CA44103).',
        endorsements: CDP_LINE,
        redFlags: [],
      },
      {
        id: 'genevieve-angel',
        name: 'Genevieve Angel',
        party: 'R',
        role: 'Family Nurse Practitioner',
        campaignUrl: 'https://www.angelforcongress.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Nurse and health-care executive who has run hospital nursing departments; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: UNKNOWN_LAW },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'Chief nursing officer at UHS (2023–2024) and Olympia Medical Center (2015–2016); CEO of Huntington Park Community Care (2008–2013) (BallotReady); no public budget work found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No constituent-service role found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: UNKNOWN_COALITION },
          ],
        },
        bio: [
          'Angel earned a nursing degree from the University of Santo Tomas (1992) and an MBA (2007), and has held hospital leadership roles including chief nursing officer at UHS and Olympia Medical Center and CEO of Huntington Park Community Care (BallotReady).',
          'She runs on lowering living costs, cheaper and more accessible health care, public safety, and secure borders with legal pathways.',
        ],
        scorecard: [
          { topic: 'Health care', position: '✓ Lower out-of-pocket costs, expand access, make the system more efficient', comparison: 'Barragán sits on the Health Subcommittee.' },
          { topic: 'Immigration', position: '✓ Secure borders plus “fair legal pathways”', comparison: 'Barragán is a former Hispanic Caucus chair.' },
          { topic: 'Public safety', position: '✓ Accountability, effective enforcement and addressing crime trends', comparison: 'Barragán has no distinct public-safety platform found.' },
          { topic: 'Trump / House majority', position: '? No published views on Trump; would add a Republican vote', comparison: 'Barragán would add a Democratic vote.' },
        ],
        money: 'Raised $13,898 with $8,746 cash on hand as of June 30, 2026 (FEC data via watch.vote).',
        endorsements: NO_ENDORSE,
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Barragán', '●', 'Leftward Progressives fit Barragán, who wants to ban hydrofluoric acid at oil refineries near her district’s homes.'],
      ['LL', 'Barragán', '●', 'Loyal Liberals value Barragán, an Energy and Commerce member and former Hispanic Caucus chair.'],
      ['LO', 'Barragán', '◐', 'Left-Out Left voters like Barragán’s refinery-safety work for working-class neighborhoods, though Barragán is a longtime insider.'],
      ['OO', 'Barragán', '◐', 'Order and Opportunity Left voters prefer Barragán’s health-care and environmental work, though Angel’s mix of border security and legal pathways matches their own view, with 59% favoring a military presence at the border.'],
      ['TM', 'Barragán / Angel', '=', 'Tuned-Out Middle voters want cheaper, easier health care and can look for it two ways: if someone who can shape health costs now from the Energy and Commerce Health Subcommittee matters most, Barragán; if a nurse and hospital executive who makes health-care costs her main pitch matters more, Angel, who would start in the minority or a narrow majority.'],
      ['PP', 'Angel', '◐', 'Pragmatic and Polite Right voters like Angel, a nurse executive who pairs border security with fair legal pathways, a measured stance most of them share, since two-thirds back a path to legal status.', 'Experience-first Pragmatic and Polite Right voters could back Barragán, a nine-year member on Energy and Commerce; they give up a moderate Republican House vote.'],
      ['UR', 'Angel', '◐', 'Unconventional Right voters back Angel on border security and public safety, though Angel’s support for legal pathways is softer than many of them want, with 56% opposing legal status.', 'Experience-first Unconventional Right voters could back Barragán, the only finalist with legislative experience; they give up a Republican vote on the border.'],
      ['FC', 'Angel', '◐', 'Faith First Conservatives back Angel over Barragán, who called the Dobbs ruling a sad day, though Angel has published no social-issue views.', 'Experience-first Faith First Conservatives could back Barragán, a nine-year incumbent; they give up a Republican vote on abortion.'],
      ['NA', 'Angel', '◐', 'No Apologies Right voters, 81% of whom back a national deportation effort, back the Republican, though Angel’s talk of legal pathways for immigrants is softer than they want.', 'Experience-first No Apologies Right voters could back Barragán, the experienced incumbent; they give up a Republican House vote.'],
    ]),
    counterArguments: [
      'LL (Barragán ●): But consider that Barragán’s Hispanic Caucus tenure began with staff departures and the firing of its executive director, because they value competent management.',
    ],
  },

  // ───────────────────────── SD-30 ─────────────────────────
  {
    id: 'senate-sd30',
    categoryId: 'state-leg',
    title: 'State Senate, District 30',
    tldrLabel: 'SD-30',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: SENATE_CRITERIA('SD-30 covers parts of Los Angeles and Orange counties, with a district office in Norwalk.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      SENATE_STAKES,
      'SD-30 covers parts of Los Angeles and Orange counties. Incumbent Bob Archuleta chairs the Senate Military and Veterans Affairs Committee; Republican Araceli Martinez, a small-business owner and former journalist, is running on cutting costs, red tape and crime.',
    ],
    introParagraphs: [
      'Archuleta took 65.1% in the June 2 primary to Martinez’s 34.9% in a two-candidate race (certified Statement of Vote). In 2022 he won the seat 61% to 39% over Republican Mitch Clemmons, now running for Congress in CA-41 (Ballotpedia News).',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Senate District 30', url: 'https://theballotbrief.com/state/california/los-angeles-county/california-senate-district-30', summary: 'Neutral roster page with primary results and each finalist’s stated priorities.' },
      { label: 'Certified Statement of Vote — State Senator (June 2, 2026)', url: SOV_SENATE },
    ],
    candidates: [
      {
        id: 'bob-archuleta',
        photoSlug: 'bob-archuleta',
        name: 'Bob J. Archuleta',
        party: 'D',
        role: 'State Senator',
        campaignUrl: 'https://sd30.senate.ca.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'State senator since December 2018 who chairs Military and Veterans Affairs, after serving as Pico Rivera mayor.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'State senator since 2018; SB 694 (veterans’ benefits claim fraud) signed Feb 10, 2026 and SB 296 (disabled-veteran property-tax exemption) signed in September 2026 (Governor’s office).' },
            { criterionId: 'budget-oversight', assessment: 'partial', evidence: 'Chairs Military and Veterans Affairs; member of Energy, Utilities and Communications, Transportation, Governmental Organization, and Business and Professions; no budget-committee seat listed (official biography).' },
            { criterionId: 'public-mgmt', assessment: 'met', evidence: 'Former Pico Rivera mayor; served on the LA County Military and Veterans Affairs Commission and Library Commission (official biography).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented the area since 2018 (renumbered from the 32nd to the 30th District in 2022).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'SB 694 was co-sponsored by Attorney General Rob Bonta and co-authored with Sen. Sabrina Cervantes and Assemblymember Pilar Schiavo.' },
          ],
        },
        bio: [
          'An Army veteran and former 82nd Airborne paratrooper who also served with the Montebello Police Department, Archuleta was Pico Rivera mayor before winning the Senate seat in 2018. President Obama named him to West Point’s Board of Visitors (2012) and Gov. Newsom to the Governor’s Military Council (2019).',
          'His recent laws target unaccredited agents who charge veterans for benefits claims and expand a disabled-veteran property-tax exemption.',
        ],
        recordVsChange:
          'Archuleta chairs the committee that handles veterans’ law and has recent bills signed; Martinez offers a cost-cutting, small-business message but no legislative record, so a change would give up that chairmanship.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ SB 296 expands property-tax relief for disabled-veteran homeowners', comparison: 'Martinez pledges to cut red tape to lower housing and living costs.' },
          { topic: 'Public safety', position: '✓ Former Montebello police officer; SB 694 targets fraud against veterans', comparison: 'Martinez backs law enforcement and accountability for repeat offenders.' },
          { topic: 'Taxes', position: '~ Targeted relief: veteran property-tax exemption; a bill to exempt military retirement pay was pending in March 2026', comparison: 'Martinez blames taxes and regulation for high costs.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat in the Latino and Armenian legislative caucuses; endorsed by the state party', comparison: 'Martinez is a Republican stressing parental rights.' },
        ],
        money: CAL_ACCESS,
        endorsements: CDP_LINE,
        redFlags: [],
        notes: [
          'In 2024 he introduced SB 1081, which would have required men to register for the Selective Service before getting or renewing a driver’s license (Wikipedia).',
        ],
      },
      {
        id: 'araceli-martinez',
        name: 'Araceli Martinez',
        party: 'R',
        role: 'Small Business Owner',
        campaignUrl: 'https://araceliforca.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Small-business owner and former journalist and political analyst; no elected or legislative experience.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'partial', evidence: 'Has worked as a political analyst, per her campaign site; no legislative drafting found.' },
            { criterionId: 'budget-oversight', assessment: 'unknown', evidence: UNKNOWN_COMMITTEE },
            { criterionId: 'public-mgmt', assessment: 'unknown', evidence: 'Owns a business she started (not named on her site); no public-agency role found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No constituent-service role found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: UNKNOWN_COALITION },
          ],
        },
        bio: [
          'The daughter of immigrants from Mexico and Honduras, Martinez is a UC Riverside graduate who has worked as a journalist and political analyst and owns a business she started.',
          'She pledges to cut red tape and costs, help small businesses grow, defend parental rights and support law enforcement (campaign site).',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Blames taxes, regulation and policy for high costs; pledges to “cut the red tape”', comparison: 'Archuleta passed targeted property-tax relief for disabled veterans.' },
          { topic: 'Public safety', position: '✓ Support law enforcement; hold repeat offenders accountable', comparison: 'Archuleta is a former police officer.' },
          { topic: 'Education', position: '✓ Defend parental rights', comparison: 'Archuleta has no distinct education platform found.' },
          { topic: 'Caucus / ideology', position: '✓ Republican running on smaller government', comparison: 'Archuleta is a Democratic committee chair.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
        redFlags: [],
        notes: [
          'The Ballot Brief summarizes an earlier DecodeTheVote profile listing public-education funding, affordable health care and renewable energy as her priorities, which differ in emphasis from her campaign site.',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Archuleta', '◐', 'Leftward Progressives back Archuleta as the Democratic vote, though a former police officer focused on the military is not their priority.'],
      ['LL', 'Archuleta', '●', 'Loyal Liberals value Archuleta, a state-party-endorsed senator who chairs Military and Veterans Affairs.'],
      ['LO', 'Archuleta', '◐', 'Left-Out Left voters prefer Archuleta’s laws protecting veterans from fraud, though Archuleta is a career officeholder.'],
      ['OO', 'Archuleta', '●', 'Order and Opportunity Left voters, about 69% of whom trust police, fit Archuleta, an Army veteran and former police officer who cut property taxes for disabled veterans.'],
      ['TM', 'Archuleta', '◐', 'Tuned-Out Middle voters get targeted tax relief from Archuleta’s veteran property-tax law, while Martinez offers only general promises.'],
      ['PP', 'Archuleta', '◐', 'Pragmatic and Polite Right voters, about 84% of whom are confident in the police, value Archuleta’s steady, veteran-focused record and police background over a first-time candidate, even across party lines.'],
      ['UR', 'Martinez', '◐', 'Unconventional Right voters like Martinez’s smaller-government, cut-red-tape platform and dislike Archuleta’s bill tying driver’s licenses to draft registration.', 'Experience-first Unconventional Right voters could back Archuleta, a senator since 2018 and Army veteran; they give up a smaller-government Republican.'],
      ['FC', 'Martinez', '●', 'Faith First Conservatives, about 85% of whom have confidence in the police, back Martinez on parental rights, law enforcement and smaller government.'],
      ['NA', 'Martinez', '●', 'No Apologies Right voters back Martinez to cut regulation and hold repeat offenders accountable.'],
    ]),
    counterArguments: [
      'PP (Archuleta ◐): But consider that Martinez runs on cutting red tape and costs, because a Republican vote may better fit their fiscal caution.',
      'FC (Martinez ●): But consider that an earlier profile listed public-education funding and renewable energy as Martinez’s priorities, because her positions have shifted in emphasis.',
    ],
  },

  // ───────────────────────── AD-46 ─────────────────────────
  {
    id: 'assembly-ad46',
    categoryId: 'state-leg',
    title: 'State Assembly, District 46',
    tldrLabel: 'AD-46',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-46 is a San Fernando Valley district centered on Encino and surrounding neighborhoods.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'Jesse Gabriel chairs the Assembly Budget Committee, which writes the state’s spending plan, giving this San Fernando Valley seat unusual influence. Republican Tracey Schroeder, a longtime LAUSD teacher, is running again after losing to him in 2024.',
    ],
    introParagraphs: [
      'Gabriel took 66.2% in the June 2 primary to Schroeder’s 33.8% (certified Statement of Vote). In their 2024 matchup Gabriel won 62.9% (Digital Democracy). Schroeder is running on public safety, schools basics and opposition to gas and mileage taxes.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 46', url: 'https://theballotbrief.com/state/california/los-angeles-county/california-assembly-district-46' },
      { label: 'Certified Statement of Vote — State Assembly (June 2, 2026)', url: SOV_ASSEMBLY },
    ],
    candidates: [
      {
        id: 'jesse-gabriel',
        photoSlug: 'jesse-gabriel',
        name: 'Jesse Gabriel',
        party: 'D',
        role: 'Member of the State Assembly, 46th District',
        campaignUrl: 'https://jessegabriel.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2018 who chairs the Budget Committee; former constitutional-rights litigator.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since June 2018; 167 bills in the 2025–26 session, 58 passed (Digital Democracy).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs the Assembly Budget Committee; member of Governmental Organization (Digital Democracy).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented the San Fernando Valley seat since 2018 (renumbered from the 45th in 2022).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Authored the Gun Violence Prevention and School Safety Act (2023) and the Real Food, Healthy Kids Act (2025) (Wikipedia).' },
          ],
        },
        bio: [
          'A Berkeley and Harvard Law graduate, Gabriel was counsel to Sen. Evan Bayh and a Gibson Dunn litigator who sued the Trump administration on behalf of DACA recipients. He won a 2018 special election and now chairs the Budget Committee and the Legislative Jewish Caucus.',
          'His laws include a 2023 excise tax on gun-industry profits, a 2025 ban on DIY machine guns and school food-safety rules.',
        ],
        recordVsChange:
          'As Budget chair Gabriel is one of the Assembly’s most powerful members; Schroeder offers a classroom teacher’s perspective and a tax-cutting agenda but no legislative record, so a change would cost the district that leverage.',
        scorecard: [
          { topic: 'Public safety', position: '✓✓ Gun-industry excise tax (2023); DIY machine-gun ban and emergency-looting penalties (2025)', comparison: 'Schroeder wants Prop 36 funded and fentanyl and trafficking stopped.' },
          { topic: 'Education', position: '✓ Real Food, Healthy Kids Act phases harmful ultra-processed foods out of schools; 91% with CTA', comparison: 'Schroeder prioritizes phonics, math, civics, smaller classes and trades.' },
          { topic: 'Taxes', position: '~ Writes the state budget as chair; 0% with Howard Jarvis Taxpayers Association', comparison: 'Schroeder wants gas and small-business taxes cut and opposes a mileage tax.' },
          { topic: 'Climate', position: '✓ 94% with California Environmental Voters (Digital Democracy)', comparison: 'Schroeder wants fewer regulations and refineries kept in California.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat; 100% with ACLU and Planned Parenthood', comparison: 'Schroeder emphasizes girls’ sports and parental participation in schools.' },
        ],
        money: CAL_ACCESS,
        endorsements: CDP_LINE,
        redFlags: [],
      },
      {
        id: 'tracey-schroeder',
        name: 'Tracey Schroeder',
        party: 'R',
        role: 'Teacher',
        campaignUrl: 'https://traceyschroeder.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'LAUSD elementary teacher for more than 25 years and repeat candidate; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: UNKNOWN_LAW },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: UNKNOWN_COMMITTEE },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Third-generation San Fernando Valley resident and longtime local teacher; ran for AD-46 in 2024 and LAUSD board in 2022 (Ballot Brief; JoinCalifornia).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: UNKNOWN_COALITION },
          ],
        },
        bio: [
          'Schroeder has taught elementary school in the Los Angeles Unified School District for more than 25 years and is a third-generation Valley resident. She holds a UCLA bachelor’s and a graduate degree from Phillips Graduate Institute.',
          'She ran for the LAUSD board in 2022 and lost this seat to Gabriel in 2024 with 63,114 votes.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓ Fund Prop 36; stop fentanyl and human trafficking', comparison: 'Gabriel authored gun-industry tax and machine-gun ban laws.' },
          { topic: 'Education', position: '✓ Phonics, math and civics; smaller classes; restore trades training', comparison: 'Gabriel focuses on school food safety.' },
          { topic: 'Taxes', position: '✓✓ Cut gas and small-business taxes; oppose a mileage tax; audit “mismanaged” funds', comparison: 'Gabriel writes the state budget and scores 0% with Howard Jarvis.' },
          { topic: 'Climate', position: '✗ Reduce regulations and keep refineries in California', comparison: 'Gabriel scores 94% with California Environmental Voters.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Gabriel', '◐', 'Leftward Progressives back Gabriel for his gun-safety laws and 100% ACLU score, though Gabriel is a mainstream budget chair rather than an insurgent.'],
      ['LL', 'Gabriel', '●', 'Loyal Liberals, only about 5% of whom say undocumented immigrants should not be allowed to stay legally, value Gabriel, the Budget Committee chair who sued the Trump administration on behalf of DACA recipients.'],
      ['LO', 'Gabriel', '◐', 'Left-Out Left voters prefer Gabriel’s Democratic record, though Gabriel is a powerful insider and Schroeder’s opposition to gas taxes speaks to their costs.'],
      ['OO', 'Gabriel', '●', 'Order and Opportunity Left voters fit Gabriel’s ban on DIY machine guns, tougher looting penalties and healthier school food.'],
      ['TM', 'Gabriel / Schroeder', '=', 'Tuned-Out Middle voters feel costs either way: if a Budget Committee chair who can steer more help to the Valley than a minority member matters most, Gabriel; if cutting gas taxes and blocking a mileage tax matter more, Schroeder.'],
      ['PP', 'Gabriel', '◐', 'Pragmatic and Polite Right voters value Gabriel’s competence as budget chair and share his concern about gun violence (57% call it a very big problem), so some cross party lines.'],
      ['UR', 'Schroeder', '◐', 'Unconventional Right voters like Schroeder’s tax cuts, Prop 36 funding and rollback of regulation.', 'Experience-first Unconventional Right voters could back Gabriel, the Assembly Budget chair; they give up a Republican vote on taxes.'],
      ['FC', 'Schroeder', '●', 'Faith First Conservatives back Schroeder, a veteran teacher focused on basics and civics, over Gabriel’s 100% Planned Parenthood record, since 83% of them say abortion should be illegal in most cases.'],
      ['NA', 'Schroeder', '●', 'No Apologies Right voters back Schroeder on cutting gas taxes, opposing a mileage tax and keeping refineries open.'],
    ]),
    counterArguments: [
      'PP (Gabriel ◐): But consider that Gabriel scores 0% with Howard Jarvis Taxpayers Association, because their small-government streak favors lower taxes.',
    ],
  },

  // ───────────────────────── AD-48 ─────────────────────────
  {
    id: 'assembly-ad48',
    categoryId: 'state-leg',
    title: 'State Assembly, District 48',
    tldrLabel: 'AD-48',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-48 covers San Gabriel Valley cities including West Covina, Baldwin Park, Covina, Glendora and Azusa.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'Blanca Rubio, a former teacher, chairs Governmental Organization, which handles gambling, alcohol and emergency-services law. Her scores show a business-friendly record: 75% with the California Chamber of Commerce and 33% with California Environmental Voters (Digital Democracy).',
    ],
    introParagraphs: [
      'Rubio took 65.3% in the June 2 primary to Republican Dan T. Tran’s 34.7% (certified Statement of Vote). It is a rematch of 2024, when Rubio won 61.8% to 38.2% (Wikipedia). Tran, a real-estate businessman, has no campaign website or published platform found.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 48', url: 'https://theballotbrief.com/state/california/los-angeles-county/california-assembly-district-48' },
      { label: 'Certified Statement of Vote — State Assembly (June 2, 2026)', url: SOV_ASSEMBLY },
    ],
    candidates: [
      {
        id: 'blanca-rubio',
        photoSlug: 'blanca-rubio',
        name: 'Blanca Rubio',
        party: 'D',
        role: 'State Assemblymember/Teacher',
        campaignUrl: 'https://www.blancarubio.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2016 who chairs Governmental Organization; former teacher and school board member.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since December 2016; 35 bills in the 2025–26 session, 12 passed (Digital Democracy).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs Governmental Organization; serves on Banking and Finance, Aging and Long-Term Care, and Local Government (Digital Democracy).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Baldwin Park resident; elected to the Baldwin Park Unified school board in 2003 and served two terms (Wikipedia).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'With her sister, Sen. Susan Rubio, sponsored a law extending the statute of limitations for certain domestic-violence offenses and requiring police training (Digital Democracy).' },
          ],
        },
        bio: [
          'Born in Ciudad Juárez and a U.S. citizen since 1994, Rubio taught elementary school for 16 years and served on the Baldwin Park school board before winning the Assembly seat in 2016. She holds education degrees from Azusa Pacific University.',
          'She chairs Governmental Organization and the Select Committee on Domestic Violence; her sister, Susan Rubio, is a state senator.',
        ],
        recordVsChange:
          'Rubio holds a committee chair and a decade of seniority; Tran has no published platform, so voters weighing a change get little to compare beyond party.',
        scorecard: [
          { topic: 'Public safety', position: '✓ Chairs Select Committee on Domestic Violence; extended time limits for some abuse cases', comparison: 'Tran has published no position.' },
          { topic: 'Climate', position: '✗ 33% with California Environmental Voters, 20% with Sierra Club (Digital Democracy)', comparison: 'Tran has published no position.' },
          { topic: 'Education', position: '✓ 16-year elementary teacher; 90% with the California Teachers Association', comparison: 'Tran has published no position.' },
          { topic: 'Taxes', position: '~ 75% with CalChamber but 0% with Howard Jarvis Taxpayers Association', comparison: 'Tran has published no position.' },
          { topic: 'Caucus / ideology', position: '~ Business-friendly Democrat; 100% with Planned Parenthood and Equality California', comparison: 'Tran is the Republican nominee.' },
        ],
        money: CAL_ACCESS,
        endorsements: CDP_LINE,
        redFlags: [],
      },
      {
        id: 'dan-t-tran',
        name: 'Dan T. Tran',
        party: 'R',
        role: 'Real Estate Businessman',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Real-estate businessman and 2024 nominee for this seat; no elected or legislative experience found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: UNKNOWN_LAW },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: UNKNOWN_COMMITTEE },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'Ran for this seat in 2024, receiving 62,880 votes (Wikipedia); no constituent-service role found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: UNKNOWN_COALITION },
          ],
        },
        bio: [
          'Tran’s ballot designation is Real Estate Businessman. He was the Republican nominee for this seat in 2024 and lost to Rubio, 61.8% to 38.2%. No campaign website, questionnaire or published platform was found as of Oct 9, 2026.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? No public position found', comparison: 'Rubio lists housing and homelessness as a priority.' },
          { topic: 'Taxes', position: '? No public position found', comparison: 'Rubio scores 0% with Howard Jarvis.' },
          { topic: 'Public safety', position: '? No public position found', comparison: 'Rubio chairs the domestic-violence select committee.' },
          { topic: 'Caucus / ideology', position: '~ Republican nominee; no platform published', comparison: 'Rubio is a business-friendly Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Rubio', '○', 'Leftward Progressives, only about 11% of whom trust business leaders to act in the public interest, back the Democrat only weakly, since Rubio scores 33% with Environmental Voters and 75% with the Chamber of Commerce.'],
      ['LL', 'Rubio', '◐', 'Loyal Liberals value Rubio’s teaching background and committee chair, though Rubio’s low environmental scores cut against their trust in climate science (67% trust scientists a great deal).'],
      ['LO', 'Rubio', '◐', 'Left-Out Left voters prefer Rubio to an unknown Republican, though a business-friendly incumbent with a sister in the Senate looks like an insider family.'],
      ['OO', 'Rubio', '●', 'Order and Opportunity Left voters, with more confidence in business leaders (40%) than groups to their left, fit Rubio, a former teacher who chairs the Select Committee on Domestic Violence and works with business.'],
      ['TM', 'Rubio', '◐', 'Tuned-Out Middle voters lean to Rubio, a known local teacher, over a challenger with no published platform.'],
      ['PP', 'Rubio', '◐', 'Pragmatic and Polite Right voters like Rubio’s moderate, business-friendly record and experience over a blank-slate Republican.'],
      ['UR', 'Rubio / Tran', '=', 'Unconventional Right voters lean Republican, but Tran has published no platform, while Rubio is a 10-year legislator and committee chair with a business-friendly record: if a Republican vote matters most, Tran; if a moderate who often sides with business matters more, Rubio.'],
      ['FC', 'Tran', '◐', 'Faith First Conservatives back Tran over Rubio, who scores 100% with Planned Parenthood and Equality California, though Tran has published nothing.', 'Experience-first Faith First Conservatives could back Rubio, a former teacher and committee chair; they give up a Republican vote on abortion.'],
      ['NA', 'Tran', '◐', 'No Apologies Right voters back the Republican, though Tran has run no visible campaign.', 'Experience-first No Apologies Right voters could back Rubio, the only finalist with a record in office; they give up a Republican vote.'],
    ]),
    counterArguments: [
      'LP (Rubio ○): But consider that Rubio has 20% with the Sierra Club, because they want the strongest climate action.',
      'FC (Tran ◐): But consider that Tran has no campaign website or platform, because a vote for Tran is purely a party vote.',
    ],
  },

  // ───────────────────────── AD-49 ─────────────────────────
  {
    id: 'assembly-ad49',
    categoryId: 'state-leg',
    title: 'State Assembly, District 49',
    tldrLabel: 'AD-49',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-49 is a western San Gabriel Valley district centered on Alhambra and neighboring cities.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'Mike Fong, a former community college trustee, chairs the Assembly Higher Education Committee, which shapes policy for the UC, CSU and community college systems. Republican Long David Liu, an attorney and TV commentator, is challenging him for the second time.',
    ],
    introParagraphs: [
      'Fong took 68.2% in the June 2 primary to Liu’s 31.8% (certified Statement of Vote). In their 2024 matchup Fong won 62.0% to 38.0% (Wikipedia). Liu is running on support for police, opposition to tax increases and merit-based schools.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 49', url: 'https://theballotbrief.com/state/california/los-angeles-county/california-assembly-district-49' },
      { label: 'Certified Statement of Vote — State Assembly (June 2, 2026)', url: SOV_ASSEMBLY },
    ],
    candidates: [
      {
        id: 'mike-fong',
        photoSlug: 'mike-fong',
        name: 'Mike Fong',
        party: 'D',
        role: 'California State Assemblymember',
        campaignUrl: 'https://mikefong.org',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2022 who chairs Higher Education; former LA Community College District trustee and city official.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since February 2022 special election; former LA Community College District trustee (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair of the Assembly Higher Education Committee since December 2022 (Assembly press release).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'East Area director for Mayor Antonio Villaraigosa and policy director at LA’s Department of Neighborhood Empowerment before the Assembly (Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Several bills reached the governor in September 2025, including paid community-college internships (Assembly press release).' },
          ],
        },
        bio: [
          'A UCLA graduate with an MPA from Cal State Northridge, Fong worked for Mayor Villaraigosa and LA’s neighborhood-empowerment department and served as an LA Community College District trustee before winning a 2022 special election.',
          'He chairs Higher Education; his recent bills cover paid community-college internships and continuing education for students who leave the country because of immigration enforcement.',
        ],
        recordVsChange:
          'Fong chairs the committee that oversees the state’s college systems; Liu offers a law-and-order and anti-tax message but no legislative record, so a change would give up that chairmanship.',
        scorecard: [
          { topic: 'Education', position: '✓✓ Chairs Higher Education; bill for paid community-college internships', comparison: 'Liu wants transparent, merit-based schools and more parental involvement.' },
          { topic: 'Public safety', position: '? No distinctive public-safety platform found', comparison: 'Liu makes supporting police a priority.' },
          { topic: 'Taxes', position: '? No tax-specific position found', comparison: 'Liu opposes tax increases and regulatory burdens on business.' },
          { topic: 'Immigration', position: '✓ Bill to keep education options for students who leave due to immigration enforcement', comparison: 'Liu has published no immigration position.' },
        ],
        money: CAL_ACCESS,
        endorsements: CDP_LINE,
        redFlags: [],
      },
      {
        id: 'long-david-liu',
        name: 'Long David Liu',
        party: 'R',
        role: 'Attorney/Father',
        campaignUrl: 'https://liuforassembly.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Attorney running his own firm since 2004 and frequent media commentator; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'President of Liu Law, Inc. since 2004 (BallotReady); legal practice but no legislative drafting found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: UNKNOWN_COMMITTEE },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Says he has spent more than 20 years advocating for underserved, multi-ethnic communities (campaign site via Ballot Brief); 2024 nominee for this seat.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: UNKNOWN_COALITION },
          ],
        },
        bio: [
          'Liu has run his own law firm, Liu Law, Inc., since 2004 and is a frequent TV commentator on political and social issues. He was the Republican nominee for this seat in 2024.',
          'His priorities are supporting police, addressing homelessness, opposing tax increases and business regulation, and merit-based schools with more parental involvement.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓ Support police and address homelessness', comparison: 'Fong has no distinctive public-safety platform found.' },
          { topic: 'Taxes', position: '✓ Oppose tax increases and regulatory burdens on business', comparison: 'Fong has no tax-specific position found.' },
          { topic: 'Education', position: '✓ Transparent, merit-based schools; parental involvement', comparison: 'Fong chairs Higher Education.' },
          { topic: 'Caucus / ideology', position: '✓ Republican running on law and order and lower taxes', comparison: 'Fong is a Democratic committee chair.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Fong', '◐', 'Leftward Progressives back Fong for protecting students affected by immigration enforcement, though Fong is a mainstream Democrat.'],
      ['LL', 'Fong', '●', 'Loyal Liberals value Fong, a former college trustee who chairs Higher Education.'],
      ['LO', 'Fong', '◐', 'Left-Out Left voters like Fong’s paid internships for community-college students, though Fong is a longtime insider.'],
      ['OO', 'Fong', '◐', 'Order and Opportunity Left voters like Fong’s focus on opportunity through college and jobs, though Liu’s police support also speaks to them.'],
      ['TM', 'Fong / Liu', '=', 'Tuned-Out Middle voters weigh direct help against tax worries: if Fong’s paid internships matter most, Fong; if Liu’s opposition to tax increases matters more, Liu.'],
      ['PP', 'Fong / Liu', '=', 'Pragmatic and Polite Right voters weigh steady competence against their small-government lean: if a Higher Education chair who passes bills matters most, Fong; if Liu’s support for police and opposition to tax hikes matters more, Liu, who has never held office.'],
      ['UR', 'Liu', '◐', 'Unconventional Right voters, about 78% of whom have confidence in the police, back Liu on law and order, lower taxes and merit-based schools.', 'Experience-first Unconventional Right voters could back Fong, a former college trustee who chairs Higher Education; they give up a Republican vote.'],
      ['FC', 'Liu', '●', 'Faith First Conservatives back Liu on parental involvement in schools and law and order.'],
      ['NA', 'Liu', '●', 'No Apologies Right voters back Liu, a TV commentator who opposes tax increases and business regulation.'],
    ]),
    counterArguments: [
      'OO (Fong ◐): But consider that Fong has no stated public-safety platform, because order matters to them.',
    ],
  },

  // ───────────────────────── AD-52 ─────────────────────────
  {
    id: 'assembly-ad52',
    categoryId: 'state-leg',
    title: 'State Assembly, District 52',
    tldrLabel: 'AD-52',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-52 covers East Los Angeles, Northeast Los Angeles and south Glendale.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'Jessica Caloza, first elected in 2024, is the first Filipina in the Legislature and an Assistant Majority Whip. Her early tenure was shaped by the January 2025 wildfires; Republican Andrea Lee Anderson is running on lower taxes, less regulation and “principles over politics.”',
    ],
    introParagraphs: [
      'Caloza took 85.8% in the June 2 primary to Anderson’s 14.2% (certified Statement of Vote). In 2024 she won the open seat with 66.9% over a fellow Democrat (Wikipedia).',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 52', url: 'https://theballotbrief.com/state/california/los-angeles-county/california-assembly-district-52' },
      { label: 'Certified Statement of Vote — State Assembly (June 2, 2026)', url: SOV_ASSEMBLY },
    ],
    candidates: [
      {
        id: 'jessica-caloza',
        photoSlug: 'jessica-caloza',
        name: 'Jessica Caloza',
        party: 'D',
        role: 'California State Assemblymember',
        campaignUrl: 'https://www.jessicacaloza.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since December 2024 and Assistant Majority Whip, after senior roles for Attorney General Bonta and Mayor Garcetti.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since December 2024; 34 bills in the 2025–26 session, 9 passed (Digital Democracy); earlier a U.S. Department of Education policy analyst.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Member of Budget, Appropriations and Health; Assistant Majority Whip; chairs the Select Committee on Asia/California Trade and Investment.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Represents the district since 2024; former LA Public Works commissioner (Digital Democracy).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Deputy chief of staff to Attorney General Rob Bonta; 9 bills passed in her first session.' },
          ],
        },
        bio: [
          'Born in Quezon City and a UC San Diego graduate, Caloza worked on education policy in the Obama administration, was a Los Angeles Public Works commissioner under Mayor Garcetti, and served as Attorney General Bonta’s deputy chief of staff and adviser on gender-based violence.',
          'She won the seat in 2024 and is an Assistant Majority Whip.',
        ],
        recordVsChange:
          'Caloza is a first-term member already in the Speaker’s whip team; Anderson offers a tax-cutting message but no record in office or detailed platform.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Affordable housing and lower family costs are stated priorities', comparison: 'Anderson favors lower taxes and less state regulation.' },
          { topic: 'Public safety', position: '✓ Former adviser to the attorney general on gender-based violence', comparison: 'Anderson has published no public-safety position.' },
          { topic: 'Taxes', position: '? No tax-specific position found', comparison: 'Anderson wants lower taxes.' },
          { topic: 'Caucus / ideology', position: '✓ Assistant Majority Whip under Speaker Rivas; state-party endorsed', comparison: 'Anderson runs on “principles over politics.”' },
        ],
        money: CAL_ACCESS,
        endorsements: CDP_LINE,
        redFlags: [],
      },
      {
        id: 'andrea-lee-anderson',
        name: 'Andrea Lee Anderson',
        party: 'R',
        role: 'No Ballot Designation',
        campaignUrl: 'https://andrealeeanderson.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'First-time candidate with no listed occupation or public-service record.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: UNKNOWN_LAW },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: UNKNOWN_COMMITTEE },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No constituent-service role found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: UNKNOWN_COALITION },
          ],
        },
        bio: [
          'Anderson’s campaign says she comes from a public-service family: her father was mayor of her hometown and her mother a Girl Scouts executive (Ballot Brief). She lists no occupation on the ballot.',
          'Her stated goals are equal opportunity, government accountability, “principles over politics” and a moral society, with lower taxes and less regulation.',
        ],
        scorecard: [
          { topic: 'Taxes', position: '✓ Lower taxes and reduced state regulation', comparison: 'Caloza has no tax-specific position found.' },
          { topic: 'Housing & transit', position: '? No public position found', comparison: 'Caloza lists affordable housing as a priority.' },
          { topic: 'Public safety', position: '? No public position found', comparison: 'Caloza advised the attorney general on gender-based violence.' },
          { topic: 'Caucus / ideology', position: '✓ Republican stressing government accountability', comparison: 'Caloza is in Democratic leadership.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Caloza', '◐', 'Leftward Progressives back Caloza on housing and lower family costs, though Caloza comes from the Garcetti and Bonta offices rather than a movement.'],
      ['LL', 'Caloza', '●', 'Loyal Liberals value Caloza, an Assistant Majority Whip with experience in the attorney general’s office.'],
      ['LO', 'Caloza', '◐', 'Left-Out Left voters prefer Caloza to a candidate with no record, though Caloza’s résumé is mostly as a political staffer.'],
      ['OO', 'Caloza', '●', 'Order and Opportunity Left voters fit Caloza, a former adviser on gender-based violence focused on affordable housing and family costs.'],
      ['TM', 'Caloza', '◐', 'Tuned-Out Middle voters lean to Caloza’s stated focus on family costs.'],
      ['PP', 'Anderson', '○', 'Pragmatic and Polite Right voters like Anderson’s “principles over politics” and accountability message, though Anderson has no record.', 'Experience-first Pragmatic and Polite Right voters could back Caloza, an incumbent with senior government roles; they give up a Republican vote for lower taxes.'],
      ['UR', 'Anderson', '◐', 'Unconventional Right voters back Anderson on lower taxes and less regulation.', 'Experience-first Unconventional Right voters could back Caloza, the incumbent; they give up a Republican vote.'],
      ['FC', 'Anderson', '●', 'Faith First Conservatives, 82% of whom want a Christian-based national culture, back Anderson, who calls for a moral society, lower taxes and accountability.'],
      ['NA', 'Anderson', '◐', 'No Apologies Right voters back the Republican, though Anderson’s low-key campaign is not the fight they want.', 'Experience-first No Apologies Right voters could back Caloza, the only finalist with government experience; they give up a Republican vote.'],
    ]),
    counterArguments: [
      'PP (Anderson ○): But consider that Anderson lists no occupation or public-service record, because they value demonstrated competence.',
      'FC (Anderson ●): But consider that Anderson has run a small campaign with no specifics, because Caloza already has a seat and a whip post.',
    ],
  },

  // ───────────────────────── AD-54 ─────────────────────────
  {
    id: 'assembly-ad54',
    categoryId: 'state-leg',
    title: 'State Assembly, District 54',
    tldrLabel: 'AD-54',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-54 covers Boyle Heights, Lincoln Heights, Westlake, Downtown, Koreatown, Pico-Union, Chinatown and Little Tokyo plus Vernon, Montebello and Commerce.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'AD-54 runs from Koreatown and Downtown through Boyle Heights to Montebello and Commerce. Mark Gonzalez, elected in 2024 and now Majority Whip, faces a Republican who qualified as a write-in and has run no visible campaign.',
    ],
    introParagraphs: [
      'Gonzalez was the only name on the June ballot and took 99.7%. Republican Alexandra Briseno advanced as a write-in with 137 votes (0.3%) (certified Statement of Vote). She has no ballot designation, campaign website or published platform found, so this is effectively a referendum on Gonzalez.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 54', url: 'https://theballotbrief.com/state/california/los-angeles-county/california-assembly-district-54' },
      { label: 'Certified List of Candidates — Nov 3, 2026 (Secretary of State)', url: CERT_LIST },
      { label: 'Certified Statement of Vote — State Assembly (June 2, 2026)', url: SOV_ASSEMBLY },
    ],
    candidates: [
      {
        id: 'mark-gonzalez',
        photoSlug: 'mark-gonzalez',
        name: 'Mark Gonzalez',
        party: 'D',
        role: 'Member of the State Assembly',
        campaignUrl: 'https://markgonzalezforassembly.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since December 2024 and Majority Whip; former district director for this seat and LA County Democratic Party chair.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since December 2024; 42 bills in the 2025–26 session, 25 passed (Digital Democracy).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Majority Whip; member of Appropriations, Health, Public Safety, Rules, and Utilities and Energy (Digital Democracy).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'District director for predecessor Miguel Santiago; former staff member for Speaker John Pérez (Digital Democracy).' },
            { criterionId: 'coalition', assessment: 'met', evidence: '25 bills passed in his first session, including AB 1941 (organized metal theft) and AB 647 (abandoned RVs).' },
          ],
        },
        bio: [
          'Raised by a single mother in Section 8 housing, Gonzalez later became her caregiver after a stroke. He worked for Speaker John Pérez and as district director for Assemblymember Miguel Santiago, and chaired the LA County Democratic Party until March 2024.',
          'He won the seat in 2024 over fellow Democrat John Yi, 56.3% to 43.7%, and was named Majority Whip.',
        ],
        recordVsChange:
          'Gonzalez is in Assembly leadership with a productive first session; his write-in opponent has no visible campaign, so there is no record to weigh against his.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Housing affordability is a stated priority; AB 647 on abandoned RVs', comparison: 'Briseno has published no position.' },
          { topic: 'Education', position: '✓ Wants community college made free', comparison: 'Briseno has published no position.' },
          { topic: 'Public safety', position: '✓ AB 1941 targets organized metal theft', comparison: 'Briseno has published no position.' },
          { topic: 'Climate', position: '✓ Environmental protection is a stated priority', comparison: 'Briseno has published no position.' },
        ],
        money: CAL_ACCESS,
        endorsements: CDP_LINE,
        redFlags: [],
      },
      {
        id: 'alexandra-briseno',
        name: 'Alexandra Briseno',
        party: 'R',
        role: 'No Ballot Designation',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Write-in qualifier with no published background, occupation or platform.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: UNKNOWN_LAW },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: UNKNOWN_COMMITTEE },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No constituent-service role found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: UNKNOWN_COALITION },
          ],
        },
        bio: [
          'Briseno reached the November ballot as a Republican write-in, receiving 137 votes in June. No biography, campaign website, questionnaire or platform was found as of Oct 9, 2026.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? No public position found', comparison: 'Gonzalez lists housing affordability as a priority.' },
          { topic: 'Education', position: '? No public position found', comparison: 'Gonzalez wants free community college.' },
          { topic: 'Public safety', position: '? No public position found', comparison: 'Gonzalez authored a metal-theft bill.' },
          { topic: 'Caucus / ideology', position: '~ Republican write-in qualifier', comparison: 'Gonzalez is Majority Whip.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Gonzalez', '◐', 'Leftward Progressives back Gonzalez for free community college and housing, though Gonzalez is a former county party chair.'],
      ['LL', 'Gonzalez', '●', 'Loyal Liberals value Gonzalez, the Majority Whip and a longtime party leader.'],
      ['LO', 'Gonzalez', '◐', 'Left-Out Left voters like Gonzalez’s background in Section 8 housing, though Gonzalez rose through the party machine.'],
      ['OO', 'Gonzalez', '●', 'Order and Opportunity Left voters fit Gonzalez’s bills on metal theft and abandoned RVs and his push for free community college.'],
      ['TM', 'Gonzalez', '◐', 'Tuned-Out Middle voters get direct help from Gonzalez’s push for free community college.'],
      ['PP', 'Gonzalez', '◐', 'Pragmatic and Polite Right voters value Gonzalez’s practical bills over a write-in with no campaign.'],
      ['UR', 'Briseno', '○', 'Unconventional Right voters lean Republican but have nothing from Briseno to judge.', 'Experience-first Unconventional Right voters could back Gonzalez, the Majority Whip; they give up a Republican vote.'],
      ['FC', 'Briseno', '○', 'Faith First Conservatives lean to the Republican, though Briseno has published nothing.', 'Experience-first Faith First Conservatives could back Gonzalez, the only finalist with experience; they give up a Republican vote.'],
      ['NA', 'Briseno', '○', 'No Apologies Right voters lean to the Republican, though Briseno has run no visible campaign.', 'Experience-first No Apologies Right voters could back Gonzalez, the incumbent; they give up a Republican vote.'],
    ]),
    counterArguments: [
      'NA (Briseno ○): But consider that Briseno qualified with 137 write-in votes and has no platform, because a vote for Briseno is purely a party vote.',
    ],
  },

  // ───────────────────────── AD-55 ─────────────────────────
  {
    id: 'assembly-ad55',
    categoryId: 'state-leg',
    title: 'State Assembly, District 55',
    tldrLabel: 'AD-55',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-55 covers Culver City, Baldwin Hills, Crenshaw, Ladera Heights, Mar Vista, Palms, Pico-Robertson, Mid-Wilshire and much of South Los Angeles.'),
    seatContext: 'Incumbent (Democrat vs. Democrat)',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'Both finalists are Democrats. Isaac Bryan, a former Assembly majority leader, chairs the Natural Resources Committee, which handles oil, water and climate law. Challenger Ashley M. Brown, a school social worker, is running on mental-health care, career pathways and community-based prevention.',
    ],
    introParagraphs: [
      'Bryan took 64.6% in the June 2 primary. Brown was second with 18.9%, ahead of Republican Keith G. Cascio (15.3%) (certified Statement of Vote). To win, Brown needs Republican and independent voters plus Democrats who want a change.',
    ],
    readingLinks: [
      { label: 'The Ballot Brief — Assembly District 55', url: 'https://theballotbrief.com/state/california/los-angeles-county/california-assembly-district-55' },
      { label: 'Certified Statement of Vote — State Assembly (June 2, 2026)', url: SOV_ASSEMBLY },
    ],
    candidates: [
      {
        id: 'isaac-bryan',
        photoSlug: 'isaac-bryan',
        name: 'Isaac G. Bryan',
        party: 'D',
        role: 'State Assemblymember',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2021 who chairs Natural Resources and briefly served as majority leader in 2023.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since May 2021 special election; reelected in 2022 and 2024 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs Natural Resources (Ballot Brief, citing his Assembly site); Assembly majority leader July–November 2023 (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Founded UCLA’s Black Policy Project and directed public policy at UCLA’s Bunche Center; represents the area since 2021.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Laws ending prison gerrymandering and shutting down California’s largest urban oil field (Wikipedia).' },
          ],
        },
        bio: [
          'Bryan founded UCLA’s Black Policy Project and worked in Mayor Garcetti’s Office of Reentry before winning a 2021 special election. He served as Assembly majority leader for part of 2023, chairs Natural Resources and was elected vice chair of the Legislative Black Caucus in 2024.',
          'His laws include ending prison gerrymandering and closing the state’s largest urban oil field.',
        ],
        recordVsChange:
          'Bryan chairs a major policy committee and has a long list of enacted laws; Brown brings frontline school mental-health experience but no legislative record, so a change would give up a committee chair for a newcomer of the same party.',
        scorecard: [
          { topic: 'Climate', position: '✓✓ Chairs Natural Resources; law closed the state’s largest urban oil field', comparison: 'Brown has published no climate position.' },
          { topic: 'Public safety', position: '✓ Ended prison gerrymandering; expanded restorative-justice practices', comparison: 'Brown favors investment in community-based prevention.' },
          { topic: 'Education', position: '✓ Improved student health-insurance coverage', comparison: 'Brown wants education tied to career pathways.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive Caucus member; Black Caucus vice chair; state-party endorsed', comparison: 'Brown has no voting record.' },
        ],
        money: CAL_ACCESS,
        endorsements: CDP_LINE,
        redFlags: [],
      },
      {
        id: 'ashley-m-brown',
        name: 'Ashley M. Brown',
        party: 'D',
        role: 'School Social Worker',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'School social worker with more than a decade in LA public education and community mental health; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: UNKNOWN_LAW },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: UNKNOWN_COMMITTEE },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'More than 10 years working with students and families in Los Angeles public education and community mental health (VOTE411 via Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: UNKNOWN_COALITION },
          ],
        },
        bio: [
          'Brown is a school social worker and educator with more than a decade of work in Los Angeles public education and community-based mental health. She holds a master’s in educational counseling and a master of social work, and founded a framework called Rooted & Resilient (VOTE411 via Ballot Brief).',
        ],
        scorecard: [
          { topic: 'Health care', position: '✓ Expand access to mental-health care and women’s health services', comparison: 'Bryan has no comparable health platform found.' },
          { topic: 'Education', position: '✓ Connect education to career pathways and economic stability', comparison: 'Bryan improved student health-insurance coverage.' },
          { topic: 'Public safety', position: '✓ Invest in community-based prevention', comparison: 'Bryan expanded restorative-justice practices.' },
          { topic: 'Caucus / ideology', position: '? No voting record; positions on climate and taxes unknown', comparison: 'Bryan is a Progressive Caucus member.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Bryan', '●', 'Leftward Progressives fit Bryan, the further-left finalist, who closed the state’s largest urban oil field and ended prison gerrymandering.'],
      ['LL', 'Bryan', '●', 'Loyal Liberals value Bryan, a state-party-endorsed Natural Resources chair and former majority leader.'],
      ['LO', 'Brown', '◐', 'Left-Out Left voters like Brown, a school social worker outside politics focused on mental-health care and career pathways, over a former majority leader.', 'Experience-first Left-Out Left voters could back Bryan, who chairs Natural Resources; they give up an outsider focused on mental-health care.'],
      ['OO', 'Brown', '○', 'Order and Opportunity Left voters like Brown’s practical focus on career pathways and prevention, though Brown has no record.', 'Experience-first Order and Opportunity Left voters could back Bryan, an experienced chair; they give up Brown’s career and mental-health focus.'],
      ['TM', 'Brown', '○', 'Tuned-Out Middle voters want direct help, and Brown promises mental-health and women’s health access.', 'Experience-first Tuned-Out Middle voters could back Bryan, the incumbent chair; they give up Brown’s health-care focus.'],
      ['PP', 'Bryan / Brown', '=', 'Pragmatic and Polite Right voters weigh experience against ideology: if a committee chair and former majority leader with a long list of enacted laws matters most, Bryan, though he is a Progressive Caucus member; if a less ideological newcomer matters more, Brown, though she has no voting record and unknown positions on climate and taxes.'],
      ['UR', 'Bryan / Brown', '=', 'Unconventional Right voters face two Democrats: if a vote against a Progressive Caucus member matters most, Brown, the alternative focused on community-based prevention and career pathways; if an incumbent who already delivers matters more, Bryan, accepting a strongly progressive vote.'],
      ['FC', 'Bryan / Brown', '=', 'Faith First Conservatives face two Democrats: if opposing Bryan’s progressive record matters most, Brown, though her views on climate and taxes are unknown; if an experienced incumbent matters more, Bryan, accepting a strongly progressive vote.'],
      ['NA', 'Bryan / Brown', '=', 'No Apologies Right voters dislike both Democrats: if opposing Bryan’s law closing the state’s largest urban oil field matters most, Brown; if an experienced incumbent over a newcomer with no voting record matters more, Bryan, accepting a climate-focused progressive.'],
    ]),
    counterArguments: [
      'LO (Brown ◐): But consider that Bryan already passes laws on prison gerrymandering and student health coverage, because results matter more than outsider status.',
    ],
  },
];
