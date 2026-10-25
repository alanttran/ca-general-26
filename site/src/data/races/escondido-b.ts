import type { Race, QualificationCriterion } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * More Escondido-area local contests (ZIPs 92025, 92027, 92029): Escondido Union High Trustee Area 1,
 * Escondido Union School Trustee Areas 2 and 4, Palomar Health Division 3, and Rincon del Diablo
 * Municipal Water District Division 3. All offices are nonpartisan; party endorsements are context only.
 * Career facts come mainly from the candidates’ statements printed in the Registrar’s sample ballots
 * (Nov 3, 2026), which the candidates write and pay for and no official agency checks.
 */

const SAMPLE_BALLOT = 'https://www.sdvote.com/content/dam/rov/en/sb/SB-ENG-440.pdf';
const KPBS_ENDORSEMENTS =
  'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian';

const SCHOOL_LEGAL =
  'U.S. citizen, 18 or older, registered voter living in the trustee area; not an employee of the district (Cal. Education Code § 35107).';

const SCHOOL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Board governance and oversight', detail: 'Trustees adopt policy, approve contracts, and hire and evaluate the superintendent as one vote on a five-member board.' },
  { id: 'budget', label: 'Budget and fiscal oversight', detail: 'The board adopts the district budget and bargains with teachers and classified staff.' },
  { id: 'instruction', label: 'Knowledge of teaching and student outcomes', detail: 'Trustees approve curriculum, programs, and graduation and discipline policies.' },
  { id: 'community', label: 'Parent, staff, and community engagement', detail: 'Trustees hear from families and staff in public meetings and answer for district decisions.' },
];

