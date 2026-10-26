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
      ['LP', 'Yes on all', '◐', 'Leftward Progressives want an independent bench, and several justices here were public defenders or civil-rights lawyers (Kim, Hanasono, Richardson, Viramontes); with no sourced misconduct, nothing on the record supports a No, though several others are former prosecutors.'],
      ['LL', 'Yes on all', '●', 'Loyal Liberals trust expert vetting, with 92% saying experts make better policy decisions, and most of these justices were rated "Exceptionally Well Qualified" by the State Bar\'s evaluation commission, with no discipline or organized opposition on record.'],
      ['LO', 'Yes on all', '○', 'Left-Out Left voters are wary of the legal establishment and its big-firm and prosecutor résumés, but nothing on the record shows misconduct or self-dealing, so a Yes is the defensible default.'],
      ['OO', 'Yes on all', '◐', 'Order and Opportunity Left voters value public safety and respect for authority, with 74% calling themselves respectful of authority, and several justices are former federal prosecutors (Weingart, Goorvitch, Hoffstadt, Wiley) with no discipline on record.'],
      ['TM', 'Yes on all', '○', 'Tuned-Out Middle voters rarely have information on appellate judges and nothing here touches their costs, so with no fitness problem on record the low-effort default is to retain.'],
      ['PP', 'Yes on all', '●', 'Pragmatic and Polite Right voters value the rule of law and experienced judges, and this bench of former trial judges with strong bar ratings and no discipline gives this cautious group no reason for a protest No.'],
      ['UR', 'Yes on all', '○', 'Unconventional Right voters are wary of politics in the courts but see no scandal here, and a No would only let the governor choose a replacement, so retaining is the low-risk choice.'],
      ['FC', 'Yes on all', '○', 'Faith First Conservatives value law and order, and several justices prosecuted crimes before joining the bench; a protest No against Democratic-governor appointees would only hand the governor new appointments.'],
      ['NA', 'No on all', '○', 'No Apologies Right voters distrust institutional authority, with only about 33% saying experts make better policy decisions, and 14 of these 18 justices were appointed or elevated by Gov. Newsom, so a protest No is plausible; this is a lean, not a finding about any justice.'],
    ]),
    counterArguments: [
      'NA (No on all ○): But consider that a No vote only hands the governor a vacancy to fill, because almost no appellate justice is ever removed and a blanket No would fall on former federal prosecutors and a Deukmejian appointee alike.',
      'LP (Yes on all ◐): But consider voting line by line on justices with long prosecution careers, because voters focused on criminal-justice reform may weigh those backgrounds, though no sourced evidence of bias was found.',
      'TM (Yes on all ○): But consider that Goorvitch, Daum and Scherb have little or no appellate record yet, because a voter wanting more evidence could reasonably skip those lines.',
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
      ['LP', 'Haymon', '◐', 'Leftward Progressives, the group most skeptical of police (28% confidence) and most focused on decarceration, want more public defenders on a bench heavy with former prosecutors, and Haymon brings 23 years of defense work; the trade-off is Ghobadi\'s higher bar rating.'],
      ['LL', 'Ghobadi', '◐', 'Loyal Liberals trust expert evaluation, and the County Bar rated Ghobadi Well Qualified and Haymon one tier lower, though this group also values the defense perspective Haymon would add.'],
      ['LO', 'Ghobadi / Haymon', '=', 'Left-Out Left voters have middling trust in police (about 49%) and feel the system works against people like them: if the County Bar\'s higher rating matters most, Ghobadi; if a career public defender\'s view from the defense side weighs more, Haymon.'],
      ['OO', 'Ghobadi', '◐', 'Order and Opportunity Left voters see violent crime as a very big problem (about 52%) and trust police (about 69%), so Ghobadi\'s 87 jury trials as a prosecutor and higher bar rating fit this group\'s focus on public safety.'],
      ['TM', 'Ghobadi', '○', 'Tuned-Out Middle voters rarely follow judicial races, and 46% rarely follow politics at all, so the County Bar\'s higher rating for Ghobadi is the simplest signal available.'],
      ['PP', 'Ghobadi', '●', 'Pragmatic and Polite Right voters value competence, temperament and the rule of law, and Ghobadi has the higher bar rating and no courtroom conflicts on record, while Haymon was held in contempt in a 2024 dispute that Haymon contests.'],
      ['UR', 'Ghobadi', '◐', 'Unconventional Right voters want tough handling of crime and back police stops more than groups to their left, with about 62% saying police may stop and search anyone resembling a suspect, so they lean to the prosecutor, Ghobadi, who also has the higher rating.'],
      ['FC', 'Ghobadi', '◐', 'Faith First Conservatives value law and order and prefer a prosecutor over a defense lawyer on the criminal bench, and Ghobadi also holds the higher bar rating.'],
      ['NA', 'Ghobadi', '●', 'No Apologies Right voters trust police the most, about 86% expressing confidence, and want judges tough on crime, so a career prosecutor like Ghobadi is a clear fit over a public defender.'],
    ]),
    counterArguments: [
      'NA (Ghobadi ●): But consider that Haymon has tried more than 100 jury trials to Ghobadi\'s 87 and a one-tier rating gap is not a finding of unfitness, because a voter who values courtroom volume could reasonably choose Haymon.',
      'PP (Ghobadi ●): But consider that no disciplinary body has found misconduct by Haymon and Haymon says the State Bar took no action on the 2024 contempt dispute, because temperament judged from one contested incident is thin evidence.',
      'LP (Haymon ◐): But consider that Ghobadi has the higher bar rating and that a prosecutor can be as even-handed as a defender, because background does not reliably predict rulings.',
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
      ['LP', 'Clayton', '◐', 'Leftward Progressives want more defense lawyers on the bench, and Clayton is a working public defender who supervises a branch office, though Reitano also spent about a decade as a public defender.'],
      ['LL', 'Reitano', '○', 'Loyal Liberals value broad expertise, and Reitano\'s mix of criminal defense and government civil work covers more of what a Superior Court judge hears, a weak tie-breaker since both are rated Qualified.'],
      ['LO', 'Clayton', '○', 'Left-Out Left voters lean toward the working public defender who represents people who cannot afford lawyers today, over a lawyer for county government.'],
      ['OO', 'Reitano', '○', 'Order and Opportunity Left voters lean slightly toward Reitano, who now represents county government rather than criminal defendants, though Reitano\'s decade as a public defender makes the difference small.'],
      ['TM', '—', '—', 'Tuned-Out Middle voters have no clear signal here: both finalists share a Qualified rating and nothing on the public record touches this group\'s priorities.'],
      ['PP', 'Clayton / Reitano', '=', 'Pragmatic and Polite Right voters prize competence over background, and both finalists share the same rating: if current trial and supervisory work that bears on running a courtroom matters most, Clayton; if the range of Reitano\'s government civil practice on top of a criminal résumé weighs more, Reitano.'],
      ['UR', 'Reitano', '○', 'Unconventional Right voters lean toward a candidate who is not a current public defender, a weak lean since Reitano was one for about a decade.'],
      ['FC', 'Reitano', '○', 'Faith First Conservatives value law and order and lean toward the government-side lawyer over the current public defender, a weak lean given Reitano\'s defense past.'],
      ['NA', 'Reitano', '○', 'No Apologies Right voters want judges tough on crime, with about 64% calling violent crime a very big problem, and so lean away from the current public defender, a weak lean since neither finalist has prosecuted cases.'],
    ]),
    counterArguments: [
      'NA (Reitano ○): But consider that Reitano spent about a decade as a public defender herself, because the defense-versus-government divide is narrower than the job titles suggest.',
      'LP (Clayton ◐): But consider that Reitano has the same Qualified rating and broader civil experience, because a judge may be assigned to civil or family cases rather than criminal ones.',    ],
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
      ['LP', 'Bayne', '●', 'Leftward Progressives want more defense lawyers on the bench, and Bayne is a public defender of more than 25 years who also holds the higher bar rating.'],
      ['LL', 'Bayne', '●', 'Loyal Liberals trust expert evaluation, and the County Bar rated Bayne Well Qualified, a tier above DeJute, on top of Bayne\'s 100-plus jury verdicts.'],
      ['LO', 'Bayne', '◐', 'Left-Out Left voters distrust large corporations, with about 89% saying they make too much profit, and favor a career public defender over DeJute, a former Sony Pictures litigation executive and corporate-firm lawyer.'],
      ['OO', 'Bayne / DeJute', '=', 'Order and Opportunity Left voters care about public safety and steady competence: if the County Bar\'s higher rating and a longer trial record matter most, Bayne; if a former federal prosecutor\'s background weighs more, DeJute.'],
      ['TM', 'Bayne', '○', 'Tuned-Out Middle voters rarely follow judicial races, and the County Bar\'s higher rating for Bayne is the simplest signal available.'],
      ['PP', 'Bayne', '◐', 'Pragmatic and Polite Right voters put competence ahead of background, and Bayne\'s Well Qualified rating and more than 100 jury verdicts outweigh this group\'s usual comfort with a former prosecutor like DeJute.'],
      ['UR', 'DeJute', '○', 'Unconventional Right voters lean toward a former federal prosecutor over a career public defender, a weak lean given Bayne\'s higher rating.'],
      ['FC', 'DeJute', '○', 'Faith First Conservatives value law and order and lean toward DeJute, the former prosecutor, a weak lean since neither candidate\'s judicial philosophy is on record.'],
      ['NA', 'DeJute', '○', 'No Apologies Right voters want judges tough on crime and lean away from the career public defender toward DeJute, a former federal prosecutor, a weak lean given Bayne\'s higher rating.'],
    ]),
    counterArguments: [
      'NA (DeJute ○): But consider that Bayne holds the higher bar rating and has more documented jury verdicts, because a voter focused on fitness rather than background could reasonably choose Bayne.',
      'LL (Bayne ●): But consider that DeJute\'s experience spans federal prosecution, civil litigation and teaching, because a Superior Court judge may hear civil or family cases where that range helps.',
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
      ['LP', 'Tryfman', '○', 'Leftward Progressives see two career defenders and lean to Tryfman, who led the California Public Defenders Association and so has advocated for the defense side beyond her own cases.'],
      ['LL', 'Tryfman', '○', 'Loyal Liberals value institutional experience, and Tryfman has already served as a judge pro tem and led a statewide professional association, a weak edge since both are rated Qualified.'],
      ['LO', '—', '—', 'Left-Out Left voters have nothing to act on here: both finalists are career county defenders with the same rating, and neither is an insider or outsider in a way this group weighs.', 'With no values gap between two county defenders, Left-Out Left voters who go by experience could lean narrowly to Tryfman: both are rated Qualified, but Tryfman has sat as a judge pro tem and led the California Public Defenders Association.'],
      ['OO', 'Tryfman', '○', 'Order and Opportunity Left voters prefer steady, proven candidates, and Tryfman has already heard cases as a judge pro tem, a weak edge between two similar defenders.'],
      ['TM', '—', '—', 'Tuned-Out Middle voters have no clear signal: the rating and backgrounds are nearly identical and nothing here touches this group\'s priorities.', 'Tuned-Out Middle voters see near-identical résumés, so the experience edge is narrow; Tryfman has already heard cases as a temporary judge, while Ross, though Ross reports slightly more jury trials (113), has no judicial or supervisory role on record.'],
      ['PP', 'Tryfman', '◐', 'Pragmatic and Polite Right voters put competence and readiness first, and Tryfman is the only finalist who has served as a judge pro tem, which tests temperament and docket skills that a busy courtroom requires.'],
      ['UR', '—', '—', 'Unconventional Right voters have no clear lean: neither finalist is a prosecutor and both share a Qualified rating.', 'Unconventional Right voters who want a judge ready for a crowded calendar could lean slightly to Tryfman, whose judge pro tem service partly covers docket management; Ross has no such role on record, and both share a Qualified rating.'],
      ['FC', '—', '—', 'Faith First Conservatives have no clear lean, since both candidates are public defenders with matching ratings and neither has a record on this group\'s priorities.', 'Neither finalist is a prosecutor, but Faith First Conservatives who weigh bench readiness could narrowly prefer Tryfman, the only one with time as a judge pro tem; Ross brings 113 jury trials but no judicial or administrative role.'],
      ['NA', '—', '—', 'No Apologies Right voters have no clear lean between two career public defenders with the same rating.', 'No Apologies Right voters face two defenders with about 25 to 28 years of trial work each; the only experience tie-breaker is narrow, as Tryfman has served as a judge pro tem and led a statewide defenders’ association.'],
    ]),
    counterArguments: [
      'PP (Tryfman ◐): But consider that Ross has tried more jury trials (113) than Tryfman reports, because a voter who values trial volume over pro tem service could reasonably pick Ross.',
      'LP (Tryfman ○): But consider that Ross has worked in public defense since 2000 and also brings legislative experience, because both finalists share the same rating and the record shows no meaningful difference in fitness.',
    ],
    readingLinks: [LAIST, LACBA_SRC, WIKI_SRC].map((l) => ({ label: l.label, url: l.url })),
  },
];

// Type reference to keep the shared Candidate type import used.
export type LaCourtCandidate = Candidate;
