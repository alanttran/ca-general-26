import type { BallotData, Race, TldrRow, TypologyCode, ZipRace } from '../types/ballot-types';
import { BALLOT_META } from './meta';
import { pickedCandidates } from './toss-up';
import { TY_CODES } from './typologies-data';
import { mergeRaceDerivedFields } from './merge-races';
import { experienceCellFor } from './experience-views';
import { maxSeverity } from './red-flags';
import { BALLOT_CATEGORIES, BALLOT_PROFILES, COLORADO_CATEGORIES, DEFAULT_BALLOT_ZIP, type BallotProfile } from './ballot-profiles';
import { BUNDLED_LOCAL_RACES, STATEWIDE_RACES } from './races/statewide';
import { loadLocalRaces, ON_DEMAND_RACE_IDS } from './local-races';
import { TYPOLOGIES } from './typologies-data';
import { generatedProfile } from './zip-lookup';
import { assertBallotDataValid } from './validate-typology-picks';


export const ALL_STATEWIDE_RACES = mergeRaceDerivedFields(STATEWIDE_RACES);

// `npm run build` validates first; in the browser only the dev server re-checks, so visitors don't pay for it.
if (import.meta.env.DEV) {
  void import('./races').then(({ LOCAL_RACES }) =>
    assertBallotDataValid([...ALL_STATEWIDE_RACES, ...mergeRaceDerivedFields(LOCAL_RACES)], Object.values(BALLOT_PROFILES)),
  );
}

/** Local races loaded so far (appellate retention ships with the page; the rest arrive per ZIP). */
const LOCAL_BY_ID = new Map(mergeRaceDerivedFields(BUNDLED_LOCAL_RACES).map((r) => [r.id, r]));

const KNOWN_LOCAL_IDS = new Set([...LOCAL_BY_ID.keys(), ...ON_DEMAND_RACE_IDS]);

/** Hand-built profile when we have one; otherwise districts looked up from the ZIP (call `loadZipDistricts` first). */
export function getBallotProfile(zip: string): BallotProfile {
  if (BALLOT_PROFILES[zip]) return BALLOT_PROFILES[zip];
  if (/^\d{5}$/.test(zip)) return generatedProfile(zip, KNOWN_LOCAL_IDS);
  return BALLOT_PROFILES[DEFAULT_BALLOT_ZIP];
}

/** TL;DR row derived from the race’s own picks, so the matrix can never drift from race files. */
function tldrRowFor(race: Race): TldrRow {
  const cells = {} as Record<TypologyCode, string>;
  const flags: TldrRow['flags'] = {};
  for (const code of TY_CODES) {
    const row = race.crossTypology.find((r) => r.typology === code);
    cells[code] = row ? `${row.pick} ${row.confidence}`.trim() : '— —';
    if (!row || race.kind !== 'candidates') continue;
    const tier = maxSeverity(pickedCandidates(race, row).flatMap((c) => c.redFlags ?? []));
    if (tier === 'severe' || tier === 'serious') flags[code] = tier;
  }
  return {
    raceId: race.id,
    label: race.tldrLabel ?? race.title,
    cells,
    flags,
    experience: experienceCellFor(race),
  };
}

/** Fetches this ZIP’s local race files; call before `buildBallotData` (and after `loadZipDistricts` for unbuilt ZIPs). */
export async function ensureLocalRaces(zip: string): Promise<void> {
  const missing = getBallotProfile(zip).localRaceIds.filter((id) => !LOCAL_BY_ID.has(id));
  if (!missing.length) return;
  for (const r of mergeRaceDerivedFields(await loadLocalRaces(missing))) LOCAL_BY_ID.set(r.id, r);
}

/** Statewide races + this ZIP’s local races, sorted into official ballot order. Out-of-state ZIPs skip California’s statewide races. */
export function buildBallotData(zip: string): BallotData {
  const profile = getBallotProfile(zip);
  const categories = profile.state === 'CO' ? COLORADO_CATEGORIES : BALLOT_CATEGORIES;
  const categoryIndex = new Map(categories.map((c, i) => [c.id, i]));
  const local = profile.localRaceIds.map((id) => LOCAL_BY_ID.get(id)).filter((r): r is Race => Boolean(r));
  const ordered = [...(profile.state ? [] : ALL_STATEWIDE_RACES), ...local]
    .map((race, i) => ({ race, i }))
    .sort((a, b) => (categoryIndex.get(a.race.categoryId) ?? 99) - (categoryIndex.get(b.race.categoryId) ?? 99) || a.i - b.i)
    .map((x): ZipRace => {
      const share = profile.partialShares?.[x.race.id];
      return share !== undefined ? { ...x.race, zipSharePct: share } : x.race;
    });
  const categoryIds = new Set(ordered.map((r) => r.categoryId));

  return {
    meta: {
      ...BALLOT_META,
      scopeZip: profile.zip,
      scopeLabel: profile.scopeLabel,
      verificationNote: profile.verificationNote,
      registrarLabel: profile.registrarLabel,
      registrarUrl: profile.registrarUrl,
      state: profile.state ?? 'CA',
      ...(profile.state === 'CO' ? { siteTitle: 'Unofficial 2026 Colorado general election voter guide' } : {}),
    },
    typologies: TYPOLOGIES,
    categories: categories.filter((c) => categoryIds.has(c.id)),
    tldrRows: ordered.map(tldrRowFor),
    races: ordered,
  };
}
