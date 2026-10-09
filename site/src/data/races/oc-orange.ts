import type { CandidateQualification, CriterionAssessment, ExperienceLevel, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * City of Orange contests (ZIP 92868): Mayor, Municipal Water District of Orange County Division 2,
 * and city Measures I (sales tax), J (hotel tax) and K (charter).
 * Research current as of Oct 8, 2026. Candidate list from the OC Registrar of Voters candidate filing log
 * (GEN2026) and county voter-guide statements; measure facts from the Registrar's full text, City Attorney
 * impartial analyses and ballot arguments (ocvote.gov).
 */

function qual(
  level: ExperienceLevel,
  summary: string,
  criteria: [id: string, assessment: CriterionAssessment['assessment'], evidence: string][],
): CandidateQualification {
  return {
    level,
    legal: 'meets',
    summary,
    criteria: criteria.map(([criterionId, assessment, evidence]) => ({ criterionId, assessment, evidence })),
  };
}

const NO_MONEY = 'No campaign finance totals located as of Oct 8, 2026; filings are posted on the City of Orange or Orange County campaign-disclosure sites.';

export const RACES_OC_ORANGE: Race[] = [
  // ───────────────────────────── Mayor ─────────────────────────────
  {
    id: 'orange-mayor',
    categoryId: 'city',
    title: 'City of Orange Mayor',
    tldrLabel: 'Orange Mayor',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The mayor of Orange presides over a seven-member council in a council-manager system, so the job is mostly agenda-setting, votes and public leadership rather than running city departments day to day. The city manager runs staff; the mayor and council set the budget, taxes and policy.',
      'This election lands in the middle of a budget crisis. City reports cite a projected $27.6 million deficit next year and a current-year deficit above $20 million, and outside consultants have warned of possible insolvency without new revenue. The mayor on the dais will help carry out Measures I, J and K if voters approve them, or decide what to cut if they do not.',
    ],
    introParagraphs: [
      'Dan Slater, elected in 2022, is seeking another term. City Councilmember Arianna Barrios, who represents District 1, is challenging him. Orange mayoral races are nonpartisan; neither candidate’s party registration is stated on the ballot.',
      'The two voted the same way on placing the sales tax on the ballot but differ on the charter (Barrios voted no) and on how they frame the deficit: Slater points to $37.5 million in cuts and a 10% workforce reduction, while Barrios says the structural deficit has still not been addressed.',
    ],
    legalRequirements: 'Registered voter and resident of the City of Orange; at least 18 years old.',
    qualificationCriteria: [
      { id: 'budget', label: 'Municipal budget and fiscal management', detail: 'The council adopts a multi-million-dollar budget and is closing a structural deficit.' },
      { id: 'public-safety', label: 'Public safety and city-services oversight', detail: 'Police, fire, streets and parks are the largest uses of the general fund.' },
      { id: 'governance', label: 'Council leadership and working with a manager-run city', detail: 'The mayor presides over the council and must build majorities on contentious votes.' },
      { id: 'land-use', label: 'Land use, housing and economic development', detail: 'Council decides zoning, state housing-law compliance and business recruitment that drives sales-tax revenue.' },
    ],
    readingLinks: [
      { label: 'Voice of OC: Orange explores what to do if sales tax fails (Sept 14, 2026)', url: 'https://voiceofoc.org/2026/09/orange-explores-what-to-do-if-sales-tax-proposal-fails-in-november/', summary: 'Deficit figures and both mayoral candidates on the budget.' },
      { label: 'OC Registrar: Orange Mayor candidate statements', url: 'https://ocvote.gov/candidates/candidate-filing-log-with-statements', summary: 'Select 2026 General Election, then Mayor, City of Orange, for each candidate’s county voter-guide statement.' },
    ],
    candidates: [
      {
        id: 'dan-slater',
        name: 'Dan Slater',
        party: 'NP',
        role: 'Orange Mayor/Businessman',
        campaignUrl: 'https://mayordanslater.com',
        bio: [
          'Slater grew up in Orange, owns a home and a small business in the city, and was a real estate broker when he first ran. He won the mayor’s seat in 2022 and says this will be his last run for any elected position in Orange.',
          'His statement credits his tenure with lower crime (he cites a 28% decline), reduced homelessness, new open space along Santiago Creek, and a budget cut of $37.5 million with a 10% workforce reduction. These figures come from his candidate statement and have not been independently audited by this guide.',
        ],
        recordVsChange:
          'Slater’s case is continuity while the city carries out a deficit plan and, if voters approve it, a new tax with an oversight committee. The case for change, made by Barrios, is that the structural deficit remains and the city asked voters for the same kind of tax in 2024 and was rejected.',
        scorecard: [
          { topic: 'Budget/deficit', position: '✓ Cited $37.5M in cuts and a 10% workforce reduction; backs a 1% sales tax and a hotel tax to close the gap', comparison: 'Barrios says the structural deficit is unaddressed and stresses debt reduction.' },
          { topic: 'Public safety', position: '✓ Says crime is down 28%; endorsed by Orange City Firefighters', comparison: 'Barrios also cites lower crime and stronger code enforcement.' },
          { topic: 'Housing/homelessness', position: '✓ Says homelessness has decreased; also targets vacant-property upkeep', comparison: 'Barrios promises "compassion and enforcement."' },
          { topic: 'Taxes (Measures I and J)', position: '✓✓ Signed the ballot arguments for Measures I and J; argued for a 10-year tax term', comparison: 'Barrios voted to place the tax and favored no sunset at all.' },
          { topic: 'Charter (Measure K)', position: '? Position not stated in his candidate statement; he says he will honor existing term limits', comparison: 'Barrios voted against placing the charter on the ballot.' },
          { topic: 'Transparency', position: '~ Backs an independent oversight committee for the tax, which opponents say the mayor would appoint', comparison: 'Barrios stresses "strong fiscal controls."' },
        ],
        money: NO_MONEY,
        endorsements: 'Per his county voter-guide statement (Aug 2026): Orange City Firefighters, U.S. Rep. Young Kim, Assemblymember Avelino Valencia, and most of the City Council. No county party endorsement located.',
        qualification: qual('extensive', 'Slater is the sitting mayor, first elected in 2022, and has presided over the city’s deficit response.', [
          ['budget', 'met', 'Mayor since 2022 during budget cuts of $37.5M and a 10% workforce reduction (his statement); council voted on the 2024 and 2026 revenue measures.'],
          ['public-safety', 'met', 'Mayor overseeing police and fire budgets; endorsed by Orange City Firefighters.'],
          ['governance', 'met', 'Presides over the council; helped put Measures I, J and K on the ballot.'],
          ['land-use', 'met', 'Council-level votes on housing, vacant-property and business-attraction policy as mayor.'],
        ]),
      },
      {
        id: 'arianna-barrios',
        name: 'Arianna Barrios',
        party: 'NP',
        role: 'City Councilmember, City of Orange',
        campaignUrl: 'https://www.votebarrios.com',
        bio: [
          'Barrios represents Council District 1, which includes Chapman University, and has been on the council since 2020. She owns Communications LAB, a public-relations and community-outreach firm in Old Towne, and previously served on the Rancho Santiago Community College District board (appointed in 2011).',
          'Her mayoral platform stresses debt reduction, ending deficit spending, "compassion and enforcement" on homelessness, and having Chapman University pay what she calls its fair share.',
        ],
        scorecard: [
          { topic: 'Budget/deficit', position: '✓ Says the structural deficit is unaddressed; prioritizes debt reduction and ending deficit spending', comparison: 'Slater emphasizes cuts already made and the new revenue measures.' },
          { topic: 'Public safety', position: '✓ Cites lower crime, stronger code enforcement and action on smoke shops and massage parlors', comparison: 'Slater cites a 28% crime decline and firefighter support.' },
          { topic: 'Housing/homelessness', position: '~ "Compassion and enforcement" approach', comparison: 'Slater says homelessness decreased.' },
          { topic: 'Taxes (Measures I and J)', position: '~ Voted to place the sales tax on the ballot and wanted no end date; no formal position on the hotel tax found', comparison: 'Slater wanted a 10-year term and signed the ballot arguments.' },
          { topic: 'Charter (Measure K)', position: '✗ Voted against placing the charter on the ballot (July 14, 2026)', comparison: 'Slater’s position is not stated.' },
          { topic: 'Transparency', position: '✓ "Strong fiscal controls" and new management are central to her pitch', comparison: 'Slater leans on the oversight committee and audits written into Measure I.' },
        ],
        money: NO_MONEY,
        endorsements: 'Per her county voter-guide statement (Aug 2026): Orange County Supervisor Vicente Sarmiento, Councilmember Ana Gutierrez, former Mayor Tita Smith, and Orange Unified trustees Kris Erikson, Andrea Yamasaki and Sara Pelly. No county party endorsement located.',
        qualification: qual('substantial', 'Barrios has about six years on the Orange council and earlier community-college board service, but has not run the city as mayor.', [
          ['budget', 'partial', 'Council votes on city budgets since 2020; earlier trustee on a community-college board; ran a small business.'],
          ['public-safety', 'partial', 'Council oversight of police and fire; cites code-enforcement actions.'],
          ['governance', 'partial', 'Councilmember since 2020 and voted on the revenue and charter measures; has not presided over the council.'],
          ['land-use', 'partial', 'Represents the District 1 area around Chapman University; no specific housing record was reviewed.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['PL', 'Barrios', '○', 'Progressive Left voters may lean to Barrios because Democratic Supervisor Vicente Sarmiento endorsed her and she is pressing Chapman University to pay more, though neither candidate is a clear progressive.'],
      ['EL', 'Slater', '◐', 'Establishment Liberals value the incumbent’s bipartisan support, including Assemblymember Valencia, and his plan pairing cuts with an oversight committee and audits.'],
      ['DM', '—', '○', 'Democratic Mainstays face Democratic endorsements on both sides (Valencia for Slater, Sarmiento for Barrios), so no pick is recommended.', 'With Democratic endorsers split between the two, Democratic Mainstays could let experience decide: Slater has been mayor since 2022 and presided over the deficit response, including $37.5 million in cuts, while Barrios has served on the council but never presided over it.'],
      ['OL', 'Barrios', '○', 'Outsider Left voters skeptical of city hall can prefer the challenger calling for fundamental change, though she is a sitting councilmember.'],
      ['SS', '—', '○', 'Stressed Sideliners have little to separate two candidates who both back local services and a plan to close the deficit.', 'Stressed Sideliners who see little difference between the two could go with the candidate who has already led the council through the deficit: Slater, mayor since 2022, who cites spending cuts and lower crime. Barrios offers a shorter council record.'],
      ['AR', 'Slater', '◐', 'Ambivalent Right voters often prefer a pragmatic incumbent who cut spending and the workforce before asking for revenue.'],
      ['PR', 'Barrios', '○', 'Populist Right voters distrustful of city hall can favor the challenger who says the structural deficit is unfixed, though she also voted to place the sales tax on the ballot.'],
      ['CC', '—', '○', 'Committed Conservatives find both candidates backed the tax ballot measure, so neither is a clean fiscal-conservative choice.', 'Since both backed placing the sales tax on the ballot, Committed Conservatives could break the tie on experience: Slater has led the council through $37.5 million in cuts and a 10% workforce reduction, though he also signed the ballot arguments for the new taxes.'],
      ['FF', '—', '○', 'Faith and Flag Conservatives have no clear values contrast in this nonpartisan race.', 'Without a values contrast to guide them, Faith and Flag Conservatives could fall back on experience and steadiness: Slater has been mayor since 2022, oversees police and fire budgets and is endorsed by the city’s firefighters.'],
    ]),
    counterArguments: [
      'AR (Slater ◐): But the same council that Slater leads let the budget reach a $20 million-plus deficit and wants voters to approve a 13-year tax, and the 2024 tax failed; a challenger focused on spending discipline is a reasonable alternative.',
      'PL/OL (Barrios ○): But Barrios favored a sales tax with no end date and voted for placing the measure, so her fiscal message is less different from the incumbent’s than her statement suggests.',
    ],
  },

  // ───────────────────────────── MWDOC Div 2 ─────────────────────────────
  {
    id: 'mwdoc-division-2',
    categoryId: 'district',
    title: 'Municipal Water District of Orange County, Division 2',
    tldrLabel: 'MWDOC Division 2',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Municipal Water District of Orange County (MWDOC) is a wholesale agency that buys imported water from the Metropolitan Water District of Southern California and supplies it to Orange County cities and local water agencies. Its elected board sets MWDOC’s budget and rates and shapes the county’s positions at Metropolitan on supply, cost and drought policy.',
      'Division 2 covers parts of the East Orange County Water District, Garden Grove, Golden State Water Company, Irvine Ranch Water District, the City of Orange and Serrano Water District (per MWDOC). The race pits a 26-year incumbent who is board president against a former Orange County Water District general manager and a first-time candidate, as imported water costs rise.',
    ],
    introParagraphs: [
      'Larry Dick has held the seat since 2000 and is board president. Mike Markus, who retired in January 2024 after 16 years as general manager of the Orange County Water District, says MWDOC’s board has backed wasteful projects. Bobby Lapointe, an Army veteran and retail investor, is also on the ballot.',
      'The Registrar’s candidate filing log also lists a fourth name, Armando "Mando" Perez-Serrato, with no ballot designation or statement and also listed in an Orange Unified School District race; this guide could not confirm he is a candidate for this seat and does not profile him. Check your sample ballot.',
    ],
    legalRequirements: 'Registered voter and resident of MWDOC Division 2; at least 18 years old.',
    qualificationCriteria: [
      { id: 'water-supply', label: 'Water supply and infrastructure expertise', detail: 'Directors judge imported-water reliability, reuse and groundwater projects costing hundreds of millions of dollars.' },
      { id: 'finance', label: 'Budget, rates and ratepayer oversight', detail: 'The board adopts a wholesale budget and passes costs to local agencies and ratepayers.' },
      { id: 'regional', label: 'Regional water-policy experience (Metropolitan, Colorado River)', detail: 'MWDOC’s positions at Metropolitan affect Orange County’s supply and cost.' },
      { id: 'governance', label: 'Board governance and public accountability', detail: 'Directors oversee a general manager and must explain decisions to ratepayers.' },
    ],
    readingLinks: [
      { label: 'MWDOC: Larry D. Dick profile', url: 'https://www.mwdoc.com/about-us/leadership/larry-d-dick/', summary: 'Incumbent’s district, service and committee roles.' },
      { label: 'OC Registrar: MWDOC Division 2 statements', url: 'https://ocvote.gov/candidates/candidate-filing-log-with-statements', summary: 'Select 2026 General Election, then Director, Muni. Water Dist of O.C., Div. 2.' },
    ],
    candidates: [
      {
        id: 'larry-dick',
        name: 'Larry D. Dick',
        party: 'NP',
        role: 'Director Division 2, Municipal Water District of Orange County',
        campaignUrl: 'https://www.mwdoc.com/about-us/leadership/larry-d-dick/',
        bio: [
          'Dick was first elected to the MWDOC board in 2000 and became board president in December 2025. He represented Orange County on the Metropolitan Water District board from 2003, and MWDOC announced his retirement from that board in November 2025 after about 22 years.',
          'His statement lists leadership roles in the Special Districts of Orange County, the Water Advisory Committee of Orange County (two terms as president) and the Urban Water Institute, and cites Colorado River uncertainty, climate impacts and State Water Project issues as the region’s challenges.',
        ],
        recordVsChange:
          'Dick brings 26 years on MWDOC and two decades at Metropolitan, with experience on the region’s biggest supply negotiations. The case for change, made by Markus, is that the board has backed costly projects that will not deliver; Markus has not named specific projects in his county voter-guide statement.',
        scorecard: [
          { topic: 'Water supply reliability', position: '✓✓ Priority on reliable, economical supplies; cites Colorado River and State Water Project risks', comparison: 'Markus stresses reuse and groundwater projects he built at OCWD.' },
          { topic: 'Costs/ratepayers', position: '~ "Affordable water" in statement; no specific rate position found', comparison: 'Markus says he will stop wasteful spending.' },
          { topic: 'Metropolitan/regional role', position: '✓✓ About two decades representing Orange County at Metropolitan', comparison: 'Neither challenger has served at Metropolitan.' },
          { topic: 'Environment/sustainability', position: '✓ Lists water quality, stewardship and sustainability as top priorities', comparison: 'Lapointe lists recycling and wildfire preparedness.' },
          { topic: 'Transparency', position: '? No specific disclosure or reform proposal found', comparison: 'Lapointe promises to "explain decisions openly."' },
        ],
        money: NO_MONEY,
        endorsements: 'None verified as of Oct 8, 2026.',
        qualification: qual('extensive', 'Dick is the incumbent MWDOC director and board president and a long-time Metropolitan board member.', [
          ['water-supply', 'met', 'Director since 2000; Metropolitan Water District director from 2003; Water Advisory Committee of Orange County president (two terms).'],
          ['finance', 'met', 'Adopts MWDOC budgets and wholesale rates as a director and board president.'],
          ['regional', 'met', 'About 22 years on the Metropolitan board, including Colorado River and State Water Project issues (MWDOC, Nov 2025).'],
          ['governance', 'met', 'Board president as of December 2025; multiple special-district leadership roles.'],
        ]),
      },
      {
        id: 'bobby-lapointe',
        name: 'Bobby Lapointe',
        party: 'NP',
        role: 'Retail Investor',
        bio: [
          'Lapointe is a husband, father of three and Army veteran who worked in information technology and network security. He holds bachelor’s degrees in History and in Women and Gender Studies from Cal State Fullerton and associate degrees in Mathematics and Nutrition from Fullerton College.',
          'He manages his own investment business and says he would work on groundwater protection, infrastructure, water recycling, wildfire preparedness and less reliance on imported water.',
        ],
        scorecard: [
          { topic: 'Water supply reliability', position: '✓ Wants to reduce dependence on imported water and expand recycling', comparison: 'Dick emphasizes securing imported supplies; Markus has built reuse projects.' },
          { topic: 'Costs/ratepayers', position: '✓ Says "every dollar must serve a purpose"', comparison: 'Markus offers a record of building large projects within budget; Dick cites affordability.' },
          { topic: 'Infrastructure', position: '✓ Strengthen infrastructure and groundwater protection; no specifics found', comparison: 'Markus built the Groundwater Replenishment System.' },
          { topic: 'Environment/sustainability', position: '✓ Wildfire preparedness and recycling', comparison: 'Dick lists water quality and stewardship.' },
          { topic: 'Transparency', position: '✓ Promises to "explain decisions openly"', comparison: 'Neither other candidate offers a specific disclosure proposal.' },
        ],
        money: NO_MONEY,
        endorsements: 'None verified as of Oct 8, 2026.',
        qualification: qual('limited', 'Lapointe has IT and investing experience and no documented water-agency or elected-office experience.', [
          ['water-supply', 'not-met', 'No water-sector role documented; stated priorities are recycling and groundwater.'],
          ['finance', 'partial', 'Manages his own investment business; no public-budget role documented.'],
          ['regional', 'not-met', 'No regional water-policy role found.'],
          ['governance', 'not-met', 'No prior board service found.'],
        ]),
      },
      {
        id: 'mike-markus',
        name: 'Mike Markus',
        party: 'NP',
        role: 'Water Resource Engineer',
        bio: [
          'Markus spent 35 years at the Orange County Water District and was its general manager for 16 years (2007 to January 2024). He led development of the Groundwater Replenishment System, described as the world’s largest water-reuse project, and a program to remove PFAS from groundwater.',
          'His statement says he is "an Engineer, not a politician" and promises to stop wasteful spending and hold MWDOC decisions to a high standard.',
        ],
        scorecard: [
          { topic: 'Water supply reliability', position: '✓✓ Reuse and groundwater replenishment; says imported supply is getting costlier and less dependable', comparison: 'Dick emphasizes securing imported supplies through Metropolitan.' },
          { topic: 'Costs/ratepayers', position: '✓✓ "Stop wasteful spending"; says hundreds of millions are going to projects "destined to fail"', comparison: 'Dick cites affordability but not specific cost criticism; Markus has not named the projects in his statement.' },
          { topic: 'Infrastructure', position: '✓✓ Built the Groundwater Replenishment System and a PFAS-removal program', comparison: 'Neither opponent has a comparable build record.' },
          { topic: 'Metropolitan/regional role', position: '~ Strong regional record at OCWD; no Metropolitan role', comparison: 'Dick has about two decades at Metropolitan.' },
          { topic: 'Transparency', position: '✓ Pledges to "hold every MWDOC decision to a high standard"', comparison: 'Dick’s statement has no specific proposal.' },
        ],
        money: NO_MONEY,
        endorsements: 'None verified as of Oct 8, 2026.',
        qualification: qual('substantial', 'Markus ran a large water agency and built major supply projects but has not served on an elected water board.', [
          ['water-supply', 'met', 'OCWD general manager for 16 years; built the Groundwater Replenishment System and a PFAS-removal program.'],
          ['finance', 'met', 'Managed OCWD’s budget and capital projects as general manager (2007 to Jan 2024).'],
          ['regional', 'partial', 'Regional OCWD leadership; no Metropolitan or MWDOC board role.'],
          ['governance', 'partial', 'Reported to an elected OCWD board as general manager; has not been an elected director.'],
        ]),
      },
    ],
    crossTypology: ct([
      ['PL', 'Markus', '◐', 'Progressive Left voters value the Groundwater Replenishment System and PFAS removal Markus built, and less reliance on imported water.'],
      ['EL', 'Dick', '◐', 'Establishment Liberals value the incumbent’s institutional experience at MWDOC and Metropolitan on Colorado River and State Water Project negotiations.'],
      ['DM', 'Dick', '○', 'Democratic Mainstays tend to prefer a steady incumbent board president absent a clear scandal or failure.'],
      ['OL', 'Markus', '◐', 'Outsider Left voters skeptical of a long-serving board can favor the challenger who says it backed wasteful projects.'],
      ['SS', '—', '○', 'Stressed Sideliners have little to go on in a low-information wholesale water race, so no pick is recommended.', 'In a low-information water race, Stressed Sideliners worried about bills could default to experience: Dick has been on the board since 2000, is board president and spent about two decades at Metropolitan, though Markus’s spending critique speaks more directly to costs.'],
      ['AR', 'Markus', '◐', 'Ambivalent Right voters often prefer a pragmatic engineer with a record of delivering large projects over a long-time incumbent.'],
      ['PR', 'Markus', '◐', 'Populist Right voters distrustful of long-time officials can favor the challenger promising to stop wasteful spending.'],
      ['CC', 'Markus', '○', 'Committed Conservatives value fiscal accountability and project-cost discipline, which is Markus’s main message.'],
      ['FF', '—', '○', 'Faith and Flag Conservatives have no clear values contrast among these candidates.', 'With no values contrast, Faith and Flag Conservatives could let experience decide: Dick’s 26 years on MWDOC and two decades representing Orange County at Metropolitan are the longest record, though Markus also ran a large water agency for 16 years.'],
    ]),
    counterArguments: [
      'PL/AR/PR/CC (Markus): But Dick has chaired MWDOC and served at Metropolitan during Colorado River and drought negotiations; replacing him costs experience a first-time director would have to build, and Markus has not named the projects he calls wasteful.',
      'EL/DM (Dick): But a 26-year incumbent faces a challenger who ran a large agency and built reuse projects, and Markus’s criticism of MWDOC spending deserves a hearing even though he has not named specific projects.',
    ],
  },

  // ───────────────────────────── Measure I ─────────────────────────────
  {
    id: 'orange-measure-i',
    categoryId: 'local-measures',
    title: 'City of Orange Measure I — 1-cent sales tax (Public Safety/Essential Services)',
    tldrLabel: 'Orange Measure I — Sales tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure I asks whether Orange should add a one-cent sales tax as it faces a projected $27.6 million deficit next year. The ballot label lists police, fire, 911, parks and streets, but the money is not restricted to them. The choice is between new revenue to avoid deeper cuts and what opponents call a general-fund bailout.',
    ],
    introParagraphs: [
      'The City Council voted 5-1 on June 3, 2026 to place it on the ballot (Denis Bilodeau opposed; John Gyllenhammer, a prior opponent, was absent) after months of disagreement over the length of the term. Orange voters rejected a half-cent sales tax in 2024.',
      'As a general tax it must appear at a general election with council seats on the ballot; a council-placed public-safety tax would need two-thirds, which opponents say the city could not win.',
    ],
    measure: {
      question:
        'To maintain City of Orange’s quality of life, such as 9-1-1 response; maintaining police/fire protection; preventing crimes/thefts; retaining/attracting well-trained police officers/firefighters; keeping public parks safe/clean; addressing homelessness; wildfire protection/prevention; repairing streets/potholes; critical infrastructure improvements; shall a measure establishing a 1¢ sales tax, providing approximately $37,000,000 annually for general revenue/government purposes, expiring after 13 years, with independent oversight committee, all funds benefiting Orange residents, be adopted?',
      measureType: 'City Council-placed general transactions and use (sales) tax',
      voteThreshold: 'Simple majority (general tax)',
      fiscalImpact:
        'City estimate: about $37 million a year for the general fund; actual revenue depends on taxable sales. The tax would last 13 years from its operative date unless voters change it. At that estimate the tax totals roughly $480 million over 13 years (this guide’s arithmetic); opponents’ ballot argument says $507 million.',
      supporters: 'Mayor Dan Slater; Pattie Cordova (small business owner); Sean deMetropolis (ret. Orange fire chief, Orange City Firefighters); Tom Kisela (ret. Orange police chief); Garrett Smith (Orange City Treasurer). Per the ballot argument.',
      opponents: 'Former Mayors Pro Tem Fred Whitaker and Mike Alvarez (nomoretaxesorange.com). Per the ballot argument.',
      voterConnection: [
        'Shoppers in Orange pay one cent more per dollar; most groceries, prescription medicine and medical services are exempt (City Attorney analysis).',
        'Supporters say nearly two-thirds of the city’s sales tax is paid by non-residents; opponents put the cost at $800 per household per year, which supporters call overstated.',
        'If it fails, a staff report lists possible layoffs, unfilled public-safety vacancies, Fire staffing changes and cuts to permitting, parks and infrastructure.',
      ],
      mechanismBullets: [
        'A 1% transactions and use tax on retail sales, collected by the California Department of Tax and Fee Administration; voters may repeal, amend or extend it before the 13 years end.',
        'An Independent Oversight Committee (four-year terms, mayor appoints, council ratifies) reviews spending and the audit in public Brown Act meetings and reports annually.',
        'An annual independent audit is presented at a public council meeting and posted on the city website.',
      ],
      argumentsFor: [
        'Consultants hired by the city have warned of insolvency without new revenue; supporters say the tax avoids deeper service cuts.',
        'The council cut about $37.5 million and 10% of staff before asking voters (Council ballot argument).',
        'It ends after 13 years and comes with an oversight committee and annual audits.',
        'Costs for police, fire, streets and parks have outpaced a budget built on older dollars.',
      ],
      argumentsAgainst: [
        'Nothing requires spending on police or fire, so opponents call the "public safety" label misleading.',
        'Pay and benefits drove the deficit: city data show 135 employees paid over $250,000 in total compensation in 2025, up from 77 in 2023.',
        'The oversight committee can only recommend, so opponents say it has no real authority.',
        'The city should cut its own spending first, as it did in the 2011 to 2014 recession.',
      ],
      readingLinks: [
        { label: 'OC Registrar: Measure I text, analysis and arguments (PDF)', url: 'https://ocvote.gov/sites/default/files/2026-09/I-ORAN%20Sales%20Tax%20-%20LAYOUT%20(1).pdf', summary: 'Full ordinance, City Attorney impartial analysis, and for/against arguments and rebuttals.' },
        { label: 'City of Orange: Measures I & J', url: 'https://www.cityoforange.org/our-city/revenue-measures', summary: 'City’s informational page on the deficit and the two revenue measures.' },
        { label: 'Voice of OC: Orange places 1% sales tax on ballot (June 2026)', url: 'https://voiceofoc.org/2026/06/inaction-orange-officials-cant-agree-on-sales-tax-measure/', summary: 'Council votes and the debate over 10, 12, 13 and 15 years.' },
        { label: 'Voice of OC: What if the tax fails? (Sept 2026)', url: 'https://voiceofoc.org/2026/09/orange-explores-what-to-do-if-sales-tax-proposal-fails-in-november/', summary: 'Deficit figures and staff’s list of possible cuts.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters value funding for city services and oversight, but weigh that a sales tax falls hardest on lower-income shoppers.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value the audit, oversight committee and sunset and want the city to avoid insolvency and service cuts.'],
      ['DM', 'Yes', '◐', 'Democratic Mainstays generally support local revenue to maintain police, fire and street services when a deficit is documented.'],
      ['OL', 'No', '○', 'Outsider Left voters skeptical of city hall may resist a regressive tax, a mayor-appointed oversight panel and rising pay at the top.'],
      ['SS', 'No', '◐', 'Stressed Sideliners feeling cost-of-living pressure are wary of any added tax on everyday purchases.'],
      ['AR', '—', '○', 'Ambivalent Right voters are torn between consultants’ solvency warnings and a general tax voters rejected in 2024, so no pick is recommended.'],
      ['PR', 'No', '●', 'Populist Right voters distrust city hall spending and oppose a general tax with no spending guarantee.'],
      ['CC', 'No', '●', 'Committed Conservatives oppose a new general tax and want the city to cut spending and pay costs first.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives generally oppose new taxes and follow the opponents’ case against a general-fund tax.'],
    ]),
    counterArguments: [
      'CC/PR (No ●): But the city’s consultants and staff warn of layoffs and possible insolvency, and the council has already cut $37.5 million and 10% of staff; refusing all new revenue means deeper cuts to police, fire and streets.',
      'EL/DM (Yes): But the tax is a general tax with no required spending on public safety, and voters rejected a smaller tax in 2024; a No vote would send the council back to cut pay and benefits first.',
    ],
  },

  // ───────────────────────────── Measure J ─────────────────────────────
  {
    id: 'orange-measure-j',
    categoryId: 'local-measures',
    title: 'City of Orange Measure J — Hotel guest tax increase (10% to 14%)',
    tldrLabel: 'Orange Measure J — Hotel tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure J would raise Orange’s hotel guest tax (transient occupancy tax) for larger hotels. It is one of two revenue measures the City Council placed on the ballot to close a structural deficit; the question is whether visitors should carry more of the cost.',
    ],
    introParagraphs: [
      'The City Council voted 5-2 on May 26, 2026 to place it on the ballot (Councilmembers Gyllenhammer and Bilodeau opposed), after discussing a rate as high as 15%.',
    ],
    measure: {
      question:
        'Shall the measure updating the City of Orange’s existing Transient Occupancy Tax, a tax on persons occupying hotel rooms by increasing the tax rate from 10% to 14% for hotels with 11 or more rooms and applying the tax to online and other travel companies, generating approximately $3,000,000 annually for general City purposes including police, fire and emergency response, parks, and street and infrastructure maintenance, until ended by voters, be adopted?',
      measureType: 'City Council-placed general tax (transient occupancy tax increase)',
      voteThreshold: 'Simple majority (general tax)',
      fiscalImpact:
        'City estimate: about $3 million a year for the general fund; actual revenue depends on occupancy, room rates and related charges. No end date. The city expected about $6.3 million from the current hotel tax in the fiscal year ending June 2026 (Voice of OC), and each added point is worth more than $600,000.',
      supporters: 'Mayor Dan Slater; Sean deMetropolis (Orange City Firefighters); Tom Kisela (ret. Orange police chief); Garrett Smith (Orange City Treasurer). Per the ballot argument.',
      opponents: 'No argument against was submitted.',
      voterConnection: [
        'Residents pay only if they book a local hotel; guests pay it and hotel operators collect it.',
        'Hotels with 10 or fewer rooms stay at 10%.',
      ],
      mechanismBullets: [
        'Applies to the full amount charged to guests, including amounts collected by online travel and booking companies.',
        'General fund for any lawful city purpose; not dedicated to police, fire or other programs (City Attorney analysis).',
      ],
      argumentsFor: [
        'Visitors who use police, fire and streets pay more, instead of residents carrying the whole cost.',
        'Even at 14%, Orange stays at or below Anaheim, Garden Grove, Santa Ana and Tustin (ballot argument).',
        'The tax was last updated in 1993, before online travel companies, which would no longer avoid it.',
      ],
      argumentsAgainst: [
        'A higher rate could push some travelers or events to neighboring cities.',
        'The money is not dedicated to any purpose and has no sunset.',
        'At about $3 million, it covers a small share of a deficit above $20 million.',
      ],
      readingLinks: [
        { label: 'OC Registrar: Measure J text, analysis and argument (PDF)', url: 'https://ocvote.gov/sites/default/files/2026-09/J-ORAN%20TOT%20-%20LAYOUT%20(1).pdf', summary: 'Full ordinance, City Attorney impartial analysis and the argument in favor.' },
        { label: 'City of Orange: Measures I & J', url: 'https://www.cityoforange.org/our-city/revenue-measures', summary: 'City’s informational page on the deficit and revenue measures.' },
        { label: 'Voice of OC: Orange inches closer to tax increase ballot measures (May 2026)', url: 'https://voiceofoc.org/2026/05/orange-inches-closer-to-tax-increase-ballot-measures/', summary: 'Council debate over the hotel tax rate and current revenue.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters favor taxing visitors and online travel companies to fund city services rather than residents’ everyday purchases.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value a modernized, comparable-to-neighbors hotel tax that spares residents.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays generally support revenue paid by visitors to protect local services.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters prefer taxing hotel guests and online booking companies over residents, though the money is not restricted.'],
      ['SS', 'Yes', '◐', 'Stressed Sideliners are less likely to book local hotels, so a tax paid by visitors does not add to their own costs.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters often accept a modest tax paid by travelers when neighboring cities charge as much.'],
      ['PR', 'No', '○', 'Populist Right voters oppose any added tax run by a city hall they distrust, even one paid by visitors.'],
      ['CC', 'No', '◐', 'Committed Conservatives oppose a tax increase with no sunset and worry about hotel-industry competitiveness.'],
      ['FF', '—', '○', 'Faith and Flag Conservatives have no clear values stake in a hotel-tax rate, so no pick is recommended.'],
    ]),
    counterArguments: [
      'CC/PR (No): But the tax falls on visitors, not Orange residents, and the ballot argument says nearby cities already charge as much; opponents filed no argument against it.',
      'PL/EL/DM (Yes ●): But the measure raises only about $3 million against a deficit above $20 million and has no end date or dedicated use; it does not replace tougher budget choices.',
    ],
  },

  // ───────────────────────────── Measure K ─────────────────────────────
  {
    id: 'orange-measure-k',
    categoryId: 'local-measures',
    title: 'City of Orange Measure K — Proposed city charter',
    tldrLabel: 'Orange Measure K — Charter',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure K would make Orange a charter city with its own governing document, rather than a general law city governed mainly by state law. The 10-page "Simple Home Rule Charter" keeps the council-manager system. Supporters call it local control and accountability; opponents call it a rushed, council-written document.',
    ],
    introParagraphs: [
      'Councilmember Kathy Tavoularis proposed it in May as part of the city’s response to its financial crisis; the council voted 6-1 to begin (Gutierrez opposed) and 4-3 on July 14, 2026 to place it on the ballot (Barrios, Gutierrez and Gyllenhammer opposed, per Hoodline).',
      'It takes effect on voter approval and filing with the Secretary of State (City Attorney analysis).',
    ],
    measure: {
      question:
        'Shall the proposed Charter for the City of Orange, establishing the City as a charter city under the California Constitution and providing the City’s governing document for municipal affairs, be adopted?',
      measureType: 'Charter adoption (city council-placed)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'The City Attorney’s impartial analysis gives no cost or revenue estimate. The council resolution says the city will pay the election expenses. Opponents’ ballot argument says charter cities historically face higher legal costs; supporters’ rebuttal says that claim is unsupported by evidence.',
      supporters: 'Councilmember Kathy Tavoularis; Jonathan Dumitru (Councilmember); Chip Ahlswede (Parks Commissioner); Sean Chavarria (Chaplain). Per the ballot argument.',
      opponents: 'Carolyn Cavecche (ret. Mayor); Ana Gutierrez; Barry Resnick (ret. OUSD Trustee); David Dufault (Lt Cmdr, US Navy ret.); Adrienne Gladson (AICP). Per the ballot argument.',
      voterConnection: [
        'City hall would gain more control over contracting and bidding, but state law still governs statewide matters, including housing mandates (City Attorney analysis).',
        'Lifetime term limits, a bar on rent control and a protected open-space reserve would be written into the city’s constitution.',
      ],
      mechanismBullets: [
        'Term limits: mayor two four-year terms, council three, in a lifetime, counted only from the charter’s effective date; a partial term over two years counts as full. Supporters say Government Code §36502 bars retroactive limits.',
        'Contracting: city control of procurement, bidding, design-build and public-works rules, with exemptions from state contracting statutes; prevailing-wage procedures set by ordinance.',
        'Open Space Reserve: designated city land cannot be removed without a public vote; no residential or commercial development, including affordable and supportive housing.',
        'Property: bars private-to-private eminent domain and rent or price controls on private homes (hotels excepted).',
        'Fiscal rules: balanced operating budget, annual independent audit, and new recurring general-fund money prioritized for pension debt, infrastructure, debt reduction and reserves.',
        'Misconduct: a three-fourths council vote can suspend an officer facing felony, misconduct or ethics proceedings, restored if cleared.',
      ],
      argumentsFor: [
        'Voters get a final say on removing open space, and balanced-budget and audit rules stay even if the state drops them.',
        'Lifetime term limits stop the "merry-go-round" of former council members returning.',
        'It protects property owners from eminent domain and creates a way to suspend officials facing serious charges.',
        'Anaheim, Irvine, Newport Beach, Santa Ana and Huntington Beach are already charter cities.',
      ],
      argumentsAgainst: [
        'A "power grab": term limits start fresh, letting sitting members serve up to 12 more years, to 2040, though 82% of voters approved the current limits.',
        'Written by the council without an independent citizens’ charter commission.',
        'Charter status will not restore local control over state housing law.',
        'Looser bidding and prevailing-wage rules can favor special interests.',
      ],
      readingLinks: [
        { label: 'OC Registrar: Measure K charter, analysis and arguments (PDF)', url: 'https://ocvote.gov/sites/default/files/2026-10/Orange%20Charter%20-%20Layout.pdf', summary: 'Full charter text, City Attorney impartial analysis, and for/against arguments and rebuttals.' },
        { label: 'City of Orange: Charter measure', url: 'https://www.cityoforange.org/our-city/city-charter-measure', summary: 'City’s page on the proposed charter.' },
        { label: 'Hoodline: Orange puts its future to a charter vote (July 2026)', url: 'https://hoodline.com/2026/07/broke-and-on-the-brink-orange-puts-its-future-to-a-charter-vote-7037432/', summary: 'The 4-3 council vote and critics’ concerns.' },
        { label: 'Voice of OC: Orange inches closer to tax increase ballot measures (May 2026)', url: 'https://voiceofoc.org/2026/05/orange-inches-closer-to-tax-increase-ballot-measures/', summary: 'Council’s 6-1 vote to begin the charter process.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '◐', 'Progressive Left voters distrust giving cities exemptions from state contracting and prevailing-wage rules and a ban on rent control, and object to a charter written without a citizens’ commission.'],
      ['EL', 'No', '◐', 'Establishment Liberals value process: an independent charter commission, no term-limit reset for sitting members, and state-level labor and housing standards.'],
      ['DM', 'No', '◐', 'Democratic Mainstays tend to oppose a council-drafted charter that loosens state wage and housing rules and passed the council by one vote.'],
      ['OL', 'No', '○', 'Outsider Left voters see a sitting council writing its own term-limit rules as an insider move, though they may like the open-space and eminent-domain limits.'],
      ['SS', '—', '○', 'Stressed Sideliners have little at stake in a technical governance question, so no pick is recommended.'],
      ['AR', '—', '○', 'Ambivalent Right voters can see both the local-control benefits and the process objections, so no pick is recommended.'],
      ['PR', 'Yes', '○', 'Populist Right voters like local control over Sacramento, balanced-budget rules and protections against eminent domain, though the term-limit reset gives them pause.'],
      ['CC', 'Yes', '◐', 'Committed Conservatives value local control, property-rights and balanced-budget provisions, and flexibility to cut procurement and wage rules.'],
      ['FF', 'Yes', '○', 'Faith and Flag Conservatives lean toward local control and property protections over state mandates.'],
    ]),
    counterArguments: [
      'CC/PR/FF (Yes): But the charter was written by the council without an independent commission, passed 4-3, and its start date lets sitting members begin a new term-limit clock, so the "local control" label can mask an incumbent benefit.',
      'PL/EL/DM (No): But the charter adds enforceable term limits, a balanced-budget rule, an audit requirement and voter approval to remove open space, and state law still governs housing and other statewide matters.',
    ],
  },
];
