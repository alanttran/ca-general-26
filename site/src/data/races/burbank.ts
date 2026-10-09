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

const CODES = ['PL', 'EL', 'DM', 'OL', 'SS', 'AR', 'PR', 'CC', 'FF'] as const;
const unopposedRows = (name: string): CrossTypologyRow[] =>
  ct(CODES.map((code) => [code, name, '●', 'Unopposed incumbent; the only choice on the ballot for a nonpartisan administrative office.']));

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
      ['PL', 'Van Gorder, Southerland, Perez', '●', 'Progressive Left voters value strong tenant protections and housing-policy expertise; these three have the most explicit renter-protection platforms and DSA, labor and Working Families backing.'],
      ['EL', 'Perez, Takahashi, Wick', '◐', 'Establishment Liberals value Democratic-endorsed, experienced officeholders; Perez and Takahashi are the party-endorsed incumbents and Wick has the longest planning record of the non-incumbents.'],
      ['DM', 'Perez, Takahashi, Wick', '◐', 'Democratic Mainstays favor the party-endorsed incumbents and a proven city commissioner over untested newcomers.'],
      ['OL', 'Southerland, Van Gorder, Perez', '◐', 'Outsider Left voters lean toward the candidates with the strongest tenant and labor backing, including the two challengers endorsed by DSA and labor.', 'Outsider Left voters who weigh experience could swap in Takahashi, the sitting mayor with direct oversight of the budget and city services, for Southerland, a first-time organizer; they keep Van Gorder and Perez but lose a DSA- and labor-backed tenant advocate.'],
      ['SS', '—', '—', 'Stressed Sideliners vary widely and most candidates here have little public record on household-cost issues, so no slate is a clear fit.'],
      ['AR', 'Wick, Brody, Donahue', '○', 'Ambivalent Right voters value pragmatic local-government experience and fiscal care; these three pair commission service or business experience with attention to budget management.'],
      ['PR', 'Yoosefi, Donahue, Waltman', '○', 'Populist Right voters value small-business and public-safety backgrounds and skepticism of dedicated bus lanes; public detail on all three is limited.'],
      ['CC', 'Waltman, Donahue, Yoosefi', '○', 'Committed Conservatives value fiscal restraint, business backgrounds and public safety; Waltman (retired law enforcement), Donahue (budget caution) and Yoosefi (veteran, small business) fit best, with little record to confirm.'],
      ['FF', 'Yoosefi, Waltman', '○', 'Faith and Flag Conservatives value military service and public safety; Yoosefi’s Navy and American Legion service and Waltman’s law enforcement background are the closest fit, though neither campaign addresses faith or social issues.'],
    ]),
    counterArguments: [
      'PL (Van Gorder, Southerland ●): But Perez and Takahashi already hold seats and bring Council experience, and splitting votes among several progressive challengers could cost the group a seat.',
      'PR/CC (Yoosefi, Donahue, Waltman): But Perez and Takahashi’s experience may matter more on a budget with a general fund deficit, and the challengers’ public records are thin.',
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
      'Measure C would raise Burbank’s hotel guest tax (transient occupancy tax) from 10% to 12%, which the city estimates would bring in about $3 million a year for city services.',
      'Hotel guests, not Burbank residents as such, would pay the tax, but the revenue would go to the general fund at a time when the city faces a deficit.',
    ],
    introParagraphs: [
      'The City Council placed the measure on the ballot as the “City Services Measure.” Because it raises an existing tax for general purposes, the city classifies it as a general tax that passes with a simple majority. At the Sept. 22 forum candidates broadly supported it, and David Donahue explicitly urged a Yes vote (HeySoCal).',
    ],
    measure: {
      question:
        'Condensed from city materials: to help maintain essential city services, shall Burbank’s hotel guest tax be increased from 10% to 12%, generating about $3,000,000 a year, until ended by voters?',
      measureType: 'City ordinance (general tax increase on hotel stays)',
      voteThreshold: 'Simple majority (general tax, per the City Attorney’s impartial analysis)',
      fiscalImpact: 'The city estimates about $3 million a year in added general fund revenue; the increase would take effect Jan. 1, 2027 if approved.',
      supporters: 'Burbank City Council placed the measure on the ballot; Council candidate David Donahue has urged a Yes vote.',
      opponents: 'No organized opposition was found.',
      voterConnection: [
        'Hotel guests pay the tax at check-in; residents pay it only if they book a Burbank hotel.',
        'The revenue is not restricted, so the Council could spend it on any city purpose, including closing the general fund deficit.',
        'Two percentage points on a $200 night is $4 more per night.',
        'The tax continues until voters end it.',
      ],
      mechanismBullets: [
        'Rate: raises the transient occupancy tax on hotel and motel stays from 10% to 12%.',
        'Revenue: about $3,000,000 a year in additional funding (city estimate).',
        'Use: general fund (“locally controlled funding for City services”), not dedicated to one purpose.',
        'Threshold: a general tax, so a simple majority passes it.',
        'Start date: the increase takes effect Jan. 1, 2027 if approved.',
        'Duration: no sunset; the tax continues until ended by voters.',
      ],
      argumentsFor: [
        'It raises revenue mostly from visitors rather than residents.',
        'It helps fund city services as the general fund faces a deficit.',
        'The money stays in Burbank and is locally controlled.',
        'It needs only a simple majority, and no organized opposition was found.',
      ],
      argumentsAgainst: [
        'A higher hotel tax can make Burbank hotels less competitive with nearby cities.',
        'General fund money is not tied to a specific promise, so there is no guarantee it goes to a particular service.',
        'It has no end date unless voters end it.',
        'Some voters prefer cutting costs or other revenue options before raising taxes.',
      ],
      readingLinks: [
        { label: 'City of Burbank: TOT measure page', url: 'https://www.burbankca.gov/tot-measure', summary: 'City explanation of the hotel tax proposal.' },
        { label: 'City Attorney’s impartial analysis of Measure C', url: 'https://www.burbankca.gov/documents/d/guest/city-of-burbank-city-services-measure-city-attorneys-impartial-analysis', summary: 'Official analysis, including the general-tax classification.' },
        { label: 'Measure C fact sheet', url: 'https://www.burbankca.gov/documents/d/guest/city-of-burbank-measure-c-fact-sheet-english-2-', summary: 'City fact sheet.' },
        { label: 'City Clerk: Nov 3, 2026 election', url: CITY_CLERK_URL, summary: 'Measure text and ballot information.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters favor funding city services with a tax that falls mainly on visitors rather than residents.'],
      ['EL', 'Yes', '●', 'Establishment Liberals favor a modest, locally controlled revenue source for city services.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays favor protecting public services and the Council-backed approach.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters like taxing visitors but may distrust unrestricted general fund spending.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners pay nothing unless they book a hotel, so the lean is mild.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters often accept a tax on visitors that spares residents, though some worry about hotel competitiveness.'],
      ['PR', 'No', '○', 'Populist Right voters tend to resist new taxes and unrestricted government spending even when visitors pay.'],
      ['CC', 'No', '◐', 'Committed Conservatives oppose tax increases before spending cuts and dislike an open-ended general tax.'],
      ['FF', 'No', '○', 'Faith and Flag Conservatives generally favor lower taxes and limited local government spending.'],
    ]),
    counterArguments: [
      'CC (No ◐): But because hotel guests rather than residents pay and the city faces a deficit, some fiscal conservatives may see it as the least burdensome way to raise revenue.',
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
      'Burbank’s charter currently requires City Council members to be elected at large, meaning every voter chooses among all candidates citywide. Measure CC would remove that requirement so the election system can be set by ordinance instead.',
      'On its own, CC does not create districts; it only removes the charter barrier. Measure CD, on the same ballot, is what would switch to by-district elections, and CD works only if CC also passes.',
    ],
    introParagraphs: [
      'The Council voted unanimously to place both measures on the ballot after settling a California Voting Rights Act lawsuit, Gutierrez v. City of Burbank (filed Oct. 2023), through court-ordered mediation in Feb. 2026. The city says it does not believe the at-large system violates the law but that defending the suit would be imprudent if voters want districts. The settlement requires a public vote, not passage.',
      'The Green Party of Los Angeles County opposes both measures, arguing the settlement requires only a vote and that ranked-choice voting would be a better alternative.',
    ],
    measure: {
      question:
        'Condensed from city materials: shall Burbank’s charter be amended to remove the requirement that City Council members be elected at large, so the method of electing Council members can be set by ordinance?',
      measureType: 'Charter amendment',
      voteThreshold: 'Simple majority',
      fiscalImpact: 'The city says the amendment itself has no direct cost and could reduce the risk of costly future voting-rights litigation; see the City Attorney’s impartial analysis.',
      supporters: 'Burbank City Council (unanimous vote to place on ballot).',
      opponents: 'Green Party of Los Angeles County.',
      voterConnection: [
        'A Yes vote does not by itself change how you vote; it only allows a different system to be adopted.',
        'If Measure CD also passes, future Council members would be chosen by district rather than citywide.',
        'Under districts you would vote for only the one seat in your own district.',
        'A No vote keeps citywide at-large elections.',
      ],
      mechanismBullets: [
        'Removes the charter’s at-large election requirement for City Council.',
        'Lets the election system be set by ordinance (Council or voter initiative).',
        'Does not itself create districts.',
        'Placed on the ballot under the Gutierrez v. City of Burbank settlement (No. 23STCV25587).',
        'Required for Measure CD to take effect.',
      ],
      argumentsFor: [
        'It gives the city flexibility and addresses a California Voting Rights Act dispute.',
        'It makes districts and other systems, such as ranked-choice voting, possible.',
        'It could reduce the risk of costly future litigation.',
        'The Council unanimously supported placing it on the ballot.',
      ],
      argumentsAgainst: [
        'The settlement requires only a vote, not passage, so voters are not obliged to approve it.',
        'Removing the at-large requirement could weaken citywide accountability for Council members.',
        'The Green Party argues ranked-choice voting would be a better fix.',
        'It changes the charter, a long-term governing document.',
      ],
      readingLinks: [
        { label: 'City Attorney’s impartial analysis of Measure CC', url: 'https://www.burbankca.gov/documents/d/guest/city-of-burbank-charter-amendment-measure-city-attorneys-impartial-analysis', summary: 'Official description of the amendment.' },
        { label: 'City of Burbank: election measures', url: 'https://www.burbankca.gov/election-measures', summary: 'City page for the three measures.' },
        { label: 'City news release: measures follow CVRA settlement', url: 'https://www.burbankca.gov/newsroom/-/newsdetail/20124/burbank-to-place-council-election-measures-on-november-2026-ballot-following-cvra-settlement', summary: 'Background on the settlement.' },
        { label: 'Green Party of LA County voter guide', url: 'https://losangeles.cagreens.org/voter-guide-november-2026', summary: 'Opposition argument and ranked-choice alternative.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters favor changes that make local representation more inclusive and respond to voting-rights concerns.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value resolving the voting-rights lawsuit and the unanimous Council recommendation.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays support the Council’s settlement-based approach and voting-rights protections.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters like the opening for districts, though some prefer ranked-choice voting.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners have little directly at stake; the Council’s unanimous recommendation tips a mild Yes.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters may accept ending litigation risk, though some value citywide accountability.'],
      ['PR', 'No', '○', 'Populist Right voters tend to distrust changes driven by legal settlements and prefer citywide accountability.'],
      ['CC', 'No', '○', 'Committed Conservatives value citywide accountability and are wary of structural changes driven by litigation.'],
      ['FF', 'No', '○', 'Faith and Flag Conservatives generally favor existing institutions and the current at-large system.'],
    ]),
    counterArguments: [
      'CC (No ○): But rejecting the amendment leaves the settlement unresolved and could expose the city to litigation costs.',
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
      'Measure CD would change Council elections from at-large to by-district: the city would be divided into single-member districts (the settlement fixed the lines as “Map 130”), and each Council member would be chosen only by voters in their own district.',
      'CD can take effect only if voters also approve Measure CC. If CC fails, CD does nothing even if it wins a majority. If CC passes but CD fails, districts are not adopted by this ordinance.',
    ],
    introParagraphs: [
      'This is the second half of the pair placed on the ballot after the Gutierrez v. City of Burbank California Voting Rights Act settlement. The settlement locked in Map 130 but left the order of district elections to the Council. The city says that if both measures pass, Districts 2 and 4 would be elected in November 2028 and Districts 1, 3 and 5 in 2030.',
    ],
    measure: {
      question:
        'Condensed from city materials: shall an ordinance be adopted changing City Council elections from at-large to by-district elections in single-member districts, taking effect only if Measure CC (the Charter amendment) also passes?',
      measureType: 'City ordinance (conditional on Measure CC)',
      voteThreshold: 'Simple majority, but it cannot take effect unless Measure CC also passes',
      fiscalImpact: 'See the City Attorney’s impartial analysis; no dollar estimate was found in the materials reviewed.',
      supporters: 'Burbank City Council (unanimous vote to place on ballot).',
      opponents: 'Green Party of Los Angeles County.',
      voterConnection: [
        'If both CC and CD pass, you would vote for only one Council member, the one for your own district.',
        'The 2026 election is still at large for the three seats on this ballot.',
        'Candidates would have to win the district they represent.',
        'If CC fails, CD has no effect no matter how many vote Yes, so voters who want districts must vote Yes on both.',
      ],
      mechanismBullets: [
        'Creates single-member Council districts defined by Map 130.',
        'Takes effect only if Measure CC also passes.',
        'Per the city, Districts 2 and 4 would be elected in Nov 2028 and Districts 1, 3 and 5 in 2030.',
        'Ends citywide at-large Council elections after 2026.',
        'Part of the Gutierrez v. City of Burbank settlement, which requires the vote but not passage.',
      ],
      argumentsFor: [
        'Districts can make it easier for neighborhoods and communities of color to elect candidates of choice.',
        'Smaller districts can cost less to campaign in, which can open the field to newcomers.',
        'It resolves the voting-rights lawsuit.',
        'Council members would answer directly to a defined neighborhood.',
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
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters favor district elections as a way to increase representation for historically underrepresented neighborhoods.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value voting-rights compliance and the unanimous Council recommendation.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays favor expanded representation and the settlement-based path the Council chose.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters like districts, though some prefer ranked-choice voting as a stronger reform.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners have little directly at stake; a single nearby district representative may be easier to reach.'],
      ['AR', 'No', '○', 'Ambivalent Right voters may prefer a say in every Council seat rather than only one.'],
      ['PR', 'No', '○', 'Populist Right voters tend to prefer citywide accountability and distrust changes driven by lawsuits.'],
      ['CC', 'No', '◐', 'Committed Conservatives value citywide accountability and are wary of changes driven by litigation.'],
      ['FF', 'No', '○', 'Faith and Flag Conservatives generally favor the existing at-large system.'],
    ]),
    counterArguments: [
      'CC (No ◐): But supporters note that districts give residents a single nearby representative and resolve a legal dispute the city chose to settle.',
      'AR (No ○): But opposing CD while supporting CC can leave the city without a by-district system it has already agreed to put before voters.',
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
      ['PL', 'Morrison', '○', 'Progressive Left voters value educator retention and a teacher’s perspective; Morrison is the only candidate listing it as a priority.'],
      ['EL', 'Morrison', '○', 'Establishment Liberals value classroom experience and accountability; Morrison pairs both, though public detail is limited.'],
      ['DM', 'Morrison', '○', 'Democratic Mainstays value public-school teachers and educator retention.'],
      ['OL', 'Morrison', '○', 'Outsider Left voters lean toward the candidate who works in a classroom over those with no education background.'],
      ['SS', '—', '—', 'Stressed Sideliners have no clear fit when most candidates have little public record.'],
      ['AR', 'Gerard', '○', 'Ambivalent Right voters value fiscal stability and transparency, the core of Gerard’s campaign, in a district with deficits.'],
      ['PR', 'Gerard', '○', 'Populist Right voters value institutional accountability and transparency, and Gerard’s campaign centers on both.'],
      ['CC', 'Gerard', '○', 'Committed Conservatives value fiscal discipline and accountability on school budgets; Gerard’s campaign centers on fiscal stability.'],
      ['FF', '—', '—', 'No candidate’s public record speaks to faith or social-values concerns in schools, so there is no clear fit.'],
    ]),
    counterArguments: [
      'PL/EL (Morrison ○): But the district’s central problem is structural deficits, and Gerard’s fiscal and transparency focus may matter more than classroom background.',
    ],
  },
];
