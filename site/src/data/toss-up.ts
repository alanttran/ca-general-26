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

export interface TossUpSplit {
  /** What the group weighs, before the first “if”. */
  lead: string;
  sides: { option: string; when: string }[];
}

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * “…: if X matters most, A; if Y matters more, B.” → lead plus one side per option, or undefined when the
 * reason isn’t in that shape (it then shows as plain text).
 */
export function splitTossUp(text: string, options: string[]): TossUpSplit | undefined {
  const m = /^([\s\S]*?)\bif\b\s*([\s\S]+?);\s*if\b\s*([\s\S]+)$/i.exec(text.trim());
  if (!m) return undefined;
  const side = (clause: string) => {
    let best: { option: string; at: number; len: number } | undefined;
    for (const option of options) {
      const re = new RegExp(`,\\s*${escapeRe(option)}\\b`, 'g');
      let hit: RegExpExecArray | null;
      while ((hit = re.exec(clause))) if (!best || hit.index > best.at) best = { option, at: hit.index, len: hit[0].length };
    }
    if (!best) return undefined;
    const when = clause.slice(0, best.at).trim();
    const rest = clause.slice(best.at + best.len).replace(/^[\s,]+/, '').replace(/[.\s]+$/, '');
    return { option: best.option, when: rest ? `${when}, ${rest}` : when };
  };
  const a = side(m[2]);
  const b = side(m[3]);
  if (!a || !b || a.option === b.option) return undefined;
  return { lead: m[1].trim().replace(/[\s:;,]+$/, ''), sides: [a, b] };
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
