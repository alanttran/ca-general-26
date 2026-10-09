# City of Escondido scope: contests on the Nov 3, 2026 ballot for every ZIP mainly in Escondido

Researched Oct 9, 2026. Same method as `sd-city-scope.md` (Census blocks vs. city boundary, County ballot-type layer `Ballot_Types_NOV2026`, precinct district-code layer `Find_Your_Dist_Map_AUG_2026_MIL1/MapServer/20`, Registrar candidate list R740.03 of 8/28/2026 with its "Election = YES/NO" flag, and printed sample ballots). Already built and skipped: 92026 (`profiles-sd-wave2.ts`).

## Method

1. **Which ZIPs.** Every 2020 Census block with population in San Diego County (TIGERweb `tigerWMS_Census2020` layer 10) was placed in its ZCTA (layer 84) by internal point and tested against the 2020 place boundary of **Escondido city (GEOID 0622804, layer 26; 2020 pop 151,038)**. Rule: include a ZIP if at least 50% of its population is in the city and it has at least 1,000 residents.
2. **Ballot types.** Each block was assigned to a `Ballot_Types_NOV2026` polygon (field `BT`) and weighted by block population. Ballot types under 0.8% of a ZIP are dropped; contest shares are taken over the rest.
3. **Contests per ballot type** from the precinct district codes (CONG, SEN, ASSM, SUPV, BOED, CITYO, CTYCC, SCHCT, SCHE/SCHET, SCHHT, SCHUT, HOSPZ, WMWDD, FIRED, FIREO), keeping only seats with "Election = YES" on the candidate list.
4. **Checked against printed ballots.** The 27 ballot-type groups (by local-contest combination) were checked against official sample ballots (`SB-ENG-<BT>.pdf`, text by `pdftotext`). Already on hand from wave 2: BT 90, 94, 101, 113, 434. New downloads this round: 14 ballots (102, 103, 104, 108, 110, 112, 417, 422, 431, 440, 443, 446, 448, 451); three more requests (BT 93, 95, 96) returned 404 pages and no ballot. **On all 19 ballots read, the printed contests matched the GIS prediction exactly** (CD, SD, AD, every local contest, and County Measures A and B as the only measures). No City of Escondido measure and no school, water or hospital measure is on any ballot read.
5. Candidates and ballot designations are as printed on the sample ballots and agree with the candidate list.

"CONFIRMED" = printed on at least one sample ballot read for that ZIP. "GIS only" = only on ballot types not read for that ZIP (the same contest is confirmed on another ballot).

## (a) Included ZIPs (3)

| ZIP | Label | 2020 pop | In City of Escondido |
|---|---|---|---|
| 92025 | Central and south Escondido | 51,586 | 89.4% |
| 92027 | East Escondido | 56,840 | 93.0% |
| 92029 | Southwest Escondido / Felicita / Harmony Grove | 21,236 | 65.1% |

**Excluded:** 92026 is 72.4% in the city but already built. No other San Diego County ZCTA has any Escondido population (92069, 92078, 92082 and 92064 all 0%).

## Seats up nearby that print on no ballot ("Election = NO")

Palomar Health Div 1; MiraCosta CCD TA 2; San Pasqual Union SD TA 2, 3, 4; San Marcos Unified TA C; Valley Center-Pauma Unified TA 2, 3; Rincon del Diablo MWD Div 1 and 4; Questhaven MWD Div 1, 3, 5; Olivenhain MWD Div 1; Valley Center MWD Div 2; Rancho Santa Fe Fire; San Dieguito Community Planning Group. No seat is up at all in Escondido City Council Districts 3 and 4, Palomar CCD Areas 2 and 4, Palomar Health Divisions 4 and 6, Supervisor Districts 2 and 3, or County Board of Education District 4.

## (b) Per-ZIP contests

Statewide offices, retention, SPI, statewide props and the countywide items `sd()` adds (BOE-4, Assessor, Treasurer-Tax Collector, County Measures A and B) are on every ballot and not repeated.

### 92025 — Central and south Escondido

