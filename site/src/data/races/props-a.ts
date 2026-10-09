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
      'Prop 1 would borrow to subsidize tens of thousands of rent-restricted apartments and first-time home purchases, plus veterans’ home loans that veterans repay. The trade-off: more affordable housing now, versus a quarter-century of debt payments from a tight state budget while building costs remain very high.',
    ],
    introParagraphs: [
      'The Legislature placed Prop 1 on the ballot through SB 417 (Limón), signed by Gov. Newsom in late June 2026. As of Aug 2, 2026, two Yes committees had reported about $2.07 million (top funders include carpenters’ unions and Airbnb); no No committee had registered.',
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
        'No new tax: repayment comes from the General Fund, which also pays for schools, Medi-Cal, and prisons, so that money cannot be spent elsewhere.',
        'Direct beneficiaries: lower-income renters in subsidized buildings, low- and moderate-income first-time buyers, farmworkers, UC/CSU students, and about 2,100 veterans getting CalVet loans (LAO).',
        'Homeowners and market-rate renters get nothing directly; supporters argue more subsidized supply eases local rents and homelessness.',
      ],
      mechanismBullets: [
        '$10 billion General Fund bond: $7.2B multifamily rental (including supportive housing), $1.1B homeownership help, $500M housing infrastructure, $450M farmworker housing, $350M UC/CSU student housing (split evenly), $200M tribal grants, $200M local lower-cost housing pilots (LAO).',
        '$1.25 billion for CalVet home loans, repaid by veterans’ mortgage payments.',
        'Funded rental projects generally must reserve units for low-income households for 55 years.',
        'LAO estimates up to 40,000 rental units, about 2,500 farmworker units, about 1,200 student beds, and homeownership help for up to 40,000 households.',
        'Interest makes the projects cost about 15% more, after inflation, than paying cash (LAO).',
        'Last comparable bonds: $2 billion in 2024 (Prop 1, mental-health housing) and $1 billion for veterans’ loans in 2018.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Many affordable projects are approved and “shovel-ready” but stalled by a financing gap that state money often fills.',
        'It helps several groups at once: homeless and at-risk people, working renters, first-time buyers, farmworkers, students, tribes, and veterans.',
        'No new tax, and the veterans’ loan portion has historically cost the state nothing.',
        'Bonds are the standard way to fund long-lived assets; buildings that last 55+ years are reasonable to finance over 25.',
      ],
      argumentsAgainst: [
        'It adds a quarter-century of debt payments while the state juggles deficits, squeezing every other program in future budgets.',
        'Critics say fix why building is so expensive — permitting, fees, construction costs — before borrowing more to subsidize costly units.',
        'Some Republican legislators say it leads with veterans to win support while most of the money goes elsewhere (veterans get about 11%).',
        'Even LAO’s upper estimate of 40,000 rental units is small next to California’s shortfall, so market rents are unlikely to move much.',
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
      'Prop 2 would let the state save more in boom years, when stock-market-driven income taxes surge. The fight is over the 1979 “Gann” spending limit: deposits would stop counting against it until spent. Supporters call that ending a penalty on saving; opponents call it a loophole that makes taxpayer rebates less likely.',
    ],
    introParagraphs: [
      'The Legislature placed Prop 2 on the ballot as ACA 20 (Gabriel), branded the “Save for California’s Future Act” and announced by Gov. Newsom and legislative leaders on June 23, 2026. As of Aug 2, 2026, no Yes or No committee had registered.',
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
        'No new tax and no new program: it changes how much existing revenue is set aside in good years versus spent right away.',
        'If you rely on Medi-Cal, public schools, or other state services, a bigger cushion makes deep recession cuts less likely.',
        'Money set aside isn’t spent now — in some years $1 billion or more (California Budget & Policy Center estimate) — and boom-year Gann rebates become less likely.',
      ],
      mechanismBullets: [
        'Raises the Rainy Day Fund cap from 10% to 20% of General Fund taxes; deposits continue until the higher cap is reached.',
        'Requires larger deposits when capital-gains revenue is unusually high.',
        'Extends required extra debt payments from 2030 to 2040 and lets them pay school/community college obligations, internal borrowing, and federal loans such as the roughly $20 billion unemployment-insurance debt.',
        'Deposits count toward the Gann limit only when withdrawn; likewise for a separate revenue-surge account, capped at 10% of General Fund taxes a year.',
        'Today the state holds about $20 billion in reserves usable for any program and can suspend deposits or withdraw in a declared budget emergency (LAO).',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Revenue routinely drops by tens of billions in downturns; LAO has long urged bigger reserves so boom-year money isn’t locked into unsustainable spending.',
        'Bigger reserves mean fewer emergency cuts to schools, health care, and public safety, and less need for recession tax hikes or borrowing.',
        'Today saving can push the state over the Gann limit, forcing spending or rebates; counting money when spent removes that penalty.',
        'Longer extra debt paydown, including the federal UI loan, reduces long-term liabilities.',
      ],
      argumentsAgainst: [
        'Excluding deposits from the Gann limit weakens a 1979 voter-approved taxpayer protection and lets Sacramento keep more revenue.',
        'Lawmakers suspended over $5 billion in required deposits soon after proposing this; why trust a bigger fund they can tap in an emergency?',
        'The left-leaning California Budget & Policy Center warns bigger set-asides take money from urgent needs, and paying UI loan principal shifts a business cost to the state.',
        'It guarantees no program new money; the label’s “education, health care, public safety” is what reserves might later cover.',
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
      'Since 2012 the top 2% or so of earners have paid extra income-tax brackets due to expire in 2031; Prop 3 makes them permanent. The choice: keep this money for schools and health care, or let it lapse — a tax cut for high earners and a budget hole.',
    ],
    introParagraphs: [
      'Prop 3 is sponsored by the California Teachers Association, which had committed about $33 million to the Yes campaign by late September 2026 (EdSource). The California Taxpayers Association formed a No committee, which reported $0 as of Aug 2, 2026. Prop 40, a separate one-time 5% tax on billionaires, is on the same ballot.',
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
        'You pay only on taxable income above about $371,000 (single), $505,000 (head of household), or $742,000 (joint) — 2025 levels, indexed for inflation. Most voters’ bills won’t change.',
        'If your family uses public schools, community college, or Medi-Cal, this funding is at stake; LAO says roughly 40% goes to schools and community colleges.',
        'A No vote cuts no one’s taxes until 2031; the higher brackets would simply expire on schedule.',
      ],
      mechanismBullets: [
        'Removes the 2031 expiration on the 10.3%, 11.3%, and 12.3% brackets created by Prop 30 (2012) and extended by Prop 55 (2016). If it fails, the top regular rate reverts to 9.3%; the separate 1% mental-health surcharge on income over $1 million is unaffected.',
        'The education share splits 89% to K–12 and 11% to community colleges; local boards decide how to spend it, and none may go to administration (Attorney General’s summary).',
        'The rest supports health care, reserves, and other General Fund programs.',
        'As a constitutional amendment, it could be changed later only by another statewide vote.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Not a new tax: these rates date to 2012, and letting them lapse cuts millionaires’ taxes while schools, Medi-Cal, and other services absorb the loss.',
        'CTA warns failure would mean teacher layoffs and program cuts; school dollars go to classrooms, are audited, and cannot be redirected by the Legislature.',
        'Settling it permanently ends the cycle of “temporary” extensions and gives schools predictable planning.',
        'It asks the most from those most able to pay, as federal cuts hit health and safety-net programs.',
      ],
      argumentsAgainst: [
        'Voters were told in 2012 and 2016 it was temporary; opponents call this a broken promise and, versus post-2030 law, the largest permanent income-tax increase in state history.',
        'California already has the nation’s highest top rate; opponents say permanence drives high earners and business owners, with their revenue and jobs, out of state.',
        'Top earners pay about half of state income tax; tying permanent spending to this volatile revenue worsens boom-and-bust budgeting (CalMatters commentary, opinion).',
        'Opponents say the problem is spending, not revenue, and the 2031 sunset forces a useful review — leaving time to weigh a narrower extension.',
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
      'A 1988 voter-approved ban (Prop 73) bars the state and most local governments from funding candidates’ campaigns. Prop 4 creates no program; it lets governments create one. Supporters see a check on big donors; opponents see taxpayer money for politicians, with the design left to future officials.',
    ],
    introParagraphs: [
      'The Legislature placed Prop 4 on the ballot through SB 42 (Umberg), signed in October 2025; a 2016 attempt to lift the ban without a vote was struck down in court. The California Clean Money Action Fund runs the Yes campaign with Common Cause and the League of Women Voters; as of Aug 2, 2026, no committee had reported contributions.',
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
        'Passing it costs you nothing directly; spending happens only if your city, county, or the Legislature later creates a program, possibly with general-fund dollars.',
        'For scale: Los Angeles’s existing program is projected to cost about $15 million per two-year election cycle (KQED).',
        'If big-donor spending frustrates you, this is the tool supporters want available; if you object to funding candidates you oppose, this is the door you’d keep shut.',
      ],
      mechanismBullets: [
        'Repeals the ban on public funds for state and local campaigns. Charter cities such as Los Angeles, San Francisco, Long Beach, Oakland, and Berkeley already run programs.',
        'Programs must require candidates to show broad district support and accept spending limits; they may not use money earmarked for education, transportation, or public safety.',
        'Public money may not pay legal defense costs, fines, or repay candidates’ personal loans to their campaigns.',
        'The FPPC would give guidance on request but need not administer or enforce local programs.',
        'The official Yes argument says it also triples maximum fines for illegal foreign contributions.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Over $1 billion has gone into state candidate races since 2020; matching small donations gives ordinary residents more weight against big donors.',
        'Local choice, not a mandate: each community decides, and supporters cite costs as low as about $1 per resident per year.',
        'Lower fundraising barriers could encourage teachers, nurses, and small-business owners without wealthy networks to run.',
        'Supporters say California is the only state with a blanket ban, and charter-city programs show the idea works.',
      ],
      argumentsAgainst: [
        'Taxpayers would subsidize candidates they strongly oppose, including fringe or opportunistic ones.',
        'A “blank check”: no cap on total spending, candidates, or amounts, and no funding source — choices left to the politicians who benefit.',
        'Candidates could take public money and still accept special-interest cash, and independent expenditures, which drive much big-money spending, are untouched.',
        'Opposition isn’t only anti-tax groups: former FPPC chair Dan Schnur and a former FPPC commissioner signed the No argument.',
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
      'Today a recall ballot asks two questions: remove the official, and if so, who replaces them? The replacement winner needs only a plurality. Prop 5 keeps the removal vote but drops the replacement question, filling the seat like other vacancies. Supporters call it closing a minority-rule loophole; opponents say it hands voters’ choice to insiders.',
    ],
    introParagraphs: [
      'The Legislature placed Prop 5 on the ballot as SCA 1 (Newman) after Secretary of State Shirley Weber proposed changes following the 2021 recall; Newman was recalled from the Senate in 2018 and later won back his seat. Nearly all legislative Republicans opposed it. As of Aug 2, 2026, no committee had registered. The Sacramento Bee editorial board (opinion) endorsed Yes, per CalMatters.',
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
        'You would still vote on removing an official, but not on the replacement in the same election.',
        'A recalled Governor would be succeeded by the elected Lieutenant Governor (usually the same party), not the winner of a crowded replacement race.',
        'The recalled official could run again in a later special election, which current law bars on the same ballot.',
      ],
      mechanismBullets: [
        'Removes the replacement question from recall ballots for state officers; despite the ballot title, LAO says this covers legislators too, whose seats would be filled by special election.',
        'If the Governor is recalled before the next statewide nomination deadline in the term’s first two years, the Lieutenant Governor serves until that election; if later, for the rest of the term.',
        'Other executive offices (e.g., Lt. Governor, Attorney General): the Governor appoints a replacement.',
        'Recall qualification rules (signature counts, timing) and the majority-vote removal question are unchanged.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'A narrowly removed official can be replaced by someone with far less support; supporters say the 2021 front-runner would have won with about 28% of recall voters.',
        'It refocuses recalls on misconduct or failure in office, not a cheaper, lower-turnout rerun of the last election.',
        'The Lieutenant Governor is elected statewide, offering continuity instead of the winner of a 46- or 135-person scramble.',
        'Supporters cite the 2021 recall’s cost of over $200 million and say the change discourages politically motivated recalls.',
      ],
      argumentsAgainst: [
        'It removes a choice voters have had for more than a century: who replaces an official they remove.',
        'The same party — or administration — can stay in control via the Lieutenant Governor or an appointee, defeating the recall’s purpose.',
        'Legislative vacancies need a separate special election, costing millions if it can’t be consolidated with a regular election.',
        'Opponents say it protects incumbents, noting the author’s own recall; they cite Schwarzenegger’s 2003 election as the system working as intended.',
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
