import type { Race, QualificationCriterion } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Escondido-area local contests (ZIP 92026): high school and elementary school boards, Palomar College,
 * Escondido mayor and council, and Deer Springs Fire Protection District. All offices are nonpartisan;
 * party labels below are context from public endorsements, not ballot designations.
 */

const SCHOOL_LEGAL =
  'U.S. citizen, 18 or older, registered voter living in the trustee area; not an employee of the district (Cal. Education Code § 35107).';

const SCHOOL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Board governance and oversight', detail: 'Trustees adopt policy, approve contracts, and hire and evaluate the superintendent as one vote on a five-member board.' },
  { id: 'budget', label: 'Budget and fiscal oversight', detail: 'The board adopts a multi-million-dollar budget and must keep the district solvent while negotiating staff pay.' },
  { id: 'instruction', label: 'Knowledge of teaching and student outcomes', detail: 'Trustees approve curriculum, pilots, and graduation and discipline policies.' },
  { id: 'community', label: 'Parent, staff, and community engagement', detail: 'Trustees hear from families, teachers, and classified staff in public meetings and answer for district decisions.' },
];

const COUNCIL_LEGAL =
  'U.S. citizen, 18 or older, registered voter living in the council district they would represent (and in the City of Escondido).';

const COUNCIL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Municipal policy and governance', detail: 'The five-member Council passes city laws, oversees the city manager, and sits on regional boards.' },
  { id: 'budget', label: 'Budget and finance', detail: 'The Council adopts the city budget, sets fees, and has been working through a budget deficit.' },
  { id: 'landuse', label: 'Housing and land use', detail: 'The Council decides zoning, development approvals, and local housing and homelessness policy.' },
  { id: 'constituent', label: 'District knowledge and constituent service', detail: 'Councilmembers field resident requests and represent neighborhood concerns in a specific district.' },
];

