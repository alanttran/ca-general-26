import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * City of San Diego north (Rancho Bernardo, Carmel Mountain, Sabre Springs, Rancho Peñasquitos, Black Mountain Ranch):
 * Poway Unified Trustee Areas B, C, D; Palomar CCD Trustee Area 1; Palomar Health Divisions 5 and 7.
 * Candidate statements are quoted from the Registrar's official sample ballots (BT 292, 410, 412) for the Nov 3, 2026 election.
 */

const KPBS_ENDORSEMENTS = {
  label: 'KPBS: 2026 general election party endorsements (Sept 30, 2026)',
  url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian',
  summary: 'County Democratic and Republican Party, Reform California and Lincoln Club picks in local races.',
};
const CHRONICLE = {
  label: 'North County Chronicle: full ballot this November (Sept 23, 2026)',
  url: 'https://northcountychronicle.com/articles/election/north-county-voters-face-a-full-ballot-this-november/',
  summary: 'Who is running for Palomar College and Palomar Health seats.',
};
const NO_MONEY = 'No campaign finance totals reviewed as of Oct 9, 2026; filings are posted on the San Diego County campaign-disclosure portal.';

const PUSD_CRITERIA = [
  { id: 'governance', label: 'Board governance', detail: 'Trustees set policy, hire and evaluate the superintendent, and vote as one of five.' },
  { id: 'budget', label: 'Budget and fiscal oversight', detail: 'Poway Unified faces declining enrollment and a deficit; trustees approve budgets and staff cuts.' },
  { id: 'schools', label: 'K-12 instruction and special education', detail: 'Trustees oversee academics, special-education services and student support.' },
  { id: 'community', label: 'Knowledge of the district and families', detail: 'Trustees represent one trustee area and its parents, staff and schools.' },
];
const PUSD_LEGAL = 'U.S. citizen, 18 or older, registered voter living in the trustee area; not a Poway Unified employee.';

