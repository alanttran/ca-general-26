import type { Candidate, QualificationCriterion, Race, RetentionJustice } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Los Angeles County judicial contests (Nov 3, 2026): Court of Appeal 2nd District retention and
 * four Superior Court runoffs (Offices 64, 65, 87, 131).
 * Sources: appellate.courts.ca.gov justice bios (roster, divisions, appointing governors, Commission on
 * Judicial Nominees Evaluation ratings where the bio states them), Judicial Council newsroom confirmation
 * releases, LACBA Judicial Elections Evaluation Committee 2026 final report (Apr 22, 2026), LAist / LA Times
 * Superior Court guides, Wikipedia June 2026 primary tables. No Commission on Judicial Performance public
 * discipline of any 2nd District justice was found in public sources.
 */

const DCA2_BIO = 'https://appellate.courts.ca.gov/district-courts/2dca/bio/';
const JNE = 'State Bar Commission on Judicial Nominees Evaluation';

function justice(
  name: string,
  division: string,
  title: 'Associate Justice' | 'Presiding Justice',
  appointedBy: string,
  slug: string,
  note: string,
  rated?: string,
): RetentionJustice {
  const url = `${DCA2_BIO}${slug}`;
  return {
    name,
    court: `Court of Appeal, 2nd District, Division ${division}`,
    title,
    appointedBy,
    notes: [note],
    ...(rated ? { externalRating: { source: JNE, rating: rated, url, dateLabel: 'At Court of Appeal nomination (per court bio)' } } : {}),
    sources: [{ label: 'Court of Appeal bio', url }],
  };
}

const EWQ = 'Exceptionally Well Qualified';

const JUDICIAL_CRITERIA: QualificationCriterion[] = [
  { id: 'trial', label: 'Courtroom and trial experience', detail: 'A trial judge runs jury and bench trials daily, so years of litigating cases to verdict matter.' },
  { id: 'breadth', label: 'Breadth of legal practice', detail: 'Superior Court judges hear criminal, civil, family and other matters, so range of practice helps.' },
  { id: 'ethics', label: 'Judicial temperament and ethics', detail: 'Judges must be even-handed, courteous and free of discipline problems.' },
  { id: 'admin', label: 'Administrative and docket management', detail: 'Judges manage crowded calendars, staff and court rules.' },
];

const LEGAL_REQ =
  'Registered voter in California; State Bar member (or judge of a California court of record) for 10 years immediately before taking office (Cal. Const. art. VI, §15).';

