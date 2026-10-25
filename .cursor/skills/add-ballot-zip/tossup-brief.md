# Brief: find true toss-ups among the weak (○) picks

The guide gives nine Pew 2026 typology picks per contest (see `typology-2026.md` in this folder for the groups). A new pick type is now supported: the **toss-up**. Your job is to re-read every **○ (weak lean)** row in your assigned race files and convert only the true toss-ups. Most ○ picks are real leans and must stay as they are.

## What counts as a toss-up
A toss-up means **both options fit the group’s 2026 values about equally**, and which one a member of the group should choose depends on which of two real priorities they weigh more. Example: Unconventional Right on Controller weighs Morgan’s waste-cutting agenda against Morgan opposing their immigration and DEI views, and Cohen’s experience against her labor-Democrat profile. Both pulls are strong.

It is **not** a toss-up when:
- one side is clearly better on the group’s top priorities, even if the fit is weak (keep ○);
- the problem is thin information about one or both candidates (keep ○, or `—` if nothing fits);
- party lean would settle it for a strongly partisan group. LP, LL, FC and NA have clear party loyalties, so a near-tie normally resolves by party into a ○ lean. Toss-ups are most plausible for the mixed groups (LO, OO, TM, PP, UR).

Don’t force it. Converting roughly 10–25% of ○ rows would be typical, and some files may have none.

## Hard rules (the validator enforces them)
- Only rows that are currently ○. Never change ●, ◐ or `—` rows.
- Candidate races with one seat, and measures. **No toss-ups** in multi-seat races (`voteFor` > 1) or retention races.
- LP and LL can’t be toss-ups in a race with a Democrat (or Green/P&F) against a Republican.
- No toss-up that includes a candidate with a **severe** red flag; that flag should break the tie.
- Toss-up rows have **no** `experienceRationale`. Remove the 5th element when converting; the site computes an experience tiebreaker itself for LL, OO and PP.

## Format
```ts
['UR', 'Morgan / Cohen', '=', 'Unconventional Right voters …: if cutting waste and auditing spending matters most, Morgan; if steady management of the state’s books matters more, Cohen.'],
['TM', 'Yes / No', '=', 'Tuned-Out Middle voters …: if …, Yes; if …, No.'],
```
- Pick: the two options separated by ` / `, using the same name form as the file’s other picks (usually last name), in candidate order. Measures: exactly `Yes / No`.
- Confidence: `=`.
- Rationale: one or two sentences, third person with the full group name, that name the two competing priorities and say **what tips it** each way. Keep any facts already in the old rationale; don’t invent new ones.
- Counter-arguments: if a `counterArguments` line is aimed only at a row you converted (e.g. `UR (Morgan ○): But consider …`), remove it when the rationale now covers its point; otherwise change its prefix to `UR (Toss-up): …`. A severe or serious red flag on either option must still be named in some counter-argument (the validator checks).

## Validate
From `site/`: `npx tsx scripts/validate-races.ts <file> …` until each file reports 0 issues. Do **not** run `npm run build`, dev servers, vite or tsc. Don’t commit, and don’t touch files that aren’t assigned to you. If you write helper scripts, put them in the scratchpad with a name that starts with your first assigned file name, and make them edit only the file path passed to them.

## Constraints
No browser pane, no web forms, no web research needed (use only facts already in the files). Never put personal information in any request. Don’t kill processes.

## Report back (short)
Per file: ○ rows reviewed, toss-ups made, validator result. Then list the toss-ups (race, group, “A / B”) and any ○ rows you nearly converted but didn’t.
