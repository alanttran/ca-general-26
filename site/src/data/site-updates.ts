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
    dateLabel: 'October 14, 2026',
    lede: 'A new welcome wizard helps first-time visitors find their voter type and get a simple cheat sheet. Plus full local ballots for Temecula: ZIPs 92590, 92591 and 92592.',
    panels: [
      {
        summary: 'Welcome wizard: three ways to use the guide',
        bullets: [
          'First-time visitors are asked how they want to use the guide: “Just help me vote, fast,” “Help me decide, race by race,” or “Show me everything.”',
          'The first two then ask which kind of voter you are, with a link to Pew’s official typology quiz and a plain-language description of all nine types to pick from.',
          'Quick and race-by-race views show your type’s pick on every contest’s title bar and at the top of each contest, and fold away the methodology, the nine-column summary table and the typology key. “Show me everything” is the full page as before.',
          'Your printed cheat sheet uses your own choices where you marked them and your type’s pick everywhere else.',
          'A bar under the ZIP box shows how you’re viewing the guide, with links to change your type or view. Your choice stays on this device only.',
          'Quick view keeps each contest short: your type’s pick and why, the candidates (or what a Yes and a No vote do), a warning if the pick has a serious red flag, and your choice box. Everything else is one tap away under “Full details.”',
          'Race-by-race view puts your type’s pick first in each contest, folds the nine-viewpoint table away, and counts how many contests you’ve marked.',
          'In both simpler views, the voting dates fold into one line showing the next deadline, the ballot-source note folds under “Is this exactly my ballot?”, and the header’s print row and changelog step aside.',
        ],
      },
      {
        summary: 'Temecula',
        bullets: [
          'Temecula City Council District 5 (four candidates), Temecula Valley Unified Trustee Areas 2 and 4, Mt. San Jacinto College Trustee Area 3, and Temecula Valley Unified’s $215 million school bond, Measure S.',
          'Also on these ballots, already in the guide: Rancho California Water District, Riverside Superior Court Office 10 and countywide transportation Measure A. The unincorporated west side of 92590 votes on Murrieta Valley Unified Measure M instead of Measure S.',
          'Contests were placed using the Riverside County Registrar’s own November district map and its final candidate list. Riverside doesn’t publish per-precinct sample ballots, so these weren’t checked against printed ballots the way San Diego’s were.',
        ],
      },
    ],
  },
  {
    dateLabel: 'October 13, 2026',
    lede: 'Full local ballots for 14 more San Diego County ZIPs in Chula Vista, Oceanside, El Cajon, La Mesa, Santee and Vista. Each ballot also opens with your county’s key voting dates, you can mark and print your own choices, and the site loads much faster on phones.',
    panels: [
      {
        summary: 'Chula Vista, Oceanside, El Cajon, La Mesa, Santee and Vista',
        bullets: [
          'Full local ballots for 91910, 91913 and 91915 (Chula Vista); 92054, 92056, 92057 and 92058 (Oceanside); 92020 (El Cajon); 91941 and 91942 (La Mesa); 92071 (Santee); and 92081, 92083 and 92084 (Vista).',
          '34 new contests: mayor and council races in all six cities (plus La Mesa’s treasurer), school and college boards (Southwestern, Sweetwater, Grossmont, Cajon Valley, La Mesa-Spring Valley, Santee, Oceanside, Vista and San Marcos), and Helix, Padre Dam and Vista Irrigation water boards and Tri-City Healthcare.',
          '8 new measures: Oceanside R (prevailing wage and project labor agreements) and S (sales tax), Santee Y (sales tax), and school or college bonds G (Grossmont-Cuyamaca), AA (La Mesa-Spring Valley), BB (Santee), N (Vista Unified) and K (Fallbrook Elementary).',
          'Each ZIP’s contests were matched to the county’s ballot-type map and checked against all 75 of its official sample ballots; every one matched. Where district lines split a ZIP, the share of residents in each contest is shown.',
          'The list of ZIPs with full local ballots, under the ZIP box, is now grouped by county and city with neighborhood names. Tap a ZIP to open its ballot.',
          '91911 now includes Southwestern College Trustee Area 1 (about 8% of the ZIP). 92019 and 92021 are only about 41–44% El Cajon, so they still show statewide, district and countywide races only.',
        ],
      },
      {
        summary: 'How and when to vote',
        bullets: [
          'A new box at the top lists your county’s key dates: when ballots went out, the Oct 19 registration deadline (and same-day registration after it), when vote centers open, and the Election Day rules. Past dates are dimmed and the next one is marked.',
          'Links go to your county’s vote center and drop box lookups, ballot tracking and voter registration. San Diego, Los Angeles, Orange, Riverside, Placer, Alameda and Santa Clara have county-specific details. Other California ZIPs get the statewide rules and lookups.',
          'Denver’s box warns that Colorado doesn’t count postmarks: ballots must reach a drop box or voter center by 7 p.m. Nov 3.',
        ],
      },
      {
        summary: 'Mark your own choices',
        bullets: [
          'At the bottom of every contest, a “Your choice” box lets you pick a candidate, Yes or No, or yes/no for each judge. Your choice then shows on the contest’s title bar even when it’s collapsed.',
          'Pick “My own choices” next to Print my picks to print a one-page sheet of your own choices in ballot order.',
          'Your choices are saved only in this browser, on this device. Nothing is sent anywhere.',
        ],
      },
      {
        summary: 'Faster and easier to read',
        bullets: [
          'The site used to download every local race in the guide; now each ZIP loads only its own. The first download is about a seventh of what it was.',
          'Link and heading colors, the buttons and the viewpoint chips now meet the standard contrast level for readable text.',
        ],
      },
    ],
  },
  {
    dateLabel: 'October 12, 2026',
    lede: 'Every proposition and measure now says plainly what a Yes or No vote does, and links to the other measures it interacts with. Plus one out-of-state ZIP by request: Denver’s 80204.',
    panels: [
      {
        summary: 'Clearer propositions and measures',
        bullets: [
          'Under the ballot question, “What your vote means” says in one sentence what a Yes vote does and what a No vote leaves in place, based on the official voter guide or impartial analysis.',
          '“Read with” links measures that affect each other, such as Props 40, 41 and 42 (if 41 or 42 gets more votes, courts could throw out Prop 40), Colorado’s Amendment 87 and Proposition 136, and Los Angeles Measures PL and EE, which rewrite the same charter section.',
          'Prop 40’s card now says courts could void it if Prop 41 or 42 gets more votes, matching the official analysis, rather than that it would be automatically nullified.',
          'Each side of a measure now shows which parties and newspaper editorial boards back it, how much its campaign has raised and its top donors, from state and local campaign-finance filings. A footnote gives the date the money runs through and the source.',
          'Where a measure has no campaign committee, or funders don’t disclose their donors, the card says so.',
          'Following a link to another race no longer collapses the races you had open.',
        ],
      },
      {
        summary: 'Denver, Colorado: 80204',
        bullets: [
          'West Denver (80204): U.S. Senate, the open CO-1 House seat, Governor, Secretary of State, Treasurer, Attorney General and State Board of Education District 1, built from Colorado’s certified candidate list.',
          'State Senate 34 or 31 and State House 4 or 5 depending on your address, the special election for Denver City Council At-Large Seat B (10 candidates), and RTD District C.',
          'Yes/no retention for the Colorado Supreme Court, Court of Appeals, and Denver District, Juvenile, Probate and County Court judges, with each judge’s Judicial Performance Commission finding.',
          'All 14 statewide amendments and propositions (Amendments 81–87, Propositions NN and 132–137) from the Blue Book, plus Denver Measures 2H, 2I, 2J, 2K and 311 and DPS Measure 4A.',
          'California’s statewide races and propositions don’t show for this ZIP; the page follows Colorado’s ballot order.',
        ],
      },
    ],
  },
  {
    dateLabel: 'October 8, 2026',
    lede: 'Type any California ZIP to see your statewide and district races: every House, State Senate, Assembly and appeals-court contest in the state is now covered. Full local ballots now include Los Angeles, Orange, Riverside, Placer, Alameda and Santa Clara counties alongside San Diego.',
    panels: [
      {
        summary: 'Type any California ZIP',
        bullets: [
          'The ZIP dropdown is now a ZIP box. ZIPs with a full local ballot work as before; any other California ZIP shows the statewide races and propositions plus its district races: U.S. House, State Senate, Assembly, Board of Equalization and Court of Appeal.',
          'Every district race in the state is now covered: all 52 House seats, the 20 State Senate seats up this year, all 80 Assembly seats, and justices on all six Courts of Appeal. Countywide contests already in the guide (San Diego, Los Angeles, Riverside and Placer county offices and measures, and the Bay Area transit measure) now show for every ZIP in those counties.',
          'The guide remembers the last ZIP you typed on this device, so it opens to your ballot next time. Shared links with a ZIP still open that ZIP.',
          'Districts are matched from Census data, using the new Prop 50 congressional map. When district lines split a ZIP, the share shown is a rough estimate by land area.',
        ],
      },
      {
        summary: 'Three ways to read the summary table',
        bullets: [
          '“Fit + experience” is now the default: it keeps strong typology picks, but switches a weak one when a rival is at least two experience levels higher, and fills cells with no typology pick (including multi-seat races and close calls decided by the job’s criteria). Switched cells are marked ⇄, with the reason on hover or tap.',
          '“Experience” lists the most experienced candidate in each race.',
          '“Typology fit” is the original table: picks by worldview.',
          'The printed cheat sheet shows both your Fit + experience pick and your Typology fit pick for every race.',
          'Each race’s cross-typology table is simpler: typology, pick and why. When experience switches a pick, a written explanation comes first (why that group could back the more experienced candidate, and what they give up), followed by the case for the original pick “on fit alone.”',
        ],
      },
      {
        summary: 'Easier to read',
        bullets: [
          'Propositions and local measures now open with what’s on the ballot, what it costs, and the reasons to vote Yes and No side by side, with supporters and opponents under each. Background, who it affects, the detailed numbers and further reading are one tap away.',
          'In candidate races, background paragraphs and debate links are folded under “Background,” so what’s at stake, the experience comparison and the picks come first.',
          'Candidate cards lead with the bio, experience and red flags; positions, money, endorsements and notes fold under one tap.',
          'Proposition and local-measure write-ups were tightened so each fact appears once.',
          'Methodology is shorter and split into side-by-side blocks on wide screens.',
          'Reform California is now plain text, like every other endorsing group, with no logo or link.',
          'One consistent type scale on a 16px base, two weights and no all-caps labels; the experience tables use a smaller size to fit more on screen.',
          'Experience badges now read “Very experienced,” “Experienced,” “Some experience,” or “Little experience.”',
          'On phones, the section menu is a single swipeable row, and each race’s typology picks stack as cards with the full reasoning visible.',
        ],
      },
      {
        summary: 'San Diego: 92116',
        bullets: [
          'Normal Heights / Kensington / University Heights (92116), built from the Registrar’s sample ballots: CA-51, Assembly 78, Supervisor District 4, SDUSD Measure M, and, depending on your address, SDUSD District B, Community College District C and the new County Board of Education District 3 race (Muñoz vs. Brown). No State Senate or City Council race is on these ballots.',
        ],
      },
      {
        summary: 'City of San Diego: 32 more ZIPs',
        bullets: [
          'Every ZIP mainly in the City of San Diego now has its full local ballot, from La Jolla, Point Loma and Downtown to City Heights, Rancho Bernardo, Otay Mesa and San Ysidro, built from the Registrar’s ballot-type map and sample ballots.',
          'New contests: City Council District 8, SDUSD District C, the San Ysidro School District board, Poway Unified Trustee Areas B, C and D, Palomar College Trustee Area 1, Palomar Health Divisions 5 and 7, San Dieguito Union High Trustee Area 3, and Del Mar City Council.',
          'When a ZIP is split, each contest shows roughly what share of residents vote on it; contests reaching fewer than 8% of a ZIP are named in its note instead.',
        ],
      },
      {
        summary: 'Escondido: 3 more ZIPs',
        bullets: [
          'Central and south Escondido (92025), east Escondido (92027) and southwest Escondido / Felicita / Harmony Grove (92029) now have full local ballots, built from the Registrar’s ballot-type map and sample ballots, joining 92026.',
          'New contests: Escondido Union High Trustee Area 1 (Weller vs. Haines), Escondido Union School Trustee Areas 2 (Shulok vs. Ranglas) and 4 (Harper vs. Cascio), Palomar Health Division 3 (Edwards-Tate vs. Telahun) and Rincon del Diablo Water Division 3 (Hoving vs. Martinez).',
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
