/** Pew-derived typology codes used in the guide */
export type TypologyCode = 'PL' | 'EL' | 'DM' | 'OL' | 'SS' | 'AR' | 'PR' | 'CC' | 'FF';

/** TL;DR / cross-table confidence glyph (matches legend SVGs). */
export type ConfidenceSymbol = '●' | '◐' | '○' | '—';

export interface TypologyDefinition {
  code: TypologyCode;
  name: string;
  description: string;
  /** Pew Research Center 2021 Political Typology chapter for this group */
  pewChapterUrl: string;
}

export interface ScorecardRow {
  topic: string;
  position: string;
  /**
   * One sentence: how this stance differs from a termed-out predecessor, the incumbent,
   * or other leading candidates in the same race (shown under the position line).
   */
  comparison?: string;
}

export interface RedFlagSource {
  /** Publication or organization name shown as the link text */
  label: string;
  /** HTTPS URL to reporting, a primary document, or an official evaluation */
  url: string;
}

/**
 * How much a red flag should weigh (see “How we rate red flags” in Methodology).
 * - `severe`: conviction or criminal charge; official misconduct/ethics finding; sustained harassment or
 *   abuse finding; ties to extremist groups; acting to overturn an election.
 * - `serious`: active investigation; settlement of misconduct claims; documented ethics or campaign-finance
 *   problem; credible lawsuit or dismissal tied to conduct in office.
 * - `notable`: conflicts of interest, donor or self-dealing concerns, documented management failures in office.
 * Policy disagreements and opponents’ talking points are not red flags — put them in `notes`.
 */
export type RedFlagSeverity = 'severe' | 'serious' | 'notable';

/** Where the matter stands, so readers can tell an accusation from an established fact. */
export type RedFlagStatus =
  | 'convicted'
  | 'charged'
  | 'official-finding'
  | 'settled'
  | 'under-investigation'
  | 'documented'
  | 'alleged'
  | 'disputed'
  | 'cleared';

/** One sourced caveat about a candidate or justice. */
export interface RedFlag {
  severity: RedFlagSeverity;
  status: RedFlagStatus;
  /** What happened, neutrally stated, including the candidate’s response when they gave one. */
  text: string;
  /** One sentence: why this bears on the specific office being sought. */
  whyItMatters: string;
  /** At least one link to reporting, a court/agency record, or an official finding. */
  sources: RedFlagSource[];
}

/** @deprecated Alias kept for older imports; use `RedFlag`. */
export type RedFlagBullet = RedFlag;

/** How much directly relevant experience a candidate brings, judged against the race’s criteria. */
export type ExperienceLevel = 'extensive' | 'substantial' | 'some' | 'limited';

/** One thing the job actually requires (3–5 per race), e.g. “Running a large public agency”. */
export interface QualificationCriterion {
  id: string;
  label: string;
  /** One sentence on why this matters for the office. */
  detail?: string;
}

export interface CriterionAssessment {
  criterionId: string;
  assessment: 'met' | 'partial' | 'not-met' | 'unknown';
  /** Specific, checkable evidence (roles, years, scale), not adjectives. */
  evidence: string;
}

/** A published rating from an outside evaluator (bar association, JNE Commission, etc.). Shown verbatim. */
export interface ExternalRating {
  source: string;
  rating: string;
  url: string;
  /** e.g. `Aug 2026` */
  dateLabel?: string;
}

export interface CandidateQualification {
  level: ExperienceLevel;
  /** Legal eligibility for the office (e.g. bar membership for AG). `meets` unless documented otherwise. */
  legal: 'meets' | 'does-not-meet';
  /** One or two sentences summarizing the experience case, in plain language. */
  summary: string;
  criteria: CriterionAssessment[];
  externalRating?: ExternalRating;
}

/** One cited head-to-head general-election poll (race level; manually maintained; must link to source). */
export interface RacePoll {
  /** Head-to-head result as published, e.g. `"Becerra 51%, Hilton 38%"`. */
  resultDisplay: string;
  /** Pollster attribution line as you want it shown to readers. */
  pollsterCredit: string;
  /** Human-readable field dates or release timing (not parsed). */
  fieldDatesLabel: string;
  /** HTTPS URL to the pollster’s write-up or methodology page. */
  sourceUrl: string;
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  role: string;
  /** Filename under `public/images/candidates/` without extension; omit for placeholder */
  photoSlug?: string;
  /** Remote headshot when no local `photoSlug` asset (e.g. official portrait URL). */
  headshotUrl?: string;
  /** Campaign or official voter-facing site; used to link the role line. */
  campaignUrl?: string;
  bio: string[];
  scorecard?: ScorecardRow[];
  money?: string;
  endorsements?: string;
  /** Sourced, tiered caveats (shown under “Red flags”, most severe first). */
  redFlags?: RedFlag[];
  /** FYI context—background or perspective, not the same weight as red flags (shown under “Notes”). */
  notes?: string[];
  /**
   * Optional Reform California org context (chairmanship, voter-guide machine, party friction).
   * Rendered as its own subsection with the Reform California badge—not mixed into Notes.
   */
  reformCaliforniaSection?: string[];
  /**
   * For sitting officeholders in contested races: one short paragraph on what they have
   * actually delivered in the role and when replacing them is (or is not) likely worth losing
   * seniority, committee fit, or institutional momentum. Shown only when the race has more than
   * one candidate and the role reads as an incumbent (not “unopposed”).
   */
  recordVsChange?: string;
  /** Experience-for-the-job rating against the race’s `qualificationCriteria`. */
  qualification?: CandidateQualification;
}

