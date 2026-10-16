import type { Race, QualificationCriterion } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Vista-area local contests (ZIPs 92081, 92083, 92084 and parts of 92056/92057/92058): Vista mayor and
 * council Districts 1 and 4, Vista Unified Trustee Area 3, San Marcos Unified Trustee Area E, Vista
 * Irrigation District Division 2 (short term), Vista Unified Measure N and Fallbrook Union Elementary
 * Measure K. All offices are nonpartisan; party labels below are context from public endorsements.
 * Ballot titles, designations, candidate statements, measure text, county counsel analyses and arguments:
 * official sample ballots (BT 24, 28, 31, 32, 172). Party endorsements: KPBS endorsement guide (Sept. 30, 2026).
 * Research current as of Oct 13, 2026.
 */

const KPBS_ENDORSEMENTS =
  'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian';
const KPBS_BONDS = 'https://www.kpbs.org/news/politics/2026/10/02/your-guide-to-all-san-diego-county-school-bond-measures';
const VOSD_NC_REPORT = 'https://voiceofsandiego.org/2026/05/20/north-county-report-election-season-musical-chairs/';
const SD_PORTAL = 'https://www.southtechhosting.com/SanDiegoCounty/CampaignDocsWebRetrieval/';
const SDDEMS_URL = 'https://www.sddemocrats.org/propositions--ballot-measures.html';
const SDGOP_URL = 'https://www.sandiegorepublicans.org/voter-guides/san-diego';

const CITY_MONEY =
  'No campaign finance totals verified as of Oct 13, 2026; Vista candidates file campaign statements with the Vista City Clerk.';
const COUNTY_MONEY =
  'No campaign finance totals verified as of Oct 13, 2026; filings are on the San Diego County Registrar of Voters campaign-disclosure portal.';

const CITY_LEGAL =
  'U.S. citizen, 18 or older, and a registered voter of the City of Vista; council candidates must also live in the district they would represent.';

const MAYOR_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Municipal policy and governance', detail: 'The mayor is one of five votes on the City Council, chairs its meetings, and sits on regional boards.' },
  { id: 'budget', label: 'Budget and finance', detail: 'The Council adopts the city budget, sets fees, and oversees the city manager who runs day-to-day operations.' },
  { id: 'housing', label: 'Housing, homelessness and land use', detail: 'The Council decides zoning, development approvals, and homelessness programs such as the city’s navigation center.' },
  { id: 'coalition', label: 'Citywide leadership and coalition-building', detail: 'Passing anything takes three votes, and the mayor represents all of Vista to the county, SANDAG and the state.' },
];

const COUNCIL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Municipal policy and governance', detail: 'The five-member Council passes city laws, oversees the city manager, and sits on regional boards.' },
  { id: 'budget', label: 'Budget and finance', detail: 'The Council adopts the city budget and decides spending on streets, parks, public safety and staff.' },
  { id: 'landuse', label: 'Housing and land use', detail: 'The Council decides zoning, development approvals, and local housing and homelessness policy.' },
  { id: 'constituent', label: 'District knowledge and constituent service', detail: 'Councilmembers field resident requests and represent neighborhood concerns in a specific district.' },
];

const SCHOOL_LEGAL =
  'U.S. citizen, 18 or older, registered voter living in the trustee area; not an employee of the district (Cal. Education Code § 35107).';

const SCHOOL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Board governance and oversight', detail: 'Trustees adopt policy, approve contracts, and hire and evaluate the superintendent as one vote on a five-member board.' },
  { id: 'budget', label: 'Budget and fiscal oversight', detail: 'The board adopts a budget in the hundreds of millions of dollars and must keep the district solvent while bargaining with staff.' },
  { id: 'instruction', label: 'Knowledge of teaching and student outcomes', detail: 'Trustees approve curriculum, programs, and graduation and discipline policies.' },
  { id: 'community', label: 'Parent, staff, and community engagement', detail: 'Trustees hear from families, teachers, and classified staff in public meetings and answer for district decisions.' },
];

const VID_CRITERIA: QualificationCriterion[] = [
  { id: 'water', label: 'Water supply and utility operations', detail: 'The board oversees imported and local water supply, pipelines, reservoirs and the aging Vista Flume.' },
  { id: 'rates', label: 'Rates and capital finance', detail: 'Directors set water rates and approve multi-year capital projects paid for by ratepayers.' },
  { id: 'governance', label: 'Board governance', detail: 'Directors vote on contracts, budgets and policy as one of five members and oversee the general manager.' },
  { id: 'community', label: 'Knowledge of the division and ratepayer outreach', detail: 'Each director represents one division and answers to its customers.' },
];

