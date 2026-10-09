import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

const LEGAL_LEG =
  'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

const ASSEMBLY_CRITERIA = (districtDetail: string) => [
  { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
  { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const POWERS =
  'Assembly members vote on the state budget, taxes, housing and land-use law, schools, public safety and environmental rules, and on whether to override vetoes. They serve two-year terms, so every seat is on the ballot each cycle.';

const CAL_ACCESS = 'Current totals not compiled here (checked Oct 8, 2026); see Cal-Access: https://cal-access.sos.ca.gov/';
const SOV = 'https://elections.cdn.sos.ca.gov/sov/2026-primary/sov/95-state-assembly.pdf';
const SOV_LINK = { label: 'Secretary of State — June 2026 Statement of Vote, Assembly', url: SOV, summary: 'Certified primary results for every Assembly district.' };
const BB = (n: number) => ({
  label: `The Ballot Brief — Assembly District ${n}`,
  url: `https://theballotbrief.com/state/california/los-angeles-county/california-assembly-district-${n}`,
  summary: 'Neutral roster page with primary results and each finalist’s stated priorities.',
});
const GOV_OCT13 = 'https://www.gov.ca.gov/2025/10/13/governor-newsom-issues-legislative-update-10-13-25/';
const NO_ENDORSE = 'No endorsements verified for the general election as of Oct 8, 2026.';

export const RACES_D_LA_C: Race[] = [
  // ───────────────────────────── AD-56 ─────────────────────────────
  {
    id: 'assembly-ad56',
    categoryId: 'state-leg',
    title: 'State Assembly, District 56',
    tldrLabel: 'AD-56',
    seatContext: 'Incumbent',
    kind: 'candidates',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-56 covers Whittier, Hacienda Heights, Rowland Heights, Diamond Bar and other southeast Los Angeles County and San Gabriel Valley communities.'),
    stakesParagraphs: [
      POWERS,
      'District 56 spans Whittier and the southern San Gabriel Valley. Its incumbent chairs the Assembly Insurance Committee, which oversees the FAIR Plan and the home-insurance crisis, so this seat carries statewide weight on insurance policy.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic incumbent Lisa Calderon took 64.1% and Republican Jessica Martinez 35.9% (Statement of Vote). This is their fourth matchup: Calderon beat Martinez in 2020, 2022 and 2024, most recently 56.7% to 43.3%. The runoff turns on whether Martinez’s school-choice, lower-tax message gains ground.',
    ],
    readingLinks: [SOV_LINK, BB(56)],
    candidates: [
      {
        id: 'lisa-calderon',
        name: 'Lisa Calderon',
        party: 'D',
        role: 'Assembly Member/Mom',
        campaignUrl: 'https://a56.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2020 and chair of the Insurance Committee; earlier a legislative aide and a utility government-affairs director.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'In the Assembly since 2020; AB 1197 (rental-car surveillance and theft liability) signed Oct 7, 2025; FAIR Plan bills AB 69 and AB 1680 listed as passed (Digital Democracy).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs the Insurance Committee; member of Appropriations, Emergency Management, Human Services and Utilities and Energy (official biography).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Whittier resident for more than 30 years; has represented the area since 2020.' },
            { criterionId: 'coalition', assessment: 'met', evidence: '9 of 30 bills authored in 2025–26 passed, per Digital Democracy.' },
          ],
        },
        bio: [
          'Calderon was elected in 2020, succeeding her stepson Ian Calderon; her husband, Charles Calderon, is a former legislator. She was an aide to Speaker Willie Brown from 1990 to 1996 and a government-affairs director at Edison International from 1996 to 2020. She chairs the Insurance Committee, which has held repeated oversight hearings on the FAIR Plan.',
        ],
        recordVsChange:
          'Calderon brings a committee chair’s gavel on home insurance, one of the state’s most pressing issues; Martinez offers a sharply different, conservative agenda but no legislative record, so replacing Calderon trades that leverage for a change in direction.',
        scorecard: [
          { topic: 'Housing & insurance', position: '✓ Authored FAIR Plan bills AB 69 and AB 1680 as Insurance chair', comparison: 'Martinez has no published insurance or housing plan.' },
          { topic: 'Climate', position: '✓ 84% alignment with California Environmental Voters (Digital Democracy)', comparison: 'Martinez stresses reduced regulation.' },
          { topic: 'Education', position: '✓ Passed a law barring colleges from cutting aid for private-scholarship winners (official bio)', comparison: 'Martinez backs charter schools, vouchers and homeschooling.' },
          { topic: 'Taxes', position: '✗ 0% alignment with Howard Jarvis Taxpayers Association; 25% with CalChamber', comparison: 'Martinez campaigns on lower taxes and balanced budgets.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream labor-aligned Democrat: 100% California Labor Federation, 77% Courage California', comparison: 'Martinez is a conservative Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
      },
      {
        id: 'jessica-martinez',
        name: 'Jessica Martinez',
        party: 'R',
        role: 'Retired Teacher',
        campaignUrl: 'https://martinezforassembly.org',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Elected to the Whittier City Council in 2020 and an educator; has run for this seat three times before.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Whittier City Council member from 2020 (JoinCalifornia; CBS LA, Jan 2021); no state legislative experience.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'City council budget votes; Puente Hills Habitat Authority director from 2021.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Whittier officeholder; has run in this area since 2018.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation found.' },
          ],
        },
        bio: [
          'Martinez is an educator elected to the Whittier City Council in 2020. She lost to Calderon in 2020 (39.5%), 2022 (41.5%) and 2024 (43.3%). Her campaign backs parental choice including charter schools, vouchers and homeschooling, lower taxes and less regulation, law enforcement and border security, and gun rights.',
        ],
        scorecard: [
          { topic: 'Housing & insurance', position: '? No published housing or insurance plan', comparison: 'Calderon chairs the Insurance Committee.' },
          { topic: 'Education', position: '✓✓ Charter schools, vouchers, homeschooling and “traditional values” curriculum', comparison: 'Calderon is aligned with the CTA (91%).' },
          { topic: 'Taxes', position: '✓✓ Lower taxes, reduced regulation, balanced budgets', comparison: 'Calderon scores 0% with HJTA.' },
          { topic: 'Public safety', position: '✓ “Committed to law and order”; supports police, border security and self-defense rights', comparison: 'Calderon has no distinctive public-safety platform.' },
          { topic: 'Caucus / ideology', position: '✓ Conservative Republican; site links the county, state and national GOP', comparison: 'Calderon is a labor-aligned Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Campaign site displays Los Angeles County, California and national Republican Party logos (Oct 2026); no endorsement list.',
        notes: [
          'In January 2021 two Whittier council colleagues moved to censure her for attending the Jan. 6 rally in Washington and for election-conspiracy social-media posts; the motion failed. She said she was nowhere near the riot and was exercising First Amendment rights. https://www.cbsnews.com/losangeles/news/whittier-city-council-considers-censuring-member-who-attended-capitol-trump-rally/',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Calderon', '●', 'Progressive Left voters back the Democrat with perfect ACLU, labor and Planned Parenthood scores.'],
      ['EL', 'Calderon', '●', 'Establishment Liberals value an experienced committee chair working on the FAIR Plan and insurance market.'],
      ['DM', 'Calderon', '●', 'Democratic Mainstays stay with a reliable labor-aligned Democratic incumbent.'],
      ['OL', 'Calderon', '◐', 'Outsider Left voters may dislike the Calderon family dynasty and her utility-lobbyist past, but her voting record far exceeds the alternative.'],
      ['SS', 'Calderon', '○', 'Stressed Sideliners worried about insurance costs get a slight edge from the chair handling the issue, though neither candidate offers a clear cost plan.'],
      ['AR', 'Martinez', '○', 'Ambivalent Right voters may lean toward Martinez on lower taxes and less regulation, though her Jan. 6 rally attendance gives pause.', 'Experience-first Ambivalent Right voters could back Calderon, a six-year legislator who chairs the Insurance Committee, over a former councilmember; they give up Martinez’s tax-and-regulation cuts.'],
      ['PR', 'Martinez', '●', 'Populist Right voters favor a law-and-order, border-security conservative who has challenged the Calderon family seat four times.'],
      ['CC', 'Martinez', '●', 'Committed Conservatives back her free-market, lower-tax, balanced-budget platform.'],
      ['FF', 'Martinez', '●', 'Faith and Flag Conservatives value her emphasis on religious freedom, traditional-values curriculum and parental choice.'],
    ]),
    counterArguments: [
      'PR (Martinez ●): But consider that Martinez has lost this matchup three times and has no plan on the insurance crisis, while Calderon holds the gavel on it.',
      'OL (Calderon ◐): But consider that Calderon spent 24 years as a utility government-affairs director and scores only 70% with the Sierra Club.',
    ],
  },

  // ───────────────────────────── AD-57 ─────────────────────────────
  {
    id: 'assembly-ad57',
    categoryId: 'state-leg',
    title: 'State Assembly, District 57',
    tldrLabel: 'AD-57',
    seatContext: 'Incumbent',
    kind: 'candidates',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-57 covers South Los Angeles, Exposition Park and Downtown Los Angeles, with high rents, homelessness and Olympic-venue planning.'),
    stakesParagraphs: [
      POWERS,
      'District 57 runs from Downtown Los Angeles through Exposition Park and South LA, home to 2028 Olympic venues. Housing costs, youth services and juvenile justice dominate local priorities.',
    ],
    introParagraphs: [
      'In the June 2 primary, first-term Democrat Sade Elhawary took 85.7% and Republican Constance Jewel Menzies 14.3% (Statement of Vote). Menzies, an in-home care provider, has no campaign website or published platform, so the runoff is a referendum on Elhawary’s first term.',
    ],
    readingLinks: [SOV_LINK, BB(57)],
    candidates: [
      {
        id: 'sade-elhawary',
        name: 'Sade Elhawary',
        party: 'D',
        role: 'California State Assemblymember',
        campaignUrl: 'https://a57.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'First-term Assembly member since December 2024 with several bills signed; earlier a 12-year community organizer and educator.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'AB 681 (DREAM loans), AB 822 (Commission on the State of Hate) and AB 952 (youth camp pilot) signed Oct 13, 2025.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Member of Arts and Tourism, Business and Professions, Elections, Human Services, and Labor committees; no chair post found.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'South LA native; 12+ years at Community Coalition; helped found the Fremont High wellness center.' },
            { criterionId: 'coalition', assessment: 'met', evidence: '14 of 34 bills authored in 2025–26 passed, per Digital Democracy.' },
          ],
        },
        bio: [
          'Elhawary, the daughter of Egyptian and Guatemalan immigrants, spent more than 12 years at Community Coalition as a youth organizer and helped found the Nelson Mandela School for Social Justice. She was youth-engagement manager on Karen Bass’s mayoral campaign and won the seat in 2024 with 61.1%. She holds degrees from UCLA and Harvard’s education school.',
        ],
        recordVsChange:
          'In her first term Elhawary has passed bills on student loans, hate-crime tracking and juvenile justice; Menzies has published no platform, so voters have little basis to weigh a change.',
        scorecard: [
          { topic: 'Housing & transit', position: '? No signature housing bill found', comparison: 'Menzies has no published platform.' },
          { topic: 'Education', position: '✓ AB 681 raised California DREAM Loan limits (signed 2025)', comparison: 'Menzies: no stated position.' },
          { topic: 'Public safety', position: '✓ Juvenile-justice focus: youth camp pilot (AB 952) and probation-ward bill', comparison: 'Menzies: no stated position.' },
          { topic: 'Labor', position: '✓ Authored AB 1331 on workplace surveillance (listed as passed)', comparison: 'Menzies: no stated position.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive organizer; mentored by Karen Bass and Marqueece Harris-Dawson', comparison: 'Menzies is a Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
        notes: [`Governor vetoed her AB 742 (licensing for descendants of enslaved people) on Oct 13, 2025: ${GOV_OCT13}`],
      },
      {
        id: 'constance-menzies',
        name: 'Constance Jewel Menzies',
        party: 'R',
        role: 'In-Home Care Provider',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'In-home care provider per her ballot designation; no public record of office, policy work or a campaign platform found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No public record of community roles found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: ['Menzies lists her occupation as in-home care provider. No campaign website, questionnaire or news coverage was found as of Oct 8, 2026.'],
        scorecard: [
          { topic: 'Policy platform', position: '? No published positions', comparison: 'Elhawary has a first-term legislative record.' },
          { topic: 'Caucus / ideology', position: '? Republican; no stated agenda', comparison: 'Elhawary is a progressive Democrat.' },
          { topic: 'Health care', position: '? Works in home care; no stated policy', comparison: 'Elhawary sits on Human Services.' },
          { topic: 'Taxes', position: '? No stated position', comparison: 'Elhawary has no tax-cut agenda.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
      },
    ],
    crossTypology: ct([
      ['PL', 'Elhawary', '●', 'Progressive Left voters back a community organizer who carries bills on hate tracking, juvenile justice and reparations-related licensing.'],
      ['EL', 'Elhawary', '●', 'Establishment Liberals value an incumbent tied to Mayor Bass with several bills already signed.'],
      ['DM', 'Elhawary', '●', 'Democratic Mainstays support the Democratic incumbent in an overwhelmingly Democratic seat.'],
      ['OL', 'Elhawary', '●', 'Outsider Left voters like her grassroots organizing roots at Community Coalition.'],
      ['SS', 'Elhawary', '○', 'Stressed Sideliners have no platform to weigh from Menzies, so the incumbent’s record gives a slight edge.'],
      ['AR', '—', '—', 'Ambivalent Right voters have no stated positions from Menzies to judge, so no lean is warranted.', 'Experience-first Ambivalent Right voters could back Elhawary, a sitting legislator with bills signed, since Menzies offers no platform; they give up a Republican vote on taxes and spending.'],
      ['PR', 'Menzies', '◐', 'Populist Right voters may back the Republican as a protest against Sacramento, though she has published no agenda.', 'Experience-first Populist Right voters could back Elhawary, who has passed laws, over a candidate with no record or platform; they give up a Republican protest vote.'],
      ['CC', 'Menzies', '●', 'Committed Conservatives back the Republican nominee; party label is the only available signal.'],
      ['FF', 'Menzies', '●', 'Faith and Flag Conservatives back the Republican nominee over a progressive incumbent.'],
    ]),
    counterArguments: [
      'CC (Menzies ●): But consider that Menzies has published no positions at all, so a conservative vote here is a party-label vote with no agenda behind it.',
    ],
  },

  // ───────────────────────────── AD-61 ─────────────────────────────
  {
    id: 'assembly-ad61',
    categoryId: 'state-leg',
    title: 'State Assembly, District 61',
    tldrLabel: 'AD-61',
    seatContext: 'Incumbent',
    kind: 'candidates',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-61 covers Inglewood, Hawthorne, Lawndale, Gardena, Westchester, Venice and Marina del Rey, including LAX and the Inglewood sports venues.'),
    stakesParagraphs: [
      POWERS,
      'District 61 includes Inglewood’s stadium district, LAX-area neighborhoods and coastal Venice. The incumbent chairs the committee on public pensions and the select committee on the 2028 Olympics.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic incumbent Tina McKinnor took 98.6%; Republican Brian Lockwood, a qualified write-in candidate, took 1.4% and advanced as the only other name (Statement of Vote). Lockwood appears on the November ballot with no designation. The outcome is not in serious doubt.',
    ],
    readingLinks: [SOV_LINK, BB(61)],
    candidates: [
      {
        id: 'tina-mckinnor',
        name: 'Tina McKinnor',
        party: 'D',
        role: 'State Assemblymember',
        campaignUrl: 'https://a61.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2022 who chairs Public Employment and Retirement; earlier chief of staff to several Assembly members.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'In office since June 2022; AB 749 (Youth Sports for All Act) signed Oct 13, 2025.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs Public Employment and Retirement and the 2028 Olympics select committee; sits on Revenue and Taxation (official bio).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Born and raised in LA County; elected chair of the LA County legislative delegation in Jan 2024.' },
            { criterionId: 'coalition', assessment: 'met', evidence: '12 of 36 bills authored in 2025–26 passed, per Digital Democracy.' },
          ],
        },
        bio: [
          'McKinnor won a June 2022 special election to succeed Autumn Burke. Before that she was civic engagement director at LAVoice, operations director for the California Democratic Party, and chief of staff to several Assembly members. She authored the law letting legislative staff unionize and has carried housing and reparations-related bills.',
        ],
        recordVsChange:
          'McKinnor holds two chair posts and leads the county delegation; Lockwood is a write-in with no published platform, so a change would give up that seniority for no defined alternative.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Bills on rental affordability and racially motivated eminent domain (AB 62 vetoed 2025)', comparison: 'Lockwood has no published platform.' },
          { topic: 'Climate', position: '✓✓ 99% California Environmental Voters; microplastics legislation', comparison: 'Lockwood: no stated position.' },
          { topic: 'Labor', position: '✓✓ 100% California Labor Federation; legislative-staff unionization law', comparison: 'Lockwood: no stated position.' },
          { topic: 'Taxes', position: '✗ 0% Howard Jarvis Taxpayers Association and CalChamber', comparison: 'Lockwood: no stated position.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive: 100% Courage California and ACLU', comparison: 'Lockwood is a Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
        notes: [
          'Digital Democracy notes she authored a contested bill to end required police reports by health workers who suspect a patient is a domestic-violence victim. https://calmatters.digitaldemocracy.org/legislators/tina-mckinnor-35053',
          `Governor vetoed her AB 57 (Dream for All for descendants of enslaved people) and AB 62 on Oct 13, 2025: ${GOV_OCT13}`,
        ],
      },
      {
        id: 'brian-lockwood',
        name: 'Brian Lockwood',
        party: 'R',
        role: 'No Ballot Designation',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Qualified write-in candidate in the primary; no public record of office, policy work or a detailed platform found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No public record of community roles found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: ['Lockwood qualified as a Republican write-in for the primary and drew 1,104 votes. His campaign message is that Los Angeles “deserves better”; no biography or detailed platform was found as of Oct 8, 2026.'],
        scorecard: [
          { topic: 'Policy platform', position: '? Slogan only; no published positions', comparison: 'McKinnor has a four-year legislative record.' },
          { topic: 'Caucus / ideology', position: '? Republican; no stated agenda', comparison: 'McKinnor is a progressive Democrat.' },
          { topic: 'Taxes', position: '? No stated position', comparison: 'McKinnor scores 0% with HJTA.' },
          { topic: 'Public safety', position: '? No stated position', comparison: 'McKinnor has no distinctive public-safety platform.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
      },
    ],
    crossTypology: ct([
      ['PL', 'McKinnor', '●', 'Progressive Left voters back a legislator with perfect labor, ACLU and Courage California scores who pushed staff unionization.'],
      ['EL', 'McKinnor', '●', 'Establishment Liberals value a committee chair who leads the LA County delegation.'],
      ['DM', 'McKinnor', '●', 'Democratic Mainstays support a longtime party operative turned incumbent.'],
      ['OL', 'McKinnor', '●', 'Outsider Left voters back her reparations-related and tenant-affordability bills, even those vetoed by the governor.'],
      ['SS', 'McKinnor', '○', 'Stressed Sideliners have nothing from Lockwood to weigh, so the incumbent’s record gives a slight edge.'],
      ['AR', '—', '—', 'Ambivalent Right voters have no positions from Lockwood to judge, so no lean is warranted.', 'Experience-first Ambivalent Right voters could back McKinnor, a four-year legislator and committee chair, since Lockwood offers no record; they give up a Republican vote on taxes.'],
      ['PR', 'Lockwood', '◐', 'Populist Right voters may cast a protest vote for the Republican write-in’s “deserves better” message.', 'Experience-first Populist Right voters could back McKinnor, a committee chair, over a write-in with no record; they give up a protest vote against a progressive incumbent.'],
      ['CC', 'Lockwood', '●', 'Committed Conservatives back the Republican nominee against an incumbent who scores 0% with taxpayer groups.'],
      ['FF', 'Lockwood', '●', 'Faith and Flag Conservatives back the Republican nominee over a progressive incumbent.'],
    ]),
    counterArguments: [
      'CC (Lockwood ●): But consider that Lockwood entered as a write-in with 1.4% of the vote and has published no positions, so this is a symbolic vote.',
    ],
  },

  // ───────────────────────────── AD-62 ─────────────────────────────
  {
    id: 'assembly-ad62',
    categoryId: 'state-leg',
    title: 'State Assembly, District 62',
    tldrLabel: 'AD-62',
    seatContext: 'Incumbent',
    kind: 'candidates',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-62 covers Lynwood, South Gate, Huntington Park, Maywood, Paramount, Bellflower, Lakewood and Walnut Park in southeast Los Angeles County.'),
    stakesParagraphs: [
      POWERS,
      'District 62 covers working-class southeast LA County cities such as Lynwood, South Gate and Paramount. The incumbent chairs the committee on economic development and household costs, putting affordability at the center of this seat.',
    ],
    introParagraphs: [
      'In the June 2 primary, first-term Democrat José Luis Solache took 73.1% and Republican Paul Irving Jones 26.9% (Statement of Vote). Jones, a retired Marine, has no campaign website or published platform, so the runoff mainly tests Solache’s first term.',
    ],
    readingLinks: [SOV_LINK, BB(62)],
    candidates: [
      {
        id: 'jose-luis-solache',
        name: 'José Luis Solache',
        party: 'D',
        role: 'California State Assemblymember',
        campaignUrl: 'https://solacheforassembly.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2024 who chairs a standing committee, after a decade on the Lynwood council and three school-board terms.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'AB 562 (foster-care family finding) signed Oct 7, 2025; AB 786 signed Oct 13, 2025.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Named chair of Economic Development, Growth, and Household Impact by Speaker Rivas, Dec 2024.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Lynwood councilmember and mayor from 2013; three terms on Lynwood Unified board, three times president.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Multiple bills signed in his first year.' },
          ],
        },
        bio: [
          'Solache was elected to the Assembly in 2024. He served on the Lynwood City Council from 2013, including as mayor, and earlier three terms on the Lynwood Unified school board, elected at 23. A Cal State Dominguez Hills graduate, he chaired the California State Student Association. He chairs the Assembly committee on economic development and household costs.',
        ],
        recordVsChange:
          'Solache holds a committee gavel on affordability and has passed foster-care legislation; Jones has published no platform, so replacing him trades a chair for an unknown agenda.',
        scorecard: [
          { topic: 'Housing & affordability', position: '✓ Chairs the household-impact committee; lists housing and child-care costs as priorities', comparison: 'Jones has no published platform.' },
          { topic: 'Social services', position: '✓ AB 562 aims to place more foster youth with relatives; CalFresh enrollment a stated priority', comparison: 'Jones: no stated position.' },
          { topic: 'Education', position: '✓ Former Lynwood Unified board president', comparison: 'Jones: no stated position.' },
          { topic: 'Public safety', position: '? No distinctive public-safety platform found', comparison: 'Jones is a retired combat Marine with no stated platform.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat focused on local economic development', comparison: 'Jones is a Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
      },
      {
        id: 'paul-irving-jones',
        name: 'Paul Irving Jones',
        party: 'R',
        role: 'Retired Combat Marine',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Retired Marine per his ballot designation; no public record of office, policy work or a campaign platform found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'No public record of community roles found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: ['Jones describes himself as a retired combat Marine. His only located campaign presence is a Facebook page; no platform or news coverage was found as of Oct 8, 2026.'],
        scorecard: [
          { topic: 'Policy platform', position: '? No published positions', comparison: 'Solache chairs an affordability committee.' },
          { topic: 'Veterans', position: '? Military service, no stated veterans policy', comparison: 'Solache has no veterans-specific platform.' },
          { topic: 'Caucus / ideology', position: '? Republican; no stated agenda', comparison: 'Solache is a mainstream Democrat.' },
          { topic: 'Taxes', position: '? No stated position', comparison: 'Solache has no tax-cut agenda.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
      },
    ],
    crossTypology: ct([
      ['PL', 'Solache', '●', 'Progressive Left voters back the Democrat focused on CalFresh, child care and foster-youth placement.'],
      ['EL', 'Solache', '●', 'Establishment Liberals value a former mayor and school-board president now chairing a committee.'],
      ['DM', 'Solache', '●', 'Democratic Mainstays support the Democratic incumbent from Lynwood.'],
      ['OL', 'Solache', '◐', 'Outsider Left voters may see a career local politician, but his affordability work beats an unknown Republican.'],
      ['SS', 'Solache', '○', 'Stressed Sideliners squeezed by costs get a slight edge from the chair of the household-cost committee.'],
      ['AR', 'Jones', '○', 'Ambivalent Right voters may respect a combat veteran, though he has published no positions.', 'Experience-first Ambivalent Right voters could back Solache, a former mayor and committee chair, since Jones has no record; they give up a Republican vote on taxes.'],
      ['PR', 'Jones', '◐', 'Populist Right voters may back a veteran outsider over a career local politician.', 'Experience-first Populist Right voters could back Solache, who has run a city and chairs a committee; they give up an outsider vote.'],
      ['CC', 'Jones', '●', 'Committed Conservatives back the Republican nominee; party label is the main signal.'],
      ['FF', 'Jones', '●', 'Faith and Flag Conservatives favor a Marine veteran running as a Republican.'],
    ]),
    counterArguments: [
      'CC (Jones ●): But consider that Jones has published no platform, so conservatives cannot know what he would push for.',
    ],
  },

  // ───────────────────────────── AD-64 ─────────────────────────────
  {
    id: 'assembly-ad64',
    categoryId: 'state-leg',
    title: 'State Assembly, District 64',
    tldrLabel: 'AD-64',
    seatContext: 'Incumbent',
    kind: 'candidates',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-64 covers Downey, Norwalk, La Mirada and nearby southeast Los Angeles County and northern Orange County communities.'),
    stakesParagraphs: [
      POWERS,
      'District 64 is centered on Downey and Norwalk. Its incumbent chairs the Assembly Rules Committee, which assigns bills to committees and manages floor operations, giving the seat unusual institutional influence.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic incumbent Blanca Pacheco took 66.5% and Republican Raul Ortiz Jr. 33.5% (Statement of Vote), a rematch of 2024, when Pacheco won 62.5% to 37.5%. Ortiz runs on parental authority, small business and public safety.',
    ],
    readingLinks: [SOV_LINK, BB(64)],
    candidates: [
      {
        id: 'blanca-pacheco',
        name: 'Blanca Pacheco',
        party: 'D',
        role: 'Assemblywoman',
        campaignUrl: 'https://a64.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2022 who chairs the Rules Committee; former two-term Downey mayor and an attorney since 2003.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'In office since Dec 2022; AB 1821 (Public Records Act response time) listed as passed; attorney since 2003.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs Rules; member of Appropriations, Judiciary, Governmental Organization and Local Government (official bio).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Downey councilmember from 2016 and mayor from 2020; led the League of California Cities LA Division.' },
            { criterionId: 'coalition', assessment: 'met', evidence: '24 of 43 bills authored in 2025–26 passed, per Digital Democracy.' },
          ],
        },
        bio: [
          'Pacheco, a UCLA and Loyola Law School graduate, has practiced law since 2003. She joined the Downey City Council in 2016 and became the city’s first Latina mayor in 2020, then won the Assembly seat in 2022. She chairs the Rules Committee. Her votes align 62% with the California Chamber of Commerce, versus 0–25% for neighboring LA Democrats McKinnor, Calderon and Lowenthal.',
        ],
        recordVsChange:
          'As Rules chair Pacheco controls a key lever of Assembly operations; Ortiz offers a socially conservative agenda but no governing record, so change would trade that influence for a different direction.',
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Lists housing affordability as a priority; chaired a League of Cities housing committee', comparison: 'Ortiz has no stated housing plan.' },
          { topic: 'Climate', position: '~ 63% California Environmental Voters, 20% Sierra Club', comparison: 'Ortiz has no stated climate position.' },
          { topic: 'Education', position: '✓ 86% CTA; bills on mental-health training for youth coaches', comparison: 'Ortiz emphasizes parental authority in schools.' },
          { topic: 'Taxes & business', position: '~ 62% CalChamber, 0% Howard Jarvis Taxpayers Association', comparison: 'Ortiz runs as a small-business advocate.' },
          { topic: 'Caucus / ideology', position: '~ Moderate Democrat: 30% Courage California', comparison: 'Ortiz is a socially conservative Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
      },
      {
        id: 'raul-ortiz-jr',
        name: 'Raul Ortiz Jr.',
        party: 'R',
        role: 'Pest Control Manager',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Pest-control business manager and longtime ordained minister; no public office or policy record found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Grew up in Norwalk and lives in La Mirada; ordained minister for 40+ years (Ballot Brief, citing California Family Voter guide).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: ['Ortiz grew up in Norwalk, lives in La Mirada and manages a pest-control business. He has been an ordained minister for more than 40 years. He lost to Pacheco in 2024 and runs on public-school quality, small business, public safety and parental authority.'],
        scorecard: [
          { topic: 'Education', position: '✓ Parental authority and school quality', comparison: 'Pacheco is aligned with the CTA (86%).' },
          { topic: 'Taxes & business', position: '✓ Small-business advocacy', comparison: 'Pacheco scores 62% with CalChamber.' },
          { topic: 'Public safety', position: '✓ Lists public safety as a priority', comparison: 'Pacheco has no distinctive public-safety platform.' },
          { topic: 'Caucus / ideology', position: '✓ Socially conservative Republican and minister', comparison: 'Pacheco is a moderate Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
      },
    ],
    crossTypology: ct([
      ['PL', 'Pacheco', '◐', 'Progressive Left voters will find her 30% Courage California and 20% Sierra Club scores disappointing, but she is far closer than the Republican.'],
      ['EL', 'Pacheco', '●', 'Establishment Liberals value an attorney and former mayor who chairs the Rules Committee.'],
      ['DM', 'Pacheco', '●', 'Democratic Mainstays back the Democratic incumbent and her local-government roots.'],
      ['OL', 'Pacheco', '○', 'Outsider Left voters may dislike her business-friendly votes, but the alternative is a social conservative.'],
      ['SS', 'Pacheco', '○', 'Stressed Sideliners get a slight edge from an incumbent with a pragmatic record and housing focus.'],
      ['AR', 'Pacheco', '○', 'Ambivalent Right voters may find her 62% CalChamber record and moderate style more practical than an untested challenger.'],
      ['PR', 'Ortiz', '◐', 'Populist Right voters may back a small-business owner and minister over a Sacramento insider.', 'Experience-first Populist Right voters could back Pacheco, a former mayor who chairs Rules, over a challenger with no governing record; they give up an outsider vote.'],
      ['CC', 'Ortiz', '●', 'Committed Conservatives back his small-business and parental-authority agenda.'],
      ['FF', 'Ortiz', '●', 'Faith and Flag Conservatives favor a longtime ordained minister who stresses parental authority.'],
    ]),
    counterArguments: [
      'CC (Ortiz ●): But consider that Pacheco is one of the more business-friendly Democrats, and Ortiz has no governing experience.',
      'PL (Pacheco ◐): But consider that she scores just 63% with California Environmental Voters and 30% with Courage California.',
    ],
  },

  // ───────────────────────────── AD-65 ─────────────────────────────
  {
    id: 'assembly-ad65',
    categoryId: 'state-leg',
    title: 'State Assembly, District 65',
    tldrLabel: 'AD-65',
    seatContext: 'Open seat',
    kind: 'candidates',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-65 is a South Los Angeles County district; the outgoing member, Mike Gipson, is from Carson.'),
    stakesParagraphs: [
      POWERS,
      'District 65 is open because Democrat Mike Gipson is leaving. Both finalists are career educators new to the Legislature, so the winner arrives without a state record; housing costs, public safety and schools top their stated priorities.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Ayanna Davis took 46.3%, Republican Lydia A. Gutiérrez 19.2%, and Democrat Fatima Iqbal-Zubair 18.1%, with three other Democrats splitting the rest (Statement of Vote). Davis, a Compton Unified trustee, is heavily favored; Gutiérrez is a veteran Republican candidate and teacher.',
    ],
    readingLinks: [SOV_LINK, BB(65)],
    candidates: [
      {
        id: 'ayanna-davis',
        name: 'Ayanna Davis',
        party: 'D',
        role: 'Educator/School Boardmember',
        campaignUrl: 'https://ayannadavis.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Compton Unified trustee since 2022 and the board’s legislative representative, after 21 years as a teacher and principal in Watts.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Board legislative representative for 2025–26 (Compton Unified release); no state legislative experience.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Compton Unified trustee since 2022; board vice president in 2023.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Compton native; 21 years as teacher and principal in Watts.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing state legislation.' },
          ],
        },
        bio: [
          'Davis holds a doctorate in education from USC and spent 21 years as a teacher and principal in Watts. She has served on the Compton Unified board since 2022, as vice president in 2023 and later as its legislative representative. Her priorities are working families, public safety and health-care workers.',
        ],
        scorecard: [
          { topic: 'Education', position: '✓✓ Career educator and school-board trustee', comparison: 'Gutiérrez is also a career teacher, but a Common Core opponent.' },
          { topic: 'Public safety', position: '✓ Lists public safety as a priority', comparison: 'Gutiérrez also lists public safety.' },
          { topic: 'Health care', position: '✓ Pledges support for health-care workers', comparison: 'Gutiérrez has no stated health-care position.' },
          { topic: 'Housing', position: '? No detailed housing plan found', comparison: 'Gutiérrez lists affordability and housing without specifics.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat; placed on the state party’s endorsement consent calendar', comparison: 'Gutiérrez is a conservative Republican.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'Placed on the California Democratic Party consent calendar at the January 2026 pre-endorsing conference (33 of 41 votes): https://cadem.org/wp-content/uploads/2026/01/FINAL-2026-Pre-Endorsing-Conference-Results-Final-Results-B.pdf',
      },
      {
        id: 'lydia-gutierrez',
        name: 'Lydia A. Gutiérrez',
        party: 'R',
        role: 'Public School Teacher',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary: 'Longtime Long Beach public-school teacher and repeat candidate; no elected office or legislative record found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record of legislative or policy work found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Decades teaching in Long Beach Unified (LA School Report, 2015).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'Gutiérrez has taught in Long Beach Unified for decades and earlier worked in aerospace. She ran for state superintendent in 2014, drawing 24.5% statewide on about $30,000 while opposing Common Core, and challenged LAUSD board president Richard Vladovic in 2015. No 2026 campaign website was found.',
        ],
        scorecard: [
          { topic: 'Education', position: '✓ Opposes Common Core standards', comparison: 'Davis is a career administrator and trustee.' },
          { topic: 'Housing & affordability', position: '? Lists affordability and housing; no specifics', comparison: 'Davis also lacks a detailed housing plan.' },
          { topic: 'Public safety', position: '? Lists public safety; no specifics', comparison: 'Davis also lists public safety.' },
          { topic: 'Caucus / ideology', position: '✓ Republican', comparison: 'Davis is a mainstream Democrat.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
        notes: ['LA School Report profile of her 2015 LAUSD run: https://www.laschoolreport.com/few-endorsements-little-money-no-problem-says-lydia-gutierrez/'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Davis', '◐', 'Progressive Left voters saw their stronger candidate, Iqbal-Zubair, eliminated; Davis is the closer fit than a Republican.'],
      ['EL', 'Davis', '●', 'Establishment Liberals value a credentialed educator with state-party backing.'],
      ['DM', 'Davis', '●', 'Democratic Mainstays follow the party’s consent-calendar candidate.'],
      ['OL', 'Davis', '◐', 'Outsider Left voters may prefer a less establishment pick, but Davis’s community-education roots beat the Republican.'],
      ['SS', 'Davis', '○', 'Stressed Sideliners get a slight edge from a local school leader, though neither offers a detailed cost plan.'],
      ['AR', 'Gutiérrez', '○', 'Ambivalent Right voters may lean to a classroom teacher skeptical of top-down standards, though her platform is thin.'],
      ['PR', 'Gutiérrez', '●', 'Populist Right voters favor a low-budget outsider who built her profile fighting Common Core.'],
      ['CC', 'Gutiérrez', '●', 'Committed Conservatives back the Republican nominee in an open seat.'],
      ['FF', 'Gutiérrez', '◐', 'Faith and Flag Conservatives back the Republican, though she has not campaigned on faith or patriotic themes.'],
    ]),
    counterArguments: [
      'PR (Gutiérrez ●): But consider that Gutiérrez was still seeking her first win after five runs by 2015 (LA School Report) and has no 2026 website or platform.',
      'EL (Davis ●): But consider that Davis has never served in a legislative body larger than a school board.',
    ],
  },

  // ───────────────────────────── AD-66 ─────────────────────────────
  {
    id: 'assembly-ad66',
    categoryId: 'state-leg',
    title: 'State Assembly, District 66',
    tldrLabel: 'AD-66',
    seatContext: 'Open seat',
    kind: 'candidates',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-66 covers Torrance, the Beach Cities, Palos Verdes Peninsula, Gardena, Lomita, Harbor City and San Pedro, with coastal, landslide and refinery issues.'),
    stakesParagraphs: [
      POWERS,
      'District 66 is open because Democrat Al Muratsuchi is termed out. Two Democrats face off, so the choice is about style and coalition: a prosecutor-mayor backed by labor and party leaders versus a dentist and school-board president backed by nurses and teachers.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Paul Seo took 26.6% and Democrat Sara Deen 24.6%, edging Republican Jessica Zonia Maldonado (21.9%); Republicans together drew 37.8% (Statement of Vote). The state party reached no consensus. Muratsuchi endorsed Seo in August. Republican and independent voters will likely decide it.',
    ],
    readingLinks: [
      SOV_LINK,
      BB(66),
      { label: 'Rafu Shimpo — Muratsuchi endorses Seo (Aug 31, 2026)', url: 'https://rafu.com/2026/08/muratsuchi-endorses-seo-for-66th-district/', summary: 'Seo’s endorsement list after the primary.' },
      { label: 'Rafu Shimpo — Six candidates seek Muratsuchi’s seat (May 2026)', url: 'https://rafu.com/2026/05/six-candidates-seeking-muratsuchis-assembly-seat/', summary: 'Primary-era profiles and endorsers of the field.' },
    ],
    candidates: [
      {
        id: 'paul-seo',
        name: 'Paul Seo',
        party: 'D',
        role: 'Mayor/Corruption Prosecutor',
        campaignUrl: 'https://www.paulseo.com/',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary: 'Rancho Palos Verdes councilmember and now mayor; state deputy attorney general after seven years as an LA County prosecutor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'City ordinances as councilmember and mayor; deputy attorney general prosecuting corruption and fraud (campaign site).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Votes on the Rancho Palos Verdes city budget as councilmember and mayor.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Mayor of a district city; campaign cites county aid for landslide-affected residents.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Assembled endorsements from Muratsuchi, Schiff, Bonta, labor and police groups (Rafu Shimpo).' },
          ],
        },
        bio: [
          'Seo, raised by Korean immigrant parents, attended West Point and served as an Army officer at the Korean DMZ. After Loyola Law School he spent seven years as a Los Angeles County deputy district attorney, then became a state deputy attorney general working on corruption and fraud, including the 2021 Huntington Beach oil spill case. He was elected to the Rancho Palos Verdes City Council and is now mayor.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '✓✓ Former violent-crime prosecutor; pledges funding for police, deputies and CHP', comparison: 'Deen focuses on health care and schools rather than policing.' },
          { topic: 'Ethics / government', position: '✓ Leads with cracking down on corruption in Sacramento', comparison: 'Deen also pitches accountability.' },
          { topic: 'Climate', position: '✓ Endorsed by the Sierra Club', comparison: 'Deen has no comparable environmental endorsement found.' },
          { topic: 'Health care', position: '✓ Backed by UNAC/UHCP, SEIU 121RN and Planned Parenthood’s LA County fund', comparison: 'Deen is a dentist backed by CNA and NUHW.' },
          { topic: 'Caucus / ideology', position: '~ Establishment Democrat with police-union and party-leader support', comparison: 'Deen draws grassroots groups like Indivisible South Bay.' },
        ],
        money: CAL_ACCESS,
        endorsements:
          'Al Muratsuchi, Sen. Adam Schiff, Attorney General Rob Bonta, Treasurer Fiona Ma, SEIU California, Teamsters, Sierra Club, law-enforcement groups (Rafu Shimpo, Aug 31, 2026); California Professional Firefighters, ALADS, Planned Parenthood Advocacy Project LA County (campaign site, Oct 2026).',
      },
      {
        id: 'sara-deen',
        name: 'Sara Deen',
        party: 'D',
        role: 'School Boardmember/Businesswoman',
        campaignUrl: 'https://saradeenforca.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Palos Verdes Peninsula Unified board member since 2022 and board president; dentist and co-owner of a Torrance urgent-care clinic.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'School-board policy votes since 2022; helped pass a local education bond (The New Arab).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Board president overseeing a district budget.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Elected Palos Verdes Peninsula trustee; Torrance small-business owner.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No state legislative record.' },
          ],
        },
        bio: [
          'Deen, a Pakistani American family dentist, co-owns an urgent-care clinic in Torrance. She was elected to the Palos Verdes Peninsula Unified board in 2022 and now serves as president; she helped pass an education bond and opposed book bans. She came to politics through interfaith and labor advocacy. Her priorities are everyday costs, utility and insurance accountability, health access and public schools.',
        ],
        scorecard: [
          { topic: 'Public safety', position: '? No distinctive public-safety platform found', comparison: 'Seo is a career prosecutor.' },
          { topic: 'Ethics / government', position: '✓ Wants a “different approach to Sacramento focused on accountability”', comparison: 'Seo leads on anti-corruption.' },
          { topic: 'Education', position: '✓✓ School-board president; site shows CTA, CFT and CSEA support', comparison: 'Seo has no school-governance record.' },
          { topic: 'Health care', position: '✓✓ Dentist and clinic owner; site shows CNA and NUHW support', comparison: 'Seo has other health-worker unions.' },
          { topic: 'Caucus / ideology', position: '✓ Grassroots progressive coalition (Indivisible South Bay, South Bay Forward)', comparison: 'Seo has party and law-enforcement backing.' },
        ],
        money: CAL_ACCESS,
        endorsements:
          'California Women’s List, National Women’s Political Caucus California, Indivisible South Bay, South Bay Forward (Rafu Shimpo, May 2026); campaign site shows CTA, CNA, CSEA, CFT and NUHW logos (Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Deen', '◐', 'Progressive Left voters lean to Deen, backed by nurses, teachers and Indivisible, over Seo, who has police-union support; both are Democrats.'],
      ['EL', 'Seo', '●', 'Establishment Liberals value Seo’s prosecutor résumé and backing from Schiff, Bonta and the retiring incumbent.'],
      ['DM', 'Seo', '◐', 'Democratic Mainstays lean to the candidate of party leaders and big labor, though the state party stayed neutral.'],
      ['OL', 'Deen', '◐', 'Outsider Left voters prefer Deen’s grassroots coalition and outsider pitch over Seo’s establishment support.'],
      ['SS', 'Seo', '○', 'Stressed Sideliners may favor Seo’s cost-of-living and public-safety message, though Deen also targets everyday costs.'],
      ['AR', 'Seo', '○', 'Ambivalent Right voters may prefer the more centrist, public-safety-focused prosecutor of the two Democrats.'],
      ['PR', 'Seo', '○', 'Populist Right voters may like Seo’s anti-corruption pledge and police funding, the closer fit in a two-Democrat race.'],
      ['CC', 'Seo', '○', 'Committed Conservatives, with no Republican on the ballot, lean to the Army veteran and prosecutor over a school-bond backer.'],
      ['FF', 'Seo', '○', 'Faith and Flag Conservatives may favor the West Point graduate who served at the Korean DMZ.'],
    ]),
    counterArguments: [
      'EL (Seo ●): But consider that Deen has run a school district board and a health business, and her coalition of nurses and teachers is also mainstream Democratic.',
      'CC (Seo ○): But consider that Seo is endorsed by Planned Parenthood and the Sierra Club, so conservatives may prefer to skip this race.',
    ],
  },

  // ───────────────────────────── AD-69 ─────────────────────────────
  {
    id: 'assembly-ad69',
    categoryId: 'state-leg',
    title: 'State Assembly, District 69',
    tldrLabel: 'AD-69',
    seatContext: 'Incumbent',
    kind: 'candidates',
    legalRequirements: LEGAL_LEG,
    qualificationCriteria: ASSEMBLY_CRITERIA('AD-69 covers Long Beach, Signal Hill and Avalon on Catalina Island, including the Port of Long Beach.'),
    stakesParagraphs: [
      POWERS,
      'District 69 covers Long Beach, Signal Hill and Avalon. The incumbent is Speaker pro Tempore, the Assembly’s presiding officer after the Speaker, and the port and 2028 Olympic venues make state infrastructure money a local priority.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democratic incumbent Josh Lowenthal took 68.6% and Democrat Carolyn J. Essex 28.5%, with write-in Republican Rachel Gunther at 2.9% (Statement of Vote). Essex, a legislative policy analyst, is running on homelessness, safety and infrastructure. The runoff turns on whether she can win over Republicans and independents.',
    ],
    readingLinks: [SOV_LINK, BB(69)],
    candidates: [
      {
        id: 'josh-lowenthal',
        name: 'Josh Lowenthal',
        party: 'D',
        role: 'Business Owner/Assemblymember',
        campaignUrl: 'https://a69.asmdc.org/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Assembly member since 2022 and Speaker pro Tempore since December 2024; earlier a teacher and tech and telecom entrepreneur.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'In office since Dec 2022; AB 812 (resentencing for incarcerated firefighters) signed Oct 13, 2025.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Speaker pro Tempore since Dec 2024 (Wikipedia); sits on Education, Privacy, Business and Professions, and Communications.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Grew up in Long Beach; local business owner with children in public schools.' },
            { criterionId: 'coalition', assessment: 'met', evidence: '13 of 36 bills authored in 2025–26 passed, per Digital Democracy.' },
          ],
        },
        bio: [
          'Lowenthal, son of Long Beach politicians Alan and Bonnie Lowenthal, grew up in Long Beach. He taught, then built tech and telecom startups and owned restaurants. He lost a 2018 Assembly race, won this seat in 2022 and 2024, and became Speaker pro Tem in December 2024. In 2026 he proposed limiting social media for children under 16.',
        ],
        recordVsChange:
          'Lowenthal holds the Assembly’s No. 2 presiding post and a strong progressive record; Essex offers a fresh focus on street homelessness and infrastructure but no legislative record, so change would cost the district that leadership seat.',
        scorecard: [
          { topic: 'Housing & homelessness', position: '? No signature housing bill found', comparison: 'Essex makes street homelessness her top issue.' },
          { topic: 'Climate', position: '✓✓ 94% California Environmental Voters, 90% Sierra Club', comparison: 'Essex has no stated climate position.' },
          { topic: 'Tech & kids', position: '✓ Bills on kids’ social media, data brokers and online nitrous-oxide sales', comparison: 'Essex has no stated tech position.' },
          { topic: 'Taxes & business', position: '✗ 0% CalChamber and Howard Jarvis Taxpayers Association', comparison: 'Essex has no stated tax position.' },
          { topic: 'Caucus / ideology', position: '✓ Progressive: 98% Courage California, 93% California Labor Federation', comparison: 'Essex runs on services and infrastructure without a clear ideological label.' },
        ],
        money: CAL_ACCESS,
        endorsements: NO_ENDORSE,
      },
      {
        id: 'carolyn-essex',
        name: 'Carolyn J. Essex',
        party: 'D',
        role: 'Legislative Policy Analyst',
        campaignUrl: 'https://carolynjessex.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary: 'Legislative policy analyst and community activist; her campaign cites 18 years in City of Los Angeles civil service.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Ballot designation is legislative policy analyst; employer and duties not published.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of budget or committee work found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Community activist; 18 years of City of LA civil service per campaign (via The Ballot Brief).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record found.' },
          ],
        },
        bio: [
          'Essex describes herself as a legislative policy analyst, community activist and “candidate for real change.” Her campaign cites 18 years in City of Los Angeles civil service and lists reducing street homelessness, improving public safety and fixing neglected infrastructure as priorities. She pledges to be an “accessible” Assembly member; no endorsements are listed.',
        ],
        scorecard: [
          { topic: 'Housing & homelessness', position: '✓ Top priority is reducing street homelessness', comparison: 'Lowenthal has no signature housing bill.' },
          { topic: 'Public safety', position: '✓ Lists improving public safety', comparison: 'Lowenthal authored a resentencing bill for incarcerated firefighters.' },
          { topic: 'Infrastructure', position: '✓ Neglected infrastructure', comparison: 'Lowenthal lists port and Olympic infrastructure.' },
          { topic: 'Caucus / ideology', position: '? Democrat; no detailed platform or endorsements', comparison: 'Lowenthal is a progressive Democrat in leadership.' },
        ],
        money: CAL_ACCESS,
        endorsements: 'None listed on her campaign site (Oct 2026).',
      },
    ],
    crossTypology: ct([
      ['PL', 'Lowenthal', '●', 'Progressive Left voters back Lowenthal, the more clearly progressive of the two Democrats, with 98% Courage California and strong labor scores.'],
      ['EL', 'Lowenthal', '●', 'Establishment Liberals value an incumbent in Assembly leadership as Speaker pro Tem.'],
      ['DM', 'Lowenthal', '●', 'Democratic Mainstays stay with the established Democratic incumbent and a well-known Long Beach family.'],
      ['OL', 'Essex', '○', 'Outsider Left voters may prefer a self-styled change candidate over a political-dynasty leader, though her platform is thin.', 'Experience-first Outsider Left voters could back Lowenthal, whose voting record is strongly progressive and who holds a leadership post; they give up a vote against dynasty politics.'],
      ['SS', 'Lowenthal', '○', 'Stressed Sideliners get a slight edge from the incumbent’s record, though Essex’s homelessness focus speaks to daily concerns.'],
      ['AR', 'Essex', '○', 'Ambivalent Right voters, with no Republican on the ballot, may lean to Essex’s safety and infrastructure focus over Lowenthal’s 0% business scores.', 'Experience-first Ambivalent Right voters could back Lowenthal, a businessman and Speaker pro Tem; they give up a protest against his anti-business voting record.'],
      ['PR', 'Essex', '○', 'Populist Right voters may favor the challenger over a political-family insider.', 'Experience-first Populist Right voters could back Lowenthal, who has passed laws and holds leadership; they give up a vote against an establishment insider.'],
      ['CC', 'Essex', '○', 'Committed Conservatives, facing two Democrats, may lean to Essex as a check on an incumbent with 0% HJTA alignment.', 'Experience-first Committed Conservatives could back Lowenthal, a former business owner with a legislative record; they give up a protest against his tax votes.'],
      ['FF', 'Essex', '○', 'Faith and Flag Conservatives may lean to Essex’s public-safety focus over a progressive leader.', 'Experience-first Faith and Flag Conservatives could back Lowenthal, whose kids’-online-safety bills align with family concerns; they give up a vote against his progressive record.'],
    ]),
    counterArguments: [
      'OL (Essex ○): But consider that Essex has published few specifics or endorsements, while Lowenthal’s votes already align with progressive groups.',
      'CC (Essex ○): But consider that Essex is also a Democrat with no stated tax position, so a vote for her may not move policy right.',
    ],
  },
];
