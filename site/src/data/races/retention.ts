import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Judicial retention races (Nov 3, 2026).
 * Sources: CA Secretary of State voter guide, CalMatters 2026 voter guide, appellate.courts.ca.gov bios,
 * gov.ca.gov appointment releases, Judicial Council newsroom (Commission on Judicial Appointments).
 * No Commission on Judicial Performance public discipline or organized "vote no" campaign was found
 * for any justice below (GrowSF also reports none for the Supreme Court pair).
 */

export const RACES_RETENTION_STATEWIDE: Race[] = [
  {
    id: 'retention-supreme',
    categoryId: 'judicial',
    title: 'California Supreme Court — retention',
    tldrLabel: 'Supreme Court retention',
    seatContext: 'Retention (Yes/No)',
    kind: 'retention',
    candidates: [],
    stakesParagraphs: [
      'A "Yes" vote keeps a justice on the bench for a 12-year term; a "No" vote, if a majority agrees, creates a vacancy that the governor fills with an appointee confirmed by the Commission on Judicial Appointments. There is no opponent on the ballot, so the question is only whether each justice should stay. Voters have removed a California Supreme Court justice only once, in 1986.',
      'The seven-member Supreme Court is the state\'s court of last resort. It has the final word on what the California Constitution and state statutes mean, reviews every death sentence, and decides challenges to ballot initiatives, including the 2024 ruling that upheld Prop 22 (the app-based driver measure) in Castellanos v. State of California.',
    ],
    introParagraphs: [
      'Justices Joshua Groban (appointed by Gov. Jerry Brown in 2018) and Kelli M. Evans (appointed by Gov. Gavin Newsom in 2022) are each asking for a full 12-year term; their current terms end in January 2027. Groban won election in 2022 to the unexpired term he now completes, and this is Evans\'s first time on the ballot. Neither appears in Commission on Judicial Performance public-discipline records according to GrowSF, which also found no organized campaign against either.',
    ],
    retention: {
      justices: [
        {
          name: 'Joshua Groban',
          court: 'California Supreme Court',
          title: 'Associate Justice',
          appointedBy: 'Governor Brown (2018)',
          notes: [
            'Before joining the court he was a senior policy adviser to Gov. Brown, and earlier worked in private practice on antitrust and intellectual property cases. He won a "Yes" majority in every county for which results were found in the Nov 2022 retention vote (statewide percentage not publicly documented here), and is seeking a full 12-year term.',
          ],
          externalRating: { source: 'State Bar Commission on Judicial Nominees Evaluation', rating: 'Exceptionally Well Qualified', url: 'https://atthelectern.com/ca-supreme-court-nominee-joshua-groban-exceptionally-well-qualified-evaluators-say', dateLabel: 'Dec 2018 (Supreme Court nomination)' },
          sources: [
            { label: 'CalMatters 2026 voter guide — Supreme Court', url: 'https://calmatters.org/california-voter-guide-2026/supreme-court' },
            { label: 'Secretary of State voter guide — justices', url: 'https://vig.cdn.sos.ca.gov/2026/general/pdf/justices.pdf' },
            { label: 'GrowSF retention guide', url: 'https://growsf.org/voter-guide/san-francisco-voter-guide-november-2026-election/contests/supreme-court-retention/' },
          ],
        },
        {
          name: 'Kelli M. Evans',
          court: 'California Supreme Court',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2022)',
          notes: [
            'A former Alameda County Superior Court judge, she was Gov. Newsom\'s chief deputy legal affairs secretary and earlier worked as a civil rights attorney, public defender, and State Bar senior director. She was confirmed unanimously by the Commission on Judicial Appointments and was reported by the Bay Area Reporter (EBAR) as the first openly LGBTQ justice on the court; this is her first retention vote.',
          ],
          externalRating: { source: 'State Bar Commission on Judicial Nominees Evaluation', rating: 'Well Qualified', url: 'https://www.10news.com/news/california-installs-first-lesbian-supreme-court-justice', dateLabel: 'Nov 2022 (Supreme Court nomination)' },
          sources: [
            { label: 'CalMatters 2026 voter guide — Supreme Court', url: 'https://calmatters.org/california-voter-guide-2026/supreme-court' },
            { label: 'Secretary of State voter guide — justices', url: 'https://vig.cdn.sos.ca.gov/2026/general/pdf/justices.pdf' },
            { label: 'EBAR: panel confirms Evans', url: 'https://www.ebar.com/story/67064' },
          ],
        },
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes on all', '◐', 'Leftward Progressives want an independent court and find no misconduct or organized opposition against either justice, though this pro-labor group may still resent the court\'s 2024 ruling upholding Prop 22 for app-based drivers.'],
      ['LL', 'Yes on all', '●', 'Loyal Liberals trust expert vetting, and both justices were rated by the State Bar\'s evaluation commission (Groban "Exceptionally Well Qualified," Evans "Well Qualified") with no discipline on record.'],
      ['LO', 'Yes on all', '○', 'Left-Out Left voters distrust insiders, and both justices came to the court from governors\' offices, but nothing on the record shows self-dealing or misconduct, so a Yes is the defensible default.'],
      ['OO', 'Yes on all', '◐', 'Order and Opportunity Left voters respect authority and stable institutions, and with no discipline, no organized opposition and strong bar ratings, retaining both justices keeps the state\'s top court steady.'],
      ['TM', 'Yes on all', '○', 'Tuned-Out Middle voters rarely follow the courts and nothing in this vote touches their costs directly, so with no fitness problem on record the low-effort default is to retain.'],
      ['PP', 'Yes on all', '●', 'Pragmatic and Polite Right voters value the rule of law and a stable court, and both justices have strong bar ratings and no discipline on record, so removing either would be a protest vote this cautious group avoids.'],
      ['UR', 'Yes on all', '○', 'Unconventional Right voters are wary of Sacramento, but no scandal or organized opposition is on record and a No would only let the governor pick a replacement, so retaining is the low-risk choice.'],
      ['FC', 'Yes on all', '○', 'Faith First Conservatives may distrust a court shaped by Democratic governors, but no ruling by either justice on this group\'s faith or family priorities is on record here, and a No would only hand the next governor the appointment.'],
      ['NA', 'No on all', '○', 'No Apologies Right voters distrust institutional authority and see both justices as appointees of Democratic governors (Brown and Newsom), so a protest No is plausible; no misconduct by either justice is on record.'],
    ]),
    counterArguments: [
      'NA (No on all ○): But consider that removing either justice would let the governor, not voters, choose the replacement for a 12-year term, because a No vote does not produce a more conservative court and no misconduct is alleged.',
      'LP (Yes on all ◐): But consider that the court\'s 2024 Prop 22 ruling went against labor\'s position on app-based drivers, because voters who weigh that ruling heavily may treat retention as a chance to register disagreement, though no individual authorship is on record here.',
    ],
  },
];

