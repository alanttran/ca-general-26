import type {
  Candidate,
  ConfidenceSymbol,
  ExperienceLevel,
  Race,
  TldrCombinedCell,
  TldrExperienceCell,
} from '../types/ballot-types';
import { EXPERIENCE_LABEL, EXPERIENCE_ORDER } from './qualifications';
import { maxSeverity, resolveCandidateForPick } from './red-flags';

/** A weak (◐/○) typology pick yields to a rival at least this many experience levels higher. */
export const COMBINED_LEVEL_GAP = 2;

const SKIP = new Set(['—', '–', '-', '']);

function rank(c: Candidate): number {
  const level = c.qualification?.level;
  return level ? EXPERIENCE_ORDER.indexOf(level) : EXPERIENCE_ORDER.length;
}

const NAME_SUFFIX = /^(jr|sr|ii|iii|iv)\.?$/i;

/** Last name, ignoring suffixes like “III”. */
function lastName(name: string): string {
  const parts = name.trim().split(/\s+/).filter((p) => !NAME_SUFFIX.test(p));
  return parts[parts.length - 1] ?? name;
}

/**
 * Short name as the matrix uses it: the label the race’s own picks already use for this candidate
 * (keeps “Van Gorder”), else last name, else full name when two candidates share a last name.
 */
export function pickLabelFor(c: Candidate, race: Race): string {
  for (const row of race.crossTypology) {
    for (const token of row.pick.split(',').map((s) => s.trim())) {
      if (token && resolveCandidateForPick(token, race.candidates) === c) return token;
    }
  }
  const last = lastName(c.name).toLowerCase();
  const shared = race.candidates.filter((o) => lastName(o.name).toLowerCase() === last).length > 1;
  return shared ? c.name : lastName(c.name);
}

/** Candidates sorted most experienced first (stable within a level). */
function byExperience(cands: Candidate[]): Candidate[] {
  return [...cands].sort((a, b) => rank(a) - rank(b));
}

/** Most experienced candidate(s): ties included; for multi-seat races, everyone at or above the Nth-best level. */
export function experienceCellFor(race: Race): TldrExperienceCell | null {
  if (race.kind !== 'candidates') return null;
  const rated = byExperience(race.candidates.filter((c) => c.qualification));
  if (!rated.length) return null;
  const seats = Math.max(1, race.voteFor ?? 1);
  const cutoff = rank(rated[Math.min(seats, rated.length) - 1]);
  const top = rated.filter((c) => rank(c) <= cutoff);
  return {
    entries: top.map((c) => ({ label: pickLabelFor(c, race), level: c.qualification!.level })),
    tie: top.length > seats,
    unopposed: race.candidates.length === 1,
  };
}

function flagOf(c: Candidate | undefined): TldrCombinedCell['flag'] {
  const tier = maxSeverity(c?.redFlags);
  return tier === 'severe' || tier === 'serious' ? tier : undefined;
}

function levelText(c: Candidate): string {
  return EXPERIENCE_LABEL[c.qualification!.level as ExperienceLevel];
}

/**
 * Typology pick adjusted for experience:
 * - ● picks stand.
 * - ◐/○ picks yield to a rival who is at least two experience levels higher (multi-seat: per name).
 * - No pick (—) in a single-seat race goes to the clear most-experienced candidate.
 * Changed cells drop to ○: the typology fit behind them is weak by definition.
 */
export function combinedCellFor(race: Race, pick: string, confidence: ConfidenceSymbol): TldrCombinedCell {
  const keep: TldrCombinedCell = {
    cell: `${pick} ${confidence}`.trim(),
    flag: race.kind === 'candidates' ? flagOf(resolveCandidateForPick(pick, race.candidates)) : undefined,
  };
  if (race.kind !== 'candidates' || confidence === '●') return keep;
  const rated = race.candidates.filter((c) => c.qualification);
  if (rated.length < 2) return keep;

  const seats = Math.max(1, race.voteFor ?? 1);
  const names = SKIP.has(pick.trim()) ? [] : pick.split(',').map((s) => s.trim()).filter(Boolean);
  const picked = names.map((n) => resolveCandidateForPick(n, race.candidates));
  if (picked.some((c) => !c)) return keep; // e.g. "Yes"/"write-in": nothing to compare

  if (!picked.length) {
    if (seats > 1) return keep;
    const [best, next] = byExperience(rated);
    if (rank(best) === rank(next)) return keep;
    return {
      cell: `${pickLabelFor(best, race)} ○`,
      flag: flagOf(best),
      reason: `No typology pick; ${pickLabelFor(best, race)} is the most experienced candidate (${levelText(best)}).`,
    };
  }

  const chosen = picked as Candidate[];
  const reasons: string[] = [];
  const weakestFirst = [...chosen].sort((a, b) => rank(b) - rank(a));
  for (const p of weakestFirst) {
    const pool = byExperience(rated.filter((c) => !chosen.includes(c)));
    const rival = pool[0];
    if (!rival || rank(p) - rank(rival) < COMBINED_LEVEL_GAP) continue;
    if (pool.length > 1 && rank(pool[1]) === rank(rival)) continue; // no clear replacement
    chosen[chosen.indexOf(p)] = rival;
    reasons.push(
      `${pickLabelFor(p, race)}’s typology edge is weak, and ${pickLabelFor(rival, race)} is far more experienced (${levelText(rival)} vs. ${levelText(p)}).`,
    );
  }
  if (!reasons.length) return keep;
  const worstFlag = chosen.map(flagOf).find((f) => f === 'severe') ?? chosen.map(flagOf).find(Boolean);
  return {
    cell: `${chosen.map((c) => pickLabelFor(c, race)).join(', ')} ○`,
    flag: worstFlag,
    reason: reasons.join(' '),
  };
}
