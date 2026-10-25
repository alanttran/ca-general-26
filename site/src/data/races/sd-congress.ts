import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * U.S. House contests for San Diego County districts not covered in sd-districts.ts: CA-48, CA-49, CA-51, CA-52.
 * Research as of Oct 7, 2026.
 */

const US_REP_LEGAL =
  'At least 25 years old, a U.S. citizen for at least 7 years, and an inhabitant of California when elected (U.S. Constitution art. I, section 2); two-year term.';

const US_REP_CRITERIA: QualificationCriterion[] = [
  { id: 'lawmaking', label: 'Lawmaking and policy experience', detail: 'The job is writing, amending and voting on federal law.' },
  { id: 'committee-budget', label: 'Committee and budget/appropriations work', detail: 'Most legislative work happens in committees that shape spending and oversight.' },
  { id: 'district-service', label: 'Constituent services and knowledge of the district', detail: 'Members run casework offices and carry local priorities to Washington.' },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Little becomes law without bipartisan or cross-chamber partners.' },
];

export const RACES_SD_CONGRESS: Race[] = [
  {
    id: 'us-rep-ca48',
    categoryId: 'federal',
    title: 'U.S. Representative, 48th District',
    tldrLabel: 'CA-48',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense spending, climate and infrastructure money, and oversight of the executive branch, and staffs a casework office that helps constituents with veterans’ benefits, passports and federal agencies.',
      'This is one of the most closely watched House races in the country. Republican Darrell Issa, who held the seat for years, announced in March 2026 that he would not run again, and the seat was redrawn by Proposition 50 so that Kamala Harris would have carried it 50% to 47% in 2024, versus a 56% to 41% Trump win on the old lines (Ballotpedia News). Republicans held a 219-212 House majority with four vacancies as of July 2026, so the result could help decide which party controls the chamber.',
    ],
    introParagraphs: [
      'The redrawn CA-48 stretches from inland northern San Diego County through Riverside County to Palm Springs (Times of San Diego). In the June 2 twelve-candidate primary, Republican County Supervisor Jim Desmond finished first with about 46% and San Diego City Councilmember Marni Von Wilpert, a Democrat, took second with about 20%, ahead of fellow Democrat Ammar Campa-Najjar (unofficial results). Desmond had been running in CA-49 and switched to CA-48 on the last filing day after Issa’s retirement. Nine Democrats combined for about 51% of the primary vote and Republicans about 48% (Ballotpedia News).',
      'Cook Political Report rates the race Lean Democratic (moved from Toss Up in March 2026). The only general-election poll made public so far was released by the Von Wilpert campaign (Lake Research Partners, July: Von Wilpert 48%, Desmond 46%), a statistical tie; campaign-released polls should be read with caution. Outside groups have spent heavily on both sides.',
    ],
    readingLinks: [
      {
        label: 'KPBS — 2026 general election: U.S. congressional races explainer (Districts 48–52)',
        url: 'https://www.kpbs.org/news/politics/2026/09/29/2026-general-election-us-congressional-races-explainer-districts-48-49-50-51-52',
        summary: 'Sept 29 side-by-side of each candidate’s priorities on cost of living, immigration and Iran, plus endorsements and fundraising as of June 30.',
      },
      {
        label: 'Ballotpedia News — Democrats target the redrawn CA-48 as a pick-up',
        url: 'https://news.ballotpedia.org/2026/07/16/democrats-are-targeting-the-redrawn-californias-48th-congressional-district-as-a-pick-up-on-november-3-2026/',
        summary: 'July 16 overview of how Proposition 50 changed the district’s lean, the primary results, and the national stakes.',
      },
      {
        label: 'Times of San Diego — Desmond, Von Wilpert to face off (June 2)',
        url: 'https://timesofsandiego.com/politics/2026/06/02/desmond-amar-campa-najjar-von-wilpert-ca-48/',
        summary: 'Primary-night report on the district’s new boundaries, the top-two result, and Von Wilpert’s primary fundraising.',
      },
    ],
    candidates: [
      {
        id: 'jim-desmond',
        photoSlug: 'jim-desmond',
        name: 'Jim Desmond',
        party: 'R',
        role: 'San Diego County Supervisor',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary:
            'More than 20 years in elected local office, as a San Marcos councilmember, 12-year mayor and county supervisor; no federal legislative or staff experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'San Marcos City Council 2004–2006, mayor 2006–2018, and San Diego County Board of Supervisors (District 5) since winning in 2018; local rather than federal lawmaking.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on the county budget as a supervisor and was vice chair of the Board in 2020–2021 (Wikipedia); no congressional committee experience.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Represents the county’s District 5 (inland North County); the redrawn CA-48 also includes Riverside County communities through Palm Springs, which he has not represented.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No published record of passing legislation across party lines; as mayor he was re-elected unopposed in 2010 and 2014.' },
          ],
        },
        bio: [
          'Republican member of the San Diego County Board of Supervisors (District 5) and former mayor of San Marcos (2006–2018). A Navy veteran and retired Delta Air Lines pilot with an electrical-engineering degree from San Diego State.',
          'He launched his congressional campaign in CA-49 against Mike Levin, then switched to CA-48 on the final filing day after Issa announced his retirement and endorsed him. He says he is running on affordability: lower interest rates, down-payment help for first-time buyers and lower capital-gains taxes on home sales.',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '✓ Down-payment help for first-time buyers, lower capital-gains taxes on home sales to encourage downsizing, and lower interest rates (KPBS)',
            comparison: 'Von Wilpert stresses making affordable housing easier to build and points to a local teacher down-payment program.',
          },
          {
            topic: 'Climate',
            position: '? No public position found',
            comparison: 'Von Wilpert has no published federal climate plan, though her campaign cites protecting local environmental standards.',
          },
          {
            topic: 'Health care',
            position: '? No public position found',
            comparison: 'Von Wilpert makes health care her top priority and says she would work to restore expired ACA subsidies.',
          },
          {
            topic: 'Immigration',
            position: '~ Says ICE “need[s] more training” but opposes abolishing it; favors deporting people convicted of violent crimes and opposes “major sweeps”; voted in Dec 2024 against limiting county cooperation with federal immigration enforcement',
            comparison: 'Von Wilpert calls the raids “completely unconstitutional” and wants masked agents off San Diego streets.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓✓ Endorsed by President Trump (April 2026) and by Rep. Issa; would add to the Republican majority',
            comparison: 'Von Wilpert campaigns against Trump’s tariffs and immigration enforcement and says Congress should not “rubber stamp” the Iran war.',
          },
          {
            topic: 'District clout',
            position: '~ Local record: 12 years as San Marcos mayor and county supervisor since 2019; has written to the Defense and State Secretaries seeking federal action on Tijuana River sewage',
            comparison: 'Von Wilpert has been on the San Diego City Council since 2020 and worked as a House Education and Labor Committee staffer.',
          },
        ],
        money:
          'About $2.3M raised for the cycle per Project Curia, which compiles FEC filings (latest reports through as late as June 30, 2026; page built Oct 7, 2026); FEC candidate ID H6CA49128. Independent groups have spent about $3.3M opposing him and $150K supporting him this cycle (Project Curia). As of June 30, KPBS noted $5,000 PAC donations from Koch Inc. PAC, New Majority Federal PAC and American Revival PAC.',
        endorsements:
          'President Donald Trump (April 2026, per Voice of San Diego); Rep. Darrell Issa; California Republican Party; San Diego Young Republicans (KPBS, Sept 29, 2026).',
        redFlags: [],
        notes: [
          'In August 2025 Desmond asked the U.S. Attorney’s office to investigate his Board colleagues over the departure of a county lawyer, saying the claims “remain unproven”; this concerns his colleagues, not his own conduct (Times of San Diego) — https://timesofsandiego.com/politics/2025/08/04/supervisor-jim-desmond-seeks-federal-investigation-of-his-board-colleagues/',
          'On Iran, he says stopping an Iranian nuclear weapon matters and that he is glad Trump “has not put troops on the ground”; he wants the war to end (KPBS).',
        ],
      },
      {
        id: 'marni-von-wilpert',
        photoSlug: 'marni-von-wilpert',
        name: 'Marni Von Wilpert',
        party: 'D',
        role: 'Councilwoman/Health Advocate',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'San Diego City Councilmember since December 2020 with earlier federal labor-law and congressional-staff experience; shorter elected record than her opponent and no congressional office held.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'San Diego City Council, District 5, since Dec 2020 (reelected unopposed in 2024); co-sponsored a city law requiring grocery stores that offer digital coupons to give all customers the same discounts (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Detail staffer to the House Education and Labor Committee under Chair Bobby Scott; votes on the city budget as a councilmember.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Represents the City of San Diego’s northern inland District 5 and grew up in Scripps Ranch; most of CA-48 lies outside the city, including the Riverside County portion.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No published record of passing legislation across party lines; led a council vote on taking ICE to court (KPBS).' },
          ],
        },
        campaignUrl: 'https://www.marnivonwilpert.com',
        bio: [
          'San Diego City Councilmember (District 5) since December 2020. A UC Berkeley graduate with a law degree from Fordham, she was a Peace Corps volunteer in Botswana, a National Labor Relations Board attorney, a House Education and Labor Committee staffer and a San Diego deputy city attorney (2018–2020).',
          'She first filed to run for the 40th State Senate district, then switched to CA-48. Her campaign is built on health care, housing costs and opposition to Trump administration policy; she raised more than $1.25 million by the primary, the most of any candidate in the field (Times of San Diego).',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '✓ Focus on housing costs and making affordable housing easier to build; helped launch a city teacher down-payment assistance program',
            comparison: 'Desmond favors down-payment help and lower capital-gains taxes on home sales.',
          },
          {
            topic: 'Climate',
            position: '? No public position found',
            comparison: 'Desmond also has no published climate position.',
          },
          {
            topic: 'Health care',
            position: '✓✓ Top priority; opposes ACA subsidy cuts and would work to restore them (KPBS)',
            comparison: 'Desmond has no public health-care position.',
          },
          {
            topic: 'Immigration',
            position: '✓ Led the council vote to take ICE to court; calls the raids “completely unconstitutional” and wants masked agents off San Diego streets',
            comparison: 'Desmond opposes abolishing ICE and “major sweeps” but favors deporting people convicted of violent crimes.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓✓ Campaigns against Trump’s tariffs and immigration enforcement; says Congress should not “rubber stamp” the Iran war',
            comparison: 'Desmond is endorsed by Trump and the Republican leadership and would add to the GOP majority.',
          },
          {
            topic: 'District clout',
            position: '~ Backed by Reps. Peters, Jacobs, Vargas and Levin and the DCCC’s Red to Blue program, but would be a first-term member',
            comparison: 'Desmond brings more years in elected office but no congressional ties beyond Issa’s endorsement.',
          },
        ],
        money:
          'Raised more than $1.25 million by the June primary, the most of any candidate in the field (Times of San Diego); about $2.2M for the cycle per Project Curia, which compiles FEC filings (latest reports through as late as June 30, 2026; page built Oct 7, 2026); FEC candidate ID H6CA48310. Independent groups have spent about $2.3M supporting her and $902K opposing her this cycle (Project Curia). KPBS lists large PAC donations from the California House Majority Fund, DCCC, Zinc Collective PAC and Blue Wave California Victory Fund.',
        endorsements:
          'Reps. Scott Peters, Sara Jacobs, Juan Vargas and Mike Levin; Sen. Adam Schiff; California Teachers Association; SEIU California; Planned Parenthood Action Fund (KPBS, Sept 29, 2026); DCCC Red to Blue program (Times of San Diego, June 4, 2026).',
        redFlags: [],
        notes: [
          'The ballot designation printed is “Councilwoman/Health Advocate.”',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Von Wilpert', '●', 'Leftward Progressives want Democrats to push back on Trump, and Von Wilpert opposes his tariffs and the ICE raids, makes restoring ACA subsidies her top priority and is backed by SEIU and Planned Parenthood Action Fund.'],
      ['LL', 'Von Wilpert', '●', 'Loyal Liberals value a Fordham-trained labor lawyer and former House committee staffer, endorsed by the region’s Democratic delegation, in a seat that could decide control of the House.'],
      ['LO', 'Von Wilpert', '◐', 'Left-Out Left voters are wary of party-committee favorites like Von Wilpert, but she is the candidate offering help with health-care costs and opposing immigration sweeps, against a Trump-endorsed Republican they view coldly.'],
      ['OO', 'Von Wilpert', '◐', 'Order and Opportunity Left voters want health-care and housing help and oppose mass deportation, which Von Wilpert offers, though Desmond’s long local record and opposition to “major sweeps” have real appeal for them.'],
      ['TM', 'Von Wilpert', '○', 'Tuned-Out Middle voters judge by cost relief, and Von Wilpert’s plan to restore ACA subsidies is a more direct pocketbook benefit than Desmond’s capital-gains and down-payment ideas, though both offer some help.'],
      ['PP', 'Desmond', '◐', 'Pragmatic and Polite Right voters value Desmond’s two decades of steady local government and measured stance that ICE “needs more training,” though his Trump endorsement and role in adding to the Republican majority give them some pause.'],
      ['UR', 'Desmond', '●', 'Unconventional Right voters want lower taxes and immigration enforcement, and Desmond voted against limiting county cooperation with federal immigration agents and backs lower capital-gains taxes.'],
      ['FC', 'Desmond', '●', 'Faith First Conservatives want limited government and border security, and Desmond is the Republican Navy veteran running against a Democrat endorsed by Planned Parenthood Action Fund.'],
      ['NA', 'Desmond', '●', 'No Apologies Right voters want a Trump-aligned vote in the House, and Desmond is endorsed by President Trump and would add to the Republican majority.'],
    ]),
    counterArguments: [
      'NA (Desmond ●): But consider that Desmond says ICE “need[s] more training” and opposes “major sweeps,” so he may be less of a fighter on deportation than No Apologies Right voters want.',
      'PP (Desmond ◐): But consider that Desmond would be a reliable vote for a Republican majority aligned with Trump, whose conduct many Pragmatic and Polite Right voters dislike, while Von Wilpert would be a first-term member with a shorter elected record.',
      'OO (Von Wilpert ◐): But consider that Desmond has more years in elected office and a more cautious immigration stance than many Republicans, which may suit voters who want both order and opposition to mass deportation.',
    ],
  },
  {
    id: 'us-rep-ca49',
    categoryId: 'federal',
    title: 'U.S. Representative, 49th District',
    tldrLabel: 'CA-49',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense spending, climate and infrastructure money, and oversight of the executive branch, and staffs a casework office that helps constituents with veterans’ benefits, passports and federal agencies.',
      'CA-49 covers coastal North County San Diego, including Camp Pendleton, and part of southern Orange County; Proposition 50 added La Jolla, Torrey Pines, Fallbrook and Bonsall and moved the district to roughly D+4 (Wikipedia). At stake is whether the district keeps a Democratic appropriator whose seat has narrowed to single digits in three recent elections or switches to a Republican.',
    ],
    introParagraphs: [
      'Democratic incumbent Mike Levin led the June 2 primary with about 56%; Republican Armen Kurdian took second with about 26%, ahead of Republican Star Parker at about 18% (unofficial Secretary of State returns). Levin won his last election in 2024 by about 4 points, 52.2% to 47.8%, over Matt Gunderson.',
      'Cook Political Report rates the race Likely Democratic. Kurdian is a retired Navy captain running on cost of living and energy; no public polling of the general election is available.',
    ],
    readingLinks: [
      {
        label: 'KPBS — 2026 general election: U.S. congressional races explainer (Districts 48–52)',
        url: 'https://www.kpbs.org/news/politics/2026/09/29/2026-general-election-us-congressional-races-explainer-districts-48-49-50-51-52',
        summary: 'Sept 29 side-by-side of Levin’s and Kurdian’s priorities on cost of living, immigration and Iran, plus endorsements and fundraising as of June 30.',
      },
    ],
    candidates: [
      {
        id: 'mike-levin',
        photoSlug: 'mike-levin',
        name: 'Mike Levin',
        party: 'D',
        role: 'U.S. Representative, 49th District',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Four-term member of the House (since 2019) who sits on the Appropriations Committee and has passed veterans and nuclear-waste legislation; previously an energy and environmental lawyer.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'In the House since Jan 2019; authored the Johnny Isakson and David P. Roe Veterans Health Care and Benefits Improvement Act (H.R. 7105); GovTrack lists nine enacted bills as primary sponsor as of 2025 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Sits on House Appropriations (Energy and Water; Military Construction and Veterans Affairs subcommittees) in the 119th Congress; previously Natural Resources and Veterans’ Affairs.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented coastal North County since 2019; says he has secured about $1.1 billion for the district (KPBS).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Co-authored the bipartisan Nuclear Waste Administration Act with Republican Rep. August Pfluger in 2024; co-sponsors a bipartisan immigration reform bill (KPBS).' },
          ],
        },
        campaignUrl: 'https://www.mikelevin.org',
        bio: [
          'San Juan Capistrano Democrat first elected in 2018, flipping the seat from Republican control; before Congress he was an energy and environmental lawyer. He sits on House Appropriations and co-chairs the Spent Nuclear Fuel Solutions Caucus.',
          'He is campaigning on reclaiming Congress’s power of the purse, reversing Republican cuts to health care and food assistance, expanding renewable energy and opposing Trump’s tariffs and new offshore drilling.',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '? No distinct housing position found; says he secured about $1.1 billion in federal funding for the district',
            comparison: 'Kurdian says cutting California regulations would lower housing and other costs.',
          },
          {
            topic: 'Climate',
            position: '✓✓ Expand renewable energy; introduced legislation to ban new offshore drilling off Southern California; opposed the executive order allowing West Coast offshore drilling',
            comparison: 'Kurdian supports “all forms of energy,” including nuclear.',
          },
          {
            topic: 'Health care',
            position: '✓✓ Wants to reverse Republican cuts to health care and food assistance (KPBS)',
            comparison: 'Kurdian’s stated priority is cost of living and state regulation; no health-care position found.',
          },
          {
            topic: 'Immigration',
            position: '~ Co-sponsors a bipartisan reform bill with a path for working residents while securing the border; voted against FY2026 Homeland Security funding citing a lack of ICE accountability measures',
            comparison: 'Kurdian says Trump’s policies reduced border deaths and trafficking and supports immigration “the right way.”',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Opposed Trump’s tariffs and co-sponsored legislation to refund IEEPA tariffs; says Congress was not consulted before “Operation Epic Fury” and would demand a War Powers vote',
            comparison: 'Kurdian believes kinetic action against Iran should end and does not criticize Trump’s policies in the sources reviewed.',
          },
          {
            topic: 'District clout',
            position: '✓✓ Appropriations seat; says he has secured about $1.1 billion for the district',
            comparison: 'Kurdian has no elected record or committee seat.',
          },
        ],
        recordVsChange:
          'Levin brings four terms, an Appropriations seat and bipartisan bills on veterans and nuclear waste; the case for change is mainly partisan, since Kurdian would join a Republican caucus and has no legislative record. Switching would trade committee influence over the region’s military and energy funding for a first-term member.',
        money:
          'As of June 30, 2026, KPBS listed joint-fundraising and leadership-committee support including Mike Levin Victory Fund ($109,850), Democracy Summer 2026 ($40,750) and Keep the 49th Climate Action Fund ($35,000). Current totals: see the FEC filings at https://www.fec.gov/data/.',
        endorsements:
          'Sen. Adam Schiff; California Democratic Party; San Diego Police Officers Association (KPBS, Sept 29, 2026).',
        redFlags: [],
        notes: [
          'In 2024 Levin voted for the FY2025 National Defense Authorization Act, which included a provision barring insurance coverage of gender-affirming care; he said he supported the bill for its pay and quality-of-life provisions (Wikipedia).',
          'He supports a congressional stock-trading ban (Wikipedia).',
        ],
      },
      {
        id: 'armen-kurdian',
        name: 'Armen Kurdian',
        party: 'R',
        role: 'Retired Navy Captain',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'A 25-year naval officer who also works in engineering and management; he has not held elected office or worked on legislation.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office, legislative staff role or authored legislation found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No committee, budget or appropriations role found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Lives in Vista (The Ballot Brief) in North County; no public-office or casework experience found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of building legislative coalitions; endorsed by Rep. Issa, Supervisor Desmond and the California Republican Assembly (KPBS).' },
          ],
        },
        bio: [
          'Retired Navy captain with 25 years as a naval officer who lives in Vista and has worked in engineering and management (The Ballot Brief).',
          'He is running on cost of living: cutting California regulations he says drive up prices, supporting “all forms of energy” including nuclear, and, per KPBS, immigration “the right way.”',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '~ Says cutting California regulations would lower prices; no specific housing plan found',
            comparison: 'Levin has no distinct housing position but touts federal funding for the district.',
          },
          {
            topic: 'Climate',
            position: '~ Supports “all forms of energy,” including nuclear, and investing in U.S. oil infrastructure',
            comparison: 'Levin backs renewables and bans on new offshore drilling.',
          },
          {
            topic: 'Health care',
            position: '? No public position found',
            comparison: 'Levin wants to reverse Republican health-care and food-assistance cuts.',
          },
          {
            topic: 'Immigration',
            position: '✓ Says Trump’s policies have reduced deaths and trafficking at the border; supports immigration “the right way”',
            comparison: 'Levin co-sponsors a bipartisan bill with a path for working residents.',
          },
          {
            topic: 'Trump / House majority',
            position: '~ Says kinetic action against Iran should end; backed by Rep. Issa and the California Republican Assembly; would add to the GOP majority',
            comparison: 'Levin opposed Trump’s tariffs and would demand a War Powers vote on Iran.',
          },
          {
            topic: 'District clout',
            position: '? First-time candidate with no committee or legislative standing',
            comparison: 'Levin holds an Appropriations seat.',
          },
        ],
        money:
          'KPBS (as of June 30, 2026) reported about one-third of his funds came through WinRed ($19,173) and that he contributed $10,244 of his own money. Current totals: see the FEC filings at https://www.fec.gov/data/.',
        endorsements:
          'Rep. Darrell Issa; San Diego Young Republicans; California Republican Assembly; Supervisor Jim Desmond (KPBS, Sept 29, 2026).',
        redFlags: [],
        notes: [
          'The ballot designation printed is “Retired Navy Captain.”',
          'No campaign website was found.',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Levin', '◐', 'Leftward Progressives get strong climate action from Levin, who backs renewables and an offshore-drilling ban and opposed Trump’s tariffs, though his vote for the 2024 defense bill and police-union endorsement make him a moderate for them.'],
      ['LL', 'Levin', '●', 'Loyal Liberals value a four-term appropriator who has passed bipartisan bills on veterans and nuclear waste and works through the institutions they trust.'],
      ['LO', 'Levin', '◐', 'Left-Out Left voters distrust long-serving insiders, but Levin backs a congressional stock-trading ban and wants to reverse cuts to health care and food aid, while Kurdian offers no health-care plan.'],
      ['OO', 'Levin', '●', 'Order and Opportunity Left voters want both safety and economic help, and Levin is endorsed by the San Diego Police Officers Association, co-sponsors a bill pairing border security with a path for working residents and defends health-care funding.'],
      ['TM', 'Levin', '◐', 'Tuned-Out Middle voters want concrete help with costs, and Levin points to reversing health-care and food-assistance cuts and about $1.1 billion in federal money for the district, while Kurdian’s regulation-cutting pitch has no specifics.'],
      ['PP', 'Levin', '◐', 'Pragmatic and Polite Right voters reward competence and bipartisan work, and Levin’s Appropriations seat and a nuclear-waste bill co-written with a Republican outweigh a first-time candidate with no policy detail, even across party lines.'],
      ['UR', 'Kurdian', '◐', 'Unconventional Right voters want border enforcement and less regulation, and Kurdian credits Trump’s border policies and wants to cut California regulations, though he has no record in office.', 'Unconventional Right voters who want proven results could back Levin, who sits on the Appropriations subcommittee funding bases like Camp Pendleton and co-sponsors a border-security bill, but it is a cross-party vote that gives up Kurdian’s support for Trump’s border approach and lighter regulation.'],
      ['FC', 'Kurdian', '●', 'Faith First Conservatives want limited government and border security, and Kurdian is the Republican who supports the administration’s border policy over a Democrat who voted against Homeland Security funding.'],
      ['NA', 'Kurdian', '●', 'No Apologies Right voters want deregulation, more domestic oil and a Republican House, and Kurdian backs cutting state regulations and investing in U.S. oil infrastructure.'],
    ]),
    counterArguments: [
      'FC (Kurdian ●): But consider that Kurdian has no legislative record or published policy plan, while Levin already sits on the Appropriations subcommittee that funds installations like Camp Pendleton.',
      'PP (Levin ◐): But consider that Levin voted against FY2026 Homeland Security funding and would add a vote to the Democratic caucus, which cuts against the mild preference for limited spending and border security many Pragmatic and Polite Right voters hold.',
    ],
  },
  {
    id: 'us-rep-ca51',
    categoryId: 'federal',
    title: 'U.S. Representative, 51st District',
    tldrLabel: 'CA-51',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense spending, climate and infrastructure money, and oversight of the executive branch, and staffs a casework office that helps constituents with veterans’ benefits, passports and federal agencies.',
      'CA-51 covers central and eastern San Diego, including San Diego and El Cajon. The seat has been safely Democratic since Jacobs first won it in 2022 and she won with 60.7% in 2024, so the practical question is whether the district keeps a representative with seats on the Armed Services and Foreign Affairs committees, which Jacobs holds.',
    ],
    introParagraphs: [
      'Democratic incumbent Sara Jacobs led the June 2 primary with a majority of the vote (about 58% in unofficial results), with Republican Ricardo Cabrera second at about 37% and two other Democrats trailing. In 2024 Jacobs beat Republican Bill Wells 60.7% to 39.3%.',
      'Jacobs, a member of the Armed Services and Foreign Affairs committees, is a heavy favorite. Cabrera, a cybersecurity-firm owner, is running a grassroots campaign on cost of living, congressional term limits and ethics standards; he had no campaign money on file with the FEC as of Sept 25, 2026 (KPBS). No public polling is available.',
    ],
    readingLinks: [
      {
        label: 'KPBS — 2026 general election: U.S. congressional races explainer (Districts 48–52)',
        url: 'https://www.kpbs.org/news/politics/2026/09/29/2026-general-election-us-congressional-races-explainer-districts-48-49-50-51-52',
        summary: 'Sept 29 side-by-side of Jacobs’ and Cabrera’s priorities on cost of living and immigration, plus endorsements and fundraising.',
      },
    ],
    candidates: [
      {
        id: 'sara-jacobs',
        photoSlug: 'sara-jacobs',
        name: 'Sara Jacobs',
        party: 'D',
        role: 'U.S. Representative',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Three-term member of the House (since 2021) on Armed Services and Foreign Affairs, after work at the UN, UNICEF and as a State Department contractor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'In the House since Jan 2021; authored the My Body, My Data Act on reproductive health data and co-leads the Child Care for Every Community Act (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Sits on Armed Services (Intelligence and Special Operations; Military Personnel subcommittees) and Foreign Affairs, where she is ranking member of the Africa subcommittee (Wikipedia, 119th Congress).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented San Diego-area districts since 2021; lives in Kensington in San Diego; made surprise visits to the Otay Mesa Detention Center (KPBS).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Co-leads legislation and moves to block U.S. arms sales to the UAE; a measure she introduced in 2023 to censure Rep. Brian Mast was withdrawn by Democratic leadership (Wikipedia).' },
          ],
        },
        bio: [
          'San Diego native elected to the House in 2020 (first in the 53rd District, then the 51st since 2023). Before Congress she worked for the UN and UNICEF, was a State Department contractor and policy adviser on Hillary Clinton’s 2016 campaign, and founded the nonprofit San Diego for Every Child.',
          'She is a member of the Armed Services and Foreign Affairs committees and supports Medicare for All, higher top tax rates and humane immigration policy. She is a granddaughter of Qualcomm co-founder Irwin Jacobs, who has funded her campaigns.',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '✓ Expanding military housing is part of her cost-of-living plan (KPBS)',
            comparison: 'Cabrera has no stated housing position and says state policy matters most for costs.',
          },
          {
            topic: 'Climate',
            position: '? No distinct climate position found in the sources reviewed',
            comparison: 'Cabrera has no public climate position.',
          },
          {
            topic: 'Health care',
            position: '✓✓ Supports Medicare for All (Wikipedia); universal child care is part of her cost plan',
            comparison: 'Cabrera has no public health-care position.',
          },
          {
            topic: 'Immigration',
            position: '✓ Opposes mass deportations; made surprise visits to the Otay Mesa Detention Center',
            comparison: 'Cabrera credits enforcement for fewer crossings and supports cooperation with ICE.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Democratic caucus member; wants to end the Iran war and remove tariffs to lower prices',
            comparison: 'Cabrera is endorsed by the state and county Republican parties and Reform California.',
          },
          {
            topic: 'District clout',
            position: '✓ Armed Services and Foreign Affairs seats matter to a military-heavy region; $373,000 transferred to the DCCC (KPBS)',
            comparison: 'Cabrera has no committee seat or legislative role.',
          },
        ],
        recordVsChange:
          'Jacobs offers three terms of seniority on defense and foreign-affairs panels and a record on child care and reproductive-data privacy; the case for change rests on partisan preference and term limits, since Cabrera has no legislative record. Switching would trade committee influence for a first-term member with no legislative record.',
        money:
          'As of Sept 25, 2026 she had spent $1.45 million this year, placing her in the top 7% of House spenders; she transferred $373,000 to the DCCC, reports $270,000 cash on hand and has no loans (KPBS). Her net worth is estimated at $76 million (Wikipedia). Current totals: see the FEC filings at https://www.fec.gov/data/.',
        endorsements:
          'San Diego County Democratic Party; California Democratic Party; San Diego and Imperial Counties Labor Council (KPBS, Sept 29, 2026).',
        redFlags: [],
        notes: [
          'In July 2022 she was arrested with 16 other members of Congress at an abortion-rights protest outside the Supreme Court (Wikipedia).',
          'In April 2024 she voted for a $26 billion bill with humanitarian aid for Gaza and military aid for Israel despite having signed a letter calling for a halt to U.S. weapons transfers to Israel; she defended the vote on humanitarian grounds (Wikipedia).',
        ],
      },
      {
        id: 'ricardo-cabrera',
        name: 'Ricardo Cabrera',
        party: 'R',
        role: 'Business Owner',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'Owns a cybersecurity firm and holds a master’s degree in cybersecurity; he has not held elected office or worked on legislation.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office, legislative staff role or authored legislation found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No committee, budget or appropriations role found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'Runs a security business; no public record found of community or casework experience in the district.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of building legislative coalitions.' },
          ],
        },
        bio: [
          'Owns Grace Guard Security, a cybersecurity firm, and holds a master’s degree in cybersecurity from Grand Canyon University (KPBS).',
          'He says he is running to lower the cost of living, impose congressional term limits and strengthen ethics standards, with spending cuts and reduced waste at the IRS and Department of Education.',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '? No public position found; says state policy matters most for costs',
            comparison: 'Jacobs proposes expanding military housing.',
          },
          {
            topic: 'Climate',
            position: '? No public position found',
            comparison: 'Jacobs has no distinct climate position in the sources reviewed.',
          },
          {
            topic: 'Health care',
            position: '? No public position found',
            comparison: 'Jacobs supports Medicare for All.',
          },
          {
            topic: 'Immigration',
            position: '✓ Credits enforcement for fewer attempted crossings and supports cooperation with ICE',
            comparison: 'Jacobs opposes mass deportations.',
          },
          {
            topic: 'Trump / House majority',
            position: '~ Backed by the state and county Republican parties and Reform California; proposes federal spending cuts',
            comparison: 'Jacobs wants tariffs removed and the Iran war ended.',
          },
          {
            topic: 'District clout',
            position: '? Grassroots campaign with no committee or legislative standing',
            comparison: 'Jacobs sits on Armed Services and Foreign Affairs.',
          },
        ],
        money:
          'As of Sept 25, 2026 he had no campaign money on file with the FEC and described a grassroots campaign (KPBS). Current totals: see the FEC filings at https://www.fec.gov/data/.',
        endorsements:
          'Republican Party of San Diego County; California Republican Party; Reform California; California Rifle and Pistol Association PAC (KPBS, Sept 29, 2026; Ballotpedia).',
        redFlags: [],
        notes: [
          'The ballot designation printed is “Business Owner.”',
          'No campaign website was found.',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Jacobs', '●', 'Leftward Progressives get a Democrat who supports Medicare for All, higher top tax rates, universal child care and an end to mass deportations.'],
      ['LL', 'Jacobs', '●', 'Loyal Liberals value a three-term member of Armed Services and Foreign Affairs with a background at the UN and UNICEF, backed by the Democratic Party and organized labor.'],
      ['LO', 'Jacobs', '◐', 'Left-Out Left voters may like Cabrera’s talk of term limits and ethics, but they want government-guaranteed health care and child care, which Jacobs supports, even though her family wealth funding her campaigns is the kind of insider advantage they resent.'],
      ['OO', 'Jacobs', '◐', 'Order and Opportunity Left voters want help with costs, and Jacobs offers child care, military housing and tariff relief, though Cabrera’s support for cooperating with ICE appeals to their wish for order.'],
      ['TM', 'Jacobs', '○', 'Tuned-Out Middle voters judge by concrete help, and Jacobs’ child-care and tariff plans are more specific than Cabrera’s promise of spending cuts, a weak lean for a group that rarely follows these races.'],
      ['PP', 'Jacobs', '○', 'Pragmatic and Polite Right voters value experience and strong alliances, and Jacobs’ Armed Services and Foreign Affairs seats give her a working record that an unfunded first-time candidate lacks, though her Medicare for All stance is further left than they like.'],
      ['UR', 'Cabrera', '◐', 'Unconventional Right voters want smaller government and immigration enforcement, and Cabrera proposes spending cuts, term limits and cooperation with ICE, though his campaign reported no money.', 'Unconventional Right voters who want clout over a protest vote could pick Jacobs for her Armed Services seat in a military-heavy region, but it is a cross-party vote for a Medicare for All supporter who opposes mass deportations, giving up Cabrera’s term limits and ICE cooperation.'],
      ['FC', 'Cabrera', '●', 'Faith First Conservatives want limited government and border security, and Cabrera is the Republican who backs spending cuts and ICE cooperation over a Democrat who was arrested at an abortion-rights protest.'],
      ['NA', 'Cabrera', '●', 'No Apologies Right voters want smaller government and gun rights, and Cabrera is endorsed by the California Rifle and Pistol Association PAC and Reform California and wants to cut the IRS and Department of Education.'],
    ]),
    counterArguments: [
      'FC (Cabrera ●): But consider that Cabrera has no legislative record or published budget plan and reported no campaign money to the FEC as of Sept 25, so his spending cuts are a promise rather than a plan.',
      'LP (Jacobs ●): But consider that Jacobs, with an estimated $76 million net worth, is a granddaughter of a Qualcomm co-founder who has funded her campaigns, which sits uneasily with the anti-billionaire views Leftward Progressives hold.',
      'PP (Jacobs ○): But consider that Jacobs supports Medicare for All and higher top tax rates, a larger expansion of government than the incremental, fiscally cautious approach Pragmatic and Polite Right voters prefer.',
    ],
  },
  {
    id: 'us-rep-ca52',
    categoryId: 'federal',
    title: 'U.S. Representative, 52nd District',
    tldrLabel: 'CA-52',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense spending, climate and infrastructure money, and oversight of the executive branch, and staffs a casework office that helps constituents with veterans’ benefits, passports and federal agencies.',
      'CA-52 covers central and southern San Diego, including Chula Vista and the South Bay. The district’s biggest local federal issue is the Tijuana River sewage crisis, which needs federal money and action; its representative also sits at a border that shapes immigration debates.',
    ],
    introParagraphs: [
      'Democratic incumbent Juan Vargas led the June 2 primary with a majority of the vote (about 55% in early unofficial counts); Republican Jeff Belle was the only Republican on the ballot and took second with roughly a third of the vote, about 42,000 votes, per the San Diego Union-Tribune.',
      'Vargas, who has represented the area in Congress since 2013, is a heavy favorite. Belle’s candidacy has drawn scrutiny: the Union-Tribune reported a prior check-fraud conviction, a charge over election paperwork and unverified résumé claims (see Red flags). No public polling is available.',
    ],
    readingLinks: [
      {
        label: 'KPBS — 2026 general election: U.S. congressional races explainer (Districts 48–52)',
        url: 'https://www.kpbs.org/news/politics/2026/09/29/2026-general-election-us-congressional-races-explainer-districts-48-49-50-51-52',
        summary: 'Sept 29 side-by-side of Vargas’ and Belle’s priorities on the Tijuana River, immigration and affordability, plus endorsements and fundraising.',
      },
    ],
    candidates: [
      {
        id: 'juan-vargas',
        photoSlug: 'juan-vargas',
        name: 'Juan Vargas',
        party: 'D',
        role: 'Member of Congress',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Seven-term member of the House (since 2013) on Financial Services, after earlier service on the San Diego City Council and in the state Assembly and Senate.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'In the House since Jan 2013 after the Assembly (2000–2006) and the state Senate (2010–2013); Harvard Law School graduate (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Sits on the Financial Services Committee, including its Capital Markets and Financial Institutions subcommittees (119th Congress).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Born in National City; San Diego City Council 1993–2000; has represented the area in Congress since 2013; says he secured more than $500 million for the Tijuana River sewage crisis (KPBS).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Member of the New Democrat Coalition and Climate Solutions Caucus among others; was one of 16 Democrats to vote against a 2022 antitrust package and one of four to vote against a 2026 Iran war-powers resolution (Wikipedia).' },
          ],
        },
        campaignUrl: 'https://vargas.house.gov',
        bio: [
          'San Diego-area Democrat who has served in Congress since 2013, after the San Diego City Council (1993–2000), state Assembly (2000–2006) and state Senate (2010–2013). A former Jesuit novitiate with a Harvard law degree, he sits on the House Financial Services Committee.',
          'He highlights the Tijuana River sewage crisis, more oversight of ICE and DHS, a DACA solution, renewing ACA subsidies and lowering prescription drug costs.',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '? No distinct housing position found; sits on the Financial Services Committee',
            comparison: 'Belle proposes a one-time small-business grant program funded by banks; no housing plan found.',
          },
          {
            topic: 'Climate',
            position: '~ Member of the Climate Solutions Caucus; his main environmental priority is the Tijuana River sewage crisis',
            comparison: 'Belle also lists Tijuana River pollution as a priority.',
          },
          {
            topic: 'Health care',
            position: '✓✓ Would renew expired ACA subsidies and lower prescription drug costs (KPBS)',
            comparison: 'Belle has no public health-care position.',
          },
          {
            topic: 'Immigration',
            position: '✓ More ICE and DHS oversight and a DACA solution',
            comparison: 'Belle would create a faster citizenship track for longtime Mexican and Filipino immigrants without criminal records and supports tougher action against cartels.',
          },
          {
            topic: 'Trump / House majority',
            position: '~ Democratic caucus member, but one of four House Democrats to vote against the 2026 Massie–Khanna Iran war-powers resolution',
            comparison: 'Belle has no major-organization or party endorsements.',
          },
          {
            topic: 'District clout',
            position: '✓✓ Says he secured more than $500 million for the sewage crisis and wants an emergency declared',
            comparison: 'Belle wants Trump to visit the South Bay and field hearings held in Imperial Beach.',
          },
        ],
        recordVsChange:
          'Vargas offers seven terms of seniority, a Financial Services seat and a record of securing money for the Tijuana River crisis; the case for change is mainly partisan, since Belle has no legislative record and faces serious questions about his background. Switching would give up that seniority for a first-term member with no legislative record.',
        money:
          'KPBS (as of the Sept 29 report) listed more than $568,000 raised, including over $431,000 from committees; finance, real estate and insurance sectors gave $304,000 and AIPAC gave more than $72,000, the most from any single entity (OpenSecrets). Current totals: see the FEC filings at https://www.fec.gov/data/.',
        endorsements:
          'California Democratic Party; California Teachers Association; California Federation of Labor Unions; American Federation of Government Employees; Equality California (KPBS, Sept 29, 2026).',
        redFlags: [],
        notes: [
          'In 2015 outside foundations paid $18,200 for a trip to Germany with his wife (Wikipedia).',
          'Critics note large donations from finance-sector committees and AIPAC; this is a donor and policy critique, not an ethics finding.',
        ],
      },
      {
        id: 'jeff-belle',
        name: 'Jeff Belle',
        party: 'R',
        role: 'Business Owner',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'A former Contra Costa County Board of Education member; his claims of Senate staff, lobbying and private-equity CEO roles could not be verified by the Union-Tribune.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative office or authored legislation found; served as a county board of education trustee in the East Bay.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No congressional committee or budget role found; claimed Senate staff work could not be verified (Union-Tribune).' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No public-office or casework experience found in San Diego County.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of building legislative coalitions.' },
          ],
        },
        bio: [
          'Former member of the Contra Costa County Board of Education who describes himself as the CEO of a San Diego private-equity firm; the Union-Tribune could not verify claims of U.S. Senate staff, lobbying or private-equity CEO work (as reported by the Union-Tribune).',
          'He is campaigning on “faith, freedom and finances,” on Tijuana River pollution (he wants Trump to visit the South Bay and field hearings in Imperial Beach), a faster citizenship track for longtime Mexican and Filipino immigrants without criminal records, and tougher action against cartels.',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '? No public position found; proposes a one-time small-business grant program funded by banks',
            comparison: 'Vargas has no distinct housing position found either.',
          },
          {
            topic: 'Climate',
            position: '? No public position found; lists Tijuana River pollution as a priority',
            comparison: 'Vargas says he has secured more than $500 million for the sewage crisis.',
          },
          {
            topic: 'Health care',
            position: '? No public position found',
            comparison: 'Vargas would renew expired ACA subsidies and lower prescription drug costs.',
          },
          {
            topic: 'Immigration',
            position: '✓ Faster citizenship track for longtime Mexican and Filipino immigrants without criminal records; tougher action against cartels',
            comparison: 'Vargas calls for more ICE and DHS oversight and a DACA solution.',
          },
          {
            topic: 'Trump / House majority',
            position: '? No endorsements from major organizations, parties or unions; wants Trump to visit the South Bay',
            comparison: 'Vargas is endorsed by the California Democratic Party and major unions.',
          },
          {
            topic: 'District clout',
            position: '? No legislative standing; raised more than $25,000, with $7,000 in loan support (KPBS)',
            comparison: 'Vargas has seven terms of seniority and raised more than $568,000.',
          },
        ],
        money:
          'KPBS (Sept 29, 2026) reported he raised more than $25,000, including over $18,000 from individuals, $7,000 in loan support and no committee contributions. The Union-Tribune reported in September 2026 that he had not filed the financial disclosures required of congressional candidates. Current totals: see the FEC filings at https://www.fec.gov/data/.',
        endorsements:
          'None from major organizations, parties or unions (KPBS, Sept 29, 2026); iVoterGuide lists a California Charter Schools Association endorsement reported by the candidate.',
        redFlags: [
          {
            severity: 'severe',
            status: 'convicted',
            text: 'Oklahoma prosecutors charged Belle twice in the 1990s with writing bogus checks; he pleaded guilty to one, and the other was dismissed in 2007 after his arrest on a long-standing warrant. A Florida misdemeanor bad-check charge from 2000 was administratively dismissed in 2006. Belle first said he did not remember the cases, then acknowledged them, attributing them to not “taking care of business.”',
            whyItMatters:
              'Members of Congress vote on federal spending and financial regulation, so a fraud conviction bears on trust with public money, though the conviction is roughly three decades old.',
            sources: [
              { label: 'San Diego Union-Tribune (Sept 9, 2026, via ArcaMax)', url: 'https://www.arcamax.com/currentnews/newsheadlines/s-4294162' },
              { label: 'KPIX 5 / CBS San Francisco (Nov 1, 2018)', url: 'https://www.cbsnews.com/sanfrancisco/news/contra-costa-board-of-education-trustee-accused-of-lying-bouncing-checks/' },
            ],
          },
          {
            severity: 'serious',
            status: 'documented',
            text: 'In his 2014 candidate statement for the Contra Costa County Board of Education, printed in official election materials, Belle claimed a bachelor’s degree from Oklahoma City University; the university said he studied there but did not graduate. He was charged with a misdemeanor, and prosecutors dismissed the case in 2017 after he completed community service. Belle calls the case politically motivated, says he believed he had the degree, and has since shown a diploma dated 2019.',
            whyItMatters:
              'It concerns accuracy in official statements to voters, which candidates for Congress also file.',
            sources: [
              { label: 'San Diego Union-Tribune (Sept 9, 2026, via ArcaMax)', url: 'https://www.arcamax.com/currentnews/newsheadlines/s-4294162' },
              { label: 'KPIX 5 / CBS San Francisco (Nov 1, 2018)', url: 'https://www.cbsnews.com/sanfrancisco/news/contra-costa-board-of-education-trustee-accused-of-lying-bouncing-checks/' },
            ],
          },
          {
            severity: 'serious',
            status: 'official-finding',
            text: 'In 2014 the Respiratory Care Board of California issued Belle an $8,200 civil penalty for practicing respiratory care without a California license, after a state investigator found him working with a name badge identifying him as a respiratory care practitioner in 2012. A board manager said he agreed to pay but never has; Belle says he did not need a license to teach students and that he is “not ever going to pay.”',
            whyItMatters:
              'An unpaid penalty from a state licensing board bears on respect for regulatory rules that Congress writes and oversees.',
            sources: [{ label: 'San Diego Union-Tribune (Sept 9, 2026, via ArcaMax)', url: 'https://www.arcamax.com/currentnews/newsheadlines/s-4294162' }],
          },
          {
            severity: 'serious',
            status: 'alleged',
            text: 'Five former wives told the Union-Tribune that Belle took advantage of them financially, including running up credit-card debt in one ex-wife’s name. The paper could not verify his claimed work as a U.S. Senate staffer, federal lobbyist or private-equity CEO, and reported he had not filed the financial disclosures required of congressional candidates. Belle denies the allegations and calls his accusers “jealous.”',
            whyItMatters:
              'Congressional candidates’ financial disclosures and stated résumés are how voters check conflicts and qualifications.',
            sources: [{ label: 'San Diego Union-Tribune (Sept 9, 2026, via ArcaMax)', url: 'https://www.arcamax.com/currentnews/newsheadlines/s-4294162' }],
          },
        ],
        notes: [
          'The ballot designation printed is “Business Owner.”',
          'KPBS’s Sept 29 explainer also notes the Union-Tribune report and that Belle denies the allegations.',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Vargas', '◐', 'Leftward Progressives get a Democrat who would renew ACA subsidies and press for ICE oversight and DACA, though Vargas’ AIPAC and finance-sector money and his vote against the Iran war-powers resolution are the kind of moderate record they dislike.'],
      ['LL', 'Vargas', '●', 'Loyal Liberals value a seven-term member with city, Assembly and state Senate experience, backed by the Democratic Party and labor, who has delivered federal money for the Tijuana River.'],
      ['LO', 'Vargas', '◐', 'Left-Out Left voters distrust Vargas’ large donations from finance and AIPAC, but Belle’s check-fraud conviction and unverified résumé are exactly the self-serving record they reject most.'],
      ['OO', 'Vargas', '●', 'Order and Opportunity Left voters want steady, competent help with costs and local problems, and Vargas offers lower drug costs, renewed ACA subsidies and more than $500 million secured for the Tijuana River sewage crisis.'],
      ['TM', 'Vargas', '◐', 'Tuned-Out Middle voters want concrete cost relief and plain trustworthiness, and Vargas’ ACA-subsidy and drug-cost plans compare well with Belle’s thin grant idea and fraud record.'],
      ['PP', 'Vargas', '●', 'Pragmatic and Polite Right voters weigh rule of law and competence over party, and Vargas, a New Democrat Coalition member, is a far safer choice than a Republican with a fraud conviction and an unpaid state licensing penalty.'],
      ['UR', 'Vargas', '○', 'Unconventional Right voters lean Republican, but Belle offers a faster citizenship track rather than tougher enforcement and carries a fraud conviction, so a weak lean goes to the incumbent focused on a concrete local fix.'],
      ['FC', 'Belle', '○', 'Faith First Conservatives might back Belle’s “faith, freedom and finances” campaign over a Democrat endorsed by Equality California, but Belle’s check-fraud conviction and unpaid penalty matter to a group that weighs personal character.', 'Faith First Conservatives troubled by Belle’s fraud conviction could choose Vargas, a former Jesuit novitiate with decades of city, state and congressional service, but it is a cross-party vote for a Democrat endorsed by Equality California who wants more oversight of ICE.'],
      ['NA', 'Belle', '○', 'No Apologies Right voters want a Republican vote and tough action on cartels, but Belle also wants a faster citizenship track and has a fraud conviction, so this is a weak lean.', 'No Apologies Right voters who put a proven record first could cross over to Vargas for his seniority and Tijuana River funding, though that means backing a Democrat who wants ICE oversight and a DACA solution instead of a Republican vote.'],
    ]),
    counterArguments: [
      'FC (Belle ○): But consider that Belle pleaded guilty to writing a bogus check, was charged over a false degree claim in official election materials, has refused to pay an $8,200 state licensing penalty and has not filed required financial disclosures; a vote for him may be more a vote against Vargas than for his record.',
      'NA (Belle ○): But consider that Belle proposes a faster citizenship track for longtime Mexican and Filipino immigrants, which runs against the deportation-first approach No Apologies Right voters favor, on top of his fraud conviction.',
      'UR (Vargas ○): But consider that Vargas wants more oversight of ICE and a DACA solution, so a vote for him moves away from the enforcement-first immigration policy Unconventional Right voters want, even if Belle is a weak alternative.',
    ],
  },
];
