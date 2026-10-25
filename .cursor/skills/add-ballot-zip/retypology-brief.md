# Brief: re-derive picks for Pew’s 2026 typology

The guide (repo `ca-general-26`, Vite + TS in `site/`) gives nine typology picks per contest. Pew replaced its 2021 groups with nine **new** groups in June 2026. The user chose a **full re-derivation from scratch**: every pick, rationale, counter-argument and measure hinge in your assigned files is rewritten for the 2026 groups. Do not translate or map old picks; the 2026 groups are new clusters.

## Read first
1. `.cursor/skills/add-ballot-zip/typology-2026.md`: the nine groups, issue grid, and how each weighs a ballot choice. This is your source of truth for group values.
2. `.cursor/skills/add-ballot-zip/SKILL.md` §6–8a: data formats, red-flag rules and the experience-switch rule.
3. Your assigned race files in `site/src/data/races/`.

## What to change (only these)
- Every `crossTypology` block: replace with exactly nine rows in this order: `LP, LL, LO, OO, TM, PP, UR, FC, NA`. Format: `ct([[code, pick, confidence, rationale, experienceRationale?], …])`. Some court files build rows through a local helper; rewrite those rows the same way.
- Every `counterArguments` array: rewrite with 2026 codes, `CODE (Pick ●): But consider …, because …`, with 1–3 lines aimed at the most contestable picks. Any severe or serious red flag on a picked candidate must be addressed there (the build enforces this).
- Every measure `hinges` object: nine keys in the same order. Each value is `Yes if … No if …`, one or two sentences per side, specific to the measure and the group’s values.
- Any other prose in your files that names a 2021 group (Progressive Left, Establishment Liberals, Democratic Mainstays, Outsider Left, Stressed Sideliners, Ambivalent Right, Populist Right, Committed Conservatives, Faith and Flag): rewrite it without them.

Do **not** change candidate facts, bios, scorecards, red flags, qualifications, measure details, links, ids or anything else.

## How to decide picks
- Base picks on the facts already in the file (positions, scorecards, endorsements, record, red flags, measure mechanics, fiscal impact) together with `typology-2026.md`. Ignore the old rows’ reasoning entirely.
- Values first, party as tiebreak. LP and LL must pick the Democrat in a D-vs-R race (build rule). Every other column is judged on values. Mixed groups (LO, OO, TM, PP, UR) may cross party lines when values support it; say why.
- Use distinctive traits: PP weighs civility, competence, incrementalism and rule of law and penalizes combativeness and extremism; LO distrusts insiders and self-dealing; OO wants economic help plus public safety and order; TM is pocketbook-first and least ideological; UR is immigration- and small-government-focused but socially mixed and lukewarm on Trump; FC is faith and social conservatism first; NA is combative MAGA and deregulatory; LL is institutional and expert-trusting; LP is the most left and the most anti-billionaire.
- Confidence: ● clear fit, ◐ defensible trade-off, ○ weak lean, `—` skip (pick `—`, used rarely). A candidate with a severe flag can’t get ●.
- Judicial retention: base picks on documented records only. Don’t invent ideological readings of individual justices.

## Writing rules
- One sentence per rationale, third person, using the full 2026 group name (e.g. “Order and Opportunity Left voters want…”), specific to this race. Plain language, no jargon.
- Name the candidate before any he/she/his/her in rationale and experience text, so it is never ambiguous which candidate a pronoun means.
- Party or group endorsements may be cited as context (“as the county Republican Party does”) but never as the reason itself. The reason is the group’s values.
- Hinges and counter-arguments are neutral, fair to both sides and factual.
- `experienceRationale` (5th element) is required exactly when the build says the pick is switched by the Fit + experience view. One or two sentences, ≤55 words, on why an experience-first voter in that group could back the switched-to candidate and what they give up. Name red flags and cross-party votes plainly. Add or remove it as the validator tells you.

## Validate
From `site/`, run: `npx tsx scripts/validate-races.ts <file> [<file>…]` (file names without `.ts`). Iterate until it reports 0 issues for every assigned file. Do **not** run `npm run build`, `npm run dev`, vite or tsc. Do **not** commit, and do not touch files that aren’t assigned to you (other agents are editing other race files at the same time).

## Hard constraints
- Don’t use the browser pane. Don’t submit web forms.
- Web research is usually unnecessary. If you must check a fact, use WebSearch/WebFetch only. Never put the user’s name, email or any personal information in any request, header, URL or body.
- Don’t kill processes.

## Report back (short)
Per file: races done and the validator result. Then list notable choices: cross-party picks by mixed groups, `—` cells, places you were unsure, and anything in the source data that looked wrong (don’t fix facts; report them).
