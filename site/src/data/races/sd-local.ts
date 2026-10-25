import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * San Diego County / City of San Diego / SDUSD local contests (ZIP 92126 sample ballot).
 * Research current as of Oct 7, 2026. Money and endorsement dates are stated in-line.
 */
export const RACES_SD_LOCAL: Race[] = [
  {
    id: 'sd-county-assessor',
    categoryId: 'county',
    title: 'San Diego County Assessor/Recorder/County Clerk',
    tldrLabel: 'County Assessor/Recorder',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'One elected official runs three county functions: the Assessor sets the assessed value of every taxable property (the base for property-tax bills), the Recorder keeps deeds and official records, and the County Clerk handles marriage licenses and related filings. The office does not set tax rates; it determines what each property is worth on the tax roll.',
      'Jordan Marks is the only name on the ballot, so the outcome is not in doubt. Voters who dislike the choice can leave the line blank or write someone in; the practical decision is whether to vote at all in this contest.',
    ],
    introParagraphs: [
      'Marks was first elected in 2022 and is seeking a second four-year term; the county sample ballot lists him as the only candidate. In 2022 he defeated former San Diego City Councilmember Barbara Bry (a Democrat) by roughly 27,000 votes out of nearly 900,000 cast (NBC San Diego).',
    ],
    legalRequirements:
      'U.S. citizen and registered voter of San Diego County (Gov. Code § 24001). The assessor must hold a State Board of Equalization appraiser’s certificate, or a temporary one obtained within 30 days of taking office and converted within a year (Gov. Code § 24002.5).',
    qualificationCriteria: [
      { id: 'appraisal', label: 'Property appraisal and assessment law', detail: 'The Assessor sets the taxable value of every parcel under Proposition 13 rules and state appraisal standards.' },
      { id: 'agency', label: 'Running a large assessment agency', detail: 'The office values roughly one million parcels and tens of thousands of business accounts each year.' },
      { id: 'records', label: 'Recording and clerk functions', detail: 'The same elected official oversees the public land record and county clerk filings.' },
      { id: 'taxpayer', label: 'Taxpayer service and appeals', detail: 'Owners dispute values and apply for exemptions through the office.' },
    ],
    candidates: [
      {
        id: 'jordan-marks',
        name: 'Jordan Z. Marks',
        party: 'NP',
        role: 'Assessor/Recorder/County Clerk',
        campaignUrl: 'https://www.sdarcc.gov/content/arcc/home/about/arcc-executive-office.html',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Marks is the sitting Assessor/Recorder/County Clerk and previously served as the office’s Chief Deputy Assessor/Taxpayer Advocate. The county describes him as a certified property tax appraiser and attorney.',
          criteria: [
            { criterionId: 'appraisal', assessment: 'met', evidence: 'County biography lists him as a Certified Property Tax Appraiser and licensed attorney; earlier worked as an attorney at the state agency that oversees county assessors.' },
            { criterionId: 'agency', assessment: 'met', evidence: 'Has headed the office since January 2023; its 2025 report lists 1,020,253 real property parcels ($772 billion assessed) and 72,202 personal property accounts; the 2026 roll reached $845 billion.' },
            { criterionId: 'records', assessment: 'met', evidence: 'As elected head, oversees the Recorder and County Clerk divisions along with the Assessor (county executive office page).' },
            { criterionId: 'taxpayer', assessment: 'met', evidence: 'Served as the office’s Chief Deputy Assessor/Taxpayer Advocate, assisting taxpayers and leading its outreach programs (county biography).' },
          ],
        },
        bio: [
          'Marks is the sitting county Assessor/Recorder/County Clerk, sworn in for a four-year term after the 2022 election. Before that he was the office’s Chief Deputy Assessor/Taxpayer Advocate, and earlier an attorney at the state agency that oversees county assessors, appointed under Gov. Jerry Brown. County materials describe him as a licensed attorney and certified property tax appraiser.',
          'The office is nonpartisan on the ballot. Local coverage of his 2022 win identified him as a Republican, and the San Diego County Republican Party lists him among its endorsed candidates (KPBS endorsement guide, Sept. 30, 2026).',
        ],
        scorecard: [
          { topic: 'Office duties', position: '✓ Seeking a second term running assessment, recording, and clerk services', comparison: 'No opponent on the ballot to compare against.' },
          { topic: 'Transparency', position: '~ Argued in May 2026 that charters "should never be written by those in power to benefit themselves" and backed the rival charter plan', comparison: 'That was about the county charter debate (see Measure A), not about the Assessor’s own office.' },
        ],
        endorsements: 'San Diego County Republican Party; Deputy Sheriffs’ Association of San Diego County (per its endorsements page). No other endorsements on public record.',
        notes: ['Money: no campaign finance totals published for this unopposed race.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Marks', '○', 'Leftward Progressives have no alternative in a technical office that applies state property-tax law, so a vote for Marks or a blank line are both reasonable.'],
      ['LL', 'Marks', '◐', 'Loyal Liberals value expertise in administrative posts, and Marks is a certified appraiser and attorney who worked at the state agency that oversees assessors, even though the county Republican Party backs Marks.'],
      ['LO', 'Marks', '○', 'Left-Out Left voters have no alternative to the incumbent, and leaving the line blank is also a reasonable protest against an uncontested seat.'],
      ['OO', 'Marks', '◐', 'Order and Opportunity Left voters want offices that run smoothly, and Marks has managed the assessment roll for nearly four years with appraisal credentials.'],
      ['TM', 'Marks', '○', 'Tuned-Out Middle voters can vote for the only name or skip a line that will not change the outcome.'],
      ['PP', 'Marks', '●', 'Pragmatic and Polite Right voters reward competence and steadiness, and Marks brings appraisal credentials and years in the office and its state oversight agency.'],
      ['UR', 'Marks', '◐', 'Unconventional Right voters like Marks’s public stance that officials should not write rules to benefit themselves, and there is no alternative on the ballot.'],
      ['FC', 'Marks', '◐', 'Faith First Conservatives will find the Republican-endorsed incumbent an acceptable choice in a one-candidate race about property valuation.'],
      ['NA', 'Marks', '◐', 'No Apologies Right voters can back the Republican-endorsed incumbent who opposed the Board majority’s charter plan, though the office does not touch the issues they care most about.'],
    ]),
    counterArguments: [
      'PP (Marks ●): But consider leaving the line blank or writing someone in, because an uncontested race still allows a protest vote.',
    ],
  },

  {
    id: 'sd-county-treasurer',
    categoryId: 'county',
    title: 'San Diego County Treasurer-Tax Collector',
    tldrLabel: 'County Treasurer-Tax Collector',
    seatContext: 'Appointed incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Treasurer-Tax Collector bills and collects property taxes, holds and invests county money, and distributes collections to cities, schools, and special districts. The campaign site of the incumbent describes more than $16 billion in public funds under management. The office does not set tax rates.',
      'The seat opened mid-term when longtime Treasurer Dan McAllister left office in 2025; the Board of Supervisors appointed Larry Cohen. This race decides who holds the job for the next four years, with no term limit.',
    ],
    introParagraphs: [
      'In the June 2 primary, Cohen led with 47.38% and Nakawatase placed second with 33.68% (San Diego County Registrar results as summarized by East County Magazine and Ballot Brief); Supervisor Joel Anderson finished third. The office is nonpartisan, but the county parties split: Democrats back Cohen and Republicans back Nakawatase (KPBS endorsement guide, Sept. 30, 2026).',
    ],
    legalRequirements:
      'U.S. citizen and registered voter of San Diego County (Gov. Code § 24001). Where a county has adopted them, Gov. Code § 27000.7 requires one of: 3+ continuous years in senior public-finance management; a related bachelor’s degree plus 16 semester units of accounting, auditing or finance; a California CPA license; or a CFA charter plus those units. Gov. Code § 27000.8 requires 48 hours of continuing education during each term. Whether San Diego County has adopted § 27000.7 is not publicly documented.',
    qualificationCriteria: [
      { id: 'investment', label: 'Managing a public investment pool', detail: 'The office invests county and local-agency funds that the county places at $10 to $19 billion.' },
      { id: 'collection', label: 'Property-tax collection operations', detail: 'The office bills and collects about $9 billion a year from nearly one million parcels.' },
      { id: 'credentials', label: 'Finance or accounting credentials', detail: 'State law ties eligibility to public-finance experience, finance coursework, or CPA/CFA credentials.' },
      { id: 'management', label: 'Managing a department', detail: 'The office runs billing, payment processing and banking staff and must deliver accurate distributions.' },
    ],
    candidates: [
      {
        id: 'larry-cohen',
        name: 'Larry Cohen',
        party: 'NP',
        role: 'Appointed Treasurer Tax Collector San Diego County',
        campaignUrl: 'https://larry-cohen.com/',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Cohen has held the office since November 18, 2025, after finance-policy staff work in Congress and a business-line role in the pharmaceutical industry. His time in the job is short and he lists no CPA or CFA credential.',
          criteria: [
            { criterionId: 'investment', assessment: 'partial', evidence: 'Has overseen the county investment pool (county page lists $15 to $19 billion) since Nov 18, 2025; earlier work was advising on House Financial Services Committee issues, not managing an investment portfolio.' },
            { criterionId: 'collection', assessment: 'partial', evidence: 'Has overseen collection of more than $9 billion in annual property taxes since Nov 2025, about 11 months in the job; no prior tax-collection role documented.' },
            { criterionId: 'credentials', assessment: 'partial', evidence: 'Holds an MBA (Strayer University) and a political science B.A. (UC San Diego); the county biography lists no CPA or CFA, and his eligibility route under Gov. Code § 27000.7 was not found.' },
            { criterionId: 'management', assessment: 'partial', evidence: 'Heads the department since Nov 2025 (staff size not stated); earlier managed a $30 million business line at MilliporeSigma and was a congressional chief of staff for over five years (county biography).' },
          ],
        },
        bio: [
          'Cohen (Lawrence Cohen) is the appointed incumbent. He previously served as Chief of Staff to Rep. Juan Vargas and as senior policy advisor to a House financial services committee, and spent more than 25 years in the pharmaceutical industry in business development, sales and drug discovery (OB Rag). He is a registered Democrat from Carlsbad.',
          'His stated priorities are taxpayer protection and transparent financial reporting, expanded property-tax relief for seniors, veterans and low-income homeowners, modernizing the property-tax system, and protecting seniors from scams (campaign site; Voice of San Diego).',
        ],
        recordVsChange:
          'Cohen has run the office for about a year, so the record is short; the case for him is continuity and a modernization agenda with the party establishment’s backing, while the case for change rests on his lack of a finance or accounting career before the appointment and on the value of a CPA at the head of the office.',
        scorecard: [
          { topic: 'Core duties', position: '✓ Oversees tax collection and investment of public funds; cites more than $16B under management', comparison: 'Nakawatase would bring a 40-year CPA background rather than incumbency.' },
          { topic: 'Property tax relief', position: '✓✓ Wants expanded relief programs for seniors, veterans, and low-income homeowners', comparison: 'Nakawatase emphasizes efficient collection and taxpayer education rather than expanding relief programs.' },
          { topic: 'Modernization', position: '✓ Focus on modernizing the property tax system and protecting seniors from scams', comparison: 'Nakawatase also pledges modern, accessible tools.' },
          { topic: 'Transparency', position: '✓ Promises transparent financial reporting', comparison: 'Both promise transparency; neither has published verifiable benchmarks I could find.' },
          { topic: 'Investments', position: '~ "Prudent investment of public funds" with no specific policy detail on public record', comparison: 'Nakawatase uses nearly identical language.' },
        ],
        money: 'Reported raising more than $200,000 by early 2026, including $95,000 loaned to his campaign and $23,000 from the county Democratic Party (La Prensa San Diego / OB Rag). More recent totals not publicly documented.',
        endorsements:
          'San Diego County Democratic Party; Supervisors Paloma Aguirre, Monica Montgomery Steppe, and Terra Lawson-Remer; Sheriff Kelly Martinez; Mayor Todd Gloria; Reps. Juan Vargas, Mike Levin, Scott Peters, Sara Jacobs (self-published list on larry-cohen.com).',
        notes: [
          'Appointed by the Board of Supervisors after McAllister’s departure; Supervisor Joel Anderson, a Republican, also ran in the primary and finished third.',
        ],
      },
      {
        id: 'shirley-nakawatase',
        name: 'Shirley Nakawatase',
        party: 'NP',
        role: 'Businesswoman/Treasurer/CPA',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Nakawatase is a CPA with about four decades of tax and accounting work and runs her own accounting firm. She has not held a public finance office or managed a public investment portfolio.',
          criteria: [
            { criterionId: 'investment', assessment: 'partial', evidence: 'Serves as treasurer of the San Diego County Capital Asset Leasing Corporation (KPBS); no management of a public investment pool is documented.' },
            { criterionId: 'collection', assessment: 'partial', evidence: 'More than 40 years of tax preparation and tax consulting for clients (Voice of San Diego); no role collecting taxes for a government is documented.' },
            { criterionId: 'credentials', assessment: 'met', evidence: 'Certified public accountant, a credential listed in Gov. Code § 27000.7; accounting degree from San Diego State University.' },
            { criterionId: 'management', assessment: 'partial', evidence: 'Founded and runs Nakawatase & Co. CPAs (now HNK CPAs) with offices in Imperial Beach and El Cajon (KPBS); no public department management documented.' },
          ],
        },
        bio: [
          'Nakawatase is an Imperial Beach certified public accountant with more than 40 years in tax preparation, financial consulting and business restructuring, and an accounting degree from San Diego State University. She has served as treasurer of the county’s building-finance corporation and chaired San Diego-Imperial Counties Developmental Services (Voice of San Diego).',
          'She ran for mayor of Imperial Beach in 2022. Her stated priorities are efficient, transparent tax collection with modern, accessible tools, prudent management of county funds, and taxpayer advocacy including financial literacy.',
        ],
        scorecard: [
          { topic: 'Core duties', position: '✓✓ CPA with four decades of tax and finance experience', comparison: 'Cohen’s background is policy staff and pharmaceutical business development.' },
          { topic: 'Investments', position: '✓ Pledges prudent management and investment of county funds', comparison: 'Cohen uses similar language; neither lists specific investment policy changes.' },
          { topic: 'Property tax relief', position: '~ Emphasizes taxpayer advocacy and tax-relief education rather than expanding programs', comparison: 'Cohen proposes expanding relief programs.' },
          { topic: 'Modernization', position: '✓ Promises modern, accessible collection tools', comparison: 'Both candidates promise modernization.' },
          { topic: 'Transparency', position: '✓ Promises transparent collection and reporting', comparison: 'Same pledge as Cohen; no public specifics.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Republican Party (KPBS endorsement guide, Sept. 30, 2026). No Democratic or progressive organization endorsements found.',
        notes: [
          'Her daughter, Mariko Nakawatase, works as District Director in Supervisor Joel Anderson’s office and sits on the Imperial Beach City Council (OB Rag, Feb. 2026); Anderson was her primary-election rival.',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Cohen', '◐', 'Leftward Progressives want help aimed at people with less, and Cohen proposes expanding property-tax relief for seniors, veterans and low-income homeowners, though the office does not set tax policy.'],
      ['LL', 'Cohen', '◐', 'Loyal Liberals give weight to the Democratic Party, the Sheriff and most of the county’s elected officials backing Cohen, though their trust in expertise also favors Nakawatase’s CPA credential in a money-handling office.'],
      ['LO', 'Cohen', '◐', 'Left-Out Left voters want relief for struggling homeowners, which Cohen offers, though Cohen is a party-backed appointee and former congressional chief of staff, the kind of insider they distrust.'],
      ['OO', 'Cohen', '◐', 'Order and Opportunity Left voters want practical help with costs and protection from fraud, and Cohen pairs expanded tax relief with a focus on protecting seniors from scams.'],
      ['TM', 'Cohen', '○', 'Tuned-Out Middle voters are pocketbook-first, and Cohen’s promise of expanded relief programs is more concrete help than Nakawatase’s emphasis on taxpayer education.'],
      ['PP', 'Nakawatase', '◐', 'Pragmatic and Polite Right voters value competence over party, and Nakawatase, a CPA with four decades in tax work, fits a job handling billions in public funds better than a former political staffer.'],
      ['UR', 'Nakawatase', '◐', 'Unconventional Right voters favor lean, efficient government and are wary of party appointees, so the business-owner CPA is the better fit than a Democrat appointed by the Board majority.'],
      ['FC', 'Nakawatase', '●', 'Faith First Conservatives want limited, efficient government, and the Republican-endorsed CPA stresses efficient collection over expanding programs.'],
      ['NA', 'Nakawatase', '●', 'No Apologies Right voters distrust the Democratic establishment that appointed Cohen and prefer Nakawatase’s private-sector, efficiency-first approach.'],
    ]),
    counterArguments: [
      'FC/NA (Nakawatase ●): But consider that a Treasurer does not set tax policy and Cohen has already run the office for about a year, because what matters most is whether collections and investments run smoothly.',
      'LL/LO (Cohen ◐): But consider Nakawatase’s 40 years as a CPA, because the credential case arguably fits an office that invests billions of public dollars better than a policy background.',
    ],
    readingLinks: [
      { label: 'Voice of San Diego 2026 voter guide', url: 'https://voiceofsandiego.org/2026/10/05/voice-of-san-diegos-no-bs-2026-voter-guide/', summary: 'Neutral profiles of both candidates.' },
      { label: 'KPBS party endorsement guide', url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian', summary: 'Shows how Democratic and Republican parties split on the office and measures.' },
    ],
  },

  {
    id: 'sd-city-council-d6',
    categoryId: 'city',
    title: 'San Diego City Council, District 6',
    tldrLabel: 'SD City Council D6',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The nine-member San Diego City Council sets the city budget, zoning and land-use rules, and fees. District 6 covers Mira Mesa, Miramar, and parts of Rancho Peñasquitos, which makes the seat directly relevant for voters in 92126.',
      'Kent Lee flipped the seat in 2022 and now serves as Council President Pro Tem. This runoff-style rematch is effectively a referendum on his housing-growth, transit, and fee approach versus a challenger who criticizes City Hall.',
    ],
    introParagraphs: [
      'Lee and Powell were the only two candidates in the June 2 primary, so the November contest is a rematch; Lee received about 59% (Times of San Diego voter guide). The office is nonpartisan, but state-party affiliations matter in practice: county Democrats back Lee and the county Republican Party backs Powell (KPBS, Sept. 30, 2026).',
    ],
    legalRequirements:
      'Resident and elector of the City of San Diego, and an actual resident and elector of the district from which nominated (City Charter, Art. II, § 7).',
    qualificationCriteria: [
      { id: 'governance', label: 'Municipal policy and governance', detail: 'Councilmembers pass city laws, oversee departments and sit on regional boards.' },
      { id: 'land-budget', label: 'Land use and budget', detail: 'The Council adopts the city budget, fees, and zoning and community plans.' },
      { id: 'constituent', label: 'Constituent services and district knowledge', detail: 'The office handles resident requests and represents neighborhoods such as Mira Mesa and Miramar.' },
      { id: 'coalition', label: 'Coalition-building', detail: 'Passing items takes votes from at least five of nine members and work with the mayor and regional agencies.' },
    ],
    candidates: [
      {
        id: 'kent-lee',
        photoSlug: 'kent-lee',
        name: 'Kent Lee',
        party: 'NP',
        role: 'City Councilmember',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Lee holds the District 6 seat and has served on the Council since December 2022, including as Council President Pro Tem since December 2024.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Councilmember since Dec 2022; Council President Pro Tem since Dec 2024; non-voting member of the North County Transit District board.' },
            { criterionId: 'land-budget', assessment: 'met', evidence: 'Has voted on the city’s annual budgets and zoning and land-use items as a councilmember since 2023; specific committee assignments are not publicly documented.' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Has represented District 6 for one term; before that led the Pacific Arts Movement (San Diego Asian Film Festival) and worked in development for the Boy Scouts’ San Diego-Imperial Council.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Chosen by council colleagues as Council President Pro Tem; has worked on regional transit as an NCTD board member.' },
          ],
        },
        bio: [
          'Lee is a Democrat who has represented District 6 since December 2022 and has been Council President Pro Tem since December 2024. Born in West Covina to Chinese immigrants from Vietnam and Myanmar, he earned a UC San Diego degree in economics and biology in 2007, worked in development for the Boy Scouts’ San Diego-Imperial Council, and led the Pacific Arts Movement, which runs the San Diego Asian Film Festival (Wikipedia).',
          'His stated priorities are homelessness, housing attainability, and infrastructure and transit; he sits as a non-voting member of the North County Transit District board.',
        ],
        recordVsChange:
          'Lee has held the seat for one term and risen to council leadership, which gives District 6 more influence on budget and committee decisions; the case for change is the challenger’s argument that the council has raised fees and pushed density that residents did not ask for.',
        scorecard: [
          { topic: 'Housing', position: '✓✓ Supports more density near transit, including high-rise housing along major corridors (per Doug Porter’s candidate review)', comparison: 'Powell opposes high-density projects.' },
          { topic: 'Homelessness', position: '✓ Lists homelessness as a top priority', comparison: 'Powell’s published stance centers on City Hall failures rather than a specific program.' },
          { topic: 'Transit/infrastructure', position: '✓ Priority on transit and infrastructure; NCTD board seat', comparison: 'Powell opposes the city’s bike-lane build-out.' },
          { topic: 'Budget/fees', position: '~ His website cites transparency, fiscal responsibility, and accountability; no specific fee position on public record', comparison: 'Powell opposes the city’s new fees.' },
          { topic: 'Ideology', position: '✓ Democrat; backed by county Democrats and the Labor Council', comparison: 'Powell is Republican-aligned.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Democratic Party; San Diego & Imperial Counties Labor Council (per Doug Porter’s review and KPBS endorsement guide).',
        notes: [],
      },
      {
        id: 'mark-powell',
        name: 'Mark Powell',
        party: 'NP',
        role: 'Business Owner/Educator',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Powell is an educator who was elected to the San Diego County Board of Education in 2016, with a past as a reserve police officer. He has not held city office, and his term dates and occupation details are not publicly documented.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Elected to the San Diego County Board of Education in 2016 (current status unconfirmed); no city government role documented.' },
            { criterionId: 'land-budget', assessment: 'unknown', evidence: 'No municipal budget or zoning role documented; his campaign site describes him as a real estate broker, but a license is not publicly documented (city ballot designation: Business Owner/Educator).' },
            { criterionId: 'constituent', assessment: 'partial', evidence: 'Describes himself as a lifelong San Diegan and former teacher, dean, vice principal and university professor, and former San Diego Police reserve officer (campaign site via Ballot Brief); no constituent-service role documented.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Sits on a multi-member elected board (County Board of Education); no record of passing city legislation.' },
          ],
        },
        bio: [
          'Powell is a real estate broker who was elected to the San Diego County Board of Education in 2016 who has run for office before (Times of San Diego voter guide). He is aligned with the Republican Party, which endorsed him.',
          'He says City Hall is failing the district and that he is "not beholden to City Hall"; he opposes the city’s new fees, bike lanes, and high-density housing projects (Voice of San Diego).',
        ],
        scorecard: [
          { topic: 'Housing', position: '✗ Opposes high-density housing projects', comparison: 'Lee supports density near transit.' },
          { topic: 'Budget/fees', position: '✓✓ Opposes the city’s new fees; wants a more business-like city', comparison: 'Lee is more comfortable with city revenue measures.' },
          { topic: 'Transit/bikes', position: '✗ Opposes bike lanes', comparison: 'Lee emphasizes transit and infrastructure.' },
          { topic: 'Public safety', position: '? No specific policy on public record', comparison: 'Lee has not published specifics either.' },
          { topic: 'Ideology', position: '✓ Republican-aligned; backed by county GOP', comparison: 'Lee is the Democratic-backed incumbent.' },
        ],
        money: 'No campaign finance totals published as of Oct 7, 2026; filings are posted on the county or city campaign-disclosure site.',
        endorsements: 'San Diego County Republican Party; Assemblymember Carl DeMaio; San Diego Union-Tribune editorial board (opinion), as reported in coverage of the race.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Lee', '●', 'Leftward Progressives want more housing near transit and strong homelessness programs, and Lee backs density along transit corridors while Powell opposes high-density projects and bike lanes.'],
      ['LL', 'Lee', '●', 'Loyal Liberals value experienced, institution-building leaders, and Lee has risen to Council President Pro Tem with Democratic Party and labor backing.'],
      ['LO', 'Lee', '◐', 'Left-Out Left voters want housing they can afford, which Lee’s pro-housing record serves better than Powell’s opposition to density, though Lee is now part of council leadership they tend to distrust.'],
      ['OO', 'Lee', '◐', 'Order and Opportunity Left voters want housing attainability and working infrastructure, which Lee prioritizes, though Powell’s past as a police reserve officer and fee opposition appeal to their concern for order and costs.'],
      ['TM', 'Powell', '○', 'Tuned-Out Middle voters feel city fees in their own budgets, and Powell opposes the new fees, though weakly because few will know either candidate.', 'Tuned-Out Middle voters who want someone who knows the job could pick Lee, who has voted on city budgets since 2023 and leads the council as President Pro Tem, giving up Powell’s promise to fight new fees.'],
      ['PP', 'Lee', '◐', 'Pragmatic and Polite Right voters value experience and steady, incremental governing, and Lee’s council leadership fits, though Powell’s opposition to new fees matches their fiscal caution.'],
      ['UR', 'Powell', '◐', 'Unconventional Right voters want lower costs and less City Hall, and Powell says he is not beholden to City Hall and opposes fees, bike lanes and dense projects.', 'Unconventional Right voters who prize know-how could choose Lee, a councilmember since 2022 picked by colleagues as President Pro Tem, giving up Powell’s stand against new fees and high-density projects.'],
      ['FC', 'Powell', '●', 'Faith First Conservatives want limited government and a business-like city, and the Republican-endorsed Powell opposes new fees and density.'],
      ['NA', 'Powell', '●', 'No Apologies Right voters want a fighter against City Hall, and Powell, backed by DeMaio and the county Republican Party, opposes the city’s fees, bike lanes and density.'],
    ]),
    counterArguments: [
      'FC/NA (Powell ●): But consider that Lee won about 59% in the primary and Powell has never held city office, because a newcomer would start with far less influence over the budget.',
      'LP/LL (Lee ●): But consider Powell’s opposition to rising city fees, because fee fatigue is a real cost-of-living concern even in District 6’s middle-income neighborhoods.',
    ],
    readingLinks: [
      { label: 'Times of San Diego primary results', url: 'https://timesofsandiego.com/politics/2026/06/02/kent-lee-henry-foster-incumbent-lead-vote-results/', summary: 'June 2 results for Districts 4 and 6.' },
      { label: 'Doug Porter: District 6 contest review', url: 'https://dougporter.substack.com/p/san-diego-city-council-contests-districts-00f', summary: 'Opinionated Substack review with endorsements; treat as commentary.' },
    ],
  },

  {
    id: 'sd-measure-a',
    categoryId: 'local-measures',
    title: 'County Measure A — Charter reform (ethics, auditors, term limits)',
    tldrLabel: 'County Measure A — Charter reform',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure A amends the County Charter, bundling watchdog reforms both sides like (ethics oversight, audits, spending data) with more Board control over senior staff and a third four-year term for supervisors. Voters must take it as one package.',
    ],
    introParagraphs: [
      'The Board of Supervisors voted 3-2 in May 2026 to place the package on the ballot, with Paloma Aguirre, Terra Lawson-Remer, and Monica Montgomery Steppe in favor and Joel Anderson and Jim Desmond opposed (KPBS). Supporters had raised $45,000 and opponents $0 as of Sept. 21, 2026 (KPBS).',
    ],
    measure: {
      explainerUrl: 'https://www.kpbs.org/news/politics/2026/09/30/measure-a-extending-supervisor-term-limits-and-other-county-charter-reforms',
      question:
        'Shall the San Diego County Charter be amended to establish an Independent Ethics Commission, Independent Budget Analyst, Independent Program Auditor, confirmation of certain senior County leaders, and optional Board of Supervisors appointment of the Public Defender; increase term limits from two to three terms for Board of Supervisors members; require public disclosure of spending and performance data; clarify non-interference provisions; and update terminology and structure?',
      yesMeans: 'Amends the County Charter to create independent ethics, budget and audit offices, let supervisors confirm senior leaders, require spending data, and allow supervisors three four-year terms instead of two.',
      noMeans: 'Keeps supervisors’ two-term limit and the current charter, without the new ethics commission, budget analyst, program auditor or Board confirmation of senior staff.',
      funding: {
        asOf: 'Sept. 21, 2026',
        yes: { raised: '$45,000' },
        note: 'Opponents had reported raising no money. Donor names were not reported.',
        sources: [
          { label: 'KPBS: Measure A explainer, citing the county campaign disclosure portal (Sept. 30, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/30/measure-a-extending-supervisor-term-limits-and-other-county-charter-reforms' },
          { label: 'San Diego County Registrar of Voters: campaign finance public portal', url: 'https://www.southtechhosting.com/SanDiegoCounty/CampaignDocsWebRetrieval/' },
        ],
      },
      positions: [
        { org: 'San Diego County Democratic Party', kind: 'party', position: 'Yes', url: 'https://www.sddemocrats.org/propositions--ballot-measures.html' },
        { org: 'San Diego Union-Tribune', kind: 'editorial', position: 'No', url: 'https://www.sandiegouniontribune.com/2026/10/08/endorsement-why-we-strongly-oppose-both-county-measure-a-and-measure-b/' },
      ],
      measureType: 'Charter amendment (placed by Board of Supervisors)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Described by the Board as "revenue-neutral": changes must be made with no new spending or reduced services (KPBS). Lawson-Remer’s office says it relies on existing resources and could save money by preventing fraud and waste. No county counsel or auditor fiscal estimate was found.',
      supporters: 'Board Chair Terra Lawson-Remer; San Diego County Democratic Party; San Diego and Imperial Counties Labor Council.',
      opponents: 'Supervisors Jim Desmond and Joel Anderson; Reform California. Sheriff Kelly Martinez, DA Summer Stephan, and Assessor Jordan Marks backed Anderson’s alternative plan.',
      voterConnection: [
        'Supervisors control a budget in the billions and decide health, roads, land use, and public safety countywide, so who holds the seats, and for how long, affects every resident.',
        'A Yes would let two sitting supervisors, Lawson-Remer and Anderson, run again beyond 2028.',
        'Senior staff now hired by the chief administrative officer would answer to the supervisors, who could confirm and remove them.',
      ],
      mechanismBullets: [
        'Term limits: three four-year terms instead of two (12 years max); the current two-term limit dates to a 2010 county vote.',
        'Creates an Independent Ethics Commission (KPBS reports supervisors and county counsel would appoint its members), plus an Independent Budget Analyst and Independent Program Auditor, both reporting to the Board.',
        'Board confirms and may remove certain senior county leaders, and may opt to appoint the Public Defender.',
        'Requires public spending and performance data and annual performance and fiscal audits.',
        'A Montgomery Steppe amendment removed term limits for the sheriff, district attorney, and other county officials, who have none now (KPBS). Fox 5 earlier reported the opposite; the ballot question mentions only supervisors’ terms.',
      ],
      argumentsFor: [
        'Independent ethics, budget, and audit offices would add oversight the county lacks today.',
        'Longer terms match state legislators’ and help supervisors manage complex multi-year projects (supporters).',
        'Required spending and performance disclosure makes county finances easier to track.',
      ],
      argumentsAgainst: [
        'Supervisors would be voting themselves longer terms; Desmond and Anderson say that should come from a voter initiative, not the Board.',
        'The new auditor and budget analyst would report to the Board they are meant to check.',
        'Hiring and firing power over senior staff blurs politics and administration (Anderson: "Filling potholes shouldn’t be political").',
      ],
      readingLinks: [
        { label: 'KPBS: Measure A explainer (Sept. 30, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/30/measure-a-extending-supervisor-term-limits-and-other-county-charter-reforms', summary: 'Summary, endorsements, and money raised.' },
        { label: 'KPBS: Supervisors OK charter reform for ballot (May 20, 2026)', url: 'https://www.kpbs.org/news/politics/2026/05/20/county-supervisors-ok-charter-reform-package-for-november-ballot', summary: 'The 3-2 vote and the arguments made on the dais.' },
        { label: 'County: charter reform engagement page', url: 'https://engage.sandiegocounty.gov/county-charter-reform', summary: 'County’s own description of the proposal.' },
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes', '◐', 'Leftward Progressives want stronger ethics and spending transparency in county government, which the commission, auditor and disclosure rules add, though letting supervisors extend their own terms is a real trade-off.'],
      ['LL', 'Yes', '●', 'Loyal Liberals trust expert, professional oversight, and an independent budget analyst, program auditor and ethics commission build exactly that capacity.'],
      ['LO', 'No', '◐', 'Left-Out Left voters distrust officials’ motives, and a package that gives supervisors a third term and power over senior staff looks like insiders protecting themselves, despite the ethics reforms.'],
      ['OO', 'Yes / No', '=', 'Order and Opportunity Left voters respect orderly, accountable institutions: if the new auditor and spending disclosure matter most, Yes; if letting supervisors lengthen their own term limits matters more, No.'],
      ['TM', 'No', '○', 'Tuned-Out Middle voters distrust officials and tune out complex reforms, and a package that lengthens supervisors’ terms gives them little reason for a Yes.'],
      ['PP', 'No', '◐', 'Pragmatic and Polite Right voters like ethics oversight but value the rule of law and dislike officials changing rules for their own benefit, and watchdogs reporting to the Board they check weaken the case.'],
      ['UR', 'No', '●', 'Unconventional Right voters are anti-establishment and small-government, and supervisors voting themselves a third term while taking more power over staff is what they oppose.'],
      ['FC', 'No', '◐', 'Faith First Conservatives value term limits as a check on government and oppose expanding the Board majority’s power, though they may welcome an ethics commission.'],
      ['NA', 'No', '●', 'No Apologies Right voters distrust the county’s Democratic majority and oppose any self-extension of its power, in line with the Republican supervisors and Reform California.'],
    ]),
    hinges: {
      LP: 'Yes if an ethics commission, independent auditor and spending disclosure are worth giving supervisors a third term. No if new watchdogs that answer to the Board and longer terms for incumbents look more like protection than accountability.',
      LL: 'Yes if independent budget, audit and ethics offices give the county the professional oversight it lacks. No if watchdogs reporting to the Board they check, plus self-extended terms, undercut the reform’s credibility.',
      LO: 'Yes if real ethics and audit oversight matters more to you than who holds the seats. No if supervisors lengthening their own terms and appointing their own watchdogs looks like insiders looking after themselves.',
      OO: 'Yes if public spending data and annual audits will make county government more accountable for services you rely on. No if a package that lengthens supervisors’ terms and politicizes senior staff hiring weakens the order it promises.',
      TM: 'Yes if more spending data and audits on a county budget that touches your roads and health care are worth it. No if a complex package that helps sitting officials stay longer is one you don’t trust.',
      PP: 'Yes if the ethics commission, budget analyst and auditor are a careful, overdue improvement. No if supervisors changing their own term limits, rather than voters doing it by initiative, breaks the rules-first standard you hold.',
      UR: 'Yes if you want the ethics and audit offices even some Republican supervisors say they support. No if politicians lengthening their own terms and gaining power over county staff should be stopped.',
      FC: 'Yes if new ethics and audit oversight matters more to you than keeping a two-term limit. No if term limits are a key check on government and the Board should not gain power to hire and fire senior leaders.',
      NA: 'Yes if an independent auditor and ethics commission would expose waste you want exposed. No if the Board’s Democratic majority is using reforms to entrench itself, as Reform California and the GOP supervisors argue.',
    },
    counterArguments: [
      'UR/NA (No ●): But consider that Measure A creates an ethics commission, auditor and budget analyst, because Desmond himself says he supports those reforms and they would scrutinize county spending.',
      'LL (Yes ●): But consider that the new auditor and budget analyst report to the Board they would oversee and supervisors would extend their own terms, because experts on good government usually want watchdogs independent of those they watch.',
    ],
  },

  {
    id: 'sd-measure-b',
    categoryId: 'local-measures',
    title: 'County Measure B — Half-cent sales tax for health & safety',
    tldrLabel: 'County Measure B — Half-cent sales tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure B is a permanent half-cent countywide sales tax for Tijuana River sewage cleanup, health care, child care, food assistance, and wildfire and emergency response. Supporters see reliable local money as federal funds shrink; opponents see a permanent tax with little performance accountability.',
    ],
    introParagraphs: [
      'A citizen initiative backed by labor, health, and environmental groups; the Registrar confirmed more than 121,000 valid signatures against roughly 103,000 needed (Times of San Diego). Supporters had raised $2.3 million and opponents $149,000 as of Sept. 24, 2026 (KPBS). An ABC 10News/San Diego Union-Tribune poll reported by KPBS found 49% support, 35% opposed, 17% unsure (field dates not stated).',
      'In 2024 the county’s similar half-cent Measure G (focused on transportation) and the city’s Measure E both failed by under 1 point. Prop 43’s two-thirds rule starts Jan. 1, 2027, so it doesn’t apply here.',
    ],
    measure: {
      explainerUrl: 'https://www.kpbs.org/news/politics/2026/10/01/measure-b-san-diego-county-health-safety-act',
      question:
        'To clean up sewage pollution in Tijuana River Valley, improve wildfire prevention, emergency response, access to healthcare, food assistance, childhood development services, and authorized administrative expenses; shall the measure authorizing a half-cent sales tax raising an estimated $400,000,000 to $450,000,000 annually, requiring citizen oversight, public spending disclosure, and independent annual audits, and lasting until ended by voters, be adopted?',
      yesMeans: 'Adds a half-cent countywide sales tax with no end date, about $400 million to $450 million a year for health care, child care, food aid, Tijuana River sewage and wildfire response.',
      noMeans: 'Keeps the county sales tax rate as is, and these programs continue to depend on existing county, state and federal money.',
      funding: {
        asOf: 'Sept. 24, 2026',
        yes: { raised: '$2.3 million' },
        no: { raised: '$149,000' },
        note: 'Top donors were not reported in the coverage reviewed.',
        sources: [
          { label: 'KPBS: Measure B explainer, fundraising totals (Oct. 1, 2026)', url: 'https://www.kpbs.org/news/politics/2026/10/01/measure-b-san-diego-county-health-safety-act' },
          { label: 'San Diego County Registrar of Voters: campaign finance public portal', url: 'https://www.southtechhosting.com/SanDiegoCounty/CampaignDocsWebRetrieval/' },
        ],
      },
      positions: [
        { org: 'San Diego County Democratic Party', kind: 'party', position: 'Yes', url: 'https://www.sddemocrats.org/propositions--ballot-measures.html' },
        { org: 'Republican Party of San Diego County', kind: 'party', position: 'No', url: 'https://www.sandiegorepublicans.org/voter-guides/san-diego' },
        { org: 'San Diego Union-Tribune', kind: 'editorial', position: 'No', url: 'https://www.sandiegouniontribune.com/2026/10/08/endorsement-why-we-strongly-oppose-both-county-measure-a-and-measure-b/' },
      ],
      measureType: 'Citizen initiative (countywide sales tax, with revenue dedicated to specified purposes)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Estimated $400 million to $450 million per year per the ballot label; proponents’ earlier figure was about $360 million. No sunset. No county counsel or auditor analysis was available to review.',
      supporters: 'San Diegans for Health and Safety; SEIU 221; Children First Collective San Diego; First 5 San Diego; Cal Fire Local 2881; Hospital Association of San Diego & Imperial Counties; San Diego County Democratic Party.',
      opponents: 'San Diego County Taxpayers Association; Reform California; San Diego County Republican Party.',
      voterConnection: [
        'Everyone buying taxable goods in the county pays about 50 cents more per $100; supporters say the programs funded would help the lower-income households a sales tax hits hardest.',
        'It would backfill an estimated $300 million county budget shortfall tied partly to federal cuts (San Diego Foundation).',
      ],
      mechanismBullets: [
        'Rate: 7.75% to 8.25%; exemptions include certain aircraft purchases and some property sold for use outside the county (KPBS).',
        'Allocation (as reported): about 60% to health care, child care, food security, and family services; 22.5% to Tijuana River sewage fixes and response; roughly 16% to 17.5% to public safety, wildfire prevention, and emergency response; up to 1.5% to administration and oversight. Sources differ slightly on the public safety share.',
        'Prohibited uses: pay for elected officials, executive bonuses or raises, lobbying or PR contracts, and building or renovating county offices (Times of San Diego).',
        'Oversight: an 11-member citizen committee and an independent annual audit (KPBS).',
        'Threshold: KPBS reports a simple majority applies because it is a citizen initiative; a Board-placed version with dedicated revenue would likely have needed two-thirds. No source reviewed formally classifies the tax as general or special, so check the county counsel analysis in the official voter guide.',
      ],
      argumentsFor: [
        'Dedicated local funding is more reliable than federal and state sources that are being cut.',
        'About 22% targets the Tijuana River sewage crisis, which has harmed South County beaches, air quality, and health.',
        'Citizen oversight, annual audits, and public reports are built in.',
        'It can’t be spent on officials’ pay, executive bonuses, lobbying, or county offices.',
      ],
      argumentsAgainst: [
        'It is permanent, with no expiration or review date.',
        'The Taxpayers Association says it lacks outcome-based yearly performance targets and leaves the county little flexibility.',
        'Critics say Mexico and the federal government, not county taxpayers, should pay for the sewage crisis.',
        'A sales tax is regressive and raises costs for consumers and businesses.',
      ],
      readingLinks: [
        { label: 'KPBS: Measure B (Oct. 1, 2026)', url: 'https://www.kpbs.org/news/politics/2026/10/01/measure-b-san-diego-county-health-safety-act', summary: 'Allocation, endorsements, and fundraising.' },
        { label: 'KPBS Midday: Ballot Breakdown, Measure B', url: 'https://www.kpbs.org/podcasts/kpbs-midday-edition/ballot-breakdown-measure-b', summary: 'Discussion of threshold, oversight, and poll.' },
        { label: 'Times of San Diego: measure makes the ballot', url: 'https://timesofsandiego.com/politics/2026/05/28/sales-tax-increase-san-diego-county-ballot/', summary: 'Signature count, prohibited uses, and Measure G background.' },
        { label: 'San Diego Foundation voter education', url: 'https://votereducation.sdfoundation.org/', summary: 'Nonpartisan summary of arguments for and against.' },
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes', '◐', 'Leftward Progressives want an expansive safety net and would fund health care, child care and food aid, though they would rather tax the wealthy and corporations than use a regressive sales tax.'],
      ['LL', 'Yes', '●', 'Loyal Liberals accept taxes for public services and value the citizen oversight, annual audits and spending bans written into the measure.'],
      ['LO', 'Yes / No', '=', 'Left-Out Left voters want government to guarantee health care and help families: if that help matters most, Yes; if a sales tax on stretched budgets and doubts that spending promises will be kept matter more, No.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters want both economic help and public safety, and the measure funds health care and child care alongside wildfire and emergency response, though the tax adds to their costs.'],
      ['TM', 'No', '○', 'Tuned-Out Middle voters are financially strained and wary of taxes that hit them, and a permanent sales tax on everyday purchases outweighs benefits they may not see directly.'],
      ['PP', 'No', '◐', 'Pragmatic and Polite Right voters prefer cautious, well-defined spending, and a permanent tax with no sunset and no yearly performance targets is not incremental, though they may support the sewage response.'],
      ['UR', 'No', '●', 'Unconventional Right voters want lower taxes and smaller government, and this permanent tax expands both.'],
      ['FC', 'No', '●', 'Faith First Conservatives want government services reduced, not a permanent tax increase to expand them.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose nearly all new taxes and want less aid to the needy, so a permanent sales tax for health and social programs is a clear No.'],
    ]),
    hinges: {
      LP: 'Yes if steady local money for health care, child care and food aid matters more than how it is raised. No if a regressive sales tax with no end date is the wrong way to fund the safety net when wealthier taxpayers could pay more.',
      LL: 'Yes if citizen oversight, annual audits and bans on uses make this a sound way to fund public health and the sewage response. No if a permanent tax without yearly performance targets is too open-ended for good governance.',
      LO: 'Yes if health care, child care and food aid for working families are worth about 50 cents more per $100 you spend. No if a permanent tax that falls hardest on lower-income households, run by officials you don’t trust, is too much.',
      OO: 'Yes if wildfire response, sewage cleanup and health care for families are worth a higher sales tax. No if a tax with no end date adds costs your household can’t absorb.',
      TM: 'Yes if better health care, child care and sewage cleanup are worth about 50 cents more per $100 you spend. No if your budget is already tight and a permanent tax on everyday purchases is too much.',
      PP: 'Yes if oversight, audits and limits on uses make you comfortable funding sewage and wildfire work locally. No if a tax with no sunset and no performance targets is too open-ended, as the Taxpayers Association argues.',
      UR: 'Yes if the Tijuana River sewage crisis is an emergency the county must fund itself. No if a permanent tax that grows county government isn’t the answer and, as critics say, Mexico and Washington should pay.',
      FC: 'Yes if the sewage, wildfire and health needs outweigh your opposition to new taxes. No if you want government services trimmed, not funded by a permanent tax increase.',
      NA: 'Yes if the sewage emergency justifies a local tax because federal help has stalled. No if new taxes and more social spending are the wrong direction, as the county Republican Party and Reform California argue.',
    },
    counterArguments: [
      'UR/FC/NA (No ●): But consider that the sewage crisis is a local emergency and federal money has been slow, because a dedicated local source may be the only reliable way to fund the response.',
      'LL (Yes ●): But consider that a sales tax with no sunset is regressive and the similar Measure G failed narrowly in 2024, because voters can reasonably ask for performance targets first.',
    ],
  },

  {
    id: 'sdusd-measure-m',
    categoryId: 'local-measures',
    title: 'SDUSD Measure M — $3.5B school bond',
    tldrLabel: 'SDUSD Measure M — School bond',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure M would let San Diego Unified borrow for school repairs, safety upgrades, classroom modernization, and educator housing, repaid by property owners in the district. The question is whether those needs justify keeping today’s bond tax rate in place for decades more.',
    ],
    introParagraphs: [
      'It would be the district’s fifth voter-approved bond since 2008, bringing total approved bond funding to roughly $15 billion. School bonds need 55%, not two-thirds. No organized No campaign has formed (KPBS), and no fundraising totals for either side were reported in the coverage reviewed.',
    ],
    measure: {
      explainerUrl: 'https://www.kpbs.org/news/politics/2026/10/02/your-guide-to-all-san-diego-county-school-bond-measures',
      question:
        'To repair/upgrade all public schools, help retain/attract teachers by repairing deteriorating roofs, plumbing, restrooms; providing safe drinking water; removing asbestos, lead paint, mold; upgrading outdated career/vocational, science, technology, engineering classrooms; shall SDUSD’s measure authorizing $3,500,000,000 in bonds at legal rates, levying $32 per $100,000 of assessed value, providing $204,000,000 annually while bonds are outstanding, requiring public spending disclosure, audits, citizens oversight, be adopted?',
      yesMeans: 'Authorizes $3.5 billion in San Diego Unified bonds for school repairs, upgrades and educator housing, repaid by property owners at about $32 per $100,000 of assessed value while bonds are outstanding.',
      noMeans: 'Blocks the new bonds; property owners keep paying for earlier bonds, a levy expected to fall as they are paid off, and repairs would need other funding.',
      funding: {
        asOf: 'Oct. 12, 2026',
        note: 'News coverage reports no fundraising totals and no organized No campaign (KPBS), but we couldn’t search the county’s filings directly; check the source below for the latest.',
        sources: [
          { label: 'KPBS: San Diego County school bond measures guide (Oct. 2, 2026)', url: 'https://www.kpbs.org/news/politics/2026/10/02/your-guide-to-all-san-diego-county-school-bond-measures' },
          { label: 'San Diego County Registrar of Voters: campaign finance public portal', url: 'https://www.southtechhosting.com/SanDiegoCounty/CampaignDocsWebRetrieval/' },
        ],
      },
      positions: [
        { org: 'San Diego County Democratic Party', kind: 'party', position: 'Yes', url: 'https://www.sddemocrats.org/propositions--ballot-measures.html' },
        { org: 'Republican Party of San Diego County', kind: 'party', position: 'No', url: 'https://www.sandiegorepublicans.org/voter-guides/san-diego' },
        { org: 'San Diego Union-Tribune', kind: 'editorial', position: 'No', url: 'https://www.sandiegouniontribune.com/2026/10/02/the-u-t-editorial-boards-endorsements/' },
      ],
      measureType: 'School facilities bond (general obligation)',
      voteThreshold: '55%',
      fiscalImpact:
        '$32 per $100,000 of assessed value, raising about $204 million a year while bonds are outstanding. District estimates about $8.1 billion in total debt service (KPBS). The district says the rate matches the current levy; independent reviews note that without the bond the rate would likely fall as old bonds retire.',
      supporters: 'San Diego Education Association; San Diego County Taxpayers Association; San Diego County Democratic Party; SanDiego350.',
      opponents: 'None organized found; the Republican Party of San Diego County recommends No.',
      voterConnection: [
        'Property owners pay, residential or commercial; renters pay indirectly if landlords pass it through.',
        'The ballot’s "No Tax Rate Increase" works by issuing new bonds as older ones are paid off, so the rate stays about the same instead of falling (KPBS).',
        'Bond money funds buildings, repairs, equipment, and educator housing, not teacher salaries.',
      ],
      mechanismBullets: [
        'Projects: the repairs and classroom upgrades listed in the ballot question, plus hundreds of millions for educator workforce housing (Voice of San Diego).',
        'Previous bonds had $1.56 billion left as of the oversight committee’s May 2026 meeting (KPBS).',
      ],
      argumentsFor: [
        'The district cites about $461 million a year in deterioration costs that existing funds won’t cover.',
        'The district says the rate stays flat rather than rising.',
        'Citizens’ oversight, audits, and disclosure are required, and credit-rating agencies rate the program highly.',
      ],
      argumentsAgainst: [
        'A 2025 County Grand Jury report said the district didn’t clearly tell voters about past tax increases, commingled bond funds, and repeated overlapping priorities across measures.',
        'Voice of San Diego calls it a "de facto tax extension": owners keep paying the same rate longer than if it failed.',
        'Some fixes promised by earlier bonds remain incomplete.',
        'Enrollment is down more than 17,500 students since 2014 and nearly half of schools are under 70% capacity, raising doubts about how much new construction is needed.',
      ],
      readingLinks: [
        { label: 'KPBS: San Diego County school bond measures guide (Oct. 2, 2026)', url: 'https://www.kpbs.org/news/politics/2026/10/02/your-guide-to-all-san-diego-county-school-bond-measures', summary: 'Measure M details, oversight, and Grand Jury findings.' },
        { label: 'Voice of San Diego: Meet the new bond, just like the last bond (July 2026)', url: 'https://voiceofsandiego.org/2026/07/08/the-learning-curve-meet-the-new-bond-just-like-the-last-bond/', summary: 'Critical analysis of the "no tax rate increase" framing.' },
        { label: 'SDEA: Yes on Measure M', url: 'https://sdea.net/2026/08/sdea-endorsement-yes-on-measure-m/', summary: 'Teachers’ union endorsement (labeled advocacy).' },
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes', '●', 'Leftward Progressives back public-school investment and see repairing unsafe buildings and housing educators as basic equity.'],
      ['LL', 'Yes', '●', 'Loyal Liberals trust citizens’ oversight, audits and strong credit ratings, and the Taxpayers Association’s support adds expert backing.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters want good public schools for working families, but the Grand Jury’s findings on how past bonds were explained feed their doubts that promises will be kept.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters value opportunity and safe schools, and the bond funds safety repairs, career classrooms and educator housing, though decades more of the bond tax is a cost.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters may accept a bond that keeps the rate flat for safer schools, though weakly because many will not follow the details.'],
      ['PP', 'Yes', '○', 'Pragmatic and Polite Right voters will back targeted, well-run spending, and the Taxpayers Association’s endorsement and a flat rate reassure, though falling enrollment and the Grand Jury report temper it.'],
      ['UR', 'No', '◐', 'Unconventional Right voters want smaller government and lower taxes, and a fifth bond that keeps the tax rate from falling is a de facto extension.'],
      ['FC', 'No', '◐', 'Faith First Conservatives want less public spending and are skeptical of the district, though some will value repaired schools in their own neighborhoods.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose most bonds and new debt, and $8.1 billion in total debt service for a shrinking district is a clear No.'],
    ]),
    hinges: {
      LP: 'Yes if fixing unsafe roofs, plumbing, lead and asbestos and housing teachers are basic equity for public schools. No if the Grand Jury’s findings on past bonds make you want accountability before more borrowing.',
      LL: 'Yes if citizens’ oversight, audits, strong ratings and the Taxpayers Association’s backing give you confidence. No if $8.1 billion in debt service and the Grand Jury’s commingling findings outweigh those safeguards.',
      LO: 'Yes if repaired schools and educator housing matter more than the district’s track record. No if repeated promises, unfinished fixes and the Grand Jury report make you doubt the district will deliver.',
      OO: 'Yes if safe buildings and career-ready classrooms are worth keeping today’s bond tax rate. No if you’d rather the rate fall as old bonds are paid off, a cost owners and renters may feel.',
      TM: 'Yes if safer school buildings are worth keeping today’s bond tax rate in place. No if you’d rather the rate fall as old bonds are paid off, a cost owners and renters may feel.',
      PP: 'Yes if a flat-rate bond the Taxpayers Association endorses, for buildings rather than salaries, seems prudent. No if falling enrollment and half-empty schools make you doubt how much new building is needed.',
      UR: 'Yes if the repairs are real and a flat rate is acceptable to you. No if a district the Grand Jury faulted for obscuring past tax increases shouldn’t get another large bond.',
      FC: 'Yes if repairing the schools your community’s children attend outweighs your doubts about the district. No if you want less public spending and see this as a tax extension, as the county Republican Party does.',
      NA: 'Yes if crumbling school buildings are a basic responsibility worth the cost. No if $8.1 billion in debt service and a de facto tax extension, as Voice of San Diego calls it, are too much.',
    },
    counterArguments: [
      'NA (No ●): But consider that the Taxpayers Association endorses Measure M, the rate does not rise, and it funds buildings rather than salaries, because those are the safeguards fiscal conservatives usually ask for.',
      'LP/LL (Yes ●): But consider that the Grand Jury found the district obscured past tax increases and commingled funds, because the true cost is longer payments and $8.1 billion in debt service.',
    ],
  },
];
