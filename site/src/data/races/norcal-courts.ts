import type { Race, RetentionJustice } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Northern California Court of Appeal retention contests (Nov 3, 2026): 1st District (Alameda and
 * Bay Area; 11 justices, Divisions 1-5), 3rd District (Sacramento/Placer; 7 justices) and 6th District
 * (Santa Clara; 5 justices).
 * Sources: appellate.courts.ca.gov justice bios, Judicial Council newsroom confirmation release
 * (Aug 19, 2026), Governor's Aug 7, 2026 appointment release, Secretary of State 2026 certified list
 * (via docs/wave3-norcal-scope.md). No Commission on Judicial Performance public discipline of any
 * justice on these three ballots was found; the 3rd District discipline matters in public sources
 * (Murray, Raye) concern former justices who are not on the ballot.
 */

const BASE = 'https://appellate.courts.ca.gov/district-courts';
const JNE = 'State Bar Commission on Judicial Nominees Evaluation';

function justice(
  district: '1' | '3' | '6',
  division: string | null,
  name: string,
  title: 'Associate Justice' | 'Presiding Justice' | 'Administrative Presiding Justice',
  appointedBy: string,
  url: string,
  note: string,
  label = 'Court of Appeal bio',
  rating?: string,
): RetentionJustice {
  return {
    name,
    court: `Court of Appeal, ${district === '1' ? '1st' : district === '3' ? '3rd' : '6th'} District${division ? `, Division ${division}` : ''}`,
    title,
    appointedBy,
    notes: [note],
    ...(rating
      ? { externalRating: { source: JNE, rating, url, dateLabel: 'At Court of Appeal nomination (per court bio)' } }
      : {}),
    sources: [{ label, url }],
  };
}

const d1 = (slug: string) => `${BASE}/1dca/bio/${slug}`;
const d3 = (slug: string) => `${BASE}/3dca/bio/${slug}`;
const d6 = (slug: string) => `${BASE}/6dca/bio/${slug}`;

const GOV_RELEASE = 'https://www.gov.ca.gov/2026/08/07/governor-newsom-announces-judicial-appointments-4/';

const STAKES_BASE =
  'For each justice you vote Yes or No on a 12-year term. A majority "No" would create a vacancy that the governor fills, subject to confirmation by the Commission on Judicial Appointments. Voters almost never remove appellate justices.';

const PICKS_NOTE = 'no sourced misconduct, Commission on Judicial Performance discipline or organized opposition was found for any justice here';

const typology = (extra: string) =>
  ct([
    ['PL', 'Yes on all', '◐', 'Progressive Left voters generally support retaining appointees of a Democratic governor, and several justices here have public-defender, civil-rights or public-interest backgrounds; with no sourced misconduct, nothing supports a No.'],
    ['EL', 'Yes on all', '●', `Establishment Liberals treat retention as a fitness check on a credentialed, vetted bench, and ${PICKS_NOTE}.`],
    ['DM', 'Yes on all', '●', 'Democratic Mainstays defer to the court system and to the governors who appointed these justices, and no discipline or organized opposition is on record.'],
    ['OL', 'Yes on all', '○', 'Outsider Left voters are wary of the legal establishment and of prosecutor or big-firm résumés, but absent documented problems a Yes is the defensible default.'],
    ['SS', 'Yes on all', '○', 'Stressed Sideliners rarely have information on appellate judges; nothing distinguishes these justices, so the default is that retention is about fitness and no fitness problem is on record.'],
    ['AR', 'Yes on all', '○', `Ambivalent Right voters are wary of politics but see no scandal here. ${extra}`],
    ['PR', 'No on all', '○', 'Populist Right voters distrust unelected, governor-appointed officials and may cast a protest No, though no misconduct or specific ruling is alleged against these justices.'],
    ['CC', 'Yes on all', '○', 'Committed Conservatives value stable courts and many justices have prosecutor or government-lawyer backgrounds; nothing sourced shows misconduct, so many would retain absent a ruling they object to.'],
    ['FF', 'No on all', '○', 'Faith and Flag Conservatives may see a bench appointed mostly by Democratic governors as aligned with a progressive agenda, so a protest No is plausible; this is a lean, not a finding about any justice.'],
  ]);

