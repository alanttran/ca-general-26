import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * City of Los Angeles measures on the Nov 3, 2026 General Municipal Election ballot
 * (consolidated with the statewide general election).
 *
 * Primary source for every measure: the City Clerk's Voter Information Pamphlet (version 201,
 * for City voters inside LAUSD, which carries all eight measures; version 101, for City voters
 * outside LAUSD, omits SC): ballot question, Chief Legislative Analyst impartial summary,
 * City Administrative Officer financial impact statement, and the printed arguments and signers.
 * Pamphlet ballot order: TE, LA, PL, EE, PRK, PRT, SC, FD.
 */

const PAMPHLET_URL = 'https://cityclerk.lacity.org/election/ENG201_NOV-2026_Voter_Info_Pamphlet.pdf';
const PAMPHLET_LINK = {
  label: 'City Clerk: Voter Information Pamphlet (Nov 2026)',
  url: PAMPHLET_URL,
  summary: 'Official ballot question, impartial summary, City Administrative Officer fiscal statement, arguments, and full text.',
};
const LAPP_GUIDE = {
  label: 'LA Public Press: guide to LA City and County measures (Oct 2026)',
  url: 'https://lapublicpress.org/2026/10/la-2026-election-ballot-measures-school-sheriff-city-fire/',
  summary: 'Plain-language rundown of every city and county measure on the November ballot.',
};
const CHARTER_COMMISSION_LINK = {
  label: 'LA Charter Reform Commission',
  url: 'https://reformlacharter.lacity.gov/about-commission',
  summary: 'The commission formed after the 2022 City Hall tapes scandal whose recommendations fed this year’s charter package.',
};

