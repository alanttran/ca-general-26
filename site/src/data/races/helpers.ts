import type { CrossTypologyRow } from '../../types/ballot-types';

/** Compact builder for the nine cross-typology rows: `[code, pick, confidence, rationale]`. */
export function ct(
  rows: [code: CrossTypologyRow['typology'], pick: string, confidence: CrossTypologyRow['confidence'], rationale: string][],
): CrossTypologyRow[] {
  return rows.map(([typology, pick, confidence, rationale]) => ({ typology, pick, confidence, rationale }));
}
