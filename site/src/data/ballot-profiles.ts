import type { BallotCategory } from '../types/ballot-types';

export const DEFAULT_BALLOT_ZIP = '92126';

/**
 * Sections in official California ballot order. Races render in this category order;
 * within a category, statewide races keep file order and local races follow `localRaceIds`.
 */
export const BALLOT_CATEGORIES: BallotCategory[] = [
  { id: 'statewide', label: 'Statewide offices' },
  { id: 'federal', label: 'U.S. House' },
  { id: 'state-leg', label: 'State Legislature' },
  { id: 'judicial', label: 'Judicial retention' },
  { id: 'school', label: 'Schools' },
  { id: 'county', label: 'County' },
  { id: 'city', label: 'City' },
  { id: 'district', label: 'Special districts' },
  { id: 'state-props', label: 'State propositions' },
  { id: 'local-measures', label: 'Local measures' },
];

export interface BallotProfile {
  zip: string;
  /** Dropdown text and tab title area name, e.g. `Mira Mesa, San Diego`. */
  scopeLabel: string;
  verificationNote: string;
  registrarLabel: string;
  registrarUrl: string;
  /**
   * District, county, city, school, and local-measure race ids for this ZIP, in printed ballot order.
   * Statewide offices, SPI, and state propositions are added for every ZIP automatically.
   */
  localRaceIds: string[];
  /** True until this ZIP’s local research lands; shows a “local races coming” note. */
  localPending?: boolean;
}

const SD_REGISTRAR = {
  registrarLabel: 'San Diego County Registrar of Voters',
  registrarUrl: 'https://www.sdvote.com',
};

const PENDING_NOTE =
  'Statewide offices and all state propositions are ready for this ZIP. Its district and local races are still being researched and will be added before Election Day—until then, use your official sample ballot for those.';

export const BALLOT_PROFILES: Record<string, BallotProfile> = {
  '92126': {
    zip: '92126',
    scopeLabel: 'Mira Mesa, San Diego',
    verificationNote:
      'Built from the official San Diego County sample ballot for this ZIP (CA-50, Senate 40, Assembly 78, Board of Equalization 4, City Council District 6, San Diego Unified). Neighboring precincts can differ—if a race looks unfamiliar, trust your official sample ballot over us.',
    ...SD_REGISTRAR,
    localRaceIds: [
      'boe-d4',
      'us-rep-ca50',
      'senate-sd40',
      'assembly-ad78',
      'retention-dca4',
      'sd-county-assessor',
      'sd-county-treasurer',
      'sd-city-council-d6',
      'sd-measure-a',
      'sd-measure-b',
      'sdusd-measure-m',
    ],
  },
  '90028': pending('90028', 'Hollywood, Los Angeles County', 'Los Angeles County Registrar-Recorder/County Clerk', 'https://www.lavote.gov'),
  '91501': pending('91501', 'Burbank, Los Angeles County', 'Los Angeles County Registrar-Recorder/County Clerk', 'https://www.lavote.gov'),
  '91911': pending('91911', 'Chula Vista, San Diego', SD_REGISTRAR.registrarLabel, SD_REGISTRAR.registrarUrl),
  '91914': pending('91914', 'East Chula Vista, San Diego', SD_REGISTRAR.registrarLabel, SD_REGISTRAR.registrarUrl),
  '92009': pending('92009', 'Carlsbad, San Diego', SD_REGISTRAR.registrarLabel, SD_REGISTRAR.registrarUrl),
  '92026': pending('92026', 'Escondido, San Diego', SD_REGISTRAR.registrarLabel, SD_REGISTRAR.registrarUrl),
  '92111': pending('92111', 'Linda Vista / Clairemont, San Diego', SD_REGISTRAR.registrarLabel, SD_REGISTRAR.registrarUrl),
  '92130': pending('92130', 'Carmel Valley, San Diego', SD_REGISTRAR.registrarLabel, SD_REGISTRAR.registrarUrl),
  '92131': pending('92131', 'Scripps Ranch, San Diego', SD_REGISTRAR.registrarLabel, SD_REGISTRAR.registrarUrl),
  '92139': pending('92139', 'Paradise Hills, San Diego', SD_REGISTRAR.registrarLabel, SD_REGISTRAR.registrarUrl),
  '92562': pending('92562', 'Murrieta, Riverside County', 'Riverside County Registrar of Voters', 'https://www.voteinfo.net'),
  '92868': pending('92868', 'Orange, Orange County', 'Orange County Registrar of Voters', 'https://www.ocvote.gov'),
  '94043': pending('94043', 'Mountain View, Santa Clara County', 'Santa Clara County Registrar of Voters', 'https://vote.santaclaracounty.gov'),
  '94544': pending('94544', 'Hayward, Alameda County', 'Alameda County Registrar of Voters', 'https://acvote.alamedacountyca.gov/'),
  '95765': pending('95765', 'Rocklin, Placer County', 'Placer County Elections', 'https://www.placerelections.com'),
};

function pending(zip: string, scopeLabel: string, registrarLabel: string, registrarUrl: string): BallotProfile {
  return { zip, scopeLabel, verificationNote: PENDING_NOTE, registrarLabel, registrarUrl, localRaceIds: [], localPending: true };
}

/** ZIP dropdown, ascending numeric for quick scanning. */
export const BALLOT_ZIP_OPTIONS: { zip: string; label: string }[] = Object.values(BALLOT_PROFILES)
  .sort((a, b) => a.zip.localeCompare(b.zip))
  .map((p) => ({ zip: p.zip, label: `${p.zip} — ${p.scopeLabel}` }));

export function resolveBallotZip(search: string): string {
  const raw = new URLSearchParams(search).get('zip')?.trim();
  if (raw && raw in BALLOT_PROFILES) return raw;
  return DEFAULT_BALLOT_ZIP;
}
