import type {
  CandidateQualification,
  CriterionAssessment,
  ExperienceLevel,
  QualificationCriterion,
  Race,
} from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * North coastal San Diego County local contests (ZIPs 92009 Carlsbad/La Costa and 92130 Carmel Valley):
 * Encinitas Union SD, Del Mar Union SD, San Dieguito UHSD Area 5, and City of Carlsbad offices.
 * Research current as of Oct 7, 2026. Money and endorsement dates are stated in-line.
 */

function qual(
  level: ExperienceLevel,
  summary: string,
  criteria: [string, CriterionAssessment['assessment'], string][],
): CandidateQualification {
  return {
    level,
    legal: 'meets',
    summary,
    criteria: criteria.map(([criterionId, assessment, evidence]) => ({ criterionId, assessment, evidence })),
  };
}

const SCHOOL_CRITERIA: QualificationCriterion[] = [
  { id: 'education', label: 'Education knowledge and classroom experience', detail: 'Trustees adopt curriculum, hire and evaluate the superintendent, and rely on firsthand knowledge of how schools work.' },
  { id: 'budget', label: 'Budget, bonds and oversight', detail: 'The board adopts a multimillion-dollar budget, negotiates labor contracts, and oversees facilities bonds.' },
  { id: 'governance', label: 'Public-board governance and policy', detail: 'Trustees act only as a board, under open-meeting and ethics rules, and must work through the superintendent.' },
  { id: 'community', label: 'Family and community engagement', detail: 'Trustees hear from parents, staff and neighbors and explain board decisions to them.' },
];

const SCHOOL_LEGAL =
  'U.S. citizen, 18 or older, resident and registered voter of the district (and of the trustee area, where elected by area), not otherwise disqualified (Education Code § 35107; Elections Code § 201).';

const CARLSBAD_LEGAL =
  'Registered voter and resident of the City of Carlsbad (council members: of their district); see the City Clerk’s nomination requirements.';

