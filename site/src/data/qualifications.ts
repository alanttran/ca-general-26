import type { CriterionAssessment, ExperienceLevel } from '../types/ballot-types';

export const EXPERIENCE_ORDER: ExperienceLevel[] = ['extensive', 'substantial', 'some', 'limited'];

export const EXPERIENCE_LABEL: Record<ExperienceLevel, string> = {
  extensive: 'Extensive experience',
  substantial: 'Substantial experience',
  some: 'Some relevant experience',
  limited: 'Limited relevant experience',
};

/** Rubric copy for Methodology. */
export const EXPERIENCE_DEFINITION: Record<ExperienceLevel, string> = {
  extensive: 'has held this office or its direct equivalent, or meets nearly every criterion with years of evidence.',
  substantial: 'meets most criteria through closely related roles.',
  some: 'meets some criteria; real gaps on others.',
  limited: 'little documented experience on the criteria for this office.',
};

export const ASSESSMENT_LABEL: Record<CriterionAssessment['assessment'], string> = {
  met: 'Met',
  partial: 'Partly',
  'not-met': 'Not met',
  unknown: 'Unclear',
};

export const ASSESSMENT_SYMBOL: Record<CriterionAssessment['assessment'], string> = {
  met: '✓',
  partial: '~',
  'not-met': '✗',
  unknown: '?',
};
