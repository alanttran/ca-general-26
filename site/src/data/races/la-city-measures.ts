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
      'Proposition TE asks City of Los Angeles voters to carve a one-time exemption out of Measure ULA, the 2022 voter-approved transfer tax on property sales above about $5 million that funds affordable housing and tenant help. Homes damaged or destroyed in the January 2025 Palisades Fire and sold by the owner of record on the day the fire began, through Jan. 6, 2030, would owe no ULA tax, and those who already paid could get a refund.',
      'The trade-off is direct: fire survivors who sell keep more of the sale price, and the House LA Fund loses an estimated $35 million to $66 million through January 2030 that would otherwise go to affordable housing and homelessness prevention. It does not touch the City’s General Fund.',
    ],
    introParagraphs: [
      'Because ULA was adopted by voters, the City Attorney concluded the Council could not create an exemption on its own. Councilmember Traci Park (whose district includes the Palisades) led the effort, and the Council voted 13-1 to place it on the ballot, with Eunisses Hernandez opposed and Curren Price absent (LAist, Aug. 4, 2026). No argument against it was submitted for the ballot pamphlet.',
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
        'Most voters pay nothing either way: ULA applies only to sales above about $5.4 million (inflation-adjusted), and this exemption only to fire-damaged homes in the Palisades.',
        'Every dollar exempted comes out of the House LA Fund, which pays for affordable housing construction, rental assistance, and eviction defense citywide.',
        'Supporters say survivors forced to sell after losing everything should not pay a tax meant for luxury transactions; critics note the exemption is not limited to primary residences or to people who cannot afford to rebuild.',
        'A Yes vote also sets a precedent for how the City treats ULA after future disasters, though this measure applies only to the Palisades Fire.',
      ],
      mechanismBullets: [
        'Exempts sales of residential property damaged or destroyed by the Palisades Fire (which began Jan. 7, 2025) from the ULA tax, with damage verified by the Department of Building and Safety.',
        'Applies only when the seller owned the property on Jan. 7, 2025, and only to the first exempt sale of each property.',
        'Window: sales from Jan. 7, 2025 through Jan. 6, 2030; the Director of Finance may refund ULA already paid on qualifying sales.',
        'ULA itself is unchanged: 4% on sales over about $5.4 million and 5.5% at about $10.9 million or more (current inflation-adjusted thresholds per the impartial summary).',
        'Covers residential property generally, including multi-family buildings, and does not require owner occupancy (pamphlet argument; LAist).',
        'About 5,495 residential structures were damaged or destroyed in the Palisades Fire, per Building and Safety data cited in the impartial summary.',
      ],
      argumentsFor: [
        'ULA was aimed at high-end real estate deals, not people selling the remains of a home they lost in a declared disaster.',
        'Many survivors face insurance gaps and rebuilding costs they cannot cover; selling may be their only path to recovery, and a 4% to 5.5% tax on that sale deepens the loss.',
        'It is narrow and time-limited: one sale per property, original owners only, ending in January 2030.',
        'It leaves ULA in place and has broad support across the Council, the Mayor, and building-trades unions.',
      ],
      argumentsAgainst: [
        'It cuts $35 million to $66 million from affordable housing and homelessness prevention during a housing crisis.',
        'The benefit goes only to owners of properties worth over about $5.4 million, who are among the City’s wealthiest residents.',
        'It is not limited to primary residences or to owners in financial need, so LLCs, investors, and second-home owners can qualify.',
        'Opening ULA to exemptions for one group invites future carve-outs that could erode the voter-approved tax.',
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
      'Charter Amendment LA rewrites how Los Angeles plans, budgets for, and builds its infrastructure. It requires a capital infrastructure plan, moves the City to a two-year budget, puts a single Director of Public Works in charge of project delivery, and lets the Council shrink or eliminate the five-member, full-time Board of Public Works by ordinance.',
      'It also removes long-standing Charter bans on the City mortgaging its property and running commercial or industrial businesses, and loosens some contracting rules. Supporters see overdue modernization for streets, sidewalks, and streetlights; the lone signed opponent sees the loss of a public, open-meeting check on billions in contracts after years of City Hall corruption cases.',
    ],
    introParagraphs: [
      'Placed on the ballot by the City Council as part of the charter package that grew out of the Charter Reform Commission formed after the 2022 City Hall tapes scandal. The Council set aside the commission’s larger ideas (a 25-member Council, ranked-choice voting) for further study. Controller Kenneth Mejia, Councilmembers Katy Yaroslavsky and Bob Blumenfield, and former Controller Ron Galperin signed the argument for it; Councilmember Monica Rodriguez signed the argument against.',
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
        'Potholes, broken sidewalks, and dark streetlights are the City services most residents notice; this measure changes who is responsible for fixing them and how the work is planned and funded.',
        'It does not raise taxes or directly fund any repairs; it changes the process, so results depend on how the Council and Mayor use the new tools.',
        'The Board of Public Works now approves contracts in public meetings; under Measure LA the Council could eliminate it by ordinance and concentrate authority in a Director who reports to the Mayor and Council.',
        'Allowing the City to mortgage property and run businesses could open new ways to finance projects, but also new financial risk, and the CAO says the effects cannot yet be measured.',
      ],
      mechanismBullets: [
        'Two-year budget: the Mayor proposes a two-year budget by April 1 and the Council acts by June 1; the Council still approves each year’s appropriations by resolution. The cycle can be changed by ordinance.',
        'Capital infrastructure plan: must be created by ordinance setting scope, timeframe, funding, and reporting for roads, parks, bridges, and buildings.',
        'Public Works: the Director gains power to manage construction, buy or lease property, use eminent domain (with Council approval), administer contracts, and issue street permits; the Board keeps contract-award approval and some hearings unless the Council changes or eliminates it by ordinance.',
        'Removes Charter bans on mortgaging City-owned property and on the City running purely commercial or industrial businesses.',
        'Competitive bidding: exempts software services and maintenance bought from the software maker, and allows an ordinance exception for critical infrastructure contracts vital to security, public health, or safety.',
        'Contract bids: minor technical errors on required forms may be waived or corrected by ordinance; substantive errors on ethics forms must still be fully corrected.',
      ],
      argumentsFor: [
        'LA has no required long-range infrastructure plan; requiring one should help the City fix problems before they get more expensive.',
        'Two-year budgeting pushes leaders to account for next year’s costs, which supporters including the City Controller say the City badly needs.',
        'Putting one Director in charge of Public Works makes it clear who is accountable for delivering projects; the Controller still audits the department.',
        'Removing outdated Charter limits gives the City more ways to use its assets and to buy software and urgent infrastructure work efficiently.',
      ],
      argumentsAgainst: [
        'Letting the Council abolish the Board of Public Works removes an open-meeting check on City contracting after repeated corruption scandals (Rodriguez).',
        'The capital plan could be adopted by ordinance without changing the Charter, so the popular part does not require the riskier parts.',
        'Mortgaging City property and running businesses add financial risk, and the City’s own fiscal analyst cannot estimate the effect.',
        'New exceptions to competitive bidding, even for software or “critical infrastructure,” can be stretched and weaken a basic protection against favoritism.',
        'It bundles budgeting, governance, finance, and contracting into one Yes/No vote.',
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
      'Charter Amendment PL changes who decides land-use questions in Los Angeles. It replaces the seven Area Planning Commissions (35 commissioners) with one citywide Neighborhood Appeals Commission, gives professional Planning Department staff clear Charter authority over routine permit decisions, puts deadlines on the City Council when it takes over planning cases, and lets the Council change the Charter’s density cap (floor area limit) by ordinance.',
      'For housing and development, the changes favor speed and predictability; for neighborhood groups, they reduce regional appeal bodies and the Council’s ability to stall cases. One shift is notable: a General Plan Amendment would be approved automatically if the Council fails to act within 75 days, reversing today’s automatic disapproval.',
    ],
    introParagraphs: [
      'Placed on the ballot by the City Council as part of the charter reform package. The argument in favor was signed by Charter Reform Commission chair Raymond Meza and Roy Samaan of the Engineers & Architects Association (the union representing many City planners). No argument against was submitted, though the progressive group La Defensa recommends No.',
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
        'If you have ever appealed or fought a nearby project, your appeal would go to one citywide commission instead of a regional one made up of people from your part of the City.',
        'Faster, more predictable permitting can help new housing get built; it can also mean fewer chances for neighbors to slow a project.',
        'Council members would face firm deadlines when they take over planning cases, limiting the practice of holding approvals that the pamphlet argument ties to past corruption.',
        'The Charter’s floor-area cap could be raised or changed by a Council vote instead of a citywide election.',
      ],
      mechanismBullets: [
        'Replaces seven Area Planning Commissions with one Neighborhood Appeals Commission of at least seven members; geographic or other representation requirements are left to ordinance. It hears appeals fresh, without deference to earlier decisions.',
        'Places authority over quasi-judicial applications (variances, conditional use permits and similar) in the Planning Department, with staff designated by ordinance and appointed by the Director of Planning.',
        'Removes Charter sections setting procedures and appeal rights for General Plan Amendments, zone changes, variances, and conditional use permits, so those rules move to ordinance.',
        'When the Council asserts jurisdiction: the commission has 30 days to concur or dissent on remand, the matter returns to the Council for a final vote, and if the Council does not act within 21 days the commission’s decision becomes final.',
        'General Plan Amendments are deemed approved if the Council does not act within 75 days after Mayor and City Planning Commission approval (today, inaction means disapproval).',
        'Lets the Council change the Charter’s Floor Area Restriction (now 13 times buildable area) by ordinance.',
      ],
      argumentsFor: [
        'Clear rules and deadlines reduce the room for political favors in land-use decisions, a theme of the City Hall corruption cases (pamphlet argument).',
        'Routine decisions by professional staff can shorten permit timelines for housing and small businesses.',
        'One citywide appeals body should apply rules more consistently than seven separate commissions, and it saves about $360,000 a year.',
        'Moving detailed procedures from the Charter to ordinance lets the City update its process without a citywide election each time.',
      ],
      argumentsAgainst: [
        'A single citywide commission is further from neighborhoods than seven regional ones; who sits on it is left to a later ordinance.',
        'Automatic approval of General Plan Amendments when the Council does not act flips the default toward development.',
        'Removing appeal rights and procedures from the Charter means the Council can later change them by ordinance without voter approval.',
        'Letting the Council lift the floor-area cap by ordinance removes a voter-level check on density.',
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
      'Charter Amendment EE bundles ethics and governance changes. It lets the LAPD Inspector General and the Fire Department Independent Assessor open investigations or audits without their commissions being able to stop them, raises campaign-finance penalties, bars Ethics Commissioners and the Ethics director from running for City or LAUSD office for five years, and raises the signatures needed for a referendum from 10% to 15% of the last mayoral vote.',
      'It also drops the Charter requirement that the City Council meet at least three days a week, requiring only weekly regular meetings. Supporters call that modernization; the signed opponent says it cuts public access, and that is the most disputed piece.',
    ],
    introParagraphs: [
      'Placed on the ballot by the City Council from the charter reform package. Councilmembers Tim McOsker, Katy Yaroslavsky, Marqueece Harris-Dawson, and Eunisses Hernandez and Charter Reform Commissioner Diego Andrades signed the argument for it; Councilmember Monica Rodriguez signed the argument against.',
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
        'Independent watchdogs over the LAPD and LAFD could investigate without their politically appointed commissions being able to block them.',
        'The Council would hold fewer required public sessions; the opponent notes Valley residents already get Council meetings in their area at most once a month.',
        'Residents who want to overturn a Council-passed law by referendum would need 50% more signatures than today, the same bar as for initiatives.',
        'Bigger fines and a cooling-off period for ethics officials aim to make campaign-finance enforcement more credible.',
      ],
      mechanismBullets: [
        'Removes the Police Commission’s power to tell the Inspector General not to begin or continue an investigation or audit, and the Fire Commission’s parallel power over the Independent Assessor.',
        'Campaign-finance penalties: up to the greater of $15,000 (inflation-adjusted) or three times the amount improperly reported, contributed, spent, or received, per violation.',
        'Five-year ban on the Ethics Commission’s executive director and commissioners running for City or LAUSD Board of Education office after leaving.',
        'Referendum petitions: signature requirement rises from 10% to 15% of votes cast in the last mayoral election, matching initiatives.',
        'Council must hold regular meetings at least weekly (now at least three days a week); related timing rules for Council review of commission actions change to calendar days (15 days; 21 days for the removal of a police chief).',
        'Also: keeps Police and Fire exempt from transfers that significantly alter their purpose, requires language-access ordinances and policies, and lets the definition of Neighborhood Council stakeholder be set by ordinance.',
      ],
      argumentsFor: [
        'Independent oversight of the LAPD and LAFD is stronger when commissions cannot halt an Inspector General or Assessor investigation.',
        'Higher penalties and a cooling-off period make the City’s ethics rules harder to shrug off.',
        'A three-day-a-week Council meeting mandate is unusual among big cities and keeps members from district work (supporters).',
        'A single, predictable weekly meeting can make public participation easier to plan around.',
      ],
      argumentsAgainst: [
        'After years of City Hall corruption cases, fewer required public meetings means fewer chances for residents to watch and comment (Rodriguez).',
        'Raising the referendum signature threshold makes it harder for residents to challenge laws the Council passes.',
        'Popular ethics provisions are bundled with changes that reduce public access, forcing a single Yes/No vote.',
        'Expanded audits may require new staff at an unknown cost.',
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
      'Charter Amendment PRK doubles the Charter-guaranteed share of City money for the Department of Recreation and Parks, from 0.0325% to 0.065% of citywide assessed property value, phased in over ten years. It raises no tax: the money comes out of the same General Fund that pays for police, fire, streets, and homeless services.',
      'The City Administrative Officer projects parks funding rising from $303 million to $995 million by 2036-37, with the increase from this measure reaching about $497 million that year. Supporters point to LA ranking 93rd of 100 big cities for parks; the CAO warns the City would have to shift money from other services to pay for it.',
    ],
    introParagraphs: [
      'Placed on the ballot by the City Council as part of the charter package. Councilmembers Monica Rodriguez, Ysabel Jurado, and Imelda Padilla, Controller Kenneth Mejia, Father Gregory Boyle, and park and youth groups signed the argument in favor. No argument against was submitted, but LAist reports the city’s fiscal analysts recommended against doubling the budget without new revenue. The City’s Prop K parks assessment ($25 million a year) expires in fiscal 2026-27.',
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
        'No new tax: the measure reshuffles existing City money toward parks, pools, and recreation and senior centers.',
        'Every added parks dollar is a dollar not available for police, fire, street repair, or homelessness, according to the City’s own fiscal analyst.',
        'The pamphlet argument says one-third of Angelenos lack a park within a ten-minute walk and that pools and centers have cut hours.',
        'Once in the Charter, the set-aside can only be changed by another citywide vote, though the Council can trim the increase in a declared fiscal emergency.',
      ],
      mechanismBullets: [
        'Raises the parks set-aside from 0.0325% to 0.065% of assessed value of City property in annual steps of 0.00325 points, starting in 2027-28 and reaching 0.065% in 2036-37.',
        'In a fiscal emergency declared by a two-thirds Council vote, the Council may cut the added funding by up to 30% for the emergency’s duration, but never below the current 0.0325%.',
        'Recreation and Parks still reimburses the General Fund for employee benefits and related costs.',
        'Supporters say money must go to eligible park purposes with annual expenditure plans reviewed at public meetings and posted online (pamphlet argument).',
        'Context: the voter-approved Prop K (1996) parks assessment, about $25 million a year, expires in fiscal 2026-27 (impartial summary).',
      ],
      argumentsFor: [
        'LA’s parks rank 93rd of the 100 largest U.S. cities (Trust for Public Land 2026 ParkScore), and facilities need almost $3 billion in repairs (pamphlet argument).',
        'Parks, pools, and recreation centers serve kids, seniors, and low-income families and host violence-intervention programs and emergency shelters.',
        'It raises no taxes and phases in slowly, with a fiscal-emergency safety valve.',
        'The guaranteed parks share has not grown in decades while the system and population have.',
      ],
      argumentsAgainst: [
        'The City’s fiscal analyst says the money must come from other services, including police, fire, public works, and homeless services, during ongoing budget deficits.',
        'Locking a growing share of the budget into the Charter (“ballot-box budgeting”) reduces the Mayor’s and Council’s ability to set priorities each year.',
        'By 2036-37 the increase reaches about $497 million a year, larger than the new sales tax Measure FD would raise for the Fire Department.',
        'The emergency safety valve only trims up to 30% of the added funding, and only after a two-thirds Council vote.',
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
      'Charter Amendment PRT makes several changes to the City’s three proprietary departments (the Port, LAX/Van Nuys airports, and DWP), which run on their own revenue, not the General Fund. It lets airport and DWP leases run up to 66 years (now 50), requires three Airport Commissioners from the LAX area and two from the Van Nuys area (now one each), writes into the Charter the Port’s practice of setting aside operating income for waterfront public access, and requires workforce-impact disclosures for Port lease and development applications.',
      'Most of the measure codifies existing practice or is cost-neutral, according to the City’s fiscal analyst; the policy choices are longer leases for airport and utility land and more neighborhood representation on the airport board.',
    ],
    introParagraphs: [
      'Placed on the ballot by the City Council. Councilmembers Tim McOsker (whose district includes the Port), Imelda Padilla, and Traci Park (whose district includes LAX) signed the argument in favor along with neighborhood advocates. No argument against was submitted.',
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
        'No tax or General Fund money is involved; these departments pay their own way from airport, port, and utility revenue.',
        'If you live near LAX or Van Nuys Airport, more of the Airport Commission would come from your area.',
        'Harbor-area communities such as San Pedro and Wilmington would have their share of Port income for waterfront access written into the Charter rather than left to Port policy.',
        'Longer leases on airport and DWP land can attract private investment but tie up public land for up to two generations.',
      ],
      mechanismBullets: [
        'Airport and DWP leases: up to 66 years (or the maximum allowed by state or federal law, if less), if the Council finds a term over 30 years is in the City’s interest; Harbor already allows 66 years.',
        'Board of Airport Commissioners (seven members): three must live in the area around LAX and two in the area around Van Nuys Airport; the Council may define subareas by ordinance.',
        'Port: the Harbor Commission must allocate a portion of operating income each year to waterfront public access and other public-serving projects in a Public Access Investment Plan; the Commission alone decides the amount.',
        'Port: applicants for leases, lease extensions or amendments, or developments needing a Coastal Development Permit must submit a workforce impact disclosure; small businesses and nonprofits may be exempted from the economic analysis.',
      ],
      argumentsFor: [
        'Neighborhoods that bear airport noise and traffic get more direct representation on the board that runs the airports.',
        'Codifying the Port’s waterfront investment and job-impact disclosure protects commitments to harbor communities from being dropped later.',
        'Longer lease terms match the Port and can support long-term private investment in airport and utility infrastructure.',
        'The City’s fiscal analyst finds the changes cost-neutral to taxpayers.',
      ],
      argumentsAgainst: [
        'Residency quotas for five of seven Airport Commissioners could favor neighborhood concerns over the regional and economic role of the airports.',
        '66-year leases commit public land well beyond the tenure of today’s officials.',
        'Workforce-impact disclosure adds paperwork for Port tenants and could be used to slow automation or projects.',
        'The Harbor Commission sets the waterfront allocation itself, so the Charter mandate may change little in practice.',
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
      'The City Charter, not the school district, sets campaign-finance rules for LAUSD Board of Education candidates. Charter Amendment SC deletes the separate school-board section and makes those candidates follow the same rules as mayoral candidates, except for City-only provisions such as public matching funds and the limits on contributions from City contractors and lobbyists.',
      'It also lets the City Council add restrictions or exceptions by ordinance. Contribution limits stay at a $1,000 baseline per office, and the Ethics Commission keeps its audit and enforcement powers. The City’s fiscal analyst expects no financial impact.',
    ],
    introParagraphs: [
      'Placed on the ballot by the City Council. It appears only on ballots of City voters who live inside LAUSD (the City Clerk’s pamphlet version for City voters outside LAUSD omits it). Councilmember Adrin Nazarian, LAUSD board member Nick Melvoin, former Charter Reform Commissioner Diego Andrades, California Common Cause, and the League of Women Voters of Greater Los Angeles signed the argument in favor. No argument against was submitted.',
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
        'LAUSD board races draw some of the most expensive outside spending in local politics; this measure governs the candidates’ own campaigns, not independent spending.',
        'For voters, little changes on day one: the rules are already similar, and contribution limits stay at a $1,000 baseline.',
        'The meaningful change is that the City Council could later tighten or loosen school-board campaign rules by ordinance instead of a Charter vote.',
      ],
      mechanismBullets: [
        'Repeals the duplicative campaign-finance language in Charter section 803 (Board of Education).',
        'Applies the mayoral rules in Charter sections 470 and 471 and Municipal Code Article 9.7 to school board candidates, except provisions that apply only to City offices, such as public matching funds and limits on contributions from City contractors and lobbyists.',
        'Keeps contribution limits (baseline $1,000 per office, periodically adjusted), treasurer and disclosure requirements, fundraising windows, and Ethics Commission audit and enforcement powers.',
        'Allows additional restrictions or exceptions by ordinance.',
      ],
      argumentsFor: [
        'Removes duplication so one set of rules governs both mayoral and school board campaigns, making them easier to follow and enforce.',
        'Backed by good-government groups California Common Cause and the League of Women Voters.',
        'No cost to the City.',
        'Lets the City update school board rules as campaign practices change without a citywide election.',
      ],
      argumentsAgainst: [
        'Delegating changes to ordinance means the Council, whose members can have stakes in school board races, could loosen rules without a public vote.',
        'School board candidates are not covered by the contractor and lobbyist contribution limits or public matching funds that apply to City races.',
        'Because rules are already similar, the practical benefit is modest, while the ordinance authority is a lasting shift.',
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
      'Measure FD would raise the City of Los Angeles sales tax by half a cent, from 10.25% to 10.75%, raising about $345 million a year for a dedicated Fire Department fund with no end date unless voters repeal it. The money would pay for firefighters, paramedics, civilian staff, engines, ambulances, helicopters, stations, communications, and brush clearance.',
      'LAFD’s budget is about $900 million this year (LAist), so FD would be a large expansion. The tax can only be collected in years when the City keeps its own LAFD funding at its 10-year average share of the discretionary budget. The fight is over whether a permanent, earmarked sales tax is the right fix for slow response times or whether City Hall should reprioritize the existing budget.',
    ],
    introParagraphs: [
      'A citizen initiative written by the firefighters’ union (United Firefighters of Los Angeles City), which submitted more than 225,000 signatures; the Council then voted 14-0 in June to place it on the ballot, a required step for a qualified initiative (LAist). Because it is a citizen initiative, it needs only a simple majority even though the ordinance itself calls it a special tax. Fire Chief Jaime Moore, Mayor Karen Bass, and Councilmember Traci Park support it; the Howard Jarvis Taxpayers Association signed the ballot argument against, and the Los Angeles Police Protective League announced in October that it will spend several million dollars opposing it (NBC Los Angeles). No public poll has been found.',
      'It would be the third sales-tax increase for City residents in two years, after County Measure A (2024) and Measure ER (June 2026). Prop 43 on this same ballot would require two-thirds for citizen-initiated special taxes starting Jan. 1, 2027, which does not apply to this vote.',
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
        'Anyone buying taxable goods in the City pays about 5 cents more per $10, about 50 cents per $100; sales taxes take a bigger share of income from lower-income households.',
        'Supporters say LAFD paramedics often take nearly twice the national four-minute standard to reach medical calls, which are over 80% of LAFD calls (pamphlet argument).',
        'The money is locked to LAFD and cannot be spent on anything else, which protects fire funding but reduces the City’s flexibility in a downturn.',
        'The tax has no end date; it ends only if voters repeal it or the City cuts its own LAFD funding below the 10-year baseline.',
      ],
      mechanismBullets: [
        'Rate: adds a 0.5% transactions and use tax, raising the City rate from 10.25% to 10.75%; operative the first calendar quarter more than 110 days after adoption (as early as April 1, 2027, per LAist).',
        'Uses: firefighter, paramedic, and civilian staffing; fire trucks, engines, ambulances, aircraft and helicopters; equipment; fire station and EMS facility construction (under project labor agreements and prevailing wage); emergency communications; brush clearance and wildfire preparedness.',
        'Maintenance of effort: the City must keep LAFD at its average share of discretionary funding over the prior ten fiscal years, or the tax cannot be levied that year.',
        'Oversight: a five-member Citizens’ Oversight Committee (one appointee each from the Mayor, Fire Chief, Controller, City Administrative Officer, and Public Safety Committee chair) reviews spending and reports at least yearly; annual audits.',
        'Council may amend only to implement or further its purposes, not change the rate or duration, and only by two-thirds vote after 30 days’ notice.',
        'Threshold: the ordinance describes it as a special tax; as a citizen initiative it needs a simple majority under current California court rulings.',
      ],
      argumentsFor: [
        'LAFD has about 3,400 firefighters in 106 stations (LAist) and, per the union, no more firefighters than in 1965 despite 50% population growth; supporters say FD would fund at least 1,000 more.',
        'Faster medical response matters: brain damage in cardiac arrest begins within 4 to 6 minutes, and LA response times run well beyond the four-minute standard (pamphlet argument).',
        'After the January 2025 fires, dedicated money for brush clearance, aircraft, and staffing is a direct wildfire-preparedness investment.',
        'The locked fund, maintenance-of-effort rule, audits, and oversight committee prevent the City from swapping out its own LAFD funding.',
      ],
      argumentsAgainst: [
        'It is a permanent, regressive sales tax and the third increase in two years, pushing the City rate to 10.75%.',
        'Critics say the City should fund its core public-safety duty from its more than $8.1 billion General Fund instead of spending on projects like the $2.7 billion Convention Center upgrade (Howard Jarvis Taxpayers Association).',
        'Earmarking $345 million a year for one department reduces flexibility; the police union objects that the money can only go to LAFD and never expires.',
        'It reaches the ballot as a citizen initiative and so needs only a majority, though the same earmarked tax placed by the Council would need two-thirds; Prop 43 would close that path starting in 2027.',
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
