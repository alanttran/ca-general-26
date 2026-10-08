# Wave 3 scope: contests on the Nov 3, 2026 ballot for ZIPs 95765 (Rocklin), 94544 (Hayward), 94043 (Mountain View)

Researched Oct 7-8, 2026. Same caveat as wave 2: this is not a substitute for a voter's own sample ballot. Statewide contests (Governor through Insurance Commissioner, SPI, Props 1-5 / 37-45) and Supreme Court retention (Groban, Evans) are covered elsewhere and listed by reference only.

## Method

1. **Placer (95765).** Placer's own GIS ballot-type layer (`https://services9.arcgis.com/NENkjkswKTzMfG3A/arcgis/rest/services/Ballot_Types_WFL1/FeatureServer/4`, linked from placercountyelections.gov "Voter Information Guide Search") plus the four official county voter information guides (VIG) with the printed sample ballot: `https://www.placercountyelections.gov/Uploads/documents/11032026/vig/Placer_VIG_BT072.pdf`, `..._BT074.pdf`, `..._BT076.pdf`, `..._BT077.pdf`. Population-weighted by 2020 census block centroids inside the ZCTA (as in wave 2). Candidate list: `https://www.placercountyelections.gov/Uploads/documents/11032026/can_watch/can_watch27.pdf` (dated 8/28/2026). Measures: `https://www.placercountyelections.gov/Uploads/documents/11032026/11032026_Measures_Appear_on_Ballot.pdf`, amended notice `.../11032026_AMENDED_NOTICE_OF_ELECTION.pdf`. Offices-up list: `.../11032026_Offices_Up_General_2026_FINAL-07102026.pdf`. Items below marked CONFIRMED were read off a printed sample ballot.
2. **Alameda (94544).** ROV candidate list data behind `https://alamedacountyca.gov/rov_app/candidatelist` (Nov 3, 2026 election id 260, "on ballot" filter), ROV measures page `https://alamedacountyca.gov/rov_app/measures`, and the ROV's own district polygons (`https://services5.arcgis.com/ROBnTHSNjoZ2Wm1P/ArcGIS/rest/services/All_Districts/FeatureServer/0`, "Current Districts"). Hayward council districts from the City's GIS (`https://services3.arcgis.com/VRO5V8PH7DzSE6AU/arcgis/rest/services/Hayward_City_Council_Districts/FeatureServer`). HUSD trustee areas from the district's map viewer data (`https://districting.netlify.app/`, "FinalMap_A"). No Alameda printed sample ballot was reachable (the ROV sample ballot needs a voter lookup), so nothing for Hayward is "printed-ballot CONFIRMED"; it is the official candidate list plus official district polygons.
3. **Santa Clara (94043).** ROV Final Qualified List of Local Candidates (`https://files.santaclaracounty.gov/exjcpb1296/2026-09/qualified-list-of-local-candidates-9-28-26.pdf`; the PDF itself is stamped 8/27/2026), Valley Water district polygons, Census TIGERweb 2026 legislative layers, SOS certified list (`https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/cert-list-candidates.pdf`, 8/27/2026) for all state/appellate contests, and the measure summary at `https://localnewsmatters.org/santa-clara-november-3-2026/` (secondary; the ROV measure list was not reachable). Santa Clara sample ballots were not reachable (ROV lookup needs an address).
4. Legislative lines: Census TIGERweb "120th Congressional Districts" and "2026 State Legislative Districts" (`https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Legislative/MapServer`), which matched the Placer printed ballots (CD-6, SD-6, AD-5) and the Alameda ROV polygons (CD-14, SD-10, AD-20).
5. ZIP shares are 2020 census population in blocks whose internal point is inside the ZCTA (95765: 43,120 people; 94544: 79,769; 94043: 31,414). ZCTA is not identical to the USPS ZIP.

---

## 95765 (Rocklin, Placer County)

Ballot types: BT 76 (33.3%), BT 77 (32.5%), BT 74 (30.9%), BT 72 (3.3%). All four are CONFIRMED on the printed guides and all are 100% City of Rocklin.

