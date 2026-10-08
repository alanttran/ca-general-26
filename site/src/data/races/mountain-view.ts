import type {
  CandidateQualification,
  CriterionAssessment,
  ExperienceLevel,
  QualificationCriterion,
  Race,
} from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Mountain View (ZIP 94043, Santa Clara County) local contests: City Council, Mountain View Whisman SD,
 * Mountain View-Los Altos UHSD Area 3, Valley Water District 7, and Measures E, F and S.
 * Research current as of Oct 8, 2026. All contests are nonpartisan. Money and endorsement dates are stated in-line.
 * The Bay Area regional transit measure is covered in another file.
 */

function qual(
  level: ExperienceLevel,
  summary: string,
  criteria: [string, CriterionAssessment['assessment'], string][],
): CandidateQualification {
  return {
    level,
    legal: 'meets',
    summary,
    criteria: criteria.map(([criterionId, assessment, evidence]) => ({ criterionId, assessment, evidence })),
  };
}

const NO_MONEY =
  'No campaign finance totals found as of Oct 8, 2026; filings are posted on the county or city campaign-disclosure site.';

const SCHOOL_CRITERIA: QualificationCriterion[] = [
  { id: 'education', label: 'Education knowledge and classroom experience', detail: 'Trustees adopt curriculum, hire and evaluate the superintendent, and rely on firsthand knowledge of how schools work.' },
  { id: 'budget', label: 'Budget, finance and oversight', detail: 'The board adopts a multimillion-dollar budget, negotiates labor contracts, and oversees facilities spending.' },
  { id: 'governance', label: 'Public-board governance and policy', detail: 'Trustees act only as a board, under open-meeting and ethics rules, and must work through the superintendent.' },
  { id: 'community', label: 'Family and community engagement', detail: 'Trustees hear from parents, staff and neighbors and explain board decisions to them.' },
];

const SCHOOL_LEGAL =
  'U.S. citizen, 18 or older, resident and registered voter of the district (and of the trustee area, where elected by area), not otherwise disqualified (Education Code § 35107; Elections Code § 201).';

const COUNCIL_CRITERIA: QualificationCriterion[] = [
  { id: 'land-use', label: 'Housing and land-use policy', detail: 'The council approves the general plan, zoning and development agreements and must carry out the state-mandated housing element.' },
  { id: 'budget', label: 'Public budgets and finance', detail: 'The council adopts the city’s multimillion-dollar budget and places any tax measures on the ballot.' },
  { id: 'civic', label: 'Service on public bodies', detail: 'Council members make decisions as one of seven votes under open-meeting and ethics rules; prior commission service shows familiarity with that process.' },
  { id: 'community', label: 'Community engagement and coalition-building', detail: 'Members must hear from residents, businesses and neighborhoods and build four-vote majorities.' },
];

const COUNCIL_LEGAL =
  'U.S. citizen, 18 or older, resident and registered voter of the City of Mountain View; subject to the charter’s two-consecutive-term limit.';

const WATER_CRITERIA: QualificationCriterion[] = [
  { id: 'water', label: 'Water supply, flood protection and environmental stewardship', detail: 'Valley Water supplies wholesale water, manages creeks and flood protection, and runs large capital projects.' },
  { id: 'budget', label: 'Large public budgets and capital projects', detail: 'The board oversees a budget of well over a billion dollars and multi-year infrastructure plans.' },
  { id: 'governance', label: 'Board governance and ethics', detail: 'Directors must work within a seven-member board and follow rules on staff conduct and confidential information.' },
  { id: 'community', label: 'Representing a diverse district', detail: 'District 7 spans several north-county cities; directors must represent residents and local agencies there.' },
];

const WATER_LEGAL =
  'Registered voter and resident of Valley Water District 7; not otherwise disqualified (Water Code § 20200 et seq.; Elections Code § 201).';

const MEASURE_CATEGORY = 'local-measures';

