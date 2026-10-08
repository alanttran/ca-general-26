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
    dateLabel: 'October 7, 2026',
    lede:
      'First general-election build: every statewide office and all 14 state propositions, plus the full Mira Mesa (92126) ballot. Other ZIPs show statewide content now; their local races are coming next.',
    panels: [
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
