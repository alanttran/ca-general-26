import type { Race, QualificationCriterion } from '../../types/ballot-types';
import { ct } from './helpers';

const LEGAL_ASSEMBLY =
  'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

const NO_FILING_TOTALS = 'No current filing totals published; see Cal-Access at https://cal-access.sos.ca.gov/.';

function criteria(districtDetail: string): QualificationCriterion[] {
  return [
    { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
    { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
    { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtDetail },
    { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
  ];
}

export const RACES_SD_LEGISLATURE_B: Race[] = [
  {
    id: 'assembly-ad77',
    categoryId: 'state-leg',
    title: 'State Assembly, District 77',
    tldrLabel: 'AD-77',
    legalRequirements: LEGAL_ASSEMBLY,
    qualificationCriteria: criteria('AD-77 covers Carlsbad, Encinitas, Solana Beach, Del Mar and coastal San Diego neighborhoods from La Jolla south to Coronado.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members write and vote on state laws and the budget, serve two-year terms, and sit on committees that shape housing, utilities, coastal protection, education and public-safety policy for coastal North County and parts of San Diego.',
      'In a safely Democratic seat, the question is whether voters keep a four-term Democratic committee chair or send a Republican challenger to a chamber where Democrats hold a large majority.',
    ],
    introParagraphs: [
      'Democratic incumbent Tasha Boerner won the June 2 primary with 61.8% to Republican Trinity Hannaway’s 38.2% (Secretary of State returns via The Ballot Brief).',
      'Boerner is a heavy favorite. Hannaway is executive director of Reform California, per KPBS, and had no campaign website listed as of Sept 27, 2026. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 77',
        url: 'https://theballotbrief.com/state/california/san-diego-county/california-assembly-district-77',
        summary: 'Neutral roster page with primary results and both finalists’ designations.',
      },
      {
        label: 'KPBS — 2026 general election guide to party endorsements',
        url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian',
        summary: 'Which local parties and groups endorsed each finalist.',
      },
      {
        label: 'CalMatters Digital Democracy — Tasha Boerner',
        url: 'https://calmatters.digitaldemocracy.org/legislators/tasha-boerner-horvath-165421',
        summary: 'Bills, votes and committee record.',
      },
    ],
    candidates: [
      {
        id: 'tasha-boerner',
        photoSlug: 'tasha-boerner',
        name: 'Tasha Boerner',
        party: 'D',
        role: 'California State Assemblymember',
        campaignUrl: 'https://boerner.asmdc.org',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Assemblymember since December 2018 who chairs the Communications and Conveyance Committee, after serving on the Encinitas City Council.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since 2018 (four terms); authored AB 87 (density bonus law), signed per her legislator profile, and 2026 bills including AB 2253.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chairs the Assembly Communications and Conveyance Committee for the 2025–2026 session.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Encinitas city councilmember before the Assembly; represents Carlsbad, Encinitas, Solana Beach, Del Mar and coastal San Diego.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Has had bills signed and others vetoed (e.g., AB 86, AB 399 per her legislator profile); AB 87 cleared the Assembly 54-0.' },
          ],
        },
        bio: [
          'First elected in 2018 and re-elected through 2024. Former Encinitas city councilmember with a B.A. in political science from UC Berkeley and an M.A. in international studies from Claremont Graduate University.',
          'Chairs the Assembly Communications and Conveyance Committee. Her bills include AB 87 on density bonus law, aimed at making it produce homes rather than high-rise hotels, and AB 2253 on recycled-content labeling claims.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Authored AB 87 so Density Bonus Law is used primarily to build residential units; AB 87 passed the Assembly 54-0', comparison: 'Hannaway has no public housing platform.' },
          { topic: 'Climate', position: '✓ Authored AB 2253 on recycled-content labeling claims (passed the Assembly 42-19 in 2026)', comparison: 'Hannaway has no public climate position.' },
          { topic: 'Education', position: '? Authored AB 86 on health-education instructional materials; it was vetoed', comparison: 'Hannaway has no public education position.' },
          { topic: 'Public safety', position: '? No signature public-safety bill identified', comparison: 'Hannaway has no public public-safety position.' },
          { topic: 'Taxes', position: '? No signature tax measure identified', comparison: 'Hannaway’s organization, Reform California, campaigns against tax increases, but her own stance is not public.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat; endorsed by the San Diego County Democratic Party', comparison: 'Hannaway is aligned with Reform California and the county Republican Party.' },
        ],
        recordVsChange:
          'Boerner offers seniority, a committee chair and a record of housing and utility-oversight bills; changing to Hannaway would swap that influence for a first-time candidate with no public platform in a seat where Republicans have little power to affect outcomes.',
        money: NO_FILING_TOTALS,
        endorsements: 'San Diego County Democratic Party (KPBS endorsement guide, Sept 30, 2026).',
        notes: ['Won 61.8% in the June 2 primary.'],
      },
      {
        id: 'trinity-hannaway',
        name: 'Trinity Hannaway',
        party: 'R',
        role: 'Taxpayer Advocate',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'Executive director of Reform California and a former district outreach director for a neighboring Assembly member, per KPBS; no elected or committee experience found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record of drafting or passing legislation found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of committee or budget experience found.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Served as district outreach director for a neighboring Assembly member (KPBS); no elected local role found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of passing legislation found; leads Reform California, a political action committee (KPBS).' },
          ],
        },
        bio: [
          'Listed on the ballot as a “taxpayer advocate.” KPBS reports she is executive director of Reform California and was previously district outreach director for a neighboring Assembly member.',
          'She had no campaign website and did not respond to KPBS requests about her priorities as of Sept 2026.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? No public position found', comparison: 'Boerner authored the density-bonus bill AB 87.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Boerner authored the recycled-content labeling bill AB 2253.' },
          { topic: 'Education', position: '? No public position found', comparison: 'Boerner’s health-education materials bill AB 86 was vetoed.' },
          { topic: 'Public safety', position: '? No public position found', comparison: 'Boerner has no signature public-safety bill identified.' },
          { topic: 'Taxes', position: '? Her own stance is not public; her employer opposes tax increases', comparison: 'Boerner has no signature tax measure identified.' },
          { topic: 'Caucus / ideology', position: '~ Conservative-aligned through Reform California', comparison: 'Boerner is a mainstream Democrat in a Democratic supermajority chamber.' },
        ],
        money: NO_FILING_TOTALS,
        endorsements: 'Republican Party of San Diego County and Reform California (KPBS endorsement guide, Sept 30, 2026).',
        notes: ['Won 38.2% in the June 2 primary.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Boerner', '●', 'Progressive Left voters get a reliable Democratic chair with housing and consumer-protection bills against a challenger with no public platform.'],
      ['EL', 'Boerner', '●', 'Establishment Liberals value a four-term incumbent with a committee chairmanship and an institutional record.'],
      ['DM', 'Boerner', '●', 'Democratic Mainstays back the county Democratic Party’s endorsed incumbent.'],
      ['OL', 'Boerner', '○', 'Outsider Left voters distrust legislative insiders, but the alternative is a Reform California executive on the right.'],
      ['SS', 'Boerner', '○', 'Stressed Sideliners get an incumbent with concrete bills to judge, while Hannaway offers few specifics.'],
      ['AR', 'Boerner', '○', 'Ambivalent Right voters may accept a pro-housing-supply incumbent given the challenger’s thin public record.'],
      ['PR', 'Hannaway', '◐', 'Populist Right voters favor a Reform California-aligned outsider over a long-serving legislator, though she offers little detail.'],
      ['CC', 'Hannaway', '◐', 'Committed Conservatives choose the Republican nominee as the default against a Democratic committee chair.'],
      ['FF', 'Hannaway', '◐', 'Faith and Flag Conservatives lean to the Republican in a Democratic seat, though her positions are unknown.'],
    ]),
    counterArguments: [
      'PR (Hannaway ◐): But consider that with no platform or website, a Hannaway vote is mostly a party protest rather than a policy choice.',
      'OL (Boerner ○): But consider that Boerner is a four-term incumbent and committee chair, the insider profile Outsider Left voters distrust.',
    ],
  },
  {
    id: 'assembly-ad79',
    categoryId: 'state-leg',
    title: 'State Assembly, District 79',
    tldrLabel: 'AD-79',
    legalRequirements: LEGAL_ASSEMBLY,
    qualificationCriteria: criteria('AD-79 covers parts of southeastern San Diego, El Cajon, La Mesa, Lemon Grove and Spring Valley.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members write and vote on state laws and the budget, serve two-year terms, and sit on committees that shape health care, nutrition assistance, housing, education and public-safety policy for southeastern San Diego and East County.',
      'In a safely Democratic seat, the question is whether voters keep a first-term Democratic leader on health and food-assistance policy or send a Republican challenger to a chamber where Democrats hold a large majority.',
    ],
    introParagraphs: [
      'Democratic incumbent LaShae Sharp-Collins won the June 2 primary with 64.7% to Republican Andrew Lawson’s 35.3% (Secretary of State Statement of Vote).',
      'Sharp-Collins is a heavy favorite. Lawson’s campaign site had no readable biography as of Oct 4, 2026, per The Ballot Brief. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 79',
        url: 'https://theballotbrief.com/state/california/san-diego-county/california-assembly-district-79',
        summary: 'Neutral roster page with primary results and both finalists’ stated priorities.',
      },
      {
        label: 'KPBS — 2026 general election guide to party endorsements',
        url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian',
        summary: 'Which local parties and groups endorsed each finalist.',
      },
      {
        label: 'Assemblymember Sharp-Collins — official biography',
        url: 'https://sharp-collins.asmdc.org/biography',
        summary: 'Official bio listing committees and leadership posts.',
      },
    ],
    candidates: [
      {
        id: 'lashae-sharp-collins',
        photoSlug: 'lashae-sharp-collins',
        name: 'LaShae Sharp-Collins',
        party: 'D',
        role: 'Incumbent',
        campaignUrl: 'https://sharp-collins.asmdc.org',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'First-term Assemblymember (since December 2024) who is Assistant Majority Leader for Policy and Research and sits on the Health, Appropriations and Budget committees, after work in education and as a district director.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since December 2024; her official site reports six bills signed by the governor; authored AB 1211 (2025) on CalFresh benefit levels.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Serves on the Health, Appropriations and Budget committees and co-chairs the Select Committee on CalFresh Enrollment and Nutrition.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Born and raised in San Diego; district director for Shirley Weber; community engagement specialist at the San Diego County Office of Education.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Appointed Assistant Majority Leader for Policy and Research in her first term; California Democratic Party-endorsed in 2024.' },
          ],
        },
        bio: [
          'Elected in 2024, succeeding Akilah Weber. Born and raised in San Diego, with a B.A. and master’s in education and an Ed.D. from San Diego State University, where she was an adjunct professor in Africana studies.',
          'She worked at the San Diego County Office of Education and as district director for Shirley Weber. In the Assembly she is Assistant Majority Leader for Policy and Research and focuses on health policy, CalFresh and nutrition, and housing affordability.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Lists housing affordability as a top priority', comparison: 'Lawson also lists housing affordability but has no published plan.' },
          { topic: 'Climate', position: '? No signature climate bill identified', comparison: 'Lawson has no public climate position.' },
          { topic: 'Education', position: '✓ Doctorate in education; former county office of education staff and SDSU adjunct', comparison: 'Lawson lists education among his priorities without detail.' },
          { topic: 'Public safety', position: '? No signature public-safety bill identified', comparison: 'Lawson lists public safety as a priority without detail.' },
          { topic: 'Taxes', position: '? No signature tax measure identified; sits on the Budget Committee', comparison: 'Lawson has no published tax position.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat; endorsed by the county Democratic Party and the Working Families Party', comparison: 'Lawson is endorsed by the county Republican Party and Reform California.' },
        ],
        recordVsChange:
          'Sharp-Collins has used a first term to take leadership and budget-committee roles and to lead on food-assistance policy; Lawson has no legislative record, so changing would trade that early influence for an unproven challenger in a seat Republicans are unlikely to win.',
        money: NO_FILING_TOTALS,
        endorsements:
          'San Diego County Democratic Party and Working Families Party (KPBS endorsement guide, Sept 30, 2026).',
        notes: [
          'Won 64.7% in the June 2 primary.',
          'Co-chairs the Select Committee on CalFresh Enrollment and Nutrition; her October 2025 statement on the federal shutdown’s effect on CalFresh referred back to her earlier bill: https://a79.asmdc.org/press-releases/20251024-assemblymember-dr-lashae-sharp-collins-warns-calfresh-catastrophe',
        ],
      },
      {
        id: 'andrew-lawson',
        name: 'Andrew Lawson',
        party: 'R',
        role: 'Spring Valley Community Planning Group Member',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'Member of the Spring Valley Community Planning Group and, per one profile, an accountant; no legislative, committee or elected experience found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record of drafting or passing legislation found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of committee or budget work found beyond a reported accounting background.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Serves on the Spring Valley Community Planning Group, an advisory land-use body covering part of the district.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of coalition-building or passing legislation found.' },
          ],
        },
        bio: [
          'Listed on the ballot as a member of the Spring Valley Community Planning Group. One profile describes him as an accountant.',
          'His campaign site lists housing affordability, public safety, and government accountability and transparency as priorities, but had no readable biography as of Oct 4, 2026, per The Ballot Brief.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? Lists housing affordability as a priority; no specific proposals found', comparison: 'Sharp-Collins also lists housing affordability as a priority.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Sharp-Collins has no signature climate bill identified.' },
          { topic: 'Education', position: '? Lists education among priorities; no specifics found', comparison: 'Sharp-Collins holds a doctorate in education and worked at the county office of education.' },
          { topic: 'Public safety', position: '? Lists public safety as a priority; no specifics found', comparison: 'Sharp-Collins has no signature public-safety bill identified.' },
          { topic: 'Taxes', position: '? No public position found', comparison: 'Sharp-Collins sits on the Budget Committee.' },
          { topic: 'Caucus / ideology', position: '~ Republican, endorsed by the county party and Reform California', comparison: 'Sharp-Collins is a Democratic leadership member.' },
        ],
        money: NO_FILING_TOTALS,
        endorsements: 'Republican Party of San Diego County and Reform California (KPBS endorsement guide, Sept 30, 2026).',
        notes: ['Won 35.3% in the June 2 primary.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Sharp-Collins', '●', 'Progressive Left voters get a Democrat who leads on CalFresh and nutrition and is endorsed by the Working Families Party.'],
      ['EL', 'Sharp-Collins', '●', 'Establishment Liberals value a leadership-track incumbent on the Health, Appropriations and Budget committees.'],
      ['DM', 'Sharp-Collins', '●', 'Democratic Mainstays back the county Democratic Party’s endorsed incumbent from their own community.'],
      ['OL', 'Sharp-Collins', '○', 'Outsider Left voters distrust leadership insiders, but the alternative is a Republican with no public record in a seat that depends on safety-net policy.'],
      ['SS', 'Sharp-Collins', '○', 'Stressed Sideliners facing food and housing costs get an incumbent focused on CalFresh, while Lawson offers few specifics.'],
      ['AR', 'Sharp-Collins', '○', 'Ambivalent Right voters may favor the incumbent with an actual legislative record over a challenger with no stated plans.'],
      ['PR', 'Lawson', '◐', 'Populist Right voters favor a local planning-group outsider over an Assembly leadership member, though he gives little detail.'],
      ['CC', 'Lawson', '◐', 'Committed Conservatives choose the Republican nominee, an accountant who lists accountability and public safety, as the default against a Democratic leader.'],
      ['FF', 'Lawson', '◐', 'Faith and Flag Conservatives lean to the Republican in a Democratic seat, though his positions are largely unknown.'],
    ]),
    counterArguments: [
      'PR (Lawson ◐): But consider that his campaign has published few specifics, so a Lawson vote is mostly a party choice rather than a policy choice.',
      'OL (Sharp-Collins ○): But consider that she holds a leadership post and is a party-endorsed incumbent, the insider profile Outsider Left voters distrust.',
    ],
  },
  {
    id: 'assembly-ad80',
    categoryId: 'state-leg',
    title: 'State Assembly, District 80',
    tldrLabel: 'AD-80',
    legalRequirements: LEGAL_ASSEMBLY,
    qualificationCriteria: criteria('AD-80 covers Barrio Logan, Logan Heights, Sherman Heights, Otay Mesa, San Ysidro, Chula Vista, National City and Imperial Beach.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members write and vote on state laws and the budget, serve two-year terms, and sit on committees that shape housing, school funding, border and trade, and public-safety policy for the South Bay and southern San Diego.',
      'In a safely Democratic seat, the question is whether voters keep a Democratic budget-subcommittee chair or send a Republican challenger to a chamber where Democrats hold a large majority.',
    ],
    introParagraphs: [
      'Democratic incumbent David Alvarez won the June 2 primary with 59.1%; Republican Alejandro Galicia took 34.2% and fellow Democrat Zenith Khan 6.7% (Secretary of State returns via The Ballot Brief).',
      'Alvarez is a heavy favorite. Neither finalist had a campaign website listed as of Sept 27, 2026. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 80',
        url: 'https://theballotbrief.com/state/california/san-diego-county/california-assembly-district-80',
        summary: 'Neutral roster page with primary results and both finalists’ designations.',
      },
      {
        label: 'KPBS — 2026 general election guide to party endorsements',
        url: 'https://www.kpbs.org/news/politics/2026/09/30/2026-general-election-guide-to-endorsements-from-san-diego-democrats-republicans-green-libertarian',
        summary: 'Which local parties and groups endorsed each finalist.',
      },
      {
        label: 'Voice of San Diego — 2022 report on Alvarez and SDG&E',
        url: 'https://voiceofsandiego.org/2022/03/21/morning-report-alvarez-may-have-broke-ethics-rules-by-connecting-sdge-gomez/',
        summary: 'Reporting on a 2019 city ethics-rule question that Alvarez disputes.',
      },
    ],
    candidates: [
      {
        id: 'david-alvarez',
        photoSlug: 'david-alvarez',
        name: 'David A. Alvarez',
        party: 'D',
        role: 'Assemblymember',
        campaignUrl: 'https://a80.asmdc.org',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Assemblymember since 2022 who chairs the Budget Subcommittee on Education Finance, after eight years on the San Diego City Council.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since 2022; authored housing bills including AB 1449 (2023, CEQA exemption for 100% affordable housing) and AB 1886 (2024, Builder’s Remedy).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Chair of the Assembly Budget Subcommittee on Education Finance (appointed Oct 2023); chaired the Select Committee on CA-MX Binational Affairs.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'San Diego City Council District 8 (2010–2018), which includes Barrio Logan and San Ysidro; represents the South Bay in the Assembly.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Moved housing bills through the Assembly Housing Committee; served on SANDAG, the Metropolitan Transit System and Airport Authority boards.' },
          ],
        },
        bio: [
          'Elected to the Assembly in 2022. Former San Diego city councilmember (2010–2018) and 2013 mayoral candidate who lost the runoff to Kevin Faulconer; earlier a social worker and after-school teacher, with a B.A. in psychology from San Diego State University.',
          'Chairs the Assembly Budget Subcommittee on Education Finance. His housing bills include AB 1449 on CEQA exemptions for 100% affordable projects and AB 1886 on Builder’s Remedy reform.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓✓ Authored AB 1449 (CEQA exemption for 100% affordable housing) and AB 1886 (Builder’s Remedy)', comparison: 'Galicia has no public housing platform.' },
          { topic: 'Climate', position: '? No signature climate bill identified', comparison: 'Galicia has no public climate position.' },
          { topic: 'Education', position: '✓ Chairs the Budget Subcommittee on Education Finance', comparison: 'Galicia has no public education position.' },
          { topic: 'Public safety', position: '? No signature public-safety bill identified', comparison: 'Galicia has no public public-safety position.' },
          { topic: 'Taxes', position: '? No signature tax measure identified; handles education budget', comparison: 'Galicia has no public tax position.' },
          { topic: 'Caucus / ideology', position: '✓ Mainstream Democrat; endorsed by the county Democratic Party', comparison: 'Galicia is endorsed by the county Republican Party and Reform California.' },
        ],
        recordVsChange:
          'Alvarez brings a budget-subcommittee chair and a record of housing-streamlining bills built on eight years of city council service; changing to Galicia would trade that experience for a first-time candidate with no public platform in a seat Republicans have little chance of influencing.',
        money: NO_FILING_TOTALS,
        endorsements: 'San Diego County Democratic Party (KPBS endorsement guide, Sept 30, 2026).',
        redFlags: [
          {
            severity: 'notable',
            status: 'disputed',
            text: 'Voice of San Diego reported in 2022 that Alvarez signed a 2019 contract with SDG&E to gather community feedback on a planned substation and arranged a meeting with then-Council President Georgette Gómez, which could have violated a city rule barring former officials from influencing city decisions for two years after leaving office. Alvarez said he did nothing wrong, that he was not paid to lobby, and that the project was not a municipal decision under the rule.',
            whyItMatters: 'Legislators regularly handle utility and land-use bills, so how a member balances paid consulting and public duties bears on the job.',
            sources: [
              { label: 'Voice of San Diego (Mar 21, 2022)', url: 'https://voiceofsandiego.org/2022/03/21/morning-report-alvarez-may-have-broke-ethics-rules-by-connecting-sdge-gomez/' },
            ],
          },
        ],
        notes: ['Won 59.1% in the June 2 primary.'],
      },
      {
        id: 'alejandro-galicia',
        name: 'Alejandro Galicia',
        party: 'R',
        role: 'Business Owner/Commissioner',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'Small-business owner and military veteran who has run BPI Plumbing since 2005, per his Vote Smart biography; the commission named in his ballot designation is not publicly identified, and no legislative experience was found.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'unknown', evidence: 'No public record of drafting or passing legislation found.' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No public record of committee or budget work found beyond running a small business.' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Runs a Chula Vista plumbing company; the commission referenced in his ballot designation is not publicly identified.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of coalition-building or passing legislation found.' },
          ],
        },
        bio: [
          'Listed on the ballot as “business owner/commissioner.” Per his Vote Smart biography, he is a military veteran who has been principal of BPI Plumbing since 2005.',
          'No campaign website or published platform was available as of Sept 27, 2026.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? No public position found', comparison: 'Alvarez authored AB 1449 and AB 1886 on housing.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Alvarez has no signature climate bill identified.' },
          { topic: 'Education', position: '? No public position found', comparison: 'Alvarez chairs the Budget Subcommittee on Education Finance.' },
          { topic: 'Public safety', position: '? No public position found', comparison: 'Alvarez has no signature public-safety bill identified.' },
          { topic: 'Taxes', position: '? No public position found', comparison: 'Alvarez has no signature tax measure identified.' },
          { topic: 'Caucus / ideology', position: '~ Republican, endorsed by the county party and Reform California', comparison: 'Alvarez is a mainstream Democrat.' },
        ],
        money: NO_FILING_TOTALS,
        endorsements: 'Republican Party of San Diego County and Reform California (KPBS endorsement guide, Sept 30, 2026).',
        notes: ['Won 34.2% in the June 2 primary.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Alvarez', '●', 'Progressive Left voters get a Democrat who has pushed to streamline affordable-housing construction against a challenger with no public platform.'],
      ['EL', 'Alvarez', '●', 'Establishment Liberals value an incumbent with a budget-subcommittee chair and years of city and regional-board experience.'],
      ['DM', 'Alvarez', '●', 'Democratic Mainstays back the county Democratic Party’s endorsed incumbent.'],
      ['OL', 'Alvarez', '○', 'Outsider Left voters distrust political insiders, and his disputed 2019 SDG&E contract adds to that, but the alternative is a Reform California-backed Republican.'],
      ['SS', 'Alvarez', '○', 'Stressed Sideliners get an incumbent with concrete housing bills, while Galicia offers few specifics.'],
      ['AR', 'Alvarez', '○', 'Ambivalent Right voters may accept a housing-streamlining Democrat with a business-friendly CEQA stance given the challenger’s thin record.'],
      ['PR', 'Galicia', '◐', 'Populist Right voters favor a small-business-owner outsider over a longtime officeholder, though he gives little detail.'],
      ['CC', 'Galicia', '◐', 'Committed Conservatives choose the Republican nominee, a veteran business owner, as the default against a Democratic committee chair.'],
      ['FF', 'Galicia', '◐', 'Faith and Flag Conservatives lean to the Republican in a Democratic seat, though his positions are unknown.'],
    ]),
    counterArguments: [
      'OL (Alvarez ○): But consider that the disputed 2019 SDG&E question reported by Voice of San Diego and his long career in office fit the insider profile Outsider Left voters distrust; Alvarez denies any violation.',
      'PR (Galicia ◐): But consider that without a platform or website, a Galicia vote is mostly a party protest rather than a policy choice.',
    ],
  },
];
