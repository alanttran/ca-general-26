import type { Race } from '../types/ballot-types';
import { resolveCandidateForPick } from './red-flags';

/**
 * Election results after Nov 3, 2026, keyed by race id. Kept apart from the research so picks never change.
 *
 * - `called`: AP (or, for races AP doesn't call, the county or state once results are certified) has
 *   projected or declared a winner.
 * - `leading`: no call yet; who leads in the latest official count. California counts for weeks, so a
 *   leader can change.
 *
 * `winner` is a candidate's last name (several separated by `, ` for multi-seat races), `Yes`/`No` for
 * measures, or free text for retention (e.g. `All retained`). Updated by the daily results check.
 */
export interface RaceResult {
  status: 'called' | 'leading';
  winner: string;
  /** Who made the call or published the count, e.g. `AP`, `LA County Registrar`, `CA Secretary of State`. */
  source: string;
  /** For `called`: when the call was made, e.g. `Nov 4`. For `leading`: which update, e.g. `Nov 6 update`. */
  when: string;
  url: string;
}

export const RESULTS: Record<string, RaceResult> = {};

/** “✓ Won: Becerra (AP call, Nov 4)” / “Leading: Becerra (LA County Registrar, Nov 6 update)”. */
export function resultLabel(r: RaceResult): string {
  const who = r.winner === 'Yes' ? 'Passed' : r.winner === 'No' ? 'Failed' : undefined;
  if (r.status === 'called') return who ? `✓ ${who} (${r.source} call, ${r.when})` : `✓ Won: ${r.winner} (${r.source} call, ${r.when})`;
  return who ? `${who === 'Passed' ? 'Passing' : 'Failing'} (${r.source}, ${r.when})` : `Leading: ${r.winner} (${r.source}, ${r.when})`;
}

/** Build-time check: every result names a real race and a real candidate (or Yes/No), with a source link. */
export function resultIssues(races: Race[]): string[] {
  const issues: string[] = [];
  const byId = new Map(races.map((r) => [r.id, r]));
  for (const [id, r] of Object.entries(RESULTS)) {
    const race = byId.get(id);
    if (!race) {
      issues.push(`results.ts: no race with id ${id}`);
      continue;
    }
    if (!/^https?:\/\//.test(r.url)) issues.push(`results.ts ${id}: url must be a link`);
    if (!r.source.trim() || !r.when.trim()) issues.push(`results.ts ${id}: source and when are required`);
    if (race.kind === 'measure') {
      if (r.winner !== 'Yes' && r.winner !== 'No') issues.push(`results.ts ${id}: a measure's winner is Yes or No`);
    } else if (race.kind === 'candidates') {
      const names = r.winner.split(',').map((n) => n.trim());
      if (names.length > (race.voteFor ?? 1)) issues.push(`results.ts ${id}: more winners than seats`);
      for (const n of names) {
        if (!resolveCandidateForPick(n, race.candidates)) issues.push(`results.ts ${id}: “${n}” isn’t a candidate in this race`);
      }
    }
  }
  return issues;
}
