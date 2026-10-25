import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';
import { PAPER, editorial, partyPositions, propFundingSources } from './props-a';

/**
 * State propositions 37–41 (Nov 3, 2026 general election).
 * Sources checked Oct 7, 2026: LAO ballot analyses, SoS Voter Information Guide (text of proposed laws,
 * arguments), SoS measure-contribution pages, FPPC top-10 contributor lists
 * (page modified Oct 6, 2026); `funding` and `positions` checked Oct 12, 2026 (see props-a.ts header), PPIC Statewide Survey (Sept 4–10, 2026), CalMatters / KPBS explainers.
 */
export const RACES_PROPS_B: Race[] = [
  // ───────────────────────────── PROP 37 ─────────────────────────────
  {
    id: 'prop-37',
    categoryId: 'state-props',
    title: 'Prop 37 — Down-payment loans for middle-income buyers of new homes ($25B revenue bonds)',
    tldrLabel: 'Prop 37 — New-home buyer loans',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'The biggest hurdle to a first home is often the down payment. Prop 37 would have the state lend most of it to middle-income buyers of new homes, financed by private investors rather than taxes. Critics question a state agency becoming a major mortgage lender and say it adds debt instead of lowering prices.',
    ],
    introParagraphs: [
      'Prop 37 is a citizen initiative backed by the California Association of Realtors and carpenters’ unions; Building a Better California, the billionaire-funded group fighting Prop 40, is also a major donor. No opposition committee has registered, and no argument against was filed.',
      'The California Democratic Party supports it. Reform California and the League of Women Voters oppose it.',
    ],
    polling: [
      {
        resultDisplay: 'Yes 61%, No 35%, don’t know 3%',
        pollsterCredit: 'PPIC Statewide Survey (1,103 likely voters, ±3.8%)',
        fieldDatesLabel: 'Sep 4–10, 2026',
        sourceUrl: 'https://www.ppic.org/wp-content/uploads/crosstabs-likely-voters-0926.pdf',
      },
    ],
    measure: {
      forYou: {
        wallet: 'No cost to taxpayers. Homebuyers’ loan payments repay the bonds, and private investors carry the risk.',
        who: 'Middle-income buyers of brand-new homes, who could borrow up to 17% of the price. Buyers of existing homes don’t qualify.',
      },
      explainerUrl: 'https://calmatters.org/california-voter-guide-2026/proposition-37-homebuyers-loan/',
      question:
        'Creates loan program for middle-income buyers of qualified new homes. Initiative statute. Authorizes $25 billion in bonds to offer eligible buyers fixed-rate mortgages for up to 17% of the price of a newly built home priced below about $1.5 million; buyers must be California residents, owner-occupants, within income limits, and put at least 3% down; bonds repaid by mortgage payments, not the State.',
      yesMeans:
        'Requires CalHFA to create a program, funded by up to $25 billion in borrower-repaid revenue bonds, lending middle-income buyers up to 17% of a new home’s price.',
      noMeans:
        'Leaves the state with no obligation to create this program; existing CalHFA down-payment help and current construction-defect claim rules stay the same.',
      funding: {
        asOf: 'Oct. 9, 2026',
        yes: { raised: '$23.8 million', topDonors: ['California Association of Realtors ($14.8M)', 'Building a Better California, Sergey Brin’s committee ($6M)', 'National Association of Realtors ($1.25M)', 'United Brotherhood of Carpenters ($800K)'] },
        note: 'No committee has registered to oppose Prop 37.',
        sources: propFundingSources(37, 'proposition-37-creates-loan-program-middle-income-buyers-qualified-new-homes-initiative-statute'),
      },
      positions: [
        ...partyPositions('Yes', 'No position', 'No', 'No'),
        editorial(PAPER.sfc, 'Yes', 'https://www.sfchronicle.com/opinion/editorials/article/prop-37-housing-home-loans-22422795.php'),
        editorial(PAPER.sdut, 'No', 'https://www.sandiegouniontribune.com/2026/10/02/endorsements-props-2-37-wouldnt-yield-saner-state-budgets-more-housing/'),
        editorial(PAPER.sacbee, 'Yes', 'https://www.sacbee.com/opinion/election-endorsements/article317470188.html'),
        editorial(PAPER.bang, 'Yes', 'https://www.mercurynews.com/2026/10/13/bay-area-news-group-california-election-endorsements-november-2026/'),
        editorial(PAPER.ocr, 'No', 'https://www.ocregister.com/2026/09/20/endorsement-no-on-proposition-37-a-risky-25-billion-housing-experiment/'),
      ],
      measureType: 'Initiative statute (revenue bonds)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'LAO: No direct state or local costs, because homebuyers’ loan payments repay the bond investors. Unknowns include investor demand for the bonds, how the loans compare in cost with other down-payment help, and whether the program increases home construction and buying.',
      supporters:
        'United Nurses Associations of California; California Conference of Carpenters; California State Treasurer Fiona Ma',
      opponents: 'None submitted',
      voterConnection: [
        'Only buyers of a brand-new home (or a first-sale unit in a converted building) qualify, not existing homes. The income cap reaches many professional households, not only lower-income ones.',
        'Private investors, not taxpayers, carry the risk if borrowers default.',
        'Buyers would carry two loans, and those buying from a “qualified builder” face different construction-defect claim procedures. Read the builder disclosure.',
      ],
      mechanismBullets: [
        'CalHFA may issue up to $25 billion in revenue bonds (excluding refunding bonds) and must launch within one year of passage.',
        'Loan: a fixed-rate second mortgage for up to 17% of the price; with the buyer’s own 3% down (not a grant or loan), that reaches 20%. No prepayment penalties, capped fees, possible hardship deferral of interest.',
        'Buyers: California residents of at least one year who move in within 60 days, earn up to 200% of area median, use a licensed agent or broker, and take homeowner education if required.',
        'Homes: newly built (or converted nonresidential) houses, townhomes, condos, or manufactured homes sold to their first buyer, priced up to 125% of the county’s conforming loan limit (about $1.5 million).',
        '“Qualified builder” option: developers accept labor enforcement, including liability for subcontractors’ wage and workers’ comp violations, in exchange for defect procedures the LAO says give them more flexibility.',
        'Rates and terms must cover bond and administration costs while keeping buyers’ interest as low as possible.',
      ],
      argumentsFor: [
        'The down payment is the main barrier: 20% of an $800,000 home is $160,000. Covering up to 17% lets middle-class families buy years sooner.',
        'No taxpayer subsidy or risk: borrowers’ payments repay the bond investors.',
        'Supporters, citing housing researchers, say defect liability pushes developers to build rentals instead of condos. The qualified-builder track addresses that.',
        'Consumer protections are built in: fixed rates, no prepayment penalties, capped fees, cash-flow underwriting for thin-credit buyers, and hardship deferrals.',
      ],
      argumentsAgainst: [
        'It doesn’t lower prices. More eligible buyers chasing the same limited supply of new homes could push prices up. Critics say fix supply and permitting instead.',
        'A state agency would become a very large mortgage lender. If prices fall, buyers carrying two loans could owe more than their homes are worth.',
        'The help is aimed high, at incomes up to 200% of median and homes near $1.5M, and only at new construction. Most renters get nothing.',
        'Looser defect rules could weaken owners’ remedies for shoddy work, and the measure was written and funded mainly by real-estate and building-trades interests.',
      ],
      readingLinks: [
        {
          label: 'Legislative Analyst’s Office — Prop 37 analysis (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop37-110326.pdf',
          summary: 'Official nonpartisan analysis: revenue bonds, eligibility, the qualified-builder option, and the no-direct-cost finding.',
        },
        {
          label: 'Secretary of State — Official voter guide: Prop 37',
          url: 'https://voterguide.sos.ca.gov/propositions/37/index.htm',
          summary: 'Title, summary, argument in favor (no argument against was filed), and full text.',
        },
        {
          label: 'CalMatters voter guide — Prop 37',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-37-homebuyers-loan/',
          summary: 'Plain-language explainer and endorsement lists on both sides.',
        },
        {
          label: 'FPPC — Top 10 contributors, Nov 2026 measures',
          url: 'https://www.fppc.ca.gov/search-filings/top-10-contributors-list/november-2026-general-election/',
          summary: 'Largest donors to each committee (Realtors, carpenters, Building a Better California).',
        },
        {
          label: 'Yes on 37 campaign',
          url: 'https://voteyeson37.com/',
        },
      ],
    },
    crossTypology: ct([
      ['LP', 'No', '◐', 'Leftward Progressives want housing help aimed at renters and lower-income households and are skeptical of a measure written and funded mainly by the Realtors and Sergey Brin’s committee, even with building-trades labor standards attached.'],
      ['LL', 'Yes', '◐', 'Loyal Liberals give weight to the LAO’s no-direct-cost finding and to backing from the state party, Treasurer Fiona Ma and three of the five editorial boards listed here, while weighing the League of Women Voters’ concern about a state agency becoming a major lender.'],
      ['LO', 'Yes', '○', 'Left-Out Left voters are often young renters shut out of ownership, so a 3%-down path has real appeal, but they distrust a Realtor-funded measure whose help reaches incomes up to twice the median.'],
      ['OO', 'Yes', '●', 'Order and Opportunity Left voters prize homeownership as a path to opportunity, and a borrower-repaid loan for middle-income buyers, with carpenters’ and nurses’ unions backing it, fits that goal without taxpayer cost.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters welcome help with housing costs that raises no taxes, though few of them can afford even a new home near the program’s price cap.'],
      ['PP', 'No', '○', 'Pragmatic and Polite Right voters like that taxpayers carry no risk but prefer incremental fixes, and a new $25 billion state lending program with looser defect rules is a large, untested step.'],
      ['UR', 'No', '○', 'Unconventional Right voters want smaller government and doubt a state agency should become a major mortgage lender, though help for younger buyers with no taxpayer cost has some pull.'],
      ['FC', 'No', '○', 'Faith First Conservatives value family homeownership but want state government smaller, and see subsidizing buyers as a reason prices stay high.'],
      ['NA', 'No', '●', 'No Apologies Right voters believe government should not be in the mortgage business and that boosting demand inflates prices instead of cutting the regulations that limit supply.'],
    ]),
    hinges: {
      LP: 'Yes if widening homeownership, with building-trades labor standards attached, is worth backing. No if housing help should go to renters and lower-income households, not buyers earning up to twice the median, in a measure written by real-estate interests.',
      LL: 'Yes if a borrower-repaid program with no direct state cost, per the LAO, is the kind of tool you favor, as the party and Treasurer Ma do. No if a state agency becoming a very large mortgage lender, with buyers carrying two loans, looks like too much risk.',
      LO: 'Yes if a 3%-down path to owning a home is a real opening for renters like you. No if a measure funded mainly by the Realtors, aimed at new homes up to about $1.5 million, isn’t the help you need.',
      OO: 'Yes if middle-class homeownership is the opportunity you most want government to open up, with no taxpayer risk. No if more buyers chasing the same new homes will push prices up instead of adding supply.',
      TM: 'Yes if concrete help buying a home, with no new taxes, is what matters to you. No if new homes priced near the program cap are out of reach anyway, so it wouldn’t help you.',
      PP: 'Yes if no taxpayer risk and consumer protections such as fixed rates and no prepayment penalties make it a sound program. No if a new $25 billion state lending program and looser construction-defect rules are more change than you want at once.',
      UR: 'Yes if helping younger buyers own a home, with no taxpayer risk, outweighs your unease about the state lending money. No if a government agency expanding into mortgage lending is a line you’d rather not cross.',
      FC: 'Yes if helping families own a home matters more to you than the size of the program. No if you want state government smaller and think subsidizing buyers keeps prices high.',
      NA: 'Yes if the construction-defect changes look like a real deregulatory win that could unlock condo building. No if the state shouldn’t be in the mortgage business and subsidizing demand inflates prices instead of fixing supply.',
    },
    counterArguments: [
      'OO (Yes ●): But consider No if you hope to buy an existing home or rent, because only brand-new homes qualify and critics warn more eligible buyers could push new-home prices up.',
      'LP (No ◐): But consider Yes if labor standards matter most to you, because builders who choose the qualified-builder track accept liability for subcontractors’ wage and workers’ comp violations.',
      'PP (No ○): But consider Yes if taxpayer exposure is your main test, because the LAO finds no direct state or local cost and private bond investors carry the risk.',
    ],
  },

  // ───────────────────────────── PROP 38 ─────────────────────────────
  {
    id: 'prop-38',
    categoryId: 'state-props',
    title: 'Prop 38 — Immunology research bond ($8.4B)',
    tldrLabel: 'Prop 38 — Immunology bond',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Prop 38 would add two decades of General Fund debt payments to fund immune-system research on major diseases. The fight is over who gets the money: half goes to one institute whose criteria, per CalMatters and UCLA, fit only the chief funder’s own. Supporters say the criteria simply require a proven, accountable institution.',
    ],
    introParagraphs: [
      'Prop 38 is a citizen initiative from philanthropist and medical inventor Gary Michelson, co-founder of the California Institute for Immunology and Immunotherapy. Michelson, directly and through his Michelson Center for Public Policy, has supplied nearly all of the Yes money, with institute co-founder Meyer Luskin the other major donor. The only No committee has raised a few thousand dollars.',
      'Supporters also include the American Association of Immunologists and the California Democratic Party. Opponents include Stanford scholar and former NIH associate director Robert M. Kaplan, the League of Women Voters, and the editorial boards of the Chronicle, Union-Tribune, Sacramento Bee, Mercury News / East Bay Times and Orange County Register.',
    ],
    polling: [
      {
        resultDisplay: 'Yes 55%, No 42%, don’t know 3%',
        pollsterCredit: 'PPIC Statewide Survey (likely voters, ±3.8%)',
        fieldDatesLabel: 'Sep 4–10, 2026',
        sourceUrl: 'https://www.ppic.org/wp-content/uploads/crosstabs-likely-voters-0926.pdf',
      },
    ],
    measure: {
      forYou: {
        wallet: 'No new tax. The state would repay about $500–600 million a year for 20 years out of the same budget that pays for schools and Medi-Cal.',
        who: 'Immunology researchers and, supporters say, patients with diseases like cancer. Half the money goes to one UC-affiliated institute.',
      },
      explainerUrl: 'https://calmatters.org/california-voter-guide-2026/proposition-38-research-bond/',
      question:
        'Authorizes bonds for immunology medical research. Initiative statute. Authorizes $8.4 billion in general obligation bonds for immunology and immunotherapy research; half to a single University of California–affiliated nonprofit medical research institute, half to research grants.',
      yesMeans:
        'Lets the state borrow $8.4 billion for immunology research, half to one UC-affiliated institute and half to grants, costing $500–600 million a year for about 20 years.',
      noMeans:
        'Keeps the state from borrowing the $8.4 billion; immunology research continues with existing federal, university and private funding, and no new state debt payments.',
      funding: {
        asOf: 'Oct. 9, 2026',
        yes: { raised: '$51.2 million', topDonors: ['Gary Michelson, directly and through his Michelson Center for Public Policy ($46.2M)', 'Meyer Luskin ($5M)'] },
        no: { raised: '$3,800', topDonors: ['Robert M. Kaplan ($3,100)'] },
        sources: propFundingSources(38, 'proposition-38-authorizes-bonds-immunology-research-initiative-statut'),
      },
      positions: [
        ...partyPositions('Yes', 'Yes', 'No', 'No'),
        editorial(PAPER.sfc, 'No', 'https://www.sfchronicle.com/opinion/editorials/article/prop-38-money-california-22453646.php'),
        editorial(PAPER.sdut, 'No', 'https://www.sandiegouniontribune.com/2026/09/18/no-on-prop-38-an-8-4-billion-wolf-in-sheeps-clothing/'),
        editorial(PAPER.sacbee, 'No', 'https://www.sacbee.com/opinion/election-endorsements/article317166634.html'),
        editorial(PAPER.bang, 'No', 'https://www.mercurynews.com/2026/10/13/endorsement-no-on-california-proposition-38-an-8-4-billion-money-grab-immunotherapy-ucla-research-ballot-measure/'),
        editorial(PAPER.ocr, 'No', 'https://www.ocregister.com/2026/08/23/endorsement-no-on-proposition-38-an-8-4-billion-money-grab/'),
      ],
      measureType: 'Initiative statute (general obligation bond)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'LAO: Increased state cost of $500 million to $600 million annually for about 20 years to repay the research bond, with some or all of the cost offset if the funded research generates revenue. Interest makes the total about 10% more than paying cash, after adjusting for inflation.',
      supporters:
        'Michael J. Fox Foundation; Alzheimer’s Los Angeles; Kidney Cancer Association; American Nurses Association/California',
      opponents: 'Robert M. Kaplan, Ph.D.',
      voterConnection: [
        'Every taxpayer pays through the General Fund, which also funds schools, Medi-Cal, and prisons. The cost is about a quarter of one percent of that budget.',
        'If your family faces cancer, heart disease, or Alzheimer’s, supporters say this speeds treatments, and California patients would get discounts on them.',
        'Payback is uncertain: the state shares discovery revenue until the bond is repaid, which the LAO says could take decades, if it happens at all.',
      ],
      mechanismBullets: [
        '$8.4 billion in general obligation bonds: at least $4.2 billion for research on cancer, heart disease, and Alzheimer’s; at most 2% for state administration.',
        'Half goes to one institute chosen by the Department of Public Health, meeting criteria on size, philanthropic funding, research space, and affiliation with a high-volume UC medical center.',
        'Half goes as competitive grants from a council of 7 UC campuses and 10–15 other California research institutions, which picks recipients from its own members.',
        'Both must publish annual reports and undergo independent financial audits.',
        '10% of discovery revenue goes to the General Fund until bond principal and interest are repaid, then to more immunology research.',
        '20% discount for California patients; grantees must buy at least half their goods and services in California when reasonably possible.',
        'The Legislature may amend it by a two-thirds vote only to further its purposes, and may not change how bond money is allocated.',
      ],
      argumentsFor: [
        'Immunotherapy is among medicine’s most promising fields, and most major diseases involve the immune system. The Michael J. Fox Foundation and other patient groups back it.',
        'Federal research cuts under the Trump administration leave a gap. California can keep top scientists and biotech jobs here.',
        'Taxpayers get something back: a 20% patient discount and 10% of discovery revenue until repaid. Earlier stem-cell bonds (Props 71 and 14) built a state research industry.',
        'Accountability is built in: annual reports, independent audits, a 2% administration cap, and competitive grants for half the money.',
      ],
      argumentsAgainst: [
        'About $4.2 billion is effectively earmarked for an institute co-founded by the chief funder; UCLA confirmed only it qualifies among UCLA-affiliated nonprofits. Public money shouldn’t be steered this way.',
        'It adds two decades of debt payments amid budget deficits and Medi-Cal cuts. Research belongs in the normal budget, where priorities can change.',
        'It bets on one discipline, where FDA approval and commercial success are rare, so the payback could be small or take decades.',
        'Grants would be awarded by a council of the same institutions that receive them, raising conflict-of-interest questions.',
      ],
      readingLinks: [
        {
          label: 'Legislative Analyst’s Office — Prop 38 analysis (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop38-110326.pdf',
          summary: 'Bond cost ($500–600M/yr for ~20 years), institute and grant structure, revenue-sharing provisions.',
        },
        {
          label: 'Secretary of State — Official voter guide: Prop 38',
          url: 'https://voterguide.sos.ca.gov/propositions/38/index.htm',
        },
        {
          label: 'CalMatters (via KPBS) — Is this proposition a $4 billion giveaway to a billionaire-backed LA research center?',
          url: 'https://www.kpbs.org/news/politics/2026/07/31/is-this-proposition-a-4-billion-giveaway-to-a-billionaire-backed-la-research-center',
          summary: 'Investigation of the institute criteria. UCLA confirms only one nonprofit qualifies, and the campaign responds.',
        },
        {
          label: 'CalMatters voter guide — Prop 38',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-38-research-bond/',
        },
        {
          label: 'KPBS / CalMatters — 2026 explainer: Prop 38',
          url: 'https://www.kpbs.org/news/politics/2026/09/23/proposition-38-borrow-8-4-billion-for-immunology-research',
        },
        { label: 'Yes on 38 campaign', url: 'https://yeson38.com' },
        { label: 'No on 38 campaign', url: 'https://votenoonprop38.org/' },
      ],
    },
    crossTypology: ct([
      ['LP', 'No', '◐', 'Leftward Progressives want public science funding to offset federal cuts, but steering about $4.2 billion to an institute co-founded by the billionaire funding the campaign clashes with their opposition to wealthy interests shaping policy.'],
      ['LL', 'No', '○', 'Loyal Liberals trust scientists and the patient groups behind it, and the state party says Yes, but every editorial board listed here and the League of Women Voters object to a ballot-box earmark for one institution, and they take good-government concerns seriously.'],
      ['LO', 'No', '●', 'Left-Out Left voters are the most alert to self-dealing, and criteria that CalMatters and UCLA say fit only the chief funder’s own institute look like insiders writing public spending for themselves.'],
      ['OO', 'Yes', '○', 'Order and Opportunity Left voters are drawn to research on cancer, heart disease and Alzheimer’s plus a 20% patient discount, though $500–600 million a year in debt payments and the single-institute carve-out make this a weak lean.'],
      ['TM', 'No', '○', 'Tuned-Out Middle voters are wary of 20 years of state debt for research with a distant, uncertain payoff, though hope for cures could move them.'],
      ['PP', 'No', '●', 'Pragmatic and Polite Right voters value competent, careful public spending, and a $8.4 billion bond with half pre-assigned to one donor-linked institute fails that test, as all five editorial boards listed here conclude.'],
      ['UR', 'No', '◐', 'Unconventional Right voters want smaller government and less debt, and object to state borrowing that benefits one well-connected institution, though medical research is less divisive for them.'],
      ['FC', 'No', '◐', 'Faith First Conservatives want state spending and borrowing reduced, though disease research is less contentious for them and the state Republican Party endorses the measure.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose nearly all new state bonds and distrust government picking winners in research, whatever the state Republican Party’s endorsement.'],
    ]),
    hinges: {
      LP: 'Yes if filling federal research cuts with state money matters more than how the first half is allocated. No if half pre-assigned to an institute co-founded by the chief funder is a deal-breaker and all of it should be awarded competitively.',
      LL: 'Yes if you trust the immunologists and patient groups behind it and see research as worth borrowing for, as the state party does. No if a ballot-box earmark for one institution, which every editorial board listed here opposes, outweighs the research case.',
      LO: 'Yes if more public research money and patient discounts are worth it even with the carve-out. No if half reserved for one billionaire-backed institute looks like insiders writing the rules for themselves.',
      OO: 'Yes if hope for treatments for diseases your family faces, plus a 20% patient discount, outweighs the cost. No if 20 years of debt payments from the budget that funds schools and Medi-Cal worries you more.',
      TM: 'Yes if hope for cures for diseases your family faces outweighs the cost. No if you’d rather that $500–600 million a year stay available for services you use now.',
      PP: 'Yes if annual reports, independent audits and a 2% administration cap make you comfortable the money will be well run. No if half the money pre-assigned to one donor-linked institute is not how careful public spending should work.',
      UR: 'Yes if a bond with royalty payback and patient discounts looks like a reasonable investment. No if you object to new state debt for a program steered to one institution.',
      FC: 'Yes if disease research is the rare spending you’d borrow for, as the state Republican Party argues. No if any new state borrowing is the wrong answer, whatever it funds.',
      NA: 'Yes if you see a time-limited bond with royalty payback as better than ongoing program spending. No if research should be left to private industry, not new state debt chosen by insiders.',
    },
    counterArguments: [
      'LL (No ○): But consider Yes if you trust the scientific case, because the American Association of Immunologists and patient groups like the Michael J. Fox Foundation back it and half the money is awarded through competitive grants.',
      'OO (Yes ○): But consider No if good-government concerns weigh on you, because CalMatters and UCLA found that only the chief funder’s institute meets the criteria for about $4.2 billion.',
      'FC (No ◐): But consider Yes if you weigh the state Republican Party’s endorsement and the 20% patient discount, because the bond also returns 10% of discovery revenue to the General Fund until it is repaid.',
    ],
  },

  // ───────────────────────────── PROP 39 ─────────────────────────────
  {
    id: 'prop-39',
    categoryId: 'state-props',
    title: 'Prop 39 — Voter ID requirement',
    tldrLabel: 'Prop 39 — Voter ID',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Today, California voters prove identity at registration, then by signature. Prop 39 would write into the Constitution an ID requirement at the polls and an ID-number match on every mail ballot. The debate is confidence versus access: a visible check that builds trust, or a new way for eligible voters’ ballots to be rejected.',
    ],
    introParagraphs: [
      'Prop 39 was placed on the ballot by Assemblymember Carl DeMaio’s Reform California and is backed by the California Republican Party. Illinois businessman Richard Uihlein is its largest donor, and Airbnb co-founder Joe Gebbia added $8M on Oct. 7, 2026. The No committees are funded by the California Democratic Party, unions, tribes, Reed Hastings, Patty Quillin, Quinn Delaney, the ACLU, and others.',
      'In August, Sacramento judges upheld the Attorney General’s ballot title and ordered supporters to revise pamphlet claims that it would make voting easier and save money, finding them false or misleading. PPIC’s poll split sharply by party (Democrats 19% Yes, Republicans 85%, independents 43%); an April Berkeley IGS poll found majority support when asked without political context.',
    ],
    polling: [
      {
        resultDisplay: 'Yes 43%, No 55%, don’t know 1%',
        pollsterCredit: 'PPIC Statewide Survey (likely voters, ±3.8%)',
        fieldDatesLabel: 'Sep 4–10, 2026',
        sourceUrl: 'https://www.ppic.org/wp-content/uploads/crosstabs-likely-voters-0926.pdf',
      },
      {
        resultDisplay: 'Yes 42%, No 51%',
        pollsterCredit: 'Berkeley IGS (as reported by NBC Palm Springs)',
        fieldDatesLabel: 'Reported Aug 17, 2026',
        sourceUrl: 'https://www.nbcpalmsprings.com/2026/08/17/california-voters-divided-on-propositions-39-and-40-new-poll-finds',
      },
    ],
    measure: {
      forYou: {
        wallet: 'No direct cost to you, and a free state voter ID card is available. The state would spend tens of millions to low hundreds of millions a year.',
        who: 'Every voter. Mail voters would write the last four digits of an ID number on each ballot envelope, and in-person voters would show ID.',
      },
      explainerUrl: 'https://calmatters.org/california-voter-guide-2026/proposition-39-voter-id/',
      question:
        'Prohibits citizens from voting unless they present government-issued identification. Initiative constitutional amendment. Invalidates mail ballots without the last four digits of a designated government-issued identification number on the envelope; prohibits in-person voting without presenting government-issued identification.',
      yesMeans:
        'Requires government ID to vote in person and the last four digits of a designated ID number on every mail-ballot envelope, or the ballot isn’t counted; free state ID offered.',
      noMeans:
        'Keeps current rules: voters prove identity when registering, mail ballots are verified by signature match, and most in-person voters need no ID.',
      funding: {
        asOf: 'Oct. 9, 2026',
        yes: { raised: 'More than $36 million', topDonors: ['Richard Uihlein ($17M)', 'Joe Gebbia ($8M)', 'Steven Bray ($3.35M, mostly loans)', 'Reform California ($3.1M)'] },
        no: { raised: '$23.3 million', topDonors: ['California Democratic Party ($5.5M)', 'Federated Indians of Graton Rancheria ($2M)', 'Patty Quillin ($1.5M)', 'M. Quinn Delaney ($1.5M)'] },
        note: 'Yes total as reported by CalMatters on Oct. 9, 2026, after Gebbia’s Oct. 7 gift; the No total is CalMatters’ tracker figure through Sept. 28.',
        sources: [{ label: 'CalMatters — Why are out-of-state billionaires funding a California voter ID measure? (Oct 9, 2026)', url: 'https://calmatters.org/politics/2026/10/california-election-voter-id-proposition-39/' }, ...propFundingSources(39, 'proposition-39-establishes-additional-voter-identification-and-citizenship-verification-requirements-initiative-constitutional-a', { kqed: false })],
      },
      positions: [
        ...partyPositions('No', 'Yes', 'No', 'No'),
        editorial(PAPER.sfc, 'No', 'https://www.sfchronicle.com/opinion/editorials/article/endorsement-proposition-39-voter-fraud-california-22463918.php'),
        editorial(PAPER.sdut, 'No', 'https://www.sandiegouniontribune.com/2026/10/02/endorsement-vote-no-on-prop-39-and-its-unworkable-voter-registration-rule/'),
        editorial(PAPER.sacbee, 'No', 'https://www.sacbee.com/opinion/article317017898.html'),
        editorial(PAPER.bang, 'No', 'https://www.mercurynews.com/2026/10/15/endorsement-reject-proposition-39-voter-id-fraud-ballot-measure/'),
        editorial(PAPER.ocr, 'Yes', 'https://www.ocregister.com/2026/10/15/endorsement-yes-on-proposition-39/'),
      ],
      measureType: 'Initiative constitutional amendment',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'LAO: Costs of between tens of millions of dollars and low hundreds of millions of dollars each year to implement new voting requirements (under 0.25% of the General Fund). The amount depends on future decisions, such as the design of the free ID card and how many are requested. Some savings are possible from smaller voter rolls, but they likely would not exceed the costs.',
      supporters:
        'The Transparency Foundation; Latino American Political Assn; Howard Jarvis Taxpayers Assn; CA Women’s Leadership Assn',
      opponents: 'ACLU California Action; Common Cause; League of Women Voters of California',
      voterConnection: [
        'Mail voters, about 13 of the 16 million Californians who voted in November 2024, would write the last four digits of a designated ID on every ballot envelope.',
        'In-person voters would show government ID. The state must give a free voter ID card to any eligible voter who asks.',
        'Most likely to hit snags: people who changed names, recent movers, people without a driver’s license (many seniors, people with disabilities, and lower-income voters), and anyone who miswrites the digits.',
      ],
      mechanismBullets: [
        'Current law: voters show a driver’s license, state ID, or last four Social Security digits when registering; mail-ballot signatures are checked against the one on file.',
        'Adds Article II, Section 3.1 to the Constitution. Self-executing, but the Legislature must define accepted IDs, “best efforts” on citizenship, and rules for military and overseas voters. Cure procedures are not spelled out.',
        'In person: show government-issued ID (“documentation that allows conclusive verification of the voter’s identity”) every time.',
        'By mail: the last four digits of the ID number designated at registration (the ID type is printed on the envelope). Unmatched ballots are not counted.',
        'Ballots count only after officials verify identity and that the voter cast only one ballot.',
        'Citizenship: state and county officials must use “best efforts” to verify citizenship attestations against government data and report yearly the share of each county’s rolls verified.',
        'Free state voter ID card on request. Citizens may sue to enforce, and the State Auditor audits the state and every county in odd-numbered years.',
        'Overrides conflicting state law, including SB 1174 (2024), which blocked local voter-ID rules like Huntington Beach’s. In Aug 2025 the Fifth Circuit upheld Texas’s similar mail-ballot rule; California is in the Ninth Circuit, so challenges are likely.',
      ],
      argumentsFor: [
        'Showing ID is routine for boarding a plane, picking up a prescription, or opening a bank account. Most states require some voter ID; California requires none at the polls.',
        'A number match is more objective than signature comparison by election workers. It deters impersonation and double voting, and a federal appeals court upheld a similar Texas rule.',
        'It keeps universal vote-by-mail, asks only for four digits, and guarantees a free ID card so cost is not a barrier.',
        'Many voters doubt election integrity. Independent audits and citizenship-verification reports give them a way to check.',
      ],
      argumentsAgainst: [
        'Impersonation and noncitizen voting are already rare crimes. California verifies identity at registration and checks every mail-ballot signature. Opponents call this “a solution in search of a problem.”',
        'Strict matches reject eligible voters. In Texas’s first election under its rule (2022), thousands of mail ballots were initially flagged or rejected, mostly over missing or mismatched numbers.',
        'Key protections, including cure procedures and accepted IDs, are left to future legislation, while the burden falls on voters least likely to have matching ID.',
        'In the Constitution, it would take another statewide vote to fix. ID digits on envelopes raise privacy concerns, and a judge found the campaign’s privacy and “easier voting” claims misleading.',
      ],
      readingLinks: [
        {
          label: 'Legislative Analyst’s Office — Prop 39 analysis (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop39-110326.pdf',
          summary: 'Current ID rules, what changes for in-person and mail voters, the free ID card, and cost range.',
        },
        {
          label: 'Secretary of State — Official voter guide: Prop 39',
          url: 'https://voterguide.sos.ca.gov/propositions/39/index.htm',
          summary: 'Arguments, rebuttals, and full constitutional text.',
        },
        {
          label: 'CalMatters voter guide — Prop 39',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-39-voter-id/',
        },
        {
          label: 'KPBS / CalMatters — 2026 explainer: Prop 39',
          url: 'https://www.kpbs.org/news/politics/2026/09/23/proposition-39-require-identification-for-voting',
        },
        {
          label: 'SJV Sun — Court rulings on Prop 39 ballot title and arguments (Aug 2026)',
          url: 'https://sjvsun.com/news/politics/democrats-win-court-fights-over-calif-voter-id-measure',
          summary: 'Judge upheld the AG’s title. A second judge found several supporter claims false or misleading.',
        },
        {
          label: 'Capitol Weekly (via Times of San Diego) — Who is funding Prop 39',
          url: 'https://timesofsandiego.com/politics/2026/08/21/californias-voter-id-initiative-goes-national/',
        },
        {
          label: 'Votebeat — Fifth Circuit upholds Texas mail-ballot ID-number rule (Aug 2025)',
          url: 'https://www.votebeat.org/texas/2025/08/06/voter-id-requirement-texas-vote-by-mail-sb1',
          summary: 'The closest legal precedent for the mail-ballot provision.',
        },
        {
          label: 'Election Law Blog — Huntington Beach loses appeal on city voter ID (Nov 2025)',
          url: 'https://electionlawblog.org/2025/huntington-beach-loses-appeal-cannot-enact-its-city-voter-id-law-in-contravention-of-california-state-law/',
          summary: 'Why a statewide constitutional amendment is the route proponents chose.',
        },
        { label: 'Yes on 39 — Californians for Voter ID', url: 'https://www.voteridca.org/' },
        { label: 'No on 39 — Californians for Voting Rights', url: 'https://noonprop39.com/' },
      ],
    },
    crossTypology: ct([
      ['LP', 'No', '●', 'Leftward Progressives prioritize ballot access and see a constitutional rule that throws out mail ballots with missing or mismatched ID digits as falling hardest on low-income, disabled and young voters.'],
      ['LL', 'No', '●', 'Loyal Liberals trust California’s election administration and signature checks, weigh the rarity of documented fraud, and note a judge found the campaign’s “easier voting” claims false or misleading.'],
      ['LO', 'No', '○', 'Left-Out Left voters mostly favor photo ID in principle, but as renters who move often they are the most exposed to ballots rejected over ID mismatches, in a measure whose largest donor is an out-of-state billionaire.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters strongly back photo ID to vote (84%) and see it as basic order, though many also value no-excuse mail voting, which the mail-ballot number rule complicates.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters mostly see showing ID as common sense, though they are among the voters most likely to lack a current ID or to have moved recently.'],
      ['PP', 'Yes', '◐', 'Pragmatic and Polite Right voters overwhelmingly favor photo ID and like a free state card, though leaving cure rules to the Legislature in a hard-to-fix constitutional amendment, and the campaign’s misleading claims, give them pause.'],
      ['UR', 'Yes', '●', 'Unconventional Right voters almost all favor photo ID to vote and want citizenship checks on the rolls.'],
      ['FC', 'Yes', '●', 'Faith First Conservatives nearly unanimously back voter ID and citizenship verification as protections for legitimate elections.'],
      ['NA', 'Yes', '●', 'No Apologies Right voters nearly unanimously back voter ID and distrust California’s mail-ballot system, and this is the strongest check on it available.'],
    ]),
    hinges: {
      LP: 'Yes if a free state ID card and a four-digit check seem a fair price for more public confidence in results. No if strict number matches would reject eligible voters, hitting low-income, disabled and young voters hardest.',
      LL: 'Yes if a number match seems more objective than signature checks and the free ID card eases the burden. No if fraud is already rare, today’s registration and signature checks work, and rejecting valid ballots isn’t worth the risk.',
      LO: 'Yes if you favor showing ID to vote and a visible check would raise your trust in elections. No if you move often and an address or ID mismatch could get your own ballot rejected.',
      OO: 'Yes if showing ID to vote is basic order and the free state ID card removes the cost barrier. No if you rely on voting by mail and worry that a missing or miswritten digit could keep your ballot from counting.',
      TM: 'Yes if you already carry a driver’s license and want a simple, visible identity check. No if you lack a current ID or moved recently, and a mismatch could keep your ballot from counting.',
      PP: 'Yes if a free-ID, four-digit check looks like the modest safeguard most states already use. No if leaving cure procedures and accepted IDs to the Legislature, in a constitutional amendment that takes another statewide vote to fix, makes you uneasy.',
      UR: 'Yes if you want ID at the polls, an ID check on mail ballots and yearly citizenship reports. No if state costs of up to low hundreds of millions a year, with key details left to Sacramento, outweigh the gain.',
      FC: 'Yes if ID and citizenship verification are protections for legitimate elections. No if you worry eligible voters, such as seniors without a driver’s license, could have their ballots rejected over strict matches.',
      NA: 'Yes if you want a visible check on California’s mail-ballot system plus audits and the right to sue to enforce it. No if you’d rather not leave accepted IDs and cure rules for Sacramento lawmakers to define.',
    },
    counterArguments: [
      'LO (No ○): But consider Yes if you favor photo ID to vote, as most Left-Out Left voters do, because the measure guarantees a free state ID card and keeps universal vote-by-mail.',
      'OO (Yes ◐): But consider No if you vote by mail, because in Texas’s first election under a similar rule thousands of mail ballots were flagged or rejected, mostly over missing or mismatched numbers.',
      'PP (Yes ◐): But consider No if careful drafting matters to you, because cure procedures and accepted IDs are left to future legislation and a judge found several of the campaign’s claims false or misleading.',
    ],
  },

  // ───────────────────────────── PROP 40 ─────────────────────────────
  {
    id: 'prop-40',
    categoryId: 'state-props',
    title: 'Prop 40 — One-time 5% tax on billionaires’ net worth',
    tldrLabel: 'Prop 40 — Billionaire tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Prop 40 would tax roughly 200 California billionaires once, mostly to backfill federal Medi-Cal cuts. Supporters see a rare chance to tax huge unrealized gains. Opponents, including Gov. Newsom and Democratic nominee Xavier Becerra, warn billionaires will leave, permanently shrinking income taxes, and expect years of litigation over a residency date set before the vote.',
    ],
    introParagraphs: [
      'SEIU-United Healthcare Workers West placed Prop 40 on the ballot and funds nearly all of the Yes side. The No side has raised about three times as much: most comes from Building a Better California, the vehicle for Sergey Brin and other billionaires, which is also funding Yes on 41 and 42, and Chris Larsen and Ripple Labs fund a second No committee.',
      'The California Democratic Party endorsed Prop 40 by a narrow 61.7% executive-board vote, splitting with Gov. Newsom. PPIC also found 51% Yes on Prop 41 and 54% on Prop 42, the measures that would cancel it; PPIC’s Mark Baldassare told CalMatters many voters don’t realize they are countermeasures.',
    ],
    polling: [
      {
        resultDisplay: 'Yes 52%, No 46%, don’t know 2%',
        pollsterCredit: 'PPIC Statewide Survey (likely voters, ±3.8%)',
        fieldDatesLabel: 'Sep 4–10, 2026',
        sourceUrl: 'https://www.ppic.org/wp-content/uploads/crosstabs-likely-voters-0926.pdf',
      },
      {
        resultDisplay: 'Yes 48%, No 41%',
        pollsterCredit: 'Berkeley IGS (as reported by NBC Palm Springs)',
        fieldDatesLabel: 'Reported Aug 17, 2026',
        sourceUrl: 'https://www.nbcpalmsprings.com/2026/08/17/california-voters-divided-on-propositions-39-and-40-new-poll-finds',
      },
    ],
    measure: {
      forYou: {
        wallet: 'Your taxes change only if your net worth is about $1 billion or more.',
        who: 'Medi-Cal patients, community clinics and rural hospitals, which get most of the money. Your votes on Props 41 and 42 can cancel it.',
      },
      explainerUrl: 'https://calmatters.org/california-voter-guide-2026/proposition-40-billionaire-tax/',
      question:
        'Imposes one-time tax on certain taxpayers. Initiative constitutional amendment and statute. Imposes a 5% tax on certain taxpayers with assets over $1 billion; revenue primarily for health care; exempts revenue from constitutional school-funding and spending-limit requirements.',
      yesMeans:
        'Imposes a one-time 5% tax on the net worth of billionaires who lived in California on Jan. 1, 2026, due in 2027, with 90% of revenue going to health care.',
      noMeans:
        'Keeps California without a wealth tax; billionaires continue paying existing income and other taxes, and no new revenue goes to health care from this source.',
      related: [
        {
          raceId: 'prop-41',
          note: 'If both pass and Prop 41 gets more Yes votes, courts could find they conflict and void all of Prop 40, even with majority approval (LAO).',
        },
        {
          raceId: 'prop-42',
          note: 'If both pass and Prop 42 gets more Yes votes, courts could find they conflict and void all of Prop 40, even with majority approval (LAO).',
        },
      ],
      funding: {
        asOf: 'Oct. 9, 2026',
        yes: { raised: '$32.7 million', topDonors: ['SEIU-United Healthcare Workers West and its committees ($31.8M)', 'Alan Davis ($275K)', 'Saikat Chakrabarti ($201K)', 'Ross Boucher ($200K)'] },
        no: { raised: '$99.8 million', topDonors: ['Building a Better California, Sergey Brin’s committee ($88.5M)', 'Chris Larsen ($5M)', 'Ripple Labs ($5M)', 'California Business Roundtable ($695K)'] },
        sources: propFundingSources(40, 'proposition-40-imposes-one-time-tax-certain-individuals-and-trusts-initiative-constitutional-amendment-and-statute'),
      },
      positions: [
        ...partyPositions('Yes', 'No', 'Yes', 'No'),
        editorial(PAPER.lat, 'No', 'https://www.latimes.com/opinion/story/2026-09-06/editorial-vote-no-on-proposition-40'),
        editorial(PAPER.sdut, 'No', 'https://www.sandiegouniontribune.com/2026/08/28/vote-no-on-billionaires-tax-to-prevent-economic-chaos-preserve-jobs/'),
        editorial(PAPER.sacbee, 'Yes', 'https://www.sacbee.com/opinion/election-endorsements/article317269166.html'),
        editorial(PAPER.bang, 'No', 'https://www.mercurynews.com/2026/10/21/endorsement-reject-california-ballot-propositions-40-41-42-billionaires-tax-ai-inequality/'),
        editorial(PAPER.ocr, 'No', 'https://www.ocregister.com/2026/09/13/endorsement-no-on-proposition-40s-reckless-wealth-tax/'),
      ],
      measureType: 'Initiative constitutional amendment and statute',
      voteThreshold: 'Simple majority (but see Props 41 and 42: if either receives more Yes votes, courts could void Prop 40)',
      fiscalImpact:
        'LAO: Temporary revenue increase of tens of billions of dollars spread over several years from wealth tax on billionaires. Possible ongoing decrease of less than $1 billion per year in income tax revenue from billionaires (for example, if some leave California). Administration costs of tens of millions per year for several years, paid from the tax.',
      supporters: 'US Senator Bernie Sanders; SEIU United Healthcare Workers West',
      opponents:
        'California Primary Care Association; California School Boards Association; California Taxpayers Association',
      voterConnection: [
        'Unless your net worth is about $1 billion or more, you would not owe this tax.',
        'If you or your family rely on Medi-Cal, a community clinic, or a rural hospital, that is where most of the money goes.',
        'Your votes on Props 40, 41, and 42 interact. Yes on 40 plus Yes on 41 or 42 helps the countermeasures; if either outpolls Prop 40, courts could void it (LAO).',
      ],
      mechanismBullets: [
        'Who pays: individuals (a married couple counts as one) and certain trusts resident in California on January 1, 2026, worth $1 billion or more on December 31, 2026. Leaving after January 1 doesn’t avoid it.',
        'Rate: 5% of total net worth, phasing in from zero at $1.0B to the full rate at $1.1B (0.1 point per $2M).',
        'What counts: worldwide stocks, business interests, bonds, art, intellectual property, and other personal property at fair market value. Pensions and retirement accounts are generally exempt, and real estate is generally excluded (LAO). Up to $5M of miscellaneous assets excluded; 2025–26 trust transfers are pulled back in.',
        'Paying: in full with the 2026 return (due 2027), or five annual installments with a 7.5% nondeductible annual charge on the balance. Illiquid founders may use an “optional deferral account” that taxes later sales and distributions.',
        'Spending: a reserve fund outside the General Fund. After administration, 90% to health care (Medi-Cal and other coverage, provider payments) and 10% to K-14 education and food aid (CalFresh, CalFood, school meals). Exempt from the Gann limit and Prop 98 guarantee.',
        'Legal defense: challenges go to Sacramento Superior Court within 60 days, then straight to the state Supreme Court, targeting a ruling by Nov 1, 2027. Courts are told to adjust dates rather than strike the tax. Amendable by two-thirds vote only to further its purposes.',
        'Conflict clause (Sec. 8): Prop 40 prevails over any same-ballot measure that taxes billionaire net worth or directs such revenue if it gets more Yes votes. See Prop 41 for how 41 and 42 interact.',
      ],
      argumentsFor: [
        'Billionaires’ mostly unrealized gains escape income tax; research the measure cites finds they pay a smaller share than typical households. A one-time 5% is often less than a year’s gain.',
        'Federal Medicaid cuts threaten Medi-Cal coverage, clinics, maternity wards, and rural hospitals. This backfills them without taxing anyone else.',
        'It resists avoidance: the January 1, 2026 residency date means moving after the announcement doesn’t help, trusts and transfers are reached, and installments and deferral address liquidity.',
        'The money is walled off in a special fund the General Fund can’t borrow, mostly earmarked for health care and exempt from limits that would cap it.',
      ],
      argumentsAgainst: [
        'Self-defeating: Newsom, Becerra, and the LAO point to departures that cut income-tax revenue yearly, for a one-time windfall. Larry Page and Peter Thiel reportedly moved ties out beforehand.',
        'Legal risk is high. A pre-vote residency date invites due-process challenges, and taxing worldwide assets raises commerce-clause questions. Litigation could delay or shrink collections for years.',
        'Revenue is very uncertain (LAO: tens of billions; sponsor: about $100B) because valuing private companies, art, and founders’ stakes is hard and contestable.',
        'The California Medical Association, CTA, Planned Parenthood, and clinic and school-board groups say it was drafted without them, lacks spending safeguards, and doesn’t fix long-term health funding.',
      ],
      readingLinks: [
        {
          label: 'Legislative Analyst’s Office — Prop 40 analysis (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop40-110326.pdf',
          summary: 'Who pays, spending rules, and why revenue is “very hard to predict.”',
        },
        {
          label: 'Secretary of State — Official voter guide: Prop 40',
          url: 'https://voterguide.sos.ca.gov/propositions/40/index.htm',
        },
        {
          label: 'Text of proposed law — Prop 40 (PDF)',
          url: 'https://vig.cdn.sos.ca.gov/2026/general/pdf/prop40-text-proposed-laws.pdf',
          summary: 'Full text, including the residency/valuation dates and the Sec. 8 conflict clause.',
        },
        {
          label: 'CalMatters (via Santa Barbara Independent) — How Props 41 and 42 could defeat the billionaire tax (Sept 27, 2026)',
          url: 'https://www.independent.com/2026/09/27/the-billionaire-tax-could-be-defeated-by-two-other-tax-measures-heres-how/',
          summary: 'Explains the vote-count showdown and the money behind each side.',
        },
        {
          label: 'CalMatters voter guide — Prop 40',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-40-billionaire-tax/',
        },
        {
          label: 'KPBS / CalMatters — 2026 explainer: Prop 40',
          url: 'https://www.kpbs.org/news/politics/2026/09/23/proposition-40-apply-one-time-tax-to-billionaires-to-fund-healthcare-and-education',
        },
        {
          label: 'Tax Foundation — Constitutional and legal issues with Prop 40 (critical analysis)',
          url: 'https://taxfoundation.org/research/all/state/california-proposition-40-wealth-tax-constitutional-legal-issues/',
          summary: 'The case that the retroactive residency date and worldwide reach are legally vulnerable.',
        },
        {
          label: 'Galle, Gamage & Shanske — Legal analysis of the Billionaire Tax Act (PDF, supportive)',
          url: 'https://eml.berkeley.edu/~saez/galle-gamage-shanskeCBTAlegal.pdf',
          summary: 'Tax-law scholars’ case that the measure can survive constitutional challenges.',
        },
        {
          label: 'Fortune — Did Larry Page leave California ahead of the billionaire tax? (Jan 2026)',
          url: 'https://fortune.com/2026/01/07/did-larry-page-leave-california-billionaire-tax-jensen-huang/',
        },
        { label: 'Yes on 40 campaign', url: 'https://yeson40.com/' },
        { label: 'No on 40 campaign', url: 'https://votenoon40.org/' },
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes', '●', 'Leftward Progressives are the most opposed to extreme wealth, and a one-time tax on about 200 billionaires to backfill federal Medi-Cal cuts is a core fairness priority for them.'],
      ['LL', 'Yes', '○', 'Loyal Liberals want the very rich to pay more and the state party endorsed it, but they give real weight to the LAO’s warning of permanent income-tax losses and to Gov. Newsom’s, Xavier Becerra’s and health groups’ opposition.'],
      ['LO', 'Yes', '●', 'Left-Out Left voters are bothered that the wealthy don’t pay their share and want government to guarantee health care, and this taxes only billionaires to fund Medi-Cal, clinics and rural hospitals.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters favor making the wealthy pay more for health care, though their greater confidence in business makes the warnings about departures and lost jobs count.'],
      ['TM', 'Yes', '◐', 'Tuned-Out Middle voters would pay nothing and often rely on Medi-Cal or community clinics, though years of possible litigation make the payoff uncertain.'],
      ['PP', 'No', '◐', 'Pragmatic and Polite Right voters are open to the wealthy paying more but prefer cautious, incremental fixes, and a retroactive residency date, legal risk and the LAO’s warning of permanent revenue loss make this too risky.'],
      ['UR', 'No', '◐', 'Unconventional Right voters favor lower taxes and smaller government, though resentment of billionaires gives the measure some pull with them.'],
      ['FC', 'No', '●', 'Faith First Conservatives oppose new taxes and a larger state role in health care, and see a wealth tax as a step toward taxing other assets.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose nearly all taxes, believe people earn their own success, and see a wealth tax as confiscatory.'],
    ]),
    hinges: {
      LP: 'Yes if taxing extreme wealth to backfill federal Medi-Cal cuts is a core fairness issue, voting No on 41 and 42 to keep it alive. No if lawsuits and billionaires leaving would cost more in lost income taxes than the one-time money brings.',
      LL: 'Yes if a one-time tax on about 200 billionaires is a fair way to backfill federal Medi-Cal cuts, as the state party argues. No if the LAO’s warning of permanent income-tax losses and the legal risk of a pre-vote residency date outweigh a one-time windfall.',
      LO: 'Yes if making billionaires pay to protect clinics and Medi-Cal matters most, knowing a Yes on 41 or 42 could cancel it. No if a tax that could be tied up in court for years, and that health and school groups say lacks spending safeguards, isn’t worth backing.',
      OO: 'Yes if you want clinics, maternity wards and rural hospitals backfilled by the people most able to pay. No if you side with Newsom and Becerra that departures and litigation make it self-defeating.',
      TM: 'Yes if a tax only billionaires pay, funding health coverage your family may rely on, sounds right to you. No if very uncertain revenue and years of possible court delays mean it won’t fix long-term health funding.',
      PP: 'Yes if federal Medi-Cal cuts will close clinics and hospitals near you and only about 200 people would pay. No if a retroactive residency date and years of litigation make it too risky to count on.',
      UR: 'Yes if billionaires paying more than working families matters more to you than your usual opposition to new taxes. No if you doubt a one-time, retroactive wealth tax will survive in court or keep taxpayers from leaving.',
      FC: 'Yes if billionaires paying a larger share matters more to you than your usual opposition to new taxes. No if new taxes and a larger state role in health care are the wrong answer, even when only billionaires pay.',
      NA: 'Yes if a one-time levy on about 200 billionaires beats taxing anyone else to cover federal Medi-Cal cuts. No if wealth taxes are confiscatory and set a precedent; a Yes on 41 or 42 is a second way to stop it.',
    },
    counterArguments: [
      'LL (Yes ○): But consider No if you weigh expert warnings heavily, because the LAO warns of a possible ongoing income-tax loss of up to $1 billion a year if billionaires leave, and Gov. Newsom and Xavier Becerra oppose it.',
      'PP (No ◐): But consider Yes if federal Medi-Cal cuts threaten clinics and rural hospitals near you, because only about 200 people would pay and the money is walled off in a fund mostly for health care.',
      'UR (No ◐): But consider Yes if billionaires paying less than working families bothers you, because supporters note that a one-time 5% is often less than a year’s gain on mostly unrealized wealth that income tax never reaches.',
    ],
  },

  // ───────────────────────────── PROP 41 ─────────────────────────────
  {
    id: 'prop-41',
    categoryId: 'state-props',
    title: 'Prop 41 — No new taxes outside the state spending limit; audits of new special taxes',
    tldrLabel: 'Prop 41 — Tax audits / spending limit',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Prop 41 would count new state taxes under the 1979 Gann spending limit and require State Auditor reviews of programs funded by new special taxes. It is aimed at Prop 40, which exempts its revenue from that limit: if 41 gets more Yes votes, Prop 40 is void even if it passes. It would also constrain future voter-approved taxes.',
    ],
    introParagraphs: [
      'Prop 41 was placed on the ballot by opponents of the billionaire tax. Building a Better California, funded by Sergey Brin and other billionaires, is the Yes campaign’s only major donor and is also funding Yes on 42. CalMatters also lists Reform California and Stewart Resnick as backers. SEIU-UHW’s “Yes on 40 – No on 41 & 42” committee and the California Democratic Party lead the opposition.',
      'PPIC’s September poll has Prop 41 nearly even with Prop 40 (52% Yes), so the vote-count showdown is a real possibility. Democrats were 38% Yes, Republicans 74%, independents 51%.',
    ],
    polling: [
      {
        resultDisplay: 'Yes 51%, No 44%',
        pollsterCredit: 'PPIC Statewide Survey (likely voters, ±3.8%)',
        fieldDatesLabel: 'Sep 4–10, 2026',
        sourceUrl: 'https://www.ppic.org/wp-content/uploads/crosstabs-likely-voters-0926.pdf',
      },
    ],
    measure: {
      forYou: {
        wallet: 'No direct cost. New state taxes passed since 2026 would face tighter spending-limit rules and State Auditor reviews.',
        who: 'Anyone with a view on Prop 40: if Prop 41 gets more Yes votes than Prop 40, the billionaire tax is wiped out.',
      },
      explainerUrl: 'https://calmatters.org/california-voter-guide-2026/proposition-41-tax-audits/',
      question:
        'Prohibits new state taxes that exclude revenues from state spending limit; requires audits for new state special taxes. Initiative constitutional amendment. Nullifies state taxes enacted after January 1, 2026 that exempt their revenue from the voter-approved state spending limit; requires pre-election and recurring audits of programs funded by new special taxes.',
      yesMeans:
        'Bars new state taxes enacted since Jan. 1, 2026 from being exempt from the Gann spending limit, and requires State Auditor reviews of programs funded by new state special taxes.',
      noMeans:
        'Keeps current spending-limit rules, which let new taxes such as Prop 40 exclude their revenue, and leaves the State Auditor’s review duties unchanged.',
      related: [
        {
          raceId: 'prop-40',
          note: 'Written to cancel Prop 40: if both pass and Prop 41 gets more Yes votes, courts could void all of Prop 40 (LAO).',
        },
        {
          raceId: 'prop-42',
          note: 'Both are written to cancel Prop 40 if they outpoll it; neither conflicts with the other, so both can take effect.',
        },
      ],
      funding: {
        asOf: 'Oct. 9, 2026',
        yes: { raised: '$58.3 million', topDonors: ['Building a Better California, Sergey Brin’s committee ($58.35M)', 'Reform California ($22K)'] },
        no: { raised: '$365,000', topDonors: ['Alan Davis ($250K)', 'Excessive Wealth ($40K)', 'John Esler ($25K)', 'William Connell ($25K)'] },
        note: 'No total is CalMatters’ tracker figure through Sept. 28. SEIU-UHW’s “Yes on 40 – No on 41 & 42” committee also campaigns against Prop 41; its money is counted under Prop 40.',
        sources: propFundingSources(41, 'proposition-41-requires-audits-programs-funded-new-state-special-taxes-prohibits-new-state-taxes-are-excluded-existing-voter-app'),
      },
      positions: [
        ...partyPositions('No', 'Yes', 'No', 'Yes'),
        editorial(PAPER.sfc, 'No', 'https://www.sfchronicle.com/opinion/editorials/article/endorsement-california-prop-41-taxes-22445889.php'),
        editorial(PAPER.sdut, 'Yes', 'https://www.sandiegouniontribune.com/2026/09/21/endorsement-yes-on-proposition-41-and-42-to-limit-taxation-in-california/'),
        editorial(PAPER.sacbee, 'No', 'https://www.sacbee.com/opinion/election-endorsements/article317122476.html'),
        editorial(PAPER.bang, 'No', 'https://www.mercurynews.com/2026/10/21/endorsement-reject-california-ballot-propositions-40-41-42-billionaires-tax-ai-inequality/'),
        editorial(PAPER.ocr, 'Yes', 'https://www.ocregister.com/2026/09/21/endorsement-yes-on-proposition-41-and-42-to-limit-taxation-in-california/'),
      ],
      measureType: 'Initiative constitutional amendment',
      voteThreshold: 'Simple majority (conflict clause: if it outpolls Prop 40, Prop 40 is void)',
      fiscalImpact:
        'LAO: Net fiscal effect unknown; depends on future decisions by voters, the Legislature, and other policymakers. State Auditor costs likely in the low millions of dollars per year (mostly paid from new special-tax revenue; the General Fund pays for audits of taxes that fail or never qualify), plus a few hundred thousand dollars per qualified initiative to print audit summaries in the voter guide. Savings are possible if audit recommendations are implemented.',
      supporters:
        'CA Society of Certified Public Accountants (CalCPAs); CalAsian Chamber of Commerce; California Taxpayers Association (CalTax)',
      opponents: 'US Senator Bernie Sanders; SEIU United Healthcare Workers West',
      voterConnection: [
        'If you support Prop 40, a Yes on 41 works against it: if 41 outpolls 40, the billionaire tax is wiped out entirely.',
        'If you oppose Prop 40, a Yes on 41 is a second way to stop it, even if Prop 40 passes.',
        'Future special-tax initiatives would come with a State Auditor review in your voter guide, and new tax money would be likelier to trigger rebates and school payments than add to the budget.',
      ],
      mechanismBullets: [
        'Adds Article XXIV (“Protecting Taxpayer Dollars”) to the state Constitution.',
        'Pre-election audit: once a special-tax initiative reaches 25% of required signatures, the State Auditor reviews each funded program’s cost-efficiency, outcomes, fraud and waste, and private-sector comparisons, including ways to save at least 10% a year. A summary runs in the voter guide.',
        'Programs funded by special taxes enacted on or after January 1, 2026 are re-audited every four years, paid from that tax.',
        'No state tax enacted or taking effect on or after January 1, 2026 may be exempted from the Gann limit (Article XIII B), by an outside fund or by statute; the state “shall not impose, collect, or enforce” one that is.',
        'Conflict clause: same-ballot initiatives with a limit-exempt tax (as Prop 40 has) or different audit rules are in conflict. If 41 gets more Yes votes, “all the provisions of the other measure shall be null and void.”',
        'If both pass and 40 gets more Yes votes, 41’s clause doesn’t void 40, and 40’s clause may not reach 41. The constitutional more-Yes-votes rule applies, and news reports treat that as 40 taking effect. Expect court review; Prop 42 sets up a parallel showdown.',
        'Fallback: if a superseding measure is later held invalid, 41 takes full effect. If the Governor and Attorney General won’t defend it, the General Fund pays for independent counsel.',
      ],
      argumentsFor: [
        'Taxpayers deserve proof before paying more. Billions have gone to programs like homelessness with too little to show, and an independent audit gives voters facts first.',
        'It restores the 1979 voter-approved spending limit, which supporters say special interests keep writing taxes around, making refunds of excess revenue more likely.',
        'Audits are paid from the new tax revenue, and the LAO says following their recommendations could save money.',
        'For Prop 40 opponents, it is a backstop: the wealth tax is void if 41 outpolls it, even if 40 clears 50%.',
      ],
      argumentsAgainst: [
        'A Trojan horse: a voter-friendly “audits” label on a measure to kill the billionaire tax, funded by the very people Prop 40 would tax.',
        'It reaches far beyond Prop 40, counting every future special tax, including for wildfire, transit, or health care, under a 1979 cap that could force rebates or cuts elsewhere.',
        'Audits begin at 25% of signatures, and the General Fund pays for measures that fail or never qualify, burdening the initiative process and favoring well-funded opponents.',
        'It reaches back to taxes enacted since January 1, 2026, and could set off litigation over how it interacts with other measures on the same ballot.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      readingLinks: [
        {
          label: 'Legislative Analyst’s Office — Prop 41 analysis (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop41-110326.pdf',
          summary: 'Audit requirements, spending-limit change, and why the net fiscal effect is unknown.',
        },
        {
          label: 'Secretary of State — Official voter guide: Prop 41',
          url: 'https://voterguide.sos.ca.gov/propositions/41/index.htm',
        },
        {
          label: 'Text of proposed law — Prop 41 (PDF, with conflict clause in Sec. 5)',
          url: 'https://vig.cdn.sos.ca.gov/2026/general/pdf/prop41-text-proposed-laws.pdf',
        },
        {
          label: 'CalMatters voter guide — Prop 41',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-41-tax-audits/',
        },
        {
          label: 'KPBS / CalMatters — 2026 explainer: Prop 41',
          url: 'https://www.kpbs.org/news/politics/2026/10/01/proposition-41-require-audits-of-new-tax-programs',
        },
        {
          label: 'CalMatters (via Santa Barbara Independent) — How Props 41 and 42 could defeat the billionaire tax',
          url: 'https://www.independent.com/2026/09/27/the-billionaire-tax-could-be-defeated-by-two-other-tax-measures-heres-how/',
        },
        { label: 'Yes on 41 campaign', url: 'https://www.yesonprop41.org/' },
        { label: 'No on 41 (Yes on 40 – No on 41 & 42 committee)', url: 'https://yeson40.com/' },
      ],
    },
    crossTypology: ct([
      ['LP', 'No', '●', 'Leftward Progressives see Prop 41 as a billionaire-funded device to cancel the wealth tax and cap future public revenue under a 1979 limit.'],
      ['LL', 'No', '◐', 'Loyal Liberals like evidence-based audits but object to counting every future special tax under the 1979 Gann limit, a view shared by the state party and most editorial boards listed here.'],
      ['LO', 'No', '◐', 'Left-Out Left voters want tax money audited and accounted for, but they reject a measure bankrolled almost entirely by the billionaires it would shield from Prop 40.'],
      ['OO', 'No', '○', 'Order and Opportunity Left voters like the idea of audits but want the billionaire tax’s health-care money to survive, and a Yes here that outpolls Prop 40 would void it.'],
      ['TM', 'No', '○', 'Tuned-Out Middle voters like “audit new taxes first,” but the measure’s main near-term effect is canceling a tax only billionaires would pay to fund health care many of them use.'],
      ['PP', 'Yes', '◐', 'Pragmatic and Polite Right voters value fiscal accountability and a spending limit, and see independent audits before new special taxes as a prudent, low-cost safeguard.'],
      ['UR', 'Yes', '◐', 'Unconventional Right voters want smaller government and fewer new taxes, and like audits and the spending cap, though they are not driven by party loyalty on tax fights.'],
      ['FC', 'Yes', '●', 'Faith First Conservatives back limits on state spending and new taxes, and this restores the 1979 cap and adds audits.'],
      ['NA', 'Yes', '●', 'No Apologies Right voters want new taxes made harder to pass and revenue capped, and welcome a second way to stop the wealth tax.'],
    ]),
    hinges: {
      LP: 'Yes if independent audits of new special taxes matter more to you than keeping Prop 40 alive. No if you see it as a billionaire-funded way to cancel the wealth tax and cap future public revenue under a 1979 limit.',
      LL: 'Yes if you oppose Prop 40 and also value independent audits of new special taxes before they reach voters. No if counting every future special tax, for wildfire, transit or health care, under a 1979 cap goes too far, whatever you think of Prop 40.',
      LO: 'Yes if exposing waste in tax-funded programs matters more to you than whether Prop 40 survives. No if a measure bankrolled by the very billionaires Prop 40 would tax, written to cancel it, is a deal-breaker.',
      OO: 'Yes if you want Prop 40 stopped and like audits before new taxes pass. No if you want the billionaire tax’s health-care money to survive, since a Yes here that outpolls Prop 40 wipes it out.',
      TM: 'Yes if “audit new taxes first” matches your distrust of how Sacramento spends, knowing it can also cancel Prop 40. No if you’d rather judge each future tax on its merits than count it under a 1979 cap that could trigger cuts elsewhere.',
      PP: 'Yes if audits and spending restraint are a reasonable condition for new taxes and you want a second way to stop Prop 40. No if you’d rather Prop 40 stand or fall on its own vote than be voided by a countermeasure.',
      UR: 'Yes if exposing waste before new taxes pass and restoring the spending cap come first. No if you want the billionaire tax to survive, since a Yes here that outpolls Prop 40 erases it completely.',
      FC: 'Yes if limits on state spending and new taxes are what you want. No if you think future voter-approved taxes, such as for wildfire, should be judged on their merits rather than counted under a 1979 cap.',
      NA: 'Yes if you want the Gann limit, rebates and audits that make new taxes harder to pass, plus a backstop against Prop 40. No if new State Auditor duties, with the General Fund paying to audit measures that fail, look like more government.',
    },
    counterArguments: [
      'PP (Yes ◐): But consider No if you prefer measures judged on their own merits, because this one reaches far beyond Prop 40, counting every future special tax under a 1979 cap, and was written to void another measure even if a majority approves it.',
      'LO (No ◐): But consider Yes if accountability for tax money is your top concern, because programs funded by new special taxes would face State Auditor reviews before the vote and every four years after.',
      'TM (No ○): But consider Yes if you distrust how Sacramento spends, because the audits are paid from the new tax revenue and the LAO says following their advice could save money.',
    ],
  },
];