export interface CrossTypologyRow {
  typology: TypologyCode;
  pick: string;
  confidence: ConfidenceSymbol;
  rationale: string;
}

export interface DebateTopicBreakdown {
  topic: string;
  bullets: string[];
}

export interface DebateCandidateBreakdown {
  name: string;
  topics: DebateTopicBreakdown[];
}

/** Collapsible per-candidate notes from a debate replay (optional on a reading link). */
export interface DebateBreakdown {
  /** Label on the &lt;details&gt; control; defaults to “Candidate stances from this debate”. */
  summaryLabel?: string;
  intro?: string;
  candidates: DebateCandidateBreakdown[];
}

export interface MeasureReadingLink {
  /** Short label shown as link text */
  label: string;
  /** HTTPS URL */
  url: string;
  /** Optional voter-facing blurb (e.g. what mattered in a debate replay). */
  summary?: string;
  /** Optional expandable breakdown by candidate and topic. */
  debateBreakdown?: DebateBreakdown;
}

export interface MeasureBlock {
  question: string;
  /** e.g. `Legislative constitutional amendment`, `Initiative statute`, `Bond`, `Charter amendment`. */
  measureType?: string;
  /** Passing threshold when not a simple majority, e.g. `55%` (school bonds) or `2/3`. */
  voteThreshold?: string;
  /** Official fiscal impact summary (LAO / county counsel), one or two sentences. */
  fiscalImpact?: string;
  /** Official ballot-label supporters / opponents (as printed), or major committees. */
  supporters?: string;
  opponents?: string;
  /**
   * Short bullets tying the measure to the reader (who pays, who doesn’t, why it still matters).
   * Shown after the ballot question.
   */
  voterConnection?: string[];
  mechanismBullets: string[];
  argumentsFor: string[];
  argumentsAgainst: string[];
  /** Defaults: “Arguments for” / “Arguments against”. */
  argumentsForHeading?: string;
  argumentsAgainstHeading?: string;
  /** News explainers, official fiscal analysis, and major campaign / opposition filings */
  readingLinks?: MeasureReadingLink[];
}

/** One justice up for a yes/no retention vote. */
export interface RetentionJustice {
  name: string;
  /** e.g. `Supreme Court` or `Court of Appeal, 4th District, Division One`. */
  court: string;
  /** Title on the ballot, e.g. `Associate Justice` or `Presiding Justice`. */
  title: string;
  /** Appointing governor and year, e.g. `Newsom (2023)`. */
  appointedBy: string;
  /** One or two neutral sentences: background, notable rulings, prior retention result. */
  notes: string[];
  /** Serious, sourced concerns (shown with the red-flag treatment). Omit when none found. */
  redFlags?: RedFlag[];
  /** Published evaluation, e.g. the Commission on Judicial Nominees Evaluation rating at appointment. */
  externalRating?: ExternalRating;
  /** Official bio / Commission on Judicial Nominees Evaluation / news links. */
  sources?: RedFlagSource[];
}

export interface RetentionBlock {
  justices: RetentionJustice[];
}

export type RaceKind = 'candidates' | 'measure' | 'retention';

export interface Race {
  id: string;
  categoryId: string;
  title: string;
  /** Short row label in the TL;DR matrix and print sheet (defaults to `title`). */
  tldrLabel?: string;
  /** Multi-seat contests (e.g. “vote for up to 3”); picks then list names separated by `, `. */
  voteFor?: number;
  /**
   * Short seat status shown in the race header, e.g. `Open (term limits)` or `Incumbent`.
   * Distinct from ballot designation on candidate cards.
   */
  seatContext?: string;
  /** Why this office matters: powers, consequences for voters (shown under “What’s at stake”). */
  stakesParagraphs?: string[];
  introParagraphs: string[];
  kind: RaceKind;
  candidates: Candidate[];
  measure?: MeasureBlock;
  retention?: RetentionBlock;
  /** Legal requirements to hold the office, one line (e.g. “Registered voter; State Bar member for 5 years”). */
  legalRequirements?: string;
  /** What the job actually requires (3–5); every candidate is assessed against each. Required for candidate races. */
  qualificationCriteria?: QualificationCriterion[];
  /** Cited head-to-head general-election polls (newest first). */
  polling?: RacePoll[];
  crossTypology: CrossTypologyRow[];
  counterArguments?: string[];
  /** Debates, forums, and neutral explainers (shown after race context). */
  readingLinks?: MeasureReadingLink[];
}

export interface BallotCategory {
  id: string;
  label: string;
}

export interface BallotMeta {
  siteTitle: string;
  lastContentUpdated: string;
  scopeZip: string;
  scopeLabel: string;
  verificationNote: string;
  registrarLabel: string;
  registrarUrl: string;
}

export interface TldrRow {
  raceId: string;
  label: string;
  cells: Record<TypologyCode, string>;
  /** Highest red-flag tier of the candidate picked in each column (severe/serious only). */
  flags: Partial<Record<TypologyCode, 'severe' | 'serious'>>;
}

/** A race as shown for one ZIP: adds how much of the ZIP votes in it when not all of it does. */
export interface ZipRace extends Race {
  /** Approximate % of the ZIP’s residents in this contest (omitted when ~100%). */
  zipSharePct?: number;
}

export interface BallotData {
  meta: BallotMeta;
  typologies: TypologyDefinition[];
  categories: BallotCategory[];
  tldrRows: TldrRow[];
  races: ZipRace[];
}
