import type { ConfidenceSymbol } from '../types/ballot-types';

/** Em dash: “no named pick” in TL;DR cells (must match `tldr-data` / cross-table `pick`). */
export const NO_PICK_TOKEN = '\u2014' as ConfidenceSymbol;

export interface ConfidenceLevelRow {
  symbol: ConfidenceSymbol;
  title: string;
  legendDetail: string;
  methodologyDetail: string;
}

/** Single source for legend copy, methodology copy, and TL;DR symbol semantics. */
export const CONFIDENCE_LEVEL_ROWS: ConfidenceLevelRow[] = [
  {
    symbol: '●',
    title: 'High',
    legendDetail: 'Clear typology match',
    methodologyDetail:
      'the record lines up cleanly with what the group prioritizes.',
  },
  {
    symbol: '◐',
    title: 'Medium',
    legendDetail: 'Defensible trade-offs',
    methodologyDetail:
      'defensible, with real tension: a mixed record, thin data or competing priorities.',
  },
  {
    symbol: '○',
    title: 'Low',
    legendDetail: 'Uncertain call',
    methodologyDetail:
      'thin or conflicting evidence, or a contest where values say little.',
  },
  {
    symbol: '\u2014' as ConfidenceSymbol,
    title: 'Skip',
    legendDetail: 'No pick / skip race',
    methodologyDetail:
      'no pick: neither side is a reasonable fit.',
  },
  {
    symbol: '=',
    title: 'Toss-up',
    legendDetail: 'Either fits; see what tips it',
    methodologyDetail:
      'both options fit the group about equally. The reason says what would tip it, and for groups that value experience (Loyal Liberals, Order and Opportunity Left, Pragmatic and Polite Right) the more experienced candidate is noted as a tiebreaker.',
  },
];
