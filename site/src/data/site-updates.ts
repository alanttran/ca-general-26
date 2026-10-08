/**
 * Changelog for the header “what changed in this build” section.
 * Newest build first. Keep `dateLabel` in sync with `BALLOT_META.lastContentUpdated`.
 */
export interface SiteUpdatePanel {
  summary: string;
  body?: string;
  bullets?: string[];
}

export interface SiteUpdateBuild {
  dateLabel: string;
  lede: string;
  panels: SiteUpdatePanel[];
}

export const SITE_UPDATE_BUILDS: SiteUpdateBuild[] = [
  {
    dateLabel: 'October 8, 2026',
    lede: 'Every ZIP in the guide now has its full local ballot: Los Angeles, Orange, Riverside, Placer, Alameda and Santa Clara counties join San Diego.',
    panels: [
      {
        summary: 'Easier to read',
        bullets: [
          'One consistent type scale: five text sizes and two weights, nothing smaller than about 15px, and no all-caps labels.',
          'Experience badges now read “Very experienced,” “Experienced,” “Some experience,” or “Little experience.”',
          'On phones, the section menu is a single swipeable row, and each race’s typology picks stack as cards with the full reasoning visible.',
        ],
      },
      {
        summary: 'Orange, Riverside and Northern California',
        bullets: [
          'Orange (92868): CA-46, Senate 34, Assembly 68, Orange mayor, MWDOC Division 2 and City Measures I, J and K.',
          'Murrieta (92562): CA-40 (two incumbents, Young Kim vs. Ken Calvert), Senate 32, Assembly 71, Superior Court Office 10, Murrieta Valley Unified seats and Measure M, Rancho California Water and Riverside County Measure A.',
          'Rocklin (95765): CA-6, Senate 6, Assembly 5, Board of Equalization 1, 3rd District Court of Appeal, Rocklin council and Measure C, Rocklin Unified Measure D, and Placer County Measures G and H.',
          'Hayward (94544) and Mountain View (94043): CA-14 and CA-16, Senate 10, Assemblies 20 and 23, Board of Equalization 2, 1st and 6th District Courts of Appeal, city councils and measures, school, college, transit and water boards, and the Bay Area regional transit measure.',
        ],
      },
      {
        summary: 'Ballot designations checked against the state list',
        body: 'Every statewide, Board of Equalization, congressional and legislative candidate’s ballot designation now matches the Secretary of State’s certified list of candidates word for word; ten earlier entries were corrected.',
      },
      {
        summary: 'Los Angeles County: 90028 and 91501',
        bullets: [
          'Countywide: Sheriff (Luna vs. Villanueva), four Superior Court runoffs with LA County Bar ratings, 18 Court of Appeal (2nd District) justices, three LA Community College seats, and County Measures A and E.',
          'Hollywood (90028): CA-30, Board of Equalization 3, State Senate 24 or 26, Assembly 51, LA Mayor (Bass vs. Raman), City Attorney, and all eight City of Los Angeles measures.',
          'Burbank (91501): Senate 20, Assembly 44, Burbank City Council (vote for 3 of 13), clerk, treasurer, Measures C, CC and CD, and Burbank Unified Area 3.',
          'The “Judicial retention” section is now “Judges and justices,” since it also holds trial-court runoffs.',
        ],
      },
    ],
  },
  {
    dateLabel: 'October 7, 2026',
    lede:
      'Every statewide office and all 14 propositions, plus full local ballots for nine San Diego County ZIPs. ZIPs elsewhere in the state show statewide content now; their local races are coming next.',
    panels: [
      {
        summary: 'Eight more San Diego County ZIPs',
        bullets: [
          'Added 91911 and 91914 (Chula Vista), 92009 (Carlsbad), 92026 (Escondido), 92111 (Linda Vista / Clairemont), 92130 (Carmel Valley), 92131 (Scripps Ranch) and 92139 (Paradise Hills), built from the Registrar’s own November sample ballots.',
          'New races: CA-48, 49, 51 and 52; State Senate 18 and 38; Assembly 75, 76, 77, 79 and 80; Supervisor Districts 4 and 5; the Chula Vista, Carlsbad, Escondido and San Diego council and mayoral races; and school, college, water and fire boards.',
          'Many ZIPs are split across districts. A dashed “~45% of this ZIP” tag marks contests that only part of the ZIP votes in, and each ZIP’s note lists smaller contests we don’t cover.',
          'Multi-seat school and fire boards show “Vote for up to 3” with up to three picks per column.',
        ],
      },
      {
        summary: 'What’s covered',
        bullets: [
          'Statewide offices: Governor through Insurance Commissioner, Superintendent of Public Instruction.',
          'All 14 state propositions (Props 1–5 and 37–45), each with the official fiscal summary, who’s for and against, and a Yes/No pick per typology column.',
          'Judicial retention: California Supreme Court and the 4th District Court of Appeal, grouped into one table per court.',
          '92126: Board of Equalization 4, CA-50, Senate 40, Assembly 78, county Assessor and Treasurer-Tax Collector, City Council District 6, County Measures A and B, and SDUSD Measure M.',
        ],
      },
      {
        summary: 'Experience for the job',
        bullets: [
          'Every candidate race lists the office’s legal requirements and 3–5 things the job actually requires, with a side-by-side check of both finalists (✓ met, ~ partly, ✗ not met).',
          'Each candidate gets an overall experience level—Very experienced, Experienced, Some experience, or Little experience—with the evidence behind it; published bar and judicial-evaluation ratings are shown word for word.',
          'Experience informs the picks but never decides them; some voters prefer outsiders.',
        ],
      },
      {
        summary: 'Red flags are now rated',
        bullets: [
          'Each red flag is labeled Severe, Serious, or Worth knowing, with a status (e.g. Alleged, Settled, Official finding) and a line on why it matters for that office.',
          'Only Severe flags outline a candidate card in red; the summary table and print sheet mark picks whose candidate has a Severe or Serious flag.',
          'Policy criticism moved out of red flags into Notes. See “How we rate red flags” under Methodology.',
        ],
      },
      {
        summary: 'New for November',
        bullets: [
          'Races appear in the same order as the printed ballot.',
          'Print my picks: choose your typology column in the header and print a one-page cheat sheet to take to the polls.',
          'Head-to-head polling (where real polls exist) now appears at the race level.',
        ],
      },
    ],
  },
];

/** Build whose `dateLabel` matches `BALLOT_META.lastContentUpdated`, else newest. */
export function siteUpdateBuildForDate(lastContentUpdated: string): SiteUpdateBuild {
  return SITE_UPDATE_BUILDS.find((b) => b.dateLabel === lastContentUpdated) ?? SITE_UPDATE_BUILDS[0];
}

export function earlierSiteUpdateBuilds(lastContentUpdated: string): SiteUpdateBuild[] {
  const current = siteUpdateBuildForDate(lastContentUpdated);
  return SITE_UPDATE_BUILDS.filter((b) => b !== current);
}
