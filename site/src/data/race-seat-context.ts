/**
 * Optional seat-status overrides for the race header (e.g. `Incumbent`, `Open seat`).
 * Prefer setting `seatContext` on the race itself; this map is for quick corrections.
 * Single-candidate races get `Unopposed` automatically in `merge-races.ts`.
 */
export const RACE_SEAT_CONTEXT: Record<string, string> = {};
