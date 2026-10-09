# City of San Diego scope: contests on the Nov 3, 2026 ballot for every ZIP mainly in the City of San Diego

Researched Oct 9, 2026. Scoping only: no race content. Same method as `wave2-sd-zip-scope.md`, with two additions (a precinct-level district-code layer and the "Election = YES/NO" flag on the Registrar candidate list). Already built and skipped here: 92111, 92116, 92126, 92130, 92131, 92139.

## Method

1. **Which ZIPs.** Candidates: the 116 San Diego County ZIPs in `site/public/data/zip-districts.json`. For each ZCTA I took every 2020 Census block with population > 0 (TIGERweb `tigerWMS_Census2020` layer 10; block internal point inside the ZCTA polygon from layer 84) and tested the block point against the 2020 Census place boundary of **San Diego city (place 0666000, layer 26)**. Rule: include a ZIP if at least 50% of its population is inside the city and it has at least 1,000 residents. The block populations add up exactly to each ZCTA's population, so no blocks were dropped.
2. **Ballot types.** For each included ZIP, each block point was assigned to a polygon of the County layer `Ballot_Types_NOV2026/MapServer/0` (field `BT`) and weighted by block population. Ballot types under 0.8% of a ZIP are dropped. Contest shares below are taken over the remaining population.
3. **Contests per ballot type.**
   - (a) **District codes.** The Registrar's "Find your district" home-precinct layer `Find_Your_Dist_Map_AUG_2026_MIL1/MapServer/20` holds every district code per precinct: CONG, SEN, ASSM, SUPV, BOED, CITYO, CTYCC, SCHCO/SCHCT, SCHUO/SCHUT, SCHE/SCHET, SCHHT, HOSPZ, WMWDD, WIRRD, FIREO, CSDS, CPA and others. I assigned each block to a precinct and gave each ballot type the district codes of its blocks.
   - (b) **Which seats are up.** These come from the Registrar candidate list (R740.03, 8/28/2026), using its **"Election = YES/NO"** flag. Seats with "NO" (uncontested, so the winner is appointed in lieu of election) are not on the ballot.
   - (c) **Checked against printed ballots.** I grouped the ballot types by their combination of local contests (53 groups) and read the official sample ballot (`SB-ENG-<BT>.pdf`) for one ballot type per group. That was 40 new downloads, which is the cap, plus 13 ballot types already downloaded for earlier waves (228, 233, 315, 329, 331, 332, 469, 534, 536, 537, 589, 602, 744). Text came from `pdftotext`. **On every one of the 53 ballots read, the printed contests matched the GIS prediction exactly:** CD, SD and AD, every local contest, and the presence or absence of Measure M. Three small groups were not read; see "Uncertain" below.
4. Candidates and ballot designations are as printed on the sample ballots and agree with the candidate list. Measure thresholds come from the printed measure pages.

"CONFIRMED" below means the contest is printed on at least one official sample ballot that I read for that ZIP. "GIS only" means it applies only to ballot types whose ballots I did not read. In those cases the same local-contest combination was confirmed on another ballot type's sample ballot, except for the three unread groups noted under "Uncertain".

## (a) Included ZIPs (32)

| ZIP | Label | 2020 pop | In City of SD |
|---|---|---|---|
| 92014 | Del Mar Heights / Torrey Hills (plus the City of Del Mar) | 13,203 | 55.7% |
| 92037 | La Jolla | 41,260 | 100% |
| 92092 | UC San Diego (campus) | 5,251 | 100% |
| 92093 | UC San Diego (campus) | 5,076 | 100% |
| 92101 | Downtown / Little Italy / East Village | 47,505 | 100% |
| 92102 | Golden Hill / Sherman Heights / Stockton | 39,783 | 100% |
| 92103 | Hillcrest / Mission Hills / Bankers Hill | 33,311 | 100% |
| 92104 | North Park / South Park | 44,265 | 100% |
| 92105 | City Heights | 66,579 | 100% |
| 92106 | Point Loma | 20,214 | 100% |
| 92107 | Ocean Beach | 28,684 | 100% |
| 92108 | Mission Valley | 24,266 | 100% |
| 92109 | Pacific Beach / Mission Beach | 44,671 | 100% |
| 92110 | Bay Park / Morena / Old Town | 31,048 | 100% |
| 92113 | Logan Heights / Barrio Logan / Southcrest | 50,457 | 100% |
| 92114 | Encanto / Skyline / Lomita / Bay Terraces | 66,248 | 100% |
| 92115 | College Area / Rolando / El Cerrito | 64,251 | 100% |
| 92117 | Clairemont | 51,505 | 100% |
| 92119 | San Carlos | 24,298 | 100% |
| 92120 | Del Cerro / Allied Gardens / Grantville | 30,768 | 100% |
| 92121 | Sorrento Valley / Sorrento Mesa | 4,658 | 100% |
| 92122 | University City | 45,646 | 100% |
| 92123 | Serra Mesa / Kearny Mesa | 30,937 | 100% |
| 92124 | Tierrasanta | 30,530 | 100% |
| 92127 | Rancho Bernardo west / Black Mountain Ranch / Santaluz (plus unincorporated 4S Ranch) | 52,274 | 60.2% |
| 92128 | Rancho Bernardo / Carmel Mountain Ranch / Sabre Springs | 49,083 | 100% |
| 92129 | Rancho Peñasquitos / Torrey Highlands | 52,415 | 100% |
| 92136 | Naval Base San Diego (32nd Street) | 7,014 | 100% |
| 92140 | MCRD / Loma Portal | 2,183 | 100% |
| 92145 | MCAS Miramar | 6,057 | 100% |
| 92154 | Otay Mesa / Nestor / Otay Mesa West | 84,027 | 95.5% |
| 92173 | San Ysidro | 29,703 | 100% |

