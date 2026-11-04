# Wave 4 scope: contests on the Nov 3, 2026 Los Angeles County ballot for ZIP 91755 (Monterey Park)

Researched Nov 3, 2026 (election day). Not a substitute for a voter's own sample ballot: I did not pull a printed LA County sample ballot (the county lookup needs an address and a form). The contest list comes from the Registrar's November contest feed, its measures list and its tentative list of canceled elections; district shares come from Census block and RRCC precinct geography.

## Method and sources

1. **Contest list (official):** RRCC candidate-statement feed for election 4348 (Nov 3, 2026): `https://apps.lavote.gov/statements-api/oc/read/election/4348/contest`. The feed is alphabetical; I read the sections where every contest that could touch Monterey Park would sit (Alhambra, Central Basin, City of Monterey Park, Garvey, Los Angeles Community College, Member of the State Assembly, Montebello, San Gabriel Valley MWD, Sheriff, State Senator, Supervisor, United States Representative, Upper San Gabriel Valley MWD, Water Replenishment District). A contest absent from the feed is treated as not on the ballot.
2. **Canceled elections (official):** RRCC "Tentative List of Canceled Elections, General Election Nov 3, 2026": `https://content.lavote.gov/docs/rrcc/documents/canceled-elections-november-2026-tentative.pdf` (appointment in lieu of election).
3. **Measures (official):** RRCC "Measures Appearing on the Ballot - Nov 3, 2026" (rev. 8/14/26): `https://content.lavote.gov/docs/rrcc/documents/measures-appearing-on-the-ballot---november-3-2026-rev-8-14-2026-v-4.pdf`. County Measures A and E; City of Monterey Park Measures HOM and AAA (both majority vote).
4. **City of Monterey Park:** City Clerk's 2026 General Election page `https://www.montereypark.ca.gov/1738/2026-General-Election-Information`; certified candidates in ballot order (Aug 28, 2026) `https://www.montereypark.ca.gov/DocumentCenter/View/19520/Candidate-Status-Table-ballot-order-08282026`; City Attorney impartial analyses and Council arguments for HOM and AAA (linked from that page).
5. **ZIP geography:** ZCTA 91755 (2020 Census, POP100 27,637) from TIGERweb `https://tigerweb.geo.census.gov/arcgis/rest/services/Census2020/PUMA_TAD_TAZ_UGA_ZCTA/MapServer/2`. 2020 blocks inside a generalized ZCTA outline (23,045 people) fall entirely in Monterey Park tracts 4817.11, 4817.12, 4822.01, 4822.02, 4826 and 4828.01; the edge blocks that also touch the outline add only Monterey Park, Montebello (tract 5300.05, 4 blocks) and unpopulated industrial blocks.
6. **Districts:**
   - Congress (Prop 50 / AB 604 lines): TIGERweb 120th Congressional Districts (`.../TIGERweb/Legislative/MapServer/0`). The CD-28 boundary south of the ZIP follows the same vertices as the ZCTA (and city) boundary, so the ZIP is all CD-28; CD-38 only touches the generalized outline at the Montebello edge.
   - State Senate / Assembly: TIGERweb `.../Legislative/MapServer/1` and `/2`, cross-checked with the RRCC precinct layer `https://services.arcgis.com/RmCCgQtiZLDCtblq/ArcGIS/rest/services/Registrar_Recorder_Precincts/FeatureServer/0` (DIST_STSEN, DIST_STASS): every Monterey Park precinct in the ZIP is SD-25 / AD-49; SD-30 / AD-54 appear only in Montebello edge precincts.
   - City council districts, school districts, water districts: RRCC precinct layer (DIV_CITY, DST_USD/DIV_USD, DST_ESD, DST_MWD/DIV_MWD, DST_WR/DIV_WR, DST_JRC). Shares by precinct count/area, refined with district populations below.
7. **June 2 primary outcomes:** Supervisor District 1 won outright by María Elena Durazo (about 60.6%, preliminary): `https://la.streetsblog.org/2026/06/10/2026-primary-election-results-round-up-strong-voter-support-for-most-livable-streets-candidates`; `https://en.wikipedia.org/wiki/2026_Los_Angeles_County_elections`. Measure NDC (citywide data-center ban) passed at a June 2 special municipal election (about 86-88%): `https://www.coloradoboulevard.net/monterey-park-voters-approve-measure-ndc-banning-data-centers-citywide/`.

## Contests on the ballot for 91755

### Federal and state (about 100% of the ZIP)
- **U.S. House, CA-28** (existing id `us-rep-ca28`): Judy Chu (United States Representative) vs. April A. Verlato (Small Business Owner). Source: RRCC feed.
- **State Board of Equalization, District 3** (`boe-d3`): Mike Gipson vs. Samuel P. Sukaton. The only BOE contest in the LA County feed.
- **Assembly, AD-49** (`assembly-ad49`): in the RRCC feed. Every Monterey Park precinct in the ZIP is AD-49.
- **No State Senate contest:** the ZIP is in SD-25 (odd-numbered, not up in 2026). SD-30 appears only in Montebello edge precincts outside the ZIP's population.

### Countywide (all of LA County)
- Court of Appeal, Second District retention (`retention-dca2`), Superior Court Offices 64, 65, 87, 131, Sheriff (Luna vs. Villanueva), County Measures A and E. Same as wave 3; see `docs/wave3-la-scope.md`.

### Community college: Los Angeles Community College District (100%)
- Precinct layer: every Monterey Park precinct in the ZIP carries community-college code 45 (LACCD), the same code as Hollywood and Burbank. East Los Angeles College is in Monterey Park. Seats 2, 4, 6 (`laccd-seat-2`, `-4`, `-6`).

