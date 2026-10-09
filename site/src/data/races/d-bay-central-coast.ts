import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Statewide district sweep — Peninsula, South Bay, North Bay (Marin/Sonoma) and Central Coast:
 * U.S. House CA-15, CA-17, CA-18, CA-19 (Prop 50 map) and Assembly AD-12, AD-21, AD-24, AD-25, AD-26, AD-28, AD-29.
 * Finalists checked against the Secretary of State's November 3, 2026 returns pages (api.sos.ca.gov/returns), Oct 8, 2026.
 * Research as of Oct 8, 2026.
 */

const US_REP_LEGAL =
  'At least 25 years old, a U.S. citizen for at least 7 years, and an inhabitant of California when elected (U.S. Constitution art. I, section 2); two-year term.';

const US_REP_CRITERIA: QualificationCriterion[] = [
  { id: 'lawmaking', label: 'Lawmaking and policy experience', detail: 'The job is writing, amending and voting on federal law.' },
  { id: 'committee-budget', label: 'Committee and budget/appropriations work', detail: 'Most legislative work happens in committees that shape spending and oversight.' },
  { id: 'district-service', label: 'Constituent services and knowledge of the district', detail: 'Members run casework offices and carry local priorities to Washington.' },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Little becomes law without bipartisan or cross-chamber partners.' },
];

const LEG_ELIGIBILITY =
  'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

