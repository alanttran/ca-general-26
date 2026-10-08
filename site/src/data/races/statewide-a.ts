import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Statewide executive offices, group A: Governor, Lieutenant Governor, Secretary of State, Controller.
 * Candidate names / designations follow the San Diego County sample ballot (ZIP 92126).
 * Primary shares: California Secretary of State certified Statement of Vote, June 2, 2026 primary
 * (https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/complete-sov.pdf).
 * Money figures: CalMatters campaign-finance tables built from Secretary of State data, last updated Sept 28, 2026
 * (excludes donations under $100 and transfers from prior committees).
 */

const SOS_VOTER_GUIDE_STATEMENTS = 'https://vig.cdn.sos.ca.gov/2026/general/pdf/candidate-statements.pdf';

export const RACES_STATEWIDE_A: Race[] = [
  // ───────────────────────────── GOVERNOR ─────────────────────────────
  {
    id: 'governor',
    categoryId: 'statewide',
    title: 'Governor',
    tldrLabel: 'Governor',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The governor is California’s chief executive: he or she oversees most state departments and agencies, proposes the annual state budget, signs or vetoes every bill the Legislature passes, appoints judges and commission members, and directs state resources in emergencies such as wildfires (per the official state voter guide).',
      'Gavin Newsom is term-limited, so this is the first open governor’s race since 2018. The winner will set the state’s posture toward the Trump administration on immigration, federal funding and lawsuits, and will decide how hard to lean on housing, energy, tax and homelessness policy during a period of high living costs, with a Democratic supermajority in the Legislature either backing or blocking those choices.',
    ],
    introParagraphs: [
      'In the June 2 top-two primary, Xavier Becerra finished first with 28.0% and Steve Hilton second with 24.6%, narrowly ahead of Democrat Tom Steyer (22.8%) and Republican Chad Bianco (10.2%), per the certified Statement of Vote. Newsom, Kamala Harris and Steyer all endorsed Becerra after the primary; Donald Trump endorsed Hilton in April.',
      'The two independent September polls cited below have Becerra ahead by roughly 22 to 25 points; a Hilton-campaign poll in August found a narrower race. The campaigns’ only scheduled televised debate was held September 30 on CNN. The race turns on cost of living (Hilton’s $150,000 income-tax exemption and $3 gas pledge versus Becerra’s utility and insurance rate freeze and housing push), Trump, immigration, and how voters weigh Becerra’s long establishment résumé against Hilton’s promise of a clean break from one-party rule.',
    ],
    readingLinks: [
      {
        label: 'CNN gubernatorial debate, Sept 30, 2026 (CalMatters takeaways)',
        url: 'https://calmatters.org/politics/2026/09/california-general-election-gubernatorial-debate-cnn/',
        summary:
          'Becerra tied Hilton to Trump on taxes, immigration, AI and housing; Hilton tied Becerra to Newsom on homelessness and costs, proposed building ten new cities, and said he would wait before regulating AI. Immigration produced the sharpest exchange.',
      },
      {
        label: 'KQED: In the only scheduled debate, Trump was the main character',
        url: 'https://www.kqed.org/news/12102300/in-becerra-and-hiltons-only-scheduled-debate-trump-was-the-main-character',
        summary: 'Analysis of how each candidate used Trump and Newsom as foils during the hour-long debate.',
      },
      {
        label: 'SF Standard: Hilton–Becerra debate takeaways',
        url: 'https://sfstandard.com/2026/09/30/hilton-becerra-debate-takeaways-california-governor/',
        summary: 'Blow-by-blow on immigration, the HHS migrant-children dispute, homelessness, and Becerra’s repeated references to Trump.',
      },
      {
        label: 'FOX26/KMPH: Hilton, Becerra clash over affordability, Trump and Newsom',
        url: 'https://kmph.com/news/local/hilton-becerra-clash-over-affordability-trump-and-newsom-in-california-governor-debate',
        summary: 'Topic-by-topic summary: taxes, immigration, AI and data centers, water and agriculture, and closing pitches.',
      },
      {
        label: 'LAist/CalMatters voter guide: where Becerra and Hilton stand',
        url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-governor',
        summary: 'Side-by-side positions on housing, homelessness, taxes, energy, immigration, public safety, education and Trump.',
      },
      {
        label: 'CalMatters: Can Steve Hilton rebrand himself again? (via KPBS)',
        url: 'https://www.kpbs.org/news/politics/2026/07/07/who-is-steve-hilton-heres-how-he-has-rebranded-himself-multiple-times',
        summary: 'Profile of Hilton’s shifting public identity from British Conservative strategist to Fox News host to gubernatorial candidate.',
      },
    ],
    polling: [
      {
        resultDisplay: 'Becerra 58%, Hilton 33% (likely voters)',
        pollsterCredit: 'Berkeley Institute of Governmental Studies (IGS) Poll',
        fieldDatesLabel: 'September 2026 (released late September)',
        sourceUrl: 'https://kmph.com/news/local/becerra-widens-lead-over-hilton-in-california-governors-race-berkeley-igs-poll-finds',
      },
      {
        resultDisplay: 'Becerra 60%, Hilton 38% (likely voters)',
        pollsterCredit: 'Public Policy Institute of California (PPIC) Statewide Survey',
        fieldDatesLabel: 'Sept 4–10, 2026',
        sourceUrl: 'https://www.ppic.org/wp-content/uploads/crosstabs-likely-voters-0926.pdf',
      },
      {
        resultDisplay: 'Becerra 55%, Hilton 37% (likely voters, 7% undecided)',
        pollsterCredit: 'Berkeley IGS Poll / Los Angeles Times',
        fieldDatesLabel: 'Aug 3–9, 2026',
        sourceUrl: 'https://abc7.com/post/xavier-becerra-maintains-commanding-lead-over-steve-hilton-california-governor-race-poll-shows/19674942/',
      },
    ],
    candidates: [
      {
        id: 'xavier-becerra',
        photoSlug: 'xavier-becerra',
        name: 'Xavier Becerra',
        party: 'D',
        role: 'Voting Rights Attorney',
        campaignUrl: 'https://www.xavierbecerra2026.com',
        bio: [
          'Becerra served about 24 years in the U.S. House representing Los Angeles (1993–2017), was California Attorney General from 2017 to 2021 (during which the state sued the first Trump administration well over 100 times), and then served as U.S. Secretary of Health and Human Services under President Biden. He is the son of Mexican immigrants and would be California’s first Latino governor in about 150 years.',
          'His campaign centers on affordability (a state of emergency to freeze utility and insurance rates, crack down on price gouging), housing, and opposing Trump. He has drawn criticism for running a cautious, low-profile campaign with few public appearances, and for HHS’s handling of unaccompanied migrant children during his tenure.',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '✓ Declare an emergency to fund ~40,000 approved affordable units; push cities to zone more; down-payment aid; curb mass corporate home-buying',
            comparison: 'Leans on public money and state pressure on cities, whereas Hilton would cut fees and CEQA lawsuits and open land for suburban “starter homes” and ten new cities.',
          },
          {
            topic: 'Cost of living & taxes',
            position: '~ Supports a progressive income tax and extending the high-earner rate for schools; opposes Prop 40 billionaire tax; has not ruled out tax increases; rejects eliminating the gas tax',
            comparison: 'Hilton would exempt the first $150,000 of income from state tax and cut the gas tax in half; Becerra says that mostly benefits the wealthy and forces cuts elsewhere.',
          },
          {
            topic: 'Energy & climate',
            position: '~ Backs clean-energy goals but open to revising them (including the 2035 gas-car sales ban) if they make energy unaffordable; wants refinery capacity maintained during the transition',
            comparison: 'Softer than Newsom’s hard line on climate deadlines, but far from Hilton’s plan to end greenhouse-gas mandates and expand natural gas.',
          },
          {
            topic: 'Homelessness & public safety',
            position: '~ Ongoing state funding for rental assistance and services with a public dashboard; stops short of arrests for refusing shelter; voted for Prop 36 (2024) and says he would fund it',
            comparison: 'Hilton calls street camping illegal and wants police to clear all encampments and funding to favor sober housing over low-barrier shelters.',
          },
          {
            topic: 'Immigration & Trump',
            position: '✓✓ Defends the state sanctuary law; makes opposing Trump the core of his pitch, citing his AG lawsuits',
            comparison: 'Hilton says he would follow the sanctuary law yet has been reluctant to say whether he opposes mass deportation, and expects a cooperative relationship with Trump.',
          },
          {
            topic: 'Health care & education',
            position: '✓ Expand coverage (has moved away from single-payer), fund health-worker recruitment; no major education plan released; supports social-media limits for under-16s',
            comparison: 'Hilton would end Medi-Cal for undocumented immigrants, back vouchers in failing districts, and make it easier to fire teachers.',
          },
        ],
        money:
          'Cycle total about $33.5M raised, plus about $19M in outside spending supporting him (largest: Working Families for Healthy Communities, $15.3M); as of Sept 28, 2026 (CalMatters / Secretary of State data). Capitol Weekly reported over $6.2M cash on hand at June 30 and about $6M raised July 1 to mid-August (as of Aug 18, 2026).',
        endorsements:
          'Gov. Gavin Newsom, former VP Kamala Harris and Tom Steyer (all after the June primary); California Faculty Association, Equality California and Planned Parenthood California (per CalMatters/LAist voter guides), plus labor and Latino legislative leaders who backed him early in the primary.',
        redFlags: [
          {
            text: 'His former chief of staff, Sean McCluskie, pleaded guilty to taking about $225,000 from Becerra’s dormant state campaign account through a scheme with Newsom’s ex-chief of staff Dana Williamson. Prosecutors did not charge Becerra and the indictment indicated he had no knowledge of the scheme; in a KTLA interview he said he was “aware of the payments” and “had authorized them” after advisers asked about managing the dormant account, while saying he was never fully apprised of the scheme.',
            sources: [
              { label: 'CalMatters (Nov 2025)', url: 'https://calmatters.org/politics/2025/11/newsom-chief-of-staff-indicted/' },
              { label: 'KTLA interview with Becerra', url: 'https://ktla.com/news/politics/inside-california-politics/exclusive-becerra-says-investigators-didnt-fully-unform-him-of-case-against-former-staff/amp/' },
              { label: 'CalMatters: Williamson pleads guilty (May 2026)', url: 'https://www.mv-voice.com/calmatters/2026/05/14/former-newsom-chief-of-staff-pleads-guilty-to-scheme-that-bled-money-from-becerras-account/' },
            ],
          },
          {
            text: 'Hilton and conservative critics blame Becerra’s HHS for placing unaccompanied migrant children with inadequately vetted sponsors; Becerra denies it and says he rebuilt child-protection systems. The dispute is unresolved in independent reporting, and the specific numbers Hilton cites (e.g., about 319,000 children “unaccounted for”) come from a DHS inspector-general audit about ICE monitoring, not an HHS finding.',
            sources: [
              { label: 'ABC7 on Hilton’s allegations and Becerra’s response', url: 'https://abc7.com/post/california-gubernatorial-candidate-steve-hilton-accuses-xavier-becerra-putting-unaccompanied-migrant-children-risk/19631499/' },
            ],
          },
        ],
        notes: [
          'On the sample ballot his designation is “Voting Rights Attorney.”',
          'CalMatters published an August 20, 2026 profile describing his campaign as “playing it safe” and “not making promises”: https://calmatters.org/california-voter-guide-2026/governor/',
          'Becerra and Hilton both oppose Prop 40 (billionaire tax) per the CalMatters/LAist guides; Newsom and Becerra are listed supporters of Prop 2 on the ballot label.',
        ],
      },
      {
        id: 'steve-hilton',
        photoSlug: 'steve-hilton',
        name: 'Steve Hilton',
        party: 'R',
        role: 'Small Business Owner',
        campaignUrl: 'https://www.stevehiltonforgovernor.com',
        bio: [
          'Hilton, who was born in Britain, was a senior strategist to UK Prime Minister David Cameron (2010–2012), co-founded a political crowdfunding platform in Silicon Valley, and hosted Fox News’s “The Next Revolution” (2017–2023). He has never held elected office.',
          'He pitches himself as the change candidate against “one-party rule,” promising to cut gas to about $3 a gallon, halve the gas tax, exempt the first $150,000 of income from state income tax, roll back climate mandates, and limit CEQA lawsuits. Trump endorsed him in April 2026; he has tried to give Democrats and independents “a permission slip” to vote for a Republican anyway.',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '✓ “Bring back the starter home”: cut fees and regulations, limit CEQA suits, first-time-buyer loan program, build ten new cities on undeveloped land',
            comparison: 'Pushes supply through deregulation and suburban growth rather than Becerra’s state-funded affordable units and pressure on cities.',
          },
          {
            topic: 'Cost of living & taxes',
            position: '✓✓ No state income tax on the first $150,000 of earnings, flat rate above, halve the gas tax, offset by cutting about a third of state spending; opposes Prop 40',
            comparison: 'Far larger tax cut than anything Becerra offers; he has not explained how to pass it through a Democratic supermajority Legislature.',
          },
          {
            topic: 'Energy & climate',
            position: '✗ End greenhouse-gas mandates and solar/wind purchase requirements, roll back Low Carbon Fuel Standard and cap-and-trade, expand natural gas; would fire the CARB chair',
            comparison: 'Would reverse California’s climate framework; Becerra only wants flexibility if costs get too high.',
          },
          {
            topic: 'Homelessness & public safety',
            position: '✓ Clear all encampments, sober housing first, reopen closed prisons, reduce early releases, loosen limits on police stops and gun rules',
            comparison: 'More enforcement-forward than Becerra, who funds services and Prop 36 but will not back arrests for refusing shelter.',
          },
          {
            topic: 'Immigration & Trump',
            position: '~ Would overturn the sanctuary law and end Medi-Cal for undocumented immigrants, yet said at the debate he would follow the law and prioritize dangerous offenders; reluctant to say he disagrees with mass deportation',
            comparison: 'Expects cooperative relations with Trump and more federal aid; Becerra frames Trump as a threat to be litigated.',
          },
          {
            topic: 'Education',
            position: '✓ Phonics-based reading, hold back non-reading third graders, easier teacher firing, public funds for private options in failing districts; opposes state transgender-athlete protections',
            comparison: 'Becerra has not released major education proposals and backs current public-school funding.',
          },
        ],
        money:
          'Cycle total about $27.2M raised, with only about $26.5K in outside support, as of Sept 28, 2026 (CalMatters / Secretary of State data). Capitol Weekly reported about $2.1M cash and $1.4M in unpaid bills at June 30, about $1.2M raised July 1 to mid-August, and a small-donor base his campaign puts above 100,000 donors (as of Aug 18, 2026).',
        endorsements:
          'President Donald Trump (April 6, 2026), Nisei Farmers League, Israeli-American Civic Action Network (per CalMatters voter guide); Gloria Romero is his Lt. Governor running mate (they are elected separately). The state GOP convention did not endorse him or Bianco in April.',
        redFlags: [],
        notes: [
          'His signature tax plan assumes cutting about a third of state spending; analysts have questioned whether a governor could enact it without legislative buy-in.',
          'CalMatters traces how Hilton has “rebranded himself multiple times,” from a socially liberal UK Tory strategist to a Fox News populist: https://www.kpbs.org/news/politics/2026/07/07/who-is-steve-hilton-heres-how-he-has-rebranded-himself-multiple-times',
          'At the CNN debate he said “All you ever say is Trump, Trump, Trump,” and pressed Becerra on his “A for effort” grade for Newsom on homelessness.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Becerra', '◐', 'Progressive Left voters will back the Democrat who is defending the sanctuary law and suing Trump, while noting they would have preferred a bolder climate and single-payer stance than Becerra’s flexibility on the 2035 gas-car ban.'],
      ['EL', 'Becerra', '●', 'Establishment Liberals value Becerra’s attorney-general and HHS résumé, institutional litigation against Trump, and cautious, governing-focused style.'],
      ['DM', 'Becerra', '●', 'Democratic Mainstays see a longtime Los Angeles Democrat with labor and Latino-caucus backing who would be California’s first Latino governor in about 150 years.'],
      ['OL', 'Becerra', '◐', 'Outsider Left voters distrust his establishment ties and the campaign-account scandal around his old staff, but Hilton’s Trump alliance, Medi-Cal cuts and climate rollbacks are far more objectionable.'],
      ['SS', 'Hilton', '○', 'Stressed Sideliners, who tend to be financially squeezed and distrustful of both parties, may respond to Hilton’s concrete $3 gas and income-tax-cut promises, though many will doubt a governor can deliver them.'],
      ['AR', 'Hilton', '◐', 'Ambivalent Right voters favor lower taxes, deregulation and housing supply, but are uneasy about Hilton’s Trump endorsement and Fox News background.'],
      ['PR', 'Hilton', '●', 'Populist Right voters will back the Trump-endorsed outsider who attacks one-party rule, high gas prices, sanctuary policies and Medi-Cal for undocumented immigrants.'],
      ['CC', 'Hilton', '●', 'Committed Conservatives are drawn to his flat-tax-style income tax cut, cap-and-trade and fuel-standard repeal, school-choice funding and CEQA limits.'],
      ['FF', 'Hilton', '◐', 'Faith and Flag Conservatives like his stands on school choice, transgender athletes, tough policing and Trump, though he has said little about faith or abortion in this race.'],
    ]),
    counterArguments: [
      'OL (Becerra ◐): But consider Hilton’s argument that Becerra is the continuity candidate of the same Democratic establishment that presided over high housing costs and homelessness, because Becerra graded Newsom “A for effort” on homelessness at the debate.',
      'CC (Hilton ●): But consider that his headline $150,000 income-tax exemption requires a Democratic-controlled Legislature to pass and cuts roughly a third of state spending, because a governor cannot change tax law alone and he has not named the cuts.',
    ],
  },

  // ───────────────────────────── LIEUTENANT GOVERNOR ─────────────────────────────
  {
    id: 'lt-governor',
    categoryId: 'statewide',
    title: 'Lieutenant Governor',
    tldrLabel: 'Lt. Governor',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The lieutenant governor assumes the governor’s duties if the governor is impeached, dies, resigns, is removed or is out of state; serves as president of the state Senate with a tie-breaking vote; chairs the Commission for Economic Development; and sits on the State Lands Commission, the Ocean Protection Council and the boards that govern the University of California and Cal State systems (per the official voter guide).',
      'CalMatters describes the job as largely ceremonial; its real leverage is a vote on higher-education boards that set tuition and campus policy and on coastal land decisions, plus being first in line if a governor leaves office. Lieutenant Governor Eleni Kounalakis is running for Treasurer, so voters are choosing her successor.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Fiona Ma (the current State Treasurer) took 19.1% and Republican Gloria Romero 17.8%, ahead of Democrat Josh Fryday (14.7%) and Michael Tubbs (13.3%), per the certified Statement of Vote. Romero is the running mate of Republican governor candidate Steve Hilton, though the two offices are voted on separately.',
      'No independent public poll of this race turned up in the sources reviewed. Ma leads in institutional support and money; Romero is a former Democratic state Senate majority leader who became a Republican in 2024 and endorsed Trump. The central choices are higher-education policy (tuition, school choice, campus climate) and how much voters weigh the 2021 sexual-harassment lawsuit settled by the state in 2024.',
    ],
    readingLinks: [
      {
        label: 'LAist/CalMatters voter guide: Lieutenant Governor',
        url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-lieutenant-governor',
        summary: 'Background, endorsements and positions for Ma and Romero.',
      },
      {
        label: 'CalMatters: California’s lieutenant governor race (Apr 2026)',
        url: 'https://calmatters.org/politics/2026/04/california-lieutenant-governor-race/',
        summary: 'Explains the job’s limited powers and the candidates’ approaches to UC/CSU costs, school vouchers and the 2021 lawsuit.',
      },
      {
        label: 'Official voter guide candidate statements (Ma, Romero)',
        url: SOS_VOTER_GUIDE_STATEMENTS,
        summary: 'Statements as submitted by the candidates and printed in the state voter guide.',
      },
    ],
    candidates: [
      {
        id: 'fiona-ma',
        photoSlug: 'fiona-ma',
        name: 'Fiona Ma',
        party: 'D',
        role: 'State Treasurer/CPA',
        campaignUrl: 'https://fionama.com',
        bio: [
          'Ma has been California State Treasurer since 2019. A CPA since 1992, she previously served on the San Francisco Board of Supervisors, four terms in the Assembly (including a leadership role), and the Board of Equalization. She is the oldest child of immigrant parents and the daughter of a public-school art teacher.',
          'As treasurer she says she financed a record number of affordable-housing units, expanded down-payment assistance and helped distressed hospitals. For lieutenant governor she proposes making higher education more affordable, expanding paid internships, and raising Cal State revenue from sources outside the general fund, such as leasing underused campus space. She is a listed supporter of Prop 37 on the ballot.',
        ],
        scorecard: [
          {
            topic: 'Higher education (UC/CSU boards)',
            position: '✓ Lower costs, expand paid internships and career pathways; find CSU revenue outside the general fund (leasing underused campus facilities)',
            comparison: 'Focuses on partnerships and affordability; Romero focuses on tuition caps, faculty-pay and housing-allowance transparency, and more student seats on the UC Regents.',
          },
          {
            topic: 'Housing',
            position: '✓ Record affordable-housing financing as treasurer, expanded down-payment help; supports Prop 37 middle-income home-loan initiative',
            comparison: 'Relies on state financing tools; Romero’s statement emphasizes cutting red tape and rolling back politicized commissions rather than new programs.',
          },
          {
            topic: 'Trump / federal pushback',
            position: '✓ Frames the office as a check on the Trump administration',
            comparison: 'Romero endorsed Trump in 2024 and runs on Hilton’s ticket with Reform California.',
          },
          {
            topic: 'Education choice & standards',
            position: '✗ Endorsed by CTA and CFT, which oppose vouchers; her statement does not call for school choice',
            comparison: 'Romero authored school-choice reforms and supports public funds for private schools, which unions strongly oppose.',
          },
          {
            topic: 'Ethics & transparency',
            position: '~ Says she focuses on accountability and cutting waste, but the 2021 harassment suit settled by the state for $350,000 is a live campaign issue',
            comparison: 'Romero has no comparable documented controversy in the sources reviewed.',
          },
        ],
        money:
          'About $3.43M raised for this race, plus about $107K in independent support and about $753K in independent opposition (nearly all from “Taxpayers Against Sexual Harassment by Government Officials”), as of Sept 28, 2026 (CalMatters / Secretary of State data).',
        endorsements:
          'California Labor Federation, State Building and Construction Trades Council, AFSCME, California Democratic Party (per her official statement), Equality California, Planned Parenthood, California Professional Firefighters, California Nurses Association, CTA, CFT, California Farm Bureau, California Hispanic Chambers of Commerce, San Jose Mercury News and Bakersfield Californian (per her state voter-guide statement, which the SOS does not fact-check); CalMatters notes the state party did not make a primary endorsement.',
        redFlags: [
          {
            text: 'A former Tax Credit Allocation Committee director sued Ma in 2021 alleging sexual harassment. The state paid $350,000 to settle in 2024, a court had earlier dismissed the wrongful-termination and discrimination claims, and Ma has denied the allegations and called the suit baseless and “frivolous.” An independent group has spent about $753K attacking her over it.',
            sources: [
              { label: 'NBC Bay Area (settlement)', url: 'https://nbcbayarea.com/news/california/california-employee-settle-sexual-harassment-claims-state-treasurer/3639597' },
              { label: 'Bond Buyer', url: 'https://bondbuyer.com/news/california-reaches-settlement-agreement-in-sexual-harassment-case-against-treasurer' },
              { label: 'CalMatters (Apr 2026)', url: 'https://calmatters.org/politics/2026/04/california-lieutenant-governor-race/' },
            ],
          },
        ],
        notes: [
          'She is term-limited as Treasurer; Eleni Kounalakis is the Democrat running for that seat.',
        ],
      },
      {
        id: 'gloria-romero',
        photoSlug: 'gloria-romero',
        name: 'Gloria Romero',
        party: 'R',
        role: 'Educator/Businesswoman',
        campaignUrl: 'https://gloriajromero.com',
        bio: [
          'Romero represented East Los Angeles for nearly 12 years in the state Legislature as a Democrat and was the first woman to serve as state Senate Majority Leader (2005–2008). She left the Democratic Party for the Republican Party in 2024, citing education reform and school choice, and endorsed Donald Trump that year.',
          'She runs on restoring education standards, a “bold economic plan,” reining in politicized commissions, defending Title IX in girls’ sports and fighting antisemitism on campuses. She is Steve Hilton’s running mate and is also backed by Reform California.',
        ],
        scorecard: [
          {
            topic: 'Higher education (UC/CSU boards)',
            position: '✓ Curb UC/CSU tuition increases, cut remedial coursework to speed graduation, publish faculty salaries and housing allowances, add student seats on the UC Regents',
            comparison: 'Accountability and transparency framing versus Ma’s revenue-partnership and affordability approach.',
          },
          {
            topic: 'Education choice & standards',
            position: '✓✓ Authored school-choice reforms; supports vouchers; says too many students are not proficient in basic math and reading',
            comparison: 'Directly opposite Ma, whose major endorsers include the teachers’ unions.',
          },
          {
            topic: 'Housing & affordability',
            position: '~ Blames one-party rule for high housing, gas and energy costs; promises a business-friendly economic plan but few specific housing proposals in her statement',
            comparison: 'Ma points to concrete financing she carried out as treasurer.',
          },
          {
            topic: 'Public safety & social issues',
            position: '✓ Says public safety has been weakened; supports Title IX limits in girls’ sports; criticizes Democrats on gender identity issues',
            comparison: 'Ma backs Equality California and Planned Parenthood priorities.',
          },
          {
            topic: 'Working with the Legislature',
            position: '~ Pledges to meet with every Democratic colleague individually to find overlap',
            comparison: 'Ma has deep ties inside the Democratic Party and labor but also the 2021 lawsuit baggage.',
          },
        ],
        money:
          'About $256K raised, including $50,000 of her own money, plus $10,000 from Reform Local Government PAC, as of Sept 28, 2026 (CalMatters / Secretary of State data).',
        endorsements:
          'California Republican Party, Reform California, Steve Hilton (running mate); per LAist/CalMatters voter guides.',
        redFlags: [],
        notes: [
          'Because she endorsed Trump in 2024, Democrats are likely to portray her as a MAGA candidate in a state that heavily favors Democrats.',
          'No documented ethics or legal controversy about Romero turned up in the sources reviewed.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Ma', '◐', 'Progressive Left voters side with Ma’s labor and Planned Parenthood backing and opposition to school vouchers, while some resent her treasurer-office baggage and establishment profile.'],
      ['EL', 'Ma', '●', 'Establishment Liberals value Ma’s CPA credentials, long experience as supervisor, assemblymember and treasurer, and her broad coalition of unions, business groups and newspapers.'],
      ['DM', 'Ma', '●', 'Democratic Mainstays favor the labor-endorsed Democrat who positions the office as a check on the Trump administration over a former Democrat who endorsed Trump.'],
      ['OL', 'Ma', '○', 'Outsider Left voters are wary of a career insider with a settled harassment lawsuit, but Romero’s school-vouchers push and Trump endorsement are less acceptable.'],
      ['SS', 'Ma', '○', 'Stressed Sideliners paying attention only to tuition and cost-of-living pitches will find Ma’s affordability and internships promises somewhat more concrete than Romero’s accountability themes, though neither is a clear draw.'],
      ['AR', 'Romero', '◐', 'Ambivalent Right voters like her school-choice record, a bipartisan-sounding pledge to meet each legislator, and her focus on accountability, though her Trump endorsement may give some pause.'],
      ['PR', 'Romero', '◐', 'Populist Right voters like a former Democrat who left over education and attacks “Sacramento insiders,” even though she is a longtime legislator herself.'],
      ['CC', 'Romero', '●', 'Committed Conservatives back her school-choice and Title IX positions, call to rein in regulatory commissions, and her Republican Party and Reform California endorsements.'],
      ['FF', 'Romero', '◐', 'Faith and Flag Conservatives welcome her stand on girls’ sports and gender identity, though the race itself involves few direct faith-and-culture levers.'],
    ]),
    counterArguments: [
      'OL (Ma ○): But consider that the 2021 harassment lawsuit ended in a $350,000 taxpayer settlement and Ma has repeatedly denied wrongdoing, because Outsider Left voters who prize accountability may weigh that over party label.',
      'AR (Romero ◐): But consider that the lieutenant governor’s main lever on schools is a vote on UC and CSU boards, because her K-12 voucher agenda cannot be implemented from this office.',
    ],
  },

  // ───────────────────────────── SECRETARY OF STATE ─────────────────────────────
  {
    id: 'secretary-state',
    categoryId: 'statewide',
    title: 'Secretary of State',
    tldrLabel: 'Secretary of State',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Secretary of State is California’s chief elections officer: she oversees statewide elections and certifies results, provides public access to campaign and lobbying financial information, maintains business filings, regulates notaries and preserves state historical records (per the official voter guide).',
      'The office writes statewide voter-registration rules and enforces election law against local governments, including the state’s lawsuit against Huntington Beach’s voter-ID ordinance. This year the race is tied to Prop 39 (the voter-ID initiative on the same ballot) and to a debate over how fast California should count ballots and whether universal mail ballots should continue.',
    ],
    introParagraphs: [
      'In the June 2 primary, incumbent Shirley Weber won 58.7% and Orange County Supervisor Don Wagner 36.7% (the rest went to two Green candidates), per the certified Statement of Vote. Weber, appointed by Newsom in 2021 and elected in 2022 with 60.1%, is widely expected to win.',
      'Wagner runs on election integrity: photo ID at the polls, faster vote counts and rolling back universal mail ballots, while saying he does not believe there is rampant fraud. Weber says accuracy matters more than speed, defends mail voting and says she has fought off Trump Justice Department demands for California voter data.',
    ],
    readingLinks: [
      {
        label: 'CalMatters/LAist: Partisan divide over how to count ballots (Apr 2026)',
        url: 'https://laist.com/brief/news/politics/california-race-for-secretary-of-state-shows-partisan-divide-over-how-to-count-ballots',
        summary: 'Weber on accuracy versus speed and the DOJ voter-data suit; Wagner on faster counts, mail ballots and voter ID.',
      },
      {
        label: 'CalMatters: California secretary of state race',
        url: 'https://calmatters.org/politics/2026/04/california-secretary-state-race/',
        summary: 'Record, positions, and criticisms of Weber, including the 30-day count period.',
      },
      {
        label: 'LAist/CalMatters voter guide: Secretary of State',
        url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-secretary-of-state',
        summary: 'Background and endorsements for both candidates.',
      },
      {
        label: 'Official voter guide candidate statements (Weber, Wagner)',
        url: SOS_VOTER_GUIDE_STATEMENTS,
        summary: 'Statements as submitted by the candidates.',
      },
    ],
    candidates: [
      {
        id: 'shirley-weber',
        photoSlug: 'shirley-weber',
        name: 'Shirley N. Weber',
        party: 'D',
        role: 'California Secretary of State',
        campaignUrl: 'https://www.drshirleyweber.com',
        bio: [
          'Weber, a former San Diego school-board member and professor, represented the 79th Assembly District from 2012 to 2021, authoring the bill that created California’s reparations task force. Newsom appointed her Secretary of State in 2021, the first Black person to hold the office, and voters elected her in 2022 with 60.1%.',
          'She has overseen the 2021 recall election and the November 2025 redistricting (Prop 50) vote, expanded voter outreach to rural areas and campuses, and defended state election law in court. The state’s registration rolls reached a record 23.2 million eligible voters in May 2026.',
        ],
        recordVsChange:
          'Weber has run record-registration elections through a recall, a mid-decade redistricting fight and federal pressure, and she has won court fights over voter data. The case for change is Wagner’s: California’s 30-day count and certification timeline is slow, and she has done little to lobby lawmakers to shorten it.',
        scorecard: [
          {
            topic: 'Ballot counting speed',
            position: '~ Says accuracy is “far more important” than speed and that most outcomes are known before certification',
            comparison: 'Wagner would push legislation to move up certification deadlines and finish counting much faster.',
          },
          {
            topic: 'Voter ID (Prop 39)',
            position: '✗ Opposes voter-ID mandates; her office joined Bonta’s suit against Huntington Beach’s ordinance',
            comparison: 'Wagner strongly backs Prop 39 and pledges to implement it if it passes.',
          },
          {
            topic: 'Mail voting & access',
            position: '✓✓ Defends universal vote-by-mail, wants no obstacles between eligible voters and the ballot',
            comparison: 'Wagner would roll back automatic mail ballots to every voter (requires legislation).',
          },
          {
            topic: 'Federal pushback',
            position: '✓ Fended off the Trump Justice Department’s demand for state voter-registration data',
            comparison: 'Wagner’s position on that lawsuit was not stated in the sources reviewed.',
          },
          {
            topic: 'Voter registration & outreach',
            position: '✓ Record 23,155,447 registered voters (May 2026); campus and rural outreach',
            comparison: 'Wagner focuses on cleaning outdated rolls (mailing ballots to people who moved or died).',
          },
        ],
        money:
          'About $792K raised, no independent spending reported, as of Sept 28, 2026 (CalMatters / Secretary of State data). Large donors include CTA, SEIU California State Council, Northern California Carpenters, United Domestic Workers.',
        endorsements:
          'California Democratic Party, California Federation of Teachers, SEIU California (per CalMatters voter guide); San Francisco Examiner editorial board.',
        redFlags: [],
        notes: [
          'Critics note her office certifies results up to 30 days after the election, and projected legislative winners are sometimes sworn in before certification. State law, not her office alone, sets that county-count window.',
          'Her daughter, Akilah Weber, succeeded her in the Assembly in a 2021 special election.',
        ],
      },
      {
        id: 'don-wagner',
        photoSlug: 'don-wagner',
        name: 'Donald P. (Don) Wagner',
        party: 'R',
        role: 'Orange County Supervisor',
        campaignUrl: 'https://wagnerforcalifornia.com',
        bio: [
          'Wagner, an attorney, served three terms on the South Orange County Community College District board, in the Assembly (2010–2016), as mayor of Irvine (2016–2019), and since 2019 as Orange County’s 3rd District Supervisor, including board chair in 2023–2025.',
          'He campaigns on fast, free and fair elections: photo ID at the polls (he supports Prop 39), faster counts, cleaning outdated voter rolls, and rolling back universal mail ballots. He says he does not believe there is “rampant fraud” but that voter ID gives people more confidence, and has called for a “non-partisan” office.',
        ],
        scorecard: [
          {
            topic: 'Ballot counting speed',
            position: '✓✓ Promises faster counts; supports moving up certification deadlines; says other large states finish on election night',
            comparison: 'Weber says accuracy matters more and defends the 30-day window.',
          },
          {
            topic: 'Voter ID (Prop 39)',
            position: '✓✓ Strongly backs voter ID and says he would implement Prop 39 if it passes',
            comparison: 'Weber opposes mandates and sued Huntington Beach over its ordinance.',
          },
          {
            topic: 'Mail voting & access',
            position: '✗ Would end automatic mail ballots to every voter (needs legislation)',
            comparison: 'Weber defends universal mail voting as a pillar of turnout.',
          },
          {
            topic: 'Voter rolls',
            position: '✓ Says outdated rolls waste millions on ballots mailed to people who moved or died',
            comparison: 'Weber emphasizes record registration.',
          },
          {
            topic: 'Nonpartisanship & ethics',
            position: '~ Pledges to be “an umpire,” but faced criticism for defending a colleague’s grant in the Andrew Do bribery scandal and voting against a family-disclosure reform in 2024',
            comparison: 'Weber was appointed by a Democratic governor and is viewed by critics as aligned with the state party.',
          },
        ],
        money:
          'About $752K raised, no independent spending reported, as of Sept 28, 2026 (CalMatters / Secretary of State data). Large donors include the Building Industry Association of Southern California and the Orange County Professional Firefighters local.',
        endorsements:
          'California Republican Party, Reform California, California Republican Assembly (per CalMatters voter guide).',
        redFlags: [
          {
            text: 'In January 2024 as an Orange County supervisor, Wagner voted against Supervisor Vicente Sarmiento’s ethics proposal to require disclosure of close family ties to groups the board funds (a 2–2 deadlock killed it), saying there was “nothing illegal” about a grant steered by then-Supervisor Andrew Do to his daughter’s nonprofit. Do later pleaded guilty to bribery charges.',
            sources: [
              { label: 'LAist (Jan 2024 vote)', url: 'https://laist.com/brief/news/politics/orange-county-ethics-reforms-supervisor-andrew-do-taxpayer-dollars-daughter-viet-america-society' },
            ],
          },
        ],
        notes: [
          'Wagner’s own election plan is at protectmyvoteca.org.',
          'In 2021 Wagner asked a county health officer whether COVID vaccines contained “tracking devices.” He said he was walking the doctor through claims made by residents, not because he believed them; Snopes rated the claim that he was seriously concerned as false: https://www.snopes.com/fact-check/don-wagner-tracking-device/',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Weber', '●', 'Progressive Left voters see Weber as defending voting access and fighting Trump’s Justice Department, while Wagner’s voter ID and anti-mail-ballot agenda conflicts with their core priorities.'],
      ['EL', 'Weber', '●', 'Establishment Liberals value an experienced administrator who has run clean, record-registration elections and won in court against federal pressure.'],
      ['DM', 'Weber', '●', 'Democratic Mainstays support the first Black Secretary of State, a party-endorsed incumbent who frames voting rights as the defining issue.'],
      ['OL', 'Weber', '◐', 'Outsider Left voters have little taste for election-integrity framing from the right, though some resent Weber’s defense of a slow count and the 2021 recall-era politics.'],
      ['SS', 'Weber', '○', 'Stressed Sideliners, who often vote irregularly, tend toward the simpler status quo of mailed ballots that Weber defends, though many are open to voter-ID proposals that sound like common sense.'],
      ['AR', 'Wagner', '◐', 'Ambivalent Right voters like faster counts and photo ID, and Wagner’s acknowledgment that he sees no rampant fraud sounds measured rather than conspiratorial.'],
      ['PR', 'Wagner', '●', 'Populist Right voters distrust California’s mail-ballot system and want ID at the polls and election-night results.'],
      ['CC', 'Wagner', '●', 'Committed Conservatives back his Prop 39 stance, cleaner voter rolls and an end to universal mail ballots as common-sense election security.'],
      ['FF', 'Wagner', '●', 'Faith and Flag Conservatives, who most distrust California’s election system, would see a Republican Secretary of State as a corrective on voter ID and mail ballots.'],
    ]),
    counterArguments: [
      'PR (Wagner ●): But consider that Wagner himself says he does not believe there is rampant fraud and the office has limited authority over county counting timelines, because most changes he proposes (voter ID, ending universal mail ballots) require new laws or a vote on Prop 39.',
      'AR (Wagner ◐): But consider that Weber’s office has run record-registration elections through a recall and a redistricting fight without the kind of errors that would justify a change, because the main criticism is the length of state-law-mandated counting windows rather than competence.',
    ],
  },

  // ───────────────────────────── CONTROLLER ─────────────────────────────
  {
    id: 'controller',
    categoryId: 'statewide',
    title: 'State Controller',
    tldrLabel: 'Controller',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Controller is the state’s chief fiscal officer: its accountant and bookkeeper of all public funds, running the state payroll system and unclaimed-property program and conducting audits and reviews of state operations; the office also serves on the Board of Equalization and other boards and commissions (per the official voter guide).',
      'The Controller does not set tax or spending policy, but the office’s monthly cash reports, annual financial report and audits are how the public, bond markets and federal agencies track whether California’s multi-hundred-billion-dollar budget is on course and whether fraud or waste is being caught. Timeliness of those reports, and the office’s audit capacity, are the main points of contention this year.',
    ],
    introParagraphs: [
      'In the June 2 primary, incumbent Malia Cohen took 56.8% and Republican Herb Morgan 37.5%, with Peace and Freedom candidate Meghann Adams at 5.7%, per the certified Statement of Vote. Cohen won in 2022 with 55.35% over Lanhee Chen.',
      'Morgan, a San Diego investment executive, says the office is too slow and too opaque and promises a near-real-time public database of every state expenditure and a “war room” to flag suspicious spending. Cohen says she has expanded public access to financial and payroll data, issued timely monthly cash reports, returned millions in unclaimed property to all 58 counties, and advanced payroll-system modernization.',
    ],
    readingLinks: [
      {
        label: 'LAist/CalMatters voter guide: State Controller',
        url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-state-controller',
        summary: 'Background and endorsements for Cohen and Morgan.',
      },
      {
        label: 'SF Examiner: GOP controller candidate Morgan emphasizes competence',
        url: 'https://www.sfexaminer.com/news/politics/gop-controller-candidate-morgan-emphasizes-competence/article_767130f0-6810-422e-b884-79539f2efe93.html',
        summary: 'Morgan’s “Radical Transparency” plan and his criticism that Cohen’s annual reports run late, with context that the state’s reports have been late since before Cohen took office.',
      },
      {
        label: 'Official voter guide candidate statements (Cohen, Morgan)',
        url: SOS_VOTER_GUIDE_STATEMENTS,
        summary: 'Statements as submitted by the candidates.',
      },
    ],
    candidates: [
      {
        id: 'malia-cohen',
        photoSlug: 'malia-cohen',
        name: 'Malia M. Cohen',
        party: 'D',
        role: 'State Controller/Mother',
        campaignUrl: 'https://www.maliacohenforca.com',
        bio: [
          'Cohen began as a field organizer and aide to Gavin Newsom, then served on the San Francisco Board of Supervisors (2011–2018; Board president in 2018), and the state Board of Equalization (2019–2022) before winning the Controller’s office in 2022. She has been Controller since January 2023.',
          'In office she has announced recommendations to prevent charter-school fraud (September 2024) and says she has expanded public access to financial and payroll data, released monthly cash reports on time, reunited all 58 counties with unclaimed property and advanced payroll modernization.',
        ],
        recordVsChange:
          'Cohen can point to monthly cash reports, expanded public data, unclaimed-property returns and a fraud-prevention push, and her office is typically evaluated on routine accounting and payroll operations rather than policy. The case for change is Morgan’s argument that annual financial reports and audits have run months late and that audit capacity has lagged, though reporting notes California’s annual reports were already late before she arrived (blamed on the pandemic and the FI$Cal system transition).',
        scorecard: [
          {
            topic: 'Financial reporting timeliness',
            position: '~ Says monthly cash reports are timely; the annual report and audit have run late (this year’s annual report came out in mid-May, about six weeks late, per the SF Examiner’s account of Morgan’s criticism)',
            comparison: 'Morgan calls the delays a sign of incompetence; reporting notes lateness predates her tenure.',
          },
          {
            topic: 'Transparency & public data',
            position: '✓ Expanded public access to payroll and financial data',
            comparison: 'Morgan proposes transaction-level, near-real-time reporting of all state spending, going further than Cohen has.',
          },
          {
            topic: 'Fraud & audits',
            position: '~ Charter-school fraud recommendations (2024); defends audit program; Morgan cites an April 2026 undercover video of a senior office staffer discussing audit capacity',
            comparison: 'Morgan wants continuous, risk-based audits of high-dollar programs and AI monitoring of nonprofit spending; Cohen’s office has not publicly responded in the sources reviewed.',
          },
          {
            topic: 'Unclaimed property',
            position: '✓ Returned millions to all 58 counties; welcomed 2024 sentencing of an employee who stole from the program',
            comparison: 'Morgan argues the program is run to boost general-fund revenue; advocacy source.',
          },
          {
            topic: 'Fiscal stewardship',
            position: '✓ Urged state leaders to spend cautiously in budget talks; describes budgets as “moral documents” investing in people',
            comparison: 'Morgan argues the Controller should focus narrowly on efficiency and fraud rather than values.',
          },
        ],
        money:
          'About $1.80M raised, no independent spending reported, as of Sept 28, 2026 (CalMatters / Secretary of State data). Large donors include the California Teachers Association and a steamfitters local ($39,200 each).',
        endorsements:
          'California Democratic Party, California Labor Federation, Equality California (per CalMatters/LAist), plus teachers, nurses, firefighters and Planned Parenthood Affiliates of California named in her state voter-guide statement.',
        redFlags: [
          {
            text: 'Her office’s annual financial report and audit have been filed months late; Morgan says the first report under her was about 22 months late and this year’s about six weeks late and warns that federal funds could be withheld over late reports. The newspaper’s editor’s note says the state had been late before Cohen took office, which officials blamed on the pandemic and the FI$Cal transition, and that the 2024–25 audit had not yet been released.',
            sources: [
              { label: 'SF Examiner', url: 'https://www.sfexaminer.com/news/politics/gop-controller-candidate-morgan-emphasizes-competence/article_767130f0-6810-422e-b884-79539f2efe93.html' },
            ],
          },
        ],
        notes: [
          'In April 2026 an undercover video by James O’Keefe’s group showed a Controller’s-office press official discussing audit capacity; Morgan responded by calling for Cohen’s resignation or a legislative review. Details come from partisan sources and the office’s response was not found.',
        ],
      },
      {
        id: 'herb-morgan',
        name: 'Herb W Morgan',
        party: 'R',
        role: 'Chief Investment Officer',
        campaignUrl: 'https://www.herbmorgan.com',
        bio: [
          'Morgan is a San Diego-area investment executive with about 40 years in finance, most recently chief investment officer at Cantor Fitzgerald; he says he founded an investment firm that Cantor Fitzgerald’s investment-advisory arm acquired. He is an Oceanside native.',
          'He runs on “Radical Transparency”: a public, near-real-time database of every state transaction, a “Transparency War Room,” and risk-based audits. He says he is a lifelong Republican who disagrees with parts of the party’s current direction, including mass deportation and “anti-woke” politics.',
        ],
        scorecard: [
          {
            topic: 'Financial reporting timeliness',
            position: '✓ Says late reports are a competence failure and a federal-funding risk',
            comparison: 'Cohen says monthly reports are timely and notes pre-existing system delays.',
          },
          {
            topic: 'Transparency & public data',
            position: '✓✓ Publish every expenditure and corporate-card charge at transaction level in an open database; prototype built for about $1,500 using AI',
            comparison: 'Goes much further than Cohen’s expanded data access; critics may question feasibility given FI$Cal limits.',
          },
          {
            topic: 'Fraud & audits',
            position: '✓✓ Continuous, risk-based audits of high-dollar programs, AI flagging of suspicious nonprofit spending, homelessness-spending scrutiny',
            comparison: 'Cohen has pursued charter-school fraud recommendations and traditional audits.',
          },
          {
            topic: 'Unclaimed property',
            position: '~ Criticizes the program as a general-fund revenue source (his own commentary)',
            comparison: 'Cohen emphasizes returns to owners and counties.',
          },
          {
            topic: 'Role of the office',
            position: '~ Says the Controller “does not set policy,” and the office has no power over national party issues',
            comparison: 'Cohen frames budgets as moral documents and aligns with labor and progressive groups.',
          },
        ],
        money:
          'About $694K raised, including $100,000 of his own money, no independent spending reported, as of Sept 28, 2026 (CalMatters / Secretary of State data).',
        endorsements: 'California Republican Party, California Republican Assembly, Unity Party of California (per CalMatters/LAist voter guides).',
        redFlags: [],
        notes: [
          'His campaign says it posts campaign donations on a public blockchain-style ledger as a proof-of-concept for his transparency pitch.',
          'The polling memo showing a narrower race was released by a pollster who also worked for Hilton’s campaign; no independent poll of this race was found.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Cohen', '◐', 'Progressive Left voters back the labor- and Planned Parenthood-endorsed incumbent who frames budgets as moral documents, though they are wary of her ties to Newsom-era insiders and want her to move faster on audits.'],
      ['EL', 'Cohen', '●', 'Establishment Liberals value a seasoned officeholder who delivers routine cash reports, payroll modernization and unclaimed-property returns without drama.'],
      ['DM', 'Cohen', '●', 'Democratic Mainstays favor the California Democratic Party- and Labor Federation-endorsed incumbent over a challenger running on conservative-coded fraud claims.'],
      ['OL', 'Cohen', '○', 'Outsider Left voters distrust establishment incumbents and the late financial reports, but Morgan’s fraud agenda aimed at homelessness and nonprofit spending is an uncomfortable alternative.'],
      ['SS', 'Morgan', '○', 'Stressed Sideliners, who tend to be cynical about government waste, may find Morgan’s plain pitch to publish every state transaction more appealing than Cohen’s institutional record, though few follow this race closely.'],
      ['AR', 'Morgan', '●', 'Ambivalent Right voters are drawn to a finance executive promising transparency and anti-fraud audits who also distances himself from parts of the GOP’s culture-war agenda.'],
      ['PR', 'Morgan', '◐', 'Populist Right voters like his fraud-and-waste message, though his criticism of mass deportation and “anti-woke” politics puts him at odds with parts of their agenda.'],
      ['CC', 'Morgan', '●', 'Committed Conservatives want an investment professional who scrutinizes state spending and publishes every transaction, and he has the California Republican Party’s endorsement.'],
      ['FF', 'Morgan', '◐', 'Faith and Flag Conservatives will vote the Republican line for fiscal accountability, though he is not running on faith or culture issues.'],
    ]),
    counterArguments: [
      'CC (Morgan ●): But consider that the Controller’s main powers are audits and payment processing rather than policy, because his database proposal depends on FI$Cal data that has proven hard to modernize and the office is a small part of overall state spending control.',
      'EL (Cohen ●): But consider that reports and audits have run months late under her, because Establishment Liberals who prize competence may weigh that record even if delays predate her.',
    ],
  },
];
