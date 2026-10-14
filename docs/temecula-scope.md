# City of Temecula scope: contests on the Nov 3, 2026 ballot for every ZIP mainly in Temecula

Researched Oct 14, 2026. This is scoping only: it finds which contests apply to which ZIP and in what share. No race content was written. Same population-share method as `wave3-oc-riverside-scope.md` (ZIP 92562) and the same 50% rule as `escondido-scope.md`. Already built and skipped: 92562 (Murrieta), which has no Temecula population.

## Method

1. **Which ZIPs.** Every 2020 Census block with population in a box around Temecula (TIGERweb `tigerWMS_Census2020` layer 10; 2,881 blocks, 359,886 people) was placed in its ZCTA (layer 84) by its internal point. Each block was then tested against the 2020 place boundary of **Temecula city (GEOID 0678120, layer 26; 2020 pop 110,003)**. Rule: include a ZIP if at least 50% of its population is in the city and it has at least 1,000 residents. The blocks assigned to Temecula add up to 110,003, the full city total.
2. **Districts.** The main source is the Registrar's own district layer for this election: `Nov_2026_All_Districts` (Riverside County ROV, `services1.arcgis.com/pWmBUdSlVpXStHU6/arcgis/rest/services/Nov_2026_All_Districts/FeatureServer/0`). It has 498 districts with fields `ROV_DB_DISTID`/`SUBDIST`/`DISTNAME`/`DISTTYPE`, and the IDs match the "District ID" column of the candidate list (for example 595-15 for Temecula Council District 5, 2086US-12 for TVUSD Trustee Area 2, 1520CC-13 for MSJC Trustee Area 3). I used the 81 current districts that intersect the area and skipped the "Old ..." and "Petition Checks" types. Each block point was tested against each district, and shares are population shares of the ZCTA.
3. **Cross-checks, which agreed to within 0.1 point:**
   - Riverside County GIS `OpenData/Administrative_Boundaries/MapServer`: layer 10 Prop 50 Congressional (CD-48 58.8% / CD-40 41.2% in 92590), 6 Assembly, 7 Senate, 2 Supervisorial, 5 School Districts.
   - `OpenData/General/MapServer` 470 and 480 (water districts).
   - City of Temecula council layer `gis.temeculaca.gov/arcgis/rest/services/OpenData/FeatureServer/25`. It also carries an `ELECTION` field: D1, D3 and D5 show 2026; D2 and D4 show 2028.
   - ROV precinct layers `City_of_Temecula_Dist_1_3_and_5` and `Temecula_Valley_Unified_School_District_2_3_4`.
4. **Contest list.** Registrar "Contest/Candidate Proof List, Contests On Ballot", printed 9/11/2026 (scratchpad `temecula/candidates.txt`), plus the TVUSD Measure S notice dated July 21, 2026 (`temecula/measure-s.txt`).
5. **Registrar District Lookup** (`docs.voteinfo.net/electiondatalookup/`): it returns a Cloudflare challenge page to scripted GET requests, so I did not use it. No sample ballots were read.

All queries were ArcGIS REST GET requests. Their responses are saved under scratchpad `temecula/gis/`, and the scripts are in `temecula/work/`.

## (a) Included ZIPs (3)

| ZIP | Label | 2020 pop | In City of Temecula |
|---|---|---|---|
| 92590 | West Temecula: Old Town, Jefferson Ave/business park, plus unincorporated De Luz / Santa Rosa Plateau | 4,840 | 58.3% |
| 92591 | North and central Temecula: Rancho California Rd corridor, Paloma del Sol north | 42,021 | 98.5% |
| 92592 | South and east Temecula (Redhawk, Vail Ranch, Wolf Creek, Paseo del Sol), plus unincorporated wine country / Temecula Valley east | 79,740 | 82.5% |