function legCriteria(districtDetail: string): QualificationCriterion[] {
  return [
    { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
    { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
    { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
    { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
  ];
}

const FEC = 'No verified current totals; see FEC filings at https://www.fec.gov/data/ (as of Oct 8, 2026).';
const CAC = 'No verified current totals; see Cal-Access at https://cal-access.sos.ca.gov/ (as of Oct 8, 2026).';

const ASSEMBLY_STAKES_1 =
  'Assembly members write and vote on state laws and the state budget, serve two-year terms, and sit on committees that shape housing, health, schools, criminal justice and taxes.';

export const RACES_D_BAY_CENTRAL_COAST: Race[] = [
  // ───────────────────────────── CA-15 ─────────────────────────────
  {
    id: 'us-rep-ca15',
    categoryId: 'federal',
    title: 'U.S. Representative, 15th District',
    tldrLabel: 'CA-15',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, energy and infrastructure money, and oversight of the executive branch, and runs a casework office for veterans’ benefits, passports and federal agencies.',
      'CA-15 covers most of San Mateo County’s bayside and a slice of southern San Francisco. It is safely Democratic; the question is whether voters return a second-term Energy and Commerce member or a first-time Republican candidate.',
    ],
    introParagraphs: [
      'In the five-candidate June 2 primary, Democratic Rep. Kevin Mullin took about 65% and Republican Charles Hoelter about 18%, ahead of Democrat Anthony Van Dang at 8% (NBC News, 100% of expected vote). No public general-election polling is available; Mullin is a heavy favorite.',
    ],
    readingLinks: [
      {
        label: 'Redwood City Pulse — Five candidates up to bat for Congressional D-15 (May 2026)',
        url: 'https://www.rwcpulse.com/redwood-city/2026/05/13/five-candidates-up-to-bat-for-congressional-d-15/',
        summary: 'Primary-season profiles of Mullin and Hoelter and their stated priorities.',
      },
      {
        label: 'GrowSF — House District 15 (Nov 2026)',
        url: 'https://growsf.org/voter-guide/san-francisco-voter-guide-november-2026-election/contests/house-of-representatives-district-15/',
        summary: 'Advocacy-group voter guide (endorses Mullin); lists his 2026 community project funding.',
      },
    ],
    candidates: [
      {
        id: 'kevin-mullin',
        name: 'Kevin Mullin',
        party: 'D',
        role: 'U.S. Representative',
        campaignUrl: 'https://www.kevinmullinforcongress.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since January 2023 after ten years in the Assembly, including eight as Speaker pro Tempore.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since 2023; Assembly 2012–2022, where he says he authored more than 60 bills signed into law (Redwood City Pulse).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'House Energy and Commerce Committee in the 119th Congress, on its Commerce, Manufacturing and Trade; Energy; and Oversight subcommittees (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'San Mateo County native; secured about $12.8M in community project funding for the district this year, per GrowSF.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Co-sponsored the Affordable Innovation for the Grid Act with Rep. Diana Harshbarger (R-TN), approved 44-0 in a July 2026 committee markup.' },
          ],
        },
        bio: [
          'A San Mateo County native, Mullin served in the Assembly from 2012 to 2022, including as Speaker pro Tempore from 2014, and won the House seat vacated by Jackie Speier in 2022. He sits on the Energy and Commerce Committee.',
          'He cites work on Caltrain electrification and sea-level-rise funding, and says a Democratic majority would reverse Medicaid cuts and restore Affordable Care Act tax credits.',
        ],
        recordVsChange:
          'Mullin has a decade of Assembly leadership and a seat on one of the House’s most powerful committees. The case for change rests on policy disagreement, not a record of absence; Hoelter would start as a first-term member with no office experience.',
        scorecard: [
          { topic: 'Housing', position: '? No detailed federal housing plan found', comparison: 'Hoelter has no published housing position.' },
          { topic: 'Climate', position: '✓✓ Clean-energy and grid bills on Energy and Commerce; backed Caltrain electrification', comparison: 'Hoelter focuses on lowering gas and electric prices.' },
          { topic: 'Health care', position: '✓ Would reverse Medicaid cuts and restore ACA tax credits', comparison: 'Hoelter has no published health-care position.' },
          { topic: 'Immigration', position: '? No detailed position found in 2026 coverage', comparison: 'Hoelter has no published immigration position.' },
          { topic: 'Trump / House majority', position: '✓ Working to elect Democrats and flip the House', comparison: 'Hoelter would add to the Republican conference.' },
        ],
        money: FEC,
        endorsements: 'GrowSF (preliminary, Oct 2026); no complete list verified.',
      },
      {
        id: 'charles-hoelter',
        name: 'Charles Hoelter',
        party: 'R',
        role: 'Retired Training Supervisor',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Retired UPS supervisor and first-time candidate; no elected or policy experience found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'First run for office (Almanac, June 2026); no legislative or policy role found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public budget or committee experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'San Mateo County resident for more than 30 years (Redwood City Pulse).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'A retired UPS supervisor who has lived in San Mateo County for more than three decades; this is his first campaign.',
          'His listed priorities are congressional term limits, voter ID and cleaning up voter rolls, keeping transgender athletes out of women’s sports, high-school apprenticeships, and lower gas and electric prices.',
        ],
        scorecard: [
          { topic: 'Housing', position: '? No public position found', comparison: 'Mullin has no detailed federal housing plan either.' },
          { topic: 'Climate', position: '~ Wants lower gas and electric prices; no climate plan found', comparison: 'Mullin works on clean-energy and grid legislation.' },
          { topic: 'Health care', position: '? No public position found', comparison: 'Mullin wants to restore ACA tax credits.' },
          { topic: 'Immigration', position: '? No public position found; backs voter ID and voter-roll cleanup', comparison: 'Mullin has no detailed 2026 immigration position found.' },
          { topic: 'Trump / House majority', position: '✓ Would add to the Republican majority', comparison: 'Mullin is working to flip the House to Democrats.' },
        ],
        money: FEC,
        endorsements: 'No endorsement list found in major coverage.',
        notes: ['Did not return GrowSF’s or Redwood City Pulse’s questionnaires.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Mullin', '●', 'Progressive Left voters back the Democrat who wants to restore ACA subsidies and push clean-energy legislation over a Republican running on voter ID and sports restrictions.'],
      ['EL', 'Mullin', '●', 'Establishment Liberals value a former Speaker pro Tempore with a seat on Energy and Commerce and a record of bringing project money home.'],
      ['DM', 'Mullin', '●', 'Democratic Mainstays back the Democratic incumbent whose vote counts toward retaking the House.'],
      ['OL', 'Mullin', '◐', 'Outsider Left voters may find Mullin a conventional party figure, but the only alternative is a Republican.'],
      ['SS', 'Mullin', '○', 'Stressed Sideliners worried about health costs get an incumbent focused on ACA credits, though Hoelter’s pitch on energy prices could appeal.'],
      ['AR', 'Hoelter', '○', 'Ambivalent Right voters may prefer a Republican on energy costs and term limits, though Hoelter has offered little detail.', 'Ambivalent Right voters who value results could back Mullin, a former Speaker pro Tempore who co-wrote a grid bill with a Republican that passed committee 44-0, giving up a Republican vote for a Democrat.'],
      ['PR', 'Hoelter', '●', 'Populist Right voters favor the outsider Republican running on term limits, voter ID and voter-roll cleanup.'],
      ['CC', 'Hoelter', '●', 'Committed Conservatives back the Republican who would add to the GOP House majority.'],
      ['FF', 'Hoelter', '●', 'Faith and Flag Conservatives support the candidate who wants to keep transgender athletes out of women’s sports and require voter ID.'],
    ]),
    counterArguments: [
      'AR (Hoelter ○): But consider that Hoelter has no office experience and did not answer local questionnaires, while Mullin has worked across the aisle on energy bills.',
      'EL (Mullin ●): But consider that his public 2026 platform says little on housing or immigration, two of the district’s biggest issues.',
    ],
  },

  // ───────────────────────────── CA-17 ─────────────────────────────
  {
    id: 'us-rep-ca17',
    categoryId: 'federal',
    title: 'U.S. Representative, 17th District',
    tldrLabel: 'CA-17',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense and technology policy, and oversight of the executive branch, and runs a casework office for constituents dealing with federal agencies.',
      'CA-17 is the heart of Silicon Valley in Santa Clara and Alameda counties. Rep. Ro Khanna, a national progressive voice backing a billionaire tax, faces a Republican engineer; the seat is safely Democratic.',
    ],
    introParagraphs: [
      'Khanna won about 62% in the June 2 primary. Republican Ritesh Tandon took about 15%, edging fellow Republican Jennie Ha Phan (about 11%) for second; tech-backed Democrat Ethan Agarwal, recruited after Khanna backed a billionaire tax, finished out of the running (NBC News; JNS). No general-election polling is public.',
    ],
    readingLinks: [
      {
        label: 'ABC7 — Khanna’s anti-elite message fuels Silicon Valley backlash',
        url: 'https://abc7news.com/post/abc7-interview-rep-ro-khannas-anti-elite-message-fuels-silicon-valley-backlash-2028-buzz/18727387/',
        summary: 'Interview on his wealth-tax stance, the tech-funded challenge and 2028 speculation.',
      },
      {
        label: 'Axios — Khanna, Massie say they can force another Epstein vote (Sept 2026)',
        url: 'https://www.axios.com/2026/09/18/epstein-files-vote-massie-khanna-support',
        summary: 'Their bipartisan follow-up to the 2025 Epstein Files Transparency Act.',
      },
    ],
    candidates: [
      {
        id: 'ro-khanna',
        name: 'Ro Khanna',
        party: 'D',
        role: 'United States Congressmember',
        campaignUrl: 'https://www.rokhanna.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Five terms in the House since 2017, with a bipartisan transparency law to his name; earlier a Commerce Department official.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since January 2017; co-led the Epstein Files Transparency Act with Rep. Thomas Massie (R-KY), passed nearly unanimously and signed in 2025 (Axios).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Member of the House Oversight and Armed Services committees.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented the Silicon Valley district for nearly ten years.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Gathered signatures with Massie to force the 2025 Epstein vote and announced the 218 needed for a second bill in Sept 2026 (Axios).' },
          ],
        },
        bio: [
          'Elected in 2016 after serving as a deputy assistant secretary of Commerce under President Obama, Khanna sits on the Oversight and Armed Services committees and is a leading progressive voice.',
          'He backs the one-time billionaire wealth tax on this year’s ballot, which led some tech investors to recruit a Democratic challenger against him, and co-led the bipartisan push to release the Epstein files. He is widely discussed as a possible 2028 presidential candidate.',
        ],
        recordVsChange:
          'Khanna has seniority, national visibility and a bipartisan law on government transparency. Critics in the tech industry say his focus has shifted to national ambitions; Tandon would be a freshman in the majority party only if Republicans hold the House.',
        scorecard: [
          { topic: 'Housing', position: '? No specific 2026 housing plan found in coverage', comparison: 'Tandon has criticized state housing and homelessness policy.' },
          { topic: 'Climate', position: '✓ Progressive Caucus Democrat supportive of clean-energy policy', comparison: 'Tandon has no published climate plan.' },
          { topic: 'Health care', position: '✓✓ Longtime Medicare for All supporter; backs the billionaire tax that would mainly fund health programs', comparison: 'Tandon favors price transparency over a tax-funded expansion.' },
          { topic: 'Immigration', position: '? No detailed 2026 position found', comparison: 'Tandon opposed abolishing ICE in 2020.' },
          { topic: 'Trump / House majority', position: '✓✓ Leading critic of the administration; would vote with Democrats for control', comparison: 'Tandon would add to the Republican conference.' },
        ],
        money: 'Had nearly $15.5M in his campaign account at the end of 2025, per news reports; see FEC filings at https://www.fec.gov/data/ for current totals.',
        endorsements: 'No complete list verified (as of Oct 8, 2026).',
        notes: [
          'After the primary he said “the tech lords” recruited a challenger and spent $1 million attacking him (American Bazaar, June 2026); that is his characterization.',
        ],
      },
      {
        id: 'ritesh-tandon',
        name: 'Ritesh Tandon',
        party: 'R',
        role: 'CEO/Entrepreneur/Researcher',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'San Jose engineer and tech entrepreneur who has run for this seat before; no elected or government experience found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative or government policy role found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public budget or committee experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'San Jose-based; ran against Khanna in 2020 and the 2024 primary; past executive-committee role with the Sankara Eye Foundation (Milpitas Beat, 2020).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'An Indian American engineer and entrepreneur who spent about 22 years in tech, including at Cisco, and later founded an AI and cloud startup. This is his third run against Khanna.',
          'In his 2020 campaign he opposed abolishing ICE and defunding police, backed health-care price transparency over tax-funded expansion, and argued California regulation was driving people away (Milpitas Beat).',
        ],
        scorecard: [
          { topic: 'Housing', position: '~ Has criticized state homelessness and infrastructure record; no federal plan found', comparison: 'Khanna has no detailed 2026 housing plan found.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Khanna supports clean-energy policy.' },
          { topic: 'Health care', position: '~ Price and drug-cost transparency, more insurance options; opposed tax-the-rich financing (2020)', comparison: 'Khanna backs Medicare for All.' },
          { topic: 'Immigration', position: '✓ Opposed abolishing ICE (2020)', comparison: 'Khanna has no detailed 2026 position found.' },
          { topic: 'Trump / House majority', position: '✓ Would add to the Republican majority', comparison: 'Khanna is a leading administration critic.' },
        ],
        money: FEC,
        endorsements: 'No endorsement list found in major coverage.',
        notes: ['Most detailed positions available are from his 2020 campaign; 2026 positions may differ.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Khanna', '●', 'Progressive Left voters back a leader of the left who supports Medicare for All and the billionaire tax.'],
      ['EL', 'Khanna', '●', 'Establishment Liberals value a senior Democrat with committee seats and a bipartisan transparency law, even if his populism unsettles some tech donors.'],
      ['DM', 'Khanna', '●', 'Democratic Mainstays back the Democratic incumbent in a seat that counts toward House control.'],
      ['OL', 'Khanna', '●', 'Outsider Left voters like that Khanna took on tech billionaires and party leadership on the Epstein files.'],
      ['SS', 'Khanna', '○', 'Stressed Sideliners get an incumbent pitching taxes on the very rich to fund health care, though they pay little attention to either candidate.'],
      ['AR', 'Tandon', '○', 'Ambivalent Right voters wary of a wealth tax and regulation may lean to the Republican engineer, though his platform is thin.', 'Ambivalent Right voters who want proven effectiveness could back Khanna, who passed a bipartisan transparency law with a Republican, accepting his support for a billionaire tax.'],
      ['PR', 'Tandon', '◐', 'Populist Right voters favor the Republican who opposes abolishing ICE, though Khanna’s anti-elite, Epstein-files stance has some cross-party pull.', 'Populist Right voters who value Khanna’s fight to release the Epstein files with Rep. Massie could back the five-term incumbent, giving up a Republican vote and accepting his Medicare for All and wealth-tax positions.'],
      ['CC', 'Tandon', '●', 'Committed Conservatives back the Republican who opposes tax-the-rich financing and wants lighter regulation.'],
      ['FF', 'Tandon', '●', 'Faith and Flag Conservatives support the Republican who backs police and opposes abolishing ICE.'],
    ]),
    counterArguments: [
      'PR (Tandon ◐): But consider that Khanna has worked with Republicans like Massie on government transparency, an issue many Populist Right voters care about.',
      'EL (Khanna ●): But consider that some local business leaders argue his national ambitions and wealth-tax push have drawn him away from Silicon Valley’s concerns.',
    ],
  },

  // ───────────────────────────── CA-18 ─────────────────────────────
  {
    id: 'us-rep-ca18',
    categoryId: 'federal',
    title: 'U.S. Representative, 18th District',
    tldrLabel: 'CA-18',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, farm and water policy, and oversight of the executive branch, and runs a casework office for constituents dealing with federal agencies.',
      'Under the Prop 50 map, CA-18 keeps parts of San José, Gilroy, Morgan Hill, San Benito County and rural Monterey and Santa Cruz counties, and adds Coalinga and western Kings County (BenitoLink). It remains safely Democratic.',
    ],
    introParagraphs: [
      'Rep. Zoe Lofgren, in Congress since 1995, took about 55% in the June 2 primary; Republican Shane Lewis took about 29%, and Democrat Luis Arreguín about 12% (NBC News; Secretary of State). Lewis carried the Fresno County portion. No public general-election polling is available.',
    ],
    readingLinks: [
      {
        label: 'BenitoLink — 2026 primary Q&A, 18th Congressional District (April 2026)',
        url: 'https://benitolink.com/2026-primary-election-qa-18th-u-s-congressional-district/',
        summary: 'Candidates’ own answers on health care, tariffs, farm labor and water.',
      },
      {
        label: 'BenitoLink — What Prop 50 could change in San Benito County',
        url: 'https://benitolink.com/what-prop-50-could-change-in-san-benito-county/',
        summary: 'How the new map extends the district into Coalinga and Avenal.',
      },
    ],
    candidates: [
      {
        id: 'zoe-lofgren',
        name: 'Zoe Lofgren',
        party: 'D',
        role: 'Congresswoman',
        campaignUrl: 'https://www.zoelofgren.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 1995 and the top Democrat on the Science, Space and Technology Committee; earlier a Santa Clara County supervisor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since 1995; author of the bipartisan Farm Workforce Modernization Act (BenitoLink).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Ranking member of the House Science, Space and Technology Committee (Ballot Brief).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Grew up in Santa Clara County; county supervisor 1981–1994 (House office biography).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Farm Workforce Modernization Act drew Republican co-sponsors and passed the House in 2019 and 2021.' },
          ],
        },
        bio: [
          'A former immigration lawyer who taught at Santa Clara University School of Law, Lofgren served on the Santa Clara County Board of Supervisors before winning her House seat in 1994. She is the ranking Democrat on the Science, Space and Technology Committee.',
          'She calls Trump’s tariffs an “unequivocal disaster” for farmers and families, wants to restore ACA tax credits and reverse Medicaid cuts, and is running on experience and delivering federal project money.',
        ],
        recordVsChange:
          'Lofgren brings three decades of seniority and the district’s farm-labor bill. The case for change is generational and ideological: she is 78, and Lewis argues Washington overrides local communities.',
        scorecard: [
          { topic: 'Housing', position: '? No specific 2026 housing plan found', comparison: 'Lewis has no published housing position.' },
          { topic: 'Climate', position: '? Not addressed in 2026 coverage', comparison: 'Lewis wants more water access for farmers.' },
          { topic: 'Health care', position: '✓✓ Restore ACA credits, reverse Medicaid cuts; rural physician and telehealth programs', comparison: 'Lewis blames federal borrowing for rising health costs.' },
          { topic: 'Immigration', position: '✓ Former immigration-law teacher; authored farmworker legalization bill', comparison: 'Lewis wants to stop federal immigration actions from overriding local communities.' },
          { topic: 'Trump / House majority', position: '✓✓ Opposes Trump’s tariffs; would vote with Democrats for control', comparison: 'Lewis would add to the Republican conference.' },
        ],
        money: FEC,
        endorsements: 'No complete list verified (as of Oct 8, 2026).',
      },
      {
        id: 'shane-lewis',
        name: 'Shane Lewis',
        party: 'R',
        role: 'Electrical Test Engineer',
        campaignUrl: 'https://www.shanelewisforcongress.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Marine Corps veteran and medical-device test engineer; ran for the county Board of Education in 2024 and has not held office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'Has not held elected office (BenitoLink).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public budget or committee experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Santa Clara County resident for 30 years; ran for the Santa Clara County Board of Education in 2024.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'A Marine Corps veteran and R&D electrical test engineer and failure analyst at a medical-device company, Lewis has lived in Santa Clara County for 30 years and ran for the county Board of Education in 2024.',
          'He campaigns on restoring local control, more water for farmers, a stronger guest-worker program, and tying school funding to measurable improvement.',
        ],
        scorecard: [
          { topic: 'Housing', position: '? No public position found', comparison: 'Lofgren has no specific 2026 housing plan found.' },
          { topic: 'Climate', position: '~ More water access for farmers; no climate plan found', comparison: 'Lofgren did not address climate in 2026 coverage.' },
          { topic: 'Health care', position: '~ Blames federal borrowing for rising costs; no plan found', comparison: 'Lofgren wants to restore ACA credits.' },
          { topic: 'Immigration', position: '~ Wants local communities shielded from sudden federal shifts; backs guest-worker program', comparison: 'Lofgren authored a farmworker legalization bill.' },
          { topic: 'Trump / House majority', position: '? Did not address tariffs; would add to the Republican majority', comparison: 'Lofgren calls the tariffs a disaster.' },
        ],
        money: FEC,
        endorsements: 'No endorsement list found in major coverage.',
        notes: ['Says his wife is from Guatemala (BenitoLink).'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Lofgren', '●', 'Progressive Left voters back the Democrat who wrote the farmworker legalization bill and wants Medicaid cuts reversed.'],
      ['EL', 'Lofgren', '●', 'Establishment Liberals value three decades of seniority and a ranking-member post on a major committee.'],
      ['DM', 'Lofgren', '●', 'Democratic Mainstays, including many Latino voters in the district, back the incumbent on health care and immigration.'],
      ['OL', 'Lofgren', '◐', 'Outsider Left voters may want a younger voice after 31 years, but Lofgren is the only Democrat on the ballot.'],
      ['SS', 'Lofgren', '○', 'Stressed Sideliners in farm towns hear her case against tariffs and for ACA credits, though Lewis’s water message resonates in the Valley portion.'],
      ['AR', 'Lewis', '○', 'Ambivalent Right voters may like Lewis’s local-control and farm-water pitch, though he has no record in office.', 'Ambivalent Right voters who weigh delivery for farms could back Lofgren, author of the bipartisan Farm Workforce Modernization Act with 31 years of seniority, accepting a Democratic vote on House control.'],
      ['PR', 'Lewis', '●', 'Populist Right voters back the Marine veteran Republican who wants to curb federal overreach.'],
      ['CC', 'Lewis', '●', 'Committed Conservatives favor the Republican who blames federal borrowing for rising costs.'],
      ['FF', 'Lewis', '●', 'Faith and Flag Conservatives support the Marine veteran on the Republican line.'],
    ]),
    counterArguments: [
      'AR (Lewis ○): But consider that Lofgren’s farm-labor bill and seniority speak directly to the guest-worker and water issues Lewis campaigns on.',
      'OL (Lofgren ◐): But consider that she has served since 1995; voters wanting generational change have no Democratic alternative on this ballot.',
    ],
  },

  // ───────────────────────────── CA-19 ─────────────────────────────
  {
    id: 'us-rep-ca19',
    categoryId: 'federal',
    title: 'U.S. Representative, 19th District',
    tldrLabel: 'CA-19',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, coastal and farm policy, and oversight of the executive branch, and runs a casework office for veterans and others dealing with federal agencies.',
      'CA-19 runs from south San José through Santa Cruz and the Monterey Peninsula into northern San Luis Obispo County. It is safely Democratic; Rep. Jimmy Panetta, a Ways and Means member, seeks a sixth term.',
    ],
    introParagraphs: [
      'Panetta took about 58% in the June 2 primary; Republican Peter Coe Verbica took about 21%, and Democrat Sean Dougherty about 12% (NBC News, 100% of expected vote). Verbica has challenged Panetta to a televised debate. No public polling is available.',
    ],
    readingLinks: [
      {
        label: 'Monterey County Now — Seven candidates vie for Congress (April 2026)',
        url: 'https://www.montereycountynow.com/news/local_news/seven-candidates-vie-for-congress-including-incumbent-jimmy-panetta/article_7aa29bf8-5383-4f7d-99ed-6a3eed540c0e.html',
        summary: 'Primary-field profiles, including Panetta’s record claims and Verbica’s affordability pitch.',
      },
    ],
    candidates: [
      {
        id: 'jimmy-panetta',
        name: 'Jimmy Panetta',
        party: 'D',
        role: 'United States Representative',
        campaignUrl: 'https://www.jimmypanetta.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2017 on Ways and Means and Budget; earlier a prosecutor and Navy Reserve intelligence officer.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since 2017; says 24 of his bills have become law (Monterey County Now).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Member of Ways and Means and Budget; chief deputy whip in the 119th Congress (House office).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Carmel Valley resident and former Monterey County deputy district attorney; held 26 town halls this term.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Says 24 of his bills have become law since 2017, four of them this term (Monterey County Now).' },
          ],
        },
        bio: [
          'A former prosecutor in Monterey and Alameda counties, Panetta served as a Navy Reserve intelligence officer in Afghanistan, earning a Bronze Star. He was elected in 2016 and sits on Ways and Means and Budget.',
          'His priorities include lowering living costs, affordable housing, health care, immigration reform, repealing tariffs he calls harmful, coastal protection and fentanyl enforcement.',
        ],
        recordVsChange:
          'Panetta sits on the tax-writing committee and cites $16 billion in federal investment in the district. The case for change is ideological; Verbica argues mandates and regulation drive up costs.',
        scorecard: [
          { topic: 'Housing', position: '✓ Affordable housing is a listed priority', comparison: 'Verbica wants to cut regulatory cost drivers.' },
          { topic: 'Climate', position: '✓ Coastline protection is a listed priority', comparison: 'Verbica would protect natural-gas appliance choice.' },
          { topic: 'Health care', position: '✓ Accessible health care is a listed priority', comparison: 'Verbica has no health plan found.' },
          { topic: 'Immigration', position: '✓ Supports comprehensive immigration reform', comparison: 'Verbica has no published immigration position.' },
          { topic: 'Trump / House majority', position: '✓ Wants harmful tariffs repealed; votes with Democrats', comparison: 'Verbica would add to the Republican conference.' },
        ],
        money: FEC,
        endorsements: 'No complete list verified (as of Oct 8, 2026).',
      },
      {
        id: 'peter-verbica',
        name: 'Peter Coe Verbica',
        party: 'R',
        role: 'Business Owner',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Santa Cruz County financial planner and business owner; ran for the State Board of Equalization in 2022 and has not held public office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office found; ran for Board of Equalization District 2 in 2022 (iVoterGuide).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public budget experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Santa Cruz County resident; past roles on the county Republican Central Committee.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'A certified financial planner, business owner and father of four from Santa Cruz County, and author of “Hard Won Cowboy Wisdom.” He ran for the Board of Equalization in 2022.',
          'He campaigns on affordability: dropping mandates that do not produce results, lowering energy costs, keeping natural-gas appliances legal, and investing in water storage.',
        ],
        scorecard: [
          { topic: 'Housing', position: '~ Cut “unnecessary cost drivers” and mandates', comparison: 'Panetta lists affordable housing as a priority.' },
          { topic: 'Climate', position: '✗ Protect natural-gas appliances; balance stewardship with “economic reality”', comparison: 'Panetta prioritizes coastal protection.' },
          { topic: 'Health care', position: '? No public position found', comparison: 'Panetta lists accessible health care.' },
          { topic: 'Immigration', position: '? No public position found', comparison: 'Panetta supports immigration reform.' },
          { topic: 'Trump / House majority', position: '✓ Would add to the Republican majority', comparison: 'Panetta opposes the tariffs.' },
        ],
        money: FEC,
        endorsements: 'No endorsement list found in major coverage.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Panetta', '●', 'Progressive Left voters back the Democrat on health care, immigration reform and coastal protection.'],
      ['EL', 'Panetta', '●', 'Establishment Liberals value a Ways and Means member and former prosecutor with a long record of enacted bills.'],
      ['DM', 'Panetta', '●', 'Democratic Mainstays back the Democratic incumbent whose seat counts toward House control.'],
      ['OL', 'Panetta', '◐', 'Outsider Left voters may see Panetta as a moderate party insider, but the alternative is a Republican.'],
      ['SS', 'Panetta', '○', 'Stressed Sideliners hear both men talk about cost of living; Panetta has a record of bringing money home.'],
      ['AR', 'Verbica', '◐', 'Ambivalent Right voters who want lower energy and regulatory costs fit Verbica’s pitch.', 'Ambivalent Right voters who prize effectiveness could back Panetta, a veteran and former prosecutor on the tax-writing committee, accepting a Democratic vote on House control.'],
      ['PR', 'Verbica', '●', 'Populist Right voters favor the Republican who wants to scrap mandates and protect gas appliances.'],
      ['CC', 'Verbica', '●', 'Committed Conservatives back the financial-planner Republican focused on cutting regulation.'],
      ['FF', 'Verbica', '●', 'Faith and Flag Conservatives support the Republican over a Democratic incumbent.'],
    ]),
    counterArguments: [
      'AR (Verbica ◐): But consider that Panetta, a Navy veteran and former prosecutor, is one of the more moderate Democrats and sits on the committee that writes tax law.',
    ],
  },

  // ───────────────────────────── AD-12 ─────────────────────────────
  {
    id: 'assembly-ad12',
    categoryId: 'state-leg',
    title: 'State Assembly, District 12',
    tldrLabel: 'AD-12',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-12 covers all of Marin County and southern Sonoma County, including Rohnert Park and Petaluma.'),
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'Assemblymember Damon Connolly is running for the State Senate, leaving an open seat. Two Democrats compete: a labor- and DSA-backed progressive and a business-friendlier county supervisor. Outside groups have spent millions, including over $1.6M from a crypto-funded committee (Press Democrat).',
    ],
    introParagraphs: [
      'Marin Supervisor Eric Lucan led the June 2 primary with about 27–28%. Rohnert Park Councilmember Jackie Elward finished second with about 22%, overtaking Republican Eryn Cervantes in late counting (Secretary of State; IVN). The state Democratic Party’s endorsing caucus reached no consensus (Elward 48%, Lucan 46%). Independents and Republicans likely decide it.',
    ],
    readingLinks: [
      {
        label: 'Press Democrat — Crypto-backed group pours $1.6M into AD-12 (Oct 1, 2026)',
        url: 'https://www.pressdemocrat.com/2026/10/01/california-assembly-12-lucan-elward-crypto-billionaires/',
        summary: 'Outside spending on both sides and the candidates’ responses.',
      },
      {
        label: 'IVN — How liberal is Marin County, really? (Sept 28, 2026)',
        url: 'https://ivn.us/how-liberal-is-marin-county-really-independent-voters-will-decide/',
        summary: 'Side-by-side of endorsements and positions on AI, Prop 40 and housing.',
      },
      {
        label: 'KRCB — North Bay candidates vie for AD-12 (May 2026)',
        url: 'https://krcb.org/20260515101029/news-feed/north-bay-candidates-vie-for-californias-assembly-district-12-seat-ahead-of-june-primary',
        summary: 'Primary-season profiles of both finalists.',
      },
    ],
    candidates: [
      {
        id: 'eric-lucan',
        name: 'Eric Lucan',
        party: 'D',
        role: 'County Supervisor/Father',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Marin County supervisor and board president, after 11 years on the Novato City Council and more than a decade on the SMART rail board.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Local lawmaking: Novato City Council for 11 years (three terms as mayor), now Marin County Board of Supervisors (KRCB).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'President of the Marin Board of Supervisors, which adopts the county budget; SMART board member since 2011.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Represents Novato-area constituents; worked about 15 years on widening the Marin-Sonoma Narrows (KRCB).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Backed by five county supervisors, 10 of 15 district mayors and about 50 council members (Press Democrat); no state legislative record.' },
          ],
        },
        bio: [
          'Marin County supervisor from Novato who served 11 years on the Novato City Council, including three terms as mayor, and has sat on the SMART rail board since 2011. He spent nearly two decades in business and marketing.',
          'He calls himself a consensus builder focused on cost of living, climate resiliency and small business, and opposes Prop 40, the one-time billionaire tax.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Density bonuses and redevelopment-style financing; long SMART and Narrows record', comparison: 'Elward stresses local control and cites Rohnert Park’s housing progress.' },
          { topic: 'Climate', position: '✓ Climate resiliency for fire, flood and sea-level rise', comparison: 'Elward helped move Rohnert Park to 100% renewable power.' },
          { topic: 'Taxes', position: '✗ Opposes Prop 40 billionaire tax, citing reliance on top earners', comparison: 'Elward strongly supports Prop 40.' },
          { topic: 'Tech / AI', position: '~ State guardrails on chatbots and kids; wary of a fight with Washington', comparison: 'Elward wants a moratorium on new AI data centers.' },
          { topic: 'Caucus / ideology', position: '~ Mainstream liberal Democrat; backed by Rep. Huffman and local officials', comparison: 'Elward is backed by labor, DSA and the Working Families Party.' },
        ],
        money: `${CAC} A Grow California committee funded by Chris Larsen and Tim Draper has spent over $1.6M supporting Lucan and opposing Elward; Lucan says he does not coordinate with it and has asked such groups to stop (Press Democrat, Oct 1, 2026).`,
        endorsements: 'Rep. Jared Huffman; Marin Independent Journal (June, reaffirmed Sept 2026); five Marin and Sonoma supervisors; most district mayors (IVN, Sept 28, 2026).',
      },
      {
        id: 'jackie-elward',
        name: 'Jackie Elward',
        party: 'D',
        role: 'Councilwoman/Educator',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Rohnert Park City Council member and educator; shorter local record than her opponent and no state experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Rohnert Park City Council; worked on housing, homelessness and mental-health response (KRCB).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on a small-city budget; no county or state budget role.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Rooted in southern Sonoma County; less presence in Marin, where most district voters live.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Assembled a broad labor coalition (California Labor Federation, 21 unions) and Connolly’s endorsement; no state legislative record.' },
          ],
        },
        bio: [
          'An educator and mother of three who immigrated from the Democratic Republic of Congo and learned English after arriving, Elward was the first Black woman elected to the Rohnert Park City Council.',
          'She runs as an openly progressive Democrat on wages, affordable housing and checking Big Tech, supports Prop 40 and single-payer health care, and wants a moratorium on new AI data centers.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Cites Rohnert Park’s housing and homelessness progress; stresses local control', comparison: 'Lucan favors density bonuses and redevelopment financing.' },
          { topic: 'Climate', position: '✓ Moved Rohnert Park to 100% renewable power; utility rate cap', comparison: 'Lucan focuses on climate resiliency.' },
          { topic: 'Taxes', position: '✓✓ Strong Prop 40 supporter; close corporate tax loopholes', comparison: 'Lucan opposes Prop 40.' },
          { topic: 'Tech / AI', position: '✓✓ Moratorium on new AI data centers', comparison: 'Lucan prefers targeted guardrails.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive; backed by DSA, labor and Working Families Party', comparison: 'Lucan is a mainstream liberal backed by local officials.' },
        ],
        money: `${CAC} Labor-aligned committees backing her have also spent heavily (Press Democrat, Oct 1, 2026).`,
        endorsements: 'Assemblymember Damon Connolly; Rep. Mike Thompson; Treasurer Fiona Ma; California Labor Federation; Working Families Party; Sonoma County DSA (IVN, Sept 28, 2026; Press Democrat, Aug 13, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Elward', '●', 'Progressive Left voters back the DSA- and labor-endorsed candidate who supports Prop 40, single-payer and an AI data-center moratorium; she is clearly further left.'],
      ['EL', 'Lucan', '●', 'Establishment Liberals favor the experienced county supervisor endorsed by Rep. Huffman and most local officials, who pairs liberal values with a consensus style.'],
      ['DM', 'Elward', '○', 'Democratic Mainstays split here; labor’s backing and the outgoing Democratic incumbent’s endorsement tilt toward Elward, though many local Democratic officials back Lucan.'],
      ['OL', 'Elward', '●', 'Outsider Left voters favor the activist candidate taking on crypto and Big Tech money over the establishment pick.'],
      ['SS', 'Elward', '○', 'Stressed Sideliners hear Elward’s wage and utility-rate-cap message, though Lucan also centers cost of living.'],
      ['AR', 'Lucan', '◐', 'Ambivalent Right voters prefer the more business-friendly Democrat who opposes the billionaire tax.'],
      ['PR', 'Lucan', '○', 'Populist Right voters have no Republican option; Lucan is the less liberal of two Democrats, though they distrust his establishment backing.'],
      ['CC', 'Lucan', '◐', 'Committed Conservatives pick the Democrat who opposes Prop 40 and is more open to business.'],
      ['FF', 'Lucan', '○', 'Faith and Flag Conservatives lean to the less progressive Democrat, with little enthusiasm.'],
    ]),
    counterArguments: [
      'CC (Lucan ◐): But consider that a crypto-billionaire committee has spent heavily for him; Lucan says he does not coordinate with it.',
      'PL (Elward ●): But consider that she has a shorter, small-city record and less experience in Marin, where most of the district’s voters live.',
    ],
  },

  // ───────────────────────────── AD-21 ─────────────────────────────
  {
    id: 'assembly-ad21',
    categoryId: 'state-leg',
    title: 'State Assembly, District 21',
    tldrLabel: 'AD-21',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-21 covers bayside San Mateo County from Brisbane to East Palo Alto.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'In a safely Democratic Peninsula seat, voters choose between a committee-chair incumbent focused on water and wildfire and a Republican tax preparer running on taxpayer accountability.',
    ],
    introParagraphs: [
      'Democratic Assemblymember Diane Papan won the June 2 primary with 78.7% to Republican Jabra Muhawieh’s 21.3% (Secretary of State via The Ballot Brief). Papan is a heavy favorite; no public polling exists.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 21',
        url: 'https://theballotbrief.com/state/california/san-mateo-county/california-assembly-district-21',
        summary: 'Neutral roster page with primary results and stated priorities.',
      },
    ],
    candidates: [
      {
        id: 'diane-papan',
        name: 'Diane Papan',
        party: 'D',
        role: 'California State Assemblymember',
        campaignUrl: 'https://www.dianepapan.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since December 2022 and chair of the Water, Parks and Wildlife Committee; earlier San Mateo city councilmember and mayor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 5, 2022; 2026 bills include AB 2469 (data-center water disclosure) and AB 1772 (invasive mussels) (committee agendas).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair of the Assembly Water, Parks and Wildlife Committee in 2025–2026 (committee agendas).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'San Mateo City Council from 2015, including as deputy mayor and mayor (Wikipedia).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Moves bills through her committee and the floor as a chair in the majority party.' },
          ],
        },
        bio: [
          'An attorney (UC Hastings) and former San Mateo mayor, Papan was elected to the Assembly in 2022 and chairs the Water, Parks and Wildlife Committee.',
          'Her priorities include year-round wildfire prevention, a constitutional amendment protecting reproductive freedom including contraception, and expanding recycled water.',
        ],
        recordVsChange:
          'Papan chairs a committee central to drought and wildfire policy. A Republican replacement would start in a small minority without committee leverage.',
        scorecard: [
          { topic: 'Housing & transit', position: '? No detailed housing platform found', comparison: 'Muhawieh lists homeowners and working families; no plan found.' },
          { topic: 'Climate', position: '✓✓ Wildfire prevention, recycled water, data-center water disclosure', comparison: 'Muhawieh has no climate platform found.' },
          { topic: 'Public safety', position: '? No specific platform found', comparison: 'Muhawieh has no stated position.' },
          { topic: 'Taxes', position: '? No stated tax position found', comparison: 'Muhawieh wants government “accountable to taxpayers.”' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat; reproductive-rights amendment', comparison: 'Muhawieh is a Republican business owner.' },
        ],
        money: CAC,
        endorsements: 'No complete list verified (as of Oct 8, 2026).',
      },
      {
        id: 'jabra-muhawieh',
        name: 'Jabra J. Muhawieh',
        party: 'R',
        role: 'Enrolled Agent/Businessman',
        campaignUrl: 'https://jabraforstateassembly.com/home-1',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Millbrae tax preparer, enrolled agent and real estate broker; no elected or policy experience found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative or government role found.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Enrolled Agent and tax professional running a family tax-prep firm (Ballot Brief); no public-budget role.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Millbrae-based; family grocery business has served San Francisco since 1906.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'A Millbrae business owner, IRS Enrolled Agent and California real estate broker who runs his family’s tax-preparation firm and a San Francisco grocery and liquor business dating to 1906.',
          'He campaigns on results-focused government accountable to taxpayers and more opportunity for working families, homeowners and small businesses.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '~ Opportunities for homeowners; no plan found', comparison: 'Papan has no detailed housing platform found.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Papan chairs the water and wildlife committee.' },
          { topic: 'Public safety', position: '? No public position found', comparison: 'Papan has no specific platform found.' },
          { topic: 'Taxes', position: '✓ Taxpayer accountability', comparison: 'Papan has no stated tax position.' },
          { topic: 'Caucus / ideology', position: '✓ Small-business Republican', comparison: 'Papan is a mainstream Democrat.' },
        ],
        money: CAC,
        endorsements: 'No endorsement list found in major coverage.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Papan', '●', 'Progressive Left voters back the Democrat pushing a reproductive-freedom amendment and wildfire and water protections.'],
      ['EL', 'Papan', '●', 'Establishment Liberals value an experienced committee chair and former mayor.'],
      ['DM', 'Papan', '●', 'Democratic Mainstays back the Democratic incumbent in a safe seat.'],
      ['OL', 'Papan', '◐', 'Outsider Left voters prefer the Democrat though she is a conventional, establishment legislator.'],
      ['SS', 'Papan', '○', 'Stressed Sideliners have little information on either candidate and default to the incumbent with a record.'],
      ['AR', 'Muhawieh', '○', 'Ambivalent Right voters may like a small-business tax professional promising taxpayer accountability, though his platform is thin.', 'Ambivalent Right voters who want competence could back Papan, a former San Mateo mayor who now chairs the Water, Parks and Wildlife Committee, accepting a Democrat for a seat with real leverage.'],
      ['PR', 'Muhawieh', '●', 'Populist Right voters back the Republican outsider over a Sacramento incumbent.'],
      ['CC', 'Muhawieh', '●', 'Committed Conservatives support the Republican tax professional focused on taxpayer accountability.'],
      ['FF', 'Muhawieh', '●', 'Faith and Flag Conservatives favor the Republican over a Democrat pushing a reproductive-rights amendment.'],
    ]),
    counterArguments: [
      'AR (Muhawieh ○): But consider that he has no public record or detailed plan, while Papan’s committee oversees water and wildfire issues that affect Peninsula homeowners.',
    ],
  },

  // ───────────────────────────── AD-24 ─────────────────────────────
  {
    id: 'assembly-ad24',
    categoryId: 'state-leg',
    title: 'State Assembly, District 24',
    tldrLabel: 'AD-24',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-24 covers parts of San José plus Milpitas, Fremont, Newark and Sunol.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'The incumbent chairs the Progressive Caucus and champions social housing and a wealth tax; his Republican opponent is a small-business owner who wants less building regulation and more policing of low-level crime. The seat is safely Democratic.',
    ],
    introParagraphs: [
      'Democratic Assemblymember Alex Lee took 65.4% in the June 2 primary; Republican Max Hsia took 25.0% and no-party Yang Shao 9.6% (Secretary of State via The Ballot Brief). Lee is a heavy favorite.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 24',
        url: 'https://theballotbrief.com/state/california/santa-clara-county/california-assembly-district-24',
        summary: 'Neutral roster page with primary results and stated priorities.',
      },
    ],
    candidates: [
      {
        id: 'alex-lee',
        name: 'Alex Lee',
        party: 'D',
        role: 'State Assemblymember',
        campaignUrl: 'https://votealexlee.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since December 2020, chair of the Human Services Committee and the Legislative Progressive Caucus; earlier a legislative aide.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 7, 2020; 2026 bills include AB 1675 (no tax breaks for ICE contractors) and AB 1801 (detention-center permits) (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair of the Human Services Committee (Assembly press release) and of the Legislative Progressive Caucus.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Secured $2.5M in 2022 for Milpitas bike infrastructure and services for unhoused people.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Leads a large caucus, but signature bills such as AB 259 (wealth tax) and social-housing proposals have stalled.' },
          ],
        },
        bio: [
          'Elected at 25 in 2020 after working as a legislative aide to Sen. Henry Stern, Lee is a self-described democratic socialist who chairs the Progressive Caucus and the Human Services Committee.',
          'He has repeatedly pushed social housing and a wealth tax, endorsed Prop 40, wants to ban corporate campaign donations, and backs expanded CalFresh and immigrant services.',
        ],
        recordVsChange:
          'Lee leads the Legislature’s largest ideological caucus and a policy committee. Voters who think his wealth-tax and social-housing push goes too far have a clear Republican alternative, though one with no record in office.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓✓ Social housing and a statewide public housing agency', comparison: 'Hsia wants fewer construction regulations.' },
          { topic: 'Education', position: '✓ Invest in schools and colleges', comparison: 'Hsia backs merit pay tied to classroom performance.' },
          { topic: 'Public safety', position: '~ Limits on private detention centers; no broader platform found', comparison: 'Hsia wants license-plate readers and a low-level-crime task force.' },
          { topic: 'Taxes', position: '✗ Supports wealth taxes, including Prop 40', comparison: 'Hsia fought regional sales-tax increases.' },
          { topic: 'Caucus / ideology', position: '✓✓ Democratic socialist; chairs the Progressive Caucus', comparison: 'Hsia is a Republican small-business owner.' },
        ],
        money: CAC,
        endorsements: 'Democratic Socialists of America (prior cycles); no complete 2026 list verified.',
        notes: ['Removed as ASUCD student senate president pro tempore in 2015 over a committee-appointment dispute (Wikipedia); a student-government matter, not a red flag.'],
      },
      {
        id: 'max-hsia',
        name: 'Max Hsia',
        party: 'R',
        role: 'Small Business Owner',
        campaignUrl: 'https://max4california.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Semi-retired San José small-business owner and anti-tax activist; no elected office found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative role found.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Organized against regional sales-tax increases (Ballot Brief); no public-budget role.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Ran a food and retail business in Berryessa for about a decade; Bay Area resident 30+ years.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'A semi-retired businessman who ran a food and retail business in San José’s Berryessa neighborhood for about a decade and has lived in the Bay Area for more than 30 years; he entered politics opposing regional sales-tax hikes.',
          'He wants fewer construction regulations, license-plate readers and a task force for low-level crime, and merit pay for teachers.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Cut construction regulation to lower costs', comparison: 'Lee wants publicly developed social housing.' },
          { topic: 'Education', position: '~ Merit pay tied to classroom performance', comparison: 'Lee backs more school and college investment.' },
          { topic: 'Public safety', position: '✓✓ License-plate readers; low-level-crime task force', comparison: 'Lee focuses on detention-center limits.' },
          { topic: 'Taxes', position: '✓✓ Opposed regional sales-tax increases', comparison: 'Lee backs wealth taxes.' },
          { topic: 'Caucus / ideology', position: '✓ Republican', comparison: 'Lee chairs the Progressive Caucus.' },
        ],
        money: CAC,
        endorsements: 'No endorsement list found in major coverage.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Lee', '●', 'Progressive Left voters back the Progressive Caucus chair pushing social housing and a wealth tax.'],
      ['EL', 'Lee', '◐', 'Establishment Liberals value his committee chair and experience, though his democratic-socialist agenda goes further than many prefer.'],
      ['DM', 'Lee', '●', 'Democratic Mainstays back the Democratic incumbent focused on CalFresh and immigrant communities.'],
      ['OL', 'Lee', '●', 'Outsider Left voters like a young democratic socialist who wants to ban corporate donations.'],
      ['SS', 'Lee', '○', 'Stressed Sideliners may be drawn to his housing and food-aid focus, though Hsia’s anti-tax message also lands.'],
      ['AR', 'Hsia', '◐', 'Ambivalent Right voters fit Hsia’s case for less regulation and no new sales taxes.', 'Ambivalent Right voters who want an effective representative could back Lee, a six-year Assembly member and committee chair, while giving up a vote against wealth taxes.'],
      ['PR', 'Hsia', '●', 'Populist Right voters favor the Republican who fought sales-tax hikes and wants tougher low-level-crime enforcement.'],
      ['CC', 'Hsia', '●', 'Committed Conservatives back the Republican who opposes new taxes and building regulation.'],
      ['FF', 'Hsia', '●', 'Faith and Flag Conservatives support the Republican law-and-order candidate.'],
    ]),
    counterArguments: [
      'EL (Lee ◐): But consider that his wealth-tax and social-housing bills have stalled, and his ideology may limit his reach with moderates.',
      'AR (Hsia ◐): But consider that Hsia has never held office and would serve in a small minority.',
    ],
  },

  // ───────────────────────────── AD-25 ─────────────────────────────
  {
    id: 'assembly-ad25',
    categoryId: 'state-leg',
    title: 'State Assembly, District 25',
    tldrLabel: 'AD-25',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-25 covers central and eastern San José.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'The incumbent chairs the Judiciary Committee, which handles civil law, tenant rights and liability; his opponent is a Republican attorney with no public platform. The seat is safely Democratic.',
    ],
    introParagraphs: [
      'Democratic Assemblymember Ash Kalra won the June 2 primary with about 72% to Republican Himat Singh Bainiwal’s 28% (Secretary of State via The Ballot Brief). Kalra is a heavy favorite; no public polling exists.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 25',
        url: 'https://theballotbrief.com/state/california/santa-clara-county/california-assembly-district-25',
        summary: 'Neutral roster page with primary results and designations.',
      },
    ],
    candidates: [
      {
        id: 'ash-kalra',
        name: 'Ash Kalra',
        party: 'D',
        role: 'State Assemblymember',
        campaignUrl: 'https://ashkalra.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2016 and Judiciary Committee chair, after eight years on the San José City Council and 11 years as a deputy public defender.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 2016; authored the California Racial Justice Act of 2020 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair of the Assembly Judiciary Committee in 2026 (committee agendas); previously chaired Labor and Employment.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'San José City Council, District 2, 2009–2016.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Racial Justice Act became law; chaired the Progressive Caucus.' },
          ],
        },
        bio: [
          'A former Santa Clara County deputy public defender and law instructor, Kalra served two terms on the San José City Council before entering the Assembly in 2016. He chairs the Judiciary Committee.',
          'He authored the Racial Justice Act and lists renter and homeowner protections, single-payer health care and worker protections as priorities.',
        ],
        recordVsChange:
          'Kalra chairs a gatekeeping committee for civil and consumer law. Voters weighing change have only a Republican with no stated platform as the alternative.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Renter and homeowner protections', comparison: 'Bainiwal has no stated platform.' },
          { topic: 'Health care', position: '✓✓ Single-payer health care', comparison: 'Bainiwal has no stated position.' },
          { topic: 'Public safety', position: '✓ Racial Justice Act author; criminal-justice reform', comparison: 'Bainiwal has no stated position.' },
          { topic: 'Taxes', position: '? No stated tax position found', comparison: 'Bainiwal has no stated position.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive Democrat; former Progressive Caucus chair', comparison: 'Bainiwal is a Republican attorney.' },
        ],
        money: CAC,
        endorsements: 'No complete list verified (as of Oct 8, 2026).',
        redFlags: [
          {
            severity: 'severe',
            status: 'convicted',
            text: 'While a San José councilmember in 2011, Kalra was arrested by the CHP and pleaded guilty to misdemeanor drunk driving; he received fines, a five-day work program, alcohol counseling and three years’ probation, and publicly called it an error in judgment.',
            whyItMatters: 'Legislators write the criminal laws they are bound by, and the Judiciary chair’s judgment is central to the job; the conviction is 15 years old with no reported repeat.',
            sources: [
              { label: 'NBC Bay Area — SJ councilman charged with DUI (2011)', url: 'https://www.nbcbayarea.com/news/local/sj-councilman-charged-with-dui/1892636/' },
              { label: 'San José Inside (2011)', url: 'https://www.sanjoseinside.com/politics/05_11_11_ash_kalra_dui/' },
            ],
          },
        ],
      },
      {
        id: 'himat-bainiwal',
        name: 'Himat Singh Bainiwal',
        party: 'R',
        role: 'Attorney',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Attorney by ballot designation; no campaign website, biography or public record found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'Ballot designation is Attorney; no legal-policy work found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No biography found as of Sept 7, 2026 (Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: ['Republican whose ballot designation is Attorney. No campaign website or biography was found.'],
        scorecard: [
          { topic: 'Housing & transit', position: '? No public position found', comparison: 'Kalra backs renter protections.' },
          { topic: 'Public safety', position: '? No public position found', comparison: 'Kalra authored the Racial Justice Act.' },
          { topic: 'Taxes', position: '? No public position found', comparison: 'Kalra has no stated tax position.' },
          { topic: 'Caucus / ideology', position: '✓ Republican', comparison: 'Kalra is a progressive Democrat.' },
        ],
        money: CAC,
        endorsements: 'No endorsement list found.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Kalra', '◐', 'Progressive Left voters back the Racial Justice Act author and single-payer supporter, noting his 2011 DUI conviction.'],
      ['EL', 'Kalra', '◐', 'Establishment Liberals value the Judiciary chair’s experience, weighed against his 2011 misdemeanor DUI conviction.'],
      ['DM', 'Kalra', '◐', 'Democratic Mainstays back the Democratic incumbent, though his 2011 DUI conviction is a mark on his record.'],
      ['OL', 'Kalra', '◐', 'Outsider Left voters like his public-defender roots and criminal-justice reforms, despite his 2011 DUI conviction.'],
      ['SS', 'Kalra', '○', 'Stressed Sideliners have almost no information on the challenger and lean to the incumbent with tenant protections, despite his old DUI conviction.'],
      ['AR', 'Bainiwal', '○', 'Ambivalent Right voters may lean Republican, though Bainiwal has published no platform.', 'Ambivalent Right voters who want a functioning representative could back Kalra, the Judiciary Committee chair, accepting his 2011 DUI conviction and progressive record over an unknown challenger.'],
      ['PR', 'Bainiwal', '●', 'Populist Right voters favor the Republican over a criminal-justice-reform Democrat.'],
      ['CC', 'Bainiwal', '●', 'Committed Conservatives back the Republican over a single-payer progressive.'],
      ['FF', 'Bainiwal', '●', 'Faith and Flag Conservatives support the Republican candidate.'],
    ]),
    counterArguments: [
      'EL (Kalra ◐): But consider that Kalra pleaded guilty to misdemeanor drunk driving in 2011 while on the city council; he took responsibility and no later incident has been reported.',
      'AR (Bainiwal ○): But consider that Bainiwal has no campaign site or public platform to judge.',
    ],
  },

  // ───────────────────────────── AD-26 ─────────────────────────────
  {
    id: 'assembly-ad26',
    categoryId: 'state-leg',
    title: 'State Assembly, District 26',
    tldrLabel: 'AD-26',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-26 covers west Santa Clara County, including Sunnyvale, Cupertino and parts of San José.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'A first-term Democrat who chairs the Aging and Long-Term Care Committee faces a Republican small-business owner focused on tougher criminal charging. The seat is safely Democratic.',
    ],
    introParagraphs: [
      'Democratic Assemblymember Patrick Ahrens won the June 2 primary with 75.4% to Republican Tim Gorsulowsky’s 24.6% (Secretary of State via The Ballot Brief). Ahrens is a heavy favorite.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 26',
        url: 'https://theballotbrief.com/state/california/santa-clara-county/california-assembly-district-26',
        summary: 'Neutral roster page with primary results and stated priorities.',
      },
    ],
    candidates: [
      {
        id: 'patrick-ahrens',
        name: 'Patrick Ahrens',
        party: 'D',
        role: 'State Assemblymember',
        campaignUrl: 'https://patrickahrens.com',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'First-term Assembly member and committee chair, earlier a community college trustee and congressional and legislative staffer.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 2, 2024; bill ending misdemeanor charges against parents of truant students signed Oct 5, 2025 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs Aging and Long-Term Care; also on Budget, Health and Transportation (candidate guides).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Foothill-De Anza College trustee from 2018 and board president; district director for Assemblymember Evan Low.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Joined Republican Heather Hadwick in urging full Head Start funding (Oct 2025); one term of record.' },
          ],
        },
        bio: [
          'A Head Start graduate who experienced homelessness in college, Ahrens worked for Rep. Janice Hahn and as district director for Evan Low, served on the Foothill-De Anza college board, and won the seat in 2024 over Tara Sreekrishnan, 56% to 44%.',
          'He chairs the Aging and Long-Term Care Committee and focuses on senior care, health and biotech, housing finance and child-care costs.',
        ],
        recordVsChange:
          'In his first term Ahrens got a committee chair and a signed truancy reform. The Republican alternative offers a tougher public-safety focus but no record.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Housing finance and child-care costs are priorities', comparison: 'Gorsulowsky has no housing platform found.' },
          { topic: 'Education', position: '✓ Higher-education access; ended criminal charges for parents of truant kids', comparison: 'Gorsulowsky has no education platform found.' },
          { topic: 'Public safety', position: '~ Reform-minded on truancy; no broader platform found', comparison: 'Gorsulowsky wants more power for police and prosecutors to charge offenders.' },
          { topic: 'Taxes', position: '? No stated position found', comparison: 'Gorsulowsky has no stated tax position.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat', comparison: 'Gorsulowsky is a Republican.' },
        ],
        money: CAC,
        endorsements: 'No complete list verified (as of Oct 8, 2026).',
      },
      {
        id: 'tim-gorsulowsky',
        name: 'Tim Gorsulowsky',
        party: 'R',
        role: 'Small Business Owner',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Small-business owner by ballot designation; no campaign website or public record found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No campaign website found as of Sept 7, 2026 (Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: ['Republican whose ballot designation is Small Business Owner. His stated priority is changing state law to give police and prosecutors more ability to charge offenders.'],
        scorecard: [
          { topic: 'Public safety', position: '✓✓ More charging power for police and prosecutors', comparison: 'Ahrens has no broad public-safety platform found.' },
          { topic: 'Housing & transit', position: '? No public position found', comparison: 'Ahrens focuses on housing finance.' },
          { topic: 'Taxes', position: '? No public position found', comparison: 'Ahrens has no stated tax position.' },
          { topic: 'Caucus / ideology', position: '✓ Republican', comparison: 'Ahrens is a mainstream Democrat.' },
        ],
        money: CAC,
        endorsements: 'No endorsement list found.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Ahrens', '●', 'Progressive Left voters back the Democrat focused on child care, senior care and decriminalizing truancy.'],
      ['EL', 'Ahrens', '●', 'Establishment Liberals value a first-term committee chair with college-board and staff experience.'],
      ['DM', 'Ahrens', '●', 'Democratic Mainstays back the Democratic incumbent and Head Start advocate.'],
      ['OL', 'Ahrens', '◐', 'Outsider Left voters prefer the Democrat, though he came up through a legislator’s staff.'],
      ['SS', 'Ahrens', '○', 'Stressed Sideliners hear his child-care cost focus and personal story of hardship.'],
      ['AR', 'Gorsulowsky', '○', 'Ambivalent Right voters concerned about crime may lean Republican, though Gorsulowsky offers little detail.', 'Ambivalent Right voters who want results could back Ahrens, a committee chair who worked with a Republican colleague on Head Start, giving up a tougher-on-crime vote.'],
      ['PR', 'Gorsulowsky', '●', 'Populist Right voters back the Republican who wants police and prosecutors to have more charging power.'],
      ['CC', 'Gorsulowsky', '●', 'Committed Conservatives support the law-and-order Republican.'],
      ['FF', 'Gorsulowsky', '●', 'Faith and Flag Conservatives favor the Republican on public safety.'],
    ]),
    counterArguments: [
      'AR (Gorsulowsky ○): But consider that he has no campaign website or detailed platform, while Ahrens already chairs a committee.',
    ],
  },

  // ───────────────────────────── AD-28 ─────────────────────────────
  {
    id: 'assembly-ad28',
    categoryId: 'state-leg',
    title: 'State Assembly, District 28',
    tldrLabel: 'AD-28',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-28 covers parts of Santa Clara and Santa Cruz counties, including Los Gatos and Santa Cruz.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'The incumbent, a longtime county elections official, chairs the Assembly Elections Committee; her Republican opponent is a real estate broker who opposes state-mandated upzoning. The seat is safely Democratic.',
    ],
    introParagraphs: [
      'Democratic Assemblymember Gail Pellerin won the June 2 primary with 72.0% to Republican Carol Pefley’s 28.0% (Secretary of State via The Ballot Brief). Pellerin is a heavy favorite.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 28',
        url: 'https://theballotbrief.com/state/california/santa-clara-county/california-assembly-district-28',
        summary: 'Neutral roster page with primary results and stated priorities.',
      },
    ],
    candidates: [
      {
        id: 'gail-pellerin',
        name: 'Gail Pellerin',
        party: 'D',
        role: 'State Assemblymember',
        campaignUrl: 'https://gailpellerinforassembly.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2022 and Elections Committee chair, after 27 years in Santa Cruz County’s elections office, 16 as county clerk.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 5, 2022; re-elected 2024.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair of the Assembly Elections Committee since July 2023 (her office) and of the Select Committee on California’s Mental Health Crisis.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Santa Cruz County elections office 1993–2020, county clerk 2004–2020.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Committee chair in the majority; former president of the state clerks and election officials association.' },
          ],
        },
        bio: [
          'Pellerin ran Santa Cruz County elections for 16 years as county clerk, led the state association of clerks and election officials, and was elected to the Assembly in 2022. She chairs the Elections Committee.',
          'Her priorities are affordable housing and homelessness, health care, and jobs; she endorsed Proposition 50 in 2025.',
        ],
        recordVsChange:
          'Pellerin brings rare election-administration expertise to the committee that writes election law. The Republican alternative has no office record.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Affordable housing and homelessness are top priorities', comparison: 'Pefley opposes state-mandated upzoning.' },
          { topic: 'Climate', position: '? No specific platform found', comparison: 'Pefley wants less business regulation.' },
          { topic: 'Public safety', position: '~ Chairs mental-health crisis select committee', comparison: 'Pefley has no stated position.' },
          { topic: 'Taxes', position: '? No stated position found', comparison: 'Pefley focuses on cost of living.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat; backed Prop 50', comparison: 'Pefley is a Republican broker.' },
        ],
        money: CAC,
        endorsements: 'No complete list verified (as of Oct 8, 2026).',
        notes: ['Reported at least $1 million in stock holdings as of July 2024, among the highest in the Legislature (Wikipedia, citing disclosures).'],
      },
      {
        id: 'carol-pefley',
        name: 'Carol Pefley',
        party: 'R',
        role: 'Small Business Owner',
        campaignUrl: 'https://carolpefleyforassembly.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Silicon Valley real estate broker and former broadcast journalist; no elected office found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative role found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public-budget experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Founded a Silicon Valley brokerage in 2009 (campaign site).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'Born on a U.S. military base in Seoul and an immigrant as a child, Pefley worked in TV and radio news before founding a Silicon Valley real estate brokerage in 2009.',
          'She campaigns on lowering living costs and business regulation and opposes state-mandated upzoning of local communities.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✗ Opposes state-mandated upzoning', comparison: 'Pellerin prioritizes affordable housing.' },
          { topic: 'Climate', position: '~ Less business regulation; no climate plan found', comparison: 'Pellerin has no specific climate platform found.' },
          { topic: 'Taxes', position: '✓ Lower cost of living', comparison: 'Pellerin has no stated tax position.' },
          { topic: 'Caucus / ideology', position: '✓ Republican', comparison: 'Pellerin is a mainstream Democrat.' },
        ],
        money: CAC,
        endorsements: 'No endorsement list found.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Pellerin', '●', 'Progressive Left voters back the Democrat on housing, homelessness and health care.'],
      ['EL', 'Pellerin', '●', 'Establishment Liberals value an elections expert who chairs the committee writing election law.'],
      ['DM', 'Pellerin', '●', 'Democratic Mainstays back the Democratic incumbent who supported Prop 50.'],
      ['OL', 'Pellerin', '◐', 'Outsider Left voters prefer the Democrat though she is a career public administrator.'],
      ['SS', 'Pellerin', '○', 'Stressed Sideliners lean to the incumbent focused on housing costs.'],
      ['AR', 'Pefley', '◐', 'Ambivalent Right voters who value local control over zoning and lighter regulation fit Pefley.', 'Ambivalent Right voters who value competent administration could back Pellerin, who ran county elections for 16 years and chairs the Elections Committee, giving up a vote against state upzoning.'],
      ['PR', 'Pefley', '●', 'Populist Right voters back the Republican opposing Sacramento’s upzoning mandates.'],
      ['CC', 'Pefley', '●', 'Committed Conservatives support the Republican who wants less business regulation.'],
      ['FF', 'Pefley', '●', 'Faith and Flag Conservatives favor the Republican over a Democrat who backed Prop 50.'],
    ]),
    counterArguments: [
      'AR (Pefley ◐): But consider that Pellerin’s decades running elections give her expertise few legislators have, and Pefley has no office record.',
    ],
  },

  // ───────────────────────────── AD-29 ─────────────────────────────
  {
    id: 'assembly-ad29',
    categoryId: 'state-leg',
    title: 'State Assembly, District 29',
    tldrLabel: 'AD-29',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-29 covers the Salinas and Pajaro valleys, San Benito County and southern Santa Clara County.'),
    seatContext: 'Incumbent (Assembly Speaker)',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'This seat is held by Assembly Speaker Robert Rivas, who controls which bills reach the floor and who chairs committees. His Republican opponent, a former police trainee turned businessman, has published little platform. The seat is safely Democratic.',
    ],
    introParagraphs: [
      'Rivas won the June 2 primary with about 66% to Republican Dennis P. Sanchez’s 18%, with Republican J.W. Paine third at about 16% (Secretary of State via The Ballot Brief). Rivas is a heavy favorite.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 29',
        url: 'https://theballotbrief.com/state/california/monterey-county/california-assembly-district-29',
        summary: 'Neutral roster page with primary results.',
      },
    ],
    candidates: [
      {
        id: 'robert-rivas',
        name: 'Robert Rivas',
        party: 'D',
        role: 'California Assembly Speaker',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Speaker of the Assembly since June 2023 and member since 2018; earlier a San Benito County supervisor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 2018 (30th District, then 29th).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'As Speaker since June 30, 2023, appoints committee chairs and negotiates the state budget.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'San Benito County Board of Supervisors before the Assembly; raised in the district.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Won a caucus contest for Speaker and led the 2025 legislative votes that placed Prop 50 on the ballot.' },
          ],
        },
        bio: [
          'Raised in farmworker housing in Paicines, Rivas served on the San Benito County Board of Supervisors, won his Assembly seat in 2018, and became the 71st Speaker in June 2023.',
          'As Speaker he has led the Democratic supermajority through budget negotiations and the 2025 vote to put Prop 50 on the ballot; he is identified with the pro-housing YIMBY wing.',
        ],
        recordVsChange:
          'Having the Speaker as your representative gives the district unusual clout in Sacramento. Voters unhappy with the Legislature’s overall direction have a Republican alternative with no office record.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Pro-housing (YIMBY) record', comparison: 'Sanchez has no housing platform found.' },
          { topic: 'Public safety', position: '? No specific 2026 platform found', comparison: 'Sanchez lists public safety as his top priority.' },
          { topic: 'Taxes', position: '? No stated position found', comparison: 'Sanchez has no stated tax position.' },
          { topic: 'Caucus / ideology', position: '✓ Speaker; Progressive Caucus member; led Prop 50 vote', comparison: 'Sanchez is a Republican.' },
        ],
        money: CAC,
        endorsements: 'No complete list verified (as of Oct 8, 2026).',
      },
      {
        id: 'dennis-sanchez',
        name: 'Dennis P. Sanchez',
        party: 'R',
        role: 'Small Businessman/Father',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Trained with the Salinas Police Department, then started construction and security businesses; no elected office found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative role found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public-budget experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Salinas Police Department training; local construction and security businesses (Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: ['A Republican who trained as a police officer with the Salinas Police Department before starting construction and security businesses. He lists public safety as a top priority but has not published detailed proposals.'],
        scorecard: [
          { topic: 'Public safety', position: '✓ Top priority; no specifics published', comparison: 'Rivas has no specific 2026 public-safety platform found.' },
          { topic: 'Housing & transit', position: '? No public position found', comparison: 'Rivas has a pro-housing record.' },
          { topic: 'Taxes', position: '? No public position found', comparison: 'Rivas has no stated tax position.' },
          { topic: 'Caucus / ideology', position: '✓ Republican', comparison: 'Rivas leads the Democratic majority.' },
        ],
        money: CAC,
        endorsements: 'No endorsement list found.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Rivas', '●', 'Progressive Left voters back the Progressive Caucus Speaker who led the Prop 50 fight.'],
      ['EL', 'Rivas', '●', 'Establishment Liberals value the clout of having the Assembly Speaker represent the district.'],
      ['DM', 'Rivas', '●', 'Democratic Mainstays, including many Latino farmworker families, back the Speaker who grew up in farmworker housing.'],
      ['OL', 'Rivas', '◐', 'Outsider Left voters prefer the Democrat though he is the ultimate Sacramento insider.'],
      ['SS', 'Rivas', '○', 'Stressed Sideliners lean to the Speaker who can deliver for the district.'],
      ['AR', 'Rivas', '○', 'Ambivalent Right voters may value the Speaker’s clout and pro-housing stance over a challenger with no platform.'],
      ['PR', 'Sanchez', '●', 'Populist Right voters back the Republican outsider running on public safety against the Legislature’s top leader.'],
      ['CC', 'Sanchez', '●', 'Committed Conservatives support the Republican over the leader of the Democratic supermajority.'],
      ['FF', 'Sanchez', '●', 'Faith and Flag Conservatives favor the Republican law-and-order candidate.'],
    ]),
    counterArguments: [
      'AR (Rivas ○): But consider that as Speaker, Rivas is responsible for the Legislature’s overall direction on taxes and regulation, which many Ambivalent Right voters dislike.',
    ],
  },
];
