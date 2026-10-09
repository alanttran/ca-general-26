import type { QualificationCriterion, Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Los Angeles County district races (group A): CA-27, CA-28, CA-29, CA-31, CA-34 (Prop 50 map),
 * SD-22, SD-28, AD-39, AD-40, AD-41, AD-43. Research as of Oct 8, 2026.
 * Finalists are from the Secretary of State's Certified List of Candidates (Aug 27, 2026);
 * June 2 primary shares are from the Secretary of State Statement of Vote.
 */

const SOV_HOUSE = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/76-us-rep.pdf';
const SOV_SENATE = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/90-state-senator.pdf';
const SOV_ASSEMBLY = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/95-state-assembly.pdf';
const CAL_ACCESS = 'No current filing totals verified; see Cal-Access at https://cal-access.sos.ca.gov/.';
const NO_ENDORSEMENTS = 'No endorsement list verified as of Oct 8, 2026.';

const US_REP_LEGAL =
  'At least 25 years old, a U.S. citizen for at least 7 years, and an inhabitant of California when elected (U.S. Constitution art. I, section 2); two-year term.';

const US_REP_CRITERIA: QualificationCriterion[] = [
  { id: 'lawmaking', label: 'Lawmaking and policy experience', detail: 'The job is writing, amending and voting on federal law.' },
  { id: 'committee-budget', label: 'Committee and budget/appropriations work', detail: 'Most legislative work happens in committees that shape spending and oversight.' },
  { id: 'district-service', label: 'Constituent services and knowledge of the district', detail: 'Members run casework offices and carry local priorities to Washington.' },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Little becomes law without bipartisan or cross-chamber partners.' },
];

const LEGAL_LEG =
  'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

const SENATE_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'law-policy', label: 'Lawmaking, legal drafting or policy experience', detail: 'Senators write, amend and vote on state statutes and confirm appointees.' },
  { id: 'budget-oversight', label: 'Budget and committee work', detail: 'The state budget and policy committees are central to a senator’s workload.' },
  { id: 'public-mgmt', label: 'Managing a public agency or elected body', detail: 'Experience running or governing a public organization transfers to oversight of state agencies.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
];

