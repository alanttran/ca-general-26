# Wave 3 scope: contests on the Nov 3, 2026 ballot for ZIP 92868 (Orange, Orange County) and ZIP 92562 (Murrieta, Riverside County)

Researched Oct 7-8, 2026. Same caveat as wave 2: not a substitute for a voter's own sample ballot. Statewide contests, Supreme Court retention and Court of Appeal retention are already covered elsewhere and are only noted here.

## Method

1. **Contest lists (official).**
   - Orange County ROV "Contests Qualified for the Ballot": `https://ocvote.gov/elections/contests-qualified-for-the-ballot-for-the-2026-general-election`.
   - OC candidate filing log (AJAX endpoint behind `https://ocvote.gov/candidates/candidate-filing-log-with-statements`). It lists qualified candidates and ballot designations; this is the pre-certification filing log, so names and designations could change in the final candidate list.
   - OC measures: `https://ocvote.gov/elections/2026-general-election-measures-on-the-ballot`. Letters: `https://ocvote.org/elections/assigned-measure-letters-november-3-2026`. Full text PDFs for Measures I, J, K were read from ocvote.gov (`/sites/default/files/2026-09/I-ORAN Sales Tax - LAYOUT (1).pdf`, `.../J-ORAN TOT - LAYOUT (1).pdf`, `/sites/default/files/2026-10/Orange Charter - Layout.pdf`).
   - Riverside ROV: November 3, 2026 General Election page `https://voteinfo.net/november-3-2026-general-election`. Candidate list: "Final candidate list nov 2026" (Contest/Candidate Proof List, printed 9/11/2026) `https://voteinfo.net/sites/g/files/aldnop371/files/2026-09/Final%20candidate%20list%20nov%202026%20eng.pdf`. Measure notices: `https://voteinfo.net/sites/g/files/aldnop371/files/2026-08/Measure%20M-Murrieta%20Valley%20USD%20eng.pdf` and `.../Measure%20A%20-%20Riverside%20County%20Transportation%20Commission.pdf`. (voteinfo.net blocks scripted requests; read through the in-app browser.)
2. **Districts for 92868.** OC ROV's own district layers (the feature services behind the "Find My District" web app `https://ocvote.gov/findmydistrict`; precinct-to-district master layer `Map_Central_Precinct_to_District_Master_Select_Stats_Public`, services3.arcgis.com/slX5MYawmKdsiRUf). I took every 2020 Census block whose centroid is inside the ZCTA (TIGERweb, 141 blocks, population 27,127 = the ZCTA total) and assigned each to its OC precinct polygon. Shares are population shares.
3. **Districts for 92562.** Riverside County GIS `https://gis.countyofriverside.us/arcgis_mapping/rest/services/OpenData/Administrative_Boundaries/MapServer` (layer 10 "Prop 50 Congressional District", 6 Assembly, 7 Senate, 2 Supervisorial, 5 School Districts) and `.../General/MapServer/470, 480` (water districts), plus City of Murrieta council layer `https://services8.arcgis.com/EezLLt1gRjomqb1n/arcgis/rest/services/City_of_Murrieta_Council_Districts/FeatureServer`. Same block method: 490 blocks, population 64,253. Spot checks used the Registrar's District Lookup `https://docs.voteinfo.net/electiondatalookup/` with public-building addresses only (Murrieta City Hall/Town Square, library, fire stations, MVUSD office, hospital).

## Contests common to both ZIPs
Governor (Becerra / Hilton), Lt. Governor, Secretary of State, Controller, Treasurer, Attorney General, Insurance Commissioner, Superintendent of Public Instruction (Barrera / Shaw), Supreme Court retention (Evans, Groban), 4th District Court of Appeal retention, **State Board of Equalization District 4: Tom Umberg (D, Small Businessman/Senator) vs. Denis Bilodeau (R, Councilmember/Civil Engineer)**.
- BoE: OC filing log contest 1090 and Riverside contest 1120 ("St Bd of Equalization 4 (Por. SB, SD, Or & Imp)"). Both ZIPs are 100% in BoE District 4: the OC layer says 100% for 92868; the Riverside lookup at Murrieta City Hall also says District 4.
- Court of Appeal: Riverside's list has Div 1 (7 justices), Div 2 (Raphael, Lee) and Div 3 (Motoike presiding; Scott, Servino, Macaulay, Gooding, Delaney). OC's contest page says "4th Appellate District, Division 1-3". So **yes, all three divisions appear on both counties' ballots**, same as San Diego. The Registrar lookup labels both ZIPs' appellate district "4th District Court of Appeal". The OC justice names were not separately retrieved (OC page lists only the contest title).
- Statewide Props 1-5 and 37-45: confirmed on OC's page for 92868. For Riverside the proposition list was not in the candidate list PDF; assumed identical (statewide; unconfirmed on a Riverside sample ballot).

