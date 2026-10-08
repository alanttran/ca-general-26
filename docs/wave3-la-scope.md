# Wave 3 scope: contests on the Nov 3, 2026 Los Angeles County ballot for ZIPs 90028 (Hollywood) and 91501 (Burbank)

Researched Oct 7, 2026. Not a substitute for a voter's own sample ballot (I did not pull a printed LA County sample ballot; the County's address lookup needs an address and I did not use it). The contest list comes from the Registrar's own November contest feed and measures list; district shares come from precinct and Census block data.

## Method and sources

1. **Contest list (official):** the Registrar-Recorder's candidate-statement app feed for the Nov 3, 2026 General Election (election id 4348). It lists all 327 contests on the county's ballots with candidates and ballot occupations: `https://apps.lavote.gov/statements-api/oc/read/election/4348/contest` (front end: `https://apps.lavote.gov/candidate-statements/`). I filtered it for every contest that can touch these ZIPs. A contest absent from the feed is treated as "not on the November ballot" (for example Assessor, Supervisor D3, Council D13, LAUSD seats were all decided outright in June and do not appear). Caveat: the feed appears to include only contests that have candidate entries; see uncertainty 3.
2. **Measures (official):** RRCC "Measures Appearing on the Ballot - Nov 3, 2026" (rev. 8/14/26): `https://content.lavote.gov/docs/rrcc/documents/measures-appearing-on-the-ballot---november-3-2026-rev-8-14-2026-v-4.pdf` (letters are the margin codes on that list; vote thresholds are the section headers).
3. **District shares:** for each ZIP, every 2020 Census block fully inside the ZCTA (TIGERweb, `https://tigerweb.geo.census.gov/arcgis/rest/services/Census2020/PUMA_TAD_TAZ_UGA_ZCTA/MapServer/2` and `.../Tracts_Blocks/MapServer/2`): 174 blocks / 32,330 people for 90028, 197 blocks / 21,157 people for 91501. Block centroids were assigned to:
   - Congress (Prop 50 / AB 604 lines): Statewide Database block equivalency file `https://statewidedatabase.org/pub/data/d25/AB604.zip`, cross-checked with TIGERweb 120th Congressional Districts (`.../TIGERweb/Legislative/MapServer/0`). Both agree.
   - State Senate / Assembly: TIGERweb 2026 State Legislative Districts (`.../Legislative/MapServer/1` and `/2`), cross-checked with the RRCC precinct layer `https://services.arcgis.com/RmCCgQtiZLDCtblq/ArcGIS/rest/services/Registrar_Recorder_Precincts/FeatureServer/0` (fields DIST_STSEN, DIST_STASS). Both agree.
   - County Supervisor, city council, school/college district codes: the RRCC precinct layer above (district assignments as of its 2021 redistricting update; shares are population-weighted by block centroid).
4. **Candidate/party labels for federal, state legislative and BOE races:** Secretary of State Official Certified List of Candidates (8/27/2026): `https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/cert-list-candidates.pdf`.
5. **June 2 primary outcomes (which contests are decided and which go to November):** Wikipedia pages built from county/city results, used only as corroboration of the RRCC feed: `https://en.wikipedia.org/wiki/2026_Los_Angeles_County_elections`, `.../2026_Los_Angeles_County_Board_of_Supervisors_election`, `.../2026_Los_Angeles_elections`, `.../2026_Los_Angeles_mayoral_election`, `.../2026_Los_Angeles_City_Attorney_election`. These are secondary; the RRCC feed is the authority.
6. **Burbank:** City Clerk election page (measure letters C, CC, CD; offices) via search snippet of `https://www.burbankca.gov/web/city-clerks-office/november-3-2026-general-municipal-election` and `https://www.burbankca.gov/newsroom/-/newsdetail/20124/city-of-burbank-announces-three-local-ballot-measures-for-november-3-2026-election` (burbankca.gov blocks automated fetching with 403, so the pages themselves were not opened; the candidate log is at `https://www.burbankca.gov/documents/d/city-clerks-office/11-03-2026-election-candidate-log-for-all-candidates`). Burbank Leader, Aug 21, 2026 (school board): `https://outlooknewspapers.com/burbankleader/six-candidates-vie-for-burbank-board-of-education/article_4f1ecb94-4d72-444d-84c3-018b224e8770.html`.
7. **LACCD membership of Burbank:** `https://en.wikipedia.org/wiki/Los_Angeles_Community_College_District` (and RRCC precinct layer: Burbank and Hollywood both carry community college code 45).

## Statewide contests (all of Los Angeles County): by reference only