export const RACES_ESCONDIDO_B: Race[] = [
  // ---------------------------------------------------------------- EUHSD Area 1
  {
    id: 'euhsd-trustee-area-1',
    categoryId: 'school',
    title: 'Escondido Union High School District, Trustee Area 1',
    tldrLabel: 'Escondido Union HSD, Area 1',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Escondido Union High School District runs the city’s public high schools under a five-member elected board. Trustees adopt the budget, approve curriculum and labor contracts, and hire the superintendent.',
      'Area 1 covers much of central and eastern Escondido. Incumbent Bob Weller runs on rising test scores and teacher raises; Nina Haines, a home-care business owner, says her finance background would help with budgets and labor talks.',
    ],
    introParagraphs: [
      'This is a single November contest for one four-year term. Weller won the seat in 2022 (Ballotpedia). Reform California endorses Weller and the county Democratic Party endorses Haines; the county Republican Party lists no pick here (KPBS endorsement guide, Sept. 30, 2026).',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'bob-weller',
        name: 'Bob Weller',
        party: 'NP',
        role: 'Governing Board Member, Escondido Union High School District',
        campaignUrl: 'https://www.bobweller.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Weller has held this seat since December 2022. He is a small business owner and mortgage strategist, not an educator.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Trustee for Area 1 since December 2022 (Ballotpedia).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on district budgets and says he helped lead raises that put teacher pay among the county’s top five (candidate statement).' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'No teaching background; cites score gains and career-technical programs during his term (candidate statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Escondido resident about ten years; four children who are current or recent district students (campaign site).' },
          ],
        },
        bio: [
          'Weller is a small business owner and home mortgage strategist who has lived in Escondido about ten years; his wife is an Escondido High graduate and their four children are current or recent district students (campaign site).',
          'Elected in 2022, he says the district has raised English scores 27.5% and math scores 47% in four years and placed teacher pay among the county’s top five (candidate statement).',
        ],
        recordVsChange:
          'Weller can point to score gains, career-technical programs, and campus wellness centers during his term, though the figures are his own. The case for change is his own admission that Escondido still lags other communities in student outcomes.',
        scorecard: [
          { topic: 'Academics', position: '✓ Cites 27.5% English and 47% math gains; says Escondido still lags (statement)', comparison: 'Haines promises a good education for every student but no specific plan.' },
          { topic: 'Teacher pay', position: '✓✓ Says he helped lead raises to top-five county pay', comparison: 'Haines wants a harmonious relationship with unions and teachers.' },
          { topic: 'Career-technical education', position: '✓✓ Backs culinary, auto, computer science and graphic design pathways', comparison: 'Haines has not addressed CTE.' },
          { topic: 'Student mental health', position: '✓ Supported wellness centers on campuses (campaign site)', comparison: 'Haines stresses a safe environment.' },
          { topic: 'Budget', position: '? No published budget plan beyond votes', comparison: 'Haines cites her finance background.' },
        ],
        money: 'No campaign finance totals published as of Oct 9, 2026.',
        endorsements: 'Reform California (KPBS endorsement guide, Sept. 30, 2026). No county Republican or Democratic endorsement listed.',
        notes: ['Test-score figures come from his candidate statement and have not been independently verified.'],
      },
      {
        id: 'nina-haines',
        name: 'Nina Haines',
        party: 'NP',
        role: 'Businessowner',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Haines has a finance background and has run a senior home-care agency for 14 years. She has no school-board or teaching record.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected or appointed board service is documented.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Says her background is in finance and she started a home-care agency for seniors over 14 years ago (candidate statement).' },
            { criterionId: 'instruction', assessment: 'not-met', evidence: 'Says she is not a teacher; tutored children when younger (candidate statement).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'North County resident over 20 years and Escondido resident over 8 (candidate statement).' },
          ],
        },
        bio: [
          'Haines, 72, has lived in North County more than 20 years and in Escondido more than eight. Her background is in finance, and she started a home-care agency for seniors more than 14 years ago (candidate statement).',
          'She says her finance experience would help in funding negotiations and budget oversight, and in keeping a good relationship with unions, teachers and parents.',
        ],
        scorecard: [
          { topic: 'Budget', position: '✓ Promises close budget watching, citing her finance background', comparison: 'Weller has voted on budgets since 2022.' },
          { topic: 'Labor relations', position: '✓ Wants a harmonious relationship with unions and teachers', comparison: 'Weller says he led teacher raises.' },
          { topic: 'Campus safety', position: '✓ Pledges a safe environment for every student', comparison: 'Weller backs campus wellness centers.' },
          { topic: 'Academics', position: '? No specific plan published', comparison: 'Weller cites test-score gains.' },
        ],
        money: 'No campaign finance totals published as of Oct 9, 2026.',
        endorsements: 'San Diego County Democratic Party (KPBS endorsement guide, Sept. 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Haines', '◐', 'Leftward Progressives back Haines, endorsed by the county Democratic Party and promising a harmonious relationship with unions, over an incumbent endorsed by Reform California.', 'Leftward Progressives who weigh experience could keep Weller, a trustee since 2022 who says he helped lift teacher pay into the county’s top five, though that means passing on the Democratic-endorsed challenger for a Reform California pick.'],
      ['LL', 'Haines', '○', 'Loyal Liberals lean to the Democratic-endorsed Haines, but only weakly, because Weller’s record on teacher pay and wellness centers is one they might otherwise credit.', 'Loyal Liberals who prize a track record could back Weller, with four years on this board and claimed gains in scores and teacher pay, giving up the party-endorsed newcomer for a Reform California–endorsed incumbent.'],
      ['LO', 'Haines', '○', 'Left-Out Left voters lean to Haines, a small business owner new to politics who promises close budget watching and good relations with teachers, though Haines has no school record.', 'Left-Out Left voters who care about results could accept Weller, who backed campus wellness centers and higher teacher pay, though Weller is the incumbent and Reform California’s pick.'],
      ['OO', 'Weller', '◐', 'Order and Opportunity Left voters may cross to Weller for career-technical pathways, campus wellness centers and teacher raises, practical results that matter more to them than party labels.'],
      ['TM', 'Weller', '○', 'Tuned-Out Middle voters may stick with Weller, whose culinary, auto and computer pathways lead straight to jobs, though few will follow the race.'],
      ['PP', 'Weller', '◐', 'Pragmatic and Polite Right voters value Weller’s four years of steady board work and his own admission that Escondido still lags, a measured record over an untested newcomer.'],
      ['UR', 'Weller', '◐', 'Unconventional Right voters favor Weller, a small business owner backed by Reform California who focuses on academics and job training rather than ideology.'],
      ['FC', 'Weller', '◐', 'Faith First Conservatives prefer Weller, a father of four district students endorsed by Reform California, though Weller has not campaigned on social issues.'],
      ['NA', 'Weller', '◐', 'No Apologies Right voters back Weller over a Democratic-endorsed challenger, as Reform California does, though Weller runs on scores and teacher pay rather than as a fighter.'],
    ]),
    counterArguments: [
      'OO/PP (Weller ◐): But consider that Weller’s score-gain figures come from his own statement, because no independent check has been published and he concedes Escondido still trails other communities.',
      'LP (Haines ◐): But consider that Haines has no school-board or teaching record, because the pick rests mostly on her endorsement while Weller has four years of district budget votes.',
    ],
    readingLinks: [
      { label: 'Sample ballot with candidate statements (BT 104)', url: 'https://www.sdvote.com/content/dam/rov/en/sb/SB-ENG-104.pdf', summary: 'Weller’s and Haines’s statements in their own words.' },
      { label: 'KPBS: 2026 endorsement guide', url: KPBS_ENDORSEMENTS, summary: 'Party and group endorsements for the November ballot.' },
    ],
  },

  // ---------------------------------------------------------------- EUSD Area 2
  {
    id: 'eusd-trustee-area-2',
    categoryId: 'school',
    title: 'Escondido Union School District, Trustee Area 2',
    tldrLabel: 'Escondido Union SD, Area 2',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The Escondido Union School District runs the city’s elementary and middle schools under a five-member board that adopts the budget, approves curriculum, bargains with staff, and hires the superintendent.',
      'Area 2, in southwest Escondido, is open: sitting trustee Joan Gardner is backing Chris Ranglas, a UCSD project manager. Elizabeth Shulok, a longtime district volunteer who writes a newsletter on board decisions, runs on transparency.',
    ],
    introParagraphs: [
      'This is a single November contest for one four-year term. The Republican Party and Reform California endorse Ranglas; the county Democratic Party endorses Shulok (KPBS endorsement guide, Sept. 30, 2026). Ranglas also lists trustees Zesty Harper and Joan Gardner as endorsers (candidate statement).',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'elizabeth-shulok',
        name: 'Elizabeth Shulok',
        party: 'NP',
        role: 'Parent/Education Advocate',
        campaignUrl: 'https://shulok.org',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Shulok has volunteered in district schools for 14 years and served on district committees. She has not held a board seat.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Served on district committees including the Superintendent’s Design Team and has attended many board meetings (candidate statement).' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget or finance role is documented.' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'Classroom volunteer and EUSD substitute noon supervisor; three children attended district schools (candidate statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Started the District Voices of Escondido newsletter in 2023 to report board decisions to families (candidate statement).' },
          ],
        },
        bio: [
          'Shulok has lived in Escondido more than 20 years; her three children attended Bernardo Elementary and Quantum Academy. She has volunteered in classrooms for 14 years, served on district committees, and worked as a substitute noon supervisor (candidate statement).',
          'She works in software and data science, and in 2023 started District Voices of Escondido, an online newsletter about district decisions.',
        ],
        scorecard: [
          { topic: 'Transparency', position: '✓✓ Wants decisions made after public debate, informed by data and community input (campaign site)', comparison: 'Ranglas promises transparent curriculum.' },
          { topic: 'School choice', position: '✓ Wants more specialty and alternative schools like Quantum Academy', comparison: 'Ranglas stresses core fundamentals.' },
          { topic: 'Teachers', position: '✓ Supports competitive pay to keep educators (campaign site)', comparison: 'Ranglas has not addressed pay.' },
          { topic: 'Classroom technology', position: '✓ Wants intentional, age-appropriate screen use', comparison: 'Ranglas wants “mindful, balanced” classroom technology.' },
          { topic: 'Budget', position: '? No published budget plan', comparison: 'Ranglas cites managing complex budgets at work.' },
        ],
        money: 'No campaign finance totals published as of Oct 9, 2026.',
        endorsements: 'San Diego County Democratic Party (KPBS endorsement guide, Sept. 30, 2026).',
        notes: ['Her District Voices of Escondido newsletter is cited elsewhere in this guide as a source on district budget and trustee pay; read it as advocacy.'],
      },
      {
        id: 'chris-ranglas',
        name: 'Chris Ranglas',
        party: 'NP',
        role: 'University Project Manager',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Ranglas is a UC San Diego IT project manager and Escondido father of four. He has not served on a school board.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board or commission service is documented.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Says he manages complex budgets and technology projects daily as a UCSD IT project manager (candidate statement).' },
            { criterionId: 'instruction', assessment: 'unknown', evidence: 'No teaching role documented; his mother was a college math teacher (candidate statement).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Escondido father of four and local volunteer (candidate statement).' },
          ],
        },
        bio: [
          'Ranglas, 46, is an IT project manager at UC San Diego, an Escondido father of four, and a local volunteer. He was raised by a single mother who became a college math teacher (candidate statement).',
          'His priorities are core academics with balanced classroom technology; protecting arts, athletics and vocational pathways; and bringing parents and teachers together around transparent curriculum and safe facilities.',
        ],
        scorecard: [
          { topic: 'Academics', position: '✓ Prioritizes core fundamentals', comparison: 'Shulok stresses data-driven accountability.' },
          { topic: 'Arts, athletics, CTE', position: '✓✓ Pledges to protect them', comparison: 'Shulok has not addressed them.' },
          { topic: 'Curriculum transparency', position: '✓ Wants transparent curriculum for parents', comparison: 'Shulok wants public debate before decisions.' },
          { topic: 'Budget', position: '✓ Cites operational discipline and financial accountability', comparison: 'Shulok has no budget plan.' },
          { topic: 'Ideology', position: '✓ Republican Party– and Reform California–endorsed', comparison: 'Shulok is Democratic-endorsed.' },
        ],
        money: 'No campaign finance totals published as of Oct 9, 2026.',
        endorsements: 'Republican Party of San Diego County; Reform California (KPBS endorsement guide, Sept. 30, 2026); EUSD trustees Zesty Harper and Joan Gardner (candidate statement).',
        notes: ['His statement lists his designation as Technology Leader/Community Volunteer; the ballot prints University Project Manager.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Shulok', '◐', 'Leftward Progressives back Shulok, the Democratic-endorsed volunteer who wants competitive teacher pay and decisions made after public debate, over a Reform California–endorsed rival.'],
      ['LL', 'Shulok', '◐', 'Loyal Liberals value Shulok’s data-driven approach, service on district committees and the county Democratic Party endorsement.'],
      ['LO', 'Shulok', '●', 'Left-Out Left voters like that Shulok built her own newsletter to hold the board to account, while Ranglas is backed by sitting trustees.'],
      ['OO', 'Ranglas', '○', 'Order and Opportunity Left voters may cross to Ranglas for a focus on core academics, safe facilities and protecting vocational pathways, though Shulok’s teacher-pay pledge also appeals to them.'],
      ['TM', 'Ranglas', '○', 'Tuned-Out Middle voters may like Ranglas’s plain focus on basics, arts, sports and vocational paths, though neither candidate is well known.'],
      ['PP', 'Ranglas', '◐', 'Pragmatic and Polite Right voters value Ranglas’s stress on financial accountability and the backing of sitting trustees, a cautious, continuity-minded choice.'],
      ['UR', 'Ranglas', '◐', 'Unconventional Right voters favor Ranglas, the Republican-endorsed father focused on fundamentals and financial discipline rather than new programs.'],
      ['FC', 'Ranglas', '●', 'Faith First Conservatives back Ranglas, who wants curriculum transparent to parents and parents and teachers working together, a clear fit with their parental-rights priorities.'],
      ['NA', 'Ranglas', '◐', 'No Apologies Right voters prefer Ranglas, endorsed by the county Republican Party and Reform California, though Ranglas’s campaign stresses unity over confrontation.'],
    ]),
    counterArguments: [
      'FC (Ranglas ●): But consider that Ranglas has not served on any district committee, because Shulok has 14 years of classroom volunteering and committee work in these schools.',
      'LO (Shulok ●): But consider that Shulok’s newsletter is advocacy and she has no budget experience, because the district faces tight finances.',
    ],
    readingLinks: [
      { label: 'Sample ballot with candidate statements (BT 440)', url: SAMPLE_BALLOT, summary: 'Shulok’s and Ranglas’s statements in their own words.' },
      { label: 'Shulok campaign site', url: 'https://shulok.org', summary: 'Her priorities in her own words.' },
      { label: 'KPBS: 2026 endorsement guide', url: KPBS_ENDORSEMENTS, summary: 'Party and group endorsements for the November ballot.' },
    ],
  },

  // ---------------------------------------------------------------- EUSD Area 4
  {
    id: 'eusd-trustee-area-4',
    categoryId: 'school',
    title: 'Escondido Union School District, Trustee Area 4',
    tldrLabel: 'Escondido Union SD, Area 4',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Escondido Union School District runs the city’s elementary and middle schools under a five-member board that adopts the budget, approves curriculum, bargains with staff, and hires the superintendent.',
      'Area 4 covers much of northern and eastern Escondido. Zesty Harper, a former teacher on the board since 2014, faces Maggie Cascio, a parent volunteer and former instructional aide who says the board needs more transparency.',
    ],
    introParagraphs: [
      'This is a single November contest for one four-year term. Harper first won the seat in 2014, unseating the incumbent with about 60% (Ballotpedia). The Republican Party and Reform California endorse Harper; no endorsements for Cascio are listed (KPBS endorsement guide, Sept. 30, 2026).',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'zesty-harper',
        name: 'Zesty Harper',
        party: 'NP',
        role: 'Governing Board Member, Escondido Union School District',
        campaignUrl: 'https://www.zestyforschoolboard.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Harper has served on this board since 2014 and taught in Escondido before that.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Trustee since 2014, reelected 2022; earlier served on the district’s Personnel Commission (campaign site; Ballotpedia).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on district budgets for over a decade; says the district stayed balanced without layoffs (campaign site).' },
            { criterionId: 'instruction', assessment: 'met', evidence: 'Former Escondido elementary and middle school teacher with a Cal State San Marcos teaching credential (campaign site; Ballotpedia).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Escondido native; mother of three Escondido public school students and graduates (candidate statement).' },
          ],
        },
        bio: [
          'Harper was born and raised in Escondido, earned an education degree at Cal State San Marcos, and taught middle school before raising three daughters and working as a small business owner and realtor (campaign site).',
          'Elected in 2014 and 2022, she credits the board with campus fencing, an added resource officer, balanced budgets without layoffs, iPads for every student and a restored GATE program.',
        ],
        recordVsChange:
          'Harper offers twelve years of continuity, classroom experience, and a record she says includes balanced budgets and safer campuses. The case for change is Cascio’s call for more transparency and a new voice after three terms.',
        scorecard: [
          { topic: 'Campus safety', position: '✓✓ Calls safety her top priority; fencing and an added resource officer (campaign site)', comparison: 'Cascio has not detailed a safety plan.' },
          { topic: 'Budget', position: '✓ Says the district balanced budgets without layoffs', comparison: 'Cascio cites learning budget trade-offs on school site councils.' },
          { topic: 'Academics', position: '✓ Backs math and literacy initiatives and higher standards', comparison: 'Cascio says the board must put students’ needs first.' },
          { topic: 'School choice', position: '✓ Supports local charters and parent options', comparison: 'Cascio has not addressed charters.' },
          { topic: 'Transparency', position: '? Not a stated priority', comparison: 'Cascio promises open communication and accountability.' },
        ],
        money: 'No campaign finance totals published as of Oct 9, 2026.',
        endorsements: 'Republican Party of San Diego County; Reform California (KPBS endorsement guide, Sept. 30, 2026).',
        notes: ['Record items are from her campaign site and have not been independently verified.'],
      },
      {
        id: 'maggie-cascio',
        name: 'Maggie Cascio',
        party: 'NP',
        role: 'School Volunteer',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Cascio has 15 years as a public school parent volunteer, PTA and school site council member, and former instructional aide. She has not held a board seat.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Served on Parent Teacher Association boards and School Site Councils (candidate statement).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Says site council work taught her budget trade-offs; no district budget role (candidate statement).' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'Worked on campus as an instructional aide (candidate statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Fifteen years of classroom volunteering as a public school parent (candidate statement).' },
          ],
        },
        bio: [
          'Cascio has had children in public schools for 15 years, volunteering in classrooms and serving on PTA boards and school site councils. She also worked on campus as an instructional aide (candidate statement).',
          'She says the board needs trustees who lead with integrity and transparency and who listen to teachers, staff and families.',
        ],
        scorecard: [
          { topic: 'Transparency', position: '✓✓ Promises open communication and full accountability', comparison: 'Harper stresses safety and budgets.' },
          { topic: 'Teachers & staff', position: '✓ Pledges to listen to and respect staff input', comparison: 'Harper backs recruiting and keeping strong teachers.' },
          { topic: 'Budget', position: '~ Site council budget experience only', comparison: 'Harper has voted on budgets since 2014.' },
          { topic: 'Campus safety', position: '? No specific plan', comparison: 'Harper calls safety her top priority.' },
        ],
        money: 'No campaign finance totals published as of Oct 9, 2026.',
        endorsements: 'None listed as of Oct 9, 2026.',
        notes: ['Her statement lists her designation as Parent/School Volunteer; the ballot prints School Volunteer.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Cascio', '◐', 'Leftward Progressives prefer Cascio, a staff-minded parent volunteer, over a Republican-endorsed incumbent who backs charter schools, though Cascio has no endorsements.', 'Leftward Progressives who weigh experience could keep Harper, a former Escondido teacher on the board since 2014, though Harper is Republican- and Reform California–endorsed and supports charters.'],
      ['LL', 'Cascio', '○', 'Loyal Liberals lean slightly to Cascio because Harper carries the Republican and Reform California endorsements, though Cascio has no endorsements or board record.', 'Loyal Liberals who value credentials could back Harper, a credentialed former teacher with twelve years on the board, giving up a newcomer for a Republican-endorsed incumbent.'],
      ['LO', 'Cascio', '●', 'Left-Out Left voters like Cascio, a longtime parent volunteer and former aide challenging a three-term trustee on transparency and listening to staff.'],
      ['OO', 'Harper', '◐', 'Order and Opportunity Left voters may cross to Harper for campus fencing, an added resource officer and balanced budgets without layoffs, the safety and stability they want.'],
      ['TM', 'Harper', '○', 'Tuned-Out Middle voters may stick with Harper, who says the district avoided layoffs and gave every student an iPad, though few will follow the race.'],
      ['PP', 'Harper', '●', 'Pragmatic and Polite Right voters value Harper’s classroom background, twelve years of board experience and balanced budgets, a steady and competent record.'],
      ['UR', 'Harper', '◐', 'Unconventional Right voters favor Harper for campus safety and parent options such as charters, though Harper is the long-serving establishment candidate.'],
      ['FC', 'Harper', '●', 'Faith First Conservatives back Harper, endorsed by Reform California, for support of charters and parent choice and a focus on safety.'],
      ['NA', 'Harper', '◐', 'No Apologies Right voters prefer the Republican-endorsed Harper, though a three-term trustee who stresses safety and budgets is not the fighter they seek.'],
    ]),
    counterArguments: [
      'PP/FC (Harper ●): But consider that after twelve years Harper shares responsibility for the district’s current budget pressures, because her record items come from her own campaign site and have not been checked.',
      'LO (Cascio ●): But consider that Cascio has never served on a governing board, because Harper is a former teacher with long board experience.',
    ],
    readingLinks: [
      { label: 'Sample ballot with candidate statements (BT 108)', url: 'https://www.sdvote.com/content/dam/rov/en/sb/SB-ENG-108.pdf', summary: 'Harper’s and Cascio’s statements in their own words.' },
      { label: 'Harper campaign site', url: 'https://www.zestyforschoolboard.com', summary: 'Her record and priorities as she states them.' },
    ],
  },

  // ---------------------------------------------------------------- Palomar Health Div 3
  {
    id: 'palomar-health-div-3',
    categoryId: 'district',
    title: 'Palomar Health District, Board of Directors, Division 3',
    tldrLabel: 'Palomar Health, Div. 3',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Palomar Health is a public hospital district with a 286-bed hospital in Escondido and a 95-bed hospital in Poway, governed by seven elected directors. UC San Diego had already loaned it $40 million to cope with ongoing financial difficulties (Healthcare Innovation, July 2026).',
      'Since July 2026 Palomar’s hospitals have been run by a joint powers authority with UC San Diego Health. The elected district board still holds the district’s remaining assets and shapes the partnership.',
    ],
    introParagraphs: [
      'This is a single November contest for one four-year term. Laurie Edwards-Tate has held the seat since 2018; in 2022 she led her challenger by more than 60 points in early returns (Voice of San Diego). The Republican Party and the Lincoln Club endorse her; no endorsements for Sarah Telahun are listed (KPBS endorsement guide).',
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living in Division 3 of the Palomar Health District.',
    qualificationCriteria: [
      { id: 'governance', label: 'Public-board governance', detail: 'Directors set policy, oversee the CEO and the district’s stake in the joint UCSD authority.' },
      { id: 'finance', label: 'Hospital finance', detail: 'The district has faced ongoing financial difficulties and borrowed from UC San Diego.' },
      { id: 'clinical', label: 'Healthcare operations and quality', detail: 'Directors oversee patient care, services and staffing.' },
      { id: 'community', label: 'Community health and access', detail: 'Directors decide which services stay close to home.' },
    ],
    candidates: [
      {
        id: 'laurie-edwards-tate',
        name: 'Laurie Edwards-Tate',
        party: 'NP',
        role: 'Incumbent',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Edwards-Tate has been a Palomar Health director since 2018 and runs her own healthcare practice.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Director since December 2018; reelected 2022; has served on the executive board and committees (candidate statement; Voice of San Diego).' },
            { criterionId: 'finance', assessment: 'partial', evidence: 'Says her votes support fiscal responsibility; master’s in human resources management and organizational development (candidate statement).' },
            { criterionId: 'clinical', assessment: 'partial', evidence: 'President and CEO of a long-held healthcare practice; not a clinician (candidate statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Contributes to community philanthropic groups; has represented Division 3 for nearly eight years (candidate statement).' },
          ],
        },
        bio: [
          'Edwards-Tate has represented Division 3 since 2018 and has served on the board’s executive committee and other committees. She is president and CEO of a long-held healthcare practice, has taught business and healthcare subjects, and holds a master’s degree in human resources management and organizational development (candidate statement).',
          'She says her votes support quality patient care, fiscal responsibility and fair treatment of employees.',
        ],
        recordVsChange:
          'Edwards-Tate brings nearly eight years on the board through Palomar’s losses and the move to a joint authority with UCSD. The case for change is that the district’s finances worsened during her tenure, and Telahun offers bedside nursing experience.',
        scorecard: [
          { topic: 'Patient care', position: '✓ Says her votes support quality patient care', comparison: 'Telahun is a working labor and delivery nurse.' },
          { topic: 'Finances', position: '~ Says she backs fiscal responsibility; served during years of losses', comparison: 'Telahun has no finance record.' },
          { topic: 'Staff', position: '✓ Says she supports fair treatment of all employees', comparison: 'Telahun wants to support healthcare workers.' },
          { topic: 'UCSD partnership', position: '? Her vote is not documented here', comparison: 'Telahun has not stated a position.' },
          { topic: 'Ideology', position: '✓ Republican Party– and Lincoln Club–endorsed', comparison: 'Telahun lists no endorsements.' },
        ],
        money: 'No campaign finance totals published as of Oct 9, 2026.',
        endorsements: 'Republican Party of San Diego County; San Diego Lincoln Club (KPBS endorsement guide, Sept. 30, 2026).',
        notes: [
          'In 2023 the board voted to investigate her comments to a reporter criticizing the district’s website terms of use. She sued the district in federal court on First Amendment grounds; the court denied an injunction and dismissed the suit (board agenda, June 2024; Georgetown Free Speech Tracker). No finding against her was made.',
        ],
      },
      {
        id: 'sarah-telahun',
        name: 'Sarah Telahun',
        party: 'NP',
        role: 'Registered Nurse, Kaiser Permanente',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Telahun is a Navy veteran and labor and delivery nurse with 17 years of experience. She has not held office.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No public-board service documented; leadership roles in youth athletics (candidate statement).' },
            { criterionId: 'finance', assessment: 'unknown', evidence: 'No finance role documented; pursuing a master’s in healthcare analytics at USD (candidate statement).' },
            { criterionId: 'clinical', assessment: 'met', evidence: 'Seventeen years as a labor and delivery nurse in military and civilian hospitals (candidate statement).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Volunteers at local schools and in youth athletics (candidate statement).' },
          ],
        },
        bio: [
          'Telahun is a Navy veteran and registered nurse who has spent 17 years as a labor and delivery nurse in military and civilian hospitals in San Diego County. She is pursuing a dual master’s degree in healthcare analytics and informatics at the University of San Diego (candidate statement).',
          'She volunteers at local schools and in youth athletics and is a mother of three.',
        ],
        scorecard: [
          { topic: 'Patient care', position: '✓✓ Seventeen years at the bedside', comparison: 'Edwards-Tate runs a healthcare practice.' },
          { topic: 'Healthcare workers', position: '✓ Wants to support frontline staff', comparison: 'Edwards-Tate cites fair treatment of employees.' },
          { topic: 'Finances', position: '? No published plan', comparison: 'Edwards-Tate cites fiscal responsibility.' },
          { topic: 'UCSD partnership', position: '? No stated position', comparison: 'Edwards-Tate’s vote is not documented here.' },
        ],
        money: 'No campaign finance totals published as of Oct 9, 2026.',
        endorsements: 'None listed as of Oct 9, 2026.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Telahun', '●', 'Leftward Progressives back Telahun, a working nurse who wants to support frontline staff, over an incumbent endorsed by the business-backed Lincoln Club.'],
      ['LL', 'Telahun', '○', 'Loyal Liberals lean to Telahun’s 17 years of clinical expertise over a Republican-endorsed incumbent, but weakly because Telahun has no governing record during a complex UCSD partnership.', 'Loyal Liberals who value institutional knowledge could back Edwards-Tate, a director since 2018 who has served through the move to the UCSD joint authority, giving up a nurse’s bedside view for a Republican- and Lincoln Club–endorsed incumbent.'],
      ['LO', 'Telahun', '●', 'Left-Out Left voters like Telahun, a working nurse and mother, challenging a long-serving director whose district had to borrow from UC San Diego.'],
      ['OO', 'Telahun', '◐', 'Order and Opportunity Left voters favor Telahun, a Navy veteran and labor and delivery nurse, for hands-on care and support for health workers.', 'Order and Opportunity Left voters who want steady hands could keep Edwards-Tate, a director since 2018 who runs a healthcare business, though Edwards-Tate is Republican-endorsed and the district’s finances worsened on her watch.'],
      ['TM', 'Telahun', '○', 'Tuned-Out Middle voters may relate more to Telahun, a working nurse and mother of three, though few will know either candidate.', 'Tuned-Out Middle voters who want a known quantity could keep Edwards-Tate, who has served since 2018, though Telahun knows patient care firsthand.'],
      ['PP', 'Edwards-Tate', '○', 'Pragmatic and Polite Right voters lean to Edwards-Tate’s eight years of board experience during a delicate hospital partnership, though Edwards-Tate’s lawsuit against her own board is the kind of fight they dislike.'],
      ['UR', 'Edwards-Tate', '◐', 'Unconventional Right voters favor Edwards-Tate, a business owner who took her own board to court over free speech, over a newcomer with no record.'],
      ['FC', 'Edwards-Tate', '◐', 'Faith First Conservatives lean to Edwards-Tate, the Republican-endorsed incumbent who backs fiscal responsibility, though the race touches none of their social priorities.'],
      ['NA', 'Edwards-Tate', '●', 'No Apologies Right voters back Edwards-Tate, who sued her own board on First Amendment grounds when it moved to investigate her criticism of the district.'],
    ]),
    counterArguments: [
      'NA (Edwards-Tate ●): But consider that a federal court denied her injunction and dismissed her suit, because the district’s finances also declined during her years on the board.',
      'LP/LO (Telahun ●): But consider that Telahun has no governing or hospital-finance experience, because the district’s debt and the UCSD partnership need close oversight.',
    ],
    readingLinks: [
      { label: 'Sample ballot with candidate statements (BT 440)', url: SAMPLE_BALLOT, summary: 'Edwards-Tate’s and Telahun’s statements in their own words.' },
      { label: 'Healthcare Innovation: Palomar Health and UCSD Health finalize JPA', url: 'https://www.hcinnovationgroup.com/finance-revenue-cycle/mergers-acquisitions/news/55388700/palomar-health-ucsd-health-finalize-joint-powers-agreement', summary: 'How the joint authority works and why Palomar sought it.' },
      { label: 'Georgetown Free Speech Tracker: Edwards-Tate v. Palomar Health', url: 'https://freespeechproject.georgetown.edu/tracker-entries/board-member-sues-california-public-health-district-over-first-amendment-issues/', summary: 'Background on her 2023 lawsuit against the district.' },
    ],
  },

  // ---------------------------------------------------------------- Rincon del Diablo Div 3
  {
    id: 'rincon-water-div-3',
    categoryId: 'district',
    title: 'Rincon del Diablo Municipal Water District, Board of Directors, Division 3',
    tldrLabel: 'Rincon del Diablo Water, Div. 3',
    seatContext: 'Appointed incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Rincon del Diablo Municipal Water District delivers water to most of Escondido and nearby unincorporated land, about 42 square miles. Five directors, each elected by division for four-year terms, set rates, budgets and infrastructure plans.',
      'Division 3’s seat fell vacant this year, and the board appointed Kenneth Hoving to serve until December. Voters now choose between him and Abel Martinez, a cybersecurity engineer who has trained for the job.',
    ],
    introParagraphs: [
      'This is a single November contest for a four-year term. The board filled the vacancy by appointment at its March 24, 2026 meeting (district notice). Reform California endorses Hoving; the county Democratic Party endorses Martinez (KPBS endorsement guide, Sept. 30, 2026).',
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living in Division 3 of the district.',
    qualificationCriteria: [
      { id: 'governance', label: 'Special-district governance', detail: 'Directors set policy and rates and oversee the general manager under public-meeting rules.' },
      { id: 'finance', label: 'Budget and rates', detail: 'The board adopts the budget and water rates that ratepayers pay.' },
      { id: 'infrastructure', label: 'Water infrastructure and reliability', detail: 'Directors plan pipe replacement, storage, drought supply and system security.' },
      { id: 'community', label: 'Ratepayer engagement', detail: 'Directors answer to customers in their division.' },
    ],
    candidates: [
      {
        id: 'kenneth-hoving',
        name: 'Kenneth Hoving',
        party: 'NP',
        role: 'Appointed Incumbent',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Hoving is a retired executive who led several publicly traded companies and has been the appointed Division 3 director since spring 2026.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Appointed director for Division 3 in 2026; board page lists his term as 2026 (district site).' },
            { criterionId: 'finance', assessment: 'met', evidence: 'A 45-year business career ending in executive leadership of several publicly traded companies (candidate statement).' },
            { criterionId: 'infrastructure', assessment: 'partial', evidence: 'Oversees district infrastructure and long-term planning as a director; no water-industry career (candidate statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Raised in Escondido; family roots there since 1969; Division 3 resident for 10 years (candidate statement).' },
          ],
        },
        bio: [
          'Hoving was raised in Escondido and graduated from Escondido High School and San Diego State. His 45-year business career rose from entry-level jobs to executive leadership of several publicly traded companies (candidate statement).',
          'He has lived in Division 3 for 10 years and was appointed its director in 2026. He promises dependable, safe water at a fair cost.',
        ],
        recordVsChange:
          'Hoving has served only since spring 2026, but brings senior corporate finance and planning experience. The case for change is that he has not yet faced voters, and Martinez brings infrastructure-security expertise.',
        scorecard: [
          { topic: 'Rates/affordability', position: '✓ Promises water at a fair and affordable cost', comparison: 'Martinez promises responsible fiscal management.' },
          { topic: 'Infrastructure', position: '✓ Cites maintaining infrastructure and future reliability', comparison: 'Martinez stresses resilient systems and drought planning.' },
          { topic: 'Finance', position: '✓✓ Executive at several publicly traded companies', comparison: 'Martinez has no finance record.' },
          { topic: 'Continuity', position: '✓ Praises the current board and staff', comparison: 'Martinez promises to ask hard questions.' },
        ],
        money: 'No campaign finance totals published as of Oct 9, 2026.',
        endorsements: 'Reform California (KPBS endorsement guide, Sept. 30, 2026).',
      },
      {
        id: 'abel-martinez',
        name: 'Abel Martinez',
        party: 'NP',
        role: 'Cybersecurity Engineer',
        campaignUrl: 'http://www.abel4waterboard.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Martinez served 22 years in the military and has spent more than 12 years defending critical infrastructure as a cybersecurity engineer. He has not held office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Has attended district board meetings for the past year and leads Escondido veterans’ organizations (candidate statement).' },
            { criterionId: 'finance', assessment: 'unknown', evidence: 'No budget or finance role is documented.' },
            { criterionId: 'infrastructure', assessment: 'met', evidence: 'More than 12 years as a cybersecurity engineer for critical infrastructure; completed Water Distribution Operator coursework and the Water Citizens Academy (candidate statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Division 3 customer for 25 years (candidate statement).' },
          ],
        },
        bio: [
          'Martinez, a Navy veteran, served 22 years in the military and has spent more than 12 years since as a cybersecurity engineer protecting critical infrastructure. He holds bachelor’s and master’s degrees (candidate statement; campaign site).',
          'A Division 3 customer for 25 years, he has attended board meetings, completed water distribution operator coursework and leads local veterans’ groups.',
        ],
        scorecard: [
          { topic: 'Infrastructure', position: '✓✓ Reliable, resilient systems; drought and growth planning', comparison: 'Hoving cites maintaining infrastructure.' },
          { topic: 'System security', position: '✓✓ Career defending critical infrastructure', comparison: 'Hoving has not addressed security.' },
          { topic: 'Transparency', position: '✓ Promises to keep residents informed', comparison: 'Hoving praises the current board.' },
          { topic: 'Rates/finance', position: '~ Promises responsible fiscal management; no finance record', comparison: 'Hoving was a corporate executive.' },
        ],
        money: 'No campaign finance totals published as of Oct 9, 2026.',
        endorsements: 'San Diego County Democratic Party (KPBS endorsement guide, Sept. 30, 2026).',
        notes: ['His full name is Abelardo Martinez; his statement lists him as Staff Cyber Systems Engineer.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Martinez', '◐', 'Leftward Progressives back Martinez, the Democratic-endorsed engineer who promises transparency, over a retired corporate executive endorsed by Reform California.'],
      ['LL', 'Martinez', '◐', 'Loyal Liberals value Martinez’s technical expertise in protecting critical infrastructure, water-operator training and the Democratic endorsement.'],
      ['LO', 'Martinez', '●', 'Left-Out Left voters like Martinez, a 25-year ratepayer who promises to ask hard questions, against a former executive whom the board appointed rather than voters chose.'],
      ['OO', 'Martinez', '◐', 'Order and Opportunity Left voters favor Martinez, a 22-year military veteran focused on reliable, secure water systems, though Martinez has no finance record.'],
      ['TM', 'Hoving', '○', 'Tuned-Out Middle voters focused on their water bills may lean to Hoving’s promise of safe water at a fair and affordable cost, though few will know either candidate.'],
      ['PP', 'Hoving', '◐', 'Pragmatic and Polite Right voters value Hoving’s 45-year business career and fiscal focus on a rate-setting board, though Hoving has not yet faced voters.'],
      ['UR', 'Hoving', '◐', 'Unconventional Right voters favor Hoving, an Escondido native and retired executive focused on keeping costs down, over a Democratic-endorsed rival.'],
      ['FC', 'Hoving', '◐', 'Faith First Conservatives lean to Hoving, the Reform California–endorsed Escondido native who promises fair rates.'],
      ['NA', 'Hoving', '◐', 'No Apologies Right voters prefer Hoving, a business executive endorsed by Reform California, as a check on rates and spending.'],
    ]),
    counterArguments: [
      'LO (Martinez ●): But consider that Martinez has no budget or rate-setting experience, because setting rates is central to a water board’s job.',
      'PP/NA (Hoving ◐): But consider that Hoving was appointed in spring 2026 and has not yet faced voters, because Martinez has attended board meetings for a year and brings infrastructure-security expertise.',
    ],
    readingLinks: [
      { label: 'Sample ballot with candidate statements (BT 110)', url: 'https://www.sdvote.com/content/dam/rov/en/sb/SB-ENG-110.pdf', summary: 'Hoving’s and Martinez’s statements in their own words.' },
      { label: 'Rincon del Diablo MWD: Board of Directors', url: 'https://www.rinconwater.org/governance/board-of-directors/', summary: 'Current directors and terms.' },
      { label: 'Rincon del Diablo MWD: Division 3 vacancy notice', url: 'https://www.rinconwater.org/notice-of-vacancy-board-of-directors-division-3/', summary: 'How the board filled the seat in March 2026.' },
    ],
  },
];
