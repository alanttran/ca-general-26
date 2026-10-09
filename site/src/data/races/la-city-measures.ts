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
      question:
        'Shall an ordinance be adopted to provide a one-time exemption from the City’s special documentary transfer tax (Proposition ULA) for residential properties that were damaged or destroyed in the Palisades Fire and are sold within five years of the date of the Fire?',
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
      ['PL', 'No', '●', 'Progressive Left voters value ULA’s housing and tenant funding and object to a tax break limited to sellers of $5 million-plus properties without a primary-residence or need test.'],
      ['EL', 'Yes', '◐', 'Establishment Liberals tend to follow the Mayor and a near-unanimous Council on a narrow, time-limited disaster-relief fix, while weighing the lost housing money.'],
      ['DM', 'Yes', '◐', 'Democratic Mainstays lean toward compassion for disaster survivors and the Mayor’s and building-trades unions’ endorsement, despite the hit to housing programs.'],
      ['OL', 'No', '●', 'Outsider Left voters see a carve-out for wealthy property owners funded by money meant for renters and the unhoused.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners sympathize with families who lost homes, though few are directly affected and the beneficiaries are well-off.'],
      ['AR', 'Yes', '●', 'Ambivalent Right voters favor lighter taxes on property transactions and relief for disaster victims.'],
      ['PR', 'Yes', '●', 'Populist Right voters dislike ULA and support relief for fire survivors who feel failed by City Hall.'],
      ['CC', 'Yes', '●', 'Committed Conservatives oppose ULA as a drag on real estate and welcome any reduction in its reach.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives favor tax relief for families recovering from the fire.'],
    ]),
    counterArguments: [
      'CC/PR (Yes ●): But this exemption does not reform ULA for anyone else; if the concern is ULA’s effect on housing supply, this measure leaves that untouched.',
      'PL (No ●): But the tax was sold as a levy on luxury deals, and taxing a forced post-disaster sale of a burned lot is a use voters likely did not intend; the revenue loss is a small share of ULA.',
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
      readingLinks: [PAMPHLET_LINK, LAPP_GUIDE, CHARTER_COMMISSION_LINK],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters value the street-safety and transit groups and the Controller backing it, and long-range planning for neglected infrastructure, while noting the loss of a public board.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value professional management, multi-year budgeting, and capital planning, the kind of institutional modernization this measure delivers.'],
      ['DM', 'Yes', '◐', 'Democratic Mainstays care most about basic services like streets and sidewalks and tend to follow the Controller and Council sponsors.'],
      ['OL', 'No', '◐', 'Outsider Left voters distrust City Hall and see removing an open-meeting check on contracts as the wrong move after the corruption cases.'],
      ['SS', 'No', '○', 'Stressed Sideliners are wary of complex power shifts they cannot easily evaluate.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters like budget discipline and clearer accountability for services, but the business-enterprise and mortgage powers temper the lean.'],
      ['PR', 'No', '◐', 'Populist Right voters oppose concentrating contracting power in fewer hands at a City Hall they do not trust.'],
      ['CC', 'No', '◐', 'Committed Conservatives welcome two-year budgeting but oppose letting government mortgage public property and run commercial businesses.'],
      ['FF', 'No', '○', 'Faith and Flag Conservatives lean against expanding City government’s financial powers.'],
    ]),
    counterArguments: [
      'CC (No ◐): But the parts conservatives usually want (multi-year budgeting, a capital plan, a single accountable manager) are central, and the Controller’s audit power remains.',
      'EL (Yes ●): But the strongest pieces could be done by ordinance, and abolishing a public board and allowing mortgages and business enterprises are lasting Charter changes with no cost estimate.',
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
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '○', 'Progressive Left voters who prioritize faster housing approvals lean Yes, while those wary of weaker community voice (as La Defensa is) may not.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value professional, rules-based decision-making and fewer chances for Council members to trade favors on projects.'],
      ['DM', 'Yes', '○', 'Democratic Mainstays have no strong cue here but tend to accept the Council’s reform package and its anti-corruption framing.'],
      ['OL', 'No', '◐', 'Outsider Left voters distrust handing more authority to staff and a single commission and worry about neighborhoods losing a say against developers.'],
      ['SS', 'No', '○', 'Stressed Sideliners tend to reject complicated changes that reduce local input.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters value cutting red tape and lower administrative costs.'],
      ['PR', 'No', '◐', 'Populist Right voters oppose giving unelected planners more power and making it easier to raise density near homeowners.'],
      ['CC', 'Yes', '◐', 'Committed Conservatives value streamlined permitting and fewer regulatory hurdles to building.'],
      ['FF', 'No', '○', 'Faith and Flag Conservatives lean toward preserving neighborhood control over development.'],
    ]),
    counterArguments: [
      'EL (Yes ●): But the measure moves appeal rights and the density cap from the Charter to ordinance, so future Councils, the same body critics distrust, gain room to change them.',
      'PR (No ◐): But the deadlines in this measure limit Council members’ ability to sit on projects, which is the kind of discretion that fed past bribery cases.',
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
      readingLinks: [PAMPHLET_LINK, LAPP_GUIDE, CHARTER_COMMISSION_LINK],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters value independent police oversight and tougher campaign-finance enforcement.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value stronger ethics institutions and a more efficient Council schedule.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays follow the broad Council sponsorship and the ethics framing.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters want stronger police oversight but dislike fewer public meetings and a higher bar for referendums.'],
      ['SS', 'No', '○', 'Stressed Sideliners lean against changes that give the public fewer chances to be heard at City Hall.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters like stiffer campaign-finance penalties, though they may object to the referendum change.'],
      ['PR', 'No', '◐', 'Populist Right voters oppose making referendums harder and reducing public Council meetings.'],
      ['CC', 'No', '◐', 'Committed Conservatives are wary of expanding inspector-general power over the police without commission control and of a higher bar for citizen referendums.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives oppose loosening commission control over police investigations and limiting direct democracy.'],
    ]),
    counterArguments: [
      'PL (Yes ●): But the higher referendum threshold makes grassroots challenges to Council laws harder, a tool progressive groups have used.',
      'PR/CC (No ◐): But the measure raises campaign-finance penalties and bars ethics officials from using the post as a launchpad, accountability measures conservatives have sought at City Hall.',
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
      question:
        'Shall the City Charter be amended to increase the minimum budget allocated to the Department of Recreation and Parks, phased in over ten years until it is double the current minimum budget allocation, with exceptions for fiscal emergencies?',
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
      ['PL', 'Yes', '●', 'Progressive Left voters value park equity, green space in underserved neighborhoods, and youth programs.'],
      ['EL', 'Yes', '◐', 'Establishment Liberals support parks but give weight to the City’s fiscal analysts warning against a large mandate during deficits.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays value recreation and senior centers and the no-new-tax framing.'],
      ['OL', 'Yes', '●', 'Outsider Left voters favor shifting City money toward community services and away from the status quo budget.'],
      ['SS', 'Yes', '◐', 'Stressed Sideliners benefit from free and low-cost parks, pools, and centers and are not asked to pay a new tax.'],
      ['AR', 'No', '◐', 'Ambivalent Right voters are wary of locking a growing share of the budget into the Charter at the expense of public safety.'],
      ['PR', 'No', '◐', 'Populist Right voters prioritize police and fire, which the City’s fiscal analyst says could lose money to this mandate.'],
      ['CC', 'No', '●', 'Committed Conservatives oppose ballot-box budgeting that crowds out core services and limits fiscal flexibility.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives put public safety funding first.'],
    ]),
    counterArguments: [
      'PL/DM (Yes ●): But without new revenue, the City’s own analyst says the money will come partly from homeless services and public safety, priorities these voters also hold.',
      'CC (No ●): But parks spending is a small share of the budget and has not kept pace for decades; the phase-in and emergency valve limit the squeeze.',
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
      readingLinks: [PAMPHLET_LINK, LAPP_GUIDE],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters value workforce disclosure at the Port and community investment in harbor neighborhoods.'],
      ['EL', 'Yes', '●', 'Establishment Liberals see a mostly cost-neutral modernization of department governance with Council sponsorship.'],
      ['DM', 'Yes', '◐', 'Democratic Mainstays value job protections and local representation, backed by their Council members.'],
      ['OL', 'Yes', '○', 'Outsider Left voters like more neighborhood seats on the airport board, though longer leases to private operators give some pause.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners near LAX or Van Nuys gain more voice on the airport board at no cost to them.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters accept a no-cost measure that supports long-term investment through longer leases.'],
      ['PR', 'Yes', '○', 'Populist Right voters favor more local residents on the airport board over appointees from elsewhere.'],
      ['CC', 'No', '○', 'Committed Conservatives are wary of new disclosure mandates on Port businesses, though the longer leases suit them.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no clear values stake in these mostly technical department changes.'],
    ]),
    counterArguments: [
      'EL (Yes ●): But residency quotas on a board running a global airport may tilt decisions toward local noise complaints over regional economic needs.',
      'CC (No ○): But the workforce disclosure is self-funded and informational, and the longer leases help private investment.',
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
      readingLinks: [PAMPHLET_LINK, LAPP_GUIDE],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters follow Common Cause and the League of Women Voters on clearer campaign-finance enforcement.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value consolidated, consistent ethics rules backed by good-government groups.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays see a no-cost cleanup with no organized opposition.'],
      ['OL', 'Yes', '○', 'Outsider Left voters support stronger school-board money rules but are wary of letting the Council rewrite them by ordinance.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners have little at stake and no cost to bear in a technical cleanup.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters accept simpler, consistent rules with no cost.'],
      ['PR', 'No', '○', 'Populist Right voters distrust giving City politicians power to change election rules without a vote.'],
      ['CC', 'No', '○', 'Committed Conservatives prefer election rules fixed in the Charter rather than adjustable by Council ordinance.'],
      ['FF', 'No', '○', 'Faith and Flag Conservatives, often active in school board politics, distrust City Hall control over those races’ rules.'],
    ]),
    counterArguments: [
      'PR/CC (No ○): But the core limits and Ethics Commission enforcement stay in place, and the main effect is removing duplicate text.',
      'EL (Yes ●): But the new power to change rules by ordinance is broader than a cleanup requires.',
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
      'A citizen initiative written by the firefighters’ union, which submitted more than 225,000 signatures; the Council then voted 14-0 in June to place it on the ballot (LAist). The Police Protective League plans to spend several million dollars against it (NBC Los Angeles). No public poll has been found.',
      'Earlier sales-tax increases: County Measure A (2024) and Measure ER (June 2026). Prop 43 on this ballot would require two-thirds for citizen-initiated special taxes from Jan. 1, 2027, but not for this vote.',
    ],
    measure: {
      question:
        'Shall an ordinance providing funding for the Los Angeles Fire Department, including for hiring firefighters, paramedics, and other staff, purchasing and maintaining vehicles and equipment, building and upgrading fire stations, and brush clearance; by imposing a one-half percent (0.5%) sales tax in the City of Los Angeles; with annual audits and a citizen’s oversight committee; generating approximately $345 million annually until ended by voters; be adopted?',
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
      ['PL', 'Yes', '◐', 'Progressive Left voters value well-staffed public emergency services and union-backed funding, though a sales tax is regressive.'],
      ['EL', 'Yes', '◐', 'Establishment Liberals follow the Mayor and Fire Chief on wildfire readiness and value the audit and oversight guardrails, while disliking a permanent earmark.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays strongly support firefighters and paramedics and the Mayor’s position.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters want faster emergency response in underserved areas but object to another regressive sales tax.'],
      ['SS', 'No', '○', 'Stressed Sideliners feel cost-of-living pressure from a third sales-tax increase in two years, though faster 911 response matters to them.'],
      ['AR', 'No', '○', 'Ambivalent Right voters back first responders but prefer the City reprioritize its existing budget over a permanent new tax.'],
      ['PR', 'No', '◐', 'Populist Right voters support firefighters but distrust City Hall and oppose another tax, siding with the taxpayers’ association and police union.'],
      ['CC', 'No', '●', 'Committed Conservatives oppose a permanent tax increase passed under the lower citizen-initiative threshold and want core services funded first.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives honor first responders but oppose the tax increase, following the Howard Jarvis Taxpayers Association.'],
    ]),
    counterArguments: [
      'CC (No ●): But the City has not grown LAFD for decades through the normal budget, and the maintenance-of-effort rule stops the City from using FD to replace its own fire spending.',
      'DM (Yes ●): But the tax never expires, falls hardest on lower-income shoppers, and locks $345 million a year to one department regardless of future needs.',
    ],
  },
];
