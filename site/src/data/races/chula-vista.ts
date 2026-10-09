import type { CandidateQualification, CriterionAssessment, ExperienceLevel, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Chula Vista contests (ZIPs 91911 and 91914): Chula Vista Elementary School District Seats 1, 3, 5,
 * Southwestern College Trustee Area 4, Mayor, Council District 1, City Attorney, Otay Water Division 3.
 * Research current as of Oct 7, 2026. Money and endorsement dates are stated in-line.
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

const NO_STATEMENT = 'No public record found beyond the ballot designation.';

/** Shared criteria for the three CVESD board seats. */
const CVESD_CRITERIA = [
  { id: 'budget', label: 'Budget and fiscal oversight', detail: 'The board adopts a budget of several hundred million dollars and is managing a deficit and layoff notices.' },
  { id: 'education', label: 'Classroom and school-leadership experience', detail: 'Trustees set academic policy for roughly 28,000 K-6 students.' },
  { id: 'governance', label: 'Board governance and superintendent oversight', detail: 'The board hires and evaluates the superintendent and approves contracts and policies.' },
  { id: 'community', label: 'Parent and community engagement', detail: 'Trustees hear from families, employees and unions on a district that serves all of Chula Vista.' },
];

const CVESD_LEGAL = 'Registered voter and resident of the Chula Vista Elementary School District; at least 18 years old.';

const CVESD_STAKES_1 =
  'The five-member Chula Vista Elementary School District board governs the largest elementary district in the South Bay (about 28,000 students, TK-6). It adopts the budget, negotiates with employee unions through the superintendent, and sets academic and discipline policy.';

const CVESD_STAKES_2 =
  'Three of the five seats are on the November ballot at once, so the result can shift the board’s majority on money questions now in front of it: a current-year deficit (reported at about $16 million), layoff notices earlier this year, and an August 2026 vote that raised trustee stipends from $750 to $3,000 a month (3-2; Tamayo, Tolston and Ugarte for; Dominguez Cervantes and Ramirez Dominguez against).';

export const RACES_CHULA_VISTA: Race[] = [
  // ───────────────────────────── CVESD Seat 1 ─────────────────────────────
  {
    id: 'cvesd-seat-1',
    categoryId: 'school',
    title: 'Chula Vista Elementary School District, Seat 1',
    tldrLabel: 'CVESD Seat 1',
    seatContext: 'Appointed incumbent',
    kind: 'candidates',
    stakesParagraphs: [CVESD_STAKES_1, CVESD_STAKES_2],
    introParagraphs: [
      'Jessica Castillo Tolston was appointed to Seat 1 in January 2025 to fill the unexpired term of Francisco Tamayo, who had moved to a different seat. She faces two newcomers, a district-level educator and an energy-company operations manager. The race is nonpartisan and the finalists’ party registrations are not public.',
      'The Labor Council has endorsed Tolston. The challengers’ main contrast with her is on money: McLaren says the board should revisit the stipend increase, and Balvaneda emphasizes financial controls and follow-through on an outside review of district finances.',
    ],
    legalRequirements: CVESD_LEGAL,
    qualificationCriteria: CVESD_CRITERIA,
    readingLinks: [
      { label: 'inewsource: South Bay school board candidates (Oct 7, 2026)', url: 'https://inewsource.org/2026/10/07/san-diego-south-bay-school-board-candidates-election/', summary: 'Candidate questionnaire answers for the CVESD seats.' },
      { label: 'KPBS: Meet the school board candidates (Sept 29, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/29/meet-the-candidates-for-all-school-board-races-in-san-diego-county', summary: 'County-wide school board guide with the full CVESD field.' },
      { label: 'Voice of San Diego: stipend vote (Aug 20, 2026)', url: 'https://voiceofsandiego.org/2026/08/20/one-battle-after-another-south-county-edition/', summary: 'Report on the 3-2 vote to raise trustee pay to $3,000 a month.' },
    ],
    candidates: [
      {
        id: 'jorge-balvaneda',
        name: 'Jorge Balvaneda',
        party: 'NP',
        role: 'Operations Manager/Parent',
        bio: [
          'Balvaneda is an emergency operations manager at San Diego Gas & Electric with an MBA, and a parent whose children attended CVESD schools. He says he is not seeking a political career.',
          'His questionnaire answers focus on academic benchmarks, financial controls, and following through on a 2025 outside financial review of the district (FCMAT).',
        ],
        scorecard: [
          { topic: 'Budget/deficit', position: '✓ Wants tighter financial controls and follow-through on the 2025 FCMAT review', comparison: 'McLaren also questions the stipend raise; Tolston voted for it.' },
          { topic: 'Academics', position: '✓ Wants clear academic benchmarks', comparison: 'Tolston stresses social-emotional and after-school programs.' },
          { topic: 'Trustee pay', position: '? No position on the August stipend vote found', comparison: 'McLaren says the board should revisit it; Tolston voted yes.' },
          { topic: 'Student services', position: '? No specific position found', comparison: 'Tolston lists special-education protections.' },
          { topic: 'Labor relations', position: '? No union endorsement or position found', comparison: 'Tolston is endorsed by the Labor Council.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None verified.',
        qualification: qual('some', 'Balvaneda manages emergency operations at a large utility and is a district parent, but has no classroom or board experience.', [
          ['budget', 'partial', 'MBA and operations-management role at SDG&E; no public-budget role documented.'],
          ['education', 'not-met', 'No teaching or school-leadership role documented.'],
          ['governance', 'unknown', 'No prior board service found.'],
          ['community', 'partial', 'District parent with children in CVESD schools (questionnaire).'],
        ]),
      },
      {
        id: 'jessica-castillo-tolston',
        name: 'Jessica Castillo Tolston',
        party: 'NP',
        role: 'Appointed Incumbent',
        bio: [
          'Tolston is a program analyst at the U.S. Department of Homeland Security’s Office of Biometric Identity Management with a master’s degree in organizational leadership. The board appointed her to Seat 1 in January 2025.',
          'She emphasizes social-emotional programs, after-school programs, and protections for special education. She voted for the August 2026 stipend increase.',
        ],
        recordVsChange:
          'Tolston has served about 21 months, during which the board faced a deficit and layoff notices and then raised its own pay. The case for continuity is a trustee backed by the Labor Council who can build on current programs; the case for change is that her vote to quadruple the stipend came while the district was cutting.',
        scorecard: [
          { topic: 'Budget/deficit', position: '~ On the board as it trimmed the deficit to about $16 million; no separate plan found', comparison: 'McLaren and Balvaneda both press for tighter oversight.' },
          { topic: 'Trustee pay', position: '✗ Voted for raising stipends from $750 to $3,000 a month (Aug 12, 2026)', comparison: 'McLaren says the board should revisit it.' },
          { topic: 'Student services', position: '✓✓ Special-education protections, social-emotional and after-school programs', comparison: 'Challengers lead with academics and finances.' },
          { topic: 'Academics', position: '? No specific academic targets found', comparison: 'Balvaneda cites academic benchmarks.' },
          { topic: 'Labor relations', position: '✓ Endorsed by the San Diego & Imperial Counties Labor Council', comparison: 'No challenger has a public union endorsement.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego & Imperial Counties Labor Council (June 2026 endorsement list).',
        qualification: qual('some', 'Tolston has about 21 months on the board; her professional background is federal program analysis rather than education.', [
          ['budget', 'partial', 'Trustee since January 2025, with a vote on district budgets; day job is federal program analysis.'],
          ['education', 'not-met', 'No classroom or school-leadership role documented.'],
          ['governance', 'partial', 'Trustee since January 2025 (appointed); master’s in organizational leadership.'],
          ['community', 'partial', 'Priorities center on after-school and special-education families; no wider outreach record found.'],
        ]),
      },
      {
        id: 'debra-mclaren',
        name: 'Debra McLaren',
        party: 'NP',
        role: 'Educator/Parent',
        bio: [
          'McLaren is an executive coach for the National Center for Urban Schools Transformation at San Diego State University and has spent 35 years as a teacher, principal and district leader in Chula Vista. She holds a doctorate in education from SDSU.',
          'She says the board should revisit the stipend increase during a $16 million deficit.',
        ],
        scorecard: [
          { topic: 'Trustee pay', position: '✓✓ Says the board should revisit the stipend increase', comparison: 'Tolston voted for the raise.' },
          { topic: 'Budget/deficit', position: '✓ Frames the stipend as a priorities problem during a $16 million deficit', comparison: 'Balvaneda focuses on controls and the outside review.' },
          { topic: 'Academics', position: '✓ 35 years as teacher, principal and district leader', comparison: 'Neither opponent has classroom or school-leadership experience.' },
          { topic: 'Student services', position: '? No specific program position found', comparison: 'Tolston lists special education and after-school programs.' },
          { topic: 'Labor relations', position: '? No union endorsement found', comparison: 'Tolston has the Labor Council endorsement.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None verified.',
        qualification: qual('substantial', 'McLaren has 35 years in Chula Vista schools as teacher, principal and district leader, but no elected board service.', [
          ['budget', 'partial', 'Principal and district-level leadership roles; no board budget vote documented.'],
          ['education', 'met', '35 years as a teacher, principal and district leader in Chula Vista; EdD from SDSU.'],
          ['governance', 'partial', 'Works with districts as a coach; has not served as an elected trustee.'],
          ['community', 'met', 'Decades working with Chula Vista schools and families; also a district parent.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['PL', 'Tolston', '○', 'Progressive Left voters weighing a low-information race can lean to the Labor Council-endorsed trustee who stresses special education and social-emotional programs, though her vote for a pay raise during a deficit is a drawback.'],
      ['EL', 'McLaren', '◐', 'Establishment Liberals tend to prize credentialed education expertise, and McLaren’s 35 years and doctorate, plus her objection to the stipend vote, outweigh Tolston’s union backing.'],
      ['DM', 'Tolston', '○', 'Democratic Mainstays often follow the Labor Council and the county party’s allied officials, which points to the endorsed incumbent.'],
      ['OL', 'McLaren', '○', 'Outsider Left voters skeptical of trustees raising their own pay can side with the challenger who says the raise should be revisited.'],
      ['SS', '—', '○', 'Stressed Sideliners have little to go on in a three-way field with little coverage, so no pick is recommended.', 'In a little-covered three-way race, Stressed Sideliners can let experience decide: McLaren spent 35 years as a teacher, principal and district leader in Chula Vista schools, though she has never served on a board.'],
      ['AR', 'Balvaneda', '○', 'Ambivalent Right voters often prefer a pragmatic private-sector manager who talks about benchmarks and financial controls over a political insider.'],
      ['PR', 'McLaren', '○', 'Populist Right voters angry at officials who raise their own pay may favor the candidate who wants the stipend reversed.'],
      ['CC', 'Balvaneda', '○', 'Committed Conservatives value financial controls and accountability for the deficit, which is Balvaneda’s main message.'],
      ['FF', '—', '○', 'Faith and Flag Conservatives have no clear contrast among these three on values issues, so no pick is recommended.', 'With no values contrast among the three, Faith and Flag Conservatives who weigh experience could choose McLaren, whose decades leading Chula Vista classrooms and schools make her the field’s most seasoned educator, even though she has not held elected office.'],
    ]),
    counterArguments: [
      'PL/DM (Tolston ○): But her vote to raise trustee stipends fourfold while the district was issuing layoff notices is hard to square with a labor-aligned platform.',
      'EL/OL (McLaren): But she has not served on a board, and the pay increase may be hard to reverse once it is in effect (it began Sept. 1).',
    ],
  },

  // ───────────────────────────── CVESD Seat 3 ─────────────────────────────
  {
    id: 'cvesd-seat-3',
    categoryId: 'school',
    title: 'Chula Vista Elementary School District, Seat 3',
    tldrLabel: 'CVESD Seat 3',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [CVESD_STAKES_1, CVESD_STAKES_2],
    introParagraphs: [
      'No incumbent is on the ballot for Seat 3: the three candidates are a classroom teacher, a retired principal, and a utility regulatory administrator. Katina Gonzalez-Rondeau did not answer the inewsource questionnaire, so little about her platform is public.',
      'The Labor Council has endorsed Leticia Segura. Norma Lozoya Toothman campaigns on equity and questions compensation increases not tied to student outcomes.',
    ],
    legalRequirements: CVESD_LEGAL,
    qualificationCriteria: CVESD_CRITERIA,
    readingLinks: [
      { label: 'inewsource: South Bay school board candidates (Oct 7, 2026)', url: 'https://inewsource.org/2026/10/07/san-diego-south-bay-school-board-candidates-election/', summary: 'Candidate questionnaire answers for the CVESD seats.' },
      { label: 'KPBS: Meet the school board candidates (Sept 29, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/29/meet-the-candidates-for-all-school-board-races-in-san-diego-county', summary: 'County-wide school board guide with the full CVESD field.' },
    ],
    candidates: [
      {
        id: 'katina-gonzalez-rondeau',
        name: 'Katina Gonzalez-Rondeau',
        party: 'NP',
        role: 'Teacher/Student Advocate',
        bio: [
          'Gonzalez-Rondeau’s ballot designation is Teacher/Student Advocate. She did not respond to inewsource’s candidate questionnaire, and no other detailed profile of her platform or record was found.',
        ],
        scorecard: [
          { topic: 'Budget/deficit', position: `? ${NO_STATEMENT}`, comparison: 'Toothman questions compensation raises; Segura promises budget transparency.' },
          { topic: 'Academics', position: `? ${NO_STATEMENT}`, comparison: 'Segura is a retired principal with a doctorate in educational leadership.' },
          { topic: 'Trustee pay', position: '? No position found', comparison: 'Toothman questions pay increases not tied to student outcomes.' },
          { topic: 'Student services', position: '? No position found', comparison: 'Toothman centers her platform on equity.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None verified.',
        qualification: qual('limited', 'The ballot designation indicates teaching experience, but no employer, years or board history is publicly documented.', [
          ['budget', 'unknown', 'No public record found.'],
          ['education', 'partial', 'Ballot designation is Teacher/Student Advocate; employer and years not publicly documented.'],
          ['governance', 'unknown', 'No public record found.'],
          ['community', 'unknown', 'No public record found.'],
        ]),
      },
      {
        id: 'leticia-segura',
        name: 'Leticia Segura',
        party: 'NP',
        role: 'Retired Educator/Parent',
        bio: [
          'Segura is a retired educator who was a principal in the National School District and holds a doctorate in educational leadership from San Diego State University.',
          'Her priorities are school safety, family trust and budget transparency, and she pledges a listening tour in her first year. She is endorsed by the San Diego & Imperial Counties Labor Council.',
        ],
        scorecard: [
          { topic: 'Budget/deficit', position: '✓ Budget transparency is a stated priority', comparison: 'Toothman questions compensation raises specifically.' },
          { topic: 'School safety', position: '✓ Lists school safety as a priority', comparison: 'Neither opponent lists it as a lead issue.' },
          { topic: 'Academics', position: '✓ Retired principal with an educational-leadership doctorate', comparison: 'Toothman’s background is regulatory affairs, not education.' },
          { topic: 'Community engagement', position: '✓ Pledges a listening tour in year one', comparison: 'Toothman is a lifelong Chula Vista resident with family in CVESD schools.' },
          { topic: 'Labor relations', position: '✓ Endorsed by the Labor Council', comparison: 'No opponent has a public union endorsement.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego & Imperial Counties Labor Council (June 2026 endorsement list).',
        qualification: qual('substantial', 'Segura is a retired principal with a doctorate in educational leadership but has not served on an elected board.', [
          ['budget', 'partial', 'Led a school as principal; no board budget role documented.'],
          ['education', 'met', 'Retired educator and principal in the National School District; EdD in educational leadership from SDSU.'],
          ['governance', 'unknown', 'No prior elected board service found.'],
          ['community', 'partial', 'Parent and career educator; plans a listening tour but has no public community-board record.'],
        ]),
      },
      {
        id: 'norma-lozoya-toothman',
        name: 'Norma Lozoya Toothman',
        party: 'NP',
        role: 'Parent/Nonprofit Director',
        bio: [
          'Toothman is a regulatory affairs tariff administrator at San Diego Gas & Electric with a political science degree from the University of San Diego. She is a lifelong Chula Vista resident whose family attended CVESD schools; her ballot designation is Parent/Nonprofit Director.',
          'Her platform centers on equity, and she questions compensation increases that are not tied to student outcomes.',
        ],
        scorecard: [
          { topic: 'Trustee/employee pay', position: '✓ Questions compensation increases not tied to student outcomes', comparison: 'Segura emphasizes budget transparency rather than compensation.' },
          { topic: 'Equity', position: '✓✓ Equity is the center of her platform', comparison: 'Segura leads with safety and trust.' },
          { topic: 'Budget/deficit', position: '? No detailed plan found', comparison: 'Segura promises budget transparency.' },
          { topic: 'Academics', position: '? No specific academic targets found', comparison: 'Segura has principal-level experience.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None verified.',
        qualification: qual('some', 'Toothman works in utility regulatory administration and leads a nonprofit (per her ballot designation) but has no school or board experience.', [
          ['budget', 'partial', 'Tariff administration at a regulated utility; no public-budget role documented.'],
          ['education', 'not-met', 'No teaching or school-leadership role documented.'],
          ['governance', 'unknown', 'No prior elected board service found.'],
          ['community', 'partial', 'Lifelong Chula Vista resident; ballot designation lists nonprofit director; organization not publicly documented.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['PL', 'Segura', '◐', 'Progressive Left voters can weigh the Labor Council endorsement and a retired principal’s experience over a newcomer focused mainly on equity and pay.'],
      ['EL', 'Segura', '●', 'Establishment Liberals value credentialed educators and labor backing, and Segura has both plus a budget-transparency pledge.'],
      ['DM', 'Segura', '◐', 'Democratic Mainstays often follow Labor Council endorsements, which point to Segura.'],
      ['OL', 'Toothman', '○', 'Outsider Left voters who distrust the educational establishment may prefer the non-educator who questions pay raises and centers equity.'],
      ['SS', '—', '○', 'Stressed Sideliners have little to go on in a low-coverage race, so no pick is recommended.', 'Stressed Sideliners with little to go on can lean on experience: Segura is a retired principal with a doctorate in educational leadership, the only candidate here who has run a school, though she has not served on a board.'],
      ['AR', 'Toothman', '○', 'Ambivalent Right voters may like a utility-sector administrator who asks whether pay raises are tied to student results.'],
      ['PR', '—', '○', 'Populist Right voters have no clear contrast among these candidates on their core issues, so no pick is recommended.', 'Populist Right voters see no outsider contrast here, so experience can break the tie in favor of Segura, a retired principal, while accepting that she carries the Labor Council’s endorsement rather than an anti-establishment message.'],
      ['CC', '—', '○', 'Committed Conservatives find no candidate here with a clearly limited-government or accountability-first platform, so no pick is recommended.', 'No candidate offers Committed Conservatives a limited-government platform, but Segura pairs principal-level school management with a stated priority on budget transparency during a deficit, though her Labor Council backing may give them pause on employee costs.'],
      ['FF', '—', '○', 'Faith and Flag Conservatives have no clear contrast among these candidates on values issues, so no pick is recommended.', 'Faith and Flag Conservatives find no values contrast, so experience decides: Segura is a career educator and former principal who lists school safety and family trust as priorities, though she is new to board service.'],
    ]),
    counterArguments: [
      'EL/DM (Segura): But being endorsed by the Labor Council does not show how she would weigh employee raises against a deficit, and she has not served on a board before.',
      'OL/AR (Toothman): But without school experience, she would be learning the budget and curriculum on the job, and the third candidate’s platform is unknown.',
    ],
  },

  // ───────────────────────────── CVESD Seat 5 ─────────────────────────────
  {
    id: 'cvesd-seat-5',
    categoryId: 'school',
    title: 'Chula Vista Elementary School District, Seat 5',
    tldrLabel: 'CVESD Seat 5',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [CVESD_STAKES_1, CVESD_STAKES_2],
    introParagraphs: [
      'Six candidates are running for Seat 5, the most crowded school-board race on this ballot. Delia Dominguez Cervantes, a retired county health and human services administrator, is the incumbent, having voted against the stipend increase. The Labor Council has endorsed Michael “Tony” Perez, a retired administrator.',
      'With six names and a single winner chosen by plurality, a small share of votes can decide the seat. Devone Jones did not answer the inewsource questionnaire, so little of that candidate’s platform is public.',
    ],
    legalRequirements: CVESD_LEGAL,
    qualificationCriteria: CVESD_CRITERIA,
    readingLinks: [
      { label: 'inewsource: South Bay school board candidates (Oct 7, 2026)', url: 'https://inewsource.org/2026/10/07/san-diego-south-bay-school-board-candidates-election/', summary: 'Candidate questionnaire answers for the CVESD seats.' },
      { label: 'KPBS: Meet the school board candidates (Sept 29, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/29/meet-the-candidates-for-all-school-board-races-in-san-diego-county', summary: 'County-wide school board guide with the full CVESD field.' },
      { label: 'Voice of San Diego: stipend vote (Aug 20, 2026)', url: 'https://voiceofsandiego.org/2026/08/20/one-battle-after-another-south-county-edition/', summary: 'Dominguez Cervantes voted against the raise.' },
    ],
    candidates: [
      {
        id: 'delia-dominguez-cervantes',
        name: 'Delia Dominguez Cervantes',
        party: 'NP',
        role: 'Governing Board Member',
        bio: [
          'Dominguez Cervantes is the sitting trustee and a retired San Diego County health and human services administrator; two of her daughters teach in CVESD.',
          'She says she pushed for an independent FCMAT review of district finances, voted against raising board pay from $750 to $3,000 a month, and opposed cuts affecting teachers and classified staff.',
        ],
        recordVsChange:
          'Dominguez Cervantes has been a voice for outside financial review and against the stipend raise, which gives her credibility on oversight. The case for change is the field’s other educators, who bring more classroom or school-site experience.',
        scorecard: [
          { topic: 'Trustee pay', position: '✓✓ Voted against the stipend raise to $3,000 a month', comparison: 'Tolston and Tamayo voted for it; most challengers have not said.' },
          { topic: 'Budget/deficit', position: '✓ Pushed for an independent FCMAT financial review', comparison: 'Perez lists the district budget as a priority without a specific plan found.' },
          { topic: 'Jobs/staffing', position: '✓ Opposed cuts affecting teachers and classified staff', comparison: 'Challengers have not detailed a layoff position.' },
          { topic: 'Academics', position: '? No specific academic targets found', comparison: 'Perez and Gonzalez cite literacy and academic growth.' },
          { topic: 'Labor relations', position: '~ Aligned with employees on cuts, but the Labor Council endorsed Perez, not her', comparison: 'Perez has the Labor Council endorsement.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'No organizational endorsements on public record.',
        qualification: qual('substantial', 'Dominguez Cervantes is a sitting trustee with a career in county health and human services administration; she has not worked in a school.', [
          ['budget', 'met', 'Has voted on district budgets as a trustee and pushed for the FCMAT review; previously a county HHS administrator.'],
          ['education', 'not-met', 'No classroom or school-leadership career; two daughters are CVESD teachers.'],
          ['governance', 'met', 'Sitting CVESD trustee; participated in major district decisions in 2025-26.'],
          ['community', 'partial', 'County public-service career; no specific school-community role on public record.'],
        ]),
      },
      {
        id: 'tom-glover',
        name: 'Tom Glover',
        party: 'NP',
        role: 'Retired Educator',
        bio: [
          'Glover is a retired human resources director at Sweetwater Union High School District with a doctorate in education. He emphasizes multiple measures of student success, including social growth and staff engagement.',
        ],
        scorecard: [
          { topic: 'Academics', position: '✓ Wants multiple measures of success, including social growth', comparison: 'Perez prioritizes academic growth and fewer discipline referrals.' },
          { topic: 'Staff engagement', position: '✓ Cites staff engagement; 30-plus-year district HR background', comparison: 'Dominguez Cervantes frames it as opposing staff cuts.' },
          { topic: 'Budget/deficit', position: '? No specific plan found', comparison: 'Dominguez Cervantes pushed for the FCMAT review.' },
          { topic: 'Trustee pay', position: '? No position found', comparison: 'Dominguez Cervantes voted against the raise.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None verified.',
        qualification: qual('some', 'Glover spent a career in school-district human resources at the high school level and has a doctorate in education, but no board service was found.', [
          ['budget', 'partial', 'Ran a district HR department, which includes personnel-cost management; no board budget role documented.'],
          ['education', 'partial', 'Retired from Sweetwater Union HSD as HR director; EdD; classroom or principal experience not publicly documented.'],
          ['governance', 'partial', 'Worked under a school board as a district director; no elected service.'],
          ['community', 'unknown', 'No public record found.'],
        ]),
      },
      {
        id: 'janette-gomez',
        name: 'Janette Gomez',
        party: 'NP',
        role: 'Teacher/Parent',
        bio: [
          'Gomez is a teacher at Sweetwater Union High School District with 25 years in education, a parent of two CVESD students, and has grant-writing experience. She prioritizes mental health, counseling and arts programs.',
        ],
        scorecard: [
          { topic: 'Student services', position: '✓✓ Mental health, counseling and arts programs are her priorities', comparison: 'Perez and Gonzalez lead with academics and literacy.' },
          { topic: 'Funding', position: '✓ Grant-writing experience to bring in outside money', comparison: 'No other candidate cites grant experience.' },
          { topic: 'Budget/deficit', position: '? No position on the deficit found', comparison: 'Dominguez Cervantes pushed for the FCMAT review.' },
          { topic: 'Trustee pay', position: '? No position found', comparison: 'Dominguez Cervantes voted against the raise.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None verified.',
        qualification: qual('some', 'Gomez has 25 years as a classroom teacher and is a district parent, but has not served on a board or managed a budget.', [
          ['budget', 'partial', 'Grant-writing experience; no budget oversight role documented.'],
          ['education', 'met', '25 years in education as a teacher at Sweetwater Union HSD.'],
          ['governance', 'unknown', 'No board service found.'],
          ['community', 'met', 'Parent of two CVESD students; works with families as a teacher.'],
        ]),
      },
      {
        id: 'jaqueline-gonzalez',
        name: 'Jaqueline Gonzalez',
        party: 'NP',
        role: 'Parent/Substitute Teacher',
        bio: [
          'Gonzalez is a substitute teacher and longtime parent leader in the district’s English-learner advisory councils (DAC/DELAC), holds an MBA, and served on CVESD’s Budget Advisory Committee. She focuses on early literacy and family access to district information.',
        ],
        scorecard: [
          { topic: 'Academics', position: '✓✓ Early literacy is a focus', comparison: 'Gomez leads with mental health and arts.' },
          { topic: 'Budget/deficit', position: '✓ MBA and service on the district’s Budget Advisory Committee', comparison: 'Dominguez Cervantes has voted on budgets as a trustee.' },
          { topic: 'Transparency', position: '✓ Wants better family access to district information', comparison: 'Dominguez Cervantes stresses independent financial review.' },
          { topic: 'Student services', position: '✓ English-learner family leadership (DAC/DELAC)', comparison: 'Gomez stresses counseling and mental health.' },
          { topic: 'Trustee pay', position: '? No position found', comparison: 'Dominguez Cervantes voted against the raise.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None verified.',
        qualification: qual('some', 'Gonzalez is a parent leader with committee experience in the district’s budget and English-learner councils, plus an MBA, but no elected board service.', [
          ['budget', 'met', 'Served on CVESD’s Budget Advisory Committee; MBA.'],
          ['education', 'partial', 'Substitute teacher; no full-time classroom or leadership role documented.'],
          ['governance', 'partial', 'District advisory-committee service (DAC/DELAC); not an elected trustee.'],
          ['community', 'met', 'Longtime parent leader in the district’s family advisory councils.'],
        ]),
      },
      {
        id: 'devone-jones',
        name: 'Devone L. Jones',
        party: 'NP',
        role: 'Education Facilitator',
        bio: [
          'Jones’s ballot designation is Education Facilitator. Jones did not respond to inewsource’s candidate questionnaire, and no other detailed profile of the platform or record was found.',
        ],
        scorecard: [
          { topic: 'Budget/deficit', position: `? ${NO_STATEMENT}`, comparison: 'Gonzalez cites her Budget Advisory Committee service.' },
          { topic: 'Academics', position: `? ${NO_STATEMENT}`, comparison: 'Perez prioritizes academic growth.' },
          { topic: 'Trustee pay', position: '? No position found', comparison: 'Dominguez Cervantes voted against the raise.' },
          { topic: 'Student services', position: '? No position found', comparison: 'Gomez stresses mental health and counseling.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None verified.',
        qualification: qual('limited', 'The ballot designation suggests education-sector work, but no employer, years or board history is publicly documented.', [
          ['budget', 'unknown', 'No public record found.'],
          ['education', 'partial', 'Ballot designation is Education Facilitator; employer and years not publicly documented.'],
          ['governance', 'unknown', 'No public record found.'],
          ['community', 'unknown', 'No public record found.'],
        ]),
      },
      {
        id: 'michael-tony-perez',
        name: 'Michael “Tony” Perez',
        party: 'NP',
        role: 'Retired Administrator',
        bio: [
          'Perez is a retired educator and administrator with more than 30 years of experience and a master’s in educational leadership from San Diego State University. His priorities are academic growth, reducing disciplinary referrals and the district budget. The San Diego & Imperial Counties Labor Council has endorsed him.',
        ],
        scorecard: [
          { topic: 'Academics', position: '✓✓ Academic growth is a lead priority', comparison: 'Gomez leads with mental health and arts.' },
          { topic: 'Discipline', position: '✓ Wants to reduce disciplinary referrals', comparison: 'No other candidate lists discipline as a priority.' },
          { topic: 'Budget/deficit', position: '✓ Lists the district budget as a priority; no specific plan found', comparison: 'Dominguez Cervantes pushed for the FCMAT review.' },
          { topic: 'Labor relations', position: '✓ Endorsed by the Labor Council', comparison: 'Dominguez Cervantes, the incumbent, was not.' },
          { topic: 'Trustee pay', position: '? No position found', comparison: 'Dominguez Cervantes voted against the raise.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego & Imperial Counties Labor Council (June 2026 endorsement list).',
        qualification: qual('substantial', 'Perez has more than 30 years as an educator and administrator and a master’s in educational leadership, but has not served on an elected board.', [
          ['budget', 'partial', 'Administrator experience over 30-plus years; specific budget responsibilities not publicly documented.'],
          ['education', 'met', 'Retired educator and administrator with 30-plus years; master’s in educational leadership (SDSU).'],
          ['governance', 'partial', 'Administrator who worked under school boards; no elected service.'],
          ['community', 'unknown', 'No specific community role documented.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['PL', 'Perez', '○', 'Progressive Left voters can follow the Labor Council to a veteran administrator who wants fewer disciplinary referrals, though the field’s record on money is thin.'],
      ['EL', 'Perez', '◐', 'Establishment Liberals value a credentialed administrator with 30-plus years and a Labor Council endorsement.'],
      ['DM', 'Perez', '◐', 'Democratic Mainstays often follow Labor Council endorsements, which point to Perez.'],
      ['OL', 'Dominguez Cervantes', '○', 'Outsider Left voters wary of trustees raising their own pay can back the incumbent who voted against the raise and pushed an outside financial review.'],
      ['SS', '—', '○', 'Stressed Sideliners have little to go on in a six-way field with little coverage, so no pick is recommended.', 'In a crowded, thinly covered field, Stressed Sideliners who go by experience could lean narrowly to Dominguez Cervantes: she and Perez are both seasoned, but she already sits on the board and has voted on district budgets.'],
      ['AR', 'Dominguez Cervantes', '○', 'Ambivalent Right voters may value an incumbent who voted against a pay raise and for an independent audit during a deficit.'],
      ['PR', 'Dominguez Cervantes', '○', 'Populist Right voters angry at officials who raise their own pay may back the one trustee who voted no.'],
      ['CC', '—', '○', 'Committed Conservatives have no candidate here with a clearly accountability-first platform beyond the incumbent’s pay vote, so no pick is recommended.', 'Committed Conservatives lack a full accountability platform here, but an experience-first voter could narrowly favor Dominguez Cervantes; her trustee budget votes and push for an outside FCMAT review edge Perez, whose 30-plus years are mostly in the classroom and administration.'],
      ['FF', '—', '○', 'Faith and Flag Conservatives have no clear contrast among these candidates on values issues, so no pick is recommended.', 'With no values contrast to act on, Faith and Flag Conservatives who weigh experience could lean slightly to the incumbent, Dominguez Cervantes; the edge over Perez is narrow and rests on her board service and budget oversight, not classroom work.'],
    ]),
    counterArguments: [
      'EL/DM (Perez): But the Labor Council endorsement does not tell voters where he stands on the deficit or the stipend vote.',
      'OL/AR/PR (Dominguez Cervantes ○): But a single no vote on a stipend does not by itself show she can fix a deficit, and a six-way race could split votes in unpredictable ways.',
    ],
  },

  // ───────────────────────────── Southwestern College TA4 ─────────────────────────────
  {
    id: 'swc-trustee-area-4',
    categoryId: 'school',
    title: 'Southwestern Community College District, Trustee Area 4',
    tldrLabel: 'Southwestern College Trustee Area 4',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Southwestern Community College District board governs the community college in Chula Vista and its campuses. It sets the budget, approves contracts and hires and evaluates the college president.',
      'Area 4 covers much of Chula Vista east of Interstate 805 and extends south into Otay Mesa. Four candidates are running, which means a plurality can win the seat.',
    ],
    introParagraphs: [
      'Corina Soto won the seat in 2022 with 46% of the vote in a three-way race, and is seeking her first reelection. Her three challengers are identified on the ballot as an assistant principal, a nonprofit executive and COO, and a father and business owner; there is little public coverage of the race.',
    ],
    legalRequirements: 'Registered voter residing in Trustee Area 4 of the Southwestern Community College District.',
    qualificationCriteria: [
      { id: 'budget', label: 'Budget and fiscal oversight', detail: 'The board adopts the district budget and approves contracts and capital projects.' },
      { id: 'higher-ed', label: 'Education and higher-education knowledge', detail: 'Trustees oversee academic programs, transfer pathways and workforce training.' },
      { id: 'governance', label: 'Board governance and executive oversight', detail: 'The board hires and evaluates the college president and sets policy.' },
      { id: 'community', label: 'Community and student engagement', detail: 'Trustees represent a geographic area and the students and families in it.' },
    ],
    candidates: [
      {
        id: 'trevor-andersen',
        name: 'Trevor Andersen',
        party: 'NP',
        role: 'Father/Business Owner',
        bio: ['Andersen’s ballot designation is Father/Business Owner. No detailed profile, platform or endorsements for him were found.'],
        scorecard: [
          { topic: 'Budget', position: `? ${NO_STATEMENT}`, comparison: 'Soto has voted on district budgets since 2022.' },
          { topic: 'Higher education', position: `? ${NO_STATEMENT}`, comparison: 'Soto worked 30-plus years as a professor and counselor.' },
          { topic: 'Governance', position: '? No position found', comparison: 'Soto dissented on a president’s contract extension and review.' },
          { topic: 'Community', position: '? No position found', comparison: 'Soto’s area is the east side of Chula Vista.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None verified.',
        qualification: qual('limited', 'Andersen’s ballot designation indicates he owns a business; no public-sector, education or board experience could be verified.', [
          ['budget', 'unknown', 'Ballot designation says business owner; business and its size not publicly documented.'],
          ['higher-ed', 'unknown', 'No public record found.'],
          ['governance', 'unknown', 'No public record found.'],
          ['community', 'unknown', 'No public record found.'],
        ]),
      },
      {
        id: 'aimee-cuellar-martinez',
        name: 'Aimee Cuellar-Martinez',
        party: 'NP',
        role: 'Assistant Principal',
        bio: ['Cuellar-Martinez’s ballot designation is Assistant Principal. The school and district where she works are not publicly documented, and no platform or endorsements were found.'],
        scorecard: [
          { topic: 'Budget', position: `? ${NO_STATEMENT}`, comparison: 'Soto has voted on district budgets since 2022.' },
          { topic: 'Education', position: '✓ Works as a school administrator (per ballot designation)', comparison: 'Soto’s experience is as a college professor and counselor.' },
          { topic: 'Governance', position: '? No position found', comparison: 'Soto dissented on a president’s contract extension and review.' },
          { topic: 'Community', position: '? No position found', comparison: 'Soto’s area is the east side of Chula Vista.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None verified.',
        qualification: qual('some', 'The ballot designation indicates school-site administration, which is relevant to education but is K-12 rather than college-level, and no board experience was found.', [
          ['budget', 'unknown', 'No public record found.'],
          ['higher-ed', 'partial', 'Ballot designation is Assistant Principal; school, level and years not publicly documented.'],
          ['governance', 'unknown', 'No public record found.'],
          ['community', 'unknown', 'No public record found.'],
        ]),
      },
      {
        id: 'selena-ellis-vizcarra',
        name: 'Selena Ellis-Vizcarra',
        party: 'NP',
        role: 'Nonprofit Executive/COO',
        bio: ['Ellis-Vizcarra’s ballot designation is Nonprofit Executive/COO. The organization she works for is not publicly documented, and no platform or endorsements were found.'],
        scorecard: [
          { topic: 'Budget', position: '✓ Chief operating officer role (per ballot designation) suggests budget management', comparison: 'Soto has voted on district budgets since 2022.' },
          { topic: 'Higher education', position: `? ${NO_STATEMENT}`, comparison: 'Soto worked 30-plus years as a professor and counselor.' },
          { topic: 'Governance', position: '? No position found', comparison: 'Soto dissented on a president’s contract extension and review.' },
          { topic: 'Community', position: '? No position found', comparison: 'Soto’s area is the east side of Chula Vista.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None verified.',
        qualification: qual('some', 'The ballot designation indicates executive management at a nonprofit, relevant to budget oversight, but the organization and years are not publicly documented.', [
          ['budget', 'partial', 'Ballot designation is Nonprofit Executive/COO; organization size and budget not publicly documented.'],
          ['higher-ed', 'unknown', 'No public record found.'],
          ['governance', 'unknown', 'No public record found.'],
          ['community', 'partial', 'Nonprofit leadership implies community work; organization not publicly documented.'],
        ]),
      },
      {
        id: 'corina-soto',
        name: 'Corina Soto',
        party: 'NP',
        role: 'Incumbent',
        bio: [
          'Soto has represented Trustee Area 4 since December 2022, when she won with 46% of the vote against two challengers. She spent more than three decades as a professor, counselor and union activist, including as a grievance chair.',
          'On the board she opposed a two-year contract extension for the college president in favor of a one-year extension and an improvement plan, and she and trustee Robert Moreno voted against cutting public speaker time from five minutes to three.',
        ],
        recordVsChange:
          'Soto brings 30-plus years inside community colleges and a record of voting against the board majority on executive pay and public comment. The case for change is that no challenger’s platform is public, so voters cannot compare records.',
        scorecard: [
          { topic: 'Governance', position: '~ Opposed a two-year contract extension for the president; asked for a one-year extension and an improvement plan', comparison: 'No challenger has taken a position.' },
          { topic: 'Public participation', position: '✓ Voted against cutting public comment from five minutes to three', comparison: 'No challenger has taken a position.' },
          { topic: 'Higher education', position: '✓ More than 30 years as a professor and counselor', comparison: 'Cuellar-Martinez is a K-12 administrator by ballot designation.' },
          { topic: 'Labor relations', position: '✓ Union grievance chair earlier in her career', comparison: 'No challenger has a documented union role.' },
          { topic: 'Budget', position: '? No specific budget position found', comparison: 'Ellis-Vizcarra’s designation as COO suggests budget experience.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'No endorsements on public record for 2026 (the Labor Council’s June 2026 list endorses trustees in Areas 1 and 5, not Area 4).',
        qualification: qual('extensive', 'Soto is the sitting Area 4 trustee and spent more than 30 years in community-college teaching and counseling.', [
          ['budget', 'partial', 'Has voted on district budgets and contracts since December 2022; no separate finance role documented.'],
          ['higher-ed', 'met', 'More than three decades as a professor and counselor.'],
          ['governance', 'met', 'Trustee since December 2022; dissented on a president’s contract extension and review.'],
          ['community', 'partial', 'Elected representative of Area 4; no specific outreach record found.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['PL', 'Soto', '○', 'Progressive Left voters with no clear contrast can back the incumbent who votes against executive pay extensions and for public comment, and who has a labor background.'],
      ['EL', 'Soto', '○', 'Establishment Liberals value a credentialed educator with 30-plus years in community colleges, though her record of dissent is not an obvious fit for this column.'],
      ['DM', '—', '○', 'Democratic Mainstays have no party or Labor Council signal in this Area 4 race, so no pick is recommended.', 'Without a party or Labor Council signal, Democratic Mainstays can fall back on experience: Soto has three decades as a community-college professor and counselor and was once a union grievance chair, though no group has endorsed her this year.'],
      ['OL', 'Soto', '○', 'Outsider Left voters can favor the trustee who challenged the board majority on executive contracts and public speaking time.'],
      ['SS', '—', '○', 'Stressed Sideliners have little to go on in a low-coverage race, so no pick is recommended.', 'Stressed Sideliners who know none of the four names can choose the one with a track record: Soto has sat on this board since 2022 after more than 30 years teaching and counseling at community colleges, while the challengers’ platforms are not public.'],
      ['AR', '—', '○', 'Ambivalent Right voters have no clear signal among the challengers, whose platforms are not public, so no pick is recommended.', 'With no public platform from the challengers, Ambivalent Right voters can judge Soto’s board record, including her push for a one-year presidential contract with an improvement plan instead of two years, though her union-activist background may not suit them.'],
      ['PR', '—', '○', 'Populist Right voters have no clear outsider with a public platform here, so no pick is recommended.', 'Populist Right voters get no outsider platform from the challengers; an experience-first voter may note that Soto, though an incumbent, voted against the board majority on the president’s contract and on cutting public comment time.'],
      ['CC', '—', '○', 'Committed Conservatives find no candidate with a public fiscal or accountability platform, so no pick is recommended.', 'Committed Conservatives find no public fiscal platform, so experience decides: Soto has voted on district budgets and contracts since 2022 and pressed the college president for accountability, though she has no stated budget plan and a union background.'],
      ['FF', '—', '○', 'Faith and Flag Conservatives have no clear contrast on values issues in this race, so no pick is recommended.', 'With no values contrast in the race, Faith and Flag Conservatives can let experience break the tie: Soto brings more than 30 years in community-college classrooms and counseling offices plus a full term on this board.'],
    ]),
    counterArguments: [
      'PL/EL/OL (Soto ○): But the challengers’ platforms are not public, so voting for the only candidate with a record is partly a default, and her dissent on the president’s contract could cut either way on stability.',
    ],
  },

  // ───────────────────────────── Mayor ─────────────────────────────
  {
    id: 'chula-vista-mayor',
    categoryId: 'city',
    title: 'Chula Vista Mayor',
    tldrLabel: 'Chula Vista Mayor',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The mayor of San Diego County’s second-largest city presides over the City Council, sets its agenda, appoints board members, and represents Chula Vista on regional bodies. The city is developing a Bayfront and an Innovation District.',
      'The race pits a Republican incumbent against a Democratic school trustee in a city with a Democratic council majority. Control of agenda setting, public safety, housing and the city’s response to federal immigration enforcement are the main differences voters will weigh.',
    ],
    introParagraphs: [
      'In the June 2 primary, McCann finished first with about 56% to Tamayo’s 39.5% (unofficial results; a third candidate, Yair Gersten, also ran). Tamayo entered the race on the final filing day. The office is nonpartisan, but McCann is a registered Republican and Tamayo a registered Democrat.',
      'The county Democratic Party and the Labor Council have endorsed Tamayo (per KPBS; the Labor Council’s own June list showed no mayor endorsement); the county Republican Party, the Chula Vista police and firefighters, and the Building Industry Association have endorsed McCann (KPBS, April 21, 2026).',
    ],
    legalRequirements: 'Registered voter of the City of Chula Vista (City Charter).',
    qualificationCriteria: [
      { id: 'executive', label: 'Executive and city-government leadership', detail: 'The mayor presides over the council, sets the agenda and represents the city regionally.' },
      { id: 'budget', label: 'Budget and fiscal management', detail: 'The mayor and council adopt a city budget and approve major contracts and fees.' },
      { id: 'development', label: 'Housing, land use and development', detail: 'The council decides zoning, the Bayfront and Innovation District, and affordable housing.' },
      { id: 'safety', label: 'Public safety and emergency response', detail: 'The city runs its own police and fire departments and handles encampments and emergencies.' },
      { id: 'coalition', label: 'Coalition-building', detail: 'Passing items takes council votes and cooperation with regional agencies and the school districts.' },
    ],
    readingLinks: [
      { label: 'KPBS: Meet the mayoral candidates (Apr 21, 2026)', url: 'https://www.kpbs.org/news/politics/2026/04/21/2026-primary-election-chula-vista-mayor-race-explainer', summary: 'Positions, endorsements and fundraising through late September.' },
      { label: 'Voice of San Diego: McCann fights on all fronts (May 14, 2026)', url: 'https://voiceofsandiego.org/2026/05/14/chula-vistas-mayor-is-suddenly-fighting-on-all-fronts-to-win-re-election/', summary: 'Profile of the incumbent’s record and the council’s criticism of him.' },
      { label: 'Voice of San Diego: Tamayo profile (Apr 8, 2026)', url: 'https://voiceofsandiego.org/2026/04/08/chula-vista-mayoral-challenger-leads-with-immigration-affordability/', summary: 'Profile of the challenger, including disputed allegations from his school-district work.' },
    ],
    candidates: [
      {
        id: 'john-mccann',
        name: 'John McCann',
        party: 'R',
        role: 'Mayor',
        bio: [
          'McCann, a registered Republican and U.S. Navy reservist, has been mayor since 2022 after about two decades on the City Council. He lost the 2025 County Supervisor race to Paloma Aguirre by nine points.',
          'He points to Bayfront redevelopment, park upgrades in lower-income neighborhoods, affordable housing and a drop in unsheltered homelessness of nearly 25% last year. He has stayed out of council debates on the city’s response to federal immigration agents, citing his reserve status.',
        ],
        recordVsChange:
          'McCann has overseen Bayfront development, park projects and a reported drop in unsheltered homelessness, with the support of the police and fire unions. The case for change is the council Democrats’ criticism that he stays out of immigration issues and leans on business backers, and that a mayor of the opposite party might govern more in sync with the council.',
        scorecard: [
          { topic: 'Housing/affordability', position: '✓ Affordable housing for owners and renters; opposes new taxes and fees', comparison: 'Tamayo would use city land for roughly $500,000 homes for public workers.' },
          { topic: 'Homelessness', position: '✓ Cites a nearly 25% drop in unsheltered homelessness last year; supported the Imperial Beach services agreement', comparison: 'Tamayo lists homelessness as a priority with no figure cited.' },
          { topic: 'Public safety', position: '✓✓ Public safety is a top priority; endorsed by the police and firefighter unions', comparison: 'Tamayo’s public safety plan centers on traffic and intersection safety.' },
          { topic: 'Immigration', position: '✗ Has abstained from council discussions, citing his reserve status; would not join a lawsuit against California sanctuary laws', comparison: 'Tamayo would build a rapid-response network and supports the city’s protections.' },
          { topic: 'Transparency', position: '~ Council Democrats ordered an inquiry into the State of the City speech’s corporate sponsors; council moved major events to city manager control', comparison: 'Tamayo faces disputed claims about contracts at his school district.' },
        ],
        money: 'Raised just over $300,000 and spent almost $260,000 as of late September 2026, mostly from individuals, only about a quarter of whom live in Chula Vista; he also loaned the campaign $10,000 (KPBS).',
        endorsements: 'Chula Vista Firefighters; Chula Vista Police Officers Association; Republican Party of San Diego County; Building Industry Association of San Diego County; Latino American Political Association (KPBS, VOSD).',
        redFlags: [
          {
            severity: 'notable',
            status: 'alleged',
            text: 'After McCann’s April 2026 State of the City address, which featured a parachute-jump video and corporate sponsors, council Democrats ordered an inquiry into the backers, calling the event a campaign rally. The council later moved control of major city events from the mayor to the city manager. McCann says he is confident in his record. No findings have been reported.',
            whyItMatters: 'A mayor’s ties to corporate donors can bear on how he handles development and contracts that the council votes on.',
            sources: [
              { label: 'Voice of San Diego', url: 'https://voiceofsandiego.org/2026/05/14/chula-vistas-mayor-is-suddenly-fighting-on-all-fronts-to-win-re-election/' },
              { label: 'inewsource', url: 'https://inewsource.org/2026/05/02/chula-vista-mayor-speech-rally/' },
            ],
          },
        ],
        notes: ['Council Democrats and Councilmember Inzunza have accused McCann of exaggerating accomplishments; McCann says his record on everyday issues will carry the race.'],
        qualification: qual('extensive', 'McCann is the sitting mayor and a former councilmember with about two decades in Chula Vista government.', [
          ['executive', 'met', 'Mayor since 2022; city councilmember from about 2002.'],
          ['budget', 'met', 'Has voted on city budgets for about two decades; touts opposing new taxes and fees.'],
          ['development', 'met', 'Led Bayfront and Innovation District projects, park upgrades and affordable housing efforts.'],
          ['safety', 'met', 'Mayor overseeing the police and fire departments; endorsed by both unions; presided during the police chief’s leave and litigation.'],
          ['coalition', 'partial', 'Presides over a council whose Democratic majority has criticized him and moved major city events out of his control; no record of passing his own initiatives was on public record.'],
        ]),
      },
      {
        id: 'francisco-tamayo',
        name: 'Francisco Tamayo',
        party: 'D',
        role: 'Chula Vista Elementary School District Board Member',
        bio: [
          'Tamayo, a registered Democrat, was born in Mexico, immigrated to Chula Vista at 12, and has served on the Chula Vista Elementary board since 2014. He is director of information technology and security at Calbright College, an online community college, and was once president of a Sweetwater employee union.',
          'He says Chula Vista should stand up for immigrants and that development has mostly benefited wealthier residents. The county Democratic Party nearly censured him in 2025 for running against a fellow Democrat while holding a different board seat; the effort was dropped.',
        ],
        scorecard: [
          { topic: 'Housing/affordability', position: '✓✓ City-owned land for roughly $500,000 homes for police, firefighters, teachers and nurses; higher homebuyer-program income limit; pre-approved building plans', comparison: 'McCann stresses opposing new taxes and fees.' },
          { topic: 'Immigration', position: '✓✓ Rapid-response network with schools and community groups; supports existing city protections', comparison: 'McCann has abstained from immigration discussions.' },
          { topic: 'Public safety', position: '✓ Traffic technology and collision-data fixes for intersections near schools', comparison: 'McCann leads with police and fire backing.' },
          { topic: 'Budget/management', position: '~ Voted with the board as it faced a deficit of about $16 million and layoff notices, and for a $360,000 exit package and the stipend raise', comparison: 'McCann attacks him on the district deficit and teacher layoffs.' },
          { topic: 'Homelessness', position: '? Lists homelessness as a priority; no specific plan found', comparison: 'McCann cites a drop in unsheltered homelessness.' },
        ],
        money: 'Raised just over $18,000 and spent over $14,000 as of late September 2026, most from a $10,000 personal loan; the rest from individuals and a committee tied to the Western States Regional Council of Carpenters (KPBS).',
        endorsements: 'San Diego County Democratic Party; San Diego & Imperial Counties Labor Council (KPBS endorsement list; the Labor Council’s own June list shows no mayor endorsement); Councilmembers Chavez, Preciado, Inzunza and Fernandez.',
        redFlags: [
          {
            severity: 'notable',
            status: 'alleged',
            text: 'A former district chief operating officer accused Tamayo of pressuring staff to award contracts to a favored vendor and to organize events supporting one of his campaigns. Tamayo denied both claims. Separately, during a 2024 divorce his ex-wife later took a job in the district’s payroll department; he denies involvement in her hiring.',
            whyItMatters: 'A mayor oversees city contracts and staffing, so questions about contracting influence at his current job bear on the office.',
            sources: [
              { label: 'Voice of San Diego', url: 'https://voiceofsandiego.org/2026/04/08/chula-vista-mayoral-challenger-leads-with-immigration-affordability/' },
            ],
          },
        ],
        notes: [
          'Trustee votes: for the August 2026 stipend raise to $3,000 a month and a $360,000 exit package for a senior administrator; he calls the district’s deficit an intentional spend-down of reserves.',
          'Holds a seat on the elementary school board through December 2028; the seat would open if he wins the mayoralty.',
        ],
        qualification: qual('some', 'Tamayo has about 12 years on a school board and a career in information-technology management, but has not served in city government.', [
          ['executive', 'partial', 'Elected trustee since 2014 (vice president); IT director at an online college; no city office.'],
          ['budget', 'partial', 'Votes on a school district budget; the district currently has a deficit of about $16 million.'],
          ['development', 'not-met', 'No land-use or development role documented.'],
          ['safety', 'not-met', 'No public-safety role documented.'],
          ['coalition', 'partial', 'Won endorsements from the county party, the Labor Council and four of five councilmembers.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['PL', 'Tamayo', '●', 'Progressive Left voters side with the Democrat who backs the city’s immigrant protections and public-worker housing over a Republican who has stayed out of the immigration debate.'],
      ['EL', 'Tamayo', '◐', 'Establishment Liberals follow the county party and the Labor Council to Tamayo, though the allegations about school-district contracting and the deficit give some pause.', 'Establishment Liberals who prize steady management could cross party lines for McCann, mayor since 2022 after about two decades on the council and backed by the police and fire unions, but that means passing on the county party’s nominee and his immigrant rapid-response plan.'],
      ['DM', 'Tamayo', '◐', 'Democratic Mainstays follow the county party and the Labor Council to the Democratic nominee.', 'Democratic Mainstays who weigh experience over party may compare McCann’s two decades of city budgets with Tamayo’s school-board record during a deficit, but choosing McCann is a cross-party vote against the county party’s and Labor Council’s candidate.'],
      ['OL', 'Tamayo', '○', 'Outsider Left voters may dislike a candidate who raised his own board pay, but still prefer him to a Republican incumbent with corporate-donor questions.', 'Outsider Left voters uneasy with Tamayo’s vote to raise his own board pay could pick McCann on his long city record, though that means backing a Republican who has stayed out of immigration debates and faces questions about corporate sponsors.'],
      ['SS', '—', '○', 'Stressed Sideliners face a cost-of-living pitch from both sides and a choice between a visible incumbent and a challenger with disputed claims, so no pick is recommended.', 'Both sides pitch cost of living, so Stressed Sideliners can let experience decide: McCann has been mayor since 2022 after two decades on the council and cites a drop in unsheltered homelessness, though council Democrats say he exaggerates his record.'],
      ['AR', 'McCann', '◐', 'Ambivalent Right voters often favor a steady incumbent who opposes new taxes and has the police and fire unions behind him.'],
      ['PR', 'McCann', '○', 'Populist Right voters like the opposition to new taxes and fees but may be put off by his corporate backers and refusal to take on immigration policy.'],
      ['CC', 'McCann', '●', 'Committed Conservatives back the Republican incumbent who opposes new taxes and fees and has the Republican Party and police and fire endorsements.'],
      ['FF', 'McCann', '◐', 'Faith and Flag Conservatives will back the Republican-endorsed incumbent, though his refusal to weigh in on immigration enforcement tempers enthusiasm.'],
    ]),
    counterArguments: [
      'PL/EL/DM (Tamayo): But the allegations from a former district chief operating officer and the layoffs-and-deficit record are fair questions for a candidate who would oversee a city budget, though they are disputed and unadjudicated.',
      'AR/CC (McCann): But a mayor who sits out immigration debates and whose council majority has stripped him of control over city events may struggle to get his priorities through the council.',
    ],
  },

  // ───────────────────────────── Council D1 ─────────────────────────────
  {
    id: 'chula-vista-council-d1',
    categoryId: 'city',
    title: 'Chula Vista City Council, District 1',
    tldrLabel: 'Chula Vista Council D1',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The four-member District Council plus the mayor sets the Chula Vista city budget, zoning and fees, and oversees the police and fire departments through the city manager. District 1 covers the east side of Chula Vista, including the Eastlake and Otay Ranch areas of ZIP 91914.',
      'The council’s Democratic majority is in open conflict with the mayor, and four councilmembers are defendants, with the city, in a lawsuit by Police Chief Roxana Kennedy. Voters in District 1 are choosing between a Democratic incumbent and a Republican-endorsed accountant who wants lower fees and no new taxes.',
    ],
    introParagraphs: [
      'Five candidates ran in the June 2 primary; Carolina Chavez and Greg Martinez advanced. Chavez was first elected in 2022. The office is nonpartisan, but the county Democratic Party endorses Chavez and the county Republican Party endorses Martinez.',
    ],
    legalRequirements: 'Registered voter residing in Chula Vista Council District 1 (City Charter).',
    qualificationCriteria: [
      { id: 'governance', label: 'Municipal policy and governance', detail: 'Councilmembers pass city laws and oversee departments.' },
      { id: 'budget', label: 'Budget and fiscal oversight', detail: 'The council adopts the budget, fees and major contracts.' },
      { id: 'land', label: 'Land use and housing', detail: 'The council decides zoning, development and affordable-housing projects.' },
      { id: 'constituent', label: 'Constituent services and district knowledge', detail: 'The office handles resident requests from the east side.' },
    ],
    readingLinks: [
      { label: 'Hoodline: Five-way council race (May 2026)', url: 'https://hoodline.com/2026/05/five-way-council-brawl-brews-in-chula-vista-s-district-1/', summary: 'Pre-primary overview of the five candidates.' },
      { label: 'Voice of San Diego: Chula Vista police chief lawsuit (Mar 2026)', url: 'https://voiceofsandiego.org/2026/03/18/chula-vista-police-chief-files-retaliation-defamation-claims-against-city/', summary: 'The chief’s claims against the city.' },
    ],
    candidates: [
      {
        id: 'carolina-chavez',
        name: 'Carolina Chavez',
        party: 'NP',
        role: 'Councilmember',
        campaignUrl: 'https://www.votechavez.com/',
        bio: [
          'Chavez has represented District 1 on the Chula Vista City Council since 2022. She points to the city’s policy limiting local cooperation with federal immigration enforcement, a new city-run food pantry at the Civic Center Library, and the conversion of the Palomar Motel into the Palomar Point permanent supportive-housing project with units reserved for veterans.',
          'She is a Democrat and is endorsed by the county Democratic Party, the Labor Council, the Chula Vista police and firefighter unions, and local Democratic officials.',
        ],
        recordVsChange:
          'Chavez has delivered supportive housing, a food pantry and the immigration-cooperation policy, and has the police, fire and labor endorsements. The case for change is Martinez’s argument for lower fees and no new taxes, and the police chief’s lawsuit naming Chavez, which the city denies.',
        scorecard: [
          { topic: 'Housing/homelessness', position: '✓✓ Palomar Point supportive-housing conversion, with units reserved for veterans', comparison: 'Martinez wants lower construction fees and affordable housing that does not disrupt neighborhoods.' },
          { topic: 'Immigration', position: '✓✓ Backed the policy limiting city cooperation with federal immigration enforcement', comparison: 'Martinez has not made immigration a lead issue.' },
          { topic: 'Public safety', position: '✓ Endorsed by the Chula Vista police and firefighter unions; named in the police chief’s lawsuit', comparison: 'Martinez wants a District 1 police substation and questions the chief’s treatment.' },
          { topic: 'Budget/fees', position: '~ No specific tax or fee position found', comparison: 'Martinez opposes new taxes and the “mileage tax.”' },
          { topic: 'Food insecurity', position: '✓ New city-run food pantry', comparison: 'Martinez does not list a food program.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party; San Diego & Imperial Counties Labor Council; Chula Vista Police Officers Association; Chula Vista Firefighters IAFF Local 2180; Sen. Steve Padilla; Assemblymember David Alvarez; Supervisor Paloma Aguirre; Councilmembers Preciado, Inzunza, Fernandez; City Attorney Marco Verdugo (campaign website, self-reported).',
        redFlags: [
          {
            severity: 'serious',
            status: 'alleged',
            text: 'Police Chief Roxana Kennedy sued the city, its city manager and four councilmembers, including Chavez, on May 12, 2026 in San Diego Superior Court, alleging defamation, invasion of privacy, retaliation and age and ethnicity discrimination. The city categorically denies the allegations and says it will defend the case. No court ruling has been reported.',
            whyItMatters: 'Councilmembers oversee the city manager and police leadership, so a lawsuit alleging a coordinated effort to push out the police chief bears directly on how the council exercises that power.',
            sources: [
              { label: '10News', url: 'https://www.10news.com/news/local-news/chula-vista-police-chief-roxana-kennedy-files-lawsuit-against-city-5-officials' },
              { label: 'Voice of San Diego', url: 'https://voiceofsandiego.org/2026/03/18/chula-vista-police-chief-files-retaliation-defamation-claims-against-city/' },
            ],
          },
        ],
        qualification: qual('extensive', 'Chavez is the sitting District 1 councilmember, serving since 2022.', [
          ['governance', 'met', 'Councilmember since 2022; votes on city policy and oversees departments through the city manager.'],
          ['budget', 'met', 'Has voted on city budgets since 2023.'],
          ['land', 'met', 'Supported the Palomar Motel conversion to supportive housing.'],
          ['constituent', 'met', 'Elected representative of District 1; opened a food pantry at the Civic Center Library.'],
        ]),
      },
      {
        id: 'greg-martinez',
        name: 'Greg Martinez',
        party: 'NP',
        role: 'CPA/Business Owner',
        campaignUrl: 'https://gregforcitycouncil.com/',
        bio: [
          'Martinez is a certified public accountant and small-business owner, born in Los Angeles, who has lived in San Diego County for 27 years. He ran for the Otay Water District board in 2024.',
          'His campaign calls for no new taxes, stopping the “mileage tax,” cutting housing construction fees, a new District 1 police substation, and a university in Chula Vista. He is endorsed by the county Republican Party, the Republican National Hispanic Assembly and Reform California.',
        ],
        scorecard: [
          { topic: 'Budget/taxes', position: '✓✓ No new taxes; stop the “mileage tax”; responsible long-term budgeting', comparison: 'Chavez has no stated tax or fee position.' },
          { topic: 'Housing', position: '✓ Cut housing construction fees; streamline business permits; affordable housing without disrupting neighborhoods', comparison: 'Chavez points to the Palomar Point supportive housing.' },
          { topic: 'Public safety', position: '✓ New District 1 police substation; questions whether police chief Roxana Kennedy (on leave since January) was treated fairly; addresses unsafe e-bike use', comparison: 'Chavez is named in the chief’s lawsuit.' },
          { topic: 'Homelessness', position: '✗ Objected, with another council candidate, to a services agreement with Imperial Beach as overextending city resources', comparison: 'Mayor McCann supported the agreement; Chavez’s position was not found.' },
          { topic: 'Immigration', position: '? No position found', comparison: 'Chavez backed the policy limiting cooperation with federal enforcement.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'Republican Party of San Diego County; Republican National Hispanic Assembly; Reform California (campaign website, self-reported).',
        qualification: qual('some', 'Martinez is a CPA and business owner with a fiscal background, but has not held public office.', [
          ['governance', 'not-met', 'No public office; ran for Otay Water District board in 2024.'],
          ['budget', 'partial', 'CPA and small-business owner; no public-budget role documented.'],
          ['land', 'unknown', 'No land-use or housing role documented.'],
          ['constituent', 'partial', 'Lives in San Diego County for 27 years; no constituent-service role documented.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['PL', 'Chavez', '●', 'Progressive Left voters back the Democrat who supports supportive housing, a food pantry and limits on cooperation with federal immigration enforcement.'],
      ['EL', 'Chavez', '●', 'Establishment Liberals follow the county party and Labor Council to the incumbent with the police and fire endorsements as well.'],
      ['DM', 'Chavez', '●', 'Democratic Mainstays follow the county party and the Labor Council to the Democratic incumbent.'],
      ['OL', 'Chavez', '◐', 'Outsider Left voters may be uneasy about a councilmember named in a lawsuit but still prefer her to a Republican-endorsed challenger on immigration and housing.'],
      ['SS', 'Chavez', '○', 'Stressed Sideliners lean to the incumbent with visible local services such as a food pantry, though many will not know either candidate and Martinez’s no-new-taxes pitch has appeal.'],
      ['AR', 'Martinez', '○', 'Ambivalent Right voters may like a CPA who talks about fees and long-term budgeting, but weakly because he has not held office.', 'Ambivalent Right voters who value a proven hand could back Chavez, who has voted on city budgets since 2023 and has police and fire union support, though she is named in the police chief’s pending lawsuit, which the city denies, and lacks Martinez’s no-new-taxes pledge.'],
      ['PR', 'Martinez', '●', 'Populist Right voters favor an outsider who opposes new taxes and questions how the city treated its police chief.'],
      ['CC', 'Martinez', '●', 'Committed Conservatives prefer the Republican-endorsed accountant who promises no new taxes and lower fees.'],
      ['FF', 'Martinez', '●', 'Faith and Flag Conservatives back the Republican-endorsed challenger against a Democratic incumbent who limited cooperation with immigration enforcement.'],
    ]),
    counterArguments: [
      'PL/EL/DM/OL (Chavez): But Chavez is a named defendant in the police chief’s lawsuit; the allegations are unproven and the city denies them, yet they concern how the council treated a department head.',
      'PR/CC/FF (Martinez): But Martinez has not held office, his campaign statement gives no detail on how he would handle the budget gap, and Chavez’s record includes concrete projects like Palomar Point.',
    ],
  },

  // ───────────────────────────── City Attorney (unopposed) ─────────────────────────────
  {
    id: 'chula-vista-city-attorney',
    categoryId: 'city',
    title: 'Chula Vista City Attorney',
    tldrLabel: 'Chula Vista City Attorney',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The elected City Attorney is the legal adviser to the City Council and city departments, defends the city in lawsuits, drafts ordinances and prosecutes city-code violations. Because Chula Vista elects this office, the attorney is independent of the city manager and the mayor.',
      'Marco Verdugo is the only name on the ballot, so the outcome is not in doubt. Voters who object can leave the line blank or write someone in.',
    ],
    introParagraphs: [
      'Verdugo won a March 2024 runoff against Bart Miesfeld to complete the term of the late Simon Silva, which ends in December 2026. He is the sole candidate for a full term.',
    ],
    legalRequirements: 'Registered voter of the City of Chula Vista; active member of the State Bar of California.',
    qualificationCriteria: [
      { id: 'municipal-law', label: 'Municipal law expertise', detail: 'The office advises on land use, public contracts, open-meeting and ethics law.' },
      { id: 'litigation', label: 'Litigation and defense of the city', detail: 'The attorney defends lawsuits, including ones that name councilmembers and officials.' },
      { id: 'management', label: 'Managing a legal office', detail: 'The attorney runs a staff of deputies and sets the office’s priorities.' },
      { id: 'independence', label: 'Independence and ethics advice', detail: 'The attorney must advise the council even when its members are conflicted.' },
    ],
    candidates: [
      {
        id: 'marco-verdugo',
        name: 'Marco Verdugo',
        party: 'NP',
        role: 'City Attorney',
        bio: [
          'Verdugo began his legal career in the Chula Vista City Attorney’s Office in 2011 and later worked for a private firm that provides legal services to small cities, serving as city attorney or deputy city attorney for several, including Lemon Grove, Solana Beach and Coronado (2024 campaign coverage).',
          'The San Diego & Imperial Counties Labor Council has endorsed him, and Councilmember Chavez’s campaign website lists him as an endorser.',
        ],
        scorecard: [
          { topic: 'Office duties', position: '✓ Seeking a first full term as the city’s elected legal adviser', comparison: 'No opponent on the ballot to compare against.' },
          { topic: 'Independence', position: '~ Listed as an endorser of council candidate Carolina Chavez, who is named in the police chief’s lawsuit (her campaign website)', comparison: 'No opponent on the ballot to compare against.' },
        ],
        money: 'No significant fundraising reported for this unopposed race.',
        endorsements: 'San Diego & Imperial Counties Labor Council (June 2026 list).',
        qualification: qual('extensive', 'Verdugo is the sitting City Attorney and has served as a municipal attorney in several San Diego County cities since beginning in Chula Vista’s office in 2011.', [
          ['municipal-law', 'met', 'Began in the Chula Vista City Attorney’s Office in 2011; later city attorney or deputy city attorney for several county cities.'],
          ['litigation', 'met', 'Responsible for the city’s legal defense, including pending suits; outside counsel arrangements for the police chief’s suit are not publicly documented.'],
          ['management', 'met', 'Has run the City Attorney’s Office since winning the 2024 runoff.'],
          ['independence', 'partial', 'Listed as an endorser of council candidate Carolina Chavez, a defendant in the police chief’s suit (her campaign website).'],
        ]),
      },
    ],
    crossTypology: ct([
      ['PL', 'Verdugo', '○', 'Progressive Left voters have no alternative on the ballot, and the Labor Council’s endorsement makes him the default choice in a technical legal office.'],
      ['EL', 'Verdugo', '◐', 'Establishment Liberals tend to value municipal-law experience, which Verdugo has across several cities.'],
      ['DM', 'Verdugo', '◐', 'Democratic Mainstays follow the Labor Council endorsement for the lone candidate.'],
      ['OL', 'Verdugo', '○', 'Outsider Left voters have no alternative; leaving the line blank is also reasonable.'],
      ['SS', 'Verdugo', '○', 'Stressed Sideliners with little interest in down-ballot offices can vote for the only candidate or skip the line.'],
      ['AR', 'Verdugo', '○', 'Ambivalent Right voters generally prefer a steady, low-drama administrator, which an experienced municipal lawyer suggests.'],
      ['PR', 'Verdugo', '○', 'Populist Right voters have no alternative; some may dislike his listing as a council incumbent’s endorser and leave the line blank.'],
      ['CC', 'Verdugo', '○', 'Committed Conservatives have no alternative and may weigh his listing as a Chavez endorser.'],
      ['FF', 'Verdugo', '○', 'Faith and Flag Conservatives face a single candidate in a technical office and can vote for him or skip the line.'],
    ]),
    counterArguments: [
      'All columns (Verdugo ○): A one-name race can still be left blank or answered with a write-in if you object to an uncontested office; that is a legitimate protest vote.',
    ],
  },

  // ───────────────────────────── Otay Water District Div 3 ─────────────────────────────
  {
    id: 'otay-water-div-3',
    categoryId: 'district',
    title: 'Otay Water District, Division 3',
    tldrLabel: 'Otay Water Division 3',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Otay Water District board sets water and sewer rates for customers in eastern Chula Vista and nearby unincorporated areas. It approves the budget and capital projects, such as pipelines and reservoirs, and oversees the general manager.',
      'Division 3 is on the November ballot only for the part of ZIP 91914 that falls in it (about 28%). The race is a rematch of the 2022 contest.',
    ],
    introParagraphs: [
      'Gary Croucher, a retired CAL FIRE assistant chief, first joined the board by appointment in 2001 and has since won four elections; he beat Hector Gastelum in 2022 with about 56% of the vote. Gastelum, a former Division 4 director, was censured by the board three times between 2017 and 2020.',
    ],
    legalRequirements: 'Registered voter residing in Division 3 of the Otay Water District.',
    qualificationCriteria: [
      { id: 'water', label: 'Water and infrastructure knowledge', detail: 'The board approves capital projects and supply contracts, including with the County Water Authority.' },
      { id: 'budget', label: 'Budget and rate-setting oversight', detail: 'The board sets rates and adopts the district budget.' },
      { id: 'governance', label: 'Board governance and conduct', detail: 'The board oversees the general manager and works as a five-member body.' },
      { id: 'regional', label: 'Regional water representation', detail: 'The district sends a representative to regional bodies such as the San Diego County Water Authority.' },
    ],
    readingLinks: [
      { label: '10News: Otay board censures Gastelum (Aug 2020)', url: 'https://www.10news.com/news/local-news/south-bay-news/otay-water-district-board-censures-member-hector-gastelum-after-kamala-harris-post', summary: 'Third censure of Gastelum, on a 3-1 vote for official misconduct.' },
      { label: 'Otay Water District: Gary Croucher', url: 'https://www.otaywater.gov/board-of-directors/gary-croucher/', summary: 'Official board member page.' },
    ],
    candidates: [
      {
        id: 'gary-croucher',
        name: 'Gary D. Croucher',
        party: 'NP',
        role: 'Retired Fire Chief',
        campaignUrl: 'https://www.otaywater.gov/board-of-directors/gary-croucher/',
        bio: [
          'Croucher is a retired CAL FIRE assistant chief who has represented Division 3 since the Board of Supervisors appointed him in 2001 and has since been elected four times, most recently in 2022. He was the board’s vice president in 2025 and has served on the San Diego County Water Authority board, including as its chair.',
        ],
        recordVsChange:
          'Croucher’s 25 years on the board and his Water Authority roles give Division 3 regional influence on rates and supply. The case for change is that a quarter-century incumbent may be less responsive to ratepayers, though Gastelum’s record of board conflict weakens that case.',
        scorecard: [
          { topic: 'Rates/budget', position: '~ Serves on finance and administration committees (district committee list); no specific rate position found', comparison: 'Gastelum has no published rate platform found.' },
          { topic: 'Regional water supply', position: '✓ Served on and chaired the San Diego County Water Authority board', comparison: 'Gastelum has no regional role.' },
          { topic: 'Board conduct', position: '✓ Was board president when the board censured Gastelum in 2020', comparison: 'Gastelum was censured three times between 2017 and 2020.' },
          { topic: 'Emergency/infrastructure', position: '✓ Career in emergency response as a CAL FIRE assistant chief', comparison: 'Gastelum’s ballot designation is Small Business Owner.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None verified.',
        qualification: qual('extensive', 'Croucher is the sitting Division 3 director, with about 25 years on the board and a regional water-authority leadership role.', [
          ['water', 'met', 'Otay board member since 2001; sits on the San Diego County Water Authority board.'],
          ['budget', 'met', 'Has voted on district budgets and rates for about 25 years; district committee lists show him on finance and administration committees.'],
          ['governance', 'met', 'Has served as board president and vice president; board vice president in 2025.'],
          ['regional', 'met', 'Water Authority representative, including a term as chair.'],
        ]),
      },
      {
        id: 'hector-gastelum',
        name: 'Hector Raul Gastelum',
        party: 'NP',
        role: 'Small Business Owner',
        bio: [
          'Gastelum, whose ballot designation is Small Business Owner, was elected to the Otay board in 2016 for Division 4 and served until 2020. He ran against Croucher in Division 3 in 2022 and lost.',
          'The board censured him in 2017 over posts about Muslims, and again in August 2020 over a post about then-Sen. Kamala Harris. No platform for 2026 was found.',
        ],
        scorecard: [
          { topic: 'Rates/budget', position: `? ${NO_STATEMENT}`, comparison: 'Croucher sits on finance and administration committees.' },
          { topic: 'Water supply', position: '? No specific position found', comparison: 'Croucher has chaired the County Water Authority board.' },
          { topic: 'Board conduct', position: '✗ Censured three times by the board between 2017 and 2020', comparison: 'Croucher was board president at the time of the 2020 censure.' },
          { topic: 'Prior service', position: '~ Served as a Division 4 director from December 2016 to 2020', comparison: 'Croucher has served 25 years.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'None verified.',
        redFlags: [
          {
            severity: 'serious',
            status: 'official-finding',
            text: 'The Otay Water District board voted 3-1 on Aug. 21, 2020 to censure then-Director Gastelum for official misconduct over a tweet about Kamala Harris using a derogatory term for women; he said he stood by the post. It was his third censure in three years, after a 2017 censure over social media posts about Muslims, after which the Chula Vista City Council called for his resignation.',
            whyItMatters: 'A water director must work with four colleagues and represent a diverse ratepayer base, and the board formally censured his public conduct three times (censure is a public rebuke by fellow directors, not a legal finding).',
            sources: [
              { label: '10News', url: 'https://www.10news.com/news/local-news/south-bay-news/otay-water-district-board-censures-member-hector-gastelum-after-kamala-harris-post' },
              { label: 'The Star-News', url: 'https://www.thestarnews.com/?p=3070' },
            ],
          },
        ],
        qualification: qual('some', 'Gastelum served about four years on the Otay board (Division 4, 2016-2020), but that service included three censures.', [
          ['water', 'partial', 'Four years as an Otay director; no other water-industry role documented.'],
          ['budget', 'partial', 'Served as a director from 2016 to 2020, when budgets and rates were adopted.'],
          ['governance', 'not-met', 'Censured three times between 2017 and 2020; the board cannot remove an elected director.'],
          ['regional', 'unknown', 'No regional water-agency role documented.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['PL', 'Croucher', '○', 'Progressive Left voters have little to separate on water policy and can prefer the experienced incumbent over a challenger censured for his posts.'],
      ['EL', 'Croucher', '◐', 'Establishment Liberals value an experienced director with regional water-authority leadership over a former director censured three times.'],
      ['DM', 'Croucher', '◐', 'Democratic Mainstays prefer the steady incumbent to a challenger whose censure over a post about a Democratic vice-presidential nominee is on the record.'],
      ['OL', 'Croucher', '○', 'Outsider Left voters may dislike a 25-year incumbent but are unlikely to favor a challenger with Gastelum’s record.'],
      ['SS', 'Croucher', '○', 'Stressed Sideliners with little information can default to the incumbent who has kept the district running.'],
      ['AR', 'Croucher', '◐', 'Ambivalent Right voters generally prefer a steady, experienced incumbent over a challenger with a record of conflict.'],
      ['PR', 'Croucher', '○', 'Populist Right voters may like Gastelum’s outsider posture, but his censure record, a severe flag, rules out a clear pick, so the incumbent is a weak default.'],
      ['CC', 'Croucher', '◐', 'Committed Conservatives value a retired fire chief with a long record of managing the district’s budget and an accountability-minded board.'],
      ['FF', 'Croucher', '○', 'Faith and Flag Conservatives may like Gastelum’s politics, but his censure over his posts counts against him, so the incumbent is a weak default.'],
    ]),
    counterArguments: [
      'PR/FF (Croucher ○): But a 25-year incumbent can drift from ratepayers, and Gastelum’s supporters would say the board’s censures were political; the record above is limited to the board’s formal findings.',
      'EL/DM (Croucher): But none of this shows whether Croucher would hold rates down; no 2026 platform or finance figures were found for either candidate.',
    ],
  },
];
