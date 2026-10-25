import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Sacramento and Delta districts: U.S. House CA-7, CA-8, CA-9 (Prop 50 map); State Senate SD-8;
 * Assembly AD-6, AD-7, AD-9, AD-10, AD-11, AD-13. Research as of Oct 8, 2026.
 */

const US_REP_LEGAL =
  'At least 25 years old, a U.S. citizen for at least 7 years, and an inhabitant of California when elected (U.S. Constitution art. I, section 2); two-year term.';

const US_REP_CRITERIA: QualificationCriterion[] = [
  { id: 'lawmaking', label: 'Lawmaking and policy experience', detail: 'The job is writing, amending and voting on federal law.' },
  { id: 'committee-budget', label: 'Committee and budget/appropriations work', detail: 'Most legislative work happens in committees that shape spending and oversight.' },
  { id: 'district-service', label: 'Constituent services and knowledge of the district', detail: 'Members run casework offices and carry local priorities to Washington.' },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Little becomes law without bipartisan or cross-chamber partners.' },
];

const HOUSE_STAKES =
  'A U.S. representative votes on federal taxes, health programs, immigration, defense and infrastructure spending, and oversight of the executive branch, and runs a casework office that helps constituents with veterans’ benefits, Social Security and federal agencies.';

const LEG_LEGAL =
  'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

