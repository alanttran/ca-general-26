# Wave 4 scope: contests on the Nov 3, 2026 ballot for ZIP 92841 (Garden Grove, Orange County)

Researched Nov 3, 2026 (election day). Not a substitute for a voter's own sample ballot. Statewide offices, propositions, Supreme Court retention and the 4th District Court of Appeal retention are covered elsewhere and are only noted here.

## Method

1. **Contest list (official).** OC Registrar "Contests Qualified for the Ballot": `https://ocvote.gov/elections/contests-qualified-for-the-ballot-for-the-2026-general-election`.
2. **Candidates (official).** OC Registrar Contest/Candidate Proof List, qualified candidates, print date 8/28/2026: `https://ocvote.gov/fileadmin/user_upload/data/candlog/GEN2026/candlog.pdf` (contest numbers below). Candidate statements: `https://ocvote.gov/fileadmin/user_upload/elections/GEN2026/cs/<contest>-<candID>.pdf` (read for 3034, 3042, 3124, 4004, 5081, 5084, 5086).
3. **Districts and shares.** OC ROV layers on `services3.arcgis.com/slX5MYawmKdsiRUf`:
   - ZIP polygon: `Zipcode_dd83_OC_Public/FeatureServer/15` (ZIP = 92841), pulled at 0.0003° generalization.
   - Precinct-to-district master layer: `Map_Central_Precinct_to_District_Master_Select_Stats_Public/FeatureServer/1` (fields Congressional, Senatorial, State_Assembly, Supervisorial, City_Sub, Community_College_Sub, School_Unified_Sub, Water_Municipal_Sub, Water_OC_Sub, etc., plus registration by party).
   - 38 precincts intersect the ZIP polygon; a precinct was assigned to the ZIP when its centroid falls inside the polygon (16 precincts). **Shares are registered-voter shares** (sum of party registration columns), total 20,589 registered voters. This differs from the wave 3 method (2020 Census block population); expect a few points of error on edge precincts.
4. **Stanton check.** One in-ZIP precinct (27156, 1,852 voters) is in the City of Stanton. USPS-area sources (Statistical Atlas, via search) list 92841 among ZIPs that touch Stanton, so a small Stanton piece is plausible.

## Districts covering 92841

| Office | Share of ZIP | Finalists (ballot designation) | Source |
|---|---|---|---|
| U.S. House **CD-45** | 100% | Derek Tran vs. Chuong V. Vo | layer; candlog 1165 |
| State Senate **SD-36** | 100% | Tony Strickland vs. Chris Duncan | layer; candlog 1230 |
| Assembly **AD-70** | 100% | Tri Ta vs. Paula Swift | layer; candlog 1340 |
| BoE **District 4** | 100% | Tom Umberg vs. Denis Bilodeau | layer; candlog 1090 |
| Court of Appeal | 100% | 4th District, Divisions 1-3 retention | layer (Appellate_Court = 4th District) |

The CD-46 / SD-34 / AD-67 precincts that touch the polygon (16106, 16109, 21369, 02377, 14285) all have centroids outside the ZIP.

## County

- **Supervisor**: Garden Grove precincts are District 1 (not up). The Stanton precinct (about **9%**) is in **District 4**, which is up: **Tim Shaw** (Orange County Board of Education Trustee) vs. **Connor Traut** (Mayor/Business Owner). Candlog 4004. Open seat (Doug Chaffee termed out). June primary: Traut first, Shaw second (LAist; Fullerton Observer).
- No other county office is on OC's list (Sheriff, DA, etc. settled in June). No Superior Court contest. OC Board of Education Trustee Area 4 (100% of ZIP) has no seat up.

## City

