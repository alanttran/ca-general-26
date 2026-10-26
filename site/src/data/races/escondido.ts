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
      ['LP', 'Tomasi', '◐', 'Leftward Progressives back Tomasi, the retired teacher endorsed by school-employee unions and the county Democratic Party, over an incumbent endorsed by Reform California, though Tomasi has published no platform.'],
      ['LL', 'Tomasi', '◐', 'Loyal Liberals, 81% of whom say the Democratic Party represents them well, follow the county Democratic Party and the teacher and classified-staff unions to Tomasi, accepting that Vincent has more board experience and Tomasi has said little about policy.'],
      ['LO', 'Tomasi', '○', 'Left-Out Left voters lean to Tomasi as the candidate backed by working school staff rather than the mayor and sitting officials, but only weakly because Tomasi is a party club president with no published plan.'],
      ['OO', 'Vincent / Tomasi', '=', 'Order and Opportunity Left voters weigh order and job pathways against support for school workers: if campus police partnerships, career-technical pathways and steady reserves matter most, Vincent, despite his Republican backing; if backing from the unions of the teachers and classified staff who run the classrooms matters more, Tomasi.'],
      ['TM', 'Vincent', '○', 'Tuned-Out Middle voters who want schools that lead to jobs may lean to Vincent, who wants career-technical education treated as equal to college prep, while Tomasi offers nothing concrete yet.'],
      ['PP', 'Vincent', '◐', 'Pragmatic and Polite Right voters value Vincent’s conservative budgeting, board experience and willingness to change course on curriculum pilots, which fits their taste for cautious, practical governance, with 78% preferring incremental fixes over risky quick ones.'],
      ['UR', 'Vincent', '◐', 'Unconventional Right voters favor Vincent for reserves-first budgeting and campus-safety partnerships with police, though Vincent’s 2025 votes for ethnic studies pilots cut against their skepticism of identity-based programs, since only 45% say diversity strengthens society.'],
      ['FC', 'Vincent', '◐', 'Faith First Conservatives back Vincent for his stand that parents should know what is taught and by whom, tempered by Vincent’s 2025 votes for the ethnic studies pilots.'],
      ['NA', 'Vincent', '◐', 'No Apologies Right voters prefer Vincent, as Reform California does, but Vincent’s switch to backing ethnic studies pilots in 2025 is not the hard line against such programs they want.'],
    ]),
    counterArguments: [
      'FC/NA (Vincent ◐): But consider that Vincent voted in May 2025 for the AP African American Studies and English 9 Ethnic Studies pilots he had opposed a year earlier, because voters picking him for a firm curriculum stand should know his record is mixed.',
      'LP/LL (Tomasi ◐): But consider that Tomasi has no board service and has published no platform, because the pick rests mainly on her endorsers while Vincent already sits on the board as clerk.',
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
      ['LP', 'Cervantes', '◐', 'Leftward Progressives favor Cervantes, the Democratic- and Building Trades–endorsed professor focused on English learners and multilingual families, over a Reform California–endorsed rival.'],
      ['LL', 'Cervantes', '◐', 'Loyal Liberals value Cervantes’s 20-plus years in education and the county Democratic Party endorsement, though that record is self-reported.'],
      ['LO', 'Cervantes', '◐', 'Left-Out Left voters like that Cervantes puts financial aid workshops, internships and English-learner support first, practical help for working families who feel ignored, in a group where only 53% say a candidate has shared their views lately.'],
      ['OO', 'Cervantes', '◐', 'Order and Opportunity Left voters favor Cervantes because Cervantes pairs college prep with career technical education and internships, the opportunity ladder they want, while the other two have published nothing.'],
      ['TM', 'Cervantes', '○', 'Tuned-Out Middle voters, 46% of whom rarely follow politics, may lean to Cervantes, the only candidate offering concrete help such as financial aid workshops and job internships, though few will know any of the three.'],
      ['PP', 'Cervantes', '○', 'Pragmatic and Polite Right voters who prize experience over party, 54% of whom view the GOP unfavorably, may lean to Cervantes, whose two decades in education are the only documented record in the race, even though Hinrichs carries the Republican endorsement.'],
      ['UR', 'Hinrichs', '○', 'Unconventional Right voters lean to Hinrichs, the Republican-endorsed teacher, over a candidate whose platform centers on programs for particular student groups, but Hinrichs has given them almost nothing else to go on.'],
      ['FC', 'Hinrichs', '◐', 'Faith First Conservatives lean to Hinrichs, endorsed by Reform California and the county Republican Party, as the likelier vote for parent-first curriculum, though Hinrichs has published no platform.'],
      ['NA', 'Hinrichs', '◐', 'No Apologies Right voters, only about 32% of whom say diversity strengthens society, favor Hinrichs over a Democratic-endorsed professor whose platform centers on English learners and Hispanic students, which they tend to see as identity politics, despite Hinrichs’s blank platform.'],
    ]),
    counterArguments: [
      'FC/NA (Hinrichs ◐): But consider that Hinrichs has published no biography or platform, because the pick rests almost entirely on his endorsers and Lucas, the unendorsed teacher and professor, may hold similar views.',
      'PP (Cervantes ○): But consider that Cervantes is the Democratic-endorsed candidate and has no published budget plan, because voters who want a fiscally cautious board have little to judge her on.',
      'LP/LL (Cervantes ◐): But consider that Cervantes’s 20-plus years in education come from her own campaign site, because no independent record of her roles has been published.',
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
      ['LP', 'Wagner', '●', 'Leftward Progressives back Wagner, a classroom teacher endorsed by the county Democratic Party and the building trades, over an incumbent police officer, given their deep skepticism of policing in schools, with only 28% confident in the police.'],
      ['LL', 'Wagner', '◐', 'Loyal Liberals value Wagner’s teaching career, UC San Diego master’s in education and county Democratic Party endorsement, though Huston has years of budget votes.', 'Loyal Liberals who put governing experience first could back Huston, a trustee since 2020 who has voted on several budgets as reserves tighten, though that means passing over the Democratic-endorsed teacher for an officer with no published platform.'],
      ['LO', 'Wagner', '◐', 'Left-Out Left voters, 75% of whom say few or no officials ran to serve the public, like that Wagner, a working teacher, promises to listen to families and staff first on a board that considered raising its own stipends while staff worry about pay.', 'Left-Out Left voters who want a proven hand could keep Huston, who has nearly 30 years in Escondido and more than six years of board votes, though they give up the challenger who promises to put staff and families first.'],
      ['OO', 'Huston', '◐', 'Order and Opportunity Left voters, who trust police (about 69%) and want safe schools, may cross to Huston, an Escondido police officer who runs law-enforcement outreach in schools, even though Wagner is the Democratic-endorsed candidate.'],
      ['TM', 'Huston', '○', 'Tuned-Out Middle voters who want schools to keep running smoothly through a budget squeeze may stick with Huston, a familiar local officer, though neither candidate has offered a plan.'],
      ['PP', 'Huston', '◐', 'Pragmatic and Polite Right voters favor Huston for continuity as the district faces possible reserve shortfalls, and with about 84% confident in the police, they trust a police officer on campus safety.'],
      ['UR', 'Huston', '◐', 'Unconventional Right voters back Huston, a police officer focused on school safety, over a Democratic-endorsed challenger, though Huston has no party endorsement or platform.'],
      ['FC', 'Huston', '◐', 'Faith First Conservatives prefer Huston, a police officer and Police Athletic League coach who ties schools to law enforcement, though Huston has said nothing on curriculum or parental rights.'],
      ['NA', 'Huston', '◐', 'No Apologies Right voters favor Huston, a police officer, over a Democratic- and union-backed teacher, though Huston is a quiet incumbent rather than a fighter, and 53% of this group like seeing opponents humiliated.'],
    ]),
    counterArguments: [
      'OO/PP (Huston ◐): But consider that Huston has published no 2026 platform or endorsements and his stipend vote is undocumented, because the picks rest on his job and tenure rather than a record on budgets or curriculum.',
      'LL/LO (Wagner ◐): But consider that Wagner has never served on a board or detailed how she would handle the projected reserve squeeze, because Huston has more than six years of district budget votes.',
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
      ['LP', 'Jeffries', '○', 'Leftward Progressives get no left-leaning option here, so they lean weakly to Jeffries, the only candidate with a documented public-education career.'],
      ['LL', 'Jeffries', '●', 'Loyal Liberals, who trust credentials and institutional experience (92% say experts make better policy decisions than others), see a clear fit in Jeffries, a former superintendent, Cal State San Marcos administrator and elected health-board chair.'],
      ['LO', 'Jeffries', '○', 'Left-Out Left voters distrust insiders, and Jeffries is the most establishment of the three, but Anderson and Moore have published nothing that would make them a credible alternative.'],
      ['OO', 'Jeffries', '◐', 'Order and Opportunity Left voters want steady, competent oversight of a college that serves as a path to jobs, and Jeffries is the only candidate with a record of running schools.'],
      ['TM', 'Jeffries', '○', 'Tuned-Out Middle voters will know little about any of the three, but Jeffries’s stress on spending local tax dollars carefully is the only concrete promise on offer.'],
      ['PP', 'Jeffries', '●', 'Pragmatic and Polite Right voters prize competence and fiscal prudence, and Jeffries brings a decade as superintendent, accreditation work and a board chair role focused on fiscally responsible projects.'],
      ['UR', 'Jeffries', '○', 'Unconventional Right voters may lean to Jeffries for her emphasis on local control of tax dollars, though Jeffries is an academic administrator rather than the plain-spoken outsider they prefer.'],
      ['FC', 'Jeffries', '○', 'Faith First Conservatives have no values signal in this race, so they lean weakly to Jeffries, a North County resident since 1988 with a record of careful public budgeting.'],
      ['NA', '—', '—', 'No Apologies Right voters, the most skeptical of academic experts (only about 33% say experts make better policy decisions), have no fighter or conservative signal among three candidates who are a university administrator, a professor and a therapist.', 'No Apologies Right voters who still want experience could back Jeffries, who ran a K-8 district for ten years and stresses local control of tax dollars, though Jeffries is the kind of university administrator they usually distrust.'],
    ]),
    counterArguments: [
      'LL/PP (Jeffries ●): But consider that the picks rest on experience alone, because Anderson and Moore have published almost nothing and a working college professor may understand Palomar’s faculty and students as well.',
      'OO (Jeffries ◐): But consider that the career summary comes from a Fallbrook Regional Health District bio of a Jennifer Jeffries, Ed.D., because this guide has not confirmed it is the same person as the candidate.',
      'NA (—): But consider reading the candidate statements in the county voter guide, because a skipped column reflects missing information, not agreement among the three candidates.',
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
      ['LP', 'Velazquez', '●', 'Leftward Progressives back Velazquez’s Housing First and rental-assistance plan over Mayor White’s enforcement-first approach and his defense of letting federal immigration agents use the city firing range.'],
      ['LL', 'Velazquez', '◐', 'Loyal Liberals favor Velazquez’s Housing First plan, the model state and federal funders reward, though White can point to a measurable drop in street homelessness.', 'Loyal Liberals who put proven management first could back White, mayor since 2022, who cites unsheltered homelessness falling from 401 to 271, though that means choosing a Republican and setting aside the Housing First model.'],
      ['LO', 'Velazquez', '◐', 'Left-Out Left voters like Velazquez, a nonprofit worker outside City Hall who wants federal housing dollars spent on rent help to keep working families housed, though Velazquez is untested in office.', 'Left-Out Left voters who want a tested leader could back White, whose own past with homelessness and addiction shapes his treatment-first record as mayor, though choosing him keeps the City Hall establishment and the ICE firing-range deal in place.'],
      ['OO', 'White', '◐', 'Order and Opportunity Left voters, who want both help and order on the streets, may cross to White for falling unsheltered counts and a sober-shelter model, though many dislike White’s handling of the ICE firing-range contract, since only about 14% back a national effort to deport undocumented immigrants.'],
      ['TM', 'Velazquez', '○', 'Tuned-Out Middle voters struggling with bills, 73% of whom say government is responsible for an adequate standard of living, may lean to Velazquez’s plan to use federal money for rent assistance, the most direct cost help either candidate offers, though few will follow the race.', 'Tuned-Out Middle voters who want a known quantity could back White, who has run the city since 2022 and points to fewer people on the streets, giving up the rent-assistance plan Velazquez offers.'],
      ['PP', 'White', '◐', 'Pragmatic and Polite Right voters value White’s experience and measurable results on homelessness, though some would have wanted the ICE contract to come to a Council vote.'],
      ['UR', 'White', '●', 'Unconventional Right voters, about 50% of whom back a national deportation effort, back White for enforcement against encampments, treatment as a condition of help, and cooperation with federal immigration agents on the firing range.'],
      ['FC', 'White', '●', 'Faith First Conservatives favor White’s recovery-centered, sober-shelter approach and his emphasis on personal responsibility and public order.'],
      ['NA', 'White', '●', 'No Apologies Right voters, 81% of whom back a national deportation effort, back White for rejecting Housing First, enforcing encampment rules and keeping the federal immigration agents’ firing-range deal despite a councilmember’s motion to end it.'],
    ]),
    counterArguments: [
      'UR/NA (White ●): But consider that critics, including Velazquez, say refusing Housing First has cost Escondido state and federal funds, because the sheltered count rose from 187 to 281 over the same period and the city carries more of the cost itself, Velazquez says.',
      'LP/LO (Velazquez ●/◐): But consider that Velazquez has never held office or run a government program, because White can show unsheltered homelessness fell from 401 to 271 between 2024 and 2026.',
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
      ['LP', 'Valenzuela', '●', 'Leftward Progressives back Valenzuela for inclusionary housing, possible rental protections, scrutiny of police surveillance spending and ending the city’s ICE firing-range deal.'],
      ['LL', 'Valenzuela', '◐', 'Loyal Liberals value Valenzuela’s 20 years in finance and housing and transparency platform, though Valenzuela has lost two Council races and mixes local issues with foreign policy.'],
      ['LO', 'Valenzuela', '●', 'Left-Out Left voters like Valenzuela, a lifelong resident who refuses developer money and has spent years challenging the Council from the public microphone, against the candidate endorsed by the Council majority.'],
      ['OO', 'Horsley / Valenzuela', '=', 'Order and Opportunity Left voters weigh public safety against housing: if support for local police, code enforcement and new routes to home ownership matters most, Horsley; if Valenzuela’s housing push and her opposition to the ICE contract matter more, Valenzuela.'],
      ['TM', 'Valenzuela', '○', 'Tuned-Out Middle voters squeezed by rent may lean to Valenzuela, who wants inclusionary housing and is exploring rental protections, the most direct cost help in the race.'],
      ['PP', 'Horsley', '○', 'Pragmatic and Polite Right voters lean to Horsley’s local focus on roads, parks and code enforcement over a candidate who ties city issues to foreign policy, though Valenzuela has more budget experience.'],
      ['UR', 'Horsley', '◐', 'Unconventional Right voters, about 78% of whom have confidence in the police, favor Horsley, a Marine veteran who backs police and code enforcement, over a candidate who wants to end the city’s cooperation with ICE.'],
      ['FC', 'Horsley', '◐', 'Faith First Conservatives prefer Horsley, a Marine veteran and father of two local students who stresses public safety and neighborhoods, though Horsley has said nothing on social issues.'],
      ['NA', 'Horsley', '●', 'No Apologies Right voters, about 86% of whom have confidence in the police, back Horsley, who stands with local police, against Valenzuela, who opposes the ICE contract and questions police surveillance technology.'],
    ]),
    counterArguments: [
      'NA (Horsley ●): But consider that Horsley has no local government record, because Valenzuela’s 20 years in finance and years at Council meetings give her more direct budget and process experience.',
      'LP/LO (Valenzuela ●): But consider that Valenzuela has lost two earlier Council races and her website ties local ICE opposition to foreign policy, because voters may want a councilmember focused on zoning, roads and the budget.',
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
      ['LP', 'DiMartino', '●', 'Leftward Progressives back DiMartino, a criminal-justice reform advocate who would have voted to cancel the ICE firing-range deal, wants mobile-home rent protections and says the Council has turned punitive.'],
      ['LL', 'DiMartino', '◐', 'Loyal Liberals value DiMartino’s years as a legislative director and state budget advocate and his push for county and state housing money, though DiMartino has no local office.', 'Loyal Liberals who value hands-on local governing could back Garcia, deputy mayor and a councilmember since 2020, though that means keeping the Council’s Republican-leaning majority over DiMartino’s legislative and budget background.'],
      ['LO', 'DiMartino', '◐', 'Left-Out Left voters like DiMartino’s charge that the Council listens too much to developers and his push to shield mobile-home residents from rent hikes, though DiMartino’s career is in professional policy work.', 'Left-Out Left voters who want a known local figure could back Garcia, a pastor and police chaplain with six years on the Council, though Garcia sides with the majority DiMartino faults for developer influence and keeping the ICE contract.'],
      ['OO', 'Garcia', '◐', 'Order and Opportunity Left voters, who value faith (71% say religion matters), policing and order, may cross to Garcia, a pastor and police chaplain who puts public safety and cost of living first, though Garcia’s warning against cancelling the ICE contract gives some pause.'],
      ['TM', 'DiMartino', '○', 'Tuned-Out Middle voters in District 2’s mobile-home parks may lean to DiMartino, the only candidate with a specific aim of protecting residents from rent increases, though most will not know either candidate.', 'Tuned-Out Middle voters who want a familiar face could back Garcia, a deputy mayor and longtime local pastor, giving up DiMartino’s specific promise on mobile-home rents.'],
      ['PP', 'Garcia', '◐', 'Pragmatic and Polite Right voters, 86% of whom say officials should avoid heated language, value Garcia’s six years on the Council and measured remarks on the ICE contract, though DiMartino’s civil, issue-focused campaign keeps this from being a clear call.'],
      ['UR', 'Garcia', '◐', 'Unconventional Right voters favor Garcia, who puts public safety first and warned against cancelling the ICE contract, over a challenger who opposes ICE operating in the city.'],
      ['FC', 'Garcia', '●', 'Faith First Conservatives, 72% of whom say religion is very important, back Garcia, a pastor for more than 30 years and a police chaplain, whose faith and law-and-order commitments match their own.'],
      ['NA', 'Garcia', '◐', 'No Apologies Right voters prefer Garcia to a reform advocate who wants ICE out of the city, though Garcia’s own unease with ICE after being handcuffed by its officers is not the hard line they want.'],
    ]),
    counterArguments: [
      'FC (Garcia ●): But consider that Garcia sits on a Council facing a budget deficit that critics say leans toward developers, because voters weighing stewardship may want more than his priorities list, which has no specific plan on costs.',
      'LP (DiMartino ●): But consider that DiMartino has never held local office and has worked on state, not city, budgets, because Garcia knows the district’s mobile-home and traffic issues from six years in office.',
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
      ['LP', 'Caples, Gordon, Kerrin', '○', 'Leftward Progressives have no ideological signal in this fire board race, so they lean weakly to the three sitting directors, including Kerrin, who wrote the district’s wildfire protection plans.'],
      ['LL', 'Caples, Gordon, Kerrin', '●', 'Loyal Liberals trust expertise and continuity, which point to Kerrin’s wildfire planning, Gordon’s decade of oversight and Caples’s emergency-response work as the new Station 2 opens.'],
      ['LO', 'Gordon, Kerrin, Leatherberry', '○', 'Left-Out Left voters, wary of insiders, may keep the two elected incumbents with long records but prefer challenger Leatherberry, a health law attorney, to Caples, whom the board appointed rather than voters elected.'],
      ['OO', 'Caples, Gordon, Kerrin', '◐', 'Order and Opportunity Left voters want steady, competent public safety, and the three sitting directors oversaw the opening of Station 2 and the district’s wildfire plans.'],
      ['TM', 'Caples, Gordon, Kerrin', '○', 'Tuned-Out Middle voters will know little about this race, but keeping the directors who run a working fire service is the low-risk choice.'],
      ['PP', 'Caples, Gordon, Kerrin', '●', 'Pragmatic and Polite Right voters prize competence and continuity, and the three directors bring wildfire planning, contract and legal oversight, and emergency-response work with no published criticism.'],
      ['UR', 'Caples, Gordon, Kerrin', '○', 'Unconventional Right voters have no small-government or outsider signal here, so they lean weakly to the directors who have run the district without controversy.'],
      ['FC', 'Caples, Gordon, Kerrin', '○', 'Faith First Conservatives have no values signal in a fire board race, so they lean weakly to the sitting directors for steady local protection.'],
      ['NA', 'Caples, Gordon, Kerrin', '○', 'No Apologies Right voters have no fighter in this race, so they lean weakly to the sitting directors who opened Station 2 rather than challengers who have published nothing.'],
    ]),
    counterArguments: [
      'LL/PP (Caples, Gordon, Kerrin ●): But consider that these picks rest on incumbency and experience alone, because Caples was appointed rather than elected and Leatherberry’s health law practice could add contract and risk oversight.',
      'LO (Gordon, Kerrin, Leatherberry ○): But consider that Leatherberry has no fire-service or district finance background, because Caples already serves on the board and has been in the local emergency response team since 2022.',
    ],
    readingLinks: [
      { label: 'Deer Springs Fire Protection District: Our Directors', url: 'https://deerspringsfire.org/our-board-of-directors/', summary: 'District biographies for sitting directors.' },
      { label: 'Times of San Diego: $8 million for Deer Springs fire station', url: 'https://timesofsandiego.com/politics/2022/07/26/assemblys-waldron-gets-8-million-for-deer-springs-fire-district-station/', summary: 'Funding behind the new Station 2.' },
    ],
  },
];
