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
      'The biggest hurdle to a first home is often the down payment. Prop 37 would have the state lend most of it to middle-income buyers of new homes, financed by private investors rather than taxes. Critics question a state agency becoming a major mortgage lender and say it adds debt instead of lowering prices.',
    ],
    introParagraphs: [
      'Prop 37 is a citizen initiative backed by the California Association of Realtors and carpenters’ unions. Per the FPPC top-contributor list (updated Oct 6, 2026), the Realtors’ “Homeownership for Families” committee gave $14.85M, Building a Better California (the billionaire-funded group fighting Prop 40) $6M, and carpenters’ councils about $1.7M. No opposition committee made the list, and no argument against was filed.',
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
      'Prop 38 would add two decades of General Fund debt payments to fund immune-system research on major diseases. The fight is over who gets the money: half goes to one institute whose criteria, per CalMatters and UCLA, fit only the chief funder’s own. Supporters say the criteria simply require a proven, accountable institution.',
    ],
    introParagraphs: [
      'Prop 38 is a citizen initiative from philanthropist and medical inventor Gary Michelson, co-founder of the California Institute for Immunology and Immunotherapy. Per the FPPC top-contributor list (updated Oct 6, 2026), Yes on 38 has $25M from Michelson, $21.2M from his Michelson Center for Public Policy, and $5M from institute co-founder Meyer Luskin. No opposing committee appears on the list.',
      'Supporters also include the American Association of Immunologists and the California Democratic Party. Opponents include Stanford scholar and former NIH associate director Robert M. Kaplan, the League of Women Voters, and the Orange County Register editorial board.',
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
      'Today, California voters prove identity at registration, then by signature. Prop 39 would write into the Constitution an ID requirement at the polls and an ID-number match on every mail ballot. The debate is confidence versus access: a visible check that builds trust, or a new way for eligible voters’ ballots to be rejected.',
    ],
    introParagraphs: [
      'Prop 39 was placed on the ballot by Assemblymember Carl DeMaio’s Reform California and is backed by the California Republican Party. Illinois businessman Richard Uihlein has given $17M of the roughly $22M on the FPPC top-contributor list (updated Oct 6, 2026). No committees, funded by the California Democratic Party, unions, Reed Hastings, Patty Quillin, Quinn Delaney, the ACLU, and others, list about $19M (net of a $2M transfer between them).',
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
      'Prop 40 would tax roughly 200 California billionaires once, mostly to backfill federal Medi-Cal cuts. Supporters see a rare chance to tax huge unrealized gains. Opponents, including Gov. Newsom and Democratic nominee Xavier Becerra, warn billionaires will leave, permanently shrinking income taxes, and expect years of litigation over a residency date set before the vote.',
    ],
    introParagraphs: [
      'SEIU-United Healthcare Workers West placed Prop 40 on the ballot and funds nearly all of the Yes side (about $32M; FPPC list updated Oct 6, 2026). The No side is far larger: Building a Better California, the vehicle for Sergey Brin and other billionaires, has put $88.5M into No on 40 and $58.35M into Yes on 41, and Chris Larsen and Ripple Labs gave $10M to a second No committee.',
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
        'Unless your net worth is about $1 billion or more, you would not owe this tax.',
        'If you or your family rely on Medi-Cal, a community clinic, or a rural hospital, that is where most of the money goes.',
        'Your votes on Props 40, 41, and 42 interact. Yes on 40 plus Yes on 41 or 42 helps the countermeasures; Prop 40 must get more Yes votes than both to take effect.',
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
      'Prop 41 would count new state taxes under the 1979 Gann spending limit and require State Auditor reviews of programs funded by new special taxes. It is aimed at Prop 40, which exempts its revenue from that limit: if 41 gets more Yes votes, Prop 40 is void even if it passes. It would also constrain future voter-approved taxes.',
    ],
    introParagraphs: [
      'Prop 41 was placed on the ballot by opponents of the billionaire tax. Building a Better California, funded by Sergey Brin and other billionaires, has given $58.35M to Yes on 41 (FPPC list updated Oct 6, 2026), and CalMatters reported $131M raised for Props 41 and 42 combined. CalMatters also lists Reform California and Stewart Resnick as backers. SEIU-UHW’s “Yes on 40 – No on 41 & 42” committee and the California Democratic Party lead the opposition.',
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
