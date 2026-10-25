import type { Race, QualificationCriterion } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Temecula-area local contests (Riverside County): Temecula City Council District 5, Temecula Valley Unified
 * trustee areas 2 and 4, Mt. San Jacinto Community College District Trustee Area 3, and TVUSD Measure S.
 * All offices are nonpartisan; party or group endorsements below are context, not ballot labels.
 *
 * Names and ballot designations are from the Riverside County Registrar's Contest/Candidate Proof List
 * (printed Sept 11, 2026). That list is in filing order; Riverside rotates ballot order by its randomized
 * alphabet, so candidates here follow the order of the county's printed candidate statements.
 * Researched Oct 14, 2026.
 */

const NF_NOTE =
  'No campaign finance totals found in news coverage as of Oct 14, 2026; Riverside County posts filings on its NetFile portal (https://netfile.com/public/CTRIV/campaign), which needs a search form we did not use.';

const SCHOOL_LEGAL =
  'U.S. citizen, 18 or older, registered voter living in the trustee area; not an employee of the district (Cal. Education Code § 35107).';

const SCHOOL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Board governance and oversight', detail: 'Trustees adopt policy, hire and evaluate the superintendent and must follow open-meeting, education and labor law as one vote of five.' },
  { id: 'budget', label: 'Budget and fiscal oversight', detail: 'The board adopts a multi-hundred-million-dollar budget, approves contracts and would oversee Measure S bond spending if it passes.' },
  { id: 'instruction', label: 'Knowledge of teaching and student outcomes', detail: 'Trustees approve curriculum, textbooks and student policies.' },
  { id: 'community', label: 'Parent, staff and community engagement', detail: 'A board that has spent years in public conflict needs trustees who can work with families, employees and each other.' },
];

const COUNCIL_LEGAL = 'U.S. citizen, 18 or older, registered voter living in Council District 5 of the City of Temecula.';

const COUNCIL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Municipal policy and governance', detail: 'The five-member Council passes city laws, directs the city manager and sits on regional transit and planning boards.' },
  { id: 'budget', label: 'Budget and finance', detail: 'The Council adopts the city budget, sets fees and decides how to spend the city’s sales tax revenue.' },
  { id: 'landuse', label: 'Land use, traffic and infrastructure', detail: 'The Council decides zoning, development approvals and road projects, and is fighting SDG&E’s proposed Golden Pacific Powerlink.' },
  { id: 'constituent', label: 'District knowledge and constituent service', detail: 'Councilmembers represent one district’s neighborhoods and answer residents’ requests.' },
];