City share 89.4%. Ballot types (≥0.8%, * = sample ballot read): 90* (22.4%), 104* (17.1%), 103* (10.4%), 448* (8.6%), 110* (7.0%), 422* (6.9%), 447 (3.3%), 112* (3.1%), 117 (2.9%), 446* (2.5%), 443* (2.5%), 116 (2.2%), 106 (2.0%), 111 (1.3%), 105 (1.2%), 460 (1.1%), 449 (0.8%); under 0.8%: 4.6%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-48 | `us-rep-ca48` | 73% | existing, CONFIRMED |
| U.S. House CA-50 | `us-rep-ca50` | 27% | existing, CONFIRMED |
| State Senate 40 | `senate-sd40` | 100% | existing, CONFIRMED |
| Assembly 76 | `assembly-ad76` | 100% | existing, CONFIRMED |
| Supervisor District 5 | `sd-supervisor-d5` | 93% | existing, CONFIRMED |
| EUHSD Trustee Area 1 | `euhsd-trustee-area-1` | 44% | NEW, CONFIRMED |
| EUHSD Trustee Area 2 | `euhsd-trustee-area-2` | 8% | existing, CONFIRMED |
| EUSD Trustee Area 2 | `eusd-trustee-area-2` | 11% | NEW, CONFIRMED |
| Escondido Mayor | `escondido-mayor` | 92% | existing, CONFIRMED |
| Escondido Council D1 | `escondido-council-d1` | 24% | existing, CONFIRMED |
| Rincon del Diablo MWD Div 3 | `rincon-water-div-3` | 40% | NEW, CONFIRMED |
| Palomar Health Div 3 | `palomar-health-div-3` | 17% | NEW, CONFIRMED |

### 92027 — East Escondido

City share 93.0%. Ballot types: 108* (17.7%), 102* (12.7%), 435 (12.3%), 95 (8.7%), 90* (7.1%), 103* (6.2%), 94* (5.7%), 110* (4.2%), 431* (3.6%), 422* (3.1%), 93 (2.7%), 434* (2.7%), 101* (2.5%), 96 (2.1%), 416 (1.6%), 438 (1.6%), 436 (1.4%), 401 (1.2%), 439 (1.1%); under 0.8%: 1.8%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-48 | `us-rep-ca48` | 71% | existing, CONFIRMED |
| U.S. House CA-50 | `us-rep-ca50` | 29% | existing, CONFIRMED |
| State Senate 40 | `senate-sd40` | 100% | existing, CONFIRMED |
| Assembly 76 | `assembly-ad76` | 99% | existing, CONFIRMED |
| Supervisor District 5 | `sd-supervisor-d5` | 95% | existing, CONFIRMED |
| EUHSD Trustee Area 5 | `euhsd-trustee-area-5` | 14% | existing, CONFIRMED |
| EUHSD Trustee Area 1 | `euhsd-trustee-area-1` | 7% (sliver, note only) | NEW, CONFIRMED |
| EUSD Trustee Area 4 | `eusd-trustee-area-4` | 54% | NEW, CONFIRMED |
| EUSD Trustee Area 5 | `eusd-trustee-area-5` | 13% | existing, CONFIRMED |
| Escondido Mayor | `escondido-mayor` | 94% | existing, CONFIRMED |
| Escondido Council D2 | `escondido-council-d2` | 34% | existing, CONFIRMED |
| Escondido Council D1 | `escondido-council-d1` | 27% | existing, CONFIRMED |
| Rincon del Diablo MWD Div 3 | `rincon-water-div-3` | 9% | NEW, CONFIRMED |
| Assembly 75; Valley Center-Pauma USD TA 4 (BT 401) | — | 1% each (note only) | GIS only |

### 92029 — Southwest Escondido / Felicita / Harmony Grove

