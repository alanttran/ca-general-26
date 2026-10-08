import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Wave 3 districts for ZIPs 92868 (Orange, Orange County) and 92562 (Murrieta, Riverside County):
 * CA-46, CA-40, SD-34, SD-32, AD-68, AD-71.
 * Primary shares: California Secretary of State Statement of Vote, June 2, 2026 primary.
 * Finalists/designations: SoS certified general-election lists and county registrar filings (Oct 8, 2026).
 */

const FED_LEGAL =
  'At least 25 years old, a U.S. citizen for at least 7 years, and an inhabitant of California when elected (U.S. Constitution art. I, section 2); two-year term.';
const LEG_LEGAL =
  'At least 18, a registered voter, a U.S. citizen, and a California resident for 3 years and a resident of the district for 1 year before the election (California Constitution art. IV, section 2); limited to 12 years total in the Legislature.';

const FED_CRITERIA = [
  { id: 'lawmaking', label: 'Lawmaking and policy experience', detail: 'The job is writing, amending and voting on federal law.' },
  { id: 'committee-budget', label: 'Committee and budget/appropriations work', detail: 'Most legislative work happens in committees that shape spending and oversight.' },
  { id: 'district-service', label: 'Constituent services and knowledge of the district', detail: 'Members run casework offices and carry local priorities to Washington.' },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Little becomes law without bipartisan or cross-chamber partners.' },
];

