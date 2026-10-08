import type { Candidate, RedFlag, RedFlagSeverity, RedFlagStatus } from '../types/ballot-types';

/** Most severe first. */
export const SEVERITY_ORDER: RedFlagSeverity[] = ['severe', 'serious', 'notable'];

export const SEVERITY_LABEL: Record<RedFlagSeverity, string> = {
  severe: 'Severe',
  serious: 'Serious',
  notable: 'Worth knowing',
};

/** Rubric copy shared by the Methodology section and the card legend. */
export const SEVERITY_DEFINITION: Record<RedFlagSeverity, string> = {
  severe:
    'criminal conviction or charge, an official misconduct or ethics finding, a sustained harassment or abuse finding, ties to extremist groups, or acting to overturn an election.',
  serious:
    'an active investigation, a settlement of misconduct claims, a documented ethics or campaign-finance problem, or a credible lawsuit or dismissal tied to conduct in office.',
  notable:
    'conflicts of interest, donor or self-dealing concerns, or documented management failures in an office the candidate ran.',
};

export const STATUS_LABEL: Record<RedFlagStatus, string> = {
  convicted: 'Convicted',
  charged: 'Charged',
  'official-finding': 'Official finding',
  settled: 'Settled',
  'under-investigation': 'Under investigation',
  documented: 'On the record',
  alleged: 'Alleged',
  disputed: 'Disputed',
  cleared: 'Cleared',
};

/** Flags sorted most severe first (stable within a tier). */
export function sortRedFlags(flags: RedFlag[]): RedFlag[] {
  return [...flags].sort((a, b) => SEVERITY_ORDER.indexOf(a.severity) - SEVERITY_ORDER.indexOf(b.severity));
}

export function maxSeverity(flags: RedFlag[] | undefined): RedFlagSeverity | undefined {
  if (!flags?.length) return undefined;
  return SEVERITY_ORDER.find((tier) => flags.some((f) => f.severity === tier));
}

const SKIP_PICKS = new Set(['—', '–', '-']);

/** Match a typology pick label (last name, full name, or id) to a candidate in the race. */
export function resolveCandidateForPick(pick: string, candidates: Candidate[]): Candidate | undefined {
  const token = pick.trim().toLowerCase();
  if (!token || SKIP_PICKS.has(token)) return undefined;
  return candidates.find((c) => {
    const parts = c.name.toLowerCase().split(/\s+/);
    const last = parts[parts.length - 1] ?? '';
    return token === c.id.toLowerCase() || token === c.name.toLowerCase() || token.includes(last) || parts.includes(token);
  });
}
