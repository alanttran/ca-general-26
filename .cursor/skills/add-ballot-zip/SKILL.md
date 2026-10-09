---
name: add-ballot-zip
description: >-
  Research standard for the ca-general-26 voter guide (Nov 3, 2026 California general
  election): how to write race files (candidates, propositions, local measures, judicial
  retention), typology picks, sourcing, and ZIP profile wiring. Use when adding a ZIP,
  a race, or a measure.
---

# ca-general-26 research & data standard

Election: **Tuesday, November 3, 2026 — California gubernatorial general election.** Today’s research must reflect the **general** (top-two finalists from the June 2 primary, plus propositions and retention votes). Write fresh from current sources; do not copy primary-era prose.

## 1. Files

| File | Purpose |
|------|---------|
| `site/src/types/ballot-types.ts` | Schema — read it first. |
| `site/src/data/races/helpers.ts` | `ct()` helper for the 9 typology rows. |
| `site/src/data/races/<group>.ts` | One file per research group; exports `export const RACES_<GROUP>: Race[]`. |
| `site/src/data/races/index.ts` | Registry: spread each file into `STATEWIDE_RACES` (every ZIP) or `LOCAL_RACES` (only ZIPs that list the id). |
| `site/src/data/ballot-profiles.ts` | Per-ZIP `localRaceIds` in **printed ballot order**. |
| `site/scripts/wiki-portrait-map.mjs` | `candidateId: 'Wikipedia_Title'` for portrait fetch. |

There are **no TL;DR files** — the summary matrix is generated from each race’s `crossTypology`. Use `tldrLabel` for a short row label (e.g. `Prop 1 — Housing bond`, `CA-50`).

## 2. Categories (ballot order)

`statewide` (Governor…Insurance Commissioner, BoE) · `federal` · `state-leg` · `judicial` (retention) · `school` (SPI, school boards) · `county` · `city` · `district` (water, hospital, etc.) · `state-props` · `local-measures`.

## 3. Race ids

kebab-case, stable: `governor`, `lt-governor`, `secretary-state`, `controller`, `treasurer`, `attorney-general`, `insurance-commissioner`, `boe-d4`, `us-rep-ca50`, `senate-sd40`, `assembly-ad78`, `retention-supreme`, `retention-dca4`, `spi`, `prop-1` … `prop-45`, `sd-county-treasurer`, `sd-city-council-d6`, `sd-measure-a`, `sdusd-measure-m`. Prefix local ids with the jurisdiction (`sd-`, `la-`, `oc-`, `rivco-`, `placer-`, `alameda-`, `scc-`, or the city/district short name).

Candidate ids must be **globally unique** — use `firstname-lastname` (e.g. `steve-cohen`, `larry-cohen`, `malia-cohen`).

## 4. Candidate race template

```ts
{
  id: 'assembly-ad78',
  categoryId: 'state-leg',
  title: 'State Assembly, District 78',
  tldrLabel: 'AD-78',
  seatContext: 'Incumbent',            // or 'Open seat', 'Appointed incumbent', etc.
  kind: 'candidates',
  stakesParagraphs: ['office powers…', 'what is at stake this cycle…'],   // exactly 2
  introParagraphs: ['June primary result (shares) + what the runoff turns on…'], // 1–2
  readingLinks: [{ label: 'KPBS debate (Oct 2026)', url: 'https://…', summary: '…' }], // debates/forums/explainers, optional
  polling: [{ resultDisplay: 'Peters 54%, Cohen 37%', pollsterCredit: '…', fieldDatesLabel: 'Sep 2026', sourceUrl: 'https://…' }], // only real, cited polls
  candidates: [ /* §5 */ ],
  crossTypology: ct([ ['PL','Ward','●','…'], …9 rows… ]),
  counterArguments: ['EL (Ward ●): But consider … because …'],  // 1–3
}
```

## 5. Candidate card

```ts
{
  id: 'chris-ward', name: 'Chris Ward', party: 'D',   // 'D' | 'R' | 'Green' | 'PF' | 'L' | 'NP'
  role: 'Member of the State Assembly, 78th District', // ballot designation as printed
  campaignUrl: 'https://…',                            // official campaign/office site if found
  photoSlug: 'chris-ward',                             // ONLY if you also add a wiki-portrait-map entry with a verified Wikipedia title
  bio: ['2–3 sentences: background, record', 'optional second paragraph'],
  recordVsChange: 'incumbents only: what they delivered vs. case for change',
  scorecard: [ { topic: 'Housing', position: '✓ …', comparison: 'vs opponent …' }, … ], // 4–6 rows, REQUIRED
  money: 'Cal-Access / FEC totals with as-of date',
  endorsements: 'major orgs, party, papers (dated)',
  redFlags: [{ severity: 'serious', status: 'settled', text: '…', whyItMatters: '…', sources: [{ label: 'CalMatters', url: 'https://…' }] }], // see §8a
  notes: ['FYI items; bare https:// links become links'],
}
```