const ASSEMBLY_CRITERIA = (districtDetail: string): QualificationCriterion[] => [
  { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
  { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const HOUSE_STAKES_1 =
  'A U.S. representative votes on federal taxes, health programs such as Medicaid, immigration, defense spending and oversight of the executive branch, and runs a casework office for veterans’ benefits, Social Security and other federal agencies. Terms are two years.';

const SENATE_STAKES_1 =
  'State senators vote on the state budget, taxes, housing and land-use law, public safety, health and labor statutes, and confirm the governor’s appointees. Terms are four years, and Democrats hold a supermajority in the Senate.';

const ASSEMBLY_STAKES_1 =
  'Assembly members vote on the state budget, taxes, housing and land-use law, public safety, schools and energy rules, and run district offices that help constituents with state agencies. Terms are two years, and Democrats hold a supermajority.';

const bp = (slug: string) => `https://ballotpedia.org/${slug}`;

export const RACES_D_LA_A: Race[] = [
  // ───────────────────────────── CA-27 ─────────────────────────────
  {
    id: 'us-rep-ca27',
    categoryId: 'federal',
    title: 'U.S. Representative, 27th District',
    tldrLabel: 'CA-27',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES_1,
      'CA-27 is a northern Los Angeles County seat that Whitesides flipped from Republican Mike Garcia in 2024. Prop 50 redrew it to a Cook Partisan Voter Index of D+6, and all four major forecasters now rate it Solid or Safe Democratic (Ballotpedia, Oct 6, 2026).',
    ],
    introParagraphs: [
      'In the June 2 primary, Republican Santa Clarita Councilmember Jason Gibbs edged Democratic incumbent George Whitesides 41.0% to 40.6%; Democrats Roberto Ramos (9.7%) and Caleb Norwood (8.7%) trailed (Statement of Vote). Democrats combined for about 59%. The race turns on whether Gibbs’s cost-of-living and public-safety pitch can overcome a friendlier map and Whitesides’s 10-to-1 money edge.',
    ],
    readingLinks: [
      { label: 'SoS Statement of Vote — U.S. House (June 2026)', url: SOV_HOUSE, summary: 'Official certified primary results by district.' },
      { label: 'Ballotpedia — CA-27 election, 2026', url: bp('California%27s_27th_Congressional_District_election,_2026'), summary: 'Primary results, FEC totals and race ratings.' },
    ],
    candidates: [
      {
        id: 'george-whitesides',
        name: 'George Whitesides',
        party: 'D',
        role: 'U.S. Representative/Father',
        campaignUrl: 'https://whitesides.house.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term member of Congress since January 2025; earlier NASA chief of staff and Virgin Galactic’s first CEO, with no elected office before 2024.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House member since Jan 3, 2025; co-sponsored the bipartisan DOE and NASA Interagency Research Coordination Act and the Fix Our Forests Act, both of which passed the House (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Serves on the Armed Services Committee and is vice-ranking member of the Science, Space, and Technology Committee (119th Congress).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented CA-27 since 2025; helped coordinate outreach after the January 2025 Hurst Fire (Wikipedia).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Co-sponsored two bipartisan bills that passed the House; member of the New Democrat Coalition. Neither is reported as signed into law.' },
          ],
        },
        bio: [
          'Whitesides was NASA chief of staff under Administrator Charles Bolden until 2010 and then Virgin Galactic’s first CEO for about a decade. He beat Republican Rep. Mike Garcia 51.3% to 48.7% in 2024 (Wikipedia).',
          'He sits on Armed Services and Science, Space, and Technology and belongs to the New Democrat Coalition; after the 2025 fires he co-sponsored the bipartisan Fix Our Forests Act.',
        ],
        recordVsChange:
          'In his first term Whitesides landed committee seats that fit the area’s aerospace economy and backed two bipartisan bills that passed the House. Replacing him would trade that early start for a first-term Republican in a narrowly divided House.',
        scorecard: [
          { topic: 'Defense & aerospace', position: '✓✓ Armed Services and Science committees; former NASA chief of staff', comparison: 'Gibbs worked as an engineer on Delta and Atlas rocket programs.' },
          { topic: 'Climate & wildfire', position: '~ Co-sponsored the bipartisan Fix Our Forests Act on fire prevention', comparison: 'Gibbs has not published a climate or wildfire plan.' },
          { topic: 'Immigration', position: '? No detailed position verified', comparison: 'Gibbs backs border security and ending “policies that reward illegal entry.”' },
          { topic: 'Trump / House majority', position: '✓ Democratic vote; New Democrat Coalition member', comparison: 'Gibbs would add a Republican vote.' },
        ],
        money: 'FEC: $3,963,530 raised this cycle, $2,554,917 cash on hand as of June 30, 2026 (via Ballotpedia).',
        endorsements: NO_ENDORSEMENTS,
      },
      {
        id: 'jason-gibbs',
        name: 'Jason Gibbs',
        party: 'R',
        role: 'City Councilmember/Engineer',
        campaignUrl: 'https://www.jasongibbsforcongress.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Santa Clarita City Councilmember since 2020 and mayor in 2023, with an aerospace engineering career; no state or federal legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Elected to the Santa Clarita City Council at large in 2020 and for District 3 in 2024; chosen mayor in 2023 (campaign site; Ballotpedia). Local, not federal, lawmaking.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on the city budget; no congressional committee or federal budget experience.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Has lived in Santa Clarita for nearly a decade and represented residents there since 2020; has not represented the rest of the district.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No published record of passing legislation across party lines.' },
          ],
        },
        bio: [
          'Gibbs holds bachelor’s and master’s degrees in mechanical engineering from Cal Poly San Luis Obispo and worked in aerospace on the Delta II, Delta IV and Atlas V launch systems. He joined the Santa Clarita City Council in 2020 and was mayor in 2023.',
          'He runs on lowering living costs by opposing new taxes, backing police and ending “catch-and-release,” securing the border, and local control of housing and schools (campaign site).',
        ],
        scorecard: [
          { topic: 'Defense & aerospace', position: '✓ Aerospace engineering career on national launch programs', comparison: 'Whitesides ran NASA’s front office and Virgin Galactic.' },
          { topic: 'Climate & wildfire', position: '? No published position', comparison: 'Whitesides co-sponsored the Fix Our Forests Act.' },
          { topic: 'Immigration', position: '✓ Secure the border, crack down on fentanyl, end “policies that reward illegal entry”', comparison: 'Whitesides has no detailed published position.' },
          { topic: 'Housing', position: '✓ Opposes “one-size-fits-all” state and federal mandates; local control of housing', comparison: 'Whitesides has no detailed federal housing plan.' },
          { topic: 'Trump / House majority', position: '✓ Would add a Republican vote', comparison: 'Whitesides is a New Democrat Coalition member.' },
        ],
        money: 'FEC: $379,440 raised this cycle, $201,877 cash on hand as of June 30, 2026 (via Ballotpedia).',
        endorsements: NO_ENDORSEMENTS,
      },
    ],
    crossTypology: ct([
      ['PL', 'Whitesides', '◐', 'Progressive Left voters may find a New Democrat Coalition member too centrist, but he is the only candidate who would vote with House Democrats.'],
      ['EL', 'Whitesides', '●', 'Establishment Liberals value a former NASA chief of staff with Armed Services and Science committee seats who works on bipartisan bills.'],
      ['DM', 'Whitesides', '●', 'Democratic Mainstays back the Democratic incumbent to keep a seat Democrats flipped in 2024.'],
      ['OL', 'Whitesides', '◐', 'Outsider Left voters are cool to a former corporate CEO, but Whitesides is still far closer to them than a Republican running on border enforcement.'],
      ['SS', 'Whitesides', '○', 'Stressed Sideliners pay little attention to politics and may default to the incumbent, though Gibbs’s cost-of-living message speaks to their worries.'],
      [
        'AR',
        'Gibbs',
        '◐',
        'Ambivalent Right voters can fit Gibbs’s focus on taxes, local control and public safety, though they are less attached to national Republican politics.',
        'An experience-first Ambivalent Right voter could back Whitesides, a sitting member on Armed Services with NASA leadership behind him; the trade is a vote for the Democratic House caucus instead of Gibbs’s lower-tax, local-control approach.',
      ],
      ['PR', 'Gibbs', '●', 'Populist Right voters favor Gibbs’s push to secure the border, end “catch-and-release” and oppose new taxes.'],
      ['CC', 'Gibbs', '●', 'Committed Conservatives back the Republican who opposes new taxes and federal mandates and would add to the GOP side.'],
      ['FF', 'Gibbs', '●', 'Faith and Flag Conservatives prefer the Republican who stresses police, border enforcement and parents’ say in schools.'],
    ]),
    counterArguments: [
      'PR (Gibbs ●): But consider that Gibbs has never held state or federal office, and Whitesides already sits on Armed Services, which matters for the district’s aerospace jobs.',
      'EL (Whitesides ●): But consider that he has served less than two years and has no detailed public positions on immigration or housing.',
    ],
  },

  // ───────────────────────────── CA-28 ─────────────────────────────
  {
    id: 'us-rep-ca28',
    categoryId: 'federal',
    title: 'U.S. Representative, 28th District',
    tldrLabel: 'CA-28',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES_1,
      'CA-28 is a San Gabriel Valley district that reaches into San Bernardino County, with a Cook Partisan Voter Index of D+14 under the Prop 50 map (Ballotpedia). Chu, in Congress since 2009, sits on Ways and Means and Budget; forecasters rate the seat Solid Democratic.',
    ],
    introParagraphs: [
      'In the June 2 primary, Chu took 62.2%, Republican April Verlato 32.1% and Democrat Peter Roybal 5.7% (Statement of Vote). This is a rematch of 2024, which Chu won. The race turns on whether Verlato, a former Arcadia mayor, can cut into Chu’s margin; Verlato reported $250 raised as of June 30.',
    ],
    readingLinks: [
      { label: 'SoS Statement of Vote — U.S. House (June 2026)', url: SOV_HOUSE, summary: 'Official certified primary results by district.' },
      { label: 'Ballotpedia — CA-28 election, 2026', url: bp('California%27s_28th_Congressional_District_election,_2026'), summary: 'Primary results, FEC totals and race ratings.' },
    ],
    candidates: [
      {
        id: 'judy-chu',
        name: 'Judy Chu',
        party: 'D',
        role: 'United States Representative',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2009 after the State Assembly, the Board of Equalization, the Monterey Park City Council and a school board.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since a July 2009 special election; State Assembly 2001–2006; Board of Equalization from 2007 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Serves on Ways and Means (Health, Oversight, and Work and Welfare subcommittees) and the Budget Committee in the 119th Congress.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented the San Gabriel Valley in Congress since 2009; three-term mayor of Monterey Park, where she lives.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Chairs the Congressional Asian Pacific American Caucus and is vice-chair of the Progressive Caucus; reprimanded by the House Ethics Committee in 2014.' },
          ],
        },
        bio: [
          'A psychologist who taught in community colleges for 20 years, Chu served on the Garvey school board, as three-term mayor of Monterey Park, in the Assembly (2001–2006) and on the Board of Equalization before winning a 2009 special election to Congress.',
          'She chairs the Congressional Asian Pacific American Caucus and is Progressive Caucus vice-chair; she was among 46 Democrats who voted against the 2023 debt-ceiling deal (Wikipedia).',
        ],
        recordVsChange:
          'Chu brings 17 years of seniority and seats on Ways and Means and Budget, which shape tax and health law. The case for change rests on policy and her 2014 ethics reproval; Verlato offers a conservative vote but no legislative experience.',
        scorecard: [
          { topic: 'Health care', position: '✓ Ways and Means Health subcommittee; calls abortion access “a fundamental human right”', comparison: 'Verlato favors “market-driven healthcare solutions.”' },
          { topic: 'Taxes & debt', position: '✗ Voted against the 2023 Fiscal Responsibility Act', comparison: 'Verlato backs a balanced-budget amendment and signed the Taxpayer Protection Pledge.' },
          { topic: 'Immigration', position: '? No detailed position verified', comparison: 'Verlato stresses border enforcement against traffickers and drug smugglers.' },
          { topic: 'Trump / House majority', position: '✓ Progressive Caucus vice-chair; reliable Democratic vote', comparison: 'Verlato would add a Republican vote.' },
          { topic: 'District clout', position: '✓✓ 17 years of seniority; Ways and Means seat', comparison: 'Verlato would be a first-term member.' },
        ],
        money: 'FEC: $930,123 raised this cycle, $3,674,296 cash on hand as of June 30, 2026 (via Ballotpedia).',
        endorsements: NO_ENDORSEMENTS,
        redFlags: [
          {
            severity: 'severe',
            status: 'official-finding',
            text: 'In December 2014 the House Ethics Committee issued a letter of reproval, its mildest sanction, finding that Chu interfered with its inquiry by discussing it with staff witnesses. It found no evidence she knew staff did campaign work on official time. Chu apologized, saying she meant to ease a staffer’s anxiety, and added ethics training.',
            whyItMatters: 'Members must cooperate with House ethics oversight, though the finding is more than a decade old and no later findings are reported.',
            sources: [{ label: 'Roll Call (Dec 11, 2014)', url: 'https://www.rollcall.com/2014/12/11/chu-chastised-for-interfering-in-house-ethics-investigation' }],
          },
        ],
      },
      {
        id: 'april-verlato',
        name: 'April Verlato',
        party: 'R',
        role: 'Small Business Owner',
        campaignUrl: 'https://verlatoforcongress.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Attorney and former Arcadia councilmember and mayor; no state or federal legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Elected to the Arcadia City Council in 2016; mayor beginning 2020 (Ballotpedia). Local, not federal, lawmaking.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Voted on Arcadia’s budgets, including police budget requests (campaign site); no congressional experience.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Born and raised in Arcadia in the San Gabriel Valley; ran for this seat in 2024.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No published record of passing legislation beyond the city level.' },
          ],
        },
        bio: [
          'Born and raised in Arcadia, Verlato holds a UCLA political science degree and a Southwestern law degree and works as an attorney and businesswoman. She was elected to the Arcadia City Council in 2016, became mayor in 2020, and lost to Chu in 2024 (Ballotpedia).',
          'She campaigns on a balanced-budget amendment, lower taxes, restoring the SALT deduction, police support and border security (campaign site).',
        ],
        scorecard: [
          { topic: 'Health care', position: '~ Favors “market-driven healthcare solutions”', comparison: 'Chu sits on the Ways and Means Health subcommittee.' },
          { topic: 'Taxes & debt', position: '✓ Balanced-budget amendment; Taxpayer Protection Pledge; restore SALT and mortgage-interest deductions', comparison: 'Chu voted against the 2023 debt-ceiling deal.' },
          { topic: 'Immigration', position: '✓ Federal duty to enforce the border against traffickers and drug smugglers', comparison: 'Chu has no detailed published position.' },
          { topic: 'Climate & energy', position: '~ Expand domestic oil, gas and renewables for energy independence', comparison: 'Chu is a Democratic vote on climate policy.' },
          { topic: 'Trump / House majority', position: '✓ Would add a Republican vote', comparison: 'Chu is Progressive Caucus vice-chair.' },
        ],
        money: 'FEC: $250 raised this cycle, $205 cash on hand as of June 30, 2026 (via Ballotpedia).',
        endorsements: NO_ENDORSEMENTS,
      },
    ],
    crossTypology: ct([
      ['PL', 'Chu', '◐', 'Progressive Left voters fit Chu, the Progressive Caucus vice-chair who opposed the 2023 debt deal, though her 2014 ethics reproval keeps this below a clear pick.'],
      ['EL', 'Chu', '◐', 'Establishment Liberals value Chu’s Ways and Means seniority, tempered by the 2014 House Ethics reproval for interfering with an inquiry.'],
      ['DM', 'Chu', '◐', 'Democratic Mainstays back the longtime Democratic incumbent, while noting her 2014 ethics reproval.'],
      ['OL', 'Chu', '◐', 'Outsider Left voters are wary of a 17-year incumbent with a 2014 ethics reproval, but she is far closer to them than a Republican.'],
      ['SS', 'Chu', '○', 'Stressed Sideliners pay little attention to politics and may default to the familiar incumbent, though Verlato’s cost-of-living message speaks to them; note Chu’s 2014 ethics reproval.'],
      [
        'AR',
        'Verlato',
        '◐',
        'Ambivalent Right voters can fit Verlato’s balanced-budget and lower-tax platform and her city-level record.',
        'An experience-first Ambivalent Right voter could back Chu, who has 17 years in Congress and a Ways and Means seat; the trade is a reliably Democratic vote and accepting her 2014 House Ethics reproval.',
      ],
      ['PR', 'Verlato', '●', 'Populist Right voters favor Verlato’s border-enforcement and police-support message.'],
      ['CC', 'Verlato', '●', 'Committed Conservatives back Verlato’s balanced-budget amendment, tax pledge and smaller-government stance.'],
      ['FF', 'Verlato', '●', 'Faith and Flag Conservatives prefer the Republican who stresses law enforcement and national security.'],
    ]),
    counterArguments: [
      'EL (Chu ◐): But consider that Chu’s 2014 ethics reproval was the committee’s mildest sanction and it found she did not know of the underlying misuse; her seniority is hard to replace.',
      'CC (Verlato ●): But consider that Verlato reported almost no fundraising as of June 30 and has never held state or federal office.',
    ],
  },

  // ───────────────────────────── CA-29 ─────────────────────────────
  {
    id: 'us-rep-ca29',
    categoryId: 'federal',
    title: 'U.S. Representative, 29th District',
    tldrLabel: 'CA-29',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent (D vs D)',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES_1,
      'CA-29 covers the north-central San Fernando Valley, including San Fernando, Pacoima, Sylmar, Arleta, Panorama City and Van Nuys, with a Cook Partisan Voter Index of D+19 (Ballotpedia). With two Democrats in the runoff, the choice is how far left the member should be, not party control.',
    ],
    introParagraphs: [
      'Rivas took 51.0% in the June 2 primary; Democrat Angélica María Dueñas edged Republican Rudy Melendez for second, 24.9% to 24.0% (Statement of Vote). Dueñas, who lost this seat to Tony Cárdenas in 2020 and 2022, runs to Rivas’s left with no corporate PAC money. The runoff turns on where Republican and independent voters go.',
    ],
    readingLinks: [
      { label: 'SoS Statement of Vote — U.S. House (June 2026)', url: SOV_HOUSE, summary: 'Official certified primary results by district.' },
      { label: 'Ballotpedia — CA-29 election, 2026', url: bp('California%27s_29th_Congressional_District_election,_2026'), summary: 'Primary results and FEC totals.' },
    ],
    candidates: [
      {
        id: 'luz-rivas',
        name: 'Luz Maria Rivas',
        party: 'D',
        role: 'Congresswoman',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since January 2025 after six years in the State Assembly representing the northeast San Fernando Valley.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'State Assembly June 2018–2024 (won a 2018 special election); U.S. House since 2025 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Serves on the Natural Resources and Science, Space, and Technology committees.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Born and raised in Los Angeles; represented the area in the Assembly from 2018 and founded DIY Girls, a Pacoima STEM nonprofit.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Elected freshman class representative by House Democrats for the 119th Congress.' },
          ],
        },
        bio: [
          'An MIT-trained electrical engineer who worked at Motorola and earned a Harvard education master’s, Rivas founded DIY Girls in Pacoima and served on the city Public Works Commission. She won a 2018 Assembly special election and succeeded Tony Cárdenas in Congress in 2025.',
          'She sits on Natural Resources and Science, Space, and Technology and belongs to the Progressive and Hispanic caucuses (Wikipedia).',
        ],
        recordVsChange:
          'Rivas brings six Assembly years and was chosen freshman class representative by House Democrats. Dueñas argues the seat needs someone who rejects corporate PAC money and pushes harder on Medicare for All and Gaza; replacing Rivas would not change party control.',
        scorecard: [
          { topic: 'Housing', position: '~ In the Assembly opposed easing coastal affordable-housing rules and sought limits on church housing (Wikipedia)', comparison: 'Dueñas calls housing a right and focuses on gentrification.' },
          { topic: 'Health care', position: '? No published federal plan verified', comparison: 'Dueñas backs Medicare for All.' },
          { topic: 'Immigration', position: '? No detailed position verified', comparison: 'Dueñas wants ICE abolished and legal status for all.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive and Hispanic caucuses member', comparison: 'Dueñas is further left and was a Bernie Sanders delegate.' },
          { topic: 'District clout', position: '✓ Six Assembly years; freshman class representative', comparison: 'Dueñas has not held elected office.' },
        ],
        money: 'FEC: $670,678 raised this cycle, $377,476 cash on hand as of June 30, 2026 (via Ballotpedia).',
        endorsements: NO_ENDORSEMENTS,
      },
      {
        id: 'angelica-maria-duenas',
        name: 'Angélica María Dueñas',
        party: 'D',
        role: 'Mother/Community Organizer',
        campaignUrl: 'https://angelica4congress.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Former Sun Valley neighborhood council president with a human-resources career; has run for this seat five times without holding elected office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative office; two terms as president of the Sun Valley Area Neighborhood Council (campaign site).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of budget or committee work.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Born and raised in the East San Fernando Valley; neighborhood council leadership in Sun Valley.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation.' },
          ],
        },
        bio: [
          'Dueñas grew up in the East San Fernando Valley, holds a Cal State LA degree and a Woodbury University master’s, and has worked in human resources. She led the Sun Valley Area Neighborhood Council, coordinated Jill Stein’s 2016 campaign in Southern California and was a Sanders delegate in 2016 and 2020 (Ballotpedia).',
          'She backs Medicare for All, abolishing ICE and ending U.S. military aid to Israel.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Housing as a right; fight gentrification and homelessness', comparison: 'Rivas’s Assembly record on housing bills was mixed.' },
          { topic: 'Health care', position: '✓✓ Medicare for All, single payer', comparison: 'Rivas has no verified federal health plan.' },
          { topic: 'Immigration', position: '✓✓ Abolish ICE; legal status for all; DREAM Act citizenship', comparison: 'Rivas has no detailed published position.' },
          { topic: 'Caucus / ideology', position: '✓✓ No corporate PAC, AIPAC or Super PAC money; would never vote for weapons to Israel', comparison: 'Rivas is a Progressive Caucus member.' },
        ],
        money: 'FEC: $37,153 raised this cycle, $3,349 cash on hand as of June 30, 2026 (via Ballotpedia).',
        endorsements: NO_ENDORSEMENTS,
      },
    ],
    crossTypology: ct([
      [
        'PL',
        'Dueñas',
        '◐',
        'Progressive Left voters fit Dueñas’s Medicare for All, abolish-ICE and no-arms-to-Israel platform, though Rivas is also a Progressive Caucus member.',
        'An experience-first Progressive Left voter could back Rivas, a Progressive Caucus member with six Assembly years and a House seat; the trade is a less confrontational stance on Gaza, ICE and corporate money.',
      ],
      ['EL', 'Rivas', '●', 'Establishment Liberals value Rivas, the more experienced and institution-minded Democrat chosen as freshman class representative.'],
      ['DM', 'Rivas', '●', 'Democratic Mainstays back the Democratic incumbent with an Assembly record and party ties.'],
      ['OL', 'Dueñas', '●', 'Outsider Left voters fit Dueñas, an organizer who rejects corporate PAC money and wants deep changes to the system.'],
      ['SS', 'Rivas', '○', 'Stressed Sideliners are likely to default to the incumbent, a local engineer and nonprofit founder they may recognize.'],
      ['AR', 'Rivas', '○', 'Ambivalent Right voters, left with two Democrats, may prefer Rivas as the less far-left choice.'],
      ['PR', 'Rivas', '○', 'Populist Right voters have no Republican option; Rivas is the less far-left Democrat, though neither fits them.'],
      ['CC', 'Rivas', '◐', 'Committed Conservatives would see Rivas as less far left than a candidate who backs single payer and abolishing ICE.'],
      ['FF', 'Rivas', '○', 'Faith and Flag Conservatives may lean to Rivas over a candidate who wants ICE abolished, though neither fits them.'],
    ]),
    counterArguments: [
      'OL (Dueñas ●): But consider that Dueñas has never held elected office and reported about $3,000 cash on hand at mid-year, while Rivas already sits in the Progressive Caucus.',
      'EL (Rivas ●): But consider that Rivas has no detailed public positions on immigration or health care, and Dueñas offers voters a clearer progressive contrast.',
    ],
  },

  // ───────────────────────────── CA-31 ─────────────────────────────
  {
    id: 'us-rep-ca31',
    categoryId: 'federal',
    title: 'U.S. Representative, 31st District',
    tldrLabel: 'CA-31',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES_1,
      'CA-31 is a San Gabriel Valley district that also reaches into San Bernardino County, with a Cook Partisan Voter Index of D+8 under the Prop 50 map (Ballotpedia). Forecasters rate it Solid Democratic; Cisneros, a Navy veteran and former Pentagon official, seeks a second term here.',
    ],
    introParagraphs: [
      'Cisneros won 61.1% in the June 2 primary; Republicans Eric Ching (23.8%) and Erskine Levi (15.1%) split the rest (Statement of Vote). Ching, a longtime Walnut councilmember who twice lost to Rep. Linda Sánchez in CA-38, runs on public safety, the economy and parental rights. The race mainly tests Cisneros’s margin.',
    ],
    readingLinks: [
      { label: 'SoS Statement of Vote — U.S. House (June 2026)', url: SOV_HOUSE, summary: 'Official certified primary results by district.' },
      { label: 'Ballotpedia — CA-31 election, 2026', url: bp('California%27s_31st_Congressional_District_election,_2026'), summary: 'Primary results, Ching’s survey answers and FEC totals.' },
    ],
    candidates: [
      {
        id: 'gil-cisneros',
        name: 'Gil Cisneros',
        party: 'D',
        role: 'U.S. Congressman',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Second stint in Congress (2019–2021 and since 2025), with Senate-confirmed Pentagon leadership in between.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House for CA-39, 2019–2021, and CA-31 since January 2025 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Armed Services (Military Personnel; Intelligence and Special Operations) and Small Business, where he is ranking member of the Contracting and Infrastructure subcommittee.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Lives in Covina; has represented CA-31 since 2025 and funds college-access work in Pico Rivera.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Unanimously confirmed by the Senate as Under Secretary of Defense in 2021; member of both the New Democrat Coalition and the Progressive Caucus.' },
          ],
        },
        bio: [
          'A Navy supply officer for 11 years, Cisneros was a Frito-Lay manager before winning a $266 million lottery jackpot in 2010 and becoming a philanthropist. He represented CA-39 from 2019 to 2021, then was Under Secretary of Defense for Personnel and Readiness (2021–2023).',
          'Elected in CA-31 in 2024, he sits on Armed Services and Small Business. He was a Republican until 2008 (Wikipedia).',
        ],
        recordVsChange:
          'Cisneros brings a prior House term and Pentagon personnel leadership to Armed Services. The case for change is mainly ideological: Ching offers a more conservative vote but no state or federal experience.',
        scorecard: [
          { topic: 'Veterans & defense', position: '✓✓ Navy veteran; ex-Pentagon personnel chief; Armed Services Military Personnel subcommittee', comparison: 'Ching wants to serve on Foreign Affairs.' },
          { topic: 'Health care', position: '✓ First ran in 2018 against a member who voted to repeal the ACA', comparison: 'Ching has no published health-care position.' },
          { topic: 'Immigration', position: '? No detailed position verified', comparison: 'Ching pledged in 2022 to “secure the border.”' },
          { topic: 'Trump / House majority', position: '✓ Democratic vote; in both the New Democrat and Progressive caucuses', comparison: 'Ching would add a Republican vote.' },
        ],
        money: 'FEC: $359,157 raised this cycle and $111,660 cash on hand as of Dec 31, 2025, the latest totals shown by Ballotpedia; check FEC for newer reports.',
        endorsements: NO_ENDORSEMENTS,
      },
      {
        id: 'eric-ching',
        name: 'Eric Ching',
        party: 'R',
        role: 'Entrepreneur',
        campaignUrl: 'https://www.ericchingforcongress.com/',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'More than a decade on the Walnut City Council, including two turns as mayor, and a business owner; no state or federal legislative experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Says he served on the Walnut City Council for over a decade and twice as mayor (Ballotpedia survey). Local, not federal, lawmaking.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Says Walnut held reserves of over 200% when he left; no congressional experience.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Alhambra High School graduate; local office in Walnut. Ran in neighboring CA-38 in 2022 and 2024.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No published record of passing legislation beyond the city level.' },
          ],
        },
        bio: [
          'Ching immigrated from Taiwan in 1982 at 15, started as a dishwasher, earned a Cal State LA degree and started his own business. He says he served on the Walnut City Council for over a decade and twice as mayor; he lost to Rep. Linda Sánchez in 2022 and 2024 (Ballotpedia).',
          'He runs on community safety, the economy, parental rights and cutting “fraud, waste, and abuse.”',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓ Keep communities safe; endorsed by the LA sheriff’s deputies’ union in 2022 and 2024 (his survey)', comparison: 'Cisneros has no published public-safety plan.' },
          { topic: 'Education', position: '✓ Parental rights; schools should teach STEM “not indoctrination”', comparison: 'Cisneros funds college-access programs for Latino students.' },
          { topic: 'Immigration', position: '✓ Pledged in 2022 to “secure the border”', comparison: 'Cisneros has no detailed published position.' },
          { topic: 'Trump / House majority', position: '✓ Endorsed by the LA County and California Republican parties (his survey)', comparison: 'Cisneros is a Democratic vote.' },
        ],
        money: 'FEC: $96,570 raised this cycle, $14,302 cash on hand as of Sept 30, 2026 (via Ballotpedia).',
        endorsements: 'Self-reported: Association for Los Angeles Deputy Sheriffs (2022 and 2024), Los Angeles County and California Republican parties, American Independent Party (Ballotpedia survey).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Cisneros', '◐', 'Progressive Left voters can back Cisneros, a Progressive Caucus member, though his New Democrat ties and Republican past make him a moderate fit.'],
      ['EL', 'Cisneros', '●', 'Establishment Liberals value a Navy veteran and Senate-confirmed former Pentagon official with House experience.'],
      ['DM', 'Cisneros', '●', 'Democratic Mainstays back the Democratic incumbent who first ran to defend the Affordable Care Act.'],
      ['OL', 'Cisneros', '◐', 'Outsider Left voters may find a lottery-funded former Pentagon official establishment-minded, but he is far closer to them than Ching.'],
      ['SS', 'Cisneros', '○', 'Stressed Sideliners pay little attention to politics and may default to the familiar incumbent, a Navy veteran.'],
      [
        'AR',
        'Ching',
        '◐',
        'Ambivalent Right voters can fit Ching’s small-business, public-safety and cut-waste message from city government.',
        'An experience-first Ambivalent Right voter could back Cisneros, a Navy veteran with two House terms and Pentagon leadership who was a Republican until 2008; the trade is a Democratic vote on taxes and spending.',
      ],
      ['PR', 'Ching', '●', 'Populist Right voters favor Ching’s border-security and crime-victims message.'],
      ['CC', 'Ching', '●', 'Committed Conservatives back the Republican who wants to cut government waste and protect the economy.'],
      ['FF', 'Ching', '●', 'Faith and Flag Conservatives fit Ching, who puts “God first,” backs parental rights and opposes abortion.'],
    ]),
    counterArguments: [
      'FF (Ching ●): But consider that Ching has never held state or federal office and had about $14,000 in cash at the end of September.',
      'EL (Cisneros ●): But consider that his latest FEC totals on Ballotpedia date to December 2025 and he has published few specific positions for this race.',
    ],
  },

  // ───────────────────────────── CA-34 ─────────────────────────────
  {
    id: 'us-rep-ca34',
    categoryId: 'federal',
    title: 'U.S. Representative, 34th District',
    tldrLabel: 'CA-34',
    legalRequirements: US_REP_LEGAL,
    qualificationCriteria: US_REP_CRITERIA,
    seatContext: 'Incumbent (D vs D)',
    kind: 'candidates',
    stakesParagraphs: [
      HOUSE_STAKES_1,
      'CA-34 covers Downtown, East and Northeast Los Angeles, including Boyle Heights, Koreatown, Highland Park and Eagle Rock, with a Cook Partisan Voter Index of D+28 (Ballotpedia). Two Democrats are in the runoff, so the choice is about ideology, money in politics and the incumbent’s ethics probe.',
    ],
    introParagraphs: [
      'Gomez took 46.0% in the June 2 primary; democratic socialist Angela Gonzales-Torres, backed by Justice Democrats, was second with 30.7%, ahead of Republican Calvin Lee (13.6%) (Statement of Vote). In August the House Ethics Committee said it is investigating sexual-misconduct allegations against Gomez. A September poll for an anti-AI-industry group showed a close race.',
    ],
    polling: [
      {
        resultDisplay: 'Gonzales-Torres 41%, Gomez 38%, undecided 20%',
        pollsterCredit: 'Upswing Research & Strategy for Guardrails Alliance (sponsor poll; 403 likely voters, ±4.9%)',
        fieldDatesLabel: 'Sep 1–5, 2026',
        sourceUrl: 'https://www.semafor.com/article/09/10/2026/california-dem-faces-election-turbulence',
      },
    ],
    readingLinks: [
      { label: 'SoS Statement of Vote — U.S. House (June 2026)', url: SOV_HOUSE, summary: 'Official certified primary results by district.' },
      { label: 'NPR via OPB — Gomez under ethics investigation (Aug 17, 2026)', url: 'https://www.opb.org/article/2026/08/17/rep-jimmy-gomez-facing-investigation-for-sexual-misconduct/', summary: 'The Ethics Committee announcement, Gomez’s response and Gonzales-Torres’s reaction.' },
      { label: 'The Eastsider — Crowded field challenges Jimmy Gomez', url: 'https://www.theeastsiderla.com/news/crowded-field-challenges-jimmy-gomez-in-california-s-34th-congressional-district/article_325cf7fc-4aed-4423-b4b1-b5912e80a587.html', summary: 'Primary-season profiles, fundraising and endorsements.' },
    ],
    candidates: [
      {
        id: 'jimmy-gomez',
        name: 'Jimmy Gomez',
        party: 'D',
        role: 'U.S. Representative/Parent',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'In Congress since 2017 after five years in the State Assembly; sits on Ways and Means and the Intelligence Committee.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'State Assembly 2012–2017, including Majority Whip 2013–2014; U.S. House since a June 2017 special election (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Ways and Means (Tax; Work and Welfare; Health Care and Financial Services subcommittees) and Intelligence, where he is ranking member of the CIA subcommittee.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Eagle Rock resident; has represented the district since 2017.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Deputy whip of the Progressive Caucus; founded and chairs the Congressional Dads and Renters caucuses (The Eastsider).' },
          ],
        },
        bio: [
          'The son of immigrant parents, Gomez went from Riverside Community College to UCLA and a Harvard Kennedy School master’s, worked for Rep. Hilda Solis and as a labor organizer, and served in the Assembly from 2012 until winning this seat in 2017.',
          'He sits on Ways and Means and Intelligence and is a Progressive Caucus deputy whip; he has also had AIPAC and crypto-industry backing (Wikipedia).',
        ],
        recordVsChange:
          'Gomez brings nine years of seniority and a Ways and Means seat. The case for change is his ethics investigation, his backing from AIPAC, crypto and AI-industry PACs, and Gonzales-Torres’s argument for a member who refuses corporate money.',
        scorecard: [
          { topic: 'Housing', position: '✓ Founded and chairs the Congressional Renters Caucus', comparison: 'Gonzales-Torres wants guaranteed housing vouchers and community land trusts.' },
          { topic: 'Climate', position: '✓ League of Conservation Voters: 91% in 2025, 97% lifetime', comparison: 'Gonzales-Torres backs a Green New Deal and a data-center moratorium.' },
          { topic: 'Money in politics', position: '~ Backed by AIPAC, the crypto PAC Fairshake and the AI-industry PAC Leading the Future (Wikipedia)', comparison: 'Gonzales-Torres refuses corporate and super PAC money.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive Caucus deputy whip; endorsed by Rep. Alexandria Ocasio-Cortez (The Eastsider)', comparison: 'Gonzales-Torres is a democratic socialist backed by Justice Democrats.' },
          { topic: 'District clout', position: '✓✓ Ways and Means and Intelligence seats', comparison: 'Gonzales-Torres would be a first-term member.' },
        ],
        money: 'FEC: $1,175,128 raised this cycle, $781,726 cash on hand as of June 30, 2026 (via Ballotpedia).',
        endorsements: 'California Democratic Party (Feb 2026 convention, per The Eastsider, Mar 2, 2026); Rep. Alexandria Ocasio-Cortez (The Eastsider, spring 2026).',
        redFlags: [
          {
            severity: 'serious',
            status: 'under-investigation',
            text: 'On Aug 17, 2026 the House Ethics Committee announced it is investigating allegations that Gomez engaged in sexual misconduct, including “inappropriate sexual contact with a House staffer.” Gomez says his conduct was consensual and did not violate the law or House rules, takes responsibility for hurting people he cares about, and noted that an inquiry is not a finding.',
            whyItMatters: 'Conduct toward House staff is governed by the House code of conduct, and an open inquiry could lead to sanctions during his next term.',
            sources: [
              { label: 'NPR via OPB (Aug 17, 2026)', url: 'https://www.opb.org/article/2026/08/17/rep-jimmy-gomez-facing-investigation-for-sexual-misconduct/' },
            ],
          },
        ],
      },
      {
        id: 'angela-gonzales-torres',
        name: 'Angela Gonzales-Torres',
        party: 'D',
        role: 'Advocate For Justice',
        campaignUrl: 'https://www.angela4congress.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Community advocate, former neighborhood council president and former mayor’s office staffer; no elected legislative office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative office; former president of the Historic Highland Park Neighborhood Council (The Eastsider).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Worked in the Los Angeles Mayor’s Office and was a regional representative on Metro’s Public Safety Advisory Committee (campaign site).' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Born and raised in Highland Park; neighborhood council and community advocacy there.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation.' },
          ],
        },
        bio: [
          'Gonzales-Torres was born and raised in Highland Park, the daughter of a deportee, and now works helping people leaving prison enter universities. She led the Historic Highland Park Neighborhood Council and worked in the Los Angeles Mayor’s Office (campaign site).',
          'A democratic socialist backed by Justice Democrats, she backs Medicare for All, abolishing ICE and a wealth tax, and refuses corporate PAC money.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓✓ Guaranteed housing vouchers, community land trusts, permanently affordable housing', comparison: 'Gomez chairs the Congressional Renters Caucus.' },
          { topic: 'Climate', position: '✓✓ Green New Deal, climate emergency declaration, data-center moratorium', comparison: 'Gomez has strong League of Conservation Voters scores.' },
          { topic: 'Immigration', position: '✓✓ Abolish ICE; pathway to citizenship', comparison: 'Gomez has no published position on abolishing ICE.' },
          { topic: 'Money in politics', position: '✓✓ Refuses corporate and super PAC money; would abolish super PACs', comparison: 'Gomez has had AIPAC, crypto and AI-industry PAC backing.' },
          { topic: 'Caucus / ideology', position: '✓✓ Democratic socialist; Medicare for All; wealth tax', comparison: 'Gomez is a Progressive Caucus deputy whip.' },
        ],
        money: 'FEC: $228,724 raised this cycle, $44,070 cash on hand as of June 30, 2026 (via Ballotpedia).',
        endorsements: 'Justice Democrats (The Eastsider, spring 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Gonzales-Torres', '●', 'Progressive Left voters fit Gonzales-Torres, the Justice Democrats-backed socialist who backs Medicare for All, abolishing ICE and refusing corporate PAC money.'],
      ['EL', 'Gomez', '◐', 'Establishment Liberals value Gomez’s Ways and Means seniority and party endorsement, weighed against the open House Ethics investigation.'],
      ['DM', 'Gomez', '◐', 'Democratic Mainstays back the party-endorsed incumbent, though the ethics investigation gives some pause.'],
      ['OL', 'Gonzales-Torres', '●', 'Outsider Left voters fit the grassroots challenger running against corporate, AIPAC and AI-industry money.'],
      [
        'SS',
        'Gonzales-Torres',
        '○',
        'Stressed Sideliners worried about rent and costs may respond to Gonzales-Torres’s focus on housing and economic security and to the incumbent’s ethics probe.',
        'An experience-first Stressed Sideliner could back Gomez, who has nine years in Congress and a Ways and Means seat; the trade is accepting an open House Ethics sexual-misconduct investigation.',
      ],
      ['AR', 'Gomez', '○', 'Ambivalent Right voters, with no Republican on the ballot, may prefer Gomez as the less far-left Democrat with pro-business crypto votes.'],
      ['PR', 'Gomez', '○', 'Populist Right voters have no Republican option; Gomez is less far left than a candidate who wants ICE abolished, despite his ethics probe.'],
      ['CC', 'Gomez', '◐', 'Committed Conservatives would see Gomez as the more market-friendly choice next to a democratic socialist backing a wealth tax.'],
      ['FF', 'Gomez', '○', 'Faith and Flag Conservatives may lean to Gomez, who backs military aid to Israel, though his ethics probe weighs against him.'],
    ]),
    counterArguments: [
      'EL (Gomez ◐): But consider that Gomez is under an open House Ethics investigation into sexual misconduct with a staffer; he says his conduct was consensual, but sanctions are possible.',
      'PL (Gonzales-Torres ●): But consider that she has never held elected office, and Gomez is already a Progressive Caucus deputy whip endorsed by Rep. Ocasio-Cortez.',
    ],
  },

  // ───────────────────────────── SD-22 ─────────────────────────────
  {
    id: 'senate-sd22',
    categoryId: 'state-leg',
    title: 'State Senate, District 22',
    tldrLabel: 'SD-22',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: SENATE_CRITERIA('SD-22 covers San Gabriel Valley cities such as Baldwin Park, West Covina and El Monte and reaches into San Bernardino County.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      SENATE_STAKES_1,
      'SD-22 is a San Gabriel Valley district that also takes in part of San Bernardino County. Rubio, first elected in 2018, is seeking a final term; insurance costs, utility bills and domestic-violence law have been her focus, while Netter campaigns on taxes and corruption.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic incumbent Susan Rubio took 62.3%, Republican Mike Netter 34.6% and R. R. Jimenez (no party) 3.1% (Statement of Vote). The race turns on whether Netter, one of the organizers who launched the 2021 Newsom recall, can draw votes beyond the district’s Republican base.',
    ],
    readingLinks: [
      { label: 'SoS Statement of Vote — State Senate (June 2026)', url: SOV_SENATE, summary: 'Official certified primary results by district.' },
      { label: 'California Globe — Netter interview (June 27, 2026; conservative outlet)', url: 'https://californiaglobe.com/fr/state-senate-candidate-mike-netter-its-time-to-undo-a-lot-of-bad-laws/', summary: 'Netter’s plans for tax cuts, repealing laws and disaster preparedness.' },
    ],
    candidates: [
      {
        id: 'susan-rubio',
        name: 'Susan Rubio',
        party: 'D',
        role: 'State Senator/Teacher',
        campaignUrl: 'https://sd22.senate.ca.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'State senator since 2018 and a former Senate Insurance Committee chair, after 13 years in Baldwin Park city office and two decades as a teacher.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'Senator since Dec 2018; authored SB 273 (Phoenix Act, signed) and SB 1141 on coercive control as evidence (Wikipedia).' },
            { criterionId: 'budget-oversight', assessment: 'met', evidence: 'Former chair of the Senate Insurance Committee; serves on Energy, Utilities and Communications, Health and Governmental Organization (official bio).' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Baldwin Park city clerk from 2005 and councilmember from 2009 (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented SD-22 since 2018; chairs the San Gabriel Valley Caucus and credits herself with creating the San Gabriel Valley Regional Housing Trust.' },
          ],
        },
        bio: [
          'Born in Ciudad Juárez and raised in Los Angeles, Rubio taught for about two decades in the Baldwin Park and Monrovia districts and served 13 years as an elected Baldwin Park official before winning this seat in 2018.',
          'She chairs the San Gabriel Valley Caucus and formerly chaired the Insurance Committee; her signed bills include SB 273, extending time limits for domestic-violence cases (Wikipedia; official bio).',
        ],
        recordVsChange:
          'Rubio brings eight years of seniority, a former committee chair post and a record on domestic-violence law. The case for change centers on the unresolved 2024 questions about the Baldwin Park plea agreement, which she denies, and Netter’s tax-cut agenda.',
        scorecard: [
          { topic: 'Public safety', position: '✓✓ SB 273 (Phoenix Act, signed) on domestic-violence cases; SB 1141 on coercive control', comparison: 'Netter says existing laws should be enforced, not new ones passed.' },
          { topic: 'Housing & transit', position: '✓ Credits herself with creating the San Gabriel Valley Regional Housing Trust', comparison: 'Netter would target state money to vacant business corridors.' },
          { topic: 'Taxes', position: '? No specific tax position verified', comparison: 'Netter wants a 28% income-tax cut for people earning $150,000 or less.' },
          { topic: 'Insurance & utilities', position: '✓ Former Insurance Committee chair; sits on Energy and Utilities', comparison: 'Netter says San Gabriel Valley power bills are up 50–70% since COVID.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat; Latino, Jewish and Women’s caucuses', comparison: 'Netter aims to break the Democratic supermajority.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSEMENTS,
        redFlags: [
          {
            severity: 'notable',
            status: 'alleged',
            text: 'A federal plea agreement unsealed in December 2024 by former Baldwin Park city attorney Robert Tafoya described an unnamed Baldwin Park official running for state office in 2018 who allegedly sought cash funneled into a campaign. The Los Angeles Times reported Rubio was the only official who fit the description. She has not been named or charged; her spokesperson said federal officials told her she is not a target and that Tafoya made allegations against many people to reduce his sentence.',
            whyItMatters: 'Senators write the state’s ethics and campaign-finance laws, so unresolved questions about campaign money are relevant, though no charge or finding exists.',
            sources: [{ label: 'Los Angeles Times via AOL (Dec 12, 2024)', url: 'https://www.aol.com/news/california-lawmaker-questioned-sprawling-cannabis-222044791.html' }],
          },
        ],
      },
      {
        id: 'mike-netter',
        name: 'Mike Netter',
        party: 'R',
        role: 'Small Business Owner',
        campaignUrl: 'https://netter.vote/home',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Business owner and political organizer who helped launch the 2021 Newsom recall; no elected office.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'not-met', evidence: 'No legislative or policy office; co-led the petition drive behind the 2021 recall (Los Angeles Times, 2021).' },
            { criterionId: 'budget-oversight', assessment: 'unknown', evidence: 'No public record of budget or committee work.' },
            { criterionId: 'public-mgmt', assessment: 'not-met', evidence: 'Career as an office-supply purchasing executive and later real estate (Los Angeles Times, 2021); no public agency role.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Lives in the San Gabriel Valley and says he is running because the district is home (California Globe).' },
          ],
        },
        bio: [
          'Netter, a San Diego State graduate, spent a long career as an office-supply purchasing executive before moving into real estate. He was one of three organizers credited with sparking the 2021 Newsom recall and has emceed a KABC radio show (Los Angeles Times, 2021).',
          'He wants to cut income taxes 28% for people earning $150,000 or less, repeal laws he calls burdensome to small business and focus the state on disaster preparedness (California Globe, June 2026).',
        ],
        scorecard: [
          { topic: 'Taxes', position: '✓✓ 28% income-tax cut for earners at $150,000 or less', comparison: 'Rubio has no verified tax position.' },
          { topic: 'Public safety', position: '✓ Enforce existing laws; tougher on retail theft', comparison: 'Rubio’s record centers on domestic-violence law.' },
          { topic: 'Housing & transit', position: '? No housing plan published', comparison: 'Rubio backs the regional housing trust.' },
          { topic: 'Elections', position: '✗ Questions online voter registration; says there is no proof rolls are legitimate', comparison: 'Rubio has not proposed changes to voter registration.' },
          { topic: 'Caucus / ideology', position: '✓ Wants to break the Democratic supermajority', comparison: 'Rubio is a Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSEMENTS,
        redFlags: [
          {
            severity: 'notable',
            status: 'documented',
            text: 'The Los Angeles Times reported in 2021 that public records showed a $125,000 IRS lien filed against Netter in 2017 and a separate state action to recover $32,000 in back taxes. Netter said he was behind on his taxes, tied it to taxes on an insurance settlement after he lost his home in the 2007 San Diego County fires, and said he was paying in installments.',
            whyItMatters: 'Senators write tax law and the state budget, so a candidate’s own unpaid taxes are relevant context.',
            sources: [{ label: 'Los Angeles Times via Yahoo (May 1, 2021)', url: 'https://www.yahoo.com/news/three-political-novices-turbulent-pasts-120040334.html' }],
          },
        ],
        notes: ['The Los Angeles Times reported in 2021 that Netter had reposted false claims that the 2020 election was stolen.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Rubio', '◐', 'Progressive Left voters back the Democrat with a domestic-violence record, though she is not a leading progressive voice and faces unresolved questions from the Baldwin Park case.'],
      ['EL', 'Rubio', '●', 'Establishment Liberals value Rubio’s seniority, former committee chair post and signed bills.'],
      ['DM', 'Rubio', '●', 'Democratic Mainstays back the Democratic incumbent and teacher with deep San Gabriel Valley roots.'],
      ['OL', 'Rubio', '◐', 'Outsider Left voters are cool to a longtime officeholder, but she is far closer to them than a recall organizer who wants to repeal state laws.'],
      ['SS', 'Rubio', '○', 'Stressed Sideliners pay little attention to politics and may default to the familiar incumbent, though Netter’s utility-bill and tax-cut pitch targets their costs.'],
      [
        'AR',
        'Netter',
        '◐',
        'Ambivalent Right voters can fit Netter’s middle-class tax cut and small-business focus, though his recall activism is more confrontational than they prefer.',
        'An experience-first Ambivalent Right voter could back Rubio, who has eight Senate years and chaired the Insurance Committee; the trade is a Democratic vote on taxes and the unresolved Baldwin Park questions.',
      ],
      ['PR', 'Netter', '●', 'Populist Right voters fit the Newsom recall organizer running against “career politicians” and corruption.'],
      ['CC', 'Netter', '●', 'Committed Conservatives back Netter’s income-tax cut and push to repeal regulations on small business.'],
      ['FF', 'Netter', '●', 'Faith and Flag Conservatives prefer the Republican seeking to break the Democratic supermajority.'],
    ]),
    counterArguments: [
      'EL (Rubio ●): But consider the 2024 Baldwin Park plea agreement that described an official matching Rubio’s profile; she denies wrongdoing, has not been charged and says she was told she is not a target.',
      'PR (Netter ●): But consider that Netter has never held office, carried large unpaid tax debts as of 2021, and reposted false 2020 election claims.',
    ],
  },

  // ───────────────────────────── SD-28 ─────────────────────────────
  {
    id: 'senate-sd28',
    categoryId: 'state-leg',
    title: 'State Senate, District 28',
    tldrLabel: 'SD-28',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: SENATE_CRITERIA('SD-28 is a Los Angeles County district; its senator’s district projects center on South Los Angeles.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      SENATE_STAKES_1,
      'SD-28 is a Los Angeles County district where Smallwood-Cuevas’s district projects center on South LA. She chairs the Senate Labor, Public Employment and Retirement Committee, which handles wage, workplace and public-pension bills, and sits on Budget; her reelection keeps that post in labor-aligned hands.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic incumbent Lola Smallwood-Cuevas won 77.5%, Republican Joe Lisuzzo 16.2% and Daphne Bradford (no party) 6.3% (Statement of Vote). Lisuzzo, a neighborhood councilmember, also ran for this seat in 2022. The general mainly measures support for Smallwood-Cuevas’s labor-focused record.',
    ],
    readingLinks: [
      { label: 'SoS Statement of Vote — State Senate (June 2026)', url: SOV_SENATE, summary: 'Official certified primary results by district.' },
      { label: 'Ballotpedia — Joe Lisuzzo', url: bp('Joe_Lisuzzo'), summary: 'Lisuzzo’s prior races and 2021 candidate survey.' },
    ],
    candidates: [
      {
        id: 'lola-smallwood-cuevas',
        name: 'Lola Smallwood-Cuevas',
        party: 'D',
        role: 'State Senator',
        campaignUrl: 'https://sd28.senate.ca.gov/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'State senator since 2022 and chair of the Labor, Public Employment and Retirement Committee, after nearly two decades at the UCLA Labor Center.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'Senator since 2022; authored SB 497 (2023) on retaliation against workers who report wage theft and SB 627 (2023) on notice before large chain-store closures (official bio).' },
            { criterionId: 'budget-oversight', assessment: 'met', evidence: 'Chairs Labor, Public Employment and Retirement; sits on Budget and Fiscal Review and Budget Subcommittee 4 (official bio).' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'UCLA Labor Center 2004–2022, including 15 years as project director; founded the Los Angeles Black Worker Center (Wikipedia); treasurer of the LA County Workforce Development Board.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented SD-28 since 2022; carried SB 572 (2024) to allow sale of surplus state property in South LA for housing.' },
          ],
        },
        bio: [
          'A former journalist and Justice for Janitors organizer, Smallwood-Cuevas worked at the UCLA Labor Center from 2004 to 2022 and founded the Los Angeles Black Worker Center. She won this seat in 2022 over Cheryl Turner (Wikipedia).',
          'She chairs the Senate Labor, Public Employment and Retirement Committee and sits on Budget (official bio).',
        ],
        recordVsChange:
          'Smallwood-Cuevas holds a committee chair and budget seat after one term and has carried several worker-protection bills. Replacing her would lose that seniority; Lisuzzo offers a business-owner perspective but no legislative record.',
        scorecard: [
          { topic: 'Labor & jobs', position: '✓✓ SB 497 on wage-theft retaliation; SB 627 on store-closure notice; chairs Labor committee', comparison: 'Lisuzzo stresses reviving small businesses and stopping business flight.' },
          { topic: 'Housing & transit', position: '✓ SB 572 on surplus state land in South LA for housing', comparison: 'Lisuzzo calls homelessness a crisis needing urgent action.' },
          { topic: 'Public safety', position: '? No specific position verified', comparison: 'Lisuzzo has not published a public-safety plan.' },
          { topic: 'Taxes', position: '? No specific position verified', comparison: 'Lisuzzo lists taxes among issues to fix but gives no plan.' },
          { topic: 'Caucus / ideology', position: '✓ Labor-aligned Democrat', comparison: 'Lisuzzo is a Republican who says he would work with all colleagues.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSEMENTS,
      },
      {
        id: 'joe-lisuzzo',
        name: 'Joe Lisuzzo',
        party: 'R',
        role: 'LA Neighborhood Councilmember',
        campaignUrl: 'https://www.joelisuzzo.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Longtime food-service business owner and neighborhood councilmember; no legislative or agency experience.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'not-met', evidence: 'No legislative office; neighborhood councilmember per his ballot designation.' },
            { criterionId: 'budget-oversight', assessment: 'unknown', evidence: 'No public record of budget or committee work.' },
            { criterionId: 'public-mgmt', assessment: 'not-met', evidence: 'About 30 years in the Los Angeles food-service industry as owner and operator (2021 Ballotpedia survey); no public agency role.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Los Angeles neighborhood councilmember; ran for SD-30 in 2021 and SD-28 in 2022 (Ballotpedia).' },
          ],
        },
        bio: [
          'Born in Chicago, Lisuzzo earned degrees from Cal State Northridge and UCLA and spent about 30 years as a business owner in Los Angeles’s food-service industry. He lost primaries for SD-30 in 2021 and SD-28 in 2022 (Ballotpedia).',
          'In a 2021 survey he named small business, homelessness and family support as priorities.',
        ],
        scorecard: [
          { topic: 'Labor & jobs', position: '✓ Revive small businesses and stop business flight (2021 survey)', comparison: 'Smallwood-Cuevas focuses on worker protections.' },
          { topic: 'Housing & transit', position: '~ Homelessness must be handled “compassionately” and quickly; no specific plan', comparison: 'Smallwood-Cuevas carried a surplus-land housing bill.' },
          { topic: 'Public safety', position: '? No published position', comparison: 'Smallwood-Cuevas has no verified position.' },
          { topic: 'Caucus / ideology', position: '~ Republican who pledges to work with all colleagues', comparison: 'Smallwood-Cuevas is a labor-aligned Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSEMENTS,
      },
    ],
    crossTypology: ct([
      ['PL', 'Smallwood-Cuevas', '●', 'Progressive Left voters fit a labor organizer who carries worker-protection bills and chairs the Labor committee.'],
      ['EL', 'Smallwood-Cuevas', '●', 'Establishment Liberals value her committee chair and budget seat after one term.'],
      ['DM', 'Smallwood-Cuevas', '●', 'Democratic Mainstays back the Democratic incumbent focused on jobs and workers.'],
      ['OL', 'Smallwood-Cuevas', '●', 'Outsider Left voters fit a Black Worker Center founder who came from community organizing.'],
      ['SS', 'Smallwood-Cuevas', '○', 'Stressed Sideliners worried about jobs may default to the incumbent known for worker protections.'],
      [
        'AR',
        'Lisuzzo',
        '◐',
        'Ambivalent Right voters can fit Lisuzzo’s small-business focus and his pledge to work across party lines.',
        'An experience-first Ambivalent Right voter could back Smallwood-Cuevas, who chairs a committee and sits on Budget; the trade is a labor-aligned Democratic vote on business regulation.',
      ],
      ['PR', 'Lisuzzo', '●', 'Populist Right voters prefer the Republican outsider who says he serves people, “not politics.”'],
      ['CC', 'Lisuzzo', '●', 'Committed Conservatives back the Republican business owner concerned about business flight.'],
      ['FF', 'Lisuzzo', '●', 'Faith and Flag Conservatives prefer the Republican who stresses family as “the nucleus of society.”'],
    ]),
    counterArguments: [
      'CC (Lisuzzo ●): But consider that Lisuzzo has no legislative record, and his most detailed public platform dates to a 2021 survey.',
      'EL (Smallwood-Cuevas ●): But consider that business groups may see her labor bills as adding costs for employers in the district.',
    ],
  },

  // ───────────────────────────── AD-39 ─────────────────────────────
  {
    id: 'assembly-ad39',
    categoryId: 'state-leg',
    title: 'State Assembly, District 39',
    tldrLabel: 'AD-39',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-39 spans the Antelope Valley (Palmdale, Lancaster, Lake Los Angeles) and the San Bernardino County High Desert (Adelanto, Hesperia, Victorville).'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'AD-39 spans the Antelope Valley, including Palmdale, Lancaster and Lake Los Angeles, and the High Desert in San Bernardino County, including Adelanto, Hesperia and Victorville. Carrillo, a former city planner, chairs the Local Government Committee, which handles bills on cities, counties and land use.',
    ],
    introParagraphs: [
      'This is the third Carrillo–Marsh contest. In the June 2 primary, Democratic incumbent Juan Carrillo took 62.3% and Republican Paul Andre Marsh 37.7% (Statement of Vote). Carrillo beat Marsh with 57.7% in 2024. Carrillo’s 2024 general-election share was lower than his 2026 primary share, so November may be closer.',
    ],
    readingLinks: [
      { label: 'SoS Statement of Vote — State Assembly (June 2026)', url: SOV_ASSEMBLY, summary: 'Official certified primary results by district.' },
      { label: 'Ballotpedia — AD-39', url: bp('California_State_Assembly_District_39'), summary: 'Past results for Carrillo and Marsh.' },
    ],
    candidates: [
      {
        id: 'juan-carrillo',
        name: 'Juan Carrillo',
        party: 'D',
        role: 'State Assemblymember',
        campaignUrl: 'https://a39.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assemblymember since 2022 and Local Government Committee chair, after the Palmdale City Council and 15 years as a city planner.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Elected to the Assembly in 2022 and re-elected in 2024 (official bio).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs the Local Government Committee; also on Governmental Organization, Health, Military and Veterans Affairs, Revenue and Taxation, and Transportation (Ballotpedia, 2025–26).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Former Palmdale councilmember and Palmdale city planner for 10 years; lives in east Palmdale.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Committee chair in the majority party; no specific signed bills verified for this guide.' },
          ],
        },
        bio: [
          'Born in Guadalajara, Carrillo immigrated at 15 and earned degrees from College of the Desert, Cal Poly Pomona and CSUN. He was a city planner for 15 years, 10 with Palmdale, and served on the Palmdale City Council (official bio).',
          'Elected in 2022 and 2024, both times over Marsh, he chairs the Local Government Committee.',
        ],
        recordVsChange:
          'Carrillo’s planning background and Local Government chair fit a fast-growing desert district. Marsh argues for a Republican voice on spending and policing; replacing Carrillo would lose a committee chair.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Former city planner; backed affordable housing on Palmdale council', comparison: 'Marsh has not published a housing plan.' },
          { topic: 'Public safety', position: '? No specific position verified', comparison: 'Marsh wants more resources for law enforcement.' },
          { topic: 'Taxes', position: '~ Sits on Revenue and Taxation; no specific position verified', comparison: 'Marsh stresses eliminating waste in government spending.' },
          { topic: 'Education', position: '? No specific position verified', comparison: 'Marsh emphasizes parents’ rights and “traditional values.”' },
          { topic: 'Caucus / ideology', position: '✓ Democrat; chairs Local Government', comparison: 'Marsh is a Republican and U.S. Army veteran.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSEMENTS,
      },
      {
        id: 'paul-andre-marsh',
        name: 'Paul Andre Marsh',
        party: 'R',
        role: 'Community Services Liaison',
        campaignUrl: 'https://www.paulmarshforassembly39.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Army veteran and community services liaison who has run for this seat three times; no elected office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative office; lost to Carrillo in 2022 and 2024 (Ballotpedia).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of budget or committee work.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'High Desert resident; works as a community services liaison (ballot designation; campaign site).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation.' },
          ],
        },
        bio: [
          'Marsh is a U.S. Army veteran and High Desert resident whose ballot designation is community services liaison. He ran against Carrillo in 2022 and 2024 (Ballotpedia).',
          'He campaigns on transparency and cutting waste, parents’ rights and “traditional values,” and more resources for law enforcement (campaign site).',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓ More resources for law enforcement', comparison: 'Carrillo has no verified position.' },
          { topic: 'Taxes', position: '✓ Transparency and eliminating waste in spending', comparison: 'Carrillo sits on Revenue and Taxation.' },
          { topic: 'Education', position: '✓ Parents’ rights and “traditional values”', comparison: 'Carrillo has no verified position.' },
          { topic: 'Caucus / ideology', position: '✓ Republican', comparison: 'Carrillo is a Democratic committee chair.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSEMENTS,
      },
    ],
    crossTypology: ct([
      ['PL', 'Carrillo', '◐', 'Progressive Left voters back the Democrat, though Carrillo is a pragmatic local-government lawmaker rather than a progressive leader.'],
      ['EL', 'Carrillo', '●', 'Establishment Liberals value a former city planner who chairs the Local Government Committee.'],
      ['DM', 'Carrillo', '●', 'Democratic Mainstays back the Democratic incumbent and immigrant success story.'],
      ['OL', 'Carrillo', '◐', 'Outsider Left voters are cool to establishment figures, but Carrillo is far closer to them than Marsh.'],
      ['SS', 'Carrillo', '○', 'Stressed Sideliners may default to the incumbent known locally from Palmdale City Hall.'],
      [
        'AR',
        'Marsh',
        '◐',
        'Ambivalent Right voters can fit Marsh’s focus on cutting waste and supporting police.',
        'An experience-first Ambivalent Right voter could back Carrillo, a former city planner who chairs Local Government; the trade is a Democratic vote on taxes and spending.',
      ],
      ['PR', 'Marsh', '●', 'Populist Right voters prefer the Army veteran pledging to put government “back in the hands of the people.”'],
      ['CC', 'Marsh', '●', 'Committed Conservatives back the Republican focused on spending discipline.'],
      ['FF', 'Marsh', '●', 'Faith and Flag Conservatives fit Marsh’s emphasis on parents’ rights and traditional values.'],
    ]),
    counterArguments: [
      'PR (Marsh ●): But consider that Marsh has lost this race twice and has no record in office.',
      'EL (Carrillo ●): But consider that few of Carrillo’s specific bills or votes are documented in this guide, so voters may want to check his record directly.',
    ],
  },

  // ───────────────────────────── AD-40 ─────────────────────────────
  {
    id: 'assembly-ad40',
    categoryId: 'state-leg',
    title: 'State Assembly, District 40',
    tldrLabel: 'AD-40',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-40 covers the Santa Clarita Valley, Castaic, Val Verde and the northwest San Fernando Valley.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'AD-40 covers the Santa Clarita Valley, Castaic, Val Verde and the northwest San Fernando Valley. It is one of the closer Assembly seats in Los Angeles County: Schiavo won it by 522 votes in 2022 and with 52.8% in 2024.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic incumbent Pilar Schiavo took 55.6%, Republican Rickey Tracy Hayes II 22.3%, and Republicans Elizabeth Wong Ahlers (14.0%) and Andreas Farmakalidis (8.1%) trailed (Statement of Vote). Republicans combined for 44%. The race turns on whether Hayes can consolidate that vote on energy costs and public safety.',
    ],
    readingLinks: [
      { label: 'SoS Statement of Vote — State Assembly (June 2026)', url: SOV_ASSEMBLY, summary: 'Official certified primary results by district.' },
      { label: 'Ballotpedia — Rickey Hayes II', url: bp('Rickey_Hayes_II'), summary: 'Hayes’s candidate survey, priorities and endorsements.' },
    ],
    candidates: [
      {
        id: 'pilar-schiavo',
        name: 'Pilar Schiavo',
        party: 'D',
        role: 'Assemblymember',
        campaignUrl: 'https://a40.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assemblymember since 2022 who chairs the Military and Veterans Affairs Committee and sits on Budget; earlier a nurse advocate and labor organizer.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Elected in 2022 and re-elected in 2024; appointed Assistant Majority Whip (official bio).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs Military and Veterans Affairs; also on Budget, Banking and Finance, Health, and Utilities and Energy (Ballotpedia, 2025–26).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Says her office secured $111 million in district investments and nearly $4 million for constituents through casework (official bio).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Assistant Majority Whip; specific signed bills not verified for this guide.' },
          ],
        },
        bio: [
          'Before her election, Schiavo was a nurse advocate and small business owner who worked in the labor movement for more than 20 years. She unseated Republican Suzette Valladares by 522 votes in 2022 (Wikipedia).',
          'She was named Assistant Majority Whip and now chairs Military and Veterans Affairs; her office reports $111 million in district investments (official bio).',
        ],
        recordVsChange:
          'Schiavo holds a committee chair and a Budget seat and reports large district investments. Hayes argues for a Republican voice on energy costs and crime; replacing her would cost the district a chair.',
        scorecard: [
          { topic: 'Housing & transit', position: '? No specific position verified', comparison: 'Hayes wants more housing built and local control of zoning.' },
          { topic: 'Energy costs', position: '~ Sits on Utilities and Energy; no specific bill verified', comparison: 'Hayes wants lower taxes and fees on gas and utility bills.' },
          { topic: 'Public safety', position: '? No specific position verified', comparison: 'Hayes wants Prop 47 rolled back and Prop 36 enforced.' },
          { topic: 'Health care', position: '✓ Former nurse advocate; sits on Health', comparison: 'Hayes has not published a health-care position.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat; Assistant Majority Whip', comparison: 'Hayes is a Republican endorsed by Reform California.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSEMENTS,
      },
      {
        id: 'rickey-hayes',
        name: 'Rickey Tracy Hayes II',
        party: 'R',
        role: 'Lineman/Entrepreneur/Businessman',
        campaignUrl: 'https://rickeyhayesforassembly.com/',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Marine veteran, former police officer and energy-grid lineman and executive; no elected office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative office.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of budget or committee work.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Santa Clarita Valley resident for more than a decade (campaign site).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation; lists endorsements from Republicans and IBEW Local 18 (Ballotpedia survey).' },
          ],
        },
        bio: [
          'Hayes is a Marine Corps veteran, former custody and police officer, and IBEW journeyman lineman turned energy executive who has lived in the Santa Clarita Valley for over a decade (campaign site).',
          'He campaigns on lowering gas and utility costs, building more housing with local zoning control, and rolling back Prop 47.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Build more housing; restore local control of zoning', comparison: 'Schiavo has no verified housing position.' },
          { topic: 'Energy costs', position: '✓✓ Cut taxes and fees on gas and utility bills; grid expertise', comparison: 'Schiavo sits on Utilities and Energy.' },
          { topic: 'Public safety', position: '✓✓ Roll back Prop 47, uphold Prop 36, make theft and hard-drug use crimes', comparison: 'Schiavo has no verified position.' },
          { topic: 'Caucus / ideology', position: '✓ Republican; endorsed by Reform California and Sen. Suzette Valladares', comparison: 'Schiavo is Assistant Majority Whip.' },
        ],
        money: CAL_ACCESS,
        endorsements:
          'Self-reported: Reform California, Sen. Suzette Valladares, LA County Supervisor Kathryn Barger, LA City Councilmember John Lee, IBEW Local 18, Santa Clarita Councilmember Jason Gibbs (Ballotpedia survey, 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Schiavo', '●', 'Progressive Left voters fit a former nurse advocate and labor organizer.'],
      ['EL', 'Schiavo', '●', 'Establishment Liberals value Schiavo’s committee chair, Budget seat and reported district investments.'],
      ['DM', 'Schiavo', '●', 'Democratic Mainstays back the Democrat holding a competitive seat for the party.'],
      ['OL', 'Schiavo', '◐', 'Outsider Left voters may see a whip as part of leadership, but Schiavo’s labor roots fit them far better than Hayes.'],
      ['SS', 'Schiavo', '○', 'Stressed Sideliners may default to the incumbent, though Hayes’s energy-bill message speaks to their costs.'],
      [
        'AR',
        'Hayes',
        '◐',
        'Ambivalent Right voters can fit Hayes’s practical focus on energy bills, housing supply and police experience.',
        'An experience-first Ambivalent Right voter could back Schiavo, who chairs a committee and sits on Budget; the trade is a Democratic vote on taxes and crime policy.',
      ],
      ['PR', 'Hayes', '●', 'Populist Right voters favor Hayes’s push to roll back Prop 47 and cut gas and utility costs.'],
      ['CC', 'Hayes', '●', 'Committed Conservatives back the Republican who wants lower taxes and fees and local control of zoning.'],
      ['FF', 'Hayes', '●', 'Faith and Flag Conservatives fit the Marine veteran and former police officer running on law enforcement.'],
    ]),
    counterArguments: [
      'PR (Hayes ●): But consider that Hayes has never held office, while Schiavo chairs a committee and sits on Budget.',
      'EL (Schiavo ●): But consider that her specific bills on energy costs and public safety are not documented here, and the district is closely divided.',
    ],
  },

  // ───────────────────────────── AD-41 ─────────────────────────────
  {
    id: 'assembly-ad41',
    categoryId: 'state-leg',
    title: 'State Assembly, District 41',
    tldrLabel: 'AD-41',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-41 runs from Pasadena, La Cañada Flintridge and Sierra Madre east through Monrovia, San Dimas, La Verne and Claremont into parts of San Bernardino County.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'AD-41 runs from Pasadena, La Cañada Flintridge and Sierra Madre east through Monrovia, San Dimas, La Verne and Claremont into parts of Upland, Rancho Cucamonga and Hesperia. Harabedian sits on the Insurance and Utilities and Energy committees, which handle home-insurance and power-bill issues.',
    ],
    introParagraphs: [
      'In the June 2 primary, first-term Democrat John Harabedian took 63.3% and Republican Adam Christopher Vena 36.7% (Statement of Vote). Vena, whose ballot designation is father and sanitation employee, has published no platform found by this guide. The race mainly measures support for Harabedian after his first term.',
    ],
    readingLinks: [
      { label: 'SoS Statement of Vote — State Assembly (June 2026)', url: SOV_ASSEMBLY, summary: 'Official certified primary results by district.' },
      { label: 'Ballotpedia — AD-41', url: bp('California_State_Assembly_District_41'), summary: 'Primary and past results.' },
    ],
    candidates: [
      {
        id: 'john-harabedian',
        name: 'John Harabedian',
        party: 'D',
        role: 'California State Assemblymember',
        campaignUrl: 'https://a41.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term Assemblymember and former prosecutor, after two terms on the Sierra Madre City Council, including two turns as mayor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Elected to the Assembly in 2024; Sierra Madre City Council from 2012 (re-elected 2016), twice mayor (official bio; Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs the Legislative Audit Committee; on Insurance, Judiciary, Public Safety, Transportation, and Utilities and Energy (Ballotpedia, 2025–26).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Born and raised in Sierra Madre and lives in Pasadena; co-founded the Clean Power Alliance as a local official.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Committee chair in the majority party; specific signed bills not verified for this guide.' },
          ],
        },
        bio: [
          'Harabedian holds degrees from Yale, Oxford and Stanford Law. He was a Los Angeles County prosecutor and a law-firm partner, and served on the Sierra Madre City Council from 2012, twice as mayor, where he led a solar initiative and co-founded the Clean Power Alliance (official bio; Ballotpedia).',
          'Elected in 2024, he chairs the Legislative Audit Committee.',
        ],
        recordVsChange:
          'Harabedian’s first term brought an audit committee chair and seats on Insurance and Utilities, central to fire-recovery issues. Vena has published no platform, so the case for change rests mainly on party.',
        scorecard: [
          { topic: 'Climate', position: '✓✓ Led Sierra Madre’s solar initiative; co-founded the Clean Power Alliance', comparison: 'Vena has no published position.' },
          { topic: 'Public safety', position: '✓ Former county prosecutor; sits on Public Safety', comparison: 'Vena lists public safety as a priority without specifics.' },
          { topic: 'Insurance & utilities', position: '~ Sits on Insurance and Utilities and Energy; no specific bill verified', comparison: 'Vena has no published position.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat; Legislative Audit Committee chair', comparison: 'Vena is a Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSEMENTS,
      },
      {
        id: 'adam-vena',
        name: 'Adam Christopher Vena',
        party: 'R',
        role: 'Father/Sanitation Employee',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Sanitation employee with no documented public office or policy experience.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative office found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of budget or committee work.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No campaign website or questionnaire found as of Oct 8, 2026.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation.' },
          ],
        },
        bio: ['Vena is a Republican whose ballot designation is father and sanitation employee. This guide found no campaign website, questionnaire or news coverage describing his background or platform.'],
        scorecard: [
          { topic: 'Housing & transit', position: '? No published position', comparison: 'Harabedian has no specific housing bill verified here.' },
          { topic: 'Public safety', position: '? No published position', comparison: 'Harabedian is a former prosecutor.' },
          { topic: 'Taxes', position: '? No published position', comparison: 'Harabedian has no specific tax position verified here.' },
          { topic: 'Caucus / ideology', position: '✓ Republican', comparison: 'Harabedian is a Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSEMENTS,
      },
    ],
    crossTypology: ct([
      ['PL', 'Harabedian', '●', 'Progressive Left voters fit a lawmaker who built local clean-energy programs.'],
      ['EL', 'Harabedian', '●', 'Establishment Liberals value an Ivy- and Stanford-trained former prosecutor who chairs the audit committee.'],
      ['DM', 'Harabedian', '●', 'Democratic Mainstays back the Democratic incumbent.'],
      ['OL', 'Harabedian', '◐', 'Outsider Left voters may find a former law-firm partner establishment-minded, but he is the only candidate with a published progressive record.'],
      ['SS', 'Harabedian', '○', 'Stressed Sideliners have little information on Vena and may default to the incumbent.'],
      [
        'AR',
        'Vena',
        '◐',
        'Ambivalent Right voters may prefer a Republican check on the supermajority, though Vena has published no platform.',
        'An experience-first Ambivalent Right voter could back Harabedian, a former prosecutor and mayor who chairs the audit committee; the trade is a Democratic vote on taxes and regulation.',
      ],
      ['PR', 'Vena', '●', 'Populist Right voters prefer the working-class Republican outsider over a Stanford-trained lawyer.'],
      ['CC', 'Vena', '●', 'Committed Conservatives back the Republican as a vote against the Democratic supermajority.'],
      ['FF', 'Vena', '●', 'Faith and Flag Conservatives prefer the Republican on the ballot.'],
    ]),
    counterArguments: [
      'CC (Vena ●): But consider that Vena has published no positions, so a vote for him is a party vote with little known about his priorities.',
      'EL (Harabedian ●): But consider that he has served less than two years, and his specific bills on insurance and utility costs are not documented here.',
    ],
  },

  // ───────────────────────────── AD-43 ─────────────────────────────
  {
    id: 'assembly-ad43',
    categoryId: 'state-leg',
    title: 'State Assembly, District 43',
    tldrLabel: 'AD-43',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-43 covers the northeast San Fernando Valley: San Fernando, Sylmar, Pacoima, Arleta, Panorama City, Sun Valley and Valley Glen.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      ASSEMBLY_STAKES_1,
      'AD-43 covers the northeast San Fernando Valley, including the city of San Fernando, Sylmar, Pacoima, Arleta, Panorama City, Sun Valley and Valley Glen. It is safely Democratic; the vote is mostly a check on Rodriguez’s first term.',
    ],
    introParagraphs: [
      'In the June 2 primary, first-term Democrat Celeste Rodriguez took 74.9% and Republican Ricardo Benitez 25.1% (Statement of Vote). Benitez, a plumber and electrical contractor, has run for the Legislature several times since 2012, including twice against Luz Rivas. Little suggests a close race.',
    ],
    readingLinks: [
      { label: 'SoS Statement of Vote — State Assembly (June 2026)', url: SOV_ASSEMBLY, summary: 'Official certified primary results by district.' },
      { label: 'Ballotpedia — Ricardo Benitez', url: bp('Ricardo_Benitez'), summary: 'Benitez’s prior legislative races.' },
    ],
    candidates: [
      {
        id: 'celeste-rodriguez',
        name: 'Celeste Rodriguez',
        party: 'D',
        role: 'Assemblymember',
        campaignUrl: 'https://a43.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term Assemblymember and former San Fernando mayor who ran anti-poverty programs in the Los Angeles mayor’s office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Elected to the Assembly in 2024; San Fernando City Council from 2020 and mayor from December 2022 (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Serves on Health, Higher Education, Human Services, and Water, Parks and Wildlife (Ballotpedia, 2025–26); no chair post found.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Raised in the Northeast Valley and lives in San Fernando; worked on homelessness prevention for the LA mayor’s office.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Oversaw Los Angeles’s Guaranteed Basic Income pilot as a deputy director (official bio); specific signed bills not verified.' },
          ],
        },
        bio: [
          'Raised in the Northeast Valley by immigrant parents, Rodriguez holds degrees from LA Mission College and San Diego State. As a deputy director in the Los Angeles mayor’s office she oversaw the city’s Guaranteed Basic Income pilot (official bio).',
          'She won a San Fernando council seat in 2020, became mayor in 2022 and was elected to the Assembly in 2024 (Wikipedia).',
        ],
        recordVsChange:
          'Rodriguez is completing her first term with seats on Health and Human Services that match her anti-poverty background. Benitez offers a Republican voice but has lost several legislative races; replacing her would mainly change party.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Homelessness prevention work in the LA mayor’s office; lists housing as a priority', comparison: 'Benitez has no published housing plan.' },
          { topic: 'Climate', position: '✓ Lists combating climate change as a priority; sits on Water, Parks and Wildlife', comparison: 'Benitez has no published position.' },
          { topic: 'Education', position: '✓ Priorities include education and career training; sits on Higher Education', comparison: 'Benitez has no published position.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat; oversaw a guaranteed-income pilot', comparison: 'Benitez is a Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSEMENTS,
      },
      {
        id: 'ricardo-benitez',
        name: 'Ricardo Benitez',
        party: 'R',
        role: 'Plumber/Electrical Contractor',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Plumbing and electrical contractor and repeat legislative candidate; no elected office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No legislative office; lost Assembly races in 2012, 2018 (special and general) and 2020 and a 2014 Senate race (Ballotpedia).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of budget or committee work.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Has run repeatedly for Northeast Valley legislative seats since 2012.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation.' },
          ],
        },
        bio: ['Benitez, a plumber and electrical contractor, has run for the Legislature in the northeast San Fernando Valley several times, losing to Luz Rivas in 2018 and 2020 and to Bob Hertzberg in a 2014 Senate race (Ballotpedia). This guide found no current campaign platform.'],
        scorecard: [
          { topic: 'Housing & transit', position: '? No published position', comparison: 'Rodriguez worked on homelessness prevention.' },
          { topic: 'Public safety', position: '? No published position', comparison: 'Rodriguez has no specific bill verified here.' },
          { topic: 'Taxes', position: '? No published position', comparison: 'Rodriguez has no specific tax position verified here.' },
          { topic: 'Caucus / ideology', position: '✓ Republican', comparison: 'Rodriguez is a Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSEMENTS,
      },
    ],
    crossTypology: ct([
      ['PL', 'Rodriguez', '●', 'Progressive Left voters fit a lawmaker who ran Los Angeles’s guaranteed-income pilot.'],
      ['EL', 'Rodriguez', '●', 'Establishment Liberals value Rodriguez’s city government and mayoral experience.'],
      ['DM', 'Rodriguez', '●', 'Democratic Mainstays back the Democratic incumbent in a safe seat.'],
      ['OL', 'Rodriguez', '●', 'Outsider Left voters fit a younger lawmaker focused on poverty and homelessness prevention.'],
      ['SS', 'Rodriguez', '○', 'Stressed Sideliners may default to the local incumbent focused on family economic stability.'],
      [
        'AR',
        'Benitez',
        '◐',
        'Ambivalent Right voters may want a Republican check on the supermajority, though Benitez has published no platform.',
        'An experience-first Ambivalent Right voter could back Rodriguez, a former mayor finishing her first Assembly term; the trade is a Democratic vote on taxes and spending.',
      ],
      ['PR', 'Benitez', '●', 'Populist Right voters prefer the tradesman Republican over a former City Hall official.'],
      ['CC', 'Benitez', '●', 'Committed Conservatives back the Republican as a vote against the Democratic supermajority.'],
      ['FF', 'Benitez', '●', 'Faith and Flag Conservatives prefer the Republican on the ballot.'],
    ]),
    counterArguments: [
      'CC (Benitez ●): But consider that Benitez has published no current platform and has lost this kind of race repeatedly.',
      'EL (Rodriguez ●): But consider that she has no committee chair yet and her specific bills are not documented here.',
    ],
  },
];
