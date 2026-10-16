import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Colorado statewide ballot measures — Nov 3, 2026 general election (one-off for Denver ZIP 80204).
 * 14 measures certified by the Colorado Secretary of State on Sept 4, 2026; listed here in official
 * ballot order (initiated constitutional amendments, then the referred statute, then initiated statutes),
 * which matches the 2026 Blue Book (Legislative Council Staff, Research Publication No. 842).
 * Ballot titles, vote thresholds, mechanics, fiscal impact and for/against arguments: 2026 Blue Book.
 * Committees: Secretary of State 2026 committee contact list. Money: Colorado Sun explainers citing
 * TRACER filings through mid-September 2026 (Sept 16 for most). No public polling on individual
 * measures was found as of Oct 9, 2026.
 *
 * Vote thresholds: constitutional amendments need 55% (Colo. Const. art. V, sec. 1(4)(b)) unless limited
 * to a repeal — the Blue Book lists Amendment 87 at a simple majority. Statutory propositions need a majority.
 * TABOR: Amendment 87 is a TABOR tax increase (capitalized “SHALL STATE TAXES BE INCREASED” title);
 * Proposition NN and Proposition 137 are TABOR “voter-approved revenue changes” that let the state keep
 * money that would otherwise be refunded.
 */
const BLUE_BOOK = 'https://content.leg.colorado.gov/sites/default/files/2026-blue-book-en-accessible.pdf';
const SOS_COMMITTEES = 'https://www.coloradosos.gov/pubs/elections/Initiatives/ballot/contacts/2026.html';

const blueBookLink = (label: string, summary: string) => ({ label: `Colorado Blue Book 2026 — ${label} (PDF)`, url: BLUE_BOOK, summary });
const sosCommitteesLink = {
  label: 'Colorado Secretary of State — registered committees for and against 2026 measures',
  url: SOS_COMMITTEES,
};

// ───────────────────────────── Money and positions shared ─────────────────────────────
// Totals: monetary contributions in each committee’s 2026 cycle summary on Colorado TRACER, from the Oct. 6, 2026
// reports (period ending Sept. 30), read Oct. 12–13, 2026. In-kind contributions are left out. TRACER’s itemized
// contributions are not reachable by plain links, so donor amounts come from press tallies of earlier filings
// (Rocky Mountain Voice, filings through Oct. 4; Colorado Politics, through Sept. 21; Aspen Times for 137, Oct. 6
// filing) and can trail the totals. Multi-measure committees (Brighter Colorado, Vote Common Sense, The People’s No)
// are named in notes rather than added to a single measure’s total.
// Positions: the Colorado Democratic Party’s State Central Committee slate. No official Colorado Republican Party
// slate was found (only county parties’ guides), so it is omitted.
// Editorials (checked Oct. 15, 2026): The Denver Gazette editorial board’s picks for all 14 measures come from its
// Nov. 3 recommendations page, with the measure’s own endorsement editorial linked where one was found. The Denver
// Post editorial board: Amendments 81–85 from its own editorials (read in a browser Oct. 15; 81, 82 and 83 say “vote
// no” outright, 85 “yes”, and 84 argues against the amendment throughout); Amendment 87 No from its Oct. 11 editorial
// as reported by Complete Colorado (Oct. 14). Its roundup page is paywalled, so its other picks aren’t listed yet.
// No Boulder Daily Camera or Colorado Sun board endorsements were found.
const GAZETTE_ORG = 'The Denver Gazette editorial board';
const GAZETTE_GUIDE_URL = 'https://www.denvergazette.com/2026/10/12/denver-gazette-editorial-board-recommendations-nov-3-ballot/';
const gazette = (position: 'Yes' | 'No', url: string = GAZETTE_GUIDE_URL) => ({ org: GAZETTE_ORG, kind: 'editorial' as const, position, url });
const post = (position: 'Yes' | 'No', url: string) => ({ org: 'The Denver Post editorial board', kind: 'editorial' as const, position, url });
const MONEY_AS_OF = 'Sept. 30, 2026';
const tracer = (name: string, orgId: number) => ({
  label: `Colorado TRACER — ${name}`,
  url: `https://tracer.sos.colorado.gov/PublicSite/SearchPages/CommitteeDetail.aspx?OrgID=${orgId}`,
});
const RMV_MONEY = {
  label: 'Rocky Mountain Voice — all 14 measures with committee money (filings through Oct. 4, 2026)',
  url: 'https://rockymountainvoice.com/2026/10/06/whats-on-your-2026-colorado-ballot-all-14-statewide-measures/',
};
const CP_MONEY = {
  label: 'Colorado Politics — major donors in Colorado ballot measure fights (Sept. 25, 2026)',
  url: 'https://www.coloradopolitics.com/2026/09/25/major-donors-fuel-colorado-ballot-measure-fights-across-the-state/',
};
const BRIGHTER = tracer('Brighter Colorado', 52270);
const VOTE_COMMON_SENSE = tracer('Vote Common Sense', 52134);
const BRIGHTER_NOTE =
  'Brighter Colorado ($2.61 million through Sept. 30) backs six Advance Colorado measures (81, 82, 85, 86, 132, 136) and opposes 87 and NN; its known funders, Common Sense America ($250,000) and Advance Colorado, do not disclose their donors.';
const VCS_NOTE = 'Vote Common Sense ($646,500) opposes nine measures (81, 82, 84, 85, 132, 133, 134, 135, 136).';
const DEMS_URL = 'https://www.coloradodems.org/2026-ballot-initiatives';
const coDems = (position: 'Yes' | 'No') => ({ org: 'Colorado Democratic Party', kind: 'party' as const, position, url: DEMS_URL });
/** The state party took no position on 83 and 133; the Denver Democrats’ guide says so explicitly. */
const coDemsNoPosition = { org: 'Colorado Democratic Party', kind: 'party' as const, position: 'No position' as const, url: 'https://www.denverdemocrats.org/vote' };

