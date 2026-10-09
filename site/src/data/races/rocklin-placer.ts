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
      ['PL', 'Gayaldo, Halldin', '○', 'Progressive Left voters have little to go on locally; the two incumbents have a documented record, including regional transportation and planning work, while Moore’s positions are unknown.'],
      ['EL', 'Gayaldo, Halldin', '◐', 'Establishment Liberals value institutional experience and regional planning, which Gayaldo (SACOG chair) and Halldin (eight years, former mayor) document and Moore does not.'],
      ['DM', 'Gayaldo, Halldin', '◐', 'Democratic Mainstays tend to favor experienced incumbents who run city services when no partisan contrast is on the ballot.'],
      ['OL', 'Gayaldo, Halldin', '○', 'Outsider Left voters may want fresh voices, but Moore’s platform could not be found, so the record-based pick is weak.'],
      ['SS', '—', '—', 'Stressed Sideliners have no verified issue positions to compare; the guide leaves this column blank rather than guess.', 'Stressed Sideliners have no verified positions to compare here. An experience-first voter in the group could still back Halldin and Gayaldo, eight-year incumbents and former mayors who have adopted city budgets and overseen police and fire, over Moore, whose record could not be found.'],
      ['AR', 'Gayaldo, Halldin', '◐', 'Ambivalent Right voters who want steady city management can point to the incumbents’ years in office and city finance role.'],
      ['PR', 'Gayaldo, Halldin', '○', 'Populist Right voters might favor an outsider, but nothing verified shows where Moore stands on taxes or growth, so the incumbents’ record is the only checkable signal.'],
      ['CC', 'Gayaldo, Halldin', '◐', 'Committed Conservatives value local control and experience in running core services; both incumbents have a long, checkable record.'],
      ['FF', 'Halldin, Moore', '○', 'Faith and Flag Conservatives may weight Moore’s pastoral background and Halldin’s William Jessup University Faith and Service Award, though Moore’s positions are unverified.', 'Faith and Flag Conservatives who prize experience could pair Halldin with Gayaldo, a two-time mayor and 2026 SACOG chair who once ran a large school transportation department, giving up Moore’s pastoral background for a long, checkable record.'],
    ]),
    counterArguments: [
      'CC (Gayaldo, Halldin ◐): But both incumbents are part of the council that put a new sales tax before voters, and Moore’s views on that choice are unknown.',
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
      ['PL', 'Makis', '◐', 'Progressive Left voters side with the teachers union that endorsed Makis, though his spousal conflict and thin policy detail keep this a trade-off.'],
      ['EL', 'Makis', '◐', 'Establishment Liberals value professional-staff relationships and a calmer board, which Makis stresses; Hoehne has the sitting majority’s backing but also the Republican Party’s.'],
      ['DM', 'Makis', '◐', 'Democratic Mainstays typically align with teacher-union endorsements and Makis’s call to lower the board’s conflict.'],
      ['OL', 'Makis', '○', 'Outsider Left voters distrust both camps, but Makis is the one backed by teachers rather than a party-endorsed slate.'],
      ['SS', '—', '—', 'Stressed Sideliners have no distinct signal here; both candidates cite achievement and safety.', 'Stressed Sideliners get no distinct signal, since both candidates cite achievement and safety. The experience edge to Hoehne is narrow: neither has served on a board, but her 20-plus years of teaching fully cover classroom knowledge, where Makis, a parent with no classroom background, only partly does.'],
      ['AR', 'Hoehne', '○', 'Ambivalent Right voters may like a former classroom teacher with business experience, with no strong signal either way.'],
      ['PR', 'Hoehne', '◐', 'Populist Right voters favor Hoehne’s support for the parental notification policy and the Republican Party endorsement.'],
      ['CC', 'Hoehne', '●', 'Committed Conservatives value Hoehne’s backing of the parental notification policy and her endorsements from the county Republican Party and board majority.'],
      ['FF', 'Hoehne', '●', 'Faith and Flag Conservatives prioritize parental rights in school policy, where Hoehne supports the defense of the 2023 notification policy.'],
    ]),
    counterArguments: [
      'CC (Hoehne ●): But the conflict-of-interest issue she raises about Makis is one he says state law and recusal address, and the district’s outside counsel has so far been unpaid, which may not last through litigation.',
      'PL (Makis ◐): But Makis’s spouse works for the district, and recusal limits his ability to vote on some labor and personnel matters that teachers care about.',
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
      ['PL', 'Boyce', '●', 'Progressive Left voters side with the Democratic Party and teachers union backing Boyce, who opposes the parental notification litigation.'],
      ['EL', 'Boyce', '●', 'Establishment Liberals value Boyce’s finance training, charter-board governance record and call to repair relations with district staff.'],
      ['DM', 'Boyce', '●', 'Democratic Mainstays follow the Democratic Party and teachers union endorsements and Boyce’s criticism of the litigation.'],
      ['OL', 'Boyce', '◐', 'Outsider Left voters may prefer the challenger to a board majority backed by the county Republican Party, though Boyce is party-backed too.', 'Outsider Left voters who put experience first could keep Counter, with eight years of district budget and bargaining votes, but that means backing the Republican-endorsed board majority behind the parental notification policy and litigation Boyce opposes.'],
      ['SS', '—', '—', 'Stressed Sideliners have no distinct signal; both candidates stress fiscal discipline and school quality.', 'Both candidates stress fiscal discipline and school quality, so Stressed Sideliners can let experience decide: Counter has served on the board since 2018 and backs Measure D campus repairs, while Boyce has not served on the Rocklin board.'],
      ['AR', 'Counter', '◐', 'Ambivalent Right voters may prefer an incumbent with eight years of board votes and rising test scores to a change in a high-performing district.'],
      ['PR', 'Counter', '●', 'Populist Right voters back Counter’s vote for the parental notification policy and his stance on girls’ sports.'],
      ['CC', 'Counter', '●', 'Committed Conservatives value Counter’s fiscal discipline, local control and Republican Party and council endorsements.'],
      ['FF', 'Counter', '●', 'Faith and Flag Conservatives prioritize parental notification rights, which Counter voted for and Boyce criticizes.'],
    ]),
    counterArguments: [
      'CC (Counter ●): But Boyce, an economist, argues the notification litigation consumed time and money and that the board nearly faced a strike, which Counter’s fiscal-discipline pitch does not address.',
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
      'The Placer County Charter says a vacancy on the five-member Board of Supervisors must be filled by unanimous vote of the remaining supervisors within 30 days, or the governor makes the appointment. Measure G would give the board 60 days.',
      'Supervisors set county budgets, land-use rules and public safety funding for roughly the whole county, so who fills a vacated seat, and how fast, can change board votes.',
    ],
    introParagraphs: [
      'The Board of Supervisors voted 5-0 on July 14, 2026 to advance charter amendments recommended by a county charter review committee (Hoodline, July 2026). Two go to the Nov. 3, 2026 ballot (this one and Measure H); a third, on supervisor compensation, is set for Nov. 7, 2028.',
    ],
    measure: {
      question:
        'Shall the measure amending Article II, Section 206 of the Placer County Charter to extend the deadline for filling a vacancy on the Board of Supervisors from 30 days to 60 days, providing additional time for the Board to make an appointment before the Governor fills the vacancy, and requiring vacancies occurring 130 days or more before a statewide direct primary election be filled temporarily by appointment and placed on the ballot at that election, be adopted?',
      measureType: 'County charter amendment',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'The ballot label and county announcement identify no cost; none was found in the sources reviewed. A vacancy that requires a special placement on a primary ballot would be an election cost incurred only if a vacancy occurs.',
      supporters: 'Placer County Board of Supervisors (5-0 vote to advance, July 14, 2026); recommended by the county charter review committee.',
      opponents: 'No organized opposition found.',
      voterConnection: [
        'Supervisors set the county budget, land-use rules and fire and sheriff funding, so a vacancy affects every county resident, including those in Rocklin.',
        'If the board cannot agree within the deadline, the governor picks the replacement. A longer deadline makes a local appointment more likely.',
        'Appointees would face voters at the next statewide primary if the vacancy occurs 130 or more days before it, instead of serving most of the remainder without an election.',
      ],
      mechanismBullets: [
        'Extends the deadline to fill a Board of Supervisors vacancy from 30 days to 60 days.',
        'The current charter requires a unanimous vote of the remaining supervisors; the governor appoints if they do not act in time. The summaries reviewed do not say whether the unanimity requirement changes.',
        'Vacancies occurring 130 days or more before a statewide direct primary would be filled temporarily by appointment and the seat placed on that primary ballot.',
        'Takes effect as provided by state law if approved; if rejected, the current 30-day rule remains.',
      ],
      argumentsFor: [
        'More time for recruitment and interviews of applicants (county announcement).',
        'Reduces the chance of a governor appointing a supervisor for a local district.',
        'Clarifies when a vacancy must go to voters at a statewide primary.',
      ],
      argumentsAgainst: [
        'Sixty days could leave a seat empty longer and a four-supervisor board risks 2-2 splits.',
        'An appointment still bypasses voters until the next primary.',
        'No published opposition was found; this is a mostly procedural change.',
      ],
      readingLinks: [
        { label: 'Placer County: charter amendments approved to go before voters', url: 'https://www.placer.ca.gov/10984/Charter-amendments', summary: 'County explanation of the vacancy and CEO-removal amendments.' },
        { label: 'Placer County Elections: Measures to Appear on Ballot', url: MEASURES_PDF, summary: 'Official ballot text for Measures G and H.' },
        { label: 'Hoodline: Placer supes put pay overhaul and power rules on 2026 ballot', url: 'https://hoodline.com/2026/07/placer-supes-put-pay-overhaul-and-power-rules-on-2026-ballot/', summary: 'July 2026 summary of the 5-0 vote.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '○', 'Progressive Left voters generally favor clearer, more open procedures, and the amendment adds a ballot placement rule for some vacancies.'],
      ['EL', 'Yes', '◐', 'Establishment Liberals value orderly process and local control over a governor’s appointment.'],
      ['DM', 'Yes', '○', 'Democratic Mainstays are likely to treat this as a routine procedural fix with no sign of controversy.'],
      ['OL', '—', '—', 'Outsider Left voters have no clear stake in this procedural change.'],
      ['SS', '—', '—', 'Stressed Sideliners have no clear stake; the change is procedural and affects only rare vacancies.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters may favor keeping vacancy decisions with local officials rather than the governor.'],
      ['PR', 'Yes', '◐', 'Populist Right voters distrust Sacramento and prefer local appointment over a governor’s pick, though some may object to any appointment without a vote.'],
      ['CC', 'Yes', '◐', 'Committed Conservatives value local control and a defined timeline for the county’s own board to act.'],
      ['FF', 'Yes', '○', 'Faith and Flag Conservatives lean toward local control but have no signature stake in this procedural issue.'],
    ]),
    counterArguments: [
      'PR (Yes ◐): But any appointee serves without an election until the next statewide primary, which some Populist Right voters may see as bypassing voters.',
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
      'The County Executive Officer runs the county’s day-to-day operations and budget for the Board of Supervisors. Under the charter, three supervisors can remove the CEO.',
      'Measure H would let an employment agreement specify a different removal procedure. The board says this helps recruit and keep top executives.',
    ],
    introParagraphs: [
      'The Board of Supervisors voted 5-0 on July 14, 2026 to advance the charter amendments recommended by the county’s charter review committee. This amendment and Measure G are on the Nov. 3, 2026 ballot.',
    ],
    measure: {
      question:
        'Shall the measure amending Article V, Section 502(a) of the Placer County Charter to allow alternative procedures for the removal of the County Executive Officer if specified in an employment agreement, providing greater flexibility in negotiating employment terms for recruitment and retention, while preserving Board of Supervisors’ oversight, be adopted?',
      measureType: 'County charter amendment',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'The ballot label and county announcement identify no cost; no county counsel or auditor figure was found in the sources reviewed. Any severance or contract terms would be negotiated by the board in an employment agreement.',
      supporters: 'Placer County Board of Supervisors (5-0 vote to advance, July 14, 2026); recommended by the county charter review committee.',
      opponents: 'No organized opposition found.',
      voterConnection: [
        'The CEO carries out board policy and manages the county budget, so the contract terms affect how stable and accountable county management is.',
        'The default stays the same: three supervisors can remove the CEO unless an employment agreement says otherwise.',
        'A contract could make removal harder or easier. That is a decision a majority of the board would make in negotiating with a candidate.',
      ],
      mechanismBullets: [
        'Amends Article V, Section 502(a) of the Placer County Charter.',
        'Keeps the current rule that three supervisors can remove the County Executive Officer unless an employment agreement specifies otherwise.',
        'Allows alternative removal procedures when written into the CEO’s employment agreement.',
        'The county says the board’s oversight authority is preserved.',
        'If rejected, the current charter language remains.',
      ],
      argumentsFor: [
        'Gives the board more flexibility to recruit and retain a strong CEO (county announcement).',
        'Keeps the board’s oversight authority and default removal rule.',
        'Lets the board match what other counties offer in contracts.',
      ],
      argumentsAgainst: [
        'A contract could lock in removal procedures that are harder for a future board to use.',
        'Contract terms are negotiated by the board, so voters would have less direct say over them.',
        'No published opposition was found; the concern is theoretical.',
      ],
      readingLinks: [
        { label: 'Placer County: charter amendments approved to go before voters', url: 'https://www.placer.ca.gov/10984/Charter-amendments', summary: 'County explanation of the amendments.' },
        { label: 'Placer County Elections: Measures to Appear on Ballot', url: MEASURES_PDF, summary: 'Official ballot text for Measures G and H.' },
        { label: 'Hoodline: Placer supes put pay overhaul and power rules on 2026 ballot', url: 'https://hoodline.com/2026/07/placer-supes-put-pay-overhaul-and-power-rules-on-2026-ballot/', summary: 'July 2026 summary of the 5-0 vote.' },
      ],
    },
    crossTypology: ct([
      ['PL', '—', '—', 'Progressive Left voters have no clear stake in contract terms for a county executive.'],
      ['EL', 'Yes', '○', 'Establishment Liberals value professional county management and competitive recruitment of executives.'],
      ['DM', 'Yes', '○', 'Democratic Mainstays are likely to treat this as routine governance flexibility.'],
      ['OL', 'No', '○', 'Outsider Left voters distrust arrangements that insulate a powerful administrator from easy removal.'],
      ['SS', '—', '—', 'Stressed Sideliners have no clear stake in an administrative contract rule.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters tend to favor practical, businesslike hiring flexibility.'],
      ['PR', 'No', '◐', 'Populist Right voters are wary of rules that make an unelected official harder to remove.'],
      ['CC', 'Yes', '○', 'Committed Conservatives value businesslike contracts with preserved board oversight, though some prefer the simpler default.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no signature stake in this administrative amendment.'],
    ]),
    counterArguments: [
      'OL (No ○): But the amendment keeps the default three-vote removal rule and the board approves each contract, so the board retains oversight.',
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
      'Measure C would raise Rocklin’s sales tax rate from 7.25% to 7.75%, matching Roseville, and raise about $8 million a year for the city’s general fund (ballot label; Sacramento Bee). It applies to purchases made in Rocklin, including by people from outside the city.',
      'The city says it is not in an immediate financial crisis but that long-term forecasts show structural deficits if nothing changes. Because it is a general tax, the money is not locked to a specific project.',
    ],
    introParagraphs: [
      'The City Council placed the tax on the Nov. 3 ballot in June 2026. Placer County originally printed the threshold as two-thirds, then issued an amended notice stating it requires a simple majority (county notice, Aug 2026). The tax would take effect April 1, 2027, if approved.',
    ],
    measure: {
      question:
        'To maintain Rocklin’s public safety, financial stability and core public services, including: rapid 911 emergency/medical response; police/fire protection; keeping public areas and parks healthy/safe/clean; preserving open space; preventing wildfires; shall the City of Rocklin’s measure establishing a half-cent sales tax, providing approximately $8 million annually for general revenue purposes, until ended by voters, keeping all funds local, with annual audits/public spending disclosure, be adopted?',
      measureType: 'General tax (city transactions and use tax)',
      voteThreshold: 'Simple majority (the county’s amended notice corrected an earlier “2/3” misprint)',
      fiscalImpact:
        'About $8 million a year for general revenue purposes (ballot label). A city FAQ from October 2025 had estimated about $9 million. Revenue goes to the general fund, so it can pay for any lawful city service. The state tax agency would administer it; it would take effect as early as April 1, 2027, and continue until repealed by voters.',
      supporters: 'City of Rocklin and the City Council, which placed it on the ballot. Printed ballot arguments were not retrieved.',
      opponents: 'No organized opposition or printed opposing argument was found in the coverage reviewed.',
      voterConnection: [
        'Shoppers pay: an extra 5 cents on a $10 purchase; the tax applies to taxable goods bought in Rocklin, not to groceries or most prescription drugs under California law.',
        'Because it is a general tax, the council decides how to spend it; the ballot lists public safety and park services as examples, not requirements.',
        'The city says it has not been in an immediate crisis, but forecasts show deficits as costs grow.',
        'It has no end date; only voters can repeal it.',
      ],
      mechanismBullets: [
        'Half-cent transactions and use (sales) tax, raising the Rocklin rate from 7.25% to 7.75%.',
        'Estimated at about $8 million a year for general revenue purposes.',
        'General tax: requires a majority, and the money goes to the city general fund for any lawful purpose.',
        'Continues until ended by voters; operative April 1, 2027 if approved.',
        'Annual audits and public spending disclosure are required.',
        'Voters within city limits registered by Oct. 19 may vote on it.',
      ],
      argumentsFor: [
        'Funds 911 response, police and fire protection and parks as the city’s population has doubled over 25 years while service levels stayed relatively flat (city FAQ).',
        'Heads off projected long-term structural deficits without cutting services.',
        'Funds stay local and are subject to annual audits and public reporting.',
        'Part of the cost is paid by visitors who shop in Rocklin; Roseville’s 2018 half-cent measure passed with 62%.',
      ],
      argumentsAgainst: [
        'A general tax carries no legal guarantee that the money goes to police, fire or parks.',
        'Sales taxes are regressive, taking a larger share of lower incomes.',
        'No sunset: it lasts until voters repeal it.',
        'Rocklin would join the highest local sales tax rate in Placer County, which could push some shoppers to neighboring cities.',
      ],
      readingLinks: [
        { label: 'City of Rocklin: Measure C', url: 'https://www.rocklin.ca.gov/693/Measure-C', summary: 'City page with the ballot text and background (city-sponsored).' },
        { label: 'City of Rocklin: Measure C FAQ', url: 'https://www.rocklin.ca.gov/DocumentCenter/View/1807/Measure-C-FAQs', summary: 'City FAQ; supportive of the measure.' },
        { label: 'Placer County: amended notice of election (majority vote correction)', url: AMENDED_NOTICE, summary: 'Official correction of the vote requirement for Measure C.' },
        { label: 'Sacramento Bee: Rocklin voters may decide on half-cent sales tax (June 2026)', url: 'https://www.yahoo.com/news/politics/articles/rocklin-voters-may-decide-half-142738960.html', summary: 'Compares sales tax rates across Placer County cities.' },
        { label: 'Sacramento Bee: Rocklin City Council to vote on adding a sales-tax increase (June 2026)', url: 'https://www.yahoo.com/news/politics/articles/rocklin-city-council-vote-adding-210459170.html', summary: 'Council action and city rationale.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters support public safety, parks and city services, but sales taxes are regressive and the money is not earmarked.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value funding for 911, police, fire and parks and annual audits to protect city services against projected deficits.'],
      ['DM', 'Yes', '◐', 'Democratic Mainstays tend to back local revenue for core services, tempered by the tax’s burden on lower-income shoppers.'],
      ['OL', 'No', '◐', 'Outsider Left voters object to a regressive tax with no spending guarantee and no end date.'],
      ['SS', 'No', '○', 'Stressed Sideliners feel prices at the register and have no guarantee about how the money is spent.'],
      ['AR', 'No', '○', 'Ambivalent Right voters are wary of new taxes absent an immediate crisis, which the city itself says does not exist.'],
      ['PR', 'No', '●', 'Populist Right voters distrust new taxes without earmarks or sunset and see a general fund grab without accountability.'],
      ['CC', 'No', '●', 'Committed Conservatives oppose raising a tax when the city says there is no current shortfall and the revenue is not restricted to the services listed.'],
      ['FF', 'No', '○', 'Faith and Flag Conservatives generally oppose new taxes, though many value police and fire funding, so this is a weak lean.'],
    ]),
    counterArguments: [
      'CC (No ●): But the measure funds 911 response, police and fire, which Committed Conservatives rank among the core duties of local government, and the city says deficits are forecast if nothing is done.',
      'EL (Yes ●): But because it is a general tax, nothing in the measure legally requires the money to go to the public safety services in the ballot question.',
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
      'Measure D would authorize Rocklin Unified to borrow $288 million, repaid through property taxes, to repair and modernize classrooms and schools across the district’s 17 campuses. A 2024 facilities master plan identified more than $300 million of needs (district and local news).',
      'The district says the bond would replace an expiring 2002 bond, so tax rates are not projected to rise. Bonds need 55% of the vote and, by law, money cannot be used for salaries.',
    ],
    introParagraphs: [
      'The RUSD board voted June 10, 2026 to place the bond on the Nov. 3 ballot. All Rocklin voters in the district vote on it. Trustee Dereck Counter backs it (CapRadio); no organized opposition was found.',
    ],
    measure: {
      question:
        'To upgrade, renovate, modernize and expand classrooms, schools, and career technical education buildings; repair/replace leaky roofs and outdated heating/cooling systems; and make safety/security improvements with no projected tax rate increase, shall Rocklin Unified School District’s measure authorizing $288,000,000 of bonds at legal rates be adopted, generating on average $15,800,000 annually while bonds are outstanding at approximate rates of $59 per $100,000 assessed value, with audits, citizens’ oversight, no money for salaries and funds staying local?',
      measureType: 'School facilities general obligation bond',
      voteThreshold: '55%',
      fiscalImpact:
        'Authorizes $288,000,000 in bonds, generating on average $15,800,000 a year while outstanding at approximately $59 per $100,000 of assessed value (ballot label). The district says current projections show no tax-rate increase because the new bond replaces expiring debt, including a 2002 bond that is paid off in 2028. A county or district fiscal analysis with full repayment totals was not retrieved.',
      supporters: 'Rocklin Unified School District board and administration, including Superintendent Roger Stock and trustee Dereck Counter. Printed ballot arguments were not retrieved.',
      opponents: 'No organized opposition found.',
      voterConnection: [
        'Homeowners pay: about $59 per year for each $100,000 of assessed (not market) value, collected with property taxes. Renters pay indirectly if landlords pass costs through.',
        'The district says the rate is no higher than the bond it replaces, so many owners would see no change.',
        'Most Rocklin schools are over 20 years old and two (Parker Whitney and Rocklin Elementary) are over 60 (local news).',
        'Funds are limited to buildings and equipment; the ballot label bars use for salaries.',
      ],
      mechanismBullets: [
        '$288 million in general obligation bonds at legal rates.',
        'Average annual collection about $15.8 million while bonds are outstanding.',
        'Approximate tax rate $59 per $100,000 assessed value.',
        'Projects: classroom upgrades and modernization, career technical education buildings, leaky roofs, heating and cooling, safety and security.',
        'Citizens’ oversight committee, annual audits, funds stay in the district, none for salaries.',
        '55% of voters must approve (Proposition 39 school bond threshold).',
      ],
      argumentsFor: [
        'Fixes aging roofs, plumbing and HVAC at campuses that are decades old.',
        'No projected rate increase because it replaces expiring debt.',
        'Protects Rocklin’s school quality and property values as new-construction fees dry up with build-out.',
        'Local oversight and audits; money cannot be spent on salaries.',
      ],
      argumentsAgainst: [
        'Borrowing $288 million costs more over time than the principal, and homeowners are repaying for decades.',
        'The “no tax increase” claim depends on projections of assessed values and interest rates.',
        'Bond money cannot cover ongoing maintenance or staffing.',
        'Some residents may prefer different priorities or lower property taxes.',
      ],
      readingLinks: [
        { label: 'Placer County Elections: Measures to Appear on Ballot', url: MEASURES_PDF, summary: 'Official ballot text and 55% threshold.' },
        { label: 'RUSD: facilities planning', url: 'https://www.rocklinusd.org/Departments/Business-Services/Facilities-Maintenance--Operations/Facilities-Planning/', summary: 'District page on the proposed bond (district-sponsored).' },
        { label: 'The Abridged: Rocklin schools eye $288M bond (May 2026)', url: 'https://www.abridged.org/news/rocklin-school-district-proposed-bond/', summary: 'Pre-vote reporting on needs, cost and the May town hall.' },
        { label: 'CapRadio: Rocklin school board races (Sept 14, 2026)', url: CAPRADIO_BOARD, summary: 'Notes trustee support for Measure D.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters support public investment in school buildings and shift the cost to property owners rather than classrooms.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value oversight-backed school facility investment and a no-rate-increase structure.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays favor school funding that helps local kids and carries citizen oversight.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters usually back school repair but may distrust bond-financed debt.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners benefit from schools but feel any property-tax bill; the district says rates are not projected to rise.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters can accept a bond that replaces expiring debt without raising rates.'],
      ['PR', 'No', '○', 'Populist Right voters are skeptical of borrowing and school-district spending, though no rate increase is projected.'],
      ['CC', 'Yes', '○', 'Committed Conservatives are wary of debt but may accept it when rates are held flat and the board majority backs the plan; a weak lean.'],
      ['FF', 'Yes', '○', 'Faith and Flag Conservatives often support safe, well-maintained local schools, though some distrust bonds and the school board; a weak lean.'],
    ]),
    counterArguments: [
      'PR (No ○): But the district says rates will not rise because the bond replaces expiring debt, and the oversight committee and audit requirements apply.',
      'PL (Yes ●): But a bond adds long-term debt on property owners, and the “no increase” claim relies on assessed-value and interest-rate projections.',
    ],
  },
];
