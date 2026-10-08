import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * State propositions 37–41 (Nov 3, 2026 general election).
 * Sources checked Oct 7, 2026: LAO ballot analyses, SoS Voter Information Guide (text of proposed laws,
 * arguments), SoS measure-contribution pages (through Aug 2, 2026), FPPC top-10 contributor lists
 * (page modified Oct 6, 2026), PPIC Statewide Survey (Sept 4–10, 2026), CalMatters / KPBS explainers.
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
      'The biggest hurdle to buying a first home in California is often the down payment, not the monthly mortgage. Prop 37 would let the California Housing Finance Agency (CalHFA) borrow up to $25 billion from private bond investors and lend it to middle-income buyers as a second mortgage covering up to 17% of the price of a newly built home, so a buyer who puts down 3% reaches the traditional 20%.',
      'The trade-off is about the state’s role rather than taxes. The bonds are revenue bonds repaid by borrowers’ loan payments, and the Legislative Analyst finds no direct state or local cost. Critics question putting a state agency deep into mortgage lending, and they warn that the measure helps buyers qualify by adding debt rather than lowering prices. A second piece, an optional “qualified builder” track, gives participating developers different construction-defect rules in exchange for stronger labor standards. That piece matters for condo construction and for future homeowners’ legal remedies.',
    ],
    introParagraphs: [
      'Prop 37 is a citizen initiative backed by a coalition of the California Association of Realtors and carpenters’ unions. The Realtors’ committee, “Homeownership for Families,” is the largest donor to Yes on 37 at $14.85M, according to the FPPC top-contributor list (updated Oct 6, 2026). Building a Better California, the billionaire-funded group fighting Prop 40, gave $6M, and carpenters’ councils gave about $1.7M. No opposition committee had raised enough to appear on that list, and no argument against was filed for the state voter guide. The California Democratic Party and Treasurer Fiona Ma support it. Reform California and the League of Women Voters oppose it.',
      'In PPIC’s September 2026 survey (likely voters, Sept 4–10), 61% said they would vote Yes and 35% No.',
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
      question:
        'Creates loan program for middle-income buyers of qualified new homes. Initiative statute. Authorizes $25 billion in bonds to offer eligible buyers fixed-rate mortgages for up to 17% of the price of a newly built home priced below about $1.5 million; buyers must be California residents, owner-occupants, within income limits, and put at least 3% down; bonds repaid by mortgage payments, not the State.',
      measureType: 'Initiative statute (revenue bonds)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'LAO: No direct state or local costs, because homebuyers’ loan payments repay the bond investors. Unknowns include investor demand for the bonds, how the loans compare in cost with other down-payment help, and whether the program increases home construction and buying.',
      supporters:
        'United Nurses Associations of California; California Conference of Carpenters; California State Treasurer Fiona Ma',
      opponents: 'None submitted',
      voterConnection: [
        'If you rent and want to buy, this targets you only if you buy a brand-new home (or a first-sale condo in a converted building). Existing homes don’t qualify.',
        'Income cap: up to 200% of the area median income for your family size, so many professional households qualify, not only lower-income ones.',
        'Taxpayers do not back the bonds. Private investors take the risk if borrowers default, so a No vote does not save you tax money, and a Yes vote does not cost you any.',
        'You would carry two loans, a first mortgage plus the state second mortgage of up to 17%. Supporters call that access. Critics call it more debt for the same house.',
        'If you buy a new home from a builder that opts into the “qualified builder” track, different construction-defect claim procedures would apply. Read the builder disclosure.',
      ],
      mechanismBullets: [
        'CalHFA may issue up to $25 billion in revenue bonds (refunding bonds not counted) and must launch the program within one year of passage.',
        'Loan: a fixed-rate second mortgage, subordinate to the first mortgage, for up to 17% of the purchase price. The buyer pays at least 3% from their own funds (not a grant or a loan). No prepayment penalties, lender fees capped by CalHFA rules, and a temporary hardship deferral of interest is possible.',
        'Buyer rules: California resident for at least one year, must move in within 60 days as a primary residence, income no higher than 200% of area median, must use a licensed real estate agent or broker, and homeowner education when CalHFA requires it.',
        'Home rules: newly built house, townhome, condo, or manufactured home (or a converted nonresidential building) where the buyer is the first purchaser. Price capped at 125% of the county’s federal conforming loan limit for a one-unit home, which the ballot label puts at about $1.5 million.',
        'Optional “qualified builder” track: developers accept labor enforcement rules (including liability for subcontractors’ wage and workers’ comp violations, enforceable by joint labor-management committees) and in exchange get revised construction-defect procedures that the LAO says generally give developers more flexibility.',
        'Repayment: CalHFA must set loan rates and terms to cover bond principal, interest, and administration, and must keep homebuyers’ interest costs as low as possible.',
      ],
      argumentsFor: [
        'The down payment is the main barrier: 20% of an $800,000 home is $160,000. Covering up to 17% lets middle-class families buy years sooner without a taxpayer subsidy.',
        'There is no General Fund cost or risk. Bond investors are repaid from borrowers’ payments, and the LAO finds no direct state or local cost.',
        'It pushes builders toward for-sale homes and condos. Supporters, citing housing researchers, say construction-defect liability is a major reason developers build rentals instead of condos, and the qualified-builder track addresses that.',
        'Consumer protections are built in: fixed rates, no prepayment penalties, capped fees, cash-flow underwriting for thin-credit buyers, and hardship deferrals.',
      ],
      argumentsAgainst: [
        'It doesn’t lower housing costs. Making more buyers eligible for the same limited supply of new homes could push prices up rather than down. Critics say the state should fix supply and permitting instead.',
        'A state agency would become a very large mortgage lender. If home prices fall, highly leveraged borrowers with two loans could end up owing more than their homes are worth.',
        'The help is aimed fairly high, at incomes up to 200% of area median and homes up to about $1.5M, and only at buyers of new construction. Most renters and buyers of existing homes get nothing.',
        'Changing the construction-defect rules for participating builders could weaken new owners’ remedies for shoddy work. The measure was written and funded mainly by the real-estate industry and building-trades unions, which have a direct stake in its rules.',
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
      ['PL', 'Yes', '◐', 'Progressive Left voters want the state to widen homeownership and like that building-trades labor standards come attached, though they would rather target help at lower-income renters than households earning up to 200% of median.'],
      ['EL', 'Yes', '◐', 'Establishment Liberals tend to favor market-based tools with no General Fund cost and the LAO’s no-direct-cost finding, while weighing the risk of the state becoming a major mortgage lender.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays prioritize middle-class homeownership and follow the state party, labor, and Treasurer Ma, all of whom back this measure.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters are often young renters shut out of ownership, so a 3%-down path appeals to them, even though they distrust a measure largely funded by the Realtors’ lobby.'],
      ['SS', 'Yes', '◐', 'Stressed Sideliners respond to concrete help for working families that raises no taxes, though few of them can afford even a new home priced near the program cap.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters value homeownership and the lack of taxpayer exposure, but they are uneasy about a government agency expanding into private lending.'],
      ['PR', 'No', '◐', 'Populist Right voters distrust big new state programs and side with Reform California’s warning about taxpayer and borrower risk, though help for middle-class buyers has populist appeal.'],
      ['CC', 'No', '●', 'Committed Conservatives believe the state should not be in the mortgage business and that subsidizing demand inflates prices instead of fixing supply.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives generally follow conservative groups’ opposition to expanding state programs, even though family homeownership is a value they share.'],
    ]),
    counterArguments: [
      'PR (No ◐): But consider Yes if the deciding factor for you is that taxpayers bear no bond risk and that it helps working families buy rather than rent.',
      'PL (Yes ◐): But consider No if you think public housing dollars and attention should go to renters and lower-income households, not buyers earning up to twice the median.',
      'CC (No ●): But consider Yes if you view the construction-defect changes as a real deregulatory win that could unlock condo building.',
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
      'Prop 38 asks whether California should borrow $8.4 billion through general obligation bonds to fund research on how the immune system can be used against cancer, heart disease, Alzheimer’s, and other illnesses. Unlike Prop 37, these bonds are repaid from the state General Fund, at a cost the LAO puts at $500–600 million a year for about 20 years. That is roughly a quarter of one percent of the General Fund budget, and it would compete with every other state program.',
      'The central controversy is who gets the money. Half the bond would go to a single UC-affiliated nonprofit institute chosen by the Department of Public Health. A CalMatters analysis, confirmed by a UCLA spokesperson, found that the eligibility criteria fit only one organization: the California Institute for Immunology and Immunotherapy, co-founded by Prop 38’s chief funder, Gary Michelson. Supporters say the criteria simply require a proven, accountable institution. California has done something similar before with stem-cell bonds (Props 71 and 14).',
    ],
    introParagraphs: [
      'Prop 38 is a citizen initiative placed on the ballot by philanthropist and medical inventor Gary Michelson. According to the FPPC top-contributor list (updated Oct 6, 2026), Yes on 38 has received $25M from Michelson, $21.2M from his Michelson Center for Public Policy (which he funds), and $5M from institute co-founder Meyer Luskin. No opposing committee appears on the list. The only listed opponent is Stanford scholar and former NIH associate director Robert M. Kaplan.',
      'In PPIC’s September 2026 survey of likely voters, 55% said Yes and 42% No. Supporters include the Michael J. Fox Foundation, the American Association of Immunologists, and the California Democratic Party. Opponents include the League of Women Voters and the Orange County Register editorial board (opinion).',
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
      question:
        'Authorizes bonds for immunology medical research. Initiative statute. Authorizes $8.4 billion in general obligation bonds for immunology and immunotherapy research; half to a single University of California–affiliated nonprofit medical research institute, half to research grants.',
      measureType: 'Initiative statute (general obligation bond)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'LAO: Increased state cost of $500 million to $600 million annually for about 20 years to repay the research bond, with some or all of the cost offset if the funded research generates revenue. Interest makes the total about 10% more than paying cash, after adjusting for inflation.',
      supporters:
        'Michael J. Fox Foundation; Alzheimer’s Los Angeles; Kidney Cancer Association; American Nurses Assoc\\CA',
      opponents: 'Robert M. Kaplan, Ph.D.',
      voterConnection: [
        'Every taxpayer pays. Repayment comes from the General Fund, the same budget that pays for schools, Medi-Cal, and prisons, at about $500–600M a year for roughly two decades.',
        'If you or a family member faces cancer, heart disease, or Alzheimer’s, supporters say this speeds up treatments. Any therapy developed with the funds must generally be sold in California at a 20% discount.',
        'Payback is possible but uncertain: 10% of any revenue from discoveries goes to the state until the bond is repaid. The LAO says that could take decades, if it happens at all.',
        'The measure picks a recipient rather than a field: half the money goes to one institute that, by CalMatters’ reporting, only the chief donor’s own institute can qualify for.',
      ],
      mechanismBullets: [
        '$8.4 billion in general obligation bonds. At least $4.2 billion must go to immunology research on cancer, heart disease, and Alzheimer’s. No more than 2% may go to state administration.',
        'About half goes to one research institute selected by the California Department of Public Health. It must meet criteria on size, philanthropic funding, research space, and affiliation with a high-volume UC medical center.',
        'The other half is awarded as competitive grants by a council of 7 UC campuses and 10–15 other California universities and nonprofit research institutions, which selects recipients from among its own members.',
        'Both the institute and the grant council must publish annual public reports and undergo independent financial audits.',
        'Revenue sharing: 10% of revenue from funded discoveries goes to the state General Fund until bond costs (principal plus interest) are repaid, then to future immunology research.',
        'Other conditions: a 20% California patient discount on resulting treatments, and grantees must buy at least half of their goods and services from California suppliers when reasonably possible.',
        'The Legislature may amend the act by a two-thirds vote, but only to further its purposes, and it may not change how bond proceeds are allocated.',
      ],
      argumentsFor: [
        'Immunotherapy is one of the most promising areas of medicine, and most major diseases involve the immune system. Patient groups like the Michael J. Fox Foundation and the Alzheimer’s Association back the measure.',
        'Federal cuts to biomedical research under the Trump administration leave a gap. Supporters argue California can keep top scientists and biotech jobs in the state.',
        'Taxpayers get something back: a 20% discount for California patients and 10% of discovery revenue until the bond is repaid. The previous stem-cell bonds also built a research industry in the state.',
        'Accountability is written in: annual public reports, independent audits, a 2% cap on state administration, and competitive grants for half the funds.',
      ],
      argumentsAgainst: [
        'Roughly $4.2 billion is effectively earmarked for one institute co-founded by the measure’s chief funder. UCLA confirmed that only that institute meets the criteria among UCLA-affiliated nonprofits. Opponents say no public money should be steered this way.',
        'The bond adds $500–600M a year in General Fund debt service for about 20 years, at a time of budget deficits and Medi-Cal cuts. Opponents argue research should be funded through the normal budget process, where priorities can change.',
        'It focuses on a single discipline, and FDA approval and commercial success are rare. The revenue payback could be small or take decades, as the LAO notes.',
        'Grant decisions would be made by a council of the same institutions that receive the grants, which raises conflict-of-interest questions.',
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
      ['PL', 'Yes', '◐', 'Progressive Left voters strongly support public science funding in response to federal research cuts, though steering half the money to a billionaire donor’s institute clashes with their skepticism of wealthy interests.'],
      ['EL', 'Yes', '◐', 'Establishment Liberals trust scientific institutions and the patient-advocacy groups behind this measure, but those who weigh fiscal discipline and good-government process may balk at a ballot-box earmark.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays respond to disease-cure research and follow the state Democratic Party’s endorsement.'],
      ['OL', 'Yes', '○', 'Outsider Left voters favor medical research and patient discounts, yet they are the group most likely to see the single-institute carve-out as insider dealing.'],
      ['SS', 'No', '○', 'Stressed Sideliners are wary of long-term state debt for distant research payoffs, though hope for cures could move them to Yes.'],
      ['AR', 'No', '◐', 'Ambivalent Right voters are open to medical research but resist 20 years of General Fund borrowing for a narrowly targeted program.'],
      ['PR', 'No', '●', 'Populist Right voters distrust arrangements that look like a wealthy insider writing public spending to benefit his own institution.'],
      ['CC', 'No', '●', 'Committed Conservatives oppose new state debt and government picking winners in research that private industry and federal agencies already fund.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives generally oppose added state borrowing, though disease research is less contentious for them than other spending.'],
    ]),
    counterArguments: [
      'PL (Yes ◐): But consider No if you believe public research money should be awarded competitively in full, not half pre-assigned to one donor-linked institute.',
      'CC (No ●): But consider Yes if you see a time-limited bond with royalty payback and patient discounts as a better deal than ongoing program spending.',
      'DM (Yes ●): But consider No if a $500–600M-a-year debt payment during budget deficits worries you more than this specific research focus.',
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
      'Today, California voters prove their identity when they register (with a driver’s license, state ID, or last four digits of a Social Security number). After that, they identify themselves with a signature: in-person voters sign the roster, and mail voters sign the envelope, which officials check against the signature on file. Prop 39 would write into the state Constitution a requirement to show government-issued ID to vote in person, and for mail ballots, to write the last four digits of a designated government ID number that must match the voter’s registration. It also requires officials to use “best efforts” to verify voters’ citizenship. About 13 of the 16 million Californians who voted in November 2024 voted by mail, so the mail-ballot rule would affect nearly everyone.',
      'The debate is about confidence versus access. Supporters say most states already require some ID, that California has none at the polls, and that a simple check would build trust in results that many voters doubt. Opponents say fraud by impersonation is extremely rare, and that an ID-number match adds a new way for eligible voters’ ballots to be rejected, for example after a name change, a typo, or a move. Because the measure is a constitutional amendment, it would override state laws, including the 2024 law (SB 1174) that blocked local voter-ID rules such as Huntington Beach’s. Many details are left for the Legislature to define, including which IDs count and how voters can fix a rejected ballot.',
    ],
    introParagraphs: [
      'Prop 39 was placed on the ballot by Assemblymember Carl DeMaio’s Reform California and is backed by the California Republican Party. Its largest funder is Illinois businessman Richard Uihlein, who has given $17M of the roughly $22M listed in the FPPC top-contributor list (updated Oct 6, 2026). Opposition committees, funded by the California Democratic Party, labor unions, Reed Hastings, Patty Quillin, Quinn Delaney, the ACLU, and others, list roughly $19M from top donors combined (net of a $2M transfer between No committees). In August, Sacramento judges upheld the Attorney General’s ballot title (“Prohibits citizens from voting unless they present government-issued identification”) over proponents’ objections. They also ordered supporters to revise ballot-pamphlet claims that the measure would make voting easier and save money, finding those claims false or misleading.',
      'Polling has moved toward No. PPIC’s September survey of likely voters found 43% Yes and 55% No (Democrats 19% Yes, Republicans 85%, independents 43%). Berkeley IGS reported 42% Yes and 51% No in August. A Berkeley IGS poll in April found majority support when the question was asked without political context.',
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
      question:
        'Prohibits citizens from voting unless they present government-issued identification. Initiative constitutional amendment. Invalidates mail ballots without the last four digits of a designated government-issued identification number on the envelope; prohibits in-person voting without presenting government-issued identification.',
      measureType: 'Initiative constitutional amendment',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'LAO: Costs of between tens of millions of dollars and low hundreds of millions of dollars each year to implement new voting requirements (under 0.25% of the General Fund). The amount depends on future decisions, such as the design of the free ID card and how many are requested. Some savings are possible from smaller voter rolls, but they likely would not exceed the costs.',
      supporters:
        'The Transparency Foundation; Latino American Political Assn; Howard Jarvis Taxpayers Assn; CA Women’s Leadership Assn',
      opponents: 'ACLU California Action; Common Cause; League of Women Voters of California',
      voterConnection: [
        'If you vote by mail, as most Californians do, you would need to pick a government ID in your registration and write the last four digits of that ID number on every ballot envelope. Officials would count the ballot only after the number matches.',
        'If you vote in person, you would show a government-issued ID. The state must give a free voter ID card to any eligible voter who asks.',
        'Voters most likely to hit snags include people who changed their name after marriage or divorce, recent movers, people without a driver’s license (many seniors, people with disabilities, and lower-income voters), and anyone who writes the digits wrong. How a rejected ballot can be fixed (“cured”) is not spelled out in the measure.',
        'If you doubt the accuracy of California’s elections, supporters say this adds a verifiable identity check and an audit of state and county compliance every two years.',
      ],
      mechanismBullets: [
        'Adds Section 3.1 to Article II of the state Constitution. It is self-executing, but the Legislature must pass implementing laws, including which IDs qualify, what counts as “best efforts” on citizenship, and how military and overseas voters are handled.',
        'In person: present government-issued identification (“documentation that allows conclusive verification of the voter’s identity”) each time you vote.',
        'By mail: provide the last four digits of a unique identifying number from the government ID you designated at registration. The type of ID is printed on your envelope and available by phone or online. Ballots without a match are not counted.',
        'Officials may count regular or provisional ballots only after verifying the voter’s identity and that the person has cast only one ballot.',
        'Citizenship: the Secretary of State and counties must use “best efforts” to verify citizenship attestations using government data, and must report each year what share of each county’s rolls has been verified.',
        'Free state voter ID card on request. Citizens may sue to enforce compliance, and the State Auditor audits the state and every county in odd-numbered years.',
        'Legal questions: it overrides conflicting state statutes, but not federal law. In Aug 2025 the Fifth Circuit upheld Texas’s similar mail-ballot ID-number rule under the Civil Rights Act’s “materiality” provision. California sits in the Ninth Circuit, so federal court challenges are likely and their outcome is uncertain.',
      ],
      argumentsFor: [
        'Showing ID is routine for boarding a plane, picking up a prescription, or opening a bank account. Most states require some form of voter ID, and California currently requires none at the polls.',
        'A number match is a more objective check than signature comparison, which relies on election workers’ judgment. Supporters say it deters impersonation and double voting and makes results easier to trust.',
        'It keeps universal vote-by-mail, asking only for four digits, and guarantees a free ID card so cost is not a barrier.',
        'Confidence matters on its own. Many voters doubt election integrity, and independent audits plus citizenship-verification reports give them a way to check.',
        'A federal appeals court (Fifth Circuit, 2025) has held that a similar Texas ID-number requirement is a legitimate, material check on voter identity.',
      ],
      argumentsAgainst: [
        'Impersonation and noncitizen voting are already crimes and are rare. California verifies identity at registration and checks every mail-ballot signature. Opponents call this “a solution in search of a problem.”',
        'A strict match can reject eligible voters’ ballots. In Texas’s first election under its ID-number rule (2022), thousands of mail ballots were initially flagged or rejected, mostly over missing or mismatched numbers.',
        'The burden falls unevenly on people who changed names, moved, lack a driver’s license, or have disabilities. The measure leaves cure procedures, accepted IDs, and citizenship-check methods to future legislation, so key protections are unknown.',
        'Costs could reach the low hundreds of millions of dollars a year. Writing ID digits on the outside of an envelope raises privacy concerns, and a judge found the campaign’s privacy and “easier voting” claims misleading.',
        'Putting the rule in the Constitution makes it hard to fix if problems arise. Changes would need another statewide vote.',
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
      ['PL', 'No', '●', 'Progressive Left voters prioritize ballot access and see ID-match rules as falling hardest on low-income, disabled, and minority voters.'],
      ['EL', 'No', '●', 'Establishment Liberals trust existing election administration and signature verification, and they weigh the rarity of documented fraud against the risk of rejecting valid ballots.'],
      ['DM', 'No', '◐', 'Democratic Mainstays follow the party and civil-rights groups against the measure, though some in this group find ID requirements reasonable in principle.'],
      ['OL', 'No', '◐', 'Outsider Left voters, many of them young renters who move often, would face the most address and ID mismatches, though their distrust of institutions is not limited to one party.'],
      ['SS', 'No', '○', 'Stressed Sideliners are the voters most likely to lack a current ID or to have moved recently, though the idea of showing ID sounds like common sense to many of them.'],
      ['AR', 'Yes', '●', 'Ambivalent Right voters see a free-ID, four-digit check as a modest, mainstream safeguard that most states already use.'],
      ['PR', 'Yes', '●', 'Populist Right voters place a high priority on election integrity and distrust California’s current mail-ballot system.'],
      ['CC', 'Yes', '●', 'Committed Conservatives support voter ID as a basic safeguard and as a way to verify citizenship on the rolls.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives strongly favor ID and citizenship verification as protections for legitimate elections.'],
    ]),
    counterArguments: [
      'DM (No ◐): But consider Yes if a free state ID card and a four-digit check seem like a reasonable price for broader confidence in results.',
      'AR (Yes ●): But consider No if you are uneasy that cure procedures, accepted IDs, and the citizenship-check method are left to the Legislature, and that a constitutional amendment is hard to fix if valid ballots are rejected.',
      'SS (No ○): But consider Yes if you already carry a driver’s license and want a simpler, visible identity check than signature matching.',
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
      'Prop 40 would impose a one-time tax of 5% of net worth on roughly 200 Californians worth $1 billion or more. Residency is judged as of January 1, 2026, and wealth is measured on December 31, 2026, with payment due in 2027 or spread over five years. Ninety percent of the money must go to health care, mainly to backfill federal Medi-Cal cuts, and 10% to education and food assistance. The LAO expects “tens of billions of dollars” over several years. The sponsor projects about $100 billion. Because the measure exempts the money from the state spending limit and the Prop 98 school-funding guarantee, the full amount can go to those purposes.',
      'Supporters see a rare chance to tax very large unrealized gains that the income tax never reaches, at a time of federal health-care cuts. Opponents, including Gov. Newsom and Democratic nominee Xavier Becerra, warn that billionaires will leave or restructure, permanently shrinking the income taxes they now pay. The LAO estimates a possible ongoing loss of less than $1 billion a year. Opponents also expect years of litigation over a residency date set before the vote. Prop 40 is also tied to Props 41 and 42. Both are billionaire-funded countermeasures, and if either gets more Yes votes than Prop 40, Prop 40 is nullified even if it passes.',
    ],
    introParagraphs: [
      'SEIU-United Healthcare Workers West placed Prop 40 on the ballot and has funded nearly all of the Yes campaign (about $32M from top donors, FPPC list updated Oct 6, 2026). The opposition is far larger. Building a Better California, the vehicle for Sergey Brin and other billionaires, has put $88.5M into the main No on 40 committee and $58.35M into Yes on 41, and Chris Larsen and Ripple Labs gave $10M to a second No committee. The California Democratic Party endorsed Prop 40 by a narrow 61.7% vote of its executive board, splitting with Gov. Newsom. Opponents also include the California Medical Association, the California Teachers Association, Planned Parenthood, and the California School Boards Association.',
      'Polls show a close race. PPIC (Sept 4–10) found 52% Yes and 46% No among likely voters, but also 51% Yes on Prop 41 and 54% Yes on Prop 42, the measures that would cancel it. PPIC’s Mark Baldassare told CalMatters that many voters don’t realize 41 and 42 are countermeasures. Berkeley IGS reported 48% Yes and 41% No in August. Before the January 1, 2026 residency date, Fortune and others reported that several billionaires, including Larry Page and Peter Thiel, moved entities or residency ties out of the state.',
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
      question:
        'Imposes one-time tax on certain taxpayers. Initiative constitutional amendment and statute. Imposes a 5% tax on certain taxpayers with assets over $1 billion; revenue primarily for health care; exempts revenue from constitutional school-funding and spending-limit requirements.',
      measureType: 'Initiative constitutional amendment and statute',
      voteThreshold: 'Simple majority (but see Props 41 and 42: if either receives more Yes votes, Prop 40 is nullified)',
      fiscalImpact:
        'LAO: Temporary revenue increase of tens of billions of dollars spread over several years from wealth tax on billionaires. Possible ongoing decrease of less than $1 billion per year in income tax revenue from billionaires (for example, if some leave California). Administration costs of tens of millions per year for several years, paid from the tax.',
      supporters: 'US Senator Bernie Sanders; SEIU United Healthcare Workers West',
      opponents:
        'California Primary Care Association; California School Boards Association; California Taxpayers Association',
      voterConnection: [
        'Unless your net worth is about $1 billion or more, you would not owe this tax, and the measure bars any exemptions or extensions beyond those it lists.',
        'If you or your family rely on Medi-Cal, a community clinic, or a rural hospital, this is where 90% of the money goes, with the stated aim of offsetting federal Medicaid cuts.',
        'Everyone shares the long-run risk: the income taxes billionaires pay today fund schools and services. The LAO estimates possible ongoing losses of under $1B a year if some leave or restructure.',
        'Your votes on Props 40, 41, and 42 interact. Voting Yes on 40 and also Yes on 41 or 42 helps the countermeasures beat it. For Prop 40 to take effect, it must get more Yes votes than both.',
      ],
      mechanismBullets: [
        'Who pays: individuals (a married couple counts as one) and certain trusts that were California residents on January 1, 2026 (the “tax obligation date”) with net worth of $1 billion or more. Net worth is measured as of December 31, 2026. Leaving California after January 1, 2026 does not avoid the tax.',
        'Rate: 5% of total net worth, phased in so that between $1.0B and $1.1B the rate drops by 0.1 point for each $2M below $1.1B (reaching zero at $1.0B).',
        'What counts: stocks, business interests, bonds, art, intellectual property, and other personal property worldwide, valued at fair market value with appraisal rules for private holdings. Pensions and retirement accounts are generally exempt, and real estate is generally excluded per the LAO. Up to $5M of miscellaneous assets can be excluded, and transfers to trusts in 2025–26 are pulled back into net worth.',
        'Paying: in full with the 2026 tax return (due 2027), or in five annual installments with a 7.5% nondeductible annual charge on the unpaid balance. Illiquid founders may use an “optional deferral account” that taxes later sales and distributions instead.',
        'Spending: revenue goes to a Billionaire Tax Reserve Fund outside the General Fund. After administration costs, 90% goes to health care (Medi-Cal and other coverage, provider payments) and 10% to K-14 education and food assistance (CalFresh, CalFood, school meals). The revenue is exempt from the Gann spending limit and the Prop 98 school guarantee.',
        'Legal defense: challenges go through a fast-track “validation” action in Sacramento Superior Court (filed within 60 days), then directly to the state Supreme Court, with a target ruling by Nov 1, 2027. Courts are told to adjust dates rather than strike the tax if needed. The Legislature may amend it by a two-thirds vote only to further its purposes.',
        'Conflict clause (Sec. 8): Prop 40 declares any same-ballot measure that taxes billionaire net worth or directs the use of such revenue to be in conflict, and Prop 40 prevails if it gets more Yes votes. Props 41 and 42 have their own conflict clauses aimed at taxes like Prop 40. See the Prop 41 entry.',
      ],
      argumentsFor: [
        'Billionaires’ wealth grows mostly through unrealized gains that are never taxed as income. The measure cites research finding that U.S. billionaires pay a smaller share of their economic income in taxes than typical households. A one-time 5% is less than such fortunes often gain in a single year.',
        'Federal Medicaid cuts threaten Medi-Cal coverage, clinics, maternity wards, and rural hospitals. This raises tens of billions to backfill them without taxing anyone else.',
        'It is designed to resist avoidance. The January 1, 2026 residency date means moving away after the measure was announced does not help, trusts and transfers are reached, and the installment and deferral options address liquidity concerns.',
        'The money is walled off: it goes to a special fund that cannot be borrowed by the General Fund, is mostly earmarked for health care, and is exempt from limits that would otherwise divert or cap it.',
      ],
      argumentsAgainst: [
        'It is self-defeating for the budget. Gov. Newsom, Democratic nominee Becerra, and the LAO all point to departures that reduce income-tax revenue every year, while the windfall is one-time. Several billionaires reportedly cut ties before January 1, 2026.',
        'Legal risk is high. Using a residency date set before the vote invites due-process challenges, and taxing worldwide assets raises commerce-clause questions. Litigation could delay or shrink collections for years. Analysts disagree sharply on the likely revenue (LAO: tens of billions; sponsor: about $100B).',
        'Valuing private companies, art, and founders’ stakes is hard and contestable, so the actual take is very uncertain, as the LAO says.',
        'Broad coalitions oppose it, including the California Medical Association, CTA, Planned Parenthood, and clinic and school-board groups. They say the measure was drafted without them, does not fix long-term health funding, and lacks spending safeguards. The official No argument also warns it opens a “loophole” for broader taxes, which supporters dispute.',
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
      ['PL', 'Yes', '●', 'Progressive Left voters see taxing extreme wealth to protect Medi-Cal as a core fairness priority.'],
      ['EL', 'Yes', '○', 'Establishment Liberals favor higher taxes on the very rich, but they give real weight to Gov. Newsom’s, the LAO’s, and health groups’ warnings about capital flight, litigation, and a one-time windfall.'],
      ['DM', 'Yes', '◐', 'Democratic Mainstays back the state party’s endorsement and health-care backfill, though the party’s top officials, Newsom and Becerra, are opposed.'],
      ['OL', 'Yes', '●', 'Outsider Left voters are the most anti-billionaire, economically populist group and want to tax concentrated wealth directly.'],
      ['SS', 'Yes', '◐', 'Stressed Sideliners respond to a tax that only billionaires pay and that funds health coverage they or their families may rely on.'],
      ['AR', 'No', '◐', 'Ambivalent Right voters are open to the wealthy paying more but doubt a one-time, retroactive wealth tax will survive in court or avoid driving out taxpayers.'],
      ['PR', 'No', '○', 'Populist Right voters share some anti-elite resentment of billionaires and may split from their party here, but they distrust Sacramento spending, especially on expanding Medi-Cal.'],
      ['CC', 'No', '●', 'Committed Conservatives oppose wealth taxes as confiscatory, economically damaging, and a precedent for taxing other assets.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives generally oppose new taxes and larger state government, though economic resentment of the very rich runs through parts of this group.'],
    ]),
    counterArguments: [
      'PR (No ○): But consider Yes if your priority is making the richest Californians pay more than working families, regardless of which party proposed it.',
      'EL (Yes ○): But consider No if you find the LAO’s warning about permanent income-tax losses and the legal risk of a pre-vote residency date more persuasive than a one-time windfall.',
      'AR (No ◐): But consider Yes if you think federal Medi-Cal cuts will close clinics and hospitals in your area and only roughly 200 people would pay.',
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
      'Prop 41 does two things. It requires the State Auditor to audit every program that would receive money from a new or increased special tax: once before a tax initiative reaches the ballot, including ways to cut the program’s costs by 10% a year, and again every four years after a tax passes. It also bans any state tax enacted or taking effect on or after January 1, 2026 from being exempted from the 1979 voter-approved state spending limit (the Gann limit), and it bars the state from collecting any such tax that is exempted.',
      'The second part is aimed at Prop 40, which explicitly exempts its revenue from the spending limit, and Prop 41 is funded by the same billionaire donors fighting Prop 40. Under Prop 41’s conflict clause, if it gets more Yes votes than Prop 40, Prop 40 is null and void in its entirety, even if Prop 40 also passes. Beyond this election, counting new special taxes under the Gann limit could make future voter-approved taxes trigger taxpayer rebates or squeeze other programs, and the audit requirement adds cost and time to every special-tax initiative.',
    ],
    introParagraphs: [
      'Prop 41 was placed on the ballot by opponents of the billionaire tax. Building a Better California, the committee funded by Sergey Brin and other billionaires, has given $58.35M to Yes on 41 (FPPC top-contributor list updated Oct 6, 2026). The same group gave $88.5M to No on 40, and CalMatters reported $131M raised for Props 41 and 42 combined. Backers listed on the ballot include CalCPAs, the CalAsian Chamber, and CalTax, and CalMatters also lists Reform California and Stewart Resnick. SEIU-UHW’s “Yes on 40 – No on 41 & 42” committee and the California Democratic Party lead the opposition.',
      'PPIC’s September survey found 51% of likely voters say Yes and 44% No (Democrats 38% Yes, Republicans 74%, independents 51%). That means Prop 41 is polling nearly even with Prop 40 (52% Yes), so the vote-count showdown described below is a real possibility.',
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
      question:
        'Prohibits new state taxes that exclude revenues from state spending limit; requires audits for new state special taxes. Initiative constitutional amendment. Nullifies state taxes enacted after January 1, 2026 that exempt their revenue from the voter-approved state spending limit; requires pre-election and recurring audits of programs funded by new special taxes.',
      measureType: 'Initiative constitutional amendment',
      voteThreshold: 'Simple majority (conflict clause: if it outpolls Prop 40, Prop 40 is void)',
      fiscalImpact:
        'LAO: Net fiscal effect unknown; depends on future decisions by voters, the Legislature, and other policymakers. State Auditor costs likely in the low millions of dollars per year (mostly paid from new special-tax revenue; the General Fund pays for audits of taxes that fail or never qualify), plus a few hundred thousand dollars per qualified initiative to print audit summaries in the voter guide. Savings are possible if audit recommendations are implemented.',
      supporters:
        'CA Society of Certified Public Accountants (CalCPAs); CalAsian Chamber of Commerce; California Taxpayers Association (CalTax)',
      opponents: 'US Senator Bernie Sanders; SEIU United Healthcare Workers West',
      voterConnection: [
        'If you support Prop 40, a Yes on 41 works against it. If Prop 41 gets more Yes votes than Prop 40, the billionaire tax is wiped out entirely.',
        'If you oppose Prop 40, a Yes on 41 is a second way to stop it, even if Prop 40 passes, and it also puts audits and spending-limit rules in place for future taxes.',
        'For future ballots: any special-tax initiative would come with an independent State Auditor review, printed in your voter guide, before you vote on it.',
        'Counting new special taxes under the 1979 spending limit makes it more likely that revenue above the limit triggers taxpayer rebates and school payments, and less likely that new tax money simply adds to the budget.',
      ],
      mechanismBullets: [
        'Adds Article XXIV (“Protecting Taxpayer Dollars”) to the state Constitution.',
        'Pre-election audit: when a special-tax initiative reaches 25% of required signatures, the State Auditor begins a financial and performance audit of each program that would get the money. The audit covers cost-efficiency, outcomes, fraud and waste, comparison with private-sector analogs, and ways to save at least 10% a year. Its executive summary appears in the state voter guide after the LAO analysis.',
        'Ongoing audits: every program funded by a special tax enacted by the Legislature or voters on or after January 1, 2026 is audited every four years, paid from that tax’s revenue.',
        'Spending-limit rule: no state tax enacted or taking effect on or after January 1, 2026 may be exempted from the Gann limit (Article XIII B), whether by depositing it in a fund outside the limit or by raising the limit by statute. The state “shall not impose, collect, or enforce” any such tax.',
        'Applies to initiatives on the same ballot (Nov 2026). Conflict clause: any same-ballot initiative that contains a tax exempt from the spending limit, as Prop 40 does, or that sets different special-tax audit rules is deemed in conflict. If Prop 41 gets more Yes votes, “all the provisions of the other measure shall be null and void.”',
        'If Prop 40 gets more Yes votes than Prop 41 and both pass: Prop 41’s clause does not void Prop 40, and Prop 40’s own conflict clause names only measures that tax billionaire net worth or direct that revenue, so it may not reach Prop 41. The state Constitution’s general rule (the measure with more Yes votes prevails where provisions conflict) would apply, and news reports treat that as Prop 40 taking effect. Expect court review of how Prop 41’s spending-limit ban applies (Prop 42 sets up a parallel showdown).',
        'Fallback: if Prop 41 is superseded by a conflicting measure that is later held invalid, Prop 41 takes full effect. If the Governor and Attorney General refuse to defend it, independent counsel is funded from the General Fund.',
      ],
      argumentsFor: [
        'Taxpayers deserve proof before paying more. Billions have gone to programs like homelessness with too little to show for it, and an independent auditor’s review gives voters facts before they approve a new tax.',
        'It restores the 1979 voter-approved spending limit, which supporters say special interests have repeatedly written their taxes around, and it makes it more likely that excess revenue is refunded.',
        'Audits are paid from the new tax revenue, and the LAO says implementing the recommendations could produce savings.',
        'For voters who oppose Prop 40, it provides a backstop: the wealth tax is void if 41 outpolls it, regardless of whether 40 clears 50%.',
      ],
      argumentsAgainst: [
        'It is a Trojan horse. Opponents say the measure is less about audits than about killing the billionaire tax, using a voter-friendly “audits” label funded by the very people Prop 40 would tax.',
        'Its effects go far beyond Prop 40. It constrains every future special tax, including taxes voters might pass for wildfire, transit, or health care, by counting them under a 1979 cap that could force rebates or cuts elsewhere.',
        'The pre-election audit starts at 25% of signatures, before a measure qualifies, and the General Fund pays for audits of measures that never make the ballot or that lose. Critics say this burdens the citizen-initiative process and favors well-funded opponents.',
        'It reaches back to taxes enacted since January 1, 2026, and it could set off litigation over how it interacts with other measures on the same ballot.',
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
      ['PL', 'No', '●', 'Progressive Left voters see Prop 41 as a billionaire-funded device to cancel the wealth tax and to cap future public revenue.'],
      ['EL', 'No', '◐', 'Establishment Liberals like evidence-based audits but object to locking every future special tax under a 1979 spending cap, even if some of them also oppose Prop 40.'],
      ['DM', 'No', '◐', 'Democratic Mainstays follow the state party and health-care unions in opposing a measure designed to nullify the billionaire tax.'],
      ['OL', 'No', '●', 'Outsider Left voters reject a measure bankrolled by the very billionaires it would shield from Prop 40.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners distrust how Sacramento spends tax money, so “audit new taxes first” appeals to them, though few may realize that the measure cancels Prop 40.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters value fiscal accountability and spending restraint and see audits as a reasonable condition for new taxes.'],
      ['PR', 'Yes', '◐', 'Populist Right voters want waste exposed before new taxes pass and favor the spending cap, even if some of them would not mind billionaires paying more.'],
      ['CC', 'Yes', '●', 'Committed Conservatives strongly support the Gann spending limit, taxpayer rebates, and audits that make new taxes harder to pass.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives back limits on state spending and new taxes, consistent with conservative taxpayer groups.'],
    ]),
    counterArguments: [
      'PR (Yes ◐): But consider No if you want the billionaire tax to survive. A Yes here that outpolls Prop 40 erases it completely.',
      'EL (No ◐): But consider Yes if you oppose Prop 40 and also value independent audits of new special taxes before they reach voters.',
      'SS (Yes ○): But consider No if you would rather judge each future tax on its merits than count it under a 1979 cap that could trigger cuts elsewhere.',
    ],
  },
];
