import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Denver ZIP 80204 (one-off Colorado ballot): state legislature, Denver City Council At-Large B vacancy,
 * RTD District C, Denver Referred Questions 2H–2K, Initiated Ordinance 311 and DPS Ballot Issue 4A.
 * Federal/statewide offices, statewide measures and judicial retention live in co-statewide.ts,
 * co-measures.ts and co-courts.ts. District shares and method: docs/denver-80204-scope.md.
 *
 * Candidate rosters follow the Colorado Secretary of State’s official 2026 General Election candidate list
 * (certified to counties Sept. 4, 2026). Denverite pages were read via the Internet Archive.
 */

const SOS_LIST = 'https://www.sos.state.co.us/pubs/elections/vote/generalCandidates.html';
const SOS_LINK = {
  label: 'Colorado Secretary of State: 2026 General Election official candidate list',
  url: SOS_LIST,
  summary: 'Certified list of every candidate on the Nov. 3 ballot, by office and district.',
};
const DENVERITE_GUIDE = {
  label: 'Denverite: 2026 Denver voter guide (Sept. 25, 2026)',
  url: 'https://denverite.com/2026/09/25/vg-2026-denver-midterm-election-voter-guide/',
  summary: 'Every Denver-specific contest and measure, with candidate interviews.',
};
const DENVERITE_PRIMARY = 'https://denverite.com/2026/07/01/denver-2026-primary-results/';
const BOOKLET_URL =
  'https://www.denvergov.org/files/assets/public/v/1/clerk-and-recorder/documents/elections-division/2026/documents/26-general-election/2026-eng-ballot-info-book_accessible.pdf';
const BOOKLET_LINK = {
  label: 'Denver Clerk and Recorder: 2026 Ballot Information Booklet',
  url: BOOKLET_URL,
  summary: 'Official ballot question, fiscal information, public comments for and against, and full text for 2H, 2I, 2J, 2K and 311.',
};
const TABOR_URL =
  'https://www.denvergov.org/files/assets/public/v/2/clerk-and-recorder/documents/elections-division/2026/documents/26-general-election/tabor_eng-text.pdf';

// ───────────────────────────── Measure money and positions shared ─────────────────────────────
// City measures: Denver Clerk and Recorder’s SearchLight Denver portal (September monthly reports, period
// ending Sept. 30, filed Oct. 4–5, 2026). DPS 4A: Colorado TRACER (school-district committees file with the state).
// Positions: Denver Democrats (Central Committee) and Denver Republican Party ballot guides, read Oct. 12, 2026.
// The Denver Post editorial board’s 2026 picks could not be read (denverpost.com blocks automated access); only its
// No on DPS 4A (Sept. 13, 2026 editorial, as reported and linked by Chalkbeat, rechecked Oct. 15) is included.
// The Denver Gazette editorial board’s Nov. 3 recommendations (checked Oct. 15) cover 4A (No) but none of the city
// measures 2H–2K or 311; no Post or Gazette editorial on those was found.
const DENVER_MONEY_AS_OF = 'Sept. 30, 2026';
const DENVER_CF_SOURCE = {
  label: 'Denver Clerk and Recorder — SearchLight Denver campaign finance (September reports)',
  url: 'https://denver.maplight.com/public',
};
const DENVER_DEMS_URL = 'https://www.denverdemocrats.org/vote';
const DENVER_GOP_URL = 'https://www.denvergop.org/';
const denverDems = (position: 'Yes' | 'No' | 'No position') => ({ org: 'Denver Democratic Party', kind: 'party' as const, position, url: DENVER_DEMS_URL });
const denverGop = (position: 'Yes' | 'No' | 'No position') => ({ org: 'Denver Republican Party', kind: 'party' as const, position, url: DENVER_GOP_URL });

// ───────────────────────────── Legislature shared ─────────────────────────────

const LEGAL_SENATE =
  'At least 25, a U.S. citizen, and a resident of the district for 12 months before the election (Colorado Constitution art. V, § 4); senators are limited to two consecutive four-year terms (art. V, § 3).';
const LEGAL_HOUSE =
  'At least 25, a U.S. citizen, and a resident of the district for 12 months before the election (Colorado Constitution art. V, § 4); representatives are limited to four consecutive two-year terms (art. V, § 3).';

const SENATE_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'law-policy', label: 'Lawmaking, legal drafting or policy experience', detail: 'Senators write, amend and vote on state statutes and confirm governor appointees.' },
  { id: 'budget-oversight', label: 'Budget and committee work', detail: 'Colorado’s balanced-budget and TABOR limits make budget votes central to the job.' },
  { id: 'public-mgmt', label: 'Managing a public agency or elected body', detail: 'Experience running or governing a public organization transfers to oversight of state agencies.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both chambers and the governor’s signature.' },
];

const HOUSE_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Representatives write, amend and vote on state statutes.' },
  { id: 'committee-budget', label: 'Committee and budget work', detail: 'Committee votes decide which bills reach the floor; every member votes on the annual budget.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both chambers and the governor’s signature.' },
];

// ───────────────────────────── City Council shared ─────────────────────────────

const COUNCIL_CRITERIA: QualificationCriterion[] = [
  { id: 'legislating', label: 'Lawmaking, policy or public-board experience', detail: 'Council passes ordinances, approves contracts and confirms mayoral appointees.' },
  { id: 'budget', label: 'Budget and fiscal oversight', detail: 'Council adopts the city budget; the 2025 shortfall led to 171 layoffs.' },
  { id: 'city-services', label: 'Knowledge of city government and services', detail: 'The job turns on how planning, transportation, public safety and housing agencies actually work.' },
  { id: 'community', label: 'Citywide community engagement', detail: 'At-large members answer to every Denver voter, not one district.' },
];
const COUNCIL_LEGAL =
  'At least 25, a U.S. citizen, a Denver resident for two years before the election, and a Denver resident while serving (Denver Charter § 3.1.3, as summarized by City Council).';
const COUNCIL_ABOUT = 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Denver-City-Council/About';
const AT_LARGE_GUIDE = 'https://denverite.com/2026/09/25/vg-2026-denver-city-council-at-large-b-voter-guide';
const AT_LARGE_MONEY = 'https://denverite.com/2026/09/21/denver-city-council-election-endorsements-campaign-finance/';
const NO_MONEY = 'No individual total found in news coverage; Denverite reported the 10 campaigns had raised about $128,000 in individual contributions combined as of Sept. 21, 2026, plus about $180,000 in Fair Elections Fund matching money.';