export const RACES_MOUNTAIN_VIEW: Race[] = [
  /* ------------------------------------------------------------------ */
  /* CITY COUNCIL                                                        */
  /* ------------------------------------------------------------------ */
  {
    id: 'mountain-view-city-council',
    categoryId: 'city',
    title: 'Mountain View City Council',
    tldrLabel: 'Mountain View City Council',
    voteFor: 3,
    seatContext: 'Three open seats (term limits)',
    kind: 'candidates',
    stakesParagraphs: [
      'The seven-member council sets Mountain View’s budget, zoning and housing policy, and oversees the city manager. It must carry out the state-approved housing plan (about 11,000 new homes by 2031, per candidate Paul Donahue’s description to the Voice) and decide how the city responds to the new state transit-housing law SB 79.',
      'Three seats are open because Alison Hicks, Ellen Kamei and Lucas Ramirez are termed out after two consecutive terms (Mountain View Voice). Voters choose up to three of eight candidates; Emily Ann Ramos, Chris Clark, John McAlister and Pat Showalter stay on the council, so this vote decides nearly half the dais.',
    ],
    introParagraphs: [
      'No candidate is a sitting council member. All eight are newcomers to the council; two (Erik Poicon and IdaRose Sylvester) ran in 2024 and lost. Most hold seats on city advisory bodies. The Santa Clara County Democratic Party is listed as an endorser by the Paymer and Sylvester campaign sites; no endorsement or party list was found for the other six. Write-in candidates may still file until Oct. 20.',
      'The main dividing line at the Aug. 27 Chamber of Commerce forum was SB 79: Kuszmaul strongly supports it and opposes a local alternative plan, while Cox, Donahue, Paymer and Sylvester said they would consider a local alternative to protect the historic downtown (Mountain View Voice, Aug. 31, 2026). All eight said they support the hotel-tax measure (Measure F).',
    ],
    readingLinks: [
      { label: 'Mountain View Voice: eight candidates hit the campaign trail', url: 'https://www.mv-voice.com/election/2026/08/11/eight-candidates-hit-the-campaign-trail-for-mountain-view-city-council-seats/', summary: 'Names, occupations and city roles of all eight candidates.' },
      { label: 'Mountain View Voice: candidates square off at business forum (Aug. 31, 2026)', url: 'https://mv-voice.com/election/2026/08/31/mountain-view-city-council-candidates-square-off-at-business-forum', summary: 'Positions on SB 79, small business support and downtown and North Bayshore office development.' },
      { label: 'Palo Alto Daily Post: candidate profiles with ages and neighborhoods', url: 'https://padailypost.com/2026/06/27/41059/', summary: 'Short profile of each candidate when the field formed.' },
    ],
    legalRequirements: COUNCIL_LEGAL,
    qualificationCriteria: COUNCIL_CRITERIA,
    candidates: [
      {
        id: 'samuel-ali',
        name: 'Samuel Ali',
        party: 'NP',
        role: 'No ballot designation',
        qualification: qual(
          'limited',
          'Ali works in tech as a Google security specialist and is a first-time candidate. No service on a city body was found.',
          [
            ['land-use', 'unknown', 'No planning, zoning or housing role found.'],
            ['budget', 'unknown', 'No public budget role found.'],
            ['civic', 'not-met', 'No city commission or committee service found in the Voice candidate roundup.'],
            ['community', 'partial', 'Says his family’s financial struggles growing up shape his affordability focus (Voice, Aug. 11, 2026); no organizational role found.'],
          ],
        ),
        bio: [
          'Ali is a Google security specialist and the last candidate to enter the race (Mountain View Voice). His ballot designation is listed as none.',
          'He names affordable housing, public safety and helping people find jobs as priorities, and says he wants to balance new technology such as AI with protecting residents’ livelihoods.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Names affordable housing as a top priority; no SB 79 position reported' },
          { topic: 'Budget & taxes', position: '✓ Supports Measure F (hotel tax), as did all eight at the Aug. 27 forum' },
          { topic: 'Development & economy', position: '✓ Supports more downtown and North Bayshore office development (forum)' },
          { topic: 'Public safety', position: '? Lists public safety as a priority; no specifics found' },
          { topic: 'Transparency', position: '? No public position found' },
        ],
        money: NO_MONEY,
        endorsements: 'None found.',
      },
      {
        id: 'alex-amoroso',
        name: 'Alex Amoroso',
        party: 'NP',
        role: 'Army Reserve Officer',
        qualification: qual(
          'limited',
          'Amoroso is a U.S. Army Reserve adjutant general officer with human-resources management experience, active in Rotary and local service groups. He has not served on a city body.',
          [
            ['land-use', 'unknown', 'No planning, zoning or housing role found.'],
            ['budget', 'unknown', 'No public budget role found.'],
            ['civic', 'not-met', 'No city commission or committee service found.'],
            ['community', 'partial', 'Active in the Mountain View Rotary Club and Friends of Stevens Creek Trail; volunteers with Hope’s Corner and the United Effort Organization (Voice, Apr. 29, 2026).'],
          ],
        ),
        bio: [
          'Amoroso is a U.S. Army Reserve officer who has been deployed overseas and, as an adjutant general officer, has human-resources management experience (Mountain View Voice; Palo Alto Daily Post). He lives at the Shenandoah Square military townhouses.',
          'He says he wants to partner with businesses to connect residents to well-paying jobs, and has floated exploring universal basic income (Daily Post). He volunteers with groups serving people who are unhoused or at risk of homelessness.',
        ],
        scorecard: [
          { topic: 'Housing', position: '~ Suggests workforce housing to help businesses keep employees; no SB 79 position reported' },
          { topic: 'Budget & taxes', position: '✓ Supports Measure F (hotel tax), as did all eight at the Aug. 27 forum' },
          { topic: 'Development & economy', position: '~ Supports more downtown office development but opposed more North Bayshore office (forum)' },
          { topic: 'Public safety', position: '? No public position found' },
          { topic: 'Homelessness', position: '~ Volunteers with groups serving unhoused residents; no policy position found' },
        ],
        money: NO_MONEY,
        endorsements: 'None found.',
      },
      {
        id: 'robert-cox',
        name: 'Robert Cox',
        party: 'NP',
        role: 'Retired Software Engineer',
        qualification: qual(
          'substantial',
          'Cox, a retired Intel engineer, served on the Environmental Planning Commission from 2013 to 2020 and now serves on the Rental Housing Committee (chair, per the Daily Post).',
          [
            ['land-use', 'met', 'Seven years on the Environmental Planning Commission (2013–2020), which advises the council on land use including housing proposals (Voice, Mar. 18, 2026).'],
            ['budget', 'unknown', 'No public budget role found.'],
            ['civic', 'met', 'Current Rental Housing Committee member (chair per Daily Post, June 2026), which oversees the city’s rent-control rules.'],
            ['community', 'met', 'Active in Mountain View Historical Association, Sierra Club Loma Prieta Chapter and Livable Mountain View (Voice).'],
          ],
        ),
        bio: [
          'Cox is a 68-year-old retired Intel project lead who lives in Old Mountain View (Palo Alto Daily Post). He calls himself “a ‘housing and’ candidate, not a ‘housing only’ candidate,” wanting new housing paired with parks and infrastructure.',
          'He opposes SB 79 as “one size fits all” and favors a local alternative plan that protects downtown’s historic buildings and shifts housing elsewhere. He also lists filling retail vacancies as a priority.',
        ],
        scorecard: [
          { topic: 'Housing', position: '~ Supports housing with parks and infrastructure; critical of SB 79' },
          { topic: 'Budget & taxes', position: '✓ Supports Measure F (hotel tax), as did all eight at the Aug. 27 forum' },
          { topic: 'Development & economy', position: '~ Supports North Bayshore office growth; “not right now” for downtown office; wants retail vacancies filled' },
          { topic: 'Historic preservation', position: '✓✓ Protecting downtown historic buildings is a stated priority' },
          { topic: 'Renters', position: '✓ Serves on the Rental Housing Committee' },
        ],
        money: NO_MONEY,
        endorsements: 'No 2026 organizational endorsements found. Supporters’ comments on Voice articles are not counted.',
      },
      {
        id: 'paul-donahue',
        name: 'Paul Donahue',
        party: 'NP',
        role: 'Engineer',
        qualification: qual(
          'substantial',
          'Donahue, a microprocessor engineer, has served for nearly two decades on city and county bodies including the Environmental Planning Commission, Parks and Recreation Commission, Downtown Committee and Board of Library Trustees.',
          [
            ['land-use', 'met', 'Currently on the Environmental Planning Commission and formerly on the Downtown Committee; also served on the Santa Clara County Airport Land Use Commission (Voice; Daily Post).'],
            ['budget', 'unknown', 'No public budget role found.'],
            ['civic', 'met', 'Nearly two decades across city commissions, committees and the library board (Voice, Apr. 29, 2026).'],
            ['community', 'met', 'Cuesta Park neighborhood resident with long local involvement; priorities include helping small businesses.'],
          ],
        ),
        bio: [
          'Donahue is a 54-year-old engineer from Cuesta Park who currently serves on the Environmental Planning Commission, which advises the council on land use (Mountain View Voice; Palo Alto Daily Post).',
          'He wants the city to carry out its housing plan, support parks and open space, and help small businesses by executing the city’s economic vitality strategy. At the Aug. 27 forum he said SB 79 is “not really right for the conditions on the ground in Mountain View” and supported a local alternative plan.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Wants the city to implement its housing element; prefers a local plan over SB 79' },
          { topic: 'Budget & taxes', position: '✓ Supports Measure F (hotel tax), as did all eight at the Aug. 27 forum' },
          { topic: 'Development & economy', position: '~ “Not right now” for downtown office; “maybe” for North Bayshore office (forum)' },
          { topic: 'Climate & open space', position: '✓ Cites parks, open space, sea-level rise and drought protection' },
          { topic: 'Small business', position: '✓ Wants to execute the economic vitality strategy' },
        ],
        money: NO_MONEY,
        endorsements:
          'No verified 2026 endorsement list found. A reader comment on a Voice article claims backing from eight former mayors; that claim is unverified and not counted here.',
      },
      {
        id: 'james-kuszmaul',
        name: 'James Kuszmaul',
        party: 'NP',
        role: 'Engineer',
        campaignUrl: 'https://mvyimby.com/post/2026-09-03-kuszmaul-pre-endorsement/',
        qualification: qual(
          'some',
          'Kuszmaul, 29, chairs the city’s Bicycle/Pedestrian Advisory Committee and is a volunteer leader of Mountain View YIMBY. His documented record is mostly housing and transportation advocacy.',
          [
            ['land-use', 'met', 'Spoke on housing at council and commission meetings on the R3 zoning update, parking minimums and the Moffett transit-center plan (MV YIMBY, Sept. 3, 2026).'],
            ['budget', 'unknown', 'No public budget role found.'],
            ['civic', 'partial', 'Chairs the Bicycle/Pedestrian Advisory Committee (MV YIMBY); no other city body found.'],
            ['community', 'met', 'Volunteer lead for Mountain View YIMBY; grew up in Mountain View and attended its public schools.'],
          ],
        ),
        bio: [
          'Kuszmaul is a 29-year-old robotics engineer who grew up in Mountain View, chairs the Bicycle/Pedestrian Advisory Committee, and helps lead Mountain View YIMBY (Palo Alto Daily Post; MV YIMBY). He rents near downtown and does not own a car.',
          'He strongly supports SB 79 and wants the city to finish objective design standards for residential projects. He opposes a local alternative plan, arguing it would divert staff time and might not beat state law. His other priorities are protected bike lanes and housing near jobs and transit.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓✓ Strongest pro-housing record in the field; backs SB 79' },
          { topic: 'Budget & taxes', position: '✓ Supports Measure F (hotel tax), as did all eight at the Aug. 27 forum' },
          { topic: 'Development & economy', position: '~ Wants “a bit” more downtown and North Bayshore office (forum)' },
          { topic: 'Transportation & safety', position: '✓✓ Chairs the Bicycle/Pedestrian Advisory Committee; wants protected bike lanes' },
          { topic: 'Preservation', position: '✗ Opposes a local alternative plan to SB 79' },
        ],
        money: NO_MONEY,
        endorsements:
          'Mountain View YIMBY (pre-endorsement, Sept. 3, 2026; Kuszmaul is a YIMBY leader, so the group notes he did not complete its questionnaire).',
        notes: [
          'Mountain View YIMBY says it is still reviewing the other candidates and will announce more endorsements.',
        ],
      },
      {
        id: 'silja-paymer',
        name: 'Silja Paymer',
        party: 'NP',
        role: 'Teacher/Mother/Engineer',
        campaignUrl: 'https://siljapaymer.com/',
        qualification: qual(
          'some',
          'Paymer teaches physics at Los Altos High School and co-founded GreenSpacesMV. No service on a city body was found.',
          [
            ['land-use', 'partial', 'Initiator of the Cuesta Pollinator Habitat at the Cuesta Annex (Voice, Mar. 18, 2026); no planning body role found.'],
            ['budget', 'unknown', 'No public budget role found.'],
            ['civic', 'not-met', 'No city commission or committee service found.'],
            ['community', 'met', 'Founding member of GreenSpacesMV; endorsed by several MVWSD board members and PTA leaders (campaign site).'],
          ],
        ),
        bio: [
          'Paymer, 43, teaches physics at Los Altos High School and is a founding member of the environmental group GreenSpacesMV (Mountain View Voice; Palo Alto Daily Post). She lives in the Blossom Valley neighborhood.',
          'Her priorities are safe streets for children and environmental sustainability, and she calls for “transparent, community-centered leadership.” At the Aug. 27 forum she supported a storefront vacancy tax and open-mindedness about a local alternative to SB 79.',
        ],
        scorecard: [
          { topic: 'Housing', position: '~ Open to a local alternative to SB 79; no detailed housing plan found' },
          { topic: 'Budget & taxes', position: '✓ Supports Measure F (hotel tax); backs a storefront vacancy tax' },
          { topic: 'Development & economy', position: '~ “Not right now” for downtown office; “depends on the developer” for North Bayshore (forum)' },
          { topic: 'Climate & open space', position: '✓✓ Environmental sustainability is a core priority' },
          { topic: 'Transportation & safety', position: '✓✓ Makes safe streets for children a lead priority' },
        ],
        money: NO_MONEY,
        endorsements:
          'Santa Clara County Democratic Party, Sierra Club, Santa Clara County League of Conservation Voters, 350 Bay Area Action, DAWN, 314 Action, UA Local 393, North Coast States Carpenters Union, Planned Parenthood Advocates Mar Monte; Moms Demand Action “Gun Sense Candidate” (as listed on her campaign site, accessed Oct. 8, 2026).',
      },
      {
        id: 'erik-poicon',
        name: 'Erik Poicon',
        party: 'NP',
        role: 'Library Outreach Specialist',
        qualification: qual(
          'some',
          'Poicon, 34, works as a community outreach specialist for the Santa Clara County Library District and sits on the city’s Human Relations Commission. He ran for council in 2024 and finished seventh of nine.',
          [
            ['land-use', 'unknown', 'No planning or zoning body role found.'],
            ['budget', 'unknown', 'No public budget role found.'],
            ['civic', 'partial', 'Current Human Relations Commission member (Voice, Mar. 18, 2026).'],
            ['community', 'met', 'Longtime community organizer; county library outreach specialist (Daily Post).'],
          ],
        ),
        bio: [
          'Poicon is a longtime community organizer who works in outreach for the county library system and serves on the Human Relations Commission. He ran in 2024 on housing affordability, climate change and stronger public services and safety (Mountain View Voice).',
          'At the Aug. 27 forum he proposed pre-lease help for small businesses and tracking business closures, and supported a storefront vacancy tax and more downtown and North Bayshore office development. He did not respond to the Voice’s request for comment on his entry.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Housing affordability a 2024 priority; no SB 79 position reported' },
          { topic: 'Budget & taxes', position: '✓ Supports Measure F (hotel tax); backs a storefront vacancy tax' },
          { topic: 'Development & economy', position: '✓ Supports more downtown and North Bayshore office development (forum)' },
          { topic: 'Homelessness & immigrants', position: '✓ Advocates for immigrants and unhoused residents' },
          { topic: 'Public safety', position: '? Lists public safety among 2024 priorities; no 2026 specifics found' },
        ],
        money: NO_MONEY,
        endorsements:
          'No 2026 endorsement list found. In 2024 he was endorsed by former Mayor Sally Lieber, former Controller Betty Yee, seven unions and four of five county supervisors (Palo Alto Daily Post, Oct. 2024); those do not carry over automatically.',
      },
      {
        id: 'idarose-sylvester',
        name: 'IdaRose Sylvester',
        party: 'NP',
        role: 'Entrepreneur/Educator',
        campaignUrl: 'https://www.idarosesylvester.com/',
        qualification: qual(
          'substantial',
          'Sylvester, 56, serves on the Parks and Recreation Commission, previously served on the Human Relations Commission and an environmental task force, and sits on several local nonprofit boards. She finished fifth in 2024.',
          [
            ['land-use', 'partial', 'Environmental Sustainability Task Force and parks commission; no planning-commission seat found.'],
            ['budget', 'partial', 'Owns a startup go-to-market business and sits on nonprofit boards; no public budget role found.'],
            ['civic', 'met', 'Current Parks and Recreation Commission; past Human Relations Commission and Environmental Sustainability Task Force (campaign site; Voice, Apr. 29, 2026).'],
            ['community', 'met', 'Founded Appetite for Good and Together We Will; organizer of local rallies (campaign site; Voice).'],
          ],
        ),
        bio: [
          'Sylvester owns a business that helps startups go to market and is a longtime local activist and organizer of demonstrations against the Trump administration (Mountain View Voice). She lives in Blossom Valley.',
          'Her priorities are affordable housing and tenant protections, environmental sustainability (electrifying buildings, cutting single-use plastics and solo car trips) and economic vitality; she wants downtown’s historic core and local businesses preserved.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓✓ Strong tenant protections, affordable housing and community ownership; open to a local SB 79 alternative' },
          { topic: 'Budget & taxes', position: '✓ Supports Measure F (hotel tax), as did all eight at the Aug. 27 forum' },
          { topic: 'Development & economy', position: '~ Supports office development “depending on the project” and “with complete communities”; wants the city out of businesses’ way' },
          { topic: 'Climate & open space', position: '✓✓ Building electrification, plastics, trees and open space' },
          { topic: 'Transparency', position: '✓ Wants earlier outreach and clearer information' },
        ],
        money: NO_MONEY,
        endorsements:
          'Santa Clara County Democratic Party, California Working Families Party, Mountain View Professional Firefighters Local 1965, UA Local 393, Sierra Club Loma Prieta, Santa Clara County League of Conservation Voters, Mountain View Housing Justice Coalition, Livable Mountain View, Los Altos Town Crier, Assemblymembers Marc Berman and Patrick Ahrens, Sen. Josh Becker, Supervisor Margaret Abe-Koga, State Treasurer Fiona Ma, and several former Mountain View mayors (as listed on her campaign site, accessed Oct. 8, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Paymer, Poicon, Sylvester', '◐', 'Progressive Left voters value tenant protections, climate action and the Democratic Party and labor endorsements held by Paymer and Sylvester, plus Poicon’s advocacy for immigrants and unhoused residents.'],
      ['EL', 'Kuszmaul, Paymer, Sylvester', '◐', 'Establishment Liberals value housing supply (Kuszmaul), Democratic Party and labor backing, and commission experience, though the office is nonpartisan and the field is largely newcomers.'],
      ['DM', 'Paymer, Sylvester, Donahue', '◐', 'Democratic Mainstays follow party and union endorsements (Paymer, Sylvester) and value Donahue’s long record on city bodies.'],
      ['OL', 'Poicon, Kuszmaul, Sylvester', '○', 'Outsider Left voters are drawn to community organizers and challengers: Poicon and Sylvester ran in 2024, and Kuszmaul comes from housing activism rather than the council pipeline.'],
      ['SS', 'Donahue, Sylvester, Cox', '○', 'Stressed Sideliners care about everyday cost and small business; Donahue and Sylvester stress small-business help and Cox ties housing to parks and services, but none of the eight has a distinct cost-of-living plan.'],
      ['AR', 'Donahue, Cox, Amoroso', '○', 'Ambivalent Right voters lean toward measured growth and small-business focus (Donahue, Cox) and the practical management background of Amoroso.'],
      ['PR', 'Cox, Donahue, Amoroso', '○', 'Populist Right voters tend to favor neighborhood-protective, skeptical-of-state-mandate candidates such as Cox and Donahue (both critical of SB 79) and Amoroso’s outsider, veteran profile.'],
      ['CC', 'Cox, Donahue, Amoroso', '○', 'Committed Conservatives lean to the candidates who would slow state-driven density and favor preservation and small business (Cox, Donahue); this is a nonpartisan field with no clear conservative.'],
      ['FF', 'Amoroso, Cox, Donahue', '○', 'Faith and Flag Conservatives lean to Amoroso’s military service and to Cox and Donahue’s neighborhood-protective positions; no candidate has a distinct values platform on the record.'],
    ]),
    counterArguments: [
      'PL/EL (Kuszmaul): But the pro-housing record that makes Kuszmaul attractive to EL also rests on a single issue and a short civic résumé, and preservation voters note downtown’s historic core is directly in SB 79’s path.',
      'AR/PR/CC (Cox, Donahue): But resisting SB 79 may not change outcomes: the state law took effect in July 2026, and Kuszmaul argues a local alternative might not beat it.',
      'OL (Poicon): But Poicon finished seventh of nine in 2024 and has not given a detailed 2026 platform, so enthusiasm for organizers should be weighed against how little is on the record.',
    ],
  },

  /* ------------------------------------------------------------------ */
  /* MVWSD                                                               */
  /* ------------------------------------------------------------------ */
  {
    id: 'mvwsd-board',
    categoryId: 'school',
    title: 'Mountain View Whisman School District, Governing Board',
    tldrLabel: 'Mountain View Whisman SD Board',
    voteFor: 2,
    seatContext: 'Two at-large seats; both incumbents running',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member board governs the district’s elementary and middle schools in Mountain View: it adopts the budget, sets policy, approves labor contracts, and hires and reviews the superintendent.',
      'Two of the five seats are on the ballot; the other three terms run through mid-December 2028 (Mountain View Voice). The race follows a turbulent stretch that included public outcry over six-figure contracts for a PR firm and leadership coaching, a $98,000 resignation agreement with a former superintendent, and a failed 2025 recall effort.',
    ],
    introParagraphs: [
      'Incumbents Devon Conley and William (Bill) Lambert face newcomers Quintin Riis, who led the 2025 recall effort against Conley, and Sundar Subbarayan, a retired tech executive who volunteers in both Mountain View school districts. Challenger Riis says he ran because he worried the incumbents would be reelected unopposed.',
      'The recall did not qualify: backers missed the Dec. 16, 2025 signature deadline, and needed about 7,391 valid signatures (Mountain View Voice).',
    ],
    readingLinks: [
      { label: 'Mountain View Voice: 4 candidates vie for 2 seats (Aug. 13, 2026)', url: 'https://www.mv-voice.com/education/2026/08/13/4-candidates-vie-for-2-seats-on-the-mountain-view-whisman-school-district-board/', summary: 'Backgrounds and stated priorities of all four candidates.' },
      { label: 'Mountain View Voice: Conley faces recall attempt (June 2025)', url: 'https://www.mv-voice.com/election/2025/06/13/mountain-view-whisman-school-board-member-devon-conley-faces-recall-attempt/', summary: 'What the recall notice alleged and Conley’s response.' },
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'devon-conley',
        name: 'Devon Conley',
        party: 'NP',
        role: 'Incumbent',
        qualification: qual(
          'extensive',
          'Conley is a former teacher (including at Stevenson Elementary) first elected to this board in 2018 and reelected in 2022, and has served as board president.',
          [
            ['education', 'met', 'Former teacher, including at Stevenson Elementary (Voice, Aug. 13, 2026).'],
            ['budget', 'met', 'Eight years on the board that adopts the district budget; president in 2024 (Voice, June 2025).'],
            ['governance', 'met', 'Elected 2018 and 2022; board president in 2024.'],
            ['community', 'partial', 'Cites free after-school care, counselors at each school and a new literacy curriculum; lost a 2024 City Council run.'],
          ],
        ),
        bio: [
          'Conley is a former teacher first elected to the board in 2018 and reelected in 2022. She cites work still unfinished: a new literacy curriculum, counselors at each school and expanded free after-school care for low-income students (Mountain View Voice).',
          'She faced a recall effort in 2025 after public scrutiny of district spending on administrator coaching, a PR firm and meditation sessions; the effort failed to gather enough signatures. She declined to comment on the recall.',
        ],
        recordVsChange:
          'Delivered: a new literacy curriculum, counselors at each school and expanded free after-school care. Against: the district’s spending controversies occurred while she served, including as board president in 2024. Replacing her would cost continuity on those programs; keeping her means no change to the board that approved the contested contracts.',
        scorecard: [
          { topic: 'Budget & oversight', position: '~ Presided over contested spending; says she supports free after-school care and counselors' },
          { topic: 'Curriculum & academics', position: '✓ Championed a new literacy curriculum' },
          { topic: 'Teachers & staffing', position: '✓ Former teacher; counselors at every school' },
          { topic: 'Student support', position: '✓✓ Expanded free after-school care for low-income students' },
          { topic: 'Transparency', position: '✗ Recall notice and critics say spending oversight failed; she declined to comment' },
        ],
        money: NO_MONEY,
        endorsements: 'Listed as an endorser on the IdaRose Sylvester council campaign site; no endorsements for her own race were found.',
        notes: [
          'The June 2025 recall notice cited her support for guided meditation sessions, office renovations, school security fencing and cameras, and a $98,000 resignation agreement with former Superintendent Ayindé Rudolph. The Voice reported no finding against Conley, and the state announced a formal audit of the district’s finances in November 2024; no published findings were found.',
          'The recall was led by challenger Quintin Riis.',
        ],
      },
      {
        id: 'william-lambert',
        name: 'William Lambert',
        party: 'NP',
        role: 'Incumbent',
        qualification: qual(
          'extensive',
          'Lambert joined this board in 2012, did not run in 2016, and returned in 2022; he is an intellectual-property attorney with a doctorate in chemical physics.',
          [
            ['education', 'partial', 'Doctorate in chemical physics; no classroom teaching career documented.'],
            ['budget', 'met', 'About ten years on the board overall (2012–2016 and 2022–present) (Voice, Aug. 13, 2026).'],
            ['governance', 'met', 'Intellectual-property partner at Sheppard Mullin (Voice) and long board service.'],
            ['community', 'partial', 'Says he is focused on preparing students for college; no volunteer role found.'],
          ],
        ),
        bio: [
          'Lambert is an intellectual-property partner at Sheppard Mullin with a doctorate in chemical physics. He first joined the board in 2012, stepped away in 2016 and returned in 2022 (Mountain View Voice).',
          'He says he is focused on preparing students for college and describes bringing “a scientist’s rigor and a lawyer’s thoughtfulness.”',
        ],
        recordVsChange:
          'Delivered: stable governance experience across two stints, including the period of the district’s financial scrutiny. Against: he also sat on the board that approved the contested spending. Reelecting him keeps experience; replacing him opens a seat for a first-time trustee.',
        scorecard: [
          { topic: 'Budget & oversight', position: '~ On the board during the contested spending; no public statement found' },
          { topic: 'Curriculum & academics', position: '✓ Focus on college readiness' },
          { topic: 'Teachers & staffing', position: '? No public position found' },
          { topic: 'Student support', position: '? No public position found' },
          { topic: 'Transparency', position: '? No public position found' },
        ],
        money: NO_MONEY,
        endorsements: 'None found.',
      },
      {
        id: 'quintin-riis',
        name: 'Quintin Riis',
        party: 'NP',
        role: 'Father',
        qualification: qual(
          'limited',
          'Riis is a district parent and engineer who led the 2025 recall attempt against Conley. No elected or board service was found.',
          [
            ['education', 'unknown', 'No education career documented; father of two, one in the district.'],
            ['budget', 'unknown', 'No public budget role found; his campaign targets district spending.'],
            ['governance', 'unknown', 'No prior public-board service found.'],
            ['community', 'partial', 'Organized the 2025 recall effort and spoke at board meetings (Voice, June 2025).'],
          ],
        ),
        bio: [
          'Riis is a father of two, with one child currently in the district. He led the 2025 recall effort against Conley, which did not reach the ballot, and says he entered the race because “no one deserves a walk-on” (Mountain View Voice).',
          'His priorities are cutting spending he considers wasteful and creating a formal gifted-and-talented program. At the recall launch he accused Conley of overseeing “deceit, fraud and grift” as board president; the Voice reported no finding supporting that.',
        ],
        scorecard: [
          { topic: 'Budget & oversight', position: '✓✓ Cutting what he calls wasteful spending is his lead issue' },
          { topic: 'Curriculum & academics', position: '✓ Wants a formal gifted and talented program' },
          { topic: 'Teachers & staffing', position: '? No public position found' },
          { topic: 'Student support', position: '? No public position found' },
          { topic: 'Transparency', position: '✓ Frames the race around accountability for recent controversies' },
        ],
        money: NO_MONEY,
        endorsements: 'None found.',
      },
      {
        id: 'sundar-subbarayan',
        name: 'Sundar Subbarayan',
        party: 'NP',
        role: 'Retired Tech Executive',
        qualification: qual(
          'some',
          'Subbarayan is a retired tech executive who mentors at Los Altos High, sits on the district’s AI committee and volunteers in both local school districts. He has not held elected office.',
          [
            ['education', 'partial', 'AVID mentor at Los Altos High; head of school implementations at Khan Academy 2011–2012 (Voice, Aug. 13, 2026).'],
            ['budget', 'unknown', 'No public budget role found; lists sound financial decisions as a priority.'],
            ['governance', 'partial', 'Member of the district’s artificial intelligence committee.'],
            ['community', 'met', 'Active volunteer in both MVWSD and MVLA; two children graduated from Los Altos High after attending Stevenson and Crittenden.'],
          ],
        ),
        bio: [
          'Subbarayan is a retired tech executive whose two children attended Stevenson and Crittenden before graduating from Los Altos High. He mentors students in the AVID program at Los Altos High and serves on the district’s artificial intelligence committee (Mountain View Voice).',
          'He lists student success, sound financial decisions and making sure “every voice is heard” as priorities.',
        ],
        scorecard: [
          { topic: 'Budget & oversight', position: '✓ Names sound financial decisions as a priority' },
          { topic: 'Curriculum & academics', position: '✓ Student success; serves on the AI committee' },
          { topic: 'Teachers & staffing', position: '? No public position found' },
          { topic: 'Student support', position: '✓ AVID mentor' },
          { topic: 'Transparency', position: '✓ Wants discourse where every voice is heard' },
        ],
        money: NO_MONEY,
        endorsements: 'None found.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Conley, Lambert', '○', 'Progressive Left voters value Conley’s free after-school care for low-income students and counselors at every school; the record of administrator spending makes the lean weak.'],
      ['EL', 'Conley, Lambert', '◐', 'Establishment Liberals value experienced incumbents who kept programs running and governance stable, even after the spending controversies.'],
      ['DM', 'Conley, Lambert', '◐', 'Democratic Mainstays favor experienced sitting trustees and continuity over a recall-driven challenge.'],
      ['OL', 'Subbarayan, Riis', '○', 'Outsider Left voters distrust insiders after the spending controversies and lean to the two challengers, who have no institutional ties.'],
      ['SS', 'Subbarayan, Lambert', '○', 'Stressed Sideliners care about sound spending and practical student support; Subbarayan is a school volunteer and Lambert brings long governance experience.'],
      ['AR', 'Lambert, Subbarayan', '○', 'Ambivalent Right voters value a sober, financially careful approach: Lambert’s experience and Subbarayan’s focus on sound financial decisions.'],
      ['PR', 'Riis, Subbarayan', '◐', 'Populist Right voters distrust insider spending and prefer challengers who push accountability, which fits Riis’s waste-cutting campaign.'],
      ['CC', 'Riis, Lambert', '○', 'Committed Conservatives favor spending restraint (Riis) and Lambert’s measured governance; the race has no clear conservative.'],
      ['FF', 'Riis', '○', 'Faith and Flag Conservatives lean to the outsider promising to cut waste and add a gifted program; little else distinguishes the field on values.'],
    ]),
    counterArguments: [
      'OL/PR (Riis, Subbarayan): But replacing both incumbents at once would remove all institutional memory from a board already managing a leadership turnover and a state fiscal audit.',
      'EL/DM (Conley, Lambert): But both incumbents sat on the board during the spending controversies, and a board that has not changed cannot credibly promise a different approach.',
    ],
  },

  /* ------------------------------------------------------------------ */
  /* MVLA AREA 3                                                         */
  /* ------------------------------------------------------------------ */
  {
    id: 'mvlahsd-trustee-area-3',
    categoryId: 'school',
    title: 'Mountain View–Los Altos Union High School District, Trustee Area 3',
    tldrLabel: 'MVLA High School Board, Area 3',
    seatContext: 'First trustee-area election; two sitting trustees compete',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member board of the Mountain View–Los Altos Union High School District governs Los Altos and Mountain View High Schools: it adopts the budget, sets policy and hires and reviews the superintendent.',
      'This is the district’s first election by trustee area, adopted after a California Voting Rights Act demand letter, so only voters in Area 3 choose this seat. Because Cornes and Vonnegut both live in Area 3, one sitting trustee will lose the seat regardless of the vote (Mountain View Voice).',
    ],
    introParagraphs: [
      'Area 3 covers an eastern part of Mountain View south of Central Expressway, including the Cuesta Park, Old Mountain View and Shoreline West neighborhoods. Many 94043 voters live north of Central Expressway in Areas 1 or 2, where the only candidates (Nir Paz in Area 1, Ellen Kamei in Area 2) are unopposed, so those voters will not see a contested MVLA race. Check your sample ballot to see whether Area 3 applies to you.',
      'Cornes and Vonnegut have clashed on the board over committee assignments and conflicts of interest, including a June 2026 dispute over Cornes’s seat on a city transportation advisory committee. Dave served from 2016 to 2024, including as board president in 2020 and 2024.',
    ],
    readingLinks: [
      { label: 'Mountain View Voice: MVLA school board to see shakeup in November’s election', url: 'https://www.mv-voice.com/news/2026/07/23/mvla-school-board-to-see-shakeup-in-novembers-election/', summary: 'Trustee-area map, who is on the ballot, and the switch from at-large voting.' },
      { label: 'Mountain View Voice: MVLA board members clash over committee assignments and conflicts of interest (June 2026)', url: 'https://www.mv-voice.com/education/2026/06/15/mvla-school-board-members-clash-over-committee-assignments-conflicts-of-interest/', summary: 'Vonnegut’s complaint about Cornes and Cornes’s response.' },
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'catherine-vonnegut',
        name: 'Catherine Vonnegut',
        party: 'NP',
        role: 'Governing Board Member',
        qualification: qual(
          'extensive',
          'Vonnegut has served on the MVLA board since 2018 and was board president in 2021.',
          [
            ['education', 'unknown', 'No classroom or education career documented in sources reviewed.'],
            ['budget', 'met', 'Eight years on the board that adopts the district budget.'],
            ['governance', 'met', 'Elected 2018; board president in 2021 (Voice, Dec. 2021).'],
            ['community', 'unknown', 'No specific community role found in sources reviewed.'],
          ],
        ),
        bio: [
          'Vonnegut was first elected to the MVLA board in 2018 and served as board president in 2021 (Mountain View Voice). She lives in Area 3 and is competing against fellow trustee Thida Cornes.',
          'In June 2026 she argued that Cornes’s seat on the city’s Active Transportation Plan committee should have been disclosed and could create a conflict of interest.',
        ],
        recordVsChange:
          'She brings the longest tenure in the race and the board’s presidency experience. Replacing her would end eight years of service, but her opponents include another sitting trustee, so some experience stays either way.',
        scorecard: [
          { topic: 'Budget & oversight', position: '? No public position found' },
          { topic: 'Curriculum & academics', position: '? No public position found' },
          { topic: 'Teachers & staffing', position: '? No public position found' },
          { topic: 'Student safety & wellbeing', position: '? No public position found' },
          { topic: 'Board conduct', position: '✓ Pressed for disclosure of trustees’ outside committee roles' },
        ],
        money: NO_MONEY,
        endorsements: 'None found.',
      },
      {
        id: 'thida-cornes',
        name: 'Thida Cornes',
        party: 'NP',
        role: 'Governing Board Member, MVLA Union High School District',
        qualification: qual(
          'extensive',
          'Cornes joined the MVLA board in December 2022 and has served about four years; she also sits on the city’s Active Transportation Plan committee.',
          [
            ['education', 'unknown', 'No classroom or education career documented in sources reviewed.'],
            ['budget', 'met', 'Four years on the board that adopts the district budget.'],
            ['governance', 'met', 'Sworn in December 2022 (Mid-Peninsula Post).'],
            ['community', 'partial', 'Member of the city’s Active Transportation Plan committee since it formed in 2023 (Voice, June 2026).'],
          ],
        ),
        bio: [
          'Cornes was elected to the MVLA board in 2022 and is competing in Area 3 against fellow trustee Catherine Vonnegut and former trustee Sanjay Dave (Mountain View Voice).',
          'She joined the city’s Active Transportation Plan committee when it was created in 2023 and wrote to council members urging changes to the draft plan. Vonnegut says that role should have been disclosed on the board’s committee lists.',
        ],
        recordVsChange:
          'She has four years on the board and ties to city transportation planning. Her race pits her against another sitting trustee, so the trade-off is who among the two keeps the seat.',
        scorecard: [
          { topic: 'Budget & oversight', position: '? No public position found' },
          { topic: 'Curriculum & academics', position: '? No public position found' },
          { topic: 'Teachers & staffing', position: '? No public position found' },
          { topic: 'Student safety & wellbeing', position: '~ Active in city active-transportation planning, which affects student routes; position on the draft plan not detailed' },
          { topic: 'Board conduct', position: '~ Disputes Vonnegut’s conflict-of-interest claim' },
        ],
        money: NO_MONEY,
        endorsements: 'None found.',
        redFlags: [
          {
            severity: 'notable',
            status: 'alleged',
            text: 'In June 2026 fellow Trustee Catherine Vonnegut argued that Cornes’s seat on Mountain View’s Active Transportation Plan committee, and a letter Cornes sent to council members urging changes to the draft plan, created a conflict of interest and that the role was missing from the board’s committee-assignment lists in 2024 and 2025. Cornes says the committee stopped meeting for a long period, that she told the board when it resumed, and that she raised it in board reports. The Voice did not report a formal finding.',
            whyItMatters: 'Trustees must disclose outside roles that could affect school-board decisions on student safety and transportation.',
            sources: [
              { label: 'Mountain View Voice (June 15, 2026)', url: 'https://www.mv-voice.com/education/2026/06/15/mvla-school-board-members-clash-over-committee-assignments-conflicts-of-interest/' },
            ],
          },
        ],
      },
      {
        id: 'sanjay-dave',
        name: 'Sanjay Dave',
        party: 'NP',
        role: 'Engineer/Parent',
        qualification: qual(
          'extensive',
          'Dave served on the MVLA board from 2016 to 2024, including as board president in 2020 and 2024, and has worked in technology since 1988.',
          [
            ['education', 'partial', 'Advocated expanding computer science, bioengineering and environmental science programs (earlier coverage); no classroom career documented.'],
            ['budget', 'met', 'Eight years on the board that adopts the district budget.'],
            ['governance', 'met', 'Board president in 2020 and 2024 (Mountain View Voice; Los Altos Town Crier).'],
            ['community', 'partial', 'Parent of students in the Mountain View schools; no other role found.'],
          ],
        ),
        bio: [
          'Dave served on the MVLA board from 2016 to 2024 and was board president in 2020 and 2024 (Mountain View Voice). He has worked in technology since 1988.',
          'In 2024 he told the Town Crier he would not seek another term because of growing professional responsibilities, and no explanation for his return was found. In his earlier campaigns he emphasized expanding computer science, bioengineering and environmental science and tracking student engagement with metrics such as class participation and homework completion.',
        ],
        scorecard: [
          { topic: 'Budget & oversight', position: '? No 2026 position found' },
          { topic: 'Curriculum & academics', position: '✓ Earlier advocacy for computer science, bioengineering and environmental science (2024 coverage)' },
          { topic: 'Teachers & staffing', position: '? No public position found' },
          { topic: 'Student safety & wellbeing', position: '? No 2026 position found' },
          { topic: 'Board conduct', position: '? No public position found' },
        ],
        money: NO_MONEY,
        endorsements: 'None found.',
        notes: [
          'Positions are from earlier campaigns; no 2026 platform statement was found.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', '—', '—', 'Progressive Left voters have no clear lean: none of the three has published an equity, curriculum or budget platform in the sources reviewed.'],
      ['EL', 'Dave', '○', 'Establishment Liberals value Dave’s past board presidency and earlier push for science and computing programs, though no 2026 platform was found.'],
      ['DM', 'Vonnegut', '○', 'Democratic Mainstays value experienced sitting trustees; Vonnegut has the longest tenure, but the three are close on the record.'],
      ['OL', '—', '—', 'Outsider Left voters have no outsider in this race: all three are current or former trustees.'],
      ['SS', '—', '—', 'Stressed Sideliners have no distinguishing public positions to match against.'],
      ['AR', 'Dave', '○', 'Ambivalent Right voters value measurable student outcomes, which fits Dave’s earlier emphasis on metrics such as class participation and homework completion.'],
      ['PR', '—', '—', 'Populist Right voters have no clear lean because no candidate has campaigned against the board or its spending.'],
      ['CC', '—', '—', 'Committed Conservatives have no clear lean because no candidate has published a platform.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no clear lean because no candidate has published a platform on values or curriculum.'],
    ]),
    counterArguments: [
      'EL/AR (Dave): But Dave told the Town Crier in 2024 he would not run again and has published no 2026 platform, so voters know less about what he would do now than about the two sitting trustees.',
    ],
  },

  /* ------------------------------------------------------------------ */
  /* VALLEY WATER D7                                                     */
  /* ------------------------------------------------------------------ */
  {
    id: 'valley-water-d7',
    categoryId: 'district',
    title: 'Santa Clara Valley Water District, District 7',
    tldrLabel: 'Valley Water, District 7',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Valley Water is the county’s wholesale water supplier and flood-protection agency. Its seven-member board sets water rates and the property-tax and parcel-tax levies that fund them, and decides on large projects such as dams, pipelines and creek flood control.',
      'District 7 covers Palo Alto, Mountain View, Los Altos, Monte Sereno, Los Altos Hills, Los Gatos and part of south San José. The seat is held by Rebecca Eisenberg, whose term expires in December 2026.',
    ],
    introParagraphs: [
      'Eisenberg won in 2022 with 54.8% over incumbent Gary Kremen, running against the roughly $500 million Pacheco Dam project (Mountain View Voice, Nov. 2022). She has since been censured by her board. Challenger Pete Dailey, a Los Altos councilmember and former mayor, gave up his council seat to run, saying north-county residents are “ineffectively represented.”',
      'The two share a ballot with no party label; the Santa Clara County Democratic Party and environmental groups had not published endorsements in this race in sources found as of Oct. 8, 2026.',
    ],
    readingLinks: [
      { label: 'Palo Alto Daily Post: Los Altos councilman to challenge Eisenberg (Feb. 19, 2026)', url: 'https://padailypost.com/2026/02/19/los-altos-councilman-to-challenge-eisenberg-for-water-board-seat/', summary: 'Why Dailey is running and the controversies around Eisenberg’s term.' },
      { label: 'San José Inside: Valley Water board censures Eisenberg', url: 'https://www.sanjoseinside.com/news/valley-water-board-censures-director-eisenberg-for-abusive-comments/', summary: 'Findings and sanctions from the March 14, 2024 censure.' },
    ],
    legalRequirements: WATER_LEGAL,
    qualificationCriteria: WATER_CRITERIA,
    candidates: [
      {
        id: 'pete-dailey',
        name: 'Pete Dailey',
        party: 'NP',
        role: 'Member, Los Altos City Council',
        qualification: qual(
          'substantial',
          'Dailey, 55, has served four years on the Los Altos City Council, including as 2025 mayor, and previously served on the Los Altos Parks and Recreation Commission. He has no water-agency service.',
          [
            ['water', 'partial', 'No water-agency role found; wants the north-county seat to take part in the San Francisquito Creek flood-control authority (Daily Post).'],
            ['budget', 'partial', 'Four years on a city council that adopts a city budget; 2022 campaign focused on city finances (Los Altos Online).'],
            ['governance', 'met', 'Los Altos council since 2022; vice mayor in 2024 and mayor in 2025.'],
            ['community', 'met', 'Represents Los Altos, one of the district’s north-county cities; volunteered with local youth baseball and softball boards.'],
          ],
        ),
        bio: [
          'Dailey is a retired tech professional who has lived in Los Altos since 2010. He was elected to the Los Altos City Council in 2022 after serving on the Parks and Recreation Commission, was vice mayor in 2024 and mayor in 2025 (Los Altos Online; Palo Alto Daily Post).',
          'He is running because he believes north-county residents are “ineffectively represented,” and wants a director who works more collaboratively with the rest of the board. He is leaving the Los Altos council to run, which opens a second council vacancy there this fall.',
        ],
        scorecard: [
          { topic: 'Water supply', position: '? No 2026 position found' },
          { topic: 'Flood protection', position: '✓ Wants the district’s north-county director to take part in the San Francisquito Creek JPA' },
          { topic: 'Rates & budget', position: '~ Prioritized city finances and cutting legal fees on the Los Altos council' },
          { topic: 'Board relationships', position: '✓✓ Says he would work more cooperatively with other directors' },
          { topic: 'Environment', position: '✓ 2022 council platform listed environmentally sustainable policies' },
        ],
        money: NO_MONEY,
        endorsements: 'No organizational endorsements found for this race.',
      },
      {
        id: 'rebecca-eisenberg',
        name: 'Rebecca Eisenberg',
        party: 'NP',
        role: 'Incumbent',
        qualification: qual(
          'substantial',
          'Eisenberg is the sitting District 7 director, elected in 2022, and is a corporate attorney. Her board colleagues censured her in March 2024 and removed her from committees.',
          [
            ['water', 'met', 'Nearly four years as a Valley Water director; opposed the ~$500 million Pacheco Dam project in 2022 (Voice).'],
            ['budget', 'met', 'Votes on the district’s budget and rates as a director.'],
            ['governance', 'not-met', 'Censured March 14, 2024; removed from all committee assignments and from the San Francisquito Creek JPA board (San José Inside; Daily Post).'],
            ['community', 'partial', 'Won 54.8% in 2022; the board limited her contact with district employees for at least one year.'],
          ],
        ),
        bio: [
          'Eisenberg is a corporate attorney who upset incumbent Gary Kremen in 2022 on a climate-focused campaign opposing the Pacheco Dam project (Mountain View Voice). She represents Palo Alto, Mountain View, Los Altos and neighboring areas.',
          'Her term has been marked by conflict with the board and staff: a 2024 censure after an independent investigation, a lawsuit over a confidential investigation report, and her removal from the San Francisquito Creek JPA board in March 2024. She confirmed she is running for reelection; the Daily Post did not include her response to the allegations in its February 2026 article.',
        ],
        recordVsChange:
          'Delivered: a vote against the Pacheco Dam project and a climate-focused voice on the board. Against: since the March 2024 censure she has had no committee assignments and has been removed from the creek-flood JPA, so her north-county district has had less representation on key bodies. A change would restore that seat’s access but loses an independent critic of the board majority.',
        scorecard: [
          { topic: 'Water supply', position: '✓ Opposed the Pacheco Dam project as unnecessary and environmentally destructive' },
          { topic: 'Flood protection', position: '✗ Removed from the San Francisquito Creek JPA board in March 2024' },
          { topic: 'Rates & budget', position: '? No 2026 position found' },
          { topic: 'Board relationships', position: '✗ Censured 2024; stripped of committee assignments; sued by the district' },
          { topic: 'Environment', position: '✓✓ Climate-centered campaign in 2022' },
        ],
        money: NO_MONEY,
        endorsements: 'No organizational endorsements found for this race.',
        redFlags: [
          {
            severity: 'severe',
            status: 'official-finding',
            text: 'On March 14, 2024 the Valley Water board censured Eisenberg for a pattern of abusive conduct toward district employees after an independent investigation substantiated some of 25 allegations; reported substantiated remarks included sexist, racist and ageist comments. The board removed her from all committee assignments, limited her interaction with employees for at least one year and required anti-discrimination and behavior training. At the hearing she apologized, saying “I take responsibility for those actions.”',
            whyItMatters: 'A water-board director works with a large staff and six fellow directors, and the conduct findings bear directly on how well she can do that.',
            sources: [
              { label: 'San José Inside (Mar. 2024)', url: 'https://www.sanjoseinside.com/news/valley-water-board-censures-director-eisenberg-for-abusive-comments/' },
              { label: 'Palo Alto Daily Post (Feb. 19, 2026)', url: 'https://padailypost.com/2026/02/19/los-altos-councilman-to-challenge-eisenberg-for-water-board-seat/' },
            ],
          },
          {
            severity: 'serious',
            status: 'documented',
            text: 'The board also censured her for taking the confidential investigation report out of the district building; the district sued her in April 2024, and in September 2024 a Santa Clara County judge ordered her to return the roughly 2,000-page report within five days. A district attorney declined to file theft charges, citing insufficient evidence of criminal intent. Eisenberg called the lawsuit specious and an abuse of ratepayer funds, and has said she turned the report over to federal officials.',
            whyItMatters: 'Directors are trusted with confidential personnel and closed-session information, and the district spent ratepayer money to recover the document.',
            sources: [
              { label: 'Local News Matters (Sept. 5, 2024)', url: 'https://localnewsmatters.org/2024/09/05/valley-water-wins-lawsuit-against-its-director-eisenberg-calls-it-abuse-of-ratepayer-funds/' },
              { label: 'San José Spotlight: water agency wins lawsuit against its director', url: 'https://sanjosespotlight.com/santa-clara-water-agency-wins-lawsuit-against-its-director/' },
            ],
          },
        ],
        notes: [
          'Daily Post (Feb. 2026) reports that investigators did not substantiate her own complaints of retaliatory and discriminatory treatment as a woman.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Dailey', '○', 'Progressive Left voters value Eisenberg’s climate record, but the censure for sexist and racist remarks conflicts with the group’s priorities, leaving a weak lean to Dailey’s collaborative approach.'],
      ['EL', 'Dailey', '◐', 'Establishment Liberals favor a collaborative, experienced local official over a director censured by her own board for abusive conduct toward staff.'],
      ['DM', 'Dailey', '◐', 'Democratic Mainstays favor a steady local officeholder and place weight on workplace-conduct findings against Eisenberg.'],
      ['OL', 'Eisenberg', '◐', 'Outsider Left voters value Eisenberg’s record as an independent critic who beat an incumbent and opposed a major dam project; her severe censure finding caps the lean.'],
      ['SS', 'Dailey', '○', 'Stressed Sideliners want a functioning agency that keeps rates reasonable; Dailey’s pitch is cooperation, though neither has a stated rate plan.'],
      ['AR', 'Dailey', '◐', 'Ambivalent Right voters favor a pragmatic officeholder over a director whose term has produced lawsuits and censure.'],
      ['PR', 'Dailey', '○', 'Populist Right voters dislike a director who cost ratepayers legal fees and probes, though they may share her skepticism of large projects.'],
      ['CC', 'Dailey', '◐', 'Committed Conservatives value orderly governance and fiscal responsibility, which fits the cooperative challenger over an incumbent the district sued.'],
      ['FF', 'Dailey', '○', 'Faith and Flag Conservatives lean to the candidate with the cleaner conduct record; neither candidate has a distinct values platform.'],
    ]),
    counterArguments: [
      'OL (Eisenberg): But the board’s own investigation substantiated abusive remarks to staff and a court ordered her to return a confidential report; a director who cannot work with staff cannot deliver on her environmental agenda.',
      'EL/DM (Dailey): But Dailey has no water-agency experience and has not published positions on supply, rates or dam projects, so the case for him rests mostly on not being Eisenberg.',
    ],
  },

  /* ------------------------------------------------------------------ */
  /* MEASURES                                                            */
  /* ------------------------------------------------------------------ */
  {
    id: 'mountain-view-measure-e',
    categoryId: MEASURE_CATEGORY,
    title: 'Mountain View Measure E — City charter update',
    tldrLabel: 'Mountain View Measure E — Charter update',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure E would amend the city charter, Mountain View’s governing document, to use gender-neutral language, give the council 60 days instead of 30 to fill a council vacancy, end the requirement to read ordinances and resolutions aloud in full, and let the council set membership qualifications for boards and commissions it creates by ordinance or resolution.',
      'City staff called the changes non-substantive and non-controversial, and more substantive charter changes are planned for a separate 2028 measure (Mountain View Voice).',
    ],
    introParagraphs: [
      'The council voted unanimously on June 9, 2026 to place the measure on the Nov. 3 ballot (Mountain View Voice). The city estimated placing it on the ballot costs about $100,000. No organized opposition was found.',
    ],
    measure: {
      question:
        'Shall the Mountain View City Charter be amended to replace gender-specific terms with gender-neutral language, extend the time to fill a council vacancy from 30 to 60 days, eliminate the requirement to read ordinances and resolutions in full, allow the Council to set qualifications for boards, commissions and committees it creates, and make other clarifying updates?',
      measureType: 'Charter amendment (city measure placed by the City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'No direct tax or spending change. The city’s staff report put the cost of placing the measure on the ballot at about $100,000 (Mountain View Voice).',
      supporters: 'City Council (unanimous vote, June 9, 2026). No official ballot-argument signers were found.',
      opponents: 'None found.',
      voterConnection: [
        'The charter is the city’s constitution; it controls how the council fills vacancies and creates advisory bodies.',
        'A 60-day window gives the council more time to choose between appointing a replacement and calling a special election.',
        'No tax or fee changes; the measure affects procedure rather than services.',
      ],
      mechanismBullets: [
        'Replaces gender-specific terms with gender-neutral language.',
        'Extends the time the council has to fill a vacancy, by appointment or calling a special election, from 30 to 60 days; staff noted state law allows up to 60 days.',
        'Eliminates the charter requirement to read ordinances and resolutions aloud in full before adoption.',
        'Lets the council set membership qualifications for boards, commissions and committees created by ordinance or resolution; bodies created by the charter, such as the Environmental Planning Commission, Board of Library Trustees and Parks and Recreation Commission, keep their current requirements.',
        'Threshold: charter amendments need a simple majority of voters under state law, as news reports note. The measure text was not available on the city or county sites I could reach; the figure comes from news reports.',
      ],
      argumentsFor: [
        'Brings the charter in line with current state law and city practice.',
        'More time to fill vacancies avoids rushed appointments or a poorly timed special election.',
        'Removing the read-aloud rule saves meeting time with no loss of public access, since the text is published.',
        'Flexibility on advisory-body qualifications lets the city adapt without another charter vote.',
      ],
      argumentsAgainst: [
        'A $100,000 election cost for changes staff describe as minor.',
        'Giving the council discretion over who may serve on advisory bodies could be used to narrow participation.',
        'A longer vacancy window leaves a seat empty and delays a public vote.',
        'Bundling several changes into one measure prevents voters from approving some and rejecting others.',
      ],
      readingLinks: [
        { label: 'Mountain View Voice: charter update heads to November ballot (June 11, 2026)', url: 'https://www.mv-voice.com/news/2026/06/11/mountain-view-city-charter-update-heads-to-november-ballot/', summary: 'What the measure changes and the council vote.' },
        { label: 'Mountain View Voice: non-controversial charter update (Feb. 12, 2026)', url: 'https://www.mv-voice.com/city-government/2026/02/12/mountain-view-looks-to-place-non-controversial-city-charter-update-on-november-ballot/', summary: 'Early staff proposal and council debate.' },
        { label: 'Local News Matters: Santa Clara County Nov. 3, 2026 ballot', url: 'https://localnewsmatters.org/santa-clara-november-3-2026/', summary: 'Ballot-label summary of the measure.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters value gender-neutral language and see the other changes as low-stakes housekeeping.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value modernizing governance documents and following staff’s unanimous recommendation.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays support a unanimous, non-controversial council-backed cleanup.'],
      ['OL', 'Yes', '○', 'Outsider Left voters see little at stake but may dislike giving the council more discretion over advisory bodies.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners see a procedural measure with no cost to taxpayers beyond the one-time election expense.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters accept routine modernization that does not raise taxes.'],
      ['PR', 'No', '○', 'Populist Right voters are wary of giving the council more power over who serves on advisory bodies and of the $100,000 election cost.'],
      ['CC', 'Yes', '○', 'Committed Conservatives accept a housekeeping update but prefer fewer government changes in general.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives may object to the gender-neutral rewrite while seeing the rest as routine, so there is no clear fit.'],
    ]),
    counterArguments: [
      'PR/FF (No or skip): But the changes are procedural, the council vote was unanimous, and the charter’s vacancy window currently falls short of what state law allows.',
      'EL/DM (Yes): But the measure bundles several unrelated changes, and a $100,000 election for minor edits is a fair cost objection.',
    ],
  },

  {
    id: 'mountain-view-measure-f',
    categoryId: MEASURE_CATEGORY,
    title: 'Mountain View Measure F — Hotel tax increase (10% to up to 15%)',
    tldrLabel: 'Mountain View Measure F — Hotel tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure F would let the council raise the city’s hotel and short-term-rental tax (transient occupancy tax) from 10% to as high as 15%, generating up to about $5.2 million a year for general city purposes until voters end it.',
      'The tax is paid by guests, not residents; the ballot label lists streets and sidewalks, police, fire and 911 response, affordable housing and new parks among the uses, but as a general tax the money can go to any city purpose.',
    ],
    introParagraphs: [
      'The council voted unanimously on June 23, 2026 to place the measure on the ballot, after scrapping a planned bond when polling showed 52% support against the two-thirds a bond requires (Mountain View Voice). If approved, staff plan to return in November or December to propose the actual rate.',
      'All eight council candidates said they support the measure at the Aug. 27 business forum. No organized opposition or hotel-industry position was found.',
    ],
    measure: {
      question:
        'Shall the Mountain View measure to raise the City’s hotel and short-term rental tax from 10% to up to 15%, generating up to $5,200,000 annually for general City services such as street and sidewalk repair, police, fire and 911 response, affordable housing and new parks, until ended by voters, with independent audits, be adopted?',
      measureType: 'General tax (transient occupancy tax increase placed by the City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Up to about $5.2 million a year per the ballot label, or about $5.4 million per Assistant City Manager Arn Andrews. Mountain View has 19 hotels with about 1,780 rooms; annual hotel tax revenue rose from about $8 million in 2023–24 to over $11 million (Mountain View Voice). No sunset.',
      supporters: 'City Council (unanimous). No organized campaign committee or official ballot-argument signers were found.',
      opponents: 'None found; reader comments criticizing lack of transparency are not an organized position.',
      voterConnection: [
        'Hotel and short-term-rental guests pay the tax, not Mountain View residents, so it shifts costs to visitors.',
        'A 10% rate has not changed since 1991; Andrews said nearly all neighboring cities charge more.',
        'Because it is a general tax, the council can spend the revenue on any city purpose; the listed uses are not binding.',
        'Government employees on official business and stays longer than 30 consecutive days are exempt.',
      ],
      mechanismBullets: [
        'Raises the maximum tax rate on hotel and short-term-rental stays from 10% to 15%; the council would set the actual rate later.',
        'Raises up to about $5.2 million a year per the ballot label; staff estimated about $5.4 million.',
        'Listed uses: street and sidewalk repair, police, fire and 911 response, affordable housing, new parks and other general government services.',
        'Exempts government employees on official business and stays longer than 30 consecutive days.',
        'Includes independent audits and has no end date unless voters repeal it.',
        'Threshold: a general tax needs a simple majority under Prop 218; news reports say the same. The official measure text was not available on the city or county sites I could reach; the figure comes from news reports and the ballot summary.',
      ],
      argumentsFor: [
        'The tax is paid by visitors rather than residents.',
        'Mountain View’s rate is among the lowest in the region and has not changed since 1991.',
        'Provides money for streets, public safety, housing and parks after a bond proposal lacked two-thirds support.',
        'Includes independent audits.',
      ],
      argumentsAgainst: [
        'General-tax revenue is not legally limited to the listed uses, so the council could spend it elsewhere.',
        'Higher rates could make local hotels less competitive or reduce stays.',
        'The tax has no sunset date.',
        'Revenue of about $5 million is modest against city needs and may lead to other tax proposals.',
      ],
      readingLinks: [
        { label: 'Mountain View Voice: city scraps bond plans, opts for hotel tax (June 24, 2026)', url: 'https://www.mv-voice.com/election/2026/06/24/mountain-view-scraps-bond-plans-opts-for-hotel-tax-measure-instead/', summary: 'Rate, revenue, exemptions and why the bond was dropped.' },
        { label: 'Mountain View Voice: bond plans dropped as polls showed support falling (July 24, 2026)', url: 'https://www.mv-voice.com/election/2026/07/24/mountain-view-ditched-bond-plans-as-polls-showed-support-dropping-records-show/', summary: 'Polling that led the council to choose a tax measure.' },
        { label: 'Local News Matters: Santa Clara County Nov. 3, 2026 ballot', url: 'https://localnewsmatters.org/santa-clara-november-3-2026/', summary: 'Ballot-label summary of the measure.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters value new city revenue for affordable housing, parks and services, paid by visitors rather than residents.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value shifting costs to hotel guests and a unanimous council recommendation with audits.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays favor local funding for streets, safety and housing that does not tax residents.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters like a tax on visitors and corporate travel, though they may dislike general-fund flexibility.'],
      ['SS', 'Yes', '◐', 'Stressed Sideliners are cost-sensitive, and this tax falls on visitors rather than residents.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters can accept a tax on visitors at a rate still comparable to neighboring cities.'],
      ['PR', 'No', '◐', 'Populist Right voters oppose new taxes and distrust open-ended general-tax revenue even when visitors pay.'],
      ['CC', 'No', '●', 'Committed Conservatives oppose a tax increase with no sunset and with spending not locked to the listed purposes.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives oppose new taxes and follow skepticism of local government spending.'],
    ]),
    counterArguments: [
      'CC/PR/FF (No): But residents do not pay it, the rate has not moved since 1991, and the city dropped a bond that would have taxed property owners.',
      'PL/EL/DM (Yes): But because it is a general tax, the listed uses are not legally binding, and a modest $5 million a year will not close the city’s infrastructure gap.',
    ],
  },

  {
    id: 'el-camino-measure-s',
    categoryId: MEASURE_CATEGORY,
    title: 'El Camino Healthcare District Measure S — Director term limits',
    tldrLabel: 'El Camino Healthcare District Measure S — Term limits',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure S would amend the El Camino Healthcare District’s bylaws to limit its elected directors to four four-year terms (16 years). The district covers Mountain View, Los Altos, Los Altos Hills, most of Sunnyvale, and parts of Cupertino, Santa Clara and Palo Alto, and is the sole member of the El Camino Hospital nonprofit.',
      'State law sets four-year terms for healthcare-district directors but sets no limit on how many terms they may serve; the district currently has none. All versions the board considered would apply only to terms beginning on or after Dec. 1, 2026, with no earlier service counted.',
    ],
    introParagraphs: [
      'The board decided in March 2026 to place a term-limits measure on the Nov. 3 ballot, and in May 2026 considered four versions of the bylaw language (absolute or consecutive limit; partial terms counting or not). The board packet shows the ballot question as “limit District Directors to four [consecutive] four-year terms”; which version the board finally adopted was not in the materials found.',
      'Directors Peter Fung and George Ting are the only candidates for the two board seats and are effectively unopposed. In draft minutes, Dr. Fung said the proposal would not affect current board members; Chair John Zoglin opposed placing the measure on the ballot, citing cost and value. County Counsel prepares the impartial analysis.',
    ],
    measure: {
      question:
        'Shall the measure amending the Bylaws of the El Camino Healthcare District to limit District Directors to four [consecutive] four-year terms be adopted?',
      measureType: 'District bylaw amendment (Gov. Code § 53077 term-limits proposal placed by the district board)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'No tax change. The district pays the county for the election costs; Chair Zoglin cited the cost of the ballot measure as a concern at the March 10, 2026 meeting, and no cost figure was found.',
      supporters: 'El Camino Healthcare District board: Director Julia Miller presented the proposal and the board directed staff in March 2026 to prepare it. No official ballot-argument signers were found.',
      opponents: 'Chair John Zoglin said in March 2026 he did not support moving forward, citing cost and value (draft minutes). No organized opposition found.',
      voterConnection: [
        'You elect the directors who oversee tax money and the El Camino Hospital nonprofit; term limits would force turnover after 16 years.',
        'The limit starts with terms beginning Dec. 1, 2026, so current directors’ past service would not count.',
        'No director could reach the cap before 2042, when a term beginning Dec. 1, 2026 would be the first of four to end.',
        'There is no tax change; the cost is the one-time election expense.',
      ],
      mechanismBullets: [
        'Amends Article IV, Section 2 of the district bylaws to cap directors at four four-year terms.',
        'Applies only to terms beginning on or after Dec. 1, 2026; prior service, full or partial, does not count.',
        'Options the board reviewed differed on whether the limit is lifetime or consecutive (with a two- or four-year break to return) and whether partial terms count.',
        'Under the options where partial terms count, a partial term counts as a full term if the director served more than two years of it.',
        'State law (Gov. Code § 53077) allows a district to adopt a term-limit proposal that takes effect if a majority of votes cast favor it; the board’s resolution cites that threshold.',
        'The impartial analysis is prepared by County Counsel, and primary and rebuttal arguments may be filed under the Elections Code.',
      ],
      argumentsFor: [
        'Limits entrenchment on a board that has no term limits now; this year both seats are uncontested.',
        'Sixteen years leaves ample time for expertise and continuity.',
        'Because past service does not count, the limit is a clean start rather than a retroactive ban.',
        'Forces periodic renewal of a board that oversees a large hospital system.',
      ],
      argumentsAgainst: [
        'Removes experienced directors regardless of performance and cuts institutional knowledge.',
        'Voters already have the power to replace directors every four years.',
        'Costs the district money to place the measure on the ballot.',
        'Chair Zoglin questioned whether the measure is worth the cost at this time.',
      ],
      readingLinks: [
        { label: 'Los Altos Town Crier: El Camino Healthcare District ballot measure seeks term limits', url: 'https://www.losaltosonline.com/elections/el-camino-healthcare-district-ballot-measure-seeks-term-limits-on-district-directors/article_d0b494bd-302a-455d-8353-2018414502d5.html', summary: 'Majority vote threshold, four four-year terms, and district boundaries.' },
        { label: 'ECHD board packet, May 19, 2026 (term-limits memo and draft Resolution 2026-06)', url: 'https://www.elcaminohealthcaredistrict.org/sites/default/files/2026-05/packet_dbod2_051926.pdf', summary: 'Four bylaw options, ballot question text and the March 10 draft minutes.' },
        { label: 'Local News Matters: Santa Clara County Nov. 3, 2026 ballot', url: 'https://localnewsmatters.org/santa-clara-november-3-2026/', summary: 'Ballot-label summary of the measure.' },
        { label: 'Santa Clara County Registrar of Voters: El Camino Healthcare District', url: 'https://vote.santaclaracounty.gov/el-camino-healthcare-district', summary: 'County page for the district’s 2026 contests.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters support renewing public boards and curbing entrenchment, though the 16-year limit is generous.'],
      ['EL', 'No', '○', 'Establishment Liberals value institutional knowledge on a board overseeing a major hospital system and see voters as able to replace directors already.'],
      ['DM', '—', '—', 'Democratic Mainstays have no clear fit: they value experience on health boards but also accept routine term limits.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters favor limits on long-serving insiders and see this as a reform on an unaccountable board.'],
      ['SS', 'Yes', '◐', 'Stressed Sideliners favor simple limits on entrenched officeholders in agencies they rarely follow.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters favor term limits as a modest check on long-serving officials.'],
      ['PR', 'Yes', '●', 'Populist Right voters strongly favor term limits as a check on entrenched insiders.'],
      ['CC', 'Yes', '●', 'Committed Conservatives favor term limits to constrain long-tenured public boards.'],
      ['FF', 'Yes', '◐', 'Faith and Flag Conservatives favor term limits as a check on entrenched institutions.'],
    ]),
    counterArguments: [
      'PR/CC (Yes): But the limit does not count past service, so no director could hit the cap before 2042, and the election itself costs the district money.',
      'EL (No): But the district has no limit now and both seats up this year are uncontested, so voters have had little practical choice.',
    ],
  },
];
