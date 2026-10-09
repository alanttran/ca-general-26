import type { BallotProfile } from './ballot-profiles';

/**
 * Any California ZIP → a statewide-plus-districts profile, from `public/data/zip-districts.json`
 * (built by `scripts/build-zip-districts.ts` from Census relationship files).
 * Shares are by land area, so they are rougher than the hand-built profiles’ population estimates.
 */
interface ZipDistricts {
  /** [district, % of ZIP land] */
  c: [number, number][];
  s: [number, number][];
  a: [number, number][];
  b: number | null;
  /** [county name, % of ZIP land] */
  k: [string, number][];
}

let table: Record<string, ZipDistricts> | null = null;

/** Fetches the district table once, only for ZIPs without a hand-built profile. A failed fetch leaves it empty. */
export async function loadZipDistricts(): Promise<void> {
  if (table) return;
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}data/zip-districts.json`);
    if (res.ok) table = (await res.json()) as Record<string, ZipDistricts>;
  } catch {
    // Offline or blocked: the ZIP falls back to the statewide-only ballot.
  }
}

/** Courts of Appeal by county (Gov. Code § 69100–69106). */
const APPELLATE_DISTRICT: Record<string, number> = Object.fromEntries(
  (
    [
      [1, 'Alameda Contra_Costa Del_Norte Humboldt Lake Marin Mendocino Napa San_Francisco San_Mateo Solano Sonoma'],
      [2, 'Los_Angeles San_Luis_Obispo Santa_Barbara Ventura'],
      [3, 'Alpine Amador Butte Calaveras Colusa El_Dorado Glenn Lassen Modoc Mono Nevada Placer Plumas Sacramento San_Joaquin Shasta Sierra Siskiyou Sutter Tehama Trinity Yolo Yuba'],
      [4, 'Imperial Inyo Orange Riverside San_Bernardino San_Diego'],
      [5, 'Fresno Kern Kings Madera Mariposa Merced Stanislaus Tulare Tuolumne'],
      [6, 'Monterey San_Benito Santa_Clara Santa_Cruz'],
    ] as [number, string][]
  ).flatMap(([d, names]) => names.split(' ').map((n) => [n.replace(/_/g, ' '), d])),
);

const COUNTY_OFFICES_URL = 'https://www.sos.ca.gov/elections/voting-resources/county-elections-offices';

const ORDINAL = (n: number) => `${n}${n % 100 >= 11 && n % 100 <= 13 ? 'th' : ['th', 'st', 'nd', 'rd'][n % 10] ?? 'th'}`;

/**
 * Builds a profile for a ZIP we haven’t hand-built: district races we’ve researched, with land-area shares
 * when the ZIP is split. `knownRaceIds` is every researched local race id.
 */
export function generatedProfile(zip: string, knownRaceIds: Set<string>): BallotProfile {
  const d = table?.[zip];
  if (!d) {
    return {
      zip,
      scopeLabel: 'statewide ballot only',
      verificationNote: `We couldn’t match ZIP ${zip} to California districts (it may be outside California or a PO-box-only ZIP), so this shows only the races every Californian votes on. Find your full ballot through`,
      registrarLabel: 'your county elections office',
      registrarUrl: COUNTY_OFFICES_URL,
      localRaceIds: [],
      localPending: true,
    };
  }

  const ids: string[] = [];
  const shares: Record<string, number> = {};
  const missing: string[] = [];
  const add = (id: string, label: string, share: number) => {
    // Land-area slivers under 10% are more likely boundary noise than real voters.
    if (share < 10) return;
    if (knownRaceIds.has(id)) {
      ids.push(id);
      if (share < 95) shares[id] = share;
    } else {
      missing.push(label);
    }
  };

  if (d.b) add(`boe-d${d.b}`, `Board of Equalization ${d.b}`, 100);
  for (const [n, pct] of d.c) add(`us-rep-ca${n}`, `U.S. House District ${n}`, pct);
  // Only even-numbered State Senate seats are on the 2026 ballot.
  for (const [n, pct] of d.s) if (n % 2 === 0) add(`senate-sd${n}`, `State Senate District ${n}`, pct);
  for (const [n, pct] of d.a) add(`assembly-ad${n}`, `Assembly District ${n}`, pct);
  const courts = [...new Set(d.k.map(([name]) => APPELLATE_DISTRICT[name]).filter(Boolean))];
  for (const c of courts) add(`retention-dca${c}`, `${ORDINAL(c)} District Court of Appeal`, 100);

  const counties = d.k.map(([name]) => `${name} County`);
  const split = d.c.length > 1 || d.s.length > 1 || d.a.length > 1;
  const parts = [
    `We haven’t built a full ballot for ZIP ${zip} yet. This shows the statewide races and propositions plus the district races we’ve researched${split ? '; district lines split this ZIP, so shares are rough estimates by land area' : ''}.`,
    missing.length ? `Not yet covered: ${missing.join(', ')}.` : '',
    d.s.length && d.s.every(([n]) => n % 2 === 1) ? 'Your State Senate seat isn’t up this year.' : '',
    `County, city, school and local-measure contests aren’t included. Find your full ballot through`,
  ];
  return {
    zip,
    scopeLabel: counties.join(' / '),
    verificationNote: parts.filter(Boolean).join(' '),
    registrarLabel: 'your county elections office',
    registrarUrl: COUNTY_OFFICES_URL,
    localRaceIds: ids,
    partialShares: shares,
    localPending: true,
  };
}