Governor, Lt. Governor, Secretary of State, Controller, Treasurer, Attorney General, Insurance Commissioner, Superintendent of Public Instruction, Props 1-5 and 37-45, Supreme Court retention. Not repeated here.

## Contests common to BOTH ZIPs

### State Board of Equalization, District 3 (100% of both ZIPs)
- Mike Gipson (DEM), State Assemblymember/Father
- Samuel P. Sukaton (DEM), Labor Union Organizer
Source: RRCC feed ("MEMBER STATE BOARD OF EQUALIZATION 3rd District", the only BOE contest in LA County) and SOS certified list.

### U.S. House, District 30 (100% of both ZIPs; post-Prop 50 lines)
- Laura Friedman (DEM), Member, U.S. House of Representatives
- Scott Alan Meyers (REP), Small Business Owner
Source: AB 604 block file and TIGERweb 120th Congress (both ZIPs 100% CD-30); candidates from RRCC feed and SOS list.

### Court of Appeal, Second District: justices on retention (all ballots in LA County)
Yes/No retention for each (names as printed in the RRCC contest feed; contest titles "For Associate Justice / For Presiding Justice, Court of Appeal, Second District, Division X"):
- Division One: Michelle C. Kim; Gregory J. Weingart
- Division Two: Anne Richardson; Steve Goorvitch
- Division Three: Mark Hanasono; Presiding Justice Rashida A. Adams
- Division Four: Nicholas Daum; Audra M. Mori; Armen Tamzarian; Presiding Justice Helen Zukin
- Division Five: Presiding Justice Brian M. Hoffstadt
- Division Six: Kenneth R. Yegan; Presiding Justice Tari L. Cody
- Division Seven: Natalie Stone; Presiding Justice Gonzalo C. Martinez
- Division Eight: John Wiley; Matthew A. Scherb; Victor G. Viramontes
(18 contests.) Source: `https://apps.lavote.gov/statements-api/oc/read/election/4348/contest`. I did not cross-check against courts.ca.gov.

### LA County offices
- **Sheriff** (countywide, nonpartisan, November runoff): Robert G. Luna (Sheriff of Los Angeles County) vs. Alex Villanueva (Retired Peace Officer). June 2: Luna 44.15%, Villanueva 21.70%. Source: RRCC feed; `https://en.wikipedia.org/wiki/2026_Los_Angeles_County_elections`.
- **No Assessor race:** incumbent Jeffrey Prang won 57.73% in June (outright); not in the November feed.
- **No County Supervisor race on either ZIP:** Supervisor D3 (Hollywood; Horvath) was won outright in June; Supervisor D5 (Burbank) was not up in 2026. Only D1 and D3 were up this cycle. Sources: RRCC feed has no Supervisor contest; `https://en.wikipedia.org/wiki/2026_Los_Angeles_County_Board_of_Supervisors_election`.
- **Superior Court judge runoffs (four offices, countywide, so on both ballots):**
  - Office No. 64: Rhonda A. Haymon (Deputy Public Defender, County of Los Angeles) vs. Maria Ghobadi (Deputy District Attorney, County of Los Angeles)
  - Office No. 65: Anna Slotky Reitano (Deputy County Counsel, County of Los Angeles) vs. Justin Allen Clayton (Deputy Public Defender, County of Los Angeles)
  - Office No. 87: David DeJute (Law Professor/Attorney) vs. Anthony Bayne (Deputy Public Defender, County of Los Angeles)
  - Office No. 131: Donna Tryfman (Deputy Public Defender, County of Los Angeles) vs. David Ross (Deputy Alternate Public Defender, County of Los Angeles)
  Source: RRCC feed. All other Superior Court offices (2, 14, 39, 60, 66, 81, 116, 141, 176, 181, 196) were decided or unopposed in June and do not appear.
- **County Measure A** (charter amendment): prohibits strikes by DA investigators, medical examiners, lifeguards, their supervisors and nonadministrative civilian employees of the Fire, Sheriff's and Medical Examiner departments; reiterates good-faith bargaining; creates impartial binding arbitration for certified public safety employee organizations. **Majority vote (50%+1).**
- **County Measure E** (charter amendment): greater independence and structure for the County Ethics Commission, Office of Ethics Compliance and Ethics Compliance Officer; continues the County's community-investment/alternatives-to-incarceration commitment. **Majority vote (50%+1).**
Source for A and E: RRCC measures list (above). (Measure ER on the June ballot is not on the November ballot.)