export const RACES_CO_MEASURES: Race[] = [
  // ───────────────────────────── Amendment 81 ─────────────────────────────
  {
    id: 'co-amendment-81',
    categoryId: 'state-props',
    title: 'Amendment 81 — Report certain charged noncitizens to federal immigration authorities',
    tldrLabel: 'Amdt 81 — Notify DHS',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Colorado law now limits how much state and local police help with civil immigration enforcement. Amendment 81 would write a reporting duty into the constitution: when someone is charged with a violent crime, or with any crime after a past felony, officers would have to alert Homeland Security unless they can confirm the person is here legally. The fight is public safety versus due process and trust in police.',
    ],
    introParagraphs: [
      'A citizen initiative from Advance Colorado, a conservative nonprofit that does not disclose its donors, backed by the Brighter Colorado issue committee, which had raised $2.61 million for its six-measure slate through Sept. 30 (Common Sense America, which also does not disclose donors, gave $250,000 in August). The main No committee, Colorado Communities First, had raised about $243,000, largely from the Colorado Immigrant Rights Coalition and the ACLU of Colorado (Colorado Sun; TRACER). As a constitutional amendment it needs 55% to pass.',
    ],
    measure: {
      question:
        'Shall there be an amendment to the Colorado Constitution requiring law enforcement to notify the Department of Homeland Security when a person is charged with either a violent crime or any crime if the person has a prior felony conviction, if law enforcement cannot determine that the person is lawfully present in the United States?',
      yesMeans: 'Requires law enforcement to notify federal immigration authorities within 72 hours of charging someone with a violent crime, or any crime after a felony, if legal status is unconfirmed.',
      noMeans: 'Keeps current law, which allows cooperation on federal criminal matters but limits state and local help with civil immigration enforcement and requires no such notification.',
      funding: {
        asOf: MONEY_AS_OF,
        no: { raised: '$242,700', topDonors: ['Colorado Immigrant Rights Coalition ($158,954)', 'ACLU of Colorado ($58,597)'] },
        note: 'No measure-specific Yes committee has reported money (Eagle County Republican Women Club: $0). ' + BRIGHTER_NOTE + ' No total is Colorado Communities First; The People’s No ($200,000, against 81, 132, 134 and 135) and ' + VCS_NOTE,
        sources: [tracer('Colorado Communities First', 52247), BRIGHTER, VOTE_COMMON_SENSE, RMV_MONEY],
      },
      positions: [coDems('No'), post('No', 'https://www.denverpost.com/2026/10/02/amendment-81-ice-colorado-arrests-criminal-police/'), gazette('Yes', 'https://www.denvergazette.com/2026/10/13/editorial-another-reason-to-vote-for-amendment-81/')],
      measureType: 'Initiated constitutional amendment',
      voteThreshold: '55%',
      fiscalImpact:
        'One-time state costs of about $60,000 for computer updates (Department of Revenue $50,000; Natural Resources $10,000), paid from the General Fund, plus more workload for state and local law enforcement — mostly district attorney offices, since the duty starts when charges are filed (Blue Book).',
      supporters: 'Brighter Colorado; Eagle County Republican Women Club (registered Yes committees); sponsor Advance Colorado',
      opponents: 'Colorado Communities First; The People’s No; Vote Common Sense; People for a Fair Colorado (registered No committees)',
      voterConnection: [
        'Applies at the charging stage, before any trial or conviction — including a person with an old felony who is later charged with a traffic or petty offense.',
        'In Denver, which bars immigration agents from city property such as courthouses, this would override local policy for the covered cases; El Paso County already requires notification.',
        'District attorneys’ offices, funded by county taxpayers, would carry most of the new status checks.',
      ],
      mechanismBullets: [
        'Covers people formally charged with a “crime of violence” (murder, assault, kidnapping, aggravated robbery, certain sex offenses, human trafficking, etc.) or charged with any crime after any prior felony conviction.',
        'Police, correctional officers and DA personnel must make a “reasonable effort” to determine lawful presence; neither that term nor “lawful presence” is defined.',
        'If lawful presence cannot be confirmed, they must notify the U.S. Department of Homeland Security within 72 hours of filing charges.',
        'Overrides, for these cases, state laws that bar sharing nonpublic personal information with immigration authorities (violations now carry fines up to $50,000).',
        'As a constitutional provision, it could be changed only by another statewide vote.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Violent offenders and repeat felons who are in the country illegally should be referred for possible removal before they can reoffend.',
        'It targets only serious cases, not law-abiding immigrants, and creates one statewide standard instead of a patchwork of local policies.',
        'Supporters note even California and New York allow cooperation with Homeland Security on violent criminals.',
      ],
      argumentsAgainst: [
        'Charges are accusations, not convictions; people could face deportation before trial, and legal residents who cannot prove status in 72 hours could be swept up.',
        'Undefined terms leave officers to decide whom to check, which opponents say invites profiling by language or appearance.',
        'Fear of immigration consequences may deter victims and witnesses from reporting crimes or cooperating with police.',
        'It locks immigration-enforcement policy into the constitution, where it is hard to fix.',
      ],
      readingLinks: [
        blueBookLink('Amendment 81 analysis (pp. 15–18)', 'What counts as a covered charge, current state limits on cooperation, fiscal impact.'),
        {
          label: 'Colorado Sun — Amendment 81 explained (Sep 29, 2026)',
          url: 'https://coloradosun.com/2026/09/29/amendment-81-explained-colorado-immigration/',
          summary: 'Backers (Advance Colorado, Brighter Colorado) and opponents (Colorado Communities First).',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '●', 'Progressive Left voters oppose expanding local police roles in immigration enforcement and see reporting people before trial as a due-process violation.'],
      ['EL', 'No', '●', 'Establishment Liberals value presumption of innocence and community trust in police, and object to undefined constitutional terms that invite litigation.'],
      ['DM', 'No', '◐', 'Democratic Mainstays care about crime, but many are Black and Hispanic voters wary of status checks that could rest on appearance or accent.'],
      ['OL', 'No', '●', 'Outsider Left voters distrust both police and federal immigration agencies and would not hand them a new constitutional mandate.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners respond to the “violent offenders only” framing, though immigration enforcement is not a top concern for them.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters are more moderate on immigration overall but support removing violent and repeat offenders who are here illegally.'],
      ['PR', 'Yes', '●', 'Populist Right voters prioritize immigration enforcement and want sanctuary-style limits overridden.'],
      ['CC', 'Yes', '●', 'Committed Conservatives favor cooperation with federal law enforcement and a uniform statewide rule over local sanctuary policies.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives see enforcing immigration law against criminals as basic public order.'],
    ]),
    counterArguments: [
      'CC (Yes ●): But consider No if you object to putting an operational police mandate with undefined terms into the constitution, where courts — not legislators — will shape it.',
      'DM (No ◐): But consider Yes if your priority is that people charged with violent crimes who cannot show legal status are flagged to federal authorities.',
    ],
  },

  // ───────────────────────────── Amendment 82 ─────────────────────────────
  {
    id: 'co-amendment-82',
    categoryId: 'state-props',
    title: 'Amendment 82 — Constitutional right to buy and sell natural gas',
    tldrLabel: 'Amdt 82 — Natural gas right',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Colorado’s climate rules push gas utilities to cut emissions, and Denver now requires electric heat in new large buildings. Amendment 82 would add a right to buy natural gas for cooking and heating — and for utilities to sell it — to the constitution. Backers call it protecting consumer choice; opponents say vague wording could undercut building codes, clean-heat plans and local control.',
    ],
    introParagraphs: [
      'A citizen initiative sponsored by Advance Colorado (president Michael Fields). Brighter Colorado, which backs six Advance Colorado measures, had raised $2.61 million through Sept. 30; No Pollution in the Constitution (Conservation Colorado and Western Resource Advocates) had raised $1.86 million. The Yes-only committee, Energy Freedom Alliance of the Rockies, reported nothing (TRACER; Colorado Sun). Democratic lawmakers floated, then dropped, a May bill to blunt it. Needs 55%.',
    ],
    measure: {
      question:
        'Shall there be an amendment to the Colorado Constitution creating new law granting the right for consumers to purchase natural gas for cooking or heating in homes or businesses and for distributors and utilities to sell natural gas to consumers?',
      yesMeans: 'Adds a constitutional right for consumers to buy natural gas for cooking and heating, and for utilities to sell it, which could limit state and local gas rules.',
      noMeans: 'Keeps current law, under which the PUC, state air regulators and local building codes can regulate or restrict natural gas use and hookups.',
      funding: {
        asOf: MONEY_AS_OF,
        no: { raised: '$1.86 million', topDonors: ['Conservation Colorado and its education fund ($333,090)', 'Western Resource Advocates ($22,120)'] },
        note: 'No total is No Pollution in the Constitution; its donor amounts are from filings through Oct. 4, when it had raised $355,210. Energy Freedom Alliance of the Rockies (Yes) reported $0. ' + BRIGHTER_NOTE + ' ' + VCS_NOTE,
        sources: [tracer('No Pollution in the Constitution', 52097), tracer('Energy Freedom Alliance of the Rockies', 52471), BRIGHTER, RMV_MONEY],
      },
      positions: [coDems('No'), post('No', 'https://www.denverpost.com/2026/09/21/amendment-82-natural-gas-guarantee-home-heating/'), gazette('Yes', 'https://www.denvergazette.com/2026/09/30/endorsement-yes-on-amendments-82-83-84/')],
      measureType: 'Initiated constitutional amendment',
      voteThreshold: '55%',
      fiscalImpact:
        'Minimal state costs to revise building-code guidance and more legal workload for the PUC and environmental agencies; local governments with gas restrictions may face legal and permitting costs to conform their codes (Blue Book).',
      supporters: 'Brighter Colorado; Energy Freedom Alliance of the Rockies; Affordable Colorado (registered Yes committees); sponsor Advance Colorado',
      opponents: 'No Pollution in the Constitution; Vote Common Sense; People for a Fair Colorado (registered No committees); environmental and public-health groups',
      voterConnection: [
        'Most Colorado homes heat with gas; supporters say this guarantees you can keep a gas furnace or stove.',
        'Denver’s 2024 rule requiring electric space and water heating in new large commercial and multifamily buildings could be challenged.',
        'Effects on utility bills are uncertain: courts would decide how far the right limits clean-heat plans and emissions rules.',
      ],
      mechanismBullets: [
        'Adds two sentences: consumers may buy natural gas for cooking or heating in homes and businesses; distributors and utilities may sell it.',
        'Blue Book: it “may limit the ability” of the state or local governments to enforce existing or future natural gas regulations.',
        'Context: a PUC rule (Dec 2025) requires gas utilities to plan for a 41% emissions cut from 2015 levels by 2035; towns such as Crested Butte require all-electric new homes.',
        'No definitions or exceptions are written in, so the scope would be set by litigation.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Natural gas is affordable and reliable, including in extreme cold, and most Colorado households depend on it.',
        'It protects homeowners and businesses from state or local bans on gas hookups and appliances.',
        'Supporters say aggressive climate goals threaten consumer choice and raise energy costs.',
      ],
      argumentsAgainst: [
        'Burning gas drives climate change and indoor and outdoor air pollution; it should not be shielded in the constitution.',
        'Vague language could hamper safety rules, building codes and the state’s clean-heat plans, with courts sorting it out.',
        'Communities should decide their own energy, health and climate priorities.',
        'Opponents say it protects utilities’ right to sell as much as consumers’ right to buy.',
      ],
      readingLinks: [
        blueBookLink('Amendment 82 analysis (pp. 19–20)', 'Current regulation of gas utilities and local building codes; fiscal impact.'),
        {
          label: 'Colorado Sun — Amendment 82 explained (Sep 30, 2026)',
          url: 'https://coloradosun.com/2026/09/30/amendment-82-explained-colorado-natural-gas/',
          summary: 'Advance Colorado sponsorship, fundraising, Denver electrification rule, Clean Heat Plans.',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '●', 'Progressive Left voters prioritize climate action and see a constitutional fossil-fuel right as a direct block on decarbonization.'],
      ['EL', 'No', '●', 'Establishment Liberals back the state’s emissions targets and object to vague constitutional text that would be settled by lawsuits.'],
      ['DM', 'No', '◐', 'Democratic Mainstays follow Democratic and public-health opposition, though worries about heating costs make some sympathetic.'],
      ['OL', 'No', '◐', 'Outsider Left voters care about climate but are less engaged with utility regulation; the utility-friendly “right to sell” cements their No.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners worry about energy bills and may hear this as protecting cheap heat, a soft lean.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters like consumer choice and affordable energy but may hesitate at amending the constitution for it.'],
      ['PR', 'Yes', '●', 'Populist Right voters see gas-appliance restrictions as government overreach into their homes.'],
      ['CC', 'Yes', '●', 'Committed Conservatives favor limiting energy regulation and protecting market choice.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives oppose climate mandates and support fossil-fuel access.'],
    ]),
    counterArguments: [
      'CC (Yes ●): But consider No if you think utility regulation belongs in statute, and that a sweeping constitutional right with no definitions invites years of litigation.',
      'DM (No ◐): But consider Yes if keeping a gas furnace or stove affordable and available is your main concern.',
    ],
  },

  // ───────────────────────────── Amendment 83 ─────────────────────────────
  {
    id: 'co-amendment-83',
    categoryId: 'state-props',
    title: 'Amendment 83 — Constitutional right to hunt and fish',
    tldrLabel: 'Amdt 83 — Hunt & fish right',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'After the 2024 fight over banning mountain lion and bobcat hunting (Prop 127, which failed), hunters want their sport protected from future votes and regulators. Amendment 83 would make hunting and fishing by “traditional methods” a constitutional right and the preferred way to manage wildlife. Opponents fear the vague language could unwind voter-approved limits on trapping and bear hunting.',
    ],
    introParagraphs: [
      'A citizen initiative largely funded by the Theodore Roosevelt Conservation Alliance (at least $1.5 million), with Safari Club International, Farrell-Roeh Capital ($150,000) and others (Colorado Sun). Yes committees had raised about $2.01 million through Sept. 30; opposition committees (Protect Colorado’s Constitution, Colorado Hunters and Anglers for Sensible Wildlife Conservation, Stop the Constitutional Power Grab) about $170,000. Twenty-four states have similar amendments. Needs 55%.',
    ],
    measure: {
      question:
        'Shall there be an amendment to the Colorado Constitution creating a constitutional right to hunt, fish, and harvest fish and wildlife by traditional methods, except non-game, endangered, or federally protected species; establishing hunting and fishing as the preferred means of managing fish and wildlife populations; and preserving the state’s right to regulate hunting, fishing, and wildlife management if necessary for sound scientific conservation, public safety, or to preserve future hunting and fishing opportunities? (condensed)',
      yesMeans: 'Creates a constitutional right to hunt and fish by traditional methods and makes them the preferred way to manage wildlife, while allowing science- and safety-based regulation.',
      noMeans: 'Keeps hunting and fishing governed by existing state and federal law and Parks and Wildlife rules, with no constitutional right and no preferred management method.',
      funding: {
        asOf: MONEY_AS_OF,
        yes: {
          raised: '$2.01 million',
          topDonors: ['Theodore Roosevelt Conservation Alliance ($1.56M)', 'Farrell-Roeh Capital ($150,000)', 'Jeff DeMaske ($100,000)', 'Safari Club International, Colorado chapter ($50,000)'],
        },
        no: { raised: '$169,800', topDonors: ['Center for a Humane Economy ($100,000)', 'Sierra Club ($30,000)'] },
        note: 'Yes: Vote Yes on 83 ($1.89 million) and Colorado’s Wildlife Deserve Better ($128,520). No: Colorado Hunters and Anglers for Sensible Wildlife Conservation ($161,905), Protect Colorado’s Constitution ($6,825) and Stop the Constitutional Power Grab ($1,025).',
        sources: [tracer('Vote Yes on 83', 52051), tracer('Colorado Hunters and Anglers for Sensible Wildlife Conservation', 52338), RMV_MONEY],
      },
      positions: [coDemsNoPosition, post('No', 'https://www.denverpost.com/2026/09/24/amendment-83-hunting-fishing-right-constitution/'), gazette('Yes', 'https://www.denvergazette.com/2026/09/30/endorsement-yes-on-amendments-82-83-84/')],
      measureType: 'Initiated constitutional amendment',
      voteThreshold: '55%',
      fiscalImpact:
        'No significant near-term change in state spending, but Colorado Parks and Wildlife may face higher legal costs to vet new rules and defend challenges; amounts cannot be estimated (Blue Book).',
      supporters: 'Let’s Go Colorado; Vote Yes on 83; Colorado’s Wildlife Deserve Better; Hunt to Conserve Colorado (registered Yes committees)',
      opponents:
        'Protect Colorado’s Constitution; Stop the Constitutional Power Grab; Colorado Hunters and Anglers for Sensible Wildlife Conservation; Vote No 83; People for a Fair Colorado (registered No committees)',
      voterConnection: [
        'No immediate change: seasons, licenses and bag limits stay in place, and trespass law is unchanged.',
        'Hunting and fishing licenses fund about one-third of CPW’s budget (about $115 million a year), so supporters tie the sport to habitat funding.',
        'Future wildlife rules, and future ballot measures restricting hunting, could face constitutional challenges.',
      ],
      mechanismBullets: [
        'Creates a right to hunt, fish and harvest wildlife by “traditional methods” (undefined), excluding nongame, endangered and federally protected species.',
        'Makes hunting and fishing the “preferred means” of managing fish and wildlife populations.',
        'Keeps state power to regulate when necessary for sound scientific conservation, public safety, or preserving future hunting and fishing.',
        'Does not change trespass laws on private land.',
        'Opponents say it could be used to challenge voter-approved bans such as steel-jaw traps and spring bear hunting with bait or hounds.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Gives lasting protection against future efforts to restrict or end hunting and fishing, as 24 other states have done.',
        'Hunting and fishing are part of Colorado’s heritage and a major tourism and recreation economy.',
        'License revenue funds habitat and wildlife management statewide; supporters say the measure keeps current tools such as bag limits intact.',
      ],
      argumentsAgainst: [
        'The constitution should protect fundamental rights, not one form of recreation; Colorado already manages wildlife well.',
        '“Traditional methods” and “preferred means” are undefined and could spur costly lawsuits against reasonable rules.',
        'Elevating hunting over other management tools could slow the state’s response to wildlife crises, as CPW’s commission chair warned (speaking for himself).',
      ],
      readingLinks: [
        blueBookLink('Amendment 83 analysis (pp. 21–23)', 'How CPW regulates today and how courts could apply the new right.'),
        {
          label: 'Colorado Sun — Amendment 83 explained (Oct 1, 2026)',
          url: 'https://coloradosun.com/2026/10/01/amendment-83-explained-colorado-right-hunt-fish/',
          summary: 'Funders, opposing groups, Prop 127 background, debate over “traditional methods”.',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '●', 'Progressive Left voters side with wildlife advocates who want room to restrict trapping and trophy hunting, and object to constitutionalizing one management method.'],
      ['EL', 'No', '◐', 'Establishment Liberals prefer science-based regulation by CPW and dislike vague constitutional language, though hunting itself is not their fight.'],
      ['DM', 'No', '○', 'Democratic Mainstays have little stake here; the litigation risk and lack of need tip them slightly to No.'],
      ['OL', 'No', '◐', 'Outsider Left voters see a measure funded by national hunting groups as protecting a special interest rather than people.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners, many rural and working-class, lean toward protecting a traditional pastime but are not strongly engaged.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters value outdoor heritage and resist activist-driven restrictions, with some hesitation about amending the constitution.'],
      ['PR', 'Yes', '●', 'Populist Right voters see hunting as a way of life threatened by urban voters and want it protected from future ballot bans.'],
      ['CC', 'Yes', '●', 'Committed Conservatives support individual rights and limiting regulators’ discretion over traditional activities.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives treat hunting and fishing as part of national and family tradition worth constitutional protection.'],
    ]),
    counterArguments: [
      'AR (Yes ◐): But consider No if you would rather let wildlife biologists and CPW keep flexibility than invite courts to second-guess them.',
      'EL (No ◐): But consider Yes if you see the measure mainly as protecting a license-funded conservation system from single-issue ballot campaigns.',
    ],
  },

  // ───────────────────────────── Amendment 84 ─────────────────────────────
  {
    id: 'co-amendment-84',
    categoryId: 'state-props',
    title: 'Amendment 84 — ID numbers on mail ballot envelopes',
    tldrLabel: 'Amdt 84 — Mail ballot ID',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'About 92% of Colorado ballots in 2024 were mail ballots, checked today by signature match. Amendment 84 would also require the last four digits of your Social Security number or Colorado driver’s license/ID on the envelope for federal and state elections; ballots with missing or mismatched numbers would not count unless fixed within eight days. Security versus access is the core trade-off.',
    ],
    introParagraphs: [
      'Filed by Suzanne Taheri (former deputy secretary of state, West Group) and Chuck Broerman (Republican former El Paso County clerk). The Yes committee, Colorado Voter Trust Initiative, raised $4.2 million through Sept. 30, all from three nonprofits using shipping-store addresses that do not disclose donors, so the ultimate funders are unknown (Colorado Sun; TRACER). Opponents include the League of Women Voters and Common Cause; the No committee, Defend Our Ballots, had raised $171,000. Needs 55%.',
    ],
    measure: {
      question:
        'Shall there be an amendment to the Colorado Constitution requiring a voter to sign and include the last four digits of their Social Security number or their Colorado driver’s license or identification card number on the outside of their mail ballot for any federal or state election; allowing the voter to correct missing or incorrect information, including with alternative forms of identification; and prohibiting a county clerk from counting the mail ballot unless the problem is fixed?',
      yesMeans: 'Requires mail voters in state and federal elections to add the last four digits of their SSN or Colorado ID number to the envelope; uncorrected ballots are not counted.',
      noMeans: 'Keeps the current system, in which election judges verify mail ballots by matching the voter’s signature alone, with no ID number required on the envelope.',
      funding: {
        asOf: MONEY_AS_OF,
        yes: {
          raised: '$4.2 million',
          topDonors: ['Coalition for American Prosperity and Growth ($2.25M)', 'A Public Voice ($1M)', 'American Jobs and Growth Fund ($1M)'],
        },
        no: { raised: '$171,000' },
        note: 'All three Yes donors are nonprofits registered at shipping-store mailbox addresses that do not disclose their own donors, so the measure’s ultimate funders are unknown. No total is Defend Our Ballots Issue Committee, whose donors were not reported in news coverage; ' + VCS_NOTE,
        sources: [tracer('Colorado Voter Trust Initiative', 52101), tracer('Defend Our Ballots Issue Committee', 52411), CP_MONEY],
      },
      positions: [coDems('No'), post('No', 'https://www.denverpost.com/2026/10/07/endorsement-amendment-84-ballot-social-security-number/'), gazette('Yes', 'https://www.denvergazette.com/2026/09/30/endorsement-yes-on-amendments-82-83-84/')],
      measureType: 'Initiated constitutional amendment',
      voteThreshold: '55%',
      fiscalImpact:
        'Up to $2.7 million in state and county costs in 2026-27 and $1.2 million a year after, for election staff, notices, envelopes and outreach; the state reimburses about 45% of county costs, historically from Secretary of State fees, so business filing fees may rise (Blue Book).',
      supporters: 'Colorado Voter Trust Initiative (registered Yes committee)',
      opponents:
        'Defend Our Ballots; Vote Common Sense; People for a Fair Colorado (registered No committees); League of Women Voters of Colorado; Common Cause Colorado',
      voterConnection: [
        'If you vote by mail, you would write an ID number on the envelope in addition to signing it.',
        'Colorado IDs used must be Real ID-compliant; if you lack one you can use your SSN digits, or vote in person with broader ID options.',
        'A missing or mismatched number means your ballot is set aside until you cure it within eight days after Election Day.',
      ],
      mechanismBullets: [
        'Applies to federal and statewide elections; adds to, does not replace, signature verification.',
        'Acceptable numbers: last four of SSN, or Colorado driver’s license or ID number (Real ID-compliant).',
        'Cure options: copy of an allowed ID, U.S. passport, U.S. military ID, or tribal photo ID, submitted in person or digitally; broader options for voters with disabilities and older voters entitled to vote by mail under federal law.',
        'In-person ID rules are unchanged.',
        'Constitutional, so only another statewide vote could change it.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'ID numbers are more objective than signature matching and add a second check on every mail ballot.',
        'Most voters already have a qualifying ID or know their SSN; those who do not can vote in person.',
        'A visible extra safeguard can boost public confidence that ineligible ballots are not counted.',
      ],
      argumentsAgainst: [
        'Signature verification already catches the rare fraud attempts; this adds burden without meaningful security gain.',
        'Small mistakes could get eligible voters’ ballots rejected, and writing ID digits on an envelope raises identity-theft concerns.',
        'Extra review could slow counting and discourage use of the state’s most popular voting method.',
        'Opponents question the $4.2 million campaign funded through groups that do not reveal their donors.',
      ],
      readingLinks: [
        blueBookLink('Amendment 84 analysis (pp. 24–26)', 'How signature verification works now, cure process, county costs.'),
        {
          label: 'Colorado Sun — Amendment 84 explained (Oct 3, 2026)',
          url: 'https://coloradosun.com/2026/10/03/amendment-84-explained-ballot-id-numbers/',
          summary: 'Sponsors, the $4.2 million Yes campaign’s undisclosed funding, and opponents’ arguments.',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '●', 'Progressive Left voters see new ballot-ID requirements as voter suppression that falls hardest on young, poor and minority voters.'],
      ['EL', 'No', '●', 'Establishment Liberals trust Colorado’s well-regarded mail system and the election officials who say signature checks work.'],
      ['DM', 'No', '◐', 'Democratic Mainstays prize easy access to voting, though some find a simple ID number reasonable.'],
      ['OL', 'No', '●', 'Outsider Left voters oppose added hurdles for younger, mobile voters who use mail ballots most.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners often find voter ID intuitive, but they vote rarely and hold the view loosely.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters favor voter ID in principle; the identity-theft and rejected-ballot concerns give some pause.'],
      ['PR', 'Yes', '●', 'Populist Right voters distrust mail voting and want stronger verification.'],
      ['CC', 'Yes', '●', 'Committed Conservatives consistently support voter ID as basic election integrity.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives prioritize election security and back ID requirements.'],
    ]),
    counterArguments: [
      'CC (Yes ●): But consider No if you object to a $4.2 million campaign whose donors are hidden, or to locking ballot procedures into the constitution rather than statute.',
      'DM (No ◐): But consider Yes if you think writing a four-digit number is a small, fair price for an objective second check on mail ballots.',
    ],
  },

  // ───────────────────────────── Amendment 85 ─────────────────────────────
  {
    id: 'co-amendment-85',
    categoryId: 'state-props',
    title: 'Amendment 85 — Ballot questions at an 8th-grade reading level',
    tldrLabel: 'Amdt 85 — Plain-language titles',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Colorado law already requires plain-language ballot titles, but also requires initiatives that change taxes to include set wording on their effects — such as which programs a tax cut could squeeze. Amendment 85 sets an 8th-grade reading standard and bars laws requiring initiative-title language that conflicts with it. The question is whether that clarifies ballots or strips useful fiscal warnings.',
    ],
    introParagraphs: [
      'Filed by Advance Colorado (designated representatives Suzanne Taheri and Michael Fields); Common Sense America spent $500,000 on its signature drive. Supporters also include former Denver elections official Amber McReynolds (unaffiliated). The Bell Policy Center and the liberal Vote Common Sense coalition oppose it, noting lawmakers passed an “accessible language” ballot-title law this year (Colorado Sun). Needs 55%.',
    ],
    measure: {
      question:
        'Shall there be an amendment to the Colorado Constitution concerning ballot question language, requiring all state and local ballot questions to be written in plain language and at no more than an 8th grade reading level, and prohibiting a state statute from requiring language that conflicts with these requirements in ballot questions for citizen-initiated measures?',
      yesMeans: 'Requires every state and local ballot question to be in plain language at no more than an 8th-grade reading level, and voids laws requiring conflicting language in initiative titles.',
      noMeans: 'Keeps the current plain-language rule for ballot titles with no grade-level standard, along with required wording on the fiscal effects of tax-change initiatives.',
      funding: {
        asOf: MONEY_AS_OF,
        note: 'No committee raises money for 85 alone. ' + BRIGHTER_NOTE + ' Common Sense America also reported spending $500,000 on 85’s signature drive. ' + VCS_NOTE,
        sources: [BRIGHTER, VOTE_COMMON_SENSE, { label: 'Colorado Sun — Amendment 85 explained (Oct. 3, 2026)', url: 'https://coloradosun.com/2026/10/03/amendment-85-explained-plain-ballot-language/' }],
      },
      positions: [coDems('No'), post('Yes', 'https://www.denverpost.com/2026/10/03/amendment-85-ballot-language-simple-8th-grade/'), gazette('Yes', 'https://www.denvergazette.com/2026/09/23/endorsement-to-put-it-plainly-yes-on-amendment-85-5/')],
      measureType: 'Initiated constitutional amendment',
      voteThreshold: '55%',
      fiscalImpact: 'Minimal added workload for the state Title Board to adopt and apply a reading-level standard (Blue Book).',
      supporters: 'Brighter Colorado (registered Yes committee); sponsors from Advance Colorado',
      opponents: 'Vote Common Sense; People for a Fair Colorado (registered No committees)',
      voterConnection: [
        'Every state and local ballot question would have to be readable at an 8th-grade level.',
        'Laws that make citizen tax-cut initiatives list potential spending reductions could be voided for initiatives — but not for measures the Legislature refers.',
        'Who decides whether a title meets the standard is not specified, so disputes would likely go to court.',
      ],
      mechanismBullets: [
        'Requires plain language at no more than an 8th-grade reading level for all state and local ballot titles.',
        'Prohibits statutes requiring language in citizen-initiative titles that interferes with plain language.',
        'Current law already requires titles to be brief, plain and free of jargon where possible, and requires tax-change initiatives to describe taxpayer impacts and, for tax cuts, effects on the three largest spending areas.',
        'Does not define plain language or name who certifies reading level.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Gives the Title Board a concrete standard so voters can understand what they are voting on.',
        'Protects citizen initiatives from future legislatures adding complicated or slanted mandatory wording.',
        'Plain titles help voters navigate technical measures without legal training.',
      ],
      argumentsAgainst: [
        'Unnecessary: state law already requires plain language, and the measure does not explain how its standard differs.',
        'Could block laws that give voters key information, such as the fiscal effects of tax cuts.',
        'Vague constitutional wording invites more legal challenges to ballot titles, slowing the initiative process.',
      ],
      readingLinks: [
        blueBookLink('Amendment 85 analysis (pp. 27–29)', 'Current title-setting rules and which statutes could be affected.'),
        {
          label: 'Colorado Sun — Amendment 85 explained (Oct 3, 2026)',
          url: 'https://coloradosun.com/2026/10/03/amendment-85-explained-plain-ballot-language/',
          summary: 'Sponsors and cross-partisan supporters, Bell Policy Center opposition, New York’s similar standard.',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '◐', 'Progressive Left voters see the measure as a way to strip required warnings about what tax-cut initiatives would cut.'],
      ['EL', 'No', '◐', 'Establishment Liberals trust the nonpartisan Title Board and value detailed fiscal disclosure on ballots.'],
      ['DM', 'Yes', '○', 'Democratic Mainstays find the plain-language goal appealing on its face and are less tuned in to the fiscal-disclosure fight.'],
      ['OL', 'No', '○', 'Outsider Left voters like accessible ballots but distrust a measure written by a conservative group focused on tax initiatives.'],
      ['SS', 'Yes', '◐', 'Stressed Sideliners, often turned off by confusing ballots, would benefit most from simpler wording.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters favor clearer ballots and see mandatory fiscal language as tilting titles against tax cuts.'],
      ['PR', 'Yes', '●', 'Populist Right voters want direct democracy free of legislative and bureaucratic gatekeeping.'],
      ['CC', 'Yes', '◐', 'Committed Conservatives back limiting legislative control over initiative titles, especially for tax measures.'],
      ['FF', 'Yes', '◐', 'Faith and Flag Conservatives favor citizen initiatives and simpler ballots, aligned with the conservative sponsors.'],
    ]),
    counterArguments: [
      'SS (Yes ◐): But consider No if you want ballots to keep telling you which services a tax cut could reduce — that disclosure could be blocked for initiatives.',
      'EL (No ◐): But consider Yes if you believe convoluted titles keep voters from understanding measures, and an objective reading standard helps.',
    ],
  },

  // ───────────────────────────── Amendment 86 ─────────────────────────────
  {
    id: 'co-amendment-86',
    categoryId: 'state-props',
    title: 'Amendment 86 — Independent commission must approve any mid-decade congressional map',
    tldrLabel: 'Amdt 86 — Off-cycle redistricting',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'At least ten states have redrawn congressional maps mid-decade since 2025. Amendment 86 would require any off-cycle change to Colorado’s map to be approved by the independent redistricting commission voters created in 2018 and by the Colorado Supreme Court, and bar maps that favor a party. Supporters call it gerrymandering protection; opponents say it stops Colorado from responding to other states’ partisan redraws.',
    ],
    introParagraphs: [
      'Republican-aligned Advance Colorado launched it after Democrats pursued a 2028 redraw initiative that could have cost Republicans up to three of their five seats; the state Supreme Court unanimously struck that measure in June 2026 on single-subject grounds. Fair Redistricting Colorado received $250,000 from American Revival PAC, created by House Speaker Mike Johnson (Colorado Sun). No committee has registered against it or reported money. Needs 55%.',
    ],
    measure: {
      question:
        'Shall there be an amendment to the Colorado Constitution concerning congressional redistricting, reenacting the current process in the constitution and prohibiting modifications to a final map unless at least three public meetings are held, the modifications do not divide communities of interest or purposefully favor one political party, and are approved by the congressional redistricting commission and the Colorado Supreme Court? (condensed)',
      yesMeans: 'Requires approval by the independent commission and the Colorado Supreme Court, after three public hearings, for any change to Colorado’s congressional map between census redraws.',
      noMeans: 'Keeps the current process, in which the independent commission redraws congressional districts after each census, with no specific rules for mid-decade changes.',
      funding: {
        asOf: MONEY_AS_OF,
        yes: { raised: '$252,500', topDonors: ['American Revival PAC ($250,000)', 'Advance Colorado ($2,500)'] },
        note: 'Yes total is Fair Redistricting Colorado; American Revival PAC was created by House Speaker Mike Johnson, and Advance Colorado does not disclose its donors. ' + BRIGHTER_NOTE + ' No committee has registered against 86; Colorado Draws the Line, which says it will oppose it, reported $0.',
        sources: [tracer('Fair Redistricting Colorado', 52246), tracer('Colorado Draws the Line', 51540), BRIGHTER, RMV_MONEY],
      },
      positions: [coDems('No'), gazette('Yes', 'https://www.denvergazette.com/2026/09/29/endorsement-yes-on-136-86-two-safeguards-for-colorado/')],
      measureType: 'Initiated constitutional amendment',
      voteThreshold: '55%',
      fiscalImpact:
        'About $370,000 in Legislative Department costs in any year the commission must convene to review off-cycle changes, plus small Judicial workload (Blue Book).',
      supporters: 'Fair Redistricting Colorado; Brighter Colorado (registered Yes committees); Advance Colorado',
      opponents: 'People for a Fair Colorado (registered No committee); Colorado Draws the Line has said it will oppose',
      voterConnection: [
        'No change to today’s eight districts; the next regular redraw is in 2031.',
        'Any future attempt — by legislature or ballot initiative — to redraw before then would have to go through the commission and Supreme Court.',
        'National stakes: control of the U.S. House is shaped by states’ mid-decade redraws, and this would limit Colorado’s options.',
      ],
      mechanismBullets: [
        'Re-enacts the 2018 commission process (Amendment Y) and adds rules for off-cycle changes.',
        'Off-cycle modifications require at least three public hearings, commission approval, and adoption by the Colorado Supreme Court.',
        'Prohibits off-cycle maps that intentionally favor a party or unnecessarily divide communities of interest.',
        'Requires the most recent census or another population data source for any redraw.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Keeps any mid-decade change fair, public and nonpartisan, honoring voters’ 2018 choice of an independent commission.',
        'Guards against politicians anywhere redrawing districts for advantage with little public input.',
        'Applies to both parties: neither could push a partisan map through outside the commission.',
      ],
      argumentsAgainst: [
        'Locks Colorado out of responding if other states gerrymander, effectively disarming one side in a national fight.',
        'Voters, not the same commission whose maps might be the problem, should have the final say on districts.',
        'Opponents note it was launched by a conservative group and funded by a PAC tied to the Republican House Speaker.',
      ],
      readingLinks: [
        blueBookLink('Amendment 86 analysis (pp. 30–32)', 'How the 2018 commission works and what off-cycle redistricting means.'),
        {
          label: 'Colorado Sun — Amendment 86 explained (Sep 29, 2026)',
          url: 'https://coloradosun.com/2026/09/29/amendment-86-explained-colorado-redistricting/',
          summary: 'Origins in the struck-down Democratic redraw effort; funding from American Revival PAC.',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '◐', 'Progressive Left voters support independent maps in principle but see this as unilateral disarmament while Republican states gerrymander.'],
      ['EL', 'Yes', '○', 'Establishment Liberals backed the 2018 independent commission and value nonpartisan process, though the partisan origin gives pause.'],
      ['DM', 'Yes', '○', 'Democratic Mainstays favor fair, public processes and the commission voters created, a weak lean given the national stakes.'],
      ['OL', 'No', '○', 'Outsider Left voters distrust a GOP-funded measure and want Democrats free to fight back nationally.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners dislike politicians drawing their own lines, though redistricting is far from their concerns.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters like checks on partisan maps and keeping Colorado’s current balance.'],
      ['PR', 'Yes', '◐', 'Populist Right voters back it to block a Democratic redraw that could cost Republicans seats.'],
      ['CC', 'Yes', '●', 'Committed Conservatives support locking in the commission to prevent a Democratic mid-decade map.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives follow Republican leaders who see this as protecting GOP seats.'],
    ]),
    counterArguments: [
      'EL (Yes ○): But consider No if you believe Colorado should keep the option to respond when other states redraw maps mid-decade for partisan gain.',
      'PL (No ◐): But consider Yes if you think independent, public redistricting should be the rule everywhere, regardless of what other states do.',
    ],
  },

  // ───────────────────────────── Amendment 87 ─────────────────────────────
  {
    id: 'co-amendment-87',
    categoryId: 'state-props',
    title: 'Amendment 87 — Graduated income tax ($2.7B TABOR tax increase)',
    tldrLabel: 'Amdt 87 — Graduated income tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Colorado has taxed income at one flat rate since 1987 (now 4.4%), and TABOR requires it. Amendment 87 would replace that with six brackets: small cuts for taxable income under about $500,000 (at most $325) and higher rates above it, raising roughly $2 billion a year for K-12, health care and child care. It is the biggest tax question on the ballot.',
    ],
    introParagraphs: [
      'Placed on the ballot by liberal groups including the Bell Policy Center, Colorado Fiscal Institute and Colorado Center on Law and Policy; Protect Colorado’s Future had raised $1.18 million in cash through Sept. 30, while No committees had raised about $1.34 million, led by Don’t Price Us Out ($1.06 million) and Americans for Prosperity Colorado (TRACER). Gov. Jared Polis (D) opposes it, calling it “absolutely devastating” to the economy, as do the Colorado Chamber, NFIB and conservative groups (Colorado Sun). Proposition 136 is a competing 4.4% cap. Blue Book: passes with a simple majority.',
    ],
    measure: {
      question:
        'SHALL STATE TAXES BE INCREASED $2.7 BILLION ANNUALLY, to increase or improve public services including K-12 education, health care, and early child care and education, by replacing the uniform state income tax rate with a graduated income tax structure for individuals, estates, trusts, and corporations, while keeping the 4.4% rate on income from the sale of a principal residence, and authorizing the state to retain and spend the increased revenue as a voter-approved revenue change? (condensed)',
      yesMeans: 'Replaces the 4.4% flat income tax with rates of 3.7% to 8.4%, cutting taxes under about $500,000 of income and raising about $2 billion yearly for schools, health care and child care.',
      noMeans: 'Keeps the constitutional requirement that all income be taxed at one flat rate, now 4.4%, with no new revenue for these programs.',
      related: [
        { raceId: 'co-prop-136', note: 'If both pass, Proposition 136’s 4.4% cap conflicts with this measure’s higher brackets; the one with more votes generally controls, but a court or the Legislature may have to decide.' },
      ],
      funding: {
        asOf: MONEY_AS_OF,
        yes: {
          raised: '$1.23 million',
          topDonors: ['Bell Policy Center ($138,000)', 'New Era Colorado Action Fund ($131,000)', 'Colorado Statewide Parent Coalition ($128,000)', 'Great Education Colorado Action ($111,000)'],
        },
        no: { raised: '$1.34 million', topDonors: ['Americans for Prosperity, national group ($49,630)'] },
        note: 'Yes: Protect Colorado’s Future Coalition ($1.18 million, plus $351,935 in-kind) and Great Education Colorado Action ($48,717), which also gave to the coalition. No: Don’t Price Us Out ($1.06 million; donors not yet reported in news coverage), Americans for Prosperity Colorado ($266,476) and Your Family’s Future Alliance ($15,938); Keep Colorado Affordable, Let’s Go Colorado and Affordable Colorado reported no cash. ' + BRIGHTER_NOTE,
        sources: [tracer('Protect Colorado’s Future Coalition', 51642), tracer('Don’t Price Us Out', 52410), tracer('Americans for Prosperity Colorado Issue Committee', 52340), BRIGHTER, RMV_MONEY],
      },
      positions: [coDems('Yes'), { org: 'The Denver Post editorial board', kind: 'editorial', position: 'No', url: 'https://www.denverpost.com/2026/10/11/amendment-87-graduated-income-tax-colorado-endorsement/' }, gazette('No')],
      measureType: 'Initiated constitutional amendment and statute (TABOR tax increase)',
      voteThreshold: 'Simple majority (Blue Book: limited to repealing constitutional language)',
      fiscalImpact:
        'Raises an estimated $958.4 million in 2026-27 (half year) and $1.972 billion in 2027-28; the ballot title’s maximum is $2.7 billion. The new money is exempt from the TABOR limit and must supplement K-12, health care and early childhood funding; TABOR refunds are not affected (Blue Book).',
      supporters: 'Protect Colorado’s Future Coalition; People for a Fair Colorado (registered Yes committees); Bell Policy Center; Colorado WINS',
      opponents:
        'Americans for Prosperity Colorado Issue Committee; Your Family’s Future Alliance; No on 87, Yes on 136; Brighter Colorado; Affordable Colorado; Let’s Go Colorado; Don’t Price Us Out (registered No committees); Gov. Jared Polis; Colorado Chamber of Commerce; NFIB',
      voterConnection: [
        'Average change by income (Blue Book): -$119 at $25,001–$50,000; -$210 at $50,001–$100,000; -$298 at $100,001–$200,000; -$325 up to $1 million; +$4,764 at $1–2 million; +$13,914 at $2–5 million.',
        'About 46,000 filers with income over $1 million would pay about $1.2 billion more combined.',
        'Brackets are not indexed for inflation and joint filers use the same brackets as singles, so more households drift into higher brackets over time.',
        'Home-sale gains stay taxed at 4.4%.',
      ],
      mechanismBullets: [
        'Rates on taxable income starting tax year 2027: 3.7% to $25,000; 4.2% to $100,000; 4.4% to $500,000; 7.4% to $750,000; 7.9% to $1 million; 8.4% above $1 million.',
        'Removes TABOR’s single-rate requirement for income tax.',
        'Added revenue goes to a new Colorado Future’s Account for K-12, health care and early childhood; it must add to, not replace, existing spending, with an audited annual report.',
        'If Proposition 136 (4.4% cap) also passes, the conflict is unresolved; generally the measure with more votes controls, but a court or the Legislature may have to decide.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Cuts taxes for about 97% of taxpayers while asking more of those most able to pay.',
        'Raises about $2 billion a year for schools, health care and child care as the state faces $1 billion-plus budget gaps and federal cuts.',
        'The federal government and 27 states use graduated income taxes; it offsets sales and property taxes that weigh more on lower-income households.',
      ],
      argumentsAgainst: [
        'A multibillion-dollar tax increase that could push high earners and businesses out of state, costing jobs at every income level.',
        'Brackets are not inflation-indexed and impose a marriage penalty, so more people pay higher rates over time.',
        'Opponents say the state should prioritize the money it already collects rather than permanently grow government.',
        'Gov. Polis, a Democrat, says it would hurt the state economy.',
      ],
      readingLinks: [
        blueBookLink('Amendment 87 analysis (pp. 33–40)', 'Bracket table, taxpayer impact by income, revenue estimates, TABOR disclosure.'),
        {
          label: 'Colorado Sun — Amendment 87 voters’ guide (Oct 2, 2026)',
          url: 'https://coloradosun.com/2026/10/02/amendment-87-graduated-income-tax-colorado-voters-guide/',
          summary: 'Backers and opponents, fundraising, Polis’s opposition, interaction with Prop 136.',
        },
        {
          label: 'Bell Policy Center — Colorado Ballot Guide 2026 (advocacy; backs Amendment 87)',
          url: 'https://bellpolicy.org/colorado-ballot-guide-2026/',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters want the wealthy to pay more and more money for schools, health care and child care.'],
      ['EL', 'Yes', '◐', 'Establishment Liberals favor progressive taxation and public investment, though Gov. Polis’s warnings about the economy give some pause.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays would mostly see a small tax cut and more school and health funding, paid by top earners.'],
      ['OL', 'Yes', '●', 'Outsider Left voters strongly support taxing high incomes to fund services for working families.'],
      ['SS', 'Yes', '◐', 'Stressed Sideliners would likely get a small cut and value health and child-care help, though they distrust how government spends.'],
      ['AR', 'No', '◐', 'Ambivalent Right voters worry about economic competitiveness and permanent government growth, even with a cut for most families.'],
      ['PR', 'No', '○', 'Populist Right voters are open to taxing the rich but distrust the state’s spending and oppose weakening TABOR.'],
      ['CC', 'No', '●', 'Committed Conservatives defend the flat tax and TABOR and oppose a large tax increase on investors and businesses.'],
      ['FF', 'No', '●', 'Faith and Flag Conservatives oppose expanding government and higher taxes.'],
    ]),
    counterArguments: [
      'EL (Yes ◐): But consider No if you share Gov. Polis’s concern that rates up to 8.4%, not indexed for inflation, will push investment and high earners out of Colorado.',
      'PR (No ○): But consider Yes if you would take a tax cut for your household paid for by millionaires.',
      'SS (Yes ◐): But consider No if you doubt the new money will reach services you use, since the Legislature decides how to split it.',
    ],
  },

  // ───────────────────────────── Proposition NN ─────────────────────────────
  {
    id: 'co-prop-nn',
    categoryId: 'state-props',
    title: 'Proposition NN — Keep TABOR refunds for K-12 schools and children’s programs',
    tldrLabel: 'Prop NN — TABOR $ for schools',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'TABOR caps state revenue and refunds the excess. Proposition NN would raise the cap by the state’s peak K-12 spending (about $4.6 billion in year one), letting Colorado keep refunds — about $330 million this year and $521 million next — for teacher pay, smaller classes and children’s programs. After ten years most restrictions lapse. Schools versus refunds is the trade.',
    ],
    introParagraphs: [
      'The Legislature referred NN through SB26-135 on a party-line vote, at the urging of the Colorado Education Association. Yes for Colorado Kids (about 70 groups) had raised $5.12 million through Sept. 30, including $1 million from Gary Advocacy LLC and $950,000 from the CEA’s fund; opponents’ money is mostly Brighter Colorado’s multi-measure fund (TRACER). Opponents include Your Family’s Future Alliance and Brighter Colorado (Colorado Sun; Chalkbeat). Simple majority.',
    ],
    measure: {
      question:
        'Shall state investment in K-12 public education increase two percent each year for the next ten years, with investments used to increase teacher pay, improve teacher retention, lower class sizes, and increase access to career and technical courses, without raising taxes but instead funded by raising the annual limit on state fiscal year spending only by the amount spent on public K-12 education as a voter-approved revenue change, and requiring an annual publicly released, independent audit to show how the new investments are spent?',
      yesMeans: 'Raises the state’s TABOR revenue limit by its peak K-12 spending, letting Colorado keep refunds (an estimated $330 million and $521 million in the first two years) for schools and children’s programs.',
      noMeans: 'Keeps the current TABOR limit, so revenue above it is still refunded to taxpayers, and leaves K-12 and children’s program funding at levels the Legislature sets.',
      related: [
        { raceId: 'co-prop-137', note: 'If both pass, Proposition 137 takes sporting-goods sales tax out of TABOR-limited revenue, which reduces how much this measure actually lets the state keep.' },
      ],
      funding: {
        asOf: MONEY_AS_OF,
        yes: {
          raised: '$5.12 million',
          topDonors: ['Gary Advocacy LLC ($1M)', 'Colorado Fund for Children and Public Education, the Colorado Education Association’s fund ($950,000)'],
        },
        note: 'Yes total is Yes for Colorado Kids; its donor amounts are from filings through mid-September, when it had raised about $2.06 million. No measure-specific No committee reported cash; ' + BRIGHTER_NOTE + ' Your Family’s Future Alliance ($15,938) also campaigns for TABOR.',
        sources: [tracer('Yes for Colorado Kids', 52137), BRIGHTER, RMV_MONEY],
      },
      positions: [coDems('Yes'), gazette('No')],
      measureType: 'Legislatively referred statute (TABOR voter-approved revenue change)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Reduces TABOR refunds by an estimated $329.9 million in 2026-27 and $521.0 million in 2027-28 (eliminating refunds both years) and raises state spending by the same amounts; later effects range from none to over $1,000 per taxpayer in some years (Blue Book).',
      supporters: 'Yes for Colorado Kids; People for a Fair Colorado (registered Yes committees); Colorado Education Association; Colorado Association of School Boards; Colorado Association of School Executives; AFT',
      opponents:
        'Brighter Colorado; Affordable Colorado; Let’s Go Colorado; Keep Colorado Affordable; Don’t Price Us Out (registered No committees); Your Family’s Future Alliance',
      voterConnection: [
        'No tax rate rises; instead you would lose TABOR refunds — for 2027, $28 for a single filer or $56 for a joint filer at $100,000 income (Blue Book).',
        'Denver Public Schools and every district would get new money for teacher pay, retention, class size and career-technical courses, shared by the school finance formula.',
        'The higher cap is permanent; after ten years, beyond a flat K-12 amount, lawmakers could spend retained money on anything.',
      ],
      mechanismBullets: [
        'New limit = current TABOR limit plus the highest prior-year state K-12 spending from certain sources ($4.6 billion higher in year one); revenue is not expected to exceed it for five to ten years.',
        'Retained money first reimburses local governments for senior, disabled-veteran and Gold Star spouse property tax exemptions, then goes to a new Children’s Account.',
        'K-12 set-aside grows about $110 million in year one, $220 million in year two, and could reach $1–2 billion a year by year ten; at least half the account goes to K-12 for ten years.',
        'Remainder for ten years funds children’s programs, prioritizing full-day preschool and child care.',
        'Annual independent state audit; districts must post spending online.',
        'If Prop 137 also passes, it reduces the money NN actually keeps.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'State studies found Colorado schools underfunded by $3.5–4.1 billion a year (about $4,000 per pupil); NN uses money the state already collects.',
        'Raises teacher pay, shrinks classes and expands career-technical education in every district, with audits.',
        'TABOR’s inflation-plus-population formula does not keep pace with rising costs of educating and caring for children.',
      ],
      argumentsAgainst: [
        'Effectively a tax increase: it permanently eliminates or reduces TABOR refunds, a right voters wrote into the constitution.',
        'Opponents say it could eventually let the state keep over $5 billion a year, and the education guarantees fade after ten years.',
        'K-12 funding rose about 25% since 2021 while enrollment fell; opponents say the state should cut waste first.',
      ],
      readingLinks: [
        blueBookLink('Proposition NN analysis (pp. 41–47)', 'New limit, refund scenarios, Children’s Account spending, refund table by income.'),
        {
          label: 'Colorado Sun — Proposition NN explained (Oct 3, 2026)',
          url: 'https://coloradosun.com/2026/10/03/proposition-nn-colorado-tabor-refunds-would-be-diverted-to-k-12-education/',
          summary: 'How the cap works, refund effects, campaign money on both sides.',
        },
        {
          label: 'Chalkbeat Colorado — What voters should know about Proposition NN (Oct 1, 2026)',
          url: 'https://www.chalkbeat.org/colorado/2026/10/01/what-colorado-voters-should-know-about-proposition-nn-voter-guide/',
          summary: 'Coalition behind Yes for Colorado Kids; prior failed school-funding measures.',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters want more public school and child-care funding and see TABOR as an obstacle.'],
      ['EL', 'Yes', '●', 'Establishment Liberals back institution-led education investment with audits, using revenue the state already collects.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays prioritize schools and teachers, and the refunds at stake are small for most households.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters support school funding but would rather tax the wealthy than keep refunds from everyone.'],
      ['SS', 'No', '○', 'Stressed Sideliners on tight budgets value refund checks and distrust government spending, though the amounts are modest.'],
      ['AR', 'No', '◐', 'Ambivalent Right voters value schools but resist a permanent TABOR change whose education strings expire after ten years.'],
      ['PR', 'No', '●', 'Populist Right voters see keeping refunds as government taking taxpayers’ money.'],
      ['CC', 'No', '●', 'Committed Conservatives defend TABOR refunds and want spending growth limited.'],
      ['FF', 'No', '●', 'Faith and Flag Conservatives oppose expanding state budgets and weakening TABOR.'],
    ]),
    counterArguments: [
      'DM (Yes ●): But consider No if you worry the cap increase is permanent while the school-spending rules mostly expire after ten years.',
      'AR (No ◐): But consider Yes if your refund is small and you think teacher pay and class size in your local schools matter more.',
    ],
  },

  // ───────────────────────────── Proposition 132 ─────────────────────────────
  {
    id: 'co-prop-132',
    categoryId: 'state-props',
    title: 'Proposition 132 — Tougher fentanyl penalties (8-year minimum for any distribution)',
    tldrLabel: 'Prop 132 — Fentanyl penalties',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Fentanyl is Colorado’s leading cause of overdose deaths. Proposition 132 would make possessing any amount a felony, impose a mandatory 8-to-32-year prison term for distributing any amount, and remove “didn’t know it was fentanyl” and some Good Samaritan reductions. It pits deterrence and accountability against treatment-first approaches and prison costs.',
    ],
    introParagraphs: [
      'A citizen initiative from Advance Colorado, supported by Brighter Colorado and by Republican District Attorney George Brauchler. The main opposition, Coloradans for Real Safety Solutions, had raised $1.11 million through Sept. 30, led by Democratic philanthropist Lynn Schusterman ($500,000), the ACLU of Colorado and Signal Behavioral Health Network (Colorado Sun; TRACER). Takes effect in 2027 if passed. Simple majority.',
    ],
    measure: {
      question:
        'Shall there be a change to the Colorado Revised Statutes concerning criminal penalties for fentanyl and certain synthetic opioids, increasing the felony classifications for distribution, manufacturing, dispensing, sale, or possession; creating mandated treatment for certain drug felonies based on possession amount; and narrowing or eliminating exemptions for crimes related to fentanyl and drug-related deaths? (condensed)',
      yesMeans: 'Makes possessing any amount of fentanyl a felony, requires 8 to 32 years in prison for distributing any amount, and removes some options to reduce penalties.',
      noMeans: 'Keeps possession of under 1 gram a misdemeanor, keeps distribution penalties tiered by amount, and keeps reductions for Good Samaritan cases and people unaware a drug contained fentanyl.',
      funding: {
        asOf: MONEY_AS_OF,
        no: {
          raised: '$1.11 million',
          topDonors: ['Lynn Schusterman ($500,000)', 'ACLU of Colorado ($200,540)', 'Signal Behavioral Health Network ($134,500)', 'Colorado Criminal Justice Reform Coalition ($132,983)'],
        },
        note: 'No measure-specific Yes committee has reported money (Eagle County Republican Women Club: $0). ' + BRIGHTER_NOTE + ' No total is Coloradans for Real Safety Solutions; The People’s No ($200,000, against 81, 132, 134 and 135) and ' + VCS_NOTE,
        sources: [tracer('Coloradans for Real Safety Solutions', 51430), BRIGHTER, RMV_MONEY],
      },
      positions: [coDems('No'), gazette('Yes', 'https://www.denvergazette.com/2026/10/14/editorial-yes-on-132-no-to-the-harm-reduction-myth/')],
      measureType: 'Initiated statute',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'State costs of $0.9 million in year one, $8.9 million in year two and about $68.2 million by year five for courts, public defenders and prisons, from the General Fund; new prison space may be needed. Fine revenue rises about $73,000 a year (Blue Book).',
      supporters: 'Brighter Colorado; Eagle County Republican Women Club (registered Yes committees); sponsor Advance Colorado',
      opponents: 'The People’s No; Coloradans for Real Safety Solutions; Vote Common Sense; People for a Fair Colorado (registered No committees)',
      voterConnection: [
        'Someone who shares or sells even a trace amount would face at least 8 years in prison.',
        'Possessing under 1 gram becomes a treatment-mandated felony that can drop to a misdemeanor after treatment.',
        'Prison costs come from the same General Fund that pays for health care and education.',
      ],
      mechanismBullets: [
        'Distribution of any amount: mandatory 8–32 years (today only over 50g, to a minor, or 4g+ causing death).',
        'Possession 1–4g: possible 2–4 years (today up to 0.5–1 year, with reductions available).',
        'Possession under 1g: felony with possible 0.5–1 year; court-ordered treatment required; reducible to misdemeanor after treatment.',
        'Eliminates Good Samaritan reductions for distribution and the “reasonably believed it wasn’t fentanyl” mitigating factor.',
        'Statute: the Legislature could amend it later.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Fentanyl is uniquely deadly in tiny amounts and warrants stiffer penalties than other drugs.',
        'Mandatory prison for dealers keeps them off the street and gives victims’ families a sense of justice.',
        'Felony consequences with required treatment create accountability that may deter use and reduce deaths.',
      ],
      argumentsAgainst: [
        'Harsher penalties are unlikely to reduce use or deaths and may stop people from calling 911 during overdoses.',
        'Treats people sharing trace amounts like major traffickers and removes judges’ discretion.',
        'Shifts money to an overcrowded, understaffed prison system and away from treatment; no treatment funding is included.',
      ],
      readingLinks: [
        blueBookLink('Proposition 132 analysis (pp. 48–51)', 'Side-by-side sentencing table under current law and Prop 132; prison cost estimates.'),
        {
          label: 'Colorado Sun — Proposition 132 explained (Oct 2, 2026)',
          url: 'https://coloradosun.com/2026/10/02/proposition-132-explained-colorado-fentanyl/',
          summary: 'Advance Colorado sponsorship, opposition funding, and full fiscal note figures.',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '●', 'Progressive Left voters see addiction as a public-health problem and oppose mandatory minimums and more incarceration.'],
      ['EL', 'No', '◐', 'Establishment Liberals favor evidence-based treatment and judicial discretion, though overdose deaths make some open to tougher dealer penalties.'],
      ['DM', 'No', '○', 'Democratic Mainstays want safer streets but are wary of mass-incarceration policies that fall hardest on their communities.'],
      ['OL', 'No', '●', 'Outsider Left voters strongly oppose the drug war approach and new mandatory prison terms.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners worry about fentanyl in their communities and lean toward tough action, loosely held.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters back accountability for dealers but may question prison costs and minimums for small amounts.'],
      ['PR', 'Yes', '●', 'Populist Right voters want harsh punishment for fentanyl dealers and blame lenient laws for the crisis.'],
      ['CC', 'Yes', '●', 'Committed Conservatives support law-and-order sentencing for drug distribution.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives see strict drug penalties as protecting families and communities.'],
    ]),
    counterArguments: [
      'CC (Yes ●): But consider No if you object to roughly $68 million a year in new General Fund prison costs with no funding source, or to mandatory 8-year terms for sharing trace amounts.',
      'EL (No ◐): But consider Yes if you think the 2022 law left too many fentanyl dealers with light sentences and stronger deterrence is warranted.',
    ],
  },

  // ───────────────────────────── Proposition 133 ─────────────────────────────
  {
    id: 'co-prop-133',
    categoryId: 'state-props',
    title: 'Proposition 133 — Life without parole for child sex trafficking',
    tldrLabel: 'Prop 133 — Child trafficking penalty',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Child sex trafficking is now a class 2 felony carrying 8 to 48 years plus parole. Proposition 133 would make it a class 1 felony with mandatory life without parole and expand it to anyone who trades anything of value to buy or sell sex with a minor. Victim advocates warn mandatory life could catch victims coerced into helping traffickers.',
    ],
    introParagraphs: [
      'A citizen initiative from Protect Kids Colorado (executive director Erin Lee), which gathered signatures with more than 3,000 volunteers and had raised about $133,500 for its three measures through Sept. 30; Colorado’s Catholic bishops support it. The Colorado Coalition Against Sexual Assault and the Colorado Organization for Victim Assistance oppose it (Colorado Sun). Simple majority.',
    ],
    measure: {
      question:
        'Shall there be a change to the Colorado Revised Statutes modifying existing law concerning human trafficking of a minor for sexual servitude, expanding it to include knowingly trading anything of monetary value to buy or sell sexual activity with a minor and increasing the penalty to life in prison without parole or release?',
      yesMeans: 'Makes child sex trafficking a class 1 felony with mandatory life without parole, and expands the crime to anyone who trades anything of value to buy or sell sex with a minor.',
      noMeans: 'Keeps child sex trafficking a class 2 felony punishable by 8 to 48 years in prison plus five years of mandatory parole, with judges setting the sentence.',
      funding: {
        asOf: MONEY_AS_OF,
        yes: { raised: '$133,500 (shared with 134 and 135)', topDonors: ['Pikes Peak Citizens for Life ($19,000)'] },
        note: 'Yes: Protect Kids Colorado, which campaigns for 133, 134 and 135 together; Protect Our Children reported no money. No committee targets 133 alone; ' + VCS_NOTE,
        sources: [tracer('Protect Kids Colorado – Issue Committee', 47398), VOTE_COMMON_SENSE, RMV_MONEY],
      },
      positions: [coDemsNoPosition, gazette('Yes')],
      measureType: 'Initiated statute',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Prison costs begin in about 14 years — $180,000 in 2041-42, rising by that amount each year for several years — as offenders serve life instead of fixed terms; minimal court and DA workload increases (Blue Book).',
      supporters: 'Protect Kids Colorado – Issue Committee; Protect Our Children (registered Yes committees); Colorado Catholic bishops',
      opponents:
        'Vote Common Sense; People for a Fair Colorado (registered No committees); Colorado Coalition Against Sexual Assault; Colorado Organization for Victim Assistance',
      voterConnection: [
        'Buyers as well as sellers of sex with a minor would face mandatory life without parole.',
        'Judges could not adjust sentences for defendants who were themselves trafficked and coerced.',
        'Costs fall on the General Fund, but not for well over a decade.',
      ],
      mechanismBullets: [
        'Raises child sex trafficking from a class 2 felony (8–48 years, 5 years mandatory parole) to a class 1 felony (life without parole).',
        'Adds knowingly trading anything of monetary value to buy or sell sexual activity with a minor to the crime.',
        'Removes judicial sentencing discretion for this offense.',
        'Current-law defenses for trafficking victims remain, per the Blue Book.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'The crime causes lasting harm; offenders deserve life, and a life sentence ensures they cannot harm more children.',
        'Clear, certain punishment sends a strong deterrent message and gives victims certainty of justice.',
        'Supporters say the Legislature failed to strengthen protections, so voters should.',
      ],
      argumentsAgainst: [
        'Harsher sentences are unlikely to deter trafficking and could punish victims pressured into recruiting or transporting others.',
        'Fear of a life sentence may make victims less likely to report or cooperate.',
        'Removing judges’ discretion prevents considering the facts of each case.',
        'Opponents argue the expanded definition could be misapplied; sponsors call claims it targets help with abortion travel false.',
      ],
      readingLinks: [
        blueBookLink('Proposition 133 analysis (pp. 52–54)', 'Penalty comparison and long-delayed prison costs.'),
        {
          label: 'Colorado Sun — Proposition 133 explained (Oct 1, 2026)',
          url: 'https://coloradosun.com/2026/10/01/proposition-133-child-sex-trafficking-colorado/',
          summary: 'Protect Kids Colorado’s campaign and victim-advocate opposition.',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '◐', 'Progressive Left voters oppose mandatory life sentences and side with victim advocates who fear coerced victims will be punished.'],
      ['EL', 'No', '◐', 'Establishment Liberals defer to sexual-assault and victim-assistance organizations and value judicial discretion, despite the crime’s gravity.'],
      ['DM', 'Yes', '○', 'Democratic Mainstays want children protected and the worst offenders punished severely, a weak lean given advocates’ concerns.'],
      ['OL', 'No', '◐', 'Outsider Left voters oppose mandatory sentencing and distrust criminal-justice expansion even for heinous crimes.'],
      ['SS', 'Yes', '◐', 'Stressed Sideliners see protecting children from traffickers as a simple moral question.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters support severe punishment for crimes against children, with low long-run costs.'],
      ['PR', 'Yes', '●', 'Populist Right voters strongly favor maximum punishment for child traffickers.'],
      ['CC', 'Yes', '◐', 'Committed Conservatives back tough sentencing, though some prefer judicial discretion over mandatory terms.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives, alongside the Catholic bishops, see this as protecting children and moral order.'],
    ]),
    counterArguments: [
      'SS (Yes ◐): But consider No if you are swayed by victim advocates who say traffickers’ own victims could get life sentences with no chance for a judge to intervene.',
      'EL (No ◐): But consider Yes if you think buyers of sex with children deserve the same certain, maximum penalty as traffickers.',
    ],
  },

  // ───────────────────────────── Proposition 134 ─────────────────────────────
  {
    id: 'co-prop-134',
    categoryId: 'state-props',
    title: 'Proposition 134 — School and college sports teams by biological sex',
    tldrLabel: 'Prop 134 — School sports by sex',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Colorado’s anti-discrimination law lets students play on teams matching their gender identity, while federal policy and a June 2026 U.S. Supreme Court ruling allow states to separate sports by biological sex. Proposition 134 would require every school and college team, K-12 through university and including intramurals, to be designated male, female or coed by biological sex. Fairness and safety for girls versus inclusion of transgender students.',
    ],
    introParagraphs: [
      'A citizen initiative from Protect Kids Colorado (co-founder Erin Lee), backed by the Catholic Conference; it had raised about $133,500 for its three measures through Sept. 30. Families Not Politics, the main opposition committee (One Colorado and allied groups), had raised $1.66 million, more than 12 times as much (TRACER; Colorado Sun). Simple majority.',
    ],
    measure: {
      question:
        'Shall there be a change to the Colorado Revised Statutes restricting participation in all K-12 and collegiate school sports based on the participant’s biological sex; requiring each school or intramural team to be designated male, female, or coeducational; allowing females on male teams when no female team exists; barring complaints or penalties against schools for keeping separate female teams; and authorizing the commissioner of education to enforce it for K-12 districts? (condensed)',
      yesMeans: 'Requires every K-12 and college team, including intramurals, to be designated male, female or coed by biological sex, and limits students to their sex’s teams or coed teams.',
      noMeans: 'Lets schools, districts and athletic associations keep setting eligibility policies under current state and federal law, including Colorado’s anti-discrimination protections for gender identity.',
      funding: {
        asOf: MONEY_AS_OF,
        yes: { raised: '$133,500 (shared with 133 and 135)', topDonors: ['Pikes Peak Citizens for Life ($19,000)'] },
        no: {
          raised: '$1.67 million (shared with 135)',
          topDonors: ['One Colorado Education Fund ($327,000)', 'Cobalt Advocates ($254,000)', 'ACLU ($140,000)', 'Rose Community Foundation ($100,000)'],
        },
        note: 'Yes: Protect Kids Colorado. No: Families Not Politics ($1.66 million, plus $335,892 in-kind) and No on 134 and 135 ($10,788), both fighting 134 and 135 together; The People’s No ($200,000) and ' + VCS_NOTE,
        sources: [tracer('Families Not Politics', 51677), tracer('Protect Kids Colorado – Issue Committee', 47398), tracer('No on 134 and 135', 52230), RMV_MONEY],
      },
      positions: [coDems('No'), gazette('Yes')],
      measureType: 'Initiated statute',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Indeterminate Department of Education legal and workload costs if a district refuses to comply; minimal costs for schools and colleges to update policies (Blue Book).',
      supporters: 'Protect Kids Colorado – Issue Committee; Protect Our Children (registered Yes committees)',
      opponents:
        'The People’s No; Families Not Politics; No on 134 and 135; Protect Trans Kids; Vote Common Sense; People for a Fair Colorado (registered No committees)',
      voterConnection: [
        'Applies to public, charter, private and religious schools from elementary through college, including intramurals and school after-school programs — not community youth leagues.',
        'Schools must adopt their own sex-verification procedures; the measure sets no method.',
        'High school sports already have a December 2025 CHSAA settlement letting schools keep separate teams; NCAA rules already limit women’s events to athletes assigned female at birth.',
      ],
      mechanismBullets: [
        'Defines male and female by reproductive system organized around sperm or ova production.',
        'Every team must be designated male, female or coed; students play on teams matching biological sex or coed teams; females may join male teams when no female team exists.',
        'Bars government, licensing or accrediting bodies and athletic associations from investigating or penalizing schools for female-only teams.',
        'Commissioner of Education must notify and then take corrective action against noncompliant K-12 districts; no enforcement mechanism for private schools or colleges.',
        'Unclear how it interacts with the Colorado Anti-Discrimination Act, which protects gender identity (Blue Book).',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Female athletes should compete against females for wins, records and scholarships.',
        'Physical differences raise safety concerns in some sports, and shared locker rooms raise privacy concerns.',
        'One statewide standard replaces a patchwork of school and district rules.',
      ],
      argumentsAgainst: [
        'Without a set verification method, any athlete could face invasive inspections or testing, and girls who look strong could be targeted.',
        'Excluding transgender students from teams with peers harms an at-risk group and applies even to young children playing for fun.',
        'School-by-school policies will produce uneven treatment and likely conflict with state anti-discrimination law.',
      ],
      readingLinks: [
        blueBookLink('Proposition 134 analysis (pp. 55–58)', 'Which teams are covered, enforcement, interaction with CADA, Title IX and the CHSAA settlement.'),
        {
          label: 'Colorado Sun — Proposition 134 explained (Oct 1, 2026)',
          url: 'https://coloradosun.com/2026/10/01/proposition-134-explaine-colorado-transgender-kids-sports/',
          summary: 'Protect Kids Colorado’s case, opponents’ arguments, and the 8-to-1 fundraising gap.',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '●', 'Progressive Left voters strongly support transgender inclusion and see the measure as discrimination.'],
      ['EL', 'No', '●', 'Establishment Liberals back the state anti-discrimination law and worry about intrusive verification for all athletes.'],
      ['DM', 'No', '○', 'Democratic Mainstays lean against discrimination, though many are more conservative on this issue than other Democrats.'],
      ['OL', 'No', '●', 'Outsider Left voters see the measure as targeting a vulnerable group of kids.'],
      ['SS', 'Yes', '◐', 'Stressed Sideliners tend to see sex-separated sports as common sense, though they rarely engage.'],
      ['AR', 'Yes', '●', 'Ambivalent Right voters are socially moderate on many issues but broadly favor sex-based teams in competitive sports.'],
      ['PR', 'Yes', '●', 'Populist Right voters strongly support protecting girls’ sports by biological sex.'],
      ['CC', 'Yes', '●', 'Committed Conservatives back biological-sex definitions and fairness for female athletes.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives see biological sex as fixed and want it recognized in school sports.'],
    ]),
    counterArguments: [
      'AR (Yes ●): But consider No if you think sex verification rules for elementary and intramural sports go further than needed, given existing CHSAA and NCAA policies.',
      'DM (No ○): But consider Yes if fairness in competitive girls’ sports is your main concern.',
    ],
  },

  // ───────────────────────────── Proposition 135 ─────────────────────────────
  {
    id: 'co-prop-135',
    categoryId: 'state-props',
    title: 'Proposition 135 — Ban sex-trait surgeries on minors in response to gender perception',
    tldrLabel: 'Prop 135 — Minor surgery ban',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Colorado law protects access to gender-affirming care, including surgery for minors when medically necessary, though the state’s three large pediatric providers say they do not perform these surgeries on patients under 18. Proposition 135 would ban such surgery for minors and bar public money and insurance from paying for it. The debate is parental and medical autonomy versus waiting until adulthood for irreversible procedures.',
    ],
    introParagraphs: [
      'A citizen initiative from Protect Kids Colorado (spokesperson Erin Lee). Opponents — Families Not Politics, The People’s No and Vote Common Sense, funded by One Colorado, the ACLU, Cobalt and Planned Parenthood — had raised more than $2.5 million across their committees through Sept. 30, against about $133,500 for Protect Kids Colorado (TRACER; Colorado Sun). Twenty-seven states restrict such surgeries for transgender minors (KFF via Colorado Sun). Simple majority.',
    ],
    measure: {
      question:
        'Shall there be a change to the Colorado Revised Statutes prohibiting any health-care professional or other person from knowingly performing, prescribing, administering, or providing any surgery to a minor for the purpose of altering the minor’s biological sex characteristics, and prohibiting the use of state or federal funds, Medicaid reimbursement, or insurance coverage to pay for this type of surgery? (condensed)',
      yesMeans: 'Bans surgery on minors to alter biological sex characteristics in response to their perception of sex or gender, and bars public funds and insurance from paying for it.',
      noMeans: 'Keeps Colorado law protecting access to these surgeries for minors when medically necessary and allowing public and private insurance to cover them.',
      funding: {
        asOf: MONEY_AS_OF,
        yes: { raised: '$133,500 (shared with 133 and 134)', topDonors: ['Pikes Peak Citizens for Life ($19,000)'] },
        no: {
          raised: '$1.67 million (shared with 134)',
          topDonors: ['One Colorado Education Fund ($327,000)', 'Cobalt Advocates ($254,000)', 'ACLU ($140,000)', 'Planned Parenthood Action Fund ($100,000)'],
        },
        note: 'Yes: Protect Kids Colorado. No: Families Not Politics ($1.66 million, plus $335,892 in-kind) and No on 134 and 135 ($10,788), both fighting 134 and 135 together; The People’s No ($200,000) and ' + VCS_NOTE,
        sources: [tracer('Families Not Politics', 51677), tracer('Protect Kids Colorado – Issue Committee', 47398), tracer('No on 134 and 135', 52230), RMV_MONEY],
      },
      positions: [coDems('No'), gazette('Yes')],
      measureType: 'Initiated statute',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Minimal workload for regulators and public employers to update rules; possible minimal savings to Medicaid and public employee health plans (Blue Book).',
      supporters: 'Protect Kids Colorado – Issue Committee; Protect Our Children (registered Yes committees)',
      opponents:
        'The People’s No; Families Not Politics; No on 134 and 135; Protect Trans Kids; Vote Common Sense; People for a Fair Colorado (registered No committees)',
      voterConnection: [
        'Affects a very small number of patients: a Harvard study found about 2.1 per 100,000 youths ages 15–17 had such a surgery in 2019, and none 12 or younger.',
        'Hormones, puberty blockers, counseling and social transition are not restricted.',
        'Opponents say vague “purpose” wording could chill other surgeries for non-transgender minors and lead insurers to deny coverage.',
      ],
      mechanismBullets: [
        'Bans surgery on minors to alter biological sex characteristics as treatment for the minor’s perception of sex or gender.',
        'Exceptions: male circumcision; treatment of medically verifiable disorders of sex development or acquired physical or chemical abnormalities.',
        'Bars state or federal funds, Medicaid and private insurance from paying for the banned surgeries.',
        'Prohibition turns on the reason for surgery rather than a list of procedures.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Minors lack the maturity to make permanent, life-altering decisions; less invasive care can be used until adulthood.',
        'Long-term evidence is limited and some patients regret surgery; the American Society of Plastic Surgeons recommended in 2026 delaying these surgeries until at least 19.',
        'Many other states already restrict this care for minors.',
      ],
      argumentsAgainst: [
        'Overbroad: the purpose-based ban could limit care for non-transgender minors and create legal uncertainty for doctors and insurers.',
        'Overrides decisions made by patients, parents and doctors together, even when all agree surgery is needed.',
        'Restricting care may worsen mental health for transgender youth, who already face higher risks of depression and self-harm.',
        'Opponents say it addresses procedures Colorado’s main pediatric hospitals already do not perform.',
      ],
      readingLinks: [
        blueBookLink('Proposition 135 analysis (pp. 59–61)', 'What is and is not banned, prevalence data, insurance effects.'),
        {
          label: 'Colorado Sun — Proposition 135 explained (Oct 4, 2026)',
          url: 'https://coloradosun.com/2026/10/04/proposition-135-colorado-transgender-surgeries-kids/',
          summary: 'Medical-group positions, Colorado hospital practices, campaign money.',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '●', 'Progressive Left voters see this as government interfering in transgender youth’s medical care.'],
      ['EL', 'No', '◐', 'Establishment Liberals defer to doctors and families, though shifting medical-society guidance on surgery gives some pause.'],
      ['DM', 'No', '○', 'Democratic Mainstays lean toward family and doctor decisions but are more conservative than other Democrats on gender issues.'],
      ['OL', 'No', '●', 'Outsider Left voters strongly oppose policies they see as targeting transgender kids.'],
      ['SS', 'Yes', '◐', 'Stressed Sideliners tend to think permanent surgery should wait until adulthood.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters favor waiting until 18 for irreversible surgery, while some prefer leaving medicine to families.'],
      ['PR', 'Yes', '●', 'Populist Right voters strongly oppose gender-related surgery for minors.'],
      ['CC', 'Yes', '●', 'Committed Conservatives support limits on irreversible procedures for minors and on public funding of them.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives see biological sex as fixed and back protecting minors from these surgeries.'],
    ]),
    counterArguments: [
      'CC (Yes ●): But consider No if you think parents, not the state, should make medical decisions for their children, or that the vague wording could restrict unrelated care.',
      'EL (No ◐): But consider Yes if you give weight to the 2026 plastic surgeons’ recommendation to delay these surgeries until at least age 19.',
    ],
  },

  // ───────────────────────────── Proposition 136 ─────────────────────────────
  {
    id: 'co-prop-136',
    categoryId: 'state-props',
    title: 'Proposition 136 — Cap the state income tax rate at 4.4%',
    tldrLabel: 'Prop 136 — 4.4% income tax cap',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Colorado’s income tax is already 4.4%, and TABOR already requires voter approval to raise it, so on its own Proposition 136 changes nothing. Its real effect is as a counter to Amendment 87’s graduated tax: if both pass, they conflict, and the measure with more votes generally controls — though a court or the Legislature may have to decide.',
    ],
    introParagraphs: [
      'A citizen initiative from Advance Colorado, supported by the Colorado Chamber of Commerce. Brighter Colorado (funded mainly by Common Sense America and Advance Colorado, which do not disclose donors) had raised $2.61 million for its slate through Sept. 30; Amendment 87’s campaign, Protect Colorado’s Future, opposes it (Colorado Sun; TRACER). Simple majority.',
    ],
    measure: {
      question: 'Shall there be a change to the Colorado Revised Statutes capping the state income tax rate at 4.4% of federal taxable income for individuals and corporations?',
      yesMeans: 'Sets today’s 4.4% rate as the maximum state income tax rate in statute starting in 2027, which would conflict with Amendment 87’s higher brackets if both pass.',
      noMeans: 'Keeps the current 4.4% rate without a statutory cap; any future rate increase would still need voter approval under TABOR.',
      related: [
        { raceId: 'co-amendment-87', note: 'If both pass, this cap conflicts with Amendment 87’s rates above $500,000; the measure with more votes generally controls, though a court or the Legislature may have to decide.' },
      ],
      funding: {
        asOf: MONEY_AS_OF,
        note: 'No committee raises money for 136 alone (Keep Colorado Affordable, which backs 136 and opposes 87, reported $0). ' + BRIGHTER_NOTE + ' ' + VCS_NOTE + ' Protect Colorado’s Future, Amendment 87’s campaign ($1.18 million), also opposes 136.',
        sources: [BRIGHTER, VOTE_COMMON_SENSE, tracer('Keep Colorado Affordable', 52269), RMV_MONEY],
      },
      positions: [coDems('No'), gazette('Yes', 'https://www.denvergazette.com/2026/09/29/endorsement-yes-on-136-86-two-safeguards-for-colorado/')],
      measureType: 'Initiated statute',
      voteThreshold: 'Simple majority',
      fiscalImpact: 'No fiscal impact: the cap equals the current rate (Blue Book).',
      supporters: 'Brighter Colorado; No on 87, Yes on 136 (registered Yes committees); Colorado Chamber of Commerce',
      opponents: 'Vote Common Sense; People for a Fair Colorado; Protect Colorado’s Future Coalition (registered No committees)',
      voterConnection: [
        'Your tax rate does not change either way.',
        'If you vote Yes on 87, voting Yes on 136 works against it; if you oppose 87, a Yes here is a second way to block it.',
        'Because it is a statute, the Legislature and voters could change it later, and any future rate increase needs voter approval anyway.',
      ],
      mechanismBullets: [
        'Sets 4.4% of federal taxable income as the maximum rate for individuals and corporations, starting Jan 1, 2027.',
        'Does not prevent future rate cuts by the Legislature or initiative.',
        'If both 87 and 136 pass, 87’s rates above $500,000 conflict with the cap; resolution is unclear.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Reaffirms the current rate voters approved in 2022, among the lowest in the country.',
        'Signals that Colorado should not raise income taxes on earners and businesses that drive investment and jobs.',
      ],
      argumentsAgainst: [
        'Designed to put Amendment 87 in legal jeopardy, causing confusion and potentially costly litigation.',
        'After 2026 it has no effect, since rate increases already need voter approval.',
        'Would erase 87’s tax cut for middle- and lower-income filers along with its new revenue.',
      ],
      readingLinks: [
        blueBookLink('Proposition 136 analysis (pp. 62–63)', 'Why it has no fiscal impact alone; interaction with Amendment 87.'),
        {
          label: 'Colorado Sun — Proposition 136 explained (Oct 2, 2026)',
          url: 'https://coloradosun.com/2026/10/02/proposition-136-income-tax-limit-explained-voter-guide/',
          summary: 'Backers, opponents and how the cap could block Amendment 87.',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '●', 'Progressive Left voters see 136 as a tactic to block a tax on the wealthy that would fund schools and health care.'],
      ['EL', 'No', '◐', 'Establishment Liberals dislike a measure designed to create legal confusion, even if some share doubts about Amendment 87.'],
      ['DM', 'No', '◐', 'Democratic Mainstays favor 87’s middle-class cut and services funding, which 136 aims to undo.'],
      ['OL', 'No', '●', 'Outsider Left voters oppose protecting high earners from higher taxes.'],
      ['SS', 'No', '○', 'Stressed Sideliners would lose 87’s small cut if 136 prevails, though many will not connect the two measures.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters favor keeping Colorado’s flat, low rate to stay economically competitive.'],
      ['PR', 'Yes', '◐', 'Populist Right voters dislike tax increases and distrust state spending, though they are less protective of the rich.'],
      ['CC', 'Yes', '●', 'Committed Conservatives want to lock in the flat 4.4% rate and defeat the graduated tax.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives oppose higher taxes and back the conservative slate.'],
    ]),
    counterArguments: [
      'AR (Yes ◐): But consider No if you would rather defeat Amendment 87 directly than risk a court fight between two passed measures.',
      'EL (No ◐): But consider Yes if you oppose Amendment 87 and want a backstop in case it passes narrowly.',
    ],
  },

  // ───────────────────────────── Proposition 137 ─────────────────────────────
  {
    id: 'co-prop-137',
    categoryId: 'state-props',
    title: 'Proposition 137 — Sporting-goods sales tax for conservation and wildfire',
    tldrLabel: 'Prop 137 — Conservation funding',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Proposition 137 would dedicate the state sales tax already collected on sporting goods — about $175 million in 2027-28 — to Great Outdoors Colorado, wildfire mitigation, forest and watershed work, and outdoor recreation, and exempt it from TABOR. No tax rate changes, but in surplus years TABOR refunds shrink, and in tight years other programs lose the money.',
    ],
    introParagraphs: [
      'Filed by Conservation Colorado, The Nature Conservancy, Trust for Public Land and Western Resource Advocates; the Yes committee had raised $4.25 million through Sept. 30 (more than $2 million from The Nature Conservancy), against $4,679 for the No committee. Attorney General Phil Weiser endorsed it. The Colorado Democratic Party, League of Women Voters and some environmental groups oppose it over budget control and logging concerns (Colorado Sun). Simple majority.',
    ],
    measure: {
      question:
        'Shall there be a change to the Colorado Revised Statutes to increase water and land conservation funding without raising taxes, through a voter-approved revenue change allowing the state to keep and spend a portion of state sales tax revenue on sporting goods and equipment to conserve Colorado’s water, land, and forests, prevent wildfires, and support outdoor recreation, and reducing this funding if necessary to preserve certain tax credits? (condensed)',
      yesMeans: 'Dedicates the state sales tax already collected on sporting goods, about $175 million a year, to conservation, wildfire prevention and outdoor recreation, and exempts it from the TABOR limit.',
      noMeans: 'Keeps that sales tax money in the state’s general budget under the TABOR limit, where lawmakers spend it each year or it is refunded in surplus years.',
      related: [
        { raceId: 'co-prop-nn', note: 'If both pass, this measure takes sporting-goods sales tax out of TABOR-limited revenue, which reduces how much Proposition NN actually lets the state keep.' },
      ],
      funding: {
        asOf: MONEY_AS_OF,
        yes: {
          raised: '$4.25 million',
          topDonors: ['The Nature Conservancy (more than $2M)', 'Western Resource Advocates and its action fund ($900,000)', 'Fund for a Better Future ($350,000)', 'Trust for Public Land ($215,000)'],
        },
        no: { raised: '$4,679' },
        note: 'Yes: Protect Colorado’s Land and Water, Prevent Wildfires (plus $229,199 in-kind); Thomas and Olivia Walton gave $125,000 each. No: Protect Colorado’s Land, Communities, and Tax Dollars, funded by a handful of Colorado residents.',
        sources: [
          tracer('Protect Colorado’s Land and Water, Prevent Wildfires', 51569),
          tracer('Protect Colorado’s Land, Communities, and Tax Dollars', 52393),
          { label: 'Aspen Times — Prop 137 money (Oct. 8, 2026)', url: 'https://aspentimes.com/news/prop-137-ballot-measure' },
        ],
      },
      positions: [coDems('No'), gazette('No', 'https://www.denvergazette.com/2026/09/18/editorial-no-on-137-the-wrong-way-to-care-for-forests/')],
      measureType: 'Initiated statute (TABOR voter-approved revenue change)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Transfers about $175.0 million from the General Fund in 2027-28 and $180.2 million in 2028-29, rising with sales; reduces 2027 TABOR refunds by about $175 million ($26–$83 per single filer, $52–$166 per joint filer), or reduces money for other programs in years under the cap (Blue Book).',
      supporters: 'Protect Colorado’s Land and Water, Prevent Wildfires (registered Yes committee); Conservation Colorado; The Nature Conservancy; Trust for Public Land; Western Resource Advocates; AG Phil Weiser',
      opponents:
        'Protect Colorado’s Land, Communities, and Tax Dollars (registered No committee); Colorado Democratic Party; League of Women Voters of Colorado; Western Watersheds Project; Clean Energy Action',
      voterConnection: [
        'Prices of bikes, skis, camping and fishing gear do not change; the tax is already collected.',
        'You would get a smaller TABOR refund in surplus years — tens of dollars per household in 2027.',
        'Wildfire mitigation money would grow severalfold from about $16 million a year in state funding.',
      ],
      mechanismBullets: [
        'Split: 47.5% to Great Outdoors Colorado (about $83.1M; GOCO now gets lottery money only), 47.5% to the State Forest Service and Department of Natural Resources for wildfire, forest and watershed work (about $83.1M), 2.5% each to CPW outdoor equity and the state outdoor recreation office.',
        'One-time $10 million in 2027-28 for a prescribed-fire damages fund.',
        'Amount can be reduced in years when it would shrink two income tax credits for low- and moderate-income families.',
        'If Prop NN also passes, 137 reduces how much NN actually keeps.',
        'Statute: the Legislature could amend it by majority vote.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Funds wildfire risk reduction, watershed protection and conservation without raising tax rates, as drought and fires intensify.',
        'Outdoor gear buyers are natural stakeholders; a user-linked model ties outdoor spending to protecting the outdoors.',
        'Supports trusted programs like GOCO, with backing from Denver Water and conservation groups.',
      ],
      argumentsAgainst: [
        'A tax increase in disguise: it shrinks TABOR refunds, or takes money from health care and education when the budget is tight.',
        'Locks money into specific entities with limited legislative accountability during state budget deficits.',
        'Some environmental groups say it could fund logging of up to 25,000 acres a year and that large-scale thinning can worsen fire.',
      ],
      readingLinks: [
        blueBookLink('Proposition 137 analysis (pp. 64–68)', 'Distribution of funds, TABOR refund effects, interaction with Prop NN.'),
        {
          label: 'Colorado Sun — Proposition 137 explained (Sep 30, 2026)',
          url: 'https://coloradosun.com/2026/09/30/proposition-137-colorado-conservation-wildfire-funding/',
          summary: 'Backers, unusual opposition from the state Democratic Party, logging debate.',
        },
        sosCommitteesLink,
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters want climate adaptation and conservation funding, though some side with groups worried about logging.'],
      ['EL', 'Yes', '●', 'Establishment Liberals back the mainstream conservation groups and the attorney general behind it for wildfire and water protection.'],
      ['DM', 'Yes', '○', 'Democratic Mainstays support wildfire prevention, but the state party’s opposition over budget squeezes makes this a weak lean.'],
      ['OL', 'Yes', '○', 'Outsider Left voters value the outdoors and equity grants, tempered by distrust of a measure funded by large national nonprofits.'],
      ['SS', 'No', '○', 'Stressed Sideliners would rather keep their refunds or protect existing services than earmark new money.'],
      ['AR', 'No', '◐', 'Ambivalent Right voters like wildfire prevention but object to shrinking TABOR refunds and earmarking budget money.'],
      ['PR', 'No', '◐', 'Populist Right voters see reduced refunds as a stealth tax increase.'],
      ['CC', 'No', '●', 'Committed Conservatives defend TABOR refunds and oppose carving out revenue from the spending limit.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives oppose weakening TABOR, though rural wildfire risk gives some reason for support.'],
    ]),
    counterArguments: [
      'EL (Yes ●): But consider No if you agree with the state Democratic Party that locking $175 million a year into earmarks during deficits will squeeze health care and education.',
      'AR (No ◐): But consider Yes if wildfire risk near your community matters more to you than a refund of tens of dollars.',
    ],
  },
];