- **Garden Grove** (about **91%** of the ZIP; the other 9% is Stanton):
  - **Mayor** (citywide, 2-year term): Stephanie Klopfenstein (Garden Grove Mayor/Mom, incumbent) vs. Thu-Ha Nguyen (Cancer Scientist/Teacher). Candlog 5081.
  - Council district shares in the ZIP: D2 46.2% (not up), **D3 30.7%**, **D1 14.1%**. D4 is up citywide but not in this ZIP.
  - **Council District 1** (open; George Brietigam termed out): William Zylla (Retired Emergency Technician); Long Nguyen (Urgent Care Doctor); Roger Flanders (Court Investigator). Candlog 5084.
  - **Council District 3**: Amanda Nguyen (Senior Paralegal); Thomas Quoc Thai Nguyen (Media Businessman); Cindy Ngoc Tran (Garden Grove Councilwoman/Engineer, incumbent). Candlog 5086.
  - (D4, not in ZIP: Joe DoVinh, Hieu Nguyen, Patrick Phat Bui, Amanda Mohr.)
- **Stanton** (about 9%): Council District 4 (not up). Stanton D1 and D3 are up but not in this ZIP. No Stanton mayor or measure on OC's list.

## Schools

- **Garden Grove Unified** covers 100% of the ZIP. Shares: TA1 51.9% (not up), **TA2 48.1%**. Seats up are TA2 and TA4.
  - **GGUSD Trustee Area 2**: Lan Quoc Nguyen (incumbent, Governing Board Member) vs. Charlene Cuellar (Community Volunteer). Candlog 3124 (3 filed, 2 qualified).
- **Community college** (the ZIP is split three ways, not Rancho Santiago):
  - Coast CCD TA2 51.3% (not up).
  - **North Orange County CCD Trustee Area 1, about 38%**: Barbara Dunsheath (incumbent) vs. Rama R. Maline (State Prosecutor/Professor). Candlog 3034.
  - **Coast CCD Trustee Area 1, about 11%** (the Stanton precinct plus two small Garden Grove precincts): Joe Kalmick (City of Seal Beach City Councilmember); Ashton Kauwe (Office Administrator); Austin J. Edsell (Educator/Finance Commissioner). Candlog 3042 (4 filed, 3 qualified). Open seat: Area 1 trustee Jim Moreno's term ends Dec 2026 and he is not on the list.
  - Coast TA3 (short term) and TA5, and NOCCCD TA3 and TA6, are not in this ZIP.

## Special districts

- **MWDOC Division 2, about 63%** (Division 3, 37%, is not up): Larry D. Dick, Bobby Lapointe, Mike Markus (existing race `mwdoc-division-2`).
- Orange County Water District Division 1 (100%): no seat on the list.
- Midway City Sanitary District is up but has no precinct in this ZIP (Water_Sanitation/Sanitation fields empty for all 16 precincts). Garden Grove's sanitary service is a city function.
- No other special district (library, parks, community services) covers the ZIP.

## Measures

None. OC Measures A-O are all in other jurisdictions (Westminster B and O are south of Garden Grove Blvd, outside the ZIP). No Garden Grove city, GGUSD, Stanton or countywide measure is on the ballot.

## Profile summary (ballot order by OC contest number)

`boe-d4`, `us-rep-ca45`, `senate-sd36`, `assembly-ad70`, `retention-dca4`, `nocccd-trustee-area-1` (~38%), `coast-ccd-trustee-area-1` (~11%), `ggusd-trustee-area-2` (~48%), `oc-supervisor-d4` (~9%), `garden-grove-mayor` (~91%), `garden-grove-council-d1` (~14%), `garden-grove-council-d3` (~31%), `mwdoc-division-2` (~63%).

## Decided in June / uncontested

- Supervisor D4 went to a runoff from the June primary (Traut, Shaw). Countywide offices (Sheriff, DA, etc.) were settled in June and are not on the November ballot.
- No contest covering 92841 is uncontested.

## Biggest uncertainties

1. Shares are registered-voter shares by precinct centroid against the county's ZIP polygon, not Census ZCTA population. Edge precincts could move D1/D3/TA2/college shares by a few points.
2. The Stanton precinct (27156) is the only basis for Supervisor D4 and most of Coast TA1. If the USPS ZIP excludes that precinct, both contests drop to near zero (Coast TA1 would be ~2%).
3. Candidate list is the 8/28/2026 proof list; designations could differ slightly on the printed ballot.
4. Party registrations of nonpartisan candidates are from press or party endorsement lists, not voter records.
