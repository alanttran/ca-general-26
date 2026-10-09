import type { Candidate, CandidateQualification, CriterionAssessment, ExperienceLevel, Race, ScorecardRow } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Los Angeles County contests (ZIPs 90028 and 91501): Sheriff, County Measures A and E, LACCD Trustee Seats 2, 4, 6.
 * Research current as of Oct 7-8, 2026. Money and endorsement dates are stated in-line.
 */

const LACCD_CRITERIA = [
  { id: 'governance', label: 'Governing a large public agency', detail: 'LACCD is a nine-college district serving about 200,000 students; trustees set policy and hire and oversee the chancellor.' },
  { id: 'budget', label: 'Budget and bond oversight', detail: 'Trustees approve the annual budget and oversee a $5.3 billion construction program from the 2022 bond (LA Times voter guide).' },
  { id: 'highered', label: 'Higher-education and student-success knowledge', detail: 'Enrollment, completion and transfer rates are the district’s core measures.' },
  { id: 'workforce', label: 'Workforce and community partnerships', detail: 'Colleges depend on employer, labor and public-agency partnerships for career programs and funding.' },
];

type Cr = [CriterionAssessment['assessment'], string];

function q(level: ExperienceLevel, summary: string, rows: [Cr, Cr, Cr, Cr]): CandidateQualification {
  const ids = ['governance', 'budget', 'highered', 'workforce'];
  return {
    level,
    legal: 'meets',
    summary,
    criteria: rows.map(([assessment, evidence], i) => ({ criterionId: ids[i], assessment, evidence })),
  };
}

function sc(basicNeeds: string, budget: string, construction: string, workforce: string, extra?: ScorecardRow): ScorecardRow[] {
  const rows: ScorecardRow[] = [
    { topic: 'Affordability & basic needs', position: basicNeeds },
    { topic: 'Budget & enrollment', position: budget },
    { topic: 'Bond construction oversight', position: construction },
    { topic: 'Workforce & transfer', position: workforce },
  ];
  if (extra) rows.push(extra);
  return rows;
}

const LACCD_LEGAL = 'Registered voter and resident of the Los Angeles Community College District; the seat is at-large, so the whole district votes.';
const NO_MONEY = 'No campaign finance totals found as of Oct 8, 2026; filings are posted on the LA County Registrar-Recorder campaign-disclosure site.';
const NO_ENDORSE = 'No endorsements found as of Oct 8, 2026.';
const TIMES_S2 = 'LA Times voter guide, Seat 2 (Oct 2026).';
const TIMES_S4 = 'LA Times voter guide, Seat 4 (Oct 1, 2026).';
const TIMES_S6 = 'LA Times voter guide, Seat 6 (Oct 1, 2026).';

const unknownCard = (
  id: string,
  name: string,
  role: string,
  bio: string,
  level: ExperienceLevel,
  summary: string,
  source: string,
  rows: [Cr, Cr, Cr, Cr],
  scorecard: ScorecardRow[],
  notes?: string[],
): Candidate => ({
  id,
  name,
  party: 'NP',
  role,
  bio: [bio],
  scorecard,
  money: NO_MONEY,
  endorsements: NO_ENDORSE,
  qualification: q(level, summary, rows),
  notes: notes ?? [source],
});

const U: Cr = ['unknown', 'No relevant record found.'];

