import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

const LEGAL_LEG =
  'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

export const RACES_LA_DISTRICTS_B: Race[] = [
  {
    id: 'senate-sd24',
    categoryId: 'state-leg',
    title: 'State Senate, District 24',
    tldrLabel: 'SD-24',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: [
      { id: 'law-policy', label: 'Lawmaking, legal drafting or policy experience', detail: 'Senators write, amend and vote on state statutes and confirm appointees.' },
      { id: 'budget-oversight', label: 'Budget and committee work', detail: 'The state budget and policy committees are central to a senator’s workload.' },
      { id: 'public-mgmt', label: 'Managing a public agency or elected body', detail: 'Experience running or governing a public organization transfers to oversight of state agencies.' },
      { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: 'SD-24 stretches from West Hollywood and Beverly Hills through the Westside and the beach cities.' },
      { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
    ],
    seatContext: 'Open seat (term limits)',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the state budget, housing and land-use law, climate and energy rules, public safety and criminal-justice statutes, and confirmations of governor appointees; they serve four-year terms.',
      'Sen. Ben Allen is term-limited and is running for insurance commissioner, so this safely Democratic Westside seat is open. Both finalists are Democrats, so the choice is about approach: a labor-backed, further-left West Hollywood councilmember versus a better-funded, more moderate first-time candidate.',
    ],
    introParagraphs: [
      'In the June 2 primary, West Hollywood Councilmember John Erickson finished first with about 20.5% and Brian Goldsmith second with about 18.3%; Republicans G. Rick Marshall (about 17.5%) and Kristina Irwin (about 14.1%) split the Republican vote and missed the runoff (Secretary of State returns as reported by the Daily Bruin and WeHo Online).',
      'CityWatch LA framed the runoff as “center vs. left”: Goldsmith aims to win moderate and traditional Democrats and Republican-leaning primary voters, while Erickson aims to maximize progressives, LGBTQ+ voters and Democrats who backed other candidates. No public polling of the runoff is available.',
    ],
    readingLinks: [
      {
        label: 'CalMatters — Senate races to watch, 2026',
        url: 'https://calmatters.org/california-voter-guide-2026/state-senate/',
        summary: 'Nonpartisan overview noting Erickson’s first-place finish on far less spending and Goldsmith’s cash advantage.',
      },
      {
        label: 'WeHo Online — Following the money in the SD-24 race',
        url: 'https://wehoonline.com/as-west-hollywood-reels-from-two-shootings-follow-the-money-in-the-sd-24-senate-race/',
        summary: 'Campaign and independent-expenditure money as of April 18, 2026, plus the candidates’ public-safety positions.',
      },
      {
        label: 'CityWatch LA — SD 24: Goldsmith vs. Erickson, Center vs. Left',
        url: 'https://www.citywatchla.com/neighborhood-politics/32989-sd-24-goldsmith-vs-erickson-center-vs-left',
        summary: 'Analysis of each candidate’s coalition and general-election strategy.',
      },
      {
        label: 'Daily Bruin — Erickson, Goldsmith advance to November',
        url: 'https://dailybruin.com/2026/06/13/erickson-goldsmith-advance-to-november-general-for-california-senate-district-24',
        summary: 'Primary results and each candidate’s stated message.',
      },
    ],
    candidates: [
      {
        id: 'john-erickson',
        name: 'John M. Erickson',
        party: 'D',
        role: 'Councilmember',
        campaignUrl: 'https://www.johnerickson4senate.com/',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary:
            'Elected to the West Hollywood City Council in 2020 and re-elected in 2024 (including a term as mayor), after staff roles in city government and with Planned Parenthood Los Angeles; he has not served in the state Legislature.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'Votes on and has passed city ordinances since 2020, including a minimum-wage increase, renter protections for seniors and people with disabilities, and a gender-neutral restroom requirement; earlier a city council deputy and legislative representative for Los Angeles International Airport.' },
            { criterionId: 'budget-oversight', assessment: 'partial', evidence: 'Votes on West Hollywood’s city budget (for example, 2022 votes on sheriff’s deputy staffing); no state budget or committee experience.' },
            { criterionId: 'public-mgmt', assessment: 'met', evidence: 'Councilmember since 2020, including service as mayor on the council’s rotating schedule; earlier vice president at Planned Parenthood Los Angeles.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Represents West Hollywood, one of the district’s communities; no elected role in Beverly Hills, Brentwood or the beach cities.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Won support from a wide range of unions, county supervisors from both parties and the California Federation of Labor Unions; a related state restroom bill passed unanimously, but he has not carried legislation himself.' },
          ],
        },
        bio: [
          'West Hollywood city councilmember since 2020 (re-elected 2024) and a former mayor; he grew up in Ripon, Wisconsin, holds a Ph.D. in American religious history and public policy from the Claremont Colleges, and has been a union president, a Planned Parenthood Los Angeles vice president and a chief of staff at the Alliance for a Better Community.',
          'His Senate priorities include renter protections, housing and health care, LGBTQ+ and reproductive rights, reversing the Medi-Cal enrollment freeze for undocumented immigrants, climate and transit, and making billionaires and corporations pay more.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓✓ Endorsed by Abundant Housing, California YIMBY and YIMBY Los Angeles; priorities include renter protections and public transit', comparison: 'Goldsmith says he wants to understand why building costs so much and review permitting rules, without a stated bill agenda.' },
          { topic: 'Climate', position: '✓ Lists climate change and transit as priorities; endorsed by the Sierra Club', comparison: 'Goldsmith is endorsed by California Environmental Voters and says regulations protecting the environment should be kept.' },
          { topic: 'Education', position: '✓ Backed by the California Teachers Association and California Federation of Teachers', comparison: 'Goldsmith has no public education platform found.' },
          { topic: 'Public safety', position: '~ Voted in 2022 against cutting sheriff’s deputies, then joined a 3-2 vote to cut deputy staffing; voted against continuing a Flock license-plate camera rollout', comparison: 'Goldsmith supports fully funding Prop. 36 and is endorsed by the Highway Patrol officers’ association and the district attorney.' },
          { topic: 'Taxes & cost of living', position: '✓ Says billionaires and corporations should pay their fair share for services', comparison: 'Goldsmith calls affordability the top issue and focuses on cutting costs, with no tax-increase plan found.' },
          { topic: 'Caucus / ideology', position: '✓✓ Progressive, labor-aligned Democrat; strongest with public-employee unions and LGBTQ+ voters', comparison: 'Goldsmith describes himself as an Obama-Clinton Democrat and runs a more moderate campaign.' },
        ],
        money:
          'As of April 18, 2026 filings (WeHo Online): $398,365 cash on hand; he spent about $518,000 in the primary. An independent committee, Progressives for John Erickson for Senate 2026, had raised about $355,000, more than $200,000 of it tied to teachers unions, and a Unite Here Local 11 committee ran field outreach. No later totals found; see Cal-Access.',
        endorsements:
          'California Federation of Labor Unions, SEIU California, UNITE HERE Local 11, California Teachers Association, California Federation of Teachers, California Professional Firefighters, Equality California, Sierra Club, Abundant Housing, California YIMBY, Treasurer Fiona Ma, Sheriff Robert Luna and Supervisors Kathryn Barger, Janice Hahn, Lindsey Horvath and Hilda Solis (all as listed on his campaign site). The West Hollywood Beverly Hills Democratic Club made no endorsement after neither candidate reached 60%. No Los Angeles County Democratic Party endorsement found.',
        notes: [
          'An outside group, Keep California Golden, ran ads criticizing city-funded trips he took to Paris and the Vatican; he said the trips were approved in public meetings and tied to youth sports and LGBTQ+ athlete programs ahead of the 2028 Olympics, and LGBTQ+ groups condemned the ads. This is an attack by an outside group, not a finding — https://www.losangelesblade.com/2026/05/10/meet-john-erickson-candidate-for-california-state-senate-district-24/',
          'Fellow West Hollywood Councilmember Lauren Meister endorsed Goldsmith.',
        ],
      },
      {
        id: 'brian-goldsmith',
        name: 'Brian Goldsmith',
        party: 'D',
        role: 'Small Business Owner',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'First-time candidate who has never held elected office; his background is in journalism and Democratic campaign and consulting work.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'not-met', evidence: 'No legislative, legal-drafting or government policy role found; former news producer for Katie Couric and member of Pete Buttigieg’s 2020 presidential campaign.' },
            { criterionId: 'budget-oversight', assessment: 'not-met', evidence: 'No public record of budget or committee work found.' },
            { criterionId: 'public-mgmt', assessment: 'not-met', evidence: 'No record of managing a public agency or serving on an elected body found; his ballot designation is small business owner.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Native of Brentwood raised in West Los Angeles; leads in the primary in Brentwood, Beverly Hills and the beach cities according to CityWatch LA, but holds no local office.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'Assembled endorsements from former primary rivals, Sen. Ben Allen and national Democrats; no record of passing legislation.' },
          ],
        },
        bio: [
          'Brentwood native and first-time candidate; a former news producer for Katie Couric at Yahoo! and CBS who joined Pete Buttigieg’s 2020 presidential campaign, and a Democratic consultant. He calls himself an “Obama-Clinton Democrat.”',
          'He calls affordability the top issue, wants to expand CARE Court eligibility and allow involuntary treatment in a “measured, thoughtful way,” supports fully funding Prop. 36, and backs expanding the film and TV tax credit to more jobs.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '~ Wants to learn why building is so expensive and review permitting rules while keeping rules that protect workers, the environment and public health', comparison: 'Erickson is endorsed by Abundant Housing and California YIMBY.' },
          { topic: 'Climate', position: '✓ Endorsed by California Environmental Voters; says environmental protections should be kept', comparison: 'Erickson lists climate change and transit among his priorities.' },
          { topic: 'Education', position: '? No public position found', comparison: 'Erickson is backed by the major teachers unions.' },
          { topic: 'Public safety', position: '✓✓ Supports fully funding Prop. 36 and law-enforcement staffing; endorsed by the California Association of Highway Patrolmen and District Attorney Nathan Hochman', comparison: 'Erickson’s council votes on deputy staffing and license-plate cameras were mixed.' },
          { topic: 'Taxes & cost of living', position: '~ Affordability is his top stated issue; supports expanding the film and TV tax credit; no tax plan found', comparison: 'Erickson says billionaires and corporations should pay their fair share.' },
          { topic: 'Caucus / ideology', position: '✓ Moderate, “independent-minded” Democrat backed by Pelosi, Hillary Clinton and Buttigieg', comparison: 'Erickson is further left and backed by the labor federation.' },
        ],
        money:
          'As of April 18, 2026 filings (WeHo Online): about $1 million cash on hand; CalMatters and local outlets report he spent nearly $2.5 million in the primary and has a cash advantage. An independent committee, Progressive Leadership for Us, had spent about $740,000 on ads for him, including $400,000 from Russell Goldsmith, $100,000 from Martha Karsh and $75,000 combined from Arie and Rebecka Belldegrun. No later totals found; see Cal-Access.',
        endorsements:
          'Nancy Pelosi, Hillary Clinton, Pete Buttigieg, Sen. Ben Allen, Assemblymembers Jacqui Irwin and Rick Chavez Zbur, District Attorney Nathan Hochman, California Environmental Voters, Santa Monica Democratic Club, California Association of Highway Patrolmen, Teamsters Joint Council 42, ILWU Locals 13, 63 and 94, CAL FIRE Local 2881, and former primary rivals Eric Alegria, Mike Newhouse and Ellen Evans (campaign-announced lists as reported by local outlets). No Los Angeles County Democratic Party endorsement found.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Erickson', '●', 'Progressive Left voters favor the further-left finalist: Erickson is backed by the California Federation of Labor, Working Families Party and Sierra Club and wants billionaires and corporations to pay more, while Goldsmith runs as a moderate.'],
      ['EL', 'Goldsmith', '◐', 'Establishment Liberals, comfortable with the party’s mainstream wing, may favor the Pelosi-, Clinton- and Buttigieg-endorsed finalist with a pragmatic affordability pitch, though Erickson also has broad officeholder support.', 'Establishment Liberals who prize a governing record could prefer Erickson, a West Hollywood councilmember since 2020 and former mayor with support from supervisors of both parties, over a first-time candidate, at the cost of Goldsmith’s more moderate, party-leadership profile.'],
      ['DM', 'Erickson', '◐', 'Democratic Mainstays are loyal to unions and party-aligned causes, and Erickson carries most of the labor movement and Democratic clubs’ allied groups, although Goldsmith has Democratic leaders behind him too.'],
      ['OL', 'Erickson', '◐', 'Outsider Left voters, skeptical of big-money politics, lean to the councilmember who won the primary while being outspent, over the candidate with outside committees funded by wealthy donors.'],
      ['SS', 'Goldsmith', '○', 'Stressed Sideliners worried about cost of living and crime respond to Goldsmith’s focus on affordability and Prop. 36 funding, but have little to go on from either campaign.', 'Stressed Sideliners who just want someone who has done the job could pick Erickson, who has voted through a city minimum-wage increase and renter protections, though they give up Goldsmith’s steadier focus on affordability and fully funding Prop. 36.'],
      ['AR', 'Goldsmith', '◐', 'Ambivalent Right voters in a Westside district where Republicans took about a third of the primary vote lean to the more moderate Democrat who is courting them.', 'Ambivalent Right voters who distrust untested newcomers could choose Erickson for his years voting on city budgets and ordinances, but they would be backing the further-left, labor-aligned finalist over the moderate who is actively courting them.'],
      ['PR', 'Goldsmith', '○', 'Populist Right voters, with no Republican on the ballot, weakly prefer the finalist who emphasizes law enforcement and is less aligned with public-employee unions.', 'Populist Right voters who weigh experience might settle on Erickson as the finalist who has actually helped run a city, even though he is closer to public-employee unions and cast mixed votes on sheriff’s staffing that cut against their law-enforcement priorities.'],
      ['CC', 'Goldsmith', '◐', 'Committed Conservatives with no Republican on the ballot choose the more moderate finalist who backs police funding and Prop. 36 over the labor-backed progressive.', 'Committed Conservatives who value proven management could accept Erickson’s council and mayoral record, and note that Sheriff Luna and Supervisor Barger endorse him, but they would give up Goldsmith’s firmer backing of Prop. 36 and police staffing.'],
      ['FF', 'Goldsmith', '○', 'Faith and Flag Conservatives prefer the candidate with law-enforcement endorsements and a more moderate profile, and find little else to choose between the two.', 'Faith and Flag Conservatives with no Republican option could let experience decide and pick the sitting councilmember, though Erickson’s priorities on reproductive and LGBTQ+ rights sit further from their views than Goldsmith’s moderate, law-enforcement-endorsed profile.'],
    ]),
    counterArguments: [
      'EL (Goldsmith ◐): But consider that Goldsmith has never held office or worked on legislation, while Erickson has six years of governing and a broader coalition of labor, housing and Democratic groups.',
      'PL (Erickson ●): But consider that Erickson voted to cut sheriff’s deputy staffing after first opposing the cut and opposed a camera program, positions that mix with a more public-safety-minded electorate than the primary suggests.',
    ],
  },
  {
    id: 'senate-sd26',
    categoryId: 'state-leg',
    title: 'State Senate, District 26',
    tldrLabel: 'SD-26',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: [
      { id: 'law-policy', label: 'Lawmaking, legal drafting or policy experience', detail: 'Senators write, amend and vote on state statutes and confirm appointees.' },
      { id: 'budget-oversight', label: 'Budget and committee work', detail: 'The state budget and policy committees are central to a senator’s workload.' },
      { id: 'public-mgmt', label: 'Managing a public agency or elected body', detail: 'Experience running or governing a public organization transfers to oversight of state agencies.' },
      { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: 'SD-26 spans downtown Los Angeles, Eastside neighborhoods such as Boyle Heights and Highland Park, and East Los Angeles.' },
      { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
    ],
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the state budget, housing and land-use law, climate and energy rules, public safety and criminal-justice statutes, and confirmations of governor appointees; they serve four-year terms.',
      'Sen. María Elena Durazo is leaving to run for Los Angeles County supervisor, so this heavily Democratic seat is open. Both finalists are Democrats, so the choice is between a labor-backed community college trustee and attorney and a more progressive former mayoral and legislative staffer.',
    ],
    introParagraphs: [
      'In the June 2 primary, Sara Hernandez led an eight-candidate field with 31.17% and Sarah Rascón took second with 19.43% (The Eastsider LA, Sept. 22, 2026).',
      'The district has about 943,000 residents, roughly 59% of them Latino, with a median household income of $67,285 (The Eastsider LA). No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Eastsider — Breaking down a “Sara vs. Sarah” faceoff',
        url: 'https://www.theeastsiderla.com/news/government_and_politics/breaking-down-a-sara-vs-sarah-faceoff-for-the-state-senate-district-26-seat/article_ddce4e88-57e1-421e-9b6e-55fe9c4bb0a1.html',
        summary: 'Sept. 22, 2026 side-by-side of both finalists’ backgrounds, endorsements and fundraising.',
      },
      {
        label: 'The LA Local — What to know about the race for State Senate District 26',
        url: 'https://thelalocal.org/government/election/election-senate-district-26-candidates/',
        summary: 'Issue positions of each finalist on housing, immigration and the environment.',
      },
      {
        label: 'CalMatters — Senate races to watch, 2026',
        url: 'https://calmatters.org/california-voter-guide-2026/state-senate/',
        summary: 'Nonpartisan overview describing Hernandez as the frontrunner.',
      },
    ],
    candidates: [
      {
        id: 'sara-hernandez',
        name: 'Sara Hernandez',
        party: 'D',
        role: 'Affordable Housing Advocate',
        campaignUrl: 'https://www.sarahernandez.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'Elected Los Angeles Community College District trustee since 2022, a former City Hall staffer and a housing and environmental attorney; she has not served in a legislature.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'partial', evidence: 'Housing and environmental attorney and former Los Angeles City Hall staffer; no drafting or votes on state statutes.' },
            { criterionId: 'budget-oversight', assessment: 'partial', evidence: 'As an elected trustee she votes on the community college district’s budget; no state budget experience.' },
            { criterionId: 'public-mgmt', assessment: 'met', evidence: 'Elected trustee of the Los Angeles Community College District since 2022; a campaign profile says colleagues chose her as board president.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Helped form the downtown community group DTLA Strong; a former middle school teacher; trustee for a district that includes SD-26 neighborhoods.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Won the Los Angeles County Federation of Labor and Supervisor Hilda Solis; no record of passing legislation.' },
          ],
        },
        bio: [
          'Former middle school teacher, Los Angeles City Hall staffer and housing and environmental attorney who helped form DTLA Strong. She was elected to the Los Angeles Community College District board in 2022 by defeating an incumbent.',
          'She calls housing affordability the district’s biggest issue and pledges to protect renters from unfair eviction, build more affordable housing and expand paths to home ownership.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓✓ Top priority: tenant protection against unfair eviction, more affordable housing and home-buying options; championed student and faculty housing on community college land', comparison: 'Rascón puts homelessness first and also calls for zoning reform near transit and jobs.' },
          { topic: 'Climate', position: '✓ Would expand zero-emission freight infrastructure, strengthen protections near warehouses and raise park access from 65% to 80% of residents', comparison: 'Rascón would hold warehouse operators accountable and end oil and gas subsidies.' },
          { topic: 'Education', position: '✓ Elected community college trustee since 2022; former middle school teacher', comparison: 'Rascón has no education office or platform found.' },
          { topic: 'Public safety', position: '? No public position found on policing; pledges to keep California resources out of federal immigration enforcement', comparison: 'Rascón backs limits on local police cooperation with ICE and has not published a policing platform.' },
          { topic: 'Taxes & cost of living', position: '~ Affordability, especially housing, is her framing; no tax plan found', comparison: 'Rascón is more focused on homelessness and anti-displacement measures.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat with the county labor federation and Solis behind her; the more establishment finalist', comparison: 'Rascón is further left, with the DSA “recommended” listing and the outgoing senator’s endorsement.' },
        ],
        money:
          'About $1.12 million from 750 donations through Sept. 14, 2026, including the primary period (The Eastsider LA); roughly five times Rascón’s total. See Cal-Access for filings.',
        endorsements:
          'Los Angeles County Federation of Labor, La Opinión and Supervisor Hilda Solis (The Eastsider LA, Sept. 22, 2026); her campaign site lists additional labor groups, including the California Federation of Labor. No Los Angeles County Democratic Party endorsement found.',
      },
      {
        id: 'sarah-rascon',
        name: 'Sarah Rascón',
        party: 'D',
        role: 'Environmental Protection Director',
        campaignUrl: 'https://www.rasconforsenate.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'Years of legislative and executive staff work (an Assemblymember’s office, a regional conservation agency and the mayor’s office) and service on an appointed planning commission, with no elected office.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'partial', evidence: 'Field representative for then-Assemblymember Jimmy Gomez; staff policy roles, but never voted on or drafted legislation as a member.' },
            { criterionId: 'budget-oversight', assessment: 'unknown', evidence: 'No public record of budget or committee work found.' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Director of County and Regional Affairs for Mayor Karen Bass; deputy executive officer for environmental equity at the Mountains Recreation and Conservation Authority; East Los Angeles Area Planning Commission member; not an elected office.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'El Sereno native living in Glassell Park; worked in the Assembly district office and joined community patrols and rapid-response work during ICE raids, per her campaign.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Liaison between the mayor and county and regional governments; endorsed by outgoing Sen. Durazo and Los Angeles City Councilmember Eunisses Hernandez.' },
          ],
        },
        bio: [
          'El Sereno native who worked for then-Assemblymember Jimmy Gomez, the Mountains Recreation and Conservation Authority and Mayor Karen Bass (as director of County and Regional Affairs); she has served on the East Los Angeles Area Planning Commission and the CicLAvia board.',
          'She calls homelessness the district’s most pressing issue and wants zoning reform for affordable multi-family housing near transit and jobs, tenant anti-displacement protections and skilled union labor on new development.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓✓ Zoning reform for affordable multi-family housing near transit and jobs, tenant protections against displacement and union labor on new development', comparison: 'Hernandez leads with eviction protection and home ownership.' },
          { topic: 'Climate', position: '✓✓ Would hold industrial and warehouse operators accountable, end oil and gas subsidies and speed toxic cleanup funding', comparison: 'Hernandez emphasizes zero-emission freight and park access.' },
          { topic: 'Education', position: '? No public position found', comparison: 'Hernandez is an elected community college trustee.' },
          { topic: 'Public safety', position: '~ Supports sanctuary laws and limits on police collaboration with ICE; no policing platform found', comparison: 'Hernandez has not published a policing platform either.' },
          { topic: 'Taxes & cost of living', position: '~ Supports full-scope Medi-Cal regardless of immigration status; no tax plan found', comparison: 'Hernandez pledges to protect Medi-Cal access.' },
          { topic: 'Caucus / ideology', position: '✓✓ The more progressive finalist: endorsed by Councilmember Eunisses Hernandez, Planned Parenthood’s advocacy arm and Food & Water Action; DSA Los Angeles lists her as “recommended”', comparison: 'Hernandez is the labor-federation-backed, more establishment finalist.' },
        ],
        money:
          'About $208,000 from 530 contributions through Sept. 14, 2026 (The Eastsider LA). See Cal-Access for filings.',
        endorsements:
          'Outgoing Sen. María Elena Durazo, Los Angeles City Councilmember Eunisses Hernandez, Planned Parenthood Advocacy Project Los Angeles County Action Fund, Food & Water Action; DSA Los Angeles lists her as “recommended” rather than endorsed; primary rivals Wendy Carrillo and Maebe Pudlo reportedly endorsed her. No Los Angeles County Democratic Party endorsement found.',
        notes: [
          'Her ballot designation is “Environmental Protection Director.”',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Rascón', '◐', 'Progressive Left voters favor the further-left finalist: Rascón is backed by a progressive councilmember and Food & Water Action, would end oil and gas subsidies and requires union labor on new development.'],
      ['EL', 'Hernandez', '●', 'Establishment Liberals favor the finalist with the county labor federation, a sitting elected office and a housing-affordability agenda, which is the more institutional choice.'],
      ['DM', 'Hernandez', '◐', 'Democratic Mainstays follow the labor federation and Supervisor Solis, who back Hernandez, and see her as the party-aligned frontrunner.'],
      ['OL', 'Rascón', '◐', 'Outsider Left voters, wary of institutional Democrats, lean to Rascón, who is outspent about five to one and backed by the outgoing senator and Eastside progressives.'],
      ['SS', 'Hernandez', '○', 'Stressed Sideliners facing rent and housing costs respond to Hernandez’s affordability focus and her pledge on tenant protections, though neither candidate has a detailed pocketbook plan.'],
      ['AR', 'Hernandez', '○', 'Ambivalent Right voters, with no clear policing difference found between the finalists, weakly lean to the more establishment and less activist of the two.'],
      ['PR', 'Hernandez', '○', 'Populist Right voters weakly prefer the less ideologically progressive finalist, since neither has a public-safety record to compare.'],
      ['CC', 'Hernandez', '○', 'Committed Conservatives find both finalists well left of them and weakly choose the one who is less aligned with the DSA and anti-oil positions.'],
      ['FF', 'Hernandez', '○', 'Faith and Flag Conservatives weakly prefer the finalist with a teaching and mainstream-institution background over the DSA-recommended one.'],
    ]),
    counterArguments: [
      'EL (Hernandez ●): But consider that Rascón has the outgoing senator’s endorsement and a longer record of staff work with the mayor, county and an Assembly office, while Hernandez’s experience is on a community college board.',
      'PL (Rascón ◐): But consider that Hernandez’s labor-federation backing and tenant-protection platform may deliver more concrete legislative support in Sacramento than a candidate raising about a fifth as much money.',
    ],
  },
  {
    id: 'assembly-ad51',
    categoryId: 'state-leg',
    title: 'State Assembly, District 51',
    tldrLabel: 'AD-51',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: [
      { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
      { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee work and budget votes shape what reaches the floor.' },
      { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: 'AD-51 covers Westwood, Hollywood, Santa Monica and parts of West and Central Los Angeles.' },
      { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
    ],
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members write and vote on state laws and the budget, serve two-year terms, and sit on committees that shape housing, transit, health, education and public-safety policy.',
      'In a safely Democratic seat that includes Hollywood and Westwood, the question is whether voters keep an incumbent who opposed a major transit-housing bill and takes corporate PAC money, or send a democratic-socialist-aligned challenger who refuses it.',
    ],
    introParagraphs: [
      'Incumbent Rick Chavez Zbur won the June 2 primary with 54.1%; Colin D. Hernandez took 22.1% and two Republicans and a no-party candidate were eliminated (Secretary of State Statement of Vote via The Ballot Brief).',
      'Zbur was first elected in 2022 and won re-election in 2024 with about 75%. Hernandez’s campaign site was not listed as of Sept. 7, 2026, and no public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 51',
        url: 'https://theballotbrief.com/state/california/los-angeles-county/california-assembly-district-51',
        summary: 'Primary results, ballot designations and each finalist’s stated priorities.',
      },
      {
        label: 'Daily Bruin — Zbur, Hernandez advance to general election',
        url: 'https://dailybruin.com/2026/06/06/rick-chavez-zbur-colin-hernandez-advance-to-state-assembly-general-election',
        summary: 'Primary coverage with each finalist’s platform and donor stance.',
      },
    ],
    candidates: [
      {
        id: 'rick-zbur',
        photoSlug: 'rick-zbur',
        name: 'Rick Chavez Zbur',
        party: 'D',
        role: 'California Assemblymember',
        campaignUrl: 'https://zbur.asmdc.org',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Assemblymember since December 2022, after a career as an environmental attorney and seven years leading Equality California.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since 2022; bills listed on his legislative page include AB 39 (local electrification planning) and AB 648 (community college housing and local zoning exemption).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'Committee assignments not publicly documented from the sources reviewed; votes on the state budget as a member since 2022.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Represents AD-51 since 2022 and won re-election in 2024 with about 75%; serves on the Planned Parenthood Los Angeles board.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Led Equality California 2014–2021 and chaired the California League of Conservation Voters board 2011–2017; led Assembly opposition to SB 79 in 2025, which passed anyway.' },
          ],
        },
        bio: [
          'Yale and Harvard Law graduate who practiced environmental law at Latham & Watkins for about three decades, led Equality California from 2014 to 2021, and has represented Assembly District 51 since December 2022. He is a member of the Legislative Progressive Caucus.',
          'His stated priorities are addressing homelessness through housing, rent subsidies and wraparound services, pairing public-safety reforms with mental-health and addiction services, and gun-safety legislation.',
        ],
        recordVsChange:
          'Zbur has a record of housing, climate and health-privacy bills and broad support from nurses and young Democrats; his opposition to SB 79’s transit-housing density, and the corporate PAC donations Hernandez attacks, are the case for change.',
        scorecard: [
          { topic: 'Housing & transit', position: '~ Pairs tenant and homelessness services with a record of opposing SB 79 (dense housing near transit) in 2025 and defending single-family zoning', comparison: 'Hernandez calls for expanded housing options and “Housing for All” without detail.' },
          { topic: 'Climate', position: '✓ Authored a local electrification planning bill (AB 39); former chair of the California League of Conservation Voters board', comparison: 'Hernandez has no public climate position found.' },
          { topic: 'Education', position: '✓ Authored a bill on community college housing and zoning (AB 648)', comparison: 'Hernandez backs universal childcare.' },
          { topic: 'Public safety', position: '✓ Gun-safety bills limiting firearm access for people with a history of violence; public-safety reform paired with mental-health and addiction services', comparison: 'Hernandez has no public safety position found.' },
          { topic: 'Taxes & cost of living', position: '~ Lists affordability as his 2026 focus; accepts donations from corporate and trade PACs', comparison: 'Hernandez refuses corporate and super PAC money and backs Medicare for All.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive Caucus member and establishment Democrat; endorsed by the California Nurses Association and California Young Democrats', comparison: 'Hernandez runs to his left, endorsed by UCLA Young Democratic Socialists of America.' },
        ],
        money:
          'No 2026 filing totals found; see Cal-Access. Ballotpedia, via the Daily Bruin, lists past donations from CVS Health, Comcast, the California Dental Association PAC, small donors and the LGBT Caucus Leadership Fund.',
        endorsements:
          'California Nurses Association and California Young Democrats; he endorsed Brian Goldsmith in the SD-24 race. No Los Angeles County Democratic Party endorsement found.',
      },
      {
        id: 'colin-hernandez',
        name: 'Colin D. Hernandez',
        party: 'D',
        role: 'Digital Communication Strategist',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'Digital communications staff at advocacy groups (the Vera Institute of Justice and Americans for Tax Fairness); no elected office or legislative role found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative or government policy role found; digital community manager at the Vera Institute of Justice (2019–2021) and digital communications specialist at Americans for Tax Fairness (2017–2019).' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No public record of committee or budget work found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No public record of district service found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'Endorsed by UCLA Young Democratic Socialists of America; no record of passing legislation or building coalitions.' },
          ],
        },
        bio: [
          'Digital communications professional who says he is working class and younger than most Assembly members and takes no donations from corporations or super PACs. He previously worked at the Vera Institute of Justice and Americans for Tax Fairness.',
          'He campaigns on Medicare for All, expanded housing options and universal childcare.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Expand housing access and “Housing for All”; no bill-level detail found', comparison: 'Zbur opposed SB 79, a dense transit-housing bill, in 2025.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Zbur authored a local electrification planning bill.' },
          { topic: 'Education', position: '✓ Universal childcare; no K-12 or college platform found', comparison: 'Zbur authored a community college housing bill.' },
          { topic: 'Public safety', position: '? No public position found', comparison: 'Zbur emphasizes gun-safety bills and mental-health services.' },
          { topic: 'Taxes & cost of living', position: '✓ Medicare for All; says affordability is the core issue and refuses corporate PAC donations', comparison: 'Zbur has accepted PAC and corporate donations.' },
          { topic: 'Caucus / ideology', position: '✓✓ Democratic-socialist-aligned challenger running on small-dollar donors', comparison: 'Zbur is an incumbent and Progressive Caucus member, endorsed by established Democratic groups.' },
        ],
        money:
          'No filing totals found; he says he accepts no corporate or super PAC money. See Cal-Access. No campaign website was found as of Sept. 7, 2026 (The Ballot Brief).',
        endorsements:
          'UCLA Young Democratic Socialists of America (Daily Bruin, June 2026). No other endorsements found.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Zbur', '◐', 'Progressive Left voters weigh Hernandez’s Medicare for All platform against Zbur’s record in office, Progressive Caucus membership and nurses’ union endorsement, and lean to the proven progressive despite his SB 79 opposition.'],
      ['EL', 'Zbur', '●', 'Establishment Liberals favor the incumbent with decades of civil-rights and environmental leadership, institutional Democratic backing and a legislative record over a first-time challenger.'],
      ['DM', 'Zbur', '●', 'Democratic Mainstays favor the party-aligned incumbent endorsed by nurses and young Democrats, who has delivered bills on housing, climate and health privacy.'],
      ['OL', 'Hernandez', '◐', 'Outsider Left voters, distrustful of corporate-funded incumbents, are drawn to the challenger who refuses corporate and super PAC money and runs to Zbur’s left.', 'Outsider Left voters who want a seasoned hand could accept Zbur, who has authored electrification and college-housing bills and led Equality California, even though it means backing an incumbent who takes corporate PAC money over a challenger who refuses it.'],
      ['SS', 'Zbur', '○', 'Stressed Sideliners have little information on either; a known incumbent with concrete bills edges a challenger with a broad but undeveloped platform.'],
      ['AR', 'Zbur', '○', 'Ambivalent Right voters, wary of Medicare for All and universal childcare spending, weakly prefer the incumbent as the less radical option.'],
      ['PR', 'Zbur', '○', 'Populist Right voters distrust both, but weakly prefer the incumbent over a democratic-socialist-aligned challenger pushing large new programs.'],
      ['CC', 'Zbur', '◐', 'Committed Conservatives, with no Republican on the ballot, choose the less radical Democrat who is not calling for Medicare for All.'],
      ['FF', 'Zbur', '○', 'Faith and Flag Conservatives weakly prefer the incumbent over a challenger endorsed by a democratic-socialist youth group.'],
    ]),
    counterArguments: [
      'EL (Zbur ●): But consider that Zbur led Assembly opposition to SB 79, which passed despite him, and his acceptance of corporate PAC money is the core of Hernandez’s challenge on affordability.',
      'OL (Hernandez ◐): But consider that Hernandez has no campaign website found, no office held and no bill-level plans, so refusing corporate money is the main difference from the incumbent.',
    ],
  },
];
