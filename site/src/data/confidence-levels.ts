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
      'Public record (votes, sponsorships, platforms, key endorsements) lines up cleanly with what that typology prioritizes.',
  },
  {
    symbol: '◐',
    title: 'Medium',
    legendDetail: 'Defensible trade-offs',
    methodologyDetail:
      'Defensible call with real tension—mixed record, sparse data, or competing priorities inside the same band.',
  },
  {
    symbol: '○',
    title: 'Low',
    legendDetail: 'Uncertain call',
    methodologyDetail:
      'Thin evidence, conflicting signals, or a contest where typology mapping is a weak signal (for example low-information judges).',
  },
  {
    symbol: '\u2014' as ConfidenceSymbol,
    title: 'Skip',
    legendDetail: 'No pick / skip race',
    methodologyDetail:
      'No endorsement-style pick for that column, or the race is a toss-up on values we weight.',
  },
];
