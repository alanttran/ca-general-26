import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Hayward (ZIP 94544) local contests, Nov 3, 2026.
 * Candidate names and ballot designations were read from the Alameda County Registrar of Voters
 * candidate list (General Election 11/03/2026, "on ballot" filter), race by race.
 */
export const RACES_HAYWARD: Race[] = [
  // ---------------------------------------------------------------------------
  // City of Hayward: Mayor
  // ---------------------------------------------------------------------------
  {
    id: 'hayward-mayor',
    categoryId: 'city',
    title: 'Mayor of Hayward',
    tldrLabel: 'Hayward Mayor',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The mayor presides over the Hayward City Council, which adopts the city budget, sets business and development rules, and oversees the police and fire departments through the city manager. The mayor is elected citywide for a four-year term and is one of seven council votes, so the office’s weight comes from agenda-setting and public leadership more than from administrative control.',
      'The city says it has a $26.4 million General Fund gap for fiscal 2026 and that its operating reserve was effectively exhausted by July 1, 2025 (City of Hayward General Fund Budget FAQ). The next mayor will carry the budget repair, including whether to back Measure CC, a business license tax update on this same ballot.',
    ],
    introParagraphs: [
      'Mark Salinas, a Hayward council member since 2010 and mayor since 2022, faces Tom Wong, a first-time candidate who describes himself as a businessman, security-industry professional, and publisher of The Town Hall News. Both qualified in late July 2026 (City Clerk candidate page). The office is nonpartisan; Wong’s campaign site says he is the elected AD-20 chairman of the Alameda County Republican Party, and the California Rifle & Pistol Association PAC has endorsed him.',
      'Salinas accepted the city’s voluntary campaign spending limit; Wong did not (City Clerk). Hoodline (Oct. 1, 2026) reports that Salinas, Rep. Aisha Wahab, and Supervisor Elisa Marquez support Measure CC; Wong’s site does not state a position on it.',
    ],
    legalRequirements: 'Registered voter residing in the City of Hayward; the mayor is elected citywide (City Clerk, Hayward elections page).',
    qualificationCriteria: [
      { id: 'governance', label: 'Legislative and presiding experience', detail: 'The mayor chairs council meetings, sets the tone for debate, and casts one of seven votes on every ordinance and budget.' },
      { id: 'fiscal', label: 'Public budget and fiscal management', detail: 'Hayward is closing a deficit of roughly $26 million after reserves were depleted.' },
      { id: 'services', label: 'Oversight of public safety and city services', detail: 'The council oversees police, fire, 911, libraries, and streets through the city manager.' },
      { id: 'regional', label: 'Regional and intergovernmental work', detail: 'The mayor represents Hayward with the county, BART, AC Transit, the school district, and state officials.' },
    ],
    candidates: [
      {
        id: 'mark-salinas',
        name: 'Mark Salinas',
        party: 'NP',
        role: 'Mayor/College Instructor',
        campaignUrl: 'https://www.voteforsalinas.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Salinas has been Hayward’s mayor since 2022 and a council member since 2010, which is direct experience in the office he seeks.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Hayward City Council member since 2010, re-elected twice, and mayor since 2022 (campaign site); ran unopposed for mayor in 2022 after Barbara Halliday did not seek re-election (Patch).' },
            { criterionId: 'fiscal', assessment: 'partial', evidence: 'Has voted on city budgets for years and says closing the deficit is his top concern (Hoodline); the city’s own FAQ says spending outran revenue and reserves were exhausted over those same years.' },
            { criterionId: 'services', assessment: 'met', evidence: 'As mayor, presides over a council that approved police and fire staffing and overtime changes in the fiscal-repair plan (city FAQ); cites lower industrial vacancies, reduced police overtime, and downtown improvements (Hoodline).' },
            { criterionId: 'regional', assessment: 'partial', evidence: 'Has represented Hayward as mayor since 2022; specific regional board seats are not listed on his campaign site.' },
          ],
        },
        bio: [
          'Salinas is a Hayward native who attended Hayward High School and earned a bachelor’s degree in La Raza Studies and a master’s in educational administration and public policy studies at San Francisco State. He has taught Ethnic Studies and History at Chabot College for over 30 years (campaign site). His father moved to Hayward from New Mexico in the 1950s and served 18 years as an Oakland police officer.',
          'He lists public safety, business growth, housing and homelessness, and making Hayward an “Education City” among his priorities. He was the only council member to vote against the 2024 Voting Rights Act settlement that moved Hayward to district elections, objecting that litigation rather than community input drove the change (The Town Hall News, an opinion outlet run by his opponent; the 2024 district-election ordinance itself is on the city’s site).',
        ],
        recordVsChange:
          'Salinas has delivered visible downtown and industrial-area gains and the city has closed most of its deficit through labor concessions, layoffs, and vacancy holds, but the same council let reserves reach zero before acting; the case for change is that a fresh mayor would approach the budget and police costs differently.',
        scorecard: [
          { topic: 'Budget/deficit', position: '✓ Calls closing the deficit his top concern; supports Measure CC; he and the council paused raises as part of a combined $7.5M in savings', comparison: 'Wong wants more detail before proposing fixes and stresses residents’ cost of living.' },
          { topic: 'Public safety', position: '✓ Cites reduced police overtime; priorities include safer streets', comparison: 'Wong proposes letting businesses fund officer salaries and adding detectives.' },
          { topic: 'Housing/homelessness', position: '✓ Says new housing and reduced homelessness are results of his prior term', comparison: 'Wong promotes a path to homeownership and housing for families.' },
          { topic: 'Business/economy', position: '✓ Priority on entrepreneurs and business growth; backs a business license tax with higher rates for larger firms', comparison: 'Wong proposes property-tax relief for seniors and local hiring preferences.' },
          { topic: 'Transparency', position: '? No specific transparency pledge on his campaign site', comparison: 'Wong’s site promotes accountability journalism but offers no specific city-hall reform proposal.' },
        ],
        money: 'Accepted the city’s voluntary expenditure limit. Filings: https://netfile.com/public/HWD/campaign/filingsByCandidate/171876130-Salinas,_Mark',
        endorsements: 'Alameda County Supervisor Elisa Marquez, Rep. Aisha Wahab (support Measure CC per Hoodline); endorsed Robert Raburn, Julie Roche and George Syrop on those candidates’ sites. A full endorsement list is on his campaign site.',
        redFlags: [
          {
            severity: 'notable',
            status: 'documented',
            text: 'The city’s own budget FAQ says spending exceeded revenue by tens of millions of dollars over two fiscal years, effectively eliminating the council’s required 20% General Fund reserve by July 1, 2025, and that salaries and benefits rose $41.3 million (25%) from fiscal 2023 to 2025 while General Fund revenue rose $6.4 million (3%). Salinas sat on the council throughout and now says fixing the deficit is his top priority; Hoodline reports the council, mayor, city attorney and clerk paused their raises.',
            whyItMatters: 'A mayor shares responsibility with the council for the budgets that left Hayward without reserves.',
            sources: [
              { label: 'City of Hayward: General Fund Budget FAQ', url: 'https://hayward-ca.gov/content/general-fund-budget-faq' },
              { label: 'Hoodline: Hayward mayoral race', url: 'https://hoodline.com/2026/10/hayward-mayoral-race-tests-budget-choices-and-measure-cc/' },
            ],
          },
        ],
        notes: ['Hayward’s ballot designation for him is “Mayor/College Instructor.” The Registrar lists the incumbent flag as “N” for this city race; the City Clerk and his campaign site both identify him as the sitting mayor.'],
      },
      {
        id: 'tom-wong',
        name: 'Tom Wong',
        party: 'NP',
        role: 'Businessman',
        campaignUrl: 'https://tomforhaywardmayor2026.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Wong has run a private security firm and a training business and publishes a local news site, but no elected or appointed government service is documented.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected or appointed office documented on his campaign site; Hoodline describes him as a first-time candidate. He is the elected AD-20 chairman of the Alameda County Republican Party, a party post rather than public office.' },
            { criterionId: 'fiscal', assessment: 'partial', evidence: 'Says he founded Red Dragon Private Security in 2012 and ran a small business; has not proposed specific budget fixes and told Hoodline he wants more detail first.' },
            { criterionId: 'services', assessment: 'partial', evidence: 'Cites about 30 years in private security and five in public safety (campaign site); proposes adding police detectives and letting businesses fund officer salaries.' },
            { criterionId: 'regional', assessment: 'unknown', evidence: 'No regional or intergovernmental role documented.' },
          ],
        },
        bio: [
          'Wong describes himself as a Hayward businessman, public-safety professional, and investigative journalist. He says he founded Red Dragon Private Security in 2012 and later a firearms training academy, holds an associate degree from Skyline College, and is pursuing a Master of Laws at the University of London (campaign site, self-reported). He is CEO of The Town Hall News, a local-government news site he launched in April 2025.',
          'His platform stresses public safety (more detectives), a path to homeownership, a hire-local policy for city contracts, property-tax relief for senior homeowners, and stopping data-center expansion. The California Rifle & Pistol Association PAC announced its endorsement in September 2026.',
        ],
        scorecard: [
          { topic: 'Budget/deficit', position: '~ Wants more detail before proposing fixes; says residents face high living costs and workers oppose layoffs and benefit cuts (Hoodline)', comparison: 'Salinas has a repair plan in place and supports Measure CC; Wong’s site does not address Measure CC.' },
          { topic: 'Public safety', position: '✓✓ Top priority; proposes more detectives and letting businesses pay officer salaries and benefits in exchange for services', comparison: 'Salinas points to reduced police overtime.' },
          { topic: 'Housing/homelessness', position: '✓ Proposes a path to homeownership and housing for families rather than land for data centers', comparison: 'Salinas says new housing and lower homelessness are his record.' },
          { topic: 'Taxes', position: '✓ Proposes targeted property-tax freezes and senior exemptions; no detail', comparison: 'Salinas backs a business license tax increase.' },
          { topic: 'Transparency', position: '✓ Publishes a local-government news site focused on accountability; his articles there carry his candidate byline', comparison: 'Salinas’s transparency record is not described on his site.' },
        ],
        money: 'Did not accept the city’s voluntary expenditure limit. Filings: https://netfile.com/public/HWD/campaign/filingsByCandidate/217126838-Wong,_Tom',
        endorsements: 'California Rifle & Pistol Association PAC (announced Sept. 2026, per his campaign site). Alameda County Republican Party: he serves as an elected AD-20 chairman.',
        notes: ['Wong is the author of a Sept. 2026-era opinion piece on The Town Hall News about Hayward’s finances and district elections; the site bills him as a candidate for mayor. His campaign site gives two slightly different names for his training business.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Salinas', '◐', 'Leftward Progressives favor Salinas, who backs a business tax with higher rates for larger firms, over Wong, a county Republican Party officer endorsed by a gun-rights PAC, though they see Salinas as a long-serving insider rather than one of their own.'],
      ['LL', 'Salinas', '●', 'Loyal Liberals value experienced, institutional governance, and Salinas has 16 years on the council, a budget repair plan built with labor concessions, and support from regional Democratic officials.'],
      ['LO', 'Salinas', '○', 'Left-Out Left voters distrust a City Hall that let reserves run dry on Salinas’s watch, but Wong’s Republican and gun-rights ties run against them, so they lean weakly to Salinas and his tax on larger businesses.'],
      ['OO', 'Salinas', '◐', 'Order and Opportunity Left voters want safe streets and steady management, and Salinas points to reduced police overtime and downtown gains, while Wong offers more detectives but no budget plan and backing from a gun-rights group.'],
      ['TM', 'Wong', '○', 'Tuned-Out Middle voters choose on concrete cost relief, and Wong pitches property-tax freezes for seniors, local hiring and a path to homeownership, though he has offered few details.', 'Tuned-Out Middle voters who put experience first could back Salinas, mayor since 2022 and on the council since 2010, who has a deficit plan in place, though he shares responsibility for budgets that exhausted the city’s reserves.'],
      ['PP', 'Salinas', '◐', 'Pragmatic and Polite Right voters value experience and caution in a budget crisis, so they cross party lean to back Salinas over a first-time candidate who says he needs more detail before proposing budget fixes.'],
      ['UR', 'Wong', '◐', 'Unconventional Right voters want public safety, lower taxes and an outsider, which Wong offers with more detectives, property-tax relief and no City Hall history, though their party ties are loose.', 'Unconventional Right voters who put experience first could pick Salinas, a council member since 2010 who points to reduced police overtime, giving up an outsider’s public-safety and tax-relief pitch for a mayor who shares responsibility for the drained reserves.'],
      ['FC', 'Wong', '◐', 'Faith First Conservatives back the Republican officer who stresses public safety, gun rights and lower property taxes, though a city race offers little on the social issues they weigh most.', 'Faith First Conservatives who weigh experience could choose Salinas, mayor since 2022 with years of budget and public-safety votes, though that means backing a supporter of a new business tax over the Republican-aligned challenger.'],
      ['NA', 'Wong', '●', 'No Apologies Right voters want a fighter against City Hall spending and for gun rights, and Wong is a Republican Party officer backed by the California Rifle & Pistol Association who promises more policing and tax relief.'],
    ]),
    counterArguments: [
      'UR/FC/NA (Wong ◐/●): But consider Salinas, because Wong has never held public office and told reporters he needs more detail before proposing budget fixes, a thin plan for a city closing a $26 million gap.',
      'LL/PP (Salinas ●/◐): But consider Wong, because Salinas was on the council while salaries and benefits grew 25% and reserves fell to zero, so a challenger’s argument that City Hall overspent is not baseless.',
    ],
    readingLinks: [
      { label: 'City of Hayward: candidate information and statements', url: 'https://www.hayward-ca.gov/your-government/elections/candidate-information', summary: 'Qualification dates, websites, campaign finance links, and spending-limit status for every city candidate.' },
      { label: 'Hoodline: Hayward mayoral race tests budget choices and Measure CC (Oct. 1, 2026)', url: 'https://hoodline.com/2026/10/hayward-mayoral-race-tests-budget-choices-and-measure-cc/', summary: 'Compares both candidates’ plans on the deficit and policing.' },
      { label: 'City of Hayward: General Fund Budget FAQ', url: 'https://hayward-ca.gov/content/general-fund-budget-faq', summary: 'The city’s own explanation of the deficit, reserves, and repair actions.' },
    ],
  },

  // ---------------------------------------------------------------------------
  // City of Hayward: Council District 6 (unopposed)
  // ---------------------------------------------------------------------------
  {
    id: 'hayward-council-d6',
    categoryId: 'city',
    title: 'Hayward City Council, District 6',
    tldrLabel: 'Hayward Council D6',
    seatContext: 'Incumbent (unopposed)',
    kind: 'candidates',
    stakesParagraphs: [
      'The Hayward City Council has the mayor plus six district members who adopt the budget, zoning, and fees for a city of about 150,000 people. This is the first year Hayward elects council members by district rather than citywide, and only Districts 1 and 6 are up in 2026; Districts 2 through 5 follow in 2028 (The Town Hall News; City of Hayward).',
      'Julie Roche is the only name on the ballot for the newly created District 6, so the outcome is not in doubt. The choice is whether to vote for her or leave the line blank.',
    ],
    introParagraphs: [
      'Roche, the council’s Mayor Pro Tempore, qualified on July 29, 2026 and accepted the city’s voluntary spending limit (City Clerk candidate page). No other District 6 candidate appears on the city’s list or in the Registrar’s list.',
    ],
    legalRequirements: 'Registered voter and resident of the district in which the candidate runs (City of Hayward elections page).',
    qualificationCriteria: [
      { id: 'governance', label: 'Municipal policy and governance', detail: 'Council members pass ordinances, approve budgets, and oversee the city manager.' },
      { id: 'fiscal', label: 'Budget and fiscal repair', detail: 'The council is closing a multimillion-dollar General Fund gap.' },
      { id: 'constituent', label: 'District knowledge and constituent service', detail: 'District members represent specific Hayward neighborhoods.' },
    ],
    candidates: [
      {
        id: 'julie-roche',
        name: 'Julie Roche',
        party: 'NP',
        role: 'Hayward City Councilmember',
        campaignUrl: 'https://www.julieforhayward.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Roche is a sitting Hayward council member (about four years) and Mayor Pro Tempore, seeking the first district-based seat.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Hayward City Council member for nearly four years; described as Mayor Pro Tempore on a fellow candidate’s endorsements page.' },
            { criterionId: 'fiscal', assessment: 'met', evidence: 'Has voted on the budgets and the 2026 repair plan; her stated top goal is restoring long-term fiscal stability (campaign site).' },
            { criterionId: 'constituent', assessment: 'unknown', evidence: 'District 6 is newly drawn; her specific neighborhood service record is not detailed on her site.' },
          ],
        },
        bio: [
          'Roche is a Hayward council member seeking the new District 6 seat after nearly four years on the council. Her campaign emphasizes fiscal responsibility, good governance, public safety, and environmental protection, with restoring long-term fiscal stability as her top goal.',
          'She accepted the voluntary expenditure limit; campaign filings are at https://netfile.com/public/HWD/campaign/filingsByCandidate/201628857-Roche,_Julie.',
        ],
        scorecard: [
          { topic: 'Budget', position: '✓ Top goal is restoring long-term fiscal stability', comparison: 'No opponent on the ballot to compare against.' },
          { topic: 'Public safety', position: '✓ Lists public safety among her priorities', comparison: 'No opponent on the ballot to compare against.' },
        ],
        money: 'Accepted the city’s voluntary expenditure limit; see the NetFile link in her bio.',
        endorsements: 'Endorsed Robert Raburn for BART and was listed among Hayward officials supporting him; full list on her campaign site.',
        notes: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Roche', '○', 'Leftward Progressives have no alternative on the ballot, so voting for Roche is the only way to register a choice in this contest, though leaving it blank is also reasonable.'],
      ['LL', 'Roche', '◐', 'Loyal Liberals value an experienced council member focused on fiscal repair and good governance, which Roche offers as Mayor Pro Tempore.'],
      ['LO', 'Roche', '○', 'Left-Out Left voters may resent an uncontested seat in the city’s first district election, but Roche is the only name, so the lean is weak.'],
      ['OO', 'Roche', '◐', 'Order and Opportunity Left voters want steady hands and public safety, both of which Roche lists among her priorities.'],
      ['TM', 'Roche', '○', 'Tuned-Out Middle voters with little interest in down-ballot offices can vote for the only candidate or skip the line.'],
      ['PP', 'Roche', '◐', 'Pragmatic and Polite Right voters prefer a steady, fiscally minded official, and Roche names restoring long-term fiscal stability as her top goal.'],
      ['UR', 'Roche', '○', 'Unconventional Right voters face a single incumbent and may prefer to leave the line blank, but her fiscal-responsibility focus gives a weak reason to vote for her.'],
      ['FC', 'Roche', '○', 'Faith First Conservatives have no alternative in this nonpartisan race and no social issues are at stake, so the lean is weak.'],
      ['NA', 'Roche', '○', 'No Apologies Right voters have no challenger to back, and Roche’s fiscal-stability message is the only signal on the ballot.'],
    ]),
    counterArguments: [
      'LL/OO/PP (Roche ◐): But consider leaving the line blank, because Roche voted on the budgets that let reserves run out, and a one-name race gives no way to weigh that record.',
    ],
    readingLinks: [
      { label: 'City of Hayward: candidate information', url: 'https://www.hayward-ca.gov/your-government/elections/candidate-information', summary: 'Qualification date and campaign links for Roche and the other 2026 candidates.' },
    ],
  },

  // ---------------------------------------------------------------------------
  // Hayward Unified School District, Trustee Area 4
  // ---------------------------------------------------------------------------
  {
    id: 'husd-trustee-area-4',
    categoryId: 'school',
    title: 'Hayward Unified School District, Trustee Area 4',
    tldrLabel: 'HUSD Area 4',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The Hayward Unified board sets the district budget, hires and supervises the superintendent, and adopts policy for the public schools that most Hayward children attend. This is the first election in which HUSD trustees are chosen by area rather than at large; Areas 2 and 4 are up in 2026 (Hayward Herald, citing the district’s districting plan).',
      'The board is working through a financial crisis. The district’s Fiscal Stability Plan says the board committed in October 2025 to restore its unrestricted reserve to the legal 3% minimum, and local reporting describes cuts in the tens of millions of dollars and school closures in recent years. The new trustee will vote on the next rounds of cuts and on who runs the district.',
    ],
    introParagraphs: [
      'Neither candidate holds the seat: Michelle Fernelius (Parent/Research Director) and Maria Araceli Orozco (Parent/Caregiver/Student) are the only two names the Alameda County Registrar lists for Area 4. Little independent coverage of either exists; the voter statements in the county voter guide are the best primary source.',
    ],
    legalRequirements: 'Registered voter residing in Trustee Area 4 of the Hayward Unified School District.',
    qualificationCriteria: [
      { id: 'governance', label: 'Public board governance experience', detail: 'Trustees adopt policy, approve the budget, and evaluate the superintendent as a five-member body.' },
      { id: 'fiscal', label: 'Budget and fiscal oversight', detail: 'HUSD is under a state-monitored fiscal stability plan with reserves below the legal minimum.' },
      { id: 'education', label: 'Knowledge of schools and student needs', detail: 'Policy on special education, English learners, and safety shapes daily school life.' },
      { id: 'community', label: 'Family and community engagement', detail: 'Trustees represent a trustee area and hear from parents, staff, and students.' },
    ],
    candidates: [
      {
        id: 'michelle-fernelius',
        name: 'Michelle Fernelius',
        party: 'NP',
        role: 'Parent/Research Director',
        campaignUrl: 'https://michelle4husd.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Fernelius holds parent-leadership roles in the district and works as a research director with a master’s degree in biostatistics, but has not served on a governing board.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected or appointed governing-board service documented.' },
            { criterionId: 'fiscal', assessment: 'partial', evidence: 'Research director by profession with a biostatistics master’s from Cal State Hayward (campaign event page); no public-budget role documented.' },
            { criterionId: 'education', assessment: 'met', evidence: 'Parent of two children on the autism spectrum; serves as Parent Ambassador Lead and as Vice Chair of the special-education community advisory group (SPEDAA, per her site).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Parent Ambassador Lead, working with families, educators, staff, and district leaders (campaign site).' },
          ],
        },
        bio: [
          'Fernelius is a parent, advocate, and research director with a master’s degree in biostatistics from Cal State Hayward. She says she is the parent of two children on the autism spectrum and serves as Parent Ambassador Lead and as vice chair of the district’s special-education advisory group.',
          'Her stated priorities are better student outcomes, safe and inclusive campuses, deeper family engagement, and district accountability. Her site does not describe specific budget positions.',
        ],
        scorecard: [
          { topic: 'Budget/fiscal stability', position: '? Lists “district accountability” but no specific budget or closure position', comparison: 'Orozco has published no positions.' },
          { topic: 'Special education/inclusion', position: '✓✓ Lived-experience parent leader on special education', comparison: 'Orozco has published no positions.' },
          { topic: 'School safety/climate', position: '✓ Lists safe and inclusive campuses as a priority', comparison: 'Orozco has published no positions.' },
          { topic: 'Family engagement', position: '✓ Leads the district’s parent ambassadors', comparison: 'Orozco’s parent role is described only by her ballot designation.' },
        ],
        money: 'No campaign finance totals published here as of Oct 8, 2026; filings are on the Alameda County Registrar’s campaign-disclosure pages.',
        endorsements: 'Her campaign site shows endorsement logos including “HEA” and “PPAMM” without naming the organizations; the Asian Pacific American Democratic Caucus lists her on its November 2026 candidates page.',
        notes: [],
      },
      {
        id: 'maria-orozco',
        name: 'Maria Araceli Orozco',
        party: 'NP',
        role: 'Parent/Caregiver/Student',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Orozco identifies as a parent, caregiver, and student; no governance, budget, or school-engagement record is documented in public sources.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No public record found beyond her ballot designation and candidate filing (declaration filed July 29, 2026).' },
            { criterionId: 'fiscal', assessment: 'unknown', evidence: 'No public budget or finance role documented.' },
            { criterionId: 'education', assessment: 'partial', evidence: 'Ballot designation lists her as a parent and a student.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'No community-organizing or district advisory role documented.' },
          ],
        },
        bio: [
          'Orozco’s ballot designation is Parent/Caregiver/Student. The Registrar’s list gives only an email address for her campaign; no website, platform, or news coverage was found.',
        ],
        scorecard: [
          { topic: 'Budget/fiscal stability', position: '? No public position', comparison: 'Fernelius names accountability as a priority but gives no specifics.' },
          { topic: 'Special education/inclusion', position: '? No public position', comparison: 'Fernelius is a special-education parent leader.' },
          { topic: 'School safety/climate', position: '? No public position', comparison: 'Fernelius lists safe and inclusive campuses.' },
        ],
        money: 'No campaign finance totals published here as of Oct 8, 2026; filings are on the Alameda County Registrar’s campaign-disclosure pages.',
        endorsements: 'None found.',
        notes: ['Read her statement in the county voter information guide for her own account of her priorities.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Fernelius', '◐', 'Leftward Progressives favor Fernelius, who centers safe and inclusive campuses and special-education families, over a candidate with no published positions.'],
      ['LL', 'Fernelius', '◐', 'Loyal Liberals value data-minded expertise and district experience, and Fernelius is a biostatistics-trained research director who leads the district’s parent ambassadors.'],
      ['LO', 'Fernelius', '○', 'Left-Out Left voters want accountability in a district cutting deeply, and Fernelius is a parent advocate rather than a political insider, though she has not said how she would handle cuts.'],
      ['OO', 'Fernelius', '◐', 'Order and Opportunity Left voters want safe campuses and better outcomes for children, both Fernelius priorities, and she is the only candidate with a documented school role.'],
      ['TM', 'Fernelius', '○', 'Tuned-Out Middle voters will know little about either candidate and lean weakly to the one with a visible record of working with families.'],
      ['PP', 'Fernelius', '○', 'Pragmatic and Polite Right voters value competence in a district under a fiscal stability plan, and Fernelius’s data background and stated accountability priority are the only documented qualifications.'],
      ['UR', 'Fernelius', '○', 'Unconventional Right voters care about how public money is spent, and Fernelius at least names district accountability, though her inclusion focus is less their priority.'],
      ['FC', '—', '—', 'Faith First Conservatives have no published positions from either candidate on curriculum or parental rights, so this column skips the race.', 'Neither candidate speaks to Faith First Conservatives’ priorities, so experience breaks the tie: Fernelius, a parent of two children on the autism spectrum, is vice chair of the district’s special-education advisory group, while Orozco has no documented record.'],
      ['NA', '—', '—', 'No Apologies Right voters have no published positions from either candidate on spending or school policy to act on, so this column skips the race.', 'With nothing from either candidate on No Apologies Right priorities, experience decides: Fernelius brings a biostatistics background and district parent-leadership roles to a board under a fiscal stability plan, though she has never served on a governing board.'],
    ]),
    counterArguments: [
      'LP/LL/OO (Fernelius ◐): But consider Orozco, or at least read her voter-guide statement, because Fernelius has never served on a governing board and has published no position on school closures or the budget.',
    ],
    readingLinks: [
      { label: 'HUSD: Fiscal Stability Plan 2025-2026', url: 'https://www.husd.us/departments/business-services/budget-department/budgetsolutions/fiscal-stability-plan-2025-2026', summary: 'The district’s own account of reserves and cuts the next trustee will inherit.' },
      { label: 'HUSD: trustee districting', url: 'https://www.husd.us/board/districting', summary: 'How and when the board moves to by-area elections.' },
    ],
  },

  // ---------------------------------------------------------------------------
  // Chabot-Las Positas CCD: Area 6
  // ---------------------------------------------------------------------------
  {
    id: 'clpccd-area-6',
    categoryId: 'school',
    title: 'Chabot-Las Positas Community College District, Trustee Area 6',
    tldrLabel: 'Chabot-Las Positas Area 6',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Chabot-Las Positas board governs Chabot College in Hayward and Las Positas College in Livermore: it adopts the district budget, sets tuition-adjacent policies and facilities plans, and hires the chancellor. Area 6 covers northwest Hayward and west San Lorenzo (district board page).',
      'Hal Gin has held the seat since 2005 and is the board president; his challenger is Joe Orlando Ramos, a former Hayward Unified trustee who was censured by that board in 2024. The race turns on continuity of a long-serving trustee versus a challenger whose recent public record is marked by that discipline.',
    ],
    introParagraphs: [
      'Gin (Chabot-Las Positas College Trustee) and Ramos (Author/Adult Educator) are the only two candidates the Alameda County Registrar lists for Area 6. Gin was first appointed to fill a vacancy in 2005 and has been board president four times.',
    ],
    legalRequirements: 'Registered voter residing in Trustee Area 6 of the Chabot-Las Positas Community College District.',
    qualificationCriteria: [
      { id: 'governance', label: 'Higher-education or public-board governance', detail: 'Trustees adopt policy and oversee the chancellor for two colleges.' },
      { id: 'fiscal', label: 'Budget, bond, and facilities oversight', detail: 'The district is carrying out a bond-funded modernization program and must manage state funding rules.' },
      { id: 'student', label: 'Student success and workforce programs', detail: 'Community colleges serve first-generation students, transfer pathways, and career training.' },
      { id: 'conduct', label: 'Conduct and working relationships', detail: 'Boards depend on trustees who work respectfully with staff and each other.' },
    ],
    candidates: [
      {
        id: 'hal-gin',
        name: 'Hal G. Gin',
        party: 'NP',
        role: 'Chabot-Las Positas College Trustee',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Gin has represented Area 6 since 2005 and has served as board president four times; he also spent more than three decades as an administrator at CSU East Bay.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'On the board since 2005, with four terms as president (district board page); also served on the Alameda County Board of Zoning Adjustments and Planning Commission.' },
            { criterionId: 'fiscal', assessment: 'met', evidence: 'Has voted on the district’s budgets and facilities program for over 20 years; specific bond votes were not reviewed here.' },
            { criterionId: 'student', assessment: 'met', evidence: 'More than three decades as an educator and student-affairs administrator at CSU East Bay; doctorate in education and organizational leadership (University of San Francisco).' },
            { criterionId: 'conduct', assessment: 'unknown', evidence: 'No conduct findings found in public sources.' },
          ],
        },
        bio: [
          'Gin is a retired CSU East Bay administrator who joined the board in 2005 and holds a doctorate in education and organizational leadership from the University of San Francisco, a master’s in public administration, and a bachelor’s in sociology (district board page). He has long been involved in Hayward-area civic groups, including the Lions Clubs, Chinese community associations, and Friends of Chabot College Foundation.',
          'The Registrar lists an email address but no campaign website for him.',
        ],
        recordVsChange:
          'Gin has provided two decades of continuity on a board overseeing two colleges and a large facilities program; the case for change would be an argument that a trustee in his fifth term has lost touch, which the challenger’s public record does not substantiate.',
        scorecard: [
          { topic: 'Budget/bond oversight', position: '? Long-time board votes; no published campaign statement reviewed', comparison: 'Ramos has published no budget position.' },
          { topic: 'Student success/transfer', position: '✓ Career in student affairs at a public university', comparison: 'Ramos is an adult educator and author.' },
          { topic: 'Workforce/CTE', position: '? No specific position found', comparison: 'Ramos has published none.' },
          { topic: 'Community ties', position: '✓ Deep roots in Hayward and San Lorenzo civic groups', comparison: 'Ramos has run for Hayward offices before.' },
        ],
        money: 'No campaign finance totals published here as of Oct 8, 2026; filings are on the Alameda County Registrar’s campaign-disclosure pages.',
        endorsements: 'None found.',
        notes: [],
      },
      {
        id: 'joe-ramos',
        name: 'Joe Orlando Ramos',
        party: 'NP',
        role: 'Author/Adult Educator',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Ramos has served on a K-12 school board and run for city office, but his record there includes a formal censure and a finding of a hostile work environment.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Served as a Hayward Unified trustee, including as board clerk in 2023 (East Bay Echo, Dec. 2023); no community college board service.' },
            { criterionId: 'fiscal', assessment: 'unknown', evidence: 'No public budget or facilities oversight record documented.' },
            { criterionId: 'student', assessment: 'partial', evidence: 'Ballot designation is Author/Adult Educator; details of his teaching are not documented.' },
            { criterionId: 'conduct', assessment: 'not-met', evidence: 'The Hayward Unified board censured a trustee named Joe Ramos in February 2024 and imposed sanctions after an outside investigation (see red flag).' },
          ],
        },
        bio: [
          'The Registrar lists Joe Orlando Ramos as an Author/Adult Educator (declaration filed July 20, 2026). Public reporting identifies a Joe Ramos who served on the Hayward Unified board and described as conservative by the local Hayward Herald newsletter; Ballotpedia lists a Joe Orlando Ramos in the 2018 Hayward City Council race. We matched these records by name and Hayward base; his ballot designation does not mention school-board service.',
        ],
        scorecard: [
          { topic: 'Budget/bond oversight', position: '? No position published', comparison: 'Gin has two decades of budget votes.' },
          { topic: 'Student success/transfer', position: '? No position published', comparison: 'Gin comes from student affairs administration.' },
          { topic: 'Workforce/CTE', position: '? No position published', comparison: 'Gin has none published either.' },
          { topic: 'Conduct/working relations', position: '✗ Formally censured by the Hayward Unified board in 2024 and sanctioned after an investigation', comparison: 'No conduct findings found for Gin.' },
        ],
        money: 'No campaign finance totals published here as of Oct 8, 2026; filings are on the Alameda County Registrar’s campaign-disclosure pages.',
        endorsements: 'None found.',
        redFlags: [
          {
            severity: 'severe',
            status: 'official-finding',
            text: 'In January 2024 Hayward Unified trustee Joe Ramos made a remark to a district administrator during a board meeting; the board issued a statement condemning it as unprovoked and as evoking racial violence. On Feb. 14, 2024 the board voted 4-1 to censure him, and later imposed permanent sanctions, including restricting him from school sites, after an outside investigation reportedly found significant evidence of a hostile work environment toward staff and students, particularly women and LGBTQ+ people. Ramos apologized for the remark but said no real investigation occurred and that the investigator never spoke to him.',
            whyItMatters: 'A community college trustee works with staff and students and votes on district personnel and student policies.',
            sources: [
              { label: 'Hayward Unified School District: Board statement regarding trustee remarks (Feb. 2, 2024)', url: 'https://www.husd.us/post-details/~board/all-news/post/board-statement-regarding-trustee-remarks' },
              { label: 'San Francisco Chronicle: board member punished', url: 'https://www.sfchronicle.com/bayarea/article/woke-kindergarten-investigation-offensive-comments-18691462.php' },
              { label: 'San Francisco Chronicle: investigation over offensive remark', url: 'https://www.sfchronicle.com/bayarea/article/woke-kindergarten-school-controversy-offensive-18649259.php' },
            ],
          },
        ],
        notes: ['Reporting does not name him with his middle name; the identification with the Registrar’s “Joe Orlando Ramos” rests on the name and the Hayward connection.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Gin', '●', 'Leftward Progressives, the group most supportive of LGBTQ rights, favor Gin over Ramos, whose former board censured him and found a hostile work environment toward women and LGBTQ+ people.'],
      ['LL', 'Gin', '●', 'Loyal Liberals take official findings seriously and value expertise, so they back Gin’s 20 years on the board and student-affairs career over a challenger censured by his previous board.'],
      ['LO', 'Gin', '◐', 'Left-Out Left voters distrust long-tenured insiders and Gin has held the seat since 2005, but Ramos’s censure and sanctions make him no credible alternative.'],
      ['OO', 'Gin', '●', 'Order and Opportunity Left voters want steady, respectful leadership for colleges that serve working students, which Gin’s record offers and Ramos’s sanctions undercut.'],
      ['TM', 'Gin', '◐', 'Tuned-Out Middle voters judge on plain trustworthiness, and Gin has a clean record while Ramos was censured and barred from school sites.'],
      ['PP', 'Gin', '●', 'Pragmatic and Polite Right voters penalize incivility and misconduct heavily, so they back Gin over Ramos, whose remark to an administrator drew a censure and permanent sanctions.'],
      ['UR', 'Gin', '○', 'Unconventional Right voters may sympathize with Ramos’s criticism of a progressive school program, but the censure and sanctions outweigh that, leaving a weak lean to Gin.'],
      ['FC', 'Gin', '○', 'Faith First Conservatives care about character, and Ramos’s censure and sanctions weigh against him, even for voters who share his objections to a progressive curriculum.'],
      ['NA', 'Ramos', '○', 'No Apologies Right voters strongly oppose progressive school programs and discount establishment discipline, so they lean to Ramos, who says he was punished without a real investigation, despite his censure and sanctions.', 'No Apologies Right voters who put experience first could back Gin, a board member since 2005 and four-time president with a career in student affairs, giving up a challenger who shares their views but carries a censure and sanctions from his last board.'],
    ]),
    counterArguments: [
      'NA (Ramos ○): But consider Gin, because Ramos was censured 4-1 and permanently sanctioned after an outside investigation reportedly found a hostile work environment toward staff and students; Ramos disputes the process but apologized for the remark.',
      'UR/FC (Gin ○): But consider Ramos, because his supporters say the investigation was one-sided and that he was punished for criticizing a program; read the sources and decide whether the sanctions were proportionate.',
      'LL/PP (Gin ●): But consider the case for turnover, because 20 years in one seat is a long time and Gin has published no campaign platform for this term.',
    ],
    readingLinks: [
      { label: 'Chabot-Las Positas: Board of Trustees members', url: 'https://clpccd.org/bot/boardmembers.php', summary: 'Official bios of current trustees, including Gin and Mojadedi.' },
      { label: 'HUSD: Board statement regarding trustee remarks', url: 'https://www.husd.us/post-details/~board/all-news/post/board-statement-regarding-trustee-remarks', summary: 'The board’s own statement about the 2024 incident.' },
    ],
  },

  // ---------------------------------------------------------------------------
  // Chabot-Las Positas CCD: Area 3
  // ---------------------------------------------------------------------------
  {
    id: 'clpccd-area-3',
    categoryId: 'school',
    title: 'Chabot-Las Positas Community College District, Trustee Area 3',
    tldrLabel: 'Chabot-Las Positas Area 3',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Chabot-Las Positas board governs Chabot College in Hayward and Las Positas College in Livermore: it adopts the district budget, oversees facilities and bond spending, and hires the chancellor. Area 3 covers South Hayward and Union City (district board page).',
      'The seat was filled by appointment in 2022 after a trustee moved out of the district; Harris Mojadedi, the appointee, is seeking his first full re-election against two newcomers. Challenger Wendy Huang has made oversight of the district’s $950 million modernization program and its funding formula central to her pitch.',
    ],
    introParagraphs: [
      'Three people filed: Mark Fay (Airworthiness Engineer), Wendy Huang (Real Estate Investor), and Harris Mojadedi (Chabot-Las Positas Governing Board Member), the incumbent. All three qualified by Aug. 7, 2026 (Alameda County Registrar). Voters choose one.',
    ],
    legalRequirements: 'Registered voter residing in Trustee Area 3 of the Chabot-Las Positas Community College District.',
    qualificationCriteria: [
      { id: 'governance', label: 'Higher-education or public-board governance', detail: 'Trustees adopt policy and oversee the chancellor for two colleges.' },
      { id: 'fiscal', label: 'Budget, bond, and facilities oversight', detail: 'The district runs a bond-funded modernization program, a reserve, and a retiree-health obligation.' },
      { id: 'student', label: 'Student success and workforce programs', detail: 'Community colleges serve first-generation students, transfer pathways, and career training.' },
      { id: 'community', label: 'Knowledge of the area and community ties', detail: 'Area 3 spans South Hayward and Union City.' },
    ],
    candidates: [
      {
        id: 'harris-mojadedi',
        name: 'Harris Mojadedi',
        party: 'NP',
        role: 'Chabot-Las Positas Governing Board Member',
        campaignUrl: 'https://www.harrismojadedi.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Mojadedi has held Area 3 since his 2022 appointment and was elected to a full term that November, and he previously chaired the Union City Planning Commission.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Chabot-Las Positas trustee since 2022 (appointed Feb. 2022 to fill a vacancy); former chair of the Union City Planning Commission and the Alameda County Human Relations Commission.' },
            { criterionId: 'fiscal', assessment: 'partial', evidence: 'Has voted on the district budget for about four years; policy analyst for UC Berkeley’s student fee portfolio; specific bond-oversight actions not documented on his site.' },
            { criterionId: 'student', assessment: 'met', evidence: 'Policy analyst at UC Berkeley and led diversity initiatives there; board member of the New Haven Schools Foundation.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Former chair of the Union City Planning Commission; lives and serves in the Union City-South Hayward area.' },
          ],
        },
        bio: [
          'Mojadedi, the son of Afghan refugees, holds a master’s in leadership studies from Saint Mary’s College and a bachelor’s in political science from San Jose State. He is a policy analyst at UC Berkeley supporting the student fee portfolio and chairs its Chancellor’s Staff Advisory Committee (district board page).',
          'His stated priorities are student success, workforce pathways, and equitable access to higher education.',
        ],
        recordVsChange:
          'Mojadedi brings four years of board experience and a public-administration background; the case for change is a challenger’s argument for stricter bond and budget oversight, though no specific failure on his record is documented.',
        scorecard: [
          { topic: 'Budget/bond oversight', position: '? No specific position published', comparison: 'Huang promises to fully staff the bond oversight committee and keep a $16M reserve.' },
          { topic: 'Student success', position: '✓ Priority on student success and access', comparison: 'Huang emphasizes advising for first-generation students.' },
          { topic: 'Workforce/CTE', position: '✓ Lists workforce pathways', comparison: 'Huang proposes expanded CTE and apprenticeships.' },
          { topic: 'Community ties', position: '✓ Union City Planning Commission and county commission service', comparison: 'Huang has run for Union City council.' },
        ],
        money: 'No campaign finance totals published here as of Oct 8, 2026; filings are on the Alameda County Registrar’s campaign-disclosure pages.',
        endorsements: 'No endorsements listed on his campaign site.',
        notes: [],
      },
      {
        id: 'wendy-huang',
        name: 'Wendy Huang',
        party: 'NP',
        role: 'Real Estate Investor',
        campaignUrl: 'https://www.voteforhuang.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Huang is a retired high-tech executive and real estate developer who has run for city office, with detailed district-finance priorities but no governing-board service.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board service documented; ran for Union City City Council, District 1 in 2024 and finished second with 35.5% (KQED results).' },
            { criterionId: 'fiscal', assessment: 'partial', evidence: 'Cites a career as a high-tech executive and real estate developer; proposes bond-oversight staffing, a $16M reserve, and retiree-health contributions (campaign site).' },
            { criterionId: 'student', assessment: 'partial', evidence: 'Says her sons transferred from community college to UCLA and UC Berkeley; proposes expanded CTE and student housing.' },
            { criterionId: 'community', assessment: 'met', evidence: '28-year resident of the district (campaign site).' },
          ],
        },
        bio: [
          'Huang describes herself as a retired high-tech executive, real estate developer, immigrant, wife, and mother who has lived in the district for 28 years. She says community college opened the door to UC Davis and a high-tech career.',
          'Her priorities are funding-formula reform and reserves, oversight of the $950 million Measure A modernization program, equity between the two campuses, workforce programs, student housing, and actuary-guided contributions to the retiree health trust, which she says carries a $114 million net liability.',
        ],
        scorecard: [
          { topic: 'Budget/bond oversight', position: '✓✓ Detailed plan: fully staff the Citizens’ Bond Oversight Committee, keep the $16M reserve', comparison: 'Mojadedi has published no specific budget plan.' },
          { topic: 'Student success', position: '✓ Advising and mentorship for first-generation students at Chabot', comparison: 'Mojadedi lists student success generally.' },
          { topic: 'Workforce/CTE', position: '✓✓ Expand CTE, apprenticeships, healthcare and manufacturing training', comparison: 'Mojadedi lists workforce pathways generally.' },
          { topic: 'Student housing', position: '✓ Move housing planning grants to a funded, built project', comparison: 'Mojadedi has not published a housing position.' },
        ],
        money: 'Her site says the campaign is paid for by Wendy Huang. Other totals not published here as of Oct 8, 2026.',
        endorsements: 'None listed on her campaign site.',
        notes: ['Wendy Huang also appeared on the Congressional District 14 primary ballot in 2026, per a June 2, 2026 fact-check; the record does not state whether it is the same person.'],
      },
      {
        id: 'mark-fay',
        name: 'Mark Fay',
        party: 'NP',
        role: 'Airworthiness Engineer',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Fay’s ballot designation is Airworthiness Engineer; no campaign site, statement, or government service is documented in public sources.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No public record found beyond the candidate filing (declaration filed July 31, 2026).' },
            { criterionId: 'fiscal', assessment: 'unknown', evidence: 'No public budget role documented.' },
            { criterionId: 'student', assessment: 'unknown', evidence: 'No education or workforce role documented; an engineering background could relate to technical programs.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'No community role documented.' },
          ],
        },
        bio: ['Fay is listed with the ballot designation Airworthiness Engineer. The Registrar’s list gives no website; read his statement in the county voter information guide.'],
        scorecard: [
          { topic: 'Budget/bond oversight', position: '? No public position', comparison: 'Huang has published a detailed plan.' },
          { topic: 'Student success', position: '? No public position', comparison: 'Mojadedi names student success as a priority.' },
          { topic: 'Workforce/CTE', position: '? No public position', comparison: 'Huang proposes expanded CTE and apprenticeships.' },
        ],
        money: 'No campaign finance totals published here as of Oct 8, 2026; filings are on the Alameda County Registrar’s campaign-disclosure pages.',
        endorsements: 'None found.',
        notes: [],
      },
    ],
    crossTypology: ct([
      ['LP', 'Mojadedi', '◐', 'Leftward Progressives favor Mojadedi’s focus on equitable access and his diversity work at UC Berkeley over Huang, a real estate investor whose pitch centers on reserves and liabilities.'],
      ['LL', 'Mojadedi', '●', 'Loyal Liberals value public-sector expertise, and Mojadedi is a sitting trustee, UC Berkeley policy analyst and former chair of the Union City Planning Commission and county Human Relations Commission.'],
      ['LO', 'Huang', '○', 'Left-Out Left voters distrust insiders, and Mojadedi first got the seat by appointment, so they lean to Huang’s specific demands for bond oversight, student housing and apprenticeships.', 'Left-Out Left voters who weigh experience could stay with Mojadedi, a trustee since 2022 and former Union City Planning Commission chair focused on equitable access, giving up Huang’s specific demands for bond oversight and student housing.'],
      ['OO', 'Huang', '○', 'Order and Opportunity Left voters want concrete paths to good jobs, and Huang proposes expanded career-tech, apprenticeships and healthcare and manufacturing training, while Mojadedi lists workforce pathways only in general terms.', 'Order and Opportunity Left voters who prefer steady hands could keep Mojadedi, who has voted on four years of district budgets and works in higher-education policy, trading Huang’s detailed job-training plan for proven board service.'],
      ['TM', 'Huang', '○', 'Tuned-Out Middle voters respond to concrete benefits, and Huang promises student housing and job-training programs, though few will know any of the three names.', 'Tuned-Out Middle voters who let experience decide could pick Mojadedi, the sitting trustee and a former city planning commission chair, over Huang, who has never served on a governing board.'],
      ['PP', 'Huang', '○', 'Pragmatic and Polite Right voters value fiscal prudence, and Huang’s plan to fully staff bond oversight, keep a $16 million reserve and fund retiree health on actuarial advice speaks to that, though Mojadedi has the board experience they also prize.', 'Pragmatic and Polite Right voters who value proven governance could keep Mojadedi, who has voted on district budgets for about four years, setting aside Huang’s more detailed reserve and bond-oversight plan.'],
      ['UR', 'Huang', '◐', 'Unconventional Right voters want tighter control of public spending, and Huang, a businesswoman and outsider, pledges scrutiny of the $950 million bond program and the retiree-health liability.', 'Unconventional Right voters who doubt an untested challenger could choose Mojadedi for his board and commission service, though he names no specific bond-oversight actions and Huang is the one promising to scrutinize spending.'],
      ['FC', 'Huang', '○', 'Faith First Conservatives want limited, careful government spending, and Huang’s reserve and liability discipline fits that, though nothing in the race touches their social priorities.', 'Faith First Conservatives who weigh experience could choose Mojadedi, a sitting trustee since 2022 who previously chaired two local commissions, though he has published no budget plan.'],
      ['NA', 'Huang', '◐', 'No Apologies Right voters prefer a businessperson challenging the establishment over an appointed incumbent who led diversity initiatives, and Huang promises bond scrutiny and budget discipline.', 'No Apologies Right voters who want proven governance could choose Mojadedi, a sitting trustee with a public-administration career, trading Huang’s reserve and bond-oversight pledges for an incumbent with no published budget plan.'],
    ]),
    counterArguments: [
      'UR/NA (Huang ◐): But consider Mojadedi, because Huang has never served on a governing board, and her figures on the district’s reserves and liabilities come from her own campaign site rather than an independent audit.',
      'LL (Mojadedi ●): But consider Huang, because a trustee should be able to point to specific oversight of a $950 million bond program, and Mojadedi’s campaign site names none.',
    ],
    readingLinks: [
      { label: 'Chabot-Las Positas: Board of Trustees members', url: 'https://clpccd.org/bot/boardmembers.php', summary: 'Official bios of current trustees.' },
      { label: 'Wendy Huang campaign site', url: 'https://www.voteforhuang.com', summary: 'Detailed priorities on bond oversight, reserves, and student housing (self-reported).' },
    ],
  },

  // ---------------------------------------------------------------------------
  // AC Transit Ward 4
  // ---------------------------------------------------------------------------
  {
    id: 'ac-transit-ward-4',
    categoryId: 'district',
    title: 'AC Transit District Director, Ward 4',
    tldrLabel: 'AC Transit Ward 4',
    seatContext: 'Incumbent director',
    kind: 'candidates',
    stakesParagraphs: [
      'The AC Transit board sets bus routes, fares, and the budget for the East Bay’s largest bus system. The agency projects shortfalls of $60 million in fiscal 2027 and about $43 to 53 million a year after that, and has a contingency plan that could cut service about 16% and put up to 300 jobs at risk starting June 2027 if new funding does not arrive (AC Transit budget FAQ).',
      'Measure RTM on this same ballot would send AC Transit an estimated $51 million a year if it passes (AC Transit). The Ward 4 director will vote on whether to implement cuts, raise fares, or pursue other funding.',
    ],
    introParagraphs: [
      'Sarah Syed (AC Transit Director) and Gabriel Morales (Educator) are the only candidates the Registrar lists for Ward 4. AC Transit describes Syed as the Ward 3 director, with a term expiring in December 2026; her 2026 filing is in Ward 4 after the board’s phased redistricting that took effect over the 2024 and 2026 cycles. Ward numbers and boundaries have changed, so check your sample ballot.',
    ],
    legalRequirements: 'Registered voter residing in the ward being elected.',
    qualificationCriteria: [
      { id: 'governance', label: 'Transit-agency governance', detail: 'Directors adopt the budget, fares, and service plans for a large public agency.' },
      { id: 'transit', label: 'Transportation planning and operations knowledge', detail: 'Route design and safety decisions require technical literacy.' },
      { id: 'fiscal', label: 'Budget and fiscal-crisis management', detail: 'The board faces annual deficits and a possible service-cut plan.' },
      { id: 'conduct', label: 'Working relationship with staff and board', detail: 'Directors set policy and avoid directing staff work.' },
    ],
    candidates: [
      {
        id: 'sarah-syed',
        name: 'Sarah Syed',
        party: 'NP',
        role: 'AC Transit Director',
        campaignUrl: 'https://www.sarahfortransit.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Syed has served on the AC Transit board since 2022 and spent her career as a transportation planner at Los Angeles Metro, VTA, Palo Alto, and Oakland.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'AC Transit director since Dec. 2022 (AC Transit board page); earlier served on the Berkeley Transportation Commission.' },
            { criterionId: 'transit', assessment: 'met', evidence: 'Senior Manager at LA Metro, Senior Transportation Planner at the City of Palo Alto, Design Manager at VTA; master’s degrees in civil engineering and city planning from UC Berkeley.' },
            { criterionId: 'fiscal', assessment: 'partial', evidence: 'Has voted on the board’s budgets and fare changes for four years; challenged the outgoing general manager’s separation terms in Dec. 2024 (Oaklandside).' },
            { criterionId: 'conduct', assessment: 'partial', evidence: 'An investigator hired by the agency found her emails to staff could have been read as directing their work; the board voted 6-1 not to censure her (see red flag).' },
          ],
        },
        bio: [
          'Syed is a transportation equity program manager at UC Berkeley’s Othering & Belonging Institute and was elected to the AC Transit board in November 2022 with about 70% of the vote. She holds two master’s degrees from UC Berkeley and previously worked at LA Metro, the City of Palo Alto, VTA, and the City of Oakland.',
          'In December 2024 she criticized what she called a “sweetheart deal” for the outgoing general manager, Michael Hursh (Oaklandside).',
        ],
        recordVsChange:
          'Syed brings the most technical transit background on the board and has pushed on spending and oversight; the case for change is the board’s January 2025 finding of a staff-direction problem and her frequent isolation in votes.',
        scorecard: [
          { topic: 'Budget/service cuts', position: '? Has not published a position on the contingency service plan', comparison: 'Morales has published no positions.' },
          { topic: 'Fares', position: '✓ Argued in March 2025 that the 2019 fare increase proposal should be reexamined', comparison: 'Morales has published no positions.' },
          { topic: 'Accountability', position: '✓ Criticized the general manager’s separation deal', comparison: 'Morales has published no positions.' },
          { topic: 'Regional measure', position: '? No Syed position found on Measure RTM', comparison: 'Morales has published no positions.' },
        ],
        money: 'No campaign finance totals published here as of Oct 8, 2026; filings are on the Alameda County Registrar’s campaign-disclosure pages.',
        endorsements: 'Listed among supporters of BART Director Robert Raburn (his site); other endorsements not found.',
        redFlags: [
          {
            severity: 'notable',
            status: 'disputed',
            text: 'An investigator hired by AC Transit found that emails Syed sent to Realign project staff on May 23, 2023 and June 5, 2024 could have been interpreted as directing staff work, which directors may not do. In January 2025 the board voted 6-1 not to censure her and instead approved board training and coaching for her. Syed cast the only no vote, arguing she had been singled out and that a censure would set “a scary precedent.”',
            whyItMatters: 'Directors set policy but are not supposed to direct agency staff, so the finding bears on how she would work with management.',
            sources: [
              { label: 'Richmond Confidential: AC Transit board backs off censuring member', url: 'https://richmondconfidential.org/2025/01/09/richmond-ac-transit-director-syed-censure-vote/' },
              { label: 'Oaklandside: director who accused the board of a sweetheart deal gets scolded', url: 'https://oaklandside.org/2025/01/10/ac-transit-sarah-syed-michael-hursh-censure/' },
            ],
          },
        ],
        notes: ['The Registrar’s incumbent flag for her is “N” because the ward numbers changed; AC Transit’s own board page lists her as a sitting director.'],
      },
      {
        id: 'gabriel-morales',
        name: 'Gabriel Morales',
        party: 'NP',
        role: 'Educator',
        campaignUrl: 'https://electgabrielmorales.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Morales’s ballot designation is Educator; no governance, transit, or budget record is documented in public sources.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No public record found beyond his candidate filing (Aug. 7, 2026).' },
            { criterionId: 'transit', assessment: 'unknown', evidence: 'No transit-planning or operations role documented.' },
            { criterionId: 'fiscal', assessment: 'unknown', evidence: 'No budget role documented.' },
            { criterionId: 'conduct', assessment: 'unknown', evidence: 'No conduct findings found.' },
          ],
        },
        bio: ['Morales is listed with the ballot designation Educator and filed on the last day, Aug. 7, 2026. The Registrar lists a campaign site and an email address; his site did not load when checked, and no news coverage of his candidacy was found.'],
        scorecard: [
          { topic: 'Budget/service cuts', position: '? No public position', comparison: 'Syed has voted on budget items for four years.' },
          { topic: 'Transit planning', position: '? No public position', comparison: 'Syed is a professional transportation planner.' },
          { topic: 'Accountability', position: '? No public position', comparison: 'Syed criticized the general manager’s separation deal.' },
        ],
        money: 'No campaign finance totals published here as of Oct 8, 2026; filings are on the Alameda County Registrar’s campaign-disclosure pages.',
        endorsements: 'None found.',
        notes: ['Read his statement in the county voter information guide.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Syed', '●', 'Leftward Progressives back transit equity and challenges to executive pay, and Syed runs a transportation equity program and called the outgoing general manager’s exit package a “sweetheart deal.”'],
      ['LL', 'Syed', '◐', 'Loyal Liberals value Syed’s deep transit-planning expertise during a funding crisis, though they take seriously the agency investigator’s finding that her emails could be read as directing staff.'],
      ['LO', 'Syed', '◐', 'Left-Out Left voters distrust insiders protecting each other, and Syed is the director who challenged the general manager’s separation deal, though the board’s staff-direction finding gives them pause.'],
      ['OO', 'Syed', '◐', 'Order and Opportunity Left voters who rely on buses to get to work want competent service management, which Syed’s planning career offers over a candidate with no documented record.'],
      ['TM', 'Syed', '○', 'Tuned-Out Middle voters who ride the bus care about fares and service, and Syed pushed to reexamine a fare-increase proposal, though most will not know either name.'],
      ['PP', 'Syed', '○', 'Pragmatic and Polite Right voters prize competence but also working well with colleagues, so Syed’s expertise earns only a weak lean given the board’s finding and her frequent 6-1 isolation.'],
      ['UR', 'Syed', '○', 'Unconventional Right voters dislike insider perks, and Syed challenged the outgoing manager’s separation pay, though her equity focus is not their priority.'],
      ['FC', '—', '—', 'Faith First Conservatives have no position from either candidate on issues they weigh, so this column skips the race.', 'Neither candidate speaks to Faith First Conservatives’ priorities, so experience breaks the tie: Syed brings planning work at LA Metro, VTA and Palo Alto plus four years on this board, against a challenger with no documented record.'],
      ['NA', '—', '—', 'No Apologies Right voters have no candidate who speaks to cutting spending or regulation, so this column skips the race.', 'With no stated positions on fares or spending, experience becomes the tie-breaker: Syed has voted on four years of budgets and pushed to reexamine a fare increase, though the board ordered coaching after a staff-direction finding.'],
    ]),
    counterArguments: [
      'LP (Syed ●): But consider Morales, or read his voter-guide statement, because an investigator found Syed’s emails could be read as directing staff, and a director often outvoted 6-1 may struggle to build coalitions.',
      'LL/LO/OO (Syed ◐): But consider that the board chose coaching over censure, and Syed called the process a singling-out, so weigh whether the finding reflects her conduct or board politics.',
    ],
    readingLinks: [
      { label: 'AC Transit: budget outlook and FAQ', url: 'https://www.actransit.org/budget-faq', summary: 'Deficit projections, the contingency service plan, and what Measure RTM would mean for AC Transit.' },
      { label: 'AC Transit: Director Sarah Syed', url: 'https://www.actransit.org/Sarah-Syed', summary: 'Official bio and background.' },
    ],
  },

  // ---------------------------------------------------------------------------
  // BART District 4
  // ---------------------------------------------------------------------------
  {
    id: 'bart-district-4',
    categoryId: 'district',
    title: 'BART Director, District 4',
    tldrLabel: 'BART District 4',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The nine-member BART board sets fares, service levels, the budget, and transit-oriented development on BART land. Four seats (Districts 2, 4, 6, and 8) are up in 2026 (BART). Directors serve four-year terms.',
      'BART says it faces structural deficits; advocates at Seamless Bay Area cite $350 to $400 million a year starting in fiscal 2027 and say service would be cut sharply without new funding. Measure RTM on this ballot would send BART an estimated $136 million a year from Alameda County (GrowSF estimate). The District 4 director will vote on how BART responds either way.',
    ],
    introParagraphs: [
      'Robert Raburn, first elected in 2010, faces Luis Reynoso (University Business Professor). The Registrar lists both as qualified; the BART page does not show other candidates in District 4. The district lines were redrawn in 2022 and cover part of Hayward.',
    ],
    legalRequirements: 'Registered voter residing in BART District 4 (BART Director Elections page).',
    qualificationCriteria: [
      { id: 'governance', label: 'Transit-agency governance', detail: 'Directors set fares, service, and capital spending for a large rail system.' },
      { id: 'fiscal', label: 'Budget and fiscal-crisis management', detail: 'BART is bridging a post-pandemic funding gap and bond obligations.' },
      { id: 'planning', label: 'Transportation and land-use planning', detail: 'BART controls land around stations and decides on housing and access projects.' },
      { id: 'safety', label: 'Rider safety and service quality', detail: 'Police staffing, cleanliness, and reliability drive ridership recovery.' },
    ],
    candidates: [
      {
        id: 'robert-raburn',
        name: 'Robert Raburn',
        party: 'NP',
        role: 'BART Director',
        campaignUrl: 'https://www.robertraburn.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Raburn has served on the BART board since November 2010, was board president in 2018, and is a transportation planner with 34 years of experience.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'BART director since Nov. 2, 2010; board president in 2018 (BART board page and campaign site).' },
            { criterionId: 'fiscal', assessment: 'met', evidence: 'Chaired the Alameda County Measure B Citizens Watchdog Committee for a decade before being elected; says he helped secure a $300 million BART green bond at 3.57% (campaign site, self-reported).' },
            { criterionId: 'planning', assessment: 'met', evidence: 'Transportation planner for 34 years; supported BART’s 2016 transit-oriented development policy aiming for 20,000 housing units (35% affordable) on BART property (campaign site).' },
            { criterionId: 'safety', assessment: 'partial', evidence: 'Says he pushed for more Community Service Officers and filling police vacancies; ridership and cleanliness results not independently assessed here.' },
          ],
        },
        bio: [
          'Raburn is a professional transportation planner who joined the BART board in 2010 after defeating a three-term incumbent. He won re-election in 2018 with 56% of the vote, and his 2022 race was decided outright when the general election was canceled (Ballotpedia).',
          'His campaign says he championed an order of 775 new cars, created BART’s Environmental/Sustainability Committee that led to wind and solar contracts, and now prioritizes financial recovery, safety, and housing near stations.',
        ],
        recordVsChange:
          'Raburn offers 15 years of board experience during a funding crisis and wide support from East Bay officials and Democratic groups; the case for change would rest on BART’s post-pandemic deficits, which the whole board shares, and the challenger has not presented a specific alternative.',
        scorecard: [
          { topic: 'Fiscal recovery', position: '✓✓ Supports a business model less dependent on fares and backs the regional measure', comparison: 'Reynoso has published no specific plan.' },
          { topic: 'Housing near stations', position: '✓✓ Backed the 2016 TOD policy (20,000 homes, 35% affordable)', comparison: 'Reynoso has published no position.' },
          { topic: 'Safety/policing', position: '✓ Wants BART Police vacancies filled with harm-reduction training and Community Service Officers', comparison: 'Reynoso has published no position.' },
          { topic: 'Climate/clean power', position: '✓ Created the sustainability committee that produced wind and solar contracts', comparison: 'Reynoso has published no position.' },
          { topic: 'Regional measure', position: '✓ Says BART, AC Transit, Muni, and Caltrain need the regional measure to avoid losing service', comparison: 'Reynoso has published no position.' },
        ],
        money: 'No campaign finance totals published here as of Oct 8, 2026; filings are on the Alameda County Registrar’s campaign-disclosure pages.',
        endorsements: 'Rep. Lateefah Simon; State Sen. Jesse Arreguín; Assemblymember Liz Ortega; Supervisors Nate Miley and David Haubert; BART board president Melissa Hernandez; Hayward Mayor Mark Salinas; Alameda County Democrats; Sierra Club; East Bay for Everyone; Seamless Bay Area (his campaign site).',
        notes: ['Ballotpedia’s tenure start (2018) conflicts with BART’s own profile (first elected Nov. 2, 2010); BART’s date is used here.'],
      },
      {
        id: 'luis-reynoso',
        name: 'Luis Reynoso',
        party: 'NP',
        role: 'University Business Professor',
        campaignUrl: 'https://electreynoso.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Reynoso is a repeat candidate with a business-professor designation; transit-governance or planning experience is not documented.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'BallotReady lists him with Hayward Unified and Chabot-Las Positas candidacies in 2020 and 2024 and a 2024 U.S. House primary run; the details of any board service are not documented on his filing.' },
            { criterionId: 'fiscal', assessment: 'unknown', evidence: 'No public budget role documented.' },
            { criterionId: 'planning', assessment: 'unknown', evidence: 'No planning role documented.' },
            { criterionId: 'safety', assessment: 'unknown', evidence: 'No public-safety or transit-operations role documented.' },
          ],
        },
        bio: [
          'Reynoso is listed as a University Business Professor with a Castro Valley address and a campaign website. BallotReady lists previous campaigns for Hayward Unified and Chabot-Las Positas boards (2020, 2024) and for the 2024 U.S. House primary in the 14th District. No platform for BART was found.',
        ],
        scorecard: [
          { topic: 'Fiscal recovery', position: '? No public position', comparison: 'Raburn backs the regional measure and a less fare-dependent model.' },
          { topic: 'Housing near stations', position: '? No public position', comparison: 'Raburn backed the 2016 TOD policy.' },
          { topic: 'Safety/policing', position: '? No public position', comparison: 'Raburn wants police vacancies filled.' },
        ],
        money: 'No campaign finance totals published here as of Oct 8, 2026; filings are on the Alameda County Registrar’s campaign-disclosure pages.',
        endorsements: 'None found.',
        notes: ['Read his statement in the county voter information guide for his BART platform.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Raburn', '●', 'Leftward Progressives back strong climate action and affordable housing, and Raburn created BART’s sustainability committee and backed a plan for 20,000 homes near stations, 35% affordable.'],
      ['LL', 'Raburn', '●', 'Loyal Liberals value expertise and institutional experience, and Raburn is a 34-year transportation planner, a former board president and a past chair of the county transportation-tax watchdog committee.'],
      ['LO', 'Raburn', '○', 'Left-Out Left voters may see a 15-year director as an insider, but Reynoso has published no BART platform, so they lean weakly to the incumbent.'],
      ['OO', 'Raburn', '◐', 'Order and Opportunity Left voters want safe, reliable trains to get to work, and Raburn pushes to fill BART police vacancies and add community service officers.'],
      ['TM', 'Raburn', '○', 'Tuned-Out Middle voters who ride BART care about service staying open, and Raburn has a record on recovery and safety while Reynoso has published nothing.'],
      ['PP', 'Raburn', '◐', 'Pragmatic and Polite Right voters value experience and fiscal oversight, and Raburn chaired a citizens’ watchdog committee for a decade, though they may be warier of his support for a new regional sales tax.'],
      ['UR', 'Raburn', '○', 'Unconventional Right voters care about rider safety and want police vacancies filled, which Raburn supports, though they are cool to long-serving officials and new transit taxes.'],
      ['FC', '—', '—', 'Faith First Conservatives have no position from either candidate on matters they weigh, so this column skips the race.', 'Neither candidate addresses Faith First Conservatives’ priorities, so experience is the tie-breaker: Raburn is a transportation planner of 34 years and former board president who has pushed to fill BART police vacancies.'],
      ['NA', 'Reynoso', '○', 'No Apologies Right voters oppose the regional transit tax and prefer challengers to long-serving officials, so they lean to Reynoso over an incumbent who backs the tax, though Reynoso has published no BART platform.', 'No Apologies Right voters who put experience first could back Raburn, a director since 2010 and former board president who wants police vacancies filled, though he supports the regional sales tax they oppose.'],
    ]),
    counterArguments: [
      'NA (Reynoso ○): But consider Raburn, because Reynoso has published no BART platform and has no documented transit experience, while Raburn has 15 years on the board and backs filling police vacancies.',
      'LP/LL (Raburn ●): But consider Reynoso, because BART’s post-pandemic deficits happened on the current board’s watch, and relying on a regional sales tax is a bet that voters will bail the system out.',
    ],
    readingLinks: [
      { label: 'BART: Director elections', url: 'https://www.bart.gov/node/24381', summary: 'Which seats are up in 2026 and how candidates qualify.' },
      { label: 'Robert Raburn: endorsements', url: 'https://www.robertraburn.com/endorsements', summary: 'The incumbent’s own endorsement list.' },
    ],
  },

  // ---------------------------------------------------------------------------
  // EBRPD Ward 3
  // ---------------------------------------------------------------------------
  {
    id: 'ebrpd-ward-3',
    categoryId: 'district',
    title: 'East Bay Regional Park District Director, Ward 3',
    tldrLabel: 'EBRPD Ward 3',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The East Bay Regional Park District board runs the park system across Alameda and Contra Costa counties: it adopts the budget, sets fees, approves land purchases and trail projects, and manages wildfire fuel work. Ward 3 covers Castro Valley, Fairview, part of Hayward, part of San Lorenzo, Union City, and part of Fremont (EBRPD notice of election).',
      'Outgoing Ward 3 Director Dennis Waespi is not on the ballot (per a candidate’s endorsements page), so the seat is open. Voters will choose among three newcomers.',
    ],
    introParagraphs: [
      'The Registrar lists three candidates: Joseph Grcar (Retired Laboratory Scientist), Rebecca Lewington (Retired Brand Strategist), and William Yragui (Business Owner). All filed in July or August 2026.',
    ],
    legalRequirements: 'Registered voter residing in Ward 3 of the East Bay Regional Park District.',
    qualificationCriteria: [
      { id: 'governance', label: 'Public-board governance experience', detail: 'Directors adopt policy and the budget for a large public agency.' },
      { id: 'parks', label: 'Park, trail, and open-space knowledge', detail: 'Land and trail decisions require familiarity with parks and conservation.' },
      { id: 'fiscal', label: 'Budget and bond stewardship', detail: 'The district relies on bonds, grants, and fees for acquisitions and maintenance.' },
      { id: 'wildfire', label: 'Wildfire and climate resilience', detail: 'Fuel management and tree mortality are central district challenges.' },
    ],
    candidates: [
      {
        id: 'william-yragui',
        name: 'William Yragui',
        party: 'NP',
        role: 'Business Owner',
        campaignUrl: 'https://yragui4ebrpd.org',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Yragui has years of documented park advocacy and co-founded a conservancy, but has no elected or appointed government service.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board service documented; co-founded the Mission Peak Conservancy and chaired a Sierra Club group (campaign site).' },
            { criterionId: 'parks', assessment: 'met', evidence: 'Advocate for park access for many years, including trail expansion such as the proposed Niles Canyon Trail and Bay Ridge; led outings in EBRPD parks (campaign site).' },
            { criterionId: 'fiscal', assessment: 'unknown', evidence: 'No public budget role documented; business ownership noted on the ballot.' },
            { criterionId: 'wildfire', assessment: 'partial', evidence: 'Lists wildfire readiness and resilient landscapes as priorities; no wildfire-management role documented.' },
          ],
        },
        bio: [
          'Yragui describes himself as a longtime park advocate and co-founder of the Mission Peak Conservancy who has led hikes in district parks and chaired a Sierra Club group. His priorities are protecting open space, welcoming every community, preparing for climate change, and transparent decisions.',
        ],
        scorecard: [
          { topic: 'Open space/conservation', position: '✓✓ Longtime open-space advocate; priority to safeguard habitat and watersheds', comparison: 'Lewington frames conservation and recreation as partners.' },
          { topic: 'Access/equity', position: '✓ Priority on safe, equitable access for all ages and abilities', comparison: 'Lewington lists “Parks for All.”' },
          { topic: 'Wildfire/climate', position: '✓ Invest in wildfire readiness and long-term maintenance', comparison: 'Lewington emphasizes reforestation and fuels management.' },
          { topic: 'Transparency', position: '✓ Lists accountability and protecting public resources', comparison: 'Lewington stresses transparent use of taxpayer money.' },
        ],
        money: 'No campaign finance totals published here as of Oct 8, 2026; filings are on the Alameda County Registrar’s campaign-disclosure pages.',
        endorsements: 'Hayward, Tri-City, and Castro Valley Democratic clubs; East Bay Chapter of the League of Conservation Voters; outgoing Ward 3 Director Dennis Waespi; Fremont Mayor Raj Salwan; Hayward Council Members George Syrop and Francisco Zermeno; former Assemblymember Bill Quirk (his campaign site).',
        notes: ['Several endorsements on his site are personal statements; they were selected by the campaign.'],
      },
      {
        id: 'rebecca-lewington',
        name: 'Rebecca Lewington',
        party: 'NP',
        role: 'Retired Brand Strategist',
        campaignUrl: 'https://rebeccalewington.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Lewington is a retired engineer and communicator who volunteers on district trails and holds 15 U.S. patents; no governing-board service is documented.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board service documented.' },
            { criterionId: 'parks', assessment: 'met', evidence: 'Says she has hiked and biked East Bay regional parks for about 30 years and works as a volunteer trail worker (campaign site).' },
            { criterionId: 'fiscal', assessment: 'partial', evidence: 'Proposes combining bonds, grants, philanthropy, and fair fees; says she declines developer and fossil-fuel contributions; no public-budget role.' },
            { criterionId: 'wildfire', assessment: 'partial', evidence: 'Priorities include reforestation, native vegetation, and fuels management; no wildfire-management role documented.' },
          ],
        },
        bio: [
          'Lewington says she spent 30 years as an engineer and communicator in the IT and semiconductor industries and holds 15 U.S. patents. She is a volunteer trail worker who has trained as a crew lead.',
          'Her four priorities are climate resilience, parks for all, financial stewardship, and treating conservation and recreation as partners.',
        ],
        scorecard: [
          { topic: 'Open space/conservation', position: '✓ Conservation and recreation as partners', comparison: 'Yragui emphasizes safeguarding habitat and watersheds.' },
          { topic: 'Access/equity', position: '✓ Outreach, transportation links, and recreation programs', comparison: 'Yragui lists safe, equitable access.' },
          { topic: 'Wildfire/climate', position: '✓✓ Reforestation, native vegetation, fuels management, sea-level rise', comparison: 'Yragui lists wildfire readiness.' },
          { topic: 'Finance', position: '✓ Bonds, grants, philanthropy, fair fees; no developer or fossil-fuel money', comparison: 'Yragui lists transparency without financing detail.' },
        ],
        money: 'Says she does not accept contributions from developers, fossil-fuel interests, or others whose interests conflict with park well-being (campaign site). No totals published here as of Oct 8, 2026.',
        endorsements: 'Assemblymembers Buffy Wicks, Mia Bonta, and Liz Ortega; park Directors Elizabeth Echols and Luana España; Alameda County Democratic Party; Alameda Labor Council (AFL-CIO); AFSCME Council 57 and Local 2428 (park district employees); East Bay Stonewall Democratic Club; Hayward Mayor Mark Salinas (her campaign site).',
        notes: [],
      },
      {
        id: 'joseph-grcar',
        name: 'Joseph Grcar',
        party: 'NP',
        role: 'Retired Laboratory Scientist',
        campaignUrl: 'https://alamedacountyelections.org',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Grcar is a retired scientist and repeat candidate; no park, board, or land-management role is documented.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected service; Ballotpedia lists a 2024 BART District 5 loss (28.7%), a 2024 write-in run for State Senate, and a 2018 run for Assembly.' },
            { criterionId: 'parks', assessment: 'unknown', evidence: 'No park, trail, or conservation role documented.' },
            { criterionId: 'fiscal', assessment: 'unknown', evidence: 'No public budget role documented.' },
            { criterionId: 'wildfire', assessment: 'unknown', evidence: 'No wildfire role documented.' },
          ],
        },
        bio: ['Grcar is a retired U.S. Department of Energy scientist from Castro Valley who has run for a series of offices. The Registrar lists a website that appears to cover multiple county elections; no park-district platform was found.'],
        scorecard: [
          { topic: 'Open space/conservation', position: '? No public position', comparison: 'Yragui is a longtime open-space advocate.' },
          { topic: 'Finance', position: '? No public position', comparison: 'Lewington lays out bonds, grants, and fees.' },
          { topic: 'Wildfire/climate', position: '? No public position', comparison: 'Lewington stresses fuels management and reforestation.' },
        ],
        money: 'No campaign finance totals published here as of Oct 8, 2026; filings are on the Alameda County Registrar’s campaign-disclosure pages.',
        endorsements: 'None found.',
        notes: ['Read his statement in the county voter information guide for his own account of his platform.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Lewington', '●', 'Leftward Progressives favor Lewington, who refuses developer and fossil-fuel money, centers climate resilience and is backed by the labor council and park district workers’ union.'],
      ['LL', 'Lewington', '◐', 'Loyal Liberals value institutional and expert backing, and Lewington has the county Democratic Party, two sitting park directors and three Assemblymembers, though Yragui has the outgoing Ward 3 director and conservation voters.'],
      ['LO', 'Yragui', '○', 'Left-Out Left voters prefer grassroots outsiders to party-machine picks, and Yragui is a longtime trail advocate and conservancy co-founder rather than the county party’s choice.'],
      ['OO', 'Lewington', '○', 'Order and Opportunity Left voters want parks working families can reach, and Lewington proposes outreach, transportation links and recreation programs, with labor backing.'],
      ['TM', '—', '—', 'Tuned-Out Middle voters focus on household costs, and nothing in this park race changes their bills, so this column skips it.', 'Tuned-Out Middle voters who let experience decide could lean narrowly to Lewington: like Yragui she knows the parks firsthand, as a volunteer trail crew lead, and her bonds-grants-and-fees plan gives her a slight edge on budget stewardship. Neither has served on a board.'],
      ['PP', 'Lewington', '○', 'Pragmatic and Polite Right voters value careful stewardship, and Lewington lays out a plan to combine bonds, grants, philanthropy and fair fees, the most concrete financing plan in the race.'],
      ['UR', '—', '—', 'Unconventional Right voters have no candidate who speaks to lower taxes or smaller government in this race, so this column skips it.', 'Unconventional Right voters who let experience break the tie could lean narrowly to Lewington, whose financing plan partly addresses budget stewardship where Yragui shows no fiscal role; she is backed by the county Democratic Party and labor, which may cool their interest.'],
      ['FC', '—', '—', 'Faith First Conservatives have no position from any candidate on issues they weigh, so this column skips the race.', 'Faith First Conservatives who weigh experience could lean narrowly to Lewington: she has worked park trails for years as a volunteer crew lead and offers the only detailed financing plan, though neither newcomer has served on a board.'],
      ['NA', '—', '—', 'No Apologies Right voters find no candidate skeptical of climate mandates or new spending, so this column skips the race.', 'No Apologies Right voters who put experience first could lean narrowly to Lewington, a retired engineer whose bonds-grants-and-fees plan addresses budget stewardship, while giving up nothing on their priorities, since no candidate shares them.'],
    ]),
    counterArguments: [
      'LP/LL (Lewington ●/◐): But consider Yragui, because he has more documented years of park advocacy, and Lewington’s endorsements come largely from partisan and labor groups rather than park experts.',
      'LO (Yragui ○): But consider Lewington, because she has the more detailed financing and wildfire plan, and Yragui’s background is advocacy rather than budget management.',
    ],
    readingLinks: [
      { label: 'EBRPD: Notice of election (June 24, 2026)', url: 'https://www.ebparks.org/sites/default/files/Notice-of-Election-Newspaper-06242026.pdf', summary: 'Which wards are up and what areas Ward 3 covers.' },
      { label: 'Rebecca Lewington campaign site', url: 'https://rebeccalewington.com', summary: 'Priorities and endorsements (self-reported).' },
      { label: 'William Yragui campaign site', url: 'https://yragui4ebrpd.org', summary: 'Priorities, background, and endorsements (self-reported).' },
    ],
  },

  // ---------------------------------------------------------------------------
  // Hayward Measure CC
  // ---------------------------------------------------------------------------
  {
    id: 'hayward-measure-cc',
    categoryId: 'local-measures',
    title: 'Measure CC — Hayward Business License Tax modernization',
    tldrLabel: 'Hayward Measure CC — Business tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure CC would replace Hayward’s 1978 business license tax with one based on gross receipts. The choice is between more money for city services during a budget crunch and a permanent new cost on businesses that operate in Hayward (City Attorney impartial analysis). A no vote keeps the 1978 schedule and leaves the city to find savings elsewhere.',
    ],
    introParagraphs: [
      'The City Council voted unanimously on June 2, 2026 to place the measure on the ballot.',
    ],
    measure: {
      question:
        'HAYWARD BUSINESS LICENSE TAX MODERNIZATION: Shall the measure updating the Hayward Business License Tax for the first time since 1978, to support general city services, including neighborhood police protection, firefighting, 911 response, libraries, and pothole repair, generating an additional $12 million annually until repealed, with a minimum tax of $60 and rates from $.30 to $3.75 per $1,000 of gross receipts, with higher rates for higher-grossing businesses, as stated in the ordinance, be adopted?',
      yesMeans: 'Replaces Hayward’s 1978 business license tax with a gross-receipts tax of $0.30 to $3.75 per $1,000 ($60 minimum) from January 2027, raising about $12 million a year for general services.',
      noMeans: 'Keeps the 1978 business license fee schedule, so businesses pay what they do now and the city does not get the estimated $12 million a year.',
      funding: {
        asOf: 'Oct. 7, 2026',
        yes: {
          raised: '$89,425',
          topDonors: [
            'Hayward Firefighters PAC ($31,925, including $1,925 in printing)',
            'Hayward Police Officers Association ($25,000)',
            'SEIU Local 1021 ($20,000)',
            'California Professional Firefighters ($10,000)',
          ],
        },
        note: 'The yes committee is the Business Lic Tax Budget Committee Supporting Measure CC 2026. The total combines its Sept. 24 pre-election statement ($56,925 through Sept. 19) with late-contribution reports filed through Oct. 7. No committee has reported raising money against it.',
        sources: [
          { label: 'City of Hayward campaign finance portal (NetFile): Measure CC committee filings', url: 'https://netfile.com/public/HWD/campaign/measures' },
        ],
      },
      positions: [],
      measureType: 'City ordinance (general tax on businesses)',
      voteThreshold: 'Simple majority (50% + 1)',
      fiscalImpact:
        'About $12 million more per year for general city services, until repealed by voters; takes effect January 2027 if approved (City Attorney impartial analysis; Alameda County Registrar). It is a general tax, so revenue can go to any governmental purpose.',
      supporters: 'Councilmember Ray Bonilla Jr.; Hayward Firefighters Local 1909 (ballot argument); also Mayor Mark Salinas, Rep. Aisha Wahab, and Supervisor Elisa Marquez (Hoodline).',
      opponents: 'No argument against was filed with the city.',
      voterConnection: [
        'Business owners: what you pay would depend on your gross receipts rather than a flat fee or employee count.',
        'Residents do not pay it directly, though businesses can pass costs along in prices.',
      ],
      mechanismBullets: [
        'Gross-receipts brackets (up to $5M, $5–10M, $10–25M, $25–50M, over $50M) at $.30 to $3.75 per $1,000, with a $60 minimum.',
        'Businesses with Hayward employees but no reported Hayward gross receipts, such as back-office sites, pay $.70 per $1,000 of payroll instead.',
        'The ordinance text is on the city’s Legistar page.',
      ],
      argumentsFor: [
        'The tax has not changed since 1978 and no longer covers the cost of city services (ballot argument).',
        'Larger, higher-grossing businesses pay more and smaller ones less.',
        'The city faces a $26.4 million gap after its reserve ran out in July 2025, and has already cut staffing, library hours, and shelter services (City FAQ).',
        'The money stays local, with annual audits and public budget review (ballot argument).',
      ],
      argumentsAgainst: [
        'As a general tax, the money is not tied to specific services or to rebuilding reserves.',
        'The city’s FAQ says salaries and benefits grew 25% since fiscal 2023 against 3% revenue growth; cost control could come first.',
        'Firms with thin margins can be squeezed even under a progressive schedule.',
        'There is no sunset, so only a future ballot vote can end it.',
      ],
      readingLinks: [
        { label: 'City of Hayward: ballot measures page (Measure CC)', url: 'https://hayward-ca.gov/your-government/elections/ballot-measures', summary: 'Ballot question, impartial analysis, and argument in favor.' },
        { label: 'City of Hayward: Business License Tax modernization', url: 'https://www.hayward-ca.gov/blt', summary: 'The city’s explainer and contact for questions.' },
        { label: 'City of Hayward: Measure CC explained', url: 'https://hayward-ca.gov/discover/news/sep26/hayward-measure-cc-explained', summary: 'Plain-language summary of the change.' },
        { label: 'City of Hayward: General Fund Budget FAQ', url: 'https://hayward-ca.gov/content/general-fund-budget-faq', summary: 'Why the city says it needs revenue.' },
        { label: 'Hoodline: Hayward mayoral race tests budget choices and Measure CC', url: 'https://hoodline.com/2026/10/hayward-mayoral-race-tests-budget-choices-and-measure-cc/', summary: 'Who supports the measure and how the deficit arose.' },
        { label: 'Bay City News (Local News Matters): Voters asked to approve new business taxes in Hayward and Emeryville (Sep 21) (free sign-in to read)', url: 'https://localnewsmatters.org/2026/09/21/voters-asked-to-approve-new-business-taxes-this-november-in-hayward-and-emeryville/', summary: 'News report on the Hayward and Emeryville business tax measures on the Nov. 3 ballot and why the cities placed them there.' },
      ],
      explainerUrl: 'https://localnewsmatters.org/2026/09/21/voters-asked-to-approve-new-business-taxes-this-november-in-hayward-and-emeryville/',
    },
    crossTypology: ct([
      ['LP', 'Yes', '●', 'Leftward Progressives want corporations to pay more, and this tax charges higher-grossing businesses higher rates to protect libraries, 911 and city services.'],
      ['LL', 'Yes', '●', 'Loyal Liberals back revenue for services and trust the city’s repair plan, and modernizing a 1978 tax with audits and public budget review fits that.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters like a tax that falls on larger businesses rather than residents, but they distrust a City Hall that let reserves run out and a general tax with no service guarantee.'],
      ['OO', 'Yes', '●', 'Order and Opportunity Left voters want police, fire and 911 service protected and favor taxing corporations, and this measure is backed by the city’s firefighters and police officers association.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters don’t pay this tax directly and depend on city services, though businesses could pass costs along in prices.'],
      ['PP', 'Yes', '○', 'Pragmatic and Polite Right voters prefer lower taxes but accept targeted fixes, and updating a 48-year-old schedule after staff cuts and labor concessions, with larger firms paying more, is a cautious step.'],
      ['UR', 'No', '◐', 'Unconventional Right voters want smaller government and lower taxes, and a permanent new business tax from a city whose payroll costs grew 25% runs against both.'],
      ['FC', 'No', '◐', 'Faith First Conservatives want government services reduced and oppose new taxes, though many value the police and fire service the city says the money would protect.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose nearly all new taxes and want spending cut first, and the city’s own figures show salaries and benefits grew far faster than revenue.'],
    ]),
    hinges: {
      LP: 'Yes if asking bigger, higher-grossing businesses to pay more to protect libraries, 911 and city services fits your values. No if a general tax with no sunset may only fund more of the salary and benefit growth the city’s FAQ cites.',
      LL: 'Yes if updating a tax unchanged since 1978, with audits and public budget review, belongs in the city’s budget repair plan. No if the money isn’t tied to services or rebuilding reserves and you want cost control first.',
      LO: 'Yes if a schedule that charges larger businesses more outweighs your distrust of how City Hall spends. No if a general tax that doesn’t guarantee libraries, 911 or shelters will be protected isn’t enough for you.',
      OO: 'Yes if keeping police, fire and 911 service funded, paid by businesses rather than residents, comes first. No if small businesses with thin margins, which create local jobs, would be squeezed even under a progressive schedule.',
      TM: 'Yes if you don’t pay it directly and want library hours and city services kept. No if businesses passing the cost along in prices would hit your budget harder than the services help.',
      PP: 'Yes if the city’s cuts to staffing, library hours and shelter services show it tried savings first and this is a measured last step. No if the city’s own figures pointing to spending growth make a permanent new tax premature.',
      UR: 'Yes if deeper service cuts after the city’s staffing and library reductions worry you more than a tax on businesses. No if a city government that let its reserves run out shouldn’t get new money with no sunset.',
      FC: 'Yes if keeping police, fire and 911 service funded matters more to you than opposing a tax on businesses. No if you oppose new taxes and distrust a city revenue request with no end date.',
      NA: 'Yes if you believe supporters that the tax is the last piece after cuts and concessions and a No means deeper public-safety cuts. No if the deficit followed fast growth in compensation and a general tax with no sunset rewards it.',
    },
    counterArguments: [
      'UR/FC/NA (No ◐/●): But consider Yes, because the city has already cut staffing, library hours and shelter services and won labor concessions; supporters say the tax is the last piece, and a No means deeper service cuts.',
      'LP/LL/OO (Yes ●): But consider No, because the city’s FAQ ties the gap to a 25% jump in salaries and benefits, so a new tax without a sunset or a reserve-rebuild pledge may only fund more of the same spending.',
    ],
  },

  // ---------------------------------------------------------------------------
  // Regional Transit Measure (Alameda + Santa Clara, plus CC, SM, SF)
  // ---------------------------------------------------------------------------
  {
    id: 'bay-area-regional-transit-measure',
    categoryId: 'local-measures',
    title: 'Measure RTM — Regional Transit Measure (0.5% sales tax)',
    tldrLabel: 'Measure RTM — Regional transit tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure RTM is a regional sales tax to cover post-pandemic deficits at BART, Muni, Caltrain, AC Transit, and other agencies. The trade-off is a higher tax on everyday purchases versus large transit cuts. It is decided by the combined vote of all five counties, not county by county, so Hayward and Mountain View voters help decide for the whole region (KQED; League of Women Voters).',
    ],
    introParagraphs: [
      'SB 63 (the Connect Bay Area Act, signed October 2025) authorized it; the Connect Bay Area campaign qualified it with more than 305,000 signatures against 186,000 required, certified June 30, 2026.',
      'As a citizen initiative it needs only a simple majority. Opponents say that route avoids the two-thirds vote a government-placed special tax would need, which supporters acknowledge it never reached (Fleischman, opinion).',
    ],
    measure: {
      explainerUrl: 'https://www.kqed.org/voterguide/california/regional-measure-rtm',
      question:
        'To prevent major service cuts to BART and other transit, avoid increased traffic, and reduce pollution by: Preserving BART, Caltrain, VTA, SamTrans, AC Transit, Muni, other transit for everyone, including workers, students, seniors, persons with disabilities; Supporting transit safety, cleanliness, affordability, reliability; Repairing targeted roads/potholes; Requiring financial transparency, oversight, accountability; shall the measure enacting a 0.5% (Alameda, Contra Costa, San Mateo, Santa Clara counties), and 1% (San Francisco) sales tax for 14 years generating approximately $980,000,000 annually, be adopted?',
      yesMeans: 'Adds a 0.5% sales tax in Alameda and Santa Clara counties (1% in San Francisco) for 14 years, raising about $980 million a year for BART, AC Transit, Caltrain, VTA and others.',
      noMeans: 'Keeps current sales tax rates, and BART, AC Transit, Caltrain and other agencies must close projected deficits through service cuts or other funding.',
      funding: {
        asOf: 'Oct. 13, 2026',
        yes: {
          raised: '$8.0 million',
          topDonors: [
            'SEIU Local 1021 ($594K, including in-kind)',
            'Chris Larsen ($500K)',
            'Salesforce ($500K)',
            'TransitAmerica Services ($350K)',
          ],
        },
        no: {
          raised: '$20,175',
          topDonors: [
            'Contra Costa Taxpayers Association ($6,422)',
            'Tom Rubin ($1,255)',
            'Gregg Dieguez ($1,075)',
            'Marc Joffe ($1,075)',
          ],
        },
        note: 'Yes on RTM – Connect Bay Area Transit has raised money since 2025: $1.3 million in 2025, $5.5 million from January through Sept. 19 (pre-election statement, amended Oct. 12), and about $1.2 million in late contributions reported through Oct. 13. Other large donors include Anthropic, Meta, HNTB, ATU Local 1555, SEIU Local 521 and Nicholas Josefowitz ($250K each). The no committee, sponsored by the Contra Costa Taxpayers Association, reported $20,175 through Sept. 19.',
        sources: [
          { label: 'Santa Clara County campaign finance portal (NetFile): Regional Transit Measure committee filings', url: 'https://netfile.com/public/SCC/campaign/measures' },
        ],
      },
      positions: [
        { org: 'Santa Clara County Democratic Party', kind: 'party', position: 'Yes', url: 'https://sccdp.org/index.php/voter-resources/endorsements/2026-endorsements/' },
        { org: 'Alameda County Democratic Party', kind: 'party', position: 'Yes', url: 'https://www.inglesidelight.com/measure-rtm-explained/' },
        { org: 'San Francisco Chronicle', kind: 'editorial', position: 'Yes', url: 'https://www.sfchronicle.com/opinion/editorials/article/regional-transit-measure-bay-area-22424231.php' },
        { org: 'Mercury News / East Bay Times', kind: 'editorial', position: 'No', url: 'https://www.mercurynews.com/2026/10/09/endorsement-no-on-measure-rtm-transit-tax-bart-manufactured-crisis-vta-doesnt-have-one/' },
      ],
      measureType: 'Citizen initiative authorized by SB 63 (multi-county transit sales tax)',
      voteThreshold: 'Simple majority of the combined five-county vote',
      fiscalImpact:
        'Ballot label estimate: about $980 million a year; MTC says about $1 billion. The tax would run from April 1, 2027 to April 1, 2041 (GrowSF analysis of the ordinance). First-full-year estimates for Alameda County are about $210 million, including about $136 million for BART, $45 million for AC Transit, and $10 million for the county transportation agency; Santa Clara County about $290 million (GrowSF table, estimates).',
      supporters: 'Connect Bay Area campaign, with more than 80 elected officials and 90 organizations including Bay Area Council, SEIU 1021, ATU 1555, South Bay Labor Council, and SPUR; Sen. Scott Wiener, Sen. Jesse Arreguín, Rep. Nancy Pelosi, and Chris Larsen (KQED).',
      opponents: 'Contra Costa Taxpayers Association; San Francisco Taxpayers Association (KQED).',
      voterConnection: [
        'You pay half a cent more on each dollar of most taxable purchases in Alameda or Santa Clara County ($5 per $1,000 spent).',
        'Sales taxes weigh more heavily on lower-income households; riders who depend on transit face the cuts if it fails.',
        'If it fails: BART campaigners cite a 70% service cut, 9 p.m. closing, and station closures; AC Transit plans about a 16% cut from June 2027.',
      ],
      mechanismBullets: [
        'San Francisco’s higher 1% rate gives more support to Muni.',
        'Split (MTC): about 60% to BART, Muni, Caltrain, AC Transit, SF Bay Ferry, and smaller agencies; about one-third to VTA, SamTrans, and the Alameda and Contra Costa county transportation agencies for transit or paving bus routes; the rest (about 4.5% in year one) for rider improvements.',
        'About $46 million a year for fare transfers, a low-income discount, signage, and paratransit (Seamless Bay Area, advocacy).',
        'Safeguards (GrowSF): a committee checks money is distributed as required; counties can petition to withhold up to 7% from a dirty or unsafe operator; funds cannot replace existing funding; the tax cannot be raised or extended without another vote.',
      ],
      argumentsFor: [
        'Without it, BART, Muni, Caltrain, and AC Transit face deficits above $800 million a year from fiscal 2027-28 and large service cuts (MTC).',
        'A regional network needs every agency funded, and only a regional vote can raise money across county lines.',
        'SB 63 requires independent financial reviews of BART, Muni, Caltrain, and AC Transit.',
        'AC Transit, the bus service Hayward riders rely on, estimates it would get about $51 million a year.',
      ],
      argumentsAgainst: [
        'Agencies already receive about $6 billion a year in taxes, tolls, and grants; cost-cutting should come first (official ballot argument, per KQED).',
        'It raises sales tax in parts of Alameda County to 11.25% through 2041 (Fleischman, opinion).',
        'The oversight committee has no say over agency spending, and the MTC-governed board can change allocations without a public vote.',
        'In Santa Clara County, VTA captures most of the county share and is exempt from the financial reviews required of other agencies (Opportunity Now, advocacy).',
      ],
      readingLinks: [
        { label: 'KQED: Regional Measure RTM voter guide', url: 'https://www.kqed.org/voterguide/california/regional-measure-rtm', summary: 'Neutral summary of the question, threshold, and arguments for and against.' },
        { label: 'League of Women Voters: Regional Transit Measure pros and cons', url: 'https://my.lwv.org/sites/default/files/2026_nov_bay_transit_measure_pros_cons.pdf', summary: 'Nonpartisan pros and cons.' },
        { label: 'MTC: Governor signs bill authorizing the 2026 transit measure', url: 'https://mtc.ca.gov/news/governor-signs-bill-authorizing-bay-area-voters-consider-2026-transit-measure', summary: 'Official description of SB 63 and the allocation split.' },
        { label: 'GrowSF: Regional Measure RTM analysis', url: 'https://growsf.org/voter-guide/san-francisco-voter-guide-november-2026-election/measures/prop-rtm/', summary: 'County-by-county allocation table and ordinance provisions (endorses Yes).' },
        { label: 'AC Transit: budget outlook', url: 'https://www.actransit.org/budget-faq', summary: 'Deficits, contingency cuts, and the share AC Transit expects.' },
        { label: 'Contra Costa News: measure qualifies for the ballot', url: 'https://contracosta.news/2026/07/01/connect-bay-area-ballot-measure-to-save-public-transit-officially-qualifies-for-november-2026-election/amp/', summary: 'Signature count, supporters, and oversight.' },
        { label: 'Jon Fleischman: Measure RTM is a 14-year tax hike (opinion)', url: 'https://www.sodoesitmatter.com/p/measure-rtm-is-a-14-year-tax-hike', summary: 'The case against; opinion newsletter citing Pacific Research Institute data.' },
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes', '●', 'Leftward Progressives put climate and public transit first and accept a sales tax to keep buses and trains running for riders who depend on them.'],
      ['LL', 'Yes', '●', 'Loyal Liberals trust a regional fix built by MTC and lawmakers, with required financial reviews of the big agencies, a 14-year sunset and broad institutional backing.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters depend on transit to get to work and school, but a regressive sales tax with heavy tech-billionaire funding and an oversight committee that can’t control spending tempers their support.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters need reliable trains and buses to reach jobs and want the measure’s safety and cleanliness provisions, though a higher sales tax pinches tight budgets.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters who ride the bus would lose service if it fails, but a higher tax on everyday purchases weighs on them, so the lean is weak.'],
      ['PP', 'No', '○', 'Pragmatic and Polite Right voters prefer cost control before new taxes, and agencies already receive about $6 billion a year, though they see the value of a working regional system.'],
      ['UR', 'No', '◐', 'Unconventional Right voters want lower taxes and smaller government and oppose 14 years of added sales tax for agencies they see as poorly run.'],
      ['FC', 'No', '●', 'Faith First Conservatives want government revenue reduced and oppose a multi-year tax increase, siding with the taxpayer associations.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose nearly all new taxes and distrust transit agencies and regional bureaucracies, and this measure raises the sales tax through 2041 by simple majority.'],
    ]),
    hinges: {
      LP: 'Yes if keeping buses and trains running for riders who depend on them, and climate goals, are worth a sales tax. No if a regressive tax, with an oversight committee that has no say over spending, should give way to reforms first.',
      LL: 'Yes if a regional fix with financial reviews, a 14-year sunset and broad elected backing is the sound way to close transit deficits. No if agencies already get about $6 billion a year and the regional board can change allocations without a public vote.',
      LO: 'Yes if saving BART and AC Transit service you depend on matters more than your dislike of a regressive tax. No if a sales tax with an oversight committee that can’t control agency spending looks like a blank check.',
      OO: 'Yes if reliable, safer, cleaner trains and buses to get to work justify a half-cent more on purchases. No if agencies should prove they can control costs before your household pays more.',
      TM: 'Yes if you ride the bus or BART and the cuts supporters warn of would hit your daily trips. No if a half-cent more on every purchase adds up for your household and you don’t rely on transit.',
      PP: 'Yes if the threatened cuts and the required financial reviews make a time-limited tax a reasonable, cautious fix. No if agencies already receiving about $6 billion a year should cut costs before asking for 14 more years of tax.',
      UR: 'Yes if workers, seniors and students losing BART and bus service would hurt your community more than the tax. No if a union- and agency-backed tax that opponents say skips the two-thirds threshold is one you won’t support.',
      FC: 'Yes if keeping transit for workers, seniors and students who depend on it matters more to you than the tax. No if you oppose a new multi-year tax that expands government revenue through 2041.',
      NA: 'Yes if deep cuts to service and more traffic on the roads you drive outweigh your objection to a tax. No if you think agencies should cut costs before getting new revenue, as the taxpayer associations argue.',
    },
    counterArguments: [
      'FC/NA (No ●): But consider Yes, because transit riders include workers, seniors and students who depend on BART and buses, and supporters say a No vote could mean deep cuts and more traffic.',
      'LP/LL (Yes ●): But consider No, because agencies already get about $6 billion a year, the oversight committee cannot control agency spending, and the regional board can change allocations without a public vote.',
      'TM (Yes ○): But consider No, because a half-cent increase on every purchase adds up for households already stretched by prices, and the transit benefit depends on whether you ride.',
    ],
  },
];
