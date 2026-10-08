import type { Candidate } from '../types/ballot-types';

/**
 * Optional overlays merged onto candidates by id at build time. Prefer setting
 * `campaignUrl` / `headshotUrl` directly on the candidate in its race file.
 */
export const CANDIDATE_EXTRAS: Partial<Record<string, Pick<Candidate, 'campaignUrl' | 'headshotUrl'>>> = {};
