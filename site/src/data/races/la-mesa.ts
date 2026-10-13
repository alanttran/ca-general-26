import type { Race, QualificationCriterion, MeasurePosition } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * La Mesa-area local contests (ZIPs 91941, 91942; parts of 92020): City of La Mesa mayor, council and treasurer,
 * La Mesa-Spring Valley School District Trustee Areas 1–3, Helix Water District Divisions 2 and 4, and two bond
 * measures (LMSVSD Measure AA, Grossmont-Cuyamaca CCD Measure G). Candidates and designations as printed on
 * San Diego County sample ballots (BT 503–578). All offices are nonpartisan; party labels below come from public
 * registration reports or party endorsements. Research current as of Oct 13, 2026.
 */

const KPBS_ENDORSEMENTS =
  'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian';
const KPBS_MAYOR = 'https://www.kpbs.org/news/politics/2026/10/02/2026-general-election-la-mesa-mayoral-races-explainer';
const TOSD_PREVIEW = 'https://timesofsandiego.com/politics/2026/09/28/la-mesa-election-preview/';
const TOSD_FORUM =
  'https://timesofsandiego.com/politics/2026/10/01/in-race-to-become-la-mesas-next-mayor-candidates-draw-lines-on-homelessness-and-affordability/';
const TOSD_TREASURER = 'https://timesofsandiego.com/politics/2026/09/14/la-mesa-youngest-officeholder-ucla-student-treasurer/';
const KPBS_BONDS = 'https://www.kpbs.org/news/politics/2026/10/02/your-guide-to-all-san-diego-county-school-bond-measures';
const SD_PORTAL = 'https://www.southtechhosting.com/SanDiegoCounty/CampaignDocsWebRetrieval/';

const CITY_LEGAL = 'U.S. citizen, 18 or older, and a registered voter living in the City of La Mesa.';

const CITY_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Municipal policy and governance', detail: 'The mayor and four councilmembers pass city laws, direct the city manager and sit on regional boards.' },
  { id: 'budget', label: 'Budget and finance', detail: 'The Council adopts the city budget and decides how to pay for police, fire, streets and parks.' },
  { id: 'landuse', label: 'Housing, land use and homelessness', detail: 'The Council approves development, applies state housing law and sets the city’s homelessness response.' },
  { id: 'community', label: 'Community knowledge and coalition-building', detail: 'Passing items takes three of five votes, and residents expect responsive local service.' },
];

const SCHOOL_LEGAL =
  'U.S. citizen, 18 or older, registered voter living in the trustee area; not an employee of the district (Cal. Education Code § 35107).';

const SCHOOL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Board governance and oversight', detail: 'Trustees adopt policy, approve contracts, and hire and evaluate the superintendent as one vote on a five-member board.' },
  { id: 'budget', label: 'Budget and fiscal oversight', detail: 'The board adopts the budget for a district of more than 10,000 students and bargains with teachers and classified staff.' },
  { id: 'instruction', label: 'Knowledge of teaching and student outcomes', detail: 'Trustees approve curriculum and set academic and student-support priorities.' },
  { id: 'community', label: 'Parent, staff, and community engagement', detail: 'Trustees hear from families and employees and answer for district decisions in public.' },
];

const WATER_LEGAL = 'Registered voter living in the division (Cal. Water Code § 71250 et seq.).';

const WATER_CRITERIA: QualificationCriterion[] = [
  { id: 'rates', label: 'Rate-setting and utility finance', detail: 'The board sets water rates, which state law limits to the cost of service, and adopts the district budget.' },
  { id: 'infrastructure', label: 'Water supply and infrastructure', detail: 'Directors approve treatment, pipeline and supply projects such as East County Advanced Water Purification.' },
  { id: 'governance', label: 'Public-board governance', detail: 'Directors oversee the general manager and represent Helix on regional water bodies.' },
  { id: 'public', label: 'Ratepayer engagement and transparency', detail: 'Directors answer to customers on rates, service and water quality.' },
];

const SD_DEM = 'https://www.sddemocrats.org/propositions--ballot-measures.html';
const SD_GOP = 'https://www.sandiegorepublicans.org/voter-guides/san-diego';
const BOND_POSITIONS: MeasurePosition[] = [
  { org: 'San Diego County Democratic Party', kind: 'party', position: 'Yes', url: SD_DEM },
  { org: 'Republican Party of San Diego County', kind: 'party', position: 'No', url: SD_GOP },
];

