import type { BallotData, Race, TldrRow, TypologyCode, ZipRace } from '../types/ballot-types';
import { BALLOT_META } from './meta';
import { mergeRaceDerivedFields } from './merge-races';
import { combinedCellFor, experienceCellFor } from './experience-views';
import { maxSeverity, resolveCandidateForPick } from './red-flags';
import { BALLOT_CATEGORIES, BALLOT_PROFILES, DEFAULT_BALLOT_ZIP, type BallotProfile } from './ballot-profiles';
import { LOCAL_RACES, STATEWIDE_RACES } from './races';
import { TYPOLOGIES } from './typologies-data';
import { generatedProfile } from './zip-lookup';
import { assertBallotDataValid } from './validate-typology-picks';

const TY_CODES: TypologyCode[] = ['PL', 'EL', 'DM', 'OL', 'SS', 'AR', 'PR', 'CC', 'FF'];

export const ALL_STATEWIDE_RACES = mergeRaceDerivedFields(STATEWIDE_RACES);
export const ALL_LOCAL_RACES = mergeRaceDerivedFields(LOCAL_RACES);

assertBallotDataValid([...ALL_STATEWIDE_RACES, ...ALL_LOCAL_RACES], Object.values(BALLOT_PROFILES));

const LOCAL_BY_ID = new Map(ALL_LOCAL_RACES.map((r) => [r.id, r]));
const CATEGORY_INDEX = new Map(BALLOT_CATEGORIES.map((c, i) => [c.id, i]));

const KNOWN_LOCAL_IDS = new Set(LOCAL_BY_ID.keys());

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
  const combined = {} as TldrRow['combined'];
  for (const code of TY_CODES) {
    const row = race.crossTypology.find((r) => r.typology === code);
    cells[code] = row ? `${row.pick} ${row.confidence}`.trim() : '— —';
    combined[code] = row ? combinedCellFor(race, row.pick, row.confidence) : { cell: '— —' };
    if (!row || race.kind !== 'candidates') continue;
    const tier = maxSeverity(resolveCandidateForPick(row.pick, race.candidates)?.redFlags);
    if (tier === 'severe' || tier === 'serious') flags[code] = tier;
  }
  return {
    raceId: race.id,
    label: race.tldrLabel ?? race.title,
    cells,
    flags,
    experience: experienceCellFor(race),
    combined,
  };
}

/** Statewide races + this ZIP’s local races, sorted into official ballot order. */
export function buildBallotData(zip: string): BallotData {
  const profile = getBallotProfile(zip);
  const local = profile.localRaceIds.map((id) => LOCAL_BY_ID.get(id)).filter((r): r is Race => Boolean(r));
  const ordered = [...ALL_STATEWIDE_RACES, ...local]
    .map((race, i) => ({ race, i }))
    .sort((a, b) => (CATEGORY_INDEX.get(a.race.categoryId) ?? 99) - (CATEGORY_INDEX.get(b.race.categoryId) ?? 99) || a.i - b.i)
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
    },
    typologies: TYPOLOGIES,
    categories: BALLOT_CATEGORIES.filter((c) => categoryIds.has(c.id)),
    tldrRows: ordered.map(tldrRowFor),
    races: ordered,
  };
}