### City of Monterey Park (General Municipal Election, nonpartisan; about 100% of the ZIP)
- **City Council, District 5** (about 44% of the ZIP): Steven Kung (Filmmaker/Community Organizer) vs. Vinh T. Ngo (Monterey Park City Councilmember, incumbent). All 49 District 5 precincts lie in the ZIP; the city's 2020 population for District 5 is 12,211 (city "Current Districts" map, `https://www.montereypark.ca.gov/DocumentCenter/View/12474/Monterey-Park-Current-Districts`), or about 44% of the ZIP's 27,637. The rest of the ZIP is District 4 (all of it, not up) plus parts of Districts 2 and 3 (not up).
- **City Council, District 1:** Thomas Wong (Monterey Park City Councilmember), unopposed. **Not in this ZIP** (no District 1 precinct touches ZCTA 91755); District 1 is in 91754. Not listed.
- **City Clerk (at large):** Dora Leung (Mother/Realtor/Entrepreneur), unopposed. Open seat (incumbent Maychelle Yee, elected 2022, did not file). In the RRCC feed, so printed.
- **City Treasurer (at large):** Amy Lee (City Treasurer/Attorney), unopposed incumbent. In the RRCC feed, so printed.
- **Measure HOM** (majority vote): Land Use Element amendment creating the Housing Overlay Mixed Environments (HOME) designation for housing and mixed use in identified commercial/industrial areas; R-1/R-2 excluded; data-center ban kept. Needed because Land Use Element amendments require a citywide vote (Measure JJ, 2020; voter approval since 1982).
- **Measure AAA** (majority vote): hotel/motel transient occupancy tax 13% to 14%, short-term rentals 13% to 16%; about $600,000 a year; general fund.

### Contests that do NOT reach this ZIP or are not on the ballot
- **County Supervisor District 1:** decided in June (Durazo, outright). Not in the November feed.
- **Alhambra Unified** (most of the ZIP): Trustee Areas 2, 4, 5 canceled (appointment in lieu of election, RRCC canceled list); no Alhambra USD contest in the feed. The ZIP's Alhambra USD precincts are in Areas 2, 3, 4, 5; Area 3 is not up.
- **Garvey Elementary** (south-east part of the ZIP): Trustee Areas 1, 3, 5 canceled; no Garvey contest in the feed.
- **Montebello Unified** (southern part of the ZIP): only Trustee Area 2 is contested (Reveles, Jauregui Paulson, Renova). The ZIP's Montebello USD precincts are all Trustee Area 1 (precinct layer), which was canceled along with Area 3. Not listed. See uncertainty 2.
- **San Gabriel Valley MWD:** only Division 5 (Robert Gonzales, Azusa Councilmember, vs. Tizoc Cruz-Gonzalez) is contested; Divisions 1 and 4 canceled. Not Monterey Park's division as far as I can tell (see uncertainty 3).
- **Upper San Gabriel Valley MWD:** Divisions 1 and 5 canceled; no contest in the feed.
- **Central Basin MWD:** Division 3 canceled; no contest in the feed.
- **Water Replenishment District, Division 4** (Calderon, Chavez, Peña): one Monterey Park precinct in the ZIP (4500024C, the industrial southern tip) is in WRD Division 4; its 2020 blocks have 0 residents in Monterey Park. Effectively 0% of the ZIP. Not listed.
- No school, college or special-district measure covers the ZIP.

## Deduplicated list for 91755

| Contest | Share | Race id |
|---|---|---|
| Statewide offices, SPI, Props, Supreme Court retention | 100% | statewide |
| BOE D3: Gipson vs Sukaton | 100% | `boe-d3` (existing) |
| U.S. House CA-28: Chu vs Verlato | 100% | `us-rep-ca28` (existing) |
| Assembly AD-49 | 100% | `assembly-ad49` (existing) |
| Court of Appeal 2nd Dist. retention | 100% | `retention-dca2` (existing) |
| Superior Court 64, 65, 87, 131 | 100% | existing |
| LACCD Seats 2, 4, 6 | 100% | existing |
| Sheriff | 100% | `la-sheriff` (existing) |
| County Measures A, E | 100% | existing |
| Monterey Park Council D5: Kung vs Ngo | ~44% | `monterey-park-council-d5` (new) |
| Monterey Park City Clerk: Leung (unopposed) | 100% | `monterey-park-city-clerk` (new) |
| Monterey Park City Treasurer: Lee (unopposed) | 100% | `monterey-park-city-treasurer` (new) |
| Monterey Park Measure HOM | 100% | `monterey-park-measure-hom` (new) |
| Monterey Park Measure AAA | 100% | `monterey-park-measure-aaa` (new) |

## Biggest uncertainties

1. No printed sample ballot was pulled. The ZCTA is not identical to the USPS ZIP; a few addresses mailed as 91755 may sit in Montebello, Alhambra or unincorporated areas with different contests.
2. District shares and school trustee areas come from the RRCC precinct layer, whose district codes may lag recent redistricting. If Montebello USD's trustee-area map moved and any of the ZIP's Montebello USD area is in Trustee Area 2, those voters also see that contest (not covered).
3. The San Gabriel Valley MWD division numbering in the precinct layer (DIV_MWD 2 and 3 for the ZIP) does not obviously match the district's Division 5; I did not find a division map. The only candidate with a stated place is an Azusa councilmember, so Division 5 is most likely Azusa.
4. Council District 5's share (~44%) uses the city's raw 2020 district population against the ZCTA population, not block-by-block assignment.
5. Measure NDC's final certified percentage was not opened (news reports 86-88%).
