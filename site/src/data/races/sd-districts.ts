import type { Race } from '../../types/ballot-types';
import { ct } from './helpers';

/**
 * San Diego-area district contests on the 92126 ballot: BoE-4, CA-50, SD-40, AD-78.
 * Research as of Oct 7, 2026.
 */
export const RACES_SD_DISTRICTS: Race[] = [
  {
    id: 'boe-d4',
    categoryId: 'statewide',
    title: 'State Board of Equalization, District 4',
    tldrLabel: 'BoE-4',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'The Board of Equalization oversees how the state’s 58 county assessors administer property tax, assesses property tax on some utility and cross-county property, and hears certain property-tax appeals. Its other powers were largely stripped in 2017 after an audit found serious problems; members earn about $185,000 a year and meet once or twice a month (KPBS/CalMatters).',
      'The seat is low-profile but not powerless: one of four elected members sets how assessment rules are interpreted and where taxpayer appeals land, which matters to homeowners and to utilities. It is also a stepping-stone office, and donors with business before the Legislature have spent heavily on it.',
    ],
    introParagraphs: [
      'In the June 2 five-way primary, Republican Denis Bilodeau finished first with about 45% (about 931,500 votes) because the Democratic vote split three ways; Democrat Tom Umberg placed second at about 21%, ahead of Cody Petterson (about 18%) and Martín Arias (about 14%), per Secretary of State primary returns (unofficial totals). Expect the general to be a straight partisan contest: Democratic-leaning November turnout against Bilodeau’s primary showing.',
      'The contest turns on whether voters want a career legislator and retired colonel, backed by the Democratic establishment and labor, or a city councilmember and taxpayer-group president running on Proposition 13 protection and cost-of-government oversight. No public polling of this race is available.',
    ],
    readingLinks: [
      {
        label: 'KPBS/CalMatters — BoE has little power; donors still spent millions',
        url: 'https://www.kpbs.org/news/politics/2026/06/15/the-board-of-equalization-has-little-power-campaign-donors-still-spent-millions-on-it',
        summary:
          'June 15 explainer on what the Board does and doesn’t do, Umberg’s fundraising (about $1.1M transferred plus $598K raised) and the Common Cause criticism of attorney donors, and Bilodeau’s $100,000 self-funding.',
      },
      {
        label: 'LAist voter guide — BoE District 4',
        url: 'https://laist.com/news/politics/voter-guides/2026-election-california-general-board-of-equalization-district-4',
        summary: 'Short candidate profiles, listed endorsements, and a plain-language description of what the Board of Equalization does.',
      },
      {
        label: 'CalMatters voter guide — Board of Equalization',
        url: 'https://calmatters.org/california-voter-guide-2026/board-of-equalization/',
        summary: 'Side-by-side candidate listing for all four BoE districts.',
      },
    ],
    candidates: [
      {
        id: 'tom-umberg',
        photoSlug: 'tom-umberg',
        name: 'Tom Umberg',
        party: 'D',
        role: 'Small Businessman/Senator',
        campaignUrl: 'https://www.tomumberg.com',
        bio: [
          'State senator for the 34th District (northern Orange County) and chair of the Senate Judiciary Committee since 2021; a retired U.S. Army colonel and former federal prosecutor who served in the Assembly (1990–94, 2004–06) and as deputy director of the Office of National Drug Control Policy (1997–2000).',
          'He is running for BoE on a platform of protecting homeowners, ensuring large corporations and utilities are assessed fairly, and “disciplined oversight” of the Board. Notable bills include SB 1338 (CARE Courts) and SB 450 (CEQA exemption for converting motels to transitional housing).',
        ],
        scorecard: [
          {
            topic: 'Property-tax administration',
            position: '✓ Pledges fair, accurate assessment of large corporations and utilities; protect homeowners',
            comparison: 'Bilodeau frames the same duty around holding the line on Prop 13 and spotting wasteful spending.',
          },
          {
            topic: 'Taxes / Prop 13',
            position: '? No public Prop 13 position found; sits on the Senate Revenue and Taxation Committee',
            comparison: 'Bilodeau runs explicitly as a Prop 13 defender backed by the Howard Jarvis Taxpayers Association.',
          },
          {
            topic: 'Accountability & oversight',
            position: '✓ “Fairness, accountability, and disciplined oversight” (campaign site)',
            comparison: 'Bilodeau pitches transparency and exposing waste; Umberg’s record is legislative rather than auditing.',
          },
          {
            topic: 'Campaign money',
            position: '~ Large war chest, much from attorneys with business before Senate Judiciary, which he chairs',
            comparison: 'Bilodeau raised far less and loaned himself $100,000; Common Cause called some of Umberg’s donations “naturally suspect.”',
          },
          {
            topic: 'Climate & environment',
            position: '~ Environmental-voter scorecard: 63% for 2025, 76% lifetime; as Judiciary chair he did not pass two major climate-justice bills (Climate Superfund, insurance recovery act)',
            comparison: 'Bilodeau has no stated climate position on the Board.',
          },
          {
            topic: 'Courts & public safety',
            position: '✓ Authored CARE Courts (SB 1338) and fentanyl-dealer liability bills whose language backers carried into Prop 36',
            comparison: 'Bilodeau has no comparable state-level record; his experience is city government.',
          },
        ],
        money:
          'As of the June 2 primary (KPBS/CalMatters): about $1.1M transferred from existing campaign accounts plus $598,000 raised Dec 2025 through the primary. No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements:
          'San Diego County Democratic Party (KPBS endorsement guide, Sept 30, 2026). From his campaign site: SEIU California, Sen. Adam Schiff, BoE member Sally Lieber, Sen. Pro Tem Monique Limón, Reps. Juan Vargas and Mike Levin, Sens. Akilah Weber-Pierson and Steve Padilla, Asm. Chris Ward. LAist also lists the California Teachers Association and Equality California.',
        redFlags: [
          {
            text: 'Attorney and law-firm donors with business before the Senate Judiciary Committee he chairs gave tens of thousands of dollars, including a $19,600 maximum from attorney John Manly, whose firm lobbied for childhood-abuse lawsuit bills Umberg backed; Common Cause called such gifts “naturally suspect.” Umberg says he has never made a legislative decision based on contributions.',
            sources: [
              {
                label: 'KPBS/CalMatters',
                url: 'https://www.kpbs.org/news/politics/2026/06/15/the-board-of-equalization-has-little-power-campaign-donors-still-spent-millions-on-it',
              },
            ],
          },
        ],
        notes: [
          'Primary finish (about 21%) trailed Bilodeau mostly because three Democrats split the party vote; the combined Democratic share was about 53%.',
          'The ballot designation printed is “Small Businessman/Senator.”',
        ],
      },
      {
        id: 'denis-bilodeau',
        name: 'Denis Bilodeau',
        party: 'R',
        role: 'Councilmember/Civil Engineer',
        bio: [
          'Orange city councilmember (first elected in 2022) and president of a taxpayer association; his ballot designation lists civil engineering.',
          'He campaigns against tax increases and for defending Proposition 13, with a promise of transparency and exposing wasteful spending at the Board.',
        ],
        scorecard: [
          {
            topic: 'Property-tax administration',
            position: '✓ Defend Prop 13 assessment limits; oppose tax increases',
            comparison: 'Umberg emphasizes fair assessment of corporations and utilities rather than a Prop 13 pledge.',
          },
          {
            topic: 'Taxes / Prop 13',
            position: '✓✓ Core of the campaign; backed by Howard Jarvis Taxpayers Association',
            comparison: 'Umberg has no comparable Prop 13 pledge on his site.',
          },
          {
            topic: 'Accountability & oversight',
            position: '✓ Pledges transparency and exposing wasteful spending at the Board',
            comparison: 'Umberg proposes “disciplined oversight” with similar goals but no specific mechanism.',
          },
          {
            topic: 'Campaign money',
            position: '~ Small operation; put $100,000 of his own money into the primary',
            comparison: 'Umberg raised and transferred far more, largely from attorneys and labor.',
          },
          {
            topic: 'Climate & environment',
            position: '? No public position found',
            comparison: 'Umberg has a mixed environmental-scorecard record.',
          },
          {
            topic: 'Courts & public safety',
            position: '? No public position found',
            comparison: 'Umberg chairs the Senate Judiciary Committee; the Board does not set criminal-justice policy.',
          },
        ],
        money: 'Put $100,000 of his own money into the primary (KPBS/CalMatters), far less than Umberg. No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements:
          'Republican Party of San Diego County (KPBS endorsement guide, Sept 30, 2026); California Republican Party, Reform California and Howard Jarvis Taxpayers Association (LAist).',
        notes: [
          'No campaign website was listed as of early September 2026 (The Ballot Brief).',
          'Limited public reporting is available on his policy positions beyond taxes.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Umberg', '◐', 'Progressive Left voters want a Democrat who will assess big utilities and corporations fairly and back labor-endorsed fairness, even though Umberg’s attorney-donor ties temper enthusiasm.'],
      ['EL', 'Umberg', '●', 'Establishment Liberals value an experienced, institutionally endorsed legislator and veteran who treats the Board as a competent administrative body.'],
      ['DM', 'Umberg', '●', 'Democratic Mainstays are the party-loyal base and follow Democratic and labor endorsements for a down-ballot office they know little about.'],
      ['OL', 'Umberg', '○', 'Outsider Left voters distrust insiders and donor money, but still prefer the Democrat over a Republican taxpayer-group candidate.'],
      ['SS', 'Bilodeau', '○', 'Stressed Sideliners with little attachment to either party may respond to a plain “protect your property taxes” message more than a career-senator profile, a weak lean at best for such a low-information race.'],
      ['AR', 'Bilodeau', '◐', 'Ambivalent Right voters, wary of tax increases and government waste but not culture-war driven, fit a local-government taxpayer advocate over a Sacramento legislator.'],
      ['PR', 'Bilodeau', '●', 'Populist Right voters favor an outsider taxpayer-group leader attacking government waste and endorsed by Reform California.'],
      ['CC', 'Bilodeau', '●', 'Committed Conservatives prioritize low taxes and Prop 13, which is Bilodeau’s signature and earned the Howard Jarvis endorsement.'],
      ['FF', 'Bilodeau', '●', 'Faith and Flag Conservatives back the Republican Party-endorsed candidate on tax and limited-government grounds against a Democratic legislator.'],
    ]),
    counterArguments: [
      'CC (Bilodeau ●): But consider that the Board has little remaining power, so a Prop 13 pledge changes less than the campaign suggests while Umberg’s experience may matter more in administering assessments.',
      'EL (Umberg ●): But consider that Umberg’s large attorney-donor funding is the very conflict-of-interest pattern good-government groups warn about, and members must recuse when donors’ interests are involved.',
    ],
  },
  {
    id: 'us-rep-ca50',
    categoryId: 'federal',
    title: 'U.S. Representative, 50th District',
    tldrLabel: 'CA-50',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'A U.S. representative votes on federal taxes, health programs, immigration, defense spending, climate and infrastructure money, and oversight of the executive branch, and staffs a casework office that helps constituents with veterans’ benefits, passports and federal agencies.',
      'At stake is San Diego’s voice in a narrowly divided House: whether the district sends a member of the majority or minority party, and whether a moderate Democrat with Energy and Commerce seniority keeps those committee seats for the region’s priorities.',
    ],
    introParagraphs: [
      'CA-50 covers coastal and central San Diego, including Carmel Valley, La Jolla, Point Loma and downtown, plus Poway and Coronado (KPBS); the 2026 election is the first held on the congressional lines voters approved with Proposition 50 in November 2025. Incumbent Democrat Scott Peters led the six-candidate June 2 primary with about 48%, ahead of Republican Steve Cohen at about 40% (unofficial results).',
      'Peters, a moderate and New Democrat Coalition vice-chair, is the heavy favorite in a district Cook Political Report rates Solid Democratic. Cohen, a longtime KUSI news director, runs on a “San Diego Affordability Agenda” covering housing supply, health-care costs, Social Security and Medicare, federal spending and border security. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'KPBS — What are the important issues in District 50?',
        url: 'https://www.kpbs.org/news/2026/09/03/what-are-the-important-issues-in-district-50',
        summary: 'Sept 3 KPBS Voter Hub callout describing the district’s geography and the Peters–Cohen matchup; does not itself detail policy positions.',
      },
      {
        label: 'Times of San Diego — Steve Cohen announces run (May 17)',
        url: 'https://timesofsandiego.com/politics/2026/05/17/marketink-after-50-years-of-covering-politicians-ex-kusi-news-director-steve-cohen-is-running-for-congress/',
        summary: 'Profile of Cohen’s TV-news career and campaign priorities (Social Security, health care, border security, balanced budget).',
      },
    ],
    candidates: [
      {
        id: 'scott-peters',
        photoSlug: 'scott-peters',
        name: 'Scott Peters',
        party: 'D',
        role: 'Member of Congress',
        campaignUrl: 'https://scottpeters.com',
        bio: [
          'San Diego Democrat first elected in 2012; served on the city council (2000–2008, first council president) and the Port Commission before Congress. Sits on the Energy and Commerce and Budget committees.',
          'A moderate who is vice-chair of the New Democrat Coalition and a member of the Problem Solvers and Climate Solutions caucuses; supports the ACA, abortion rights and nuclear power, and opposes expanding offshore drilling.',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '✓ Co-leads the bipartisan Build More Housing Near Transit Act with Rep. McMorris Rodgers and Sens. Schatz and Braun',
            comparison: 'Cohen pledges to expand housing supply but cites no bill.',
          },
          {
            topic: 'Climate',
            position: '✓ Voted for the 2022 Inflation Reduction Act; Climate Solutions Caucus; supports nuclear; opposes expanded offshore drilling',
            comparison: 'Cohen has no public climate position.',
          },
          {
            topic: 'Health care',
            position: '✓✓ Voted Jan 8, 2026 for H.R. 1834 extending enhanced ACA tax credits three years; criticized Medicaid cuts in the 2025 budget law; defends the ACA',
            comparison: 'Cohen backs lower drug prices, pre-existing-condition coverage and holding insurers accountable but cites no votes.',
          },
          {
            topic: 'Immigration',
            position: '~ Opposed the border wall and the $70B ICE/CBP funding bill (June 2026); led the Protecting Sensitive Locations Act (Sept 2026)',
            comparison: 'Cohen makes border security a priority; Peters stresses enforcement limits and use-of-force rules.',
          },
          {
            topic: 'Taxes',
            position: '✓ Opposed the 2017 GOP tax law over the $10,000 SALT cap and backs raising it; AFL-CIO lists him opposing the 2025 budget law (H.R. 1)',
            comparison: 'Cohen lists fiscal accountability and wasteful earmarks but no tax-law positions.',
          },
          {
            topic: 'Trump / House majority',
            position: '✓ Democratic caucus member; a vote for Democrats in a closely divided House',
            comparison: 'Cohen is endorsed by the state and county Republican parties and would add to a GOP majority.',
          },
        ],
        recordVsChange:
          'Peters brings seven terms of committee seniority, a bipartisan-caucus profile and a record of local and national service; the case for change is mainly partisan, since Cohen would join a Republican caucus and has no legislative record. Switching trades Energy and Commerce clout for a first-term member with an anti-establishment pitch.',
        money: 'No current filing totals found; see the FEC committee page https://www.fec.gov/data/committee/C00503110/ (Scott Peters For Congress). His career pharmaceutical-industry donations have drawn criticism.',
        endorsements: 'San Diego County Democratic Party (KPBS endorsement guide, Sept 30, 2026).',
        redFlags: [
          {
            text: 'Critics have attacked his pharmaceutical-industry donations and his leadership of opposition to a 2021 Medicare drug-price negotiation bill.',
            sources: [{ label: 'Wikipedia — Scott Peters', url: 'https://en.wikipedia.org/wiki/Scott_Peters_(politician)' }],
          },
        ],
        notes: [
          'A 2002 council vote on city pension funding led to an SEC inquiry that cleared him of fraud; the Kroll report called city officials “negligent” (Wikipedia). It is old but still cited by critics.',
          'Won 2024 re-election with about 64% of the vote against Peter Bono (Wikipedia).',
        ],
      },
      {
        id: 'steve-cohen',
        name: 'Steve Cohen',
        party: 'R',
        role: 'Television News Consultant',
        campaignUrl: 'https://cohenforcongressca50.com',
        bio: [
          'About 50 years in television news, including 20 years as KUSI news director until the station’s 2023 sale to Nexstar; now a TV consultant. He is not the Tennessee congressman of the same name.',
          'He says he is running because of rising grocery, health care and housing costs, calling Congress “broken” and himself a disruptor.',
        ],
        scorecard: [
          {
            topic: 'Housing',
            position: '✓ Expand housing supply and crack down on corporate price manipulation (campaign site)',
            comparison: 'Peters has authored bipartisan transit-housing legislation; Cohen cites no bill.',
          },
          {
            topic: 'Climate',
            position: '? No public position found',
            comparison: 'Peters voted for the Inflation Reduction Act and sits in the Climate Solutions Caucus.',
          },
          {
            topic: 'Health care',
            position: '✓ Lower prescription costs, protect pre-existing-condition coverage, hold insurers accountable; defend Social Security and Medicare',
            comparison: 'Peters voted to extend the enhanced ACA credits and defends the ACA.',
          },
          {
            topic: 'Immigration',
            position: '✓ Border security is a stated priority',
            comparison: 'Peters opposed new ICE/CBP funding and the border wall.',
          },
          {
            topic: 'Taxes & spending',
            position: '✓ Demands transparency in federal spending, opposes wasteful earmarks, and lists a balanced federal budget as a priority',
            comparison: 'Peters is a New Democrat who opposed the 2017 GOP tax law and, per AFL-CIO, the 2025 budget law.',
          },
          {
            topic: 'Trump / House majority',
            position: '? No public position found; endorsed by the state and county Republican parties',
            comparison: 'Peters votes with the Democratic caucus.',
          },
        ],
        money: 'No current filing totals found; see FEC candidate page https://www.fec.gov/data/candidate/H6CA50324/ (Cohen for Congress CA 50; statement of candidacy filed March 5, 2026).',
        endorsements: 'California Republican Party (unanimous, May 2026, per his campaign); Republican Party of San Diego County (KPBS endorsement guide, Sept 30, 2026); Reform California (iVoterGuide).',
        notes: [
          'At 79, he would be among the oldest freshman members if elected.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Peters', '◐', 'Progressive Left voters will take the Democrat who defends the ACA and backs climate action, even though Peters is a moderate and has drawn fire over drug-industry donations.'],
      ['EL', 'Peters', '●', 'Establishment Liberals value a New Democrat committee veteran who works across the aisle and supports nuclear power, the ACA and incremental climate policy.'],
      ['DM', 'Peters', '●', 'Democratic Mainstays want a reliable Democratic vote to hold the House check on Republican governance and protect the ACA.'],
      ['OL', 'Peters', '○', 'Outsider Left voters distrust his pharma-friendly record and establishment role, but still prefer the Democrat to his GOP-endorsed challenger.'],
      ['SS', 'Peters', '○', 'Stressed Sideliners worried about grocery, health and housing costs get a concrete incumbent with committee influence, while Cohen’s affordability pitch lacks specific proposals.'],
      ['AR', 'Peters', '◐', 'Ambivalent Right voters who are fiscally cautious but not hard-right may favor Peters’ moderate, bipartisan Problem Solvers profile over a first-time partisan challenger.'],
      ['PR', 'Cohen', '◐', 'Populist Right voters like Cohen’s “disruptor” and “Congress is broken” framing and his anger over rising costs, though he is a media veteran rather than a classic outsider.'],
      ['CC', 'Cohen', '●', 'Committed Conservatives prefer the Republican Party-endorsed candidate who stresses a balanced federal budget and fiscal accountability over a Democratic incumbent.'],
      ['FF', 'Cohen', '●', 'Faith and Flag Conservatives favor the Republican with border security as a stated priority over a Democrat who opposed the border wall and new ICE funding.'],
    ]),
    counterArguments: [
      'AR (Peters ◐): But consider that Peters leads opposition to Medicare drug-price negotiation, so voters who care about drug costs may find his moderation costly rather than reassuring.',
      'CC (Cohen ●): But consider that Cohen has no legislative record or published budget plan, so “fiscal accountability” is a promise, not a track record.',
    ],
  },
  {
    id: 'senate-sd40',
    categoryId: 'state-leg',
    title: 'State Senate, District 40',
    tldrLabel: 'SD-40',
    seatContext: 'Open seat',
    kind: 'candidates',
    stakesParagraphs: [
      'State senators vote on the state budget, housing and land-use law, climate and energy rules, public safety and criminal-justice statutes, and confirmations of governor appointees; they serve four-year terms.',
      'This district is one of the few genuinely competitive Senate seats in the region: registration is roughly 35% Democratic, 34% Republican and 24% no party preference, and the seat has been held by Senate Minority Leader Brian Jones, who is not on the ballot.',
    ],
    introParagraphs: [
      'In the June 2 primary, Democrat Mara Elliott, the former San Diego city attorney, led with 47.9%; Republican Kristie Bruce-Lane took 27.7%, edging fellow Republican Ed Musgrove (24.3%) for the second slot (Secretary of State returns via The Ballot Brief). The combined Republican share was about 52%, which keeps the general competitive.',
      'The district covers a wide swath of inland San Diego County, including Santee, Alpine, Poway, Escondido, Valley Center and part of the city of San Diego. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Senate District 40',
        url: 'https://theballotbrief.com/state/california/san-diego-county/california-senate-district-40',
        summary: 'Candidate summaries, stated priorities and certified-style primary results for both finalists.',
      },
      {
        label: 'East County Magazine — Elliott leads in the 40th',
        url: 'https://eastcountymagazine.org/elliott-leads-in-40th-two-republicans-battling-for-second-spot/',
        summary: 'Primary-night coverage of Elliott’s lead and the Republican battle for the second general-election slot.',
      },
    ],
    candidates: [
      {
        id: 'mara-elliott',
        photoSlug: 'mara-elliott',
        name: 'Mara Elliott',
        party: 'D',
        role: 'Ethics Attorney',
        bio: [
          'San Diego city attorney from 2016 to 2024, the first woman and first Latina elected to that office; entered the Senate race in September 2025.',
          'Her priorities include gun-violence prevention, law-enforcement training on restraining orders, support for domestic-violence and trafficking survivors, and homelessness and mental-health conservatorship services. As city attorney she created the office’s first affirmative civil enforcement unit to protect consumers, workers and the environment, according to her campaign.',
        ],
        scorecard: [
          {
            topic: 'Housing & homelessness',
            position: '✓ Homelessness and mental-health conservatorship services are a stated priority',
            comparison: 'Bruce-Lane also lists homelessness but frames it with neighborhood clean-up and tax cuts.',
          },
          {
            topic: 'Climate',
            position: '~ Oversaw legal vetting of San Diego’s Climate Action Plan and said in 2016 the city could be sued if it missed its targets; led an environmental enforcement unit',
            comparison: 'Bruce-Lane lists protecting the environment as a priority, with water-district experience but no stated plan.',
          },
          {
            topic: 'Education',
            position: '? No public position found',
            comparison: 'Bruce-Lane promises to “restore excellence” in schools and safe learning environments.',
          },
          {
            topic: 'Public safety',
            position: '✓✓ Gun-violence prevention and red-flag-law work in the city attorney’s office; law-enforcement and survivor focus',
            comparison: 'Bruce-Lane emphasizes fentanyl and youth, without a gun-regulation record.',
          },
          {
            topic: 'Taxes & cost of living',
            position: '~ Affordability and public safety are the campaign’s themes; no public tax plan found',
            comparison: 'Bruce-Lane runs on lowering costs and cutting taxes.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Mainstream Democrat with a law-and-order lane; endorsed by the county Democratic Party',
            comparison: 'Bruce-Lane is backed by Carl DeMaio’s Reform San Diego and the county Republican Party.',
          },
        ],
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/ (Mara Elliott for Senate 2026).',
        endorsements:
          'San Diego County Democratic Party (KPBS endorsement guide, Sept 30, 2026); San Diego County Young Democrats (June primary).',
        redFlags: [
          {
            text: 'As city attorney she publicly announced a proposed settlement over hotel-purchase broker commissions before informing the City Council, then suggested the council president’s criticism reflected sexism; critics also cited repeated transparency disputes with the council and press during her tenure.',
            sources: [
              {
                label: 'Voice of San Diego (Sept 2022)',
                url: 'https://voiceofsandiego.org/2022/09/13/city-attorney-accuses-council-president-of-trying-to-silence-her-as-council-approves-settlement-with-accused-broker/',
              },
            ],
          },
          {
            text: 'In a 2018 leak investigation, an appellate court found that the police department and her office breached a suspect’s attorney-client privilege and that a deputy city attorney violated State Bar conduct rules, though it declined to remove her office from the case.',
            sources: [
              {
                label: 'Voice of San Diego (Dec 2018)',
                url: 'https://www.voiceofsandiego.org/topics/public-safety/sdpd-and-the-city-attorney-breached-ethics-rules-and-attorney-client-privilege-in-aggressive-leak-hunt/',
              },
            ],
          },
        ],
        notes: ['The ballot designation printed is “Ethics Attorney.”'],
      },
      {
        id: 'kristie-bruce-lane',
        name: 'Kristie Bruce-Lane',
        party: 'R',
        role: 'Businesswoman/Victims Advocate',
        campaignUrl: 'https://www.kristiebrucelane.com/',
        bio: [
          'Businesswoman with a career in agriculture and health care; served on a regional task force on homelessness and was elected a director of the Olivenhain Municipal Water District, focusing on affordable drinking water, drought prevention and fiscal accountability. She previously ran for Assembly.',
          'Backed by Carl DeMaio’s Reform San Diego; her site lists six priorities led by cost of living and taxes.',
        ],
        scorecard: [
          {
            topic: 'Housing & homelessness',
            position: '✓ Tackle homelessness and clean up neighborhoods: “Shelters should be used as a tool, not a goal”',
            comparison: 'Elliott pairs homelessness with conservatorship and mental-health services.',
          },
          {
            topic: 'Climate',
            position: '~ Lists protecting the environment as a priority; water-district record on affordable drinking water and drought prevention',
            comparison: 'Elliott has a city-attorney environmental-enforcement record but no detailed climate platform.',
          },
          {
            topic: 'Education',
            position: '✓ Restore excellence in schools and safe learning environments',
            comparison: 'Elliott has no public education platform.',
          },
          {
            topic: 'Public safety',
            position: '✓ Public safety and the fentanyl crisis, “saving a generation”',
            comparison: 'Elliott brings a prosecutor-style record on gun violence and red-flag laws.',
          },
          {
            topic: 'Taxes & cost of living',
            position: '✓✓ Lower costs and cut taxes; blames Sacramento’s “job-killing agenda” for people leaving',
            comparison: 'Elliott lists affordability but no public tax-cut plan.',
          },
          {
            topic: 'Caucus / ideology',
            position: '✓ Conservative; backed by Carl DeMaio’s Reform San Diego and the county Republican Party',
            comparison: 'Elliott is a mainstream Democrat endorsed by local Democratic officials.',
          },
        ],
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements:
          'Republican Party of San Diego County (KPBS endorsement guide, Sept 30, 2026); Carl DeMaio’s Reform San Diego.',
        notes: [
          'Edged fellow Republican Ed Musgrove by about 3.4 points for the general-election slot.',
        ],
      },
    ],
    crossTypology: ct([
      ['PL', 'Elliott', '◐', 'Progressive Left voters back the Democrat with a gun-violence-prevention and survivor-services record, even if her prosecutorial style is more centrist than they prefer.'],
      ['EL', 'Elliott', '●', 'Establishment Liberals value a former city attorney with institutional Democratic backing and a focus on public safety plus services.'],
      ['DM', 'Elliott', '●', 'Democratic Mainstays follow the party and local Democratic officials in a seat Democrats are trying to flip from Republican control.'],
      ['OL', 'Elliott', '○', 'Outsider Left voters are wary of her transparency disputes as city attorney but still prefer the Democrat to a Reform San Diego-backed Republican.'],
      ['SS', 'Elliott', '○', 'Stressed Sideliners facing cost pressures get an experienced public-safety official, though Bruce-Lane’s tax-cut pitch also speaks to their worries.'],
      ['AR', 'Bruce-Lane', '○', 'Ambivalent Right voters in a swing district lean to the Republican on taxes and cost of living, but Elliott’s law-and-order record gives them a real reason to hesitate.'],
      ['PR', 'Bruce-Lane', '●', 'Populist Right voters favor the DeMaio-backed candidate who attacks Sacramento’s taxes and “job-killing” policies.'],
      ['CC', 'Bruce-Lane', '●', 'Committed Conservatives prioritize her pledge to cut taxes and costs and back the Republican in the open seat.'],
      ['FF', 'Bruce-Lane', '●', 'Faith and Flag Conservatives favor the Republican focused on fentanyl, schools and safe neighborhoods.'],
    ]),
    counterArguments: [
      'AR (Bruce-Lane ○): But consider that Elliott’s public-safety record as a former city attorney may suit moderates better than a Reform San Diego-aligned candidate.',
      'PL (Elliott ◐): But consider that her clashes with the council and press over transparency may sit poorly with voters who want an open-government legislator.',
    ],
  },
  {
    id: 'assembly-ad78',
    categoryId: 'state-leg',
    title: 'State Assembly, District 78',
    tldrLabel: 'AD-78',
    seatContext: 'Incumbent',
    kind: 'candidates',
    stakesParagraphs: [
      'Assembly members write and vote on state laws and the budget, serve two-year terms, and sit on committees that shape housing, transit, health, education and public-safety policy for San Diego and El Cajon.',
      'In a safely Democratic seat, the question is whether voters keep a leadership-level Democrat and committee chair or send a Republican challenger to a chamber where Democrats hold a large majority.',
    ],
    introParagraphs: [
      'Democratic incumbent Chris Ward won the June 2 primary with 68.5% to Republican Payton Galvez’s 28.4%; Libertarian Antonio Salguero took 3.1% and did not advance (Secretary of State returns via The Ballot Brief).',
      'Ward is a heavy favorite. Galvez works as a field manager for Reform California, per KPBS, and had no campaign website listed as of Sept 27, 2026. No public polling of the race is available.',
    ],
    readingLinks: [
      {
        label: 'The Ballot Brief — Assembly District 78',
        url: 'https://theballotbrief.com/state/california/san-diego-county/california-assembly-district-78',
        summary: 'Neutral roster page with primary results, both finalists’ designations and Ward’s leadership roles.',
      },
      {
        label: 'Assemblymember Chris Ward — official biography',
        url: 'https://ward.asmdc.org/biography',
        summary: 'Official bio listing committee assignments and legislative priorities.',
      },
    ],
    candidates: [
      {
        id: 'chris-ward',
        photoSlug: 'chris-ward',
        name: 'Chris Ward',
        party: 'D',
        role: 'Member of the State Assembly, 78th District',
        campaignUrl: 'https://ward.asmdc.org',
        bio: [
          'First elected in 2020; former San Diego city councilmember who authored the city’s Equal Pay Ordinance, and earlier chief of staff to state Sen. Marty Block. He has held leadership posts including Speaker Pro Tempore and Assistant Majority Leader and chairs the Assembly Arts, Entertainment, Sports and Tourism Committee.',
          'He chairs the Legislative LGBTQ Caucus and has authored housing-supply bills, including AB 253 on post-entitlement permitting and AB 474 (Home Share Act of 2025), plus AB 1070 on transit-agency transparency.',
        ],
        scorecard: [
          {
            topic: 'Housing & transit',
            position: '✓✓ Authored AB 253 (post-entitlement permit streamlining), AB 474 (Home Share Act), AB 1635 (Hillcrest DMV site housing) and AB 1070 (transit-agency accountability)',
            comparison: 'Galvez has no stated housing or transit platform found.',
          },
          {
            topic: 'Climate',
            position: '✓ Authored AB 2316 (community solar program) and co-led a 2026 oversight hearing on its rollout',
            comparison: 'Galvez has no public climate position.',
          },
          {
            topic: 'Education',
            position: '✓ Co-authored AB 1939 (2022) to strengthen climate-change instruction; it passed the Assembly 55-0-23 but died in the Senate Education Committee',
            comparison: 'Galvez has no public education position.',
          },
          {
            topic: 'Public safety',
            position: '✓ Authored AB 1739, a victims’ bill that cleared the Assembly Public Safety Committee in 2026; his biography cites work to reduce access to ghost guns',
            comparison: 'Galvez has no public public-safety position.',
          },
          {
            topic: 'Taxes',
            position: '✓ Authored AB 2089 (property-tax welfare exemption: e-signatures and posted documentation rules); passed the Assembly 72-0 in May 2026',
            comparison: 'Galvez has no public tax position; his employer, Reform California, campaigns against tax increases.',
          },
        ],
        recordVsChange:
          'Ward offers leadership roles, committee chairmanships and a record of housing and transit bills in a one-party chamber; changing to Galvez would swap that influence for a first-time challenger with no public record, in a seat where the Republican has little chance to affect outcomes.',
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements: 'San Diego County Democratic Party (KPBS endorsement guide, Sept 30, 2026).',
        notes: ['Ward is listed among Umberg’s endorsers for Board of Equalization.'],
      },
      {
        id: 'payton-galvez',
        name: 'Payton Galvez',
        party: 'R',
        role: 'Constituent Services Manager',
        bio: [
          'Listed on the ballot as a “constituent services manager”; KPBS reports he works as a field manager for Reform California.',
          'Little public biographical or policy information is available; no campaign website was listed as of Sept 27, 2026.',
        ],
        scorecard: [
          { topic: 'Housing & transit', position: '? No public position found', comparison: 'Ward has multiple authored housing bills.' },
          { topic: 'Climate', position: '? No public position found', comparison: 'Ward authored the community-solar bill AB 2316.' },
          { topic: 'Education', position: '? No public position found', comparison: 'Ward co-authored the 2022 climate-education bill AB 1939.' },
          { topic: 'Public safety', position: '? No public position found', comparison: 'Ward authored the victims’ bill AB 1739.' },
          { topic: 'Taxes', position: '? No public position found', comparison: 'His employer, Reform California, opposes tax increases, but his own stance is not public.' },
          { topic: 'Caucus / ideology', position: '~ Conservative-aligned through Reform California employment', comparison: 'Ward is a Democratic leader in a Democratic supermajority chamber.' },
        ],
        money: 'No current filing totals found; see Cal-Access at https://cal-access.sos.ca.gov/.',
        endorsements: 'Republican Party of San Diego County (KPBS endorsement guide, Sept 30, 2026).',
        notes: ['Won 28.4% in the primary.'],
      },
    ],
    crossTypology: ct([
      ['PL', 'Ward', '●', 'Progressive Left voters get a reliable Democratic leader who has authored housing-supply and transit-accountability bills and chairs the LGBTQ caucus.'],
      ['EL', 'Ward', '●', 'Establishment Liberals value a leadership-level incumbent with committee chairmanships and a pro-housing legislative record.'],
      ['DM', 'Ward', '●', 'Democratic Mainstays back the California Democratic Party-endorsed incumbent against a Republican with no public platform.'],
      ['OL', 'Ward', '○', 'Outsider Left voters distrust legislative insiders, but the alternative is a Reform California field manager on the right.'],
      ['SS', 'Ward', '○', 'Stressed Sideliners facing housing costs get an incumbent with concrete housing bills, while Galvez offers little detail to evaluate.'],
      ['AR', 'Ward', '○', 'Ambivalent Right voters see a pro-housing-supply Democrat with permitting-reform bills as acceptable given the challenger’s thin record.'],
      ['PR', 'Galvez', '◐', 'Populist Right voters favor a Reform California-aligned challenger against an Assembly leadership insider, though he offers little detail.'],
      ['CC', 'Galvez', '◐', 'Committed Conservatives choose the Republican nominee as the default against a Democratic leader, with little platform to judge.'],
      ['FF', 'Galvez', '◐', 'Faith and Flag Conservatives lean to the Republican in a Democratic seat, though his positions are unknown.'],
    ]),
    counterArguments: [
      'PR (Galvez ◐): But consider that with no platform or website, a Galvez vote is mostly a party protest rather than a policy choice.',
      'OL (Ward ○): But consider that Ward holds leadership posts and receives institutional and labor backing, which is the insider profile Outsider Left voters distrust.',
    ],
  },
];