const counters = (newNames: string): string[] => [
  'PR/FF (No on all): But a No vote only hands the governor a vacancy to fill, and almost no appellate justice is ever removed, so a blanket No rarely changes the bench and could remove qualified justices.',
  'PL/OL (Yes on all): But voters who care about criminal-justice reform could look at individual justices\' prosecutor backgrounds and vote line by line; no sourced evidence of bias was found.',
  `SS/AR (Yes on all): But ${newNames} have little or no appellate record yet, so a voter wanting more evidence could reasonably skip those lines.`,
];

export const RACES_NORCAL_COURTS: Race[] = [
  {
    id: 'retention-dca1',
    categoryId: 'judicial',
    title: 'Court of Appeal, 1st District — retention',
    tldrLabel: 'Appeals Court, 1st Dist.',
    seatContext: 'Retention (Yes/No)',
    kind: 'retention',
    candidates: [],
    stakesParagraphs: [
      STAKES_BASE,
      'The 1st District sits in San Francisco and covers the nine Bay Area counties, including Alameda, Contra Costa, San Mateo, Marin and Napa, through five divisions. It hears appeals from the Superior Court in criminal, civil, family and administrative cases; for most cases its decision is the last word, and its published opinions bind trial courts statewide.',
    ],
    introParagraphs: [
      'Eleven justices from Divisions One through Five appear on the Alameda County ballot. Five were appointed by Gov. Newsom (Smiley, Wilson, Desautels, Rodríguez, Chou), four by Gov. Brown (Stewart, Petrou, Brown, Burns; Stewart and Brown were later elevated to presiding justice by Newsom), and the two longest-serving, Banke and Simons, by Gov. Schwarzenegger (2009) and Gov. Davis (2000). Smiley, Wilson, Desautels and Chou are among the newest members. No Commission on Judicial Performance public discipline and no organized "vote no" campaign was found for any of them in public sources.',
    ],
    retention: {
      justices: [
        justice('1', 'One', 'Charles A. Smiley', 'Associate Justice', 'Newsom (2025)', d1('charles-smiley'),
          'An Alameda County judge from 2012 (appointed by Gov. Brown) and court commissioner before that, he began as an Alameda County deputy public defender, including its appellate unit, and was presiding judge of the Alameda Superior Court. Confirmed Feb 14, 2025.'),
        justice('1', 'One', 'Kathleen M. Banke', 'Associate Justice', 'Schwarzenegger (2009)', d1('kathleen-m-banke'),
          'An appellate lawyer for over twenty years at Crosby, Heafey, Roach & May and Reed Smith, she was an Alameda County Superior Court judge from 2006 and joined the Court of Appeal in 2009. She is a certified appellate law specialist and has taught civil appellate advocacy at UC Law San Francisco.'),
        justice('1', 'One', 'Monique Langhorne Wilson', 'Associate Justice', 'Newsom (2023)', d1('monique-langhorne-wilson'),
          'A Napa County deputy district attorney and then court commissioner and Superior Court judge (appointed by Gov. Brown in 2018), she was described by the court as the first African American in each of the prosecutor and commissioner roles in Napa County. Appointed Dec 2023; confirmed Jan 2024.'),
        justice('1', 'Two', 'Therese M. Stewart', 'Presiding Justice', 'Brown (2014); Presiding Justice by Newsom (2022)', d1('therese-m-stewart'),
          'Previously Chief Deputy City Attorney of San Francisco for 12 years, where she litigated In re Marriage Cases and Perry v. Brown, and before that a partner at Howard, Rice, Nemerovski, Canady, Falk & Rabkin. Clerked on the Eleventh Circuit.'),
        justice('1', 'Two', 'Tara M. Desautels', 'Associate Justice', 'Newsom (2024)', d1('tara-m-desautels'),
          'A 14-year Alameda County Superior Court judge (appointed by Gov. Schwarzenegger in 2010) who served as assistant presiding and presiding judge, she was earlier a deputy district attorney for about eight years and a civil litigator at Pillsbury Winthrop. Confirmed May 2024.'),
        justice('1', 'Three', 'Ioana Petrou', 'Associate Justice', 'Brown (2018)', d1('ioana-petrou'),
          'An Alameda County Superior Court judge from 2010 (appointed by Gov. Schwarzenegger), she was earlier an Assistant U.S. Attorney in New York and San Francisco and a civil litigator at Foley & Lardner. She chairs the Judicial Council\'s Advisory Committee on Civil Jury Instructions.'),
        justice('1', 'Three', 'Victor Rodríguez', 'Associate Justice', 'Newsom (2021)', d1('victor-rodriguez'),
          'Before joining the Alameda County Superior Court in 2018 he spent about 12 years as a California Supreme Court staff attorney, including as supervising attorney for Justice Mariano-Florentino Cuéllar, after a Skadden Fellowship at MALDEF. Confirmed Oct 13, 2021.'),
        justice('1', 'Four', 'Tracie L. Brown', 'Presiding Justice', 'Brown (2018); Presiding Justice by Newsom (2023)', d1('tracie-l-brown'),
          'A San Francisco Superior Court judge for five years who presided over criminal cases including the Domestic Violence Court, she was earlier an Assistant U.S. Attorney in the Northern District of California from 2002. Confirmed as presiding justice Apr 7, 2023.'),
        justice('1', 'Five', 'Mark B. Simons', 'Associate Justice', 'Davis (2000)', d1('mark-b-simons'),
          'On the Court of Appeal since 2000, he was earlier a Contra Costa County deputy public defender, a municipal court judge from 1980 and a Superior Court judge from 1995, serving as presiding judge in 1999 and 2000. The court\'s bio lists a service start of 2001 but states a January 2000 appointment.'),
        justice('1', 'Five', 'Danny Y. Chou', 'Associate Justice', 'Newsom (2023)', d1('danny-y-chou'),
          'A San Mateo County Superior Court judge from 2018 (appointed by Gov. Brown), he was earlier chief of appellate litigation in the San Francisco City Attorney\'s office and a staff attorney for Justice Janice Rogers Brown at the California Supreme Court. Confirmed July 2023.'),
        justice('1', 'Five', 'Gordon B. Burns', 'Associate Justice', 'Brown (2018)', d1('gordon-b-burns'),
          'Previously Undersecretary of the California Environmental Protection Agency (from 2011) and the state\'s first Deputy Solicitor General for Civil Law (2006), he began as a deputy attorney general in the Land Law and tort sections.'),
      ],
    },
    crossTypology: typology('Several justices are former prosecutors or government lawyers.'),
    counterArguments: counters('Smiley, Desautels, Chou and Wilson'),
  },
  {
    id: 'retention-dca3',
    categoryId: 'judicial',
    title: 'Court of Appeal, 3rd District — retention',
    tldrLabel: 'Appeals Court, 3rd Dist.',
    seatContext: 'Retention (Yes/No)',
    kind: 'retention',
    candidates: [],
    stakesParagraphs: [
      STAKES_BASE + ' Two of the seven names (Damrell and Sapp) are newly confirmed appointees to seats that begin Jan 4, 2027 if voters confirm them.',
      'The 3rd District sits in Sacramento and hears appeals from 23 Northern California counties, including Sacramento and Placer. It decides criminal, civil, family and administrative appeals, and is the court that hears most challenges to state government, so its published opinions bind trial courts statewide.',
    ],
    introParagraphs: [
      'Seven justices appear on the Placer County ballot: Presiding Justice Earl and Justices Renner, Eurie, Feinberg and Mesiwala, plus Damrell and Sapp, whom the Commission on Judicial Appointments confirmed on Aug 19, 2026 to seats vacated by retiring Justices Duarte and Robie. Newsom appointed all but Renner (Brown). Public sources show Commission on Judicial Performance discipline of two former 3rd District justices, Vance Raye (2022 admonishment) and William Murray Jr. (2025 public censure and bar), both for delay in deciding cases; neither is on this ballot and none of the seven justices listed here was found to be the subject of public discipline.',
    ],
    retention: {
      justices: [
        justice('3', null, 'Laurie M. Earl', 'Administrative Presiding Justice', 'Newsom (2021)', d3('laurie-m-earl'),
          'A Sacramento County Superior Court judge from 2005 to 2021 and presiding judge in 2012-13, she chaired the Judicial Council\'s Trial Court Budget Advisory Committee and served as a special master for the Commission on Judicial Performance in 2019. Confirmed Jan 6, 2022; Administrative Presiding Justice since 2022.'),
        justice('3', null, 'Lauri A. Damrell', 'Associate Justice', 'Newsom (2026)', d3('lauri-damrell'),
          'A Sacramento County Superior Court judge since 2018 who led its Complex Civil Litigation Department, she was earlier an Orrick, Herrington & Sutcliffe partner and clerked for Judge David Levi. Confirmed unanimously Aug 19, 2026 to the seat of retiring Justice Elena Duarte; this is the first voter vote on her seat.'),
        justice('3', null, 'David B. Sapp', 'Associate Justice', 'Newsom (2026)', GOV_RELEASE,
          'Governor Newsom\'s Legal Affairs Secretary since 2022, he was earlier a staff member at the State Board of Education and, from 2009, the ACLU Foundation of Southern California, and clerked on the Ninth Circuit. His first judgeship; confirmed unanimously Aug 19, 2026 to the seat of retiring Justice Ronald Robie, effective Jan 4, 2027 if voters confirm him.', "Governor's Aug 7, 2026 appointment release"),
        justice('3', null, 'Stacy Boulware Eurie', 'Associate Justice', 'Newsom (2022)', d3('stacy-boulware-eurie'),
          'A Sacramento County Superior Court trial judge for 15 years who presided over the Juvenile Court from 2010 to 2018, she was earlier a Senior Assistant Attorney General in the Government Law Section. Confirmed unanimously Aug 4, 2022.'),
        justice('3', null, 'Jonathan K. Renner', 'Associate Justice', 'Brown (2015)', d3('jonathan-k-renner'),
          'Joined the court in January 2015 after serving as Governor Brown\'s Legal Affairs Secretary, having been a Senior Assistant Attorney General over the Government Law Section and a deputy attorney general.'),
        justice('3', null, 'Aimee A. Feinberg', 'Associate Justice', 'Newsom (sworn in 2024)', d3('aimee-feinberg'),
          'A Deputy Solicitor General in the California Department of Justice (2014-2023) who argued before the U.S. Supreme Court, California Supreme Court and Ninth Circuit, she directed the UC Davis California Supreme Court Clinic and clerked for Justice Stephen Breyer. Sworn in Jan 30, 2024.'),
        justice('3', null, 'Shama Mesiwala', 'Associate Justice', 'Newsom (confirmed 2023)', d3('shama-mesiwala'),
          'A federal public defender and Central California Appellate Program attorney, then a chambers attorney for Justice Ronald Robie for 11 years, she became a Sacramento County commissioner in 2017 and judge, and created Northern California\'s first Indian Child Welfare Act courtroom. Confirmed unanimously Feb 14, 2023.',
          'Court of Appeal bio', 'exceptionally well qualified'),
      ],
    },
    crossTypology: typology('Several justices are former state prosecutors or government lawyers, and one was a federal public defender.'),
    counterArguments: counters('Damrell and Sapp, who have no appellate record and are on the ballot for the first time,'),
  },
  {
    id: 'retention-dca6',
    categoryId: 'judicial',
    title: 'Court of Appeal, 6th District — retention',
    tldrLabel: 'Appeals Court, 6th Dist.',
    seatContext: 'Retention (Yes/No)',
    kind: 'retention',
    candidates: [],
    stakesParagraphs: [
      STAKES_BASE + ' One of the five names (Chung) is a newly confirmed appointee to a seat that begins Jan 4, 2027 if voters confirm him.',
      'The 6th District sits in San Jose and covers Santa Clara, Santa Cruz, San Benito and Monterey counties. It hears appeals from the Superior Court in criminal, civil, family and administrative cases; for most cases its decision is the last word, and its published opinions bind trial courts statewide.',
    ],
    introParagraphs: [
      'Five justices appear on the Santa Clara County ballot. Four were appointed by Gov. Newsom (Bromberg 2023, Wilson 2021, Adams 2026, and Chung, confirmed Aug 19, 2026 to the seat of retiring Justice Adrienne Grover) and Danner by Gov. Brown (2018). The ballot name "Charles E. Wilson II" follows the Secretary of State list; the court bio gives "Charles E. Wilson". No Commission on Judicial Performance public discipline and no organized "vote no" campaign was found for any of them in public sources.',
    ],
    retention: {
      justices: [
        justice('6', null, 'Daniel H. Bromberg', 'Associate Justice', 'Newsom (2023)', d6('daniel-h-bromberg'),
          'A private-practice appellate lawyer (Jones Day, Quinn Emanuel, Pillsbury) and Deputy Secretary for Legal Affairs in the Governor\'s Office (2019-2021), where he supervised litigation including the border wall and COVID-19 cases; clerked on the D.C. Circuit. Founding director of the California Appellate Advocacy Project.'),
        justice('6', null, 'Charles E. Wilson II', 'Associate Justice', 'Newsom (2021)', d6('charles-e-wilson'),
          'A Santa Clara County Superior Court judge for seven years who supervised the Family Violence Division and the Palo Alto courthouse, he was earlier a deputy district attorney and a civil litigator. Appointed Aug 2021.'),
        justice('6', null, 'Charles F. Adams', 'Associate Justice', 'Newsom (2026)', d6('charles-f-adams'),
          'A Santa Clara County Superior Court judge for eight years across criminal, civil, family, probate and appellate divisions, and supervising judge of the Family Division (2021-2023); earlier a staff attorney and law clerk to U.S. District Judge Edward Davila. Confirmed Aug 6, 2026; first voter vote.'),
        justice('6', null, 'Frederick S. Chung', 'Associate Justice', 'Newsom (2026)', GOV_RELEASE,
          'A Santa Clara County Superior Court judge since 2018 and, before that, a Gibson, Dunn & Crutcher partner (2003-2018) and Morrison & Foerster associate; he clerked on the Sixth Circuit. Confirmed Aug 19, 2026 to the seat of retiring Justice Adrienne Grover, effective Jan 4, 2027 if voters confirm him.', "Governor's Aug 7, 2026 appointment release"),
        justice('6', null, 'Allison M. Danner', 'Associate Justice', 'Brown (2018)', d6('allison-m-danner'),
          'A former Santa Clara Superior Court judge (about six years), Assistant U.S. Attorney (2007-2012) and Vanderbilt law professor, she worked in the Justice Department\'s Office of Legal Counsel and clerked for Justice John Paul Stevens.'),
      ],
    },
    crossTypology: typology('Several justices are former prosecutors or government lawyers.'),
    counterArguments: counters('Adams and Chung, who have no appellate record,'),
  },
];
