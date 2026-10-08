import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/** Treasurer, Attorney General, Insurance Commissioner (statewide) and Superintendent of Public Instruction (school). Research as of Oct 7, 2026. */
export const RACES_STATEWIDE_B: Race[] = [
  // ───────────────────────── Treasurer ─────────────────────────
  {
    id: 'treasurer',
    categoryId: 'statewide',
    title: 'State Treasurer',
    tldrLabel: 'Treasurer',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      "The Treasurer is the state's banker: the office manages and invests the state's unspent cash, runs bond sales and oversees state debt, and sits on dozens of boards and commissions (including financing authorities for housing, schools and clean energy). Its decisions affect what California pays to borrow, which is passed on to taxpayers.",
      "The seat is open because Treasurer Fiona Ma is termed out and is running for Lieutenant Governor. Democrats have held the office for nearly three decades; the contest is a test of whether a Republican outsider with no elected experience can break that streak against a two-term Lieutenant Governor who has served on the UC Regents and CSU Trustees.",
    ],
    introParagraphs: [
      "In the June 2 primary, Lt. Gov. Eleni Kounalakis (D) finished first with about 36.4% (2,911,501 votes) and Jennifer Hawks (R) second with about 24.3% (1,944,142 votes), ahead of Sen. Anna Caballero (D) at about 16.2%, per Secretary of State returns. Kounalakis switched from the governor's race to the treasurer's race in 2025.",
      "The general election turns on experience versus outsider status: Kounalakis has the Democratic establishment and labor behind her, while Hawks pitches performance metrics for state investments and opposition to politically motivated investment decisions for pension funds.",
    ],
    readingLinks: [
      {
        label: 'CalMatters voter guide: Treasurer',
        url: 'https://calmatters.org/california-voter-guide-2026/treasurer/',
        summary: 'Side-by-side candidate profiles, endorsements and campaign finance for Kounalakis and Hawks.',
      },
      {
        label: 'LAist: California treasurer — who is running',
        url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-state-treasurer',
        summary: 'Explainer on what the treasurer does and the November matchup.',
      },
    ],
    legalRequirements: "U.S. citizen, California resident and registered voter (Cal. Const. art. II); the office is limited to two four-year terms.",
    qualificationCriteria: [
      { id: 'debt-investment', label: 'Debt issuance and investment management', detail: "The Treasurer sells state bonds and invests the state's cash, so direct experience with debt markets and portfolios matters." },
      { id: 'finance-boards', label: 'Serving on public finance and pension boards', detail: 'The Treasurer sits on CalPERS, CalSTRS and dozens of financing authorities and commissions.' },
      { id: 'public-finance', label: 'Public finance administration', detail: 'The office administers state financing programs, including housing, school and clean-energy bonds.' },
      { id: 'exec-management', label: 'Managing an organization and budget', detail: 'The Treasurer runs a state office with staff, investment operations and a public budget.' },
    ],
    candidates: [
      {
        id: 'eleni-kounalakis',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: "Two terms as Lieutenant Governor, with seats on the UC Regents, CSU Trustees and the State Lands Commission (which she chairs, per her campaign site). She has no documented role managing debt issuance or an investment portfolio.",
          criteria: [
            { criterionId: 'debt-investment', assessment: 'unknown', evidence: "No treasury, bond-issuance or portfolio-management role found in the sources checked; the UC Regents oversee the university's investments as a board." },
            { criterionId: 'finance-boards', assessment: 'met', evidence: 'Lieutenant Governor since Jan 2019; member of the UC Board of Regents, the CSU Board of Trustees and the State Lands Commission; earlier service on the San Francisco Port Commission and First 5 California (per campaign site and Wikipedia).' },
            { criterionId: 'public-finance', assessment: 'partial', evidence: 'State Lands Commission oversees state-owned land and resource revenue; no direct role running state financing programs found.' },
            { criterionId: 'exec-management', assessment: 'partial', evidence: "President of AKT Development, a Sacramento real-estate firm, until 2010 (per campaign site); U.S. Ambassador to Hungary Jan 2010 to Jul 2013; heads the Lieutenant Governor's office." },
          ],
        },
        name: 'Eleni Kounalakis',
        party: 'D',
        role: 'Lieutenant Governor of California',
        photoSlug: 'eleni-kounalakis',
        bio: [
          "Lieutenant Governor since 2019 (two terms). Daughter of Sacramento developer Angelo Tsakopoulos, she was a major Democratic donor in the early 2000s and was U.S. ambassador to Hungary under President Obama.",
          "As Lt. Gov. she sits on the UC Board of Regents and the CSU Board of Trustees, where she has repeatedly voted against tuition increases, and on the State Lands Commission. She began the cycle running for governor and moved to the treasurer's race in 2025.",
        ],
        scorecard: [
          { topic: 'Debt & bond oversight', position: '✓ Board experience (Regents, Trustees, State Lands Commission) but no prior treasury or finance office', comparison: 'vs Hawks: Kounalakis has public-board experience; Hawks has none in government.' },
          { topic: 'State investments / pensions', position: '? No detailed public platform found on CalPERS/CalSTRS investing', comparison: 'vs Hawks: Hawks explicitly pledges performance metrics and no politically motivated investment decisions.' },
          { topic: 'Housing & public financing', position: '✓ Democratic establishment priorities on housing finance and public bonds', comparison: 'vs Hawks: Hawks frames herself as a check on state spending and borrowing.' },
          { topic: 'Higher-ed costs', position: '✓ Repeated votes against UC and CSU tuition increases', comparison: 'vs Hawks: no comparable record.' },
          { topic: 'Party / coalition', position: '✓✓ Backed by Newsom, both U.S. senators, Kamala Harris, Fiona Ma, state Labor Federation', comparison: 'vs Hawks: Hawks backed by CA GOP, California Republican Assembly, Reform California.' },
        ],
        money: 'Fundraising figures were not retrievable in the sources checked; see Cal-Access (cal-access.sos.ca.gov) for current totals. ?',
        endorsements: 'California Labor Federation, Teamsters California, National Union of Healthcare Workers; Gov. Newsom, Sens. Padilla and Schiff, Kamala Harris, Treasurer Fiona Ma; former Oakland mayor Libby Schaaf (CalMatters / Yahoo-reported lists, Sept 2026).',
        redFlags: [],
        notes: [
          'Her family wealth and past political giving (via her father) are often noted in profiles; no sourced legal or ethics findings were located.',
          'CalMatters guide: https://calmatters.org/california-voter-guide-2026/treasurer/',
        ],
      },
      {
        id: 'jennifer-hawks',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: "Worked about 20 years at Sacred Heart Schools in Atherton, where the San Francisco Examiner describes finance-related administrative work (office manager and executive assistant), and earlier in banking. She has held no elected or state-board position.",
          criteria: [
            { criterionId: 'debt-investment', assessment: 'unknown', evidence: 'Early-career banking work is reported; no bond-issuance or investment-management role found.' },
            { criterionId: 'finance-boards', assessment: 'not-met', evidence: 'No elected office or state or pension board service found; the Examiner reports she has never held office.' },
            { criterionId: 'public-finance', assessment: 'not-met', evidence: 'No public-sector finance role found in the sources checked.' },
            { criterionId: 'exec-management', assessment: 'partial', evidence: 'Retired in 2021 after about 20 years at Sacred Heart Schools (San Francisco Examiner); some outlets say she served on its executive team; no CFO title found. Her own campaign materials cite budget management.' },
          ],
        },
        name: 'Jennifer Hawks',
        party: 'R',
        role: 'Retired Business Executive',
        bio: [
          "Retired Silicon Valley businessperson and local Republican activist who most recently served on the executive team of Sacred Heart Schools, a Catholic school in Atherton. She has never held elected office and says that is an asset.",
          "She argues the treasurer should act as an independent check on state government, use performance metrics for state fund returns, and oppose politically motivated investing by public retirement funds.",
        ],
        scorecard: [
          { topic: 'Debt & bond oversight', position: '~ Pledges independent scrutiny of state borrowing; no treasury experience', comparison: 'vs Kounalakis: Kounalakis has board experience; Hawks has private-sector executive experience.' },
          { topic: 'State investments / pensions', position: '✓ Performance metrics; no politically motivated investment decisions', comparison: 'vs Kounalakis: Kounalakis has no stated investment-policy platform in the sources checked.' },
          { topic: 'Housing & public financing', position: '? No detailed platform found', comparison: 'vs Kounalakis: Kounalakis aligns with Democratic housing-finance priorities.' },
          { topic: 'Spending / taxes', position: '✓ Presents herself as a check on a Democratic-run state government', comparison: 'vs Kounalakis: Kounalakis is a Newsom-era establishment Democrat.' },
          { topic: 'Experience', position: '✗ No prior elected or state-board experience', comparison: 'vs Kounalakis: two terms statewide plus Regents and Trustees service.' },
        ],
        money: 'Fundraising totals were not retrievable in the sources checked; see Cal-Access for current figures. ?',
        endorsements: 'California Republican Party, California Republican Assembly, Reform California (per CalMatters voter guide, 2026).',
        redFlags: [],
        notes: ['No campaign website was verified for this guide.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Kounalakis', '●', "Progressive Left voters value a treasurer aligned with labor and Democratic priorities on public bonds and housing finance, which Kounalakis offers over a Republican pledging to check state spending."],
      ['EL', 'Kounalakis', '●', "Establishment Liberals favor her two terms statewide, UC/CSU board service and backing from Newsom and the Democratic leadership over an executive with no government experience."],
      ['DM', 'Kounalakis', '●', "Democratic Mainstays reliably support the party-endorsed, labor-backed nominee in a down-ballot finance office."],
      ['OL', 'Kounalakis', '○', "Outsider Left voters are wary of her dynastic-money background but still prefer the Democrat to a Reform-California-backed Republican on public finance."],
      ['SS', 'Kounalakis', '○', "Stressed Sideliners lean toward the candidate with a record on college affordability (votes against UC and CSU tuition hikes) over one with no public record."],
      ['AR', 'Hawks', '○', "Ambivalent Right voters may be drawn to a business-minded outsider promising performance metrics, though neither candidate is well known."],
      ['PR', 'Hawks', '◐', "Populist Right voters distrust the political establishment and prefer a first-time candidate pledging to check a long-entrenched Democratic officeholder pipeline."],
      ['CC', 'Hawks', '●', "Committed Conservatives value her pledge to restrain state borrowing and keep politics out of pension investing."],
      ['FF', 'Hawks', '●', "Faith and Flag Conservatives favor the GOP and Reform California-backed nominee, who also comes from a Catholic school administration background."],
    ]),
    counterArguments: [
      "PL/EL/DM (Kounalakis): But consider that the treasurer role rewards financial skills, and Kounalakis has no direct treasury or investment-management record, so the pick rests on board experience and party fit rather than demonstrated debt expertise.",
      "PR/CC/FF (Hawks): But consider that Hawks has never held office or managed a public portfolio, and the treasurer sits on many technical financing boards where board experience matters.",
    ],
  },

  // ───────────────────────── Attorney General ─────────────────────────
  {
    id: 'attorney-general',
    categoryId: 'statewide',
    title: 'Attorney General',
    tldrLabel: 'Attorney General',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      "California's Attorney General heads the state Department of Justice and is the state's chief law officer: enforcing criminal, consumer-protection, civil-rights, antitrust and environmental laws, defending state laws in court, writing the official titles and summaries of ballot measures, and deciding whether to sue the federal government.",
      "That last power has been central this term: the AG has filed or joined more than 50 lawsuits against the second Trump administration, and the winner will shape how California litigates over immigration, funding, elections and consumer protections through 2030.",
    ],
    introParagraphs: [
      "In the June 2 primary, Attorney General Rob Bonta (D) received about 56.6%, Michael Gates (R) about 37.9% and Green candidate Marjorie Mikels about 5.4%, per figures reported on Wikipedia's 2026 California elections page. Bonta was appointed by Gov. Newsom in 2021 and elected to a full term in 2022; he chose to seek reelection rather than run for governor.",
      "Gates is a former Huntington Beach city attorney who served about ten months in Trump's Justice Department Civil Rights Division before returning to the city. The race contrasts continued aggressive litigation against the administration with a law-and-order, anti-state-mandate approach.",
    ],
    readingLinks: [
      {
        label: 'CalMatters voter guide: Attorney General',
        url: 'https://calmatters.org/california-voter-guide-2026/attorney-general/',
        summary: 'Candidate profiles, endorsements and campaign finance for Bonta and Gates.',
      },
      {
        label: 'LAist: California attorney general — who is running and why it matters',
        url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-attorney-general',
        summary: 'Explainer on the office and the November matchup.',
      },
    ],
    legalRequirements: "Must have been admitted to practice law in California courts for the five years immediately preceding election (Cal. Const. art. V, sec. 13); registered voter; limited to two four-year terms.",
    qualificationCriteria: [
      { id: 'law-practice', label: 'Legal practice and litigation', detail: "The Attorney General is the state's chief lawyer and argues cases in state and federal court." },
      { id: 'agency-leadership', label: 'Running a large law-enforcement agency', detail: 'The AG heads the Department of Justice, a statewide agency of attorneys, agents and lab staff.' },
      { id: 'enforcement', label: 'Criminal and civil enforcement', detail: 'The office prosecutes and sues under criminal, consumer, civil-rights, antitrust and environmental laws.' },
      { id: 'constitutional', label: 'Constitutional and federal litigation', detail: 'The AG defends state laws and decides whether California sues the federal government.' },
    ],
    candidates: [
      {
        id: 'rob-bonta',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: "Has held this office since April 2021 (appointed, then elected in 2022). Before that, he was a litigation associate and San Francisco deputy city attorney, and served in the Assembly 2012-2021.",
          criteria: [
            { criterionId: 'law-practice', assessment: 'met', evidence: 'Yale Law JD; litigation associate at a Bay Area firm; law clerk to a federal district judge; San Francisco deputy city attorney (per Vote Smart and Wikipedia).' },
            { criterionId: 'agency-leadership', assessment: 'met', evidence: 'Attorney General and head of the California Department of Justice since April 23, 2021.' },
            { criterionId: 'enforcement', assessment: 'met', evidence: 'As AG, enforces state criminal, consumer and housing laws; news accounts cite housing-law actions and a Meta child-safety settlement (reported by SF Standard).' },
            { criterionId: 'constitutional', assessment: 'met', evidence: 'Has filed or joined more than 50 suits against the federal administration since 2025 (as reported).' },
          ],
        },
        name: 'Rob Bonta',
        party: 'D',
        role: 'California Attorney General',
        photoSlug: 'rob-bonta',
        bio: [
          "Appointed Attorney General by Gov. Newsom in 2021 and elected to a four-year term in 2022; previously an East Bay Assemblymember. Since Trump's return he has filed or joined more than 50 lawsuits against the federal administration.",
          "His first term emphasized enforcing state housing laws against resisting cities and criminal-justice reform; he was also credited by supporters with a large settlement with Meta over child-safety concerns.",
        ],
        recordVsChange: "Bonta has delivered the state's litigation response to the Trump administration and enforced housing-element law against resisting cities. The case for change rests on Gates's argument that Sacramento is too lenient on crime and too aggressive toward local governments (critics also questioned his campaign-funded legal fees, though the FPPC found no violation); voters who want continuity in federal litigation have little reason to switch.",
        scorecard: [
          { topic: 'Suing the federal government', position: '✓✓ 50+ lawsuits against the Trump administration', comparison: 'vs Gates: Gates worked in Trump DOJ and would not lead that litigation.' },
          { topic: 'Crime & criminal justice', position: '~ Reform-leaning record; supports state criminal-justice reforms', comparison: 'vs Gates: Gates says Sacramento policy is too lenient.' },
          { topic: 'Housing law enforcement', position: '✓ Enforced state housing laws against resisting cities', comparison: 'vs Gates: Gates fought state housing mandates as Huntington Beach city attorney.' },
          { topic: 'Consumer / tech protection', position: '✓ Led a settlement with Meta over child safety (as reported by SF Standard)', comparison: 'vs Gates: no comparable state-level consumer record.' },
          { topic: 'Elections', position: '✓ Defends state election rules; wrote the title for Prop 39 voter ID measure (title challenged by Reform California)', comparison: 'vs Gates: Gates at DOJ helped sue for voter-registration files, including from Orange County.' },
        ],
        money: 'Reelection-account totals were not retrievable in the sources checked; see Cal-Access for current figures. ?',
        endorsements: 'California Democratic Party, California Teachers Association, California Environmental Voters (CalMatters voter guide, 2026).',
        redFlags: [],
        notes: [
          "His reelection campaign paid about $468,000 to the law firm Wilson Sonsini after federal investigators contacted him for information in the Oakland bribery probe involving the Duong family, longtime donors whose roughly $155,000 in contributions he returned. Bonta says investigators treated him as someone with relevant information, not a target, and he was not charged — https://www.kqed.org/news/12065004/california-ag-rob-bonta-wont-rule-out-a-run-for-governor-amid-campaign-fund-questions. After a complaint, the Fair Political Practices Commission said in December 2025 that it found no evidence the spending violated the law — https://www.yahoo.com/news/articles/state-watchdog-clears-bonta-campaign-015028470.html. Critics still argue the fees were personal rather than campaign-related.",
          "Reform California's Carl DeMaio has accused Bonta of altering the Prop 39 voter-ID ballot title and announced a lawsuit; this is a partisan claim and no independent ruling was found.",
        ],
      },
      {
        id: 'michael-gates',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: "Elected Huntington Beach city attorney three times (first in 2014) and spent about ten months in 2025 as a deputy assistant attorney general in the U.S. Justice Department Civil Rights Division. He has not led a statewide agency.",
          criteria: [
            { criterionId: 'law-practice', assessment: 'met', evidence: 'Chapman Fowler School of Law graduate; trial attorney; city attorney of Huntington Beach 2014-2025, including suits against the State of California over housing mandates.' },
            { criterionId: 'agency-leadership', assessment: 'partial', evidence: "Led a municipal city attorney's office for about ten years; held a federal deputy assistant AG post for about ten months. No statewide or large-agency leadership. His DOJ exit is disputed (see red flags)." },
            { criterionId: 'enforcement', assessment: 'partial', evidence: "City attorney's office enforces municipal code and handles civil litigation for the city; at the DOJ Civil Rights Division he helped file eight voter-roll suits. The scope of criminal prosecution in his office was not verified." },
            { criterionId: 'constitutional', assessment: 'met', evidence: "Defended Huntington Beach's voter-ID measure and litigated against the state on housing law; helped file eight federal suits for voter-registration files (2025)." },
          ],
        },
        name: 'Michael E. Gates',
        party: 'R',
        role: 'Deputy United States Attorney',
        bio: [
          "Trial attorney who served about a decade as Huntington Beach city attorney, where he fought state housing laws. In 2025 he joined the U.S. Justice Department's Civil Rights Division as a deputy assistant attorney general, helping file eight lawsuits seeking voter-registration files, including against Orange County.",
          "He resigned in November 2025 and returned briefly to Huntington Beach as chief assistant city attorney before leaving to run for Attorney General.",
        ],
        scorecard: [
          { topic: 'Suing the federal government', position: '✗ Former Trump DOJ official; would not lead suits against the administration', comparison: 'vs Bonta: 50+ lawsuits filed or joined.' },
          { topic: 'Crime & criminal justice', position: '✓✓ Says Sacramento criminal-justice policy is too lenient', comparison: 'vs Bonta: Bonta backed reform-oriented policies.' },
          { topic: 'Housing law', position: '✗ Opposed state housing mandates on Huntington Beach', comparison: 'vs Bonta: Bonta enforces them.' },
          { topic: 'Elections / voter rolls', position: '✓ Helped DOJ sue for voter-registration files', comparison: 'vs Bonta: Bonta defends state election administration.' },
          { topic: 'Corporate / antitrust', position: '~ Criticizes Bonta over handling of multistate suit against Paramount–Warner Bros. Discovery merger', comparison: 'vs Bonta: Bonta is in the multistate coalition.' },
        ],
        money: 'Fundraising totals were not retrievable; see Cal-Access. ?',
        endorsements: 'California Republican Party, California Parents Union, California Rifle & Pistol Association (CalMatters voter guide, 2026).',
        redFlags: [
          {
            severity: 'serious',
            status: 'disputed',
            text: "His November 2025 exit from the Justice Department is disputed. His federal personnel form (SF-52), approved by Civil Rights Division head Harmeet Dhillon, listed him as \"terminated for cause,\" and the Orange County Register reported he was accused of creating a hostile work environment for several women he worked with. About two weeks later DOJ, without explanation, rescinded the termination and accepted his voluntary resignation. Gates posted a resignation letter dated Nov. 8, says he left to come home, and told the Register that department leaders were \"angry I resigned.\" No details of the accusation or any finding have been made public.",
            whyItMatters:
              'The Attorney General runs a department of thousands of lawyers and staff and enforces state workplace-harassment law, so a for-cause dismissal tied to a reported harassment accusation, even one later rescinded without explanation, bears on how he would lead it.',
            sources: [
              { label: 'San Francisco Chronicle (Jan 2026)', url: 'https://www.sfchronicle.com/politics/joegarofoli/article/michael-gates-attorney-general-21292842.php' },
              { label: 'LAist (Nov 2025)', url: 'https://laist.com/news/politics/huntington-beachs-michael-gates-quits-justice-department' },
            ],
          },
        ],
        notes: [
          'The printed ballot designation is Deputy United States Attorney; CalMatters notes his DOJ title was deputy assistant attorney general and that he has since left.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Bonta', '●', "Progressive Left voters value the Attorney General leading the 50-plus suits against the Trump administration and enforcing housing and consumer law."],
      ['EL', 'Bonta', '●', "Establishment Liberals favor an experienced incumbent who defends state institutions in court and is backed by the Democratic Party and teachers."],
      ['DM', 'Bonta', '●', "Democratic Mainstays support the party-endorsed incumbent who has become the face of California's legal resistance to Trump."],
      ['OL', 'Bonta', '◐', "Outsider Left voters are uneasy about his ties to Oakland donors caught up in a bribery probe, even though the FPPC cleared his legal-fee spending, but still back the Democrat over a former Trump DOJ official."],
      ['SS', 'Bonta', '○', "Stressed Sideliners lean to the known incumbent whose lawsuits touch cost-of-living and consumer issues, though neither candidate has broad name recognition."],
      ['AR', 'Gates', '○', "Ambivalent Right voters worried about crime may prefer Gates's tough-on-crime message, tempered by doubts about his DOJ exit dispute."],
      ['PR', 'Gates', '◐', "Populist Right voters like his fight against state mandates and his DOJ voter-roll lawsuits, though his Washington ties are mixed."],
      ['CC', 'Gates', '●', "Committed Conservatives want an Attorney General who ends Sacramento's suits against Trump and prioritizes law enforcement."],
      ['FF', 'Gates', '●', "Faith and Flag Conservatives favor the GOP nominee backed by the California Parents Union and gun-rights groups over the Democrat who sues the federal government."],
    ]),
    counterArguments: [
      "PL/EL/DM (Bonta ●): But consider that his longtime donors, the Duong family, were indicted in an Oakland bribery case (they have pleaded not guilty) and his campaign spent about $468,000 on lawyers in that probe, because even though he was not charged and the FPPC found no violation, an AG's credibility depends on distance from such cases.",
      "CC/FF (Gates ●): But consider that a Justice Department personnel form recorded Gates as terminated for cause, with the Orange County Register reporting a hostile-work-environment accusation, before DOJ rescinded it and accepted his resignation, because the Attorney General runs a department of thousands and the matter was never publicly explained.",
    ],
  },

  // ───────────────────────── Insurance Commissioner ─────────────────────────
  {
    id: 'insurance-commissioner',
    categoryId: 'statewide',
    title: 'Insurance Commissioner',
    tldrLabel: 'Insurance Commissioner',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      "The elected Insurance Commissioner regulates California's insurers: approving or denying rate increases under Proposition 103, overseeing the FAIR Plan (the last-resort fire insurer, which had more than 684,000 policies in March 2026, up 152% since September 2022), policing claim handling, and deciding how much catastrophe modeling and reinsurance cost insurers can charge to customers.",
      "The race comes after the January 2025 Los Angeles fires and a wave of nonrenewals; outgoing Commissioner Ricardo Lara drew sharp criticism from fire survivors. For the first time since the office became elective, both finalists are Democrats, so the contest is about approach, not party.",
    ],
    introParagraphs: [
      "Former San Francisco Supervisor Jane Kim finished first in the June 2 primary with about 27% among 11 candidates, and state Sen. Ben Allen second with about 19-20%. Allen won the California Democratic Party's endorsement at its February convention (about 42% of delegate votes to Kim's 40%) after a recount Kim requested; the California Labor Federation endorsed Kim the next day.",
      "Both pledged not to accept insurance-industry money. This is a same-party race: Kim is the more progressive, consumer-advocate and union-aligned candidate with a state-run disaster insurance proposal, while Allen is the more establishment, legislative-insider candidate who aims to stabilize the private market and fix regulatory machinery.",
    ],
    readingLinks: [
      {
        label: 'CalMatters (Aug 2026): Will California vote progressive in the insurance commissioner race?',
        url: 'https://calmatters.org/economy/2026/08/insurance-commissioner-progressive-wave/',
        summary: 'Contrasts Kim and Allen on money, endorsements, the state-run insurance idea and the party endorsement fight.',
      },
      {
        label: 'CalMatters (June 2026): Insurance commissioner race is set: Kim vs. Allen',
        url: 'https://calmatters.org/economy/2026/06/california-insurance-commissioner-top-two/',
        summary: 'Plain-language explainer of FAIR Plan, Prop 103 and each candidate plan; no general-election debate was found as of Oct 7.',
      },
      {
        label: 'CalMatters voter guide: Insurance Commissioner',
        url: 'https://calmatters.org/california-voter-guide-2026/insurance-commissioner/',
        summary: 'Candidate profiles with positions and endorsements.',
      },
    ],
    legalRequirements: "U.S. citizen, California resident and registered voter; limited to two four-year terms. No professional license or insurance background is required by law.",
    qualificationCriteria: [
      { id: 'rate-review', label: 'Insurance regulation and rate review', detail: 'The Commissioner approves or denies rate requests under Proposition 103 and oversees insurer solvency.' },
      { id: 'consumer-protection', label: 'Consumer protection and claims enforcement', detail: 'The Department of Insurance investigates claim handling and insurer misconduct.' },
      { id: 'agency-leadership', label: 'Running a regulatory agency', detail: 'The Commissioner leads the Department of Insurance, with regulators, attorneys and investigators.' },
      { id: 'catastrophe-policy', label: 'Wildfire and catastrophe insurance policy', detail: 'The office oversees the FAIR Plan and rules on catastrophe modeling and reinsurance in rates.' },
    ],
    candidates: [
      {
        id: 'ben-allen',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: "State senator since 2014 and former Santa Monica-Malibu school board president, with a law degree (UC Berkeley JD) and several insurance bills. He has not worked at an insurance regulator or insurer.",
          criteria: [
            { criterionId: 'rate-review', assessment: 'partial', evidence: 'Has carried insurance bills (contents-coverage payout; nonrenewal notice SB 1301; SB 1209); no rate-review or regulatory role found.' },
            { criterionId: 'consumer-protection', assessment: 'partial', evidence: 'Authored a law requiring insurers to pay 60% of contents coverage without a detailed inventory (per campaign and news accounts).' },
            { criterionId: 'agency-leadership', assessment: 'partial', evidence: 'Chairs Senate committees (Environmental Quality; earlier Education 2017-19); school board president, helping pass a $385 million bond; no regulatory agency role.' },
            { criterionId: 'catastrophe-policy', assessment: 'partial', evidence: 'Helped write Prop 4 (2024 climate bond) and led $3.5 billion of its appropriation as Budget subcommittee chair; his district was hit by the January 2025 fires.' },
          ],
        },
        name: 'Ben Allen',
        party: 'D',
        role: 'California State Senator',
        photoSlug: 'ben-allen',
        bio: [
          "State senator since 2014, termed out; his Los Angeles-area district was hit by the January 2025 fires. He authored the law restricting single-use plastics and helped write Proposition 4, the 2024 climate bond.",
          "His insurance bills include a law requiring insurers to pay 60% of contents coverage without a detailed inventory, plus pending bills requiring 90 days' notice before nonrenewal (SB 1301) and penalizing insurers that fail to fix violations (SB 1209).",
        ],
        scorecard: [
          { topic: 'Wildfire insurance availability', position: '✓ Stabilize private market through risk reduction, mitigation and building standards', comparison: 'vs Kim: Kim would create a state-run natural-disaster insurer; Allen keeps the private market.' },
          { topic: 'FAIR Plan', position: '✓ More oversight of the FAIR Plan', comparison: 'vs Kim: Kim wants FAIR Plan board seats and meetings public and sees it as needing accountability.' },
          { topic: 'Rate review / Prop 103', position: '✓ Faster, better-staffed rate review; consumer advocate inside the department', comparison: 'vs Kim: Kim would explore rate freezes when a claim is filed.' },
          { topic: 'Claims & insurer accountability', position: '✓ Require real-time reporting of claim delays and explanations of denials', comparison: 'vs Kim: Kim wants a public dashboard and penalties for delayed claims.' },
          { topic: 'Auto insurance', position: '✗ Opposes expanding the low-cost auto program to all drivers', comparison: 'vs Kim: Kim would expand it to every driver.' },
          { topic: 'Ideology / base', position: '~ Establishment, legislative-insider; party-endorsed; bills Kim as pursuing a subsidy for the wealthy', comparison: 'vs Kim: Kim is the Sanders/Working Families progressive.' },
        ],
        money: 'Largest outside support is a California Environmental Voters PAC, to which crypto billionaire Chris Larsen gave $1 million in May 2026 (CalMatters, Aug 2026). Has pledged to refuse insurance-industry money. Campaign totals: see Cal-Access. ?',
        endorsements: 'California Democratic Party, California Environmental Voters, California Professional Firefighters, Sierra Club, Consumer Federation of California, Speaker Robert Rivas, Senate leader Monique Limón, Sens. Padilla and Schiff, San Francisco Chronicle editorial board.',
        redFlags: [],
        notes: [
          "The Working Families Party's California director, a Kim ally, criticized Allen for \"crypto money\": Ripple co-founder Chris Larsen gave $1 million in May 2026 to the California Environmental Voters-sponsored PAC that is Allen's largest outside backer. That is legal independent spending, not a contribution to Allen, and no ethics or campaign-finance problem has been reported; Allen has pledged to refuse insurance-industry money — https://calmatters.org/economy/2026/08/insurance-commissioner-progressive-wave/",
          'Supporters (RL Miller) call him progressive by any standard; critics call his establishment backing out of touch. Allen supports encouraging residents to leave high fire-risk areas and discouraging building there.',
        ],
      },
      {
        id: 'jane-kim',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: "Attorney and former San Francisco supervisor (2011-2019) and school board president, who later directed the California Working Families Party. News reports say she has no professional insurance experience.",
          criteria: [
            { criterionId: 'rate-review', assessment: 'not-met', evidence: 'No insurance-regulation or rate-review role found; reported as having no professional insurance experience (SF Chronicle / SFist coverage).' },
            { criterionId: 'consumer-protection', assessment: 'partial', evidence: 'Civil rights attorney; as supervisor sponsored tenant and eviction protections (per her bio); no insurance-claims enforcement role found.' },
            { criterionId: 'agency-leadership', assessment: 'partial', evidence: 'San Francisco supervisor 2011-2019 and Board of Education president; inaugural director of the California Working Families Party; no regulatory agency role.' },
            { criterionId: 'catastrophe-policy', assessment: 'not-met', evidence: 'No catastrophe-insurance role found; her state-run disaster insurance proposal is a plan, not experience.' },
          ],
        },
        name: 'Jane Kim',
        party: 'D',
        role: 'Attorney/Consumer Advocate',
        photoSlug: 'jane-kim',
        bio: [
          "Former San Francisco supervisor who helped secure free community college for city residents, the state's first $15 minimum-wage ordinance and eviction protections. She was California director of Bernie Sanders's 2020 campaign and later directed the California Working Families Party.",
          "She proposes 'natural disaster insurance for all,' a state-run authority funded by a share of premiums that would guarantee wildfire and flood coverage, modeled on New Zealand's system.",
        ],
        scorecard: [
          { topic: 'Wildfire insurance availability', position: '✓✓ State-run disaster insurance for all, funded by premium share; says it needs study', comparison: 'vs Allen: Allen keeps the private market and calls the plan a subsidy for the rich.' },
          { topic: 'FAIR Plan', position: '✓ Keep as last resort; make board and meetings public', comparison: 'vs Allen: Allen focuses on more oversight.' },
          { topic: 'Rate review / Prop 103', position: '✓ Explore rate freeze after a claim is filed; skeptical of letting insurers raise rates alone', comparison: 'vs Allen: Allen aims to speed review.' },
          { topic: 'Claims & insurer accountability', position: '✓✓ Public dashboard, penalties for delayed claims, disclosure of premium spending and fossil-fuel financing', comparison: 'vs Allen: Allen emphasizes reporting and denial explanations.' },
          { topic: 'Auto insurance', position: '✓ Expand low-cost auto program to every driver; tie homeowners availability to auto sales', comparison: 'vs Allen: Allen opposes expansion.' },
          { topic: 'Ideology / base', position: '✓✓ Progressive outsider backed by Sanders, labor and Working Families', comparison: 'vs Allen: Allen is the legislative insider backed by the party.' },
        ],
        money: 'Top contributors: California Working Families Party (about $365,000) and California Teachers Association (about $150,000) per CalMatters, Aug 2026. Business groups (JOBSPAC, Chamber of Commerce) spent about $1.5 million against her in the primary. Pledged to refuse insurance-industry money. ?',
        endorsements: 'California Labor Federation, SEIU California, California Teachers Association, California Faculty Association, Working Families Party, Sen. Bernie Sanders, Rep. Ro Khanna; also Lt. Gov. Kounalakis and Controller Malia Cohen per one report.',
        redFlags: [],
        notes: [
          "Consumer Watchdog president Jamie Court has warned that a state-run disaster fund would need \"tens of billions of dollars to start\" and could be wiped out by one catastrophic fire; Kim says the plan needs further study and that \"just allowing the insurance industry to raise rates\" is not the answer. This is a policy critique, not a red flag — https://calmatters.org/economy/2026/08/insurance-commissioner-progressive-wave/",
          'Her plan has drawn industry criticism as shifting catastrophic risk onto the state, as earthquake insurance comparisons suggest.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Kim', '●', "Progressive Left voters, picking the further-left candidate, value Kim's Sanders-backed push for state-run disaster insurance and rate freezes over Allen's market-stabilizing approach."],
      ['EL', 'Allen', '●', "Establishment Liberals pick the legislative insider with the Democratic Party endorsement who works within the private market and Prop 103 machinery rather than building a new state insurer."],
      ['DM', 'Allen', '◐', "Democratic Mainstays follow the party-endorsed, firefighter-backed incumbent senator, though Kim's labor backing makes it a trade-off."],
      ['OL', 'Kim', '●', "Outsider Left voters favor the anti-establishment, insurer-skeptical candidate who ran against the party-endorsed choice."],
      ['SS', 'Allen', '○', "Stressed Sideliners worried about premiums and nonrenewals may prefer Allen's concrete rule changes (notice before nonrenewal, contents payouts) over an untested state fund."],
      ['AR', 'Allen', '●', "Ambivalent Right voters, wary of government-run insurance, prefer the candidate who keeps the private market and calls Kim's plan a subsidy for the wealthy."],
      ['PR', 'Kim', '○', "Populist Right voters distrust insurance companies and might favor the more anti-insurer candidate, though her union-left identity makes this a weak lean."],
      ['CC', 'Allen', '◐', "Committed Conservatives want market-based solutions and oppose a state-run insurer, so they pick the more moderate of two Democrats."],
      ['FF', 'Allen', '○', "Faith and Flag Conservatives find neither appealing but lean to the less left-wing candidate who does not propose a new state agency."],
    ]),
    counterArguments: [
      "PL/OL (Kim): But consider that the state-run fund has no published capital plan, and Consumer Watchdog warns it could require tens of billions of dollars, so a bad fire season could strain California's budget.",
      "EL/DM/AR (Allen): But consider that insurers pulled out of high-risk areas under the current regime and Allen's approach leans on insurers returning voluntarily, which has so far produced limited relief.",
    ],
  },

  // ───────────────────────── Superintendent of Public Instruction ─────────────────────────
  {
    id: 'spi',
    categoryId: 'school',
    title: 'Superintendent of Public Instruction',
    tldrLabel: 'State Superintendent',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      "The Superintendent of Public Instruction is elected on a nonpartisan ballot and leads the California Department of Education, which serves nearly 6 million public school students, and sits on the State Board of Education. The job pays $210,460 a year, and the office has limited direct power because local districts control budgets and curriculum.",
      "The office is also being reshaped: starting in 2027, a governor-appointed education commissioner will run the Department of Education and many of the superintendent's duties will move to the state school board, so the winner will help write a new job description and mainly gains a statewide platform.",
    ],
    introParagraphs: [
      "Although the race is nonpartisan, the finalists have clear political alignments. In the June 2 primary, Sonja Shaw (22.6%, 1,737,733 votes) placed first and Richard Barrera (20.3%, 1,558,296 votes) second out of nine candidates; Shaw is the Republican-aligned choice and Barrera the Democratic- and union-aligned choice, according to CalMatters and EdSource coverage.",
      "California Teachers Association spent more than $5 million in independent expenditures for Barrera in the primary, and an EdSource debate between the two was scheduled for Oct. 7, 2026. No general-election polling was found.",
    ],
    readingLinks: [
      {
        label: 'EdSource live debate (scheduled Oct 7, 2026)',
        url: 'https://edsource.org/2026/california-superintendent-debate-candidates/766477',
        summary: 'Virtual debate covering the office changes, student achievement, funding, teacher pay, AI, social media and parental rights; no recap verified as of publication.',
      },
      {
        label: 'KPBS: 2026 general election SPI explainer (Sept 14, 2026)',
        url: 'https://www.kpbs.org/news/politics/2026/09/14/2026/2026-general-election-superintendent-of-public-instruction-race-explainer',
        summary: 'Backgrounds, priorities and endorsements for both candidates.',
      },
      {
        label: 'LAist: California superintendent — who is running and why it matters',
        url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-superintendent-of-public-instruction',
        summary: 'Explains how the role changes in 2027.',
      },
      {
        label: 'Times of San Diego / EdSource: Shaw and Barrera offer starkly different visions',
        url: 'https://timesofsandiego.com/education/2026/06/13/barrera-shaw-visions-california-schools/',
        summary: 'Compares the candidates on transgender students, funding and ethnic studies.',
      },
    ],
    legalRequirements: "Nonpartisan office (no party on the ballot); U.S. citizen, California resident and registered voter; four-year term, limited to two terms.",
    qualificationCriteria: [
      { id: 'k12-leadership', label: 'K-12 education governance', detail: 'The Superintendent leads the state education system and sits on the State Board of Education.' },
      { id: 'agency-leadership', label: 'Running a large state agency', detail: 'The office leads the California Department of Education, which serves nearly 6 million students.' },
      { id: 'school-finance', label: 'School budgeting and finance', detail: 'The Department administers state school funding and advises on the budget.' },
      { id: 'state-policy', label: 'Working with the State Board and Legislature', detail: 'Most policy is set by the State Board and Legislature, and the 2027 restructuring will shift more duties to the Board.' },
    ],
    candidates: [
      {
        id: 'richard-barrera',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: "San Diego Unified board member since 2008, including about five years as president, and since July 2024 a senior adviser at the California Department of Education. He has not run a state agency.",
          criteria: [
            { criterionId: 'k12-leadership', assessment: 'met', evidence: 'Elected to the San Diego Unified board in 2008 and re-elected four times; about five years as board president (EdSource, 2026).' },
            { criterionId: 'agency-leadership', assessment: 'partial', evidence: 'Senior adviser for special projects at the California Department of Education since 2024, leading three initiatives; advisory, not head of the department.' },
            { criterionId: 'school-finance', assessment: 'met', evidence: "As a board member for 18 years, votes on San Diego Unified's annual budget, which California districts must adopt." },
            { criterionId: 'state-policy', assessment: 'partial', evidence: "Works in the Department of Education's initiatives office under the current Superintendent; no State Board or legislative role found." },
          ],
        },
        name: 'Richard Barrera',
        party: 'NP',
        role: 'State Superintendent Advisor',
        campaignUrl: 'https://barreraforedu.com',
        bio: [
          "President of the San Diego Unified school board and an adviser to the State Superintendent; little known outside San Diego until he won the California Teachers Association endorsement. He presents himself as a Sacramento outsider.",
          "Politically he is aligned with Democrats and labor: backed by CTA and United Domestic Workers, and also by California Charter School Advocates. He prioritizes school funding, early childhood education and an easier path to becoming a teacher, and as a San Diego board leader he pushed to require ethnic studies in high schools.",
        ],
        scorecard: [
          { topic: 'School funding', position: '✓✓ Wants more funding, with emphasis on getting resources to classrooms', comparison: 'vs Shaw: Shaw says the state does not need to spend more on education.' },
          { topic: 'Transgender / LGBTQ+ students', position: '✓✓ Supports existing state protections; would hold districts (including Chino Valley) accountable', comparison: 'vs Shaw: Shaw wants to end state policies barring staff from outing students and bar trans girls from girls sports.' },
          { topic: 'Ethnic studies', position: '✓✓ Strong proponent; pushed high school requirement in San Diego', comparison: 'vs Shaw: Shaw calls it divisive and unfunded.' },
          { topic: 'Early childhood & teacher pipeline', position: '✓ Early childhood education, easier path to teaching', comparison: 'vs Shaw: Shaw emphasizes reading, writing, math basics and civics.' },
          { topic: 'Office restructuring', position: '✗ Both candidates oppose the planned restructuring of the Department of Education', comparison: 'vs Shaw: same view.' },
          { topic: 'Coalition', position: '✓✓ CTA, UDW, charter advocates; CTA spent over $5 million in the primary', comparison: 'vs Shaw: California Republican Party, Moms for Liberty, CRPA.' },
        ],
        money: 'California Teachers Association independent-expenditure committee spent more than $5 million supporting him in the primary (EdSource, spring 2026); his own committee raised about $274,000 in primary contributions and at least $481,000 since the primary (as reported; filing dates not verified). ?',
        endorsements: 'California Teachers Association, United Domestic Workers, California Charter School Advocates (CalMatters / KPBS, 2026).',
        redFlags: [],
        notes: ['Both candidates cite rising test scores in their districts as evidence their approaches work. A Public Policy Institute of California survey in April had him at 7% in a crowded field.'],
      },
      {
        id: 'sonja-shaw',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: "Chino Valley Unified board member since her November 2022 election and board president (EdSource, 2026). Before that she owned two small businesses; she has no state-agency role.",
          criteria: [
            { criterionId: 'k12-leadership', assessment: 'met', evidence: 'Elected to the Chino Valley Unified board in November 2022 and serves as its president; about four years on the board.' },
            { criterionId: 'agency-leadership', assessment: 'not-met', evidence: 'No state-agency role found; previously owned a fitness-training business and a photography business (district bio).' },
            { criterionId: 'school-finance', assessment: 'partial', evidence: "As a board member, votes on the district's annual budget; no other school-finance role found." },
            { criterionId: 'state-policy', assessment: 'unknown', evidence: 'No State Board or legislative role found in the sources checked.' },
          ],
        },
        name: 'Sonja Shaw',
        party: 'NP',
        role: 'School District President',
        campaignUrl: 'https://shawforca.com',
        bio: [
          "President of the Chino Valley Unified school board and a prominent conservative parents'-rights figure. She is aligned with Republicans, endorsed by the California Republican Party, Moms for Liberty and the California Rifle and Pistol Association.",
          "She wants to move away from what she calls radical ideologies in classrooms and return to academic basics, supports parental-notification policies and opposes transgender girls playing girls' sports.",
        ],
        scorecard: [
          { topic: 'School funding', position: '✗ Says California does not need to spend more; redirect existing money to classrooms', comparison: 'vs Barrera: Barrera wants more funding.' },
          { topic: 'Transgender / parental notification', position: '✓✓ Wants to end state policies barring staff from disclosing student identity; opposes trans girls in girls sports', comparison: 'vs Barrera: Barrera supports current protections.' },
          { topic: 'Ethnic studies', position: '✗ Calls it divisive; prefers civics', comparison: 'vs Barrera: Barrera strongly supports it.' },
          { topic: 'Academic basics', position: '✓ Focus on reading, writing, math achievement', comparison: 'vs Barrera: Barrera emphasizes shared statewide accountability goals.' },
          { topic: 'Office restructuring', position: '✗ Opposes the planned restructuring of the Department of Education', comparison: 'vs Barrera: same view.' },
          { topic: 'Coalition', position: '✓ Republican Party, Moms for Liberty, CRPA; led in small-donor activity', comparison: 'vs Barrera: CTA, UDW and charter advocates.' },
        ],
        money: 'Primary-period campaign receipts reported at about $460,565 (VoteOrElse, spring 2026, unverified against Cal-Access); one late-spring filing showed the most first-time small donors (EdSource). ?',
        endorsements: 'California Republican Party, Moms for Liberty, California Rifle and Pistol Association (CalMatters / KPBS, 2026).',
        redFlags: [],
        notes: [
          "At a July 2023 Chino Valley board meeting on a parental-notification policy for transgender students, Shaw, as board president, had then-State Superintendent Tony Thurmond escorted out after he ran past the one-minute public-comment limit; Thurmond said he was \"forcibly removed,\" and Shaw said he was a \"danger to our students.\" This is a contested confrontation, not misconduct or an official finding — https://ktvu.com/news/california-school-superintendent-kicked-out-verbally-attacked-at-school-board-meeting",'Both candidates identify low test scores as a problem; Shaw led the primary with 22.6%.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Barrera', '●', "Progressive Left voters value his support for more school funding, ethnic studies and state protections for LGBTQ+ students, versus Shaw's push to end those policies."],
      ['EL', 'Barrera', '●', "Establishment Liberals favor the teachers-union-backed San Diego board president who pairs funding increases with accountability over a culture-war-focused school-board activist."],
      ['DM', 'Barrera', '●', "Democratic Mainstays back the Democratic- and union-aligned candidate against the Republican Party's pick."],
      ['OL', 'Barrera', '◐', "Outsider Left voters may bristle at the union money behind him but still prefer him on ethnic studies and trans-student protections."],
      ['SS', 'Barrera', '○', "Stressed Sideliners worried about school resources and staffing lean toward the candidate focused on funding and an easier path to teaching."],
      ['AR', 'Shaw', '○', "Ambivalent Right voters may like her back-to-basics focus on reading and math, tempered by discomfort with her confrontational record."],
      ['PR', 'Shaw', '●', "Populist Right voters value a local parent-activist who stands against state education bureaucracy and the teachers union."],
      ['CC', 'Shaw', '●', "Committed Conservatives want less spending growth, civics over ethnic studies and parental notification, all of which she supports."],
      ['FF', 'Shaw', '●', "Faith and Flag Conservatives favor her parental-rights stance and her opposition to transgender girls in girls sports."],
    ]),
    counterArguments: [
      "PL/EL/DM (Barrera): But consider that CTA spent over $5 million to elect him, and critics argue a union-backed superintendent may be less willing to challenge education-labor priorities.",
      "PR/CC/FF (Shaw): But consider that the superintendent's powers are shrinking in 2027, and her main issues (parental notification, athletics) are largely set by statute and district policy rather than by the superintendent.",
    ],
  },
];
