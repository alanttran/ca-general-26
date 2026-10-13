import type { Race, QualificationCriterion } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * City of Oceanside local contests (ZIPs 92054, 92056, 92057, 92058): City Council Districts 1 and 2,
 * Oceanside Unified Trustee Areas 1, 3 and 4, Tri-City Healthcare District Zone 2, and city Measures R and S.
 * All offices are nonpartisan; party labels are context from public endorsements, not ballot designations.
 * Ballot designations, candidate order, measure text and city attorney analyses: official sample ballots
 * (SB-150, SB-153, SB-158), Nov 3, 2026. Endorsements: KPBS endorsement guide (Sept 30, 2026),
 * San Diego County Democratic Party and Republican Party of San Diego County slates (checked Oct 13, 2026).
 */

const SDGOP_GUIDE = 'https://www.sandiegorepublicans.org/voter-guides/san-diego';
const KPBS_ENDORSEMENTS =
  'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian';
const NETFILE_OCEANSIDE = 'https://netfile.com/public/OCN/campaign';
const NO_MONEY =
  'No campaign finance totals found in news coverage as of Oct 13, 2026. Oceanside filings are posted on the city’s NetFile portal, which can only be searched interactively.';

const COUNCIL_LEGAL =
  'U.S. citizen, 18 or older, registered voter living in the council district they would represent (and in the City of Oceanside).';

const COUNCIL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Municipal policy and governance', detail: 'The five-member Council (four district members plus an elected mayor) passes city laws, directs the city manager, and sits on regional boards.' },
  { id: 'budget', label: 'Budget and capital planning', detail: 'The Council adopts the city budget, decides how Measure X sales-tax money is spent, and faces a large backlog of pier, police, fire and beach projects.' },
  { id: 'landuse', label: 'Housing and land use', detail: 'The Council approves zoning, development and agricultural-land decisions, including the South Morro Hills farmland area in District 2.' },
  { id: 'constituent', label: 'District knowledge and constituent service', detail: 'Councilmembers field resident requests and represent neighborhood concerns in one district.' },
];

const SCHOOL_LEGAL =
  'U.S. citizen, 18 or older, registered voter living in the trustee area; a district employee must resign that job if elected (Cal. Education Code § 35107).';

const SCHOOL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Board governance and oversight', detail: 'Trustees adopt policy, approve contracts, and hire and evaluate the superintendent as one vote on a five-member board.' },
  { id: 'budget', label: 'Budget and fiscal oversight', detail: 'The board adopts the district budget, oversees bond spending, and must keep the district solvent as enrollment shifts.' },
  { id: 'instruction', label: 'Knowledge of teaching and student outcomes', detail: 'Trustees approve curriculum, special education and English-learner programs, and set goals for test scores and graduation.' },
  { id: 'community', label: 'Parent, staff, and community engagement', detail: 'Trustees answer to families and staff in public meetings, including on school closures and boundary changes.' },
];

const HOSPITAL_LEGAL = 'Registered voter living in Zone 2 of the Tri-City Healthcare District.';

const HOSPITAL_CRITERIA: QualificationCriterion[] = [
  { id: 'governance', label: 'Public board governance', detail: 'The elected board runs a public district under open-meeting and public-records laws.' },
  { id: 'finance', label: 'Financial oversight', detail: 'The district must watch over public assets and the long-term finances of a hospital that struggled financially after the pandemic.' },
  { id: 'healthcare', label: 'Health care knowledge', detail: 'Judging service levels, staffing and patient safety needs some understanding of how hospitals work.' },
  { id: 'partner', label: 'Holding the Sharp partnership to its terms', detail: 'Sharp HealthCare now operates the hospital under a voter-approved long-term agreement, and the board is the public’s check on its commitments.' },
];