### Community college: Los Angeles Community College District (both ZIPs; Burbank and Hollywood are both inside LACCD)
Three at-large seats, vote for one in each; all LACCD voters see all three. Source: RRCC feed.
- **Seat 2:** Steven F. Veres (member, LACCD Board of Trustees); Robert Payne (Researcher/Writer/Environmentalist); Kristina Irwin (Parent/Business Owner); Roy Payan (Disabled Student Advocate); Adriana Cabrera (Educator)
- **Seat 4 (open; incumbent Sara Hernandez is running for State Senate 26):** Nancy Pearlman (Environmentalist/Anthropologist/Educator); Darryn Harris (Community College Educator); Adam Bruno (no designation); Elaine Alaniz (Healthcare Workforce Specialist); Isidro J. Armenta (Fire Department Employee); Priscilla Umana (ASL Educational Interpreter); Jason R. Aula (Business Owner/Journalist)
- **Seat 6:** Gabriel Buelna (member, LACCD Board of Trustees, Seat 6); Tonia Arey (Realtor); Randall Winston (Architect); Roberto David Lacarra (Community College Professor)
No LACCD measure is on the November ballot.

## ZIP 90028 (Hollywood, City of Los Angeles). 100% City of LA, 100% LACCD

Block-level shares (32,330 people): CD-30 100%; State Senate **24 (77.5%)** / 26 (22.5%); Assembly **51 (100%)**; Supervisor 3 (98.1%) / 5 (1.9%); City Council D13 (97.4%) / D4 (2.6%); LAUSD Board District 5 (84.7%) / 4 (15.3%).

### State Senate (majority district: SD-24)
- **SD-24 (77.5%):** John M. Erickson (DEM), Councilmember; Brian Goldsmith (DEM), Small Business Owner. Open seat. Source: SOS certified list and RRCC feed.
- **SD-26 (22.5%):** Sara Hernandez (DEM), Affordable Housing Advocate; Sarah Rascon (DEM), Environmental Protection Director. Open seat. Source: same.
- (SD-25 and 27 are odd-numbered and not up; no part of this ZIP is in them.)

### Assembly, AD-51 (100%)
- Rick Chavez Zbur (DEM), California Assemblymember (incumbent); Colin D. Hernandez (DEM), Digital Communication Strategist. Source: SOS list and RRCC feed.

### City of Los Angeles (General Municipal Election, nonpartisan)
- **Mayor:** Karen Ruth Bass (Mayor, City of Los Angeles) vs. Nithya Raman (Councilmember/Urban Planner). June 2: Bass 34.3%, Raman 29.0%, Pratt 25.5% (eliminated). Source: RRCC feed; `https://en.wikipedia.org/wiki/2026_Los_Angeles_mayoral_election`.
- **City Attorney:** Marissa Roy (Deputy Attorney General) vs. John McKinney (Deputy District Attorney). June: Roy 43.1%, McKinney 28.6%; incumbent Hydee Feldstein Soto eliminated. Source: RRCC feed; `https://en.wikipedia.org/wiki/2026_Los_Angeles_City_Attorney_election`.
- **No Controller race** (Kenneth Mejia won outright, 63.0%).
- **No City Council race for this ZIP:** only Council Districts 3 (Timothy K. Gaspar vs. Barri Worth Girvan) and 9 (Estuardo Mazariegos vs. Jose Ugarte) go to November; Hollywood is in D13 (Hugo Soto-Martinez won outright in June, 68.5%) with a small D4 sliver (not up). Source: RRCC feed; `https://en.wikipedia.org/wiki/2026_Los_Angeles_elections`.
- **No LAUSD Board race in November:** Districts 2, 4 and 6 were up in 2026 and all were won outright in June (D4 Nick Melvoin 61.6%, the one that touches this ZIP; the ZIP is mostly D5, which is not up). Source: RRCC feed has no LAUSD contest; Wikipedia page above.