const SENATE_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'law-policy', label: 'Lawmaking, legal drafting or policy experience', detail: 'Senators write, amend and vote on state statutes and confirm appointees.' },
  { id: 'budget-oversight', label: 'Budget and committee work', detail: 'The state budget and policy committees are central to a senator’s workload.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const ASSEMBLY_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
  { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee roles and budget votes shape what reaches the floor.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const ASSEMBLY_STAKES =
  'Assembly members write and vote on state laws and the state budget, covering housing, schools, public safety, health care and taxes, and serve two-year terms.';
const SENATE_STAKES =
  'State senators vote on the state budget, housing and land-use law, public safety, health and education policy, and confirm the governor’s appointees; they serve four-year terms.';

const CAL_ACCESS = 'No current totals verified for this guide (as of Oct 8, 2026); see Cal-Access at https://cal-access.sos.ca.gov/.';

export const RACES_D_SACRAMENTO_DELTA: Race[] = [
  // ───────────────────────────── CA-7 ─────────────────────────────
  {
    id: 'us-rep-ca7',
    categoryId: 'federal',
    title: 'U.S. Representative, 7th District',
    tldrLabel: 'CA-7',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'Proposition 50 redrew CA-7 to cover central and South Sacramento, Elk Grove, Galt, El Dorado Hills and Placerville. It remains safely Democratic, so November is a choice between two Democrats: Matsui, in Congress since 2005 and seeking an 11th term, and Vang, who argues it is time for generational change.',
    ],
    introParagraphs: [
      'In the June 2 primary Vang finished first with 31.2% and Matsui second with 29.1%; two Republicans split about 37% (certified Statement of Vote). An August Data for Progress poll for groups backing Vang showed Vang 32%, Matsui 28% and 40% undecided. The runoff turns on seniority versus a younger, further-left platform, and on where Republican and independent voters go.',
    ],
    readingLinks: [
      {
        label: 'Abridged (PBS KVIE) — Generational divide marks Matsui and Vang race (Aug 27, 2026)',
        url: 'https://www.abridged.org/?p=25374',
        summary: 'Report from the League of Women Voters debate and on how younger and older Democrats are sorting in the race.',
      },
      {
        label: 'Abridged — Matsui clinches runoff spot, Vang rises (June 2026)',
        url: 'https://www.abridged.org/news/vang-matsui-wooden-sacramento-congress-update/',
        summary: 'Primary-count update with the candidates’ backgrounds and their dispute over the immigration response.',
      },
    ],
    candidates: [
      {
        id: 'doris-matsui',
        photoSlug: 'doris-matsui',
        name: 'Doris Matsui',
        party: 'D',
        role: 'U.S. Representative',
        campaignUrl: 'https://matsui.house.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Has held this seat since a 2005 special election and leads Democrats on an Energy and Commerce subcommittee.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House member since March 2005; her office lists her as a co-author of the 2022 CHIPS Act.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Ranking Democrat on the Energy and Commerce Communications and Technology Subcommittee since Jan 2023, re-elected to the post Jan 2025 (official site).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented Sacramento for 21 years; held at least four 2026 news conferences outside the Moss Federal Building over immigration detentions (Abridged).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'The CHIPS and Science Act passed with bipartisan votes in 2022; she co-chairs the bipartisan Spectrum Caucus.' },
          ],
        },
        bio: [
          'Matsui, 82, has represented Sacramento since a 2005 special election after the death of her husband, Rep. Robert Matsui. She was born in 1944 in a World War II internment camp for Japanese Americans.',
          'She is the top Democrat on the Energy and Commerce subcommittee on communications and technology and co-chairs the Spectrum Caucus. She argues Democrats need experienced members to retake the House.',
        ],
        recordVsChange:
          'Matsui brings 21 years of seniority and a subcommittee leadership post; replacing her means starting over with a first-term member, though at 82 her seniority advantage may not last many more terms.',
        scorecard: [
          { topic: 'Health care', position: '? Mainstream Democratic record; no stated Medicare for All position found for this guide', comparison: 'Vang backs Medicare for All and rallied with nurses for it in July 2026.' },
          { topic: 'Immigration', position: '✓ Held repeated news conferences against detentions at Sacramento’s federal building (Abridged, June 2026)', comparison: 'Vang calls Matsui’s response insufficient and pledges to protect neighborhoods from “masked ICE agents.”' },
          { topic: 'Climate', position: '? No distinct 2026 climate plan found; endorsed by LCV Action Fund and NRDC', comparison: 'Vang proposes a moratorium on new data centers, citing power bills.' },
          { topic: 'Trump / House majority', position: '✓ Opposes Trump agenda; says experienced Democrats are needed to retake the House', comparison: 'Vang says new leadership is needed to protect communities from the administration.' },
          { topic: 'District clout', position: '✓✓ 21 years of seniority; ranking Democrat on an Energy and Commerce subcommittee', comparison: 'Vang would start as a first-term member with no seniority.' },
        ],
        money: 'Raised $3.19M this cycle with $467K cash on hand as of June 30, 2026 (FEC, via Wikipedia).',
        endorsements:
          'California Democratic Party; Gov. Gavin Newsom; Sens. Alex Padilla and Adam Schiff; Rep. Nancy Pelosi; Sacramento Mayor Kevin McCarty; LCV Action Fund; Planned Parenthood Action Fund; California Labor Federation (dual endorsement) (as listed Oct 2026).',
        notes: [
          'Vang’s campaign says Matsui declined a Sacramento Bee invitation to debate before the primary; the two debated on Aug 27, 2026 at a League of Women Voters forum (Abridged).',
        ],
      },
      {
        id: 'mai-vang',
        photoSlug: 'mai-vang',
        name: 'Mai Vang',
        party: 'D',
        role: 'Teacher/City Councilmember',
        campaignUrl: 'https://www.maiforus.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Six years on the Sacramento City Council and four on a school board; no state or federal legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Sacramento City Council (District 8) since Dec 2020; Sacramento City Unified board 2016–2020, where she helped make ethnic studies a graduation requirement.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on the city budget; no congressional committee or staff experience.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Born and raised in Meadowview and Oak Park; her South Sacramento council district lies inside CA-7.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No documented record of passing legislation across party lines.' },
          ],
        },
        bio: [
          'Vang, 41, has represented South Sacramento on the City Council since 2020 after four years on the city school board. The eldest of 16 children of Hmong refugees from Laos, she co-founded Hmong Innovating Politics and lectures in ethnic studies at Sacramento State.',
          'Endorsed by Justice Democrats and Sacramento DSA, she rejects corporate PAC and AIPAC money and runs on Medicare for All.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓✓ Calls housing a human right: more affordable homes, first-time-buyer help and limits on rent hikes', comparison: 'Matsui has no distinct 2026 housing plan found for this guide.' },
          { topic: 'Health care', position: '✓✓ Supports Medicare for All; rallied with nurses on Medicare’s anniversary (July 2026)', comparison: 'No Matsui position on Medicare for All was found for this guide.' },
          { topic: 'Climate', position: '✓ Proposes a moratorium on new data centers, which she says raise power bills', comparison: 'Matsui is backed by the LCV Action Fund and NRDC.' },
          { topic: 'Immigration', position: '✓✓ Pledges to protect neighborhoods from “masked ICE agents” and militarized policing', comparison: 'Matsui has held news conferences against detentions at the federal building.' },
          { topic: 'Trump / House majority', position: '✓ Says Congress needs new leadership to protect communities from the Trump administration', comparison: 'Matsui argues seniority is what Democrats need to retake the House.' },
        ],
        money: 'Raised $1.09M this cycle with $106K cash on hand as of June 30, 2026 (FEC, via Wikipedia).',
        endorsements:
          'Senate Majority Leader Angelique Ashby; Sacramento Bee editorial board (Apr 22, 2026); Justice Democrats; Sacramento DSA; California Working Families Party; National Nurses United; SEIU California; UAW Region 6; Sunrise Movement; California Labor Federation (dual endorsement) (as listed Oct 2026).',
        notes: [
          'Her campaign calls the war in Gaza a genocide and says she would ban sales of weapons used in it — https://www.maiforus.com/',
        ],
      },
    ],
    crossTypology: ct([
      ['LP', 'Vang', '●', 'Leftward Progressives back the Justice Democrats- and DSA-endorsed challenger, the further-left of the two Democrats, running on Medicare for All, housing as a human right and refusing AIPAC and corporate PAC money.'],
      ['LL', 'Matsui', '●', 'Loyal Liberals value Matsui’s 21 years of seniority, her subcommittee leadership and her CHIPS Act work, the experienced, institutional choice in a two-Democrat race.'],
      [
        'LO',
        'Vang',
        '◐',
        'Left-Out Left voters favor a younger outsider who refuses corporate PAC money and promises rent limits, though many are cooler to her democratic-socialist label than the further left is.',
        'Experience-first Left-Out Left voters could stay with Matsui, a 21-year incumbent with a working casework office; they give up a challenger who rejects corporate money and runs on rent limits and Medicare for All.',
      ],
      ['OO', 'Matsui', '◐', 'Order and Opportunity Left voters prefer the steady, mainstream incumbent to a challenger whose talk of “militarized policing” runs ahead of their wish for order, though both oppose mass detentions.'],
      [
        'TM',
        'Vang',
        '○',
        'Tuned-Out Middle voters may respond to Vang’s concrete cost pitches, rent limits and a data-center moratorium to hold down power bills, though many are not following the generational fight.',
        'Experience-first Tuned-Out Middle voters could stay with Matsui, a 21-year incumbent whose office already helps constituents with federal agencies; they give up Vang’s promises of rent limits and lower power bills.',
      ],
      ['PP', 'Matsui', '◐', 'Pragmatic and Polite Right voters prefer the cautious, experienced incumbent with a bipartisan CHIPS Act record to a democratic-socialist challenger, in a race with no Republican.'],
      ['UR', 'Matsui', '○', 'Unconventional Right voters, with no Republican on the ballot, lean weakly to the less left-leaning incumbent over a challenger who campaigns against ICE enforcement.'],
      ['FC', 'Matsui', '○', 'Faith First Conservatives have no candidate who shares their views and lean weakly to the more conventional incumbent.'],
      ['NA', 'Matsui', '○', 'No Apologies Right voters dislike both, but Vang’s Medicare for All and anti-ICE platform is further from their views, leaving a weak lean to Matsui.'],
    ]),
    counterArguments: [
      'LL (Matsui ●): But consider that Matsui, 82, trailed Vang in the June primary, and the seniority argument weakens if Matsui serves only a few more terms.',
      'LP (Vang ●): But consider that a first-term member has little leverage in the House, and Vang has no record of passing legislation beyond the city council.',
      'OO (Matsui ◐): But consider that Vang grew up in South Sacramento on safety-net programs and offers the most concrete housing-cost plan in the race.',
    ],
  },

  // ───────────────────────────── CA-8 ─────────────────────────────
  {
    id: 'us-rep-ca8',
    categoryId: 'federal',
    title: 'U.S. Representative, 8th District',
    tldrLabel: 'CA-8',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'Under the Prop 50 map CA-8 takes in Solano County plus parts of western Contra Costa (including Richmond), Sacramento, Yolo and San Joaquin counties. Rated Solid Democratic, it includes Travis Air Force Base and Bay Area transit riders who depend on federal money that Garamendi’s committees help shape.',
    ],
    introParagraphs: [
      'In the June 2 primary Garamendi took 54.4% and Republican Rudy Recile 27.8%, with two other Democrats splitting the rest (certified Statement of Vote). It is the third straight Garamendi–Recile general; Garamendi won the last two by about 50 points. The race turns mostly on whether voters keep a long-serving incumbent, now 81, or send a first-time Republican.',
    ],
    readingLinks: [
      {
        label: 'Richmondside — Garamendi, Recile advance (June 2, updated Aug 26, 2026)',
        url: 'https://richmondside.org/2026/06/02/congress-district-8-election-results-garamendi/',
        summary: 'Primary-night report with Garamendi’s priorities (SHIPS Act, BART and bus money) and background on Recile.',
      },
    ],
    candidates: [
      {
        id: 'john-garamendi',
        photoSlug: 'john-garamendi',
        name: 'John Garamendi',
        party: 'D',
        role: 'Member of Congress',
        campaignUrl: 'https://garamendi.house.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In the House since 2009 after decades as a state legislator, insurance commissioner and lieutenant governor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since 2009; earlier state legislator, two-time insurance commissioner and lieutenant governor.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Senior member of Armed Services and Transportation and Infrastructure; top Democrat on the Armed Services Readiness subcommittee in 2025 (official site).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented Solano and Contra Costa communities for years; pushing the SHIPS Act to make the Bay Area a ship-repair hub (Richmondside).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Offered amendments to the bipartisan FY2026 defense authorization as Readiness ranking member.' },
          ],
        },
        bio: [
          'Garamendi, 81, has served in the House since 2009 after a long state career, including as lieutenant governor and twice as insurance commissioner, and served as deputy U.S. interior secretary under President Clinton.',
          'He is a senior member of the Armed Services and Transportation and Infrastructure committees and wants a transportation bill with BART and bus funding.',
        ],
        scorecard: [
          { topic: 'Transportation', position: '✓✓ Wants a transportation bill with BART and bus funding, which he calls crucial for the Bay Area', comparison: 'Recile has published no transportation position.' },
          { topic: 'Defense & jobs', position: '✓ Pushes the SHIPS Act to rebuild U.S. shipbuilding and make the Bay Area a repair hub', comparison: 'Recile, a retired Army major, lists veterans’ support without specifics.' },
          { topic: 'Climate', position: '✓ Endorsed by the Sierra Club and California Environmental Voters', comparison: 'Recile lists “energy independence” as an issue without details.' },
          { topic: 'Trump / House majority', position: '✓ Would add a Democratic vote toward a House majority', comparison: 'Recile would add a Republican vote; his site does not mention Trump.' },
          { topic: 'District clout', position: '✓✓ 17 years in the House with senior committee seats', comparison: 'Recile has never held office.' },
        ],
        money: 'Raised $489K this cycle with $1.2M cash on hand as of June 30, 2026 (FEC, via Wikipedia).',
        endorsements:
          'California Democratic Party; California Labor Federation; California Environmental Voters; Sierra Club; Planned Parenthood Action Fund; J Street PAC (as listed Oct 2026).',
        notes: [
          'He announced in July 2024 that he was being treated for early-stage multiple myeloma and would keep working; no 2026 health update was found — https://www.cbsnews.com/sacramento/news/rep-john-garamendi-ca-8th-district-cancer-multiple-myeloma-diagnosis',
        ],
      },
      {
        id: 'rudy-recile',
        name: 'Rudy Recile',
        party: 'R',
        role: 'Business Owner/Consultant',
        campaignUrl: 'https://rudyforuscongress.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Retired Army major and former USDA employee with no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected or legislative experience found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No committee or budget experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Vallejo resident; final Army posting was in Fairfield (campaign site).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record to assess.' },
          ],
        },
        bio: [
          'Recile, of Vallejo, is a retired Army major with 26 years of service who retired in 2014 after a final posting in Fairfield, then worked for the U.S. Department of Agriculture and started a small business. He lost to Garamendi in 2022 and 2024.',
          'His site lists energy independence, veterans, school choice and accountable spending without detailed proposals.',
        ],
        scorecard: [
          { topic: 'Transportation', position: '? No position published', comparison: 'Garamendi wants BART and bus money in the next transportation bill.' },
          { topic: 'Climate', position: '? Lists “energy independence” as an issue without details', comparison: 'Garamendi is endorsed by California Environmental Voters and the Sierra Club.' },
          { topic: 'Defense & veterans', position: '✓ Retired Army major; lists support for veterans without specifics', comparison: 'Garamendi is a senior Armed Services member pushing the SHIPS Act.' },
          { topic: 'Trump / House majority', position: '? Does not mention Trump; would add a Republican vote', comparison: 'Garamendi would add a Democratic vote.' },
        ],
        money: 'Raised $8,576 with $1,541 cash on hand as of June 30, 2026 (FEC, via Wikipedia).',
        endorsements: 'No endorsements found as of Oct 8, 2026.',
        notes: ['He did not respond to Richmondside’s requests for comment after the primary.'],
      },
    ],
    crossTypology: ct([
      ['LP', 'Garamendi', '◐', 'Leftward Progressives back the Sierra Club-endorsed Democrat over a Republican, though Garamendi’s defense-hawk Armed Services work and five decades in office are far from their ideal.'],
      ['LL', 'Garamendi', '●', 'Loyal Liberals value Garamendi’s long institutional résumé, from insurance commissioner to senior Armed Services member.'],
      ['LO', 'Garamendi', '◐', 'Left-Out Left voters may want a younger voice after five decades of Garamendi in public life, but the only alternative is a Republican with no published plan on costs.'],
      ['OO', 'Garamendi', '●', 'Order and Opportunity Left voters want jobs and steady leadership, and Garamendi is pushing shipyard jobs and BART and bus money while backing Travis Air Force Base.'],
      ['TM', 'Garamendi', '○', 'Tuned-Out Middle voters get an incumbent focused on transit money and shipyard jobs, though few are engaged in this lopsided race.'],
      ['PP', 'Garamendi', '◐', 'Pragmatic and Polite Right voters weigh competence and a strong defense over party, and a senior Armed Services member outweighs a Republican who raised under $9,000 and published few specifics.'],
      [
        'UR',
        'Recile',
        '◐',
        'Unconventional Right voters favor the Republican Army veteran on energy independence and accountable spending, though Recile offers almost no policy detail.',
        'Experience-first Unconventional Right voters could back Garamendi, a senior Armed Services member pushing shipbuilding jobs; they give up a Republican vote for a Democrat over a veteran who has never held office.',
      ],
      [
        'FC',
        'Recile',
        '◐',
        'Faith First Conservatives favor the Republican veteran who backs school choice, though Recile’s campaign says little on the faith and family issues they put first.',
        'Experience-first Faith First Conservatives could credit Garamendi’s long Armed Services work, but it is a cross-party vote for a Democrat backed by Planned Parenthood over a retired Army major.',
      ],
      ['NA', 'Recile', '●', 'No Apologies Right voters back the Republican and retired Army officer on energy independence, school choice and spending restraint over a five-decade Democratic officeholder.'],
    ]),
    counterArguments: [
      'NA (Recile ●): But consider that Recile has lost twice to Garamendi by about 50 points and publishes few specifics, while Garamendi’s seniority helps the district whichever party runs the House.',
      'LL (Garamendi ●): But consider that Garamendi is 81 and was treated for multiple myeloma in 2024, so voters may weigh how long Garamendi can keep building seniority.',
    ],
  },

  // ───────────────────────────── CA-9 ─────────────────────────────
  {
    id: 'us-rep-ca9',
    categoryId: 'federal',
    title: 'U.S. Representative, 9th District',
    tldrLabel: 'CA-9',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES,
      'The Prop 50 map pushed CA-9 toward the Bay Area: it now pairs part of San Joaquin County with eastern Contra Costa County, including part of Antioch, while much of Stockton moved to CA-13. Cook rates it Solid Democratic; Harder won the old, more competitive version with 51.8% in 2024.',
    ],
    introParagraphs: [
      'In the June 2 primary Harder, the only Democrat on the ballot, won 60.8%; John McBride led four Republicans with 23.3% (certified Statement of Vote). Former Stockton Mayor Kevin Lincoln, Harder’s 2024 opponent, moved to CA-13 after the map changed. The runoff turns on Harder’s Appropriations seat and independent branding versus McBride’s local cost-of-living pitch.',
    ],
    readingLinks: [
      {
        label: 'Stocktonia — Central Valley congressional races test incumbency, Trump ties and local issues (May 30, 2026)',
        url: 'https://stocktonia.org/news/politics/2026/05/30/central-valley-congressional-races-test-incumbency-trump-ties-and-local-issues/',
        summary: 'Pre-primary profiles of Harder’s record and McBride’s platform.',
      },
    ],
    candidates: [
      {
        id: 'josh-harder',
        photoSlug: 'josh-harder',
        name: 'Josh Harder',
        party: 'D',
        role: 'Father/Representative',
        campaignUrl: 'https://harder.house.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Four-term member of Congress who sits on the Appropriations Committee.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House member since January 2019, first for the old 10th District.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'House Appropriations Committee, on the Labor-HHS-Education and Interior-Environment subcommittees (Stocktonia).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Cites shorter wait times at the local VA, flood and wildfire money, and pushback on PG&E rate increases (Stocktonia).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Brands himself “one of the most independent lawmakers in the country”; specific bipartisan enactments not verified for this guide.' },
          ],
        },
        bio: [
          'Harder, a former venture-capital investor from the Valley, has served in Congress since 2019. He sits on the House Appropriations Committee, including its Labor-HHS-Education and Interior-Environment subcommittees.',
          'He runs on lowering costs, health care protections, fighting PG&E rate increases and opposing the Delta Tunnel, and calls himself one of the most independent members of Congress.',
        ],
        scorecard: [
          { topic: 'Health care', position: '✓ Lists health care protections as a top priority', comparison: 'McBride focuses on costs and Social Security rather than health coverage.' },
          { topic: 'Climate & water', position: '✓ Opposes the Delta Tunnel; endorsed by LCV Action Fund and California Environmental Voters', comparison: 'McBride lists water and electricity costs as priorities.' },
          { topic: 'Energy costs', position: '✓ Has fought PG&E rate increases', comparison: 'McBride blames state taxes and regulation for high gas prices.' },
          { topic: 'Trump / House majority', position: '~ Calls himself one of Congress’s most independent members; would add a Democratic vote', comparison: 'McBride criticizes Harder’s focus on Trump and wants local issues first.' },
          { topic: 'District clout', position: '✓✓ Seat on Appropriations, which writes federal spending bills', comparison: 'McBride has never held office.' },
        ],
        money: 'Raised $4.08M this cycle with $4.74M cash on hand as of June 30, 2026 (FEC, via Wikipedia).',
        endorsements:
          'California Democratic Party; California Labor Federation; LCV Action Fund; California Environmental Voters; Giffords; Planned Parenthood Action Fund; AIPAC; J Street (as listed Oct 2026).',
      },
      {
        id: 'john-mcbride',
        name: 'John McBride',
        party: 'R',
        role: 'Athletic Performance Coach',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Self-employed coach and second-time candidate with no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected or legislative experience found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No committee or budget experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Has lived in the area about 35 years; cites church and nonprofit service (Stocktonia).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record to assess.' },
          ],
        },
        bio: [
          'McBride is a self-employed athletic performance consultant and former strength and conditioning coach at University of the Pacific and St. Mary’s High School. This is his second run for the seat; he finished a distant third in the 2024 primary.',
          'He runs on farm costs, gas and energy prices, the Port of Stockton, housing, water and Social Security.',
        ],
        scorecard: [
          { topic: 'Energy costs', position: '✓ Blames state taxes and regulation, more than the president, for high gas prices', comparison: 'Harder points to fighting PG&E rate increases.' },
          { topic: 'Agriculture & water', position: '✓ Prioritizes farm costs, water and electricity prices', comparison: 'Harder opposes the Delta Tunnel and cites flood-protection money.' },
          { topic: 'Health care', position: '? No health-care plan found; mentions Social Security', comparison: 'Harder lists health care protections as a top priority.' },
          { topic: 'Trump / House majority', position: '~ Says Harder focuses too much on Trump; would add a Republican vote', comparison: 'Harder would add a Democratic vote.' },
        ],
        money: 'Raised $52K with $18.7K cash on hand as of June 30, 2026 (FEC, via Wikipedia).',
        endorsements: 'No major endorsements found as of Oct 8, 2026.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Harder', '◐', 'Leftward Progressives back the Democrat on health care and climate, though Harder’s centrist branding, venture-capital past and AIPAC support temper their enthusiasm.'],
      ['LL', 'Harder', '●', 'Loyal Liberals value a four-term Appropriations member with environmental, labor and gun-safety endorsements.'],
      ['LO', 'Harder', '◐', 'Left-Out Left voters like Harder’s fights against PG&E rate increases, practical help with bills, though a former venture capitalist is no outsider.'],
      ['OO', 'Harder', '●', 'Order and Opportunity Left voters want cost relief and steady leadership, and Harder pairs utility-rate fights and health care protections with shorter VA waits and flood money.'],
      ['TM', 'Harder', '○', 'Tuned-Out Middle voters get an incumbent focused on utility bills and VA wait times, though McBride’s gas-price pitch also speaks to costs.'],
      ['PP', 'Harder', '◐', 'Pragmatic and Polite Right voters who value independent-minded, incremental members may cross party lines for Harder’s centrism and Appropriations experience over a first-time Republican.'],
      [
        'UR',
        'McBride',
        '◐',
        'Unconventional Right voters favor the plain-spoken Republican who blames state taxes and regulation for gas prices, though McBride’s campaign is small.',
        'Experience-first Unconventional Right voters could back Harder, who sits on Appropriations and fights PG&E rate hikes; they give up a Republican vote for a Democrat over a coach with no time in office.',
      ],
      [
        'FC',
        'McBride',
        '◐',
        'Faith First Conservatives lean to the Republican, who cites church and nonprofit service, though McBride campaigns mostly on costs rather than faith and family issues.',
        'Experience-first Faith First Conservatives could pick Harder, a four-term Appropriations member, but it is a cross-party vote for a Democrat endorsed by Planned Parenthood over a Republican who cites church service.',
      ],
      ['NA', 'McBride', '●', 'No Apologies Right voters back the Republican who blames state taxes and regulation for high gas prices and wants less Trump talk from Congress.'],
    ]),
    counterArguments: [
      'NA (McBride ●): But consider that McBride has never held office and had raised about $52,000 by June, while Harder’s Appropriations seat lets Harder steer federal money to the district.',
      'LP (Harder ◐): But consider that Harder is endorsed by AIPAC and brands himself a centrist, which may not match progressive priorities.',
    ],
  },

  // ───────────────────────────── SD-8 ─────────────────────────────
  {
    id: 'senate-sd8',
    categoryId: 'state-leg',
    title: 'State Senate, District 8',
    tldrLabel: 'SD-8',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: SENATE_CRITERIA('SD-8 covers the city of Sacramento and suburbs from Rio Linda and North Highlands to Florin, Vineyard and Elk Grove.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      SENATE_STAKES,
      'SD-8 covers the city of Sacramento and suburbs including Rio Linda, North Highlands, Florin, Vineyard and Elk Grove. Ashby became Senate majority leader in December 2025, so the seat carries leadership influence over which bills reach the floor.',
    ],
    introParagraphs: [
      'In the June 2 primary Ashby took 68.1%, Republican Susan Mason 27.2% and Peace and Freedom candidate Linda Roberts 4.7% (certified Statement of Vote). Mason, a retired nurse, has no campaign website or published platform. The race is largely a referendum on Ashby’s first term and her new leadership role.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Senate District 8',
        url: 'https://theballotbrief.com/state/california/sacramento-county/california-senate-district-8',
        summary: 'Neutral roster page with June results and what is known about both finalists.',
      },
    ],
    candidates: [
      {
        id: 'angelique-ashby',
        photoSlug: 'angelique-ashby',
        name: 'Angelique Ashby',
        party: 'D',
        role: 'California State Senator',
        campaignUrl: 'https://sd08.senate.ca.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Sitting state senator and majority leader, with 12 earlier years on the Sacramento City Council.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'State senator since Dec 2022; lawyer (McGeorge School of Law); carried SB 802 on housing and homelessness in 2026 (official site).' },
            { criterionId: 'budget-oversight', assessment: 'partial', evidence: 'Majority leader since Dec 23, 2025; specific budget-committee roles not verified for this guide.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Sacramento City Council 2010–2022, seven times vice mayor or mayor pro tem.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Chosen majority leader by Senate Democrats’ leader Monique Limón; won a 2022 Democrat-vs-Democrat race backed by Newsom and Jerry Brown.' },
          ],
        },
        bio: [
          'Ashby was elected to the Senate in 2022 after 12 years on the Sacramento City Council. A UC Davis and McGeorge law graduate who became a single mother at 20, she focuses on housing and homelessness, foster youth and public safety.',
          'Senate President pro Tem Monique Limón named her majority leader on Dec. 23, 2025.',
        ],
        recordVsChange:
          'Ashby now helps set the Senate floor agenda, giving Sacramento a voice in leadership; Mason offers no published platform, so a change would trade that influence for an unknown.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Carried SB 802 on housing and homelessness in 2026; long focus on homelessness', comparison: 'Mason has published no housing position.' },
          { topic: 'Public safety', position: '✓ As councilmember backed ending no-knock drug raids and requiring police body cameras', comparison: 'Mason has no published public-safety platform.' },
          { topic: 'Education', position: '✓ Priorities include foster youth support and college affordability', comparison: 'Mason has no published education platform.' },
          { topic: 'Caucus / ideology', position: '✓✓ Senate majority leader; mainstream Democrat endorsed by the party', comparison: 'Mason is endorsed by the Sacramento County Republican Party.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'California Democratic Party; Sacramento Bee editorial board (May 3, 2026).',
      },
      {
        id: 'susan-mason',
        name: 'Susan Mason',
        party: 'R',
        role: 'Retired Nurse',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Retired nurse with no documented elected, legislative or public-agency experience.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'not-met', evidence: 'No legislative or policy experience found.' },
            { criterionId: 'budget-oversight', assessment: 'not-met', evidence: 'No budget or committee experience found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'Local civic involvement not documented.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record to assess.' },
          ],
        },
        bio: [
          'Mason is a retired nurse endorsed by the Sacramento County Republican Party. She ran as a write-in in the 2022 primary for this seat and, as of late September 2026, had no campaign website or questionnaire response (The Ballot Brief).',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? No published position', comparison: 'Ashby carried a 2026 housing and homelessness bill.' },
          { topic: 'Public safety', position: '? No published position', comparison: 'Ashby backed body cameras and ending no-knock raids.' },
          { topic: 'Taxes', position: '? No published position', comparison: 'Ashby has no tax-specific platform found.' },
          { topic: 'Caucus / ideology', position: '✓ Republican endorsed by the county party', comparison: 'Ashby is the Senate Democrats’ majority leader.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Sacramento County Republican Party (per The Ballot Brief, Sept 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Ashby', '◐', 'Leftward Progressives back the Democrat who supported ending no-knock raids and requiring body cameras, though Ashby is a mainstream leadership figure rather than a movement progressive.'],
      ['LL', 'Ashby', '●', 'Loyal Liberals value a lawyer and former vice mayor who now helps lead the Senate.'],
      ['LO', 'Ashby', '◐', 'Left-Out Left voters are wary of leadership insiders, but Ashby’s homelessness and foster-youth work offers more than a Republican with no platform.'],
      ['OO', 'Ashby', '●', 'Order and Opportunity Left voters want both safety and opportunity, and Ashby focuses on homelessness, public safety, foster youth and college affordability.'],
      ['TM', 'Ashby', '○', 'Tuned-Out Middle voters have little to weigh against an incumbent focused on housing and homelessness, since Mason offers no platform.'],
      ['PP', 'Ashby', '○', 'Pragmatic and Polite Right voters weigh competence and experience over party, and lean weakly to the experienced majority leader over a candidate with no platform.'],
      [
        'UR',
        'Mason',
        '○',
        'Unconventional Right voters may back the Republican as a check on the Democratic supermajority’s taxes and spending, though Mason has run almost no campaign.',
        'Experience-first Unconventional Right voters could vote for Ashby, who helps set the Senate agenda; they give up a Republican check on the majority for a Democratic leader.',
      ],
      [
        'FC',
        'Mason',
        '◐',
        'Faith First Conservatives lean to the Republican, the county party’s pick, though Mason has published no positions on the faith and family issues they put first.',
        'Experience-first Faith First Conservatives could weigh Ashby’s decade-plus of public service and foster-youth work, but it is a cross-party vote for a Democratic leader over the Republican.',
      ],
      ['NA', 'Mason', '●', 'No Apologies Right voters back the Republican nominee as a check on a Democratic leader who backed ending no-knock raids.'],
    ]),
    counterArguments: [
      'NA (Mason ●): But consider that Mason has no published platform or campaign, so a vote for Mason is a protest vote rather than a choice of policies.',
      'PP (Ashby ○): But consider that as majority leader Ashby is tied closely to the Democratic majority’s tax and spending decisions that this group often opposes.',
    ],
  },

  // ───────────────────────────── AD-6 ─────────────────────────────
  {
    id: 'assembly-ad6',
    categoryId: 'state-leg',
    title: 'State Assembly, District 6',
    tldrLabel: 'AD-6',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-6 covers most of the city of Sacramento and nearby unincorporated communities.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'AD-6 covers most of the city of Sacramento and nearby unincorporated communities, home to the Capitol and many state workers. Krell, a former prosecutor, is seeking a second term against a fellow Democrat who has run a minimal campaign.',
    ],
    introParagraphs: [
      'In the June 2 primary Krell won 85.9% and Jagtar Singh 14.1%; they were the only two candidates, so both advanced (certified Statement of Vote). Singh, listed as a caregiver/business owner, has no campaign website or published platform. The race mostly measures support for Krell’s first-term record on trafficking and public safety.',
    ],
    candidates: [
      {
        id: 'maggy-krell',
        photoSlug: 'maggy-krell',
        name: 'Maggy Krell',
        party: 'D',
        role: 'Constitutional Attorney/Assemblywoman',
        campaignUrl: 'https://a06.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term Assemblymember and former state prosecutor who led the Backpage.com case.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since Dec 2024; authored AB 379 on trafficking, signed August 2025.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'One term; committee leadership roles not verified for this guide.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Sacramento-based deputy attorney general; ran countywide for Sacramento district attorney in 2014.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'AB 379 passed after negotiations with Assembly Democratic leaders over amendments (CalMatters).' },
          ],
        },
        bio: [
          'Krell, elected in 2024, was a state deputy attorney general who led the prosecution of Backpage.com executives, which helped shut the sex-trafficking site in 2018. She later was chief legal counsel for Planned Parenthood Affiliates of California.',
          'Her 2025 law AB 379 toughened penalties for soliciting minors for sex and created a fund for trafficking survivors.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓✓ Former trafficking prosecutor; AB 379 raised penalties for buying minors for sex', comparison: 'Singh has published no public-safety position.' },
          { topic: 'Education', position: '✓ 2025 law requires colleges to better identify and report trafficking and sexual crimes', comparison: 'Singh has published no education position.' },
          { topic: 'Housing & transit', position: '~ Campaigned in 2024 on homelessness and high prices; no signature housing bill verified', comparison: 'Singh has published no housing position.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat and former Planned Parenthood counsel, endorsed by the party', comparison: 'Singh, also a Democrat, has no party endorsement or platform.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'California Democratic Party; Sacramento Bee editorial board (May 3, 2026).',
      },
      {
        id: 'jagtar-singh',
        name: 'Jagtar Singh',
        party: 'D',
        role: 'Caregiver/Business Owner',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'No documented legislative, governmental or civic-leadership experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative or policy experience found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No committee or budget experience found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'Local civic involvement not documented.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record to assess.' },
          ],
        },
        bio: [
          'Singh is a Democrat whose ballot designation is caregiver/business owner. As of late September 2026 The Ballot Brief found no campaign website or platform, and no news coverage of his campaign was found for this guide.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '? No published position', comparison: 'Krell is a former trafficking prosecutor.' },
          { topic: 'Housing & transit', position: '? No published position', comparison: 'Krell campaigned on homelessness and prices.' },
          { topic: 'Education', position: '? No published position', comparison: 'Krell wrote a 2025 campus trafficking-reporting law.' },
          { topic: 'Caucus / ideology', position: '? Democrat with no published platform', comparison: 'Krell is endorsed by the California Democratic Party.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'No endorsements found as of Oct 8, 2026.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Krell', '◐', 'Leftward Progressives value Krell’s reproductive-rights and survivor-advocacy work, though Krell’s tougher-penalty approach to crime is more punitive than they prefer.'],
      ['LL', 'Krell', '●', 'Loyal Liberals value a former Backpage prosecutor and Planned Parenthood counsel with a signed trafficking law.'],
      ['LO', 'Krell', '○', 'Left-Out Left voters might look for a challenger to an establishment pick, but Singh offers no platform to weigh.'],
      ['OO', 'Krell', '●', 'Order and Opportunity Left voters want public safety, and Krell is a former prosecutor whose law raised penalties for buying minors for sex.'],
      ['TM', 'Krell', '○', 'Tuned-Out Middle voters have no alternative platform to compare and lean weakly to the incumbent with a record.'],
      ['PP', 'Krell', '◐', 'Pragmatic and Polite Right voters, with no Republican on the ballot, credit a competent prosecutor with a rule-of-law record over a candidate with no platform.'],
      ['UR', 'Krell', '○', 'Unconventional Right voters in a two-Democrat race can credit Krell’s tough-on-trafficking record, a weak lean given her party.'],
      [
        'FC',
        '—',
        '—',
        'Faith First Conservatives oppose Krell’s Planned Parenthood background and have no information on Singh, so skipping is reasonable.',
        'Experience-first Faith First Conservatives who still want a say could back Krell for her record prosecuting sex traffickers and protecting survivors; they accept a reliable vote for abortion rights.',
      ],
      ['NA', 'Krell', '○', 'No Apologies Right voters disagree with Krell on most issues but credit a prosecutor who pushed tougher penalties when the alternative is an unknown Democrat.'],
    ]),
    counterArguments: [
      'NA (Krell ○): But consider that Krell was chief counsel for Planned Parenthood and is a reliable Democratic vote on abortion and spending, issues where conservatives disagree.',
      'LP (Krell ◐): But consider that Democrats on the Public Safety Committee forced changes to AB 379 they saw as too punitive, so Krell’s approach to criminal justice is more traditional than the progressive wing’s.',
    ],
  },

  // ───────────────────────────── AD-7 ─────────────────────────────
  {
    id: 'assembly-ad7',
    categoryId: 'state-leg',
    title: 'State Assembly, District 7',
    tldrLabel: 'AD-7',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-7 covers northeast Sacramento County suburbs including Citrus Heights, Folsom, Rancho Cordova and Fair Oaks.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'AD-7 covers Citrus Heights, Folsom, Rancho Cordova and Fair Oaks. Registration is 37% Democratic, 33% Republican and 21% no party preference (CalMatters), making it one of California’s most competitive legislative seats; it backed Kamala Harris in 2024 but re-elected Hoover by seven points.',
    ],
    introParagraphs: [
      'In the June 2 primary Hoover took 50.9%, Democrat Amy Slavensky 47.1% and American Independent Sanaz Motamedi 2.0% (certified Statement of Vote). Hoover had raised nearly $1 million to Slavensky’s $150,000 by May (CapRadio). The race turns on whether swing voters reward Hoover’s moderate-Republican record on schools and costs or want a Democrat aligned with the majority.',
    ],
    readingLinks: [
      {
        label: 'CapRadio — What to know about California’s Assembly District 7 race (May 11, 2026)',
        url: 'https://www.capradio.org/articles/2026/05/11/what-to-know-about-californias-assembly-district-7-race/',
        summary: 'Side-by-side of Hoover’s and Slavensky’s positions on schools, homelessness, housing and gas prices, plus fundraising.',
      },
      {
        label: 'CalMatters voter guide — State Assembly',
        url: 'https://calmatters.org/california-voter-guide-2026/state-assembly/',
        summary: 'Registration figures and endorsements for AD-7, one of the competitive seats CalMatters tracks.',
      },
    ],
    candidates: [
      {
        id: 'josh-hoover',
        photoSlug: 'josh-hoover',
        name: 'Josh Hoover',
        party: 'R',
        role: 'Member of the State Assembly, 7th District',
        campaignUrl: 'https://hooverforassembly.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Two-term Assemblymember and Republican floor leader with 11 prior years as a legislative aide.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since Dec 2022; authored AB 3216 limiting student cellphone use; 11 years as a legislative aide, including chief of staff to Kevin Kiley.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Vice chair of the Assembly Education Committee (CapRadio); Assembly Republican floor leader since Aug 2026 (GV Wire).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Folsom native; former Folsom Cordova Unified school board member.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Helped lead the bipartisan AB 2903 audit of state homelessness spending; co-authored a 2026 bill limiting addictive social-media features for children.' },
          ],
        },
        bio: [
          'Hoover, a Folsom native, worked 11 years as a legislative aide, including as chief of staff to then-Assemblymember Kevin Kiley, and served on the Folsom Cordova Unified school board before unseating Democrat Ken Cooley in 2022. He became Assembly Republican floor leader in August 2026.',
          'He wrote the law restricting student cellphone use and backs suspending the gas tax.',
        ],
        recordVsChange:
          'Hoover has passed bipartisan school and audit measures and now holds a caucus leadership post; replacing him would add a vote to the Democratic majority but give up a minority-party member with a working relationship across the aisle.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Wants accountability for homelessness spending and more mental-health and addiction funding', comparison: 'Slavensky backs CEQA reform, renter protections and more behavioral-health services.' },
          { topic: 'Education', position: '✓✓ Wrote school cellphone limits; wants back-to-basics literacy and math and more local control', comparison: 'Slavensky, a career educator, wants more school funding and longer transitional-kindergarten days.' },
          { topic: 'Taxes', position: '✓ Backs suspending the gas tax; endorsed by Howard Jarvis Taxpayers Association', comparison: 'Slavensky has not published a tax position.' },
          { topic: 'Public safety', position: '✓ Endorsed by the California Correctional Peace Officers Association', comparison: 'Slavensky has no published public-safety platform.' },
          { topic: 'Caucus / ideology', position: '~ Moderate Republican; now the party’s Assembly floor leader', comparison: 'Slavensky would join the Democratic supermajority, backed by teachers and labor.' },
        ],
        money: 'Raised nearly $1 million as of May 2026 state filings (CapRadio); see Cal-Access for current totals.',
        endorsements:
          'California Republican Party; Howard Jarvis Taxpayers Association; California Correctional Peace Officers Association (CalMatters); Sacramento Bee editorial board (May 1, 2026).',
      },
      {
        id: 'amy-slavensky',
        name: 'Amy Slavensky',
        party: 'D',
        role: 'Public School Educator',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Longtime school administrator, most recently a senior official at a large local district; no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected or legislative experience found.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Interim deputy superintendent of San Juan Unified, a large district overlapping AD-7, 2023–2025.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Fair Oaks resident; four decades in local public schools (CapRadio).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record to assess.' },
          ],
        },
        bio: [
          'Slavensky, of Fair Oaks, spent about four decades in public education as a teacher, principal and administrator, most recently as interim deputy superintendent of San Juan Unified (2023–2025). She says she grew up in poverty in the region; her brother was homeless for over a decade.',
          'She runs on housing affordability, child care, school funding and women’s rights.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Supports CEQA reform to speed construction and stronger renter protections', comparison: 'Hoover emphasizes audits of homelessness spending.' },
          { topic: 'Education', position: '✓✓ More school funding and help with child-care costs, including longer transitional-kindergarten days', comparison: 'Hoover wants back-to-basics instruction and more local control.' },
          { topic: 'Public safety', position: '? No published position; supports more mental-health and addiction services', comparison: 'Hoover is endorsed by the prison officers’ union.' },
          { topic: 'Taxes', position: '? No published tax position', comparison: 'Hoover backs suspending the gas tax.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat backed by CTA, SEIU California and the California Labor Federation', comparison: 'Hoover is the Assembly Republican floor leader.' },
        ],
        money: 'Raised about $150,000 as of May 2026 state filings (CapRadio); see Cal-Access for current totals.',
        endorsements: 'California Democratic Party; California Teachers Association; SEIU California; California Labor Federation (CalMatters).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Slavensky', '●', 'Leftward Progressives back the Democrat on renter protections, school funding and women’s rights over a Republican endorsed by the Howard Jarvis Taxpayers Association.'],
      ['LL', 'Slavensky', '●', 'Loyal Liberals back a four-decade educator and former deputy superintendent who would add to the Democratic majority on school funding and abortion rights.'],
      [
        'LO',
        'Slavensky',
        '◐',
        'Left-Out Left voters like Slavensky’s working-class roots, renter protections and child-care focus, though Slavensky is a labor- and party-backed candidate rather than an outsider.',
        'Experience-first Left-Out Left voters could note Hoover’s two terms and bipartisan homelessness audit, but it is a cross-party vote for the Republican floor leader endorsed by Howard Jarvis, giving up renter protections.',
      ],
      [
        'OO',
        'Slavensky',
        '◐',
        'Order and Opportunity Left voters want help with housing and child-care costs, which Slavensky offers, though Hoover’s homelessness-spending audit and prison officers’ endorsement speak to their wish for order.',
        'Experience-first Order and Opportunity Left voters could back Hoover, a two-term moderate who led a bipartisan homelessness audit; it is a cross-party vote that gives up renter protections and child-care help.',
      ],
      ['TM', 'Hoover / Slavensky', '=', 'Tuned-Out Middle voters worried about costs weigh gas against child care: if gas prices matter most, Hoover, who wants to suspend the gas tax; if child-care costs matter more, Slavensky, who focuses on them.'],
      ['PP', 'Hoover', '●', 'Pragmatic and Polite Right voters favor a moderate, incremental Republican who works across the aisle on school phone limits and homelessness audits.'],
      ['UR', 'Hoover', '◐', 'Unconventional Right voters back the Republican on the gas tax and homelessness accountability but see a Capitol insider rather than an outsider.'],
      ['FC', 'Hoover', '●', 'Faith First Conservatives prefer the Republican on local school control and taxes over a Democrat running on women’s rights.'],
      ['NA', 'Hoover', '◐', 'No Apologies Right voters back the Republican who wants to suspend the gas tax, though Hoover is a bipartisan dealmaker rather than a fighter.'],
    ]),
    counterArguments: [
      'PP (Hoover ●): But consider that as Republican floor leader Hoover is more tied to the caucus’s positions, while a Democrat in the supermajority may have more sway over district funding.',
      'LL (Slavensky ●): But consider that Slavensky has never held elected office and trails badly in fundraising, while Hoover has passed bipartisan bills.',
    ],
  },

  // ───────────────────────────── AD-9 ─────────────────────────────
  {
    id: 'assembly-ad9',
    categoryId: 'state-leg',
    title: 'State Assembly, District 9',
    tldrLabel: 'AD-9',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-9 spans parts of San Joaquin, Stanislaus, Sacramento, Amador and Calaveras counties, including Lodi, Manteca and eastern and southern Stockton.'),
    seatContext: 'Incumbent (final term)',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'AD-9 spans parts of San Joaquin, Stanislaus, Sacramento, Amador and Calaveras counties, including Lodi and Manteca. Flora, first elected in 2016, is running for his final term; Assembly Republicans removed him as their leader in August 2026 amid two state ethics investigations and anger over a tax vote.',
    ],
    introParagraphs: [
      'In the June 2 primary Flora led with 30.6%, Democrat Matthew Adams took 25.9% and Republican Jim Shoemaker, backed by local GOP leaders, 22.7%; Republicans combined for about 65% (certified Statement of Vote). The race turns on whether Republican-leaning voters stick with a weakened incumbent or a Democratic teacher can win a district Flora carried with 70% in 2024.',
    ],
    readingLinks: [
      {
        label: 'SJV Sun — Republicans oust Flora, select Macedo as Assembly leader (Aug 3, 2026)',
        url: 'https://sjvsun.com/news/politics/assembly-republicans-oust-flora-select-macedo-as-minority-leader/',
        summary: 'Why Flora lost the caucus leadership: his SB 762 vote and reported ethics investigations.',
      },
      {
        label: 'Stocktonia — Assembly incumbents vie with challengers (May 31, 2026)',
        url: 'https://stocktonia.org/news/politics/2026/05/31/state-assembly-incumbents-wil-vie-with-challengers-for-shot-at-general-election/',
        summary: 'Pre-primary look at AD-9 and AD-13, including local Republicans’ criticism of Flora.',
      },
    ],
    candidates: [
      {
        id: 'heath-flora',
        photoSlug: 'heath-flora',
        name: 'Heath Flora',
        party: 'R',
        role: 'Father/Farmer/Assemblyman',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Ten years in the Assembly, including a year as Republican leader and service as Budget Committee vice chair.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since Dec 2016; seven bills signed in his first term, including a firefighter pre-apprenticeship program.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Vice chair of the Assembly Budget Committee and Rules Committee member (The Ballot Brief); Republican leader Sept 2025–Aug 2026.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Has represented the northern San Joaquin Valley since 2016, but the Stanislaus GOP chair says he has been “virtually nonexistent in the district” (Stocktonia).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Voted with Democrats for SB 762 in 2026; bills signed under two governors.' },
          ],
        },
        bio: [
          'Flora, a former Cal Fire firefighter and longtime volunteer firefighter who owns a farm-equipment business, was first elected in 2016. He was Assembly Republican leader from September 2025 until colleagues ousted him on Aug. 3, 2026, after he voted for SB 762, which lets local voters exceed the sales-tax cap.',
          'Amador and San Joaquin County Republicans backed his primary rival.',
        ],
        recordVsChange:
          'Flora brings a decade of seniority and budget experience, but he has lost his caucus leadership and faces ethics investigations, so keeping him buys less influence than his tenure suggests.',
        scorecard: [
          { topic: 'Taxes', position: '~ Voted for SB 762, letting local voters raise sales taxes above the state cap', comparison: 'Adams has not published a tax position.' },
          { topic: 'Public safety', position: '✓ Former Cal Fire firefighter; wrote a firefighter pre-apprenticeship law', comparison: 'Adams favors prevention through housing, mental health and homelessness services.' },
          { topic: 'Housing & transit', position: '? No distinct 2026 housing platform found', comparison: 'Adams wants more affordable housing and tenant protections.' },
          { topic: 'Caucus / ideology', position: '~ Republican ousted as caucus leader in Aug 2026; local GOP backed his primary rival', comparison: 'Adams is endorsed by the California Democratic Party.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'No party endorsement found; Amador and San Joaquin County Republican parties backed Jim Shoemaker in the primary (as of Oct 2026).',
        redFlags: [
          {
            severity: 'serious',
            status: 'under-investigation',
            text: 'The Fair Political Practices Commission has two open investigations involving Flora, per FPPC case records reported by the Lodi News-Sentinel: one, opened April 2026 after an October 2025 complaint, over his reporting of more than $1.1 million in behested payments, and one, opened in March 2026, over possible misuse of campaign funds. The California Post separately reported about $11,500 in campaign spending at a Sacramento bar listed as district meetings. His office blamed staff and a third party for behested-payment filing errors and said it is working with the FPPC to correct them. No finding has been made.',
            whyItMatters: 'Legislators control their own campaign accounts and solicit behested payments from interests with business before the Legislature, so misuse would bear directly on this office.',
            sources: [
              { label: 'Lodi News-Sentinel (Aug 2026)', url: 'https://www.lodinews.com/news/article_100f5c0d-d850-4346-9a1b-e2e04f031270.html' },
              { label: 'SJV Sun (Aug 3, 2026)', url: 'https://sjvsun.com/news/politics/assembly-republicans-oust-flora-select-macedo-as-minority-leader/' },
              { label: 'GV Wire (Aug 3, 2026)', url: 'https://gvwire.com/2026/08/03/republicans-make-macedo-their-california-assembly-leader/' },
            ],
          },
        ],
        notes: [
          'The Sacramento Bee reported in 2025 that Flora registered to vote at a family property in Modesto while apparently living in Sacramento, which made him eligible for $42,416 in tax-free per diem in 2024; no official finding has been reported — https://en.wikipedia.org/wiki/Heath_Flora',
        ],
      },
      {
        id: 'matthew-adams',
        name: 'Matthew Adams',
        party: 'D',
        role: 'Teacher',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Classroom teacher and former field organizer with no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected or legislative experience found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No committee or budget experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Born in Lodi, lives in Woodbridge and teaches locally (The Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'Former regional field organizer for Equality California; no legislative record.' },
          ],
        },
        bio: [
          'Adams, born in Lodi and living in Woodbridge, teaches middle and high school math, science and government and was a regional field organizer for Equality California. He graduated from Lodi High School and Sacramento State.',
          'He runs on affordable housing, tenant protections and prevention-focused public safety.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓✓ Expand affordable housing and tenant protections while holding developers accountable', comparison: 'Flora has no distinct 2026 housing platform.' },
          { topic: 'Public safety', position: '✓ Prevention-focused: housing, mental-health care and homelessness services', comparison: 'Flora is a former firefighter who wrote a fire pre-apprenticeship law.' },
          { topic: 'Education', position: '? Classroom teacher; no detailed education platform found', comparison: 'Flora has no distinctive education platform found.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat endorsed by the state party and Run for Something', comparison: 'Flora lost his Republican caucus leadership in Aug 2026.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'California Democratic Party; Center for Biological Diversity Action Fund; Run for Something (as listed Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Adams', '●', 'Leftward Progressives back a teacher and former Equality California organizer running on tenant protections and prevention-first public safety.'],
      [
        'LL',
        'Adams',
        '◐',
        'Loyal Liberals back the Democrat and take the two open FPPC investigations of Flora seriously, but see a first-time candidate with no governing record.',
        'Experience-first Loyal Liberals could back Flora, a 10-year legislator and former budget vice chair who crossed party lines on SB 762, though they would elect a Republican now under two state ethics investigations.',
      ],
      ['LO', 'Adams', '●', 'Left-Out Left voters, who suspect officials of serving themselves, favor a local teacher over an incumbent under investigation for misusing campaign funds and misreporting behested payments.'],
      [
        'OO',
        'Adams',
        '◐',
        'Order and Opportunity Left voters like Adams’s affordable-housing and tenant agenda and are put off by Flora’s ethics investigations, though Adams’s prevention-first safety approach is softer than some want.',
        'Experience-first Order and Opportunity Left voters could stay with Flora, a former firefighter with a decade of budget experience; it is a cross-party vote for a lawmaker under two FPPC investigations.',
      ],
      [
        'TM',
        'Adams',
        '○',
        'Tuned-Out Middle voters turned off by Flora’s reported campaign spending at a bar may lean to the local teacher, though Adams is little known.',
        'Experience-first Tuned-Out Middle voters could stay with Flora, who has a decade in the Capitol, but they would be accepting a lawmaker under state investigation over campaign spending.',
      ],
      ['PP', 'Flora', '○', 'Pragmatic and Polite Right voters credit Flora’s budget experience and willingness to cross party lines on SB 762, but the two open ethics investigations make this a weak lean.'],
      ['UR', 'Flora', '○', 'Unconventional Right voters dislike Flora’s vote to let local sales taxes exceed the cap and side with the local Republicans who opposed him, but a progressive Democrat is no alternative.'],
      ['FC', 'Flora', '○', 'Faith First Conservatives lean Republican, but reported campaign spending at a bar and the ethics investigations trouble voters who weigh personal conduct.'],
      ['NA', 'Flora', '◐', 'No Apologies Right voters prefer the Republican to an Equality California organizer, though they are angered by Flora’s vote with Democrats on SB 762.'],
    ]),
    counterArguments: [
      'NA (Flora ◐): But consider that Flora faces two state ethics investigations over behested payments and campaign spending, and Flora’s own caucus removed him as leader.',
      'PP (Flora ○): But consider that Republicans in Amador and San Joaquin counties backed another candidate, the Stanislaus GOP chair says Flora has been absent from the district, and the FPPC cases are still open.',
      'LP (Adams ●): But consider that Adams has never held office in a district that has voted heavily Republican, so Adams would start with little leverage.',
    ],
  },

  // ───────────────────────────── AD-10 ─────────────────────────────
  {
    id: 'assembly-ad10',
    categoryId: 'state-leg',
    title: 'State Assembly, District 10',
    tldrLabel: 'AD-10',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-10 covers Elk Grove, Florin, Vineyard and parts of Sacramento.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'AD-10 covers Elk Grove, Florin, Vineyard and parts of south Sacramento. Nguyen, first elected in 2022, is seeking a third term in a rematch with her 2024 Republican opponent, Vinaya Singh.',
    ],
    introParagraphs: [
      'In the June 2 primary Nguyen won 71.7% and Singh 28.3%; they were the only candidates (certified Statement of Vote). Nguyen beat Singh with 67.6% in 2024. The race turns on whether voters keep a Democrat focused on child-care costs and disability services or choose a Republican engineer emphasizing crime, homelessness and special-interest influence.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 10',
        url: 'https://theballotbrief.com/state/california/sacramento-county/california-assembly-district-10',
        summary: 'Neutral roster page with June results, committee roles and Singh’s stated priorities.',
      },
    ],
    candidates: [
      {
        id: 'stephanie-nguyen',
        photoSlug: 'stephanie-nguyen',
        name: 'Stephanie Nguyen',
        party: 'D',
        role: 'State Assemblymember',
        campaignUrl: 'https://www.stephanienguyenforassembly.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Two-term Assemblymember and former Elk Grove councilmember who ran a regional nonprofit.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since Dec 2022; AB 1172 signed Oct 2025; AB 354 added an Elk Grove seat on the Sacramento Regional Transit board.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Co-chair, Select Committee on Child Care Costs; member of the Insurance and Public Safety committees.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Elk Grove City Council 2017–2022; former executive director of Asian Resources Inc.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Several bills signed; a CalMatters Digital Democracy snapshot showed 5 of 32 bills passed this session.' },
          ],
        },
        bio: [
          'Nguyen, the daughter of Vietnamese refugees, ran Asian Resources Inc., a Sacramento nonprofit offering job training and health-coverage enrollment, and served on the Elk Grove City Council from 2017 to 2022. She co-chairs the Select Committee on Child Care Costs.',
          'Her 2025 law AB 1172 allows emergency anti-seizure nasal medication at adult day programs.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Won an Elk Grove seat on the Sacramento Regional Transit board (AB 354)', comparison: 'Singh has not published a transit or housing plan.' },
          { topic: 'Education', position: '✓ Co-chairs the Select Committee on Child Care Costs', comparison: 'Singh prioritizes better K–12 outcomes.' },
          { topic: 'Public safety', position: '✓ Sits on the Public Safety Committee', comparison: 'Singh emphasizes crime and homelessness.' },
          { topic: 'Caucus / ideology', position: '~ Party-endorsed Democrat; oil interests spent about $979,000 backing her 2022 race', comparison: 'Singh says he will reduce special-interest influence in Sacramento.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'California Democratic Party; Sacramento Bee editorial board (May 3, 2026).',
      },
      {
        id: 'vinaya-singh',
        name: 'Vinaya Singh',
        party: 'R',
        role: 'Retired Application Developer',
        campaignUrl: 'https://drsinghforassembly.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Retired scientist and IT professional with no elected or legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected or legislative experience found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No committee or budget experience found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'Local civic roles not documented beyond his 2024 campaign.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No legislative record to assess.' },
          ],
        },
        bio: [
          'Singh immigrated from India in 1999 and became a U.S. citizen in 2016. A former scientist at the Indian Space Research Organization, he later worked in California information technology and holds a PhD in management. He lost to Nguyen in 2024.',
          'He runs on reducing special-interest influence, homelessness and crime, and better K–12 outcomes.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓ Prioritizes addressing crime and homelessness', comparison: 'Nguyen serves on the Public Safety Committee.' },
          { topic: 'Education', position: '✓ Wants better K–12 outcomes', comparison: 'Nguyen focuses on child-care costs.' },
          { topic: 'Taxes', position: '? No published tax position', comparison: 'Nguyen has no tax-specific platform found.' },
          { topic: 'Caucus / ideology', position: '✓ Republican pledging to reduce special-interest influence', comparison: 'Nguyen’s 2022 race drew heavy oil-industry spending.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'No endorsements found as of Oct 8, 2026.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Nguyen', '◐', 'Leftward Progressives prefer the Democrat but note the heavy oil-industry spending behind Nguyen’s first race.'],
      ['LL', 'Nguyen', '●', 'Loyal Liberals value a former councilmember and nonprofit director with signed bills on transit and disability services.'],
      ['LO', 'Nguyen', '○', 'Left-Out Left voters dislike the oil money behind Nguyen’s first race and may like Singh’s anti-special-interest pitch, but still prefer Nguyen’s child-care cost work to a Republican.'],
      ['OO', 'Nguyen', '◐', 'Order and Opportunity Left voters want help with costs and safety, and Nguyen co-chairs the child-care costs committee and sits on Public Safety, though Singh’s crime message also appeals.'],
      ['TM', 'Nguyen', '○', 'Tuned-Out Middle voters worried about child-care costs get an incumbent focused on them, though Singh’s crime message also resonates.'],
      ['PP', 'Nguyen', '○', 'Pragmatic and Polite Right voters weigh experience over party and may find a pragmatic former councilmember on the Public Safety Committee more credible than a challenger with no record.'],
      [
        'UR',
        'Singh',
        '◐',
        'Unconventional Right voters like Singh’s focus on crime and homelessness and his promise to curb special-interest influence, though Singh’s campaign is small.',
        'Experience-first Unconventional Right voters could pick Nguyen, a two-term Assemblymember and former Elk Grove councilmember; it means backing a Democrat whose first race drew oil-industry money.',
      ],
      [
        'FC',
        'Singh',
        '◐',
        'Faith First Conservatives lean to the Republican, though Singh’s platform does not address the faith and family issues they put first.',
        'Experience-first Faith First Conservatives could back Nguyen, who has passed bills on disability services and child care, though it is a cross-party vote over the Republican.',
      ],
      ['NA', 'Singh', '●', 'No Apologies Right voters back the Republican on crime, homelessness and curbing Sacramento’s special interests.'],
    ]),
    counterArguments: [
      'NA (Singh ●): But consider that Singh has never held office and lost to Nguyen by about 35 points in 2024, while Nguyen’s seat in the majority helps steer district funding.',
      'LP (Nguyen ◐): But consider that oil interests spent about $979,000 to elect Nguyen in 2022, which may concern voters focused on climate.',
    ],
  },

  // ───────────────────────────── AD-11 ─────────────────────────────
  {
    id: 'assembly-ad11',
    categoryId: 'state-leg',
    title: 'State Assembly, District 11',
    tldrLabel: 'AD-11',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-11 covers much of Solano County plus Oakley in Contra Costa County and part of Sacramento County.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'AD-11 covers much of Solano County, including Suisun City and Dixon, plus Oakley in Contra Costa County and part of Sacramento County. Wilson chairs the Assembly Transportation Committee, which shapes highway, transit and gas-tax policy.',
    ],
    introParagraphs: [
      'In the June 2 primary Wilson took 65.3%, no-party-preference candidate Jenny Callison 23.6% and fellow independent Rochelle Conner 11.1%; no Republican ran (certified Statement of Vote). Callison also finished second to Wilson in 2022. The race turns on Wilson’s transportation leadership versus Callison’s independent, cost-cutting pitch.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 11',
        url: 'https://theballotbrief.com/state/california/solano-county/california-assembly-district-11',
        summary: 'Neutral roster page with June results, committee roles and Callison’s stated priorities.',
      },
    ],
    candidates: [
      {
        id: 'lori-wilson',
        photoSlug: 'lori-wilson',
        name: 'Lori Wilson',
        party: 'D',
        role: 'Assemblymember, 11th District',
        campaignUrl: 'https://www.electloriwilson.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assemblymember since 2022 who chairs the Transportation Committee; former Suisun City mayor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since 2022; authored AB 957 (vetoed in 2023).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Transportation Committee chair since Nov 2023; member of Budget, Housing, Local Government and Privacy committees (The Ballot Brief).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Former mayor of Suisun City.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'As chair, moves major transportation bills such as 2024’s AB 1777 on driverless cars; her own signed bills not verified for this guide.' },
          ],
        },
        bio: [
          'Wilson, a former Suisun City mayor, joined the Assembly in 2022 and in November 2023 became chair of the Transportation Committee, the first Black woman in that post. She also sits on the Budget, Housing, Local Government and Privacy committees.',
          'Her 2023 bill AB 957, on gender-identity affirmation in custody cases, was vetoed by Gov. Newsom.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓✓ Chairs the Transportation Committee; serves on Housing and Local Government', comparison: 'Callison wants to cut the gas tax and tolls and streamline permits.' },
          { topic: 'Taxes', position: '? No tax-cut platform found', comparison: 'Callison would cut the gas tax and fees on families and small businesses.' },
          { topic: 'Education', position: '✓ Authored AB 957 on affirming a child’s gender identity in custody cases (vetoed)', comparison: 'Callison emphasizes parental rights and school choice.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat endorsed by the state party', comparison: 'Callison runs with no party preference.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'California Democratic Party (as of Oct 2026).',
      },
      {
        id: 'jenny-callison',
        name: 'Jenny Callison',
        party: 'NP',
        role: 'Legislative Consultant',
        campaignUrl: 'https://callison2026.com/',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'More than 14 years as legislative staff, most recently a Senate committee’s chief consultant; never elected.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: '14+ years in the Legislature, most recently chief consultant to the Senate Military and Veterans Affairs Committee (campaign site).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Committee consultant role; no elected budget votes.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Dixon resident; ran for this seat in 2022; nine years as a Junior Giants coach.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No documented record of passing legislation as a principal.' },
          ],
        },
        bio: [
          'Callison, of Dixon, is a U.S. Army veteran who says she spent more than 14 years working in the Legislature, most recently as chief consultant to the Senate Military and Veterans Affairs Committee. She runs with no party preference.',
          'She wants to cut the gas tax, tolls and fees, expand school choice and parental rights, and support Travis Air Force Base families.',
        ],
        scorecard: [
          { topic: 'Taxes', position: '✓✓ Cut the gas tax, tolls and fees on families and small businesses', comparison: 'Wilson has no tax-cut platform found.' },
          { topic: 'Housing & transit', position: '✓ Streamline permitting and reduce regulatory burdens; restore local control', comparison: 'Wilson chairs the Transportation Committee.' },
          { topic: 'Education', position: '✓ School choice, parental rights and better access to special-education plans', comparison: 'Wilson’s AB 957 would have made gender affirmation a custody factor.' },
          { topic: 'Caucus / ideology', position: '~ No party preference; center-right on taxes and schools', comparison: 'Wilson is a Democrat endorsed by the state party.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'None listed on her campaign site as of Oct 8, 2026.',
      },
    ],
    crossTypology: ct([
      ['LP', 'Wilson', '●', 'Leftward Progressives back the Democrat who authored a gender-affirmation custody bill over an independent pushing tax cuts and school choice.'],
      ['LL', 'Wilson', '●', 'Loyal Liberals value a committee chair and former mayor who works within the Democratic majority.'],
      ['LO', 'Wilson', '◐', 'Left-Out Left voters may like an independent, but Callison’s school-choice and deregulation agenda runs against their wish for strong public services.'],
      ['OO', 'Wilson / Callison', '=', 'Order and Opportunity Left voters weigh clout against cost relief: if steady leadership matters most, Wilson, the Transportation chair who can steer road and transit money; if a gas-tax cut matters more, Callison, an Army veteran who promises one.'],
      ['TM', 'Callison', '◐', 'Tuned-Out Middle voters tired of both parties may be drawn to an independent promising lower gas taxes, tolls and fees.'],
      ['PP', 'Callison', '◐', 'Pragmatic and Polite Right voters, with no Republican on the ballot, prefer a veteran with 14 years of legislative staff experience who promises fiscal restraint and permit streamlining.'],
      ['UR', 'Callison', '◐', 'Unconventional Right voters favor the independent promising to cut gas taxes and regulation and restore local control over the Democratic committee chair.'],
      ['FC', 'Callison', '●', 'Faith First Conservatives value Callison’s parental-rights emphasis and oppose Wilson’s AB 957 on gender identity in custody cases.'],
      ['NA', 'Callison', '◐', 'No Apologies Right voters back the candidate closer to them on taxes, deregulation and parental rights, though Callison is not a Republican.'],
    ]),
    counterArguments: [
      'FC (Callison ●): But consider that Callison has never held elected office and, without a party caucus, may have little leverage in the Assembly.',
      'LL (Wilson ●): But consider that Callison’s 14 years as legislative staff give her real knowledge of the Capitol, and an independent may appeal to voters wary of one-party control.',
    ],
  },

  // ───────────────────────────── AD-13 ─────────────────────────────
  {
    id: 'assembly-ad13',
    categoryId: 'state-leg',
    title: 'State Assembly, District 13',
    tldrLabel: 'AD-13',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-13 covers most of Stockton plus Tracy, Mountain House and French Camp in San Joaquin County.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES,
      'AD-13 covers most of Stockton plus Tracy, Mountain House and French Camp in San Joaquin County. Ransom, first elected in 2024, chairs the Assembly Emergency Management Committee; Patti is a former county supervisor who has run for Congress and Stockton mayor.',
    ],
    introParagraphs: [
      'In the June 2 primary Ransom took 58.3% and Patti 35.3%, ahead of Republican Ali Jafri and independent Eliza Dy (certified Statement of Vote). The race turns on Ransom’s first-term record on emergency preparedness and consumer protections versus Patti’s argument that Sacramento over-regulates local business.',
    ],
    readingLinks: [
      {
        label: 'Stocktonia — Assembly incumbents vie with challengers (May 31, 2026)',
        url: 'https://stocktonia.org/news/politics/2026/05/31/state-assembly-incumbents-wil-vie-with-challengers-for-shot-at-general-election/',
        summary: 'Pre-primary profiles of Ransom and Patti and their main arguments.',
      },
    ],
    candidates: [
      {
        id: 'rhodesia-ransom',
        photoSlug: 'rhodesia-ransom',
        name: 'Rhodesia Ransom',
        party: 'D',
        role: 'State Assemblymember',
        campaignUrl: 'https://www.voteransom.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term Assemblymember and committee chair with prior city council and congressional district-office experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since Dec 2024; six bills signed in 2025 per her office, including AB 1414 and AB 741.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair, Assembly Emergency Management Committee (2026).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Tracy City Council 2016–2020; district director for Rep. Josh Harder from 2021; office reports more than $1 million recovered for constituents (Stocktonia).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Six bills signed in her first year; bipartisan vote margins not verified for this guide.' },
          ],
        },
        bio: [
          'Ransom served on the Tracy City Council from 2016 to 2020, ran a youth mentoring and mental-health nonprofit, and was district director for Rep. Josh Harder before winning this seat in 2024. She chairs the Emergency Management Committee.',
          'Her office says six of her bills became law in 2025, including AB 1414 on tenant internet contracts.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ AB 1414 stops landlords from locking tenants into internet contracts', comparison: 'Patti argues state regulation raises costs for local businesses.' },
          { topic: 'Public safety', position: '✓✓ Chairs Emergency Management; seeks courthouse and emergency-preparedness funding', comparison: 'Patti cites fighting crime as a county supervisor.' },
          { topic: 'Climate', position: '✓ Protecting the Delta from invasive species and securing water infrastructure', comparison: 'Patti has not published a Delta position.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat and former DNC member, endorsed by the state party', comparison: 'Patti is endorsed by the California Republican Party.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'California Democratic Party (as of Oct 2026).',
      },
      {
        id: 'tom-patti',
        photoSlug: 'tom-patti',
        name: 'Tom Patti',
        party: 'R',
        role: 'Businessman/Father',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Eight years as a San Joaquin County supervisor and a longtime business owner; no state legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'San Joaquin County Board of Supervisors (District 3), 2016–2024, voting on county ordinances.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Voted on county budgets for eight years.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Longtime Stockton resident; represented a county district including parts of Stockton.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No documented record of cross-party legislative deals.' },
          ],
        },
        bio: [
          'Patti, a Stockton businessman and former boxer who once managed Mike Tyson, served on the San Joaquin County Board of Supervisors from 2016 to 2024. He lost to Harder for Congress in 2022 and to Christina Fugazi for Stockton mayor in 2024.',
          'He warns of a state fiscal crisis and says Democrats’ regulations hurt local businesses.',
        ],
        scorecard: [
          { topic: 'Taxes', position: '✓ Ran as supervisor on lowering taxes; warns of a state fiscal crisis', comparison: 'Ransom has no tax-specific platform found.' },
          { topic: 'Public safety', position: '✓ Ran as supervisor on fighting crime and homelessness', comparison: 'Ransom chairs the Emergency Management Committee.' },
          { topic: 'Housing & transit', position: '✓ Says state rules, such as new labeling requirements, hurt local retailers', comparison: 'Ransom wrote tenant internet-contract protections.' },
          { topic: 'Caucus / ideology', position: '✓ Republican endorsed by the state party', comparison: 'Ransom is a Democrat endorsed by the state party.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'California Republican Party (as of Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['LP', 'Ransom', '●', 'Leftward Progressives back the Democrat on tenant protections and consumer safeguards over a Republican who attacks state regulation.'],
      ['LL', 'Ransom', '●', 'Loyal Liberals value a committee chair with six laws in her first year and congressional-office experience.'],
      ['LO', 'Ransom', '◐', 'Left-Out Left voters see Ransom as a party insider and former DNC member, but her tenant protections and constituent casework offer more practical help than Patti’s deregulation pitch.'],
      ['OO', 'Ransom', '◐', 'Order and Opportunity Left voters value Ransom’s emergency-preparedness and courthouse funding and tenant protections, though Patti’s crime-fighting record as supervisor also appeals.'],
      ['TM', 'Ransom', '○', 'Tuned-Out Middle voters may value an office that reports recovering over $1 million for constituents, though Patti’s lower-tax message also speaks to them.'],
      ['PP', 'Patti', '◐', 'Pragmatic and Polite Right voters like Patti’s eight years of county budget experience and warnings about state finances, though Ransom’s steady first term makes this a trade-off.'],
      ['UR', 'Patti', '●', 'Unconventional Right voters favor a plain-spoken businessman who attacks Sacramento regulation and ran on lower taxes and fighting crime.'],
      ['FC', 'Patti', '◐', 'Faith First Conservatives prefer the Republican, though Patti’s campaign centers on costs rather than faith and family issues.'],
      ['NA', 'Patti', '●', 'No Apologies Right voters back the Republican who says Democrats’ regulations hurt business and promises fiscal restraint.'],
    ]),
    counterArguments: [
      'UR (Patti ●): But consider that Patti has lost his last two races, for Congress and Stockton mayor, while Ransom chairs a committee and passed six laws in her first year.',
      'LL (Ransom ●): But consider that Patti spent eight years voting on county budgets, which some voters may see as more relevant fiscal experience than Ransom’s single Assembly term.',
    ],
  },
];
