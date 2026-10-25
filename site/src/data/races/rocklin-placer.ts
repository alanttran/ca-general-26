import type { CandidateQualification, CriterionAssessment, ExperienceLevel, QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Rocklin (95765) and Placer County contests, Nov 3, 2026.
 * Sources: Placer County Elections "Measures to Appear on Ballot" and amended Notice of Election (Aug 2026),
 * CapRadio (Sept 14, 2026) and Sacramento Bee (Sept 22, 2026) school board coverage, City of Rocklin and RUSD pages.
 */

const MEASURES_PDF = 'https://www.placercountyelections.gov/Uploads/documents/11032026/11032026_Measures_Appear_on_Ballot.pdf';
const AMENDED_NOTICE = 'https://www.placercountyelections.gov/Uploads/documents/11032026/11032026_AMENDED_NOTICE_OF_ELECTION.pdf';
const CAPRADIO_BOARD = 'https://www.capradio.org/articles/2026/09/14/what-to-know-about-the-three-rocklin-school-board-races/';
const SACBEE_BOARD = 'https://www.yahoo.com/news/politics/articles/running-rocklin-unified-school-board-144403125.html';

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

const COUNCIL_CRITERIA: QualificationCriterion[] = [
  { id: 'budget', label: 'Municipal budget and finance oversight', detail: 'A council adopts the city budget and decides on taxes, fees and reserves.' },
  { id: 'public-safety', label: 'Public safety and services oversight', detail: 'Police, fire, 911 response, parks and roads are the city’s core services.' },
  { id: 'land-use', label: 'Land use, growth and regional planning', detail: 'Councils approve development and sit on regional transportation and planning bodies.' },
  { id: 'governance', label: 'Public-board governance experience', detail: 'Working under open-meeting, ethics and conflict-of-interest rules.' },
  { id: 'community', label: 'Community engagement and transparency', detail: 'Hearing residents and explaining decisions publicly.' },
];

const COUNCIL_LEGAL =
  'At least 18, U.S. citizen, registered voter residing within Rocklin city limits when nomination papers are issued (per the City of Rocklin).';

const SCHOOL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'School-board governance and policy', detail: 'Trustees adopt policy, approve contracts and hire and oversee the superintendent.' },
  { id: 'budget', label: 'District budget and facilities oversight', detail: 'Boards approve a multi-million-dollar budget and oversee bond-funded construction.' },
  { id: 'education', label: 'Knowledge of instruction and student needs', detail: 'Understanding curriculum, special education and career pathways.' },
  { id: 'relations', label: 'Relationships with staff, families and community', detail: 'Boards negotiate with unions and answer to parents.' },
];

const SCHOOL_LEGAL = 'At least 18, U.S. citizen, registered voter residing in the trustee area (Rocklin USD elects trustees by area).';

