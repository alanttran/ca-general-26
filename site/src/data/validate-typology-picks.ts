import type { Candidate, Race, RedFlag, TypologyCode } from '../types/ballot-types';
import { BALLOT_CATEGORIES, type BallotProfile } from './ballot-profiles';
import { combinedCellFor } from './experience-views';
import { resolveCandidateForPick, SEVERITY_ORDER, STATUS_LABEL } from './red-flags';

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

/** True only when the race pits a left-of-center party against a Republican (not D-vs-D or R-vs-R). */
function isCrossPartyRace(candidates: Candidate[]): boolean {
  return candidates.some((c) => LEFT_PARTIES.has(c.party)) && candidates.some((c) => c.party === 'R');
}

/** Structural + typology checks for every race. */
export function collectTypologyValidationIssues(races: Race[]): TypologyValidationIssue[] {
  const issues: TypologyValidationIssue[] = [];
  const seen = new Set<string>();
  const candidateIds = new Map<string, string>();
  for (const race of races) {
    for (const c of race.candidates) {
      const prev = candidateIds.get(c.id);
      if (prev) issues.push({ raceId: race.id, message: `candidate id "${c.id}" also used in ${prev}` });
      candidateIds.set(c.id, race.id);
    }
  }
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

      if ((race.voteFor ?? 1) > 1) {
        const names = row.pick.split(',').map((n) => n.trim()).filter(Boolean);
        if (names.length > (race.voteFor ?? 1)) {
          issues.push({ raceId: race.id, typology: row.typology, pick: row.pick, message: `picks ${names.length} names but voters choose up to ${race.voteFor}` });
        }
        for (const n of names) {
          if (!resolveCandidateForPick(n, race.candidates)) {
            issues.push({ raceId: race.id, typology: row.typology, pick: n, message: 'multi-seat pick name does not match a candidate' });
          }
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

function flagIssues(raceId: string, who: string, flags: RedFlag[] | undefined): TypologyValidationIssue[] {
  const issues: TypologyValidationIssue[] = [];
  for (const f of flags ?? []) {
    const where = `${who} red flag "${f.text?.slice(0, 40) ?? ''}…"`;
    if (!SEVERITY_ORDER.includes(f.severity)) issues.push({ raceId, message: `${where}: missing/invalid severity` });
    if (!(f.status in STATUS_LABEL)) issues.push({ raceId, message: `${where}: missing/invalid status` });
    if (!f.whyItMatters?.trim()) issues.push({ raceId, message: `${where}: missing whyItMatters` });
    if (!f.sources?.length || f.sources.some((s) => !/^https:\/\//.test(s.url))) {
      issues.push({ raceId, message: `${where}: needs at least one https source` });
    }
  }
  return issues;
}

/**
 * Red-flag rubric: every flag is tiered + sourced; a Severe flag caps that candidate’s picks below ●;
 * a Serious flag on a picked candidate must be addressed in the race’s counter-arguments.
 */
export function collectRedFlagIssues(races: Race[]): TypologyValidationIssue[] {
  const issues: TypologyValidationIssue[] = [];
  for (const race of races) {
    for (const c of race.candidates) issues.push(...flagIssues(race.id, c.name, c.redFlags));
    for (const j of race.retention?.justices ?? []) issues.push(...flagIssues(race.id, j.name, j.redFlags));
    if (race.kind !== 'candidates') continue;

    const counter = (race.counterArguments ?? []).join(' ').toLowerCase();
    for (const row of race.crossTypology) {
      const picked = resolveCandidateForPick(row.pick, race.candidates);
      const tiers = new Set(picked?.redFlags?.map((f) => f.severity));
      if (!picked) continue;
      if (tiers.has('severe') && row.confidence === '●') {
        issues.push({ raceId: race.id, typology: row.typology, pick: row.pick, message: `${picked.name} has a Severe red flag — cap confidence at ◐ and name the flag in the rationale` });
      }
      const last = picked.name.split(/\s+/).pop()?.toLowerCase() ?? '';
      if ((tiers.has('severe') || tiers.has('serious')) && !counter.includes(last)) {
        issues.push({ raceId: race.id, typology: row.typology, pick: row.pick, message: `${picked.name} has a Severe/Serious red flag — address it in counterArguments` });
      }
    }
  }
  // One issue per (race, message) is enough for the counter-argument rule.
  const seen = new Set<string>();
  return issues.filter((i) => {
    const key = i.message.includes('counterArguments') ? `${i.raceId}|${i.message}` : `${i.raceId}|${i.typology}|${i.message}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Every candidate race defines 3–5 criteria; every candidate is rated and assessed on each criterion. */
export function collectQualificationIssues(races: Race[]): TypologyValidationIssue[] {
  const issues: TypologyValidationIssue[] = [];
  for (const race of races) {
    if (race.kind !== 'candidates') continue;
    const crit = race.qualificationCriteria ?? [];
    if (crit.length < 3 || crit.length > 5) {
      issues.push({ raceId: race.id, message: `needs 3–5 qualificationCriteria (has ${crit.length})` });
    }
    if (!race.legalRequirements?.trim()) issues.push({ raceId: race.id, message: 'missing legalRequirements' });
    for (const c of race.candidates) {
      const q = c.qualification;
      if (!q) {
        issues.push({ raceId: race.id, message: `${c.name}: missing qualification` });
        continue;
      }
      if (!q.summary?.trim()) issues.push({ raceId: race.id, message: `${c.name}: qualification summary empty` });
      for (const k of crit) {
        const a = q.criteria.find((x) => x.criterionId === k.id);
        if (!a) issues.push({ raceId: race.id, message: `${c.name}: no assessment for criterion "${k.id}"` });
        else if (!a.evidence?.trim()) issues.push({ raceId: race.id, message: `${c.name}: criterion "${k.id}" has no evidence` });
      }
      for (const a of q.criteria) {
        if (!crit.some((k) => k.id === a.criterionId)) {
          issues.push({ raceId: race.id, message: `${c.name}: assessment for unknown criterion "${a.criterionId}"` });
        }
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
    for (const id of Object.keys(p.partialShares ?? {})) {
      if (!p.localRaceIds.includes(id)) issues.push({ raceId: id, message: `ZIP ${p.zip} has a partial share for a race it does not list` });
    }
  }
  return issues;
}

/** Every measure says what Yes and No mean; related-measure links point at real measures and run both ways. */
export function collectMeasureIssues(races: Race[]): TypologyValidationIssue[] {
  const measures = new Map(races.filter((r) => r.kind === 'measure' && r.measure).map((r) => [r.id, r.measure!]));
  const issues: TypologyValidationIssue[] = [];
  for (const [id, m] of measures) {
    if (!m.yesMeans?.trim() || !m.noMeans?.trim()) issues.push({ raceId: id, message: 'measure needs yesMeans and noMeans' });
    if (!m.funding) issues.push({ raceId: id, message: 'measure needs funding (use a note when no committee reported money)' });
    else if (!m.funding.sources.length || !m.funding.asOf.trim()) issues.push({ raceId: id, message: 'funding needs asOf and at least one source' });
    else if (!m.funding.yes && !m.funding.no && !m.funding.note?.trim()) issues.push({ raceId: id, message: 'funding has no totals and no note' });
    if (!m.positions) issues.push({ raceId: id, message: 'measure needs positions (an empty list means none were found)' });
    {
      // Every measure (CA props, local measures, Colorado) explains each typology's trade-off.
      const race = races.find((r) => r.id === id)!;
      const missing = race.crossTypology.filter((row) => !race.hinges?.[row.typology]?.trim()).map((row) => row.typology);
      if (missing.length) issues.push({ raceId: id, message: `measures need a hinge for every typology; missing ${missing.join(', ')}` });
      for (const [code, h] of Object.entries(race.hinges ?? {})) {
        if (!/^Yes if [\s\S]+?\s+No if [^,]/.test(h ?? '')) issues.push({ raceId: id, message: `hinge ${code} must read “Yes if …. No if ….” (No side not starting with a comma)` });
      }
    }
    if (/^prop-\d+$/.test(id) && (!m.forYou?.wallet.trim() || !m.forYou.who.trim())) {
      issues.push({ raceId: id, message: 'CA props need forYou.wallet and forYou.who (“What it means for you”)' });
    }
    if (m.explainerUrl && !m.readingLinks?.some((l) => l.url === m.explainerUrl)) {
      issues.push({ raceId: id, message: 'explainerUrl must match the url of one of its readingLinks' });
    }
    for (const r of m.related ?? []) {
      const other = measures.get(r.raceId);
      if (!other) issues.push({ raceId: id, message: `related measure "${r.raceId}" does not exist` });
      else if (!other.related?.some((o) => o.raceId === id)) issues.push({ raceId: id, message: `related measure "${r.raceId}" does not link back` });
      if (!r.note.trim()) issues.push({ raceId: id, message: `related measure "${r.raceId}" needs a note` });
    }
  }
  return issues;
}

/** Throws on validation failure so `npm run build` catches mistakes. */
/** Every pick the Fit + experience view switches needs its own written rationale, and only those. */
export function collectExperienceRationaleIssues(races: Race[]): TypologyValidationIssue[] {
  const issues: TypologyValidationIssue[] = [];
  for (const race of races) {
    for (const row of race.crossTypology) {
      const switched = race.kind === 'candidates' && Boolean(combinedCellFor(race, row.pick, row.confidence).reason);
      const has = Boolean(row.experienceRationale?.trim());
      if (switched && !has) {
        issues.push({ raceId: race.id, typology: row.typology, message: 'Fit + experience switches this pick: add an experienceRationale.' });
      } else if (!switched && has) {
        issues.push({ raceId: race.id, typology: row.typology, message: 'experienceRationale is set but this pick is not switched: remove it.' });
      }
    }
  }
  return issues;
}

export function assertBallotDataValid(races: Race[], profiles: BallotProfile[]): void {
  const issues = [
    ...collectTypologyValidationIssues(races),
    ...collectRedFlagIssues(races),
    ...collectQualificationIssues(races),
    ...collectProfileIssues(races, profiles),
    ...collectExperienceRationaleIssues(races),
    ...collectMeasureIssues(races),
  ];
  if (issues.length === 0) return;

  const lines = issues.map((i) => `  • ${i.raceId}${i.typology ? ` [${i.typology}]` : ''}: ${i.message}`);
  throw new Error(`Ballot data validation failed (${issues.length}):\n${lines.join('\n')}`);
}