## ZIP 92868 (City of Orange, west/central Orange incl. Old Towne area), OC. ZCTA pop 27,127

| Office | Share of ZIP | Finalists | Source |
|---|---|---|---|
| U.S. House **CD-46** | 98.8% | Lou Correa (U.S. Congressmember) vs. David Pan (Professor) | OC filing log 1175; OC layer |
| U.S. House CD-45 | 1.2% | Derek Tran (Representative/Business Owner) vs. Chuong V. Vo (Retired Police Officer) | filing log 1165 |
| State Senate **SD-34** | 100% | Avelino Valencia (Assemblymember) vs. Rhonda Shader (Small Businesswoman) | filing log 1220 |
| Assembly **AD-68** | 98.8% | Jessie Lopez (Councilwoman) vs. David Penaloza (Councilmember/Dad/Businessman) | filing log 1330 |
| Assembly AD-70 | 1.2% | Tri Ta (Assemblyman/Businessman) vs. Paula Swift (Small Business Owner) | filing log 1340 |
| BoE District 4 | 100% | Umberg vs. Bilodeau | above |

Notes: AD-68/CD-45/SD-34 designations are from the pre-certification filing log. The 1.2% in CD-45/AD-70 is a Garden Grove strip (precincts 14835/14247/63830) on the ZIP edge.

**County offices.** Only County Supervisor Districts 4 and 5 are up in OC in November (Tim Shaw vs. Connor Traut; Katrina Foley vs. Diane Dixon). 92868 is 100% in Supervisorial District 2 (not up), so **no county contest**. Sheriff, DA, Assessor, Auditor-Controller, Clerk-Recorder, Treasurer-Tax Collector and Board of Education seats do not appear on OC's list of contests qualified (settled in June). **No Superior Court judge contest** is on OC's list. OC Board of Education trustee areas (TA1 88.9%, TA3 11.1% of the ZIP) have no seat up.

**City of Orange** (98.8% of the ZIP; 1.2% is Garden Grove, whose Council District 6 and GGUSD TA3 are not up):
- **Mayor** (all of Orange): Dan Slater (Orange Mayor/Businessman) vs. Arianna Barrios (City Councilmember). Filing log 5181.
- **Council District 1** (about 11.1% of the ZIP): Ernie Glasgow (Contractor); Albert "AJ" Ricci (City of Orange Businessman); Brandy Romero (Orange Business Owner); Jonathan St Clair (General Manager). Filing log 5182: 5 filed, 4 qualified.
- Council District 2 (87.6% of the ZIP) is not up. District 4 (Denis Bilodeau, unopposed) and District 6 (Brendon Moeller, unopposed) are up in the city but are not in this ZIP per the layer. Bilodeau is also the BoE candidate.
- No City Clerk, Treasurer or Attorney contests in Orange (not on the OC list).

**Schools** (the only unified district is Orange USD, 99.8%):
- Trustee area shares in the ZIP: TA2 87.7%, TA6 8.4%, TA7 3.8%. Seats up are TA1, 4, 5, 7, so only **OUSD Trustee Area 7 (about 3.8%)**: Stephen Glass (Governing Board Member) vs. Jack Chang (Business Executive/Parent). Filing log 3177.
- **Rancho Santiago CCD**: shares TA5 71.3%, TA2 15.3%, TA7 13.4%. Seats up are TA2 and TA4, so **Trustee Area 2 (about 15.3%)**: John R. Hanna (Governing Board Member) vs. Steve Rocco. Filing log 3051. (TA4 Tong vs. Mendoza is not in this ZIP.)
- No elementary/high school district (Orange is unified). Garden Grove USD 0.2%: no seat up.

**Special districts:** **Municipal Water District of Orange County, Division 2** (100% of ZIP; vote 1): Larry D. Dick (Director, Division 2); Bobby Lapointe (Retail Investor); Mike Markus (Water Resource Engineer); Armando "Mando" Perez-Serrato. Filing log 6292. Anomaly: Perez-Serrato is also listed on OUSD TA4 (filing log 3174); treat as a possible log error until the certified list is checked. Orange County Water District divisions are in the ZIP (Div 2 69.4%, Div 1 30.6%) but no OCWD seat is on OC's list. Irvine Ranch, Mesa and Serrano water seats are not in this ZIP.

