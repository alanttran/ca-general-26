import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Santee-area local contests (ZIP 92071): Santee City Council Districts 1 and 2, Santee School District
 * Seats 1 and 5, Padre Dam Municipal Water District Division 1, City Measure Y (1-cent sales tax) and
 * Santee School District Measure BB (bond). Ballot text, designations and candidate statements are from the
 * official sample ballots (BT 364 for Council D1; BT 369 for Council D2, Padre Dam Div. 1, the school seats
 * and both measures). All offices are nonpartisan; party labels below are context from endorsements.
 * Research current as of Oct 13, 2026.
 */

const SB_364 = 'https://www.sdvote.com/content/dam/rov/en/sb/SB-ENG-364.pdf';
const SB_369 = 'https://www.sdvote.com/content/dam/rov/en/sb/SB-ENG-369.pdf';
const KPBS_ENDORSE =
  'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian';
const ECM_COUNCIL = 'https://eastcountymagazine.org/two-santee-city-council-seats-tax-measure-on-ballot/';
const SANTEE_ELECTIONS = 'https://www.cityofsanteeca.gov/city-clerk/elections-and-how-to-vote';
const SANTEE_NETFILE = 'https://public.netfile.com/pub2/?AID=STE';
const COUNTY_CAMPAIGN_PORTAL = 'https://www.southtechhosting.com/SanDiegoCounty/CampaignDocsWebRetrieval/';
const SDCTA_Y =
  'https://static1.squarespace.com/static/5af07fd050a54f8fc370c748/t/6a725c94598bf270c2e3c0fa/1785879700277/FINAL+City+of+Santee+One-Cent+Sales+Tax.pdf';
const KPBS_BONDS = 'https://www.kpbs.org/news/politics/2026/10/02/your-guide-to-all-san-diego-county-school-bond-measures';

const COUNCIL_LEGAL =
  'U.S. citizen, 18 or older, registered voter living in the City of Santee and in the council district they would represent.';

const COUNCIL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Municipal policy and governance', detail: 'The five-member Council passes city laws, directs the city manager and sends members to regional boards such as MTS.' },
  { id: 'budget', label: 'Budget and capital planning', detail: 'The Council adopts a roughly $72 million operating budget and decides how to tackle an unfunded infrastructure backlog of about $333 million.' },
  { id: 'landuse', label: 'Land use and public safety', detail: 'The Council approves development (including Fanita Ranch), funds the city fire department and contracts with the Sheriff.' },
  { id: 'constituent', label: 'District knowledge and constituent service', detail: 'Councilmembers represent one district and answer residents’ requests.' },
];

const SCHOOL_LEGAL =
  'U.S. citizen, 18 or older, registered voter living in the Santee School District; not an employee of the district (Cal. Education Code § 35107).';

const SCHOOL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Board governance and oversight', detail: 'Trustees set policy, approve contracts and hire and evaluate the superintendent as one vote of five.' },
  { id: 'budget', label: 'Budget and fiscal oversight', detail: 'The board adopts the district budget, bargains with staff and oversees bond spending.' },
  { id: 'instruction', label: 'Knowledge of teaching and student outcomes', detail: 'Trustees approve curriculum, programs and services for about 6,000 TK–8 students, including special education.' },
  { id: 'community', label: 'Parent and community engagement', detail: 'Trustees answer to families and staff in public meetings.' },
];