These meet the numeric rule but are mostly group quarters (dorms, barracks): **92092, 92093** (UCSD), **92136, 92140, 92145** (military). Drop them if "residential" should exclude group quarters. **92014** is borderline: 55.7% of its population is the City-of-SD part (BTs 228/230/233), 29.8% is the City of Del Mar, 6.8% is Solana Beach and 7.6% is unincorporated (Rancho Santa Fe edge). About 40% of **92127** is unincorporated (4S Ranch / RSF edge).

**Excluded (San Diego County ZIPs with any City-of-SD population, or SD-area ZIPs that might be expected):**
- 92118 (Coronado): 10.9% in the city. Below 50%.
- 92134 (Naval Medical Center): 100% in the city but only 396 residents.
- 92147: 256 residents. 92161 (VA hospital): 66. 92182 (SDSU): 27. All 100% city, all under 1,000.
- 92135 (NAS North Island, 1,610), 92155 (210), 92179 (Otay Mesa unincorporated / Donovan, 3,824), 92096 (35): 0% in the city. 92132 has no 2020 population.
- Trace overlaps (under 1% in the city): 91911, 92025, 92027, 92067, 92071, 92075.
- 92111, 92116, 92126, 92130, 92131 and 92139 are 100% city but already built.

## Seats that are up but print on no ballot ("Election = NO", appointed in lieu)

These districts overlap the included ZIPs, but per the candidate list their seats are not on the ballot. The ballots I read agree: for example, BT 228 has no MiraCosta race, BT 703 has no Sweetwater or South Bay Union race, and BT 281 has no Olivenhain, RSF Fire or RSF CSD race.

MiraCosta CCD TA 1 and 2; Sweetwater UHSD TA 3 and 5; South Bay Union SD TA 2 and 4; Lemon Grove SD (regular and short term); Solana Beach SD TA 3; Olivenhain MWD Div 1 and 4; Santa Fe Irrigation; Rancho Santa Fe Fire; Rancho Santa Fe CSD; San Dieguito Community Planning Group. Several other districts touch these ZIPs but have no seat up in their division at all: Otay Water Div 2, Helix Water Div 3, South Bay Water Div 2, Grossmont UHSD TA 1, Grossmont Healthcare Zone 3, Palomar Health Div 6, and Poway USD TA A and E. **No City of San Diego measure appears on any ballot read.** The only City of SD offices up are Council Districts 2, 4, 6 and 8.

## (b) Per-ZIP contests

Shares are population shares of the ZIP (2020 blocks, ballot types of at least 0.8%). Statewide offices, Supreme Court retention, SPI and statewide props are on every ballot and are not repeated. The countywide line covers the items `sd()` adds automatically.

### 92014 — Del Mar Heights / Torrey Hills (plus the City of Del Mar)

