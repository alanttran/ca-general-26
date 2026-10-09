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
      ['PL', 'Lieu', '●', 'Progressive Left voters back a Democrat focused on civil rights, humane immigration policy and climate legislation.'],
      ['EL', 'Lieu', '●', 'Establishment Liberals value a House Democratic leader with deep legislative experience and a leading role on AI policy.'],
      ['DM', 'Lieu', '●', 'Democratic Mainstays stick with the party’s endorsed incumbent and its caucus vice chair.'],
      ['OL', 'Lieu', '◐', 'Outsider Left voters are wary of party leadership, but Lieu’s civil-rights and immigration priorities still beat the Republican alternative.'],
      ['SS', 'Lieu', '○', 'Stressed Sideliners may default to the familiar incumbent, though Brignano’s job-retraining and housing-cost message speaks to their worries.'],
      ['AR', 'Brignano', '◐', 'Ambivalent Right voters may like a Marine veteran whose pitch is jobs and AI retraining rather than culture-war fights.', 'Ambivalent Right voters who want proven competence could back Lieu, an Air Force veteran with bipartisan AI work; they give up a Republican vote and Brignano’s worker-first immigration stance.'],
      ['PR', 'Brignano', '●', 'Populist Right voters favor an outsider who wants immigration to put American-born workers first.'],
      ['CC', 'Brignano', '●', 'Committed Conservatives back the Republican nominee as a vote for a Republican House.'],
      ['FF', 'Brignano', '●', 'Faith and Flag Conservatives favor a Marine veteran and homeschooling father who serves on a church board.'],
    ]),
    counterArguments: [
      'PR (Brignano ●): But consider that Brignano has never held office and had raised about $5,000 by June 30, while Lieu has worked with Republicans on AI legislation.',
      'OL (Lieu ◐): But consider that Lieu is a member of House Democratic leadership, the kind of party establishment Outsider Left voters often want to challenge.',
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
      ['PL', 'Kamlager-Dove', '◐', 'Progressive Left voters can back a Progressive Caucus member with a record on police accountability, though Mota’s universal-health-care pitch also appeals.'],
      ['EL', 'Kamlager-Dove', '●', 'Establishment Liberals value the party-endorsed incumbent with a subcommittee ranking post and years of legislative experience.'],
      ['DM', 'Kamlager-Dove', '●', 'Democratic Mainstays follow the state party, which endorsed the incumbent.'],
      ['OL', 'Mota', '○', 'Outsider Left voters drawn to “not a career politician” may lean to Mota’s activist campaign and universal-health-care priority.', 'Outsider Left voters who want results could back Kamlager-Dove, a Progressive Caucus member with laws on the books; they give up an outsider voice.'],
      ['SS', 'Kamlager-Dove', '○', 'Stressed Sideliners who rarely follow politics may default to the familiar incumbent in a race with little coverage.'],
      ['AR', '—', '—', 'Ambivalent Right voters have no Republican option and no clear fit between two left-leaning Democrats.', 'Ambivalent Right voters who value experience could back Kamlager-Dove, a seasoned legislator; they accept her progressive record.'],
      ['PR', 'Mota', '○', 'Populist Right voters with no Republican option may lean to the outsider over the incumbent as a protest against the establishment.', 'Populist Right voters who want effective representation could back Kamlager-Dove, an experienced legislator; they give up a protest vote.'],
      ['CC', '—', '—', 'Committed Conservatives have no fit between two left-of-center Democrats.', 'Committed Conservatives who value experience could back Kamlager-Dove, a seasoned legislator, while accepting her progressive positions.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no fit between two left-of-center Democrats.', 'Faith and Flag Conservatives who prize steady representation could back Kamlager-Dove; they accept her progressive positions.'],
    ]),
    counterArguments: [
      'OL (Mota ○): But consider that Mota has published few policy specifics and had raised about $11,000 by Sept 30, so her capacity to deliver is untested.',
      'EL (Kamlager-Dove ●): But consider that some voters may see her walkout during a Rubio hearing as unproductive confrontation rather than effective oversight.',
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
      ['PL', 'Solis', '●', 'Progressive Left voters back a former Labor Secretary who led a minimum-wage drive and wrote an early environmental-justice law.'],
      ['EL', 'Solis', '●', 'Establishment Liberals value a candidate who has served in Congress, the Cabinet and county government.'],
      ['DM', 'Solis', '●', 'Democratic Mainstays back the party-endorsed nominee with deep roots in eastern Los Angeles County.'],
      ['OL', 'Solis', '◐', 'Outsider Left voters may see Solis as a career politician, but her labor and environmental-justice record beats the Republican alternative.'],
      ['SS', 'Solis', '○', 'Stressed Sideliners focused on rent and wages may lean to the familiar local official, though Casas’s cost-of-living message also reaches them.'],
      ['AR', 'Casas', '◐', 'Ambivalent Right voters may like a retired Army colonel who pairs border security with small-business tax relief.', 'Ambivalent Right voters who want proven competence could back Solis, who has run a federal department and a county of millions; they give up Casas’s tax-cut and border agenda.'],
      ['PR', 'Casas', '●', 'Populist Right voters back a border-security and fentanyl message from a military veteran outside politics.'],
      ['CC', 'Casas', '●', 'Committed Conservatives back the Republican on lower taxes, less regulation and free markets.'],
      ['FF', 'Casas', '●', 'Faith and Flag Conservatives favor a retired colonel who wants sports limited by biological sex and a secure border.'],
    ]),
    counterArguments: [
      'PR (Casas ●): But consider that Casas has never held office and reported no FEC totals, while Solis has run a federal department and served four terms in Congress.',
      'EL (Solis ●): But consider that Solis would return to the House as a junior member after more than 15 years away.',
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
      ['PL', 'Sánchez', '●', 'Progressive Left voters back a former union leader who opposed overturning Roe and supports universal background checks.'],
      ['EL', 'Sánchez', '●', 'Establishment Liberals value a senior Ways and Means member and former caucus leader.'],
      ['DM', 'Sánchez', '●', 'Democratic Mainstays back the party-endorsed incumbent in a newly Democratic seat.'],
      ['OL', 'Sánchez', '◐', 'Outsider Left voters may be cool on a longtime incumbent, but her labor record beats the Republican alternative.'],
      ['SS', 'Sánchez', '○', 'Stressed Sideliners worried about prices may lean to the incumbent whose campaign centers on costs, though Clemmons is a working tradesman.'],
      ['AR', 'Clemmons', '◐', 'Ambivalent Right voters may relate to a small-business plumber who talks about everyday concerns rather than ideology.', 'Ambivalent Right voters who want clout could back Sánchez, a senior Ways and Means member; they give up a Republican vote and a business owner’s outlook.'],
      ['PR', 'Clemmons', '●', 'Populist Right voters favor a working tradesman over a long-serving member of Congress.'],
      ['CC', 'Clemmons', '●', 'Committed Conservatives back the Republican nominee as a vote for a Republican House.'],
      ['FF', 'Clemmons', '●', 'Faith and Flag Conservatives prefer the Republican over a Democrat who opposed overturning Roe v. Wade.'],
    ]),
    counterArguments: [
      'PR (Clemmons ●): But consider that Clemmons has published few specific positions and reported no FEC totals, while Sánchez holds a senior seat on the tax-writing committee.',
      'OL (Sánchez ◐): But consider that Sánchez moved districts after Prop 50, so parts of CA-41 are new to her.',
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
      ['PL', 'Waters', '●', 'Progressive Left voters back one of the House’s most outspoken Trump critics and a senior voice on financial regulation.'],
      ['EL', 'Waters', '●', 'Establishment Liberals value the ranking Democrat on Financial Services, though some may be uneasy about payments to her daughter.'],
      ['DM', 'Waters', '●', 'Democratic Mainstays stay with a party-endorsed incumbent who has represented the area for 35 years.'],
      ['OL', 'Waters', '◐', 'Outsider Left voters may want generational change, but Waters’s confrontational stance toward Trump fits their mood better than the Republican.'],
      ['SS', 'Waters', '○', 'Stressed Sideliners may default to the familiar incumbent, though her family campaign payments feed their distrust of politicians.'],
      ['AR', 'Morales', '◐', 'Ambivalent Right voters may like a business executive who talks about taxes, opportunity and Latino outreach.', 'Ambivalent Right voters who prize clout could back Waters, a senior committee leader; they give up a business-minded Republican and accept the payments-to-family concern.'],
      ['PR', 'Morales', '●', 'Populist Right voters see a vote for Morales as a rebuke of one of Trump’s sharpest critics.'],
      ['CC', 'Morales', '●', 'Committed Conservatives back the party-endorsed Republican who wants smaller government and lower taxes.'],
      ['FF', 'Morales', '●', 'Faith and Flag Conservatives favor the Republican endorsed by the California Republican Assembly who stresses strong families and secure borders.'],
    ]),
    counterArguments: [
      'EL (Waters ●): But consider the documented campaign payments to her daughter for slate-mailer work, which raise self-dealing questions even though no violation has been found.',
      'PR (Morales ●): But consider that Morales has never held office and reported no FEC totals, so a protest vote is unlikely to change who represents the district.',
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
      ['PL', 'Barragán', '●', 'Progressive Left voters back a Democrat who wants hydrofluoric acid banned at local refineries and defends abortion rights.'],
      ['EL', 'Barragán', '●', 'Establishment Liberals value an Energy and Commerce member with a decade of seniority.'],
      ['DM', 'Barragán', '●', 'Democratic Mainstays stay with the party-endorsed incumbent.'],
      ['OL', 'Barragán', '◐', 'Outsider Left voters may be lukewarm on an incumbent whose caucus chairmanship had staff turmoil, but she is far closer to them than the Republican.'],
      ['SS', 'Barragán', '○', 'Stressed Sideliners may default to the incumbent, though Angel’s health-care-costs message is aimed squarely at them.'],
      ['AR', 'Angel', '◐', 'Ambivalent Right voters may like a health-care manager who pairs border security with legal pathways.', 'Ambivalent Right voters who want clout could back Barragán, an Energy and Commerce member; they give up a Republican vote and Angel’s health-care management background.'],
      ['PR', 'Angel', '●', 'Populist Right voters back the Republican running on secure borders and public safety.'],
      ['CC', 'Angel', '●', 'Committed Conservatives back the Republican nominee as a vote for a Republican House.'],
      ['FF', 'Angel', '●', 'Faith and Flag Conservatives prefer the Republican over a Democrat who opposed the Dobbs decision.'],
    ]),
    counterArguments: [
      'PR (Angel ●): But consider that Angel has never held office and had raised about $14,000 by June 30, so the race is unlikely to be competitive.',
      'EL (Barragán ●): But consider the staff turmoil early in her Hispanic Caucus chairmanship, which some may read as a management concern.',
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
      ['PL', 'Archuleta', '●', 'Progressive Left voters prefer the Democratic incumbent over a candidate running on deregulation and parental rights.'],
      ['EL', 'Archuleta', '●', 'Establishment Liberals value a committee chair with recent bills signed and a long public-service résumé.'],
      ['DM', 'Archuleta', '●', 'Democratic Mainstays back the party-endorsed incumbent and veteran.'],
      ['OL', 'Archuleta', '◐', 'Outsider Left voters may find Archuleta conventional, but he is far closer to their views than the Republican.'],
      ['SS', 'Archuleta', '○', 'Stressed Sideliners may default to the familiar incumbent, though Martinez’s cost-of-living pitch targets their worries.'],
      ['AR', 'Martinez', '◐', 'Ambivalent Right voters may like a small-business owner focused on costs and red tape rather than culture wars.', 'Ambivalent Right voters who want proven competence could back Archuleta, a veteran and former mayor who chairs a committee; they give up Martinez’s deregulation push.'],
      ['PR', 'Martinez', '●', 'Populist Right voters back an outsider who blames Sacramento policy for high costs and crime.'],
      ['CC', 'Martinez', '●', 'Committed Conservatives back the Republican on lower taxes, less regulation and law enforcement.'],
      ['FF', 'Martinez', '●', 'Faith and Flag Conservatives favor the candidate pledging to defend parental rights.'],
    ]),
    counterArguments: [
      'PR (Martinez ●): But consider that Martinez has no legislative record and her stated priorities have shifted between profiles, while Archuleta has bills signed this year.',
      'EL (Archuleta ●): But consider that his 2024 proposal to tie driver’s licenses to Selective Service registration would have made a state service depend on a federal military requirement.',
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
      ['PL', 'Gabriel', '●', 'Progressive Left voters back a legislator with strong civil-liberties, environmental and gun-safety records.'],
      ['EL', 'Gabriel', '●', 'Establishment Liberals value the Budget chair’s influence and long list of enacted bills.'],
      ['DM', 'Gabriel', '●', 'Democratic Mainstays back the party-endorsed incumbent.'],
      ['OL', 'Gabriel', '◐', 'Outsider Left voters may see Gabriel as leadership insider, but his record is far closer to theirs than the Republican’s.'],
      ['SS', 'Gabriel', '○', 'Stressed Sideliners may default to the incumbent, though Schroeder’s gas-tax message speaks to their budgets.'],
      ['AR', 'Schroeder', '◐', 'Ambivalent Right voters may like a veteran teacher focused on basics in schools and lower gas taxes.', 'Ambivalent Right voters who want proven competence could back Gabriel, who chairs the Budget Committee; they give up Schroeder’s tax-cut agenda.'],
      ['PR', 'Schroeder', '●', 'Populist Right voters back the candidate opposing mileage and gas taxes and calling for Prop 36 funding.'],
      ['CC', 'Schroeder', '●', 'Committed Conservatives back the Republican on lower taxes, fewer regulations and fiscal responsibility.'],
      ['FF', 'Schroeder', '●', 'Faith and Flag Conservatives favor her stands on girls’ sports and parental involvement in schools.'],
    ]),
    counterArguments: [
      'PR (Schroeder ●): But consider that Schroeder lost this seat by about 26 points in 2024 and has no legislative record, while Gabriel controls the Assembly budget.',
      'PL (Gabriel ●): But consider that as Budget chair he is a leadership insider, and his 89% Sierra Club score trails his perfect marks from civil-liberties and reproductive-rights groups.',
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
      ['PL', 'Rubio', '◐', 'Progressive Left voters will find her environmental scores low, but she still beats a Republican on abortion, LGBTQ rights and labor.'],
      ['EL', 'Rubio', '●', 'Establishment Liberals value a seasoned committee chair with a pragmatic, business-friendly record.'],
      ['DM', 'Rubio', '●', 'Democratic Mainstays back the party-endorsed former teacher and incumbent.'],
      ['OL', 'Rubio', '◐', 'Outsider Left voters may dislike her industry-friendly votes but have no better option on the ballot.'],
      ['SS', 'Rubio', '○', 'Stressed Sideliners may default to the familiar local incumbent when the challenger has no visible campaign.'],
      ['AR', 'Rubio', '○', 'Ambivalent Right voters who like moderation may find Rubio’s 75% Chamber of Commerce score more relevant than Tran’s unknown platform.'],
      ['PR', 'Tran', '●', 'Populist Right voters back the only Republican as a check on one-party rule in Sacramento.'],
      ['CC', 'Tran', '●', 'Committed Conservatives back the Republican on the ballot.'],
      ['FF', 'Tran', '◐', 'Faith and Flag Conservatives lean to the Republican despite no published platform.', 'Faith and Flag Conservatives who value experience could back Rubio, a former teacher and committee chair; they accept her Democratic positions on abortion and LGBTQ rights.'],
    ]),
    counterArguments: [
      'PR (Tran ●): But consider that Tran has published no platform, so voters cannot tell what he would do in office.',
      'PL (Rubio ◐): But consider her 33% California Environmental Voters and 20% Sierra Club scores, which put her at odds with climate advocates.',
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
      ['PL', 'Fong', '●', 'Progressive Left voters back a Democrat protecting students affected by immigration enforcement and expanding college access.'],
      ['EL', 'Fong', '●', 'Establishment Liberals value an experienced committee chair with a background in city and college governance.'],
      ['DM', 'Fong', '●', 'Democratic Mainstays back the party-endorsed incumbent.'],
      ['OL', 'Fong', '◐', 'Outsider Left voters may find Fong conventional but much closer to their views than the Republican.'],
      ['SS', 'Fong', '○', 'Stressed Sideliners may default to the incumbent, though Liu’s anti-tax message touches their budgets.'],
      ['AR', 'Liu', '◐', 'Ambivalent Right voters may like an attorney and small-business owner who opposes new taxes and backs police.', 'Ambivalent Right voters who want proven competence could back Fong, who chairs Higher Education; they give up Liu’s anti-tax agenda.'],
      ['PR', 'Liu', '●', 'Populist Right voters back the candidate who supports police and opposes tax increases.'],
      ['CC', 'Liu', '●', 'Committed Conservatives back the Republican on lower taxes, less regulation and merit-based schools.'],
      ['FF', 'Liu', '●', 'Faith and Flag Conservatives favor his emphasis on parental involvement in education and law enforcement.'],
    ]),
    counterArguments: [
      'PR (Liu ●): But consider that Liu lost this seat by 24 points in 2024 and has no legislative record.',
      'EL (Fong ●): But consider that Fong has no published public-safety or tax platform, issues voters often rank highly.',
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
      ['PL', 'Caloza', '●', 'Progressive Left voters back a Democrat focused on housing affordability and gender-based violence.'],
      ['EL', 'Caloza', '●', 'Establishment Liberals value her government résumé and place on the Speaker’s leadership team.'],
      ['DM', 'Caloza', '●', 'Democratic Mainstays back the party-endorsed incumbent.'],
      ['OL', 'Caloza', '◐', 'Outsider Left voters may see her as a leadership loyalist, but she is far closer to their views than the Republican.'],
      ['SS', 'Caloza', '○', 'Stressed Sideliners may default to the incumbent, though Anderson’s lower-tax pitch touches their budgets.'],
      ['AR', 'Anderson', '○', 'Ambivalent Right voters may lean to a lower-tax, less-regulation message, though Anderson has published few details.', 'Ambivalent Right voters who want proven competence could back Caloza, a former senior aide to the attorney general; they give up Anderson’s tax-cut message.'],
      ['PR', 'Anderson', '●', 'Populist Right voters back the only Republican as a check on one-party rule.'],
      ['CC', 'Anderson', '●', 'Committed Conservatives back the Republican on lower taxes and less regulation.'],
      ['FF', 'Anderson', '●', 'Faith and Flag Conservatives favor her call to “build a moral society.”'],
    ]),
    counterArguments: [
      'PR (Anderson ●): But consider that Anderson has no listed occupation, record or detailed platform, and won 14% in the primary.',
      'EL (Caloza ●): But consider that she is in her first term, so her own legislative record is still thin.',
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
      ['PL', 'Gonzalez', '●', 'Progressive Left voters back a Democrat pushing free community college and housing affordability.'],
      ['EL', 'Gonzalez', '●', 'Establishment Liberals value a productive member of Assembly leadership.'],
      ['DM', 'Gonzalez', '●', 'Democratic Mainstays back the party-endorsed incumbent and former county party chair.'],
      ['OL', 'Gonzalez', '◐', 'Outsider Left voters may see a party insider, but the only alternative is an unknown Republican write-in.'],
      ['SS', 'Gonzalez', '○', 'Stressed Sideliners have only one visible campaign to judge.'],
      ['AR', 'Gonzalez', '○', 'Ambivalent Right voters may prefer a known legislator focused on metal theft and abandoned RVs over a candidate with no platform.'],
      ['PR', 'Briseno', '○', 'Populist Right voters may cast a protest vote for the only Republican, despite knowing nothing of her views.', 'Populist Right voters who want effective representation could back Gonzalez, whose bills target metal theft and abandoned RVs; they give up a protest vote.'],
      ['CC', 'Briseno', '○', 'Committed Conservatives may back the Republican label, though she has no stated platform.', 'Committed Conservatives who value competence could back Gonzalez, an experienced legislator; they accept his progressive priorities.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no information on which to judge the Republican write-in.', 'Faith and Flag Conservatives who value experience could back Gonzalez, a seasoned legislator, while accepting his Democratic positions.'],
    ]),
    counterArguments: [
      'PR (Briseno ○): But consider that Briseno has published nothing about her views, so a vote for her is a vote for a party label alone.',
      'EL (Gonzalez ●): But consider that he faces no real competition, which leaves voters without a debate over his record.',
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
      ['PL', 'Bryan', '●', 'Progressive Left voters back a Progressive Caucus member who closed an urban oil field and ended prison gerrymandering.'],
      ['EL', 'Bryan', '●', 'Establishment Liberals value a committee chair and former majority leader endorsed by the state party.'],
      ['DM', 'Bryan', '●', 'Democratic Mainstays follow the state party, which endorsed Bryan.'],
      ['OL', 'Bryan', '◐', 'Outsider Left voters may like Brown’s frontline background, but Bryan’s organizer roots and criminal-justice record fit them well.'],
      ['SS', 'Brown', '○', 'Stressed Sideliners may relate to a school social worker focused on mental health and jobs over a Sacramento leader.', 'Stressed Sideliners who want someone able to deliver could back Bryan, who has passed several laws; they give up Brown’s frontline perspective.'],
      ['AR', '—', '—', 'Ambivalent Right voters have no Republican option and no clear fit between two Democrats.', 'Ambivalent Right voters who value experience could back Bryan, a committee chair; they accept his progressive record.'],
      ['PR', 'Brown', '○', 'Populist Right voters with no Republican option may lean to the newcomer over a former member of Assembly leadership.', 'Populist Right voters who want effectiveness could back Bryan, who chairs Natural Resources; they give up an anti-incumbent vote.'],
      ['CC', '—', '—', 'Committed Conservatives have no fit between two left-of-center Democrats.', 'Committed Conservatives who value experience could back Bryan, a seasoned legislator, while accepting his progressive positions.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no fit between two left-of-center Democrats.', 'Faith and Flag Conservatives who prize steady representation could back Bryan; they accept his progressive positions.'],
    ]),
    counterArguments: [
      'SS (Brown ○): But consider that Brown has published positions on only a few issues and has no record in office.',
      'EL (Bryan ●): But consider that Brown brings frontline school mental-health experience the incumbent lacks, and some voters may want a fresh voice after five years.',
    ],
  },
];
