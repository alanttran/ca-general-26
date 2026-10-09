import type { CrossTypologyRow } from '../../types/ballot-types';

/**
 * Compact builder for the nine cross-typology rows: `[code, pick, confidence, rationale, experienceRationale?]`.
 * The fifth element is required exactly when the Fit + experience view switches this pick (the build checks).
 */
export function ct(
  rows: [
    code: CrossTypologyRow['typology'],
    pick: string,
    confidence: CrossTypologyRow['confidence'],
    rationale: string,
    experienceRationale?: string,
  ][],
): CrossTypologyRow[] {
  return rows.map(([typology, pick, confidence, rationale, experienceRationale]) =>
    experienceRationale ? { typology, pick, confidence, rationale, experienceRationale } : { typology, pick, confidence, rationale },
  );
}
