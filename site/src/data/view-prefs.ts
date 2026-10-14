import type { TypologyCode } from '../types/ballot-types';

/**
 * How this visitor chose to use the guide (welcome wizard), kept in this browser only.
 * `quick`: picks list, dates and print; `guided`: race-by-race with their type's pick called out;
 * `full`: everything. No `mode` yet means a first visit, so the wizard opens.
 */
export type ViewMode = 'quick' | 'guided' | 'full';

export interface ViewPrefs {
  mode?: ViewMode;
  typology?: TypologyCode;
}

const KEY = 'ca-general-26:view';
const MODES: ViewMode[] = ['quick', 'guided', 'full'];
const CODES: TypologyCode[] = ['PL', 'EL', 'DM', 'OL', 'SS', 'AR', 'PR', 'CC', 'FF'];

export function getViewPrefs(): ViewPrefs {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(KEY) ?? '{}');
    if (!raw || typeof raw !== 'object') return {};
    const { mode, typology } = raw as Record<string, unknown>;
    return {
      mode: MODES.includes(mode as ViewMode) ? (mode as ViewMode) : undefined,
      typology: CODES.includes(typology as TypologyCode) ? (typology as TypologyCode) : undefined,
    };
  } catch {
    return {};
  }
}

export function setViewPrefs(prefs: ViewPrefs): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(prefs));
  } catch {
    // Blocked storage: the choice lasts until the page reloads.
  }
}

/** Plain-language “sounds like me” lines for the wizard, drawn from Pew’s 2021 typology profiles. */
export const TYPOLOGY_PLAIN: Record<TypologyCode, string> = {
  PL: 'You’re very liberal and want big changes to how the system works, on climate, racial justice and the economy.',
  EL: 'You’re a reliable Democrat who prefers practical progress and compromise over sweeping change.',
  DM: 'You’re a loyal, more moderate Democrat, often religious, who values steady, experienced leaders.',
  OL: 'You lean left and want change, but you’re frustrated with both parties and politics as usual.',
  SS: 'Politics isn’t a big part of your life. Your views mix left and right, and money worries come first.',
  AR: 'You lean Republican on taxes and government, but you’re more moderate on social issues and cooler on Trump.',
  PR: 'You’re a Republican who distrusts big business and elites, backs Trump strongly and wants tighter immigration.',
  CC: 'You’re a traditional conservative: limited government, lower taxes, pro-business and a strong military.',
  FF: 'You’re a deeply conservative, often religious voter. Faith, country and Trump matter most to you.',
};