export const RACES_ROCKLIN_PLACER: Race[] = [
  {
    id: 'rocklin-city-council',
    categoryId: 'city',
    title: 'Rocklin City Council',
    tldrLabel: 'Rocklin City Council',
    voteFor: 2,
    seatContext: 'Two seats; both incumbents’ terms expire in December 2026',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Rocklin City Council adopts the city budget, sets local tax and fee policy, approves development and runs police, fire, parks and roads. The council also picks its own mayor each year from among its members; there is no separate mayor race.',
      'Voters choose up to two of three candidates for two four-year seats. The result decides who sits on the council while it carries out Measure C, the half-cent sales tax on the same ballot, if voters approve it.',
    ],
    introParagraphs: [
      'Incumbents Bill Halldin (vice mayor in 2026) and Jill Gayaldo (SACOG chair in 2026) are on the ballot with Walter Moore, listed as pastor and nonprofit president. The seats are nonpartisan and the county ballot designations are those printed on the ballot.',
      'We could not retrieve the Placer County voter guide candidate statements or any local news coverage of this race, so information on Moore is limited to his ballot designation (see his card).',
    ],
    legalRequirements: COUNCIL_LEGAL,
    qualificationCriteria: COUNCIL_CRITERIA,
    readingLinks: [
      { label: 'City of Rocklin: 2026 General Municipal Election', url: 'https://www.rocklin.ca.gov/198/2026-General-Municipal-Election', summary: 'Seats up, nomination dates and links to candidate information.' },
      { label: 'City of Rocklin: Bill Halldin', url: 'https://www.rocklin.ca.us/post/bill-halldin', summary: 'City biography of the incumbent.' },
      { label: 'City of Rocklin: Jill Gayaldo', url: 'https://www.rocklin.ca.gov/directory.aspx?EID=47', summary: 'City biography of the incumbent.' },
    ],
    candidates: [
      {
        id: 'bill-halldin',
        name: 'Bill Halldin',
        party: 'NP',
        role: 'Rocklin Councilmember/Businessman',
        qualification: qual(
          'extensive',
          'Rocklin councilmember since 2018 (re-elected 2022), mayor in 2022 and vice mayor in 2026, and a former Sierra College trustee.',
          [
            ['budget', 'met', 'Eight years on the council adopting city budgets; earlier served as a Sierra College trustee.'],
            ['public-safety', 'partial', 'Sits on the council that oversees Rocklin police and fire; no direct operating role.'],
            ['land-use', 'met', 'Council member since 2018; sits on the Placer County Economic Development Commission and the Western Placer Waste Management Authority board; SACOG alternate (city bio).'],
            ['governance', 'met', 'Mayor in 2022; former Sierra College trustee and chair of the Rocklin Area Chamber of Commerce.'],
            ['community', 'met', 'Founded Halldin Public Relations in Rocklin (moved there 1999); president of the Sierra College Foundation; 2018 Roseville Chamber community service award.'],
          ],
        ),
        bio: [
          'Elected to the Rocklin City Council in 2018 with the most votes and re-elected in 2022. The council unanimously chose him mayor for 2022 and he was elected vice mayor on Dec 9, 2025. He and his wife moved to Rocklin in 1999 and founded Halldin Public Relations, and he now works in media relations at a financial services company (city bio).',
          'Holds a bachelor’s degree from Northwestern and a master’s in public and private management from Yale (city bio).',
        ],
        scorecard: [
          { topic: 'Public safety', position: '? No individual statement published', comparison: 'Sits on the council that governs Rocklin police and fire.' },
          { topic: 'Budget & revenue', position: '~ Part of the council that placed Measure C (half-cent sales tax) on the ballot; his individual vote is not publicly recorded', comparison: 'Gayaldo is in the same position.' },
          { topic: 'Housing & growth', position: '? No individual statement published' },
          { topic: 'Regional transportation', position: '✓ SACOG alternate; Placer economic development commission', comparison: 'Gayaldo holds the SACOG chair seat.' },
          { topic: 'Transparency', position: '? No individual statement published' },
        ],
        endorsements: 'Endorsed school board incumbent Dereck Counter and Tiffany Saathoff (CapRadio and Sacramento Bee, Sept 2026). Endorsements for his own campaign were not retrieved.',
        notes: [
          'Council member since 2018: https://www.rocklin.ca.us/post/bill-halldin',
          'No campaign finance filings were retrieved.',
        ],
      },
      {
        id: 'jill-gayaldo',
        name: 'Jill Gayaldo',
        party: 'NP',
        role: 'Rocklin City Councilmember',
        qualification: qual(
          'extensive',
          'Rocklin councilmember since 2018, mayor in 2021 and 2025, 2026 chair of the Sacramento Area Council of Governments, and a retired school transportation director.',
          [
            ['budget', 'met', 'Eight years on the council; before that directed Elk Grove Unified’s transportation department (200+ employees, about $14 million budget).'],
            ['public-safety', 'partial', 'Sits on the council that oversees Rocklin police and fire; no direct operating role.'],
            ['land-use', 'met', 'SACOG board since 2019, chair for 2026; also Placer Mosquito and Vector Control District representative.'],
            ['governance', 'met', 'Mayor in 2021 and 2025; SACOG policy committee chair in 2024 and vice chair in 2025.'],
            ['community', 'met', 'Del Oro High School site council president; co-chair of Rocklin’s tree lighting event; family has served on the council for decades.'],
          ],
        ),
        bio: [
          'Appointed to the council in early 2018 and elected later that year, then re-elected in 2022. Served as mayor in 2021 and 2025. SACOG’s board named her 2026 chair; she has been on that regional board since 2019.',
          'Retired in 2018 as director of transportation for Elk Grove Unified School District, a department with more than 200 employees and a budget of about $14 million (SACOG and city sources).',
        ],
        scorecard: [
          { topic: 'Public safety', position: '? No individual statement published', comparison: 'Sits on the council that governs Rocklin police and fire.' },
          { topic: 'Budget & revenue', position: '~ Part of the council that placed Measure C on the ballot; her individual vote is not publicly recorded', comparison: 'Halldin is in the same position.' },
          { topic: 'Housing & growth', position: '? No individual statement published' },
          { topic: 'Regional transportation', position: '✓✓ SACOG chair for 2026; regional planning body for Sacramento-area transportation funds', comparison: 'Deeper regional role than the other candidates.' },
          { topic: 'Transparency', position: '? No individual statement published' },
        ],
        endorsements: 'Endorsements for her campaign were not retrieved.',
        notes: ['No campaign finance filings were retrieved.'],
      },
      {
        id: 'walter-moore',
        name: 'Walter Moore',
        party: 'NP',
        role: 'Pastor/Nonprofit President',
        qualification: qual(
          'limited',
          'The ballot designation is pastor and nonprofit president. We found no public record of elected office, public-board service or policy positions.',
          [
            ['budget', 'unknown', 'No public-sector budget experience found; nonprofit scale not found.'],
            ['public-safety', 'unknown', 'No documented experience found.'],
            ['land-use', 'unknown', 'No documented experience found.'],
            ['governance', 'unknown', 'Leads a nonprofit per ballot designation; no public-board service found.'],
            ['community', 'partial', 'Pastor and nonprofit president per ballot designation; details not publicly documented.'],
          ],
        ),
        bio: ['Appears on the ballot as “Pastor/Nonprofit President.” We could not retrieve his county voter guide statement or any news coverage, and found no other verified biographical detail.'],
        scorecard: [
          { topic: 'Public safety', position: '? No public statement found' },
          { topic: 'Budget & revenue', position: '? No public statement found, including on Measure C' },
          { topic: 'Housing & growth', position: '? No public statement found' },
          { topic: 'Regional transportation', position: '? No public statement found' },
          { topic: 'Transparency', position: '? No public statement found' },
        ],
        endorsements: 'None found.',
        notes: ['Read his candidate statement in the Placer County voter information guide mailed in late September 2026.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Gayaldo, Halldin', '○', 'Leftward Progressives find no progressive platform from any candidate here, so they lean weakly to Gayaldo and Halldin, whose regional transportation and planning records are at least public, over Moore, whose positions are unknown.'],
      ['LL', 'Gayaldo, Halldin', '◐', 'Loyal Liberals value institutional experience and competent governance, which Gayaldo, the 2026 SACOG chair and a two-time mayor, and Halldin, an eight-year member and former mayor, document and Moore does not.'],
      ['LO', 'Gayaldo, Halldin', '○', 'Left-Out Left voters are wary of longtime insiders, but with nothing published from Moore on costs or services they have no credible outsider to back, so they lean weakly to the incumbents’ checkable records.'],
      ['OO', 'Gayaldo, Halldin', '◐', 'Order and Opportunity Left voters want steady management of police, fire and 911 service, and Gayaldo and Halldin have eight years each of overseeing those services and adopting city budgets.'],
      ['TM', 'Gayaldo, Halldin', '○', 'Tuned-Out Middle voters judge on plain trustworthiness and concrete results, and with no published positions from anyone they lean weakly to the two incumbents whose records voters can check.'],
      ['PP', 'Gayaldo, Halldin', '◐', 'Pragmatic and Polite Right voters prize experience and steady, nonpartisan competence, which both incumbents show, though some will mind that their council put a sales tax with no end date on the ballot.'],
      ['UR', 'Halldin, Moore', '○', 'Unconventional Right voters favor smaller government and outsiders, so they pair Halldin, a businessman, with Moore, a newcomer, over the regional-planning insider Gayaldo, though Moore’s views are unpublished.', 'Unconventional Right voters who put experience first could pair Halldin with Gayaldo, a two-time mayor and 2026 SACOG chair who once ran a 200-employee school transportation department, giving up an outside voice for a second long, checkable record.'],
      ['FC', 'Halldin, Moore', '○', 'Faith First Conservatives weigh faith in public life, and Moore is a pastor who leads a nonprofit, so they pair him with Halldin, though Moore has published no positions.', 'Faith First Conservatives who prize experience could pair Halldin with Gayaldo, a two-time mayor and 2026 SACOG chair, giving up Moore’s pastoral background for a long, checkable record on budgets, police and fire.'],
      ['NA', 'Moore', '○', 'No Apologies Right voters oppose new taxes and distrust establishment officeholders, so they back only Moore, the one candidate who did not sit on the council that placed the Measure C sales tax, though his views are unpublished.'],
    ]),
    counterArguments: [
      'OO/PP (Gayaldo, Halldin ◐): But consider Moore, because both incumbents sit on the council that put a sales tax with no end date before voters, and a newcomer could bring a different view.',
      'FC/NA (Moore ○): But consider Gayaldo and Halldin, because Moore has published no positions or record on budgets or public safety, while both incumbents have eight years of checkable votes.',
    ],
  },
  {
    id: 'rusd-trustee-area-4',
    categoryId: 'school',
    title: 'Rocklin Unified School District, Trustee Area 4',
    tldrLabel: 'Rocklin USD, Area 4',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Rocklin Unified board adopts the budget, sets policy, approves labor contracts, hires the superintendent and oversees construction spending, including any bond money from Measure D. Trustees are elected by area for the first time this year (Sacramento Bee).',
      'Area 4 covers west Rocklin, including Rock Creek, Ruhkala and Twin Oaks elementary schools, and has no incumbent. The winner joins a board that is divided over a 2023 parental notification policy still in litigation and over its relationship with the teachers union.',
    ],
    introParagraphs: [
      'Rebecca Hoehne, a credentialed teacher and realtor, is endorsed by the Placer County Republican Party and four current trustees. Steve Makis, an insurance territory manager, is endorsed by the Rocklin Teachers Professional Association and trustee Michelle Sutherland. The office is nonpartisan.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    readingLinks: [
      { label: 'CapRadio: what to know about the three Rocklin school board races (Sept 14, 2026)', url: CAPRADIO_BOARD, summary: 'Profiles of all six candidates, endorsements and the issues dividing the board.' },
      { label: 'Sacramento Bee: Who’s running for Rocklin Unified school board? (Sept 22, 2026)', url: SACBEE_BOARD, summary: 'Short candidate profiles and endorsement lists.' },
    ],
    candidates: [
      {
        id: 'rebecca-hoehne',
        name: 'Rebecca Hoehne',
        party: 'NP',
        role: 'Teacher/Businesswoman/Mom',
        qualification: qual(
          'some',
          'More than 20 years of full-time and substitute teaching, a seat on the district’s LCAP committee, and small-business experience, but no prior board service.',
          [
            ['governance', 'partial', 'LCAP committee member; no elected or board service found.'],
            ['budget', 'partial', 'Business owner and realtor; the LCAP committee reviews how the district targets state funds.'],
            ['education', 'met', 'Credentialed teacher with 20+ years of full-time and substitute teaching (Sacramento Bee).'],
            ['relations', 'partial', 'Says she has attended board meetings for a year and met with Sierra College leaders; teachers union endorsed her opponent.'],
          ],
        ),
        bio: [
          'Credentialed teacher, realtor and small-business owner with two children in the district. Says she has attended board meetings for the past year (CapRadio).',
          'Wants to build on college and career readiness, expand dual enrollment with Sierra College and explore an associate’s degree track for graduates.',
        ],
        scorecard: [
          { topic: 'Academics & career pathways', position: '✓✓ Sierra College dual enrollment, associate’s degree track, college and career readiness', comparison: 'Makis stresses multiple pathways including trades.' },
          { topic: 'Parental notification policy', position: '✓ Supports the board’s legal defense of the 2023 policy; notes outside counsel has been pro bono', comparison: 'Makis wants to refocus on students after what he calls division on the board.' },
          { topic: 'Budget & facilities', position: '? Not detailed in coverage', comparison: 'Makis stresses long-term enrollment and financial planning.' },
          { topic: 'Relations with staff', position: '? Not detailed in coverage', comparison: 'Makis and the teachers union say the board has caused division.' },
          { topic: 'Conflicts of interest', position: '✓ Says she has none and that Makis does', comparison: 'Makis’s wife is a district principal.' },
        ],
        endorsements: 'Placer County Republican Party, Placer County Republican Assembly, Rocklin Mayor David Bass, Supervisors Bonnie Gore and Shanti Landon, trustees Julie Hupp, Rachelle Price, Dereck Counter and Tiffany Saathoff (CapRadio, Sept 14, 2026).',
        notes: ['The Sacramento Bee lists her ballot designation and occupation as realtor and former teacher.'],
      },
      {
        id: 'steve-makis',
        name: 'Steve Makis',
        party: 'NP',
        role: 'Parent/Territory Manager',
        qualification: qual(
          'some',
          'Two decades as a Rocklin parent and local volunteer leader (parks commission, chamber, tourism board) but no prior school board service; his spouse is a district principal.',
          [
            ['governance', 'partial', 'Rocklin Parks and Recreation Commission, Placer Valley Tourism board, youth soccer board; no school board service.'],
            ['budget', 'partial', 'Business role as an insurance territory manager; coverage cites long-term financial planning as a priority.'],
            ['education', 'partial', 'Parent of two Whitney High graduates; no classroom experience reported.'],
            ['relations', 'partial', 'Endorsed by the Rocklin Teachers Professional Association; wife’s district job creates recusal limits.'],
          ],
        ),
        bio: [
          'Insurance territory manager who has lived in Rocklin for 20+ years; both children graduated from Whitney High. Served on the Rocklin Parks and Recreation Commission and the boards of Placer Valley Tourism and Rocklin youth soccer.',
          'Wants academic support for struggling students, campus safety, long-term enrollment and financial planning, and multiple pathways including college, CTE and skilled trades.',
        ],
        scorecard: [
          { topic: 'Academics & career pathways', position: '✓ Multiple pathways: college, CTE, skilled trades', comparison: 'Hoehne emphasizes Sierra College dual enrollment and an associate’s degree track.' },
          { topic: 'Parental notification policy', position: '? Not detailed in coverage; says the board has created chaos or division', comparison: 'Hoehne supports the board’s legal defense of the policy.' },
          { topic: 'Budget & facilities', position: '✓ Long-term enrollment and financial planning; directing money to classrooms', comparison: 'Hoehne did not describe a budget priority in coverage.' },
          { topic: 'Relations with staff', position: '✓ Teachers union endorsement; wants to refocus on students', comparison: 'Hoehne is endorsed by the sitting board majority.' },
          { topic: 'Conflicts of interest', position: '~ Wife is a district principal; says she agreed not to seek promotion and he would recuse where law requires', comparison: 'Hoehne says she has no such conflict.' },
        ],
        endorsements: 'Rocklin Teachers Professional Association, Placer County Superintendent Gayle Garbolino-Mojica, trustee Michelle Sutherland, several retired superintendents (CapRadio, Sept 14, 2026).',
        redFlags: [
          {
            severity: 'notable',
            status: 'disputed',
            text: 'Makis’s wife is a principal in the Rocklin Unified School District. His opponent says this is a conflict of interest. Makis says state law bars him from voting on matters that single out his spouse, that she has agreed not to seek a promotion while he serves, and that he would consult district counsel and recuse himself.',
            whyItMatters: 'A trustee votes on district labor contracts, budgets and personnel policy that can affect a spouse who works for the district.',
            sources: [{ label: 'CapRadio, Sept 14, 2026', url: CAPRADIO_BOARD }],
          },
        ],
        notes: ['The Sacramento Bee lists past roles including Rocklin Area Chamber of Commerce chair.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Makis', '◐', 'Leftward Progressives back labor and oppose the parental notification fight, so they favor Makis, endorsed by the teachers union, over the Republican-endorsed Hoehne, though his spouse’s district job is a real conflict concern.'],
      ['LL', 'Makis', '◐', 'Loyal Liberals trust educators and expert judgment, and Makis is endorsed by the county superintendent of schools, several retired superintendents and the teachers union, though his wife’s job as a district principal limits some votes.'],
      ['LO', 'Makis', '○', 'Left-Out Left voters side with working teachers, who endorsed Makis, but they distrust anything that looks like self-dealing, so his wife’s job as a district principal keeps their lean weak.'],
      ['OO', 'Hoehne / Makis', '=', 'Order and Opportunity Left voters weigh calmer schools against their views on gender: if campus safety, pathways into the skilled trades and less culture-war conflict matter most, Makis, though his wife is a district principal; if defending the parental notification policy matters more, Hoehne, a credentialed teacher of 20-plus years.'],
      ['TM', 'Hoehne', '○', 'Tuned-Out Middle voters lean socially conservative on gender identity and value plain classroom experience, which Hoehne, a credentialed teacher of 20-plus years, offers, with no strong signal either way.'],
      ['PP', 'Makis', '○', 'Pragmatic and Polite Right voters want a calmer board and fewer costly legal fights, which Makis promises with backing from veteran school administrators, though his spousal conflict and their own views on gender temper the lean.'],
      ['UR', 'Hoehne', '◐', 'Unconventional Right voters overwhelmingly say gender is set at birth and favor Hoehne’s support for defending the parental notification policy, plus her small-business background.'],
      ['FC', 'Hoehne', '●', 'Faith First Conservatives put parental rights first, and Hoehne supports the board’s legal defense of the 2023 notification policy, with backing from the board majority that adopted it.'],
      ['NA', 'Hoehne', '●', 'No Apologies Right voters want trustees who keep fighting the state on parental notification and won’t defer to the teachers union, which describes Hoehne and her board-majority endorsers.'],
    ]),
    counterArguments: [
      'FC/NA (Hoehne ●): But consider Makis, because the notification litigation has cost board time and its pro bono counsel may not last, and he says state law and recusal address the conflict she raises.',
      'LP/LL (Makis ◐): But consider Hoehne, because Makis’s wife is a district principal, so recusal limits his votes on some labor and personnel matters, and Hoehne brings 20-plus years of classroom teaching.',
    ],
  },
  {
    id: 'rusd-trustee-area-5',
    categoryId: 'school',
    title: 'Rocklin Unified School District, Trustee Area 5',
    tldrLabel: 'Rocklin USD, Area 5',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Rocklin Unified board adopts the budget, sets policy, approves labor contracts, hires the superintendent and oversees construction spending, including any bond money from Measure D.',
      'Area 5 covers north and northwest Rocklin, including Whitney High and Sunset Ranch and Quarry Trail elementary schools. The incumbent is part of the board majority that adopted the 2023 parental notification policy; the challenger ran specifically over that policy and the litigation it produced.',
    ],
    introParagraphs: [
      'Dereck Counter, a trustee since 2018, faces Jacob Boyce, an economist and former charter-school board president. Counter is endorsed by the county Republican Party, Assemblymember Joe Patterson and council members Halldin, Broadway and Janda; Boyce is endorsed by the Placer County Democratic Party and the Rocklin Teachers Professional Association. The office is nonpartisan.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    readingLinks: [
      { label: 'CapRadio: what to know about the three Rocklin school board races (Sept 14, 2026)', url: CAPRADIO_BOARD, summary: 'Profiles of all six candidates, endorsements and the issues dividing the board.' },
      { label: 'Sacramento Bee: Who’s running for Rocklin Unified school board? (Sept 22, 2026)', url: SACBEE_BOARD, summary: 'Short candidate profiles and endorsement lists.' },
    ],
    candidates: [
      {
        id: 'dereck-counter',
        name: 'Dereck Counter',
        party: 'NP',
        role: 'RUSD Trustee',
        qualification: qual(
          'extensive',
          'Rocklin Unified trustee since 2018, re-elected in 2022, with two terms of budget, policy and bargaining votes.',
          [
            ['governance', 'met', 'Trustee since 2018; re-elected 2022.'],
            ['budget', 'met', 'Eight years of district budget votes; cites fiscal discipline and warns about Sacramento City Unified’s budget troubles.'],
            ['education', 'partial', 'Parent of Whitney High graduates; works for a medical testing company; cites rising math scores and CTE expansion as board outcomes.'],
            ['relations', 'partial', 'Board is in a dispute with the teachers union; the union endorsed his opponent.'],
          ],
        ),
        bio: [
          'First elected in 2018 and re-elected in 2022. Moved to Rocklin from Southern California in 2011; his children graduated from Whitney High. Works for a medical testing company (CapRadio).',
          'Backs Measure D, saying aging campuses need repairs such as roofs and windows, and wants one parental notification policy across TK-12.',
        ],
        recordVsChange:
          'Counter points to rising math scores, CTE growth and the Measure D facilities plan; Boyce argues the board wasted time and money on the 2023 policy litigation and soured relations with staff. Voters weighing change are choosing between continuity on those policies and a repaired relationship with teachers.',
        scorecard: [
          { topic: 'Academics & career pathways', position: '✓ Rising math scores, “whiteboard learning” as a model, CTE expansion', comparison: 'Boyce criticizes the board for not adopting a science curriculum after a monthslong review.' },
          { topic: 'Parental notification policy', position: '✓✓ Voted for it; wants one policy across TK-12', comparison: 'Boyce calls the policy and litigation “a tremendous waste of time and money.”' },
          { topic: 'Budget & facilities', position: '✓✓ Fiscal discipline; backs Measure D bond', comparison: 'Boyce, an economist, also stresses fiscal oversight.' },
          { topic: 'Relations with staff', position: '~ Compared the union’s bargaining complaint to a workplace management decision', comparison: 'Boyce says the district and unions came close to a strike within the past year.' },
          { topic: 'Board role', position: '✓ Continuous improvement of current direction', comparison: 'Boyce wants oversight without overriding professional staff.' },
        ],
        endorsements: 'Placer County Republican Party, Assemblymember Joe Patterson, Rocklin council members Bill Halldin, Ken Broadway and Greg Janda, trustees Tiffany Saathoff, Rachelle Price and Julie Hupp (CapRadio, Sept 14, 2026).',
        notes: ['The Sacramento Bee lists his priorities as fiscal policy, parental communication, local control and “the integrity of girls sports.”'],
      },
      {
        id: 'jacob-boyce',
        name: 'Jacob Boyce',
        party: 'NP',
        role: 'Parent/Data Analyst',
        qualification: qual(
          'some',
          'About 15 years in finance and economics and four years on a charter school board (including president and vice president), but no experience on the Rocklin district board.',
          [
            ['governance', 'met', 'Four years on the Maria Montessori Charter Academy board, including president and vice president, until June 2026.'],
            ['budget', 'met', 'Economist by training with about 15 years of finance and economics experience (Sacramento Bee).'],
            ['education', 'partial', 'Charter-school board service and parent of a Whitney High freshman; no classroom role reported.'],
            ['relations', 'partial', 'Endorsed by the Rocklin Teachers Professional Association; says he agrees with “80 or 85%” of board decisions.'],
          ],
        ),
        bio: [
          'Economist by training who served four years on the Maria Montessori Charter Academy board until June 2026. Parent of a Whitney High freshman.',
          'Says he ran over the 2023 parental notification policy and the litigation that followed, and wants to repair the board’s relationship with staff.',
        ],
        scorecard: [
          { topic: 'Academics & career pathways', position: '~ Criticizes the board for not adopting a science curriculum after a monthslong review', comparison: 'Counter cites rising math scores and CTE growth as board wins.' },
          { topic: 'Parental notification policy', position: '✗ Calls the policy litigation “a tremendous waste of time and money”', comparison: 'Counter voted for the policy and wants it across TK-12.' },
          { topic: 'Budget & facilities', position: '✓ Fiscal discipline and financial oversight; position on Measure D not found', comparison: 'Counter backs Measure D.' },
          { topic: 'Relations with staff', position: '✓✓ Wants to repair relations; says district and unions nearly struck', comparison: 'Counter compared the union’s bargaining complaint to a workplace management decision.' },
          { topic: 'Board role', position: '✓ Community oversight without overriding professional staff; no partisan agendas', comparison: 'Counter’s board majority is endorsed by the county Republican Party.' },
        ],
        endorsements: 'Placer County Democratic Party, Rocklin Teachers Professional Association (CapRadio and Sacramento Bee, Sept 2026).',
        notes: ['His position on Measure D was not found in the coverage reviewed.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Boyce', '●', 'Leftward Progressives oppose the parental notification policy and back labor, and Boyce, endorsed by the teachers union, calls the policy litigation “a tremendous waste of time and money.”'],
      ['LL', 'Boyce', '●', 'Loyal Liberals value expertise and respect for professional staff, and Boyce brings economics training, charter-board leadership and a pledge to oversee without overriding educators.'],
      ['LO', 'Boyce', '◐', 'Left-Out Left voters side with working teachers after the district came close to a strike, so they favor Boyce, the union-backed challenger, over a long-serving incumbent, though Boyce is party-backed too.', 'Left-Out Left voters who put experience first could keep Counter, with eight years of district budget and bargaining votes, but that means backing the board majority behind the parental notification litigation and the strained talks with teachers.'],
      ['OO', 'Counter / Boyce', '=', 'Order and Opportunity Left voters are pro-worker but many share Counter’s view on parental notification: if repairing relations with staff after a near-strike matters most, Boyce; if the notification policy and a trustee since 2018 who points to rising math scores and career-tech growth matter more, Counter.'],
      ['TM', 'Counter', '○', 'Tuned-Out Middle voters lean socially conservative on gender and value a known record, so they lean weakly to Counter, who cites rising math scores and backs campus repairs.'],
      ['PP', 'Counter', '◐', 'Pragmatic and Polite Right voters value continuity, fiscal discipline and incremental improvement in a well-performing district, which Counter offers, though they may share Boyce’s concern about costly litigation.'],
      ['UR', 'Counter', '◐', 'Unconventional Right voters overwhelmingly say gender is set at birth and want lean budgets, so they back Counter’s parental notification vote, focus on girls’ sports and fiscal discipline.'],
      ['FC', 'Counter', '●', 'Faith First Conservatives put parental rights first, and Counter voted for the parental notification policy and wants it applied across TK-12.'],
      ['NA', 'Counter', '●', 'No Apologies Right voters want trustees who stand firm against the teachers union and the state on gender policy, which Counter has done.'],
    ]),
    counterArguments: [
      'FC/NA (Counter ●): But consider Boyce, because the notification litigation consumed time and money and the district nearly faced a strike, which Counter’s fiscal-discipline pitch does not address.',
      'LP/LL (Boyce ●): But consider Counter, because he has eight years of district budget votes and points to rising math scores, while Boyce has never served on the Rocklin board.',
    ],
  },
  {
    id: 'placer-measure-g',
    categoryId: 'local-measures',
    title: 'Placer County Measure G: Board of Supervisors vacancy timeline',
    tldrLabel: 'Placer Measure G: Supervisor vacancies',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Today the remaining supervisors must fill a vacancy on the five-member board by unanimous vote within 30 days. Supervisors set county budgets, land-use rules and public safety funding, so who fills a vacated seat, and how fast, can change board votes.',
    ],
    introParagraphs: [
      'The board advanced charter amendments recommended by a county charter review committee (Hoodline, July 2026). Two are on the Nov. 3 ballot (this one and Measure H); a third, on supervisor compensation, is set for Nov. 7, 2028.',
    ],
    measure: {
      question:
        'Shall the measure amending Article II, Section 206 of the Placer County Charter to extend the deadline for filling a vacancy on the Board of Supervisors from 30 days to 60 days, providing additional time for the Board to make an appointment before the Governor fills the vacancy, and requiring vacancies occurring 130 days or more before a statewide direct primary election be filled temporarily by appointment and placed on the ballot at that election, be adopted?',
      yesMeans: 'Gives supervisors 60 days instead of 30 to fill a vacancy before the governor appoints, and puts the seat on the next statewide primary ballot if it opens 130+ days before.',
      noMeans: 'Keeps the 30-day deadline for supervisors to fill a vacancy before the governor appoints, and current rules on when appointees face voters.',
      funding: {
        asOf: 'Oct. 12, 2026',
        note: 'News coverage reports no campaign committee for or against it, but we couldn’t search the filings directly; check the source below for the latest.',
        sources: [
          { label: 'Placer County Elections: campaign finance disclosure', url: 'https://www.placercountyelections.gov/campaign-finance-disclosure/' },
        ],
      },
      positions: [
        { org: 'Placer County Republican Party', kind: 'party', position: 'No position', url: 'https://placergop.org/endorsements/' },
      ],
      measureType: 'County charter amendment',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'The ballot label and county announcement identify no cost; none was found in the sources reviewed. A vacancy that requires a special placement on a primary ballot would be an election cost incurred only if a vacancy occurs.',
      supporters: 'Placer County Board of Supervisors (5-0 vote to advance, July 14, 2026); recommended by the county charter review committee.',
      opponents: 'No organized opposition found.',
      voterConnection: [
        'If the board cannot agree within the deadline, the governor picks the replacement.',
        'Appointees would face voters at the next statewide primary if the vacancy occurs 130 or more days before it, instead of serving most of the remainder without an election.',
      ],
      mechanismBullets: [
        'The summaries reviewed do not say whether the unanimity requirement changes.',
        'Takes effect as provided by state law if approved; if rejected, the 30-day rule remains.',
      ],
      argumentsFor: [
        'More time for recruitment and interviews of applicants (county announcement).',
        'Reduces the chance of a governor appointing a supervisor for a local district.',
        'Clarifies when a vacancy must go to voters at a statewide primary.',
      ],
      argumentsAgainst: [
        'Sixty days could leave a seat empty longer.',
        'A four-supervisor board risks 2-2 splits.',
        'An appointment still bypasses voters until the next primary.',
      ],
      readingLinks: [
        { label: 'Placer County: charter amendments approved to go before voters', url: 'https://www.placer.ca.gov/10984/Charter-amendments', summary: 'County explanation of the vacancy and CEO-removal amendments.' },
        { label: 'Placer County Elections: Measures to Appear on Ballot', url: MEASURES_PDF, summary: 'Official ballot text for Measures G and H.' },
        { label: 'Hoodline: Placer supes put pay overhaul and power rules on 2026 ballot', url: 'https://hoodline.com/2026/07/placer-supes-put-pay-overhaul-and-power-rules-on-2026-ballot/', summary: 'July 2026 summary of the 5-0 vote.' },
        { label: 'Sacramento Bee: Your guide to Placer County Measures H and G and Roseville Measure A (Oct 14)', url: 'https://www.yahoo.com/news/politics/articles/guide-placer-county-measures-h-160739474.html', summary: 'Explains the vacancy deadline change, when a vacancy goes to voters, and notes that no official arguments were filed.' },
        { label: 'Sacramento Bee: Placer County Measures H, G and A: 2026 voter guide (Oct 14)', url: 'https://www.sacbee.com/news/politics-government/election/voter-guide/article317117935.html', summary: 'Original Bee voter guide explaining the vacancy deadline change and when a vacancy goes to voters.' },
      ],
      explainerUrl: 'https://www.sacbee.com/news/politics-government/election/voter-guide/article317117935.html',
    },
    crossTypology: ct([
      ['LP', 'Yes', '○', 'Leftward Progressives want voters, not officials, to choose who represents them, and this measure sends more mid-term appointees to face voters at the next statewide primary.'],
      ['LL', 'Yes', '◐', 'Loyal Liberals value orderly, expert-reviewed process, and this change came from the county’s charter review committee and passed the board 5-0.'],
      ['LO', 'Yes', '○', 'Left-Out Left voters want officials accountable to voters, and making more appointees stand at the next primary is a modest step that way, though appointments still bypass voters for a while.'],
      ['OO', 'Yes', '○', 'Order and Opportunity Left voters favor steady, orderly government, and more recruiting time plus a clear rule for when a seat goes to voters fits that.'],
      ['TM', '—', '—', 'Tuned-Out Middle voters focus on costs and services, and this procedural change touches only rare vacancies, so this column skips it.'],
      ['PP', 'Yes', '◐', 'Pragmatic and Polite Right voters prefer careful, incremental fixes, and giving the board more time to vet applicants while keeping the seat local is exactly that.'],
      ['UR', 'Yes', '○', 'Unconventional Right voters distrust Sacramento and would rather the county fill a seat than the governor, with a weak lean because the change is procedural.'],
      ['FC', 'Yes', '○', 'Faith First Conservatives favor local control over a governor’s appointment, though they have no signature stake in this procedural change.'],
      ['NA', 'Yes', '◐', 'No Apologies Right voters want to keep the governor from picking a supervisor in a conservative county, and more time for the board to act makes that less likely.'],
    ]),
    hinges: {
      LP: 'Yes if putting more mid-term vacancies on the next primary ballot gives voters more say. No if a longer 60-day window that could leave a seat empty, with appointees serving until the primary, bothers you more.',
      LL: 'Yes if a charter committee’s recommendation for more recruiting time and less chance of a governor’s pick makes for orderly local process. No if a seat sitting empty longer, with a four-member board at risk of 2-2 splits, seems the bigger problem.',
      LO: 'Yes if sending more appointees to face voters at the next statewide primary is a step toward accountability. No if letting supervisors pick a colleague, with more time to do it, still looks like insiders bypassing voters.',
      OO: 'Yes if more time to vet applicants and a clear rule for when a seat goes to voters make county government steadier. No if you’d rather a vacancy be filled fast, keeping the 30-day deadline before the governor steps in.',
      TM: 'Yes if you want your district’s seat filled locally rather than by the governor, even if it takes longer. No if a seat staying empty up to 60 days means your area goes unrepresented on board votes for too long.',
      PP: 'Yes if more time to recruit and interview applicants, decided locally, is a sensible, careful fix. No if a longer empty seat and a risk of 2-2 board splits outweigh the extra recruiting time.',
      UR: 'Yes if you’d rather the county’s own board fill a seat than a Sacramento governor’s pick. No if any appointee serving without an election until the next statewide primary looks like bypassing voters.',
      FC: 'Yes if you lean toward local appointments over the governor’s in a procedural change with little else at stake. No if a seat left empty longer, or filled without a vote until the primary, troubles you more.',
      NA: 'Yes if keeping the governor from appointing a Placer supervisor matters most to you. No if you’d rather supervisors face voters than be picked by their colleagues, however long the board takes.',
    },
    counterArguments: [
      'PP/NA (Yes ◐): But consider No, because a seat could sit empty up to 60 days, a four-member board risks 2-2 splits, and any appointee still serves without an election until the next primary.',
    ],
  },
  {
    id: 'placer-measure-h',
    categoryId: 'local-measures',
    title: 'Placer County Measure H: County Executive Officer removal procedures',
    tldrLabel: 'Placer Measure H: CEO removal',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'The County Executive Officer runs the county’s day-to-day operations and budget for the Board of Supervisors, so how easily the CEO can be removed shapes how stable and accountable county management is. The board says contract flexibility helps recruit and keep top executives.',
    ],
    introParagraphs: [
      'This amendment and Measure G came from the county’s charter review committee and are on the Nov. 3, 2026 ballot.',
    ],
    measure: {
      question:
        'Shall the measure amending Article V, Section 502(a) of the Placer County Charter to allow alternative procedures for the removal of the County Executive Officer if specified in an employment agreement, providing greater flexibility in negotiating employment terms for recruitment and retention, while preserving Board of Supervisors’ oversight, be adopted?',
      yesMeans: 'Lets the County Executive Officer’s employment agreement set different removal procedures; without such terms, three supervisors can still remove the CEO.',
      noMeans: 'Keeps the charter rule that three supervisors can remove the County Executive Officer, with no option for a contract to set different procedures.',
      funding: {
        asOf: 'Oct. 12, 2026',
        note: 'News coverage reports no campaign committee for or against it, but we couldn’t search the filings directly; check the source below for the latest.',
        sources: [
          { label: 'Placer County Elections: campaign finance disclosure', url: 'https://www.placercountyelections.gov/campaign-finance-disclosure/' },
        ],
      },
      positions: [
        { org: 'Placer County Republican Party', kind: 'party', position: 'No position', url: 'https://placergop.org/endorsements/' },
      ],
      measureType: 'County charter amendment',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'The ballot label and county announcement identify no cost; no county counsel or auditor figure was found in the sources reviewed. Any severance or contract terms would be negotiated by the board in an employment agreement.',
      supporters: 'Placer County Board of Supervisors (5-0 vote to advance, July 14, 2026); recommended by the county charter review committee.',
      opponents: 'No organized opposition found.',
      voterConnection: [
        'The default stays the same: three supervisors can remove the CEO unless an employment agreement says otherwise.',
        'A contract could make removal harder or easier; a board majority would decide that when negotiating with a candidate.',
      ],
      mechanismBullets: [
        'If rejected, the current charter language remains.',
      ],
      argumentsFor: [
        'Gives the board more flexibility to recruit and retain a strong CEO (county announcement).',
        'Keeps the board’s oversight authority.',
        'Lets the board match what other counties offer in contracts.',
      ],
      argumentsAgainst: [
        'A contract could lock in removal procedures that are harder for a future board to use.',
        'Contract terms are negotiated by the board, so voters would have less direct say over them.',
      ],
      readingLinks: [
        { label: 'Placer County: charter amendments approved to go before voters', url: 'https://www.placer.ca.gov/10984/Charter-amendments', summary: 'County explanation of the amendments.' },
        { label: 'Placer County Elections: Measures to Appear on Ballot', url: MEASURES_PDF, summary: 'Official ballot text for Measures G and H.' },
        { label: 'Hoodline: Placer supes put pay overhaul and power rules on 2026 ballot', url: 'https://hoodline.com/2026/07/placer-supes-put-pay-overhaul-and-power-rules-on-2026-ballot/', summary: 'July 2026 summary of the 5-0 vote.' },
        { label: 'Sacramento Bee: Your guide to Placer County Measures H and G and Roseville Measure A (Oct 14)', url: 'https://www.yahoo.com/news/politics/articles/guide-placer-county-measures-h-160739474.html', summary: 'Explains how CEO contracts could set different removal procedures, and notes that no official arguments were filed.' },
        { label: 'Sacramento Bee: Placer County Measures H, G and A: 2026 voter guide (Oct 14)', url: 'https://www.sacbee.com/news/politics-government/election/voter-guide/article317117935.html', summary: 'Original Bee voter guide explaining how CEO contracts could set different removal procedures.' },
      ],
      explainerUrl: 'https://www.sacbee.com/news/politics-government/election/voter-guide/article317117935.html',
    },
    crossTypology: ct([
      ['LP', 'No', '○', 'Leftward Progressives distrust arrangements that protect powerful executives, and a contract that makes the county’s top manager harder to remove gives voters’ elected board less control.'],
      ['LL', 'Yes', '◐', 'Loyal Liberals value professional management, and the charter review committee says contract flexibility helps recruit and keep a capable executive while the board keeps oversight.'],
      ['LO', 'No', '◐', 'Left-Out Left voters suspect insiders of protecting each other, and letting a negotiated contract shield an unelected administrator from easy removal is the kind of deal they distrust.'],
      ['OO', 'Yes', '○', 'Order and Opportunity Left voters want steady, competent county management, and better tools to recruit an executive fit that, with a weak lean because the stakes are hard to see.'],
      ['TM', '—', '—', 'Tuned-Out Middle voters focus on bills and services, and contract terms for a county executive don’t touch those directly, so this column skips it.'],
      ['PP', 'Yes', '○', 'Pragmatic and Polite Right voters favor businesslike, competent management and the board kept its three-vote default, so they lean Yes, though they prefer simple rules.'],
      ['UR', 'No', '○', 'Unconventional Right voters are skeptical of the establishment and lean against anything that could make an unelected official harder to fire.'],
      ['FC', '—', '—', 'Faith First Conservatives have no social or family stake in an administrative contract rule, so this column skips it.'],
      ['NA', 'No', '◐', 'No Apologies Right voters want bureaucrats easy to fire, and a contract that locks in harder removal for a future board runs against that.'],
    ]),
    hinges: {
      LP: 'Yes if contract flexibility that helps recruit a strong county executive, with board oversight kept, seems sensible. No if a contract could lock in removal rules that a future board elected by voters would find harder to use.',
      LL: 'Yes if professional county management and contracts competitive with other counties help recruit and keep a strong executive. No if you’d rather keep the simple three-vote removal rule than let each contract set its own terms.',
      LO: 'Yes if the default three-vote removal rule and board approval of each contract give enough oversight. No if letting a contract make a powerful administrator harder to remove gives voters too little say.',
      OO: 'Yes if helping the county hire and keep a capable manager makes services run better. No if you want the charter, not a negotiated contract, to set how the county’s top manager can be removed.',
      TM: 'Yes if helping the county hire and keep a capable manager for daily operations and the budget seems worthwhile. No if contract terms negotiated out of voters’ direct view make you uneasy about who runs the county.',
      PP: 'Yes if businesslike hiring flexibility, with the three-vote default still in place, is a practical fix. No if a contract that locks in harder removal for a future board is a risk you’d rather not take.',
      UR: 'Yes if the board still approving each contract and keeping the three-vote default answers your concerns. No if anything that could make an unelected official harder to remove is a step you won’t take.',
      FC: 'Yes if you trust the board to use contract flexibility to hire and keep a strong county executive. No if you’d rather the charter keep one clear removal rule than leave it to contract talks.',
      NA: 'Yes if attracting a top executive matters more than keeping the simplest firing rule. No if a future board should always be able to remove the county’s top bureaucrat with three votes, no contract terms attached.',
    },
    counterArguments: [
      'LO/NA (No ◐): But consider Yes, because the amendment keeps the three-vote removal rule as the default and the board must approve any contract that changes it.',
      'LL (Yes ◐): But consider No, because a contract signed by one board could bind a future board’s ability to remove the executive.',
    ],
  },
  {
    id: 'rocklin-measure-c',
    categoryId: 'local-measures',
    title: 'Rocklin Measure C: Half-cent sales tax',
    tldrLabel: 'Rocklin Measure C: Sales tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure C would raise Rocklin’s sales tax rate from 7.25% to 7.75%, matching Roseville (Sacramento Bee). The city says it is not in an immediate financial crisis but long-term forecasts show structural deficits if nothing changes; the choice is whether to raise revenue now.',
    ],
    introParagraphs: [
      'The City Council placed the tax on the Nov. 3 ballot in June 2026. Placer County first printed the threshold as two-thirds, then issued an amended notice stating it requires a simple majority (county notice, Aug 2026).',
    ],
    measure: {
      question:
        'To maintain Rocklin’s public safety, financial stability and core public services, including: rapid 911 emergency/medical response; police/fire protection; keeping public areas and parks healthy/safe/clean; preserving open space; preventing wildfires; shall the City of Rocklin’s measure establishing a half-cent sales tax, providing approximately $8 million annually for general revenue purposes, until ended by voters, keeping all funds local, with annual audits/public spending disclosure, be adopted?',
      yesMeans: 'Raises Rocklin’s sales tax from 7.25% to 7.75% as early as April 2027, bringing about $8 million a year for any city service until voters end it.',
      noMeans: 'Keeps Rocklin’s sales tax at 7.25%, and the city addresses projected long-term deficits without this revenue.',
      funding: {
        asOf: 'Oct. 12, 2026',
        note: 'News coverage reports no campaign committee for or against it, but we couldn’t search the filings directly; check the source below for the latest.',
        sources: [
          { label: 'City of Rocklin: campaign disclosure eRetrieval portal', url: 'https://www.southtechhosting.com/RocklinCity/CampaignDocsWebRetrieval/' },
          { label: 'Sacramento Bee: guide to sales tax measures in Rocklin, Lincoln and Colfax (Oct. 2026)', url: 'https://www.yahoo.com/news/politics/articles/guide-sales-tax-measures-rocklin-164747231.html' },
        ],
      },
      positions: [
        { org: 'Placer County Republican Party', kind: 'party', position: 'No', url: 'https://placergop.org/endorsements/' },
      ],
      measureType: 'General tax (city transactions and use tax)',
      voteThreshold: 'Simple majority (the county’s amended notice corrected an earlier “2/3” misprint)',
      fiscalImpact:
        'About $8 million a year for general revenue purposes (ballot label). A city FAQ from October 2025 had estimated about $9 million. Revenue goes to the general fund, so it can pay for any lawful city service. The state tax agency would administer it; it would take effect as early as April 1, 2027, and continue until repealed by voters.',
      supporters: 'City of Rocklin and the City Council, which placed it on the ballot. Printed ballot arguments were not retrieved.',
      opponents: 'Placer County Republican Party. No argument against it was submitted for the ballot (Sacramento Bee), and no organized No campaign was found.',
      voterConnection: [
        'Shoppers pay an extra 5 cents on a $10 purchase of taxable goods in Rocklin; groceries and most prescription drugs are exempt under California law.',
        'It has no end date; only voters can repeal it.',
      ],
      mechanismBullets: [
        'Voters within city limits registered by Oct. 19 may vote on it.',
      ],
      argumentsFor: [
        'The city’s population has doubled over 25 years while service levels stayed relatively flat (city FAQ).',
        'Heads off projected structural deficits without cutting services.',
        'Funds stay local, with annual audits and public reporting.',
        'Visitors who shop in Rocklin pay part of it; Roseville’s 2018 half-cent measure passed with 62%.',
      ],
      argumentsAgainst: [
        'A general tax carries no legal guarantee that the money goes to police, fire or parks.',
        'Sales taxes are regressive, taking a larger share of lower incomes.',
        'Rocklin would join the highest local sales tax rate in Placer County, which could push some shoppers to neighboring cities.',
      ],
      readingLinks: [
        { label: 'City of Rocklin: Measure C', url: 'https://www.rocklin.ca.gov/693/Measure-C', summary: 'City page with the ballot text and background (city-sponsored).' },
        { label: 'City of Rocklin: Measure C FAQ', url: 'https://www.rocklin.ca.gov/DocumentCenter/View/1807/Measure-C-FAQs', summary: 'City FAQ; supportive of the measure.' },
        { label: 'Placer County: amended notice of election (majority vote correction)', url: AMENDED_NOTICE, summary: 'Official correction of the vote requirement for Measure C.' },
        { label: 'Sacramento Bee: Rocklin voters may decide on half-cent sales tax (June 2026)', url: 'https://www.yahoo.com/news/politics/articles/rocklin-voters-may-decide-half-142738960.html', summary: 'Compares sales tax rates across Placer County cities.' },
        { label: 'Sacramento Bee: Rocklin City Council to vote on adding a sales-tax increase (June 2026)', url: 'https://www.yahoo.com/news/politics/articles/rocklin-city-council-vote-adding-210459170.html', summary: 'Council action and city rationale.' },
        { label: 'Sacramento Bee: Your guide to sales tax measures in Rocklin, Lincoln and Colfax (Oct 12)', url: 'https://www.yahoo.com/news/politics/articles/guide-sales-tax-measures-rocklin-164747231.html', summary: 'Explains the rate change, expected revenue and duration, and who signed the ballot arguments (none were filed against).' },
        { label: 'Sacramento Bee: Rocklin, Lincoln and Colfax sales tax measures explained (Oct 12)', url: 'https://www.sacbee.com/news/politics-government/election/voter-guide/article317117942.html', summary: 'Original Bee voter guide explaining the half-cent rate change, where the money goes, and who signed the ballot arguments.' },
      ],
      explainerUrl: 'https://www.sacbee.com/news/politics-government/election/voter-guide/article317117942.html',
    },
    crossTypology: ct([
      ['LP', 'Yes', '◐', 'Leftward Progressives support funding public services and parks, but a sales tax falls hardest on lower incomes and the money is not earmarked, so their Yes is a trade-off.'],
      ['LL', 'Yes', '●', 'Loyal Liberals back taxes for services and trust the city’s long-term forecasts, and the measure funds 911, police, fire and parks with annual audits.'],
      ['LO', 'No', '○', 'Left-Out Left voters doubt that general-fund money will go where promised and dislike a regressive tax with no end date, though they value the services it could protect.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters put public safety high and the measure is pitched to protect 911 response and police and fire, though a sales tax pinches tight household budgets.'],
      ['TM', 'No', '◐', 'Tuned-Out Middle voters struggle with bills and are wary of new taxes that hit them, and this one adds 5 cents on a $10 purchase with no guarantee of where it goes.'],
      ['PP', 'Yes / No', '=', 'Pragmatic and Polite Right voters value both fiscal caution and planning ahead: if acting before forecast structural deficits force service cuts is the prudent course, Yes; if the city’s own statement that there is no immediate crisis means a new tax with no end date can wait, No.'],
      ['UR', 'No', '◐', 'Unconventional Right voters want lower taxes and smaller government, and a general sales-tax increase with no sunset runs against both.'],
      ['FC', 'No', '◐', 'Faith First Conservatives want government services trimmed and oppose new taxes, though many value police and fire funding.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose nearly all new taxes and distrust general-fund promises, so a permanent tax increase is a clear No.'],
    ]),
    hinges: {
      LP: 'Yes if heading off projected deficits for public safety, parks and services outweighs your concern about a regressive tax. No if a sales tax that takes a bigger share of lower incomes, with no earmark, is the wrong way to pay.',
      LL: 'Yes if annual audits and funding for 911, police, fire and parks justify acting before the projected deficits arrive. No if a general tax that legally needn’t go to the services in the ballot question isn’t enough for you.',
      LO: 'Yes if keeping parks, fire and police service as the city grows outweighs your worry about who pays. No if a regressive tax with no spending guarantee and no end date is one you won’t accept.',
      OO: 'Yes if protecting 911 response and police and fire service as the city grows is worth a half-cent more. No if a tax that legally needn’t go to public safety, on purchases you already stretch for, is too much.',
      TM: 'Yes if 5 cents more on a $10 purchase, with groceries and most prescriptions exempt, seems worth keeping city services. No if paying more at the register, with no guarantee how the money is spent, is a cost you’d rather avoid.',
      PP: 'Yes if planning ahead for forecast structural deficits is the prudent course before services are cut. No if the city itself says there’s no immediate crisis, so a new tax with no end date can wait.',
      UR: 'Yes if 911, police and fire service and the forecast deficits outweigh your preference for lower taxes. No if a tax with no earmark and no sunset is more government than you want.',
      FC: 'Yes if police and fire funding matters more to you than opposing a new tax. No if you oppose a general tax with no end date, as the county Republican Party does.',
      NA: 'Yes if you think the city’s deficit forecast is real and police and fire would suffer without it. No if a permanent general tax with no earmark looks like more spending you’d rather cut.',
    },
    counterArguments: [
      'NA (No ●): But consider Yes, because the measure is pitched to fund 911 response, police and fire, and the city says deficits are forecast if nothing is done.',
      'LL (Yes ●): But consider No, because as a general tax nothing legally requires the money to go to the public safety services named in the ballot question.',
    ],
  },
  {
    id: 'rusd-measure-d',
    categoryId: 'local-measures',
    title: 'Rocklin Unified Measure D: $288 million school bond',
    tldrLabel: 'Rocklin USD Measure D: School bond',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure D would fund repairs and modernization across Rocklin Unified’s 17 campuses, where a 2024 facilities master plan identified more than $300 million of needs (district and local news). The trade-off is decades of property-tax debt versus fixing aging schools.',
    ],
    introParagraphs: [
      'The RUSD board voted June 10, 2026 to place the bond on the Nov. 3 ballot. All Rocklin voters in the district vote on it.',
    ],
    measure: {
      question:
        'To upgrade, renovate, modernize and expand classrooms, schools, and career technical education buildings; repair/replace leaky roofs and outdated heating/cooling systems; and make safety/security improvements with no projected tax rate increase, shall Rocklin Unified School District’s measure authorizing $288,000,000 of bonds at legal rates be adopted, generating on average $15,800,000 annually while bonds are outstanding at approximate rates of $59 per $100,000 assessed value, with audits, citizens’ oversight, no money for salaries and funds staying local?',
      yesMeans: 'Authorizes $288 million in school bonds for classroom, roof, HVAC and safety upgrades, repaid by property owners at about $59 per $100,000 of assessed value while bonds are outstanding.',
      noMeans: 'Blocks the new bonds; existing school bond taxes continue until paid off, and repairs at the district’s 17 campuses would need other funding.',
      funding: {
        asOf: 'Oct. 12, 2026',
        note: 'News coverage reports no campaign committee for or against it, but we couldn’t search the filings directly; check the source below for the latest.',
        sources: [
          { label: 'Placer County Elections: campaign finance disclosure', url: 'https://www.placercountyelections.gov/campaign-finance-disclosure/' },
        ],
      },
      positions: [
        { org: 'Placer County Republican Party', kind: 'party', position: 'No position', url: 'https://placergop.org/endorsements/' },
      ],
      measureType: 'School facilities general obligation bond',
      voteThreshold: '55%',
      fiscalImpact:
        'Authorizes $288,000,000 in bonds, generating on average $15,800,000 a year while outstanding at approximately $59 per $100,000 of assessed value (ballot label). The district says current projections show no tax-rate increase because the new bond replaces expiring debt, including a 2002 bond that is paid off in 2028. A county or district fiscal analysis with full repayment totals was not retrieved.',
      supporters: 'Rocklin Unified School District board and administration, including Superintendent Roger Stock and trustee Dereck Counter. Printed ballot arguments were not retrieved.',
      opponents: 'No organized opposition found.',
      voterConnection: [
        'Homeowners pay with property taxes, based on assessed (not market) value; renters pay indirectly if landlords pass costs through.',
        'Most Rocklin schools are over 20 years old, and two (Parker Whitney and Rocklin Elementary) are over 60 (local news).',
      ],
      mechanismBullets: [
        'Projects: classroom upgrades and modernization, career technical education buildings, leaky roofs, heating and cooling, safety and security.',
        'The 55% threshold is the Proposition 39 rule for school bonds.',
      ],
      argumentsFor: [
        'Fixes aging roofs, plumbing and HVAC at decades-old campuses.',
        'No projected rate increase because it replaces expiring debt.',
        'Protects school quality and property values as new-construction fees dry up with build-out.',
        'Local oversight and audits; no money for salaries.',
      ],
      argumentsAgainst: [
        'Borrowing $288 million costs more than the principal, and homeowners repay for decades.',
        'The “no tax increase” claim depends on projections of assessed values and interest rates.',
        'Bond money cannot cover ongoing maintenance or staffing.',
        'Some residents may prefer different priorities or lower property taxes.',
      ],
      readingLinks: [
        { label: 'Placer County Elections: Measures to Appear on Ballot', url: MEASURES_PDF, summary: 'Official ballot text and 55% threshold.' },
        { label: 'RUSD: facilities planning', url: 'https://www.rocklinusd.org/Departments/Business-Services/Facilities-Maintenance--Operations/Facilities-Planning/', summary: 'District page on the proposed bond (district-sponsored).' },
        { label: 'The Abridged: Rocklin schools eye $288M bond (May 2026)', url: 'https://www.abridged.org/news/rocklin-school-district-proposed-bond/', summary: 'Pre-vote reporting on needs, cost and the May town hall.' },
        { label: 'CapRadio: Rocklin school board races (Sept 14, 2026)', url: CAPRADIO_BOARD, summary: 'Notes trustee support for Measure D.' },
        { label: 'Gold Mountain California News (Gold Country Media): Rocklin Measures C and D: What voters need to know (Oct 7)', url: 'https://goldmountaincanews.com/news/373118/rocklin-measures-c-and-d-what-voters-need-to-know/', summary: 'Voter guide to the Rocklin sales tax and the Rocklin Unified school bond.' },
      ],
      explainerUrl: 'https://goldmountaincanews.com/news/373118/rocklin-measures-c-and-d-what-voters-need-to-know/',
    },
    crossTypology: ct([
      ['LP', 'Yes', '●', 'Leftward Progressives back public investment, and fixing roofs, HVAC and classrooms at aging public schools, paid by property owners, is an easy Yes.'],
      ['LL', 'Yes', '●', 'Loyal Liberals accept bonds for public services, especially with citizens’ oversight, audits and a plan to replace expiring debt without a projected rate increase.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters want working families’ schools repaired, but they doubt public money is spent as promised and note that the no-increase claim rests on projections.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters value opportunity through schools, including career-tech buildings and safety upgrades, and the flat projected rate eases cost worries.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters are wary of taxes that hit them, but the district projects no rate increase and repaired schools are a concrete local benefit, so they lean weakly Yes.'],
      ['PP', 'Yes', '◐', 'Pragmatic and Polite Right voters back targeted, well-run spending, and this bond has oversight, no money for salaries and support from the board’s conservative-backed majority, though full repayment totals are missing.'],
      ['UR', 'Yes', '○', 'Unconventional Right voters favor small government, but the conservative-backed board supports this bond, the county Republican Party took no position and no rate increase is projected, so they lean weakly Yes.'],
      ['FC', 'Yes', '○', 'Faith First Conservatives want limited government but value safe, well-kept schools for families, and the board majority they tend to back supports this flat-rate plan.'],
      ['NA', 'No', '◐', 'No Apologies Right voters oppose most bonds, and $288 million in new debt repaid for decades is spending they would rather block, even at a flat rate.'],
    ]),
    hinges: {
      LP: 'Yes if fixing roofs, HVAC and classrooms at aging campuses, paid by property owners, is the public investment you want. No if decades of debt, and a “no increase” claim that rests on assessed-value and interest-rate projections, give you pause.',
      LL: 'Yes if citizens’ oversight, audits and a structure that replaces expiring debt make this a sound facilities investment. No if borrowing $288 million costs well beyond the principal and you want full repayment totals first.',
      LO: 'Yes if repairing aging schools that working families rely on matters more than your distrust of bond-financed debt. No if interest costs and a rate promise that depends on projections make the borrowing hard to trust.',
      OO: 'Yes if career-tech buildings, safety upgrades and repaired classrooms are worth keeping today’s rate on your tax bill. No if decades more property-tax debt is a burden your household budget can’t justify.',
      TM: 'Yes if the district’s projection that your rate won’t rise makes the repairs worth backing. No if any long-term property-tax debt, even replacing older bonds, adds to costs you’re already feeling.',
      PP: 'Yes if a bond that replaces expiring debt, with oversight and no money for salaries, is careful spending. No if the no-increase claim leaning on assessed-value and interest-rate projections is too uncertain for you.',
      UR: 'Yes if the district’s word that rates won’t rise, plus oversight and audits, eases your doubts about school spending. No if you want government to shrink and won’t back borrowing that keeps a property tax in place for decades.',
      FC: 'Yes if safe, well-maintained local schools for families are worth the borrowing. No if your distrust of bonds and new public debt outweighs the repair needs.',
      NA: 'Yes if holding rates flat while replacing expiring debt makes the borrowing acceptable. No if borrowing $288 million, repaid with interest for decades, is more debt than you’d support at any rate.',
    },
    counterArguments: [
      'NA (No ◐): But consider Yes, because the district says rates will not rise as the bond replaces expiring debt, and oversight and audit requirements apply.',
      'LP/LL (Yes ●): But consider No, because the bond adds decades of debt on property owners, and the “no increase” claim relies on assessed-value and interest-rate projections.',
    ],
  },
];
