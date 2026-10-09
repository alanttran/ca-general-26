import type { BallotCategory } from '../types/ballot-types';
import { SD_WAVE2_PROFILES } from './profiles-sd-wave2';
import { SD_CITY_PROFILES } from './profiles-sd-city';
import { ESCONDIDO_PROFILES } from './profiles-escondido';
import { WAVE3_PROFILES } from './profiles-wave3';

export const DEFAULT_BALLOT_ZIP = '92126';

/**
 * Sections in official California ballot order. Races render in this category order;
 * within a category, statewide races keep file order and local races follow `localRaceIds`.
 */
export const BALLOT_CATEGORIES: BallotCategory[] = [
  { id: 'statewide', label: 'Statewide offices' },
  { id: 'federal', label: 'U.S. House' },
  { id: 'state-leg', label: 'State Legislature' },
  { id: 'judicial', label: 'Judges and justices' },
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
  /** Approximate % of residents voting in contests that cover only part of the ZIP (threshold set per profile file; smaller slivers go in the note). */
  partialShares?: Record<string, number>;
  /** True until this ZIP’s local research lands; shows a “local races coming” note. */
  localPending?: boolean;
}

const SD_REGISTRAR = {
  registrarLabel: 'San Diego County Registrar of Voters',
  registrarUrl: 'https://www.sdvote.com',
};


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
  ...SD_WAVE2_PROFILES,
  ...SD_CITY_PROFILES,
  ...ESCONDIDO_PROFILES,
  '90028': WAVE3_PROFILES['90028'],
  '91501': WAVE3_PROFILES['91501'],
  '95765': WAVE3_PROFILES['95765'],
  '94544': WAVE3_PROFILES['94544'],
  '94043': WAVE3_PROFILES['94043'],
  '92868': WAVE3_PROFILES['92868'],
  '92562': WAVE3_PROFILES['92562'],
};


/** ZIP dropdown, ascending numeric for quick scanning. */
export const BALLOT_ZIP_OPTIONS: { zip: string; label: string }[] = Object.values(BALLOT_PROFILES)
  .sort((a, b) => a.zip.localeCompare(b.zip))
  .map((p) => ({ zip: p.zip, label: `${p.zip} — ${p.scopeLabel}` }));

const SAVED_ZIP_KEY = 'ballot-zip';

/** The ZIP this browser last typed in, if any. Storage can be blocked, so failures read as none. */
export function savedBallotZip(): string | null {
  try {
    const z = localStorage.getItem(SAVED_ZIP_KEY);
    return z && /^\d{5}$/.test(z) ? z : null;
  } catch {
    return null;
  }
}

export function saveBallotZip(zip: string): void {
  try {
    localStorage.setItem(SAVED_ZIP_KEY, zip);
  } catch {
    // Private mode or blocked storage: the ZIP just isn't remembered.
  }
}

/** Any 5-digit ZIP from `?zip=`, else the one this browser last used; ZIPs without a hand-built profile are looked up by district. */
export function resolveBallotZip(search: string): string {
  const raw = new URLSearchParams(search).get('zip')?.trim();
  if (raw && /^\d{5}$/.test(raw)) return raw;
  return savedBallotZip() ?? DEFAULT_BALLOT_ZIP;
}
