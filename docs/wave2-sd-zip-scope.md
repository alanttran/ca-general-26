# Wave 2 scope: contests on the Nov 3, 2026 San Diego County ballot for 8 ZIPs

Researched Oct 7, 2026. Do not treat as a substitute for a voter's own sample ballot, but this is derived from the County's own ballot-type data, not from web summaries.

## Method (how this was determined)

1. The County Registrar publishes a GIS layer of **Nov 2026 ballot-type polygons**: `https://gis-public.sandiegocounty.gov/arcgis/rest/services/Ballot_Types_NOV2026/MapServer/0` (field `BT` = ballot type number).
2. For each ZIP, I took every 2020 Census block fully inside the ZIP's ZCTA (TIGERweb, `tigerweb.geo.census.gov`), looked up each block centroid's ballot type, and weighted by block population. Shares below are population shares of the ZCTA, so they are approximate (blocks straddling the ZIP edge are excluded; ZCTA is not identical to the USPS ZIP).
3. For every ballot type with at least 0.8% of a ZIP, I downloaded the **official sample ballot PDF** `https://www.sdvote.com/content/dam/rov/en/sb/SB-ENG-<BT, 3 digits>.pdf` and read the actual printed contests (same source and format as the 92126 / BT 469 transcription in `sample-ballot-92126.md`). Candidate designations come from those ballots and from the Registrar candidate list (dated 8/28/2026): `https://www.sdvote.com/content/dam/rov/en/election/nov-3-2026-gubernatorial-general-election/candidate-list.pdf`.
4. Local measures: Registrar notice `https://www.sdvote.com/content/dam/rov/en/election/nov-3-2026-gubernatorial-general-election/argument-deadline-measures.pdf` plus a scan of the measure pages of the downloaded ballots. Vote thresholds from the printed "Measure A / B / M" pages (BT 469 pdf, pp. ~42-44 and the measure sections).

Items marked CONFIRMED are on a printed official sample ballot. Anything not so marked is flagged.

## Contests common to ALL 8 ZIPs (same as 92126)

Governor, Lt. Governor, Secretary of State, Controller, Treasurer, Attorney General, Insurance Commissioner, State Board of Equalization District 4, Supreme Court retention (Groban, Evans), 4th District Court of Appeal retention (Divs 1-3, same names as 92126 file), State Superintendent of Public Instruction (Barrera / Shaw), County Assessor/Recorder/Clerk (Marks, unopposed), County Treasurer-Tax Collector (Cohen / Nakawatase), Props 1-5 and 37-45 (verified present on every downloaded ballot), **County Measure A** (charter amendment, simple majority 50%+1) and **County Measure B** (half-cent health and safety sales tax, simple majority 50%+1 per the printed measure page). All CONFIRMED on the sample ballots.

## Congress / Senate / Assembly lookup (CONFIRMED from ballots)

| ZIP | U.S. House | State Senate | Assembly |
|---|---|---|---|
| 91911 | 52 (100%) | 18 (100%) | 80 (100%) |
| 91914 | 52 (100%) | 18 (100%) | 80 (100%) |
| 92009 | 49 (100%) | 38 (100%) | 77 (100%) |
| 92026 | 48 (83.5%), 50 (16.5%) | 40 (100%) | 76 (77.3%), 75 (22.7%) |
| 92111 | 50 (100%) | none up (SD-39 is odd-numbered) for 98.4%; 1.6% are in SD-38 | 78 (100%) |
| 92130 | 49 (100%) | 38 (70.5%), 40 (29.5%) | 76 (51.5%), 77 (48.5%) |
| 92131 | 50 (100%) | 40 (100%) | 75 (100%) |
| 92139 | 51 (51.9%), 52 (48.1%) | none up (SD-39) | 79 (100%) |