**Contests common to the whole ZIP (all four ballot types, CONFIRMED)**
- State Board of Equalization District 1: Nelson Esparza (D), Shannon Grove (R).
- U.S. House **CD-6** (100%): Richard Pan (D), Kevin Kiley (No Party Preference, the current U.S. Representative).
- State Senate **SD-6** (even, up; 100%): Sean Frame (D), Roger Niello (R).
- Assembly **AD-5** (100%): Neva Parker (D), Joe Patterson (R, incumbent).
- Court of Appeal, **3rd District** retention (no divisions), 7 justices, CONFIRMED on BT 76: Administrative Presiding Justice Laurie Earl; Associate Justices Lauri Damrell, David B. Sapp, Stacy Boulware Eurie, Jonathan Renner, Aimee A. Feinberg, Shama Mesiwala. (Source: can_watch27.pdf and BT 76 guide. Placer's notice says "6 full-terms", the candidate list and ballot show 7 names; the ballot is the authority.)
- Supreme Court retention: Groban, Evans (by reference).
- County: **no county office, no county supervisor, no Superior Court race** is on the Nov ballot (all three Placer Superior Court seats are unopposed/not on ballot: Jones, Holley, Dixson; `can_watch27.pdf`). **No County Board of Education seat** applies to Rocklin (TAs 1/4/6 are elsewhere or unopposed).
- County measures **G** and **H** (Placer County Charter amendments, simple majority) are on every Rocklin ballot (CONFIRMED on BT 76):
  - G: extend deadline for filling a Board of Supervisors vacancy from 30 to 60 days and require vacancies 130+ days before a primary to be filled by appointment and placed on that ballot.
  - H: allow alternative procedures for removal of the County Executive Officer if specified in an employment agreement.
- **City of Rocklin City Council** (vote for NO MORE THAN 2; all of the ZIP): Bill Halldin (Rocklin Councilmember/Businessman), Jill Gayaldo (Rocklin City Councilmember), Walter Moore (Pastor/Nonprofit President). Three candidates for two seats. No mayor race (Rocklin council rotates the mayor).
- **Measure C, City of Rocklin**: half-cent transactions and use (sales) tax, about $8 million a year, general tax, until ended by voters, annual audits. **Majority vote** (amended notice says it was "previously published incorrectly as 2/3"; the city attorney's analysis in the VIG confirms majority for a general tax). Source: `https://www.placercountyelections.gov/Uploads/documents/11032026/11032026_AMENDED_NOTICE_OF_ELECTION.pdf`.
- **Measure D, Rocklin Unified School District**: $288,000,000 school facilities bond, about $59 per $100,000 assessed value, no projected tax-rate increase. **55%** required. Applies to all four ballot types (CONFIRMED).

**Rocklin USD Governing Board (by trustee area; vote 1 in each)**
| Area | Share of ZIP (ballot type) | Candidates |
|---|---|---|
| Trustee Area 2 | about 3.3% (BT 72) | Michelle Sutherland (RUSD Governing Board Member); Tiffany Saathoff (RUSD Trustee) |
| Trustee Area 4 | about 33.3% (BT 76) | Rebecca Hoehne (Teacher/Businesswoman/Mom); Steve Makis (Parent/Territory Manager) |
| Trustee Area 5 | about 32.5% (BT 77) | Dereck Counter (RUSD Trustee); Jacob Boyce (Parent/Data Analyst) |
| none up | about 30.9% (BT 74) | no school board seat |

**Not on any Rocklin ballot (CONFIRMED absent on all four guides):** community college trustee (Sierra College areas 1, 2, 5 are elsewhere; Sierra TA6 and Los Rios TA1 not Rocklin), special-district director contests (South Placer Fire District Divisions 1-2, South Placer MUD Wards 2-3, PCWA Division 1 etc. do not appear; the SPFPD seats are "not on ballot" because unopposed), Measure B (South Placer Fire parcel tax), Measures A, E, F, I, P (other cities and districts).

**Most likely ballot for a typical voter:** BT 76, 77 or 74 with the above; they differ only in the RUSD board seat.

---

## 94544 (Hayward, Alameda County; south and central Hayward)

100% inside the City of Hayward (ROV city layer). 92.8% in Hayward Unified, about 7% in New Haven Unified (Union City area; no New Haven seat that applies: only New Haven Areas 4 and 5 are up, and the ZIP is in Areas 1, 2, 3).

**Federal/state (ROV polygons plus TIGERweb, 100% each)**
- State Board of Equalization **District 2**: Sally J. Lieber (D, incumbent), John Pimentel (D). Source: ROV candidate list.
- U.S. House **CD-14** (100%): Melissa Hernandez (D, Healthcare Services Director), Aisha Wahab (D, State Senator). Two Democrats. Source: ROV candidate list and SOS certified list. (The ROV also ran a CD-14 special general on Aug 18, 2026, already over.)
- State Senate **SD-10** (even, up; 100%): Linda R. Price (businesswoman), Scott Sakakihara (Councilmember/Navy Officer). Source: ROV list. Party labels are not in the ROV list; the SOS certified list shows Sakakihara under SD-10.
- Assembly **AD-20** (100%): Liz Ortega (Assemblymember, D), Patricia Muga (R, Real Estate Appraiser). Source: ROV list, SOS list.
- Court of Appeal, **1st District** retention (SOS certified list lists the district for Alameda): Div 1: Charles A. Smiley, Kathleen M. Banke, Monique Langhorne Wilson; Div 2: Presiding Justice Therese M. Stewart, Tara M. Desautels; Div 3: Ioana Petrou, Victor A. Rodriguez; Div 4: Presiding Justice Tracie L. Brown; Div 5: Mark Simons, Danny Y. Chou, Gordon Burns. 11 justices. Source: `https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/cert-list-candidates.pdf` pp. 33-34.
- Supreme Court retention (Groban, Evans) by reference.

**County**: The ROV's Nov 2026 candidate list contains **no county office** (no Supervisor, Sheriff, DA, Assessor, Auditor, Superintendent) and **no Superior Court race**; any county office not decided in the June primary would appear there. Treat as "none" but NOT printed-ballot CONFIRMED. No Alameda County Board of Education candidate contest either (that body is appointed/not on this list).

**City of Hayward (ZIP 100% in city)**
- **Mayor** (vote 1, citywide): Mark Salinas (Mayor/College Instructor), Tom Wong (Businessman). Source: ROV list; also city clerk `https://www.hayward-ca.gov/your-government/elections/candidate-information`.
- **City Council by district** (first district-based election; only Districts 1 and 6 are up in 2026). ZIP split by council district (City GIS): District 5 34.1%, District 6 34.0%, District 2 20.6%, District 3 10.8%, District 1 0.5%.
  - **District 6** (about 34%): Julie Roche (Hayward City Councilmember), unopposed (appears on ballot per ROV list).
  - **District 1** (about 0.5%): Brian M. Schott (Small Business Owner), George Syrop (Council Member).
  - Districts 2, 3, 5 (about 66%): no council race.
- **Measure CC, City of Hayward**: business license tax modernization (first update since 1978), about $12 million more a year, minimum $60, rates $0.30 to $3.75 per $1,000 gross receipts, until repealed. **50% + 1**. All of the ZIP. Source: `https://alamedacountyca.gov/rov_app/measures`.

**School boards**
- **Hayward Unified School District Governing Board** (by trustee area; map "FinalMap_A", possible small differences from the later "Modified A", UNCONFIRMED which is final). ZIP split: Area 4 about 44%, Area 1 about 25%, Area 5 about 18%, Area 2 about 6%, outside HUSD about 7%. Seats up: Areas 2 and 4.
  - **Area 4** (about 44%): Michelle Fernelius (Parent/Research Director); Maria Araceli Orozco (Parent/Caregiver/Student).
  - **Area 2** (about 6%): JoAnn Guzman (Community Volunteer); Joe Orlando Ramos (Author/Adult Educator).
  - Areas 1, 3, 5: not up.
- No HUSD, Chabot or Hayward-area school measure appears on the ROV 2026 measures list (school measures: Dublin I, San Lorenzo J, Sunol Glen K only).

**Community college: Chabot-Las Positas CCD** (ROV polygons): Area 1 40.6% (not up), **Area 6 35.2%**, **Area 3 24.1%**.
- Area 6: Hal G. Gin (Chabot-Las Positas College Trustee); Joe Orlando Ramos (Author/Adult Educator).
- Area 3: Mark Fay (Airworthiness Engineer); Wendy Huang (Real Estate Investor); Harris Mojadedi (Chabot-Las Positas Governing Board Member).

**Special districts**
- **AC Transit Director, Ward 4** (100% of ZIP): Gabriel Morales (Educator); Sarah Syed (AC Transit Director).
- **BART Director, District 4** (about 56.4% of ZIP): Robert Raburn (BART Director); Luis Reynoso (University Business Professor). BART District 6 (about 41.4%) and District 5 (about 2.1%): no contested race on the list (a District 6 seat exists but is not on the on-ballot list).
- **East Bay Regional Park District Director, Ward 3** (about 99.6%): Joseph Grcar (Retired Laboratory Scientist); Rebecca Lewington (Retired Brand Strategist); William Yragui (Business Owner).
- **Hayward Area Recreation & Park District (HARD) Director**: seats up are Area 2 and Area 4 (HARD election page: `https://www.haywardrec.org/2059/District-Election`). Area 2: Amanda Alysia Daniels (Law Student/Analyst) vs Sara Lamnin (Incumbent). Area 4: Joseph "Joe" Giltner (Community Advocate) vs Paul W. Hodges Jr. (Incumbent). The ZIP is 99.8% inside HARD, but **which of its areas 94544 falls in is UNCONFIRMED** (the adopted area map was not found; assume a split and that most voters see at least one of these).
- **Eden Township Healthcare District**: ZIP is in Eden Zones 1 and 2 (about 46% each; ROV polygons) plus Washington Township Healthcare District (about 7%). The only contested Eden seat on the ballot is Area 3 (Narges Dillon, Joseph Grcar); it is probably not in this ZIP but the area-to-zone numbering is UNCONFIRMED. No Washington Township HCD contest is on the on-ballot list.
- Not applicable: EBMUD (Wards 3, 7 not Hayward), Alameda County Water District (Fremont/Newark/Union City), Castro Valley and Oro Loma sanitary districts.

**Measures**
- **RTM, Regional Transit Measure** (Alameda, Contra Costa, San Mateo, Santa Clara 0.5%; San Francisco 1%): sales tax for 14 years, about $980 million a year, for BART, Caltrain, VTA, SamTrans, AC Transit, Muni and road repair. Threshold: the ROV page says "N/A"; other sources describe a **simple majority** (UNCONFIRMED officially). Same measure also appears for 94043.
- **Measure CC** (Hayward, above).

---

## 94043 (Mountain View, Santa Clara County)

TIGERweb puts 100% of the ZIP in **CD-16**, **SD-13** and **AD-23**. No Santa Clara sample ballot was read, so the school/college area assignments below are partly inferred.

**Federal/state**
- BOE: **District 2** (SOS results API lists Santa Clara County under BOE District 2): Sally J. Lieber (D, incumbent), John Pimentel (D).
- **CD-16**: Sam Liccardo (D, U.S. Representative), Peter Sundin Soule (R, Investor). Source: SOS certified list.
- **State Senate: none up** (SD-13 is odd-numbered).
- **AD-23**: Marc Berman (D, Assemblymember, incumbent), David G. Johnson (R, Small Business Owner). Source: SOS certified list.
- Court of Appeal, **6th District** retention (SOS certified list pp. 40-41): Daniel H. Bromberg, Charles E. Wilson II, Charles F. Adams, Frederick S. Chung, Allison Marston Danner. 5 justices (all Associate Justices, no divisions). Supreme Court Groban, Evans by reference.
- County: the ROV local candidate list has **no county office and no Superior Court race**. County Board of Education: Trustee Area 7 is on the ballot (Raeena S. Lari, Governing Board Member; Karla Dominguez Vega, Student Support Specialist) but **whether 94043 is in Area 7 is UNCONFIRMED** (one GIS layer called the ZIP "Area 1", different numbering, not trusted).

**City of Mountain View** (all of the ZIP assumed; ZCTA vs city line not checked)
- **City Council, vote for up to 3** (three seats, all open): Paul Donahue (Engineer); Robert Cox (Retired Software Engineer); James Kuszmaul (Engineer); Samuel Ali (No Ballot Designation); IdaRose Sylvester (Entrepreneur/Educator); Silja Paymer (Teacher/Mother/Engineer); Erik Poicon (Library Outreach Specialist); Alex Amoroso (Army Reserve Officer). 8 candidates. Source: ROV list contest 5110. (The Los Altos Online summary names the same eight.) No mayor race.
- **Measure E**: charter modernization (gender-neutral terms, extends council vacancy filling window from 30 to 60 days, cleanups). Simple majority. Measure E and F details from `https://localnewsmatters.org/santa-clara-november-3-2026/` and `https://www.losaltosonline.com/news/election-set-a-look-at-the-official-candidates-and-measures-in-los-altos-lah-mountain/article_ca10c518-3f52-4b39-b060-c77cf66db868.html` (secondary).
- **Measure F**: raise the hotel and short-term-rental tax from 10% to as high as 15%, up to $5.2 million a year, until ended by voters, audits. Simple majority (general tax; news reports).

**School boards**
- **Mountain View Whisman School District** (at large; vote for up to 2): Devon Conley (Incumbent); William Lambert (Incumbent); Sundar Subbarayan (Retired Tech Executive); Quintin Riis (Father). Applies to the ZIP (district boundaries not separately checked; some of the ZIP could be outside MVWSD, UNCONFIRMED).
- **Mountain View-Los Altos Union HSD, Trustee Area 3** (vote 1): Catherine Vonnegut (Governing Board Member); Thida Cornes (Governing Board Member, MVLA); Sanjay Dave (Engineer/Parent). Areas 1 and 2 are not on the ballot (unopposed). **The share of 94043 in Area 3 is UNCONFIRMED.**
- No Los Altos SD contest applies (that is Los Altos only).

**Community college: Foothill-De Anza CCD**: Trustee Area 4 is on the ballot (Liangfang "Liang" Chao, City Councilmember/Technologist; William "Bill" Wilson, Educator); Area 2 is unopposed (Alexander Gvatua, appointed incumbent). **Which area covers Mountain View is UNCONFIRMED** (Chao is a Cupertino councilmember, so Area 4 is probably not Mountain View).

**Special districts**
- **Santa Clara Valley Water District, District 7** (100% of ZIP, from Valley Water polygons): Pete Dailey (Member, Los Altos City Council); Rebecca Eisenberg (Incumbent).
- **El Camino Healthcare District**: board seats unopposed (Peter C. Fung, George O. Ting; not on ballot), but **Measure S** (bylaw amendment limiting directors to four four-year terms) is on the ballot for district voters; Mountain View is in the district (district boundary and threshold not verified here, UNCONFIRMED).
- Midpeninsula Regional Open Space: the ZIP is in Wards 4/5, whose seats are not contested. SCV Open Space Authority: no contested seats.

**Measures**
- **RTM** (regional transit sales tax; see 94544). Applies in Santa Clara County.
- **Measure E** and **Measure F** (Mountain View, above); **Measure S** (El Camino Healthcare District).
- Not for this ZIP: Palo Alto J, Los Altos D, Sunnyvale G/H/I, Santa Clara C, Cupertino L, school measures M-R (other districts). No Santa Clara County measure other than RTM was found.

---

## Distinct contests across the three ZIPs (deduplicated; which ZIP)

Statewide (all three): Governor, Lt Gov, SoS, Controller, Treasurer, AG, Insurance Commissioner, SPI, Supreme Court x2, state props.

State Board of Equalization: **BOE-1** (95765), **BOE-2** (94544, 94043; same candidates Lieber/Pimentel).
U.S. House: **CD-6** (95765), **CD-14** (94544), **CD-16** (94043).
State Senate: **SD-6** (95765), **SD-10** (94544), none up for 94043 (SD-13).
Assembly: **AD-5** (95765), **AD-20** (94544), **AD-23** (94043).
Court of Appeal retention: **3rd Dist, 7 justices** (95765), **1st Dist, 11 justices Divs 1-5** (94544), **6th Dist, 5 justices** (94043).
County offices: none on any of the three ballots. Superior Court: none. County Board of Education: Santa Clara TA 7 (94043, unconfirmed).
City: **Rocklin City Council, vote 2** (95765); **Hayward Mayor**, **Council D6** (about 34%), **Council D1** (about 0.5%) (94544); **Mountain View Council, vote 3, 8 candidates** (94043).
School boards: **RUSD TA 2 / 4 / 5** (95765, by ballot type); **HUSD Area 4** (about 44%), **Area 2** (about 6%) (94544); **MVWSD, vote 2** and **MVLA HSD TA 3** (94043).
Community college: **Chabot-Las Positas Area 6** (35%), **Area 3** (24%) (94544); Foothill-De Anza TA 4 (94043, unconfirmed); none for Rocklin.
Special districts: **AC Transit Ward 4**, **BART D4** (56%), **EBRPD Ward 3**, **HARD Area 2/4** (94544); **Valley Water D7** (94043); none for 95765.
Measures: **Placer G, H** (maj.), **Rocklin C** (maj., 1/2-cent sales tax), **RUSD D** (55%) (95765); **Hayward CC** (maj.), **RTM** (94544); **Mountain View E, F** (maj.), **El Camino Healthcare District S**, **RTM** (94043).

## Biggest uncertainties

1. **Alameda and Santa Clara have no printed sample ballot confirmation.** Both ROVs gate sample ballots behind a voter lookup. Candidate lists and district polygons are official, but I could not see the final printed ballot (as I did for Rocklin). Absence of county offices and Superior Court races in Alameda and Santa Clara comes from the candidate lists, not a printed ballot.
2. **Sub-ZIP district assignments unresolved:** HARD Areas 2/4 (no adopted map found), Eden Area 3 vs Zones (probably not applicable), MVLA Area 3 share, Foothill-De Anza Area 4 vs 2, Santa Clara County BOE Area 7, HUSD map version (FinalMap_A used; "Modified A" PDF may differ slightly).
3. **Santa Clara local list is dated 8/27/2026** (the file name says 9-28). Withdrawals/disqualifications after that are not reflected. Same for Placer (8/28) and Alameda (current list, undated).
4. **Candidate-list anomalies in the Alameda ROV data:** the same names (Joseph Grcar, Luis Reynoso, Joe Orlando Ramos) appear in several unrelated races (HUSD/Chabot/EBMUD/EBRPD/AC Transit/BART); verify against the sample ballot before publishing.
5. **Vote thresholds:** RTM printed "N/A" on Alameda's page (simple majority per other sources); Mountain View E/F and El Camino S thresholds are from news, not the ROV measure text. Rocklin C was corrected from 2/3 to majority by the County's amended notice.
6. **Mountain View ZCTA vs city/district lines** and the **Hayward ZCTA split** were derived from block centroids; the 94544 split between BART D4 and D6 and Hayward council districts is approximate.
7. The SOS results API returned placeholder-looking vote totals (exact 33.3/66.7 splits); used only for names and for the county-to-BOE-district mapping.