**Excluded:**
- **92593** is a PO-box ZIP with no ZCTA and no residents. 92589 is also PO-box only.
- **92562** (Murrieta, already built) has 0% in Temecula.
- **92563** (Murrieta east/French Valley) has 0.002% of its area and 0 residents in Temecula.
- **92028** (Fallbrook, San Diego County) has 33 residents in Temecula, about 0.06% of the ZIP.
- **No narrow misses:** no ZCTA is between 40% and 50%. 92590 is the closest call, at 58.3%.

## Seats up nearby that do not reach any included ZIP

These contests are on the Riverside list, and each one was checked against the included ZIPs.

- **TVUSD Trustee Area 3** (`tvusd-trustee-area-3`, proposed): 0.1% of 92591 and 0.5% of 92592. It is mainly Winchester/French Valley: 80% of 92596 and 14% of 92563. **Does not touch** any included ZIP above the threshold.
- **Eastern MWD Division 1** (`emwd-div-1`, proposed): 0.1% of 92591 (a few blocks), 0% elsewhere. **Effectively none.** Temecula is in **EMWD Division 2, which is not up**.
- **Eastern MWD Division 5** (`emwd-div-5`, proposed): 0% in all three ZIPs. **Does not touch.**
- **Western MWD Division 2**: 0%. The WMWD part of 92590 (42.0%) is Division 3, which is not up.
- **Elsinore Valley MWD Division 1**: 0%. No EVMWD territory is in these ZIPs.
- **Murrieta Valley USD Trustee Areas 1 and 2** (`mvusd-trustee-area-1/2`): 0%. The MVUSD part of 92590 is Trustee Area 5, which is not up.
- **County Supervisor:** all three ZIPs are 100% in District 3, and **no supervisor contest of any district is on Riverside's November list**.
- **Riverside County Board of Education:** TA7 (about 99%) and TA4 (1.3% of 92592). Neither is on the list.
- **Temecula Council Districts 1 and 3:** the city layer marks both seats as 2026 (Matt Rahn, Brenden Kalfus), but **neither appears on the Registrar's "On Ballot" list**. Presumably each had one candidate and is not on the ballot (UNCONFIRMED). In 92592 they cover D1 28.1% and D3 27.3%.
- Lake Elsinore USD TA3, Hemet City/Menifee/Murrieta/Wildomar councils, Valley-Wide Rec & Park, Valley Health System, De Luz CSD, Tenaja CSD and TEAM RCD: either not in these ZIPs or not on the list.

## (b) Per-ZIP contests

Statewide offices, SPI, Supreme Court and 4th District Court of Appeal retention (Divisions 1-3), statewide props and BoE District 4 (Umberg/Bilodeau, 100% of every ZIP) are on every ballot and are not repeated. The countywide items **Judge of the Superior Court Office #10** (`rivco-superior-court-10`, existing) and **RCTC Measure A** (`rctc-measure-a`, existing) are 100% of every ZIP, and so are listed once here.

Threshold: 8% of the ZIP. Smaller pieces go in a note.

### 92590: West Temecula / De Luz

City share 58.3%. The other 41.7% is unincorporated: De Luz CSD 39.6%, Santa Rosa Plateau.

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-48 | `us-rep-ca48` | 58.9% | existing |
| U.S. House CA-40 | `us-rep-ca40` | 41.1% | existing |
| State Senate 32 | `senate-sd32` | 100% | existing |
| Assembly 71 | `assembly-ad71` | 100% | existing |
| Superior Court Office #10 | `rivco-superior-court-10` | 100% | existing |
| RCTC Measure A | `rctc-measure-a` | 100% | existing |
| Temecula City Council District 5 | `temecula-council-d5` | 58.3% (the whole city part) | NEW |
| TVUSD Measure S (bond) | `tvusd-measure-s` | 59.6% | NEW |
| MVUSD Measure M (bond) | `mvusd-measure-m` | 40.4% | existing |
| Rancho California Water District (vote for 4) | `rcwd-board` | 98.8% | existing |

