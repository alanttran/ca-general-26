# Brief: tie each reason to Pew’s numbers

The guide gives nine Pew 2026 typology picks per contest. Each pick has a one-sentence reason (`rationale`) about what the group values. The user wants readers to be able to check the reasoning against Pew. So where a Pew figure directly supports a reason, work that figure into the reason.

**Picks don’t change.** This is a wording pass only.

## Source of figures
Use only figures from `.cursor/skills/add-ballot-zip/typology-2026.md`, which has the profiles, the issue grid and the July 2026 midterm table.
- Figures quoted in a group’s **profile prose** come from Pew’s text: cite them exactly (“84% of Order and Opportunity Left voters favor photo ID to vote”).
- Figures that appear **only in the issue grid** were read from Pew’s charts and can be off by a couple of points: write them as “about N%” (“about 71% of Pragmatic and Polite Right voters favor a military presence at the border”).
- Rows marked “~” or “low” in the grid, and the climate row, have no usable figure: don’t cite them.
- Never compute, combine, round differently or invent a figure, and never attribute one group’s figure to another group. A comparison is fine when both figures are in the doc (“…, against about 20% of No Apologies Right”).

## What to change
- In every `crossTypology` row of your files, add one figure, at most two, where it **directly supports** the stated reason. Example: a reason about photo ID gets the photo-ID figure; a reason about corporate taxes gets the corporate-tax figure.
- Leave the row unchanged when no figure fits naturally. Don’t force one in, and don’t paste the same figure into every row of a file. Expect roughly half the rows, give or take, to gain a figure.
- Keep each reason one sentence (two at most for toss-ups), third person, starting from the group’s full name. Keep every fact already in it.
- Toss-up rows (confidence `=`) must still say what tips it each way (“if …, A; if …, B”).
- Leave `experienceRationale`, `hinges`, `counterArguments` and everything else alone.
- No “(Pew 2026)” tags. The site’s methodology note covers the source.

## Validate
From `site/`: `npx tsx scripts/validate-races.ts <files…>`, until there are 0 issues. Don’t run builds or dev servers, don’t commit, and don’t touch files that aren’t assigned to you. Helper scripts go in the scratchpad, named starting with your first file’s name, and may edit only the file path passed to them.

## Constraints
No browser pane, no web forms, no web research. Never put personal information in any request. Don’t kill processes.

## Report back (short)
Per file: rows, rows given a figure, validator result. List any figures you weren’t sure how to state.
