import type { CandidateQualification, CriterionAssessment, ExperienceLevel, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * City of San Diego wave (south and coastal): San Diego City Council District 8, SDUSD Board District C,
 * San Ysidro School District board, San Dieguito Union HSD Trustee Area 3, and Del Mar City Council.
 * Contest titles, candidates and ballot designations from the Registrar candidate list and printed sample ballots
 * (docs/sd-city-scope.md). Research current as of Oct 9, 2026. Money and endorsement dates are stated in-line.
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

const NO_RECORD = 'No public record found beyond the ballot designation.';
const NO_MONEY = 'No campaign finance totals found in news coverage as of Oct 9, 2026; filings are posted on the county campaign-disclosure site.';

const COUNCIL_CRITERIA = [
  { id: 'governance', label: 'Municipal policy and governance', detail: 'Councilmembers pass city laws, oversee departments and sit on regional boards.' },
  { id: 'land-budget', label: 'Land use and budget', detail: 'The Council adopts the city budget, fees, and zoning and community plans.' },
  { id: 'constituent', label: 'Constituent services and district knowledge', detail: 'The office handles resident requests and represents neighborhoods in its district.' },
  { id: 'coalition', label: 'Coalition-building', detail: 'Passing items takes votes from at least five of nine members and work with the mayor and regional agencies.' },
];

const SCHOOL_CRITERIA = [
  { id: 'budget', label: 'Budget and fiscal oversight', detail: 'The board adopts the district budget, approves contracts and must keep the district solvent.' },
  { id: 'education', label: 'Classroom and school knowledge', detail: 'Trustees set academic, special-education and student-support policy.' },
  { id: 'governance', label: 'Board governance and superintendent oversight', detail: 'The board hires and evaluates the superintendent and adopts policies.' },
  { id: 'community', label: 'Parent and community engagement', detail: 'Trustees answer to families, employees and neighborhoods in the district.' },
];

const SY_CANDIDATES_LINK = {
  label: 'inewsource: South Bay school board candidates (Oct 7, 2026)',
  url: 'https://inewsource.org/2026/10/07/san-diego-south-bay-school-board-candidates-election/',
  summary: 'District budget context and questionnaire answers from Arias, Ochoa, Olea and Palestino.',
};

const KPBS_ENDORSEMENTS = {
  label: 'KPBS: party and group endorsements (Sept 30, 2026)',
  url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian',
  summary: 'Democratic, Republican, Lincoln Club and Reform California picks in these races.',
};

export const RACES_SDC_SOUTH: Race[] = [
  // ───────────────────────────── SD City Council D8 ─────────────────────────────
  {
    id: 'sd-city-council-d8',
    categoryId: 'city',
    title: 'San Diego City Council, District 8',
    tldrLabel: 'SD City Council D8',
    seatContext: 'Open seat (Moreno termed out)',
    kind: 'candidates',
    stakesParagraphs: [
      'The nine-member San Diego City Council sets the city budget, zoning and fees, and checks the strong mayor. District 8 runs from Barrio Logan, Logan Heights and Southcrest to Otay Mesa, Nestor and San Ysidro at the border. Councilmember Vivian Moreno is termed out.',
      'Both finalists are Democrats, so the choice turns on experience and backers: a longtime school trustee endorsed by the county party and firefighters, versus Moreno’s chief of staff backed by city employee unions, the Lincoln Club and a Chamber-linked committee. Flooding, stormwater repairs and Tijuana River sewage dominate the district’s agenda.',
    ],
    introParagraphs: [
      'Antonio Martinez led the June 2 primary with 28.07% (5,375 votes); Gerardo Ramirez was second at 24.21% (4,636), just ahead of Venus Molina at 22.63% (City of San Diego election history). Martinez lost District 8 runoffs to Moreno in 2018 (49.06%) and 2022 (36.7%).',
    ],
    legalRequirements:
      'Resident and elector of the City of San Diego, and an actual resident and elector of the district from which nominated (City Charter, Art. II, § 7).',
    qualificationCriteria: COUNCIL_CRITERIA,
    readingLinks: [
      { label: 'KPBS: City Council races explainer (Districts 2, 4, 6, 8)', url: 'https://www.kpbs.org/news/politics/2026/09/29/2026-general-election-san-diego-city-council-races-explainer-districts-2-4-6-8', summary: 'Backgrounds, positions, endorsements and money as of June 30, 2026.' },
      { label: 'City of San Diego: District 8 election history', url: 'https://www.sandiego.gov/sites/default/files/2026-07/city-of-san-diego-election-history-district-8.pdf', summary: 'June 2026 primary and past District 8 results.' },
      { label: 'La Prensa San Diego: Ramirez endorsement (May 21, 2026)', url: 'https://laprensa.org/endorsement-gerardo-ramirez-sd-city-council', summary: 'Newspaper endorsement (opinion).' },
    ],
    candidates: [
      {
        id: 'antonio-martinez',
        name: 'Antonio Martinez',
        party: 'NP',
        role: 'Governing Board Member, San Ysidro School District',
        qualification: qual('substantial', 'Martinez has been an elected San Ysidro school trustee since 2012 and worked for Rep. Juan Vargas, but has not held city office.', [
          ['governance', 'partial', 'San Ysidro School District trustee since 2012 (Times of San Diego); elected board president in 2014 (La Prensa); re-elected 2024 with 37.9% (Ballotpedia). No city office.'],
          ['land-budget', 'partial', 'Votes on a school district budget of about $79 million (inewsource); served on the San Ysidro Community Planning Group board (Times of San Diego, 2018). No city budget role.'],
          ['constituent', 'met', 'Grew up in San Ysidro; former staffer for Rep. Juan Vargas (KPBS); has run district-wide for this seat twice.'],
          ['coalition', 'partial', 'Endorsed by the county Democratic Party, firefighters, Supervisor Paloma Aguirre and Sen. Steve Padilla; no record of passing city legislation.'],
        ]),
        bio: [
          'Martinez grew up in San Ysidro, was the first in his family to attend college, and graduated from Mesa College and the University of Pennsylvania. He has served on the San Ysidro School District board since 2012 (Times of San Diego, 2018). KPBS describes him as a former staffer for Rep. Juan Vargas and a former health educator.',
        ],
        scorecard: [
          { topic: 'Infrastructure & flooding', position: '✓✓ New funding approach using state and federal grants for roads, sidewalks and stormwater; would prioritize storm drain cleaning in the district', comparison: 'Ramirez would change the street-resurfacing formula and says bonds or tax increases may be needed for stormwater.' },
          { topic: 'Tijuana River sewage', position: '✓✓ Calls it a health crisis; wants the city to request emergency funds and work with county, state and federal agencies', comparison: 'No Ramirez position found in the coverage reviewed.' },
          { topic: 'Budget', position: '~ Would start with an independent audit of the city budget to find misspending', comparison: 'Ramirez wants cost-benefit reviews of every department and cuts to middle management, and opposes a sales tax increase.' },
          { topic: 'Affordability', position: '✓ Utility-rate transparency, relief programs, workforce development and small-business support', comparison: 'Ramirez stresses faster permitting and first-time homebuyer programs.' },
        ],
        money: 'Campaign account held $11,315.22 with no debts as of June 30, 2026; an independent committee backing him reported $250,000 in contributions from local unions as of Sept. 10 (KPBS).',
        endorsements: 'San Diego County Democratic Party; San Diego City Firefighters IAFF Local 145; Supervisor Paloma Aguirre (KPBS, Sept. 29, 2026); state Sen. Steve Padilla (Times of San Diego, June 2026).',
        notes: [
          'The San Ysidro School District, whose board he sits on, filed a negative budget certification earlier in 2026 and eliminated about 35 positions before saying it was regaining its footing (inewsource, Oct. 7, 2026).',
          'In 2017 a fellow trustee accused Martinez and the board president of wasting money in dealings with a departing superintendent; a first recall attempt failed over a deficient petition (KPBS, Nov. 2, 2017): https://www.kpbs.org/news/2017/nov/02/san-ysidro-school-trustee-calls-top-officials-resi',
          'If he wins, his school board seat (term through 2028) would become vacant.',
        ],
      },
      {
        id: 'gerardo-ramirez',
        name: 'Gerardo Ramirez',
        party: 'NP',
        role: 'Chief of Staff, District 8',
        qualification: qual('substantial', 'Ramirez has worked in the District 8 council office for about a decade and is now its chief of staff, but has never held elected office.', [
          ['governance', 'met', 'Chief of staff to Councilmember Vivian Moreno (city staff page); in the District 8 office more than 10 years under David Alvarez and Moreno (La Prensa).'],
          ['land-budget', 'partial', 'Staff work on council budgets and district projects; not a voting member. Cites the Independent Budget Analyst’s review of the FY2027 budget (KPBS).'],
          ['constituent', 'met', 'Council representative for Otay Mesa, Nestor, Egger Highlands and Ocean View Hills in 2019 (District 8 newsletter); grew up in San Ysidro.'],
          ['coalition', 'partial', 'Endorsed by city employee unions, Assemblymember David Alvarez and the Lincoln Club; no record as a decision-maker.'],
        ]),
        bio: [
          'Ramirez, 31, grew up in San Ysidro, attended San Ysidro public schools and graduated from San Diego State in 2016 with a sociology degree (District 8 newsletter, 2019; La Prensa). He is chief of staff to Councilmember Vivian Moreno and has worked in the District 8 office for more than a decade, first under David Alvarez.',
        ],
        scorecard: [
          { topic: 'Infrastructure', position: '✓ Would change the street-resurfacing formula, which he says favors streets in fair shape, and codify the Climate Equity Fund by ordinance', comparison: 'Martinez would seek grants and prioritize storm drain cleaning.' },
          { topic: 'Housing', position: '✓✓ Faster permitting and expanded first-time homebuyer programs; notes the city permitted 8,782 homes in 2024 against 108,036 needed by 2029', comparison: 'Martinez focuses on utility relief and workforce development.' },
          { topic: 'Budget', position: '✓ Cost-benefit analyses for every department; cut expensive middle managers; opposes raising the sales tax (KPBS; La Prensa)', comparison: 'Martinez would start with an independent audit.' },
          { topic: 'Stormwater funding', position: '~ Says the city cannot fix it alone; points to state and federal money, bonds and possible tax increases', comparison: 'Martinez emphasizes state and federal grants.' },
          { topic: 'Tijuana River sewage', position: '? No position found in the coverage reviewed', comparison: 'Martinez calls it a health crisis and wants emergency funds.' },
        ],
        money: 'Campaign account held $35,194.11 with $44,716.30 in debts (including a $20,000 self-loan) as of June 30, 2026; a Chamber of Commerce-linked committee spent over $200,000 for him in the primary, and a new committee reported $10,000 from the Chamber as of Sept. 14 (KPBS).',
        endorsements: 'San Diego Municipal Employees Association; AFSCME Local 127; Assemblymember David Alvarez (KPBS, Sept. 29, 2026); San Diego Lincoln Club (KPBS, Sept. 30, 2026); La Prensa San Diego editorial board (opinion, May 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Martinez', '●', 'Progressive Left voters favor the Democratic Party nominee who calls the border sewage a health crisis and is backed by union money, over the Lincoln Club’s choice.'],
      ['EL', 'Martinez', '◐', 'Establishment Liberals follow the county party to Martinez, though Ramirez’s decade inside City Hall and Alvarez’s backing make this closer.'],
      ['DM', 'Martinez', '●', 'Democratic Mainstays follow the county Democratic Party and firefighters’ endorsements.'],
      ['OL', 'Martinez', '◐', 'Outsider Left voters may prefer a community trustee over the outgoing councilmember’s chief of staff and a Chamber-funded campaign.'],
      ['SS', 'Martinez', '○', 'Stressed Sideliners worried about utility bills and flooding may lean to the candidate pitching utility-rate relief and storm drain cleaning, though weakly.'],
      ['AR', 'Ramirez', '◐', 'Ambivalent Right voters like his opposition to a sales tax increase and his plan to cut middle management.'],
      ['PR', 'Ramirez', '○', 'Populist Right voters have no conservative option; Ramirez’s promise to cut City Hall managers is the closer fit, though he is an insider.'],
      ['CC', 'Ramirez', '◐', 'Committed Conservatives follow the Lincoln Club and Chamber to the candidate stressing cost-benefit reviews and no new sales tax.'],
      ['FF', 'Ramirez', '○', 'Faith and Flag Conservatives have no values contrast here; the business-backed candidate is a weak lean.'],
    ]),
    counterArguments: [
      'PL/DM (Martinez ●): But the school district he has helped govern since 2012 filed a negative budget certification this year and cut about 35 positions, which may give voters focused on fiscal management pause.',
      'AR/CC (Ramirez): But Ramirez has never held elected office, his City Hall experience is as staff rather than as a decision-maker, and his campaign owed more than it held in June.',
    ],
  },

  // ───────────────────────────── SDUSD District C ─────────────────────────────
  {
    id: 'sdusd-district-c',
    categoryId: 'school',
    title: 'San Diego Unified Board of Education, District C',
    tldrLabel: 'SDUSD Board D-C',
    seatContext: 'Open seat (Petterson not running)',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member San Diego Unified School District board hires and evaluates the superintendent, adopts the district budget, and sets policy for one of California’s largest school districts. District C covers the coastal area, including La Jolla, Pacific Beach, Point Loma and Ocean Beach.',
      'Hayden Gore is the only candidate on the ballot, so the outcome is not in doubt. Voters who dislike the choice can leave the line blank or write in a candidate; the practical decision is whether to vote in this contest at all.',
    ],
    introParagraphs: [
      'Gore, a middle school teacher and political newcomer, was the only candidate to qualify for the seat Cody Petterson is leaving (Voice of San Diego, May 13, 2026). The teachers union, SDEA, recruited and endorsed him, and the county Democratic Party endorsed him (SDEA; KPBS, Sept. 30, 2026). The office is nonpartisan.',
    ],
    legalRequirements: 'Registered voter and resident of the board trustee area at the time of filing.',
    qualificationCriteria: [
      { id: 'governance', label: 'School-board governance', detail: 'The board sets policy and hires the superintendent.' },
      { id: 'budget', label: 'Large education budget oversight', detail: 'The board adopts and monitors the district’s multi-billion-dollar-scale budget.' },
      { id: 'education', label: 'Classroom and education knowledge', detail: 'Trustees weigh instruction, special education and student-support decisions.' },
    ],
    readingLinks: [
      { label: 'Voice of San Diego: He’s San Diego Unified’s next trustee (May 13, 2026)', url: 'https://voiceofsandiego.org/2026/05/13/the-learning-curve-hes-san-diego-unifieds-next-trustee-no-race-needed/', summary: 'Profile and priorities.' },
    ],
    candidates: [
      {
        id: 'hayden-gore',
        name: 'Hayden Gore',
        party: 'NP',
        role: 'Classroom Teacher/Father',
        campaignUrl: 'https://haydenforsdusd.com',
        qualification: qual('some', 'Gore is a working teacher and former union president at a charter network, with no board or district budget experience.', [
          ['governance', 'partial', 'Organizer and first president of the High Tech Education Collective, which represents staff at the High Tech High charter network (SDEA); no elected service.'],
          ['budget', 'partial', 'Led the union to its first contract (Voice of San Diego); no district budget oversight role.'],
          ['education', 'met', 'Current middle school teacher and longtime educator, including at High Tech High (SDEA; Voice of San Diego).'],
        ]),
        bio: [
          'Gore is a middle school teacher who helped organize, and was the first president of, the union representing staff at the High Tech High charter network, leading it to a first contract. Voice of San Diego describes him as an avowed progressive. His priorities are keeping resources in classrooms, workforce and family housing, responding to enrollment loss, and protecting students from immigration enforcement.',
        ],
        scorecard: [
          { topic: 'Classroom resources', position: '✓✓ Keep as many resources as possible in classrooms; favors project-based, discussion-based learning over technology substitutes', comparison: 'No opponent on the ballot.' },
          { topic: 'Immigration enforcement', position: '✓ Wants to protect schools and students from immigration enforcement', comparison: 'No opponent on the ballot.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego Education Association (SDEA, Feb. 2026); San Diego County Democratic Party (KPBS, Sept. 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Gore', '●', 'Progressive Left voters have only one name on the ballot, and he is a progressive union-backed teacher.'],
      ['EL', 'Gore', '●', 'Establishment Liberals value a working teacher endorsed by the county party and the teachers union.'],
      ['DM', 'Gore', '●', 'Democratic Mainstays follow the county party’s endorsement.'],
      ['OL', 'Gore', '◐', 'Outsider Left voters may welcome a union organizer and political newcomer, though there is no alternative to weigh.'],
      ['SS', 'Gore', '○', 'Stressed Sideliners with little interest in down-ballot offices can vote for the only name or skip the line.'],
      ['AR', 'Gore', '○', 'Ambivalent Right voters face a single candidate and can vote for him or skip.'],
      ['PR', 'Gore', '○', 'Populist Right voters have no alternative; a write-in or blank line is the only way to register disapproval.'],
      ['CC', 'Gore', '○', 'Committed Conservatives have no alternative on a one-name ballot; a write-in or blank line is a reasonable protest.'],
      ['FF', 'Gore', '○', 'Faith and Flag Conservatives have no alternative; a write-in or blank line is a reasonable protest.'],
    ]),
    counterArguments: [
      'PR/CC/FF (Gore ○): But a one-name race can still be left blank or answered with a write-in if you object to the office being uncontested; that is a legitimate protest vote.',
    ],
  },

  // ───────────────────────────── San Ysidro SD board ─────────────────────────────
  {
    id: 'san-ysidro-sd-board',
    categoryId: 'school',
    title: 'San Ysidro School District, Governing Board',
    tldrLabel: 'San Ysidro SD Board',
    voteFor: 3,
    seatContext: 'Three at-large seats; three incumbents running',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member San Ysidro School District board governs seven schools serving about 4,200 students in San Ysidro and part of Otay Mesa (Ballotpedia, 2023-24). It adopts an operating budget of about $79 million, hires the superintendent and sets academic policy.',
      'Three seats are up. The district filed a negative budget certification earlier this year and cut about eight teaching and 27 classified positions, then said it was regaining its footing; a small deficit is still projected for 2028-29 (inewsource, Oct. 7, 2026). The new board must keep the district solvent.',
    ],
    introParagraphs: [
      'Eleven candidates are running; voters may pick up to three. The county Democratic Party endorsed incumbents Irene Lopez and Zenaida Rosario and appointed trustee Martín Arias; Reform California backs Miguel “Mike” Ochoa and Brandon J Plascencia (KPBS, Sept. 30, 2026). Only Arias, Ochoa, Olea and Palestino answered the inewsource questionnaire, so little is public about most others.',
    ],
    legalRequirements: 'Registered voter and resident of the San Ysidro School District; at least 18 years old.',
    qualificationCriteria: SCHOOL_CRITERIA,
    readingLinks: [
      SY_CANDIDATES_LINK,
      KPBS_ENDORSEMENTS,
      { label: 'Ballotpedia: San Ysidro School District elections', url: 'https://ballotpedia.org/San_Ysidro_School_District,_California,_elections', summary: 'Candidate list and past results (2018-2024).' },
    ],
    candidates: [
      {
        id: 'roxane-palestino',
        name: 'Roxane Palestino',
        party: 'NP',
        role: 'Parent Community Advocate',
        bio: [
          'Palestino owns Supreme Tires, has lived in San Ysidro for 27 years, and is the mother of two daughters with IEPs. She is president of La Mirada’s School Site Council, sits on the San Ysidro Community Planning Group, helped create a South County advisory committee for families of students with disabilities, and pushed for livestreamed board meetings (inewsource; Ballotpedia survey).',
        ],
        scorecard: [
          { topic: 'Special education', position: '✓✓ Longtime IEP advocate for families', comparison: 'Arias lists special education among services to protect.' },
          { topic: 'Literacy & math', position: '✓✓ Annual growth targets; evidence-based reading programs from kindergarten up', comparison: 'Arias and Ochoa also want annual public targets.' },
          { topic: 'Spending', position: '✓ Wants full financial documents before votes; would scrutinize legal fees, catering and consultants', comparison: 'Arias targets consulting contracts and administrative growth.' },
          { topic: 'Transparency', position: '✓✓ Helped win livestreamed and recorded board meetings', comparison: 'Ochoa proposes a quarterly budget and contract dashboard.' },
        ],
        money: NO_MONEY,
        endorsements: 'None verified.',
        qualification: qual('some', 'Palestino has years of school-site and parent-advocacy leadership in the district but no board or budget role.', [
          ['budget', 'partial', 'Business owner; no public budget oversight role documented.'],
          ['education', 'partial', 'IEP advocate; president of La Mirada School Site Council; two years on San Ysidro Middle School Site Council (Ballotpedia survey).'],
          ['governance', 'partial', 'San Ysidro Community Planning Group member; site council president; no elected board service.'],
          ['community', 'met', '27-year San Ysidro resident and district parent; helped create a South County special-education advisory committee.'],
        ]),
      },
      {
        id: 'brandon-plascencia',
        name: 'Brandon J Plascencia',
        party: 'NP',
        role: 'No ballot designation',
        bio: ['Plascencia is printed on the ballot without a designation. No campaign site, questionnaire answers or news profile were found; Reform California endorsed him (KPBS, Sept. 30, 2026).'],
        scorecard: [
          { topic: 'Budget', position: `? ${NO_RECORD}`, comparison: 'Arias and Palestino have published spending priorities.' },
          { topic: 'Academics', position: `? ${NO_RECORD}`, comparison: 'Arias, Ochoa and Palestino want annual reading and math targets.' },
          { topic: 'Transparency', position: `? ${NO_RECORD}`, comparison: 'Ochoa proposes a budget and contract dashboard.' },
          { topic: 'Special education', position: `? ${NO_RECORD}`, comparison: 'Palestino is a longtime IEP advocate.' },
        ],
        money: NO_MONEY,
        endorsements: 'Reform California (KPBS, Sept. 30, 2026).',
        qualification: qual('limited', 'No occupation, background or community role is publicly documented.', [
          ['budget', 'unknown', NO_RECORD],
          ['education', 'unknown', NO_RECORD],
          ['governance', 'unknown', NO_RECORD],
          ['community', 'unknown', NO_RECORD],
        ]),
      },
      {
        id: 'miguel-ochoa',
        name: 'Miguel “Mike” Ochoa',
        party: 'NP',
        role: 'Retired Business Owner',
        bio: [
          'Ochoa was raised in the South Bay, is a father of four and grandfather of six, and says he ran three profitable businesses. He holds a master’s in advanced studies in international affairs from UC San Diego, a bachelor’s from UCLA and an associate degree from Southwestern College (inewsource).',
        ],
        scorecard: [
          { topic: 'School safety', position: '✓✓ Districtwide safety assessment and a costed plan for cameras in common areas at all seven schools', comparison: 'No other candidate offers a safety plan.' },
          { topic: 'Transparency', position: '✓✓ Quarterly public budget and contract dashboard; longer public comment', comparison: 'Palestino helped win livestreamed meetings.' },
          { topic: 'Budget', position: '✓ Conservative enrollment assumptions; avoid across-the-board cuts', comparison: 'Arias says the board restored a 5% reserve.' },
          { topic: 'Enrollment', position: '✓ Retention plan using transfer data and family exit surveys', comparison: 'Olea also wants to study why families leave.' },
        ],
        money: NO_MONEY,
        endorsements: 'Reform California (KPBS, Sept. 30, 2026).',
        qualification: qual('some', 'Ochoa brings small-business management and graduate study but no school or board experience.', [
          ['budget', 'partial', 'Says he ran three profitable businesses; no public-budget role.'],
          ['education', 'unknown', 'No school employment or site-council role documented.'],
          ['governance', 'unknown', 'No board service documented.'],
          ['community', 'partial', 'Raised in the South Bay; parent and grandfather; no district role documented.'],
        ]),
      },
      {
        id: 'yvette-olea',
        name: 'Yvette Olea',
        party: 'NP',
        role: 'Retired CSEA Employee',
        bio: [
          'Olea retired as executive assistant to the superintendent of National School District (inewsource). She ran for this board in 2024 and finished fourth with 10.8% (Ballotpedia).',
        ],
        scorecard: [
          { topic: 'Accountability', position: '✓ Wants to know what each program costs, who uses it and whether it works', comparison: 'Arias asks for the same evidence before renewing programs.' },
          { topic: 'Employees', position: '✓ Pledges to respect and hear from employees', comparison: 'Ochoa and Palestino lead with families and safety.' },
          { topic: 'Engagement', position: '✓ At least two school or district site visits a month', comparison: 'No other candidate makes a visit pledge.' },
          { topic: 'Academics', position: '✓ Reading, math, attendance and well-being, tracked by student group', comparison: 'Arias and Ochoa propose similar targets.' },
        ],
        money: NO_MONEY,
        endorsements: 'None verified.',
        qualification: qual('some', 'Olea worked in a neighboring district’s superintendent’s office but has not served on a board.', [
          ['budget', 'unknown', 'No budget role documented.'],
          ['education', 'partial', 'Career in a school district office; retired from National School District (inewsource).'],
          ['governance', 'partial', 'Executive assistant to a superintendent; no elected service.'],
          ['community', 'unknown', 'No specific San Ysidro community role documented.'],
        ]),
      },
      {
        id: 'martin-arias',
        name: 'Martín Arias',
        party: 'NP',
        role: 'Appointed Governing Board Member, San Ysidro School District',
        bio: [
          'Arias was appointed to the board on Dec. 19, 2024, weeks after finishing fifth (9.7%) in the board election (Ballotpedia). He is a taxpayer advocate in the San Diego County Assessor/Recorder/County Clerk’s office, holds a political science degree from SDSU (inewsource), and also ran for the state Board of Equalization in the June 2026 primary (Ballotpedia).',
        ],
        recordVsChange:
          'Arias says the district restored its reserve to 5% during his term and won state awards for English-learner and community-schools work, but the board also filed a negative budget certification and cut staff this year. The case for change is new eyes on spending.',
        scorecard: [
          { topic: 'Reserves', position: '✓✓ Says the district restored its reserve to 5% during his term', comparison: 'Challengers have not served on the board.' },
          { topic: 'Spending', position: '✓ Would scrutinize consulting contracts, administrative growth and duplicative software', comparison: 'Palestino targets legal fees and consultants.' },
          { topic: 'Academics', position: '✓ Annual public targets in reading, math, English learners and attendance', comparison: 'Ochoa and Palestino propose similar targets.' },
          { topic: 'Transparency', position: '✓ Public reporting on major contracts, staffing and program results', comparison: 'Ochoa proposes a quarterly dashboard.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026).',
        qualification: qual('substantial', 'Arias has served as a trustee since December 2024 and works in county tax administration.', [
          ['budget', 'met', 'Trustee through the 2026 budget crisis and recovery; county taxpayer advocate (inewsource).'],
          ['education', 'partial', 'No classroom role; cites the district’s 2024 and 2025 Golden Bell awards.'],
          ['governance', 'met', 'Appointed trustee since Dec. 19, 2024 (Ballotpedia).'],
          ['community', 'met', 'Born and raised in San Diego; previously directed prevention programs at the DA’s office (Ballotpedia survey, self-reported).'],
        ]),
      },
      {
        id: 'irene-lopez',
        name: 'Irene Lopez',
        party: 'NP',
        role: 'San Ysidro School District Board Member',
        bio: [
          'Lopez won board seats in 2018 (25.9%) and 2022 (21.4%); Ballotpedia lists her tenure as beginning Jan. 1, 2019. No campaign statement, questionnaire answers or news profile were found.',
        ],
        recordVsChange:
          'Lopez has voted on district budgets since 2019, including this year’s negative certification and staff cuts. No public account of her record or platform was found, so voters must judge her on the district’s overall results.',
        scorecard: [
          { topic: 'Budget', position: '? No public statement found; on the board during this year’s negative certification and cuts', comparison: 'Arias says the board restored a 5% reserve.' },
          { topic: 'Academics', position: '? No public statement found', comparison: 'Arias and Palestino want annual targets.' },
          { topic: 'Labor relations', position: '✓ Endorsed by the Labor Council (Ballotpedia)', comparison: 'Olea also emphasizes employees.' },
          { topic: 'Transparency', position: '? No public statement found', comparison: 'Ochoa proposes a budget dashboard.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026); San Diego & Imperial Counties Labor Council (Ballotpedia).',
        qualification: qual('substantial', 'Lopez has served on this board since 2019, but no other relevant background is documented.', [
          ['budget', 'partial', 'Has voted on district budgets since 2019; no specific budget role documented.'],
          ['education', 'unknown', 'No school employment documented.'],
          ['governance', 'met', 'Trustee since 2019; re-elected 2022 (Ballotpedia).'],
          ['community', 'partial', 'Elected district-wide twice; no other community role documented.'],
        ]),
      },
      {
        id: 'jose-manuel-dircio',
        name: 'Jose Manuel Dircio',
        party: 'NP',
        role: 'Mechanical Engineer',
        bio: [
          'Dircio ran in 2024 and finished third with 13.7% (Ballotpedia). His campaign site stresses transparency and honest decision-making, music, sports and other extracurriculars for all students, and special-education support. He did not answer the inewsource questionnaire.',
        ],
        scorecard: [
          { topic: 'Extracurriculars', position: '✓✓ Music, sports and other activities for all students', comparison: 'No other candidate leads with extracurriculars.' },
          { topic: 'Special education', position: '✓ Supports special-education programs', comparison: 'Palestino is a longtime IEP advocate.' },
          { topic: 'Transparency', position: '✓ Honest, transparent decision-making (no specifics)', comparison: 'Ochoa proposes a budget dashboard.' },
          { topic: 'Budget', position: '? No position found', comparison: 'Arias and Palestino have published spending priorities.' },
        ],
        money: NO_MONEY,
        endorsements: 'None verified.',
        qualification: qual('limited', 'Beyond his engineering designation and a 2024 run, no school, budget or board experience is documented.', [
          ['budget', 'unknown', 'No record found.'],
          ['education', 'unknown', 'No record found.'],
          ['governance', 'unknown', 'No record found.'],
          ['community', 'partial', 'Ran district-wide in 2024 (13.7%).'],
        ]),
      },
      {
        id: 'zenaida-rosario',
        name: 'Zenaida Rosario',
        party: 'NP',
        role: 'Governing Board Member San Ysidro School District',
        bio: [
          'Rosario was elected in 2022 with 23.8% and her term ends in December 2026 (Ballotpedia). She did not answer the inewsource questionnaire, and no platform or news profile was found.',
        ],
        recordVsChange:
          'Rosario has served since late 2022, through this year’s budget crisis and staff cuts. With no public statement of her record, the case for keeping her rests on continuity and the Democratic Party endorsement.',
        scorecard: [
          { topic: 'Budget', position: '? No public statement found; on the board during this year’s negative certification and cuts', comparison: 'Arias says the board restored a 5% reserve.' },
          { topic: 'Academics', position: '? No public statement found', comparison: 'Arias and Palestino want annual targets.' },
          { topic: 'Transparency', position: '? No public statement found', comparison: 'Ochoa proposes a budget dashboard.' },
          { topic: 'Special education', position: '? No public statement found', comparison: 'Palestino is a longtime IEP advocate.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026).',
        qualification: qual('substantial', 'Rosario has served on this board since 2022; no other relevant background is documented.', [
          ['budget', 'partial', 'Has voted on district budgets since 2022; no specific role documented.'],
          ['education', 'unknown', 'No record found.'],
          ['governance', 'met', 'Trustee since 2022 (Ballotpedia).'],
          ['community', 'partial', 'Elected district-wide in 2022.'],
        ]),
      },
      {
        id: 'monica-yrineo',
        name: 'Monica Yrineo',
        party: 'NP',
        role: 'Retired School Employee',
        bio: ['Yrineo’s ballot designation is Retired School Employee; the employer and role are not public. She did not answer the inewsource questionnaire and no platform was found.'],
        scorecard: [
          { topic: 'Budget', position: `? ${NO_RECORD}`, comparison: 'Arias and Palestino have published spending priorities.' },
          { topic: 'Academics', position: `? ${NO_RECORD}`, comparison: 'Arias, Ochoa and Palestino want annual targets.' },
          { topic: 'Transparency', position: `? ${NO_RECORD}`, comparison: 'Ochoa proposes a budget dashboard.' },
          { topic: 'Employees', position: `? ${NO_RECORD}`, comparison: 'Olea emphasizes employees.' },
        ],
        money: NO_MONEY,
        endorsements: 'None verified.',
        qualification: qual('limited', 'The designation suggests a school career, but no employer, years or role is documented.', [
          ['budget', 'unknown', NO_RECORD],
          ['education', 'partial', 'Ballot designation is Retired School Employee; details not public.'],
          ['governance', 'unknown', NO_RECORD],
          ['community', 'unknown', NO_RECORD],
        ]),
      },
      {
        id: 'olga-lydia-espinoza',
        name: 'Olga Lydia Espinoza',
        party: 'NP',
        role: 'Mother/Education Advocate',
        bio: ['Espinoza ran for this board in 2018 and received 14.4% (Ballotpedia). She did not answer the inewsource questionnaire and no current platform was found.'],
        scorecard: [
          { topic: 'Budget', position: `? ${NO_RECORD}`, comparison: 'Arias and Palestino have published spending priorities.' },
          { topic: 'Academics', position: `? ${NO_RECORD}`, comparison: 'Arias, Ochoa and Palestino want annual targets.' },
          { topic: 'Transparency', position: `? ${NO_RECORD}`, comparison: 'Ochoa proposes a budget dashboard.' },
          { topic: 'Special education', position: `? ${NO_RECORD}`, comparison: 'Palestino is a longtime IEP advocate.' },
        ],
        money: NO_MONEY,
        endorsements: 'None verified.',
        qualification: qual('limited', 'Beyond the designation and a 2018 run, no experience is documented.', [
          ['budget', 'unknown', NO_RECORD],
          ['education', 'unknown', NO_RECORD],
          ['governance', 'unknown', NO_RECORD],
          ['community', 'partial', 'Parent and self-described education advocate; ran district-wide in 2018.'],
        ]),
      },
      {
        id: 'lidya-morales',
        name: 'Lidya Morales',
        party: 'NP',
        role: 'Parent/Banquet Server',
        bio: ['Morales’s ballot designation is Parent/Banquet Server. No campaign site, questionnaire answers or news profile were found.'],
        scorecard: [
          { topic: 'Budget', position: `? ${NO_RECORD}`, comparison: 'Arias and Palestino have published spending priorities.' },
          { topic: 'Academics', position: `? ${NO_RECORD}`, comparison: 'Arias, Ochoa and Palestino want annual targets.' },
          { topic: 'Transparency', position: `? ${NO_RECORD}`, comparison: 'Ochoa proposes a budget dashboard.' },
          { topic: 'Special education', position: `? ${NO_RECORD}`, comparison: 'Palestino is a longtime IEP advocate.' },
        ],
        money: NO_MONEY,
        endorsements: 'None verified.',
        qualification: qual('limited', 'No experience beyond being a district parent is documented.', [
          ['budget', 'unknown', NO_RECORD],
          ['education', 'unknown', NO_RECORD],
          ['governance', 'unknown', NO_RECORD],
          ['community', 'partial', 'Ballot designation lists her as a parent.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['PL', 'Arias, Lopez, Rosario', '◐', 'Progressive Left voters can follow the county Democratic Party and Labor Council slate, though the incumbents have said little publicly about the budget crisis.'],
      ['EL', 'Arias, Lopez, Rosario', '●', 'Establishment Liberals value board continuity and the Democratic Party endorsements during a financial recovery.'],
      ['DM', 'Arias, Lopez, Rosario', '●', 'Democratic Mainstays follow the county party’s three endorsements in a low-information race.'],
      ['OL', 'Palestino, Olea, Arias', '○', 'Outsider Left voters may prefer a special-education parent advocate and a retired school employee who stresses staff voices, plus the incumbent with the most detailed plan.'],
      ['SS', 'Arias, Palestino, Olea', '○', 'Stressed Sideliners have little to go on in an 11-way field; these three gave the most concrete answers on reading, spending and accountability.'],
      ['AR', 'Ochoa, Arias, Palestino', '◐', 'Ambivalent Right voters favor practical plans: Ochoa’s budget dashboard and safety plan, Arias’s contract scrutiny and Palestino’s spending review.'],
      ['PR', 'Ochoa, Plascencia', '○', 'Populist Right voters may follow Reform California to two outsiders, though almost nothing is public about Plascencia.'],
      ['CC', 'Ochoa, Palestino, Arias', '◐', 'Committed Conservatives value fiscal transparency; these three pledged contract and spending scrutiny after the district’s negative budget certification.'],
      ['FF', 'Ochoa, Plascencia', '○', 'Faith and Flag Conservatives have no values contrast to act on; Reform California’s two picks are the only conservative-backed names.'],
    ]),
    counterArguments: [
      'PL/EL/DM (Arias, Lopez, Rosario): But all three were on the board when the district filed a negative budget certification and cut about 35 positions this year, and Lopez and Rosario have published no platform.',
      'PR/FF (Ochoa, Plascencia ○): But nothing is publicly known about Plascencia beyond a Reform California endorsement; he has no ballot designation and no published platform.',
    ],
  },

  // ───────────────────────────── San Dieguito UHSD Area 3 ─────────────────────────────
  {
    id: 'sduhsd-trustee-area-3',
    categoryId: 'school',
    title: 'San Dieguito Union High School District, Trustee Area 3',
    tldrLabel: 'San Dieguito UHSD Area 3',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member San Dieguito Union High School District board governs middle and high schools including Torrey Pines, Canyon Crest Academy, San Dieguito Academy and La Costa Canyon. It adopts the budget, negotiates labor contracts, sets academic and campus policy, and hires the superintendent.',
      'Board president Jane Lea Smith, whose Area 3 term ends this year, is not on the ballot and has endorsed Doyle. The office is nonpartisan, but the parties have taken sides: Democrats and the district’s teacher and classified-staff unions back Doyle, and the county Republican Party backs Boger.',
    ],
    introParagraphs: [
      'Area 3 covers part of 92014, including the City of Del Mar. Helen Doyle (Community Volunteer) faces Summer Boger (Small Business Owner); neither has held elected office. The county Democratic Party endorsed Doyle and the county Republican Party endorsed Boger (KPBS, Sept. 30, 2026).',
    ],
    legalRequirements: 'Registered voter and resident of Trustee Area 3 at the time of filing; at least 18 years old.',
    qualificationCriteria: SCHOOL_CRITERIA,
    readingLinks: [
      KPBS_ENDORSEMENTS,
      { label: 'North County Chronicle: North County ballot overview (Sept 23, 2026)', url: 'https://northcountychronicle.com/articles/election/north-county-voters-face-a-full-ballot-this-november/', summary: 'Lists the Area 3 candidates.' },
    ],
    candidates: [
      {
        id: 'helen-doyle',
        name: 'Helen Doyle',
        party: 'NP',
        role: 'Community Volunteer',
        campaignUrl: 'https://www.doyleforsandieguito.com/',
        bio: [
          'Doyle is a former mechanical engineer who designed medical devices, a 16-year Del Mar resident and mother of three. She has volunteered about 16 years as a court-appointed special advocate for foster children, is in her fourth year as a director of the Del Mar Union School District foundation, and says she has attended local school board meetings regularly for three years (campaign site).',
        ],
        scorecard: [
          { topic: 'AI & future skills', position: '✓✓ Prepare students for an AI-driven workforce, with guidance on appropriate AI use', comparison: 'Boger emphasizes college prep and skilled-trades pathways.' },
          { topic: 'Screen time', position: '✓ Age-appropriate limits on screens and campus policies for face-to-face connection', comparison: 'No Boger position found.' },
          { topic: 'Budget', position: '✓ Supports steadily raising the district reserve to its new target', comparison: 'Boger pledges budget accountability without specifics.' },
          { topic: 'Programs', position: '✓ Expand Spanish immersion continuation and career technical pathways', comparison: 'Boger also backs career and trades pathways.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026); San Dieguito Faculty Association; CSEA SDUHSD chapter; Sierra Club; Rep. Mike Levin; trustee Jane Lea Smith (campaign site, Oct. 2026).',
        qualification: qual('some', 'Doyle has years of school-foundation and child-advocacy volunteer work but has not worked in a school or served on a board.', [
          ['budget', 'partial', 'Director of the Del Mar Union School District foundation, which raises money for teachers; no district budget role.'],
          ['education', 'partial', 'Classroom and PTA volunteer; about 16 years as a CASA volunteer; no school employment.'],
          ['governance', 'partial', 'Foundation board director; regular observer of school board meetings for three years; no elected service.'],
          ['community', 'met', '16-year Del Mar resident and parent of three school-age children.'],
        ]),
      },
      {
        id: 'summer-boger',
        name: 'Summer Boger',
        party: 'NP',
        role: 'Small Business Owner',
        campaignUrl: 'https://www.summerforschoolboard.com/',
        bio: [
          'Boger says she works as a special education instructional assistant in the San Dieguito district and is a holistic health practitioner with more than 15 years of practice; she is the parent of two San Dieguito Academy graduates (campaign site). Her “ABC” platform is academic achievement, budget accountability, and college and career readiness, including skilled-trades pathways and healthier school meals.',
        ],
        scorecard: [
          { topic: 'Academics', position: '✓✓ Says the district’s first priority is maximizing every child’s potential', comparison: 'Doyle leads with AI-era skills and screen-time limits.' },
          { topic: 'Budget', position: '✓ Responsible stewardship focused on classrooms (no specifics)', comparison: 'Doyle backs building the reserve to its target.' },
          { topic: 'Career & trades', position: '✓✓ Stronger college prep, career technical education and skilled-trades pathways', comparison: 'Doyle also backs career pathways.' },
          { topic: 'Special education', position: '✓ Advocate for students with autism and special needs', comparison: 'Doyle cites foster-youth advocacy.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County (KPBS, Sept. 30, 2026).',
        qualification: qual('some', 'Boger works in the district as an instructional assistant and runs a health practice, but has not served on a board.', [
          ['budget', 'partial', 'Runs her own practice; no public budget role documented.'],
          ['education', 'partial', 'Special education instructional assistant in the district (campaign site); years not stated.'],
          ['governance', 'unknown', 'No board service documented.'],
          ['community', 'met', 'Parent of two San Dieguito Academy graduates; says she has worked with families for over 25 years.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['PL', 'Doyle', '●', 'Progressive Left voters favor the candidate backed by the district’s teacher and staff unions, the Sierra Club and Democrats.'],
      ['EL', 'Doyle', '●', 'Establishment Liberals value Doyle’s endorsements from Rep. Levin, the outgoing board president and the county party.'],
      ['DM', 'Doyle', '●', 'Democratic Mainstays follow the county Democratic Party endorsement.'],
      ['OL', 'Doyle', '◐', 'Outsider Left voters may find Doyle’s foster-youth advocacy appealing, though she is the establishment’s pick.'],
      ['SS', 'Boger', '○', 'Stressed Sideliners may respond to Boger’s basics-first “ABC” pitch and trades pathways, though weakly.'],
      ['AR', 'Boger', '◐', 'Ambivalent Right voters may like Boger’s budget-accountability and career-readiness focus.'],
      ['PR', 'Boger', '◐', 'Populist Right voters may prefer a district classroom aide over the union-backed candidate.'],
      ['CC', 'Boger', '●', 'Committed Conservatives follow the county Republican Party endorsement.'],
      ['FF', 'Boger', '●', 'Faith and Flag Conservatives follow the Republican endorsement on a board that sets campus policy.'],
    ]),
    counterArguments: [
      'PL/EL/DM (Doyle ●): But Doyle has never worked in a school or managed a public budget; her case rests on volunteer work and endorsements.',
      'CC/FF (Boger ●): But Boger has published no specific budget plan beyond “budget accountability,” and the years and scope of her district job are not stated.',
    ],
  },

  // ───────────────────────────── Del Mar City Council ─────────────────────────────
  {
    id: 'del-mar-city-council',
    categoryId: 'city',
    title: 'Del Mar City Council',
    tldrLabel: 'Del Mar City Council',
    voteFor: 2,
    seatContext: 'Two at-large seats; one incumbent running',
    kind: 'candidates',
    stakesParagraphs: [
      'Del Mar’s five-member City Council, elected at large to four-year terms, adopts the city budget, decides land use under the Community Plan, and represents the city with SANDAG and North County Transit District over moving the rail line off the Del Mar bluffs.',
      'Two seats are up: Terry Gaasterland’s, and one vacant since Dwight Worden left in September 2024 (City of Del Mar). Candidates agree on many goals, such as no rail tunneling under homes, utility undergrounding and local control over housing, but differ on borrowing, state housing rules and relations with regional agencies.',
    ],
    introParagraphs: [
      'Gaasterland, on the council since 2018 and twice mayor, seeks a third term; the county Democratic Party declined to endorse her, citing her voting record and appearances on conservative-leaning platforms (Voice of San Diego, May 2026). Democrats endorsed planning commissioners Meghan Spieker and Jas Grewal; Reform California backs Jeff Sturgis (KPBS, Sept. 30, 2026).',
    ],
    legalRequirements: 'Registered voter and resident of the City of Del Mar; at least 18 years old.',
    qualificationCriteria: [
      { id: 'governance', label: 'City governance', detail: 'Councilmembers pass ordinances, set policy and rotate through the mayor’s role.' },
      { id: 'budget', label: 'Budget and finance', detail: 'The council adopts the budget and decides how to pay for undergrounding and infrastructure.' },
      { id: 'land-use', label: 'Land use and coastal planning', detail: 'The council applies the Community Plan, state housing rules and bluff and sea-level-rise policy.' },
      { id: 'regional', label: 'Regional relationships', detail: 'Rail relocation and housing require work with SANDAG, NCTD and the state.' },
    ],
    readingLinks: [
      { label: 'City of Del Mar: November 2026 election (candidate statements)', url: 'https://www.delmar.ca.us/944/November-2026-Election', summary: 'All four candidate statements and seat details.' },
      { label: 'League of Women Voters candidate forum (Oct 2, 2026)', url: 'https://vimeo.com/1232486608/937ebad6f9', summary: 'Recorded forum with all four candidates.' },
      { label: 'Voice of San Diego: North County Report (May 20, 2026)', url: 'https://voiceofsandiego.org/2026/05/20/north-county-report-election-season-musical-chairs/', summary: 'Democratic Party’s decision not to endorse Gaasterland.' },
    ],
    candidates: [
      {
        id: 'meghan-spieker',
        name: 'Meghan O. Spieker',
        party: 'NP',
        role: 'Planning Commissioner',
        bio: [
          'Spieker is a Del Mar planning commissioner and 25-year resident. She holds a UC Berkeley undergraduate degree and a Georgetown law degree, practiced business litigation for 16 years, then led nonprofits serving survivors of human trafficking and advancing environmental and educational work. She and her husband raised four sons in Del Mar (candidate statement).',
        ],
        scorecard: [
          { topic: 'Local control', position: '✓ Preserve local control over land use', comparison: 'All four candidates say the same.' },
          { topic: 'Rail relocation', position: '✓ Protect Del Mar’s interests in rail relocation', comparison: 'Sturgis, Gaasterland and Grewal explicitly oppose tunneling under homes.' },
          { topic: 'Infrastructure & safety', position: '✓ Improve roads; strengthen fire and flood safety', comparison: 'Gaasterland cites completed undergrounding.' },
          { topic: 'Budget', position: '✓ Manage taxpayer dollars wisely (no specifics)', comparison: 'Grewal opposes borrowing to speed projects.' },
        ],
        money: 'No campaign finance totals found as of Oct 9, 2026; filings are posted with the Del Mar City Clerk.',
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026); Del Mar Firefighters & Deputy Sheriffs’ Association, Sierra Club, Rep. Mike Levin (candidate statement, 2026).',
        qualification: qual('some', 'Spieker sits on the Planning Commission and has a long legal and nonprofit career, but has not held elected office.', [
          ['governance', 'partial', 'Del Mar planning commissioner (years not stated); led nonprofit organizations.'],
          ['budget', 'partial', 'Nonprofit leadership; no city finance role documented.'],
          ['land-use', 'met', 'Serves on the Del Mar Planning Commission.'],
          ['regional', 'unknown', 'No regional agency role documented.'],
        ]),
      },
      {
        id: 'jeff-sturgis',
        name: 'Jeff Sturgis',
        party: 'NP',
        role: 'Biotech Executive',
        bio: [
          'Sturgis is a third-generation Del Mar resident; his employer is not public. He says he has served on city committees for more than 20 years, including more than a decade on the Finance Committee, which he chaired, and belongs to Friends of Del Mar Bluffs, which has fought NCTD and SANDAG in court (candidate statement).',
        ],
        scorecard: [
          { topic: 'Rail relocation', position: '✓✓ Prevent eminent domain and tunneling during rail realignment', comparison: 'Gaasterland and Grewal also oppose tunneling under homes.' },
          { topic: 'Coastal access', position: '✓✓ Keep access to the bluffs and beaches', comparison: 'Gaasterland cites rejecting bluff fencing.' },
          { topic: 'Undergrounding', position: '✓ Underground utilities citywide', comparison: 'Grewal warns against borrowing to speed it.' },
          { topic: 'Housing', position: '~ Affordable housing “that works for Del Mar”; uphold the Community Plan', comparison: 'Grewal chaired the housing element task force.' },
        ],
        money: 'No campaign finance totals found as of Oct 9, 2026; filings are posted with the Del Mar City Clerk.',
        endorsements: 'Reform California (KPBS, Sept. 30, 2026).',
        qualification: qual('some', 'Sturgis has long city finance-committee service but has not held elected office.', [
          ['governance', 'partial', 'City committees for more than 20 years (candidate statement); no elected office.'],
          ['budget', 'met', 'Finance Committee member for more than a decade and past chair.'],
          ['land-use', 'partial', 'Positions on the Community Plan and North Bluff; no planning commission role.'],
          ['regional', 'partial', 'Member of Friends of Del Mar Bluffs, which litigated against NCTD and SANDAG.'],
        ]),
      },
      {
        id: 'terry-gaasterland',
        name: 'Terry Gaasterland',
        party: 'NP',
        role: 'City Councilmember/Professor',
        bio: [
          'Gaasterland is a UC San Diego professor of computational biology and genomics (Wikipedia). A 23-year resident, she was elected to the council in 2018 and has been mayor twice, and earlier served on the Finance Committee, Sea Level Rise Advisory Committee and Design Review Board (candidate statement; Voice of San Diego).',
        ],
        recordVsChange:
          'Gaasterland cites completed undergrounding on south Stratford, an updated Scenic View ordinance, rejecting bluff fencing and managed retreat, and advancing affordable housing plans at the Fairgrounds (candidate statement). The case for change is the Democratic Party’s refusal to endorse her and challengers promising better ties with regional agencies.',
        scorecard: [
          { topic: 'Rail relocation', position: '✓✓ Relocate tracks without tunneling under homes; rejected railroad fencing on the bluffs', comparison: 'Sturgis and Grewal take the same line.' },
          { topic: 'Undergrounding', position: '✓✓ Completed south Stratford; others underway or in design', comparison: 'Grewal warns against borrowing to speed it.' },
          { topic: 'Local control', position: '✓✓ Follow the Community Plan on land use', comparison: 'All candidates say they support local control.' },
          { topic: 'Coast', position: '✓ Sand replenishment; rejected managed retreat', comparison: 'Grewal also rejects managed retreat.' },
        ],
        money: 'No campaign finance totals found as of Oct 9, 2026; filings are posted with the Del Mar City Clerk.',
        endorsements: 'The county Democratic Party declined to endorse her (Voice of San Diego, May 2026); no endorsements verified.',
        qualification: qual('extensive', 'Gaasterland has served two council terms, including two years as mayor, plus earlier city committee work.', [
          ['governance', 'met', 'Councilmember since 2018; mayor twice (Voice of San Diego).'],
          ['budget', 'met', 'Eight years of council budget votes; three years on the Finance Committee.'],
          ['land-use', 'met', 'Council land-use votes; Sea Level Rise Advisory Committee (4 years) and Design Review Board.'],
          ['regional', 'partial', 'Has represented the city on rail and bluff issues; specific regional board seats not documented.'],
        ]),
      },
      {
        id: 'jas-grewal',
        name: 'Jas Grewal',
        party: 'NP',
        role: 'Planning Commissioner/Banker',
        campaignUrl: 'https://jas4delmar.com/',
        bio: [
          'Grewal is a retired banker with a master’s in banking and finance and a 34-year Del Mar resident. He is vice chair of the Planning Commission (appointed 2022), served eight years on the Finance Committee starting in 2016, and chaired the 2020 citizens task force on the city’s sixth-cycle housing element (campaign site).',
        ],
        scorecard: [
          { topic: 'Borrowing', position: '✓✓ Opposes borrowing millions to speed projects the city is already paying for over time', comparison: 'No other candidate takes as explicit a stand on debt.' },
          { topic: 'Housing', position: '✓ Find practical ways to meet state housing rules', comparison: 'Gaasterland stresses the Fairgrounds plan and local control.' },
          { topic: 'Rail relocation', position: '✓ Move the train off the bluffs without tunneling or eminent domain', comparison: 'Sturgis and Gaasterland agree.' },
          { topic: 'Regional relations', position: '✓ Rebuild strong relationships with regional agencies', comparison: 'Sturgis backs the bluffs group suing NCTD and SANDAG.' },
        ],
        money: 'No campaign finance totals found as of Oct 9, 2026; filings are posted with the Del Mar City Clerk.',
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026); Reps. Mike Levin and Scott Peters (campaign site, Oct. 2026).',
        qualification: qual('substantial', 'Grewal has city planning and finance committee service and a banking career, but has not held elected office.', [
          ['governance', 'partial', 'Planning Commission vice chair since 2022; no elected office.'],
          ['budget', 'met', 'Finance Committee 2016-2024; retired banker.'],
          ['land-use', 'met', 'Planning Commission; chaired the 2020 housing element task force.'],
          ['regional', 'partial', 'City representative on the Clean Energy Alliance community advisory committee (2026).'],
        ]),
      },
    ],
    crossTypology: ct([
      ['PL', 'Spieker, Grewal', '◐', 'Progressive Left voters follow the Democratic and Sierra Club-backed pair, though all four candidates share many local-control positions.', 'Progressive Left voters who put experience first could keep Grewal and swap Spieker for Gaasterland, a two-term councilmember and former mayor; they would give up a Democratic-endorsed candidate, since the party declined to back Gaasterland over her votes and conservative-platform appearances.'],
      ['EL', 'Spieker, Grewal', '●', 'Establishment Liberals value the pair endorsed by the county party and Reps. Levin and Peters.'],
      ['DM', 'Spieker, Grewal', '●', 'Democratic Mainstays follow the county Democratic Party’s two endorsements.'],
      ['OL', 'Spieker, Grewal', '○', 'Outsider Left voters have no insurgent option; the Democratic pair is a weak lean over the Reform California pick.', 'Outsider Left voters who weigh experience could swap Spieker for Gaasterland, the only incumbent, keeping Grewal; they would back someone the Democratic Party rejected over her voting record and conservative-platform appearances.'],
      ['SS', 'Gaasterland, Grewal', '○', 'Stressed Sideliners who pay little attention to city politics may favor the familiar incumbent and the retired banker warning against new debt.'],
      ['AR', 'Gaasterland, Grewal', '◐', 'Ambivalent Right voters value the incumbent’s undergrounding record and Grewal’s caution on borrowing.'],
      ['PR', 'Sturgis, Gaasterland', '○', 'Populist Right voters may back Reform California’s pick, who fights regional agencies over the bluffs, and the incumbent the Democrats rejected.'],
      ['CC', 'Sturgis, Gaasterland', '◐', 'Committed Conservatives follow Reform California to Sturgis and favor Gaasterland’s local-control record over the Democratic-endorsed pair.'],
      ['FF', 'Sturgis, Gaasterland', '○', 'Faith and Flag Conservatives have no values contrast here; the two candidates outside the Democratic slate are a weak lean.'],
    ]),
    counterArguments: [
      'PL/EL/DM (Spieker, Grewal): But skipping Gaasterland drops the only incumbent and her undergrounding and bluff record, on a council that has had a vacant seat for two years.',
      'CC/AR (Gaasterland): But after eight years, the case for change is better working relations with SANDAG and NCTD, which Grewal emphasizes, and the Democratic Party declined to back her.',
    ],
  },
];
