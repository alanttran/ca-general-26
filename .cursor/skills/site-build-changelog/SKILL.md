---
name: site-build-changelog
description: >-
  Records voter-guide site changes in the header “what changed in this build”
  section. Use when editing site/src (races, ballot ZIPs, TL;DR, meta, render),
  shipping a content refresh, or when the user asks to log what changed in a build.
---

# Site build changelog (ca-general-26)

When you materially change the voter guide site (`site/src/**`), update the public changelog **before finishing**—same session as the feature work.

## Files

| File | Action |
|------|--------|
| `site/src/data/site-updates.ts` | Prepend a new entry to `SITE_UPDATE_BUILDS` (index `0`) |
| `site/src/data/meta.ts` | Set `BALLOT_META.lastContentUpdated` to match the new entry’s `dateLabel` |

`render-app.ts` reads `site-updates.ts` automatically. Do not hardcode changelog copy in `renderSiteUpdatesSection`.

## Add a build entry

1. **Date** — Use a human label like `October 7, 2026` (must match `lastContentUpdated` exactly).

2. **Prepend** to `SITE_UPDATE_BUILDS` (never edit older builds unless fixing a factual error):

```typescript
{
  dateLabel: 'October 7, 2026',
  lede: 'One sentence: the headline change voters care about.',
  panels: [
    {
      summary: 'Short panel title (shown in collapsed list)',
      body: 'Optional paragraph with specifics.',
    },
    {
      summary: 'Another topic',
      bullets: ['Bullet one', 'Bullet two'],
    },
  ],
},
```

3. **Lede** — One sentence under the summary line; sets expectations for the whole build.

4. **Panels** — 1–4 topics, newest/most important first. Use `body` for prose, `bullets` for lists (not both unless needed).

5. **Sync meta** — `lastContentUpdated: '<same dateLabel>'` in `meta.ts`.

6. **Run** `npm run build` in `site/` if you touched TypeScript.

## Writing style

- Plain language for voters, not commit-message jargon.
- Name ZIPs, districts, and counties when ballot scope changes.
- Mention file areas only when useful for maintainers (`races/sd-local.ts`, URL `?zip=`).
- Prior builds stay in the array; older entries move under **Earlier builds** in the UI.

## New ZIP ballots

When adding a ZIP (not just editing an existing one), read `.cursor/skills/add-ballot-zip/SKILL.md` first.

## Candidate portraits (when adding or fixing photos)

| Source | Files |
|--------|--------|
| Wikipedia (verified title) | `site/scripts/wiki-portrait-map.mjs` → `photoSlug` on candidate in race data |
| Campaign / official URL | `site/src/data/candidate-extras.ts` → `headshotUrl` |
| Fetch local WebP | `cd site && ONLY=id1,id2 npm run fetch-portraits` then `npm run portrait-attribution` |

Prefer `photoSlug` + Wikipedia when a stable article exists; use `headshotUrl` for campaign assets. Mention portrait work in the build changelog panel when voters will see new tiles.

## Seat context labels (`race-seat-context.ts` + `merge-races.ts`)

- **Contested races:** set `seatContext` on the race (or override in `RACE_SEAT_CONTEXT[raceId]`) → `Incumbent`, `Open seat`, etc.
- **Single-candidate races:** no entry needed — `resolveSeatContext` auto-sets **`Unopposed`** in the race header.
- Do not label unopposed judge or county lines as `Open seat`.

## Checklist

```
- [ ] New object at SITE_UPDATE_BUILDS[0] (or panel on current build if same day)
- [ ] dateLabel === BALLOT_META.lastContentUpdated
- [ ] Lede + panels describe this session’s actual changes
- [ ] Portraits: wiki map + fetch and/or candidate-extras headshotUrl
- [ ] site build passes
```

## When to skip

- Typo-only fixes with no voter-visible change
- Dependency bumps with no content/UX change
- User explicitly says not to update the changelog
