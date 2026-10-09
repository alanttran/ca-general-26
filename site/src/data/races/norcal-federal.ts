import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * Northern California federal and Board of Equalization contests (wave 3):
 * BoE-1 (Rocklin 95765), BoE-2 (Hayward 94544, Mountain View 94043), CA-6, CA-14, CA-16.
 * Research as of Oct 8, 2026.
 */

const BOE_LEGAL =
  'Must be a registered voter and elector of the Board of Equalization district; members serve four-year terms with a two-term limit.';

const BOE_CRITERIA = [
  { id: 'tax-admin', label: 'Property- and state-tax administration knowledge', detail: 'The Board oversees county assessors and hears certain property-tax appeals, so understanding assessment law and tax administration matters.' },
  { id: 'hearings', label: 'Quasi-judicial hearings and appeals', detail: 'Members sit as a panel deciding taxpayer appeals and must avoid conflicts with parties before them.' },
  { id: 'agency-mgmt', label: 'Managing or overseeing a public agency', detail: 'The Board oversees the 58 county assessors and has an audit-driven reform history.' },
  { id: 'large-district', label: 'Representing a very large, multi-county district', detail: 'Each of the four BoE districts covers roughly ten million Californians.' },
];

const HOUSE_LEGAL =
  'At least 25 years old, a U.S. citizen for at least 7 years, and an inhabitant of California when elected (U.S. Constitution art. I, section 2); two-year term.';

const HOUSE_CRITERIA = [
  { id: 'lawmaking', label: 'Lawmaking and policy experience', detail: 'The job is writing, amending and voting on federal law.' },
  { id: 'committee-budget', label: 'Committee and budget/appropriations work', detail: 'Most legislative work happens in committees that shape spending and oversight.' },
  { id: 'district-service', label: 'Constituent services and knowledge of the district', detail: 'Members run casework offices and carry local priorities to Washington.' },
  { id: 'coalition', label: 'Coalition-building and passing legislation', detail: 'Little becomes law without bipartisan or cross-chamber partners.' },
];