export const RACES_TEMECULA: Race[] = [
  // ───────────────────────── Temecula City Council, District 5 ─────────────────────────
  {
    id: 'temecula-council-d5',
    categoryId: 'city',
    title: 'Temecula City Council, District 5',
    tldrLabel: 'Temecula Council D5',
    seatContext: 'Incumbent running',
    kind: 'candidates',
    stakesParagraphs: [
      'The Temecula City Council sets the city budget, approves development and zoning, funds police and fire contracts and picks a mayor from among its members each year. Each of the five members is elected by one district for a four-year term; Temecula has no term limits.',
      'District 5 is the only council seat on the 2026 ballot. The next council will decide growth and traffic questions and continue the city’s fight against SDG&E’s proposed Golden Pacific Powerlink, a 500-kilovolt line the Council opposed unanimously in 2026.',
    ],
    introParagraphs: [
      'Incumbent Zak Schwank, first elected in 2018 and mayor in 2023, faces three challengers: scientist and former city commissioner Yuan Hawkes, grocery worker Laurel LaMont and firefighter-paramedic Russell Shirley. It is a single November contest with no primary; the top vote-getter wins.',
      'Schwank lists no party (Wikipedia describes him as an independent) and was the lone vote against a 2025 council resolution opposing Proposition 50. The California Republican Assembly, a conservative volunteer group, endorsed Hawkes. Little has been published about LaMont or Shirley beyond their candidate statements.',
    ],
    readingLinks: [
      { label: 'Patch: Temecula voter guide, Nov. 3, 2026', url: 'https://patch.com/california/temecula/temecula-voter-guide-whats-nov-3-2026-ballot-voting-more', summary: 'Every contest and measure on Temecula ballots.' },
      { label: 'City of Temecula: election and candidate information', url: 'https://temeculaca.gov/election', summary: 'Qualified candidates and filing dates.' },
      { label: 'City of Temecula: Golden Pacific Powerlink updates', url: 'https://www.temeculaca.gov/powerlinkcomments', summary: 'The city’s documents opposing SDG&E’s proposed transmission line.' },
    ],
    legalRequirements: COUNCIL_LEGAL,
    qualificationCriteria: COUNCIL_CRITERIA,
    candidates: [
      {
        id: 'yuan-hawkes',
        name: 'Yuan Hawkes',
        party: 'NP',
        role: 'Community Volunteer / Educator',
        campaignUrl: 'https://dryuan4temecula.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Hawkes served on the city’s Community Services Commission and on a charter school board, per her statement. She has not held elected city office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Temecula Community Services Commissioner 2022–25 and Springs Charter School board director 2019–22 (her county candidate statement).' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No city budget role is documented; charter-board budget duties are not described.' },
            { criterionId: 'landuse', assessment: 'partial', evidence: 'Platform covers traffic signal timing, roundabouts and “push back on overbuilding”; no land-use decision record is documented.' },
            { criterionId: 'constituent', assessment: 'partial', evidence: '19-year Temecula resident, former HOA president and Toastmasters area director (statement).' },
          ],
        },
        bio: [
          'Hawkes holds a Ph.D. in molecular genetics from the University of Illinois Chicago and worked as a cancer research scientist. She is a homeschool educator and has lived in Temecula for 19 years (candidate statement).',
          'She served on the Temecula Community Services Commission (2022–25) and the Springs Charter School board (2019–22). We could not reach her campaign site or find news coverage of her campaign.',
        ],
        scorecard: [
          { topic: 'Traffic', position: '✓✓ Signal coordination, telework incentives and roundabouts at problem intersections', comparison: 'Schwank also lists easing congestion; Shirley lists traffic and infrastructure.' },
          { topic: 'Growth/housing', position: '✗ Wants local control and to “push back on overbuilding”', comparison: 'LaMont wants homes “where the people who work here can also live.”' },
          { topic: 'Business regulation', position: '✓ Reduce regulations so businesses can open and hire', comparison: 'No other candidate makes deregulation a theme.' },
          { topic: 'Open space', position: '✓ Preserve open space', comparison: 'Schwank stresses parks and trails.' },
          { topic: 'Public safety', position: '? Slogan “Safe, Smart and Strong”; no detail', comparison: 'Schwank and Shirley put police and fire support first.' },
        ],
        money: NF_NOTE,
        endorsements: 'California Republican Assembly (Riverside County unit list, accessed Oct 14, 2026). No other endorsements found.',
        notes: ['Source: https://cragop.org/riverside-county/'],
      },
      {
        id: 'laurel-lamont',
        name: 'Laurel LaMont',
        party: 'NP',
        role: 'Grocery Worker',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'LaMont is a Trader Joe’s crew member who says she has studied housing and land-use policy and attends local government meetings. No public office or commission service is documented.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board, commission or elected service is documented; she describes herself as “a regular participant in local government.”' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget role is documented.' },
            { criterionId: 'landuse', assessment: 'partial', evidence: 'Says she spent years studying housing policy, land use and local government (statement); no formal role.' },
            { criterionId: 'constituent', assessment: 'partial', evidence: 'Raised her son in Temecula; founder of a group called Upward Community, which we could not find described anywhere else.' },
          ],
        },
        bio: [
          'LaMont is a single mother who raised her son in Temecula and works as a Trader Joe’s crew member. She founded a group called Upward Community (candidate statement).',
          'Her statement stresses transparent government, housing for people who work in Temecula and neighborhoods where children can walk and bike safely. We found no news coverage, campaign site or endorsements.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓✓ Wants housing so local workers can live in Temecula', comparison: 'Hawkes wants to push back on overbuilding.' },
          { topic: 'Walking/biking safety', position: '✓ Safe, connected neighborhoods for walking and biking', comparison: 'Schwank has backed bike lanes and trails on the Council.' },
          { topic: 'Transparency', position: '✓ Transparent, accountable government', comparison: 'Shirley and Hawkes make similar pledges.' },
          { topic: 'Public safety', position: '? No specific position', comparison: 'Schwank and Shirley stress police and fire support.' },
        ],
        money: NF_NOTE,
        endorsements: 'None found as of Oct 14, 2026.',
      },
      {
        id: 'russell-shirley',
        name: 'Russell Shirley',
        party: 'NP',
        role: 'Firefighter / Paramedic',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Shirley is a firefighter-paramedic and veteran. He lists no government, commission or budget experience, and his employer is not named in his statement.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected or appointed service is documented; he says he is “not a career politician.”' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget role is documented.' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'Lists traffic and infrastructure as priorities without specifics.' },
            { criterionId: 'constituent', assessment: 'partial', evidence: 'Temecula resident and first responder (statement); years of residence and fire agency not stated.' },
          ],
        },
        bio: [
          'Shirley is a firefighter-paramedic, a veteran and a Temecula resident. His statement promises to support police and firefighters, improve traffic and infrastructure, and handle taxpayer money carefully.',
          'We found no campaign site, news coverage or endorsements, and his statement does not name his fire agency or branch of service.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓✓ Support police, firefighters and emergency responders', comparison: 'Schwank is endorsed by CAL FIRE Firefighters.' },
          { topic: 'Traffic/infrastructure', position: '✓ Improve traffic and infrastructure; no specifics', comparison: 'Hawkes proposes signal timing and roundabouts.' },
          { topic: 'Budget', position: '✓ “Responsible stewardship of taxpayer dollars”', comparison: 'Schwank points to the city’s debt-free status.' },
          { topic: 'Transparency', position: '✓ Transparent, accessible City Hall', comparison: 'LaMont and Hawkes make similar pledges.' },
        ],
        money: NF_NOTE,
        endorsements: 'None found as of Oct 14, 2026.',
      },
      {
        id: 'zak-schwank',
        photoSlug: 'zak-schwank',
        name: 'Zak Schwank',
        party: 'NP',
        role: 'Temecula Council Member',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Schwank has represented District 5 since December 2018, served as mayor in 2023 and chairs the Riverside Transit Agency board.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Councilmember since 2018, re-elected 2022, mayor in 2023; Riverside Transit Agency chair and SCAG Regional Council member (city bio).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on eight city budgets; president or vice president of the Temecula Community Services District in several years (city bio).' },
            { criterionId: 'landuse', assessment: 'met', evidence: 'Voted on development and the 2026 unanimous Powerlink opposition; secured Highway Safety Improvement Program grants for traffic safety (Wikipedia, citing local outlets).' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Has represented District 5 for eight years and lived in Temecula about 25 years (statement).' },
          ],
        },
        bio: [
          'Schwank was elected to the Council in 2018, re-elected in 2022 and served as mayor in 2023. He chairs the Riverside Transit Agency board and sits on the Southern California Association of Governments’ Regional Council. He holds degrees from Mt. San Jacinto College and Cal State San Marcos and is a UC Riverside Ph.D. student (city bio).',
          'He co-founded the Temecula Bike Train in 2011 and has backed bike lanes, trails and traffic-safety grants. In 2024 he cast the lone vote against drafting a council term-limits measure, and in September 2025 the lone vote against a resolution opposing Proposition 50, saying the city “should probably just stay out of it” (Patch).',
        ],
        recordVsChange:
          'Schwank offers eight years on the Council, a regional transit leadership role and a record on traffic-safety and trail projects, and he says the city is debt-free. The case for change is that challengers want a different direction on growth (Hawkes) or housing (LaMont), and that Temecula has no term limits; none of the challengers has held elected office.',
        scorecard: [
          { topic: 'Budget', position: '✓ Cites the city’s debt-free status and pledges to keep it', comparison: 'Shirley and Hawkes pledge careful spending without a record to point to.' },
          { topic: 'Traffic/transit', position: '✓✓ Riverside Transit Agency chair; secured traffic-safety grants', comparison: 'Hawkes proposes signal coordination and roundabouts.' },
          { topic: 'Powerlink', position: '✓ Pledges to fight SDG&E’s Powerlink; Council opposed it unanimously in 2026', comparison: 'Challengers have not addressed it in their statements.' },
          { topic: 'Homelessness', position: '✓ Outreach and encampment cleanup', comparison: 'No challenger addresses homelessness in their statement.' },
          { topic: 'Partisan resolutions', position: '✗ Voted against the Council’s 2025 resolution opposing Prop 50', comparison: 'The other four councilmembers voted for it.' },
        ],
        money: NF_NOTE,
        endorsements: 'CAL FIRE Firefighters and former mayors and councilmembers, per his county candidate statement (filed summer 2026). No party endorsement found.',
        notes: [
          'Sources: https://temeculaca.gov/CouncilDistrict5, https://patch.com/california/temecula/temecula-city-council-majority-votes-oppose-prop-50, https://en.wikipedia.org/wiki/Zak_Schwank',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'LaMont', '○', 'Leftward Progressives favor LaMont’s focus on housing for local workers and walkable, bikeable neighborhoods, a weak lean because LaMont has published little and has no public record.', 'Leftward Progressives who weigh experience could back Schwank, an eight-year councilmember who champions bike lanes and transit and refused to join the Council’s resolution against Prop 50. They would give up LaMont’s housing-first message for an incumbent who has not made housing his theme.'],
      ['LL', 'Schwank', '●', 'Loyal Liberals value Schwank’s regional transit leadership, eight years of council experience and his refusal to put the city on record against Prop 50.'],
      ['LO', 'LaMont', '◐', 'Left-Out Left voters like LaMont, a working grocery employee and single mother who wants housing local workers can afford and is not part of City Hall.', 'Left-Out Left voters who put experience first could choose Schwank, who has run regional transit and voted against the Council’s partisan Prop 50 resolution. The trade-off is backing an eight-year incumbent instead of the working-class outsider they prefer.'],
      ['OO', 'Schwank', '◐', 'Order and Opportunity Left voters want steady management and safety, and Schwank is endorsed by CAL FIRE Firefighters, secured traffic-safety grants and points to a debt-free city, though Shirley’s first-responder focus also appeals.'],
      ['TM', 'Schwank', '○', 'Tuned-Out Middle voters lean toward the incumbent with a known record on traffic, parks and city finances, with little to judge the challengers on.'],
      ['PP', 'Schwank', '●', 'Pragmatic and Polite Right voters reward Schwank’s steady, nonpartisan record, including his view that the city should stay out of partisan state fights like Prop 50, and his eight years of budget and traffic work.'],
      ['UR', 'Hawkes', '◐', 'Unconventional Right voters like Hawkes’s push to cut business regulations and push back on overbuilding, and prefer her to an incumbent who declined to oppose Prop 50.', 'Unconventional Right voters who weigh experience could stay with Schwank, an eight-year councilmember and former mayor who backs police and fire and fights the Powerlink. They would accept Schwank’s vote against the Council’s Prop 50 resolution and the loss of a CRA-endorsed newcomer.'],
      ['FC', 'Hawkes', '●', 'Faith First Conservatives back Hawkes, a homeschool educator endorsed by the conservative California Republican Assembly, over an incumbent who declined to oppose Prop 50.'],
      ['NA', 'Hawkes', '●', 'No Apologies Right voters back Hawkes, the California Republican Assembly’s pick, who pairs deregulation for business with limits on growth.'],
    ]),
    counterArguments: [
      'NA (Hawkes ●): But consider experience, because Hawkes’s public service is an advisory commission and a charter school board, while Schwank has eight years of council votes and chairs the regional transit agency.',
      'LL (Schwank ●): But consider a new voice, because Temecula has no term limits, Schwank has not published a housing plan, and challengers argue for a different direction on growth or housing.',
      'LO (LaMont ◐): But consider how little is known, because LaMont has no board, commission or budget experience and the group she founded could not be found described anywhere else.',
    ],
  },

  // ───────────────────────── TVUSD Trustee Area 2 ─────────────────────────
  {
    id: 'tvusd-trustee-area-2',
    categoryId: 'school',
    title: 'Temecula Valley Unified School District, Trustee Area 2',
    tldrLabel: 'TVUSD Trustee Area 2',
    seatContext: 'Incumbent running',
    kind: 'candidates',
    stakesParagraphs: [
      'The Temecula Valley Unified board sets the budget, hires the superintendent and adopts curriculum and student policies for one of Riverside County’s largest school districts. Each of the five trustees is elected by one trustee area for four years.',
      'Since 2022 the board has drawn statewide attention: a 2022 ban on critical race theory that an appeals court blocked in May 2025, a 2023 textbook fight with Gov. Newsom, the 2024 recall of its president, and years of 3-2 votes and public feuds among trustees. Three of five seats are on this ballot, so the outcome will decide who controls the board.',
    ],
    introParagraphs: [
      'Incumbent Emil Barham won this seat in November 2024 to finish the term of Danny Gonzalez, who resigned; this election is for a full four-year term. He faces businessman Brian Emmert, who is endorsed by the California Republican Assembly, a conservative group that also backs Joseph Komrosky in Area 4.',
      'Barham was elected with Republican Party of Riverside County backing in 2024 but has since clashed with the trustees now in the majority. In April 2026 the board censured him 3-2 over remarks about another trustee’s spouse; he and Steven Schwartz voted no. In September 2026 Trustee Melinda Anderson was recorded placing a device under his and Schwartz’s desk; the Sheriff is investigating (Riverside Record, Oct 2026).',
    ],
    readingLinks: [
      { label: 'Valley News: Barham censured (Apr 2026)', url: 'https://myvalleynews.com/blog/2026/04/23/tvusd-board-trustee-barham-censured-over-threats-towards-dr-anderson-and-husband/', summary: 'The censure resolution and its corrective measures.' },
      { label: 'Riverside Record: recording-device investigation (Oct 2026)', url: 'https://riversiderecord.org/tvusd-melinda-anderson-surreptitious-recording-investigation/', summary: 'Sheriff’s investigation of a device placed under Barham’s and Schwartz’s desk; board alignments.' },
      { label: 'Patch: Temecula voter guide, Nov. 3, 2026', url: 'https://patch.com/california/temecula/temecula-voter-guide-whats-nov-3-2026-ballot-voting-more', summary: 'All three TVUSD contests and Measure S.' },
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'emil-barham',
        name: 'Emil Barham',
        party: 'NP',
        role: 'Governing Board Member Temecula Valley Unified School District, Trustee Area 2',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Barham has been the Area 2 trustee since December 2024 and was elected board clerk that month. He says he taught for 24 years and earlier worked in accounting and finance.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Trustee since December 2024; elected board clerk in December 2024 (district minutes summarized by Wikipedia/Patch); created an accountability subcommittee and a special education subcommittee (his statement).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on two district budgets; says he worked in accounting, finance and operations before teaching (statement).' },
            { criterionId: 'instruction', assessment: 'met', evidence: 'Says he has taught from elementary school through university for 24 years (statement); employers not named.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Censured by the board in April 2026 for remarks deemed threatening toward a trustee’s spouse; he and Anderson trade accusations of threats and surveillance (Valley News, Riverside Record).' },
          ],
        },
        bio: [
          'Barham won the Area 2 seat in November 2024 with Republican Party of Riverside County backing, after Danny Gonzalez resigned. He says he has taught for 24 years, from elementary school through university, after a first career in accounting and finance.',
          'He lists results including an accountability and goals subcommittee, a special education subcommittee, parental-notification policies and reinstating an eighth-grade civics test. In 2025 he often voted with Melinda Anderson and Steven Schwartz; by 2026 he and Schwartz were in the minority against Komrosky, Wiersma and Anderson.',
        ],
        recordVsChange:
          'Barham brings two years on the board, a stint as clerk and teaching and finance experience, and he presents himself as a check on the current board majority. The case for change is the April 2026 censure and the open feud between him and other trustees, which Emmert argues distracts from students.',
        scorecard: [
          { topic: 'Parental notification', position: '✓ Says he developed “common-sense parental notifications policies focused on transparency”', comparison: 'Emmert says parents should be informed, without a specific policy.' },
          { topic: 'Curriculum', position: '✓ Age-appropriate curriculum; reinstated the eighth-grade Constitution and civics test', comparison: 'Emmert wants a “back to fundamentals” focus on reading, writing and math.' },
          { topic: 'Academic results', position: '✓ Credits his accountability subcommittee for higher math, ELA and science scores (self-reported)', comparison: 'Emmert promises a results focus but has no record.' },
          { topic: 'Board conduct', position: '✗ Censured 3-2 in April 2026; says he is being targeted', comparison: 'Emmert runs on “results, not politics or personal conflict.”' },
          { topic: 'Measure S bond', position: '? No published position', comparison: 'Emmert has not taken a position either.' },
        ],
        money: NF_NOTE,
        endorsements: 'Republican Party of Riverside County endorsed him in 2024 (2024 RPRC list). No 2026 endorsements found as of Oct 14, 2026.',
        redFlags: [
          {
            severity: 'notable',
            status: 'official-finding',
            text: 'In April 2026 the TVUSD board voted 3-2 to censure Barham under its Code of Ethics bylaw, finding that remarks at a December 2025 meeting about wanting to “go after” another trustee’s spouse were reasonably perceived as retaliatory. The resolution directs him to avoid intimidation, harassment and uninvited confrontations; it does not limit his vote. Barham and Schwartz voted no, and Barham has denied threatening Anderson; he did not respond to Valley News before publication.',
            whyItMatters: 'A trustee must work with four colleagues and district staff, and a formal ethics censure bears on whether he can do that.',
            sources: [
              { label: 'Valley News (Apr 23, 2026)', url: 'https://myvalleynews.com/blog/2026/04/23/tvusd-board-trustee-barham-censured-over-threats-towards-dr-anderson-and-husband/' },
              { label: 'Riverside Record (Oct 2026)', url: 'https://riversiderecord.org/tvusd-melinda-anderson-surreptitious-recording-investigation/' },
            ],
          },
        ],
        notes: [
          'The censure was passed by the three trustees he has clashed with, so supporters see it as political; it was not a finding by a court or state agency.',
          'In September 2026 Trustee Melinda Anderson was recorded placing a device under the desk Barham shares with Schwartz; the Riverside County Sheriff is investigating. Barham called it an attempt to use surveillance against his re-election. — https://myvalleynews.com/blog/2026/10/09/temecula-school-trustee-faces-investigation/',
        ],
      },
      {
        id: 'brian-emmert',
        name: 'Brian Emmert',
        party: 'NP',
        role: 'Father / Businessman',
        campaignUrl: 'https://brian4schoolboard.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Emmert says he has spent decades leading large teams and managing multimillion-dollar budgets, and both his sons went through TVUSD. He has not served on a public board, and his employer is not named.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board or elected service is documented.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Says he has managed multimillion-dollar budgets for more than 25 years (statement; campaign site says 30); employer and role not published.' },
            { criterionId: 'instruction', assessment: 'unknown', evidence: 'No teaching or education-sector role is documented.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Temecula Valley resident 25+ years; two sons graduated from Chaparral High School (statement).' },
          ],
        },
        bio: [
          'Emmert has lived in the Temecula Valley for more than 25 years; his two sons attended TVUSD from kindergarten through Chaparral High School, and one is on active duty in the Navy. He describes a business career leading large teams and budgets but does not name his employer.',
          'He says the board should focus on “results, not politics or personal conflict,” with priorities of academics, campus safety, budgeting, transparency and parent partnership.',
        ],
        scorecard: [
          { topic: 'Board conduct', position: '✓✓ Runs on ending “politics or personal conflict” on the board', comparison: 'Barham was censured by the board in 2026.' },
          { topic: 'Curriculum', position: '✓ Back to fundamentals; age-appropriate materials', comparison: 'Barham backs age-appropriate curriculum and a civics test.' },
          { topic: 'Parental involvement', position: '✓ Parents “informed, respected and heard”', comparison: 'Barham cites the notification policies he backed.' },
          { topic: 'Budget', position: '✓ Fiscal responsibility; dollars spent in the classroom', comparison: 'Barham cites accounting background and waste reduction.' },
          { topic: 'Measure S bond', position: '? No published position', comparison: 'Barham has not taken a position either.' },
        ],
        money: NF_NOTE,
        endorsements: 'California Republican Assembly (Riverside County unit list, accessed Oct 14, 2026). His campaign site’s endorsement page listed no names when checked.',
        notes: ['Source: https://cragop.org/riverside-county/'],
      },
    ],
    crossTypology: ct([
      ['LP', '—', '—', 'Neither candidate shares Leftward Progressive priorities: Barham touts parental-notification policies and Emmert is endorsed by the conservative California Republican Assembly.', 'Leftward Progressives who still want to weigh experience could back Barham, a sitting trustee and former teacher who has sided with Schwartz against the Komrosky-led majority. They would be voting for a trustee censured for remarks about a colleague’s spouse.'],
      ['LL', 'Barham', '○', 'Loyal Liberals weigh Barham’s board experience and his alignment with Schwartz against the majority that passed the CRT ban, though Barham’s censure and conservative positions make this a weak lean.'],
      ['LO', '—', '—', 'Left-Out Left voters see two conservative-leaning candidates, one censured and one backed by the California Republican Assembly, and nothing published on the costs and services that matter to working families.', 'A Left-Out Left voter putting experience first could choose Barham, who has two years on the board and 24 years teaching, but would be backing a trustee the board censured in 2026.'],
      ['OO', 'Barham / Emmert', '=', 'Order and Opportunity Left voters weigh a check on the board majority against orderly conduct: if a teacher with a finance background who now sides with Schwartz against a majority whose policies were blocked or rescinded matters most, Barham; if ending the feuds that led to Barham’s 2026 censure matters more, Emmert, who runs on “results, not politics or personal conflict.”'],
      ['TM', '—', '—', 'Tuned-Out Middle voters tired of board feuds have little to go on: Emmert promises calm but has no record, and Barham’s record includes a censure.', 'Tuned-Out Middle voters who let experience decide could back Barham, a sitting trustee and former board clerk with teaching and accounting experience, accepting that the board censured him for remarks about a colleague’s spouse.'],
      ['PP', 'Barham / Emmert', '=', 'Pragmatic and Polite Right voters want civil, low-drama governance: if proven experience matters most, Barham, who has two years on the board, served as clerk and has an accounting background despite his 2026 censure; if a fresh start matters more, Emmert, who runs on “results, not politics or personal conflict” but has no public record and is CRA-endorsed alongside the Komrosky majority.'],
      ['UR', 'Emmert', '◐', 'Unconventional Right voters back Emmert, a CRA-endorsed businessman who stresses fundamentals and fiscal responsibility, over a trustee mired in board feuds.', 'Unconventional Right voters who weigh experience could keep Barham, a former Republican Party–endorsed trustee who backs parental notification and a civics test. They would give up a CRA-endorsed newcomer and keep a trustee censured by the current majority.'],
      ['FC', 'Emmert', '◐', 'Faith First Conservatives back Emmert, the CRA-endorsed candidate who wants age-appropriate materials and is expected to vote with Komrosky on parental-rights and curriculum issues.', 'Faith First Conservatives who weigh experience could keep Barham, who backs age-appropriate curriculum and parental notification and has two years on the board. Barham was censured by the board in 2026 and now votes with Schwartz, not Komrosky.'],
      ['NA', 'Emmert', '●', 'No Apologies Right voters back Emmert, the California Republican Assembly’s pick, to keep Komrosky’s side in control of the board.'],
    ]),
    counterArguments: [
      'LL (Barham ○): But consider skipping the race, because Barham was formally censured by the board in April 2026 for remarks deemed threatening, and Barham’s stated priorities (parental notification, age-appropriate curriculum) are conservative.',
      'NA (Emmert ●): But consider Barham’s record, because Emmert has no board or public record and has not named his employer, while Barham has voted on two budgets and was the Republican Party’s pick in 2024.',
    ],
  },

  // ───────────────────────── TVUSD Trustee Area 4 ─────────────────────────
  {
    id: 'tvusd-trustee-area-4',
    categoryId: 'school',
    title: 'Temecula Valley Unified School District, Trustee Area 4',
    tldrLabel: 'TVUSD Trustee Area 4',
    seatContext: 'Incumbent running (rematch)',
    kind: 'candidates',
    stakesParagraphs: [
      'The Temecula Valley Unified board sets the budget, hires the superintendent and adopts curriculum and student policies. Trustees are elected by trustee area for four-year terms, and a three-vote majority controls the board.',
      'Area 4 is held by board president Joseph Komrosky, the most visible figure in the board’s statewide fights over curriculum, flags and parental notification. With Jennifer Wiersma not running in Area 3 and Melinda Anderson saying she plans to step down, this seat is central to which side controls the board in 2027.',
    ],
    introParagraphs: [
      'This is a rematch. Voters recalled Komrosky in June 2024 (51.1% yes); that November he won the seat back over David Sola by a few hundred votes, and Sola conceded on Dec. 2, 2024 (Patch). Sola says he came within 200 votes. This election is for a full four-year term.',
      'Komrosky, a college philosophy professor and Army veteran, has been elected board president three times. Sola is a 20-year Marine Corps veteran who works for a STEM education company. Komrosky is endorsed by Sheriff Chad Bianco, District Attorney Mike Hestrin, Mayor Jessica Alexander and the California Republican Assembly; Sola has published no 2026 endorsements.',
    ],
    readingLinks: [
      { label: 'EdSource: Komrosky’s recall leaves TVUSD’s future uncertain (2024)', url: 'https://edsource.org/2024/joseph-komroskys-recall-leaves-temecula-valley-unifieds-future-uncertain/714450', summary: 'Background on the recall and the board’s policies.' },
      { label: 'Patch: Sola concedes Area 4 race (Dec 2024)', url: 'https://patch.com/california/temecula/sola-concedes-komrosky-tvusd-governing-board-ta-4-race', summary: 'The 2024 rematch result.' },
      { label: 'Public Counsel: appeals court blocks CRT ban (May 2025)', url: 'https://publiccounsel.org/press-releases/california-appeals-court-blocks-temecula-school-boards-curriculum-censorship-2/', summary: 'Plaintiffs’ release on the Mae M. v. Komrosky injunction (advocacy source).' },
      { label: 'Riverside Record: meeting ends over “safety concerns” (Dec 2025)', url: 'https://riversiderecord.org/tvusd-meeting-ends-over-safety-concerns-after-komrosky-named-board-president/', summary: 'Komrosky’s third election as board president.' },
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'joseph-komrosky',
        name: 'Joseph Komrosky',
        party: 'NP',
        role: 'School Board Trustee',
        campaignUrl: 'https://www.drk4tvusd.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Komrosky has served on the board for about three years in two stints (2022–24 and since December 2024) and has been elected board president three times. He is a tenured college professor.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Elected 2022, recalled June 2024, re-elected November 2024; chosen board president again in December 2025, his third time (Riverside Record).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Has voted on district budgets as trustee and president; no finance career; says he will ensure “fiscal and disciplinary accountability” (statement).' },
            { criterionId: 'instruction', assessment: 'met', evidence: 'Tenured college professor teaching logic, critical thinking and ethics; 20 years in nuclear medicine (statement).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Recalled by Area 4 voters in 2024 then re-elected; a December 2025 meeting he chaired was adjourned over safety concerns (Riverside Record).' },
          ],
        },
        bio: [
          'Komrosky is a former Army Ranger and disabled veteran, spent 20 years in nuclear medicine and is a tenured college professor of logic, critical thinking and ethics (candidate statement). His Claremont Graduate University doctoral dissertation argued against further 5G deployment (campaign site).',
          'Elected in 2022 as part of a conservative majority, he led votes banning critical race theory, adopting a parental-notification policy and limiting campus flags to the U.S. and California flags. Area 4 voters recalled him in June 2024; he won the seat back that November and was chosen president again in December 2025.',
        ],
        recordVsChange:
          'Komrosky has delivered what he promised conservative voters: the CRT resolution, a parental-notification policy, a flag policy and a stand against state mandates, and he has led the board three times. The case for change is that several of those policies were rescinded or blocked (the flag and notification policies after a labor-board ruling, the CRT ban by an appeals court), and the board under his leadership has been marked by recalls, lawsuits and feuds.',
        scorecard: [
          { topic: 'Curriculum/CRT', position: '✓✓ Led the 2022 CRT ban; an appeals court blocked it in May 2025 as unconstitutionally vague', comparison: 'Sola has not addressed CRT; he promises “strong core academics.”' },
          { topic: 'Parental notification', position: '✓✓ Backed the 2023 policy; wants it brought back in a form consistent with the labor board ruling', comparison: 'Sola promises “real parent voice” without a policy stance.' },
          { topic: 'State authority', position: '✗ Opposes “Sacramento’s interference” and teachers’ unions in politics', comparison: 'Sola stresses teacher support and stability.' },
          { topic: 'Measure S bond', position: '~ Calls the measure reasonable and transparent enough for voters to decide; no endorsement (campaign site)', comparison: 'Sola promises audited bond spending.' },
          { topic: 'Wireless/5G', position: '✓ Banned future 5G towers near campuses; wants less classroom Wi-Fi', comparison: 'Sola works for an education technology company.' },
        ],
        money: NF_NOTE,
        endorsements:
          'Sheriff Chad Bianco, District Attorney Mike Hestrin and Temecula Mayor Jessica Alexander (his county candidate statement, summer 2026); Pastor Jack Hibbs and Michael Gates (campaign site); California Republican Assembly (Riverside County unit list, accessed Oct 14, 2026, which lists him under “Trustee Area 5,” apparently an error). Republican Party of Riverside County endorsed him in 2024.',
        notes: [
          'Not red flags under our rubric (board actions and political disputes, not findings against him personally): the June 2024 recall (4,963 yes to 4,751 no); his May 2023 remark that including Harvey Milk in a textbook was “an acknowledgement of pedophilia,” which preceded the board’s rejection of the textbook, Gov. Newsom’s threatened $1.5 million fine and the board’s July 2023 reversal (LA Times, CBS News); the June 2023 firing of Superintendent Jodi McClay without a stated reason; and the Public Employment Relations Board’s October 2024 ruling that the district failed to bargain over the parental-rights and flag policies, after which the board rescinded both unanimously (Valley News).',
          'The CRT-ban lawsuit, Mae M. v. Komrosky, names him in his official capacity; the Court of Appeal’s May 2025 preliminary injunction blocks the board policy and is not a finding against him personally.',
          'Sources: https://www.latimes.com/california/story/2023-06-03/temecula-valley-school-board-rejects-social-studies-curriculum-that-would-have-included-harvey-milk, https://myvalleynews.com/blog/2025/01/02/tvusd-votes-to-rescind-parental-rights-and-flag-policies-after-perb-decision-2/, https://www.cbsnews.com/amp/losangeles/news/temecula-valley-unified-school-district-fires-superintendent',
        ],
      },
      {
        id: 'david-sola',
        name: 'David Sola',
        party: 'NP',
        role: 'STEM Education Director',
        campaignUrl: 'https://sola4schools.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Sola is a 20-year Marine Corps veteran who works with K-12 schools on career pathways and serves on TVUSD’s Career and Technical Education committee. He has not held elected office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Member of the district’s Career and Technical Education Committee (statement); no elected service; lost the 2024 Area 4 race narrowly.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Lean Six Sigma Black Belt and USC Marshall MBA candidate; 20 years of Marine Corps leadership, retiring as a master sergeant (statement, campaign site); no public budget role.' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'Director of Growth Enablement at SmartLab, helping K-12 schools build career pathways; not a classroom teacher.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Father of four TVUSD students, district volunteer and STEM event sponsor (statement, campaign site).' },
          ],
        },
        bio: [
          'Sola is a 20-year Marine Corps combat veteran who retired as a master sergeant, a TVUSD parent of four and a district volunteer. He works for SmartLab, an education technology company, helping schools build career pathways, and is an MBA candidate at USC (statement, campaign site).',
          'He lost the 2024 race for this seat to Komrosky by a few hundred votes and conceded before certification. In 2024 he was endorsed by One Temecula Valley PAC, a local committee that opposed the board’s conservative majority; he has published no 2026 endorsements.',
        ],
        scorecard: [
          { topic: 'Board conduct', position: '✓✓ Promises to end “dysfunction” and “political theater”', comparison: 'Komrosky has led a board marked by recalls, censures and feuds.' },
          { topic: 'Career/technical education', position: '✓✓ College, trade, military and workforce pathways for every student', comparison: 'Komrosky emphasizes academic standards and merit.' },
          { topic: 'Fiscal discipline', position: '✓ Transparent budgets and audited bond spending; says the board has cost taxpayers millions', comparison: 'Komrosky pledges fiscal accountability.' },
          { topic: 'Teacher support', position: '✓ Resources, respect and stability to keep teachers', comparison: 'Komrosky criticizes the teachers’ union for “prioritizing politics.”' },
          { topic: 'Curriculum/CRT and parental notification', position: '? No published position', comparison: 'Komrosky led the CRT ban and the parental-notification policy.' },
        ],
        money: NF_NOTE,
        endorsements: 'None published for 2026 as of Oct 14, 2026. One Temecula Valley PAC endorsed him in 2024.',
        notes: ['Sources: https://onetvpac.com/endorsed (2024 list), https://patch.com/california/temecula/sola-concedes-komrosky-tvusd-governing-board-ta-4-race'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Sola', '●', 'Leftward Progressives oppose the CRT ban, flag policy and parental-notification policy Komrosky led, and back Sola, the challenger who opposes the board’s direction.'],
      ['LL', 'Sola', '●', 'Loyal Liberals value lawful, stable governance, and Komrosky’s signature policies were blocked by an appeals court or rescinded after a state labor-board ruling.'],
      ['LO', 'Sola', '●', 'Left-Out Left voters favor Sola, a non-politician and parent of four focused on career pathways and keeping teachers, over a trustee whose tenure has been consumed by culture-war fights and lawsuits.'],
      ['OO', 'Sola', '●', 'Order and Opportunity Left voters value order and opportunity, and Sola, a 20-year Marine who promises to end board “dysfunction” and expand trade and career pathways, fits both.'],
      ['TM', 'Sola', '○', 'Tuned-Out Middle voters are tired of board drama and lean to Sola’s promise of calm and audited spending, though Sola has said little on curriculum and parental notification.', 'Tuned-Out Middle voters who let experience decide could pick Komrosky, a three-time board president and college professor, though that means more of the board conflict, recalls and lawsuits that have defined Komrosky’s tenure.'],
      ['PP', 'Sola', '●', 'Pragmatic and Polite Right voters penalize combative, costly governance, and prefer Sola, a Marine veteran focused on fiscal discipline and career training, over a trustee whose policies were enjoined or rescinded and who was recalled.'],
      ['UR', 'Komrosky', '◐', 'Unconventional Right voters back Komrosky’s CRT ban and stand against state mandates, though the recall, lawsuits and turmoil under Komrosky temper their support.'],
      ['FC', 'Komrosky', '●', 'Faith First Conservatives back Komrosky, who led the parental-notification policy, limited campus flags to the U.S. and California flags and is endorsed by Pastor Jack Hibbs.'],
      ['NA', 'Komrosky', '●', 'No Apologies Right voters back Komrosky, a fighter who defied Sacramento on curriculum and parental rights, criticizes teachers’ unions and won his seat back after a recall.'],
    ]),
    counterArguments: [
      'FC (Komrosky ●): But consider whether the policies lasted, because the CRT ban is enjoined, the flag and notification policies were rescinded after a labor-board ruling, and the district has spent money and attention on lawsuits and recalls under Komrosky’s leadership.',
      'PP (Sola ●): But consider how little Sola has said, because Sola has not stated a position on curriculum or parental notification, and Komrosky has three years of board experience to Sola’s committee service.',
      'UR (Komrosky ◐): But consider Sola if results matter most, because Sola is a 20-year Marine promising audited bond spending and career pathways, while the board under Komrosky has been marked by recalls and feuds.',
    ],
  },

  // ───────────────────────── MSJC Trustee Area 3 ─────────────────────────
  {
    id: 'msjc-trustee-area-3',
    categoryId: 'school',
    title: 'Mt. San Jacinto Community College District, Trustee Area 3',
    tldrLabel: 'MSJC Trustee Area 3',
    seatContext: 'Incumbent running',
    kind: 'candidates',
    stakesParagraphs: [
      'The Mt. San Jacinto College board governs a community college district of more than 22,000 students across about 1,700 square miles of western Riverside County, with campuses in San Jacinto and Menifee and a Temecula Valley campus. Trustees adopt the budget, approve contracts and labor agreements, hire the president and oversee bond construction.',
      'Area 3 is centered on Menifee. The trustee elected will help oversee the growing Temecula Valley campus, remaining Measure AA bond projects, and pay and working conditions for part-time faculty.',
    ],
    introParagraphs: [
      'Vicki Carpenter, appointed in 2018 and elected that November and in 2022, seeks a third full term. She faces Robert Douglas, a Marine veteran who says he serves on the Valley-Wide Recreation and Park District board, and Sergei Vinkov, an MSJC alumnus and legal document assistant who ran for the Riverside County Board of Education in 2024.',
      'Carpenter is endorsed by Menifee Mayor Ricky Estrada, former Supervisor Marion Ashley and retired MSJC President Roger Schultz (Menifee 24/7). We found no endorsements for Douglas or Vinkov and no forum coverage.',
    ],
    readingLinks: [
      { label: 'Menifee 24/7: Carpenter seeks re-election (Sept 2026)', url: 'https://menifee247.com/?p=8118', summary: 'Carpenter’s record and endorsements.' },
      { label: 'MSJC: Trustee Vicki Carpenter bio', url: 'https://msjc.edu/boardoftrustees/VCarpenter.html', summary: 'Official board biography.' },
    ],
    legalRequirements: 'U.S. citizen, 18 or older, registered voter living in Trustee Area 3; not an employee of the district (Cal. Education Code § 72103).',
    qualificationCriteria: [
      { id: 'governance', label: 'Board governance and accreditation', detail: 'Trustees set policy, hire the college president and answer to the accreditor for how the board governs.' },
      { id: 'budget', label: 'Budget and bond oversight', detail: 'The board adopts a large operating budget and oversees voter-approved bond construction.' },
      { id: 'highered', label: 'Knowledge of community college students and programs', detail: 'Transfer, career-technical, dual-enrollment and veterans programs are the college’s core work.' },
      { id: 'community', label: 'Community and workforce ties', detail: 'The college depends on partnerships with cities, employers and school districts.' },
    ],
    candidates: [
      {
        id: 'vicki-carpenter',
        name: 'Vicki Carpenter',
        party: 'NP',
        role: 'Mt San Jacinto Board Member Trustee',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Carpenter has been the Area 3 trustee since 2018 and served as board clerk in 2025. She is a longtime real estate trainer and manager and past president of several Menifee civic groups.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Appointed September 2018, elected November 2018 and re-elected 2022; board clerk for 2025 (MSJC news).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on eight district budgets and on Measure AA bond projects, including STEM buildings and the Menifee stadium (statement).' },
            { criterionId: 'highered', assessment: 'partial', evidence: 'Past president of the MSJC Foundation; attended community college herself (MSJC bio); no teaching or administrative role.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Past president of the Menifee Valley Chamber of Commerce and Inland Valley Association of Realtors; Rotary Club of Menifee president (MSJC bio).' },
          ],
        },
        bio: [
          'Carpenter has lived in Menifee for 24 years. She began as a paralegal, moved into real estate in 1991 and is director of training at Coldwell Banker. She has led the Menifee Valley Chamber of Commerce, the MSJC Foundation and the Menifee Rotary Club (MSJC bio).',
          'She cites new STEM buildings in Menifee and San Jacinto, the Menifee Valley stadium, progress on the Temecula Valley campus, accreditation reaffirmed through 2032 and a record 2,952 graduates in 2026 (statement).',
        ],
        recordVsChange:
          'Carpenter has been on the board through the opening of new STEM buildings, the Temecula Valley campus and a clean accreditation cycle. The case for change, made by Vinkov, is that the district needs fresh scrutiny of finances, part-time faculty pay and how it treats critics; neither challenger has documented specific failures.',
        scorecard: [
          { topic: 'Facilities/bond', position: '✓✓ Cites completed Measure AA projects and the Temecula Valley campus', comparison: 'Challengers have not addressed bond projects.' },
          { topic: 'Accreditation/governance', position: '✓ Accreditation reaffirmed through 2032', comparison: 'Vinkov wants to update “outdated policies.”' },
          { topic: 'Affordability', position: '✓ Supports financial aid and dual enrollment', comparison: 'Douglas pledges to keep tuition and fees affordable.' },
          { topic: 'Part-time faculty pay', position: '? No published position', comparison: 'Vinkov wants to address unequal pay for part-time faculty.' },
        ],
        money: NF_NOTE,
        endorsements: 'Former Menifee Mayor Bill Zimmerman, former Supervisor Marion Ashley, Menifee Mayor Ricky Estrada, Mayor Pro Tem Bob Karwin and retired MSJC President Roger Schultz (Menifee 24/7, Sept 9, 2026).',
      },
      {
        id: 'robert-douglas',
        name: 'Robert Douglas',
        party: 'NP',
        role: 'Director Board Member',
        campaignUrl: 'https://douglas4collegetrustee.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Douglas says he is an elected director of the Valley-Wide Recreation and Park District and has worked as a college professor and community college safety officer. We could not confirm the park-district seat independently.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Says he is an elected board member and director of the Valley-Wide Recreation and Park District (statement); not confirmed in district records we found.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Park-district board service and small business ownership (statement); budget scale not stated.' },
            { criterionId: 'highered', assessment: 'met', evidence: 'Community college transfer student (A.A., then B.A. at Cal State Long Beach, M.A. from Chapman); former college professor and retired community college district safety officer (statement).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Member of the Menifee Valley Chamber of Commerce and American Legion; former reserve deputy sheriff (statement).' },
          ],
        },
        bio: [
          'Douglas, 67, earned an associate degree in criminal justice before transferring to Cal State Long Beach and later earning a master’s in criminal justice from Chapman University. He is a former Marine sergeant, reserve deputy sheriff, Postal Service retiree, retired community college safety officer, college professor and small business owner (statement).',
          'He says he is an elected director of the Valley-Wide Recreation and Park District. His priorities are classroom instruction, affordable tuition and fees, campus safety and technology. We found no news coverage.',
        ],
        scorecard: [
          { topic: 'Affordability', position: '✓ Keep tuition and fees affordable', comparison: 'Carpenter cites financial aid; Vinkov cites protecting taxpayers.' },
          { topic: 'Campus safety', position: '✓ Safe, welcoming campuses; former college safety officer', comparison: 'Carpenter and Vinkov do not make safety a theme.' },
          { topic: 'Instruction', position: '✓ Students and classroom instruction as top priority', comparison: 'Vinkov raises part-time faculty pay.' },
          { topic: 'Facilities/bond', position: '? No published position', comparison: 'Carpenter cites completed Measure AA projects.' },
        ],
        money: NF_NOTE,
        endorsements: 'None found as of Oct 14, 2026.',
      },
      {
        id: 'sergei-vinkov',
        name: 'Sergei Vinkov',
        party: 'NP',
        role: 'Legal Document Assistant',
        campaignUrl: 'https://sergevinkov.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Vinkov is an MSJC graduate who runs a legal document assistant business. He has no board or college administrative experience.',
          criteria: [
            { criterionId: 'governance', assessment: 'not-met', evidence: 'No board service; ran unsuccessfully for Riverside County Board of Education Trustee Area 4 in March 2024 (Ballotpedia).' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'Runs his own legal document assistant business (statement); scale not stated.' },
            { criterionId: 'highered', assessment: 'partial', evidence: 'MSJC alumnus who started in non-credit programs and graduated on the President’s Honor Roll (statement).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Says he has worked in the courts and advocated on free speech and immigrant access to local government (statement).' },
          ],
        },
        bio: [
          'Vinkov, 39, arrived in California in 2016, became a U.S. citizen in 2021 and graduated from MSJC after starting in its non-credit programs. He runs a legal document assistant business and is the primary caregiver for his husband (statement).',
          'He says his time in the district revealed “retaliation, free speech restrictions, and barriers to immigrant access,” and promises reforms including equal pay for part-time faculty and more financial transparency. He ran for the county Board of Education in 2024.',
        ],
        scorecard: [
          { topic: 'Part-time faculty pay', position: '✓✓ Address unequal pay for part-time faculty', comparison: 'Carpenter and Douglas have not addressed it.' },
          { topic: 'Transparency', position: '✓✓ More transparency and accountability in district finances and public engagement', comparison: 'Carpenter says the district is already transparent.' },
          { topic: 'Inclusion/immigrant access', position: '✓ Guarantee inclusion; reduce barriers for immigrants', comparison: 'Not addressed by the other candidates.' },
          { topic: 'Budget', position: '✓ “Responsible budgeting that protects taxpayers”', comparison: 'Carpenter cites fiscal responsibility on the board.' },
        ],
        money: NF_NOTE,
        endorsements: 'None found as of Oct 14, 2026.',
        notes: [
          'His claims of retaliation and free-speech restrictions at the district are his own and are not detailed in his statement; we found no reporting on them.',
          'Source: https://news.ballotpedia.org/2024/03/04/all-candidates-for-riverside-county-board-of-education-trustee-area-4-complete-ballotpedias-candidate-connection-survey/',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Vinkov', '○', 'Leftward Progressives like Vinkov’s push for equal pay for part-time faculty and immigrant access, a weak lean since Vinkov has no governing experience.', 'Leftward Progressives who weigh experience could back Carpenter, who has eight years on the board and helped open the Temecula Valley campus. They would give up Vinkov’s part-time faculty pay agenda for a trustee backed by Republican local officials.'],
      ['LL', 'Carpenter', '●', 'Loyal Liberals value Carpenter’s eight years, completed bond projects and accreditation reaffirmed through 2032.'],
      ['LO', 'Vinkov', '◐', 'Left-Out Left voters favor Vinkov, a reform-minded alumnus who calls out retaliation and unequal pay for part-time faculty, over a long-serving trustee backed by local officeholders.', 'Left-Out Left voters who put experience first could back Carpenter, who has run the board through new campuses and accreditation. The trade-off is giving up the only candidate pressing for part-time faculty pay equity.'],
      ['OO', 'Carpenter', '◐', 'Order and Opportunity Left voters value opportunity and steady management, and Carpenter has overseen new STEM buildings, a growing Temecula Valley campus and record graduations, though Douglas’s campus-safety and affordable-fee pledges also appeal.'],
      ['TM', 'Douglas', '○', 'Tuned-Out Middle voters focused on costs may lean to Douglas, a former community college student who pledges to keep tuition and fees affordable, though few follow college-board races.', 'Tuned-Out Middle voters who prefer a known record could back Carpenter, an eight-year trustee who points to financial aid, dual enrollment and record graduations, though Carpenter has made no specific fee pledge.'],
      ['PP', 'Carpenter', '●', 'Pragmatic and Polite Right voters value Carpenter’s steady, business-community leadership, clean accreditation and finished projects.'],
      ['UR', 'Douglas', '○', 'Unconventional Right voters may prefer Douglas, a Marine veteran and former reserve deputy who promises affordable fees and safe campuses, over a longtime insider.', 'Unconventional Right voters who weigh experience could stay with Carpenter, an eight-year trustee endorsed by Menifee’s mayor and former Supervisor Marion Ashley. They would give up a veteran newcomer for a longtime board member.'],
      ['FC', 'Carpenter', '○', 'Faith First Conservatives lean toward Carpenter, backed by local Republican leaders and focused on fiscal responsibility, though Douglas’s Marine and American Legion background also appeals.'],
      ['NA', 'Douglas', '○', 'No Apologies Right voters may favor Douglas, a former Marine sergeant and reserve deputy sheriff focused on campus safety, over an establishment incumbent, though Douglas has published little.', 'No Apologies Right voters who value proven results could back Carpenter, who has eight years on the board and the backing of local Republican officials, though Carpenter is a consensus-minded insider rather than a fighter.'],
    ]),
    counterArguments: [
      'PP (Carpenter ●): But consider fresh scrutiny, because after eight years an incumbent can stop asking hard questions, and Vinkov raises part-time faculty pay and transparency issues Carpenter has not addressed.',
      'LO (Vinkov ◐): But consider the evidence, because Vinkov has no governing experience and Vinkov’s claims of retaliation at the district are not documented in public reporting.',
      'NA (Douglas ○): But consider what can be verified, because Douglas’s park-district board seat could not be confirmed in district records and no news coverage of Douglas was found.',
    ],
  },

  // ───────────────────────── TVUSD Measure S ─────────────────────────
  {
    id: 'tvusd-measure-s',
    categoryId: 'local-measures',
    title: 'Temecula Valley USD Measure S — $215M school bond',
    tldrLabel: 'TVUSD Measure S — School bond',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure S would let Temecula Valley Unified borrow $215 million for roof, plumbing, electrical and classroom repairs and to replace portable classrooms, repaid by a property tax on homes and businesses in the district.',
      'The trade-off is fixing aging schools with local money, which can also unlock state matching funds, versus adding a new tax for about 30 years on top of the district’s 2012 Measure Y bond, which runs to 2047.',
    ],
    introParagraphs: [
      'A district advisory committee recommended the $215 million size and a rate of about $20 per $100,000 of assessed value at a May 6, 2026 board workshop, where trustees debated whether to state the 30-year term and interest cost on the ballot (Govly meeting summary). The Registrar’s notice is dated July 21, 2026; we could not find the board’s roll-call vote placing it on the ballot.',
      'Board president Joseph Komrosky calls the measure reasonable and transparent enough for voters to decide and estimates total debt service at about $383 million (his campaign site). We found no organized campaign for or against it, and no party or newspaper positions.',
    ],
    measure: {
      question:
        'To provide safe, modern schools by repairing and upgrading aging classrooms, school facilities, science and career technology labs supporting college/career readiness in math, science, engineering, technology, arts, and skilled trades; repairing deteriorating roofs, plumbing, gas, and electrical systems; shall Temecula Valley Unified School District’s measure be adopted authorizing $215,000,000 in bonds at legal interest rates, levying approximately $20 per $100,000 assessed value (averaging $13,000,000) annually, while bonds are outstanding, with citizen oversight, audits, and all money locally-controlled?',
      yesMeans: 'Authorizes $215 million in school bonds for repairs, upgrades and replacing portables, repaid by a property tax of about $20 per $100,000 of assessed value while the bonds are outstanding.',
      noMeans: 'Blocks the new bonds; property owners keep paying for the 2012 Measure Y bonds until about 2047, and repairs would need other funding.',
      funding: {
        asOf: 'Oct. 14, 2026',
        note: 'News coverage reports no Yes or No campaign money, and we found no committee in coverage reviewed. Riverside County’s NetFile campaign portal requires a search form we did not use, so a committee may exist; check the source below.',
        sources: [
          { label: 'Riverside County campaign filings (NetFile)', url: 'https://netfile.com/public/CTRIV/campaign' },
          { label: 'Patch: Temecula voter guide, Nov. 3, 2026', url: 'https://patch.com/california/temecula/temecula-voter-guide-whats-nov-3-2026-ballot-voting-more' },
        ],
      },
      positions: [],
      measureType: 'School facilities bond (general obligation, Prop 39)',
      voteThreshold: '55%',
      fiscalImpact:
        'Up to $215 million in bonds, repaid by a levy of about $20 per $100,000 of assessed value, averaging $13 million a year while bonds are outstanding (Registrar’s notice). Komrosky’s campaign site cites a term of about 30 years and total debt service of about $383 million; we did not find an official district figure. The 55% threshold is the standard Prop 39 school-bond threshold; the notice does not state it and we could not confirm it from the board resolution.',
      supporters: 'Temecula Valley Unified Board of Education (placed it on the ballot; vote not found). No campaign committee found.',
      opponents: 'None found as of Oct. 14, 2026.',
      voterConnection: [
        'Property owners in the district pay through their tax bill: about $100 a year on a home assessed at $500,000. Renters may pay indirectly.',
        'This would be a new levy on top of the 2012 Measure Y bond tax, which the district says will be paid off around August 2047.',
        'Bond money can only fund buildings and equipment, not salaries or pensions, and a citizens’ oversight committee and annual audits are required.',
      ],
      mechanismBullets: [
        'Amount: up to $215 million in general obligation bonds at legal interest rates.',
        'Tax: about $20 per $100,000 of assessed value (assessed, not market, value), averaging $13 million a year while bonds are outstanding.',
        'Uses: repairing roofs, plumbing, gas and electrical systems; upgrading classrooms, science and career-technology labs; replacing portable classrooms, per the ballot question and the May 2026 advisory committee recommendation.',
        'Oversight: citizens’ bond oversight committee and annual performance and financial audits, as Prop 39 requires.',
        'Existing debt: the district has issued all $165 million of its 2012 Measure Y bonds, with an estimated payoff of Aug. 1, 2047 (TVUSD).',
      ],
      argumentsFor: [
        'Many schools rely on aging roofs, plumbing and portable classrooms, and the state does not regularly fund repairs.',
        'Local bond money can qualify the district for state school-facility matching funds.',
        'Funds stay local, can’t pay salaries, and are subject to an oversight committee and audits.',
      ],
      argumentsAgainst: [
        'Adds a new property tax for decades on top of Measure Y, which runs to 2047.',
        'Interest roughly doubles the cost: Komrosky estimates about $383 million in total payments for $215 million borrowed.',
        'The ballot question does not state the term or total cost, which trustees debated including.',
        'Voters may doubt a board known for internal conflict will manage a large construction program well.',
      ],
      readingLinks: [
        { label: 'Patch: Temecula voter guide, Nov. 3, 2026', url: 'https://patch.com/california/temecula/temecula-voter-guide-whats-nov-3-2026-ballot-voting-more', summary: 'Measure S summary and tax rate.' },
        { label: 'Govly: TVUSD board workshop on the bond (May 6, 2026)', url: 'https://app.govly.com/public/meetings/45905', summary: 'Advisory committee’s $215 million recommendation and trustee discussion.' },
        { label: 'TVUSD: Measure Y bond information', url: 'https://www.tvusd.k12.ca.us/community/measure-y/temecula-bi', summary: 'The district’s existing 2012 bond and its payoff date.' },
        { label: 'Dr. Komrosky campaign site', url: 'https://www.drk4tvusd.com', summary: 'Board president’s description of Measure S, including term and debt-service estimate (campaign source).' },
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes', '●', 'Leftward Progressives support public investment in school buildings and see safe roofs, working plumbing and fewer portables as basic equity for students.'],
      ['LL', 'Yes', '●', 'Loyal Liberals value the required oversight committee and audits and the chance to draw state matching funds, and accept taxes for public school facilities.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters back repairs at the schools working families use, but doubt a board known for feuds will spend the money as promised.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters value safe, modern schools and career-technology labs, though a new levy for about 30 years weighs on stretched household budgets.'],
      ['TM', 'Yes / No', '=', 'Tuned-Out Middle voters weigh repaired schools against a new line on their property tax bills: if about $100 a year on a $500,000 assessed home is a modest price for fixing roofs, plumbing and portables, Yes; if any new tax on top of the Measure Y levy, which runs to 2047, strains a stretched budget, No.'],
      ['PP', 'Yes / No', '=', 'Pragmatic and Polite Right voters want careful, well-run spending on aging buildings: if a modest rate, a required oversight committee and possible state matching funds make this a prudent repair bond, Yes; if a ballot that omits the term and total cost and a board in conflict raise doubts about managing a large construction program, No.'],
      ['UR', 'No', '◐', 'Unconventional Right voters favor smaller government and lower taxes and resist adding a decades-long tax on top of an existing bond.'],
      ['FC', 'No', '◐', 'Faith First Conservatives favor lower taxes and less public debt, and object to roughly doubling the cost through interest, though the measure is about repairs rather than curriculum.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose nearly all new bonds and object to a ballot question that leaves out the term and total cost.'],
    ]),
    hinges: {
      LP: 'Yes if safe roofs, working plumbing and fewer portables are basic equity for students that local money should fund. No if total payments near double the amount borrowed, stacked on Measure Y until 2047, outweigh the repairs.',
      LL: 'Yes if the required oversight committee and audits, plus a chance at state matching funds, make this a sound investment. No if a ballot question that leaves out the term and total cost falls short of the transparency you expect.',
      LO: 'Yes if school repairs matter more to you than your distrust of long-term debt and of the board. No if interest that board president Joseph Komrosky estimates brings total payments to about $383 million for $215 million borrowed is too costly.',
      OO: 'Yes if safe buildings and career-technology labs are the kind of opportunity schools should offer. No if a new tax for about 30 years on top of the Measure Y levy is more than your household can absorb.',
      TM: 'Yes if about $100 a year on a $500,000 assessed home seems worth it for repaired schools. No if any new line on your property tax bill, on top of Measure Y, strains a budget already stretched.',
      PP: 'Yes if a modest rate, oversight and possible state matching funds make this a prudent repair bond. No if you want the term and total cost stated plainly on the ballot, and a calmer board, before you agree to borrow.',
      UR: 'Yes if the money being limited to buildings, with state matching funds at stake, eases your doubts. No if a decades-long tax on top of an existing bond, run by a board known for internal conflict, is government growth you won’t back.',
      FC: 'Yes if repairing aging local schools for your children matters more to you than avoiding new debt. No if you’d rather not add decades of new school debt on top of a bond that already runs to 2047.',
      NA: 'Yes if a modest rate, buildings-only spending and state matching funds that would otherwise go elsewhere outweigh the interest. No if roughly doubling the cost through interest, on a ballot that omits the term and total, is a deal-breaker.',
    },
    counterArguments: [
      'NA (No ●): But consider Yes if you want your tax dollars to draw state money, because the rate is modest, the money can only fund buildings, and passing it can bring in state matching funds that would otherwise go elsewhere.',
      'LL (Yes ●): But consider No if you want full disclosure first, because total payments may be close to double the amount borrowed, the ballot omits the term, and the tax stacks on the Measure Y levy that runs to 2047.',
      'PP (Toss-up): But consider Yes if aging buildings worry you, because Komrosky, the board president, calls the measure reasonable and transparent enough for voters, and Prop 39 requires an oversight committee and annual audits.',
    ],
  },
];
