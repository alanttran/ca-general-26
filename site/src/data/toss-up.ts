import type { Candidate, CrossTypologyRow, Race, TypologyCode } from '../types/ballot-types';
import { EXPERIENCE_LABEL, EXPERIENCE_ORDER } from './qualifications';
import { resolveCandidateForPick } from './red-flags';

/**
 * A toss-up row: both options fit the group about equally. Written as
 * `[code, 'Morgan / Cohen', '=', 'rationale that says what tips it']` (measures: `'Yes / No'`).
 */
export const TOSS_UP = '=';
const SEP = ' / ';

/** Groups whose 2026 profile values competence and institutions, so experience can break a tie for them. */
export const EXPERIENCE_TIEBREAK_GROUPS: TypologyCode[] = ['LL', 'OO', 'PP'];

export function isTossUp(row: Pick<CrossTypologyRow, 'confidence'>): boolean {
  return row.confidence === TOSS_UP;
}

/** The two options of a toss-up pick, e.g. `['Morgan', 'Cohen']`. */
export function tossUpOptions(pick: string): string[] {
  return pick.split(SEP).map((s) => s.trim()).filter(Boolean);
}

/** Candidates a row picks: both options of a toss-up, every name of a multi-seat pick, or the one pick. */
export function pickedCandidates(race: Race, row: Pick<CrossTypologyRow, 'pick' | 'confidence'>): Candidate[] {
  if (race.kind !== 'candidates') return [];
  const names = isTossUp(row) ? tossUpOptions(row.pick) : (race.voteFor ?? 1) > 1 ? row.pick.split(',') : [row.pick];
  return names.map((n) => resolveCandidateForPick(n.trim(), race.candidates)).filter((c): c is Candidate => Boolean(c));
}

/** “Cohen is more experienced (Extensive vs. Some).” for a toss-up in a group that values experience; else undefined. */
export function experienceTiebreak(race: Race, row: CrossTypologyRow): string | undefined {
  if (!isTossUp(row) || race.kind !== 'candidates' || !EXPERIENCE_TIEBREAK_GROUPS.includes(row.typology)) return undefined;
  const [a, b] = pickedCandidates(race, row);
  const la = a?.qualification?.level, lb = b?.qualification?.level;
  if (!la || !lb || la === lb) return undefined;
  const [more, less] = EXPERIENCE_ORDER.indexOf(la) < EXPERIENCE_ORDER.indexOf(lb) ? [a, b] : [b, a];
  const last = (c: Candidate) => c.name.split(/\s+/).pop();
  return `${last(more)} is more experienced (${EXPERIENCE_LABEL[more.qualification!.level]} vs. ${EXPERIENCE_LABEL[less.qualification!.level]}).`;
}
