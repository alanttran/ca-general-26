# Denver ZIP 80204: what else is on the Nov. 3, 2026 ballot

Scope note for the one-off Colorado ballot (West Colfax, Sun Valley, Villa Park, La Alma/Lincoln Park, Auraria, Jefferson Park, Barnum and nearby). This covers everything **except** the federal and statewide offices (`co-statewide.ts`), the statewide amendments and propositions (`co-measures.ts`) and judicial retention (`co-courts.ts`), which other files handle. Race data is in `site/src/data/races/co-denver.ts`.

Researched Oct. 9–12, 2026.

## Method

1. **Population base.** Census 2020 blocks whose internal point falls inside the 2020 ZCTA 80204 polygon. Geometry and `POP100` came from Census TIGERweb REST query endpoints (`PUMA_TAD_TAZ_UGA_ZCTA/MapServer/1` for the ZCTA, `Tracts_Blocks/MapServer/12` for 2020 blocks). Result: **532 blocks, 35,269 residents**.
2. **District overlays.** Each block point was tested (point in polygon, Python/shapely) against:
   - TIGERweb `Legislative/MapServer/1` and `/2`: 2026 State Legislative Districts, upper and lower (Colorado's 2021 commission maps).
   - TIGERweb `Places_CouSub_ConCity_SubMCD/MapServer/11` (incorporated places) and `School/MapServer/5` (unified school districts).
   - RTD's own director-district layer: `services5.arcgis.com/1fZoXlzLW6FCIUcE/.../RTD_GIS_Boundaries_view/FeatureServer/1` (published by RTD's `rtdgis` account; the post-2022 map).
3. **Contests and candidates.** Colorado Secretary of State, *2026 General Election Official Candidate List* (certified to counties Sept. 4, 2026): https://www.sos.state.co.us/pubs/elections/vote/generalCandidates.html
4. **Local measures.** Denver Clerk and Recorder's *2026 Ballot Information Booklet* (Referred Questions 2H–2K and Initiated Ordinance 311) and *Ballot Issue Notice* (TABOR notice; DPS Ballot Issue 4A), both linked from https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Denver-Clerk-and-Recorder/Elections-Division/Upcoming-Elections/Read-the-Ballot-Issue-Notice-and-Ballot-Information-Booklet
5. **Cross-check.** Denverite's 2026 voter guide (Sept. 25, 2026; read via the Internet Archive because denverite.com blocks automated fetches) lists the same city and RTD contests and six local measures: https://denverite.com/2026/09/25/vg-2026-denver-midterm-election-voter-guide/

Shares are of 2020 census residents, not registered voters. ZCTA 80204 is the Census approximation of the USPS ZIP; a few edge addresses can differ.

## Jurisdictions

| Layer | Result |
|---|---|
| County | 100% City and County of Denver (county FIPS 031). No part of ZCTA 80204 is in Jefferson County, Lakewood or Edgewater. |
| City | 100% Denver |
| School district | 100% School District No. 1 (Denver Public Schools) |

## District shares

| Contest | District | Residents | Share | Up in 2026? |
|---|---|---|---|---|
| State Senate | **SD 34** | 31,240 | **88.6%** | Yes. Open: Sen. Julie Gonzales is term-limited (first elected 2018). |
| State Senate | **SD 31** | 4,029 | **11.4%** | Yes. Sen. Matt Ball was appointed by a vacancy committee in January 2025 after Chris Hansen resigned weeks after re-election; under Colorado's vacancy rules the appointee serves until the next general election, so the seat's remaining two years are on this ballot. |
| State House | **HD 4** | 22,617 | **64.1%** | Yes (all House seats every two years). |
| State House | **HD 5** | 12,652 | **35.9%** | Yes. Open: Rep. Alex Valdez is term-limited. |
| RTD Board | **District C** | 31,240 | **88.6%** | Yes. Open: Director Michael Guzman is not running. |
| RTD Board | District A | 4,029 | 11.4% | **No.** District A is not on the 2026 list (elected 2024). |

The 4,029 residents in SD 31 are the same blocks as RTD District A, in the ZIP's eastern edge (both maps follow precinct lines there).

## Contest list (ballot order) and race ids