const ASM_CRITERIA = (districtNote: string) => [
  { id: 'lawmaking', label: 'Lawmaking or policy experience', detail: 'Assembly members write, amend and vote on state statutes.' },
  { id: 'committee-budget', label: 'Committee leadership and budget work', detail: 'Committee chairs and budget votes shape what reaches the floor.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtNote },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

const SEN_CRITERIA = (districtNote: string) => [
  { id: 'law-policy', label: 'Lawmaking, legal drafting or policy experience', detail: 'Senators write, amend and vote on state statutes and confirm appointees.' },
  { id: 'budget-oversight', label: 'Budget and committee work', detail: 'The state budget and policy committees are central to a senator’s workload.' },
  { id: 'public-mgmt', label: 'Managing a public agency or elected body', detail: 'Experience running or governing a public organization transfers to oversight of state agencies.' },
  { id: 'district-service', label: 'Knowledge of the district and constituent services', detail: districtNote },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Bills need majorities in both houses and the governor’s signature.' },
];

export const RACES_OC_RIVERSIDE_DISTRICTS: Race[] = [
  // ---------------------------------------------------------------- CA-46
  {
    id: 'us-rep-ca46',
    categoryId: 'federal',
    title: 'U.S. Representative, 46th District',
    tldrLabel: 'CA-46',
    legalRequirements: FED_LEGAL,
    qualificationCriteria: FED_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense spending, and oversight of the executive branch, and staffs a casework office that helps constituents with veterans’ benefits, passports and federal agencies.',
      'At stake is central Orange County’s voice in a closely divided House: whether the district keeps a Democrat who sits on the Homeland Security and Judiciary committees or sends a first-time Republican to Congress.',
    ],
    introParagraphs: [
      'CA-46 covers central Orange County, including parts of Santa Ana, Anaheim and Orange; 2026 is the first election on the lines voters approved with Proposition 50 in November 2025. Incumbent Democrat Lou Correa led the June 2 primary with 51.9% to Republican David Pan’s 32.9%; Democrat Christian Mendez took 7.8% (certified Statement of Vote).',
      'Cook Political Report rates the seat Solid Democratic, and Correa beat Pan 63.4% to 36.6% in 2024. Pan, a UC Irvine German professor, is making his second run. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'Cook Political Report — CA-46 race rating',
        url: 'https://www.cookpolitical.com/house/race/482046',
        summary: 'Independent rating page for the district (Solid Democratic).',
      },
      {
        label: 'Rep. Lou Correa — press releases',
        url: 'https://correa.house.gov/news/press-releases',
        summary: 'Official releases on his 2026 votes on ACA credits and DHS/ICE funding (his office’s framing).',
      },
    ],
    candidates: [
      {
        id: 'lou-correa',
        photoSlug: 'lou-correa',
        name: 'Lou Correa',
        party: 'D',
        role: 'United States Congressmember',
        campaignUrl: 'https://www.loucorrea.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Five-term congressman who earlier served in the Assembly (1998–2004), on the Orange County Board of Supervisors, and in the State Senate (2006–2014); sits on Homeland Security and Judiciary.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'In the House since January 2017; previously six years in the Assembly and eight in the State Senate (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Homeland Security Committee (ranking member, Subcommittee on Border Security and Enforcement) and Judiciary Committee; no seat on Appropriations or Budget.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Lives in Santa Ana; Orange County Supervisor 2005–2006 and a legislator for Orange County districts since 1998.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Member of the New Democrat Coalition; named one of six Democrats on the bipartisan task force on the 2024 Trump assassination attempt (Wikipedia).' },
          ],
        },
        bio: [
          'Santa Ana Democrat, born in East Los Angeles, with a B.A. from Cal State Fullerton and J.D. and MBA from UCLA; a former investment banker and real estate broker. He has represented the district since 2017 after the Assembly, county board and State Senate.',
          'A moderate Democrat who sits on Homeland Security and Judiciary and belongs to the New Democrat Coalition.',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '? No public position found',
            comparison: 'Pan has no public housing position found.',
          },
          {
            topic: 'Climate',
            position: '? No public position found',
            comparison: 'Pan has no public climate position found.',
          },
          {
            topic: 'Health care',
            position: '✓✓ Voted Jan 8, 2026 for H.R. 1834, extending enhanced ACA tax credits for three years (Roll Call 11)',
            comparison: 'Pan has floated health-insurance vouchers in place of current programs (Ballot Brief).',
          },
          {
            topic: 'Immigration',
            position: '~ Voted against 2026 DHS/ICE funding bills (Feb, June and July), citing too little oversight; sits on the Border Security subcommittee',
            comparison: 'Pan lists secure borders as a priority.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Democratic caucus member; voted no on the July 2025 budget law (H.R. 1) that Republicans passed',
            comparison: 'Pan is endorsed by the California Republican Party and Reform California (campaign release).',
          },
          {
            topic: 'District clout',
            position: '✓ Five terms, two committee seats and a local-government career in the county',
            comparison: 'Pan has no legislative or committee experience.',
          },
        ],
        recordVsChange:
          'Correa brings a decade of House service, Homeland Security and Judiciary seats and an Orange County political career; the case for change rests on partisan preference or on Pan’s welfare-overhaul agenda, since Pan has no record in office and Republicans would be a challenger-minority voice in a Democratic-leaning seat.',
        money:
          'FEC: raised $1.23M and spent $0.61M in the 2025–26 cycle through June 30, 2026 (Q2 report); see https://www.fec.gov/data/candidate/H6CA46116/.',
        endorsements: 'No endorsement list found; he is the Democratic incumbent and has endorsed Avelino Valencia and David Penaloza in other 2026 contests.',
        redFlags: [],
        notes: [
          'In July 2026 Correa voted against the Stop Insider Trading Act, saying it exempted the president and was tied to a voter-ID measure (his office); he says he does not trade individual stocks.',
          'Won 2024 re-election with about 63% against Pan (Wikipedia).',
        ],
      },
      {
        id: 'david-pan',
        name: 'David Pan',
        party: 'R',
        role: 'Professor',
        campaignUrl: 'https://davidpan4congress.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'UC Irvine professor of German since 2006 and a former McKinsey consultant; he has not held public office, and ran against Correa in 2024.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office, legislative staff role or authored legislation found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No committee, budget or appropriations role found.' },
            { criterionId: 'district-service', assessment: 'unknown', evidence: 'UC Irvine faculty since 2006; no casework or public-office experience found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'Editor of the scholarly journal Telos; no record of building legislative coalitions found.' },
          ],
        },
        bio: [
          'Professor of German at UC Irvine since 2006, with earlier posts at Washington University in St. Louis, Stanford and Penn State and a stint as a McKinsey consultant in Los Angeles; B.A. from Stanford and M.A. and Ph.D. from Columbia (campaign release).',
          'He ran against Correa in 2024 on a universal-basic-income plan; in 2026 his campaign lists public safety, secure borders, parental involvement in schools, welfare overhaul and a smaller federal government.',
        ],
        scorecard: [
          { topic: 'Housing', position: '? No public position found', comparison: 'Correa has no public housing position found.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Correa has no public climate position found.' },
          {
            topic: 'Health care',
            position: '~ Replace current welfare and entitlement programs, including a voucher approach for health insurance and a universal basic income (Ballot Brief; 2024 interview)',
            comparison: 'Correa voted to extend the enhanced ACA credits.',
          },
          { topic: 'Immigration', position: '✓ Lists secure borders as a priority (campaign release)', comparison: 'Correa voted against 2026 DHS/ICE funding bills.' },
          {
            topic: 'Trump / House majority',
            position: '? No public position on Trump found; endorsed by the California Republican Party and Reform California',
            comparison: 'Correa votes with the Democratic caucus.',
          },
          { topic: 'District clout', position: '? No office held; second bid for Congress after a 2024 loss', comparison: 'Correa holds two committee seats.' },
        ],
        money: 'FEC: raised $80,726 and spent $77,368 through June 30, 2026 (Q2 report); see https://www.fec.gov/data/candidate/H4CA46137/.',
        endorsements:
          'California Republican Party, Orange County Republican Party, California Republican Assembly, Reform California, New Majority of Orange County (per his campaign release, spring 2026).',
        notes: [
          'In a 2024 interview he described replacing Social Security, Medicare and welfare with a $16,000-a-year universal basic income for adults, keeping current programs for older workers (California Globe, 2024). His 2026 materials do not restate the proposal in detail.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Correa', '◐', 'Progressive Left voters will back the Democrat who voted to extend the ACA credits and against the 2025 budget law and 2026 ICE funding, even though he is a New Democrat rather than a movement progressive.'],
      ['EL', 'Correa', '●', 'Establishment Liberals value a veteran New Democrat with Homeland Security and Judiciary seats who votes with the Democratic caucus on health care and immigration enforcement limits.'],
      ['DM', 'Correa', '●', 'Democratic Mainstays want a reliable Democratic vote to hold the House check on Republican governance and protect the ACA.'],
      ['OL', 'Correa', '○', 'Outsider Left voters distrust long-serving politicians, but Pan’s plan to replace the safety net with a flat payment is a bigger break from what they want.'],
      ['SS', 'Correa', '○', 'Stressed Sideliners worried about health costs get an incumbent who voted to keep ACA credits, while Pan’s welfare-overhaul plan is hard to price.'],
      ['AR', 'Correa', '○', 'Ambivalent Right voters wary of both parties may favor a moderate, long-serving incumbent over a challenger whose signature idea was replacing Social Security for younger workers.'],
      ['PR', 'Pan', '◐', 'Populist Right voters like an outsider professor who wants to shrink federal government and secure the border, though his universal-basic-income idea is unconventional.'],
      ['CC', 'Pan', '◐', 'Committed Conservatives back the California Republican Party-endorsed challenger who promises a smaller federal government and secure borders over a Democratic incumbent.'],
      ['FF', 'Pan', '◐', 'Faith and Flag Conservatives lean to the Republican who stresses border security and parental involvement in schools against a Democrat who opposed 2026 ICE funding.'],
    ]),
    counterArguments: [
      'OL (Correa ○): But consider that Correa has held elected office since 1998, so Outsider Left voters may see an entrenched insider; his votes against 2026 DHS/ICE funding and the 2025 budget law are the counterweight.',
      'CC (Pan ◐): But consider that Pan’s 2024 plan to replace Social Security and Medicare for younger workers with a flat universal payment would replace Social Security and Medicare for younger workers with a flat universal payment, a sweeping change that cuts against a cautious, limited-government approach.',
    ],
  },

  // ---------------------------------------------------------------- CA-40
  {
    id: 'us-rep-ca40',
    categoryId: 'federal',
    title: 'U.S. Representative, 40th District',
    tldrLabel: 'CA-40',
    legalRequirements: FED_LEGAL,
    qualificationCriteria: FED_CRITERIA,
    seatContext: 'Two incumbents (Prop 50)',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense spending, and oversight of the executive branch, and staffs a casework office that helps constituents with veterans’ benefits, passports and federal agencies.',
      'Both finalists are Republicans, so the seat stays Republican; what is at stake is which kind of Republican represents the Inland Empire and southern Orange County: a 33-year Appropriations defense-spending veteran or a second-term member who has styled herself as bipartisan and, more recently, as a Trump loyalist.',
    ],
    introParagraphs: [
      'Proposition 50 redrew California’s House lines in November 2025 and put two sitting Republicans, Ken Calvert (previously CA-41) and Young Kim (CA-40), in the same new seat, which runs from Mission Viejo into Corona, Menifee and Murrieta. In the June 2 primary Calvert took 34.9% and Kim 20.6%; five Democrats split about 43% of the vote and were shut out of the November ballot (certified Statement of Vote). Per Ballotpedia, Calvert represented about 51% of the new district’s residents and Kim about 35%.',
      'Because both candidates are Republicans, this guide picks on ideology and record rather than party. Both have courted Trump voters and accused the other of disloyalty to him; Trump did not endorse in the primary and no endorsement was found since. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'Ballotpedia News — two Republican incumbents face off in CA-40',
        url: 'https://news.ballotpedia.org/2026/07/13/two-republican-incumbents-ken-calvert-and-young-kim-to-face-off-in-general-election-for-californias-40th-congressional-district/',
        summary: 'July 13, 2026 summary of the primary result, district shares, endorsements and campaign ads.',
      },
      {
        label: 'NBC News — Redistricting pits California Republican incumbents against each other',
        url: 'https://www.nbcnews.com/politics/2026-election/redistricting-pits-california-republican-incumbents-fight-survival-rcna343938',
        summary: 'Spring 2026 explainer on how each member is running against the other on Trump loyalty, immigration and tenure.',
      },
      {
        label: 'NOTUS — Two House Republicans will face off for California’s 40th District',
        url: 'https://www.notus.org/2026-election/two-house-republicans-california-40th-district',
        summary: 'Post-primary report on money, Trump loyalty arguments and the Cook rating (Solid Republican).',
      },
    ],
    candidates: [
      {
        id: 'young-kim',
        photoSlug: 'young-kim',
        name: 'Young Kim',
        party: 'R',
        role: 'United States Representative, 40th District',
        campaignUrl: 'https://www.youngkimforcongress.com',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary:
            'Congresswoman since January 2021 and former Assemblywoman (2014–2016), after about two decades on Rep. Ed Royce’s staff; sits on Financial Services and Foreign Affairs.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'In the House since 2021 (CA-39, then CA-40); State Assembly 2014–2016.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Financial Services and Foreign Affairs committees (118th Congress, Wikipedia); no Appropriations seat.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Has represented parts of Orange County for years; about 35% of the new district’s residents are already her constituents (Ballotpedia).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Member of the Problem Solvers Caucus and Republican Main Street Partnership; ranked among the most bipartisan members (her statement, GovTrack per Wikipedia).' },
          ],
        },
        bio: [
          'Korean-born business owner and former longtime staffer to Rep. Ed Royce; won the Assembly in 2014, lost it in 2016, lost the House race in 2018 and won it in 2020. She has held CA-40 since the 2022 redraw.',
          'A GovTrack-rated centrist Republican who belongs to the Problem Solvers Caucus and the Republican Main Street Partnership; in 2026 she markets herself as a “trusted Trump conservative.”',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '? No specific housing legislation found; supports a larger SALT deduction and cites lower costs',
            comparison: 'Calvert also lists no housing bill and focuses on transportation and water funding.',
          },
          {
            topic: 'Climate',
            position: '~ Member of the Climate Solutions Caucus (Wikipedia); voted for the July 2025 budget law',
            comparison: 'Calvert talks of lowering gasoline prices by increasing in-state energy supply.',
          },
          {
            topic: 'Health care',
            position: '~ Voted no on H.R. 1834 (Jan 8, 2026) extending enhanced ACA credits; voted yes on the July 2025 budget law',
            comparison: 'Calvert voted the same way on both.',
          },
          {
            topic: 'Immigration',
            position: '~ Cosponsored the DIGNIDAD Act, pairing stricter enforcement with a path to legal status (Wikipedia); campaigns on safety and law enforcement',
            comparison: 'Calvert authored the E-Verify law and attacks Kim over the path-to-status bill.',
          },
          {
            topic: 'Trump / House majority',
            position: '~ Opposed Trump’s second impeachment but backed censure; voted against the Pennsylvania electoral-vote objection on Jan 7, 2021 and did not vote on the Arizona one; now campaigns as a Trump ally',
            comparison: 'Calvert voted to sustain both objections and says Kim has distanced herself from Trump.',
          },
          {
            topic: 'District clout',
            position: '~ Two terms in this seat, but no Appropriations seat; touts term limits and a stock-trading ban',
            comparison: 'Calvert chairs the Appropriations defense panel and says he has delivered billions in federal money.',
          },
        ],
        recordVsChange:
          'Kim offers a more bipartisan, more moderate profile and has outraised Calvert, but a newer committee profile; the case for change is her record of Trump-skeptical statements and a path-to-status bill that Calvert argues disqualifies her with the party’s base.',
        money:
          'FEC through June 30, 2026 (Q2 report): raised $8.84M, spent $8.89M, $1.68M cash on hand; see https://www.fec.gov/data/candidate/H8CA39240/.',
        endorsements:
          'Association of Orange County Deputy Sheriffs and nearly 100 local and state elected and education officials (her statement); Senate Minority Leader Brian Jones and Americans for Prosperity Action (Ballotpedia, as of July 9, 2026).',
        redFlags: [
          {
            severity: 'notable',
            status: 'documented',
            text:
              'In December 2025 the group End Citizens United filed a complaint alleging Kim left about $50,000 in privately funded trips from 2022 to 2024 (to Israel, South Korea and elsewhere) off her annual financial disclosures. After the complaint was reported she filed amended disclosures listing the trips; her spokeswoman said she follows House rules and “any oversight will be promptly corrected.” No outcome of the complaint was found.',
            whyItMatters: 'Members of Congress must report privately sponsored travel, so accurate disclosure is part of the job.',
            sources: [{ label: 'NOTUS (Dec 2025)', url: 'https://www.notus.org/california/young-kim-complaint-private-travel-end-citizens-united' }],
          },
        ],
        notes: [
          'Kim voted against the Equality Act and the Respect for Marriage Act; she cosponsored a resolution condemning the June 2025 Los Angeles protests (Wikipedia).',
          'Calvert says he gave $10,000 to Kim’s campaign before redistricting and asked for it back; Kim declined (NBC News).',
        ],
      },
      {
        id: 'ken-calvert',
        photoSlug: 'ken-calvert',
        name: 'Ken Calvert',
        party: 'R',
        role: 'U.S. Representative',
        campaignUrl: 'https://calvertforcongress.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Congressman since January 1993 and chair of the Appropriations subcommittee that writes the defense budget; earlier a Riverside County business owner and county Republican Party chair.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'In the House since 1993, authored the original E-Verify bill (1995) and voted for the 2017 tax law (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'House Appropriations Committee; chairs the Defense Subcommittee (118th Congress and per 2026 reporting).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Born and lives in Corona; represented Riverside County seats since 1993 and about 51% of the new district (Ballotpedia).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Worked with Gov. Newsom on 2025 wildfire aid; member of the Republican Main Street Partnership (Wikipedia).' },
          ],
        },
        bio: [
          'Corona Republican first elected in 1992; a former restaurant and real-estate small-business owner who chaired the Riverside County Republican Party (1984–1988). He chairs the Appropriations defense panel and says he has helped secure several billion dollars for Inland Empire transportation, flood-control and water projects.',
          'A longtime proponent of E-Verify and mandatory voter ID (he cites Prop 39, the California Voter ID initiative); he says he alone in the race has ever earned a Trump endorsement.',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '? No housing legislation found; focuses on transportation and flood-control funding',
            comparison: 'Kim cites a larger SALT deduction and no housing bill.',
          },
          {
            topic: 'Climate',
            position: '~ Says he will lower gasoline and energy prices by increasing in-state energy supply; no other climate position found (candidate statement)',
            comparison: 'Kim belongs to the Climate Solutions Caucus.',
          },
          {
            topic: 'Health care',
            position: '~ Voted no on H.R. 1834 (Jan 8, 2026) extending enhanced ACA credits; voted yes on the July 2025 budget law',
            comparison: 'Kim voted the same way on both.',
          },
          {
            topic: 'Immigration',
            position: '✓ Authored the E-Verify law; “consistently supported a strong border” (candidate statement); attacks Kim’s path-to-status bill',
            comparison: 'Kim cosponsored the DIGNIDAD Act with a path to legal status.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Voted to sustain objections to Arizona’s and Pennsylvania’s electoral votes on Jan 6–7, 2021; endorsed by Steve Hilton; Trump has not endorsed in this race',
            comparison: 'Kim voted against the Pennsylvania objection and did not vote on Arizona’s.',
          },
          {
            topic: 'District clout',
            position: '✓✓ 33 years in the House; chairs the Appropriations defense subcommittee',
            comparison: 'Kim has no Appropriations role.',
          },
        ],
        recordVsChange:
          'Calvert brings seniority, an Appropriations gavel and a history of bringing federal money to the Inland Empire; the case for change is his age and tenure, his conflict-of-interest critics, and his votes to challenge the 2020 election results.',
        money:
          'FEC through June 30, 2026 (Q2 report): raised $6.14M and spent $4.91M; see https://www.fec.gov/data/candidate/H2CA37023/. Donations include defense-industry executives and PACs (NOTUS).',
        endorsements:
          'Steve Hilton (Republican nominee for governor), California Republican Assembly and California Congress of Republicans (Ballotpedia, as of July 9, 2026); Menifee, Lake Elsinore and Murrieta mayors and law-enforcement organizations (his statement).',
        redFlags: [
          {
            severity: 'severe',
            status: 'documented',
            text:
              'On Jan 6–7, 2021, Calvert voted “yea” on objections to counting Arizona’s (Roll Call 10) and Pennsylvania’s (Roll Call 11) electoral votes for Joe Biden; both objections failed in the House. Young Kim voted “nay” on the Pennsylvania objection and did not vote on Arizona’s. No public statement from Calvert about the votes was found.',
            whyItMatters: 'Members of Congress take part in counting presidential electoral votes, and sustaining an objection would have discarded a state’s certified result.',
            sources: [
              { label: 'House Clerk — Roll Call 10 (Arizona objection)', url: 'https://clerk.house.gov/Votes/202110' },
              { label: 'House Clerk — Roll Call 11 (Pennsylvania objection)', url: 'https://clerk.house.gov/Votes/202111' },
            ],
          },
          {
            severity: 'notable',
            status: 'disputed',
            text:
              'The Los Angeles Times reported in 2024 that Calvert secured about $100 million in earmarks over two years, including $16 million for transportation projects near commercial rental properties, land and homes he owns. Calvert told the paper there is nothing wrong with investing and that his earmark requests come through local agencies; his campaign disputed some of the Times’ facts. In 2024 End Citizens United asked the House Ethics Committee to investigate gaps in his property disclosures. The committee earlier allowed a Corona transit-hub earmark near seven of his properties because other local owners would benefit as well.',
            whyItMatters: 'Appropriators direct federal money, so the appearance that they benefit personally from their own earmarks bears on trust in the office.',
            sources: [
              { label: 'Talking Points Memo (summarizing LA Times reporting)', url: 'https://talkingpointsmemo.com/?p=183368' },
              { label: 'Sunlight Foundation (2006 land deal)', url: 'https://sunlightfoundation.com/2006/05/15/best-real-estate-deal-ever/' },
              { label: 'The American Prospect (Oct 2024)', url: 'https://prospect.org/2024/10/03/2024-10-03-ca-41-will-rollins-connects-the-dots/' },
            ],
          },
        ],
        notes: [
          'Kim’s ads revisit a 1993 Corona police report in which Calvert was found with a woman in his car; no arrest was made, and he later acknowledged sex with her (Wikipedia). It predates his service as an appropriator and is not rated as a red flag here.',
          'Calvert’s ads call Kim a “RINO” and cite her past criticism of Trump (Ballotpedia). Trump declined to endorse in the primary.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', '—', '—', 'Progressive Left voters have no clear fit when both finalists are Republicans who voted against extending the ACA credits and for the 2025 budget law.'],
      ['EL', 'Kim', '◐', 'Establishment Liberals who must choose between two Republicans lean to the more bipartisan, institutionalist member, who voted against the Pennsylvania electoral-vote objection in 2021 rather than for it.'],
      ['DM', 'Kim', '○', 'Democratic Mainstays choosing between two Republicans favor the one who voted against the Jan 2021 Pennsylvania objection and is rated among the House’s most bipartisan members.'],
      ['OL', '—', '—', 'Outsider Left voters distrust both a 33-year incumbent and a pro-Trump-branded second-term member, so neither is a clear fit.'],
      ['SS', 'Kim', '○', 'Stressed Sideliners tired of partisan fighting may prefer the member with the more bipartisan reputation, though Calvert’s Appropriations clout is the stronger case for delivering local funds.'],
      ['AR', 'Kim', '●', 'Ambivalent Right voters value a pragmatic, bipartisan-rated Republican who backs tax cuts but is not defined by Trump loyalty tests.'],
      ['PR', 'Calvert', '◐', 'Populist Right voters like Calvert’s tougher immigration record (E-Verify, voter ID) and his Jan 2021 votes to challenge the results, a severe red flag, though a 33-year incumbent is hardly an outsider.'],
      ['CC', 'Calvert', '○', 'Committed Conservatives lean to the member endorsed by the California Republican Assembly and Hilton with a harder line on immigration, though his Jan 2021 votes to object to electoral votes are a severe red flag and Kim’s Americans for Prosperity backing is a fiscal counterweight.'],
      ['FF', 'Kim', '○', 'Faith and Flag Conservatives concerned with social issues note Kim voted against the Equality Act and the Respect for Marriage Act, though Calvert’s votes on election integrity and immigration appeal to the same voters.'],
    ]),
    counterArguments: [
      'PR (Calvert ◐): But consider that Calvert voted in January 2021 to sustain objections to Arizona’s and Pennsylvania’s electoral votes, a severe red flag, and as a 33-year appropriator he is the career-politician profile Populist Right voters distrust; Kim’s ads also revisit his 1993 police report.',
      'CC (Calvert ○): But consider that Calvert’s Jan 2021 votes are a severe red flag and that his earmarks-near-his-properties coverage cuts against a limited-government case; Kim also voted for the 2025 budget law and backs term limits and a stock-trading ban.',
      'AR (Kim ●): But consider that Kim’s 2026 Trump embrace follows years of distance, including a censure push, and that she omitted privately funded trips from her disclosures until a complaint; Calvert’s Appropriations seniority may deliver more for the district.',
    ],
  },

  // ---------------------------------------------------------------- SD-34
  {
    id: 'senate-sd34',
    categoryId: 'state-leg',
    title: 'State Senate, District 34',
    tldrLabel: 'SD-34',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: SEN_CRITERIA('SD-34 covers north-central Orange County, including the city of Orange.'),
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the state budget, housing and land-use law, climate and energy rules, public safety and criminal-justice statutes, and confirmations of governor appointees; they serve four-year terms.',
      'The seat is open because Sen. Tom Umberg is termed out and is on the ballot for Board of Equalization instead. In a district that elected a Democrat by 58.8% in 2022, the question is whether a sitting Assemblymember or a former Placentia mayor carries the seat.',
    ],
    introParagraphs: [
      'In the June 2 primary Democratic Assemblymember Avelino Valencia took 65.2% and Republican Rhonda Shader 34.8% (certified Statement of Vote). Shader lost to Umberg 58.8% to 41.2% in 2022.',
      'Valencia is the heavy favorite. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Senate District 34',
        url: 'https://theballotbrief.com/state/california/orange-county/california-senate-district-34',
        summary: 'Neutral roster page with both finalists’ stated priorities and primary results.',
      },
      {
        label: 'California Secretary of State — SD-34 results',
        url: 'https://api.sos.ca.gov/returns/state-senate/district/34',
        summary: 'Official returns page for the district.',
      },
    ],
    candidates: [
      {
        id: 'avelino-valencia',
        photoSlug: 'avelino-valencia',
        name: 'Avelino Valencia',
        party: 'D',
        role: 'California State Assemblymember',
        campaignUrl: 'https://avelinovalencia.com',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary:
            'Assemblymember since December 2022 who chairs the Banking and Finance Committee, after two years on the Anaheim City Council and six years as a legislative staffer.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'Assemblymember since 2022; Digital Democracy lists 35 bills authored this session, 24 passed.' },
            { criterionId: 'budget-oversight', assessment: 'met', evidence: 'Chairs the Assembly Banking and Finance Committee; also sits on Insurance and Governmental Organization (Digital Democracy).' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Anaheim City Council District 4, Dec 2020–Dec 2022; district director for Assemblyman Tom Daly 2016–2022.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Born in Anaheim; represents AD-68, which overlaps the Senate district.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Nine bills signed in 2025 including AB 378 (his office); 24 of 35 current-session bills passed (Digital Democracy).' },
          ],
        },
        bio: [
          'Anaheim Democrat who played college football at San Jose State, holds an MPA from Johns Hopkins, and worked for Assemblyman Tom Daly before winning Anaheim’s District 4 council seat in 2020 and the Assembly in 2022.',
          'He chairs the Banking and Finance Committee; his campaign lists school funding, housing, cost of living, climate and government transparency as priorities.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Pledges to build housing and expand first-time-buyer programs; also cites reducing homelessness (no specific bill on his site)', comparison: 'Shader has no public housing position found.' },
          { topic: 'Climate', position: '✓ Pledges to address climate change and cleaner air (no specifics on his site); Sierra Club alignment 0% (Digital Democracy)', comparison: 'Shader has no public climate position found.' },
          { topic: 'Education', position: '✓✓ Pledges to fully fund schools and improve teacher recruitment; authored AB 2490 on emergency substitute teaching permits (passed)', comparison: 'Shader has no public education position found.' },
          { topic: 'Public safety', position: '✓ Says he authored gun-violence legislation; priority to close a private-party gun-sale loophole around waiting periods', comparison: 'Shader lists public safety as a priority without specifics.' },
          { topic: 'Taxes', position: '~ Pledges to manage tax dollars responsibly; Howard Jarvis alignment 65% (Digital Democracy)', comparison: 'Shader emphasizes tax reform and the Trump tax cuts.' },
          { topic: 'Caucus / ideology', position: '✓ Moderate-to-mainstream Democrat: California Teachers Association 87%, Labor Federation 79%, CalChamber 58% (Digital Democracy)', comparison: 'Shader is a Republican small-business owner.' },
        ],
        recordVsChange:
          'Valencia has four years in the Assembly, a committee chair and a record of bills signed; moving to the Senate keeps that lineage in a safely Democratic seat, while Shader would be a Republican voice in a chamber where Democrats hold a large majority.',
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements:
          'Rep. Lou Correa (Feb 2025, Fullerton Observer). Blue Voter Guide also lists the California Democratic Party, California Labor Federation, California Federation of Teachers and SEIU California; that list may be incomplete.',
        redFlags: [],
        notes: ['Valencia’s Assembly seat is open; his chosen successor, David Penaloza, is in the AD-68 race below.'],
      },
      {
        id: 'rhonda-shader',
        name: 'Rhonda Shader',
        party: 'R',
        role: 'Local Small Businesswoman',
        campaignUrl: 'https://shaderforsenate.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'Placentia city councilmember from 2016 and two-time mayor, a small-business owner and former North Orange County Chamber chair; she has not held state office.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'partial', evidence: 'City ordinances and budgets as a Placentia councilmember; no state legislative role.' },
            { criterionId: 'budget-oversight', assessment: 'partial', evidence: 'Says Placentia’s reserves grew from $49 to more than $15 million during her tenure (her campaign’s claim).' },
            { criterionId: 'public-mgmt', assessment: 'met', evidence: 'Placentia City Council from 2016, including two terms as mayor (campaign site).' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Elected in North Orange County; ran for this seat in 2022 and won 41.2%.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation outside city government found.' },
          ],
        },
        bio: [
          'Small-business owner who joined the Placentia City Council in 2016 after a city-hall embezzlement scandal and served twice as mayor; former chair of the North Orange County Chamber of Commerce.',
          'Her website emphasizes fiscal responsibility, tax reform and small-business regulation; she says Trump’s tax cuts could help California.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? No public position found', comparison: 'Valencia pledges housing and first-time-buyer programs.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Valencia pledges cleaner air and climate action.' },
          { topic: 'Education', position: '? No public position found', comparison: 'Valencia pledges to fully fund schools.' },
          { topic: 'Public safety', position: '✓ Lists public safety and infrastructure as priorities (Ballot Brief); no specific bills', comparison: 'Valencia cites gun-violence legislation.' },
          { topic: 'Taxes', position: '✓✓ Tax reform and “fiscal responsibility” are her stated priorities; says Trump’s tax cuts could help California', comparison: 'Valencia pledges responsible budgeting without a specific tax position.' },
          { topic: 'Caucus / ideology', position: '~ Republican; endorsed by the GOP Union Caucus and Republican Party of Orange County', comparison: 'Valencia is a mainstream Democrat in the Democratic supermajority.' },
        ],
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements:
          'Republican Party of Orange County, Lincoln Club of Orange County, Sen. Tony Strickland, Asm. Phillip Chen, Asm. Laurie Davies, Supervisor Janet Nguyen (her campaign), GOP Union Caucus.',
        notes: ['Won 34.8% in the June primary and 41.2% against Tom Umberg in 2022.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Valencia', '◐', 'Progressive Left voters take the Democrat with 100% Planned Parenthood alignment and a record on gun-violence and education bills, even though his Sierra Club alignment is 0%.'],
      ['EL', 'Valencia', '●', 'Establishment Liberals value a committee chair with a record of bills signed and support from Democratic leaders.'],
      ['DM', 'Valencia', '●', 'Democratic Mainstays back the mainstream Democratic legislator, endorsed by Rep. Correa, against a Republican in a safely Democratic seat.'],
      ['OL', 'Valencia', '○', 'Outsider Left voters distrust legislative insiders, but the alternative is a Republican whose public platform is thin.'],
      ['SS', 'Valencia', '○', 'Stressed Sideliners worried about costs get an incumbent legislator with a housing, school-funding and cost-of-living pledge, though both campaigns are light on specifics.'],
      ['AR', 'Shader', '○', 'Ambivalent Right voters wary of one-party control may favor a local small-business owner who stresses fiscal responsibility, though Valencia’s moderate-labor record is also appealing.'],
      ['PR', 'Shader', '◐', 'Populist Right voters favor a small-business owner and former mayor who attacks Sacramento over a sitting legislator.'],
      ['CC', 'Shader', '●', 'Committed Conservatives prefer the Republican Party-endorsed candidate who emphasizes tax reform and fiscal responsibility.'],
      ['FF', 'Shader', '◐', 'Faith and Flag Conservatives lean to the Republican against a Democrat with a record of gun-control and abortion-rights votes, though Shader has stated no social positions.'],
    ]),
    counterArguments: [
      'AR (Shader ○): But consider that Shader has no public positions on housing, schools or climate, so her fiscal message is hard to weigh against a legislator with a record.',
      'OL (Valencia ○): But consider that Valencia is a leadership-aligned insider who chairs a committee and is the party’s endorsed choice, the profile Outsider Left voters question.',
    ],
  },

  // ---------------------------------------------------------------- SD-32
  {
    id: 'senate-sd32',
    categoryId: 'state-leg',
    title: 'State Senate, District 32',
    tldrLabel: 'SD-32',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: SEN_CRITERIA('SD-32 spans inland Riverside County, including Murrieta and Temecula, with distinct wildfire, water and growth needs.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the state budget, housing and land-use law, climate and energy rules, public safety and criminal-justice statutes, and confirmations of governor appointees; they serve four-year terms.',
      'In a Republican-leaning district, the question is whether voters keep a firefighter-turned-senator who is a vice chair on four committees or send a Democratic physician who has never held office to a chamber with a Democratic supermajority.',
    ],
    introParagraphs: [
      'Republican incumbent Kelly Seyarto took 58.2% in the June 2 primary to Democrat Tiffanie Tate’s 41.8% (certified Statement of Vote). The district covers Murrieta, Temecula and inland Riverside County plus parts of Orange and San Diego counties.',
      'Seyarto is the favorite. Tate is an obstetrician-gynecologist who previously filed to run for Congress. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'KPBS — District 32: Temecula and Northeast County',
        url: 'https://www.kpbs.org/news/politics/2026/04/27/2026-primary-election-california-senate-races-explainer-district-32-anza-borrego-districts-38-40-in-north-county',
        summary: 'Side-by-side explainer on both candidates’ background, priorities, endorsements and fundraising.',
      },
      {
        label: 'Idyllwild Town Crier — Dr. Tiffanie Tate seeks State Senate seat',
        url: 'https://idyllwildtowncrier.com/2026/10/07/dr-tiffanie-tate-seeks-state-senate-seat/',
        summary: 'Oct 7, 2026 profile of Tate (full text behind a membership paywall).',
      },
    ],
    candidates: [
      {
        id: 'tiffanie-tate',
        name: 'Tiffanie Tate',
        party: 'D',
        role: 'Doctor/Educator/Author',
        campaignUrl: 'https://www.votedrtate.com',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'Retired Navy medical officer and obstetrician-gynecologist who has held hospital and community leadership roles; she has not held public office.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'not-met', evidence: 'No elected office, legislative staff role or authored legislation found.' },
            { criterionId: 'budget-oversight', assessment: 'not-met', evidence: 'No budget or committee role found.' },
            { criterionId: 'public-mgmt', assessment: 'partial', evidence: 'Seven years as a Navy general medical officer and “leadership roles within hospitals and community organizations” (ballot statement).' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Delivered babies at local hospitals; lives in the Inland Empire.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of coalition-building in government; her FEC committee still carries the name of her earlier congressional bid.' },
          ],
        },
        bio: [
          'Retired OB/GYN who served seven years in the Navy as a general medical officer (Global War on Terrorism Service Medal), then worked at local hospitals; author and host of the NBC Radio show “Doctors in the House.”',
          'KPBS reports she previously ran for Congress; her platform centers on health care access, housing, cost of living and school funding.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Priorities include access to affordable housing and high-wage jobs (ballot statement)', comparison: 'Seyarto authored SB 233, a housing bill promoting local control, signed in Oct 2025.' },
          { topic: 'Climate', position: '✓ Supports fire prevention, fire-resistant building upgrades, clean energy and green space (KPBS)', comparison: 'Seyarto’s wildfire work focuses on recovery permitting and equipment funding.' },
          { topic: 'Education', position: '✓ Says local schools and hospitals are underfunded; supports public education funding (ballot statement; KPBS)', comparison: 'Seyarto authored SB 308 consolidating community-college fiscal reporting.' },
          { topic: 'Public safety', position: '? No public position found', comparison: 'Seyarto is vice chair of Senate Public Safety and a retired fire battalion chief.' },
          { topic: 'Taxes', position: '? No public position found; says homeowners’ insurance prices are “skyrocketing”', comparison: 'Seyarto voted against the June state budget over tax increases (KPBS).' },
          { topic: 'Caucus / ideology', position: '✓ Democrat; backs Medicare and Medicaid protections and lower drug costs for seniors (KPBS)', comparison: 'Seyarto is a Republican in the Senate minority.' },
        ],
        recordVsChange:
          'Seyarto offers four years of Senate seniority, four vice-chair posts, and a firefighter background suited to the district’s wildfire exposure; the case for change is that a Republican in a supermajority-Democratic Senate has limited power over the budget and housing law, which Tate argues she would address from the majority side.',
        money:
          'Her two largest reported transactions are loans from herself totaling $28,000; other contributions include a UA Local 250 union PAC and the American College of Obstetricians and Gynecologists PAC (KPBS). See Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements:
          'California Democratic Party, California Labor Federation, California Legislative Black Caucus (KPBS); Planned Parenthood Action Fund of the Pacific Southwest and Riverside County Democratic Party (Blue Voter Guide).',
        redFlags: [],
        notes: [],
      },
      {
        id: 'kelly-seyarto',
        photoSlug: 'kelly-seyarto',
        name: 'Kelly Seyarto',
        party: 'R',
        role: 'State Senator',
        campaignUrl: 'https://sr32.senate.ca.gov',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'State senator since December 2022 and Assemblymember before that, with about 35 years as a firefighter ending as a battalion chief and 13 years as a local elected official in Murrieta.',
          criteria: [
            { criterionId: 'law-policy', assessment: 'met', evidence: 'Seven bills from his 2026 package passed both houses by Sept 1, 2026; SB 233 (housing, signed Oct 2025); Assembly 2020–22 and Senate since 2022.' },
            { criterionId: 'budget-oversight', assessment: 'met', evidence: 'Vice chair of Appropriations, Housing, Natural Resources and Public Safety; sits on Budget Subcommittee 5 (Senate site).' },
            { criterionId: 'public-mgmt', assessment: 'met', evidence: '13 years as a local elected official in Murrieta, including terms as mayor (ballot statement); retired Los Angeles County Fire battalion chief (2015).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Lives in Murrieta; has represented the district since 2022.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Passed 7 bills through both houses in a Democratic supermajority; his proposal to exempt military retirement and survivor benefits from state income tax was included in the state budget (his statement).' },
          ],
        },
        bio: [
          'Murrieta Republican, retired Los Angeles County Fire battalion chief and former Murrieta mayor; elected to the Assembly in 2020 and the Senate in 2022. He is vice chair of Senate Appropriations, Housing, Natural Resources and Public Safety.',
          'His ballot statement stresses affordability, public safety, infrastructure and veterans; he says one-party rule in Sacramento has eroded checks and balances.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Authored SB 233 (housing bill promoting local control, signed Oct 16, 2025); vice chair of Senate Housing', comparison: 'Tate lists housing affordability as a priority without a bill.' },
          { topic: 'Climate', position: '~ Vice chair of Natural Resources; authored SB 904 (statewide wildfire-recovery permitting protocol, 2026) and SB 90 (wildfire-prevention funds)', comparison: 'Tate backs fire-resistant infrastructure and clean energy.' },
          { topic: 'Education', position: '~ Authored SB 308 (community-college fiscal reporting, 2026); says every student needs tools to succeed after high school', comparison: 'Tate says schools are underfunded.' },
          { topic: 'Public safety', position: '✓✓ Vice chair of Public Safety; 35 years as a firefighter; authored public-safety and consumer-protection laws (statement)', comparison: 'Tate has no public safety position found.' },
          { topic: 'Taxes', position: '✓ Voted against the June state budget citing tax increases; authored SB 974 (Prop 19 clarification for special-needs trusts)', comparison: 'Tate has no tax position found.' },
          { topic: 'Caucus / ideology', position: '✓ Republican; endorsed by the California Republican Party and California Professional Firefighters (KPBS)', comparison: 'Tate is a Democrat endorsed by the state party and Labor Federation.' },
        ],
        recordVsChange:
          'Seyarto brings legislative seniority for a Republican, four vice-chair posts, and a firefighter’s credibility on wildfire, insurance and emergency response; the case for change is that a minority-party senator has limited leverage on budget and housing fights.',
        money:
          'KPBS reports inconsistent totals for his committee as of Sept 25, 2026 (one figure about $650,000, another about $103,000); top contributors include the California Republican Party and the California Real Estate PAC. See Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements: 'California Republican Party, California Professional Firefighters, Republican Party of San Diego County (KPBS).',
        redFlags: [],
        notes: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Tate', '◐', 'Progressive Left voters back the Democratic physician who prioritizes health care access, reproductive care and protecting Medicaid, even though she has no legislative record.'],
      ['EL', 'Tate', '◐', 'Establishment Liberals value a credentialed professional backed by the state Democratic Party, though Seyarto’s committee experience is the stronger résumé.'],
      ['DM', 'Tate', '●', 'Democratic Mainstays back the California Democratic Party and Labor Federation-endorsed candidate against a Republican incumbent.'],
      ['OL', 'Tate', '○', 'Outsider Left voters like a first-time candidate challenging a long-serving legislator, though she is party-endorsed.'],
      ['SS', 'Tate', '○', 'Stressed Sideliners squeezed by health and insurance costs may favor a doctor who focuses on those costs, while Seyarto’s record is stronger on wildfire and public safety.'],
      ['AR', 'Seyarto', '◐', 'Ambivalent Right voters value a practical firefighter-turned-legislator focused on wildfire, housing and public safety over a first-time challenger.'],
      ['PR', 'Seyarto', '◐', 'Populist Right voters favor a Republican who voted against the budget over tax increases and criticizes one-party rule in Sacramento.'],
      ['CC', 'Seyarto', '●', 'Committed Conservatives back the Republican Party-endorsed incumbent who opposes tax increases and holds vice-chair posts on four committees.'],
      ['FF', 'Seyarto', '◐', 'Faith and Flag Conservatives lean to the Republican against a Democrat who emphasizes reproductive care, though Seyarto’s public positions are mostly on safety and costs.'],
    ]),
    counterArguments: [
      'DM (Tate ●): But consider that Tate has never held office and her FEC committee still bears the name of her earlier congressional bid, so a vote for her is a bet on a newcomer in a chamber where Seyarto already vice-chairs four panels.',
      'CC (Seyarto ●): But consider that a Republican in a Democratic supermajority Senate can seldom block tax or spending bills, so his vote against the June budget seldom decides the outcome.',
    ],
  },

  // ---------------------------------------------------------------- AD-68
  {
    id: 'assembly-ad68',
    categoryId: 'state-leg',
    title: 'State Assembly, District 68',
    tldrLabel: 'AD-68',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: ASM_CRITERIA('AD-68 covers Santa Ana, Anaheim and Orange, with high rents, a large immigrant population and busy commercial corridors.'),
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members write and vote on state laws and the budget, serve two-year terms, and sit on committees that shape housing, health, education and public-safety policy for central Orange County.',
      'The seat is open because Avelino Valencia is running for the Senate. Both finalists are Democrats, so the contest is between a progressive-aligned and a more moderate, establishment-backed Santa Ana councilmember.',
    ],
    introParagraphs: [
      'In the June 2 primary Santa Ana Councilmember David Penaloza took 32.5%, Santa Ana Councilwoman Jessie Lopez 31.4%, Republican Mayra Ruiz 29.4% and Democrat Shannon Wingfield 6.6%; Lopez edged Ruiz by about 1,450 votes for the second slot (certified Statement of Vote).',
      'Because both candidates are Democrats, this guide picks on ideology. Lopez is the more progressive candidate, with tenant-protection, Medicare for All and worker-union backing; Penaloza is the moderate, with the California Democratic Party, Speaker Robert Rivas, police and building-trades support. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'Voice of OC — 2026 primary election night: 68th Assembly District',
        url: 'https://voiceofoc.org/2026/06/2026-primary-election-night-results-68th-state-assembly-district/',
        summary: 'Primary-night report on both candidates’ endorsements and funding.',
      },
      {
        label: 'The Ballot Brief — Assembly District 68',
        url: 'https://theballotbrief.com/state/california/orange-county/california-assembly-district-68',
        summary: 'Roster page with primary results and each candidate’s stated priorities.',
      },
    ],
    candidates: [
      {
        id: 'jessie-lopez',
        name: 'Jessie Lopez',
        party: 'D',
        role: 'City Councilwoman',
        campaignUrl: 'https://www.votejessielopez.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'Santa Ana City Council Ward 3 member since 2020 who helped pass a rent-increase cap and a lobbyist-registration law and survived a 2023 recall; no state or federal legislative service.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Council votes include capping annual rent increases at 3% and a lobbyist-registration law (her statement); city ordinances, not state statutes.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Six years on the city council, which adopts the city budget; no state committee role.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Born and raised in Santa Ana; elected in 2020 and re-elected in 2024 from Ward 3.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Survived a 2023 recall with about 56% of the vote (Voice of OC); backed by SEIU and other unions; legislative coalition-building untested.' },
          ],
        },
        bio: [
          'Born and raised in Santa Ana to immigrant parents from El Salvador, the first in her family to graduate from college; elected to the Santa Ana City Council in 2020 and re-elected in 2024.',
          'Her platform emphasizes affordable rent, tenant protections, Medicare for All, limiting corporate purchases of single-family homes, more public education funding and immigrant rights.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓✓ Council passed a cap limiting rent increases to 3% a year and expanded senior eviction protections (her statement); wants to limit corporate purchases of single-family homes', comparison: 'Penaloza backs middle-class housing construction and is endorsed by CA YIMBY.' },
          { topic: 'Climate', position: '✓ Endorsed by the Sierra Club and California Environmental Voters; supports clean air and water', comparison: 'Penaloza lists combating pollution and clean air and water.' },
          { topic: 'Education', position: '✓ Supports more public education funding', comparison: 'Penaloza backs schools, universal pre-K and career training, and is endorsed by the California Charter Schools Association.' },
          { topic: 'Public safety', position: '~ Says she voted against expanded surveillance technology; faced a police-union-backed recall in 2023, which failed', comparison: 'Penaloza lists neighborhood safety and 911 response times and is endorsed by police associations.' },
          { topic: 'Taxes', position: '? No public tax position found', comparison: 'Penaloza pledges to prevent tax increases.' },
          { topic: 'Caucus / ideology', position: '✓✓ More progressive: Medicare for All, tenant protections, Working Families Party backing and a 100% Planned Parenthood Community Action Fund rating', comparison: 'Penaloza is the moderate with the Democratic Party establishment behind him.' },
        ],
        money:
          'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/. Opposition spending against her has been reported by columnists but no independent total was verified.',
        endorsements:
          'California Working Families Party, SEIU, Sierra Club, California Environmental Voters, CHIRLA, Jane Fonda Climate PAC, Moms Demand Action Gun Sense candidate and a 100% Planned Parenthood Community Action Fund rating (her campaign; Voice of OC).',
        redFlags: [],
        notes: [
          'She survived a November 2023 recall election, backed by the Santa Ana police union and landlord and real-estate groups, with about 56% of the vote (Voice of OC).',
          'A 2025 OC Independent editorial argued she should not have used $2,500 in discretionary council funds on an Anaheim event; it is opinion, not a finding.',
        ],
      },
      {
        id: 'david-penaloza',
        name: 'David Penaloza',
        party: 'D',
        role: 'Councilmember/Dad/Businessman',
        campaignUrl: 'https://davidpenaloza.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'Santa Ana City Council member since December 2018 and Mayor Pro Tem, who chairs the Transportation Corridor Agencies’ toll roads and works full time as a regulatory manager; no state or federal legislative service.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Council votes include creating a Police Oversight Commission in 2020; city ordinances, not state statutes.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Chairs the Transportation Corridor Agencies’ toll roads (appointed 2018); president of the League of California Cities’ Orange County Division (2025).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Lifelong Orange County resident educated in Santa Ana schools; council member since 2018 (Ward 2, now Ward 6).' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Mayor Pro Tem in 2021 and again in 2026; says he helped bring one of the county’s largest community workforce agreements.' },
          ],
        },
        bio: [
          'Lifelong Orange County resident who works as a senior regulatory manager at a Santa Ana plastics-materials firm and holds a B.A. in English from Cal State LA; sworn onto the Santa Ana City Council in December 2018, now representing Ward 6, and Mayor Pro Tem.',
          'His priorities are middle-class housing, neighborhood safety and 911 response times, schools and universal pre-K, local jobs and keeping taxes from rising.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Build middle-class housing; chairs the Toll Roads board; endorsed by CA YIMBY', comparison: 'Lopez emphasizes rent caps and tenant protections.' },
          { topic: 'Climate', position: '✓ Lists combating pollution and protecting clean air and water', comparison: 'Lopez is endorsed by the Sierra Club.' },
          { topic: 'Education', position: '✓ Invest in schools, universal pre-K and career training; endorsed by CTA, CFT and the California Charter Schools Association', comparison: 'Lopez also backs more school funding but not charter groups.' },
          { topic: 'Public safety', position: '✓✓ Created Santa Ana’s Police Oversight Commission in 2020; wants faster 911 response; endorsed by police and firefighter groups and Sheriff Don Barnes', comparison: 'Lopez was targeted by a police-union-backed recall in 2023.' },
          { topic: 'Taxes', position: '✓ Pledges to prevent tax increases and keep tax dollars in California; says he voted against water rate increases', comparison: 'Lopez has no public tax position found.' },
          { topic: 'Caucus / ideology', position: '~ Moderate; California Democratic Party, Speaker Robert Rivas, Rep. Lou Correa and Assemblymember Avelino Valencia back him', comparison: 'Lopez is the more progressive of the two.' },
        ],
        money:
          'No current filing totals found; Voice of OC reported on primary night that his largest support came from tech companies and executives (no dollar figures). See Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements:
          'California Democratic Party, Speaker Robert Rivas, Assemblymember Avelino Valencia, Rep. Lou Correa, Rep. Dave Min, Sheriff Don Barnes, California Teachers Association, California Professional Firefighters, building trades, police and deputy associations, CA YIMBY (his campaign endorsement page).',
        redFlags: [],
        notes: [],
      },
    ],
    crossTypology: ct([
      ['PL', 'Lopez', '●', 'Progressive Left voters choose the further-left Democrat who backs Medicare for All, rent caps and limits on corporate home-buying and has the Working Families Party and Sierra Club behind her.'],
      ['EL', 'Penaloza', '●', 'Establishment Liberals favor the more moderate Democrat backed by the party, Speaker Rivas, teachers and the building trades, and a pro-housing record endorsed by CA YIMBY.'],
      ['DM', 'Penaloza', '●', 'Democratic Mainstays back the California Democratic Party-endorsed candidate with labor, firefighter and law-enforcement support.'],
      ['OL', 'Lopez', '◐', 'Outsider Left voters favor the candidate who beat a well-funded recall and is not the party-establishment pick, though both are sitting council members.'],
      ['SS', 'Penaloza', '○', 'Stressed Sideliners worried about costs and safety may favor the candidate focused on 911 response times and keeping taxes down, though Lopez’s rent cap speaks directly to housing costs.'],
      ['AR', 'Penaloza', '◐', 'Ambivalent Right voters who prefer a moderate Democrat favor the candidate who pledges no tax increases and has police and business backing.'],
      ['PR', 'Penaloza', '○', 'Populist Right voters in a two-Democrat contest lean to the more moderate, law-enforcement-backed candidate over the progressive, a weak preference.'],
      ['CC', 'Penaloza', '○', 'Committed Conservatives in a two-Democrat contest prefer the candidate who promises no tax increases and has police support over the Medicare for All advocate.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no clear fit when both finalists are Democrats with no public stance on their social-values priorities; Penaloza’s police support is the nearest match.'],
    ]),
    counterArguments: [
      'DM (Penaloza ●): But consider that Voice of OC reported his largest support came from tech companies and executives, which may sit poorly with voters wary of corporate influence over the party-backed candidate.',
      'PL (Lopez ●): But consider that her 2023 recall fight drew heavy police-union and landlord opposition, and Medicare for All is a federal question the Legislature cannot enact on its own.',
    ],
  },

  // ---------------------------------------------------------------- AD-71
  {
    id: 'assembly-ad71',
    categoryId: 'state-leg',
    title: 'State Assembly, District 71',
    tldrLabel: 'AD-71',
    legalRequirements: LEG_LEGAL,
    qualificationCriteria: ASM_CRITERIA('AD-71 spans Murrieta, Temecula, Wildomar and southern Orange County communities including Mission Viejo.'),
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members write and vote on state laws and the budget, serve two-year terms, and sit on committees that shape housing, insurance, wildfire, education and public-safety policy for the Temecula Valley and south Orange County.',
      'In a Republican-leaning district, the question is whether voters keep a Republican assemblywoman in the minority party or send a Democratic newcomer who directs a small park district and has never held a legislative seat.',
    ],
    introParagraphs: [
      'Republican incumbent Kate Sanchez took 58.2% in the June 2 primary to Democrat JJ Galvez’s 41.8% (certified Statement of Vote). Sanchez was first elected in 2022.',
      'Sanchez is the favorite. Galvez is an appointed director of the Silverado-Modjeska Recreation and Park District and a tech-industry veteran. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 71',
        url: 'https://theballotbrief.com/state/california/riverside-county/california-assembly-district-71',
        summary: 'Neutral roster page with primary results and Galvez’s stated priorities.',
      },
      {
        label: 'Digital Democracy — Kate Sanchez',
        url: 'https://calmatters.digitaldemocracy.org/legislators/kate-sanchez-165419',
        summary: 'CalMatters profile with committees, bills authored and interest-group alignment.',
      },
    ],
    candidates: [
      {
        id: 'jj-galvez',
        name: 'JJ Galvez',
        party: 'D',
        role: 'Appointed Director, Silverado-Modjeska Recreation and Park District',
        campaignUrl: 'https://jjgalvez.com',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'Thirteen years building technology companies and an appointed, unpaid treasurer of a small park district where Galvez says the budget was balanced after a 30% cut; no legislative or elected office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office, legislative staff role or authored legislation found.' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Unpaid treasurer of the Silverado-Modjeska Recreation and Park District, which Galvez says balanced its budget after a 30% cut (ballot statement).' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Lives in Silverado Canyon; holds an appointed director seat on a district in the Assembly district (candidate site).' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No record of passing legislation or building coalitions in government found; endorsed by Democratic, labor and local officials.' },
          ],
        },
        bio: [
          'Immigrant who came to California on a student visa, became a citizen and spent 13 years in technology consulting and companies; appointed director and unpaid treasurer of the Silverado-Modjeska Recreation and Park District; lives in Silverado Canyon.',
          'The campaign’s priorities are housing and insurance costs, preparing the economy for technological change, and wildfire and flood resilience; Galvez says no corporate PAC money will be accepted.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '✓ Negotiate state volume discounts on construction materials, incentives for affordable housing, curb speculation by private-equity and cash buyers', comparison: 'Sanchez authored AB 2307, a traffic-signal synchronization pilot, and AB 1620 on insurance-premium deductions.' },
          { topic: 'Climate', position: '✓ Link home-insurance discounts to fire-mitigation investment; focuses on wildfire and flood resilience', comparison: 'Sanchez scores 2% with California Environmental Voters and 0% with the Sierra Club (Digital Democracy).' },
          { topic: 'Education', position: '✓ Invest in teacher development, AI-assisted critical-thinking curriculum, community college and trades pathways, early childhood and after-school care', comparison: 'Sanchez authored bills on classroom epinephrine and school-staff misconduct disclosures.' },
          { topic: 'Public safety', position: '~ Supports “appropriate and effective law enforcement” and civil rights; no specific proposals', comparison: 'Sanchez authored bills making AI-generated child sexual-abuse material a felony and strengthening sex-trafficking penalties.' },
          { topic: 'Taxes', position: '~ Freeze gas-tax increases and offer tax holidays to local businesses', comparison: 'Sanchez earns an “A” from the Howard Jarvis Taxpayers Association and says she has never voted for a tax increase.' },
          { topic: 'Caucus / ideology', position: '✓ Democrat who pledges independence and no corporate PAC money; endorsed by the California Democratic Party and CTA', comparison: 'Sanchez is a Republican scoring 100% with CalChamber and the Howard Jarvis Taxpayers Association.' },
        ],
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/. Galvez says no corporate PAC money will be accepted.',
        endorsements:
          'California Democratic Party, California Teachers Association, California Labor Federation, Equality California, Reps. Mike Levin and Dave Min, State Treasurer Fiona Ma, Murrieta Valley USD trustee Nancy Young (campaign site).',
        redFlags: [],
        notes: ['Full legal first name not listed on the ballot or campaign site.'],
      },
      {
        id: 'kate-sanchez',
        photoSlug: 'kate-sanchez',
        name: 'Kate Sanchez',
        party: 'R',
        role: 'California State Assemblywoman',
        campaignUrl: 'https://www.sanchezforassembly.com',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Assemblywoman since December 2022, vice chair of Assembly Health and of Revenue and Taxation, with a Republican minority-caucus record and prior work for Rep. Ed Royce.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assemblymember since 2022; Digital Democracy lists 19 bills this session (1 passed, 9 failed, 9 pending), including AB 2307 on traffic-signal synchronization (passed).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Vice chair of Health and of Revenue and Taxation; also on Human Services, Judiciary and Rules (Digital Democracy).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Lives in Rancho Santa Margarita; has represented the district since 2022.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Only 1 of 19 current-session bills has passed; her statement cites enacted laws on sex trafficking, AI-generated child abuse material and victim notification.' },
          ],
        },
        bio: [
          'Rancho Santa Margarita Republican, formerly on Rep. Ed Royce’s staff and the California Policy Center, who won the Assembly in 2022 after a Republican-versus-Republican general; she is a vice chair of the Health and Revenue and Taxation committees.',
          'Her statement stresses public safety, taxes and the cost of living; she has authored a bill barring transgender girls from girls’ school sports.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '~ Authored AB 2307 (Western Riverside traffic-signal synchronization pilot, passed) and AB 1620 (income-tax deduction for homeowners’ insurance premiums)', comparison: 'Galvez proposes construction-material volume discounts and affordable-housing incentives.' },
          { topic: 'Climate', position: '✗ Aligned 2% with California Environmental Voters and 0% with the Sierra Club (Digital Democracy); backs wildfire preparedness and bars neighborhood pesticide spraying (statement)', comparison: 'Galvez ties insurance discounts to fire mitigation and flood resilience.' },
          { topic: 'Education', position: '~ Authored school epinephrine auto-injector and heat-stroke prevention bills and AB 2365 on school-staff misconduct disclosures; aligned 56% with CTA', comparison: 'Galvez lists teacher development and early childhood care.' },
          { topic: 'Public safety', position: '✓✓ Authored bills making sex trafficking a serious felony, AI-generated child pornography a felony and requiring victim notification before parole; endorsed by Sheriffs Don Barnes and Chad Bianco', comparison: 'Galvez supports “appropriate and effective law enforcement” without specifics.' },
          { topic: 'Taxes', position: '✓✓ “A” rating from Howard Jarvis Taxpayers Association; says she has never voted to raise taxes and will defend Prop 13', comparison: 'Galvez wants a gas-tax freeze and local-business tax holidays.' },
          { topic: 'Caucus / ideology', position: '✓ Conservative: 100% CalChamber and HJTA, 17% Labor Federation, 0% Planned Parenthood; endorsed by the California Republican Party', comparison: 'Galvez is a Democrat endorsed by the state party.' },
        ],
        recordVsChange:
          'Sanchez brings three years in the Assembly, vice-chair posts and a record of public-safety bills, but only one of her current-session bills has passed; changing to Galvez would trade that for a first-time candidate in a minority-party seat where either member’s leverage depends on the majority.',
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements: 'California Republican Party, Sheriffs Don Barnes and Chad Bianco (her statement); Howard Jarvis Taxpayers Association PAC (May 2026 list).',
        redFlags: [],
        notes: ['Barred from joining the Democrat-only California Latino Legislative Caucus (Wikipedia).'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Galvez', '◐', 'Progressive Left voters take the Democrat who prioritizes affordable housing, school investment and wildfire resilience over a legislator who scores 0% with Planned Parenthood and the Sierra Club.'],
      ['EL', 'Galvez', '◐', 'Establishment Liberals favor the Democratic Party-endorsed candidate with a business and public-board background, though Sanchez has far more legislative experience.'],
      ['DM', 'Galvez', '●', 'Democratic Mainstays back the California Democratic Party, CTA and Labor Federation-endorsed candidate in a seat where the only alternative is a Republican.'],
      ['OL', 'Galvez', '○', 'Outsider Left voters like a non-career-politician who refuses corporate PAC money, though Galvez has few specific policy positions.'],
      ['SS', 'Galvez', '○', 'Stressed Sideliners squeezed by housing, insurance and gas costs get a candidate focused on those prices; Sanchez’s tax-cut record also speaks to costs.'],
      ['AR', 'Sanchez', '○', 'Ambivalent Right voters who lean right on taxes and public safety may favor the incumbent’s record, while valuing Galvez’s no-corporate-PAC pledge.'],
      ['PR', 'Sanchez', '◐', 'Populist Right voters favor a Republican with a Howard Jarvis A rating and sheriff endorsements over a Democratic Party-backed newcomer.'],
      ['CC', 'Sanchez', '●', 'Committed Conservatives prefer the California Republican Party-endorsed incumbent with an A from the Howard Jarvis Taxpayers Association and a pledge to defend Prop 13.'],
      ['FF', 'Sanchez', '●', 'Faith and Flag Conservatives favor the incumbent who authored the girls’-sports bill and stresses parental rights and public safety.'],
    ]),
    counterArguments: [
      'CC (Sanchez ●): But consider that only 1 of her 19 current-session bills has passed, so her influence in the Democratic-controlled Assembly appears limited.',
      'DM (Galvez ●): But consider that Galvez has no legislative experience and few specific policy positions, so Democratic voters are choosing on party and promise rather than record.',
    ],
  },
];