**Measures (all City of Orange, whole city incl. all of 92868 except the Garden Grove strip), all majority vote:**
- **Measure I**, Public Safety/Essential Services Measure: 1-cent general transactions and use (sales) tax, about $37M/yr, expires after 13 years, independent oversight committee. Threshold: simple majority (general tax; the text cites majority approval at a general election). Pdf `.../2026-09/I-ORAN%20Sales%20Tax%20-%20LAYOUT%20(1).pdf`. For: Mayor Dan Slater and others; against: former Mayors Pro Tem Fred Whitaker, Mike Alvarez.
- **Measure J**, Hotel Guest Tax Modification: raises the transient occupancy tax from 10% to 14% for hotels of 11+ rooms and applies it to online travel companies, about $3M/yr, until ended by voters. Simple majority (text cites majority). No ballot argument against was submitted.
- **Measure K**, Proposed Charter for the City of Orange: would make Orange a charter city (the "Simple Home Rule Charter"). Simple majority. For: Councilmember Kathy Tavoularis and others; against: former Mayor Carolyn Cavecche and others.
- No county measure appears on OC's list (OC has none). Other OC measures A-H, L-O are in other cities/districts and not in 92868.

## ZIP 92562 (Murrieta, central/west, incl. Bear Creek and Clinton Keith Rd), Riverside County. ZCTA pop 64,253

| Office | Share of ZIP | Finalists | Source |
|---|---|---|---|
| U.S. House **CD-40** | 100% | Young Kim (R, U.S. Representative) vs. Ken Calvert (R, U.S. Representative) | Riverside list 1153; county GIS Prop 50 layer 10; Voice of OC `https://voiceofoc.org/2025/11/prop-50-victory-reshapes-district/` |
| State Senate **SD-32** | 100% | Tiffanie Tate (D, Doctor/Educator/Author) vs. Kelly Seyarto (R, State Senator) | list 1197 |
| Assembly **AD-71** | 100% | JJ Galvez (D, Appointed Director, Silverado-Modjeska Rec & Park District) vs. Kate Sanchez (R, California Assemblywoman) | list 1280 |
| BoE District 4 | 100% | Umberg vs. Bilodeau | list 1120 |

Caution on CD: the Registrar's District Lookup (`docs.voteinfo.net/electiondatalookup`) still shows "48th Congressional District" for Murrieta City Hall with Issa listed as incumbent. That page appears to use pre-Prop 50 lines. The county's Prop 50 layer and press reports put Murrieta in CD-40. CD-48 (Desmond vs. von Wilpert) is on Riverside's list for some other part of the county.

**County offices:** Supervisor District 3 (99.6% of ZIP; 0.4% District 2) is **not up**. There is **no** Sheriff, DA, Assessor, Auditor, Treasurer or County Board of Education contest on Riverside's list. Riverside County Board of Education TA7 (Murrieta City Hall lookup) has no seat up.
- **Superior Court**: **Judge of the Superior Court, Office #10** (countywide, so on 92562): Michelle Paradise (Assistant District Attorney, County of Riverside) vs. Andrea Garcia (Deputy Public Defender, County of San Bernardino). List 1822. No other Superior Court contest is on Riverside's list.