export const RACES_LA_CITY_MEASURES: Race[] = [
  // ───────────────────────────── TE ─────────────────────────────
  {
    id: 'la-measure-te',
    categoryId: 'local-measures',
    title: 'LA City Prop TE — Palisades Fire exemption from the ULA “mansion tax”',
    tldrLabel: 'LA Prop TE — ULA fire exemption',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Proposition TE would exempt sales of homes damaged or destroyed in the January 2025 Palisades Fire from Measure ULA, the 2022 voter-approved tax on property sales above about $5 million. Fire survivors who sell would keep more of the price; the fund for affordable housing and homelessness prevention would get less.',
    ],
    introParagraphs: [
      'Because voters adopted ULA, the City Attorney concluded the Council could not exempt anyone on its own. Councilmember Traci Park, whose district includes the Palisades, led the effort; the Council vote was 13-1, with Curren Price absent (LAist, Aug. 4, 2026).',
    ],
    measure: {
      explainerUrl: 'https://laist.com/news/politics/voter-guides/laist-los-angeles-city-voter-game-plan-prop-te',
      question:
        'Shall an ordinance be adopted to provide a one-time exemption from the City’s special documentary transfer tax (Proposition ULA) for residential properties that were damaged or destroyed in the Palisades Fire and are sold within five years of the date of the Fire?',
      yesMeans: 'Exempts or refunds the ULA tax on the first sale of a home damaged or destroyed in the Palisades Fire, if sold by its Jan. 7, 2025 owner by Jan. 6, 2030.',
      noMeans: 'Keeps the 4% to 5.5% ULA tax on fire-damaged properties sold above about $5.4 million, with that money still going to affordable housing and tenant aid.',
      funding: {
        asOf: 'Oct. 13, 2026',
        note: 'No committee has reported raising money for or against it. One group, AAPI Equity Alliance, reported $329.97 in independent spending urging a Yes vote (Oct. 9).',
        sources: [{ label: 'LA City Ethics Commission, 2026 ballot measure totals', url: 'https://ethics.lacity.gov/cfcs/Display/DisplayPanels.cfc?method=ElectionTotalsResults&useBS4Tabs=yes&showdates=yes&election_id=76' }],
      },
      positions: [
        { org: 'Los Angeles County Democratic Party', kind: 'party', position: 'Yes', url: 'https://www.lacdp.org/ballotmeasures' },
      ],
      measureType: 'Ordinance (tax exemption; placed by the City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'City Administrative Officer: no General Fund impact, but House LA Fund (ULA) revenue would fall by an estimated $35 million to $66 million through January 2030, depending on how many eligible properties sell. A May 2026 LA Housing Department estimate put the loss at up to 6% of ULA revenue, or $32 million a year (LAist).',
      supporters:
        'Argument in favor signed by Councilmember Traci Park, Mayor Karen Bass, Council President Marqueece Harris-Dawson, Councilmember Monica Rodriguez, State Sen. Ben Allen, Assemblymember Jacqui Irwin, LAUSD board member Nick Melvoin, LA/OC Building & Construction Trades Council, Western States Regional Council of Carpenters, and Pacific Palisades Community Council.',
      opponents: 'No argument against was submitted. On the Council, Eunisses Hernandez voted no, saying any exemption should be limited to homeowners whose primary residence was destroyed, not LLCs or investors (LAist).',
      voterConnection: [
        'Most voters pay nothing either way: ULA applies only to sales above about $5.4 million.',
        'Every exempted dollar comes out of citywide affordable housing, rental assistance, and eviction defense.',
        'It sets a precedent for how the City treats ULA after future disasters.',
      ],
      mechanismBullets: [
        'Covers residential property, including multi-family buildings, that Building and Safety verifies was damaged or destroyed in the fire (which began Jan. 7, 2025).',
        'Only owners as of Jan. 7, 2025, and only the first sale, through Jan. 6, 2030; ULA already paid may be refunded.',
        'ULA rates stay 4% above about $5.4 million and 5.5% at about $10.9 million or more.',
        'About 5,495 residential structures were damaged or destroyed (impartial summary).',
      ],
      argumentsFor: [
        'ULA targeted luxury deals, not people selling what is left of a home lost in a disaster.',
        'Survivors facing insurance gaps may have to sell to recover; a 4% to 5.5% tax deepens the loss.',
        'Narrow and temporary: one sale per property, original owners only, ending January 2030.',
        'Leaves ULA in place, with broad support from the Council, the Mayor, and building-trades unions.',
      ],
      argumentsAgainst: [
        'It takes money from affordable housing and homelessness prevention during a housing crisis.',
        'Only sellers of multimillion-dollar properties benefit, among the City’s wealthiest residents.',
        'No primary-residence or need test: LLCs, investors, and second-home owners qualify.',
        'One carve-out invites more that could erode the voter-approved tax.',
      ],
      readingLinks: [
        { label: 'LAist: What to know about Prop TE, suspending the “mansion tax” for fire victims', url: 'https://laist.com/news/politics/voter-guides/laist-los-angeles-city-voter-game-plan-prop-te', summary: 'Who qualifies, the 2030 cutoff, the lone council vote against, and the Housing Department’s revenue estimate.' },
        PAMPHLET_LINK,
        {
          label: 'LAist: council sends Palisades ULA exemption to voters (Aug. 4, 2026)',
          url: 'https://laist.com/news/los-angeles-ballot-measure-palisades-fire-mansion-tax-measure-ula-2026',
          summary: 'The 13-1 vote, revenue estimate, and Hernandez’s objections to the scope.',
        },
        {
          label: 'NBC Los Angeles: Palisades ULA measure',
          url: 'https://www.nbclosangeles.com/news/local/pacific-palisades-measure-ula/3925737/',
          summary: 'News coverage of the Council action.',
        },
        LAPP_GUIDE,
      ],
    },
    crossTypology: ct([
      ['LP', 'No', '●', 'Leftward Progressives want ULA’s mansion-tax money kept for affordable housing and tenant aid and object to a break for sellers of $5 million-plus properties with no primary-residence or need test.'],
      ['LL', 'Yes', '◐', 'Loyal Liberals tend to trust the Mayor, a 13-1 Council and the county Democratic Party on a narrow, time-limited disaster fix, while weighing the $35 million to $66 million lost to housing programs.'],
      ['LO', 'No', '◐', 'Left-Out Left voters, bothered that the wealthy don’t pay their share, see a carve-out open to LLCs and investors that is paid for with money meant for renters facing eviction.'],
      ['OO', 'No', '○', 'Order and Opportunity Left voters feel for fire survivors but care most about affordability, and this measure shifts money from rental assistance to sellers of multimillion-dollar properties, a weak lean.'],
      ['TM', 'No', '○', 'Tuned-Out Middle voters pay nothing either way, but the rental assistance and eviction defense that ULA funds are the kind of direct help they need, a weak lean against.'],
      ['PP', 'Yes', '◐', 'Pragmatic and Polite Right voters see a narrow, temporary fix with near-unanimous support that keeps a forced post-disaster sale from being taxed like a luxury deal.'],
      ['UR', 'Yes', '●', 'Unconventional Right voters favor lower taxes and see relief for fire survivors from a transfer tax they dislike as an easy call.'],
      ['FC', 'Yes', '●', 'Faith First Conservatives favor tax relief for families recovering from the fire and oppose ULA as a burden on property owners.'],
      ['NA', 'Yes', '●', 'No Apologies Right voters oppose ULA outright and welcome any cut in its reach, starting with fire survivors.'],
    ]),
    hinges: {
      LP: 'Yes if taxing a forced post-disaster sale of a burned lot isn’t what you think ULA’s luxury-deal tax was meant for. No if a break for $5 million-plus sellers, with no primary-residence or need test, shouldn’t come out of housing and tenant aid.',
      LL: 'Yes if a narrow relief fix that ends in January 2030 makes sense to you, as it did to the Mayor and a 13-1 Council. No if losing $35 million to $66 million for affordable housing and tenant aid outweighs the relief for you.',
      LO: 'Yes if you see survivors with insurance gaps, forced to sell what’s left, as people ULA was never meant to tax. No if money meant for renters and the unhoused shouldn’t fund a carve-out that LLCs and investors also get.',
      OO: 'Yes if compassion for families who lost homes in the fire comes first and the exemption ends in 2030. No if keeping rental assistance and eviction defense fully funded matters more than a break for high-end sellers.',
      TM: 'Yes if helping families who lost homes in the fire feels right, and it costs you nothing directly. No if the people who benefit are well-off sellers while housing help for everyone else shrinks.',
      PP: 'Yes if a narrow, time-limited fix with broad support from both the Mayor and the building trades is a fair correction. No if you’d rather not set a precedent of carving exceptions into a voter-approved tax after each disaster.',
      UR: 'Yes if lighter taxes on property sales and relief for disaster victims fit your values. No if a one-time carve-out that leaves ULA untouched for everyone else isn’t the reform you want.',
      FC: 'Yes if tax relief for families rebuilding after the fire comes first for you. No if a break with no need test, open to investors and second-home owners, isn’t the family relief you had in mind.',
      NA: 'Yes if any cut in ULA’s reach is a step in the right direction for you. No if you see a narrow exemption as a sideshow, since ULA stays in place for every other sale.',
    },
    counterArguments: [
      'LP (No ●): But consider Yes if you see ULA as a tax on luxury deals, because taxing a forced post-disaster sale of a burned lot is a use voters likely did not intend and the loss is a small share of ULA revenue.',
      'NA (Yes ●): But consider that this does not reform ULA, because every other sale above about $5.4 million stays taxed and the exemption ends in January 2030.',
      'OO (No ○): But consider Yes if fairness to disaster survivors weighs more, because many owners face insurance gaps and must sell what is left, and the exemption covers only one sale per original owner.',
    ],
  },

  // ───────────────────────────── LA ─────────────────────────────
  {
    id: 'la-measure-la',
    categoryId: 'local-measures',
    title: 'LA City Measure LA — Infrastructure plan, two-year budget, Public Works overhaul',
    tldrLabel: 'LA Measure LA — Budget & public works',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure LA rewrites how Los Angeles plans, budgets for, and builds infrastructure, and who is in charge. Supporters see overdue modernization for streets, sidewalks, and streetlights; the lone signed opponent sees the loss of a public, open-meeting check on billions in contracts after years of City Hall corruption cases.',
    ],
    introParagraphs: [
      'Placed on the ballot by the City Council as part of the charter package that grew out of the Charter Reform Commission formed after the 2022 City Hall tapes scandal. The Council set aside the commission’s larger ideas (a 25-member Council, ranked-choice voting) for further study.',
    ],
    measure: {
      question:
        'Shall the City Charter be amended to: establish a capital infrastructure plan and two-year budget cycle for the City; increase the authority of the Director of Public Works and allow for the elimination of or changes to the Board of Public Works; remove restrictions prohibiting the City from engaging in business enterprises and mortgaging City-owned property; and change certain contracting rules and procedures?',
      yesMeans: 'Amends the Charter to add a two-year budget and a capital infrastructure plan, give the Public Works Director more power, allow mortgaging City property and business ventures, and change contracting rules.',
      noMeans: 'Keeps the one-year budget, the full-time Board of Public Works, the bans on mortgaging City property and on commercial enterprises, and current contracting rules.',
      funding: {
        asOf: 'Oct. 13, 2026',
        note: 'No committee has reported raising money for or against it. One group, AAPI Equity Alliance, reported $379.97 in independent spending urging a Yes vote (Oct. 9).',
        sources: [{ label: 'LA City Ethics Commission, 2026 ballot measure totals', url: 'https://ethics.lacity.gov/cfcs/Display/DisplayPanels.cfc?method=ElectionTotalsResults&useBS4Tabs=yes&showdates=yes&election_id=76' }],
      },
      positions: [
        { org: 'Los Angeles County Democratic Party', kind: 'party', position: 'No', url: 'https://www.lacdp.org/ballotmeasures' },
        { org: 'Los Angeles Daily News editorial board', kind: 'editorial', position: 'No', url: 'https://www.dailynews.com/2026/10/10/endorsement-no-on-los-angeles-charter-amendments-la-ee-prk-prt-yes-on-pl/' },
      ],
      measureType: 'Charter amendment (placed by the City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'City Administrative Officer: $4 million to $6 million in one-time General Fund costs to set up the two-year budget and capital plan (systems, training, consultants); ongoing costs absorbed by reorganizing existing resources. The effects of the contracting, mortgage, and business-enterprise changes cannot be quantified.',
      supporters:
        'Argument in favor signed by Controller Kenneth Mejia, Councilmembers Katy Yaroslavsky and Bob Blumenfield, former Controller Ron Galperin, Investing in Place (Jessica Meaney), LA Forward (David Levitus), and Streets For All (Michael Schneider).',
      opponents: 'Argument against signed by Councilmember Monica Rodriguez (District 7).',
      voterConnection: [
        'It changes who fixes potholes, sidewalks, and streetlights, but raises no taxes and funds no repairs; results depend on how leaders use the new tools.',
        'Contracts now approved by the Board of Public Works in public meetings could instead fall to a Director reporting to the Mayor and Council.',
        'New powers to mortgage property and run businesses bring new financing options and new financial risk.',
      ],
      mechanismBullets: [
        'Two-year budget: the Mayor proposes by April 1, the Council acts by June 1 and still approves yearly appropriations; the cycle can change by ordinance.',
        'Capital plan for roads, parks, bridges, and buildings, with details set by ordinance.',
        'The Director of Public Works gains power over construction, property purchases and leases, eminent domain (with Council approval), contracts, and street permits. The five-member, full-time Board keeps contract awards unless the Council changes or abolishes it by ordinance.',
        'Bidding exemptions for software services bought from the maker and, by ordinance, for critical infrastructure contracts vital to security, public health, or safety.',
        'Minor technical errors on bid forms may be waived by ordinance; substantive ethics-form errors must still be corrected.',
      ],
      argumentsFor: [
        'LA has no required long-range infrastructure plan; one would help fix problems before they cost more.',
        'Two-year budgeting makes leaders account for next year’s costs, which the City Controller says the City badly needs.',
        'One accountable Director runs Public Works; the Controller still audits it.',
        'Dropping outdated Charter limits lets the City use its assets and buy software and urgent work efficiently.',
      ],
      argumentsAgainst: [
        'Abolishing the Board of Public Works would remove an open-meeting check on contracting after repeated corruption scandals (Rodriguez).',
        'The capital plan could be adopted by ordinance without the riskier changes bundled here.',
        'Mortgages and business ventures add financial risk the City’s own analyst cannot estimate.',
        'Bidding exceptions, even for “critical infrastructure,” can be stretched and invite favoritism.',
      ],
      readingLinks: [
        PAMPHLET_LINK,
        LAPP_GUIDE,
        CHARTER_COMMISSION_LINK,
        { label: 'LAist: What you need to know to vote on Charter Amendment LA (Sep 29)', url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-los-angeles-charter-amendment-la', summary: 'Voter guide on the two-year budget, Public Works changes and contracting rules, with what supporters and Councilmember Monica Rodriguez say.' },
      ],
      explainerUrl: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-los-angeles-charter-amendment-la',
    },
    crossTypology: ct([
      ['LP', 'Yes', '◐', 'Leftward Progressives back Controller Kenneth Mejia and the transit and street-safety groups on long-range infrastructure planning, and are open to the City running its own enterprises, while noting the loss of a public contracting board.'],
      ['LL', 'Yes', '◐', 'Loyal Liberals value expert-style modernization such as two-year budgets and a capital plan that the Controller says the City badly needs, though the county Democratic Party opposes the package.'],
      ['LO', 'No', '◐', 'Left-Out Left voters distrust City Hall insiders and see moving contract approvals away from an open-meeting board as the wrong move after the corruption cases.'],
      ['OO', 'Yes', '○', 'Order and Opportunity Left voters want working streets, sidewalks and streetlights and lean toward a plan meant to fix them sooner, weakly, given the bundled risks.'],
      ['TM', 'No', '○', 'Tuned-Out Middle voters get no tax relief or direct help here and distrust a complex shift of contracting power at City Hall, a weak lean against.'],
      ['PP', 'Yes / No', '=', 'Pragmatic and Polite Right voters like two-year budgets but prefer cautious, incremental change: if multi-year budgeting and a real plan for City infrastructure matter most, Yes; if the risks of mortgaging City property and running businesses, which the City’s own analyst cannot estimate, weigh more, No.'],
      ['UR', 'No', '◐', 'Unconventional Right voters want smaller government and oppose letting the City mortgage public property, run commercial ventures and loosen bidding rules.'],
      ['FC', 'No', '○', 'Faith First Conservatives favor limited government and lean against expanding City Hall’s financial powers, though multi-year budgeting appeals to them.'],
      ['NA', 'No', '◐', 'No Apologies Right voters distrust City Hall and oppose giving it new powers to borrow against property, run businesses and skip competitive bidding.'],
    ]),
    hinges: {
      LP: 'Yes if a long-range plan for neglected streets, backed by the Controller and street-safety and transit groups, is overdue. No if losing the Board of Public Works, an open-meeting check on contracts, is too high a price.',
      LL: 'Yes if two-year budgets, a capital plan and one accountable Public Works Director are the modernization you want. No if the best parts could be done by ordinance, without lasting Charter changes on mortgages and business ventures that have no cost estimate.',
      LO: 'Yes if long-range planning and one accountable manager would finally get neglected infrastructure fixed. No if moving contracts away from a public, open-meeting board is the wrong move after the corruption cases.',
      OO: 'Yes if better streets, sidewalks and streetlights matter most, as the Controller and Council sponsors argue. No if fewer open-meeting checks on contracts worry you more; the county Democratic Party opposes it.',
      TM: 'Yes if you want City Hall to plan repairs years ahead, and it raises no taxes. No if a long list of complex power shifts is too hard to judge and you’d rather keep what you know.',
      PP: 'Yes if multi-year budgeting and a capital plan are the prudent planning the City has lacked. No if mortgages, business ventures and bidding exemptions are risky changes better left out of the Charter.',
      UR: 'Yes if one accountable Director, still audited by the Controller, beats a board you don’t trust either. No if new powers to mortgage City property and run businesses mean bigger government with risks no one can price.',
      FC: 'Yes if a long-range plan and two-year budgets would make City Hall spend more carefully. No if it expands City government’s financial powers, including mortgages and business ventures, more than you’re comfortable with.',
      NA: 'Yes if multi-year budgeting and a single accountable manager would rein in City Hall’s spending. No if letting the City mortgage public property, run businesses and skip bidding for some contracts is a line you won’t cross.',
    },
    counterArguments: [
      'UR (No ◐): But consider Yes if budget discipline matters most, because two-year budgeting and a capital plan are central to the measure and the Controller keeps full audit power.',
      'LL (Yes ◐): But consider No if you want reform without new risk, because the capital plan could be adopted by ordinance, while abolishing a public board and allowing mortgages are lasting Charter changes with no cost estimate.',
    ],
  },

  // ───────────────────────────── PL ─────────────────────────────
  {
    id: 'la-measure-pl',
    categoryId: 'local-measures',
    title: 'LA City Measure PL — Planning appeals and land-use decisions',
    tldrLabel: 'LA Measure PL — Planning reform',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure PL shifts land-use decisions toward professional staff, one citywide appeals body, and firm Council deadlines. That favors speed and predictability for housing and development, while neighborhood groups lose regional appeal bodies and the Council loses room to stall cases.',
    ],
    introParagraphs: [
      'Placed on the ballot by the City Council as part of the charter reform package. The Engineers & Architects Association, which signed the argument in favor, is the union representing many City planners.',
    ],
    measure: {
      question:
        'Shall the City Charter be amended to: establish a Neighborhood Appeals Commission to replace Area Planning Commissions and establish a process for City Council review of Neighborhood Appeals Commission and City Planning Commission decisions; change the timing and process for City Council action on certain planning decisions; grant the Planning Department the authority to investigate, hear, and determine applications for quasi-judicial review; and allow for changes to floor area regulations by ordinance?',
      yesMeans: 'Amends the Charter to replace seven Area Planning Commissions with one citywide appeals body, set Council deadlines on land-use cases, and let the Council change the density cap by ordinance.',
      noMeans: 'Keeps the seven Area Planning Commissions, current Council review of planning decisions, appeal rights in the Charter, and the floor area limit of 13 times buildable area.',
      related: [
        { raceId: 'la-measure-ee', note: 'Both rewrite Charter Section 245 on Council review of commission actions: EE replaces the general five-meeting-day window with 15 calendar days, and PL rewrites the planning-commission exception.' },
      ],
      funding: {
        asOf: 'Oct. 13, 2026',
        note: 'No committee has reported raising money for or against it.',
        sources: [{ label: 'LA City Ethics Commission, 2026 ballot measure totals', url: 'https://ethics.lacity.gov/cfcs/Display/DisplayPanels.cfc?method=ElectionTotalsResults&useBS4Tabs=yes&showdates=yes&election_id=76' }],
      },
      positions: [
        { org: 'Los Angeles County Democratic Party', kind: 'party', position: 'No position', url: 'https://www.lacdp.org/ballotmeasures' },
        { org: 'Los Angeles Daily News editorial board', kind: 'editorial', position: 'Yes', url: 'https://www.dailynews.com/2026/10/10/endorsement-no-on-los-angeles-charter-amendments-la-ee-prk-prt-yes-on-pl/' },
      ],
      measureType: 'Charter amendment (placed by the City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'City Administrative Officer: no revenue impact; annual commission staffing costs fall by about $360,000 (from $1.1 million to $740,000), benefiting the Planning Case Processing Special Fund, which the General Fund subsidizes.',
      supporters: 'Argument in favor signed by Raymond Meza (Chair, Charter Reform Commission) and Roy Samaan (President, Engineers & Architects Association).',
      opponents: 'No argument against was submitted. La Defensa’s voter guide (an advocacy group) recommends No.',
      voterConnection: [
        'An appeal of a nearby project would go to one citywide commission instead of a regional one drawn from your part of the City.',
        'Faster, more predictable permitting can help housing get built, but leaves neighbors fewer chances to slow a project.',
        'The Charter’s density cap could be changed by a Council vote instead of a citywide election.',
      ],
      mechanismBullets: [
        'Replaces seven Area Planning Commissions (35 commissioners) with one Neighborhood Appeals Commission of at least seven members that hears appeals fresh.',
        'Planning Department staff decide variances, conditional use permits, and similar quasi-judicial applications.',
        'Moves appeal rights and procedures for plan amendments, zone changes, variances, and conditional use permits from the Charter to ordinance.',
        'When the Council takes over a case, the commission has 30 days to respond; if the Council then misses a 21-day deadline, the commission’s decision stands.',
        'General Plan Amendments are approved if the Council does not act within 75 days (today, inaction means disapproval).',
        'The Council can change the Floor Area Restriction (now 13 times buildable area) by ordinance.',
      ],
      argumentsFor: [
        'Clear rules and deadlines leave less room for political favors in land-use decisions, a theme of the City Hall corruption cases (pamphlet argument).',
        'Routine decisions by professional staff can speed permits for housing and small businesses.',
        'One citywide appeals body should apply rules more consistently than seven, at lower cost.',
        'Procedures in ordinance can be updated without a citywide election.',
      ],
      argumentsAgainst: [
        'One citywide commission is further from neighborhoods, and who sits on it is left to a later ordinance.',
        'Automatic approval of General Plan Amendments flips the default toward development.',
        'Appeal rights moved out of the Charter can later be changed by the Council without a public vote.',
        'Letting the Council lift the density cap removes a voter-level check.',
      ],
      readingLinks: [
        PAMPHLET_LINK,
        LAPP_GUIDE,
        CHARTER_COMMISSION_LINK,
        { label: 'La Defensa voter guide (advocacy group; recommends No)', url: 'https://ladefensa.org/2026-voter-guide-8/', summary: 'A progressive advocacy group’s recommendations on the City measures; opinion.' },
        { label: 'LAist: Charter Amendment PL, streamlining the city’s planning process (Oct 14)', url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-city-charter-amendment-pl-planning-process', summary: 'Voter guide on the single Neighborhood Appeals Commission and new planning deadlines, with who supports it and the lack of filed opposition.' },
      ],
      explainerUrl: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-city-charter-amendment-pl-planning-process',
    },
    crossTypology: ct([
      ['LP', 'No', '○', 'Leftward Progressives want more housing but distrust developer-friendly streamlining, and automatic approval of General Plan Amendments plus fewer neighborhood appeals lead them to lean No, as La Defensa recommends.'],
      ['LL', 'Yes', '●', 'Loyal Liberals trust professional planners and rules-based decisions, and firm deadlines leave Council members less room to trade favors on projects.'],
      ['LO', 'No', '○', 'Left-Out Left voters distrust both Council insiders and developers, and lean against a change that gives unelected staff more power and neighborhoods less say.'],
      ['OO', 'Yes', '○', 'Order and Opportunity Left voters value opportunity for homebuyers and small businesses, which faster, more predictable permits could help, a weak lean.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters feel housing costs most and lean toward faster permits that could add supply, though the measure is far from their daily concerns.'],
      ['PP', 'Yes', '◐', 'Pragmatic and Polite Right voters value competent, consistent rules and the anti-corruption logic of deadlines, plus about $360,000 a year in savings, while noting the density cap moves to ordinance.'],
      ['UR', 'Yes', '◐', 'Unconventional Right voters want less red tape and leaner government, and the measure cuts commissions and speeds permitting.'],
      ['FC', 'No', '○', 'Faith First Conservatives value neighborhood control and a voter-level check on density near family homes, a weak lean against.'],
      ['NA', 'Yes', '○', 'No Apologies Right voters favor cutting permitting delays, though giving unelected planners more power tempers the lean.'],
    ]),
    hinges: {
      LP: 'Yes if faster housing approvals and fewer chances to stall projects come first for you. No if neighborhoods losing their regional appeal boards and a say against developers worries you, as it does La Defensa.',
      LL: 'Yes if professional, rules-based decisions with firm deadlines leave less room for Council members to trade favors. No if moving appeal rights and the density cap into ordinance gives future Councils too much room to change them.',
      LO: 'Yes if Council members sitting on projects, the discretion behind past bribery cases, worries you more than staff power. No if handing more authority to planners and one commission leaves neighborhoods with less say against developers.',
      OO: 'Yes if faster, more predictable permits for housing and small businesses would open opportunities. No if one citywide appeals body feels too far from your neighborhood and you want appeal rights kept in the Charter.',
      TM: 'Yes if faster, more predictable permits for housing and small businesses would help you. No if a complicated change that cuts local input on nearby projects isn’t one you want to approve.',
      PP: 'Yes if consistent rules, firm deadlines and lower administrative costs are the competent fix you want. No if moving appeal rights and the density cap out of the Charter is a bigger, less reversible change than you like.',
      UR: 'Yes if cutting red tape and administrative costs, with staff deciding routine cases, appeals to you. No if letting the Council lift the density cap without a citywide vote goes too far for you.',
      FC: 'Yes if quicker, more consistent decisions on projects outweigh keeping regional appeal boards. No if neighborhood control over development, and a voter-level check on density, matter more to you.',
      NA: 'Yes if streamlined permitting and fewer hurdles to building are what you want from City Hall. No if more power for unelected planners and an easier path to more density near homes is the bigger worry.',
    },
    counterArguments: [
      'LL (Yes ●): But consider No if you want voters to keep the final say, because the measure moves appeal rights and the density cap from the Charter to ordinance, so future Councils gain room to change them.',
      'LP (No ○): But consider Yes if housing supply is your priority, because firm deadlines and staff decisions speed permits and limit the Council discretion that fed past bribery cases.',
    ],
  },

  // ───────────────────────────── EE ─────────────────────────────
  {
    id: 'la-measure-ee',
    categoryId: 'local-measures',
    title: 'LA City Measure EE — Ethics, police/fire oversight, Council meetings',
    tldrLabel: 'LA Measure EE — Ethics & governance',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure EE pairs stronger ethics rules and police and fire oversight with changes that reduce public access: fewer required Council meetings and a higher bar for referendums. Supporters call the meeting change modernization; the signed opponent says it cuts public access, and it is the most disputed piece.',
    ],
    introParagraphs: [
      'Placed on the ballot by the City Council from the charter reform package.',
    ],
    measure: {
      question:
        'Shall the City Charter be amended to: increase the authority of the Police Department Inspector General and Fire Department Independent Assessor; prohibit Ethics Commissioners from running for certain elected offices for five years; increase penalties for campaign finance violations; require City Council to meet at least weekly rather than the currently required three days per week; increase referendum petition signature requirements; and make other changes regarding ethics, elections and governance?',
      yesMeans: 'Strengthens police and fire watchdogs, raises campaign-finance penalties, bars ethics commissioners from running for five years, requires Council meetings weekly instead of three days a week, and raises referendum signatures to 15%.',
      noMeans: 'Keeps current ethics penalties and watchdog rules, the three-day-a-week Council meeting requirement, and the 10% signature threshold for referendums.',
      related: [
        { raceId: 'la-measure-pl', note: 'Both rewrite Charter Section 245 on Council review of commission actions: EE sets the general window at 15 calendar days, and PL rewrites the exception for planning commissions.' },
      ],
      funding: {
        asOf: 'Oct. 13, 2026',
        note: 'No committee has reported raising money for or against it. One group, AAPI Equity Alliance, reported $379.97 in independent spending urging a Yes vote (Oct. 9).',
        sources: [{ label: 'LA City Ethics Commission, 2026 ballot measure totals', url: 'https://ethics.lacity.gov/cfcs/Display/DisplayPanels.cfc?method=ElectionTotalsResults&useBS4Tabs=yes&showdates=yes&election_id=76' }],
      },
      positions: [
        { org: 'Los Angeles County Democratic Party', kind: 'party', position: 'No', url: 'https://www.lacdp.org/ballotmeasures' },
        { org: 'Los Angeles Daily News editorial board', kind: 'editorial', position: 'No', url: 'https://www.dailynews.com/2026/10/10/endorsement-no-on-los-angeles-charter-amendments-la-ee-prk-prt-yes-on-pl/' },
      ],
      measureType: 'Charter amendment (placed by the City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'City Administrative Officer: fewer Council meetings may save General Fund money on translation and closed captioning; more independent police and fire audits may require more investigators or outside auditors at a cost that cannot be determined. Other changes have no expected fiscal effect.',
      supporters:
        'Argument in favor signed by Councilmembers Tim McOsker, Katy Yaroslavsky, Marqueece Harris-Dawson, and Eunisses Hernandez, and Charter Reform Commissioner Diego Andrades.',
      opponents: 'Argument against signed by Councilmember Monica Rodriguez (District 7).',
      voterConnection: [
        'The Council would hold fewer required public sessions; the opponent notes Valley residents already get Council meetings in their area at most once a month.',
        'Overturning a Council-passed law by referendum would take 50% more signatures than today.',
      ],
      mechanismBullets: [
        'Police and Fire commissions lose the power to stop Inspector General or Independent Assessor investigations and audits.',
        'Campaign-finance penalties up to $15,000 (inflation-adjusted) or three times the amount at issue, whichever is greater, per violation.',
        'Ethics commissioners and the executive director may not run for City or LAUSD board office for five years.',
        'Referendum signatures rise from 10% to 15% of the last mayoral vote, matching initiatives.',
        'Review deadlines for commission actions become 15 calendar days (21 for removing a police chief).',
        'Also: language-access policies, Police and Fire protected from purpose-altering transfers, and Neighborhood Council stakeholders defined by ordinance.',
      ],
      argumentsFor: [
        'Oversight of the LAPD and LAFD is stronger when commissions cannot halt an Inspector General or Assessor investigation.',
        'Higher penalties and a cooling-off period make the City’s ethics rules harder to shrug off.',
        'A three-day-a-week meeting mandate is unusual among big cities and keeps members from district work; one predictable weekly meeting is easier to plan around (supporters).',
      ],
      argumentsAgainst: [
        'After years of City Hall corruption cases, fewer required meetings mean fewer chances for residents to watch and comment (Rodriguez).',
        'A higher signature bar makes it harder to challenge laws the Council passes.',
        'Popular ethics provisions are bundled with cuts to public access in one Yes/No vote.',
      ],
      readingLinks: [
        PAMPHLET_LINK,
        LAPP_GUIDE,
        CHARTER_COMMISSION_LINK,
        { label: 'LAist: Charter Amendment EE, making politicians more accountable? (Oct 14)', url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-city-charter-amendment-ee', summary: 'Voter guide on the weekly Council meeting change, ethics and oversight provisions, with supporters’ and opponents’ arguments.' },
      ],
      explainerUrl: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-city-charter-amendment-ee',
    },
    crossTypology: ct([
      ['LP', 'Yes', '◐', 'Leftward Progressives want independent police oversight that commissions cannot stop and tougher campaign-finance penalties, though a higher referendum bar cuts against grassroots challenges.'],
      ['LL', 'Yes', '◐', 'Loyal Liberals value stronger ethics institutions and watchdogs, weighing the cut in public meetings and the county Democratic Party’s opposition.'],
      ['LO', 'Yes / No', '=', 'Left-Out Left voters like tougher ethics penalties but already feel unheard at City Hall: if punishing corruption by insiders matters most, Yes; if keeping their access matters more, No, since fewer required Council meetings and 50% more signatures for a referendum cut it further.'],
      ['OO', 'Yes', '○', 'Order and Opportunity Left voters like stronger ethics rules and a predictable schedule, weakly, since they also trust police and may not want commissions sidelined.'],
      ['TM', 'No', '○', 'Tuned-Out Middle voters distrust officials and lean against changes that give the public fewer chances to be heard at City Hall.'],
      ['PP', 'Yes', '○', 'Pragmatic and Polite Right voters value ethics and rule of law and a less chaotic Council schedule, a weak lean given their trust in police commissions.'],
      ['UR', 'No', '◐', 'Unconventional Right voters distrust City Hall and oppose making referendums harder while reducing public Council meetings.'],
      ['FC', 'No', '◐', 'Faith First Conservatives oppose loosening commission control over police investigations and limiting citizens’ ability to challenge Council laws.'],
      ['NA', 'No', '◐', 'No Apologies Right voters oppose expanding inspector-general power over police and raising the bar for referendums against Council laws.'],
    ]),
    hinges: {
      LP: 'Yes if stronger police oversight and tougher campaign-finance penalties are worth fewer required Council meetings. No if a higher signature bar for referendums, a tool progressive groups have used, is a deal-breaker.',
      LL: 'Yes if stronger ethics rules and one predictable weekly Council meeting are the modernization you want. No if bundling popular ethics provisions with cuts to public access in one vote bothers you; the county Democratic Party opposes it.',
      LO: 'Yes if police and fire watchdogs that commissions can no longer stop, and tougher penalties, matter most to you. No if fewer public Council meetings and 50% more signatures for a referendum cut public access too much.',
      OO: 'Yes if stronger ethics rules and penalties at City Hall matter most to you. No if fewer public meetings and weaker commission control over police investigations outweigh the ethics gains.',
      TM: 'Yes if tougher penalties for campaign-finance violations feel worth a simpler Council schedule. No if fewer required public meetings mean fewer chances for people like you to be heard at City Hall.',
      PP: 'Yes if stiffer campaign-finance penalties and a cooling-off period for ethics officials are the rule-of-law fix you want. No if making it harder to challenge Council laws by referendum outweighs the ethics gains.',
      UR: 'Yes if higher penalties and barring ethics officials from using the post as a launchpad are the accountability you want. No if fewer public Council meetings and a harder path to referendums cut the public out.',
      FC: 'Yes if stronger ethics rules and penalties for campaign-finance violations matter most to you. No if loosening commission control over police investigations and limiting direct democracy are lines you won’t cross.',
      NA: 'Yes if tougher campaign-finance penalties and ethics rules at City Hall outweigh your other concerns. No if letting the inspector general probe police without commission control, plus a higher referendum bar, goes too far.',
    },
    counterArguments: [
      'UR (No ◐): But consider Yes if City Hall corruption is your main concern, because the measure raises campaign-finance penalties to $15,000 or triple the amount and bars ethics officials from running for five years.',
      'LP (Yes ◐): But consider No if grassroots power matters most, because the referendum threshold rises 50%, making it harder to challenge Council laws.',
    ],
  },

  // ───────────────────────────── PRK ─────────────────────────────
  {
    id: 'la-measure-prk',
    categoryId: 'local-measures',
    title: 'LA City Measure PRK — Double the guaranteed parks budget',
    tldrLabel: 'LA Measure PRK — Parks budget',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure PRK doubles the guaranteed parks budget without raising taxes, so the money comes out of the same General Fund that pays for police, fire, streets, and homeless services. Supporters point to neglected parks; the City’s fiscal analyst warns other services would lose money to pay for it.',
    ],
    introParagraphs: [
      'Placed on the ballot by the City Council as part of the charter package. No argument against was submitted, but LAist reports the City’s fiscal analysts recommended against doubling the budget without new revenue.',
    ],
    measure: {
      explainerUrl: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-charter-amendment-prk',
      question:
        'Shall the City Charter be amended to increase the minimum budget allocated to the Department of Recreation and Parks, phased in over ten years until it is double the current minimum budget allocation, with exceptions for fiscal emergencies?',
      yesMeans: 'Doubles the Charter’s minimum General Fund budget for Recreation and Parks over ten years, from 0.0325% to 0.065% of assessed property value, with no new tax, so other services get less.',
      noMeans: 'Keeps the parks minimum at 0.0325% of assessed property value, leaving any added parks money to the Council’s yearly budget choices.',
      related: [
        { raceId: 'la-measure-fd', note: 'FD’s tax can be levied only if LAFD keeps its 10-year average share of discretionary General Fund money, and this measure’s larger parks set-aside draws on that same General Fund.' },
      ],
      funding: {
        asOf: 'Sept. 19, 2026',
        yes: { raised: '$5,000', topDonors: ['Los Angeles Neighborhood Land Trust ($5,000)'] },
        note: 'The Yes committee is a project of the Trust for Public Land. No committee has reported raising money against it. Teachers unions and AAPI Equity Alliance reported about $700 in independent spending for it.',
        sources: [
          { label: 'LA City Ethics Commission, 2026 ballot measure totals', url: 'https://ethics.lacity.gov/cfcs/Display/DisplayPanels.cfc?method=ElectionTotalsResults&useBS4Tabs=yes&showdates=yes&election_id=76' },
          { label: 'LA City open data, campaign contributions (Yes on PRK, statement through Sept. 19)', url: 'https://data.lacity.org/d/m6g2-gc6c' },
        ],
      },
      positions: [
        { org: 'Los Angeles County Democratic Party', kind: 'party', position: 'Yes', url: 'https://www.lacdp.org/ballotmeasures' },
        { org: 'Los Angeles Daily News editorial board', kind: 'editorial', position: 'No', url: 'https://www.dailynews.com/2026/10/10/endorsement-no-on-los-angeles-charter-amendments-la-ee-prk-prt-yes-on-pl/' },
      ],
      measureType: 'Charter amendment (budget set-aside; placed by the City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'City Administrative Officer: parks funding grows from $303 million to $995 million by 2036-37; the added amount from this measure is estimated at $32 million in 2027-28, rising to $497 million in 2036-37 (subject to property value growth). Because it raises no revenue, the City must reallocate money from other services, including public safety, public works, and homeless services.',
      supporters:
        'Argument in favor signed by Councilmembers Monica Rodriguez, Ysabel Jurado, and Imelda Padilla; Controller Kenneth Mejia; Recreation and Parks Commissioner Tefarai Bayne; Father Gregory Boyle (Homeboy Industries); Boys & Girls Club of San Fernando Valley; LA Neighborhood Land Trust; LA Waterkeeper; and others.',
      opponents: 'No argument against was submitted.',
      voterConnection: [
        'Parks, pools, and recreation and senior centers would get more; other City services would get less.',
        'The pamphlet argument says one-third of Angelenos lack a park within a ten-minute walk and that pools and centers have cut hours.',
        'Once in the Charter, the set-aside can only be undone by another citywide vote.',
      ],
      mechanismBullets: [
        'The set-aside rises from 0.0325% to 0.065% of assessed City property value in annual steps of 0.00325 points, 2027-28 through 2036-37.',
        'A two-thirds Council vote declaring a fiscal emergency can cut the added funding by up to 30%, never below 0.0325%.',
        'Recreation and Parks still reimburses the General Fund for employee benefits.',
        'Supporters say spending must follow annual plans reviewed in public and posted online (pamphlet argument).',
        'The 1996 Prop K parks assessment, about $25 million a year, expires in fiscal 2026-27 (impartial summary).',
      ],
      argumentsFor: [
        'LA ranks 93rd of the 100 largest U.S. cities for parks (Trust for Public Land 2026 ParkScore), and facilities need almost $3 billion in repairs (pamphlet argument).',
        'Parks, pools, and centers serve kids, seniors, and low-income families and host violence-intervention programs and emergency shelters.',
        'No new tax, a slow phase-in, and an emergency safety valve.',
        'The guaranteed parks share has not grown in decades; the population has.',
      ],
      argumentsAgainst: [
        'The money must come from police, fire, public works, and homeless services during deficits, per the City’s fiscal analyst.',
        '“Ballot-box budgeting” locks a growing share into the Charter and limits yearly choices.',
        'By 2036-37 the increase would exceed what Measure FD would raise for the Fire Department.',
        'The emergency valve trims only part of the increase and needs a two-thirds vote.',
      ],
      readingLinks: [
        PAMPHLET_LINK,
        {
          label: 'LAist: Charter Amendment PRK guide (updated Oct. 7, 2026)',
          url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-charter-amendment-prk',
          summary: 'Current parks budget, supporters, and the fiscal analysts’ concerns.',
        },
        LAPP_GUIDE,
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes', '●', 'Leftward Progressives favor shifting City money toward parks, pools and youth programs in underserved neighborhoods, even if it means less for police.'],
      ['LL', 'Yes', '○', 'Loyal Liberals support parks and follow the county Democratic Party and the Controller, but the City’s fiscal analysts warn against an unfunded mandate during deficits, so the lean is weak.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters want services for working families, and more park, pool and center hours with no new tax fit that, though they want accountability for how the money is spent.'],
      ['OO', 'No', '○', 'Order and Opportunity Left voters value parks for families but put public safety first, and the City’s analyst says the money would come partly from police and fire, a weak lean against.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters benefit from free and low-cost parks, pools and centers and pay no new tax, a weak lean.'],
      ['PP', 'No', '◐', 'Pragmatic and Polite Right voters value fiscal prudence and oppose locking a growing set-aside into the Charter during deficits against the City analyst’s advice.'],
      ['UR', 'No', '◐', 'Unconventional Right voters put crime and lean government first and oppose a mandate that could take money from police and fire.'],
      ['FC', 'No', '◐', 'Faith First Conservatives favor limited government and law and order, and oppose ballot-box budgeting that could cut public safety.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose growing government spending mandates, especially ones the City says would draw money from police.'],
    ]),
    hinges: {
      LP: 'Yes if park equity, green space and youth programs in underserved neighborhoods deserve a bigger guaranteed share. No if the money coming partly from homeless services, per the City’s analyst, is too high a cost.',
      LL: 'Yes if parks that supporters say need almost $3 billion in repairs justify a slow phase-in with an emergency valve. No if you heed the City’s fiscal analysts against a large mandate with no new revenue during deficits.',
      LO: 'Yes if shifting City money toward community services and away from the status quo budget is what you want. No if you’d rather not take money from homeless services, which the City’s analyst says could lose funding.',
      OO: 'Yes if parks and youth programs, which supporters say host violence-intervention work, count as public safety to you. No if police and fire, which the City’s analyst says could lose money to this mandate, come first.',
      TM: 'Yes if free and low-cost parks, pools and centers matter to you and you won’t pay a new tax. No if other services you rely on, like police, fire or street repair, would get less to pay for it.',
      PP: 'Yes if a long-neglected budget line, phased in slowly with an emergency valve, seems a modest, careful fix. No if locking a growing share of the budget into the Charter during deficits is imprudent.',
      UR: 'Yes if parks money that hasn’t grown in decades, with a slow phase-in and emergency valve, seems a fair fix. No if locking a growing share of the budget into the Charter at public safety’s expense is a mistake.',
      FC: 'Yes if parks, pools and centers for kids and seniors are worth a growing share with no new tax. No if public safety funding comes first and shouldn’t lose money to a parks mandate.',
      NA: 'Yes if you’d rather steer existing money than raise taxes, since PRK adds no tax. No if ballot-box budgeting that crowds out police and limits yearly choices is something you oppose.',
    },
    counterArguments: [
      'LP (Yes ●): But consider No if homelessness is your top concern, because without new revenue the City’s own analyst says the money will come partly from homeless services.',
      'NA (No ●): But consider Yes if you prefer reprioritizing to new taxes, because PRK raises no tax, phases in over ten years and can be trimmed in a declared fiscal emergency.',
    ],
  },

  // ───────────────────────────── PRT ─────────────────────────────
  {
    id: 'la-measure-prt',
    categoryId: 'local-measures',
    title: 'LA City Measure PRT — Port, airport, and DWP leases and boards',
    tldrLabel: 'LA Measure PRT — Port & airports',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure PRT changes rules for the Port, LAX and Van Nuys airports, and DWP, which run on their own revenue, not the General Fund. Much of it codifies current practice; the real choices are longer leases on airport and utility land and more neighborhood seats on the airport board.',
    ],
    introParagraphs: [
      'Placed on the ballot by the City Council. Two of the Councilmembers who signed the argument in favor represent the Port (Tim McOsker) and LAX (Traci Park).',
    ],
    measure: {
      question:
        'Shall the City Charter be amended to: require the Harbor Department to allocate funds for waterfront public access projects; require disclosure of workforce impacts for certain Harbor Department leases and agreements; increase maximum terms for certain leases; and change the composition requirement for the Airport Commission?',
      yesMeans: 'Allows 66-year airport and DWP leases, requires five of seven airport commissioners from near LAX or Van Nuys, mandates Port waterfront spending, and requires workforce-impact disclosure for some Port projects.',
      noMeans: 'Keeps the 50-year cap on airport and DWP leases, one commissioner each from near LAX and Van Nuys, and Port waterfront spending as a practice rather than a Charter rule.',
      funding: {
        asOf: 'Oct. 13, 2026',
        note: 'No committee has reported raising money for or against it. One group, AAPI Equity Alliance, reported $379.97 in independent spending urging a Yes vote (Oct. 9).',
        sources: [{ label: 'LA City Ethics Commission, 2026 ballot measure totals', url: 'https://ethics.lacity.gov/cfcs/Display/DisplayPanels.cfc?method=ElectionTotalsResults&useBS4Tabs=yes&showdates=yes&election_id=76' }],
      },
      positions: [
        { org: 'Los Angeles County Democratic Party', kind: 'party', position: 'Yes', url: 'https://www.lacdp.org/ballotmeasures' },
        { org: 'Los Angeles Daily News editorial board', kind: 'editorial', position: 'No', url: 'https://www.dailynews.com/2026/10/10/endorsement-no-on-los-angeles-charter-amendments-la-ee-prk-prt-yes-on-pl/' },
      ],
      measureType: 'Charter amendment (placed by the City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'City Administrative Officer: lease-term and airport-board changes are cost-neutral; workforce disclosures are paid for by applicants. The Port’s Public Access Investment Plan codifies its practice of allocating 10% of operating income to waterfront projects, historically about $28.6 million a year.',
      supporters:
        'Argument in favor signed by Councilmembers Tim McOsker, Imelda Padilla, and Traci Park; Paula Gerez (President, Westchester/Playa Neighborhood Council); Gina Martinez (Wilmington community advocate); and David Yanowitz (Van Nuys community advocate).',
      opponents: 'No argument against was submitted.',
      voterConnection: [
        'If you live near LAX or Van Nuys Airport, more of the Airport Commission would come from your area.',
        'Harbor communities such as San Pedro and Wilmington would have Port waterfront spending written into the Charter.',
        'Longer leases on airport and DWP land can attract private investment but tie up public land for up to two generations.',
      ],
      mechanismBullets: [
        'Airport and DWP leases up to 66 years (now 50; Harbor already allows 66) if the Council finds a term over 30 years in the City’s interest, within state and federal limits.',
        'Airport Commission: three of seven members must live near LAX and two near Van Nuys Airport (now one each).',
        'The Harbor Commission alone sets each year’s share of operating income for its Public Access Investment Plan.',
        'Port applicants for leases or developments needing a Coastal Development Permit must disclose workforce impacts; small businesses and nonprofits may be exempted from the economic analysis.',
      ],
      argumentsFor: [
        'Neighborhoods that bear airport noise and traffic get a more direct say on the board that runs the airports.',
        'Codifying waterfront investment and job-impact disclosure protects commitments to harbor communities from being dropped later.',
        'Longer leases match the Port’s and can support long-term private investment.',
      ],
      argumentsAgainst: [
        'Residency quotas for five of seven commissioners could favor neighborhood concerns over the airports’ regional and economic role.',
        '66-year leases commit public land long past today’s officials.',
        'Workforce disclosure adds paperwork for Port tenants and could be used to slow automation or projects.',
      ],
      readingLinks: [
        PAMPHLET_LINK,
        LAPP_GUIDE,
        { label: 'LAist: Charter Amendment PRT, what you need to know before voting (Oct 14)', url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-charter-amendment-prt-guide', summary: 'Voter guide on airport commission residency, longer leases and Harbor workforce disclosure, with supporters and the Chamber of Commerce’s opposition.' },
      ],
      explainerUrl: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-charter-amendment-prt-guide',
    },
    crossTypology: ct([
      ['LP', 'Yes', '◐', 'Leftward Progressives value workforce-impact disclosure at the Port and guaranteed waterfront spending for harbor communities, while disliking 66-year leases of public land.'],
      ['LL', 'Yes', '◐', 'Loyal Liberals see a mostly cost-neutral update to department governance backed by the Council and the county Democratic Party.'],
      ['LO', 'Yes', '○', 'Left-Out Left voters like more neighborhood seats on the airport board and waterfront money for Wilmington and San Pedro, though long leases to private operators give them pause.'],
      ['OO', 'Yes', '○', 'Order and Opportunity Left voters value jobs and local investment, and job-impact disclosure and waterfront spending fit that, a weak lean.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters near LAX or the harbor gain more voice and investment at no cost to them, a weak lean on a measure far from most of their concerns.'],
      ['PP', 'Yes', '○', 'Pragmatic and Polite Right voters accept a mostly cost-neutral measure that largely codifies current practice, though residency quotas on the airport board are a concern.'],
      ['UR', 'No', '○', 'Unconventional Right voters lean against a new disclosure mandate on Port businesses, which critics say could slow automation and projects.'],
      ['FC', 'No', '○', 'Faith First Conservatives favor limited government and lean against new mandates on Port businesses, with little else at stake for them.'],
      ['NA', 'No', '◐', 'No Apologies Right voters oppose new regulatory paperwork on businesses and see workforce disclosure as a tool to slow projects.'],
    ]),
    hinges: {
      LP: 'Yes if workforce-impact disclosure at the Port and waterfront spending for harbor neighborhoods matter to you. No if 66-year leases that tie up public airport and utility land for two generations give you pause.',
      LL: 'Yes if a mostly cost-neutral update to department rules, backed by the Council, makes sense to you. No if residency quotas on a board running a global airport may tilt it toward local noise concerns over regional needs.',
      LO: 'Yes if more neighborhood seats on the airport board outweigh your doubts about the rest. No if longer leases to private operators on public land, lasting long past today’s officials, worry you more.',
      OO: 'Yes if job protections and local voices on the airport board, backed by your Council members, matter to you. No if 66-year leases on public land worry you more; the Daily News editorial board opposes it.',
      TM: 'Yes if you live near LAX or Van Nuys and want more neighbors on the airport board, at no cost to you. No if tying up public land for up to 66 years outweighs that for you.',
      PP: 'Yes if writing existing practice into the Charter, at no cost, is a sensible update. No if residency quotas on the airport board and 66-year leases are changes you’d want studied more first.',
      UR: 'Yes if a no-cost measure with longer leases that support long-term investment suits you. No if new workforce paperwork for Port tenants, which critics say could slow projects, tips you against it.',
      FC: 'Yes if more local voice on the airport board and waterfront spending for harbor neighborhoods appeal to you. No if 66-year leases of public land or new mandates on Port businesses seem unwise to you.',
      NA: 'Yes if longer leases that help private investment, plus a disclosure that applicants pay for, seem a fair trade. No if any new disclosure mandate on Port businesses, which critics say could slow projects, is one too many.',
    },
    counterArguments: [
      'LL (Yes ◐): But consider No if regional economic needs come first, because requiring five of seven airport commissioners to live near the airports may tilt decisions toward local noise concerns.',
      'NA (No ◐): But consider Yes if private investment matters most, because the disclosure is paid for by applicants and the longer leases help investors.',
    ],
  },

  // ───────────────────────────── SC ─────────────────────────────
  {
    id: 'la-measure-sc',
    categoryId: 'local-measures',
    title: 'LA City Measure SC — School board campaign-finance rules',
    tldrLabel: 'LA Measure SC — LAUSD campaign rules',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure SC replaces the Charter’s separate campaign-finance section for LAUSD board candidates with the rules for mayoral candidates. The trade-off is simpler, consistent rules versus giving the City Council lasting power to change school-board campaign rules by ordinance.',
    ],
    introParagraphs: [
      'The City Charter, not the school district, sets campaign-finance rules for LAUSD board races. The City Council placed SC on the ballot; it appears only for City voters who live inside LAUSD.',
    ],
    measure: {
      question:
        'Shall the Los Angeles City Charter be amended to clarify the campaign finance rules for Board of Education elections and allow for changes by ordinance?',
      yesMeans: 'Removes the Charter’s separate campaign-finance section for LAUSD board races, applies the mayoral rules minus matching funds and contractor limits, and lets the Council change them by ordinance.',
      noMeans: 'Keeps school board campaign-finance rules in their own Charter section, changeable only by a citywide Charter vote.',
      funding: {
        asOf: 'Oct. 13, 2026',
        note: 'No committee has reported raising money for or against it. One group, AAPI Equity Alliance, reported $329.97 in independent spending urging a Yes vote (Oct. 9).',
        sources: [{ label: 'LA City Ethics Commission, 2026 ballot measure totals', url: 'https://ethics.lacity.gov/cfcs/Display/DisplayPanels.cfc?method=ElectionTotalsResults&useBS4Tabs=yes&showdates=yes&election_id=76' }],
      },
      positions: [
        { org: 'Los Angeles County Democratic Party', kind: 'party', position: 'No position', url: 'https://www.lacdp.org/ballotmeasures' },
      ],
      measureType: 'Charter amendment (placed by the City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'City Administrative Officer: no financial impact on the City. School board candidates would not be subject to certain contribution and fundraising provisions (Charter sections 470(c)(11) and (c)(12)) or to public matching funds (section 471).',
      supporters:
        'Argument in favor signed by Councilmember Adrin Nazarian (District 2), LAUSD Board Member Nick Melvoin, former Charter Reform Commissioner Diego Andrades, California Common Cause, and League of Women Voters of Greater Los Angeles.',
      opponents: 'No argument against was submitted.',
      voterConnection: [
        'LAUSD races draw some of the most expensive outside spending in local politics; SC covers only candidates’ own campaigns.',
        'Little changes on day one, because the rules are already similar.',
        'Later, the Council could tighten or loosen the rules without a Charter vote.',
      ],
      mechanismBullets: [
        'Repeals the duplicative language in Charter section 803.',
        'Applies the mayoral rules (Charter sections 470 and 471, Municipal Code Article 9.7) to school board candidates, minus City-only provisions such as matching funds and contractor and lobbyist limits.',
        'Keeps contribution limits (baseline $1,000 per office, periodically adjusted), disclosure rules, fundraising windows, and Ethics Commission enforcement.',
      ],
      argumentsFor: [
        'One set of rules for mayoral and school board campaigns is easier to follow and enforce.',
        'Backed by good-government groups California Common Cause and the League of Women Voters.',
        'The City can update the rules as campaign practices change without a citywide election.',
      ],
      argumentsAgainst: [
        'Council members, who can have stakes in school board races, could loosen the rules without a public vote.',
        'School board candidates are not covered by the contractor and lobbyist limits or public matching funds that apply to City races.',
        'The practical benefit is modest, while the ordinance power is a lasting shift.',
      ],
      readingLinks: [
        PAMPHLET_LINK,
        LAPP_GUIDE,
        { label: 'LAist: Charter Amendment SC, what you need to know (Oct 14)', url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-city-charter-amendment-sc-guide', summary: 'Voter guide on aligning LAUSD board campaign-finance rules with the mayoral race, with supporters’ case and a critic’s concern about ordinance changes.' },
      ],
      explainerUrl: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-city-charter-amendment-sc-guide',
    },
    crossTypology: ct([
      ['LP', 'Yes', '◐', 'Leftward Progressives follow Common Cause and the League of Women Voters on consistent, enforceable limits on school board campaign money.'],
      ['LL', 'Yes', '●', 'Loyal Liberals value consolidated ethics rules backed by good-government groups and enforced by the Ethics Commission.'],
      ['LO', 'No', '○', 'Left-Out Left voters want tight limits on money in school board races but distrust letting Council members rewrite those rules by ordinance without a public vote.'],
      ['OO', 'Yes', '○', 'Order and Opportunity Left voters see a no-cost cleanup with no organized opposition, a weak lean.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters have little at stake in a technical cleanup that costs them nothing, a weak lean.'],
      ['PP', 'Yes', '◐', 'Pragmatic and Polite Right voters value orderly, consistent rules backed by nonpartisan good-government groups.'],
      ['UR', 'No', '○', 'Unconventional Right voters distrust giving City politicians power to change election rules without a vote.'],
      ['FC', 'No', '○', 'Faith First Conservatives, often active in school board politics, distrust City Hall gaining control over those races’ rules.'],
      ['NA', 'No', '◐', 'No Apologies Right voters distrust City Hall and want election rules fixed in the Charter, where only voters can change them.'],
    ]),
    hinges: {
      LP: 'Yes if one clearer, enforceable set of rules appeals to you, as it does to Common Cause and the League of Women Voters. No if school board candidates should face the contractor and lobbyist limits and matching funds that City races have.',
      LL: 'Yes if one consistent rulebook backed by good-government groups is easier to follow and enforce. No if the new power to change the rules by ordinance is broader than a cleanup needs.',
      LO: 'Yes if consistent, enforced limits on school board campaigns matter most to you. No if letting the Council rewrite those rules by ordinance, without a public vote, is a risk you won’t take.',
      OO: 'Yes if a no-cost cleanup with no organized opposition is an easy call for you. No if letting Council members, who can have stakes in school board races, change those rules without a vote worries you.',
      TM: 'Yes if a technical cleanup with no cost to you seems harmless enough. No if you’d rather school board election rules stay in the Charter, where only voters can change them.',
      PP: 'Yes if simpler, consistent rules for school board and mayoral races, at no cost, make sense to you. No if giving the Council lasting power to loosen or tighten the rules without a vote is a bigger change than it looks.',
      UR: 'Yes if the core limits and Ethics Commission enforcement stay, so the main effect is removing duplicate text. No if City politicians shouldn’t be able to change election rules without a vote of the people.',
      FC: 'Yes if one clear set of rules for school board races, still enforced by the Ethics Commission, suits you. No if you distrust City Hall gaining control over the rules for school board races you care about.',
      NA: 'Yes if you see it mainly as removing duplicate text, with contribution limits and enforcement kept. No if election rules belong fixed in the Charter rather than adjustable by Council ordinance.',
    },
    counterArguments: [
      'NA (No ◐): But consider Yes if you see it as housekeeping, because the core contribution limits and Ethics Commission enforcement stay in place and the main effect is removing duplicate text.',
      'LL (Yes ●): But consider No if you want voters to guard election rules, because the new power to change them by ordinance is broader than a cleanup requires.',
    ],
  },

  // ───────────────────────────── FD ─────────────────────────────
  {
    id: 'la-measure-fd',
    categoryId: 'local-measures',
    title: 'LA City Measure FD — Half-cent sales tax for the Fire Department',
    tldrLabel: 'LA Measure FD — Fire sales tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure FD is a permanent sales tax dedicated to the Fire Department, a large expansion of an LAFD budget of about $900 million this year (LAist). The fight is over whether an earmarked sales tax is the right fix for slow response times or whether City Hall should reprioritize the existing budget.',
    ],
    introParagraphs: [
      'A citizen initiative written by the firefighters’ union, which submitted more than 225,000 signatures; the Council then voted 14-0 in June to place it on the ballot (LAist). The firefighters’ committee has raised about $4.4 million since 2025, through Sept. 19 filings. The Police Protective League plans to spend several million dollars against it (NBC Los Angeles), but no spending against it had been reported to the City Ethics Commission. No public poll has been found.',
      'Earlier sales-tax increases: County Measure A (2024) and Measure ER (June 2026). Prop 43 on this ballot would require two-thirds for citizen-initiated special taxes from Jan. 1, 2027, but not for this vote.',
    ],
    measure: {
      explainerUrl: 'https://laist.com/news/politics/voter-guides/2026-election-general-los-angeles-measure-fd-sales-tax',
      question:
        'Shall an ordinance providing funding for the Los Angeles Fire Department, including for hiring firefighters, paramedics, and other staff, purchasing and maintaining vehicles and equipment, building and upgrading fire stations, and brush clearance; by imposing a one-half percent (0.5%) sales tax in the City of Los Angeles; with annual audits and a citizen’s oversight committee; generating approximately $345 million annually until ended by voters; be adopted?',
      yesMeans: 'Adds a permanent half-cent City sales tax, raising the rate to 10.75% and about $345 million a year for Fire Department staffing, equipment, stations and brush clearance, with audits and oversight.',
      noMeans: 'Keeps the City sales tax at 10.25%, and the Fire Department continues to rely on its share of the General Fund through the regular budget.',
      related: [
        { raceId: 'la-measure-prk', note: 'PRK would move a growing share of the General Fund to parks, which could make it harder to keep LAFD at the baseline share this tax requires before it can be levied.' },
      ],
      funding: {
        asOf: 'Sept. 19, 2026',
        yes: {
          raised: '$4.4 million',
          topDonors: [
            'United Firefighters of Los Angeles City Local 112 ($1.8M)',
            'California Community Foundation ($400,000)',
            'McNicholas & McNicholas LLP ($300,000)',
            'Western States Regional Council of Carpenters ($250,000)',
          ],
        },
        note: 'Totals since January 2025, including the signature drive. No committee has reported raising money against it; the Police Protective League has said it will spend millions to oppose it, but no such spending had been reported.',
        sources: [
          { label: 'LA City Ethics Commission, 2026 ballot measure totals (through June 30)', url: 'https://ethics.lacity.gov/cfcs/Display/DisplayPanels.cfc?method=ElectionTotalsResults&useBS4Tabs=yes&showdates=yes&election_id=76' },
          { label: 'LA City open data, campaign contributions (Fund LA Fire, July 1 to Sept. 19)', url: 'https://data.lacity.org/d/m6g2-gc6c' },
          { label: 'CityHallPass, Measure FD money summary (cumulative totals and top donors)', url: 'https://cityhallpass.com/election-2026/measures/measure-fd' },
        ],
      },
      positions: [
        { org: 'Los Angeles County Democratic Party', kind: 'party', position: 'Yes', url: 'https://www.lacdp.org/ballotmeasures' },
      ],
      measureType: 'Citizen initiative ordinance (special sales tax dedicated to the Fire Department)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'City Administrative Officer: raises the City sales tax from 10.25% to 10.75%, generating about $345 million a year for a special fund dedicated to LAFD, audited annually and monitored by a citizens’ oversight committee. If the City funds LAFD below its average share of discretionary funding over the prior ten fiscal years, the tax cannot be levied that year.',
      supporters:
        'Argument in favor signed by Doug Coates (President, United Firefighters of LA City), Fire Chief Jaime Moore, and LAFD firefighters and captains; the argument also cites the LAFD Chief Officers Association, California Professional Firefighters, and the International Association of Fire Fighters. Mayor Karen Bass and Councilmember Traci Park support it (LAist).',
      opponents: 'Argument against signed by the Howard Jarvis Taxpayers Association (Jon Coupal). The Los Angeles Police Protective League also opposes it (LAist; NBC Los Angeles).',
      voterConnection: [
        'Shoppers pay about 50 cents more per $100 of taxable purchases, a bigger share of income for lower-income households.',
        'Supporters say paramedics often take nearly twice the national four-minute standard to reach medical calls, which are over 80% of LAFD calls (pamphlet argument).',
        'There is no end date: the tax stops only if voters repeal it or the City cuts its own LAFD funding below the 10-year baseline.',
      ],
      mechanismBullets: [
        'Starts the first calendar quarter more than 110 days after adoption (as early as April 1, 2027, per LAist).',
        'Uses: staffing; engines, ambulances, aircraft, and equipment; station and EMS facility construction (project labor agreements, prevailing wage); emergency communications; brush clearance and wildfire preparedness.',
        'Five-member oversight committee appointed by the Mayor, Fire Chief, Controller, City Administrative Officer, and Public Safety Committee chair, reporting at least yearly.',
        'The Council may amend it only to further its purposes, never the rate or duration, by two-thirds vote after 30 days’ notice.',
        'The ordinance calls it a special tax; as a citizen initiative it needs a simple majority under current California court rulings.',
      ],
      argumentsFor: [
        'LAFD has about 3,400 firefighters in 106 stations (LAist), per the union no more than in 1965 despite 50% population growth; supporters say FD funds at least 1,000 more.',
        'Brain damage in cardiac arrest begins within 4 to 6 minutes, and LA response times run well past the four-minute standard (pamphlet argument).',
        'After the January 2025 fires, dedicated money for brush clearance, aircraft, and staffing is direct wildfire preparation.',
        'Audits, oversight, and a maintenance-of-effort rule stop the City from swapping out its own LAFD money.',
      ],
      argumentsAgainst: [
        'It is a permanent, regressive sales tax, the third increase for City residents in two years.',
        'The City should fund public safety from its more than $8.1 billion General Fund, not projects like the $2.7 billion Convention Center upgrade (Howard Jarvis Taxpayers Association).',
        'Locking the money to one department forever reduces flexibility, as the police union objects.',
        'As a citizen initiative it needs only a majority, though the same tax placed by the Council would need two-thirds.',
      ],
      readingLinks: [
        PAMPHLET_LINK,
        {
          label: 'City Clerk: Measure FD materials',
          url: 'https://cityclerk.lacity.org/election/Measure_FD.pdf',
          summary: 'The City Clerk’s Measure FD ballot materials.',
        },
        {
          label: 'LAist: what to know about Measure FD (Oct. 5, 2026)',
          url: 'https://laist.com/news/politics/voter-guides/2026-election-general-los-angeles-measure-fd-sales-tax',
          summary: 'How it qualified, threshold, supporters and opponents, and LAFD budget context.',
        },
        {
          label: 'NBC Los Angeles: police union to oppose Measure FD (Oct. 2026)',
          url: 'https://www.nbclosangeles.com/news/local/measure-fd-los-angeles-fire-department/3949552/',
          summary: 'The Police Protective League’s planned multimillion-dollar opposition campaign.',
        },
        LAPP_GUIDE,
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes', '◐', 'Leftward Progressives value well-staffed public emergency services and union-backed wildfire preparation, though a permanent sales tax falls hardest on lower-income shoppers.'],
      ['LL', 'Yes', '◐', 'Loyal Liberals follow the Mayor, Fire Chief and county Democratic Party on wildfire readiness and value the audits and oversight, while disliking a permanent earmark.'],
      ['LO', 'Yes / No', '=', 'Left-Out Left voters want faster paramedics in working neighborhoods but object to taxes that fall hardest on people like them: if faster emergency response, backed by audits and a maintenance-of-effort rule, matters most, Yes; if another regressive sales tax weighs more, No.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters put public safety first and support more firefighters and faster medical response, despite the added cost at the register.'],
      ['TM', 'No', '○', 'Tuned-Out Middle voters are the most financially strained and lean against a third sales-tax increase in two years, though faster 911 response matters to them.'],
      ['PP', 'No', '○', 'Pragmatic and Polite Right voters back first responders and like the audit guardrails, but a permanent tax with no sunset, when the City could reprioritize its General Fund, fails their prudence test.'],
      ['UR', 'No', '◐', 'Unconventional Right voters want lower taxes and leaner government and prefer the City fund firefighters from its existing $8.1 billion General Fund.'],
      ['FC', 'No', '◐', 'Faith First Conservatives honor first responders but oppose a permanent tax increase, siding with the Howard Jarvis Taxpayers Association.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose nearly all new taxes and reject a permanent one passed by simple majority when a Council-placed tax would need two-thirds.'],
    ]),
    hinges: {
      LP: 'Yes if well-staffed emergency services and faster paramedic response justify a union-backed tax. No if a permanent sales tax that falls hardest on lower-income shoppers is the wrong way to pay for it.',
      LL: 'Yes if wildfire readiness comes first, as the Mayor and Fire Chief argue, and the audits and maintenance-of-effort rule reassure you. No if locking $345 million a year to one department forever is too rigid for you.',
      LO: 'Yes if faster emergency response in underserved areas, with audits and an oversight committee, is worth the cost to you. No if another regressive sales tax, the third increase in two years, hits the people you care about too hard.',
      OO: 'Yes if more firefighters, paramedics and wildfire preparation are worth about 50 cents per $100 you spend. No if a tax that never expires and falls hardest on lower-income shoppers outweighs that support.',
      TM: 'Yes if faster 911 response, which supporters say runs nearly twice the national standard, matters more than 50 cents per $100. No if a third sales-tax increase in two years adds to costs you already feel.',
      PP: 'Yes if LAFD hasn’t grown in decades through the normal budget and the maintenance-of-effort rule reassures you. No if the City should reprioritize its more than $8.1 billion General Fund before adding a permanent tax.',
      UR: 'Yes if the firefighters you support need the money and audits and an oversight committee ease your distrust. No if you oppose another tax from a City Hall you don’t trust; the taxpayers’ association and police union oppose it too.',
      FC: 'Yes if honoring first responders means giving them dedicated money for staffing and wildfire preparation. No if the City should fund safety from its existing budget instead, as the Howard Jarvis Taxpayers Association argues.',
      NA: 'Yes if decades without LAFD growth, and the rule against swapping out the City’s own fire money, convince you. No if a permanent tax passed by simple majority, when a Council-placed one would need two-thirds, should be rejected.',
    },
    counterArguments: [
      'NA (No ●): But consider Yes if fire protection is the priority, because the City has not grown LAFD for decades through the normal budget and the maintenance-of-effort rule stops it from using FD to replace its own fire spending.',
      'OO (Yes ◐): But consider No if household costs are tight, because the tax never expires, falls hardest on lower-income shoppers and locks $345 million a year to one department regardless of future needs.',
      'TM (No ○): But consider Yes if emergency response is what you most need from the City, because supporters say paramedics often take nearly twice the four-minute standard and over 80% of LAFD calls are medical.',
    ],
  },
];
