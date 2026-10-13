/**
 * How the hand-built ZIPs are grouped in the “Browse ZIPs with full local ballots” list under the ZIP box:
 * county (or state), then city. `npm run validate-typology` checks that every profile appears exactly once.
 */
export interface ZipAreaGroup {
  group: string;
  areas: { name: string; zips: string[] }[];
}

export const ZIP_AREAS: ZipAreaGroup[] = [
  {
    group: 'San Diego County',
    areas: [
      {
        name: 'City of San Diego',
        zips: [
          '92014', '92037', '92092', '92093', '92101', '92102', '92103', '92104', '92105', '92106', '92107', '92108',
          '92109', '92110', '92111', '92113', '92114', '92115', '92116', '92117', '92119', '92120', '92121', '92122',
          '92123', '92124', '92126', '92127', '92128', '92129', '92130', '92131', '92136', '92139', '92140', '92145',
          '92154', '92173',
        ],
      },
      { name: 'Chula Vista', zips: ['91910', '91911', '91913', '91914', '91915'] },
      { name: 'Oceanside', zips: ['92054', '92056', '92057', '92058'] },
      { name: 'Escondido', zips: ['92025', '92026', '92027', '92029'] },
      { name: 'Vista', zips: ['92081', '92083', '92084'] },
      { name: 'La Mesa', zips: ['91941', '91942'] },
      { name: 'El Cajon', zips: ['92020'] },
      { name: 'Santee', zips: ['92071'] },
      { name: 'Carlsbad', zips: ['92009'] },
    ],
  },
  {
    group: 'Elsewhere in California',
    areas: [
      { name: 'Los Angeles County', zips: ['90028', '91501'] },
      { name: 'Orange County', zips: ['92868'] },
      { name: 'Riverside County', zips: ['92562'] },
      { name: 'Placer County', zips: ['95765'] },
      { name: 'Alameda County', zips: ['94544'] },
      { name: 'Santa Clara County', zips: ['94043'] },
    ],
  },
  {
    group: 'Colorado',
    areas: [{ name: 'Denver', zips: ['80204'] }],
  },
];

/** Every ZIP listed above, for the completeness check. */
export const ZIP_AREA_ZIPS: string[] = ZIP_AREAS.flatMap((g) => g.areas.flatMap((a) => a.zips));