### Measures (City of LA; letters per RRCC list; all "Majority Vote 50%+1" on that list)
- **Measure TE** (ordinance): one-time exemption from the City's special documentary transfer tax (Prop ULA) for residential properties damaged or destroyed in the Jan 2025 Palisades Fire and sold within five years.
- **Measure LA** (charter amendment): capital infrastructure plan and two-year budget cycle; more authority for the Director of Public Works and possible elimination of the Board of Public Works; removes limits on City business enterprises and mortgaging City property; changes contracting rules.
- **Measure PL** (charter amendment): creates a Neighborhood Appeals Commission replacing Area Planning Commissions; Council review process; Planning Department quasi-judicial authority; floor-area regulation by ordinance.
- **Measure EE** (charter amendment): stronger Police Inspector General and Fire Independent Assessor; five-year bar on Ethics Commissioners running for certain offices; higher campaign-finance penalties; weekly Council meetings; higher referendum signature requirement.
- **Measure PRK** (charter amendment): raises the Recreation and Parks minimum budget allocation, phased to double over ten years, with fiscal-emergency exceptions.
- **Measure PRT** (charter amendment): Harbor waterfront public access funding, workforce-impact disclosure for Harbor leases, longer maximum lease terms, Airport Commission composition.
- **Measure FD** (initiative ordinance): half-cent City sales tax for the LA Fire Department, about $345 million a year until ended by voters, audits and citizens' oversight committee. RRCC lists the threshold as majority 50%+1 (see uncertainty 5).
- **Measure SC** (charter amendment, listed by RRCC under the LAUSD heading): clarifies campaign-finance rules for Board of Education elections and allows changes by ordinance. Majority 50%+1.
Letter/summary sources: RRCC measures list; letters TE, LA, PL, EE, PRK, PRT, FD, SC corroborated by `https://ladefensa.org/2026-voter-guide-8/` and `https://laist.com/news/politics/half-cent-sales-tax-to-fund-la-city-fire-department-heads-to-the-nov-ballot`.

### Special districts
None identified for this ZIP. The RRCC feed's special-district contests (Water Replenishment District, West Basin MWD, Foothill MWD, etc.) are in other parts of the county. Unconfirmed without a printed sample ballot.

## ZIP 91501 (Burbank). 99.7% City of Burbank (0.3% City of Glendale); 100% LACCD

Block-level shares (21,157 people): CD-30 100%; State Senate **20 (100%)**; Assembly **44 (100%)**; Supervisor District 5 (100%, not up).

### State Senate, SD-20 (100%)
- Caroline Menjivar (DEM), State Senator (incumbent); Tony Rodriguez (REP), no ballot designation. Source: SOS list and RRCC feed.

### Assembly, AD-44 (100%)
- Nicholas "Nick" Schultz (DEM), California State Assemblymember (incumbent); Carolyn Daniels (REP), Independent Contractor/Mother. Source: SOS list and RRCC feed.

### City of Burbank (General Municipal Election, nonpartisan; at-large)
- **City Council (vote for up to 3, 13 candidates):** Jackie Waltman (Retired); Samantha Wick (Nonprofit Grant Writer); Eddy Polon (Community Advocate/Screenwriter); JT Parr (Comedian); Nikki Perez (Burbank City Councilmember); Jonathan Ontiveros (Civil Engineering Professional); David Phillip Donahue (Small Business Owner); Nolan Southerland (Film Editor); Robbie Brody (Administrative Law Judge); Chris Yoosefi (Small Business Owner); Mike Van Gorder (Housing Policy Analyst); Hovanes Tonoyan (Cybersecurity Project Manager); Tamala Takahashi (Incumbent). Terms run to December 2030; seats now held by Zizette Mullins (not on the list), Perez and Takahashi. Source: RRCC feed; City Clerk candidate log (not opened).
- **City Clerk:** Kimberley Clark (Burbank City Clerk), unopposed. **City Treasurer:** Krystle Palmer (Incumbent), unopposed. Source: RRCC feed; Burbank Leader.
- **Measures (all "Majority Vote 50%+1" on the RRCC list):**
  - **Measure C**, City Services Measure: raises Burbank's transient occupancy (hotel/motel) tax from 10% to 12%, about $3 million a year until ended by voters, with audits and spending disclosure.
  - **Measure CC**, Charter Amendment: removes the requirement of at-large City Council elections and lets the electoral system be set by ordinance (Council or voter initiative).
  - **Measure CD**, By-District Council Elections: ordinance changing Council elections from at-large to by-district (districts per Map 130); cannot take effect unless CC also passes. Per the city, if both pass, Districts 2 and 4 would be elected in Nov 2028 and 1, 3, 5 in 2030.
  Source: RRCC measures list; letters C, CC, CD confirmed in the City Clerk's election page snippet (`https://www.burbankca.gov/web/city-clerks-office/november-3-2026-general-municipal-election`).
- No Burbank City Council *district* race (council is at-large in 2026).

### Burbank Unified School District Governing Board
- **Trustee Area 3** (about 24% of the ZIP): Evren Ozbey (no designation); Paul Gerard (College Professor/Parent); Hai Ho (Retired Aerospace Engineer); Dennis M. Connor (Retired Technical Writer); Rosemary T. Morrison (Mother/Teacher/Student). Open seat (Charlene Tabet resigned; Kelsey Olson appointed). Source: RRCC feed.
- **Trustee Area 4** (about 72.5% of the ZIP): George Michel Saikali (CEO, YMCA of Glendale), unopposed per Burbank Leader; incumbent Abby Pontzer Kamkar is not running. NOT in the RRCC candidate feed, so whether it is printed as a contest is UNCONFIRMED. Source: Burbank Leader link above.
- Trustee Areas 2 and 5 (about 3.6% combined) have no seat up.