export const RACES_VISTA: Race[] = [
  // ---------------------------------------------------------------- Vista Mayor
  {
    id: 'vista-mayor',
    categoryId: 'city',
    title: 'Vista Mayor',
    tldrLabel: 'Vista Mayor',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'Vista’s mayor is elected citywide to a four-year term and is one of five votes on the City Council, which adopts the budget, sets land-use and housing rules, and directs the city manager. The mayor chairs Council meetings and is the city’s main voice on regional boards.',
      'The seat is open because Mayor John Franklin, a Republican, ran for county supervisor instead of a second term (Voice of San Diego). The Council has had a Democratic majority since 2022, with Democrats Corinna Contreras, Katie Melendez and Dan O’Donnell (Voice of San Diego; North Coast Current), so this race and the District 1 and 4 contests decide the Council’s balance on housing, homelessness, immigration-enforcement and surveillance questions.',
    ],
    introParagraphs: [
      'This is a single November contest; there was no June primary for city offices. Former two-term Councilmember Joe Green, who calls himself an independent, is backed by Reform California, the San Diego Lincoln Club, the Vista Fire Fighters Association and LiUNA Local 89. Kenneth Zuniga, a member of the city’s Homelessness Commission, is backed by the San Diego County Democratic Party, the Democratic Socialists of America San Diego and the Working Families Party (KPBS, Sept. 30, 2026).',
      'Two other people filed intention statements over the summer, but only Zuniga and Green qualified for the ballot. A League of Women Voters forum for this race and District 4 was scheduled for Sept. 30; the League’s page later marked it cancelled, so check whether a recording exists.',
    ],
    legalRequirements: CITY_LEGAL,
    qualificationCriteria: MAYOR_CRITERIA,
    candidates: [
      {
        id: 'kenneth-zuniga',
        name: 'Kenneth Zuniga',
        party: 'NP',
        role: 'Businessman/Homelessness Advocate',
        campaignUrl: 'https://www.zunigaforvista.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Zuniga serves on the city’s Homelessness Commission and works as a production photographer and graphic designer. He has not held elected office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Member of the City of Vista Homelessness Commission (North County Daily Star; Voice of San Diego); no elected office.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No public budget or finance role is documented; describes managing complex projects as a photographer and designer (candidate statement).' },
            { criterionId: 'housing', assessment: 'partial', evidence: 'Homelessness Commission member; says he has worked with homeless service providers and advocated at Council meetings (candidate statement).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Endorsed by the county Democratic Party, the Labor Council, the Building Trades and two Vista Unified trustees (campaign site); no record of passing policy.' },
          ],
        },
        bio: [
          'Zuniga is a Vista resident, San Diego State graduate and Eagle Scout who works as a production photographer and graphic designer. He serves on the city’s Homelessness Commission and says he has organized with groups defending immigrant families, opposed surveillance technology and pushed for safer pedestrian crossings (candidate statement).',
          'His platform calls for higher inclusionary-housing requirements, stronger renter protections, a ban on private-equity purchases of single-family homes, a publicly owned not-for-profit electric utility, measurable homelessness benchmarks, and keeping ICE out of city facilities without a warrant (campaign site).',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓✓ More housing, faster, with higher inclusionary requirements; ban private-equity purchases of single-family homes', comparison: 'Green calls for “practical housing solutions that fit our community” without specifics.' },
          { topic: 'Homelessness', position: '✓✓ Expand supportive, interim and sober housing; tie funding to placement results', comparison: 'Green cites his Council votes but has not published a homelessness plan.' },
          { topic: 'Cost of living/utilities', position: '✓ Proposes a publicly owned not-for-profit utility to lower SDG&E rates', comparison: 'Green has not proposed a utility change.' },
          { topic: 'Immigration enforcement', position: '✓✓ Keep ICE out of city facilities without a warrant; no sheriff cooperation on civil immigration enforcement', comparison: 'Green has not published a position.' },
          { topic: 'Public safety', position: '~ Community-based prevention, youth and reentry programs; no stated position on sheriff staffing', comparison: 'Green is endorsed by the firefighters and deputy sheriffs and stresses public-safety funding.' },
          { topic: 'Ideology', position: '✓ Democratic Party, DSA and Working Families Party–endorsed', comparison: 'Green is endorsed by Reform California and the Lincoln Club and calls himself independent.' },
        ],
        money: CITY_MONEY,
        endorsements:
          'San Diego County Democratic Party; Democratic Socialists of America San Diego; Working Families Party (KPBS, Sept. 30, 2026). His campaign site also lists the San Diego & Imperial Counties Labor Council, the Building & Construction Trades Council, SEIU 221, UAW Region 6, Sierra Club, Planned Parenthood Action Fund, Equality California, and Vista Unified trustees Martha Alvarado and Cipriano Vargas (checked Oct 13, 2026).',
        notes: [
          'His ballot designation (Businessman/Homelessness Advocate) differs slightly from the heading on his printed statement (Homelessness Advocate / Small Business Owner).',
        ],
      },
      {
        id: 'joe-green',
        name: 'Joe Green',
        party: 'NP',
        role: 'Small Business Owner',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Green served eight years on the Vista City Council (District 2, 2016–2024), including as deputy mayor in 2021. He is a mortgage loan officer and real estate broker.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Vista councilmember 2016–2024; appointed deputy mayor in 2021 (City of Vista; Voice of San Diego).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Voted on eight annual city budgets; also runs his own mortgage and real estate business (candidate statement).' },
            { criterionId: 'housing', assessment: 'met', evidence: 'Voted on zoning, development and homelessness items for eight years; real estate broker by profession.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Endorsed by firefighters, deputy sheriffs and LiUNA Local 89 as well as Reform California and the Lincoln Club; lost a 2018 run for mayor to Judy Ritter, 35% to 52% (Coast News).' },
          ],
        },
        bio: [
          'Green is a lifelong Vista resident, mortgage loan officer and real estate broker who represented District 2 on the City Council from 2016 to 2024 and served as deputy mayor in 2021. He did not seek a third council term in 2024.',
          'He left the Republican Party in 2018, saying partisan politics had no place in local government, and ran for mayor that year as an independent, losing to Judy Ritter (San Diego Reader; Coast News). In 2024 he endorsed Democratic Rep. Mike Levin. His campaign stresses public safety, roads and infrastructure, emergency preparedness, parks and local business.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓✓ Says he helped secure public-safety funding; endorsed by Vista firefighters and deputy sheriffs', comparison: 'Zuniga emphasizes community-based prevention programs.' },
          { topic: 'Infrastructure', position: '✓ Cites road, infrastructure and emergency-preparedness work on the Council', comparison: 'Zuniga also lists road repair, sidewalks and streetlights.' },
          { topic: 'Housing', position: '~ “Practical housing solutions that fit our community”; no specific plan published', comparison: 'Zuniga wants higher inclusionary requirements and renter protections.' },
          { topic: 'Budget', position: '✓ Says he supported local businesses “while protecting taxpayers”', comparison: 'Zuniga has not published a budget plan.' },
          { topic: 'Ideology', position: '~ Independent; endorsed by Reform California and the Lincoln Club and by LiUNA Local 89', comparison: 'Zuniga is endorsed by the Democratic Party and DSA.' },
        ],
        money: CITY_MONEY,
        endorsements:
          'Reform California; San Diego Lincoln Club (KPBS, Sept. 30, 2026); Vista Fire Fighters Association; Deputy Sheriffs’ Association of San Diego County; LiUNA Local 89 (candidate statement).',
        notes: [
          'His ballot designation is Small Business Owner; his printed statement lists Mortgage Loan Officer & Real Estate Broker.',
          'Party registration: the most recent source found (San Diego Reader, 2018) says he left the Republican Party; current registration not verified.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Zuniga', '●', 'Progressive Left voters back the DSA- and Working Families–endorsed candidate who wants inclusionary housing, renter protections, a public utility and limits on ICE cooperation.'],
      ['EL', 'Zuniga', '◐', 'Establishment Liberals follow the county Democratic Party and labor endorsements to Zuniga, though he has never held office and Green has eight years on the Council.', 'Establishment Liberals who prize a proven manager could back Green, an eight-year councilmember and former deputy mayor who left the GOP and endorsed Mike Levin, though he is the Reform California and Lincoln Club pick and Zuniga carries the Democratic endorsement.'],
      ['DM', 'Zuniga', '●', 'Democratic Mainstays follow the county Democratic Party, the Labor Council and the Building Trades, all behind Zuniga.'],
      ['OL', 'Zuniga', '●', 'Outsider Left voters like a first-time candidate from the homelessness commission who opposes surveillance technology and wants a publicly owned utility.'],
      ['SS', 'Green', '○', 'Stressed Sideliners may lean toward the familiar former councilmember who stresses safety and roads, though many will not follow the race.'],
      ['AR', 'Green', '◐', 'Ambivalent Right voters prefer an experienced, self-described independent who stresses public safety and taxpayers over a DSA-backed newcomer.'],
      ['PR', 'Green', '◐', 'Populist Right voters back the Reform California–endorsed candidate against a democratic socialist–backed rival, though Green left the GOP and is union-backed.'],
      ['CC', 'Green', '●', 'Committed Conservatives back the Lincoln Club– and Reform California–endorsed candidate who stresses public safety and business over expanded government programs.'],
      ['FF', 'Green', '●', 'Faith and Flag Conservatives prefer Green, backed by Reform California and the deputy sheriffs, over a candidate who would limit cooperation with immigration enforcement.'],
    ]),
    counterArguments: [
      'CC/FF (Green ●): But Green left the Republican Party, endorsed Democrat Mike Levin in 2024 and is backed by LiUNA, so he is not a down-the-line conservative.',
      'PL/OL/DM (Zuniga ●): But Zuniga has no elected or budget experience, and a mayor needs three votes on a closely divided Council to pass anything; Green has eight years there.',
    ],
    readingLinks: [
      { label: 'Voice of San Diego: North County Report (May 20, 2026)', url: VOSD_NC_REPORT, summary: 'Why the mayor’s seat and District 1 are open, and who filed.' },
      { label: 'KPBS: party and group endorsements (Sept. 30, 2026)', url: KPBS_ENDORSEMENTS, summary: 'Democratic, Republican, DSA, Working Families, Reform California and Lincoln Club picks.' },
      { label: 'Zuniga campaign platform', url: 'https://www.zunigaforvista.com/platform', summary: 'His housing, utility, homelessness and immigration proposals in his own words.' },
    ],
  },

  // ---------------------------------------------------------------- Vista Council D1
  {
    id: 'vista-council-d1',
    categoryId: 'city',
    title: 'Vista City Council, District 1',
    tldrLabel: 'Vista Council D1',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Vista City Council adopts the budget, sets zoning and development rules, and decides homelessness, public-safety and immigration-enforcement policy. District 1 covers central and northwest Vista neighborhoods, including Luz Duran Park and the Linda Rhoades Recreation Center.',
      'Democrats hold three of five seats. Incumbent Corinna Contreras is one of them; her main challenger, Vista Irrigation District director Frank Nunez, is endorsed by the county Republican Party and by Mayor John Franklin, so this seat can tip the Council’s majority.',
    ],
    introParagraphs: [
      'This is a single November contest; there was no June primary for city offices. Contreras first won in 2018 by 66 votes and was reelected in 2022 (North County Daily Star). She ran for Congress in the 48th District in the June 2 primary, where Jim Desmond and Marni von Wilpert advanced (East County Magazine), and then filed again for her council seat.',
      'The county Democratic Party and Working Families Party back Contreras; the county Republican Party, Reform California and the Lincoln Club back Nunez (KPBS, Sept. 30, 2026). Yolanda Kenniston Alvarez is on the ballot without a ballot designation.',
    ],
    legalRequirements: CITY_LEGAL,
    qualificationCriteria: COUNCIL_CRITERIA,
    candidates: [
      {
        id: 'yolanda-kenniston-alvarez',
        name: 'Yolanda Kenniston Alvarez',
        party: 'NP',
        role: 'No ballot designation',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Kenniston Alvarez is a longtime Vista resident and community volunteer. She has not held public office or served on a city board.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected office or city commission service is documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget or finance role is documented.' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'Statement supports balanced affordable housing; no land-use role is documented.' },
            { criterionId: 'constituent', assessment: 'partial', evidence: 'Vista resident for over 40 years; LULAC scholarship work and Head Start family liaison (candidate statement).' },
          ],
        },
        bio: [
          'Kenniston Alvarez describes herself as a fifth-generation Mexican-American who has lived in Vista for more than 40 years. Her printed statement lists her as Retired / Family Caregiver, though her ballot line carries no designation.',
          'She says she helped provide scholarships through the League of United Latin American Citizens, guided Vista High students through the Dream Act, and worked as a Head Start liaison connecting families to education resources. Her priorities are public safety, balanced affordable housing that protects neighborhood character, small business, seniors and people with disabilities.',
        ],
        scorecard: [
          { topic: 'Housing', position: '~ Supports more affordable housing for seniors and working families while protecting views and neighborhood character', comparison: 'Contreras focuses on district investment; Nunez on home ownership.' },
          { topic: 'Public safety', position: '✓ Safer streets, better lighting and infrastructure “while maintaining fiscal responsibility”', comparison: 'Nunez stresses first-responder pay; Contreras “holistic public safety.”' },
          { topic: 'Seniors/disability services', position: '✓✓ Central to her platform', comparison: 'Neither rival makes it a main theme.' },
          { topic: 'Budget', position: '? No specific budget plan', comparison: 'Nunez promises “back-to-basics” budgeting.' },
        ],
        money: CITY_MONEY,
        endorsements: 'None published as of Oct 13, 2026.',
      },
      {
        id: 'corinna-contreras',
        name: 'Corinna Contreras',
        party: 'NP',
        role: 'Councilmember/Policy Advocate',
        campaignUrl: 'https://www.contreras4vista.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Contreras has represented District 1 since December 2018 and was deputy mayor in 2022–2023. She works as a policy advocate for the Climate Action Campaign.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Councilmember since Dec. 2018, reelected 2022; deputy mayor 2022–2023 (City of Vista).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on eight city budgets; says she secured district street improvements and funding for a district community center (candidate statement).' },
            { criterionId: 'landuse', assessment: 'met', evidence: 'Nearly eight years of Council votes on zoning and development; led opposition to the private redevelopment of the Wave Waterpark (candidate statement).' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Lifelong Vista resident; started a resident petition process for stop signs and traffic calming (candidate statement).' },
          ],
        },
        bio: [
          'Contreras, 38, is a lifelong Vista resident first elected in 2018, when she became the city’s first Latina and first LGBTQ councilmember. She is a policy advocate for the Climate Action Campaign and sits on the board of the North County LGBTQ Resource Center (Times of San Diego).',
          'She says she led the Council fight against mass-surveillance technology and against a corporate takeover of the Wave Waterpark, and brought sidewalks, crosswalks, streetlights, park programs and a planned community center to her district. She proposed sanctuary-city measures that Mayor Franklin opposed (FOX 5).',
        ],
        recordVsChange:
          'Contreras has delivered visible district projects (sidewalks, lighting, park programming and a planned community center) and is part of the Council’s Democratic majority. The case for change is that she spent the spring running for Congress, and Nunez argues for a back-to-basics focus on potholes and costs rather than the immigration and surveillance fights she has led.',
        scorecard: [
          { topic: 'District infrastructure', position: '✓✓ Cites millions in street, sidewalk, crosswalk and lighting work and a new district park and community center', comparison: 'Nunez promises a back-to-basics focus on potholes and repaving.' },
          { topic: 'Surveillance/privacy', position: '✓✓ Says she led the Council against mass-surveillance technology', comparison: 'Nunez has not published a position.' },
          { topic: 'Immigration enforcement', position: '✓✓ Proposed sanctuary-city measures; pledges to “protect against ICE”', comparison: 'Nunez is endorsed by the Republican Party and Mayor Franklin, who opposed her proposals.' },
          { topic: 'Public safety', position: '✓ “Holistic public safety”; says she funds first responders and crime fell to historic lows', comparison: 'Nunez promises competitive pay and training for first responders.' },
          { topic: 'Climate', position: '✓✓ Climate Action Campaign policy advocate; local climate action', comparison: 'Neither rival makes climate a theme.' },
        ],
        money: CITY_MONEY,
        endorsements: 'San Diego County Democratic Party; Working Families Party (KPBS, Sept. 30, 2026).',
        notes: [
          'Her claim that she “reduced crime to historic lows” is from her candidate statement and has not been checked against sheriff data.',
        ],
      },
      {
        id: 'frank-nunez',
        name: 'Frank Nunez',
        party: 'NP',
        role: 'Non-Profit Director/Businessman',
        campaignUrl: 'https://www.frank4vista.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Nunez has sat on the Vista Irrigation District board since April 2025 and works in agricultural sales. He has not served on the City Council.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Vista Irrigation District director, Division 2, appointed April 21, 2025 (VID); no city office.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Votes on the water district budget and rates; says he voted against proposed water rate increases (candidate statement).' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'No zoning or planning role is documented.' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Lifelong Vista resident who raised three children in the city; founder of the nonprofit Future Filmmakers of America (candidate statement; VID).' },
          ],
        },
        bio: [
          'Nunez grew up in Vista, the son of farmworkers, and was the first in his family to graduate from college (Cal State Northridge, cinema and television arts). He built a career in agricultural sales connecting local producers with retailers and founded Future Filmmakers of America, a nonprofit for local students.',
          'The Vista Irrigation District board appointed him to its Division 2 seat in April 2025. He promises a back-to-basics approach: first-responder pay, potholes and repaving, parks, getting unhoused people indoors quickly, and support for home ownership.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓✓ Competitive pay, training and resources for first responders', comparison: 'Contreras describes a “holistic” approach and limits on surveillance and ICE cooperation.' },
          { topic: 'Streets/parks', position: '✓ Back-to-basics: potholes, repaving, sidewalks, shade and restrooms in parks', comparison: 'Contreras cites district projects already delivered.' },
          { topic: 'Cost of living', position: '✓ Says he voted against water rate increases on the VID board', comparison: 'Contreras has not taken a rate position here.' },
          { topic: 'Housing', position: '~ Supports new housing that helps families buy homes; no specific plan', comparison: 'Contreras emphasizes district investment and resource access.' },
          { topic: 'Ideology', position: '✓ Republican Party, Reform California and Lincoln Club–endorsed', comparison: 'Contreras is Democratic- and Working Families–endorsed.' },
        ],
        money: CITY_MONEY,
        endorsements:
          'Republican Party of San Diego County; Reform California; San Diego Lincoln Club (KPBS, Sept. 30, 2026). His statement lists Mayor John Franklin, Councilmember Jeff Fox, former councilmembers John Aguilera and Frank Lopez, Vista Unified board president Mike Markov, and VID directors Marty Miller, Patrick Sanchez and Jo MacKenzie.',
        notes: [
          'If he wins, his Vista Irrigation District seat, already on this ballot as a short-term race, would not be affected: he is not a candidate in that contest.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Contreras', '●', 'Progressive Left voters back the incumbent who led opposition to surveillance technology and proposed sanctuary-city protections.'],
      ['EL', 'Contreras', '●', 'Establishment Liberals value an experienced, Democratic-endorsed councilmember with a record of delivered district projects.'],
      ['DM', 'Contreras', '●', 'Democratic Mainstays follow the county Democratic Party to the incumbent who keeps the Council’s Democratic majority.'],
      ['OL', 'Contreras', '●', 'Outsider Left voters like her fights against a corporate Wave Waterpark deal and surveillance cameras.'],
      ['SS', 'Contreras', '○', 'Stressed Sideliners may credit visible sidewalks, streetlights and park programs in their district, though many will not follow the race.'],
      ['AR', 'Nunez', '◐', 'Ambivalent Right voters like a back-to-basics, lower-rates pitch from a water board director over a councilmember focused on immigration fights.', 'Ambivalent Right voters who weigh hands-on experience could keep Contreras, who has nearly eight years on the Council and a record of finished district projects, though that means backing a Democrat who led sanctuary-city proposals.'],
      ['PR', 'Nunez', '●', 'Populist Right voters back the Republican-endorsed son of local farmworkers who promises potholes, first-responder pay and lower bills.'],
      ['CC', 'Nunez', '●', 'Committed Conservatives back the Republican Party, Reform California and Lincoln Club pick, endorsed by Mayor Franklin.'],
      ['FF', 'Nunez', '●', 'Faith and Flag Conservatives prefer Nunez over an incumbent who proposed sanctuary-city measures.'],
    ]),
    counterArguments: [
      'PR/CC/FF (Nunez ●): But Nunez has been on the water board only since April 2025 and has no city land-use record, while Contreras has delivered measurable district projects.',
      'PL/EL/DM (Contreras ●): But Contreras spent the first half of 2026 running for Congress before seeking reelection, which some voters may read as divided attention.',
    ],
    readingLinks: [
      { label: 'Voice of San Diego: North County Report (May 20, 2026)', url: VOSD_NC_REPORT, summary: 'Contreras’s congressional run and who filed for District 1 at that point.' },
      { label: 'Times of San Diego: Contreras enters the CA-48 race (Dec. 2025)', url: 'https://timesofsandiego.com/politics/2025/12/05/vista-council-crowded-48th-congressional-district/', summary: 'Her background and council record.' },
      { label: 'KPBS: party and group endorsements (Sept. 30, 2026)', url: KPBS_ENDORSEMENTS, summary: 'Democratic and Republican picks in District 1.' },
    ],
  },

  // ---------------------------------------------------------------- Vista Council D4
  {
    id: 'vista-council-d4',
    categoryId: 'city',
    title: 'Vista City Council, District 4',
    tldrLabel: 'Vista Council D4',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Vista City Council adopts the budget, sets zoning and development rules, and decides homelessness, public-safety and transportation policy. District 4 covers southern Vista, including Shadowridge and the Melrose Drive corridor.',
      'Dan O’Donnell flipped the seat in 2022 by about 30 votes, which gave Vista its first Democratic Council majority since at least 1963 (Voice of San Diego). His challenger, Josh Davis, runs as an independent with no party endorsement, so the seat is a test of the Council majority without a party-backed opponent.',
    ],
    introParagraphs: [
      'This is a single November contest. O’Donnell is deputy mayor for 2026 (City of Vista). The county Democratic Party endorses him; neither the Republican Party nor Reform California endorsed in District 4 (KPBS, Sept. 30, 2026). Davis is a software product manager in public-safety technology running his first campaign.',
    ],
    legalRequirements: CITY_LEGAL,
    qualificationCriteria: COUNCIL_CRITERIA,
    candidates: [
      {
        id: 'dan-odonnell',
        name: "Dan O'Donnell",
        party: 'NP',
        role: 'Vista City Council Member Dist. 4',
        campaignUrl: 'https://www.danforvista.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'O’Donnell has represented District 4 since December 2022 and is the 2026 deputy mayor.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Councilmember since Dec. 2022; deputy mayor effective Jan. 1, 2026 (City of Vista).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on four city budgets; says he added sheriff’s deputies and firefighter positions and $250,000 for the Gloria McClellan Senior Center (candidate statement).' },
            { criterionId: 'landuse', assessment: 'met', evidence: 'Four years of Council votes on zoning and development; says he helped secure $5 million in state funding for the homeless navigation center (candidate statement).' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Says he held more town halls than any other councilmember; cites a traffic light at Melrose and Dawson and a crosswalk at Longhorn and Melrose (candidate statement).' },
          ],
        },
        bio: [
          'O’Donnell, 43, has lived in Vista about a decade with his wife and two young sons and works with small business owners across Southern California. He won the District 4 seat in 2022 by about 30 votes over Republican Armen Kurdian.',
          'On the Council he moved in June 2025 to remove most of the new bike-lane berms and bollards on Melrose Drive and Sycamore Avenue, citing fire-station access and the downhill grade; the motion passed 3-2 (NBC San Diego). He also cites sidewalks on Sunset, park upgrades, keeping Green Oak Ranch under local control, and state money for the navigation center.',
        ],
        recordVsChange:
          'O’Donnell can point to concrete district items (a new traffic light, sidewalks, a safer student crosswalk, practice fields) and a deputy-mayor role in the Council majority. The case for change is Davis’s criticism of spending on bike lanes that were then partly removed, and his argument for a voice independent of party politics.',
        scorecard: [
          { topic: 'Public safety', position: '✓✓ Says he added deputies and firefighters; endorsed by firefighters, deputy sheriffs and Sheriff Kelly Martinez', comparison: 'Davis also wants more sheriff, fire and EMT staffing.' },
          { topic: 'Streets/traffic', position: '✓ Cites a new signal at Melrose and Dawson and sidewalks on Sunset; moved to remove bike-lane berms in 2025', comparison: 'Davis criticizes the money spent on bike lanes that were later removed.' },
          { topic: 'Homelessness', position: '✓ Helped secure $5 million in state funding for the Homeless Navigation Center', comparison: 'Davis wants more funding for outreach and mental health.' },
          { topic: 'Cost of living', position: '✓ Says he opposed higher fees imposed by electric companies', comparison: 'Davis proposes deposit and down-payment help and Section 8 incentives.' },
          { topic: 'Ideology', position: '✓ Democratic Party and Labor Council–endorsed; also backed by the North County Association of Realtors', comparison: 'Davis has no party endorsement.' },
        ],
        money: CITY_MONEY,
        endorsements:
          'San Diego County Democratic Party (KPBS, Sept. 30, 2026); Vista Firefighters Association; Deputy Sheriffs’ Association; Sheriff Kelly Martinez; North County Association of Realtors; San Diego & Imperial Counties Labor Council (candidate statement).',
        notes: [
          'The bike-lane barrier removal was criticized by the San Diego County Bicycle Coalition; that is a policy disagreement, not a red flag.',
        ],
      },
      {
        id: 'josh-davis',
        name: 'Josh Davis',
        party: 'NP',
        role: 'Public Safety Technologist',
        campaignUrl: 'https://joshdavis4vistonians.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Davis is a software product manager in public-safety technology and a Vista small business owner. He has not held office or served on a city board.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected office or city commission service is documented; says he has worked with municipal leaders as a vendor (candidate statement).' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No public budget role is documented.' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'Has published housing proposals; no land-use role is documented.' },
            { criterionId: 'constituent', assessment: 'partial', evidence: 'Vista resident since 2019 and owner of a Vista-based business (candidate statement).' },
          ],
        },
        bio: [
          'Davis, 37, moved to Vista with his wife in 2019 and runs a Vista-based business. He has five years in public-safety technology as a software product manager (candidate statement).',
          'He runs as an independent “free from the influence of political parties.” He wants more sheriff, fire and EMT staffing, opposes AI-driven mass video surveillance, and proposes housing near the Sprinter line, an expanded inclusionary-housing ordinance, deposit and down-payment help, and easier permits for childcare businesses (campaign site).',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓ More sheriff, fire and EMT staffing', comparison: 'O’Donnell says he has already added deputies and firefighters.' },
          { topic: 'Surveillance/privacy', position: '✓✓ Opposes AI-driven mass video surveillance', comparison: 'O’Donnell has not published a position.' },
          { topic: 'Housing', position: '✓ Housing near the Sprinter, larger inclusionary ordinance, deposit and down-payment aid', comparison: 'O’Donnell’s statement does not detail a housing plan.' },
          { topic: 'Fiscal accountability', position: '✓ Criticizes $1.7 million-plus spent on a bike-lane project later removed', comparison: 'O’Donnell made the motion to remove the barriers, citing safety.' },
          { topic: 'Ideology', position: '~ Independent; no party or group endorsements published', comparison: 'O’Donnell is Democratic Party–endorsed.' },
        ],
        money: CITY_MONEY,
        endorsements: 'None published as of Oct 13, 2026.',
        notes: [
          'His ballot designation is Public Safety Technologist; his printed statement lists Software Product Manager.',
          'The $1.7 million bike-lane figure is his; NBC San Diego reported about $1.5 million to install the berms and bollards and about $205,000 to remove those in District 4.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', "O'Donnell", '◐', 'Progressive Left voters back the Democratic, labor-endorsed incumbent, though his removal of protected bike-lane barriers and Davis’s anti-surveillance stance give them pause.'],
      ['EL', "O'Donnell", '●', 'Establishment Liberals value the Democratic-endorsed deputy mayor’s record of concrete district projects and broad endorsements.'],
      ['DM', "O'Donnell", '●', 'Democratic Mainstays follow the county party and the Labor Council to the incumbent who keeps the Council’s Democratic majority.'],
      ['OL', "O'Donnell", '○', 'Outsider Left voters lean to the labor-backed incumbent, but weakly: Davis’s opposition to mass surveillance and party politics also appeals.'],
      ['SS', "O'Donnell", '○', 'Stressed Sideliners may credit the incumbent’s visible traffic and sidewalk fixes, though many will not follow the race.'],
      ['AR', "O'Donnell", '◐', 'Ambivalent Right voters can accept a pragmatic incumbent endorsed by the sheriff and realtors who reversed an unpopular bike-lane design.'],
      ['PR', 'Davis', '◐', 'Populist Right voters like an outsider who criticizes wasted bike-lane spending and rejects party influence, though he has no Republican endorsement.', 'Populist Right voters who want someone who has already delivered could choose O’Donnell, a four-year councilmember backed by the sheriff and deputies who removed the bike-lane barriers, though he is the Democratic Party’s pick.'],
      ['CC', 'Davis', '○', 'Committed Conservatives lean slightly to the non-Democrat who stresses fiscal accountability and more sheriff staffing, with no Republican in the race.', 'Committed Conservatives focused on competence could back O’Donnell, who has four years on the Council, is endorsed by Sheriff Martinez and the realtors, and moved to remove the bike-lane barriers, though it means re-electing a Democrat.'],
      ['FF', 'Davis', '○', 'Faith and Flag Conservatives lean weakly to the independent over the Democratic incumbent, with no Republican on the ballot.', 'Faith and Flag Conservatives who value a law-enforcement-backed record could choose O’Donnell, endorsed by the deputy sheriffs and Sheriff Martinez, though he is a Democrat and part of the Council’s Democratic majority.'],
    ]),
    counterArguments: [
      'PR/CC/FF (Davis ◐/○): But Davis has no government experience, and his housing plan (a larger inclusionary ordinance and Section 8 incentives) is to the left of what conservatives usually back.',
      'EL/DM (O’Donnell ●): But the bike-lane project and its partial removal cost the city money on his watch, and he won by about 30 votes last time, so the district is closely divided.',
    ],
    readingLinks: [
      { label: 'NBC San Diego: Vista removing bike lane barriers (2025)', url: 'https://www.nbcsandiego.com/news/local/vista-removing-bike-lane-barriers/3864149/', summary: 'The 3-2 vote on O’Donnell’s motion and the costs.' },
      { label: 'League of Women Voters North County: Vista forum page', url: 'https://lwvncsd.org/content.aspx?page_id=5&club_id=730504&item_id=139779', summary: 'Sept. 30 forum with Green, Zuniga, O’Donnell and Davis; page later marked cancelled.' },
      { label: 'Davis campaign site', url: 'https://joshdavis4vistonians.com/', summary: 'His platform in his own words.' },
    ],
  },

  // ---------------------------------------------------------------- VUSD Trustee Area 3
  {
    id: 'vista-usd-trustee-area-3',
    categoryId: 'school',
    title: 'Vista Unified School District, Trustee Area 3',
    tldrLabel: 'Vista Unified, Area 3',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Vista Unified runs schools for about 20,300 students in Vista and parts of Oceanside and nearby unincorporated areas. The five-member board adopts the budget, sets policy, approves curriculum and hires the superintendent; enrollment has fallen from more than 25,000 in 2015, and two schools closed in 2023 (KPBS).',
      'Area 3 covers western Vista and part of Oceanside. Incumbent Martha Alvarado is backed by the county Democratic Party and labor; Jon Moffat is backed by the county Republican Party. The board will also manage Measure N’s $543 million if it passes.',
    ],
    introParagraphs: [
      'This is a single November contest; there was no June primary. Alvarado was first elected in 2018 and is board clerk (district board page). Moffat is a first-time candidate.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'martha-alvarado',
        name: 'Martha Alvarado',
        party: 'NP',
        role: 'Teacher/Board Member',
        campaignUrl: 'https://marthaalvarado.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Alvarado has served on the Vista Unified board since 2018 and is board clerk. She is a Marine Corps veteran and a classroom teacher of about 26 years.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Area 3 trustee since 2018, two terms; board clerk (district board page).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on eight district budgets; says the board balanced the budget without layoffs (candidate statement).' },
            { criterionId: 'instruction', assessment: 'met', evidence: 'Bilingual credential (1999); about 26 years as an elementary teacher, currently in the classroom (district page; candidate statement). Her school is not named.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Says she helped open 12 community schools with wraparound services and expand dual enrollment with CSU San Marcos (candidate statement).' },
          ],
        },
        bio: [
          'Alvarado, 53, is a Marine Corps veteran who completed Palomar College on active duty, graduated from CSU San Marcos in 1998 as the first in her family to earn a degree, and has taught elementary school for about 26 years. She was elected to the board in 2018 and lives in Peacock Hills (district page).',
          'She cites more counselors and social workers, 12 community schools with wraparound services, a building-trades pre-apprenticeship, dual enrollment with CSU San Marcos, and rising test scores and attendance as board accomplishments; those outcome claims are her own.',
        ],
        recordVsChange:
          'Alvarado brings eight years on the board and continuity as the district handles declining enrollment and, if it passes, a large bond. The case for change is that a board that closed two schools and is asking for $543 million more could use a new voice on spending and priorities.',
        scorecard: [
          { topic: 'Student supports', position: '✓✓ Community schools with wraparound services; more counselors and social workers', comparison: 'Moffat emphasizes safe schools, parent involvement and digital citizenship.' },
          { topic: 'Career pathways', position: '✓✓ Dual enrollment with CSUSM, trades pre-apprenticeship, fire-department internships', comparison: 'Moffat has not published a career-pathways plan.' },
          { topic: 'Budget', position: '✓ Says the board balanced the budget without layoffs', comparison: 'Moffat has not published a budget position.' },
          { topic: 'Immigration enforcement policy', position: '✓ Seconded and voted for the Jan. 15, 2026 revision of the board’s policy on responding to immigration enforcement (iVoterGuide)', comparison: 'Moffat’s position is not published.' },
          { topic: 'Ideology', position: '✓ Democratic Party, Labor Council and Rep. Mike Levin–endorsed', comparison: 'Moffat is Republican Party–endorsed.' },
        ],
        money: COUNTY_MONEY,
        endorsements:
          'San Diego County Democratic Party (KPBS, Sept. 30, 2026); San Diego & Imperial Counties Labor Council; Rep. Mike Levin; State Superintendent Tony Thurmond; Democratic Club of Vista (as listed by iVoterGuide, Oct 2026).',
        notes: [
          'iVoterGuide, a project of AFA Action, lists her votes on a 2024 land-acknowledgment resolution and a nondiscrimination policy; it is a faith-oriented, partisan-leaning source.',
        ],
      },
      {
        id: 'jon-moffat',
        name: 'Jon Moffat',
        party: 'NP',
        role: 'Small Business Owner',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Moffat runs a digital-literacy consulting business and has worked in youth programs; he was a student trustee at MiraCosta College. He has not served on a K-12 board.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Former MiraCosta College student trustee and student-government president (candidate statement); no elected K-12 board service.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Says he secured grants and managed operations and staff as a facility manager at New Haven Youth and Family Services (candidate statement).' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'Created a cyber-education program at Vista Community Clinic that he says reached 35,000 students; founded Cyber Education Consulting in 2012 (candidate statement). No classroom teaching credential documented.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Says he has more than 20 years in community engagement, including as a youth violence prevention coordinator (candidate statement).' },
          ],
        },
        bio: [
          'Moffat is a North County resident with a liberal studies degree from CSU San Marcos and a past as MiraCosta College student-government president and student trustee. He created the cyber-education program at Vista Community Clinic, worked as a youth violence prevention coordinator, and managed a residential facility at New Haven Youth and Family Services (candidate statement).',
          'Since 2012 he has run Cyber Education Consulting, teaching digital literacy and online safety. He says his priorities are student growth, parent involvement, digital citizenship and safe schools. Independent coverage of his campaign was not found.',
        ],
        scorecard: [
          { topic: 'Campus safety', position: '✓ Lists safe schools and online safety as priorities', comparison: 'Alvarado cites more counselors and social workers.' },
          { topic: 'Parent involvement', position: '✓ Lists parent involvement as a priority', comparison: 'Alvarado emphasizes collaboration among parents, staff and administrators.' },
          { topic: 'Budget', position: '? No published position', comparison: 'Alvarado says the board balanced the budget without layoffs.' },
          { topic: 'Curriculum', position: '? No published position', comparison: 'Alvarado backs dual-language and career pathways.' },
          { topic: 'Ideology', position: '✓ Republican Party–endorsed', comparison: 'Alvarado is Democratic Party–endorsed.' },
        ],
        money: COUNTY_MONEY,
        endorsements: 'Republican Party of San Diego County (KPBS, Sept. 30, 2026).',
        notes: [
          'His ballot designation is Small Business Owner; his printed statement adds “/Parent.”',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Alvarado', '●', 'Progressive Left voters back the teacher-trustee who expanded community schools, counselors and dual-language programs.'],
      ['EL', 'Alvarado', '●', 'Establishment Liberals value an experienced, Democratic- and labor-endorsed trustee with classroom and board experience.'],
      ['DM', 'Alvarado', '●', 'Democratic Mainstays follow the county party and teachers’ allies to the incumbent.'],
      ['OL', 'Alvarado', '◐', 'Outsider Left voters like her equity agenda, though she is the establishment incumbent.'],
      ['SS', 'Alvarado', '○', 'Stressed Sideliners may lean to the veteran teacher they recognize, though many will skip the race.'],
      ['AR', 'Moffat', '○', 'Ambivalent Right voters lean slightly to a challenger who stresses safety and parent involvement on a board asking for a large bond.', 'Ambivalent Right voters who value experience could keep Alvarado, a Marine veteran with eight years on the board and decades in the classroom, though it means returning the Democratic-endorsed incumbent.'],
      ['PR', 'Moffat', '◐', 'Populist Right voters back the Republican-endorsed newcomer who stresses parent involvement over the labor-backed incumbent.', 'Populist Right voters who weigh service could note Alvarado is a Marine Corps veteran with eight years on the board, though she voted for the district’s immigration-enforcement response policy and is backed by Democrats and unions.'],
      ['CC', 'Moffat', '●', 'Committed Conservatives follow the Republican Party endorsement to Moffat over a Democratic-endorsed incumbent.'],
      ['FF', 'Moffat', '●', 'Faith and Flag Conservatives back the Republican-endorsed candidate who stresses parent involvement and safe schools.'],
    ]),
    counterArguments: [
      'CC/FF (Moffat ●): But Moffat has published almost no policy detail beyond his priorities, so this pick rests on the party endorsement.',
      'PL/EL/DM (Alvarado ●): But her test-score and attendance claims come from her own statement, and the district’s enrollment decline and school closures happened on her watch.',
    ],
    readingLinks: [
      { label: 'KPBS: party endorsements (Sept. 30, 2026)', url: KPBS_ENDORSEMENTS, summary: 'Democratic and Republican picks for Area 3.' },
      { label: 'Vista Unified: governing board elections', url: 'https://www.vistausd.org/board-of-education/governing-board-elections', summary: 'Trustee areas and which seats are up in 2026.' },
    ],
  },

  // ---------------------------------------------------------------- SMUSD Area E
  {
    id: 'san-marcos-usd-area-e',
    categoryId: 'school',
    title: 'San Marcos Unified School District, Trustee Area E',
    tldrLabel: 'San Marcos Unified, Area E',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'San Marcos Unified runs schools in San Marcos and parts of south Vista and nearby unincorporated areas. The five-member board adopts the budget, approves curriculum and policy, and hires the superintendent.',
      'Area E is open: neither candidate is the incumbent. Both candidates are parents without board experience; the county Republican Party backs Derrick Davis and the county Democratic Party backs Christine Baker.',
    ],
    introParagraphs: [
      'This is a single November contest; there was no June primary. Neither candidate has drawn independent news coverage found as of Oct 13, 2026; their printed statements and party endorsements (KPBS, Sept. 30, 2026) are the main public record.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'derrick-davis',
        name: 'Derrick Davis',
        party: 'NP',
        role: 'Parent/Security Executive',
        campaignUrl: 'https://www.derrickdavis.org/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Davis is a security-industry executive with a finance degree and four children, two still in district schools. He has not served on a school board.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected-board service is documented.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Finance degree and about ten years in senior leadership at a school-security company (candidate statement).' },
            { criterionId: 'instruction', assessment: 'unknown', evidence: 'No teaching role; says his wife is a special education teacher (candidate statement).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Parent of two current SMUSD students (candidate statement).' },
          ],
        },
        bio: [
          'Davis is a father of four, two still attending San Marcos Unified, whose wife is a special education teacher. For about ten years he has held a senior leadership role at a company that sells security systems to school campuses in California (candidate statement).',
          'He wants to modernize campus security with fencing, cameras, access systems and school resource officers, and promises long-term financially responsible decisions. Because his employer sells campus security systems, voters may want to ask how he would handle district contracts in that field.',
        ],
        scorecard: [
          { topic: 'Campus safety', position: '✓✓ Fencing, cameras, access control and school resource officers', comparison: 'Baker lists safety and emergency preparedness without specifics.' },
          { topic: 'Budget', position: '✓ Finance background; promises financially responsible long-term decisions', comparison: 'Baker stresses data and transparency.' },
          { topic: 'Academics', position: '✓ “Common-sense leadership” focused on academic excellence', comparison: 'Baker also lists academic excellence and student mental health.' },
          { topic: 'Ideology', position: '✓ Republican Party and Reform California–endorsed', comparison: 'Baker is Democratic Party–endorsed.' },
        ],
        money: COUNTY_MONEY,
        endorsements: 'Republican Party of San Diego County; Reform California (KPBS, Sept. 30, 2026).',
        notes: [
          'Potential conflict to watch: his company provides security systems to school campuses (his statement). No contract between his employer and SMUSD was found; this is not a red flag on the current record.',
        ],
      },
      {
        id: 'christine-baker',
        name: 'Christine Baker',
        party: 'NP',
        role: 'Parent/Certified Appraiser',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Baker is a self-employed real estate appraiser, parent and community volunteer. She has not served on a school board.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected-board service is documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'Self-employed real estate appraiser (candidate statement); no budget-oversight role documented.' },
            { criterionId: 'instruction', assessment: 'unknown', evidence: 'No teaching role documented.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Parent and community volunteer (candidate statement); specific roles not published.' },
          ],
        },
        bio: [
          'Baker is a parent, community volunteer and self-employed real estate appraiser. Her priorities are academic excellence, school safety, student well-being and mental health, support for teachers and staff, and emergency preparedness (candidate statement).',
          'She says she would use data and listen to parents, students and staff, with an emphasis on transparency and accountability.',
        ],
        scorecard: [
          { topic: 'Student well-being', position: '✓✓ Lists mental health and well-being among top priorities', comparison: 'Davis focuses on physical campus security.' },
          { topic: 'Teachers & staff', position: '✓ Pledges support for teachers and staff and a voice for educators', comparison: 'Davis notes his wife is a special education teacher.' },
          { topic: 'Campus safety', position: '✓ Safe schools and emergency preparedness; no specific measures', comparison: 'Davis wants fencing, cameras and resource officers.' },
          { topic: 'Ideology', position: '✓ Democratic Party–endorsed', comparison: 'Davis is Republican- and Reform California–endorsed.' },
        ],
        money: COUNTY_MONEY,
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026).',
        notes: [
          'Her ballot designation is Parent/Certified Appraiser; her printed statement lists Real Estate Appraiser/Self Employed.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Baker', '◐', 'Progressive Left voters prefer the Democratic-endorsed candidate who emphasizes student mental health and staff voice over a resource-officer-focused rival.'],
      ['EL', 'Baker', '◐', 'Establishment Liberals follow the county Democratic Party endorsement, accepting a thin public record.'],
      ['DM', 'Baker', '◐', 'Democratic Mainstays back the Democratic Party’s pick.'],
      ['OL', 'Baker', '○', 'Outsider Left voters lean to Baker over a candidate calling for school resource officers, but weakly given how little she has published.'],
      ['SS', '—', '—', 'Stressed Sideliners have little to separate two first-time parent candidates with short statements.'],
      ['AR', 'Davis', '○', 'Ambivalent Right voters may like a finance-trained executive promising fiscal responsibility, though weakly.'],
      ['PR', 'Davis', '◐', 'Populist Right voters back the Republican- and Reform California–endorsed candidate who wants hardened campuses and resource officers.'],
      ['CC', 'Davis', '●', 'Committed Conservatives back the Republican-endorsed candidate who stresses fiscal responsibility and school security.'],
      ['FF', 'Davis', '◐', 'Faith and Flag Conservatives follow the Republican and Reform California endorsements to Davis.'],
    ]),
    counterArguments: [
      'CC (Davis ●): But his employer sells campus security systems, so his push for more security hardware would need careful conflict-of-interest handling on the board.',
      'PL/EL/DM (Baker ◐): But Baker has published only general priorities and no record of school or board work, so this pick rests mainly on the party endorsement.',
    ],
    readingLinks: [
      { label: 'KPBS: party endorsements (Sept. 30, 2026)', url: KPBS_ENDORSEMENTS, summary: 'Democratic, Republican and Reform California picks for Area E.' },
      { label: 'Derrick Davis campaign site', url: 'https://www.derrickdavis.org/', summary: 'His platform in his own words.' },
    ],
  },

  // ---------------------------------------------------------------- VID Division 2
  {
    id: 'vista-irrigation-div-2',
    categoryId: 'district',
    title: 'Vista Irrigation District, Division 2 (short term)',
    tldrLabel: 'Vista Irrigation Div. 2 (short term)',
    seatContext: 'Open seat (short term)',
    kind: 'candidates',
    stakesParagraphs: [
      'The Vista Irrigation District supplies water to Vista and parts of San Marcos, Escondido, Oceanside and unincorporated areas. Its five-member board sets water rates, approves pipeline and reservoir projects such as replacing the century-old Vista Flume, and oversees the general manager.',
      'Division 2 (north of West Vista Way and west of North Santa Fe Avenue) is on the ballot for a short term because director Byron Olson, elected in 2024, resigned. Appointee Frank Nunez is running for City Council instead, so the seat is open. Rates are the live issue: the district held a water rate study with proposed increases in 2025.',
    ],
    introParagraphs: [
      'This is a single November contest for the remainder of the term. Richard L. Vásquez, who held the seat for about 24 years before retiring in December 2024, wants it back; retired contractor Roland Allen and construction office manager Elida Garcia are first-time candidates. No party or group endorsements were found as of Oct 13, 2026. Garcia did not file a ballot statement.',
    ],
    legalRequirements: 'Registered voter living in Division 2 of the Vista Irrigation District; no other qualifications (VID).',
    qualificationCriteria: VID_CRITERIA,
    candidates: [
      {
        id: 'roland-allen',
        name: 'Roland Allen',
        party: 'NP',
        role: 'Retired Businessman',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Allen is a retired general contractor and small business owner who serves as vice president of the Vista Historical Society. He has not served on a water board.',
          criteria: [
            { criterionId: 'water', assessment: 'unknown', evidence: 'No water-utility role is documented.' },
            { criterionId: 'rates', assessment: 'partial', evidence: 'Retired general contractor and small business owner; cites budgeting and long-term planning experience (candidate statement).' },
            { criterionId: 'governance', assessment: 'partial', evidence: 'Vice President of the Vista Historical Society; past board member of the Vista Optimist Club and the Antique Gas & Steam Engine Museum (candidate statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Lifelong Vista resident with family roots in the city since 1958; lives in Division 2 (candidate statement).' },
          ],
        },
        bio: [
          'Allen, 58, is a lifelong Vista resident and retired general contractor and small business owner. He is vice president of the Vista Historical Society and has served on the boards of the Vista Optimist Club and the Antique Gas & Steam Engine Museum (candidate statement).',
          'He pledges to protect water resources, keep service reliable and rates affordable, and plan responsibly.',
        ],
        scorecard: [
          { topic: 'Rates', position: '✓ Keep rates affordable', comparison: 'Vásquez also pledges to keep increases as low as possible.' },
          { topic: 'Infrastructure', position: '✓ Construction background; “planning responsibly for the future”', comparison: 'Vásquez voted on the district’s current capital projects.' },
          { topic: 'Experience', position: '~ Nonprofit boards; no water board service', comparison: 'Vásquez served about 24 years on the VID board.' },
        ],
        money: COUNTY_MONEY,
        endorsements: 'None published as of Oct 13, 2026.',
        notes: ['His ballot designation is Retired Businessman; his printed statement lists Retired General Contractor.'],
      },
      {
        id: 'elida-garcia',
        name: 'Elida Garcia',
        party: 'NP',
        role: 'Construction Office Manager',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Garcia is listed as a construction office manager. She filed no ballot statement, and no other public record of her background was found.',
          criteria: [
            { criterionId: 'water', assessment: 'unknown', evidence: 'No water-utility role is documented.' },
            { criterionId: 'rates', assessment: 'unknown', evidence: 'No finance role is documented.' },
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board service is documented.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'No public record found beyond the ballot designation.' },
          ],
        },
        bio: ['Garcia’s ballot designation is Construction Office Manager. She did not submit a candidate statement, and no campaign site or news coverage was found as of Oct 13, 2026.'],
        scorecard: [
          { topic: 'Rates', position: '? No published position', comparison: 'Allen and Vásquez both pledge to hold down rates.' },
          { topic: 'Experience', position: '? Not published', comparison: 'Vásquez served about 24 years on the board.' },
        ],
        money: COUNTY_MONEY,
        endorsements: 'None published as of Oct 13, 2026.',
      },
      {
        id: 'richard-vasquez',
        name: 'Richard L. Vásquez',
        party: 'NP',
        role: 'Retired Engineering Designer',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Vásquez represented Division 2 on the VID board for about 24 years (1992–2000 and 2008–2024) and led the board four times. He retired from the board in December 2024.',
          criteria: [
            { criterionId: 'water', assessment: 'met', evidence: 'During his tenure the district replaced or rehabilitated reservoirs and pump stations and more than 30 miles of pipeline, and began planning to replace the Vista Flume (VID, Nov. 2024).' },
            { criterionId: 'rates', assessment: 'met', evidence: 'Chaired the board’s fiscal policy committee (VID, Nov. 2024).' },
            { criterionId: 'governance', assessment: 'met', evidence: 'VID director for about 24 years; Bueno Colorado Municipal Water District board 1986–1992; served on ACWA Region 10’s board (VID).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Represented Division 2 for more than two decades; chaired the public affairs committee (VID).' },
          ],
        },
        bio: [
          'Vásquez is a retired engineering designer who served on the Vista Irrigation District board from 1992 to 2000 and again from December 2008 until he retired in December 2024, and earlier on the Bueno Colorado Municipal Water District board. He chaired the board’s public affairs, fiscal policy and water sustainability committees (VID).',
          'He says some current board members asked him to run, and he wants to see through the large projects he voted for while keeping rate increases as low as possible (candidate statement).',
        ],
        scorecard: [
          { topic: 'Rates', position: '✓ Keep increases as low as possible given inflation', comparison: 'Allen also pledges affordable rates.' },
          { topic: 'Capital projects', position: '✓✓ Wants to finish projects he voted for, such as Flume replacement planning', comparison: 'Allen and Garcia have no record on them.' },
          { topic: 'Experience', position: '✓✓ About 24 years on the VID board', comparison: 'Neither rival has served on a water board.' },
        ],
        money: COUNTY_MONEY,
        endorsements: 'None published as of Oct 13, 2026; his statement says some sitting directors encouraged him to run.',
        notes: [
          'He chose not to seek reelection in 2024 and is now running for the remaining term. The candidate list spells his name Vasquez; the accent follows the district’s own spelling.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Vásquez', '○', 'Progressive Left voters have no ideological signal here and may lean to the candidate who knows the district’s infrastructure and rate history.'],
      ['EL', 'Vásquez', '●', 'Establishment Liberals value the 24-year director who knows the district’s capital plan and governance.'],
      ['DM', 'Vásquez', '◐', 'Democratic Mainstays lean to the experienced, familiar director in a race with no party endorsements.'],
      ['OL', 'Allen', '○', 'Outsider Left voters may prefer a newcomer over a former director recruited by sitting board members.', 'Outsider Left voters who want the seat in capable hands could choose Vásquez, who served about 24 years and chaired the fiscal policy committee, though he is the candidate sitting directors encouraged to run.'],
      ['SS', 'Vásquez', '○', 'Stressed Sideliners worried about water bills may trust the familiar former director who promises to hold down rates.'],
      ['AR', 'Vásquez', '◐', 'Ambivalent Right voters like a steady, experienced hand on rates and pipelines.'],
      ['PR', 'Allen', '○', 'Populist Right voters may lean to a lifelong-local contractor over an insider returning to the board.', 'Populist Right voters who mostly care about holding down water bills could back Vásquez, who knows the rate structure after 24 years on the board, though that means returning a longtime insider.'],
      ['CC', 'Vásquez', '◐', 'Committed Conservatives value the experienced director’s focus on finishing capital projects and limiting rate increases.'],
      ['FF', 'Vásquez', '○', 'Faith and Flag Conservatives have little ideological signal and lean to the long-serving local director.'],
    ]),
    counterArguments: [
      'EL/AR/CC (Vásquez ●/◐): But Vásquez retired from this seat less than two years ago, and a short-term seat may be a chance to add a new voice to a board that has been raising rates.',
      'OL/PR (Allen ○): But Allen has no water-board experience, and the district is in the middle of large pipeline and Flume projects.',
    ],
    readingLinks: [
      { label: 'VID: Richard L. Vásquez retirement (Nov. 2024)', url: 'https://vistaid.specialdistrict.org/vista-irrigation-district-honors-retiring-board-member-richard-l-vasquez-november-21-2024', summary: 'His tenure, committees and projects.' },
      { label: 'VID: board appoints Frank Nunez to Division 2 (2025)', url: 'https://www.vidwater.org/vista-irrigation-district-board-appoints-frank-nunez-to-fill-division-2-vacancy-may-1-2025', summary: 'Why the seat is on the ballot as a short term.' },
    ],
  },

  // ---------------------------------------------------------------- VUSD Measure N
  {
    id: 'vista-usd-measure-n',
    categoryId: 'local-measures',
    title: 'Vista Unified Measure N — $543M school bond',
    tldrLabel: 'Vista Unified Measure N — School bond',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure N would let Vista Unified borrow up to $543 million for school repairs and upgrades, repaid by property owners in the district through 2063. The district says the rate stays where it is now; opponents say that means an expiring tax is extended for 35 more years.',
      'The district points to more than 400 portable classrooms over 25 years old, 380 roof leaks last year, and failing pipes; critics note that voters approved $247 million under Measure LL in 2018 for similar purposes, and enrollment has fallen by about a fifth since 2015 (KPBS).',
    ],
    introParagraphs: [
      'The school board voted 5-0 on April 23, 2026 to place the bond on the ballot (district page). It needs 55% to pass. The county Democratic Party, the San Diego County Taxpayers Association and the Building Trades support it; the county Republican Party and Reform California oppose it (KPBS).',
    ],
    measure: {
      explainerUrl: 'https://www.kpbs.org/news/politics/2026/10/02/your-guide-to-all-san-diego-county-school-bond-measures',
      question:
        'Without increasing current tax rates, to repair and upgrade aging classrooms, science labs, school facilities, and instructional technology to support college/career readiness in math, science, technology, engineering, arts, and skilled trades and fix deteriorating roofs, plumbing, sewer, and electrical systems shall Vista Unified School District’s measure be adopted authorizing $543,000,000 in bonds at legal rates, levying $58 per $100,000 assessed value ($31,000,000 annually) while bonds are outstanding, with citizen oversight, independent audits, and all money locally-controlled?',
      yesMeans: 'Authorizes $543 million in Vista Unified bonds for school repairs and upgrades, repaid by property owners at about $58 per $100,000 of assessed value through 2062–63.',
      noMeans: 'Blocks the new bonds; owners keep paying for earlier bonds until they are paid off, and repairs would rely on other district funds and wait for later projects.',
      funding: {
        asOf: 'Oct. 13, 2026',
        note: 'No fundraising totals for either side appeared in news coverage reviewed. The Yes campaign site is BetterSaferVistaUSDSchools.org; no organized No committee was found. The county’s campaign-disclosure portal can only be searched through a form, which we did not use, so check it for current totals.',
        sources: [
          { label: 'KPBS: San Diego County school bond measures guide (Oct. 2, 2026)', url: KPBS_BONDS },
          { label: 'San Diego County Registrar of Voters: campaign finance public portal', url: SD_PORTAL },
        ],
      },
      positions: [
        { org: 'San Diego County Democratic Party', kind: 'party', position: 'Yes', url: SDDEMS_URL },
        { org: 'Republican Party of San Diego County', kind: 'party', position: 'No', url: SDGOP_URL },
      ],
      measureType: 'School facilities bond (general obligation; placed by school board)',
      voteThreshold: '55%',
      fiscalImpact:
        'County counsel: up to $543 million in bonds; the district estimates an average and highest rate of $58 per $100,000 of assessed value, collected through fiscal 2062–63, and about $1.15 billion in total debt service ($1,154,254,750). The district says bonds will be sold as an extension so the rate is not projected to rise above the current rate.',
      supporters:
        'Ballot argument signers: Vista Unified Council of PTAs president Michael Fowlkes; San Diego County Taxpayers Association CEO Mark Kersey; Vista Chamber of Commerce CEO Rachel Beld; Building & Construction Trades Council’s Carol Kim; Vista Fire Fighters Association president Michael Saldaña (rebuttal).',
      opponents: 'Ballot argument signers Sandra Levee, Colette Kelley, Adrianne Silveria, James Silveria and Rafael Martinez; Reform California; Republican Party of San Diego County.',
      voterConnection: [
        'Property owners in the district pay; at the stated rate a home assessed at $500,000 pays about $290 a year. Renters pay indirectly if landlords pass it through.',
        '“Without increasing current tax rates” means the levy continues instead of falling as Measure LL and older bonds are paid off; opponents say current school-bond taxes would otherwise wind down starting in 2028.',
        'Bond money pays for buildings, repairs and equipment, not salaries.',
        'The district says passage would qualify it for up to $30 million in state matching funds.',
      ],
      mechanismBullets: [
        'Authorizes up to $543 million in general obligation bonds, sold in series; final levy expected in fiscal 2062–63.',
        'Projects (from the ballot question and arguments): repair roofs, plumbing, sewer, gas and electrical systems; remove asbestos and lead pipes; replace portables with permanent classrooms; accessibility upgrades; science labs, technology and career-technical spaces.',
        'Independent citizens’ oversight committee, annual performance and financial audits, and a fixed project list; funds can only be spent on listed projects.',
        'Approval does not guarantee every project is funded; some assume state matching money (county counsel).',
      ],
      argumentsFor: [
        'Many schools are more than 60 years old, with failing pipes, 380 roof leaks last year, and more than 400 aging portables (ballot argument).',
        'The district says the rate stays flat, and the Taxpayers Association endorses it, citing good management of Measure LL and early payoff of an earlier bond.',
        'Required oversight, audits and a project list, plus access to state matching funds.',
      ],
      argumentsAgainst: [
        'It extends a tax that would otherwise expire, for 35 more years (ballot argument against).',
        'Measure LL (2018, $247 million) used nearly the same language; opponents say routine repairs should come from reserves.',
        'Enrollment has fallen from more than 25,000 to about 20,300 and two schools closed in 2023, raising questions about how much space is needed (KPBS).',
        'Total repayment is about $1.15 billion, more than twice the amount borrowed.',
      ],
      readingLinks: [
        { label: 'KPBS: school bond measures guide (Oct. 2, 2026)', url: KPBS_BONDS, summary: 'Measure N rates, enrollment decline, supporters and opponents.' },
        { label: 'Vista Unified: Local Funding 2026 (Measure N)', url: 'https://www.vistausd.org/localfunding', summary: 'District’s description of needs and the April 23 board vote (district source).' },
        { label: 'Vista Unified: Measure LL oversight', url: 'https://vistausd.org/measureLL', summary: 'The 2018 bond’s citizens’ oversight committee.' },
        { label: 'Yes on N campaign', url: 'https://www.bettersafervistausdschools.org/', summary: 'Supporters’ campaign site (advocacy).' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters value investment in public school buildings, including removing asbestos and lead pipes.'],
      ['EL', 'Yes', '●', 'Establishment Liberals trust the oversight, audits and Taxpayers Association endorsement and prioritize school infrastructure.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays follow the Democratic Party and the trades and like that the rate is not projected to rise.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters want better schools but question repeat bonds with nearly the same language as Measure LL.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners may lean Yes because the stated rate does not go up, though many will not follow the details.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters can accept a flat-rate bond the Taxpayers Association endorses, though the 35-year extension gives pause.'],
      ['PR', 'No', '●', 'Populist Right voters see a tax that would otherwise expire being extended to 2063 by a shrinking district.'],
      ['CC', 'No', '◐', 'Committed Conservatives lean No with the Republican Party on more long-term debt, though the Taxpayers Association supports it.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives follow the Republican Party and Reform California in opposing the bond.'],
    ]),
    counterArguments: [
      'PR/CC (No ●/◐): But the San Diego County Taxpayers Association endorses Measure N, the rate is not projected to rise, and the money is restricted to listed facility projects.',
      'PL/EL/DM (Yes ●): But enrollment has dropped by about a fifth since 2015, and repayment is about $1.15 billion over 35 years for a district that passed a similar bond in 2018.',
    ],
  },

  // ---------------------------------------------------------------- FUESD Measure K
  {
    id: 'fuesd-measure-k',
    categoryId: 'local-measures',
    title: 'Fallbrook Union Elementary Measure K — $76M school bond',
    tldrLabel: 'Fallbrook Elementary Measure K — School bond',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure K would let the Fallbrook Union Elementary School District, which runs TK–8 schools in Fallbrook and the southern part of Camp Pendleton, borrow up to $76 million for repairs and upgrades, repaid by property owners through 2063.',
      'The district’s last bond, Proposition X, passed in 2002 and makes its final levy around 2029–30. The district says Measure K’s levy picks up as Prop X ends so the rate stays about the same; the district’s own assessment found about $475.6 million in facility needs, so $76 million covers roughly a sixth (district page).',
    ],
    introParagraphs: [
      'The board placed the measure on the ballot unanimously. It needs 55%. No argument against it was filed. The San Diego County Taxpayers Association and the county Democratic Party support it; Reform California and the county Republican Party oppose it (KPBS; sample ballot).',
    ],
    measure: {
      explainerUrl: 'https://www.kpbs.org/news/politics/2026/10/02/your-guide-to-all-san-diego-county-school-bond-measures',
      question:
        'To update local elementary and middle schools without increasing tax rates; replace failing roofs, plumbing and electrical systems; improve school safety; construct/repair/acquire classrooms, labs, facilities, equipment, and sites; and qualify for State matching funds; shall Fallbrook Union Elementary School District’s measure be adopted, authorizing $76,000,000 in bonds at legal rates, levying a projected $30 per $100,000 assessed value while bonds are outstanding, generating $5,000,000 annually, with public oversight, audits, no funds for administrators, all funds staying local?',
      yesMeans: 'Authorizes $76 million in Fallbrook Union Elementary bonds for school repairs and upgrades, repaid by property owners at a projected $30 per $100,000 of assessed value through 2062–63.',
      noMeans: 'Blocks the new bonds; the 2002 Prop X levy ends around 2030, and repairs would depend on limited maintenance funds without state matching money.',
      funding: {
        asOf: 'Oct. 13, 2026',
        note: 'No fundraising totals for either side appeared in news coverage reviewed, and no argument against the measure was filed. The Yes campaign site is YesForFUESDschools.com. The county’s campaign-disclosure portal can only be searched through a form, which we did not use, so check it for current totals.',
        sources: [
          { label: 'KPBS: San Diego County school bond measures guide (Oct. 2, 2026)', url: KPBS_BONDS },
          { label: 'San Diego County Registrar of Voters: campaign finance public portal', url: SD_PORTAL },
        ],
      },
      positions: [
        { org: 'San Diego County Democratic Party', kind: 'party', position: 'Yes', url: SDDEMS_URL },
        { org: 'Republican Party of San Diego County', kind: 'party', position: 'No', url: SDGOP_URL },
      ],
      measureType: 'School facilities bond (general obligation; placed by school board)',
      voteThreshold: '55%',
      fiscalImpact:
        'County counsel: up to $76 million in bonds; the district estimates an average and highest rate of $30 per $100,000 of assessed value, collected through fiscal 2062–63, and about $167 million in total debt service. The district projects the rate will be the same every year.',
      supporters:
        'Ballot argument signers: San Diego County Taxpayers Association CEO Mark Kersey; principal Dr. Ana Arias; veterinarian Dr. Malcolm “Steve” Jones; retired Fallbrook Union High superintendent Dale Mitchell; retired educator Dr. Connie Fish.',
      opponents: 'No ballot argument against was filed. Reform California and the Republican Party of San Diego County recommend No.',
      voterConnection: [
        'Property owners in the district pay; the district says the median assessed home ($569,203) would pay about $171 a year. Renters pay indirectly if landlords pass it through.',
        'The levy replaces the 2002 Prop X levy as it ends, so bills stay about flat rather than dropping after 2030.',
        'In the area this guide covers, only the Camp Pendleton part of 92058 votes on it, where few residents own taxable property.',
      ],
      mechanismBullets: [
        'Authorizes up to $76 million in general obligation bonds; final levy expected in fiscal 2062–63.',
        'Projects: roofs, windows, plumbing, HVAC and electrical systems; asbestos removal; safer pick-up and drop-off zones, controlled campus access, new fire alarms; classroom and lab modernization; replacing aging portables.',
        'Citizens’ oversight committee, annual independent audits, public disclosure; no money for administrator salaries or pensions.',
        'Passage qualifies the district for state matching funds (amount not stated).',
      ],
      argumentsFor: [
        'Five of ten schools are nearly 60 years old, Fallbrook STEM Academy is 77 and Maie Ellis Elementary is 88 (ballot argument).',
        'It has been nearly 25 years since the last bond, and the district says the rate stays flat.',
        'The Taxpayers Association endorses it, and it unlocks state matching funds.',
      ],
      argumentsAgainst: [
        'Without it, the Prop X levy would end around 2030 and owners’ bills would fall; a “flat rate” still means 33 more years of tax.',
        'Repayment totals about $167 million, more than twice the amount borrowed.',
        'The $76 million covers only about a sixth of identified needs, so more requests are likely.',
      ],
      readingLinks: [
        { label: 'KPBS: school bond measures guide (Oct. 2, 2026)', url: KPBS_BONDS, summary: 'Measure K needs, rates and supporters and opponents.' },
        { label: 'FUESD: bond measure announcement', url: 'https://www.fuesd.org/?p=74033', summary: 'District’s description of needs, Prop X timing and median-home cost (district source).' },
        { label: 'Yes on K campaign', url: 'https://www.yesforfuesdschools.com/', summary: 'Supporters’ campaign site (advocacy).' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters value repairing old elementary schools and removing asbestos.'],
      ['EL', 'Yes', '●', 'Establishment Liberals trust the oversight and Taxpayers Association endorsement and value leveraging state matching funds.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays follow the Democratic Party and like that the rate is projected to stay flat.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters support school repairs, though a 37-year debt gives some pause.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners may lean Yes because the rate does not rise, though many will skip it.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters can accept a modest, flat-rate bond backed by the Taxpayers Association with no filed opposition.'],
      ['PR', 'No', '◐', 'Populist Right voters dislike extending a property tax that would otherwise end around 2030.'],
      ['CC', 'No', '○', 'Committed Conservatives lean No with the Republican Party on new long-term debt, though the Taxpayers Association backs it.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives follow the Republican Party and Reform California in opposing it.'],
    ]),
    counterArguments: [
      'PR/FF (No ◐): But the Taxpayers Association supports it, no one filed a ballot argument against it, and the schools are 60 to 88 years old.',
      'PL/EL/DM (Yes ●): But without it, owners’ property-tax bills would drop when Prop X ends around 2030, and the bond covers only about a sixth of identified needs.',
    ],
  },
];