const LACBA_URL = 'https://lacba.org/?pg=2026-report';
const lacba = (rating: string) => ({ source: 'Los Angeles County Bar Association Judicial Elections Evaluation Committee', rating, url: LACBA_URL, dateLabel: 'Final report, Apr 22, 2026' });
const LAIST = { label: 'LAist: LA County Superior Court judges guide', url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-county-judges' };
const LACBA_SRC = { label: 'LACBA 2026 judicial evaluation report', url: LACBA_URL };
const WIKI_SRC = { label: 'Wikipedia: 2026 Los Angeles County elections (June results)', url: 'https://en.wikipedia.org/wiki/2026_Los_Angeles_County_elections' };

const JUDGE_STAKES = (office: string): string[] => [
  `A Los Angeles Superior Court judge serves a six-year term and hears cases alone or with a jury: criminal, civil, family, probate or juvenile matters depending on assignment. Judges decide bail and sentencing, rule on evidence, and manage the calendar, so an individual judge shapes thousands of people's cases. ${office} is a countywide vote.`,
  'Judicial races are nonpartisan and are about fitness for the bench, not party. The Los Angeles County Bar Association rates candidates on professional ability, experience, integrity and temperament; ratings are one input among others, and the committee does not publish its reasons.',
];

export const RACES_LA_COURTS: Race[] = [
  {
    id: 'retention-dca2',
    categoryId: 'judicial',
    title: 'Court of Appeal, 2nd District — retention',
    tldrLabel: 'Appeals Court, 2nd Dist.',
    seatContext: 'Retention (Yes/No)',
    kind: 'retention',
    candidates: [],
    stakesParagraphs: [
      'For each justice you vote Yes or No on a 12-year term (justices appointed since the last election finish a predecessor\'s term or begin a new one if confirmed). A majority "No" would create a vacancy that the governor fills, subject to confirmation by the Commission on Judicial Appointments. Voters almost never remove appellate justices.',
      'The 2nd District covers Los Angeles, Ventura and Santa Barbara counties through eight divisions in Los Angeles and Ventura. It hears appeals from the Superior Court in criminal, civil, family and administrative cases; for most cases its decision is the last word, and its published opinions bind trial courts statewide.',
    ],
    introParagraphs: [
      'Eighteen justices appear on LA County ballots. Fourteen were appointed or elevated by Gov. Newsom; Hoffstadt (2014) and Wiley (2018) came from Gov. Brown and Yegan from Gov. Deukmejian (1990). Several are new: Goorvitch (confirmed May 2026), Daum (Aug 2026) and the presiding-justice promotions of Adams and Cody (2026). No Commission on Judicial Performance public discipline and no organized "vote no" campaign was found for any of them in public sources. Ballot spellings may differ slightly from court bios (for example "Steve" vs. "Stephen" Goorvitch).',
    ],
    retention: {
      justices: [
        justice('Michelle C. Kim', 'One', 'Associate Justice', 'Newsom (2024)', 'michelle-c-kim',
          'A Los Angeles Superior Court judge from 2018 (appointed by Gov. Brown), she presided over unlimited civil calendars and was assistant supervising judge in the criminal division. Earlier she was a deputy public defender and deputy alternate public defender; confirmed unanimously on Nov 25, 2024.', EWQ),
        justice('Gregory J. Weingart', 'One', 'Associate Justice', 'Newsom (2022)', 'gregory-j-weingart',
          'A Los Angeles Superior Court judge from 2017, he was previously an Assistant U.S. Attorney (chief of the Major Frauds section) and a partner at Munger, Tolles & Olson. Confirmed unanimously in Nov 2022.', EWQ),
        justice('Anne Richardson', 'Two', 'Associate Justice', 'Newsom (2024)', 'anne-richardson',
          'A Los Angeles Superior Court judge from 2018 (family, then civil), she spent about 24 years in plaintiffs-side civil rights practice at Hadsell Stormer Richardson & Renick and earlier led consumer litigation at Public Counsel. Confirmed unanimously.', EWQ),
        justice('Stephen Goorvitch', 'Two', 'Associate Justice', 'Newsom (2026)', 'stephen-goorvitch',
          'A Los Angeles Superior Court judge from 2015 (appointed by Gov. Brown), he was earlier a federal prosecutor in Los Angeles, an SEC enforcement attorney and an O\'Melveny & Myers litigator. Nominated Feb 19, 2026 and confirmed unanimously May 22, 2026 to replace Justice Judith Ashmann-Gerst; this is his first retention vote.'),
        justice('Mark K. Hanasono', 'Three', 'Associate Justice', 'Newsom (2025)', 'mark-k-hanasono',
          'A Los Angeles Superior Court criminal judge for about 12 years (appointed by Gov. Brown in 2013), he was assistant supervising judge of the Criminal Division and began his career as a public defender and alternate public defender, including capital cases. Confirmed unanimously in June 2025.', EWQ),
        justice('Rashida A. Adams', 'Three', 'Presiding Justice', 'Newsom (2023; Presiding Justice 2026)', 'rashida-adams',
          'Appointed to the Superior Court by Gov. Brown in 2017 and to the Court of Appeal by Gov. Newsom in 2023, she earlier worked in employment-discrimination litigation and as a research attorney in the 2nd District. Confirmed as Presiding Justice in August 2026.', EWQ),
        justice('Nicholas F. Daum', 'Four', 'Associate Justice', 'Newsom (2026)', 'nicholas-f-daum-0',
          'A Los Angeles Superior Court judge (criminal and civil calendars), he spent 19 years in private practice, ending as a partner at Kendall Brill & Kelly in media and entertainment litigation. Confirmed in August 2026; this is his first retention vote.', EWQ),
        justice('Audra M. Mori', 'Four', 'Associate Justice', 'Newsom (2023)', 'audra-m-mori',
          'A Los Angeles Superior Court civil and family judge from 2018 (appointed by Gov. Brown), she was previously an intellectual-property and commercial litigator and managing partner at Perkins Coie. Confirmed unanimously.', EWQ),
        justice('Armen Tamzarian', 'Four', 'Associate Justice', 'Newsom (2025)', 'armen-tamzarian',
          'A Los Angeles Superior Court judge from 2013 (appointed by Gov. Brown), he was earlier a civil litigation partner and a senior appellate court attorney in the 2nd District. Confirmed in June 2025.', EWQ),
        justice('Helen Zukin', 'Four', 'Presiding Justice', 'Newsom (2023; Presiding Justice 2025)', 'helen-zukin',
          'A Los Angeles Superior Court judge from 2018 (appointed by Gov. Brown) and previously a partner at Kiesel Law in plaintiffs\' complex civil litigation, she joined the Court of Appeal in July 2023 and became presiding justice of Division Four in 2025.'),
        justice('Brian M. Hoffstadt', 'Five', 'Presiding Justice', 'Brown (2014; Presiding Justice by Newsom 2024)', 'brian-m-hoffstadt',
          'On the Court of Appeal since 2014 after four years on the Superior Court (appointed by Gov. Schwarzenegger in 2010), he was a Jones Day appellate partner and a federal prosecutor, and clerked for Justice Sandra Day O\'Connor. Elevated to presiding justice of Division Five in 2024.'),
        justice('Tari L. Cody', 'Six', 'Presiding Justice', 'Newsom (2023; Presiding Justice 2026)', 'tari-l-cody',
          'She served 22 years on the Ventura County Superior Court (appointed by Gov. Davis), including as supervising juvenile judge, after private practice in Oxnard and Westlake Village, and co-chaired the Judicial Council\'s Family and Juvenile Law Advisory Committee.', EWQ),
        justice('Kenneth R. Yegan', 'Six', 'Associate Justice', 'Deukmejian (1990)', 'kenneth-r-yegan',
          'The longest-serving justice on this ballot, on the Court of Appeal since 1990. Earlier he was a Ventura County deputy public defender, a court of appeal staff attorney, and a municipal and superior court judge in Ventura County.'),
        justice('Gonzalo C. Martinez', 'Seven', 'Presiding Justice', 'Newsom (2023; Presiding Justice 2024)', 'gonzalo-c-martinez',
          'A State Bar certified appellate specialist, he was a Squire Patton Boggs appellate partner, a deputy solicitor general in the Attorney General\'s office and deputy judicial appointments secretary in the governor\'s office. Confirmed as presiding justice on May 14, 2024.'),
        justice('Natalie P. Stone', 'Seven', 'Associate Justice', 'Newsom (2024)', 'natalie-p-stone',
          'A Los Angeles Superior Court judge from 2015 (juvenile dependency and criminal), she was earlier a Munger, Tolles & Olson litigator for about 10 years and an appellate court attorney. Confirmed unanimously May 14, 2024.'),
        justice('John Shepard Wiley Jr.', 'Eight', 'Associate Justice', 'Brown (2018)', 'john-shepard-wiley-jr',
          'A former UCLA law professor and federal prosecutor, he was a Superior Court judge from 2002 and a clerk to Justice Lewis Powell. The Daily Journal reports he was retained by voters in 2022 for the remainder of his predecessor\'s term.'),
        justice('Matthew A. Scherb', 'Eight', 'Associate Justice', 'Newsom (2025)', 'matthew-scherb',
          'Previously a chambers attorney for Justice Martin Jenkins at the California Supreme Court, an appellate attorney in the Los Angeles City Attorney\'s office and a Winston & Strawn litigator. Confirmed Nov 17, 2025; his first retention vote and his first judgeship.'),
        justice('Victor G. Viramontes', 'Eight', 'Associate Justice', 'Newsom (2022)', 'victor-viramontes',
          'A Los Angeles Superior Court judge from 2017 (appointed by Gov. Brown), he was earlier national senior counsel at MALDEF and a trial attorney at the U.S. Equal Employment Opportunity Commission. Confirmed unanimously in Nov 2022.', EWQ),
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes on all', '◐', 'Progressive Left voters generally support retaining appointees of a Democratic governor and several justices have public-defender or civil-rights backgrounds; with no sourced misconduct, nothing supports a No.'],
      ['EL', 'Yes on all', '●', 'Establishment Liberals treat retention as a fitness check on a credentialed, vetted bench, and every justice here passes on the public record.'],
      ['DM', 'Yes on all', '●', 'Democratic Mainstays defer to the court system and to the governors who appointed these justices, and no discipline or organized opposition is on record.'],
      ['OL', 'Yes on all', '○', 'Outsider Left voters are wary of the legal establishment and of former-prosecutor résumés, but absent documented problems a Yes is the defensible default.'],
      ['SS', 'Yes on all', '○', 'Stressed Sideliners rarely have information on appellate judges; nothing distinguishes these justices, so the default is that retention is about fitness and no fitness problem is on record.'],
      ['AR', 'Yes on all', '○', 'Ambivalent Right voters are wary of politics but see no scandal here, and several justices are former federal prosecutors or private-practice litigators.'],
      ['PR', 'No on all', '○', 'Populist Right voters distrust unelected, governor-appointed officials and may cast a protest No, though no misconduct or specific ruling is alleged against these justices.'],
      ['CC', 'Yes on all', '○', 'Committed Conservatives value stable courts, and several justices are former prosecutors; nothing sourced shows misconduct, so many would retain absent a ruling they object to.'],
      ['FF', 'No on all', '○', 'Faith and Flag Conservatives may see a bench appointed overwhelmingly by Democratic governors as aligned with a progressive agenda, so a protest No is plausible; this is a lean, not a finding about any justice.'],
    ]),
    counterArguments: [
      'PR/FF (No on all): But a No vote only hands the governor a vacancy to fill, and almost no appellate justice is ever removed, so a blanket No rarely changes the bench and could remove qualified justices.',
      'PL/OL (Yes on all): But voters who care about criminal-justice reform could look at individual justices\' prosecutor backgrounds and vote line by line; no sourced evidence of bias was found.',
      'SS/AR (Yes on all): But new justices such as Goorvitch, Daum and Scherb have little or no appellate record yet, so a voter wanting more evidence could reasonably skip those lines.',
    ],
  },

  /* ---------------- Office No. 64 ---------------- */
  {
    id: 'la-superior-court-64',
    categoryId: 'judicial',
    title: 'Los Angeles Superior Court, Office No. 64',
    tldrLabel: 'LA Superior Court #64',
    seatContext: 'Open runoff',
    kind: 'candidates',
    stakesParagraphs: JUDGE_STAKES('Office No. 64'),
    introParagraphs: [
      'In the June 2 primary, Maria Ghobadi won 44.06%, Rhonda Haymon 42.14% and Francisco Amador 13.79%. The runoff pairs a prosecutor with a public defender. The Los Angeles County Bar Association rated Ghobadi Well Qualified and Haymon Qualified. Voters weighing a prosecutor versus a defense lawyer are choosing between two professional perspectives on the criminal courts, not between parties.',
    ],
    legalRequirements: LEGAL_REQ,
    qualificationCriteria: JUDICIAL_CRITERIA,
    candidates: [
      {
        id: 'maria-ghobadi', name: 'Maria Ghobadi', party: 'NP', role: 'Deputy District Attorney, County of Los Angeles',
        bio: [
          'A Los Angeles County deputy district attorney who fled Iran as a child. According to the LA Times guide she has also worked in the San Joaquin County District Attorney\'s office and in the State Bar\'s trial counsel unit, and has completed 87 jury trials.',
        ],
        scorecard: [
          { topic: 'Bar rating', position: '✓✓ Well Qualified (LACBA, Apr 2026)', comparison: 'Haymon was rated Qualified, one tier lower.' },
          { topic: 'Bench / trial background', position: '✓ 87 jury trials as a prosecutor; no prior judicial service found', comparison: 'Haymon reports 100+ jury trials as a public defender.' },
          { topic: 'Ethics / discipline', position: '✓ No discipline found in public sources; State Bar profile not independently reviewed', comparison: 'Haymon: see her notes on a 2024 contempt dispute.' },
          { topic: 'Temperament / docket', position: '? No public evidence either way', comparison: 'Neither candidate has judicial or docket-management experience.' },
        ],
        qualification: {
          level: 'substantial', legal: 'meets',
          summary: 'Career prosecutor with a documented jury-trial record and a Well Qualified bar rating; breadth is mostly criminal, with some regulatory experience at the State Bar.',
          criteria: [
            { criterionId: 'trial', assessment: 'met', evidence: '87 jury trials as a deputy district attorney (LA Times guide).' },
            { criterionId: 'breadth', assessment: 'partial', evidence: 'Prosecutions in Los Angeles and San Joaquin counties plus State Bar trial counsel work; no civil or family practice found.' },
            { criterionId: 'ethics', assessment: 'unknown', evidence: 'No discipline found in public sources; no independent State Bar profile review.' },
            { criterionId: 'admin', assessment: 'unknown', evidence: 'No supervisory or calendar-management role found.' },
          ],
          externalRating: lacba('Well Qualified'),
        },
        notes: ['Ratings and primary results: LACBA report and LAist guide.'],
      },
      {
        id: 'rhonda-haymon', name: 'Rhonda A. Haymon', party: 'NP', role: 'Deputy Public Defender, County of Los Angeles',
        bio: [
          'A Los Angeles County deputy public defender for about 23 years who has tried more than 100 jury trials and is a former adjunct professor at Southwestern Law School.',
        ],
        scorecard: [
          { topic: 'Bar rating', position: '✓ Qualified (LACBA, Apr 2026)', comparison: 'Ghobadi was rated Well Qualified, one tier higher.' },
          { topic: 'Bench / trial background', position: '✓✓ 100+ jury trials over about 23 years as a public defender', comparison: 'Ghobadi has 87 jury trials as a prosecutor.' },
          { topic: 'Ethics / discipline', position: '~ Held in contempt by a judge during a 2024 dispute; she says the State Bar reviewed it and took no action', comparison: 'No discipline found for Ghobadi.' },
          { topic: 'Temperament / docket', position: '? No judicial or calendar experience; teaching experience as adjunct professor', comparison: 'Neither has bench experience.' },
        ],
        qualification: {
          level: 'substantial', legal: 'meets',
          summary: 'Veteran public defender with the longest documented trial record in this race and law-school teaching, rated Qualified; practice is mostly criminal defense.',
          criteria: [
            { criterionId: 'trial', assessment: 'met', evidence: 'More than 100 jury trials in about 23 years as a deputy public defender (LA Times guide).' },
            { criterionId: 'breadth', assessment: 'partial', evidence: 'Criminal defense; adjunct teaching at Southwestern Law School; no civil practice found.' },
            { criterionId: 'ethics', assessment: 'partial', evidence: 'A judge held her in contempt during a 2024 dispute; she says the State Bar reviewed it and took no disciplinary action. We did not independently confirm the State Bar outcome.' },
            { criterionId: 'admin', assessment: 'unknown', evidence: 'No supervisory or calendar-management role found.' },
          ],
          externalRating: lacba('Qualified'),
        },
        notes: [
          'In 2024 she ran for Office No. 12 against incumbent Judge Lynn D. Olson and lost; the LA Times guide reports Olson had held her in contempt in a courtroom conflict, which Haymon disputes as a basis for discipline. This is shown as a note, not a red flag, because no finding of misconduct by a disciplinary body was found.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Haymon', '◐', 'Progressive Left voters usually want judges with defense experience to balance a bench heavy with former prosecutors; the trade-off is Ghobadi\'s higher bar rating.'],
      ['EL', 'Ghobadi', '◐', 'Establishment Liberals weigh institutional signals such as the Bar\'s Well Qualified rating and see prosecutor experience as a legitimate path to the bench.'],
      ['DM', 'Ghobadi', '○', 'Democratic Mainstays lean on the higher bar rating, a weak tie-breaker since both candidates are credible.'],
      ['OL', 'Haymon', '◐', 'Outsider Left voters are skeptical of the prosecutor-heavy bench and tend to favor a public defender with a long trial record.'],
      ['SS', 'Ghobadi', '○', 'Stressed Sideliners often lack information on judges, and the higher bar rating is the simplest signal available.'],
      ['AR', 'Ghobadi', '◐', 'Ambivalent Right voters often value public-safety experience and the higher bar rating.'],
      ['PR', 'Ghobadi', '◐', 'Populist Right voters usually prefer a prosecutor on the criminal bench, regardless of the rating gap.'],
      ['CC', 'Ghobadi', '◐', 'Committed Conservatives value law-and-order backgrounds and the higher bar rating.'],
      ['FF', 'Ghobadi', '◐', 'Faith and Flag Conservatives generally prefer a prosecutor over a defense lawyer for the criminal bench.'],
    ]),
    counterArguments: [
      'EL/DM/SS/AR/PR/CC/FF (Ghobadi): But a one-tier rating gap is not a finding of unfitness, and Haymon\'s 100+ jury trials are more than Ghobadi\'s 87, so a voter who values trial volume could reasonably choose Haymon.',
      'PL/OL (Haymon): But Ghobadi has the higher bar rating, and a prosecutor can be as even-handed as a defender; voters should not assume background predicts rulings.',
    ],
    readingLinks: [
      { label: 'LAist: LA County Superior Court judges guide', url: LAIST.url },
      { label: 'LACBA 2026 evaluation report', url: LACBA_URL },
    ],
  },

  /* ---------------- Office No. 65 ---------------- */
  {
    id: 'la-superior-court-65',
    categoryId: 'judicial',
    title: 'Los Angeles Superior Court, Office No. 65',
    tldrLabel: 'LA Superior Court #65',
    seatContext: 'Open runoff',
    kind: 'candidates',
    stakesParagraphs: JUDGE_STAKES('Office No. 65'),
    introParagraphs: [
      'In the June 2 primary, Justin Allen Clayton won 36.68%, Anna Slotky (Reitano) 29.88%, Samuel Krause 20.43% and Chellei Jimenez 13.01%. LACBA rated both finalists Qualified. The runoff is between a current public defender and a county counsel who earlier spent about a decade as a public defender.',
    ],
    legalRequirements: LEGAL_REQ,
    qualificationCriteria: JUDICIAL_CRITERIA,
    candidates: [
      {
        id: 'justin-clayton', name: 'Justin Allen Clayton', party: 'NP', role: 'Deputy Public Defender, County of Los Angeles',
        bio: ['A Los Angeles County deputy public defender with about 14 years as a trial attorney who has supervised the Inglewood branch office since 2023.'],
        scorecard: [
          { topic: 'Bar rating', position: '✓ Qualified (LACBA, Apr 2026)', comparison: 'Reitano was also rated Qualified.' },
          { topic: 'Bench / trial background', position: '✓ About 14 years as a trial attorney', comparison: 'Reitano\'s trial experience is from earlier public-defender years.' },
          { topic: 'Ethics / discipline', position: '? No discipline found in public sources', comparison: 'Same for Reitano.' },
          { topic: 'Temperament / docket', position: '✓ Supervises a branch office (since 2023)', comparison: 'Reitano works in an advisory role at County Counsel.' },
        ],
        qualification: {
          level: 'substantial', legal: 'meets',
          summary: 'Current trial attorney with about 14 years of experience and a supervisory role, rated Qualified; practice is criminal defense.',
          criteria: [
            { criterionId: 'trial', assessment: 'met', evidence: 'About 14 years as a trial attorney (LA Times guide).' },
            { criterionId: 'breadth', assessment: 'partial', evidence: 'Criminal defense; no civil or family practice found.' },
            { criterionId: 'ethics', assessment: 'unknown', evidence: 'No discipline found in public sources.' },
            { criterionId: 'admin', assessment: 'partial', evidence: 'Has supervised the Inglewood branch public defender office since 2023.' },
          ],
          externalRating: lacba('Qualified'),
        },
      },
      {
        id: 'anna-reitano', name: 'Anna Slotky Reitano', party: 'NP', role: 'Deputy County Counsel, County of Los Angeles',
        bio: ['A Los Angeles County deputy county counsel who earlier spent about a decade in the Public Defender\'s office, including juvenile and felony work. She lost a 2022 judicial bid.'],
        scorecard: [
          { topic: 'Bar rating', position: '✓ Qualified (LACBA, Apr 2026; listed as Anna S. Reitano)', comparison: 'Clayton was also rated Qualified.' },
          { topic: 'Bench / trial background', position: '✓ About a decade of juvenile and felony defense work', comparison: 'Clayton is still in criminal trial practice.' },
          { topic: 'Ethics / discipline', position: '? No discipline found in public sources', comparison: 'Same for Clayton.' },
          { topic: 'Temperament / docket', position: '? Government civil practice; no supervisory role found', comparison: 'Clayton supervises a branch office.' },
        ],
        qualification: {
          level: 'substantial', legal: 'meets',
          summary: 'Combines about a decade of criminal defense with government civil work at County Counsel, giving broader practice than a purely criminal résumé; rated Qualified.',
          criteria: [
            { criterionId: 'trial', assessment: 'met', evidence: 'About a decade in the Public Defender\'s office on juvenile and felony cases (LA Times guide).' },
            { criterionId: 'breadth', assessment: 'met', evidence: 'Criminal defense plus government civil practice as deputy county counsel.' },
            { criterionId: 'ethics', assessment: 'unknown', evidence: 'No discipline found in public sources.' },
            { criterionId: 'admin', assessment: 'unknown', evidence: 'No supervisory role found.' },
          ],
          externalRating: lacba('Qualified'),
        },
        notes: ['Appears as "Anna Slotky" in some results tables and "Anna S. Reitano" in the LACBA report; same candidate.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Clayton', '○', 'Progressive Left voters usually favor a current public defender, though Reitano also has a defense background, so this is a weak lean.'],
      ['EL', 'Reitano', '○', 'Establishment Liberals value breadth across criminal and government civil law, a weak tie-breaker since both are rated Qualified.'],
      ['DM', 'Reitano', '○', 'Democratic Mainstays lean to the candidate with both defense and government experience, with no rating gap to decide it.'],
      ['OL', 'Clayton', '○', 'Outsider Left voters lean toward the working public defender over a government-office lawyer.'],
      ['SS', '—', '—', 'Stressed Sideliners have no clear signal here: both finalists share a rating and nothing distinguishes them on the public record.'],
      ['AR', 'Reitano', '○', 'Ambivalent Right voters may prefer broader legal experience outside criminal defense, a weak lean.'],
      ['PR', 'Reitano', '○', 'Populist Right voters favor a candidate who is not a current public defender, though she is a former one.'],
      ['CC', 'Reitano', '○', 'Committed Conservatives prefer a candidate with government-side experience, a weak lean given her defense past.'],
      ['FF', 'Reitano', '○', 'Faith and Flag Conservatives lean toward the government-side lawyer over the current public defender, a weak lean.'],
    ]),
    counterArguments: [
      'Reitano picks (EL/DM/AR/PR/CC/FF): But Clayton is the only finalist still actively trying cases and supervising a branch, which bears directly on running a courtroom.',
      'Clayton picks (PL/OL): But Reitano also spent about a decade as a public defender, so the defense-versus-government divide is narrower than the job titles suggest.',
    ],
    readingLinks: [LAIST, LACBA_SRC, WIKI_SRC].map((l) => ({ label: l.label, url: l.url })),
  },

  /* ---------------- Office No. 87 ---------------- */
  {
    id: 'la-superior-court-87',
    categoryId: 'judicial',
    title: 'Los Angeles Superior Court, Office No. 87',
    tldrLabel: 'LA Superior Court #87',
    seatContext: 'Open runoff',
    kind: 'candidates',
    stakesParagraphs: JUDGE_STAKES('Office No. 87'),
    introParagraphs: [
      'In the June 2 primary, Anthony (A.J.) Bayne won 42.04%, David DeJute 31.30% and Sharee Sanders Gordon 26.66%. LACBA rated Bayne Well Qualified and DeJute Qualified. The runoff pairs a long-serving public defender with a law professor and private-practice litigator who is a former federal prosecutor.',
    ],
    legalRequirements: LEGAL_REQ,
    qualificationCriteria: JUDICIAL_CRITERIA,
    candidates: [
      {
        id: 'aj-bayne', name: 'Anthony (A.J.) Bayne', party: 'NP', role: 'Deputy Public Defender, County of Los Angeles',
        bio: ['A Los Angeles County deputy public defender with more than 25 years in the office who has taken more than 100 cases to jury verdict. He has patent-pending AI tools for legal work and says he wants AI used to ease the county\'s caseload.'],
        scorecard: [
          { topic: 'Bar rating', position: '✓✓ Well Qualified (LACBA, Apr 2026)', comparison: 'DeJute was rated Qualified.' },
          { topic: 'Bench / trial background', position: '✓✓ 25+ years; 100+ cases tried to jury verdict', comparison: 'DeJute\'s experience is largely federal and private-practice litigation.' },
          { topic: 'Ethics / discipline', position: '? No discipline found in public sources', comparison: 'Same for DeJute.' },
          { topic: 'Temperament / docket', position: '~ Proposes AI tools for caseload management; no judicial experience', comparison: 'DeJute teaches law but has not sat as a judge.' },
        ],
        qualification: {
          level: 'extensive', legal: 'meets',
          summary: 'More than 25 years of trial practice and 100+ jury verdicts, with the highest bar rating in this race; practice is criminal defense.',
          criteria: [
            { criterionId: 'trial', assessment: 'met', evidence: 'More than 25 years as a deputy public defender; more than 100 cases to jury verdict (LA Times guide).' },
            { criterionId: 'breadth', assessment: 'partial', evidence: 'Criminal defense; no civil or family practice found.' },
            { criterionId: 'ethics', assessment: 'unknown', evidence: 'No discipline found in public sources.' },
            { criterionId: 'admin', assessment: 'partial', evidence: 'Says he has developed AI tools to ease case workloads; no supervisory role found.' },
          ],
          externalRating: lacba('Well Qualified'),
        },
      },
      {
        id: 'david-dejute', name: 'David DeJute', party: 'NP', role: 'Law Professor / Attorney',
        bio: ['A law professor (Pepperdine) and attorney at Michelman & Robinson with about 35 years of legal experience, including time as an Assistant U.S. Attorney and as a litigation executive at Sony Pictures. According to the LA Times guide he represented President Obama in "birther" lawsuits.'],
        scorecard: [
          { topic: 'Bar rating', position: '✓ Qualified (LACBA, Apr 2026)', comparison: 'Bayne was rated Well Qualified.' },
          { topic: 'Bench / trial background', position: '✓ About 35 years including federal prosecution and civil litigation', comparison: 'Bayne has more documented jury verdicts.' },
          { topic: 'Ethics / discipline', position: '? No discipline found in public sources', comparison: 'Same for Bayne.' },
          { topic: 'Temperament / docket', position: '✓ Teaches law at Pepperdine; corporate litigation management at Sony Pictures', comparison: 'Bayne has no teaching or corporate-management experience found.' },
        ],
        qualification: {
          level: 'substantial', legal: 'meets',
          summary: 'About 35 years across federal prosecution, corporate litigation and teaching, giving broad civil and criminal exposure; rated Qualified.',
          criteria: [
            { criterionId: 'trial', assessment: 'partial', evidence: 'Assistant U.S. Attorney and private litigator; number of jury trials not published in sources reviewed.' },
            { criterionId: 'breadth', assessment: 'met', evidence: 'Federal prosecution, corporate litigation executive at Sony Pictures, private practice, law teaching.' },
            { criterionId: 'ethics', assessment: 'unknown', evidence: 'No discipline found in public sources.' },
            { criterionId: 'admin', assessment: 'partial', evidence: 'Served as a litigation executive at Sony Pictures.' },
          ],
          externalRating: lacba('Qualified'),
        },
      },
    ],
    crossTypology: ct([
      ['PL', 'Bayne', '◐', 'Progressive Left voters usually favor a long-serving public defender, and Bayne also holds the higher bar rating.'],
      ['EL', 'Bayne', '◐', 'Establishment Liberals weigh the Well Qualified rating and the deep courtroom record; DeJute\'s broader résumé is the trade-off.'],
      ['DM', 'Bayne', '◐', 'Democratic Mainstays lean on the higher bar rating and decades of trial experience.'],
      ['OL', 'Bayne', '◐', 'Outsider Left voters favor a career public defender over a corporate and federal-prosecutor résumé.'],
      ['SS', 'Bayne', '○', 'Stressed Sideliners often lack information on judges, and the higher bar rating is the simplest signal.'],
      ['AR', 'DeJute', '○', 'Ambivalent Right voters may prefer his broader federal and corporate background, a weak lean given Bayne\'s higher rating.'],
      ['PR', 'DeJute', '○', 'Populist Right voters lean toward a former federal prosecutor over a public defender, a weak lean.'],
      ['CC', 'DeJute', '○', 'Committed Conservatives value a former federal prosecutor and private-sector litigator, tempered by the lower rating.'],
      ['FF', 'DeJute', '○', 'Faith and Flag Conservatives lean toward the former prosecutor, a weak lean since neither candidate\'s judicial philosophy is on record.'],
    ]),
    counterArguments: [
      'AR/PR/CC/FF (DeJute): But Bayne holds the higher bar rating and has more documented jury verdicts, so a voter focused on fitness rather than background could choose Bayne.',
      'PL/EL/DM/OL (Bayne): But DeJute\'s experience is broader across civil and criminal law, and both are rated at least Qualified.',
    ],
    readingLinks: [LAIST, LACBA_SRC, WIKI_SRC].map((l) => ({ label: l.label, url: l.url })),
  },

  /* ---------------- Office No. 131 ---------------- */
  {
    id: 'la-superior-court-131',
    categoryId: 'judicial',
    title: 'Los Angeles Superior Court, Office No. 131',
    tldrLabel: 'LA Superior Court #131',
    seatContext: 'Open runoff',
    kind: 'candidates',
    stakesParagraphs: JUDGE_STAKES('Office No. 131'),
    introParagraphs: [
      'In the June 2 primary, Donna Tryfman won 37.32%, David Ross 33.23%, Carlos Dammeier 14.97% and Troy Slaten 14.48%. LACBA rated both finalists Qualified. Both are career county defenders, so the choice is between two similar résumés rather than prosecutor versus defense lawyer.',
    ],
    legalRequirements: LEGAL_REQ,
    qualificationCriteria: JUDICIAL_CRITERIA,
    candidates: [
      {
        id: 'donna-tryfman', name: 'Donna Tryfman', party: 'NP', role: 'Deputy Public Defender, County of Los Angeles',
        bio: ['A Los Angeles County deputy public defender since 1998 who has tried more than 100 jury trials, has served as a judge pro tem, and previously led the California Public Defenders Association.'],
        scorecard: [
          { topic: 'Bar rating', position: '✓ Qualified (LACBA, Apr 2026)', comparison: 'Ross was also rated Qualified.' },
          { topic: 'Bench / trial background', position: '✓✓ 100+ jury trials; has sat as judge pro tem', comparison: 'Ross reports 113 jury trials; no pro tem service found.' },
          { topic: 'Ethics / discipline', position: '? No discipline found in public sources', comparison: 'Same for Ross.' },
          { topic: 'Temperament / docket', position: '✓ Led the California Public Defenders Association', comparison: 'Ross has legislative and journalism experience instead.' },
        ],
        qualification: {
          level: 'substantial', legal: 'meets',
          summary: 'About 28 years of criminal defense, more than 100 jury trials and temporary judicial service as a judge pro tem; rated Qualified.',
          criteria: [
            { criterionId: 'trial', assessment: 'met', evidence: 'In the Public Defender\'s office since 1998; more than 100 jury trials (LA Times guide).' },
            { criterionId: 'breadth', assessment: 'partial', evidence: 'Criminal defense; no civil practice found.' },
            { criterionId: 'ethics', assessment: 'unknown', evidence: 'No discipline found in public sources.' },
            { criterionId: 'admin', assessment: 'partial', evidence: 'Has served as a judge pro tem and led the California Public Defenders Association.' },
          ],
          externalRating: lacba('Qualified'),
        },
      },
      {
        id: 'david-ross', name: 'David Ross', party: 'NP', role: 'Deputy Alternate Public Defender, County of Los Angeles',
        bio: ['A Los Angeles County deputy alternate public defender who has litigated 113 jury trials and has worked in the public defense system since 2000. He was earlier a legislative aide and a television journalist.'],
        scorecard: [
          { topic: 'Bar rating', position: '✓ Qualified (LACBA, Apr 2026)', comparison: 'Tryfman was also rated Qualified.' },
          { topic: 'Bench / trial background', position: '✓✓ 113 jury trials since 2000', comparison: 'Tryfman reports 100+ and has pro tem service.' },
          { topic: 'Ethics / discipline', position: '? No discipline found in public sources', comparison: 'Same for Tryfman.' },
          { topic: 'Temperament / docket', position: '? No supervisory or judicial role found', comparison: 'Tryfman has led a statewide association and sat pro tem.' },
        ],
        qualification: {
          level: 'substantial', legal: 'meets',
          summary: 'About 25 years of criminal defense and 113 jury trials, plus earlier legislative and journalism careers; rated Qualified.',
          criteria: [
            { criterionId: 'trial', assessment: 'met', evidence: '113 jury trials; worked in public defense since 2000 (LA Times guide).' },
            { criterionId: 'breadth', assessment: 'partial', evidence: 'Criminal defense; earlier work as a legislative aide and television journalist.' },
            { criterionId: 'ethics', assessment: 'unknown', evidence: 'No discipline found in public sources.' },
            { criterionId: 'admin', assessment: 'unknown', evidence: 'No supervisory or judicial role found.' },
          ],
          externalRating: lacba('Qualified'),
        },
      },
    ],
    crossTypology: ct([
      ['PL', 'Tryfman', '○', 'Progressive Left voters see two defense lawyers with similar ratings; Tryfman\'s pro tem service and association leadership give a weak edge.'],
      ['EL', 'Tryfman', '○', 'Establishment Liberals value prior judicial service and professional leadership, a weak tie-breaker.'],
      ['DM', 'Tryfman', '○', 'Democratic Mainstays lean to the candidate with the judge pro tem experience, with no rating gap.'],
      ['OL', '—', '—', 'Outsider Left voters have no ideological difference to act on: both are career county defenders with the same rating.', 'With no ideological gap between two county defenders, Outsider Left voters who go by experience could lean narrowly to Tryfman: both are rated Qualified, but she has sat as a judge pro tem and led the California Public Defenders Association.'],
      ['SS', '—', '—', 'Stressed Sideliners have no clear signal: the rating and background are nearly identical.', 'Stressed Sideliners see near-identical résumés, so the experience edge is narrow; Tryfman has already heard cases as a temporary judge, while Ross, though he reports slightly more jury trials (113), has no judicial or supervisory role on record.'],
      ['AR', '—', '—', 'Ambivalent Right voters have no clear lean; both are defenders with the same rating.', 'Ambivalent Right voters who want a judge ready for a crowded calendar could lean slightly to Tryfman, whose judge pro tem service partly covers docket management; Ross has no such role on record, and both share a Qualified rating.'],
      ['PR', '—', '—', 'Populist Right voters have no clear lean between two similarly experienced defenders.', 'Populist Right voters face two defenders with about 25 to 28 years of trial work each; the only experience tie-breaker is narrow, as Tryfman has served as a judge pro tem and led a statewide defenders’ association.'],
      ['CC', '—', '—', 'Committed Conservatives have no clear lean since neither is a prosecutor and both are rated Qualified.', 'Neither finalist is a prosecutor, but Committed Conservatives who weigh bench readiness could narrowly prefer Tryfman, the only one with time as a judge pro tem; Ross brings 113 jury trials but no judicial or administrative role.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no clear lean since both candidates are public defenders with matching ratings.', 'Faith and Flag Conservatives see two public defenders with matching Qualified ratings; an experience-first voter could lean narrowly to Tryfman, since her judge pro tem service and association leadership meet part of the docket-management criterion that Ross does not.'],
    ]),
    counterArguments: [
      'PL/EL/DM (Tryfman): But Ross has tried more jury trials (113), and a voter who values trial volume over pro tem service could reasonably pick Ross.',
      'Columns marked — : A voter in these columns can reasonably pick either candidate, or consult candidate statements and endorsements, since the record shows no meaningful difference in fitness.',
    ],
    readingLinks: [LAIST, LACBA_SRC, WIKI_SRC].map((l) => ({ label: l.label, url: l.url })),
  },
];

// Type reference to keep the shared Candidate type import used.
export type LaCourtCandidate = Candidate;