City of San Diego share: 55.7%. Ballot types (≥0.8%, * = official sample ballot read): 214* (29.8%), 233* (28.8%), 230* (22.2%), 239* (6.6%), 237* (5.4%), 228* (4.7%), 236 (1.4%), 238 (1.0%); under 0.8%: 0.1%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-49 | `us-rep-ca49` | 100% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 100% | existing, CONFIRMED |
| Assembly 77 | `assembly-ad77` | 100% | existing, CONFIRMED |
| County Board of Education, 5th District | `sd-county-board-ed-d5` | 100% | existing, CONFIRMED |
| San Dieguito Union HSD Trustee Area 3 | `sduhsd-trustee-area-3` | 65% | NEW, CONFIRMED |
| Del Mar Union SD Board (vote 3) | `del-mar-usd-board` | 81% | existing, CONFIRMED |
| Del Mar City Council (vote 2) | `del-mar-city-council` | 30% | NEW, CONFIRMED |
| Solana Beach Council District 4 | `solana-beach-council-d4` | 5% | NEW, CONFIRMED |
| Solana Beach Measure C (TOT) | `solana-beach-measure-c` | 7% | NEW, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92037 — La Jolla

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 308* (86.8%), 462* (11.5%), 244 (1.7%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-49 | `us-rep-ca49` | 2% | existing, GIS only |
| U.S. House CA-50 | `us-rep-ca50` | 98% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 88% | existing, CONFIRMED |
| State Senate 40 | `senate-sd40` | 12% | existing, CONFIRMED |
| Assembly 77 | `assembly-ad77` | 100% | existing, CONFIRMED |
| SD Community College District A | `sdccd-district-a` | 100% | existing, CONFIRMED |
| SDUSD Board District C | `sdusd-district-c` | 100% | NEW, CONFIRMED |
| SD City Council District 6 | `sd-city-council-d6` | 12% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92092 — UC San Diego (campus)

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 244 (100.0%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-49 | `us-rep-ca49` | 100% | existing, GIS only |
| State Senate 38 | `senate-sd38` | 100% | existing, GIS only |
| Assembly 77 | `assembly-ad77` | 100% | existing, GIS only |
| SD Community College District A | `sdccd-district-a` | 100% | existing, GIS only |
| SDUSD Board District C | `sdusd-district-c` | 100% | NEW, GIS only |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, GIS only |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92093 — UC San Diego (campus)

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 244 (100.0%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-49 | `us-rep-ca49` | 100% | existing, GIS only |
| State Senate 38 | `senate-sd38` | 100% | existing, GIS only |
| Assembly 77 | `assembly-ad77` | 100% | existing, GIS only |
| SD Community College District A | `sdccd-district-a` | 100% | existing, GIS only |
| SDUSD Board District C | `sdusd-district-c` | 100% | NEW, GIS only |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, GIS only |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92101 — Downtown / Little Italy / East Village

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 317* (55.8%), 324 (23.4%), 536* (10.2%), 316* (8.3%), 323 (2.0%); under 0.8%: 0.3%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 90% | existing, CONFIRMED |
| U.S. House CA-51 | `us-rep-ca51` | 10% | existing, CONFIRMED |
| Assembly 77 | `assembly-ad77` | 90% | existing, CONFIRMED |
| Assembly 78 | `assembly-ad78` | 10% | existing, CONFIRMED |
| SD Community College District C | `sdccd-district-c` | 21% | existing, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 10% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92102 — Golden Hill / Sherman Heights / Stockton

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 476 (32.7%), 744* (19.5%), 706* (18.6%), 659 (13.0%), 710 (8.3%), 740* (7.6%); under 0.8%: 0.3%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-51 | `us-rep-ca51` | 33% | existing, GIS only |
| U.S. House CA-52 | `us-rep-ca52` | 67% | existing, CONFIRMED |
| State Senate 18 | `senate-sd18` | 73% | existing, CONFIRMED |
| Assembly 78 | `assembly-ad78` | 33% | existing, GIS only |
| Assembly 79 | `assembly-ad79` | 40% | existing, CONFIRMED |
| Assembly 80 | `assembly-ad80` | 27% | existing, CONFIRMED |
| County Board of Education, 3rd District | `sd-county-board-ed-d3` | 8% | existing, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 27% | existing, CONFIRMED |
| SD City Council District 4 | `sd-city-council-d4` | 27% | existing, CONFIRMED |
| SD City Council District 8 | `sd-city-council-d8` | 19% | NEW, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92103 — Hillcrest / Mission Hills / Bankers Hill

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 536* (99.9%); under 0.8%: 0.1%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-51 | `us-rep-ca51` | 100% | existing, CONFIRMED |
| Assembly 78 | `assembly-ad78` | 100% | existing, CONFIRMED |
| SD Community College District C | `sdccd-district-c` | 100% | existing, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 100% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92104 — North Park / South Park

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 538* (32.4%), 536* (32.0%), 742 (11.3%), 477 (8.0%), 741* (7.9%), 601 (2.9%), 476 (2.8%), 589* (2.7%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-51 | `us-rep-ca51` | 81% | existing, CONFIRMED |
| U.S. House CA-52 | `us-rep-ca52` | 19% | existing, CONFIRMED |
| State Senate 18 | `senate-sd18` | 11% | existing, GIS only |
| Assembly 78 | `assembly-ad78` | 75% | existing, CONFIRMED |
| Assembly 79 | `assembly-ad79` | 25% | existing, CONFIRMED |
| County Board of Education, 3rd District | `sd-county-board-ed-d3` | 22% | existing, CONFIRMED |
| SD Community College District C | `sdccd-district-c` | 32% | existing, CONFIRMED |
| SDUSD Board District B | `sdusd-district-b` | 14% | existing, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 97% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92105 — City Heights

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 741* (67.5%), 740* (10.6%), 586 (10.3%), 663 (4.3%), 588 (3.7%), 589* (2.4%), 742 (1.3%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-51 | `us-rep-ca51` | 16% | existing, CONFIRMED |
| U.S. House CA-52 | `us-rep-ca52` | 84% | existing, CONFIRMED |
| State Senate 18 | `senate-sd18` | 4% | existing, GIS only |
| Assembly 79 | `assembly-ad79` | 100% | existing, CONFIRMED |
| County Board of Education, 3rd District | `sd-county-board-ed-d3` | 100% | existing, CONFIRMED |
| SDUSD Board District B | `sdusd-district-b` | 4% | existing, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 100% | existing, CONFIRMED |
| SD City Council District 4 | `sd-city-council-d4` | 21% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92106 — Point Loma

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 321* (100.0%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 100% | existing, CONFIRMED |
| Assembly 77 | `assembly-ad77` | 100% | existing, CONFIRMED |
| SD Community College District C | `sdccd-district-c` | 100% | existing, CONFIRMED |
| SDUSD Board District C | `sdusd-district-c` | 100% | NEW, CONFIRMED |
| SD City Council District 2 | `sd-city-council-d2` | 100% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92107 — Ocean Beach

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 321* (100.0%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 100% | existing, CONFIRMED |
| Assembly 77 | `assembly-ad77` | 100% | existing, CONFIRMED |
| SD Community College District C | `sdccd-district-c` | 100% | existing, CONFIRMED |
| SDUSD Board District C | `sdusd-district-c` | 100% | NEW, CONFIRMED |
| SD City Council District 2 | `sd-city-council-d2` | 100% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92108 — Mission Valley

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 537* (26.1%), 530 (20.0%), 539 (14.4%), 540* (14.4%), 541 (11.4%), 332* (6.2%), 314 (4.3%), 485 (1.5%), 534* (1.3%); under 0.8%: 0.4%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 11% | existing, CONFIRMED |
| U.S. House CA-51 | `us-rep-ca51` | 89% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 6% | existing, GIS only |
| Assembly 78 | `assembly-ad78` | 100% | existing, CONFIRMED |
| County Board of Education, 3rd District | `sd-county-board-ed-d3` | 21% | existing, CONFIRMED |
| SD Community College District C | `sdccd-district-c` | 64% | existing, CONFIRMED |
| SDUSD Board District B | `sdusd-district-b` | 88% | existing, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 100% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92109 — Pacific Beach / Mission Beach

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 308* (90.3%), 310 (8.9%); under 0.8%: 0.8%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 100% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 100% | existing, CONFIRMED |
| Assembly 77 | `assembly-ad77` | 100% | existing, CONFIRMED |
| SD Community College District A | `sdccd-district-a` | 91% | existing, CONFIRMED |
| SD Community College District C | `sdccd-district-c` | 9% | existing, GIS only |
| SDUSD Board District C | `sdusd-district-c` | 100% | NEW, CONFIRMED |
| SD City Council District 2 | `sd-city-council-d2` | 9% | existing, GIS only |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92110 — Bay Park / Morena / Old Town

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 321* (32.9%), 315* (29.1%), 313* (24.2%), 536* (4.0%), 314 (3.8%), 535 (2.6%), 320* (2.3%); under 0.8%: 1.1%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 93% | existing, CONFIRMED |
| U.S. House CA-51 | `us-rep-ca51` | 7% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 58% | existing, CONFIRMED |
| Assembly 77 | `assembly-ad77` | 36% | existing, CONFIRMED |
| Assembly 78 | `assembly-ad78` | 64% | existing, CONFIRMED |
| SD Community College District C | `sdccd-district-c` | 100% | existing, CONFIRMED |
| SDUSD Board District C | `sdusd-district-c` | 33% | NEW, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 64% | existing, CONFIRMED |
| SD City Council District 2 | `sd-city-council-d2` | 63% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92113 — Logan Heights / Barrio Logan / Southcrest

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 706* (34.1%), 657* (24.4%), 658 (19.7%), 744* (11.6%), 659 (5.7%), 317* (4.6%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 5% | existing, CONFIRMED |
| U.S. House CA-52 | `us-rep-ca52` | 95% | existing, CONFIRMED |
| State Senate 18 | `senate-sd18` | 84% | existing, CONFIRMED |
| Assembly 77 | `assembly-ad77` | 5% | existing, CONFIRMED |
| Assembly 79 | `assembly-ad79` | 61% | existing, CONFIRMED |
| Assembly 80 | `assembly-ad80` | 34% | existing, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 12% | existing, CONFIRMED |
| SD City Council District 4 | `sd-city-council-d4` | 36% | existing, CONFIRMED |
| SD City Council District 8 | `sd-city-council-d8` | 54% | NEW, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92114 — Encanto / Skyline / Lomita / Bay Terraces

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 602* (38.6%), 744* (34.8%), 740* (21.0%), 585* (2.8%), 584 (1.6%), 739 (0.9%); under 0.8%: 0.3%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-51 | `us-rep-ca51` | 43% | existing, CONFIRMED |
| U.S. House CA-52 | `us-rep-ca52` | 57% | existing, CONFIRMED |
| Assembly 79 | `assembly-ad79` | 100% | existing, CONFIRMED |
| County Board of Education, 3rd District | `sd-county-board-ed-d3` | 26% | existing, CONFIRMED |
| Grossmont-Cuyamaca CCD Trustee Area 5 | `gcccd-area-5` | 5% | NEW, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 100% | existing, CONFIRMED |
| SD City Council District 4 | `sd-city-council-d4` | 100% | existing, CONFIRMED |
| Grossmont Healthcare District Zone 2 | `grossmont-healthcare-zone-2` | 4% | NEW, CONFIRMED |
| Grossmont-Cuyamaca CCD Measure G (bond) | `gcccd-measure-g` | 5% | NEW, CONFIRMED |
| La Mesa-Spring Valley SD bond measure (letter not read) | `lmsvsd-bond-measure` | 2% | NEW, GIS only |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 95% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92115 — College Area / Rolando / El Cerrito

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 588 (30.7%), 534* (24.5%), 589* (22.7%), 741* (8.5%), 742 (5.8%), 583 (3.6%), 533 (2.1%), 586 (1.8%); under 0.8%: 0.3%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-51 | `us-rep-ca51` | 86% | existing, CONFIRMED |
| U.S. House CA-52 | `us-rep-ca52` | 14% | existing, CONFIRMED |
| Assembly 78 | `assembly-ad78` | 27% | existing, CONFIRMED |
| Assembly 79 | `assembly-ad79` | 73% | existing, CONFIRMED |
| County Board of Education, 3rd District | `sd-county-board-ed-d3` | 100% | existing, CONFIRMED |
| Grossmont-Cuyamaca CCD Trustee Area 5 | `gcccd-area-5` | 4% | NEW, GIS only |
| SDUSD Board District B | `sdusd-district-b` | 53% | existing, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 100% | existing, CONFIRMED |
| SD City Council District 4 | `sd-city-council-d4` | 5% | existing, GIS only |
| Grossmont-Cuyamaca CCD Measure G (bond) | `gcccd-measure-g` | 4% | NEW, GIS only |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 96% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92117 — Clairemont

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 329* (62.3%), 311 (25.6%), 312* (10.3%), 331* (1.3%); under 0.8%: 0.5%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 100% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 36% | existing, CONFIRMED |
| Assembly 78 | `assembly-ad78` | 100% | existing, CONFIRMED |
| SD Community College District A | `sdccd-district-a` | 99% | existing, CONFIRMED |
| SDUSD Board District C | `sdusd-district-c` | 10% | NEW, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 100% | existing, CONFIRMED |
| SD City Council District 2 | `sd-city-council-d2` | 99% | existing, CONFIRMED |
| SD City Council District 6 | `sd-city-council-d6` | 1% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92119 — San Carlos

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 523* (100.0%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-51 | `us-rep-ca51` | 100% | existing, CONFIRMED |
| Assembly 78 | `assembly-ad78` | 100% | existing, CONFIRMED |
| County Board of Education, 3rd District | `sd-county-board-ed-d3` | 100% | existing, CONFIRMED |
| SDUSD Board District B | `sdusd-district-b` | 100% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92120 — Del Cerro / Allied Gardens / Grantville

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 523* (94.4%), 534* (5.6%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-51 | `us-rep-ca51` | 100% | existing, CONFIRMED |
| Assembly 78 | `assembly-ad78` | 100% | existing, CONFIRMED |
| County Board of Education, 3rd District | `sd-county-board-ed-d3` | 100% | existing, CONFIRMED |
| SDUSD Board District B | `sdusd-district-b` | 100% | existing, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 6% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92121 — Sorrento Valley / Sorrento Mesa

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 469* (46.3%), 462* (39.1%), 301 (12.6%), 461 (1.4%); under 0.8%: 0.6%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-49 | `us-rep-ca49` | 13% | existing, GIS only |
| U.S. House CA-50 | `us-rep-ca50` | 87% | existing, CONFIRMED |
| State Senate 40 | `senate-sd40` | 100% | existing, CONFIRMED |
| Assembly 77 | `assembly-ad77` | 41% | existing, CONFIRMED |
| Assembly 78 | `assembly-ad78` | 59% | existing, CONFIRMED |
| SD Community College District A | `sdccd-district-a` | 41% | existing, CONFIRMED |
| SDUSD Board District C | `sdusd-district-c` | 41% | NEW, CONFIRMED |
| SD City Council District 6 | `sd-city-council-d6` | 99% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92122 — University City

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 462* (100.0%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 100% | existing, CONFIRMED |
| State Senate 40 | `senate-sd40` | 100% | existing, CONFIRMED |
| Assembly 77 | `assembly-ad77` | 100% | existing, CONFIRMED |
| SD Community College District A | `sdccd-district-a` | 100% | existing, CONFIRMED |
| SDUSD Board District C | `sdusd-district-c` | 100% | NEW, CONFIRMED |
| SD City Council District 6 | `sd-city-council-d6` | 100% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92123 — Serra Mesa / Kearny Mesa

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 529* (69.4%), 539 (15.3%), 326* (12.9%), 540* (2.1%); under 0.8%: 0.3%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 13% | existing, CONFIRMED |
| U.S. House CA-51 | `us-rep-ca51` | 87% | existing, CONFIRMED |
| Assembly 78 | `assembly-ad78` | 100% | existing, CONFIRMED |
| SD Community College District C | `sdccd-district-c` | 15% | existing, GIS only |
| SDUSD Board District B | `sdusd-district-b` | 100% | existing, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 17% | existing, CONFIRMED |
| SD City Council District 6 | `sd-city-council-d6` | 13% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92124 — Tierrasanta

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 523* (100.0%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-51 | `us-rep-ca51` | 100% | existing, CONFIRMED |
| Assembly 78 | `assembly-ad78` | 100% | existing, CONFIRMED |
| County Board of Education, 3rd District | `sd-county-board-ed-d3` | 100% | existing, CONFIRMED |
| SDUSD Board District B | `sdusd-district-b` | 100% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92127 — Rancho Bernardo west / Black Mountain Ranch / Santaluz (plus unincorporated 4S Ranch)

City of San Diego share: 60.2%. Ballot types (≥0.8%, * = official sample ballot read): 275* (30.0%), 295* (20.5%), 277 (17.2%), 279 (14.8%), 290* (7.3%), 281* (2.9%), 278 (2.5%), 283 (2.4%), 292* (2.3%); under 0.8%: 0.1%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-49 | `us-rep-ca49` | 100% | existing, CONFIRMED |
| State Senate 40 | `senate-sd40` | 100% | existing, CONFIRMED |
| Assembly 76 | `assembly-ad76` | 100% | existing, CONFIRMED |
| County Board of Education, 5th District | `sd-county-board-ed-d5` | 2% | existing, GIS only |
| Palomar CCD Trustee Area 1 | `palomar-ccd-area-1` | 98% | NEW, CONFIRMED |
| Poway Unified Trustee Area C | `poway-usd-area-c` | 50% | NEW, CONFIRMED |
| Palomar Health Division 3 | `palomar-health-div-3` | 3% | NEW, CONFIRMED |
| Palomar Health Division 7 | `palomar-health-div-7` | 38% | NEW, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92128 — Rancho Bernardo / Carmel Mountain Ranch / Sabre Springs

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 412* (44.8%), 410* (22.8%), 354 (11.2%), 413* (10.5%), 352 (8.8%), 353* (1.9%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 100% | existing, CONFIRMED |
| State Senate 40 | `senate-sd40` | 100% | existing, CONFIRMED |
| Assembly 75 | `assembly-ad75` | 22% | existing, CONFIRMED |
| Assembly 76 | `assembly-ad76` | 78% | existing, CONFIRMED |
| Palomar CCD Trustee Area 1 | `palomar-ccd-area-1` | 45% | NEW, CONFIRMED |
| Poway Unified Trustee Area B | `poway-usd-area-b` | 45% | NEW, CONFIRMED |
| Poway Unified Trustee Area C | `poway-usd-area-c` | 10% | NEW, CONFIRMED |
| Poway Unified Trustee Area D | `poway-usd-area-d` | 32% | NEW, CONFIRMED |
| Palomar Health Division 5 | `palomar-health-div-5` | 89% | NEW, CONFIRMED |
| Palomar Health Division 7 | `palomar-health-div-7` | 11% | NEW, GIS only |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92129 — Rancho Peñasquitos / Torrey Highlands

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 294* (34.7%), 292* (13.2%), 293* (12.3%), 290* (11.9%), 189 (5.7%), 289* (5.1%), 291 (4.6%), 188 (4.5%), 470* (4.2%), 190 (2.7%); under 0.8%: 1.1%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-49 | `us-rep-ca49` | 96% | existing, CONFIRMED |
| U.S. House CA-50 | `us-rep-ca50` | 4% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 13% | existing, GIS only |
| State Senate 40 | `senate-sd40` | 87% | existing, CONFIRMED |
| Assembly 76 | `assembly-ad76` | 96% | existing, CONFIRMED |
| Assembly 78 | `assembly-ad78` | 4% | existing, CONFIRMED |
| Palomar CCD Trustee Area 1 | `palomar-ccd-area-1` | 86% | NEW, CONFIRMED |
| Poway Unified Trustee Area C | `poway-usd-area-c` | 18% | NEW, CONFIRMED |
| Poway Unified Trustee Area D | `poway-usd-area-d` | 50% | NEW, CONFIRMED |
| SD City Council District 6 | `sd-city-council-d6` | 4% | existing, CONFIRMED |
| Palomar Health Division 7 | `palomar-health-div-7` | 55% | NEW, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 4% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92136 — Naval Base San Diego (32nd Street)

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 706* (100.0%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-52 | `us-rep-ca52` | 100% | existing, CONFIRMED |
| State Senate 18 | `senate-sd18` | 100% | existing, CONFIRMED |
| Assembly 80 | `assembly-ad80` | 100% | existing, CONFIRMED |
| SD City Council District 8 | `sd-city-council-d8` | 100% | NEW, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92140 — MCRD / Loma Portal

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 321* (100.0%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 100% | existing, CONFIRMED |
| Assembly 77 | `assembly-ad77` | 100% | existing, CONFIRMED |
| SD Community College District C | `sdccd-district-c` | 100% | existing, CONFIRMED |
| SDUSD Board District C | `sdusd-district-c` | 100% | NEW, CONFIRMED |
| SD City Council District 2 | `sd-city-council-d2` | 100% | existing, CONFIRMED |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92145 — MCAS Miramar

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 465 (100.0%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 100% | existing, GIS only |
| State Senate 40 | `senate-sd40` | 100% | existing, GIS only |
| Assembly 78 | `assembly-ad78` | 100% | existing, GIS only |
| SD City Council District 6 | `sd-city-council-d6` | 100% | existing, GIS only |
| SDUSD Measure M (bond) | `sdusd-measure-m` | 100% | existing, GIS only |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92154 — Otay Mesa / Nestor / Otay Mesa West

City of San Diego share: 95.5%. Ballot types (≥0.8%, * = official sample ballot read): 703* (51.3%), 707* (20.2%), 705* (13.1%), 704* (7.7%), 636 (3.4%), 708* (3.3%), 635 (1.0%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-52 | `us-rep-ca52` | 100% | existing, CONFIRMED |
| State Senate 18 | `senate-sd18` | 100% | existing, CONFIRMED |
| Assembly 75 | `assembly-ad75` | 4% | existing, GIS only |
| Assembly 80 | `assembly-ad80` | 96% | existing, CONFIRMED |
| Southwestern CCD Trustee Area 4 | `swc-trustee-area-4` | 25% | existing, CONFIRMED |
| Chula Vista Elementary Seat 1 | `cvesd-seat-1` | 29% | existing, CONFIRMED |
| Chula Vista Elementary Seat 3 | `cvesd-seat-3` | 29% | existing, CONFIRMED |
| Chula Vista Elementary Seat 5 | `cvesd-seat-5` | 29% | existing, CONFIRMED |
| San Ysidro SD Board (vote 3) | `san-ysidro-sd-board` | 20% | NEW, CONFIRMED |
| SD City Council District 8 | `sd-city-council-d8` | 96% | NEW, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

### 92173 — San Ysidro

City of San Diego share: 100.0%. Ballot types (≥0.8%, * = official sample ballot read): 708* (75.5%), 703* (24.5%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-52 | `us-rep-ca52` | 100% | existing, CONFIRMED |
| State Senate 18 | `senate-sd18` | 100% | existing, CONFIRMED |
| Assembly 80 | `assembly-ad80` | 100% | existing, CONFIRMED |
| San Ysidro SD Board (vote 3) | `san-ysidro-sd-board` | 76% | NEW, CONFIRMED |
| SD City Council District 8 | `sd-city-council-d8` | 100% | NEW, CONFIRMED |
| Countywide (via `sd()`): BOE-4, retention, Assessor, Treasurer-Tax Collector, County Measures A and B | (auto) | 100% | existing, CONFIRMED |

## (c) NEW contests needed (deduplicated)

Vote for 1 unless noted. Candidates are in printed ballot order (the order rotates by ballot type), with the printed ballot designation. ZIP shares are from section (b).

| # | Proposed id | Official contest title (as printed) | Candidates (ballot designation) | Vote for | ZIPs (share) | Status |
|---|---|---|---|---|---|---|
| 1 | `sd-city-council-d8` | City of San Diego, Member, City Council, District No. 8 | Antonio Martinez (Governing Board Member, San Ysidro School District); Gerardo Ramirez (Chief of Staff, District 8) | 1 | 92173 (100%), 92136 (100%), 92154 (96%), 92113 (54%), 92102 (19%) | CONFIRMED (BT 703, 704, 705, 706, 707, 708) |
| 2 | `sdusd-district-c` | San Diego Unified School District, Member, Board of Education, District C | Hayden Gore (Classroom Teacher/Father). **Unopposed but printed.** | 1 | 92037, 92092, 92093, 92106, 92107, 92109, 92122, 92140 (100%); 92121 (41%); 92110 (33%); 92117 (10%) | CONFIRMED (BT 308, 312, 321, 462) |
| 3 | `palomar-ccd-area-1` | Palomar Community College District, Governing Board Member, Trustee Area 1 | Frank Xu (Parent/Non-profit Executive); Anthony Wiley (Parent/Retired Engineer); Judy Patacsil (Governing Board Member, Palomar Community College) | 1 | 92127 (98%), 92129 (86%), 92128 (45%) | CONFIRMED (BT 275, 281, 290, 292-295, 353, 410) |
| 4 | `poway-usd-area-b` | Poway Unified School District, Governing Board Member, Trustee Area B | Brett Davis (Father/Business Owner); Kym Sosnowski (Education Advocate/Parent) | 1 | 92128 (45%) | CONFIRMED (BT 412) |
| 5 | `poway-usd-area-c` | Poway Unified School District, Governing Board Member, Trustee Area C | Heather Plotzke (Governing Board Member, Poway Unified School District); Jason Bennett (Parent/Business Owner) | 1 | 92127 (50%), 92129 (18%), 92128 (10%) | CONFIRMED (BT 275, 292, 413) |
| 6 | `poway-usd-area-d` | Poway Unified School District, Governing Board Member, Trustee Area D | Michelle O'Connor-Ratcliff (Governing Board Member, Poway Unified School District); Daniela Darling (Parent/Children Therapist); Jennifer Dahlquist Ramirez (Educational Consultant) | 1 | 92129 (50%), 92128 (32%) | CONFIRMED (BT 293, 294, 410) |
| 7 | `palomar-health-div-5` | Palomar Health District, Member, Board of Directors, Division No. 5 | Amanda Christensen (Registered Nurse, Scripps Health); John Clark (Incumbent) | 1 | 92128 (89%) | CONFIRMED (BT 353, 410, 412, 413) |
| 8 | `palomar-health-div-7` | Palomar Health District, Member, Board of Directors, Division No. 7 | Ian Butler (Critical Care Physician, Tri-City Medical Center); Linda C Greer (Registered Nurse) | 1 | 92129 (55%), 92127 (38%), 92128 (11%); also a 92131 sliver (~15%, wave 2) | CONFIRMED (BT 292, 294, 295, 470) |
| 9 | `palomar-health-div-3` | Palomar Health District, Member, Board of Directors, Division No. 3 | Laurie Edwards-Tate (Incumbent); Sarah Telahun (Registered Nurse, Kaiser Permanente) | 1 | 92127 (3%, the unincorporated part); also 92009/92026 slivers from wave 2 | CONFIRMED (BT 281) |
| 10 | `sduhsd-trustee-area-3` | San Dieguito Union High School District, Governing Board Member, Trustee Area No. 3 | Helen Doyle (Community Volunteer); Summer Boger (Small Business Owner) | 1 | 92014 (65%) | CONFIRMED (BT 214, 230, 237, 239) |
| 11 | `del-mar-city-council` | City of Del Mar, Member, City Council | Meghan O. Spieker (Planning Commissioner); Jeff Sturgis (Biotech Executive); Terry Gaasterland (City Councilmember/Professor); Jas Grewal (Planning Commissioner/Banker) | **2** | 92014 (30%, the City-of-Del-Mar part) | CONFIRMED (BT 214) |
| 12 | `san-ysidro-sd-board` | San Ysidro School District, Governing Board Member | Roxane Palestino (Parent Community Advocate); Brandon J Plascencia (no designation); Miguel "Mike" Ochoa (Retired Business Owner); Yvette Olea (Retired CSEA Employee); Martín Arias (Appointed Governing Board Member, San Ysidro School District); Irene Lopez (San Ysidro School District Board Member); Jose Manuel Dircio (Mechanical Engineer); Zenaida Rosario (Governing Board Member San Ysidro School District); Monica Yrineo (Retired School Employee); Olga Lydia Espinoza (Mother/Education Advocate); Lidya Morales (Parent/Banquet Server). Cristian Fuentes Hernandez withdrew and is not printed. | **3** | 92173 (76%), 92154 (20%) | CONFIRMED (BT 705, 708) |
| 13 | `solana-beach-council-d4` | City of Solana Beach, Member, City Council, District No. 4 | Jenna Wolfe-Dellamano (Business Owner). Unopposed but printed. | 1 | 92014 (5%) | CONFIRMED (BT 237) |
| 14 | `gcccd-area-5` | Grossmont-Cuyamaca Community College District, Governing Board Member, Trustee Area 5 | Rosangela Cribbs (Homemaker); Mary Gwin (Community College Professor) | 1 | 92114 (5%), 92115 (4%) | CONFIRMED (BT 585) |
| 15 | `grossmont-healthcare-zone-2` | Grossmont Healthcare District, Member, Board of Directors, Zone No. 2 | Randy Lenac (Grossmont Healthcare President); Jennifer Morrissey (Commissioner/Nonprofit Executive) | 1 | 92114 (4%) | CONFIRMED (BT 585) |

Existing ids reused in new ZIPs: `us-rep-ca49..52`, `senate-sd18/38/40`, `assembly-ad75..80`, `sd-supervisor-d4`, `sd-county-board-ed-d3`, `sd-county-board-ed-d5`, `sdccd-district-a`, `sdccd-district-c`, `sdusd-district-b`, `sd-city-council-d2/d4/d6`, `del-mar-usd-board`, `sdusd-measure-m`, plus `cvesd-seat-1`, `cvesd-seat-3`, `cvesd-seat-5` (92154, 29%; CONFIRMED on BT 704, 707) and `swc-trustee-area-4` (92154, 25%; CONFIRMED on BT 704, 705). This wave needs no supervisor district other than D4.

### New local measures

| Proposed id | Official title / question (abridged) | Threshold | ZIPs | Status |
|---|---|---|---|---|
| `solana-beach-measure-c` | **Measure C, City of Solana Beach.** "To provide general city services such as keeping beaches, parks, trails, and restrooms safe, clean and well-maintained; ... shall City of Solana Beach's measure updating the 20-year-old transient occupancy tax ... and increasing the rate by 1% be adopted, providing approximately $250,000 annually until ended by voters ...?" | Simple majority (50%+1) | 92014 (7%: BT 237 read; BT 236 inferred because the measure is citywide) | CONFIRMED (BT 237) |
| `gcccd-measure-g` | **Measure G, Grossmont-Cuyamaca Community College District Fire Safety, Job Training, College Affordability, No Tax Rate Increase.** $624 million in bonds, levies below $25 per $100,000 assessed value (about $45M a year). | 55% | 92114 (5%), 92115 (4%) | CONFIRMED (BT 585) |
| `lmsvsd-bond-measure` | **La Mesa-Spring Valley School District Classroom Repair & Upgrade Extension Measure.** $131,000,000 in bonds, $22 per $100,000 (Registrar measures notice). **Letter not read** (BT 584 not downloaded). | 55% (school bond; not read on a ballot) | 92114 (about 2%) | GIS only |

`sdusd-measure-m` (existing) covers every SDUSD-area ballot. The ZIPs and slivers outside SDUSD do not get M: 92014; 92127; 92128; 92129 except BT 470; 92154; 92173; and the Grossmont/Lemon Grove fringe of 92114/92115 (BT 583, 584, 585, 739).

## Uncertain / caveats

1. **Unread ballot-type groups (GIS only):**
   - BT 635 (CVESD seats + SWC TA4, no council; about 1% of 92154, unincorporated).
   - BT 636 (San Ysidro SD + SWC TA4, no council; 3.4% of 92154, unincorporated).
   - BT 584 (GCCCD TA5 + Measure G + LMSV measure + Council D4; about 1.6% of 92114). Its LMSV measure letter is unknown.
   - BT 583 (GCCCD TA5 + Measure G + Council D4; 3.6% of 92115).
   Each of their contests appears confirmed on another ballot. Only the exact combination and the LMSV letter are unverified.
2. **Precinct-layer edge noise.** The district-code layer (Aug 2026) and the ballot-type layer do not line up perfectly at block level. Some ballot types showed minority codes that cannot be real, because a ballot type is uniform:
   - 26% of BT 469 blocks coded MiraCosta. The 469 ballot has no college race.
   - BT 703 split across South Bay Union areas. None of those seats is up.
   - BT 277/279/281 split between Olivenhain Div 1 and Div 4. Neither is up.
   Where it matters, the printed ballot decided. Contest shares come from ballot-type shares, so they are not affected.
3. **Shares** are 2020-population shares by block point, not voter counts. ZCTA does not equal the USPS ZIP. The share of residents in ballot types under 0.8% is at most 1.1% in any ZIP (92110, 92129).
4. **Unopposed contests that still print:** SDUSD District C (Hayden Gore) and Solana Beach Council D4 (Jenna Wolfe-Dellamano), like SDUSD District B (Shana Hazan, wave 2).
5. **92092/92093/92136/92140/92145** are campus or military ZCTAs with mostly group-quarters population. They are included only because they meet the numeric rule. 92092 and 92093 are both 100% BT 244, which prints CA-49, SD-38, AD-77, SDCCD A, SDUSD C and Measure M (BT 244 was not read; the same local set is confirmed on BT 308).
6. 92101: about 79% of residents (BT 317, 324) have no local candidate contest besides Measure M. City Council District 3 is not up, and SDCCD C covers only 21% and Supervisor D4 only 10%.
7. 92127's unincorporated 40% (BTs 277, 279, 281, 283) has RSF Fire, RSF CSD, Olivenhain and San Dieguito CPG districts, but all of those are "Election = NO". It votes only on Palomar CCD TA1 and Palomar Health Div 3 or 7, plus BOE-5 for BT 283. BT 283 (2.4%) also falls in the Solana Beach SD and MiraCosta areas, which are not up.

Working files (not in repo): scratchpad `sdcity/` (`gis/` API data, `sb/` 40 sample ballot PDFs, `sbtxt/` and `rawtxt/` extracted text, `work/` scripts and outputs).
