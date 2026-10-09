import type { TypologyCode } from './types/ballot-types';

const SVG_NS = 'http://www.w3.org/2000/svg';

/**
 * Small inline SVG icon; uses currentColor for fills.
 */
function svgIcon(viewBox: string, innerHtml: string, className = 'icon'): SVGElement {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', viewBox);
  svg.setAttribute('class', className);
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = innerHtml;
  return svg;
}

export function iconBallot(className = 'icon icon--lg'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M4 4h16v2H4V4zm0 4h10v12H4V8zm12 0h4v12h-4V8zm-8 2v2h2v-2H8zm0 4v2h2v-2h-2zm4-4v2h2v-2h-2zm0 4v2h2v-2h-2z"/>',
    className,
  );
}

export function iconChevron(className = 'icon icon--chevron'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M9 6l6 6-6 6V6z"/>',
    className,
  );
}

export function iconExternal(className = 'icon icon--inline'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2v-7h-2v7zm0-9h2V3h-8v2h4.59L10 10.59 11.41 12 17 6.41V10z"/>',
    className,
  );
}

export function iconCapitol(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M12 3L2 9h2v11h6v-6h4v6h6V9h2L12 3zm-6 9h4v2H6v-2zm8 0h4v2h-4v-2z"/>',
    className,
  );
}

export function iconFlag(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M14 4l-1 2H5v11h2v-4h5l1-2h6V4h-5zm-7 3h4v2H7V7zm0 4h4v2H7v-2z"/>',
    className,
  );
}

/** Triangular warning flag; pair with `.icon--red-flag` for color. */
export function iconRedFlag(className = 'icon icon--red-flag'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M5 21h2.5V3H5v18z"/><path fill="currentColor" d="M7.5 5.5L18 11l-10.5 5.5V5.5z"/>',
    className,
  );
}

/**
 * Minimal party glyphs (donkey, elephant, etc.). Paths from Material Design Icons
 * (Pictogrammers) — Apache License 2.0 — https://pictogrammers.com/docs/general/license/
 */
export function partyGlyphIcon(party: string, className = 'party-mark__svg'): SVGElement {
  const p = party.trim();
  switch (p) {
    case 'D':
      return svgIcon(
        '0 0 24 24',
        '<path fill="currentColor" d="M21.34,10.35L21.27,10.28L21.18,10.19L18,7V6A0.5,0.5 0 0,0 17.5,5.5C17.36,5.5 17.22,5.56 17.13,5.66L13.46,9H7C6.32,9 5.69,9.35 5.32,9.92L2.62,12.59C2.29,13.04 2.39,13.66 2.84,14C3.18,14.24 3.65,14.25 4,14L5,13.07V19H8V15H13V19H16V13.83C16,13.3 16.21,12.79 16.59,12.42L18,11L20,12V12C20.15,12.08 20.32,12.13 20.5,12.13C21.1,12.11 21.59,11.61 21.58,11C21.57,10.76 21.5,10.53 21.34,10.35Z"/>',
        className,
      );
    case 'R':
      return svgIcon(
        '0 0 24 24',
        '<path fill="currentColor" d="M19.5,15.5A0.5,0.5 0 0,1 19,16A0.5,0.5 0 0,1 18.5,15.5V8.5C18.5,6.57 16.43,5 14.5,5H6A4,4 0 0,0 2,9V19H6V15H11V19H15V14.5A0.5,0.5 0 0,1 15.5,14A0.5,0.5 0 0,1 16,14.5V16A3,3 0 0,0 19,19A3,3 0 0,0 22,16V14H19.5V15.5Z"/>',
        className,
      );
    case 'Green':
      return svgIcon(
        '0 0 24 24',
        '<path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>',
        className,
      );
    case 'PF':
      return svgIcon(
        '0 0 24 24',
        '<path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,14.41V19.93C9.58,19.75 8.23,19.19 7.1,18.31L11,14.41M13,14.41L16.9,18.31C15.77,19.19 14.42,19.75 13,19.93V14.41M4,12C4,7.97 7,4.57 11,4.07V11.59L5.69,16.9C4.59,15.5 4,13.78 4,12M18.31,16.9L13,11.59V4.07C17,4.57 20,7.97 20,12C20,13.78 19.41,15.5 18.31,16.9Z"/>',
        className,
      );
    case 'L':
      return svgIcon(
        '0 0 24 24',
        '<path fill="currentColor" d="M8.6 9.6C9 10.2 9.5 10.7 10.2 11H14.2C14.5 10.9 14.7 10.7 14.9 10.5C15.9 9.5 16.3 8 15.8 6.7L15.7 6.5C15.6 6.2 15.4 6 15.2 5.8C15.1 5.6 14.9 5.5 14.8 5.3C14.4 5 14 4.7 13.6 4.3C12.7 3.4 12.6 2 13.1 1C12.6 1.1 12.1 1.4 11.7 1.8C10.2 3 9.6 5.1 10.3 7V7.2C10.3 7.3 10.2 7.4 10.1 7.5C10 7.6 9.8 7.5 9.7 7.4L9.6 7.3C9 6.5 8.9 5.3 9.3 4.3C8.4 5.1 7.9 6.4 8 7.7C8 8 8.1 8.3 8.2 8.6C8.2 8.9 8.4 9.3 8.6 9.6M12.3 8.1C12.4 7.6 12.2 7.2 12.1 6.8C12 6.4 12 6 12.2 5.6L12.5 6.2C12.9 6.8 13.6 7 13.8 7.8V8.1C13.8 8.6 13.6 9.1 13.3 9.4C13.1 9.5 12.9 9.7 12.7 9.7C12.1 9.9 11.4 9.6 11 9.2C11.8 9.2 12.2 8.6 12.3 8.1M15 12V14H14L13 22H11L10 14H9V12H15Z"/>',
        className,
      );
    default:
      return svgIcon(
        '0 0 24 24',
        '<path fill="currentColor" d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"/>',
        className,
      );
  }
}

