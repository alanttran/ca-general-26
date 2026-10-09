/**
 * Builds `public/data/zip-districts.json`: every California ZCTA → its U.S. House, State Senate, Assembly,
 * Board of Equalization districts and counties, with the share of the ZIP’s land area in each.
 *
 * Inputs (download once into one folder, pass it as the only argument):
 *   tab20_sldu202420_zcta520_st06.txt, tab20_sldl202420_zcta520_st06.txt,
 *   tab20_zcta520_county20_natl.txt, tab20_zcta520_tract20_natl.txt
 *                                     — Census 2020 relationship files (www2.census.gov/geo/docs/maps-data/data/rel2020/)
 *   CD120_06.txt                      — Census 120th Congress block equivalency file for California (the Prop 50 map),
 *                                       from …/rdo/mapping-files/2027/120-congressional-district-befs/cd120.zip
 *   2020_Gaz_zcta_national.txt        — Census 2020 ZCTA Gazetteer (internal points)
 *   boe.geojson                       — BoE districts, services.gis.ca.gov …/CaliforniaDistricts/MapServer/3/query?f=geojson
 *
 * Usage: npx tsx scripts/build-zip-districts.ts <folder>
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.argv[2];
if (!dir) throw new Error('Pass the folder holding the Census and BoE files.');

/** Parts smaller than this share of the ZIP’s land are boundary slivers, not real splits. */
const MIN_SHARE = 3;

type Shares = Map<string, number>;

function readPipe(file: string): Record<string, string>[] {
  const lines = readFileSync(join(dir, file), 'utf8').replace(/^﻿/, '').split(/\r?\n/).filter(Boolean);
  const head = lines[0].split('|');
  return lines.slice(1).map((l) => {
    const cells = l.split('|');
    return Object.fromEntries(head.map((h, i) => [h, cells[i] ?? '']));
  });
}

/** zcta → (key → land-area share %) from a relationship file. */
function sharesFrom(file: string, keyOf: (row: Record<string, string>) => string | null): Map<string, Shares> {
  const out = new Map<string, Shares>();
  for (const row of readPipe(file)) {
    const zcta = row.GEOID_ZCTA5_20;
    if (!zcta) continue;
    const key = keyOf(row);
    if (!key) continue;
    const total = Number(row.AREALAND_ZCTA5_20) || Number(row.AREAWATER_ZCTA5_20);
    const part = Number(row.AREALAND_ZCTA5_20) ? Number(row.AREALAND_PART) : Number(row.AREAWATER_PART);
    if (!total) continue;
    const m = out.get(zcta) ?? new Map();
    m.set(key, (m.get(key) ?? 0) + (100 * part) / total);
    out.set(zcta, m);
  }
  return out;
}

/** Drop slivers, round, largest first; always keep the largest part. */
function compact(m: Shares | undefined): [string, number][] {
  if (!m) return [];
  const sorted = [...m.entries()].sort((a, b) => b[1] - a[1]);
  const kept = sorted.filter(([, v], i) => i === 0 || v >= MIN_SHARE);
  return kept.map(([k, v]) => [k, Math.max(1, Math.round(v))]);
}

const districtNo = (geoid: string) => String(Number(geoid.slice(2)));

// U.S. House uses the Prop 50 map (2026–2030), which Census publishes only block by block. Each tract’s split
// across districts is estimated by block count, then weighted by how much of the ZIP’s land lies in that tract.
const tractCd = new Map<string, Map<string, number>>();
for (const line of readFileSync(join(dir, 'CD120_06.txt'), 'utf8').split(/\r?\n/).slice(1)) {
  const [geoid, , , , , cdfp] = line.split(',');
  if (!geoid || !cdfp) continue;
  const tract = geoid.slice(0, 11);
  const m = tractCd.get(tract) ?? new Map<string, number>();
  const key = String(Number(cdfp));
  m.set(key, (m.get(key) ?? 0) + 1);
  tractCd.set(tract, m);
}
const cd = new Map<string, Shares>();
for (const row of readPipe('tab20_zcta520_tract20_natl.txt')) {
  const zcta = row.GEOID_ZCTA5_20;
  const tract = row.GEOID_TRACT_20;
  if (!zcta || !tract.startsWith('06')) continue;
  const blocks = tractCd.get(tract);
  const zland = Number(row.AREALAND_ZCTA5_20);
  const weight = zland ? Number(row.AREALAND_PART) / zland : Number(row.AREAWATER_PART) / (Number(row.AREAWATER_ZCTA5_20) || 1);
  if (!blocks || !weight) continue;
  const total = [...blocks.values()].reduce((a, b) => a + b, 0);
  const m = cd.get(zcta) ?? new Map<string, number>();
  for (const [k, n] of blocks) m.set(k, (m.get(k) ?? 0) + (100 * weight * n) / total);
  cd.set(zcta, m);
}
const sd = sharesFrom('tab20_sldu202420_zcta520_st06.txt', (r) => districtNo(r.GEOID_SLDU2024_20));
const ad = sharesFrom('tab20_sldl202420_zcta520_st06.txt', (r) => districtNo(r.GEOID_SLDL2024_20));
const county = sharesFrom('tab20_zcta520_county20_natl.txt', (r) =>
  r.GEOID_COUNTY_20.startsWith('06') ? r.NAMELSAD_COUNTY_20.replace(/ County$/, '') : null,
);

// BoE: point-in-polygon on each ZCTA’s internal point (Census publishes no BoE relationship file).
type Ring = [number, number][];
const boe = JSON.parse(readFileSync(join(dir, 'boe.geojson'), 'utf8')) as {
  features: { properties: { DISTRICT: string }; geometry: { type: string; coordinates: unknown } }[];
};
const boePolys = boe.features.map((f) => ({
  district: f.properties.DISTRICT,
  polys: (f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates) as Ring[][],
}));
function inRing(x: number, y: number, ring: Ring): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
function boeFor(lon: number, lat: number): string | null {
  for (const d of boePolys) {
    for (const [outer, ...holes] of d.polys) {
      if (inRing(lon, lat, outer) && !holes.some((h) => inRing(lon, lat, h))) return d.district;
    }
  }
  return null;
}
const points = new Map<string, [number, number]>();
for (const line of readFileSync(join(dir, '2020_Gaz_zcta_national.txt'), 'utf8').split(/\r?\n/).slice(1)) {
  const c = line.split('\t').map((s) => s.trim());
  if (c.length >= 7) points.set(c[0], [Number(c[6]), Number(c[5])]);
}

const zips = [...new Set([...cd.keys(), ...ad.keys()])].sort();
const out: Record<string, unknown> = {};
let noBoe = 0;
for (const z of zips) {
  const pt = points.get(z);
  const b = pt ? boeFor(pt[0], pt[1]) : null;
  if (!b) noBoe++;
  out[z] = {
    c: compact(cd.get(z)).map(([k, v]) => [Number(k), v]),
    s: compact(sd.get(z)).map(([k, v]) => [Number(k), v]),
    a: compact(ad.get(z)).map(([k, v]) => [Number(k), v]),
    b: b ? Number(b) : null,
    k: compact(county.get(z)),
  };
}
const target = join(import.meta.dirname, '..', 'public', 'data', 'zip-districts.json');
writeFileSync(target, JSON.stringify(out));
console.log(`${zips.length} ZIPs written to ${target}; ${noBoe} without a BoE match.`);