Finalists (from ballots):
- **CD-48**: Jim Desmond (REP), County Supervisor; Marni Von Wilpert (DEM), Councilwoman/Health Advocate
- **CD-49**: Mike Levin (DEM), U.S. Representative; Armen Kurdian (REP), Retired Navy Captain
- **CD-50**: Scott Peters (DEM); Steve Cohen (REP), Television News Consultant
- **CD-51**: Sara Jacobs (DEM); Ricardo Cabrera (REP), Business Owner
- **CD-52**: Juan Vargas (DEM); Jeff Belle (REP), Business Owner
- **SD-18**: Steve Padilla (DEM), State Senator; Art Hodges (REP), CEO/Educator/Pastor
- **SD-38**: Catherine S. Blakespear (DEM), State Senator; Laura Bassett (REP), Small Business Owner
- **SD-40**: Mara Elliott (DEM), Ethics Attorney; Kristie Bruce-Lane (REP), Businesswoman/Victims Advocate
- **AD-75**: Carl DeMaio (REP), Businessman/State Legislator; Gerald C. Boursiquot (DEM), IT Contractor/Father
- **AD-76**: Darshana Patel (DEM), Assemblymember; Carrie S. Espinoza Villanueva (REP), College Administration Support
- **AD-77**: Tasha Boerner (DEM), Assemblymember; Trinity Hannaway (REP), Taxpayer Advocate
- **AD-78**: Chris Ward (DEM), Assemblymember; Payton Galvez (REP), Constituent Services Manager
- **AD-79**: LaShae Sharp-Collins (DEM), Incumbent; Andrew Lawson (REP), Spring Valley Community Planning Group Member
- **AD-80**: David A. Alvarez (DEM), Assemblymember; Alejandro Galicia (REP), Business Owner/Commissioner

Source for all of the above: the sample ballots for each ZIP's ballot types plus the candidate list PDF. Which State Senate seats are up in SD County in 2026: 18, 32, 38, 40 (Registrar candidate list). Odd-numbered seats (e.g., 39) are not up.

## ZIP-by-ZIP (local contests in printed order: School, College, County, City, District, Measures)

