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
      'Prop 42 would write into the state Constitution that California can never adopt a new state tax on simply owning personal property. That covers stocks, retirement accounts, business stakes, crypto, art, and other belongings, but not real estate. It would also ban most new state taxes that reach back to earlier conduct, income, or residency. In practice it would rule out a state wealth tax, now and in the future, unless voters later amend the Constitution again.',
      'It is also a direct counter to Prop 40, the one-time 5% billionaire tax on the same ballot. Prop 42 says any conflicting measure on the same ballot is void if Prop 42 gets more "yes" votes. The Legislative Analyst warns that courts could then block Prop 40 even if a majority approves it. So your votes on 40, 41, and 42 work together. Approving both 40 and 42 most likely means whichever gets more yes votes controls.',
    ],
    introParagraphs: [
      'Prop 42 is a citizen initiative constitutional amendment from opponents of the billionaire tax. Google co-founder Sergey Brin is the main funder of Building a Better California, the group behind Props 41 and 42. By the Aug 2, 2026 Secretary of State report, the Yes on 42 committee had raised about $49.3 million, and no opposition committee had filed. NPR reported in August that Brin had put more than $100 million into the overall fight against the billionaire tax.',
      'In PPIC\'s Sept 4–10, 2026 survey of likely voters, Prop 42 led 54% yes to 43% no. Republicans (74%) and independents (61%) backed it, and Democrats opposed it 39–56. The same poll had Prop 40, the billionaire tax, at 52% yes. That makes it a real possibility that both pass and the conflict clause decides which one survives.',
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
        'No current tax goes away. Taxes in effect and first collected by Dec 31, 2025 are grandfathered, including the vehicle license fee and county taxes on business equipment. Local governments are not covered, because the ban applies only to new state taxes.',
        'If you have a 401(k), IRA, pension, or brokerage account, nothing taxes those balances just for existing today. Prop 42 would make sure the state never can. Income and capital-gains taxes when you withdraw or sell are unchanged.',
        'The practical target is Prop 40. A one-time 5% tax on billionaires\' net worth is a tax on owning assets, which is exactly what Prop 42 bans. If you want Prop 40 to take effect, a Yes on 42 works against it.',
        'Because it is a constitutional amendment, undoing it later would take another statewide vote. The Legislature could not change it alone.',
      ],
      mechanismBullets: [
        'Adds a new Article VIII to the Constitution. No state law or constitutional provision enacted on or after Jan 1, 2026 may tax the "ownership or control" of pensions, retirement accounts, mutual funds, or any personal property, tangible or intangible. That explicitly includes financial assets, business interests, digital assets, and intellectual property.',
        'Real property is excluded. Taxes in effect and first collected on or before Dec 31, 2025 are not affected.',
        'Bans new state taxes that create liability from conduct, activities, or status before the tax\'s effective date. That explicitly includes taxes keyed to where someone lived on an earlier date.',
        'Narrow exception: the Legislature may pass a tax that reaches back no more than 365 days, only during a governor-declared disaster or fiscal emergency, with the revenue limited to that emergency.',
        'Conflict clause: any measure on the same ballot that conflicts with Prop 42 is void if Prop 42 gets more yes votes. The LAO says Prop 40 could be stopped this way.',
        'Applies to state taxes only. Local special and general taxes are untouched (Prop 43 deals with those).',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'You oppose taxing assets that have not been sold. Income is taxed when earned and gains when realized, and a yearly or one-time tax on paper value would be double taxation.',
        'You want a permanent constitutional guarantee for retirement savings and family businesses. You don\'t trust that future proposals would stay limited to billionaires.',
        'You think retroactive taxes are unfair in principle, including taxes tied to where someone lived before the law passed. People should be able to plan around known rules.',
        'You worry wealth taxes push high earners and company founders to leave the state. That could hurt the income-tax base, which depends heavily on a small number of top earners.',
      ],
      argumentsAgainst: [
        'You support Prop 40\'s billionaire tax for health care. Prop 42 is built to cancel it, and if 42 gets more yes votes, a majority-approved Prop 40 could be voided.',
        'You think tax policy belongs with voters and the Legislature case by case, not permanently banned in the Constitution. A future crisis might call for options this removes.',
        'The "protect your retirement" message overstates the threat. No state tax on ordinary retirement accounts exists or is on this ballot, and opponents say the real target is about 200 billionaires.',
        'A measure funded largely by one billionaire to block a tax on billionaires deserves skepticism. The broad retroactivity ban could also tie the hands of future voters and legislators in ways that are hard to foresee.',
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
      'Local "special taxes" are taxes earmarked for one purpose, like a fire, library, transit, or homelessness tax. They already need two-thirds voter approval when a city council or county board puts them on the ballot. Since the California Supreme Court\'s 2017 ruling in California Cannabis Coalition v. City of Upland, as applied by later court decisions, special taxes placed on the ballot by citizen petition have needed only a simple majority. Prop 43 ends that difference starting Jan 1, 2027: citizen-initiative special taxes would also need two-thirds.',
      'Supporters call the current rule the "Upland loophole." They say interest groups use it to pass costly taxes, such as Los Angeles\'s Measure ULA transfer tax, in low-turnout elections. Opponents say it lets one-third of voters plus one veto taxes most residents want for local services. Taxes already approved stay in place. But when a majority-approved citizen tax expires and comes up for renewal or an increase, it would need two-thirds.',
    ],
    introParagraphs: [
      'Prop 43 is a legislative constitutional amendment (ACA 22) that came out of a late-June 2026 deal. The Howard Jarvis Taxpayers Association withdrew its broader "Local Taxpayer Protection Act" initiative. That initiative would also have targeted real-estate transfer taxes like LA\'s Measure ULA. In exchange, lawmakers placed this narrower two-thirds rule on the ballot and dropped ACA 13. The Legislature approved it 35–1 in the Senate and 68–2 in the Assembly. The California Democratic Party still opposes it.',
      'Money through Aug 2, 2026: about $14.2 million in support, almost all in the committee formerly tied to HJTA\'s withdrawn initiative, versus $500,000 opposed. PPIC\'s Sept 4–10 likely-voter survey found Prop 43 trailing, 43% yes to 51% no.',
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
        'This does not change your current tax bill. It changes how hard it is for future local special taxes, the kind you see on city and county ballots, to pass when residents gather signatures for them.',
        'If you have signed petitions for a local parcel tax, sales-tax add-on, or transfer tax for parks, libraries, transit, or homelessness, those efforts would need two-thirds instead of a majority from 2027 on.',
        'Renewals count. Majority-approved citizen special taxes that expire later, including extensions or increases, would need two-thirds to continue.',
        'General taxes, meaning unrestricted money for the general fund, still pass with a majority. Expect more local measures written as general taxes with advisory spending promises.',
        'Property owners and businesses, the usual payers of transfer and parcel taxes, gain protection. Groups that rely on local revenue for services lose a tool.',
      ],
      mechanismBullets: [
        'Adds Section 4.5 to Article XIII A: beginning Jan 1, 2027, no local government, "including the electorate of a local government exercising the initiative power," may impose, extend, or increase a special tax without two-thirds voter approval.',
        'Covers cities, counties, special districts, and school districts. "Special tax" uses the existing definition in Article XIII C.',
        'Applies going forward. Citizen-initiative taxes approved before 2027, such as LA\'s Measure ULA, are not invalidated.',
        'Does not change thresholds for general taxes (majority) or local school-bond and parcel-tax rules found elsewhere in the Constitution.',
        'Context: it replaced HJTA\'s withdrawn initiative, which also targeted transfer taxes, and ACA 13, a legislative measure that would have required any measure raising a vote threshold to pass by that same higher threshold. ACA 13 was pulled from this ballot under the deal.',
        'The Legislature passed it 35–1 in the Senate and 68–2 in the Assembly.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'You believe Prop 13 and later voter measures meant special taxes to need two-thirds no matter who puts them on the ballot. Court rulings opened a gap that interest groups have used.',
        'You want to make it harder to add earmarked local taxes in a state with high sales, property-transfer, and utility taxes. Supporters say local governments imposed more than 2,000 new or higher taxes in the past decade.',
        'You think transfer taxes on home and apartment sales, such as Measure ULA, have discouraged building. You want future taxes like that to need broad agreement.',
        'You see it as a compromise. It is narrower than HJTA\'s original initiative, it leaves existing taxes alone, and nearly every legislator voted to place it on the ballot.',
      ],
      argumentsAgainst: [
        'It is minority rule: a measure with 66% support could still fail. Opponents say one-third of voters plus one would control local decisions on fire, police, libraries, and roads.',
        'Local services are funded locally. With federal health cuts and state budget pressure, communities need ways to raise money for services they choose, and citizen initiatives are often the only path when councils won\'t act.',
        'It will push future renewals of majority-approved taxes toward a cliff. Programs that voters already support could lapse when they come up for extension.',
        'Firefighters, teachers, and nurses oppose it. The California Democratic Party opposes it even though legislators placed it on the ballot as part of a deal to avoid a broader measure.',
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
      'Federally Qualified Health Centers are nonprofit community clinics that serve mostly low-income, Medi-Cal, and uninsured patients. They provide primary, dental, mental-health, prenatal, and school-based care. Prop 44 would require each one to spend at least 90% of its total revenue every year on "program services." Any shortfall would be paid to the state as a penalty. The LAO says these clinics now report spending about 80% of revenue on health care services on average, so many would fall short unless they change their spending or reporting.',
      'The fight is between the health-care workers union SEIU-UHW, which wrote and funds the measure, and nearly the entire clinic and medical establishment. Supporters say clinics divert public money to executive pay, overhead, and surpluses. Opponents say the penalty would take about $1.7 billion from clinics in the first year and force closures just as federal Medicaid cuts hit. The penalty is measured against revenue, not expenses, so a clinic that saves a reserve could be penalized.',
    ],
    introParagraphs: [
      'Prop 44 is a citizen initiative statute (the "Clinic Funding Accountability and Transparency Act") from SEIU-United Healthcare Workers West. The union turned to the ballot after a similar bill failed in the Legislature. The California Primary Care Association sued in federal court in April 2026 to keep it off the ballot and lost. In September the association and five health centers filed a federal racketeering suit against SEIU-UHW and its president Dave Regan. They allege Regan offered to drop Prop 44 if clinics backed a drive to unionize about 25,000 clinic workers. The union calls the claims false, and they are unproven allegations. SEIU-UHW has used ballot measures against health-care employers before, including three failed dialysis propositions.',
      'Through Aug 2, 2026, the No side (CPCA Advocates) had raised about $34.9 million and the Yes side (SEIU-UHW) about $16.9 million. PPIC\'s Sept 4–10 survey found Prop 44 losing badly among likely voters, 34% yes to 61% no, with majorities opposed across parties. The official ballot label lists supporters as "None submitted." The ballot argument in favor is signed by the initiative proponent and a clinic worker.',
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
        'If you or your kids get care at a community health center or a school-based clinic run by one, this measure changes how that clinic\'s budget is policed.',
        'Most voters won\'t pay anything directly. Enforcement is paid for by fees on clinics, but clinic finances are largely public money through Medi-Cal and federal grants.',
        'It sits in the middle of a labor dispute. The sponsoring union says it is about patient care. Clinics allege in court that it is leverage for unionizing their workers.',
        'Penalty money is held five years, refundable if a clinic comes into compliance. After that the Legislature can spend it on clinic workforce training and retention.',
      ],
      mechanismBullets: [
        'Covers nonprofit Federally Qualified Health Centers and FQHC "look-alikes." Tribal and urban Indian clinics are excluded.',
        '"Mission Spend Ratio" = program-service expenses (IRS Form 990, Part III line 4e) ÷ total revenue (Form 990, Part I line 12). The Attorney General may issue guidance on which costs count.',
        'Clinics below 90% pay an annual penalty to the Department of Public Health equal to the shortfall. It goes into a Mission Spend Ratio Penalty Account held in escrow for five years and is refundable if the clinic complies.',
        'Waivers are available for unexpected or exceptional circumstances, or when compliance would threaten the clinic\'s survival as a going concern.',
        'New annual registration fee covers enforcement. Reporting failures bring fines of $5,000, then $10,000 a month. False reports or artificially inflating the ratio can be prosecuted criminally.',
        'LAO: the Attorney General would define qualifying spending, and the state would review reports and investigate. Enforcement costs run in the low tens of millions per year.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'Clinics run mostly on taxpayer money. The sponsors say some spend less than half their funding on patient care while paying high executive salaries, and a clear spending floor makes them accountable.',
        'Federal Medicaid cuts make every safety-net dollar count. Prop 44 pushes money toward front-line care, staffing, interpretation, transportation, and equipment.',
        'Penalties aren\'t lost. They are refundable if a clinic complies within five years, and otherwise go to training and keeping clinic health workers.',
        'It adds public reporting, so patients and taxpayers can compare how clinics spend their money.',
      ],
      argumentsAgainst: [
        'Doctors\', pediatricians\', nurses\', and clinic groups say it would take about $1.7 billion from clinics in year one and force service cuts or closures. More patients would end up in emergency rooms.',
        'The ratio uses revenue, not expenses, so building reserves, paying for buildings, or holding grant money for next year can count against a clinic. Critics call that a flaw in the drafting.',
        'One union wrote and funded it, and a federal lawsuit alleges it is leverage in an organizing campaign. Health-care finance rules shouldn\'t come out of a labor fight.',
        'Clinics are already heavily regulated by federal FQHC rules and Medi-Cal. A blunt 90% formula could punish investments in telehealth, IT, and expansion that help patients.',
        'The LAO puts state enforcement costs in the tens of millions a year, and the effects on clinic closures and Medi-Cal costs are uncertain.',
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
      'The California Environmental Quality Act (CEQA) requires agencies to study and disclose a project\'s environmental harms before approving it, and lets the public sue if they skip steps. Prop 45 creates an optional fast track for projects it calls "essential": most housing (including market-rate), transportation, water, health facilities, schools, broadband, public safety, wildfire, and clean energy. It sets hard deadlines, caps comment periods, narrows what courts can review, and stops judges from halting a whole project over one flawed section.',
      'The stakes are a classic California trade-off. Supporters say delay and litigation add to the cost of homes, power lines, and public works. Opponents, including environmental groups, the CA Labor Federation, nurses, and the CA Democratic Party, say it hollows out the state\'s main environmental law. They also warn its broadband definition could cover data centers, which supporters deny. Because it is a statute that locks in other laws as of Dec 31, 2025, the Legislature could change it only with a two-thirds vote.',
    ],
    introParagraphs: [
      'Prop 45 is a citizen initiative statute (the "Building an Affordable California Act") sponsored by the California Chamber of Commerce. It follows the 2025 budget-trailer bills AB 130 and SB 131. Those bills exempted much infill housing from CEQA and loosened it for some other projects, such as advanced manufacturing. Business groups said they did not go far enough, and environmental groups are pushing SB 954 in 2026 to narrow SB 131. Prop 45 would go much further than either for its covered project types.',
      'Through Aug 2, 2026, Yes committees had raised about $18.4 million and No committees about $9.2 million. Support has dropped sharply. CalChamber reported 73% support in PPIC\'s July 2026 environment survey. PPIC\'s Sept 4–10 survey, using the ballot label, found 49% yes to 46% no among likely voters, and KQED reports the data-center argument has hurt the Yes side.',
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
        'Renters and would-be buyers: the Yes case is that faster approvals mean more homes and lower costs. Prop 45 has no affordability requirement, so market-rate housing qualifies.',
        'Neighbors of proposed projects: comment periods shrink to a fixed maximum (45 days for a draft EIR), and lawsuits face tighter limits. Your leverage over a nearby project would drop.',
        'Ratepayers and taxpayers: grid, water, and transit projects could get built sooner and more cheaply, but agencies face new near-term costs and possibly later cleanup costs.',
        'It is optional for applicants. Developers and agencies can still use regular CEQA, and they will pick whichever path is faster for them.',
      ],
      mechanismBullets: [
        'Eligible "essential" projects: housing, clean energy, water, public health, public safety, broadband (including facilities "incidental to and enable the operation of" internet service), education facilities, and transportation. High-speed rail is excluded.',
        'Deadlines: 30 days to rule an application complete (otherwise it is deemed complete), then 30 days to pick the review type. An EIR must be decided within 365 business days. Missed deadlines let the applicant force a hearing and sue.',
        'Review changes: impacts are judged under rules in place when the application was filed. The applicant may offer a single alternative. Tribal consultation is limited to federally recognized tribes. Comment periods are capped at 20 days for negative declarations and 45 days for draft EIRs, extendable only by a court.',
        'Lawsuits must be filed within 30 days and resolved, including appeals, within 270 days (a judge may add up to 90 more). Claims are limited to objective existing law, and courts may halt only the defective part of a project, not rescind the whole approval.',
        'Labor: prevailing wage applies to essential housing only for buildings over 85 feet. Broadband projects keep existing labor requirements.',
        'References to other state laws are frozen as they stood on Dec 31, 2025. The Legislature can amend the act only by a two-thirds vote, and only in ways that further its purposes.',
      ],
      argumentsForHeading: 'Reasons to vote Yes',
      argumentsAgainstHeading: 'Reasons to vote No',
      argumentsFor: [
        'California\'s approval process is slow and unpredictable. Supporters cite permitting delays adding more than $75,000 to a new home\'s cost, and enforceable deadlines put pressure on agencies to decide.',
        'CEQA lawsuits are often filed by neighbors, competitors, or labor to win concessions or block housing. Narrowing remedies and limiting cases to objective law reduces that leverage.',
        'It covers infrastructure that climate goals depend on, including clean-energy, transmission, transit, and water projects, plus hospitals and schools. It also extends 2025\'s housing reforms to more project types.',
        'No project is exempted from review. Environmental laws still apply and local governments keep the power to say no. The measure mainly changes timelines and litigation.',
      ],
      argumentsAgainst: [
        'Environmental, health, and labor groups say it guts CEQA\'s core protections: fewer alternatives, capped public comment, and courts that can\'t stop a flawed project. That means more pollution near homes and schools.',
        'It may reach far beyond housing. Critics say the broadband language could cover data centers, and the measure locks itself in with a two-thirds requirement for legislative fixes.',
        'The Legislature already moved in 2025 (AB 130/SB 131) with targeted, affordability-linked exemptions. A business-written ballot statute is a blunt instrument that is hard to correct.',
        'It narrows tribal consultation to federally recognized tribes and weakens prevailing-wage rules for most housing. The LAO says it adds tens of millions to over $100 million a year in near-term government costs.',
        'Nothing requires lower rents or utility bills. Opponents note utility and corporate funding and say the savings go to developers.',
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
