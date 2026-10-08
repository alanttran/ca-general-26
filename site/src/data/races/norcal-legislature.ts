import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

const LEG_ELIGIBILITY =
  'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

const CAC = 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/ (as of Oct 8, 2026).';

export const RACES_NORCAL_LEGISLATURE: Race[] = [
  {
    id: 'senate-sd6',
    categoryId: 'state-leg',
    title: 'State Senate, District 6',
    tldrLabel: 'SD-6',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: [
      { id: 'law-policy', label: 'Lawmaking, legal drafting or policy experience', detail: 'Senators write, amend and vote on state statutes and confirm appointees.' },
      { id: 'budget-oversight', label: 'Budget and committee work', detail: 'The state budget and policy committees are central to a senator’s workload.' },
      { id: 'public-mgmt', label: 'Managing a public agency or elected body', detail: 'Experience running or governing a public organization transfers to oversight of state agencies.' },
      { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: 'SD-6 covers parts of Sacramento and Placer counties.' },
      { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
    ],
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the state budget, housing and land-use law, climate and energy rules, public safety and criminal-justice statutes, and confirmations of governor appointees; they serve four-year terms.',
      'SD-6 covers parts of Sacramento and Placer counties, including Rocklin. Republican Roger Niello was chosen unanimously on Aug 11, 2026 to become Senate Republican Leader after the November election, so this seat also decides who holds that caucus post if he wins.',
    ],
    introParagraphs: [
      'In the June 2 primary, Republican incumbent Roger Niello led with about 56%, Democrat Sean Frame took about 28.5%, and fellow Democrat Sara Velasco about 15% (Secretary of State returns). The two leaders advanced under the top-two system.',
      'Niello won the seat in 2022 with 55.7%, per Wikipedia, and a third-party election summary describes party registration as nearly evenly split. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Senate District 6',
        url: 'https://theballotbrief.com/state/california/placer-county/california-senate-district-6',
        summary: 'Neutral roster page with primary results and each candidate’s stated priorities.',
      },
      {
        label: 'Secretary of State — State Senate District 6 results',
        url: 'https://dp.electionresults.sos.ca.gov/returns/state-senate/district/6',
        summary: 'Official districtwide returns.',
      },
      {
        label: 'Senate Republican Caucus — Niello selected as next leader',
        url: 'https://src.senate.ca.gov/content/senate-republicans-select-new-leader-post-election-service',
        summary: 'Caucus announcement (Aug 11, 2026) that Niello will take over as leader after the election.',
      },
    ],
    candidates: [
      {
        id: 'sean-frame',
        name: 'Sean Frame',
        party: 'D',
        role: 'Small Business Owner',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'Nine years on a school board and an education-sector job, but no legislative or large-agency executive role found.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'unknown', evidence: 'No public record of drafting legislation or policy work found.' },
            { criterionId: 'budget-oversight', assessment: 'partial', evidence: 'Served nine years as a school trustee (Placerville Union School District, per a third-party profile), where boards adopt district budgets.' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Nine years on an elected school board; a governing role, not executive management.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'His board service was reported in El Dorado County, outside SD-6; no district-specific service record found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation; Ballotpedia notes earlier unsuccessful bids for Congress and the Assembly.' },
          ],
        },
        bio: [
          'Education specialist who served nine years on a school board after a shooting at his son’s school, according to his campaign site as summarized by The Ballot Brief.',
          'His stated priorities are more affordable housing and tenant protections, a California-based single-payer health plan, and net-zero carbon emissions with union clean-energy jobs.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓✓ Build more affordable housing and expand tenant protections', comparison: 'Niello’s listed priorities do not include housing.' },
          { topic: 'Climate', position: '✓✓ Net-zero carbon emissions with union clean-energy jobs', comparison: 'Niello lists no climate priority.' },
          { topic: 'Education', position: '✓ Former school board member; supports fully funded public education per campaign materials', comparison: 'Niello’s listed priorities include restoring SAT/ACT requirements for university admission.' },
          { topic: 'Public safety', position: '? No public position found', comparison: 'Niello’s office highlights a Senate Public Safety Committee push against early release of sexual offenders.' },
          { topic: 'Taxes', position: '? No public position found', comparison: 'Niello was Assembly Budget Committee vice chair in 2006 and is a former CPA.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive Democrat: single-payer health care is a headline plank', comparison: 'Niello is a Republican and the incoming Senate Republican Leader.' },
        ],
        money: CAC,
        endorsements: 'No endorsement list found in major coverage; see his campaign site.',
        notes: ['Finished second to Niello in the June primary, ahead of fellow Democrat Sara Velasco.'],
      },
      {
        id: 'roger-niello',
        name: 'Roger Niello',
        party: 'R',
        role: 'California State Senator',
        campaignUrl: 'https://sr06.senate.ca.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Nearly four years in this Senate seat, six in the Assembly (including budget vice chair) and nearly six on the Sacramento County Board of Supervisors, plus a CPA background and a career running auto dealerships.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'Assembly 5th District Dec 2004–Dec 2010; State Senate since Dec 2022.' },
            { criterionId: 'budget-oversight', assessment: 'met', evidence: 'Assembly Budget Committee vice chair from late 2006 and Republican caucus budget negotiator; hosts budget subcommittee updates on his Senate site in 2026; former CPA.' },
            { criterionId: 'public-mgmt', assessment: 'met', evidence: 'Sacramento County Board of Supervisors, Feb 1999–Dec 2004; ran Niello Auto Group dealerships for about 25 years; appointed to the Little Hoover Commission (2025).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Sacramento-area officeholder since 1999; sworn in to the State Allocation Board (school facilities funding) Feb 19, 2026, per his office.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Senate Republicans unanimously chose him as next Senate Republican Leader (Aug 11, 2026); Republicans are a minority in the Senate.' },
          ],
        },
        bio: [
          'Republican from Fair Oaks who was a CPA, ran family-owned car dealerships and served as president of the Sacramento Metropolitan Chamber of Commerce before holding office; he served on the Sacramento County Board of Supervisors (1999–2004) and the Assembly (2004–2010) and has been state senator since December 2022.',
          'His listed priorities are hearing-health screening for children and restoring SAT/ACT admission requirements for California universities, per The Ballot Brief; his Senate site highlights work on homelessness-program spending in budget hearings.',
        ],
        recordVsChange:
          'Niello brings budget experience and, after the election, the Senate Republican Leader post, which gives the district a seat at leadership negotiations. The case for change is that Democrats hold a large majority in the Senate, so a Democrat could align the district with the majority caucus.',
        scorecard: [
          { topic: 'Housing & transit', position: '~ Scrutinizes homelessness-program spending in budget hearings, per his office; no housing-production platform found', comparison: 'Frame backs tenant protections and affordable-housing expansion.' },
          { topic: 'Climate', position: '? No public position found in current campaign materials', comparison: 'Frame campaigns on net-zero emissions.' },
          { topic: 'Education', position: '✓ Restore SAT/ACT admission requirements; State Allocation Board member since Feb 2026', comparison: 'Frame emphasizes fully funded public schools and his school-board record.' },
          { topic: 'Public safety', position: '✓ His office highlights a Senate Public Safety Committee push against early release of sexual offenders', comparison: 'Frame has no stated public-safety plan found.' },
          { topic: 'Taxes', position: '✓ Republican fiscal conservative with a long budget record', comparison: 'Frame has no public tax plan found.' },
          { topic: 'Caucus / ideology', position: '✓ Republican; incoming Senate Republican Leader', comparison: 'Frame is a progressive Democrat.' },
        ],
        money: CAC,
        endorsements: 'Senate Republican Caucus (unanimous choice as next leader, Aug 11, 2026). No further endorsement list found.',
        notes: [
          'No campaign website or questionnaire response was found by The Ballot Brief as of Sept 7, 2026.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Frame', '●', 'Progressive Left voters want a single-payer, net-zero, tenant-protection Democrat in a seat held by the incoming Republican Senate leader.'],
      ['EL', 'Frame', '◐', 'Establishment Liberals prefer the Democrat despite his thin legislative résumé because the alternative would lead the Senate Republican caucus.'],
      ['DM', 'Frame', '●', 'Democratic Mainstays back the party nominee in a seat Democrats want to flip.'],
      ['OL', 'Frame', '◐', 'Outsider Left voters like his school-board background and outsider status but note he is a long-shot challenger.'],
      ['SS', 'Frame', '○', 'Stressed Sideliners worried about housing and health costs hear his affordability platform, though Niello’s budget experience also appeals.'],
      ['AR', 'Niello', '◐', 'Ambivalent Right voters value a long-serving, budget-focused Republican over a challenger with no legislative record.'],
      ['PR', 'Niello', '●', 'Populist Right voters back the Republican incumbent against a single-payer, tenant-protection Democrat.'],
      ['CC', 'Niello', '●', 'Committed Conservatives favor a fiscal conservative and former CPA who will lead the Senate Republican caucus.'],
      ['FF', 'Niello', '●', 'Faith and Flag Conservatives support the Republican on public safety and school admission standards against a progressive challenger.'],
    ]),
    counterArguments: [
      'EL (Frame ◐): But consider that Niello has far more legislative experience, including budget work, and as incoming Senate Republican Leader would hold real bargaining power on the budget.',
      'AR (Niello ◐): But consider that Frame’s focus on housing costs and health care may speak more directly to the affordability worries of moderates than Niello’s listed priorities do.',
    ],
  },
  {
    id: 'senate-sd10',
    categoryId: 'state-leg',
    title: 'State Senate, District 10',
    tldrLabel: 'SD-10',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: [
      { id: 'law-policy', label: 'Lawmaking, legal drafting or policy experience', detail: 'Senators write, amend and vote on state statutes and confirm appointees.' },
      { id: 'budget-oversight', label: 'Budget and committee work', detail: 'The state budget and policy committees are central to a senator’s workload.' },
      { id: 'public-mgmt', label: 'Managing a public agency or elected body', detail: 'Experience running or governing a public organization transfers to oversight of state agencies.' },
      { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: 'SD-10 spans southern Alameda County and parts of Santa Clara County.' },
      { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
    ],
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the state budget, housing and land-use law, climate and energy rules, public safety and criminal-justice statutes, and confirmations of governor appointees; they serve four-year terms.',
      'The seat is open because Sen. Aisha Wahab is running for Congress. The district covers parts of Alameda County (including Fremont, Hayward, Newark and Union City) and Santa Clara County, so the winner will shape state policy on housing, transit and tech regulation for the Tri-City area and South Bay.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Scott Sakakihara led a crowded field with 29.1% and Republican Linda Price took 23.2% as the lone Republican, ahead of Democrats Anne Kepner (15.3%), David Cohen (14.9%) and Carmen Montano (9.5%) (Secretary of State returns via The Ballot Brief).',
      'Because several Democrats split the vote, the Republican finished second. No public polling of the November matchup is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Senate District 10',
        url: 'https://theballotbrief.com/state/california/alameda-county/california-senate-district-10',
        summary: 'Neutral roster page with primary results and each finalist’s stated priorities.',
      },
      {
        label: 'Rafu Shimpo — Sakakihara running for state Senate',
        url: 'https://rafu.com/2026/05/scott-sakakihara-running-for-state-senate-in-bay-area/',
        summary: 'May 2026 profile of Sakakihara’s background and endorsements (pre-primary).',
      },
    ],
    candidates: [
      {
        id: 'scott-sakakihara',
        name: 'Scott Sakakihara',
        party: 'D',
        role: 'Councilmember/Navy Officer',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'Elected Union City councilmember and former planning commissioner who has also helped manage a large corporate finance budget; no legislative office held.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'partial', evidence: 'Harvard Law graduate and attorney; congressional internships/fellowships (Stark, Hirono) and Obama White House work, per a May 2026 Rafu Shimpo profile; sits on a League of California Cities policy committee.' },
            { criterionId: 'budget-oversight', assessment: 'partial', evidence: 'City councilmember votes on the city budget; former chief of staff of a tech company finance department helping manage a $1.8 billion budget, per Rafu Shimpo.' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Union City Council and former vice mayor; Planning Commission; Navy Reserve intelligence officer.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Grew up in Union City, which is in SD-10, and serves on its council.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation found; sits on the Alameda County Democratic Central Committee.' },
          ],
        },
        bio: [
          'Union City councilmember and former vice mayor, a U.S. Navy Reserve intelligence officer and an attorney who grew up in Union City and attended Harvard Law School.',
          'His website lists housing, public safety, worker and small-business protection, local climate action and regulation of tech (especially for children and families) as priorities; The Ballot Brief lists housing and homelessness, and food security and affordability as top priorities.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓✓ Expand housing for all residents; pushed for affordable housing as a planning commissioner', comparison: 'Price lists affordable housing but pairs it with government accountability; no specific plan found.' },
          { topic: 'Climate', position: '✓ Local climate action is a listed priority', comparison: 'Price lists no climate priority.' },
          { topic: 'Education', position: '? No specific education plan found', comparison: 'Price lists quality schools as a priority.' },
          { topic: 'Public safety', position: '✓ Public safety is a stated priority', comparison: 'Price lists public safety first.' },
          { topic: 'Taxes', position: '? No public tax position found', comparison: 'Price lists economic opportunity and government accountability.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat; endorsed by Democratic elected officials and the AAPI Legislative Caucus', comparison: 'Price is a Republican.' },
        ],
        money: CAC,
        endorsements:
          'Per Rafu Shimpo (May 2026): Reps. Mark Takano and Jill Tokuda; former Rep. Mike Honda; Assemblymembers Jessica Caloza, Mike Fong and Stephanie Nguyen; California AAPI Legislative Caucus; SF City Attorney David Chiu; Alameda County Assessor Phong La; Supervisor Lena Tam. Also recommended by the Tri-Cities Democratic Forum.',
        notes: ['Four grandparents were incarcerated in World War II camps, per his campaign, as reported by Rafu Shimpo.'],
      },
      {
        id: 'linda-price',
        name: 'Linda Price',
        party: 'R',
        role: 'Businesswoman',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'Organizational-development consultant who has also taught management at Bay Area colleges; no elected office found.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'unknown', evidence: 'No public record of legislative or legal-policy work found.' },
            { criterionId: 'budget-oversight', assessment: 'unknown', evidence: 'No public budget-oversight role found.' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Founded a consultancy and worked in organizational development supporting the Department of Defense, per her campaign site as summarized by The Ballot Brief; no public-agency role found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Described as a Fremont businesswoman; taught leadership and management at Bay Area colleges for over 30 years.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation found.' },
          ],
        },
        bio: [
          'Businesswoman who has worked in organizational development supporting the Department of Defense, founded a consultancy serving technology and other industries, and taught leadership and management at Bay Area colleges for more than 30 years, per The Ballot Brief.',
          'Her listed priorities are public safety, quality schools and economic opportunity, and affordable housing and government accountability.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '~ Affordable housing is a listed priority; no specific plan found', comparison: 'Sakakihara has a planning-commission record on housing.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Sakakihara lists local climate action.' },
          { topic: 'Education', position: '✓ Quality schools is a listed priority', comparison: 'Sakakihara lists no education plan.' },
          { topic: 'Public safety', position: '✓✓ Public safety listed first among priorities', comparison: 'Sakakihara also lists public safety.' },
          { topic: 'Taxes', position: '~ Economic opportunity and government accountability; no tax plan found', comparison: 'Sakakihara focuses on protecting workers and small businesses.' },
          { topic: 'Caucus / ideology', position: '✓ Republican', comparison: 'Sakakihara is a Democrat endorsed by party officials.' },
        ],
        money: CAC,
        endorsements: 'No endorsement list found in major coverage.',
        notes: ['A third-party election summary says she did not respond to interview requests; no campaign site link was found in the sources reviewed.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Sakakihara', '●', 'Progressive Left voters favor the Democrat who prioritizes housing, climate action and tech regulation in a Democratic-leaning seat.'],
      ['EL', 'Sakakihara', '●', 'Establishment Liberals value a lawyer-councilmember with institutional Democratic and Asian American caucus backing and a budget-management background.'],
      ['DM', 'Sakakihara', '●', 'Democratic Mainstays back the party’s top finisher against the lone Republican in a Democratic-leaning district.'],
      ['OL', 'Sakakihara', '◐', 'Outsider Left voters prefer the Democrat though his council-to-Senate path is a conventional establishment route.'],
      ['SS', 'Sakakihara', '○', 'Stressed Sideliners facing high Bay Area costs hear his housing and food-affordability focus, though Price also talks about affordability.'],
      ['AR', 'Price', '○', 'Ambivalent Right voters in a Democratic district may lean to a business-oriented Republican stressing public safety, schools and accountability, but she has no governing record to weigh.'],
      ['PR', 'Price', '◐', 'Populist Right voters back the Republican on public safety and government accountability against an establishment Democrat.'],
      ['CC', 'Price', '●', 'Committed Conservatives support the Republican candidate on public safety, schools and economic opportunity.'],
      ['FF', 'Price', '●', 'Faith and Flag Conservatives back the Republican, whose career supported the Department of Defense, over a Democrat.'],
    ]),
    counterArguments: [
      'AR (Price ○): But consider that Sakakihara has an actual record of governing (city council, planning commission) while Price has no public office or detailed platform to judge.',
      'PL (Sakakihara ●): But consider that he has not served in the Legislature and has no tested record on tenant protections or tech regulation beyond local office.',
    ],
  },
  {
    id: 'assembly-ad5',
    categoryId: 'state-leg',
    title: 'State Assembly, District 5',
    tldrLabel: 'AD-5',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: [
      { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
      { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee roles and budget votes shape what reaches the floor.' },
      { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: 'AD-5 covers Placer County communities including Rocklin and Roseville.' },
      { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
    ],
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members write and vote on state laws and the budget, serve two-year terms, and sit on committees that shape housing, utilities, school funding and public-safety policy.',
      'AD-5 is a Republican-leaning seat in the Sacramento suburbs held by Joe Patterson; the question is whether voters keep a Republican in the Democratic-controlled chamber or send a Democrat who would vote with the majority.',
    ],
    introParagraphs: [
      'Republican incumbent Joe Patterson won the June 2 primary with 60.1% to Democrat Neva Parker’s 39.9% (Secretary of State Statement of Vote via The Ballot Brief). The two also met in 2024, when Patterson won 62.0% to 38.0%.',
      'No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 5',
        url: 'https://theballotbrief.com/state/california/placer-county/california-assembly-district-5',
        summary: 'Neutral roster page with primary results and each candidate’s stated priorities.',
      },
      {
        label: 'CalMatters Digital Democracy — Joe Patterson',
        url: 'https://calmatters.digitaldemocracy.org/legislators/joe-patterson-133512',
        summary: 'Committee assignments, bills authored and interest-group alignment for the incumbent.',
      },
    ],
    candidates: [
      {
        id: 'neva-parker',
        name: 'Neva Parker',
        party: 'D',
        role: 'Community Advocate',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'Spent 26 years working at the State Capitol, including as Senate Journal Clerk, and has run small businesses in Roseville; has not held elected office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Senate Journal Clerk and 26 years at the State Capitol, per The Ballot Brief; a staff role, not a voting role.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No committee or budget role found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Runs small businesses in Roseville; a third-party profile says she has volunteered with the Assistance League of Greater Placer.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation; lost to Patterson in 2024.' },
          ],
        },
        bio: [
          'Born and raised in Hercules, she spent 26 years at the State Capitol, including as Senate Journal Clerk, and has run small businesses in Roseville, per The Ballot Brief. Ballotpedia lists degrees from UC Davis (1999) and Saint Mary’s College of California (2013).',
          'Her priorities are small business and local jobs, local control, affordability and reform of addiction recovery.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '~ Local control and affordability are priorities; no specific housing plan found', comparison: 'Patterson is subchair of the Assembly Housing Committee.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Patterson is subchair of the Utilities and Energy Committee and campaigns on cutting utility bills.' },
          { topic: 'Education', position: '? No public position found', comparison: 'Patterson has a 58% California Teachers Association alignment score on CalMatters.' },
          { topic: 'Public safety', position: '~ Addiction recovery reform is a priority', comparison: 'Patterson backs law enforcement and anti-fentanyl efforts.' },
          { topic: 'Taxes', position: '~ Affordability and small-business support; no tax plan found', comparison: 'Patterson campaigns on suspending the gas tax.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat', comparison: 'Patterson is a Republican with a 100% California Chamber of Commerce score on CalMatters.' },
        ],
        money: CAC,
        endorsements: 'No complete endorsement list found; see her campaign site.',
        notes: ['Second run against Patterson; she received 106,753 votes (38.0%) in 2024, per a summary of the Secretary of State returns.'],
      },
      {
        id: 'joe-patterson',
        name: 'Joe Patterson',
        party: 'R',
        role: 'Member of State Assembly, 5th District',
        campaignUrl: 'https://assembly.ca.gov/assemblymembers/05',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Assembly member since December 2022 after six years on the Rocklin City Council, including a year as mayor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly member since Dec 5, 2022; authored 43 bills this session, 12 passed (CalMatters Digital Democracy); former Unruh Assembly Fellow.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Subchair of Housing and Community Development and of Utilities and Energy; member of Budget and of Privacy and Consumer Protection (CalMatters).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Rocklin City Council 2016–2022, mayor in 2019; Rocklin resident.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: '12 of 43 bills passed this session; Republicans are a minority in the Assembly.' },
          ],
        },
        bio: [
          'Republican from Rocklin who served on the Rocklin City Council from 2016 until 2022 (mayor in 2019) and has represented AD-5 since December 2022. Before holding office he was an Unruh Assembly Fellow and later executive director of the California Gaming Association.',
          'His listed priorities are suspending the gas tax, reducing utility bills, government transparency (including opposing non-disclosure agreements in backroom deals), law enforcement and combating fentanyl.',
        ],
        recordVsChange:
          'Patterson has authored 43 bills this session with 12 passing and holds subchair roles on the Housing and Utilities committees. The case for change is that a Democrat would align the seat with the Assembly’s Democratic majority and priorities.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Subchair of the Assembly Housing and Community Development Committee', comparison: 'Parker lists local control and affordability without a detailed plan.' },
          { topic: 'Climate', position: '~ Subchair of Utilities and Energy; campaigns on lower utility bills', comparison: 'Parker has no stated climate platform found.' },
          { topic: 'Education', position: '~ 58% alignment with the California Teachers Association, per CalMatters', comparison: 'Parker has no stated education platform found.' },
          { topic: 'Public safety', position: '✓✓ Supports law enforcement and efforts against fentanyl', comparison: 'Parker emphasizes addiction recovery reform.' },
          { topic: 'Taxes', position: '✓✓ Suspend the gas tax; 100% California Chamber of Commerce alignment, per CalMatters', comparison: 'Parker emphasizes affordability without a specific tax plan.' },
          { topic: 'Caucus / ideology', position: '✓ Republican', comparison: 'Parker is a Democrat.' },
        ],
        money: CAC,
        endorsements: 'No complete endorsement list found; see his campaign materials.',
        notes: [
          'Former executive director of the California Gaming Association, per Wikipedia; CalMatters Digital Democracy lists small post-election gifts such as discounted gala tickets from The American Council and football tickets from Sacramento State.',
          'A CBS Sacramento report covers his proposed legislation on placement of sexually violent predators, a policy matter in Placer County.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Parker', '◐', 'Progressive Left voters choose the Democrat as the only alternative to a Republican incumbent, even though her platform is not detailed.'],
      ['EL', 'Parker', '◐', 'Establishment Liberals prefer the Democrat who would vote with the Assembly majority over a Republican with a 100% Chamber of Commerce score.'],
      ['DM', 'Parker', '●', 'Democratic Mainstays back the Democratic nominee against a Republican incumbent.'],
      ['OL', 'Parker', '○', 'Outsider Left voters favor the small-business owner and former Capitol staffer over a career politician, though the race leans Republican.'],
      ['SS', 'Patterson', '○', 'Stressed Sideliners squeezed by gas and utility prices hear his proposals to suspend the gas tax and cut utility bills.'],
      ['AR', 'Patterson', '◐', 'Ambivalent Right voters value an incumbent with subchair roles on Housing and Utilities and a real legislative record.'],
      ['PR', 'Patterson', '●', 'Populist Right voters back the incumbent who runs against taxes and “backroom deals.”'],
      ['CC', 'Patterson', '●', 'Committed Conservatives favor the Republican with a strong pro-business and pro-law-enforcement record.'],
      ['FF', 'Patterson', '●', 'Faith and Flag Conservatives support the Republican on public safety and fentanyl.'],
    ]),
    counterArguments: [
      'SS (Patterson ○): But consider that Parker’s focus on affordability, small business and addiction recovery speaks to the same cost pressures, and a Democrat may have more sway in a Democratic-run Assembly.',
      'EL (Parker ◐): But consider that Patterson holds subchair positions on Housing and Utilities and has 12 bills passed this session, while Parker has never held elected office.',
    ],
  },
  {
    id: 'assembly-ad20',
    categoryId: 'state-leg',
    title: 'State Assembly, District 20',
    tldrLabel: 'AD-20',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: [
      { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
      { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
      { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: 'AD-20 covers San Leandro, Hayward, Union City and parts of Dublin and Pleasanton.' },
      { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
    ],
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members write and vote on state laws and the budget, serve two-year terms, and sit on committees that shape labor, housing, health care and public-safety policy.',
      'In a safely Democratic East Bay seat, the question is whether voters keep a labor-aligned committee chair or send a Republican challenger to a chamber where Democrats hold a large majority.',
    ],
    introParagraphs: [
      'Democratic incumbent Liz Ortega won the June 2 primary with 75.1% to Republican Patricia Muga’s 24.9% (Secretary of State Statement of Vote via The Ballot Brief).',
      'Ortega is a heavy favorite. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 20',
        url: 'https://theballotbrief.com/state/california/alameda-county/california-assembly-district-20',
        summary: 'Neutral roster page with primary results, designations and stated priorities.',
      },
      {
        label: 'Pleasanton Weekly — Ortega v. Muga',
        url: 'https://www.pleasantonweekly.com/regional-politics/2026/05/20/ortega-v-muga-in-race-for-state-assembly-district-20/',
        summary: 'Local profile of both candidates before the primary (May 2026).',
      },
    ],
    candidates: [
      {
        id: 'liz-ortega',
        name: 'Liz Ortega',
        party: 'D',
        role: 'Assemblymember',
        campaignUrl: 'https://a20.asmdc.org',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Assembly member since December 2022 and chair of the Labor and Employment Committee, after a labor career that included leading the Alameda Labor Council.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly 20th District since Dec 5, 2022; authored 38 bills this session (CalMatters Digital Democracy); lobbied for legislation as AFSCME Local 3299 statewide political director from 2013.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair of Labor and Employment; also on Budget, Insurance and Privacy and Consumer Protection (CalMatters, Pleasanton Weekly).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'San Leandro resident raised in Oakland; Alameda Labor Council executive secretary-treasurer from 2017; cites work to save St. Rose Hospital.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Legislation signed includes AB 455 (home-sale tobacco-smoke disclosure); co-authored the CalCare single-payer bill AB 1900, still in progress.' },
          ],
        },
        bio: [
          'Raised in Oakland’s Fruitvale neighborhood after immigrating from Mexico at age three, she worked for SEIU, the Alameda Labor Council and AFSCME Local 3299 before being elected in 2022; she chairs the Assembly Labor and Employment Committee.',
          'Her priorities are raising wages, protecting workers and lowering the cost of living, including rental costs, health-care affordability and ending homelessness.',
        ],
        recordVsChange:
          'Ortega chairs the Labor and Employment Committee and scores 100% with the California Labor Federation and Sierra Club on CalMatters. The case for change comes from voters who want a legislator more aligned with business and taxpayer groups, which score her 0%.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Legislation to reduce renter costs; ending homelessness is a stated priority', comparison: 'Muga’s listed priorities do not include housing.' },
          { topic: 'Climate', position: '✓✓ 100% Sierra Club and 94% California Environmental Voters alignment, per CalMatters', comparison: 'Muga opposes closing natural-gas and nuclear plants.' },
          { topic: 'Education', position: '✓ 92% California Teachers Association alignment, per CalMatters; supports public education funding', comparison: 'Muga has no stated education platform found.' },
          { topic: 'Public safety', position: '~ Cites public-safety legislation; sits on a fentanyl/opioid committee', comparison: 'Muga supports laws for guardianship of the addicted and mentally ill.' },
          { topic: 'Taxes', position: '✗ 0% Howard Jarvis Taxpayers Association alignment, per CalMatters', comparison: 'Muga seeks greater accountability for tax revenues.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive Democrat; co-authored the CalCare single-payer bill', comparison: 'Muga is a Republican who opposed COVID-era mandates and backs voter ID.' },
        ],
        money: CAC,
        endorsements: 'California Labor Federation alignment 100% (CalMatters); no complete endorsement list found.',
        notes: ['Appears as “Liz Ortega-Toro” in some local coverage; her ballot name is Liz Ortega.'],
      },
      {
        id: 'patricia-muga',
        name: 'Patricia Muga',
        party: 'R',
        role: 'Real Estate Appraiser',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'Real estate appraiser and broker who has worked as an election worker for about 12 years; no elected office found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record of legislative or legal-policy work found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No budget or committee role found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Dublin resident since 2014 (part of Dublin is in AD-20); election worker and vote center captain in Alameda and Contra Costa counties for about 12 years; voting member of the Alameda County Republican Party Central Committee.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation found.' },
          ],
        },
        bio: [
          'Dublin resident since 2014 who works as a real estate appraiser and broker and has also worked in telecommunications, sales, administrative management and as an EMT; she was formerly registered as a Democrat, then no party preference, before becoming a Republican.',
          'She backs the California Voter ID initiative and an audit of state voter data, wants to keep natural-gas and nuclear power and expand water storage, and is also running for the Zone 7 Water Agency board.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? No public housing platform found', comparison: 'Ortega cites rental-cost and homelessness legislation.' },
          { topic: 'Climate', position: '✗ Opposes closing natural-gas and nuclear plants; supports more statewide water storage', comparison: 'Ortega has a 100% Sierra Club alignment score.' },
          { topic: 'Education', position: '? No public position found', comparison: 'Ortega has a 92% California Teachers Association score.' },
          { topic: 'Public safety', position: '✓ Backs vagrancy laws and guardianship for the addicted and mentally ill', comparison: 'Ortega cites public-safety bills and a fentanyl/opioid committee seat.' },
          { topic: 'Taxes', position: '✓ Accountability for tax revenues; restoring a middle-class economy', comparison: 'Ortega scores 0% with the Howard Jarvis Taxpayers Association.' },
          { topic: 'Caucus / ideology', position: '✓ Conservative Republican; backs voter ID and an audit of state voter data', comparison: 'Ortega is a labor-aligned Democrat.' },
        ],
        money: CAC,
        endorsements: 'No endorsement list found in major coverage.',
        notes: [
          'She did not respond to interview requests from the Pleasanton Weekly (May 2026).',
          'Participates in the Election Integrity Team of Alameda County, per the Pleasanton Weekly.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Ortega', '●', 'Progressive Left voters back the labor-aligned committee chair who co-authored the CalCare single-payer bill and has 100% Sierra Club and Labor Federation scores.'],
      ['EL', 'Ortega', '●', 'Establishment Liberals value an experienced incumbent chairing a major committee in a safe Democratic seat.'],
      ['DM', 'Ortega', '●', 'Democratic Mainstays back the Democratic incumbent and her worker-protection record.'],
      ['OL', 'Ortega', '◐', 'Outsider Left voters prefer the Democrat though her record is that of a labor-establishment legislator.'],
      ['SS', 'Ortega', '○', 'Stressed Sideliners facing high East Bay rents and health costs hear her cost-of-living and renter-cost focus.'],
      ['AR', 'Muga', '○', 'Ambivalent Right voters unhappy with Ortega’s 0% Chamber of Commerce and Howard Jarvis scores may lean Republican, but Muga has little public record or platform on their priorities.'],
      ['PR', 'Muga', '●', 'Populist Right voters back the Republican who supports voter ID and an audit of state voter data and opposed COVID-era mandates.'],
      ['CC', 'Muga', '●', 'Committed Conservatives support the Republican who wants accountable tax spending and continued natural-gas and nuclear power.'],
      ['FF', 'Muga', '●', 'Faith and Flag Conservatives favor the Republican on voter ID, election integrity and law-and-order measures.'],
    ]),
    counterArguments: [
      'AR (Muga ○): But consider that Ortega is the only candidate with a legislative record, a committee chair’s influence and an active role in local issues such as St. Rose Hospital.',
      'EL (Ortega ●): But consider that her 0% California Chamber of Commerce score may concern business-minded voters who want a legislator open to employer perspectives.',
    ],
  },
  {
    id: 'assembly-ad23',
    categoryId: 'state-leg',
    title: 'State Assembly, District 23',
    tldrLabel: 'AD-23',
    legalRequirements: LEG_ELIGIBILITY,
    qualificationCriteria: [
      { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
      { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
      { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: 'AD-23 covers parts of San Mateo and Santa Clara counties, including Mountain View.' },
      { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
    ],
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members write and vote on state laws and the budget, serve two-year terms, and sit on committees that shape technology, higher education, professional licensing and public-safety policy.',
      'In a safely Democratic Peninsula and South Bay seat, the question is whether voters keep a committee-chair Democrat or send a Republican challenger to a chamber where Democrats hold a large majority.',
    ],
    introParagraphs: [
      'Democratic incumbent Marc Berman won the June 2 primary with 77.3%; Republican David G. Johnson took 14.6%, edging fellow Republican Rick Giorgetti (8.0%) for the second slot (Secretary of State Statement of Vote via The Ballot Brief).',
      'Berman is a heavy favorite. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 23',
        url: 'https://theballotbrief.com/state/california/santa-clara-county/california-assembly-district-23',
        summary: 'Neutral roster page with primary results, designations and stated priorities.',
      },
      {
        label: 'Assembly Business and Professions Committee',
        url: 'https://abp.assembly.ca.gov',
        summary: 'Official committee site listing Berman as chair and its 2026 oversight hearings.',
      },
    ],
    candidates: [
      {
        id: 'marc-berman',
        name: 'Marc Berman',
        party: 'D',
        role: 'State Assemblymember',
        campaignUrl: 'https://a23.asmdc.org',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Assembly member since December 2016 and chair of the Business and Professions Committee, after serving on the Palo Alto City Council and practicing law.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly member since Dec 5, 2016 (24th District, then 23rd); authored a 2019 election deepfake law and AB 2584 (2022), both signed by the governor (Wikipedia); former attorney at Latham & Watkins.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair of the Assembly Business and Professions Committee, which held sunset and cannabis oversight hearings in 2026 (committee site).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Served on the Palo Alto City Council before the Assembly; represents the Peninsula/South Bay district.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Two high-profile bills signed by the governor; co-chaired joint hearings with Senate members in March 2026 (committee site).' },
          ],
        },
        bio: [
          'Attorney who served on the Palo Alto City Council before entering the Assembly in 2016; he chairs the Business and Professions Committee, which oversees licensing boards and the cannabis industry.',
          'His listed priorities are higher education policy and business regulation, cybersecurity and electric-vehicle infrastructure.',
        ],
        recordVsChange:
          'Berman chairs a committee with sunset-review power over licensing boards and has had major election-law bills signed. A replacement Republican would start in the minority with no committee seniority.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Supports policies to increase housing production, in contrast to some Palo Alto officials, per Wikipedia', comparison: 'Johnson lists opposing new regulations; no housing position found.' },
          { topic: 'Climate', position: '✓ Electric-vehicle infrastructure is a stated priority', comparison: 'Johnson lists opposing new regulations; no climate plan found.' },
          { topic: 'Education', position: '✓✓ Higher education policy is his top listed priority', comparison: 'Johnson lists parental rights and school choice.' },
          { topic: 'Public safety', position: '~ Cybersecurity is a listed priority; no other public-safety platform found', comparison: 'Johnson has no stated public-safety platform found.' },
          { topic: 'Taxes', position: '? No public tax position found', comparison: 'Johnson’s listed priority is opposing new taxes and regulations.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat; member of the Legislative Progressive Caucus per Wikipedia', comparison: 'Johnson is a Republican.' },
        ],
        money: CAC,
        endorsements: 'No complete endorsement list found; see his campaign materials.',
        notes: ['Won the 2024 general with 59.8% against Lydia Kou, per Wikipedia.'],
      },
      {
        id: 'david-johnson',
        name: 'David G. Johnson',
        party: 'R',
        role: 'Small Business Owner',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Lists himself as a small business owner; no public record of elected office or policy work found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No campaign website or questionnaire response found as of Sept 7, 2026 (The Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'Republican whose ballot designation is Small Business Owner; some voter-information sites also list him as “Dave” Johnson.',
          'His listed priorities are opposing new taxes and regulations and supporting parental rights and school choice.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? No public position found', comparison: 'Berman supports increasing housing production.' },
          { topic: 'Climate', position: '✗ Opposes new regulations as a stated priority; no climate plan found', comparison: 'Berman lists electric-vehicle infrastructure.' },
          { topic: 'Education', position: '✓✓ Parental rights and school choice', comparison: 'Berman focuses on higher education policy.' },
          { topic: 'Public safety', position: '? No public position found', comparison: 'Berman lists cybersecurity.' },
          { topic: 'Taxes', position: '✓✓ Oppose new taxes', comparison: 'Berman has no stated tax platform found.' },
          { topic: 'Caucus / ideology', position: '✓ Conservative Republican', comparison: 'Berman is a Progressive Caucus Democrat.' },
        ],
        money: CAC,
        endorsements: 'No endorsement list found in major coverage.',
        notes: ['Finished second among Republicans in the June primary with 14.6%, ahead of Rick Giorgetti at 8.0%.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Berman', '●', 'Progressive Left voters back the Democrat who sits in the Legislative Progressive Caucus and chairs a major regulatory committee.'],
      ['EL', 'Berman', '●', 'Establishment Liberals value an incumbent attorney and former councilmember with signed election-law reforms and committee leadership.'],
      ['DM', 'Berman', '●', 'Democratic Mainstays back the Democratic incumbent in a safe seat.'],
      ['OL', 'Berman', '○', 'Outsider Left voters prefer the Democrat though his path through council and Sacramento is a conventional establishment one.'],
      ['SS', 'Berman', '○', 'Stressed Sideliners have little information on either candidate and default to the incumbent with a committee-chair record.'],
      ['AR', 'Berman', '○', 'Ambivalent Right voters may lean to the incumbent focused on cybersecurity and business regulation, since Johnson offers little public record.'],
      ['PR', 'Johnson', '◐', 'Populist Right voters favor the Republican who opposes new taxes and regulation, though he has little public profile.'],
      ['CC', 'Johnson', '●', 'Committed Conservatives support the Republican who opposes new taxes and regulations.'],
      ['FF', 'Johnson', '●', 'Faith and Flag Conservatives back the Republican who supports parental rights and school choice.'],
    ]),
    counterArguments: [
      'AR (Berman ○): But consider that Johnson’s message on taxes and regulation is closer to what small-business moderates often want, though he has no campaign website or detailed platform to judge.',
      'PR (Johnson ◐): But consider that Berman’s committee chair post gives the district influence over licensing and regulation that a first-time Republican in the minority would not have.',
    ],
  },
];
