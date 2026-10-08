import type { Candidate, Race, TypologyCode } from '../types/ballot-types';
import { BALLOT_CATEGORIES, type BallotProfile } from './ballot-profiles';

const TY_CODES: TypologyCode[] = ['PL', 'EL', 'DM', 'OL', 'SS', 'AR', 'PR', 'CC', 'FF'];

/** Pew columns that should not recommend Republicans in a Democrat-vs-Republican race. */
const LIBERAL_TYPOLOGIES: TypologyCode[] = ['PL', 'EL', 'DM', 'OL'];

const LEFT_PARTIES = new Set(['D', 'Green', 'PF']);
const SKIP_PICKS = new Set(['—', '–', '-']);
const MEASURE_PICK_RE = /^(yes|no)\b/i;

const CONSERVATIVE_RATIONALE_RE =
  /\b(fiscal conservative|anti-tax anchor|GOP vote|Republican Party|lower-tax posture|movement conservative)\b/i;

export interface TypologyValidationIssue {
  raceId: string;
  typology?: TypologyCode;
  pick?: string;
  message: string;
}

function resolveCandidateForPick(pick: string, candidates: Candidate[]): Candidate | undefined {
  const token = pick.trim().toLowerCase();
  if (!token || SKIP_PICKS.has(token)) return undefined;
  return candidates.find((c) => {
    const parts = c.name.toLowerCase().split(/\s+/);
    const last = parts[parts.length - 1] ?? '';
    return token === c.id.toLowerCase() || token === c.name.toLowerCase() || token.includes(last) || parts.includes(token);
  });
}

/** True only when the race pits a left-of-center party against a Republican (not D-vs-D or R-vs-R). */
function isCrossPartyRace(candidates: Candidate[]): boolean {
  return candidates.some((c) => LEFT_PARTIES.has(c.party)) && candidates.some((c) => c.party === 'R');
}

/** Structural + typology checks for every race. */
export function collectTypologyValidationIssues(races: Race[]): TypologyValidationIssue[] {
  const issues: TypologyValidationIssue[] = [];
  const seen = new Set<string>();
  const categoryIds = new Set(BALLOT_CATEGORIES.map((c) => c.id));

  for (const race of races) {
    if (seen.has(race.id)) issues.push({ raceId: race.id, message: 'duplicate race id' });
    seen.add(race.id);
    if (!categoryIds.has(race.categoryId)) {
      issues.push({ raceId: race.id, message: `unknown categoryId "${race.categoryId}"` });
    }
    if (race.kind === 'measure' && !race.measure) issues.push({ raceId: race.id, message: 'measure race missing `measure` block' });
    if (race.kind === 'retention' && !race.retention?.justices.length) {
      issues.push({ raceId: race.id, message: 'retention race missing justices' });
    }

    const codes = race.crossTypology.map((r) => r.typology);
    for (const code of TY_CODES) {
      const n = codes.filter((c) => c === code).length;
      if (n !== 1) issues.push({ raceId: race.id, typology: code, message: `expected exactly one ${code} row, found ${n}` });
    }

    for (const row of race.crossTypology) {
      const skip = row.confidence === '—' || SKIP_PICKS.has(row.pick.trim());
      if (skip) continue;

      if (race.kind === 'measure' || race.kind === 'retention') {
        if (!MEASURE_PICK_RE.test(row.pick.trim())) {
          issues.push({ raceId: race.id, typology: row.typology, pick: row.pick, message: 'measure/retention pick must start with Yes or No' });
        }
        continue;
      }

      const picked = resolveCandidateForPick(row.pick, race.candidates);
      if (!picked) {
        issues.push({ raceId: race.id, typology: row.typology, pick: row.pick, message: 'pick does not match any candidate in the race' });
        continue;
      }

      if (!LIBERAL_TYPOLOGIES.includes(row.typology) || !isCrossPartyRace(race.candidates)) continue;

      if (picked.party === 'R') {
        issues.push({
          raceId: race.id,
          typology: row.typology,
          pick: row.pick,
          message: `${row.typology} pick "${row.pick}" is Republican in a D-vs-R race — use the left-of-center candidate or "—"`,
        });
      }
      if (CONSERVATIVE_RATIONALE_RE.test(row.rationale)) {
        issues.push({
          raceId: race.id,
          typology: row.typology,
          pick: row.pick,
          message: `${row.typology} rationale sounds conservative — check column/pick alignment`,
        });
      }
    }
  }

  return issues;
}

/** Every local race id a ZIP profile lists must exist (catches typos and unfinished research). */
export function collectProfileIssues(races: Race[], profiles: BallotProfile[]): TypologyValidationIssue[] {
  const ids = new Set(races.map((r) => r.id));
  const issues: TypologyValidationIssue[] = [];
  for (const p of profiles) {
    for (const id of p.localRaceIds) {
      if (!ids.has(id)) issues.push({ raceId: id, message: `ZIP ${p.zip} lists a race id with no race file` });
    }
  }
  return issues;
}

/** Throws on validation failure so `npm run build` catches mistakes. */
export function assertBallotDataValid(races: Race[], profiles: BallotProfile[]): void {
  const issues = [...collectTypologyValidationIssues(races), ...collectProfileIssues(races, profiles)];
  if (issues.length === 0) return;

  const lines = issues.map((i) => `  • ${i.raceId}${i.typology ? ` [${i.typology}]` : ''}: ${i.message}`);
  throw new Error(`Ballot data validation failed (${issues.length}):\n${lines.join('\n')}`);
}