export function iconGavel(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M2 20l5-5 2 2-5 5H2v-2zm7-7l9-9 2 2-9 9-2-2zm-1 1l2 2-1 1-2-2 1-1zm3-3l2 2-7 7-2-2 7-7z"/>',
    className,
  );
}

export function iconEducation(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9 12 3zm0 2.24L18.21 9 12 11.82 5.79 9 12 5.24zM5 13.5l6 3.3v-4.8l-6-3.3v4.8zm14 0v-4.8l-6 3.3v4.8l6-3.3z"/>',
    className,
  );
}

export function iconMapPin(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>',
    className,
  );
}

export function iconClipboard(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M16 4h-1V2H9v2H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H8V6h8v14zM10 8h4v2h-4V8zm0 4h4v2h-4v-2zm0 4h2v2h-2v-2z"/>',
    className,
  );
}

export function iconBook(className = 'icon icon--nav'): SVGElement {
  return svgIcon(
    '0 0 24 24',
    '<path fill="currentColor" d="M18 2H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12V2zm-7 2h5v12l-2.5-1.5L11 16V4z"/>',
    className,
  );
}

export function categoryIcon(categoryId: string): SVGElement {
  switch (categoryId) {
    case 'statewide':
      return iconCapitol();
    case 'federal':
      return iconFlag();
    case 'state-leg':
    case 'judicial':
      return iconGavel();
    case 'school':
      return iconEducation();
    case 'county':
    case 'city':
    case 'district':
      return iconMapPin();
    case 'state-props':
    case 'local-measures':
      return iconClipboard();
    default:
      return iconBook();
  }
}

/** Pew column label as a colored chip (blue → red spectrum). */
export function typologyChip(code: TypologyCode, opts?: { title?: string }): HTMLSpanElement {
  const span = document.createElement('span');
  span.className = `typology-chip typology-chip--${code}`;
  span.textContent = code;
  if (opts?.title) span.title = opts.title;
  return span;
}

/** Confidence: high — filled circle (●). */
export function iconConfidenceHigh(className = 'icon-confidence icon-confidence--high'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<circle cx="8" cy="8" r="5.5" fill="currentColor"/>',
    className,
  );
}

/** Confidence: medium — half-filled circle (◐): filled wedge under a single full ring so stroke weight matches low/skip. */
export function iconConfidenceMed(className = 'icon-confidence icon-confidence--med'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<path fill="currentColor" d="M8 8L8 2.65A5.35 5.35 0 0 0 8 13.35Z"/><circle cx="8" cy="8" r="5.35" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    className,
  );
}

/** Confidence: low — open circle (○). */
export function iconConfidenceLow(className = 'icon-confidence icon-confidence--low'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<circle cx="8" cy="8" r="5.35" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    className,
  );
}

/** Confidence / skip — circle with horizontal bar (—). */
export function iconConfidenceSkip(className = 'icon-confidence icon-confidence--skip'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<circle cx="8" cy="8" r="5.35" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="3.75" y1="8" x2="12.25" y2="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    className,
  );
}

function confidenceIconClass(base: string, ch: string): string | null {
  const c = ch.trim();
  const tier =
    c === '●' ? 'high' : c === '◐' ? 'med' : c === '○' ? 'low' : c === '—' ? 'skip' : null;
  if (!tier) return null;
  return `${base} ${base}--${tier}`;
}

export function confidenceIconFromChar(c: string, baseClass = 'icon-confidence'): SVGElement | null {
  const ch = c.trim() === '\u2014' ? '—' : c.trim();
  const cls = confidenceIconClass(baseClass, ch);
  if (!cls) return null;
  switch (ch) {
    case '●':
      return iconConfidenceHigh(cls);
    case '◐':
      return iconConfidenceMed(cls);
    case '○':
      return iconConfidenceLow(cls);
    case '—':
      return iconConfidenceSkip(cls);
    default:
      return null;
  }
}

/** Topic scorecard: supports / affirms (✓). */
export function iconTopicSupport(className = 'topic-icon topic-icon--support'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<path d="M3.25 8.35l2.6 2.6L12.85 3.85" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    className,
  );
}

/** Strong support (✓✓): paired checks. */
export function iconTopicStrongSupport(className = 'topic-icon topic-icon--strong'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<path d="M2 8.5l2.2 2.2L7.8 4.5M8.2 8.5l2.2 2.2L14 4.5" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>',
    className,
  );
}

/** Oppose / against (✗). */
export function iconTopicOppose(className = 'topic-icon topic-icon--oppose'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<path d="M4.1 4.1l7.8 7.8M11.9 4.1l-7.8 7.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    className,
  );
}

/** Mixed / nuanced (~). */
export function iconTopicMixed(className = 'topic-icon topic-icon--mixed'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<path d="M2.25 6.25c1.6-1.35 3.1-.9 4.75 0s3.15 1.35 4.75 0 3.1-.9 4.75 0" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round"/><path d="M2.25 9.75c1.6-1.35 3.1-.9 4.75 0s3.15 1.35 4.75 0 3.1-.9 4.75 0" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round"/>',
    className,
  );
}

/** Unknown / unclear (?). */
export function iconTopicUnknown(className = 'topic-icon topic-icon--unknown'): SVGElement {
  return svgIcon(
    '0 0 16 16',
    '<path d="M8 11.4v.15M5.85 5.9a2.35 2.35 0 014.3 1.2c0 1.05-.8 1.6-1.75 2.45" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round"/>',
    className,
  );
}