Scorecard symbols: `✓✓` strong support · `✓` support · `✗` oppose · `~` mixed · `?` unclear. Topics by office: U.S. House (Housing, Climate, Health care, Immigration, Trump/House majority, District clout); Legislature (Housing & transit, Climate, Education, Public safety, Taxes, Caucus/ideology); statewide execs (office-specific duties + 3–4 policy rows); county/city (office duties, budget, housing/homelessness, public safety, transparency).

**Multi-seat contests** (“vote for up to 3”): set `voteFor: 3`; each typology pick lists up to that many last names separated by `, ` (e.g. `'Clark, Hargrave, Sanchez'`), or `—`. Nonpartisan local offices use party `'NP'`; mention known party registration/endorsements in bio or endorsements. Low-information local races still need a scorecard and qualification — use `?`/`unknown` honestly where the record is empty (candidate statements in the county voter guide, local news Q&As, and VOTE411 are good sources).

**Unopposed:** one candidate, short bio, 1–2 scorecard rows; the header auto-labels “Unopposed”. All 9 picks = that name with ● (or `—` with rationale if a column should leave it blank / write in).

## 6. Measures (state props + local)

```ts
{
  id: 'prop-1', categoryId: 'state-props', title: 'Prop 1 — Housing affordability bond ($11.25B)', tldrLabel: 'Prop 1 — Housing bond',
  kind: 'measure', candidates: [],
  stakesParagraphs: [2], introParagraphs: [1–2: how it got on the ballot, current polling/money],
  measure: {
    question: 'official ballot label text (condensed ok)',
    measureType: 'Legislative statute (bond)', voteThreshold: 'Simple majority',  // '55%' school bonds, '2/3' special taxes
    fiscalImpact: 'LAO / official fiscal summary',
    supporters: 'as printed on ballot label', opponents: '…',
    voterConnection: ['who pays / who benefits / why it matters to an ordinary voter'],  // 3–5
    mechanismBullets: ['exact amounts, rules, sunset, oversight'],                      // 4–7
    argumentsFor: [3–5], argumentsAgainst: [3–5],
    readingLinks: [LAO analysis, SoS voter guide page, CalMatters/other explainers, Yes and No campaign sites],
  },
  crossTypology: ct([...9 rows, pick 'Yes' | 'No' | '—']),
  counterArguments: [1–3],
}
```

## 7. Judicial retention

One race per court group: `retention-supreme` (statewide, `categoryId: 'judicial'`) and `retention-dca<N>` per Court of Appeal district.

```ts
{ id: 'retention-dca4', categoryId: 'judicial', title: 'Court of Appeal, 4th District — retention', tldrLabel: 'Appeals Court (4th Dist.)',
  kind: 'retention', candidates: [], stakesParagraphs: [2], introParagraphs: [1],
  retention: { justices: [{ name, court, title: 'Associate Justice', appointedBy: 'Newsom (2023)', notes: ['…'], redFlags?: [...], sources: [{label:'Court bio', url}] }] },
  crossTypology: ct([['PL','Yes on all','●','…'], …]),   // picks start with Yes/No; e.g. 'Yes on all', 'Yes on all but Smith'
}
```

Notes: prior job, appointing governor, notable opinions (with links), prior retention %, Commission on Judicial Performance discipline (red flag, sourced). Organized “Vote No” campaigns are worth noting neutrally.

## 8. Cross-typology picks (9 Pew columns)

PL Progressive Left · EL Establishment Liberals · DM Democratic Mainstays · OL Outsider Left · SS Stressed Sideliners · AR Ambivalent Right · PR Populist Right · CC Committed Conservatives · FF Faith and Flag Conservatives. Pew chapters: https://www.pewresearch.org/politics/2021/11/09/beyond-red-vs-blue-the-political-typology-2/

- Each race has exactly **one row per code**. Confidence: `●` clear fit, `◐` defensible trade-off, `○` weak lean, `—` skip (pick `—`).
- **D vs R race:** PL/EL/DM/OL must pick the Democrat (build fails otherwise; rationales under those columns must not read conservative). PR/CC/FF usually the Republican. SS and AR are judgment calls — explain.
- **Same-party race (D vs D / R vs R):** pick on ideology — say *in the rationale* which finalist is further left/right, more establishment/outsider, and why that fits the column.
- **Measures:** Yes/No by what that typology values (taxes, spending, regulation, social issues, institutional trust). Explain the value, not the outcome you prefer.
- Rationales are third person about the voter group (“Establishment Liberals value…”), one sentence, specific to this race.
- **Fit + experience switches:** when the combined view switches a pick (a ◐/○ pick whose rival is 2+ experience levels higher, or a `—` cell with a clear most-experienced candidate), add a 5th `ct()` element: one or two sentences (≤55 words) on why an experience-first voter in that group could back the switched-to candidate, and what they give up. Name red flags and cross-party votes plainly. The build fails if a switched pick lacks one, or an unswitched pick has one.

