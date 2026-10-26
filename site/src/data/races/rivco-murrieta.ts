import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * ZIP 92562 (Murrieta, Riverside County): Superior Court Office 10, Murrieta Valley USD trustee areas 1 and 2,
 * Rancho California Water District, Murrieta Valley USD Measure M, and RCTC Measure A.
 * Names and ballot designations confirmed against the Riverside County Registrar's Contest/Candidate Proof List
 * (printed Sept 11, 2026). Researched Oct 8, 2026.
 */
export const RACES_RIVCO_MURRIETA: Race[] = [
  // ───────────────────────── Superior Court, Office 10 ─────────────────────────
  {
    id: 'rivco-superior-court-10',
    categoryId: 'judicial',
    title: 'Riverside County Superior Court, Office No. 10',
    tldrLabel: 'Superior Court Judge, Office 10',
    seatContext: 'Open seat (Judge Harold Hopp retiring)',
    kind: 'candidates',
    stakesParagraphs: [
      'Superior Court judges decide felony and misdemeanor trials, civil disputes, family and probate cases, and set bail, sentences and custody orders. Office No. 10 is a countywide seat, so every Riverside County voter picks the winner, and the judge serves a six-year term.',
      'This seat is open because Judge Harold Hopp is retiring. Superior Court candidates cannot run as members of a party, so the contest turns on legal background, courtroom experience and judicial temperament rather than platforms.',
    ],
    introParagraphs: [
      'In the June 2 primary, Michelle Paradise received 207,973 votes, Andrea Garcia 183,386 and Jennifer Loflin 80,833, according to the Inland Empire Law News report on the results. Paradise and Garcia advance to the November 3 runoff.',
      'Paradise is a longtime Riverside County prosecutor; Garcia is a deputy public defender with an immigration-law specialty. The two debated on Sept. 21 at Riverside City College (Hoodline). We found no published bar-association rating for either candidate.',
    ],
    readingLinks: [
      {
        label: 'Hoodline: Paradise vs. Garcia, Nov. 3 (Oct 2026)',
        url: 'https://hoodline.com/2026/10/riverside-county-judicial-race-heats-up-as-paradise-nabs-prosecutor-backed-endorsement/',
        summary: 'Backgrounds, primary results, endorsements and the Sept. 21 debate.',
      },
      {
        label: 'MyNewsLA: Judicial race pits veteran prosecutor against defense attorneys (June 2026)',
        url: 'https://mynewsla.com/government/2026/06/02/judicial-race-pits-veteran-prosecutor-against-defense-attorneys/',
        summary: 'Primary-day profile of all three original candidates.',
      },
      {
        label: 'Inland Empire Law News: Loflin endorses Garcia',
        url: 'https://ielaw.news/loflin-endorses-garcia-for-judge/',
        summary: 'Primary vote totals and the third-place finisher’s endorsement.',
      },
    ],
    legalRequirements: 'Registered voter in the county; State Bar member for at least 10 years (Cal. Const. art. VI, §15).',
    qualificationCriteria: [
      { id: 'trial', label: 'Courtroom and trial experience', detail: 'A trial judge presides over contested hearings and jury trials, so hands-on litigation experience matters.' },
      { id: 'breadth', label: 'Breadth of legal knowledge', detail: 'The bench hears criminal, civil, family and probate matters, often outside a judge’s prior specialty.' },
      { id: 'management', label: 'Case and docket management', detail: 'Riverside’s court has heavy caseloads; judges must run calendars efficiently and fairly.' },
      { id: 'ethics', label: 'Ethics and judicial temperament', detail: 'Judges are bound by the Code of Judicial Ethics and must treat all parties fairly and decide on the law and facts.' },
    ],
    candidates: [
      {
        id: 'michelle-paradise',
        name: 'Michelle Paradise',
        party: 'NP',
        role: 'Assistant District Attorney, County of Riverside',
        campaignUrl: 'https://paradiseforjudge.com',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Paradise has about 26 years in the Riverside County District Attorney’s Office, rising to Assistant District Attorney, and says she has tried more than 100 jury cases. She has not served as a judge.',
          criteria: [
            { criterionId: 'trial', assessment: 'met', evidence: 'Line prosecutor for 18 years, chief deputy DA for one year and assistant DA for seven years (MyNewsLA); her campaign site says she has tried more than 100 jury trials.' },
            { criterionId: 'breadth', assessment: 'partial', evidence: 'Career has been in criminal prosecution, including child abuse, sex crimes and homicide cases; no civil, family or probate practice is listed.' },
            { criterionId: 'management', assessment: 'met', evidence: 'Assistant District Attorney for seven years and Riverside County’s assistant county executive officer for public safety from 2023 until retiring in June 2026.' },
            { criterionId: 'ethics', assessment: 'unknown', evidence: 'No discipline or ethics complaint appears in the news coverage reviewed; the State Bar attorney profile is the place to confirm her record.' },
          ],
        },
        bio: [
          'Paradise started as a 911 police and fire dispatcher (1986 to 1994), graduated from the University of San Diego School of Law and joined the Riverside County District Attorney’s Office in 1997, where she handled child abuse, sex crime and homicide cases (campaign site).',
          'She served as assistant county executive officer for public safety from 2023 until June 2026, then returned to the District Attorney’s Office as an Assistant District Attorney, the designation printed on the ballot.',
        ],
        scorecard: [
          { topic: 'Bar rating', position: '? No published bar-association rating found', comparison: 'None found for Garcia either as of Oct 8, 2026.' },
          { topic: 'Bench/trial background', position: '✓✓ About 26 years as a prosecutor; says she tried 100+ jury trials', comparison: 'Garcia has nearly 20 years in defense and immigration practice; her trial count is not published.' },
          { topic: 'Ethics/discipline', position: '? No discipline reported in coverage reviewed', comparison: 'Same for Garcia; check the State Bar profiles.' },
          { topic: 'Temperament', position: '✓ Says she has “seen the justice system from every angle” and stresses fairness and impartiality', comparison: 'Garcia stresses judicial independence and due process for all; both are self-descriptions.' },
        ],
        money: 'No campaign finance totals found as of Oct 8, 2026; filings are posted by the Riverside County Registrar of Voters.',
        endorsements:
          'Riverside County District Attorney Mike Hestrin, Sheriff Chad Bianco, Public Defender Steve Harmon, Presiding Judge Jacqueline Jackson, members of the Board of Supervisors, many active and retired Riverside County judges, and several law-enforcement associations, per her campaign site (as of Oct 8, 2026). Journalist Chris Hansen has also endorsed her (NBC Palm Springs, Oct 6, 2026).',
        notes: [
          'Sources: https://paradiseforjudge.com, https://www.nbcpalmsprings.com/local-and-community/2026/10/06/riverside-county-da-chris-hansen-endorse-superior-court-candidate-michelle-paradise',
        ],
      },
      {
        id: 'andrea-garcia',
        name: 'Andrea Garcia',
        party: 'NP',
        role: 'Deputy Public Defender, County of San Bernardino',
        campaignUrl: 'https://garciaforjudge2026.com',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Garcia reports nearly 20 years practicing law as a deputy public defender, immigration specialist and solo practitioner. Less detail on her trial record has been published than for Paradise.',
          criteria: [
            { criterionId: 'trial', assessment: 'partial', evidence: 'Deputy public defender in San Bernardino County who litigates post-conviction relief and says she has nearly 20 years defending vulnerable clients (campaign site, MyNewsLA); a jury-trial count is not published.' },
            { criterionId: 'breadth', assessment: 'partial', evidence: 'Criminal defense, post-conviction relief and an immigration-law specialty; no probate or family docket listed.' },
            { criterionId: 'management', assessment: 'partial', evidence: 'Built Riverside County’s first in-house immigration unit in the Public Defender’s Office and has run her own law firm (campaign site, self-reported).' },
            { criterionId: 'ethics', assessment: 'unknown', evidence: 'No discipline or ethics complaint appears in the news coverage reviewed; the State Bar attorney profile is the place to confirm her record.' },
          ],
        },
        bio: [
          'Garcia is a San Bernardino County deputy public defender who litigates post-conviction relief and focuses on immigration law. She says she created the first in-house immigration unit at the Riverside County Public Defender’s Office and has run her own firm representing clients facing deportation.',
          'Her campaign describes her as an immigration-law specialist and says she has drafted state legislation on proportional punishment and access to courts. Details such as her law school and State Bar admission year are not on her campaign site; news profiles differ on her law school, so we do not state one.',
        ],
        scorecard: [
          { topic: 'Bar rating', position: '? No published bar-association rating found', comparison: 'None found for Paradise either as of Oct 8, 2026.' },
          { topic: 'Bench/trial background', position: '✓ Nearly 20 years in public defense, post-conviction and immigration practice', comparison: 'Paradise has about 26 years and 100+ jury trials on the prosecution side.' },
          { topic: 'Ethics/discipline', position: '? No discipline reported in coverage reviewed', comparison: 'Same for Paradise; check the State Bar profiles.' },
          { topic: 'Temperament', position: '✓ Campaign theme is “Rule of Law. Judicial Independence. Due Process for All.”', comparison: 'Paradise stresses fairness and accountability; both are self-descriptions.' },
        ],
        money: 'No campaign finance totals found as of Oct 8, 2026; filings are posted by the Riverside County Registrar of Voters.',
        endorsements:
          'Former primary candidate Jennifer Loflin (Inland Empire Law News); Riverside County Democratic Party (party post on X, undated in our copy). A Blue Voter Guide listing also shows the Mexican American Bar Association, which we could not confirm on the association’s own site. Her campaign site claims “the most judicial endorsements” but names none (as of Oct 8, 2026).',
        notes: [
          'Her campaign statements are self-reported and we found no independent profile confirming every claim.',
          'Sources: https://garciaforjudge2026.com, https://ielaw.news/loflin-endorses-garcia-for-judge/, https://x.com/OfficialRCDP/status/2051746912479350874',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Garcia', '●', 'Leftward Progressives are the group most skeptical of police (28% have confidence in them) and most focused on defendants’ rights, so they favor Garcia, a public defender who built an immigration unit, over a career prosecutor backed by the District Attorney and Sheriff.'],
      ['LL', 'Paradise / Garcia', '=', 'Loyal Liberals weigh institutional trust against due process: if expert judgment and endorsements from the presiding judge, many sitting judges and even the county Public Defender, plus a better-documented trial record, matter most, Paradise; if adding a defense lawyer’s view of due process to a bench drawn heavily from prosecutors matters more, Garcia, whom the county Democratic Party backed.'],
      ['LO', 'Garcia', '◐', 'Left-Out Left voters oppose deportation drives, with only about 7% backing a national deportation effort, and are wary of insiders, so they lean to Garcia, an immigration-law specialist outside the county power structure, over Paradise, a former assistant county executive.'],
      ['OO', 'Paradise', '◐', 'Order and Opportunity Left voters worry about violent crime (about 52% call it a very big problem) and trust police (about 69% have confidence in them), which favors Paradise’s long record prosecuting child-abuse, sex-crime and homicide cases, though their moderate immigration views give Garcia some appeal.'],
      ['TM', 'Paradise', '○', 'Tuned-Out Middle voters pay little attention to judicial races, but most trust police (about 66% have confidence in them) and see violent crime as a big problem, which gives Paradise, the longtime prosecutor, a weak edge.'],
      ['PP', 'Paradise', '●', 'Pragmatic and Polite Right voters, about 84% of whom have confidence in police, prize rule of law and proven competence, and Paradise’s 26 years in the District Attorney’s Office, 100-plus jury trials and broad support from sitting judges fit that best.'],
      ['UR', 'Paradise', '●', 'Unconventional Right voters put crime and immigration enforcement first, with about 50% backing a national deportation effort, so they favor a veteran prosecutor over a public defender whose specialty is defending clients facing deportation.'],
      ['FC', 'Paradise', '●', 'Faith First Conservatives value law and order and protecting children, and Paradise built her career prosecuting child-abuse and sex-crime cases with law-enforcement backing.'],
      ['NA', 'Paradise', '●', 'No Apologies Right voters want tough-on-crime judges and hard-line immigration enforcement, with 81% backing a national deportation effort, so they back the prosecutor endorsed by the District Attorney and Sheriff over an immigration defense lawyer.'],
    ]),
    counterArguments: [
      'PP/UR/FC/NA (Paradise ●): But consider Garcia, because a judge must be neutral, nearly 20 years of defense and immigration work is real courtroom experience, and neither candidate has served as a judge.',
      'LP/LO (Garcia ●/◐): But consider Paradise, because her trial volume and management roles are the best-documented experience either candidate has published, and the county Public Defender himself endorsed her.',
    ],
  },

  // ───────────────────────── MVUSD Trustee Area 1 ─────────────────────────
  {
    id: 'mvusd-trustee-area-1',
    categoryId: 'school',
    title: 'Murrieta Valley Unified, Trustee Area 1',
    tldrLabel: 'MVUSD Trustee Area 1',
    seatContext: 'Incumbent running',
    kind: 'candidates',
    stakesParagraphs: [
      'The Murrieta Valley Unified school board sets the budget for the district, hires and oversees the superintendent, approves curriculum and adopts policies such as student-notification rules. Each of the five trustees represents one area but is elected only by voters in that area.',
      'Trustee Area 1 is up because Nick Pardue’s four-year term ends in 2026. The winner will help oversee any Measure M bond money if voters approve it, and will vote on a board that has split 3-2 on several high-profile issues.',
    ],
    introParagraphs: [
      'Three candidates are on the ballot: incumbent Nick Pardue, retired teacher Guia M. Blaske and teacher and coach Jeremy Murphy. We could not determine what share of ZIP 92562 lives in Trustee Area 1; the area includes Clinton Keith Road near the Bear Creek fire station.',
      'Little has been published about Blaske and Murphy beyond their ballot designations and candidate statements; Pardue was elected in 2022 with an endorsement from Reform California (a conservative group led by Carl DeMaio).',
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living in Trustee Area 1.',
    qualificationCriteria: [
      { id: 'governance', label: 'Board governance experience', detail: 'Trustees adopt policy, hire the superintendent and must follow open-meeting and state education law.' },
      { id: 'finance', label: 'Budget and finance oversight', detail: 'The board approves a budget of hundreds of millions of dollars and oversees facility bonds.' },
      { id: 'education', label: 'Classroom and education knowledge', detail: 'Trustees weigh curriculum, staffing and student-support decisions.' },
      { id: 'community', label: 'Community engagement and collaboration', detail: 'A five-member board must work with parents, staff and each other to pass anything.' },
    ],
    candidates: [
      {
        id: 'nick-pardue',
        name: 'Nick Pardue',
        party: 'NP',
        role: 'Murrieta Valley Unified School Board Trustee',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Pardue is the sitting Trustee Area 1 member, a former board president and clerk, and a teacher by background.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Elected in 2022 and has served as board president and clerk (Riverside Record and 2024 coverage).' },
            { criterionId: 'finance', assessment: 'partial', evidence: 'Has voted on the district budget as trustee; a Riverside Record report says he voted against calling a bond election two years before the board unanimously placed Measure M on the ballot in May 2026.' },
            { criterionId: 'education', assessment: 'met', evidence: 'Described in 2022 campaign coverage as an economics and history teacher.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Part of 3-2 board splits on the parental-notification policy and on how to fill the 2025 Trustee Area 3 vacancy; no broader collaboration record is published.' },
          ],
        },
        bio: [
          'Pardue was elected to the board in 2022 as a back-to-basics, parental-rights candidate with a Reform California endorsement, and has since served as board president and clerk.',
          'The board adopted a student parental-notification policy 3-2 in 2023; the California Department of Education found it unlawful in April 2024, and Pardue voted to keep it. The board later voted 3-2 to rescind it, with Pardue opposed.',
        ],
        recordVsChange:
          'Pardue offers institutional knowledge and a record of voting his stated principles, and the board he sits on has opened a bond measure for voters. The case for change is that the district spent time and legal exposure defending a policy the state found unlawful, and the board has been split on process questions such as how to fill Trustee Area 3.',
        scorecard: [
          { topic: 'Parental-notification policy', position: '✓✓ Voted to keep it in April 2024 and against rescinding it; defended it as protecting parents’ rights', comparison: 'Young opposed the policy; no challenger has published a stance.' },
          { topic: 'Facilities bond (Measure M)', position: '~ Board voted unanimously in May 2026 to place it on the ballot; reported to have opposed a bond election in 2024', comparison: 'No challenger has published a Measure M stance in sources reviewed.' },
          { topic: 'Board process', position: '~ Favored appointing, not electing, the vacant Trustee Area 3 seat in 2025', comparison: 'Young pushed for a special election at an estimated cost of $50,000.' },
          { topic: 'Teaching background', position: '✓ Economics and history teacher per 2022 coverage', comparison: 'Blaske taught career technical engineering; Murphy lists teacher and coach.' },
        ],
        money: 'No campaign finance totals found as of Oct 8, 2026.',
        endorsements: 'Reform California endorsed him in 2022 (2022 KOGO/DeMaio coverage); no 2026 endorsements found as of Oct 8, 2026.',
        
        notes: [
          'The California Department of Education found in April 2024 that the district’s parental-notification policy violated state law and ordered it rescinded. The board voted 3-2 to keep it, with Pardue saying the board had “a right … to defy a dictatorial governor and bureaucracy.” The board rescinded it 3-2 in October 2024 after AB 1955 became law; Pardue voted no and said parents’ rights “will hold up in court.” The policy was never implemented. — https://www.cbsnews.com/amp/losangeles/news/murrieta-school-board-keeps-parental-notification-policy-defying-state-order',
          'The parental-notification vote is a policy dispute as well as a legal finding; Pardue and supporters defend it as protecting parents’ constitutional rights, and the policy’s effect on students is debated.',
          'Sources: https://riversiderecord.org/murrieta-valley-unified-359-million-bond-november-election-set/, https://kogo.iheart.com/alternate/amp/2022-08-10-reformers-seek-school-board-seats-in-murrieta',
        ],
      },
      {
        id: 'guia-blaske',
        name: 'Guia M. Blaske',
        party: 'NP',
        role: 'Retired Teacher',
        campaignUrl: 'https://guiablaske.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Blaske is a retired teacher who taught career technical education in engineering at Vista Murrieta High School, in this district. No board or budget role is published.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board service is documented in sources reviewed.' },
            { criterionId: 'finance', assessment: 'unknown', evidence: 'No finance or budget role is documented.' },
            { criterionId: 'education', assessment: 'met', evidence: 'Former CTE-Engineering teacher at Vista Murrieta High School (district directory); listed as 66 and a retired teacher in the Southern California News Group questionnaire.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'No community or advocacy roles are documented in sources reviewed.' },
          ],
        },
        bio: [
          'Blaske is a retired teacher, age 66, who taught career technical education in engineering at Vista Murrieta High School. She completed a Southern California News Group candidate questionnaire for the Area 1 race.',
          'We could not retrieve the text of her questionnaire answers or her candidate statement, so positions below are unknown.',
        ],
        scorecard: [
          { topic: 'Classroom experience', position: '✓ Former high school engineering/CTE teacher in the district', comparison: 'Pardue is an economics and history teacher by background; Murphy lists teacher and coach.' },
          { topic: 'Measure M bond', position: '? No published position', comparison: 'The board voted unanimously to place it on the ballot.' },
          { topic: 'Parental-notification policy', position: '? No published position', comparison: 'Pardue voted to keep it and against rescinding it.' },
          { topic: 'Budget/finance', position: '? No published position', comparison: 'Pardue has voted on district budgets as a sitting trustee.' },
        ],
        money: 'No campaign finance totals found as of Oct 8, 2026.',
        endorsements: 'None found as of Oct 8, 2026.',
        notes: ['Sources: https://www.msn.com/en-us/news/other/guia-blaske-murrieta-valley-unified-school-district-area-1-candidate-2026-election-questionnaire/ar-AA2dD77L'],
      },
      {
        id: 'jeremy-murphy',
        name: 'Jeremy Murphy',
        party: 'NP',
        role: 'Father / Teacher / Coach',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Murphy’s ballot designation lists father, teacher and coach. We found no biography, platform or endorsements beyond that.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board service is documented in sources reviewed.' },
            { criterionId: 'finance', assessment: 'unknown', evidence: 'No finance background is published.' },
            { criterionId: 'education', assessment: 'partial', evidence: 'Ballot designation lists “Teacher” and “Coach”; employer and years are not published in sources reviewed.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Designation lists “Father” and “Coach,” which suggests youth involvement; no details published.' },
          ],
        },
        bio: ['Murphy filed on July 30, 2026 with the ballot designation “Father / Teacher / Coach.” His candidate statement is printed in the county voter guide, but we could not retrieve a biography or platform from news coverage.'],
        scorecard: [
          { topic: 'Classroom experience', position: '~ Listed as teacher and coach; details unpublished', comparison: 'Blaske taught CTE engineering at Vista Murrieta High.' },
          { topic: 'Measure M bond', position: '? No published position', comparison: 'The board voted unanimously to place it on the ballot.' },
          { topic: 'Parental-notification policy', position: '? No published position', comparison: 'Pardue voted to keep it and against rescinding it.' },
          { topic: 'Budget/finance', position: '? No published position', comparison: 'Pardue has voted on district budgets as a sitting trustee.' },
        ],
        money: 'No campaign finance totals found as of Oct 8, 2026.',
        endorsements: 'None found as of Oct 8, 2026.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Blaske', '◐', 'Leftward Progressives are the most supportive of transgender students (about 77% are very comfortable with transgender athletes on teams matching their identity), so they oppose Pardue, who voted to keep a parental-notification policy the state found unlawful, and lean to Blaske, a retired district teacher, though her own positions are unpublished.', 'Leftward Progressives who put experience first could pick Pardue, a teacher and former board president with a record on budgets, but that means re-electing the trustee who voted to keep the parental-notification policy and called the governor “dictatorial,” the fight that turns them toward Blaske.'],
      ['LL', 'Blaske', '◐', 'Loyal Liberals, 92% of whom say experts make better policy decisions than others, expect public bodies to follow state law and expert guidance, so they favor Blaske, a career district teacher, over Pardue, who voted to defy a state finding that the policy was unlawful.', 'Loyal Liberals who value governance know-how might prefer Pardue’s terms as board president and clerk to Blaske’s classroom-only résumé, but it means re-electing a trustee who voted to defy a state education order, a sharp cost for a group that trusts institutions.'],
      ['LO', 'Blaske', '○', 'Left-Out Left voters are wary of incumbents and lean to Blaske, a non-incumbent teacher, though their mixed views on gender identity (about 52% say gender is determined by sex at birth) and her unpublished platform keep the lean weak.', 'Left-Out Left voters rarely favor incumbents, but an experience-first voter could note that Pardue is the only candidate with a public record on budgets and facilities as Measure M money looms. Choosing him means keeping the parental-notification stance and the legal fight they distrust.'],
      ['OO', 'Pardue / Blaske', '=', 'Order and Opportunity Left voters, many religious and 71% saying gender is set at birth, are torn between parental notification and respect for authority: if keeping notification and a trustee with teaching and board experience matters most, Pardue; if following a state legal finding rather than defying it matters more, Blaske, a retired district teacher.'],
      ['TM', 'Pardue', '○', 'Tuned-Out Middle voters lean socially conservative on gender identity, with about 67% saying gender is determined by sex at birth, and have nothing published from Blaske or Murphy to weigh, so Pardue, a teacher with a known record, gets a weak edge.'],
      ['PP', 'Blaske', '○', 'Pragmatic and Polite Right voters value rule of law and measured temperament, with 86% saying officials should avoid heated language, and Pardue’s vote to defy a state legal finding while calling the governor “dictatorial” cuts against that, giving Blaske, a longtime district teacher, a weak edge.', 'Pragmatic and Polite Right voters who weigh experience could keep Pardue, a former board president and teacher who has voted on district budgets. The cost is backing the trustee whose defiance of a state order exposed the district to legal risk.'],
      ['UR', 'Pardue', '◐', 'Unconventional Right voters overwhelmingly say gender is set at birth (about 87%) and like plain-spoken challenges to Sacramento, so they back Pardue’s parental-notification stand, though they care less about school culture fights than the religious right.'],
      ['FC', 'Pardue', '●', 'Faith First Conservatives put parental rights first, and Pardue is the trustee who voted to keep parental notification and against rescinding it after the state found it unlawful.'],
      ['NA', 'Pardue', '●', 'No Apologies Right voters want fighters, with 53% liking it when politicians they agree with humiliate opponents, and Pardue openly defied what he called a “dictatorial governor and bureaucracy” to keep the parental-notification policy.'],
    ]),
    counterArguments: [
      'FC/NA (Pardue ●): But consider Blaske, because the state found the policy unlawful, the board itself later rescinded it, and continuing that fight risks district legal costs with no change in state law.',
      'LP/LL (Blaske ◐): But consider Pardue, because Blaske and Murphy have published little, and Pardue is the only candidate whose votes on budgets and facilities are on the public record.',
      'PP (Blaske ○): But consider Pardue, because his teaching background and board leadership are documented, while Blaske has not said how she would handle the budget or Measure M money.',
    ],
  },

  // ───────────────────────── MVUSD Trustee Area 2 ─────────────────────────
  {
    id: 'mvusd-trustee-area-2',
    categoryId: 'school',
    title: 'Murrieta Valley Unified, Trustee Area 2',
    tldrLabel: 'MVUSD Trustee Area 2',
    seatContext: 'Incumbent running',
    kind: 'candidates',
    stakesParagraphs: [
      'The Murrieta Valley Unified board adopts the district budget, sets policy and hires the superintendent. Trustees are elected only by voters in their own trustee area, so a vote in Area 2 decides one of five seats.',
      'Nancy Young’s four-year term ends in 2026. The seat matters because the board has split 3-2 on culture-war policies and on how to fill a vacancy, so one seat can swing future votes, including Measure M bond oversight.',
    ],
    introParagraphs: [
      'Incumbent Nancy Young faces Courtney Thouvenell, whose ballot designation is finance professional. We could not determine what share of ZIP 92562 is in Trustee Area 2; a lookup at 24100 Monroe Ave fell in this area.',
      'Very little has been published about Thouvenell, so the comparison rests mostly on Young’s record.',
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living in Trustee Area 2.',
    qualificationCriteria: [
      { id: 'governance', label: 'Board governance experience', detail: 'Trustees adopt policy, hire the superintendent and must follow open-meeting and state education law.' },
      { id: 'finance', label: 'Budget and finance oversight', detail: 'The board approves a budget of hundreds of millions of dollars and oversees facility bonds.' },
      { id: 'education', label: 'Classroom and education knowledge', detail: 'Trustees weigh curriculum, staffing and student-support decisions.' },
      { id: 'community', label: 'Community engagement and collaboration', detail: 'A five-member board must work with parents, staff and each other to pass anything.' },
    ],
    candidates: [
      {
        id: 'nancy-young',
        name: 'Nancy Young',
        party: 'NP',
        role: 'Incumbent',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Young is the sitting Trustee Area 2 member, a former board president, and completed the California School Boards Association’s Masters in Governance training.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Elected trustee, board president (renominated by Trustee Munoz in December 2024), and Masters in Governance graduate (district board minutes).' },
            { criterionId: 'finance', assessment: 'partial', evidence: 'Has voted on district budgets and voted to place Measure M on the ballot (unanimous board vote, May 12, 2026); no finance career is published.' },
            { criterionId: 'education', assessment: 'unknown', evidence: 'Her professional background is not stated in sources reviewed.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Pushed for a special election to fill the Area 3 vacancy in 2025 despite an estimated $50,000 cost, arguing residents should choose their trustee.' },
          ],
        },
        bio: [
          'Young has served as board president and represents Trustee Area 2. She voted against the district’s 2023 parental-notification policy and later voted to rescind it, and in 2025 pressed for a special election, not an appointment, to fill the vacant Trustee Area 3 seat.',
          'She also voted with the unanimous board in May 2026 to place the $359 million Measure M bond on the November ballot.',
        ],
        recordVsChange:
          'Young offers governance training, board-president experience and a record of opposing a policy the state found unlawful. The case for change is that Thouvenell’s finance background could add budget expertise, though little about her platform is published.',
        scorecard: [
          { topic: 'Parental-notification policy', position: '✗ Voted against the 2023 policy and for rescinding it', comparison: 'Pardue (Area 1) voted to keep it and against rescinding it.' },
          { topic: 'Measure M bond', position: '✓ Voted with the unanimous board to place it on the ballot', comparison: 'Thouvenell has no published position.' },
          { topic: 'Board process', position: '✓ Favored a special election over an appointment for Trustee Area 3', comparison: 'Pardue favored appointing.' },
          { topic: 'Governance training', position: '✓✓ Completed CSBA Masters in Governance', comparison: 'No training published for Thouvenell.' },
        ],
        money: 'No campaign finance totals found as of Oct 8, 2026.',
        endorsements: 'None found as of Oct 8, 2026.',
        notes: ['Sources: https://qvoicenews.com/2024/04/22/murrieta-valley-defies-state-order-to-rescind-districts-outing-policy/ (advocacy-leaning outlet), https://riversiderecord.org/murrieta-valley-unified-fails-to-set-plan-to-fill-vacant-trustee-area-3-seat/'],
      },
      {
        id: 'courtney-thouvenell',
        name: 'Courtney Thouvenell',
        party: 'NP',
        role: 'Finance Professional',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Thouvenell’s ballot designation is finance professional. We found no biography, platform or endorsements beyond that.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board service is documented in sources reviewed.' },
            { criterionId: 'finance', assessment: 'partial', evidence: 'Ballot designation is “Finance Professional”; employer, role and years are not published in sources reviewed.' },
            { criterionId: 'education', assessment: 'unknown', evidence: 'No education-sector background is published.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'No community roles are published.' },
          ],
        },
        bio: ['Thouvenell filed on Aug. 6, 2026 as a “Finance Professional.” Her candidate statement is printed in the county voter guide, but we could not retrieve a biography or platform from news coverage.'],
        scorecard: [
          { topic: 'Budget/finance', position: '~ Lists finance profession; no stated position', comparison: 'Young has voted on budgets as a trustee.' },
          { topic: 'Measure M bond', position: '? No published position', comparison: 'Young voted to place it on the ballot.' },
          { topic: 'Parental-notification policy', position: '? No published position', comparison: 'Young voted against the policy and for rescinding it.' },
          { topic: 'Board process', position: '? No published position', comparison: 'Young favored a special election for Area 3.' },
        ],
        money: 'No campaign finance totals found as of Oct 8, 2026.',
        endorsements: 'None found as of Oct 8, 2026.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Young', '●', 'Leftward Progressives are the most supportive of transgender students, and Young voted against the parental-notification policy and for rescinding it.'],
      ['LL', 'Young', '●', 'Loyal Liberals value formal governance training and following state law, and Young completed the school boards association’s Masters in Governance and voted to comply with the state’s finding.'],
      ['LO', 'Young', '◐', 'Left-Out Left voters want residents to have a real say, and Young pushed for a special election rather than a board appointment to fill a vacant seat, though she is an incumbent.'],
      ['OO', 'Young', '◐', 'Order and Opportunity Left voters prefer steady, competent hands and respect for authority, with 74% calling themselves respectful of authority, which Young’s governance training and compliance with the state order show, even if some share Pardue’s view on parental notification.'],
      ['TM', 'Young', '○', 'Tuned-Out Middle voters have no published platform from Thouvenell to weigh, so they lean weakly to Young, the candidate with a known record on the budget and the bond.'],
      ['PP', 'Young', '◐', 'Pragmatic and Polite Right voters value competence and rule of law, and Young’s board-president experience, governance training and decision to follow a state legal finding fit that, though they may share conservatives’ discomfort with how the state handled parental notification.'],
      ['UR', 'Thouvenell', '○', 'Unconventional Right voters overwhelmingly say gender is set at birth and favor smaller government, so they may prefer a finance professional to the trustee who opposed parental notification, though Thouvenell’s views are unpublished.', 'Unconventional Right voters who weigh experience could keep Young, a former board president who pushed for residents, not the board, to choose a vacant trustee. The trade-off is her votes against the parental-notification policy.'],
      ['FC', 'Thouvenell', '○', 'Faith First Conservatives put parental rights first and so lean against Young, who voted against parental notification and to rescind it, though Thouvenell has not said where she stands.', 'Faith First Conservatives who give real weight to experience could stick with Young’s board-president record and governance training, but that means re-electing the trustee who voted against parental notification, the issue that matters most to them.'],
      ['NA', 'Thouvenell', '○', 'No Apologies Right voters want trustees who fight Sacramento on parental rights, which Young did not, so they lean to the challenger even though Thouvenell has published no positions.', 'No Apologies Right voters who want proven oversight of a $359 million bond could keep Young, who has voted on district budgets and completed governance training, rather than gamble on unpublished views; she did vote against the parental-notification policy.'],
    ]),
    counterArguments: [
      'UR/FC/NA (Thouvenell ○): But consider Young, because Thouvenell has published nothing on policy, and Young’s vote to rescind followed a state finding and a new state law.',
      'LP/LL (Young ●): But consider Thouvenell, because a finance professional could add budget skills as the district prepares to manage a $359 million bond, if Measure M passes.',
    ],
  },

  // ───────────────────────── Rancho California Water District ─────────────────────────
  {
    id: 'rcwd-board',
    categoryId: 'district',
    title: 'Rancho California Water District, Board of Directors',
    tldrLabel: 'Rancho California Water District Board',
    voteFor: 4,
    seatContext: 'Three incumbents, two challengers',
    kind: 'candidates',
    stakesParagraphs: [
      'Rancho California Water District is the retail water district for the Temecula and Murrieta area. Its seven-member board sets water rates, approves capital projects and contracts and hires the general manager.',
      'Four seats are up in 2026, and voters can pick up to four of five candidates. Directors serve four-year staggered terms.',
    ],
    introParagraphs: [
      'This contest is on the ballot only for voters inside the district; our research estimated about 27% of ZIP 92562 falls within it. Incumbents J.D. Harkey, William Plummer and Carol Lee Brady are running; incumbent John Rossi, whose term also ends in 2026, is not on the certified list.',
      'The challengers are William Woodrome and Maryann Edwards. Little has been published about any of the five candidates this cycle, so the picks lean on documented board service.',
    ],
    legalRequirements: 'U.S. citizen, registered voter residing within the Rancho Water service area.',
    qualificationCriteria: [
      { id: 'governance', label: 'Public-agency board service', detail: 'Directors set policy and vote on rates and contracts under open-meeting law.' },
      { id: 'water', label: 'Water and utility knowledge', detail: 'Decisions on supply, imported-water costs and infrastructure require technical understanding.' },
      { id: 'finance', label: 'Budget and rate oversight', detail: 'The board adopts rates and a multi-million-dollar budget funded by ratepayers.' },
      { id: 'community', label: 'Ratepayer engagement and transparency', detail: 'Directors answer to residents who pay the bills.' },
    ],
    candidates: [
      {
        id: 'carol-lee-brady',
        name: 'Carol Lee Brady',
        party: 'NP',
        role: 'Director, Rancho California Water District',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Brady is a sitting director first elected in 2017, listed on the district page with a 2022-2026 term, and was elected ACWA vice president in 2025.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Elected to the board in 2017 (Village News); district page lists a 2022-2026 term.' },
            { criterionId: 'water', assessment: 'met', evidence: 'Elected vice president of the Association of California Water Agencies in 2025 (district press release).' },
            { criterionId: 'finance', assessment: 'partial', evidence: 'Has voted on district budgets and rates as a director; no finance career is published.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'No ratepayer-engagement record is published in sources reviewed.' },
          ],
        },
        bio: [
          'Brady was elected to the board in 2017 as a newcomer (Village News) and is listed by the district as Carol Lee Gonzales-Brady. In 2025 she was elected a vice president of the Association of California Water Agencies.',
          'Another director, Brian J. Brady, serves as board president; the two should not be confused. Brian Brady is not on this ballot.',
        ],
        recordVsChange: 'Brady brings statewide water-policy visibility and continuity on the board. The case for change is that a long-serving board can stay insular, and no challenger has published a plan.',
        scorecard: [
          { topic: 'Water supply and rates', position: '? No published platform', comparison: 'No candidate has published a rate plan.' },
          { topic: 'Statewide water policy', position: '✓ ACWA vice president, 2025', comparison: 'No challenger lists statewide water roles.' },
          { topic: 'Board service', position: '✓ Director since 2017', comparison: 'Harkey and Plummer are also incumbents; Woodrome and Edwards are not.' },
          { topic: 'Transparency', position: '? No published position', comparison: 'No candidate has published a transparency plan.' },
        ],
        money: 'No campaign finance totals found as of Oct 8, 2026.',
        endorsements: 'None found as of Oct 8, 2026.',
        notes: ['Sources: https://www.ranchowater.com/94/Board-of-Directors, https://www.ranchowater.com/155/News'],
      },
      {
        id: 'jd-harkey',
        name: 'J.D. Harkey',
        party: 'NP',
        role: 'Incumbent',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Harkey is a sitting director and board senior vice president, listed with a 2022-2026 term. His professional background is not published.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Listed as a director with a 2022-2026 term and re-elected senior vice president in 2025 (district news page).' },
            { criterionId: 'water', assessment: 'unknown', evidence: 'No water-industry career is published in sources reviewed.' },
            { criterionId: 'finance', assessment: 'partial', evidence: 'Has voted on district budgets and rates as a director.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'No ratepayer-engagement record is published in sources reviewed.' },
          ],
        },
        bio: ['Harkey is a sitting director and was re-elected the board’s senior vice president in 2025. We could not retrieve his biography or candidate statement; his ballot designation is “Incumbent.”'],
        recordVsChange: 'Harkey offers continuity and officer experience. The case for change is that no record of rates or projects tied to him specifically has been published.',
        scorecard: [
          { topic: 'Water supply and rates', position: '? No published platform', comparison: 'No candidate has published a rate plan.' },
          { topic: 'Board leadership', position: '✓ Senior vice president, re-elected 2025', comparison: 'Brady and Plummer are also incumbents.' },
          { topic: 'Statewide water policy', position: '? None published', comparison: 'Brady is an ACWA vice president.' },
          { topic: 'Transparency', position: '? No published position', comparison: 'No candidate has published a transparency plan.' },
        ],
        money: 'No campaign finance totals found as of Oct 8, 2026.',
        endorsements: 'None found as of Oct 8, 2026.',
        notes: ['Sources: https://www.ranchowater.com/94/Board-of-Directors, https://www.ranchowater.com/155/News'],
      },
      {
        id: 'william-plummer',
        name: 'William Plummer',
        party: 'NP',
        role: 'Director, Rancho California Water District',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Plummer has served on the board since at least 2013, has been board president, and is listed with a 2022-2026 term.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Listed as a director in a 2013 district letter; finished first in the 2017 re-election (Village News); a past candidate statement notes service as board president.' },
            { criterionId: 'water', assessment: 'partial', evidence: 'More than a decade on a water district board; no water-industry career is published.' },
            { criterionId: 'finance', assessment: 'partial', evidence: 'Has voted on district budgets and rates for over a decade.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'No ratepayer-engagement record is published in sources reviewed.' },
          ],
        },
        bio: ['Plummer is a longtime director who won re-election in 2017 by finishing first in a crowded field and is listed as board vice president. His ballot designation is “Director, Rancho California Water District.”'],
        recordVsChange: 'Plummer offers more than a decade of board experience and past service as president. The case for change is that long tenure can mean less turnover in ideas, and no challenger has published a plan to compare.',
        scorecard: [
          { topic: 'Water supply and rates', position: '? No published platform', comparison: 'No candidate has published a rate plan.' },
          { topic: 'Board service', position: '✓✓ On the board since at least 2013; past president', comparison: 'Longest documented tenure of the five.' },
          { topic: 'Statewide water policy', position: '? None published', comparison: 'Brady is an ACWA vice president.' },
          { topic: 'Transparency', position: '? No published position', comparison: 'No candidate has published a transparency plan.' },
        ],
        money: 'No campaign finance totals found as of Oct 8, 2026.',
        endorsements: 'None found as of Oct 8, 2026.',
        notes: ['Sources: https://www.ranchowater.com/94/Board-of-Directors, https://www.villagenews.com/story/2017/09/11/news/two-incumbents-pair-of-high-profile-challengers-win-seats-in-crowded-rancho-water-board-election/50949.html'],
      },
      {
        id: 'william-woodrome',
        name: 'William Woodrome',
        party: 'NP',
        role: 'Father / Entrepreneur / Volunteer',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Woodrome’s ballot designation is father, entrepreneur and volunteer. We found no biography, platform or endorsements beyond that.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No public-agency board service is documented in sources reviewed.' },
            { criterionId: 'water', assessment: 'unknown', evidence: 'No water or utility background is published.' },
            { criterionId: 'finance', assessment: 'partial', evidence: 'Ballot designation lists “Entrepreneur”; business size and sector are not published.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Ballot designation lists “Volunteer”; organizations are not published.' },
          ],
        },
        bio: ['Woodrome filed on Aug. 3, 2026 with the designation “Father / Entrepreneur / Volunteer.” His candidate statement is printed in the county voter guide, but we could not retrieve a biography or platform from news coverage.'],
        scorecard: [
          { topic: 'Water supply and rates', position: '? No published platform', comparison: 'No candidate has published a rate plan.' },
          { topic: 'Business/budget', position: '~ Lists entrepreneur; details unpublished', comparison: 'Incumbents have voted on district budgets.' },
          { topic: 'Community involvement', position: '~ Lists volunteer; organizations unpublished', comparison: 'Edwards lists community volunteer.' },
          { topic: 'Transparency', position: '? No published position', comparison: 'No candidate has published a transparency plan.' },
        ],
        money: 'No campaign finance totals found as of Oct 8, 2026.',
        endorsements: 'None found as of Oct 8, 2026.',
      },
      {
        id: 'maryann-edwards',
        name: 'Maryann Edwards',
        party: 'NP',
        role: 'Community Volunteer',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Edwards’s ballot designation is community volunteer. We found no biography or platform tied to this race.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'The ballot designation does not list public office; a Maryann Edwards served on the Temecula City Council from 2005 to 2022, but we could not confirm this is the same person.' },
            { criterionId: 'water', assessment: 'unknown', evidence: 'No water or utility background is published.' },
            { criterionId: 'finance', assessment: 'unknown', evidence: 'No finance background is published for this candidate.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Ballot designation lists “Community Volunteer”; organizations are not published.' },
          ],
        },
        bio: ['Edwards filed on Aug. 12, 2026 with the designation “Community Volunteer.” Her candidate statement is printed in the county voter guide, but we could not retrieve a biography or platform from news coverage.'],
        scorecard: [
          { topic: 'Water supply and rates', position: '? No published platform', comparison: 'No candidate has published a rate plan.' },
          { topic: 'Community involvement', position: '~ Lists community volunteer; organizations unpublished', comparison: 'Woodrome lists volunteer and entrepreneur.' },
          { topic: 'Budget/finance', position: '? No published position', comparison: 'Incumbents have voted on district budgets.' },
          { topic: 'Transparency', position: '? No published position', comparison: 'No candidate has published a transparency plan.' },
        ],
        money: 'No campaign finance totals found as of Oct 8, 2026.',
        endorsements: 'None found as of Oct 8, 2026.',
        notes: ['A Maryann Edwards was a Temecula City Council member from 2005 and lost a 2022 re-election bid (Patch). The ballot does not say this is the same person, so we do not treat it as her record.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Brady, Harkey, Plummer', '○', 'Leftward Progressives have no published positions on rates or water policy to judge, so they lean weakly to the incumbents with a public record on running a public utility rather than filling seats blind.'],
      ['LL', 'Brady, Harkey, Plummer', '◐', 'Loyal Liberals trust expertise on technical boards, and Brady’s statewide water-agency leadership and Plummer’s decade-plus on the board are the most documented experience in the field.'],
      ['LO', 'Woodrome, Edwards', '○', 'Left-Out Left voters, 75% of whom say few or no officials ran to serve the public, distrust long-serving insiders and lean to the two challengers for an outside voice on rates, though neither has published any views.'],
      ['OO', 'Brady, Harkey, Plummer', '○', 'Order and Opportunity Left voters prefer steady, competent management of a basic service, which the incumbents’ documented board service offers better than unknown challengers.'],
      ['TM', '—', '—', 'Tuned-Out Middle voters care about their water bill, but no candidate has published a rate plan, so nothing on the ballot gives them a pocketbook reason to choose.', 'Tuned-Out Middle voters who let experience decide could back Brady, Plummer and Harkey, the three incumbents with years of votes on rates and budgets; neither challenger has a clear experience case for the fourth seat.'],
      ['PP', 'Brady, Harkey, Plummer', '◐', 'Pragmatic and Polite Right voters value experience, stability and careful stewardship of ratepayer money, which the incumbents document far better than the challengers.'],
      ['UR', 'Woodrome, Edwards', '○', 'Unconventional Right voters respond to people outside the establishment, so they lean to an entrepreneur and a community volunteer over career board members, with nothing published to confirm the challengers’ views.'],
      ['FC', '—', '—', 'Nothing published ties any water-board candidate to the social and family issues Faith First Conservatives weigh first, so this column skips the race.', 'Faith First Conservatives who weigh experience could fill three seats with incumbents: Plummer, a past board president; Brady, an ACWA vice president; and Harkey, senior vice president. The fourth seat has no candidate with a clear experience case.'],
      ['NA', 'Brady, Harkey, Plummer, Woodrome', '○', 'No Apologies Right voters want low costs and a business mindset, so they keep the experienced incumbents and add Woodrome, an entrepreneur, with a weak lean since no one has published a rate plan.'],
    ]),
    counterArguments: [
      'LL/PP (Brady, Harkey, Plummer ◐): But consider Woodrome or Edwards, because three incumbents returning together leaves the board without outside challenge, and none of them has published a rate plan.',
      'LO/UR (Woodrome, Edwards ○): But consider the incumbents, because the challengers have published nothing beyond their ballot designations, while Brady, Harkey and Plummer have years of votes on rates and budgets.',
    ],
  },

  // ───────────────────────── MVUSD Measure M ─────────────────────────
  {
    id: 'mvusd-measure-m',
    categoryId: 'local-measures',
    title: 'Murrieta Valley USD Measure M — $359M school bond',
    tldrLabel: 'MVUSD Measure M — School bond',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure M would fund school repairs with bonds repaid by a property tax on homes and businesses in the district, which covers about 99.9% of ZIP 92562. The trade-off is fixing aging schools without a rate increase, the district says, versus keeping the current tax in place for years longer.',
    ],
    introParagraphs: [
      'The school board voted unanimously on May 12, 2026 to place the bond on the Nov. 3 ballot. School bonds can only be placed on statewide election dates.',
    ],
    measure: {
      explainerUrl: 'https://riversiderecord.org/murrieta-valley-unified-359-million-bond-november-election-set/',
      question:
        'Without increasing current tax rates, to fix deteriorating roofs, plumbing, HVAC, electrical, safety systems, and repair/upgrade aging classrooms, science labs, career technology and school facilities to support college/career readiness in math, science, technology, arts, engineering, and skilled trades, shall Murrieta Valley Unified School District’s measure be adopted authorizing $359,000,000 in bonds at legal rates, levying $60 per $100,000 assessed value ($22 million annually) while bonds are outstanding, with citizen oversight, audits and all money locally controlled?',
      yesMeans: 'Authorizes $359 million in school bonds for roof, plumbing, HVAC and classroom repairs, repaid by a property tax of about $60 per $100,000 of assessed value while the bonds are outstanding.',
      noMeans: 'Blocks the new bonds; existing bond taxes continue until older bonds are paid off, and the repairs would need other funding.',
      funding: {
        asOf: 'Oct. 12, 2026',
        yes: {
          raised: 'About $233,000',
          topDonors: ['DLR Group ($25,000)', 'Erickson Hall Construction ($25,000)', 'Studio W Architects ($20,000)', 'Barnhart-Reese ($20,000)'],
        },
        note: 'Most money for Yes comes from architecture, engineering and construction firms. No committee has reported raising money against it.',
        sources: [
          { label: 'Riverside County campaign filings (NetFile): Murrieta Community for Strong Schools, Yes on M, Form 460 through Sept. 19 plus late-contribution reports', url: 'https://netfile.com/public/CTRIV/campaign' },
        ],
      },
      positions: [],
      measureType: 'School facilities bond (general obligation, Prop 39)',
      voteThreshold: '55%',
      fiscalImpact:
        'Up to $359 million in bonds, repaid by a property tax of no more than $60 per $100,000 of assessed value, raising about $22 million a year per the Registrar’s measure notice. The district says the rate would stay at the current level as older bonds are retired; it does not state a term or total repayment cost on its pages.',
      supporters: 'Murrieta Valley Unified Board of Education (unanimous vote, May 12, 2026). Campaign committee: Murrieta Community for Strong Schools, Yes on M.',
      opponents: 'Republican activists Bob Kowell and Jack Guerrero spoke against the ballot language at the board meeting (Riverside Record). No opposition committee has filed as of Oct. 12, 2026.',
      voterConnection: [
        'Property owners pay through their property tax bill; renters may pay indirectly if landlords pass costs through.',
        'Bond money funds buildings and repairs, not teacher or administrator salaries or pensions.',
        'State law requires a citizens’ oversight committee and annual audits of how the money is spent.',
      ],
      mechanismBullets: [
        'Uses: roofs, plumbing, gas and sewer lines, ventilation and electrical systems; classroom and science, technology and engineering upgrades; career technical education labs; replacing HVAC units over 20 years old; replacing aging portables with permanent classrooms. Funds stay local.',
      ],
      argumentsFor: [
        'Many schools are more than 30 years old, and the district counted more than 125 roof leaks in the past year.',
        'The state does not regularly fund facilities; the district’s master plan identifies about $359 million in needs.',
        'The district says rates would stay the same as bonds from the 1990s and early 2000s are paid off.',
      ],
      argumentsAgainst: [
        'Keeping the rate flat means homeowners keep paying for years longer than if the bonds were not issued.',
        'Interest pushes the total cost beyond $359 million, and the district’s pages give no term or total repayment figure.',
        'At the board meeting, critics called the ballot language inadequate (Riverside Record).',
      ],
      readingLinks: [
        { label: 'Murrieta Valley USD: Measure M', url: 'https://www.murrieta.k12.ca.us/directory/business-operations/facilities-operations-technology/measure-m', summary: 'District description of the bond, threshold and project categories.' },
        { label: 'Murrieta Valley USD: Measure M FAQ', url: 'https://www.murrieta.k12.ca.us/directory/business-services/facilities-operations-technology/measure-m/faqs', summary: 'District answers on the tax rate and older bonds.' },
        { label: 'Riverside Record: board puts $359M bond question on November ballot', url: 'https://riversiderecord.org/murrieta-valley-unified-359-million-bond-november-election-set/', summary: 'Board vote, rate and public comments against the ballot language.' },
        { label: 'Riverside Registrar: Measure M notice', url: 'https://voteinfo.net/sites/g/files/aldnop371/files/2026-08/Measure%20M-Murrieta%20Valley%20USD%20eng.pdf', summary: 'Official measure notice for the Nov. 3 ballot.' },
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes', '●', 'Leftward Progressives back expansive public investment, and fixing leaking roofs, plumbing and labs in public schools without raising the current rate is an easy Yes for them.'],
      ['LL', 'Yes', '●', 'Loyal Liberals accept bonds for public services and trust the safeguards here: a unanimous board vote, a legally required citizens’ oversight committee and annual audits.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters want working families’ schools fixed, but they doubt money will be spent as promised and notice that construction and design firms fund the Yes campaign, so their support is guarded.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters value opportunity through schools and career-tech labs, and the flat rate eases their cost worries, though stretched budgets make any extended property tax a real trade-off.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters are wary of taxes that hit them, but the district says the rate will not rise, and safe, repaired schools are a concrete local benefit, so they lean weakly Yes.'],
      ['PP', 'Yes', '◐', 'Pragmatic and Polite Right voters back targeted, well-run spending, and basic safety repairs with legally required oversight and audits fit that, though the missing total repayment figure tempers their support.'],
      ['UR', 'No', '○', 'Unconventional Right voters favor smaller government and lower taxes and lean against extending a property tax for years more, though school repairs are not an ideological fight for them.'],
      ['FC', 'No', '◐', 'Faith First Conservatives, about 75% of whom want government services reduced, oppose new tax-backed borrowing, and the district has given no total repayment cost.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose nearly all new bonds and taxes, and a $359 million borrowing plan that keeps a property tax in place for years longer is the kind of debt they reject.'],
    ]),
    hinges: {
      LP: 'Yes if fixing leaking roofs and aging classrooms in public schools, at the current tax rate, is the kind of public investment you want. No if keeping the tax on homeowners for years longer, with interest pushing costs past $359 million and design and construction firms funding the campaign, outweighs the repairs.',
      LL: 'Yes if the required oversight committee, annual audits and unanimous board vote make this a standard, well-guarded school bond. No if the district’s failure to state a term or total repayment cost is a gap you can’t overlook.',
      LO: 'Yes if fixing the schools working families use matters more than your doubts about how bond money gets spent. No if a campaign funded mostly by construction and design firms and no stated total cost make you doubt the deal.',
      OO: 'Yes if repaired classrooms and career-tech labs that open doors for students are worth the extended tax at today’s rate. No if a tighter household budget means you’d rather the current property tax end on schedule.',
      TM: 'Yes if the district’s promise that your tax rate won’t rise, with money that stays local, settles your cost worries. No if keeping the current property tax on your bill for years longer is a cost you’d rather not carry.',
      PP: 'Yes if basic safety repairs with legally required oversight and audits are the kind of careful, targeted spending you support. No if you won’t agree to borrow without a clear term and total repayment figure, which the district hasn’t given.',
      UR: 'Yes if roofs, plumbing and safety systems are basic upkeep you’d fund, with audits required by law. No if extending a property tax for years is more government than you want, whatever the rate.',
      FC: 'Yes if repairing aging local schools for families matters more to you than avoiding new public debt. No if you want government to shrink and won’t back borrowing that keeps a property tax in place for years longer.',
      NA: 'Yes if leaking roofs and failing HVAC are a basic duty the district must fix and this is the only practical way. No if you oppose new government debt on principle and distrust the district’s no-rate-increase promise and ballot language critics called inadequate.',
    },
    counterArguments: [
      'FC/NA (No ◐/●): But consider Yes, because the repairs are basic safety and maintenance, the rate is unchanged, and the oversight committee and audits are required by law.',
      'LP/LL (Yes ●): But consider No, because keeping the rate flat means paying for the debt for years longer, interest raises total costs beyond $359 million, and the district has stated no term.',
    ],
  },

  // ───────────────────────── RCTC Measure A ─────────────────────────
  {
    id: 'rctc-measure-a',
    categoryId: 'local-measures',
    title: 'Riverside County Measure A — Transportation sales tax renewal',
    tldrLabel: 'Riverside County Measure A — Transportation tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure A would renew Riverside County’s half-cent sales tax for highways, local streets and roads, and public transit beyond its 2039 sunset. Because it is a dedicated transportation tax, it needs two-thirds of voters to pass.',
    ],
    introParagraphs: [
      'Voters first approved the tax in 1988 (Inland Empire Business Daily) and extended it in 2002 for 30 years. The Riverside County Transportation Commission (RCTC) adopted Ordinance No. 26-001 on June 10, 2026; the Board of Supervisors ordered the election on July 14, 2026 on a 3-2 vote (Medina, Spiegel and Gutierrez yes).',
    ],
    measure: {
      question:
        'Riverside County Traffic Relief, Pothole/Road Repair Investment Renewal: shall the existing one-half percent transactions and use (sales) tax for transportation continue beyond its 2039 expiration until repealed by voters, with annual audits and an independent taxpayers oversight committee? (Summary; see the Registrar’s measure notice for the exact printed text.)',
      yesMeans: 'Continues Riverside County’s existing half-cent transportation sales tax past its 2039 expiration until voters repeal it, about $280 million a year for highways, local roads and transit.',
      noMeans: 'Keeps the current half-cent transportation tax until it expires in 2039, when it ends unless voters approve a renewal later.',
      funding: {
        asOf: 'Oct. 7, 2026',
        yes: {
          raised: 'About $1.1 million',
          topDonors: ['Rebuild SoCal (Southern California Partnership for Jobs) ($250,000)', 'Southern California District Council of Laborers Issues PAC ($100,000)', 'Auto Club Enterprises ($75,000)', 'Jacobs Engineering Group ($75,000)'],
        },
        note: 'The Yes committee began raising money in 2025, mostly from construction and engineering firms and building-trades groups. No committee has reported raising money against it; Reform California, Carl DeMaio’s ballot measure committee, reported about $23,000 in its own spending against it, including a slate mailer.',
        sources: [
          { label: 'Riverside County campaign filings (NetFile): Yes on A, Riverside County Citizens for Traffic Relief and Local Jobs, Form 460s through Sept. 19 plus late-contribution reports; Reform California Form 496', url: 'https://netfile.com/public/CTRIV/campaign' },
        ],
      },
      positions: [],
      measureType: 'Special tax (county transportation transactions and use tax), placed by the Riverside County Transportation Commission',
      voteThreshold: '2/3',
      fiscalImpact:
        'About $280 million a year (RCTC estimate). The tax rate stays at one-half percent; under the ordinance the new tax is set at 0% until April 1, 2039, when the current tax would otherwise end, and 0.5% afterward. The existing tax has raised more than $3.1 billion so far.',
      supporters: 'Riverside County Transportation Commission (Ordinance No. 26-001, RCTC chair Raymond Gregory). Campaign committee: Yes on A, Riverside County Citizens for Traffic Relief and Local Jobs, sponsored by Rebuild SoCal.',
      opponents: 'No opposition committee has filed as of Oct. 12, 2026; Reform California (Carl DeMaio) has spent against it on its own. Supervisors Washington and Perez voted against the July 14, 2026 resolution ordering the election (County Board submittal).',
      voterConnection: [
        'Everyone who buys taxable goods in Riverside County already pays the half-cent; the rate would not change.',
        'Money returns in proportion to what each area (Western Riverside, Coachella Valley, Palo Verde Valley) generates.',
      ],
      mechanismBullets: [
        'Spending categories: highways and regional corridors (such as I-10, I-15, SR-91 and I-215), local streets and roads, and public transportation, per the Riverside County Transportation Improvement Plan.',
        'Accountability: administrative salaries and benefits capped at 1% of revenue; funds limited to projects serving Riverside County; the annual independent audit is posted publicly.',
        'Oversight: a new Independent Taxpayers Oversight Committee of up to seven members, which the original measure never had.',
        'Review: starting in 2037 and at least every ten years after, the Commission must review and propose revisions to the Expenditure Plan.',
        'Bonding: the Commission may borrow against future revenue, up to the estimated tax proceeds, and must pay debt service first.',
      ],
      argumentsFor: [
        'Keeps funding for roads, highway projects and public transit flowing.',
        'Local money matches state and federal grants; the RCTC chair called it the county’s “only source of leverage for outside grants.”',
        'Annual audits, a 1% administrative cap and a new oversight committee add accountability.',
        'Every city and unincorporated area gets funding.',
      ],
      argumentsAgainst: [
        'No end date: the tax continues until voters repeal it.',
        'A sales tax is regressive, taking a larger share of income from lower-income households.',
        'The oversight committee meets only once a year and reviews the audit, not spending decisions.',
        'It commits revenue 13 years before the current tax expires, when voters could otherwise revisit it.',
      ],
      readingLinks: [
        { label: 'RCTC: Renewing Measure A', url: 'https://www.rctc.org/measure-a-renewal/', summary: 'Commission overview, funding categories and accountability provisions.' },
        { label: 'RCTC: Measure A ordinance (RCTIP Ordinance)', url: 'https://www.rctc.org/wp-content/uploads/2026/06/RCTIP_Ordinance.pdf', summary: 'Ordinance text, including the two-thirds approval threshold, term, 1% cap and oversight committee.' },
        { label: 'RCTC: Renewal fact sheet', url: 'https://www.rctc.org/wp-content/uploads/2026/07/2026.07-Renewal-Fact-Sheet-FINAL-compressed.pdf', summary: 'Projected funding by city through 2057.' },
        { label: 'Inland Empire Business Daily: voters will determine if Measure A stays', url: 'https://iebusinessdaily.com/riverside-county-voters-will-determine-if-measure-a-stays-on-the-books/', summary: 'History, allocations since 2009 and the new oversight committee.' },
        { label: 'Riverside Registrar: Measure A notice', url: 'https://voteinfo.net/sites/g/files/aldnop371/files/2026-08/Measure%20A%20-%20Riverside%20County%20Transportation%20Commission.pdf', summary: 'Official measure notice for the Nov. 3 ballot.' },
      ],
      explainerUrl: 'https://iebusinessdaily.com/riverside-county-voters-will-determine-if-measure-a-stays-on-the-books/',
    },
    crossTypology: ct([
      ['LP', 'Yes', '◐', 'Leftward Progressives want public transit and climate-friendly investment and note building-trades labor support, but a sales tax falls hardest on lower-income households, so their Yes is a trade-off.'],
      ['LL', 'Yes', '●', 'Loyal Liberals trust well-designed institutions and value the annual audit, new oversight committee, 1% administrative cap and grant-matching money for roads and transit.'],
      ['LO', 'No', '○', 'Left-Out Left voters distrust promises about how tax money will be spent and dislike a regressive sales tax with no end date backed mainly by construction and engineering firms, though the rate would not change.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters value jobs, safe roads and transit to work, and the renewal keeps that funding without raising the rate, though they feel sales taxes in a tight budget.'],
      ['TM', 'Yes / No', '=', 'Tuned-Out Middle voters weigh road money against a tax that never expires: if an unchanged rate and money for the roads they use every day matter most, Yes; if distrust of a tax on everyday purchases with no end date matters more, No.'],
      ['PP', 'Yes / No', '=', 'Pragmatic and Polite Right voters want well-run spending and caution: if the audits, oversight committee and 1% administrative cap make this a well-run program on roads they use, Yes; if renewing 13 years early with no end date is less careful than they accept from a tax, No.'],
      ['UR', 'No', '◐', 'Unconventional Right voters want lower taxes and smaller government and oppose a permanent tax run by an appointed commission, even at the current rate.'],
      ['FC', 'No', '◐', 'Faith First Conservatives want government revenue reduced, not made permanent, and would rather voters revisit the tax when it expires in 2039.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose nearly every tax and distrust government commissions, so a sales tax with no end date is a clear No.'],
    ]),
    hinges: {
      LP: 'Yes if dedicated money for transit and road repair, backed by building-trades labor, outweighs the burden a sales tax puts on lower-income households. No if a regressive tax with no end date is the wrong way to fund transportation, even for transit you support.',
      LL: 'Yes if annual audits, a 1% administrative cap, a new oversight committee and grant-matching leverage make a renewal sound. No if a tax with no end date and a once-a-year oversight meeting leaves voters too little way to correct course.',
      LO: 'Yes if road and transit money for your commute matters more than your distrust of a sales tax that never expires. No if a permanent regressive tax, funded mostly by construction and engineering firms, is more than you’ll accept.',
      OO: 'Yes if keeping road and transit money flowing at the same half-cent rate, with jobs and grant matching, comes first. No if renewing 13 years early, with no end date, gives up a chance for voters to revisit it.',
      TM: 'Yes if the rate staying the same and money for the roads you use every day settle your cost concerns. No if a tax that never expires, on purchases you already struggle with, is something you won’t sign onto.',
      PP: 'Yes if audits, an administrative cap and money returned to each area make this a well-run program worth keeping. No if renewing 13 years early with no end date is less careful than you’d accept from a tax.',
      UR: 'Yes if losing the grant-matching leverage the tax provides would hurt roads in your part of the county. No if a permanent tax controlled by a commission, with an oversight committee that only reviews the audit, isn’t accountable enough for you.',
      FC: 'Yes if road funding for your community matters more to you than a permanent revenue stream. No if you want government to shrink and would rather voters decide again at the 2039 deadline.',
      NA: 'Yes if roads and highway corridors like I-15 and I-215 need this money and the rate is not going up. No if any tax with no sunset, run by a transportation commission, is one you reject on principle.',
    },
    counterArguments: [
      'UR/FC/NA (No ◐/●): But consider Yes, because the rate is not rising, the money returns to each part of the county, and the county would lose the grant-matching leverage the tax provides if it expires in 2039.',
      'LL (Yes ●): But consider No, because a tax with no end date and a once-a-year oversight meeting leaves voters little way to correct course, and a rejection now still leaves 13 years of funding.',
      'LO (No ○): But consider Yes, because the rate stays the same, administrative costs are capped at 1%, and the new oversight committee is more than the original tax ever had.',
    ],
  },
];