export const RACES_LA_COUNTY: Race[] = [
  {
    id: 'la-sheriff',
    categoryId: 'county',
    title: 'Los Angeles County Sheriff',
    tldrLabel: 'LA County Sheriff',
    seatContext: 'Incumbent (runoff)',
    kind: 'candidates',
    stakesParagraphs: [
      'The Sheriff runs the Los Angeles County Sheriff’s Department: about 8,700 sworn personnel and 5,400 civilian employees, a budget of about $4 billion set by the Board of Supervisors, patrol of 42 contract cities and unincorporated areas, and the county jails, which hold about 14,000 people, nearly half with mental illness (LAist). The Sheriff does not patrol the City of Los Angeles, which has its own police department, but does run the jails that hold people arrested there.',
      'The next four-year term covers the 2028 Olympics security planning, a state lawsuit and a federal investigation into jail conditions, a recruiting shortage, and continuing fights between the department and county oversight bodies over records and access.',
    ],
    introParagraphs: [
      'In the June 2 primary Luna received about 44% and Villanueva about 22% (Registrar results as reported by NBC Los Angeles); Luna did not reach a majority, so the two meet again, as in 2022, when Luna won 61% to 39% (LAist). The office is nonpartisan: the county Democratic Party, the Los Angeles County Federation of Labor and the deputies’ union ALADS back Luna, while the county Republican Party and the Taxpayers Association back Villanueva (LAist). Party registration is not printed on the ballot for either candidate.',
    ],
    legalRequirements:
      'Registered voter and county resident; candidates must meet the peace-officer standards in Gov. Code § 24004.3 (no felony conviction, among others).',
    qualificationCriteria: [
      { id: 'agency', label: 'Leading a large law-enforcement agency', detail: 'The department has more than 14,000 employees and a roughly $4 billion budget.' },
      { id: 'jails', label: 'Running safe, lawful jails', detail: 'The Sheriff operates the nation’s largest county jail system, now under a state suit and a federal investigation.' },
      { id: 'oversight', label: 'Working with civilian oversight', detail: 'The Sheriff must respond to the Inspector General, the Civilian Oversight Commission and the Board of Supervisors.' },
      { id: 'discipline', label: 'Discipline and internal accountability', detail: 'Handling deputy misconduct, use of force and secret deputy groups is a core management task.' },
    ],
    polling: [],
    candidates: [
      {
        id: 'robert-luna',
        photoSlug: 'robert-luna',
        name: 'Robert Luna',
        party: 'NP',
        role: 'Sheriff of Los Angeles County',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Luna has run the department since December 2022, after about seven years as Long Beach police chief. Jail conditions and oversight conflicts during his term are documented below.',
          criteria: [
            { criterionId: 'agency', assessment: 'met', evidence: 'Sheriff of LA County since Dec 2022; Long Beach police chief for about seven years before that (LAist).' },
            { criterionId: 'jails', assessment: 'partial', evidence: 'Has run the jails since 2022 and asked the National Institute of Corrections for an outside review; a state lawsuit (Sept 2025) and a DOJ investigation (Sept 9, 2026) allege unconstitutional conditions.' },
            { criterionId: 'oversight', assessment: 'partial', evidence: 'Restored the Inspector General’s access after a 2025 dispute, but sued the Civilian Oversight Commission over subpoenas (March 2025, dropped Dec 2025).' },
            { criterionId: 'discipline', assessment: 'partial', evidence: 'Ran in 2022 on ending deputy cliques; the Commission has said it has faith in his approach; no independent measure of results found.' },
          ],
        },
        bio: [
          'Luna grew up in East Los Angeles, holds a master’s in public administration from Cal State Long Beach, and served in the Long Beach Police Department before becoming its chief; he defeated Villanueva in 2022 and is seeking a second term (LAist).',
          'His stated priorities are reducing violent crime, rebuilding public trust, modernizing the department and addressing homelessness; his website says homicides in patrolled areas are down 25% since 2023 (LAist, citing his campaign site).',
        ],
        recordVsChange:
          'Luna points to falling violent crime in patrolled areas and department reforms, such as body-worn cameras in jails; the case for change rests on in-custody deaths, the state and federal jail actions, and disputes with the Inspector General and the Civilian Oversight Commission.',
        scorecard: [
          { topic: 'Jail conditions & deaths', position: '~ Calls deaths troubling; asked the National Institute of Corrections for a review; adding body cameras in jails', comparison: 'Villanueva says the department "has just fallen apart" under Luna but had not published a specific jail plan I could find.' },
          { topic: 'Civilian oversight', position: '~ Sued the oversight commission over subpoenas, later dropped the suit; restored Inspector General access', comparison: 'Villanueva fought commission and Inspector General subpoenas for years while sheriff.' },
          { topic: 'Deputy gangs / cliques', position: '✓ Ran on ending them; the Commission has said it has faith in him on this', comparison: 'Villanueva calls the commission’s deputy-gang report a "political hit job" and says the groups are "subgroups".' },
          { topic: 'Budget & staffing', position: '~ Recruitment shortage forces overtime; no specific new plan found', comparison: 'Villanueva promises to rebuild staffing.' },
          { topic: 'Crime', position: '✓ Says homicides are down 25% since 2023 in patrolled areas', comparison: 'Villanueva calls current leadership a failure; no competing data published.' },
        ],
        money: 'Fundraising totals not found in coverage reviewed as of Oct 8, 2026; LAist reported no outside committees had spent in the race at its latest update.',
        endorsements:
          'Los Angeles County Democratic Party; Los Angeles County Federation of Labor; Association for Los Angeles Deputy Sheriffs (ALADS); Los Angeles County Police Chiefs Association (LAist voter guide, Oct 2026).',
        redFlags: [
          {
            severity: 'serious',
            status: 'under-investigation',
            text: 'California Attorney General Rob Bonta sued in September 2025 alleging unconstitutional conditions in county jails, including filth, rats, no clean water, spoiled food and inadequate medical care, and the U.S. Department of Justice announced on Sept. 9, 2026 an investigation of Men’s Central Jail. The Sheriff’s Department reported nine in-custody deaths in the first two months of 2026, and Luna acknowledged 19 for the year by May. Luna has called the deaths troubling, asked the National Institute of Corrections for an outside review, and cites body-worn cameras in jails and changes to the Inmate Reception Center.',
            whyItMatters: 'Safe, lawful jails are one of the Sheriff’s core legal duties.',
            sources: [
              { label: 'LAist: LA County Sheriff voter guide', url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-county-sheriff' },
              { label: 'Corrections1: 9 in-custody deaths in first 2 months of 2026', url: 'https://www.corrections1.com/jail-management/l-a-county-jails-see-9-in-custody-deaths-in-first-2-months-of-2026' },
              { label: 'ABC7: Luna addresses jail deaths', url: 'https://abc7.com/post/los-angeles-county-sheriff-robert-luna-addresses-concerns-recent-data-shows-10-inmates-died-jails-far-year/18622111/' },
            ],
          },
          {
            severity: 'notable',
            status: 'documented',
            text: 'In February 2025 the Civilian Oversight Commission subpoenaed records on three cases of deputy force or misconduct; the department did not produce them on the due date, and on March 19, 2025 Luna sued the commission to clarify whether state confidentiality law allowed release. He said he acted on county counsel’s advice. He dropped the suit without prejudice on Dec. 17, 2025, and the commission’s own suit to enforce the subpoenas was pending in reporting I reviewed.',
            whyItMatters: 'The Sheriff must cooperate with the oversight bodies that voters created, including by Measure R in 2020.',
            sources: [
              { label: 'LA Times via Yahoo: Luna defies subpoenas, sues commission', url: 'https://www.yahoo.com/news/l-sheriff-luna-sues-oversight-161205968.html' },
              { label: 'MyNewsLA: Luna drops personnel records suit', url: 'https://mynewsla.com/crime/2025/12/23/laco-sheriff-luna-drops-lasd-personnel-records-suit/' },
            ],
          },
          {
            severity: 'notable',
            status: 'documented',
            text: 'In a June 11, 2025 letter to the Board of Supervisors, Inspector General Max Huntsman said his staff had been kept from deputy-involved shooting scenes and jail death scenes and suspended regular rollouts. Luna replied that access was limited for evidence-preservation reasons and said at a July 2025 commission meeting that he knew of one such instance in five years. LAist later reported Luna restored the Inspector General’s access.',
            whyItMatters: 'Independent review of shootings and deaths in custody depends on prompt access.',
            sources: [
              { label: 'LA Times via Yahoo: Access denied', url: 'https://www.yahoo.com/news/articles/access-denied-l-county-sheriff-100000823.html' },
              { label: 'LAist: Luna restores Inspector General access', url: 'https://laist.com/news/criminal-justice/la-sheriff-luna-restores-inspector-generals-access' },
            ],
          },
        ],
      },
      {
        id: 'alex-villanueva',
        photoSlug: 'alex-villanueva',
        name: 'Alex Villanueva',
        party: 'NP',
        role: 'Retired Peace Officer',
        campaignUrl: 'https://alexvillanueva2026.com/',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary: 'Villanueva was Sheriff from 2018 to 2022 after more than 30 years as a deputy, rising to lieutenant. His term included repeated clashes with oversight bodies and a 2023 county finding against him, described below.',
          criteria: [
            { criterionId: 'agency', assessment: 'met', evidence: 'Sheriff of LA County 2018 to 2022; more than 30 years in the department, rising to lieutenant (LAist).' },
            { criterionId: 'jails', assessment: 'partial', evidence: 'Ran the jails for one term; he points to deputy suicides and in-custody deaths as signs of the current department’s decline, but offers no published jail plan I could find.' },
            { criterionId: 'oversight', assessment: 'not-met', evidence: 'Court rulings required him to answer the Inspector General’s subpoena (appeal rejected April 2022); he resisted commission subpoenas until testifying in January 2024.' },
            { criterionId: 'discipline', assessment: 'partial', evidence: 'Says an internal investigation of the Banditos ended with four firings and 22 suspensions; the Commission’s 2023 report found deputy gangs persisted and cost taxpayers over $55 million.' },
          ],
        },
        bio: [
          'Villanueva served as a deputy for more than 30 years before defeating incumbent Jim McDonnell in 2018 and losing to Luna in 2022. He says the department "has just fallen apart" since and promises to work "hand in hand" with communities (LAist).',
          'His announcement cited "failed leadership" in the department and pledged to rebuild staffing (Yahoo/LA Times).',
        ],
        scorecard: [
          { topic: 'Jail conditions & deaths', position: '? Cites deputy suicides and in-custody deaths as failures; no specific jail plan found', comparison: 'Luna has asked for an outside review and added body cameras in jails.' },
          { topic: 'Civilian oversight', position: '✗ Called the commission’s subpoenas an abuse of power; testified only after leaving office', comparison: 'Luna also fought subpoenas but dropped his suit and restored Inspector General access.' },
          { topic: 'Deputy gangs / cliques', position: '✗ Says they are "subgroups" and calls the 2023 commission report a "political hit job"', comparison: 'Luna ran on eradicating them and the commission says it has faith in him.' },
          { topic: 'Budget & staffing', position: '✓ Promises to rebuild staffing', comparison: 'Luna faces the same shortage and has no new plan found.' },
          { topic: 'Crime', position: '? "Failed leadership" message; no published data', comparison: 'Luna cites a 25% drop in homicides since 2023.' },
        ],
        money: 'Fundraising totals not found in coverage reviewed as of Oct 8, 2026.',
        endorsements:
          'Los Angeles County Republican Party; Los Angeles County Taxpayers Association; Los Angeles School Police Officers Association (LAist, Oct 2026). The Los Angeles Sheriff’s Professional Association says 81.5% of its members voted to endorse him (KTLA, group’s own figure).',
        redFlags: [
          {
            severity: 'severe',
            status: 'official-finding',
            text: 'In 2023, after Villanueva left office, the county’s Equity Oversight Panel found he violated county discrimination and harassment policies in two complaints (one concerning remarks about the county Inspector General, one concerning a woman of color working for a county supervisor) and recommended a "Do Not Rehire" notation, which the Sheriff’s Department upheld. Villanueva denies it and called the action political; his federal suit over it was dismissed with prejudice.',
            whyItMatters: 'The Sheriff manages thousands of employees, and the county’s own finding concerns workplace conduct toward staff of other elected offices.',
            sources: [
              { label: 'LA Times via Yahoo: Panel finds Villanueva violated policies', url: 'https://www.yahoo.com/news/not-rehire-panel-finds-villanueva-014301739.html' },
              { label: 'LAist: Villanueva suit dismissed', url: 'https://laist.com/brief/news/criminal-justice/former-sheriff-lawsuit-dismissed' },
            ],
          },
          {
            severity: 'serious',
            status: 'documented',
            text: 'Courts required Villanueva to answer the county Inspector General’s subpoena about deputy gangs under oath, and the Court of Appeal rejected his appeal in April 2022; he resisted the Civilian Oversight Commission’s 2021 subpoenas until the judge declined a contempt hearing in October 2023, and he testified in January 2024. He has said the Board of Supervisors, through the commission, "unlawfully abused the subpoena power".',
            whyItMatters: 'A Sheriff who resists lawful oversight limits the public’s ability to check the department.',
            sources: [
              { label: 'LA Times via Yahoo: no contempt hearing', url: 'https://www.yahoo.com/news/former-sheriff-alex-villanueva-not-221146674.html' },
              { label: 'LAmag: ruling may force Villanueva to discuss deputy cliques', url: 'https://lamag.com/news-and-politics/villanueva-subpoena/' },
            ],
          },
          {
            severity: 'serious',
            status: 'disputed',
            text: 'A 2023 special-counsel report for the Civilian Oversight Commission found that deputy gangs had existed in the department for at least 50 years, that at least six remained active, and that their misconduct cost taxpayers more than $55 million. Villanueva called it a "political hit job" resting on uncorroborated anonymous witnesses; testifying in January 2024, he said there are "subgroups", that the Banditos investigation ended in four firings and 22 suspensions, and that this "didn’t make them gang members".',
            whyItMatters: 'How a Sheriff handles secret deputy groups and misconduct is central to discipline and public trust.',
            sources: [
              { label: 'KTLA: Commission blasts Villanueva on alleged deputy gangs', url: 'https://ktla.com/news/local-news/commission-blasts-former-los-angeles-county-sheriff-villanueva-on-alleged-deputy-gangs/' },
              { label: 'LA Public Press: Villanueva says gangs are "subgroups"', url: 'https://lapublicpress.org/2024/01/former-la-sheriff-villanueva-sheriffs-gangs-are-just-subgroups/' },
              { label: 'Fox News: Villanueva calls report a "political hit job"', url: 'https://www.foxnews.com/us/ex-los-angeles-sheriff-alex-villanueva-torches-oversight-report-alleged-deputy-gangs-political-hit-job' },
            ],
          },
        ],
        notes: [
          'The Loyola Law School Center for Juvenile Law & Policy reported in 2021 that 18 deputy groups had existed over 50 years; the department called that report non-peer-reviewed and based on unproven allegations (LAist).',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Luna', '◐', 'Progressive Left voters favor the candidate more open to civilian oversight and jail reform, while noting that the jails remain under state and federal scrutiny on Luna’s watch.'],
      ['EL', 'Luna', '●', 'Establishment Liberals value institutional competence and party and labor backing, and Luna has the county Democratic Party and Federation of Labor behind him.'],
      ['DM', 'Luna', '●', 'Democratic Mainstays generally follow the county party and labor endorsements, both of which are with Luna.'],
      ['OL', 'Luna', '○', 'Outsider Left voters distrust the department as an institution, but a county finding of harassment against Villanueva tips a weak lean to Luna.'],
      ['SS', 'Luna', '○', 'Stressed Sideliners have low trust in both, and a weak lean goes to the incumbent whose record includes less documented conflict with courts.'],
      ['AR', 'Luna', '◐', 'Ambivalent Right voters who want experienced, lower-drama management lean toward the incumbent over a candidate with a documented finding and court fights.'],
      ['PR', 'Villanueva', '◐', 'Populist Right voters value an anti-establishment former sheriff who fought the Board of Supervisors, though his official finding keeps this to a trade-off.'],
      ['CC', 'Villanueva', '◐', 'Committed Conservatives favor the candidate backed by the Republican Party and Taxpayers Association who stresses law enforcement staffing, with the finding against him as a trade-off.'],
      ['FF', 'Villanueva', '◐', 'Faith and Flag Conservatives lean toward the Republican-endorsed former sheriff with a pro-deputy message, tempered by the county’s finding against him.'],
    ]),
    counterArguments: [
      'EL/DM (Luna ●): But Luna’s record includes a state lawsuit and a federal investigation into jail conditions, rising in-custody deaths, and a suit against the oversight commission that he later dropped; "incumbent" is not the same as "fixed".',
      'PR/CC/FF (Villanueva ◐): But the county’s Equity Oversight Panel found Villanueva violated discrimination and harassment policies, and courts forced him to answer the Inspector General, so the pick depends on weighing that against dissatisfaction with Luna.',
    ],
    readingLinks: [
      { label: 'LAist: LA County Sheriff, who’s running on Nov. 3', url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-county-sheriff', summary: 'Neutral profile of both candidates, endorsements and key issues.' },
      { label: 'Villanueva campaign: endorsements', url: 'https://alexvillanueva2026.com/endorsements/', summary: 'Campaign-published list (advocacy source).' },
    ],
  },

  {
    id: 'la-measure-a',
    categoryId: 'local-measures',
    title: 'LA County Measure A — Binding arbitration and strike ban for public safety employees',
    tldrLabel: 'LA County Measure A — Binding arbitration',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure A would let an arbitration panel, instead of the Board of Supervisors imposing its "best and final offer," settle contract impasses with certain public safety unions, and would ban strikes by those workers. Unions gain a neutral decision-maker; the elected Board loses the final say over their pay.',
    ],
    introParagraphs: [
      'The Board of Supervisors voted 4-0 to place the measure on the ballot, with Supervisor Holly Mitchell abstaining; the backing unions had also begun a signature drive. Through mid-September, the deputies’ union had put in more than $2 million and the firefighters union and another sworn-employee union more than $1 million each (LAist).',
    ],
    measure: {
      question:
        'Shall the Los Angeles County Charter be amended to prohibit strikes by district attorney investigators, medical examiners, lifeguards, their supervisors, and nonadministrative civilian employees of the Fire, Sheriff’s and Medical Examiner departments; reiterate good-faith bargaining requirements; and create impartial binding arbitration for certified public safety employee organizations?',
      measureType: 'Charter amendment (placed by Board of Supervisors)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'No formal fiscal estimate from the county CEO or county counsel was found in coverage reviewed. Then-Acting CEO Joe Nicchitta warned that arbitration awards not tied to county budget policy could strain reserves, hurt the county’s credit standing and limit funding for other priorities, citing Vallejo and San Luis Obispo, where voters later repealed binding arbitration (LAist). Arbitration costs would be shared by the county and the unions.',
      supporters: '"Safer Los Angeles County" campaign: ALADS, Los Angeles County Professional Peace Officers Association, Los Angeles County Fire Fighters Local 1014, Los Angeles County Lifeguard Association and the Los Angeles/Orange Counties Building and Construction Trades Council; Supervisor Kathryn Barger.',
      opponents: 'No organized opposition found. A former Loyola Law School Anti-Racism Center fellow argued that arbitration "frustrates transparency" when used by police unions (LAist).',
      voterConnection: [
        'County pay and benefits exceeded $23 billion last year (LAist); with federal health-care cuts, wildfire recovery and child-abuse settlements, binding awards could squeeze health care and social programs.',
        'Final say over these workers’ pay would move from elected supervisors to a panel voters cannot hold accountable.',
        'A No vote keeps the current process, in which the county can impose its final offer.',
      ],
      mechanismBullets: [
        'Panel: one member picked by the county, one by the union, and a third by agreement.',
        'Covers about 17,000 employees in 14 bargaining units across six union groups, including sheriff’s deputies, firefighters and lifeguards.',
        'Takes effect 10 days after the results are certified (LAist).',
      ],
      argumentsFor: [
        'Supporters say arbitration "takes politics out of public safety pay decisions" and stops the Board from imposing terms unilaterally.',
        'Supporters cite staffing shortages and better-paying smaller jurisdictions; Supervisor Barger says a "fair and efficient bargaining process" is needed to keep wages competitive.',
        'The strike ban assures uninterrupted emergency services.',
      ],
      argumentsAgainst: [
        'Awards not tied to budget policy could strain reserves and credit, and other California cities have repealed binding arbitration.',
        'A panel, not officials accountable to voters, would decide pay, and critics say arbitration reduces transparency, particularly for police unions.',
        'It benefits the deputies’ union, which is also a major campaign spender.',
      ],
      readingLinks: [
        { label: 'LAist: LA County Measure A', url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-your-la-county-measure-a-binding-arbitration', summary: 'Neutral explainer with money raised, board vote and fiscal concerns.' },
        { label: 'LA Public Press: 2026 LA ballot measures guide', url: 'https://lapublicpress.org/2026/10/la-2026-election-ballot-measures-school-sheriff-city-fire/', summary: 'Nonprofit newsroom guide to county and city measures.' },
        { label: 'LA Registrar-Recorder: Measures appearing on the Nov. 3, 2026 ballot', url: 'https://content.lavote.gov/docs/rrcc/documents/measures-appearing-on-the-ballot---november-3-2026-rev-8-14-2026-v-4.pdf', summary: 'Official list with ballot wording.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'No', '◐', 'Progressive Left voters value transparency and are wary of police-union arbitration shielding discipline and pay decisions from elected officials and public view.'],
      ['EL', '—', '—', 'Establishment Liberals are split between supporting public safety labor and the fiscal-control warnings from county management, so this guide makes no pick.'],
      ['DM', 'Yes', '◐', 'Democratic Mainstays tend to support organized labor and public-safety workers, and the Board approved the measure without opposition.'],
      ['OL', 'No', '◐', 'Outsider Left voters distrust police unions’ influence over public budgets and oversight.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners lean toward backing firefighters and lifeguards as essential workers, with low confidence given the budget trade-offs.'],
      ['AR', 'No', '◐', 'Ambivalent Right voters value fiscal restraint and are concerned about binding awards that elected officials cannot control.'],
      ['PR', 'Yes', '◐', 'Populist Right voters tend to back deputies and firefighters, even though the measure strengthens a union process.'],
      ['CC', 'No', '◐', 'Committed Conservatives value spending discipline and are skeptical of binding arbitration, which can raise public payroll costs.'],
      ['FF', 'Yes', '○', 'Faith and Flag Conservatives lean toward supporting sheriff’s deputies and first responders, with low confidence because the vehicle is a union-backed process.'],
    ]),
    counterArguments: [
      'CC/AR (No ◐): But the strike ban is a restriction on employees that fiscal conservatives often favor, and arbitration is limited to a last-resort impasse.',
      'DM (Yes ◐): But the county’s own then-acting CEO warned of budget and credit risks, and other California cities have repealed binding arbitration.',
    ],
  },

  {
    id: 'la-measure-e',
    categoryId: 'local-measures',
    title: 'LA County Measure E — Independent Ethics Commission and community investment commitment',
    tldrLabel: 'LA County Measure E — Ethics Commission',
    kind: 'measure',
    candidates: [],
    stakesParagraphs: [
      'Measure E locks the new county Ethics Commission’s independence and minimum funding into the charter, and restores a 10% set-aside for community investment and alternatives to incarceration. Supporters see a complete, protected watchdog; critics say bundling in a spending set-aside limits the Board’s budget flexibility.',
    ],
    introParagraphs: [
      'Voters created the Ethics Commission through Measure G in 2024; a task force recommended putting its independence in the charter, which requires a public vote. Voters approved the set-aside as Measure J in 2020, but county officials accidentally let Measure G undo it (LAist).',
    ],
    measure: {
      question:
        'Shall the Los Angeles County Charter be amended to provide greater independence and structure for the County Ethics Commission, the Office of Ethics Compliance and the Ethics Compliance Officer, and to continue the County’s community investment and alternatives-to-incarceration commitment?',
      measureType: 'Charter amendment (placed by Board of Supervisors)',
      voteThreshold: 'Simple majority',
      fiscalImpact:
        'A guaranteed minimum budget of $14.3 million a year for the commission and its proposed 54-person staff (LAist). The cost of the restored set-aside was not quantified in coverage reviewed, and no county counsel or CEO fiscal analysis was found.',
      supporters: 'League of Women Voters of Los Angeles County; California Clean Money; California Common Cause; AAPI Equity Alliance; Supervisor Lindsey Horvath (LAist).',
      opponents: 'No opponents on the official ballot materials; the Los Angeles Daily News editorial board opposes the measure.',
      voterConnection: [
        'The commission would police ethics, contracts and lobbying for officials who control a very large county budget.',
        'Charter-guaranteed funding means a future Board could not easily cut the commission.',
        'Restoring the set-aside protects that spending, which would otherwise be at risk of repeal, but reduces the Board’s flexibility to spend the money elsewhere.',
      ],
      mechanismBullets: [
        'The commission can investigate county officials, candidates, lobbyists and contractors, issue subpoenas, and fine up to $15,000 per offense.',
        'Seven commissioners: three chosen by elected officials, the rest through a public application process.',
        'Implements the 2024 Measure G reforms, which also create an elected county CEO in 2028 and add four Board of Supervisors seats in 2032.',
      ],
      argumentsFor: [
        'Completes the independent Ethics Commission voters approved in 2024, with real investigative and enforcement power.',
        'Charter protection keeps a future Board from weakening it.',
        'Corrects an administrative error that wiped out Measure J’s voter-approved set-aside.',
      ],
      argumentsAgainst: [
        'The Daily News editorial board calls the ethics provisions "plausibly fine" but restoring the set-aside bad policy.',
        'Charter-locked spending ties supervisors’ hands as federal funds shrink.',
        'Bundles two unrelated changes, ethics and a budget set-aside, into one yes or no.',
      ],
      readingLinks: [
        { label: 'LAist: LA County Measure E', url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-la-county-measure-e-ethics-comission-measure-j', summary: 'Neutral explainer with background on Measures G and J.' },
        { label: 'LA Public Press: 2026 LA ballot measures guide', url: 'https://lapublicpress.org/2026/10/la-2026-election-ballot-measures-school-sheriff-city-fire/', summary: 'Nonprofit newsroom guide.' },
        { label: 'LA Registrar-Recorder: Measures appearing on the Nov. 3, 2026 ballot', url: 'https://content.lavote.gov/docs/rrcc/documents/measures-appearing-on-the-ballot---november-3-2026-rev-8-14-2026-v-4.pdf', summary: 'Official list with ballot wording.' },
        { label: 'LA Forward voter guide (advocacy)', url: 'https://www.laforward.org/voterguide', summary: 'Progressive advocacy guide; treat as a position statement.' },
      ],
    },
    crossTypology: ct([
      ['PL', 'Yes', '●', 'Progressive Left voters value independent ethics enforcement and the restored funding for alternatives to incarceration.'],
      ['EL', 'Yes', '●', 'Establishment Liberals value good-government institutions with a clear charter structure and the backing of the League of Women Voters and Common Cause.'],
      ['DM', 'Yes', '◐', 'Democratic Mainstays favor the ethics reform and the community-investment set-aside, with less intensity on the technical charter details.'],
      ['OL', 'Yes', '●', 'Outsider Left voters distrust insiders and want an independent body that can subpoena and fine officials.'],
      ['SS', 'Yes', '○', 'Stressed Sideliners distrust government and see an ethics watchdog as a modest check, with low confidence on the budget details.'],
      ['AR', 'Yes', '○', 'Ambivalent Right voters lean toward accountability for officials, with caution about locking in spending.'],
      ['PR', 'Yes', '○', 'Populist Right voters tend to favor tougher oversight of officials and contractors, though not the set-aside.'],
      ['CC', 'No', '◐', 'Committed Conservatives value flexible budgets and oppose guaranteed spending set-asides for alternatives to incarceration.'],
      ['FF', 'No', '◐', 'Faith and Flag Conservatives oppose the alternatives-to-incarceration set-aside bundled into the measure.'],
    ]),
    counterArguments: [
      'PL/EL/OL (Yes ●): But the measure also entrenches a 10% set-aside in the charter, which limits the Board’s flexibility during a federal funding squeeze, the Daily News’s core objection.',
      'CC/FF (No ◐): But the ethics provisions themselves are described as plausibly fine even by opponents, and a No vote also leaves the commission’s independence out of the charter.',
    ],
  },

  // ---------------------------------------------------------------- LACCD
  {
    id: 'laccd-seat-2',
    categoryId: 'school',
    title: 'Los Angeles Community College District, Seat 2',
    tldrLabel: 'LACCD Trustee, Seat 2',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The seven-member LACCD Board of Trustees governs nine community colleges and about 200,000 students, with an annual budget of around $10 billion according to the LA Times voter guide. Trustees are elected at large, so every voter in the district votes on every seat, and the part-time job pays about $24,000 a year.',
      'The board approves the budget, hires the chancellor, and oversees spending of a $5.3 billion bond approved in 2022. Enrollment is up from recent years but still below pre-pandemic levels.',
    ],
    introParagraphs: [
      'Five candidates qualified for Seat 2; Roy Payan told the LA Times he has suspended his campaign, though his name remains on the ballot. The race is nonpartisan.',
    ],
    legalRequirements: LACCD_LEGAL,
    qualificationCriteria: LACCD_CRITERIA,
    candidates: [
      {
        id: 'steven-veres',
        name: 'Steven Veres',
        party: 'NP',
        role: 'Member, LACCD Board of Trustees',
        campaignUrl: 'https://www.steveveres.com',
        qualification: q('extensive', 'Veres has served on the board since 2011 and is the sitting trustee for this seat; he also works on the staff of a state senator.', [
          ['met', 'Trustee on the LACCD board since 2011 (Santa Monica Mountains Conservancy biography).'],
          ['partial', 'Votes on LACCD budgets and the 2022 bond program as a sitting trustee; specific oversight actions were not reviewed.'],
          ['met', 'Former teacher and long-serving trustee; priorities are completion and transfer rates.'],
          ['met', 'Says he wants to expand paid internships and apprenticeships with employers and organized labor.'],
        ]),
        bio: ['Veres, 50, is a current LACCD trustee and former teacher who has worked for state officials, including Sen. María Elena Durazo (LA Times voter guide).'],
        recordVsChange: 'He offers continuity and an agenda of paid internships, apprenticeships and cutting duplicative spending across the nine colleges; the case for change would turn on enrollment still below pre-pandemic levels and the pace of bond construction, which the guide does not attribute to him.',
        scorecard: sc('✓ Make college more affordable; "tuition is only part of the cost"', '✓ Use funds efficiently, grow enrollment, cut duplicative spending across colleges', '? No specific bond-oversight position found', '✓✓ Expand paid internships, apprenticeships, employer and labor partnerships'),
        money: NO_MONEY,
        endorsements: NO_ENDORSE,
        notes: [TIMES_S2],
      },
      unknownCard('robert-payne', 'Robert Payne', 'Researcher/Writer/Environmentalist',
        'Payne, 77, grew up in Pacoima, attended L.A. Valley College and Cal State Northridge, and has taught at L.A. Mission College (LA Times voter guide).',
        'some', 'Payne has taught at an LACCD college but lists no governing or budget role.', TIMES_S2,
        [['not-met', 'No governing role listed.'], ['unknown', 'No budget or bond role found.'], ['partial', 'Taught at L.A. Mission College; attended LACCD campuses.'], ['partial', 'Proposes job-specific training and hiring adjuncts with industry experience.']],
        sc('✓ Make community colleges cheaper; supports ending student debt; cheaper online textbooks', '✓ Opposes cutting student opportunities; enrollment growth would justify costs', '?', '✓ Job-specific training; résumé and interview skills')),
      unknownCard('kristina-irwin', 'Kristina Irwin', 'Parent/Business Owner',
        'Irwin, 50, is a parent, business owner and former community college student who serves on Santa Monica College’s general advisory board and sat on the Palisades Charter High School board during the Palisades fire (LA Times voter guide).',
        'some', 'Irwin has local school-board service and business experience but no LACCD governance role.', TIMES_S2,
        [['partial', 'Served on a charter-school board and a Santa Monica College advisory board.'], ['unknown', 'No budget or bond role found.'], ['partial', 'Former community college student; advisory board service.'], ['partial', 'Business owner; proposes "preentry" programs in every local high school.']],
        sc('?', '~ Wants alternative funding streams for classroom resources', '?', '✓ Pre-entry programs in local high schools')),
      unknownCard('roy-payan', 'Roy Payan', 'Disabled Student Advocate',
        'Payan told the LA Times he has suspended his campaign; no other candidate information was found.',
        'limited', 'No documented experience found; the candidate says he has suspended his campaign.', TIMES_S2,
        [U, U, U, U],
        sc('?', '?', '?', '?'),
        [TIMES_S2, 'Campaign status as stated to the LA Times; the name remains on the ballot.']),
      {
        id: 'adriana-cabrera',
        name: 'Adriana Cabrera',
        party: 'NP',
        role: 'Educator',
        campaignUrl: 'https://adrianaforlaccd.com',
        qualification: q('some', 'Cabrera is an educator and neighborhood-council president with community organizing experience but no board or budget role at a large agency.', [
          ['partial', 'President of the Central Alameda Neighborhood Council; co-founded Empowering Youth in South Central.'],
          ['unknown', 'No budget or bond oversight role found.'],
          ['partial', 'Educator with a master’s in education; community college transfer to Cal State Northridge.'],
          ['partial', 'Wants stronger links between colleges and economic mobility.'],
        ]),
        bio: ['Cabrera, 34, attended community college, earned bachelor’s degrees from Cal State Northridge in Chicana/o studies and political science, and holds a master’s in education (LA Times voter guide).'],
        scorecard: sc('✓✓ Simplify student services; expand food, housing, child care and mental health aid', '~ Review spending and raise revenue, such as renting underused facilities, without shifting costs to students', '? No specific bond-oversight position found', '✓ Stronger links to economic mobility; more stakeholder input before budget decisions'),
        money: NO_MONEY,
        endorsements: NO_ENDORSE,
        notes: [TIMES_S2],
      },
    ],
    crossTypology: ct([
      ['PL', 'Cabrera', '○', 'Progressive Left voters lean toward the newcomer who prioritizes food, housing, child care and mental health aid for students.', 'Progressive Left voters who weigh a governing record could back Veres, a trustee since 2011 and former teacher who says tuition is only part of college costs, while giving up Cabrera’s fuller plan for student food, housing, child care and mental health aid.'],
      ['EL', 'Veres', '◐', 'Establishment Liberals value the experienced incumbent whose agenda centers on completion, transfer and career pathways with labor.'],
      ['DM', 'Veres', '◐', 'Democratic Mainstays favor the incumbent with ties to labor and Democratic officials and a track record on the board.'],
      ['OL', 'Cabrera', '◐', 'Outsider Left voters prefer a younger community organizer over a long-serving incumbent.', 'Outsider Left voters who still want a steady hand on a $5.3 billion bond program could accept Veres’s board tenure since 2011, though it means keeping a long-serving incumbent instead of electing a younger community organizer.'],
      ['SS', 'Veres', '○', 'Stressed Sideliners lean toward the known name and the focus on affordability, with little other information.'],
      ['AR', 'Veres', '○', 'Ambivalent Right voters weigh his efficiency and enrollment message, with low confidence.'],
      ['PR', 'Irwin', '○', 'Populist Right voters may prefer a parent and business owner with no ties to the current board, with little to go on.', 'Populist Right voters who value a track record could choose Veres, whose agenda includes cutting duplicative spending across the nine colleges, but they give up Irwin, a parent and business owner with no ties to the current board.'],
      ['CC', '—', '—', 'Committed Conservatives have no clear fit among these candidates based on available information.', 'Committed Conservatives have no clear match in this field, so experience becomes the tie-breaker: Veres has sat on the board since 2011 and talks about using funds efficiently and cutting duplicative spending across the colleges.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no clear fit among these candidates based on available information.', 'Faith and Flag Conservatives find no candidate speaking to their priorities, so they could fall back on experience; Veres, a former teacher on the board since 2011, is the one candidate with a long record governing the district.'],
    ]),
    counterArguments: [
      'EL/DM (Veres ◐): But he is a 15-year incumbent, and enrollment remains below pre-pandemic levels, so voters wanting change have reasons to look elsewhere.',
      'PL/OL (Cabrera): But she has no experience governing a large district or overseeing a $5.3 billion construction program.',
    ],
    readingLinks: [
      { label: 'LA Times voter guide: LACCD Seat 2 (via Yahoo)', url: 'https://www.yahoo.com/news/politics/articles/guide-los-angeles-community-college-100000114.html', summary: 'Candidate questionnaire answers.' },
    ],
  },

  {
    id: 'laccd-seat-4',
    categoryId: 'school',
    title: 'Los Angeles Community College District, Seat 4',
    tldrLabel: 'LACCD Trustee, Seat 4',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The seven-member LACCD Board of Trustees governs nine community colleges and about 200,000 students. Trustees are elected at large, so every voter in the district votes on every seat; the job is part time.',
      'This seat is open because the incumbent, Sara Hernandez, is running for State Senate District 26. The new trustee will help oversee a $5.3 billion bond construction program, set the budget and evaluate the chancellor.',
    ],
    introParagraphs: [
      'Seven candidates are on the ballot, and the LA Times sent questionnaires to all seven; six answered and Isidro Armenta did not. The race is nonpartisan.',
    ],
    legalRequirements: LACCD_LEGAL,
    qualificationCriteria: LACCD_CRITERIA,
    candidates: [
      {
        id: 'nancy-pearlman',
        name: 'Nancy Pearlman',
        party: 'NP',
        role: 'Environmentalist/Anthropologist/Educator',
        qualification: q('extensive', 'Pearlman served on the LACCD board from 2001 to 2017 and taught part time at all nine colleges.', [
          ['met', 'LACCD trustee 2001 to 2017 (LA Times voter guide).'],
          ['met', 'Served 16 years on the board that approves budgets and oversees bond programs; wants construction kept sustainable and on budget.'],
          ['met', 'Taught part time at all nine LACCD colleges; names low enrollment as the top challenge.'],
          ['partial', 'Supports campus scholarship foundations and lobbying for student aid.'],
        ]),
        bio: ['Pearlman, 78, is an environmentalist, broadcaster and college instructor who served on the LACCD board from 2001 to 2017 (LA Times voter guide; Wikipedia).'],
        scorecard: sc('✓ Has bought textbooks for students who could not afford them; supports scholarship foundations', '✓ Stop excess spending; compare administrator pay with faculty and staff pay', '✓ Keep construction sustainable and on budget', '~ Hold the chancellor and presidents accountable to the district mission'),
        money: NO_MONEY,
        endorsements: NO_ENDORSE,
        notes: [TIMES_S4],
      },
      {
        id: 'darryn-harris',
        name: 'Darryn Harris',
        party: 'NP',
        role: 'Community College Educator',
        qualification: q('some', 'Harris has government staff and nonprofit health-care roles and recently began teaching a skills class at Santa Monica College, which is outside LACCD.', [
          ['partial', 'Government and community affairs officer at St. John’s Community Health; former aide to Rep. Sydney Kamlager-Dove and to Mayor Karen Bass in Congress.'],
          ['partial', 'Would review administrative costs, consultants and construction spending before cutting classes; no budget role found.'],
          ['partial', 'Recently began teaching a student skills class at Santa Monica College (not LACCD).'],
          ['met', 'Wants employer and labor partnerships for counseling, transfer and career training.'],
        ]),
        bio: ['Harris, 42, works at St. John’s Community Health and previously worked at UCLA and as an aide to Rep. Sydney Kamlager-Dove and Mayor Karen Bass (LA Times voter guide).'],
        scorecard: sc('✓✓ Low-cost housing on district land; easier access to food, transportation and child care help', '✓ More partnerships and government funds; review administration, consultants, contracts, vacant positions and construction first', '✓ Look at construction spending before cutting classes', '✓ Better counseling, transfer support, and career training with employers and labor'),
        money: NO_MONEY,
        endorsements: NO_ENDORSE,
        notes: [TIMES_S4],
      },
      unknownCard('adam-bruno', 'Adam Bruno', 'No ballot designation',
        'Bruno, 42, attended community college and works as a therapist counseling children, adults and families (LA Times voter guide).',
        'limited', 'Bruno has direct student and counseling experience but no governance or budget role.', TIMES_S4,
        [['not-met', 'No governing role found.'], ['unknown', 'No budget or bond role found.'], ['partial', 'Attended community college; works as a therapist.'], U],
        sc('✓ Explore student stipends; support and fairly compensate educators', '~ Seek donations and other funding for students’ financial needs', '?', '?')),
      unknownCard('elaine-alaniz', 'Elaine Alaniz', 'Healthcare Workforce Specialist',
        'Alaniz, 45, holds associate degrees from Los Angeles City College and Los Angeles Valley College and is a public affairs specialist with the U.S. Small Business Administration’s disaster recovery office (LA Times voter guide).',
        'some', 'Alaniz has workforce, public-administration and federal agency experience and attended two LACCD colleges, with no governing role.', TIMES_S4,
        [['not-met', 'No governing role found.'], ['partial', 'Federal agency public affairs role; would review administration and low-enrollment programs and pursue grants.'], ['partial', 'LACCD associate-degree graduate.'], ['met', 'Background in healthcare workforce development; priorities are credentials and apprenticeships.']],
        sc('✓ Lower-cost course materials', '~ Review administration and low-enrollment programs; pursue state and federal grants', '?', '✓✓ Credentials, apprenticeships, hands-on training; flexible and online schedules')),
      unknownCard('isidro-armenta', 'Isidro Armenta', 'Fire Department Employee',
        'Armenta did not respond to the LA Times questionnaire, so no positions or background are available beyond his ballot designation.',
        'limited', 'No documented experience found beyond his ballot designation.', TIMES_S4,
        [U, U, U, U], sc('?', '?', '?', '?'),
        ['Did not respond to the LA Times questionnaire (Oct 1, 2026).']),
      unknownCard('priscilla-umana', 'Priscilla Umana', 'ASL Educational Interpreter',
        'Umana, 43, works as an American Sign Language interpreter in educational settings (LA Times voter guide).',
        'limited', 'Umana works in educational settings but lists no governance or budget role.', TIMES_S4,
        [['not-met', 'No governing role found.'], ['unknown', 'No budget role found; would review waste and low-enrollment courses.'], ['partial', 'ASL interpreter in education.'], ['partial', 'Proposes partnerships with businesses, nonprofits and entertainment groups.']],
        sc('✓✓ Expand affordable housing, work-study and food aid; remove language and disability barriers', '~ Review for waste and low-enrollment courses; raise revenue through partnerships', '?', '~ Business and nonprofit partnerships')),
      unknownCard('jason-aula', 'Jason Aula', 'Business Owner/Journalist',
        'Aula, 41, says he has been a political campaign consultant and has about 10 years in technology businesses, including app-based delivery and transportation firms (LA Times voter guide).',
        'limited', 'Aula reports business and campaign experience but no education or governance record; the LA Times said much of his written answers contained unsubstantiated accusations and published little of them.', TIMES_S4,
        [['not-met', 'No governing role found.'], ['unknown', 'Says he would only make financial deals that benefit U.S. citizens; no budget role found.'], ['not-met', 'No education role found.'], ['partial', 'Proposes partnerships with the Navy and law enforcement; says he worked with LACCD labor unions without detail.']],
        sc('~ Basic needs "in the interests of U.S.A citizens"', '~ Calls financial-aid fraud a major issue', '?', '~ Partnerships with the Navy and law enforcement'),
        [TIMES_S4, 'Proposed a moratorium on noncitizens attending LACCD (LA Times voter guide).']),
    ],
    crossTypology: ct([
      ['PL', 'Harris', '○', 'Progressive Left voters lean toward the candidate with the most concrete plan for low-cost housing on district land and basic-needs support.', 'Progressive Left voters who value a proven record could pick Pearlman, who spent 16 years on the board and has bought textbooks for students who could not afford them, though her platform lacks Harris’s plan for low-cost housing on district land.'],
      ['EL', 'Pearlman', '◐', 'Establishment Liberals value 16 years of prior board experience and a focus on budget and construction oversight.'],
      ['DM', 'Harris', '◐', 'Democratic Mainstays favor a candidate with ties to Democratic officials and a partnerships-with-labor agenda.', 'Democratic Mainstays who prize a known quantity could favor Pearlman’s 16 years as a trustee and her part-time teaching at all nine colleges, giving up Harris’s ties to Democratic officials and his labor-partnership agenda.'],
      ['OL', 'Umana', '○', 'Outsider Left voters lean toward an outsider candidate stressing housing, food aid and disability access, with little other information.', 'Outsider Left voters wary of insiders might still choose Pearlman, who left the board in 2017 and has taught across all nine colleges, trading Umana’s focus on housing, food aid and disability access for someone who knows how the district works.'],
      ['SS', 'Bruno', '○', 'Stressed Sideliners relate to the candidate who stresses students’ financial struggles and stipends, with little other information.', 'Stressed Sideliners who want someone who has done the job could pick Pearlman, a 16-year former trustee who wants to stop excess spending, though Bruno speaks more directly to students’ money struggles with his stipend idea.'],
      ['AR', 'Alaniz', '◐', 'Ambivalent Right voters value a workforce-readiness and spending-review message.', 'Ambivalent Right voters who want spending discipline from someone who has practiced it could favor Pearlman, who oversaw budgets and bonds for 16 years and wants administrator pay compared with faculty pay, giving up Alaniz’s sharper workforce-credential focus.'],
      ['PR', 'Alaniz', '○', 'Populist Right voters lean toward an outsider with an administrative-spending review and credential focus.', 'Populist Right voters weighing experience could pick Pearlman, who wants to stop excess spending and keep construction on budget, though she is a former board insider rather than the outsider Alaniz offers.'],
      ['CC', '—', '—', 'Committed Conservatives have no clear fit given the information available.', 'Committed Conservatives see no clear fit here, so experience can break the tie: Pearlman served 16 years on the board and pledges to stop excess spending and keep bond construction on budget.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no clear fit given the information available.', 'Faith and Flag Conservatives find no candidate aligned with their priorities, so experience becomes the deciding factor; Pearlman brings 16 years as a trustee and part-time teaching at all nine of the district’s colleges.'],
    ]),
    counterArguments: [
      'EL (Pearlman ◐): But she left the board in 2017, and voters seeking new leadership may prefer a candidate without a past record.',
      'PL/DM (Harris): But he has no board or budget experience and teaches outside LACCD.',
    ],
    readingLinks: [
      { label: 'LA Times voter guide: LACCD Seat 4 (via Yahoo)', url: 'https://www.yahoo.com/news/politics/articles/guide-los-angeles-community-college-100000834.html', summary: 'Candidate questionnaire answers.' },
    ],
  },

  {
    id: 'laccd-seat-6',
    categoryId: 'school',
    title: 'Los Angeles Community College District, Seat 6',
    tldrLabel: 'LACCD Trustee, Seat 6',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The seven-member LACCD Board of Trustees governs nine community colleges and about 200,000 students. Trustees are elected at large, so every voter in the district votes on every seat.',
      'The board sets the budget, hires and evaluates the chancellor, and oversees spending of a $5.3 billion bond. One housing commitment for students and staff of up to $500 million is among the decisions facing the next board (LA Times voter guide).',
    ],
    introParagraphs: [
      'Four candidates are on the ballot; the LA Times received questionnaire responses from three, and Roberto David Lacarra did not respond. The race is nonpartisan.',
    ],
    legalRequirements: LACCD_LEGAL,
    qualificationCriteria: LACCD_CRITERIA,
    candidates: [
      {
        id: 'gabriel-buelna',
        name: 'Gabriel Buelna',
        party: 'NP',
        role: 'Member, LACCD Board of Trustees, Seat 6',
        qualification: q('extensive', 'Buelna is the sitting trustee for this seat, an attorney who teaches history and political science at Cal State Northridge and formerly led a children-and-families nonprofit.', [
          ['met', 'Sitting LACCD trustee, first elected before 2022 and re-elected in 2022; led Plaza Community Services.'],
          ['partial', 'Sitting trustee on a board overseeing the $5.3 billion bond; says he would scrutinize district spending including construction.'],
          ['met', 'Teaches history and political science at Cal State Northridge; priorities include transfer pathways.'],
          ['met', 'Wants paid internships and career technical education.'],
        ]),
        bio: ['Buelna, 54, is an attorney and Cal State Northridge instructor and former head of Plaza Community Services, a nonprofit serving children and families (LA Times voter guide).'],
        recordVsChange: 'He offers continuity on housing, student basic needs and transfer pathways; the guide gives no specific votes or outcomes from his tenure, so the case for change rests mainly on his challengers’ criticism of current trustees.',
        scorecard: sc('✓✓ Student housing, food assistance, mental health; urges the district to "move aggressively" on up to $500 million for housing', '✓ Pursue state, federal and community funds; scrutinize district spending including construction', '✓ Scrutinize construction spending', '✓ Career technical education, paid internships, transfer pathways', { topic: 'Immigrant students', position: '✓ Protect immigrant and undocumented students; expand multilingual education' }),
        money: NO_MONEY,
        endorsements: NO_ENDORSE,
        notes: [TIMES_S6],
      },
      {
        id: 'tonia-arey',
        name: 'Tonia Arey',
        party: 'NP',
        role: 'Realtor',
        qualification: q('limited', 'Arey is a realtor who ran for County Supervisor District 3 in June; she lists no education or governing role.', [
          ['not-met', 'No governing role found; ran unsuccessfully for LA County Supervisor, District 3, in June 2026.'],
          ['partial', 'Would cut administrative costs before classroom or safety spending and strengthen competitive bidding; no budget role found.'],
          ['unknown', 'No education role found.'],
          ['unknown', 'Pursue grants and donations; look at underused district property.'],
        ]),
        bio: ['Arey, 56, is a realtor who ran unsuccessfully in June for the Los Angeles County Board of Supervisors, District 3 (LA Times voter guide).'],
        scorecard: sc('? Campus safety and student success are priorities', '✓ Cut administrative costs before classroom or safety spending; pursue grants and donations; look at underused district property', '✓ Strengthen competitive bidding', '~ Career readiness and accountability to students, employees and taxpayers'),
        money: NO_MONEY,
        endorsements: NO_ENDORSE,
        notes: [TIMES_S6, 'Said current trustees "can no longer be trusted" (LA Times voter guide).'],
      },
      {
        id: 'randall-winston',
        name: 'Randall Winston',
        party: 'NP',
        role: 'Architect',
        qualification: q('some', 'Winston is Los Angeles deputy mayor for infrastructure and climate resilience and previously ran a state sustainable-growth agency, with no prior college board role.', [
          ['partial', 'Deputy mayor under Mayor Karen Bass; formerly ran the California Strategic Growth Council under Gov. Jerry Brown; no board seat held.'],
          ['met', 'Oversees city infrastructure programs; calls for rigorous oversight of the $5.3 billion bond construction program.'],
          ['partial', 'Teaches a leadership course at West Los Angeles College.'],
          ['met', 'Wants apprenticeships with labor and employers, dual enrollment and support for veterans.'],
        ]),
        bio: ['Winston, 44, is an architect and attorney who serves as Los Angeles deputy mayor for infrastructure and climate resilience and teaches a leadership course at West Los Angeles College (LA Times voter guide).'],
        scorecard: sc('✓ More support for veterans and first-generation students', '✓ Boost enrollment to raise state funding; will not balance budgets on instruction', '✓✓ Rigorous oversight of the $5.3 billion bond construction program', '✓✓ Apprenticeships with labor and employers; dual enrollment'),
        money: NO_MONEY,
        endorsements: NO_ENDORSE,
        notes: [TIMES_S6],
      },
      unknownCard('roberto-lacarra', 'Roberto David Lacarra', 'Community College Professor',
        'Lacarra did not respond to the LA Times questionnaire, so no positions or background are available beyond his ballot designation.',
        'limited', 'No documented experience found beyond his ballot designation.', TIMES_S6,
        [U, U, U, U], sc('?', '?', '?', '?'),
        ['Did not respond to the LA Times questionnaire (Oct 1, 2026). Listed on the Registrar’s feed as Roberto David Lacarra; the LA Times spells the surname "LaCarra".']),
    ],
    crossTypology: ct([
      ['PL', 'Buelna', '◐', 'Progressive Left voters favor the incumbent’s emphasis on student housing, food assistance, mental health and immigrant students.'],
      ['EL', 'Winston', '◐', 'Establishment Liberals value the candidate with deputy-mayor management experience and a focus on bond oversight and apprenticeships with labor.', 'Establishment Liberals who weigh time on the board itself could prefer Buelna, the sitting trustee and an attorney who led a children-and-families nonprofit, over Winston’s city-hall management background and more detailed plan for bond oversight.'],
      ['DM', 'Buelna', '◐', 'Democratic Mainstays favor the incumbent with a student-support platform and no documented controversy.'],
      ['OL', 'Buelna', '○', 'Outsider Left voters lean toward the candidate focused on basic needs, with reservations about an incumbent.'],
      ['SS', 'Buelna', '○', 'Stressed Sideliners relate to a focus on affordability, food and housing for students.'],
      ['AR', 'Winston', '○', 'Ambivalent Right voters value the infrastructure-management background and enrollment-first budget approach.', 'Ambivalent Right voters who value continuity could choose Buelna, a sitting trustee who says he would scrutinize construction spending, though they give up Winston’s infrastructure-management record and his pledge not to balance budgets on instruction.'],
      ['PR', 'Arey', '◐', 'Populist Right voters lean toward the outsider who says current trustees cannot be trusted and wants administrative costs cut first.', 'For Populist Right voters, putting experience first means keeping a member of the board Arey says cannot be trusted; the case for Buelna is his time as trustee and his pledge to scrutinize district spending.'],
      ['CC', 'Arey', '◐', 'Committed Conservatives value cutting administration before classrooms and stronger competitive bidding.', 'Committed Conservatives who value a record could accept Buelna, a sitting trustee and attorney who pledges to scrutinize district and construction spending, but they lose Arey’s firmer commitment to cut administration before classrooms and tighten competitive bidding.'],
      ['FF', 'Arey', '○', 'Faith and Flag Conservatives lean toward the realtor and small-business candidate who stresses campus safety, with little other information.', 'Faith and Flag Conservatives who weigh experience might choose Buelna, a sitting trustee and university instructor, though his priorities on immigrant students and aggressive student-housing spending differ from Arey’s emphasis on campus safety.'],
    ]),
    counterArguments: [
      'PR/CC (Arey ◐): But she lists no education or governing experience, and the guide reports no specific allegations behind her distrust of trustees.',
      'EL/AR (Winston): But a sitting deputy mayor would hold a city job while overseeing a separate district, and he has not served on a college board.',
    ],
    readingLinks: [
      { label: 'LA Times voter guide: LACCD Seat 6 (via Yahoo)', url: 'https://www.yahoo.com/news/politics/articles/guide-los-angeles-community-college-100000715.html', summary: 'Candidate questionnaire answers.' },
    ],
  },
];