export const RACES_NORCAL_FEDERAL: Race[] = [
  // ---------------------------------------------------------------- BoE-1
  {
    id: 'boe-d1',
    categoryId: 'statewide',
    title: 'State Board of Equalization, District 1',
    tldrLabel: 'BoE-1',
    legalRequirements: BOE_LEGAL,
    qualificationCriteria: BOE_CRITERIA,
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The Board of Equalization oversees how the state’s 58 county assessors administer property tax, assesses property tax on some utility and cross-county property, and hears certain property-tax appeals. Its other powers were largely stripped in 2017 after an audit found serious problems; members earn about $184,000 a year (Mountain View Voice).',
      'District 1 is an inland seat held by a Republican who is term-limited, and Democrats hold only about a 4-point registration edge, so it is the most competitive of the four BoE districts (KPBS/CalMatters). The winner votes on assessment rules and taxpayer appeals that affect homeowners, farms, oil and gas operations and utilities.',
    ],
    introParagraphs: [
      'In the June 2 five-way primary, Republican state Sen. Shannon Grove and Democratic Fresno City Councilmember Nelson Esparza finished in a near tie at about 34% each; in unofficial Secretary of State returns Grove led by roughly 20,000 votes (about 634,000 to 614,000), well ahead of Donald Williamson (about 15%) and Dusty Beach (about 12%).',
      'The contest turns on whether voters want a 14-year legislator and former Senate Republican leader with a far larger war chest, or a city councilmember backed by the state Democratic Party and organized labor. No public polling of this race is available.',
    ],
    readingLinks: [
      {
        label: 'KPBS/CalMatters — BoE has little power; donors still spent millions',
        url: 'https://www.kpbs.org/news/politics/2026/06/15/the-board-of-equalization-has-little-power-campaign-donors-still-spent-millions-on-it',
        summary: 'June 15 explainer on what the Board does, the Grove–Esparza matchup and Grove’s oil, gas and agriculture donors.',
      },
      {
        label: 'CalMatters Digital Democracy — Board of Equalization campaign finance',
        url: 'https://calmatters.org/digital-democracy/2026/06/board-of-equalization-campaign-finance/',
        summary: 'Donor breakdown for Grove and fundraising totals for the District 1 contest.',
      },
      {
        label: 'Secretary of State — BoE District 1 results',
        url: 'https://dp.electionresults.sos.ca.gov/returns/board-of-equalization/district/1',
        summary: 'Districtwide and county-by-county primary returns.',
      },
    ],
    candidates: [
      {
        id: 'nelson-esparza',
        photoSlug: 'nelson-esparza',
        name: 'Nelson Esparza',
        party: 'D',
        role: 'Teacher/Economist/Councilmember',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'A Fresno city councilmember since 2019 and council president who chairs its finance and audit committee, with no tax-appeals or assessment role and no experience beyond a single city.',
          criteria: [
            { criterionId: 'tax-admin', assessment: 'partial', evidence: 'Chairs the Fresno City Council Finance and Audit Committee (Wikipedia); no assessor or tax-agency role found.' },
            { criterionId: 'hearings', assessment: 'unknown', evidence: 'No public record found of service on a tax-appeals or other adjudicative body.' },
            { criterionId: 'agency-mgmt', assessment: 'partial', evidence: 'Fresno City Council member since January 2019 and council president (2022 and again from March 2026); has not run an agency.' },
            { criterionId: 'large-district', assessment: 'not-met', evidence: 'Represents one council district in one city; elected to the Fresno County Office of Education board in 2016, but no multi-county office.' },
          ],
        },
        bio: [
          'Economics instructor at Fresno City College with a master’s in public policy from UCLA. Elected to the Fresno County Office of Education board in 2016 and to the Fresno City Council (District 7) in 2018; re-elected in 2022 and serving as council president.',
          'He first filed for the Board of Equalization in 2022 and launched this campaign in January 2026, after suspending a 2024–25 state Senate bid.',
        ],
        scorecard: [
          { topic: 'Property-tax administration', position: '? No specific assessment-policy platform found', comparison: 'Grove has legislated on tax, insurance and budget matters for 14 years but also lacks an assessor or appeals role.' },
          { topic: 'Taxes / Prop 13', position: '? No public position found', comparison: 'Grove’s record is as a Republican opposing tax increases; no Prop 13 plan for the Board is on her record.' },
          { topic: 'Oversight & conflicts', position: '✓ Donor base is largely labor and party groups; raised about $186,000', comparison: 'Grove raised nearly $1.8 million, including oil, gas and agriculture money.' },
          { topic: 'Energy / oil regulation', position: '? No public position found', comparison: 'Grove authored SB 1039 to ease some refinery monitoring requirements and backed Kern oil-permit approvals.' },
          { topic: 'Agriculture & water', position: '? No public position found', comparison: 'Grove has pushed more water for Central Valley farmers.' },
        ],
        money: 'About $186,000 raised through the June primary (KPBS/CalMatters, June 2026). No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements:
          'California Democratic Party (90% in the March 2026 convention endorsing vote) and the California Labor Federation; Reps. Jim Costa and Adam Gray (Wikipedia).',
        redFlags: [
          {
            severity: 'notable',
            status: 'cleared',
            text: 'In 2022 the Fresno County District Attorney charged Esparza, then council president, with felony attempted extortion over an April 22, 2022 conversation with then-City Attorney Doug Sloan, in which he was accused of threatening Sloan’s job if Sloan did not follow a council resolution. A judge reduced the charge to a misdemeanor in November 2022, and the DA dismissed the case on Dec. 5, 2022 “in the interest of justice” after new information Esparza provided. In court he said his words “could have implied a threat to fire Sloan” but were misunderstood, and he has said he was exonerated.',
            whyItMatters:
              'Board of Equalization members must stay impartial toward parties before them, and the case concerned whether an elected official pressured an appointed attorney.',
            sources: [
              { label: 'KVPR (Dec. 2022)', url: 'https://www.kvpr.org/local-news/2022-12-06/criminal-charges-are-dismissed-against-fresno-city-council-president' },
              { label: 'ABC30 (Dec. 2022)', url: 'https://abc30.com/post/nelson-esparza-attempted-extortion-case-charges-dropped-city-council-president/12528566/' },
              { label: 'Fresno County DA press release (Dec. 5, 2022)', url: 'https://www.fresnocountyca.gov/files/sharedassets/county/v/1/district-attorney/press-releases/2022/120522-district-attorneys-1.pdf' },
            ],
          },
        ],
        notes: [
          'Primary finish: about 34% (unofficial), within roughly 20,000 votes of Grove.',
          'In March 2018 he hesitated at a forum to back Black Lives Matter, calling it “divisive rhetoric,” a criticism that followed his first council campaign (Wikipedia).',
        ],
      },
      {
        id: 'shannon-grove',
        photoSlug: 'shannon-grove',
        name: 'Shannon Grove',
        party: 'R',
        role: 'State Senator/Businesswoman',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary:
            'A legislator since 2010 who led the Senate Republican caucus and sat on budget and insurance committees, but has no tax-appeals or assessment role.',
          criteria: [
            { criterionId: 'tax-admin', assessment: 'partial', evidence: 'Assembly Budget and Insurance Committee member (Wikipedia); no assessor or tax-agency role found.' },
            { criterionId: 'hearings', assessment: 'unknown', evidence: 'No public record found of service on an adjudicative body; has voted as a legislator, not decided appeals.' },
            { criterionId: 'agency-mgmt', assessment: 'partial', evidence: 'Senate Minority Leader March 2019 to January 2021; CEO of a staffing company she co-founded in 1993; has not run a public agency.' },
            { criterionId: 'large-district', assessment: 'partial', evidence: 'State senator for the 12th District since 2022 (16th District 2018–2022), after the Assembly 2010–2016; a legislative district is smaller than a BoE district.' },
          ],
        },
        bio: [
          'Bakersfield Republican and Army veteran who served in the Assembly (2010–2016) and has been in the state Senate since December 2018. She was Senate Minority Leader from March 2019 to January 2021, when her caucus replaced her with Sen. Scott Wilk.',
          'She co-founded a temporary staffing company in 1993 and is its CEO. She is running on her legislative experience and has backed agriculture, water and oil-and-gas interests.',
        ],
        scorecard: [
          { topic: 'Property-tax administration', position: '? No specific assessment-policy platform found', comparison: 'Esparza has no assessment role either.' },
          { topic: 'Taxes / Prop 13', position: '~ Republican legislator with a record of opposing tax increases; no Board-specific Prop 13 plan found', comparison: 'Esparza has no public tax platform.' },
          { topic: 'Oversight & conflicts', position: '~ Raised nearly $1.8 million; donors overlap with her legislation', comparison: 'Esparza raised about $186,000, mostly from party and labor groups.' },
          { topic: 'Energy / oil regulation', position: '✓ Backed a deal letting Kern County approve up to 2,000 new oil-well permits a year; authored SB 1039 to ease some refinery monitoring', comparison: 'Esparza has no public position on oil regulation.' },
          { topic: 'Agriculture & water', position: '✓ Has pushed to increase water availability for Central Valley farmers', comparison: 'Esparza has no public water platform.' },
        ],
        recordVsChange:
          'Grove brings 14 years of legislative experience and a record of close ties to Central Valley agriculture and energy; the case for change is mainly partisan and about donor influence, since both finalists lack a tax-administration background.',
        money:
          'Nearly $1.8 million raised through the June primary, much from Central Valley business owners, including more than $76,000 from oil and gas interests and more than $120,000 from agriculture (CalMatters Digital Democracy, June 2026). No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements: 'No published endorsement list found. Her ballot party is Republican.',
        redFlags: [
          {
            severity: 'notable',
            status: 'documented',
            text: 'Grove has taken oil and gas money (over $76,000 since 2023 from companies such as Signal Hill Petroleum, Valero and California Resources Corporation) and, in February 2026, authored SB 1039, which could ease pollutant-monitoring requirements for certain refineries; the president of San Joaquin Refining, who has given her $17,300, was a main supporter witness. Her spokesperson, Duane Dicharia, said her actions are not tied to campaign contributions. No complaint or finding has been reported.',
            whyItMatters:
              'Board members rule on taxpayer and utility appeals, so a donor base that overlaps with industries she regulates is the kind of conflict the Board’s disclosure rules address.',
            sources: [
              { label: 'CalMatters Digital Democracy (June 2026)', url: 'https://calmatters.org/digital-democracy/2026/06/board-of-equalization-campaign-finance/' },
              { label: 'KPBS/CalMatters (June 2026)', url: 'https://www.kpbs.org/news/politics/2026/06/15/the-board-of-equalization-has-little-power-campaign-donors-still-spent-millions-on-it' },
            ],
          },
        ],
        notes: [
          'On Jan. 6, 2021, as Senate Republican leader, she posted (then deleted) a tweet claiming the Capitol riot “was Antifa”; PolitiFact rated the claim Pants on Fire (Jan. 7, 2021) https://www.politifact.com/factchecks/2021/jan/07/shannon-grove/high-ranking-california-republican-lawmaker-pushes. Wikipedia reports she also promoted false claims of fraud in the 2020 presidential election.',
          'In September 2020 she spoke at a Capitol gathering without a mask while under a state quarantine order (Wikipedia).',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Esparza', '◐', 'Progressive Left voters want the Democrat backed by labor and the party over a Republican whose donors include oil, gas and agriculture, even though Esparza has no developed tax platform.'],
      ['EL', 'Esparza', '●', 'Establishment Liberals value the California Democratic Party-endorsed candidate who has run a city council finance committee over a Republican legislator with refinery-industry donors.'],
      ['DM', 'Esparza', '●', 'Democratic Mainstays are party-loyal and follow the Democratic Party and labor endorsements in a down-ballot race they know little about.'],
      ['OL', 'Esparza', '○', 'Outsider Left voters distrust the Democratic establishment, but still prefer the local councilmember over a former Republican caucus leader who amplified false claims about Jan. 6.'],
      ['SS', '—', '—', 'Stressed Sideliners have little information about this low-profile Board and no clear stake in either finalist, so no pick is made.', 'Neither finalist speaks clearly to Stressed Sideliners’ everyday concerns, so experience becomes the tie-breaker: Grove has 14 years in the Legislature, including budget and insurance committee work, though her oil and gas donors overlap with industries the Board affects.'],
      ['AR', 'Grove', '◐', 'Ambivalent Right voters who want experienced, business-friendly stewardship of property-tax rules may prefer a 14-year legislator, while weighing her donor overlap.'],
      ['PR', 'Grove', '●', 'Populist Right voters back the Republican who has championed Central Valley farmers and oil production against the Democratic-labor-backed opponent.'],
      ['CC', 'Grove', '●', 'Committed Conservatives prefer the Republican legislator with a record of opposing tax increases and supporting energy and agriculture.'],
      ['FF', 'Grove', '●', 'Faith and Flag Conservatives back the Republican nominee against the Democratic Party’s candidate on party and limited-government grounds.'],
    ]),
    counterArguments: [
      'EL (Esparza ●): But consider that Esparza was charged in 2022 with attempted extortion; the case was dismissed “in the interest of justice,” yet he acknowledged his words could have implied a threat, and a Board that hears taxpayer appeals depends on impartiality.',
      'CC (Grove ●): But consider that Grove’s donors overlap with industries affected by her legislation, which sits uneasily with a Board that must avoid conflicts, and that her 2021 antifa claim was rated Pants on Fire.',
    ],
  },

  // ---------------------------------------------------------------- BoE-2
  {
    id: 'boe-d2',
    categoryId: 'statewide',
    title: 'State Board of Equalization, District 2',
    tldrLabel: 'BoE-2',
    legalRequirements: BOE_LEGAL,
    qualificationCriteria: BOE_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'The Board of Equalization oversees how the state’s 58 county assessors administer property tax, assesses property tax on some utility and railroad property, and hears certain property-tax appeals. District 2 covers about 10.5 million Californians across 19 counties, and members earn about $184,000 a year (Mountain View Voice).',
      'Both finalists are Democrats, so the choice is about the office itself: whether to keep a lean, reformed Board under an incumbent chair, or to elect a challenger who says the Board should be folded into other tax agencies.',
    ],
    introParagraphs: [
      'In the June 2 primary, incumbent Sally Lieber won about 57% (about 1.14 million votes) and John Pimentel finished second with about 15% (about 308,000), ahead of four Republicans, per unofficial Secretary of State returns. Both are Democrats, so the party label does not decide this race.',
      'Pimentel argues the Board is a patronage post whose work could move to the state’s other tax agencies; Lieber says it is a useful, lean body that audits county assessors. No public polling of this race is available.',
    ],
    readingLinks: [
      {
        label: 'Mountain View Voice — Should the state’s tax commission even exist?',
        url: 'https://www.mv-voice.com/election/2026/05/19/should-the-states-tax-commission-even-exist/',
        summary: 'May 19 profile of both candidates and the argument for and against abolishing the Board, including views from assessors.',
      },
      {
        label: 'KPBS/CalMatters — BoE has little power; donors still spent millions',
        url: 'https://www.kpbs.org/news/politics/2026/06/15/the-board-of-equalization-has-little-power-campaign-donors-still-spent-millions-on-it',
        summary: 'June 15 explainer on what the Board does and the money in BoE races.',
      },
      {
        label: 'GrowSF — BoE District 2 recommendation (Nov. 2026)',
        url: 'https://growsf.org/voter-guide/san-francisco-voter-guide-november-2026-election/contests/board-of-equalization/',
        summary: 'Opinion-based voter guide recommending Pimentel; labeled as an advocacy group’s guide.',
      },
    ],
    candidates: [
      {
        id: 'sally-lieber',
        photoSlug: 'sally-lieber',
        name: 'Sally Lieber',
        party: 'D',
        role: 'Incumbent',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'The sitting District 2 member since 2023, serving as Board chair, after six years in the Assembly and service as a Mountain View council member and mayor.',
          criteria: [
            { criterionId: 'tax-admin', assessment: 'met', evidence: 'Board of Equalization member since January 2023; works with nonprofits on property-tax exemptions and educates residents on Prop. 19 (Mountain View Voice).' },
            { criterionId: 'hearings', assessment: 'met', evidence: 'Sits on the Board that hears taxpayer appeals; served on the Assembly Judiciary Committee.' },
            { criterionId: 'agency-mgmt', assessment: 'met', evidence: 'Board chair as of July 2026 (BoE memo); earlier Mountain View vice mayor and mayor and chair of the Santa Clara Valley Water District’s Water Commission.' },
            { criterionId: 'large-district', assessment: 'met', evidence: 'Represents District 2, about 10.5 million people in 19 counties; Assembly member for the 22nd District 2002–2008.' },
          ],
        },
        bio: [
          'Former Assembly member (22nd District, 2002–2008) who served as Speaker pro Tempore from 2006 to 2008, after serving on the Mountain View City Council from 1998 as vice mayor and mayor. Elected to the Board of Equalization in 2022.',
          'She defends the Board as a lean, effective body that answers taxpayers’ questions, works with lawmakers on tax legislation and audits county assessors.',
        ],
        scorecard: [
          { topic: 'Property-tax administration', position: '✓✓ Sitting member; helps nonprofits and affordable-housing providers with exemptions; educates residents on Prop. 19', comparison: 'Pimentel has no assessment or Board experience.' },
          { topic: 'Keep or abolish the Board', position: '✓ Keep it; calls it “lean and effective” and says its governance changed after the 2017 breakdown', comparison: 'Pimentel would fold the Board’s work into other tax agencies.' },
          { topic: 'Oversight & reform', position: '~ Chairs the Board; does not propose structural change', comparison: 'Pimentel proposes eliminating the elected board.' },
          { topic: 'Tax fairness', position: '? No specific platform found for this race', comparison: 'Pimentel says he would end the sales tax on food and close corporate loopholes, which are outside the Board’s powers.' },
          { topic: 'Campaign money', position: '? No current filing totals found', comparison: 'No current filing totals found for Pimentel either.' },
        ],
        recordVsChange:
          'Lieber brings Board experience, a chair’s role and a clean public record of conduct in office; the case for change rests on Pimentel’s argument that the office should not exist, not on a failure by Lieber.',
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/. She told Mountain View Voice she was glad not to be in a “big money race.”',
        endorsements: 'No published endorsement list found.',
        redFlags: [],
        notes: [
          'GrowSF’s voter guide, which backs Pimentel, calls her record “scandal-free and competent”; its objection is to the office, not her conduct (GrowSF).',
          'Lost the 2012 state Senate race and a 2023 county supervisor race (Wikipedia).',
        ],
      },
      {
        id: 'john-pimentel',
        name: 'John Pimentel',
        party: 'D',
        role: 'Member, Board of Trustees, San Mateo County Community College District',
        qualification: {
          level: 'some',
          legal: 'meets',
          summary:
            'A Menlo Park Democrat with transportation-agency, housing-commission and renewable-energy development experience but no tax-administration, appeals or elected multi-county role.',
          criteria: [
            { criterionId: 'tax-admin', assessment: 'not-met', evidence: 'No assessor, tax-agency or property-tax appeals role found.' },
            { criterionId: 'hearings', assessment: 'partial', evidence: 'Served as a Menlo Park housing commissioner (per The Ballot Brief citing his campaign site), a local advisory body.' },
            { criterionId: 'agency-mgmt', assessment: 'partial', evidence: 'Reported as a former state Deputy Secretary for Transportation (The Ballot Brief citing his campaign site); says he developed more than $1.5 billion of renewable-energy projects.' },
            { criterionId: 'large-district', assessment: 'not-met', evidence: 'No multi-county elected office found.' },
          ],
        },
        bio: [
          'Menlo Park Democrat and former Deputy Secretary for Transportation and Menlo Park housing commissioner, who says he developed more than $1.5 billion in wind, solar, biofuel and water-recycling projects.',
          'He is running to reform the Board of Equalization or eliminate it, arguing the tax system is needlessly fragmented and the Board is a “sinecure for retired legislators.”',
        ],
        scorecard: [
          { topic: 'Property-tax administration', position: '? No administration experience; would shift the Board’s duties to other agencies', comparison: 'Lieber is a sitting member who audits county assessors.' },
          { topic: 'Keep or abolish the Board', position: '✓✓ Would fold the Board’s remaining work into the state’s other tax agencies', comparison: 'Lieber defends the Board as lean and effective.' },
          { topic: 'Oversight & reform', position: '✓ Says his campaign is about transparency and accountability, and about ending a patronage post', comparison: 'Lieber says governance already reformed after 2017.' },
          { topic: 'Tax fairness', position: '✓ Says in his candidate statement that he would end the sales tax on food and close loopholes for large corporations and the wealthy', comparison: 'Lieber has no comparable platform; the Board does not set tax rates.' },
          { topic: 'Campaign money', position: '? No current filing totals found', comparison: 'Lieber has no current totals found either.' },
        ],
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements:
          'The San Francisco Chronicle editorial board argued for abolishing the Board and called Pimentel the best candidate, without a formal endorsement (Mountain View Voice, May 2026); GrowSF voter guide (Nov. 2026) recommends him.',
        redFlags: [],
        notes: [
          'Critics of abolition, including Santa Clara County’s former assessor Larry Stone and the California Assessors’ Association, say the Board promotes uniformity and audits each county assessor every five years (Mountain View Voice).',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Lieber', '◐', 'Progressive Left voters value Lieber’s legislative record, including marriage-equality and death-penalty-moratorium bills, and her work on property-tax exemptions for affordable housing, though Pimentel’s corporate-loophole message appeals to them.'],
      ['EL', 'Lieber', '●', 'Establishment Liberals value an experienced incumbent chair and former Speaker pro Tem who runs the institution competently and without scandal.'],
      ['DM', 'Lieber', '●', 'Democratic Mainstays favor the familiar incumbent over a challenger proposing to eliminate the office, and both are Democrats.'],
      ['OL', 'Pimentel', '◐', 'Outsider Left voters distrust entrenched institutions and “sinecure” jobs, so Pimentel’s pledge to eliminate his own job and end the sales tax on food fits.', 'Outsider Left voters who weigh experience could back Lieber, a sitting member who helps nonprofits and affordable-housing providers win property-tax exemptions, though it means keeping the kind of entrenched post Pimentel promises to abolish, along with his pledge to end the sales tax on food.'],
      ['SS', 'Pimentel', '○', 'Stressed Sideliners, skeptical of insiders and unfamiliar with the Board, may respond to a plain message that the office is unnecessary, a weak lean at best.', 'Stressed Sideliners who would rather have someone who already knows the job could pick Lieber, who answers residents’ property-tax questions and explains Prop. 19 as a sitting member, giving up Pimentel’s simple message that the office is unnecessary.'],
      ['AR', 'Pimentel', '◐', 'Ambivalent Right voters wary of government waste may like the pitch to cut a redundant agency, even from a Democrat.', 'Ambivalent Right voters who value proven management could pick Lieber, a former mayor and Assembly member who now chairs a Board she calls lean and reformed since 2017, while giving up the chance to cut what Pimentel calls a redundant agency.'],
      ['PR', 'Pimentel', '○', 'Populist Right voters distrust political insiders and may prefer the outsider who attacks a patronage post, though neither finalist is a Republican.', 'Populist Right voters who distrust insiders but put a working track record first could pick Lieber, whose conduct in office even Pimentel’s backers call scandal-free, though that means keeping a former Speaker pro Tem in what Pimentel calls a patronage post.'],
      ['CC', 'Pimentel', '○', 'Committed Conservatives favor smaller government, so a plan to abolish a tax board has some appeal, though both finalists are Democrats and Pimentel also wants to close corporate tax loopholes.', 'Committed Conservatives who prize careful stewardship could pick Lieber, the Board chair who oversees audits of county assessors, giving up Pimentel’s smaller-government pitch to fold the Board into other agencies; it is a vote between two Democrats either way.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no clear fit between two Democrats on a tax-administration board, so no pick is made.', 'Neither Democrat speaks to Faith and Flag Conservatives’ priorities, so experience breaks the tie: Lieber is the sitting Board chair, with six years in the Assembly and earlier service as Mountain View mayor.'],
    ]),
    counterArguments: [
      'EL (Lieber ●): But consider Pimentel’s argument that the Board is a $184,000-a-year patronage post whose work state tax agencies could do, a view the Chronicle editorial board shared.',
      'OL (Pimentel ◐): But consider that Lieber and the assessors’ association say the Board audits each of the 58 county assessors every five years, a check that might be lost if it were abolished.',
    ],
  },

  // ---------------------------------------------------------------- CA-6
  {
    id: 'us-rep-ca6',
    categoryId: 'federal',
    title: 'U.S. Representative, 6th District',
    tldrLabel: 'CA-6',
    legalRequirements: HOUSE_LEGAL,
    qualificationCriteria: HOUSE_CRITERIA,
    seatContext: 'Incumbent (different district)',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense spending and oversight of the executive branch, and staffs a casework office that helps constituents with federal agencies, veterans’ benefits and passports.',
      'This race pits a Democrat against the only independent in the U.S. House, so it tests both who controls the narrowly divided chamber and whether voters want a member who is not tied to a party caucus.',
    ],
    introParagraphs: [
      'CA-6, redrawn under Proposition 50, covers Sacramento and Placer County (including Rocklin) and is rated Solid Democratic by Cook Political Report. In the June 2 primary, Rep. Kevin Kiley led with about 24% (47,165 votes) and former state Sen. Richard Pan placed second with about 23% (45,008), edging Republican Michael Stansfield.',
      'Kiley, who represented the 3rd District since 2023, changed his registration from Republican to No Party Preference in March 2026 and says he still caucuses with Republicans for committee seats only. The two held their first debate on Aug. 17, hosted by The Sacramento Bee. No public polling of this race is available.',
    ],
    readingLinks: [
      {
        label: 'CalMatters — Pan and Kiley on health care (Sept. 2026)',
        url: 'https://calmatters.org/health/2026/09/pan-kiley-california-district-healthcare/',
        summary: 'Side-by-side on ACA tax credits, Medicaid, vaccines and coverage for undocumented immigrants.',
      },
      {
        label: 'AP/Sacramento Bee — Kiley and Pan debate for the first time',
        url: 'https://kdhnews.com/news/politics/6th-district-candidates-kevin-kiley-richard-pan-debate-for-first-time/article_9ac71720-ac12-5654-88ef-06638d49e2e3.html',
        summary: 'Aug. 17 debate: Kiley blamed Sacramento and cited Pan’s 2017 gas-tax vote; Pan pointed to Kiley’s votes with President Trump.',
      },
      {
        label: 'CNN — Kiley leaves the Republican Party (March 9, 2026)',
        url: 'https://krdo.com/politics/cnn-us-politics/2026/03/09/california-congressman-is-leaving-the-republican-party-to-become-an-independent-amid-tough-reelection-race/',
        summary: 'Kiley’s stated reasons for dropping his party label and how he will caucus.',
      },
    ],
    candidates: [
      {
        id: 'richard-pan',
        photoSlug: 'richard-pan',
        name: 'Richard Pan',
        party: 'D',
        role: 'Doctor/Health Advocate',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary:
            'A pediatrician who served 12 years in the state Legislature, including eight in the Senate, with a record of passing major health legislation, but no federal office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Assembly 2010–2014 and Senate 2014–2022; authored SB 277 (2015) ending personal-belief vaccine exemptions and newborn-screening expansions (Wikipedia).' },
            { criterionId: 'committee-budget', assessment: 'unknown', evidence: 'No committee or budget leadership roles confirmed in sources reviewed.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Represented the Sacramento-area 6th Senate District 2014–2022; lives in Sacramento and chaired the AAPI Legislative Caucus (2020–2022).' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Passed SB 277 with Sen. Ben Allen and other bills through the Legislature.' },
          ],
        },
        bio: [
          'Pediatrician and UC Davis professor who led its pediatric residency program. Served in the Assembly (2010–2014) and the state Senate (2014–2022); ran for Sacramento mayor in 2024 and finished third in the primary.',
          'Best known for SB 277 (2015), which ended personal-belief and religious exemptions to school vaccine requirements, and for newborn-screening and children’s Medi-Cal bills. He sits on the state’s affordability office board.',
        ],
        scorecard: [
          { topic: 'Health care', position: '✓✓ Supports reinstating the expired enhanced ACA subsidies; backs universal coverage but not single-payer; defends state Medi-Cal coverage for undocumented adults despite its cost of over $10 billion a year', comparison: 'Kiley also wants the credits addressed but voted for the 2025 law that cuts Medicaid and opposes the state coverage expansion.' },
          { topic: 'Housing', position: '? No specific position found', comparison: 'Kiley has no specific housing platform in sources reviewed either.' },
          { topic: 'Climate', position: '? No specific position found', comparison: 'Kiley supports ending federal funding for California high-speed rail.' },
          { topic: 'Taxes & affordability', position: '~ Voted for the 2017 state gas-tax increase, which Kiley attacked in the Aug. 17 debate', comparison: 'Kiley introduced a bill to stop states from retroactively taxing former residents’ assets.' },
          { topic: 'Trump / House majority', position: '✓ Democrat; argues Kiley’s votes align with Trump', comparison: 'Kiley, though independent, caucuses with Republicans and voted for the 2025 budget law.' },
          { topic: 'Vaccines', position: '✓✓ Author of California’s school-vaccine mandate law', comparison: 'Kiley calls vaccines “vital” but opposes mandates and has introduced a bill to bar state and local vaccine mandates.' },
        ],
        money:
          'No current filing totals found; third-quarter reports are due Oct. 15, 2026. See the FEC candidate page https://www.fec.gov/data/candidates/house/?state=CA&district=06.',
        endorsements:
          'Per the partisan Blue Voter Guide: California Federation of Labor Unions, Placer County Democratic Party, Planned Parenthood Action Fund, Equality California, New Democrat Coalition, J Street PAC and the National Union of Healthcare Workers; also ASPIRE PAC and CAPA21.',
        redFlags: [],
        notes: [
          'Primary finish: about 23% (45,008 votes), second behind Kiley’s 24%; Democrats had feared a split vote could lock them out of the November ballot.',
          'His vaccine bills drew organized opposition and a recall petition; he received death threats and a critic was cited for misdemeanor assault after shoving him near the Capitol (CBS Sacramento) https://www.cbsnews.com/sacramento/news/richard-pan-assaulted-austin-bennett-push-vaccine-critic-sacramento/.',
        ],
      },
      {
        id: 'kevin-kiley',
        photoSlug: 'kevin-kiley',
        name: 'Kevin Kiley',
        party: 'NP',
        role: 'United States Representative',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'A sitting member of Congress since 2023, after six years in the Assembly, who served on three House committees and led a bipartisan health-credit bill and a discharge petition.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'U.S. House since January 2023 and Assembly 2016–2022; co-authored a bipartisan bill with Rep. Sam Liccardo to extend the enhanced ACA credits for two years (CalMatters).' },
            { criterionId: 'committee-budget', assessment: 'partial', evidence: 'Served on Education and Workforce (subcommittee chair), Judiciary, and Transportation and Infrastructure; the chairs said his seats were vacated March 18, 2026 after he left the Republican Conference (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Born in Rocklin and represented the old 3rd District, but the new 6th District is a different, mostly Sacramento-area seat.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Supplied the 218th signature on the Ukraine Support Act discharge petition on May 13, 2026; one of six Republicans voting Feb. 11, 2026 to end the Canada-tariff emergency (Wikipedia).' },
          ],
        },
        bio: [
          'Rocklin native with degrees from Harvard, Loyola Marymount and Yale Law. Assemblymember from 2016 to 2022, a candidate in the 2021 recall of Gov. Newsom, and U.S. representative for the 3rd District since 2023.',
          'On March 9, 2026 he left the Republican Party and became the only independent in the House, citing frustration with partisanship and redistricting wars he blamed on both parties and on Gov. Newsom; he re-registered as No Party Preference and says he caucuses with Republicans only for committee assignments.',
        ],
        scorecard: [
          { topic: 'Health care', position: '~ Voted for the 2025 federal law that the CBO says cuts federal Medicaid spending by nearly $1 trillion over a decade and backs work requirements; co-wrote a bipartisan two-year extension of the enhanced ACA credits and calls letting them expire a mistake', comparison: 'Pan supports reinstating the credits and opposes the Medicaid cuts.' },
          { topic: 'Housing', position: '? No specific position found', comparison: 'Pan has no specific housing platform in sources reviewed either.' },
          { topic: 'Taxes & affordability', position: '✓ Introduced a bill barring states from retroactively taxing former residents’ assets, aimed at a proposed California billionaire tax; blames Sacramento policies for costs', comparison: 'Pan voted for the 2017 gas-tax increase.' },
          { topic: 'Trump / House majority', position: '~ Left the GOP label but still caucuses with Republicans; one of six Republicans to vote against the Canada-tariff emergency; will stop caucusing with Republicans if reelected', comparison: 'Pan is a Democrat who says Kiley’s votes align with the president.' },
          { topic: 'Ukraine & oversight', position: '✓ Supplied the 218th signature on the Ukraine Support Act discharge petition (May 13, 2026)', comparison: 'Pan has no federal record on this.' },
          { topic: 'Climate & transportation', position: '✗ Authored a bill to prohibit federal funding for California high-speed rail', comparison: 'Pan has no stated position on the rail project.' },
        ],
        recordVsChange:
          'Kiley brings three terms of House experience, a bipartisan health bill and a record of breaking with his party on tariffs and Ukraine, but also a vote for the 2025 budget law and continued caucusing with Republicans; replacing him trades that incumbency for a Democrat’s vote on organizing the House.',
        money:
          'No current filing totals found; third-quarter reports are due Oct. 15, 2026. See the FEC candidate page https://www.fec.gov/data/candidate/H6CA03158/.',
        endorsements: 'Placer County Republican Party (CalMatters, Sept. 2026). No other organizational endorsements found.',
        redFlags: [],
        notes: [
          'Party label: his ballot party preference is No Party Preference since he re-registered in March 2026. He said he left the Republican Party out of frustration with “hyper-partisanship” and a “pointless redistricting war” and keeps caucusing with Republicans only to hold committee seats (CNN). Critics, including the partisan group CAPA21, say he still votes with Republicans.',
          'The California FPPC closed sworn complaints about his 2021 governor and 2022 Assembly campaigns in 2024 and April 2026 for insufficient evidence of a violation, and an FEC complaint was dismissed, per agency letters; no House Ethics investigation was found https://www.fppc.ca.gov/siteassets/documents/enforcement_div/enf_letters/2026/april/no-action-closure-letter-re-fppc-no.-2024-00383-kevin-kiley-for-assembly-2022-kevin-kiley_redacted.pdf.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Pan', '●', 'Progressive Left voters want the Democrat who would reinstate ACA credits and oppose the Medicaid cuts Kiley voted for, even though Pan stops short of single-payer.'],
      ['EL', 'Pan', '●', 'Establishment Liberals value a pediatrician with 12 years of lawmaking who authored major public-health legislation and would vote to organize the House under Democrats.'],
      ['DM', 'Pan', '●', 'Democratic Mainstays favor the Democrat backed by the county party and labor on health care and Medicaid over a member who caucuses with the Republicans.'],
      ['OL', 'Pan', '◐', 'Outsider Left voters are wary of Democratic insiders, but Kiley’s votes for the 2025 Medicaid cuts and continued Republican caucusing make Pan the closer fit.'],
      ['SS', 'Kiley', '○', 'Stressed Sideliners, who distrust both parties, may respond to an independent label and cost-of-living pitch, but Kiley’s votes with Republicans keep this a weak lean.'],
      ['AR', 'Kiley', '◐', 'Ambivalent Right voters who want independent-minded Republicans fit Kiley’s breaks with Trump on tariffs and Ukraine and his bipartisan ACA bill.'],
      ['PR', 'Kiley', '◐', 'Populist Right voters favor his votes for the 2025 budget law and attacks on Sacramento, but his tariff and Ukraine votes and party switch temper enthusiasm.'],
      ['CC', 'Kiley', '●', 'Committed Conservatives prefer the member who voted for the 2025 law, opposes state vaccine mandates and caucuses with Republicans over the author of California’s vaccine mandate.'],
      ['FF', 'Kiley', '◐', 'Faith and Flag Conservatives prefer the member who opposes vaccine mandates, though he left the Republican Party and voted against Trump’s tariff emergency.'],
    ]),
    counterArguments: [
      'PL (Pan ●): But consider that Pan voted for the 2017 gas-tax increase, which Kiley attacked in the debate, and that Pan’s state-level record on costs is part of what Kiley says makes California unaffordable.',
      'CC (Kiley ●): But consider that Kiley left the Republican Party, voted against Trump’s Canada-tariff emergency and signed the Ukraine discharge petition, so his votes may not be reliable for conservatives, and he says he will stop caucusing with Republicans if reelected.',
    ],
  },

  // ---------------------------------------------------------------- CA-14
  {
    id: 'us-rep-ca14',
    categoryId: 'federal',
    title: 'U.S. Representative, 14th District',
    tldrLabel: 'CA-14',
    legalRequirements: HOUSE_LEGAL,
    qualificationCriteria: HOUSE_CRITERIA,
    seatContext: 'Incumbent (since Sept. 2026)',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense spending and oversight of the executive branch, and staffs a casework office that helps constituents with federal agencies, veterans’ benefits and passports.',
      'With two Democrats on the ballot, the seat will stay Democratic; at stake is whether the East Bay sends a progressive state senator who calls for ending military aid to Israel or a moderate BART board president backed by a Latino-focused PAC and by AIPAC-affiliated spending.',
    ],
    introParagraphs: [
      'CA-14 was held by Eric Swalwell, who left the governor’s race and resigned in April 2026 amid sexual-assault allegations he denies. State Sen. Aisha Wahab led the June 2 primary with about 38% and won the Aug. 18 special election for the rest of his term over BART board president Melissa Hernandez, roughly 53% to 47%; both advance to November for the full term under new Proposition 50 lines centered on the southern Tri-Valley, Fremont and Hayward.',
      'Politico framed the contest as a proxy fight between populist progressives and moderates in the Democratic Party. The two met in their only debate on Oct. 7, hosted by the Dublin Chamber of Commerce. No public polling of this race is available.',
    ],
    readingLinks: [
      {
        label: 'PBS NewsHour/AP — Wahab wins special election to replace Swalwell',
        url: 'https://www.pbs.org/newshour/politics/state-lawmaker-aisha-wahab-wins-california-special-election-to-replace-former-rep-swalwell',
        summary: 'Aug. 2026 results, outside spending by AIPAC-affiliated groups, and the candidates’ differing statements on Gaza.',
      },
      {
        label: 'NBC Bay Area — Candidates debate key issues in CA-14 (Oct. 2026)',
        url: 'https://www.nbcbayarea.com/news/local/californias-14th-congressional-district-race-debate/4155063/',
        summary: 'Dublin Chamber debate on immigration, health care, housing, AI data centers, campaign money and the Taliban remarks.',
      },
      {
        label: 'Pleasanton Weekly — Wahab and Hernandez on the special ballot (Aug. 2026)',
        url: 'https://www.pleasantonweekly.com/regional-politics/2026/08/04/democratic-showdown-wahab-hernandez-vie-for-congress-on-special-ballot-this-month/',
        summary: 'Priorities and campaign-finance totals for both candidates.',
      },
    ],
    candidates: [
      {
        id: 'melissa-hernandez',
        name: 'Melissa Hernandez',
        party: 'D',
        role: 'Healthcare Services Director',
        qualification: {
          level: 'substantial',
          legal: 'meets',
          summary:
            'A former Dublin mayor and current BART board president who works as a health-services director for an Alameda County supervisor, with local executive and budget experience but no state or federal legislative office.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'partial', evidence: 'Dublin mayor until 2024, passing city ordinances; no state or federal lawmaking.' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'BART Board director since 2024 and board president for 2026, overseeing a transit-agency budget under budget and ridership pressures.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Health-services director in the office of Alameda County Supervisor David Haubert (Danville San Ramon Weekly); first Latina to serve as Dublin mayor or on the BART board.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Unanimously elected BART board president in December 2025; no record of passing legislation outside local boards.' },
          ],
        },
        bio: [
          'Daughter of migrant farm workers. Dublin mayor until she resigned her second term in 2024 when appointed to the BART board (District 5), then elected in 2024; elected board president for 2026. Works as the director of health services in an Alameda County supervisor’s office.',
          'She is a moderate Democrat running on lowering costs for families and small businesses, affordable health care and child care, and public safety.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓ Reduce barriers to new construction, lower materials costs and expand low-interest home loans for responsible buyers', comparison: 'Wahab’s record favors rent control and tenant protections and she called some YIMBY proposals “giveaways to developers.”' },
          { topic: 'Health care', position: '✓ Restore the insurance subsidies and funding cut by the 2025 budget law; hold corporate health providers accountable for costs and drug prices', comparison: 'Wahab emphasizes protecting Medicare and Social Security and lowering health costs.' },
          { topic: 'Israel / Gaza', position: '~ Israel has a right to defend itself after Oct. 2023, but the destruction in Gaza “has gone too far”', comparison: 'Wahab called Gaza a genocide at an April forum and has called for ending military aid to Israel.' },
          { topic: 'Public safety', position: '✓ Says she hired more police as Dublin mayor without raising taxes and that BART has hired more officers', comparison: 'Wahab lists public safety among her priorities but stresses civil rights.' },
          { topic: 'AI / data centers', position: '~ Regulation should be federal, not a state patchwork', comparison: 'Wahab says utilities will not prioritize needed infrastructure and wants a roadmap balancing competing needs.' },
          { topic: 'Trump / House majority', position: '✓ Democrat; says she would push to restore programs cut by the 2025 law', comparison: 'Both would caucus with Democrats.' },
        ],
        money:
          'About $720,000 in receipts through Aug. 1, 2026, covering the special and general elections combined (Pleasanton Weekly, from FEC filings); AIPAC-affiliated groups spent millions supporting her in the special (PBS/AP). See https://www.fec.gov/data/candidates/house/?state=CA&district=14.',
        endorsements: 'BOLD PAC, which supports Latino candidates. No other organizational endorsements found.',
        redFlags: [],
        notes: [
          'Her rival criticized her for leaving the Dublin mayor’s office in 2024 for the BART appointment and for receiving AIPAC-linked support.',
          'She said she narrowed her gap with Wahab from 26,000 votes to 6,000 in 63 days, and noted about 26,000 Dublin voters added under the new lines could not vote for her in August (her social-media post, NBC Bay Area).',
        ],
      },
      {
        id: 'aisha-wahab',
        photoSlug: 'aisha-wahab',
        name: 'Aisha Wahab',
        party: 'D',
        role: 'State Senator',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'Sworn in as a U.S. representative on Sept. 2, 2026 after nearly four years as a state senator and housing committee chair, preceded by four years on the Hayward City Council.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'State Senate since December 2022; authored SB 436 (eviction protections), SB 403 (caste discrimination, vetoed) and SB 1193 (county-funds transparency, passed Senate 37–0).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Senate assistant majority leader and chair of the Senate Housing Committee in 2025; U.S. House member since Sept. 2026.' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'Hayward City Council 2018–2022 and State Senate District 10; pushed for a state audit of Alameda County’s child-welfare department.' },
            { criterionId: 'coalition', assessment: 'partial', evidence: 'Several bills vetoed or stalled (SB 466 rent control, SB 403); SB 1193 passed the Senate 37–0; opposed SB 79 and then voted for it after amendments.' },
          ],
        },
        bio: [
          'Born in Queens to Afghan refugees and raised in Fremont; first Afghan American elected to public office in the U.S. (Hayward City Council, 2018). State senator for the 10th District since December 2022, Senate assistant majority leader and Housing Committee chair in 2025. Won the August special election and was sworn in Sept. 2, 2026 to finish Swalwell’s term.',
          'A progressive, she focuses on housing affordability, tenant protections, the cost of health care and groceries, and protecting Social Security and Medicare.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓✓ Authored SB 466 (rent control, failed) and SB 436 (no evictions for nonpayment if rent is repaid); initially opposed SB 79 transit upzoning, then voted for it after amendments', comparison: 'Hernandez stresses cutting construction barriers and costs rather than rent control.' },
          { topic: 'Health care', position: '✓ Priorities include lowering costs and protecting Medicare and Social Security', comparison: 'Hernandez wants to restore insurance subsidies and hold corporate health providers accountable.' },
          { topic: 'Israel / Gaza', position: '✓✓ Said “yes” at an April forum when asked if events in Gaza are a genocide; has called for ending military aid to Israel (J Weekly/Haaretz)', comparison: 'Hernandez says Israel has a right to defend itself but that Gaza’s destruction has “gone too far.”' },
          { topic: 'Outside money', position: '✓ Says the seat “cannot be bought” after AIPAC-affiliated groups spent millions against her; criticizes Hernandez for AIPAC-linked support', comparison: 'Hernandez says her funding comes from people and that national PACs are beyond her control.' },
          { topic: 'Public safety', position: '~ Lists public safety among priorities; focuses on civil-rights protections', comparison: 'Hernandez emphasizes hiring police and BART safety.' },
          { topic: 'Trump / House majority', position: '✓ Democrat with Congressional Progressive Caucus support', comparison: 'Both would caucus with Democrats.' },
        ],
        recordVsChange:
          'Wahab has served only since Sept. 2, 2026 in the House, so her House record is minimal, but she brings a nearly four-year state Senate record and led both primaries by wide margins; the case for change is ideological, from a progressive to a moderate.',
        money:
          'About $575,000 in receipts through June 30, 2026 for the special and general elections combined (Pleasanton Weekly, from FEC filings). AIPAC-affiliated groups spent millions in the special against her; she said outside money totaled nearly $10 million (her statement). See https://www.fec.gov/data/candidates/house/?state=CA&district=14.',
        endorsements: 'California Democratic Party, Congressional Progressive Caucus and SEIU California (Wikipedia).',
        redFlags: [],
        notes: [
          'In an August 2026 Democracy Now interview she said the U.S. “should pursue diplomacy” with Afghanistan “regardless of which group is in power,” while acknowledging severe limits on women and girls under Taliban rule; critics called it an apology for the Taliban, and Hernandez raised it in the Oct. 7 debate (Responsible Statecraft, Sept. 10, 2026) https://responsiblestatecraft.org/taliban-diplomacy-aisha-wahab/.',
          'Her 2023 caste-discrimination bill (SB 403) was vetoed; opponents said it targeted Hindus, and four recall attempts against her did not qualify for the ballot (Wikipedia). The Alameda County Board of Supervisors unanimously opposed her SB 1193; she denied it was retaliation.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Wahab', '●', 'Progressive Left voters want the candidate who called Gaza a genocide, backs rent control and tenant protections, and drew millions in AIPAC-linked spending against her.'],
      ['EL', 'Hernandez', '◐', 'Establishment Liberals favor the pragmatic, institution-minded local executive who emphasizes costs, safety and results, though Wahab has more legislative experience and the party’s endorsement.'],
      ['DM', 'Hernandez', '◐', 'Democratic Mainstays, who favor a moderate on public safety and health-care costs from a Latina leader of a major transit agency, lean Hernandez, though the state party endorsed Wahab.'],
      ['OL', 'Wahab', '●', 'Outsider Left voters back the grassroots, anti-establishment candidate who won despite outside money and has criticized corporate and PAC influence.'],
      ['SS', 'Hernandez', '○', 'Stressed Sideliners focused on prices and local safety may prefer her plain pocketbook-and-police message over Wahab’s more ideological foreign-policy debates, a weak lean.'],
      ['AR', 'Hernandez', '◐', 'Ambivalent Right voters favor her pro-construction, hire-more-police and no-new-taxes record as a moderate.'],
      ['PR', 'Hernandez', '○', 'Populist Right voters, who distrust the progressive wing’s positions on Israel and the Taliban, lean toward the moderate, though neither is a Republican.'],
      ['CC', 'Hernandez', '○', 'Committed Conservatives prefer the candidate who stresses police hiring, lower costs and a right of Israel to defend itself over Wahab’s positions, though both are Democrats.'],
      ['FF', '—', '—', 'Faith and Flag Conservatives have no clear fit between two Democrats, so no pick is made.', 'Neither Democrat fits Faith and Flag Conservatives’ priorities, so experience becomes the tie-breaker: Wahab already holds the seat and spent nearly four years in the state Senate, though her Gaza and Taliban-diplomacy statements sit far from this group’s views.'],
    ]),
    counterArguments: [
      'PL (Wahab ●): But consider that Wahab has been in the House only since Sept. 2, 2026, that her 2023 caste bill was vetoed and her rent-control bill failed, and that her Taliban-diplomacy comments drew criticism from Afghan activists.',
      'EL (Hernandez ◐): But consider that AIPAC-affiliated groups spent millions to help Hernandez in the special election and that Wahab has far more legislative experience and won both primaries by wide margins.',
    ],
  },

  // ---------------------------------------------------------------- CA-16
  {
    id: 'us-rep-ca16',
    categoryId: 'federal',
    title: 'U.S. Representative, 16th District',
    tldrLabel: 'CA-16',
    legalRequirements: HOUSE_LEGAL,
    qualificationCriteria: HOUSE_CRITERIA,
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense spending, technology policy and oversight of the executive branch, and staffs a casework office that helps constituents with federal agencies.',
      'At stake is Silicon Valley’s voice in a narrowly divided House: whether the district keeps a New Democrat on the Financial Services Committee focused on housing and innovation, or sends a Republican who backs President Trump’s agenda.',
    ],
    introParagraphs: [
      'CA-16 covers the Peninsula and Santa Clara County, including Mountain View, and is rated Solid Democratic by a forecast site (PollsMax). In the June 2 primary, Rep. Sam Liccardo took about 76% (139,399 votes) and Republican Peter Soulé placed second with about 11%, ahead of Kevin Johnson.',
      'Liccardo, a former San Jose mayor in his first term, is the heavy favorite. Soulé, who works in his family’s steel business, runs on public safety, lower energy and housing costs, and support for President Trump. No public polling of this race is available.',
    ],
    readingLinks: [
      {
        label: 'Secretary of State — U.S. House District 16 results',
        url: 'https://api.sos.ca.gov/returns/us-rep/district/16',
        summary: 'Primary returns for Liccardo, Soulé and the other candidates.',
      },
      {
        label: 'Rep. Liccardo — first-term report (Dec. 30, 2025)',
        url: 'https://liccardo.house.gov/media/press-releases/rep-sam-liccardos-first-term-defined-bipartisanship-and-focus-local-priorities',
        summary: 'The congressman’s own account of his legislative work; self-reported.',
      },
      {
        label: 'Peter Soulé campaign site',
        url: 'https://souleforcongress.com',
        summary: 'The candidate’s stated priorities: public safety, lower costs and support for President Trump.',
      },
    ],
    candidates: [
      {
        id: 'sam-liccardo',
        photoSlug: 'sam-liccardo',
        name: 'Sam Liccardo',
        party: 'D',
        role: 'United States Representative',
        qualification: {
          level: 'extensive',
          legal: 'meets',
          summary:
            'First-term member of the House Financial Services Committee who previously served eight years as San Jose mayor and seven years on the city council, and as a Santa Clara County prosecutor.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'met', evidence: 'Original cosponsor of the stablecoin legislation that became law (office report); led housing bills that advanced through committee and authored a bipartisan ACA tax-credit extension (H.R. 6010).' },
            { criterionId: 'committee-budget', assessment: 'met', evidence: 'Serves on the House Financial Services Committee, including its Oversight and Investigations Subcommittee (Wikipedia).' },
            { criterionId: 'district-service', assessment: 'met', evidence: 'San Jose mayor 2015–2023 and council 2007–2014; his office reports more than $3 million recovered for constituents and 1,400 federal-agency cases resolved in 2025.' },
            { criterionId: 'coalition', assessment: 'met', evidence: 'Problem Solvers and New Democrat caucus member; co-wrote a bipartisan ACA-credit extension with Rep. Kevin Kiley.' },
          ],
        },
        campaignUrl: 'https://www.samliccardo.com',
        bio: [
          'Former prosecutor and two-term mayor of San Jose (2015–2023), first elected to the House in 2024 to succeed retiring Rep. Anna Eshoo. Sits on the Financial Services Committee and belongs to the Problem Solvers, New Democrat and other caucuses.',
          'A moderate focused on housing supply, the cost of living and “pragmatic, pro-innovation” Democratic politics, he launched an “Innovation for Good” initiative to win Silicon Valley support for Democrats in competitive districts.',
        ],
        scorecard: [
          { topic: 'Housing', position: '✓✓ Led bipartisan bills cutting red tape on housing supply; his office says four bills he led or co-led became law in the 21st Century ROAD to Housing Act', comparison: 'Soulé lists lower home prices as a goal but cites no housing legislation.' },
          { topic: 'Health care', position: '✓ Authored bipartisan H.R. 6010 extending and modifying the enhanced ACA premium credit', comparison: 'Soulé has no stated health-care position.' },
          { topic: 'Immigration & military', position: '✓ Led the SUN Act (H.R. 4998) limiting unlawful military deployment in U.S. cities', comparison: 'Soulé opposes shielding “illegal criminal gang members” from deportation.' },
          { topic: 'Technology & finance', position: '✓ Original cosponsor of the stablecoin bill that became law; created the New Democrat Innovation Agenda', comparison: 'Soulé has no stated technology platform.' },
          { topic: 'Trump / House majority', position: '✓ Democrat; introduced bills on impoundment and military deployment', comparison: 'Soulé says he supports President Trump’s efforts to “re-build America.”' },
          { topic: 'District service', position: '✓ Reports more than $3 million recovered for constituents and over 1,400 federal-agency cases resolved in 2025', comparison: 'Soulé has no office record.' },
        ],
        recordVsChange:
          'Liccardo brings a first-term record on housing and bipartisan bills and a seat on Financial Services; the case for change is mainly partisan, since Soulé has no legislative record, while Liccardo’s San Jose public-records case is a documented transparency concern.',
        money: 'No current filing totals found; see the FEC committee page https://www.fec.gov/data/committee/C00858688/ (Liccardo For Congress).',
        endorsements: 'No current endorsement list found; his 2024 backers included the Mercury News and San Francisco Chronicle editorial boards and Nor Cal Carpenters.',
        redFlags: [
          {
            severity: 'serious',
            status: 'settled',
            text: 'In February 2022 the San José Spotlight and First Amendment Coalition sued San Jose and then-Mayor Liccardo over his use of private email and text accounts for city business. In 2023 a Santa Clara County judge ordered records released and found the city and Liccardo had not adequately shown how his private accounts were searched; on Nov. 28, 2023 the council unanimously approved paying $500,000 in the plaintiffs’ attorney fees. Liccardo said the payment would encourage “gotcha” records lawsuits and favored appealing; the city said staff made good-faith errors.',
            whyItMatters:
              'A House member handles sensitive constituent and committee records and is subject to public-disclosure laws, so a court finding about how he searched his own accounts bears on transparency in office.',
            sources: [
              { label: 'San José Spotlight — settlement approval', url: 'https://sanjosespotlight.com/san-jose-approves-hefty-pay-out-for-california-public-records-lawsuit/' },
              { label: 'San José Spotlight — lawsuit filed', url: 'https://sanjosespotlight.com/san-jose-spotlight-is-suing-san-jose-mayor-liccardo-over-private-email-use/' },
            ],
          },
        ],
        notes: [
          'In the 2024 primary a tie for second place led to a recount requested by a voter; a super PAC supporting Liccardo, funded largely by Michael Bloomberg, paid a group that funded the recount, and a complaint was filed with the FEC. His campaign denied coordinating (Wikipedia); no outcome was found.',
          'As mayor he faced criticism over the Google Downtown West project, including a late financial disclosure; he apologized, and the city attorney found no legal conflict (Wikipedia).',
        ],
      },
      {
        id: 'peter-soule',
        name: 'Peter Soulé',
        party: 'R',
        role: 'Investor',
        qualification: {
          level: 'limited',
          legal: 'meets',
          summary:
            'A family-business executive and former San Jose civil-service commissioner who has not held elected office or worked on legislation.',
          criteria: [
            { criterionId: 'lawmaking', assessment: 'not-met', evidence: 'No elected office or legislative role found.' },
            { criterionId: 'committee-budget', assessment: 'not-met', evidence: 'No committee or budget role found; works in his family steel company’s property-management, accounting and finance operations (Prediction Edge profile).' },
            { criterionId: 'district-service', assessment: 'partial', evidence: 'Reported San Jose Civil Service Commission member 2007–2011 (Prediction Edge profile); no casework experience found.' },
            { criterionId: 'coalition', assessment: 'unknown', evidence: 'No public record of building legislative coalitions.' },
          ],
        },
        campaignUrl: 'https://souleforcongress.com',
        bio: [
          'Republican who works in his family’s steel business, founded by his grandfather in 1911 to make reinforcing steel after the 1906 San Francisco earthquake (campaign site).',
          'His website lists public safety and security, “bring back the Golden State,” and building for the next generation as priorities, and says he supports President Trump’s efforts to rebuild America.',
        ],
        scorecard: [
          { topic: 'Housing', position: '~ Says home prices are kept artificially high; no specific proposal found', comparison: 'Liccardo led housing-supply bills that advanced in committee.' },
          { topic: 'Health care', position: '? No position found', comparison: 'Liccardo authored a bipartisan ACA credit extension.' },
          { topic: 'Immigration', position: '✓ Opposes keeping criminal gang members from being deported', comparison: 'Liccardo led the SUN Act limiting domestic military deployment.' },
          { topic: 'Energy costs', position: '✓ Says energy prices are artificially high; has supported expanding California oil production (BallotReady)', comparison: 'Liccardo has no comparable energy-supply platform.' },
          { topic: 'Trump / House majority', position: '✓ Says he supports President Trump’s efforts to “re-build America”', comparison: 'Liccardo is a Democrat who has sponsored bills limiting executive actions.' },
        ],
        money: 'No current filing totals found; see the FEC candidate page for Peter Sundin Soulé at https://www.fec.gov/data/candidates/house/?state=CA&district=16.',
        endorsements: 'No published endorsements found on his site; Ballotpedia’s survey notes Reform California support.',
        redFlags: [],
        notes: [
          'The Secretary of State lists his name as “Peter Sundin Soulé.”',
          'Limited public reporting is available on his policy positions beyond his campaign site.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Liccardo', '◐', 'Progressive Left voters prefer the Democrat who backs ACA credits and limits on military deployment over a Trump supporter, though Liccardo is a moderate with tech-industry ties.'],
      ['EL', 'Liccardo', '●', 'Establishment Liberals value an experienced former mayor and Financial Services member who passes bipartisan housing and finance bills.'],
      ['DM', 'Liccardo', '●', 'Democratic Mainstays are party-loyal and favor the incumbent Democrat who delivers constituent services and cost-of-living bills.'],
      ['OL', 'Liccardo', '○', 'Outsider Left voters distrust his tech-donor and private-email record, but still prefer the Democrat to a Republican who backs President Trump.'],
      ['SS', 'Liccardo', '○', 'Stressed Sideliners focused on housing and everyday costs may favor the incumbent’s casework and housing bills over a first-time candidate, a weak lean.'],
      ['AR', 'Liccardo', '○', 'Ambivalent Right voters who value bipartisan, pro-business moderates may prefer Liccardo’s record over a candidate with a thin public platform.'],
      ['PR', 'Soulé', '◐', 'Populist Right voters favor the Trump-supporting outsider who criticizes “progressive Democrat policies” and high energy and home prices.', 'Populist Right voters who put experience first could cross party lines for Liccardo, a former prosecutor and San Jose mayor whose office reports resolving 1,400 federal-agency cases, though he opposes Trump’s agenda and a court faulted how his private email accounts were searched for public records.'],
      ['CC', 'Soulé', '●', 'Committed Conservatives prefer the Republican who backs President Trump, deportations of criminal gang members and lower energy costs.'],
      ['FF', 'Soulé', '●', 'Faith and Flag Conservatives back the Republican nominee who supports President Trump and public safety against the Democratic incumbent.'],
    ]),
    counterArguments: [
      'EL (Liccardo ●): But consider that a court found in 2023 that Liccardo and San Jose had not adequately searched his private accounts for public records, and the city paid $500,000 in fees, which bears on the transparency a House member owes.',
      'CC (Soulé ●): But consider that Soulé has no elected or legislative record and a thin public platform, so there is little evidence of how he would vote or deliver for the district.',
    ],
  },
];
