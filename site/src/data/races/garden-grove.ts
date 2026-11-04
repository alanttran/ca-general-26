import type { CandidateQualification, CriterionAssessment, ExperienceLevel, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Garden Grove-area contests (ZIP 92841): North Orange County and Coast community college trustees,
 * Garden Grove Unified Trustee Area 2, Orange County Supervisor District 4 (Stanton part of the ZIP),
 * Garden Grove Mayor, and Garden Grove City Council Districts 1 and 3.
 * Research current as of Nov 3, 2026. Candidates and ballot designations from the OC Registrar's
 * Contest/Candidate Proof List (print date Aug 28, 2026) and county voter-guide candidate statements;
 * party endorsements from the Democratic Party of Orange County's endorsement page and press reports.
 */

function qual(
  level: ExperienceLevel,
  summary: string,
  criteria: [id: string, assessment: CriterionAssessment['assessment'], evidence: string][],
): CandidateQualification {
  return {
    level,
    legal: 'meets',
    summary,
    criteria: criteria.map(([criterionId, assessment, evidence]) => ({ criterionId, assessment, evidence })),
  };
}

const NO_MONEY =
  'No campaign finance totals located as of Nov 3, 2026; filings are posted on the City of Garden Grove or Orange County campaign-disclosure sites.';
const NO_MONEY_SCHOOL =
  'No campaign finance totals located as of Nov 3, 2026; school and college trustee filings are posted with the Orange County Registrar of Voters.';
const OC_STATEMENTS = 'https://ocvote.gov/candidates/candidate-filing-log-with-statements';
const OC_CANDLOG = 'https://ocvote.gov/fileadmin/user_upload/data/candlog/GEN2026/candlog.pdf';
const OC_DEMS = 'https://orangecountydemocrats.com/oc-endorsements-2';
const VIETRISE = 'https://vietrise.org/general-election-2026-what-are-the-important-races-in-orange-county-to-know-about/';

const COLLEGE_CRITERIA = [
  { id: 'governance', label: 'Board governance and oversight of a chancellor', detail: 'Trustees hire and evaluate the chancellor, adopt policy and answer to voters in their area.' },
  { id: 'budget', label: 'Public budget and bond oversight', detail: 'The board adopts a budget in the hundreds of millions of dollars and oversees voter-approved construction bonds.' },
  { id: 'education', label: 'Knowledge of community-college instruction and workforce programs', detail: 'Transfer, career-technical and adult education programs are the core of the job.' },
  { id: 'community', label: 'Ties to the trustee area and its students', detail: 'Trustees represent one area of a multi-city district.' },
];

export const RACES_GARDEN_GROVE: Race[] = [
  // ───────────────────────────── NOCCCD Trustee Area 1 ─────────────────────────────
  {
    id: 'nocccd-trustee-area-1',
    categoryId: 'school',
    title: 'North Orange County Community College District, Trustee Area 1',
    tldrLabel: 'NOCCCD Area 1',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The North Orange County Community College District runs Fullerton College, Cypress College and North Orange Continuing Education. Its seven trustees, each elected from an area, hire the chancellor, adopt the budget, set policy on programs and campuses, and oversee bond-funded construction.',
      'Area 1 takes in Cypress, Los Alamitos, Stanton and parts of Seal Beach, Garden Grove, Westminster and Anaheim (per the challenger’s statement). The choice is between a long-serving incumbent who is this year’s board president and a state prosecutor who says the board has too often ignored the community.',
    ],
    introParagraphs: [
      'Barbara Dunsheath, a history professor and the board’s 2026 president, is seeking another term. Rama R. Maline, a state prosecutor and law instructor, is challenging her. There was no June primary; the seat is decided on Nov. 3. In ZIP 92841 this contest is on about 38% of ballots (the northern Garden Grove precincts); the rest of the ZIP is in the Coast district.',
    ],
    legalRequirements: 'Registered voter residing in Trustee Area 1; at least 18 years old; not an employee of the district.',
    qualificationCriteria: COLLEGE_CRITERIA,
    readingLinks: [
      { label: 'OC Registrar: candidate statements', url: OC_STATEMENTS, summary: 'Select 2026 General Election, then North OC College Dist, Trustee Area 1 (contest 3034).' },
      { label: 'Democratic Party of Orange County endorsements', url: OC_DEMS, summary: 'Party endorsement list (lists Dunsheath for Area 1).' },
    ],
    candidates: [
      {
        id: 'barbara-dunsheath',
        name: 'Barbara Dunsheath',
        party: 'NP',
        role: 'Trustee, North Orange County Community College District, Area 1',
        campaignUrl: 'https://barbfornorthorange.com',
        bio: [
          'Dunsheath is a history professor with a doctorate in educational leadership. She is the NOCCCD board’s 2026 president, president of the Community College League of California’s trustee board, chair of the Community Colleges Women’s Caucus and a former accreditation commissioner (her statement).',
          'Her statement cites a balanced budget, new STEM and veterans’ buildings at Cypress College, a 3.3% rise in degrees awarded and 5,729 certificate completers, and backs community-college bachelor’s degrees, dual enrollment and the Promise free-college program.',
        ],
        recordVsChange:
          'Dunsheath’s case is continuity: a sitting board president with statewide trustee leadership roles. Maline’s case for change is that the board has not listened to the community; he does not name specific decisions in his statement.',
        scorecard: [
          { topic: 'Budget/oversight', position: '✓ Cites a balanced budget and says she guards against waste', comparison: 'Maline promises fiscal responsibility and transparency.' },
          { topic: 'Workforce/career education', position: '✓ Cites certificate completers; backs baccalaureate degrees and dual enrollment', comparison: 'Maline wants to expand career and technical training.' },
          { topic: 'Affordability', position: '✓✓ Backs the Promise free-college program', comparison: 'Maline does not address tuition.' },
          { topic: 'Community responsiveness', position: '~ Lists wide community involvement; offers direct email and phone', comparison: 'Maline says the board has too often ignored the community.' },
        ],
        money: NO_MONEY_SCHOOL,
        endorsements: 'Democratic Party of Orange County (endorsement page, Nov 2026). Her statement says she has bipartisan support.',
        qualification: qual('extensive', 'Dunsheath is the sitting Area 1 trustee and board president, with statewide trustee leadership roles.', [
          ['governance', 'met', 'NOCCCD trustee and 2026 board president; president of the Community College League trustee board.'],
          ['budget', 'met', 'Votes on district budgets and bond-funded buildings as a trustee.'],
          ['education', 'met', 'History professor; former accreditation commissioner.'],
          ['community', 'met', 'Represents Area 1; president-elect of the Cypress College Foundation.'],
        ]),
      },
      {
        id: 'rama-maline',
        name: 'Rama R. Maline',
        party: 'NP',
        role: 'State Prosecutor/Professor',
        campaignUrl: 'https://www.voterama.org',
        bio: [
          'Maline says he has served nearly 30 years as a California state prosecutor working on organized crime and fraud cases, with more than thirty published legal opinions, and has taught legal courses for nearly 20 years.',
          'As former treasurer of a statewide attorneys’ association, he says he grew its reserves from $500,000 to over $6 million. He promises to prioritize student success and workforce readiness and to insist on fiscal responsibility and transparency.',
        ],
        scorecard: [
          { topic: 'Budget/oversight', position: '✓ Fiscal responsibility and transparency; cites reserve growth at an attorneys’ association', comparison: 'Dunsheath cites a balanced district budget.' },
          { topic: 'Workforce/career education', position: '✓ Expand career and technical training', comparison: 'Dunsheath cites certificate growth and dual enrollment.' },
          { topic: 'Affordability', position: '? No stated position on tuition or the Promise program', comparison: 'Dunsheath backs free-college Promise.' },
          { topic: 'Community responsiveness', position: '✓ Says the board "has too often ignored the community"', comparison: 'Dunsheath is the board president.' },
        ],
        money: NO_MONEY_SCHOOL,
        endorsements: 'None verified as of Nov 3, 2026.',
        qualification: qual('some', 'Maline has long legal and part-time teaching experience but no documented college-board or public-budget role.', [
          ['governance', 'not-met', 'No public board service documented.'],
          ['budget', 'partial', 'Former treasurer of a statewide attorneys’ association (his statement).'],
          ['education', 'partial', 'Has taught legal courses for nearly 20 years (his statement); no college administration role found.'],
          ['community', 'unknown', 'Statement names the Area 1 cities; length of residence not stated.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['LP', 'Dunsheath', '◐', 'Leftward Progressives want free and expanded public college, and Barbara Dunsheath backs the Promise free-college program, community-college bachelor’s degrees and dual enrollment, though she is an establishment incumbent (the county Democratic Party also backs her).'],
      ['LL', 'Dunsheath', '●', 'Loyal Liberals value institutional experience and expert leadership, and Barbara Dunsheath is the board president, a history professor with a doctorate in educational leadership and a former accreditation commissioner (the county Democratic Party also backs her).'],
      ['LO', 'Dunsheath', '○', 'Left-Out Left voters want practical help for working students more than a change of faces, and lean weakly to Barbara Dunsheath’s free-college and certificate programs over a challenger who offers no specifics on cost.'],
      ['OO', 'Dunsheath', '◐', 'Order and Opportunity Left voters prize opportunity and steady management, and Barbara Dunsheath points to more degrees, 5,729 certificate completers and a balanced budget.'],
      ['TM', 'Dunsheath', '○', 'Tuned-Out Middle voters judge by concrete help with costs, and a weak lean goes to Barbara Dunsheath’s backing for the Promise free-college program.'],
      ['PP', 'Dunsheath', '◐', 'Pragmatic and Polite Right voters reward experience and incremental stewardship, and Barbara Dunsheath has led the board and statewide trustee groups and kept a balanced budget.'],
      ['UR', 'Maline', '○', 'Unconventional Right voters like a plain-spoken outsider, and lean to Rama Maline, a prosecutor who says the board has ignored the community and promises fiscal transparency.', 'An experience-first Unconventional Right voter could back Barbara Dunsheath, the board president with years of budget and accreditation work; that means keeping a long-serving insider instead of an outsider who promises more scrutiny.'],
      ['FC', 'Maline', '○', 'Faith First Conservatives value law and order and fiscal discipline, and lean weakly to Rama Maline, a career prosecutor of organized crime and fraud who promises fiscal responsibility, with no social-issue contrast in the race.', 'An experience-first Faith First Conservative could back Barbara Dunsheath, whose statement lists Sunday-school teaching and who has led the board and balanced its budget; the trade-off is less change on a board Maline says ignores the community.'],
      ['NA', 'Maline', '◐', 'No Apologies Right voters distrust entrenched institutions and experts, and favor Rama Maline, a prosecutor who says the board has too often ignored the community, over its sitting president.', 'An experience-first No Apologies Right voter could back Barbara Dunsheath for her years running the board and its budget; that means accepting the establishment incumbent instead of an outside critic.'],
    ]),
    counterArguments: [
      'LL (Dunsheath ●): But consider Maline if board responsiveness is your concern, because a long-serving board president is the person most responsible for whatever the board has not heard.',
      'NA (Maline ◐): But consider that Maline’s statement names no specific board decision he would reverse, because a vote for change is hard to judge without one.',
    ],
  },

  // ───────────────────────────── Coast CCD Trustee Area 1 ─────────────────────────────
  {
    id: 'coast-ccd-trustee-area-1',
    categoryId: 'school',
    title: 'Coast Community College District, Trustee Area 1',
    tldrLabel: 'Coast College Area 1',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The Coast Community College District runs Golden West, Orange Coast and Coastline colleges. Its five area trustees hire the chancellor, adopt the budget, set policy on programs and campuses, and oversee bond-funded construction.',
      'Area 1 is open: trustee Jim Moreno’s term ends in December 2026 and he is not on the ballot. Three newcomers to the board offer different emphases: a Seal Beach councilmember with fire-authority budget experience, a Huntington Beach finance commissioner backed by Republican officials, and a Golden West graduate focused on trade training.',
    ],
    introParagraphs: [
      'There was no June primary; the seat is decided on Nov. 3 (four filed, three qualified). In ZIP 92841 this contest reaches only about 11% of ballots: the small Stanton part of the ZIP and two west Garden Grove precincts. Most of the ZIP’s Coast district voters are in Area 2, which is not up.',
    ],
    legalRequirements: 'Registered voter residing in Trustee Area 1; at least 18 years old; not an employee of the district.',
    qualificationCriteria: COLLEGE_CRITERIA,
    readingLinks: [
      { label: 'OC Registrar: candidate statements', url: OC_STATEMENTS, summary: 'Select 2026 General Election, then Coast Comm College Dist, Trustee Area 1 (contest 3042).' },
      { label: 'Coast Colleges: Board of Trustees', url: 'https://www.cccd.edu/boardoftrustees/meetourtrustees.cfm', summary: 'Current trustees and their terms.' },
    ],
    candidates: [
      {
        id: 'joe-kalmick',
        name: 'Joe Kalmick',
        party: 'NP',
        role: 'City of Seal Beach City Councilmember',
        bio: [
          'Kalmick is finishing eight years on the Seal Beach City Council and is vice chair of the Orange County Fire Authority board, which he says manages a $600 million budget. He owned a small business in Seal Beach for 40 years and holds a B.A. in psychology from UCLA; he is now retired.',
          'He says he would bring budget and labor-negotiation experience to the board and keep communication open among faculty, staff and the chancellor’s office.',
        ],
        scorecard: [
          { topic: 'Budget/oversight', position: '✓✓ Multiyear balanced city budgets; vice chair of a $600M fire-authority board', comparison: 'Edsell serves on Huntington Beach’s finance commission; Kauwe has no budget role.' },
          { topic: 'Workforce/career education', position: '? No specific program proposal', comparison: 'Kauwe and Edsell both stress trades and career training.' },
          { topic: 'Labor/faculty relations', position: '✓ Cites negotiations with labor groups "satisfactory for all concerned"', comparison: 'Neither opponent addresses it.' },
          { topic: 'Campus safety', position: '? Not addressed', comparison: 'Edsell wants closer work with law enforcement.' },
        ],
        money: NO_MONEY_SCHOOL,
        endorsements: 'Democratic Party of Orange County (endorsement page, Nov 2026).',
        qualification: qual('substantial', 'Kalmick has eight years of elected city service and regional fire-authority budget oversight, but no college-board experience.', [
          ['governance', 'partial', 'Seal Beach councilmember for eight years; OCFA board vice chair; no college board service.'],
          ['budget', 'met', 'Multiyear city budgets; OCFA board with a budget he puts at $600M.'],
          ['education', 'not-met', 'No community-college role documented.'],
          ['community', 'met', 'Seal Beach resident and business owner for 40 years.'],
        ]),
      },
      {
        id: 'ashton-kauwe',
        name: 'Ashton Kauwe',
        party: 'NP',
        role: 'Office Administrator',
        bio: [
          'Kauwe is a Golden West College graduate who works as an office administrator. He wants the district to become a hub for training and certifying welders, electricians and other trade workers, working with high schools to show students those careers, while still supporting transfer students.',
        ],
        scorecard: [
          { topic: 'Workforce/career education', position: '✓✓ Expand trade and technical training; partner with high schools', comparison: 'Edsell also backs career education; Kalmick offers no program specifics.' },
          { topic: 'Budget/oversight', position: '? Not addressed', comparison: 'Kalmick and Edsell both cite budget roles.' },
          { topic: 'Transfer pathways', position: '✓ Keep supporting students moving on to universities', comparison: 'Edsell wants measurable transfer gains.' },
          { topic: 'Campus safety', position: '? Not addressed', comparison: 'Edsell wants closer work with law enforcement.' },
        ],
        money: NO_MONEY_SCHOOL,
        endorsements: 'None verified as of Nov 3, 2026.',
        qualification: qual('limited', 'Kauwe is a district alumnus with no documented public office, board or budget experience.', [
          ['governance', 'not-met', 'No board or elected service documented.'],
          ['budget', 'not-met', 'No public budget role documented.'],
          ['education', 'partial', 'Golden West College graduate; clear proposal on trade programs.'],
          ['community', 'unknown', 'Residence history not stated.'],
        ]),
      },
      {
        id: 'austin-edsell',
        name: 'Austin J. Edsell',
        party: 'NP',
        role: 'Educator/Finance Commissioner',
        bio: [
          'Edsell is a Coast district alumnus, an educator and a Huntington Beach finance commissioner who has lived in the area for more than 20 years. He has hosted career and children’s resource fairs.',
          'He promises to expand career and technical training alongside university transfer, strengthen campus safety with law enforcement, keep costs down through long-term budgeting, and demand measurable gains in graduation, transfer and employment rates.',
        ],
        scorecard: [
          { topic: 'Workforce/career education', position: '✓ Expand career education and workforce partnerships', comparison: 'Kauwe focuses most on trades; Kalmick offers no specifics.' },
          { topic: 'Budget/oversight', position: '✓ Huntington Beach finance commissioner; long-term planning and transparency', comparison: 'Kalmick has a larger budget record.' },
          { topic: 'Campus safety', position: '✓ Work with law enforcement on emergency planning and response', comparison: 'Neither opponent addresses it.' },
          { topic: 'Accountability', position: '✓ Measurable targets for graduation, transfer and employment', comparison: 'Neither opponent proposes metrics.' },
        ],
        money: NO_MONEY_SCHOOL,
        endorsements: 'Per his statement: Supervisor Janet Nguyen, Assemblymember Diane Dixon, State Sen. Tony Strickland, Huntington Beach Mayor Casey McKeon, Seal Beach Mayor Lisa Landau, Garden Grove Mayor Stephanie Klopfenstein and OC Board of Education Trustee Mari Barke.',
        qualification: qual('some', 'Edsell is an educator and city finance commissioner without elected or college-board experience.', [
          ['governance', 'not-met', 'No elected or governing-board service documented; serves on an appointed city commission.'],
          ['budget', 'partial', 'Huntington Beach Finance Commissioner (advisory).'],
          ['education', 'partial', 'Educator and Coast district alumnus; institution and level not stated.'],
          ['community', 'met', 'Area resident for more than 20 years (his statement).'],
        ]),
      },
    ],
    crossTypology: ct([
      ['LP', 'Kalmick', '◐', 'Leftward Progressives favor labor-friendly governance, and Joe Kalmick stresses bargaining with faculty and staff that was "satisfactory for all concerned," while Edsell emphasizes law enforcement on campus (the county Democratic Party also backs Kalmick).'],
      ['LL', 'Kalmick', '●', 'Loyal Liberals value experience and institutional competence, and Joe Kalmick brings eight years of balanced city budgets and leadership of a $600 million fire-authority board (the county Democratic Party also backs him).'],
      ['LO', 'Kauwe', '○', 'Left-Out Left voters want practical paths to good-paying jobs for working people, and lean to Ashton Kauwe, a Golden West graduate whose whole platform is training welders and electricians for six-figure trade careers.', 'An experience-first Left-Out Left voter could back Joe Kalmick, who has run city and fire-authority budgets for eight years; that means trading Kauwe’s focused trades agenda for a retired councilmember with no program specifics.'],
      ['OO', 'Kalmick', '◐', 'Order and Opportunity Left voters want steady, competent management of public institutions, and Joe Kalmick’s fire-authority and city budget experience fits, though Edsell’s campus-safety focus also appeals.'],
      ['TM', 'Kauwe', '○', 'Tuned-Out Middle voters care about jobs and wages, and lean weakly to Ashton Kauwe’s plan to train students for high-paying trades.', 'An experience-first Tuned-Out Middle voter could back Joe Kalmick, who has balanced city budgets and overseen a large fire agency; the trade-off is a less specific jobs message.'],
      ['PP', 'Kalmick', '◐', 'Pragmatic and Polite Right voters reward experience and fiscal prudence over party, and Joe Kalmick has the longest record of balanced budgets and labor peace in the field.'],
      ['UR', 'Edsell', '◐', 'Unconventional Right voters want public safety and lean, accountable spending, and Austin Edsell pairs campus-safety planning with law enforcement with measurable graduation, transfer and job targets.'],
      ['FC', 'Edsell', '◐', 'Faith First Conservatives value law and order and limited, careful spending, and Austin Edsell promises campus-safety work with police and first responders and responsible long-term budgeting (Sen. Tony Strickland and Trustee Mari Barke also back him).'],
      ['NA', 'Edsell', '◐', 'No Apologies Right voters want tough public safety and results over institutional assurances, and Austin Edsell pairs closer work with law enforcement with hard targets the colleges must meet (Huntington Beach Mayor Casey McKeon also backs him).'],
    ]),
    counterArguments: [
      'LL (Kalmick ●): But consider Edsell or Kauwe if program results matter most, because Kalmick’s statement offers no specific plan for instruction or career programs.',
      'FC (Edsell ◐): But consider Kalmick, because he has managed far larger budgets and labor negotiations, and Edsell’s finance-commission role is advisory.',
    ],
  },

  // ───────────────────────────── GGUSD Trustee Area 2 ─────────────────────────────
  {
    id: 'ggusd-trustee-area-2',
    categoryId: 'school',
    title: 'Garden Grove Unified School District, Trustee Area 2',
    tldrLabel: 'GGUSD Area 2',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Garden Grove Unified’s five-member board sets policy, adopts the budget and hires the superintendent for one of Orange County’s largest districts, with 68 schools serving Garden Grove and parts of neighboring cities.',
      'Area 2 pits a trustee first elected in 2002 against a former district PTA council president. The incumbent runs on the district’s academic record and its school modernization; the challenger, endorsed by the county Democratic Party, says parents need a stronger voice and wants a focus on literacy, screen time and student mental health.',
    ],
    introParagraphs: [
      'Lan Quoc Nguyen has served on the board since 2002 and won this area in 2022. Charlene Cuellar, a nurse and mother of three GGUSD students, is challenging him (three filed, two qualified). There was no June primary. In ZIP 92841 this contest is on about 48% of ballots; the rest of the ZIP is in Area 1, which is not up.',
    ],
    legalRequirements: 'Registered voter residing in Trustee Area 2; at least 18 years old; not an employee of the district.',
    qualificationCriteria: [
      { id: 'governance', label: 'School-board governance and superintendent oversight', detail: 'Trustees hire and evaluate the superintendent and set district policy.' },
      { id: 'budget', label: 'Budget and facilities oversight', detail: 'The board adopts a large budget and oversees bond-funded school modernization.' },
      { id: 'academics', label: 'Knowledge of instruction and student outcomes', detail: 'Trustees judge curriculum, test scores and college readiness.' },
      { id: 'community', label: 'Ties to families and schools in the area', detail: 'Trustees represent one area and its parents.' },
    ],
    readingLinks: [
      { label: 'OC Registrar: candidate statements', url: OC_STATEMENTS, summary: 'Select 2026 General Election, then Garden Grove Unified, Trustee Area 2 (contest 3124).' },
      { label: 'GGUSD: Board of Education members', url: 'https://www.ggusd.us/board/members', summary: 'Trustee bios and terms.' },
      { label: 'Ballotpedia: Lan Quoc Nguyen', url: 'https://ballotpedia.org/Lan_Quoc_Nguyen', summary: 'Election history.' },
    ],
    candidates: [
      {
        id: 'lan-quoc-nguyen',
        name: 'Lan Quoc Nguyen',
        party: 'NP',
        role: 'Governing Board Member, Garden Grove Unified School District, Trustee Area 2',
        campaignUrl: 'https://www.lannguyen.org',
        bio: [
          'Nguyen was elected to the GGUSD board in 2002 (district board page), served as board president, and won Trustee Area 2 in 2022. He is a former Garden Grove planning commissioner and chairs Legal Assistance for Vietnamese Asylum Seekers (Ballotpedia).',
          'His statement credits the board with a college-readiness rate that rose from 25% in 2002 to 65%, a one-to-one computer program, and more than $1 billion to modernize all 68 schools.',
        ],
        recordVsChange:
          'Nguyen’s case is a long record of district results he helped oversee. Cuellar’s case for change is that parents need a stronger voice after more than two decades with the same trustee, and that the district should refocus on literacy, screens and mental health.',
        scorecard: [
          { topic: 'Academics', position: '✓✓ Cites college readiness rising from 25% to 65% and U.S. News rankings for all seven high schools', comparison: 'Cuellar wants a return to fundamentals and literacy.' },
          { topic: 'Facilities/budget', position: '✓ Over $1B spent modernizing all 68 schools', comparison: 'Cuellar promises to protect tax dollars.' },
          { topic: 'Technology', position: '✓ One computer per student at every school', comparison: 'Cuellar wants to rethink children’s relationship with screens.' },
          { topic: 'Parent voice', position: '? Not addressed in his statement', comparison: 'Cuellar makes it her central theme.' },
        ],
        money: NO_MONEY_SCHOOL,
        endorsements: 'None verified as of Nov 3, 2026.',
        qualification: qual('extensive', 'Nguyen has served on this board since 2002, including as president.', [
          ['governance', 'met', 'GGUSD trustee since 2002; board president (Dec 2016).'],
          ['budget', 'met', 'Board votes on budgets and a modernization program he puts at over $1B.'],
          ['academics', 'met', 'Two decades of board oversight of district outcomes.'],
          ['community', 'met', 'Former Garden Grove planning commissioner; Area 2 trustee since 2018.'],
        ]),
      },
      {
        id: 'charlene-cuellar',
        name: 'Charlene Cuellar',
        party: 'NP',
        role: 'Community Volunteer',
        campaignUrl: 'https://www.charlenecuellar.com',
        bio: [
          'Cuellar is a former president of the Garden Grove Unified Council of PTAs, a nurse who started in business, and the mother of three GGUSD students. She became more involved in schools during pandemic distance learning.',
          'As PTA council president she says she managed budgets and helped fund libraries, field trips, classroom supplies and sports equipment. She wants to focus on literacy, social skills, student mental health and how children use screens.',
        ],
        scorecard: [
          { topic: 'Academics', position: '✓ Back to fundamentals, with a focus on literacy', comparison: 'Nguyen cites college-readiness gains.' },
          { topic: 'Student well-being', position: '✓✓ Mental health, social skills and rethinking screen time', comparison: 'Nguyen highlights one-to-one computers.' },
          { topic: 'Facilities/budget', position: '✓ Promises to protect tax dollars; managed PTA council budgets', comparison: 'Nguyen oversaw a $1B+ modernization.' },
          { topic: 'Parent voice', position: '✓✓ Central theme of her campaign', comparison: 'Nguyen does not address it.' },
        ],
        money: NO_MONEY_SCHOOL,
        endorsements: 'Democratic Party of Orange County (endorsement page, Nov 2026).',
        qualification: qual('some', 'Cuellar has district-wide PTA leadership and nursing experience but no elected or board-governance record.', [
          ['governance', 'partial', 'President of the GGUSD Council of PTAs; no elected board service.'],
          ['budget', 'partial', 'Managed PTA council budgets (her statement).'],
          ['academics', 'partial', 'Active school parent and PTA leader; no instructional role.'],
          ['community', 'met', 'Three children enrolled in GGUSD; long-time school volunteer.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['LP', 'Cuellar', '◐', 'Leftward Progressives want new voices and student mental-health support, and lean to Charlene Cuellar, a nurse and parent leader running on student mental health against a trustee who has served since 2002 (the county Democratic Party also backs her).', 'An experience-first Leftward Progressive could back Lan Nguyen, a trustee since 2002 under whom college readiness rose sharply; that means keeping a long-time incumbent instead of a new parent voice.'],
      ['LL', 'Cuellar', '◐', 'Loyal Liberals value public-health expertise and student well-being, and Charlene Cuellar brings a nurse’s focus on student mental health, literacy and screen time, though they also respect Nguyen’s record (the county Democratic Party also backs her).', 'An experience-first Loyal Liberal could back Lan Nguyen, who has governed the district for more than two decades as its results improved; the trade-off is less attention to the mental-health and screen-time concerns Cuellar raises.'],
      ['LO', 'Cuellar', '◐', 'Left-Out Left voters distrust long-time officeholders and want ordinary parents heard, and Charlene Cuellar, a nurse and former PTA council president, runs on exactly that.', 'An experience-first Left-Out Left voter could back Lan Nguyen, whose board oversaw large gains in college readiness and school modernization; that means keeping the insider they distrust.'],
      ['OO', 'Nguyen', '◐', 'Order and Opportunity Left voters value opportunity and steady institutions, and Lan Nguyen points to college readiness rising from 25% to 65% and modernized schools.'],
      ['TM', 'Cuellar', '○', 'Tuned-Out Middle voters distrust insiders and care about their own children’s basics, and lean weakly to Charlene Cuellar’s focus on literacy and screen time.', 'An experience-first Tuned-Out Middle voter could back Lan Nguyen, who has more than two decades on the board and a record of academic gains; the trade-off is less change.'],
      ['PP', 'Nguyen', '●', 'Pragmatic and Polite Right voters reward experience and incremental progress, and Lan Nguyen’s long tenure coincides with documented gains in college readiness and school facilities.'],
      ['UR', 'Nguyen / Cuellar', '=', 'Unconventional Right voters weigh measurable results against their distrust of entrenched officials: if college-readiness gains and modernized schools matter most, Nguyen; if replacing a trustee in office since 2002 with a parent who promises to guard tax dollars and get back to basics matters more, Cuellar.'],
      ['FC', '—', '—', 'Faith First Conservatives put parental rights and social issues first, but neither statement addresses curriculum, parental-rights policy or other social questions, so there is no values contrast to pick on.', 'An experience-first Faith First Conservative could back Lan Nguyen, a trustee since 2002 whose board oversaw large gains in college readiness and school modernization; that means passing over a parent who promises a stronger voice for families.'],
      ['NA', '—', '—', 'No Apologies Right voters want combative conservatives, and neither a long-serving trustee running on the district’s record nor a PTA leader running on literacy and mental health offers that, so there is no clear fit.', 'An experience-first No Apologies Right voter could back Lan Nguyen, who has more than two decades on the board and a record of academic gains; the trade-off is keeping a long-serving establishment trustee.'],
    ]),
    counterArguments: [
      'PP (Nguyen ●): But consider Cuellar, because more than two decades with the same trustee leaves little room for new ideas, and her PTA leadership shows she can manage budgets and build parent involvement.',
      'LO (Cuellar ◐): But consider that the district’s results improved markedly under Nguyen, because change for its own sake could risk programs that work.',
    ],
  },

  // ───────────────────────────── OC Supervisor District 4 ─────────────────────────────
  {
    id: 'oc-supervisor-d4',
    categoryId: 'county',
    title: 'Orange County Board of Supervisors, District 4',
    tldrLabel: 'OC Supervisor D4',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The five Orange County supervisors oversee about $11 billion a year in county spending, including the sheriff, public health, mental health, homelessness services and disaster response (LAist). District 4 covers Brea, Buena Park, Fullerton, La Habra, Placentia, Stanton and parts of Anaheim.',
      'The seat is open because Supervisor Doug Chaffee, a Democrat, is termed out. The office is nonpartisan, but the runoff splits along party lines and could decide whether Democrats keep their 3-2 board majority. The next board inherits the fallout from the Andrew Do corruption case and cuts in state and federal funding.',
    ],
    introParagraphs: [
      'Buena Park Mayor Connor Traut (a Democrat) and Orange County Board of Education Trustee Tim Shaw (a Republican) were the top two in the June 2 primary, with Traut first. In ZIP 92841 only the Stanton part (about 9% of ballots) is in District 4; the Garden Grove part is in District 1, which is not up.',
    ],
    legalRequirements: 'Registered voter residing in Supervisorial District 4 at the time of filing; at least 18 years old.',
    qualificationCriteria: [
      { id: 'budget', label: 'Large-government budget and fiscal oversight', detail: 'The board adopts an $11 billion budget heavily dependent on state and federal funds.' },
      { id: 'safety', label: 'Public safety and emergency-services oversight', detail: 'Supervisors fund the sheriff, district attorney and disaster response.' },
      { id: 'regional', label: 'Regional agency experience (transportation, fire, health)', detail: 'Supervisors sit on OCTA, CalOptima and other regional boards.' },
      { id: 'housing', label: 'Housing and homelessness policy', detail: 'The county runs shelters, mental-health services and housing funds.' },
    ],
    readingLinks: [
      { label: 'LAist: OC Supervisor District 4 voter guide (Sept 24, 2026; updated Nov 1)', url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-orange-county-supervisor-district-4', summary: 'Candidates’ backgrounds, positions, endorsements and controversies.' },
      { label: 'Fullerton Observer: Early returns in the supervisor primary (June 5, 2026)', url: 'https://fullertonobserver.com/2026/06/05/early-returns-show-traut-and-shaw-leading-in-orange-county-supervisor-race/', summary: 'June primary returns.' },
      { label: 'OC Registrar: candidate statements', url: OC_STATEMENTS, summary: 'Select 2026 General Election, then Supervisor, 4th District (contest 4004).' },
    ],
    candidates: [
      {
        id: 'tim-shaw',
        name: 'Tim Shaw',
        party: 'NP',
        role: 'Orange County Board of Education Trustee',
        campaignUrl: 'https://shaw4oc.com',
        bio: [
          'Shaw, a Republican, served three and a half terms on the La Habra City Council, including as mayor, chaired the Orange County Transportation Authority, and is in his second term on the Orange County Board of Education, which he now leads as president. He works as government affairs director for the Pacific West Association of Realtors and teaches political science part time at Rio Hondo College (LAist). He narrowly lost the 2018 race for this seat to Chaffee.',
          'He promises spending control as state and federal money shrinks, a "total homelessness solution" centered on mental-health and addiction treatment, and full support for the sheriff, district attorney and firefighters.',
        ],
        scorecard: [
          { topic: 'Budget/taxes', position: '✓ Fiscal conservative; would control spending as outside funds decline', comparison: 'Traut stresses balanced city budgets and more road money for the district.' },
          { topic: 'Public safety', position: '✓✓ Endorsed by Sheriff Don Barnes; prioritizes sheriff, DA and fire funding', comparison: 'Traut is endorsed by the Buena Park Police Association and firefighters.' },
          { topic: 'Housing/homelessness', position: '~ Mental-health and addiction treatment; local control but accepts state mandates and transit housing', comparison: 'Traut backs vouchers, ADUs, tenant protections and a regional shelter.' },
          { topic: 'Schools/families', position: '✓ School choice; authorized a "Parents Bill of Rights" at the county board', comparison: 'Traut backs partnering with schools on care for the uninsured.' },
          { topic: 'Transparency', position: '? Says county needs transparency; no specific reform', comparison: 'Traut also offers no specific reform plan.' },
        ],
        money: 'Not located for the general election; see the county campaign-finance portal (LAist gives no figures).',
        endorsements: 'Republican Party of Orange County, California Republican Assembly, Rep. Young Kim, Supervisor Don Wagner, Sheriff Don Barnes (LAist); Orange County Register editorial board (his statement).',
        notes: [
          'Shaw worked in Supervisor Janet Nguyen’s office under chief of staff Andrew Do, who later pleaded guilty to felony bribery; Shaw told LAist he "never saw one single thing that seemed fishy." No allegation against Shaw was reported.',
          'He sued Gov. Newsom over COVID-era school closures (LAist).',
        ],
        qualification: qual('extensive', 'Shaw has held city, regional-transportation and county education offices for more than a decade.', [
          ['budget', 'met', 'La Habra mayor and councilmember; OCTA chair; OC Board of Education president.'],
          ['safety', 'partial', 'City-level police budgets as La Habra councilmember.'],
          ['regional', 'met', 'Chaired the Orange County Transportation Authority (freeway widening on the 57 and 91, per his statement).'],
          ['housing', 'partial', 'City land-use votes; works in Realtor government affairs.'],
        ]),
      },
      {
        id: 'connor-traut',
        name: 'Connor Traut',
        party: 'NP',
        role: 'Mayor/Business Owner',
        campaignUrl: 'https://www.connortraut.com',
        bio: [
          'Traut, a Democrat, has served on the Buena Park City Council since 2018 and is the council-selected mayor. He was on the Centralia Elementary School District board from 2014 to 2018, sits on the Orange County Fire Authority board, and works as an attorney in his family’s personal-injury firm (LAist). He holds bachelor’s and law degrees from Chapman University.',
          'He cites more ambulance units, a cap on food-delivery app fees, low-cost child care, a food pantry and balanced budgets in Buena Park, and wants more workforce and senior housing, tenant protections and more Measure M road money for the district.',
        ],
        scorecard: [
          { topic: 'Budget/taxes', position: '~ Balanced Buena Park budgets; supported a 2024 city sales tax for public safety, approved by voters', comparison: 'Shaw runs as a fiscal conservative.' },
          { topic: 'Public safety', position: '✓ Added ambulance units; endorsed by the Buena Park Police Association and county firefighters', comparison: 'Shaw is endorsed by Sheriff Barnes.' },
          { topic: 'Housing/homelessness', position: '✓✓ Workforce and senior housing, vouchers, ADUs, tenant protections; regional shelter in Buena Park', comparison: 'Shaw stresses treatment and local control.' },
          { topic: 'Health care', position: '✓ Staff to keep CalOptima members enrolled; school partnerships for uninsured care', comparison: 'Shaw did not address it.' },
          { topic: 'Transparency', position: '? No specific reform found', comparison: 'Shaw also offers none.' },
        ],
        money: 'Fullerton Observer (March 6, 2026) reported Traut had raised $224,978, including a $109,315 transfer, before the primary. General-election totals not located.',
        endorsements: 'Democratic Party of Orange County, Buena Park Police Association, National Union of Healthcare Workers, Supervisors Doug Chaffee, Katrina Foley and Vicente Sarmiento, and labor unions (LAist); Orange County Professional Firefighters president Chris Hamm (his statement).',
        notes: [
          'Critics call the union-backed Community Workforce Agreement he supported a special-interest deal that raises costs; supporters say it protects local workers (LAist).',
          'At 19 he filed a state ethics complaint against a former Anaheim mayor, and in 2026 a complaint about a Buena Park police chaplain’s online activity that led to the chaplain’s removal (LAist).',
        ],
        qualification: qual('substantial', 'Traut has eight years of city council service, school-board experience and a seat on the county fire authority, but no county-level office.', [
          ['budget', 'met', 'Buena Park council since 2018, balanced budgets each year (his statement); Centralia school board 2014–2018.'],
          ['safety', 'partial', 'OCFA board director; city police and ambulance decisions.'],
          ['regional', 'partial', 'Orange County Fire Authority board.'],
          ['housing', 'partial', 'City housing and regional shelter work in Buena Park.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['LP', 'Traut', '●', 'Leftward Progressives want tenant protections, an expanded safety net and pro-labor policy, and Connor Traut backs tenant protections, rental assistance, housing vouchers and a union Community Workforce Agreement, while Shaw stresses spending control and school choice.'],
      ['LL', 'Traut', '●', 'Loyal Liberals, 80% of whom want to expand government services, favor Connor Traut’s plans to keep CalOptima members enrolled, partner with schools on care for the uninsured and build workforce housing (the county Democratic Party and three Democratic supervisors also back him).'],
      ['LO', 'Traut', '◐', 'Left-Out Left voters want cost-of-living help for working families, and Connor Traut capped food-delivery app fees, created low-cost child care and backs rental assistance.'],
      ['OO', 'Traut', '◐', 'Order and Opportunity Left voters want both safety and affordability, and Connor Traut added ambulance units in Buena Park while pushing workforce housing and child care (police and firefighter groups also back him).'],
      ['TM', 'Traut', '○', 'Tuned-Out Middle voters look for concrete help with bills, and lean weakly to Connor Traut’s food pantry, child care and delivery-fee cap.'],
      ['PP', 'Shaw / Traut', '=', 'Pragmatic and Polite Right voters weigh fiscal restraint against temperament: if county-level experience and spending control matter most, Shaw, who chaired OCTA and leads the county Board of Education; if they prefer a candidate focused on emergency response and balanced budgets without Shaw’s confrontational lawsuit against the governor, Traut.'],
      ['UR', 'Shaw', '◐', 'Unconventional Right voters want lower spending and tough public safety, and Tim Shaw is a fiscal conservative who would put funding for the sheriff, DA and firefighters first (Sheriff Don Barnes also backs him).'],
      ['FC', 'Shaw', '●', 'Faith First Conservatives put parental rights and school choice first, and Tim Shaw authorized a "Parents Bill of Rights" and expanded school choice at the county Board of Education.'],
      ['NA', 'Shaw', '●', 'No Apologies Right voters want a fighter against Sacramento and smaller government, and Tim Shaw sued Gov. Newsom over school closures and promises to control county spending.'],
    ]),
    counterArguments: [
      'FC (Shaw ●): But consider Traut if public safety is the deciding issue, because he added ambulance units and puts fast emergency response first (police and firefighter groups also back him).',
      'LL (Traut ●): But consider Shaw if county experience matters most, because he chaired OCTA and leads the county Board of Education, while Traut has served only at the city level.',
    ],
  },

  // ───────────────────────────── Garden Grove Mayor ─────────────────────────────
  {
    id: 'garden-grove-mayor',
    categoryId: 'city',
    title: 'City of Garden Grove Mayor',
    tldrLabel: 'Garden Grove Mayor',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Garden Grove’s directly elected mayor serves a two-year term and is one of seven votes on the City Council, which adopts the budget (about $198 million in the amended 2026-27 general fund), sets police and fire staffing, and decides land use. A city manager runs day-to-day operations.',
      'Staff warned in June 2026 that the general fund may run a temporary deficit for three to four years as revenue growth slows. The city is also dealing with the May 2026 chemical-tank emergency at the GKN Aerospace plant, which forced the evacuation of about 40,000 residents (Voice of OC), and with homelessness and housing costs.',
    ],
    introParagraphs: [
      'This is a rematch of 2024. Stephanie Klopfenstein, a councilmember since 2016, beat former councilmember Thu-Ha Nguyen and other candidates for the open mayor’s seat that year, roughly 27% to 25% in a crowded field (unofficial tallies). There was no June primary. In ZIP 92841 this contest is on about 91% of ballots; the remaining Stanton part does not vote for Garden Grove offices.',
      'The race is nonpartisan, but the Republican Party of Orange County backs Klopfenstein and the Democratic Party of Orange County backs Nguyen (VietRISE; party endorsement page).',
    ],
    legalRequirements: 'Registered voter and resident of the City of Garden Grove; at least 18 years old.',
    qualificationCriteria: [
      { id: 'budget', label: 'Municipal budget and fiscal management', detail: 'The council must close a projected multi-year general-fund gap.' },
      { id: 'public-safety', label: 'Public safety and emergency response', detail: 'Police and fire are the largest uses of the general fund; the GKN emergency tested city response.' },
      { id: 'governance', label: 'Council leadership', detail: 'The mayor presides over the council and must build majorities.' },
      { id: 'housing', label: 'Housing, homelessness and economic development', detail: 'The council decides zoning, state housing compliance and business districts like Little Saigon and Main Street.' },
    ],
    readingLinks: [
      { label: 'VietRISE: Important races in Little Saigon (2026)', url: VIETRISE, summary: 'Advocacy nonprofit’s nonpartisan rundown of Garden Grove mayor and council candidates and their endorsements.' },
      { label: 'Voice of OC: GKN Aerospace faces the public (June 2026)', url: 'https://voiceofoc.org/2026/06/gkn-aerospace-faces-the-public-promises-townhall-after-garden-grove-chemical-tank-crisis/', summary: 'The chemical-tank emergency and the council’s response.' },
      { label: 'OC Registrar: candidate statements', url: OC_STATEMENTS, summary: 'Select 2026 General Election, then City of Garden Grove, Mayor (contest 5081).' },
    ],
    candidates: [
      {
        id: 'stephanie-klopfenstein',
        name: 'Stephanie Klopfenstein',
        party: 'NP',
        role: 'Garden Grove Mayor/Mom',
        campaignUrl: 'https://stephanie4gg.com',
        bio: [
          'Klopfenstein is a fifth-generation Garden Grove resident and GGUSD graduate whose daughter attends the district. She represented Council District 5 from 2016 and was elected mayor in 2024 (VietRISE; city records).',
          'Her statement credits her term with faster 911 response, Fire Station 84 upgrades, a new police station, a Little Saigon business district, first-time homebuyer help of up to $110,000, park upgrades, and a deficit reduced by $61 million. These figures come from her statement and were not independently audited by this guide.',
        ],
        recordVsChange:
          'Klopfenstein’s case is continuity on public safety, parks and the budget. Nguyen’s case for change is a broader focus on affordability, mental-health services and uniting the city; neither statement addresses the GKN emergency directly.',
        scorecard: [
          { topic: 'Budget/deficit', position: '✓ Says the deficit fell by $61 million and the city’s fiscal ranking rose six places', comparison: 'Nguyen says she "protected taxpayers" as a councilmember.' },
          { topic: 'Public safety', position: '✓✓ New police station, faster 911, fire station upgrades; endorsed by police and firefighters', comparison: 'Nguyen also says she strengthened public safety on the council.' },
          { topic: 'Housing/homelessness', position: '✓ Down-payment help up to $110,000; "services and enforcement" on homelessness', comparison: 'Nguyen emphasizes mental-health services.' },
          { topic: 'Economic development', position: '✓ Little Saigon business district; Main Street beautification', comparison: 'Nguyen wants businesses to "thrive" but offers no specific program.' },
          { topic: 'Transparency', position: '? No specific proposal', comparison: 'Nguyen offers none either.' },
        ],
        money: NO_MONEY,
        endorsements: 'Orange County Professional Firefighters, Garden Grove Police Association, Garden Grove Police Management Association (her statement); Republican Party of Orange County (VietRISE).',
        qualification: qual('extensive', 'Klopfenstein is the sitting mayor and served on the council from 2016.', [
          ['budget', 'met', 'Council and mayoral budget votes since 2016; cites a $61M deficit reduction.'],
          ['public-safety', 'met', 'Mayor during the GKN evacuation and police-station construction; police and fire endorsements.'],
          ['governance', 'met', 'Presides over the council as mayor since Dec 2024.'],
          ['housing', 'met', 'Council land-use and housing votes since 2016; homebuyer program.'],
        ]),
      },
      {
        id: 'thu-ha-nguyen',
        name: 'Thu-Ha Nguyen',
        party: 'NP',
        role: 'Cancer Scientist/Teacher',
        campaignUrl: 'https://thu-ha.com',
        bio: [
          'Nguyen, who came to the U.S. as a Vietnamese refugee, has worked more than 25 years as a clinical scientist in genetic testing and cancer diagnostics and as an educator. She represented Council District 3 from 2016 to 2020 and served as Mayor Pro Tem.',
          'She ran for Assembly District 70 as the endorsed Democrat in 2020 and 2022 (VietRISE) and lost the 2024 mayor’s race to Klopfenstein. Her platform is a safer, more affordable and more united city, with mental-health-centered homelessness services and support for local businesses.',
        ],
        scorecard: [
          { topic: 'Budget/deficit', position: '~ Says she "protected taxpayers" on the council; no specific plan for the projected gap', comparison: 'Klopfenstein cites a $61M deficit reduction.' },
          { topic: 'Public safety', position: '✓ Says she strengthened public safety as a councilmember', comparison: 'Klopfenstein is endorsed by police and firefighters.' },
          { topic: 'Housing/homelessness', position: '✓ Affordability and mental-health-focused homelessness services', comparison: 'Klopfenstein pairs services with enforcement and homebuyer aid.' },
          { topic: 'Economic development', position: '✓ Help local businesses and create jobs', comparison: 'Klopfenstein created a Little Saigon business district.' },
        ],
        money: NO_MONEY,
        endorsements: 'Democratic Party of Orange County (endorsement page, Nov 2026).',
        qualification: qual('substantial', 'Nguyen served one council term and as Mayor Pro Tem, but has not been mayor.', [
          ['budget', 'partial', 'Council budget votes 2016–2020.'],
          ['public-safety', 'partial', 'Council oversight of police and fire 2016–2020.'],
          ['governance', 'partial', 'Mayor Pro Tem; has not presided as mayor.'],
          ['housing', 'partial', 'Council land-use votes 2016–2020.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['LP', 'Nguyen', '◐', 'Leftward Progressives favor mental-health-centered homelessness policy over enforcement, and lean to Thu-Ha Nguyen, who focuses on mental health, though neither candidate runs on a progressive platform (the county Democratic Party also backs her).'],
      ['LL', 'Nguyen', '◐', 'Loyal Liberals trust scientific expertise, with 92% saying experts make better policy decisions, and Thu-Ha Nguyen is a clinical cancer scientist and former Mayor Pro Tem who stresses mental-health services (the county Democratic Party also backs her).'],
      ['LO', 'Nguyen', '○', 'Left-Out Left voters want affordability for working families, and lean weakly to Thu-Ha Nguyen’s affordability and mental-health message, though her record on costs is thin.'],
      ['OO', 'Klopfenstein', '◐', 'Order and Opportunity Left voters put safety first, with about 52% calling violent crime a very big problem, and Stephanie Klopfenstein runs on a new police station, faster 911 response and fire-station upgrades (police and firefighter groups also back her).'],
      ['TM', 'Klopfenstein', '○', 'Tuned-Out Middle voters judge by concrete results, and lean weakly to Stephanie Klopfenstein’s down-payment help, park upgrades and street repairs.'],
      ['PP', 'Klopfenstein', '◐', 'Pragmatic and Polite Right voters value fiscal prudence and experience, and Stephanie Klopfenstein cites a $61 million deficit reduction after ten years on the council.'],
      ['UR', 'Klopfenstein', '◐', 'Unconventional Right voters want public safety and enforcement, and Stephanie Klopfenstein pairs homelessness services with enforcement and streamlined code enforcement.'],
      ['FC', 'Klopfenstein', '●', 'Faith First Conservatives want law and order and limited spending, and Stephanie Klopfenstein built a new police station, cut the deficit by $61 million by her account and pairs homelessness services with enforcement.'],
      ['NA', 'Klopfenstein', '◐', 'No Apologies Right voters want tough enforcement and lean government, and Stephanie Klopfenstein stresses homelessness enforcement, code enforcement and deficit cuts, though she runs on services and parks rather than confrontation.'],
    ]),
    counterArguments: [
      'OO (Klopfenstein ◐): But consider Nguyen, because she also served on the council, has a long science career, and the city still faces a multi-year deficit that the incumbent’s $61 million figure does not erase.',
      'LL (Nguyen ◐): But consider that Nguyen’s statement offers few specifics on the budget gap or the GKN emergency, because the next mayor will have to manage both.',
    ],
  },

  // ───────────────────────────── Garden Grove Council D1 ─────────────────────────────
  {
    id: 'garden-grove-council-d1',
    categoryId: 'city',
    title: 'Garden Grove City Council, District 1',
    tldrLabel: 'Garden Grove Council D1',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'District 1 covers west Garden Grove, including the Valley View corridor. Its councilmember is one of seven votes on the budget, police and fire staffing, land use and the city’s response to the GKN Aerospace chemical emergency, which hit nearby neighborhoods in May 2026.',
      'The seat is open because Mayor Pro Tem George Brietigam is termed out. A retired 30-year Garden Grove police officer, an urgent-care doctor and a former emergency technician with city-government experience are running.',
    ],
    introParagraphs: [
      'There was no June primary; the seat is decided on Nov. 3 among three qualified candidates. The Republican Party of Orange County and Brietigam back Roger Flanders; the Democratic Party of Orange County backs Long Nguyen (listed as Long Tran Nguyen). In ZIP 92841 this contest is on about 14% of ballots (the western precincts).',
    ],
    legalRequirements: 'Registered voter residing in Council District 1; at least 18 years old.',
    qualificationCriteria: [
      { id: 'budget', label: 'Municipal budget and fiscal management', detail: 'The council faces a projected multi-year general-fund gap.' },
      { id: 'public-safety', label: 'Public safety and emergency management', detail: 'Police, fire and emergency preparedness are the largest city functions.' },
      { id: 'land-use', label: 'Land use and neighborhood preservation', detail: 'Council decides zoning, code enforcement and corridor redevelopment.' },
      { id: 'community', label: 'Knowledge of the district', detail: 'District councilmembers handle constituent issues in west Garden Grove.' },
    ],
    readingLinks: [
      { label: 'VietRISE: Important races in Little Saigon (2026)', url: VIETRISE, summary: 'Candidate backgrounds and endorsements for District 1.' },
      { label: 'OC Registrar: candidate statements', url: OC_STATEMENTS, summary: 'Select 2026 General Election, then City of Garden Grove, City Council, District 1 (contest 5084).' },
    ],
    candidates: [
      {
        id: 'william-zylla',
        name: 'William Zylla',
        party: 'NP',
        role: 'Retired Emergency Technician',
        bio: [
          'Zylla has lived in Garden Grove since 2001. He worked 11 years at UCLA Health as a clinical care partner and emergency trauma technician, and says he spent 16 years in city government managing public safety, neighborhood preservation and emergency management services (which city is not stated). He has a bachelor’s degree from UC Irvine.',
          'His priorities are first responders, emergency preparedness, neighborhood preservation, fiscal responsibility and local business, and he pledges to hold GKN "strictly accountable."',
        ],
        scorecard: [
          { topic: 'Public safety/emergencies', position: '✓✓ Emergency preparedness and support for first responders', comparison: 'Flanders is a retired police officer.' },
          { topic: 'GKN accountability', position: '✓✓ Will hold GKN "strictly accountable"', comparison: 'Neither opponent names GKN in his statement.' },
          { topic: 'Budget', position: '✓ Fiscal responsibility', comparison: 'Nguyen promises a balanced budget.' },
          { topic: 'Neighborhoods', position: '✓ Neighborhood preservation', comparison: 'Flanders served on the neighborhood conservation commission.' },
        ],
        money: NO_MONEY,
        endorsements: 'None verified as of Nov 3, 2026.',
        qualification: qual('some', 'Zylla reports long city-government and emergency-medicine experience but no elected office.', [
          ['budget', 'unknown', 'No budget role documented.'],
          ['public-safety', 'partial', '11 years as an emergency trauma technician; 16 years managing city public-safety and emergency services (his statement; city not named).'],
          ['land-use', 'partial', 'Neighborhood preservation work in city government (his statement).'],
          ['community', 'met', 'Garden Grove resident since 2001.'],
        ]),
      },
      {
        id: 'long-nguyen',
        name: 'Long Nguyen',
        party: 'NP',
        role: 'Urgent Care Doctor',
        bio: [
          'Nguyen grew up in Garden Grove, attended GGUSD schools and lives in the West Grove neighborhood. He is an urgent-care physician.',
          'He says he would take a preventive approach to aging infrastructure and homelessness, revitalize the Valley View corridor, keep the budget balanced and make neighborhoods safe and clean.',
        ],
        scorecard: [
          { topic: 'Economic development', position: '✓✓ Revitalize the Valley View corridor and attract investment', comparison: 'Zylla and Flanders back local business in general terms.' },
          { topic: 'Budget', position: '✓ Balanced budget and fiscally responsible decisions', comparison: 'Zylla also stresses fiscal responsibility.' },
          { topic: 'Homelessness/infrastructure', position: '✓ Preventive approach to aging infrastructure and homelessness', comparison: 'Flanders pairs services with enforcement.' },
          { topic: 'Public safety', position: '~ Wants families to feel safe; no specific plan', comparison: 'Flanders is a retired police officer.' },
        ],
        money: NO_MONEY,
        endorsements: 'Democratic Party of Orange County (endorsement page, Nov 2026).',
        qualification: qual('limited', 'Nguyen is a physician with local roots and no documented government or commission experience.', [
          ['budget', 'not-met', 'No public budget role documented.'],
          ['public-safety', 'not-met', 'No public-safety role documented; medical background.'],
          ['land-use', 'not-met', 'No commission or land-use role documented.'],
          ['community', 'met', 'Grew up in Garden Grove; lives in District 1.'],
        ]),
      },
      {
        id: 'roger-flanders',
        name: 'Roger Flanders',
        party: 'NP',
        role: 'Court Investigator',
        bio: [
          'Flanders has lived in West Garden Grove nearly his whole life and graduated from Pacifica High School and UC Irvine. He was a Garden Grove police officer for 30 years, including as a terrorism liaison, DARE officer and founding officer of the department’s Special Resource Team for homeless and mentally ill people.',
          'He has served on the city’s Planning, Traffic and Neighborhood Improvement & Conservation commissions, and promises to put residents first, prioritize public safety and address homelessness with services and enforcement.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓✓ 30 years as a Garden Grove police officer', comparison: 'Zylla has emergency-medicine and emergency-management experience.' },
          { topic: 'Homelessness', position: '✓ Services and enforcement; founded the police homeless outreach team', comparison: 'Nguyen favors a preventive approach.' },
          { topic: 'Land use/neighborhoods', position: '✓ Former planning, traffic and neighborhood conservation commissioner', comparison: 'Neither opponent has served on a city commission.' },
          { topic: 'Budget', position: '? No specific position', comparison: 'Nguyen and Zylla both pledge fiscal responsibility.' },
        ],
        money: NO_MONEY,
        endorsements: 'Mayor Stephanie Klopfenstein, Mayor Pro Tem George Brietigam and Supervisor Janet Nguyen (his statement); Garden Grove Police Association and Republican Party of Orange County (VietRISE).',
        qualification: qual('substantial', 'Flanders brings 30 years with the city’s police department and service on three city commissions, but no elected office.', [
          ['budget', 'unknown', 'No budget role documented.'],
          ['public-safety', 'met', 'Garden Grove police officer for 30 years.'],
          ['land-use', 'met', 'Garden Grove planning, traffic and neighborhood conservation commissioner.'],
          ['community', 'met', 'Lifelong West Garden Grove resident; youth coach and school booster president.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['LP', 'Long Nguyen', '◐', 'Leftward Progressives prefer a preventive, health-centered approach to homelessness over enforcement, and lean to Long Nguyen, a physician, over a retired police officer who stresses enforcement (the county Democratic Party also backs Nguyen).', 'An experience-first Leftward Progressive could back Roger Flanders, who spent 30 years with the city police and founded its homeless outreach team; that means backing the candidate who pairs services with enforcement.'],
      ['LL', 'Long Nguyen', '◐', 'Loyal Liberals trust expertise and planning ahead, and Long Nguyen, an urgent-care physician, applies a preventive approach to aging infrastructure and homelessness and has a plan to revitalize the Valley View corridor (the county Democratic Party also backs him).', 'An experience-first Loyal Liberal could back Roger Flanders, a former planning commissioner with 30 years in the city police department; the trade-off is an enforcement-first approach to homelessness.'],
      ['LO', 'Zylla', '○', 'Left-Out Left voters want large corporations held to account, and lean to William Zylla, the only candidate pledging to hold GKN strictly accountable after the chemical-tank evacuation.'],
      ['OO', 'Flanders', '◐', 'Order and Opportunity Left voters, about 69% of whom have confidence in police, value public safety and steady experience, and Roger Flanders served 30 years as a Garden Grove officer and on three city commissions.'],
      ['TM', 'Zylla', '○', 'Tuned-Out Middle voters near the GKN plant want concrete protection, and lean weakly to William Zylla’s emergency-preparedness focus and pledge to hold GKN accountable.'],
      ['PP', 'Flanders', '◐', 'Pragmatic and Polite Right voters value experience and the rule of law, and Roger Flanders brings decades of police service and commission work in the district.'],
      ['UR', 'Flanders', '◐', 'Unconventional Right voters want crime and homelessness handled with enforcement, and Roger Flanders promises services and enforcement after founding the police department’s homeless outreach team (the Garden Grove Police Association also backs him).'],
      ['FC', 'Flanders', '●', 'Faith First Conservatives want law and order, and Roger Flanders is a 30-year Garden Grove police veteran who promises to prioritize public safety.'],
      ['NA', 'Flanders', '●', 'No Apologies Right voters want tough-on-crime candidates, and Roger Flanders spent 30 years as a police officer, including terrorism liaison work, and pairs homelessness services with enforcement.'],
    ]),
    counterArguments: [
      'FC (Flanders ●): But consider Zylla, because he also brings public-safety and emergency-management experience and is the only candidate to commit to holding GKN accountable after the evacuation.',
      'LL (Long Nguyen ◐): But consider that Nguyen has no documented government or commission experience, because the council faces a multi-year deficit from day one.',
    ],
  },

  // ───────────────────────────── Garden Grove Council D3 ─────────────────────────────
  {
    id: 'garden-grove-council-d3',
    categoryId: 'city',
    title: 'Garden Grove City Council, District 3',
    tldrLabel: 'Garden Grove Council D3',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'District 3 covers central and north Garden Grove. Its councilmember is one of seven votes on the budget, police and fire staffing, homelessness policy, land use and the city’s response to the GKN Aerospace chemical emergency.',
      'First-term Councilwoman Cindy Ngoc Tran faces two challengers. The county Democratic Party and Rep. Derek Tran back Amanda Nguyen, a paralegal in the county Alternate Public Defender’s office; media businessman Thomas Quoc Thai Nguyen is also running.',
    ],
    introParagraphs: [
      'Tran was first elected in 2022. There was no June primary; the seat is decided on Nov. 3 among three qualified candidates. In ZIP 92841 this contest is on about 31% of ballots (the eastern precincts near Brookhurst Street).',
    ],
    legalRequirements: 'Registered voter residing in Council District 3; at least 18 years old.',
    qualificationCriteria: [
      { id: 'budget', label: 'Municipal budget and fiscal management', detail: 'The council faces a projected multi-year general-fund gap.' },
      { id: 'public-safety', label: 'Public safety and homelessness response', detail: 'Police and fire staffing and homeless services are the biggest policy choices.' },
      { id: 'economic', label: 'Economic development and small business', detail: 'Little Saigon and Main Street business districts drive city revenue.' },
      { id: 'community', label: 'Constituent service and knowledge of the district', detail: 'District councilmembers handle neighborhood issues.' },
    ],
    readingLinks: [
      { label: 'VietRISE: Important races in Little Saigon (2026)', url: VIETRISE, summary: 'Candidate backgrounds and endorsements for District 3.' },
      { label: 'OC Registrar: candidate statements', url: OC_STATEMENTS, summary: 'Select 2026 General Election, then City of Garden Grove, City Council, District 3 (contest 5086).' },
      { label: 'OC Registrar: candidate proof list (Aug 28, 2026)', url: OC_CANDLOG, summary: 'Qualified candidates and ballot designations.' },
    ],
    candidates: [
      {
        id: 'amanda-nguyen',
        name: 'Amanda Nguyen',
        party: 'NP',
        role: 'Senior Paralegal',
        campaignUrl: 'https://www.vote4amandanguyen.com',
        bio: [
          'Nguyen is a lifelong Little Saigon resident and daughter of Vietnamese refugees. She has worked nearly a decade in Orange County’s criminal legal system and is a senior paralegal with the Orange County Alternate Public Defender; she holds a master’s degree in criminal justice.',
          'She promises to fully staff police and fire, tie homeless outreach to mental-health, addiction and job services with "real accountability," and invest in Little Saigon and Main Street.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓ Fully staff police and fire', comparison: 'Tran cites support for police and firefighters in her first term.' },
          { topic: 'Homelessness', position: '✓✓ Mental-health, addiction and employment services with accountability', comparison: 'Tran connects people with services "while protecting our community."' },
          { topic: 'Affordability/economy', position: '✓ Invest in Little Saigon and Main Street for working families', comparison: 'Tran expanded business grants and homebuyer help.' },
          { topic: 'Budget', position: '? No specific position', comparison: 'Tran stresses responsible spending.' },
        ],
        money: NO_MONEY,
        endorsements: 'Rep. Derek Tran (her statement); Democratic Party of Orange County and Garden Grove Councilmembers Ariana Arestegui, Yesenia Muñeton and Philip Nguyen (VietRISE).',
        qualification: qual('some', 'Nguyen has a decade of public-sector legal work but no elected or commission experience.', [
          ['budget', 'not-met', 'No public budget role documented.'],
          ['public-safety', 'partial', 'Nearly a decade in the county criminal legal system; master’s in criminal justice.'],
          ['economic', 'not-met', 'No business-development role documented.'],
          ['community', 'met', 'Lifelong Little Saigon resident.'],
        ]),
      },
      {
        id: 'thomas-quoc-thai-nguyen',
        name: 'Thomas Quoc Thai Nguyen',
        party: 'NP',
        role: 'Media Businessman',
        bio: [
          'Nguyen is a media businessman who says he has worked for 40 years with business owners, laborers and professionals across Orange County.',
          'He lists public safety, infrastructure, faster home-improvement permits, affordable housing, business growth, practical homelessness solutions and cultural events as priorities, and pledges public participation and transparency.',
        ],
        scorecard: [
          { topic: 'Economic development', position: '✓ Business growth, job creation; faster home-improvement permits', comparison: 'Tran expanded grants; Amanda Nguyen targets Little Saigon and Main Street.' },
          { topic: 'Housing', position: '✓ Affordable housing', comparison: 'Tran cites homebuyer programs.' },
          { topic: 'Transparency', position: '✓ Public participation and accountability', comparison: 'Neither opponent offers a specific transparency plan.' },
          { topic: 'Public safety', position: '~ Listed as a priority; no specifics', comparison: 'Amanda Nguyen pledges full police and fire staffing.' },
        ],
        money: NO_MONEY,
        endorsements: 'None verified as of Nov 3, 2026 (VietRISE lists no major endorsements).',
        qualification: qual('limited', 'Nguyen reports decades in local media business and no documented government experience.', [
          ['budget', 'not-met', 'No public budget role documented.'],
          ['public-safety', 'not-met', 'No public-safety role documented.'],
          ['economic', 'partial', '40 years in media business working with local businesses (his statement).'],
          ['community', 'unknown', 'Length of district residence not stated.'],
        ]),
      },
      {
        id: 'cindy-ngoc-tran',
        name: 'Cindy Ngoc Tran',
        party: 'NP',
        role: 'Garden Grove Councilwoman/Engineer',
        campaignUrl: 'https://cindyntran.com',
        bio: [
          'Tran is a U.S. veteran, engineer, small-business owner, teacher and mother, first elected to the District 3 seat in 2022.',
          'She cites support for police and firefighters, homeless outreach "while protecting our community," business grants, first-time homebuyer programs and street improvements, and organizes neighborhood cleanups, food distributions, holiday gifts and student scholarships. In June 2026 she said the council would summon GKN representatives if the company did not keep the city informed (Voice of OC).',
        ],
        recordVsChange:
          'Tran’s case is a first term of steady services and constituent events. Amanda Nguyen’s case for change is a more accountable, services-based approach to homelessness and more investment in Little Saigon; neither challenger names a specific vote of Tran’s they oppose.',
        scorecard: [
          { topic: 'Public safety', position: '✓ Supported police and firefighters in her first term', comparison: 'Amanda Nguyen pledges full staffing.' },
          { topic: 'Homelessness', position: '~ Connects people with services while "protecting our community"', comparison: 'Amanda Nguyen stresses mental-health and addiction services.' },
          { topic: 'Small business/housing', position: '✓ Expanded access to grants; first-time homebuyer programs', comparison: 'Thomas Nguyen wants faster permits.' },
          { topic: 'Budget', position: '✓ "Responsible spending"', comparison: 'Neither challenger offers a budget plan.' },
          { topic: 'GKN response', position: '✓ Backed the council’s June 2026 letter demanding accountability', comparison: 'Challengers do not address it.' },
        ],
        money: NO_MONEY,
        endorsements: 'None verified as of Nov 3, 2026.',
        qualification: qual('extensive', 'Tran holds this seat and has served a full council term.', [
          ['budget', 'met', 'Council budget votes since Dec 2022.'],
          ['public-safety', 'met', 'Council oversight of police and fire; GKN emergency response (June 2026).'],
          ['economic', 'met', 'Council business-grant programs; small-business owner.'],
          ['community', 'met', 'District 3 councilmember; organizes cleanups and food distributions.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['LP', 'Amanda Nguyen', '●', 'Leftward Progressives want services-first homelessness policy and criminal-justice experience from the defense side, and Amanda Nguyen works for the county Alternate Public Defender and ties homeless outreach to mental-health, addiction and job services (the county Democratic Party also backs her).'],
      ['LL', 'Amanda Nguyen', '◐', 'Loyal Liberals favor expert, services-based policy, and Amanda Nguyen, with a master’s in criminal justice and a decade in the county legal system, offers a specific mental-health and addiction approach to homelessness (the county Democratic Party and Rep. Derek Tran also back her).', 'An experience-first Loyal Liberal could back Cindy Tran, who has served a full term in this seat; the trade-off is a less specific services plan for homelessness.'],
      ['LO', 'Amanda Nguyen', '◐', 'Left-Out Left voters want affordability for working families and real accountability, and Amanda Nguyen pairs investment in Little Saigon with mental-health and job services for people in crisis.', 'An experience-first Left-Out Left voter could back Cindy Tran, who has run food distributions and business-grant programs as councilmember; that means keeping the incumbent.'],
      ['OO', 'Tran / Amanda Nguyen', '=', 'Order and Opportunity Left voters weigh proven service against a fuller safety plan: if a veteran incumbent with a record of backing police and firefighters and homebuyer help matters most, Tran; if a pledge to fully staff police and fire plus mental-health and addiction services matters more, Amanda Nguyen.'],
      ['TM', 'Tran', '○', 'Tuned-Out Middle voters reward concrete help, and lean weakly to Cindy Tran’s food distributions, homebuyer programs and street work.'],
      ['PP', 'Tran', '◐', 'Pragmatic and Polite Right voters value experience and steady service, and Cindy Tran, an engineer and veteran, has a full term in the seat.'],
      ['UR', 'Tran', '◐', 'Unconventional Right voters prefer homelessness policy that protects public spaces, and Cindy Tran pairs services with "protecting our community" and responsible spending, while Amanda Nguyen leads with services.'],
      ['FC', 'Tran', '◐', 'Faith First Conservatives want law and order and limited spending, and Cindy Tran, a veteran and small-business owner, runs on safe neighborhoods, support for police and firefighters and responsible spending.'],
      ['NA', 'Tran', '○', 'No Apologies Right voters want enforcement and lean government, and lean weakly to Cindy Tran’s "protecting our community" stance and responsible spending over a services-first challenger, though Tran is no combative conservative.'],
    ]),
    counterArguments: [
      'PP (Tran ◐): But consider Amanda Nguyen, because she offers a more specific homelessness plan tied to mental-health and addiction services, and pledges full police and fire staffing.',
      'LP (Amanda Nguyen ●): But consider that Nguyen has no elected or commission experience, because Tran already handles the district’s GKN and budget issues.',
    ],
  },
];
