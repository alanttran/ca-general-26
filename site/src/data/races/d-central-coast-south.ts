import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Statewide district sweep — southern Central Coast, Ventura County and the west San Fernando Valley:
 * U.S. House CA-24, CA-26, CA-32 (Prop 50 map) and Assembly AD-30, AD-37, AD-38, AD-42.
 * Finalists checked against the Secretary of State's June 2, 2026 Statement of Vote and its November 3, 2026
 * returns pages (api.sos.ca.gov/returns), Oct 9, 2026. Research as of Oct 9, 2026.
 */

const SOV_HOUSE = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/76-us-rep.pdf';
const SOV_ASSEMBLY = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/95-state-assembly.pdf';

const US_REP_LEGAL =
  'At least 25 years old, a U.S. citizen for at least 7 years, and an inhabitant of California when elected (U.S. Constitution art. I, section 2); two-year term.';

const US_REP_CRITERIA: QualificationCriterion[] = [
  { id: 'lawmaking', label: 'Lawmaking and policy experience', detail: 'The job is writing, amending and voting on federal law.' },
  { id: 'committee-budget', label: 'Committee and budget/appropriations work', detail: 'Most legislative work happens in committees that shape spending and oversight.' },
  { id: 'district-service', label: 'Constituent services and knowledge of the district', detail: 'Members run casework offices and carry local priorities to Washington.' },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Little becomes law without bipartisan or cross-chamber partners.' },
];

const US_REP_STAKES_1 =
  'A U.S. representative votes on federal taxes, health programs, immigration, defense, energy and infrastructure money, and oversight of the executive branch, and runs a casework office for veterans’ benefits, passports and federal agencies.';

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

const CAC = 'No verified current totals; see Cal-Access at https://cal-access.sos.ca.gov/ (as of Oct 9, 2026).';

const ASSEMBLY_STAKES_1 =
  'Assembly members write and vote on state laws and the state budget, serve two-year terms, and sit on committees that shape housing, health, schools, energy, criminal justice and taxes.';