### 91911 (Chula Vista, central/west). Main BT 679 (65.6%); other BTs 677, 674, 676, 667, 670, 672, 671
Federal/state: CD-52, SD-18, AD-80.
- **Chula Vista Elementary SD Governing Board, Seat 1** (vote 1): Jorge Balvaneda (Operations Manager/Parent); Jessica Castillo Tolston (appointed incumbent); Debra McLaren (Educator/Parent). All of the ZIP.
- **CVESD Seat 3** (vote 1): Katina Gonzalez-Rondeau (Teacher/Student Advocate); Leticia Segura (Retired Educator/Parent); Norma Lozoya Toothman (Parent/Nonprofit Director). ~95-100%.
- **CVESD Seat 5** (vote 1): Delia Dominguez Cervantes (Governing Board Member); Tom Glover (Retired Educator); Janette Gomez (Teacher/Parent); Jaqueline Gonzalez (Parent/Substitute Teacher); Devone L. Jones (Education Facilitator); Michael "Tony" Perez (Retired Administrator). All.
- **Southwestern Community College, Trustee Area 4** (about 25%): Trevor Andersen (Father/Business Owner); Aimee Cuellar-Martinez (Assistant Principal); Selena Ellis-Vizcarra (Nonprofit Executive/COO); Corina Soto (Incumbent). **Trustee Area 1** (about 8%): Mary Salas (Retired Mayor of Chula Vista) vs. Robert Moreno (SWC Governing Board Member).
- **Sweetwater Union HSD Trustee Area 1** (about 4%): Fermin Eusebio Jimenez vs. Maria Betancourt-Castaneda.
- No County Board of Education seat on this ZIP.
- No County Supervisor seat (District 1 is not up).
- City: **Mayor** John McCann (Mayor, REP-registered per press) vs. Francisco Tamayo (CVESD board member); **City Attorney** Marco Verdugo (unopposed) (all). **Council District 2** (about 6.6%): Jose Preciado vs. Angelica S. Martinez. No Council District 1 for most of this ZIP (D1 is only in 91914-type areas).
- Local measures: none beyond County A and B. (Chula Vista's charter overhaul was pulled in July: `https://www.kpbs.org/news/politics/2026/07/22/chula-vista-abandons-sweeping-government-overhaul-over-transparency-concerns`, consistent with no city measure appearing on any ballot.)

### 91914 (East Chula Vista / Eastlake-Otay Ranch). BT 665 (72.1%), BT 666 (27.8%)
CD-52, SD-18, AD-80.
- CVESD Seats 1, 3, 5: same candidates as 91911 (all voters).
- No college or Sweetwater seat on the ballot.
- City: Mayor (McCann / Tamayo), **Council District 1**: Carolina Chavez (Councilmember) vs. Greg Martinez (CPA/Business Owner), City Attorney (Verdugo, unopposed). All voters in the ZIP.
- Special district (27.9%, BT 666): **Otay Water District, Board Division 3**: Gary D. Croucher (Retired Fire Chief) vs. Hector Raul Gastelum (Small Business Owner).
- Measures: none beyond County A and B.
- Caveat: this ZCTA's block population came out at 17,522, smaller than I expected, so the ZIP may include some blocks I excluded; the two ballot types dominate regardless.

### 92009 (Carlsbad, south/La Costa). BT 212 (50.4%), 203 (19.8%), 206 (8.5%), 202 (6.6%), 200 (6.5%), 205 (3.6%), 211 (2.4%), 210, 243
CD-49, SD-38, AD-77.
- **County Board of Education, 5th District** (99%): Rick Shea (Governing Board Member) vs. Bianca Ragonesi-Lasche (Retired Accountant).
- **Encinitas Union SD Governing Board** (about 53%; vote for up to 3): Michelle Clark (Mother); Jillian Cocayne (Parent/Policy Advisor); Marika Dixon (Elementary Aide/Parent); Chris Hargrave (Teacher/Principal/Grandparent); Jorge Sanchez (Parent/Firefighter/Educator); Bill Shen (Business Owner/Parent).
- **Carlsbad Unified SD, Trustee Area 5** (about 11%): Joel Gutierrez (Airline Pilot/Parent) vs. Chris Waidelich (Parent/Attorney).
- **San Dieguito Union HSD, Trustee Area 1** (2.4%): Amy Flicker (Nonprofit Board Member) vs. David Miyashiro (Public School Superintendent).
- **Palomar CCD Trustee Area 1** (1.0%): Judy Patacsil (Board Member), Anthony Wiley, Frank Xu.
- City of Carlsbad (all voters): **Mayor**: Bill Arsenault (Retired Businessman); Stephen Banister (Energy Program Supervisor); Keith Blackburn (Mayor); Eric Nixon (EMT). **City Clerk**: Sherry A. Freisinger (unopposed). **City Treasurer**: Thomas E. Krouse (Investment Company CEO) vs. Christian Peacox (City Treasurer). **Council District 3** (about 32%): Priya Bhat-Patel (Council Member) vs. Wayland T. Lim (Retired Business Consultant). Council District 1 is up citywide but does not appear on any 92009 ballot.
- Special district (about 15%): **Palomar Health District Director, Division 3**: Laurie Edwards-Tate (Incumbent) vs. Sarah Telahun (RN, Kaiser).
- Measures: none beyond County A and B. No Carlsbad city measure on any 92009 ballot.

### 92026 (Escondido + unincorporated north). 36 ballot types; top: BT 115 (13.0%), 101 (12.6%), 90 (11.8%), 98 (7.6%), 51 (6.6%), 97 (6.4%), 55 (5.4%)
CD-48 (83.5%) Desmond/Von Wilpert; CD-50 (16.5%) Peters/Cohen. SD-40 (100%). AD-76 (77.3%); AD-75 (22.7%). **County Supervisor District 5** (100%): Kyle Krahel (Small Business Owner, DEM) vs. Rebecca Jones (San Marcos Mayor/Businesswoman, REP).
- **Escondido Union HSD**: Trustee Area 5 (about 49%): David Vincent (Governing Board Member) vs. Georgine Tomasi (Retired Teacher). Area 2 (about 21%; three candidates, vote 1): Rafaela Cervantes (College Professor); Joe Hinrichs (Public School Teacher); Mark Lucas (Teacher/College Professor). Area 1 (about 13%): Nina Haines (Business Owner) vs. Bob Weller (Governing Board Member).
- **Escondido Union SD**: Area 5 (about 51%): Frank Huston (Incumbent) vs. Bonnie Wagner (Educator/Project Manager). Area 2 (about 15%): Chris Ranglas (University Project Manager) vs. Elizabeth Shulok (Parent/Education Advocate). Area 4 (about 6%): Maggie Cascio (School Volunteer) vs. Zesty Harper (Governing Board Member).
- **San Marcos Unified SD Trustee Area E** (about 7%): Christine Baker (Parent/Certified Appraiser) vs. Derrick Davis (Parent/Security Executive).
- **Palomar Community College District Trustee Area 5** (about 40%): Cory Anderson (Marriage Family Therapist); Jennifer Jeffries (Retired College Professor); Michelle C. Moore (College Professor).
- City of Escondido (72% of residents; the rest are unincorporated): **Mayor** Dane M. White (Mayor) vs. Elias Velazquez (Nonprofit Executive). **Council District 2** (about 36%): Anthony DiMartino (Government Affairs Director) vs. Joe Garcia (Pastor/City Councilmember). **Council District 1** (about 21%): Tanner Horsley (Navy Communications Manager) vs. Vanessa Valenzuela (Director of Finance). No Escondido clerk, treasurer or city-attorney race and no city measure on any ballot.
- Special districts: **Deer Springs Fire Protection District Director** (about 23%, vote up to 3): Carl Atwood; Lynne Caples (Appointed Incumbent); James E. Gordon (Incumbent); Steve Kerrin (Incumbent); David Leatherberry (Health Law Attorney). **Palomar Health District Director, Division 3** (about 17%): Laurie Edwards-Tate vs. Sarah Telahun.
- Measures: none beyond County A and B. (The county notice lists no Escondido, Escondido USD, EUHSD or Palomar measure.) Remaining ~3% of population is in ballot types under 0.8% each that I did not download (may add a small-district race such as Valley Center-Pauma USD or Valley Center fire/water; NOT CONFIRMED).

### 92111 (Linda Vista / Clairemont, City of San Diego). BT 329 (45.1%), 332 (31.6%), 333 (20.3%), 315, 331
CD-50, AD-78, no State Senate (SD-39).
- **County Supervisor District 4** (100%): Monica Montgomery Steppe (San Diego County Supervisor, DEM) vs. Kristine C. Alessio (Attorney, REP-leaning, former La Mesa councilmember).
- **San Diego Community College District Board**: **District A** (45%): Maria Nieto Senour (Governing Board Member) vs. Jonny Brown (Student Advocate/Writer). **District C** (54%): Samantha Ely (Appointed Program Manager) vs. Craig Milgrim (Governing Board Member).
- **San Diego Unified Board of Education, District B** (20%): Shana Hazan (Board Member), unopposed.
- **City of San Diego Council District 2** (45%): Richard Bailey (San Diego Business Owner) vs. Nicole Crosby (Deputy City Attorney). **Council District 6** (1.4%): Kent Lee vs. Mark Powell. The remaining 53.5% of residents are in a council district not up in 2026 (Linda Vista area appears to be District 7, per the City layer; the ballots show no council race there).
- **Measure M** (SDUSD bonds; $3.5B, 55% required) for 100% of the ZIP.
- No County Board of Education seat.
- Split note: the ZIP spans three community college/council/school-board combinations; no single ballot is "main" (BT 329 is the largest).

### 92130 (Carmel Valley, City of San Diego). BT 228 (26.8%), 282 (26.5%), 180 (22.0%), 233 (10.6%), 231, 232, 287
CD-49. SD-38 (70.5%) / SD-40 (29.5%). AD-77 (48.5%) / AD-76 (51.5%).
- **County Board of Education, 5th District** (97%): Rick Shea vs. Bianca Ragonesi-Lasche.
- **Del Mar Union SD Governing Board** (about 64%; vote up to 3): Stephen Cochrane (Education Law Attorney); Katherine C. Fitzpatrick (Incumbent); Alan Scott Kholos (Governing Board Member); Douglas Rafner (Governing Board Member).
- **San Dieguito Union HSD, Trustee Area 5** (about 60%): Ginny Merrifield (Charter School President) vs. Justin Moodie (Public School Teacher).
- **Palomar CCD Trustee Area 1** (about 3%).
- No City of San Diego council race (District 1 is not up), no city measure, **no Measure M** on 92130 ballots (Carmel Valley is served by Del Mar Union/San Dieguito, not SDUSD, in the ballot data).
- About 27% of residents (BT 228) have no school contest at all beyond the county/state items.

### 92131 (Scripps Ranch, City of San Diego). BT 355 (54.8%), 359 (11.0%), 335 (9.8%), 357 (9.4%), 356 (6.2%), 351 (5.6%), 360
CD-50, SD-40, AD-75 (100% each).
- **City of San Diego Council District 6** (23.4%): Kent Lee (City Councilmember) vs. Mark Powell (Business Owner/Educator). The other ~77% are in District 5 (not up), which is the common case in Scripps Ranch; split matches the City's own note that Scripps Ranch is divided between D5 and D6.
- **County Board of Education, 3rd District** (9.8%): Cory Brown (Parent/Business Owner) vs. Alicia Munoz (Governing Board Member, SD County BOE).
- **Palomar CCD Trustee Area 1** (5.6%): Judy Patacsil (Board Member); Anthony Wiley (Parent/Retired Engineer); Frank Xu (Parent/Non-profit Executive).
- **Palomar Health District Director, Division 7** (14.6%): Ian Butler (Critical Care Physician) vs. Linda C. Greer (Registered Nurse).
- **Measure M** (SDUSD bond; $3.5B, 55%) for 90.6% of residents; ~9.4% (BT 357) are in the non-SDUSD part and do not get M.
- No County Supervisor seat (District 3/5 not up).

### 92139 (Paradise Hills, City of San Diego). BT 602 (51.9%), BT 744 (48.1%)
CD-51 (BT 602) Jacobs/Cabrera or CD-52 (BT 744) Vargas/Belle; no State Senate; AD-79.
- **County Supervisor District 4** (100%): Montgomery Steppe vs. Alessio.
- **City of San Diego Council District 4** (100%): Henry Foster III (Councilmember) vs. Martha Abraham (Neonatal ICU Nurse/Mother). The Times of San Diego guide calls this "District 5" but the ballot and City notice of nominees say District 4.
- **Measure M** (SDUSD, 55%).
- No school-board, college or county BOE seat is on either ballot type (SDUSD board seats B/C are elsewhere; community college districts not up in this area).

## Distinct contests across all 8 ZIPs (deduplicated; "shares" = ZIPs where it appears)

Statewide/countywide (all 8): Governor, Lt Gov, SoS, Controller, Treasurer, AG, Insurance Commissioner, BOE-4, Supreme Court x2, Court of Appeal Div 1/2/3 retentions, SPI, Assessor/Recorder/Clerk, County Treasurer-Tax Collector, Props 1-5 and 37-45, County Measures A and B.

U.S. House: CD-48 (92026), CD-49 (92009, 92130), CD-50 (92026 part, 92111, 92131), CD-51 (92139 part), CD-52 (91911, 91914, 92139 part).
State Senate: SD-18 (91911, 91914), SD-38 (92009, 92130 part, 92111 trace), SD-40 (92026, 92130 part, 92131), none up (92111, 92139).
Assembly: AD-75 (92026 part, 92131), AD-76 (92026, 92130 part), AD-77 (92009, 92130 part), AD-78 (92111), AD-79 (92139), AD-80 (91911, 91914).
County Supervisor: D4 (92111, 92139), D5 (92026). None for the other 5 ZIPs.
County Board of Education: 5th Dist (92009, 92130), 3rd Dist (92131 part).
Community college: Southwestern TA4, TA1 (91911); SDCCD Dist A, C (92111); Palomar TA5 (92026), Palomar TA1 (92009 trace, 92130 trace, 92131 part).
School boards: CVESD Seats 1, 3, 5 (91911, 91914); Sweetwater UHSD TA1 (91911 trace); Encinitas Union SD (92009); Carlsbad USD TA5 (92009); San Dieguito UHSD TA1 (92009 trace), TA5 (92130); Del Mar Union SD (92130); SDUSD Dist B (92111 part); Escondido UHSD TA1, 2, 5 and Escondido Union SD TA2, 4, 5 (92026); San Marcos USD TA E (92026 part).
City: Chula Vista Mayor + City Attorney (91911, 91914), CV Council D1 (91914), CV Council D2 (91911 part); Carlsbad Mayor, Clerk, Treasurer (92009), Carlsbad Council D3 (92009 part); Escondido Mayor, Council D1, D2 (92026 part); SD Council D2 (92111 part), D4 (92139), D6 (92131 part, 92111 trace).
Special districts: Otay Water Div 3 (91914 part); Palomar Health Div 3 (92009 part, 92026 part), Div 7 (92131 part); Deer Springs Fire (92026 part).
Local measures: **Measure M** SDUSD bond (92111, 92131 part, 92139); County A and B (all). No city, community-college or special-district measure affects these ZIPs.

## Biggest uncertainties / caveats

1. ZIP shares are population-weighted by 2020 block centroids, not voter counts; ZCTAs differ from USPS ZIPs. Each ballot type listed is real and official, but a given voter may differ from the "main" one.
2. 92026 and 92111 are heavily split; no single "representative" ballot exists. 92026 has 36 ballot types; about 3% of residents sit in ballot types under 0.8% that I did not open (possible extra special-district seats, NOT CONFIRMED).
3. 92131: most residents (about 77%) are in Council District 5 and have no council race; Council D6 applies to about 23%. 92111: council D2 for 45%, none for 53.5%.
4. Candidate-list "qualified" flags and party labels in my notes for Supervisor/Mayor candidates (e.g., McCann REP) come from press (Times of San Diego voter guide `https://timesofsandiego.com/politics/2026/09/27/voter-guide-november-3-general-election-san-diego-county/`) rather than the ballot, which does not print local-office party. Treat as informational.
5. County Board of Education seat 3 vs 5 and community college trustee-area shares were derived only from which ballot types print them; the underlying trustee-area maps were not separately checked.
6. Measure B vote threshold: the printed measure page says Simple Majority (50%+1). The statute question (special tax by citizen initiative vs. Board-placed) was not independently verified.
7. 92111's "Linda Vista in District 7" is inferred from the City council-district layer (`https://webmapsqa.sandiego.gov/arcgis/rest/services/Planning/PLN_LongRangePlanning/MapServer/4`), which also showed some points in D2/D3; the ballot data is the authority.
