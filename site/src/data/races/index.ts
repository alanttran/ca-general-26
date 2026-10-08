import type { Race } from '../../types/ballot-types';
import { RACES_BURBANK } from './burbank';
import { RACES_LA_CITY } from './la-city';
import { RACES_LA_CITY_MEASURES } from './la-city-measures';
import { RACES_LA_COUNTY } from './la-county';
import { RACES_LA_COURTS } from './la-courts';
import { RACES_LA_DISTRICTS_A } from './la-districts-a';
import { RACES_LA_DISTRICTS_B } from './la-districts-b';
import { RACES_CHULA_VISTA } from './chula-vista';
import { RACES_ESCONDIDO } from './escondido';
import { RACES_NORTH_COASTAL } from './north-coastal';
import { RACES_SD_CONGRESS } from './sd-congress';
import { RACES_SD_COUNTY_CITY } from './sd-county-city';
import { RACES_SD_LEGISLATURE_A } from './sd-legislature-a';
import { RACES_SD_LEGISLATURE_B } from './sd-legislature-b';
import { RACES_PROPS_A } from './props-a';
import { RACES_PROPS_B } from './props-b';
import { RACES_PROPS_C } from './props-c';
import { RACES_RETENTION_LOCAL, RACES_RETENTION_STATEWIDE } from './retention';
import { RACES_SD_DISTRICTS } from './sd-districts';
import { RACES_SD_LOCAL } from './sd-local';
import { RACES_STATEWIDE_A } from './statewide-a';
import { RACES_STATEWIDE_B } from './statewide-b';

/**
 * Race registry. Statewide races (offices, SPI, Supreme Court retention, state props) appear on
 * every ZIP; local races appear only when listed in a ZIP profile’s `localRaceIds`.
 * Research files register themselves here — one import + spread per file.
 */
export const STATEWIDE_RACES: Race[] = [
  ...RACES_STATEWIDE_A,
  ...RACES_STATEWIDE_B,
  ...RACES_RETENTION_STATEWIDE,
  ...RACES_PROPS_A,
  ...RACES_PROPS_B,
  ...RACES_PROPS_C,
];

export const LOCAL_RACES: Race[] = [
  ...RACES_SD_DISTRICTS,
  ...RACES_RETENTION_LOCAL,
  ...RACES_SD_LOCAL,
  ...RACES_SD_CONGRESS,
  ...RACES_SD_LEGISLATURE_A,
  ...RACES_SD_LEGISLATURE_B,
  ...RACES_SD_COUNTY_CITY,
  ...RACES_CHULA_VISTA,
  ...RACES_NORTH_COASTAL,
  ...RACES_ESCONDIDO,
  ...RACES_LA_DISTRICTS_A,
  ...RACES_LA_DISTRICTS_B,
  ...RACES_LA_COURTS,
  ...RACES_LA_COUNTY,
  ...RACES_LA_CITY,
  ...RACES_LA_CITY_MEASURES,
  ...RACES_BURBANK,
];