Notes:
- School districts are TVUSD 59.6% (all of it in TA1, not up) and MVUSD 40.4% (all of it in TA5, not up). **No trustee contest.**
- MSJC: 100% in TA5, not up.
- Water: EMWD Div 2 58.0% and WMWD Div 3 42.0%. Neither is up.

### 92591: North and central Temecula

City share 98.5%.

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-48 | `us-rep-ca48` | 100% | existing |
| State Senate 32 | `senate-sd32` | 100% | existing |
| Assembly 71 | `assembly-ad71` | 100% | existing |
| Superior Court Office #10 | `rivco-superior-court-10` | 100% | existing |
| RCTC Measure A | `rctc-measure-a` | 100% | existing |
| Temecula City Council District 5 | `temecula-council-d5` | 42.6% | NEW |
| TVUSD Trustee Area 2 | `tvusd-trustee-area-2` | 63.8% | NEW |
| TVUSD Measure S (bond) | `tvusd-measure-s` | 100% | NEW |
| Mt. San Jacinto CCD Trustee Area 3 | `msjc-trustee-area-3` | 12.7% | NEW |
| Rancho California Water District (vote for 4) | `rcwd-board` | 94.8% | existing |

Notes:
- Council: D4 52.8% and D2 3.0%, neither up.
- TVUSD: TA1 35.0% (not up), TA4 1.1%, TA3 0.1%.
- MSJC: TA5 87.3%, not up.
- Water: EMWD Div 2 99.9%; EMWD Div 1 0.1%.

### 92592: South and east Temecula / Temecula Valley east

City share 82.5%. The other 17.5% is unincorporated wine country and east valley.

| Contest | Race id | Share | Status |
|---|---|---|---|
| U.S. House CA-48 | `us-rep-ca48` | 100% | existing |
| State Senate 32 | `senate-sd32` | 100% | existing |
| Assembly 71 | `assembly-ad71` | 97.4% | existing |
| Superior Court Office #10 | `rivco-superior-court-10` | 100% | existing |
| RCTC Measure A | `rctc-measure-a` | 100% | existing |
| TVUSD Trustee Area 4 | `tvusd-trustee-area-4` | 40.5% | NEW |
| TVUSD Measure S (bond) | `tvusd-measure-s` | 99.7% | NEW |
| Rancho California Water District (vote for 4) | `rcwd-board` | 96.7% | existing |

Notes (under 8%, or seats not up):
- Assembly 36 is 2.6% of the ZIP, in the far east rural part. There is no existing `assembly-ad36` id.
- **Temecula Council D5 is only 2.2%, so it is note only.** The city part of 92592 is D1 28.1%, D3 27.3% and D2 24.9%, and none of those has a contest on the ballot.
- TVUSD: TA5 40.0% and TA1 18.7% (not up), TA3 0.5%. Hemet USD TA7 is 0.3%; its seat is up (contest 2454) but the sliver is far below threshold.
- MSJC: TA3 3.7%, below threshold. TA1 67.9% and TA5 28.4% are not up.
- Water: EMWD Div 2 97.9% (not up), WMWD Div 3 0.1%. Valley-Wide Rec & Park Div 5 is 2.9%, with no contest.

## (c) NEW contests (each 8% or more of some included ZIP)

