import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * State propositions 1–5 (the five legislative/early measures) — Nov 3, 2026 general election.
 * Ground truth for ballot labels: docs/sample-ballot-92126.md. Mechanics/fiscal: LAO analyses (July 2026).
 * Polling: PPIC Statewide Survey, Sept 4–10, 2026 (1,103 likely voters, ±3.8 pts).
 * Money: Secretary of State measure-contribution pages (data as of Aug 2, 2026) plus dated news reports.
 */
export const RACES_PROPS_A: Race[] = [
  // ───────────────────────────── Prop 1 ─────────────────────────────
  {
    id: 'prop-1',
    categoryId: 'state-props',
    title: 'Prop 1 — Housing affordability bond ($11.25B)',
    tldrLabel: 'Prop 1 — Housing bond',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'California builds roughly 100,000 homes in a typical year, almost all with private money; the state mostly helps at the margins by lending or granting money to affordable projects that must stay rent-restricted for decades. Prop 1, which supporters call the largest housing bond in state history, would provide $10 billion for state housing programs repaid from the General Fund, plus $1.25 billion in veterans’ home loans that veterans repay through their mortgages.',
      'The trade-off is familiar: borrowing now to subsidize tens of thousands of affordable rentals and first-time purchases, versus adding roughly $500–600 million a year in debt service for about 25 years at a time when the state budget is tight and building costs remain very high. No one filed an official argument against it, but a No vote is a vote to keep that money unborrowed.',
    ],
    introParagraphs: [
      'The Legislature placed Prop 1 on the ballot through SB 417 (Limón), the Veterans and Affordable Housing Bond Act of 2026 (Chapter 16, Statutes of 2026), signed by Gov. Newsom in late June 2026. As of the Secretary of State’s Aug 2, 2026 tally, two Yes committees had reported about $2.07 million in contributions (top funders listed by the campaign include carpenters’ unions and Airbnb); no No committee had registered.',
      'In PPIC’s September 4–10, 2026 survey, 55% of likely voters said they would vote yes and 43% no after reading the ballot label — 75% of Democrats, 56% of independents, and 19% of Republicans in favor, with renters (72%) far more supportive than homeowners (49%).',
    ],
    polling: [
      {
        resultDisplay: 'Yes 55%, No 43%',
        pollsterCredit: 'PPIC Statewide Survey (1,103 likely voters, ±3.8 pts)',
        fieldDatesLabel: 'Sep 4–10, 2026',
        sourceUrl: 'https://www.ppic.org/pdf/ppic-statewide-survey-californians-and-their-government-september-2026.pdf',
      },
    ],
    measure: {
      question:
        'Authorizes bonds for housing affordability programs. Legislative statute. Authorizes $11.25 billion in general obligation bonds for multifamily rental housing, veterans’ mortgages, supportive housing, preservation of existing affordable housing, and downpayment assistance.',
      measureType: 'Legislative statute (general obligation bond)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Increased state cost of $500 million to $600 million annually for about 25 years to repay the housing bond (about 0.25% of the General Fund budget). The $1.25 billion veterans portion is repaid by veterans’ loan payments, which LAO notes have always covered the bonds at no direct state cost.',
      supporters:
        'US Vets; California Federation of Teachers; Self-Help for the Elderly; Habitat for Humanity California; California Alliance of Child and Family Services',
      opponents: 'None submitted',
      voterConnection: [
        'No new tax is attached: repayment comes out of the existing General Fund, the same pot that pays for schools, Medi-Cal, and prisons — so the cost shows up as roughly $500–600 million a year that cannot be spent on something else.',
        'Direct beneficiaries are lower-income renters who win a spot in a subsidized building, low- and moderate-income first-time buyers who get downpayment help, farmworkers, students in new UC/CSU housing, and about 2,100 veterans getting CalVet loans (LAO estimates).',
        'If you already own a home or rent at market rate, you would not get a check; the indirect argument is that more subsidized supply eases pressure on rents and homelessness in your community.',
        'Interest makes the projects cost about 15% more in inflation-adjusted terms than paying cash up front (LAO) — the price of building now rather than waiting for spare budget money.',
      ],
      mechanismBullets: [
        '$10 billion General Fund–backed bond: $7.2B for multifamily rental housing (including supportive housing), $1.1B for homeownership help, $500M for housing-related infrastructure, $450M for farmworker housing, $350M for UC/CSU student housing (split evenly), $200M in tribal housing grants, and $200M for local lower-cost housing pilots (LAO).',
        '$1.25 billion for the CalVet home loan program, repaid by participating veterans’ mortgage payments.',
        'Rental projects funded through state programs generally must reserve units for low-income households for 55 years.',
        'LAO estimates the money would help subsidize up to 40,000 rental units, about 2,500 farmworker units, about 1,200 student beds, and homeownership for up to 40,000 households.',
        'Repayment: roughly $500–600 million per year for about 25 years; funds would be awarded over a number of years by state housing agencies, with a share of bond money covering administration.',
        'Last comparable bonds: $2 billion in 2024 (Prop 1, mental-health housing) and $1 billion for veterans’ loans in 2018.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Supporters say many affordable projects are approved and “shovel-ready” but stalled by a financing gap; state gap money is often what lets a project close its funding and start construction.',
        'It spreads help across several groups at once — homeless and at-risk people via supportive housing, working renters, first-time buyers, farmworkers, students, tribes, and veterans.',
        'No new tax is required, and the veterans’ loan portion has historically cost the state nothing because borrowers repay it.',
        'Bonds are the standard way California funds long-lived assets; buildings that last 55+ years are a reasonable thing to finance over 25.',
      ],
      argumentsAgainst: [
        'It adds about $500–600 million a year in debt service for a quarter-century while the state is already juggling deficits; that money comes out of future budgets for every other program.',
        'Critics question borrowing more for housing without first addressing why it is so expensive to build in California — permitting, fees, and construction costs that make each subsidized unit costly.',
        'Some Republican legislators argued the bill leads with veterans to win support while most of the money goes to other programs (the veterans portion is about 11% of the total).',
        'Even LAO’s upper estimate of 40,000 rental units is small relative to California’s shortfall, so the bond is unlikely to move market rents much on its own.',
      ],
      readingLinks: [
        {
          label: 'LAO — Analysis of Proposition 1 (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop1-110326.pdf',
          summary: 'Program-by-program dollar amounts, repayment cost, and estimated units.',
        },
        {
          label: 'Secretary of State — Official Voter Guide: Prop 1',
          url: 'https://voterguide.sos.ca.gov/propositions/1/',
          summary: 'Title and summary, LAO analysis, argument in favor (no argument against was submitted).',
        },
        {
          label: 'CalMatters — Prop 1 voter guide',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-1-housing-bond/',
        },
        {
          label: 'KPBS / CalMatters — Proposition 1: Borrow $11.25 billion for housing (Oct 2, 2026)',
          url: 'https://www.kpbs.org/news/politics/2026/10/02/proposition-1-borrow-11-25-billion-for-housing',
        },
        {
          label: 'Secretary of State — Prop 1 campaign contribution totals',
          url: 'https://www.sos.ca.gov/campaign-lobbying/helpful-resources/measure-contributions/2026-ballot-measure-contribution-totals/proposition-1-sb-417-limon-veterans-and-affordable-housing-bond-act-2026-ch-16-2026',
        },
        {
          label: 'Yes on Prop 1 (campaign site)',
          url: 'https://yesonprop1ca.com',
          summary: 'Paid for by Yes on Prop 1 Californians for Homes, Jobs and Affordability 2026. No formal No campaign has registered.',
        },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters want government to spend directly on housing and homelessness, and a large subsidized-housing bond with no new tax is squarely in that lane.'],
      ['EL', 'Yes', '●', 'Establishment Liberals favor institution-led, bond-financed investment and tend to accept LAO’s modest 0.25%-of-budget debt cost for a long-lived asset.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays prioritize affordability and help for veterans and seniors, and this measure is backed by the governor and party with no organized opposition.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters want more housing money than this, and some distrust per-unit costs and developer middlemen, but a half-measure still beats no new subsidized homes.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners lean toward government help on cost of living and many rent, though their low trust in Sacramento makes this a soft lean rather than a firm commitment.'],
      ['AR', 'No', '◐', 'Ambivalent Right voters prefer market supply over subsidies and are wary of 25 years of new General Fund debt, even if they see the housing crisis as real.'],
      ['PR', 'No', '◐', 'Populist Right voters distrust state spending on homelessness programs and echo GOP critics who say the bond uses veterans as cover for other priorities.'],
      ['CC', 'No', '●', 'Committed Conservatives oppose adding long-term state debt for subsidized housing and would rather cut regulation and fees that drive up building costs.'],
      ['FF', 'No', '●', 'Faith and Flag Conservatives favor smaller government and see more state borrowing as the wrong answer, even with the veterans’ loan component they support in principle.'],
    ]),
    counterArguments: [
      'EL (Yes ●): But consider No if you think the state should finish spending prior housing bonds and fix construction costs before borrowing $10 billion more.',
      'AR (No ◐): But consider Yes if your priority is the CalVet loans and homeownership help, which are a meaningful slice of the bond and the veterans portion costs taxpayers nothing.',
      'SS (Yes ○): But consider No if you would rather that $500–600 million a year stay available for services you use now.',
    ],
  },

  // ───────────────────────────── Prop 2 ─────────────────────────────
  {
    id: 'prop-2',
    categoryId: 'state-props',
    title: 'Prop 2 — Bigger Rainy Day Fund (reserve cap 10% → 20%)',
    tldrLabel: 'Prop 2 — Rainy Day Fund',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'California’s budget rides on income taxes paid largely by high earners whose income tracks the stock market, so revenue can swing by tens of billions of dollars in a year. The 2014 Rainy Day Fund stops requiring deposits once it reaches 10% of General Fund taxes; Prop 2 doubles that ceiling to 20%, requires bigger deposits in boom years, and extends extra debt-paydown payments through 2040.',
      'The fight is less about saving than about the state spending limit (the 1979 “Gann limit”). Under Prop 2, money put into reserves would no longer count against the limit until it is spent — supporters call that a fix for a rule that punishes saving; opponents say it is a loophole that makes required taxpayer rebates less likely and lets the state hold onto more revenue.',
    ],
    introParagraphs: [
      'The Legislature placed Prop 2 on the ballot as ACA 20 (Gabriel), branded the “Save for California’s Future Act” and announced by Gov. Newsom and legislative leaders on June 23, 2026 (Resolution Chapter 130, Statutes of 2026). As of the Secretary of State’s Aug 2, 2026 tally, no Yes or No committee had registered; the official ballot arguments pit firefighters, the LA Chamber, and Assembly Budget Chair Jesse Gabriel against Republican legislators and Reform California’s Carl DeMaio.',
      'PPIC’s September 4–10, 2026 survey found 60% of likely voters would vote yes and 39% no — 82% of Democrats, 60% of independents, and 22% of Republicans in favor.',
    ],
    polling: [
      {
        resultDisplay: 'Yes 60%, No 39%',
        pollsterCredit: 'PPIC Statewide Survey (1,103 likely voters, ±3.8 pts)',
        fieldDatesLabel: 'Sep 4–10, 2026',
        sourceUrl: 'https://www.ppic.org/pdf/ppic-statewide-survey-californians-and-their-government-september-2026.pdf',
      },
    ],
    measure: {
      question:
        'Increases state’s Rainy Day Fund. Legislative constitutional amendment. Increases the Rainy Day Fund approved by voters in 2014 to provide funding for education, health care, public safety, and other services during economic downturns.',
      measureType: 'Legislative constitutional amendment',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'State budget reserves would be higher. LAO adds that the state might also make more debt payments because extra paydowns would be required through 2040 instead of 2030.',
      supporters:
        'California Professional Firefighters; Los Angeles Area Chamber of Commerce; Gavin Newsom; Xavier Becerra; Assemblymember Jesse Gabriel',
      opponents: 'None submitted (on the ballot label; the voter guide does carry an argument against signed by Asm. David Tangipa, Sen. Steven Choi, and Carl DeMaio)',
      voterConnection: [
        'Nobody pays a new tax and nobody gets a new program; the measure changes how much of existing revenue is set aside in good years versus spent right away.',
        'If you rely on Medi-Cal, public schools, or other state services, a larger cushion makes deep mid-recession cuts less likely — that is the core pitch.',
        'If you care about the Gann limit’s taxpayer-rebate trigger, this is the part that affects you: money parked in reserves would not count toward the limit until withdrawn, so a rebate is less likely to be forced in a boom year.',
        'Money set aside is money not spent this year — in some years that could mean roughly $1 billion or more unavailable for current needs (California Budget & Policy Center estimate).',
      ],
      mechanismBullets: [
        'Raises the Rainy Day Fund (Budget Stabilization Account) cap from 10% to 20% of General Fund taxes; deposits keep going in until the higher cap is reached.',
        'Requires larger deposits in years when capital-gains revenue is unusually high (stock-market booms).',
        'Extends the constitutionally required extra debt payments from 2030 to 2040, and widens what they can pay for: school/community college obligations, repaying internal borrowing, and certain federal loans (including the state’s roughly $20 billion unemployment-insurance debt).',
        'Rainy Day Fund deposits would not count toward the state appropriations (Gann) limit when deposited; they count when withdrawn.',
        'Deposits into a separate revenue-surge account would get the same treatment, capped at 10% of General Fund taxes in any year.',
        'Background: the state currently holds about $20 billion in reserves usable for any program, and can suspend deposits or withdraw in a declared budget emergency (LAO).',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'California’s revenue routinely falls by tens of billions in downturns; LAO has long urged bigger reserves, and doubling the cap lets the state save more in boom years instead of locking in spending it cannot sustain.',
        'Bigger reserves mean fewer emergency cuts to schools, health care, and public safety, and less need for tax hikes or borrowing during recessions.',
        'Under current rules, saving can push the state over the Gann limit and force spending or rebates; supporters say counting money when it is spent, not when saved, removes a perverse incentive against saving.',
        'Extending extra debt payments to 2040 and allowing them to pay off the federal UI loan reduces long-term liabilities.',
      ],
      argumentsAgainst: [
        'Opponents argue excluding deposits from the Gann limit weakens a 1979 voter-approved taxpayer protection and makes required rebates less likely — effectively letting Sacramento keep more revenue.',
        'The No argument notes lawmakers suspended more than $5 billion in required reserve deposits soon after introducing the measure, and asks why voters should trust a bigger fund lawmakers can tap in a declared emergency.',
        'From the left, the California Budget & Policy Center flags that larger set-asides take money away from urgent current needs, and that using funds for UI loan principal shifts a business cost onto the state.',
        'It dedicates no new money to any program; the ballot label’s promise of funding “education, health care, public safety” describes what reserves might later cover, not a guarantee.',
      ],
      readingLinks: [
        {
          label: 'LAO — Analysis of Proposition 2 (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop2-110326.pdf',
          summary: 'How the reserve, debt-payment, and spending-limit rules change.',
        },
        {
          label: 'Secretary of State — Official Voter Guide: Prop 2',
          url: 'https://voterguide.sos.ca.gov/propositions/2/',
        },
        {
          label: 'Secretary of State — Prop 2 arguments and rebuttals',
          url: 'https://voterguide.sos.ca.gov/propositions/2/arguments-rebuttals.htm',
          summary: 'Yes: firefighters, LA Chamber, Asm. Gabriel. No: Asm. Tangipa, Sen. Choi, Carl DeMaio.',
        },
        {
          label: 'CalMatters — Prop 2 voter guide',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-2-rainy-day-fund/',
        },
        {
          label: 'KPBS / CalMatters — Proposition 2: Raise limit on rainy day fund deposits (Oct 2026)',
          url: 'https://www.kpbs.org/news/politics/2026/10/02/proposition-2-raise-limit-on-rainy-day-fund-deposits',
        },
        {
          label: 'California Budget & Policy Center — Should voters approve Prop 2? (Aug 2026)',
          url: 'https://calbudgetcenter.org/resources/should-voters-approve-proposition-2-how-californias-rainy-day-fund-would-be-updated/',
          summary: 'Progressive-leaning budget analysis of trade-offs (reserve set-asides vs. current needs, Gann limit relief).',
        },
        {
          label: 'Governor’s office — Save for California’s Future Act announcement (Jun 23, 2026)',
          url: 'https://www.gov.ca.gov/2026/06/23/california-leaders-announce-save-for-californias-future-act-to-strengthen-rainy-day-fund-fiscal-responsibility-to-protect-future-generations/',
        },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters value protecting safety-net programs from recession cuts, though some share the Budget Center’s worry that bigger set-asides squeeze today’s needs.'],
      ['EL', 'Yes', '●', 'Establishment Liberals trust LAO-style fiscal prudence and see larger reserves plus Gann-limit relief as responsible budgeting.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays want schools and health care shielded from boom-and-bust cuts, and the measure carries the governor’s and Becerra’s endorsement.'],
      ['OL', 'Yes', '○', 'Outsider Left voters like protecting services but are less moved by reserve mechanics and may prefer spending surplus revenue now.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners respond to the household logic of saving for hard times, though this technical measure is low-salience for them.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters value saving and paying down debt, which weighs slightly more for them than the Gann-limit objection from GOP legislators.'],
      ['PR', 'No', '◐', 'Populist Right voters distrust Sacramento and side with the “slush fund” argument that the measure weakens taxpayer rebates.'],
      ['CC', 'No', '◐', 'Committed Conservatives normally like reserves but object to exempting deposits from the Gann spending limit, a long-standing conservative taxpayer protection.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives follow Republican legislators’ opposition and want the 1979 spending limit kept fully intact.'],
    ]),
    counterArguments: [
      'CC (No ◐): But consider Yes if you believe a bigger forced-savings rule and extra debt paydown restrain spending more than the Gann change loosens it.',
      'PL (Yes ◐): But consider No if you think locking up to 20% of revenue in reserves will be used to justify cuts or delay programs you consider urgent now.',
      'AR (Yes ○): But consider No if preserving automatic taxpayer rebates under the Gann limit matters more to you than a bigger reserve.',
    ],
  },

  // ───────────────────────────── Prop 3 ─────────────────────────────
  {
    id: 'prop-3',
    categoryId: 'state-props',
    title: 'Prop 3 — Make high-income tax rates permanent (schools, health care)',
    tldrLabel: 'Prop 3 — High-income tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Since 2012, Californians in roughly the top 2% of incomes have paid extra state income tax brackets (10.3%–12.3% instead of topping out at 9.3%), first approved as temporary by Prop 30 and extended by Prop 55 in 2016. They are scheduled to expire in 2031. Prop 3 would make them permanent, preserving $5 billion to $15 billion a year in revenue, depending heavily on the stock market.',
      'The question is whether the state locks in this revenue for schools and health care or lets the rates lapse, which would amount to a tax cut for high earners and a budget hole roughly the size of several percent of K–12 funding. Top earners already pay about half of all state income tax, which makes the revenue large but also volatile.',
    ],
    introParagraphs: [
      'Prop 3 is a citizen initiative sponsored by the California Teachers Association, which EdSource reported in late September 2026 had committed about $33 million to the Yes campaign. The California Taxpayers Association formed a “No on Proposition 3” committee (it reported $0 as of the Secretary of State’s Aug 2, 2026 tally). It shares the ballot with Prop 40, a separate one-time 5% tax on billionaires.',
      'PPIC’s September 4–10, 2026 survey found 58% of likely voters would vote yes and 40% no; support was weaker among white voters (48%), voters 55 and older (46%), and Central Valley residents (48%).',
    ],
    polling: [
      {
        resultDisplay: 'Yes 58%, No 40%',
        pollsterCredit: 'PPIC Statewide Survey (1,103 likely voters, ±3.8 pts)',
        fieldDatesLabel: 'Sep 4–10, 2026',
        sourceUrl: 'https://www.ppic.org/pdf/ppic-statewide-survey-californians-and-their-government-september-2026.pdf',
      },
    ],
    measure: {
      question:
        'Provides permanent funding for schools and health care by extending existing tax on high incomes. Initiative constitutional amendment. Makes permanent existing voter-approved tax rates for individuals earning over $371,000 (adjusted for inflation); allocates revenue to public education.',
      measureType: 'Initiative constitutional amendment',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Maintains $5 billion to $15 billion of annual state income tax revenue by making a temporary tax increase on high-income earners permanent instead of letting it expire in 2031.',
      supporters:
        'California Teachers Association; California School Nurses Organization; California State PTA; Planned Parenthood Affiliates of California',
      opponents:
        'California Taxpayers Association; Family Business Association of California; California Hispanic Chambers of Commerce',
      voterConnection: [
        'You pay this only if your taxable income is above about $371,000 (single), $505,000 (head of household), or $742,000 (joint) at 2025 levels — and only on the income above those lines. Most voters will not see any change in their own tax bill either way.',
        'If you have kids in public school or a community college, or rely on Medi-Cal, this is the revenue at stake: LAO says roughly 40% goes to schools and community colleges, with the rest supporting other programs and reserves.',
        'A No vote does not cut anyone’s taxes until 2031; it lets the higher brackets expire on schedule.',
        'Because much of this revenue comes from capital gains, it can swing by $10 billion between good and bad years, which affects how predictable school and health budgets are.',
      ],
      mechanismBullets: [
        'Removes the 2031 expiration on the three extra top brackets created by Prop 30 (2012) and extended by Prop 55 (2016): 10.3%, 11.3%, and 12.3%. If Prop 3 fails, the top regular rate reverts to 9.3% (the separate 1% mental-health surcharge on income over $1 million is not affected).',
        'Thresholds (2025 levels, indexed annually for inflation): about $371,000 single, $505,000 head of household, $742,000 joint.',
        'The education share is split 89% to K–12 schools and 11% to community colleges; local boards decide how to spend it, and it cannot be used for administrative costs (Attorney General’s summary).',
        'Remaining revenue boosts General Fund money for health care, budget reserves, and other programs.',
        'LAO estimates $5 billion in a weak year to $15 billion in a strong year, with most years in between.',
        'As a constitutional amendment, it could be changed later only by another statewide vote.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'It is not a new tax: the same top-2% rates have been in place since 2012, and letting them lapse would hand millionaires a tax cut while schools, Medi-Cal, and other services absorb a $5–15 billion hole.',
        'CTA warns failure would mean teacher layoffs and program cuts; supporters stress that school dollars go to classrooms, are audited, and cannot be redirected by the Legislature.',
        'Settling the question permanently ends the cycle of “temporary” extensions every few years and gives schools more predictable planning.',
        'It asks the most from those most able to pay at a time of federal cuts to health and safety-net programs.',
      ],
      argumentsAgainst: [
        'Voters were told in 2012 and again in 2016 that the tax was temporary; making it permanent breaks that promise and would be, in opponents’ words, the largest permanent income-tax increase in state history relative to current law after 2030.',
        'California already has the highest top income-tax rate in the nation; opponents argue a permanent rate encourages high earners and business owners to leave, taking revenue and jobs with them.',
        'Tying permanent spending commitments to the state’s most volatile revenue source makes boom-and-bust budgeting worse (argued in a CalMatters commentary, opinion).',
        'Opponents argue the state’s problem is spending and waste, not revenue, and that the 2031 sunset forces a useful review that a permanent constitutional amendment eliminates.',
        'Waiting is an option: the rates do not expire until 2031, so voters could revisit a narrower or different extension later.',
      ],
      readingLinks: [
        {
          label: 'LAO — Analysis of Proposition 3 (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop3-110326.pdf',
          summary: 'Rate table, $5–15 billion revenue range, and how the money is divided.',
        },
        {
          label: 'Secretary of State — Official Voter Guide: Prop 3',
          url: 'https://voterguide.sos.ca.gov/propositions/3/',
        },
        {
          label: 'Secretary of State — Prop 3 arguments and rebuttals',
          url: 'https://voterguide.sos.ca.gov/propositions/3/arguments-rebuttals.htm',
          summary: 'Yes: CTA, school nurses, Planned Parenthood. No: CalTax, Family Business Assn., Hispanic Chambers; HJTA on rebuttal.',
        },
        {
          label: 'CalMatters — Prop 3 voter guide',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-3-high-income-tax/',
        },
        {
          label: 'KPBS / CalMatters — Proposition 3 explainer (Sep 23, 2026)',
          url: 'https://www.kpbs.org/news/politics/2026/09/23/proposition-3-make-income-taxes-on-higher-earners-permanent-to-fund-education-and-healthcare',
        },
        {
          label: 'LAist — What to know about Prop 3 (Oct 2026)',
          url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-proposition-3-income-tax',
        },
        {
          label: 'EdSource — Teachers unions make pitch to renew tax (Sep 2026)',
          url: 'https://edsource.org/2026/wealth-tax-vs-income-tax/767043',
          summary: 'CTA campaign strategy and spending; how Prop 3 compares with the Prop 40 billionaire tax.',
        },
        {
          label: 'CalMatters Commentary (opinion) — case against making the “temporary” tax permanent (Aug 2026)',
          url: 'https://calmatters.org/commentary/2026/08/proposition-3-temporary-tax-permanent/',
        },
        {
          label: 'Secretary of State — Prop 3 campaign contribution totals',
          url: 'https://www.sos.ca.gov/campaign-lobbying/helpful-resources/measure-contributions/2026-ballot-measure-contribution-totals/proposition-3-provides-permanent-funding-schools-and-healthcare-extending-existing-tax-high-incomes-initiative-constitutional-am',
        },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters strongly favor higher taxes on top earners to fund public schools and health care, and see permanence as overdue.'],
      ['EL', 'Yes', '●', 'Establishment Liberals support progressive taxation for education and value ending the cycle of temporary extensions that complicates budgeting.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays prioritize school and Medi-Cal funding and back a tax that falls only on incomes above roughly $371,000.'],
      ['OL', 'Yes', '●', 'Outsider Left voters see the economic system as tilted toward the wealthy, and keeping top-bracket rates is a clear way to push back.'],
      ['SS', 'Yes', '◐', 'Stressed Sideliners lean toward taxing the rich rather than themselves, though their distrust of how Sacramento spends money tempers enthusiasm.'],
      ['AR', 'No', '◐', 'Ambivalent Right voters favor lower taxes and business-friendly policy and are troubled that a tax sold as temporary would become permanent.'],
      ['PR', 'No', '○', 'Populist Right voters are open to taxing the wealthy in principle, but their deep distrust of state spending and broken “temporary” promises tips them to No.'],
      ['CC', 'No', '●', 'Committed Conservatives oppose high marginal rates as bad for growth and want the scheduled expiration to stand.'],
      ['FF', 'No', '●', 'Faith and Flag Conservatives favor smaller government and lower taxes and reject locking a tax increase into the constitution.'],
    ]),
    counterArguments: [
      'DM (Yes ●): But consider No if you want the 2031 sunset to force a fresh debate on school spending and accountability before the tax is made permanent.',
      'PR (No ○): But consider Yes if your priority is that the very highest earners keep paying more, since this tax does not touch middle-income households.',
      'EL (Yes ●): But consider No if you worry that relying even more on volatile capital-gains revenue deepens California’s boom-and-bust budget problem.',
    ],
  },

  // ───────────────────────────── Prop 4 ─────────────────────────────
  {
    id: 'prop-4',
    categoryId: 'state-props',
    title: 'Prop 4 — Allow public financing of election campaigns',
    tldrLabel: 'Prop 4 — Public campaign $',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Since Prop 73 in 1988, California law has barred the state and most local governments from giving public money to candidates’ campaigns (some charter cities such as Los Angeles, San Francisco, Long Beach, Oakland, and Berkeley run their own programs). Because the ban was voter-approved, only voters can lift it. Prop 4 would not create any program; it would let the state, counties, and other cities create one later if they choose.',
      'Supporters see public matching funds as a way to reduce the clout of big donors and let candidates without wealthy networks compete. Opponents see taxpayer money flowing to politicians, with the real design choices — how much money, for whom, from what source — left to future officials.',
    ],
    introParagraphs: [
      'The Legislature placed Prop 4 on the ballot through SB 42 (Umberg), the California Fair Elections Act (Chapter 245, Statutes of 2025), signed in October 2025. A 2016 attempt (SB 1107) to lift the ban without a vote was struck down in court. The Yes campaign is run by the California Clean Money Action Fund with Common Cause and the League of Women Voters; as of the Secretary of State’s Aug 2, 2026 tally, no Yes or No committee had reported contributions.',
      'PPIC’s September 4–10, 2026 survey found only 42% of likely voters would vote yes and 53% no — 55% of Democrats, 41% of independents, and 19% of Republicans in favor — making it one of the legislature’s measures most at risk.',
    ],
    polling: [
      {
        resultDisplay: 'Yes 42%, No 53%',
        pollsterCredit: 'PPIC Statewide Survey (1,103 likely voters, ±3.8 pts)',
        fieldDatesLabel: 'Sep 4–10, 2026',
        sourceUrl: 'https://www.ppic.org/pdf/ppic-statewide-survey-californians-and-their-government-september-2026.pdf',
      },
    ],
    measure: {
      question:
        'Repeals prohibition against public funding of election campaigns. Legislative statute. Repeals ban on state and local governments offering public funding of candidate campaigns; programs may not use funds earmarked for education, transportation, or public safety.',
      measureType: 'Legislative statute',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Ongoing state costs of a few hundred thousand dollars each year for the Fair Political Practices Commission to answer questions from state and local governments about public campaign finance programs. Costs of any actual program would depend on future decisions and could be significant for governments that adopt one (LAO).',
      supporters:
        'League of Women Voters of California; California Nurses Association; Mental Health Advocacy; Social Security Works; Consumer Watchdog',
      opponents:
        'California Taxpayers Association; Howard Jarvis Taxpayers Association; Family Business Association of California; United Latinos Action',
      voterConnection: [
        'Passing Prop 4 costs you nothing directly; it only removes a legal barrier. Any real spending would come later, if your city council, county board, or the Legislature votes to create a program.',
        'For scale: Los Angeles’s existing city program is projected to cost about $15 million over a two-year election cycle (KQED).',
        'If you are frustrated by big-donor and independent-expenditure spending in local races, this is the tool supporters want available; if you object to tax money going to candidates you oppose, this is the door you would want kept shut.',
        'Money earmarked for schools, transportation, or public safety could not be used, but general-fund dollars could.',
      ],
      mechanismBullets: [
        'Repeals the Political Reform Act’s ban (from Prop 73, 1988) on public funds for candidates’ campaigns at the state and local level.',
        'Does not create any program; state and local governments may design their own within broad rules.',
        'Rules for any future program: candidates must show broad-based support in their district and accept spending limits and other program rules; no funds earmarked for education, transportation, or public safety.',
        'Public money may not pay legal defense costs, fines, or repay a candidate’s personal loans to their campaign.',
        'The FPPC would give guidance on request but is not required to administer or enforce local programs.',
        'Supporters say it also triples maximum fines for illegal foreign campaign contributions (per the official argument in favor).',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Supporters say more than $1 billion has been spent on state candidate races since 2020; matching funds for small donations can give ordinary residents more weight relative to large donors and independent expenditures.',
        'It is local choice, not a mandate: each community decides whether to adopt a program, and supporters cite costs as low as about $1 per resident per year where programs exist.',
        'Lower fundraising barriers could encourage candidates without wealthy networks — teachers, nurses, small-business owners — to run.',
        'Supporters say California is the only state with a blanket ban, and charter cities already show such programs can work.',
      ],
      argumentsAgainst: [
        'Taxpayers would subsidize candidates they may strongly oppose, including fringe or opportunistic candidates who qualify for public money.',
        'Opponents call it a “blank check”: the measure sets no cap on total funding, number of candidates, or per-candidate amounts, leaving those choices to sitting politicians who would benefit.',
        'Candidates could take public money and still accept special-interest contributions; public financing does not stop independent expenditures, which drive much of the big-money spending.',
        'No funding source is identified; any program would draw on general funds that could otherwise go to services.',
        'Former FPPC chair Dan Schnur and a former FPPC commissioner signed the No argument, so the opposition is not limited to anti-tax groups.',
      ],
      readingLinks: [
        {
          label: 'LAO — Analysis of Proposition 4 (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop4-110326.pdf',
          summary: 'What the ban does today, what Prop 4 allows, and the FPPC cost estimate.',
        },
        {
          label: 'Secretary of State — Official Voter Guide: Prop 4',
          url: 'https://voterguide.sos.ca.gov/propositions/4/',
        },
        {
          label: 'Secretary of State — Prop 4 arguments and rebuttals',
          url: 'https://voterguide.sos.ca.gov/propositions/4/arguments-rebuttals.htm',
          summary: 'Yes: League of Women Voters, CNA, Sen. Umberg. No: Dan Schnur, Colleen McAndrews, CalTax, HJTA.',
        },
        {
          label: 'CalMatters — Prop 4 voter guide',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-4-public-fundraising/',
        },
        {
          label: 'KQED — Prop 4 allows cities to create public campaign financing programs',
          url: 'https://www.kqed.org/news/12101308/prop-4-allows-cities-to-create-public-campaign-financing-programs',
        },
        {
          label: 'LAist — Prop 4 voter guide',
          url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-proposition-4',
        },
        {
          label: 'Yes on Prop 4 — California Fair Elections Act (campaign site)',
          url: 'https://www.yesfairelections.org/',
          summary: 'Paid for by the California Clean Money Action Fund.',
        },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters see big money as corrupting politics and strongly favor public financing to empower small donors and non-wealthy candidates.'],
      ['EL', 'Yes', '●', 'Establishment Liberals back good-government reforms championed by the League of Women Voters and Common Cause, and like that each community chooses whether to opt in.'],
      ['DM', 'Yes', '◐', 'Democratic Mainstays generally dislike big-donor influence, but some balk at tax money for campaigns when services feel squeezed (only 55% of Democrats said yes in PPIC).'],
      ['OL', 'Yes', '◐', 'Outsider Left voters want to break donor dominance and help insurgent candidates, though they doubt incumbents will design programs that threaten themselves.'],
      ['SS', 'No', '○', 'Stressed Sideliners are cynical about politicians and react poorly to the idea of public money going to campaigns, though they also dislike big donors.'],
      ['AR', 'No', '◐', 'Ambivalent Right voters see an open-ended new spending category with design left to officials and prefer the status quo.'],
      ['PR', 'No', '●', 'Populist Right voters distrust politicians and strongly object to taxpayer dollars funding their campaigns, including candidates they oppose.'],
      ['CC', 'No', '●', 'Committed Conservatives oppose using public funds for political speech and side with CalTax and Howard Jarvis on the “blank check” concern.'],
      ['FF', 'No', '●', 'Faith and Flag Conservatives object to being compelled to subsidize candidates whose values they reject.'],
    ]),
    counterArguments: [
      'PL (Yes ●): But consider No if you think public financing does little against independent expenditures, where most big-money spending now happens.',
      'PR (No ●): But consider Yes if your bigger grievance is donor-class control of politics, since small-donor matching tends to help outsider candidates in both parties.',
      'DM (Yes ◐): But consider No if you want any public-financing plan’s cost and funding source spelled out before the ban is lifted.',
    ],
  },

  // ───────────────────────────── Prop 5 ─────────────────────────────
  {
    id: 'prop-5',
    categoryId: 'state-props',
    title: 'Prop 5 — Recall elections: remove the replacement question',
    tldrLabel: 'Prop 5 — Recall reform',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Today a California recall ballot asks two questions: should the official be removed, and if so, who replaces them? The top vote-getter on the second question wins even with a small plurality — in 2003 Arnold Schwarzenegger took office this way, and in the failed 2021 recall of Gov. Newsom the leading replacement drew a minority of the vote. Prop 5 would keep the yes/no removal vote but drop the replacement question.',
      'Instead, vacancies would be filled the way other vacancies are: special elections for legislators, gubernatorial appointment for most other offices, and the Lieutenant Governor stepping up if the Governor is recalled (serving until the next statewide election if early in the term, or for the rest of the term if later). Supporters call this closing a minority-rule loophole; opponents say it takes away voters’ power to choose a replacement and hands it to insiders.',
    ],
    introParagraphs: [
      'The Legislature placed Prop 5 on the ballot as SCA 1 (Newman), Resolution Chapter 204, Statutes of 2024, after Secretary of State Shirley Weber proposed changes following the 2021 recall; author Josh Newman was himself recalled from the state Senate in 2018 and later won the seat back. Almost all legislative Republicans opposed it. As of the Secretary of State’s Aug 2, 2026 tally, no Yes or No committee had registered.',
      'PPIC’s September 4–10, 2026 survey found 35% of likely voters would vote yes and 59% no — support fell short of a majority in every partisan group (40% of Democrats, 34% of Republicans, 28% of independents). The Sacramento Bee editorial board (opinion) endorsed Yes, per CalMatters.',
    ],
    polling: [
      {
        resultDisplay: 'Yes 35%, No 59%',
        pollsterCredit: 'PPIC Statewide Survey (1,103 likely voters, ±3.8 pts)',
        fieldDatesLabel: 'Sep 4–10, 2026',
        sourceUrl: 'https://www.ppic.org/pdf/ppic-statewide-survey-californians-and-their-government-september-2026.pdf',
      },
    ],
    measure: {
      question:
        'Changes recall election process for statewide officers. Legislative constitutional amendment. Currently voters elect replacement candidates at the same time as the recall; this measure instead fills recall vacancies by subsequent special election or appointment.',
      measureType: 'Legislative constitutional amendment',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Net fiscal effect unknown. In the event of a recall, savings or costs of millions of dollars to administer the election depending on the office recalled. (Shorter ballots save money; a standalone special election to fill a seat could cost millions.)',
      supporters: 'None submitted (on the ballot label; the voter guide carries an argument in favor from the League of Women Voters of California, California Common Cause, and former FPPC chair Dan Schnur)',
      opponents: 'None submitted (on the ballot label; the voter guide carries an argument against from Senate Minority Leader Brian W. Jones and Asm. Joe Patterson)',
      voterConnection: [
        'You would still get to vote on whether to remove an official; what changes is that you would no longer pick the replacement on the same ballot.',
        'If a Governor were recalled, you would get the elected Lieutenant Governor (usually the same party as the recalled Governor) for some or all of the remaining term, rather than whoever won a crowded replacement race.',
        'For other statewide offices such as Attorney General, the Governor would appoint the replacement; for legislators, voters would choose in a later special election.',
        'The recalled official could run again in a later special election to fill the seat, which current law prohibits on the same ballot.',
      ],
      mechanismBullets: [
        'Removes the second question (“who should replace…”) from recall ballots for state officers.',
        'A successful recall creates a vacancy filled under existing vacancy rules; despite the ballot title’s reference to statewide officers, LAO says this covers state legislators too (filled by special election).',
        'Governor recalled before the nomination deadline for the next statewide election in the first two years of the term: Lieutenant Governor serves until voters elect a new Governor at that election.',
        'Governor recalled later in the term: Lieutenant Governor serves out the rest of the term.',
        'Other executive offices (e.g., Lt. Governor, Attorney General): Governor appoints a replacement, as with other vacancies.',
        'Recall qualification rules (signature counts, timing) and the majority-vote removal question are unchanged.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Under the current system an official removed by a narrow majority can be replaced by someone who won far less than majority support — supporters say the 2021 front-runner would have won with about 28% of recall voters.',
        'It refocuses recalls on misconduct or failure in office rather than serving as a cheaper, lower-turnout way to rerun the last election.',
        'The Lieutenant Governor is elected statewide, so succession provides continuity with a voter-chosen official instead of a candidate who won a 46- or 135-person scramble.',
        'Supporters cite the 2021 recall’s cost of over $200 million and argue the reform discourages costly, politically motivated recalls.',
      ],
      argumentsAgainst: [
        'It takes away a choice voters have had for more than a century: deciding who replaces an official they remove.',
        'Removing an official can leave the same party — or the same administration — in control via the Lieutenant Governor or a gubernatorial appointee, which may defeat the purpose of the recall.',
        'Opponents say insiders and appointees would fill offices that voters should fill, and that the recalled official could run in the later special election.',
        'A separate special election for legislative seats adds a second trip to the polls and can cost millions when it cannot be consolidated with a regular election.',
        'Opponents note the author was recalled himself and argue the change protects incumbents; the 2003 recall that elected Schwarzenegger is often cited as the system working as intended.',
      ],
      readingLinks: [
        {
          label: 'LAO — Analysis of Proposition 5 (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop5-110326.pdf',
          summary: 'Recall history, how each office would be filled, and cost/savings scenarios.',
        },
        {
          label: 'Secretary of State — Official Voter Guide: Prop 5',
          url: 'https://voterguide.sos.ca.gov/propositions/5/',
        },
        {
          label: 'Secretary of State — Prop 5 arguments and rebuttals',
          url: 'https://voterguide.sos.ca.gov/propositions/5/arguments-rebuttals.htm',
          summary: 'Yes: League of Women Voters, Common Cause, Dan Schnur. No: Sen. Brian Jones, Asm. Joe Patterson.',
        },
        {
          label: 'CalMatters — Prop 5 voter guide',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-5-recall-reform/',
          summary: 'Backers include Common Cause, LWV, and the state Democratic Party; opponents include the state Republican Party and Reform California.',
        },
        {
          label: 'KPBS / CalMatters — Proposition 5: Delay replacing recalled state officials (Oct 2026)',
          url: 'https://www.kpbs.org/news/politics/2026/10/02/proposition-5-delay-replacing-recalled-state-officials',
        },
        {
          label: 'Secretary of State — Prop 5 campaign contribution totals',
          url: 'https://www.sos.ca.gov/campaign-lobbying/helpful-resources/measure-contributions/2026-ballot-measure-contribution-totals/proposition-5-sca-1-newman-elections-recall-state-officers-res-ch-204-2024',
        },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters saw the 2021 recall as a partisan end-run and favor majority-rule fixes, though some hesitate to limit a direct-democracy tool.'],
      ['EL', 'Yes', '◐', 'Establishment Liberals trust institutional succession and back the good-government groups’ argument against plurality winners, while recognizing the measure polls poorly.'],
      ['DM', 'Yes', '○', 'Democratic Mainstays follow the party’s endorsement but are attached to voters’ power to choose, as PPIC shows only 40% of Democrats in favor.'],
      ['OL', 'No', '○', 'Outsider Left voters distrust insiders and dislike shifting replacement choices to appointments and party succession, even if they disliked the 2021 recall.'],
      ['SS', 'No', '◐', 'Stressed Sideliners are wary of anything that reads as taking a choice away from voters and handing it to politicians.'],
      ['AR', 'No', '◐', 'Ambivalent Right voters see the recall-and-replace system as a working check that once delivered a Republican governor and do not want it narrowed.'],
      ['PR', 'No', '●', 'Populist Right voters value direct voter power against Sacramento and view the measure as protecting entrenched Democratic incumbents.'],
      ['CC', 'No', '●', 'Committed Conservatives side with Republican legislative leaders that removing the replacement vote neuters the recall as a check on one-party rule.'],
      ['FF', 'No', '●', 'Faith and Flag Conservatives see the recall as a key tool for voters to override state leadership and oppose weakening it.'],
    ]),
    counterArguments: [
      'PR (No ●): But consider Yes if you object to officials winning statewide office with a small plurality, which could just as easily cut against your side.',
      'EL (Yes ◐): But consider No if you think a recall that leaves the same party’s Lieutenant Governor in charge gives voters too little real change for the effort.',
      'SS (No ◐): But consider Yes if you think costly recall elections have become a partisan rerun rather than a response to wrongdoing.',
    ],
  },
];