export const RACES_SANTEE: Race[] = [
  // ---------------------------------------------------------------- Santee Council D1
  {
    id: 'santee-council-d1',
    categoryId: 'city',
    title: 'Santee City Council, District 1',
    tldrLabel: 'Santee Council D1',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Santee’s five-member City Council (a directly elected mayor plus four district members) sets the city budget, approves development and runs a city fire department while contracting with the Sheriff for police. The adopted 2026–27 operating budget is about $72 million, and the city’s capital plan lists roughly $333 million in unfunded projects (San Diego County Taxpayers Association, July 2026).',
      'The next council will decide how to handle that backlog: if Measure Y passes, it will adopt the yearly spending plans for about $14 million a year in new sales-tax money; if it fails, it must find other ways to pay for roads, storm drains and fire stations. It will also keep shaping big projects such as Fanita Ranch.',
    ],
    introParagraphs: [
      'This is a single November contest for a four-year term; there was no primary. Rob McNelis was first elected in 2010. In 2022 nobody filed against him, so the council appointed him to this term rather than holding an election (East County Magazine; city notice). Matthew G. Rascon, a Democrat who ran unsuccessfully for Congress in the 48th District in 2022 and 2024, filed no candidate statement. The county Democratic Party endorses Rascon; the Republican Party and the Lincoln Club endorse McNelis (KPBS endorsement guide, Sept. 30, 2026).',
    ],
    legalRequirements: COUNCIL_LEGAL,
    qualificationCriteria: COUNCIL_CRITERIA,
    candidates: [
      {
        id: 'matthew-rascon',
        name: 'Matthew G. Rascon',
        party: 'NP',
        role: 'Orthopaedic Technologist',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Rascon has not held public office or served on a city board or commission that we could find. He filed no candidate statement and has no campaign website.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected or appointed government service documented; two unsuccessful congressional primary runs (2022, 2024).' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget or finance role documented.' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'No land-use or public-safety policy role documented; his stated occupation is orthopaedic technologist, and East County Magazine described him as a security officer.' },
            { criterionId: 'constituent', assessment: 'unknown', evidence: 'No community or neighborhood role in Santee documented; no candidate statement filed with the city.' },
          ],
        },
        bio: [
          'Rascon is a Santee resident whose ballot designation is orthopaedic technologist; East County Magazine described him as a security officer at Sycuan Casino and reported he could not be reached for an interview. He filed no candidate statement and has no campaign website (City of Santee elections page).',
          'He ran as a Democrat for the 48th Congressional District in 2022 and 2024 and did not advance past either primary; in those races he campaigned on congressional term limits and stock-trading and conflict-of-interest rules (Village News, 2022; Times of San Diego, 2024).',
        ],
        scorecard: [
          { topic: 'Budget/infrastructure', position: '? No published position', comparison: 'McNelis has voted on 16 years of city budgets and supported placing Measure Y on the ballot.' },
          { topic: 'Measure Y sales tax', position: '? No published position', comparison: 'McNelis was one of the four council votes to put Measure Y on the ballot.' },
          { topic: 'Development/Fanita Ranch', position: '? No published position', comparison: 'McNelis describes himself as pro-business, with the motto “find ways to say yes.”' },
          { topic: 'Public safety', position: '? No published position', comparison: 'McNelis pledges to support public safety and is endorsed by the Deputy Sheriffs’ Association.' },
          { topic: 'Ideology', position: '✓ Democratic Party–endorsed; prior runs as a Democrat', comparison: 'McNelis is Republican Party– and Lincoln Club–endorsed.' },
        ],
        money: 'No fundraising totals found in news coverage as of Oct 13, 2026. City candidates file with the Santee City Clerk’s NetFile portal, which can’t be searched without its interactive form.',
        endorsements: 'San Diego County Democratic Party (KPBS endorsement guide, Sept. 30, 2026).',
        notes: [
          'Congressional runs: https://www.villagenews.com/story/2022/06/02/news/issa-takes-early-lead-in-48th-congressional-district/70060.html and https://timesofsandiego.com/?p=264809',
        ],
      },
      {
        id: 'rob-mcnelis',
        name: 'Rob McNelis',
        party: 'NP',
        role: 'Councilmember/Businessman',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'McNelis has served on the Santee City Council since 2010, about 16 years, and has run local mortgage and entertainment businesses since 1997.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Councilmember since 2010; reappointed to the District 1 seat in 2022 when no one filed against him (candidate statement; city notice).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on every city budget since 2010, including the June 2026 budget and the vote placing Measure Y on the ballot.' },
            { criterionId: 'landuse', assessment: 'met', evidence: 'Sixteen years of council votes on development and public safety; says he has used his business background to pass policies supporting business establishment and growth (candidate statement).' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Santee resident and business owner since 1994; 2007 Santee Citizen of the Year; past president of the Santee Chamber of Commerce (candidate statement).' },
          ],
        },
        bio: [
          'McNelis has lived, worked and owned in Santee since 1994 and was first elected to the council in 2010. He is a mortgage banker and past president of the San Diego Association of Mortgage Brokers, the East San Diego County Association of Realtors and the Santee Chamber of Commerce; he was named Santee Citizen of the Year in 2007 (candidate statement).',
          'His statement stresses supporting local businesses, public safety, parks and roads, and cites his motto to staff: “Find ways to say yes, not reasons to say no.” He did not respond to East County Magazine’s interview requests.',
        ],
        recordVsChange:
          'McNelis offers 16 years of council experience and a consistent pro-business record, and he backed letting voters decide Measure Y. The case for change is mainly about representation: he was reappointed without an election in 2022, and voters who want a different direction on growth or spending have only a challenger with no published platform.',
        scorecard: [
          { topic: 'Budget/infrastructure', position: '✓ Voted to put the 1-cent Measure Y on the ballot to fund roads, storm drains and fire stations', comparison: 'Rascon has no published position.' },
          { topic: 'Business/growth', position: '✓✓ Pro-business; “find ways to say yes”', comparison: 'Rascon has no published position.' },
          { topic: 'Public safety', position: '✓ Pledges to support public safety; Deputy Sheriffs’ Association–endorsed', comparison: 'Rascon has no published position.' },
          { topic: 'Parks and roads', position: '✓ Promises to improve parks and roadways', comparison: 'Rascon has no published position.' },
          { topic: 'Ideology', position: '✓ Republican Party– and Lincoln Club–endorsed', comparison: 'Rascon is Democratic Party–endorsed.' },
        ],
        money: 'No fundraising totals found in news coverage as of Oct 13, 2026; filings are on the Santee City Clerk’s NetFile portal.',
        endorsements:
          'Republican Party of San Diego County; San Diego Lincoln Club (KPBS endorsement guide, Sept. 30, 2026); Deputy Sheriffs’ Association of San Diego County (DSA endorsement letter, June 2025).',
        notes: ['Measure Y passed the council 4–1 with Vice Mayor Ronn Hall the only no vote, so McNelis was among the four yes votes (East County Magazine; KPBS).'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Rascon', '◐', 'Progressive Left voters back the Democratic Party–endorsed challenger over a Republican-endorsed, pro-growth incumbent, though Rascon has published no platform.', 'With no platform from Rascon, a Progressive Left voter focused on competence could back McNelis, who has 16 years of budget and land-use votes and supported letting voters decide Measure Y, giving up a Democratic-endorsed seat.'],
      ['EL', 'Rascon', '○', 'Establishment Liberals follow the county Democratic Party endorsement, but weakly, because Rascon filed no statement and has no government record.', 'Establishment Liberals value proven administrators; McNelis has served since 2010 and backed the infrastructure tax, so they could accept a Republican-endorsed incumbent over a challenger with no platform.'],
      ['DM', 'Rascon', '◐', 'Democratic Mainstays back the candidate their party endorsed in a council race otherwise dominated by Republican-endorsed members.', 'Democratic Mainstays who prize experience could back McNelis, a 16-year councilmember, rather than a challenger with no statement, accepting a Republican Party–endorsed vote on the council.'],
      ['OL', 'Rascon', '○', 'Outsider Left voters lean to the challenger as a check on a long-serving incumbent, but weakly because Rascon offers no specifics.', 'Outsider Left voters who want a working council could back McNelis’s long service and his vote to let voters decide Measure Y, giving up a vote for change.'],
      ['SS', 'McNelis', '○', 'Stressed Sideliners have little to compare and may default to the familiar incumbent who promises better roads and parks.'],
      ['AR', 'McNelis', '●', 'Ambivalent Right voters favor a steady, business-minded incumbent with long experience over an unknown challenger.'],
      ['PR', 'McNelis', '◐', 'Populist Right voters back the Republican-endorsed incumbent, though some dislike his vote to put a sales-tax increase on the ballot.'],
      ['CC', 'McNelis', '●', 'Committed Conservatives back the Republican Party– and Lincoln Club–endorsed pro-business incumbent.'],
      ['FF', 'McNelis', '◐', 'Faith and Flag Conservatives follow the Republican Party endorsement to McNelis over a Democratic-endorsed challenger.'],
    ]),
    counterArguments: [
      'PL/DM (Rascon ◐): But Rascon has filed no candidate statement and published no positions on Santee issues, so a vote for him rests almost entirely on the party endorsement.',
      'CC/AR (McNelis ●): But McNelis voted to put a 1-cent sales-tax increase on the ballot that the county Republican Party opposes.',
    ],
    readingLinks: [
      { label: 'East County Magazine: Two Santee council seats, tax measure on ballot', url: ECM_COUNCIL, summary: 'Profiles of both council races and Measure Y.' },
      { label: 'Sample ballot with candidate statements (BT 364)', url: SB_364, summary: 'McNelis’s statement; Rascon did not file one.' },
      { label: 'City of Santee: elections, candidate filings and Form 700s', url: SANTEE_ELECTIONS },
    ],
  },

  // ---------------------------------------------------------------- Santee Council D2
  {
    id: 'santee-council-d2',
    categoryId: 'city',
    title: 'Santee City Council, District 2',
    tldrLabel: 'Santee Council D2',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Santee’s five-member City Council sets the budget, approves development and oversees the city fire department and the Sheriff’s contract. District 2’s member is one of five votes on how to close an unfunded capital backlog of about $333 million in roads, storm drains, bridges, parks and fire stations.',
      'This race doubles as a referendum on Measure Y. Vice Mayor Ronn Hall cast the only council vote against putting the 1-cent sales tax on the ballot; challenger Eddie Vandiver says voters deserved to decide and backs the tax (East County Magazine).',
    ],
    introParagraphs: [
      'This is a single November contest for a four-year term. Hall has held the seat since 2014 and was unopposed in 2022. Vandiver, president and general manager of Sportsplex USA Santee, is a first-time candidate who told East County Magazine that Hall “hasn’t done anything” in 12 years; Hall answers with his record on public safety, budgets and Highway 52. Both are business owners with conservative support: the Lincoln Club co-endorses them, Reform California backs Hall, and the Santee Firefighters Association backs Vandiver (KPBS endorsement guide; candidate statements).',
      'As of the latest filing period reported by East County Magazine (late August 2026), Vandiver had raised $37,275 including a $12,000 personal loan, and Hall $18,587, nearly all from a personal loan.',
    ],
    legalRequirements: COUNCIL_LEGAL,
    qualificationCriteria: COUNCIL_CRITERIA,
    candidates: [
      {
        id: 'ronn-hall',
        name: 'Ronn Hall',
        party: 'NP',
        role: 'Business Owner/Councilmember',
        campaignUrl: 'https://ronnhallsantee.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Hall has served on the council since 2014 and is vice mayor; he also sits on the MTS board. He has run an insurance business in Santee for decades.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Councilmember since 2014, currently vice mayor; MTS Board member (candidate statement; campaign site).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on city budgets since 2014; cast the lone no vote on placing Measure Y on the ballot, June 24, 2026.' },
            { criterionId: 'landuse', assessment: 'met', evidence: 'Twelve years of council votes on development and public safety; endorsed by the Deputy Sheriffs’ Association (candidate statement).' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Santee business owner and former Chamber of Commerce president; says he answers all calls and emails (candidate statement).' },
          ],
        },
        bio: [
          'Hall owns an insurance business in Santee and has represented District 2 since 2014; he is vice mayor and serves on the Metropolitan Transit System board. He is a former Santee Chamber of Commerce president and a Rotarian (candidate statement). His wife, Virginia Hall, is an elected Grossmont Healthcare District director (campaign endorsements page).',
          'His statement puts public safety first and lists local jobs, a balanced budget, street paving, reducing homelessness and the Highway 52 fix as priorities.',
        ],
        recordVsChange:
          'Hall brings 12 years on the council, an MTS seat and a clear fiscal stance: he said he could accept a half-cent tax but voted against the full cent. The case for change is Vandiver’s argument that Hall has delivered too little in 12 years, and that voters, not the council, should decide on the tax.',
        scorecard: [
          { topic: 'Measure Y sales tax', position: '✗ Cast the only council vote against placing the 1-cent tax on the ballot; says he could have accepted a half cent', comparison: 'Vandiver supports the tax and letting voters decide.' },
          { topic: 'Public safety', position: '✓✓ Calls public safety his top priority; Deputy Sheriffs’ Association–endorsed', comparison: 'Vandiver is endorsed by the Santee Firefighters Association.' },
          { topic: 'Budget', position: '✓ Wants a balanced budget designed to fund roads, fire and infrastructure without a full-cent tax (East County Magazine)', comparison: 'Vandiver says new revenue is needed and voters should weigh in.' },
          { topic: 'Transportation', position: '✓ Pushing state and federal partners to fix Highway 52', comparison: 'Vandiver wants Mast Boulevard opened toward Lakeside.' },
          { topic: 'Homelessness', position: '✓ Lists reducing homelessness as a priority', comparison: 'Vandiver has not published a homelessness plan.' },
        ],
        money: '$18,587 raised, nearly all from a personal loan, in the latest filing period reported by East County Magazine (late August 2026).',
        endorsements:
          'Deputy Sheriffs’ Association of San Diego County; Reform California; San Diego Lincoln Club (co-endorsement); Rep. Darrell Issa; Assemblymember Carl DeMaio; Santee Mayor John Minto; Councilmember Laura Koval; Supervisors Joel Anderson and Jim Desmond (campaign site, as of Oct 2026; KPBS endorsement guide, Sept. 30, 2026).',
        notes: [
          'East County Magazine reports that Hall initially opposed cannabis shops but later voted for three of four locations to be in District 2.',
          'Hall’s campaign site explains his no vote on Measure Y: https://ronnhallsantee.com/ronn-halls-no-vote-on-measure-y/',
        ],
      },
      {
        id: 'eddie-vandiver',
        name: 'Eddie Vandiver',
        party: 'NP',
        role: 'Business Owner/Parent',
        campaignUrl: 'https://eddiev4santee.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Vandiver runs a large local sports complex and has been active in the Santee Chamber of Commerce for 16 years. He has not held public office.',
          criteria: [
            { criterionId: 'governance', assessment: 'not-met', evidence: 'No elected or appointed government service; first-time candidate.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'President and general manager of Sportsplex USA Santee (candidate statement); no public-budget role.' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'No land-use or public-safety policy role documented; endorsed by the Santee Firefighters Association.' },
            { criterionId: 'constituent', assessment: 'partial', evidence: 'Has lived and worked in Santee for 25 years and been active in the Santee Chamber of Commerce for 16 (candidate statement).' },
          ],
        },
        bio: [
          'Vandiver is president and general manager of Sportsplex USA Santee, a privately run ballfield complex near Town Center Community Park. He has lived and worked in Santee for 25 years and been active in the Chamber of Commerce for 16 (candidate statement). He is a parent of two school-age children and argues no current councilmember has kids in local schools (East County Magazine).',
          'His priorities are public safety and first responders, parks and infrastructure, responsible spending and a transparent City Hall. He backs opening Mast Boulevard toward Lakeside and a new fire station in northeast Santee.',
        ],
        scorecard: [
          { topic: 'Measure Y sales tax', position: '✓ Supports the tax; says voters deserve to decide (East County Magazine)', comparison: 'Hall cast the only council vote against placing it on the ballot.' },
          { topic: 'Fire/public safety', position: '✓✓ Santee Firefighters Association–endorsed; wants a northeast fire station', comparison: 'Hall is endorsed by the Deputy Sheriffs’ Association.' },
          { topic: 'Parks and infrastructure', position: '✓ Wants parks and infrastructure maintained; opening Mast Boulevard', comparison: 'Hall emphasizes street paving and Highway 52.' },
          { topic: 'Transparency', position: '✓ Promises a transparent, accountable City Hall', comparison: 'Hall stresses accessibility to residents.' },
          { topic: 'Housing/mobilehomes', position: '✓ Endorsed by the Santee Mobilehome Owners Action Committee', comparison: 'Hall is endorsed by the Southern California Rental Housing Association.' },
        ],
        money: '$37,275 raised, including a $12,000 personal loan, and just over $20,000 spent, in the latest filing period reported by East County Magazine (late August 2026).',
        endorsements: 'Santee Firefighters Association; Santee Mobilehome Owners Action Committee (candidate statement); San Diego Lincoln Club (co-endorsement; KPBS endorsement guide, Sept. 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Vandiver', '○', 'Progressive Left voters lean to the firefighter-backed challenger who supports new revenue for public services, though neither candidate shares their wider agenda.', 'A Progressive Left voter focused on competence could back Hall, a 12-year councilmember and MTS board member, giving up a vote for the tax-supporting, firefighter-backed challenger.'],
      ['EL', 'Vandiver', '◐', 'Establishment Liberals value funding infrastructure and letting voters decide Measure Y, which Vandiver supports and Hall opposed.', 'Establishment Liberals who prize institutional experience could back Hall’s 12 years on the council and MTS board, accepting his vote against putting Measure Y to voters.'],
      ['DM', 'Vandiver', '◐', 'Democratic Mainstays favor the candidate backed by the firefighters’ union over the Reform California–endorsed incumbent.', 'Democratic Mainstays who weigh experience could back Hall, whose 12 years on the council outweigh Vandiver’s Chamber work, giving up the union-backed challenger.'],
      ['OL', 'Vandiver', '○', 'Outsider Left voters lean to the first-time challenger who says the council is out of touch.', 'Outsider Left voters could back Hall for his long record and responsiveness pledge, giving up a vote for a fresh face.'],
      ['SS', 'Hall', '○', 'Stressed Sideliners worried about prices may side with the incumbent who opposed a full-cent sales-tax increase.'],
      ['AR', 'Hall', '◐', 'Ambivalent Right voters value Hall’s experience and fiscal caution, though both candidates are business owners with conservative support.'],
      ['PR', 'Hall', '●', 'Populist Right voters back the Reform California–endorsed incumbent who opposed the sales-tax hike.'],
      ['CC', 'Hall', '●', 'Committed Conservatives favor Hall’s anti-tax vote, his law-enforcement endorsements and support from Republican officeholders.'],
      ['FF', 'Hall', '◐', 'Faith and Flag Conservatives lean to Hall, endorsed by Rep. Issa and Assemblymember DeMaio, over a challenger without party backing.'],
    ]),
    counterArguments: [
      'CC/PR (Hall ●): But Vandiver is also a business owner co-endorsed by the Lincoln Club, and conservatives who see the infrastructure backlog as urgent may prefer letting voters decide the tax.',
      'EL/DM (Vandiver ◐): But Vandiver has never held public office, and Hall’s 12 years on the council and MTS board bring working relationships a newcomer would need time to build.',
    ],
    readingLinks: [
      { label: 'East County Magazine: Two Santee council seats, tax measure on ballot', url: ECM_COUNCIL, summary: 'Interviews with Hall and Vandiver; fundraising totals.' },
      { label: 'KPBS: Santee voters to weigh in on 1% sales tax (Sept. 25, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/25/santee-voters-to-weigh-in-on-1-general-sales-tax-increase-this-november', summary: 'Hall’s no vote explained.' },
      { label: 'Sample ballot with candidate statements (BT 369)', url: SB_369 },
    ],
  },

  // ---------------------------------------------------------------- Santee SD Seat 1
  {
    id: 'santee-sd-seat-1',
    categoryId: 'school',
    title: 'Santee School District, Seat 1',
    tldrLabel: 'Santee SD, Seat 1',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The Santee School District runs the city’s TK–8 schools, about 6,000 students, under a five-member board that adopts the budget, sets policy and hires the superintendent (KPBS). Trustees are elected citywide by numbered seat.',
      'Seats 1 and 5 are both open this year, so two of five votes will change hands at once, as the district also asks voters for a $30 million bond (Measure BB). The race pits a candidate endorsed by the teachers’ union against one endorsed by the Republican Party.',
    ],
    introParagraphs: [
      'This is a single November contest; the most votes wins. Longtime trustee Barbara Ryan, who first joined the board in 1979 and won Seat 1 with 75.5% in 2022, is not on the ballot (district announcement; county results). Misty Kendall is endorsed by the Santee Teachers Association; Cindy Petretta by the Republican Party of San Diego County and Reform California (candidate statement; KPBS endorsement guide, Sept. 30, 2026). Frank Peterson filed no statement and has no web presence we could find.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'misty-kendall',
        name: 'Misty Kendall',
        party: 'NP',
        role: 'Legal Assistant',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Kendall has served two years on the district’s budget and district advisory committees and was a finalist for the 2024 Seat 5 appointment. She has not held office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Final-round candidate for the 2024 board appointment after Ken Fox resigned; two years on the District Advisory Committee (candidate statement).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Two years on the district’s Budget Advisory Committee (candidate statement).' },
            { criterionId: 'instruction', assessment: 'unknown', evidence: 'No teaching role documented; three children in district schools since kindergarten.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Seven years as Cub Scout Pack Committee Chair; district parent for 11 years (candidate statement).' },
          ],
        },
        bio: [
          'Kendall has been a legal assistant for 19 years, formerly at a downtown law firm and now with a local tribal government. She holds a political science degree from Houghton College and a USD paralegal certificate. Her three children have attended district schools since kindergarten (candidate statement).',
          'She has served two years each on the district’s District Advisory and Budget Advisory committees and was a finalist when the board filled Ken Fox’s seat by appointment in 2024. She stresses communication and support for public schools.',
        ],
        scorecard: [
          { topic: 'Budget oversight', position: '✓ Two years on the district’s Budget Advisory Committee', comparison: 'Petretta cites financial responsibility as a single parent; Peterson has no statement.' },
          { topic: 'Teachers and staff', position: '✓✓ Endorsed by the Santee Teachers Association', comparison: 'Petretta is endorsed by the Republican Party and Reform California.' },
          { topic: 'Public schools', position: '✓ “A product of public education,” she backs the public school system', comparison: 'Petretta wants to protect “conservative community values.”' },
          { topic: 'Measure BB bond', position: '? No stated position', comparison: 'Petretta has no stated position; her endorsers oppose it.' },
        ],
        money: 'No fundraising totals found as of Oct 13, 2026; school board candidates file with the county Registrar of Voters.',
        endorsements: 'Santee Teachers Association (candidate statement).',
      },
      {
        id: 'cindy-petretta',
        name: 'Cindy Petretta',
        party: 'NP',
        role: 'Child Supervision Director',
        campaignUrl: 'https://cindyforschoolboard.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Petretta directs a children’s program at a church nonprofit and was a preschool teacher. She has not held office or served on a district committee.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board or committee service documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget role documented.' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'Former preschool teacher; directs a children’s department at Foothills Church for more than a decade (candidate statement; campaign site).' },
            { criterionId: 'community', assessment: 'met', evidence: '28-year Santee resident; volunteered in classrooms, PTA, after-school clubs and Girl Scouts while her two children attended district schools.' },
          ],
        },
        bio: [
          'Petretta is a 28-year Santee resident whose two children went through Santee schools, where she volunteered in classrooms, PTA, after-school clubs and Girl Scouts. She directs child supervision at Foothills Church, was a preschool teacher, and earlier spent about 20 years in security and community relations at SeaWorld (candidate statement; campaign site).',
          'She says she is running to keep schools “safe, transparent and student-focused,” and her site says she wants to protect the district’s “conservative community values.”',
        ],
        scorecard: [
          { topic: 'School safety', position: '✓✓ Emergency preparedness, mental-health resources and clear communication on every campus', comparison: 'Kendall does not detail a safety plan.' },
          { topic: 'Parental rights', position: '✓✓ Wants parents as informed, empowered partners', comparison: 'Kendall stresses communication with all groups.' },
          { topic: 'Ideology', position: '✓ Republican Party– and Reform California–endorsed; wants to protect “conservative community values”', comparison: 'Kendall is endorsed by the teachers’ union.' },
          { topic: 'Measure BB bond', position: '? No stated position', comparison: 'Her party and Reform California oppose Measure BB.' },
        ],
        money: 'No fundraising totals found as of Oct 13, 2026.',
        endorsements:
          'Republican Party of San Diego County; Reform California (KPBS endorsement guide, Sept. 30, 2026); campaign site also lists state Sen. Brian Jones, El Cajon Mayor Bill Wells, Santee Councilmembers Rob McNelis, Dustin Trotter and Laura Koval, and Santee trustee Tracie Thill.',
      },
      {
        id: 'frank-peterson',
        name: 'Frank Peterson',
        party: 'NP',
        role: 'Engineering Manager',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Peterson filed no candidate statement and we found no campaign site, endorsements or public record of school involvement.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board service documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'Ballot designation is engineering manager; employer and scope not published.' },
            { criterionId: 'instruction', assessment: 'unknown', evidence: 'No education role documented.' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'No school or community role documented.' },
          ],
        },
        bio: ['Peterson’s ballot designation is engineering manager. He filed no statement in the county voter guide, and we found no campaign site, endorsements or news coverage.'],
        scorecard: [
          { topic: 'Priorities', position: '? None published', comparison: 'Kendall and Petretta both filed statements.' },
          { topic: 'Measure BB bond', position: '? No stated position', comparison: 'Neither rival has a stated position.' },
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Kendall', '◐', 'Progressive Left voters back the teachers’ union–endorsed public-school advocate over a Republican-endorsed rival.'],
      ['EL', 'Kendall', '●', 'Establishment Liberals value Kendall’s two years on the district’s budget and advisory committees and the teachers’ endorsement.'],
      ['DM', 'Kendall', '◐', 'Democratic Mainstays follow the teachers’ union endorsement to Kendall; their party made no pick in Seat 1.'],
      ['OL', 'Kendall', '○', 'Outsider Left voters lean to Kendall’s pro–public school message but see little to rally around.'],
      ['SS', 'Petretta', '○', 'Stressed Sideliners may like Petretta’s plain focus on safety and parents having a seat at the table, without strong feelings.'],
      ['AR', 'Petretta', '◐', 'Ambivalent Right voters lean to the Republican-endorsed candidate focused on safety and transparency, though Kendall has more district committee experience.'],
      ['PR', 'Petretta', '●', 'Populist Right voters back the Reform California–endorsed candidate who emphasizes parental rights.'],
      ['CC', 'Petretta', '●', 'Committed Conservatives back the Republican Party’s pick.'],
      ['FF', 'Petretta', '●', 'Faith and Flag Conservatives value Petretta’s church-based children’s ministry work and her pledge to protect conservative community values.'],
    ]),
    counterArguments: [
      'CC/FF (Petretta ●): But Kendall has spent two years on the district’s budget committee, while Petretta has no district committee or board experience.',
      'EL (Kendall ●): But Kendall’s endorsement by the teachers’ union means she would vote on contracts with a group that backed her, and she has not said where she stands on Measure BB.',
    ],
    readingLinks: [
      { label: 'Sample ballot with candidate statements (BT 369)', url: SB_369, summary: 'Kendall’s and Petretta’s statements.' },
      { label: 'KPBS: Meet the candidates for all school board races', url: 'https://www.kpbs.org/news/politics/2026/09/29/meet-the-candidates-for-all-school-board-races-in-san-diego-county' },
    ],
  },

  // ---------------------------------------------------------------- Santee SD Seat 5
  {
    id: 'santee-sd-seat-5',
    categoryId: 'school',
    title: 'Santee School District, Seat 5',
    tldrLabel: 'Santee SD, Seat 5',
    seatContext: 'Open seat (appointed trustee not running)',
    kind: 'candidates',
    stakesParagraphs: [
      'The Santee School District board governs TK–8 schools serving about 6,000 students: it adopts the budget, hires the superintendent and decides how bond money is spent. Seat 5 is elected citywide.',
      'Dr. Tim Glover was appointed to Seat 5 in September 2024 after Ken Fox resigned, and he is not on the ballot. With Seat 1 also open, two new trustees will help oversee Measure BB’s $30 million if it passes.',
    ],
    introParagraphs: [
      'This is a single November contest among three parents, two of them Navy veterans. Steven Dobesh has the rare combination of the Santee Teachers Association and the Republican Party (plus Reform California); Uday Sinha is endorsed by the county Democratic Party; Matthew McKell lists no endorsements (candidate statement; KPBS endorsement guide, Sept. 30, 2026).',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'steven-dobesh',
        name: 'Steven L. Dobesh',
        party: 'NP',
        role: 'Entrepreneur/Parent',
        campaignUrl: 'https://www.stevendobeshforsanteeschools.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Dobesh is a retired Navy commanding officer and a company CFO who has served four years on a school site council. He has not held elected office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Four years on the Carlton Oaks School Site Council, including as chair; commanded Navy units (candidate statement; campaign site).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'President and chief financial officer of an international technology company, overseeing finance, legal and governance (candidate statement).' },
            { criterionId: 'instruction', assessment: 'unknown', evidence: 'No teaching role documented; parent of two Carlton Oaks students.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'School site council work with parents, teachers and administrators; endorsed by the Santee Teachers Association.' },
          ],
        },
        bio: [
          'Dobesh is a Santee parent of two Carlton Oaks School students and a retired naval aviator who served 21 years, including as a commanding officer and at the Pentagon. He is president and CFO of an international technology company and has served four years on the Carlton Oaks School Site Council (candidate statement; campaign site).',
          'He calls himself a fiscal conservative who does not support raising taxes lightly, favors limiting screen time in early grades, and says he would judge any bond by whether it funds essential repairs like roofs, plumbing and HVAC.',
        ],
        scorecard: [
          { topic: 'Budget and taxes', position: '✓✓ Fiscal conservative; CFO experience', comparison: 'Sinha and McKell cite fiscal responsibility less specifically.' },
          { topic: 'Teachers', position: '✓ Calls teachers the most important investment; Santee Teachers Association–endorsed', comparison: 'McKell also pledges support for teachers.' },
          { topic: 'Screen time / technology', position: '✓ Books, handwriting and discussion first in K–3; digital literacy later', comparison: 'McKell and Sinha emphasize AI and STEM.' },
          { topic: 'Parents', position: '✓ Parents as “first and most important advocates”', comparison: 'McKell stresses parents as partners in special education.' },
          { topic: 'Measure BB bond', position: '~ Would weigh bonds by whether they fund essential repairs; no stated position on BB', comparison: 'His Republican and Reform California endorsers oppose BB.' },
        ],
        money: 'No fundraising totals found as of Oct 13, 2026.',
        endorsements: 'Santee Teachers Association (candidate statement); Republican Party of San Diego County; Reform California (KPBS endorsement guide, Sept. 30, 2026).',
      },
      {
        id: 'uday-sinha',
        name: 'Uday Sinha',
        party: 'NP',
        role: 'Software Engineer/Parent',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Sinha is a software engineer and parent with no documented school committee, board or education experience.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board or committee service documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget role documented.' },
            { criterionId: 'instruction', assessment: 'unknown', evidence: 'No teaching role documented; master’s in computer science (University of North Texas) and an MIT xPro AI certificate (candidate statement).' },
            { criterionId: 'community', assessment: 'unknown', evidence: 'Describes himself as a parent; no school or community role documented.' },
          ],
        },
        bio: [
          'Sinha says he has worked more than 30 years as a software engineer at companies including Google, Qualcomm and Meta. He holds a master’s in computer science from the University of North Texas and an MIT xPro certificate in building AI products (candidate statement).',
          'He wants stronger STEM and arts, robotics, magnet programs and scholarships so students can reach their potential.',
        ],
        scorecard: [
          { topic: 'STEM and arts', position: '✓✓ Enhanced STEM, arts, robotics and magnet programs', comparison: 'Dobesh favors limiting early-grade screen time.' },
          { topic: 'Budget', position: '? No stated position', comparison: 'Dobesh is a CFO and self-described fiscal conservative.' },
          { topic: 'Ideology', position: '✓ Democratic Party–endorsed', comparison: 'Dobesh is Republican Party–endorsed.' },
          { topic: 'Measure BB bond', position: '? No stated position', comparison: 'Neither rival has a stated position.' },
        ],
        money: 'No fundraising totals found as of Oct 13, 2026.',
        endorsements: 'San Diego County Democratic Party (KPBS endorsement guide, Sept. 30, 2026).',
      },
      {
        id: 'matthew-mckell',
        name: 'Matthew C. McKell',
        party: 'NP',
        role: 'Federal Employee/Parent',
        campaignUrl: 'https://www.matthewmckellforsanteeschoolboard.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'McKell leads adult education and workforce training programs as a federal civilian and is a retired Navy veteran. He has not held office.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board or committee service documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'Says he has managed complex training programs for two decades; no budget figures published (campaign site).' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'Leads adult education and workforce development programs (candidate statement); parent of a student with an IEP.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Family involved in Santee schools and the PTA for many years (candidate statement).' },
          ],
        },
        bio: [
          'McKell is a retired Navy veteran and federal civilian leader who runs adult education and workforce development programs. His family has been involved in Santee schools and the PTA for years; his son has an IEP, and his daughter attends West Hills High (candidate statement; campaign site).',
          'His priorities are school safety, strong academics, fiscal responsibility and accountability. He wants students taught to use AI “ethically and effectively” without replacing critical thinking or teaching.',
        ],
        scorecard: [
          { topic: 'Special education', position: '✓✓ Parent of a student with an IEP; wants parents treated as partners', comparison: 'Dobesh and Sinha do not address special education.' },
          { topic: 'AI and technology', position: '✓ Teach ethical, effective AI use', comparison: 'Dobesh would limit early-grade screens.' },
          { topic: 'Budget', position: '✓ Lists fiscal responsibility as a priority', comparison: 'Dobesh brings CFO experience.' },
          { topic: 'Measure BB bond', position: '? No stated position', comparison: 'Neither rival has a stated position.' },
        ],
        money: 'No fundraising totals found as of Oct 13, 2026.',
        endorsements: 'None listed on his campaign site as of Oct 13, 2026.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Sinha', '◐', 'Progressive Left voters follow the Democratic Party endorsement to Sinha, though he has said little about equity or labor issues.'],
      ['EL', 'Sinha', '○', 'Establishment Liberals follow their party’s pick weakly, since Dobesh also has the teachers’ union endorsement and more management experience.'],
      ['DM', 'Sinha', '◐', 'Democratic Mainstays back the only Democratic Party–endorsed candidate in the race.'],
      ['OL', 'Sinha', '○', 'Outsider Left voters lean to Sinha’s STEM-and-arts agenda over two Navy veterans, without strong conviction.'],
      ['SS', 'McKell', '○', 'Stressed Sideliners may relate to McKell, a parent of a special-education student who promises to listen first.'],
      ['AR', 'Dobesh', '◐', 'Ambivalent Right voters like Dobesh’s CFO background and cross-partisan support from both teachers and Republicans.'],
      ['PR', 'Dobesh', '◐', 'Populist Right voters back the Reform California–endorsed parent who says parents come first, though the teachers’ union also backs him.'],
      ['CC', 'Dobesh', '●', 'Committed Conservatives favor the Republican-endorsed self-described fiscal conservative with Navy command experience.'],
      ['FF', 'Dobesh', '●', 'Faith and Flag Conservatives back the Republican Party’s pick, a 21-year Navy veteran who stresses parents’ role.'],
    ]),
    counterArguments: [
      'PL/DM (Sinha ◐): But Sinha has no documented school or board experience, while Dobesh is endorsed by the teachers’ union and McKell works in education.',
      'CC/FF (Dobesh ●): But Dobesh also carries the teachers’ union endorsement, so conservatives looking for a rival to the union get a shared candidate.',
    ],
    readingLinks: [
      { label: 'Sample ballot with candidate statements (BT 369)', url: SB_369, summary: 'All three candidates filed statements.' },
      { label: 'Santee School District: board candidate information', url: 'https://www.santeesd.net/board/board_candidate_information' },
    ],
  },

  // ---------------------------------------------------------------- Padre Dam Div 1
  {
    id: 'padre-dam-water-div-1',
    categoryId: 'district',
    title: 'Padre Dam Municipal Water District, Division 1',
    tldrLabel: 'Padre Dam Water, Div. 1',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Padre Dam Municipal Water District provides water and sewer service to Santee and nearby East County communities under a five-member elected board. Directors set water and sewer rates, approve the budget and oversee capital projects. The board approved no internal rate increases for fiscal years 2023 through 2027; recent bill increases were passed through from the County Water Authority and SDG&E (district notice, Jan. 30, 2026).',
      'Padre Dam is a partner in the East County Advanced Water Purification project, which cost more than $1 billion and is meant to supply up to 30% of East County’s drinking water (East County Magazine, Feb. 2025). The current five-year rate plan ends with fiscal 2027, so this board will set the next one.',
    ],
    introParagraphs: [
      'This is a single November contest for a four-year term. Brian Fordyce was appointed to the seat in December 2022 because no one filed against him. Republicans and Reform California endorse Fordyce; Democrats endorse retired police sergeant Bill Woods (KPBS endorsement guide, Sept. 30, 2026).',
    ],
    legalRequirements: 'Registered voter living in Division 1 of the Padre Dam Municipal Water District.',
    qualificationCriteria: [
      { id: 'utility', label: 'Water and sewer system oversight', detail: 'Directors oversee aging pipes, treatment and the purified-water project.' },
      { id: 'finance', label: 'Rates and finance', detail: 'The board sets rates and must balance reliability against ratepayer costs.' },
      { id: 'regional', label: 'Regional water policy', detail: 'Imported water prices and partner projects drive most bill changes.' },
      { id: 'safety', label: 'Security and emergency planning', detail: 'Water systems must be protected from physical and cyber threats and wildfire.' },
    ],
    candidates: [
      {
        id: 'bill-woods',
        name: 'Bill Woods',
        party: 'NP',
        role: 'Retired Police Sergeant',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Woods spent 32 years in law enforcement. He has no documented water-agency, utility or public-finance experience.',
          criteria: [
            { criterionId: 'utility', assessment: 'unknown', evidence: 'No water or utility role documented.' },
            { criterionId: 'finance', assessment: 'unknown', evidence: 'No rate-setting or budget role documented.' },
            { criterionId: 'regional', assessment: 'unknown', evidence: 'No regional water-policy role documented.' },
            { criterionId: 'safety', assessment: 'partial', evidence: '32 years in law enforcement; agency and supervisory scope not stated (candidate statement).' },
          ],
        },
        bio: [
          'Woods is a retired police sergeant who says he spent 32 years in law enforcement; he was raised in East County and raised his family there. His statement does not name his agency (candidate statement).',
          'He pledges to oppose non-essential internal rate increases, scrutinize spending, prioritize physical and cyber security, and expand local water supplies.',
        ],
        scorecard: [
          { topic: 'Rates', position: '✓ Will oppose non-essential internal rate increases', comparison: 'Fordyce points to no internal rate increase during his term.' },
          { topic: 'Security', position: '✓✓ Physical and cyber protection and emergency planning', comparison: 'Fordyce chairs the board’s Security Committee.' },
          { topic: 'Local supply', position: '✓ Supports expanding locally controlled water', comparison: 'Fordyce backs the purified-water program.' },
          { topic: 'Ideology', position: '✓ Democratic Party–endorsed', comparison: 'Fordyce is Republican Party–endorsed.' },
        ],
        money: 'No fundraising totals found as of Oct 13, 2026.',
        endorsements: 'San Diego County Democratic Party (KPBS endorsement guide, Sept. 30, 2026).',
      },
      {
        id: 'brian-fordyce',
        name: 'Brian Fordyce',
        party: 'NP',
        role: 'Incumbent',
        campaignUrl: 'https://www.padredam.org/199/Brian-Fordyce',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Fordyce has served one term as the Division 1 director and chairs the board’s facilities and security committees. He has run a construction company focused on schools and public infrastructure.',
          criteria: [
            { criterionId: 'utility', assessment: 'met', evidence: 'Director since December 2022; chairs the Facilities Development and Operations Committee (district bio).' },
            { criterionId: 'finance', assessment: 'met', evidence: 'Voted on budgets during a term with no internal rate increase; ran a small business for 30 years (district bio; candidate statement).' },
            { criterionId: 'regional', assessment: 'partial', evidence: 'Supports the East County Advanced Water Purification program; no regional board seat documented.' },
            { criterionId: 'safety', assessment: 'met', evidence: 'Chairs the board’s Security Committee (district bio).' },
          ],
        },
        bio: [
          'Fordyce has lived in Santee for more than 35 years and built Fordyce Construction, which works on schools and public infrastructure. He joined the board in December 2022, appointed because no one filed against him, and chairs its facilities and security committees (candidate statement; district bio).',
          'He supports maintaining infrastructure before it fails and backs the purified-water program as a way to cut reliance on imported water.',
        ],
        recordVsChange:
          'In his term the board held internal rates flat, and he chairs two committees. The case for change is that the purified-water project ran past $1 billion during these years, and that this is his first contested election.',
        scorecard: [
          { topic: 'Rates', position: '✓ Says internal costs did not require a rate increase in his term', comparison: 'Woods pledges to oppose non-essential increases.' },
          { topic: 'Infrastructure', position: '✓✓ Maintain before failure; construction background', comparison: 'Woods has no infrastructure record.' },
          { topic: 'Purified water', position: '✓✓ Backs the East County AWP program', comparison: 'Woods supports local supplies generally.' },
          { topic: 'Ideology', position: '✓ Republican Party– and Reform California–endorsed', comparison: 'Woods is Democratic Party–endorsed.' },
        ],
        money: 'No fundraising totals found as of Oct 13, 2026.',
        endorsements: 'Republican Party of San Diego County; Reform California (KPBS endorsement guide, Sept. 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Woods', '◐', 'Progressive Left voters follow the Democratic Party endorsement to Woods over a Republican- and Reform California–endorsed incumbent.', 'A Progressive Left voter focused on running the utility well could back Fordyce, who chairs the facilities and security committees, giving up a Democratic-endorsed seat.'],
      ['EL', 'Fordyce', '◐', 'Establishment Liberals value continuity on the purified-water project and the incumbent’s committee experience over a challenger new to water policy.'],
      ['DM', 'Woods', '◐', 'Democratic Mainstays back the party-endorsed retired sergeant.', 'Democratic Mainstays who prize experience could back Fordyce’s term and committee leadership, accepting a Republican-endorsed director.'],
      ['OL', 'Woods', '○', 'Outsider Left voters lean to the challenger who promises to scrutinize every expenditure.', 'Outsider Left voters could back Fordyce for his hands-on infrastructure record, giving up a vote for a fresh, cost-skeptical voice.'],
      ['SS', 'Fordyce', '○', 'Stressed Sideliners care most about bills, and Fordyce’s term saw no internal rate increase.'],
      ['AR', 'Fordyce', '◐', 'Ambivalent Right voters prefer the experienced incumbent who held internal rates flat.'],
      ['PR', 'Fordyce', '●', 'Populist Right voters back the Reform California–endorsed incumbent.'],
      ['CC', 'Fordyce', '●', 'Committed Conservatives back the Republican Party’s pick with a business background.'],
      ['FF', 'Fordyce', '●', 'Faith and Flag Conservatives follow the Republican endorsement to Fordyce.'],
    ]),
    counterArguments: [
      'CC/PR (Fordyce ●): But Woods also promises to fight non-essential rate increases, and voters skeptical of the costly purified-water project may want a new voice.',
      'PL/DM (Woods ◐): But Woods has no water or utility experience, and Fordyce chairs the committees overseeing facilities and security.',
    ],
    readingLinks: [
      { label: 'Padre Dam: zero internal rate increase for fourth year (Jan. 30, 2026)', url: 'https://www.padredam.org/m/NewsFlash/Home/Detail/417?arc=902' },
      { label: 'East County Magazine: purified-water project passes $1 billion', url: 'https://www.eastcountymagazine.org/advanced-water-purification-project-bursts-past-1-billion' },
      { label: 'Sample ballot with candidate statements (BT 369)', url: SB_369 },
    ],
  },

  // ---------------------------------------------------------------- Measure Y
  {
    id: 'santee-measure-y',
    categoryId: 'local-measures',
    title: 'Santee Measure Y — 1-cent sales tax for 10 years',
    tldrLabel: 'Santee Measure Y — Sales tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure Y would add a 1% general sales tax in Santee, raising the combined rate from 7.75% to 8.75% for 10 years and bringing in about $14 million a year. Santee has never had its own add-on sales tax since incorporating in 1980; the city says its balanced budget can’t cover about $333 million in unfunded roads, storm drains, bridges, parks and fire stations.',
    ],
    introParagraphs: [
      'The council placed it on the ballot 4–1 on June 24, 2026, with Vice Mayor Ronn Hall voting no; he said the city had studied a half cent (East County Magazine; KPBS). In 2024 voters rejected Measure S, a firefighter-led half-cent tax for fire stations, with about 52% voting no. The San Diego County Taxpayers Association, which opposed Measure S, supports Measure Y; the county Republican Party and Reform California oppose it, and the county Democratic Party took no position. No public polling or committee fundraising totals were found.',
    ],
    measure: {
      question:
        'To provide funding for City of Santee services and infrastructure, such as fixing streets and potholes; keeping streets, sidewalks, parks and public facilities safe, clean, and well-maintained; repairing/replacing aging infrastructure and stormdrains; local traffic management; fire protection, paramedic, crime prevention, and 911 emergency response, shall City of Santee’s measure establishing a one cent sales tax be adopted, providing approximately $14,000,000 annually for city services for 10 years, with independent audits, citizens’ committee oversight, and all funds locally controlled?',
      yesMeans: 'Adds a 1% city sales tax in Santee from April 2027 to March 2037, raising about $14 million a year for any city purpose, with a citizens’ committee reviewing spending.',
      noMeans: 'Keeps Santee’s sales tax at 7.75%, and the city’s unfunded road, storm-drain and fire-station projects wait for other money.',
      funding: {
        asOf: 'Oct. 13, 2026',
        note: 'News coverage reports no fundraising totals and names no Yes or No committee. City measure committees file with the Santee City Clerk’s NetFile portal, which we couldn’t search without its interactive form.',
        sources: [
          { label: 'City of Santee: NetFile campaign disclosure portal', url: SANTEE_NETFILE },
          { label: 'KPBS: Measure Y explainer (Oct. 1, 2026)', url: 'https://www.kpbs.org/news/politics/2026/10/01/measure-y-santee-sales-tax-increase' },
        ],
      },
      positions: [
        { org: 'San Diego County Democratic Party', kind: 'party', position: 'No position', url: KPBS_ENDORSE },
        { org: 'Republican Party of San Diego County', kind: 'party', position: 'No', url: 'https://www.sandiegorepublicans.org/voter-guides/san-diego' },
      ],
      measureType: 'City general tax (transactions and use tax), placed by the City Council',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'About $14 million a year, roughly $140 million over 10 years, per the city attorney’s analysis and the Taxpayers Association. Operative April 1, 2027; expires March 31, 2037 unless voters extend it.',
      supporters: 'Mayor John Minto; Santee Firefighters Association; Santee Mobilehome Owners Action Committee; San Diego County Taxpayers Association (ballot argument).',
      opponents: 'Tony Shephard, James Wilson, Allie Senterfitt and other residents (ballot argument); Reform California; Republican Party of San Diego County.',
      voterConnection: [
        'Anyone buying taxable goods in Santee pays $1 more per $100; groceries, prescription medicine and diapers are exempt. Shoppers from nearby communities pay too.',
        'Santee would go from one of the county’s lowest sales-tax rates to 8.75%; Hall notes that County Measure B, a separate countywide half-cent tax on the same ballot, could push it to about 9.25%.',
        'The money goes to the general fund, so the spending plan is a promise, not a legal guarantee.',
        'Drivers, homeowners near failing storm drains, and northeast Santee residents with slower fire response are the most direct beneficiaries if the plan is followed.',
      ],
      mechanismBullets: [
        'Rate: 1% added to the current 7.75%, for 10 years (April 1, 2027 to March 31, 2037); any extension needs another vote.',
        'General tax: revenue can fund any lawful city purpose (city attorney analysis).',
        'Oversight: a five-member citizens’ committee appointed by the council reviews an annual spending plan and the audit and reports publicly, but can only recommend.',
        'Draft 10-year spending plan (June 2026): about $60M for pavement, $53M for fire stations and engines (including an interim northeast Station 24 and a Station 4 remodel), $21.9M for storm drains, $11.4M for bridges, $7.5M for parks; it exceeds projected revenue, so Fire Station 20 would be only about half funded (Taxpayers Association).',
        'The city says it won’t issue debt that outlasts the tax.',
      ],
      argumentsFor: [
        'Infrastructure is aging and only one permanent fire station has been added since 1964; delays raise costs.',
        'The Taxpayers Association calls Santee lean and well run, with a 22% reserve and clean audits, and backs the measure.',
        'It sunsets in 10 years, exempts necessities, and visitors share the cost.',
        'A published project list and citizen oversight committee show where the money is meant to go.',
      ],
      argumentsAgainst: [
        'A full cent is double the half cent the city first studied, and Santee would lose its low-tax edge (Hall; ballot argument).',
        'As a general tax, the council can spend it on anything, including raises or projects not on the list.',
        'Opponents’ ballot argument says a July 2026 audit found improper mileage payments to officials; we could not find the audit or news coverage of it.',
        'Sales taxes fall hardest on lower-income households, and voters rejected a smaller tax in 2024.',
      ],
      readingLinks: [
        { label: 'City of Santee: Measure Y page', url: 'https://www.cityofsanteeca.gov/our-community/local-funding---measure-y', summary: 'City budget context, spending plan and feasibility study slides.' },
        { label: 'San Diego County Taxpayers Association analysis (July 2026)', url: SDCTA_Y, summary: 'Detailed project list and why it supports Y after opposing 2024’s Measure S.' },
        { label: 'KPBS: Santee voters to weigh in on 1% sales tax (Sept. 25, 2026)', url: 'https://www.kpbs.org/news/politics/2026/09/25/santee-voters-to-weigh-in-on-1-general-sales-tax-increase-this-november' },
        { label: '10News: Santee voters to decide on one-cent tax', url: 'https://www.10news.com/news/local-news/santee-voters-to-decide-on-proposed-one-cent-sales-tax-increase' },
        { label: 'Sample ballot: analysis and arguments (BT 369)', url: SB_369 },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters support funding fire response and public infrastructure, though they dislike a regressive sales tax.'],
      ['EL', 'Yes', '●', 'Establishment Liberals trust the documented project list, sunset and oversight, endorsed even by the Taxpayers Association.'],
      ['DM', 'Yes', '◐', 'Democratic Mainstays back firefighters and city services, though their party took no position.'],
      ['OL', 'Yes', '○', 'Outsider Left voters want the services but are wary of a regressive tax the council can spend freely.'],
      ['SS', 'No', '◐', 'Stressed Sideliners feel every price increase and are skeptical of paying more at the register for 10 years.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters may accept a temporary tax that a taxpayer watchdog endorses for roads and fire stations, though their party opposes it.'],
      ['PR', 'No', '●', 'Populist Right voters oppose a tax increase that Reform California is fighting and doubt City Hall’s accountability.'],
      ['CC', 'No', '◐', 'Committed Conservatives follow the Republican Party against a new tax, despite the Taxpayers Association’s support.'],
      ['FF', 'No', '●', 'Faith and Flag Conservatives oppose raising taxes and follow the Republican Party.'],
    ]),
    counterArguments: [
      'CC/PR (No): But the Taxpayers Association, usually a tax skeptic, opposed 2024’s Measure S and supports this one because it sunsets and has a costed plan.',
      'EL (Yes ●): But it is a general tax, so the project list is not binding, and the oversight committee is appointed by the council and can only advise.',
    ],
  },

  // ---------------------------------------------------------------- Measure BB
  {
    id: 'santee-sd-measure-bb',
    categoryId: 'local-measures',
    title: 'Santee SD Measure BB — $30M school bond',
    tldrLabel: 'Santee SD Measure BB — School bond',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure BB would let the Santee School District borrow $30 million for repairs at its TK–8 schools, repaid by property owners at an estimated average of $12.62 per $100,000 of assessed value through 2049–50. The district says its schools are 50 to 70 years old and engineers found more than $72 million in repair needs; BB covers less than half (KPBS).',
    ],
    introParagraphs: [
      'The board placed it on the ballot in June; trustee Tracie Thill voted no, citing voters’ 2024 rejection of a similar bond (Measure NN, $30.62 million), soft costs and fiscal restraint (KPBS). The district’s 2006 and 2018 bond money has been spent, per the Taxpayers Association, which supports BB. No argument against was filed. The county Republican Party and Reform California oppose it; the Democratic Party took no position.',
    ],
    measure: {
      question:
        'With funds that cannot be taken by the State and spent elsewhere, and no increase in tax rates, shall Santee Elementary School District’s measure: repairing leaky roofs, plumbing, sewer systems; updating inefficient heating, ventilation, air-conditioning systems; building multipurpose instruction classrooms; repairing aging schools, classrooms be adopted authorizing $30 million of bonds with legal rates, average levies below $13 per $100,000 of assessed valuation ($2.2 million annually) while outstanding, audits, independent oversight, and full public disclosure of all spending?',
      yesMeans: 'Authorizes $30 million in Santee School District bonds for repairs and upgrades, repaid by property owners at an estimated average of $12.62 per $100,000 of assessed value through 2049–50.',
      noMeans: 'Blocks the new bonds; property owners keep paying for earlier bonds until they are retired, and repairs would need other funding.',
      funding: {
        asOf: 'Oct. 13, 2026',
        note: 'KPBS reports no fundraising figures for either side, and no argument against was filed. School measure committees file with the county Registrar, whose portal we couldn’t search without its interactive form.',
        sources: [
          { label: 'KPBS: San Diego County school bond measures guide (Oct. 2, 2026)', url: KPBS_BONDS },
          { label: 'San Diego County Registrar of Voters: campaign finance public portal', url: COUNTY_CAMPAIGN_PORTAL },
        ],
      },
      positions: [
        { org: 'San Diego County Democratic Party', kind: 'party', position: 'No position', url: KPBS_ENDORSE },
        { org: 'Republican Party of San Diego County', kind: 'party', position: 'No', url: 'https://www.sandiegorepublicans.org/voter-guides/san-diego' },
      ],
      measureType: 'School facilities bond (general obligation)',
      voteThreshold: '55%',
      fiscalImpact:
        'Average levy about $12.62 per $100,000 of assessed value, highest about $19.14 (from 2030–31), collected through 2049–50; total debt service about $49.7 million (tax rate statement).',
      supporters: 'Trustee Barbara Ryan; former oversight committee chair Linda Vail; district Teacher of the Year Michelle Corderman; San Diego County Taxpayers Association (ballot argument).',
      opponents: 'No argument against filed; Reform California and the Republican Party of San Diego County recommend No.',
      voterConnection: [
        'Property owners in the district pay; renters may pay indirectly.',
        'The “no increase in tax rates” claim means the new levy roughly replaces old bond payments; without BB, the rate would likely fall as earlier bonds retire (KPBS).',
        'It pays for buildings and equipment, not salaries.',
      ],
      mechanismBullets: [
        'Principal: up to $30 million; total repayment about $49.7 million.',
        'Projects: roofs, plumbing, sewer, HVAC, keyless entry and emergency communication systems, accessibility, shade structures, fencing, playgrounds and a possible multipurpose space.',
        'Unlocks state matching funds the district says it would otherwise miss.',
        'Citizens’ oversight committee and annual performance and financial audits.',
      ],
      argumentsFor: [
        'Aging schools need roof, plumbing and HVAC work that costs more if delayed.',
        'The Taxpayers Association supports it, and the rate is designed to stay roughly flat.',
        'Bond money can’t go to administrator pay and must be audited.',
        'No argument against was filed.',
      ],
      argumentsAgainst: [
        'Voters rejected a $30.62 million bond in 2024; trustee Thill opposed asking again.',
        'It extends property-tax payments to 2050 and costs about $49.7 million to repay $30 million.',
        'It covers less than half the identified need, so more requests are likely.',
        'Thill questioned soft costs and how representative the district’s survey was.',
      ],
      readingLinks: [
        { label: 'KPBS: San Diego County school bond measures guide (Oct. 2, 2026)', url: KPBS_BONDS, summary: 'BB details, the board vote and Thill’s objections.' },
        { label: 'Santee School District: 2024 Measure NN bond page', url: 'https://www.santeesd.net/2024bond' },
        { label: 'Sample ballot: analysis, tax rate statement and argument (BT 369)', url: SB_369 },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters support investing in safe, modern public school buildings.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value audits, oversight and the Taxpayers Association’s support.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays back public-school repairs funded at a roughly flat rate.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters want better schools but note the district’s 2024 bond failed.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners may accept it because the stated rate doesn’t rise, though many won’t follow the details.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters can accept a modest bond endorsed by the Taxpayers Association for basic repairs.'],
      ['PR', 'No', '◐', 'Populist Right voters see a repeat ask after voters said no in 2024.'],
      ['CC', 'No', '◐', 'Committed Conservatives follow the Republican Party against new long-term debt, though the Taxpayers Association supports it.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives follow the Republican Party and Reform California.'],
    ]),
    counterArguments: [
      'CC/PR (No ◐): But no argument against was even filed, and the Taxpayers Association endorses BB as a modest bond for basic repairs.',
      'PL/EL (Yes ●): But voters rejected nearly the same bond in 2024, and BB keeps property owners paying until 2050.',
    ],
  },
];