export const RACES_LA_MESA: Race[] = [
  // ---------------------------------------------------------------- Mayor
  {
    id: 'la-mesa-mayor',
    categoryId: 'city',
    title: 'La Mesa Mayor',
    tldrLabel: 'La Mesa Mayor',
    seatContext: 'Open (Mayor Arapostathis termed out)',
    kind: 'candidates',
    stakesParagraphs: [
      'La Mesa’s mayor chairs the five-member City Council, votes as a councilmember, and represents the city at regional and ceremonial events. The mayor and council set policy, adopt the budget, decide land-use and housing questions, and direct the city manager. The job is part-time and pays $3,800 a month (KPBS, citing a city document).',
      'Mayor Mark Arapostathis is termed out after 12 years. Both open council seats will go to Democratic-endorsed candidates, so Democrats keep a council supermajority either way; the mayoral race decides whether any Republican sits on the council (Times of San Diego). The sharpest divides are over the HOME homeless-outreach program, the Spring Street trolley-station housing project, and the Civic Center and library plan.',
    ],
    introParagraphs: [
      'There was no June primary; the four-way race is decided in November by plurality. Two sitting councilmembers lead the field in money and endorsements: Laura Lothian, a registered Republican backed by the county GOP, and Patricia Normandy-Dillard, a registered Democrat backed by the county Democratic Party (KPBS, Oct. 2026). Former city treasurer Jim Stieringer (Republican) and regenerative farmer Quinn Reese (Democrat) reported no contributions as of Sept. 30.',
      'At a Sept. 29 candidate forum all four opposed SB 79’s state-mandated transit-oriented zoning, but split over homelessness: Lothian wants to end HOME, which sends clinicians rather than police to most non-criminal homeless calls, while Dillard defended it (Times of San Diego).',
    ],
    legalRequirements: CITY_LEGAL,
    qualificationCriteria: CITY_CRITERIA,
    readingLinks: [
      { label: 'KPBS: What does the La Mesa mayor do? (Oct. 2026)', url: KPBS_MAYOR, summary: 'Candidate-by-candidate priorities, endorsements and fundraising through Sept. 30.' },
      { label: 'Times of San Diego: mayoral forum (Oct. 1, 2026)', url: TOSD_FORUM, summary: 'Candidates on homelessness, the HOME program and SB 79.' },
      { label: 'Times of San Diego: La Mesa election preview (Sept. 28, 2026)', url: TOSD_PREVIEW, summary: 'Overview of mayor, council, treasurer and the two bond measures.' },
    ],
    candidates: [
      {
        id: 'laura-lothian',
        name: 'Laura Lothian',
        party: 'NP',
        role: 'City of La Mesa Councilmember/Businesswoman',
        campaignUrl: 'https://lauralothian4mayor.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Lothian has served on the La Mesa City Council since winning a 2021 special election and was re-elected in 2022. She has run a La Mesa real estate business since 2002.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Councilmember since 2021 special election (38.4%); re-elected Nov. 2022 by 11 votes (East County Magazine); term ends Dec. 2026.' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on city budgets since 2021; proposes cutting consultant contracts and charging fees for fire “lift assist” calls (KPBS).' },
            { criterionId: 'landuse', assessment: 'met', evidence: 'Has voted on housing and homelessness items for five years, including opposing the 147-unit Spring Street trolley project (Times of San Diego).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Long local business and campaign presence; as the council’s only Republican she has struggled to win majorities; the council rejected her 2022 Campo homeless-relocation proposal (Times of San Diego).' },
          ],
        },
        bio: [
          'Lothian is a La Mesa real estate agent since 2002 and the only Republican on the City Council. She won a 2021 special election for the seat vacated by Akilah Weber and was narrowly re-elected in 2022 (East County Magazine). She ran for mayor once before, in 2010.',
          'Her platform centers on core services: fully staffed police and fire, clean parks, smoother permits, more downtown parking, and spending “on La Mesa — not on consultants” (ballot statement). She calls a new Civic Center a “want, not a need” until it is funded and would trim the climate action plan to tangible results (KPBS).',
        ],
        scorecard: [
          { topic: 'Homelessness', position: '✗ Would end the HOME outreach program, saying outreach “is acting as a magnet”; wants people required to accept help', comparison: 'Dillard defends HOME and says help can’t be forced.' },
          { topic: 'Housing & land use', position: '~ Favors single-family homes and condos; opposed the Spring Street affordable apartments and opposes SB 79', comparison: 'Dillard backs transit-oriented affordable housing near the Orange Line.' },
          { topic: 'Budget & services', position: '✓ Grow revenue through retail and dining; redirect consultant spending to fire and parks', comparison: 'Stieringer pledges no new taxes; Dillard emphasizes grants and transit funding.' },
          { topic: 'Civic Center / library', position: '✗ Not a priority until funding exists', comparison: 'Dillard wants to move forward on the library expansion.' },
          { topic: 'Public safety', position: '✓✓ Properly staffed police and fire is a lead pledge', comparison: 'Dillard stresses pairing police with crisis services.' },
        ],
        money: 'Raised $76,353 as of Sept. 30, 2026, mostly from individuals, about two-thirds in La Mesa; donors include New Majority PAC; she loaned her campaign $7,500 in March (KPBS). Times of San Diego reported $22,163 cash on hand in the latest filing it reviewed.',
        endorsements:
          'Republican Party of San Diego County; Assemblymember Carl DeMaio and Reform California; Mayors Bill Wells (El Cajon), John Minto (Santee), Rebecca Jones (San Marcos) and John Franklin (Vista) (KPBS; Times of San Diego, Sept. 2026).',
        notes: [
          'In 2022 she proposed relocating unhoused people to a 16-acre property in Campo; the council rejected it, and she said she had no stake in the property (Times of San Diego, May 2022): https://timesofsandiego.com/politics/2022/05/12/la-mesa-council-shuns-member-lothian-idea-to-relocate-the-homeless-to-campo/',
        ],
      },
      {
        id: 'patricia-normandy-dillard',
        name: 'Patricia Normandy-Dillard',
        party: 'NP',
        role: 'City of La Mesa Councilmember',
        campaignUrl: 'https://patriciadillard.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Dillard has served on the La Mesa City Council since 2022 and represents the city on the Metropolitan Transit System board, including its executive committee. Before office she worked in publishing, customer service and sales.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Councilmember since Dec. 2022 (term ends Dec. 2026); MTS board member since 2023 and executive committee member; alternate on a SANDAG transportation committee (KPBS).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on city budgets since 2023; says she helped secure transit funding (ballot statement).' },
            { criterionId: 'landuse', assessment: 'met', evidence: 'Voted on the Spring Street project and lobbied MTS for multi-bedroom units there (Times of San Diego); sits on the climate action plan subcommittee (KPBS).' },
            { criterionId: 'community', assessment: 'met', evidence: 'More than 30 years in La Mesa; endorsed by the council’s other two Democrats and Supervisor Montgomery Steppe; nominated by the MTS executive committee for board chair in 2023.' },
          ],
        },
        bio: [
          'Dillard has lived in La Mesa for more than 30 years and joined the City Council in 2022, its only Black member. She represents La Mesa on the MTS board and its executive committee and is an alternate on a SANDAG transportation committee (KPBS).',
          'She campaigns on continuity: a path to a larger library through the Civic Center redevelopment, added downtown parking in the new City Hall plan, transit funding, and pairing police with crisis services so officers can focus on crime (ballot statement). She says La Mesa “doesn’t need to be reinvented.”',
        ],
        scorecard: [
          { topic: 'Homelessness', position: '✓ Defends the HOME outreach program; blames rising homelessness on affordability', comparison: 'Lothian would end HOME.' },
          { topic: 'Housing & land use', position: '✓ Supports transit-oriented affordable housing near the Orange Line, but opposes SB 79’s state mandate', comparison: 'Lothian prefers single-family homes and condos.' },
          { topic: 'Transit', position: '✓✓ MTS board member; touts micro-transit and transit funding', comparison: 'Lothian wants more downtown parking; Stieringer opposes new bike lanes.' },
          { topic: 'Civic Center / library', position: '✓✓ Wants the library expansion and City Hall redevelopment to proceed', comparison: 'Lothian would wait for funding.' },
          { topic: 'Climate', position: '✓ Climate action plan subcommittee; funding for landlords to replace gas appliances', comparison: 'Lothian would trim the plan.' },
        ],
        money: 'Raised $44,576 as of Sept. 30, 2026, more than half from individuals; largest contributors include Laborers Local 89 PAC and Heartland Firefighters (KPBS). Times of San Diego reported $8,727 cash on hand in the latest filing it reviewed.',
        endorsements:
          'San Diego County Democratic Party; Supervisor Monica Montgomery Steppe; State Sen. Akilah Weber Pierson; Assemblymember LaShae Sharp-Collins; Councilmembers Genevieve Suzuki and Lauren Cazares; San Diego & Imperial Counties Labor Council (KPBS; Times of San Diego, Sept. 2026).',
      },
      {
        id: 'jim-stieringer',
        name: 'Jim Stieringer',
        party: 'NP',
        role: 'Retired City of La Mesa Treasurer',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Stieringer was La Mesa’s elected treasurer from 2002 to 2006 and served on the Grossmont Union High School District and Grossmont Healthcare District boards. He has not served on the City Council.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Former Grossmont Union HSD trustee and five-term Grossmont Healthcare District director (Times of San Diego); no city council service.' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Elected La Mesa City Treasurer, 2002–2006 (KPBS).' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'No land-use or housing role documented; says he will oppose state housing mandates and keep trolley parking.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Longtime La Mesa resident and Air Force veteran; no endorsements as of Aug. 26 and no money reported (KPBS).' },
          ],
        },
        bio: [
          'Stieringer is a retired La Mesa resident and Air Force veteran with a career in the auto industry and construction. He was city treasurer from 2002 to 2006 and has served on the Grossmont Union High School District and Grossmont Healthcare District boards; he has run unsuccessfully for other offices several times (KPBS; Times of San Diego). He is a registered Republican.',
          'His ballot statement pledges no new sales or property taxes, opposes the Spring Street trolley parking lot becoming low-income apartments, and promises to “stem the relentless ‘ghettoization’ of La Mesa.” At the forum he said he has “kind of minor goals,” such as improving a Vietnam War memorial and blocking new bike lanes.',
        ],
        scorecard: [
          { topic: 'Taxes', position: '✗ Will neither propose nor support sales or property tax increases', comparison: 'Lothian focuses on growing retail revenue; Dillard has not ruled out revenue measures.' },
          { topic: 'Housing & land use', position: '✗ Opposes affordable housing on trolley parking lots and state mandates', comparison: 'Lothian shares his opposition to the Spring Street project; Dillard supports it.' },
          { topic: 'Transportation', position: '✗ Opposes new bike lanes; wants to keep trolley parking', comparison: 'Dillard backs transit investment.' },
          { topic: 'Civic Center / library', position: '✓ Sees a new library as an obligation; open to new city offices', comparison: 'Closer to Dillard than Lothian here.' },
        ],
        money: 'No contributions reported as of Sept. 30, 2026 (KPBS).',
        endorsements: 'None reported as of Aug. 26, 2026 (KPBS).',
        notes: [
          'His ballot statement uses the word “ghettoization” to describe new affordable housing; readers can weigh that language themselves.',
        ],
      },
      {
        id: 'quinn-reese',
        name: 'Quinn M. Reese',
        party: 'NP',
        role: 'Regenerative Farmer',
        campaignUrl: 'https://quinn4mayor.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Reese has a background in executive management, consulting and business management and recently turned to regenerative gardening. He has held no public office.',
          criteria: [
            { criterionId: 'governance', assessment: 'not-met', evidence: 'No public office or city commission service documented.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Says he has executive and business-management experience (KPBS); no public budget role documented.' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'No land-use role documented; a renter who says affordability is “the lens I use.”' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Endorsed by four La Mesa small businesses; no money reported as of Sept. 30 (KPBS).' },
          ],
        },
        bio: [
          'Reese is a registered Democrat and renter who worked in executive management and consulting before shifting to regenerative gardening. He says he is not a politician and that leaders should not be tied to donors (Times of San Diego; KPBS).',
          'He emphasizes affordability (utilities, tenant protections, possibly higher taxes on large corporations), a parking structure near downtown, volunteer traffic-calming near schools, solar and safe battery storage.',
        ],
        scorecard: [
          { topic: 'Affordability', position: '✓✓ Tenant protections, utility costs, possible higher taxes on large corporations', comparison: 'The most renter-focused platform in the field.' },
          { topic: 'Housing', position: '✓ Supports affordable housing; criticizes apartments with no affordable units and wants more parking required', comparison: 'Dillard is closest on affordable housing.' },
          { topic: 'Climate', position: '✓ More solar, safe battery storage, a “regenerative mindset”', comparison: 'Lothian would trim the climate action plan.' },
          { topic: 'Civic Center', position: '~ Wants a parking structure near City Hall; other Civic Center items not urgent', comparison: 'Dillard wants the full library plan.' },
        ],
        money: 'No contributions reported as of Sept. 30, 2026 (KPBS).',
        endorsements: 'Blackbird Apothecary, Junk Medics, Reanimate Records and Marathon Coffee, all La Mesa businesses (KPBS).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Normandy-Dillard', '●', 'Progressive Left voters want transit-oriented affordable housing and a services-first homelessness response, which Dillard defends and Lothian would end.'],
      ['EL', 'Normandy-Dillard', '●', 'Establishment Liberals value the Democratic-endorsed councilmember with MTS and regional experience and a funded path for the library.'],
      ['DM', 'Normandy-Dillard', '●', 'Democratic Mainstays follow the county Democratic Party and the Labor Council to Dillard.'],
      ['OL', 'Normandy-Dillard', '◐', 'Outsider Left voters may like Reese’s anti-donor, renter-first pitch, but Dillard is the progressive with a realistic path against a Republican.'],
      ['SS', 'Lothian', '○', 'Stressed Sideliners who mostly want working parks, safe streets and fewer fees may respond to Lothian’s street-level service pitch.'],
      ['AR', 'Lothian', '◐', 'Ambivalent Right voters like her focus on core services and skepticism of consultants and the Civic Center, though she has clashed with colleagues.'],
      ['PR', 'Lothian', '●', 'Populist Right voters back the Reform California–endorsed candidate who would end HOME and fight apartment projects.'],
      ['CC', 'Lothian', '●', 'Committed Conservatives back the Republican-endorsed councilmember who stresses police and fire staffing and spending restraint.'],
      ['FF', 'Lothian', '●', 'Faith and Flag Conservatives back the GOP-endorsed candidate and her tough line on homelessness.'],
    ]),
    counterArguments: [
      'PR/CC (Lothian ●): But the mayor is one vote of five on a council with a guaranteed Democratic supermajority, and Lothian has often been outvoted; Stieringer offers a Republican alternative with city finance experience.',
      'PL/EL (Dillard ●): But the HOME program’s results are contested: Lothian cites 380 placements since 2020 alongside continued complaints, and voters can reasonably want more accountability for outreach spending.',
      'OL (Dillard ◐): But Reese is the only candidate refusing donor money and centering renters, if a protest vote matters more than the outcome.',
    ],
  },

  // ---------------------------------------------------------------- City Council
  {
    id: 'la-mesa-city-council',
    categoryId: 'city',
    title: 'La Mesa City Council',
    tldrLabel: 'La Mesa City Council (2 seats)',
    voteFor: 2,
    seatContext: 'Two open seats, two candidates',
    kind: 'candidates',
    stakesParagraphs: [
      'La Mesa elects four councilmembers at large for four-year terms; with the mayor they make up the five-member council that adopts the budget, approves development and sets local law. Two seats are open because councilmembers Laura Lothian and Patricia Normandy-Dillard are both running for mayor.',
      'Only two candidates filed for the two seats, so both will be elected unless something extraordinary happens. Both are endorsed by the county Democratic Party and the council’s three Democrats, which guarantees a continued Democratic supermajority (Times of San Diego). Voters can still cast one or both votes, or leave the contest blank.',
    ],
    introParagraphs: [
      'Moana Alo and Amanda-Dawn Natalia both appeared at the Sept. 29 candidate forum, where Times of San Diego described the contest as not competitive. Both are first-time candidates who have served on city commissions.',
    ],
    legalRequirements: CITY_LEGAL,
    qualificationCriteria: CITY_CRITERIA,
    readingLinks: [
      { label: 'KPBS: party endorsement guide (Sept. 30, 2026)', url: KPBS_ENDORSEMENTS, summary: 'County Democratic and Republican picks in La Mesa, LMSV and Helix races and on Measures AA and G.' },
      { label: 'Times of San Diego: La Mesa election preview (Sept. 28, 2026)', url: TOSD_PREVIEW, summary: 'Backgrounds and endorsements for both council candidates.' },
    ],
    candidates: [
      {
        id: 'moana-alo',
        name: 'Moana Alo',
        party: 'NP',
        role: 'Senate District Representative',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Alo works as a district representative for State Sen. Akilah Weber Pierson and has sat on La Mesa’s Community Services Commission since 2020. She has not held elected office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Community Services Commissioner since 2020; state Senate district representative handling constituent cases (ballot statement; Times of San Diego).' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No public budget role documented; runs a small notary and consulting business.' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'No land-use role documented; lists housing, homelessness and tenant protections as priorities.' },
            { criterionId: 'community', assessment: 'met', evidence: 'La Mesa resident 10+ years; president of the Hawaiian Civic Club of San Diego; Senate constituent-services work.' },
          ],
        },
        bio: [
          'Alo is a district representative for State Sen. Akilah Weber Pierson, a La Mesa Community Services Commissioner since 2020, a small-business owner (notary and consulting) and president of the Hawaiian Civic Club of San Diego. She holds a master’s in education from Point Loma Nazarene and says she has nearly completed a Ph.D.',
          'Her priorities are stronger tenant protections, expanded senior services, small-business support and youth investment (ballot statement).',
        ],
        scorecard: [
          { topic: 'Housing & tenants', position: '✓✓ Stronger tenant protections; housing and homelessness a top priority', comparison: 'Natalia emphasizes affordability and climate resilience.' },
          { topic: 'Seniors & youth', position: '✓✓ Expanded senior services and youth investment', comparison: 'Similar emphasis to Natalia on community services.' },
          { topic: 'Small business', position: '✓ Pledges support for small businesses', comparison: 'Natalia also runs a La Mesa-based small firm.' },
          { topic: 'Public safety & budget', position: '? No specific position published', comparison: 'Natalia lists safe streets but no budget specifics.' },
        ],
        money: 'No campaign finance totals found in news coverage as of Oct. 13, 2026; filings are on the county campaign-disclosure portal.',
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026); Councilmembers Lauren Cazares, Patricia Normandy-Dillard and Genevieve Suzuki (Times of San Diego).',
      },
      {
        id: 'amanda-dawn-natalia',
        name: 'Amanda-Dawn Natalia',
        party: 'NP',
        role: 'Attorney/Commissioner/Mother',
        campaignUrl: 'https://www.vote-amanda-dawn.now/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Natalia is a private-practice attorney who chairs La Mesa’s Environmental Sustainability Commission and sits on the La Mesa-Spring Valley School District’s bond oversight committee. She has not held elected office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Chair of the city’s Environmental Sustainability Commission (ballot statement).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Member of the LMSVSD Community Bond Oversight Committee, which reviews bond spending (ballot statement).' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'No land-use role documented; lists climate resilience and affordability as priorities.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Born in La Mesa and back for 21 years; Litter Free La Mesa volunteer; endorsed by the Labor Council and Building Trades (ballot statement).' },
          ],
        },
        bio: [
          'Natalia was born in La Mesa, grew up in Lakeside and has lived in La Mesa for 21 years. She is a private-practice attorney with a small La Mesa firm, chairs the Environmental Sustainability Commission, and sits on the La Mesa-Spring Valley School District’s bond oversight committee (ballot statement).',
          'Her priorities are safe streets, climate resilience, community engagement and affordability (Times of San Diego).',
        ],
        scorecard: [
          { topic: 'Climate', position: '✓✓ Chairs the city’s Environmental Sustainability Commission; climate resilience a priority', comparison: 'Alo’s platform centers on tenants and seniors.' },
          { topic: 'Affordability', position: '✓ Lists affordability as a priority', comparison: 'Alo goes further with tenant protections.' },
          { topic: 'Safe streets', position: '✓ Safe streets a stated priority', comparison: 'Alo has not published a streets position.' },
          { topic: 'Budget & oversight', position: '~ Bond-oversight committee experience; no city budget positions published', comparison: 'Alo has no published budget positions either.' },
        ],
        money: 'No campaign finance totals found in news coverage as of Oct. 13, 2026; filings are on the county campaign-disclosure portal.',
        endorsements:
          'San Diego County Democratic Party (KPBS, Sept. 30, 2026); Councilmembers Cazares, Normandy-Dillard and Suzuki; San Diego & Imperial Counties Labor Council; San Diego Building and Construction Trades Council (ballot statement).',
        notes: ['Mayoral candidate Quinn Reese said he would support her, citing her climate work (KPBS).'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Alo, Natalia', '●', 'Progressive Left voters get two Democratic-endorsed candidates focused on tenants, seniors and climate, with no alternative on the ballot.'],
      ['EL', 'Alo, Natalia', '●', 'Establishment Liberals back both party- and council-endorsed commissioners with city service records.'],
      ['DM', 'Alo, Natalia', '●', 'Democratic Mainstays follow the county party and Labor Council, which back both.'],
      ['OL', 'Alo, Natalia', '◐', 'Outsider Left voters may see both as insider picks of the council majority, but their tenant and climate priorities align and there is no one else.'],
      ['SS', 'Alo, Natalia', '○', 'Stressed Sideliners face a race that is already decided; voting for both or skipping costs little.'],
      ['AR', 'Alo, Natalia', '○', 'Ambivalent Right voters have no alternative; undervoting is a reasonable signal of dissatisfaction.'],
      ['PR', 'Alo, Natalia', '○', 'Populist Right voters may prefer to leave the line blank, but the only names are these two.'],
      ['CC', 'Alo, Natalia', '○', 'Committed Conservatives get no Republican-endorsed option; the pick reflects the absence of choice, not agreement.'],
      ['FF', 'Alo, Natalia', '○', 'Faith and Flag Conservatives face only Democratic-endorsed candidates and may skip the contest.'],
    ]),
    counterArguments: [
      'CC/PR (Alo, Natalia ○): But with two candidates for two seats, leaving the line blank or writing in a name is a legitimate way to register that the council lacks ideological balance.',
    ],
  },

  // ---------------------------------------------------------------- City Treasurer
  {
    id: 'la-mesa-city-treasurer',
    categoryId: 'city',
    title: 'La Mesa City Treasurer',
    tldrLabel: 'La Mesa Treasurer',
    seatContext: 'Appointed interim incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'La Mesa is one of few cities that still elects its treasurer. The part-time job ($1,100 a month) oversees investment of the city’s roughly $70 million portfolio (Times of San Diego). The finance department handles day-to-day accounting; former Treasurer Matt Strabone argued the post need not be elected at all.',
      'Strabone resigned in August 2026 for a job with NATO. On Sept. 8 the council appointed 20-year-old UCLA student Emmett Stewart as interim treasurer over the only other applicant, Bill Exeter, a 64-year-old financial executive; the two now face off for a full four-year term, making this a straight choice between youth and fresh eyes and decades of finance experience.',
    ],
    introParagraphs: [
      'Exeter, a Republican, lost to Strabone in 2022 (about 46% to 54% in early returns, East County Magazine). The county Democratic Party endorses Stewart and the county GOP endorses Exeter (KPBS, Sept. 30, 2026). Stewart’s printed designation, “Financial Analyst,” was set before his appointment and does not mention it.',
    ],
    legalRequirements: CITY_LEGAL,
    qualificationCriteria: [
      { id: 'investment', label: 'Investment and cash management', detail: 'The treasurer oversees investment of a roughly $70 million public portfolio under state safety and liquidity rules.' },
      { id: 'public-finance', label: 'Public-sector finance and reporting', detail: 'The office reports on investments to the council and public and follows California government-investment law.' },
      { id: 'credentials', label: 'Finance training or credentials', detail: 'Managing public money requires grounding in fixed-income markets, risk and accounting.' },
      { id: 'independence', label: 'Independent oversight', detail: 'An elected treasurer is meant to be a check on how the city handles its money.' },
    ],
    readingLinks: [
      { label: 'Times of San Diego: UCLA student appointed treasurer (Sept. 14, 2026)', url: TOSD_TREASURER, summary: 'The council debate, both applicants’ backgrounds and the job’s scope.' },
      { label: 'Times of San Diego: exit interview with Matt Strabone (Aug. 20, 2026)', url: 'https://timesofsandiego.com/politics/2026/08/20/exit-interview-with-matt-strabone-la-mesa-does-not-need-an-elected-treasurer/', summary: 'Former treasurer’s case that the post need not be elected.' },
    ],
    candidates: [
      {
        id: 'emmett-stewart',
        name: 'Emmett Stewart',
        party: 'NP',
        role: 'Financial Analyst',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Stewart is a 20-year-old UCLA math and economics student who has been interim treasurer since September 2026. Before that his finance experience was a personal portfolio, tutoring and a summer internship.',
          criteria: [
            { criterionId: 'investment', assessment: 'not-met', evidence: 'Told the council his experience was limited to his own portfolio; when asked the size of the city portfolio he said “I do not know the direct number” (Times of San Diego).' },
            { criterionId: 'public-finance', assessment: 'partial', evidence: 'Interim La Mesa treasurer since Sept. 8, 2026 (about five weeks at this writing).' },
            { criterionId: 'credentials', assessment: 'partial', evidence: 'UCLA undergraduate in math and economics; summer 2026 internship at Expeditors, a logistics company; no finance license or credential reported.' },
            { criterionId: 'independence', assessment: 'unknown', evidence: 'Appointed by the council majority; no record yet as an independent check.' },
          ],
        },
        bio: [
          'Stewart was born and raised in La Mesa and studies math and economics at UCLA, where he has been a resident assistant; he also tutors. He interned in business operations at a logistics company in summer 2026. On Sept. 8 the council majority appointed him interim treasurer, making him the youngest officeholder in city history (Times of San Diego).',
          'He told the council he brings “a fresh set of young eyes and ears to our local government” and runs “because I care about this city.”',
        ],
        recordVsChange:
          'Stewart has held the post for only weeks, so there is no record to judge; the case for him is the council majority’s confidence and the job’s limited scope, while the case against is that the office oversees about $70 million and he could not name the portfolio’s size when interviewed.',
        scorecard: [
          { topic: 'Investment management', position: '? No published investment approach; personal-portfolio experience only', comparison: 'Exeter cites four decades running financial firms.' },
          { topic: 'Transparency', position: '? No published reporting plans', comparison: 'Exeter has not published specifics either.' },
          { topic: 'Office’s future', position: '? No stated view on keeping the office elected', comparison: 'Strabone, his predecessor, favored moving the job to the finance department.' },
          { topic: 'Partisan alignment', position: '~ Endorsed by the county Democratic Party', comparison: 'Exeter is a Republican endorsed by the county GOP.' },
        ],
        money: 'No campaign finance totals found in news coverage as of Oct. 13, 2026.',
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026).',
      },
      {
        id: 'bill-exeter',
        name: 'Bill Exeter',
        party: 'NP',
        role: 'Treasurer/CFO/CEO',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Exeter has about four decades as a financial adviser and is CEO of the Exeter Group, a set of financial-services firms. He has not held public office.',
          criteria: [
            { criterionId: 'investment', assessment: 'met', evidence: 'CEO of the Exeter Group, whose firms manage funds and assets for real estate investors; about 40 years as a financial adviser (Times of San Diego).' },
            { criterionId: 'public-finance', assessment: 'not-met', evidence: 'No public-agency finance role documented.' },
            { criterionId: 'credentials', assessment: 'partial', evidence: 'Lists himself as treasurer and CFO of his companies (ballot designation); specific licenses or credentials not verified.' },
            { criterionId: 'independence', assessment: 'partial', evidence: 'Not tied to the council majority, which passed him over; ran for the office in 2022.' },
          ],
        },
        bio: [
          'Exeter, 64, is CEO of the Exeter Group, a family of financial-advisory firms that manage funds and assets for real estate investors, and has about 40 years as a financial adviser (Times of San Diego). He is a Republican and ran for treasurer in 2022, losing to Matt Strabone.',
          'He applied for the interim appointment and told the council the choice “boil[s] down to one word, and that is experience.”',
        ],
        scorecard: [
          { topic: 'Investment management', position: '✓✓ Four decades in private financial advising and fund management', comparison: 'Stewart’s experience is a personal portfolio.' },
          { topic: 'Transparency', position: '? No published reporting plans', comparison: 'Same gap for Stewart.' },
          { topic: 'Public-sector rules', position: '? No public-agency investing experience documented', comparison: 'Stewart has a few weeks in the office.' },
          { topic: 'Partisan alignment', position: '~ Republican; endorsed by the county GOP', comparison: 'Stewart is Democratic-endorsed.' },
        ],
        money: 'No campaign finance totals found in news coverage as of Oct. 13, 2026.',
        endorsements: 'Republican Party of San Diego County, listed as William Lee Exeter (KPBS, Sept. 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Stewart', '◐', 'Progressive Left voters side with the Democratic-endorsed newcomer and value bringing a young resident into local government.', 'Progressive Left voters who put competence first could back Exeter, who has run financial firms for decades, for a job that safeguards about $70 million; they would give up the Democratic endorsement and back a Republican.'],
      ['EL', 'Exeter', '◐', 'Establishment Liberals put weight on demonstrated expertise in a technical money-management post, even when their party backs the other candidate.'],
      ['DM', 'Stewart', '◐', 'Democratic Mainstays follow the county Democratic Party, which endorses Stewart.', 'Democratic Mainstays wary of a 20-year-old managing city investments could choose Exeter’s four decades in finance, setting aside the party endorsement for this one technical office.'],
      ['OL', 'Stewart', '○', 'Outsider Left voters like a young non-politician, though his appointment by the council majority is its own kind of insider path.', 'Outsider Left voters could back Exeter, who is not the council majority’s pick and brings far more finance experience, at the cost of electing a Republican.'],
      ['SS', 'Exeter', '○', 'Stressed Sideliners who barely track the office may simply prefer the candidate with more experience handling money.'],
      ['AR', 'Exeter', '●', 'Ambivalent Right voters want a seasoned financial professional, not an on-the-job learner, handling public funds.'],
      ['PR', 'Exeter', '●', 'Populist Right voters see the student appointment as the council majority picking its own and back the GOP-endorsed challenger.'],
      ['CC', 'Exeter', '●', 'Committed Conservatives back the Republican-endorsed financial executive for careful stewardship of city money.'],
      ['FF', 'Exeter', '●', 'Faith and Flag Conservatives follow the GOP endorsement to Exeter.'],
    ]),
    counterArguments: [
      'PL/DM (Stewart ◐): But this office exists to watch over public money, and Stewart could not name the size of the portfolio he would oversee when the council interviewed him.',
      'CC/AR (Exeter ●): But the treasurer’s role is narrow and the finance department does the daily work; private real estate investment experience is not the same as managing a public portfolio under state rules.',
    ],
  },

  // ---------------------------------------------------------------- LMSVSD Area 1
  {
    id: 'lmsvsd-trustee-area-1',
    categoryId: 'school',
    title: 'La Mesa-Spring Valley School District, Trustee Area 1',
    tldrLabel: 'LMSV School Board, Area 1',
    seatContext: 'Appointed incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The La Mesa-Spring Valley School District runs preschool through eighth grade for more than 10,000 students in La Mesa, Spring Valley and parts of El Cajon and Lemon Grove. Five trustees elected by area adopt the budget, bargain with employees, approve curriculum and hire the superintendent.',
      'Most of the district’s 21 schools are more than 60 years old, and the board is asking voters for a $131 million bond (Measure AA) on the same ballot. Area 1 covers west La Mesa and part of El Cajon; the choice is between a teacher appointed to the seat in 2024 and a parent backed by the teachers’ union and the Democratic Party.',
    ],
    introParagraphs: [
      'Sarah Reed was provisionally appointed to the Area 1 vacancy in fall 2024 and is running for the first time. Rebecca Tweedle is endorsed by the La Mesa-Spring Valley Teachers Association and the county Democratic Party (ballot statement; KPBS, Sept. 30, 2026). No news coverage of this race was found.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'sarah-reed',
        name: 'Sarah Reed',
        party: 'NP',
        role: 'Teacher/Board Member',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Reed has held the Area 1 seat since a fall 2024 appointment and has taught special education for nearly 20 years. She is a former PTA president in the district.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'LMSVSD trustee since the board’s provisional appointment in Oct. 2024 (district board page lists term 2024–2026).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Has voted on district budgets since late 2024; no other budget role documented.' },
            { criterionId: 'instruction', assessment: 'met', evidence: 'Special education teacher for nearly 20 years; master’s degree from Point Loma Nazarene (ballot statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Former PTA president at her children’s school; parent of six current or future district students (ballot statement).' },
          ],
        },
        bio: [
          'Reed is a second-generation district graduate (Grossmont High, 2003) and a special education teacher for nearly 20 years. She and her husband are foster, adoptive and biological parents of six children in or headed to district schools. She was PTA president before the board appointed her to fill the Area 1 vacancy in 2024 (ballot statement; district board page).',
          'She says the district’s top priority should be developing “kind, hardworking, community- and service-oriented students,” and cites her faith as a motivation.',
        ],
        recordVsChange:
          'Reed has served about two years and brings both classroom and board experience; the case for change rests on the teachers’ union and Democratic Party backing her opponent, though neither has published a specific criticism of her votes.',
        scorecard: [
          { topic: 'Special education', position: '✓✓ Career special educator and parent of children with a range of needs', comparison: 'Tweedle stresses mental health and safety.' },
          { topic: 'Staff pay', position: '? No position published', comparison: 'Tweedle calls for competitive teacher and staff pay.' },
          { topic: 'Facilities / Measure AA', position: '? No stated position found', comparison: 'Tweedle’s position on AA was not found either.' },
          { topic: 'Parent engagement', position: '✓ Former PTA president; active in PTA', comparison: 'Tweedle volunteers in classrooms and started a run club.' },
        ],
        money: 'No campaign finance totals found as of Oct. 13, 2026.',
        endorsements: 'None found in public sources as of Oct. 13, 2026.',
      },
      {
        id: 'rebecca-tweedle',
        name: 'Rebecca Tweedle',
        party: 'NP',
        role: 'Operations Manager/Parent',
        campaignUrl: 'https://rebeccatweedle.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Tweedle is an operations manager and a district parent who volunteers in classrooms. She has not served on a school board or worked in K-12.',
          criteria: [
            { criterionId: 'governance', assessment: 'not-met', evidence: 'No board or public office documented.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Operations manager by profession (ballot designation); no public budget role documented.' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'Classroom and school-garden volunteer; MA in International Peace and Conflict Resolution (ballot statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Parent of two district students; started a run club; AYSO and Little League volunteer; endorsed by the LMSV Teachers Association.' },
          ],
        },
        bio: [
          'Tweedle is a San Diego native and UC San Diego graduate who has lived in La Mesa for eight years. She works as an operations manager, has two children in district schools, and volunteers in classrooms, the school garden and youth sports (ballot statement).',
          'Her priorities are student safety, mental health, “evidence-backed, modern methods,” and competitive pay to attract and retain teachers and staff.',
        ],
        scorecard: [
          { topic: 'Staff pay', position: '✓✓ Competitive compensation for teachers and staff', comparison: 'Reed has not published a pay position.' },
          { topic: 'Student safety & mental health', position: '✓✓ Top priorities', comparison: 'Reed emphasizes character and service.' },
          { topic: 'Instruction', position: '✓ Evidence-backed, modern methods', comparison: 'Reed brings 20 years of special-education teaching.' },
          { topic: 'Partisan alignment', position: '~ Endorsed by the county Democratic Party and LMSV Teachers Association', comparison: 'No party endorsement found for Reed.' },
        ],
        money: 'No campaign finance totals found as of Oct. 13, 2026.',
        endorsements: 'La Mesa-Spring Valley Teachers Association (ballot statement); San Diego County Democratic Party (KPBS, Sept. 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Tweedle', '◐', 'Progressive Left voters follow the teachers’ union to the candidate pledging competitive pay and mental-health support.', 'Progressive Left voters who weigh experience could keep Reed, a 20-year special-education teacher already on the board, giving up the union and party endorsement.'],
      ['EL', 'Tweedle', '◐', 'Establishment Liberals tend to follow the Democratic Party and teachers’ association in nonpartisan school races.', 'Establishment Liberals who value continuity could back Reed, who already sits on the board and teaches special education, setting aside the party and union endorsements.'],
      ['DM', 'Tweedle', '●', 'Democratic Mainstays follow the county Democratic Party endorsement to Tweedle.'],
      ['OL', 'Tweedle', '○', 'Outsider Left voters like a parent volunteer over an appointee, though both are relative newcomers to the board.', 'Outsider Left voters could back Reed, a working teacher with two years on the board, giving up Tweedle’s union-backed focus on staff pay.'],
      ['SS', 'Reed', '○', 'Stressed Sideliners may default to the sitting trustee who is also a longtime local teacher.'],
      ['AR', 'Reed', '◐', 'Ambivalent Right voters prefer experienced, low-drama board members, and Reed combines classroom and board service.'],
      ['PR', 'Reed', '○', 'Populist Right voters lean away from the union-endorsed candidate, though no Republican is endorsed here.'],
      ['CC', 'Reed', '◐', 'Committed Conservatives prefer the candidate not backed by the teachers’ union and Democratic Party.'],
      ['FF', 'Reed', '◐', 'Faith and Flag Conservatives may respond to Reed’s faith-based service language and large family, though she is not party-endorsed.'],
    ]),
    counterArguments: [
      'CC/FF (Reed ◐): But Reed has not taken the positions conservatives often seek, and no Republican group has endorsed her; the pick reflects opposition to the union slate more than her record.',
      'DM (Tweedle ●): But Reed is a working teacher who already knows the board’s budget and special-education issues; union backing is not the same as experience.',
    ],
  },

  // ---------------------------------------------------------------- LMSVSD Area 2
  {
    id: 'lmsvsd-trustee-area-2',
    categoryId: 'school',
    title: 'La Mesa-Spring Valley School District, Trustee Area 2',
    tldrLabel: 'LMSV School Board, Area 2',
    seatContext: 'Incumbent (board president)',
    kind: 'candidates',
    stakesParagraphs: [
      'The La Mesa-Spring Valley School District runs preschool through eighth grade for more than 10,000 students. Five trustees elected by area adopt the budget, bargain with employees, approve curriculum and hire the superintendent, and the board is asking for a $131 million facilities bond (Measure AA) on this ballot.',
      'Area 2 covers central La Mesa. Board President Rebecca McRae, first elected in 2018, faces two teachers: Jennifer Littig, endorsed by the teachers’ association and the county Democratic Party, and Myriam Moody, endorsed by the county Republican Party, who lost to McRae in 2022.',
    ],
    introParagraphs: [
      'In 2022 McRae beat Moody about 57% to 43% with Democratic and California Teachers Association backing (East County Magazine). This year the county Democratic Party and the LMSV Teachers Association endorse Littig instead (KPBS, Sept. 30, 2026; ballot statement); public reporting on why was not found.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'jennifer-littig',
        name: 'Jennifer Littig',
        party: 'NP',
        role: 'Public School Teacher',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Littig is in her 23rd year as a public school teacher and a district parent. She has not served on a school board.',
          criteria: [
            { criterionId: 'governance', assessment: 'not-met', evidence: 'No board or public office documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget role documented; pledges “thoughtful, transparent financial decisions.”' },
            { criterionId: 'instruction', assessment: 'met', evidence: '23 years as a public school teacher (ballot statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Parent of two children educated in the district; endorsed by the LMSV Teachers Association.' },
          ],
        },
        bio: [
          'Littig is in her 23rd year as a public school teacher and the parent of two children educated in the district (ballot statement).',
          'Her priorities are attracting and retaining teachers and classified staff, stronger partnerships with families, and transparent financial decisions.',
        ],
        scorecard: [
          { topic: 'Staff recruitment & pay', position: '✓✓ Top priority: attract and retain teachers and classified staff', comparison: 'McRae lists support for staff among several priorities; Moody focuses on academics.' },
          { topic: 'Academics', position: '~ No specific achievement targets published', comparison: 'Moody wants above-state-average reading and math results.' },
          { topic: 'Budget', position: '✓ Pledges transparent financial decisions', comparison: 'McRae has voted on budgets since 2018.' },
          { topic: 'Partisan alignment', position: '~ Endorsed by the county Democratic Party and LMSV Teachers Association', comparison: 'Moody is GOP-endorsed; McRae had Democratic backing in 2022 but not in 2026.' },
        ],
        money: 'No campaign finance totals found as of Oct. 13, 2026.',
        endorsements: 'La Mesa-Spring Valley Teachers’ Association (ballot statement); San Diego County Democratic Party (KPBS, Sept. 30, 2026).',
      },
      {
        id: 'rebecca-mcrae',
        name: 'Rebecca McRae',
        party: 'NP',
        role: 'Board Member/Teacher',
        campaignUrl: 'https://www.rebeccaforlmsv.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'McRae has represented Area 2 since 2018 and is the board president. She is an elementary school teacher with a master’s in education.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Trustee since Dec. 2018, re-elected 2022; current board president (district board page; ballot statement).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on district budgets since 2019 and, as president, on placing Measure AA on the 2026 ballot.' },
            { criterionId: 'instruction', assessment: 'met', evidence: 'Elementary school teacher with a master’s in education (ballot statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Parent of children who attended district schools; won Area 2 twice.' },
          ],
        },
        bio: [
          'McRae is an elementary school teacher with a master’s in education whose children attended district schools and now attend Helix High. She was first elected in 2018 and re-elected in 2022, and is board president (ballot statement).',
          'She lists strong academics, support for teachers and staff, safe schools, fiscal responsibility and transparent decision-making as priorities.',
        ],
        recordVsChange:
          'McRae brings eight years on the board and the president’s gavel; the case for change is that the teachers’ association and Democratic Party, which backed her before, now endorse Littig, though they have not published reasons.',
        scorecard: [
          { topic: 'Experience', position: '✓✓ Nearly eight years on the board; current president', comparison: 'Neither challenger has board experience.' },
          { topic: 'Academics', position: '✓ Strong academics and continuous improvement', comparison: 'Moody is more specific: beat the state average in reading and math.' },
          { topic: 'Staff support', position: '✓ Support for teachers and staff', comparison: 'Littig makes staff retention her top priority.' },
          { topic: 'Facilities', position: '✓ Board voted to place Measure AA on the ballot', comparison: 'Challengers’ positions on AA not found.' },
        ],
        money: 'No campaign finance totals found as of Oct. 13, 2026.',
        endorsements: 'No 2026 endorsements found in public sources; she was endorsed by the county Democratic Party and the California Teachers Association in 2022 (East County Magazine).',
      },
      {
        id: 'myriam-moody',
        name: 'Myriam S. Moody',
        party: 'NP',
        role: 'Teacher',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Moody is a college math professor and 20-year La Mesa resident who ran for this seat in 2022. She has not served on a school board.',
          criteria: [
            { criterionId: 'governance', assessment: 'not-met', evidence: 'No board or public office documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget role documented.' },
            { criterionId: 'instruction', assessment: 'met', evidence: 'College math professor who sees the results of K-12 preparation (ballot statement; 2022 coverage described her as a community college professor).' },
            { criterionId: 'community', assessment: 'partial', evidence: '20-year La Mesa resident; won about 43% against McRae in 2022 (East County Magazine).' },
          ],
        },
        bio: [
          'Moody is a college math professor and 20-year La Mesa resident. She ran for Area 2 in 2022 with Republican Party backing and lost to McRae (East County Magazine).',
          'Her platform is “back to the basics”: reading, writing and arithmetic, a higher curriculum bar, and tracking outcomes so the district performs above California standards (ballot statement).',
        ],
        scorecard: [
          { topic: 'Academics', position: '✓✓ Above-state-average reading and math; track real outcomes', comparison: 'McRae and Littig speak more generally about academics.' },
          { topic: 'Curriculum', position: '✓ Hold curriculum “to a higher bar” on fundamentals', comparison: 'Littig and McRae have not detailed curriculum changes.' },
          { topic: 'Staff support', position: '~ Support teachers with tools for fundamentals; no pay position', comparison: 'Littig prioritizes recruitment and pay.' },
          { topic: 'Partisan alignment', position: '~ Endorsed by the county Republican Party', comparison: 'Littig is Democratic-endorsed.' },
        ],
        money: 'No campaign finance totals found as of Oct. 13, 2026.',
        endorsements: 'Republican Party of San Diego County (KPBS, Sept. 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Littig', '◐', 'Progressive Left voters follow the teachers’ association to the classroom teacher focused on retaining staff.', 'Progressive Left voters could keep McRae, an eight-year trustee, board president and teacher the union backed in 2022, giving up the current union and party endorsement.'],
      ['EL', 'McRae', '◐', 'Establishment Liberals value institutional experience and steady leadership, and McRae has led the board as a previously Democratic-endorsed trustee.'],
      ['DM', 'Littig', '●', 'Democratic Mainstays follow the county Democratic Party, which endorses Littig this year.'],
      ['OL', 'Littig', '◐', 'Outsider Left voters like a working teacher challenging a long-serving board president.', 'Outsider Left voters who want a steady hand could back McRae, who has eight years on the board and teaches elementary school, giving up a fresh voice for staff.'],
      ['SS', 'McRae', '○', 'Stressed Sideliners who don’t follow the board may default to the incumbent teacher.'],
      ['AR', 'Moody', '◐', 'Ambivalent Right voters like Moody’s measurable back-to-basics goals, though she has no board experience.', 'Ambivalent Right voters who prize experience could back McRae, eight years on the board and a teacher, though she is not focused on the measurable reading and math targets Moody offers.'],
      ['PR', 'Moody', '●', 'Populist Right voters back the GOP-endorsed challenger against the union and the board establishment.'],
      ['CC', 'Moody', '●', 'Committed Conservatives back the Republican-endorsed candidate focused on fundamentals and outcomes.'],
      ['FF', 'Moody', '●', 'Faith and Flag Conservatives follow the Republican Party endorsement to Moody.'],
    ]),
    counterArguments: [
      'DM (Littig ●): But McRae has eight years on the board and the party backed her last time; the endorsement switch has not been publicly explained.',
      'PR/CC (Moody ●): But Moody lost this seat by 14 points in 2022, and a trustee is one vote of five; her academic goals need board allies to happen.',
    ],
  },

  // ---------------------------------------------------------------- LMSVSD Area 3
  {
    id: 'lmsvsd-trustee-area-3',
    categoryId: 'school',
    title: 'La Mesa-Spring Valley School District, Trustee Area 3',
    tldrLabel: 'LMSV School Board, Area 3',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The La Mesa-Spring Valley School District runs preschool through eighth grade for more than 10,000 students. Five trustees elected by area adopt the budget, bargain with employees, approve curriculum and hire the superintendent.',
      'Area 3 covers eastern La Mesa and the Mount Helix area. First-term trustee and board clerk Brianna Coston, backed by the teachers’ association and Democratic Party, faces Sarah Feeley, a PTA leader and former teacher who stresses transparency and fiscal responsibility.',
    ],
    introParagraphs: [
      'Coston won the seat narrowly in 2022 (East County Magazine). She is endorsed by the LMSV Teachers Association, the county Democratic Party and three La Mesa councilmembers; no party endorsement was found for Feeley (KPBS, Sept. 30, 2026; ballot statements).',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'brianna-coston',
        name: 'Brianna E Coston',
        party: 'NP',
        role: 'School Board Member',
        campaignUrl: 'https://www.briannacoston.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Coston has represented Area 3 since 2022 and is the board clerk. She sits on parent advisory bodies for the board.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Trustee since Dec. 2022; board clerk (district board page).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on district budgets since 2023; says she kept the budget “focused on our classrooms” amid funding uncertainty (ballot statement).' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'No teaching career documented; backed staff training pipelines and campus safety upgrades.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Board representative to the Mt. Helix PTA Council and District Parent Advisory Council (ballot statement).' },
          ],
        },
        bio: [
          'Coston was elected in 2022 and serves as board clerk. She cites secure single-point campus entries, school modernization, staff training pipelines and career advancement for employees as her record (ballot statement).',
          'She is endorsed by the LMSV Teachers Association, La Mesa Councilmembers Cazares, Dillard and Suzuki, and Lemon Grove Mayor Alysson Snow.',
        ],
        recordVsChange:
          'Coston has a four-year record on safety upgrades and staff pipelines and the board’s officer experience; the case for change is Feeley’s call for more transparency and fiscal discipline, though she has not cited specific votes she disagrees with.',
        scorecard: [
          { topic: 'Campus safety', position: '✓✓ Backed secure single-point entries', comparison: 'Feeley has not detailed a safety plan.' },
          { topic: 'Staff support', position: '✓✓ Training pipelines and career advancement for employees', comparison: 'Feeley stresses connecting campuses with district leadership.' },
          { topic: 'Budget', position: '✓ Says she kept cuts away from classrooms', comparison: 'Feeley campaigns on fiscal responsibility and transparency.' },
          { topic: 'Facilities', position: '✓ Advocates modernization as a district priority', comparison: 'Feeley’s position on Measure AA not found.' },
        ],
        money: 'No campaign finance totals found as of Oct. 13, 2026.',
        endorsements: 'LMSV Teachers Association; San Diego County Democratic Party (KPBS, Sept. 30, 2026); Councilmembers Lauren Cazares, Patricia Dillard, Genevieve Suzuki; Lemon Grove Mayor Alysson Snow (ballot statement).',
      },
      {
        id: 'sarah-feeley',
        name: 'Sarah Feeley',
        party: 'NP',
        role: 'Parent/Business Owner',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Feeley is a business owner, former teacher and five-year PTA executive board member who led fundraising of more than $500,000. She has not served on a school board.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Five years on Murdock Elementary PTA’s executive board (ballot statement); no public board service.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Led PTA fundraising of more than $500,000; runs a business (ballot statement).' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'Former teacher (ballot statement); years and setting not stated.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Third-generation district family; three children in district schools.' },
          ],
        },
        bio: [
          'Feeley grew up in district schools, where her mother also studied and worked; her three children attend now. She has served five years on the Murdock Elementary PTA executive board, leading fundraising of more than $500,000, and is a former teacher and business owner (ballot statement).',
          'She campaigns on transparency, fiscal responsibility and connecting campus realities with district leadership.',
        ],
        scorecard: [
          { topic: 'Transparency', position: '✓✓ Central campaign theme', comparison: 'Coston points to her board record.' },
          { topic: 'Budget', position: '✓ Fiscal responsibility', comparison: 'Coston says she protected classroom spending.' },
          { topic: 'Parent voice', position: '✓✓ Five years in PTA leadership', comparison: 'Coston serves on parent advisory bodies as a trustee.' },
          { topic: 'Staff support', position: '? No position published', comparison: 'Coston is union-endorsed and backs staff pipelines.' },
        ],
        money: 'No campaign finance totals found as of Oct. 13, 2026.',
        endorsements: 'None found in public sources as of Oct. 13, 2026.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Coston', '●', 'Progressive Left voters back the union- and Democratic-endorsed trustee who champions staff and public schools.'],
      ['EL', 'Coston', '●', 'Establishment Liberals value the incumbent’s board experience and broad local-official endorsements.'],
      ['DM', 'Coston', '●', 'Democratic Mainstays follow the county Democratic Party to Coston.'],
      ['OL', 'Coston', '◐', 'Outsider Left voters may want fresh faces but share Coston’s pro-staff priorities.'],
      ['SS', 'Coston', '○', 'Stressed Sideliners who don’t follow the board may default to the incumbent.'],
      ['AR', 'Feeley', '○', 'Ambivalent Right voters like Feeley’s fiscal-responsibility pitch, weakly, since her platform is thin on specifics.', 'Ambivalent Right voters who value experience could keep Coston, who has four years on the board and serves as clerk, giving up Feeley’s outsider push for transparency.'],
      ['PR', 'Feeley', '◐', 'Populist Right voters prefer a parent challenger over the union-endorsed incumbent.', 'Populist Right voters could back Coston for her board experience and campus-security record, accepting her union and Democratic backing.'],
      ['CC', 'Feeley', '◐', 'Committed Conservatives favor the candidate stressing fiscal responsibility over the Democratic-endorsed incumbent.', 'Committed Conservatives who weigh experience could choose Coston, who has voted on budgets since 2023 and backed campus-security upgrades, though she is the Democratic-endorsed candidate.'],
      ['FF', 'Feeley', '○', 'Faith and Flag Conservatives lean to the non-union candidate, though no Republican group has endorsed her.', 'Faith and Flag Conservatives could stick with Coston for her four years on the board, setting aside her union and Democratic endorsements.'],
    ]),
    counterArguments: [
      'CC/PR (Feeley ◐): But Feeley has not identified any board vote she would have cast differently, and Coston’s safety upgrades are the kind of work conservatives usually support.',
      'PL/EL (Coston ●): But a challenger focused on transparency and a $500,000 PTA fundraising record is a credible parent voice; incumbency alone is not a reason to re-elect.',
    ],
  },

  // ---------------------------------------------------------------- Helix Water Div 2
  {
    id: 'helix-water-div-2',
    categoryId: 'district',
    title: 'Helix Water District, Division 2',
    tldrLabel: 'Helix Water, Div. 2',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Helix Water District supplies treated water to La Mesa, El Cajon, Lemon Grove and parts of unincorporated East County. Its five directors, elected by division to four-year terms, set water rates, approve the budget and capital projects, and represent Helix on regional water bodies.',
      'The next board will set rates for the following five years, by law limited to the cost of service, while Helix joins the East County Advanced Water Purification project due online in 2027 (incumbent’s ballot statement). Division 2 pits a first-term director against a challenger who promises to hold down rates and is endorsed by three of her board colleagues.',
    ],
    introParagraphs: [
      'Andrea Beth Damsky was first elected in 2022 and is endorsed by the county Democratic Party (KPBS, Sept. 30, 2026). Lawrence Powers lists endorsements from Board President Kathleen Hedberg, Vice President Joel Scalzitti and Director Dan McMillan, and says he would have voted against an 8.3% rate increase the board approved last year (ballot statement). No news coverage of this race was found.',
    ],
    legalRequirements: WATER_LEGAL,
    qualificationCriteria: WATER_CRITERIA,
    candidates: [
      {
        id: 'lawrence-powers',
        name: 'Lawrence Powers',
        party: 'NP',
        role: 'Loan Officer',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Powers is a construction loan officer and former homebuilder with more than 20 years developing residential projects alongside water districts and utilities. He has not served on a public board.',
          criteria: [
            { criterionId: 'rates', assessment: 'partial', evidence: 'Says he managed multimillion-dollar budgets as owner and president of Horizon Homes, Inc.; licensed loan officer (ballot statement).' },
            { criterionId: 'infrastructure', assessment: 'partial', evidence: '20+ years as a contractor on residential and infrastructure projects, working with water districts and utilities (ballot statement).' },
            { criterionId: 'governance', assessment: 'not-met', evidence: 'No public-board service documented; volunteer facility director for the Mt. Helix Park Foundation.' },
            { criterionId: 'public', assessment: 'partial', evidence: 'Endorsed by three sitting Helix directors; publishes his phone and email for ratepayer contact.' },
          ],
        },
        bio: [
          'Powers is a construction loan officer and the former owner and president of Horizon Homes, Inc., with more than 20 years planning and building residential communities and infrastructure. He volunteers as facility director for the Mt. Helix Park Foundation (ballot statement).',
          'He promises to “hold the line” on water rates, says he would have voted no on last year’s 8.3% increase, and supports competitive bidding, contract review and low-interest financing.',
        ],
        scorecard: [
          { topic: 'Water rates', position: '✓✓ Would have opposed the 8.3% increase; pledges to keep rates low', comparison: 'Damsky says rates must reflect cost of service and promises fairness.' },
          { topic: 'Infrastructure', position: '✓ Prioritize critical repairs and capital projects to control costs', comparison: 'Damsky backs the ECAWP recycled-water project and EV charging.' },
          { topic: 'Contracting', position: '✓ Competitive bidding and thorough contract review', comparison: 'Damsky points to clean audits as finance committee chair.' },
          { topic: 'Climate & supply', position: '? No position on recycled water or electrification', comparison: 'Damsky supports ECAWP and electrification mandates.' },
        ],
        money: 'No campaign finance totals found as of Oct. 13, 2026.',
        endorsements: 'Helix Board President Kathleen Coates Hedberg, Vice President Joel A. Scalzitti and Director Dan McMillan (ballot statement).',
      },
      {
        id: 'andrea-beth-damsky',
        name: 'Andrea Beth Damsky',
        party: 'NP',
        role: 'Director, Helix Water District',
        campaignUrl: 'https://www.andreabethdamsky.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Damsky has been the Division 2 director since December 2022 and chairs the board’s Finance & Administration and Water Quality & Resources committees. She served five years on La Mesa’s Environmental Sustainability Commission before that.',
          criteria: [
            { criterionId: 'rates', assessment: 'met', evidence: 'Chair of the Finance & Administration Committee; the district received clean audits each year she served (ballot statement).' },
            { criterionId: 'infrastructure', assessment: 'met', evidence: 'Chair of the Water Quality & Resources Committee; supported the EV charging project and ECAWP (ballot statement).' },
            { criterionId: 'governance', assessment: 'met', evidence: 'Director since Dec. 2022; represents Helix on regional water and infrastructure committees.' },
            { criterionId: 'public', assessment: 'met', evidence: 'Five years on La Mesa’s Environmental Sustainability Commission before joining the board.' },
          ],
        },
        bio: [
          'Damsky was elected in 2022 and chairs Helix’s Finance & Administration and Water Quality & Resources committees. She holds a B.S. in environmental science and land-use planning, an M.S. in Traditional Chinese Medicine and an acupuncture license, and earned an executive-education certificate in public policy while in office (ballot statement).',
          'She backs the East County Advanced Water Purification project and Helix’s mostly grant-funded EV charging project, and says she will “hold the line on fairness” when the board sets five-year rates next year.',
        ],
        recordVsChange:
          'Damsky has one term chairing finance and water-quality committees with clean audits; the case for change is ratepayer frustration with recent increases, and three of her board colleagues back her challenger.',
        scorecard: [
          { topic: 'Water rates', position: '~ Rates must cover actual cost of service; promises fairness in the next five-year rate plan', comparison: 'Powers pledges to keep rates low and opposed last year’s 8.3% increase.' },
          { topic: 'Local supply', position: '✓✓ Supports ECAWP, expected to supply up to 30% of East County water', comparison: 'Powers has not addressed ECAWP.' },
          { topic: 'Finance & audits', position: '✓ Finance committee chair; clean audits each year', comparison: 'Powers emphasizes bidding and contract review.' },
          { topic: 'Climate', position: '✓ Backed EV charging project, 90% grant-funded', comparison: 'Powers has no stated climate position.' },
        ],
        money: 'No campaign finance totals found as of Oct. 13, 2026.',
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Damsky', '●', 'Progressive Left voters back the Democratic-endorsed director who champions recycled water and electrification.'],
      ['EL', 'Damsky', '●', 'Establishment Liberals value her committee leadership, clean audits and regional water work.'],
      ['DM', 'Damsky', '●', 'Democratic Mainstays follow the county Democratic Party endorsement.'],
      ['OL', 'Damsky', '◐', 'Outsider Left voters like her climate and local-supply priorities even if rate fairness is a concern.'],
      ['SS', 'Powers', '○', 'Stressed Sideliners squeezed by bills may respond to a pledge to hold down water rates.', 'Stressed Sideliners could keep Damsky, who already chairs the finance committee and will help set the next rate plan, though she has not promised to keep increases low.'],
      ['AR', 'Powers', '◐', 'Ambivalent Right voters like a contractor’s focus on bidding, contract review and cost control.', 'Ambivalent Right voters who value experience could back Damsky, a sitting director with clean audits as finance chair, though she supports climate projects they may see as costly.'],
      ['PR', 'Powers', '●', 'Populist Right voters back the challenger promising to fight rate increases.'],
      ['CC', 'Powers', '●', 'Committed Conservatives prefer the candidate stressing low rates and fiscal discipline, endorsed by three board members.'],
      ['FF', 'Powers', '◐', 'Faith and Flag Conservatives lean to the low-rates challenger over the Democratic-endorsed incumbent.', 'Faith and Flag Conservatives could stick with Damsky for her four years running the board’s finance committee, accepting her Democratic endorsement.'],
    ]),
    counterArguments: [
      'CC/PR (Powers ●): But water rates are legally limited to the cost of service, and a “no” vote on increases can defer needed repairs; Damsky’s committee record is the more tested.',
      'PL/EL (Damsky ●): But three of her own board colleagues endorse her challenger, and ratepayers have absorbed repeated increases.',
    ],
  },

  // ---------------------------------------------------------------- Helix Water Div 4
  {
    id: 'helix-water-div-4',
    categoryId: 'district',
    title: 'Helix Water District, Division 4',
    tldrLabel: 'Helix Water, Div. 4',
    seatContext: 'Incumbent (board president)',
    kind: 'candidates',
    stakesParagraphs: [
      'Helix Water District supplies treated water to La Mesa, El Cajon, Lemon Grove and parts of unincorporated East County. Its five directors, elected by division to four-year terms, set water rates, approve the budget and capital projects, and represent Helix on regional water bodies.',
      'The next board will adopt a five-year rate plan while the East County Advanced Water Purification project comes online in 2027. Division 4, in the Mount Helix and eastern La Mesa area, pits the board president, a civil engineer on the board since 2006, against an SDSU public-administration professor and a 24-year-old Democratic-endorsed policy director.',
    ],
    introParagraphs: [
      'Kathleen Coates Hedberg was first elected in 2006 and also represents Helix on the San Diego County Water Authority board (ballot statement). The county Democratic Party endorses Liliana Soriano Garista (KPBS, Sept. 30, 2026). Mounah Abdel-Samad filed no ballot statement. No news coverage of this race was found.',
    ],
    legalRequirements: WATER_LEGAL,
    qualificationCriteria: WATER_CRITERIA,
    candidates: [
      {
        id: 'kathleen-hedberg',
        name: 'Kathleen Hedberg',
        party: 'NP',
        role: 'Board Director, Helix Water District',
        campaignUrl: 'https://www.votehedberg.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Hedberg has been a Helix director since 2006 and is board president. She is a registered civil engineer with more than 35 years in the water industry.',
          criteria: [
            { criterionId: 'rates', assessment: 'met', evidence: 'Has voted on Helix budgets and rate plans since 2006; says she voted to cut a planned increase (ballot statement).' },
            { criterionId: 'infrastructure', assessment: 'met', evidence: 'Registered Civil Engineer with 35+ years in the water industry (ballot statement).' },
            { criterionId: 'governance', assessment: 'met', evidence: 'Director since Dec. 2006; board president; Helix representative on the San Diego County Water Authority board.' },
            { criterionId: 'public', assessment: 'met', evidence: 'President of the Water Conservation Garden Authority; elected member of the Valle de Oro Community Planning Group; Fire Safe Council co-president.' },
          ],
        },
        bio: [
          'Hedberg is a third-generation water professional, a registered civil engineer with more than 35 years in the industry and a master’s in public health from SDSU. She has been a Helix director since 2006, is board president, and represents Helix on the County Water Authority board (ballot statement).',
          'She cites cutting a planned rate increase, securing grants and low-interest financing, new local supplies, and statewide recognition for financial transparency; she also opposes state water-supply cuts and supports hardship assistance.',
        ],
        recordVsChange:
          'Hedberg brings two decades on the board and engineering expertise; the case for change is that 20 years is a long tenure and rates have risen repeatedly during it, though she points to cutting one planned increase.',
        scorecard: [
          { topic: 'Water rates', position: '✓ Voted to cut a planned increase; supports hardship programs', comparison: 'Garista and Abdel-Samad have no voting record.' },
          { topic: 'Infrastructure & supply', position: '✓✓ Civil engineer; backs new local supplies and long-term investment', comparison: 'Garista emphasizes long-term planning in general terms.' },
          { topic: 'State water policy', position: '✓ Opposes “unnecessary” state supply cuts', comparison: 'Challengers have not stated positions.' },
          { topic: 'Transparency', position: '✓ Cites statewide recognition for financial reporting', comparison: 'Garista pledges transparency.' },
        ],
        money: 'No campaign finance totals found as of Oct. 13, 2026.',
        endorsements: 'No organizational endorsements found as of Oct. 13, 2026. She endorses Lawrence Powers in Division 2.',
      },
      {
        id: 'mounah-abdel-samad',
        name: 'Mounah Abdel-Samad',
        party: 'NP',
        role: 'Public Administration Professor',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'An SDSU associate professor of public administration by this name researches water policy, among other topics; he filed no ballot statement, and his campaign has published no platform found.',
          criteria: [
            { criterionId: 'rates', assessment: 'unknown', evidence: 'No utility finance role documented.' },
            { criterionId: 'infrastructure', assessment: 'partial', evidence: 'SDSU faculty page lists research on water policy in the U.S. and the Arab world.' },
            { criterionId: 'governance', assessment: 'partial', evidence: 'Ph.D. in public administration and policy (University at Albany); teaches administrative theory at SDSU; no public-board service documented.' },
            { criterionId: 'public', assessment: 'unknown', evidence: 'No ballot statement or campaign site found.' },
          ],
        },
        bio: [
          'Abdel-Samad’s ballot designation is Public Administration Professor. An SDSU School of Public Affairs associate professor by that name teaches administrative theory, directs a social and economic vulnerabilities initiative, and lists research on water policy, legislative behavior and homelessness (SDSU faculty page). We could not confirm this is the same person from campaign materials.',
          'He filed no candidate statement and no platform or endorsements were found.',
        ],
        scorecard: [
          { topic: 'Water rates', position: '? No position published', comparison: 'Hedberg cites cutting a planned increase.' },
          { topic: 'Infrastructure & supply', position: '? No position published', comparison: 'Hedberg is a civil engineer.' },
          { topic: 'Governance', position: '? Public-administration expertise, no stated agenda', comparison: 'Garista pledges transparency and fact-based decisions.' },
        ],
        money: 'No campaign finance totals found as of Oct. 13, 2026.',
        endorsements: 'None found as of Oct. 13, 2026.',
      },
      {
        id: 'liliana-soriano-garista',
        name: 'Liliana Soriano Garista',
        party: 'NP',
        role: 'Director of Policy',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Garista, 24, is director of policy and co-executive director of a San Diego nonprofit and a 2023 UC San Diego political science graduate. She has not held public office or worked in the water sector.',
          criteria: [
            { criterionId: 'rates', assessment: 'partial', evidence: 'Says she has reviewed local government budgets in nonprofit policy work over six years (ballot statement).' },
            { criterionId: 'infrastructure', assessment: 'not-met', evidence: 'No water or infrastructure role documented.' },
            { criterionId: 'governance', assessment: 'not-met', evidence: 'No public-board service documented; co-executive director of an unnamed 501(c)(3) (ballot statement).' },
            { criterionId: 'public', assessment: 'partial', evidence: 'Community-engagement work in nonprofit policy role; former City of San Diego pool lifeguard.' },
          ],
        },
        bio: [
          'Garista, 24, was born and raised in San Diego, worked as a City of San Diego pool lifeguard from 16, and earned a political science degree from UC San Diego in 2023. She is director of policy and co-executive director of a San Diego nonprofit, which her statement does not name (ballot statement).',
          'She wants reliable, affordable water, responsible financial stewardship, transparency and greater community representation in local government.',
        ],
        scorecard: [
          { topic: 'Water rates', position: '✓ Reliable, affordable access; protect ratepayer resources', comparison: 'Hedberg has a voting record on rates.' },
          { topic: 'Infrastructure & climate', position: '~ Invest in infrastructure for drought and flooding; no specific projects', comparison: 'Hedberg is a civil engineer with specific projects.' },
          { topic: 'Representation', position: '✓✓ Fresh perspective and community representation', comparison: 'Hedberg has served since 2006.' },
          { topic: 'Partisan alignment', position: '~ Endorsed by the county Democratic Party', comparison: 'No party endorsement found for Hedberg or Abdel-Samad.' },
        ],
        money: 'No campaign finance totals found as of Oct. 13, 2026.',
        endorsements: 'San Diego County Democratic Party (KPBS, Sept. 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Garista', '◐', 'Progressive Left voters back the Democratic-endorsed candidate seeking broader community representation on a long-tenured board.', 'Progressive Left voters who put experience first could back Hedberg, a civil engineer on the board since 2006 who supports hardship aid, giving up the party-backed newcomer.'],
      ['EL', 'Hedberg', '◐', 'Establishment Liberals value technical expertise, and Hedberg’s engineering and regional water roles outweigh a newcomer for a utility board.'],
      ['DM', 'Garista', '●', 'Democratic Mainstays follow the county Democratic Party endorsement to Garista.'],
      ['OL', 'Garista', '◐', 'Outsider Left voters like a young newcomer challenging a 20-year incumbent.', 'Outsider Left voters could back Hedberg for her engineering expertise and regional water role, accepting another term for a long-serving director.'],
      ['SS', 'Hedberg', '○', 'Stressed Sideliners who don’t follow the board may default to the experienced incumbent.'],
      ['AR', 'Hedberg', '●', 'Ambivalent Right voters want proven technical competence and cost control on a utility board.'],
      ['PR', 'Hedberg', '◐', 'Populist Right voters dislike long incumbencies but prefer Hedberg’s fight against state supply cuts to a Democratic-endorsed newcomer.'],
      ['CC', 'Hedberg', '●', 'Committed Conservatives value her fiscal-transparency record and her endorsement of the low-rates candidate in Division 2.'],
      ['FF', 'Hedberg', '◐', 'Faith and Flag Conservatives lean to the experienced incumbent over the Democratic-endorsed challenger.'],
    ]),
    counterArguments: [
      'EL/AR (Hedberg ●/◐): But two decades of incumbency and repeated rate increases are a fair reason for some voters to want new perspectives on the board.',
      'DM/PL (Garista ●/◐): But Garista has no water or utility experience, and the next board sets five-year rates and oversees a major purification project; Abdel-Samad’s public-administration background is another alternative.',
    ],
  },

  // ---------------------------------------------------------------- Measure AA
  {
    id: 'lmsvsd-measure-aa',
    categoryId: 'local-measures',
    title: 'La Mesa-Spring Valley SD Measure AA — $131M school bond',
    tldrLabel: 'LMSV Measure AA — School bond',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure AA would let the La Mesa-Spring Valley School District borrow $131 million for repairs and upgrades at its elementary and middle schools, repaid by property owners at about $22 per $100,000 of assessed value through 2056-57. The district says 18 of its 21 schools are more than 60 years old and 81% of HVAC systems are past their useful life (KPBS).',
      'It is framed as an extension: the district expects to keep property owners paying roughly today’s bond rate rather than letting it fall as the 2002 Measure M bonds are paid off around 2028. The choice is whether those repairs justify about $258 million in total debt service over 30 years.',
    ],
    introParagraphs: [
      'The board placed AA on the ballot in June 2026. The San Diego County Taxpayers Association, the teachers’ association, the classified employees’ chapter and La Mesa Mayor Mark Arapostathis signed the ballot argument for it; no argument against was filed. Reform California and the county Republican Party oppose it (KPBS).',
    ],
    measure: {
      question:
        'La Mesa Spring Valley School District Classroom Repair & Upgrade Extension Measure. To repair/upgrade deteriorating roofs, plumbing, electrical systems; install air conditioning/shade structures to protect students from extreme heat; remove asbestos/lead pipes; and upgrade schools to current health/building safety/disability access standards, shall La Mesa Spring Valley School District’s measure be adopted, authorizing $131,000,000 in bonds at legal rates (without increasing current tax rates), levying $22 per $100,000 assessed value ($9,000,000 annually) while bonds are outstanding, with independent oversight and audits?',
      yesMeans:
        'Authorizes $131 million in district bonds for school repairs, air conditioning and safety upgrades, repaid by property owners at about $22 per $100,000 of assessed value through 2056-57.',
      noMeans:
        'Blocks the new bonds; owners keep paying for the 2002 and 2020 bonds, the combined rate falls as the 2002 bonds retire around 2028, and repairs would need other funding.',
      funding: {
        asOf: 'Oct. 13, 2026',
        note: 'News coverage reports no fundraising totals and no organized No committee (KPBS). We couldn’t search the county’s filings directly because the portal requires a search form; check the source below for the latest.',
        sources: [
          { label: 'KPBS: San Diego County school bond measures guide (Oct. 2, 2026)', url: KPBS_BONDS },
          { label: 'San Diego County Registrar of Voters: campaign finance public portal', url: SD_PORTAL },
        ],
      },
      positions: BOND_POSITIONS,
      measureType: 'School facilities bond (general obligation)',
      voteThreshold: '55%',
      fiscalImpact:
        'Tax rate statement: average and highest rate $21.70 per $100,000 of assessed value, collected through fiscal 2056-57; total debt service about $257,998,000. Existing bonds cost about $45 per $100,000 until the 2002 Measure M bonds are repaid in 2028, then about $24 (Taxpayers Association, via KPBS).',
      supporters:
        'Ballot argument: Mayor Mark Arapostathis; Mark Kersey (San Diego County Taxpayers Association); Christina Hicks (PTA Council); Kathy Sheets (La Mesa-Spring Valley Teachers Association); Ahmad Swinton (CSEA chapter). Also the San Diego County Democratic Party.',
      opponents: 'No ballot argument against was filed. Reform California and the Republican Party of San Diego County recommend No.',
      voterConnection: [
        'Property owners in the district pay, homes and businesses alike; renters may pay indirectly.',
        '“Without increasing current tax rates” means the rate stays about where it is instead of dropping after 2028 when older bonds retire.',
        'Bond money can only go to buildings, equipment and repairs, not salaries or benefits.',
        'Families of the district’s 10,000-plus students get air conditioning, shade and repairs at campuses mostly built more than 60 years ago.',
      ],
      mechanismBullets: [
        '$131 million in general obligation bonds; about $9 million a year in levies at roughly $22 per $100,000 of assessed value.',
        'Projects: roofs, plumbing, sewer, electrical and HVAC; air conditioning and shade; asbestos and lead-pipe removal; security locks, cameras, alarms and sprinklers; accessibility upgrades; classroom and lab modernization.',
        'Requires an independent citizens’ oversight committee and annual performance and financial audits.',
        'The district says it could qualify for up to $61 million in state matching funds (ballot argument); matching money is not guaranteed.',
        'Follows Measure M (2002) and Measure V (2020); district officials say Measure V money is nearly spent on security upgrades (KPBS).',
      ],
      argumentsFor: [
        'Most schools are over 60 years old, with failing pipes, roof leaks (95 last year, per the district) and classrooms above 90 degrees.',
        'The district projects no increase over today’s bond rate.',
        'The Taxpayers Association, usually skeptical of new taxes, endorses it.',
        'Passing it can unlock state matching funds that would otherwise go elsewhere.',
      ],
      argumentsAgainst: [
        'The rate would otherwise fall after 2028; “no tax rate increase” means paying longer, about $258 million in total.',
        'Bonds are repaid over three decades for some equipment, like HVAC and technology, that won’t last that long.',
        'Reform California and the county GOP oppose nearly all new school bonds as added public debt.',
      ],
      readingLinks: [
        { label: 'KPBS: San Diego County school bond measures guide (Oct. 2, 2026)', url: KPBS_BONDS, summary: 'AA’s cost, overlap with older bonds and district needs.' },
        { label: 'Times of San Diego: La Mesa election preview (Sept. 28, 2026)', url: TOSD_PREVIEW, summary: 'Short summary of AA and G.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters value investment in aging public schools and protecting students from extreme heat.'],
      ['EL', 'Yes', '●', 'Establishment Liberals trust the oversight committee and audits and note the Taxpayers Association endorsement.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays follow the Democratic Party, teachers and school employees, all backing Yes.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters want safer schools but dislike the “no tax increase” framing for what is a longer tax.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners may accept a measure that does not raise today’s rate, though many won’t follow the details.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters can accept a flat-rate bond for basic repairs when the Taxpayers Association backs it.'],
      ['PR', 'No', '◐', 'Populist Right voters see another long-term school debt and follow Reform California’s opposition.'],
      ['CC', 'No', '◐', 'Committed Conservatives lean No on extending a tax that would otherwise fall, as the county GOP recommends, despite the Taxpayers Association’s support.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives follow the Republican Party’s No recommendation.'],
    ]),
    counterArguments: [
      'CC (No ◐): But the Taxpayers Association endorses AA, the money is restricted to buildings, and deferred repairs usually cost more later.',
      'EL/DM (Yes ●): But “no tax rate increase” means owners pay about $22 per $100,000 for roughly 30 more years, and total cost is nearly double the amount borrowed.',
    ],
  },

  // ---------------------------------------------------------------- Measure G
  {
    id: 'gcccd-measure-g',
    categoryId: 'local-measures',
    title: 'Grossmont-Cuyamaca CCD Measure G — $624M college bond',
    tldrLabel: 'GCCCD Measure G — College bond',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure G would let the Grossmont-Cuyamaca Community College District borrow $624 million for fire safety, building replacement and repairs at Grossmont College in El Cajon and Cuyamaca College in Rancho San Diego, repaid by property owners across most of East County at about $25 per $100,000 of assessed value through 2058-59.',
      'It extends the tax from the 2002 Measure R bond, which is set to end in 2031, rather than adding a new one. A similar district bond failed narrowly in 2016 (KPBS). The question is whether projects like water storage for wildfire defense and replacing 50- and 60-year-old buildings justify about $1.25 billion in total debt service.',
    ],
    introParagraphs: [
      'The governing board voted unanimously in July 2026 to place G on the ballot. The ballot argument for it is signed by the San Diego County Taxpayers Association, Sycuan Tribal Chairman Cody Martinez, La Mesa Mayor Mark Arapostathis, the faculty union president and a nurse; no argument against was filed. Reform California and the county Republican Party oppose it (KPBS).',
    ],
    measure: {
      question:
        'Grossmont-Cuyamaca Community College District Fire Safety, Job Training, College Affordability, No Tax Rate Increase. With funds that cannot be taken by the State and spent elsewhere and NO tax rate increase, shall Grossmont-Cuyamaca Community College District’s measure to improve/expand career training classrooms; remove asbestos/mold; reduce wildfire threats; maintain college affordability be adopted, authorizing $624 million of bonds with legal rates, levies below $25/$100,000 assessed valuation while outstanding ($45 million annually), audits, taxpayer oversight, full disclosure of all spending?',
      yesMeans:
        'Authorizes $624 million in college district bonds for fire safety, career-training buildings and repairs at Grossmont and Cuyamaca colleges, repaid at about $25 per $100,000 of assessed value through 2058-59.',
      noMeans:
        'Blocks the new bonds; the 2002 Measure R levy still ends around 2031 and the 2012 bonds wind down, and campus projects would need other funding.',
      funding: {
        asOf: 'Oct. 13, 2026',
        note: 'News coverage reports no fundraising totals and no organized No committee (KPBS). We couldn’t search the county’s filings directly because the portal requires a search form; check the source below for the latest.',
        sources: [
          { label: 'KPBS: San Diego County school bond measures guide (Oct. 2, 2026)', url: KPBS_BONDS },
          { label: 'San Diego County Registrar of Voters: campaign finance public portal', url: SD_PORTAL },
        ],
      },
      positions: BOND_POSITIONS,
      measureType: 'Community college facilities bond (general obligation)',
      voteThreshold: '55%',
      fiscalImpact:
        'Tax rate statement: average $24.67 and highest $24.98 per $100,000 of assessed value (highest from fiscal 2031-32), collected through 2058-59; total debt service about $1,246,250,216. The district’s combined bond rate was $37.52 per $100,000 in 2025-26, and it does not expect that rate to rise.',
      supporters:
        'Ballot argument: Mark Kersey (San Diego County Taxpayers Association); Cody Martinez (Sycuan Band of the Kumeyaay Nation); Mayor Mark Arapostathis (La Mesa); Jim Mahler (AFT Grossmont-Cuyamaca); Margaret Osborne, R.N. (California Nurses Association). Also the East County Economic Development Council, the East County Chamber and the San Diego County Democratic Party.',
      opponents: 'No ballot argument against was filed. Reform California and the Republican Party of San Diego County recommend No.',
      voterConnection: [
        'Property owners across the district, which covers most of East County including La Mesa, El Cajon and Santee, pay; renters may pay indirectly.',
        'The rate would extend the 2002 Measure R levy instead of letting it end around 2031, so bills stay about the same longer.',
        'Grossmont says it lacks the water pressure to fight a major wildfire, and Cuyamaca serves as an East County evacuation center (ballot argument; KPBS).',
        'Students in nursing, skilled trades and veterans’ programs would get rebuilt labs and classrooms.',
      ],
      mechanismBullets: [
        '$624 million in general obligation bonds, about $45 million a year in levies at roughly $25 per $100,000 of assessed value.',
        'Grossmont projects: wildfire protection and domestic water systems; new career-technical buildings (welding, construction management, advanced manufacturing); replace a 60-plus-year-old arts and communication building with asbestos; rebuild the child development center.',
        'Cuyamaca projects: replace the 50-plus-year-old instructional complex; renovate the child development center; modernize the 37-year-old library.',
        'District-wide: ADA access, plumbing and utility systems, roofs, electrical gear and campus security.',
        'Requires an independent citizens’ oversight committee and annual performance and financial audits; no money for salaries or operating costs.',
      ],
      argumentsFor: [
        'Fire safety: added water storage and sprinklers protect the campuses and neighboring homes.',
        'Aging buildings with asbestos, leaky roofs and outdated wiring need replacement.',
        'Keeps community college an affordable route to transfer and job training, including nursing.',
        'The Taxpayers Association endorses it, and the district does not expect the combined rate to rise.',
      ],
      argumentsAgainst: [
        'It extends a tax that would otherwise end, for about $1.25 billion in total debt service over three decades.',
        'Voters narrowly rejected a similar district bond in 2016.',
        'Reform California and the county GOP oppose new school debt; the bond tax is “unlimited as to rate” under state law, so projections are not caps.',
      ],
      readingLinks: [
        { label: 'KPBS: San Diego County school bond measures guide (Oct. 2, 2026)', url: KPBS_BONDS, summary: 'G’s cost, prior bonds and supporters.' },
        { label: 'Times of San Diego: La Mesa election preview (Sept. 28, 2026)', url: TOSD_PREVIEW, summary: 'Short summary of G and AA.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters value affordable public college, job training and safer campuses.'],
      ['EL', 'Yes', '●', 'Establishment Liberals trust audits and oversight and value workforce training backed by business and the Taxpayers Association.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays follow the Democratic Party, faculty union and nurses backing Yes.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters support affordable college but are wary of how “no tax increase” hides a longer tax.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners may accept it because their bill does not rise and local job training benefits working families.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters can accept a flat-rate bond for wildfire safety and trades training with the Taxpayers Association on board.'],
      ['PR', 'No', '◐', 'Populist Right voters see another long-term tax extension and follow Reform California’s opposition.'],
      ['CC', 'No', '◐', 'Committed Conservatives lean No on extending a tax due to expire, as the county GOP recommends, despite the Taxpayers Association’s support.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives follow the Republican Party’s No recommendation.'],
    ]),
    counterArguments: [
      'CC/PR (No ◐): But the Taxpayers Association and a tribal leader back it, and wildfire water storage protects neighborhoods around the campus as well as the college.',
      'EL/DM (Yes ●): But the Measure R tax would end around 2031 without this, and $1.25 billion in total payments is a long commitment voters narrowly declined in 2016.',
    ],
  },
];
