import type {
  Candidate,
  CandidateQualification,
  CrossTypologyRow,
  ExperienceLevel,
  QualificationCriterion,
  Race,
} from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * City of Burbank and Burbank Unified School District contests (ZIP 91501), Nov 3, 2026.
 * Contest list and ballot designations from the LA County Registrar-Recorder candidate-statement feed.
 * Research current as of Oct 8, 2026. burbankca.gov blocks automated page fetching, so city documents are cited by URL
 * and details come from search excerpts, the Burbank Leader, myBurbank, HeySoCal, endorser pages and campaign sites.
 * Trustee Area 4 (George Saikali, unopposed) is omitted: it is not in the county contest feed and myBurbank reports
 * he "will be appointed," so no contest is expected on the ballot.
 */

const CITY_CLERK_URL = 'https://www.burbankca.gov/web/city-clerks-office/november-3-2026-general-municipal-election';
const VOTES_URL = 'https://burbankvotes.com/';
const LA_STATEMENTS_URL = 'https://apps.lavote.gov/candidate-statements/';
const HEYSOCAL_URL = 'https://heysocal.com/2026/09/24/burbank-council-candidates-clash-on-housing-surveillance/';
const LEADER_FORUM_URL =
  'https://outlooknewspapers.com/burbankleader/candidates-share-ideas-at-league-forum/article_09ac85dc-534b-43ab-a769-db464d1ea7ed.html';

const COUNCIL_CRITERIA: QualificationCriterion[] = [
  { id: 'fiscal', label: 'City budget and fiscal oversight', detail: 'The Council adopts the city budget, including a general fund deficit, and puts taxes before voters.' },
  { id: 'land', label: 'Housing, land use and planning', detail: 'The Council decides zoning, specific plans and how to respond to state housing law such as SB 79.' },
  { id: 'services', label: 'Public safety, utilities and city services', detail: 'Burbank runs its own police, fire, water and power, and parks departments under the Council and city manager.' },
  { id: 'governance', label: 'Public-board governance', detail: 'Council members act as a body under open-meeting and ethics rules and oversee a city manager and city attorney.' },
  { id: 'community', label: 'Community engagement', detail: 'Council members hear from residents, businesses and neighborhood groups and explain their votes.' },
];

const SCHOOL_CRITERIA: QualificationCriterion[] = [
  { id: 'education', label: 'Education knowledge and classroom experience', detail: 'Trustees adopt policy, hire and evaluate the superintendent, and rely on firsthand knowledge of schools.' },
  { id: 'budget', label: 'Budget, finance and oversight', detail: 'The district faces structural deficits and a fiscal-oversight designation from the county office of education.' },
  { id: 'governance', label: 'Public-board governance and policy', detail: 'Trustees act only as a board, under open-meeting and ethics rules, and work through the superintendent.' },
  { id: 'community', label: 'Family and community engagement', detail: 'Trustees hear from parents, staff and neighbors and explain board decisions to them.' },
];

type Ev = Record<string, ['met' | 'partial' | 'not-met' | 'unknown', string]>;

function qual(level: ExperienceLevel, summary: string, criteria: QualificationCriterion[], ev: Ev): CandidateQualification {
  return {
    level,
    legal: 'meets',
    summary,
    criteria: criteria.map(({ id }) => {
      const [assessment, evidence] = ev[id] ?? ['unknown', 'No documented role found.'];
      return { criterionId: id, assessment, evidence };
    }),
  };
}

const cq = (level: ExperienceLevel, summary: string, ev: Ev) => qual(level, summary, COUNCIL_CRITERIA, ev);
const sq = (level: ExperienceLevel, summary: string, ev: Ev) => qual(level, summary, SCHOOL_CRITERIA, ev);

const MONEY_NOTE =
  'Campaign finance filings are posted on the City Clerk’s candidate page; no fundraising totals appeared in the local news coverage reviewed (as of Oct 8, 2026).';
const SCHOOL_MONEY =
  'No fundraising totals appeared in the coverage reviewed (as of Oct 8, 2026); filings are posted by the county.';

const COUNCIL_LEGAL =
  'U.S. citizen, resident and registered voter of the City of Burbank (Council members are elected at large in 2026); see the City Clerk’s nomination requirements.';
const SCHOOL_LEGAL =
  'U.S. citizen, 18 or older, resident and registered voter of the district and of the trustee area, not otherwise disqualified (Education Code § 35107; Elections Code § 201).';

const NO_POS = '? No public position found';

const council = (c: Omit<Candidate, 'party' | 'money'> & { money?: string }): Candidate => ({ party: 'NP', money: MONEY_NOTE, ...c });
const school = (c: Omit<Candidate, 'party' | 'money'>): Candidate => ({ party: 'NP', money: SCHOOL_MONEY, ...c });

const GROUPS = [
  ['LP', 'Leftward Progressives'],
  ['LL', 'Loyal Liberals'],
  ['LO', 'Left-Out Left voters'],
  ['OO', 'Order and Opportunity Left voters'],
  ['TM', 'Tuned-Out Middle voters'],
  ['PP', 'Pragmatic and Polite Right voters'],
  ['UR', 'Unconventional Right voters'],
  ['FC', 'Faith First Conservatives'],
  ['NA', 'No Apologies Right voters'],
] as const;
const unopposedRows = (name: string): CrossTypologyRow[] =>
  ct(GROUPS.map(([code, group]) => [code, name, '●', `${group} have one choice: ${name} is the unopposed incumbent in a nonpartisan administrative office.`]));