| # | Race id | Contest | Share of 80204 | Candidates / choice |
|---|---|---|---|---|
| 1 | `co-senate-sd34` | State Senate District 34 | 88.6% | Chela Garcia Irlando (D), Jennifer Qualteri (R), Jacob Luria (L) |
| 2 | `co-senate-sd31` | State Senate District 31 | 11.4% | Matt Ball (D, appointed incumbent), unopposed |
| 3 | `co-house-hd4` | State House District 4 | 64.1% | Cecelia Espenoza (D, incumbent), Ellwood Ervin (R), Bill Hare (Forward) |
| 4 | `co-house-hd5` | State House District 5 | 35.9% | Justine Sandoval (D), Johnnie W. Johnson (R) |
| 5 | `denver-council-at-large-b` | Denver City Council At-Large Seat B (vacancy, to July 2027) | 100% | Alfredo Reyes, Whitney Traylor, Jeff Walker, Julissa Soto, Gabriel Konkle, Cynthia Diaz, Melissa Mejía, Jake Browne, Monica Martinez, Raymon Anthony Doane (order as listed by Denverite; nonpartisan, plurality wins) |
| 6 | `co-rtd-district-c` | RTD Board of Directors, District C | 88.6% | Joe Meyer, unopposed (nonpartisan) |
| 7 | `denver-measure-2h` | Referred Question 2H: Auditor wage enforcement (charter) | 100% | Yes / No |
| 8 | `denver-measure-2i` | Referred Question 2I: optional two-year budget (charter) | 100% | Yes / No |
| 9 | `denver-measure-2j` | Referred Question 2J: Civil Service Commission and Department of Safety (charter) | 100% | Yes / No |
| 10 | `denver-measure-2k` | Referred Question 2K: 20-year Xcel Energy franchise | 100% | Yes / No |
| 11 | `denver-measure-311` | Initiated Ordinance 311: ban force-feeding of birds and foie gras sales | 100% | Yes / No |
| 12 | `dps-measure-4a` | DPS Ballot Issue 4A: $44M mill levy override | 100% | Yes / No |

Suggested `partialShares` for the profile: `co-senate-sd34: 88.6`, `co-senate-sd31: 11.4`, `co-house-hd4: 64.1`, `co-house-hd5: 35.9`, `co-rtd-district-c: 88.6`. All other ids are ~100%.

## Primary results (June 30, 2026)

The Secretary of State certified the primary on July 24, 2026 (https://coloradosos.gov/pubs/newsRoom/pressReleases/2026/PR20260724PrimaryCertified.html). Certified district totals are only in the statewide abstract PDF, which was not downloaded. The figures below are election-night or next-day unofficial shares from Denverite and Colorado Politics. The nominees themselves are confirmed by the certified general-election candidate list.

- **SD 34 (D):** Garcia Irlando over Andrés Carrera, about 67% election night and over 68% the next afternoon. Michael Guzman, named as a candidate in January, was not in the post-primary reporting.
- **SD 34 (R):** Jack Daus was the unopposed primary nominee per Denverite (July 1). The certified general list (Sept. 4) shows **Jennifer Qualteri** as the Republican instead and does not list Daus. That suggests Daus withdrew and a vacancy committee replaced him, but no reporting confirming this was found. **Unverified.**
- **SD 31:** Ball was unopposed for the Democratic nomination. Denverite (July 1) said Republican Michael F. DiManna would face him, but the certified list shows **Ball alone** and no DiManna. **Not explained in any source found.**
- **HD 4:** Espenoza (D) and Ervin (R) were both unopposed in their primaries. Bill Hare is the Forward Party nominee.
- **HD 5 (D):** Sandoval about 76% over Sterling Simms (election night). Johnson was unopposed for the Republican nomination.

## What is not on the 80204 ballot, and why

- **Denver mayor, auditor, clerk, and district council seats.** Elected in odd years (next regular election April 2027). Only the At-Large B vacancy is on this ballot, because Sarah Parady resigned effective Aug. 5, 2026 and council called a special election.
- **DPS Board of Education.** Elected in odd years (November 2025, 2027). Denverite reported a board member's resignation on Oct. 1, 2026 (headline only; not read). DPS vacancies are filled by board appointment, not on this ballot.
- **RTD District A** (11.4% of the ZIP). Not up until 2028, when the board changes to five elected and four appointed members.
- **Other Denver-area districts.** Denver's 2026 TABOR notice lists only one tax question from any jurisdiction (DPS 4A), so no metro district, Mile High Flood District, library or other special district in 80204 has a tax or debt question. Denver Health, Denver Water and the Denver Housing Authority boards are appointed. Metro district board elections are held in May of odd years.
- **County offices.** Denver's county offices (clerk, sheriff, assessor and so on) are appointed or elected on the city's odd-year municipal cycle. Denver has no county commissioners; council serves as the county legislature.
- **Jefferson County, Lakewood or Edgewater contests.** None of ZCTA 80204's 2020 population falls outside Denver.
- **District attorney.** The 2nd Judicial District DA (Denver) was elected in 2024 and is next up in 2028.
- **Covered elsewhere.** CD-1, U.S. Senate, governor, the other statewide offices, CU Regent, State Board of Education, the 14 statewide measures, and 23 Denver-ballot judicial retention questions.

## Open items

- SD 34 Republican: confirm why Qualteri replaced Daus. No biography for Qualteri was found.
- SD 31: confirm why DiManna is not on the certified list.
- HD 4 Republican: the SoS list says "Ellwood Ervin"; GoodParty.org lists "Alva Ervin." The race file uses the SoS spelling.
- Certified primary percentages: pull them from the SoS 2026 primary abstract (PDF) if exact figures are needed.
- At-Large B: the Denverite order was used. The official ballot order (drawn Sept. 2) was not found online.