## 5b. Experience for the job (every candidate race)

On the race: `legalRequirements` (one line: statutory/constitutional eligibility, e.g. “Registered voter; State Bar member 5+ years” for AG) and 3–5 `qualificationCriteria` — what the job actually requires, office-specific and party-neutral (e.g. Controller: public-sector accounting/audit; managing a large finance operation; fiscal reporting & transparency; independence from the Legislature). Legislature/Congress criteria should be about the work (lawmaking or policy experience, constituent services, budget/committee work, knowledge of the district) — never ideology.

On each candidate, `qualification`:
```ts
qualification: {
  level: 'extensive' | 'substantial' | 'some' | 'limited',
  legal: 'meets',                       // 'does-not-meet' only with a documented basis
  summary: 'One or two plain sentences.',
  criteria: [{ criterionId: 'audit', assessment: 'met' | 'partial' | 'not-met' | 'unknown', evidence: 'Specific roles, years, scale.' }],
  externalRating?: { source, rating, url, dateLabel },  // bar association / JNE rating, verbatim
}
```
Levels: **extensive** = held this office or direct equivalent / nearly every criterion with years of evidence; **substantial** = most criteria via closely related roles; **some** = some criteria, real gaps; **limited** = little documented experience. Rate incumbents and challengers by the same yardstick; evidence must be checkable (no adjectives). Experience informs but never mechanically drives typology picks.

## 8a. Red flags (tiered)

Every flag: `severity`, `status`, neutral `text` (include the candidate’s response if any), one-sentence `whyItMatters` tied to **this office**, and ≥1 `sources` link. Rubric (also in `src/data/red-flags.ts`):

| Tier | Use for |
|------|---------|
| `severe` | conviction or criminal charge; official misconduct/ethics finding (court, FPPC, State Bar, CJP, IG); sustained harassment/abuse finding; ties to extremist groups; acting to overturn an election |
| `serious` | active investigation; settlement of misconduct claims; documented ethics or campaign-finance problem; credible lawsuit or dismissal tied to conduct in office |
| `notable` | conflicts of interest, donor/self-dealing concerns, documented management failures in an office they ran |
| not a flag | policy disagreements, opponents’ attacks, interest-group criticism of positions → `notes` |

`status`: `convicted` · `charged` · `official-finding` · `settled` · `under-investigation` · `documented` (on the public record, e.g. late filings) · `alleged` · `disputed` · `cleared`. When a matter was investigated and closed, say so and use `cleared` (and usually downgrade or drop it).

Effect on picks (build-enforced): a candidate with a **severe** flag can’t get ● in any column, and the rationale should name the flag; any **severe/serious** flag on a picked candidate must be addressed in `counterArguments` (mention the candidate’s last name). Only severe flags outline the card in red; the TL;DR matrix shows a ⚑ next to picks with severe/serious flags.

## 9. Sourcing & tone

Source ranking: official (SoS, LAO, county registrar, court sites, Cal-Access, FEC) → nonpartisan news (CalMatters, AP, LA Times/SD Union-Tribune news side, KPBS, LAist, KQED, Politico CA, Voice of San Diego) → reference (Ballotpedia, Wikipedia) → partisan/endorser lists (label them) → editorial boards (label as opinion). Exclude single-source partisan blogs. Every red flag needs at least one source link. Never invent numbers, polls, endorsements, or quotes — if you can’t verify, omit or mark `?`. Neutral, plain language; no snark. Dates on money/endorsements (“as of Sept 30, 2026”).

## 10. Checklist

- [ ] Every race: 2 stakes paragraphs, intro, 9 typology rows, 1–3 counter-arguments
- [ ] Every contested candidate: bio + 4–6 row scorecard; red flags tiered (§8a) and sourced
- [ ] Every candidate race: legalRequirements + 3–5 qualificationCriteria; every candidate has `qualification` (§5b)
- [ ] Measures: question, type, threshold, fiscal impact, supporters/opponents, for/against, reading links
- [ ] File registered in `races/index.ts`; local ids listed in each ZIP profile in ballot order
- [ ] `cd site && npm run build` passes
- [ ] Changelog entry (`site-updates.ts`) + `meta.ts` date
