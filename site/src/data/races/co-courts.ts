import type { Race, RedFlagSource, RetentionJustice } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Colorado judicial retention questions on a Denver ballot (Nov 3, 2026; one-off ZIP 80204).
 * Sources: Colorado Office of Judicial Performance Evaluation 2026 evaluations (judicialperformance.colorado.gov,
 * released Aug 4, 2026; every recommendation and vote below is quoted from the judge's evaluation page), the City
 * and County of Denver "Judicial Retention" page (ballot roster), Colorado Judicial Branch releases, governor's and
 * mayor's appointment coverage (Colorado Politics, Law Week Colorado), Colorado Judicial Institute explainer, Bolts.
 * Statewide, 3 of 123 judges on the 2026 ballot drew a "does not meet" finding; none of them is on a Denver ballot.
 * No public discipline of any judge below was found in the Colorado Commission on Judicial Discipline's public
 * filings (checked Oct 2026), and no organized "vote no" campaign was found.
 */

const OJPE = (slug: string) => `https://judicialperformance.colorado.gov/${slug}-2026-evaluation`;
const MEETS = 'Meets Performance Standards';
const STATE_COMMISSION = 'Colorado State Commission on Judicial Performance';
const SECOND_COMMISSION = 'Second Judicial District Commission on Judicial Performance';
const COUNTY_COMMISSION = 'Denver County Court Commission on Judicial Performance';
const DENVER_ROSTER: RedFlagSource = { label: 'Denver Elections: 2026 judicial retention list', url: 'https://www.denvergov.org/Government/Elections/Denver-Decides/State/Judicial' };
const CJI_EXPLAINER: RedFlagSource = { label: 'Colorado Judicial Institute: how judges are selected', url: 'https://coloradojudicialinstitute.org/what-we-do/public-education/explainer-how-are-judges-selected-in-colorado.html' };
const CP_NO_MEETS: RedFlagSource = {
  label: 'Colorado Politics: 3 judges get unfavorable recommendations (Aug 4, 2026)',
  url: 'https://www.coloradopolitics.com/2026/08/04/3-colorado-judges-receive-unfavorable-retention-recommendation-as-one-performance-commission-violates-rules/',
};

function judge(
  name: string,
  court: string,
  title: string,
  appointedBy: string,
  slug: string,
  commission: string,
  vote: string,
  notes: string[],
  extraSources: RedFlagSource[] = [],
): RetentionJustice {
  const url = OJPE(slug);
  return {
    name,
    court,
    title,
    appointedBy,
    notes,
    externalRating: { source: commission, rating: `${MEETS} (${vote})`, url, dateLabel: 'Aug 2026 (2026 retention evaluation)' },
    sources: [{ label: '2026 judicial performance evaluation', url }, ...extraSources],
  };
}

export const RACES_CO_COURTS: Race[] = [
  /* ---------------- Colorado Supreme Court ---------------- */
  {
    id: 'co-retention-supreme',
    categoryId: 'judicial',
    title: 'Colorado Supreme Court — retention',
    tldrLabel: 'CO Supreme Court retention',
    seatContext: 'Retention (Yes/No)',
    kind: 'retention',
    candidates: [],
    stakesParagraphs: [
      'A "Yes" vote keeps Justice William Hood on the bench for a new 10-year term; a "No" vote, if most voters agree, removes him and the governor appoints a replacement from three finalists chosen by the Supreme Court Nominating Commission. There is no opponent on the ballot. Colorado voters keep about 99% of the judges who stand for retention.',
      'The seven-member Colorado Supreme Court is the state\'s court of last resort. It has the final word on the Colorado Constitution and state law, reviews ballot-measure titles, and oversees lawyer and judge discipline. Its chief justice runs the whole state court system; Hood\'s colleagues picked him in August 2026 to become chief justice in August 2027.',
    ],
    introParagraphs: [
      'Justice William W. Hood III is the only Supreme Court justice on the 2026 ballot statewide. Gov. John Hickenlooper appointed him in 2013 and voters retained him in 2016. The State Commission on Judicial Performance found 9-0 that he "meets performance standards." He was part of the 4-3 majority in the December 2023 ruling that removed Donald Trump from Colorado\'s 2024 primary ballot, which the U.S. Supreme Court unanimously reversed in March 2024. Bolts reported no organized opposition to his retention as of 2026.',
    ],
    retention: {
      note: 'Colorado Supreme Court justices are chosen by the governor from three nominating-commission finalists, stand for retention after a provisional term of at least two years, and then every 10 years; a justice needs a majority Yes to stay, and a No creates a vacancy filled the same way.',
      justices: [
        judge(
          'William W. Hood III',
          'Colorado Supreme Court',
          'Justice',
          'Governor Hickenlooper (2013)',
          'hood-iii-william-w',
          STATE_COMMISSION,
          '9-0, one commissioner absent, one vacancy',
          [
            'On the Supreme Court since January 2014, replacing Chief Justice Michael Bender; earlier a Denver District Court judge for seven years, a litigation partner at Isaacson Rosenbaum, and a prosecutor for 10 years in the 18th Judicial District (chief trial deputy and chief appellate deputy). His fellow justices chose him in August 2026 as the next chief justice, starting August 2027.',
            'The commission found him courteous, timely, and a clear writer; 7 attorneys and 24 judges answered its survey. He joined the unsigned 4-3 majority in Anderson v. Griswold (2023), which held Donald Trump ineligible for the ballot under Section 3 of the 14th Amendment; the U.S. Supreme Court reversed it 9-0 in Trump v. Anderson (2024). Justices in that majority reported threats and harassment afterward.',
          ],
          [
            { label: 'Colorado Judicial Branch: incoming chief justice (Aug 21, 2026)', url: 'https://www.coloradojudicial.gov/media/press-release/supreme-court-announces-incoming-chief-justice' },
            { label: 'Wikipedia: William W. Hood III', url: 'https://en.wikipedia.org/wiki/William_W._Hood_III' },
            { label: 'Wikipedia: Anderson v. Griswold', url: 'https://en.wikipedia.org/wiki/Anderson_v._Griswold' },
            { label: 'Bolts: 2026 supreme court elections guide', url: 'https://boltsmag.org/your-state-by-state-guide-to-the-2026-supreme-court-elections/' },
          ],
        ),
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes on all', '●', 'Leftward Progressives want an independent court, and Hood has a unanimous "meets performance standards" finding and joined the 2023 majority holding Trump ineligible for the ballot, a ruling this anti-Trump group supported.'],
      ['LL', 'Yes on all', '●', 'Loyal Liberals trust expert evaluation (92% say experts make better policy decisions than others), and the state commission\'s 9-0 finding plus Hood\'s selection by fellow justices as the next chief justice settle it.'],
      ['LO', 'Yes on all', '◐', 'Left-Out Left voters are wary of the legal establishment and of a former prosecutor, but nothing on the record shows misconduct or self-dealing, and this group strongly dislikes Trump\'s conduct (about 83%), so a Yes is the defensible default.'],
      ['OO', 'Yes on all', '◐', 'Order and Opportunity Left voters respect authority (74% call themselves respectful of authority) and public safety, and Hood is a former prosecutor of 10 years with a unanimous performance finding and no misconduct on record.'],
      ['TM', 'Yes on all', '○', 'Tuned-Out Middle voters rarely follow the courts and nothing here touches their costs, so the evaluation commission\'s unanimous finding is the simplest signal.'],
      ['PP', 'Yes on all', '◐', 'Pragmatic and Polite Right voters value the rule of law and stable institutions, and Hood\'s unanimous evaluation and long service favor retention, though this cautious group may fault Hood for joining a ruling the U.S. Supreme Court reversed 9-0.'],
      ['UR', 'No on all', '○', 'Unconventional Right voters distrust establishment institutions, and Hood joined a 4-3 ruling to take Trump off the ballot that every U.S. Supreme Court justice rejected; this is a weak lean, since Hood\'s performance evaluation is otherwise strong.'],
      ['FC', 'No on all', '◐', 'Faith First Conservatives, most of whom approve of Trump (77% in July 2026), see Hood\'s vote to remove Trump from Colorado\'s 2024 ballot as overriding voters\' choice, a documented ruling the U.S. Supreme Court unanimously reversed, though no misconduct is alleged.'],
      ['NA', 'No on all', '●', 'No Apologies Right voters, Trump\'s most loyal supporters (89% approve of him), have a clear documented reason to vote No: Hood joined the 4-3 majority that removed Trump from the ballot before the U.S. Supreme Court reversed it 9-0.'],
    ]),
    counterArguments: [
      'NA (No on all ●): But consider that removing Hood would let Gov. Polis or a successor choose the replacement from commission finalists, because a No vote does not produce a more conservative court and the commission found no performance problem.',
      'PP (Yes on all ◐): But consider that all nine U.S. Supreme Court justices concluded the Trump ballot ruling exceeded a state court\'s role, because this group prizes judicial restraint and may weigh that single ruling against an otherwise strong evaluation.',
      'UR (No on all ○): But consider that Hood\'s 10 years as a prosecutor and seven years as a trial judge, plus a 9-0 evaluation, show a long record beyond one case, because retention is meant to judge overall performance.',
    ],
    readingLinks: [
      { label: 'Colorado Office of Judicial Performance Evaluation (KnowYourJudge)', url: 'https://judicialperformance.colorado.gov/' },
      { label: 'Colorado Politics: 2026 retention recommendations', url: CP_NO_MEETS.url },
      { label: 'Colorado Judicial Institute: how judges are selected', url: CJI_EXPLAINER.url },
    ],
  },

  /* ---------------- Colorado Court of Appeals ---------------- */
  {
    id: 'co-retention-appeals',
    categoryId: 'judicial',
    title: 'Colorado Court of Appeals — retention',
    tldrLabel: 'CO Court of Appeals',
    seatContext: 'Retention (Yes/No)',
    kind: 'retention',
    candidates: [],
    stakesParagraphs: [
      'For each judge you vote Yes or No on an eight-year term. A judge who gets more No than Yes votes leaves the bench, and the governor fills the seat from finalists chosen by the Supreme Court Nominating Commission. Colorado voters have retained about 99% of judges since 1990.',
      'The Court of Appeals hears most appeals from Colorado district courts (criminal, civil, family, juvenile) and from many state agencies. It sits in three-judge panels, and because the Supreme Court takes only a small share of cases, its decision is usually the last word.',
    ],
    introParagraphs: [
      'Six Court of Appeals judges are on every Colorado ballot. Gov. Hickenlooper appointed Rebecca Freyre and Elizabeth Harris in 2015 (both retained in 2018); Gov. Polis appointed Katharine Lum and Karl Schock in 2022 and Pax Moultrie and Grant Sullivan for January 2024. The State Commission on Judicial Performance found all six "meet performance standards" by 9-0 votes. The only caution it raised was about how long Harris takes to issue some opinions.',
    ],
    retention: {
      note: 'Colorado Court of Appeals judges are chosen by the governor from nominating-commission finalists, stand for retention after a provisional term of at least two years, and then every eight years; each needs a majority Yes to stay, and a No creates a vacancy the governor fills the same way.',
      justices: [
        judge('Rebecca Rankin Freyre', 'Colorado Court of Appeals', 'Judge', 'Governor Hickenlooper (2015)', 'freyre-rebecca-r', STATE_COMMISSION, '9-0, one commissioner absent, one vacancy', [
          'Spent 25 years as a deputy state public defender (appellate division and Arapahoe County trial office) before Gov. Hickenlooper appointed her in September 2015 to replace Judge Richard Gabriel; retained in 2018. She was the court\'s deputy chief judge from 2022 to 2026 and chairs the PERA board. Every survey respondent said she meets standards.',
        ], [{ label: 'Wikipedia: Rebecca R. Freyre', url: 'https://en.wikipedia.org/wiki/Rebecca_R._Freyre' }]),
        judge('Elizabeth L. Harris', 'Colorado Court of Appeals', 'Judge', 'Governor Hickenlooper (2015)', 'harris-elizabeth-l', STATE_COMMISSION, '9-0, one commissioner absent, one vacancy', [
          'A former Tenth Circuit clerk, federal public defender for five years, and appellate lawyer in private practice, she was appointed in July 2015 and retained in 2018. The commission called her opinions "clear, well-written, and reasonably timely," but noted that both lawyers and judges cited the time she takes to issue opinions as a weakness; only 5 attorneys and 22 judges answered the survey, 93% favorably.',
        ], [{ label: 'Colorado Judicial Branch: Judge Harris', url: 'https://www.coloradojudicial.gov/contact/elizabeth-l-harris' }]),
        judge('Katharine E. Lum', 'Colorado Court of Appeals', 'Judge', 'Governor Polis (2022)', 'lum-katherine-e', STATE_COMMISSION, '9-0, one commissioner absent, one vacancy', [
          'A family-law practitioner at the trial and appellate levels and former clerk to Colorado Supreme Court Justice Gregory Hobbs, she was appointed in September 2022 to replace Judge Michael Berger; this is her first retention vote. Every survey respondent said she meets standards.',
        ]),
        judge('Pax Moultrie', 'Colorado Court of Appeals', 'Judge', 'Governor Polis (2023; seated Jan 2024)', 'moultrie-pax-l', STATE_COMMISSION, '9-0, one commissioner absent, one vacancy', [
          'A former Denver Juvenile Court judge and 1st Judicial District magistrate who earlier represented county human services departments in dependency and delinquency cases. Appointed in November 2023 to replace Judge David Furman; Colorado Politics reported she was the first Black judge on the court in four years. First retention vote as an appellate judge; every survey respondent said she meets standards.',
        ], [{ label: 'Colorado Politics: Polis names Moultrie, Sullivan (Nov 2023)', url: 'https://www.coloradopolitics.com/2023/11/10/polis-names-first-black-judge-to-court-of-appeals-in-4-years-e62f72f4-7f5e-11ee-a2b1-4fd22c7c0a4a' }]),
        judge('Karl L. Schock', 'Colorado Court of Appeals', 'Judge', 'Governor Polis (2022)', 'schock-karl-l', STATE_COMMISSION, '9-0, one commissioner absent, one vacancy', [
          'A former Assistant U.S. Attorney in the appellate division (from 2015), Brownstein Hyatt Farber Schreck litigator, and Tenth Circuit clerk, he was appointed in September 2022 to replace Judge David Richman; this is his first retention vote. Every survey respondent said he meets standards.',
        ]),
        judge('Grant Sullivan', 'Colorado Court of Appeals', 'Judge', 'Governor Polis (2023; seated Jan 2024)', 'sullivan-grant-t', STATE_COMMISSION, '9-0, one commissioner absent, one vacancy', [
          'Spent about 11 years in the Colorado Attorney General\'s Office as a trial and appellate litigator (assistant solicitor general) on constitutional, election and tax law. As a state lawyer he represented Secretary of State Jena Griswold in the 2023 Trump ballot-eligibility case, a client assignment rather than a ruling. Appointed in November 2023 to replace Judge John Daniel Dailey; first retention vote.',
        ], [{ label: 'Colorado Politics: Polis names Moultrie, Sullivan (Nov 2023)', url: 'https://www.coloradopolitics.com/2023/11/10/polis-names-first-black-judge-to-court-of-appeals-in-4-years-e62f72f4-7f5e-11ee-a2b1-4fd22c7c0a4a' }]),
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes on all', '●', 'Leftward Progressives see a bench that includes two former public defenders (Freyre and Harris), no misconduct on record and unanimous commission findings.'],
      ['LL', 'Yes on all', '●', 'Loyal Liberals trust expert evaluation, and the state commission found all six judges meet performance standards by 9-0 votes.'],
      ['LO', 'Yes on all', '○', 'Left-Out Left voters distrust the legal establishment, but nothing on the record shows misconduct or self-dealing, so a Yes is the defensible default.'],
      ['OO', 'Yes on all', '◐', 'Order and Opportunity Left voters respect authority and stable institutions, and these judges have unanimous evaluations and no discipline, with a former federal prosecutor (Schock) among them.'],
      ['TM', 'Yes on all', '○', 'Tuned-Out Middle voters rarely know appellate judges and nothing here touches their costs, so the unanimous "meets performance standards" findings are the simplest signal.'],
      ['PP', 'Yes on all', '●', 'Pragmatic and Polite Right voters value the rule of law and careful evaluation, and with 9-0 findings for every judge and only a timeliness caution for Harris, this cautious group sees no reason for a protest No.'],
      ['UR', 'Yes on all', '○', 'Unconventional Right voters are wary of politics in the courts, but no scandal is on record, and a No would only let the governor choose a replacement.'],
      ['FC', 'Yes on all', '○', 'Faith First Conservatives may distrust judges appointed by Democratic governors, but no ruling by these judges on this group\'s faith or family priorities is on record here, and a No would only hand the governor new appointments.'],
      ['NA', 'No on all', '○', 'No Apologies Right voters distrust institutional authority, and all six judges were appointed by Democratic governors (Hickenlooper and Polis), so a protest No is plausible; this is a lean, not a finding about any judge.'],
    ]),
    counterArguments: [
      'NA (No on all ○): But consider that a No vote only hands the governor a vacancy to fill from commission finalists, because a blanket No rarely changes the court\'s direction and could remove judges the evaluators rated well.',
      'PP (Yes on all ●): But consider the commission\'s caution about how long Harris takes to issue some opinions, because voters who care about timely appeals could weigh it on Harris\'s line, though the commission still found Harris meets standards.',
      'TM (Yes on all ○): But consider that Moultrie and Sullivan have under three years of appellate record, because a voter wanting more evidence could reasonably skip those lines.',
    ],
    readingLinks: [
      { label: 'Colorado Office of Judicial Performance Evaluation (KnowYourJudge)', url: 'https://judicialperformance.colorado.gov/' },
      { label: 'Colorado Politics: 2026 retention recommendations', url: CP_NO_MEETS.url },
    ],
  },

  /* ---------------- Denver District Court (2nd JD), incl. Juvenile and Probate ---------------- */
  {
    id: 'co-retention-denver-district',
    categoryId: 'judicial',
    title: 'Denver District Court (2nd Judicial District) — retention',
    tldrLabel: 'Denver District Court',
    seatContext: 'Retention (Yes/No)',
    kind: 'retention',
    candidates: [],
    stakesParagraphs: [
      'For each judge you vote Yes or No on a six-year term. A judge with more No than Yes votes leaves the bench, and the governor fills the seat from finalists picked by the 2nd Judicial District Nominating Commission. Denver also has two specialized district-level courts with their own judges on this ballot: the Denver Juvenile Court and the Denver Probate Court.',
      'Denver District Court judges handle felony criminal cases, civil lawsuits, divorce and custody, and appeals from county court. Juvenile Court judges hear child abuse and neglect, delinquency, and adoption cases; the Probate Court handles estates, guardianships and mental-health commitments. These are the judges most Denver residents will appear before in serious cases.',
    ],
    introParagraphs: [
      'Nine 2nd Judicial District judges are on Denver ballots: six district judges, two Juvenile Court judges, and the presiding Probate Court judge. Gov. Polis appointed six of them (2022 to 2024); Elliff was appointed by Gov. Ritter (2011) and Baumann and Leith by Gov. Hickenlooper. The Second Judicial District Commission on Judicial Performance found every one "meets performance standards," each by 10-0 or 9-0 with one recusal, and found no notable weakness for any of them. One judge, Sarah Wallace, presided over the 2023 Trump ballot-eligibility trial.',
    ],
    retention: {
      note: 'Denver district, juvenile and probate judges are appointed by the governor from nominating-commission finalists, stand for retention after a provisional term of at least two years, and then every six years; each needs a majority Yes to stay, and a No creates a vacancy the governor fills the same way.',
      justices: [
        judge('Michael W.V. Angel', 'Denver District Court (2nd Judicial District)', 'Judge', 'Governor Polis (2024)', 'angel-michael-wv', SECOND_COMMISSION, '10-0', [
          'Appointed in July 2024 after serving as an Adams County magistrate; earlier he represented low-income clients at a nonprofit, practiced federal criminal defense, and was a deputy district attorney. He now hears criminal cases and exceeded the court\'s productivity benchmark. 12 attorneys and 13 non-attorneys answered the survey.',
        ]),
        judge('Christopher J. Baumann', 'Denver District Court (2nd Judicial District)', 'Chief Judge', 'Governor Hickenlooper (2018)', 'baumann-christopher', SECOND_COMMISSION, '10-0', [
          'Chief judge of Denver District Court since 2022 and a civil judge who also presides over the statewide grand jury. Before his January 2018 appointment he spent 16 years in the state public defender\'s Denver office, heading it from 2010. 15 attorneys and 17 non-attorneys answered the survey.',
        ]),
        judge('John Eric Elliff', 'Denver District Court (2nd Judicial District)', 'Judge', 'Governor Ritter (2010; seated Jan 2011)', 'elliff-j-eric', SECOND_COMMISSION, '10-0', [
          'A former Husch Blackwell partner in commercial and intellectual-property litigation, he has been a Denver district judge since January 2011 and now hears domestic-relations (family) cases. He serves on the Supreme Court Civil Rules Committee. 8 attorneys and 10 non-attorneys answered the survey.',
        ], [{ label: 'Husch Blackwell: Ritter appoints Elliff (Dec 2010)', url: 'https://www.huschblackwell.com/inthenews/governor-appoints-j-eric-elliff-to-district-court-bench-for-the-city-and-county-of-denver-12-08-2010' }]),
        judge('Andrew Luxen', 'Denver District Court (2nd Judicial District)', 'Judge', 'Governor Polis (2022)', 'luxen-andrew-j', SECOND_COMMISSION, '9-0, one recusal', [
          'A former chief deputy district attorney in Denver, appointed in June 2022, he hears criminal cases. The commission noted he did not meet the criminal-court productivity benchmark but attributed that largely to cases he inherited and said he is working to improve. 25 attorneys and 15 non-attorneys answered the survey.',
        ]),
        judge('Jon J. Olafson', 'Denver District Court (2nd Judicial District)', 'Judge', 'Governor Polis (2023)', 'olafson-jon-j', SECOND_COMMISSION, '9-0, one recusal', [
          'A former commercial and employment litigator (partner at Buchalter), appointed in December 2023; he hears civil cases and exceeded the productivity benchmark. 41 attorneys and 4 non-attorneys answered the survey.',
        ]),
        judge('Sarah Block Wallace', 'Denver District Court (2nd Judicial District)', 'Judge', 'Governor Polis (2022; seated Jan 2023)', 'wallace-sarah-b', SECOND_COMMISSION, '9-0, one recusal', [
          'A former Ballard Spahr commercial litigation partner, she hears civil cases. In the November 2023 Trump ballot case (Anderson v. Griswold) she found that Trump had engaged in insurrection but ruled Section 3 of the 14th Amendment did not cover the presidency, so she kept him on the ballot; the Colorado Supreme Court reversed her and the U.S. Supreme Court then reversed it. 39 attorneys and 12 non-attorneys answered the survey.',
        ], [
          { label: 'Ballard Spahr: Wallace appointed (Aug 2022)', url: 'https://www.ballardspahr.com/insights/news/2022/08/ballard-spahrs-sarah-wallace-appointed-second-judicial-district' },
          { label: 'Wikipedia: Anderson v. Griswold', url: 'https://en.wikipedia.org/wiki/Anderson_v._Griswold' },
        ]),
        judge('Lisa Gomez', 'Denver Juvenile Court (2nd Judicial District)', 'Judge', 'Governor Polis (2024)', 'gomez-lisa', SECOND_COMMISSION, '9-0, one recusal', [
          'A Denver Juvenile Court magistrate from 2015 until Gov. Polis appointed her judge in March 2024; earlier a guardian ad litem, respondent-parent counsel and truancy defense counsel. She exceeded four of five juvenile productivity benchmarks. 11 attorneys and 3 non-attorneys answered the survey.',
        ]),
        judge('Elizabeth Joan McCarthy', 'Denver Juvenile Court (2nd Judicial District)', 'Presiding Judge', 'Governor Polis (2024)', 'mccarthy-elizabeth-j', SECOND_COMMISSION, '10-0', [
          'Presiding judge of the Denver Juvenile Court since March 2024 (judge since January 2024, magistrate from 2019). She was an assistant and senior assistant attorney general from 2011 to 2019 and briefly a Denver deputy district attorney. She exceeded five of six juvenile productivity benchmarks.',
        ]),
        judge('Elizabeth D. Leith', 'Denver Probate Court (2nd Judicial District)', 'Presiding Judge', 'Governor Hickenlooper (2011)', 'leith-elizabeth', SECOND_COMMISSION, '10-0', [
          'The Denver Probate Court\'s presiding (and only) judge since July 2011, handling estates, guardianships and mental-health cases; earlier a Denver district magistrate, assistant Denver city attorney, and deputy district attorney in El Paso and Teller counties. 35 attorneys and 8 non-attorneys answered the survey.',
        ]),
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes on all', '◐', 'Leftward Progressives see judges with public-defender, legal-aid and child-welfare backgrounds (Baumann, Angel, Gomez) alongside former prosecutors, with unanimous evaluations and no misconduct on record.'],
      ['LL', 'Yes on all', '●', 'Loyal Liberals trust expert evaluation, and the district commission found every judge meets performance standards and identified no notable weakness for any of them.'],
      ['LO', 'Yes on all', '○', 'Left-Out Left voters are skeptical of courts, but nothing on the record shows misconduct or self-dealing, so a Yes is the defensible default.'],
      ['OO', 'Yes on all', '◐', 'Order and Opportunity Left voters want public safety and working courts, with about 52% calling violent crime a very big problem, and Luxen, Angel, McCarthy and Leith all served as prosecutors, with unanimous evaluations and no misconduct on record.'],
      ['TM', 'Yes on all', '○', 'Tuned-Out Middle voters rarely have information on trial judges, so the unanimous evaluations are the simplest signal, and nothing on the record gives this group a reason to vote No.'],
      ['PP', 'Yes on all', '●', 'Pragmatic and Polite Right voters value the rule of law and a working court system, and unanimous evaluations with no notable weakness for any judge give this cautious group no reason for a protest No.'],
      ['UR', 'Yes on all', '○', 'Unconventional Right voters want crime handled and courts that work, and several of these judges are former prosecutors with no scandal on record.'],
      ['FC', 'Yes on all', '○', 'Faith First Conservatives value law and order, and four of these judges served as prosecutors; a protest No against Democratic-governor appointees would only let the governor fill the seats.'],
      ['NA', 'No on all', '○', 'No Apologies Right voters distrust institutional authority, and every judge here was appointed by a Democratic governor (Ritter, Hickenlooper or Polis), so a protest No is plausible; this is a lean, not a finding about any judge.'],
    ]),
    counterArguments: [
      'NA (No on all ○): But consider that a No vote only gives the governor a vacancy to fill, because these are the judges hearing Denver\'s felony, family and child-welfare cases and removing well-rated judges would add to the court\'s backlog.',
      'PP (Yes on all ●): But consider Wallace\'s 2023 trial finding that Trump engaged in insurrection, because some voters weigh it heavily, though it was a finding on the evidence presented and Wallace still ruled to keep Trump on the ballot.',
      'TM (Yes on all ○): But consider that Angel, Gomez and McCarthy have about two years as district-level judges, because a voter wanting a longer record could reasonably skip those lines.',
    ],
    readingLinks: [
      { label: 'Denver Elections: 2026 judicial retention list', url: DENVER_ROSTER.url },
      { label: 'Colorado Office of Judicial Performance Evaluation (KnowYourJudge)', url: 'https://judicialperformance.colorado.gov/' },
    ],
  },

  /* ---------------- Denver County Court ---------------- */
  {
    id: 'co-retention-denver-county',
    categoryId: 'judicial',
    title: 'Denver County Court — retention',
    tldrLabel: 'Denver County Court',
    seatContext: 'Retention (Yes/No)',
    kind: 'retention',
    candidates: [],
    stakesParagraphs: [
      'Denver is the only place in Colorado where the mayor, not the governor, appoints county judges, choosing from nominees picked by the city charter\'s Denver County Court Judicial Nominating Commission. They still face voters: for each judge you vote Yes or No on a four-year term, and a judge without a majority Yes leaves the bench and the mayor fills the seat. Complaints about Denver county judges go to a city judicial discipline commission rather than the state one.',
      'Denver County Court handles misdemeanors, traffic cases, city ordinance violations, small claims, civil cases up to the county-court limit, protection orders, and first appearances for people arrested in Denver. For most residents it is the court they are most likely to see.',
    ],
    introParagraphs: [
      'Seven Denver County Court judges are on the ballot, all appointed by Mayor Michael Hancock between 2015 and 2023; presiding judge Kerri Lombardi was named to that role by Mayor Mike Johnston in 2024. The Denver County Court Commission on Judicial Performance found all seven "meet performance standards" by 5-0 votes. Too few surveys came back for the state to publish survey reports for any of them, so the commission relied on courtroom observation, interviews and case data.',
    ],
    retention: {
      note: 'Denver County Court judges are appointed by the mayor from nominees chosen by the Denver County Court Judicial Nominating Commission, stand for retention after a two-year provisional term and then every four years; each needs a majority Yes to stay, and a No creates a vacancy the mayor fills the same way.',
      justices: [
        judge('Andrea Eddy', 'Denver County Court', 'Judge', 'Mayor Hancock (2016)', 'eddy-andrea-l', COUNTY_COMMISSION, '5-0', [
          'Appointed in July 2016 after serving as a full-time county court magistrate (traffic, first advisement, domestic-violence arraignments, specialty courts) and about a decade as a senior Denver deputy district attorney prosecuting domestic abuse, child abuse and sex crimes. The commission noted she volunteered for weekend coverage during the court\'s recent budget crisis.',
        ]),
        judge('Olympia Z. Fay', 'Denver County Court', 'Judge', 'Mayor Hancock (2015)', 'fay-olympia-z', COUNTY_COMMISSION, '5-0', [
          'Appointed in January 2015; earlier an assistant Denver city attorney, a deputy district attorney in the 20th Judicial District (Boulder), and a commercial and securities litigator. The commission praised her docket efficiency and attention to pro se litigants\' access to court.',
        ]),
        judge('Kerri Lombardi', 'Denver County Court', 'Presiding Judge', 'Mayor Hancock (2015; presiding judge by Mayor Johnston, 2024)', 'lombardi-kerri-d', COUNTY_COMMISSION, '5-0', [
          'A chief deputy district attorney in Denver for more than 20 years (domestic violence and crimes against children) before joining the court in 2015. Mayor Johnston named her presiding judge effective February 2024; the commission credited her transparency during the court\'s budget problems, including open forums with staff.',
        ], [{ label: 'Colorado Politics: Johnston names presiding judge (Dec 2023)', url: 'https://www.coloradopolitics.com/2023/12/26/denver-mayor-appoints-a-new-presiding-judge-90bdcb2f-e011-596e-bd54-b311445ec1dd/' }]),
        judge('Chelsea Malone', 'Denver County Court', 'Judge', 'Mayor Hancock (2016)', 'malone-chelsea-soo-mee', COUNTY_COMMISSION, '5-0', [
          'A former deputy public defender and solo criminal-defense lawyer, appointed in 2016. The commission described a disciplined, well-prepared courtroom and noted she revised the evidence chapter of a judges\' benchbook.',
        ]),
        judge('Michelle Martinez-Thomas', 'Denver County Court', 'Judge', 'Mayor Hancock (2020)', 'martinez-thomas-michelle-r', COUNTY_COMMISSION, '5-0', [
          'Took a newly created county judgeship in March 2020 after serving as a 17th Judicial District magistrate (from 2017) and 10 years in the state public defender\'s office. The commission described a rehabilitative courtroom and noted she wrote a plain-language brochure explaining the court.',
        ], [{ label: 'Colorado Politics: Hancock appoints 3 judges (Jan 2020)', url: 'https://www.coloradopolitics.com/2020/01/16/mayor-hancock-appoints-3-new-judges-to-denver-county-court-f00a0f72-38b4-11ea-939b-bf35874f372d' }]),
        judge('Isaam L. Shamsid-Deen', 'Denver County Court', 'Judge', 'Mayor Hancock (2023)', 'shamsid-deen-isaam', COUNTY_COMMISSION, '5-0', [
          'A former senior Denver deputy district attorney (organized crime, embezzlement, adult felonies) and Colorado Civil Rights Division investigator, appointed in May 2023 to replace Judge Tanya Wheeler; this is his first retention vote. The commission called him direct and efficient and said he is still growing into the technical side of the job.',
        ], [{ label: 'Law Week Colorado: Hancock appoints Shamsid-Deen (May 2023)', url: 'https://www.lawweekcolorado.com/?p=98044' }]),
        judge('Judith Smith', 'Denver County Court', 'Judge', 'Mayor Hancock (2018)', 'smith-judith-a', COUNTY_COMMISSION, '5-0', [
          'Appointed in September 2018 after 14 years as an Assistant U.S. Attorney in Colorado, where she led the special prosecutions section and set up the cybercrime and national security section; earlier a Denver juvenile prosecutor. The commission credited her with leading the court\'s move to a web-based case system.',
        ]),
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes on all', '◐', 'Leftward Progressives see former public defenders (Malone and Martinez-Thomas) and rehabilitative courtrooms noted by evaluators, alongside a majority of former prosecutors, with no misconduct on record.'],
      ['LL', 'Yes on all', '●', 'Loyal Liberals trust expert evaluation, and the county court\'s performance commission found all seven judges meet standards by 5-0 votes.'],
      ['LO', 'Yes on all', '○', 'Left-Out Left voters may distrust a mayor-appointed, prosecutor-heavy bench, but nothing on the record shows misconduct or self-dealing, so a Yes is the defensible default.'],
      ['OO', 'Yes on all', '◐', 'Order and Opportunity Left voters want public safety and working local courts, with about 69% confident in police, and five of these seven judges are former state or federal prosecutors with unanimous evaluations.'],
      ['TM', 'Yes on all', '○', 'Tuned-Out Middle voters rarely know county judges, though this is the court that handles everyday traffic and small-claims matters; with unanimous evaluations and no misconduct on record, retaining is the simplest choice.'],
      ['PP', 'Yes on all', '●', 'Pragmatic and Polite Right voters value the rule of law and courteous, efficient courtrooms, and the commission found all seven meet standards, praising several for docket efficiency and for transparency during the court\'s budget problems.'],
      ['UR', 'Yes on all', '○', 'Unconventional Right voters want working local courts, and most of these judges are former prosecutors with no scandal on record.'],
      ['FC', 'Yes on all', '○', 'Faith First Conservatives value law and order, and five of these seven judges prosecuted crimes before joining the bench; a protest No would only let the mayor fill the seats.'],
      ['NA', 'No on all', '○', 'No Apologies Right voters distrust institutional authority, and all seven judges were appointed by Denver\'s Democratic mayors, so a protest No is plausible; this is a lean, not a finding about any judge.'],
    ]),
    counterArguments: [
      'NA (No on all ○): But consider that a No vote only lets the mayor fill the seat from new nominees, because five of these seven judges are former prosecutors and a blanket No would not move the court rightward.',
      'LL (Yes on all ●): But consider that too few people answered the surveys for any report to be published on these judges, because the evaluations rest on a five-member commission\'s observations and voters wanting more evidence have less to go on here than for other courts.',
      'TM (Yes on all ○): But consider that the commission described Shamsid-Deen, the newest judge, as still growing into the technical side of the job, because a voter could reasonably weigh that line separately.',
    ],
    readingLinks: [
      { label: 'Denver Elections: 2026 judicial retention list', url: DENVER_ROSTER.url },
      { label: 'Colorado Judicial Institute: how judges are selected', url: CJI_EXPLAINER.url },
    ],
  },
];