export const RACES_SDC_NORTH: Race[] = [
  // ---------------------------------------------------------------- Poway Unified Area B
  {
    id: 'poway-usd-area-b',
    categoryId: 'school',
    title: 'Poway Unified School District, Trustee Area B',
    tldrLabel: 'Poway Unified, Area B',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'Poway Unified’s five-member board sets policy, adopts the budget and hires the superintendent for a district that serves Poway, Rancho Bernardo, Rancho Peñasquitos and nearby San Diego neighborhoods. Area B covers north Poway and northeast Rancho Bernardo.',
      'The district says it faces a deficit driven by reduced state funding, declining enrollment and rising costs. The next board will decide how to close budget gaps and handle special-education services and facilities.',
    ],
    introParagraphs: [
      'Trustee Ginger Couvrette, whose term ends in 2026, is not on the ballot (county board list), so this is an open seat decided in one November contest. Brett Davis is endorsed by the county Republican Party and Reform California; Kym Sosnowski by the county Democratic Party (KPBS).',
    ],
    legalRequirements: PUSD_LEGAL,
    qualificationCriteria: PUSD_CRITERIA,
    candidates: [
      {
        id: 'brett-davis',
        name: 'Brett Davis',
        party: 'NP',
        role: 'Father/Business Owner',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Davis, 61, is a small-business owner who says he is a former school board member; which board and when are not published.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'His candidate statement says he is a “former school board member”; the district and years are not stated.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Small-business owner (statement); no public-budget role documented.' },
            { criterionId: 'schools', assessment: 'unknown', evidence: 'No teaching or school-program role published.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Parent and grandparent (statement); no Poway Unified volunteer roles published.' },
          ],
        },
        bio: [
          'Davis is a 61-year-old father, grandfather and small-business owner. His statement says he is a former school board member but does not name the board.',
          'He says parents should be partners in their children’s education, wants strong academics and accountability, and stresses responsible budgeting that keeps resources on teachers and classrooms.',
        ],
        scorecard: [
          { topic: 'Budget', position: '✓ Responsible budgeting; “make every taxpayer dollar work for students”', comparison: 'Sosnowski promises to be “fair to our taxpayers.”' },
          { topic: 'Parents’ role', position: '✓✓ Parents as partners; open communication', comparison: 'Sosnowski cites 15 years of PTA work.' },
          { topic: 'Academics', position: '✓ Strong academics and accountability', comparison: 'Sosnowski has not published academic specifics.' },
          { topic: 'Ideology', position: '~ Endorsed by the county GOP and Reform California', comparison: 'Sosnowski is endorsed by county Democrats and calls for “non-ideological” oversight.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County; Reform California (KPBS, Sept 30, 2026).',
      },
      {
        id: 'kym-sosnowski',
        name: 'Kym Sosnowski',
        party: 'NP',
        role: 'Education Advocate/Parent',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Sosnowski is a longtime Poway Unified PTA leader and school-foundation president. She has not held elected office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'PTA board member and Twin Peaks Middle School foundation president (statement); no elected-board service.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Raised money for school programs as foundation president; no district-budget role.' },
            { criterionId: 'schools', assessment: 'partial', evidence: 'More than 15 years volunteering at elementary, middle and high schools; spouse is a PUSD high school teacher.' },
            { criterionId: 'community', assessment: 'met', evidence: 'PUSD graduate; three children attended Area B schools; district’s 2024 Volunteer of the Year (statement).' },
          ],
        },
        bio: [
          'Sosnowski attended Poway Unified schools, and her three children went to Area B schools. Her husband teaches at a district high school.',
          'She has spent more than 15 years as a PTA board member and volunteer. She was president of the Twin Peaks Middle School foundation and was named the district’s 2024 Volunteer of the Year (candidate statement).',
        ],
        scorecard: [
          { topic: 'Budget', position: '~ “Fair to our taxpayers”; no specific plan published', comparison: 'Davis stresses responsible budgeting.' },
          { topic: 'Teachers', position: '✓ “Supportive of our teachers”', comparison: 'Davis wants to invest in excellent teachers.' },
          { topic: 'Parent engagement', position: '✓ Long PTA and foundation record', comparison: 'Davis frames parents as partners.' },
          { topic: 'Ideology', position: '~ Endorsed by county Democrats; pledges “non-ideological” oversight', comparison: 'Davis is endorsed by the county GOP and Reform California.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party (KPBS, Sept 30, 2026); Poway Democratic Club (club site, Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Sosnowski', '●', 'Progressive Left voters back the Democratic-endorsed candidate over one endorsed by the GOP and Reform California.'],
      ['EL', 'Sosnowski', '●', 'Establishment Liberals value her long, documented work inside Poway Unified schools and the county Democratic endorsement.'],
      ['DM', 'Sosnowski', '●', 'Democratic Mainstays follow the county Democratic Party endorsement in a low-information race.'],
      ['OL', 'Sosnowski', '◐', 'Outsider Left voters lean to the parent volunteer endorsed by Democrats, though neither candidate is an insider.'],
      ['SS', 'Sosnowski', '○', 'Stressed Sideliners who want calm schools may like her promise of non-ideological oversight and deep school ties.'],
      ['AR', 'Davis', '◐', 'Ambivalent Right voters favor the business owner’s focus on budgeting and accountability during staff cuts.'],
      ['PR', 'Davis', '●', 'Populist Right voters back the Reform California-endorsed candidate who puts parents at the center.'],
      ['CC', 'Davis', '●', 'Committed Conservatives back the county GOP’s pick and his emphasis on taxpayer dollars.'],
      ['FF', 'Davis', '●', 'Faith and Flag Conservatives favor his parents-as-partners message and Republican endorsement.'],
    ]),
    counterArguments: [
      'PL/EL/DM (Sosnowski ●): But Davis says he has already served on a school board, while Sosnowski’s experience is as a volunteer, not a voting trustee.',
      'PR/CC/FF (Davis ●): But Davis has not said which board he served on or published a record, while Sosnowski’s 15 years in Area B schools is documented.',
    ],
    readingLinks: [KPBS_ENDORSEMENTS],
  },

  // ---------------------------------------------------------------- Poway Unified Area C
  {
    id: 'poway-usd-area-c',
    categoryId: 'school',
    title: 'Poway Unified School District, Trustee Area C',
    tldrLabel: 'Poway Unified, Area C',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Poway Unified’s five-member board sets policy, adopts the budget and hires the superintendent. Area C takes in parts of Rancho Bernardo, Black Mountain Ranch and Rancho Peñasquitos in the City of San Diego.',
      'Board vice president Heather Plotzke is seeking re-election as the district deals with declining enrollment and fiscal pressure. Challenger Jason Bennett runs on parental rights and board transparency.',
    ],
    introParagraphs: [
      'This is a single November contest. Plotzke is the incumbent and board vice president (district site). She is endorsed by the county Democratic Party; Bennett by the county Republican Party and Reform California (KPBS).',
    ],
    legalRequirements: PUSD_LEGAL,
    qualificationCriteria: PUSD_CRITERIA,
    candidates: [
      {
        id: 'heather-plotzke',
        name: 'Heather Plotzke',
        party: 'NP',
        role: 'Governing Board Member, Poway Unified School District',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Plotzke holds this seat (term ending 2026) and is board vice president.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Elected Area C trustee, term expiring 2026 (County Office of Education board list); board vice president (district site).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on district budgets during the enrollment decline; says she focuses on long-range fiscal planning (statement).' },
            { criterionId: 'schools', assessment: 'met', evidence: 'Board oversight of instruction and special-education services; statement backs rigorous instruction plus special supports.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Represents Area C on the board; personal background is not published.' },
          ],
        },
        bio: [
          'Plotzke is the Area C trustee and board vice president. Her statement lists three commitments: preparing students for life after graduation, supporting families and employees, and protecting the district’s long-term finances.',
          'She says declining enrollment and fiscal pressure require long-range planning on facilities, technology, transportation and staffing.',
        ],
        recordVsChange:
          'Plotzke has helped steer the district through staff cuts tied to falling enrollment. Bennett argues the board needs more transparency and a return to basics.',
        scorecard: [
          { topic: 'Budget', position: '✓ Long-range planning to protect classrooms', comparison: 'Bennett promises transparent budgeting that keeps money in classrooms.' },
          { topic: 'Academics', position: '✓ “A diploma and a plan” for every student', comparison: 'Bennett stresses reading, writing and math.' },
          { topic: 'Special education', position: '✓ Rigorous instruction with special supports', comparison: 'Bennett has not published a special-education stance.' },
          { topic: 'Parental rights', position: '~ Emphasizes trust and clear communication', comparison: 'Bennett makes parental rights a priority.' },
          { topic: 'Ideology', position: '~ Endorsed by county Democrats', comparison: 'Bennett is endorsed by the county GOP and Reform California.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party (KPBS, Sept 30, 2026); Poway Democratic Club (club site, Oct 2026).',
      },
      {
        id: 'jason-bennett',
        name: 'Jason Bennett',
        party: 'NP',
        role: 'Parent/Business Owner',
        campaignUrl: 'https://www.bennettforpusdboard.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Bennett is a Marine veteran and local restaurant owner who sits on the board of a district watchdog group. He has not held elected office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Board member of PUSD Community Watch, a nonprofit not affiliated with the district (statement; group site).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Has owned and run local Flippin’ Pizza locations for more than a decade (statement); no public-budget role.' },
            { criterionId: 'schools', assessment: 'unknown', evidence: 'No teaching or school-program role published; volunteer youth sports coach.' },
            { criterionId: 'community', assessment: 'met', evidence: 'PUSD parent; says his businesses gave more than $100,000 to PUSD classrooms, PTAs and athletics from 2012 to 2022.' },
          ],
        },
        bio: [
          'Bennett, 46, is a former U.S. Marine with a son in Poway Unified. He has owned and run local Flippin’ Pizza locations for more than a decade and coaches youth soccer, basketball and football.',
          'He sits on the board of PUSD Community Watch, which advocates for board transparency and parental rights. His priorities include “restoring American pride” in schools, the basics, and transparent budgeting.',
        ],
        scorecard: [
          { topic: 'Budget', position: '✓ Transparent budgeting that keeps resources in classrooms', comparison: 'Plotzke cites long-range fiscal planning as an incumbent.' },
          { topic: 'Academics', position: '✓ Reading, writing and math', comparison: 'Plotzke stresses college and career readiness.' },
          { topic: 'Parental rights', position: '✓✓ A stated priority', comparison: 'Plotzke emphasizes communication and trust.' },
          { topic: 'Ideology', position: '~ Endorsed by the county GOP and Reform California', comparison: 'Plotzke is endorsed by county Democrats.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County; Reform California (KPBS, Sept 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Plotzke', '●', 'Progressive Left voters back the Democratic-endorsed incumbent over a parental-rights challenger endorsed by Reform California.'],
      ['EL', 'Plotzke', '●', 'Establishment Liberals value the incumbent vice president’s experience steering the budget through enrollment decline.'],
      ['DM', 'Plotzke', '●', 'Democratic Mainstays follow the county Democratic Party endorsement.'],
      ['OL', 'Plotzke', '◐', 'Outsider Left voters may want more board accountability but do not share Bennett’s parental-rights focus.'],
      ['SS', 'Plotzke', '○', 'Stressed Sideliners who want stability during staff cuts may default to the incumbent.'],
      ['AR', 'Bennett', '◐', 'Ambivalent Right voters like the business owner’s focus on basics and transparent budgeting.', 'Ambivalent Right voters who weigh experience could back Plotzke, who has voted on Poway Unified budgets as a sitting trustee; they would give up Bennett’s outside push for board transparency.'],
      ['PR', 'Bennett', '●', 'Populist Right voters back the watchdog-group board member running on parental rights and American pride.'],
      ['CC', 'Bennett', '●', 'Committed Conservatives back the county GOP’s pick and his taxpayer-focused budget pitch.'],
      ['FF', 'Bennett', '●', 'Faith and Flag Conservatives favor the Marine veteran’s parental-rights and patriotism message.'],
    ]),
    counterArguments: [
      'PL/EL/DM (Plotzke ●): But the district slid into a deficit on this board’s watch, and voters who want a sharper break may see value in an outside budget watchdog.',
      'PR/CC/FF (Bennett ●): But Bennett has never sat on a public board, while Plotzke has already voted through the district’s hardest budget decisions.',
    ],
    readingLinks: [KPBS_ENDORSEMENTS, { label: 'PUSD Community Watch: board members page', url: 'https://www.pusdcommunitywatch.org/boe-members', summary: 'Watchdog group Bennett helps lead; lists trustees’ recorded votes.' }],
  },

  // ---------------------------------------------------------------- Poway Unified Area D
  {
    id: 'poway-usd-area-d',
    categoryId: 'school',
    title: 'Poway Unified School District, Trustee Area D',
    tldrLabel: 'Poway Unified, Area D',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Poway Unified’s five-member board sets policy, adopts the budget and hires the superintendent. Area D covers much of Rancho Peñasquitos and part of Carmel Mountain Ranch and Sabre Springs.',
      'Board president Michelle O’Connor-Ratcliff faces two challengers who both focus on special education and accountability while the district copes with a deficit and falling enrollment.',
    ],
    introParagraphs: [
      'Three candidates seek one four-year term in a single November contest. O’Connor-Ratcliff is endorsed by the county Democratic Party and Daniela Darling by the county Republican Party and Reform California (KPBS). No endorsements were found for Jennifer Dahlquist Ramirez.',
    ],
    legalRequirements: PUSD_LEGAL,
    qualificationCriteria: PUSD_CRITERIA,
    candidates: [
      {
        id: 'michelle-oconnor-ratcliff',
        name: "Michelle O'Connor-Ratcliff",
        party: 'NP',
        role: 'Governing Board Member, Poway Unified School District',
        campaignUrl: 'https://www.mor4pusd.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'O’Connor-Ratcliff is the Area D incumbent and has been board president for five years. She also teaches business law at the University of San Diego.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Area D trustee, term expiring 2026, and board president (County Office of Education list; district site); five years as president (statement).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has presided over district budget votes during the enrollment decline; promises more fiscal accountability (statement).' },
            { criterionId: 'schools', assessment: 'met', evidence: 'Says she has a particular focus on special-education excellence; board oversight of instruction.' },
            { criterionId: 'community', assessment: 'met', evidence: 'PUSD graduate, daughter of retired PUSD teachers, PUSD parent, former PTA board member (statement).' },
          ],
        },
        bio: [
          'O’Connor-Ratcliff is a Poway Unified graduate, the daughter of retired district teachers, and a district parent. She holds degrees from Stanford and UC Law SF and teaches business law at the University of San Diego.',
          'She has been board president for five years and cites student inclusion, family participation and special education as priorities (candidate statement).',
        ],
        recordVsChange:
          'She points to family engagement and new programs under her leadership. Challengers say parents are shut out of decisions and the budget has slipped into deficit; a federal court also found she violated two parents’ First Amendment rights by blocking them on social media.',
        scorecard: [
          { topic: 'Special education', position: '✓✓ Names it her particular passion', comparison: 'Ramirez and Darling both say special-ed families are under-served.' },
          { topic: 'Budget', position: '✓ Promises fiscal accountability', comparison: 'Darling opposes new bonds; Ramirez wants to “account for every dollar.”' },
          { topic: 'Parent voice', position: '~ Cites parent meetings and school events', comparison: 'Darling says parents are left “protesting in the parking lot.”' },
          { topic: 'Inclusion', position: '✓ Championed inclusion and belonging efforts', comparison: 'Darling wants a return to basics.' },
          { topic: 'Ideology', position: '~ Endorsed by county Democrats', comparison: 'Darling is endorsed by the county GOP and Reform California.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party (KPBS, Sept 30, 2026).',
        redFlags: [
          {
            severity: 'serious',
            status: 'official-finding',
            text: 'Parents Christopher and Kimberly Garnier sued after she blocked them from her Facebook and Twitter pages. A federal judge and the Ninth Circuit ruled for the parents; the U.S. Supreme Court vacated and remanded in March 2024 under a new test. On remand the Ninth Circuit again held she violated their First Amendment rights and affirmed injunctive relief (LCW summary, July 2025). She argued her pages were never approved as official.',
            whyItMatters: 'A trustee’s handling of public criticism goes to how open the board is to parents.',
            sources: [
              { label: 'KPBS (Mar 15, 2024)', url: 'https://kpbs.org/news/education/2024/03/15/supreme-court-rules-on-social-media-case-involving-poway-unified-officials' },
              { label: 'U.S. Supreme Court docket 22-324', url: 'https://www.supremecourt.gov/docket/docketfiles/html/public/22-324.html' },
              { label: 'LCW: Ninth Circuit ruling on remand', url: 'https://www.lcwlegal.com/news/ninth-circuit-rules-against-school-trustee-for-blocking-parents-on-social-media/' },
            ],
          },
        ],
      },
      {
        id: 'daniela-darling',
        name: 'Daniela Darling',
        party: 'NP',
        role: 'Parent/Children Therapist',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Darling is a Poway Unified parent and child therapist who has attended board meetings. She has no documented board or school-budget experience.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board service published; has attended PUSD board meetings (statement).' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget role published.' },
            { criterionId: 'schools', assessment: 'partial', evidence: 'Works as a child therapist (ballot designation); no school role published.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'PUSD parent and volunteer who moved to Poway for her child’s schooling (statement).' },
          ],
        },
        bio: [
          'Darling describes herself as a Hispanic Poway Unified parent, child therapist, broadcast communication graduate and volunteer who moved to Poway for her child’s education.',
          'She wants a return to reading, writing and math, district-wide behavior standards, parent input before major decisions, and no new bonds to close the deficit (candidate statement).',
        ],
        scorecard: [
          { topic: 'Budget', position: '✓ Opposes new bonds; “smarter, accountable choices”', comparison: 'O’Connor-Ratcliff promises fiscal accountability as incumbent.' },
          { topic: 'Parent voice', position: '✓✓ Parent input before every major decision', comparison: 'O’Connor-Ratcliff cites parent meetings.' },
          { topic: 'Academics/behavior', position: '✓ Back to basics; consistent behavior standards', comparison: 'Ramirez frames the problem as weak board governance.' },
          { topic: 'Special education', position: '✓ Real support instead of fights over legally owed services', comparison: 'Ramirez is a special-education specialist.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County; Reform California (KPBS, Sept 30, 2026).',
      },
      {
        id: 'jennifer-dahlquist-ramirez',
        name: 'Jennifer Dahlquist Ramirez',
        party: 'NP',
        role: 'Educational Consultant',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Ramirez, 52, is a career educator with general and special-education experience who now runs a consulting firm. She has not held elected office.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board service published; says boards fail where they lack training (statement).' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget role published.' },
            { criterionId: 'schools', assessment: 'met', evidence: 'More than 20 years teaching general and special education, including 17 years at a California public high school (statement).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Mother of four and founder of JenEd Comprehensive Education Services (statement); local ties not detailed.' },
          ],
        },
        bio: [
          'Ramirez, 52, is a mother of four and founder of JenEd Comprehensive Education Services. She says she has taught for more than 20 years in general and special education, public and private, including 17 years at a California public high school.',
          'She argues students with disabilities, English learners and children in poverty are under-served and wants the board to follow its own bylaws (candidate statement).',
        ],
        scorecard: [
          { topic: 'Special education', position: '✓✓ Her core issue; calls it costly and poorly understood', comparison: 'O’Connor-Ratcliff also names special education a priority.' },
          { topic: 'Board governance', position: '✓ Hold the board to its bylaws; act before crises', comparison: 'O’Connor-Ratcliff has led the board for five years.' },
          { topic: 'Budget', position: '✓ “Account for every dollar”', comparison: 'Darling opposes new bonds.' },
          { topic: 'Ideology', position: '? No endorsements found', comparison: 'The other two have party endorsements.' },
        ],
        money: NO_MONEY,
        endorsements: 'None found as of Oct 9, 2026.',
      },
    ],
    crossTypology: ct([
      ['PL', "O'Connor-Ratcliff", '◐', 'Progressive Left voters back the Democratic-endorsed incumbent’s inclusion agenda but are uneasy with a court finding that she blocked critics.'],
      ['EL', "O'Connor-Ratcliff", '●', 'Establishment Liberals value her five years as board president and the county Democratic endorsement.'],
      ['DM', "O'Connor-Ratcliff", '●', 'Democratic Mainstays follow the county Democratic Party endorsement for the incumbent.'],
      ['OL', 'Ramirez', '◐', 'Outsider Left voters may prefer the special-education teacher running against board insiders without party backing.', 'Outsider Left voters who put experience first could stay with O’Connor-Ratcliff, who has led the board for five years; they would accept a court finding that she unlawfully blocked critical parents online.'],
      ['SS', 'Ramirez', '○', 'Stressed Sideliners worried about struggling students may like a classroom educator focused on the most vulnerable kids.', 'Stressed Sideliners who want proven hands could back O’Connor-Ratcliff, the board president, though a federal court found she blocked critical parents on social media.'],
      ['AR', 'Darling', '○', 'Ambivalent Right voters lean to the GOP-endorsed parent who opposes new bonds, though she has little record.', 'Ambivalent Right voters who weigh experience could back O’Connor-Ratcliff, who has run the board for five years, giving up Darling’s no-new-bonds stance and accepting the social-media court finding.'],
      ['PR', 'Darling', '●', 'Populist Right voters back the Reform California-endorsed parent who says families are shut out of decisions.'],
      ['CC', 'Darling', '●', 'Committed Conservatives back the county GOP’s pick and her opposition to more bond debt.'],
      ['FF', 'Darling', '●', 'Faith and Flag Conservatives favor her parents-first, back-to-basics message and Republican endorsement.'],
    ]),
    counterArguments: [
      "EL/DM (O'Connor-Ratcliff ●): But federal courts found O'Connor-Ratcliff violated two parents' First Amendment rights by blocking them online, and she presided as the district slid into a deficit.",
      'PR/CC/FF (Darling ●): But Darling has no published board, budget or school experience, while Ramirez offers two decades of classroom and special-education work.',
    ],
    readingLinks: [
      KPBS_ENDORSEMENTS,
      { label: 'KPBS: Supreme Court rules in Poway Unified social media case (Mar 2024)', url: 'https://kpbs.org/news/education/2024/03/15/supreme-court-rules-on-social-media-case-involving-poway-unified-officials', summary: 'Background on the Garnier lawsuit.' },
    ],
  },

  // ---------------------------------------------------------------- Palomar CCD Area 1
  {
    id: 'palomar-ccd-area-1',
    categoryId: 'school',
    title: 'Palomar Community College District, Trustee Area 1',
    tldrLabel: 'Palomar College, Area 1',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Palomar College’s five-member board adopts the budget, oversees construction, approves programs and hires the president. Area 1 covers most of the district south of Highway 78 and west of I-15, including Rancho Bernardo, Rancho Peñasquitos and 4S Ranch.',
      'The board is choosing a new superintendent/president, with a vote set for Nov. 10 and a January 2027 start. The winner will help oversee that leader’s first years.',
    ],
    introParagraphs: [
      'Trustee Judy Patacsil beat Frank Xu for this seat in 2022 with about 54% of the vote (Palomar College). They meet again, with Anthony Wiley added. Patacsil is endorsed by county Democrats, Wiley by Reform California and Xu by the Lincoln Club (KPBS).',
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living in Trustee Area 1; not a Palomar employee.',
    qualificationCriteria: [
      { id: 'governance', label: 'Board governance and oversight', detail: 'Trustees set policy, approve contracts and hire and oversee the president.' },
      { id: 'budget', label: 'Budget and facilities oversight', detail: 'The board adopts the budget and oversees bond and construction spending.' },
      { id: 'highered', label: 'Higher-education knowledge', detail: 'Trustees approve degrees, certificates and accreditation reports.' },
      { id: 'community', label: 'Community and K-12 partnerships', detail: 'Trustees link the college with school districts, employers and local governments.' },
    ],
    candidates: [
      {
        id: 'judy-patacsil',
        name: 'Judy Patacsil',
        party: 'NP',
        role: 'Governing Board Member, Palomar Community College',
        campaignUrl: 'https://www.judypatacsil.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Patacsil has held this seat since December 2022 and spent more than 35 years as a college counselor, professor and administrator.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Area 1 trustee since Dec 2022, term expiring 2026 (Palomar College; County Office of Education list).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on Palomar budgets for four years; cites sound fiscal management (statement).' },
            { criterionId: 'highered', assessment: 'met', evidence: 'Counseling and classroom work at San Diego State and San Diego Miramar College; founded Miramar’s Mental Health Counseling Program (Palomar College; statement).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Cites expanded workforce and university-transfer pathways; no K-12 partnership role detailed.' },
          ],
        },
        bio: [
          'Patacsil, who holds a doctorate, says she has spent more than 35 years as a professor, counselor, licensed psychotherapist and higher-education leader, and founded San Diego Miramar College’s Mental Health Counseling Program.',
          'Elected in 2022, she calls herself the first Filipina American on Palomar’s board and cites workforce education, transfer pathways and fiscal management.',
        ],
        recordVsChange:
          'She points to workforce and transfer gains and transparent governance. Xu argues the college lets “ideological agendas” such as DEI overshadow academics and has not addressed enrollment fraud.',
        scorecard: [
          { topic: 'Workforce/transfer', position: '✓✓ Cites expanded career education and transfer pathways', comparison: 'Xu wants a refocus on academics and workforce training.' },
          { topic: 'Budget', position: '✓ Sound fiscal management', comparison: 'Xu promises stronger fiscal responsibility.' },
          { topic: 'DEI', position: '? No stated position', comparison: 'Xu opposes DEI and anti-racism initiatives.' },
          { topic: 'Ideology', position: '~ Endorsed by county Democrats', comparison: 'Xu is backed by the Lincoln Club, Wiley by Reform California.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party (KPBS, Sept 30, 2026); Poway Democratic Club (club site, Oct 2026).',
      },
      {
        id: 'frank-xu',
        name: 'Frank Xu',
        party: 'NP',
        role: 'Parent/Non-profit Executive',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Xu is a nonprofit founder who ran for this seat in 2022 and has attended Palomar board meetings. He has not held public office.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No public-board service; has attended Palomar board meetings for two years (statement).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Says the nonprofits he founded run balanced budgets without taxpayer money; organizations not named.' },
            { criterionId: 'highered', assessment: 'unknown', evidence: 'No college role published.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Founder of several nonprofits on educational opportunity (statement); names not published.' },
          ],
        },
        bio: [
          'Xu says he left China 21 years ago and now has children in college. He has founded several nonprofits, which he says run balanced budgets without public funds, and cites his Christian faith.',
          'He opposes DEI and anti-racism initiatives and wants to address enrollment fraud and refocus the college on academics and job training (candidate statement).',
        ],
        scorecard: [
          { topic: 'DEI', position: '✗ Opposes DEI and anti-racism initiatives', comparison: 'Patacsil has not taken a stated position.' },
          { topic: 'Enrollment fraud', position: '✓ Promises to address it', comparison: 'Patacsil and Wiley have not published a stance.' },
          { topic: 'Budget', position: '✓ Stronger fiscal responsibility', comparison: 'Patacsil cites sound fiscal management.' },
          { topic: 'Workforce', position: '✓ Refocus on academics and job training', comparison: 'Patacsil cites expanded career education.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego Lincoln Club (KPBS, Sept 30, 2026).',
      },
      {
        id: 'anthony-wiley',
        name: 'Anthony Wiley',
        party: 'NP',
        role: 'Parent/Retired Engineer',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Wiley’s ballot designation is Parent/Retired Engineer. He submitted no candidate statement and no biography or platform was found.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board service documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget role documented.' },
            { criterionId: 'highered', assessment: 'unknown', evidence: 'No college role documented.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'Parent per ballot designation; no community roles published.' },
          ],
        },
        bio: ['Wiley is a parent and retired engineer. He did not submit a ballot statement, and no biography or platform was found.'],
        scorecard: [
          { topic: 'Budget', position: '? No published position', comparison: 'Xu and Patacsil both stress fiscal responsibility.' },
          { topic: 'Workforce', position: '? No published position', comparison: 'Patacsil cites career-education gains.' },
          { topic: 'DEI', position: '? No published position', comparison: 'Xu opposes DEI initiatives.' },
          { topic: 'Ideology', position: '~ Endorsed by Reform California', comparison: 'Xu is backed by the Lincoln Club; Patacsil by county Democrats.' },
        ],
        money: NO_MONEY,
        endorsements: 'Reform California (KPBS, Sept 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Patacsil', '●', 'Progressive Left voters back the Democratic-endorsed incumbent over a challenger who opposes DEI and anti-racism programs.'],
      ['EL', 'Patacsil', '●', 'Establishment Liberals value her decades in higher education and her role in the president search.'],
      ['DM', 'Patacsil', '●', 'Democratic Mainstays follow the county Democratic endorsement for the incumbent.'],
      ['OL', 'Patacsil', '◐', 'Outsider Left voters may want board change but get no left-leaning alternative.'],
      ['SS', 'Patacsil', '○', 'Stressed Sideliners who want job training and stability may default to the experienced incumbent.'],
      ['AR', 'Patacsil', '◐', 'Ambivalent Right voters who care about job training and steady leadership through a president search may prefer the incumbent to an ideological challenger.'],
      ['PR', 'Wiley', '○', 'Populist Right voters may follow the Reform California endorsement, though Wiley has published nothing.', 'Populist Right voters who want proven experience could back Patacsil, a four-year trustee and longtime college counselor, giving up a conservative-endorsed outsider.'],
      ['CC', 'Xu', '●', 'Committed Conservatives back the Lincoln Club pick who promises fiscal discipline and an end to DEI programs.'],
      ['FF', 'Xu', '●', 'Faith and Flag Conservatives favor the candidate who cites his Christian faith and opposes ideological teaching.'],
    ]),
    counterArguments: [
      'PL/EL/DM (Patacsil ●): But some voters may want a change after four years; Xu says he has spent two years watching board meetings and would push on enrollment fraud.',
      'CC/FF (Xu ●): But Xu has never held public office or run a public budget, and Patacsil has spent decades in California colleges.',
    ],
    readingLinks: [
      KPBS_ENDORSEMENTS,
      CHRONICLE,
      { label: 'Palomar College: 2026 president search timeline', url: 'https://www.palomar.edu/presidentsearch/search-timeline', summary: 'Finalist forums in late October; board vote Nov. 10.' },
      { label: 'Palomar College: 2022 board results', url: 'https://www.palomar.edu/news/palomars-governing-board-to-welcome-three-new-trustees/', summary: 'Patacsil beat Xu for Area 1 in 2022.' },
    ],
  },

  // ---------------------------------------------------------------- Palomar Health Division 5
  {
    id: 'palomar-health-div-5',
    categoryId: 'district',
    title: 'Palomar Health District, Board of Directors, Division 5',
    tldrLabel: 'Palomar Health, Div. 5',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Palomar Health is a public hospital district that runs medical centers in Escondido and Poway. Its seven elected directors oversee a system that missed bond covenants on more than $700 million in debt (Voice of San Diego).',
      'Since July 2026 Palomar’s hospitals have been run through a joint authority with UC San Diego Health. The district board appoints three of its six members.',
    ],
    introParagraphs: [
      'Director John Clark has represented this Rancho Bernardo–area division for eight years. He was the lone director to abstain on the UCSD partnership in 2025, saying Palomar had lost about $400 million (Voice of San Diego). Registered nurse Amanda Christensen challenges him; no endorsements for her were found.',
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living in Division 5 of the Palomar Health District.',
    qualificationCriteria: [
      { id: 'governance', label: 'Public-board governance', detail: 'Directors set policy, oversee the CEO and appoint members to the joint UCSD authority.' },
      { id: 'finance', label: 'Hospital finance', detail: 'The district carries heavy bond debt and has had years of operating losses.' },
      { id: 'clinical', label: 'Healthcare operations and quality', detail: 'Directors oversee patient care, services and staffing across two hospitals.' },
      { id: 'community', label: 'Community health and access', detail: 'Directors decide which services stay close to home in Poway and Escondido.' },
    ],
    candidates: [
      {
        id: 'amanda-christensen',
        name: 'Amanda Christensen',
        party: 'NP',
        role: 'Registered Nurse, Scripps Health',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Christensen is a registered nurse with more than 14 years in North County hospitals, including team-leadership roles. She has not held office.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board service published.' },
            { criterionId: 'finance', assessment: 'unknown', evidence: 'No finance role published.' },
            { criterionId: 'clinical', assessment: 'met', evidence: 'RN, BSN with more than 14 years of patient care; has led nursing teams and coordinated care (statement); now at Scripps Health.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Longtime North County resident focused on access to care (statement).' },
          ],
        },
        bio: [
          'Christensen is a registered nurse at Scripps Health with more than 14 years caring for North County patients. She says she has supported nursing teams and coordinated care on demanding shifts.',
          'She wants the board to advocate for community wellness and access to care, support healthcare workers, and build stronger ties between Palomar Health and the communities it serves (candidate statement).',
        ],
        scorecard: [
          { topic: 'Finances', position: '? No published plan', comparison: 'Clark says leadership lost about $400 million.' },
          { topic: 'UCSD partnership', position: '? No stated position', comparison: 'Clark abstained and criticized its governance.' },
          { topic: 'Access to care', position: '✓ Care close to home', comparison: 'Clark cites quality, transparent care.' },
          { topic: 'Health workers', position: '✓✓ Frontline nurse; supporting staff a priority', comparison: 'Clark is a healthcare executive.' },
        ],
        money: NO_MONEY,
        endorsements: 'None found as of Oct 9, 2026.',
      },
      {
        id: 'john-clark',
        name: 'John Clark',
        party: 'NP',
        role: 'Incumbent',
        campaignUrl: 'https://www.johnclarkforpalomarhealth.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Clark has been a Palomar Health director for eight years and says he has more than 40 years as a healthcare executive.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Director for eight years (statement); listed as a director in Dec 2021 (Times of San Diego).' },
            { criterionId: 'finance', assessment: 'met', evidence: 'Founder and CEO of Global Cancer Technology; says he has negotiated national and international hospital agreements (statement).' },
            { criterionId: 'clinical', assessment: 'partial', evidence: 'Has operated surgery centers and cancer-treatment facilities as an owner (statement); not a clinician.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Poway/Rancho Bernardo family ties; eight years representing the division.' },
          ],
        },
        bio: [
          'Clark is founder and CEO of Global Cancer Technology and says he has more than 40 years as a healthcare business owner running surgery centers and cancer-treatment facilities. He and his wife have six children and 20 grandchildren in Poway and Rancho Bernardo.',
          'On the board he has often voted in a two-member minority against the majority (Voice of San Diego, 2024).',
        ],
        recordVsChange:
          'Clark has been an internal critic of Palomar’s leadership, objecting to the CEO’s pay and the UCSD authority’s governance. Supporters see a watchdog; others note he has rarely carried a majority.',
        scorecard: [
          { topic: 'Finances', position: '✓ Says leadership lost about $400 million; critic of CEO pay', comparison: 'Christensen has no published finance plan.' },
          { topic: 'UCSD partnership', position: '~ Abstained; says it weakens voters’ representation', comparison: 'Christensen has not stated a position.' },
          { topic: 'Board dynamics', position: '~ Often in a 2–5 minority', comparison: 'Christensen would be a new vote.' },
          { topic: 'Ideology', position: '~ Endorsed by Reform California and listed by the county GOP', comparison: 'No endorsements found for Christensen.' },
        ],
        money: NO_MONEY,
        endorsements: 'Reform California; Republican Party of San Diego County (KPBS, Sept 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Christensen', '●', 'Progressive Left voters prefer a frontline nurse focused on workers and access over a Reform California-endorsed executive.'],
      ['EL', 'Christensen', '◐', 'Establishment Liberals may want a director who works with the UCSD partnership rather than against it.', 'Establishment Liberals who put experience first could back Clark, an eight-year director and healthcare executive, though he opposed the UCSD authority’s structure.'],
      ['DM', 'Christensen', '◐', 'Democratic Mainstays lean to the nurse over the incumbent endorsed by Republicans.', 'Democratic Mainstays who value board experience could back Clark, who has watched Palomar’s finances for eight years, accepting a Republican-endorsed director.'],
      ['OL', 'Christensen', '◐', 'Outsider Left voters like a frontline worker’s voice on the board, though Clark is also an outsider critic.', 'Outsider Left voters who weigh experience could back Clark, a persistent critic of executive pay and the $400 million in losses he cites.'],
      ['SS', 'Clark', '○', 'Stressed Sideliners worried about hospital debt may credit the incumbent who has warned about losses.'],
      ['AR', 'Clark', '◐', 'Ambivalent Right voters value his business background and scrutiny of management.'],
      ['PR', 'Clark', '●', 'Populist Right voters back the Reform California pick who challenges hospital leadership and CEO pay.'],
      ['CC', 'Clark', '●', 'Committed Conservatives back the GOP-listed incumbent’s focus on losses and debt.'],
      ['FF', 'Clark', '●', 'Faith and Flag Conservatives favor the incumbent with deep family roots in Poway and Rancho Bernardo.'],
    ]),
    counterArguments: [
      'PL (Christensen ●): But Christensen has no published view on Palomar’s debt or the UCSD authority, the board’s two biggest questions.',
      'PR/CC/FF (Clark ●): But Clark has rarely won majorities over eight years, and the board voted to go ahead with UCSD over his objections.',
    ],
    readingLinks: [
      CHRONICLE,
      KPBS_ENDORSEMENTS,
      { label: 'Voice of San Diego: Palomar Health’s UCSD partnership (Oct 2025)', url: 'https://voiceofsandiego.org/2025/10/22/north-county-report-palomar-healths-new-partnership-with-ucsd-health/', summary: 'Terms of the joint authority and Clark’s objections.' },
    ],
  },

  // ---------------------------------------------------------------- Palomar Health Division 7
  {
    id: 'palomar-health-div-7',
    categoryId: 'district',
    title: 'Palomar Health District, Board of Directors, Division 7',
    tldrLabel: 'Palomar Health, Div. 7',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Palomar Health is a public hospital district that runs medical centers in Escondido and Poway. Its seven elected directors oversee a system that missed bond covenants on more than $700 million in debt (Voice of San Diego).',
      'Since July 2026 Palomar’s hospitals have been run through a joint authority with UC San Diego Health. Butler says Poway-area voters have lost services such as the Poway birth center.',
    ],
    introParagraphs: [
      'Linda Greer, a nurse and former board chair, is seeking re-election. Critical-care physician Ian Butler says better management can restore services lost in Poway. Greer is endorsed by county Democrats and Butler by Reform California (KPBS).',
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living in Division 7 of the Palomar Health District.',
    qualificationCriteria: [
      { id: 'governance', label: 'Public-board governance', detail: 'Directors set policy, oversee the CEO and appoint members to the joint UCSD authority.' },
      { id: 'finance', label: 'Hospital finance', detail: 'The district carries heavy bond debt and has had years of operating losses.' },
      { id: 'clinical', label: 'Healthcare operations and quality', detail: 'Directors oversee patient care, services and staffing across two hospitals.' },
      { id: 'community', label: 'Community health and access', detail: 'Directors decide which services stay close to home in Poway and Escondido.' },
    ],
    candidates: [
      {
        id: 'ian-butler',
        name: 'Ian Butler',
        party: 'NP',
        role: 'Critical Care Physician, Tri-City Medical Center',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Butler is a practicing critical-care physician with healthcare-management experience and an MBA. He has not served on a public board.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No public-board service published.' },
            { criterionId: 'finance', assessment: 'partial', evidence: 'MBA training and healthcare-management work over 20 years (statement); roles not specified.' },
            { criterionId: 'clinical', assessment: 'met', evidence: 'Critical-care physician at Tri-City Medical Center (ballot designation); 20 years as a bedside doctor (statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Lives in the district with two children; son born at the now-closed Poway birth center; coaches youth football.' },
          ],
        },
        bio: [
          'Butler is a critical-care physician at Tri-City Medical Center with two children in the district. He says he has spent 20 years as a bedside doctor and in healthcare management, using MBA training to protect critical programs.',
          'He argues the Poway area has lost needed services over the past decade and that better management can restore them (candidate statement).',
        ],
        scorecard: [
          { topic: 'Poway services', position: '✓✓ Restore lost local services', comparison: 'Greer cites the UCSD partnership as expanding access.' },
          { topic: 'Finances', position: '✓ Keep Palomar financially strong', comparison: 'Greer stresses “thoughtful stewardship.”' },
          { topic: 'UCSD partnership', position: '? No stated position', comparison: 'Greer helped lead it.' },
          { topic: 'Ideology', position: '~ Endorsed by Reform California', comparison: 'Greer is endorsed by county Democrats.' },
        ],
        money: NO_MONEY,
        endorsements: 'Reform California (KPBS, Sept 30, 2026).',
      },
      {
        id: 'linda-greer',
        name: 'Linda C Greer',
        party: 'NP',
        role: 'Registered Nurse',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Greer is the Division 7 incumbent, a former board chair, and a registered nurse for more than 45 years.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Board chair in 2021 (Times of San Diego) and vice chair in 2024 (Voice of San Diego); seeking re-election.' },
            { criterionId: 'finance', assessment: 'partial', evidence: 'Has voted on Palomar budgets and the 2024 Mesa Rock management contract; no finance profession.' },
            { criterionId: 'clinical', assessment: 'met', evidence: 'Registered nurse for more than 45 years in North County (statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Longtime North County resident; championed Legacy One Safe Place (statement).' },
          ],
        },
        bio: [
          'Greer is a registered nurse who says she has cared for North County families for more than 45 years and is a mother of nine. She has chaired the Palomar Health board.',
          'She says she helped lead the partnership with UC San Diego Health and championed community programs such as Legacy One Safe Place (candidate statement).',
        ],
        recordVsChange:
          'Greer backed the UCSD authority and the 2024 Mesa Rock management contract. The Escondido Democratic Club pulled its support over that vote, calling it a step toward privatization (Voice of San Diego, 2024).',
        scorecard: [
          { topic: 'UCSD partnership', position: '✓✓ Helped lead it', comparison: 'Butler has not stated a position.' },
          { topic: 'Poway services', position: '~ Stresses access “close to home”', comparison: 'Butler says Poway has lost services under current management.' },
          { topic: 'Finances', position: '~ “Thoughtful stewardship”; voted with the majority', comparison: 'Butler cites his MBA and management work.' },
          { topic: 'Ideology', position: '~ Endorsed by county Democrats', comparison: 'Butler is endorsed by Reform California.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party (KPBS, Sept 30, 2026).',
        notes: ['In 2024 the Escondido Democratic Club withdrew support from Greer and three other directors over their vote for the Mesa Rock management contract (Voice of San Diego). This is a policy dispute, not a conduct finding.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Greer', '◐', 'Progressive Left voters back the Democratic-endorsed nurse, though some share the club’s privatization worries about her contract vote.'],
      ['EL', 'Greer', '●', 'Establishment Liberals value the former chair who helped build the UCSD partnership.'],
      ['DM', 'Greer', '●', 'Democratic Mainstays follow the county Democratic endorsement for the longtime nurse.'],
      ['OL', 'Butler', '○', 'Outsider Left voters may want a new voice to restore lost Poway services instead of the board majority.'],
      ['SS', 'Butler', '○', 'Stressed Sideliners who lost a nearby birth center or emergency option may like his promise to bring services back.'],
      ['AR', 'Butler', '◐', 'Ambivalent Right voters like a physician with management training to fix finances and services.'],
      ['PR', 'Butler', '●', 'Populist Right voters back the Reform California pick challenging the management that cut local services.'],
      ['CC', 'Butler', '●', 'Committed Conservatives favor a physician-manager over the incumbent majority that oversaw large losses.'],
      ['FF', 'Butler', '◐', 'Faith and Flag Conservatives lean to the coach and father focused on local care, though Greer’s family ties run deep too.'],
    ]),
    counterArguments: [
      'EL/DM (Greer ●): But Greer was part of the board majority while Palomar missed bond covenants, and Butler says Poway lost services on its watch.',
      'PR/CC (Butler ●): But Butler has never served on a public board, and the UCSD authority he would help oversee is already in place.',
    ],
    readingLinks: [
      CHRONICLE,
      KPBS_ENDORSEMENTS,
      { label: 'Voice of San Diego: Palomar Health board power dynamics (Oct 2024)', url: 'https://voiceofsandiego.org/2024/10/28/palomar-health-board-elections-could-shift-board-power-dynamics/', summary: 'Voting blocs and the Mesa Rock contract.' },
    ],
  },
];