export const RACES_OCEANSIDE: Race[] = [
  // ---------------------------------------------------------------- Council D1
  {
    id: 'oceanside-council-d1',
    categoryId: 'city',
    title: 'Oceanside City Council, District 1',
    tldrLabel: 'Oceanside Council D1',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Oceanside’s City Council has four members elected by district plus a mayor elected citywide. The Council sets the city budget, decides land use and development, directs the city manager, and controls how the city spends its Measure X half-cent sales tax, which voters extended in 2024 through 2036.',
      'District 1 covers coastal and downtown Oceanside. The next Council will decide how to pay for a long list of big projects city staff have priced, including the pier bridge, a permanent Fire Station 8, a new police headquarters and the RE:BEACH sand-retention project, and how to spend Measure S money if voters approve it.',
    ],
    introParagraphs: [
      'This is a single November contest; there was no June primary for city council. Deputy Mayor Eric Joyce, a former Oceanside Unified trustee, won the seat in 2022 over appointed incumbent Kori Jensen. He faces Michael Cline, a retired U.S. Army service member who did not submit a ballot statement.',
      'The office is nonpartisan, but the San Diego County Democratic Party and Working Families Party endorse Joyce, and the Republican Party of San Diego County and Reform California endorse Cline (KPBS endorsement guide, Sept 30, 2026).',
    ],
    legalRequirements: COUNCIL_LEGAL,
    qualificationCriteria: COUNCIL_CRITERIA,
    candidates: [
      {
        id: 'michael-cline',
        name: 'Michael Cline',
        party: 'NP',
        role: 'Retired U.S. Army',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Cline is a retired Army service member. He did not file a ballot statement, and no city board, commission or civic leadership role is documented.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected office or city board or commission service found.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget or finance role documented.' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'No planning or land-use experience documented.' },
            { criterionId: 'constituent', assessment: 'unknown', evidence: 'No community or neighborhood leadership role documented; no ballot statement.' },
          ],
        },
        bio: [
          'Cline is a retired U.S. Army service member (North County Chronicle, Sept 23, 2026; Coast News). He did not submit a candidate statement for the county voter guide, and no campaign website was found.',
          'He took part in KOCT’s District 1 candidate forum in September 2026. The county Republican Party and Reform California endorse him.',
        ],
        scorecard: [
          { topic: 'Budget/Measure S', position: '? No published position; the county GOP, which endorses him, opposes Measure S', comparison: 'Joyce voted to put Measure S on the ballot.' },
          { topic: 'Housing & development', position: '? No published position', comparison: 'Joyce stresses keeping Oceanside affordable for working families.' },
          { topic: 'Public safety', position: '? No published position', comparison: 'Joyce points to youth programs and traffic calming.' },
          { topic: 'Ideology', position: '✓ Republican Party– and Reform California–endorsed', comparison: 'Joyce is Democratic Party– and Working Families–endorsed.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County; Reform California (KPBS endorsement guide, Sept 30, 2026).',
        notes: ['KOCT District 1 forum (Sept 2026): https://koct.org/videosondemand/election2026district1'],
      },
      {
        id: 'eric-joyce',
        name: 'Eric Joyce',
        party: 'NP',
        role: 'Oceanside City Councilmember',
        campaignUrl: 'https://www.ericjoyce.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Joyce has held this seat since December 2022 and is deputy mayor. Before that he was an elected Oceanside Unified trustee.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'District 1 councilmember since December 2022 and deputy mayor; former Oceanside Unified trustee (Coast News).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on four city budgets; says the city added over $1 million a year for youth programs during his term (ballot statement).' },
            { criterionId: 'landuse', assessment: 'met', evidence: 'Votes on zoning and development items as a councilmember; with Mayor Sanchez, brought forward the Measure R charter amendment (Coast News).' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Says his office hosted dozens of resident workshops and led the Age-Friendly City effort (ballot statement).' },
          ],
        },
        bio: [
          'Joyce is the District 1 councilmember and deputy mayor. He won the seat in 2022 in a five-way race, leading appointed incumbent Kori Jensen about 38% to 34% in early returns (North Coast Current). He previously served on the Oceanside Unified school board.',
          'His ballot statement points to new youth programs, neighborhood traffic calming, the Age-Friendly City program, homelessness work and beach sand. He and Mayor Esther Sanchez brought the Measure R charter amendment to the Council.',
        ],
        recordVsChange:
          'Joyce can point to youth funding, traffic calming and his role in putting Measures R and S on the ballot. The case for change is mostly ideological: Republicans and Reform California back Cline. Cline has published no platform that would let voters weigh a specific alternative.',
        scorecard: [
          { topic: 'Budget/Measure S', position: '✓ Voted to place the Measure S sales tax on the ballot (unanimous Council vote, June 24, 2026)', comparison: 'Cline has no published position; his party endorser opposes S.' },
          { topic: 'Labor/Measure R', position: '✓✓ Co-led the charter amendment allowing project labor agreements; named as a supporter in the ballot argument for R', comparison: 'Cline has no published position.' },
          { topic: 'Housing & affordability', position: '✓ Says the city should make staying in Oceanside realistic for working families (ballot statement)', comparison: 'Cline has no published position.' },
          { topic: 'Homelessness', position: '✓ Cites work to “disrupt the cycle of homelessness” (ballot statement)', comparison: 'Cline has no published position.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party; Working Families Party (KPBS, Sept 30, 2026). DSA San Diego’s guide also lists SEIU-UHW, the San Diego Building & Construction Trades Council and UFCW Local 135.',
        notes: [
          'A Substack newsletter has raised questions about Joyce’s disclosures related to his spouse’s employers; no agency has made a finding, and no news outlet has reported it, so it is not treated as a red flag.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Joyce', '●', 'Progressive Left voters back the Democratic- and Working Families–endorsed incumbent who led the push for project labor agreements and new youth programs.'],
      ['EL', 'Joyce', '●', 'Establishment Liberals value the deputy mayor’s experience and party and labor endorsements.'],
      ['DM', 'Joyce', '●', 'Democratic Mainstays follow the county Democratic Party to the incumbent.'],
      ['OL', 'Joyce', '◐', 'Outsider Left voters like his focus on working families and youth programs, though he is now part of the city establishment.'],
      ['SS', '—', '—', 'Stressed Sideliners have little to compare, because the challenger has published nothing.', 'An experience-first Stressed Sideliner can back Joyce, who has served four years on the Council and earlier on the school board; Cline has filed no statement and has no documented civic role.'],
      ['AR', 'Cline', '○', 'Ambivalent Right voters lean to the Republican-endorsed challenger but have no platform from him to weigh.', 'An experience-first Ambivalent Right voter could back Joyce, a four-year councilmember and former trustee, over a challenger with no documented civic role, accepting a Democratic-aligned record.'],
      ['PR', 'Cline', '◐', 'Populist Right voters prefer an outsider veteran endorsed by Reform California over a progressive incumbent.', 'Populist Right voters who weigh experience could see Joyce as the only candidate with a record to judge, though they give up a Reform California–backed outsider.'],
      ['CC', 'Cline', '◐', 'Committed Conservatives follow the Republican Party endorsement, tempered by Cline’s lack of a published platform.', 'Committed Conservatives focused on competence might accept Joyce’s four years on the Council over an unknown, while disagreeing with his support for Measures R and S.'],
      ['FF', 'Cline', '◐', 'Faith and Flag Conservatives favor the Army veteran endorsed by the GOP and Reform California.', 'An experience-first Faith and Flag voter could back Joyce for his record in office, giving up the party-endorsed veteran.'],
    ]),
    counterArguments: [
      'CC/PR (Cline ◐): But Cline has filed no ballot statement or platform, so a vote for him is a vote on party endorsement alone.',
      'PL/EL (Joyce ●): But Joyce led the push to let the Council require project labor agreements, which critics say could raise construction costs on city projects.',
    ],
    readingLinks: [
      { label: 'KOCT: District 1 candidate forum (Sept 2026)', url: 'https://koct.org/videosondemand/election2026district1', summary: 'Hour-long forum with Cline and Joyce, hosted by Kent Davy.' },
      { label: 'North County Chronicle: November ballot guide', url: 'https://northcountychronicle.com/articles/election/north-county-voters-face-a-full-ballot-this-november/', summary: 'Lists every Oceanside council, school and Tri-City contest.' },
      { label: 'KPBS: 2026 endorsement guide', url: KPBS_ENDORSEMENTS, summary: 'Party and Reform California endorsements by race.' },
    ],
  },

  // ---------------------------------------------------------------- Council D2
  {
    id: 'oceanside-council-d2',
    categoryId: 'city',
    title: 'Oceanside City Council, District 2',
    tldrLabel: 'Oceanside Council D2',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Oceanside’s City Council has four members elected by district plus a mayor elected citywide. It sets the budget, approves development, and decides how the city spends its sales-tax money.',
      'District 2 covers north and east Oceanside, including Mission San Luis Rey and the South Morro Hills farm area. Agrotourism, cannabis and farmland permits, wildfire readiness, roads and the Measure S sales tax are the main local issues. The incumbent is the only candidate in the race who says he will vote for Measure S.',
    ],
    introParagraphs: [
      'This is a single November contest with five candidates and no runoff: the top vote-getter wins. Councilmember Richard “Rick” Robinson, the city’s retired fire chief, won the seat in 2022. Planning Commissioner Emily Gonzales has the Democratic Party and labor endorsements; Robinson has the Republican Party, Lincoln Club, Chamber of Commerce and city public-safety unions.',
      'inewsource reported in September that Robinson took donations from a cannabis-permit applicant and then voted on the permit, which appears to violate the state Levine Act; he has called it an unintentional mistake. At an October forum, Gonzales, Ricky James and Oscarin Ortega said they would vote against Measure S, and Robinson said he would vote for it (Voice of San Diego).',
    ],
    legalRequirements: COUNCIL_LEGAL,
    qualificationCriteria: COUNCIL_CRITERIA,
    candidates: [
      {
        id: 'ricky-james',
        name: 'Ricky James',
        party: 'NP',
        role: 'Real Estate Broker',
        campaignUrl: 'https://oceanside2026.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'James is a real estate broker with no documented public office, city commission or civic leadership role.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected office or city commission service found.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No public budget role; campaign platform centers on opposing Measure S and spending discipline.' },
            { criterionId: 'landuse', assessment: 'partial', evidence: 'Licensed real estate broker (ballot designation); proposes a community plan for South Morro Hills (campaign site).' },
            { criterionId: 'constituent', assessment: 'unknown', evidence: 'Promises regular office hours; no prior community leadership documented.' },
          ],
        },
        bio: [
          'James, 38, is a real estate broker and father. He has used a wheelchair since a dirt-bike injury at 16 (campaign site). He is registered as an independent and says he will not seek party endorsements or take money from developers, city vendors or PACs.',
          'He filed the public-records request and FPPC complaint about Robinson’s donations from a cannabis-permit applicant (inewsource).',
        ],
        scorecard: [
          { topic: 'Measure S sales tax', position: '✗ Opposes the half-cent increase; wants spending discipline first', comparison: 'Robinson supports S; Gonzales and Ortega also oppose it.' },
          { topic: 'Campaign money', position: '✓✓ No developer, vendor or PAC money; says he had raised $3,623 (campaign site, Oct 2026)', comparison: 'Gonzales also refuses developer money; Robinson took donations he later partly returned.' },
          { topic: 'Growth & land use', position: '✓ Growth only where roads, water and services keep up; wants a South Morro Hills community plan', comparison: 'Robinson emphasizes local control and agrotourism.' },
          { topic: 'Transparency', position: '✓ Promises regular office hours and explaining votes in advance; will return most of his council salary', comparison: 'Gonzales also runs on transparency and accountability.' },
        ],
        money: 'Self-reported $3,623.24 raised since forming his committee, mostly from individuals (campaign site, checked Oct 13, 2026). No independent totals found.',
        endorsements: 'None; says he will not seek party endorsements (campaign site).',
      },
      {
        id: 'oscarin-ortega',
        name: 'Oscarin Ortega',
        party: 'NP',
        role: 'Nonprofit Executive',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Ortega founded and runs a local nonprofit serving youth, seniors and homeless residents. He has not held public office or served on a city commission.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No elected office or city commission service found.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Founder and executive director of the nonprofit Lived Experiences since about 2018–2019 (Rep. Levin press release, 2020); budget size not published.' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'No planning or land-use role documented.' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Lifelong Oceanside resident; named Constituent of the Month by Rep. Mike Levin (Oct 2020) for youth outreach; nonprofit runs mobile food and laundry programs.' },
          ],
        },
        bio: [
          'Ortega is the son of undocumented immigrants, a foster parent and lifelong Oceanside resident who founded Lived Experiences, a nonprofit offering food, laundry and youth support (ballot statement; Rep. Levin press release). His statement lists recognition from Rep. Mike Levin, Mayor Esther Sanchez and Supervisor Jim Desmond.',
          'His priorities include small businesses, tax breaks on necessities for seniors, protecting families from aggressive immigration enforcement, city-owned affordable housing and the San Luis Rey River (Coast News).',
        ],
        scorecard: [
          { topic: 'Measure S sales tax', position: '✗ Said at an October forum he would not vote for it (Voice of San Diego)', comparison: 'Robinson supports S.' },
          { topic: 'Housing', position: '✓ Backs city-owned affordable housing', comparison: 'Gonzales favors housing near transit; Robinson stresses local control.' },
          { topic: 'Immigration enforcement', position: '✓ Wants to protect local families from aggressive immigration policies', comparison: 'Robinson has not made this a campaign issue.' },
          { topic: 'Homelessness & services', position: '✓ Runs direct-service programs through his nonprofit', comparison: 'Robinson points to police and fire staffing.' },
        ],
        money: NO_MONEY,
        endorsements: 'No party or major-organization endorsements found as of Oct 13, 2026.',
        notes: [
          'In July 2026 the city issued a notice of violation saying his nonprofit’s storefront activities needed a conditional use permit, and public programs were paused while it applied (Union-Tribune, as summarized by Hoodline, July 27, 2026): https://hoodline.com/2026/07/permit-flap-stalls-oceanside-nonprofit-s-neighborhood-lifeline-7038404/',
        ],
      },
      {
        id: 'perry-alvarez',
        name: 'Perry Alvarez',
        party: 'NP',
        role: 'Automotive Repair Manager',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Alvarez filed no ballot statement, skipped the October forum, and no public record of civic or government experience was found.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'Ballot designation is Automotive Repair Manager; no further detail found.' },
            { criterionId: 'landuse', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'constituent', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'Alvarez’s ballot designation is Automotive Repair Manager. He did not submit a candidate statement, was not listed in KOCT’s District 2 forum, and was absent from the October forum covered by Voice of San Diego.',
        ],
        scorecard: [
          { topic: 'Measure S sales tax', position: '? No published position', comparison: 'Robinson supports S; the other three challengers oppose it.' },
          { topic: 'Priorities', position: '? No platform found', comparison: 'Other candidates have published platforms.' },
        ],
        money: NO_MONEY,
        endorsements: 'None found.',
      },
      {
        id: 'richard-robinson',
        name: 'Richard Robinson',
        party: 'NP',
        role: 'Oceanside City Councilmember',
        campaignUrl: 'https://www.osided2.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Robinson has held this seat since December 2022. Before that he was Oceanside’s fire chief for about six years, after a fire-service career that began in 1977.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'District 2 councilmember since December 2022; Oceanside fire chief (interim, then permanent) until July 2022 retirement.' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on four city budgets; ran the city fire department budget as chief; says the city’s financial health is his main focus.' },
            { criterionId: 'landuse', assessment: 'met', evidence: 'Votes on development and agricultural permits, including South Morro Hills agrotourism items (campaign site; inewsource).' },
            { criterionId: 'constituent', assessment: 'met', evidence: 'Oceanside resident since 1988; endorsed by the San Diego County Farm Bureau and Oceanside Chamber of Commerce.' },
          ],
        },
        bio: [
          'Robinson is a Navy veteran (Desert Storm-era hospital corpsman) who spent his career in the fire service, including about six years as Oceanside’s fire chief before retiring in July 2022. He won the District 2 seat that November.',
          'He cites Fire Station 9, more police and lifeguard positions, fireworks and e-bike enforcement, trail and road work, support for farmers and agrotourism, and beach sand. He voted to put Measures R and S on the ballot and is the only District 2 candidate supporting S.',
        ],
        recordVsChange:
          'Robinson brings a fire chief’s view of public safety and a farm-friendly record, and he is the only candidate with council experience. The case for change rests on the Levine Act problem with a permit applicant’s donations and on voters who oppose his support for Measure S.',
        scorecard: [
          { topic: 'Measure S sales tax', position: '✓ Will vote for it; ranks beach replenishment as his top priority (Voice of San Diego)', comparison: 'All three challengers who attended the forum oppose S.' },
          { topic: 'Public safety', position: '✓✓ Cites Fire Station 9 and added police and lifeguard positions; endorsed by police, fire and marine safety unions', comparison: 'Gonzales frames safety as “community care and public safety.”' },
          { topic: 'Agriculture & land use', position: '✓ Supports farmers, agrotourism and local control of development', comparison: 'James wants a South Morro Hills community plan; Gonzales favors housing near transit over paving farmland.' },
          { topic: 'Labor/Measure R', position: '✓ Voted to place R on the ballot; named in the Yes rebuttal', comparison: 'Gonzales and her labor endorsers back R.' },
          { topic: 'Ethics & disclosure', position: '~ Took $2,000 from a permit applicant and voted on the permit; returned half after a records request', comparison: 'James and Gonzales refuse developer money.' },
        ],
        money: NO_MONEY,
        endorsements:
          'Republican Party of San Diego County; Reform California; San Diego Lincoln Club (KPBS, Sept 30, 2026). Campaign site also lists the Oceanside Police Officers Association, Oceanside Firefighters Association, Oceanside Marine Safety Employees Association, Oceanside Chamber of Commerce, San Diego County Farm Bureau, Western States Carpenters, Supervisor Jim Desmond and Councilmember Peter Weiss.',
        redFlags: [
          {
            severity: 'serious',
            status: 'documented',
            text: 'inewsource reported (Sept 9, 2026) that Robinson accepted $1,000 each from Dustin and Molly Campbell in October 2025 while Campbell’s cannabis-cultivation permit was pending, then joined a unanimous vote approving the permit in May 2026. The Levine Act bars officials from taking more than $500 from a party with a pending application and voting on it within 12 months. Robinson returned half of each donation in July, after challenger Ricky James requested records; that was outside the window the law allows to fix a violation. Robinson called it “an unintentional mistake” and said he gave the FPPC all relevant materials. James filed an FPPC complaint; no finding has been reported.',
            whyItMatters: 'Councilmembers vote on permits for people who donate to them, which is exactly the conduct the Levine Act regulates.',
            sources: [{ label: 'inewsource (Sept 9, 2026)', url: 'https://inewsource.org/2026/09/09/oceanside-city-council-member-contribution-permit-vote/' }],
          },
        ],
      },
      {
        id: 'emily-gonzales',
        name: 'Emily Gonzales',
        party: 'NP',
        role: 'Director/Facilitator/Mother',
        campaignUrl: 'https://www.d2oside.org/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Gonzales is an appointed Oceanside planning commissioner and a former legislative staffer who has facilitated public-sector labor bargaining. She has not held elected office.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Former staff at the California Legislature; appointed Oceanside Planning Commissioner (ballot statement).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'About 20 years facilitating collective bargaining between public-sector unions and employers; co-executive director of a nonprofit (ballot statement). No public budget-adoption role.' },
            { criterionId: 'landuse', assessment: 'met', evidence: 'Sits on the Oceanside Planning Commission, reviewing land-use decisions (ballot statement; campaign site).' },
            { criterionId: 'constituent', assessment: 'partial', evidence: 'Oceanside resident 20+ years; co-founded The Swell Collective, which trains community organizers.' },
          ],
        },
        bio: [
          'Gonzales is co-executive director of The Swell Collective, a nonprofit that trains organizers in conflict resolution, a small business owner, and the spouse of a retired, disabled Marine. She has spent about 20 years facilitating public-sector labor bargaining and worked as staff at the California Legislature (ballot statement).',
          'She sits on the Oceanside Planning Commission and favors housing near transit over building on open space and farmland. She takes no money from real estate developers.',
        ],
        scorecard: [
          { topic: 'Measure S sales tax', position: '✗ Said she would not vote for it; wants other funding options explored first (Voice of San Diego; campaign site)', comparison: 'Robinson supports S.' },
          { topic: 'Housing & land use', position: '✓ Smart growth near transit; mobile-home protections', comparison: 'Robinson emphasizes local control and agrotourism.' },
          { topic: 'Affordability', position: '✓ Fee and fine reform; mobile home safeguards', comparison: 'James focuses on opposing the tax.' },
          { topic: 'Campaign money', position: '✓ No contributions from real estate developers', comparison: 'Robinson accepted and partly returned donations from a permit applicant.' },
          { topic: 'Labor', position: '✓✓ Endorsed by the San Diego & Imperial Counties Labor Council and Teamsters Joint Council 42', comparison: 'Robinson has police, fire and carpenter unions.' },
        ],
        money: NO_MONEY,
        endorsements:
          'San Diego County Democratic Party; Working Families Party (KPBS, Sept 30, 2026). Campaign site also lists Rep. Mike Levin, Deputy Mayor Eric Joyce, the San Diego & Imperial Counties Labor Council, Teamsters Joint Council 42, Sierra Club, Oceanside Manufactured Homeowners Alliance and local Democratic clubs.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Gonzales', '●', 'Progressive Left voters back the organizer and planning commissioner endorsed by Democrats, labor and the Sierra Club who refuses developer money.'],
      ['EL', 'Gonzales', '●', 'Establishment Liberals follow the Democratic Party, Rep. Levin and labor to the planning commissioner with legislative and bargaining experience.'],
      ['DM', 'Gonzales', '●', 'Democratic Mainstays back the county Democratic Party’s endorsed candidate.'],
      ['OL', 'Ortega', '◐', 'Outsider Left voters are drawn to the immigrant-family nonprofit founder who backs city-owned housing and is not part of any party slate.', 'An experience-first Outsider Left voter could back Robinson for his council and fire-chief record, but would give up an outsider for a Republican-endorsed incumbent with a documented Levine Act problem.'],
      ['SS', '—', '—', 'Stressed Sideliners worried about costs have several anti-tax challengers and an incumbent who backs the tax, with no clear fit.', 'An experience-first Stressed Sideliner could back Robinson, the only candidate with council experience, accepting his support for the sales tax and the Levine Act problem.'],
      ['AR', 'Robinson', '◐', 'Ambivalent Right voters value the retired fire chief’s public-safety record and Chamber backing, tempered by the donation problem.'],
      ['PR', 'James', '○', 'Populist Right voters like the independent who refuses PAC money, opposes the sales tax, and challenged the incumbent’s donations.', 'An experience-first Populist Right voter could back Robinson, the Republican-endorsed incumbent and former fire chief, accepting his support for Measure S and the Levine Act problem.'],
      ['CC', 'Robinson', '◐', 'Committed Conservatives follow the Republican Party and Lincoln Club to the incumbent, though he supports the Measure S tax and the Measure R charter change.'],
      ['FF', 'Robinson', '◐', 'Faith and Flag Conservatives favor the Navy veteran and former fire chief endorsed by the GOP, despite the donation problem.'],
    ]),
    counterArguments: [
      'CC/AR/FF (Robinson ◐): But Robinson took donations from a permit applicant and then voted on the permit, which appears to break the Levine Act, and he backs the Measure S sales tax that the county GOP opposes.',
      'PL/EL/DM (Gonzales ●): But Gonzales has never held elected office, and Robinson’s fire-chief and council record gives him the most direct experience in the race.',
      'PR (James ○): But James has no public-sector experience and very little money, and a five-way split of anti-tax votes makes it likelier the incumbent wins.',
    ],
    readingLinks: [
      { label: 'KOCT: District 2 candidate forum (Sept 23, 2026)', url: 'https://koct.org/videosondemand/2026/9/23/election-2026-live-forum-oceanside-city-council-district-2', summary: 'Forum with Gonzales, James, Ortega and Robinson; Alvarez not listed.' },
      { label: 'Voice of San Diego: Oceanside voters decide another sales tax (Oct 7, 2026)', url: 'https://voiceofsandiego.org/2026/10/07/oceanside-voters-to-decide-on-another-sales-tax-measure/', summary: 'Where the District 2 candidates stand on Measure S and their top priorities.' },
      { label: 'inewsource: Robinson returned donations after apparent Levine Act violation (Sept 9, 2026)', url: 'https://inewsource.org/2026/09/09/oceanside-city-council-member-contribution-permit-vote/', summary: 'Timeline of the donations, the permit vote, and Robinson’s response.' },
      { label: 'KPBS: 2026 endorsement guide', url: KPBS_ENDORSEMENTS, summary: 'Party, Lincoln Club and Reform California endorsements by race.' },
    ],
  },

  // ---------------------------------------------------------------- OUSD Area 1
  {
    id: 'oceanside-usd-trustee-area-1',
    categoryId: 'school',
    title: 'Oceanside Unified School District, Trustee Area 1',
    tldrLabel: 'Oceanside Unified, Area 1',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Oceanside Unified runs the city’s public elementary, middle and high schools under a five-member elected board. Trustees adopt the budget, approve curriculum and school closures, oversee bond projects, and hire the superintendent.',
      'Area 1 covers coastal and downtown Oceanside. The challenger is running on low test scores and spending accountability; the incumbent is running on counseling, mental-health services and keeping the budget balanced.',
    ],
    introParagraphs: [
      'This is a single November contest. Trustee Nancy Licona, a school counselor, won the seat in 2022 against a Republican-endorsed candidate and is seeking a second term. Her challenger, retired Navy Lieutenant Commander Jerry Garcia Avila, has the endorsement of the classified-staff union chapter (CSEA Chapter 370), per his campaign. The county Democratic Party endorses Licona; the county GOP made no endorsement.',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'jerry-garcia-avila',
        name: 'Jerry Garcia Avila',
        party: 'NP',
        role: 'Retired Lieutenant Commander',
        campaignUrl: 'https://jerrygarcia4ousd.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Garcia Avila had a 25-year Navy career in personnel and administrative roles and holds education-leadership degrees and a substitute permit. He has not served on a school board.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Navy officer in charge of a personnel support detachment and executive officer of a transient personnel unit (campaign site); no board service.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No public budget role documented.' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'M.A. in postsecondary education leadership (SDSU) and California substitute teaching permit; says he works inside Oceanside Unified, but no school or role is named.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Endorsed by CSEA Oceanside Chapter 370, per his campaign site.' },
          ],
        },
        bio: [
          'Garcia Avila is a retired Navy lieutenant commander who rose from enlisted personnelman, with two Persian Gulf deployments and staff work for the Chief of Naval Operations (campaign site). He holds master’s degrees in global leadership (USD) and postsecondary education leadership (SDSU).',
          'His ballot statement calls Oceanside Unified’s test scores poor and promises “back to basics” instruction and strict fiscal transparency. He says he works inside the district, but has not said in what role.',
        ],
        scorecard: [
          { topic: 'Academics', position: '✓✓ Back to basics in reading, writing and math; cites poor test scores', comparison: 'Licona stresses rigorous programs and equitable opportunity.' },
          { topic: 'Budget & transparency', position: '✓ Wants strict fiscal transparency and more money reaching classrooms', comparison: 'Licona cites keeping the budget balanced.' },
          { topic: 'Classroom discipline', position: '✓ Supports teacher-led instruction and clear behavior expectations (campaign site)', comparison: 'Licona emphasizes mental-health services.' },
          { topic: 'Career pathways', position: '✓ College, trades, military and entrepreneurship pathways', comparison: 'Licona cites college-access and continuation-school experience.' },
        ],
        money: NO_MONEY,
        endorsements: 'CSEA Oceanside Chapter 370 (per his campaign site). No party endorsement (KPBS, Sept 30, 2026).',
      },
      {
        id: 'nancy-licona',
        name: 'Nancy Licona',
        party: 'NP',
        role: 'School Counselor',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Licona has been the Area 1 trustee since December 2022 and has worked as a school counselor in the area for 11 years.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Oceanside Unified trustee, Area 1, term ending 2026 (district board page); four years on the board (ballot statement).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on four district budgets; says she worked to keep the budget balanced (ballot statement).' },
            { criterionId: 'instruction', assessment: 'met', evidence: 'School counselor for 11 years; earlier worked in college-access, after-school and continuation-school programs (ballot statement).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Abstained on the Reynolds Elementary closure because soil-safety information was not available in Spanish to all families (10News).' },
          ],
        },
        bio: [
          'Licona is a school counselor (reported in 2022 as working in Vista Unified) who won the Area 1 seat in 2022 with Democratic Party and Oceanside Teachers Association backing. She has worked in college-access, after-school and continuation-school programs.',
          'On the board she has pushed for mental-health services and rigorous academic programs. When the board voted 3-1 to close Reynolds Elementary over soil liquefaction risk, she abstained, saying families had not received the information in Spanish (10News).',
        ],
        recordVsChange:
          'Licona brings four years on the board and a counselor’s view of student needs. The case for change, made by her challenger, is that district test scores remain low and spending needs closer scrutiny.',
        scorecard: [
          { topic: 'Student well-being', position: '✓✓ Mental-health services and supportive schools', comparison: 'Garcia Avila stresses discipline and basics.' },
          { topic: 'Academics', position: '✓ Rigorous programs and equitable opportunity', comparison: 'Garcia Avila calls test scores poor and wants “back to basics.”' },
          { topic: 'Budget', position: '✓ Cites a balanced (“fiscally solvent”) budget', comparison: 'Garcia Avila demands stricter fiscal transparency.' },
          { topic: 'Family engagement', position: '✓ Abstained on a school closure over Spanish-language access', comparison: 'Garcia Avila has not addressed language access.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party (KPBS, Sept 30, 2026; party slate).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Licona', '●', 'Progressive Left voters back the Democratic-endorsed counselor focused on mental health, equity and Spanish-language access.'],
      ['EL', 'Licona', '●', 'Establishment Liberals value the incumbent’s counseling background and four years on the board.'],
      ['DM', 'Licona', '●', 'Democratic Mainstays follow the county Democratic Party to the incumbent.'],
      ['OL', 'Licona', '◐', 'Outsider Left voters like her equity focus, though some may be drawn to the challenger’s critique of district results.'],
      ['SS', '—', '—', 'Stressed Sideliners hear a plausible pitch from both sides and have no clear fit.', 'An experience-first Stressed Sideliner can back Licona, who has four years on this board and 11 as a counselor, over a first-time candidate.'],
      ['AR', 'Garcia Avila', '○', 'Ambivalent Right voters may like the veteran’s call for basics and fiscal transparency, without a party signal either way.', 'An experience-first Ambivalent Right voter could keep Licona, who already knows the district budget, giving up a challenger whose message on basics they may prefer.'],
      ['PR', 'Garcia Avila', '◐', 'Populist Right voters favor the outsider who says the district is failing on test scores.', 'Populist Right voters who weigh experience could stick with Licona’s four years on the board, giving up the challenger’s accountability message.'],
      ['CC', 'Garcia Avila', '◐', 'Committed Conservatives prefer the retired Navy officer running on basics and fiscal accountability over a Democratic-endorsed trustee, though the GOP made no endorsement.', 'Committed Conservatives focused on competence could accept Licona’s board and counseling experience, while giving up a challenger closer to their priorities.'],
      ['FF', 'Garcia Avila', '◐', 'Faith and Flag Conservatives value the veteran’s service and emphasis on discipline and basics.', 'An experience-first Faith and Flag voter could back Licona for her years on the board, giving up the veteran’s back-to-basics agenda.'],
    ]),
    counterArguments: [
      'PL/EL (Licona ●): But the district’s test scores, which her challenger calls poor, are part of her record after four years on the board.',
      'CC/PR (Garcia Avila ◐): But Garcia Avila has not said what role he holds inside the district, and he has no board or school budget experience.',
    ],
    readingLinks: [
      { label: 'North County Chronicle: November ballot guide', url: 'https://northcountychronicle.com/articles/election/north-county-voters-face-a-full-ballot-this-november/', summary: 'Lists the Oceanside Unified contests and ballot designations.' },
      { label: 'Oceanside Unified: board elections page', url: 'https://www.oside.us/our-district/board-of-education/elections', summary: 'Current trustees and term dates.' },
    ],
  },

  // ---------------------------------------------------------------- OUSD Area 3
  {
    id: 'oceanside-usd-trustee-area-3',
    categoryId: 'school',
    title: 'Oceanside Unified School District, Trustee Area 3',
    tldrLabel: 'Oceanside Unified, Area 3',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'Oceanside Unified runs the city’s public schools under a five-member elected board that adopts the budget, approves curriculum and school closures, and hires the superintendent.',
      'Area 3 covers parts of north and northeast Oceanside. Board President Stacy Begin is not running, so the seat is open. The race pits a teachers-union–backed education leader against a Republican-endorsed Oceanside Unified graduate and business owner.',
    ],
    introParagraphs: [
      'This is a single November contest. Joey Pearson is endorsed by the Oceanside Teachers Association, the county Democratic Party, the Sierra Club and outgoing trustee Begin. Nicole Watson is endorsed by the Republican Party of San Diego County; Reform California made no endorsement (KPBS, Sept 30, 2026).',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'nicole-watson',
        name: 'Nicole Watson',
        party: 'NP',
        role: 'Businesswoman/Mother',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Watson owns an educational services business and describes herself as an educator. She has not served on a board, and her teaching history is not detailed.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board or elected service documented.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Owns an educational services business (ballot statement); size not published.' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'Describes herself as an educator who helps students through her business; no classroom post or credential documented.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Attended Oceanside Unified from kindergarten through graduation; current district parent (ballot statement).' },
          ],
        },
        bio: [
          'Watson, 35, is an Oceanside Unified graduate, a mother and the owner of an educational services business (ballot statement). Her statement lists her as “Educator/Business Owner”; her ballot designation is Businesswoman/Mother.',
          'She is running on academic excellence, transparency and accountability, and partnerships with families.',
        ],
        scorecard: [
          { topic: 'Academics', position: '✓ Academic excellence; ties schools to family partnerships', comparison: 'Pearson stresses math and literacy plus bilingual and special education.' },
          { topic: 'Transparency', position: '✓ Promises transparency and accountability', comparison: 'Pearson promises transparent budgets and program reviews.' },
          { topic: 'Parents & families', position: '✓ Partnerships among students, families and educators', comparison: 'Pearson emphasizes listening and belonging.' },
          { topic: 'Ideology', position: '✓ Republican Party–endorsed', comparison: 'Pearson is Democratic- and teachers-union–endorsed.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County (KPBS, Sept 30, 2026; party voter guide).',
      },
      {
        id: 'joey-pearson',
        name: 'Joey Pearson',
        party: 'NP',
        role: 'Professional Learning Director',
        campaignUrl: 'https://www.pearsonforousd.com/',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Pearson is a former North County public-school teacher with a UCLA education doctorate who now directs professional-learning programs. He serves on education boards but has not been a school trustee.',
          criteria: [
            { criterionId: 'governance', assessment: 'partial', evidence: 'Says he serves on education boards and accreditation teams (ballot statement); boards not named.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Leads teams building professional-learning programs (ballot statement); no public budget role documented.' },
            { criterionId: 'instruction', assessment: 'met', evidence: 'Former public-school teacher in North County; designed curriculum, coached teachers, and led teacher-preparation programs; Ed.D., UCLA (ballot statement).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Endorsed by the Oceanside Teachers Association and outgoing trustee Stacy Begin (campaign site).' },
          ],
        },
        bio: [
          'Pearson, 34, began as a public-school teacher in North County and went on to design curriculum, coach teachers and lead teacher-preparation programs. He holds an education doctorate from UCLA and now directs programs on using new technology, including AI, in learning (ballot statement).',
          'He is running on math and literacy, bilingual and special education, student well-being, career pathways and AI readiness.',
        ],
        scorecard: [
          { topic: 'Academics', position: '✓✓ Math and literacy; bilingual and special education', comparison: 'Watson stresses academic excellence in general terms.' },
          { topic: 'Technology/AI', position: '✓ Practical AI training for teachers', comparison: 'Watson has not addressed technology.' },
          { topic: 'Student well-being', position: '✓ Safety plans, mental-health and behavioral supports', comparison: 'Watson emphasizes safe, supportive schools.' },
          { topic: 'Budget', position: '✓ Transparent budgets and reviews of whether programs work', comparison: 'Watson promises transparency and accountability.' },
          { topic: 'Ideology', position: '✓ Democratic Party– and teachers-union–endorsed', comparison: 'Watson is Republican Party–endorsed.' },
        ],
        money: NO_MONEY,
        endorsements:
          'San Diego County Democratic Party (as Joseph Allen Pearson); Oceanside Teachers Association; Sierra Club; San Diego Democratic Education Alliance; local Democratic clubs; OUSD Board President Stacy Begin (party slate; campaign site, Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Pearson', '●', 'Progressive Left voters back the teacher-endorsed candidate focused on bilingual and special education and student well-being.'],
      ['EL', 'Pearson', '●', 'Establishment Liberals value his teaching and teacher-training background and backing from the outgoing board president.'],
      ['DM', 'Pearson', '●', 'Democratic Mainstays follow the Democratic Party and teachers union.'],
      ['OL', 'Pearson', '◐', 'Outsider Left voters lean to Pearson’s equity agenda, though he is the establishment pick.'],
      ['SS', 'Pearson', '○', 'Stressed Sideliners lean slightly toward the candidate with classroom experience in an open seat with little partisan heat.'],
      ['AR', 'Watson', '○', 'Ambivalent Right voters lean to the Republican-endorsed local graduate and business owner, weakly.'],
      ['PR', 'Watson', '◐', 'Populist Right voters prefer the businesswoman and parent over the teachers-union candidate.'],
      ['CC', 'Watson', '◐', 'Committed Conservatives follow the Republican Party endorsement, though Watson has said little about policy.'],
      ['FF', 'Watson', '◐', 'Faith and Flag Conservatives favor the GOP-endorsed mother and alumna over a union-backed candidate.'],
    ]),
    counterArguments: [
      'CC/PR (Watson ◐): But Watson has published few specifics and has no board experience, while Pearson has trained teachers and designed curriculum.',
      'PL/EL (Pearson ●): But Pearson, like Watson, has never served on a school board, and his union backing may make it harder to hold the line in contract talks.',
    ],
    readingLinks: [
      { label: 'North County Chronicle: November ballot guide', url: 'https://northcountychronicle.com/articles/election/north-county-voters-face-a-full-ballot-this-november/', summary: 'Lists the Oceanside Unified contests and ballot designations.' },
      { label: 'KPBS: 2026 endorsement guide', url: KPBS_ENDORSEMENTS, summary: 'Party endorsements by race.' },
    ],
  },

  // ---------------------------------------------------------------- OUSD Area 4
  {
    id: 'oceanside-usd-trustee-area-4',
    categoryId: 'school',
    title: 'Oceanside Unified School District, Trustee Area 4',
    tldrLabel: 'Oceanside Unified, Area 4',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Oceanside Unified runs the city’s public schools under a five-member elected board that adopts the budget, approves curriculum and school closures, and hires the superintendent.',
      'Area 4 covers parts of north Oceanside. The incumbent, a longtime trustee who has served as board president, faces a veteran teacher endorsed by the Republican Party and Reform California.',
    ],
    introParagraphs: [
      'This is a single November contest. Raquel “Rockie” Riojas Alvarez ran as the incumbent in 2022 and won another term; she was board president when the board voted to close Reynolds Elementary. Jason Bethurum has taught since 2002 in another district and has lived in Oceanside since 2006. The county Democratic Party endorses Alvarez; the county GOP and Reform California endorse Bethurum (KPBS, Sept 30, 2026).',
    ],
    legalRequirements: SCHOOL_LEGAL,
    qualificationCriteria: SCHOOL_CRITERIA,
    candidates: [
      {
        id: 'raquel-riojas-alvarez',
        name: 'Raquel Riojas Alvarez',
        party: 'NP',
        role: 'Governing Board Member, Oceanside Unified School District',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Alvarez has served on this board for more than one term, including as clerk, vice president and president. She is not an educator by profession.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Area 4 trustee; ran as the incumbent in 2022; has served as board clerk, vice president and president (district bio; Coast News; 10News).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'Has voted on several district budgets; cites passing a facilities bond (ballot statement).' },
            { criterionId: 'instruction', assessment: 'partial', evidence: 'Cites curriculum updates and goals for special education and English learners; studying education at Grand Canyon University since 2019 (2022 reporting).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Long-time involved district parent; ballot designation in her statement is Community Advocate.' },
          ],
        },
        bio: [
          'Alvarez became involved as a district parent and has served on the board for more than one term, including as board president. In 2022 she was reported to work at an auto-repair business and to be studying education at Grand Canyon University.',
          'She cites a facilities bond, curriculum updates, and goals for special education and English learners. As president she announced the board’s 3-1 vote to close Reynolds Elementary over soil liquefaction risk, a decision parents criticized as rushed (10News).',
        ],
        recordVsChange:
          'Alvarez offers continuity and experience leading the board through a bond and a school closure. The case for change is that she has no classroom background, and parents criticized the board’s handling of the Reynolds closure.',
        scorecard: [
          { topic: 'Facilities', position: '✓ Cites passing a bond to improve facilities', comparison: 'Bethurum stresses responsible stewardship of taxpayer dollars.' },
          { topic: 'Special ed & English learners', position: '✓ Clear goals for special education and English learners', comparison: 'Bethurum says every student learns differently.' },
          { topic: 'Family engagement', position: '✓ More engagement with parents and staff', comparison: 'Bethurum promises transparency and collaboration.' },
          { topic: 'Ideology', position: '✓ Democratic Party–endorsed', comparison: 'Bethurum is Republican- and Reform California–endorsed.' },
        ],
        money: NO_MONEY,
        endorsements: 'San Diego County Democratic Party (KPBS, Sept 30, 2026; party slate).',
      },
      {
        id: 'jason-bethurum',
        name: 'Jason Bethurum',
        party: 'NP',
        role: 'Teacher/Father',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Bethurum has been a classroom teacher since 2002 and is a longtime Oceanside parent. He has not served on a school board.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board or elected service documented.' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No budget role documented.' },
            { criterionId: 'instruction', assessment: 'met', evidence: 'Classroom teacher since 2002 in a district he does not name (ballot statement).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Oceanside resident since 2006; two sons graduated from Oceanside schools (ballot statement).' },
          ],
        },
        bio: [
          'Bethurum has taught since 2002 in a district he describes as recognized for excellence, and has lived in Oceanside since 2006. His two sons graduated from Oceanside schools and went on to four-year universities (ballot statement).',
          'He is running on supporting teachers, responsible stewardship of taxpayer dollars, and transparency.',
        ],
        scorecard: [
          { topic: 'Teachers', position: '✓ Supporting teachers; brings classroom experience', comparison: 'Alvarez cites collaboration with teachers and staff.' },
          { topic: 'Budget', position: '✓ Responsible stewardship of taxpayer dollars', comparison: 'Alvarez cites a facilities bond.' },
          { topic: 'Transparency', position: '✓ Transparency, accountability and collaboration', comparison: 'Alvarez emphasizes family engagement.' },
          { topic: 'Ideology', position: '✓ Republican Party– and Reform California–endorsed', comparison: 'Alvarez is Democratic-endorsed.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County; Reform California (KPBS, Sept 30, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Alvarez', '●', 'Progressive Left voters back the Democratic-endorsed trustee focused on English learners and special education.'],
      ['EL', 'Alvarez', '◐', 'Establishment Liberals value her board leadership, though some would prefer a trustee with classroom experience.'],
      ['DM', 'Alvarez', '●', 'Democratic Mainstays follow the county Democratic Party to the incumbent.'],
      ['OL', 'Alvarez', '◐', 'Outsider Left voters lean to the parent-turned-trustee over the Reform California pick.'],
      ['SS', '—', '—', 'Stressed Sideliners see a veteran teacher and a veteran trustee and have no clear fit.', 'An experience-first Stressed Sideliner can back Alvarez, who has led this board, over a teacher with no board experience.'],
      ['AR', 'Bethurum', '○', 'Ambivalent Right voters like a classroom teacher who talks about spending tax dollars responsibly.', 'An experience-first Ambivalent Right voter could keep Alvarez, a former board president, giving up a teacher whose message they may prefer.'],
      ['PR', 'Bethurum', '◐', 'Populist Right voters favor the Reform California–backed challenger over a long-serving incumbent.', 'Populist Right voters who weigh experience could stick with Alvarez’s years leading the board, giving up a change in direction.'],
      ['CC', 'Bethurum', '●', 'Committed Conservatives follow the Republican Party and Reform California to the teacher who stresses stewardship of taxpayer dollars.'],
      ['FF', 'Bethurum', '◐', 'Faith and Flag Conservatives back the GOP-endorsed father and teacher.', 'An experience-first Faith and Flag voter could back Alvarez for her board leadership, giving up the party-endorsed challenger.'],
    ]),
    counterArguments: [
      'PL/DM (Alvarez ●): But Alvarez has no classroom background, and parents said the board she led handled the Reynolds closure without enough notice.',
      'CC (Bethurum ●): But Bethurum has no board or budget experience, and his platform is short on specifics.',
    ],
    readingLinks: [
      { label: '10News: OUSD board votes to close Reynolds Elementary', url: 'https://www.10news.com/news/local-news/oceanside-unified-school-district-board-votes-to-shut-down-reynolds-elementary-school', summary: 'The 3-1 vote, soil-safety reasons and parent criticism.' },
      { label: 'North County Chronicle: November ballot guide', url: 'https://northcountychronicle.com/articles/election/north-county-voters-face-a-full-ballot-this-november/', summary: 'Lists the Oceanside Unified contests and ballot designations.' },
    ],
  },

  // ---------------------------------------------------------------- Tri-City Zone 2
  {
    id: 'tri-city-healthcare-zone-2',
    categoryId: 'district',
    title: 'Tri-City Healthcare District, Zone 2',
    tldrLabel: 'Tri-City Healthcare, Zone 2',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The Tri-City Healthcare District owns Tri-City Medical Center in Oceanside and is governed by an elected board chosen by zone. In June 2026, voters approved Measure H (about 92% Yes in early returns, North Coast Current), a long-term deal under which Sharp HealthCare now runs the hospital as Sharp Tri-City Medical Center.',
      'With Sharp now running day-to-day operations, the board’s main job is oversight. Sharp has committed $100 million over five years plus seismic upgrades (KPBS), and the board checks whether services such as labor and delivery are restored and whether the public’s assets are protected.',
    ],
    introParagraphs: [
      'This is a single November contest. Zone 2 trustee Rocky Chavez’s term ends in 2026 and he is not on the ballot, so the seat is open. Former Oceanside Councilmember Jerry Kern is endorsed by the Republican Party and Reform California. Registered nurse Kayla Lauriano is endorsed by the Democratic Party, Working Families Party and building trades. Nurse case manager Marilyn Piek has no listed party endorsements.',
    ],
    legalRequirements: HOSPITAL_LEGAL,
    qualificationCriteria: HOSPITAL_CRITERIA,
    candidates: [
      {
        id: 'jerome-kern',
        name: 'Jerome M. Kern',
        party: 'NP',
        role: 'Retired City Councilmember',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Kern served 12 years on the Oceanside City Council (2006–2018). He has no documented health care background.',
          criteria: [
            { criterionId: 'governance', assessment: 'met', evidence: 'Oceanside councilmember 2006–2018, elected three times (North Coast Current).' },
            { criterionId: 'finance', assessment: 'met', evidence: 'Voted on 12 years of city budgets; cites strategic planning and financial oversight (ballot statement).' },
            { criterionId: 'healthcare', assessment: 'unknown', evidence: 'No health care work documented; in 2020 he publicly endorsed Tri-City board candidates (Coast News).' },
            { criterionId: 'partner', assessment: 'partial', evidence: 'Pledges to hold Sharp to its modernization and service commitments (ballot statement); no contract-oversight role documented.' },
          ],
        },
        bio: [
          'Kern is a retired educator and Air Force veteran who has lived in Oceanside since 1975 (Coast News). He served on the City Council from 2006 to 2018 and ran unsuccessfully for county supervisor in 2018.',
          'His ballot statement focuses on holding Sharp to its commitments, financial strength, transparency and local accountability.',
        ],
        scorecard: [
          { topic: 'Sharp partnership oversight', position: '✓✓ Will hold Sharp to its commitments to modernize and restore services', comparison: 'Lauriano and Piek do not mention Sharp in their statements.' },
          { topic: 'Finances', position: '✓ Financial strength and safeguarding public resources', comparison: 'Lauriano also pledges fiscal responsibility.' },
          { topic: 'Health care workforce', position: '? Not addressed', comparison: 'Lauriano wants investment in the health care workforce.' },
          { topic: 'Ideology', position: '✓ Republican Party– and Reform California–endorsed', comparison: 'Lauriano is Democratic- and labor-endorsed.' },
        ],
        money: NO_MONEY,
        endorsements: 'Republican Party of San Diego County; Reform California (KPBS, Sept 30, 2026).',
        notes: [
          'In 2016, after City Treasurer Gary Ernst died while still on the ballot, Kern urged voters to re-elect him anyway so the council could appoint a replacement; the losing challenger filed an FPPC complaint against the city (WWNO/NPR, Nov 10, 2016): https://www.wwno.org/2016-11-10/dead-man-wins-city-election-in-california-female-rival-calls-foul',
        ],
      },
      {
        id: 'marilyn-piek',
        name: 'Marilyn Piek',
        party: 'NP',
        role: 'Registered Nurse, Genex Services',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Piek has 50 years as a registered nurse, recently as a nurse case manager, and has worked at three North County district hospitals. She has no public board experience.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board or elected service documented.' },
            { criterionId: 'finance', assessment: 'unknown', evidence: 'No finance role documented.' },
            { criterionId: 'healthcare', assessment: 'met', evidence: 'Registered nurse for 50 years; nurse case manager; worked at three North County district hospitals (ballot statement).' },
            { criterionId: 'partner', assessment: 'unknown', evidence: 'Does not address the Sharp partnership.' },
          ],
        },
        bio: [
          'Piek has been a registered nurse for 50 years and has lived in Oceanside since 2002. As a nurse case manager she has worked with every hospital in San Diego County, including three North County district hospitals (ballot statement).',
          'She is running to keep quality services available locally and make sure district tax dollars have lasting impact.',
        ],
        scorecard: [
          { topic: 'Patient services', position: '✓ Availability of local services and resources', comparison: 'Lauriano emphasizes access and workforce; Kern emphasizes Sharp oversight.' },
          { topic: 'Sharp partnership oversight', position: '? Not addressed', comparison: 'Kern makes it his central issue.' },
          { topic: 'Finances', position: '✓ Wants district tax dollars to be “impactful for generations”', comparison: 'Kern cites financial oversight experience.' },
        ],
        money: NO_MONEY,
        endorsements: 'None found.',
      },
      {
        id: 'kayla-lauriano',
        name: 'Kayla Lauriano',
        party: 'NP',
        role: 'Registered Nurse, MiraCosta College',
        campaignUrl: 'https://kaylalauriano.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Lauriano has 17 years as a registered nurse, including high-risk labor and delivery and NICU, and has worked as a charge nurse and educator. She has no public board experience.',
          criteria: [
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No board or elected service documented.' },
            { criterionId: 'finance', assessment: 'unknown', evidence: 'No finance role documented; pledges fiscal responsibility.' },
            { criterionId: 'healthcare', assessment: 'met', evidence: 'Registered nurse for 17 years in labor and delivery, antepartum, postpartum, Level III NICU and student health; charge nurse and educator (ballot statement; campaign site).' },
            { criterionId: 'partner', assessment: 'unknown', evidence: 'Does not address the Sharp partnership.' },
          ],
        },
        bio: [
          'Lauriano, 38, was born at Tri-City, raised on Camp Pendleton, and has lived in Oceanside for more than 20 years. She has been a registered nurse for 17 years, mostly in women’s health, and now works in student health at MiraCosta College (ballot statement).',
          'She is running to bring a frontline nursing perspective, expand access, invest in the health care workforce, and promote transparency.',
        ],
        scorecard: [
          { topic: 'Access to care', position: '✓✓ Expand access; culturally responsive care', comparison: 'Kern focuses on restoring services through Sharp.' },
          { topic: 'Health care workforce', position: '✓ Invest in nurses and staff amid shortages', comparison: 'Kern does not address workforce.' },
          { topic: 'Sharp partnership oversight', position: '? Not addressed', comparison: 'Kern makes it central.' },
          { topic: 'Ideology', position: '✓ Democratic Party–, Working Families– and labor-endorsed', comparison: 'Kern is Republican- and Reform California–endorsed.' },
        ],
        money: NO_MONEY,
        endorsements:
          'San Diego County Democratic Party; Working Families Party (KPBS, Sept 30, 2026). Campaign site lists Rep. Mike Levin, State Sen. Akilah Weber Pierson, Mayor Esther Sanchez and Deputy Mayor Eric Joyce; DSA San Diego’s guide also lists the San Diego County Building & Construction Trades Council and local Democratic clubs.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Lauriano', '●', 'Progressive Left voters back the frontline nurse endorsed by Democrats, Working Families and labor who stresses access and the workforce.'],
      ['EL', 'Lauriano', '◐', 'Establishment Liberals follow the party and Rep. Levin to Lauriano, though Kern’s governance record matters for overseeing Sharp.'],
      ['DM', 'Lauriano', '●', 'Democratic Mainstays follow the county Democratic Party.'],
      ['OL', 'Lauriano', '◐', 'Outsider Left voters like a bedside nurse over a career politician.'],
      ['SS', '—', '—', 'Stressed Sideliners care about access to nearby care but have no clear pick among three candidates.', 'An experience-first Stressed Sideliner could back Kern, whose 12 years on the City Council fit the board’s oversight role, giving up the nurses’ hands-on view of patient care.'],
      ['AR', 'Kern', '◐', 'Ambivalent Right voters value Kern’s financial-oversight experience and focus on holding Sharp to its promises.'],
      ['PR', 'Kern', '◐', 'Populist Right voters follow Reform California to Kern, though he is a long-time insider.'],
      ['CC', 'Kern', '●', 'Committed Conservatives back the Republican-endorsed former councilmember focused on stewardship of public assets.'],
      ['FF', 'Kern', '◐', 'Faith and Flag Conservatives favor the GOP-endorsed Air Force veteran.'],
    ]),
    counterArguments: [
      'CC/AR (Kern ●/◐): But Kern has no health care background, and in 2016 he urged voters to elect a dead candidate so the council could pick a replacement, which critics saw as sidestepping voters.',
      'PL/DM (Lauriano ●): But Lauriano has no board or finance experience and has not said how she would oversee the Sharp agreement, now the board’s main job.',
    ],
    readingLinks: [
      { label: 'KPBS: Tri-City’s deal with Sharp (Nov 12, 2025)', url: 'https://www.kpbs.org/news/health/2025/11/12/tri-citys-new-deal-with-sharp-aims-to-preserve-core-services-and-modernize-care', summary: 'What Sharp committed to and why the district sought a partner.' },
      { label: 'Tri-City: board of directors and zones', url: 'https://tricitymed.org/about-us/board-of-directors/', summary: 'Current board members and zone terms.' },
      { label: 'North County Chronicle: November ballot guide', url: 'https://northcountychronicle.com/articles/election/north-county-voters-face-a-full-ballot-this-november/', summary: 'Lists the Tri-City Zone 2 candidates.' },
    ],
  },

  // ---------------------------------------------------------------- Measure R
  {
    id: 'oceanside-measure-r',
    categoryId: 'local-measures',
    title: 'Oceanside Measure R — Charter change: prevailing wage and project labor agreements',
    tldrLabel: 'Oceanside Measure R — Prevailing wage/PLAs',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Oceanside’s 2010 City Charter generally exempts the city from state public-works contracting laws and bars the city from requiring project labor agreements (PLAs). Since then, state laws (SB 7, SB 922, SB 829) have cut off state construction money to charter cities whose rules conflict with state prevailing-wage and PLA laws.',
      'Measure R would write state prevailing-wage rules into the charter for all public works and let the Council, by majority vote, use or require a PLA on specific city projects. Supporters say it locks in state funding and fair wages; opponents say the city already qualifies and that PLAs raise costs and shut out non-union contractors.',
    ],
    introParagraphs: [
      'Mayor Esther Sanchez and Deputy Mayor Eric Joyce brought the idea forward in May 2026. The Council advanced it 4-1, with Councilmember Peter Weiss opposed, and gave final approval on June 3 with Weiss absent (Coast News). The city attorney’s analysis says the city has kept its state-funding eligibility by interpreting the charter and state law together, and that R would “ensure” continued eligibility.',
      'Labor and the county Democratic Party back R. The county GOP voter guide takes no position on it. No public polling or fundraising totals were found.',
    ],
    measure: {
      question:
        'To preserve the City’s ability to continue receiving state infrastructure funding for public works projects, shall the Oceanside City Charter be amended to conform to state laws and best practices regarding prevailing wage and fair competition, including the use of project labor agreements for City public works with mandatory provisions for taxpayer protections, transparency, and accountability in the contracting process, by amending Sections 301, 302, and 303 of the Oceanside City Charter?',
      yesMeans:
        'Amends the City Charter to require state prevailing wages on all city public works and to let the Council choose, project by project, to use or require project labor agreements.',
      noMeans:
        'Keeps the 2010 charter language that limits prevailing wage and bars requiring PLAs; the city keeps relying on its current reading of state law to stay eligible for state construction money.',
      funding: {
        asOf: 'Oct. 13, 2026',
        note:
          'A Yes committee, “Yes on R Oceanside” (YesOnROceanside.org), is raising money; it does not post totals or funders. No No committee was found. City filings are on the Oceanside NetFile portal, which can only be searched interactively, so totals could not be checked.',
        sources: [
          { label: 'Yes on R Oceanside (campaign site)', url: 'https://yesonroceanside.org/' },
          { label: 'City of Oceanside campaign filings (NetFile portal)', url: NETFILE_OCEANSIDE },
        ],
      },
      positions: [{ org: 'San Diego County Democratic Party', kind: 'party', position: 'Yes', url: 'https://www.sddemocrats.org/propositions--ballot-measures.html' }],
      measureType: 'Charter amendment (placed by City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'The city attorney says R would ensure continued eligibility for state infrastructure funding. No dollar estimate was published. Supporters cite money at risk; opponents cite studies saying PLAs raise project costs by 15–30%.',
      supporters:
        'Ballot argument signed by Mayor Esther Sanchez, Police and Fire Commissioner Terence Webster, the Middle Class Taxpayers Association, a sheet-metal apprenticeship training director and a Veterans in Piping instructor; rebuttal names Councilmembers Joyce, Figueroa and Robinson. Also backed by the San Diego Building & Construction Trades Council, the Labor Council, the Union Veterans Council, Rep. Mike Levin and the county Democratic Party.',
      opponents:
        'Ballot argument signed by residents Sandra Levee, Colette Kelley, Adrianne Silveria, James Silveria (Teamsters truck driver) and Rafael Martinez. Councilmember Peter Weiss voted against placing it on the ballot.',
      voterConnection: [
        'You pay for city construction through taxes, so whether PLAs save money (through fewer delays and strikes) or cost more (through less competition) affects what streets, pier and fire-station work costs.',
        'Construction workers and apprentices, including veterans in trade programs, are the most directly affected; non-union local contractors say PLAs make it harder for them to win city work.',
        'If state funding were cut off, the city would have less money for road and infrastructure projects; opponents say that risk does not exist today.',
        'R does not raise any tax.',
      ],
      mechanismBullets: [
        'Section 301: adds that keeping eligibility for state and federal grants is essential and that city contracting rules must meet grant requirements.',
        'Section 302: requires all public works contracts (as defined in Labor Code § 1782) to follow state prevailing-wage law.',
        'Section 303: keeps the general ban on requiring labor agreements, but lets the Council, by majority vote, use or require a PLA for specific projects.',
        'Any PLA must include the five protections in Public Contract Code § 2500: no discrimination (including on union membership), all qualified contractors may bid, a drug-testing protocol, no strikes or lockouts, and neutral arbitration.',
        'The city attorney says the city already pays prevailing wage under state law and confirmed its eligibility with the Department of Industrial Relations in 2014.',
      ],
      argumentsFor: [
        'Makes the charter match state law so Oceanside’s state infrastructure money is never in doubt; the city attorney says R would ensure continued eligibility.',
        'Puts the city’s existing prevailing-wage practice in the charter, protecting local construction wages.',
        'PLAs can add apprenticeship, local-hire and veteran-hiring goals, along with no-strike guarantees.',
        'Every PLA must include state taxpayer protections, and the Council decides case by case.',
      ],
      argumentsAgainst: [
        'Opponents say the city already complies with state law and is not at risk of losing funding.',
        'Opponents cite studies (RAND, a New Jersey study) finding PLAs add 15–30% to project costs.',
        'Opponents argue PLAs favor union contractors and steer apprentices into union programs, making it harder for small and minority-owned firms.',
        'It reverses the PLA ban voters approved in the 2010 charter.',
      ],
      readingLinks: [
        { label: 'Coast News: Oceanside voters to decide prevailing wage charter amendment', url: 'https://thecoastnews.com/oceanside-voters-to-decide-prevailing-wage-charter-amendment/', summary: 'Council votes and why staff recommended the change.' },
        { label: 'City of Oceanside: current elections (measure text and analysis)', url: 'https://www.ci.oceanside.ca.us/government/city-clerk/elections-fair-political-practices-commission-reporting-program/current-elections', summary: 'Full text, city attorney analysis and ballot arguments.' },
        { label: 'City of Oceanside: council file 26-1532 (resolution placing R on the ballot)', url: 'https://oceanside.legistar.com/LegislationDetail.aspx?ID=8043767&GUID=4C86611D-7E3F-46E0-967E-63DEE23F451C', summary: 'Staff report and resolution.' },
        { label: 'Yes on R Oceanside', url: 'https://yesonroceanside.org/', summary: 'Supporters’ campaign site.' },
        { label: 'Patch: Oceanside voter guide 2026', url: 'https://patch.com/california/oceanside-camppendleton/oceanside-voter-guide-2026-whats-ballot-voting-more', summary: 'Short summaries of R, S and the council races.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters value prevailing wages, apprenticeships and union labor standards on public projects.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value protecting state funding and following the city attorney’s analysis and party endorsement.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays side with labor, the Democratic Party and Rep. Levin.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters like worker protections but are less invested in charter mechanics.'],
      ['SS', '—', '—', 'Stressed Sideliners hear competing claims about wages and construction costs and have no clear stake.'],
      ['AR', 'No', '◐', 'Ambivalent Right voters doubt the funding risk is real and worry PLAs raise costs.'],
      ['PR', 'No', '◐', 'Populist Right voters distrust giving the Council more power over contracts, though some are union households.'],
      ['CC', 'No', '●', 'Committed Conservatives value open competition and oppose PLAs as cost drivers that favor unions.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives prefer the 2010 charter’s limits and local control over conforming to state labor rules.'],
    ]),
    counterArguments: [
      'CC (No ●): But the city attorney says R would ensure the city keeps state infrastructure money, and every PLA must let non-union contractors bid.',
      'PL/EL (Yes ●): But the city attorney also says the city already qualifies for state money and pays prevailing wage, so the funding threat may be smaller than the Yes campaign suggests.',
    ],
  },

  // ---------------------------------------------------------------- Measure S
  {
    id: 'oceanside-measure-s',
    categoryId: 'local-measures',
    title: 'Oceanside Measure S — Half-cent sales tax (10 years)',
    tldrLabel: 'Oceanside Measure S — Half-cent sales tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure S would add a half-cent general sales tax in Oceanside for 10 years, raising about $20 million a year. It is on top of Measure X, the half-cent tax voters extended in 2024 through 2036. The rate would go from 8.25% to 8.75%, the same as eight other San Diego County cities (Voice of San Diego).',
      'City staff have priced big projects the city cannot fund now: replacing the police headquarters (over $100 million), a permanent Fire Station 8 (about $35 million), the RE:BEACH coastal project (about $60 million), and a pier bridge funding gap (about $50 million). Because S is a general tax, the Council can spend the money on any city purpose.',
    ],
    introParagraphs: [
      'The Council voted 5-0 on June 24, 2026 to place S on the ballot. A city-commissioned survey found 54% to 58% of likely voters “very likely” to support it (North County Pipeline). Councilmember Peter Weiss tried to tie the money to specific needs, but staff said a dedicated tax would need two-thirds voter approval.',
      'The San Diego County Taxpayers Association, the Oceanside Firefighters Association and the county Democratic Party support S; the county GOP, Reform California and SanDiego350 oppose it. If county Measure B also passes, Oceanside’s rate would be 9.25%.',
    ],
    measure: {
      question:
        'To provide locally-controlled funding for Oceanside services and infrastructure, such as keeping streets, sidewalks, parks, and public facilities safe, clean, and well-maintained; fixing potholes; improving traffic; restoring/protecting local beaches; modernizing public safety/emergency facilities to improve 911 emergency response/community safety; and repairing aging infrastructure, shall City of Oceanside’s ordinance establishing a 1/2 cent sales tax be adopted, providing $20,000,000 annually for general government use for 10 years, with independent audits and citizen oversight?',
      yesMeans:
        'Adds a half-cent Oceanside sales tax from April 2027 to April 2037, raising about $20 million a year for any city purpose, with a citizens’ oversight committee and annual audits.',
      noMeans:
        'Keeps Oceanside’s sales tax at 8.25% (including Measure X through 2036); the pier, police, fire and beach projects would need other funding or budget cuts, the city says.',
      funding: {
        asOf: 'Oct. 13, 2026',
        note:
          'The Yes committee, “Yes on Sand, Yes on S,” is sponsored by the Oceanside Firefighters Association, which its site lists as top funder; no totals are posted. Voice of San Diego found no formal opposition committee (Oct 7, 2026). City filings are on the Oceanside NetFile portal, which can only be searched interactively, so totals could not be checked.',
        sources: [
          { label: 'Yes on Sand, Yes on S (campaign site)', url: 'https://www.yesonsand.org/' },
          { label: 'Voice of San Diego (Oct 7, 2026)', url: 'https://voiceofsandiego.org/2026/10/07/oceanside-voters-to-decide-on-another-sales-tax-measure/' },
          { label: 'City of Oceanside campaign filings (NetFile portal)', url: NETFILE_OCEANSIDE },
        ],
      },
      positions: [
        { org: 'San Diego County Democratic Party', kind: 'party', position: 'Yes', url: 'https://www.sddemocrats.org/propositions--ballot-measures.html' },
        { org: 'Republican Party of San Diego County', kind: 'party', position: 'No', url: SDGOP_GUIDE },
      ],
      measureType: 'General tax ordinance (placed by City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'About $20 million a year (city estimate, per the city attorney’s analysis), less a state administration fee, for 10 years. The tax starts April 1, 2027 and expires April 1, 2037.',
      supporters:
        'No argument in favor was printed in the sample ballot reviewed. Supporters include the Oceanside Firefighters Association (Yes on S committee sponsor), the San Diego County Taxpayers Association, Save Oceanside Sand, the county Democratic Party, Mayor Esther Sanchez and Councilmember Rick Robinson.',
      opponents:
        'Ballot argument signed by Steven Burrell, former Assemblymember Rocky Chavez, Jeordie Fellner, Michele L. Cyr and Karie Lasko. Also opposed by the county GOP, Reform California and SanDiego350; District 2 challengers Gonzales, James and Ortega say they will vote no.',
      voterConnection: [
        'Shoppers in Oceanside pay 50 cents more per $100 of taxable purchases; groceries and prescription drugs are exempt, and visitors pay a share.',
        'The money is not legally tied to any project, so what gets built depends on the Council’s yearly spending plan.',
        'The city says it would have to cut the budget or delay the pier, fire station, police headquarters and beach projects if S fails.',
        'This would be a second half-cent city tax on top of Measure X, which runs through 2036.',
      ],
      mechanismBullets: [
        'Rate: 0.5% transactions and use tax, collected by the state (CDTFA); total rate in Oceanside goes from 8.25% to 8.75%.',
        'Term: starts April 1, 2027; expires April 1, 2037.',
        'General tax: money goes to the General Fund in a separate tracked account and may be used for any lawful city purpose (city attorney analysis).',
        'Oversight: a Citizens’ Oversight Committee recommends a yearly spending plan and reviews an annual independent audit.',
        'Separate from Measure X, which stays in place through April 2036.',
      ],
      argumentsFor: [
        'The city has at least $150 million in project backlogs plus yearly road needs that current revenue cannot cover (North County Pipeline).',
        'Funds a permanent Fire Station 8, pier bridge repair, beach sand and a new police headquarters, according to the city and the Yes campaign.',
        'It sunsets in 10 years and has an oversight committee and annual audits; the Taxpayers Association cites the city’s fiscal stewardship.',
        'Visitors pay part of the tax, and essentials like groceries are exempt.',
      ],
      argumentsAgainst: [
        'Opponents say voters just extended Measure X in 2024 and the city should spend that money before asking for more.',
        'It is a general tax, so the Council can spend it on anything, not just the projects promised; opponents call it a “slush fund.”',
        'Sales taxes take a larger share of income from lower-income residents and seniors.',
        'Opponents say $20 million a year will not cover the police headquarters, fire station and pier together, let alone potholes and sand.',
      ],
      readingLinks: [
        { label: 'Voice of San Diego: Oceanside voters to decide another sales tax (Oct 7, 2026)', url: 'https://voiceofsandiego.org/2026/10/07/oceanside-voters-to-decide-on-another-sales-tax-measure/', summary: 'Measure X history, project needs, and where District 2 candidates stand.' },
        { label: 'North Coast Current: sales tax headed for November vote (June 26, 2026)', url: 'https://www.northcoastcurrent.com/region/oceanside/2026/06/oceanside-sales-tax-pitch-headed-for-november-vote/', summary: 'Staff cost estimates for each project and public comment.' },
        { label: 'North County Pipeline: Oceanside sends sales tax to voters (Aug 7, 2026)', url: 'https://ncpipeline.substack.com/p/oceanside-sales-tax-measure', summary: 'Polling, the general vs. special tax choice, and Weiss’s attempt to dedicate funds.' },
        { label: 'City of Oceanside: Measure S page', url: 'https://www.ci.oceanside.ca.us/government/financial-services/future-funding', summary: 'City information page on the measure.' },
        { label: 'Yes on Sand, Yes on S', url: 'https://www.yesonsand.org/', summary: 'Supporters’ campaign site.' },
        { label: 'SanDiego350: November 2026 measure recommendations', url: 'https://sandiego350.org/2026/09/24/november-2026-ballot-measure-recommendations-voting/', summary: 'Climate group recommending No on S and Yes on R.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters support funding public services and labor-backed projects, but dislike a regressive sales tax and the lack of climate spending.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value the sunset, audits and oversight and the Taxpayers Association’s endorsement for long-delayed infrastructure.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays follow the Democratic Party and firefighters in backing public safety and beach funding.'],
      ['OL', 'No', '○', 'Outsider Left voters see a regressive tax that hits working families, as the Democratic-endorsed District 2 candidate also argued.'],
      ['SS', 'No', '◐', 'Stressed Sideliners feel cost-of-living pressure and are wary of a second city sales tax two years after Measure X.'],
      ['AR', 'No', '○', 'Ambivalent Right voters are wary of new taxes, softened by the sunset and the Taxpayers Association’s support.'],
      ['PR', 'No', '●', 'Populist Right voters oppose what they see as double taxation and a Council “slush fund.”'],
      ['CC', 'No', '●', 'Committed Conservatives oppose a new tax that can go to any purpose, following the county GOP despite the Taxpayers Association’s endorsement.'],
      ['FF', 'No', '●', 'Faith and Flag Conservatives follow the Republican Party and Reform California in opposing the tax.'],
    ]),
    counterArguments: [
      'CC/PR (No ●): But the San Diego County Taxpayers Association endorses S, it ends in 10 years, and the city says a No vote means delays or cuts for fire, police and pier projects.',
      'EL/DM (Yes ●): But S is a general tax, so none of the promised projects is guaranteed, and $20 million a year will not cover them all.',
    ],
  },
];