export const RACES_D_CENTRAL_COAST_SOUTH: Race[] = [
  // ───────────────────────────── CA-24 ─────────────────────────────
  {
    id: 'us-rep-ca24',
    categoryId: 'federal',
    title: 'U.S. Representative, 24th District',
    tldrLabel: 'CA-24',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      US_REP_STAKES_1,
      'CA-24 runs from Cayucos through southern San Luis Obispo County, all of Santa Barbara County and the northern tip of Ventura County (San Luis Obispo Tribune). Cook rates it Solid Democratic. Local stakes include offshore oil off the Gaviota coast, Vandenberg Space Force Base and federal money for Highway 101.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic Rep. Salud Carbajal took 54.4% and Republican Bob Smith, a retired Navy commander, 35.9%, ahead of Democrat Sarah Bacon (7.5%) and Peace and Freedom’s Helena Pasquarella (2.3%) (Secretary of State Statement of Vote). Smith pitches himself as a nonpartisan problem-solver; no general-election polling is public.',
    ],
    readingLinks: [
      {
        label: 'Noozhawk — Meet the 4 candidates for the 24th District seat (May 2026)',
        url: 'https://www.noozhawk.com/?p=810183',
        summary: 'Primary-season profiles with each candidate’s priorities and the record Carbajal cites.',
      },
      {
        label: 'KEYT — 24th District race (June 2, 2026)',
        url: 'https://keyt.com/news/2026/06/02/24th-district-race-has-three-candidates-trying-to-unseat-carbajal/',
        summary: 'Carbajal on Sable Offshore, costs and federal cuts; Smith on a “common sense” campaign.',
      },
      { label: 'Secretary of State — June 2 Statement of Vote, U.S. House', url: SOV_HOUSE },
    ],
    candidates: [
      {
        id: 'salud-carbajal',
        photoSlug: 'salud-carbajal',
        name: 'Salud Carbajal',
        party: 'D',
        role: 'Member of Congress',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In the House since January 2017 after 12 years on the Santa Barbara County Board of Supervisors; sits on three committees.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since 2017; cites the Child Care Availability and Affordability Act and work on the Inflation Reduction Act (Noozhawk, May 2026).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Member of the Armed Services, Agriculture, and Transportation and Infrastructure committees (Noozhawk; San Luis Obispo Tribune).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Santa Barbara County supervisor 2005–2017; CenCal Health board member from 2005; secured federal money for Highway 101 widening (KEYT).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Member of the Problem Solvers Caucus and New Democrat Coalition (Wikipedia); says he helped write a bipartisan law funding Central Coast infrastructure.' },
          ],
        },
        bio: [
          'Carbajal emigrated from Mexico at age 5, worked summers as a farmworker, graduated from UC Santa Barbara and served eight years in the Marine Corps Reserve. He spent 12 years as a Santa Barbara County supervisor before winning the House seat in 2016.',
          'He is seeking a sixth term on affordability, opposing new offshore drilling including Sable Offshore’s Gaviota-coast production, and opposing the Trump administration’s immigration enforcement tactics.',
        ],
        recordVsChange:
          'Carbajal brings nearly a decade of seniority on Armed Services and Transportation, which matter for Vandenberg and Highway 101. Smith’s case is that Carbajal has been “invisible”; replacing him means trading that seniority for a first-term member with defense-engineering expertise.',
        scorecard: [
          { topic: 'Housing', position: '✓ Lists housing among the costs he would lower; no detailed federal housing plan found', comparison: 'Smith would deregulate housing approvals and expand homeownership.' },
          { topic: 'Climate', position: '✓✓ Leads local opposition to new offshore drilling; cites Inflation Reduction Act clean-energy spending', comparison: 'Smith wants reliable baseload power and questions the Morro Bay offshore wind project.' },
          { topic: 'Health care', position: '✓ Recognized by CenCal Health in June 2026 for Medi-Cal advocacy', comparison: 'Smith has no published health-care plan.' },
          { topic: 'Immigration', position: '✓ Opposes Trump’s enforcement tactics; wants immigration system reform', comparison: 'Smith would secure the border, remove violent offenders and repeal SB 54.' },
          { topic: 'Trump / House majority', position: '✓✓ Blames Trump’s tariffs and wars for costs; wants a Democratic House for oversight', comparison: 'Smith avoids national partisan themes and runs on “common sense.”' },
        ],
        money: 'About $1.65M raised for 2025–26 and $3.38M cash on hand as of June 30, 2026 (FEC).',
        endorsements: 'United Farm Workers, California Teachers Association, Santa Barbara and San Luis Obispo County Democratic Parties, Central Coast Labor Council (San Luis Obispo Tribune, April 2026).',
      },
      {
        id: 'bob-smith',
        name: 'Bob Smith',
        party: 'R',
        role: 'Defense Systems Engineer',
        campaignUrl: 'https://www.bobsmithforcongress.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Retired Navy commander and defense systems engineer running for office for the first time; no legislative or elected experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'Political newcomer; has not held elected office (campaign site; San Luis Obispo Tribune).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No budget or committee experience found; Navy weapons-systems work bears on defense issues.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Carpinteria resident; no local public office.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of legislative coalition work.' },
          ],
        },
        bio: [
          'Smith spent more than 26 years in the Navy, including combat deployments and advanced weapons systems work, and retired as a commander in 2024. He now works as a senior systems engineer for a defense contractor and lives in Carpinteria; his campaign says he was Navy Engineer of the Year in 2023.',
          'He calls Carbajal “invisible” and says California needs solutions, not “culture wars.”',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Deregulate housing approvals; expand homeownership for working families', comparison: 'Carbajal lists housing costs without a detailed federal plan.' },
          { topic: 'Climate', position: '~ Wants baseload power and water storage; questions the Morro Bay offshore wind project', comparison: 'Carbajal backs clean-energy spending and opposes new offshore drilling.' },
          { topic: 'Health care', position: '? No detailed position found', comparison: 'Carbajal was recognized for Medi-Cal advocacy.' },
          { topic: 'Immigration', position: '✓ Secure the border, remove violent offenders, repeal SB 54, modernize farm visas', comparison: 'Carbajal opposes Trump’s enforcement tactics.' },
          { topic: 'Trump / House majority', position: '~ Would add to the Republican conference; avoids national partisan framing', comparison: 'Carbajal wants a Democratic House to oversee the administration.' },
        ],
        money: 'About $203K raised and $47K cash on hand as of June 30, 2026 (FEC).',
        endorsements: 'Santa Barbara and San Luis Obispo County Republican Parties (San Luis Obispo Tribune, April 2026).',
        notes: ['Noozhawk (May 2026) described him as rising to admiral after 28 years; his campaign and the Tribune say he retired as a commander after 26+ years.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Carbajal', '●', 'Leftward Progressives back the Democrat fighting new offshore drilling and the administration’s immigration raids, with farmworker and teacher union support.'],
      ['LL', 'Carbajal', '●', 'Loyal Liberals value a five-term member with seniority on Armed Services and Transportation, party and labor endorsements, and a record of bringing Highway 101 money home.'],
      ['LO', 'Carbajal', '◐', 'Left-Out Left voters relate to Carbajal’s farmworker roots and United Farm Workers backing, though Carbajal is a conventional New Democrat whom Smith calls “invisible.”'],
      ['OO', 'Carbajal', '◐', 'Order and Opportunity Left voters like Carbajal’s Medi-Cal and child-care work, though Smith’s plan to remove violent offenders speaks to their concern for order.'],
      ['TM', 'Carbajal', '○', 'Tuned-Out Middle voters get Carbajal’s Medi-Cal and child-care help, though Smith’s promise to expand homeownership could also ease their costs.'],
      ['PP', 'Smith', '◐', 'Pragmatic and Polite Right voters are drawn to a retired Navy commander who rejects “culture wars” and runs as a common-sense problem-solver, though Smith has never held office.', 'Pragmatic and Polite Right voters who put experience first could back Carbajal, a former county supervisor in the bipartisan Problem Solvers Caucus, giving up a Republican vote and Smith’s border and deregulation agenda.'],
      ['UR', 'Smith', '●', 'Unconventional Right voters back the plain-spoken veteran who would secure the border, remove violent offenders and repeal California’s sanctuary law without culture-war rhetoric.'],
      ['FC', 'Smith', '●', 'Faith First Conservatives back the combat veteran who would secure the border and strengthen Vandenberg and Naval Base Ventura County.'],
      ['NA', 'Smith', '◐', 'No Apologies Right voters back Smith’s border agenda and repeal of SB 54, though Smith’s nonpartisan, no-culture-wars tone is softer than the fighters they prefer.', 'No Apologies Right voters who put experience first could back Carbajal for his Armed Services seniority over Vandenberg, giving up a Republican vote and accepting his opposition to the administration’s immigration enforcement.'],
    ]),
    counterArguments: [
      'PP (Smith ◐): But consider that Smith has never held office and has published little on health care, because Carbajal already does bipartisan work in the Problem Solvers Caucus.',
      'LL (Carbajal ●): But consider that Carbajal’s 54% primary showing was below his usual margins, because his platform offers few specifics on housing.',
    ],
  },

  // ───────────────────────────── CA-26 ─────────────────────────────
  {
    id: 'us-rep-ca26',
    categoryId: 'federal',
    title: 'U.S. Representative, 26th District',
    tldrLabel: 'CA-26',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      US_REP_STAKES_1,
      'Rep. Julia Brownley is retiring. CA-26 centers on Ventura County, including Oxnard, Camarillo, Thousand Oaks, Moorpark and Santa Paula, with a small Los Angeles County portion. Cook rates it Solid Democratic; the choice is between a 12-year Assembly member and a first-time Republican candidate.',
    ],
    introParagraphs: [
      'Nine candidates ran on June 2. Democratic Assemblymember Jacqui Irwin took 41.3% and Republican pastor Sam Gallucci 20.9%, ahead of Democrat Chris Espinosa (10.3%) and Republican Michael Koslow (9.6%) (Secretary of State Statement of Vote). Brownley endorsed Irwin in January. No general-election polling is public.',
    ],
    readingLinks: [
      {
        label: 'Ojai Valley News — Brownley endorses Irwin (Jan 2026)',
        url: 'https://www.ojaivalleynews.com/news/county/rep-brownley-endorses-assemblymember-jacqui-irwin-for-congress/article_718fd8c6-5d69-4445-b8ab-f342d7cd3d51.html',
        summary: 'Irwin’s background and priorities as she entered the race.',
      },
      {
        label: 'KCLU — June primary sets stage in the Tri-Counties',
        url: 'https://www.kclu.org/2026-06-03/june-primary-election-sets-stage-for-congressional-state-assembly-races-in-the-tri-counties',
        summary: 'Primary-night results for regional House and Assembly races.',
      },
      { label: 'Secretary of State — June 2 Statement of Vote, U.S. House', url: SOV_HOUSE },
    ],
    candidates: [
      {
        id: 'jacqui-irwin',
        photoSlug: 'jacqui-irwin',
        name: 'Jacqui Irwin',
        party: 'D',
        role: 'California State Assemblymember',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2014 who chairs Revenue and Taxation; earlier a Thousand Oaks councilmember and two-term mayor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since 2014; authored laws strengthening gun violence restraining orders after the Borderline shooting and requiring security standards for connected devices (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs Assembly Revenue and Taxation; chaired Military and Veterans Affairs 2014–2021.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Thousand Oaks council from 2004, mayor from 2008; helped secure Oxnard grade-separation and sewer funding.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Many bills signed across 12 years, including a charity-platform law developed with Attorney General Bonta.' },
          ],
        },
        bio: [
          'A former engineer at Johns Hopkins Applied Physics Lab and Teledyne, Irwin served on the Thousand Oaks City Council from 2004, including two terms as mayor, and has represented the Conejo Valley area in the Assembly since 2014.',
          'She chairs Revenue and Taxation and has focused on cybersecurity, veterans and gun-violence prevention. She says she is running to fight “Trump’s assault on democracy” while prioritizing public safety and affordability.',
        ],
        scorecard: [
          { topic: 'Housing', position: '? Cites affordability as a priority; no federal housing plan found', comparison: 'Gallucci has no published housing plan.' },
          { topic: 'Climate', position: '✓ Authored a 50% recycled-content mandate for plastic bottles by 2030', comparison: 'Gallucci has no verified climate position.' },
          { topic: 'Health care', position: '? No detailed federal position found', comparison: 'Gallucci has no published health-care position.' },
          { topic: 'Immigration', position: '? No detailed position found', comparison: 'Gallucci lists securing the border as a priority.' },
          { topic: 'Trump / House majority', position: '✓✓ Running to counter Trump; would add to a Democratic majority', comparison: 'Gallucci would add to the Republican conference.' },
        ],
        money: 'About $822K raised and $295K cash on hand as of June 30, 2026 (FEC).',
        endorsements: 'Rep. Julia Brownley (Jan 2026, Ojai Valley News).',
        notes: [
          'Critics noted her husband is an executive at Ring when she amended the California Consumer Privacy Act; Irwin said she consults the Assembly ethics officer on potential conflicts (Wikipedia).',
        ],
      },
      {
        id: 'sam-gallucci',
        name: 'Sam Gallucci',
        party: 'R',
        role: 'Business Executive/Pastor',
        campaignUrl: 'https://samgallucci.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Oxnard pastor and former technology executive who founded local nonprofits; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'Has not held elected office; ran in the 2021 governor recall, receiving 18,134 votes (JoinCalifornia).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public budget or committee experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Leads a church in Oxnard and founded Gabriel’s House and other local nonprofits (iVoterGuide).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of legislative coalition work.' },
          ],
        },
        bio: [
          'Gallucci is senior pastor of a church in Oxnard and a former business and technology executive; he founded the nonprofit Gabriel’s House. He ran for governor in the 2021 recall election.',
          'His campaign slogan is “Faith. Family. Freedom. Future.” and his stated priorities include securing the border, public safety and parental rights.',
        ],
        scorecard: [
          { topic: 'Housing', position: '? No published housing plan', comparison: 'Irwin cites affordability without a federal plan.' },
          { topic: 'Climate', position: '? No verified position found', comparison: 'Irwin authored a recycled-plastic mandate.' },
          { topic: 'Health care', position: '? No published position', comparison: 'Irwin has no detailed federal position either.' },
          { topic: 'Immigration', position: '✓ Lists securing the border as a top priority', comparison: 'Irwin has no detailed immigration position.' },
          { topic: 'Trump / House majority', position: '✓ Would add to the Republican majority', comparison: 'Irwin is running to counter Trump.' },
        ],
        money: 'About $377K raised and $34K cash on hand as of June 30, 2026 (FEC).',
        endorsements: 'Listed as conservative by the California Republican Party, Ventura County Republican Party and Reform California (iVoterGuide, Oct 2026); no full endorsement list verified.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Irwin', '◐', 'Leftward Progressives back the Democrat running to counter Trump who wrote gun-violence restraining-order and recycling laws, though Irwin is a moderate party insider.'],
      ['LL', 'Irwin', '●', 'Loyal Liberals value a 12-year legislator and former mayor endorsed by the retiring Democratic incumbent.'],
      ['LO', 'Irwin', '◐', 'Left-Out Left voters may distrust a longtime insider whose husband’s tech job drew conflict questions, but Gallucci’s faith-and-parental-rights campaign fits them far less.'],
      ['OO', 'Irwin', '●', 'Order and Opportunity Left voters want public safety and affordability, and Irwin wrote gun-violence prevention laws after the Borderline shooting and championed veterans.'],
      ['TM', 'Irwin', '○', 'Tuned-Out Middle voters get an experienced local figure focused on affordability, though neither candidate offers a detailed cost-of-living plan.'],
      ['PP', 'Irwin', '◐', 'Pragmatic and Polite Right voters prize steady competence, and Irwin chairs Revenue and Taxation, while Gallucci, a 2021 recall candidate, has offered few specifics.'],
      ['UR', 'Gallucci', '◐', 'Unconventional Right voters back the Republican who puts border security and public safety first, though Gallucci’s faith-centered campaign matters less to them.', 'Unconventional Right voters who put experience first could back Irwin, a 12-year legislator who chairs Revenue and Taxation, giving up a Republican vote and Gallucci’s border priorities.'],
      ['FC', 'Gallucci', '●', 'Faith First Conservatives back a pastor running on faith, family and parental rights.'],
      ['NA', 'Gallucci', '●', 'No Apologies Right voters back the Republican outsider promising to secure the border against a Democrat running on fighting Trump.'],
    ]),
    counterArguments: [
      'PP (Irwin ◐): But consider that Gallucci founded local nonprofits and puts public safety first, because a vote for Irwin also adds to a Democratic House majority.',
      'UR (Gallucci ◐): But consider that Gallucci has no office experience and has published few policy specifics, because Irwin has a long legislative record.',
      'LL (Irwin ●): But consider that Irwin has published little on federal health care, housing or immigration so far, because those are central House issues.',
    ],
  },

  // ───────────────────────────── CA-32 ─────────────────────────────
  {
    id: 'us-rep-ca32',
    categoryId: 'federal',
    title: 'U.S. Representative, 32nd District',
    tldrLabel: 'CA-32',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      US_REP_STAKES_1,
      'CA-32 spans the west and south San Fernando Valley, Malibu, Pacific Palisades and Brentwood, with a sliver of Ventura County. Cook rates it Solid Democratic. Wildfire rebuilding after the 2025 Palisades fire and financial regulation, where Sherman is a senior Democrat, are the local stakes.',
    ],
    introParagraphs: [
      'Rep. Brad Sherman took 36.8% on June 2 and Republican Larry Thompson 32.7%, ahead of Democrat Jake Levine (15.2%), a former Biden administration official (Secretary of State Statement of Vote). With most Democratic votes split, Sherman is heavily favored; he beat Thompson in 2024 with 66.2%.',
    ],
    readingLinks: [
      {
        label: 'TheWrap — Larry Thompson launches campaign (Aug 2025)',
        url: 'https://www.thewrap.com/larry-thompson-republican-congressional-campaign-california/',
        summary: 'Thompson’s 32-point plan, including crypto, above-ground transit and fire rebuilding.',
      },
      { label: 'Secretary of State — June 2 Statement of Vote, U.S. House', url: SOV_HOUSE },
    ],
    candidates: [
      {
        id: 'brad-sherman',
        photoSlug: 'brad-sherman',
        name: 'Brad Sherman',
        party: 'D',
        role: 'United States Congressman/Dad',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In the House since 1997 and ranking member of the Capital Markets subcommittee; earlier chaired the state Board of Equalization.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since January 1997 (15th term sought); sponsored bills on FHA loan limits and U.S.-Israel energy cooperation (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Financial Services (ranking member, Capital Markets subcommittee) and Foreign Affairs in the 119th Congress.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented San Fernando Valley districts under several numbers since 1997.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Long tenure and senior committee posts; many signature efforts, such as a 2026 oil windfall tax, have not become law.' },
          ],
        },
        bio: [
          'A CPA and tax lawyer, Sherman served on the state Board of Equalization from 1991 to 1997, chairing it from 1991 to 1995, and has been in the House since 1997. He is the top Democrat on the Capital Markets subcommittee and a longtime critic of cryptocurrency.',
          'In 2026 he introduced a 100% windfall-profits tax on crude oil above $75 a barrel during the Iran war (Wikipedia).',
        ],
        recordVsChange:
          'Sherman has three decades of seniority and a senior seat on financial regulation. The case for change, made by Levine in the primary and Thompson now, is generational; Thompson would start with no legislative experience.',
        scorecard: [
          { topic: 'Housing', position: '✓ Sponsored higher FHA loan limits for high-cost areas', comparison: 'Thompson proposes partnering with Rick Caruso to rebuild fire areas.' },
          { topic: 'Climate', position: '~ No signature climate bill found; proposed an oil windfall-profits tax', comparison: 'Thompson proposes an above-ground transit system.' },
          { topic: 'Health care', position: '? No detailed 2026 position found', comparison: 'Thompson has no published health-care position.' },
          { topic: 'Immigration', position: '? No detailed 2026 position found', comparison: 'Thompson criticized “open borders” in 2024.' },
          { topic: 'Trump / House majority', position: '✓✓ Filed impeachment articles against Trump in 2017; clashed with him over Palisades recovery', comparison: 'Thompson would add to the Republican conference and decries “one-party rule.”' },
        ],
        money: 'About $2.51M raised for 2025–26 and $2.67M cash on hand as of June 30, 2026 (FEC).',
        endorsements: 'No complete 2026 list verified.',
        notes: [
          'In 2017 former aides described a harsh office environment; Sherman acknowledged being a “demanding boss” (Wikipedia). No formal finding was made.',
        ],
      },
      {
        id: 'larry-thompson',
        photoSlug: 'larry-thompson',
        name: 'Larry Thompson',
        party: 'R',
        role: 'Attorney/Film Producer',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Entertainment lawyer, talent manager and producer; has run for Congress twice without holding office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'Never held public office; lost CA-37 in 2020 as an independent and CA-32 in 2024 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public budget or committee experience found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No local public role found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of legislative coalition work.' },
          ],
        },
        bio: [
          'A Mississippi-born lawyer who started as in-house counsel at Capitol Records, Thompson co-owned New World Pictures and runs a Los Angeles talent-management and production company whose credits include “Amish Grace” and “Liz & Dick.”',
          'His 32-point plan calls for embracing cryptocurrency, an above-ground transit system, rebuilding fire areas with developer Rick Caruso and ending “one-party rule.”',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Rebuild Malibu and the Palisades with Rick Caruso', comparison: 'Sherman sponsored higher FHA loan limits.' },
          { topic: 'Climate', position: '? No climate position found; proposes above-ground transit', comparison: 'Sherman proposed an oil windfall-profits tax.' },
          { topic: 'Health care', position: '? No published position', comparison: 'Sherman has no detailed 2026 position found.' },
          { topic: 'Immigration', position: '✗ Criticized “open borders” in his 2024 campaign', comparison: 'Sherman has no detailed 2026 position found.' },
          { topic: 'Trump / House majority', position: '✓ Would add to the Republican majority; pitches bipartisanship', comparison: 'Sherman filed impeachment articles against Trump in 2017.' },
        ],
        money: 'About $53K raised and under $1K cash on hand as of Sept 30, 2026 (FEC).',
        endorsements: 'California Republican Party endorsed him unanimously for the 2024 race (campaign release); 2026 list not verified.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Sherman', '●', 'Leftward Progressives back the Democrat who filed impeachment articles against Trump and wants a 100% windfall-profits tax on oil companies.'],
      ['LL', 'Sherman', '●', 'Loyal Liberals value three decades of seniority and a top Democratic post on financial regulation.'],
      ['LO', 'Sherman', '◐', 'Left-Out Left voters who backed a generational change in the primary are left with Sherman, whose oil windfall tax at least targets corporate profits.'],
      ['OO', 'Sherman', '◐', 'Order and Opportunity Left voters like Sherman’s higher FHA loan limits for would-be homeowners, though Thompson’s fire-rebuilding pitch also speaks to opportunity.'],
      ['TM', 'Sherman', '○', 'Tuned-Out Middle voters get a CPA focused on gas-price windfalls and home loans, though Thompson’s rebuilding plan may appeal to fire-affected voters.'],
      ['PP', 'Sherman', '◐', 'Pragmatic and Polite Right voters prefer a seasoned CPA and financial regulator to a thinly funded challenger whose plan leans on cryptocurrency.'],
      ['UR', 'Thompson', '◐', 'Unconventional Right voters like Thompson’s pro-crypto, anti-“one-party rule” pitch and his criticism of open borders, though Thompson’s plan is thin.', 'Unconventional Right voters who put experience first could back Sherman, a CPA and three-decade member who leads Democrats on capital markets, giving up a Republican vote and Thompson’s pro-crypto stance.'],
      ['FC', 'Thompson', '●', 'Faith First Conservatives back the Republican, a producer of faith-themed films, over a Democrat who tried to impeach Trump.'],
      ['NA', 'Thompson', '●', 'No Apologies Right voters back the Republican running against “one-party rule” and open borders.'],
    ]),
    counterArguments: [
      'LL (Sherman ●): But consider that Sherman has served since 1997 and a third of primary voters chose other Democrats, because that suggests appetite for new leadership.',
      'UR (Thompson ◐): But consider that Thompson has raised little, has no office experience and lost this matchup by more than 30 points in 2024, because a viable challenge needs more.',
      'PP (Sherman ◐): But consider that former aides described Sherman as a harsh boss in 2017, because Pragmatic and Polite Right voters weigh civility; no formal finding was made.',
    ],
  },

  // ───────────────────────────── AD-30 ─────────────────────────────
  {
    id: 'assembly-ad30',
    categoryId: 'state-leg',
    title: 'State Assembly, District 30',
    tldrLabel: 'AD-30',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-30 covers about 500,000 people on the coast of San Luis Obispo, Monterey and Santa Cruz counties, with ocean, energy and farm issues.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'AD-30 runs along much of the Central Coast; more than half its voters are in San Luis Obispo County (KSBY). Oil and offshore energy, health-care workforce shortages, housing costs and how schools handle transgender students are the dividing lines.',
    ],
    introParagraphs: [
      'Democratic Assemblymember Dawn Addis took 54.8% on June 2; Republican Shannon Kessler, founder of Save Girls’ Sports Central Coast, took 35.9%, and Democrat Susannah Brown 9.3% (Secretary of State Statement of Vote). Addis, seeking a third term, won 62.4% in 2024. No public polling is available.',
    ],
    readingLinks: [
      {
        label: 'KSBY — Addis, Kessler outline priorities (Oct 2026)',
        url: 'https://www.ksby.com/san-luis-obispo/addis-kessler-outline-priorities-as-race-for-california-assembly-district-30-enters-final-weeks',
        summary: 'Side-by-side of their views on health care, immigration, energy and education.',
      },
      { label: 'Secretary of State — June 2 Statement of Vote, Assembly', url: SOV_ASSEMBLY },
    ],
    candidates: [
      {
        id: 'dawn-addis',
        photoSlug: 'dawn-addis',
        name: 'Dawn Addis',
        party: 'D',
        role: 'State Assemblymember/Teacher',
        campaignUrl: 'https://a30.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Two-term Assembly member who chairs the Budget Subcommittee on Health; earlier a Morro Bay councilmember and longtime teacher.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 2022; laws include AB 452 (2023, childhood sexual abuse claims) and AB 3233 (2024, local authority over oil and gas) (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs Assembly Budget Subcommittee on Health, overseeing about $200B (official bio).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Morro Bay City Council 2019–2022; founding chair of the Central Coast legislative caucus.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Helped craft the 2024 climate bond; Assistant Majority Leader for Policy and Research from 2023.' },
          ],
        },
        bio: [
          'Addis taught special education in San Luis Coastal Unified for about 20 years, served on the Morro Bay council from 2019 to 2022 and won the Assembly seat in 2022. She chairs the health budget subcommittee and sits on the Ocean Protection Council.',
          'She calls affordability her top priority and highlights lowering drug prices, a state-funded study of a Central Coast medical school, and environmental protection.',
        ],
        recordVsChange:
          'Addis holds a budget gavel over health spending and a record of signed bills; Kessler offers a sharp change on oil, school gender policies and immigration but no legislative experience.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ AB 358 streamlined community college student housing', comparison: 'Kessler blames state regulations for high housing costs.' },
          { topic: 'Climate', position: '✓✓ Restored local control over oil and gas operations; helped craft the 2024 climate bond', comparison: 'Kessler supports expanding oil production.' },
          { topic: 'Education', position: '✓ Chairs the select committee on students with disabilities; student data privacy', comparison: 'Kessler wants parental notification and girls’ sports limited by sex at birth.' },
          { topic: 'Public safety', position: '~ Backed letting people wrongly detained by immigration officers sue them', comparison: 'Kessler, from a law-enforcement family, pledges to “back the blue.”' },
          { topic: 'Caucus / ideology', position: '✓ Progressive Democrat; formerly on the Planned Parenthood Central Coast Action Fund board', comparison: 'Kessler is a conservative Republican.' },
        ],
        money: CAC,
        endorsements: 'No complete list verified.',
      },
      {
        id: 'shannon-kessler',
        name: 'Shannon Kessler',
        party: 'R',
        role: 'Children’s Advocate/Businesswoman',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Arroyo Grande small-business owner and advocacy-group founder; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'Has not held public office.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No budget or committee experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Arroyo Grande resident; founded Save Girls’ Sports Central Coast (Lookout, KSBY).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of legislative coalition work.' },
          ],
        },
        bio: [
          'Kessler is a small-business owner, mother and grandmother from Arroyo Grande who founded Save Girls’ Sports Central Coast, which opposes transgender athletes in girls’ sports. She says she comes from a law-enforcement family.',
          'She campaigns on public safety, affordability and accountability, and criticizes Addis’s record on school safety and parental notification.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Says state regulations drive up housing costs; backs home ownership', comparison: 'Addis streamlined student housing approvals.' },
          { topic: 'Climate', position: '✗ Supports expanding oil production and more water storage', comparison: 'Addis restored local control over oil and gas.' },
          { topic: 'Education', position: '✓ Parental notification; keep girls’ sports for girls; supports public schools', comparison: 'Addis focuses on special education and student privacy.' },
          { topic: 'Public safety', position: '✓✓ “I will absolutely back the blue”; immigration through legal pathways', comparison: 'Addis backed suits against officers who wrongly detain people.' },
          { topic: 'Caucus / ideology', position: '✓ Conservative Republican', comparison: 'Addis is a progressive Democrat.' },
        ],
        money: CAC,
        endorsements: 'No complete list verified.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Addis', '●', 'Leftward Progressives back the Democrat who restored local control over oil drilling and protects immigrants from wrongful detention.'],
      ['LL', 'Addis', '●', 'Loyal Liberals value a budget-subcommittee chair with a record of signed bills and a regional caucus Addis founded.'],
      ['LO', 'Addis', '◐', 'Left-Out Left voters want the lower drug prices Addis stresses, though Addis is now an Assembly insider.'],
      ['OO', 'Addis / Kessler', '=', 'Order and Opportunity Left voters weigh economic help against public-safety and social views: if health costs matter most, Addis, who chairs the health budget subcommittee and works on drug prices; if backing police and limiting girls’ sports by sex at birth matter more, Kessler, who pledges both.'],
      ['TM', 'Addis / Kessler', '=', 'Tuned-Out Middle voters weigh health costs against housing costs and school sports: if health costs matter most, Addis, whose drug-price and medical-school work targets them; if housing costs and girls’ sports matter more, Kessler, who blames regulations for housing costs and shares their view on sports, though she has no detailed cost plan.'],
      ['PP', 'Kessler', '○', 'Pragmatic and Polite Right voters share Kessler’s support for police and sex-based school sports, though Kessler’s activist group is more combative than they like.', 'Pragmatic and Polite Right voters who put experience first could back Addis, who chairs the health budget subcommittee and founded a Central Coast caucus, giving up Kessler’s pro-oil and parental-notification agenda.'],
      ['UR', 'Kessler', '●', 'Unconventional Right voters back the Republican who would expand oil production, cut regulation and back police.'],
      ['FC', 'Kessler', '●', 'Faith First Conservatives back the candidate championing parental notification and sex-based school sports against a former Planned Parenthood board member.'],
      ['NA', 'Kessler', '●', 'No Apologies Right voters back the Republican who would expand oil production and fight transgender participation in girls’ sports.'],
    ]),
    counterArguments: [
      'PP (Kessler ○): But consider that Kessler has no legislative experience, because Addis controls a key budget subcommittee for the region.',
    ],
  },

  // ───────────────────────────── AD-37 ─────────────────────────────
  {
    id: 'assembly-ad37',
    categoryId: 'state-leg',
    title: 'State Assembly, District 37',
    tldrLabel: 'AD-37',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-37 covers all of Santa Barbara County and a small part of southern San Luis Obispo County, including oil, farm and university communities.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'AD-37 covers Santa Barbara County and part of southern San Luis Obispo County (KSBY). Gasoline prices, the fight over Sable Offshore’s oil restart, housing costs and school parental-notification rules separate the candidates.',
    ],
    introParagraphs: [
      'In a 2024 rematch, Democratic Assemblymember Gregg Hart took 62.5% and Republican Sari Domingues 37.5% in the two-candidate June 2 primary (Secretary of State Statement of Vote). Hart beat Domingues 60.7% to 39.3% in 2024. No public polling is available.',
    ],
    readingLinks: [
      {
        label: 'KSBY — Meet the candidates for Assembly District 37',
        url: 'https://ksby.com/news/national-politics/america-votes/meet-the-candidates-running-for-assembly-district-37',
        summary: 'Both candidates on cost of living, health care, education and gas supply.',
      },
      {
        label: 'Noozhawk — Hart holds strong lead (June 2, 2026)',
        url: 'https://www.noozhawk.com/?p=818663',
        summary: 'Primary-night results and background on both candidates.',
      },
      { label: 'Secretary of State — June 2 Statement of Vote, Assembly', url: SOV_ASSEMBLY },
    ],
    candidates: [
      {
        id: 'gregg-hart',
        photoSlug: 'gregg-hart',
        name: 'Gregg Hart',
        party: 'D',
        role: 'State Assemblymember',
        campaignUrl: 'https://a37.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2022 after decades in Santa Barbara local government, including the city council, county Board of Supervisors and Coastal Commission.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 2022; authored a law requiring oil companies to keep minimum gasoline supplies (KSBY).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Committee assignments listed on his Assembly site; no chair post verified.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Santa Barbara planning commissioner, councilmember, county supervisor and Coastal Commissioner over 30 years (official bio).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Gasoline-supply law enacted; former deputy director of the regional transportation agency, working on Highway 101 widening.' },
          ],
        },
        bio: [
          'A Santa Barbara native, Hart started as a legislative aide to Assemblyman Jack O’Connell, ran the regional Traffic Solutions program and was deputy director of the Santa Barbara County Association of Governments. He served on the city council, the Coastal Commission and the county Board of Supervisors, and owned a preschool for 20 years.',
          'He says cost of living is voters’ top concern and plays a lead role in Sacramento against Sable Offshore.',
        ],
        recordVsChange:
          'Hart’s gasoline-supply law and deep local ties are the case for continuity; Domingues offers a conservative break on schools and health care without a legislative record.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Working on affordable housing; long record on Highway 101 and rail', comparison: 'Domingues has no published housing plan.' },
          { topic: 'Climate', position: '✓✓ Leads Sacramento opposition to Sable Offshore; Progressive Caucus member', comparison: 'Domingues has no published climate position.' },
          { topic: 'Education', position: '? No distinct 2026 education agenda found', comparison: 'Domingues would reverse AB 1955 and require parental notification.' },
          { topic: 'Public safety', position: '? No distinctive public-safety platform found', comparison: 'Domingues pledges to back police and fight crime.' },
          { topic: 'Cost of living', position: '~ Says he has lowered drug prices; gas-supply law aims to curb price spikes', comparison: 'Domingues favors private insurance competition to cut health costs.' },
        ],
        money: CAC,
        endorsements: 'No complete list verified.',
      },
      {
        id: 'sari-domingues',
        name: 'Sari Domingues',
        party: 'R',
        role: 'Retired Business Analyst',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Retired business analyst from Santa Maria; second run for this seat, no elected experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'Has not held public office; lost this seat in 2024 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No budget or committee experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Santa Maria native; founded a Santa Barbara County Moms for Liberty chapter in 2023 (Noozhawk).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of legislative coalition work.' },
          ],
        },
        bio: [
          'Domingues is a Santa Maria native and retired business analyst who founded a Santa Barbara County chapter of Moms for Liberty in 2023. She ran against Hart in 2024.',
          'Her priorities are public safety, the economy, health care and education; she says parents should be notified about “everything” involving their child.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? No published housing plan', comparison: 'Hart is working on affordable housing.' },
          { topic: 'Climate', position: '? No published position', comparison: 'Hart opposes Sable Offshore’s oil restart.' },
          { topic: 'Education', position: '✓✓ Reverse AB 1955; full parental notification', comparison: 'Hart has no distinct 2026 education agenda found.' },
          { topic: 'Public safety', position: '✓ Back law enforcement and first responders', comparison: 'Hart has no distinctive public-safety platform found.' },
          { topic: 'Cost of living', position: '~ Favors private insurance competition to lower health costs', comparison: 'Hart cites drug-price and gas-supply laws.' },
        ],
        money: CAC,
        endorsements: 'No complete list verified.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Hart', '●', 'Leftward Progressives back the Progressive Caucus member leading the fight against Sable Offshore.'],
      ['LL', 'Hart', '●', 'Loyal Liberals value Hart’s 30 years in local government and an enacted gasoline-supply law.'],
      ['LO', 'Hart', '◐', 'Left-Out Left voters may see Hart as a career insider, but Hart’s gas-supply law takes on oil companies on prices.'],
      ['OO', 'Hart', '◐', 'Order and Opportunity Left voters like Hart’s work on gas prices and Highway 101, though Domingues’s pledge to back police appeals to them.'],
      ['TM', 'Hart', '○', 'Tuned-Out Middle voters worried about gas prices get Hart’s supply law, though Domingues also runs on cost of living.'],
      ['PP', 'Hart', '○', 'Pragmatic and Polite Right voters favor Hart’s long, steady local record over a challenger who founded a Moms for Liberty chapter and wants to reverse AB 1955.'],
      ['UR', 'Domingues', '◐', 'Unconventional Right voters back the Republican who wants market-based health care, backing for police and full parental notification.', 'Unconventional Right voters who put experience first could back Hart, a former county supervisor whose gas-supply law targets price spikes, giving up a Republican vote and Domingues’s parental-notification agenda.'],
      ['FC', 'Domingues', '●', 'Faith First Conservatives back the candidate who says parents must be told “everything” about their children at school.'],
      ['NA', 'Domingues', '●', 'No Apologies Right voters back the Moms for Liberty founder who would reverse AB 1955.'],
    ]),
    counterArguments: [
      'PP (Hart ○): But consider that Domingues’s support for police and parental notification matches many Pragmatic and Polite Right voters’ views, because Hart has published few specifics on education.',
      'UR (Domingues ◐): But consider that Domingues has no office experience and lost to Hart by more than 20 points in 2024, because experience matters in a minority-party seat.',
    ],
  },

  // ───────────────────────────── AD-38 ─────────────────────────────
  {
    id: 'assembly-ad38',
    categoryId: 'state-leg',
    title: 'State Assembly, District 38',
    tldrLabel: 'AD-38',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-38 covers western Ventura County, including Ventura, Oxnard, Port Hueneme, Santa Paula and Ojai-area farm communities.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'AD-38 covers western Ventura County. This is a Democrat-vs-Democrat runoff: a veteran environmental legislator who chairs the budget panel on climate and energy against a younger city clerk running on affordability and “new leadership.”',
    ],
    introParagraphs: [
      'Only two candidates filed. Democratic Assemblymember Steve Bennett took 69.4% on June 2 and Ventura City Clerk Michael MacDonald, also a Democrat, 30.6% (Secretary of State Statement of Vote). Bennett, first elected in 2020, won 63.4% in 2024. No public polling is available.',
    ],
    readingLinks: [
      {
        label: 'BallotReady — Michael MacDonald profile',
        url: 'https://www.ballotready.org/people/michael-macdonald-51b628ac-2340-40af-9c33-57d83401a62f',
        summary: 'Work history and stated positions on housing, the economy and government reform.',
      },
      { label: 'Secretary of State — June 2 Statement of Vote, Assembly', url: SOV_ASSEMBLY },
    ],
    candidates: [
      {
        id: 'steve-bennett',
        photoSlug: 'steve-bennett',
        name: 'Steve Bennett',
        party: 'D',
        role: 'Member of the Assembly, 38th District',
        campaignUrl: 'https://a38.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2020 who chairs the budget subcommittee on climate, energy and transportation; 20 years a county supervisor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly since Dec 2020; authored the 2024 octopus-farming ban signed by Newsom (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs Budget Subcommittee 4 (Climate Crisis, Resources, Energy and Transportation) and the hydrogen-economy select committee (official bio).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Ventura City Council 1993–1997; Ventura County supervisor 2000–2020; co-authored the SOAR farmland initiatives.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Bills signed into law; co-authored a county farmworker resource program as supervisor.' },
          ],
        },
        bio: [
          'A former high school economics and history teacher, Bennett served on the Ventura City Council in the 1990s, where he co-authored the SOAR open-space initiatives, and was a Ventura County supervisor from 2000 to 2020.',
          'In the Assembly he chairs the budget subcommittee on climate, energy and transportation and focuses on renewable-energy storage, wildfire preparedness and water. He is a Progressive Caucus member.',
        ],
        recordVsChange:
          'Bennett controls a budget panel over climate and energy spending and has decades of local experience; MacDonald argues for a generational change and a more business-friendly focus but has never held a legislative seat.',
        scorecard: [
          { topic: 'Housing & transit', position: '~ SOAR author; long favored limits on sprawl', comparison: 'MacDonald wants more housing supply and modernized building rules.' },
          { topic: 'Climate', position: '✓✓ Chairs the climate-energy budget panel; renewable storage focus', comparison: 'MacDonald pledges to confront climate change without a detailed plan.' },
          { topic: 'Education', position: '✓ More classroom money, early childhood and career education', comparison: 'MacDonald has no detailed education plan.' },
          { topic: 'Public safety', position: '? No distinctive 2026 platform found', comparison: 'MacDonald has no detailed public-safety plan.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive Caucus member; campaign-finance reformer', comparison: 'MacDonald is backed by the California Association of Realtors.' },
        ],
        money: CAC,
        endorsements: 'No complete list verified.',
      },
      {
        id: 'michael-macdonald',
        name: 'Michael MacDonald',
        party: 'D',
        role: 'City Clerk',
        campaignUrl: 'https://michaelmacdonaldforassembly.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Ventura’s city clerk since 2022 and a former state Senate district staffer; no legislative office held.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'State Senate district representative and office manager, 2015–2019 (BallotReady).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No budget or committee role found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Ventura City Clerk since 2022; earlier assistant clerk in Port Hueneme; modernized Ventura records and e-filing.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of legislative coalition work.' },
          ],
        },
        bio: [
          'MacDonald has been Ventura’s city clerk since 2022 and a senior adviser at the Regional Government Services Authority; before that he was Berkeley’s assistant city clerk and a state Senate district staffer (BallotReady).',
          'He says he is “not a career politician” and runs on affordability, housing supply, stabilizing the insurance market and climate.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ More housing supply and modernized construction rules', comparison: 'Bennett is best known for open-space limits on sprawl.' },
          { topic: 'Climate', position: '✓ Pledges to confront climate change; no detailed plan', comparison: 'Bennett chairs the climate-energy budget panel.' },
          { topic: 'Education', position: '? No detailed plan found', comparison: 'Bennett wants more classroom funding.' },
          { topic: 'Public safety', position: '? No detailed plan found', comparison: 'Bennett has no distinctive 2026 platform found.' },
          { topic: 'Caucus / ideology', position: '~ Business-friendly Democrat; stabilize insurance market', comparison: 'Bennett is a Progressive Caucus member.' },
        ],
        money: CAC,
        endorsements: 'California Association of Realtors; Ventura Councilmembers Bill McReynolds and Liz Campos; former Ventura mayors Joe Schroeder and Jim Friedman (campaign site, Oct 2026).',
        notes: ['The Secretary of State lists MacDonald as a Democrat; a KCLU June 3 report described him as a Republican.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Bennett', '●', 'Leftward Progressives prefer Bennett, the Progressive Caucus member with a climate and campaign-finance record, over the Realtor-backed challenger; Bennett is clearly further left.'],
      ['LL', 'Bennett', '●', 'Loyal Liberals value a budget-subcommittee chair with 30 years in Ventura government.'],
      ['LO', 'Bennett / MacDonald', '=', 'Left-Out Left voters weigh distrust of career politicians against distrust of special interests: if a newcomer matters most, MacDonald, who is “not a career politician” and focuses on rent and insurance, though Realtors back him; if curbing money in politics matters more, Bennett, a campaign-finance reformer, though he has held office for 30 years.'],
      ['OO', 'MacDonald', '○', 'Order and Opportunity Left voters want homeownership opportunity, and MacDonald, the more moderate Democrat, promises more housing supply and a stable insurance market.', 'Order and Opportunity Left voters who put experience first could back Bennett, a former county supervisor and budget chair, giving up MacDonald’s housing-supply focus.'],
      ['TM', 'MacDonald', '○', 'Tuned-Out Middle voters focused on rent and insurance may favor MacDonald’s housing-supply and insurance pitch.', 'Tuned-Out Middle voters who put experience first could back Bennett, who chairs the budget panel over energy costs, giving up MacDonald’s housing-supply focus.'],
      ['PP', 'Bennett', '◐', 'Pragmatic and Polite Right voters prize experience and steady governance, and Bennett has decades of it, though MacDonald is the more business-friendly Democrat.'],
      ['UR', 'MacDonald', '◐', 'Unconventional Right voters have no Republican option and prefer MacDonald, the more business-friendly, pro-growth Democrat.', 'Unconventional Right voters who put experience first could back Bennett, a 20-year supervisor who chairs a budget subcommittee, giving up the more pro-growth Democrat.'],
      ['FC', 'MacDonald', '○', 'Faith First Conservatives lean toward the more moderate Democrat, though neither candidate shares their priorities.', 'Faith First Conservatives who put experience first could back Bennett, accepting a progressive with deep Ventura County roots.'],
      ['NA', 'MacDonald', '○', 'No Apologies Right voters lean toward the less progressive Democrat backed by Realtors, with little enthusiasm.', 'No Apologies Right voters who put experience first could back Bennett, a former county supervisor, accepting a Progressive Caucus member.'],
    ]),
    counterArguments: [
      'UR (MacDonald ◐): But consider that MacDonald has never held legislative office, because his platform is short on specifics.',
      'LP (Bennett ●): But consider that Bennett’s long support for limits on sprawl can cut against building more housing, because housing costs are a top concern.',
      'PP (Bennett ◐): But consider that Bennett is a Progressive Caucus member, because MacDonald is closer to the fiscal caution many Pragmatic and Polite Right voters prefer.',
    ],
  },

  // ───────────────────────────── AD-42 ─────────────────────────────
  {
    id: 'assembly-ad42',
    categoryId: 'state-leg',
    title: 'State Assembly, District 42',
    tldrLabel: 'AD-42',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: legCriteria('AD-42 spans the Conejo Valley in Ventura County and western Los Angeles County communities such as Agoura Hills, with high wildfire and insurance risk.'),
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'Assemblymember Jacqui Irwin is running for Congress. AD-42 covers parts of Ventura and Los Angeles counties; wildfire recovery and home insurance, taxes and Prop 13, and public safety, including fentanyl, separate the candidates.',
    ],
    introParagraphs: [
      'On June 2, Democrat Deborah Klein Lopez, an Agoura Hills councilmember, took 52.7%; Republican Ted Nordblum took 25.7%, edging Republican Rocky Rhodes (21.6%) (Secretary of State Statement of Vote). Nordblum lost to Irwin 54.3% to 45.7% in 2024. No public polling is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 42',
        url: 'https://theballotbrief.com/state/california/ventura-county/california-assembly-district-42',
        summary: 'Neutral roster with primary results and each candidate’s stated priorities.',
      },
      { label: 'Secretary of State — June 2 Statement of Vote, Assembly', url: SOV_ASSEMBLY },
    ],
    candidates: [
      {
        id: 'deborah-klein-lopez',
        name: 'Deborah Klein Lopez',
        party: 'D',
        role: 'City Councilmember',
        campaignUrl: 'https://deborahkleinlopez.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Agoura Hills councilmember since 2018 and former mayor who chairs the Clean Power Alliance; no state legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'City council legislation since 2018; no state lawmaking record.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Chairs the Clean Power Alliance, a regional public power agency (Ballot Brief); votes on city budgets.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Grew up in and represents Agoura Hills; worked on emergency management and recovery after the Woolsey Fire.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing state legislation.' },
          ],
        },
        bio: [
          'Klein Lopez grew up near the Santa Monica Mountains and was elected to the Agoura Hills City Council in 2018, later serving as mayor. She worked on Woolsey Fire recovery and chairs the Clean Power Alliance.',
          'She runs on lowering housing, child-care, utility and home-insurance costs, and on disaster preparedness and recovery.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Lower housing costs; housing and homelessness a stated priority', comparison: 'Nordblum lists homelessness without a published housing plan.' },
          { topic: 'Climate', position: '✓✓ Chairs a regional clean-power agency; climate resilience focus', comparison: 'Nordblum wants to cut gas taxes.' },
          { topic: 'Education', position: '? Lists education as a priority without specifics', comparison: 'Nordblum wants to give parents more say in schools.' },
          { topic: 'Public safety', position: '✓ Wildfire preparedness and public safety', comparison: 'Nordblum focuses on law enforcement and fentanyl.' },
          { topic: 'Taxes', position: '? No tax position found', comparison: 'Nordblum would defend Prop 13 and cut gas taxes.' },
        ],
        money: CAC,
        endorsements: 'Assemblymember Jacqui Irwin, Rep. Julia Brownley, Sen. Henry Stern, L.A. County Supervisor Lindsey Horvath (campaign site, Oct 2026).',
      },
      {
        id: 'ted-nordblum',
        name: 'Ted Nordblum',
        party: 'R',
        role: 'Small Business Owner',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Newbury Park medical-device business owner and 2024 Republican nominee; no elected experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'Has not held office; lost to Irwin in 2024 (Ballotpedia via Ballot Brief).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No budget or committee role found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Conejo Valley resident; Ventura County Republican Central Committee member (2024 Star questionnaire).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'Says he would seek bipartisan support for “common sense bills” (KCLU, 2024).' },
          ],
        },
        bio: [
          'A former heavy-equipment operator with an engineering degree, Nordblum founded and runs a medical-device business in the Conejo Valley (KCLU). He was the 2024 Republican nominee for this seat.',
          'He says losing his brother to a fentanyl overdose in 2021 led him to run, and campaigns on protecting Prop 13, cutting gas taxes and parental rights.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? No published housing plan; lists homelessness as a priority', comparison: 'Klein Lopez makes housing costs a top priority.' },
          { topic: 'Climate', position: '✗ Cut gas taxes; wildfire preparedness and insurance affordability', comparison: 'Klein Lopez chairs a clean-power agency.' },
          { topic: 'Education', position: '✓ Empower parents in their children’s education', comparison: 'Klein Lopez lists education without specifics.' },
          { topic: 'Public safety', position: '✓✓ Support police; fight the fentanyl crisis', comparison: 'Klein Lopez stresses disaster preparedness.' },
          { topic: 'Taxes', position: '✓✓ Defend Prop 13 and cut gas taxes', comparison: 'Klein Lopez has no stated tax position.' },
        ],
        money: CAC,
        endorsements: 'Ventura County Republican Party endorsed him in 2024; no 2026 list verified.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Klein Lopez', '●', 'Leftward Progressives back the Democrat who chairs a clean-power agency and focuses on climate resilience.'],
      ['LL', 'Klein Lopez', '●', 'Loyal Liberals value a former mayor endorsed by Irwin, Brownley and Stern.'],
      ['LO', 'Klein Lopez', '◐', 'Left-Out Left voters want the help with housing, child-care and utility costs Klein Lopez promises, though Klein Lopez is establishment-backed.'],
      ['OO', 'Klein Lopez', '◐', 'Order and Opportunity Left voters like Klein Lopez’s focus on costs and disaster preparedness, though Nordblum’s fentanyl and police focus appeals to them.'],
      ['TM', 'Klein Lopez / Nordblum', '=', 'Tuned-Out Middle voters weigh tax relief against other household bills: if taxes matter most, Nordblum, with a gas-tax cut and a Prop 13 defense; if insurance and utility costs matter more, Klein Lopez, who targets them.'],
      ['PP', 'Nordblum', '◐', 'Pragmatic and Polite Right voters, many of them older homeowners, fit Nordblum’s defense of Prop 13, fentanyl focus and promise to seek bipartisan “common sense bills.”'],
      ['UR', 'Nordblum', '●', 'Unconventional Right voters back the small-business Republican who would cut gas taxes and support police.'],
      ['FC', 'Nordblum', '●', 'Faith First Conservatives back Nordblum’s emphasis on parental rights and law enforcement.'],
      ['NA', 'Nordblum', '●', 'No Apologies Right voters back the Republican who would cut taxes and defend Prop 13.'],
    ]),
    counterArguments: [
      'PP (Nordblum ◐): But consider that Nordblum has no office experience, because Klein Lopez has led Woolsey Fire recovery and a regional agency.',
      'LL (Klein Lopez ●): But consider that Klein Lopez has never served in the Legislature, because she has published few specifics on taxes or education.',
    ],
  },
];