export const RACES_ESCONDIDO: Race[] = [
  // ---------------------------------------------------------------- EUHSD Area 5
  {
    id: 'euhsd-trustee-area-5',
    categoryId: 'school',
    title: 'Escondido Union High School District, Trustee Area 5',
    tldrLabel: 'Escondido Union HSD, Area 5',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Escondido Union High School District runs the district’s high schools, Escondido High and the other comprehensive campuses plus charter and alternative programs, under a five-member elected board. Trustees adopt the budget, approve curriculum and policies, and hire the superintendent.',
      'Area 5 covers northern Escondido. The contest pits an incumbent backed by the Republican Party of San Diego County against a retired teacher backed by the county Democratic Party and school employee unions, so the choice tracks a wider split over curriculum pilots, parental-notice policies, and how the board works with teachers.',
    ],
    introParagraphs: [
      'This is a single November contest; there was no June primary for the seat. David Vincent won the seat in a March 2024 special election after longtime trustee Jon Petersen left the board, defeating Brian Lamere (Ballotpedia). His term ends in December 2026 (district board page).',
      'The office is nonpartisan, but both candidates carry clear partisan signals through their endorsements.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'david-vincent',
        name: 'David Vincent',
        party: 'NP',
        role: 'Governing Board Member',
        campaignUrl: 'https://www.votedavidvincent.com/',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Vincent has served on the board since March 2024 and now holds an officer role as board clerk. He is a public-health scientist and business owner, not a K-12 educator.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Trustee for Area 5 since a March 2024 special election; listed as board Clerk on the district’s board page.' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Votes on the district budget as a trustee; has also run his own life-sciences consulting company for about 25 years (Palomar Telescope Q&A, 2020; campaign site).' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'Holds a Ph.D. in public health and has taught graduate regulatory-affairs students at San Diego State; no K-12 teaching role documented.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Has voted on contested curriculum pilots and policies during his term and ran for the Palomar College board in 2020; his own site cites parent-involvement and school-safety priorities.' },
          ],
        },
        bio: [
          'Vincent is a scientist, adjunct instructor, and co-owner of a life-sciences consulting company who lives in north Escondido with his wife and three daughters. He holds degrees in industrial microbiology and a master’s and Ph.D. in public health (campaign site).',
          'He won the seat in March 2024 and is seeking a full term. He previously ran for the Palomar College governing board (2020). He is endorsed by the Republican Party of San Diego County and Reform California (iVoterGuide) and by Mayor Dane White and several local officials (his campaign site).',
        ],
        recordVsChange:
          'In under three years Vincent has become board clerk, and the district points to rising state test scores and kept reserves, though those figures are his campaign’s claim. The case for change is that his votes against and then for ethnic studies pilots show a board still unsettled on curriculum, and challengers argue teachers and classified staff should have more say.',
        scorecard: [
          { topic: 'Budget/reserves', position: '✓ Favors conservative budgeting and building reserves to protect services in a downturn (campaign site)', comparison: 'Tomasi has not published a budget platform.' },
          { topic: 'Curriculum/ethnic studies', position: '~ Voted against the second reading of the ethnic studies pilot on May 14, 2024, then voted for the AP African American Studies and English 9 Ethnic Studies pilots on May 13, 2025 (iVoterGuide)', comparison: 'Tomasi’s position is not published.' },
          { topic: 'School choice/charters', position: '✓ Supports local charter schools and Del Lago Academy (campaign site)', comparison: 'Tomasi’s position on charters is not published.' },
          { topic: 'Campus safety', position: '✓ Backs campus wellness centers and partnerships with local law enforcement; voted Feb 10, 2026 for a board policy on immigration enforcement response (campaign site; iVoterGuide)', comparison: 'Tomasi has not detailed a safety agenda.' },
          { topic: 'Parent involvement', position: '✓ Says parents should know what is taught, how, and by whom (campaign site)', comparison: 'Tomasi emphasizes teachers and school staff through her endorsers.' },
          { topic: 'Career-technical education', position: '✓ Wants CTE treated as equal to college-prep pathways', comparison: 'Tomasi’s position is not published.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'Republican Party of San Diego County; Reform California (per iVoterGuide, a faith-oriented voter guide). Campaign site also lists Mayor Dane White, Deputy Mayor Joe Garcia, Councilmembers Christian Garcia and Judy Fitzgerald, and EUHSD board members Christi Knight, Bob Weller, and Carol Durney.',
        notes: [
          'Test-score and reserve claims come from his campaign website and have not been independently verified.',
        ],
      },
      {
        id: 'georgine-tomasi',
        name: 'Georgine Tomasi',
        party: 'NP',
        role: 'Retired Teacher',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Tomasi lists a career as a teacher and is president of the Escondido Democratic Club. She has not served on a school board, and she lost a 2014 race for this same seat.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No school board or other elected-board service is documented; she ran for this seat in 2014 and received about 33% (Ballotpedia).' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget or finance role is documented.' },
            { criterionId: 'instruction', assessment: 'met', evidence: 'Ballot designation is Retired Teacher; endorsed by the Escondido Elementary Educators Association, which suggests an Escondido classroom background (details not published).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'President of the Escondido Democratic Club (iVoterGuide); endorsed by the California School Employees Association.' },
          ],
        },
        bio: [
          'Tomasi is a retired teacher who ran for this same trustee seat in 2014 and lost to Jon Petersen, 67% to 33% (Ballotpedia). She is president of the Escondido Democratic Club.',
          'She has not published a platform, and her listed endorsers are the county Democratic Party, school-employee unions, and education groups.',
        ],
        scorecard: [
          { topic: 'Teachers & staff', position: '✓ Backed by the California School Employees Association and the Escondido Elementary Educators Association', comparison: 'Vincent is backed by the Republican Party and local elected officials.' },
          { topic: 'Budget/reserves', position: '? No published budget platform', comparison: 'Vincent favors conservative budgeting and larger reserves.' },
          { topic: 'Curriculum/ethnic studies', position: '? No published position', comparison: 'Vincent voted against the 2024 ethnic studies pilot, then for the 2025 pilots.' },
          { topic: 'Campus safety', position: '? No published position', comparison: 'Vincent backs wellness centers and police partnerships.' },
          { topic: 'Ideology', position: '✓ Democratic Party–aligned (club president; party-endorsed)', comparison: 'Vincent is Republican Party–endorsed.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party; California School Employees Association; Escondido Democratic Club; San Diego Democratic Education Alliance; Escondido Elementary Educators Association (per iVoterGuide, as of Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Tomasi', '◐', 'Progressive Left voters side with the retired teacher backed by the county Democratic Party and school-employee unions over a Republican Party–endorsed incumbent, though she has said little about her platform.'],
      ['EL', 'Tomasi', '◐', 'Establishment Liberals follow the Democratic Party and union endorsements to the retired teacher, accepting thin policy detail.'],
      ['DM', 'Tomasi', '◐', 'Democratic Mainstays back the candidate endorsed by the county party and by the school-staff unions they trust.'],
      ['OL', 'Tomasi', '○', 'Outsider Left voters lean toward the challenger and the teacher-backed side, but weakly because she has published almost nothing.'],
      ['SS', '—', '—', 'Stressed Sideliners have little to go on in a low-information race between an incumbent and a challenger who has not published a platform.', 'With little to separate the candidates on everyday concerns, Stressed Sideliners can let experience decide: Vincent has served on the board since 2024, is now board clerk, and has run his own consulting company, while Tomasi has no board service.'],
      ['AR', 'Vincent', '○', 'Ambivalent Right voters may prefer the incumbent who stresses balanced budgets and reserves, but without strong party feeling.'],
      ['PR', 'Vincent', '◐', 'Populist Right voters favor the Republican Party–endorsed trustee who says parents should know what is taught, though his votes on curriculum pilots were mixed.'],
      ['CC', 'Vincent', '●', 'Committed Conservatives value his conservative budgeting, reserves, charter support, and Republican Party endorsement.'],
      ['FF', 'Vincent', '◐', 'Faith and Flag Conservatives back the Republican- and Reform California–endorsed incumbent, tempered by his 2025 vote for ethnic studies pilots.'],
    ]),
    counterArguments: [
      'CC/PR (Vincent ●/◐): But Vincent voted in May 2025 for the ethnic studies pilots he had resisted a year earlier, so his curriculum record is not uniformly conservative.',
      'PL/EL/DM (Tomasi ◐): But Tomasi has published no platform and has no board experience, so voters are relying mainly on endorsements.',
    ],
    readingLinks: [
      { label: 'North County Chronicle: November ballot guide', url: 'https://northcountychronicle.com/articles/election/north-county-voters-face-a-full-ballot-this-november/', summary: 'Lists every Escondido-area school, city, college, and fire district contest.' },
      { label: 'iVoterGuide: David Vincent profile', url: 'https://ivoterguide.com/candidate/93640/race/30422/election/1454', summary: 'Faith-oriented guide with voting-record entries and endorsements; label as a partisan-leaning source.' },
    ],
  },

  // ---------------------------------------------------------------- EUHSD Area 2
  {
    id: 'euhsd-trustee-area-2',
    categoryId: 'school',
    title: 'Escondido Union High School District, Trustee Area 2',
    tldrLabel: 'Escondido Union HSD, Area 2',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The Escondido Union High School District board adopts the high school budget, curriculum, and policies and picks the superintendent. One vote of five can decide a split on controversial items such as ethnic studies pilots and the district’s response to immigration enforcement.',
      'Area 2 is an open seat: the current trustee’s term ends in December 2026, and three candidates, all listing teaching or college-teaching backgrounds, are competing for one four-year term.',
    ],
    introParagraphs: [
      'This is a single November contest; voters choose one. Rafaela Cervantes is endorsed by the county Democratic Party, the Escondido Democratic Club, and the San Diego Building & Construction Trades Council; Joe Hinrichs is endorsed by the Republican Party of San Diego County and Reform California (iVoterGuide). No endorsements are published for Mark Lucas.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'rafaela-cervantes',
        name: 'Rafaela Cervantes',
        party: 'NP',
        role: 'College Professor',
        campaignUrl: 'https://www.cervantes4euhsd.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Cervantes says she has more than 20 years in education and is a parent in the district. She has not held a school board seat.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected-board service is documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget or finance role is documented.' },
            { criterionId: 'instruction', assessment: 'met', evidence: 'Says she has spent more than 20 years in education (campaign site); ballot designation is College Professor.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Describes herself as a parent and educator focused on multilingual families and English learners (campaign site).' },
          ],
        },
        bio: [
          'Cervantes is a college professor who says she has spent more than 20 years in education serving students, families, and the community, and she is also a parent.',
          'Her campaign stresses college and career readiness, support for teachers, and a stronger voice for families, with a special focus on Hispanic students, multilingual families, and English learners.',
        ],
        scorecard: [
          { topic: 'College & career readiness', position: '✓✓ Wants expanded college prep, career technical education, financial aid workshops, and internships', comparison: 'Hinrichs and Lucas have not published platforms.' },
          { topic: 'English learners', position: '✓✓ Says she is especially committed to multilingual families and English learners', comparison: 'Hinrichs and Lucas have not published positions.' },
          { topic: 'Teachers & staff', position: '✓ Pledges classroom resources, professional support, and collaboration', comparison: 'Hinrichs has not published a labor position.' },
          { topic: 'Family voice', position: '✓ Says every family deserves a voice in decisions', comparison: 'Hinrichs and Lucas have not published positions.' },
          { topic: 'Budget', position: '? No published budget platform', comparison: 'None of the candidates has published budget specifics.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party; Escondido Democratic Club; San Diego Building & Construction Trades Council (per iVoterGuide, as of Oct 2026).',
      },
      {
        id: 'joe-hinrichs',
        name: 'Joe Hinrichs',
        party: 'NP',
        role: 'Public School Teacher',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Hinrichs lists himself as a public school teacher. No other background, platform, or board service has been published.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected-board service is documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget or finance role is documented.' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'Ballot designation is Public School Teacher; school, years, and subject are not published.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'No community or parent-engagement record is published.' },
          ],
        },
        bio: [
          'Hinrichs is a public school teacher on the ballot. He has published little about his background or platform.',
          'The Republican Party of San Diego County and Reform California have endorsed him.',
        ],
        scorecard: [
          { topic: 'Ideology', position: '✓ Republican Party–endorsed and backed by Reform California', comparison: 'Cervantes is Democratic Party–endorsed.' },
          { topic: 'Teaching experience', position: '~ Listed as a public school teacher; details unpublished', comparison: 'Cervantes cites 20+ years in education; Lucas lists teaching and college teaching.' },
          { topic: 'Budget', position: '? No published position', comparison: 'None of the candidates has published budget specifics.' },
          { topic: 'Curriculum/ethnic studies', position: '? No published position', comparison: 'Cervantes’s platform stresses career and college readiness and multilingual learners.' },
          { topic: 'Campus safety', position: '? No published position', comparison: 'No candidate has published a safety plan.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'Republican Party of San Diego County; Reform California (per iVoterGuide, a faith-oriented voter guide, as of Oct 2026).',
      },
      {
        id: 'mark-lucas',
        name: 'Mark Lucas',
        party: 'NP',
        role: 'Teacher/College Professor',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Lucas lists teaching and college-professor roles. No platform, board service, or endorsements have been published.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected-board service is documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget or finance role is documented.' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'Ballot designation is Teacher/College Professor; institutions and years are not published.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'No community or parent-engagement record is published.' },
          ],
        },
        bio: [
          'Lucas is a teacher and college professor on the ballot. He has not published a biography, platform, or endorsements, and he answered none of iVoterGuide’s questionnaire.',
        ],
        scorecard: [
          { topic: 'Teaching experience', position: '~ Listed as teacher and college professor; details unpublished', comparison: 'Cervantes cites 20+ years in education.' },
          { topic: 'Budget', position: '? No published position', comparison: 'None of the candidates has published budget specifics.' },
          { topic: 'Curriculum/ethnic studies', position: '? No published position', comparison: 'Cervantes’s platform stresses career readiness and multilingual learners.' },
          { topic: 'Campus safety', position: '? No published position', comparison: 'No candidate has published a safety plan.' },
          { topic: 'Ideology', position: '? No endorsements published', comparison: 'Cervantes is Democratic-endorsed; Hinrichs is Republican-endorsed.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None published as of Oct 7, 2026.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Cervantes', '◐', 'Progressive Left voters prefer the Democratic Party– and Building Trades–backed educator who emphasizes English learners and multilingual families over a Republican Party–endorsed rival.'],
      ['EL', 'Cervantes', '◐', 'Establishment Liberals value an educator with 20+ years in the field and the county Democratic Party endorsement.'],
      ['DM', 'Cervantes', '◐', 'Democratic Mainstays follow the county party and the Building Trades to the Democratic-endorsed candidate.'],
      ['OL', 'Cervantes', '○', 'Outsider Left voters lean to the candidate focused on families and English learners, but weakly given how little each has published.'],
      ['SS', '—', '—', 'Stressed Sideliners have almost no information on any of the three candidates, so there is no defensible lean.', 'Stressed Sideliners have almost nothing to compare here, so experience is the tie-breaker: Cervantes says she has more than 20 years in education and is a district parent, while Hinrichs and Lucas have published few details about their careers.'],
      ['AR', '—', '—', 'Ambivalent Right voters have no budget or approach information to separate the candidates, and the unendorsed teacher is a blank slate.', 'Ambivalent Right voters get no budget signal from any candidate, so experience can break the tie; Cervantes cites 20-plus years in education, though choosing her means backing the Democratic-endorsed candidate over the Republican-endorsed Hinrichs.'],
      ['PR', 'Hinrichs', '◐', 'Populist Right voters favor the Republican Party– and Reform California–endorsed teacher against the Democratic Party–backed candidate, though he has published no platform.'],
      ['CC', 'Hinrichs', '◐', 'Committed Conservatives follow the Republican Party endorsement to the public school teacher, with little else to go on.'],
      ['FF', 'Hinrichs', '◐', 'Faith and Flag Conservatives lean to the Reform California– and Republican-endorsed candidate on values grounds, despite thin information.'],
    ]),
    counterArguments: [
      'PR/CC/FF (Hinrichs ◐): But Hinrichs has published no biography or platform, so voters are relying almost entirely on endorsements; Lucas, the unendorsed teacher and professor, may be equally qualified.',
      'PL/EL/DM (Cervantes ◐): But her platform is general, and her 20-plus years in education come from her own campaign site rather than an independent record.',
    ],
    readingLinks: [
      { label: 'North County Chronicle: November ballot guide', url: 'https://northcountychronicle.com/articles/election/north-county-voters-face-a-full-ballot-this-november/', summary: 'Lists the three Area 2 candidates and their ballot designations.' },
      { label: 'Cervantes campaign site', url: 'https://www.cervantes4euhsd.com/', summary: 'Her priorities in her own words.' },
    ],
  },

  // ---------------------------------------------------------------- EUSD Area 5
  {
    id: 'eusd-trustee-area-5',
    categoryId: 'school',
    title: 'Escondido Union School District, Trustee Area 5',
    tldrLabel: 'Escondido Union SD, Area 5',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Escondido Union School District runs the city’s elementary and middle schools under a five-member board that adopts the budget, approves curriculum, bargains with employee groups, and hires the superintendent.',
      'The board is facing tight finances (staff warned in February 2026 that reserves could be at risk by 2028) and teacher and classified-staff concerns about pay and health premiums, so Area 5’s vote can matter on budget and labor decisions. The incumbent is an Escondido police officer; the challenger is a teacher backed by the county Democratic Party.',
    ],
    introParagraphs: [
      'This is a single November contest for one four-year term; there was no June primary. Frank Huston was appointed to the seat in early 2020 and won unopposed in the elections that followed (Escondido Times-Advocate; Coast News). Bonnie Wagner is endorsed by the county Democratic Party, the Escondido Democratic Club, and the San Diego Building & Construction Trades Council.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'frank-huston',
        name: 'Frank Huston',
        party: 'NP',
        role: 'Incumbent',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Huston has served on the board since 2020 and has lived and worked in Escondido nearly 30 years as a police officer.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Area 5 trustee since his 2020 appointment; reelected unopposed.' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on the district’s annual budgets over multiple years; no separate finance background is documented.' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'No teaching background; has built school-visit presentations on positive relationships with law enforcement (district board page).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Nearly 30 years living and working in Escondido and a Police Athletic League coach (Times-Advocate).' },
          ],
        },
        bio: [
          'Huston is an Escondido police officer who has lived and worked in the city for nearly 30 years. The board appointed him in early 2020 to replace Dr. Gary Altenburg, who had resigned, and he has since been elected without opposition.',
          'The district’s board page says he created presentations for local elementary schools to build positive relationships with law enforcement. Beyond that biography, he has published little about his 2026 platform.',
        ],
        recordVsChange:
          'Huston has served on the board for nearly seven years, which brings continuity as the district faces a projected squeeze on reserves. The case for change is that the board is divided on compensation and priorities, and Wagner brings classroom experience that no current officer-trustee has.',
        scorecard: [
          { topic: 'Budget/reserves', position: '? No published 2026 position; staff warned of possible reserve shortfalls by 2028', comparison: 'Wagner has not published budget specifics.' },
          { topic: 'Campus safety', position: '✓ Police officer who runs school law-enforcement outreach presentations (district board page)', comparison: 'Wagner has not published a safety platform.' },
          { topic: 'Teachers & staff', position: '? No published position on pay or class size', comparison: 'Wagner is a teacher and is backed by the building trades and Democratic groups.' },
          { topic: 'Curriculum', position: '? No published position', comparison: 'Wagner says she will listen to families and staff first.' },
          { topic: 'Trustee pay', position: '? Board considered raising monthly trustee stipends from $400 to $2,000 in March 2026; his vote is not documented here', comparison: 'Wagner’s position is not published.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None publicly verified as of Oct 7, 2026.',
        notes: [
          'Board action in March 2026 on trustee stipends was reported before the vote (District Voices of Escondido, Feb 28, 2026); how individual trustees voted was not published in that report.',
        ],
      },
      {
        id: 'bonnie-wagner',
        name: 'Bonnie Wagner',
        party: 'NP',
        role: 'Educator/Project Manager',
        campaignUrl: 'https://www.bonniewagner.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Wagner is a teacher of about ten years with a master’s degree in education. She has not served on a school board.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected-board service is documented.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Ballot designation includes project management; says she can read legal documents and learn complex issues (campaign site), but no budget role is documented.' },
            { criterionId: 'instruction', assessment: 'met', evidence: 'Teacher for about ten years, three in Escondido Union; M.Ed. from UC San Diego (campaign site; her site gives nine years in its Spanish version).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Says she will listen to Escondido families and school staff before making decisions; endorsements show support from the local Democratic club and building trades.' },
          ],
        },
        bio: [
          'Wagner is a teacher with about ten years in the classroom, three of them in the Escondido Union School District, and a master’s degree in education from UC San Diego. She taught before, during, and after the pandemic.',
          'Her campaign says her priorities are preparing Escondido students for the modern world and listening to families and school staff before district decisions. The county Democratic Party, the Escondido Democratic Club, and the Building & Construction Trades Council endorse her.',
        ],
        scorecard: [
          { topic: 'Teachers & staff', position: '✓ Current classroom teacher who says staff voices come first', comparison: 'Huston is a police officer without classroom experience.' },
          { topic: 'Curriculum', position: '✓ Priority is preparing students for the modern world; no specific curriculum position published', comparison: 'Huston has no published position.' },
          { topic: 'Family engagement', position: '✓ Pledges to listen to families and staff before decisions', comparison: 'Huston has no published position.' },
          { topic: 'Budget/reserves', position: '? No published budget plan', comparison: 'Huston has also published none.' },
          { topic: 'Campus safety', position: '? No published position', comparison: 'Huston runs police outreach in schools.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party; Escondido Democratic Club; San Diego Building & Construction Trades Council (per iVoterGuide, as of Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Wagner', '◐', 'Progressive Left voters favor the classroom teacher backed by the county Democratic Party and the building trades over an incumbent police officer who has published little.', 'Progressive Left voters who give heavy weight to experience could keep Huston, a trustee since 2020 as the district faces a reserve squeeze, but they would give up a Democratic-endorsed classroom teacher for an officer with no published platform.'],
      ['EL', 'Wagner', '◐', 'Establishment Liberals value a credentialed teacher with a master’s in education and the county Democratic Party’s endorsement.', 'Establishment Liberals who value governing know-how could favor Huston’s nearly seven years of district budget votes as reserves tighten, even though Wagner brings the education credentials and Democratic Party endorsement they usually prize.'],
      ['DM', 'Wagner', '◐', 'Democratic Mainstays follow the county party and the local Democratic club to the teacher.', 'Democratic Mainstays focused on steady hands during a budget crunch might back Huston, an Escondido police officer who has served on the board since 2020, though that means parting with the county party and Democratic club that endorse Wagner.'],
      ['OL', 'Wagner', '○', 'Outsider Left voters lean toward the challenger who says she will listen to families and staff first, but weakly because neither has a detailed platform.', 'Outsider Left voters who still rank experience first could accept Huston’s years on the board and nearly 30 years working in Escondido, setting aside Wagner’s promise to listen to families and staff before decisions.'],
      ['SS', 'Wagner', '○', 'Stressed Sideliners may relate to a working teacher worried about staff pay and school resources, though most will not know either candidate.', 'Stressed Sideliners who mostly want schools to run smoothly could stick with Huston, a familiar local officer with years of board budget votes, though Wagner speaks more directly to their worries about staff pay and school resources.'],
      ['AR', 'Huston', '○', 'Ambivalent Right voters may prefer the experienced incumbent for continuity as the district manages tight finances.'],
      ['PR', 'Huston', '◐', 'Populist Right voters lean to the local police officer over a Democratic Party–endorsed challenger, though he has not published a platform.'],
      ['CC', 'Huston', '◐', 'Committed Conservatives lean to the incumbent officer who runs law-enforcement outreach in schools against a Democratic-backed challenger.'],
      ['FF', 'Huston', '◐', 'Faith and Flag Conservatives prefer a police-officer trustee who backs law-enforcement ties to schools over a Democratic Party–backed teacher.'],
    ]),
    counterArguments: [
      'PR/CC/FF (Huston ◐): But Huston has published no 2026 platform or party endorsement, so the lean rests on his job and the Democratic backing of his opponent rather than a record on budget or curriculum.',
      'PL/EL/DM (Wagner ◐): But Wagner has not served on a board or detailed how she would handle the district’s budget squeeze, and Huston’s years on the board give him a head start.',
    ],
    readingLinks: [
      { label: 'District Voices of Escondido: trustee pay proposal', url: 'https://districtvoices.substack.com/p/500-pay-raise-for-eusds-board-on', summary: 'Local Substack on the March 2026 stipend proposal and the district’s budget outlook; written by a candidate in a different EUSD race, so read as advocacy.' },
      { label: 'Wagner campaign site', url: 'https://www.bonniewagner.com/', summary: 'Her priorities in her own words.' },
    ],
  },

  // ---------------------------------------------------------------- Palomar CCD Area 5
  {
    id: 'palomar-ccd-area-5',
    categoryId: 'school',
    title: 'Palomar Community College District, Trustee Area 5',
    tldrLabel: 'Palomar College, Area 5',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The Palomar Community College District governs Palomar College and its centers across northern San Diego County, with a five-member board that adopts the budget, oversees construction and bond projects, approves programs, and hires the college president.',
      'Palomar is also running a search for a new superintendent/president in 2026, so the Area 5 trustee who takes office in December will help choose or oversee the college’s next leader. Area 5 covers Fallbrook, Bonsall, east Oceanside, and Camp Pendleton plus part of Escondido.',
    ],
    introParagraphs: [
      'Three candidates are competing for one four-year term. The current trustee, Jacqueline Kaiser, is not on the ballot. This is a single November contest, and no party endorsements are publicly listed for any of the three candidates.',
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living in Trustee Area 5; not a Palomar employee.',
    qualificationCriteria: [
      { id: 'governance', label: 'Board governance and oversight', detail: 'Trustees set policy, approve contracts, and oversee the president as one of five votes.' },
      { id: 'budget', label: 'Budget and facilities oversight', detail: 'The board adopts the budget and oversees construction and bond spending.' },
      { id: 'highered', label: 'Higher-education knowledge', detail: 'Trustees approve degrees, certificates, and accreditation reports.' },
      { id: 'community', label: 'Community and K-12 partnerships', detail: 'Trustees work with school districts, employers, and local governments to link students to the college.' },
    ],
    candidates: [
      {
        id: 'cory-anderson',
        name: 'Cory Anderson',
        party: 'NP',
        role: 'Marriage Family Therapist',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Anderson’s ballot designation is Marriage Family Therapist. No board service, platform, or higher-education role has been published.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected-board service is documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget or facilities role is documented.' },
            { criterionId: 'highered', assessment: 'unknown', evidence: 'Ballot designation is Marriage Family Therapist; any teaching or college role is not published.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Practices as a licensed marriage and family therapist per his ballot designation; no community or K-12 partnership role is published.' },
          ],
        },
        bio: [
          'Anderson is a marriage and family therapist on the ballot. He has not published a biography, platform, or endorsements.',
        ],
        scorecard: [
          { topic: 'Student mental health', position: '~ Mental-health professional by trade; no published college position', comparison: 'Jeffries and Moore list education careers.' },
          { topic: 'Budget/facilities', position: '? No published position', comparison: 'None of the candidates has published budget specifics.' },
          { topic: 'Enrollment/programs', position: '? No published position', comparison: 'Jeffries has led school-district and university programs.' },
          { topic: 'Community colleges & K-12', position: '? No published position', comparison: 'Jeffries was a school superintendent for ten years.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None published as of Oct 7, 2026.',
      },
      {
        id: 'jennifer-jeffries',
        name: 'Jennifer Jeffries',
        party: 'NP',
        role: 'Retired College Professor',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Jeffries, who appears to be the Ed.D. who chairs the Fallbrook Regional Health District board, brings a decade as a school superintendent, university faculty and administrative service, and current elected-board chair experience. She has not served on the Palomar board.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Board chair of the elected Fallbrook Regional Health District (term Dec 2022 to Dec 2026), chairing its strategic planning and government-engagement committees.' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Ten years as superintendent of Fallbrook Union Elementary School District; associate vice president for planning, assessment and accreditation at Cal State San Marcos; her health-district focus is fiscally responsible development of its wellness center.' },
            { criterionId: 'highered', assessment: 'met', evidence: 'On the Cal State San Marcos faculty from 2001; chaired its educational leadership master’s and a joint doctoral program with UC San Diego; Ed.D. from the University of San Diego.' },
            { criterionId: 'community', assessment: 'met', evidence: 'North County resident since 1988; ran a local K-8 district for a decade; awards community health contracts as a health-district director.' },
          ],
        },
        bio: [
          'Jeffries is a retired college professor and Ed.D. who moved to Fallbrook in 1988. She spent ten years as superintendent of the Fallbrook Union Elementary School District, joined the Cal State San Marcos faculty in 2001, and retired as associate vice president for planning, assessment and accreditation (Fallbrook Regional Health District bio).',
          'She is chair of the Fallbrook Regional Health District board, where she stresses fiscally responsible development and local control of tax dollars.',
        ],
        scorecard: [
          { topic: 'Budget/facilities', position: '✓ Focuses on fiscally responsible capital projects and local control of public dollars (health district role)', comparison: 'Anderson and Moore have not published budget positions.' },
          { topic: 'Higher-ed programs', position: '✓✓ Ran university educational-leadership programs and accreditation planning', comparison: 'Moore lists a college professor career; Anderson does not.' },
          { topic: 'K-12 partnerships', position: '✓✓ Ten years as a school superintendent', comparison: 'Anderson and Moore have not published K-12 partnership experience.' },
          { topic: 'Governance', position: '✓ Currently chairs an elected public board', comparison: 'Neither Anderson nor Moore has served on an elected board.' },
          { topic: 'Ideology', position: '? No party endorsements found', comparison: 'None of the three has published party endorsements.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None published as of Oct 7, 2026.',
        notes: [
          'Her ballot designation is Retired College Professor. The career summary here comes from the Fallbrook Regional Health District biography of Jennifer Jeffries, Ed.D., a retired Cal State San Marcos professor and Fallbrook resident; confirm it is the same person in her candidate statement.',
        ],
      },
      {
        id: 'michelle-moore',
        name: 'Michelle C. Moore',
        party: 'NP',
        role: 'College Professor',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Moore’s ballot designation is College Professor. Her institution, years of teaching, platform, and any board service have not been published.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected-board service is documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget or facilities role is documented.' },
            { criterionId: 'highered', assessment: 'partial', evidence: 'Ballot designation is College Professor; the institution and subject are not published.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'No K-12 or community partnership role is published.' },
          ],
        },
        bio: [
          'Moore is a college professor on the ballot. She has not published a biography, platform, or endorsements.',
        ],
        scorecard: [
          { topic: 'Higher-ed programs', position: '~ Listed as a college professor; institution and field unpublished', comparison: 'Jeffries held university program leadership and administration roles.' },
          { topic: 'Budget/facilities', position: '? No published position', comparison: 'None of the candidates has published budget specifics.' },
          { topic: 'Faculty relations', position: '? No published position', comparison: 'None of the candidates has published a labor stance.' },
          { topic: 'K-12 partnerships', position: '? No published position', comparison: 'Jeffries ran a school district for a decade.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None published as of Oct 7, 2026.',
      },
    ],
    crossTypology: ct([
      ['PL', '—', '—', 'Progressive Left voters have no ideological signal here because none of the three candidates has published party endorsements or a platform.', 'With no ideological signal from any candidate, Progressive Left voters can use experience as the tie-breaker: Jeffries ran a local K-8 district for a decade, held senior roles at Cal State San Marcos, and chairs an elected health-district board.'],
      ['EL', 'Jeffries', '○', 'Establishment Liberals value credentials and institutional experience, which point to the former superintendent and university administrator.'],
      ['DM', 'Jeffries', '○', 'Democratic Mainstays default to the most experienced educator when no party endorsement is available.'],
      ['OL', '—', '—', 'Outsider Left voters have no policy signal in this race and the most credentialed candidate is also the most establishment.', 'Outsider Left voters may find Jeffries the most establishment choice, but with no policy signal from anyone, her decade as a superintendent and her university accreditation work offer a concrete basis as Palomar searches for a new president.'],
      ['SS', '—', '—', 'Stressed Sideliners have almost no information on any of the three, so there is no defensible lean.', 'Stressed Sideliners have almost no information on the three, so experience can decide; Jeffries is the only one with a documented record, including ten years running a local school district and chairing an elected public board.'],
      ['AR', 'Jeffries', '◐', 'Ambivalent Right voters who want competent, moderate oversight of a public college favor the candidate with the longest record running public budgets.'],
      ['PR', '—', '—', 'Populist Right voters have no outsider or ideology signal to separate the candidates.', 'Populist Right voters get no outsider signal here, so experience is the fallback; Jeffries chairs the Fallbrook health district board and stresses local control of tax dollars, though she is the most establishment of the three.'],
      ['CC', 'Jeffries', '○', 'Committed Conservatives may favor her stated emphasis on fiscally responsible projects and local control of tax dollars, though no party endorsements exist.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no values-based signal in this race.', 'Faith and Flag Conservatives have no values signal in this race, so experience breaks the tie: Jeffries, a North County resident since 1988, spent ten years as a local school superintendent before senior work at Cal State San Marcos.'],
    ]),
    counterArguments: [
      'EL/DM/AR/CC (Jeffries ○/◐): But the picks rest on experience alone, because Anderson and Moore have published almost nothing; a candidate who has spent a career teaching at a college may understand Palomar’s faculty needs as well.',
      'PL/OL/PR/FF (—): But a skipped column does not mean the candidates are alike; check candidate statements in the county voter guide for stances on faculty pay, enrollment, and bond spending.',
    ],
    readingLinks: [
      { label: 'KPBS: Palomar Community College District board explainer', url: 'https://www.kpbs.org/news/politics/2026/10/02/meet-the-candidates-for-palomar-community-college-district-board', summary: 'What the board does and who is running in Areas 1 and 5.' },
      { label: 'Fallbrook Regional Health District: Jennifer Jeffries bio', url: 'https://fallbrookhealth.org/jennifer-jeffries-ed-d', summary: 'Career summary and education.' },
    ],
  },

  // ---------------------------------------------------------------- Escondido Mayor
  {
    id: 'escondido-mayor',
    categoryId: 'city',
    title: 'Escondido Mayor',
    tldrLabel: 'Escondido Mayor',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Escondido is a city of about 150,000 people north of San Diego. The mayor is elected citywide, presides over the five-member City Council, and casts one vote on the budget, zoning, and the city’s homelessness and public-safety policy.',
      'This race turns on how Escondido deals with homelessness: Mayor Dane White’s enforcement-and-sober-shelter model versus challenger Elias Velazquez’s Housing First approach. The Council also faces a budget deficit and a controversy over the city police firing range used by federal immigration agents.',
    ],
    introParagraphs: [
      'This is a single November contest. White won the seat in 2022 by defeating then-mayor Paul McNamara with about 52% of the vote (Fox 5). He is a Republican in a nonpartisan office (KPBS); Velazquez is a newcomer.',
      'Candidates debated homelessness, recovery, and public safety on Sept. 1, 2026, at the Grand Ritz Theater, moderated by San Diego Rescue Mission CEO Donnie Dee (KPBS).',
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living in the City of Escondido; the mayor is elected at large.',
    qualificationCriteria: [
      { id: 'governance', label: 'Running a city and presiding over a council', detail: 'The mayor leads meetings, sets the agenda priorities, and works with the city manager.' },
      { id: 'budget', label: 'Budget and finance', detail: 'The Council adopts the city budget and has been working through a budget deficit.' },
      { id: 'homeless', label: 'Homelessness and public safety policy', detail: 'The city sets encampment rules, funds shelter and treatment, and oversees the police department.' },
      { id: 'coalition', label: 'Coalition-building and regional work', detail: 'The mayor needs three votes on the Council and cooperation from the county and neighboring cities.' },
    ],
    candidates: [
      {
        id: 'dane-white',
        name: 'Dane M. White',
        party: 'NP',
        role: 'Mayor',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'White has been Escondido’s mayor since December 2022 and was previously reported to have served on the Escondido Union High School District board.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Mayor since 2022, elected citywide; Fox 5 also reports earlier service on the Escondido Union High School District board.' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on the city’s annual budgets as mayor; no separate finance training is documented.' },
            { criterionId: 'homeless', assessment: 'met', evidence: 'Led the city’s “Escondido First” enforcement-plus-sober-shelter approach; says unsheltered homelessness fell from 401 in 2024 to 271 in 2026 (KPBS, citing Point-in-Time counts).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Works with a Council majority that has backed his approach; visited Huntington Beach’s shelter with city officials in 2024 (Voice of San Diego).' },
          ],
        },
        bio: [
          'White is a Republican who was Escondido’s youngest mayor when elected at age 33. He is a fifth-generation Escondido resident who has spoken openly about being homeless and addicted as a young man, which he says shaped his focus on treatment and shelter.',
          'In his first term he has prioritized public safety, affordability, support for small businesses, and roads, and he points to a drop in unsheltered homelessness in the 2026 count.',
        ],
        recordVsChange:
          'White points to a 32% decline in unsheltered homelessness since 2024 and the city’s sober-shelter plan. Critics, including Velazquez, say the city’s refusal to adopt Housing First has cost it state and federal funds, and that decisions such as leaving the ICE firing-range contract to police approval were made without a Council vote.',
        scorecard: [
          { topic: 'Homelessness', position: '✓✓ “Treatment first”: people must engage with addiction treatment before housing; enforcement plus sober shelter', comparison: 'Velazquez backs Housing First and rental assistance.' },
          { topic: 'Public safety', position: '✓ Lists public safety as a top priority; city encampment ordinance and Escondido Creek Trail cleanups', comparison: 'Velazquez’s published focus is homelessness prevention and funding.' },
          { topic: 'Budget/affordability', position: '~ Lists affordability and small business as priorities; details not publicly documented', comparison: 'Velazquez wants HOME and CDBG funds for rental assistance.' },
          { topic: 'Immigration enforcement', position: '~ Defended the ICE firing-range contract being handled below the $200,000 Council threshold (CalMatters)', comparison: 'Velazquez’s position on the contract is not published.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'Republican Party member; no formal endorsement list published as of Oct 7, 2026.',
        notes: [
          'In February 2026 the Council kept an agreement letting ICE’s Homeland Security Investigations use the city police firing range ($67,500 over three years). Councilmember Consuelo Martinez’s motion to end it died without a second; White said thousands of small contracts could not each come to the Council (CalMatters; Times of San Diego). This is a policy dispute rather than a conduct finding.',
          'Point-in-Time figures cited above are from the mayor’s account in KPBS coverage; sheltered counts rose from 187 to 281 over the same period.',
        ],
      },
      {
        id: 'elias-velazquez',
        name: 'Elias Velazquez',
        party: 'NP',
        role: 'Nonprofit Executive',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Velazquez works for a nonprofit that serves homeless people, seniors, and the working poor. He has not held elected office.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected office or governing-board service is documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No municipal budget role is documented.' },
            { criterionId: 'homeless', assessment: 'partial', evidence: 'Information director and volunteer coordinator at an Oceanside nonprofit serving homeless people, seniors, and the working poor (KPBS); Voice of San Diego names the organization as Brother Benno’s Foundation.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No coalition or government partnership record is published.' },
          ],
        },
        bio: [
          'Velazquez is a nonprofit worker at an Oceanside organization that serves homeless people, seniors, and the working poor, where he coordinates volunteers and information. He is running for the first time.',
          'He says homelessness is his top issue and argues the city should adopt Housing First so Escondido becomes eligible for more state and federal money.',
        ],
        scorecard: [
          { topic: 'Homelessness', position: '✓✓ Housing First: permanent housing paired with services', comparison: 'White backs treatment first plus enforcement.' },
          { topic: 'Funding', position: '✓ Wants federal HOME and CDBG dollars prioritized for rental assistance, such as Tenant-Based Rental Assistance', comparison: 'White’s model leaves the city to carry homelessness costs, Velazquez says.' },
          { topic: 'Eviction prevention', position: '✓ Rental help to keep families housed', comparison: 'White emphasizes treatment and shelters.' },
          { topic: 'Public safety', position: '? No published policing plan', comparison: 'White prioritizes enforcement and police.' },
          { topic: 'Budget', position: '? No published budget plan', comparison: 'White has not published detailed budget plans either.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None publicly verified as of Oct 7, 2026.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Velazquez', '●', 'Progressive Left voters back Housing First and rental assistance over an enforcement-first approach that also kept an ICE contract in place.'],
      ['EL', 'Velazquez', '◐', 'Establishment Liberals prefer Housing First and bringing in state and federal funds, though White can point to a measurable drop in street homelessness.', 'Establishment Liberals who value proven management could back White, who has run the city since 2022 and can point to unsheltered homelessness falling from 401 to 271, though it means a Republican mayor and setting aside Housing First.'],
      ['DM', 'Velazquez', '◐', 'Democratic Mainstays favor the challenger on the housing-first and funding approach and distrust a Republican mayor’s enforcement focus.', 'Democratic Mainstays who put experience first might accept White’s four years presiding over city budgets and homelessness policy, but it is a vote for a Republican whose enforcement approach and handling of the ICE contract they generally distrust.'],
      ['OL', 'Velazquez', '◐', 'Outsider Left voters like the nonprofit worker who is not part of the City Hall establishment, though he is untested in office.', 'Outsider Left voters drawn to a newcomer could still reason that White’s term as mayor, shaped by his own past with homelessness and addiction, gives him a tested record, though choosing him keeps the City Hall establishment in place.'],
      ['SS', 'White', '○', 'Stressed Sideliners worried about street conditions and safety may credit the incumbent’s visible decline in unsheltered homelessness, but many will not follow the debate.'],
      ['AR', 'White', '◐', 'Ambivalent Right voters back the incumbent who can show unsheltered counts falling and who has a record, over an untested challenger.'],
      ['PR', 'White', '●', 'Populist Right voters favor the Republican mayor who stresses enforcement, a sober shelter, and treatment over housing handouts.'],
      ['CC', 'White', '●', 'Committed Conservatives back the Republican incumbent’s treatment-first, public-safety, and affordability agenda.'],
      ['FF', 'White', '●', 'Faith and Flag Conservatives favor the Republican mayor, whose recovery-focused approach reflects his own testimony of overcoming addiction.'],
    ]),
    counterArguments: [
      'PL/EL/DM/OL (Velazquez ●/◐): But White can show the city’s unsheltered count fell from 401 to 271 between 2024 and 2026, while Velazquez has never run a government program or held office.',
      'PR/CC/FF (White ●): But Velazquez and other critics argue that rejecting Housing First has cost Escondido state and federal funding, and that the sheltered count has risen while the city spends its own money.',
    ],
    readingLinks: [
      { label: 'KPBS: Escondido mayor debate preview', url: 'https://www.kpbs.org/news/politics/2026/09/01/candidates-for-escondido-mayor-to-meet-in-debate-over-homelessness-approach', summary: 'Treatment-first versus Housing First; unsheltered counts from the Point-in-Time survey.' },
      { label: 'CalMatters: Escondido ICE firing range', url: 'https://calmatters.org/politics/2026/02/escondido-ice-firing-range/', summary: 'February 2026 Council meeting and the contract terms.' },
      { label: 'Voice of San Diego: North County report', url: 'https://voiceofsandiego.org/2026/05/20/north-county-report-election-season-musical-chairs/', summary: 'Who filed for mayor and council.' },
    ],
  },

  // ---------------------------------------------------------------- Escondido Council D1
  {
    id: 'escondido-council-d1',
    categoryId: 'city',
    title: 'Escondido City Council, District 1',
    tldrLabel: 'Escondido Council D1',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Escondido City Council adopts the city budget, sets zoning and development rules, and decides local housing, homelessness, and public safety policy. District 1 is an open seat: Councilmember Consuelo Martinez, who was first elected in 2018, is not seeking reelection.',
      'Martinez has been the only Democrat on a Council the Voice of San Diego calls majority Republican, so this seat can change the 4-1 balance on issues such as the police firing-range contract for federal immigration agents.',
    ],
    introParagraphs: [
      'This is a single November contest between Marine veteran and Navy communications manager Tanner Horsley and finance director Vanessa Valenzuela. Horsley lists endorsements from Mayor Dane White and three councilmembers; Valenzuela is running for the third time and has had her campaign events promoted by progressive groups such as Escondido Indivisible.',
    ],
    legalRequirements: COUNCIL_LEGAL,
    qualificationCriteria: COUNCIL_CRITERIA,
    candidates: [
      {
        id: 'tanner-horsley',
        name: 'Tanner Horsley',
        party: 'NP',
        role: 'Navy Communications Manager',
        campaignUrl: 'https://www.tannerhorsley.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Horsley is a Marine veteran who works in information security for the Navy in San Diego. He has not held local office or served on a city board.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected office or city commission service is documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'Manages communications security accounts for a federal agency; no municipal budget role is documented.' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'Says he supports smart growth and effective code enforcement; no land-use role is documented.' },
            { criterionId: 'constituent', assessment: 'partial', evidence: 'Escondido resident for nearly 20 years since a Marine Corps deployment; parent of two District 1 public school students (campaign materials).' },
          ],
        },
        bio: [
          'Horsley enlisted in the Marine Corps in 2006, deployed to Iraq, and was stationed at Miramar before working at Qualcomm and earning a degree in information technology and business management. He now works in information security at Naval Computer and Telecommunications Station San Diego.',
          'He has lived in Escondido nearly 20 years with his wife and two daughters. He lists public safety, homelessness, and affordability as priorities and says his campaign is not funded by developers.',
        ],
        scorecard: [
          { topic: 'Housing/affordability', position: '✓ Supports smart growth and new routes to affordable home ownership', comparison: 'Valenzuela wants an inclusionary housing requirement and is exploring rental protections.' },
          { topic: 'Public safety', position: '✓✓ Supports local police and firefighters', comparison: 'Valenzuela opposes the ICE contract and questions the city’s surveillance technology.' },
          { topic: 'Homelessness', position: '✓ Lists homelessness as a top priority; details not published', comparison: 'Valenzuela’s published focus is housing and transparency.' },
          { topic: 'Roads/parks', position: '✓ Prioritizes road maintenance to cut congestion and clean, accessible parks', comparison: 'Valenzuela prioritizes deferred capital projects and traffic mitigation.' },
          { topic: 'Code enforcement', position: '✓ Backs effective code enforcement to protect neighborhoods', comparison: 'Valenzuela stresses transparency and resident voice.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'Mayor Dane White, Deputy Mayor Joe Garcia, Councilmembers Christian Garcia and Judy Fitzgerald (per his candidate statement).',
      },
      {
        id: 'vanessa-valenzuela',
        name: 'Vanessa Valenzuela',
        party: 'NP',
        role: 'Director of Finance',
        campaignUrl: 'https://vanessaforescondido.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Valenzuela is a finance director with about 20 years in finance and a record of public advocacy at Council meetings. She has run for Council twice before without winning.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'No office held, but has lobbied the Council on the public library, the MFRO water facility siting, and the ICE contract; this is her third Council campaign.' },
            { criterionId: 'budget', assessment: 'met', evidence: 'About 20 years in finance; director of finance at I Love A Clean San Diego, an environmental nonprofit.' },
            { criterionId: 'landuse', assessment: 'partial', evidence: 'Says housing is her top issue and wants an inclusionary housing requirement; successfully pushed to move the MFRO facility out of a residential neighborhood.' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Lifelong Escondido resident who raised three children in District 1 (Times-Advocate).' },
          ],
        },
        bio: [
          'Valenzuela is a lifelong Escondido resident and mother of three with about 20 years of finance experience, currently director of finance at an environmental nonprofit in San Diego. This is her third run for City Council.',
          'Her top issue is housing, including an inclusionary housing requirement for developers. She opposes the city’s ICE contract, has questioned its police technology and surveillance spending, and says she has taken no developer money.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓✓ Wants a developer inclusionary housing requirement and is exploring rental protections', comparison: 'Horsley backs smart growth and affordable home ownership.' },
          { topic: 'Infrastructure/traffic', position: '✓ Says deferred capital projects should come before “pet projects”; wants traffic mitigation alongside new housing', comparison: 'Horsley prioritizes road maintenance and parks.' },
          { topic: 'Transparency', position: '✓✓ Wants more visibility into city spending and a stronger resident voice', comparison: 'Horsley’s published platform does not stress transparency.' },
          { topic: 'Policing/surveillance', position: '✗ Opposes the city’s ICE contract; questions a $1.6M police technology center and Flock-type cameras', comparison: 'Horsley supports local police and firefighters.' },
          { topic: 'Developer money', position: '✓ Says she accepts no developer contributions', comparison: 'She says Horsley has taken some; unverified.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'Escondido Indivisible has promoted her campaign events (Aug 2026); no formal endorsement list on public record.',
        notes: [
          'Her website links local ICE opposition to positions on foreign policy; the Times-Advocate asked how they relate to city government, and her answer centered on a 2019 police delegation to Israel.',
          'Her statement that she takes no developer money and that her opponent does is her own claim and has not been checked against filings.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Valenzuela', '●', 'Progressive Left voters favor the finance director who wants inclusionary housing, rental protections, transparency, and an end to the ICE contract.'],
      ['EL', 'Valenzuela', '◐', 'Establishment Liberals value her finance career and housing and transparency platform, though she has never won office.'],
      ['DM', 'Valenzuela', '◐', 'Democratic Mainstays favor the candidate aligned with local Democratic groups against a Council majority’s endorsed pick.'],
      ['OL', 'Valenzuela', '●', 'Outsider Left voters like her record of challenging the Council on the ICE contract, library outsourcing, and surveillance spending, and her no-developer-money pledge.'],
      ['SS', '—', '—', 'Stressed Sideliners have little to separate two candidates who have each focused on housing costs and neighborhood conditions, so no lean is defensible.', 'Stressed Sideliners see both candidates focused on housing costs, so experience can break the tie: Valenzuela brings about 20 years in finance, is a lifelong Escondido resident, and has pressed the Council on local issues for years.'],
      ['AR', 'Horsley', '○', 'Ambivalent Right voters may favor the veteran who stresses roads, parks, and code enforcement over a national-issues debate, though weakly.'],
      ['PR', 'Horsley', '◐', 'Populist Right voters back the Marine veteran endorsed by the sitting Council majority and focused on local police and safe neighborhoods.'],
      ['CC', 'Horsley', '●', 'Committed Conservatives favor the Marine veteran who supports police and firefighters and is endorsed by the mayor and Council majority.'],
      ['FF', 'Horsley', '●', 'Faith and Flag Conservatives prefer the Marine Corps veteran who prioritizes public safety and is backed by the Council’s Republican-leaning majority.'],
    ]),
    counterArguments: [
      'PR/CC/FF (Horsley ●/◐): But Horsley has no local government record, and Valenzuela’s 20 years in finance and years of attending Council meetings give her more direct budget and process experience.',
      'PL/OL (Valenzuela ●): But two earlier Council runs did not succeed, and her website’s mix of local and foreign-policy positions may narrow her appeal on a Council that decides zoning, roads, and the budget.',
    ],
    readingLinks: [
      { label: 'Escondido Times-Advocate: Valenzuela profile', url: 'https://www.times-advocate.com/articles/candidate-valenzuela-wants-to-champion-progress-for-escondido/', summary: 'Her platform on housing, infrastructure, and transparency.' },
      { label: 'Escondido Times-Advocate: Horsley announcement', url: 'https://www.times-advocate.com/articles/tanner-horsley-announces-for-escondido-city-council/', summary: 'His background and priorities.' },
    ],
  },

  // ---------------------------------------------------------------- Escondido Council D2
  {
    id: 'escondido-council-d2',
    categoryId: 'city',
    title: 'Escondido City Council, District 2',
    tldrLabel: 'Escondido Council D2',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Escondido City Council adopts the city budget, sets zoning and development rules, and decides homelessness, housing, and public-safety policy. District 2 includes large mobile-home communities where rent increases and park protections are live issues.',
      'Joe Garcia is a pastor and deputy mayor who sides with the Council’s Republican-leaning majority; Anthony DiMartino is a Democratic-aligned policy advocate who says the Council has moved from a care model to a punitive one and is too close to developers.',
    ],
    introParagraphs: [
      'This is a single November contest for one four-year term. Garcia was first elected in 2020 in District 3 and moved to District 2 after redistricting, winning reelection there in 2022 (city bio; San Diego Union-Tribune). He did not respond to The Coast News’ request for comment about the race.',
    ],
    legalRequirements: COUNCIL_LEGAL,
    qualificationCriteria: COUNCIL_CRITERIA,
    candidates: [
      {
        id: 'joe-garcia',
        name: 'Joe Garcia',
        party: 'NP',
        role: 'Pastor/City Councilmember',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Garcia has served on the Council since 2020 and is currently deputy mayor.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Councilmember since 2020 and Deputy Mayor; reelected in District 2 in 2022 (city bio).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on the city’s annual budgets as a councilmember since 2021; the Council has been addressing a deficit.' },
            { criterionId: 'landuse', assessment: 'met', evidence: 'Has voted on zoning and development items for about six years; no separate planning background is documented.' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Church pastor for more than 30 years, 13 in Escondido, and Escondido police chaplain for over 15 years (city bio; Chamber of Commerce).' },
          ],
        },
        bio: [
          'Garcia is a church pastor for more than 30 years, 13 of them in Escondido, and an Escondido Police Department chaplain for over 15 years. He was first elected to the Council in 2020 and now serves as Deputy Mayor.',
          'He lists enhancing public safety, easing the cost of living, and prioritizing infrastructure as his priorities.',
        ],
        recordVsChange:
          'Garcia has been part of the Council majority that adopted the city’s homelessness policy and kept the ICE firing-range contract, and as Deputy Mayor he has clout at City Hall. The case for change is DiMartino’s argument that the Council leans on developers and enforcement rather than county and state housing funds.',
        scorecard: [
          { topic: 'Public safety', position: '✓✓ Top priority; police chaplain; sided with the Council majority', comparison: 'DiMartino says the Council has become too punitive.' },
          { topic: 'Cost of living', position: '✓ Lists easing the cost of living as a priority; no specific plan published', comparison: 'DiMartino wants more affordable housing and mobile-home rent protections.' },
          { topic: 'Infrastructure', position: '✓ Lists infrastructure as a priority', comparison: 'DiMartino cites traffic safety for drivers, pedestrians, and cyclists.' },
          { topic: 'Immigration enforcement', position: '~ Said he had been stopped and handcuffed by ICE officers and understood opposition, but warned that cancelling the firing-range contract could bring retaliation (CalMatters)', comparison: 'DiMartino would have voted to cancel the contract.' },
          { topic: 'Homelessness/housing', position: '✓ Part of the Council majority behind the city’s enforcement-and-shelter approach', comparison: 'DiMartino wants to pursue county and state homelessness funding.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'No formal endorsement list published as of Oct 7, 2026; he is listed as an endorser of Horsley and Vincent.',
        notes: [
          'In 2025 he joined Mayor White and two other councilmembers in endorsing San Marcos Councilmember Ed Musgrove for state Senate District 40 (campaign release).',
        ],
      },
      {
        id: 'anthony-dimartino',
        name: 'Anthony DiMartino',
        party: 'NP',
        role: 'Government Affairs Director',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'DiMartino is a 37-year-old state policy and budget advocate who worked four years for Assemblymember Shirley Weber. He has never held local office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Four years as legislative aide and legislative director for Assemblymember Shirley Weber; no local elected or commission service documented.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Leads state budget and legislative advocacy at Californians for Safety and Justice (seven years); has not worked on a municipal budget.' },
            { criterionId: 'landuse', assessment: 'partial', evidence: 'Earlier neighborhood-development work for Long Beach and the Los Angeles Gang Reduction and Youth Development Office; no Escondido land-use role.' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Lifelong Escondido and North County resident, schooled in San Marcos; teaches policy advocacy to SDSU social work students.' },
          ],
        },
        bio: [
          'DiMartino, 37, is a lifelong North County resident born at the old Palomar Hospital and schooled in San Marcos. He is government affairs director at Californians for Safety and Justice, a statewide nonprofit focused on policy and budget reforms for crime victims and people returning from incarceration.',
          'He earlier spent four years as a legislative aide and legislative director for Assemblymember Shirley Weber, worked on neighborhood development for Long Beach and the Los Angeles gang-reduction office, and teaches policy advocacy at San Diego State. He is described as Democratic-endorsed by Escondido Indivisible and is listed in the Run for Something candidate directory.',
        ],
        scorecard: [
          { topic: 'Homelessness/housing', position: '✓✓ Wants county and state money for homelessness and more affordable housing; says the Council listens too much to developers', comparison: 'Garcia has sided with the Council majority’s approach.' },
          { topic: 'Mobile homes', position: '✓ Says more should be done to protect residents of large mobile-home communities from rent increases', comparison: 'Garcia has not published a specific position.' },
          { topic: 'Public safety', position: '~ Says the Council has shifted from care to punishment', comparison: 'Garcia’s top priority is public safety.' },
          { topic: 'Immigration enforcement', position: '✓✓ Would have voted to cancel the ICE contract and opposes ICE operating in the city', comparison: 'Garcia warned against cancelling.' },
          { topic: 'Transparency', position: '✓ Questions the Kit Carson Park ice rink process and wants more responsive contracting', comparison: 'Garcia has not published a transparency plan.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'Described as Democratic-endorsed in Escondido Indivisible’s newsletter (Aug 2026); listed in the Run for Something candidate directory.',
        notes: [
          'DiMartino declined to attack Garcia personally and directed his criticism at the Council as a whole (Escondido Times-Advocate).',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'DiMartino', '●', 'Progressive Left voters favor the policy advocate who opposes the ICE contract, wants mobile-home rent protections, and says the Council is too punitive.'],
      ['EL', 'DiMartino', '◐', 'Establishment Liberals value his legislative and budget background and Democratic-aligned platform, though he has no local office.', 'Establishment Liberals who value hands-on local governing could favor Garcia, a deputy mayor who has voted on city budgets and zoning since 2020, though that means backing the Council’s Republican-leaning majority over DiMartino’s state legislative background.'],
      ['DM', 'DiMartino', '◐', 'Democratic Mainstays back the Democratic-endorsed candidate against the Council’s Republican-leaning incumbent.', 'Democratic Mainstays who rank experience highly might back Garcia, a longtime Escondido pastor and police chaplain with six years on the Council, but they would be passing over the Democratic-endorsed candidate to keep a Republican-leaning majority.'],
      ['OL', 'DiMartino', '◐', 'Outsider Left voters like his criticism of developer influence at City Hall, though his career is in policy advocacy rather than grassroots organizing.', 'Outsider Left voters could weigh Garcia’s six years on the Council and deep community ties as a pastor, though it means returning a member of the majority that DiMartino faults for developer influence and keeping the ICE contract.'],
      ['SS', 'Garcia', '○', 'Stressed Sideliners may credit a pastor and police chaplain who stresses cost of living and safety, though many will not know either candidate.'],
      ['AR', 'Garcia', '◐', 'Ambivalent Right voters favor the experienced, locally rooted incumbent over a challenger who works for a statewide nonprofit.'],
      ['PR', 'Garcia', '●', 'Populist Right voters favor the pastor and deputy mayor who stresses public safety and sits with the Council’s Republican-leaning majority.'],
      ['CC', 'Garcia', '●', 'Committed Conservatives back the incumbent who prioritizes public safety, cost of living, and infrastructure and is aligned with the Council majority.'],
      ['FF', 'Garcia', '●', 'Faith and Flag Conservatives favor a pastor of 30-plus years who is also a police chaplain and Council majority member.'],
    ]),
    counterArguments: [
      'PR/CC/FF (Garcia ●): But Garcia has served on a Council that faces a budget deficit and critics say prioritizes developers; his own comments on the ICE contract also show he is uneasy with the agency.',
      'PL/EL/DM (DiMartino ●/◐): But DiMartino has no local government record and has worked on state, not municipal, budgets, while Garcia knows the district’s mobile-home and traffic issues from six years in office.',
    ],
    readingLinks: [
      { label: 'Escondido Times-Advocate: DiMartino profile', url: 'https://www.times-advocate.com/articles/homelessness-affordable-housing-small-business-support-head-concerns-of-council-hopeful-dimartino/', summary: 'His background and platform in an interview format.' },
      { label: 'CalMatters: Escondido ICE firing range', url: 'https://calmatters.org/politics/2026/02/escondido-ice-firing-range/', summary: 'Garcia’s and the Council’s positions at the February 2026 meeting.' },
    ],
  },

  // ---------------------------------------------------------------- Deer Springs Fire
  {
    id: 'deer-springs-fire-board',
    categoryId: 'district',
    title: 'Deer Springs Fire Protection District, Board of Directors',
    tldrLabel: 'Deer Springs Fire Board',
    voteFor: 3,
    seatContext: 'Incumbents and an appointed incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Deer Springs Fire Protection District covers unincorporated areas around Hidden Meadows, near San Marcos and Escondido. A five-member elected board sets the district budget, approves contracts, and oversees the fire chief; three of the five seats are on this ballot.',
      'The district opened a new Fire Station 2 on Deer Springs Road in June 2026, built with $8 million in state funding, and its directors must manage wildfire risk, staffing, and the cost of running the new station. Voters can choose up to three of five candidates.',
    ],
    introParagraphs: [
      'This special-district contest is on the ballot only for voters who live in the fire district (about 23% of ZIP 92026). It is a single November contest, and voters may pick up to three candidates.',
      'Kerrin and Gordon are incumbents and Lynne Caples is an appointed incumbent. Carl Atwood and David Leatherberry, a health law attorney, are challengers.',
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living within the district.',
    qualificationCriteria: [
      { id: 'governance', label: 'Special-district governance', detail: 'Directors set policy, adopt the budget, and oversee the fire chief under public-meeting rules.' },
      { id: 'finance', label: 'Budget and finance', detail: 'The board manages a modest property-tax-funded budget and capital projects such as Station 2.' },
      { id: 'fire', label: 'Wildfire and emergency preparedness', detail: 'The district’s mission is fire protection and emergency medical response in a wildfire-prone area.' },
      { id: 'legal', label: 'Contracts and risk oversight', detail: 'Directors review contracts, insurance, and liability for the district.' },
    ],
    candidates: [
      {
        id: 'carl-atwood',
        name: 'Carl Atwood',
        party: 'NP',
        role: 'Candidate',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Atwood is on the ballot, but no biography, occupation, platform, or endorsements have been published.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board service is documented.' },
            { criterionId: 'finance', assessment: 'unknown', evidence: 'No finance background is published.' },
            { criterionId: 'fire', assessment: 'unknown', evidence: 'No fire or emergency-services background is published.' },
            { criterionId: 'legal', assessment: 'unknown', evidence: 'No contracts or legal background is published.' },
          ],
        },
        bio: [
          'Atwood is a candidate for the board. No ballot occupation, campaign materials, or public record of his background were available at publication.',
        ],
        scorecard: [
          { topic: 'Wildfire preparedness', position: '? No published position', comparison: 'Kerrin has authored the district’s wildfire protection plans.' },
          { topic: 'Budget/finance', position: '? No published position', comparison: 'Board President Mark Jackson is a retired finance executive.' },
          { topic: 'Station 2/capital projects', position: '? No published position', comparison: 'The incumbents oversaw the new Station 2.' },
          { topic: 'Transparency', position: '? No published position', comparison: 'No candidate has published a transparency plan.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None published as of Oct 7, 2026.',
      },
      {
        id: 'lynne-caples',
        name: 'Lynne Caples',
        party: 'NP',
        role: 'Appointed Incumbent',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Caples sits on the board by appointment and is an academic with a bioethics and health-policy doctorate. She has been active in district emergency programs since 2022.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Appointed director of the Deer Springs board; appointment date not published on the district’s board page.' },
            { criterionId: 'finance', assessment: 'partial', evidence: 'Master’s in biostatistics; research career at a large academic medical center; no district finance role documented.' },
            { criterionId: 'fire', assessment: 'partial', evidence: 'Joined Deer Springs CERT (Community Emergency Response Team) in 2022 and created a resident forum at Champagne Village in 2024.' },
            { criterionId: 'legal', assessment: 'partial', evidence: 'Doctorate in organizational bioethics and health policy from Loyola University Chicago; no contracts or legal role documented.' },
          ],
        },
        bio: [
          'Caples moved to the Champagne Village community in 2022, restructured its newsletter, and joined the Deer Springs Community Emergency Response Team that year. She has taught in nursing and public health graduate schools at a large university since 2017.',
          'She holds a doctorate in organizational bioethics and a master’s in bioethics and health policy from Loyola University Chicago, and a master’s in biostatistics. She sits on the board by appointment.',
        ],
        recordVsChange:
          'Caples has served as an appointed director and is closely involved in CERT and community outreach, which supports continuity as Station 2 opens. The case for change is that she has not yet faced voters and has fewer years on the board than Kerrin or Gordon.',
        scorecard: [
          { topic: 'Wildfire preparedness', position: '✓ CERT member since 2022; resident forum organizer', comparison: 'Kerrin has twenty years on the fire safe council.' },
          { topic: 'Community engagement', position: '✓✓ Restructured Champagne Village newsletter; created a 2024 residents’ forum', comparison: 'Gordon and Kerrin list technical and legal backgrounds.' },
          { topic: 'Budget/finance', position: '? No published position', comparison: 'Other directors cite finance and consulting experience.' },
          { topic: 'Station 2/capital projects', position: '? No published position', comparison: 'The board as a whole oversaw the opening in June 2026.' },
          { topic: 'Technology/AI', position: '~ Studies AI’s effect on communities; no district position published', comparison: 'Other candidates have not addressed technology.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None published as of Oct 7, 2026.',
      },
      {
        id: 'james-gordon',
        name: 'James E. Gordon',
        party: 'NP',
        role: 'Incumbent',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Gordon has been a director since his appointment in early 2016 and has more than 25 years of experience in business disputes, litigation, and investigations.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Appointed in February 2016 to replace director Tom Francl; had attended every board meeting for over two years and served on its master plan committee (Times-Advocate, March 2016).' },
            { criterionId: 'finance', assessment: 'met', evidence: 'Managing partner for Asia/China at a global expert-services firm (2009 to 2012); decades advising on forensic and financial disputes.' },
            { criterionId: 'fire', assessment: 'partial', evidence: 'Served on the board’s master plan committee as a civilian; no fire-service career documented.' },
            { criterionId: 'legal', assessment: 'met', evidence: 'More than 25 years as a consulting and testifying expert and third-party neutral in litigation and investigations (district bio).' },
          ],
        },
        bio: [
          'Gordon has advised clients on complex business disputes, litigation, and investigations for more than 25 years, with a focus on cross-border Asia/U.S. matters. He worked on high-profile matters including Enron and WorldCom, and was managing partner for Asia/China at a global consulting firm from 2009 to 2012.',
          'The board appointed him in February 2016 after an open interview among three applicants; he has served since.',
        ],
        recordVsChange:
          'Gordon brings a decade on the board and legal and investigative skills that help with contracts and oversight, and the district has opened a new Station 2 during his tenure. The case for change is that long-serving directors in a small district can become insular and no candidate here has been cited for any specific failure.',
        scorecard: [
          { topic: 'Contracts/oversight', position: '✓✓ 25+ years in litigation and investigations support contract and risk review', comparison: 'Kerrin’s expertise is wildfire science; Caples’s is health policy.' },
          { topic: 'Budget/finance', position: '✓ Business-consulting and forensic background', comparison: 'President Mark Jackson is a retired finance executive.' },
          { topic: 'Wildfire preparedness', position: '~ Served on the master plan committee; no fire background', comparison: 'Kerrin wrote the 2020 and 2024 wildfire plans.' },
          { topic: 'Station 2/capital projects', position: '✓ Served on the board during Station 2’s construction and June 2026 opening', comparison: 'Challengers have published no position.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None published as of Oct 7, 2026.',
      },
      {
        id: 'steve-kerrin',
        name: 'Steve Kerrin',
        party: 'NP',
        role: 'Incumbent',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Kerrin has been a director since December 2022 and has led the local fire safe council for years, authoring the district’s wildfire protection plans.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Director since December 2022 and board Secretary-Treasurer; fire safe council board member since 2006 and president since 2019.' },
            { criterionId: 'finance', assessment: 'met', evidence: 'Serves as Secretary-Treasurer; career as senior scientist and project manager on atmospheric monitoring projects.' },
            { criterionId: 'fire', assessment: 'met', evidence: 'Principal author of the 2020 and 2024 Deer Springs Community Wildfire Protection Plans; 2022 Outstanding Leadership award from the San Diego County Fire Safe Council.' },
            { criterionId: 'legal', assessment: 'partial', evidence: 'No contracts or legal background published; board-level contract oversight as a director.' },
          ],
        },
        bio: [
          'Kerrin has been a district resident since 1998, joined the fire safe council in 2005, and has served on its board since 2006 and as president since 2019. He joined the district board in December 2022 and is Secretary-Treasurer.',
          'He wrote the 2020 and 2024 Deer Springs Community Wildfire Protection Plans and received the 2022 Outstanding Leadership award from the San Diego County Fire Safe Council. He began his career at NASA’s Jet Propulsion Laboratory and later worked in atmospheric science.',
        ],
        recordVsChange:
          'Kerrin ties the board’s work directly to wildfire planning, which is its core mission, and has been a director since December 2022. The case for change is limited: no specific criticism of his tenure has been published, and challengers have not detailed an alternative plan.',
        scorecard: [
          { topic: 'Wildfire preparedness', position: '✓✓ Author of the 2020 and 2024 community wildfire protection plans; fire safe council president', comparison: 'Challengers have published no wildfire plan.' },
          { topic: 'Budget/finance', position: '✓ Board Secretary-Treasurer', comparison: 'Gordon and Jackson bring business and finance backgrounds.' },
          { topic: 'Community outreach', position: '✓ Two decades with the Deer Springs Fire Safe Council', comparison: 'Caples has been in CERT since 2022.' },
          { topic: 'Station 2/capital projects', position: '✓ Serving board member for Station 2’s opening', comparison: 'Challengers have published no position.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None published as of Oct 7, 2026.',
      },
      {
        id: 'david-leatherberry',
        name: 'David Leatherberry',
        party: 'NP',
        role: 'Health Law Attorney',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Leatherberry is a San Diego health law attorney licensed for about 20 years. No fire-district, finance-board, or emergency-services role has been published.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Chairs the Health Law Committee of the California Lawyers Association’s Business Law Section (professional body); no public-board service documented.' },
            { criterionId: 'finance', assessment: 'unknown', evidence: 'No district finance or budget role is documented.' },
            { criterionId: 'fire', assessment: 'unknown', evidence: 'No fire-service or emergency-preparedness role is documented.' },
            { criterionId: 'legal', assessment: 'met', evidence: 'Runs his own San Diego health law practice and has been licensed in California for about 20 years (Avvo profile).' },
          ],
        },
        bio: [
          'Leatherberry is a San Diego attorney who focuses on health law and behavioral-health providers. He is licensed in California and chairs a committee of the California Lawyers Association’s Business Law Section.',
          'He has published no fire-district platform. The ballot identifies him as a health law attorney, a profile that matches the San Diego attorney David Leatherberry.',
        ],
        scorecard: [
          { topic: 'Contracts/legal oversight', position: '✓ Practicing health law attorney since about 2006', comparison: 'Gordon also brings litigation and investigations experience.' },
          { topic: 'Wildfire preparedness', position: '? No published position', comparison: 'Kerrin wrote the district’s wildfire plans.' },
          { topic: 'Budget/finance', position: '? No published position', comparison: 'Gordon and Kerrin are the incumbent officers.' },
          { topic: 'Station 2/capital projects', position: '? No published position', comparison: 'Incumbents oversaw construction.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None published as of Oct 7, 2026.',
      },
    ],
    crossTypology: ct([
      ['PL', '—', '—', 'Progressive Left voters have no ideological signal in this nonpartisan fire board contest, where no candidate has published a platform.'],
      ['EL', 'Caples, Gordon, Kerrin', '◐', 'Establishment Liberals value continuity, wildfire-plan expertise, and institutional experience, which favors the three directors on the ballot over untested challengers.'],
      ['DM', 'Caples, Gordon, Kerrin', '◐', 'Democratic Mainstays default to experienced incumbents when there is no party signal, particularly after the new Station 2 opened.'],
      ['OL', '—', '—', 'Outsider Left voters have no policy signal here, so no candidate stands out.'],
      ['SS', '—', '—', 'Stressed Sideliners have almost no information on any of the five candidates.'],
      ['AR', 'Caples, Gordon, Kerrin', '○', 'Ambivalent Right voters may prefer to keep experienced directors rather than gamble on the two challengers.'],
      ['PR', '—', '—', 'Populist Right voters have no outsider-versus-establishment signal here because no candidate has published a platform.'],
      ['CC', 'Gordon, Kerrin, Caples', '○', 'Committed Conservatives may favor the incumbents’ steady budget and wildfire-plan oversight, though the contest is nonpartisan.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no values-based signal in a nonpartisan fire board race.'],
    ]),
    counterArguments: [
      'EL/DM/AR/CC (Caples, Gordon, Kerrin ◐/○): But these picks rest on incumbency and experience alone; Leatherberry’s health law practice could add contract and risk oversight, and no incumbent has been publicly criticized.',
      'PL/OL/SS/PR/FF (—): But the skipped columns reflect a lack of published information, not agreement among candidates; check the county voter guide for candidate statements.',
    ],
    readingLinks: [
      { label: 'Deer Springs Fire Protection District: Our Directors', url: 'https://deerspringsfire.org/our-board-of-directors/', summary: 'District biographies for sitting directors.' },
      { label: 'Times of San Diego: $8 million for Deer Springs fire station', url: 'https://timesofsandiego.com/politics/2022/07/26/assemblys-waldron-gets-8-million-for-deer-springs-fire-district-station/', summary: 'Funding behind the new Station 2.' },
    ],
  },
];