export const RACES_NORTH_COASTAL: Race[] = [
  {
    id: 'encinitas-usd-board',
    categoryId: 'school',
    title: 'Encinitas Union School District, Governing Board',
    tldrLabel: 'Encinitas Union SD Board',
    voteFor: 3,
    seatContext: 'Three at-large seats',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member board governs the district’s elementary schools in Encinitas and the La Costa area of south Carlsbad: it adopts the budget, sets policy, approves labor contracts, and hires and reviews the superintendent. Trustees also oversee spending of the $158.3 million Measure Z facilities bond that voters approved in November 2024.',
      'Three of the five seats are on the ballot and voters may choose up to three of six candidates, so the November result can reshape the board majority in a single election.',
    ],
    introParagraphs: [
      'All six candidates describe themselves as parents. The Democratic Party endorsed Cocayne, Hargrave and Shen; no party endorsement was found for Clark, Dixon or Sanchez (KPBS endorsement guide, Sept. 30, 2026). The county voter guide lists only brief occupations for Clark, Dixon and Sanchez, so public information on them is thin.',
    ],
    readingLinks: [
      { label: 'KPBS: meet the candidates for San Diego County school board races', url: 'https://www.kpbs.org/news/politics/2026/09/29/meet-the-candidates-for-all-school-board-races-in-san-diego-county', summary: 'Candidate names and links to statements for every county school board race.' },
      { label: 'The Coast News: Election 2026 guide to North County races', url: 'https://thecoastnews.com/election-2026-a-guide-to-north-county-races/', summary: 'Lists the six candidates and their ballot occupations.' },
      { label: 'KPBS party endorsement guide', url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian', summary: 'Which candidates the county parties endorsed.' },
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'michelle-clark',
        name: 'Michelle Clark',
        party: 'NP',
        role: 'Mother',
        qualification: qual(
          'limited',
          'Clark’s ballot designation is “Mother.” No public record of school, board or budget experience was found.',
          [
            ['education', 'unknown', 'No classroom or education career documented in public sources.'],
            ['budget', 'unknown', 'No budget or oversight role documented.'],
            ['governance', 'unknown', 'No prior public-board service found.'],
            ['community', 'partial', 'Describes herself as a parent in the district; no volunteer or PTA role on public record.'],
          ],
        ),
        bio: [
          'Clark is one of six candidates for three seats. Her ballot designation is “Mother,” and the Coast News lists all six candidates as parents.',
          'No campaign website, party registration, endorsement, or news profile was found, so her positions on budget, curriculum or school safety are not known.',
        ],
        scorecard: [
          { topic: 'Budget & Measure Z', position: '? No public position found' },
          { topic: 'Curriculum & academics', position: '? No public position found' },
          { topic: 'Teachers & staffing', position: '? No public position found' },
          { topic: 'Student safety & wellbeing', position: '? No public position found' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None found.',
      },
      {
        id: 'jillian-cocayne',
        name: 'Jillian Cocayne',
        party: 'NP',
        role: 'Parent/Policy Advisor',
        campaignUrl: 'https://www.jillian4eusd.com/',
        qualification: qual(
          'some',
          'Cocayne is a parent volunteer who sits on the Measure Z bond oversight committee and the district’s special education parent council. She has not served on an elected board, and this is her second run (she ran in 2024).',
          [
            ['education', 'partial', 'Parent representative on the district’s Special Education Parent Council; no classroom career documented.'],
            ['budget', 'met', 'Serves on the Citizens’ Bond Oversight Committee for the $158 million Measure Z bond (campaign site).'],
            ['governance', 'partial', 'Policy background (political science degree; earlier work in Washington, London and Brussels per campaign site); no elected board service.'],
            ['community', 'met', 'Parent representative for her local planning area; campaign cites years of attending board meetings.'],
          ],
        ),
        bio: [
          'Cocayne is an Encinitas Union parent who describes herself as a problem solver and policy expert. She holds a political science degree from Bradley University and says she worked in Washington, D.C., London and Brussels before settling in North County (campaign site).',
          'She serves on the Measure Z Citizens’ Bond Oversight Committee and as a parent representative on the district’s Special Education Parent Council. Her stated priorities are taxpayer accountability for the bond, helping parents understand classroom technology and grading changes, and supporting teachers facing budget cuts.',
        ],
        scorecard: [
          { topic: 'Budget & Measure Z', position: '✓✓ Oversight-committee member; priority is accountable use of the $158M bond' },
          { topic: 'Curriculum & academics', position: '✓ Wants parents better informed on technology and new grading practices; build on existing test scores' },
          { topic: 'Teachers & staffing', position: '✓ Supports teachers and staff facing heavier workloads amid budget cuts; backed by the local teachers’ union' },
          { topic: 'Special education', position: '✓ Serves on the district Special Education Parent Council' },
          { topic: 'Ideology', position: '~ Backed by Democratic groups and Moms Demand Action; the office is nonpartisan' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements:
          'San Diego County Democratic Party (KPBS guide, Sept. 30, 2026); Teachers of Encinitas Union; Rep. Mike Levin; Assemblymember Tasha Boerner; Sierra Club; Moms Demand Action “Gun Sense Candidate” distinction (as listed on her campaign site).',
      },
      {
        id: 'marika-dixon',
        name: 'Marika Dixon',
        party: 'NP',
        role: 'Elementary Aide/Parent',
        qualification: qual(
          'limited',
          'Dixon works as an elementary school aide and is a parent in the district. No board, budget or oversight experience was found.',
          [
            ['education', 'partial', 'Elementary school aide (ballot designation; Coast News).'],
            ['budget', 'unknown', 'No budget or oversight role documented.'],
            ['governance', 'unknown', 'No prior public-board service found.'],
            ['community', 'partial', 'Parent in the district and school-site employee; no specific community role on public record.'],
          ],
        ),
        bio: [
          'Dixon’s ballot designation is Elementary Aide/Parent. The Coast News and North County Chronicle list her as an elementary school aide.',
          'No campaign website, platform statement, or party endorsement was found, so her positions on the budget, curriculum or Measure Z are not known.',
        ],
        scorecard: [
          { topic: 'Budget & Measure Z', position: '? No public position found' },
          { topic: 'Curriculum & academics', position: '? No public position found' },
          { topic: 'Teachers & staffing', position: '? No public position found' },
          { topic: 'Student safety & wellbeing', position: '? No public position found' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'No party or organization endorsement found.',
      },
      {
        id: 'chris-hargrave',
        name: 'Chris Hargrave',
        party: 'NP',
        role: 'Teacher/Principal/Grandparent',
        qualification: qual(
          'some',
          'Hargrave’s ballot designation is Teacher/Principal/Grandparent, which points to a long career in schools. Details of her roles, employers and years were not independently verified.',
          [
            ['education', 'met', 'Former teacher and principal (ballot designation); an advocacy group’s recommendation cites 50+ years in education.'],
            ['budget', 'partial', 'School principals manage site budgets; district-level budget or bond oversight experience not documented.'],
            ['governance', 'unknown', 'No prior elected board service found.'],
            ['community', 'partial', 'Grandparent in the community; no specific community roles on public record.'],
          ],
        ),
        bio: [
          'Hargrave describes herself as a former teacher and principal and a grandparent. Some sources spell her first name “Christine” (KPBS and the Democratic Party guide); the county ballot uses “Chris.”',
          'Encinitas Action, an advocacy group, credits her with raising test scores in schools she led and says the Encinitas teachers’ union endorsed her; neither claim was independently verified.',
        ],
        scorecard: [
          { topic: 'Curriculum & academics', position: '✓ Career educator; advocacy group credits her with raising test scores (not independently verified)' },
          { topic: 'Teachers & staffing', position: '✓ Teachers’ union endorsement reported by Encinitas Action' },
          { topic: 'Budget & Measure Z', position: '? No public position found' },
          { topic: 'Student safety & wellbeing', position: '? No public position found' },
          { topic: 'Ideology', position: '~ Democratic Party-endorsed; the office is nonpartisan' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party (KPBS guide, Sept. 30, 2026); Encinitas teachers per Encinitas Action’s recommendations (advocacy group, Oct. 7, 2026).',
      },
      {
        id: 'jorge-sanchez',
        name: 'Jorge Sanchez',
        party: 'NP',
        role: 'Parent/Firefighter/Educator',
        campaignUrl: 'https://jorge4eusd.com/',
        qualification: qual(
          'some',
          'Sanchez spent 31 years with the Encinitas Fire Department, most recently as Deputy Fire Chief, and teaches future firefighters at Miramar College. He has no school-board or classroom-teacher career documented.',
          [
            ['education', 'partial', 'Adjunct professor at Miramar College teaching firefighter candidates (campaign site); not a K-8 educator.'],
            ['budget', 'partial', 'Deputy Fire Chief for a city department (31 years); scale of budget he managed not stated.'],
            ['governance', 'partial', 'Senior management role in a city fire department; no elected board service.'],
            ['community', 'met', '31 years serving Encinitas residents through the fire department (campaign site).'],
          ],
        ),
        bio: [
          'Sanchez is a parent who spent 31 years with the Encinitas Fire Department, most recently as Deputy Fire Chief, after joining as a Fire Explorer at 17. He is also an adjunct professor at Miramar College.',
          'His stated priorities are academic excellence and strong foundational skills, safe campuses and emergency preparedness, recruiting and retaining teachers, parent communication, and fiscal responsibility with long-term planning.',
        ],
        scorecard: [
          { topic: 'Student safety & wellbeing', position: '✓✓ Safe campuses and emergency preparedness are a stated priority; career in public safety' },
          { topic: 'Curriculum & academics', position: '✓ High standards and strong foundational skills' },
          { topic: 'Teachers & staffing', position: '✓ Pledges to recruit, retain and support educators and staff' },
          { topic: 'Budget & Measure Z', position: '✓ “Fiscal responsibility, long-term planning” (campaign site); no specific Measure Z position found' },
          { topic: 'Transparency', position: '✓ Pledges meaningful parent involvement and transparent decisions' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None listed on his campaign site; no party endorsement found (KPBS guide, Sept. 30, 2026).',
      },
      {
        id: 'bill-shen',
        name: 'Bill Shen',
        party: 'NP',
        role: 'Business Owner/Parent',
        qualification: qual(
          'some',
          'Shen is a parent of three district students and a business owner who has served on a PTA board and a school site council. An advocacy group reports he chaired the 2024 Measure Z bond campaign; that was not independently verified.',
          [
            ['education', 'partial', 'Parent of three district students; no classroom career documented.'],
            ['budget', 'partial', 'Business owner; reported chair of the 2024 Measure Z campaign (per Encinitas Action, an advocacy group).'],
            ['governance', 'partial', 'Serves on a School Site Council and has served on a PTA board per Encinitas Action; no elected board service.'],
            ['community', 'met', 'PTA board and site-council service reported by Encinitas Action.'],
          ],
        ),
        bio: [
          'Shen is a business owner and father of three Encinitas Union students. Encinitas Action reports he served on a PTA board, sits on a School Site Council and chaired the 2024 Measure Z bond campaign; those details come from an advocacy group and were not confirmed by a campaign site or news report.',
        ],
        scorecard: [
          { topic: 'Budget & Measure Z', position: '✓ Reported (by Encinitas Action) to have led the 2024 bond campaign; no oversight role on record' },
          { topic: 'Teachers & staffing', position: '✓ Encinitas teachers’ union endorsement reported by Encinitas Action' },
          { topic: 'Curriculum & academics', position: '? No public position found' },
          { topic: 'Student safety & wellbeing', position: '? No public position found' },
          { topic: 'Ideology', position: '~ Democratic Party-endorsed; the office is nonpartisan' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party (KPBS guide, Sept. 30, 2026); Encinitas teachers per Encinitas Action (advocacy group, Oct. 7, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Cocayne, Hargrave, Shen', '◐', 'Progressive Left voters tend to follow the Democratic-endorsed, union-backed slate of Cocayne, Hargrave and Shen, though little is known about differences on curriculum or equity.'],
      ['EL', 'Cocayne, Hargrave, Shen', '●', 'Establishment Liberals value the Democratic Party and teachers’ union backing plus Cocayne’s bond-oversight service and Hargrave’s career in education.'],
      ['DM', 'Cocayne, Hargrave, Shen', '●', 'Democratic Mainstays typically follow the county party’s endorsements in low-information school board races.'],
      ['OL', 'Cocayne, Hargrave, Shen', '○', 'Outsider Left voters distrust party machinery, but with no public positions for the other three, the union-backed candidates are only a weak lean.'],
      ['SS', 'Hargrave, Sanchez, Shen', '○', 'Stressed Sideliners lean toward candidates with a visible school or community record: a career educator, a 31-year local public servant, and a PTA-and-site-council parent.'],
      ['AR', 'Hargrave, Sanchez, Shen', '◐', 'Ambivalent Right voters prefer practical, nonideological candidates, and these three combine education, public-safety and business or PTA experience without a partisan label.'],
      ['PR', 'Sanchez', '○', 'Populist Right voters may favor the one candidate who is a first-responder outsider to the education establishment and stresses safe campuses; the Republican Party made no endorsement, so this is a weak lean.'],
      ['CC', 'Sanchez, Hargrave', '○', 'Committed Conservatives value basics-first academics and fiscal discipline, which Sanchez’s platform names and Hargrave’s career in the classroom suggests; no Republican endorsement exists for any candidate.'],
      ['FF', 'Sanchez', '○', 'Faith and Flag Conservatives have little to go on, since no candidate has published positions on curriculum or parental-rights issues; Sanchez’s safety-and-basics platform is the closest fit.'],
    ]),
    counterArguments: [
      'PL/EL/DM (Cocayne, Hargrave, Shen): But the party slate is not a record: the guide found no public positions for Clark and Dixon, so voters who skip them are choosing on endorsements as much as on knowledge.',
      'PR/CC/FF (Sanchez): But Sanchez has no classroom or education-board experience, and the board must oversee a bond, labor contracts and curriculum, which the experienced and PTA-involved candidates have worked on more directly.',
    ],
  },

  {
    id: 'del-mar-usd-board',
    categoryId: 'school',
    title: 'Del Mar Union School District, Governing Board',
    tldrLabel: 'Del Mar Union SD Board',
    voteFor: 3,
    seatContext: 'Three at-large seats; three incumbents running',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member board governs the district’s elementary schools in Del Mar and Carmel Valley: it adopts the budget, negotiates teacher and staff contracts, sets enrollment and transitional kindergarten policy, and hires and evaluates the superintendent. The district consistently ranks among the state’s top-performing systems, so the main question is stewardship rather than turnaround.',
      'Three of five seats are on the ballot. Three sitting trustees are seeking another term and one challenger is on the ballot, so voters are effectively deciding whether to keep the current board intact.',
    ],
    introParagraphs: [
      'Katherine Fitzpatrick (seeking a third term), Doug Rafner (a fifth) and Alan Kholos (a first full term after an appointment) face challenger Stephen Cochrane, an education-law attorney (Coast News, Oct. 2026). The Democratic Party endorsed the three incumbents; the Republican Party endorsed Cochrane (KPBS, Sept. 30, 2026).',
    ],
    readingLinks: [
      { label: 'The Coast News: Election 2026 guide to North County races', url: 'https://thecoastnews.com/election-2026-a-guide-to-north-county-races/', summary: 'Lists the four candidates and the incumbents’ terms.' },
      { label: 'KPBS party endorsement guide', url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian', summary: 'Shows the Democratic and Republican endorsements in this race.' },
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'stephen-cochrane',
        name: 'Stephen Cochrane',
        party: 'NP',
        role: 'Education Law Attorney',
        qualification: qual(
          'some',
          'Cochrane is an attorney who works in education law, described by the Coast News as a special education attorney. He has not held elected office, and his employer, years of practice and board service were not found.',
          [
            ['education', 'partial', 'Education-law attorney (ballot designation); no classroom or district-administration role documented.'],
            ['budget', 'unknown', 'No budget or oversight role documented.'],
            ['governance', 'partial', 'Legal work in education law implies familiarity with district legal duties and special education compliance; no elected board service.'],
            ['community', 'unknown', 'No parent-group or community roles documented.'],
          ],
        ),
        bio: [
          'Cochrane is the only challenger. His ballot designation is Education Law Attorney, and the Coast News calls him a special education attorney.',
          'No campaign website, candidate statement or news profile was found, and the League of Women Voters VOTE411 page shows no response from any of the four candidates, so his platform is not known beyond the Republican Party endorsement.',
        ],
        scorecard: [
          { topic: 'Special education', position: '~ Works in special education law; no stated policy position found' },
          { topic: 'Budget & fiscal discipline', position: '? No public position found' },
          { topic: 'Curriculum & academics', position: '? No public position found' },
          { topic: 'Enrollment & school facilities', position: '? No public position found' },
          { topic: 'Ideology', position: '~ Republican Party-endorsed; the office is nonpartisan' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'Republican Party of San Diego County (KPBS guide, Sept. 30, 2026).',
      },
      {
        id: 'katherine-fitzpatrick',
        name: 'Katherine C. Fitzpatrick',
        party: 'NP',
        role: 'Incumbent',
        qualification: qual(
          'extensive',
          'Fitzpatrick has served on the Del Mar Union board since 2018 and is the current board clerk. She works as a high school counselor with about twenty years in education.',
          [
            ['education', 'met', 'About twenty years in education: first-grade teacher in Poway, counselor and at-risk coordinator in San Diego Unified, high school Spanish teacher, now a high school counselor (district profile).'],
            ['budget', 'met', 'Elected to the board in 2018 and re-elected in 2022; votes on the annual budget and Local Control and Accountability Plan.'],
            ['governance', 'met', 'Board clerk and the board’s representative to the Legislative Action Network (district profile).'],
            ['community', 'partial', 'Lifelong Del Mar resident; beach-preservation and Del Mar Foundation involvement (district profile).'],
          ],
        ),
        bio: [
          'Fitzpatrick grew up in Del Mar, has a UC San Diego degree in Latin American studies, a bilingual teaching credential, and a master’s degree in educational counseling. She has been on the board since 2018 and serves as board clerk (district profile).',
          'She is the mother of three children, two of whom attended Del Mar Hills Academy. In 2022 she finished second among eight candidates with about 18.6% of the vote (Ballotpedia).',
        ],
        recordVsChange:
          'Fitzpatrick has served two terms on a board that leads a consistently high-ranked district, and she brings counseling experience to the table; the case for change rests on term length and on whether a newer perspective, such as the challenger’s special education law background, would strengthen oversight.',
        scorecard: [
          { topic: 'Student support & counseling', position: '✓✓ Works as a school counselor with an educational-counseling master’s degree' },
          { topic: 'Budget & fiscal discipline', position: '~ Two terms of budget votes; no specific fiscal platform found' },
          { topic: 'Special education', position: '? No published position found' },
          { topic: 'Curriculum & academics', position: '✓ Career in teaching and counseling; district performs at the top of the state' },
          { topic: 'Ideology', position: '~ Democratic Party-endorsed; the office is nonpartisan' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party (KPBS guide, Sept. 30, 2026).',
      },
      {
        id: 'alan-kholos',
        name: 'Alan Scott Kholos',
        party: 'NP',
        role: 'Governing Board Member',
        campaignUrl: 'https://kholos4dmusd.com/',
        qualification: qual(
          'extensive',
          'Kholos has served on the board since his 2023 appointment, was elected in 2024, and is the current board president. He is a corporate attorney and former Air Force officer.',
          [
            ['education', 'partial', 'Parent of two district graduates; career is law and engineering rather than teaching.'],
            ['budget', 'met', 'Board member since April 2023; says he cut special education legal fees to match neighboring districts (campaign site, self-reported); General Counsel and Chief Administrative Officer of a biopharma company.'],
            ['governance', 'met', 'Current Governing Board President; lawyer by training (JD, Loyola Law School).'],
            ['community', 'met', 'Says he holds quarterly roundtables with PTA presidents and helped create a district special education parent council (campaign site, self-reported).'],
          ],
        ),
        bio: [
          'Kholos was appointed in April 2023 to fill a vacancy, won election in November 2024, and is now seeking a full four-year term. He holds an engineering degree from UCLA, an MBA from Embry-Riddle and a law degree, served seven years on active duty in the Air Force, and is General Counsel and Chief Administrative Officer of a Carmel Valley biopharma company (campaign site).',
        ],
        recordVsChange:
          'Kholos says his tenure produced lower special-education legal costs, quarterly PTA roundtables and a special education parent council (self-reported on his campaign site); the case for change rests mainly on opponents’ preference for new board members, not on a documented failure.',
        scorecard: [
          { topic: 'Budget & fiscal discipline', position: '✓✓ “Fiscal discipline and strategic budgeting”; says he reduced special-education legal fees' },
          { topic: 'Special education', position: '✓ Says he helped create a district-wide council of special-education parents' },
          { topic: 'Class size', position: '~ Favors small class sizes, balanced against budget constraints' },
          { topic: 'Curriculum & academics', position: '✓ Emphasizes STEAM+ programs and protecting neighborhood schools' },
          { topic: 'Transparency', position: '✓ Says he added student participation at board meetings and holds quarterly PTA roundtables' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements:
          'San Diego County Democratic Party (KPBS guide, Sept. 30, 2026); Del Mar teachers’ association, six former board presidents, UC Regents Chair Rich Leib and PTA leaders (as listed on his campaign site).',
      },
      {
        id: 'douglas-rafner',
        name: 'Douglas Rafner',
        party: 'NP',
        role: 'Governing Board Member',
        qualification: qual(
          'extensive',
          'Rafner has served on the Del Mar Union board since 2010, including five years as board president, and is an attorney. He is seeking a fifth term.',
          [
            ['education', 'partial', 'Parent whose children attended the district; career is law, not teaching.'],
            ['budget', 'met', 'On the board since 2010; the district lists him on the North City West School Facilities Finance Authority.'],
            ['governance', 'met', 'Five years as board president; attorney at Lynberg & Watkins (law firm profile, June 2024).'],
            ['community', 'partial', 'Joined the board while his children were students; no specific community roles on public record.'],
          ],
        ),
        bio: [
          'Rafner has served since 2010 and has won election four times, most recently in 2022. He has been board president for five years and is an attorney with Lynberg & Watkins (firm profile, June 2024).',
          'No campaign website or candidate statement was found for 2026.',
        ],
        recordVsChange:
          'Rafner brings the longest tenure on the board and a record of presiding over a consistently high-performing district; the case for change is simply sixteen years in office and the value of fresh oversight.',
        scorecard: [
          { topic: 'Budget & facilities', position: '✓ Long record on district finance; sits on the North City West school-facilities finance authority' },
          { topic: 'Governance', position: '✓✓ Five years as board president' },
          { topic: 'Special education', position: '? No published position found' },
          { topic: 'Curriculum & academics', position: '~ Credits educators and staff for the district’s state-leading rankings (law firm post); no new platform found' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party (KPBS guide, Sept. 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Fitzpatrick, Kholos, Rafner', '○', 'Progressive Left voters follow the Democratic Party’s endorsement of the three incumbents, but none published a distinctly progressive agenda for a district with little controversy.'],
      ['EL', 'Fitzpatrick, Kholos, Rafner', '●', 'Establishment Liberals value continuity on a board that runs one of the state’s top-ranked districts and that has Democratic, teachers’-association and PTA-leader backing.'],
      ['DM', 'Fitzpatrick, Kholos, Rafner', '●', 'Democratic Mainstays generally follow the county party’s endorsements and incumbents with proven results.'],
      ['OL', 'Fitzpatrick, Kholos, Rafner', '○', 'Outsider Left voters may dislike a sixteen-year incumbent, but the challenger’s positions are unknown and the alternative is Republican-endorsed.'],
      ['SS', 'Fitzpatrick, Kholos, Rafner', '○', 'Stressed Sideliners with children in a high-performing district have little reason to change the board and little information to the contrary.'],
      ['AR', 'Fitzpatrick, Kholos, Rafner', '◐', 'Ambivalent Right voters prefer competent stewardship, and Kholos’s fiscal-discipline focus and legal background suit the center-right, while the board’s results are strong.'],
      ['PR', 'Cochrane, Kholos', '○', 'Populist Right voters may prefer a Republican-endorsed outsider; Kholos, who ran with Republican backing in 2024 according to a voter-guide site, is the incumbent closest to them.'],
      ['CC', 'Cochrane, Kholos', '◐', 'Committed Conservatives value fiscal discipline, which Kholos’s platform stresses, and a Republican-endorsed challenger adds independent oversight.'],
      ['FF', 'Cochrane', '○', 'Faith and Flag Conservatives have no published parental-rights or curriculum platform from any candidate here, so the Republican-endorsed challenger is a weak lean.'],
    ]),
    counterArguments: [
      'EL/DM (all three incumbents): But one trustee has served sixteen years and all three are incumbents, which means few new perspectives; a challenger with legal expertise in special education could tighten oversight even in a high-performing district.',
      'PR/CC/FF (Cochrane): But the district performs well, and the challenger has published no platform, so a vote for him rests on a party endorsement rather than a track record.',
    ],
  },

  {
    id: 'sduhsd-trustee-area-5',
    categoryId: 'school',
    title: 'San Dieguito Union High School District, Trustee Area 5',
    tldrLabel: 'SDUHSD Trustee Area 5',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member board governs the district’s middle and high schools, including Torrey Pines, Canyon Crest and La Costa Canyon: it adopts the budget, sets policy, and hires and oversees the superintendent. Area 5 covers Carmel Valley.',
      'The incumbent, Phan Anderson, did not file for re-election (Coast News), so Area 5 is an open seat.',
    ],
    introParagraphs: [
      'Ginny Merrifield, who leads a charter school board, faces Justin Moodie, a public-school teacher. The Republican Party endorsed Merrifield and the Democratic Party endorsed Moodie (KPBS, Sept. 30, 2026). Voters choose one.',
    ],
    readingLinks: [
      { label: 'KPBS: meet the candidates for San Diego County school board races', url: 'https://www.kpbs.org/news/politics/2026/09/29/meet-the-candidates-for-all-school-board-races-in-san-diego-county', summary: 'Candidate names for all school board races.' },
      { label: 'Ginny Merrifield campaign site', url: 'https://www.gmerrifield.com/', summary: 'Candidate’s own platform.' },
      { label: 'Justin Moodie campaign site', url: 'https://www.justinmoodie.com/', summary: 'Candidate’s own platform and endorsement list.' },
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'ginny-merrifield',
        name: 'Ginny Merrifield',
        party: 'NP',
        role: 'Charter School President',
        campaignUrl: 'https://www.gmerrifield.com/',
        qualification: qual(
          'some',
          'Merrifield co-founded a private high school and serves on the founding board of a public charter high school. She has not served on an elected district board or worked as a classroom teacher.',
          [
            ['education', 'partial', 'Co-founded Pacific Ridge School in Carlsbad; serves on the founding board of e3 Civic High charter school (campaign site).'],
            ['budget', 'partial', 'Charter-board service implies budget oversight; scale and role not independently verified.'],
            ['governance', 'met', 'Chairs and directs the board of e3 Civic High, per the Coast News; no elected district board service.'],
            ['community', 'met', 'Raised three children in Carmel Valley schools; organized North County families during COVID school closures (campaign site).'],
          ],
        ),
        bio: [
          'Merrifield is a Princeton graduate who raised three children in Carmel Valley. She co-founded Pacific Ridge School in Carlsbad and serves on the founding board of e3 Civic High, a public charter school in downtown San Diego (campaign site).',
          'Her priorities are a district-wide AI strategy, earlier career and college counseling beginning in 7th grade, closing the math gap, and spending less on legal fees and consultants and more in classrooms. She says her COVID-era organizing of families contributed to a statewide lawsuit over school reopening.',
        ],
        scorecard: [
          { topic: 'Budget', position: '✓✓ Wants less spent on legal fees and consultants, more in classrooms' },
          { topic: 'Academics & math', position: '✓ Pledges to close the math gap and add counseling from 7th grade' },
          { topic: 'Technology/AI', position: '✓ Calls for a district-wide AI strategy based on shared values' },
          { topic: 'Transparency', position: '✓✓ Pledges public curriculum information, regular public question sessions, plain-language board votes' },
          { topic: 'School closures/COVID', position: '~ Organized families to challenge closures in 2021' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'Republican Party of San Diego County (KPBS guide, Sept. 30, 2026). No other endorsements listed on her campaign site.',
        notes: ['The county candidate list PDF may show her under a different trustee area; her campaign site and KPBS place her in Area 5.'],
      },
      {
        id: 'justin-moodie',
        name: 'Justin Moodie',
        party: 'NP',
        role: 'Public School Teacher',
        campaignUrl: 'https://www.justinmoodie.com/',
        qualification: qual(
          'some',
          'Moodie has taught for 20 years and currently teaches career technical education (photography) at Oceanside High School. He has no elected board experience.',
          [
            ['education', 'met', '20 years teaching in San Diego, the Bay Area and Mexico City; National Board Certified for 13 years; 10 credentials (campaign site).'],
            ['budget', 'unknown', 'No budget or oversight role documented.'],
            ['governance', 'unknown', 'No prior public-board service found; teacher-union–endorsed (San Dieguito Faculty Association).'],
            ['community', 'partial', 'Graduated from Torrey Pines High (SDUHSD) and grew up in Carmel Valley; wants every student connected to a supportive adult.'],
          ],
        ),
        bio: [
          'Moodie grew up in Carmel Valley, graduated from Torrey Pines High School, and has spent 20 years teaching in San Diego, the Bay Area and Mexico City. He has master’s degrees from UC Berkeley and UC Santa Barbara and was named a National Geographic Grosvenor Teacher Fellow in 2020 and a Southern California visual-arts educator of the year in 2025 (campaign site).',
          'His priorities are academic rigor, expanded career technical education such as engineering, biotechnology and sports medicine, student safety and counseling, and inclusive school cultures.',
        ],
        scorecard: [
          { topic: 'Academics', position: '✓✓ Teacher for 20 years; prioritizes rigor and student success' },
          { topic: 'Career technical education', position: '✓✓ Wants to expand CTE in engineering, biotech and sports medicine; teaches CTE now' },
          { topic: 'Student wellbeing', position: '✓ More investment in counseling departments; every student connected to an adult' },
          { topic: 'Teachers & staffing', position: '✓ Endorsed by the San Dieguito Faculty Association and the California School Employees Association' },
          { topic: 'Budget', position: '? No specific budget position found' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements:
          'San Diego County Democratic Party (KPBS guide, Sept. 30, 2026); San Dieguito Faculty Association, California School Employees Association, Sierra Club, Sen. Catherine Blakespear, Rep. Mike Levin, Assemblymembers Darshana Patel and Tasha Boerner (as listed on his campaign site).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Moodie', '●', 'Progressive Left voters favor the teacher backed by the faculty association, Sierra Club and Democratic Party who stresses inclusion and counseling.'],
      ['EL', 'Moodie', '●', 'Establishment Liberals value a credentialed teacher with institutional endorsements and a CTE-and-rigor agenda.'],
      ['DM', 'Moodie', '●', 'Democratic Mainstays follow the county party and the teachers’ association to the Democratic-endorsed candidate.'],
      ['OL', 'Moodie', '◐', 'Outsider Left voters like a classroom teacher over a charter-school founder, though his long list of establishment endorsements tempers the lean.'],
      ['SS', 'Moodie', '○', 'Stressed Sideliners tend to trust someone who teaches daily and attended the district’s schools over a boardroom background.'],
      ['AR', 'Merrifield', '○', 'Ambivalent Right voters may like her pledge to cut legal and consultant spending and emphasize math, but weakly, since Moodie’s teaching record is also credible.'],
      ['PR', 'Merrifield', '◐', 'Populist Right voters favor the outsider who organized parents against COVID closures and promises to curb legal and consultant spending.'],
      ['CC', 'Merrifield', '●', 'Committed Conservatives value the Republican-endorsed candidate who stresses math, transparency and spending in classrooms.'],
      ['FF', 'Merrifield', '◐', 'Faith and Flag Conservatives will find the Republican-endorsed candidate with a parent-transparency platform the closer fit, though she has not addressed social-issue questions.'],
    ]),
    counterArguments: [
      'CC/PR/FF (Merrifield): But Moodie is the one candidate who teaches in a public school today and graduated from the district, and a trustee’s main job is overseeing the superintendent, not charter-school governance.',
      'PL/EL/DM (Moodie): But he is backed by the faculty association and other employee groups, which bargain with the board; Merrifield’s no-union-backing independence is a real argument for oversight of contracts.',
    ],
  },

  {
    id: 'carlsbad-mayor',
    categoryId: 'city',
    title: 'Carlsbad Mayor',
    tldrLabel: 'Carlsbad Mayor',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The mayor presides over the five-member City Council, and casts one of five votes on the budget, zoning, housing approvals under state density rules, and the Village, coastline and open-space plans. The next term will face Village housing projects, homelessness funding, and coastal erosion on Carlsbad Boulevard (voter guide).',
      'The office is elected citywide to a four-year term. There is no runoff: the candidate with the most votes wins, even without a majority, so a four-way field can be won with a plurality.',
    ],
    introParagraphs: [
      'Keith Blackburn, a retired Carlsbad police officer who joined the council in 2008 and became mayor after the 2022 election, seeks a second term. He faces Bill Arsenault, Stephen Banister and Eric Nixon, who appeared with him at a League of Women Voters forum on Sept. 28, 2026. The Republican Party endorsed Blackburn and the Democratic Party endorsed Nixon (KPBS, Sept. 30, 2026).',
    ],
    readingLinks: [
      { label: 'League of Women Voters forum announcement (Sept. 28, 2026)', url: 'https://thevistapress.com/lwvncsd-to-hold-candidate-forum-for-carlsbad-mayor-city-treasurer/', summary: 'Confirms the four mayoral candidates and two treasurer candidates; the forum was recorded for the League’s YouTube channel.' },
      { label: 'North County Chronicle: North County voters face a full ballot', url: 'https://northcountychronicle.com/articles/election/north-county-voters-face-a-full-ballot-this-november/', summary: 'Lists Carlsbad candidates and ballot occupations.' },
      { label: 'KPBS party endorsement guide', url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian', summary: 'Party endorsements by race.' },
    ],
    legalRequirements: CARLSBAD_LEGAL,
    qualificationCriteria: [
      { id: 'governance', label: 'Municipal policy and governance', detail: 'The mayor leads a council that passes city laws and oversees the city manager and departments.' },
      { id: 'budget', label: 'Budget and fiscal stewardship', detail: 'The council adopts the city budget and sets fees.' },
      { id: 'land-use', label: 'Land use, housing and coastal issues', detail: 'Zoning, density-bonus projects in the Village and coastal erosion are decided at council.' },
      { id: 'leadership', label: 'Public leadership and regional work', detail: 'The mayor chairs meetings, builds three-vote majorities and represents Carlsbad on regional boards.' },
    ],
    candidates: [
      {
        id: 'bill-arsenault',
        name: 'Bill Arsenault',
        party: 'NP',
        role: 'Retired Businessman',
        qualification: qual(
          'limited',
          'Arsenault is a retired businessman and Marine Corps veteran who says he built an international freight-forwarding company. No elected or appointed city office was found.',
          [
            ['governance', 'unknown', 'No prior city office or commission service found.'],
            ['budget', 'partial', 'Reported to have built and run an international freight-forwarding company (voter guide); size and years not stated publicly.'],
            ['land-use', 'unknown', 'No planning or land-use role documented.'],
            ['leadership', 'partial', 'Marine Corps veteran and a member of the Carlsbad Community Emergency Response Team (voter guide).'],
          ],
        ),
        bio: [
          'Arsenault is a retired businessman and Marine Corps veteran who, according to a voter guide, built an international freight-forwarding company. He is a member of Carlsbad’s Community Emergency Response Team.',
          'He appeared on a Sept. 21, 2026 podcast episode about the race; no platform statement, campaign website or news profile was found, so his positions are not documented here.',
        ],
        scorecard: [
          { topic: 'Budget & city finances', position: '? No public position found' },
          { topic: 'Housing & development', position: '? No public position found' },
          { topic: 'Homelessness', position: '? No public position found' },
          { topic: 'Public safety', position: '? No public position found' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None found.',
      },
      {
        id: 'stephen-banister',
        name: 'Stephen Banister',
        party: 'NP',
        role: 'Energy Program Supervisor',
        qualification: qual(
          'some',
          'Banister is a coastal geologist who works as an energy program supervisor at the California Energy Commission, which is relevant to Carlsbad’s coastal-erosion and energy questions. No elected or appointed city office was found.',
          [
            ['governance', 'unknown', 'No prior city office or commission service found.'],
            ['budget', 'partial', 'Supervises an energy program at a state agency (voter guide); budget scale not stated.'],
            ['land-use', 'partial', 'Coastal geologist; relevant to bluff and shoreline issues, no local planning role documented.'],
            ['leadership', 'partial', 'Program supervisor in state government; no public-board leadership documented.'],
          ],
        ),
        bio: [
          'Banister is a coastal geologist and an energy program supervisor at the California Energy Commission, according to a voter guide.',
          'No campaign website, candidate statement or news profile was found, so his positions are not documented here.',
        ],
        scorecard: [
          { topic: 'Coast & erosion', position: '? Coastal geologist, but no stated plan for Carlsbad Boulevard erosion' },
          { topic: 'Budget & city finances', position: '? No public position found' },
          { topic: 'Housing & development', position: '? No public position found' },
          { topic: 'Homelessness', position: '? No public position found' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None found.',
      },
      {
        id: 'keith-blackburn',
        name: 'Keith Blackburn',
        party: 'NP',
        role: 'Mayor',
        campaignUrl: 'http://keith4carlsbad.com/',
        qualification: qual(
          'extensive',
          'Blackburn is the sitting mayor, joined the council in 2008, and spent his earlier career with the Carlsbad Police Department.',
          [
            ['governance', 'met', 'Councilmember since 2008 and mayor since December 2022 (city and Coast News).'],
            ['budget', 'met', 'Has voted on city budgets for about 18 years; says he will use business and public-service experience to protect city finances (campaign site).'],
            ['land-use', 'met', 'Voted yes in July 2026 on a five-story mixed-use Village building with 50 condominiums (4-1); backed the desalination project.'],
            ['leadership', 'met', 'Presides over the council; voted on the fiscal-year 2026-27 Homelessness Action Plan funding (5-0, Dec. 2025).'],
          ],
        ),
        bio: [
          'Blackburn is a retired Carlsbad police officer who was elected to the council in 2008 and to mayor in 2022. His campaign site lists Village revitalization, preserving open space and beach access, fiscal stability, and traffic management among his priorities.',
          'Local coverage and Ballotpedia list him as Republican-aligned; the Republican Party endorsed him, as did the Carlsbad police and firefighter associations (campaign site; KPBS).',
        ],
        recordVsChange:
          'Blackburn has run the council for one term after 18 years as a councilmember and presided over the Village revitalization, a homelessness plan and the desalination project; the case for change is the challengers’ argument for new leadership on housing and local control.',
        scorecard: [
          { topic: 'Village & development', position: '✓ Backed continued Village revitalization; voted for a 50-unit mixed-use building (July 2026)' },
          { topic: 'Budget & city finances', position: '✓ Pledges to protect the city’s financial strength' },
          { topic: 'Homelessness', position: '✓ Voted for the 2026-27 Homelessness Action Plan funding (5-0)' },
          { topic: 'Public safety', position: '✓✓ Long career with the Carlsbad Police Department; police and firefighter associations endorse him' },
          { topic: 'Open space & coast', position: '✓ Pledges to preserve open space and beach access' },
          { topic: 'Transparency', position: '~ In 2025 moved to allow privately initiated code amendments on the drive-thru ban (3-2)' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements:
          'Republican Party of San Diego County (KPBS guide, Sept. 30, 2026); Carlsbad Police Officers’ Association, Carlsbad Firefighters Association, Deputy Sheriffs’ Association and a national electrical contractors’ association (as listed on his campaign site).',
      },
      {
        id: 'eric-nixon',
        name: 'Eric Nixon',
        party: 'NP',
        role: 'EMT',
        campaignUrl: 'https://www.ericnixonformayor.com/',
        qualification: qual(
          'some',
          'Nixon has been an emergency medical technician and, since 2019, runs community relations for an ambulance company. He has not held city office.',
          [
            ['governance', 'unknown', 'No prior city office or commission service found; volunteers with Carlsbad CERT.'],
            ['budget', 'unknown', 'No budget role documented.'],
            ['land-use', 'unknown', 'No planning or land-use role documented; platform calls for protecting the Village and coastline.'],
            ['leadership', 'partial', 'Leads community outreach and public-health and safety programs; created a CPR program that says it trained 11,000+ students and parents in 2025.'],
          ],
        ),
        bio: [
          'Nixon worked as an EMT for American Medical Response from 2011 to 2019 and has led community relations there since, according to his campaign site. He has bachelor’s and associate’s degrees in political science and is a FEMA Public Information Officer and CPR instructor.',
          'His platform stresses protecting the Village and coastline, expanded local control, streamlined permitting for businesses, and resources for police, fire and first responders. His site lists no endorsements; the Democratic Party endorsed him (KPBS).',
        ],
        scorecard: [
          { topic: 'Village & growth', position: '✓ Protect the Village, coastline and Carlsbad’s character; expand local control' },
          { topic: 'Business & permitting', position: '✓ Streamline permitting and regulatory processes' },
          { topic: 'Public safety', position: '✓✓ Fire, police and first responders need resources and training; EMT background' },
          { topic: 'Budget & city finances', position: '? No specific position found' },
          { topic: 'Homelessness', position: '? No specific position found' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party (KPBS guide, Sept. 30, 2026). No other endorsements listed on his campaign site.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Nixon', '○', 'Progressive Left voters have the Democratic-endorsed challenger as the only alternative to a Republican-endorsed incumbent, though Nixon’s platform on housing and homelessness is thin.'],
      ['EL', 'Nixon', '◐', 'Establishment Liberals follow the Democratic Party’s endorsement and value his public-health and first-responder background, but note that he lacks city experience.'],
      ['DM', 'Nixon', '◐', 'Democratic Mainstays generally follow the county party’s pick in a nonpartisan race with an incumbent from the other party.'],
      ['OL', 'Nixon', '○', 'Outsider Left voters like a first-time candidate who is not a longtime council insider, though his platform is light on specifics.'],
      ['SS', 'Blackburn', '○', 'Stressed Sideliners tend to favor the familiar incumbent in a down-ballot race where challengers have little visible record.'],
      ['AR', 'Blackburn', '◐', 'Ambivalent Right voters prefer an experienced, steady mayor with a record on finance and the Village over untested challengers.'],
      ['PR', 'Blackburn', '●', 'Populist Right voters favor a former police officer who is backed by police and firefighters and stresses public safety and local character.'],
      ['CC', 'Blackburn', '●', 'Committed Conservatives value the Republican-endorsed incumbent’s fiscal-stability pledge and public-safety record.'],
      ['FF', 'Blackburn', '●', 'Faith and Flag Conservatives back the Republican-endorsed incumbent against challengers with little record.'],
    ]),
    counterArguments: [
      'PR/CC/FF (Blackburn ●): But with four candidates and no runoff, a split anti-incumbent vote could elect someone with far less than a majority; voters who want change have to decide which challenger to back.',
      'PL/EL/DM (Nixon): But Nixon has never served in city government and has not published a plan for housing, homelessness or the budget, while the incumbent has a record that can be judged.',
    ],
  },

  {
    id: 'carlsbad-city-clerk',
    categoryId: 'city',
    title: 'Carlsbad City Clerk',
    tldrLabel: 'Carlsbad City Clerk',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The elected City Clerk keeps the city’s official records, runs municipal elections in Carlsbad, handles public-records requests, and manages campaign and economic-interest filings. The office does not make policy.',
      'Sherry A. Freisinger is the only name on the ballot, so the result is not in doubt; the practical choice is whether to vote for her or leave the line blank.',
    ],
    introParagraphs: [
      'Freisinger is the sitting clerk and appears alone on the November ballot (Coast News; North County Chronicle). No party endorsement was listed for the race in the KPBS guide.',
    ],
    legalRequirements: CARLSBAD_LEGAL,
    qualificationCriteria: [
      { id: 'records', label: 'Records management and public-records law', detail: 'The clerk maintains official city records and responds to California Public Records Act requests.' },
      { id: 'elections', label: 'Election administration', detail: 'The clerk administers city elections with the county registrar.' },
      { id: 'filings', label: 'Campaign-finance and ethics filings', detail: 'The clerk receives and publishes campaign statements and economic-interest forms.' },
    ],
    candidates: [
      {
        id: 'sherry-freisinger',
        name: 'Sherry A. Freisinger',
        party: 'NP',
        role: 'City Clerk',
        qualification: qual(
          'extensive',
          'Freisinger is the sitting City Clerk, who took office after the 2022 election. Her earlier career is not described in public sources.',
          [
            ['records', 'met', 'Holds the office; manages the city’s official records.'],
            ['elections', 'met', 'As clerk, administers Carlsbad’s city elections.'],
            ['filings', 'met', 'As clerk, receives campaign and economic-interest filings.'],
          ],
        ),
        bio: ['Freisinger is Carlsbad’s City Clerk and is running unopposed for another term. Background details beyond her current office were not found in public sources.'],
        scorecard: [
          { topic: 'Office duties', position: '✓ Incumbent running unopposed' },
          { topic: 'Transparency', position: '? No specific position found' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None found.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Freisinger', '○', 'Progressive Left voters have no alternative; she is the only way to vote in a nonpolicy office.'],
      ['EL', 'Freisinger', '○', 'Establishment Liberals value competent election administration and have a sole incumbent to choose.'],
      ['DM', 'Freisinger', '○', 'Democratic Mainstays can simply vote for the sitting clerk in an administrative role.'],
      ['OL', 'Freisinger', '○', 'Outsider Left voters have no alternative; leaving the line blank is also reasonable.'],
      ['SS', 'Freisinger', '○', 'Stressed Sideliners with little interest in down-ballot offices can vote for the only candidate or skip the line.'],
      ['AR', 'Freisinger', '◐', 'Ambivalent Right voters prefer a steady, low-drama administrator, which an unopposed incumbent clerk suggests.'],
      ['PR', 'Freisinger', '○', 'Populist Right voters have no alternative on the ballot; election-administration trust is a concern they may weigh by leaving it blank.'],
      ['CC', 'Freisinger', '○', 'Committed Conservatives have a single choice in a technical office and can reasonably support continuity.'],
      ['FF', 'Freisinger', '○', 'Faith and Flag Conservatives have no alternative on the ballot in this nonpolicy office.'],
    ]),
    counterArguments: [
      'PR/OL (Freisinger ○): But a one-name race can still be left blank or answered with a write-in if you object to the office being uncontested.',
    ],
  },

  {
    id: 'carlsbad-city-treasurer',
    categoryId: 'city',
    title: 'Carlsbad City Treasurer',
    tldrLabel: 'Carlsbad City Treasurer',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The elected City Treasurer proposes the city’s investment policy for Council approval, invests idle city cash, arranges banking services, and reports on investments. Challenger Thomas Krouse says the city’s reserve funds exceed $950 million (campaign site; not independently verified); the city posts monthly investment reports.',
      'The office is citywide and elected to a four-year term. Peacox won a special election in November 2024 to finish the term of retiring Treasurer Craig Lindholm, so this is his first full-term election.',
    ],
    introParagraphs: [
      'Christian Peacox, the incumbent, faces Thomas E. Krouse, who ran in the 2024 special election and says he is the only candidate with professional investment-management experience. The Democratic Party endorsed Peacox and the Republican Party endorsed Krouse in this nonpartisan race (KPBS, Sept. 30, 2026). Both appeared at the League of Women Voters forum on Sept. 28, 2026.',
    ],
    readingLinks: [
      { label: 'League of Women Voters forum announcement (Sept. 28, 2026)', url: 'https://thevistapress.com/lwvncsd-to-hold-candidate-forum-for-carlsbad-mayor-city-treasurer/', summary: 'Confirms both treasurer candidates attended; the recording was to be posted on the League’s YouTube channel.' },
      { label: 'City of Carlsbad Treasurer’s office', url: 'https://carlsbadca.gov/city-hall/city-treasurer', summary: 'Describes the office’s duties; monthly investment reports are posted on the city site.' },
    ],
    legalRequirements:
      'Registered voter and resident of the City of Carlsbad. Check the city charter and municipal code for any additional requirements.',
    qualificationCriteria: [
      { id: 'investment', label: 'Managing a public investment portfolio', detail: 'The treasurer invests the city’s idle funds under the state-law list of permitted investments (Gov. Code § 53601).' },
      { id: 'credentials', label: 'Finance credentials and training', detail: 'Investment, accounting or municipal-treasury credentials and continuing education bear on the job.' },
      { id: 'reporting', label: 'Transparent investment reporting', detail: 'The treasurer must report investment activity to the council and the public.' },
      { id: 'management', label: 'Managing banking and cash operations', detail: 'The office handles banking relationships and cash management for city departments.' },
    ],
    candidates: [
      {
        id: 'christian-peacox',
        name: 'Christian Peacox',
        party: 'NP',
        role: 'City Treasurer',
        qualification: qual(
          'substantial',
          'Peacox has held the office since December 2024. Before that he spent about ten years in corporate finance and about twenty as an entrepreneur who started and sold businesses (Coast News Q&A, 2024); his biography lists a California Certified Municipal Treasurer credential.',
          [
            ['investment', 'partial', 'City treasurer since Dec 2024 (under two years); earlier corporate finance managing multi-million-dollar budgets and investments; says he aligned the city’s investment policy with Gov. Code § 53601 (association bio, self-reported).'],
            ['credentials', 'met', 'California Certified Municipal Treasurer (CCMT); USC business degree with an international finance emphasis (association bio; CPA licensure not confirmed).'],
            ['reporting', 'partial', 'Says he created a resident-led Investment Review Board; the city posts monthly investment reports.'],
            ['management', 'partial', 'Business-owner background; staff size and cash-management scale of the city office not stated.'],
          ],
        ),
        bio: [
          'Peacox won the November 2024 special election for city treasurer and took office in December 2024. He graduated magna cum laude from USC with a business degree emphasizing international finance, held a corporate finance career for about ten years, and then started and sold several businesses (association biography; Coast News).',
          'He says that in office he aligned the city’s investment policy with state law and created a resident-led Investment Review Board (self-reported in a California Municipal Treasurers Association bio).',
        ],
        recordVsChange:
          'Peacox has run the office for under two years and says he modernized the investment policy and added a resident review board; the case for change is Krouse’s argument that a treasurer should come from professional investment management rather than corporate finance and entrepreneurship.',
        scorecard: [
          { topic: 'Investment policy', position: '✓ Says he aligned the policy with Gov. Code § 53601 (self-reported)' },
          { topic: 'Transparency', position: '✓ Says he created a resident-led Investment Review Board; the city posts monthly reports' },
          { topic: 'Credentials', position: '✓ California Certified Municipal Treasurer; business degree from USC' },
          { topic: 'Risk & returns', position: '? No published portfolio-return targets found' },
          { topic: 'Ideology', position: '~ Democratic Party-endorsed; the office is nonpartisan' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party (KPBS guide, Sept. 30, 2026).',
      },
      {
        id: 'thomas-krouse',
        name: 'Thomas E. Krouse',
        party: 'NP',
        role: 'Investment Company CEO',
        campaignUrl: 'https://www.krouseforcarlsbad.com/',
        qualification: qual(
          'substantial',
          'Krouse holds the Chartered Financial Analyst designation and says he has been CEO of two SEC-registered investment advisers and chief operating officer of hedge funds managing up to $1.2 billion. These claims come from his own campaign materials; he has not held public finance office.',
          [
            ['investment', 'met', 'Says he was CEO of two SEC-registered investment-adviser firms and COO of hedge funds with up to $1.2 billion in portfolio assets (campaign site; not independently verified).'],
            ['credentials', 'met', 'CFA charterholder (campaign site and candidate statement).'],
            ['reporting', 'partial', 'Pledges monthly public reports on performance and securities holdings; no government reporting role.'],
            ['management', 'partial', 'Has run private investment firms; no public cash-management role documented.'],
          ],
        ),
        bio: [
          'Krouse is a CFA charterholder and investment executive who says he has been CEO of two SEC-registered investment advisers. He ran in the 2024 special election for this seat and in 2018 for the 76th Assembly District as a Republican (Times of San Diego, 2018).',
          'His platform is to manage the city’s reserve funds with minimal risk, earn returns that offset inflation, and give residents, the council and staff monthly reports on performance and holdings.',
        ],
        scorecard: [
          { topic: 'Investment expertise', position: '✓✓ CFA with CEO-level investment-adviser experience (self-reported)' },
          { topic: 'Risk & returns', position: '✓ Minimal risk; returns that offset inflation' },
          { topic: 'Transparency', position: '✓✓ Promises monthly reporting on performance and holdings to residents and council' },
          { topic: 'Incumbent’s record', position: '~ His site cites “over $30 million in mark-to-market losses” in one fiscal year under a prior treasurer (a campaign claim not independently confirmed; the treasurer and year are not named)' },
          { topic: 'Public experience', position: '? No government finance office held' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'Republican Party of San Diego County (KPBS guide, Sept. 30, 2026). His campaign site has an endorsements page but no names were on public record.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Peacox', '○', 'Progressive Left voters follow the Democratic-endorsed incumbent who says he added a resident review board, though the office has little ideological content.'],
      ['EL', 'Peacox', '◐', 'Establishment Liberals value a sitting treasurer who holds the municipal-treasurer credential and the Democratic Party’s backing.'],
      ['DM', 'Peacox', '◐', 'Democratic Mainstays generally follow the county party’s pick and the incumbent in a technical office.'],
      ['OL', 'Peacox', '○', 'Outsider Left voters have little to separate the candidates; the resident review board offers a modest transparency edge.'],
      ['SS', 'Peacox', '○', 'Stressed Sideliners lean toward the sitting treasurer when neither candidate has a decisive public record.'],
      ['AR', 'Krouse', '◐', 'Ambivalent Right voters prize competence with money, and a CFA with CEO-level investment experience suits an investment-heavy office, though his claims are self-reported.'],
      ['PR', 'Krouse', '◐', 'Populist Right voters favor the outsider who accuses the prior treasurer of large losses and promises monthly public reporting.'],
      ['CC', 'Krouse', '●', 'Committed Conservatives value the Republican-endorsed, CFA-credentialed investor who stresses minimal risk and transparency.'],
      ['FF', 'Krouse', '◐', 'Faith and Flag Conservatives will favor the Republican-endorsed challenger over a Democratic-endorsed incumbent in a low-information race.'],
    ]),
    counterArguments: [
      'CC/PR (Krouse): But the “$30 million in losses” claim comes only from his campaign site, which names neither the treasurer nor the fiscal year, so it cannot be tied to Peacox; paper mark-to-market losses on bonds held to maturity are also not realized losses.',
      'EL/DM (Peacox): But the credential case favors Krouse: a CFA with professional investment-adviser leadership arguably fits an office that invests hundreds of millions of dollars better than a corporate-finance and small-business background.',
    ],
  },

  {
    id: 'carlsbad-council-d3',
    categoryId: 'city',
    title: 'Carlsbad City Council, District 3',
    tldrLabel: 'Carlsbad Council D3',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member City Council (the mayor plus four district members) adopts the city budget and fees, decides zoning and development approvals including Village housing projects under state density-bonus law, and funds homelessness programs. District 3 is one of four geographic districts, so only residents of the district vote for it; it appears on only part of the 92009 area.',
      'Priya Bhat-Patel has held the seat since 2018 and is Mayor Pro Tem. This race decides whether she keeps the seat on a council that regularly weighs housing density and local control.',
    ],
    introParagraphs: [
      'Bhat-Patel, a public health professional first elected in 2018 and re-elected in 2022, faces Wayland T. Lim, a retired business consultant. The Democratic Party and the Labor Council endorsed Bhat-Patel; no Republican endorsement is listed for the race (KPBS, Sept. 30, 2026).',
    ],
    readingLinks: [
      { label: 'Carlsbad City Council: Mayor Pro Tem Priya Bhat-Patel', url: 'https://carlsbadca.gov/city-hall/city-council/mayor-pro-tem-priya-bhat-patel', summary: 'City biography of the incumbent.' },
      { label: 'KPBS party endorsement guide', url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian', summary: 'Party endorsements by race.' },
    ],
    legalRequirements: CARLSBAD_LEGAL,
    qualificationCriteria: [
      { id: 'governance', label: 'Municipal policy and governance', detail: 'Councilmembers pass city laws, oversee the city manager and sit on regional boards.' },
      { id: 'land-budget', label: 'Land use and budget', detail: 'The council adopts the budget, fees, zoning and housing approvals.' },
      { id: 'constituent', label: 'Constituent services and district knowledge', detail: 'Residents bring neighborhood issues, from traffic to erosion, to their councilmember.' },
      { id: 'coalition', label: 'Coalition-building', detail: 'Passing items takes three votes on a five-member council.' },
    ],
    candidates: [
      {
        id: 'priya-bhat-patel',
        name: 'Priya Bhat-Patel',
        party: 'NP',
        role: 'Council Member',
        campaignUrl: 'https://carlsbadca.gov/city-hall/city-council/mayor-pro-tem-priya-bhat-patel',
        qualification: qual(
          'extensive',
          'Bhat-Patel holds the District 3 seat and has been on the council since 2018. The council voted in January 2026 to keep her as Mayor Pro Tem.',
          [
            ['governance', 'met', 'Councilmember since 2018, re-elected 2022; Mayor Pro Tem (city).'],
            ['land-budget', 'met', 'Has voted on Carlsbad’s budgets and development items since 2019; her city profile cites smart growth, sustainability, small business support and infrastructure investment.'],
            ['constituent', 'met', 'Eight years representing District 3; public health professional by background.'],
            ['coalition', 'met', 'Chosen by council colleagues as Mayor Pro Tem in January 2026.'],
          ],
        ),
        bio: [
          'Bhat-Patel was first elected in 2018 and re-elected in 2022. She is a public health professional who serves as Mayor Pro Tem, and her city biography says she has advanced smart growth, environmental sustainability, small business support and infrastructure investment.',
          'The San Diego County Democratic Party and the San Diego & Imperial Counties Labor Council endorsed her (Ballotpedia; KPBS).',
        ],
        recordVsChange:
          'Bhat-Patel has served two terms and now holds the Mayor Pro Tem title, which gives District 3 influence over the agenda and budget; the case for change is a challenger’s argument for new perspective on a council that continues to face Village density and erosion decisions.',
        scorecard: [
          { topic: 'Housing & density', position: '~ Favors “smart growth”; no specific votes on Village projects found' },
          { topic: 'Homelessness', position: '✓ Council voted 5-0 in Dec. 2025 on homelessness plan funding' },
          { topic: 'Environment & coast', position: '✓ City profile cites environmental sustainability' },
          { topic: 'Small business & infrastructure', position: '✓ City profile cites small business support and infrastructure investment' },
          { topic: 'Ideology', position: '~ Democratic Party- and Labor Council–endorsed; the office is nonpartisan' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party; San Diego & Imperial Counties Labor Council (Ballotpedia; KPBS, Sept. 30, 2026).',
      },
      {
        id: 'wayland-lim',
        name: 'Wayland T. Lim',
        party: 'NP',
        role: 'Retired Business Consultant',
        qualification: qual(
          'limited',
          'Lim is a retired business consultant who has owned a Carlsbad home for 25 years and holds a master’s degree in education and performance improvement. No elected or appointed city office was found.',
          [
            ['governance', 'unknown', 'No prior city office or commission service found.'],
            ['land-budget', 'unknown', 'No budget or land-use role documented.'],
            ['constituent', 'partial', 'Long-time Carlsbad homeowner (25 years); no neighborhood roles on public record.'],
            ['coalition', 'unknown', 'No public-board or coalition experience documented.'],
          ],
        ),
        bio: [
          'Lim is a retired business consultant who has owned a home in Carlsbad for 25 years and holds a master’s degree in education and performance improvement (voter guide). He appears on the ballot as Wayland T. Lim.',
          'No campaign website, platform statement, or endorsements were found, so his positions are not documented here.',
        ],
        scorecard: [
          { topic: 'Housing & density', position: '? No public position found' },
          { topic: 'Budget & fees', position: '? No public position found' },
          { topic: 'Homelessness', position: '? No public position found' },
          { topic: 'Coast & erosion', position: '? No public position found' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None found; no Republican Party endorsement listed (KPBS guide, Sept. 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Bhat-Patel', '●', 'Progressive Left voters favor the Democratic- and Labor Council–endorsed incumbent with a public-health background and sustainability focus.'],
      ['EL', 'Bhat-Patel', '●', 'Establishment Liberals value two terms of experience, the Mayor Pro Tem role and institutional endorsements.'],
      ['DM', 'Bhat-Patel', '●', 'Democratic Mainstays follow the county party and Labor Council to the incumbent.'],
      ['OL', 'Bhat-Patel', '◐', 'Outsider Left voters may find her establishment-leaning, but the challenger has no public platform to weigh against her.'],
      ['SS', 'Bhat-Patel', '○', 'Stressed Sideliners tend to lean toward the incumbent who delivers visible local service, though many will know neither candidate.'],
      ['AR', 'Bhat-Patel', '○', 'Ambivalent Right voters prefer experience in a local office, and the challenger has published nothing to weigh against it.'],
      ['PR', 'Lim', '○', 'Populist Right voters may favor a non-politician challenger over an eight-year officeholder, but weakly, since he has published no positions.'],
      ['CC', 'Lim', '○', 'Committed Conservatives lean against a Democratic-endorsed incumbent, though no Republican endorsement or platform exists for Lim.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no endorsement, platform or record for either candidate to separate them on their priorities, so this column abstains.'],
    ]),
    counterArguments: [
      'PL/EL/DM (Bhat-Patel ●): But an eight-year incumbent faces a challenger with no public record, so voters are comparing a record against an unknown; the absence of information about Lim cuts both ways.',
      'PR/CC (Lim ○): But Lim has published no platform, no endorsement and no experience in city government, so a vote for him is a protest vote rather than a choice on policy.',
    ],
  },
];