export const RACES_BURBANK: Race[] = [
  {
    id: 'burbank-city-council',
    categoryId: 'city',
    title: 'Burbank City Council (vote for up to 3)',
    tldrLabel: 'Burbank City Council',
    voteFor: 3,
    seatContext: 'Three at-large seats; two incumbents running',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Council sets Burbank’s budget and taxes, decides zoning and housing plans, oversees the city-run police, fire, water and power, and parks departments, and appoints the city manager and city attorney. It also decides how the city handles disputes such as the Olive Avenue bus-lane fight now in court (Burbank Leader, Sept. 2026).',
      'Three of five seats are on the ballot and voters may choose up to three of 13 candidates, so one election can reshape the Council majority. Terms run to December 2030. Councilmember Zizette Mullins is not on the ballot; Nikki Perez and Tamala Takahashi are seeking re-election.',
    ],
    introParagraphs: [
      'At a League of Women Voters forum on Sept. 22, 2026, candidates split on rent control and housing supply, license plate readers, the Olive Avenue bus lane and the city’s general fund deficit (Burbank Leader; HeySoCal). The race is nonpartisan, but the county Democratic Party endorsed Perez and Takahashi, and several progressive groups back Van Gorder and Southerland.',
      'Public information on several candidates is thin: the county voter guide lists only a ballot designation and a few stated priorities for most of them, so cards say so rather than guess.',
    ],
    readingLinks: [
      { label: 'City Clerk: Nov 3, 2026 General Municipal Election', url: CITY_CLERK_URL, summary: 'Offices, measures, candidate statements and campaign disclosures.' },
      { label: 'Burbank Leader: candidates share ideas at League forum', url: LEADER_FORUM_URL, summary: 'Coverage of the Sept. 22 forum.' },
      { label: 'HeySoCal: candidates clash on housing, surveillance', url: HEYSOCAL_URL, summary: 'Positions on rent control, license plate readers, bus lanes and Measure C.' },
      { label: 'Burbank Votes voter guide', url: VOTES_URL, summary: 'Ballot designations and stated priorities for every candidate.' },
    ],
    legalRequirements: COUNCIL_LEGAL,
    qualificationCriteria: COUNCIL_CRITERIA,
    candidates: [
      council({
        id: 'jackie-waltman',
        name: 'Jackie Waltman',
        role: 'Retired',
        qualification: cq('some', 'Waltman has served on two city commissions. No elected office or budget role was found.', {
          governance: ['partial', 'Member of the Civil Service Commission; formerly on the Burbank Tenant-Landlord Commission.'],
          services: ['partial', 'Described in local reporting as a retired law enforcement official; the ballot designation is “Retired.”'],
        }),
        bio: ['Waltman’s ballot designation is “Retired.” Local reporting describes a law enforcement career and service on the Civil Service Commission and the former Tenant-Landlord Commission. Her stated priorities are public safety, fiscal responsibility, infrastructure, local business and quality of life (Burbank Votes).'],
        scorecard: [
          { topic: 'Budget & deficit', position: '✓ Lists fiscal responsibility as a priority; no specific plan found' },
          { topic: 'Housing & rent', position: NO_POS },
          { topic: 'Public safety', position: '✓ Lists public safety as a priority; no specific proposal found' },
          { topic: 'Transit & Olive Avenue bus lane', position: NO_POS },
          { topic: 'Infrastructure', position: '✓ Lists infrastructure as a priority' },
        ],
        endorsements: 'None found.',
      }),
      council({
        id: 'samantha-wick',
        name: 'Samantha Wick',
        role: 'Nonprofit Grant Writer',
        qualification: cq('substantial', 'Wick chairs the Planning Commission and earlier served four years on the Heritage Commission, giving her direct land-use experience. She has not held elected office.', {
          land: ['met', 'Planning Commission member since Oct 2022 and current chair; holds a bachelor’s degree in urban planning (campaign letter; city board roster).'],
          governance: ['met', 'Four years on the Heritage Commission, two as chair, plus Planning Commission chair.'],
          fiscal: ['partial', 'Works as a nonprofit grant writer; no city budget role found.'],
          community: ['partial', 'Commission service involves public hearings; no other community role documented.'],
        }),
        bio: ['Wick is a nonprofit grant writer and chair of the Burbank Planning Commission, where she has served since 2022. Earlier she spent four years on the Heritage Commission. Her stated priorities are public safety, housing, the local economy, families and government transparency (Burbank Votes).', 'At the Sept. 22 forum she backed mixed-flow traffic rather than dedicated bus lanes on Olive Avenue, citing Public Works concerns about trash collection (HeySoCal).'],
        scorecard: [
          { topic: 'Budget & deficit', position: NO_POS },
          { topic: 'Housing & rent', position: '✓ Lists housing as a priority; chaired a unanimous 4-0 planning vote on a West Linden infill project (Jan. 2026)' },
          { topic: 'Public safety', position: '✓ Lists public safety as a priority' },
          { topic: 'Transit & Olive Avenue bus lane', position: '✗ Opposes a dedicated bus lane; favors mixed flow' },
          { topic: 'Transparency', position: '✓ Lists government transparency as a priority' },
        ],
        endorsements: 'None found.',
      }),
      council({
        id: 'eddy-polon',
        name: 'Eddy Polon',
        role: 'Community Advocate/Screenwriter',
        qualification: cq('some', 'Polon serves on the Transportation Commission and ran a local business for many years. No budget or elected role was found.', {
          governance: ['partial', 'Member of the Burbank Transportation Commission (local reporting).'],
          fiscal: ['partial', 'Long-time operator of a local bakery per local reporting; no public budget role.'],
          services: ['partial', 'Transportation Commission work bears on streets and transit.'],
        }),
        bio: ['Polon’s ballot designation is Community Advocate/Screenwriter. Local reporting describes service on the Transportation Commission and years running a local bakery. His stated priorities are housing, public safety, the environment, the local economy and transportation (Burbank Votes).', 'On the Olive Avenue bus lane he proposed part-time dedicated lanes using parking lanes at rush hour, noting that three of the four cities on the route reached a compromise (HeySoCal).'],
        scorecard: [
          { topic: 'Budget & deficit', position: NO_POS },
          { topic: 'Housing & rent', position: '✓ Lists housing as a priority; no specific proposal found' },
          { topic: 'Public safety', position: '✓ Lists public safety as a priority' },
          { topic: 'Transit & Olive Avenue bus lane', position: '~ Favors part-time dedicated lanes as a compromise' },
          { topic: 'Environment', position: '✓ Lists the environment as a priority' },
        ],
        endorsements: 'Los Angeles League of Conservation Voters (listed on its 2026 Burbank endorsements).',
      }),
      council({
        id: 'jt-parr',
        name: 'JT Parr',
        role: 'Comedian',
        qualification: cq('limited', 'Parr is a comedian with no documented city board, budget or public-agency role.', {
          community: ['partial', 'Took part in the public candidate forum; no community post found.'],
        }),
        bio: ['Parr’s ballot designation is Comedian, and he has appeared on a Netflix show (HeySoCal). His stated priorities are housing, public transportation and public spaces. At the forum he said he first favored strict rent control but came to see housing costs as mainly a supply problem and called for cutting red tape and upzoning.'],
        scorecard: [
          { topic: 'Budget & deficit', position: NO_POS },
          { topic: 'Housing & rent', position: '✓ Supply-side: cut red tape and upzone; earlier favored strict rent control' },
          { topic: 'Public safety', position: NO_POS },
          { topic: 'Transit & Olive Avenue bus lane', position: '✓ Lists public transportation as a priority' },
          { topic: 'Public spaces', position: '✓ Lists public spaces as a priority' },
        ],
        endorsements: 'None found.',
      }),
      council({
        id: 'nikki-perez',
        name: 'Nikki Perez',
        role: 'Burbank City Councilmember',
        qualification: cq('extensive', 'Perez is a sitting Councilmember and a former mayor, so she has direct experience of the job.', {
          fiscal: ['met', 'Votes on the city budget as a sitting Councilmember.'],
          land: ['met', 'Council decisions on housing and zoning; proposed a 4% rent cap at her second meeting (HeySoCal).'],
          services: ['met', 'The Council oversees police, fire, utilities and parks.'],
          governance: ['met', 'Served a term as mayor (Burbank Leader, “Perez Looks Back on Special Year as Burbank Mayor”).'],
          community: ['met', 'Priorities include renter protections, families and childcare.'],
        }),
        recordVsChange: 'Perez has pushed tenant protections and rent limits on the Council and served a year as mayor. Keeping her preserves Council experience and a pro-tenant vote; the case for change is a Council less focused on rent policy or with a different budget approach.',
        bio: ['Perez is a Burbank Councilmember seeking re-election. At the forum she said the city’s renters, about 60% of residents, “need relief,” and she proposed a 4% rent cap (HeySoCal). Her stated priorities are affordability, renter protections, families and childcare, public safety and community services.', 'On the Olive Avenue bus lane she declined to comment, citing active litigation.'],
        scorecard: [
          { topic: 'Budget & deficit', position: '? No specific deficit plan found; affordability is her top listed priority' },
          { topic: 'Housing & rent', position: '✓✓ Supports rent control and tenant protections; proposed a 4% rent cap' },
          { topic: 'Public safety', position: '✓ Lists public safety as a priority' },
          { topic: 'Transit & Olive Avenue bus lane', position: '? Declined to comment because of active litigation' },
          { topic: 'Families & childcare', position: '✓ Lists as a priority' },
        ],
        endorsements:
          'Los Angeles County Democratic Party; Stonewall Democratic Club; Los Angeles League of Conservation Voters; UNITE HERE Local 11; IATSE Local 80; California Working Families Party; Housing Action Coalition; Westside Young Democrats; Rep. Laura Friedman, Sen. Ben Allen, Asm. Rick Chavez Zbur, Supervisor Lindsey Horvath, Councilmember Konstantine Anthony (Progressive Voters Guide and county party list, as of Oct 8, 2026).',
      }),
      council({
        id: 'jonathan-ontiveros',
        name: 'Jonathan Ontiveros',
        role: 'Civil Engineering Professional',
        qualification: cq('limited', 'Ontiveros is a civil engineer with a union leadership role. No city board or elected service was found.', {
          land: ['partial', 'Civil engineering background; cited four specific plans (some not updated since the 1990s) that could yield nearly 16,000 housing units (HeySoCal).'],
          fiscal: ['partial', 'Said at the forum that reducing the deficit is important; no budget role.'],
        }),
        bio: ['Ontiveros’s ballot designation is Civil Engineering Professional; local reporting also describes him as a labor union director. His stated priorities are housing, infrastructure, the local economy and public safety (Burbank Votes).', 'At the forum he pointed to four specific plans, some not updated since the 1990s, that could produce close to 16,000 housing units (HeySoCal).'],
        scorecard: [
          { topic: 'Budget & deficit', position: '✓ Said reducing the deficit matters; no specific plan found' },
          { topic: 'Housing & rent', position: '✓ Update old specific plans to unlock about 16,000 units' },
          { topic: 'Public safety', position: '✓ Lists public safety as a priority' },
          { topic: 'Transit & Olive Avenue bus lane', position: NO_POS },
          { topic: 'Infrastructure', position: '✓ Lists infrastructure as a priority' },
        ],
        endorsements: 'None found.',
      }),
      council({
        id: 'david-donahue',
        name: 'David Phillip Donahue',
        role: 'Small Business Owner',
        qualification: cq('limited', 'Donahue is a small business owner active in the Realtors association and Chamber of Commerce. He has not served on a city board or held elected office.', {
          fiscal: ['partial', 'Small business owner; urged careful management of general fund discretionary spending (HeySoCal).'],
          land: ['partial', 'Former president of the Burbank Fair Housing Political Action Committee; has spoken at Planning Commission meetings.'],
          community: ['partial', 'Serves on the Burbank Association of Realtors legislative committee and the Chamber of Commerce.'],
        }),
        bio: ['Donahue is a small business owner and former president of the Burbank Fair Housing Political Action Committee. His stated priorities are local business, the local economy, transportation, housing and infrastructure (Burbank Votes).', 'At the forum he urged a Yes vote on Measure C, stressed careful management of general fund discretionary spending, and defended the city’s Flock license plate readers as cost-effective while saying alternatives should be considered if hacking problems persist (HeySoCal).'],
        scorecard: [
          { topic: 'Budget & deficit', position: '✓✓ Careful general fund management; supports Measure C hotel tax' },
          { topic: 'Housing & rent', position: '✓ Lists housing as a priority; Fair Housing PAC background' },
          { topic: 'Public safety & surveillance', position: '✓ Defends Flock plate readers as cost-effective, open to alternatives' },
          { topic: 'Transit & Olive Avenue bus lane', position: NO_POS },
          { topic: 'Local business', position: '✓ Lists local business as a priority' },
        ],
        endorsements: 'None found.',
      }),
      council({
        id: 'nolan-southerland',
        name: 'Nolan Southerland',
        role: 'Film Editor',
        qualification: cq('limited', 'Southerland is a film editor and community organizer with no documented city board or elected service.', {
          community: ['partial', 'Described as a community organizer (HeySoCal).'],
          services: ['partial', 'Has a worked-out position on license plate readers (HeySoCal).'],
        }),
        bio: ['Southerland is a film editor and community organizer. His stated priorities are housing, tenant protections, public transportation and youth programs (Burbank Votes). At the forum he called for banning all automated license plate readers, citing hacking, auditing failures and data sharing with other agencies (HeySoCal). One news report spells his name “Sutherland”; the ballot spelling is Southerland.'],
        scorecard: [
          { topic: 'Budget & deficit', position: NO_POS },
          { topic: 'Housing & rent', position: '✓✓ Lists housing and tenant protections as priorities' },
          { topic: 'Public safety & surveillance', position: '✗ Wants all license plate readers banned' },
          { topic: 'Transit & Olive Avenue bus lane', position: '✓ Lists public transportation as a priority' },
          { topic: 'Youth programs', position: '✓ Lists as a priority' },
        ],
        endorsements:
          'DSA-LA; Los Angeles County Federation of Labor; UNITE HERE Local 11; California Working Families Party; Streets for All; Los Angeles League of Conservation Voters; California Democratic Renters Council; LA City Controller Kenneth Mejia; Councilmember Konstantine Anthony (Progressive Voters Guide, as of Oct 8, 2026).',
      }),
      council({
        id: 'robbie-brody',
        name: 'Robbie Brody',
        role: 'Administrative Law Judge',
        qualification: cq('substantial', 'Brody has chaired the Water & Power Board and is vice chair of the Parks & Recreation Board, giving him city-board experience with utilities and parks.', {
          services: ['met', 'Former chair of the Burbank Water & Power Board; current vice chair of the Parks & Recreation Board.'],
          governance: ['met', 'Chaired the Water & Power Board and the Art in Public Places Committee; works as an administrative law judge.'],
          fiscal: ['partial', 'Utility board oversight; no direct city budget role found.'],
        }),
        bio: ['Brody is an administrative law judge. Local reporting says he is vice chair of the Burbank Parks & Recreation Board and previously chaired the Water & Power Board and the Art in Public Places Committee. His stated priorities are parks and recreation, city services, local business and neighborhood character (Burbank Votes).', 'At the forum he opposed the license plate reader system, calling it “a warrantless search of people who have not done anything wrong” (HeySoCal).'],
        scorecard: [
          { topic: 'Budget & deficit', position: NO_POS },
          { topic: 'Housing & rent', position: '? Lists neighborhood character as a priority; no specific housing position found' },
          { topic: 'Public safety & surveillance', position: '✗ Opposes the license plate reader system' },
          { topic: 'Transit & Olive Avenue bus lane', position: NO_POS },
          { topic: 'Parks & city services', position: '✓ Lists parks and recreation and city services as priorities' },
        ],
        endorsements: 'None found.',
      }),
      council({
        id: 'chris-yoosefi',
        name: 'Chris Yoosefi',
        role: 'Small Business Owner',
        qualification: cq('limited', 'Yoosefi is a small business owner and Navy veteran active in the American Legion. No city board or elected service was found.', {
          fiscal: ['partial', 'Small business owner; no public budget role.'],
          community: ['met', 'Active with the Burbank American Legion; U.S. Navy hospital corpsman (local reporting).'],
        }),
        bio: ['Yoosefi is a small business owner and U.S. Navy veteran who served as a hospital corpsman and is active with the Burbank American Legion. His stated priorities are the local economy, small business, housing, schools, public safety and veterans (Burbank Votes).', 'At the forum he argued against a dedicated bus lane on Olive Avenue, saying few people ride the current bus (Burbank Leader).'],
        scorecard: [
          { topic: 'Budget & deficit', position: NO_POS },
          { topic: 'Housing & rent', position: '✓ Lists housing as a priority; no specific proposal found' },
          { topic: 'Public safety', position: '✓ Lists public safety and veterans as priorities' },
          { topic: 'Transit & Olive Avenue bus lane', position: '✗ Opposes a dedicated bus lane' },
          { topic: 'Small business', position: '✓✓ Lists the local economy and small business as priorities' },
        ],
        endorsements: 'None found.',
      }),
      council({
        id: 'mike-van-gorder',
        name: 'Mike Van Gorder',
        role: 'Housing Policy Analyst',
        qualification: cq('some', 'Van Gorder is a state housing policy specialist who joined the Planning Commission in April 2025. He has not served on the Council.', {
          land: ['met', 'Planning Commissioner since Apr 2025; describes himself as a senior housing policy specialist for the State of California.'],
          governance: ['partial', 'About 18 months on the Planning Commission.'],
          community: ['met', 'Founder of the Glendale Tenants Union; tenants’-rights organizer.'],
        }),
        bio: ['Van Gorder is a housing policy analyst who describes himself as a senior housing policy specialist for the State of California and a tenants’-rights organizer. He has served on the Burbank Planning Commission since April 2025 and founded the Glendale Tenants Union. His stated priorities are housing, tenant protections, the environment, education and labor (Burbank Votes).'],
        scorecard: [
          { topic: 'Budget & deficit', position: NO_POS },
          { topic: 'Housing & rent', position: '✓✓ Tenant protections and housing policy are his core priorities' },
          { topic: 'Public safety', position: NO_POS },
          { topic: 'Transit & Olive Avenue bus lane', position: NO_POS },
          { topic: 'Labor & environment', position: '✓ Lists labor and the environment as priorities' },
        ],
        endorsements:
          'California Working Families Party; LA DSA; Burbank Teachers Association; East Area Progressive Democrats; Housing Action Coalition; UNITE HERE Local 11; Asm. Alex Lee; Councilmember Konstantine Anthony; Planning Commissioner Jason Bennett; school board member Dr. Armond Aghakhanian (Progressive Voters Guide, as of Oct 8, 2026).',
      }),
      council({
        id: 'hovanes-tonoyan',
        name: 'Hovanes Tonoyan',
        role: 'Cybersecurity Project Manager',
        qualification: cq('limited', 'Tonoyan is a cybersecurity professional and Burbank native with no documented city board or elected service.', {
          community: ['partial', 'Has said he wants to increase civic engagement (local reporting).'],
        }),
        bio: ['Tonoyan is a cybersecurity project manager and Burbank native with a political science degree from UC Berkeley. His stated priorities are public safety, economic development, innovation and community (Burbank Votes). No forum quotes from him appeared in the coverage reviewed.'],
        scorecard: [
          { topic: 'Budget & deficit', position: NO_POS },
          { topic: 'Housing & rent', position: NO_POS },
          { topic: 'Public safety', position: '✓ Lists public safety as a priority' },
          { topic: 'Transit & Olive Avenue bus lane', position: NO_POS },
          { topic: 'Economic development', position: '✓ Lists economic development and innovation as priorities' },
        ],
        endorsements: 'None found.',
      }),
      council({
        id: 'tamala-takahashi',
        name: 'Tamala Takahashi',
        role: 'Incumbent',
        campaignUrl: 'https://tamala4burbank.com/',
        qualification: cq('extensive', 'Takahashi is a sitting Councilmember and the current mayor, so she has direct experience of the job.', {
          fiscal: ['met', 'Votes on the city budget as a sitting Councilmember.'],
          services: ['met', 'The Council oversees police, fire, utilities and parks; serves on the National League of Cities first-tier suburbs council (city release).'],
          governance: ['met', 'Serving as mayor (Burbank Leader, “Takahashi Kicks Off Term as Burbank Mayor”).'],
          land: ['met', 'Council decisions on housing and zoning.'],
          community: ['met', 'Priorities include arts and culture and small business.'],
        }),
        recordVsChange: 'Takahashi is the sitting mayor. In a 2-2 Council tie she voted against censuring Councilmember Konstantine Anthony while sharply criticizing his conduct (Burbank Leader; myBurbank). Re-electing her keeps continuity; the case for change is a Council that moves faster on housing or fiscal changes.',
        bio: ['Takahashi is the incumbent mayor of Burbank seeking another term. Her stated priorities are the environment, mental health, transportation, arts and culture, and small business (Burbank Votes).'],
        scorecard: [
          { topic: 'Budget & deficit', position: '? No specific deficit plan found' },
          { topic: 'Housing & rent', position: '? Housing is not among her listed priorities; no specific position found' },
          { topic: 'Public safety & mental health', position: '✓ Lists mental health as a priority' },
          { topic: 'Transit & Olive Avenue bus lane', position: '? Lists transportation as a priority; no position on the lane found' },
          { topic: 'Environment & arts', position: '✓ Lists the environment and arts and culture as priorities' },
        ],
        endorsements:
          'Los Angeles County Democratic Party; Stonewall Democratic Club (April 2026); Los Angeles League of Conservation Voters; her campaign site also lists the Burbank Democratic Club and Southern California Armenian Democrats (self-reported, undated).',
      }),
    ],
    crossTypology: ct([
      ['LP', 'Van Gorder, Southerland, Perez', '●', 'Leftward Progressives want strong tenant protections and an end to surveillance overreach, and Mike Van Gorder, Nolan Southerland and Nikki Perez have the most explicit renter platforms plus DSA, labor and Working Families backing.'],
      ['LL', 'Perez, Takahashi, Van Gorder', '◐', 'Loyal Liberals favor Democratic-endorsed, experienced officeholders and expert policy, so they back incumbents Nikki Perez and Tamala Takahashi plus Mike Van Gorder, a state housing policy specialist endorsed by the teachers’ association.'],
      ['LO', 'Southerland, Van Gorder, Perez', '◐', 'Left-Out Left voters want practical cost relief for a city where about 60% of residents rent, and lean to Nolan Southerland and Mike Van Gorder as tenant-organizer outsiders plus Nikki Perez and her proposed 4% rent cap.', 'Left-Out Left voters who weigh experience could swap in Takahashi, the sitting mayor who votes on the budget, for Southerland, a first-time film editor and organizer; they keep a renter majority with Van Gorder and Perez but lose a DSA- and labor-backed outsider.'],
      ['OO', 'Perez, Wick, Waltman', '○', 'Order and Opportunity Left voters want affordability alongside public safety, pairing Nikki Perez’s renter relief with Samantha Wick’s planning experience and Jackie Waltman’s law-enforcement background, a weak lean given thin records.', 'Order and Opportunity Left voters who put experience first could pick Takahashi, the sitting mayor, over Waltman, whose city service is two commissions; they gain budget and Council experience but lose a retired law-enforcement voice focused on public safety.'],
      ['TM', 'Perez, Ontiveros, Parr', '○', 'Tuned-Out Middle voters care most about housing costs, and lean toward Nikki Perez’s rent cap, Jonathan Ontiveros’s plan to unlock about 16,000 units and JT Parr’s call to cut red tape, with little else to go on.', 'Tuned-Out Middle voters who want proven hands could pick Takahashi and Wick, the sitting mayor and the Planning Commission chair, instead of Ontiveros and Parr, giving up the two newcomers’ most direct promises to add housing supply.'],
      ['PP', 'Takahashi, Wick, Brody', '◐', 'Pragmatic and Polite Right voters value steady, experienced governance, so they favor Mayor Tamala Takahashi, Planning Commission chair Samantha Wick and former Water & Power Board chair Robbie Brody.'],
      ['UR', 'Yoosefi, Donahue, Tonoyan', '○', 'Unconventional Right voters favor small-business and public-safety candidates who are skeptical of dedicated bus lanes, such as Chris Yoosefi, David Donahue and Hovanes Tonoyan, though all three have thin public records.'],
      ['FC', 'Yoosefi, Waltman, Wick', '○', 'Faith First Conservatives lean toward public safety and family priorities, so they pick Navy veteran Chris Yoosefi, retired law-enforcement official Jackie Waltman and Samantha Wick, who lists families and public safety, though none speaks to faith issues.'],
      ['NA', 'Donahue, Yoosefi, Waltman', '○', 'No Apologies Right voters favor pro-business, pro-police candidates and lean to David Donahue, who defends the Flock plate readers, Chris Yoosefi, who opposes the bus lane, and Jackie Waltman’s law-enforcement background.'],
    ]),
    counterArguments: [
      'LP (Van Gorder, Southerland, Perez ●): But consider that Southerland has no city board or elected record, because a Council facing a general fund deficit may need members with budget experience, and Takahashi already holds a seat.',
      'NA (Donahue, Yoosefi, Waltman ○): But consider Wick or Brody, because the challengers’ public records are thin and the Council must close a general fund deficit, where commission experience helps.',
    ],
  },
  {
    id: 'burbank-city-clerk',
    categoryId: 'city',
    title: 'Burbank City Clerk',
    tldrLabel: 'Burbank City Clerk',
    seatContext: 'Incumbent, unopposed',
    kind: 'candidates',
    stakesParagraphs: [
      'The City Clerk keeps the city’s official records, runs municipal elections, administers campaign-finance and conflict-of-interest filings, and prepares Council agendas and minutes.',
      'Kimberley Clark is the only name on the ballot, so the outcome is not in doubt. Voters can leave the line blank or write someone in.',
    ],
    introParagraphs: [
      'Clark is the current City Clerk and also runs the Nov. 3, 2026 municipal election, which includes the Council seats and Measures C, CC and CD. She is unopposed (LA County candidate feed; City Clerk page).',
    ],
    legalRequirements: 'Registered voter and resident of the City of Burbank.',
    qualificationCriteria: [
      { id: 'records', label: 'Public records and meeting administration', detail: 'The Clerk keeps council minutes, ordinances and public records.' },
      { id: 'elections', label: 'Election administration', detail: 'The Clerk runs the city’s municipal elections and candidate filings.' },
      { id: 'disclosure', label: 'Campaign and ethics filings', detail: 'The Clerk collects campaign-finance and economic-interest disclosures.' },
    ],
    candidates: [
      {
        id: 'kimberley-clark',
        name: 'Kimberley Clark',
        party: 'NP',
        role: 'Burbank City Clerk',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Clark is the incumbent City Clerk and is administering the Nov. 3, 2026 election.',
          criteria: [
            { criterionId: 'records', assessment: 'met', evidence: 'Serving as Burbank City Clerk.' },
            { criterionId: 'elections', assessment: 'met', evidence: 'Issued the 2026 nomination-period press release and runs the Nov. 3 election (City Clerk).' },
            { criterionId: 'disclosure', assessment: 'met', evidence: 'The Clerk’s office posts candidate campaign disclosures.' },
          ],
        },
        bio: ['Clark is the incumbent City Clerk. No public priorities or campaign site were found for this uncontested race.'],
        scorecard: [
          { topic: 'Records & transparency', position: '✓ Office posts candidate statements and campaign disclosures online' },
          { topic: 'Election administration', position: '✓ Running the 2026 municipal election, including three measures' },
        ],
        money: 'Unopposed; no fundraising totals reported.',
        endorsements: 'None found.',
      },
    ],
    crossTypology: unopposedRows('Clark'),
    counterArguments: ['Unopposed: voters who want a different clerk can leave the line blank or write someone in, but the incumbent will be elected.'],
  },
  {
    id: 'burbank-city-treasurer',
    categoryId: 'city',
    title: 'Burbank City Treasurer',
    tldrLabel: 'Burbank City Treasurer',
    seatContext: 'Incumbent, unopposed',
    kind: 'candidates',
    stakesParagraphs: [
      'The City Treasurer manages the city’s cash and investments under its investment policy and oversees the safekeeping of public funds.',
      'Krystle Palmer is the only name on the ballot, so the outcome is not in doubt. Voters can leave the line blank or write someone in.',
    ],
    introParagraphs: ['Palmer is listed as the incumbent and is unopposed (LA County candidate feed; Burbank Leader).'],
    legalRequirements: 'Registered voter and resident of the City of Burbank.',
    qualificationCriteria: [
      { id: 'investments', label: 'Public investment management', detail: 'The Treasurer invests city funds under a written policy.' },
      { id: 'cash', label: 'Cash management and banking', detail: 'The Treasurer oversees deposits and custody of city funds.' },
      { id: 'reporting', label: 'Reporting and transparency', detail: 'The Treasurer reports on the city’s investments to the Council.' },
    ],
    candidates: [
      {
        id: 'krystle-palmer',
        name: 'Krystle Palmer',
        party: 'NP',
        role: 'Incumbent',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Palmer is the sitting City Treasurer.',
          criteria: [
            { criterionId: 'investments', assessment: 'met', evidence: 'Serving as Burbank City Treasurer.' },
            { criterionId: 'cash', assessment: 'met', evidence: 'Serving as Burbank City Treasurer.' },
            { criterionId: 'reporting', assessment: 'unknown', evidence: 'No public treasurer’s reports were reviewed.' },
          ],
        },
        bio: ['Palmer is the incumbent City Treasurer. No public priorities or campaign site were found for this uncontested race.'],
        scorecard: [
          { topic: 'Investment policy', position: NO_POS },
          { topic: 'Transparency', position: NO_POS },
        ],
        money: 'Unopposed; no fundraising totals reported.',
        endorsements: 'None found.',
      },
    ],
    crossTypology: unopposedRows('Palmer'),
    counterArguments: ['Unopposed: voters who want a different treasurer can leave the line blank or write someone in, but the incumbent will be elected.'],
  },
  {
    id: 'burbank-measure-c',
    categoryId: 'local-measures',
    title: 'Burbank Measure C — Hotel tax increase (10% to 12%)',
    tldrLabel: 'Burbank Measure C — Hotel tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure C would raise Burbank’s hotel guest tax from 10% to 12%. Hotel guests, not residents as such, would pay it, and the money would go to the general fund while the city faces a deficit.',
    ],
    introParagraphs: [
      'The City Council placed the measure on the ballot as the “City Services Measure.” At the Sept. 22 forum Council candidates broadly supported it (HeySoCal).',
    ],
    measure: {
      question:
        'To maintain services including fire, paramedic, police, 911 response; prepare for/respond to wildfires/other disasters; prevent property crimes; keep public areas/neighborhoods clean/safe; address homelessness; support youth programs, senior services, other general city services; shall the measure increasing Burbank’s transient occupancy tax, paid only by hotel/motel guests, from 10% to 12%, providing approximately $3,000,000 annually until ended by voters, requiring audits, spending disclosures, funds used locally, be adopted?',
      yesMeans: 'Raises Burbank’s hotel guest tax from 10% to 12% starting Jan. 1, 2027, adding about $3 million a year to the general fund for any city purpose until voters end it.',
      noMeans: 'Keeps Burbank’s hotel guest tax at 10%, and the city goes without the estimated $3 million a year in added general fund revenue.',
      funding: {
        asOf: 'Oct. 12, 2026',
        note: 'No committee has reported raising money for or against it.',
        sources: [
          { label: 'Burbank City Clerk eFile portal: campaign filings (Measure C has no committees listed)', url: 'https://efile.burbankca.gov/public/search/campaign' },
        ],
      },
      positions: [
        { org: 'Los Angeles County Democratic Party', kind: 'party', position: 'Yes', url: 'https://www.lacdp.org/ballotmeasures' },
      ],
      measureType: 'City ordinance (general tax increase on hotel stays)',
      voteThreshold: 'Simple majority (general tax, per the City Attorney’s impartial analysis)',
      fiscalImpact: 'The city estimates about $3 million a year in added general fund revenue; the increase would take effect Jan. 1, 2027 if approved.',
      supporters: 'Burbank City Council placed the measure on the ballot; Los Angeles County Democratic Party; Council candidate David Donahue has urged a Yes vote.',
      opponents: 'No organized opposition was found.',
      voterConnection: [
        'Residents pay it only if they book a Burbank hotel; on a $200 night it adds $4.',
        'The Council could spend the money on any city purpose, including closing the deficit.',
      ],
      mechanismBullets: [
        'Applies to hotel and motel stays (the transient occupancy tax).',
        'General tax: revenue goes to the general fund (“locally controlled funding for City services”), not one purpose, so a simple majority passes it (City Attorney’s impartial analysis).',
        'No sunset; the tax continues until voters end it.',
      ],
      argumentsFor: [
        'Visitors, not residents, pay most of it.',
        'It helps fund city services while the general fund faces a deficit.',
        'The money stays in Burbank under local control.',
      ],
      argumentsAgainst: [
        'A higher rate can make Burbank hotels less competitive with nearby cities.',
        'Unrestricted money carries no guarantee for any particular service.',
        'It has no end date.',
        'Some voters prefer cutting costs or other revenue options before raising taxes.',
      ],
      readingLinks: [
        { label: 'City of Burbank: TOT measure page', url: 'https://www.burbankca.gov/tot-measure', summary: 'City explanation of the hotel tax proposal.' },
        { label: 'City Attorney’s impartial analysis of Measure C', url: 'https://www.burbankca.gov/documents/d/guest/city-of-burbank-city-services-measure-city-attorneys-impartial-analysis', summary: 'Official analysis, including the general-tax classification.' },
        { label: 'Measure C fact sheet', url: 'https://www.burbankca.gov/documents/d/guest/city-of-burbank-measure-c-fact-sheet-english-2-', summary: 'City fact sheet.' },
        { label: 'City Clerk: Nov 3, 2026 election', url: CITY_CLERK_URL, summary: 'Measure text and ballot information.' },
        { label: 'Burbank Leader: Voters to see tax hike, election measures in November (Aug 1)', url: 'https://outlooknewspapers.com/burbankleader/voters-to-see-tax-hike-election-measures-in-november/article_636f9af5-f657-4687-8f71-6014ee06e4bc.html', summary: 'Report on the three November measures (hotel tax, charter amendment, by-district elections), the projected deficit behind the tax, and the voting-rights settlement behind the election measures.' },
      ],
      explainerUrl: 'https://outlooknewspapers.com/burbankleader/voters-to-see-tax-hike-election-measures-in-november/article_636f9af5-f657-4687-8f71-6014ee06e4bc.html',
    },
    crossTypology: ct([
      ['LP', 'Yes', '●', 'Leftward Progressives favor funding city services with a tax that falls on hotel visitors rather than residents.'],
      ['LL', 'Yes', '●', 'Loyal Liberals favor a modest, locally controlled revenue source for city services during a deficit, backed by the Council and the county Democratic Party.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters like taxing visitors instead of working residents, though they distrust unrestricted general fund spending with no guarantee for any service.'],
      ['OO', 'Yes', '◐', 'Order and Opportunity Left voters want police, fire and 911 services protected, and a tax paid by hotel guests does that without costing residents.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters pay nothing unless they book a Burbank hotel, so keeping city services funded is a mild Yes.'],
      ['PP', 'Yes / No', '=', 'Pragmatic and Polite Right voters want the deficit closed but are wary of open-ended taxes: if closing it with a targeted tax on visitors rather than residents matters most, Yes; if a tax with no end date weighs more, No.'],
      ['UR', 'No', '○', 'Unconventional Right voters prefer smaller government and lean against a new open-ended tax, even one visitors pay.'],
      ['FC', 'No', '○', 'Faith First Conservatives generally favor lower taxes and limited local spending, a weak lean since residents do not pay it.'],
      ['NA', 'No', '◐', 'No Apologies Right voters oppose nearly all new taxes and want the city to cut spending before raising any rate.'],
    ]),
    hinges: {
      LP: 'Yes if funding city services with a tax that mostly visitors pay is a fair way to close the deficit. No if unrestricted money with no guarantee for any service, and no end date, isn’t accountable enough.',
      LL: 'Yes if a modest, locally controlled revenue source for city services during a deficit makes sense to you. No if a higher rate could make Burbank hotels less competitive with nearby cities.',
      LO: 'Yes if taxing hotel visitors, rather than residents, to fund city services appeals to you. No if you distrust unrestricted general fund spending that carries no guarantee for any particular service.',
      OO: 'Yes if protecting fire, police and 911 services, as the Council proposes, comes first for you. No if you’d want the money tied to specific services rather than spent on any city purpose.',
      TM: 'Yes if city services matter to you and you pay nothing unless you book a Burbank hotel. No if you’d rather the city cut costs or find other revenue before raising any tax.',
      PP: 'Yes if a tax on visitors that spares residents is a prudent way to help cover the deficit. No if a tax with no end date, or a rate that could make Burbank hotels less competitive, goes further than you’d like.',
      UR: 'Yes if visitors, not residents, paying most of it makes this tax different for you. No if new taxes and unrestricted government spending are things you resist, no matter who pays.',
      FC: 'Yes if the burden falling on visitors rather than Burbank families makes it acceptable to you. No if lower taxes and limited local spending matter more, even when visitors pay.',
      NA: 'Yes if taxing hotel guests rather than residents is the least burdensome way to raise revenue while the city faces a deficit. No if the city should cut spending first and an open-ended tax with no end date is wrong.',
    },
    counterArguments: [
      'NA (No ◐): But consider Yes if you want residents spared, because hotel guests pay it, about $4 on a $200 night, while the city faces a deficit.',
      'LL (Yes ●): But consider No if accountability matters, because the money is unrestricted, carries no guarantee for any service and has no end date.',
    ],
  },
  {
    id: 'burbank-measure-cc',
    categoryId: 'local-measures',
    title: 'Burbank Measure CC — Charter amendment ending the at-large election requirement',
    tldrLabel: 'Burbank Measure CC — Charter (at-large)',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure CC removes the charter requirement that Council members be elected at large (citywide), so the election system can be set by ordinance. It does not create districts itself; Measure CD does, and CD works only if CC also passes.',
    ],
    introParagraphs: [
      'The Council placed CC and CD on the ballot after settling a California Voting Rights Act lawsuit, Gutierrez v. City of Burbank (filed Oct. 2023), in court-ordered mediation in Feb. 2026. The city says the at-large system is lawful but defending the suit would be imprudent if voters want districts.',
    ],
    measure: {
      question:
        'Shall the Burbank City Charter be amended to remove the requirement for at-large elections of City Council members and permit the City’s electoral system to be specified by ordinance adopted by the City Council or by the voters by initiative?',
      yesMeans: 'Removes the charter’s at-large election requirement so the Council or voters can set the election system by ordinance; districts start only if Measure CD also passes.',
      noMeans: 'Keeps the charter rule that all Council members are elected citywide, so Measure CD cannot take effect even if it wins a majority.',
      related: [
        { raceId: 'burbank-measure-cd', note: 'Measure CD adopts the district map, but it takes effect only if this charter amendment also passes, so voters who want districts need Yes on both.' },
      ],
      funding: {
        asOf: 'Oct. 12, 2026',
        note: 'No committee has reported raising money for or against it.',
        sources: [
          { label: 'Burbank City Clerk eFile portal: campaign filings (Measure CC has no committees listed)', url: 'https://efile.burbankca.gov/public/search/campaign' },
        ],
      },
      positions: [
        { org: 'Los Angeles County Democratic Party', kind: 'party', position: 'No', url: 'https://www.lacdp.org/ballotmeasures' },
      ],
      measureType: 'Charter amendment',
      voteThreshold: 'Simple majority',
      fiscalImpact: 'The city says the amendment itself has no direct cost and could reduce the risk of costly future voting-rights litigation; see the City Attorney’s impartial analysis.',
      supporters: 'Burbank City Council (unanimous vote to place on ballot).',
      opponents: 'Green Party of Los Angeles County; Los Angeles County Democratic Party.',
      voterConnection: [
        'A Yes vote alone does not change how you vote; it allows a different system to be adopted.',
        'If CD also passes, you would vote only for your own district’s Council seat; a No vote keeps citywide elections.',
      ],
      mechanismBullets: [
        'After CC, the election system can be set by ordinance (Council or voter initiative).',
        'Placed on the ballot under the Gutierrez v. City of Burbank settlement (No. 23STCV25587).',
      ],
      argumentsFor: [
        'It gives the city flexibility and addresses a California Voting Rights Act dispute.',
        'It makes districts and other systems, such as ranked-choice voting, possible.',
        'It could reduce the risk of costly future litigation.',
      ],
      argumentsAgainst: [
        'The settlement requires only a vote, not passage.',
        'Ending at-large elections could weaken citywide accountability.',
        'The Green Party argues ranked-choice voting would be a better fix.',
        'It changes the charter, a long-term governing document.',
      ],
      readingLinks: [
        { label: 'City Attorney’s impartial analysis of Measure CC', url: 'https://www.burbankca.gov/documents/d/guest/city-of-burbank-charter-amendment-measure-city-attorneys-impartial-analysis', summary: 'Official description of the amendment.' },
        { label: 'City of Burbank: election measures', url: 'https://www.burbankca.gov/election-measures', summary: 'City page for the three measures.' },
        { label: 'City news release: measures follow CVRA settlement', url: 'https://www.burbankca.gov/newsroom/-/newsdetail/20124/burbank-to-place-council-election-measures-on-november-2026-ballot-following-cvra-settlement', summary: 'Background on the settlement.' },
        { label: 'Green Party of LA County voter guide', url: 'https://losangeles.cagreens.org/voter-guide-november-2026', summary: 'Opposition argument and ranked-choice alternative.' },
        { label: 'Burbank Leader: Voters to see tax hike, election measures in November (Aug 1)', url: 'https://outlooknewspapers.com/burbankleader/voters-to-see-tax-hike-election-measures-in-november/article_636f9af5-f657-4687-8f71-6014ee06e4bc.html', summary: 'Report on the three November measures (hotel tax, charter amendment, by-district elections), the projected deficit behind the tax, and the voting-rights settlement behind the election measures.' },
      ],
      explainerUrl: 'https://outlooknewspapers.com/burbankleader/voters-to-see-tax-hike-election-measures-in-november/article_636f9af5-f657-4687-8f71-6014ee06e4bc.html',
    },
    crossTypology: ct([
      ['LP', 'Yes', '◐', 'Leftward Progressives want more inclusive representation and more electoral options, and removing the at-large rule opens the door to districts or ranked-choice voting, though the Green Party wants ranked choice directly.'],
      ['LL', 'Yes', '○', 'Loyal Liberals value voting-rights compliance and the unanimous Council recommendation, weakly, because the county Democratic Party opposes the measure.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters, who feel shut out of politics, favor opening the system so cheaper district campaigns or other reforms can give newcomers a chance.'],
      ['OO', 'Yes', '○', 'Order and Opportunity Left voters lean toward resolving the voting-rights lawsuit and opening a path to neighborhood representation, a weak lean.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters have little at stake, and avoiding costly litigation tips a mild Yes.'],
      ['PP', 'No', '○', 'Pragmatic and Polite Right voters prefer cautious change and citywide accountability, and the settlement requires only a vote, not a charter change.'],
      ['UR', 'No', '○', 'Unconventional Right voters distrust changes driven by legal settlements and prefer that every member answer to the whole city.'],
      ['FC', 'No', '○', 'Faith First Conservatives generally favor existing institutions and the at-large system that lets them vote for every seat.'],
      ['NA', 'No', '◐', 'No Apologies Right voters oppose restructuring city elections under a voting-rights lawsuit and want to keep a say in every Council seat.'],
    ]),
    hinges: {
      LP: 'Yes if opening the door to districts or ranked-choice voting makes local representation more inclusive. No if you’d rather keep citywide elections, or share the Green Party’s view that ranked-choice voting should be adopted directly; the county Democratic Party also opposes it.',
      LL: 'Yes if resolving the voting-rights lawsuit, as the unanimous Council recommends, makes sense to you. No if a long-term charter change isn’t needed, since the settlement requires only a vote, not passage.',
      LO: 'Yes if any opening for districts or ranked-choice voting is worth taking to you. No if you share the Green Party’s view that ranked-choice voting is the better fix and want it settled directly, not left to a later Council ordinance.',
      OO: 'Yes if you back the Council’s settlement-based path and the voting-rights protections behind it. No if you’d rather keep citywide elections for every seat; the county Democratic Party also opposes it.',
      TM: 'Yes if lowering the risk of costly lawsuits matters to you, as the unanimous Council argues. No if you’d rather keep voting for every Council seat, as you do now.',
      PP: 'Yes if ending the litigation risk is the prudent course. No if citywide accountability, with every member answering to the whole city, is worth keeping and the charter shouldn’t change because of a lawsuit.',
      UR: 'Yes if avoiding costly voting-rights litigation outweighs your doubts about a settlement-driven change. No if you distrust changes forced by legal settlements and want every member answering to the whole city.',
      FC: 'Yes if avoiding litigation costs for the city tips the balance for you. No if you favor existing institutions and the at-large system that lets you vote for every seat.',
      NA: 'Yes if rejecting it would leave the settlement unresolved and expose the city to costly litigation. No if citywide accountability matters more and the charter shouldn’t change because of a lawsuit.',
    },
    counterArguments: [
      'NA (No ◐): But consider Yes, because rejecting the amendment leaves the settlement unresolved and could expose the city to litigation costs.',
      'LL (Yes ○): But consider No if you follow the county Democratic Party, because it opposes the measure and the settlement requires only a vote, not passage.',
    ],
  },
  {
    id: 'burbank-measure-cd',
    categoryId: 'local-measures',
    title: 'Burbank Measure CD — By-district Council elections (takes effect only if CC passes)',
    tldrLabel: 'Burbank Measure CD — By-district elections',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure CD would replace citywide Council elections with single-member districts, each member chosen only by voters in that district. It takes effect only if Measure CC also passes; if CC fails, CD does nothing even if it wins a majority.',
    ],
    introParagraphs: [
      'The second half of the pair placed on the ballot after the Gutierrez v. City of Burbank California Voting Rights Act settlement, which locked in the district lines (“Map 130”) but left the order of district elections to the Council.',
    ],
    measure: {
      question:
        'Shall the Ordinance be adopted adding Chapter 3 to Title 2 of the Municipal Code changing the City’s electoral system for City Council elections from at-large to by-district elections in the districts reflected in Map 130?',
      yesMeans: 'Switches Council elections to five single-member districts under Map 130, starting with Districts 2 and 4 in 2028, but only if Measure CC also passes.',
      noMeans: 'Keeps citywide at-large Council elections, in which every voter can vote for every seat, even if Measure CC passes.',
      related: [
        { raceId: 'burbank-measure-cc', note: 'This ordinance takes effect only if Measure CC, the charter amendment removing the at-large requirement, also passes.' },
      ],
      funding: {
        asOf: 'Oct. 12, 2026',
        note: 'No committee has reported raising money for or against it.',
        sources: [
          { label: 'Burbank City Clerk eFile portal: campaign filings (Measure CD has no committees listed)', url: 'https://efile.burbankca.gov/public/search/campaign' },
        ],
      },
      positions: [
        { org: 'Los Angeles County Democratic Party', kind: 'party', position: 'No', url: 'https://www.lacdp.org/ballotmeasures' },
      ],
      measureType: 'City ordinance (conditional on Measure CC)',
      voteThreshold: 'Simple majority, but it cannot take effect unless Measure CC also passes',
      fiscalImpact: 'See the City Attorney’s impartial analysis; no dollar estimate was found in the materials reviewed.',
      supporters: 'Burbank City Council (unanimous vote to place on ballot).',
      opponents: 'Green Party of Los Angeles County; Los Angeles County Democratic Party.',
      voterConnection: [
        'The 2026 election is still at large for the three seats on this ballot.',
        'Voters who want districts must vote Yes on both CC and CD.',
      ],
      mechanismBullets: [
        'Per the city, Districts 2 and 4 would be elected in Nov 2028 and Districts 1, 3 and 5 in 2030.',
        'If CC passes but CD fails, this ordinance does not adopt districts.',
      ],
      argumentsFor: [
        'Districts can make it easier for neighborhoods and communities of color to elect candidates of choice.',
        'Smaller districts can cost less to campaign in, opening the field to newcomers.',
        'It resolves the voting-rights lawsuit, and members would answer directly to a defined neighborhood.',
      ],
      argumentsAgainst: [
        'Each voter would choose only one Council member instead of up to two or three.',
        'Council members might favor district interests over citywide ones.',
        'The Green Party argues ranked-choice voting would be a better alternative.',
        'The settlement requires a vote but not a Yes, so voters are free to keep at-large elections.',
      ],
      readingLinks: [
        { label: 'City Attorney’s impartial analysis of Measure CD', url: 'https://www.burbankca.gov/documents/d/guest/city-of-burbank-by-district-council-elections-measure-city-attorneys-impartial-analysis', summary: 'Official description, including the CC contingency.' },
        { label: 'City of Burbank: election measures', url: 'https://www.burbankca.gov/election-measures', summary: 'City page for the three measures.' },
        { label: 'City news release: measures follow CVRA settlement', url: 'https://www.burbankca.gov/newsroom/-/newsdetail/20124/burbank-to-place-council-election-measures-on-november-2026-ballot-following-cvra-settlement', summary: 'Background on the settlement.' },
        { label: 'myBurbank: public hearing on overhauling the electoral system', url: 'https://myburbank.com/city-council-to-hold-publioc-hearing-on-overhauling-its-electoral-system/', summary: 'Council hearing on the rollout.' },
        { label: 'Burbank Leader: Voters to see tax hike, election measures in November (Aug 1)', url: 'https://outlooknewspapers.com/burbankleader/voters-to-see-tax-hike-election-measures-in-november/article_636f9af5-f657-4687-8f71-6014ee06e4bc.html', summary: 'Report on the three November measures (hotel tax, charter amendment, by-district elections), the projected deficit behind the tax, and the voting-rights settlement behind the election measures.' },
      ],
      explainerUrl: 'https://outlooknewspapers.com/burbankleader/voters-to-see-tax-hike-election-measures-in-november/article_636f9af5-f657-4687-8f71-6014ee06e4bc.html',
    },
    crossTypology: ct([
      ['LP', 'Yes', '◐', 'Leftward Progressives favor districts as a way to raise representation for underrepresented neighborhoods, though some prefer ranked-choice voting as the Green Party argues.'],
      ['LL', 'Yes', '○', 'Loyal Liberals value voting-rights compliance and the unanimous Council recommendation, weakly, because the county Democratic Party opposes it.'],
      ['LO', 'Yes', '◐', 'Left-Out Left voters like smaller, cheaper district campaigns that open the field to newcomers and a representative tied to their neighborhood.'],
      ['OO', 'Yes', '○', 'Order and Opportunity Left voters, a racially diverse group, lean toward districts that can help communities of color elect candidates of choice.'],
      ['TM', 'Yes', '○', 'Tuned-Out Middle voters have little at stake, and one nearby district representative may be easier to reach, a mild Yes.'],
      ['PP', 'No', '○', 'Pragmatic and Polite Right voters prefer citywide accountability and a say in every seat over members who may favor district interests.'],
      ['UR', 'No', '○', 'Unconventional Right voters distrust lawsuit-driven change and prefer voting for every Council seat.'],
      ['FC', 'No', '○', 'Faith First Conservatives generally favor the existing at-large system.'],
      ['NA', 'No', '◐', 'No Apologies Right voters oppose drawing districts under a voting-rights settlement and want every member answering to the whole city.'],
    ]),
    hinges: {
      LP: 'Yes if districts give historically underrepresented neighborhoods and communities of color a better shot at electing their choice. No if ranked-choice voting would be a better reform, as the Green Party argues.',
      LL: 'Yes if voting-rights compliance matters to you, as the unanimous Council stressed in recommending it. No if the settlement requires only a vote, not a Yes, and you prefer at-large elections; the county Democratic Party opposes it.',
      LO: 'Yes if districts and cheaper campaigns that open the field to newcomers are worth it to you. No if ranked-choice voting is the stronger reform you’d rather hold out for.',
      OO: 'Yes if expanded representation for neighborhoods and communities of color appeals to you. No if you prefer voting for every Council seat; the county Democratic Party also opposes it.',
      TM: 'Yes if one nearby representative for your neighborhood would be easier to reach. No if you’d rather keep voting for every Council seat than choose just one.',
      PP: 'Yes if one nearby representative and resolving a dispute the city chose to settle seem worth it. No if citywide accountability matters more and members might favor their district over the whole city.',
      UR: 'Yes if a single nearby representative and ending the lawsuit outweigh your doubts. No if you distrust lawsuit-driven change and worry members would favor their district over the whole city.',
      FC: 'Yes if neighborhood representation and settling the lawsuit tip the balance for you. No if you favor the existing at-large system, where every voter helps choose every seat.',
      NA: 'Yes if you back CC and want the by-district system the city already agreed to put before voters. No if a say in every Council seat, not just one, matters more to you.',
    },
    counterArguments: [
      'NA (No ◐): But consider Yes, because districts give residents a single nearby representative and resolve a legal dispute the city chose to settle.',
      'PP (No ○): But consider Yes if you vote Yes on CC, because opposing CD while supporting CC can leave the city without the by-district system it agreed to put before voters.',
    ],
  },
  {
    id: 'busd-trustee-area-3',
    categoryId: 'school',
    title: 'Burbank Unified School District, Trustee Area 3',
    tldrLabel: 'Burbank USD Trustee Area 3',
    seatContext: 'Open seat (appointed incumbent not on the ballot)',
    kind: 'candidates',
    stakesParagraphs: [
      'The five-member Board of Education governs Burbank’s public schools: it adopts the budget, sets policy, approves labor contracts, and hires and reviews the superintendent. The district faces structural deficits and eroded reserves, and the county office of education has given it a “lack of going concern” designation (myBurbank).',
      'Trustee Area 3 is open after Charlene Tabet resigned on Sept. 3, 2025; the board appointed Kelsey Olson in October 2025 to fill the seat until the November result is certified. Only voters in Area 3 decide this contest, roughly a quarter of ZIP 91501.',
    ],
    introParagraphs: [
      'Five candidates are on the ballot: Dennis Connor, Paul Gerard, Hai Ho, Rosemary Morrison and Evren Ozbey. Public information on most is thin; the county voter guide lists only designations and short statements, so cards mark unknowns plainly.',
    ],
    readingLinks: [
      { label: 'LA County candidate statements', url: LA_STATEMENTS_URL, summary: 'Official ballot designations and statements.' },
      { label: 'Burbank Leader: six candidates vie for Board of Education', url: 'https://outlooknewspapers.com/burbankleader/six-candidates-vie-for-burbank-board-of-education/article_4f1ecb94-4d72-444d-84c3-018b224e8770.html', summary: 'Aug. 2026 overview of both seats.' },
      { label: 'Burbank Votes voter guide', url: VOTES_URL, summary: 'Ballot designations and stated priorities.' },
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      school({
        id: 'dennis-connor',
        name: 'Dennis M. Connor',
        role: 'Retired Technical Writer',
        qualification: sq('limited', 'Connor’s county ballot designation is Retired Technical Writer; no school-board, budget or education career was found.', {
          community: ['partial', 'The Burbank Votes guide lists him as Instructional Designer / Parent, indicating a parent in the district.'],
        }),
        bio: ['Connor’s designation on the county ballot is Retired Technical Writer; the Burbank Votes guide lists him as Instructional Designer / Parent. No campaign platform or news profile was found.'],
        scorecard: [
          { topic: 'Budget & deficit', position: NO_POS },
          { topic: 'Curriculum & academics', position: NO_POS },
          { topic: 'Teachers & staffing', position: NO_POS },
          { topic: 'Transparency', position: NO_POS },
        ],
        endorsements: 'None found.',
      }),
      school({
        id: 'paul-gerard',
        name: 'Paul Gerard',
        role: 'College Professor/Parent',
        campaignUrl: 'http://www.gerardforbusd.com/',
        qualification: sq('some', 'Gerard is a college professor and parent whose platform centers on transparency and finances. He has not served on a school board.', {
          education: ['met', 'Works as a college professor (ballot designation).'],
          budget: ['partial', 'Campaign centers on fiscal stability; no documented budget role.'],
          community: ['partial', 'Parent in the district; priorities include enrollment and student representation.'],
        }),
        bio: ['Gerard is a college professor and Burbank Unified parent. His campaign says it aims to restore “transparency, fiscal stability, and trust,” and lists enrollment and student representation among his priorities (campaign site; Burbank Votes).'],
        scorecard: [
          { topic: 'Budget & deficit', position: '✓✓ Fiscal stability is a core campaign priority' },
          { topic: 'Curriculum & academics', position: NO_POS },
          { topic: 'Teachers & staffing', position: '? No specific position found; lists enrollment as a priority' },
          { topic: 'Transparency', position: '✓✓ Transparency and trust are core campaign priorities' },
          { topic: 'Student voice', position: '✓ Lists student representation as a priority' },
        ],
        endorsements: 'None found.',
      }),
      school({
        id: 'hai-ho',
        name: 'Hai Ho',
        role: 'Retired Aerospace Engineer',
        qualification: sq('limited', 'Ho is a retired aerospace engineer; no school-board, budget or education role was found.', {}),
        bio: ['Ho’s ballot designation is Retired Aerospace Engineer. No campaign platform or news profile was found.'],
        scorecard: [
          { topic: 'Budget & deficit', position: NO_POS },
          { topic: 'Curriculum & academics', position: NO_POS },
          { topic: 'Teachers & staffing', position: NO_POS },
          { topic: 'Transparency', position: NO_POS },
        ],
        endorsements: 'None found.',
      }),
      school({
        id: 'rosemary-morrison',
        name: 'Rosemary T. Morrison',
        role: 'Mother/Teacher/Student',
        qualification: sq('some', 'Morrison works as a teacher and is a parent. No board service or budget role was found.', {
          education: ['met', 'Works as a teacher (ballot designation).'],
          community: ['partial', 'Parent in the district; priorities include educator retention and student success.'],
        }),
        bio: ['Morrison’s ballot designation is Mother/Teacher/Student. Her stated priorities are student success, fiscal transparency, accountability and educator retention (Burbank Votes).'],
        scorecard: [
          { topic: 'Budget & deficit', position: '✓ Lists fiscal transparency as a priority; no specific plan found' },
          { topic: 'Curriculum & academics', position: '✓ Lists student success as a priority' },
          { topic: 'Teachers & staffing', position: '✓✓ Lists educator retention as a priority' },
          { topic: 'Transparency', position: '✓ Lists accountability and fiscal transparency as priorities' },
        ],
        endorsements: 'None found.',
      }),
      school({
        id: 'evren-ozbey',
        name: 'Evren Ozbey',
        role: 'No ballot designation',
        qualification: sq('limited', 'Ozbey listed no ballot designation, and no record of education, budget or board experience was found.', {}),
        bio: ['Ozbey did not list an occupation on the ballot. No campaign platform or news profile was found.'],
        scorecard: [
          { topic: 'Budget & deficit', position: NO_POS },
          { topic: 'Curriculum & academics', position: NO_POS },
          { topic: 'Teachers & staffing', position: NO_POS },
          { topic: 'Transparency', position: NO_POS },
        ],
        endorsements: 'None found.',
      }),
    ],
    crossTypology: ct([
      ['LP', 'Morrison', '○', 'Leftward Progressives value educator retention and a teacher’s perspective, and Rosemary Morrison is the only candidate listing retention as a priority.'],
      ['LL', 'Morrison', '○', 'Loyal Liberals value classroom expertise and accountability, and Rosemary Morrison pairs both, though public detail is limited.'],
      ['LO', 'Gerard', '○', 'Left-Out Left voters distrust institutions, and Paul Gerard’s campaign is built on restoring transparency and trust in a district under a fiscal warning, a weak lean.'],
      ['OO', 'Morrison', '○', 'Order and Opportunity Left voters want schools that keep good teachers and help students succeed, which is Rosemary Morrison’s stated focus.'],
      ['TM', 'Morrison', '○', 'Tuned-Out Middle voters relate to Rosemary Morrison, a mother and working teacher, with little else on the record to go on.'],
      ['PP', 'Gerard', '○', 'Pragmatic and Polite Right voters value fiscal stability in a district with structural deficits, the core of Paul Gerard’s campaign.'],
      ['UR', 'Gerard', '○', 'Unconventional Right voters favor accountability for school spending, and Paul Gerard’s campaign centers on fiscal stability and transparency.'],
      ['FC', 'Gerard', '○', 'Faith First Conservatives find no candidate addressing values issues, and lean weakly to Paul Gerard, a district parent focused on fiscal discipline.'],
      ['NA', 'Gerard', '○', 'No Apologies Right voters want tighter control of school budgets, and Paul Gerard’s fiscal-stability pitch is the closest fit in a thin field.'],
    ]),
    counterArguments: [
      'LL (Morrison ○): But consider Gerard, because the district’s central problem is structural deficits and a county fiscal warning, and his fiscal and transparency focus may matter more than classroom background.',
      'PP (Gerard ○): But consider Morrison, because keeping teachers is part of stabilizing enrollment and she is the only candidate who names educator retention.',
    ],
  },
];