**City of Murrieta (95.2% of the ZIP; 4.8% unincorporated):** the ZIP is split across Council District 1 (34.8%), District 3 (34.4%) and District 4 (26.0%). Only Districts 1, 2, 5 are up in 2026. District 1 has a single qualified candidate (Jon Levell, per City Clerk; `https://www.murrietaca.gov/1194/Candidate-Resources`), and **no District 1 contest appears on the county list**. Districts 2 (Barton, Holliday, McCullough) and 5 (Warren, Valdez) are outside 92562 (they would be in 92563/92564). **Net: no city council contest on 92562 ballots.** No mayor race (Murrieta's mayor is not directly elected in 2026) and no city measure.

**Schools:** Murrieta Valley USD covers 99.9% of the ZIP. Seats up are Trustee Areas 1 and 2.
- **MVUSD TA1**: Nick Pardue (Murrieta Valley Unified School Board Trustee); Guia M. Blaske (Retired Teacher); Jeremy Murphy (Father/Teacher/Coach). List 2560 (vote 1). Public-address lookup puts Clinton Keith Rd (38900, Bear Creek fire station) in TA1.
- **MVUSD TA2**: Nancy Young (Incumbent) vs. Courtney Thouvenell (Finance Professional). List 2561. A lookup at 24100 Monroe Ave is in TA2.
- Other areas seen in lookups: TA5 (Town Square, Juniper St, McAlby Ct) and TA3 (Medical Center Dr); neither is up. Trustee-area boundary data was not found, so the **share of the ZIP in TA1 and TA2 is not quantified (UNCONFIRMED)**; likely a minority each.
- **Mt. San Jacinto CCD Trustee Area 3** (Vicki Carpenter; Robert Douglas; Sergei Vinkov) is up, but every Murrieta public address sampled was in **TA5**. So probably no MSJC contest for 92562 (UNCONFIRMED).

**Special districts** (overlapping, share = population inside district boundary per county layers): Western MWD 71.0%, Eastern MWD 28.6%, Elsinore Valley MWD 31.6%, Rancho California WD 27.1% (EVMWD/RCWD overlap WMWD as sub-agencies).
- **Rancho California Water District, Director** (vote for up to 4 of 5, at-large): J.D. Harkey (Incumbent); William Woodrome (Father/Entrepreneur/Volunteer); William Plummer (Director, RCWD); Carol Lee Brady (Community Volunteer); Maryann Edwards. List 5000; the designation-to-name pairing in the PDF text is partly ambiguous. Applies only to the RCWD part (about 27%).
- **Eastern MWD Div 1** (Phil Paule; Virgil Pina; James C. Mock Sr.) and **Div 5** (David Slawson; Nathan A. Urena): the two 92562 spot checks inside EMWD were in **Division 2** (not up), so likely none (UNCONFIRMED).
- **Western MWD Div 2** (Elizabeth Sanchez-Monville; Christen Montero; Michael P. Thornton): spot checks in WMWD were **Division 3** (not up), so likely none (UNCONFIRMED).
- **Elsinore Valley MWD Div 1** (Darcy Marie Burke; Renee Griffiths): no spot check landed in EVMWD (UNCONFIRMED).

**Measures:**
- **Measure M, Murrieta Valley Unified School District**: $359,000,000 general obligation bonds, tax rate $60 per $100,000 assessed value (about $22M/yr) "without increasing current tax rates", citizen oversight. Threshold: 55% (Prop 39 school bond; district page `https://www.murrieta.k12.ca.us/p/~board/district-wide-news-murrieta-valley-unified-school-district-39231/post/measure-m-a-local-school-bond-measure`). Applies to ~99.9% of the ZIP.
- **Measure A, Riverside County Transportation Commission** (countywide): "Riverside County Traffic Relief, Pothole/Road Repair Investment Renewal" measure continuing the existing half-cent transportation sales tax, about $280M/yr, until ended by voters. Applies to all Riverside County voters, including 92562. **Vote threshold NOT confirmed** (text decoded from the notice PDF; the notice does not state it; special taxes need two-thirds unless a citizen initiative).
- No Murrieta city measure; no county-placed measure. Other Riverside measures (Beaumont B, Hemet I, Perris AA, Temecula S, Desert Recreation P) are elsewhere.

## Distinct contests, with ZIP applicability (deduplicated)

Both ZIPs: statewide constitutional offices and SPI; Supreme Court and 4th District Court of Appeal retentions; BoE District 4 (Umberg/Bilodeau); statewide propositions.
- U.S. House: CD-46 Correa/Pan (92868); CD-45 Tran/Vo (92868 1.2%); CD-40 Kim/Calvert (92562).
- State Senate: SD-34 Valencia/Shader (92868); SD-32 Tate/Seyarto (92562).
- Assembly: AD-68 Lopez/Penaloza (92868); AD-70 Ta/Swift (92868 1.2%); AD-71 Galvez/Sanchez (92562).
- County: none in either ZIP, except Riverside Superior Court Office #10 (Paradise/Garcia) and Riverside-wide Measure A (RCTC).
- City: Orange Mayor (Slater/Barrios) and Council D1 (Glasgow, Ricci, Romero, St Clair; ~11%) for 92868; nothing for 92562.
- Schools/colleges: OUSD TA7 (Glass/Chang; ~3.8%), Rancho Santiago TA2 (Hanna/Rocco; ~15%) for 92868; MVUSD TA1 (3 candidates) and TA2 (Young/Thouvenell) for 92562 (shares unquantified).
- Special districts: MWDOC Div 2 (4 candidates, 92868 100%); RCWD (5 candidates for 4 seats, ~27% of 92562).
- Measures: Orange I (sales tax), J (hotel tax), K (charter), all majority, 92868; Murrieta Valley USD Measure M (55%) and RCTC Measure A (threshold unconfirmed), 92562.

## Biggest uncertainties
1. 92562 trustee-area / water-division shares: MVUSD TA1/TA2 shares, EMWD Div 1/5, WMWD Div 2, EVMWD Div 1 and MSJC TA3 could not be mapped (no boundary layers found); spot checks suggest those are minorities or absent. Only RCWD overlap (27%) and Council districts are quantified.
2. CD-40 for Murrieta rests on the county Prop 50 GIS layer and press; the Registrar lookup page shows the old CD-48.
3. Orange filing log is pre-certification (e.g., D1 had 5 filers, 4 qualified; Perez-Serrato appears in two contests). Designations may change in the certified list.
4. Measure A (RCTC) vote threshold not stated in the notice; statewide props not read on a Riverside sample ballot.
5. Shares are population shares by 2020 block centroid for the ZCTA, not USPS ZIP or voter counts. Neither ZIP's contests were verified against a printed sample ballot (OC sample ballot lookup and Riverside voter guide were not available for programmatic use).
