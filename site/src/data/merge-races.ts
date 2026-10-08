import type { Race } from '../types/ballot-types';
import { CANDIDATE_EXTRAS } from './candidate-extras';
import { RACE_SEAT_CONTEXT } from './race-seat-context';

const OPEN_SEAT_LABELS = new Set(['Open', 'Open seat']);

/**
 * Race header badge: manual map for contested seats; auto-label single-candidate races.
 */
export function resolveSeatContext(race: Race): string | undefined {
  const manual = RACE_SEAT_CONTEXT[race.id] ?? race.seatContext;
  const isUnopposed = race.kind === 'candidates' && race.candidates.length === 1;

  if (!isUnopposed) {
    return manual;
  }

  if (!manual || OPEN_SEAT_LABELS.has(manual)) {
    return 'Unopposed';
  }

  if (/unopposed/i.test(manual)) {
    return manual;
  }

  if (/^Incumbent\b/i.test(manual)) {
    return `${manual} · unopposed`;
  }

  return 'Unopposed';
}

/** Applies `seatContext` and per-candidate `campaignUrl` / `headshotUrl` overlays. */
export function mergeRaceDerivedFields(races: Race[]): Race[] {
  return races.map((race) => ({
    ...race,
    seatContext: resolveSeatContext(race),
    candidates: race.candidates.map((c) => {
      const extra = CANDIDATE_EXTRAS[c.id];
      return extra ? { ...c, ...extra } : c;
    }),
  }));
}