### Special districts
None identified. UNCONFIRMED without a printed sample ballot.

## Deduplicated list of all contests (with ZIP)

| Contest | 90028 | 91501 |
|---|---|---|
| Statewide (Governor...Insurance Commissioner, SPI, Props, Supreme Court retention) | yes | yes |
| State Board of Equalization D3: Gipson (D) vs Sukaton (D) | yes | yes |
| U.S. House CD-30: Friedman (D) vs Meyers (R) | yes | yes |
| State Senate 24: Erickson (D) vs Goldsmith (D) | 77.5% | no |
| State Senate 26: Hernandez (D) vs Rascon (D) | 22.5% | no |
| State Senate 20: Menjivar (D) vs Rodriguez (R) | no | yes |
| Assembly 51: Zbur (D) vs C. Hernandez (D) | yes | no |
| Assembly 44: Schultz (D) vs Daniels (R) | no | yes |
| Court of Appeal 2nd Dist. retention (18 justices) | yes | yes |
| Sheriff: Luna vs Villanueva | yes | yes |
| Superior Court Offices 64, 65, 87, 131 | yes | yes |
| County Measures A, E | yes | yes |
| LACCD Trustee Seats 2, 4, 6 | yes | yes |
| City of LA Mayor: Bass vs Raman | yes | no |
| City of LA City Attorney: Roy vs McKinney | yes | no |
| City of LA Measures TE, LA, PL, EE, PRK, PRT, FD, SC | yes | no |
| Burbank City Council (3 of 13) | no | yes |
| Burbank City Clerk (Clark), City Treasurer (Palmer), both unopposed | no | yes |
| Burbank Measures C, CC, CD | no | yes |
| Burbank USD Trustee Area 3 (5 candidates) | no | about 24% |
| Burbank USD Trustee Area 4 (Saikali, unopposed; unconfirmed on ballot) | no | about 72.5% |

Not on the November ballot for either ZIP: County Assessor, County Supervisor (D3 won outright, D5 not up), City of LA Controller, City Council (D13 outright; only D3 and D9 go to November), LAUSD Board (D2/D4/D6 all outright), any community-college or special-district measure.

## Biggest uncertainties

1. No printed LA County sample ballot was pulled. Everything is built from the RRCC contest feed, RRCC measures list, SOS certified list and block/precinct geography. Shares are population-weighted by 2020 block centroids (blocks fully inside the ZCTA only), not voter counts, and ZCTAs differ slightly from USPS ZIPs.
2. Burbank USD Trustee Area 4 (Saikali, unopposed): absent from the RRCC feed; the Burbank Leader (Aug 21) says he is running unopposed. May be printed on the ballot or handled by the district without a contest. Unconfirmed.
3. The RRCC feed may omit contests that have no candidate entries; it did include unopposed City Clerk and City Treasurer in Burbank, which suggests it is complete, but I could not prove it.
4. "Decided outright in June" findings (Supervisor D3, Assessor, Council D13, LAUSD D2/D4/D6, Controller) rest on the RRCC feed omitting them plus Wikipedia result tables. I did not open the official certified June results.
5. Measure FD (LA fire sales tax) is shown as majority vote by the RRCC list; as a citizen initiative with a dedicated purpose, some commentators may expect a different threshold. I did not verify the legal basis.
6. LA City Council district (D13 97.4% / D4 2.6%) and LAUSD board district (D5 84.7% / D4 15.3%) shares for 90028 come from the RRCC precinct layer, which predates the City's late-2021 council redistricting in its metadata; neither matters for the November ballot since no seat applies, but the percentages may be stale.
7. Burbank USD trustee-area shares (TA4 72.5%, TA3 23.9%) come from the same precinct layer (district codes), not a trustee-area map. A 0.3% sliver of ZIP 91501 is in Glendale (Glendale USD and Glendale CCD; not examined).
8. The burbankca.gov and lapublicpress.org pages block automated fetching (403), so Burbank measure letters and candidate designations rely on the RRCC data and search snippets of the City Clerk pages rather than the pages themselves.
9. Court of Appeal retention names come from the RRCC feed, not courts.ca.gov.
10. Party labels shown for Supervisor/City/County/school contests do not apply (nonpartisan); labels for Congress, Senate, Assembly and BOE come from the SOS list.
