# San Diego County cities scope: Chula Vista, Oceanside, El Cajon, La Mesa, Santee and Vista (Nov 3, 2026)

Researched Oct 13, 2026. Scoping only: no race content. Same method as `escondido-scope.md` and `sd-city-scope.md`: Census blocks vs. city boundary, the County ballot-type layer `Ballot_Types_NOV2026`, the precinct district-code layer `Find_Your_Dist_Map_AUG_2026_MIL1/MapServer/20`, the Registrar candidate list R740.03 (8/28/2026) with its "Election = YES/NO" flag, the Registrar's measures notice (8/8/2026), and printed sample ballots. Already built and skipped: 91911 and 91914 (`profiles-sd-wave2.ts`).

## Method

1. **Which ZIPs.** Every 2020 Census block with population in San Diego County (TIGERweb `tigerWMS_Census2020` layer 10, 23,030 blocks) was placed in its ZCTA (layer 84) by internal point and tested against the 2020 place boundaries (layer 26) of **Chula Vista city (0613392; pop 275,487), Oceanside city (0653322; 174,068), El Cajon city (0621712; 106,215), La Mesa city (0640004; 61,121), Santee city (0670224; 60,037) and Vista city (0682996; 98,381)**. Rule: include a ZIP if at least 50% of its population is in one of these cities and it has at least 1,000 residents. ZIPs that already have a hand-built profile (`ballot-profiles.ts`, `profiles-sd-wave2.ts`, `profiles-sd-city.ts`, `profiles-escondido.ts`) were skipped.
2. **Ballot types.** Each block in an included ZIP was assigned to a `Ballot_Types_NOV2026` polygon (field `BT`) and weighted by block population. Ballot types under 0.8% of a ZIP are dropped; contest shares are taken over the rest.
3. **Contests per ballot type** from the precinct district codes (CONG, SEN, ASSM, SUPV, BOED, CITYO, CTYCC, SCHCO/SCHCT, SCHE/SCHET, SCHH/SCHHT, SCHUO/SCHUT, HOSPZ, WMWDD, WIRRD, FIRED, CPA), keeping only seats with "Election = YES" on the candidate list. Measures were assigned by district (school/college districts from the measures notice; city measures from the printed ballots).
4. **Checked against printed ballots.** The ballot types were grouped by their combination of local contests and measures: **74 groups**. One official sample ballot (`SB-ENG-<BT>.pdf`, text by `pdftotext -raw`) was read for **every group**: 75 ballots in all. Eight Chula Vista ballots were already on hand from wave 2 (BT 665, 666, 667, 670, 671, 672, 674, 677); **67 were new downloads** this round. Two-digit ballot types (all Vista BTs and two Oceanside BTs) return a 404 page at `SB-ENG-25.pdf` but download at the zero-padded `SB-ENG-025.pdf`. **On all 75 ballots read, the printed contests and measure letters matched the GIS prediction exactly** (CD, SD, AD, every local contest, and every measure). The only mismatch the comparison script flagged (BT 719) was a text-parsing artifact, not a real difference.
5. Candidates and ballot designations are as printed on the sample ballots and agree with the candidate list. Local-contest candidate order was identical on every ballot read (only SPI and Treasurer-Tax Collector rotate). Measure thresholds come from the printed measure pages ("This measure requires …").

"CONFIRMED" = printed on at least one sample ballot read for that ZIP. Every contest listed below is CONFIRMED; no contest in any included ZIP is GIS only.

## (a) Included ZIPs (14)

| ZIP | Label | 2020 pop | In city |
|---|---|---|---|
| 91910 | Chula Vista (northwest / central) | 79,613 | Chula Vista 98.3% |
| 91913 | Otay Ranch / East Chula Vista | 55,923 | Chula Vista 100% |
| 91915 | Eastlake / Otay Ranch east | 33,218 | Chula Vista 100% |
| 92054 | Oceanside coastal / downtown | 38,667 | Oceanside 100% |
| 92056 | Oceanside east / Rancho del Oro | 53,750 | Oceanside 100% |
| 92057 | Oceanside north / Mission San Luis Rey | 57,844 | Oceanside 100% |
| 92058 | Oceanside northeast / Camp Pendleton south | 45,389 | Oceanside 52.0% |
| 92020 | El Cajon central and south | 60,454 | El Cajon 93.9% |
| 91941 | La Mesa east / Mount Helix edge | 33,895 | La Mesa 59.9% (El Cajon 0.1%) |
| 91942 | La Mesa west / Grossmont | 40,813 | La Mesa 100% |
| 92071 | Santee | 60,163 | Santee 99.8% |
| 92081 | Vista south / Shadowridge | 28,745 | Vista 94.0% |
| 92083 | Vista west and central | 39,219 | Vista 89.3% |
| 92084 | Vista north / Bonsall edge | 49,941 | Vista 72.7% |

All 16 expected ZIPs except 92019 and 92021 pass the rule. **92058** passes narrowly: the other 48% is Camp Pendleton (BT 175, 27.7%, mostly group quarters) and the Camp Pendleton / Fallbrook Union Elementary part (BT 172, 20.3%). **91941** is 40% unincorporated (Mount Helix / Casa de Oro edge: BTs 497, 503–506, 594).

**Narrow misses (40–50%):** **92021** (El Cajon east / Bostonia, pop 70,584) is 43.9% in El Cajon; **92019** (Rancho San Diego / Granite Hills, pop 45,108) is 40.9% in El Cajon. Both excluded.

**Other excluded overlaps:** 91911 (99.9% Chula Vista) and 91914 (99.9%) are already built. 91902 (Bonita) is 29.3% Chula Vista. Trace overlaps under 1%: 92003 and 92028 (Oceanside 0.3%), 92115 (La Mesa 0.0%). No other ZCTA has population in these six cities (92040 Lakeside: 0% Santee).

## Seats up nearby that print on no ballot ("Election = NO")

These districts overlap the included ZIPs, but the candidate list marks them "Election = NO" (appointed in lieu of election). The ballots read agree.

MiraCosta CCD TA 6 and 7; Southwestern CCD TA 5; Sweetwater UHSD TA 3; Fallbrook UHSD TA 2; Fallbrook Union Elementary TA 1 and 5; Vista Unified TA 2; San Marcos Unified TA C; Bonsall Unified TA A; Lemon Grove SD; Santee SD Seat 3; Tri-City Healthcare Zones 4 and 6; Fallbrook Regional Health Zone 5; Vista Irrigation Div 1 and 3; Vista Fire Div D and E, and Div B (short term); North County Fire Div 5 (short term); Bonita-Sunnyside Fire Div 1; San Miguel Fire Div 3 and 5; Padre Dam MWD Div 3 and 5; Otay Water Div 1; South Bay Water (Sweetwater Authority) Div 1 and 4; Spring Valley Community Planning Group.

