import type { CriterionAssessment, ExperienceLevel } from '../types/ballot-types';

export const EXPERIENCE_ORDER: ExperienceLevel[] = ['extensive', 'substantial', 'some', 'limited'];

export const EXPERIENCE_LABEL: Record<ExperienceLevel, string> = {
  extensive: 'Very experienced',
  substantial: 'Experienced',
  some: 'Some experience',
  limited: 'Little experience',
};

/** Rubric copy for Methodology and badge tooltips. */
export const EXPERIENCE_DEFINITION: Record<ExperienceLevel, string> = {
  extensive: 'has done this job or one just like it.',
  substantial: 'strong background in closely related work.',
  some: 'related background, with real gaps.',
  limited: 'little record on what this job requires.',
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
