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
      ['PL', 'Garcia', '◐', 'Progressive Left voters value a defense and immigration background on the bench and weigh Garcia’s Democratic Party and Loflin endorsements, while noting both candidates are fit on experience.'],
      ['EL', 'Paradise', '◐', 'Establishment Liberals value deep courtroom experience and institutional respect, and Paradise’s 26 years, county management role and support from sitting judges fit that, though Garcia is also qualified.'],
      ['DM', 'Garcia', '◐', 'Democratic Mainstays tend to follow the county Democratic Party’s recommendation, which went to Garcia, though Paradise’s track record is comparable.'],
      ['OL', 'Garcia', '◐', 'Outsider Left voters are wary of prosecutor-and-police-backed candidates and favor a public defender with an immigration-law specialty.'],
      ['SS', '—', '—', 'Stressed Sideliners pay little attention to judicial races, and neither candidate’s published record points clearly one way for them.'],
      ['AR', 'Paradise', '◐', 'Ambivalent Right voters value long, documented trial experience and broad support from sitting judges, which Paradise has published in more detail.'],
      ['PR', 'Paradise', '●', 'Populist Right voters prefer a longtime prosecutor backed by the District Attorney and Sheriff over a public defender.'],
      ['CC', 'Paradise', '●', 'Committed Conservatives favor a veteran prosecutor with 100+ jury trials and law-enforcement endorsements.'],
      ['FF', 'Paradise', '●', 'Faith and Flag Conservatives favor a prosecutor known for child-abuse and sex-crime cases and backed by law-enforcement groups.'],
    ]),
    counterArguments: [
      'PR/CC/FF (Paradise ●): But a judge must be neutral, and a defense lawyer’s view of due process can be as valuable on the bench as a prosecutor’s; neither candidate has judicial experience.',
      'PL/OL (Garcia ◐): But Paradise’s executive-level management of county public safety and her trial volume are the most detailed experience either candidate has published, and she is backed by many sitting judges.',
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
      ['PL', 'Blaske', '○', 'Progressive Left voters value classroom educators and wariness of the board’s parental-notification fight, though Blaske’s own positions are unpublished, so the lean is weak.'],
      ['EL', 'Blaske', '◐', 'Establishment Liberals favor a career educator over an incumbent whose votes put the district at odds with state education law.'],
      ['DM', 'Blaske', '○', 'Democratic Mainstays prefer a retired teacher to an incumbent who defied a state order, though her positions are unpublished.'],
      ['OL', 'Blaske', '○', 'Outsider Left voters are skeptical of the incumbent board majority and lean toward a non-incumbent educator, with little published to confirm her views.'],
      ['SS', '—', '—', 'Stressed Sideliners have no clear published difference to act on; Blaske and Murphy have almost no published record and Pardue’s is mostly on social-policy votes.'],
      ['AR', 'Pardue', '○', 'Ambivalent Right voters value the experience of a sitting board president, while noting the legal cost of the parental-notification fight.'],
      ['PR', 'Pardue', '◐', 'Populist Right voters like an incumbent who fought the state over parental rights, a clear fit though challengers’ views are unknown.'],
      ['CC', 'Pardue', '◐', 'Committed Conservatives back a Reform California-endorsed incumbent who voted to keep parental notification and against rescinding it.'],
      ['FF', 'Pardue', '●', 'Faith and Flag Conservatives favor the trustee who most visibly defended parental-rights policy against state pressure.'],
    ]),
    counterArguments: [
      'FF/CC/PR (Pardue ◐/●): But the state education department found the policy unlawful and the board later rescinded it, so continuing that fight could cost the district money; challengers have not committed to a different approach.',
      'EL/PL (Blaske ◐/○): But Blaske and Murphy have published little, and Pardue is the only candidate whose votes on budgets and facilities are on the public record.',
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
      ['PL', 'Young', '◐', 'Progressive Left voters favor the trustee who opposed the parental-notification policy and who pressed for an election, not an appointment, for a vacant seat.'],
      ['EL', 'Young', '●', 'Establishment Liberals value board-president experience and formal governance training, and her record of following the state’s direction.'],
      ['DM', 'Young', '◐', 'Democratic Mainstays favor an incumbent who voted against the contested policy and for the school bond.'],
      ['OL', 'Young', '○', 'Outsider Left voters dislike the 3-2 culture-war votes and lean to the trustee who opposed them, with a weak lean since she is the incumbent.'],
      ['SS', 'Young', '○', 'Stressed Sideliners lean to the candidate with a documented record over one with none published.'],
      ['AR', 'Young', '○', 'Ambivalent Right voters weigh experience and training but could prefer a finance professional on budget issues; Thouvenell’s views are unpublished.'],
      ['PR', 'Thouvenell', '○', 'Populist Right voters who disliked Young’s votes against the parental-notification policy may prefer a challenger, though Thouvenell’s positions are not published.'],
      ['CC', 'Thouvenell', '○', 'Committed Conservatives focused on district finances may see a finance professional as a check on spending, but her views are not published.'],
      ['FF', 'Thouvenell', '○', 'Faith and Flag Conservatives who favored the parental-notification policy may prefer a challenger to the trustee who opposed it, with her views unpublished.'],
    ]),
    counterArguments: [
      'PR/CC/FF (Thouvenell ○): But Thouvenell has published nothing on policy, and Young’s vote to rescind followed a state finding that the policy was unlawful.',
      'EL/PL (Young ●/◐): But a finance professional may bring useful budget skills as the district prepares to manage a $359 million bond, if Measure M passes.',
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
      ['PL', 'Brady, Harkey, Plummer, Woodrome', '○', 'Progressive Left voters have little to go on; they lean toward the incumbents’ documented board service and one non-incumbent for fresh perspective, with a weak lean.'],
      ['EL', 'Brady, Harkey, Plummer', '◐', 'Establishment Liberals value experienced directors, including Brady’s ACWA leadership and Plummer’s decade on the board.'],
      ['DM', 'Brady, Harkey, Plummer', '○', 'Democratic Mainstays favor continuity on a technical utility board where the incumbents have documented service.'],
      ['OL', 'Brady, Plummer, Woodrome, Edwards', '○', 'Outsider Left voters distrust long-tenured boards and lean toward adding both challengers, though nothing is published about the challengers’ views.'],
      ['SS', '—', '—', 'Stressed Sideliners pay little attention to water-board races and nothing published separates the candidates.'],
      ['AR', 'Brady, Harkey, Plummer', '◐', 'Ambivalent Right voters value experience and stability in managing water costs, which the incumbents document better than the challengers.'],
      ['PR', 'Plummer, Woodrome, Edwards', '○', 'Populist Right voters are skeptical of long-serving insiders and lean toward challengers who are not career officials, with little published to confirm their views.'],
      ['CC', 'Brady, Harkey, Plummer, Woodrome', '○', 'Committed Conservatives focused on ratepayer costs see value in experienced directors plus an entrepreneur, with little published on rates.'],
      ['FF', '—', '—', 'Nothing published connects any candidate to the priorities of Faith and Flag Conservatives, so this column skips the race.'],
    ]),
    counterArguments: [
      'EL/AR (Brady, Harkey, Plummer ◐): But a board where three of four incumbents seek another term can drift without outside challenge, and none of them has published a rate plan.',
      'OL/PR (Woodrome, Edwards ○): But the challengers have published almost nothing, so voters have little to judge them on beyond their ballot designations.',
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
      'Measure M would let Murrieta Valley Unified issue up to $359 million in general obligation bonds to repair and modernize schools. The district says its facilities master plan identifies about $359 million in needs that the state does not regularly fund, including more than 125 roof leaks in the past year.',
      'The bonds would be repaid through a property tax on homes and businesses inside the district, which covers about 99.9% of ZIP 92562.',
    ],
    introParagraphs: [
      'The school board voted unanimously on May 12, 2026 to place the bond on the Nov. 3 ballot. School bonds can only be placed on statewide election dates, and under Proposition 39 they pass with 55% of the vote, not two-thirds.',
      'The district says the measure would keep current tax rates because older bonds from the 1990s and early 2000s are being paid off. At the board meeting, two Republican activists spoke against it, objecting to the ballot language (Riverside Record).',
    ],
    measure: {
      question:
        'Shall Murrieta Valley Unified School District issue up to $359,000,000 of general obligation bonds to repair and modernize school facilities, with a citizens’ oversight committee and annual audits? (Summary based on the district’s description and the Registrar’s measure notice; see the notice for the exact printed text.)',
      measureType: 'School facilities bond (general obligation, Prop 39)',
      voteThreshold: '55%',
      fiscalImpact:
        'Up to $359 million in bonds, repaid by a property tax of no more than $60 per $100,000 of assessed value, raising about $22 million a year per the Registrar’s measure notice. The district says the rate would stay at the current level as older bonds are retired; it does not state a term or total repayment cost on its pages.',
      supporters: 'Murrieta Valley Unified Board of Education (unanimous vote, May 12, 2026). No campaign committee found as of Oct 8, 2026.',
      opponents: 'Republican activists Bob Kowell and Jack Guerrero spoke against the ballot language at the board meeting (Riverside Record). No organized opposition committee found as of Oct 8, 2026.',
      voterConnection: [
        'Property owners pay through their property tax bill; renters may pay indirectly if landlords pass costs through.',
        'The district says rates would not rise, but the bonds would extend the current tax levy for years longer than if the measure failed, so total payments are higher than the alternative.',
        'Bond money cannot pay teacher or administrator salaries or pensions; it funds buildings and repairs.',
        'State law requires a citizens’ oversight committee and annual audits of how the money is spent.',
      ],
      mechanismBullets: [
        'Amount: up to $359 million in general obligation bonds (district notice, Aug 7, 2026).',
        'Threshold: at least 55% of voters, as a Proposition 39 school bond (district Measure M page).',
        'Rate: no more than $60 per $100,000 of assessed value; the district says it expects the rate to remain at the current level.',
        'Uses: roofs, plumbing, gas and sewer lines, ventilation and electrical systems; classroom and science, technology and engineering upgrades; career technical education labs; replacing HVAC units over 20 years old; replacing aging portables with permanent classrooms.',
        'Oversight: a citizens’ oversight committee and annual independent audits are required; funds stay local and cannot be used for administrator salaries or pensions.',
        'Term and total repayment: not stated on the district pages we could read.',
      ],
      argumentsFor: [
        'Many schools are more than 30 years old, and the district counted more than 125 roof leaks in the past year.',
        'The state does not provide regular facility funding, so local bonds are the main way to pay for repairs.',
        'The district says rates would stay the same as older bonds are paid off.',
        'Citizens’ oversight, annual audits and a ban on spending on administrator pay or pensions are written into the measure.',
      ],
      argumentsAgainst: [
        'Extending the current tax rate means homeowners keep paying for years longer than if the bonds were not issued.',
        'Interest on bonds raises the total cost beyond $359 million, and the district has not published a total repayment figure on its pages.',
        'At the board meeting, critics called the ballot language inadequate (Riverside Record).',
        'The district’s own pages do not state the bond’s term or total cost, so voters cannot see the full repayment amount.',
      ],
      readingLinks: [
        { label: 'Murrieta Valley USD: Measure M', url: 'https://www.murrieta.k12.ca.us/directory/business-operations/facilities-operations-technology/measure-m', summary: 'District description of the bond, threshold and project categories.' },
        { label: 'Murrieta Valley USD: Measure M FAQ', url: 'https://www.murrieta.k12.ca.us/directory/business-services/facilities-operations-technology/measure-m/faqs', summary: 'District answers on the tax rate and older bonds.' },
        { label: 'Riverside Record: board puts $359M bond question on November ballot', url: 'https://riversiderecord.org/murrieta-valley-unified-359-million-bond-november-election-set/', summary: 'Board vote, rate and public comments against the ballot language.' },
        { label: 'Riverside Registrar: Measure M notice', url: 'https://voteinfo.net/sites/g/files/aldnop371/files/2026-08/Measure%20M-Murrieta%20Valley%20USD%20eng.pdf', summary: 'Official measure notice for the Nov. 3 ballot.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters value public investment in school facilities and see a no-rate-increase bond as a low-cost way to fix aging buildings.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value the oversight committee, annual audits and the unanimous board vote as safeguards for a standard school bond.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays favor local school funding and see repairs to roofs and classrooms as basic public needs.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters back school repairs but dislike property-tax-funded debt and its interest costs.'],
      ['SS', '—', '—', 'Stressed Sideliners face cost-of-living pressure and no clear dollar impact is published on the district pages, so this column skips the measure.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters accept a bond that keeps rates flat and has oversight, though they want a clearer total repayment figure.'],
      ['PR', 'No', '◐', 'Populist Right voters distrust long-term government debt and the district’s promises of no rate increase.'],
      ['CC', 'No', '◐', 'Committed Conservatives are wary of borrowing that extends a tax for decades and of vague ballot language.'],
      ['FF', 'No', '○', 'Faith and Flag Conservatives lean against new school debt, with a weak lean because the measure is not tied to curriculum or social issues.'],
    ]),
    counterArguments: [
      'PR/CC (No ◐): But the repairs are basic safety and maintenance, the rate is unchanged, and the oversight committee and audits are required by law.',
      'PL/EL/DM (Yes ●): But keeping the rate flat means paying for the debt for years longer, and interest raises total costs beyond $359 million.',
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
      'Measure A would extend Riverside County’s existing half-cent transportation sales tax past its 2039 sunset, without raising the rate. The Riverside County Transportation Commission (RCTC) estimates it would raise about $280 million a year for highways, local streets and roads, and public transit.',
      'The tax has no end date under the renewal: it would continue until voters repeal it. Because it is a dedicated transportation tax, it needs two-thirds of voters to pass.',
    ],
    introParagraphs: [
      'Voters first approved the half-cent tax in 1988 (Inland Empire Business Daily) and extended it in 2002 for an additional 30 years. RCTC adopted Ordinance No. 26-001 on June 10, 2026, and the Board of Supervisors ordered the election on July 14, 2026 on a 3-2 vote (Supervisors Medina, Spiegel and Gutierrez yes; Washington and Perez no).',
      'The renewal adds a new Independent Taxpayers Oversight Committee, which the original measure never had. We found no organized opposition campaign as of Oct 8, 2026.',
    ],
    measure: {
      question:
        'Riverside County Traffic Relief, Pothole/Road Repair Investment Renewal: shall the existing one-half percent transactions and use (sales) tax for transportation continue beyond its 2039 expiration until repealed by voters, with annual audits and an independent taxpayers oversight committee? (Summary; see the Registrar’s measure notice for the exact printed text.)',
      measureType: 'Special tax (county transportation transactions and use tax), placed by the Riverside County Transportation Commission',
      voteThreshold: '2/3',
      fiscalImpact:
        'About $280 million a year (RCTC estimate). The tax rate stays at one-half percent; under the ordinance the new tax is set at 0% until April 1, 2039, when the current tax would otherwise end, and 0.5% afterward. The existing tax has raised more than $3.1 billion so far.',
      supporters: 'Riverside County Transportation Commission (Ordinance No. 26-001, RCTC chair Raymond Gregory). No formal campaign committee reviewed as of Oct 8, 2026.',
      opponents: 'No organized opposition found as of Oct 8, 2026; Supervisors Washington and Perez voted against the July 14, 2026 resolution ordering the election (County Board submittal).',
      voterConnection: [
        'Everyone who buys taxable goods in Riverside County pays the half-cent tax; it is already in place and would continue at the same rate.',
        'Sales taxes take a larger share of income from lower-income households, though the money funds roads and public transit that those households use.',
        'The renewal has no sunset: once passed, it ends only if voters repeal it.',
        'Money is split among three areas: highways and regional corridors, local streets and roads, and public transportation, and is returned in proportion to what each area (Western Riverside, Coachella Valley, Palo Verde Valley) generates.',
      ],
      mechanismBullets: [
        'Rate and term: continues a one-half percent sales tax beyond March 31, 2039 until repealed by voters (Ordinance Sec. III).',
        'Vote needed: two-thirds of Riverside County voters (the ordinance defines its “Approval Threshold” as two-thirds under the RCTC sales tax statutes).',
        'Spending categories: highways and regional corridors (such as I-10, I-15, SR-91 and I-215), local streets and roads, and public transportation; the funding plan is detailed in the Riverside County Transportation Improvement Plan.',
        'Accountability: annual independent audit posted publicly; administrative salaries and benefits capped at 1% of revenue; funds limited to projects serving Riverside County.',
        'Oversight: a new Independent Taxpayers Oversight Committee of up to seven members meets annually to review the audit.',
        'Review: starting in 2037 and at least every ten years after, the Commission must review and propose revisions to the Expenditure Plan.',
        'Bonding: the Commission may borrow against future revenue, up to the estimated tax proceeds, and must pay debt service first.',
      ],
      argumentsFor: [
        'It continues an existing tax without raising the rate, and keeps funding for roads, highway projects and public transit.',
        'Local money is used to match state and federal grants; the RCTC chair has called it the county’s “only source of leverage for outside grants.”',
        'Annual audits, a 1% cap on administrative salaries and a new oversight committee add accountability.',
        'Revenue is returned to the area that generates it, with funding for every city and unincorporated area.',
      ],
      argumentsAgainst: [
        'The renewal has no end date, so the tax would continue until voters repeal it.',
        'A sales tax is regressive and falls on residents’ everyday purchases.',
        'The oversight committee meets only once a year and reviews the audit, not spending decisions.',
        'The renewal commits revenue 13 years before the current tax expires in 2039, when voters could otherwise revisit it.',
      ],
      readingLinks: [
        { label: 'RCTC: Renewing Measure A', url: 'https://www.rctc.org/measure-a-renewal/', summary: 'Commission overview, funding categories and accountability provisions.' },
        { label: 'RCTC: Measure A ordinance (RCTIP Ordinance)', url: 'https://www.rctc.org/wp-content/uploads/2026/06/RCTIP_Ordinance.pdf', summary: 'Ordinance text, including the two-thirds approval threshold, term, 1% cap and oversight committee.' },
        { label: 'RCTC: Renewal fact sheet', url: 'https://www.rctc.org/wp-content/uploads/2026/07/2026.07-Renewal-Fact-Sheet-FINAL-compressed.pdf', summary: 'Projected funding by city through 2057.' },
        { label: 'Inland Empire Business Daily: voters will determine if Measure A stays', url: 'https://iebusinessdaily.com/riverside-county-voters-will-determine-if-measure-a-stays-on-the-books/', summary: 'History, allocations since 2009 and the new oversight committee.' },
        { label: 'Riverside Registrar: Measure A notice', url: 'https://voteinfo.net/sites/g/files/aldnop371/files/2026-08/Measure%20A%20-%20Riverside%20County%20Transportation%20Commission.pdf', summary: 'Official measure notice for the Nov. 3 ballot.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters value dedicated public-transit and road-repair funding, weighing the regressive sales tax against the service benefits.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value the audit, oversight committee and 1% administrative cap, and back continued investment in transportation.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays favor a renewal that keeps road and transit funding without raising the tax rate.'],
      ['OL', 'Yes', '○', 'Outsider Left voters like the transit funding but distrust a sales tax with no end date, so the lean is weak.'],
      ['SS', 'No', '○', 'Stressed Sideliners feel cost-of-living pressure and distrust a tax that never expires, though the rate is unchanged.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters accept a renewal that does not raise the rate and funds highways and local roads they use daily.'],
      ['PR', 'No', '◐', 'Populist Right voters oppose a permanent tax controlled by a commission and doubt the oversight committee’s independence.'],
      ['CC', 'No', '◐', 'Committed Conservatives oppose a tax extension with no sunset, even without a rate increase, and prefer voters revisit it at the 2039 deadline.'],
      ['FF', 'No', '○', 'Faith and Flag Conservatives lean against a new permanent government revenue stream, with a weak lean since road funding is broadly popular.'],
    ]),
    counterArguments: [
      'CC/PR (No ◐): But the rate is not rising, the money returns to each part of the county, and voters would lose the grant-matching leverage the tax provides if it expires in 2039.',
      'EL/DM (Yes ●): But a tax with no end date and a once-a-year oversight meeting leaves voters little way to correct course, and a rejection now still leaves 13 years of funding.',
    ],
  },
];
