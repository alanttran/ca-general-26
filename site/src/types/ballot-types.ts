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

/** One serious caveat; use `sources` to point readers to reporting or official records. */
export type RedFlagBullet =
  | string
  | {
      text: string;
      sources?: RedFlagSource[];
    };

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
  /** Serious caveats voters may weigh heavily (shown under “Red flags” with a flag icon). */
  redFlags?: RedFlagBullet[];
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
  /** Highlight the whole card when red-flag severity is especially high. */
  redFlagCallout?: boolean;
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
  redFlags?: RedFlagBullet[];
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
}

export interface BallotData {
  meta: BallotMeta;
  typologies: TypologyDefinition[];
  categories: BallotCategory[];
  tldrRows: TldrRow[];
  races: Race[];
}
