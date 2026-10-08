# 2026 California general election voter guide

An unofficial, research-backed voter guide for the **November 3, 2026 California general election**: statewide offices, every statewide proposition, judicial retention votes, and district/county/city races and local measures for a set of sample ZIP codes.

**Live site (GitHub Pages):** [https://alanttran.github.io/ca-general-26/](https://alanttran.github.io/ca-general-26/)
**June primary edition:** [https://alanttran.github.io/ca-primary-26/](https://alanttran.github.io/ca-primary-26/)

The guide is built around the **nine [Pew Research political typologies](https://www.pewresearch.org/politics/2021/political-typology/)** (Progressive Left through Faith and Flag Conservatives). It helps friends and neighbors **compare recommendations across worldviews**, not present a single “correct” slate.

## What’s in the repo

| Piece | Role |
| ----- | ---- |
| **`site/`** | Static **Vite + TypeScript + SCSS** app: TL;DR matrix, per-race cross-typology picks, candidate scorecards, proposition breakdowns, judicial retention tables, and a printable “my picks” cheat sheet. |
| **`site/src/data/races/`** | One research file per race group (statewide offices, props, retention, regional districts, local races/measures), registered in `races/index.ts`. |
| **`site/src/data/ballot-profiles.ts`** | ZIP dropdown: each ZIP lists its local race ids in printed ballot order. Statewide races and props appear for every ZIP. |
| **`docs/sample-ballot-92126.md`** | Transcription of the official 92126 sample ballot (source of truth for names and order). |
| **`.cursor/skills/`** | Research/data standard and changelog conventions. |
| **`site/ATTRIBUTION.md`** | Image credits for candidate portraits. |

## Local development

```bash
cd site
npm install
npm run dev
```

Production build (runs the ballot-data validator, then `tsc`, then Vite):

```bash
cd site
npm run build
```

Output goes to **`site/dist/`**. **`.github/workflows/deploy-site.yml`** builds and deploys to **GitHub Pages** on pushes to `main` or `master`. (In the repo’s Settings → Pages, set Source to **GitHub Actions**.)

## Updating content

- Follow **`.cursor/skills/add-ballot-zip/SKILL.md`** for races, measures, and ZIPs; log voter-visible changes in `site/src/data/site-updates.ts` per **`.cursor/skills/site-build-changelog/SKILL.md`**.
- **Portraits:** add `candidateId: 'Wikipedia_Title'` to `site/scripts/wiki-portrait-map.mjs`, set `photoSlug` on the candidate, then `npm run fetch-portraits` and `npm run portrait-attribution`.

## License / use

Content reflects research for a specific election; verify registration, ballot text, and deadlines with [sos.ca.gov](https://www.sos.ca.gov/) and your county elections office.
