import type { Race } from '../../types/ballot-types';
import { RACES_HAYWARD } from './hayward';
import { RACES_MOUNTAIN_VIEW } from './mountain-view';
import { RACES_NORCAL_COURTS } from './norcal-courts';
import { RACES_NORCAL_FEDERAL } from './norcal-federal';
import { RACES_NORCAL_LEGISLATURE } from './norcal-legislature';
import { RACES_OC_ORANGE } from './oc-orange';
import { RACES_OC_RIVERSIDE_DISTRICTS } from './oc-riverside-districts';
import { RACES_RIVCO_MURRIETA } from './rivco-murrieta';
import { RACES_ROCKLIN_PLACER } from './rocklin-placer';
import { RACES_BURBANK } from './burbank';
import { RACES_LA_CITY } from './la-city';
import { RACES_LA_CITY_MEASURES } from './la-city-measures';
import { RACES_LA_COUNTY } from './la-county';
import { RACES_LA_COURTS } from './la-courts';
import { RACES_LA_DISTRICTS_A } from './la-districts-a';
import { RACES_LA_DISTRICTS_B } from './la-districts-b';
import { RACES_CHULA_VISTA } from './chula-vista';
import { RACES_ESCONDIDO } from './escondido';
import { RACES_ESCONDIDO_B } from './escondido-b';
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
import { RACES_SDC_SOUTH } from './sdc-south';
import { RACES_SDC_NORTH } from './sdc-north';
import { RACES_STATEWIDE_A } from './statewide-a';
import { RACES_STATEWIDE_B } from './statewide-b';

import { RACES_D_NORTH_STATE } from './d-north-state';
import { RACES_D_SACRAMENTO_DELTA } from './d-sacramento-delta';
import { RACES_D_EAST_BAY_SF } from './d-east-bay-sf';
import { RACES_D_BAY_CENTRAL_COAST } from './d-bay-central-coast';
import { RACES_D_VALLEY_A } from './d-valley-a';
import { RACES_D_VALLEY_B } from './d-valley-b';
import { RACES_D_CENTRAL_COAST_SOUTH } from './d-central-coast-south';
import { RACES_D_INLAND_A } from './d-inland-a';
import { RACES_D_INLAND_B } from './d-inland-b';
import { RACES_D_LA_A } from './d-la-a';
import { RACES_D_LA_B } from './d-la-b';
import { RACES_D_LA_OC } from './d-la-oc';
import { RACES_D_LA_C } from './d-la-c';

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
  // Statewide district sweep (ZIP lookup): one file per region.
  ...RACES_D_NORTH_STATE,
  ...RACES_D_SACRAMENTO_DELTA,
  ...RACES_D_EAST_BAY_SF,
  ...RACES_D_BAY_CENTRAL_COAST,
  ...RACES_D_VALLEY_A,
  ...RACES_D_VALLEY_B,
  ...RACES_D_CENTRAL_COAST_SOUTH,
  ...RACES_D_INLAND_A,
  ...RACES_D_INLAND_B,
  ...RACES_D_LA_A,
  ...RACES_D_LA_B,
  ...RACES_D_LA_OC,
  ...RACES_D_LA_C,
  ...RACES_SD_DISTRICTS,
  ...RACES_RETENTION_LOCAL,
  ...RACES_SD_LOCAL,
  ...RACES_SDC_SOUTH,
  ...RACES_SDC_NORTH,
  ...RACES_SD_CONGRESS,
  ...RACES_SD_LEGISLATURE_A,
  ...RACES_SD_LEGISLATURE_B,
  ...RACES_SD_COUNTY_CITY,
  ...RACES_CHULA_VISTA,
  ...RACES_NORTH_COASTAL,
  ...RACES_ESCONDIDO,
  ...RACES_ESCONDIDO_B,
  ...RACES_LA_DISTRICTS_A,
  ...RACES_LA_DISTRICTS_B,
  ...RACES_LA_COURTS,
  ...RACES_LA_COUNTY,
  ...RACES_LA_CITY,
  ...RACES_LA_CITY_MEASURES,
  ...RACES_BURBANK,
  ...RACES_NORCAL_FEDERAL,
  ...RACES_NORCAL_LEGISLATURE,
  ...RACES_NORCAL_COURTS,
  ...RACES_ROCKLIN_PLACER,
  ...RACES_HAYWARD,
  ...RACES_MOUNTAIN_VIEW,
  ...RACES_OC_RIVERSIDE_DISTRICTS,
  ...RACES_OC_ORANGE,
  ...RACES_RIVCO_MURRIETA,
];
