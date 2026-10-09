import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Nov 3, 2026 statewide propositions 42–45.
 * Sources checked Oct 7, 2026: SoS Official Voter Information Guide (title/summary, LAO analysis,
 * arguments, text of proposed laws), SoS ballot-measure contribution totals (through Aug 2, 2026),
 * PPIC Statewide Survey (Sept 4–10, 2026, likely voters), CalMatters, LAist, KQED, KPBS.
 */
export const RACES_PROPS_C: Race[] = [
  // ───────────────────────────── PROP 42 ─────────────────────────────
  {
    id: 'prop-42',
    categoryId: 'state-props',
    title: 'Prop 42 — Ban on new state personal-property and retroactive taxes',
    tldrLabel: 'Prop 42 — No wealth tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Prop 42 would permanently bar new state taxes on owning personal property (stocks, retirement accounts, business stakes, crypto, art; not real estate) and most new taxes reaching back to past conduct, income, or residency. That rules out a state wealth tax, starting with Prop 40, the billionaire tax on the same ballot.',
    ],
    introParagraphs: [
      'A citizen initiative from billionaire-tax opponents. Google co-founder Sergey Brin is the main funder of Building a Better California, the group behind Props 41 and 42. Its Yes committee had raised about $49.3 million by Aug 2, 2026, with no opposition committee filed; NPR reported in August that Brin had put over $100 million into the overall fight.',
      'PPIC\'s Sept 4–10 likely-voter survey had Prop 42 at 54% yes, 43% no (Republicans 74% and independents 61% yes; Democrats 39–56) and Prop 40 at 52% yes. Both could pass, leaving the conflict clause to decide.',
    ],
    measure: {
      question:
        'Prohibits new state personal property taxes and certain retroactive state taxes. Initiative constitutional amendment. Prohibits any new state tax on the ownership of personal property (everything other than real estate) or applied retroactively based on a taxpayer\'s past activities; nullifies conflicting taxes enacted after Jan 1, 2026.',
      measureType: 'Initiative constitutional amendment',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'LAO: possibility that tax revenues will not go up as much in the future. By limiting the state\'s tax options, it could make future tax increases somewhat harder. When and by how much revenue would be lower is unclear.',
      supporters: 'CA Professional Firefighters; State Building & Construction Trades Council of CA; AMVETS Department of CA',
      opponents: 'US Senator Bernie Sanders; SEIU United Healthcare Workers West',
      voterConnection: [
        'No current tax goes away, and nothing taxes your 401(k), IRA, pension, or brokerage balance today. Prop 42 would ensure the state never can. Income and capital-gains taxes when you withdraw or sell are unchanged.',
        'If you want Prop 40\'s one-time 5% tax on billionaires\' net worth to take effect, a Yes on 42 works against it.',
        'Undoing it would take another statewide vote; the Legislature could not change it alone.',
      ],
      mechanismBullets: [
        'Adds Article VIII to the Constitution: no state tax enacted on or after Jan 1, 2026 may reach the "ownership or control" of pensions, retirement accounts, mutual funds, or any personal property, including financial assets, business interests, digital assets, and intellectual property. Real property is excluded.',
        'Grandfathers taxes first collected by Dec 31, 2025, such as the vehicle license fee and county taxes on business equipment. Local taxes are untouched (Prop 43 deals with those).',
        'Bans new state taxes based on conduct, activities, or status before the effective date, including where someone lived. Exception: during a governor-declared disaster or fiscal emergency, the Legislature may reach back up to 365 days, with revenue limited to that emergency.',
        'Conflict clause: a conflicting measure on the same ballot is void if Prop 42 gets more yes votes. The LAO warns courts could block Prop 40 this way even if a majority approves it.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Unsold assets shouldn\'t be taxed. Income is taxed when earned and gains when realized; taxing paper value is double taxation.',
        'A permanent constitutional guarantee protects retirement savings and family businesses. Future wealth taxes might not stay limited to billionaires.',
        'Retroactive taxes, including ones tied to where someone used to live, are unfair. People should be able to plan around known rules.',
        'Wealth taxes could drive high earners and founders out of state, eroding an income-tax base that depends heavily on a few top earners.',
      ],
      argumentsAgainst: [
        'If you support Prop 40\'s billionaire tax for health care: Prop 42 is built to cancel it, even if a majority approves Prop 40.',
        'Tax policy belongs with voters and the Legislature case by case, not banned permanently in the Constitution. A future crisis might need these options.',
        'The "protect your retirement" pitch overstates the threat: no state tax on ordinary retirement accounts exists or is proposed. Opponents say the real target is about 200 billionaires.',
        'It is largely funded by one billionaire to block a tax on billionaires, and its broad retroactivity ban could tie future voters\' hands in hard-to-foresee ways.',
      ],
      readingLinks: [
        {
          label: 'Secretary of State — Official Voter Guide: Prop 42 (title, LAO analysis, arguments)',
          url: 'https://voterguide.sos.ca.gov/propositions/42/',
        },
        {
          label: 'LAO — Analysis of Prop 42 (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop42-110326.pdf',
        },
        {
          label: 'CalMatters — Prop 42 voter guide',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-42-property-taxes/',
          summary: 'Lists supporters (including Sergey Brin and Building a Better California) and opponents (SEIU-UHW, CA Democratic Party).',
        },
        {
          label: 'LAist — Prop 42 explainer',
          url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-proposition-42',
        },
        {
          label: 'KPBS — Prop 42 would ban new personal property taxes (Oct 1, 2026)',
          url: 'https://www.kpbs.org/news/politics/2026/10/01/proposition-42-ban-new-personal-property-tax',
        },
        {
          label: 'Secretary of State — Prop 42 committee contribution totals',
          url: 'https://www.sos.ca.gov/campaign-lobbying/helpful-resources/measure-contributions/2026-ballot-measure-contribution-totals/proposition-42-prohibits-new-state-personal-property-taxes-and-certain-retroactive-state-taxes-initiative-constitutional-amendme',
        },
        {
          label: 'NPR — Brin has spent more than $100M opposing the billionaire tax (Aug 11, 2026)',
          url: 'https://www.vpm.org/npr-news/2026-08-11/googles-co-founder-has-spent-more-than-100-million-to-oppose-a-billionaire-tax',
        },
        {
          label: 'PPIC Statewide Survey — likely-voter crosstabs, Sept 2026 (PDF)',
          url: 'https://www.ppic.org/wp-content/uploads/crosstabs-likely-voters-0926.pdf',
          summary: 'Prop 42: 54% yes, 43% no, 4% don\'t know (Sept 4–10, 2026; ±3.8 pts).',
        },
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '●', 'Progressive Left voters strongly favor taxing concentrated wealth and would see a permanent ban that cancels Prop 40 as protecting billionaires.'],
      ['EL', 'No', '◐', 'Establishment Liberals favor higher taxes on the very rich and dislike locking tax policy into the Constitution, though some doubt a wealth tax is workable.'],
      ['DM', 'No', '◐', 'Democratic Mainstays support making the wealthy pay more and back the health-care funding at stake in Prop 40, which this measure is designed to cancel.'],
      ['OL', 'No', '◐', 'Outsider Left voters see the economy as rigged toward the rich and would read a billionaire-funded constitutional shield as exactly that.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners worry about their own small savings and may respond to "protect your retirement" framing, though few own the assets actually at issue.'],
      ['AR', 'Yes', '●', 'Ambivalent Right voters favor low taxes and a business-friendly climate, and a permanent ban on wealth taxes fits that preference.'],
      ['PR', 'Yes', '◐', 'Populist Right voters oppose new California taxes and distrust Sacramento, even though some are open to making corporations and the very rich pay more.'],
      ['CC', 'Yes', '●', 'Committed Conservatives oppose wealth taxes and retroactive taxes on principle and welcome constitutional limits on the state\'s power to tax.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives favor limited government and low taxes and would back a constitutional bar on new property-ownership taxes.'],
    ]),
    counterArguments: [
      'EL (No ◐): But consider Yes if you think a one-time wealth tax is hard to value and easy to escape, and would rather close the door than risk a flight of high earners.',
      'PR (Yes ◐): But consider No if your main goal is to make billionaires pay more. The near-term effect of Prop 42 is to cancel a tax that only billionaires would owe.',
      'SS (Yes ○): But note that ordinary retirement accounts face no proposed tax today. A No mainly keeps the billionaire tax alive and does not touch your savings.',
    ],
  },

  // ───────────────────────────── PROP 43 ─────────────────────────────
  {
    id: 'prop-43',
    categoryId: 'state-props',
    title: 'Prop 43 — Two-thirds vote for citizen-initiative local special taxes',
    tldrLabel: 'Prop 43 — Local tax 2/3',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Local special taxes (earmarked for fire, libraries, transit and the like) need two-thirds approval when officials put them on the ballot but, under court rulings since the 2017 Upland case, only a majority when citizens petition for them. Prop 43 would require two-thirds for both. The trade-off: a higher bar for new taxes versus letting one-third of voters block services.',
    ],
    introParagraphs: [
      'A legislative constitutional amendment (ACA 22) from a late-June 2026 deal: the Howard Jarvis Taxpayers Association withdrew its broader "Local Taxpayer Protection Act" initiative, which also targeted transfer taxes like LA\'s Measure ULA, and lawmakers placed this narrower rule on the ballot and dropped ACA 13. It passed 35–1 in the Senate and 68–2 in the Assembly.',
      'Through Aug 2, 2026: about $14.2 million in support, almost all from the committee formerly tied to HJTA\'s initiative, versus $500,000 opposed. PPIC\'s Sept 4–10 likely-voter survey had it trailing, 43% yes to 51% no.',
    ],
    measure: {
      question:
        'Limits voters\' ability to raise revenues for local government services. Legislative constitutional amendment. Raises the vote needed for voter-proposed (citizen initiative) local special taxes from a majority to two-thirds, beginning Jan 1, 2027.',
      measureType: 'Legislative constitutional amendment (ACA 22, Res. Ch. 132, Stats. 2026)',
      voteThreshold: 'Simple majority (to adopt Prop 43 itself)',
      fiscalImpact:
        'LAO: possibility that local government tax revenues will not go up as much in the future due to a higher vote threshold for certain taxes. The actual effect depends on future local decisions and votes.',
      supporters: 'California Taxpayers Association; Family Business Association of California; California Hispanic Chambers of Commerce',
      opponents: 'California Professional Firefighters; California Federation of Teachers; Nurse Alliance of SEIU CA',
      voterConnection: [
        'Your current tax bill doesn\'t change. What changes is how hard it is for petition-driven local taxes, such as parcel taxes, sales-tax add-ons, or transfer taxes for parks, libraries, transit, or homelessness, to pass from 2027 on.',
        'Renewals count: a majority-approved citizen tax that expires would need two-thirds to be extended or increased.',
        'Property owners and businesses, the usual payers of transfer and parcel taxes, gain protection. Groups relying on local revenue for services lose a tool. General taxes still pass by majority, so expect more measures written that way.',
      ],
      mechanismBullets: [
        'Adds Section 4.5 to Article XIII A: from Jan 1, 2027, no local government, "including the electorate of a local government exercising the initiative power," may impose, extend, or increase a special tax without two-thirds voter approval.',
        'Covers cities, counties, special districts, and school districts, using the existing "special tax" definition in Article XIII C.',
        'Not retroactive: citizen-initiative taxes approved before 2027, such as Measure ULA, stay valid. General-tax thresholds and school-bond and parcel-tax rules elsewhere in the Constitution are unchanged.',
        'ACA 13, pulled under the deal, would have required any measure raising a vote threshold to pass by that same higher threshold.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Prop 13 and later measures meant special taxes to need two-thirds whoever proposes them. Supporters say interest groups use this "Upland loophole" to pass costly taxes in low-turnout elections.',
        'It slows earmarked local taxes in a state with high sales, transfer, and utility taxes. Supporters count more than 2,000 new or higher local taxes in the past decade.',
        'Transfer taxes on home and apartment sales, like Measure ULA, have discouraged building. Future taxes like that should need broad agreement.',
        'It\'s a compromise: narrower than HJTA\'s initiative, it leaves existing taxes alone, and nearly every legislator voted to place it on the ballot.',
      ],
      argumentsAgainst: [
        'Minority rule: a measure with 66% support could fail, letting one-third of voters plus one decide local funding for fire, police, libraries, and roads.',
        'With federal health cuts and state budget pressure, communities need ways to fund services they choose. Citizen initiatives are often the only path when councils won\'t act.',
        'Renewals of taxes voters already approved by majority would face a two-thirds cliff, so programs they support could lapse.',
        'Firefighters, teachers, and nurses oppose it, as does the California Democratic Party, even though legislators placed it on the ballot to head off a broader measure.',
      ],
      readingLinks: [
        {
          label: 'Secretary of State — Official Voter Guide: Prop 43',
          url: 'https://voterguide.sos.ca.gov/propositions/43/title-summary.htm',
        },
        {
          label: 'LAO — Analysis of Prop 43 (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop43-110326.pdf',
        },
        {
          label: 'CalMatters — Prop 43 voter guide',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-43-tax-threshold/',
          summary: 'Describes the HJTA deal. Lists editorial positions (opinion): Southern California News Group in support, Sacramento Bee opposed.',
        },
        {
          label: 'LAist — Measure to kill LA\'s "mansion tax" won\'t be on the ballot after all (June 26, 2026)',
          url: 'https://laist.com/news/housing-homelessness/los-angeles-city-mansion-tax-measure-ula-transfer-state-sacramento-ab-736-howard-jarvis-novemeber-ballot-measure',
          summary: 'How HJTA\'s withdrawn initiative turned into ACA 22 / Prop 43, and why existing transfer taxes such as ULA are safe.',
        },
        {
          label: 'Aleshire & Wynder — What cities should know about Prop 43 / ACA 22 (law-firm client alert)',
          url: 'https://www.awattorneys.com/client-updates/proposition-43-aca-22-could-reshape-local-tax-initiatives-what-california-cities-should-know-before-2027/',
        },
        {
          label: 'CalMatters commentary (opinion) — Prop 43 and local taxes (Aug 2026)',
          url: 'https://calmatters.org/commentary/2026/08/california-constitution-proposition-43-taxes/',
        },
        {
          label: 'Secretary of State — Prop 43 committee contribution totals',
          url: 'https://www.sos.ca.gov/campaign-lobbying/helpful-resources/measure-contributions/2026-ballot-measure-contribution-totals/proposition-43-aca-22-wicks-local-taxes-limitation-res-ch-132-2026',
        },
        {
          label: 'PPIC Statewide Survey — likely-voter crosstabs, Sept 2026 (PDF)',
          url: 'https://www.ppic.org/wp-content/uploads/crosstabs-likely-voters-0926.pdf',
          summary: 'Prop 43: 43% yes, 51% no, 6% don\'t know (Sept 4–10, 2026).',
        },
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '●', 'The Progressive Left values local power to fund housing, transit, and social services and would see a two-thirds bar on citizen initiatives as entrenching anti-tax minorities.'],
      ['EL', 'No', '◐', 'Establishment Liberals favor majority rule and well-funded local government, though pro-housing members may welcome a higher bar for transfer taxes like Measure ULA.'],
      ['DM', 'No', '◐', 'Democratic Mainstays rely on local services and side with the firefighters, teachers, and nurses opposing the measure, while being less invested in tax-procedure fights.'],
      ['OL', 'No', '◐', 'Outsider Left voters favor grassroots, petition-driven taxes on property and real-estate wealth, which Prop 43 makes much harder to pass.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners feel local sales and utility tax increases directly and may welcome a higher bar, although they also depend on the services those taxes fund.'],
      ['AR', 'Yes', '●', 'Ambivalent Right voters want lower taxes and a friendlier climate for business and property, and a two-thirds rule fits.'],
      ['PR', 'Yes', '●', 'Populist Right voters distrust local officials and the groups that bankroll tax initiatives, and they back a supermajority check on new taxes.'],
      ['CC', 'Yes', '●', 'Committed Conservatives see the Upland rulings as eroding Prop 13 and want the two-thirds rule restored for every special tax.'],
      ['FF', 'Yes', '●', 'Faith and Flag Conservatives favor limited government and strong taxpayer protections, and this measure extends Prop 13\'s supermajority rule.'],
    ]),
    counterArguments: [
      'EL (No ◐): But consider Yes if you think citizen-initiative transfer taxes like Measure ULA slowed apartment construction, and want future taxes of that kind to need broad agreement.',
      'SS (Yes ○): But consider No if your neighborhood depends on locally funded fire, clinic, or library services that may need voter-backed renewals in the coming years.',
      'CC/AR (Yes ●): Note that general taxes still need only a majority, so local governments may write future measures as general taxes instead. The added protection may be smaller than it sounds.',
    ],
  },

  // ───────────────────────────── PROP 44 ─────────────────────────────
  {
    id: 'prop-44',
    categoryId: 'state-props',
    title: 'Prop 44 — Community clinics must spend 90% of revenue on program services',
    tldrLabel: 'Prop 44 — Clinic 90% rule',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Prop 44 would require nonprofit community clinics (Federally Qualified Health Centers) to spend at least 90% of revenue yearly on "program services" or pay the shortfall to the state. The sponsoring union says clinics divert public money to executive pay, overhead, and surpluses; nearly the whole clinic and medical establishment says it would force closures as federal Medicaid cuts hit.',
    ],
    introParagraphs: [
      'A citizen initiative from SEIU-United Healthcare Workers West after a similar bill failed in the Legislature. The California Primary Care Association lost an April 2026 federal suit to keep it off the ballot. In September it and five health centers sued SEIU-UHW and its president Dave Regan for racketeering, alleging he offered to drop Prop 44 if clinics backed unionizing about 25,000 workers. The union calls the unproven claims false.',
      'Through Aug 2, 2026, the No side (CPCA Advocates) had raised about $34.9 million and the Yes side about $16.9 million. PPIC\'s Sept 4–10 survey found 34% yes, 61% no among likely voters, with majorities opposed across parties. The ballot argument in favor is signed by the proponent and a clinic worker.',
    ],
    measure: {
      question:
        'Requires community health clinics spend 90% of revenue on program services. Initiative statute. Penalizes nonprofit Federally Qualified Health Centers that spend less than 90% of revenue on "program services" advancing their charitable purpose, including patient services.',
      measureType: 'Initiative statute',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'LAO: increased state costs in the low tens of millions of dollars per year to enforce the new rules, covered by fees on affected clinics. Other effects are uncertain: clinics might spend more on Medi-Cal-funded services, raising state costs, or some might close.',
      supporters: 'None submitted (campaign committee sponsored by SEIU-United Healthcare Workers West)',
      opponents: 'American Academy of Pediatrics CA; CA School Nurses Org; CA Academy of Family Physicians; CA Medical Assoc.',
      voterConnection: [
        'If you or your kids use a community health center or its school-based clinic, this changes how that clinic\'s budget is policed. These clinics serve mostly low-income, Medi-Cal, and uninsured patients with primary, dental, mental-health, and prenatal care.',
        'You won\'t pay directly: fees on clinics cover enforcement, though clinic budgets are largely public money from Medi-Cal and federal grants.',
      ],
      mechanismBullets: [
        'Covers nonprofit FQHCs and FQHC "look-alikes." Tribal and urban Indian clinics are excluded.',
        '"Mission Spend Ratio" = program-service expenses (IRS Form 990, Part III line 4e) ÷ total revenue (Part I line 12). The Attorney General may issue guidance on which costs count. The LAO says clinics now average about 80% of revenue on health care services.',
        'Clinics below 90% pay the shortfall yearly to the Department of Public Health, into an escrow account held five years and refundable on compliance. After that the Legislature may spend it on clinic workforce training and retention.',
        'Waivers for unexpected or exceptional circumstances, or when compliance would threaten the clinic\'s survival.',
        'A new annual registration fee funds enforcement. Reporting failures bring fines of $5,000, then $10,000 a month; false reports or inflating the ratio can be prosecuted criminally.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Clinics run mostly on taxpayer money. Sponsors say some spend under half on patient care while paying high executive salaries; a spending floor makes them accountable.',
        'With federal Medicaid cuts, it pushes money toward front-line care, staffing, interpretation, transportation, and equipment.',
        'Penalties aren\'t lost: they\'re refundable if a clinic complies within five years, and otherwise go to training and keeping clinic health workers.',
        'Public reporting lets patients and taxpayers compare how clinics spend their money.',
      ],
      argumentsAgainst: [
        'Doctors\', pediatricians\', nurses\', and clinic groups say it would take about $1.7 billion from clinics in year one, forcing cuts or closures and pushing patients into emergency rooms.',
        'The ratio uses revenue, not expenses, so building reserves, paying for buildings, or holding grant money for next year counts against a clinic.',
        'One union wrote and funded it, and a federal lawsuit alleges it is leverage in an organizing campaign. Health-care finance rules shouldn\'t come out of a labor fight.',
        'Clinics already answer to federal FQHC and Medi-Cal rules. A blunt 90% formula could punish investments in telehealth, IT, and expansion.',
      ],
      readingLinks: [
        {
          label: 'Secretary of State — Official Voter Guide: Prop 44',
          url: 'https://voterguide.sos.ca.gov/propositions/44/',
        },
        {
          label: 'LAO — Analysis of Prop 44 (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop44-110326.pdf',
        },
        {
          label: 'CalMatters — Prop 44 voter guide',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-44-clinic-funding/',
          summary: 'Lists opponents, including the CA Primary Care Association, CA Medical Association, Planned Parenthood Affiliates of CA, CA Hospital Association, and CA Democratic Party.',
        },
        {
          label: 'CalMatters — Should a union dictate how clinics spend money? Employers sue (Apr 30, 2026)',
          url: 'https://calmatters.org/politics/2026/04/healthcare-workers-clinics-ballot-measure/',
        },
        {
          label: 'LAist — Prop 44 explainer',
          url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-proposition-44-health-care-spending',
        },
        {
          label: 'Daily Journal — Clinics accuse SEIU-UHW of racketeering over Prop 44 (Sept 2026)',
          url: 'https://dailyjournal.com/article/394505-healthcare-clinics-accuse-seiu-uhw-of-racketeering-over-proposition-44',
          summary: 'Allegations in a civil complaint. The union calls them false.',
        },
        {
          label: 'Ballotpedia News — SEIU-UHW submits signatures for clinic and executive-pay initiatives (Apr 2026)',
          url: 'https://news.ballotpedia.org/2026/04/03/seiu-uhw-submits-signatures-for-california-ballot-initiatives-capping-executive-pay-and-requiring-clinics-to-spend-90-on-patient-care/',
        },
        {
          label: 'Secretary of State — Prop 44 committee contribution totals',
          url: 'https://www.sos.ca.gov/campaign-lobbying/helpful-resources/measure-contributions/2026-ballot-measure-contribution-totals/proposition-44-requires-community-health-clinics-spend-90-percent-revenue-program-services-initiative-statute',
        },
        {
          label: 'PPIC Statewide Survey — likely-voter crosstabs, Sept 2026 (PDF)',
          url: 'https://www.ppic.org/wp-content/uploads/crosstabs-likely-voters-0926.pdf',
          summary: 'Prop 44: 34% yes, 61% no, 6% don\'t know (Sept 4–10, 2026).',
        },
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '◐', 'The Progressive Left is pro-union and critical of executive pay but puts protecting safety-net care first, and Planned Parenthood and clinic advocates oppose this measure.'],
      ['EL', 'No', '●', 'Establishment Liberals trust expert health groups and the LAO\'s cautions, and the medical and clinic establishment is close to unanimous against this blunt formula.'],
      ['DM', 'No', '◐', 'Democratic Mainstays depend heavily on community clinics and follow the CA Democratic Party and doctors\' groups in opposing a measure that threatens closures.'],
      ['OL', 'Yes', '○', 'Outsider Left voters distrust institutional executives and may welcome a hard spending floor, though they also rely on these clinics for care.'],
      ['SS', 'No', '○', 'Stressed Sideliners are frequent safety-net patients and would likely avoid risking cuts at the clinics they use.'],
      ['AR', 'No', '◐', 'Ambivalent Right voters are wary of new state mandates and enforcement bureaucracy, especially ones driven by a union.'],
      ['PR', 'No', '◐', 'Populist Right voters dislike executive pay but distrust a powerful union using ballot measures as leverage against employers.'],
      ['CC', 'No', '●', 'Committed Conservatives oppose union-written spending mandates and new state penalties on private nonprofits.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives favor less regulation and are skeptical of SEIU-backed initiatives, though some may like the focus on executive pay.'],
    ]),
    counterArguments: [
      'PL (No ◐): But consider Yes if you think union pressure is the only effective check on clinic executives, and that the five-year refund window limits the risk of closures.',
      'OL (Yes ○): But consider No if your own clinic is an FQHC. Clinics say the revenue-based ratio would penalize them for keeping reserves, not just for executive pay.',
      'EL (No ●): But note that the LAO confirms clinics average about 80% on health services. If you think a spending floor is reasonable in principle, the real question is whether 90% of revenue is the right number.',
    ],
  },

  // ───────────────────────────── PROP 45 ─────────────────────────────
  {
    id: 'prop-45',
    categoryId: 'state-props',
    title: 'Prop 45 — CEQA review deadlines for "essential" projects',
    tldrLabel: 'Prop 45 — CEQA',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'CEQA, the state\'s main environmental law, requires agencies to study a project\'s harms before approving it and lets the public sue over skipped steps. Prop 45 creates an optional fast track for "essential" projects, from market-rate housing to transit, water, broadband, and clean energy. The trade-off: faster, cheaper building versus weaker review and less leverage for neighbors.',
    ],
    introParagraphs: [
      'A citizen initiative sponsored by the California Chamber of Commerce. It goes much further than 2025\'s budget-trailer bills AB 130 and SB 131, which exempted much infill housing from CEQA and loosened it for some other projects. Business groups said those didn\'t go far enough; environmental groups back SB 954 in 2026 to narrow SB 131.',
      'Through Aug 2, 2026, Yes committees raised about $18.4 million and No about $9.2 million. Support has fallen: CalChamber cited 73% in PPIC\'s July survey, but PPIC\'s Sept 4–10 ballot-label poll found 49% yes, 46% no among likely voters. KQED reports the data-center argument has hurt the Yes side.',
    ],
    measure: {
      question:
        'Modifies environmental review for certain projects. Initiative statute. Amends CEQA to expedite review for certain projects (most housing, transportation, water, health projects) by setting deadlines to complete review and resolve lawsuits.',
      measureType: 'Initiative statute',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'LAO: initial state and local costs likely in the high tens of millions of dollars a year, potentially over $100 million annually. That covers new guidelines, tighter deadlines, and court cases, and fees partly offset it. Longer-term effects are uncertain but potentially bigger in either direction: faster, cheaper public projects and more tax base, or costs from environmental harm that review would have caught.',
      supporters: 'California Children\'s Hospital Association; California Water Association; California Council for Affordable Housing',
      opponents: 'Coalition for Clean Air; CA Environmental Voters; Physicians for Social Responsibility, LA; National Wildlife Federation',
      voterConnection: [
        'Renters and buyers: supporters say faster approvals mean more homes and lower costs. Nothing requires affordability, so market-rate housing qualifies.',
        'Neighbors of proposed projects: shorter comment periods and tighter lawsuit limits mean less leverage over what gets built nearby.',
        'Ratepayers and taxpayers: grid, water, and transit projects could come sooner and cheaper, though later cleanup costs are possible.',
      ],
      mechanismBullets: [
        'Optional: applicants may still use regular CEQA. Eligible "essential" projects: housing, clean energy, water, public health, public safety, broadband (including facilities "incidental to and enable the operation of" internet service), education facilities, and transportation. High-speed rail is excluded.',
        'Deadlines: 30 days to rule an application complete (or it is deemed complete), then 30 days to pick the review type; an EIR must be decided within 365 business days. Missed deadlines let the applicant force a hearing and sue.',
        'Review: impacts judged under rules in place at filing; one applicant-offered alternative; tribal consultation limited to federally recognized tribes; comment capped at 20 days for negative declarations and 45 for draft EIRs, extendable only by a court.',
        'Lawsuits: filed within 30 days and resolved, with appeals, within 270 (a judge may add up to 90). Claims limited to objective existing law; courts may halt only the defective part, not rescind the whole approval.',
        'Labor: prevailing wage applies to essential housing only above 85 feet; broadband keeps existing labor rules.',
        'References to other laws are frozen as of Dec 31, 2025. The Legislature can amend it only by two-thirds, and only to further its purposes.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Approvals are slow and unpredictable. Supporters cite permitting delays adding over $75,000 to a new home\'s cost; enforceable deadlines force agencies to decide.',
        'CEQA suits are often filed by neighbors, competitors, or labor to win concessions or block housing. Narrower remedies cut that leverage.',
        'It speeds climate infrastructure (clean energy, transmission, transit, water) plus hospitals and schools, extending 2025\'s housing reforms to more project types.',
        'No project is exempt from review. Environmental laws still apply and local governments can still say no; mainly timelines and litigation change.',
      ],
      argumentsAgainst: [
        'Environmental, health, and labor groups say it guts CEQA: fewer alternatives, capped comment, and courts unable to stop flawed projects, meaning more pollution near homes and schools.',
        'Critics say its broadband language could cover data centers (supporters deny it), and fixes would need a two-thirds legislative vote.',
        'The Legislature already passed targeted, affordability-linked reforms in 2025. A business-written ballot statute is blunt and hard to correct.',
        'It narrows tribal consultation, weakens prevailing wage for most housing, and requires no lower rents or utility bills. Opponents say the savings go to developers.',
      ],
      readingLinks: [
        {
          label: 'Secretary of State — Official Voter Guide: Prop 45',
          url: 'https://voterguide.sos.ca.gov/propositions/45/',
        },
        {
          label: 'LAO — Analysis of Prop 45 (PDF)',
          url: 'https://lao.ca.gov/ballot/2026/prop45-110326.pdf',
        },
        {
          label: 'Secretary of State — Prop 45 full text (PDF)',
          url: 'https://vig.cdn.sos.ca.gov/2026/general/pdf/prop45-text-proposed-laws.pdf',
        },
        {
          label: 'CalMatters — Prop 45 voter guide',
          url: 'https://calmatters.org/california-voter-guide-2026/proposition-45-environmental-review/',
          summary: 'Endorsement lists. Support: CalChamber, CA Republican Party, CA Hospital Association, CA Building Industry Association. Opposition: CA Labor Federation, CA Democratic Party, CA Nurses Association, League of Women Voters, Sierra Club California.',
        },
        {
          label: 'KQED — Housing fix or data-center loophole? (Sept 22, 2026)',
          url: 'https://www.kqed.org/news/12100915/housing-fix-or-data-center-loophole-this-ballot-measure-would-overhaul-ceqa',
        },
        {
          label: 'CalMatters commentary (opinion, Dan Walters) — CEQA battle on two fronts: Prop 45 and SB 954 (Aug 2026)',
          url: 'https://calmatters.org/commentary/2026/08/california-political-battle-environmental-law/',
          summary: 'Explains how Prop 45 relates to 2025\'s AB 130/SB 131 and to SB 954, which would narrow SB 131.',
        },
        {
          label: 'Secretary of State — Prop 45 committee contribution totals',
          url: 'https://www.sos.ca.gov/campaign-lobbying/helpful-resources/measure-contributions/2026-ballot-measure-contribution-totals/proposition-45-modifies-environmental-review-certain-projects-initiative-statute',
        },
        {
          label: 'PPIC Statewide Survey — likely-voter crosstabs, Sept 2026 (PDF)',
          url: 'https://www.ppic.org/wp-content/uploads/crosstabs-likely-voters-0926.pdf',
          summary: 'Prop 45: 49% yes, 46% no, 5% don\'t know (Sept 4–10, 2026).',
        },
        {
          label: 'CalChamber (Yes campaign sponsor) — on PPIC July poll showing 73% support',
          url: 'https://advocacy.calchamber.com/alert/2026/07/voters-strongly-support-calchambers-prop-45',
        },
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '●', 'The Progressive Left puts environmental protection, community input, and labor standards first, and its allied groups lead the opposition to this business-sponsored CEQA rollback.'],
      ['EL', 'Yes', '◐', 'Establishment Liberals increasingly back "abundance"-style permitting reform to build housing and clean energy, and here they split from environmentalist allies and the party.'],
      ['DM', 'No', '○', 'Democratic Mainstays feel housing costs but tend to follow the CA Democratic Party, the Labor Federation, and nurses, all of whom oppose it.'],
      ['OL', 'Yes', '○', 'Outsider Left voters are young and rent-burdened, so faster housing appeals to them, but they distrust corporate-written measures and dislike data centers.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners are most focused on cost of living and may accept the promise of cheaper housing and utilities, though their engagement is low.'],
      ['AR', 'Yes', '●', 'Ambivalent Right voters favor less regulation and pro-business growth, which matches a CalChamber measure to speed approvals.'],
      ['PR', 'Yes', '◐', 'Populist Right voters dislike red tape and lawsuit-driven delay, though rural members may share worries about data centers and outside developers.'],
      ['CC', 'Yes', '●', 'Committed Conservatives have long sought CEQA reform as a check on regulation and litigation, and the CA Republican Party endorses Prop 45.'],
      ['FF', 'Yes', '◐', 'Faith and Flag Conservatives favor deregulation and local building, with some reservations about weaker local control over big projects.'],
    ]),
    counterArguments: [
      'EL (Yes ◐): But consider No if you\'d rather extend the Legislature\'s 2025 reforms, which are targeted and tied to affordability, than lock in a broad, business-written statute that takes a two-thirds vote to fix.',
      'PL (No ●): But consider Yes if you think CEQA delays are now a bigger barrier to transit, transmission, and clean energy than to polluters, since those projects are covered too.',
      'PR (Yes ◐): But consider No if the possibility of fast-tracked data centers or large projects in rural areas, with fewer chances for neighbors to object, outweighs the red-tape savings.',
    ],
  },
];
