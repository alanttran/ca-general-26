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
      ['LP', 'Sylvester, Poicon, Paymer', '◐', 'Leftward Progressives want tenant protections, climate action and labor allies, which Sylvester (Working Families Party, strong tenant protections), Poicon (advocate for immigrants and unhoused residents) and Paymer (climate groups and trade unions) offer.'],
      ['LL', 'Sylvester, Paymer, Donahue', '◐', 'Loyal Liberals, 81% of whom say the Democratic Party represents them well, value institutional backing and experience, and Sylvester and Paymer carry the county Democratic Party and environmental endorsements while Donahue brings nearly two decades on city commissions.'],
      ['LO', 'Poicon, Kuszmaul, Ali', '○', 'Left-Out Left voters, only 53% of whom say a candidate has shared their views lately, want cost-of-living relief from people outside the usual pipeline, and Poicon is a community organizer, Kuszmaul a renter pushing for more housing and Ali a first-timer focused on affordability and jobs.'],
      ['OO', 'Sylvester, Donahue, Kuszmaul', '○', 'Order and Opportunity Left voters want affordable homes, small-business help and steady hands, which Sylvester (backed by city firefighters), Donahue (small-business strategy) and Kuszmaul (housing near jobs) offer.'],
      ['TM', 'Kuszmaul, Sylvester, Ali', '○', 'Tuned-Out Middle voters judge on rent and jobs, and Kuszmaul’s push for more housing, Sylvester’s affordable housing and tenant focus and Ali’s jobs and affordability pitch speak most directly to costs.'],
      ['PP', 'Cox, Donahue, Sylvester', '◐', 'Pragmatic and Polite Right voters prize experience and careful, incremental change, with 78% preferring incremental fixes over risky quick ones, and Cox, Donahue and Sylvester have the longest service on city bodies and favor a measured local approach to SB 79.'],
      ['UR', 'Cox, Donahue, Amoroso', '○', 'Unconventional Right voters dislike one-size-fits-all mandates from Sacramento and prefer plain-spoken outsiders, so they favor Cox and Donahue’s skepticism of SB 79 and Amoroso’s Army Reserve background.', 'Unconventional Right voters who weigh experience could keep Cox and Donahue and swap Amoroso for Sylvester, a Parks and Recreation commissioner who runs a startup business, giving up Amoroso’s outsider profile for a Democratic Party-endorsed organizer of anti-Trump rallies.'],
      ['FC', 'Amoroso, Cox, Donahue', '○', 'Faith First Conservatives respect military service and favor neighborhood preservation over state-driven density, which points to Amoroso, Cox and Donahue, though none speaks to their social priorities.', 'Faith First Conservatives who weigh experience could trade Amoroso’s military service for Sylvester’s years on city commissions, keeping Cox and Donahue, though Sylvester is endorsed by the county Democratic Party and has organized demonstrations against the Trump administration.'],
      ['NA', 'Cox, Amoroso, Ali', '○', 'No Apologies Right voters, only about 2% of whom say the Democratic Party represents people like them well, resent state mandates and want candidates outside the Democratic endorsement network, so they back Cox’s opposition to SB 79, Amoroso’s military profile and Ali’s support for more office development.'],
    ]),
    counterArguments: [
      'LP/LL (Sylvester, Paymer): But consider Kuszmaul, because the housing shortage drives costs for renters, and a local alternative to SB 79 that Sylvester and Paymer are open to could slow new homes.',
      'PP/UR (Cox, Donahue): But consider Kuszmaul, because SB 79 took effect in July 2026 and he argues a local alternative would divert staff time and might not beat state law.',
      'LO/NA (Ali): But consider Donahue or Sylvester, because Ali entered the race last, has served on no city body and has published few specifics.',
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
      ['LP', 'Conley, Subbarayan', '○', 'Leftward Progressives value Conley’s free after-school care for low-income students and counselors at every school, and Subbarayan’s mentoring in a program for underserved students, though the administrator spending scandals weaken the lean.', 'Leftward Progressives who put experience first could pair Conley with Lambert, who has about ten years on the board, instead of Subbarayan, giving up a fresh voice for a second incumbent who sat through the spending controversies.'],
      ['LL', 'Conley, Lambert', '◐', 'Loyal Liberals value experienced trustees and stable governance, and Conley and Lambert bring a former teacher’s and a scientist-lawyer’s years on the board, despite the spending controversies.'],
      ['LO', 'Subbarayan, Riis', '○', 'Left-Out Left voters, 75% of whom say few or no officials ran to serve the public, distrust insiders after six-figure PR and coaching contracts and a $98,000 superintendent exit deal, so they lean to the two challengers.'],
      ['OO', 'Conley, Subbarayan', '○', 'Order and Opportunity Left voters want opportunity for working families and careful spending, which Conley’s after-school care and Subbarayan’s sound-finances focus offer together.', 'Order and Opportunity Left voters who prefer proven hands could pair Conley with Lambert, a two-stint trustee, instead of Subbarayan, accepting that both incumbents served during the PR-firm and coaching contracts his sound-finances pitch answers.'],
      ['TM', 'Conley, Subbarayan', '○', 'Tuned-Out Middle voters value direct help such as free after-school care, which Conley championed, and want money spent carefully, which Subbarayan stresses.', 'Tuned-Out Middle voters who let experience decide could pair Conley with Lambert, who has about ten years on the board, instead of Subbarayan, giving up the newcomer’s focus on careful spending.'],
      ['PP', 'Lambert, Subbarayan', '◐', 'Pragmatic and Polite Right voters want competence, fiscal care and civility, with 86% saying officials should avoid heated language, so they pair Lambert’s long board experience with Subbarayan’s sound-finances pitch and pass over Riis, who made unsupported fraud accusations.', 'Pragmatic and Polite Right voters who value continuity could pair Lambert with Conley, an eight-year trustee and former teacher, instead of Subbarayan, accepting that she presided in 2024 during the spending controversies his financial-care message answers.'],
      ['UR', 'Riis, Subbarayan', '◐', 'Unconventional Right voters want wasteful spending cut by outsiders, which fits Riis’s waste-cutting and gifted-program campaign and Subbarayan’s focus on sound finances.'],
      ['FC', 'Riis, Subbarayan', '○', 'Faith First Conservatives want limited, careful spending and lean to the two challengers promising it, though little in this race touches their social priorities.'],
      ['NA', 'Riis', '◐', 'No Apologies Right voters want a fighter against school-district waste, and Riis led the recall against Conley and makes cutting spending his lead issue.'],
    ]),
    counterArguments: [
      'UR/NA (Riis): But consider Lambert or Conley, because Riis has no board experience, his recall failed to qualify, and the Voice found no support for his “fraud and grift” accusation.',
      'LL (Conley, Lambert ◐): But consider Subbarayan or Riis, because both incumbents sat on the board during the spending controversies, and an unchanged board cannot credibly promise a different approach.',
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
      ['LP', 'Cornes', '○', 'Leftward Progressives favor climate-friendly transportation, and Cornes is active on the city’s Active Transportation Plan committee, though none of the three has published a platform.'],
      ['LL', 'Vonnegut', '○', 'Loyal Liberals take ethics and disclosure seriously and value experience, and Vonnegut, the longest-serving sitting trustee, pressed for disclosure of trustees’ outside roles.'],
      ['LO', 'Vonnegut', '○', 'Left-Out Left voters distrust officials with undisclosed outside roles, so they lean to Vonnegut, who raised the conflict-of-interest question about Cornes, though all three are insiders.'],
      ['OO', 'Dave', '○', 'Order and Opportunity Left voters value opportunity through strong STEM programs, and Dave pushed to expand computer science, bioengineering and environmental science.'],
      ['TM', 'Dave', '○', 'Tuned-Out Middle voters will know little about any of the three, and Dave, a district parent and two-time board president, has the clearest record to go on.'],
      ['PP', 'Dave', '○', 'Pragmatic and Polite Right voters prize experience and civility, and Dave, a two-time board president, stands apart from the current board feud between Cornes and Vonnegut.'],
      ['UR', 'Dave', '○', 'Unconventional Right voters favor measurable results over board infighting, and Dave emphasized tracking student engagement with concrete metrics.'],
      ['FC', '—', '—', 'Faith First Conservatives have no published position from any candidate on values or curriculum, so this column skips the race.', 'Faith First Conservatives who weigh experience could lean narrowly to Dave, whose earlier campaigns set out curriculum and student-engagement goals, alongside eight years on the board and two terms as president.'],
      ['NA', '—', '—', 'No Apologies Right voters find no candidate running against the board or its spending, so this column skips the race.', 'No Apologies Right voters who put experience first could lean narrowly to Dave, on the board from 2016 to 2024 and president twice, though in 2024 he said he would not run again.'],
    ]),
    counterArguments: [
      'OO/PP (Dave ○): But consider Vonnegut or Cornes, because Dave told the Town Crier in 2024 he would not run again and has published no 2026 platform.',
      'LP (Cornes ○): But consider Vonnegut, because Cornes’s seat on a city committee was missing from the board’s disclosure lists, which Vonnegut says created a conflict of interest; Cornes says she kept the board informed.',
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
      ['LP', 'Dailey', '○', 'Leftward Progressives share Eisenberg’s climate focus and opposition to the Pacheco Dam, but her censure for sexist, racist and ageist remarks to staff cuts against their values, leaving a weak lean to Dailey.'],
      ['LL', 'Dailey', '●', 'Loyal Liberals take official findings seriously, and Eisenberg was censured after an independent investigation and ordered by a court to return a confidential report, while Dailey is a former mayor promising to work with the board.'],
      ['LO', 'Dailey', '○', 'Left-Out Left voters liked Eisenberg’s upset of an incumbent, but a censure and a lawsuit that cost ratepayers weigh heavily for a group that distrusts officials’ conduct, so they lean weakly to Dailey.'],
      ['OO', 'Dailey', '●', 'Order and Opportunity Left voters want steady, respectful management of basic services, and Eisenberg’s removal from committees and the creek flood-control board has left the district with less representation.'],
      ['TM', 'Dailey', '◐', 'Tuned-Out Middle voters want a working agency and no wasted ratepayer money, and the district spent money suing Eisenberg to recover a confidential report.'],
      ['PP', 'Dailey', '●', 'Pragmatic and Polite Right voters penalize misconduct and incivility heavily, and 72% say offensive speech is a major problem, so they back Dailey, a former mayor promising collaboration, over a director censured for abusive conduct toward staff.'],
      ['UR', 'Dailey', '◐', 'Unconventional Right voters care little for climate politics but want competent, accountable officials, and Eisenberg’s censure and lawsuit outweigh her skepticism of a costly dam.'],
      ['FC', 'Dailey', '◐', 'Faith First Conservatives weigh character, and Eisenberg’s censure for abusive remarks and the confidential-report lawsuit tip them to Dailey.'],
      ['NA', 'Dailey', '○', 'No Apologies Right voters discount establishment discipline and may like a director who fought her board, but Eisenberg’s climate-centered agenda is not theirs, so they lean weakly to Dailey.'],
    ]),
    counterArguments: [
      'LL/OO/PP (Dailey ●): But consider Eisenberg, because Dailey has no water-agency experience and has published no positions on supply, rates or dam projects, while Eisenberg apologized for her remarks and has a record of opposing the costly Pacheco Dam.',
      'LP/LO (Dailey ○): But consider why the lean is weak: Eisenberg’s climate stance is close to theirs, though the board’s censure of Eisenberg and the court order to return the report bear directly on whether she can work with staff.',
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
      'Measure E is a cleanup of the city charter, Mountain View’s governing document. City staff called the changes non-substantive and non-controversial; more substantive charter changes are planned for a separate 2028 measure (Mountain View Voice).',
    ],
    introParagraphs: [
      'The council voted unanimously on June 9, 2026 to place the measure on the Nov. 3 ballot (Mountain View Voice).',
    ],
    measure: {
      explainerUrl: 'https://www.mv-voice.com/news/2026/09/10/voter-guide-what-to-know-about-mountain-views-measure-e-charter-update/',
      question:
        'Shall the Mountain View City Charter be amended to replace gender-specific terms with gender-neutral language, extend the time to fill a council vacancy from 30 to 60 days, eliminate the requirement to read ordinances and resolutions in full, allow the Council to set qualifications for boards, commissions and committees it creates, and make other clarifying updates?',
      yesMeans: 'Amends the city charter to use gender-neutral language, give the council 60 days instead of 30 to fill a vacancy, end full reading of ordinances, and let it set advisory-body qualifications.',
      noMeans: 'Keeps the charter as written, including the 30-day vacancy deadline, the requirement to read ordinances in full, and gender-specific language.',
      funding: {
        asOf: 'Oct. 9, 2026',
        yes: {
          raised: '$10,000',
          topDonors: [
            'Mountain View Professional Firefighters Local 1965 ($7,500)',
            'Lucas Ramirez ($2,500)',
          ],
        },
        note: 'One committee, Mountain View Voters for Measure E and Measure F, supports both measures. It reported no money through Sept. 19, then $10,000 in late contributions on Oct. 9. No committee has reported raising money against it.',
        sources: [
          { label: 'City of Mountain View campaign finance portal (NetFile): Measure E and F committee filings', url: 'https://netfile.com/public/MTV/campaign/measures' },
        ],
      },
      positions: [
        { org: 'Santa Clara County Democratic Party', kind: 'party', position: 'Yes', url: 'https://sccdp.org/index.php/voter-resources/endorsements/2026-endorsements/' },
      ],
      measureType: 'Charter amendment (city measure placed by the City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'No direct tax or spending change. The city’s staff report put the cost of placing the measure on the ballot at about $100,000 (Mountain View Voice).',
      supporters: 'City Council (unanimous vote, June 9, 2026); Santa Clara County Democratic Party; Mountain View Voters for Measure E and Measure F, a committee funded mostly by the Mountain View firefighters’ union. No official ballot-argument signers were found.',
      opponents: 'None found.',
      voterConnection: [
        'The charter is the city’s constitution; it controls how the council fills vacancies and creates advisory bodies.',
        'It changes procedure, not taxes, fees or services.',
      ],
      mechanismBullets: [
        'Vacancies: the council would have 60 days instead of 30 to appoint a replacement or call a special election; staff noted state law allows up to 60 days.',
        'Charter-created bodies, such as the Environmental Planning Commission, Board of Library Trustees and Parks and Recreation Commission, keep their current membership requirements.',
        'The measure text was not available on city or county sites; these details come from news reports.',
      ],
      argumentsFor: [
        'Brings the charter in line with current state law and city practice.',
        'More time to fill vacancies avoids rushed appointments or a poorly timed special election.',
        'Dropping the read-aloud rule saves meeting time; the text is still published.',
        'Flexibility on advisory-body qualifications lets the city adapt without another charter vote.',
      ],
      argumentsAgainst: [
        'A $100,000 election for changes staff call minor.',
        'Council control over who may serve on advisory bodies could be used to narrow participation.',
        'A longer vacancy window leaves a seat empty and delays a public vote.',
        'Bundling several changes keeps voters from approving some and rejecting others.',
      ],
      readingLinks: [
        { label: 'Mountain View Voice: What to know about Measure E, the charter update (Sept. 10)', url: 'https://www.mv-voice.com/news/2026/09/10/voter-guide-what-to-know-about-mountain-views-measure-e-charter-update/', summary: 'Measure Guide: the charter fixes, the longer window to fill council vacancies, and that no argument against was filed.' },
        { label: 'Mountain View Voice: charter update heads to November ballot (June 11, 2026)', url: 'https://www.mv-voice.com/news/2026/06/11/mountain-view-city-charter-update-heads-to-november-ballot/', summary: 'What the measure changes and the council vote.' },
        { label: 'Mountain View Voice: non-controversial charter update (Feb. 12, 2026)', url: 'https://www.mv-voice.com/city-government/2026/02/12/mountain-view-looks-to-place-non-controversial-city-charter-update-on-november-ballot/', summary: 'Early staff proposal and council debate.' },
        { label: 'Local News Matters: Santa Clara County Nov. 3, 2026 ballot', url: 'https://localnewsmatters.org/santa-clara-november-3-2026/', summary: 'Ballot-label summary of the measure.' },
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes', '●', 'Leftward Progressives, the group most supportive of transgender people (about 77% are very comfortable with transgender athletes on teams matching their identity), welcome gender-neutral charter language and see the other changes as low-stakes housekeeping.'],
      ['LL', 'Yes', '●', 'Loyal Liberals trust staff and a unanimous council, and bringing the charter in line with state law and current practice is sound governance.'],
      ['LO', 'Yes', '○', 'Left-Out Left voters see little at stake but are wary of giving the council more say over who serves on advisory bodies, so the lean is weak.'],
      ['OO', 'Yes', '○', 'Order and Opportunity Left voters favor orderly, efficient government, and the cleanup does that, though some are lukewarm on the gender-language change, since 71% say gender is set at birth.'],
      ['TM', '—', '—', 'Tuned-Out Middle voters focus on costs and services, and a procedural charter cleanup changes neither, so this column skips it.'],
      ['PP', 'Yes', '◐', 'Pragmatic and Polite Right voters prefer careful, incremental fixes, with 78% favoring them over risky quick ones, and matching the vacancy window to state law and ending full read-aloud of ordinances is exactly that.'],
      ['UR', 'No', '○', 'Unconventional Right voters favor smaller government and see a $100,000 election for minor edits, plus more council control over advisory bodies, as poor value.'],
      ['FC', 'No', '○', 'Faith First Conservatives overwhelmingly see sex as set at birth (97%) and may object to the gender-neutral rewrite, though the other changes are routine.'],
      ['NA', 'No', '◐', 'No Apologies Right voters, about 98% of whom say gender is determined by sex at birth, reject gender-neutral rewrites as progressive politics and oppose giving a city council more discretion over who may serve.'],
    ]),
    hinges: {
      LP: 'Yes if gender-neutral language and low-stakes housekeeping are worth updating the city’s governing document. No if council control over who may serve on advisory bodies could be used to narrow who gets to participate.',
      LL: 'Yes if bringing the charter in line with state law and city practice, as staff and a unanimous council recommend, is sound governance. No if bundling several unrelated changes into one $100,000 election for minor edits seems a poor way to do it.',
      LO: 'Yes if little is at stake and saving meeting time on read-aloud rules makes sense. No if giving the council more say over who serves on advisory bodies is more discretion than you’d hand it.',
      OO: 'Yes if more time to fill vacancies and shorter meetings make city government run more smoothly. No if a seat left empty longer, or a bundle you can’t vote on piece by piece, bothers you more.',
      TM: 'Yes if a procedural fix with no tax or fee change, beyond the one-time election cost, seems harmless. No if a $100,000 election for changes staff call minor isn’t a good use of city money.',
      PP: 'Yes if routine modernization that raises no taxes and matches state law is a reasonable, careful cleanup. No if a longer vacancy window that leaves a seat empty and delays a public vote outweighs the housekeeping.',
      UR: 'Yes if procedural changes passed unanimously, with a vacancy window state law already allows, seem harmless. No if more council power over who serves on advisory bodies, plus a $100,000 election, is something you won’t back.',
      FC: 'Yes if the procedural fixes outweigh any objection you have to rewriting the charter in gender-neutral language. No if the gender-neutral rewrite is a change you’d rather not make, even bundled with routine updates.',
      NA: 'Yes if you care more about efficient meetings and a vacancy rule that matches state law than about the wording. No if gender-neutral language and more council discretion are changes you oppose on principle.',
    },
    counterArguments: [
      'UR/FC/NA (No ○/◐): But consider Yes, because the changes are procedural, the council vote was unanimous, and the charter’s 30-day vacancy window falls short of what state law allows.',
      'LP/LL (Yes ●): But consider No, because the measure bundles several unrelated changes, and a $100,000 election for minor edits is a fair cost objection.',
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
      'Measure F would let the council raise the hotel and short-term-rental tax (transient occupancy tax) above today’s 10%, up to 15%. The choice is whether to raise more for city services from visitors, leaving the final rate and the spending to the council.',
    ],
    introParagraphs: [
      'The council voted unanimously on June 23, 2026 to place the measure on the ballot after scrapping a planned bond when polling showed 52% support, short of the two-thirds a bond requires (Mountain View Voice). All eight council candidates backed it at the Aug. 27 business forum; no hotel-industry position was found.',
    ],
    measure: {
      explainerUrl: 'https://www.mv-voice.com/election/2026/10/06/measure-f-hotel-tax/',
      question:
        'Shall the Mountain View measure to raise the City’s hotel and short-term rental tax from 10% to up to 15%, generating up to $5,200,000 annually for general City services such as street and sidewalk repair, police, fire and 911 response, affordable housing and new parks, until ended by voters, with independent audits, be adopted?',
      yesMeans: 'Lets the council raise the hotel and short-term-rental tax from 10% to up to 15%, bringing up to $5.2 million a year for general city services until voters end it.',
      noMeans: 'Keeps the hotel and short-term-rental tax at 10%, the rate since 1991, and the city goes without the added revenue.',
      funding: {
        asOf: 'Oct. 9, 2026',
        yes: {
          raised: '$10,000',
          topDonors: [
            'Mountain View Professional Firefighters Local 1965 ($7,500)',
            'Lucas Ramirez ($2,500)',
          ],
        },
        note: 'One committee, Mountain View Voters for Measure E and Measure F, supports both measures. It reported no money through Sept. 19, then $10,000 in late contributions on Oct. 9. No committee has reported raising money against it.',
        sources: [
          { label: 'City of Mountain View campaign finance portal (NetFile): Measure E and F committee filings', url: 'https://netfile.com/public/MTV/campaign/measures' },
        ],
      },
      positions: [
        { org: 'Santa Clara County Democratic Party', kind: 'party', position: 'Yes', url: 'https://sccdp.org/index.php/voter-resources/endorsements/2026-endorsements/' },
      ],
      measureType: 'General tax (transient occupancy tax increase placed by the City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Up to about $5.2 million a year per the ballot label, or about $5.4 million per Assistant City Manager Arn Andrews. Mountain View has 19 hotels with about 1,780 rooms; annual hotel tax revenue rose from about $8 million in 2023–24 to over $11 million (Mountain View Voice). No sunset.',
      supporters: 'City Council (unanimous); Santa Clara County Democratic Party; Mountain View Voters for Measure E and Measure F, a committee funded mostly by the Mountain View firefighters’ union. No official ballot-argument signers were found.',
      opponents: 'None found; reader comments criticizing lack of transparency are not an organized position.',
      voterConnection: [
        'Hotel and short-term-rental guests pay it, not Mountain View residents.',
        'If it passes, staff will propose the actual rate in November or December; the council sets it, up to 15%.',
      ],
      mechanismBullets: [
        'Exempts government employees on official business and stays longer than 30 consecutive days.',
        'A general tax needs a simple majority under Prop 218. The official text was not available on the city or county sites checked; details come from news reports and the ballot summary.',
      ],
      argumentsFor: [
        'Visitors, not residents, pay it.',
        'The 10% rate has not changed since 1991; Andrews said nearly all neighboring cities charge more.',
        'Includes independent audits.',
      ],
      argumentsAgainst: [
        'As a general tax, the money is not legally limited to the listed uses.',
        'Higher rates could make local hotels less competitive or reduce stays.',
        'About $5 million a year is modest against city needs and may lead to other tax proposals.',
      ],
      readingLinks: [
        { label: 'Mountain View Voice: What to know about Measure F, the hotel tax (Oct. 6)', url: 'https://www.mv-voice.com/election/2026/10/06/measure-f-hotel-tax/', summary: 'Measure Guide: the 10% to 15% hotel tax ceiling, the city’s $5.2 million estimate, and that no argument against was filed.' },
        { label: 'Mountain View Voice: city scraps bond plans, opts for hotel tax (June 24, 2026)', url: 'https://www.mv-voice.com/election/2026/06/24/mountain-view-scraps-bond-plans-opts-for-hotel-tax-measure-instead/', summary: 'Rate, revenue, exemptions and why the bond was dropped.' },
        { label: 'Mountain View Voice: bond plans dropped as polls showed support falling (July 24, 2026)', url: 'https://www.mv-voice.com/election/2026/07/24/mountain-view-ditched-bond-plans-as-polls-showed-support-dropping-records-show/', summary: 'Polling that led the council to choose a tax measure.' },
        { label: 'Local News Matters: Santa Clara County Nov. 3, 2026 ballot', url: 'https://localnewsmatters.org/santa-clara-november-3-2026/', summary: 'Ballot-label summary of the measure.' },
      ],
    },
    crossTypology: ct([
      ['LP', 'Yes', '●', 'Leftward Progressives want more money for affordable housing, parks and services, and this tax falls on hotel guests and business travelers rather than residents.'],
      ['LL', 'Yes', '●', 'Loyal Liberals, 80% of whom want to expand government services, back revenue for city services and trust a unanimous council, and the measure includes independent audits.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters like a tax paid by visitors and corporate travel instead of working residents, though a general tax lets the council spend it on anything.'],
      ['OO', 'Yes', '●', 'Order and Opportunity Left voters want police, fire and 911 response, street repair and affordable housing funded without new costs on their households, and visitors pay this tax.'],
      ['TM', 'Yes', '◐', 'Tuned-Out Middle voters are wary of taxes that hit them, but this one falls on hotel and short-term-rental guests while funding services they use.'],
      ['PP', 'Yes', '◐', 'Pragmatic and Polite Right voters prefer modest, targeted steps, and updating a rate unchanged since 1991, paid by visitors, instead of a property-tax bond fits that, though the money is not earmarked.'],
      ['UR', 'Yes / No', '=', 'Unconventional Right voters weigh smaller government against a tax that residents do not pay: if shifting costs to visitors instead of the property-tax bond the city dropped matters most, Yes; if opposing a permanent tax increase with no sunset matters more, No.'],
      ['FC', 'No', '◐', 'Faith First Conservatives, about 75% of whom want government services reduced, oppose new taxes, even when visitors pay, because the revenue has no sunset or earmark.'],
      ['NA', 'No', '●', 'No Apologies Right voters oppose nearly all new taxes and distrust open-ended general-fund revenue with no sunset.'],
    ]),
    hinges: {
      LP: 'Yes if visitors, not residents, paying toward affordable housing, parks and city services fits your values. No if a general tax whose listed uses aren’t legally binding gives too little assurance the money reaches housing and parks.',
      LL: 'Yes if shifting costs to hotel guests, with audits and a unanimous council behind it, is a sensible way to raise revenue. No if a modest $5 million a year that won’t close the infrastructure gap leaves the harder budget questions unanswered.',
      LO: 'Yes if taxing visitors and corporate travel instead of residents fits your sense of who should pay. No if general-fund flexibility lets the council spend the money on things other than the housing and parks listed.',
      OO: 'Yes if funding police, fire, 911 and street repair without taxing residents comes first. No if higher hotel rates could cost local hotel jobs or stays more than the revenue is worth.',
      TM: 'Yes if a tax paid by hotel and short-term-rental guests, not you, is a fair way to fund city services. No if you’d rather the city find money without any tax increase, even one paid by visitors.',
      PP: 'Yes if a rate unchanged since 1991, which nearly all neighboring cities already exceed by the city’s account, is ripe for a measured update. No if leaving the final rate and the spending to the council, with no sunset, is more discretion than you’d grant.',
      UR: 'Yes if residents not paying it, and the city dropping a bond that would have taxed property owners, ease your concern. No if open-ended general-tax revenue with no sunset is something you oppose even when visitors pay.',
      FC: 'Yes if visitors rather than residents paying toward police, fire and 911 response seems fair. No if you oppose new taxes and doubt the city will spend open-ended revenue well.',
      NA: 'Yes if a visitor-paid tax replacing a planned property-tax bond is the better of two options. No if a tax increase with no sunset and spending not locked to the listed purposes is one you won’t back.',
    },
    counterArguments: [
      'FC/NA (No ◐/●): But consider Yes, because residents do not pay it, the rate has not moved since 1991, and the city dropped a bond that would have taxed property owners.',
      'LP/LL/OO (Yes ●): But consider No, because as a general tax the listed uses are not legally binding, and a modest $5 million a year will not close the city’s infrastructure gap.',
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
      'Measure S would add term limits for El Camino Healthcare District directors, who have none today; state law sets none either. The district covers Mountain View, Los Altos, Los Altos Hills, most of Sunnyvale, and parts of Cupertino, Santa Clara and Palo Alto, and is the sole member of the El Camino Hospital nonprofit.',
    ],
    introParagraphs: [
      'The board decided in March 2026 to place term limits on the ballot and in May weighed four versions of the bylaw. The packet’s ballot question reads “four [consecutive] four-year terms”; which version the board finally adopted was not in the materials found.',
      'In draft minutes, Dr. Peter Fung said the proposal would not affect current board members.',
    ],
    measure: {
      question:
        'Shall the measure amending the Bylaws of the El Camino Healthcare District to limit District Directors to four [consecutive] four-year terms be adopted?',
      yesMeans: 'Limits El Camino Healthcare District directors to four four-year terms, counting only terms that begin on or after Dec. 1, 2026, so no one reaches the cap before 2042.',
      noMeans: 'Keeps the district with no term limits, so directors can run for re-election indefinitely.',
      funding: {
        asOf: 'Oct. 13, 2026',
        note: 'No committee has reported raising money for or against it.',
        sources: [
          { label: 'Santa Clara County campaign finance portal (NetFile): measure committee filings', url: 'https://netfile.com/public/SCC/campaign/measures' },
        ],
      },
      positions: [],
      measureType: 'District bylaw amendment (Gov. Code § 53077 term-limits proposal placed by the district board)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'No tax change. The district pays the county for the election costs; Chair Zoglin cited the cost of the ballot measure as a concern at the March 10, 2026 meeting, and no cost figure was found.',
      supporters: 'El Camino Healthcare District board: Director Julia Miller presented the proposal and the board directed staff in March 2026 to prepare it. No official ballot-argument signers were found.',
      opponents: 'Chair John Zoglin said in March 2026 he did not support moving forward, citing cost and value (draft minutes). No organized opposition found.',
      voterConnection: [
        'You elect the directors who oversee tax money and the El Camino Hospital nonprofit; the limit would force turnover after 16 years.',
        'Only terms beginning on or after Dec. 1, 2026 count, so no director could reach the cap before 2042.',
      ],
      mechanismBullets: [
        'Amends Article IV, Section 2 of the district bylaws; prior service, full or partial, does not count.',
        'The versions the board reviewed differed on whether the limit is lifetime or consecutive (with a two- or four-year break to return) and whether partial terms count; where they do, serving more than two years of a term counts as a full term.',
        'County Counsel prepares the impartial analysis; primary and rebuttal arguments may be filed under the Elections Code.',
      ],
      argumentsFor: [
        'Limits entrenchment on a board with no term limits; this year both seats are uncontested (Directors Peter Fung and George Ting).',
        'Sixteen years leaves ample time for expertise and continuity.',
        'Not counting past service makes it a clean start rather than a retroactive ban.',
        'Forces periodic renewal of a board overseeing a large hospital system.',
      ],
      argumentsAgainst: [
        'Removes experienced directors regardless of performance and cuts institutional knowledge.',
        'Voters can already replace directors every four years.',
        'Chair Zoglin questioned whether the measure is worth the cost of an election at this time.',
      ],
      readingLinks: [
        { label: 'Los Altos Town Crier: El Camino Healthcare District ballot measure seeks term limits', url: 'https://www.losaltosonline.com/elections/el-camino-healthcare-district-ballot-measure-seeks-term-limits-on-district-directors/article_d0b494bd-302a-455d-8353-2018414502d5.html', summary: 'Majority vote threshold, four four-year terms, and district boundaries.' },
        { label: 'ECHD board packet, May 19, 2026 (term-limits memo and draft Resolution 2026-06)', url: 'https://www.elcaminohealthcaredistrict.org/sites/default/files/2026-05/packet_dbod2_051926.pdf', summary: 'Four bylaw options, ballot question text and the March 10 draft minutes.' },
        { label: 'Local News Matters: Santa Clara County Nov. 3, 2026 ballot', url: 'https://localnewsmatters.org/santa-clara-november-3-2026/', summary: 'Ballot-label summary of the measure.' },
        { label: 'Santa Clara County Registrar of Voters: El Camino Healthcare District', url: 'https://vote.santaclaracounty.gov/el-camino-healthcare-district', summary: 'County page for the district’s 2026 contests.' },
        { label: 'Mountain View Voice: What to know about El Camino Healthcare’s Measure S (Oct 8)', url: 'https://www.mv-voice.com/election/2026/10/08/el-camino-healthcare-measure-s-term-limits/', summary: 'Explains the four-term cap, which terms count, the board’s 3-2 vote, and the case made for and against it.' },
      ],
      explainerUrl: 'https://www.mv-voice.com/election/2026/10/08/el-camino-healthcare-measure-s-term-limits/',
    },
    crossTypology: ct([
      ['LP', 'Yes', '◐', 'Leftward Progressives want public boards to turn over and answer to voters, though a 16-year cap that no one can reach before 2042 is a modest reform.'],
      ['LL', 'No', '○', 'Loyal Liberals, 92% of whom say experts make better policy decisions than others, value expertise and institutional knowledge on a board overseeing a major hospital system and note voters can already replace directors every four years.'],
      ['LO', 'Yes', '●', 'Left-Out Left voters think too few officials serve the public, with 75% saying few or none ran to serve it, and want limits on long-serving insiders, especially on a board where both seats are uncontested this year.'],
      ['OO', 'Yes', '○', 'Order and Opportunity Left voters accept a modest check on long-serving officials, with a weak lean because the change is distant and low-stakes.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters distrust officials in agencies they rarely follow and favor a simple limit, though it costs them nothing either way.'],
      ['PP', 'Yes / No', '=', 'Pragmatic and Polite Right voters value both experience and cautious checks on power: if a generous 16-year cap that counts only future terms looks like a sensible incremental check, Yes; if keeping experienced directors and their institutional knowledge on a hospital board matters more, No.'],
      ['UR', 'Yes', '◐', 'Unconventional Right voters are skeptical of the establishment and favor term limits as a check on entrenched officials.'],
      ['FC', 'Yes', '◐', 'Faith First Conservatives favor term limits as a check on entrenched institutions and long-tenured public boards.'],
      ['NA', 'Yes', '●', 'No Apologies Right voters distrust entrenched insiders and institutional authority and strongly favor term limits.'],
    ]),
    hinges: {
      LP: 'Yes if forcing turnover on a public board that oversees a large hospital system matters, even with a generous 16-year cap. No if a limit that no director could reach before 2042 isn’t worth the cost of an election.',
      LL: 'Yes if both seats going uncontested this year shows voters have had little practical choice, so a limit adds accountability. No if institutional knowledge on a hospital board matters more and voters can already replace directors every four years.',
      LO: 'Yes if limits on long-serving insiders are a needed reform on a board that has had none. No if a cap that exempts past service and takes effect no sooner than 2042 does too little to matter.',
      OO: 'Yes if regular turnover on a board that oversees your local hospital seems healthy. No if experienced directors on a health board shouldn’t be removed regardless of how well they perform.',
      TM: 'Yes if a simple limit on officeholders in an agency you rarely follow seems a sensible safeguard. No if voters can already replace directors every four years, so a limit adds little.',
      PP: 'Yes if a modest, forward-looking limit is a careful check on long tenure. No if losing experienced directors and their institutional knowledge outweighs that check on a hospital board.',
      UR: 'Yes if any check on entrenched insiders is worth having, even one that starts counting only now. No if a limit that no director could hit before 2042, paid for with a district election, looks mostly symbolic.',
      FC: 'Yes if term limits are a check on entrenched institutions you’d want on this board. No if you doubt it’s worth the cost of an election now, a concern Chair Zoglin raised.',
      NA: 'Yes if constraining long-tenured public boards is a principle you’d back, even with a 16-year cap. No if a cap that ignores past service, with no one reaching it before 2042, isn’t worth the election cost.',
    },
    counterArguments: [
      'LO/NA (Yes ●): But consider No, because the limit does not count past service, so no director could hit the cap before 2042, and the election itself costs the district money.',
      'LL (No ○): But consider Yes, because the district has no limit now and both seats up this year are uncontested, so voters have had little practical choice.',
    ],
  },
];
