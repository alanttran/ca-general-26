import type { TypologyCode } from '../types/ballot-types';
import { TY_CODES } from './typologies-data';

/**
 * How this visitor chose to use the guide (welcome wizard), kept in this browser only.
 * `quick`: picks list, dates and print; `guided`: race-by-race with their type's pick called out;
 * `full`: everything. No `mode` yet means a first visit, so the wizard opens.
 */
export type ViewMode = 'quick' | 'guided' | 'full';

export interface ViewPrefs {
  mode?: ViewMode;
  typology?: TypologyCode;
  /** Set when the saved type was a 2021 Pew group; it was cleared and the visitor should pick again. */
  legacyTypology?: boolean;
}

const KEY = 'ca-general-26:view';
const MODES: ViewMode[] = ['quick', 'guided', 'full'];
/** Pew’s 2021 group codes. They don’t map onto the 2026 groups, so a saved one is dropped. */
export const LEGACY_CODES = ['PL', 'EL', 'DM', 'OL', 'SS', 'AR', 'PR', 'CC', 'FF'];

export function getViewPrefs(): ViewPrefs {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(KEY) ?? '{}');
    if (!raw || typeof raw !== 'object') return {};
    const { mode, typology } = raw as Record<string, unknown>;
    return {
      mode: MODES.includes(mode as ViewMode) ? (mode as ViewMode) : undefined,
      typology: TY_CODES.includes(typology as TypologyCode) ? (typology as TypologyCode) : undefined,
      legacyTypology: LEGACY_CODES.includes(typology as string) || undefined,
    };
  } catch {
    return {};
  }
}

export function setViewPrefs(prefs: ViewPrefs): void {
  try {
    const { legacyTypology: _legacy, ...keep } = prefs;
    localStorage.setItem(KEY, JSON.stringify(keep));
  } catch {
    // Blocked storage: the choice lasts until the page reloads.
  }
}

/** Plain-language “sounds like me” lines for the wizard, drawn from Pew’s 2026 typology profiles. */
export const TYPOLOGY_PLAIN: Record<TypologyCode, string> = {
  LP: 'You’re very liberal on nearly everything. The economy feels rigged, billionaires shouldn’t exist, and Democrats should fight harder.',
  LL: 'You’re a committed Democrat who trusts experts, institutions and the news, and wants steady progress on a liberal agenda.',
  LO: 'You lean Democratic on pocketbook issues but feel politicians ignore people like you and mostly look out for themselves.',
  OO: 'You want a government that helps working families, plus safe streets and a secure border. You’re moderate on social issues.',
  TM: 'Politics isn’t a big part of your life. Paying the bills comes first, and your views mix left and right.',
  PP: 'You’re right of center on taxes and government, but you value civility, compromise and steady leaders, and you’re cool on Trump.',
  UR: 'You lean Republican on immigration and smaller government, but you’re not religious-right and you’re mixed on Trump.',
  FC: 'You’re a deeply conservative, religious voter. Faith, family and traditional values guide how you vote.',
  NA: 'You’re all in on Trump and MAGA. You want strict immigration enforcement, less government and fighters who don’t back down.',
};
