import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Inland Empire / desert district races: U.S. House CA-23, CA-25, CA-33, CA-35, CA-39 (Prop 50 map) and Assembly AD-36.
 * Finalists and June 2 shares from the certified Statement of Vote (Secretary of State, July 10, 2026).
 * Research as of Oct 9, 2026.
 */

const SOV_US_REP = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/76-us-rep.pdf';
const SOV_ASSEMBLY = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/95-state-assembly.pdf';

const US_REP_LEGAL =
  'At least 25 years old, a U.S. citizen for at least 7 years, and an inhabitant of California when elected (U.S. Constitution art. I, section 2); two-year term.';

const US_REP_CRITERIA: QualificationCriterion[] = [
  { id: 'lawmaking', label: 'Lawmaking and policy experience', detail: 'The job is writing, amending and voting on federal law.' },
  { id: 'committee-budget', label: 'Committee and budget/appropriations work', detail: 'Most legislative work happens in committees that shape spending and oversight.' },
  { id: 'district-service', label: 'Constituent services and knowledge of the district', detail: 'Members run casework offices and carry local priorities to Washington.' },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Little becomes law without bipartisan or cross-chamber partners.' },
];

const LEGAL_LEG =
  'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

const ASSEMBLY_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
  { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const HOUSE_STAKES =
  'A U.S. representative votes on federal taxes, health programs, immigration, defense spending and infrastructure money, oversees the executive branch, and runs a casework office that helps constituents with veterans’ benefits, Social Security and federal agencies.';

const NBC_PS_REDRAWN = 'https://www.nbcpalmsprings.com/2026/06/03/calvert-other-incumbents-lead-in-redrawn-congressional-districts';

export const RACES_D_INLAND_A: Race[] = [
  // ───────────────────────── CA-23 ─────────────────────────
  {
    id: 'us-rep-ca23',
    categoryId: 'federal',
    title: 'U.S. Representative, 23rd District',
    tldrLabel: 'CA-23',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'The Prop 50 map gives CA-23 most of the High Desert and mountain communities of San Bernardino County plus Riverside County’s San Gorgonio Pass and the Blythe area (NBC Palm Springs). The seat stayed Republican-leaning, so the question is less which party wins than how the district’s member uses seniority on water, technology and federal land.',
    ],
    introParagraphs: [
      'Republican Rep. Jay Obernolte took 57.1% in the June 2 primary; Democrat Tessa Lynn Hodge was second with 21.3%, ahead of Democrat Pat Wallis (13.3%) (certified Statement of Vote). Democrats combined for about 38%, so Hodge needs nearly every Democratic and independent voter plus some Obernolte voters to close the gap.',
    ],
    readingLinks: [
      {
        label: 'Community Forward Redlands — Meet the CA-23 candidates',
        url: 'https://www.communityforwardredlands.com/meet-the-candidates-running-in-californias-23rd-congressional-district/',
        summary: 'Candidate questionnaire answers from the primary field (Obernolte did not respond in time).',
      },
      { label: 'Certified Statement of Vote — U.S. Representative (June 2, 2026)', url: SOV_US_REP },
    ],
    candidates: [
      {
        id: 'jay-obernolte',
        name: 'Jay Obernolte',
        party: 'R',
        role: 'Congressman/Business Owner',
        campaignUrl: 'https://www.electjay.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since January 2021 after six years in the State Assembly and local office in Big Bear; chairs the House Republican Policy Committee.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since Jan 2021; State Assembly (33rd District) Dec 2014–Nov 2020; Big Bear City Council from 2010, including as mayor (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Energy and Commerce, Science, Space and Technology, and Budget committees in the 119th Congress; chair of the House Republican Policy Committee since April 2026.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented High Desert communities in Congress since 2021 (old CA-8, then CA-23); Apple Valley resident.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Co-chaired the bipartisan House AI task force with Democrat Ted Lieu in 2024; voted for the Respect for Marriage Act in 2022, one of 47 Republicans.' },
          ],
        },
        bio: [
          'Founder of FarSight Studios, a video-game developer, since 1990. Served on the Big Bear City Airport Board and Big Bear City Council (including as mayor), then the State Assembly from 2014 to 2020. Elected to Congress in 2020 and re-elected in 2022 and 2024 (60.1%).',
          'He sits on Energy and Commerce and Budget, co-chaired the House AI task force with Ted Lieu, and became chair of the House Republican Policy Committee in April 2026 (Wikipedia).',
        ],
        recordVsChange:
          'Obernolte is now in House Republican leadership and is a go-to member on AI policy, which gives the district unusual access. Voters who want a check on the Trump administration get little from that seniority; replacing him trades leadership clout for a first-term Democrat in the minority or majority.',
        scorecard: [
          { topic: 'Housing', position: '? No specific federal housing plan found', comparison: 'Hodge lists lowering costs for homeowners and renters as a priority, without details.' },
          { topic: 'Climate', position: '? No published climate position; campaign stresses water infrastructure', comparison: 'Hodge lists “protecting our environment” as a priority.' },
          { topic: 'Health care', position: '? No published health-care plan found', comparison: 'Hodge makes health-care access her top issue, including rural medical facilities.' },
          { topic: 'Technology / AI', position: '✓✓ Co-chaired the bipartisan House AI task force (2024)', comparison: 'Hodge has no published technology position.' },
          { topic: 'Trump / House majority', position: '✓ Republican leadership member; praised DOGE for looking at federal waste (2025)', comparison: 'Hodge runs on “People over Party” and would add a Democratic vote.' },
        ],
        money: 'Raised $1.46M for the 2026 cycle with $1.64M cash on hand as of June 30, 2026 (FEC).',
        endorsements: 'No endorsement list compiled from a primary source as of Oct 9, 2026; see https://www.electjay.com.',
        redFlags: [],
        notes: [
          'On Jan 6, 2021 he voted to object to counting Arizona’s and Pennsylvania’s electoral votes (Wikipedia).',
        ],
      },
      {
        id: 'tessa-hodge',
        name: 'Tessa Lynn Hodge',
        party: 'D',
        role: 'Social Worker/Businesswoman',
        campaignUrl: 'https://www.tessaforca.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Licensed clinical social worker with county policy experience; has not held elected office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Campaign says she worked in San Bernardino County turning state and federal legislation into county policy and guidelines.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No legislative or budget-writing experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Lifelong High Desert resident; nearly a decade of social work with foster children and students in district schools and hospitals (campaign; Community Forward Redlands).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of building legislative coalitions.' },
          ],
        },
        bio: [
          'A licensed clinical social worker and businesswoman from Apple Valley, Hodge says she has spent almost a decade working with foster children and students needing mental-health services, and in San Bernardino County crisis response and policy. She describes herself as a lifelong High Desert resident.',
          'She runs on “People over Party,” with health-care access, wages, housing costs and the environment as priorities.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Lists lowering costs for homeowners and renters as a priority', comparison: 'Obernolte has no specific published housing plan.' },
          { topic: 'Climate', position: '✓ Lists protecting the environment as a priority', comparison: 'Obernolte focuses on water infrastructure.' },
          { topic: 'Health care', position: '✓✓ Top issue: expand medical education, improve rural access, fund new medical facilities', comparison: 'Obernolte has no published health-care plan.' },
          { topic: 'Workers', position: '✓ Good jobs, livable wages and workers’ rights are campaign priorities', comparison: 'Obernolte opposed state minimum-wage increases in the Assembly.' },
          { topic: 'Trump / House majority', position: '✓ Would add a Democratic vote; criticizes partisan politics', comparison: 'Obernolte is in House Republican leadership.' },
        ],
        money: 'Raised $79,499 with $10,237 cash on hand as of June 30, 2026 (FEC).',
        endorsements: 'No endorsement list found as of Oct 9, 2026.',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Hodge', '●', 'Progressive Left voters get a Democrat who puts health-care access, workers’ rights and the environment first.'],
      ['EL', 'Hodge', '●', 'Establishment Liberals favor the Democrat for House control, even though she brings far less government experience than Obernolte.'],
      ['DM', 'Hodge', '●', 'Democratic Mainstays back the party nominee, a lifelong local social worker focused on health care and costs.'],
      [
        'OL',
        'Hodge',
        '◐',
        'Outsider Left voters like her “People over Party” pitch and non-politician background, though a long-shot race may not move them.',
        'An experience-first Outsider Left voter could note Obernolte’s bipartisan AI work and Respect for Marriage Act vote; choosing him gives up a Democratic vote and accepts his Jan 6 objection votes.',
      ],
      ['SS', 'Obernolte', '○', 'Stressed Sideliners who rarely engage may default to the familiar incumbent with local roots and seniority, though Hodge’s cost-of-living message speaks to them.'],
      ['AR', 'Obernolte', '●', 'Ambivalent Right voters value his business background, technology focus and occasional bipartisan votes.'],
      ['PR', 'Obernolte', '●', 'Populist Right voters back the Republican who praised DOGE and supports the House GOP majority.'],
      ['CC', 'Obernolte', '●', 'Committed Conservatives back a Republican Policy Committee chair who favors limited government and lower spending.'],
      ['FF', 'Obernolte', '●', 'Faith and Flag Conservatives back the Republican who supported overturning Roe v. Wade.'],
    ]),
    counterArguments: [
      'EL (Hodge ●): But consider that Obernolte is an established technology-policy legislator with bipartisan work, while Hodge has never held office.',
      'FF (Obernolte ●): But consider that he voted for the Respect for Marriage Act in 2022, which some social conservatives opposed.',
    ],
  },

  // ───────────────────────── CA-25 ─────────────────────────
  {
    id: 'us-rep-ca25',
    categoryId: 'federal',
    title: 'U.S. Representative, 25th District',
    tldrLabel: 'CA-25',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'Prop 50 realigned CA-25 but kept it centered on the Coachella Valley, with Imperial County and parts of Riverside and San Bernardino counties (NBC Palm Springs). Medicaid and ACA changes, the Salton Sea, farm labor and immigration enforcement weigh heavily here.',
    ],
    introParagraphs: [
      'Democratic Rep. Raul Ruiz took 60.0% in the June 2 primary. Hemet Mayor Pro Tem Joe Males led three Republicans with 18.9%; Republicans combined for about 40% (certified Statement of Vote). Males needs to consolidate that Republican vote and win over a large share of independents to compete.',
    ],
    readingLinks: [
      {
        label: 'NBC Palm Springs — Candidates lay out key issues in CA-25 (May 15, 2026)',
        url: 'https://www.nbcpalmsprings.com/decision-2026/2026/05/15/candidates-lay-out-key-issues-in-californias-25th-congressional-district-race',
        summary: 'Ruiz and Males on cost of living, tariffs, gas taxes and immigration enforcement.',
      },
      { label: 'Certified Statement of Vote — U.S. Representative (June 2, 2026)', url: SOV_US_REP },
    ],
    candidates: [
      {
        id: 'raul-ruiz',
        name: 'Raul Ruiz',
        party: 'D',
        role: 'Emergency Physician/Congressman',
        campaignUrl: 'https://www.drraulruiz.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2013; Energy and Commerce member and former Congressional Hispanic Caucus chair; emergency physician.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since Jan 2013 (CA-36, then CA-25 from 2023) (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Energy and Commerce since 2017, including the health subcommittee; earlier Veterans’ Affairs and Natural Resources.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Coachella Valley native; emergency physician at Eisenhower Medical Center; founded the Coachella Valley Healthcare Initiative (2010).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Chaired the Congressional Hispanic Caucus 2021–2023; co-chairs the Congressional Doctors Caucus.' },
          ],
        },
        bio: [
          'Raised in Coachella, Ruiz earned an M.D., M.P.P. and M.P.H. from Harvard and practiced emergency medicine at Eisenhower Medical Center in Rancho Mirage. He was a senior associate dean at UC Riverside’s medical school before defeating Rep. Mary Bono Mack in 2012.',
          'He serves on Energy and Commerce, chaired the Congressional Hispanic Caucus from 2021 to 2023, and won re-election in 2024 with 56.3% (Wikipedia).',
        ],
        recordVsChange:
          'Ruiz brings 13 years of seniority and an Energy and Commerce seat that handles health policy, a major issue for the Coachella and Imperial valleys. Replacing him would give up that seniority for a first-term Republican aligned with the House majority.',
        scorecard: [
          { topic: 'Health care', position: '✓✓ Defended the ACA; opposed Medicare cuts; sits on the health subcommittee', comparison: 'Males has no published health-care plan.' },
          { topic: 'Immigration', position: '✓ Calls for more accountability and oversight of immigration enforcement (NBC Palm Springs)', comparison: 'Males emphasizes stronger border enforcement and legal immigration processes.' },
          { topic: 'Cost of living', position: '✓ Pushes back on federal tariff policies he says raise prices', comparison: 'Males would cut gas taxes and regulations.' },
          { topic: 'Climate / Salton Sea', position: '✓ Has emphasized Salton Sea restoration funding', comparison: 'Males has no published position.' },
          { topic: 'Trump / House majority', position: '✓ Democratic vote; criticizes administration tariffs', comparison: 'Males would add to the Republican side.' },
        ],
        money: 'Raised $2.09M for the cycle with $2.56M cash on hand as of June 30, 2026 (FEC).',
        endorsements: 'No compiled endorsement list as of Oct 9, 2026; Ruiz himself endorsed Ida Obeso-Martinez in AD-36 (Desert Review, Oct 2025).',
        redFlags: [],
      },
      {
        id: 'joe-males',
        name: 'Joe Males',
        party: 'R',
        role: 'Mayor Pro Tem',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Hemet city councilmember (District 4) and mayor pro tem; Marine Corps veteran and small-business founder; no state or federal legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Hemet City Council, District 4; mayor pro tem through Dec 2026 (City of Hemet).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on Hemet’s city budget; no committee or appropriations experience at higher levels.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Hemet resident since 2005; commander of American Legion Post 53; Hemet is one part of a district centered on the Coachella Valley.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of passing legislation across party lines.' },
          ],
        },
        bio: [
          'A Marine Corps veteran who left the service as a sergeant, Males founded JM Consulting, a computer company, in 1996 and moved to Hemet in 2005. He is commander of American Legion Post 53 and represents District 4 on the Hemet City Council, where he is mayor pro tem (City of Hemet).',
          'He campaigns on lower gas taxes, fewer regulations and stronger border enforcement (NBC Palm Springs).',
        ],
        scorecard: [
          { topic: 'Health care', position: '? No public position found', comparison: 'Ruiz is a physician who defends the ACA and opposes Medicare cuts.' },
          { topic: 'Immigration', position: '✓ Stronger border enforcement and adherence to legal immigration processes', comparison: 'Ruiz wants more oversight of immigration enforcement.' },
          { topic: 'Cost of living', position: '✓ Cut gas taxes and roll back regulations to lower costs', comparison: 'Ruiz blames federal tariffs for higher prices.' },
          { topic: 'Veterans', position: '✓ Marine veteran and American Legion post commander', comparison: 'Ruiz previously served on the Veterans’ Affairs Committee.' },
          { topic: 'Trump / House majority', position: '✓ Would add a Republican vote', comparison: 'Ruiz is a Democrat critical of administration tariffs.' },
        ],
        money: 'Raised $936,496 with $14,847 cash on hand as of June 30, 2026 (FEC).',
        endorsements: 'No endorsement list found as of Oct 9, 2026.',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Ruiz', '●', 'Progressive Left voters back the physician who defends the ACA and wants oversight of immigration enforcement.'],
      ['EL', 'Ruiz', '●', 'Establishment Liberals value his Harvard medical and policy training, Energy and Commerce seat and 13 years of seniority.'],
      ['DM', 'Ruiz', '●', 'Democratic Mainstays back a longtime Democratic incumbent and former Hispanic Caucus chair.'],
      ['OL', 'Ruiz', '●', 'Outsider Left voters get a Coachella Valley native and working doctor who criticizes tariffs and enforcement tactics.'],
      ['SS', 'Ruiz', '◐', 'Stressed Sideliners who depend on Medi-Cal and local clinics benefit from his health-care focus, though Males’s gas-tax message appeals to them.'],
      [
        'AR',
        'Males',
        '◐',
        'Ambivalent Right voters like Males’s lower-tax, lower-regulation message and veteran background more than his party label.',
        'An experience-first Ambivalent Right voter could back Ruiz for 13 years of seniority and health-policy expertise; doing so gives up a Republican vote on taxes and regulation.',
      ],
      ['PR', 'Males', '●', 'Populist Right voters back the candidate who wants stronger border enforcement and lower gas taxes.'],
      ['CC', 'Males', '●', 'Committed Conservatives back the small-business founder who wants fewer regulations and a Republican House.'],
      ['FF', 'Males', '●', 'Faith and Flag Conservatives back the Marine veteran and American Legion commander who stresses border security.'],
    ]),
    counterArguments: [
      'PR (Males ●): But consider that Males has local-government experience only and trails Ruiz by a wide margin in money and seniority.',
      'SS (Ruiz ◐): But consider that Males’s focus on gas taxes speaks directly to day-to-day costs.',
    ],
  },

  // ───────────────────────── CA-33 ─────────────────────────
  {
    id: 'us-rep-ca33',
    categoryId: 'federal',
    title: 'U.S. Representative, 33rd District',
    tldrLabel: 'CA-33',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'CA-33 covers San Bernardino, Colton, part of Redlands and nearby San Bernardino Valley communities (Community Forward Redlands). Its incumbent, Pete Aguilar, is the House Democratic Caucus chair, the third-ranking Democrat, so this seat also sends a party leader back to Washington.',
    ],
    introParagraphs: [
      'Democratic Rep. Pete Aguilar took 53.5% in the June 2 primary. Republican Stephanie M. Vargas was second with 17.5%, ahead of Republican Tom Herman (11.4%) and Democrat Antonis Christodoulou (7.5%) (certified Statement of Vote). Republicans combined for about a third of the vote, so Aguilar is a heavy favorite.',
    ],
    readingLinks: [
      {
        label: 'Community Forward Redlands — Meet the CA-33 candidates',
        url: 'https://www.communityforwardredlands.com/meet-the-candidates-running-in-californias-33rd-congressional-district/',
        summary: 'Questionnaire answers from Aguilar and Vargas on cost of living, energy and housing.',
      },
      { label: 'Certified Statement of Vote — U.S. Representative (June 2, 2026)', url: SOV_US_REP },
    ],
    candidates: [
      {
        id: 'pete-aguilar',
        name: 'Pete Aguilar',
        party: 'D',
        role: 'United States Representative',
        campaignUrl: 'https://www.peteaguilar.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2015 and House Democratic Caucus chair since 2023; Appropriations member; former Redlands mayor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since Jan 2015 (CA-31, then CA-33); Redlands City Council 2006–2014, mayor from 2010 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Appropriations Committee, including Defense and Transportation-HUD subcommittees; served on the Jan 6 select committee (2021–2022).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented San Bernardino Valley cities since 2015; former Inland Empire regional director for Gov. Gray Davis (2001).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Democratic Caucus vice chair 2021–2023 and chair since 2023; ADVANCE and OPPORTUNITY Acts signed into law in 2018.' },
          ],
        },
        bio: [
          'A former Redlands councilmember and mayor, Aguilar was elected to Congress in 2014. He sits on Appropriations and has chaired the House Democratic Caucus since January 2023, making him the third-ranking House Democrat; he served on the Jan 6 select committee (Wikipedia).',
          'He says cost of living is the district’s biggest issue and cites federal money he has brought home and a bipartisan housing bill (Community Forward Redlands).',
        ],
        recordVsChange:
          'As caucus chair and an appropriator, Aguilar has more leverage than almost any California member, especially if Democrats win the House. Voters who want a member focused only on the district, or a progressive challenger, have no such option on this ballot.',
        scorecard: [
          { topic: 'Housing', position: '✓ Cites helping pass a bipartisan housing bill', comparison: 'Vargas calls for “fixing the housing crisis” without specifics.' },
          { topic: 'Health care', position: '✓ Would push to lower health-care and food costs if Democrats win the House', comparison: 'Vargas has no published health-care position.' },
          { topic: 'Energy / climate', position: '? No specific energy plan in his questionnaire', comparison: 'Vargas would seek EPA waivers to loosen California fuel rules and speed permitting.' },
          { topic: 'Immigration', position: '✓ Backed DACA expansion; criticized the 2017 travel order', comparison: 'Vargas has no published immigration position.' },
          { topic: 'District clout', position: '✓✓ Democratic Caucus chair and appropriator', comparison: 'Vargas would be a first-term member.' },
        ],
        money: 'Raised $4.72M for the cycle with $3.46M cash on hand as of June 30, 2026 (FEC).',
        endorsements: 'No compiled endorsement list as of Oct 9, 2026; see https://www.peteaguilar.com.',
        redFlags: [],
      },
      {
        id: 'stephanie-vargas',
        name: 'Stephanie M. Vargas',
        party: 'R',
        role: 'Chief Deputy Clerk',
        campaignUrl: 'https://www.stephanievargas4congress.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Colton city clerk’s office staff since 2018 and charter school board member; has not held legislative office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative experience; has run Colton’s clerk and election functions (Deputy Clerk 2021–2023, Acting Clerk 2023–2024, Chief Deputy 2024–2026) (iVoterGuide).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Springs Charter School board member 2022–2026.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Lifelong district resident; grew up in San Bernardino; San Bernardino Police cadet 2010–2013.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of passing legislation.' },
          ],
        },
        bio: [
          'Vargas is chief deputy city clerk and elections official in Colton, where she has worked since 2018, and a Springs Charter School board member. A lifelong resident who grew up in San Bernardino, she holds an associate degree from San Bernardino Valley College (iVoterGuide; campaign).',
          'She centers her campaign on energy costs, public safety, parental rights and election integrity.',
        ],
        scorecard: [
          { topic: 'Housing', position: '~ Calls for “fixing the housing crisis”; no specific plan', comparison: 'Aguilar cites a bipartisan housing bill.' },
          { topic: 'Energy / climate', position: '✗ Seek emergency EPA waivers to loosen state fuel rules; permitting reform; grid modernization', comparison: 'Aguilar has no specific energy plan published.' },
          { topic: 'Public safety', position: '✓ Supports police and fire personnel', comparison: 'Aguilar lists public safety among his priorities.' },
          { topic: 'Elections', position: '✓ Stresses election integrity and restoring trust', comparison: 'Aguilar served on the Jan 6 select committee.' },
          { topic: 'Trump / House majority', position: '✓ Would add a Republican vote; endorsed by county GOP', comparison: 'Aguilar is a top Democratic leader.' },
        ],
        money: 'No FEC receipts reported as of the latest FEC data (Oct 2026).',
        endorsements: 'Per her campaign site (Oct 2026): San Bernardino County Republican Party, Reform California, Redlands Tea Party Patriots; listed in several conservative voter guides.',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Aguilar', '◐', 'Progressive Left voters back the Democrat but may see him as a party-leadership figure rather than a progressive champion.'],
      ['EL', 'Aguilar', '●', 'Establishment Liberals value a caucus chair and appropriator who would gain influence in a Democratic House.'],
      ['DM', 'Aguilar', '●', 'Democratic Mainstays back the third-ranking House Democrat and longtime local officeholder.'],
      ['OL', 'Aguilar', '◐', 'Outsider Left voters distrust leadership and big-donor fundraising but have no left alternative on the November ballot.'],
      ['SS', 'Aguilar', '◐', 'Stressed Sideliners benefit from his focus on federal money and lower costs, though Vargas’s energy-price message is direct.'],
      [
        'AR',
        'Vargas',
        '○',
        'Ambivalent Right voters like Vargas’s focus on energy costs and permitting, but her social-conservative emphasis is less central to them.',
        'An experience-first Ambivalent Right voter could back Aguilar for his appropriations seat and federal funding record; that gives up a Republican vote on energy rules and taxes.',
      ],
      ['PR', 'Vargas', '●', 'Populist Right voters back the Republican who stresses election integrity and lower fuel costs.'],
      ['CC', 'Vargas', '●', 'Committed Conservatives back the Republican who wants lower taxes and lighter fuel regulation.'],
      ['FF', 'Vargas', '●', 'Faith and Flag Conservatives back a church worship leader who stresses parental rights and school choice.'],
    ]),
    counterArguments: [
      'FF (Vargas ●): But consider that Vargas has no legislative experience and reported no federal fundraising, against a party leader with nearly $3.5M on hand.',
      'OL (Aguilar ◐): But consider that his primary challenger Christodoulou criticized his donors and votes on Israel and Pentagon funding; Aguilar is a leadership Democrat, not an outsider.',
    ],
  },

  // ───────────────────────── CA-35 ─────────────────────────
  {
    id: 'us-rep-ca35',
    categoryId: 'federal',
    title: 'U.S. Representative, 35th District',
    tldrLabel: 'CA-35',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'The Prop 50 map keeps CA-35 mostly in western San Bernardino County with a slice of Los Angeles County, and adds Corona, Eastvale and Norco from Riverside County (NBC Palm Springs). Those Riverside County communities were previously in Republican Ken Calvert’s district.',
    ],
    introParagraphs: [
      'This is a 2024 rematch. Democratic Rep. Norma Torres took 59.5% and Republican Mike Cargile 40.4% in the June 2 two-candidate primary (certified Statement of Vote); Torres beat him 58.4% to 41.6% in 2024. Cargile led in early Riverside County returns, so turnout in the new Corona-Eastvale area matters.',
    ],
    readingLinks: [
      { label: 'NBC Palm Springs — Incumbents lead in redrawn districts (June 3, 2026)', url: NBC_PS_REDRAWN, summary: 'District boundaries under Prop 50 and early primary returns.' },
      { label: 'Certified Statement of Vote — U.S. Representative (June 2, 2026)', url: SOV_US_REP },
    ],
    candidates: [
      {
        id: 'norma-torres',
        name: 'Norma J. Torres',
        party: 'D',
        role: 'U.S. Representative',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2015 after the State Senate, Assembly and Pomona mayoralty; Appropriations member.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since Jan 2015; State Senate 2013–2014; State Assembly 2008–2013; Pomona mayor 2006–2008 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Appropriations (State-Foreign Ops and Transportation-HUD subcommittees); ranking member of a House Administration subcommittee.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Pomona City Council from 2001; has represented the Ontario-Pomona area in Congress since 2015.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Member of the New Democrat Coalition and Hispanic and Asian Pacific American caucuses; no signature law identified in sources reviewed.' },
          ],
        },
        bio: [
          'Torres was a 911 dispatcher and AFSCME shop steward who led a 1994 campaign for bilingual 911 operators. She served on the Pomona City Council, as Pomona mayor (2006–2008), in the Assembly and the State Senate, and has been in Congress since 2015.',
          'She sits on Appropriations and House Administration and earned a labor studies degree in 2012 (Wikipedia).',
        ],
        recordVsChange:
          'Torres brings an Appropriations seat and decades of local and state office; her opponent has never held office and has a record of offensive social-media posts. A vote to replace her is mainly a vote for a Republican House majority.',
        scorecard: [
          { topic: 'Abortion', position: '✓✓ 100% NARAL rating; opposed Dobbs', comparison: 'Cargile has no published position found.' },
          { topic: 'Public safety', position: '✓ Former 911 dispatcher; NextGen 9-1-1 Caucus member', comparison: 'Cargile has no published public-safety plan.' },
          { topic: 'Foreign policy', position: '~ Clashed with El Salvador’s Bukele, who urged voters to oppose her (2022)', comparison: 'Cargile has no published foreign-policy position.' },
          { topic: 'District clout', position: '✓ Appropriations seat; 11 years in Congress', comparison: 'Cargile would be a first-term member.' },
          { topic: 'Trump / House majority', position: '✓ Democratic vote', comparison: 'Cargile would add a Republican vote.' },
        ],
        money: 'Raised $769,061 with $339,247 cash on hand as of June 30, 2026 (FEC).',
        endorsements: 'No compiled endorsement list as of Oct 9, 2026.',
        redFlags: [],
      },
      {
        id: 'mike-cargile',
        name: 'Mike Cargile',
        party: 'R',
        role: 'Small Businessman',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Small businessman and former actor/marketing director; has not held public office. Third run against Torres.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No public office or legislative experience found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No budget or committee experience found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'Pomona-area business address; no documented civic roles found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record.' },
          ],
        },
        bio: [
          'Cargile lists his ballot occupation as small businessman; his 2020 campaign site described him as a writer, actor, director, producer and marketing director (LA Magazine). He ran against Torres in 2020 and lost 58.4% to 41.6% in 2024.',
          'He raised $4,759 through June 30, 2026 (FEC).',
        ],
        scorecard: [
          { topic: 'Abortion', position: '? No public position found', comparison: 'Torres has a 100% NARAL rating.' },
          { topic: 'Public safety', position: '? No public position found', comparison: 'Torres is a former 911 dispatcher.' },
          { topic: 'Immigration', position: '✗ 2020 posts mocked “anchor babies” (LA Magazine)', comparison: 'Torres is a Congressional Hispanic Caucus member.' },
          { topic: 'Trump / House majority', position: '✓ Would add a Republican vote', comparison: 'Torres is a Democrat.' },
        ],
        money: 'Raised $4,759 with $2,873 cash on hand as of June 30, 2026 (FEC).',
        endorsements: 'No 2026 endorsement list found as of Oct 9, 2026. In 2020 the California Republican Party removed its endorsement from its website after reports on his posts (LA Magazine).',
        redFlags: [],
        notes: [
          'In 2020 Media Matters reported that his social-media accounts carried racist and anti-LGBTQ memes, and his Twitter bio used the QAnon slogan #WWG1WGA; the state GOP then quietly removed its endorsement. He did not respond to LA Magazine (July 2020) — https://lamag.com/politics/mike-cargile-qanon',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Torres', '●', 'Progressive Left voters back a union-rooted Democrat with a 100% NARAL rating.'],
      ['EL', 'Torres', '●', 'Establishment Liberals value an appropriator with decades in local, state and federal office.'],
      ['DM', 'Torres', '●', 'Democratic Mainstays back the longtime Democratic incumbent and former 911 dispatcher.'],
      ['OL', 'Torres', '●', 'Outsider Left voters have no left alternative and reject a challenger who posted anti-immigrant memes.'],
      ['SS', 'Torres', '◐', 'Stressed Sideliners get a working-class former dispatcher with a district office; Cargile offers no published plan.'],
      [
        'AR',
        'Cargile',
        '○',
        'Ambivalent Right voters lean Republican for House control but are wary of Cargile’s documented QAnon-linked posts.',
        'An experience-first Ambivalent Right voter could back Torres for her Appropriations seat and 25 years in office, giving up a Republican vote to avoid a candidate the state GOP once disowned.',
      ],
      ['PR', 'Cargile', '●', 'Populist Right voters back the Republican running against an establishment Democrat.'],
      [
        'CC',
        'Cargile',
        '◐',
        'Committed Conservatives want a Republican vote, but Cargile’s offensive posts and minimal campaign are a weak vehicle.',
        'An experience-first Committed Conservative could back Torres as the only candidate with governing experience, accepting her Democratic votes in exchange for avoiding Cargile’s record.',
      ],
      ['FF', 'Cargile', '●', 'Faith and Flag Conservatives back the Republican over a Democrat with a 100% NARAL rating.'],
    ]),
    counterArguments: [
      'PR (Cargile ●): But consider that the California Republican Party pulled its 2020 endorsement of Cargile over his posts, and he has raised under $5,000.',
    ],
  },

  // ───────────────────────── CA-39 ─────────────────────────
  {
    id: 'us-rep-ca39',
    categoryId: 'federal',
    title: 'U.S. Representative, 39th District',
    tldrLabel: 'CA-39',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'Prop 50 changed CA-39 only slightly: it still covers Riverside, Moreno Valley, Perris, communities west of Perris and Lake Elsinore (NBC Palm Springs). Its member is the top Democrat on Veterans’ Affairs, which matters to the many veterans near March Air Reserve Base.',
    ],
    introParagraphs: [
      'Democratic Rep. Mark Takano took 61.0% and Republican Lake Elsinore Councilmember Steve Manos 39.0% in the June 2 two-candidate primary (certified Statement of Vote). Takano is favored; Manos needs to win over independents with a local-government and housing message.',
    ],
    readingLinks: [
      { label: 'NBC Palm Springs — Incumbents lead in redrawn districts (June 3, 2026)', url: NBC_PS_REDRAWN, summary: 'District boundaries under Prop 50 and early primary returns.' },
      { label: 'Certified Statement of Vote — U.S. Representative (June 2, 2026)', url: SOV_US_REP },
    ],
    candidates: [
      {
        id: 'mark-takano',
        name: 'Mark Takano',
        party: 'D',
        role: 'U.S. Congressman',
        campaignUrl: 'https://www.marktakano.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2013; chaired Veterans’ Affairs 2019–2023 and is now its ranking member; former teacher and community college trustee.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since Jan 2013 (CA-41, then CA-39 from 2023) (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Veterans’ Affairs chair 2019–2023, ranking member since 2023; Education and the Workforce member.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Riverside native; Riverside Community College trustee from 1990; 23 years as a public-school teacher.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Led Veterans’ Affairs during passage of the Honoring our PACT Act (2022) for toxic-exposed veterans.' },
          ],
        },
        bio: [
          'A Riverside native, Takano taught British literature in public schools for 23 years and was elected a Riverside Community College trustee in 1990. Elected to Congress in 2012, he chaired Veterans’ Affairs from 2019 to 2023, including during the PACT Act, and is now its ranking member (Wikipedia).',
          'He belongs to the Progressive Caucus and chairs the Congressional Equality Caucus.',
        ],
        recordVsChange:
          'Takano is the senior Democrat on veterans’ policy and helped pass the PACT Act; that seniority would return a gavel if Democrats win the House. Replacing him trades that for a Republican with long local-government experience but none in Congress.',
        scorecard: [
          { topic: 'Veterans', position: '✓✓ Ranking member, Veterans’ Affairs; backed the PACT Act', comparison: 'Manos says veterans “need our continued support.”' },
          { topic: 'Housing', position: '? No specific housing plan found in sources reviewed', comparison: 'Manos wants market-rate housing and limits on investor home-buying.' },
          { topic: 'Immigration', position: '✓ Official site highlights immigration casework and reform', comparison: 'Manos has no published immigration position.' },
          { topic: 'Abortion', position: '✓✓ 100% NARAL rating; opposed Dobbs', comparison: 'Manos stresses parental rights; no abortion position found.' },
          { topic: 'Trump / House majority', position: '✓ Voted for both Trump impeachments', comparison: 'Manos would add a Republican vote.' },
        ],
        money: 'Raised $893,848 with $186,224 cash on hand as of June 30, 2026 (FEC).',
        endorsements: 'No compiled endorsement list as of Oct 9, 2026.',
        redFlags: [],
      },
      {
        id: 'steve-manos',
        name: 'Steve Manos',
        party: 'R',
        role: 'Mayor/Business Owner',
        campaignUrl: 'https://www.manosforcongress.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Lake Elsinore councilmember since 2012 and four-time mayor, with regional board roles; no state or federal legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Lake Elsinore City Council since 2012; mayor in 2015, 2019, 2024 and 2026 (campaign; BallotReady).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Director on Southern California Association of Governments and Riverside County Habitat Conservation Authority boards; chair, Southwest Riverside Energy Authority.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Inland Empire resident since 1987; Lake Elsinore is in CA-39.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'President of the League of California Cities’ Riverside County Division (campaign).' },
          ],
        },
        bio: [
          'Manos is a real-estate broker who has run Prima Vista Real Estate since 2000 and is a past president of the Inland Valleys Association of Realtors. Elected to the Lake Elsinore City Council in 2012, he has served as mayor four times and on regional boards including SCAG. He ran for Assembly in 2020 (BallotReady; campaign).',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Market-rate housing, fewer regulatory barriers, curb hedge-fund home-buying', comparison: 'Takano has no specific published housing plan.' },
          { topic: 'Transportation', position: '✓ Immediate funding for I-215 repairs and more regional capacity', comparison: 'Takano has no specific published transportation plan.' },
          { topic: 'Veterans', position: '✓ Says veterans need continued support', comparison: 'Takano is the top Democrat on Veterans’ Affairs.' },
          { topic: 'Government', position: '✓ Limit government overreach; protect parental rights', comparison: 'Takano supports a larger federal role and LGBTQ rights.' },
          { topic: 'Trump / House majority', position: '✓ Would add a Republican vote', comparison: 'Takano voted for both Trump impeachments.' },
        ],
        money: 'No FEC receipts reported as of the latest FEC data (Oct 2026).',
        endorsements: 'No endorsement list found as of Oct 9, 2026.',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Takano', '●', 'Progressive Left voters back a Progressive Caucus member who chairs the Equality Caucus.'],
      ['EL', 'Takano', '●', 'Establishment Liberals value his veterans’ policy record and seniority.'],
      ['DM', 'Takano', '●', 'Democratic Mainstays back the longtime Democratic incumbent and former teacher.'],
      ['OL', 'Takano', '●', 'Outsider Left voters back his criticism of the Gaza war and support for transgender rights.'],
      ['SS', 'Takano', '◐', 'Stressed Sideliners benefit from his veterans’ casework, though Manos’s housing-cost message is concrete.'],
      ['AR', 'Manos', '●', 'Ambivalent Right voters like a pragmatic local official focused on housing supply, freeways and limiting investor home-buying.'],
      ['PR', 'Manos', '●', 'Populist Right voters like his attack on hedge-fund home-buying and pledge to limit government overreach.'],
      ['CC', 'Manos', '●', 'Committed Conservatives back a business owner who wants fewer regulations and a Republican House.'],
      ['FF', 'Manos', '●', 'Faith and Flag Conservatives back his parental-rights stance over Takano’s progressive social views.'],
    ]),
    counterArguments: [
      'CC (Manos ●): But consider that Manos reported no federal fundraising and has never served in Congress, while Takano holds a senior committee post.',
      'SS (Takano ◐): But consider that Manos has spent 14 years on local housing and transportation issues these voters feel directly.',
    ],
  },

  // ───────────────────────── AD-36 ─────────────────────────
  {
    id: 'assembly-ad36',
    categoryId: 'state-leg',
    title: 'State Assembly, District 36',
    tldrLabel: 'AD-36',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA(
      'AD-36 spans parts of Imperial, Riverside and San Bernardino counties, including the Imperial Valley and eastern Coachella Valley, with farm, water, border and Lithium Valley issues.',
    ),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members vote on the state budget, Medi-Cal, schools, housing and land-use law, water and energy policy, and public-safety statutes; they serve two-year terms.',
      'AD-36 covers the Imperial Valley and eastern Coachella Valley. Republican Jeff Gonzalez flipped the long-Democratic seat in 2024 with 51.8% (CalMatters Digital Democracy), and Democrats see it as a top pick-up target in 2026.',
    ],
    introParagraphs: [
      'Gonzalez took 44.6% in the June 2 primary; Imperial Mayor Ida Obeso-Martinez edged fellow Democrat Oscar Ortiz for second, 24.1% to 22.0%, with Tomás Oliva at 9.3% (certified Statement of Vote). Democrats combined for about 55%. Ortiz endorsed Obeso-Martinez, so November turns on whether Democrats consolidate.',
    ],
    readingLinks: [
      {
        label: 'Imperial Valley Press — Gonzalez, Obeso-Martinez set for November (June 20, 2026)',
        url: 'https://www.ivpressonline.com/news/gonzalez-obeso-martinez-set-for-november-showdown-in-california-s-36th-assembly-district/article_d4f91806-cfa8-48b8-9653-b0f83588a4bd.html',
        summary: 'Primary results, fundraising through May 16, and Ortiz’s endorsement of Obeso-Martinez.',
      },
      {
        label: 'NBC Palm Springs — Candidates outline priorities in AD-36 (May 14, 2026)',
        url: 'https://www.nbcpalmsprings.com/decision-2026/2026/05/14/candidates-outline-priorities-in-californias-36th-assembly-district-race',
      },
      { label: 'Certified Statement of Vote — State Assembly (June 2, 2026)', url: SOV_ASSEMBLY },
    ],
    candidates: [
      {
        id: 'jeff-gonzalez',
        name: 'Jeff Gonzalez',
        party: 'R',
        role: 'Assemblymember/Father',
        campaignUrl: 'https://www.gonzalez4assembly.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term incumbent in this seat since December 2024, vice chair of two committees; earlier a 21-year Marine, pastor and business owner.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly member since Dec 2024; authored 37 bills in 2025–26, including AB 2163 on clean-energy and critical-mineral zones and AB 1756 (CalMatters Digital Democracy).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Vice chair, Military and Veterans Affairs and Water, Parks and Wildlife (Assembly).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Indio resident; represents AD-36 since 2024; ran for the predecessor AD-56 in 2018.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Minority-party member; NBC Palm Springs reports work across party lines on in-home supportive services.' },
          ],
        },
        bio: [
          'A 21-year Marine who deployed to combat zones four times, Gonzalez later founded a church in San Diego, bought and grew a technology company, and started a staffing firm (Idyllwild Town Crier). He lost the 2018 race for the predecessor AD-56, then won AD-36 in 2024 with 51.8%.',
          'He is vice chair of the Military and Veterans Affairs and Water, Parks and Wildlife committees and focuses on veterans, disability services and rural communities.',
        ],
        recordVsChange:
          'In under two years Gonzalez has moved several bills, including on Lithium Valley energy zones, and works on disability services. As a Republican in a Democratic supermajority, his leverage is limited; replacing him gives the district a majority-party member but loses his veteran-focused work.',
        scorecard: [
          { topic: 'Housing & transit', position: '? No specific housing record found', comparison: 'Obeso-Martinez calls for infrastructure investment.' },
          { topic: 'Climate & energy', position: '~ Authored a clean-energy and critical-mineral zones bill; low environmental-group scores', comparison: 'Obeso-Martinez has no published energy position.' },
          { topic: 'Health care', position: '✓ Protecting in-home supportive services for people with disabilities', comparison: 'Obeso-Martinez, a nurse practitioner, makes health care her top issue.' },
          { topic: 'Veterans', position: '✓✓ Combat veteran; vice chair, Military and Veterans Affairs', comparison: 'Obeso-Martinez lists veterans among her priorities.' },
          { topic: 'Caucus/ideology', position: '~ Republican who stresses “people over politics” and bipartisanship', comparison: 'Obeso-Martinez would join the Democratic majority.' },
        ],
        money: 'Raised $285,225 from Jan 1 to May 16, 2026, with $546,806 cash on hand (Imperial Valley Press).',
        endorsements: 'No compiled endorsement list as of Oct 9, 2026.',
        redFlags: [],
      },
      {
        id: 'ida-obeso-martinez',
        name: 'Ida Obeso-Martinez',
        party: 'D',
        role: 'Mayor/Nurse',
        campaignUrl: 'https://www.idaforassembly.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Imperial city councilmember since 2022 and current mayor; nurse practitioner with more than 20 years in local health care.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Imperial City Council since 2022 (BallotReady); mayor per her 2026 ballot designation.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on Imperial’s city budget; no state committee experience.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Lifelong Imperial Valley resident; nurse at Pioneers Memorial and El Centro Regional Medical Center; cardiology nurse practitioner since 2022.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record yet.' },
          ],
        },
        bio: [
          'A lifelong Imperial resident, Obeso-Martinez holds a Doctor of Nursing Practice from the University of Arizona (2016) and has worked as a nurse at Pioneers Memorial and El Centro Regional Medical Center and as a cardiology nurse practitioner. She joined the Imperial City Council in 2022 and is now mayor (BallotReady; Desert Review).',
          'She launched her campaign in October 2025 with Rep. Raul Ruiz’s endorsement.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Infrastructure investment; local-hire agreements', comparison: 'Gonzalez has no specific housing record.' },
          { topic: 'Health care', position: '✓✓ Top issue; says Medicaid cuts hitting local families went unaddressed', comparison: 'Gonzalez focuses on in-home supportive services.' },
          { topic: 'Education', position: '✓ Stronger schools; career-tech and workforce training', comparison: 'Gonzalez sits on Higher Education.' },
          { topic: 'Public safety', position: '✓ Prevention, mental-health services and support for law enforcement', comparison: 'Gonzalez lists public safety as a priority.' },
          { topic: 'Caucus/ideology', position: '✓ Would join the Democratic majority', comparison: 'Gonzalez is a Republican in the minority.' },
        ],
        money: '$137,968 raised in 2026 with $20,916 cash on hand in her main committee, plus $45,026 in a second committee, as of the pre-primary filing (Imperial Valley Press, June 20, 2026).',
        endorsements: 'Rep. Raul Ruiz (Oct 2025); primary rival Oscar Ortiz (June 2026) (Desert Review; Imperial Valley Press).',
        redFlags: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Obeso-Martinez', '●', 'Progressive Left voters back the nurse who puts health-care access and Medicaid first.'],
      [
        'EL',
        'Obeso-Martinez',
        '◐',
        'Establishment Liberals favor a majority-party member with Ruiz’s backing, but Gonzalez has a bipartisan-minded legislative record.',
        'An experience-first Establishment Liberal could back Gonzalez for his two years of lawmaking and committee work, giving up a Democratic vote in a supermajority.',
      ],
      ['DM', 'Obeso-Martinez', '●', 'Democratic Mainstays back the party’s nominee to win back a seat Democrats held for years.'],
      ['OL', 'Obeso-Martinez', '●', 'Outsider Left voters like a working nurse and small-city official over the incumbent.'],
      ['SS', 'Gonzalez', '○', 'Stressed Sideliners may stay with the visible incumbent who stresses disability services and veterans, though her health-care focus speaks to them.'],
      ['AR', 'Gonzalez', '●', 'Ambivalent Right voters value his pragmatic, bipartisan-leaning approach and business background.'],
      ['PR', 'Gonzalez', '●', 'Populist Right voters back the combat veteran who beat the Democratic establishment in 2024.'],
      ['CC', 'Gonzalez', '●', 'Committed Conservatives back the Republican incumbent and business owner.'],
      ['FF', 'Gonzalez', '●', 'Faith and Flag Conservatives back a Marine veteran and pastor.'],
    ]),
    counterArguments: [
      'CC (Gonzalez ●): But consider that a minority Republican has limited power over the budget, and Democrats out-voted Republicans in the primary.',
      'PL (Obeso-Martinez ●): But consider that Gonzalez’s record on in-home supportive services and disability care overlaps with progressive health priorities.',
    ],
  },
];
