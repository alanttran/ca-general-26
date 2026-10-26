import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

const LEGAL_LEG =
  'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

const SENATE_CRITERIA = (districtDetail: string) => [
  { id: 'law-policy', label: 'Lawmaking, legal drafting or policy experience', detail: 'Senators write, amend and vote on state statutes and confirm appointees.' },
  { id: 'budget-oversight', label: 'Budget and committee work', detail: 'The state budget and policy committees are central to a senator’s workload.' },
  { id: 'public-mgmt', label: 'Managing a public agency or elected body', detail: 'Experience running or governing a public organization transfers to oversight of state agencies.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const ASSEMBLY_CRITERIA = (districtDetail: string) => [
  { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
  { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const CAL_ACCESS = 'No on public record current filing totals; see Cal-Access at https://cal-access.sos.ca.gov/.';
const KPBS_GUIDE = 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian';

export const RACES_SD_LEGISLATURE_A: Race[] = [
  {
    id: 'senate-sd18',
    categoryId: 'state-leg',
    title: 'State Senate, District 18',
    tldrLabel: 'SD-18',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: SENATE_CRITERIA('SD-18 spans all of Imperial County, South County San Diego and the eastern parts of Riverside and San Bernardino counties, with border, water and air-quality issues.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the state budget, housing and land-use law, environmental and energy rules, technology and consumer-protection statutes, and confirmations of governor appointees; they serve four-year terms.',
      'District 18 covers all of Imperial County, South County San Diego and eastern Riverside and San Bernardino counties. Border-region issues such as Tijuana River sewage, air quality and cross-border commerce make this seat’s priorities distinct from most of the state.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic incumbent Steve Padilla took 63.8% and Republican Art Hodges 36.2% (Secretary of State Statement of Vote via The Ballot Brief). Padilla was first elected in 2022.',
      'Hodges, a retired pastor and bishop, is running on housing costs, lower spending and the Tijuana sewage problem, and calls Padilla a career politician. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Senate District 18',
        url: 'https://theballotbrief.com/state/california/san-diego-county/california-senate-district-18',
        summary: 'Neutral roster page with June primary results, bios and stated priorities for both finalists.',
      },
      {
        label: 'NBC Palm Springs — Retired pastor challenges incumbent in the 18th',
        url: 'https://www.nbcpalmsprings.com/2026/05/15/retired-pastor-challenges-incumbent-for-californias-18th-state-senate-district-seat',
        summary: 'Profile of Hodges’ housing and sewage platform and his criticism of Padilla; Padilla was unavailable for comment.',
      },
    ],
    candidates: [
      {
        id: 'steve-padilla',
        photoSlug: 'steve-padilla',
        name: 'Steve Padilla',
        party: 'D',
        role: 'California State Senator',
        campaignUrl: 'https://sd18.senate.ca.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Sitting state senator since December 2022, with earlier service as a Chula Vista councilmember and mayor and as chair of the California Coastal Commission.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'State senator since 2022; authored SB 243 (companion-chatbot safeguards), signed Oct 13, 2025 after passing the Senate 33-3 and Assembly 59-1; 40 bills in the 2025–26 session per Digital Democracy.' },
            { criterionId: 'budget-oversight', assessment: 'partial', evidence: 'Serves on Senate policy committees; his official biography page does not list budget-committee work.' },
            { criterionId: 'public-mgmt', assessment: 'met', evidence: 'Chula Vista mayor 2002–2006 and councilmember 1994–2002 and 2016–2022; Coastal Commission chair 2019–2021 (official biography).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Lifelong Chula Vista resident; has legislated on Tijuana River sewage and border-region pollution.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'SB 243 passed both houses by lopsided margins; SB 300, extending it, passed the Senate 29-8 on Jan 26, 2026.' },
          ],
        },
        bio: [
          'Padilla was elected to the Senate in 2022. A San Diego native and lifelong Chula Vista resident, he spent 13 years in law enforcement, finishing as a Coronado detective specializing in domestic violence and child abuse, then served on the Chula Vista council from 1994 and as mayor from 2002 to 2006.',
          'He chaired the California Coastal Commission from 2019 to 2021. In the Senate his work has centered on technology and consumer safety, border-region pollution, and voting rights, immigration and climate policy, according to his office and NBC Palm Springs.',
        ],
        recordVsChange:
          'Padilla has passed national-first AI chatbot safeguards and has seniority representing a border district whose water and air problems need sustained state attention; Hodges offers a different philosophy on spending and taxes but no legislative record, so changing means giving up that continuity without a track record to weigh.',
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '~ Authored SB 996 on manufactured-housing conformity, listed as in committee on a Digital Democracy snapshot',
            comparison: 'Hodges cites home-affordability statistics but has not published a specific housing plan.',
          },
          {
            topic: 'Climate',
            position: '✓✓ 99% alignment with California Environmental Voters (Digital Democracy); SB 887 would add CEQA exemptions for data centers and geothermal projects',
            comparison: 'Hodges says climate policies often hurt small communities and the working class.',
          },
          {
            topic: 'Education',
            position: '? No distinctive education platform found; his chatbot law targets protections for minors',
            comparison: 'Hodges supports school choice and homeschooling options.',
          },
          {
            topic: 'Public safety',
            position: '✓ Former detective specializing in domestic-violence and child-abuse cases; SB 243 bars chatbots from discussing sexual content or self-harm with minors',
            comparison: 'Hodges lists public safety and law enforcement as a priority without legislative specifics.',
          },
          {
            topic: 'Taxes',
            position: '? No tax-specific platform found; 0% alignment with the California Chamber of Commerce (Digital Democracy)',
            comparison: 'Hodges says high taxes burden individuals and drive businesses out.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Progressive Democrat focused on voting rights, immigration and climate; endorsed by the San Diego County Democratic Party',
            comparison: 'Hodges is a conservative endorsed by the Republican Party of San Diego County.',
          },
        ],
        money: CAL_ACCESS,
        endorsements: `San Diego County Democratic Party (KPBS endorsement guide, Sept 30, 2026) — ${KPBS_GUIDE}`,
        notes: [
          'In 2011 the Chula Vista council voted 3–2 against reappointing him to a full Coastal Commission term (per Wikipedia); he has since returned to the commission and chaired it.',
        ],
      },
      {
        id: 'art-hodges',
        name: 'Art Hodges',
        party: 'R',
        role: 'CEO/Educator/Pastor',
        campaignUrl: 'https://arthodgesforsenate.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'Retired pastor and bishop who also worked as a school principal and college chancellor, per his campaign; no elected or legislative record found.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'unknown', evidence: 'No public record of drafting legislation or policy work found.' },
            { criterionId: 'budget-oversight', assessment: 'unknown', evidence: 'No public record of budget or committee work found.' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Campaign says he oversaw 350 churches, pastors and ministers in Southern California and served as a principal and college chancellor; these are private or religious institutions, not public agencies.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No public record of constituent-service roles in the district found; campaign cites concern about Tijuana sewage and beach closures.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of passing legislation or building legislative coalitions found.' },
          ],
        },
        bio: [
          'Hodges describes a career moving from college class president to school principal, college chancellor and pastor, and says he stopped pastoring in July 2025 to run. His campaign says he oversaw 350 churches and ministers and led opposition to Gov. Newsom’s COVID-19 response.',
          'He says none of his three children can afford a home in California and calls the state’s poverty rate and lack of affordable housing “unconscionable.”',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓ Cites that about 22% of households could afford a median-priced home in Q1 2026 and calls cost “unconscionable”; no specific bill or plan published',
            comparison: 'Padilla has a manufactured-housing bill but no signature housing platform.',
          },
          {
            topic: 'Climate',
            position: '✗ Says climate-change policies often hurt small communities and the working class; focuses on Tijuana sewage cleanup',
            comparison: 'Padilla scores 99% with California Environmental Voters.',
          },
          {
            topic: 'Education',
            position: '✓ Supports school choice, homeschooling and alternative education options',
            comparison: 'Padilla has no comparable school-choice position.',
          },
          {
            topic: 'Public safety',
            position: '✓ Lists public safety and law enforcement as a top priority',
            comparison: 'Padilla is a former detective with a protective-legislation focus on minors.',
          },
          {
            topic: 'Taxes',
            position: '✓✓ Wants to reduce government spending to lower housing, gas and food costs; says high taxes drive businesses out',
            comparison: 'Padilla has no stated tax-cut agenda.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Conservative, faith-centered campaign (“Faith, Family, Freedom, Future”); endorsed by the Republican Party of San Diego County',
            comparison: 'Padilla is a progressive Democrat.',
          },
        ],
        money: CAL_ACCESS,
        endorsements: `Republican Party of San Diego County (KPBS endorsement guide, Sept 30, 2026) — ${KPBS_GUIDE}`,
        notes: [
          'Campaign materials say he won two U.S. Supreme Court rulings to reopen houses of worship; this is the campaign’s own claim and was not independently checked.',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Padilla', '●', 'Leftward Progressives want the strongest climate and immigrant-rights voice available, and Padilla scores 99% with California Environmental Voters while Hodges says climate policy hurts working people.'],
      ['LL', 'Padilla', '●', 'Loyal Liberals, 92% of whom say experts make better policy decisions than others, trust experienced officeholders who pass expert-backed laws, and Padilla, a former Chula Vista mayor and Coastal Commission chair, passed a chatbot-safety law with near-unanimous votes.'],
      ['LO', 'Padilla', '◐', 'Left-Out Left voters, 75% of whom say few or no officials ran to serve the public, are wary of career politicians like Padilla, who has held office on and off since 1994, but his work on Tijuana River sewage and air quality helps working border communities more than Hodges’ spending-cut platform would.'],
      ['OO', 'Padilla', '●', 'Order and Opportunity Left voters, about 52% of whom call violent crime a very big problem, want public safety alongside practical help, and Padilla is a former detective who handled domestic-violence and child-abuse cases and now protects minors from harmful chatbots.'],
      ['TM', 'Hodges', '○', 'Tuned-Out Middle voters judge by cost of living, and Hodges speaks directly to housing, gas and food prices while Padilla has no tax or cost platform, though Hodges offers no specific plan.', 'Tuned-Out Middle voters who want someone who already knows how to get things done could pick Padilla, a former Chula Vista mayor whose bills pass by wide margins, giving up Hodges’ promise to cut spending to lower everyday costs.'],
      ['PP', 'Padilla', '◐', 'Pragmatic and Polite Right voters lean Republican, 56% to 37%, but put competence first, and Padilla’s long governing record and bipartisan floor votes outweigh Hodges, who has never held public office.'],
      ['UR', 'Hodges', '◐', 'Unconventional Right voters like Hodges’ attack on a career politician and his call to cut spending and taxes, though his faith-centered campaign appeals less to this less religious group.', 'Unconventional Right voters who want proven competence could back Padilla, a former detective and mayor with laws on the books, though it is a cross-party vote for a Democrat focused on immigration and climate rather than spending cuts.'],
      ['FC', 'Hodges', '●', 'Faith First Conservatives put faith and family first, with 53% saying religion shapes how they vote, and Hodges is a pastor and bishop running on “Faith, Family, Freedom, Future” with school-choice and homeschooling support.'],
      ['NA', 'Hodges', '●', 'No Apologies Right voters want fighters against Sacramento, and Hodges led opposition to Newsom’s COVID-19 orders, rejects climate policy and wants deep spending cuts.'],
    ]),
    counterArguments: [
      'PP (Padilla ◐): But consider that Hodges’ call to cut spending and taxes matches this group’s fiscal leanings, and Padilla’s 0% California Chamber of Commerce score shows little business-side alignment.',
      'TM (Hodges ○): But consider that Hodges has published no specific housing or cost plan, while Padilla has legislative seniority on border sewage and air problems that affect daily life in the district.',
      'FC (Hodges ●): But consider that Hodges has never held office or written legislation, so his promises are untested against a senator whose bills pass with large bipartisan margins.',
    ],
  },
  {
    id: 'senate-sd38',
    categoryId: 'state-leg',
    title: 'State Senate, District 38',
    tldrLabel: 'SD-38',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: SENATE_CRITERIA('SD-38 covers coastal and inland North County San Diego and southern Orange County, with coastline, rail-corridor and homelessness issues.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the state budget, housing and land-use law, climate and coastal rules, transportation, public safety and criminal-justice statutes, and confirmations of governor appointees; they serve four-year terms.',
      'District 38 spans North County San Diego and southern Orange County and flipped from Republican to Democratic in 2022, when Catherine Blakespear won 52.2% to 47.8%. It is one of the more competitive legislative seats in the region.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic incumbent Catherine Blakespear took 54.7% districtwide (153,207 votes) and Republican Laura Bassett 45.3% (126,938), with Bassett leading in the Orange County portion, 54.0% to 46.0% (Secretary of State returns).',
      'Blakespear chairs the Senate Environmental Quality Committee. Bassett, an Oceanside real-estate broker, ran for Oceanside City Council in 2024 and finished second with 40.8%. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Senate District 38',
        url: 'https://theballotbrief.com/state/california/san-diego-county/california-senate-district-38',
        summary: 'Neutral roster page with primary results and each finalist’s stated priorities.',
      },
      {
        label: 'Senator Blakespear — official biography',
        url: 'https://sd38.senate.ca.gov/biography',
        summary: 'Official biography with committee assignments and highlighted legislation.',
      },
    ],
    candidates: [
      {
        id: 'catherine-blakespear',
        photoSlug: 'catherine-blakespear',
        name: 'Catherine S. Blakespear',
        party: 'D',
        role: 'California State Senator',
        campaignUrl: 'https://sd38.senate.ca.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Sitting state senator since December 2022 who chairs the Environmental Quality Committee, after eight years in Encinitas government, six as mayor.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'State senator since 2022; estate-planning attorney (JD 2006); 38 bills authored in the 2025–26 session, 22 passed, per Digital Democracy; says 40 bills she authored have been signed into law.' },
            { criterionId: 'budget-oversight', assessment: 'met', evidence: 'Member of the Senate Budget and Fiscal Review Committee and Budget Subcommittee 2; chairs Environmental Quality (official biography).' },
            { criterionId: 'public-mgmt', assessment: 'met', evidence: 'Encinitas mayor 2016–2022 and councilmember 2014–2016; chaired SANDAG while mayor (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Fourth-generation San Diegan; represents the district since 2022; chairs the Transportation subcommittee on LOSSAN rail corridor resiliency.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Has passed dozens of bills, including a statewide plastic-bag checkout ban and firearm-surrender legislation for people in mental-health crises, per her biography.' },
          ],
        },
        bio: [
          'Blakespear is a lawyer and former journalist who served on the Encinitas City Council and as Encinitas mayor before winning the Senate seat in 2022, succeeding Republican Brian Jones.',
          'Her stated priorities are reducing homelessness and the cost of living, community safety and gun-violence prevention, public transportation and climate and wildlife protection. She has held three policy summits on ending homelessness.',
        ],
        recordVsChange:
          'Blakespear chairs a major Senate committee, has a long list of enacted bills and holds a seat Democrats flipped in 2022; Bassett offers a tax-and-spending alternative but has no legislative experience, and swapping would mean losing a committee chair in a closely divided seat.',
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓✓ Homelessness and cost of living are top priorities; chairs the LOSSAN rail resiliency subcommittee; held three homelessness summits',
            comparison: 'Bassett wants to remove barriers that make housing expensive to build but cites no specific legislation.',
          },
          {
            topic: 'Climate',
            position: '✓✓ Chairs the Senate Environmental Quality Committee; 100% alignment with California Environmental Voters and the Sierra Club (Digital Democracy)',
            comparison: 'Bassett prioritizes shoreline protection and “science-based” beach restoration.',
          },
          {
            topic: 'Education',
            position: '~ 85% alignment with the California Teachers Association (Digital Democracy); no distinctive education bill found',
            comparison: 'Bassett has no published education plan.',
          },
          {
            topic: 'Public safety',
            position: '✓ Authored firearm-surrender legislation for people in mental-health crises; gun-violence prevention is a stated priority',
            comparison: 'Bassett supports tools for law enforcement and accountability for serious offenses.',
          },
          {
            topic: 'Taxes',
            position: '~ 0% alignment with the Howard Jarvis Taxpayers Association and 15% with the California Chamber of Commerce (Digital Democracy)',
            comparison: 'Bassett opposes new taxes and wasteful state spending.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Mainstream Democrat; endorsed by the San Diego County Democratic Party',
            comparison: 'Bassett is a Republican endorsed by the Republican Party of San Diego County.',
          },
        ],
        money:
          'No on public record official totals; see Cal-Access at https://cal-access.sos.ca.gov/. Her 2022 race was the most-funded state Senate general election that year, at about $6.5 million combined, according to Ballotpedia.',
        endorsements: `San Diego County Democratic Party (KPBS endorsement guide, Sept 30, 2026) — ${KPBS_GUIDE}`,
        notes: [
          'In 2023 she opened a legal defense fund that raised $17,500 and was closed in 2024 (CalMatters, May 2023): https://calmatters.org/politics/capitol/2023/05/california-legislature-legal-fund/',
        ],
      },
      {
        id: 'laura-bassett',
        name: 'Laura Bassett',
        party: 'R',
        role: 'Small Business Owner',
        campaignUrl: 'https://bassettforca.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'Small-business owner and licensed real-estate broker and fiduciary who serves on the San Diego County Civil Service Commission; ran for Oceanside City Council in 2024 but has not held elected office.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'unknown', evidence: 'No public record of drafting legislation or legal-policy work found.' },
            { criterionId: 'budget-oversight', assessment: 'unknown', evidence: 'No public record of budget or committee work found; holds a USC accounting degree (1989).' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Per her campaign, serves as a San Diego County Civil Service Commissioner and owns two local businesses; no elected governing-body role.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Lifelong Oceanside resident, per her campaign; 2024 Oceanside City Council District 3 candidate (40.8%, second place).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of passing legislation or building legislative coalitions found.' },
          ],
        },
        bio: [
          'Bassett is a lifelong Oceanside resident who, with her husband, raised six children. She is a licensed real-estate professional and licensed professional fiduciary and owns two businesses, according to her campaign.',
          'She lost the 2024 Oceanside City Council District 3 race to Jimmy Figueroa, 47.5% to 40.8%.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓ Wants to remove barriers that make housing expensive and hard to build',
            comparison: 'Blakespear emphasizes homelessness services and rail corridor investment.',
          },
          {
            topic: 'Climate',
            position: '~ Prioritizes protecting the coastline and “science-based steps” to restore North County beaches',
            comparison: 'Blakespear chairs the Senate Environmental Quality Committee.',
          },
          {
            topic: 'Education',
            position: '? No education position found',
            comparison: 'Blakespear is aligned with the California Teachers Association 85% of the time.',
          },
          {
            topic: 'Public safety',
            position: '✓ “Balanced approach” that gives law enforcement tools and strengthens accountability for serious offenses',
            comparison: 'Blakespear focuses on gun-violence prevention.',
          },
          {
            topic: 'Taxes',
            position: '✓✓ Opposes new taxes and wasteful state spending; wants residents to keep more of their earnings',
            comparison: 'Blakespear scores 0% with the Howard Jarvis Taxpayers Association.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Conservative; endorsed by the Republican Party of San Diego County',
            comparison: 'Blakespear is a mainstream Democrat.',
          },
        ],
        money: CAL_ACCESS,
        endorsements: `Republican Party of San Diego County (KPBS endorsement guide, Sept 30, 2026) — ${KPBS_GUIDE}`,
      },
    ],
    crossTypology: ct([
      ['LP', 'Blakespear', '●', 'Leftward Progressives, about 74% of whom call gun violence a very big problem, want the strongest climate action and gun-violence prevention, and Blakespear chairs the Environmental Quality Committee with 100% Sierra Club alignment.'],
      ['LL', 'Blakespear', '●', 'Loyal Liberals value institutional experience, and Blakespear is an attorney, former Encinitas mayor and SANDAG chair who sits on the Senate budget committee and has passed dozens of bills.'],
      ['LO', 'Blakespear', '◐', 'Left-Out Left voters distrust long-time insiders, but Blakespear’s focus on homelessness and cost of living offers working people more than Bassett’s tax-and-spending cuts.'],
      ['OO', 'Blakespear', '◐', 'Order and Opportunity Left voters see gun violence and homelessness as big problems, with about 71% calling gun violence a very big one, and Blakespear has acted on both, though Bassett’s stress on law-enforcement tools also appeals to this group’s order instincts.'],
      ['TM', 'Bassett', '○', 'Tuned-Out Middle voters are wary of taxes that hit their paychecks, and Bassett opposes new taxes and wants residents to keep more of their earnings, though her plans are thin on detail.', 'Tuned-Out Middle voters who prefer a proven officeholder could pick Blakespear, who has held homelessness summits and sits on the budget committee, giving up Bassett’s pledge against new taxes.'],
      ['PP', 'Bassett', '◐', 'Pragmatic and Polite Right voters prefer a measured, mainstream Republican, and Bassett offers a “balanced approach” on public safety and fiscal restraint, though she has never held elected office.', 'Pragmatic and Polite Right voters who weigh competence most could back Blakespear, a former SANDAG chair who chairs a Senate committee, accepting a Democrat with a 0% Howard Jarvis score over Bassett’s fiscal restraint.'],
      ['UR', 'Bassett', '◐', 'Unconventional Right voters want lower taxes and smaller government, which Bassett offers, though her low-key campaign gives them little anti-establishment energy.', 'Unconventional Right voters who want someone able to deliver in Sacramento could pick Blakespear’s committee chairmanship and enacted bills, but that means a cross-party vote over Bassett’s opposition to new taxes.'],
      ['FC', 'Bassett', '●', 'Faith First Conservatives want limited government, low taxes and law and order, and Bassett offers all three while Blakespear’s firearm-surrender law runs against their gun-rights views, with 55% of them comfortable with open carry.'],
      ['NA', 'Bassett', '●', 'No Apologies Right voters oppose new taxes and gun restrictions, with 55% wanting less strict gun laws, and Bassett opposes new taxes while Blakespear chairs the committee that writes environmental rules.'],
    ]),
    counterArguments: [
      'PP (Bassett ◐): But consider that Blakespear has a long record of steady governance in Encinitas and SANDAG, the kind of incremental, experienced service this group usually prizes.',
      'OO (Blakespear ◐): But consider that Bassett’s promise of more tools for law enforcement and accountability for serious offenses may speak more directly to this group’s public-safety worries.',
    ],
  },
  {
    id: 'assembly-ad75',
    categoryId: 'state-leg',
    title: 'State Assembly, District 75',
    tldrLabel: 'AD-75',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-75 covers inland San Diego County communities including Poway, Ramona, Santee, Lakeside, Alpine, Valley Center and Fallbrook.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members write and vote on state laws and the budget, serve two-year terms, and sit on committees that shape taxes, higher education, emergency management and consumer-privacy policy.',
      'District 75 is a Republican-leaning inland San Diego seat, so the choice is whether to keep a high-profile Republican in a chamber where Democrats hold a large majority, or send a Democratic veteran and educator to Sacramento.',
    ],
    introParagraphs: [
      'In the June 2 primary, Republican incumbent Carl DeMaio took 59.7% to Democrat Gerald C. Boursiquot’s 40.3% (Secretary of State Statement of Vote via The Ballot Brief). DeMaio first won the seat in 2024, defeating Andrew Hayes 57%–43%.',
      'DeMaio also chairs Reform California, a statewide political organization. A complaint to the state Fair Political Practices Commission about his campaign finances is pending (see red flags). No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 75',
        url: 'https://theballotbrief.com/state/california/san-diego-county/california-assembly-district-75',
        summary: 'Neutral roster page with primary results and the candidates’ bios.',
      },
      {
        label: 'CalMatters — Republicans, DeMaio and Reform California',
        url: 'https://calmatters.org/politics/2026/03/california-republican-endorsements/',
        summary: 'Reporting on the dispute between DeMaio’s Reform California and the Republican Party, including the pending FPPC complaint.',
      },
    ],
    candidates: [
      {
        id: 'carl-demaio',
        photoSlug: 'carl-demaio',
        name: 'Carl DeMaio',
        party: 'R',
        role: 'Businessman/State Legislator',
        campaignUrl: 'https://carldemaio.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Assemblymember since December 2024 with committee assignments in higher education, privacy and consumer protection, and revenue and taxation, after four years on the San Diego City Council.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Assemblymember since Dec 2, 2024; Digital Democracy lists 31 bills in the 2025–26 session, 1 passed, 26 failed, 4 pending on a snapshot; earlier founded government-reform consultancies.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Subchair of Higher Education; member of Emergency Management, Privacy and Consumer Protection, and Revenue and Taxation (Digital Democracy).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Represents AD-75 since 2024; earlier ran for San Diego mayor (2012) and Congress (2014).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Led the 2018 Prop 6 gas-tax repeal (lost 55–45) and the 2017–18 Newman recall; as a minority-party member, few bills have passed.' },
          ],
        },
        bio: [
          'DeMaio founded two firms, the Performance Institute and the American Strategic Management Institute, and sold both in 2007. He served on the San Diego City Council from 2008 and lost the 2012 mayoral race and the 2014 race for Congress before winning this Assembly seat in 2024.',
          'He chairs Reform California, hosts a podcast and radio show, and has led tax-repeal and recall campaigns. In the Assembly his focus has been taxes and cost of living.',
        ],
        recordVsChange:
          'DeMaio is a high-profile voice for lower taxes in the Assembly minority, with a legislative record that Digital Democracy shows as mostly bills that failed; Boursiquot has no legislative record, so the choice is largely about representation of the district’s priorities versus a first-time challenger.',
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '? No housing or transit bill found',
            comparison: 'Boursiquot lists expanding access to safe, affordable housing as a top priority, citing his own experience of homelessness.',
          },
          {
            topic: 'Climate',
            position: '? No climate bill or stated position found',
            comparison: 'Boursiquot has not published a climate platform.',
          },
          {
            topic: 'Education',
            position: '~ Subchair of the Assembly Higher Education Committee; no major education bill found',
            comparison: 'Boursiquot teaches as an adjunct professor at Palomar College, per his candidate profile.',
          },
          {
            topic: 'Public safety',
            position: '~ Sits on the Emergency Management Committee; no specific public-safety bill found',
            comparison: 'Boursiquot has not published a public-safety plan.',
          },
          {
            topic: 'Taxes',
            position: '✓✓ Sits on Revenue and Taxation; led the 2018 gas-tax repeal initiative (Prop 6) and introduced a measure targeting politicians who ignore cost-of-living concerns',
            comparison: 'Boursiquot lists the cost-of-living crisis as a priority without specific tax proposals.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Conservative Republican and chair of Reform California; at odds with some local party leaders',
            comparison: 'Boursiquot is a Democrat endorsed by the California and San Diego County Democratic parties.',
          },
        ],
        money:
          'No on public record current filing totals; see Cal-Access at https://cal-access.sos.ca.gov/. Reform California, which he chairs, raised about $5 million in 2024 (CalMatters, March 2026).',
        endorsements: `Republican Party of San Diego County (KPBS endorsement guide, Sept 30, 2026) — ${KPBS_GUIDE}`,
        redFlags: [
          {
            severity: 'serious',
            status: 'under-investigation',
            text: 'Peace Officers Research Association of California (PORAC) President filed a sworn complaint with the Fair Political Practices Commission in August 2024 alleging that DeMaio used Reform California resources, including its voter-guide infrastructure, to benefit his Assembly campaign and failed to report some expenses; CalMatters reported the investigation as pending in March 2026. Separate FPPC complaints filed in 2024 by a lawyer for his primary opponent alleged contributions above the $5,500 limit and spending above the voluntary spending cap; his campaign spokesperson called them frivolous. CalMatters notes four earlier FPPC investigations of DeMaio ended in two warnings and two no-violation findings. DeMaio did not directly address the funds-transfer allegation, saying critics want to “seize power back.” No finding has been published.',
            whyItMatters:
              'Campaign-finance compliance is a basic test of how a legislator who writes and votes on state ethics and election laws follows them.',
            sources: [
              { label: 'CalMatters (Mar 2026)', url: 'https://calmatters.org/politics/2026/03/california-republican-endorsements/' },
              { label: 'Voice of San Diego (Jun 2024)', url: 'https://voiceofsandiego.org/2024/06/07/sacramento-report-assembly-candidate-carl-demaio-accused-of-campaign-finance-violations/' },
            ],
          },
        ],
        notes: [
          'DeMaio chairs Reform California, a political organization that includes two committees he controls, Reform California with Carl DeMaio and Reform California Voter Guide, plus a consulting firm and a YouTube channel. It says it has raised $25 million, mostly from small online donors (CalMatters, March 2026): https://calmatters.org/politics/2026/03/california-republican-endorsements/',
          'The group raised about $5 million in 2024, roughly three times what the San Diego County Republican Party raised that year, and the county party’s endorsements have been a point of friction: former county chair Corey Gustafson was ousted after refusing to back DeMaio’s 2024 Assembly campaign, and critics say DeMaio’s allies shaped the local party’s endorsement process. DeMaio has said his critics want “to seize power back and line their pockets.”',
        ],
      },
      {
        id: 'gerald-boursiquot',
        name: 'Gerald C. Boursiquot',
        party: 'D',
        role: 'IT Contractor/Father',
        campaignUrl: 'https://www.geraldforassembly.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'Veteran with 22 years in the Navy and Air Force and an adjunct professor, per his candidate profile; no elected or legislative record found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record of drafting legislation or policy work found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of budget or committee work found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Fallbrook resident for over a decade; says he has been an active community member; no formal service role found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of passing legislation or coalition-building found.' },
          ],
        },
        bio: [
          'Boursiquot is a 22-year Navy and Air Force veteran born to Haitian immigrant parents who has lived in Fallbrook for more than a decade. He has said he experienced homelessness for nine months after military service despite steady employment.',
          'His campaign slogan is “Common Sense for Common People,” and he criticizes DeMaio for spending time on “podcasts, photo ops.”',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓ Top priority is expanding access to safe, affordable housing, drawing on his own experience of homelessness',
            comparison: 'DeMaio has no housing bill found.',
          },
          {
            topic: 'Climate',
            position: '? No climate position found',
            comparison: 'DeMaio has no stated climate position.',
          },
          {
            topic: 'Education',
            position: '? No education platform found; teaches as an adjunct professor at Palomar College',
            comparison: 'DeMaio is subchair of the Assembly Higher Education Committee.',
          },
          {
            topic: 'Public safety',
            position: '? No public-safety position found',
            comparison: 'DeMaio sits on the Emergency Management Committee.',
          },
          {
            topic: 'Taxes',
            position: '~ Lists the cost-of-living crisis as a priority; no specific tax plan found',
            comparison: 'DeMaio is a leading anti-tax advocate.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Democrat; endorsed by the California and San Diego County Democratic parties',
            comparison: 'DeMaio is a conservative who also chairs Reform California.',
          },
        ],
        money: CAL_ACCESS,
        endorsements: `San Diego County Democratic Party (KPBS endorsement guide, Sept 30, 2026) — ${KPBS_GUIDE}`,
        notes: [
          'His military and work history (including time as a UAW autoworker and rideshare driver) comes from his own candidate profile and was not independently checked.',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Boursiquot', '●', 'Leftward Progressives want housing and cost-of-living help for working people, and Boursiquot puts affordable housing first while DeMaio built his career on tax repeal.'],
      ['LL', 'Boursiquot', '◐', 'Loyal Liberals, 81% of whom say the Democratic Party represents people like them well, back the Democratic Party’s nominee and weigh ethics seriously, which favors Boursiquot over DeMaio and his pending FPPC complaint, though Boursiquot has no governing record.', 'Loyal Liberals who prize experience might weigh DeMaio’s city council and Assembly committee service, but it is a cross-party vote for the Reform California chair, whose campaign finances face a pending FPPC complaint.'],
      ['LO', 'Boursiquot', '●', 'Left-Out Left voters, 75% of whom say few or no officials ran to serve the public, distrust politicians who run to build money machines, and Boursiquot is a working-class veteran who experienced homelessness while DeMaio’s Reform California raised millions and faces a campaign-finance complaint.'],
      ['OO', 'Boursiquot', '◐', 'Order and Opportunity Left voters respect service and want affordable housing, and Boursiquot is a 22-year Navy and Air Force veteran running on housing, though he has no public-safety plan.', 'Order and Opportunity Left voters who want a proven legislator could pick DeMaio, who sits on Revenue and Taxation and Emergency Management, though it is a cross-party vote for a combative incumbent with a pending FPPC complaint.'],
      ['TM', 'DeMaio / Boursiquot', '=', 'Tuned-Out Middle voters weigh tax relief against trust: if concrete cost relief such as DeMaio’s gas-tax repeal campaign and tax-cutting agenda matters most, DeMaio; if the money-in-politics doubts raised by the pending FPPC complaint matter more, Boursiquot, whose own experience of homelessness may sit closer to their lives.'],
      ['PP', 'DeMaio / Boursiquot', '=', 'Pragmatic and Polite Right voters, 86% of whom say officials should avoid heated language, weigh civility against party and experience: if penalizing DeMaio’s party feuds and the pending FPPC complaint matters most, Boursiquot, despite his thin record; if a known Republican with Assembly committee seats and city council experience matters more, DeMaio.'],
      ['UR', 'DeMaio', '●', 'Unconventional Right voters respond to anti-establishment, plain-spoken tax cutters, and DeMaio has fought both Sacramento Democrats and his own county party leaders.'],
      ['FC', 'DeMaio', '◐', 'Faith First Conservatives back the Republican on low taxes and limited government, though DeMaio’s campaign focuses on taxes rather than the social issues this group ranks first.'],
      ['NA', 'DeMaio', '●', 'No Apologies Right voters, 53% of whom like seeing opponents humiliated, want fighters, and DeMaio led the gas-tax repeal and the Newman recall and calls his critics people who want to “line their pockets.”'],
    ]),
    counterArguments: [
      'UR (DeMaio ●): But consider that DeMaio faces a pending FPPC complaint alleging Reform California resources aided his 2024 campaign, and only one of his 31 bills this session has passed.',
    ],
  },
  {
    id: 'assembly-ad76',
    categoryId: 'state-leg',
    title: 'State Assembly, District 76',
    tldrLabel: 'AD-76',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-76 covers Escondido, San Marcos, parts of San Diego and unincorporated communities such as Rancho Santa Fe and Lake San Marcos.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members write and vote on state laws and the budget, serve two-year terms, and sit on committees that shape education, health, higher education and economic policy.',
      'District 76 is a competitive North County seat: Patel won it in 2024 with 54.0% against Republican Kristie Bruce-Lane after Bruce-Lane led the primary with 49.5%. The question is whether voters keep a Democrat who chairs the Education Committee or elect a Republican focused on costs and job training.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic incumbent Darshana Patel took 55.8% and Republican Carrie S. Espinoza Villanueva 44.2% (Secretary of State Statement of Vote via The Ballot Brief; another SoS file shows 55.7% to 44.3%).',
      'Patel chairs the Assembly Education Committee. Espinoza Villanueva works in college administration support and is running on lower taxes, deregulation and aligning education with jobs. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 76',
        url: 'https://theballotbrief.com/state/california/san-diego-county/california-assembly-district-76',
        summary: 'Neutral roster page with primary results, bios and stated priorities.',
      },
      {
        label: 'CalMatters Digital Democracy — Darshana Patel',
        url: 'https://calmatters.digitaldemocracy.org/legislators/darshana-patel-187429',
        summary: 'Committee assignments, authored bills and vote record for the incumbent.',
      },
    ],
    candidates: [
      {
        id: 'darshana-patel',
        photoSlug: 'darshana-patel',
        name: 'Darshana Patel',
        party: 'D',
        role: 'California State Assemblymember',
        campaignUrl: 'https://patel.asmdc.org',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Assemblymember since December 2024 who chairs the Education Committee, after serving on and presiding over the Poway Unified School District board.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since Dec 2024; 38 bills authored in the 2025–26 session, 14 passed, 8 failed, 16 pending (Digital Democracy); Ph.D. in biophysics from UC Irvine.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs the Assembly Education Committee; also on Budget, Economic Development, Health and Higher Education committees (Digital Democracy).' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Represents AD-76 since 2024; Poway Unified school board member and president (elected 2016, reelected 2020), a school district that overlaps North County.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Co-authored the Diwali state-holiday bill, which passed the Assembly unanimously in June 2025; several education bills passed per Digital Democracy.' },
          ],
        },
        bio: [
          'Patel is a research scientist with a Ph.D. in biophysics from UC Irvine who did oncology research at Genentech before entering politics. She was elected to the Poway Unified School District board in 2016 and reelected in 2020, and served as a commissioner on the California Commission on Asian and Pacific Islander Affairs.',
          'She was first elected to the Assembly in 2024 and is the first Hindu woman in the California Legislature, according to Wikipedia. Her priorities are K-12 and higher education, youth mental-health treatment access and equity for underserved students.',
        ],
        recordVsChange:
          'Patel chairs the committee that handles K-12 policy and has several education bills passed in her first term; Espinoza Villanueva brings job-training experience but no legislative track record, so changing would mean giving up a committee chair in a seat decided by about 11 points in June.',
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '? No housing or transit bill found',
            comparison: 'Espinoza Villanueva lists homelessness and addiction as a priority.',
          },
          {
            topic: 'Climate',
            position: '? No climate bill found',
            comparison: 'Espinoza Villanueva has no stated climate position.',
          },
          {
            topic: 'Education',
            position: '✓✓ Chairs the Assembly Education Committee; authored AB 2555 (English learner reclassification) and AB 2468 (school accountability for students with disabilities)',
            comparison: 'Espinoza Villanueva wants education aligned with the job market and works in vocational programs at a college.',
          },
          {
            topic: 'Public safety',
            position: '✓ Authored AB 2179 on workplace-violence restraining orders and a 2025 bill to make threats against schools and places of worship easier to prosecute',
            comparison: 'Espinoza Villanueva lists addressing addiction and homelessness but no public-safety bill.',
          },
          {
            topic: 'Taxes',
            position: '? No distinctive tax position found',
            comparison: 'Espinoza Villanueva wants tax cuts, deregulation and no taxation of retirees’ savings.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Mainstream Democrat; endorsed by the San Diego County Democratic Party',
            comparison: 'Espinoza Villanueva is a Republican endorsed by the Republican Party of San Diego County.',
          },
        ],
        money: CAL_ACCESS,
        endorsements: `San Diego County Democratic Party (KPBS endorsement guide, Sept 30, 2026) — ${KPBS_GUIDE}`,
      },
      {
        id: 'carrie-espinoza-villanueva',
        name: 'Carrie S. Espinoza Villanueva',
        party: 'R',
        role: 'College Administration Support',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'Works at a community college supporting vocational-trades programs and has owned small businesses, per her candidate profile; no elected or legislative record found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record of drafting legislation or policy work found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of budget or committee work found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'Role in vocational programs at a college is described; no record of constituent-service work in AD-76 found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of coalition-building or passing legislation found.' },
          ],
        },
        bio: [
          'Espinoza Villanueva works in college administration support for vocational trades programs including welding, automotive, diesel, HVAC and water technology. She was raised in an agricultural family and has owned and managed small businesses in manufacturing, diesel remanufacturing, home rehabilitation and ranch operations, according to her candidate profile.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '~ Lists homelessness and addiction as priorities; no housing plan found',
            comparison: 'Patel has no housing bill found.',
          },
          {
            topic: 'Climate',
            position: '? No climate position found',
            comparison: 'Patel has no stated climate position.',
          },
          {
            topic: 'Education',
            position: '✓ Wants education aligned with the job market and vocational trades',
            comparison: 'Patel chairs the Assembly Education Committee with a K-12 and higher-education focus.',
          },
          {
            topic: 'Public safety',
            position: '? No public-safety plan found beyond addiction and homelessness',
            comparison: 'Patel authored a workplace-violence restraining-order bill and a bill on threats against institutions.',
          },
          {
            topic: 'Taxes',
            position: '✓✓ Cut taxes and deregulate to reduce cost of living; protect retirees’ savings from taxation',
            comparison: 'Patel has no stated tax-cut agenda.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Republican; endorsed by the Republican Party of San Diego County',
            comparison: 'Patel is a mainstream Democrat.',
          },
        ],
        money: CAL_ACCESS,
        endorsements: `Republican Party of San Diego County (KPBS endorsement guide, Sept 30, 2026) — ${KPBS_GUIDE}`,
        notes: [
          'No campaign website was found as of Sept 7, 2026; her bio and priorities come from the candidate profile on The Ballot Brief.',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Patel', '●', 'Leftward Progressives want an expansive public school system and equity for underserved students, and Patel chairs the Education Committee with those priorities while Espinoza Villanueva wants tax cuts and deregulation.'],
      ['LL', 'Patel', '●', 'Loyal Liberals, 92% of whom say experts make better policy decisions than others, trust expertise, and Patel is a Ph.D. scientist and former school-board president who now chairs the Education Committee and sits on Budget.'],
      ['LO', 'Patel', '◐', 'Left-Out Left voters want government to guarantee good K-12 schools and are lukewarm on insiders, but Patel’s education work does more for working families than Espinoza Villanueva’s deregulation agenda.'],
      ['OO', 'Patel', '◐', 'Order and Opportunity Left voters want safety and opportunity, and Patel’s bills on workplace-violence restraining orders and threats against schools fit, though Espinoza Villanueva’s vocational job-training focus also appeals.'],
      ['TM', 'Espinoza Villanueva', '○', 'Tuned-Out Middle voters are pocketbook-first, and Espinoza Villanueva talks about tax cuts, protecting retirees’ savings and training for trade jobs, though she offers few specifics.', 'Tuned-Out Middle voters who want someone with a track record could pick Patel, who chairs the Education Committee and sits on Budget, giving up Espinoza Villanueva’s tax-cut and job-training pitch.'],
      ['PP', 'Espinoza Villanueva', '○', 'Pragmatic and Polite Right voters prefer a measured Republican focused on fiscal prudence and practical job training, though Espinoza Villanueva’s lack of any public record makes this a weak lean against a capable incumbent.', 'Pragmatic and Polite Right voters who prize competence could choose Patel, a scientist and former school-board president who has passed several bills, giving up Espinoza Villanueva’s tax cuts for a Democrat.'],
      ['UR', 'Espinoza Villanueva', '◐', 'Unconventional Right voters want lower taxes and smaller government, which Espinoza Villanueva offers, though her campaign has little of the anti-establishment edge they like.', 'Unconventional Right voters who see little outsider edge in either candidate could let experience decide and pick Patel, but it is a cross-party vote over the Republican’s tax-cut and deregulation platform.'],
      ['FC', 'Espinoza Villanueva', '◐', 'Faith First Conservatives back the Republican on lower taxes and addiction and homelessness, though Espinoza Villanueva’s platform does not address the social issues they rank first.', 'Faith First Conservatives might credit Patel’s bill making threats against schools and places of worship easier to prosecute, but it is a cross-party vote that gives up the Republican’s tax cuts.'],
      ['NA', 'Espinoza Villanueva', '●', 'No Apologies Right voters, about 80% of whom say regulation does more harm than good, want tax cuts and deregulation, which are the center of Espinoza Villanueva’s campaign.'],
    ]),
    counterArguments: [
      'PP (Espinoza Villanueva ○): But consider that Patel has passed several bills in her first term and chairs a major committee, the experienced, incremental governance this group usually rewards.',
      'OO (Patel ◐): But consider that Espinoza Villanueva’s work in welding, diesel and HVAC training programs speaks to the job opportunity this group wants.',
    ],
  },
];
