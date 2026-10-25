import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

export const RACES_LA_CITY: Race[] = [
  {
    id: 'la-mayor',
    categoryId: 'city',
    title: 'Los Angeles Mayor',
    tldrLabel: 'LA Mayor',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The mayor runs the nation’s second-largest city: proposes the budget, appoints department heads and commissions, and directs responses to homelessness, wildfire recovery, policing and the 2028 Olympics. Under the City Charter the mayor can also veto Council actions.',
      'Both finalists are Democrats, so the choice turns on approach: Mayor Karen Bass defends her record on homelessness and the Palisades fire recovery, while Councilmember Nithya Raman argues the city needs a different, more audited and more tenant-oriented approach.',
    ],
    introParagraphs: [
      'In the June 2 primary Bass finished first with about 34% and Raman second with about 29%; Spencer Pratt finished third (about 25%) and was eliminated (City of Los Angeles / county results as compiled on Wikipedia). The office is nonpartisan; both candidates are Democrats, and Raman is endorsed by the Los Angeles chapter of the Democratic Socialists of America.',
      'The only independent poll found, a UC Berkeley IGS/Los Angeles Times survey in September, had Raman ahead 39% to 28% with a third undecided. Bass’s campaign called it an outlier.',
    ],
    legalRequirements: 'Registered voter and resident of the City of Los Angeles (City Charter).',
    qualificationCriteria: [
      { id: 'exec', label: 'Running a large executive operation', detail: 'The mayor oversees roughly 30,000 city employees and a multibillion-dollar budget.' },
      { id: 'budget', label: 'Budget and fiscal management', detail: 'The mayor proposes the annual budget and negotiates labor contracts.' },
      { id: 'emergency', label: 'Emergency and public-safety leadership', detail: 'The mayor oversees the police and fire departments and leads disaster response.' },
      { id: 'housing', label: 'Housing and homelessness policy', detail: 'Homelessness and housing costs are the city’s most visible problems.' },
      { id: 'coalition', label: 'Working with the City Council and other agencies', detail: 'Most mayoral priorities need Council votes and cooperation from the county and state.' },
    ],
    polling: [
      {
        resultDisplay: 'Raman 39%, Bass 28%, undecided 33%',
        pollsterCredit: 'UC Berkeley Institute of Governmental Studies, co-sponsored by the Los Angeles Times; about 2,100 likely city voters, online, margin of error about ±3 points',
        fieldDatesLabel: 'Sept 15–20, 2026 (released Sept 23)',
        sourceUrl: 'https://www.nbclosangeles.com/news/politics/nithya-raman-karen-bass-la-mayor-election-polls/3946109/',
      },
    ],
    readingLinks: [
      {
        label: 'ABC7: Bass and Raman clash over homelessness, policing (Aug 19 debate)',
        url: 'https://abc7.com/post/karen-bass-nithya-raman-clash-homelessness-policing-fiery-la-mayoral-debate/19706542/',
        summary: 'Sherman Oaks debate: Raman called Inside Safe too costly and said the city refused audits; Bass defended the program and blamed Raman’s vote against expanding LAPD for recruiting problems; Raman said she voted for budgets that kept the force at or above its size but opposed a police contract she said would bankrupt the city.',
      },
      {
        label: 'LAist: Where the money is coming from in the mayor’s race',
        url: 'https://laist.com/news/politics/bass-campaign-spending-finance-raman-mayor',
        summary: 'Published Aug 5, 2026. Outside spending favored Bass heavily, including Airbnb money for her and LAPD union and Douglas Emmett money against Raman.',
      },
      {
        label: 'NBC Los Angeles: Raman holds lead in new poll',
        url: 'https://www.nbclosangeles.com/news/politics/nithya-raman-karen-bass-la-mayor-election-polls/3946109/',
        summary: 'Poll details, favorability ratings, and the Bass campaign’s response.',
      },
    ],
    candidates: [
      {
        id: 'karen-bass',
        photoSlug: 'karen-bass',
        name: 'Karen Bass',
        party: 'NP',
        role: 'Mayor, City of Los Angeles',
        bio: [
          'Bass has been mayor since December 2022, the first woman to hold the job. She is a Democrat who previously served in the California Assembly (2004–2010, including as Speaker) and in the U.S. House (2011–2022), and earlier worked as a physician assistant and co-founded the Community Coalition in South Los Angeles (Wikipedia).',
          'Her signature program is Inside Safe, which moves people from encampments into temporary housing. She has the backing of Gov. Gavin Newsom, former Vice President Kamala Harris, a majority of the City Council and the Los Angeles County Federation of Labor (NBC Los Angeles, PBS NewsHour coverage).',
        ],
        recordVsChange:
          'Bass points to a reported 17.5% drop in homelessness during her tenure and the Palisades recovery effort; the case for change is that 56% of likely voters in the September poll rated her fire response poor or very poor and 63% view her unfavorably.',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Bass is the sitting mayor and has run the city’s executive branch since December 2022; before that she was Assembly Speaker and a member of Congress (2011–2022).',
          criteria: [
            { criterionId: 'exec', assessment: 'met', evidence: 'Mayor since Dec 2022; leads the city government and appoints department heads.' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has proposed and signed the city budget each year since 2023; as Assembly Speaker (2008–2010) led the state’s budget negotiations during the recession.' },
            { criterionId: 'emergency', assessment: 'partial', evidence: 'Oversees LAPD and LAFD and led the response to the January 2025 fires; the response is the subject of independent reviews (see red flags).' },
            { criterionId: 'housing', assessment: 'met', evidence: 'Created Inside Safe in 2022; her record is disputed on cost and audits.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Has worked with the Council, county and state for four years; Council members and Newsom have endorsed her.' },
          ],
        },
        scorecard: [
          { topic: 'Homelessness', position: '✓ Defends Inside Safe and says homelessness fell 17.5% under her; plans a city-led response system', comparison: 'Raman says Inside Safe is too costly and demands audits.' },
          { topic: 'Budget & LAPD staffing', position: '✓ Backs growing LAPD; says Raman’s vote against expansion hurt recruiting', comparison: 'Raman says she voted for budgets that sustained the force but opposed a police contract.' },
          { topic: 'Fire & emergency', position: '~ Says winds prevented aircraft drops in the Palisades fire; denies altering the after-action report', comparison: 'Raman and Pratt have made the fire response a central attack.' },
          { topic: 'Housing & renters', position: '~ Establishment pro-development with tenant protections; advanced a proposal Airbnb backed', comparison: 'Raman is more tenant-oriented.' },
          { topic: 'Transparency', position: '~ Stepped off the LAHSA commission on Sept 9 after missing 13 of 21 meetings in a recent year (LAist)', comparison: 'Raman says Bass refused audits of Inside Safe; Bass disputes the cost figures.' },
        ],
        money:
          'About $2.51 million raised, per City Ethics Commission filings through Sept 19, 2026, including roughly $1.5 million in direct contributions and nearly $1 million in public matching funds. Independent committees outspent pro-Raman groups by about 36 to 1 as of Aug 2026 (LAist).',
        endorsements:
          'Gov. Gavin Newsom; Kamala Harris; most of the City Council; Los Angeles County Federation of Labor (as reported by NBC Los Angeles and PBS NewsHour, 2026).',
        redFlags: [
          {
            severity: 'serious',
            status: 'disputed',
            text: 'The Los Angeles Times reported in December 2025, citing two sources with knowledge of Bass’s office, that Bass told then-interim Fire Chief Ronnie Villanueva the Palisades after-action report could create legal liability and wanted findings about LAFD’s pre-deployment decisions removed or softened. In January 2026 LAFD Chief Jaime Moore acknowledged the report was edited to reduce criticism of LAFD leadership. Bass has repeatedly denied directing changes, calling the story “completely fabricated” and saying the report was written and edited by the Fire Department.',
            whyItMatters: 'A mayor who shapes official findings about the city’s own emergency response affects whether voters can trust the next after-action reports.',
            sources: [
              { label: 'Los Angeles Times via AOL: LAFD report on Palisades fire was watered down', url: 'https://www.aol.com/articles/times-investigation-lafd-report-palisades-200000085.html' },
              { label: 'Hanford Sentinel (AP): LAFD chief admits report was watered down', url: 'https://hanfordsentinel.com/news/state-and-regional/lafd-chief-admits-palisades-fire-report-was-watered-down-says-it-wont-happen-again/article_efcbb569-3601-46dd-8e6b-3696b768cd0a.html' },
              { label: 'FOX 11: Bass’ office denies altering report', url: 'https://www.foxla.com/news/karen-bass-fire-report-palisades-lafd-la-times' },
            ],
          },
          {
            severity: 'serious',
            status: 'alleged',
            text: 'Former LAFD Chief Kristin Crowley, whom Bass removed as chief after the fires, has sued Bass in Los Angeles County Superior Court alleging retaliation for her public warnings about budget cuts, defamation and violation of free-speech rights. The case is pending and no court has ruled. Bass has said Crowley failed to warn her of dangerous conditions and failed to pre-deploy firefighters.',
            whyItMatters: 'The suit asks a court to decide whether the mayor punished a department head for raising public-safety concerns.',
            sources: [{ label: 'FireRescue1: Former LAFD chief sues Mayor Bass', url: 'https://www.firerescue1.com/legal/former-lafd-fire-chief-sues-mayor-karen-bass-over-alleged-retaliation-after-palisades-fire' }],
          },
          {
            severity: 'notable',
            status: 'documented',
            text: 'LAist reviewed commission records and found Bass skipped 13 of 21 Los Angeles Homeless Services Authority commission meetings in a recent 12-month span; she stepped off the commission on Sept 9, 2026, citing time. A federal court has also ordered an independent audit of the city’s homelessness programs, which includes Inside Safe.',
            whyItMatters: 'Homelessness is the mayor’s signature issue, and attendance and audits bear directly on oversight of that spending.',
            sources: [
              { label: 'LAist: Bass steps down from LAHSA commission', url: 'https://laist.com/news/housing-homelessness/bass-lahsa-commission-step-down' },
              { label: '6abc: Federal judge orders independent audit', url: 'https://6abc.com/amp/post/homeless-camp-los-angeles-audit/14606908/' },
            ],
          },
        ],
        notes: [
          'Bass was in Ghana for a presidential inauguration when the January 2025 fires began and had said she would not travel abroad as mayor (Wikipedia). She approved a $17.6 million Fire Department budget cut that then-Chief Crowley warned weakened readiness; Bass said in January 2025 the reductions did not affect the response (Wikipedia). Critics treat these as judgment issues; they are political criticism, not findings.',
          'An independent report released Oct 2, 2026 by the Fire Safety Research Institute, commissioned by Gov. Newsom, found LAFD failed to act on warnings that the Lachman fire was still burning and lacked experience with major fires; it does not address the mayor’s role. https://spectrumlocalnews.com/ca/california/wildfires/2026/10/02/state-report-affirms-failures-of-la-city--county-response-to-jan-2025-fires',
          'Bass advanced a short-term-rental proposal that Airbnb backed; Airbnb gave $750,000 to a committee supporting her (LAist, Aug 5, 2026).',
        ],
      },
      {
        id: 'nithya-raman',
        photoSlug: 'nithya-raman',
        name: 'Nithya Raman',
        party: 'NP',
        role: 'Councilmember/Urban Planner',
        bio: [
          'Raman has represented Los Angeles City Council District 4 since 2020 and trained as an urban planner (ballot designation). She entered the mayor’s race just before the filing deadline; she had earlier said she would support Bass.',
          'She is endorsed by Bernie Sanders, the Los Angeles chapter of the Democratic Socialists of America, the Alliance of Californians for Community Empowerment and, since August, the Southern California carpenters’ union, which backed Bass in 2022 (NBC Los Angeles, PBS NewsHour). In August 2026 she lost the chair of the council’s Housing and Homelessness Committee when the panel was split; she says it was retaliation, and Council President Marqueece Harris-Dawson denies it (LAist).',
        ],
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Raman is a six-year Council member who has served on housing and homelessness committees, but she has not run a large executive agency.',
          criteria: [
            { criterionId: 'exec', assessment: 'partial', evidence: 'Leads a council district office; has not managed a city department or large workforce.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Votes on the city budget as a councilmember since 2020; opposed an LAPD contract on fiscal grounds.' },
            { criterionId: 'emergency', assessment: 'partial', evidence: 'Votes on police and fire funding; no executive emergency-response role documented.' },
            { criterionId: 'housing', assessment: 'met', evidence: 'Chaired the Council’s Housing and Homelessness Committee until Aug 2026; trained as an urban planner; says encampments in her district fell 70%.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Won two Council elections and has passed measures with colleagues, though the Council majority has endorsed Bass.' },
          ],
        },
        scorecard: [
          { topic: 'Homelessness', position: '✓✓ Wants encampments removed with housing offers and independent audits of Inside Safe', comparison: 'Bass defends Inside Safe and its cost figures.' },
          { topic: 'Budget & LAPD staffing', position: '~ Says she has voted for budgets that sustained the force; opposed a police contract she called unaffordable', comparison: 'Bass says Raman’s vote against expansion hurt recruiting.' },
          { topic: 'Fire & emergency', position: '✓ Criticizes the Palisades fire response and administration accountability', comparison: 'Bass denies altering the after-action report.' },
          { topic: 'Housing & renters', position: '✓✓ Tenant protections and housing supply; DSA-endorsed', comparison: 'Bass is more aligned with developers and landlords in outside spending.' },
          { topic: 'Transparency', position: '✓ Calls for audits of homelessness spending', comparison: 'Bass says she supports audits that are already underway.' },
        ],
        money:
          'About $2.53 million raised, per City Ethics Commission filings through Sept 19, 2026, including about $1.1 million in direct contributions and $1.4 million in public matching funds; the campaign cites nearly 4,000 individual donors. An independent committee funded by the Western States Regional Council of Carpenters had raised about $6 million supporting her (reporting as of late Sept 2026).',
        endorsements:
          'Sen. Bernie Sanders; Democratic Socialists of America, Los Angeles; Alliance of Californians for Community Empowerment; Southern California carpenters’ union (as reported by NBC Los Angeles and PBS NewsHour, 2026).',
        notes: [
          'LAist found Raman has missed nearly 3,000 council votes since 2020, which puts her in the middle of the 15-member council; her campaign says many were excused because she served on a regional air-quality board by appointment (LAist).',
          'Her campaign plans to work with Fight Agency, a progressive consulting firm that hundreds of DSA members had urged candidates to avoid; Bass’s campaign calls the hire a liability (The Eastsider LA).',
          'The police union spent about $1.2 million on ads against Raman and another candidate, and real-estate firm Douglas Emmett gave $525,000 to the union’s committee (LAist, Aug 5, 2026). That is outside spending, not a finding about Raman.',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Raman', '●', 'Leftward Progressives favor Nithya Raman, the Sanders- and DSA-endorsed finalist who is further left than Bass on tenant protections and demands audits of the mayor’s homelessness spending.'],
      ['LL', 'Bass', '◐', 'Loyal Liberals value the institutional backing and long executive record of Karen Bass, endorsed by Newsom, Harris and the county labor federation, but weigh seriously the disputed reports that the Palisades after-action report was softened and the pending retaliation suit.'],
      ['LO', 'Raman', '◐', 'Left-Out Left voters, who distrust insiders and big money, lean to Nithya Raman as the challenger calling for audits against an incumbent backed by about 36-to-1 outside spending including Airbnb, though DSA labels matter less to them than practical help.'],
      ['OO', 'Bass', '◐', 'Order and Opportunity Left voters want public safety and steady management, and Karen Bass backs growing LAPD while Raman opposed a police contract, a trade-off against the questions about the fire response.'],
      ['TM', 'Raman', '○', 'Tuned-Out Middle voters judge by cost relief and plain trustworthiness, so a weak lean goes to Nithya Raman’s renter protections and audit demands over an incumbent 63% of likely voters view unfavorably.'],
      ['PP', 'Bass', '○', 'Pragmatic and Polite Right voters prize experience and steady, police-friendly governance, which favors Karen Bass over a DSA-endorsed challenger, though the disputed fire-report editing and retaliation suit cut against their rule-of-law values.'],
      ['UR', 'Bass', '○', 'Unconventional Right voters care most about crime and smaller government, and with two Democrats a weak lean goes to Karen Bass, who backs LAPD growth, over a DSA-endorsed challenger.'],
      ['FC', 'Bass', '○', 'Faith First Conservatives lean weakly to Karen Bass as the less left finalist who stresses police hiring, since neither Democrat reflects their social priorities.'],
      ['NA', 'Bass', '○', 'No Apologies Right voters dislike both Democrats but oppose a DSA-endorsed mayor most, so a weak lean goes to Karen Bass and her support for LAPD expansion.'],
    ]),
    counterArguments: [
      'LL (Bass ◐): But consider Raman if accountability for the city’s own emergency response matters most, because LAFD’s chief acknowledged the Palisades after-action report was edited, Bass faces a pending retaliation suit from the former fire chief (both disputed by Bass), and a federal court ordered an audit of homelessness programs.',
      'PP (Bass ○): But consider Raman if rule of law weighs heaviest, because the disputed reports that Bass sought to soften official fire findings and the Crowley retaliation suit go to the conduct this group penalizes, while Raman has no red flags.',
      'LP (Raman ●): But consider that Raman has not run a large executive agency, because a carpenters’ union committee has raised about $6 million for her, so neither finalist is free of big outside money.',
    ],
  },

  {
    id: 'la-city-attorney',
    categoryId: 'city',
    title: 'Los Angeles City Attorney',
    tldrLabel: 'LA City Attorney',
    seatContext: 'Open seat (incumbent eliminated in primary)',
    kind: 'candidates',
    stakesParagraphs: [
      'The City Attorney is the elected lawyer for the city and prosecutes misdemeanors such as theft, vandalism, illegal dumping and many quality-of-life crimes. The office also defends the city in lawsuits, so its choices affect settlement and liability payouts paid from the city budget.',
      'Incumbent Hydee Feldstein Soto finished third in June, the first incumbent City Attorney to lose a primary since 1933 according to coverage. The runoff pits a state consumer-protection lawyer against a county prosecutor.',
    ],
    introParagraphs: [
      'In the June 2 primary Roy won about 43% and McKinney about 29%; Feldstein Soto took 18% and Aida Ashouri about 10% (Wikipedia, from county results). The office is nonpartisan; sources reviewed do not list either finalist’s party registration.',
      'A September UC Berkeley IGS/Los Angeles Times survey found Roy leading by 10 points but about 70% of likely voters had no opinion of either candidate.',
    ],
    legalRequirements: 'Resident and registered voter of the City of Los Angeles; licensed California attorney (City Charter).',
    qualificationCriteria: [
      { id: 'prosecution', label: 'Prosecuting misdemeanors and enforcement', detail: 'The office files thousands of criminal and civil enforcement cases each year.' },
      { id: 'litigation', label: 'Defending the city in civil litigation', detail: 'The office handles lawsuits and settlements that affect the city budget.' },
      { id: 'advice', label: 'Legal advice to city government', detail: 'The City Attorney advises the Council, mayor and commissions on lawfulness of actions.' },
      { id: 'mgmt', label: 'Managing a large legal office', detail: 'The office has several hundred attorneys and staff.' },
    ],
    readingLinks: [
      {
        label: 'LAist voter guide: Los Angeles City Attorney',
        url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-los-angeles-city-attorney',
        summary: 'Neutral profiles of Roy and McKinney with backgrounds and endorsements.',
      },
    ],
    candidates: [
      {
        id: 'marissa-roy',
        name: 'Marissa Roy',
        party: 'NP',
        role: 'Deputy Attorney General',
        bio: [
          'Roy is a deputy attorney general in Attorney General Rob Bonta’s office focused on consumer protection. She previously worked in the Los Angeles City Attorney’s Office through a 2017 fellowship, was outside counsel for Los Angeles County, and was a staff attorney at the Public Rights Project (LAist).',
          'She has pledged to challenge the Trump administration in court and to focus on workers’ and renters’ rights.',
        ],
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Roy is a state deputy attorney general with civil enforcement and local-government legal experience, but she has not led a legal office.',
          criteria: [
            { criterionId: 'prosecution', assessment: 'partial', evidence: 'Consumer-protection enforcement as a state deputy attorney general; misdemeanor criminal prosecution not documented.' },
            { criterionId: 'litigation', assessment: 'met', evidence: 'State civil litigation as a deputy attorney general; outside counsel for Los Angeles County.' },
            { criterionId: 'advice', assessment: 'met', evidence: 'Worked in the City Attorney’s Office on a 2017 fellowship and as outside counsel to the county.' },
            { criterionId: 'mgmt', assessment: 'not-met', evidence: 'No documented role managing a large legal office.' },
          ],
        },
        scorecard: [
          { topic: 'Prosecution priorities', position: '~ Emphasis on civil enforcement, workers’ and renters’ rights', comparison: 'McKinney prioritizes public safety and neighborhood protection.' },
          { topic: 'Litigation & liability', position: '? No published plan found on settlements', comparison: 'McKinney has not published one either.' },
          { topic: 'Federal conflicts', position: '✓✓ Pledges to challenge the Trump administration in court', comparison: 'McKinney emphasizes local public safety.' },
          { topic: 'Housing/tenants', position: '✓ Renters’ rights', comparison: 'McKinney is backed by the Apartment Association of Greater Los Angeles.' },
          { topic: 'Transparency', position: '? No specific position on public record', comparison: 'Neither has published a transparency plan.' },
        ],
        money:
          'As of April 2026 (pre-primary), Roy had raised nearly $1 million including matching funds per City Ethics Commission data reported by LAist; later totals are on the Ethics Commission public data portal. Some donations from law firms that have sued the city have drawn scrutiny (fact-check coverage).',
        endorsements:
          'Sen. Bernie Sanders; Sens. Adam Schiff and Alex Padilla; Controller Kenneth Mejia; Planned Parenthood Advocacy Project Los Angeles County (LAist voter guide, 2026).',
        notes: [
          'Roy worked on Councilmember Ysabel Jurado’s 2024 campaign (LAist).',
          'Donations from law firms that litigate against the city have drawn scrutiny because the City Attorney decides how those cases are settled; this is a conflict-of-interest question raised by critics, not a finding.',
        ],
      },
      {
        id: 'john-mckinney',
        name: 'John McKinney',
        party: 'NP',
        role: 'Deputy District Attorney',
        bio: [
          'McKinney is a Los Angeles County deputy district attorney who has worked in the Victim Impact Program, juvenile court, the Hardcore Gang Unit and Major Crimes. He prosecuted the murder case in the shooting of rapper Nipsey Hussle and ran for county District Attorney in 2024 (LAist).',
          'His campaign centers on public safety and neighborhood protection, tapping voter frustration with encampments and City Hall.',
        ],
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'McKinney is an experienced criminal prosecutor but has little documented civil-litigation or office-management experience.',
          criteria: [
            { criterionId: 'prosecution', assessment: 'met', evidence: 'County deputy DA with gang and major-crimes prosecution experience, including the Nipsey Hussle murder case.' },
            { criterionId: 'litigation', assessment: 'partial', evidence: 'Criminal trial experience; civil defense of a city not documented.' },
            { criterionId: 'advice', assessment: 'unknown', evidence: 'No role advising a city government documented.' },
            { criterionId: 'mgmt', assessment: 'not-met', evidence: 'No documented role managing a large legal office; ran for county DA in 2024 without winning.' },
          ],
        },
        scorecard: [
          { topic: 'Prosecution priorities', position: '✓✓ Public safety and neighborhood protection', comparison: 'Roy emphasizes civil enforcement and rights.' },
          { topic: 'Litigation & liability', position: '? No published plan found on settlements', comparison: 'Roy has not published one either.' },
          { topic: 'Federal conflicts', position: '? No stated position found', comparison: 'Roy pledges to challenge the Trump administration.' },
          { topic: 'Housing/tenants', position: '~ Landlord association backs him; tenant policy not detailed', comparison: 'Roy stresses renters’ rights.' },
          { topic: 'Transparency', position: '? No specific position on public record', comparison: 'Neither has published a transparency plan.' },
        ],
        money:
          'As of April 2026 (pre-primary), McKinney had raised about $73,000 per City Ethics Commission data reported by LAist, then reportedly received a surge of corporate and independent money; current totals are on the Ethics Commission public data portal.',
        endorsements:
          'Los Angeles Police Protective League; County District Attorney Nathan Hochman; Councilmember Traci Park; Apartment Association of Greater Los Angeles (LAist voter guide; AAGLA).',
        notes: [
          'The police union switched its backing to McKinney after a data breach at the City Attorney’s office, and the endorsement came after it withdrew its support of the incumbent.',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Roy', '●', 'Leftward Progressives favor Marissa Roy, a Sanders-endorsed lawyer focused on workers’ and renters’ rights, over a prosecutor backed by the police union and the landlord association.'],
      ['LL', 'Roy', '●', 'Loyal Liberals value Marissa Roy’s state Justice Department experience and the backing of Sens. Schiff and Padilla, and support her pledge to challenge Trump administration actions in court.'],
      ['LO', 'Roy', '◐', 'Left-Out Left voters want an office that protects working people from wage theft and bad landlords, which favors Marissa Roy, though donations from law firms that sue the city feed their distrust of money in politics.'],
      ['OO', 'McKinney', '◐', 'Order and Opportunity Left voters want safety and order, and John McKinney’s gang and major-crimes prosecution record fits the office’s misdemeanor caseload, a trade-off against Roy’s worker and renter focus.'],
      ['TM', 'Roy', '○', 'Tuned-Out Middle voters look for concrete help with costs, and Marissa Roy’s focus on workers’ pay and renters’ rights offers more of that than a public-safety campaign, a weak lean.'],
      ['PP', 'McKinney', '◐', 'Pragmatic and Polite Right voters prefer John McKinney, a career prosecutor focused on enforcing the law locally, over a candidate whose campaign centers on suing the federal government.'],
      ['UR', 'McKinney', '◐', 'Unconventional Right voters care about crime and are cool to litigation against Trump administration immigration policy, which favors John McKinney, the prosecutor tapping frustration with encampments.'],
      ['FC', 'McKinney', '●', 'Faith First Conservatives want law and order, and John McKinney is the police-union-backed prosecutor endorsed by the county District Attorney.'],
      ['NA', 'McKinney', '●', 'No Apologies Right voters want tough enforcement and oppose a city lawyer pledging to fight the Trump administration, so John McKinney is their clear pick.'],
    ]),
    counterArguments: [
      'LL (Roy ●): But consider McKinney if criminal enforcement is what you want from the office, because the City Attorney prosecutes misdemeanors and his trial record is more directly relevant than Roy’s consumer-protection work.',
      'OO (McKinney ◐): But consider Roy if the office’s civil side matters to you, because lawsuits and settlements drive much of its budget impact and McKinney has little documented civil-litigation experience.',
      'FC (McKinney ●): But consider that neither finalist has managed a large legal office, because McKinney’s experience is criminal trials while the job also means defending the city in civil suits.',
    ],
  },
];
