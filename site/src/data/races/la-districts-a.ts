import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Los Angeles County district contests shared by ZIPs 90028 and 91501 (BoE-3, CA-30)
 * and the Burbank-area legislative seats (SD-20, AD-44).
 * Research as of Oct 7, 2026.
 */
export const RACES_LA_DISTRICTS_A: Race[] = [
  {
    id: 'boe-d3',
    categoryId: 'statewide',
    title: 'State Board of Equalization, District 3',
    tldrLabel: 'BoE-3',
    legalRequirements:
      'Must be a registered voter and elector of the Board of Equalization district; members serve four-year terms with a two-term limit.',
    qualificationCriteria: [
      { id: 'tax-admin', label: 'Property- and state-tax administration knowledge', detail: 'The Board oversees county assessors and hears certain property-tax appeals, so understanding assessment law and tax administration matters.' },
      { id: 'hearings', label: 'Quasi-judicial hearings and appeals', detail: 'Members sit as a panel deciding taxpayer appeals and must avoid conflicts with parties before them.' },
      { id: 'agency-mgmt', label: 'Managing or overseeing a public agency', detail: 'The Board oversees the 58 county assessors and has an audit-driven reform history.' },
      { id: 'large-district', label: 'Representing a very large, multi-county district', detail: 'District 3 covers all of Los Angeles County, about ten million residents.' },
    ],
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The Board of Equalization oversees how the state’s 58 county assessors administer property tax, sets the taxable value of utility and railroad property, and hears some taxpayer appeals. Lawmakers stripped most of its other powers in 2017 after an audit found serious problems (LAist).',
      'District 3 covers all of Los Angeles County. The seat is open because the sitting member, Tony Vazquez, is not running for it, and both finalists are Democrats, so the choice is about approach: a veteran legislator backed by the party and organized labor or a union organizer running on assessor oversight and transparency.',
    ],
    introParagraphs: [
      'In the June 2 primary, Assemblymember Mike Gipson led with about 28% and union organizer Samuel Sukaton took second with about 18%, ahead of Democrat Yvonne Yiu at about 13% (Secretary of State unofficial returns). Both are Democrats, so the general election is a same-party contest.',
      'Gipson has the California Democratic Party, California Labor Federation and California Teachers Association behind him; Sukaton is backed by the California Working Families Party, Americans for Democratic Action (Southern California) and California Environmental Voters (LAist, Courage California). No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'LAist voter guide: BoE District 3',
        url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-board-of-equalization-district-3',
        summary: 'Candidate profiles, listed endorsements and a plain-language description of what the Board of Equalization does.',
      },
      {
        label: 'CalMatters voter guide: Board of Equalization',
        url: 'https://calmatters.org/california-voter-guide-2026/board-of-equalization/',
        summary: 'Side-by-side listing of all four BoE districts with ballot designations and endorsements.',
      },
      {
        label: 'Sukaton campaign platform',
        url: 'https://samsukaton.com',
        summary: 'His stated priorities: uniform assessments, transparency and modernization, and assessor oversight.',
      },
    ],
    candidates: [
      {
        id: 'mike-gipson',
        photoSlug: 'mike-gipson',
        name: 'Mike Gipson',
        party: 'D',
        role: 'State Assemblymember/Father',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary:
            'A state legislator since 2014 and former Carson city councilmember who has represented a South Los Angeles County district, with no tax-assessment or tax-appeals role in his record.',
          criteria: [
            { criterionId: 'tax-admin', assessment: 'partial', evidence: 'Ten years voting on state tax and budget bills as an Assemblymember; no assessor, tax-agency or tax-appeals post found.' },
            { criterionId: 'hearings', assessment: 'unknown', evidence: 'No public record found of service on a formal adjudicative body; legislative committee hearings are not appeals hearings.' },
            { criterionId: 'agency-mgmt', assessment: 'partial', evidence: 'Carson City Council member before 2014 and Assemblymember since December 2014; no role running an agency found.' },
            { criterionId: 'large-district', assessment: 'partial', evidence: 'Represents about one Assembly district (the 65th, including Compton, Carson and Watts); has not represented all of Los Angeles County.' },
          ],
        },
        bio: [
          'Assemblymember since December 2014, representing the 64th District until 2022 and the 65th (including Compton, Carson, Willowbrook and Watts) since; he previously served on the Carson City Council. He is a member of the Legislative Black Caucus and is termed out of his Assembly seat (Wikipedia, LAist).',
          'He is running for the Board of Equalization with the support of the Democratic Party establishment and major unions.',
        ],
        scorecard: [
          { topic: 'Property-tax administration', position: '? No public platform on assessor oversight found', comparison: 'Sukaton pledges stronger county assessor oversight and audits.' },
          { topic: 'Taxes / Prop 13', position: '? No public Prop 13 position found', comparison: 'Sukaton’s site cites Prop 13 loopholes and mentions split-roll as a revenue option.' },
          { topic: 'Accountability & oversight', position: '? No stated Board-reform platform found', comparison: 'Sukaton pledges transparency tools for tracking assessments and appeals.' },
          { topic: 'Campaign money', position: '~ Backed by labor and public-safety PACs (see Cal-Access for current totals)', comparison: 'Sukaton reports about $35,000 raised and says he takes no corporate, fossil-fuel, real-estate or law-enforcement money (Courage California).' },
          { topic: 'Institutional backing', position: '✓✓ California Democratic Party, California Labor Federation and California Teachers Association (LAist, CalMatters)', comparison: 'Sukaton has no endorsements from those institutions.' },
          { topic: 'Ideology', position: '~ Mainstream Democratic establishment legislator', comparison: 'Sukaton is further left: Sanders campaign director, Working Families Party endorsement.' },
        ],
        money: 'Reported the largest fundraising in the field in the primary (secondary analysis of VOTE411 data); no current filing totals found. See Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements:
          'California Democratic Party, California Labor Federation and California Teachers Association (LAist and CalMatters voter guides); Equality California and SEIU California are also reported by secondary guides.',
        redFlags: [
          {
            severity: 'serious',
            status: 'official-finding',
            text: 'In August 2024 Gipson signed a stipulation with the Fair Political Practices Commission admitting he failed to file nine behested-payment reports on time—disclosures required when an official solicits payments of $5,000 or more to other organizations—and paid an $1,800 fine.',
            whyItMatters: 'Board of Equalization members rule on tax appeals from parties who may also be donors, so timely disclosure of who is paying at an official’s request is central to the job.',
            sources: [
              { label: 'FPPC stipulation (Aug 2024)', url: 'https://www.fppc.ca.gov/content/dam/fppc/documents/Stipulations/2024/august/Mike-Gipson-Stip.pdf.coredownload.pdf' },
              { label: 'FPPC enforcement release (Aug 2024)', url: 'https://fppc.ca.gov/content/dam/fppc/NS-Documents/MediaCenter/2024/999-enf-release-aug-2024.pdf' },
            ],
          },
          {
            severity: 'serious',
            status: 'disputed',
            text: 'A March 2025 CalMatters investigation found Gipson served about 18 months as a part-time reserve police officer who had to patrol with a more experienced officer, after he had described more than five years of service; it also disputed his description of a fallen officer as his partner. Gipson said he “was not being untruthful” and that he rode with that officer more than once.',
            whyItMatters: 'Candidates’ accounts of their own records are a main way voters judge fitness for an office they may know little about.',
            sources: [
              { label: 'CalMatters', url: 'https://calmatters.org/newsletter/mike-gipson-investigation-newsletter/' },
            ],
          },
        ],
        notes: ['Ballot designation printed: “State Assemblymember/Father.”'],
      },
      {
        id: 'samuel-sukaton',
        name: 'Samuel P. Sukaton',
        party: 'D',
        role: 'Labor Union Organizer',
        campaignUrl: 'https://samsukaton.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'A union organizer and campaign strategist with policy-advocacy experience before state agencies, but no elected office and no tax-administration role.',
          criteria: [
            { criterionId: 'tax-admin', assessment: 'partial', evidence: 'Led climate-budget campaigns at California Environmental Voters (2020 to 2023); no assessor or tax-agency post found.' },
            { criterionId: 'hearings', assessment: 'not-met', evidence: 'No adjudicative or hearing-officer role found; his campaign site says he has worked before the CPUC, Energy Commission and Air Resources Board as an advocate.' },
            { criterionId: 'agency-mgmt', assessment: 'partial', evidence: 'Lead Organizer for AFT Local 1521, the LA Community College Faculty Guild (2023 to present); directed Sanders’s 2020 campaign in the Inland Southern California region.' },
            { criterionId: 'large-district', assessment: 'partial', evidence: 'Ran multi-county campaign operations (Orange County and Inland Empire area director in 2019 to 2020); has not held elected office.' },
          ],
        },
        bio: [
          'Lead organizer for AFT Local 1521, the Los Angeles Community College faculty union, and former State Advocacy Coordinator at California Environmental Voters; he directed Bernie Sanders’s 2020 campaign in the Inland Empire and Orange County. He grew up in the Inland Empire and graduated from UCLA (BallotReady, campaign site).',
          'He runs on uniform assessments, transparency and modernization, stronger oversight of county assessors, and protecting funding for local schools, cities and counties.',
        ],
        scorecard: [
          { topic: 'Property-tax administration', position: '✓✓ Strengthen assessor oversight and statewide compliance audits', comparison: 'Gipson has no published assessor-oversight plan.' },
          { topic: 'Taxes / Prop 13', position: '✓ Says Prop 13 loopholes reduce public-service funding; mentions split-roll as an option', comparison: 'Gipson has no stated Prop 13 position.' },
          { topic: 'Accountability & oversight', position: '✓ Expand online tools for taxpayers to track assessments, appeals and exemptions', comparison: 'Gipson has not published comparable transparency proposals.' },
          { topic: 'Campaign money', position: '✓ About $35,000 raised; says no fossil-fuel, law-enforcement, real-estate or corporate donors (Courage California)', comparison: 'Gipson draws labor-PAC and larger-donor support.' },
          { topic: 'Relief for homeowners', position: '✓ Supports exemptions and relief for veterans, seniors and low-income homeowners (BallotReady)', comparison: 'Gipson has no stated position.' },
          { topic: 'Ideology', position: '✓ Progressive: Working Families Party, Our Revolution and ADA Southern California backing', comparison: 'Gipson is the party-establishment candidate.' },
        ],
        money: 'About $35,000 raised as reported by Courage California (undated); no current filing totals found. See Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements:
          'California Working Families Party (Courage California); Americans for Democratic Action (Southern California), California Environmental Voters and Knock LA (LAist); Our Revolution (Political Revolution profile, a partisan site).',
        notes: ['Describes himself as a “union organizer, policy leader, and former Jeopardy! contestant.”', 'Has no official candidate statement in the LAist guide.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Sukaton', '◐', 'Progressive Left voters are further left than the party establishment and favor the Working Families Party-backed organizer who pledges tougher assessor oversight and mentions split-roll.'],
      ['EL', 'Gipson', '●', 'Establishment Liberals follow the California Democratic Party, labor federation and teachers’ endorsements and value a veteran legislator over a first-time candidate.'],
      ['DM', 'Gipson', '●', 'Democratic Mainstays are the party-loyal base and back the Democratic Party-endorsed incumbent legislator.'],
      ['OL', 'Sukaton', '◐', 'Outsider Left voters distrust party insiders and large-donor money and prefer the grassroots organizer who takes no corporate or law-enforcement donations.'],
      ['SS', 'Gipson', '○', 'Stressed Sideliners with little attachment to either camp may default to the better-known sitting legislator on a low-information ballot line, a weak lean.'],
      ['AR', 'Gipson', '○', 'Ambivalent Right voters prefer the more moderate, mainstream Democrat to the Sanders-aligned organizer on a tax-administration board.'],
      ['PR', 'Gipson', '○', 'Populist Right voters, wary of the further-left candidate who mentions split-roll, lean to the more conventional legislator with public-safety union support, a weak lean.'],
      ['CC', 'Gipson', '○', 'Committed Conservatives, facing two Democrats, choose the one less likely to push property-tax increases, since Sukaton raises Prop 13 loopholes and split-roll.'],
      ['FF', 'Gipson', '○', 'Faith and Flag Conservatives lean toward the more moderate Democrat with ties to police and firefighter unions over the Sanders-aligned organizer.'],
    ]),
    counterArguments: [
      'EL/DM (Gipson ●): But consider Gipson’s 2024 FPPC fine for nine late behested-payment reports and CalMatters’ finding that he overstated his reserve-police service; both bear on candor and disclosure in a quasi-judicial tax post.',
      'EL (Gipson ●): But consider that Gipson has published no platform on assessor oversight, the Board’s main remaining job, while Sukaton has laid out specific proposals.',
      'PL (Sukaton ◐): But consider that Sukaton has never held office or a tax-administration role, and the Board hears appeals where legal and tax expertise matter.',
    ],
  },
  {
    id: 'us-rep-ca30',
    categoryId: 'federal',
    title: 'U.S. Representative, 30th District',
    tldrLabel: 'CA-30',
    legalRequirements:
      'At least 25 years old, a U.S. citizen for at least 7 years, and an inhabitant of California when elected (U.S. Constitution art. I, section 2); two-year term.',
    qualificationCriteria: [
      { id: 'lawmaking', label: 'Lawmaking and policy experience', detail: 'The job is writing, amending and voting on federal law.' },
      { id: 'committee-budget', label: 'Committee and budget/appropriations work', detail: 'Most legislative work happens in committees that shape spending and oversight.' },
      { id: 'district-service', label: 'Constituent services and knowledge of the district', detail: 'Members run casework offices and carry local priorities to Washington.' },
      { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Little becomes law without bipartisan or cross-chamber partners.' },
    ],
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense spending, climate and infrastructure money, and oversight of the executive branch, and staffs a casework office that helps constituents with veterans’ benefits, passports and federal agencies.',
      'CA-30 includes Burbank, Glendale, West Hollywood and parts of Los Angeles and Pasadena (Friedman’s House site). At stake is whether the district keeps a progressive Democrat on the Transportation and Infrastructure and Science committees or sends a Republican to the House.',
    ],
    introParagraphs: [
      'Incumbent Democrat Laura Friedman led the June 2 primary with about 53%, and Republican Scott Meyers of Burbank took second place (Secretary of State unofficial returns; Wikipedia). The 2026 election is the first on the congressional lines voters approved with Proposition 50.',
      'Friedman, who won in 2024 with 68.4%, is the heavy favorite. Meyers, an attorney and small-business owner, runs on cutting federal spending, border security and law enforcement, accountability for high-speed rail and homelessness spending, and bringing film production back to California. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'Rep. Laura Friedman, official site',
        url: 'https://friedman.house.gov/about',
        summary: 'Official bio, committee assignments and priorities.',
      },
      {
        label: 'Scott Meyers campaign site',
        url: 'https://meyersforcongress.com',
        summary: 'His platform, biography and endorsement list.',
      },
      {
        label: 'Cook Political Report: CA-30',
        url: 'https://www.cookpolitical.com/house/race/481966',
        summary: 'Race rating page.',
      },
    ],
    candidates: [
      {
        id: 'laura-friedman',
        photoSlug: 'laura-friedman',
        name: 'Laura Friedman',
        party: 'D',
        role: 'Member, United States House of Representatives',
        campaignUrl: 'https://friedman.house.gov',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Second-term member of the House who earlier served eight years in the state Assembly (including as chair of the Transportation and Natural Resources committees) and seven years on the Glendale City Council, including a term as mayor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'In the House since January 2025; in the Assembly 2016 to 2024, where she authored the 2019 fur-sales ban and a 2022 law ending minimum parking requirements near transit (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Sits on House Transportation and Infrastructure and Science, Space, and Technology; chaired the Assembly Transportation and Natural Resources committees (House site).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Glendale council 2009 to 2016 (mayor 2011 to 2012) and the Assembly seat covering Burbank and Glendale; lives in Glendale.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Led bipartisan reforms to the Legislature’s handling of sexual harassment (House site); her House bills are not listed on her official page.' },
          ],
        },
        bio: [
          'Representative since January 2025. A former film and television development executive and art-glass business owner, she served on the Glendale City Council from 2009 to 2016 (mayor, 2011 to 2012) and in the Assembly from 2016 to 2024.',
          'In Congress she sits on the Transportation and Infrastructure and Science, Space, and Technology committees and belongs to the Congressional Progressive Caucus. Her stated priorities are affordable housing, clean water, wildfire and disaster protection, and a broadly shared economy.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓✓ Priority on affordable housing; authored the 2022 law ending minimum parking requirements near transit', comparison: 'Meyers focuses on exposing wasteful homelessness spending rather than supply.' },
          { topic: 'Climate', position: '✓ Serves on the Science Committee’s Energy Subcommittee; stated priorities include clean water and wildfire protection', comparison: 'Meyers backs U.S. energy independence to lower gas and utility costs.' },
          { topic: 'Health care', position: '✓ Campaign materials list universal health care and childcare among her priorities (BallotReady)', comparison: 'Meyers has no stated health-care plan.' },
          { topic: 'Immigration', position: '? No specific 2026 position found', comparison: 'Meyers opposes sanctuary policies and supports strong border security.' },
          { topic: 'Trump/House majority', position: '✓ Progressive Caucus member who lists protecting democratic institutions as a priority', comparison: 'Meyers is endorsed by the California Republican Party and backs the SAVE Act.' },
          { topic: 'District clout', position: '✓ Transportation and Infrastructure seat, with vice ranking member post on a subcommittee, serving a transit-heavy district', comparison: 'Meyers would be a first-term minority-party member with no committee seniority.' },
        ],
        recordVsChange:
          'Friedman brings a decade of legislative and local-government experience to a minority-party seat on Transportation and Infrastructure; replacing her would swap that experience for a first-time Republican candidate with no public legislative record in a district that voted for her by 68% in 2024.',
        money: 'No current filing totals found; see FEC at https://www.fec.gov/data/candidate/.',
        endorsements: 'No organizational endorsement list found on her official or campaign pages.',
        notes: [
          'In 2021 as Assembly Transportation chair she delayed release of about $4 billion in high-speed rail bond funds, citing a lack of project detail; the rail authority’s chief financial officer disputed that rationale (Wikipedia). This is a policy and management dispute, not an ethics finding.',
        ],
      },
      {
        id: 'scott-meyers',
        name: 'Scott Alan Meyers',
        party: 'R',
        role: 'Small Business Owner',
        campaignUrl: 'https://meyersforcongress.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'An attorney and small-business owner from Burbank with no elected or legislative experience listed.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record of legislative, legislative-staff or policy-drafting work found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of committee or budget experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Says he has lived in the district his whole life and runs a small business (campaign site, BallotReady); no casework or public-service role found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of coalition-building or passing legislation found.' },
          ],
        },
        bio: [
          'Burbank attorney and small-business owner who says he grew up in the district, started working at 14, and is not a career politician. He holds a UCLA bachelor’s degree.',
          'He is endorsed by the California Republican Party and the Los Angeles County Republican Party.',
        ],
        scorecard: [
          { topic: 'Housing', position: '~ Wants to expose and correct wasteful homelessness spending; no supply policy stated', comparison: 'Friedman authored the 2022 transit-parking law and prioritizes affordable housing.' },
          { topic: 'Climate', position: '~ Supports U.S. energy independence to lower gas and utility costs', comparison: 'Friedman serves on the Science Committee’s Energy Subcommittee.' },
          { topic: 'Health care', position: '? No public position found', comparison: 'Friedman lists universal health care among her priorities.' },
          { topic: 'Immigration', position: '✓ Opposes sanctuary policies; supports strong border security and enforcement against drug trafficking', comparison: 'Friedman has no specific 2026 immigration position found.' },
          { topic: 'Trump/House majority', position: '✓ Supports the SAVE Act and election-integrity measures; endorsed by Reform California', comparison: 'Friedman is a Progressive Caucus member.' },
          { topic: 'District clout', position: '~ Pledges to hold California’s high-speed rail project accountable and bring film production back; no committee standing', comparison: 'Friedman holds seats on two House committees.' },
        ],
        money: 'No current filing totals found; see FEC at https://www.fec.gov/data/candidate/.',
        endorsements:
          'California Republican Party, Los Angeles County Republican Party, Reform California and California Young Republicans, plus several individuals (campaign site).',
        notes: ['Ballot designation printed: “Small Business Owner.”'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Friedman', '●', 'Progressive Left voters get a Progressive Caucus member who prioritizes affordable housing, climate-linked committee work and democratic institutions.'],
      ['EL', 'Friedman', '●', 'Establishment Liberals value a two-term legislator with transportation and science committee seats and a record from city hall to Congress.'],
      ['DM', 'Friedman', '●', 'Democratic Mainstays back the Democratic incumbent against a Republican who supports the SAVE Act and opposes sanctuary policies.'],
      ['OL', 'Friedman', '○', 'Outsider Left voters distrust career politicians, but the only alternative is a Republican whose platform opposes their views on immigration and elections.'],
      ['SS', 'Meyers', '○', 'Stressed Sideliners worried about inflation and gas prices may be drawn to his affordability message, a weak lean given his thin record and the district’s lean.'],
      ['AR', 'Meyers', '○', 'Ambivalent Right voters wary of federal spending and homelessness costs fit his accountability pitch, but a non-politician with no track record gives pause.'],
      ['PR', 'Meyers', '◐', 'Populist Right voters favor a non-career-politician Reform California-backed attorney who stresses border security and election integrity.'],
      ['CC', 'Meyers', '●', 'Committed Conservatives back the state and county Republican Party-endorsed candidate on spending cuts, law enforcement and no new taxes.'],
      ['FF', 'Meyers', '◐', 'Faith and Flag Conservatives support the Republican on border security and constitutional freedoms, though his platform says less on social issues.'],
    ]),
    counterArguments: [
      'CC (Meyers ●): But consider that Friedman is a heavy favorite in a district she won with 68% in 2024, so a Meyers vote is likely a statement rather than a change in who represents the district.',
      'PL (Friedman ●): But consider that Friedman’s 2021 delay of high-speed rail bond money, disputed by the rail authority, is a record progressives who prioritize transit may want to weigh.',
    ],
  },
  {
    id: 'senate-sd20',
    categoryId: 'state-leg',
    title: 'State Senate, District 20',
    tldrLabel: 'SD-20',
    legalRequirements:
      'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.',
    qualificationCriteria: [
      { id: 'law-policy', label: 'Lawmaking, legal drafting or policy experience', detail: 'Senators write, amend and vote on state statutes and confirm appointees.' },
      { id: 'budget-oversight', label: 'Budget and committee work', detail: 'The state budget and policy committees are central to a senator’s workload.' },
      { id: 'public-mgmt', label: 'Managing a public agency or elected body', detail: 'Experience running or governing a public organization transfers to oversight of state agencies.' },
      { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: 'SD-20 covers Burbank and communities in the San Fernando Valley.' },
      { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
    ],
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the state budget, housing and land-use law, health policy, public safety and criminal-justice statutes, and confirmations of governor appointees; they serve four-year terms.',
      'SD-20 is safely Democratic, so the question is whether voters keep a sitting senator on the Budget, Health and Insurance committees or send a Republican to a chamber where Democrats hold a large majority.',
    ],
    introParagraphs: [
      'Democratic incumbent Caroline Menjivar won the June 2 primary with 62.0% to Republican Tony Rodriguez’s 27.8%; Democrat Roberto David LaCarra took 10.1% and did not advance (Secretary of State returns via The Ballot Brief). Menjivar won the open seat in 2022 with 58.5%.',
      'Menjivar is a heavy favorite. Rodriguez lists priorities of fully funding police and fire departments, lowering taxes and fees, and easing small-business regulation. He also ran against Assemblymember Nick Schultz in 2024 and lost 65.9% to 34.1%. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief: Senate District 20',
        url: 'https://theballotbrief.com/state/california/los-angeles-county/california-senate-district-20',
        summary: 'Neutral roster page with both finalists’ stated priorities and primary results.',
      },
      {
        label: 'CalMatters Digital Democracy: Caroline Menjivar',
        url: 'https://calmatters.digitaldemocracy.org/legislators/caroline-menjivar-165436',
        summary: 'Committees, authored bills and bill outcomes this session.',
      },
    ],
    candidates: [
      {
        id: 'caroline-menjivar',
        photoSlug: 'caroline-menjivar',
        name: 'Caroline Menjivar',
        party: 'D',
        role: 'State Senator',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Incumbent since December 2022 with seats on the Budget, Health and Insurance committees, after work in local government offices and as a Marine and EMT.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'State senator since 2022; this session’s bills include SB 331 (hearing-aid coverage), SB 758 (nitrous oxide) and SB 991 (residential care citations), all passed (Digital Democracy).' },
            { criterionId: 'budget-oversight', assessment: 'met', evidence: 'Serves on the Budget and Fiscal Review Committee and Budget Subcommittee 3 on Health and Human Services (Wikipedia, Digital Democracy).' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Led a legislative office; earlier worked as a field deputy for a Los Angeles councilmember and in the mayor’s office; has not run an agency.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Raised in the San Fernando Valley and represents the district; first LGBTQ legislator to represent the Valley.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Of 38 bills authored this session, 18 have passed (Digital Democracy).' },
          ],
        },
        bio: [
          'State senator since December 2022 for the 20th District, covering Burbank and the San Fernando Valley. A former U.S. Marine (2009 to 2016) and EMT, she earned a sociology degree at Cal State Northridge and a master’s in social welfare at UCLA; she was previously a field deputy for a Los Angeles councilmember and worked in the mayor’s office.',
          'Her stated priorities include healthcare access, mental health crisis response and domestic violence support. She sits on the Budget, Business and Professions, Environmental Quality, Health, Insurance and Military and Veterans Affairs committees.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '~ Voted against SB 79 (2025), the transit-oriented housing bill, saying housing should not go near transit working-class people do not use', comparison: 'Rodriguez has no stated housing position.' },
          { topic: 'Climate', position: '? Sits on the Environmental Quality Committee; no specific 2026 climate bill identified', comparison: 'Rodriguez has no public climate position.' },
          { topic: 'Education', position: '? No specific education bill identified', comparison: 'Rodriguez has no public education position.' },
          { topic: 'Public safety', position: '✓ Authored SB 758 on nitrous oxide and mental-health crisis-response priorities', comparison: 'Rodriguez wants to fully fund police and fire departments.' },
          { topic: 'Taxes', position: '? No specific position found; sits on the Budget Committee', comparison: 'Rodriguez campaigns to reduce taxes and government fees.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive Democrat; LGBTQ and veterans’ advocate', comparison: 'Rodriguez is the Republican Party nominee.' },
        ],
        recordVsChange:
          'Menjivar has passed about half of her 38 bills this session and holds Budget and Health committee seats; changing seats would swap that for a first-time Republican candidate with no listed record, in a district she won with 62% in June.',
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements: 'No endorsement list found beyond Democratic Party and LGBTQ-organization ties (Digital Democracy lists 2022 gifts from Equality California and the California Democratic Party).',
        notes: ['In her 2022 campaign she faced criticism over her former employer Nury Martinez’s leaked recorded remarks; Menjivar was not a party to the recording (Wikipedia).'],
      },
      {
        id: 'tony-rodriguez',
        name: 'Tony Rodriguez',
        party: 'R',
        role: 'No ballot designation',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'A community advocate who has served on a neighborhood council and organized small-business roundtables, and who lost the 2024 Assembly race in the same area.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'unknown', evidence: 'No public record of lawmaking or policy-drafting work found.' },
            { criterionId: 'budget-oversight', assessment: 'unknown', evidence: 'No public record of committee or budget work found.' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Served on a neighborhood council (The Ballot Brief); no agency-management role found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Neighborhood council service and small-business roundtables in the Los Angeles area (The Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of passing legislation or building coalitions found.' },
          ],
        },
        bio: [
          'Community advocate who has served on a neighborhood council and organized small-business roundtables in the Los Angeles area. He was the Republican nominee for the 44th Assembly District in 2024 and lost to Nick Schultz, 65.9% to 34.1% (Wikipedia).',
          'He lists no ballot designation. Stated priorities are fully funding local police and fire departments, reducing taxes and government fees, and reducing regulation on small businesses (The Ballot Brief).',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? No public position found', comparison: 'Menjivar voted against the SB 79 transit-housing bill in 2025.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Menjivar sits on the Environmental Quality Committee.' },
          { topic: 'Education', position: '? No public position found', comparison: 'Menjivar has no specific education bill identified.' },
          { topic: 'Public safety', position: '✓ Fully fund local police and fire departments', comparison: 'Menjivar emphasizes mental-health crisis response.' },
          { topic: 'Taxes', position: '✓ Reduce taxes and government fees', comparison: 'Menjivar has no stated tax position.' },
          { topic: 'Caucus / ideology', position: '~ Republican nominee; small-business deregulation theme', comparison: 'Menjivar is a Democratic incumbent in a Democratic-majority chamber.' },
        ],
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements: 'No endorsements found. No campaign website was found as of Sept 7, 2026 (The Ballot Brief).',
        notes: ['Won 27.8% in the June primary.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Menjivar', '●', 'Progressive Left voters get a Democratic senator focused on healthcare access, mental-health response and LGBTQ and veterans’ advocacy.'],
      ['EL', 'Menjivar', '●', 'Establishment Liberals value an incumbent with Budget and Health committee seats and a record of passing bills.'],
      ['DM', 'Menjivar', '●', 'Democratic Mainstays back the Democratic incumbent against a Republican with no public record or website.'],
      ['OL', 'Menjivar', '○', 'Outsider Left voters distrust legislators, but the alternative is a Republican focused on tax cuts and deregulation.'],
      ['SS', 'Menjivar', '○', 'Stressed Sideliners get an incumbent with concrete health-cost bills such as hearing-aid coverage, while Rodriguez offers few details.'],
      ['AR', 'Rodriguez', '○', 'Ambivalent Right voters wary of taxes and regulation may lean to his small-business message, a weak lean given his limited record.'],
      ['PR', 'Rodriguez', '◐', 'Populist Right voters favor a neighborhood-level outsider against a Sacramento legislator, with a platform that is thin.'],
      ['CC', 'Rodriguez', '●', 'Committed Conservatives back the Republican on fully funding police and fire and cutting taxes and fees.'],
      ['FF', 'Rodriguez', '◐', 'Faith and Flag Conservatives lean to the Republican nominee on public safety and limited government, though little is known about his social positions.'],
    ]),
    counterArguments: [
      'CC (Rodriguez ●): But consider that Menjivar won 62% in June and Democrats hold a large Senate majority, so a Rodriguez win would give a freshman Republican little influence over the budget.',
      'PL (Menjivar ●): But consider that her 2025 vote against SB 79, a transit-housing bill, runs against the pro-housing-supply goals many progressives hold.',
    ],
  },
  {
    id: 'assembly-ad44',
    categoryId: 'state-leg',
    title: 'State Assembly, District 44',
    tldrLabel: 'AD-44',
    legalRequirements:
      'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.',
    qualificationCriteria: [
      { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
      { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
      { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: 'AD-44 covers Burbank, Glendale and neighborhoods in the northeast San Fernando Valley.' },
      { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
    ],
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members write and vote on state laws and the budget, serve two-year terms, and sit on committees that shape public safety, housing, health and education policy.',
      'In a safely Democratic seat, the question is whether voters keep a Democrat who chairs the Public Safety Committee or send a Republican challenger to a chamber where Democrats hold a large majority.',
    ],
    introParagraphs: [
      'Democratic incumbent Nick Schultz won the June 2 primary with 71.2%; Republican Carolyn Daniels took 20.7% and Republican Charlotte Gerry 8.1% (Secretary of State returns via The Ballot Brief). Schultz won the seat in 2024 with 65.9% against Tony Rodriguez.',
      'Schultz, a former Burbank mayor and deputy attorney general, chairs the Assembly Public Safety Committee. Daniels says she founded Safe Places for Abused Women and Children in 1992 and runs on affordability, homelessness, crime and water policy. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief: Assembly District 44',
        url: 'https://theballotbrief.com/state/california/los-angeles-county/california-assembly-district-44',
        summary: 'Neutral roster page with primary results and both finalists’ stated priorities.',
      },
      {
        label: 'Daniels campaign site',
        url: 'https://daniels4assembly.com',
        summary: 'Her stated positions on affordability, crime, homelessness and water.',
      },
    ],
    candidates: [
      {
        id: 'nick-schultz',
        photoSlug: 'nick-schultz',
        name: 'Nick Schultz',
        party: 'D',
        role: 'California State Assemblymember',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Incumbent since December 2024 and chair of the Public Safety Committee, after serving as Burbank mayor and as a prosecutor in Oregon and California.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since December 2024; previously a deputy attorney general in the Health Quality Enforcement and Special Prosecutions sections.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Appointed Public Safety Committee chair and a member of Budget, Natural Resources, and Utilities and Energy in December 2024 (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Burbank City Council (vice mayor 2022 to 2023, mayor December 2023 to November 2024); earlier on the Los Feliz Neighborhood Council and the Los Angeles Central Area Planning Commission.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Two years in the Assembly; his authored bills are not listed on his official biography page available to this guide.' },
          ],
        },
        bio: [
          'Assemblymember since December 2024, succeeding Laura Friedman. A University of Oregon graduate with a law degree, he worked as a deputy district attorney in Lane County, Oregon, and then as a California deputy attorney general before serving on the Burbank City Council and as mayor.',
          'He chairs the Assembly Public Safety Committee and sits on the Budget, Natural Resources, and Utilities and Energy committees. He lists public safety and youth mental health, including preparations for the 2028 Olympics, as priorities (The Ballot Brief).',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '~ Burbank council tenure cited increased housing and a greenhouse-gas reduction plan (Wikipedia); no Assembly housing bill identified', comparison: 'Daniels says “housing first” does not work and criticizes state housing costs.' },
          { topic: 'Climate', position: '~ Sits on the Natural Resources and Utilities and Energy committees', comparison: 'Daniels criticizes state water policy but offers no climate plan.' },
          { topic: 'Education', position: '? No specific education position found', comparison: 'Daniels lists education reform as a priority without specifics (The Ballot Brief).' },
          { topic: 'Public safety', position: '✓✓ Chairs the Assembly Public Safety Committee; prosecutor background', comparison: 'Daniels says crime persists despite state spending.' },
          { topic: 'Taxes', position: '? No specific position found; sits on the Budget Committee', comparison: 'Daniels says the state takes too much money without results.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat; supports the film industry', comparison: 'Daniels is the Republican nominee and opposes government handouts.' },
        ],
        recordVsChange:
          'Schultz holds a committee chair in his first term and has a prosecutor and mayoral background; replacing him would swap that for a first-time challenger with no public legislative record in a district he won with 71% in June.',
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements: 'No endorsement list found; no campaign website was found as of Sept 7, 2026 (The Ballot Brief).',
        notes: ['Ballot designation printed: “California State Assemblymember.”', 'Named transgender musician Lindsay Imber the 2025 Woman of the Year for District 44 (Wikipedia).'],
      },
      {
        id: 'carolyn-daniels',
        name: 'Carolyn Daniels',
        party: 'R',
        role: 'Independent Contractor/Mother',
        campaignUrl: 'https://daniels4assembly.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'An independent contractor and nonprofit founder with no elected office or legislative experience listed.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record of lawmaking or policy-drafting work found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of committee or budget experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Says she has lived in the district for 20 years and founded Safe Places for Abused Women and Children in 1992 (per The Ballot Brief citing her site); not independently confirmed.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of coalition-building or passing legislation found.' },
          ],
        },
        bio: [
          'Describes herself as a wife, mother and independent contractor. Her campaign says she founded Safe Places for Abused Women and Children in 1992 and has lived in the district for 20 years.',
          'Her priorities are women’s rights and domestic violence prevention and education reform (The Ballot Brief), and her site criticizes state spending, housing costs, insurance availability, water policy and crime.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Says “housing first” does not work and that state policy has made housing and gas more expensive', comparison: 'Schultz cites increased housing during his Burbank council tenure.' },
          { topic: 'Climate', position: '~ Criticizes releasing fresh water to the ocean rather than storing it for drought; no climate plan', comparison: 'Schultz sits on the Natural Resources and Utilities and Energy committees.' },
          { topic: 'Education', position: '~ Lists education reform as a priority; no specifics found', comparison: 'Schultz has no specific education position found.' },
          { topic: 'Public safety', position: '✓ Says crime persists despite large state spending; domestic-violence prevention is a priority', comparison: 'Schultz chairs the Assembly Public Safety Committee.' },
          { topic: 'Taxes', position: '✓ Says the state takes too much money without clear results; opposes government handouts', comparison: 'Schultz has no specific tax position found.' },
          { topic: 'Caucus / ideology', position: '~ Republican nominee; critical of Sacramento’s current policies', comparison: 'Schultz is a Democratic committee chair.' },
        ],
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements: 'No endorsements listed on her campaign site.',
        notes: ['Won 20.7% in the June primary; fellow Republican Charlotte Gerry took 8.1%.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Schultz', '●', 'Progressive Left voters get a Democrat who chairs Public Safety and sits on the Natural Resources and Utilities committees against a Republican who says “housing first” does not work.'],
      ['EL', 'Schultz', '●', 'Establishment Liberals value a prosecutor-turned-mayor now chairing a major committee in his first term.'],
      ['DM', 'Schultz', '●', 'Democratic Mainstays back the Democratic incumbent against a Republican critical of state spending and policy.'],
      ['OL', 'Schultz', '○', 'Outsider Left voters distrust legislators, but the alternative opposes government assistance programs and “housing first.”'],
      ['SS', 'Schultz', '○', 'Stressed Sideliners get an incumbent with a public-safety focus, while Daniels’s site lists problems with few specific fixes.'],
      ['AR', 'Daniels', '○', 'Ambivalent Right voters concerned about cost of living, insurance and water may lean to her message, a weak lean given her limited record.'],
      ['PR', 'Daniels', '◐', 'Populist Right voters favor a non-politician critical of Sacramento spending and homelessness policy.'],
      ['CC', 'Daniels', '●', 'Committed Conservatives back the Republican nominee, who opposes government handouts and says the state spends without results.'],
      ['FF', 'Daniels', '◐', 'Faith and Flag Conservatives lean to the Republican on spending and crime, though her platform says little on social issues.'],
    ]),
    counterArguments: [
      'CC (Daniels ●): But consider that Schultz won 71% in June and Democrats dominate the Assembly, so a Daniels vote is mostly a message rather than a policy change.',
      'PL (Schultz ●): But consider that as a former prosecutor chairing Public Safety he may favor tougher-on-crime bills than progressives prefer.',
    ],
  },
];