No seat is up at all in: Chula Vista Council D3 and D4; El Cajon Council D2 and D4; Oceanside Council D3 and D4 (no Oceanside mayor race); Santee Council D3 and D4 (no Santee mayor race); Vista Council D2 and D3; State Senate 39 (no Senate contest prints in 91941, 91942 or 92020); Supervisor D1 and D2; County Board of Education D2 and D4; Palomar CCD TA 3; MiraCosta TA 5; Oceanside Unified TA 2 and 5; Vista Unified TA 1, 4, 5; Cajon Valley TA 4 and 5; Grossmont UHSD TA 1 and 2; Grossmont-Cuyamaca CCD TA 1–4; La Mesa-Spring Valley TA 4; Helix Water Div 1, 3, 5; Grossmont Healthcare Zones 1, 3, 5; Tri-City Healthcare Zones 1, 3, 5; Palomar Health Div 2; Southwestern CCD TA 2; Sweetwater UHSD TA 2; Fallbrook UHSD TA 4; Vista Irrigation Div 4 and 5; Vista Fire Div A and C; San Miguel Fire Div 2 and 4; Otay Water Div 2, 4, 5; Rainbow MWD Div 1; Vallecitos Water Div 1.

**No City of Chula Vista, El Cajon, La Mesa or Vista measure is on any ballot read.** City measures exist only in Oceanside (R, S) and Santee (Y).

## (b) Per-ZIP contests

Statewide offices, retention, SPI, statewide props and the countywide items `sd()` adds (BOE-4, Assessor, Treasurer-Tax Collector, County Measures A and B) are on every ballot and not repeated. Contests under 8% of a ZIP are listed in a note under its table.

### 91910 — Chula Vista (northwest / central)

City of Chula Vista share 98.3%. Ballot types (≥0.8%, * = sample ballot read): 667* (38.1%), 671* (15.0%), 670* (13.0%), 665* (11.4%), 672* (10.2%), 664* (6.2%), 673* (3.1%), 719* (1.3%), 677* (0.9%); under 0.8%: 0.8%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-52 | `us-rep-ca52` | 100% | existing, CONFIRMED |
| State Senate 18 | `senate-sd18` | 100% | existing, CONFIRMED |
| Assembly 80 | `assembly-ad80` | 100% | existing, CONFIRMED |
| Southwestern CCD Trustee Area 1 | `swc-trustee-area-1` | 52% | NEW, CONFIRMED |
| Southwestern CCD Trustee Area 4 | `swc-trustee-area-4` | 22% | existing, CONFIRMED |
| Sweetwater Union HSD Trustee Area 1 | `suhsd-trustee-area-1` | 49% | NEW, CONFIRMED |
| Chula Vista Elementary Seat 1 | `cvesd-seat-1` | 100% | existing, CONFIRMED |
| Chula Vista Elementary Seat 3 | `cvesd-seat-3` | 100% | existing, CONFIRMED |
| Chula Vista Elementary Seat 5 | `cvesd-seat-5` | 100% | existing, CONFIRMED |
| Chula Vista City Attorney | `chula-vista-city-attorney` | 99% | existing, CONFIRMED |
| Chula Vista Council District 1 | `chula-vista-council-d1` | 18% | existing, CONFIRMED |
| Chula Vista Council District 2 | `chula-vista-council-d2` | 80% | NEW, CONFIRMED |
| Chula Vista Mayor | `chula-vista-mayor` | 99% | existing, CONFIRMED |

Under 8% (note only): Sweetwater Community Planning Group (vote 7) (`sweetwater-cpg`, 1%, NEW, CONFIRMED).

### 91913 — Otay Ranch / East Chula Vista