City share 65.1%. Ballot types: 440* (35.2%), 444 (16.2%), 417* (15.4%), 113* (13.6%), 427 (12.1%), 451* (3.5%), 184 (2.6%); under 0.8%: 1.5%

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-50 | `us-rep-ca50` | 84% | existing, CONFIRMED |
| U.S. House CA-48 | `us-rep-ca48` | 14% | existing, CONFIRMED |
| State Senate 40 | `senate-sd40` | 97% | existing, CONFIRMED |
| Assembly 76 | `assembly-ad76` | 100% | existing, CONFIRMED |
| Supervisor District 5 | `sd-supervisor-d5` | 69% | existing, CONFIRMED |
| Palomar CCD Trustee Area 1 | `palomar-ccd-area-1` | 67% | existing, CONFIRMED |
| EUHSD Trustee Area 2 | `euhsd-trustee-area-2` | 97% | existing, CONFIRMED |
| EUSD Trustee Area 2 | `eusd-trustee-area-2` | 97% | NEW, CONFIRMED |
| Escondido Mayor | `escondido-mayor` | 66% | existing, CONFIRMED |
| Palomar Health Div 3 | `palomar-health-div-3` | 97% | NEW, CONFIRMED |
| BT 184 (Elfin Forest): CA-49, SD-38, County BOE 5, Rancho Santa Fe SD board | — | 3% (note only) | GIS only |

## (c) NEW contests (all ≥8% of some included ZIP)

| Id | Official title (as printed) | Candidates (ballot designation, printed order on the BT read) | ZIPs (share) | Confirmed on |
|---|---|---|---|---|
| `euhsd-trustee-area-1` | Escondido Union High School District, Governing Board Member, Trustee Area No. 1 | Nina Haines (Businessowner); Bob Weller (Governing Board Member, Escondido Union High School District) | 92025 (44%), 92027 (7%) | BT 90, 104 |
| `eusd-trustee-area-2` | Escondido Union School District, Governing Board Member, Trustee Area No. 2 | Elizabeth Shulok (Parent/Education Advocate); Chris Ranglas (University Project Manager) | 92029 (97%), 92025 (11%) | BT 112, 113, 417, 440, 443, 446, 451 |
| `eusd-trustee-area-4` | Escondido Union School District, Governing Board Member, Trustee Area No. 4 | Zesty Harper (Governing Board Member, Escondido Union School District); Maggie Cascio (School Volunteer) | 92027 (54%) | BT 102, 108 |
| `palomar-health-div-3` | Palomar Health District, Member, Board of Directors, Division No. 3 | Laurie Edwards-Tate (Incumbent); Sarah Telahun (Registered Nurse, Kaiser Permanente) | 92029 (97%), 92025 (17%); also 92026 (~17%) and a 92127 sliver | BT 113, 417, 440, 446, 448, 451 |
| `rincon-water-div-3` | Rincon del Diablo Municipal Water District, Member, Board of Directors, Division No. 3 | Kenneth Hoving (Appointed Incumbent); Abel Martinez (Cybersecurity Engineer) | 92025 (40%), 92027 (9%) | BT 110, 422, 443, 446, 448 |

Sources for candidate content: candidate statements printed in the sample ballots (BT 104, 108, 110, 440); KPBS 2026 endorsement guide (Sept. 30, 2026); Ballotpedia (Weller, Harper); campaign sites (bobweller.com, shulok.org, zestyforschoolboard.com, abel4waterboard.com); Rincon del Diablo MWD board page and Division 3 vacancy notice; Voice of San Diego (Nov. 10, 2022) and Georgetown Free Speech Tracker / Palomar Health board agenda (June 2024) for Edwards-Tate; Healthcare Innovation (July 2026) on the Palomar–UCSD joint powers authority.

## Uncertain / caveats

1. **Unread groups (GIS only):** BT 93, 95, 96 (sample ballot URLs returned 404), 105, 116/447/439 (read via BT 110), 416 (no local contest), 449, 460, 184 (Elfin Forest sliver), 401 (Lake Wohlford sliver). BT 95 is the largest (8.7% of 92027; Council D1 + EUSD TA 4); each of its contests is confirmed on other ballots.
2. Shares are 2020-population shares by block point, not voters; ZCTA is not the USPS ZIP. 92025 has 4.6% of residents in ballot types under 0.8%.
3. 92026 (built earlier) lists Palomar Health Div 3 (~17%) only in its note; now that `palomar-health-div-3` exists it could be added to that profile.
4. Edwards-Tate’s 2023–24 federal lawsuit against the district is noted, not flagged: she was the plaintiff, the board’s investigation produced no finding against her, and the suit was dismissed.

Working files (not in repo): scratchpad `esc/` (`gis/`, `sb/` 14 sample ballot PDFs, `sbtxt/`, `work/` scripts and outputs).
