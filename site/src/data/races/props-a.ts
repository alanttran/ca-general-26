import type { MeasureFunding, MeasurePosition, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * State propositions 1–5 (the five legislative/early measures) — Nov 3, 2026 general election.
 * Ground truth for ballot labels: docs/sample-ballot-92126.md. Mechanics/fiscal: LAO analyses (July 2026).
 * Polling: PPIC Statewide Survey, Sept 4–10, 2026 (1,103 likely voters, ±3.8 pts).
 * Money (`funding`, checked Oct 12, 2026): cumulative committee totals from KQED’s voter guide (Secretary of
 * State data, updated Oct 9, 2026), cross-checked against CalMatters’ tracker (Sept 28), the SoS measure pages
 * (through Oct 6) and the FPPC top-10 contributor lists. The SoS pages sum shared multi-measure committees and,
 * for some 2025-formed committees, show less than one donor’s FPPC-reported total, so they are cited but not used
 * as the headline number.
 * Positions: party slates (CDP Aug 2, CAGOP, Green, Libertarian) checked Oct 12, 2026; editorial boards checked Oct 29, 2026.
 */

// ── Shared helpers for props-a/b/c `funding` and `positions` ──

const SOS_MEASURE_BASE =
  'https://www.sos.ca.gov/campaign-lobbying/helpful-resources/measure-contributions/2026-ballot-measure-contribution-totals/';

/** Standard money sources for a state prop; `sosSlug` is the SoS measure page’s final path segment. */
export function propFundingSources(prop: number, sosSlug: string, opts: { kqed?: boolean } = {}): MeasureFunding['sources'] {
  const sources: MeasureFunding['sources'] = [];
  if (opts.kqed !== false) {
    sources.push({
      label: 'KQED Voter Guide — fundraising (California Secretary of State data, updated Oct 9, 2026)',
      url: `https://www.kqed.org/voterguide/california/proposition-${prop}`,
    });
  }
  sources.push(
    {
      label: 'CalMatters — campaign finance tracker (updated Sept 28, 2026)',
      url: `https://project-voter-guide-2026.interactives.calmatters.org/general/en/campaign-finance/prop/${prop}`,
    },
    { label: 'California Secretary of State — committee totals (Cal-Access, through Oct 6, 2026)', url: SOS_MEASURE_BASE + sosSlug },
    {
      label: 'FPPC — top 10 contributors, November 2026 ballot measures',
      url: 'https://www.fppc.ca.gov/search-filings/top-10-contributors-list/november-2026-general-election/',
    },
  );
  return sources;
}

type Stance = MeasurePosition['position'];

const CDP_URL = 'https://cadem.org/wp-content/uploads/2026/08/FINAL-2026-General-Election-Endorsements.pdf';
const CAGOP_URL = 'https://cagop.org/endorsements/';
const GREEN_URL = 'https://www.cagreens.org/green-party-california-state-voter-guide-nov-2026';
const LP_URL = 'https://ca.lp.org/ballot-propositions/';

/** The four state parties’ official 2026 proposition slates, in a fixed order. */
export function partyPositions(dem: Stance, gop: Stance, green: Stance, lib: Stance): MeasurePosition[] {
  return [
    { org: 'California Democratic Party', kind: 'party', position: dem, url: CDP_URL },
    { org: 'California Republican Party', kind: 'party', position: gop, url: CAGOP_URL },
    { org: 'Green Party of California', kind: 'party', position: green, url: GREEN_URL },
    { org: 'Libertarian Party of California', kind: 'party', position: lib, url: LP_URL },
  ];
}

export function editorial(org: string, position: Stance, url: string): MeasurePosition {
  return { org, kind: 'editorial', position, url };
}

export const PAPER = {
  lat: 'Los Angeles Times',
  sfc: 'San Francisco Chronicle',
  sdut: 'San Diego Union-Tribune',
  sacbee: 'Sacramento Bee',
  bang: 'Mercury News / East Bay Times (Bay Area News Group)',
  ocr: 'Orange County Register (Southern California News Group)',
} as const;
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
      'The Legislature placed Prop 1 on the ballot through SB 417 (Limón), signed by Gov. Newsom in late June 2026.',
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
      forYou: {
        wallet: 'No new tax. The state would repay about $500–600 million a year for 25 years out of the same budget that pays for schools and Medi-Cal.',
        who: 'Lower-income renters, first-time buyers, farmworkers, college students and about 2,100 veterans. Homeowners and market-rate renters get nothing directly.',
      },
      explainerUrl: 'https://calmatters.org/california-voter-guide-2026/proposition-1-housing-bond/',
      question:
        'Authorizes bonds for housing affordability programs. Legislative statute. Authorizes $11.25 billion in general obligation bonds for multifamily rental housing, veterans’ mortgages, supportive housing, preservation of existing affordable housing, and downpayment assistance.',
      yesMeans:
        'Lets the state borrow $11.25 billion for affordable rental housing, homebuyer help, farmworker and student housing, and veterans’ home loans, repaid over about 25 years.',
      noMeans:
        'Blocks the $11.25 billion borrowing; state housing and CalVet loan programs continue at current funding, with no new bond money and no added repayment costs.',
      funding: {
        asOf: 'Oct. 9, 2026',
        yes: { raised: '$12.1 million', topDonors: ['Airbnb ($1M)', 'Western States Regional Council of Carpenters ($1M)', 'North Coast States Regional Council of Carpenters ($1M)', 'Building a Better California, Sergey Brin’s committee ($1M)'] },
        note: 'No committee has registered to oppose Prop 1.',
        sources: propFundingSources(1, 'proposition-1-sb-417-limon-veterans-and-affordable-housing-bond-act-2026-ch-16-2026'),
      },
      positions: [
        ...partyPositions('Yes', 'No position', 'No position', 'No'),
        editorial(PAPER.sfc, 'Yes', 'https://www.sfchronicle.com/opinion/editorials/article/prop1-california-housing-vote-22442444.php'),
        editorial(PAPER.sdut, 'No', 'https://www.sandiegouniontribune.com/2026/09/11/endorsement-no-on-prop-1-which-continues-failed-state-housing-policies/'),
        editorial(PAPER.sacbee, 'Yes', 'https://www.sacbee.com/opinion/article317326136.html'),
        editorial(PAPER.bang, 'No', 'https://www.mercurynews.com/2026/10/26/endorsement-proposition-1-37-affordable-housing-crisis-november-3-general-election/'),
        editorial(PAPER.ocr, 'No', 'https://www.ocregister.com/2026/09/23/endorsement-no-on-prop-1-more-debt-wont-fix-californias-housing-shortage/'),
      ],
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
      ['LP', 'Yes', '●', 'Leftward Progressives want the state to build and fund rent-restricted and supportive housing directly, and an $11.25 billion bond with 55-year affordability rules and no new tax is squarely that.'],
      ['LL', 'Yes', '●', 'Loyal Liberals accept bonds for long-lived public assets and can point to the LAO’s estimate that repayment is about 0.25% of the General Fund, a modest cost for up to 40,000 rental units.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters want cost-of-living relief for working renters and farmworkers, though their doubt that Sacramento spends housing money well, at high per-unit costs, keeps this from being a firm Yes.'],
      ['OO', 'Yes', '●', 'Order and Opportunity Left voters want both affordable rentals and a path to homeownership, and the bond’s $1.1 billion in down-payment help plus CalVet loans fits their opportunity focus without a new tax.'],
      ['TM', 'Yes', '◐', 'Tuned-Out Middle voters are often struggling renters, 73% of whom say government is responsible for an adequate standard of living, and they welcome its help with housing costs from a bond that raises no tax, though the units it funds will reach only a fraction of them.'],
      ['PP', 'No', '◐', 'Pragmatic and Polite Right voters value fiscal prudence and are wary of 25 years of General Fund debt during deficits, especially when interest adds about 15% and three of the five editorial boards listed here say No.'],
      ['UR', 'No', '◐', 'Unconventional Right voters prefer smaller government and more market supply over state subsidies, though the CalVet loans, repaid by veterans, soften their objection.'],
      ['FC', 'No', '●', 'Faith First Conservatives, about 75% of whom want government services reduced, want state government and its debt cut back and see a $10 billion General Fund bond for subsidized housing as the wrong answer even with a veterans’ share.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose nearly all new state borrowing, and with about 80% saying regulation does more harm than good, they would rather cut the permitting rules and fees that make building expensive than subsidize units.'],
    ]),
    hinges: {
      LP: 'Yes if direct public money for rent-restricted, supportive and farmworker housing is your priority, with no new tax. No if you think $500–600 million a year for 25 years buys too little, since even 40,000 units barely dents the shortfall and donors include Airbnb and Sergey Brin’s committee.',
      LL: 'Yes if borrowing over 25 years for buildings that must stay affordable for 55 is a sensible use of debt at about 0.25% of the budget. No if you’d want construction costs and permitting fixed before borrowing $10 billion more, as most editorial boards listed here argue.',
      LO: 'Yes if some new homes for working renters, farmworkers and students beat none, even with doubts about how the state spends. No if high per-unit costs and developer middlemen make you doubt the money will reach people like you.',
      OO: 'Yes if help for first-time buyers, working renters and veterans is the kind of opportunity government should offer. No if 25 years of payments from the budget that funds schools, Medi-Cal and public safety worries you more.',
      TM: 'Yes if state help with housing costs matters to you and you like that it raises no tax. No if you doubt it will help you directly and would rather that $500–600 million a year stay with services you use now.',
      PP: 'Yes if financing long-lived buildings over 25 years is prudent, and the veterans’ portion has never cost the state anything. No if adding a quarter-century of debt during deficits, at about 15% extra cost from interest, is the wrong time to borrow.',
      UR: 'Yes if the CalVet loans and first-time buyer help matter most, since veterans repay their portion. No if you’d rather grow market supply by cutting rules than add 25 years of state debt for subsidies.',
      FC: 'Yes if veterans’ home loans and help for young families buying a first home are reason enough to back the package. No if more state borrowing and a bigger housing bureaucracy are the wrong answer, whatever share helps veterans.',
      NA: 'Yes if you see the bond mainly as veterans’ loans and help for homebuyers, which carry little cost to taxpayers. No if new state debt is a non-starter and the real fix is cutting the permitting, fees and regulation that drive building costs.',
    },
    counterArguments: [
      'OO (Yes ●): But consider No if you would rather see building costs and permitting fixed first, because LAO says interest makes these projects about 15% costlier and even 40,000 units will not move market rents much.',
      'PP (No ◐): But consider Yes if you value long-term planning, because financing buildings that must stay affordable for 55 years over 25 years is a standard use of bonds and the veterans’ portion has historically cost taxpayers nothing.',
      'TM (Yes ◐): But consider No if you rent at market rate, because the subsidized units go to specific income groups and you would get nothing directly while the debt payments compete with services you use.',
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
      'The Legislature placed Prop 2 on the ballot as ACA 20 (Gabriel), branded the “Save for California’s Future Act” and announced by Gov. Newsom and legislative leaders on June 23, 2026.',
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
      forYou: {
        wallet: 'No new tax. It changes how much of the state’s existing money is saved in good years instead of spent right away.',
        who: 'People who rely on state services such as Medi-Cal and public schools, which a bigger reserve helps protect in a recession.',
      },
      explainerUrl: 'https://calmatters.org/california-voter-guide-2026/proposition-2-rainy-day-fund/',
      question:
        'Increases state’s Rainy Day Fund. Legislative constitutional amendment. Increases the Rainy Day Fund approved by voters in 2014 to provide funding for education, health care, public safety, and other services during economic downturns.',
      yesMeans:
        'Raises the Rainy Day Fund cap from 10% to 20% of General Fund taxes, exempts deposits from the Gann spending limit until spent, and extends extra debt payments to 2040.',
      noMeans:
        'Keeps the 10% reserve cap, the current Gann-limit treatment of reserve deposits, and the extra debt-payment requirement that ends in 2030.',
      funding: {
        asOf: 'Oct. 6, 2026',
        note: 'No committee has registered to support or oppose Prop 2.',
        sources: propFundingSources(2, 'proposition-2-aca-20-gabriel-save-californias-future-act-res-ch-130-2026', { kqed: false }),
      },
      positions: [
        ...partyPositions('Yes', 'No', 'No position', 'No'),
        editorial(PAPER.sfc, 'Yes', 'https://www.sfchronicle.com/opinion/editorials/article/prop-2-money-california-22468892.php'),
        editorial(PAPER.sdut, 'No', 'https://www.sandiegouniontribune.com/2026/10/02/endorsements-props-2-37-wouldnt-yield-saner-state-budgets-more-housing/'),
        editorial(PAPER.sacbee, 'Yes', 'https://www.sacbee.com/opinion/article317091637.html'),
        editorial(PAPER.bang, 'Yes', 'https://www.mercurynews.com/2026/10/13/bay-area-news-group-california-election-endorsements-november-2026/'),
        editorial(PAPER.ocr, 'No', 'https://www.ocregister.com/2026/10/07/endorsement-no-on-prop-2-california-needs-fiscal-discipline-not-accounting-tricks/'),
      ],
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
      ['LP', 'Yes', '○', 'Leftward Progressives want Medi-Cal and schools shielded from recession cuts and like loosening the 1979 Gann limit, though they share the California Budget & Policy Center’s worry that bigger set-asides squeeze needs now.'],
      ['LL', 'Yes', '●', 'Loyal Liberals, 92% of whom say experts make better policy decisions than others, trust the LAO, which has long urged bigger reserves, and see a 20% cap plus extra debt paydown as the kind of responsible, expert-backed budgeting they favor.'],
      ['LO', 'Yes', '○', 'Left-Out Left voters want services protected in a downturn, but this technical measure does little for their costs now and they doubt lawmakers who recently suspended required deposits.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters want schools, health care and public safety protected from boom-and-bust cuts, and firefighters are among the measure’s main backers.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters understand saving in good years for hard times, and a bigger cushion makes recession cuts to services they rely on less likely, though the measure is low-salience for them.'],
      ['PP', 'Yes', '◐', 'Pragmatic and Polite Right voters prize fiscal prudence and incremental fixes (78% prefer them to risky quick ones), and saving more in boom years plus paying down debt to 2040 fits, even though the Gann-limit change gives some of them pause.'],
      ['UR', 'No', '◐', 'Unconventional Right voters want smaller government and distrust Sacramento, so exempting deposits from the 1979 spending limit reads to them as a way to keep more revenue and pay fewer rebates.'],
      ['FC', 'No', '◐', 'Faith First Conservatives, about 75% of whom want government services reduced, want spending restrained and the 1979 Gann limit kept whole, though they are not opposed to saving or paying down debt in principle.'],
      ['NA', 'No', '●', 'No Apologies Right voters distrust Sacramento’s budgeting and see the Gann change as an accounting trick that makes taxpayer rebates less likely.'],
    ]),
    hinges: {
      LP: 'Yes if protecting Medi-Cal, schools and safety-net programs from recession cuts matters most, and loosening the Gann limit appeals to you. No if setting aside up to 20% of revenue, sometimes $1 billion or more a year, delays programs you see as urgent now.',
      LL: 'Yes if you follow the LAO’s long-standing advice that bigger reserves prevent boom-year money from locking in unsustainable spending. No if lawmakers suspending over $5 billion in required deposits makes you doubt a bigger fund will be kept intact.',
      LO: 'Yes if protecting services you use in a downturn is worth saving more in good years. No if you’d rather surplus money go to cost-of-living needs now than sit in a reserve politicians can tap anyway.',
      OO: 'Yes if shielding schools, health care and public safety from recession cuts is your priority. No if money set aside, sometimes $1 billion or more a year, would do more good for working families now.',
      TM: 'Yes if saving in good years for hard times makes sense to you, as it would for a household. No if you doubt Sacramento will leave the money alone, since it can withdraw in a declared budget emergency.',
      PP: 'Yes if saving more in boom years and paying down debt through 2040 is the prudent, incremental fix it looks like. No if weakening the 1979 Gann limit, a voter-approved taxpayer protection, matters more than a bigger reserve.',
      UR: 'Yes if forced saving and extra debt paydown restrain spending more than the Gann change loosens it. No if you see the Gann exemption as a loophole that lets Sacramento keep more of your money.',
      FC: 'Yes if saving for hard times and paying down debt, including the federal unemployment loan, fit your idea of responsible government. No if you want the 1979 spending limit kept fully intact so rebates stay possible.',
      NA: 'Yes if a bigger reserve now means fewer recession tax hikes later. No if you see the Gann change as an accounting trick that lets Sacramento grow and makes taxpayer rebates less likely.',
    },
    counterArguments: [
      'PP (Yes ◐): But consider No if the 1979 spending limit matters to you, because deposits would no longer count against it until spent, which makes taxpayer rebates in boom years less likely.',
      'UR (No ◐): But consider Yes if you want Sacramento to spend less of each windfall, because the measure forces larger deposits when capital-gains revenue surges and extends extra debt payments to 2040.',
      'LP (Yes ○): But consider No if programs you see as urgent are underfunded now, because the California Budget & Policy Center estimates set-asides could reach $1 billion or more in some years.',
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
      'Prop 3 is sponsored by the California Teachers Association, by far its largest funder. The California Taxpayers Association formed a No committee, which has raised almost nothing. Prop 40, a separate one-time 5% tax on billionaires, is on the same ballot.',
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
      forYou: {
        wallet: 'Your taxes change only if your taxable income is above about $371,000 (single) or $742,000 (joint). Everyone else pays the same either way.',
        who: 'Public schools, community colleges and Medi-Cal, which get the $5–15 billion a year these tax brackets raise.',
      },
      explainerUrl: 'https://calmatters.org/california-voter-guide-2026/proposition-3-high-income-tax/',
      question:
        'Provides permanent funding for schools and health care by extending existing tax on high incomes. Initiative constitutional amendment. Makes permanent existing voter-approved tax rates for individuals earning over $371,000 (adjusted for inflation); allocates revenue to public education.',
      yesMeans:
        'Makes permanent the 10.3%, 11.3% and 12.3% income-tax brackets on income above about $371,000 (single) or $742,000 (joint), keeping $5–15 billion a year for schools and other programs.',
      noMeans:
        'Lets the higher brackets expire in 2031 as scheduled, dropping the top regular rate to 9.3%; rates on lower incomes stay the same.',
      funding: {
        asOf: 'Oct. 9, 2026',
        yes: { raised: '$50.2 million', topDonors: ['California Teachers Association ($33.2M)', 'National Education Association ($7.5M)', 'California School Employees Association ($2.6M)', 'California Federation of Teachers ($1.75M)'] },
        no: { raised: '$5,500', topDonors: ['Family Business Association of California ($5,000)', 'Pacific Coast Companies ($500)'] },
        note: 'The No committee is sponsored by the California Taxpayers Association.',
        sources: propFundingSources(3, 'proposition-3-provides-permanent-funding-schools-and-healthcare-extending-existing-tax-high-incomes-initiative-constitutional-am'),
      },
      positions: [
        ...partyPositions('Yes', 'No', 'Yes', 'No'),
        editorial(PAPER.sfc, 'Yes', 'https://www.sfchronicle.com/opinion/editorials/article/california-taxes-proposition-3-22435509.php'),
        editorial(PAPER.sdut, 'No', 'https://www.sandiegouniontribune.com/2026/09/18/why-voting-against-prop-3-is-a-vote-against-school-status-quo/'),
        editorial(PAPER.sacbee, 'Yes', 'https://www.sacbee.com/opinion/election-endorsements/article317445836.html'),
        editorial(PAPER.bang, 'Yes', 'https://www.mercurynews.com/2026/10/27/endorsement-proposition-3-california-ballot-measure-progressive-income-tax/'),
        editorial(PAPER.ocr, 'No', 'https://www.ocregister.com/2026/09/02/endorsement-no-on-proposition-3-temporary-taxes-should-be-temporary/'),
      ],
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
      ['LP', 'Yes', '●', 'Leftward Progressives are the most committed to taxing the rich, with about 91% bothered a lot that the wealthy don’t pay their fair share, and keeping top rates on incomes above about $371,000 to fund schools and Medi-Cal is a core priority for them.'],
      ['LL', 'Yes', '●', 'Loyal Liberals back progressive taxation for public services and value ending the cycle of temporary extensions that complicates budgeting.'],
      ['LO', 'Yes', '●', 'Left-Out Left voters are bothered that the wealthy don’t pay their fair share (77%) and want government to guarantee schools and health care, and this tax touches only the top earners.'],
      ['OO', 'Yes', '●', 'Order and Opportunity Left voters favor raising taxes on those at the top, with about 68% bothered a lot that the wealthy don’t pay their fair share, and want public schools and Medi-Cal funded, and their own taxes do not change.'],
      ['TM', 'Yes', '◐', 'Tuned-Out Middle voters pay nothing under this tax and use public schools and Medi-Cal, though their low trust in how Sacramento spends tempers their support.'],
      ['PP', 'Yes / No', '=', 'Pragmatic and Polite Right voters lean toward lower taxes but about 60% are bothered a lot that the wealthy don’t pay their fair share; if avoiding a sudden $5–15 billion budget hole by keeping existing rates matters most, Yes; if keeping the promise that Props 30 and 55 were temporary matters more, No, since the 2031 sunset leaves time to weigh a narrower extension.'],
      ['UR', 'No', '◐', 'Unconventional Right voters favor lower taxes and smaller government and object to a tax sold as temporary in 2012 and 2016 becoming permanent.'],
      ['FC', 'No', '●', 'Faith First Conservatives want government services reduced and taxes lower, and reject locking a tax increase into the Constitution.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose nearly all taxes, see high top rates as driving earners and businesses away, and want the scheduled expiration to stand.'],
    ]),
    hinges: {
      LP: 'Yes if top earners should pay more for schools and health care and permanence is overdue. No if you think tying permanent school funding to volatile top-earner revenue sets up boom-and-bust cuts that will land on the programs you care about.',
      LL: 'Yes if progressive taxation for schools and an end to temporary extensions make budgeting more predictable. No if relying even more on volatile capital-gains revenue deepens California’s boom-and-bust budget problem.',
      LO: 'Yes if keeping top-bracket rates is a way to make the wealthy pay their share for schools and Medi-Cal. No if you’d rather the 2031 sunset force a review of how the money is spent before it’s locked into the Constitution.',
      OO: 'Yes if school and Medi-Cal funding matter most, paid only on incomes above about $371,000. No if you want the 2031 sunset to force a fresh debate on school spending and results first.',
      TM: 'Yes if you’d rather the highest earners pay than people like you, since your own taxes don’t change. No if you distrust how Sacramento spends money and don’t want to lock in more of it permanently.',
      PP: 'Yes if avoiding a $5–15 billion hole and steady school funding are the prudent choice, since these rates date to 2012. No if a tax voters were told was temporary should end as promised, leaving time to weigh a narrower extension.',
      UR: 'Yes if school and Medi-Cal funding outweigh your preference for lower taxes, since this tax doesn’t touch middle incomes. No if a tax sold as temporary in 2012 and 2016 should end as voters were promised.',
      FC: 'Yes if steady school and health care funding outweighs your preference for smaller government. No if a tax increase shouldn’t be locked into the Constitution, where only another statewide vote can change it.',
      NA: 'Yes if avoiding cuts to schools matters more than lowering top rates. No if high marginal rates drive earners and businesses out and the expiration should stand.',
    },
    counterArguments: [
      'LL (Yes ●): But consider No if you worry about budget swings, because top earners already pay about half of state income tax and tying permanent spending to that volatile revenue worsens boom-and-bust budgeting.',
      'UR (No ◐): But consider Yes if you mainly want your own taxes kept low, because this tax applies only to income above about $371,000 for single filers and a No changes nothing until 2031.',
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
      'The Legislature placed Prop 4 on the ballot through SB 42 (Umberg), signed in October 2025; a 2016 attempt to lift the ban without a vote was struck down in court. The California Clean Money Action Fund runs the Yes campaign with Common Cause and the League of Women Voters.',
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
      forYou: {
        wallet: 'Nothing directly. Money is spent only if your city, county or the state later chooses to create a public campaign funding program.',
        who: 'Candidates and voters in places that decide to create a program. Charter cities such as Los Angeles already have one.',
      },
      explainerUrl: 'https://calmatters.org/california-voter-guide-2026/proposition-4-public-fundraising/',
      question:
        'Repeals prohibition against public funding of election campaigns. Legislative statute. Repeals ban on state and local governments offering public funding of candidate campaigns; programs may not use funds earmarked for education, transportation, or public safety.',
      yesMeans:
        'Lets the state and all local governments create public campaign funding programs for candidates, with spending limits and no use of money earmarked for education, transportation or public safety.',
      noMeans:
        'Keeps the 1988 ban on public campaign funding for the state and most local governments; charter cities such as Los Angeles and San Francisco keep their existing programs.',
      funding: {
        asOf: 'Oct. 9, 2026',
        yes: { raised: '$235,000', topDonors: ['Movement Voter PAC ($235K)'] },
        note: 'The only Yes money reported is from Movement Voter PAC’s committee supporting Prop 4. No committee has registered to oppose it.',
        sources: propFundingSources(4, 'proposition-4-sb-42-umberg-political-reform-act-1974-public-campaign-financing-california-fair-elections-act-2026-ch-245-2025'),
      },
      positions: [
        ...partyPositions('Yes', 'No', 'Yes', 'No'),
        editorial(PAPER.sfc, 'No', 'https://www.sfchronicle.com/opinion/editorials/article/endorsement-prop-4-public-financing-22426379.php'),
        editorial(PAPER.sdut, 'No', 'https://www.sandiegouniontribune.com/2026/09/04/endorsement-dont-buy-prop-4s-baloney-about-publicly-financed-campaigns/'),
        editorial(PAPER.sacbee, 'Yes', 'https://www.sacbee.com/opinion/election-endorsements/article317448027.html'),
        editorial(PAPER.bang, 'No', 'https://www.mercurynews.com/2026/10/19/endorsement-reject-prop-4-dont-let-politicians-raid-public-funds-for-their-campaigns/'),
        editorial(PAPER.ocr, 'No', 'https://www.ocregister.com/2026/09/27/endorsement-no-on-proposition-4-california-doesnt-need-taxpayer-funded-campaigns/'),
      ],
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
      ['LP', 'Yes', '●', 'Leftward Progressives see big money as corrupting politics and strongly favor public financing that gives small donors and non-wealthy candidates more weight.'],
      ['LL', 'Yes', '◐', 'Loyal Liberals back the League of Women Voters’ and Common Cause’s reform and like that each community opts in, though most editorial boards listed here and a former FPPC chair call it a blank check.'],
      ['LO', 'Yes', '○', 'Left-Out Left voters want politics less beholden to donors and more open to candidates like them, since only 53% say a candidate has shared their views lately, but they doubt incumbents will design programs that threaten themselves.'],
      ['OO', 'No', '○', 'Order and Opportunity Left voters dislike big-donor influence but are economically pinched and wary of tax money going to campaigns when services feel squeezed.'],
      ['TM', 'No', '◐', 'Tuned-Out Middle voters distrust politicians and want public money spent on concrete help, not on candidates’ campaigns.'],
      ['PP', 'No', '◐', 'Pragmatic and Polite Right voters value fiscal prudence and careful design, and lifting the ban with no cap, funding source or program details is too open-ended for them.'],
      ['UR', 'No', '●', 'Unconventional Right voters want smaller government and object to taxpayers subsidizing candidates, including ones they oppose.'],
      ['FC', 'No', '●', 'Faith First Conservatives object to being made to fund candidates whose values they reject and to a new category of government spending.'],
      ['NA', 'No', '●', 'No Apologies Right voters see taxpayer-funded campaigns as politicians helping themselves and oppose any new public spending of this kind.'],
    ]),
    hinges: {
      LP: 'Yes if matching small donations to give ordinary residents more weight against big donors is your priority. No if you think public financing does little against independent expenditures, where much of the big-money spending happens.',
      LL: 'Yes if you back the League of Women Voters’ and Common Cause’s reform and trust each community to design its own program. No if leaving costs, caps and funding sources to the officials who benefit is too open-ended, as most editorial boards listed here argue.',
      LO: 'Yes if lower fundraising barriers could help candidates without wealthy networks run. No if you expect incumbents to design programs that protect themselves rather than challengers.',
      OO: 'Yes if curbing big-donor influence matters most, since nothing is spent unless your community opts in. No if you want any program’s cost and funding source spelled out before tax money goes to campaigns.',
      TM: 'Yes if big donors frustrate you more than public money for campaigns. No if tax money going to politicians’ campaigns, including ones you oppose, is a non-starter.',
      PP: 'Yes if opt-in programs with spending limits, like those charter cities already run, are a measured way to reduce donor pressure. No if lifting the ban with no cap, no funding source and design left to the officials who benefit is too open-ended.',
      UR: 'Yes if your bigger grievance is donor-class control of politics, since small-donor matching can help outsider candidates in both parties. No if taxpayers should never fund politicians’ campaigns.',
      FC: 'Yes if letting each community decide for itself outweighs your objection to the subsidy. No if you shouldn’t be made to fund candidates whose values you reject.',
      NA: 'Yes if you think small-donor matching could help insurgent conservatives challenge the establishment. No if public money for politicians’ campaigns is waste, whoever gets it.',
    },
    counterArguments: [
      'UR (No ●): But consider Yes if you resent establishment and donor-class control, because small-donor matching tends to help outsider candidates in both parties and nothing is spent unless your community opts in.',
      'LL (Yes ◐): But consider No if you want reforms designed before they are authorized, because the measure sets no cap, funding source or program rules and leaves those choices to the officials who would benefit.',
      'OO (No ○): But consider Yes if big-donor influence bothers you, because no money is spent unless your city, county or the state later chooses to create a program.',
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
      'The Legislature placed Prop 5 on the ballot as SCA 1 (Newman) after Secretary of State Shirley Weber proposed changes following the 2021 recall; Newman was recalled from the Senate in 2018 and later won back his seat. Nearly all legislative Republicans opposed it.',
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
      forYou: {
        wallet: 'No direct cost. A future recall election could cost more or less to run, depending on the office.',
        who: 'Every voter in a future state recall: you would still vote on removing the official, but the successor would be chosen another way.',
      },
      explainerUrl: 'https://calmatters.org/california-voter-guide-2026/proposition-5-recall-reform/',
      question:
        'Changes recall election process for statewide officers. Legislative constitutional amendment. Currently voters elect replacement candidates at the same time as the recall; this measure instead fills recall vacancies by subsequent special election or appointment.',
      yesMeans:
        'Removes the replacement-candidate question from state recall ballots; a recalled Governor is succeeded by the Lieutenant Governor, and other vacancies are filled by appointment or special election.',
      noMeans:
        'Keeps the two-part recall ballot, where voters decide whether to remove a state official and, on the same ballot, who replaces them by plurality vote.',
      funding: {
        asOf: 'Oct. 6, 2026',
        note: 'No committee has registered to support or oppose Prop 5.',
        sources: propFundingSources(5, 'proposition-5-sca-1-newman-elections-recall-state-officers-res-ch-204-2024', { kqed: false }),
      },
      positions: [
        ...partyPositions('Yes', 'No', 'No position', 'No position'),
        editorial(PAPER.sfc, 'No', 'https://www.sfchronicle.com/opinion/editorials/article/prop-5-recall-california-22458510.php'),
        editorial(PAPER.sdut, 'No', 'https://www.sandiegouniontribune.com/2026/09/25/a-vote-against-prop-5-is-a-vote-against-the-california-status-quo/'),
        editorial(PAPER.sacbee, 'Yes', 'https://www.sacbee.com/opinion/election-endorsements/article316911387.html'),
        editorial(PAPER.bang, 'No', 'https://www.mercurynews.com/2026/10/20/endorsement-no-on-prop-5-a-bad-idea-that-protects-the-status-quo-and-silences-independent-minded-challengers/'),
        editorial(PAPER.ocr, 'No', 'https://www.ocregister.com/2026/08/12/endorsement-vote-no-on-proposition-5-an-attack-on-californias-recall-power/'),
      ],
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
      ['LP', 'Yes', '◐', 'Leftward Progressives saw the 2021 recall as a partisan end-run and want to stop a plurality winner from replacing an elected official, though some hesitate to limit a direct-democracy tool.'],
      ['LL', 'Yes', '◐', 'Loyal Liberals trust orderly institutional succession and back the League of Women Voters and Common Cause here, though four of the five editorial boards listed here oppose it.'],
      ['LO', 'No', '◐', 'Left-Out Left voters distrust insiders, with 75% saying few or no officials ran to serve the public, and dislike moving the replacement choice to party succession and appointments, especially in a measure written by a senator who was himself recalled.'],
      ['OO', 'No', '○', 'Order and Opportunity Left voters value stable government, but they are wary of taking a choice away from voters, and most Democrats in PPIC’s poll opposed it.'],
      ['TM', 'No', '○', 'Tuned-Out Middle voters already feel voting gives them little say and would read this as taking another choice away and handing it to politicians.'],
      ['PP', 'Yes / No', '=', 'Pragmatic and Polite Right voters value stability, and it cuts both ways here: if continuity from an elected Lieutenant Governor taking over after a recall matters most, Yes; if letting the same party or administration keep control after voters remove a governor worries them more, No, as four of the five editorial boards listed here urge.'],
      ['UR', 'No', '●', 'Unconventional Right voters value a direct voter check on Sacramento and see this as protecting entrenched incumbents.'],
      ['FC', 'No', '●', 'Faith First Conservatives see the recall as one of the few tools conservatives have to override one-party state leadership and oppose weakening it.'],
      ['NA', 'No', '●', 'No Apologies Right voters see the recall-and-replace system as a fight-back tool against Democratic control and reject anything that blunts it.'],
    ]),
    hinges: {
      LP: 'Yes if a replacement chosen by a small plurality after a partisan recall push like 2021’s looks like minority rule. No if limiting voters’ direct choice of a replacement goes too far, even to fix that.',
      LL: 'Yes if succession by the elected Lieutenant Governor offers more stability than a 46- or 135-person plurality race. No if a recall that leaves the same party in charge gives voters too little real change for the effort.',
      LO: 'Yes if you saw the 2021 recall as a partisan end-run and want plurality winners stopped. No if moving the replacement choice to appointments and party succession puts too much power with insiders.',
      OO: 'Yes if you want recalls focused on misconduct, with steady succession instead of a crowded race. No if choosing who replaces a removed official is a voter power you don’t want to give up.',
      TM: 'Yes if costly recall elections look like partisan reruns rather than responses to wrongdoing. No if it reads as taking a choice away from voters and handing it to politicians.',
      PP: 'Yes if continuity through the elected Lieutenant Governor is steadier than a crowded plurality race. No if a recall should be able to change who governs, not leave the same party or administration in control.',
      UR: 'Yes if officials winning statewide office with a small plurality bothers you, since that could cut against your side too. No if it mainly protects incumbents by keeping the same party in control.',
      FC: 'Yes if you’d rather recalls target misconduct than rerun elections, whichever party holds office. No if the recall is a key tool for voters to override state leadership and shouldn’t be weakened.',
      NA: 'Yes if you’d accept a weaker recall in exchange for majority support behind whoever governs. No if the recall-and-replace system is a check on one-party rule that delivered a Republican governor in 2003.',
    },
    counterArguments: [
      'LL (Yes ◐): But consider No if you want recalls to mean real change, because a recalled governor would be succeeded by a Lieutenant Governor usually of the same party.',
      'UR (No ●): But consider Yes if you object to minority rule, because under today’s rules a replacement can take office with far less support than the official who was removed.',
    ],
  },
];