export const RACES_RETENTION_LOCAL: Race[] = [
  {
    id: 'retention-dca4',
    categoryId: 'judicial',
    title: 'Court of Appeal, 4th District — retention',
    tldrLabel: 'Appeals Court, 4th Dist.',
    seatContext: 'Retention (Yes/No)',
    kind: 'retention',
    candidates: [],
    stakesParagraphs: [
      'For each justice you vote Yes or No on a 12-year term. A majority "No" would create a vacancy filled by the governor with Commission on Judicial Appointments confirmation. Justices newly appointed to fill a vacancy, such as Lisa Rodriguez (whose ballot wording asks whether she should be "elected"), need voter confirmation to begin a term in January 2027.',
      'The Court of Appeal hears nearly all appeals from superior courts in its region before they could reach the Supreme Court, and for most cases its decision is the last word. The 4th District covers San Diego, Imperial, Riverside, San Bernardino, Inyo, Orange, and Mono counties through Division One (San Diego), Division Two (Riverside), and Division Three (Orange); its published opinions bind trial courts throughout California.',
    ],
    introParagraphs: [
      'Fifteen justices appear on the 4th District ballot. Thirteen were appointed by Gov. Newsom (2021 to 2026) and two by Gov. Brown (William Dato in 2016 and Michael Raphael in 2018). Several are brand-new: Eran Bermudez, Deborah Servino, and the presiding-justice promotion of Joanne Motoike were confirmed in May 2026, and Lisa Rodriguez and Juliet Macaulay in August 2026. No Commission on Judicial Performance public discipline and no organized "vote no" campaign was found for any of them in public sources.',
    ],
    retention: {
      justices: [
        {
          name: 'Lisa Rodriguez',
          court: 'Court of Appeal, 4th District, Division One',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2026)',
          notes: [
            'Currently a San Diego County Superior Court judge (appointed by Gov. Brown in 2015) who was nominated by Gov. Newsom on Aug 7, 2026 and unanimously confirmed by the Commission on Judicial Appointments on Aug 20, 2026 to replace retiring Justice Terry O\'Rourke; that is why the ballot asks whether she should be "elected" and her term starts Jan 4, 2027 only if voters confirm her. She was a San Diego deputy district attorney from 1998 to 2015 and chairs the Judicial Council\'s Criminal Law Advisory Committee.',
          ],
          sources: [
            { label: 'Governor\'s Aug 7, 2026 appointments', url: 'https://www.gov.ca.gov/2026/08/07/governor-newsom-announces-judicial-appointments-4/' },
            { label: 'Commission confirms four appointments', url: 'https://newsroom.courts.ca.gov/news/commission-confirms-four-appointments-courts-appeal-2' },
          ],
        },
        {
          name: 'David M. Rubin',
          court: 'Court of Appeal, 4th District, Division One',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2023)',
          notes: [
            'Spent almost 17 years as a San Diego Superior Court judge (criminal, family, civil, and the Appellate Division) after working in the San Diego County District Attorney\'s Office, where he was named Prosecutor of the Year in 2006. He was nominated in March 2023 and confirmed by the Commission on Judicial Appointments on June 23, 2023.',
          ],
          sources: [{ label: 'Court of Appeal bio', url: 'https://appellate.courts.ca.gov/district-courts/4dca/bio/david-m-rubin' }],
        },
        {
          name: 'Julia C. Kelety',
          court: 'Court of Appeal, 4th District, Division One',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2023)',
          notes: [
            'Served over 19 years on the San Diego Superior Court (probate and juvenile dependency; three years as presiding judge of its Appellate Division) after working as a federal prosecutor in the Southern District of California and at Gibson, Dunn & Crutcher. She took the oath on April 7, 2023.',
          ],
          sources: [{ label: 'Court of Appeal bio', url: 'https://appellate.courts.ca.gov/district-courts/4dca/bio/julia-c-kelety' }],
        },
        {
          name: 'Jose S. Castillo',
          court: 'Court of Appeal, 4th District, Division One',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2023)',
          notes: [
            'A U.S. Marine Corps veteran, former Ninth Circuit staff attorney, and Assistant U.S. Attorney in San Diego for about ten years, he became a San Diego Superior Court family-law judge in 2020. Gov. Newsom nominated him in February 2023 and he joined the Court of Appeal that spring.',
          ],
          sources: [{ label: 'Court of Appeal bio', url: 'https://appellate.courts.ca.gov/district-courts/4dca/bio/jose-s-castillo' }],
        },
        {
          name: 'Truc T. Do',
          court: 'Court of Appeal, 4th District, Division One',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2021)',
          notes: [
            'A former San Diego Superior Court judge (criminal and family courts), she was a partner at Munger, Tolles & Olson and Jones Day from 2009 to 2018 and a Los Angeles County prosecutor from 1999 to 2009. She took the oath on January 14, 2021 after a unanimous confirmation.',
          ],
          sources: [{ label: 'Court of Appeal bio', url: 'https://appellate.courts.ca.gov/district-courts/4dca/bio/truc-t-do' }],
        },
        {
          name: 'William S. Dato',
          court: 'Court of Appeal, 4th District, Division One',
          title: 'Associate Justice',
          appointedBy: 'Governor Brown (2016)',
          notes: [
            'A San Diego Superior Court judge for 13 years (including presiding judge of its appellate division), he previously practiced as a certified appellate specialist and worked as an appellate staff attorney. Gov. Brown appointed him in December 2016 and he was confirmed in February 2017.',
          ],
          sources: [
            { label: 'Court of Appeal bio', url: 'https://appellate.courts.ca.gov/district-courts/4dca/bio/william-dato' },
            { label: 'Gov. Brown appointment release (Dec 2016)', url: 'https://www.archive.gov.ca.gov/archive/gov39/2016/12/23/news19635/index.html' },
          ],
        },
        {
          name: 'Eran M. Bermudez',
          court: 'Court of Appeal, 4th District, Division One',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2026)',
          notes: [
            'A former Imperial County Superior Court judge and its presiding judge, she previously worked at UC San Diego\'s Office for the Prevention of Harassment & Discrimination and in private practice. Nominated April 16, 2026, she was confirmed May 22, 2026 to replace retiring Justice Richard Huffman and has no prior retention record.',
          ],
          externalRating: { source: 'State Bar Commission on Judicial Nominees Evaluation', rating: 'Exceptionally Well Qualified', url: 'https://appellate.courts.ca.gov/node/4927', dateLabel: 'Apr to May 2026 (Court of Appeal nomination)' },
          sources: [
            { label: 'Court of Appeal bio', url: 'https://appellate.courts.ca.gov/district-courts/4dca/bio/eran-m-bermudez' },
            { label: 'Commission confirms five appointments', url: 'https://newsroom.courts.ca.gov/news/commission-confirms-five-appointments-courts-appeal-0' },
          ],
        },
        {
          name: 'Corey G. Lee',
          court: 'Court of Appeal, 4th District, Division Two',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2025)',
          notes: [
            'A San Bernardino County Superior Court judge for about ten years (appointed by Gov. Brown in 2015), she was earlier an Assistant U.S. Attorney and deputy chief of the Riverside branch of the U.S. Attorney\'s Office. Nominated in August 2025, she was confirmed unanimously in November 2025 to replace retired Justice Marsha Slough.',
          ],
          externalRating: { source: 'State Bar Commission on Judicial Nominees Evaluation', rating: 'Exceptionally Well Qualified', url: 'https://appellate.courts.ca.gov/district-courts/4dca/bio/corey-g-lee', dateLabel: '2025 (Court of Appeal nomination)' },
          sources: [{ label: 'Court of Appeal bio', url: 'https://appellate.courts.ca.gov/district-courts/4dca/bio/corey-g-lee' }],
        },
        {
          name: 'Michael J. Raphael',
          court: 'Court of Appeal, 4th District, Division Two',
          title: 'Associate Justice',
          appointedBy: 'Governor Brown (2018)',
          notes: [
            'A former Assistant U.S. Attorney in Los Angeles for over twelve years (chief of the Criminal Appeals Section) and a Los Angeles Superior Court judge from 2012, he clerked on the Sixth Circuit and was confirmed unanimously in 2018. Ballotpedia lists him as retained by voters in November 2022.',
          ],
          externalRating: { source: 'State Bar Commission on Judicial Nominees Evaluation', rating: 'Exceptionally Well Qualified', url: 'https://appellate.courts.ca.gov/district-courts/4dca/bio/michael-j-raphael', dateLabel: '2018 (Court of Appeal nomination)' },
          sources: [
            { label: 'Court of Appeal bio', url: 'https://appellate.courts.ca.gov/district-courts/4dca/bio/michael-j-raphael' },
            { label: 'Ballotpedia: 4th District Court of Appeal', url: 'https://ballotpedia.org/California_Fourth_District_Court_of_Appeal' },
          ],
        },
        {
          name: 'Joanne Motoike',
          court: 'Court of Appeal, 4th District, Division Three',
          title: 'Presiding Justice',
          appointedBy: 'Governor Newsom (2022; Presiding Justice 2026)',
          notes: [
            'A former Orange County Superior Court judge (presiding judge of its Juvenile Court, 2018–2022) and longtime public defender who also worked as a trial attorney at the UN International Criminal Tribunal, she joined the court in 2022 and was elevated to presiding justice (replacing Kathleen O\'Leary) with unanimous confirmation on May 22, 2026. She was rated "exceptionally well qualified" in 2022 by the State Bar\'s evaluation commission.',
          ],
          externalRating: { source: 'State Bar Commission on Judicial Nominees Evaluation', rating: 'Exceptionally Well Qualified', url: 'https://appellate.courts.ca.gov/district-courts/4dca/bio/joanne-motoike', dateLabel: '2022 (Court of Appeal nomination)' },
          sources: [
            { label: 'Court of Appeal bio', url: 'https://appellate.courts.ca.gov/district-courts/4dca/bio/joanne-motoike' },
            { label: 'Commission confirms five appointments (May 2026)', url: 'https://newsroom.courts.ca.gov/news/commission-confirms-five-appointments-courts-appeal-0' },
          ],
        },
        {
          name: 'Thomas A. Delaney',
          court: 'Court of Appeal, 4th District, Division Three',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2022)',
          notes: [
            'An Orange County Superior Court judge from 2014 and previously a partner at Sedgwick LLP (2002–2014), he was nominated in August 2022 to replace retired Justice David Thompson and took his seat in October 2022.',
          ],
          sources: [{ label: 'Governor\'s Aug 8, 2022 appointments', url: 'https://www.gov.ca.gov/2022/08/08/governor-newsom-announces-judicial-appointments-8-8-22/' }],
        },
        {
          name: 'Nathan R. Scott',
          court: 'Court of Appeal, 4th District, Division Three',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2024; seated Feb 2025)',
          notes: [
            'An Orange County Superior Court judge from 2012, he was a senior appellate court attorney at the 4th District from 2005 to 2012 and a Kirkland & Ellis associate; Harvard Law graduate. Nominated Nov 21, 2024 to replace retired Justice William Bedsworth, he was confirmed unanimously in February 2025.',
          ],
          externalRating: { source: 'State Bar Commission on Judicial Nominees Evaluation', rating: 'Exceptionally Well Qualified', url: 'https://appellate.courts.ca.gov/district-courts/4dca/bio/nathan-r-scott', dateLabel: 'Nov 2024 to Feb 2025 (Court of Appeal nomination)' },
          sources: [{ label: 'Governor\'s Nov 21, 2024 appointments', url: 'https://www.gov.ca.gov/2024/11/21/governor-newsom-announces-judicial-appointments-11-21-24/' }],
        },
        {
          name: 'Deborah C. Servino',
          court: 'Court of Appeal, 4th District, Division Three',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2026)',
          notes: [
            'An Orange County Superior Court judge since 2009 and a California deputy attorney general from 1997 to 2009, she was nominated April 16, 2026 and confirmed May 22, 2026 to replace retiring Justice Thomas Goethals; this is her first retention vote.',
          ],
          externalRating: { source: 'State Bar Commission on Judicial Nominees Evaluation', rating: 'Exceptionally Well Qualified', url: 'https://appellate.courts.ca.gov/node/4925', dateLabel: 'Apr to May 2026 (Court of Appeal nomination)' },
          sources: [
            { label: 'Governor\'s Apr 16, 2026 appointments', url: 'https://www.gov.ca.gov/2026/04/16/governor-newsom-announces-updated-judicial-appointments/' },
            { label: 'Commission confirms five appointments', url: 'https://newsroom.courts.ca.gov/news/commission-confirms-five-appointments-courts-appeal-0' },
          ],
        },
        {
          name: 'Martha K. Gooding',
          court: 'Court of Appeal, 4th District, Division Three',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2023)',
          notes: [
            'An Orange County Superior Court judge from 2013, she spent decades in private litigation (partner at Howard Rice, Howrey, and Jones Day). Nominated May 19, 2023, she was confirmed unanimously on September 26, 2023.',
          ],
          externalRating: { source: 'State Bar Commission on Judicial Nominees Evaluation', rating: 'Exceptionally Well Qualified', url: 'https://appellate.courts.ca.gov/node/3929', dateLabel: 'May to Sep 2023 (Court of Appeal nomination)' },
          sources: [{ label: 'Court of Appeal bio', url: 'https://appellate.courts.ca.gov/node/3929' }],
        },
        {
          name: 'Juliet O. Macaulay',
          court: 'Court of Appeal, 4th District, Division Three',
          title: 'Associate Justice',
          appointedBy: 'Governor Newsom (2026)',
          notes: [
            'Appointed to the Orange County Superior Court in 2022, she was previously chief administrative law judge for the state Department of Social Services\' State Hearings Division and a Board of Parole Hearings commissioner. Nominated Aug 7, 2026 and confirmed Aug 20, 2026 to fill the seat left by Motoike\'s elevation, she needs voter confirmation to start a term on Jan 4, 2027.',
          ],
          sources: [
            { label: 'Governor\'s Aug 7, 2026 appointments', url: 'https://www.gov.ca.gov/2026/08/07/governor-newsom-announces-judicial-appointments-4/' },
            { label: 'Commission confirms four appointments', url: 'https://newsroom.courts.ca.gov/news/commission-confirms-four-appointments-courts-appeal-2' },
          ],
        },
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes on all', '◐', 'Leftward Progressives want an independent bench and find no misconduct on record, though this police-skeptical group will notice that many of these justices are former prosecutors, while Motoike was a longtime public defender.'],
      ['LL', 'Yes on all', '●', 'Loyal Liberals trust expert vetting, and every justice here was confirmed by the Commission on Judicial Appointments, many rated "Exceptionally Well Qualified," with no discipline or organized opposition on record.'],
      ['LO', 'Yes on all', '○', 'Left-Out Left voters are skeptical of the legal establishment and its big-firm and prosecutor résumés, but nothing on the record shows misconduct or self-dealing, so a Yes is the defensible default.'],
      ['OO', 'Yes on all', '◐', 'Order and Opportunity Left voters value public safety and respect for authority, and many of these justices are former San Diego, Los Angeles and federal prosecutors with no discipline on record.'],
      ['TM', 'Yes on all', '○', 'Tuned-Out Middle voters rarely have information on appellate judges and nothing here touches their costs, so with no fitness problem on record the low-effort default is to retain.'],
      ['PP', 'Yes on all', '●', 'Pragmatic and Polite Right voters value the rule of law and experienced judges, and this bench of former trial judges and prosecutors, with strong bar ratings and no discipline, gives this cautious group no reason for a protest No.'],
      ['UR', 'Yes on all', '○', 'Unconventional Right voters are wary of politics in the courts but see no scandal here, and many justices are former prosecutors or federal attorneys, so retaining is the low-risk choice.'],
      ['FC', 'Yes on all', '○', 'Faith First Conservatives value law and order, and many of these justices prosecuted crimes before joining the bench; a protest No against Democratic-governor appointees would only hand the governor new appointments.'],
      ['NA', 'No on all', '○', 'No Apologies Right voters distrust institutional authority, and 13 of these 15 justices were appointed by Gov. Newsom, so a protest No is plausible; this is a lean, not a finding about any justice.'],
    ]),
    counterArguments: [
      'NA (No on all ○): But consider that a No vote only hands the governor a vacancy to fill, because almost no appellate justice is ever removed and a blanket No would fall on veteran prosecutors and Brown appointees alike.',
      'LP (Yes on all ◐): But consider voting line by line on justices with long prosecution careers, because voters focused on criminal-justice reform may weigh those backgrounds, though no sourced evidence of bias was found.',
      'TM (Yes on all ○): But consider that Rodriguez, Bermudez, Servino and Macaulay have little or no appellate record yet, because a voter wanting more evidence could reasonably skip those lines.',
    ],
  },
];