export const RACES_CO_DENVER: Race[] = [
  // ───────────────────────────── SD 34 ─────────────────────────────
  {
    id: 'co-senate-sd34',
    categoryId: 'state-leg',
    title: 'Colorado State Senate, District 34',
    tldrLabel: 'CO SD-34',
    seatContext: 'Open (term limits)',
    kind: 'candidates',
    legalRequirements: LEGAL_SENATE,
    qualificationCriteria: SENATE_CRITERIA(
      'SD-34 covers downtown, west and northwest Denver, about 166,000 people, including most of 80204 (Sun Valley, Villa Park, Barnum, La Alma/Lincoln Park, Jefferson Park).',
    ),
    stakesParagraphs: [
      'Colorado’s 35 state senators pass the annual budget within TABOR’s limits, write law on housing, transit, policing, health care and immigration, and confirm the governor’s appointees. Senators serve four-year terms; Democrats hold the majority.',
      'District 34 is one of Denver’s most heavily Democratic and Latino districts. Sen. Julie Gonzales, a leading progressive voice who held it since 2019, is term-limited and lost a U.S. Senate primary to John Hickenlooper. Whoever wins will likely hold the seat for up to eight years.',
    ],
    introParagraphs: [
      'In the June 30 Democratic primary, Chela Garcia Irlando beat Andrés Carrera, a former political director for Mayor Mike Johnston, with about 68% of the vote in next-day unofficial returns (Colorado Politics). Denverite reported in July that Jack Daus was the unopposed Republican nominee, but the Secretary of State’s certified general-election list (Sept. 4) shows Jennifer Qualteri as the Republican and does not list Daus. We found no reporting on the change. Libertarian Jacob Luria is also on the ballot.',
      'No public polling or debates were found. In a district this Democratic, the November result is rarely close.',
    ],
    readingLinks: [
      SOS_LINK,
      {
        label: 'Denverite: Get to know Chela Garcia Irlando (Jan. 27, 2026)',
        url: 'https://denverite.com/2026/01/27/chela-garcia-irlando-colorado-senate-district-34/',
        summary: 'Her background, priorities and the district’s makeup.',
      },
      {
        label: 'Colorado Politics: state Senate primary winners (June 30, 2026)',
        url: 'https://www.coloradopolitics.com/2026/06/30/colorado-voters-pick-state-senate-primary-winners/',
        summary: 'Primary returns and both Democratic candidates’ backgrounds.',
      },
      {
        label: 'The Ballot Brief: Colorado Senate District 34',
        url: 'https://theballotbrief.com/state/colorado/denver-county/colorado-senate-district-34',
        summary: 'Neutral roster page; notes no campaign sites found for Qualteri or Luria as of Sept. 8.',
      },
    ],
    candidates: [
      {
        id: 'chela-garcia-irlando',
        name: 'Chela Garcia Irlando',
        party: 'D',
        role: 'Executive Director, Next 100 Coalition',
        campaignUrl: 'https://www.chelaforcolorado.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'Has run a national environmental nonprofit and was executive director of the Colorado Democratic Latino Caucus, staffing Latino legislators at the Capitol. She has not held elected office.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'partial', evidence: 'As executive director of the Colorado Democratic Latino Caucus, served Latino state legislators during the pandemic and helped launch the first Colorado Latino policy agenda (Denverite).' },
            { criterionId: 'budget-oversight', assessment: 'unknown', evidence: 'No public record of state budget or committee work; runs a nonprofit’s budget as executive director.' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Executive director of the Next 100 Coalition (national environmental nonprofit) and previously of the Latino Caucus; a nonprofit, not a public agency.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Raising two children in Barnum; says she has knocked doors in the district since 2006; managed Serena Gonzales-Gutierrez’s 2018 council campaign (Denverite).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Built the caucus policy agenda with legislators; founded the Colorado chapter of Latino Outdoors. No bills of her own.' },
          ],
        },
        bio: [
          'Garcia Irlando, 33, is a multigenerational Coloradan raising two children in Barnum. She runs the Next 100 Coalition, a national environmental nonprofit, and previously led the Colorado Democratic Latino Caucus. She founded the Colorado chapter of Latino Outdoors and holds degrees in international affairs, Chicano studies and environmental studies from CU Boulder (Denverite).',
          'Her campaign centers on affordability: she cites the $40,000 a year her family pays for child care, wages that lag living costs, and access to health care, food and debt-free education. She also lists climate and water and “government reform” among her priorities.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Says families should not be pushed out of their neighborhoods; affordability is her top issue', comparison: 'Neither opponent has published a platform.' },
          { topic: 'Climate', position: '✓✓ Runs a national environmental nonprofit; lists protecting Colorado’s climate and water', comparison: 'Luria’s 2022 platform focused on cutting taxes and spending; Qualteri has published nothing.' },
          { topic: 'Education', position: '✓ Supports education “without lifelong debt” and child-care relief', comparison: 'No stated positions from her opponents.' },
          { topic: 'Public safety', position: '? No specific public-safety plan found', comparison: 'No stated positions from her opponents.' },
          { topic: 'Taxes', position: '? No tax plan found; frames her agenda around wages and costs', comparison: 'Luria’s 2022 survey answers favored abolishing the state income tax.' },
          { topic: 'Caucus / ideology', position: '✓ Calls for “progressive champions”; endorsed by Sen. Julie Gonzales', comparison: 'Beat a Johnston-aligned Democrat in the primary.' },
        ],
        money: 'Not compiled; see Colorado TRACER (https://tracer.sos.colorado.gov/).',
        endorsements: 'Sen. Julie Gonzales (Denverite, Jan. 2026).',
      },
      {
        id: 'jennifer-qualteri',
        name: 'Jennifer Qualteri',
        party: 'R',
        role: 'Republican nominee',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'No biography, campaign site or news coverage was found.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'budget-oversight', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'public-mgmt', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'Qualteri is the Republican nominee on the certified candidate list. We found no campaign website, candidate statement or news coverage. Denverite had reported in July that Jack Daus was the unopposed Republican primary winner; we could not confirm how Qualteri replaced him.',
        ],
        scorecard: [
          { topic: 'Platform', position: '? No published positions found', comparison: 'Garcia Irlando runs on affordability and climate.' },
          { topic: 'Caucus / ideology', position: '? Republican nominee; no stated positions', comparison: 'Garcia Irlando is a progressive Democrat.' },
        ],
        money: 'Not found.',
        notes: ['If you know more about this candidate, check the Secretary of State list and Colorado TRACER for filings.'],
      },
      {
        id: 'jacob-luria',
        name: 'Jacob Luria',
        party: 'L',
        role: 'Libertarian nominee',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Ran as a Libertarian for state House District 27 in 2022; no record of holding office.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'unknown', evidence: 'No public record of policy or legislative work found.' },
            { criterionId: 'budget-oversight', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'public-mgmt', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'His 2022 race was in HD 27 (Jefferson County); no Denver record found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'Luria ran as a Libertarian against Rep. Brianna Titone in House District 27 in 2022, pitching the campaign as a better option than the two major parties. Luria’s 2022 iVoterGuide answers favored abolishing the state income tax and cutting state spending. No 2026 campaign site was found.',
        ],
        scorecard: [
          { topic: 'Taxes', position: '✓✓ 2022 answers favored abolishing the state income tax', comparison: 'Garcia Irlando has no tax-cut agenda.' },
          { topic: 'Spending', position: '✓ 2022 answers favored cutting state spending', comparison: 'Garcia Irlando emphasizes public services such as child care and health care.' },
          { topic: 'Caucus / ideology', position: '✓ Libertarian, outside both major caucuses', comparison: 'Garcia Irlando would join the Democratic majority.' },
        ],
        money: 'Not found.',
        notes: ['Positions are from the 2022 campaign (https://ivoterguide.com/candidate/72978/race/32795/election/1475) and may have changed.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Garcia Irlando', '●', 'Progressive Left voters back the candidate who beat a mayor-aligned Democrat while calling for “progressive champions,” with Sen. Gonzales’s endorsement.'],
      ['EL', 'Garcia Irlando', '●', 'Establishment Liberals favor the Democratic nominee, who has worked inside the Capitol with the Latino Caucus.'],
      ['DM', 'Garcia Irlando', '●', 'Democratic Mainstays follow the party nominee in a safely Democratic seat focused on family costs.'],
      ['OL', 'Garcia Irlando', '◐', 'Outsider Left voters like her affordability and climate focus, though she is a party-caucus insider rather than an outsider.'],
      ['SS', 'Garcia Irlando', '○', 'Stressed Sideliners may respond to her child-care and wage message, the only concrete cost-of-living platform in the race.'],
      ['AR', 'Qualteri', '○', 'Ambivalent Right voters lean Republican, but with no published platform from Qualteri the lean is weak.'],
      ['PR', 'Qualteri', '◐', 'Populist Right voters back the Republican as the only check on one-party Denver representation, despite knowing little about her.'],
      ['CC', 'Qualteri', '●', 'Committed Conservatives support the Republican nominee on party and fiscal grounds.'],
      ['FF', 'Qualteri', '◐', 'Faith and Flag Conservatives back the Republican line, though she has stated no positions on social issues.'],
    ]),
    counterArguments: [
      'CC (Qualteri ●): But consider that she has published no platform at all; a conservative whose top priority is cutting taxes could cast a Libertarian vote for Luria, who has at least said what he stands for.',
      'PL (Garcia Irlando ●): But consider that she has never held office or written a bill, and her opponents are not competitive, so the real choice in this seat was made in the June primary.',
    ],
  },

  // ───────────────────────────── SD 31 ─────────────────────────────
  {
    id: 'co-senate-sd31',
    categoryId: 'state-leg',
    title: 'Colorado State Senate, District 31 (vacancy term to Jan. 2029)',
    tldrLabel: 'CO SD-31',
    seatContext: 'Appointed incumbent',
    kind: 'candidates',
    legalRequirements: LEGAL_SENATE,
    qualificationCriteria: SENATE_CRITERIA(
      'SD-31 covers central and southeast Denver plus Glendale; only the eastern edge of 80204 (about 11%) is in it.',
    ),
    stakesParagraphs: [
      'State senators pass the budget within TABOR’s limits, write law on housing, transit, behavioral health and public safety, and confirm the governor’s appointees.',
      'Chris Hansen won re-election here in 2024, then resigned to lead La Plata Electric Association. A Democratic vacancy committee chose Matt Ball in January 2025, and the appointee serves only until the next general election, so voters now fill the last two years of the term.',
    ],
    introParagraphs: [
      'Ball was unopposed in the June primary. Denverite reported in July that Republican Michael F. DiManna would face him, but the certified general-election list shows Ball alone. Only about 11% of 80204 residents, on the ZIP’s eastern edge, vote in this race.',
    ],
    readingLinks: [
      SOS_LINK,
      {
        label: 'Denverite: Who’s running for the SD-31 vacancy (Jan. 6, 2025)',
        url: 'https://denverite.com/2025/01/06/colorado-state-senate-district-31-vacancy-election-candidates/',
        summary: 'Why the seat opened, how vacancy committees work, and Ball’s background.',
      },
    ],
    candidates: [
      {
        id: 'matt-ball',
        name: 'Matt Ball',
        party: 'D',
        role: 'State Senator, District 31',
        campaignUrl: 'https://leg.colorado.gov/legislators/matt-ball',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Sitting senator since January 2025, previously Denver’s policy director under Mayor Mike Johnston and a criminal-defense and appellate lawyer.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'Senator since Jan. 2025; Stanford J.D.; five years of appellate and criminal-defense practice; Denver policy director (Wikipedia; Denverite).' },
            { criterionId: 'budget-oversight', assessment: 'partial', evidence: 'Vice chair of Senate Transportation and Energy; member of Local Government and Housing (Wikipedia). No Appropriations or JBC role found.' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'As Denver policy director, helped build the city’s Road to Recovery behavioral-health program (Denverite).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented the district since January 2025.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Two sessions (2025, 2026) in the Senate majority; bill outcomes not compiled here (see leg.colorado.gov).' },
          ],
        },
        bio: [
          'Ball, a fifth-generation Coloradan, served in the 101st Airborne and 75th Ranger Regiment, with three Afghanistan deployments, and earned two Bronze Stars. After Stanford Law School he practiced appellate and criminal-defense law, then became Denver’s policy director under Mayor Mike Johnston (Wikipedia; Denverite).',
          'A vacancy committee picked him in January 2025 after five rounds of voting. He has focused on mental-health treatment capacity and transportation.',
        ],
        scorecard: [
          { topic: 'Behavioral health', position: '✓✓ Says Colorado lags on mental-health treatment beds; helped build Denver’s Road to Recovery program', comparison: 'Unopposed.' },
          { topic: 'Housing & transit', position: '✓ Vice chair of Transportation and Energy; sits on Local Government and Housing', comparison: 'Unopposed.' },
        ],
        money: 'Not compiled; see Colorado TRACER.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Ball', '●', 'Progressive Left voters have no alternative on the ballot; Ball is the only candidate.'],
      ['EL', 'Ball', '●', 'Establishment Liberals back an experienced Democratic incumbent with city-hall policy credentials.'],
      ['DM', 'Ball', '●', 'Democratic Mainstays support the party’s sitting senator.'],
      ['OL', 'Ball', '●', 'Outsider Left voters have no other name on the ballot.'],
      ['SS', 'Ball', '●', 'Stressed Sideliners face a single-candidate race.'],
      ['AR', 'Ball', '●', 'Ambivalent Right voters face a single-candidate race; leaving it blank is also an option.'],
      ['PR', 'Ball', '●', 'Populist Right voters have no Republican on the certified ballot; leaving it blank is also an option.'],
      ['CC', 'Ball', '●', 'Committed Conservatives have no Republican on the certified ballot; leaving it blank is also an option.'],
      ['FF', 'Ball', '●', 'Faith and Flag Conservatives have no Republican on the certified ballot; leaving it blank is also an option.'],
    ]),
    counterArguments: ['CC (Ball ●): Skipping an uncontested race does not change the result; some voters leave it blank to signal that the seat lacks a real contest.'],
  },

  // ───────────────────────────── HD 4 ─────────────────────────────
  {
    id: 'co-house-hd4',
    categoryId: 'state-leg',
    title: 'Colorado State House, District 4',
    tldrLabel: 'CO HD-4',
    seatContext: 'Incumbent',
    kind: 'candidates',
    legalRequirements: LEGAL_HOUSE,
    qualificationCriteria: HOUSE_CRITERIA('HD-4 covers west and northwest Denver, including about two-thirds of 80204’s residents.'),
    stakesParagraphs: [
      'Colorado’s 65 representatives serve two-year terms and vote on the budget, housing, criminal justice and immigration law. Democrats hold a large House majority.',
      'Rep. Cecelia Espenoza, a former immigration appellate judge, ousted progressive Rep. Tim Hernández in the 2024 Democratic primary with backing from business-aligned groups. Her first term put her on House Judiciary, where her votes on 2026 immigration bills drew criticism from immigrant-rights advocates.',
    ],
    introParagraphs: [
      'Espenoza and Republican Ellwood Ervin were both unopposed in the June primaries (Denverite). Bill Hare is the Forward Party nominee. No public polling or debates were found.',
    ],
    readingLinks: [
      SOS_LINK,
      {
        label: 'The Ballot Brief: Colorado House District 4',
        url: 'https://theballotbrief.com/state/colorado/denver-county/colorado-house-district-4',
        summary: 'Roster with Espenoza’s background and stated priorities; no campaign sites found for Ervin or Hare.',
      },
      {
        label: 'Colorado Capitol Watch: Espenoza’s 2025 bills',
        url: 'https://app.coloradocapitolwatch.com/bills/?sp=1312',
        summary: '25 sponsored bills in 2025, 22 signed and 3 postponed indefinitely.',
      },
    ],
    candidates: [
      {
        id: 'cecelia-espenoza',
        name: 'Cecelia Espenoza',
        party: 'D',
        role: 'State Representative, House District 4',
        campaignUrl: 'https://cecelia4colorado.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Sitting representative since January 2025, former member of the Board of Immigration Appeals and University of Denver law professor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Sponsored 25 bills in 2025, 22 signed (Colorado Capitol Watch); former appellate immigration judge and DOJ senior associate general counsel (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Member of House Judiciary and State, Veterans and Military Affairs (Wikipedia); votes on each annual budget.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Represents HD-4 since 2025; says she has lived in the district 34 years (campaign site via The Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'met', evidence: '2025 bills signed included HB25-1168 (housing protections for victim-survivors) and SB25-205 (firearm serial-number checks).' },
          ],
        },
        bio: [
          'Espenoza, daughter of farmworkers, was among the first Latinas admitted to the Utah bar, taught law at the University of Denver, and served as an appellate immigration judge on the Board of Immigration Appeals (Wikipedia). She lost a 2023 vacancy contest for this seat to Tim Hernández, then beat him in the 2024 primary.',
          'In the House she sits on Judiciary and State Affairs and serves as a Uniform Law Commissioner. Her campaign lists a fairer, more accountable justice system, public safety with accountability, and affordability as priorities.',
        ],
        recordVsChange:
          'Espenoza passed 22 bills in her first year, many of them technical or bipartisan, and brings rare immigration-court expertise. Her votes against two 2026 immigration bills disappointed progressive advocates; neither opponent offers a record or platform to compare.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ HB25-1168 housing protections for domestic-violence survivors (signed)', comparison: 'Ervin and Hare have published no positions.' },
          { topic: 'Immigration', position: '~ Former immigration judge; voted no in House Judiciary on HB26-1275 (identifiable officers, state prosecution of federal agents), which died, and on HB26-1276 (El Semanario)', comparison: 'Her predecessor Hernández was a vocal immigrant-rights progressive.' },
          { topic: 'Public safety', position: '✓ Sponsored SB25-205 (firearm serial-number checks) and SB25-281 (careless-driving penalties), both signed', comparison: 'No stated positions from her opponents.' },
          { topic: 'Taxes', position: '~ Sponsored property-tax procedure bills (HB25-1324 signed; HB25-1199 postponed)', comparison: 'No stated positions from her opponents.' },
          { topic: 'Caucus / ideology', position: '~ Moderate Democrat; won in 2024 with business-aligned support', comparison: 'Hare runs with the centrist Forward Party.' },
        ],
        money: 'Not compiled; see Colorado TRACER.',
        notes: [
          'The El Semanario report on her 2026 immigration votes reads as advocacy and includes no response from Espenoza: https://www.elsemanarioonline.com/?p=29146',
        ],
      },
      {
        id: 'ellwood-ervin',
        name: 'Ellwood Ervin',
        party: 'R',
        role: 'Republican nominee',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'No campaign site, biography or coverage was found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: ['Ervin is the Republican nominee, unopposed in the primary. No campaign website was found as of Sept. 8 (The Ballot Brief). GoodParty.org lists the nominee as “Alva Ervin”; the Secretary of State’s list says Ellwood Ervin.'],
        scorecard: [{ topic: 'Platform', position: '? No published positions found', comparison: 'Espenoza runs on justice-system accountability and affordability.' }],
        money: 'Not found.',
      },
      {
        id: 'bill-hare',
        name: 'Bill Hare',
        party: 'FWD',
        role: 'Forward Party nominee',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Forward Party nominee; no record of public office or policy work found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: ['Hare is running for the Forward Party, a centrist third party. He says concern for the future of democratic institutions motivated his run (Forward Party candidate page, via The Ballot Brief). No campaign website was found.'],
        scorecard: [
          { topic: 'Democracy / reform', position: '✓ Cites protecting democratic institutions as his reason for running', comparison: 'Espenoza sponsored HB25-1155 on candidate watchers (signed).' },
          { topic: 'Caucus / ideology', position: '✓ Forward Party, outside both major caucuses', comparison: 'Espenoza is a moderate Democrat.' },
        ],
        money: 'Not found.',
      },
    ],
    crossTypology: ct([
      ['PL', 'Espenoza', '◐', 'Progressive Left voters object to her immigration-committee votes, but she remains the only candidate who will caucus with Democrats.'],
      ['EL', 'Espenoza', '●', 'Establishment Liberals value a former judge with a productive, pragmatic first term.'],
      ['DM', 'Espenoza', '●', 'Democratic Mainstays back their party’s incumbent.'],
      ['OL', 'Espenoza', '○', 'Outsider Left voters are frustrated by her 2024 business-backed win and 2026 immigration votes, but the alternatives are a Republican and a centrist with no platform.'],
      ['SS', 'Espenoza', '○', 'Stressed Sideliners have little to go on besides her record, which is the only record in the race.'],
      ['AR', 'Hare', '○', 'Ambivalent Right voters who like neither party could try the centrist Forward Party candidate.', 'Ambivalent Right voters who weigh competence could back Espenoza, a former appellate judge whose bills passed with wide margins and who broke with her party on immigration enforcement, at the cost of electing a Democrat.'],
      ['PR', 'Ervin', '◐', 'Populist Right voters back the Republican nominee as a protest against one-party Denver representation.', 'Populist Right voters who want someone who knows how the Capitol works could accept Espenoza, who voted with Republicans against two 2026 immigration bills, though that means re-electing a Democrat.'],
      ['CC', 'Ervin', '●', 'Committed Conservatives support the Republican nominee.'],
      ['FF', 'Ervin', '◐', 'Faith and Flag Conservatives back the Republican line, though Ervin has stated no positions.', 'Faith and Flag Conservatives who value the rule of law could see Espenoza, a former immigration judge who sided with Republicans on federal-enforcement bills, as the experienced option, while giving up a Republican vote.'],
    ]),
    counterArguments: [
      'PL (Espenoza ◐): But consider that her 2025 record includes survivor housing protections and gun-tracing law that progressives backed; her immigration votes were two of hundreds.',
      'CC (Ervin ●): But consider that Ervin has no published platform or record, and Espenoza has already voted with Republicans on contested immigration bills.',
    ],
  },

  // ───────────────────────────── HD 5 ─────────────────────────────
  {
    id: 'co-house-hd5',
    categoryId: 'state-leg',
    title: 'Colorado State House, District 5',
    tldrLabel: 'CO HD-5',
    seatContext: 'Open (term limits)',
    kind: 'candidates',
    legalRequirements: LEGAL_HOUSE,
    qualificationCriteria: HOUSE_CRITERIA('HD-5 covers a stretch of west, central and north Denver, including about a third of 80204’s residents.'),
    stakesParagraphs: [
      'Colorado’s representatives serve two-year terms and vote on the budget, housing, transportation and criminal-justice law.',
      'Rep. Alex Valdez is term-limited. The seat is safely Democratic, so the winner is likely to hold it for years and shape how central Denver is represented on housing and transit.',
    ],
    introParagraphs: [
      'Justine Sandoval won the Democratic primary over Sterling Simms, a Marine veteran on Mayor Johnston’s staff, with about 76% in election-night returns (Denverite). Republican Johnnie W. Johnson, who also ran in 2022 and 2024, was unopposed. No public polling was found.',
    ],
    readingLinks: [
      SOS_LINK,
      {
        label: 'Denverite: Get to know Justine Sandoval (Oct. 23, 2025)',
        url: 'https://denverite.com/2025/10/23/justine-sandoval-house-district-5/',
        summary: 'Her organizing career, family history and priorities.',
      },
      { label: 'Denverite: Denver primary results (July 1, 2026)', url: DENVERITE_PRIMARY, summary: 'Primary returns for every Denver legislative seat.' },
    ],
    candidates: [
      {
        id: 'justine-sandoval',
        name: 'Justine Sandoval',
        party: 'D',
        role: 'Political organizer',
        campaignUrl: 'https://hd5justine.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Twenty years of campaign and advocacy work, including nearly a decade at abortion-rights group Cobalt; no elected or legislative office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Nearly a decade at Cobalt working on ballot measures and abortion-rights policy; field director for the 2024 Amendment 79 campaign (Denverite).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of budget or committee work.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Fourth-generation Denverite; north Denver’s Academia Ana Marie Sandoval Elementary is named for her grandmother (Denverite).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Political director for Rep. Diana DeGette’s campaign; former Denver Young Democrats president; ran Hip Hop Congress voter registration at Auraria (Denverite).' },
          ],
        },
        bio: [
          'Sandoval, 39, comes from a family active in Denver’s Chicano movement. She began organizing in high school against 2002’s English-only Amendment 31, then worked for the Colorado Democratic Party and spent nearly a decade at Cobalt, including as field director for Amendment 79 (Denverite).',
          'She has been political director for Rep. Diana DeGette’s campaign and a correspondent for City Cast Denver. Her priorities are housing, transportation and the state budget, and she says Democrats need a more cohesive message.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Lists housing and transportation as top priorities', comparison: 'Johnson has not published a housing plan.' },
          { topic: 'Health / abortion rights', position: '✓✓ Field director for Amendment 79, which put abortion rights in the state constitution', comparison: 'iVoterGuide rates Johnson conservative; he answered none of its 2026 questions.' },
          { topic: 'Taxes', position: '? Lists the state budget as a priority; no tax plan found', comparison: 'Johnson’s campaign stresses opposition to tax increases.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat; says the party must stop in-fighting', comparison: 'Johnson is a Republican and past Trump donor.' },
        ],
        money: 'Not compiled; see Colorado TRACER.',
      },
      {
        id: 'johnnie-w-johnson',
        name: 'Johnnie W. Johnson',
        party: 'R',
        role: 'Radio station manager',
        campaignUrl: 'https://johnniej4hd5co.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Radio station manager and repeat House candidate; no record of public office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record of policy work found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Graduate of Thomas Jefferson High School and Metro State; ran for HD-5 in 2022 and 2024 (iVoterGuide).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'Johnson lists his job as station manager of KINV-DB Innervision FM and says he founded the theater group Phamaly; he has a 1997 communications degree from Metro State (iVoterGuide, candidate-supplied). He lost to Rep. Alex Valdez in 2022 and 2024.',
          'His campaign stresses opposition to tax increases (Denverite). Federal records listed by iVoterGuide show 2023–24 contributions to Donald Trump’s committees.',
        ],
        scorecard: [
          { topic: 'Taxes', position: '✓✓ Campaign stresses opposition to tax increases', comparison: 'Sandoval has no stated tax position.' },
          { topic: 'Housing & transit', position: '? No published plan', comparison: 'Sandoval lists housing and transportation as priorities.' },
          { topic: 'Caucus / ideology', position: '✓ Conservative Republican per iVoterGuide; answered none of its 2026 questionnaire', comparison: 'Sandoval is a party-establishment Democrat.' },
        ],
        money: 'Not compiled; see Colorado TRACER.',
        notes: ['Profile: https://ivoterguide.com/candidate/69759/race/32801/election/1475'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Sandoval', '●', 'Progressive Left voters back a longtime abortion-rights and Chicano-movement organizer.'],
      ['EL', 'Sandoval', '●', 'Establishment Liberals favor a party insider with deep campaign experience, including DeGette’s campaign.'],
      ['DM', 'Sandoval', '●', 'Democratic Mainstays support the party nominee with deep Denver roots.'],
      ['OL', 'Sandoval', '◐', 'Outsider Left voters like her movement roots, though she is closely tied to the party establishment.'],
      ['SS', 'Sandoval', '○', 'Stressed Sideliners lean to the candidate with a stated housing and transit agenda.'],
      ['AR', 'Johnson', '○', 'Ambivalent Right voters lean toward the anti-tax Republican, weakly given his thin platform.'],
      ['PR', 'Johnson', '◐', 'Populist Right voters back the Republican, a Trump donor running against tax increases.'],
      ['CC', 'Johnson', '●', 'Committed Conservatives support the Republican nominee on taxes.'],
      ['FF', 'Johnson', '◐', 'Faith and Flag Conservatives prefer the Republican over the field director of the abortion-rights amendment.'],
    ]),
    counterArguments: [
      'CC (Johnson ●): But consider that Johnson has lost this seat twice and published no plan, so a vote for him mainly registers opposition.',
      'PL (Sandoval ●): But consider that she has never held office or written a bill, and her primary rival argued for new approaches such as a state public bank.',
    ],
  },

  // ───────────────────────────── At-Large B ─────────────────────────────
  {
    id: 'denver-council-at-large-b',
    categoryId: 'city',
    title: 'Denver City Council, At-Large Seat B (vacancy)',
    tldrLabel: 'Denver Council At-Large B',
    seatContext: 'Open (vacancy; term ends July 2027)',
    kind: 'candidates',
    legalRequirements: COUNCIL_LEGAL,
    qualificationCriteria: COUNCIL_CRITERIA,
    stakesParagraphs: [
      'Denver’s 13-member City Council, two of them elected citywide, passes ordinances, adopts the budget, approves major contracts such as license-plate readers and ShotSpotter, and confirms mayoral appointees. It is the main check on Mayor Mike Johnston, with whom it has clashed over the budget, layoffs and safe-use sites.',
      'Sarah Parady resigned for health reasons effective Aug. 5, 2026. The winner serves only until July 2027, but gets a vote on the 2027 budget fights and runs as an incumbent in the April 2027 regular election. Ten candidates are on the ballot, and the most votes wins with no runoff.',
    ],
    introParagraphs: [
      'This is a nonpartisan seat, but the Denver Democrats made their first-ever endorsement in a city council race: Melissa Mejía, the only candidate to reach two-thirds of the central committee. Councilmember Jamie Torres endorsed Monica Martinez; former councilmember Candi CdeBaca backed Whitney Traylor; former at-large members Debbie Ortega and Tim Sandos backed Alfredo Reyes. Mayor Johnston is not endorsing (Denverite, Sept. 21).',
      'Julissa Soto led individual fundraising after giving her own campaign $50,000; counting Fair Elections matching funds, Monica Martinez had raised the most ($36,500 from donors plus $82,440 in public match). Denverite saw no clear frontrunner. No polling was found.',
    ],
    readingLinks: [
      { label: 'Denver City Council: about the council', url: COUNCIL_ABOUT, summary: 'Council powers and member qualifications (Charter § 3.1.3).' },
      { label: 'Denverite: At-Large B voter guide (Sept. 25, 2026)', url: AT_LARGE_GUIDE, summary: 'Who is running, the plurality rule and the April 2027 follow-up election.' },
      { label: 'Denverite: endorsements and money in the At-Large B race (Sept. 21, 2026)', url: AT_LARGE_MONEY, summary: 'Party and council endorsements, fundraising and Fair Elections matching.' },
      {
        label: 'Colorado Politics: Parady steps down; special election set (Aug. 5, 2026)',
        url: 'https://www.coloradopolitics.com/2026/08/05/sarah-parady-steps-down-from-denver-city-council-special-election-announced/',
        summary: 'Why the seat is open and the plurality rule.',
      },
      {
        label: 'Brownstein: Denver’s 2026 ballot takes shape (Aug. 14, 2026)',
        url: 'https://www.bhfs.com/insight/denvers-2026-ballot-takes-shape-key-initiatives-and-the-at-large-city-council-vacancy-election/',
        summary: 'Law-firm overview of the measures and the early candidate field.',
      },
    ],
    candidates: [
      {
        id: 'alfredo-reyes',
        name: 'Alfredo Reyes',
        party: 'NP',
        role: 'Founding leader, Latino Arts and Cultural Center',
        campaignUrl: 'http://reyesfordenver.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Built and led a new cultural nonprofit and its building; worked at the state Department of Higher Education; served on Denver’s Citizen Oversight Board.',
          criteria: [
            { criterionId: 'legislating', assessment: 'partial', evidence: 'Former member of the Citizen Oversight Board, which reviews police and sheriff discipline (Brownstein).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Led construction of the Latino Arts and Cultural Center’s new building (Denverite).' },
            { criterionId: 'city-services', assessment: 'partial', evidence: 'Detailed critiques of the city’s homelessness contracting and police and sheriff discipline changes (Denverite interview).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Grew up on the Westside; South High graduate; endorsed by former at-large members Ortega and Sandos.' },
          ],
        },
        bio: [
          'Reyes grew up on Denver’s Westside, the son of Mexican immigrants, and went from South High on a Gates Family scholarship to Colorado College and a CU Boulder PhD in education. He worked at the state Department of Higher Education and helped found and lead the Latino Arts and Cultural Center (Denverite).',
          'He says the Johnston administration rushed its homelessness and migrant responses, misspending money and steering contracts to the politically connected. He wants neighborhood plans to “have teeth” and is wary of loosened police and sheriff discipline.',
        ],
        scorecard: [
          { topic: 'Housing & density', position: '~ Open to more density and mixed use, but only with anti-displacement protections and neighborhood buy-in', comparison: 'Konkle and Walker back upzoning more broadly.' },
          { topic: 'Budget', position: '✗ Critical of Johnston’s fast homelessness spending and contracting', comparison: 'Walker would not second-guess the budget without inside information.' },
          { topic: 'Public safety', position: '~ Supports first responders; opposes rolling back discipline systems', comparison: 'Traylor and Konkle stress expanding STAR.' },
          { topic: 'Transportation', position: '✓ Prioritize multimodal: bikes, sidewalks, safety', comparison: 'Similar to most of the field.' },
        ],
        money: NO_MONEY,
        endorsements: 'Former councilmembers Debbie Ortega and Tim Sandos (Denverite, Sept. 21, 2026).',
      },
      {
        id: 'whitney-traylor',
        name: 'Whitney Traylor',
        party: 'NP',
        role: 'Attorney and mediator',
        campaignUrl: 'http://traylorfordenver.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Ran a law firm that once had eight employees; teaches constitutional law at MSU Denver and is a trained mediator. No government service found.',
          criteria: [
            { criterionId: 'legislating', assessment: 'partial', evidence: '15 years teaching constitutional law at Metropolitan State University; 9News legal analyst (Denverite).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Ran Traylor Law Group with up to 30 clients and eight employees (Denverite).' },
            { criterionId: 'city-services', assessment: 'partial', evidence: 'Says he is still developing his transportation and housing platform (Denverite interview).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Denver native; Skyland homeowner since the 1990s; endorsed by former councilmember Candi CdeBaca.' },
          ],
        },
        bio: [
          'Traylor, 55, was born in Denver and has owned a home in Skyland since the 1990s. He built the Traylor Law Group, has taught constitutional law at MSU Denver for 15 years, hosts a podcast, and is best known as 9News’ legal analyst, a role he stepped back from to run (Denverite).',
          'He wants more line-item detail and time for council to scrutinize budgets, supports the biennial-budget measure, and says Denver is “over-policing” and “criminalizing poverty,” favoring a 24/7 STAR program.',
        ],
        scorecard: [
          { topic: 'Budget transparency', position: '✓✓ Wants line items and more time for council review; backs 2I', comparison: 'Martinez says the mayor should treat council as a “thought partner.”' },
          { topic: 'Public safety', position: '✓ Expand STAR to 24/7; questions 15% police raises while other agencies are cut', comparison: 'Walker and Konkle also favor STAR.' },
          { topic: 'Housing & density', position: '~ More housing near transit, with limits; undecided on Unlocking Housing Choices', comparison: 'Martinez and Walker support it.' },
          { topic: 'Transportation', position: '✓ Multimodal; accessibility for wheelchair users; doesn’t own a car', comparison: 'Similar to most of the field.' },
        ],
        money: NO_MONEY,
        endorsements: 'Former councilmember Candi CdeBaca (Denverite, Sept. 21, 2026).',
      },
      {
        id: 'jeff-walker',
        name: 'Jeff Walker',
        party: 'NP',
        role: 'Land-use planner; former RTD director',
        campaignUrl: 'http://walkerfordenver.com/',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Ten years as an elected RTD director and six on Denver’s Planning Board, plus a career in land-use planning.',
          criteria: [
            { criterionId: 'legislating', assessment: 'met', evidence: 'Elected RTD board member 2011–2021; Denver Planning Board 2004–2010 (Denverite).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Voted on RTD budgets for a decade; said “I don’t know” when asked about the city budget (Denverite).' },
            { criterionId: 'city-services', assessment: 'met', evidence: 'Land-use planner; Planning Board service; knows RTD’s limits on city transit (Denverite).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Ran citywide for an at-large seat in 2023 and lost; lists no endorsements this year.' },
          ],
        },
        bio: [
          'Walker, 61, is a land-use planner who served on the Denver Planning Board from 2004 to 2010 and the RTD board from 2011 to 2021. He ran for an at-large seat in 2023. He says being hit by a driver in February and a prostate-cancer diagnosis convinced him to run again (Denverite).',
          'He supports housing-first homelessness policy, upzoning near transit and the Unlocking Housing Choices proposal, and wants to make traffic deaths his top issue, saying Denver loses more than one person a week on its roads.',
        ],
        scorecard: [
          { topic: 'Housing & density', position: '✓✓ Supports Unlocking Housing Choices and density near transit', comparison: 'Reyes and Traylor are more cautious.' },
          { topic: 'Road safety', position: '✓✓ Top issue; better sidewalks via the new fee program', comparison: 'Browne also focuses on the sidewalk rollout.' },
          { topic: 'Budget', position: '? Declined to judge the mayor’s budget; would have tried to avoid layoffs', comparison: 'Diaz and Mejía criticize the 2025 layoffs directly.' },
          { topic: 'Public safety', position: '✓ Shift some police funds to STAR', comparison: 'Similar to Traylor, Konkle and Diaz.' },
        ],
        money: NO_MONEY,
        endorsements: 'None listed on his campaign site (Denverite).',
      },
      {
        id: 'julissa-soto',
        name: 'Julissa Soto',
        party: 'NP',
        role: 'Public-health equity advocate',
        campaignUrl: 'http://sotofordenver.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Founded two health-equity organizations and served on the state Health Equity Commission. She did not complete Denverite’s interview.',
          criteria: [
            { criterionId: 'legislating', assessment: 'partial', evidence: 'Member of the state Health Equity Commission (Denverite).' },
            { criterionId: 'budget', assessment: 'unknown', evidence: 'No public record of public budgeting found.' },
            { criterionId: 'city-services', assessment: 'unknown', evidence: 'Declined Denverite’s interview; website lists after-school programs, small business and enforceable housing affordability.' },
            { criterionId: 'community', assessment: 'met', evidence: 'Founded the Immigrant Health Access Collaborative and Latino Health Equity Consulting; endorsed by DPS board member John Youngquist and Rep. Naquetta Ricks.' },
          ],
        },
        bio: [
          'Soto describes herself as a “proud immigrant, naturalized citizen, founder, public health advocate, and community leader.” She founded the Immigrant Health Access Collaborative and Latino Health Equity Consulting and served on the state Health Equity Commission (Denverite).',
          'She did not complete Denverite’s interview. Her website prioritizes after-school and family programs, small businesses and “real, enforceable affordability” in new housing. She led individual fundraising after giving her campaign $50,000.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Wants “real, enforceable affordability in new housing”', comparison: 'Konkle wants to end developers’ fee-in-lieu option.' },
          { topic: 'Families & youth', position: '✓ After-school and family programs', comparison: 'Konkle pushes universal preschool.' },
          { topic: 'Small business', position: '✓ Listed as a priority', comparison: 'Diaz makes small business her central issue.' },
          { topic: 'Budget / public safety', position: '? No interview; no stated positions', comparison: 'Most rivals laid out budget and STAR positions.' },
        ],
        money: 'Top individual fundraiser after a $50,000 self-contribution (Denverite, Sept. 21, 2026).',
        endorsements: 'DPS board member John Youngquist, state Rep. Naquetta Ricks, Arapahoe County commissioners Rhonda Fields and Leslie Summey (Denverite).',
      },
      {
        id: 'gabriel-konkle',
        name: 'Gabriel Konkle',
        party: 'NP',
        role: 'Software engineer and mutual-aid organizer',
        campaignUrl: 'http://gabrielfordenver.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Contract software engineer and neighborhood mutual-aid organizer; no government or board service found.',
          criteria: [
            { criterionId: 'legislating', assessment: 'unknown', evidence: 'No public or board service found.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Detailed budget ideas (renegotiate police contract, less turf maintenance, grant audits) but no budgeting role (Denverite).' },
            { criterionId: 'city-services', assessment: 'partial', evidence: 'Attends neighborhood organization meetings; specific proposals on vacancy fines and STAR (Denverite).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Athmar Park homeowner; packs supplies for unhoused neighbors; no endorsements listed.' },
          ],
        },
        bio: [
          'Konkle, 37, moved to the metro a decade ago and into Denver during the pandemic, when he built backend technology for a nonprofit produce distributor. He owns a home in Athmar Park, works as a contract software engineer and does mutual-aid work (Denverite).',
          'He would fine landlords who keep units vacant, end the option for developers to pay a fee instead of building affordable units, upzone most of the city with rent stabilization and anti-displacement funds, run STAR 24/7, and renegotiate the police union contract.',
        ],
        scorecard: [
          { topic: 'Housing & density', position: '✓✓ Upzone nearly everywhere; fine intentional vacancies; rent stabilization', comparison: 'The most aggressive housing platform in the field.' },
          { topic: 'Public safety', position: '✗ Renegotiate police contract; less random patrol; 24/7 STAR; end overtime reliance', comparison: 'Reyes and Martinez stress community policing and supporting officers.' },
          { topic: 'Transportation', position: '✓ Expand rail; watch Colfax BRT', comparison: 'Similar to most of the field.' },
          { topic: 'Budget', position: '~ Cut turf maintenance and police overtime; audit grants', comparison: 'Martinez opposes new programs until the budget stabilizes.' },
        ],
        money: NO_MONEY,
        endorsements: 'None listed (Denverite).',
      },
      {
        id: 'cynthia-diaz',
        name: 'Cynthia Diaz',
        party: 'NP',
        role: 'Owner, Tonantzin Casa de Café',
        campaignUrl: 'http://cynthiafordenver.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Small-business owner with a master’s degree in economics; no government service found.',
          criteria: [
            { criterionId: 'legislating', assessment: 'unknown', evidence: 'No public or board service found.' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'B.A. and M.A. in economics from CU Denver; runs a café (Denverite).' },
            { criterionId: 'city-services', assessment: 'partial', evidence: 'Has navigated city agencies as a business owner after a shooting and Santa Fe Drive construction (Denverite).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Denver resident since 2006; Regis neighborhood; no endorsements listed.' },
          ],
        },
        bio: [
          'Diaz, 45, owns Tonantzin Casa de Café at 9th Avenue and Santa Fe Drive and lives in Regis. She says her business stalled after a shooting on her block and Santa Fe construction, and that every city office told her it was not their problem (Denverite).',
          'She wants to grow revenue by supporting small businesses and events such as First Fridays rather than cutting, use econometrics to cut the least effective programs, build missing-middle housing citywide, and fund STAR around the clock. Protecting residents from ICE is her top safety concern.',
        ],
        scorecard: [
          { topic: 'Small business', position: '✓✓ Central issue; “close the loops” between city offices', comparison: 'Soto also lists small business.' },
          { topic: 'Budget', position: '✓ Grow sales-tax revenue; opposed the 2025 layoffs', comparison: 'Martinez is more cautious about new spending.' },
          { topic: 'Housing & density', position: '✓ Missing-middle housing in every neighborhood', comparison: 'Similar to Walker and Martinez.' },
          { topic: 'Public safety / immigration', position: '✓ Keep ICE out; 24/7 STAR', comparison: 'Doane backs immigration reform “with pathways for certain immigrants.”' },
        ],
        money: NO_MONEY,
        endorsements: 'None listed (Denverite).',
      },
      {
        id: 'melissa-mejia',
        name: 'Melissa Mejía',
        party: 'NP',
        role: 'Housing policy consultant and community organizer',
        campaignUrl: 'http://mejiafordenver.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Former City Council aide and Denver Planning Board member with a master’s in public administration and housing-policy work.',
          criteria: [
            { criterionId: 'legislating', assessment: 'partial', evidence: 'Former council aide and Denver Planning Board member (Brownstein; Denverite).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'MPA from CU Denver; specific budget views (expand NEST, council should push back on mayor’s budget) (Denverite).' },
            { criterionId: 'city-services', assessment: 'met', evidence: 'Council-office and Planning Board experience; advocacy on recent renter-protection reforms (Denverite).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Denver native; first-ever Denver Democrats council endorsement; endorsed by Sen. Gonzales and Rep. Mabrey.' },
          ],
        },
        bio: [
          'Mejía, 41, grew up in Denver, is a former pastry chef and single mother of two DPS graduates, and holds an MPA from CU Denver. She has worked as a council aide, served on the Planning Board and runs Mejía Consulting on housing and economic-justice policy (Denverite; Brownstein).',
          'She wants housing that matches what families need and can afford, more sidewalks, bike lanes and tree canopy, and a stronger council role on the budget. She criticized the 2025 layoffs and would boost the NEST anti-displacement program.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓✓ Housing that families can afford; renter-protection advocate', comparison: 'Konkle goes further with vacancy fines.' },
          { topic: 'Budget', position: '✓ Council should push back more; opposed layoffs; expand NEST', comparison: 'Martinez opposes new programs until the budget stabilizes.' },
          { topic: 'Transportation', position: '✓ Sidewalks, bike lanes, tree canopy; mixed on Colfax BRT', comparison: 'Walker puts road deaths first.' },
          { topic: 'Public safety', position: '~ A safety net of responders, rental aid and housing', comparison: 'Konkle and Traylor are more explicit about police spending.' },
        ],
        money: NO_MONEY,
        endorsements: 'Denver Democrats (first-ever council endorsement), Sen. Julie Gonzales, Rep. Javier Mabrey, Aurora Councilmember Juan Marcano, Auditor Timothy O’Brien (Denverite, Sept. 2026).',
      },
      {
        id: 'jake-browne',
        name: 'Jake Browne',
        party: 'NP',
        role: 'Marketer, writer and event producer',
        campaignUrl: 'http://brownefordenver.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Writer and marketer, formerly The Denver Post’s cannabis critic; says he has no formal government experience.',
          criteria: [
            { criterionId: 'legislating', assessment: 'not-met', evidence: 'Says he has no formal experience working in government (Denverite).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Has run small businesses with his wife; specific STAR and contract views (Denverite).' },
            { criterionId: 'city-services', assessment: 'partial', evidence: 'Detailed views on the sidewalk program, ShotSpotter and Axon contracts (Denverite).' },
            { criterionId: 'community', assessment: 'partial', evidence: 'Denver resident since 2002; Northside renter; no endorsements listed.' },
          ],
        },
        bio: [
          'Browne, 43, moved to Denver in 2002, has rented on the Northside ever since, and was The Denver Post’s cannabis critic. He pitches himself as a renter and a working person in a body dominated by homeowners (Denverite).',
          'He wants homelessness-prevention data and focus, density on parking lots and empty downtown offices first, a clear sidewalk schedule, more money for STAR, and no votes on renewing ShotSpotter and the Axon license-plate-reader contract.',
        ],
        scorecard: [
          { topic: 'Housing & density', position: '✓ “We need density”; start with parking lots and downtown offices', comparison: 'Undecided on Unlocking Housing Choices, like Traylor.' },
          { topic: 'Surveillance', position: '✗ Would vote no on ShotSpotter ($4.7M) and Axon renewals', comparison: 'Martinez finds ShotSpotter helpful.' },
          { topic: 'Homelessness', position: '~ Mixed on Johnston; wants outcome data and prevention', comparison: 'Walker credits the mayor’s sheltering push.' },
          { topic: 'Budget', position: '✓ Trim office space and vehicles instead of layoffs; grow STAR', comparison: 'Similar to Diaz.' },
        ],
        money: NO_MONEY,
        endorsements: 'None listed (Denverite).',
      },
      {
        id: 'monica-martinez',
        name: 'Monica Martinez',
        party: 'NP',
        role: 'Executive Director, Fax Partnership',
        campaignUrl: 'http://monica4council.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Worked on Mayor Hickenlooper’s policy team and has run the East Colfax development nonprofit Fax Partnership since 2015.',
          criteria: [
            { criterionId: 'legislating', assessment: 'partial', evidence: 'Mayor Hickenlooper’s policy team from 2003 (Denverite).' },
            { criterionId: 'budget', assessment: 'partial', evidence: 'Runs Fax Partnership; previously development manager at Zocalo Community Development (Denverite).' },
            { criterionId: 'city-services', assessment: 'met', evidence: 'Eleven years of anti-displacement work on East Colfax and city policy-office experience (Denverite).' },
            { criterionId: 'community', assessment: 'met', evidence: 'Endorsed by Councilmember Jamie Torres and former Sen. Irene Aguilar; most Fair Elections matching dollars.' },
          ],
        },
        bio: [
          'Martinez, 52, came to Denver in 2003 to work on Mayor John Hickenlooper’s policy team, then worked at Zocalo Community Development and has led the Fax Partnership on East Colfax since 2015, working to keep low-income residents and small businesses from being displaced (Denverite).',
          'She calls Johnston a “mayor with vision” but says the city must “get the balls and strikes right” on basics. She supports Unlocking Housing Choices, is wary of new programs or sales taxes until the budget stabilizes, favors community policing, and floated more red-light cameras.',
        ],
        scorecard: [
          { topic: 'Housing & density', position: '✓✓ Supports Unlocking Housing Choices; wants starter homes for young families', comparison: 'Reyes and Traylor are more cautious.' },
          { topic: 'Budget', position: '~ No new programs or sales-tax hikes until the budget stabilizes', comparison: 'Konkle and Mejía would expand programs.' },
          { topic: 'Public safety', position: '~ Community policing; ShotSpotter helpful; open to Axon with data firewalls', comparison: 'Browne opposes both contracts.' },
          { topic: 'Basic services', position: '✓ Trash, street cleaning and responsiveness first', comparison: 'Diaz makes a similar case from a business owner’s view.' },
        ],
        money: '$36,500 from donors plus $82,440 in Fair Elections matching funds, the most in the race including the match (Denverite, Sept. 21, 2026).',
        endorsements: 'Councilmember Jamie Torres, former state Sen. Irene Aguilar (Denverite).',
      },
      {
        id: 'raymon-anthony-doane',
        name: 'Raymon Anthony Doane',
        party: 'NP',
        role: 'Tax and business analyst',
        campaignUrl: 'http://doanefordenver.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Former budget director for the Colorado House Republican caucus with a tax and business-analysis career. He did not complete Denverite’s interview.',
          criteria: [
            { criterionId: 'legislating', assessment: 'partial', evidence: 'Staff budget director for the House Republican caucus; past Libertarian candidate for state House (Denverite).' },
            { criterionId: 'budget', assessment: 'met', evidence: 'House Republican caucus budget director; tax and business analysis and consulting (Denverite).' },
            { criterionId: 'city-services', assessment: 'unknown', evidence: 'Did not complete Denverite’s interview; no stated city-service positions.' },
            { criterionId: 'community', assessment: 'partial', evidence: 'From Denver; ran for the RTD board previously; no endorsements listed.' },
          ],
        },
        bio: [
          'Doane is from Denver and was budget director for the Colorado House Republican caucus. He has worked in tax and business analysis and has run for the state House as a Libertarian and for the RTD board (Denverite).',
          'His website lists “equitable/simpler taxes,” government efficiency, support for self-defense, and immigration reform “with pathways for certain immigrants.” He did not complete Denverite’s interview.',
        ],
        scorecard: [
          { topic: 'Taxes & efficiency', position: '✓✓ Simpler taxes and government efficiency', comparison: 'The only candidate running on a fiscally conservative platform.' },
          { topic: 'Public safety', position: '✓ Supports self-defense rights', comparison: 'Most rivals emphasize STAR expansion.' },
          { topic: 'Immigration', position: '~ Reform “with pathways for certain immigrants”', comparison: 'Diaz wants to keep ICE out of Denver.' },
          { topic: 'Housing / transportation', position: '? No stated positions', comparison: 'Most rivals laid out density and transit views.' },
        ],
        money: NO_MONEY,
        endorsements: 'None listed (Denverite).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Mejía', '●', 'Progressive Left voters back the renter-protection organizer endorsed by Sen. Gonzales, Rep. Mabrey and the Denver Democrats.'],
      ['EL', 'Martinez', '◐', 'Establishment Liberals favor a Hickenlooper policy alum endorsed by Councilmember Torres who stresses basic services and budget caution.'],
      ['DM', 'Mejía', '◐', 'Democratic Mainstays follow the Denver Democrats’ first-ever council endorsement.'],
      ['OL', 'Traylor', '◐', 'Outsider Left voters like a CdeBaca-endorsed newcomer who says the city is “criminalizing poverty” and wants a 24/7 STAR program.'],
      ['SS', 'Reyes', '○', 'Stressed Sideliners may relate to a Westside native who says City Hall leaves people behind and misspends money.'],
      ['AR', 'Doane', '◐', 'Ambivalent Right voters prefer the only candidate running on simpler taxes and efficiency, a former Republican caucus budget director.'],
      ['PR', 'Doane', '○', 'Populist Right voters lean to the reform-minded fiscal conservative who backs self-defense rights, though he is a low-profile candidate.'],
      ['CC', 'Doane', '◐', 'Committed Conservatives back the candidate with Republican budget experience and a lower-tax agenda.'],
      ['FF', 'Doane', '○', 'Faith and Flag Conservatives have no social-conservative candidate; Doane is the closest fit on taxes and gun rights.'],
    ]),
    counterArguments: [
      'PL (Mejía ●): But consider Konkle, whose vacancy-fine and upzoning platform goes further, and note that plurality rules let a split progressive vote hand the seat to someone else.',
      'CC (Doane ◐): But consider Walker, who served 10 years on the elected RTD board and six on the Planning Board and supports housing-first and density; in a 10-way plurality race, a Doane vote is unlikely to decide the seat.',
      'EL (Martinez ◐): But consider Walker’s far longer public-board record if experience is your priority.',
    ],
  },

  // ───────────────────────────── RTD C ─────────────────────────────
  {
    id: 'co-rtd-district-c',
    categoryId: 'district',
    title: 'RTD Board of Directors, District C',
    tldrLabel: 'RTD District C',
    seatContext: 'Open (unopposed)',
    kind: 'candidates',
    legalRequirements:
      'Registered elector living in Director District C; nonpartisan office under the Regional Transportation District Act (C.R.S. title 32, article 9). The 2026 winners serve two-year terms before the board changes to five elected and four appointed members in 2028.',
    qualificationCriteria: [
      { id: 'transit', label: 'Transit operations and planning knowledge', detail: 'Directors approve service changes, fares and long-range plans.' },
      { id: 'finance', label: 'Budget and finance oversight', detail: 'RTD has a roughly $1.28 billion budget and a deficit of more than $200 million.' },
      { id: 'governance', label: 'Board governance and executive oversight', detail: 'The board hires and oversees the general manager and approves major contracts.' },
    ],
    stakesParagraphs: [
      'RTD runs buses and trains across eight counties on a 1% sales tax. Its 15 elected directors hire the general manager, set fares, approve budgets and major route changes, and decide big contracts.',
      'The agency faces a deficit of more than $200 million, possible service cuts, and pressure to put up to $156 million toward the state’s Colorado Connector train. District C covers dense, transit-heavy central, west and northwest Denver, including most of 80204.',
    ],
    introParagraphs: [
      'Director Michael Guzman is not running. Joe Meyer is unopposed (Denverite). About 89% of 80204 residents are in District C; the rest are in District A, which is not on the ballot this year.',
    ],
    readingLinks: [
      { label: 'Denverite: RTD board voter guide (Sept. 25, 2026)', url: 'https://denverite.com/2026/09/25/vg-2026-rtd-board-voter-guide', summary: 'RTD’s finances, the 2028 board overhaul and every race.' },
      { label: 'Denverite: Joe Meyer, District C (Sept. 25, 2026)', url: 'https://denverite.com/2026/09/25/vg-2026-joe-meyer-rtd-board-district-c-voter-guide', summary: 'His views on routes, the budget, a tax ask and the Colorado Connector.' },
    ],
    candidates: [
      {
        id: 'joe-meyer',
        name: 'Joe Meyer',
        party: 'NP',
        role: 'Aerospace engineer',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Aerospace engineer and transit rider with detailed fleet and service ideas; no public-board experience found.',
          criteria: [
            { criterionId: 'transit', assessment: 'partial', evidence: 'Detailed views on spare-fleet ratios, bus priority and evaluating where routes go (Denverite).' },
            { criterionId: 'finance', assessment: 'partial', evidence: 'Would look first at vehicle purchases; supports asking voters for more revenue (Denverite).' },
            { criterionId: 'governance', assessment: 'unknown', evidence: 'No public-board service found.' },
          ],
        },
        bio: [
          'Meyer, 32, is an aerospace engineer. He says his top issue is “keeping rider experience and usability front and center” and funding high-frequency core routes with the metro’s cities. He supports asking voters for more tax revenue and opposes RTD funding Colorado Connector service beyond Longmont (Denverite).',
        ],
        scorecard: [
          { topic: 'Service', position: '✓ High-frequency core routes; prioritize safety-net destinations', comparison: 'Unopposed.' },
          { topic: 'Revenue', position: '✓ RTD should ask voters for more revenue', comparison: 'Unopposed.' },
        ],
        money: 'Not compiled.',
        endorsements: 'None listed (Denverite).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Meyer', '●', 'Progressive Left voters have one candidate, who backs more transit funding.'],
      ['EL', 'Meyer', '●', 'Establishment Liberals face a single-candidate race.'],
      ['DM', 'Meyer', '●', 'Democratic Mainstays face a single-candidate race.'],
      ['OL', 'Meyer', '●', 'Outsider Left voters face a single-candidate race.'],
      ['SS', 'Meyer', '●', 'Stressed Sideliners face a single-candidate race.'],
      ['AR', 'Meyer', '●', 'Ambivalent Right voters face a single-candidate race; leaving it blank is also an option.'],
      ['PR', 'Meyer', '●', 'Populist Right voters face a single-candidate race; leaving it blank is also an option.'],
      ['CC', 'Meyer', '●', 'Committed Conservatives face a single-candidate race, though his support for a tax increase may lead some to leave it blank.'],
      ['FF', 'Meyer', '●', 'Faith and Flag Conservatives face a single-candidate race; leaving it blank is also an option.'],
    ]),
    counterArguments: ['CC (Meyer ●): Meyer supports asking voters for a higher RTD tax; a blank vote is a way to register disagreement in an uncontested race.'],
  },

  // ───────────────────────────── 2H ─────────────────────────────
  {
    id: 'denver-measure-2h',
    categoryId: 'local-measures',
    title: 'Denver Referred Question 2H — Auditor’s wage-enforcement authority',
    tldrLabel: 'Denver 2H — Auditor wage enforcement',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      '2H adds one line to the Denver Charter saying the Auditor “shall enforce wage, worker protection, and workplace rights, as the Council by ordinance may require.” The office already does this: prevailing wage since 1950, and minimum-wage and wage-theft cases since 2016.',
      'Supporters say writing it into the charter removes any doubt about the office’s authority. It does not add powers or money, but it makes the arrangement harder to undo, because changing the charter requires a citywide vote.',
    ],
    introParagraphs: ['City Council referred 2H without opposition (two members absent). Auditor Timothy O’Brien supports it. No argument against was filed and no opposition campaign exists (Denverite; Ballot Information Booklet).'],
    measure: {
      explainerUrl: 'https://denverite.com/2026/09/25/vg-2026-referred-question-2h-auditors-office-voter-guide',
      question:
        'Shall the Charter of the City and County of Denver be amended to expressly clarify that the Auditor’s Office may continue to enforce wage laws, worker protection laws, and other workplace rights laws in accordance with ordinances passed by City Council?',
      yesMeans: 'Adds a line to the city charter confirming that the Auditor’s Office enforces wage, worker-protection and workplace-rights laws as City Council sets by ordinance.',
      noMeans: 'Leaves the charter unchanged; the Auditor’s Office keeps enforcing wage laws under existing ordinances, but that role stays unstated in the charter.',
      funding: {
        asOf: DENVER_MONEY_AS_OF,
        note: 'No committee has registered with the Denver Clerk and Recorder to support or oppose 2H.',
        sources: [DENVER_CF_SOURCE],
      },
      positions: [denverDems('Yes'), denverGop('Yes')],
      measureType: 'Charter amendment (referred by City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact: 'Department of Finance: no anticipated fiscal impact, because the Auditor’s Office already performs this function.',
      supporters: 'Written comments for were filed (Ballot Information Booklet). Supported by Auditor Timothy O’Brien and his labor-division head.',
      opponents: 'No comments against were submitted.',
      voterConnection: [
        'Low-wage workers, often immigrants and young workers, use the Auditor’s free enforcement instead of hiring a lawyer.',
        'Employers who follow wage law are protected from competitors who cut corners.',
        'No tax or fee changes either way.',
      ],
      mechanismBullets: [
        'Adds Charter § 5.2.1(F), “Wage and Workplace Rights Enforcement,” and re-letters the following subsections.',
        'Enforcement scope stays defined by council ordinance.',
        'The office reports about $10 million in restitution and more than 15,000 workers’ cases in the last decade (written comments).',
        'Recent ordinances gave the office subpoena power in wage-theft cases (Denverite).',
      ],
      argumentsFor: [
        'Clarifies existing practice so wage cases are not challenged on authority grounds.',
        'Protects a no-cost enforcement route for workers who cannot afford lawyers.',
        'Levels the field for law-abiding employers.',
        'No fiscal cost.',
      ],
      argumentsAgainst: [
        'Locks an enforcement role into the charter, which is harder to change than an ordinance.',
        'Mixing enforcement with the Auditor’s independent audit role can blur that office’s mission.',
        'The office already has this authority, so the change may be unnecessary.',
      ],
      readingLinks: [
        BOOKLET_LINK,
        { label: 'Denverite: Referred Question 2H explained', url: 'https://denverite.com/2026/09/25/vg-2026-referred-question-2h-auditors-office-voter-guide', summary: 'What the line does and who supports it.' },
        DENVERITE_GUIDE,
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters want strong, free enforcement against wage theft.'],
      ['EL', 'Yes', '●', 'Establishment Liberals see a no-cost good-government clarification.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays back protections for low-wage workers.'],
      ['OL', 'Yes', '●', 'Outsider Left voters favor worker protections against exploitative employers.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners, often in hourly jobs, benefit from free wage enforcement.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters may accept a no-cost clarification of existing practice.'],
      ['PR', 'No', '○', 'Populist Right voters are wary of locking regulatory enforcement into the charter.'],
      ['CC', 'No', '◐', 'Committed Conservatives prefer business regulation stay in easily revisited ordinances, not the charter.'],
      ['FF', 'No', '○', 'Faith and Flag Conservatives lean against expanding the charter’s regulatory language.'],
    ]),
    hinges: {
      PL: 'Yes if you want free wage-theft enforcement written into the charter so it isn’t challenged on authority grounds. No if you think the change is unnecessary because the office already has this authority.',
      EL: 'Yes if a no-cost clarification that heads off authority challenges is good government to you. No if mixing enforcement with the Auditor’s independent audit role blurs that office’s mission.',
      DM: 'Yes if protecting low-wage workers who can’t afford lawyers matters to you. No if you think the Auditor already has this role and the charter line adds nothing.',
      OL: 'Yes if you want exploitative employers to keep facing free enforcement from the Auditor. No if a charter line that adds no new powers or money doesn’t change much for workers.',
      SS: 'Yes if you, or people you know in hourly jobs, might need free help recovering unpaid wages. No if the change seems unnecessary because the Auditor already does this work.',
      AR: 'Yes if you accept a no-cost clarification of what the office already does. No if you’d rather not make an enforcement role harder to undo by putting it in the charter.',
      PR: 'Yes if honest employers deserve protection from competitors who cut corners on wages. No if locking regulatory enforcement into the charter, where only a citywide vote can change it, worries you.',
      CC: 'Yes if you note it adds no new powers or spending and honest employers benefit from enforcement against cheaters. No if business regulation should stay in easily revisited ordinances, not the charter.',
      FF: 'Yes if you see it as simply confirming fair enforcement of existing wage laws. No if you lean against adding regulatory language to the city charter.',
    },
    counterArguments: [
      'CC (No ◐): But the measure adds no new powers or spending; it codifies what ordinances already require, and honest employers benefit from enforcement against cheaters.',
    ],
  },

  // ───────────────────────────── 2I ─────────────────────────────
  {
    id: 'denver-measure-2i',
    categoryId: 'local-measures',
    title: 'Denver Referred Question 2I — Optional two-year budget',
    tldrLabel: 'Denver 2I — Two-year budget',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      '2I would let City Council choose, by ordinance, to adopt two-year budgets instead of one-year budgets, move up the mayor’s budget release to the first Friday in September, and require mid-year budget-cut plans when revenue or spending misses forecasts by 2% or more, and actual cuts at 5%.',
      'Supporters say it gives more time for planning, evaluation and public input. Critics say Denver, which relies on volatile sales tax, struggles to forecast even one year ahead.',
    ],
    introParagraphs: [
      'Council referred 2I 10-2 (Kevin Flynn and Flor Alvidrez opposed), sponsored by Shontel Lewis, Amanda Sawyer and Stacie Gilmore. Neither side had an organized campaign as of Sept. 14 (Denverite).',
    ],
    measure: {
      explainerUrl: 'https://denverite.com/2026/09/25/vg-2026-referred-question-2i-biennial-budgeting-voter-guide',
      question:
        'Shall the Charter of the City and County of Denver be amended to adjust the City and County’s budget and appropriation process, and in connection therewith, allowing the City Council to adopt a two-year budget planning and adoption process and modernizing or repealing certain charter sections?',
      yesMeans: 'Lets City Council switch to two-year budgets by ordinance, moves the mayor’s budget release to early September, and requires mid-year cut plans when revenue or spending misses forecasts.',
      noMeans: 'Keeps Denver’s one-year budget, the Sept. 15 mayoral budget deadline, the July 1 preliminary estimate, and no charter triggers for mid-year shortfalls.',
      funding: {
        asOf: DENVER_MONEY_AS_OF,
        note: 'No committee has registered with the Denver Clerk and Recorder to support or oppose 2I.',
        sources: [DENVER_CF_SOURCE],
      },
      positions: [denverDems('Yes'), denverGop('No')],
      measureType: 'Charter amendment (referred by City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact: 'About $50,000 one-time to reconfigure budget publishing ($20K) and development ($30K) systems; no cost from the earlier budget release date.',
      supporters: 'Written comments for filed (Ballot Information Booklet); sponsors Councilmembers Lewis, Sawyer and Gilmore.',
      opponents: 'Written comments against filed (Ballot Information Booklet); Councilmembers Flynn and Alvidrez voted no.',
      voterConnection: [
        'Changes how and when residents can weigh in on city spending, with a required public input process run by the Mayor’s Office (in companion legislation).',
        'Could affect how fast Denver responds to a downturn; the city faced a roughly $200 million mid-year gap in 2025.',
        'No tax change.',
      ],
      mechanismBullets: [
        'One-year budgets stay the default; council may adopt a two-year term by ordinance filed by Jan. 31 of the preceding year.',
        'Council would still approve spending each year.',
        'The mayor’s proposed budget moves from Sept. 15 to the first Friday in September; the final budget goes to council on the second Friday in October.',
        'At a 2% miss, Finance must present a reduction plan in committee; at 5%, council must cut appropriations by ordinance.',
        'Repeals the July 1 preliminary-estimate requirement.',
      ],
      argumentsFor: [
        'Frees staff in the second year to evaluate whether programs work.',
        'Gives council and the public an extra week to review budgets.',
        'Adds automatic triggers to address shortfalls mid-year.',
        'Optional: council can stay on one-year budgets.',
      ],
      argumentsAgainst: [
        'Sales tax, 56% of the general fund, is volatile; forecasting two years ahead is harder.',
        'The state already requires a balanced budget each year, so a two-year plan may add work without benefit.',
        'Denver already does multi-year capital plans and contracts.',
        'Opponents argue it could shift budget power toward the mayor.',
      ],
      readingLinks: [
        BOOKLET_LINK,
        { label: 'Denverite: Referred Question 2I explained', url: 'https://denverite.com/2026/09/25/vg-2026-referred-question-2i-biennial-budgeting-voter-guide', summary: 'How it would work, the council vote and Flynn’s objections.' },
        DENVERITE_GUIDE,
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters welcome the required public input and a stronger council role, pushed by progressive sponsors.'],
      ['EL', 'Yes', '◐', 'Establishment Liberals value longer-range planning and program evaluation, with an opt-out in hard times.'],
      ['DM', 'Yes', '○', 'Democratic Mainstays lean toward the council majority, without strong feelings.'],
      ['OL', 'Yes', '○', 'Outsider Left voters like more public input but distrust promises it will matter.'],
      ['SS', 'No', '○', 'Stressed Sideliners lean toward keeping the familiar yearly budget.'],
      ['AR', 'No', '○', 'Ambivalent Right voters worry about forecasting risk after recent deficits.'],
      ['PR', 'No', '○', 'Populist Right voters distrust process changes that may reduce yearly scrutiny.'],
      ['CC', 'No', '◐', 'Committed Conservatives prefer annual budgets that adjust quickly to volatile sales-tax revenue.'],
      ['FF', 'No', '○', 'Faith and Flag Conservatives lean toward the more cautious status quo.'],
    ]),
    hinges: {
      PL: 'Yes if more time for program review and public input on spending appeals to you. No if the public-input process sits in companion legislation, not the charter, so a future council could drop it.',
      EL: 'Yes if longer-range planning and program evaluation, with one-year budgets still the default, make sense to you. No if Denver’s reliance on volatile sales tax makes two-year forecasts too risky.',
      DM: 'Yes if you want the city to have a two-year planning option, as the council majority does. No if you worry it could shift budget power toward the mayor, as opponents argue.',
      OL: 'Yes if more public input on city spending is worth trying. No if you doubt promises of public input will change how the money is actually spent.',
      SS: 'Yes if automatic mid-year cut triggers would help the city avoid another surprise budget gap. No if you’d rather keep the familiar yearly budget you know.',
      AR: 'Yes if the 2% and 5% shortfall triggers add discipline after recent deficits. No if forecasting two years ahead is too risky after the roughly $200 million gap in 2025.',
      PR: 'Yes if forced mid-year cuts when revenue falls short appeal to you. No if you worry two-year budgets could mean less yearly scrutiny of city spending.',
      CC: 'Yes if automatic 2% and 5% shortfall triggers that force mid-year cuts are the fiscal discipline you want. No if annual budgets that adjust quickly to volatile sales-tax revenue are safer.',
      FF: 'Yes if the shortfall triggers and an extra week for public review outweigh your caution. No if you prefer the cautious status quo, since the state already requires a balanced budget each year.',
    },
    counterArguments: [
      'CC (No ◐): But the measure also adds automatic 2% and 5% shortfall triggers that force mid-year cuts, a fiscal discipline tool conservatives often favor.',
      'PL (Yes ◐): But the public-input process is in companion legislation, not the charter, so a future council could drop it.',
    ],
  },

  // ───────────────────────────── 2J ─────────────────────────────
  {
    id: 'denver-measure-2j',
    categoryId: 'local-measures',
    title: 'Denver Referred Question 2J — Civil Service Commission and police/fire rules',
    tldrLabel: 'Denver 2J — Civil service update',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      '2J rewrites the charter sections on the Civil Service Commission and the hiring, probation and discipline of Denver police and firefighters. Many changes are technical; some are substantive: no citizenship requirement for commissioners, no charter caps on command staff (18 police, 7 fire), and a longer window for the safety manager to review discipline.',
      'Several details would move from the charter into ordinance, so council could change them later without a citywide vote.',
    ],
    introParagraphs: ['Council referred 2J unanimously in August after a year of review with city agencies, unions and a charter task force led by Councilmember Jamie Torres. Police and fire leaders support it. One committee, United Safety Workers of Denver, has registered to oppose it but had reported no money through Sept. 30; no committee supports it (Denverite; Denver campaign-finance filings).'],
    measure: {
      explainerUrl: 'https://denverite.com/2026/09/25/vg-2026-referred-question-2j-police-fire-employees-voter-guide',
      question:
        'Shall the Charter of the City and County of Denver be amended to modernize the Civil Service Commission and Department of Safety by removing outdated language, giving City Council the ability to add duties via code, and providing for an extension of probation when required for medical, military, or other approved leave?',
      yesMeans: 'Rewrites charter rules for the Civil Service Commission and police and fire hiring and discipline, dropping the commissioner citizenship rule and command-staff caps and letting council add duties by ordinance.',
      noMeans: 'Keeps current charter rules, including the commissioner citizenship requirement, caps of 18 police and 7 fire command posts, and the 15-day disciplinary review window.',
      funding: {
        asOf: DENVER_MONEY_AS_OF,
        note: 'No money reported on either side. One committee, United Safety Workers of Denver, registered to oppose 2J but had filed no contribution reports; no committee registered in support.',
        sources: [DENVER_CF_SOURCE],
      },
      positions: [denverDems('Yes'), denverGop('No')],
      measureType: 'Charter amendment (referred by City Council)',
      voteThreshold: 'Simple majority',
      fiscalImpact: 'Department of Finance: removing command-staff caps would have a de minimis impact if authorized strength does not change.',
      supporters: 'Written comments for filed (Ballot Information Booklet); Denver Police and Fire departments.',
      opponents: 'No comments against were submitted.',
      voterConnection: [
        'Affects how police and firefighters are hired, promoted and disciplined.',
        'Lets non-citizen residents serve on the Civil Service Commission; voters already removed citizenship requirements for police and fire applicants.',
        'Moves some rules to ordinance, trading voter control for flexibility.',
      ],
      mechanismBullets: [
        'Strikes the citizenship requirement for the five commissioners.',
        'Removes caps of 18 police and 7 fire command assignments.',
        'Extends the safety manager’s disciplinary review from 15 calendar days to 20 business days.',
        'Allows probation to be extended for medical, military or other approved leave.',
        'Moves the public safety cadet program to the Manager of Safety section; deletes “good moral character” and longevity-pay language; adopts gender-neutral wording.',
      ],
      argumentsFor: [
        'Modernizes rules dating to 1904 that no longer match operations.',
        'Gives departments flexibility to structure leadership as the city grows.',
        'Fixes a gap that penalized recruits on military or medical leave.',
        'Unanimous council support and backing from police and fire.',
      ],
      argumentsAgainst: [
        'Moving rules into ordinance reduces direct voter oversight of the civil-service system.',
        'Removing command caps could add higher-paid leadership positions.',
        'Longer review windows can slow disciplinary decisions.',
        'Some voters object to non-citizens on the commission.',
      ],
      readingLinks: [
        BOOKLET_LINK,
        { label: 'Denverite: Referred Question 2J explained', url: 'https://denverite.com/2026/09/25/vg-2026-referred-question-2j-police-fire-employees-voter-guide', summary: 'Which changes are technical and which are substantive.' },
        DENVERITE_GUIDE,
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '◐', 'Progressive Left voters support opening the commission to non-citizens, while watching discipline timelines.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value a consensus modernization built with unions and agencies.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays follow the unanimous council and department support.'],
      ['OL', 'Yes', '○', 'Outsider Left voters like the inclusion changes but are wary of more police command flexibility.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners have little at stake and may follow the unanimous recommendation.'],
      ['AR', 'Yes', '◐', 'Ambivalent Right voters like giving police and fire management flexibility.'],
      ['PR', 'No', '○', 'Populist Right voters object to non-citizens on the Civil Service Commission and less voter control.'],
      ['CC', 'Yes', '○', 'Committed Conservatives back flexibility the police and fire chiefs requested, despite the citizenship change.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives object to removing the citizenship requirement for commissioners.'],
    ]),
    hinges: {
      PL: 'Yes if opening the commission to non-citizen residents and fixing leave rules for recruits matter to you. No if the longer disciplinary review and moving rules out of the charter could weaken accountability reform advocates fought for.',
      EL: 'Yes if a consensus update built with unions, agencies and a charter task force appeals to you. No if moving civil-service details into ordinance gives up too much direct voter oversight.',
      DM: 'Yes if you see it as a sensible modernization, as the unanimous council and the police and fire departments do. No if removing command-staff caps could add higher-paid leadership posts you don’t want.',
      OL: 'Yes if dropping the citizenship rule and modernizing outdated language matter to you. No if you’re wary of giving police more command flexibility and a slower discipline review.',
      SS: 'Yes if a mostly technical update with unanimous council support seems low-risk to you. No if you’d rather voters, not council, keep control of police and fire hiring rules.',
      AR: 'Yes if giving police and fire management flexibility as the city grows makes sense to you. No if removing command caps could add higher-paid positions over time.',
      PR: 'Yes if giving police and fire the flexibility their departments asked for outweighs the citizenship change for you. No if you object to non-citizens on the Civil Service Commission and to less voter control.',
      CC: 'Yes if you back the flexibility the police and fire chiefs requested. No if removing the citizenship requirement for commissioners is a change you can’t accept.',
      FF: 'Yes if you note voters already dropped citizenship requirements for officers themselves, and police and fire support the package. No if removing the citizenship requirement for commissioners is a line you won’t cross.',
    },
    counterArguments: [
      'FF (No ◐): But voters already dropped citizenship requirements for officers themselves, and the police and fire departments support the full package.',
      'PL (Yes ◐): But the longer disciplinary review window and moving rules out of the charter could weaken accountability that reform advocates fought for.',
    ],
  },

  // ───────────────────────────── 2K ─────────────────────────────
  {
    id: 'denver-measure-2k',
    categoryId: 'local-measures',
    title: 'Denver Referred Question 2K — 20-year Xcel Energy franchise',
    tldrLabel: 'Denver 2K — Xcel franchise',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Xcel Energy needs a franchise to run power and gas lines in Denver streets. The current one expires at the end of 2026. 2K approves a new 20-year deal starting Jan. 1, 2027, keeping the 3% franchise fee (about $34 million a year), Xcel-paid utility relocations for city projects (about $150 million a year in value), and about $10 million a year for undergrounding lines.',
      'Council rejected an earlier version in 2025. The renegotiated deal adds a companion Energy Partnership Agreement with shareholder-funded bill assistance, independent audits and more reporting. Critics say Denver still undersold the value of its right-of-way.',
    ],
    introParagraphs: ['Council referred 2K 10-2 in July after rejecting the first deal 7-6 in August 2025. Colorado Constitution art. XX, § 4 requires a public vote before Denver grants a franchise. The Yes committee, Safe and Reliable Energy Denver, had raised about $2.06 million through Sept. 30, nearly all of it from Xcel Energy itself; no committee has registered against it (Denver campaign-finance filings; Denverite; Brownstein).'],
    measure: {
      explainerUrl: 'https://denverite.com/2026/09/25/vg-2026-referred-question-2k-xcel-energy-franchise-agreement-voter-guide',
      question:
        'Shall the City and County of Denver approve the terms of a twenty-year franchise contract, starting January 1, 2027, with Public Service Company of Colorado (Xcel Energy) to continue its program for undergrounding overhead electrical lines, maintaining infrastructure safety, and partnering with the City for emergency management coordination, and to require that Xcel Energy continue to pay the City for reasonable use of public rights-of-way and other City property necessary to provide safe and reliable utility services for the benefit of the City, its residents, and its businesses?',
      yesMeans: 'Approves a 20-year Xcel Energy franchise from 2027, keeping the 3% fee on Denver electric and gas revenues, Xcel-paid line relocations, and about $10 million a year for undergrounding.',
      noMeans: 'Rejects this deal; the current franchise still expires at the end of 2026, and the city and Xcel would have to extend it or negotiate a new one.',
      funding: {
        asOf: DENVER_MONEY_AS_OF,
        yes: { raised: '$2.06 million', topDonors: ['Xcel Energy ($2,064,184)'] },
        note: 'Safe and Reliable Energy Denver is funded almost entirely by Xcel Energy, the utility that would receive the franchise. No committee has registered to oppose 2K.',
        sources: [DENVER_CF_SOURCE],
      },
      positions: [denverDems('Yes'), denverGop('No position')],
      measureType: 'Franchise approval (referred by City Council; Colo. Const. art. XX, § 4)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'About $34.3 million in franchise fees in 2027 ($2 million to energy assistance, the rest to the General Fund), plus a one-time $2.5 million; $766–859 million to the General Fund over 20 years depending on growth. Without a franchise, the city would pay Xcel to relocate lines for its projects.',
      supporters: 'No written comments filed. Endorsed by the Denver Area Labor Foundation, Colorado Black Women for Political Action, the Latino Community Foundation and the Denver Democrats (Denverite).',
      opponents: 'No written comments filed. Together Colorado criticized the deal; Councilmember Shontel Lewis and then-Councilmember Sarah Parady said it should have secured more affordability money.',
      voterConnection: [
        'The 3% franchise fee is already on Xcel bills; 2K does not raise it.',
        'Funds police, fire, parks and libraries through the General Fund.',
        'Affects how much leverage Denver has over Xcel on reliability, undergrounding and clean energy for 20 years.',
      ],
      mechanismBullets: [
        '20-year term, 2027–2046; 3% fee on electric and gas revenues in Denver.',
        '1% of electric revenues (about $10 million a year) held by Xcel to bury lines at the city’s direction.',
        'Xcel covers major utility relocations for city construction (valued at about $150 million a year).',
        'Companion agreement: $2.5 million upfront plus $125,000 a year (about $2.5 million over 20 years) in shareholder-funded affordability aid; $250,000 a year for energy navigators; audits every three years.',
        'If rejected, the city and Xcel could extend the old agreement while renegotiating.',
      ],
      argumentsFor: [
        'Secures stable franchise revenue and relocation savings during tight budgets.',
        'Supporters call it the strongest energy partnership in Colorado after a year of renegotiation.',
        'Keeps undergrounding and wildfire and storm safety work going.',
        'Labor groups warn rejection could delay city projects.',
      ],
      argumentsAgainst: [
        'Twenty years is a long commitment as energy technology and climate goals change.',
        'Affordability aid is small: advocates asked for $5 million a year and got $5 million over the term.',
        'Critics say the deal locks in “the status quo” without enforceable clean-energy commitments.',
        'Rejecting it could force a better deal, as council did in 2025.',
      ],
      readingLinks: [
        BOOKLET_LINK,
        { label: 'Denverite: Referred Question 2K explained', url: 'https://denverite.com/2026/09/25/vg-2026-referred-question-2k-xcel-energy-franchise-agreement-voter-guide', summary: 'What a yes or no vote means, benefits, supporters and critics.' },
        {
          label: 'Brownstein: Denver’s 2026 ballot takes shape (Aug. 14, 2026)',
          url: 'https://www.bhfs.com/insight/denvers-2026-ballot-takes-shape-key-initiatives-and-the-at-large-city-council-vacancy-election/',
          summary: 'History of the 2025 rejection and the 10-2 referral.',
        },
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '◐', 'Progressive Left voters want more affordability money and clean-energy commitments before a 20-year monopoly deal.'],
      ['EL', 'Yes', '●', 'Establishment Liberals back a renegotiated deal endorsed by labor and the city’s climate office.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays follow the Denver Democrats and labor in support.'],
      ['OL', 'No', '◐', 'Outsider Left voters distrust a long contract with a profitable utility and side with community critics.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners favor stability with no new charge on their bills.'],
      ['AR', 'Yes', '●', 'Ambivalent Right voters favor continuity and city revenue without tax increases.'],
      ['PR', 'Yes', '○', 'Populist Right voters dislike Xcel but see no better alternative than continuity.'],
      ['CC', 'Yes', '●', 'Committed Conservatives support a stable, market-based franchise over municipalization fights.'],
      ['FF', 'Yes', '◐', 'Faith and Flag Conservatives lean toward reliable service and the status quo.'],
    ]),
    hinges: {
      PL: 'Yes if a No vote’s risks, lost relocation savings and delayed transit and sidewalk projects, worry you more. No if you want more affordability money and enforceable clean-energy commitments before a 20-year deal.',
      EL: 'Yes if a renegotiated deal backed by labor that keeps the fee and undergrounding is the practical choice. No if 20 years is too long and even supporters on council called the affordability money small.',
      DM: 'Yes if keeping city revenue and projects on track matters most, as the Denver Democrats and labor argue. No if $5 million in aid over 20 years, when advocates asked for $5 million a year, falls short.',
      OL: 'Yes if a No vote’s risks to city projects outweigh your distrust of Xcel. No if a long contract with a profitable utility, campaigned for almost entirely with Xcel’s own money, should go back for renegotiation.',
      SS: 'Yes if you want stability and the 3% fee already on your bill won’t rise. No if you think rejecting it could force a better deal, as council did in 2025.',
      AR: 'Yes if continuity and about $34 million a year in city revenue without a tax increase appeal to you. No if a 20-year commitment seems too long as energy technology changes.',
      PR: 'Yes if you dislike Xcel but see no better alternative than keeping service and fees steady. No if a deal backed by Xcel’s own $2 million campaign looks too good for the utility.',
      CC: 'Yes if a stable franchise beats risking years without one, as Boulder went a decade without a franchise. No if you think Denver undersold the value of its streets and should push for a better price, as critics say.',
      FF: 'Yes if reliable service and the status quo matter most to you. No if you think Denver undersold the value of its streets and should go back for a better deal, as critics say.',
    },
    counterArguments: [
      'PL (No ◐): But a no vote risks lost relocation savings and delays on transit and sidewalk projects, and Boulder spent a decade without a franchise without getting a better deal.',
      'EL (Yes ●): But 20 years is long, and even supporters on council called the affordability money small.',
    ],
  },

  // ───────────────────────────── 311 ─────────────────────────────
  {
    id: 'denver-measure-311',
    categoryId: 'local-measures',
    title: 'Denver Initiated Ordinance 311 — Ban force-feeding of birds and foie gras sales',
    tldrLabel: 'Denver 311 — Foie gras ban',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Initiated Ordinance 311 would ban force-feeding birds in Denver and ban selling products from force-fed birds, mainly foie gras, starting July 1, 2027. It would remove foie gras from roughly 15 to 24 restaurant menus; violators could face fines up to $5,000 or license action.',
      'It does not ban owning or eating foie gras or selling foie gras made without force-feeding. Supporters call force-feeding cruel; restaurant groups oppose government bans on specific foods.',
    ],
    introParagraphs: ['Pro-Animal Colorado, whose fur-sales and slaughterhouse bans failed in 2024, qualified 311 with about 11,000 valid signatures and had raised about $159,000 through Sept. 30, half of it from the Karuna Foundation. A No on 311 committee registered in September and reported $10,000 from two donors; the Colorado Restaurant Association also opposes product bans (Denverite; Denver campaign-finance filings).'],
    measure: {
      explainerUrl: 'https://denverite.com/2026/09/25/vg-2026-initiated-ordinance-311-force-feeding-birds-ban-voter-guide/',
      question:
        'Shall the voters of the City and County of Denver adopt an ordinance prohibiting the force-feeding of birds and, in connection therewith, prohibiting the sale of products derived from force-feeding birds, including foie gras?',
      yesMeans: 'Bans force-feeding birds and selling products from force-fed birds, mainly foie gras, in Denver starting July 1, 2027, with fines up to $5,000.',
      funding: {
        asOf: DENVER_MONEY_AS_OF,
        yes: { raised: '$159,000', topDonors: ['Karuna Foundation ($79,302)', 'Max Thomas ($10,800)', 'Justin Clark ($9,327)'] },
        no: { raised: '$10,000', topDonors: ['David Dean ($5,000)', 'Pat Shaw ($5,000)'] },
        note: 'Yes: Pro-Animal Colorado. No: the NO ON 311 issue committee.',
        sources: [DENVER_CF_SOURCE],
      },
      positions: [denverDems('Yes'), denverGop('No')],
      noMeans: 'Keeps foie gras and other products from force-fed birds legal to sell in Denver, with no city rule on force-feeding.',
      measureType: 'Initiated ordinance (citizen petition)',
      voteThreshold: 'Simple majority',
      fiscalImpact: 'Department of Finance: no anticipated fiscal impact; public health workload would be minimal and absorbed.',
      supporters: 'Written comments for filed (Ballot Information Booklet); Pro-Animal Colorado.',
      opponents: 'No comments against filed. NO ON 311 (registered issue committee); Colorado Restaurant Association opposes product bans (statement to Denverite).',
      voterConnection: [
        'Most Denverites never buy foie gras; the direct effect falls on a few high-end restaurants.',
        'Sets a precedent for banning specific foods by ballot.',
        'No cost to taxpayers.',
      ],
      mechanismBullets: [
        'Adds Article VII to Chapter 8 of the Denver Revised Municipal Code.',
        'Bans force-feeding birds in Denver; exempts licensed veterinarians tube-feeding sick birds.',
        'Bans sale of products from force-fed birds; personal possession and consumption remain legal.',
        'Fines up to $5,000 and possible license action; effective July 1, 2027.',
        'Similar bans exist in California, New York City and much of the EU (written comments; Brownstein).',
      ],
      argumentsFor: [
        'Force-feeding causes documented injury and distress.',
        'A luxury item, not a staple; little economic harm.',
        'Supporters cite a CSU poll finding 85% of Colorado voters favor ending sales from force-fed farms.',
        'Enforcement fits existing restaurant inspections.',
      ],
      argumentsAgainst: [
        'Government should not dictate what restaurants serve.',
        'Hurts a handful of small restaurants on thin margins.',
        'Inconsistent: other livestock practices also cause suffering.',
        'A ballot ban on one product invites more.',
      ],
      readingLinks: [
        BOOKLET_LINK,
        { label: 'Denverite: Initiated Ordinance 311 explained', url: 'https://denverite.com/2026/09/25/vg-2026-initiated-ordinance-311-force-feeding-birds-ban-voter-guide/', summary: 'How the ban works, who is affected and arguments on both sides.' },
        DENVERITE_GUIDE,
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters prioritize animal welfare over luxury products.'],
      ['EL', 'Yes', '◐', 'Establishment Liberals find a narrow, cheap ban persuasive, while some respect restaurant freedom.'],
      ['DM', 'Yes', '○', 'Democratic Mainstays lean toward animal welfare on a low-stakes question.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters oppose cruelty for an elite delicacy.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners rarely eat foie gras and may side with animal welfare.'],
      ['AR', 'No', '○', 'Ambivalent Right voters dislike government food bans but care little about foie gras.'],
      ['PR', 'No', '◐', 'Populist Right voters see a ban on a legal food as overreach.'],
      ['CC', 'No', '●', 'Committed Conservatives oppose product bans that limit business and consumer choice.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives distrust activist-driven bans on traditional foods.'],
    ]),
    hinges: {
      PL: 'Yes if ending force-feeding for a luxury product is your priority. No if you weigh more heavily that the cost falls on workers at a few small restaurants.',
      EL: 'Yes if a narrow, no-cost ban on one production method is a reasonable animal-welfare step. No if you respect restaurants’ freedom to set their own menus.',
      DM: 'Yes if animal welfare tips a low-stakes question for you. No if a ballot ban on one product could invite more bans on specific foods.',
      OL: 'Yes if you oppose cruelty to animals for an elite delicacy. No if other livestock practices also cause suffering and singling out foie gras seems inconsistent.',
      SS: 'Yes if you never buy foie gras and side with animal welfare. No if government deciding what restaurants serve bothers you, however rare the item.',
      AR: 'Yes if you see force-feeding as cruel and the ban as narrow. No if you dislike government food bans, even for a dish you rarely eat.',
      PR: 'Yes if force-feeding birds strikes you as cruelty worth stopping. No if banning the sale of a legal food is government overreach to you.',
      CC: 'Yes if you note it targets one production method, and personal possession and eating stay legal. No if you oppose product bans that limit business and consumer choice.',
      FF: 'Yes if humane treatment of animals matters more to you than a luxury dish. No if an activist-driven ban on a traditional food sets a precedent you don’t want.',
    },
    counterArguments: [
      'CC (No ●): But the ban targets one production method, not foods in general, and personal possession and eating remain legal.',
      'PL (Yes ●): But the same group’s 2024 bans failed, and restaurant workers at a few small businesses bear the cost.',
    ],
  },

  // ───────────────────────────── DPS 4A ─────────────────────────────
  {
    id: 'dps-measure-4a',
    categoryId: 'local-measures',
    title: 'Denver Public Schools Ballot Issue 4A — $44 million mill levy override',
    tldrLabel: 'DPS 4A — $44M school tax',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      '4A raises Denver property taxes by up to $44 million a year, with no end date, for Denver Public Schools: a $1,750 raise for every full-time employee, career and technical education, student mental health and special education.',
      'DPS says declining enrollment is squeezing its budget. Supporters cite teacher retention in a competitive metro market; critics of tax increases argue the district should find efficiencies first.',
    ],
    introParagraphs: ['The DPS board voted unanimously in August to refer 4A. No opposition campaign formed and no comments against were filed by the deadline, though the Denver Post and Denver Gazette editorial boards urged a No vote, citing school-board infighting and mistrust of the district. The Yes committee, Denver Together for Kids, had not yet filed a money report as of Oct. 12 (Denverite; Ballot Issue Notice; Chalkbeat; TRACER).'],
    measure: {
      explainerUrl: 'https://denverite.com/2026/09/25/vg-2026-ballot-issue-4a-denver-public-schools-mill-levy-voter-guide',
      question:
        'Shall Denver Public Schools (School District No. 1) taxes be increased up to $44 million in 2026 (for collection in 2027) and annually thereafter for educational purposes, including increasing educator pay; offering more career and technical education courses in high-demand fields; and student mental health and special education, by a mill levy that, combined with other voter-approved overrides, equals the amount permitted by C.R.S. § 22-54-108(3)(b)(VI)? (condensed)',
      yesMeans: 'Raises DPS property taxes by up to $44 million a year, with no end date, for $1,750 staff raises, career and technical education, mental health and special education.',
      noMeans: 'Keeps DPS property taxes at current levels, with no new money for these raises and programs beyond the district’s existing budget and earlier voter-approved overrides.',
      funding: {
        asOf: 'Oct. 12, 2026',
        note: 'No money reported yet. The Yes committee, Denver Together for Kids, registered with the Secretary of State on Aug. 18; its first report, covering through Oct. 8, is due Oct. 13. No committee opposing 4A was found on TRACER.',
        sources: [{ label: 'Colorado TRACER — Denver Together for Kids', url: 'https://tracer.sos.colorado.gov/PublicSite/SearchPages/CommitteeDetail.aspx?OrgID=52357' }],
      },
      positions: [
        denverDems('Yes'),
        denverGop('No'),
        { org: 'The Denver Post editorial board', kind: 'editorial', position: 'No', url: 'https://www.denverpost.com/2026/09/13/denver-public-schools-mill-levy-override-property-tax-increase/' },
        { org: 'The Denver Gazette editorial board', kind: 'editorial', position: 'No', url: 'https://www.denvergazette.com/2026/10/02/editorial-no-on-denvers-4a-dps-has-sown-only-mistrust/' },
      ],
      measureType: 'School district mill levy override (TABOR tax increase; Colo. Const. art. X, § 20)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'Up to $44 million in FY 2026–27; district spending without it estimated at $1.73 billion. About $11.50 a year per $100,000 of home value, or about $72 for the median $624,800 Denver home (supporters’ comment and Denverite).',
      supporters: 'Written comments for filed (Ballot Issue Notice); DPS board (unanimous).',
      opponents: 'No comments against were filed by the constitutional deadline.',
      voterConnection: [
        'Homeowners pay about $72 a year at the median value; landlords may pass costs to renters.',
        'Every DPS employee, including bus drivers and custodians, gets $1,750 more.',
        'About $9.3 million goes to charter schools, as state law requires.',
      ],
      mechanismBullets: [
        '$25.8 million for $1,750 raises per full-time employee (prorated for part-time).',
        '$4 million a year for career and technical education hubs; $5 million for mental health and special education.',
        'About $9.3 million shared with charter schools.',
        'No sunset; spending reported in the district’s annual independent audit.',
        'Investment earnings exempted from TABOR revenue limits.',
      ],
      argumentsFor: [
        'Competitive pay keeps experienced teachers from leaving for suburban districts.',
        'Expands trade and career pathways for graduates.',
        'Funds counselors and special-education staff amid a youth mental-health crisis.',
        'Modest cost for homeowners.',
      ],
      argumentsAgainst: [
        'Permanent tax increase with no sunset.',
        'Enrollment is declining; critics say the district should consolidate and cut before asking for more.',
        'Raises property costs when housing affordability is already strained.',
        'Across-the-board raises are not tied to performance.',
      ],
      readingLinks: [
        { label: 'Denver Ballot Issue Notice (TABOR), text version', url: TABOR_URL, summary: 'Official ballot title, district spending history and the written comments.' },
        { label: 'Denverite: Ballot Issue 4A explained', url: 'https://denverite.com/2026/09/25/vg-2026-ballot-issue-4a-denver-public-schools-mill-levy-voter-guide', summary: 'How the money is split and the cost to homeowners.' },
        DENVERITE_GUIDE,
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters support higher pay for educators and support staff and more mental-health services.'],
      ['EL', 'Yes', '●', 'Establishment Liberals see public-school investment as core to the city’s future.'],
      ['DM', 'Yes', '●', 'Democratic Mainstays back teacher pay and school services.'],
      ['OL', 'Yes', '◐', 'Outsider Left voters support school workers, though some distrust DPS administration.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners with kids in DPS benefit, though some worry about rent and tax costs.'],
      ['AR', 'No', '○', 'Ambivalent Right voters are reluctant about a permanent property-tax increase but value schools.'],
      ['PR', 'No', '◐', 'Populist Right voters oppose higher property taxes for a district losing students.'],
      ['CC', 'No', '●', 'Committed Conservatives oppose a permanent tax increase without efficiency reforms.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives lean against more taxes for the district.'],
    ]),
    hinges: {
      PL: 'Yes if higher pay for every DPS employee and more mental-health services are your priorities. No if a tax with no sunset, and raises not tied to keeping teachers in the hardest-to-staff schools, seem poorly aimed.',
      EL: 'Yes if public-school investment is core to Denver’s future and the median cost is about $72 a year. No if school-board infighting and mistrust of the district give you pause, as they did the Denver Post and Gazette editorial boards.',
      DM: 'Yes if teacher pay and school services come first for you. No if a permanent tax with no end date worries you while housing costs are already strained.',
      OL: 'Yes if school workers like bus drivers and custodians deserve a $1,750 raise. No if your distrust of DPS administration outweighs your support for its staff.',
      SS: 'Yes if you have kids in DPS and want counselors, career training and staff raises. No if landlords passing the cost on to renters would strain your budget.',
      AR: 'Yes if you value Denver’s schools and the cost is about $72 a year for the median home. No if a permanent property-tax increase with no end date is more than you’ll accept.',
      PR: 'Yes if career and technical training for graduates appeals to you. No if higher property taxes for a district losing students seems backwards to you.',
      CC: 'Yes if $4 million a year for career and technical training and a modest median cost win you over. No if you oppose a permanent tax increase before the district consolidates and cuts.',
      FF: 'Yes if supporting teachers and students in your community outweighs the added tax. No if mistrust of the district should be addressed before it gets more money, a concern both Denver editorial boards raised.',
    },
    counterArguments: [
      'CC (No ●): But $4 million a year goes to career and technical training, which many conservatives favor, and the median homeowner cost is about $72 a year.',
      'PL (Yes ●): But the override has no sunset, and raises are not tied to keeping teachers in the hardest-to-staff schools.',
    ],
  },
];