| Id | Official title (Registrar list) | Contest # / district ID | Candidates on list (ballot designation) | ZIPs (share) |
|---|---|---|---|---|
| `temecula-council-d5` | City of Temecula, City Council Member, District 5 | 3955 / 595-15; vote for 1, 4 qualified | Zak Schwank (Temecula Council Member, incumbent); Yuan Hawkes (Community Volunteer / Educator); Laurel LaMont (Grocery Worker); Russell Shirley (Firefighter / Paramedic) | 92590 (58.3%), 92591 (42.6%); 92592 2.2% note only |
| `tvusd-trustee-area-2` | Temecula Valley USD, Governing Board Member, Trustee Area 2 | 2662 / 2086US-12; 2 qualified | Emil Roger Barham (incumbent; Governing Board Member TVUSD, Trustee Area 2); Brian Emmert (Father / Businessman) | 92591 (63.8%) |
| `tvusd-trustee-area-4` | Temecula Valley USD, Governing Board Member, Trustee Area 4 | 2664 / 2086US-14; 2 qualified | Joseph Komrosky (School Board Trustee, incumbent); David Sola (STEM Education Director) | 92592 (40.5%); 92591 1.1% note |
| `tvusd-measure-s` | Temecula Valley Unified School District, Measure S | notice of July 21, 2026 | $215,000,000 GO bonds, about $20 per $100,000 assessed value, about $13M/yr while bonds are outstanding, citizen oversight and audits | 92591 (100%), 92592 (99.7%), 92590 (59.6%) |
| `msjc-trustee-area-3` | Mt. San Jacinto Community College District, Governing Board Member, Trustee Area 3 | 2120 / 1520CC-13; 3 qualified | Vicki Carpenter (Mt San Jacinto Board Member Trustee, incumbent); Robert Douglas (Director Board Member); Sergei Vinkov (Legal Document Assistant) | 92591 (12.7%); 92592 3.7% note |

**Proposed ids that are NOT needed for these ZIPs:**
- `tvusd-trustee-area-3`: at most 0.5% of any included ZIP. It would matter for 92596 (80%) and 92563 (14%) if those are ever built.
- `emwd-div-1`: 0.1% of 92591 only.
- `emwd-div-5`: 0%.

**Existing ids reused:** `us-rep-ca48`, `us-rep-ca40` (92590 only), `senate-sd32`, `assembly-ad71`, `rivco-superior-court-10`, `rctc-measure-a`, `rcwd-board`, `mvusd-measure-m` (92590 only).

**On Temecula and MSJC:** Temecula **is** in Mt. San Jacinto CCD; no other college district reaches these ZIPs. Most of the city is in TA5 (92590, most of 92591) or TA1 (most of 92592). Only a strip of north 92591 is in TA3.

## Uncertain / caveats

1. **No sample ballot or Registrar lookup was checked.** The lookup is behind a Cloudflare challenge. Shares rest on the Registrar's own `Nov_2026_All_Districts` layer, and the county, city and ROV precinct layers agree with it. The district layer was fetched with about 5 m generalization (`maxAllowableOffset` 0.00005°), which could move a few edge blocks.
2. **Temecula Council D1 and D3** are 2026 seats in the city layer but are missing from the "On Ballot" list. My guess is that each had only one candidate and so has no contest, but I could not confirm this. Either way, nothing goes on the ballot.
3. **Measure S vote threshold** is not stated in the notice. It is presumably 55% (Prop 39 school bond), which is unconfirmed. The measure list of other Riverside measures comes from the 92562 doc (Beaumont B, Hemet I, Perris AA, Temecula S, Desert Rec P, MVUSD M, RCTC A). No City of Temecula measure was found, but I did not check the full Riverside measure list again.
4. **TVUSD Trustee Area 3** shows "4" candidates and "2" qualified (Karen Poznanski, Ronda Bowen visible); it does not affect these ZIPs.
5. **RCWD** shares come from the ROV layer (98.8 / 94.8 / 96.7%); the county minor-water layer gives 98.8 / 96.3 / 93.7%. Either way RCWD is above 90% in all three ZIPs. RCWD lies inside EMWD/WMWD; the shares overlap and do not add up.
6. **92590 is small** (4,840) and only 58.3% Temecula. Its unincorporated 41.7% (De Luz/Santa Rosa Plateau) is in CD-40 and MVUSD (Measure M) instead of CD-48 and TVUSD (Measure S). The unincorporated part does not vote in Council D5.
7. Shares are 2020-population shares by block internal point, not voter shares; a ZCTA is not the same as a USPS ZIP.

Working files (not in repo): scratchpad `temecula/` (`gis/` GET query responses, `work/` scripts).