City of Chula Vista share 100.0%. Ballot types (≥0.8%, * = sample ballot read): 674* (70.0%), 666* (13.4%), 675* (11.5%), 665* (5.1%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-52 | `us-rep-ca52` | 100% | existing, CONFIRMED |
| State Senate 18 | `senate-sd18` | 100% | existing, CONFIRMED |
| Assembly 80 | `assembly-ad80` | 100% | existing, CONFIRMED |
| Southwestern CCD Trustee Area 4 | `swc-trustee-area-4` | 70% | existing, CONFIRMED |
| Chula Vista Elementary Seat 1 | `cvesd-seat-1` | 100% | existing, CONFIRMED |
| Chula Vista Elementary Seat 3 | `cvesd-seat-3` | 100% | existing, CONFIRMED |
| Chula Vista Elementary Seat 5 | `cvesd-seat-5` | 100% | existing, CONFIRMED |
| Chula Vista City Attorney | `chula-vista-city-attorney` | 100% | existing, CONFIRMED |
| Chula Vista Council District 1 | `chula-vista-council-d1` | 18% | existing, CONFIRMED |
| Chula Vista Mayor | `chula-vista-mayor` | 100% | existing, CONFIRMED |
| Otay Water Division 3 | `otay-water-div-3` | 13% | existing, CONFIRMED |

### 91915 — Eastlake / Otay Ranch east

City of Chula Vista share 100.0%. Ballot types (≥0.8%, * = sample ballot read): 665* (59.2%), 675* (40.7%); under 0.8%: 0.1%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-52 | `us-rep-ca52` | 100% | existing, CONFIRMED |
| State Senate 18 | `senate-sd18` | 100% | existing, CONFIRMED |
| Assembly 80 | `assembly-ad80` | 100% | existing, CONFIRMED |
| Chula Vista Elementary Seat 1 | `cvesd-seat-1` | 100% | existing, CONFIRMED |
| Chula Vista Elementary Seat 3 | `cvesd-seat-3` | 100% | existing, CONFIRMED |
| Chula Vista Elementary Seat 5 | `cvesd-seat-5` | 100% | existing, CONFIRMED |
| Chula Vista City Attorney | `chula-vista-city-attorney` | 100% | existing, CONFIRMED |
| Chula Vista Council District 1 | `chula-vista-council-d1` | 59% | existing, CONFIRMED |
| Chula Vista Mayor | `chula-vista-mayor` | 100% | existing, CONFIRMED |

### 91941 — La Mesa east / Mount Helix edge

City of La Mesa share 59.9%. Ballot types (≥0.8%, * = sample ballot read): 574* (22.3%), 578* (19.1%), 571* (13.6%), 504* (9.3%), 503* (8.3%), 506* (7.0%), 497* (6.8%), 594* (5.4%), 577* (4.4%), 505* (3.3%); under 0.8%: 0.5%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-51 | `us-rep-ca51` | 100% | existing, CONFIRMED |
| Assembly 75 | `assembly-ad75` | 35% | existing, CONFIRMED |
| Assembly 79 | `assembly-ad79` | 65% | existing, CONFIRMED |
| County Board of Education, 3rd District | `sd-county-board-ed-d3` | 100% | existing, CONFIRMED |
| La Mesa-Spring Valley SD Trustee Area 2 | `lmsvsd-trustee-area-2` | 22% | NEW, CONFIRMED |
| La Mesa-Spring Valley SD Trustee Area 3 | `lmsvsd-trustee-area-3` | 41% | NEW, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 100% | existing, CONFIRMED |
| La Mesa City Council (vote 2) | `la-mesa-city-council` | 60% | NEW, CONFIRMED |
| La Mesa City Treasurer | `la-mesa-city-treasurer` | 60% | NEW, CONFIRMED |
| La Mesa Mayor | `la-mesa-mayor` | 60% | NEW, CONFIRMED |
| Helix Water Division 2 | `helix-water-div-2` | 16% | NEW, CONFIRMED |
| Helix Water Division 4 | `helix-water-div-4` | 41% | NEW, CONFIRMED |
| Grossmont-Cuyamaca CCD Measure G (bond) | `gcccd-measure-g` | 100% | NEW, CONFIRMED |
| La Mesa-Spring Valley SD Measure AA (bond) | `lmsvsd-measure-aa` | 69% | NEW, CONFIRMED |

Under 8% (note only): Grossmont-Cuyamaca CCD Trustee Area 5 (`gcccd-area-5`, 5%, NEW, CONFIRMED); Grossmont Healthcare District Zone 2 (`grossmont-healthcare-zone-2`, 5%, NEW, CONFIRMED).

### 91942 — La Mesa west / Grossmont

City of La Mesa share 100.0%. Ballot types (≥0.8%, * = sample ballot read): 573* (33.3%), 576* (29.5%), 575* (19.6%), 572* (11.9%), 578* (5.0%); under 0.8%: 0.7%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-51 | `us-rep-ca51` | 100% | existing, CONFIRMED |
| Assembly 79 | `assembly-ad79` | 100% | existing, CONFIRMED |
| County Board of Education, 3rd District | `sd-county-board-ed-d3` | 100% | existing, CONFIRMED |
| La Mesa-Spring Valley SD Trustee Area 1 | `lmsvsd-trustee-area-1` | 46% | NEW, CONFIRMED |
| La Mesa-Spring Valley SD Trustee Area 2 | `lmsvsd-trustee-area-2` | 49% | NEW, CONFIRMED |
| County Supervisor District 4 | `sd-supervisor-d4` | 100% | existing, CONFIRMED |
| La Mesa City Council (vote 2) | `la-mesa-city-council` | 100% | NEW, CONFIRMED |
| La Mesa City Treasurer | `la-mesa-city-treasurer` | 100% | NEW, CONFIRMED |
| La Mesa Mayor | `la-mesa-mayor` | 100% | NEW, CONFIRMED |
| Helix Water Division 2 | `helix-water-div-2` | 53% | NEW, CONFIRMED |
| Helix Water Division 4 | `helix-water-div-4` | 35% | NEW, CONFIRMED |
| Grossmont-Cuyamaca CCD Measure G (bond) | `gcccd-measure-g` | 100% | NEW, CONFIRMED |
| La Mesa-Spring Valley SD Measure AA (bond) | `lmsvsd-measure-aa` | 100% | NEW, CONFIRMED |

Under 8% (note only): La Mesa-Spring Valley SD Trustee Area 3 (`lmsvsd-trustee-area-3`, 5%, NEW, CONFIRMED).

### 92020 — El Cajon central and south

City of El Cajon share 93.9%. Ballot types (≥0.8%, * = sample ballot read): 568* (14.4%), 544* (14.3%), 551* (12.3%), 508* (10.0%), 512* (8.4%), 569* (5.7%), 506* (5.4%), 570* (5.1%), 565* (5.1%), 567 (4.9%), 509* (3.0%), 548* (2.7%), 545* (2.4%), 542 (2.3%), 566* (1.7%), 526* (0.8%); under 0.8%: 1.5%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-51 | `us-rep-ca51` | 100% | existing, CONFIRMED |
| Assembly 78 | `assembly-ad78` | 23% | existing, CONFIRMED |
| Assembly 79 | `assembly-ad79` | 72% | existing, CONFIRMED |
| County Board of Education, 3rd District | `sd-county-board-ed-d3` | 99% | existing, CONFIRMED |
| Grossmont Union HSD Trustee Area 3 | `guhsd-trustee-area-3` | 87% | NEW, CONFIRMED |
| Cajon Valley Union SD Trustee Area 2 | `cajon-valley-trustee-area-2` | 9% | NEW, CONFIRMED |
| Cajon Valley Union SD Trustee Area 3 | `cajon-valley-trustee-area-3` | 34% | NEW, CONFIRMED |
| La Mesa-Spring Valley SD Trustee Area 1 | `lmsvsd-trustee-area-1` | 16% | NEW, CONFIRMED |
| El Cajon Council District 1 | `el-cajon-council-d1` | 45% | NEW, CONFIRMED |
| El Cajon Mayor | `el-cajon-mayor` | 95% | NEW, CONFIRMED |
| Helix Water Division 2 | `helix-water-div-2` | 52% | NEW, CONFIRMED |
| Helix Water Division 4 | `helix-water-div-4` | 16% | NEW, CONFIRMED |
| Grossmont-Cuyamaca CCD Measure G (bond) | `gcccd-measure-g` | 100% | NEW, CONFIRMED |
| La Mesa-Spring Valley SD Measure AA (bond) | `lmsvsd-measure-aa` | 16% | NEW, CONFIRMED |

Under 8% (note only): Assembly 75 (`assembly-ad75`, 5%, existing, CONFIRMED); Santee SD Seat 1 (`santee-sd-seat-1`, 1%, NEW, CONFIRMED); Santee SD Seat 5 (`santee-sd-seat-5`, 1%, NEW, CONFIRMED); County Supervisor District 4 (`sd-supervisor-d4`, 5%, existing, CONFIRMED); Padre Dam MWD Division 1 (`padre-dam-water-div-1`, 4%, NEW, CONFIRMED); Santee SD Measure BB (bond) (`santee-sd-measure-bb`, 1%, NEW, CONFIRMED).

### 92054 — Oceanside coastal / downtown

City of Oceanside share 100.0%. Ballot types (≥0.8%, * = sample ballot read): 150* (52.9%), 160* (33.3%), 152* (8.9%), 149* (3.9%), 151* (1.0%)

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-49 | `us-rep-ca49` | 100% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 100% | existing, CONFIRMED |
| Assembly 74 | `assembly-ad74` | 100% | existing, CONFIRMED |
| County Board of Education, 5th District | `sd-county-board-ed-d5` | 100% | existing, CONFIRMED |
| Oceanside Unified Trustee Area 1 | `oceanside-usd-trustee-area-1` | 54% | NEW, CONFIRMED |
| Oceanside Unified Trustee Area 3 | `oceanside-usd-trustee-area-3` | 9% | NEW, CONFIRMED |
| County Supervisor District 5 | `sd-supervisor-d5` | 100% | existing, CONFIRMED |
| Oceanside Council District 1 | `oceanside-council-d1` | 67% | NEW, CONFIRMED |
| Oceanside Measure R (charter: prevailing wage / PLAs) | `oceanside-measure-r` | 100% | NEW, CONFIRMED |
| Oceanside Measure S (1/2-cent sales tax) | `oceanside-measure-s` | 100% | NEW, CONFIRMED |

Under 8% (note only): Tri-City Healthcare District Zone 2 (`tri-city-healthcare-zone-2`, 1%, NEW, CONFIRMED).

### 92056 — Oceanside east / Rancho del Oro

City of Oceanside share 100.0%. Ballot types (≥0.8%, * = sample ballot read): 15 (14.8%), 17* (11.6%), 166* (11.0%), 20 (9.5%), 160* (9.3%), 16* (9.0%), 161 (8.5%), 165 (7.9%), 164 (6.5%), 163* (6.0%), 167 (3.1%), 154* (0.9%); under 0.8%: 1.9%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-48 | `us-rep-ca48` | 46% | existing, CONFIRMED |
| U.S. House CA-49 | `us-rep-ca49` | 54% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 100% | existing, CONFIRMED |
| Assembly 74 | `assembly-ad74` | 100% | existing, CONFIRMED |
| County Board of Education, 5th District | `sd-county-board-ed-d5` | 100% | existing, CONFIRMED |
| Palomar CCD Trustee Area 5 | `palomar-ccd-area-5` | 30% | existing, CONFIRMED |
| Vista Unified Trustee Area 3 | `vista-usd-trustee-area-3` | 36% | NEW, CONFIRMED |
| County Supervisor District 5 | `sd-supervisor-d5` | 100% | existing, CONFIRMED |
| Oceanside Measure R (charter: prevailing wage / PLAs) | `oceanside-measure-r` | 100% | NEW, CONFIRMED |
| Oceanside Measure S (1/2-cent sales tax) | `oceanside-measure-s` | 100% | NEW, CONFIRMED |
| Vista Unified Measure N (bond) | `vista-usd-measure-n` | 63% | NEW, CONFIRMED |

Under 8% (note only): Carlsbad Unified Trustee Area 5 (`carlsbad-usd-area-5`, 6%, NEW, CONFIRMED); Oceanside Council District 2 (`oceanside-council-d2`, 1%, NEW, CONFIRMED).

### 92057 — Oceanside north / Mission San Luis Rey

City of Oceanside share 100.0%. Ballot types (≥0.8%, * = sample ballot read): 158* (26.6%), 164 (15.6%), 168* (12.5%), 149* (11.5%), 157* (7.7%), 177* (6.9%), 154* (5.6%), 155* (4.0%), 167 (3.2%), 166* (2.7%), 165 (1.8%), 153* (1.4%); under 0.8%: 0.5%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-49 | `us-rep-ca49` | 100% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 100% | existing, CONFIRMED |
| Assembly 74 | `assembly-ad74` | 100% | existing, CONFIRMED |
| County Board of Education, 5th District | `sd-county-board-ed-d5` | 93% | existing, CONFIRMED |
| Palomar CCD Trustee Area 5 | `palomar-ccd-area-5` | 21% | existing, CONFIRMED |
| Oceanside Unified Trustee Area 3 | `oceanside-usd-trustee-area-3` | 9% | NEW, CONFIRMED |
| Oceanside Unified Trustee Area 4 | `oceanside-usd-trustee-area-4` | 27% | NEW, CONFIRMED |
| County Supervisor District 5 | `sd-supervisor-d5` | 100% | existing, CONFIRMED |
| Oceanside Council District 1 | `oceanside-council-d1` | 13% | NEW, CONFIRMED |
| Oceanside Council District 2 | `oceanside-council-d2` | 51% | NEW, CONFIRMED |
| Tri-City Healthcare District Zone 2 | `tri-city-healthcare-zone-2` | 59% | NEW, CONFIRMED |
| Oceanside Measure R (charter: prevailing wage / PLAs) | `oceanside-measure-r` | 100% | NEW, CONFIRMED |
| Oceanside Measure S (1/2-cent sales tax) | `oceanside-measure-s` | 100% | NEW, CONFIRMED |
| Vista Unified Measure N (bond) | `vista-usd-measure-n` | 17% | NEW, CONFIRMED |

Under 8% (note only): Vista Unified Trustee Area 3 (`vista-usd-trustee-area-3`, 6%, NEW, CONFIRMED).

### 92058 — Oceanside northeast / Camp Pendleton south

City of Oceanside share 52.0%. Ballot types (≥0.8%, * = sample ballot read): 175* (27.7%), 158* (27.1%), 172* (20.3%), 151* (13.6%), 153* (10.2%), 168* (1.0%); under 0.8%: 0.1%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-49 | `us-rep-ca49` | 100% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 100% | existing, CONFIRMED |
| Assembly 74 | `assembly-ad74` | 100% | existing, CONFIRMED |
| County Board of Education, 5th District | `sd-county-board-ed-d5` | 100% | existing, CONFIRMED |
| Palomar CCD Trustee Area 5 | `palomar-ccd-area-5` | 20% | existing, CONFIRMED |
| Oceanside Unified Trustee Area 1 | `oceanside-usd-trustee-area-1` | 14% | NEW, CONFIRMED |
| Oceanside Unified Trustee Area 3 | `oceanside-usd-trustee-area-3` | 38% | NEW, CONFIRMED |
| Oceanside Unified Trustee Area 4 | `oceanside-usd-trustee-area-4` | 27% | NEW, CONFIRMED |
| County Supervisor District 5 | `sd-supervisor-d5` | 100% | existing, CONFIRMED |
| Oceanside Council District 1 | `oceanside-council-d1` | 24% | NEW, CONFIRMED |
| Oceanside Council District 2 | `oceanside-council-d2` | 27% | NEW, CONFIRMED |
| Tri-City Healthcare District Zone 2 | `tri-city-healthcare-zone-2` | 52% | NEW, CONFIRMED |
| Oceanside Measure R (charter: prevailing wage / PLAs) | `oceanside-measure-r` | 52% | NEW, CONFIRMED |
| Oceanside Measure S (1/2-cent sales tax) | `oceanside-measure-s` | 52% | NEW, CONFIRMED |
| Fallbrook Union Elementary Measure K (bond) | `fuesd-measure-k` | 20% | NEW, CONFIRMED |

### 92071 — Santee

City of Santee share 99.8%. Ballot types (≥0.8%, * = sample ballot read): 364* (24.4%), 371* (24.0%), 372* (22.9%), 368* (19.1%), 369* (5.5%), 370 (2.4%), 365* (1.4%); under 0.8%: 0.3%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 100% | existing, CONFIRMED |
| State Senate 40 | `senate-sd40` | 100% | existing, CONFIRMED |
| Assembly 75 | `assembly-ad75` | 100% | existing, CONFIRMED |
| Grossmont Union HSD Trustee Area 4 | `guhsd-trustee-area-4` | 100% | NEW, CONFIRMED |
| Santee SD Seat 1 | `santee-sd-seat-1` | 100% | NEW, CONFIRMED |
| Santee SD Seat 5 | `santee-sd-seat-5` | 100% | NEW, CONFIRMED |
| Santee Council District 1 | `santee-council-d1` | 26% | NEW, CONFIRMED |
| Santee Council District 2 | `santee-council-d2` | 25% | NEW, CONFIRMED |
| Padre Dam MWD Division 1 | `padre-dam-water-div-1` | 31% | NEW, CONFIRMED |
| Santee Measure Y (1-cent sales tax) | `santee-measure-y` | 100% | NEW, CONFIRMED |
| Grossmont-Cuyamaca CCD Measure G (bond) | `gcccd-measure-g` | 100% | NEW, CONFIRMED |
| Santee SD Measure BB (bond) | `santee-sd-measure-bb` | 100% | NEW, CONFIRMED |

### 92081 — Vista south / Shadowridge

City of Vista share 94.0%. Ballot types (≥0.8%, * = sample ballot read): 31* (58.1%), 27 (24.5%), 32* (10.9%), 174 (2.1%), 88* (2.1%), 169 (1.1%); under 0.8%: 1.2%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-48 | `us-rep-ca48` | 97% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 98% | existing, CONFIRMED |
| Assembly 74 | `assembly-ad74` | 98% | existing, CONFIRMED |
| County Board of Education, 5th District | `sd-county-board-ed-d5` | 100% | existing, CONFIRMED |
| San Marcos Unified Trustee Area E | `san-marcos-usd-area-e` | 13% | NEW, CONFIRMED |
| County Supervisor District 5 | `sd-supervisor-d5` | 100% | existing, CONFIRMED |
| Vista Mayor | `vista-mayor` | 96% | NEW, CONFIRMED |
| Vista Council District 4 | `vista-council-d4` | 71% | NEW, CONFIRMED |
| Vista Unified Measure N (bond) | `vista-usd-measure-n` | 87% | NEW, CONFIRMED |

Under 8% (note only): U.S. House CA-49 (`us-rep-ca49`, 3%, existing, GIS only); State Senate 40 (`senate-sd40`, 2%, existing, CONFIRMED); Assembly 76 (`assembly-ad76`, 2%, existing, CONFIRMED).

### 92083 — Vista west and central

City of Vista share 89.3%. Ballot types (≥0.8%, * = sample ballot read): 29* (24.9%), 24* (21.4%), 28* (17.7%), 31* (10.6%), 22* (8.6%), 87 (5.9%), 25* (5.7%), 143* (1.9%), 135* (1.9%), 88* (1.0%); under 0.8%: 0.4%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-48 | `us-rep-ca48` | 100% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 89% | existing, CONFIRMED |
| State Senate 40 | `senate-sd40` | 11% | existing, CONFIRMED |
| Assembly 74 | `assembly-ad74` | 89% | existing, CONFIRMED |
| Assembly 76 | `assembly-ad76` | 11% | existing, CONFIRMED |
| County Board of Education, 5th District | `sd-county-board-ed-d5` | 96% | existing, CONFIRMED |
| Vista Unified Trustee Area 3 | `vista-usd-trustee-area-3` | 18% | NEW, CONFIRMED |
| County Supervisor District 5 | `sd-supervisor-d5` | 100% | existing, CONFIRMED |
| Vista Mayor | `vista-mayor` | 89% | NEW, CONFIRMED |
| Vista Council District 1 | `vista-council-d1` | 30% | NEW, CONFIRMED |
| Vista Council District 4 | `vista-council-d4` | 11% | NEW, CONFIRMED |
| Vista Irrigation Division 2 (short term) | `vista-irrigation-div-2` | 64% | NEW, CONFIRMED |
| Vista Unified Measure N (bond) | `vista-usd-measure-n` | 95% | NEW, CONFIRMED |

Under 8% (note only): San Marcos Unified Trustee Area E (`san-marcos-usd-area-e`, 3%, NEW, CONFIRMED).

### 92084 — Vista north / Bonsall edge

City of Vista share 72.7%. Ballot types (≥0.8%, * = sample ballot read): 25* (46.4%), 22* (26.3%), 84* (19.4%), 87 (1.7%), 297 (1.3%), 139* (1.1%), 269 (0.8%); under 0.8%: 3.0%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-48 | `us-rep-ca48` | 98% | existing, CONFIRMED |
| State Senate 38 | `senate-sd38` | 75% | existing, CONFIRMED |
| State Senate 40 | `senate-sd40` | 25% | existing, CONFIRMED |
| Assembly 74 | `assembly-ad74` | 75% | existing, CONFIRMED |
| Assembly 76 | `assembly-ad76` | 24% | existing, CONFIRMED |
| County Board of Education, 5th District | `sd-county-board-ed-d5` | 98% | existing, CONFIRMED |
| Palomar CCD Trustee Area 5 | `palomar-ccd-area-5` | 23% | existing, CONFIRMED |
| County Supervisor District 5 | `sd-supervisor-d5` | 100% | existing, CONFIRMED |
| Vista Mayor | `vista-mayor` | 75% | NEW, CONFIRMED |
| Vista Council District 1 | `vista-council-d1` | 27% | NEW, CONFIRMED |
| Vista Unified Measure N (bond) | `vista-usd-measure-n` | 98% | NEW, CONFIRMED |

Under 8% (note only): U.S. House CA-49 (`us-rep-ca49`, 2%, existing, GIS only); Assembly 75 (`assembly-ad75`, 1%, existing, GIS only); Bonsall Unified Trustee Area B (`bonsall-usd-area-b`, 2%, NEW, CONFIRMED).

## (c) NEW contests (≥8% of some included ZIP)

Vote for 1 unless noted. Candidates in printed order (the same on every ballot type read), with the printed ballot designation.

### City

| Id | Official title (as printed) | Candidates (ballot designation, printed order) | ZIPs (share) | Confirmed on |
|---|---|---|---|---|
| `chula-vista-council-d2` | City of Chula Vista, Member, City Council, District No. 2 | Jose Preciado (Chula Vista Councilmember/Educator); Angelica S. Martinez (Educator/Parent) | 91910 (80%); also 91911 (~7%, built earlier) | BT 667, 670, 671, 672, 673 |
| `el-cajon-mayor` | City of El Cajon, Mayor | Alexander Kraft (Legal Support Assistant); Bill Wells (Mayor of El Cajon) | 92020 (95%) | BT 508, 509, 512, 526, 544, 545, 548, 551, 565, 566, 568, 569, 570 |
| `el-cajon-council-d1` | City of El Cajon, Member, City Council, District No. 1 | Chuck Kaye (Retired Police Chief); Osama Bayati (Civic Affairs Director); Patrick Grillot (Healthcare Manager/Parent) | 92020 (45%) | BT 508, 509, 512, 526, 544, 545, 548 |
| `la-mesa-mayor` | City of La Mesa, Mayor | Laura Lothian (City of La Mesa Councilmember/Businesswoman); Patricia Normandy-Dillard (City of La Mesa Councilmember); Jim Stieringer (Retired City of La Mesa Treasurer); Quinn M. Reese (Regenerative Farmer) | 91942 (100%), 91941 (60%) | BT 571–578 |
| `la-mesa-city-council` | City of La Mesa, Member, City Council (**vote for no more than two**) | Moana Alo (Senate District Representative); Amanda-Dawn Natalia (Attorney/Commissioner/Mother). Two candidates for two seats, but printed. | 91942 (100%), 91941 (60%) | BT 571–578 |
| `la-mesa-city-treasurer` | City of La Mesa, Treasurer | Emmett Stewart (Financial Analyst); Bill Exeter (Treasurer/CFO/CEO) | 91942 (100%), 91941 (60%) | BT 571–578 |
| `oceanside-council-d1` | City of Oceanside, Member, City Council, District No. 1 | Michael Cline (Retired U.S. Army); Eric Joyce (Oceanside City Councilmember) | 92054 (67%), 92058 (24%), 92057 (13%) | BT 149, 150, 151, 152, 153 |
| `oceanside-council-d2` | City of Oceanside, Member, City Council, District No. 2 | Ricky James (Real Estate Broker); Oscarin Ortega (Nonprofit Executive); Perry Alvarez (Automotive Repair Manager); Richard Robinson (Oceanside City Councilmember); Emily Gonzales (Director/Facilitator/Mother) | 92057 (51%), 92058 (27%); 92056 (1%) | BT 154, 155, 157, 158, 177 |
| `santee-council-d1` | City of Santee, Member, City Council, District No. 1 | Matthew G. Rascon (Orthopaedic Technologist); Rob McNelis (Councilmember/Businessman) | 92071 (26%) | BT 364, 365 |
| `santee-council-d2` | City of Santee, Member, City Council, District No. 2 | Ronn Hall (Business Owner/Councilmember); Eddie Vandiver (Business Owner/Parent) | 92071 (25%) | BT 368, 369 |
| `vista-mayor` | City of Vista, Mayor | Kenneth Zuniga (Businessman/Homelessness Advocate); Joe Green (Small Business Owner) | 92081 (96%), 92083 (89%), 92084 (75%) | BT 22, 24, 25, 28, 29, 31, 32 |
| `vista-council-d1` | City of Vista, Member, City Council, District No. 1 | Yolanda Kenniston Alvarez (no ballot designation); Corinna Contreras (Councilmember/Policy Advocate); Frank Nunez (Non-Profit Director/Businessman) | 92083 (30%), 92084 (27%) | BT 22, 24 |
| `vista-council-d4` | City of Vista, Member, City Council, District No. 4 | Dan O'Donnell (Vista City Council Member Dist. 4); Josh Davis (Public Safety Technologist) | 92081 (71%), 92083 (11%) | BT 31, 32 |

### School and college districts

| Id | Official title (as printed) | Candidates (ballot designation, printed order) | ZIPs (share) | Confirmed on |
|---|---|---|---|---|
| `swc-trustee-area-1` | Southwestern Community College District, Governing Board Member, Trustee Area 1 | Mary Salas (Retired Mayor Chula Vista); Robert Moreno (Southwestern College Governing Board Member) | 91910 (52%); also 91911 (~8%, built earlier) | BT 667, 670 |
| `suhsd-trustee-area-1` | Sweetwater Union High School District, Governing Board Member, Trustee Area No. 1 | Fermin Eusebio Jimenez (Substitute Teacher/Paralegal); Maria Betancourt-Castañeda (Governing Board Trustee, National School District) | 91910 (49%); also 91911 (~4%) | BT 667, 672 |
| `guhsd-trustee-area-3` | Grossmont Union High School District, Governing Board Member, Trustee Area No. 3 | Gary Woods (Governing Board Member, Grossmont Union High School District); Jeneé Littrell (Public School Counselor) | 92020 (87%) | BT 508, 509, 512, 526, 544, 545, 551, 565, 566, 568, 569 |
| `guhsd-trustee-area-4` | Grossmont Union High School District, Governing Board Member, Trustee Area No. 4 | Charissa "Chrissy" McCullough (Loan Officer/Mother); Jimmy Merino (Public Adjuster/Coach); Steve Mull (Public School Teacher) | 92071 (100%) | BT 364, 365, 368, 369, 371, 372 |
| `cajon-valley-trustee-area-2` | Cajon Valley Union School District, Governing Board Member, Trustee Area No. 2 | Dana Covell (Business Owner/Mother); Jolyana Jirjees (Incumbent) | 92020 (9%) | BT 512 |
| `cajon-valley-trustee-area-3` | Cajon Valley Union School District, Governing Board Member, Trustee Area No. 3 | Marbriza Alcala (Parent Volunteer); Jo Alegría (Business Owner/Director); "Lily" Emily Schworm (Teacher/Board Member); Michael William Bucy (Father/Care Provider) | 92020 (34%) | BT 544, 551, 566 |
| `lmsvsd-trustee-area-1` | La Mesa-Spring Valley School District, Governing Board Member, Trustee Area No. 1 | Sarah Reed (Teacher/Board Member); Rebecca Tweedle (Operations Manager/Parent) | 91942 (46%), 92020 (16%) | BT 508, 509, 572, 573 |
| `lmsvsd-trustee-area-2` | La Mesa-Spring Valley School District, Governing Board Member, Trustee Area No. 2 | Jennifer Littig (Public School Teacher); Rebecca McRae (Board Member/Teacher); Myriam S. Moody (Teacher) | 91942 (49%), 91941 (22%) | BT 574, 575, 576 |
| `lmsvsd-trustee-area-3` | La Mesa-Spring Valley School District, Governing Board Member, Trustee Area No. 3 | Brianna E Coston (School Board Member); Sarah Feeley (Parent/Business Owner) | 91941 (41%), 91942 (5%) | BT 503, 504, 577, 578 |
| `santee-sd-seat-1` | Santee School District, Governing Board Member, Seat No. 1 | Misty Kendall (Legal Assistant); Cindy Petretta (Child Supervision Director); Frank Peterson (Engineering Manager) | 92071 (100%); 92020 (1%) | BT 364, 365, 368, 369, 371, 372, 526 |
| `santee-sd-seat-5` | Santee School District, Governing Board Member, Seat No. 5 | Steven L Dobesh (Entrepreneur/Parent); Uday Sinha (Software Engineer/Parent); Matthew C. McKell (Federal Employee/Parent) | 92071 (100%); 92020 (1%) | BT 364, 365, 368, 369, 371, 372, 526 |
| `oceanside-usd-trustee-area-1` | Oceanside Unified School District, Governing Board Member, Trustee Area 1 | Jerry Garcia Avila (Retired Lieutenant Commander); Nancy Licona (School Counselor) | 92054 (54%), 92058 (14%) | BT 150, 151 |
| `oceanside-usd-trustee-area-3` | Oceanside Unified School District, Governing Board Member, Trustee Area 3 | Nicole Watson (Businesswoman/Mother); Joey Pearson (Professional Learning Director) | 92058 (38%), 92054 (9%), 92057 (9%) | BT 152, 153, 157, 175 |
| `oceanside-usd-trustee-area-4` | Oceanside Unified School District, Governing Board Member, Trustee Area 4 | Raquel Riojas Alvarez (Governing Board Member, Oceanside Unified School District); Jason Bethurum (Teacher/Father) | 92057 (27%), 92058 (27%) | BT 158 |
| `vista-usd-trustee-area-3` | Vista Unified School District, Governing Board Member, Trustee Area No. 3 | Martha Alvarado (Teacher/Board Member); Jon Moffat (Small Business Owner) | 92056 (36%), 92083 (18%), 92057 (6%) | BT 17, 28, 166 |
| `san-marcos-usd-area-e` | San Marcos Unified School District, Governing Board Member, Trustee Area E | Derrick Davis (Parent/Security Executive); Christine Baker (Parent/Certified Appraiser) | 92081 (13%), 92083 (3%); also 92026 (~7%, built earlier) | BT 32, 88, 143 |

### Water, fire and hospital districts

| Id | Official title (as printed) | Candidates (ballot designation, printed order) | ZIPs (share) | Confirmed on |
|---|---|---|---|---|
| `tri-city-healthcare-zone-2` | Tri-City Healthcare District, Member, Board of Directors, Zone No. 2 | Jerome M. Kern (Retired City Councilmember); Marilyn Piek (Registered Nurse, Genex Services); Kayla Lauriano (Registered Nurse, MiraCosta College) | 92057 (59%), 92058 (52%); 92054 (1%) | BT 151, 153, 155, 157, 158, 168, 177 |
| `helix-water-div-2` | Helix Water District, Member, Board of Directors, Division No. 2 | Lawrence Powers (Loan Officer); Andrea Beth Damsky (Director, Helix Water District) | 91942 (53%), 92020 (52%), 91941 (16%) | BT 503, 505, 544, 545, 548, 551, 568, 573, 575, 577 |
| `helix-water-div-4` | Helix Water District, Member, Board of Directors, Division No. 4 | Kathleen Hedberg (Board Director, Helix Water District); Mounah Abdel-Samad (Public Administration Professor); Liliana Soriano Garista (Director of Policy) | 91941 (41%), 91942 (35%), 92020 (16%) | BT 504, 506, 569, 570, 576, 578, 594 |
| `padre-dam-water-div-1` | Padre Dam Municipal Water District, Member, Board of Directors, Division No. 1 | Bill Woods (Retired Police Sergeant); Brian Fordyce (Incumbent) | 92071 (31%); 92020 (4%) | BT 365, 369, 371, 509, 526 |
| `vista-irrigation-div-2` | Vista Irrigation District, Member, Board of Directors, Division No. 2 (Short Term) | Roland Allen (Retired Businessman); Elida Garcia (Construction Office Manager); Richard L. Vásquez (Retired Engineering Designer) | 92083 (64%) | BT 24, 28, 29 |

**NEW contests under 8% everywhere (note only, all CONFIRMED):** `carlsbad-usd-area-5` (Carlsbad Unified TA 5: Chris Waidelich, Parent/Attorney; Joel Gutierrez, Airline Pilot/Parent; 92056 6%, BT 163); `bonsall-usd-area-b` (Bonsall Unified TA B: Emily Wilke, no designation; Michael Gaddis, Trustee, Bonsall Unified School District; 92084 2%, BT 139); `gcccd-area-5` (Grossmont-Cuyamaca CCD TA 5: Rosangela Cribbs, Homemaker; Mary Gwin, Community College Professor; 91941 5%, BT 594; already proposed in `sd-city-scope.md`); `grossmont-healthcare-zone-2` (Randy Lenac, Grossmont Healthcare President; Jennifer Morrissey, Commissioner/Nonprofit Executive; 91941 5%, BT 594; already proposed in `sd-city-scope.md`); Sweetwater Community Planning Group (vote for 7, 12 candidates; 91910 1%, BT 719).

**Existing ids reused:** `us-rep-ca48/49/50/51/52`, `senate-sd18/38/40`, `assembly-ad74/75/76/78/79/80`, `sd-supervisor-d4/d5`, `sd-county-board-ed-d3/d5`, `palomar-ccd-area-5`, `swc-trustee-area-4`, `cvesd-seat-1/3/5`, `chula-vista-mayor`, `chula-vista-council-d1`, `chula-vista-city-attorney`, `otay-water-div-3`, plus `sd-measure-a`/`b` everywhere.

## NEW local measures

| Proposed id | Official ballot question (as printed) | Threshold | Jurisdiction | ZIPs (share) | Confirmed on |
|---|---|---|---|---|---|
| `oceanside-measure-r` | **Measure R.** "To preserve the City's ability to continue receiving state infrastructure funding for public works projects, shall the Oceanside City Charter be amended to conform to state laws and best practices regarding prevailing wage and fair competition, including the use of project labor agreements for City public works with mandatory provisions for taxpayer protections, transparency, and accountability in the contracting process, by amending Sections 301, 302, and 303 of the Oceanside City Charter?" | Simple majority (50%+1) | City of Oceanside (charter amendment) | 92054, 92056, 92057 (100%); 92058 (52%) | All 16 Oceanside-city BTs read (16, 17, 149–155, 157, 158, 160, 163, 166, 168, 177) |
| `oceanside-measure-s` | **Measure S.** "To provide locally-controlled funding for Oceanside services and infrastructure, such as keeping streets, sidewalks, parks, and public facilities safe, clean, and well-maintained; fixing potholes; improving traffic; restoring/protecting local beaches; modernizing public safety/emergency facilities to improve 911 emergency response/community safety; and repairing aging infrastructure, shall City of Oceanside's ordinance establishing a 1/2 cent sales tax be adopted, providing $20,000,000 annually for general government use for 10 years, with independent audits and citizen oversight?" | Simple majority (50%+1) | City of Oceanside (general sales tax) | same as R | same as R |
| `santee-measure-y` | **Measure Y.** "To provide funding for City of Santee services and infrastructure, such as fixing streets and potholes; keeping streets, sidewalks, parks and public facilities safe, clean, and well-maintained; repairing/replacing aging infrastructure and stormdrains; local traffic management; fire protection, paramedic, crime prevention, and 911 emergency response, shall City of Santee's measure establishing a one cent sales tax be adopted, providing approximately $14,000,000 annually for city services for 10 years, with independent audits, citizens' committee oversight, and all funds locally controlled?" | Simple majority (50%+1) | City of Santee (general sales tax) | 92071 (100%) | BT 364, 365, 368, 369, 371, 372 |
| `gcccd-measure-g` | **Measure G. Grossmont-Cuyamaca Community College District Fire Safety, Job Training, College Affordability, No Tax Rate Increase.** "With funds that cannot be taken by the State and spent elsewhere and NO tax rate increase, shall Grossmont-Cuyamaca Community College District's measure to • improve/expand career training classrooms • remove asbestos/mold • reduce wildfire threats • maintain college affordability be adopted, authorizing $624 million of bonds with legal rates, levies below $25/$100,000 assessed valuation while outstanding ($45 million annually), audits, taxpayer oversight, full disclosure of all spending?" | 55% | Grossmont-Cuyamaca CCD (bond) | 91941, 91942, 92020, 92071 (100%) | All 33 ballots read in these four ZIPs (BT 364–372, 497–594). Same id already proposed in `sd-city-scope.md` |
| `lmsvsd-measure-aa` | **Measure AA.** "La Mesa Spring Valley School District Classroom Repair & Upgrade Extension Measure. To repair/upgrade deteriorating roofs, plumbing, electrical systems; install air conditioning/shade structures to protect students from extreme heat; remove asbestos/lead pipes; and upgrade schools to current health/building safety/disability access standards, shall La Mesa Spring Valley School District's measure be adopted, authorizing $131,000,000 in bonds at legal rates (without increasing current tax rates), levying $22 per $100,000 assessed value ($9,000,000 annually) while bonds are outstanding, with independent oversight and audits?" | 55% | La Mesa-Spring Valley SD (bond) | 91942 (100%), 91941 (69%), 92020 (16%) | BT 503, 504, 508, 509, 572–578, 594. This is the measure `sd-city-scope.md` listed as `lmsvsd-bond-measure` (letter not read then); the letter is **AA** |
| `santee-sd-measure-bb` | **Measure BB.** "With funds that cannot be taken by the State and spent elsewhere, and no increase in tax rates, shall Santee Elementary School District's measure: • repairing leaky roofs, plumbing, sewer systems • updating inefficient heating, ventilation, air-conditioning systems • building multipurpose instruction classrooms • repairing aging schools, classrooms be adopted authorizing $30 million of bonds with legal rates, average levies below $13 per $100,000 of assessed valuation ($2.2 million annually) while outstanding, audits, independent oversight, and full public disclosure of all spending?" | 55% | Santee SD (bond) | 92071 (100%); 92020 (1%) | BT 364, 365, 368, 369, 371, 372, 526 |
| `vista-usd-measure-n` | **Measure N.** "Without increasing current tax rates, to repair and upgrade aging classrooms, science labs, school facilities, and instructional technology to support college/career readiness in math, science, technology, engineering, arts, and skilled trades and fix deteriorating roofs, plumbing, sewer, and electrical systems shall Vista Unified School District's measure be adopted authorizing $543,000,000 in bonds at legal rates, levying $58 per $100,000 assessed value ($31,000,000 annually) while bonds are outstanding, with citizen oversight, independent audits, and all money locally-controlled?" | 55% | Vista Unified SD (bond) | 92084 (98%), 92083 (95%), 92081 (87%), 92056 (63%), 92057 (17%) | BT 16, 17, 22, 24, 25, 28, 29, 31, 84, 154, 155, 166 |
| `fuesd-measure-k` | **Measure K.** "To update local elementary and middle schools without increasing tax rates; replace failing roofs, plumbing and electrical systems; improve school safety; construct/repair/acquire classrooms, labs, facilities, equipment, and sites; and qualify for State matching funds; shall Fallbrook Union Elementary School District's measure be adopted, authorizing $76,000,000 in bonds at legal rates, levying a projected $30 per $100,000 assessed value while bonds are outstanding, generating $5,000,000 annually, with public oversight, audits, no funds for administrators, all funds staying local?" | 55% | Fallbrook Union Elementary SD (bond) | 92058 (20%, the Camp Pendleton part in BT 172) | BT 172 |

No water, fire or hospital district measure is on any ballot read. Every Vista Unified ballot type in these ZIPs carries Measure N except the San Marcos Unified parts (BT 32, 88, 143). Every Oceanside-city ballot type carries R and S. The Camp Pendleton part of 92058 (BT 172, 175) has neither.

## Uncertain / caveats

1. **Unread ballot types (all in groups that were read):** 92020: 567, 542; 92056/92057: 15, 20, 161, 164, 165, 167; 92071: 370; 92081: 27, 169, 174; 92083/92084: 87, 297, 269. Each has the same local-contest and measure combination as a ballot that was read, so every contest in section (b) is CONFIRMED.
2. **Sample-ballot URLs for one- and two-digit ballot types need zero padding** (`SB-ENG-025.pdf`, not `SB-ENG-25.pdf`). This probably explains the 404s for BT 93, 95 and 96 in `escondido-scope.md`.
3. **Accented names.** `pdftotext` could not decode the accented letters in four printed names. The candidate list spells them without accents (VASQUEZ, JENEE, ALEGRIA, BETANCOURT-CASTANEDA). The accent positions shown above (Vásquez, Jeneé, Alegría, Castañeda) come from where the undecodable glyph sits. Check the PDF before publishing.
4. **No ballot designation:** Yolanda Kenniston Alvarez (Vista D1) and Emily Wilke (Bonsall TA B) have none, on both the ballot and the candidate list.
5. **La Mesa City Council** prints two candidates for two seats (vote for no more than two). It is effectively uncontested but still on the ballot.
6. **92058** is only 52.0% Oceanside. BT 175 (27.7%) is Camp Pendleton, mostly group quarters (Oceanside Unified TA 3 only, no city contests or measures). BT 172 (20.3%) is the Camp Pendleton / Fallbrook Union Elementary part (Palomar CCD TA 5 and Measure K, no OUSD race).
7. **91941** is 40% unincorporated. Those voters get Supervisor D4 and Measure G, and in parts Helix Div 2 or 4, LMSV TA 3 and Measure AA, but no La Mesa city contests.
8. **Shares** are 2020-population shares by block point, not voters. ZCTA is not the USPS ZIP. The share of residents in ballot types under 0.8% is at most 3.0% (92084).
9. **Built profiles that could gain contests now:** 91911 (wave 2) names Chula Vista Council D2 (~7%), Southwestern TA 1 (~8%) and Sweetwater UHSD TA 1 (~4%) as uncovered. `chula-vista-council-d2`, `swc-trustee-area-1` and `suhsd-trustee-area-1` are proposed here. 92026 (wave 2) names San Marcos Unified Area E (~7%), now `san-marcos-usd-area-e`. 92114 (`sd-city-scope.md`) has the LMSV bond at about 2%, now `lmsvsd-measure-aa`.
10. **Planning group:** the Sweetwater Community Planning Group (vote for 7) prints on BT 719 (1% of 91910) and is left out.

Working files (not in repo): scratchpad `sdcities/` (`gis/` API data and assignments, `sb/` 67 sample ballot PDFs, `rawtxt/` extracted text, `work/` scripts and outputs).
