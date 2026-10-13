import type { Race } from '../../types/ballot-types';
import { RACES_PROPS_A } from './props-a';
import { RACES_PROPS_B } from './props-b';
import { RACES_PROPS_C } from './props-c';
import { RACES_RETENTION_LOCAL, RACES_RETENTION_STATEWIDE } from './retention';
import { RACES_STATEWIDE_A } from './statewide-a';
import { RACES_STATEWIDE_B } from './statewide-b';

/**
 * Races every California ZIP gets, bundled with the page. Everything else in this folder is a local
 * file the browser loads on demand (see `local-races.ts`); `STATEWIDE_FILES` keeps those two lists apart.
 */
export const STATEWIDE_RACES: Race[] = [
  ...RACES_STATEWIDE_A,
  ...RACES_STATEWIDE_B,
  ...RACES_RETENTION_STATEWIDE,
  ...RACES_PROPS_A,
  ...RACES_PROPS_B,
  ...RACES_PROPS_C,
];

/** Appellate retention lives beside the Supreme Court races, so it ships with the page too. */
export const BUNDLED_LOCAL_RACES: Race[] = RACES_RETENTION_LOCAL;

/** Files above (plus non-race helpers) that the on-demand loader must skip. */
export const STATEWIDE_FILES = ['statewide-a', 'statewide-b', 'retention', 'props-a', 'props-b', 'props-c'];
