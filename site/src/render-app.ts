import type {
  BallotData,
  Candidate,
  CandidateQualification,
  ExternalRating,
  MeasureBlock,
  MeasurePosition,
  DebateBreakdown,
  MeasureReadingLink,
  Race,
  RacePoll,
  ZipRace,
  RedFlag,
  RetentionBlock,
  ScorecardRow,
  TypologyCode,
} from './types/ballot-types';
import { CONFIDENCE_LEVEL_ROWS, NO_PICK_TOKEN } from './data/confidence-levels';
import { BALLOT_PROFILES, BALLOT_ZIP_OPTIONS, saveBallotZip } from './data/ballot-profiles';
import { loadZipDistricts } from './data/zip-lookup';
import { ZIP_AREAS } from './data/zip-areas';
import { buildBallotData, ensureLocalRaces, getBallotProfile } from './data/build-ballot-data';
import {
  earlierSiteUpdateBuilds,
  siteUpdateBuildForDate,
  type SiteUpdatePanel,
} from './data/site-updates';
import { PEW_TYPOLOGY_URL, TY_CODES, TYPOLOGIES } from './data/typologies-data';
import {
  categoryIcon,
  confidenceIconFromChar,
  iconBallot,
  iconBolt,
  iconChecklist,
  iconLayers,
  iconBook,
  iconChevron,
  iconExternal,
  iconRedFlag,
  iconTopicMixed,
  iconTopicOppose,
  iconTopicStrongSupport,
  iconTopicSupport,
  iconTopicUnknown,
  partyGlyphIcon,
  typologyChip,
} from './icons.ts';
import { parsePickCell } from './parse-pick-cell.ts';
import {
  ASSESSMENT_LABEL,
  ASSESSMENT_SYMBOL,
  EXPERIENCE_DEFINITION,
  EXPERIENCE_LABEL,
  EXPERIENCE_ORDER,
} from './data/qualifications';
import {
  maxSeverity,
  SEVERITY_DEFINITION,
  SEVERITY_LABEL,
  SEVERITY_ORDER,
  sortRedFlags,
  STATUS_LABEL,
} from './data/red-flags';
import { experienceTiebreak, isTossUp, pickedCandidates } from './data/toss-up';
import { COMBINED_LEVEL_GAP, combinedCellFor } from './data/experience-views';
import { decodeChoices, encodeChoices, getChoice, importChoices, retentionKey, setChoice } from './data/my-choices';
import { pointsFor, votingInfoFor, type VotingInfo } from './data/voting-info';
import { getViewPrefs, setViewPrefs, TYPOLOGY_PLAIN, type ViewMode, type ViewPrefs } from './data/view-prefs';

/** Alternation of the nine codes for counter-argument prefixes such as `LL (` or `UR/FC (`. */
const TY_ALT = TY_CODES.join('|');

/** Leading typology token in counter-argument lines, e.g. `LL (` or `UR/FC (` */
const COUNTER_ARG_TY_PREFIX = new RegExp(String.raw`^((?:${TY_ALT})(?:\/(?:${TY_ALT}))*)\s+\(`);

function typologyNameForChip(code: TypologyCode): string | undefined {
  return TYPOLOGIES.find((t) => t.code === code)?.name;
}

function isTypologyCodeString(s: string): s is TypologyCode {
  return (TY_CODES as readonly string[]).includes(s);
}

function appendCounterTypologyChips(li: HTMLElement, group: string): void {
  const segs = group.split('/');
  for (let i = 0; i < segs.length; i++) {
    if (i > 0) li.append(document.createTextNode('/'));
    const seg = segs[i];
    if (isTypologyCodeString(seg)) li.append(typologyChip(seg, { title: typologyNameForChip(seg) }));
    else li.append(document.createTextNode(seg));
  }
}

function srConfidenceLabel(c: string): string {
  const t = c.trim() === '\u2014' ? '—' : c.trim();
  switch (t) {
    case '●':
      return 'High confidence';
    case '◐':
      return 'Medium confidence';
    case '○':
      return 'Low confidence';
    case '—':
      return 'No pick, skip';
    case '=':
      return 'Toss-up';
    default:
      return c;
  }
}

function fillPickCell(
  td: HTMLTableCellElement,
  cell: string,
  flag?: 'severe' | 'serious',
): void {
  td.classList.add('matrix-pick-cell');
  const { label, confidence } = parsePickCell(cell);
  const inner = el('span', 'pick-cell');
  const isFullSkip = confidence === NO_PICK_TOKEN && label === NO_PICK_TOKEN;
  if (isFullSkip) {
    const badge = el('span', 'pick-cell__confidence');
    const sr = el('span', 'visually-hidden');
    sr.textContent = 'No pick, skip';
    const ic = confidenceIconFromChar(NO_PICK_TOKEN);
    if (ic) badge.append(sr, ic);
    inner.append(badge);
    td.append(inner);
    return;
  }
  inner.append(document.createTextNode(label));
  if (flag) inner.append(pickFlagMarker(flag));
  if (confidence) {
    inner.append(document.createTextNode('\u00a0'));
    const badge = el('span', 'pick-cell__confidence');
    const sr = el('span', 'visually-hidden');
    sr.textContent = ` ${srConfidenceLabel(confidence)}`;
    const ic = confidenceIconFromChar(confidence);
    if (ic) badge.append(sr, ic);
    inner.append(badge);
  }
  td.append(inner);
}

/**
 * Confidence as the SVG icon plus screen-reader text. Use this instead of the ●◐○ characters on screen:
 * fonts draw ● smaller than ◐ and ○.
 */
function confidenceBadge(confidence: string, srText = ` ${srConfidenceLabel(confidence)}`): HTMLElement | null {
  const ic = confidence ? confidenceIconFromChar(confidence) : null;
  if (!ic) return null;
  const badge = el('span', 'pick-cell__confidence');
  const sr = el('span', 'visually-hidden');
  sr.textContent = srText;
  badge.append(sr, ic);
  return badge;
}

/** Small flag after a pick whose candidate has a Severe or Serious red flag. */
function pickFlagMarker(tier: 'severe' | 'serious'): HTMLElement {
  const wrap = el('span', `pick-flag pick-flag--${tier}`, {
    title: `${SEVERITY_LABEL[tier]} red flag — see the candidate card`,
  });
  const sr = el('span', 'visually-hidden');
  sr.textContent = ` (${SEVERITY_LABEL[tier]} red flag)`;
  const ic = iconRedFlag('icon icon--red-flag');
  ic.setAttribute('aria-hidden', 'true');
  wrap.append(sr, ic);
  return wrap;
}

function appendTopicPositionCell(td: HTMLTableCellElement, raw: string): void {
  td.classList.add('topic-cell');
  td.setAttribute('title', raw);
  const wrap = el('span', 'topic-cell__inner');
  let s = raw.trim();
  if (s.startsWith('✓✓')) {
    wrap.append(iconTopicStrongSupport());
    s = s.slice(2).trimStart();
  } else if (s.startsWith('✓')) {
    wrap.append(iconTopicSupport());
    s = s.slice(1).trimStart();
  } else if (s.startsWith('✗')) {
    wrap.append(iconTopicOppose());
    s = s.slice(1).trimStart();
  } else if (s.startsWith('~')) {
    wrap.append(iconTopicMixed());
    s = s.slice(1).trimStart();
  } else if (s.startsWith('?')) {
    wrap.append(iconTopicUnknown());
    s = s.slice(1).trimStart();
  }
  if (s) wrap.append(document.createTextNode(s.startsWith(' ') ? s : ` ${s}`));
  td.append(wrap);
}

/** Position column: icon + stance, optional comparison line vs incumbent / field. */
function appendScorecardPositionCell(td: HTMLTableCellElement, row: ScorecardRow): void {
  appendTopicPositionCell(td, row.position);
  if (!row.comparison?.trim()) return;
  const note = el('p', 'scorecard__comparison');
  note.textContent = row.comparison.trim();
  td.append(note);
}

function renderConfidenceLegend(): HTMLElement {
  const div = el('div', 'confidence-legend');
  const t = el('p', 'confidence-legend__title');
  t.textContent = 'Confidence at a glance';
  const row = el('ul', 'confidence-legend__list');
  for (const def of CONFIDENCE_LEVEL_ROWS) {
    const li = el('li', 'confidence-legend__item');
    const icWrap = el('span', 'confidence-legend__icon');
    const ic = confidenceIconFromChar(def.symbol);
    if (ic) icWrap.append(ic);
    const txt = el('span');
    txt.innerHTML = `<strong>${def.title}</strong> — ${def.legendDetail}`;
    li.append(icWrap, txt);
    row.append(li);
  }
  div.append(t, row);
  return div;
}

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  attrs?: Record<string, string>,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  }
  return node;
}

/**
 * Renders counter-argument prose: leading `LP` / `UR/FC` tokens use matrix typology chips; `(Name ●)` confidence markers use matrix SVG icons.
 */
function appendCounterArgumentRich(li: HTMLElement, line: string): void {
  const pm = line.match(COUNTER_ARG_TY_PREFIX);
  if (pm?.[1] !== undefined && pm.index === 0) {
    appendCounterTypologyChips(li, pm[1]);
    li.append(document.createTextNode(' ('));
    appendCounterArgumentConfidencePart(li, line.slice(pm[0].length));
    return;
  }
  appendCounterArgumentConfidencePart(li, line);
}

/** Inline confidence SVGs after pick names inside parentheses. */
function appendCounterArgumentConfidencePart(li: HTMLElement, line: string): void {
  const re = /\s([●◐○\u2014])\)/gu;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line)) !== null) {
    li.append(document.createTextNode(line.slice(last, m.index)));
    const sym = m[1] ?? '';
    const wrap = el('span', 'race__counter-confidence');
    const ic = confidenceIconFromChar(sym);
    if (ic) wrap.append(ic);
    else wrap.textContent = sym;
    li.append(wrap);
    li.append(document.createTextNode(')'));
    last = re.lastIndex;
  }
  li.append(document.createTextNode(line.slice(last)));
}

function extLink(href: string, text: string, withIcon = false): HTMLAnchorElement {
  const a = el('a', withIcon ? 'link-external' : undefined, {
    href,
    target: '_blank',
    rel: 'noopener noreferrer',
  });
  if (withIcon) {
    const span = el('span', 'link-external__text');
    span.textContent = text;
    a.append(span, iconExternal());
  } else {
    a.textContent = text;
  }
  return a;
}

function externalLinkLabel(url: string): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    if (host === 'sandiegouniontribune.com') return 'San Diego Union-Tribune';
    if (host === 'voiceofsandiego.org') return 'Voice of San Diego';
    if (host === 'timesofsandiego.com') return 'Times of San Diego';
    if (host === 'sacbee.com') return 'Sacramento Bee';
    return host;
  } catch {
    return 'Source';
  }
}

/** Appends prose with optional ` — https://…` citation tail and inline URLs as links. */
function appendRichCandidateText(parent: HTMLElement, text: string): void {
  const citation = text.match(/ — (https:\/\/\S+)$/);
  const body = citation ? text.slice(0, text.length - citation[0].length) : text;
  const segments = body.split(/(https:\/\/[^\s]+)/g);
  for (const segment of segments) {
    if (!segment) continue;
    if (segment.startsWith('https://')) {
      parent.append(extLink(segment, externalLinkLabel(segment), true));
    } else {
      parent.append(document.createTextNode(segment));
    }
  }
  if (citation?.[1]) {
    parent.append(document.createTextNode(' — '));
    parent.append(extLink(citation[1], externalLinkLabel(citation[1]), true));
  }
}

/**
 * Appends a note list item, turning bare `https://…` segments into external links (rest stays plain text).
 */
function appendCandidateNoteLine(li: HTMLLIElement, note: string): void {
  appendRichCandidateText(li, note);
}

function renderSiteUpdatePanel(panel: SiteUpdatePanel): HTMLElement {
  const d = el('details', 'site-updates__panel');
  const s = el('summary', 'site-updates__panel-summary');
  s.textContent = panel.summary;
  d.append(s);
  if (panel.body) {
    const p = el('p', 'site-updates__panel-body');
    p.textContent = panel.body;
    d.append(p);
  }
  if (panel.bullets?.length) {
    const ul = el('ul', 'site-updates__panel-list');
    for (const t of panel.bullets) {
      const li = el('li');
      li.textContent = t;
      ul.append(li);
    }
    d.append(ul);
  }
  return d;
}

function appendSiteUpdateBuildPanels(stack: HTMLElement, panels: SiteUpdatePanel[]): void {
  for (const panel of panels) {
    stack.append(renderSiteUpdatePanel(panel));
  }
}

/**
 * Collapsible “what changed” note for the current content refresh (progressive disclosure).
 */
function renderSiteUpdatesSection(lastContentUpdated: string): HTMLElement {
  const current = siteUpdateBuildForDate(lastContentUpdated);
  const earlier = earlierSiteUpdateBuilds(lastContentUpdated);

  const outer = el('details', 'site-updates', { id: 'site-updates' });
  const sum = el('summary', 'site-updates__summary');
  sum.textContent = `${lastContentUpdated} — what changed in this build`;
  const lede = el('p', 'site-updates__lede');
  lede.textContent = current.lede;

  const stack = el('div', 'site-updates__stack');
  appendSiteUpdateBuildPanels(stack, current.panels);

  if (earlier.length > 0) {
    const dEarlier = el('details', 'site-updates__panel site-updates__panel--archive');
    const sEarlier = el('summary', 'site-updates__panel-summary');
    sEarlier.textContent = 'Earlier builds';
    const archiveStack = el('div', 'site-updates__archive-stack');
    for (const build of earlier) {
      const dBuild = el('details', 'site-updates__panel site-updates__panel--nested');
      const sBuild = el('summary', 'site-updates__panel-summary');
      sBuild.textContent = build.dateLabel;
      const pBuild = el('p', 'site-updates__panel-body');
      pBuild.textContent = build.lede;
      dBuild.append(sBuild, pBuild);
      appendSiteUpdateBuildPanels(dBuild, build.panels);
      archiveStack.append(dBuild);
    }
    dEarlier.append(sEarlier, archiveStack);
    stack.append(dEarlier);
  }

  outer.append(sum, lede, stack);
  return outer;
}

function renderZipSelector(currentZip: string, appRoot: HTMLElement): HTMLElement {
  const form = el('form', 'zip-select', { role: 'search' }) as HTMLFormElement;
  const label = el('label', 'zip-select__label', { for: 'ballot-zip' });
  label.textContent = 'Your ZIP';
  const input = el('input', 'zip-select__control', {
    id: 'ballot-zip',
    name: 'zip',
    type: 'text',
    inputmode: 'numeric',
    autocomplete: 'postal-code',
    maxlength: '5',
    pattern: '[0-9]{5}',
    value: currentZip,
    'aria-describedby': 'ballot-zip-hint',
  }) as HTMLInputElement;
  const btn = el('button', 'zip-select__button', { type: 'submit' });
  btn.textContent = 'Show my ballot';
  const hint = el('p', 'zip-select__hint', { id: 'ballot-zip-hint', 'aria-live': 'polite' });
  const defaultHint = `Any California ZIP shows statewide and district races; ${BALLOT_ZIP_OPTIONS.length} ZIPs also include local contests.`;
  hint.textContent = defaultHint;
  input.addEventListener('focus', () => input.select());
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const zip = input.value.trim();
    if (!/^\d{5}$/.test(zip)) {
      hint.textContent = 'Enter a 5-digit ZIP code.';
      input.focus();
      return;
    }
    saveBallotZip(zip);
    if (zip === currentZip) return;
    btn.disabled = true;
    if (!BALLOT_PROFILES[zip]) await loadZipDistricts();
    await ensureLocalRaces(zip);
    const url = new URL(location.href);
    url.searchParams.set('zip', zip);
    url.hash = '';
    history.pushState({}, '', url);
    renderApp(appRoot, zip);
  });
  const browse = renderZipAreas(currentZip, (zip) => {
    input.value = zip;
    form.requestSubmit();
  });
  form.append(label, input, btn, hint, browse);
  return form;
}

/** Neighborhood for a ZIP chip: its label minus the county/state suffix and the city already in the heading. */
function zipPlaceLabel(scopeLabel: string, areaName: string): string {
  // Under “City of San Diego” keep names like “UC San Diego” whole; elsewhere drop the repeated city name.
  const city = areaName.startsWith('City of ') ? null : areaName;
  const place = scopeLabel
    .replace(/, (San Diego|[A-Za-z ]+ County|Colorado)$/, '')
    .replace(/ campus$/, '')
    .replace(city ? new RegExp(`(^|[\\s,(/])${city}(?=$|[\\s,)/])`, 'g') : /$^/, '$1')
    .replace(/[()]/g, '')
    .replace(/\s*,\s*$|^\s*[,/]\s*|\s*\/\s*$/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  if (!place || place === areaName) return '';
  return place[0].toUpperCase() + place.slice(1);
}

/** Collapsible list of the hand-built ZIPs, grouped by county and city; each ZIP loads its ballot. */
function renderZipAreas(currentZip: string, choose: (zip: string) => void): HTMLDetailsElement {
  const details = el('details', 'zip-areas');
  const summary = el('summary', 'zip-areas__summary');
  summary.textContent = `Browse the ${BALLOT_ZIP_OPTIONS.length} ZIPs with full local ballots`;
  details.append(summary);
  for (const g of ZIP_AREAS) {
    const head = el('p', 'zip-areas__group');
    head.textContent = g.group;
    const dl = el('dl', 'zip-areas__list');
    for (const area of g.areas) {
      const dt = el('dt', 'zip-areas__area');
      dt.textContent = area.name;
      const dd = el('dd', 'zip-areas__zips');
      for (const zip of area.zips) {
        const p = BALLOT_PROFILES[zip];
        const a = el('a', 'zip-areas__zip', { href: `?zip=${zip}` });
        if (zip === currentZip) a.setAttribute('aria-current', 'true');
        const code = el('strong');
        code.textContent = zip;
        a.append(code);
        const place = zipPlaceLabel(p.scopeLabel, area.name);
        if (place) a.append(document.createTextNode(` ${place}`));
        a.addEventListener('click', (e) => {
          if (e.metaKey || e.ctrlKey || e.shiftKey) return;
          e.preventDefault();
          choose(zip);
        });
        dd.append(a);
      }
      dl.append(dt, dd);
    }
    details.append(head, dl);
  }
  return details;
}

/** ZIP-specific scope note (which districts we modeled) + link to the official sample ballot. */
function renderScopeNote(data: BallotData, localPending: boolean): HTMLElement {
  const p = el('p', localPending ? 'scope-note scope-note--pending' : 'scope-note');
  p.append(document.createTextNode(`${data.meta.verificationNote} `));
  p.append(extLink(data.meta.registrarUrl, data.meta.registrarLabel, true));
  if (localPending || viewMode === 'full') return p;
  const d = el('details', 'scope-note scope-note--folded');
  const s = el('summary', 'scope-note__summary');
  s.textContent = 'Is this exactly my ballot?';
  p.className = 'scope-note__text';
  d.append(s, p);
  return d;
}

export function renderApp(root: HTMLElement, zip: string): void {
  root.dataset.zip = zip;
  const data = buildBallotData(zip);
  renderAbort.abort();
  renderAbort = new AbortController();
  root.replaceChildren();
  const prefs = getViewPrefs();
  root.dataset.view = prefs.mode && (prefs.mode === 'full' || prefs.typology) ? prefs.mode : 'full';
  // Site color follows the wizard choice; before one is made (or mid-wizard) the default teal stays.
  if (prefs.mode && (prefs.mode === 'full' || prefs.typology)) root.dataset.theme = prefs.mode;
  else delete root.dataset.theme;
  viewTypology = prefs.mode && prefs.mode !== 'full' ? prefs.typology : undefined;
  highlightTypology = prefs.typology;
  viewMode = prefs.mode && prefs.typology ? prefs.mode : 'full';
  setThemeColor(root.dataset.theme);
  const profile = getBallotProfile(zip);
  document.title = `Unofficial 2026 ${data.meta.state === 'CO' ? 'CO' : 'CA'} general election guide — ZIP ${data.meta.scopeZip} (${data.meta.scopeLabel})`;

  const rerender = () => {
    renderApp(root, zip);
    document.querySelector('.view-bar')?.scrollIntoView({ block: 'start' });
  };
  const header = el('header', 'site-header');
  const brand = el('div', 'site-header__brand');
  const brandIcon = el('div', 'site-header__brand-icon');
  brandIcon.append(iconBallot());
  const h1 = el('h1', 'site-header__title', { tabindex: '-1' });
  h1.textContent = data.meta.siteTitle;
  brand.append(brandIcon, h1);
  const sub = el('p', 'site-header__subtitle');
  sub.textContent = `November 3, 2026 ${data.meta.state === 'CO' ? 'Colorado' : 'California'} general election · Unofficial, independent research, not legal advice.`;
  const zipSelector = renderZipSelector(zip, root);
  const imported = renderImportBanner(data, rerender);
  header.append(
    brand,
    sub,
    viewMode === 'full' ? zipSelector : foldZipSelector(zipSelector, data),
    ...(imported ? [imported] : []),
    // A type saved under Pew’s 2021 groups was cleared: reopen the type step with a notice.
    prefs.mode && !(prefs.legacyTypology && prefs.mode !== 'full')
      ? renderViewBar(data, prefs, rerender)
      : renderWelcome(prefs, rerender, prefs.legacyTypology ? 2 : 1),
    ...(viewMode === 'full' || profile.localPending ? [renderScopeNote(data, Boolean(profile.localPending))] : []),
    // With a view chosen, the print controls live in the view bar; the changelog sits in the footer.
    ...(prefs.mode ? [] : [renderPrintPicks(data, prefs.typology)]),
  );

  const nav = el('nav', 'toc-nav', { 'aria-label': 'On this page' });
  const tocTitle = el('h2', 'toc-nav__title');
  tocTitle.textContent = 'Jump to section';
  const tocList = el('ul', 'toc-nav__list');
  for (const c of data.categories) {
    const li = el('li');
    const a = el('a', 'toc-nav__link', { href: `#cat-${c.id}` });
    const ic = categoryIcon(c.id);
    a.append(ic, document.createTextNode(c.label));
    li.append(a);
    tocList.append(li);
  }
  nav.append(tocTitle, tocList);

  pendingRaceTitles.clear();
  for (const r of data.races) pendingRaceTitles.set(r.id, r.tldrLabel ?? r.title);
  const main = el('main', undefined, { id: 'main-content' });
  main.append(
    renderHowToVote(data),
    ...(viewMode === 'quick' && viewTypology ? [renderQuickList(data, viewTypology)] : []),
    referenceFold(
      'about-guide',
      'About this guide and how picks are made',
      'How the general works, the nine voter types, methodology, and how experience and red flags are judged.',
      renderIntroBlocks(data.meta.state === 'CO'),
      renderTypologyKey(data),
      renderMethodologySection(),
    ),
    referenceFold(
      'all-picks',
      'All picks at a glance',
      `Every contest on this ballot with all nine voter types’ picks, in one table.`,
      renderTldr(data),
    ),
    // Quick view: the cheat sheet above is the contest list (each row opens its contest in place).
    ...(viewMode === 'quick' && viewTypology ? [] : [renderRacesByCategory(data)]),
    ...(viewMode !== 'full' && !profile.localPending ? [renderScopeNote(data, false)] : []),
  );

  const footer = el('footer', 'site-footer');
  const fp = el('p');
  fp.append(
    document.createTextNode(
      `Not affiliated with the ${data.meta.state === 'CO' ? 'Colorado' : 'California'} Secretary of State, any county ${data.meta.state === 'CO' ? 'clerk' : 'registrar'}, or any candidate committee. Cross-typology picks are `,
    ),
    extLink(
      PEW_TYPOLOGY_URL,
      'inferences from Pew’s 2026 typology descriptions',
      true,
    ),
    document.createTextNode(
      ', not polling of those voter groups. Vote-by-mail rules and deadlines vary by county — use official sources.',
    ),
  );
  const fp2 = el('p');
  fp2.append(
    document.createTextNode('Corrections: open an issue in the project repository. Looking for June? '),
    extLink('https://alanttran.github.io/ca-primary-26/', 'June 2 primary edition', true),
    document.createTextNode('.'),
  );
  footer.append(renderSiteUpdatesSection(data.meta.lastContentUpdated), fp, fp2);

  root.append(header, nav, main, footer, renderDock(data, header), renderPrintSheet());
  markTocProgress(data, tocList);
  const printSelect = document.getElementById('print-typology') as HTMLSelectElement | null;
  // Simple views have no print select: Ctrl+P prints the same sheet as their Print button (my choices, type fills gaps).
  fillPrintSheet(data, (printSelect?.value as PrintColumn | undefined) ?? (viewTypology ? MINE : 'LL'));
}

/** Full view's reference material, folded so the ballot comes first; links into it open the fold. */
function referenceFold(id: string, title: string, hint: string, ...children: HTMLElement[]): HTMLDetailsElement {
  const d = el('details', 'ref-fold', { id });
  const s = el('summary', 'ref-fold__summary');
  const t = el('strong', 'ref-fold__title');
  t.textContent = title;
  const h = el('span', 'ref-fold__hint');
  h.textContent = hint;
  s.append(t, h);
  const body = el('div', 'ref-fold__body');
  body.append(...children);
  d.append(s, body);
  return d;
}

/** In-page links (“#methodology”, “#red-flag-rubric”, “#race-…”) open any folds around their target first. */
function openFoldsAround(target: Element | null): void {
  for (let n = target?.parentElement; n; n = n.parentElement) {
    if (n instanceof HTMLDetailsElement) n.open = true;
    if (n.hidden && n.classList.contains('quick-list__race')) {
      n.hidden = false;
      document.querySelector(`[aria-controls="${n.id}"]`)?.setAttribute('aria-expanded', 'true');
      n.parentElement?.classList.add('is-open');
    }
  }
}
document.addEventListener('click', (e) => {
  const a = (e.target as Element | null)?.closest?.('a[href^="#"]');
  const id = a?.getAttribute('href')?.slice(1);
  if (id) openFoldsAround(document.getElementById(id));
});

/** The voter's own typology in Quick and Guided views (undefined in Full view or before they pick). */
let viewTypology: TypologyCode | undefined;
/** Effective view: Quick and Guided need a chosen type, so without one the page renders in full. */
let viewMode: ViewMode = 'full';
/** Their type, if they've picked one: its row is outlined in every picks table, in any view. */
let highlightTypology: TypologyCode | undefined;

const VIEW_LABEL: Record<ViewMode, string> = { quick: 'Quick', guided: 'Race by race', full: 'Everything' };

/** First-visit wizard: how they want to use the guide, then (for Quick/Guided) which voter type fits. */
function renderWelcome(prefs: ViewPrefs, done: () => void, startAt: 1 | 2 = 1): HTMLElement {
  const sec = el('section', 'welcome', { 'aria-labelledby': 'welcome-title' });
  let mode: ViewMode | undefined = prefs.mode;

  const stepOne = () => {
    sec.replaceChildren();
    const h2 = el('h2', 'welcome__title', { id: 'welcome-title' });
    h2.textContent = 'Welcome! How do you want to use this guide?';
    const lede = el('p', 'welcome__lede');
    lede.textContent = 'Pick one to start. You can change it anytime, and nothing you choose leaves this device.';
    const opts = el('div', 'welcome__options');
    const choices: {
      mode: ViewMode;
      icon: (className?: string) => SVGElement;
      badge?: string;
      title: string;
      text: string;
      level: 1 | 2 | 3;
      levelLabel: string;
      time: string;
      cta: string;
    }[] = [
      {
        mode: 'quick',
        icon: iconBolt,
        badge: 'Best for first-time voters',
        title: 'Just help me vote, fast',
        text: 'New voter or short on time? Find your voter type, see its pick for every contest on your ballot, print a one-page cheat sheet, and know when and where to vote.',
        level: 1,
        levelLabel: 'Least reading',
        time: 'About 5 minutes',
        cta: 'Start quick',
      },
      {
        mode: 'guided',
        icon: iconChecklist,
        title: 'Help me decide, race by race',
        text: 'See your type’s pick and the reasons on every contest, read the details you care about, mark your own choices, then print them.',
        level: 2,
        levelLabel: 'Some reading',
        time: 'About 30 minutes',
        cta: 'Go race by race',
      },
      {
        mode: 'full',
        icon: iconLayers,
        title: 'Show me everything',
        text: 'All nine viewpoints side by side, scorecards, money, red flags and how we make picks. For experienced voters and researchers.',
        level: 3,
        levelLabel: 'Full detail',
        time: 'As long as you like',
        cta: 'See everything',
      },
    ];
    for (const c of choices) {
      const m = c.mode;
      const b = el('button', `welcome__option welcome__option--${m}`, { type: 'button' });
      const top = el('span', 'welcome__option-top');
      const ic = el('span', 'welcome__option-icon');
      ic.append(c.icon('icon welcome__icon'));
      top.append(ic);
      if (c.badge) {
        const badge = el('span', 'welcome__option-badge');
        badge.textContent = c.badge;
        top.append(badge);
      }
      const t = el('strong', 'welcome__option-title');
      t.textContent = c.title;
      const d = el('span', 'welcome__option-text');
      d.textContent = c.text;
      const meta = el('span', 'welcome__option-meta');
      const meter = el('span', 'welcome__meter', { 'aria-hidden': 'true' });
      for (let i = 1; i <= 3; i++) meter.append(el('span', i <= c.level ? 'welcome__meter-bar is-on' : 'welcome__meter-bar'));
      const lvl = el('span', 'welcome__option-level');
      lvl.textContent = c.levelLabel;
      const time = el('span', 'welcome__option-time');
      time.textContent = c.time;
      meta.append(meter, lvl, document.createTextNode(' · '), time);
      const cta = el('span', 'welcome__option-cta');
      cta.textContent = `${c.cta} →`;
      b.append(top, t, d, meta, cta);
      b.addEventListener('click', () => {
        mode = m;
        if (m === 'full') {
          setViewPrefs({ ...prefs, mode: 'full' });
          done();
        } else {
          stepTwo();
        }
      });
      opts.append(b);
    }
    sec.append(h2, lede, opts);
  };

  const stepTwo = () => {
    sec.replaceChildren();
    const h2 = el('h2', 'welcome__title', { id: 'welcome-title' });
    h2.textContent = 'Which kind of voter sounds most like you?';
    const notice = el('p', 'welcome__notice', { role: 'status' });
    notice.textContent = 'Pew updated its political typology in June 2026 with nine new groups, so please pick your type again. Your marked choices are kept.';
    const quiz = el('p', 'welcome__quiz');
    quiz.append(
      document.createTextNode('Most accurate: take the Pew Research Center’s '),
      extLink('https://www.pewresearch.org/politics/quiz/political-typology', 'political typology quiz', true),
      document.createTextNode(' (about 5 minutes, opens in a new tab), then come back and pick your result. Or just pick the one closest to you below.'),
    );
    const form = el('form', 'welcome__types');
    const fs = el('fieldset', 'welcome__fieldset');
    const legend = el('legend', 'visually-hidden');
    legend.textContent = 'Your voter type';
    fs.append(legend);
    const go = el('button', 'welcome__go', { type: 'submit' });
    go.textContent = mode === 'quick' ? 'Show my cheat sheet' : 'Show my ballot';
    go.disabled = !prefs.typology;
    for (const t of TYPOLOGIES) {
      const label = el('label', 'welcome__type');
      const input = el('input', undefined, { type: 'radio', name: 'welcome-type', value: t.code });
      input.checked = prefs.typology === t.code;
      input.addEventListener('change', () => {
        go.disabled = false;
      });
      const text = el('span', 'welcome__type-text');
      const name = el('strong');
      name.textContent = t.name;
      text.append(typologyChip(t.code, { title: t.name }), document.createTextNode(' '), name, el('br'), document.createTextNode(TYPOLOGY_PLAIN[t.code]));
      label.append(input, text);
      fs.append(label);
    }
    const actions = el('div', 'welcome__actions');
    const back = el('button', 'welcome__back', { type: 'button' });
    back.textContent = 'Back';
    back.addEventListener('click', stepOne);
    actions.append(go, back);
    form.append(fs, actions);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const picked = form.querySelector<HTMLInputElement>('input[name="welcome-type"]:checked');
      if (!picked) return;
      setViewPrefs({ mode: mode ?? 'quick', typology: picked.value as TypologyCode });
      done();
    });
    const note = el('p', 'welcome__note');
    note.textContent = 'Picks are our reading of what each group values, not advice. You can always switch types or see all nine.';
    sec.append(h2, ...(prefs.legacyTypology ? [notice] : []), quiz, form, note);
  };

  if (startAt === 2 && prefs.mode && prefs.mode !== 'full') stepTwo();
  else stepOne();
  return sec;
}

/** After the wizard: who they're viewing as, how to change it, and (Quick) the three steps. */
function renderViewBar(data: BallotData, prefs: ViewPrefs, rerender: () => void): HTMLElement {
  const bar = el('section', `view-bar view-bar--${prefs.mode}`, { 'aria-label': 'How you’re using this guide' });
  const line = el('p', 'view-bar__line');
  const ty = prefs.typology ? data.typologies.find((t) => t.code === prefs.typology) : undefined;
  const mode = prefs.mode ?? 'full';
  if (mode !== 'full' && ty) {
    line.append(document.createTextNode('Viewing as '), typologyChip(ty.code, { title: ty.name }), document.createTextNode(' '));
    const strong = el('strong');
    strong.textContent = ty.name;
    line.append(strong, document.createTextNode(` · ${VIEW_LABEL[mode]} view`));
  } else {
    line.append(document.createTextNode('Showing everything: all nine viewpoints and full details.'));
  }
  const actions = el('span', 'view-bar__actions');
  const link = (text: string, onClick: () => void) => {
    const b = el('button', 'view-bar__link', { type: 'button' });
    b.textContent = text;
    b.addEventListener('click', onClick);
    actions.append(b);
  };
  const reopen = (step: 1 | 2) => bar.replaceWith(renderWelcome(prefs, rerender, step));
  if (mode !== 'full') link('Change type', () => reopen(2));
  link(mode === 'full' ? 'Switch to a simpler view' : 'Change view', () => reopen(1));
  if (mode !== 'full') {
    link('Show all', () => {
      setViewPrefs({ ...prefs, mode: 'full' });
      rerender();
    });
  }
  line.append(' ', actions);
  bar.append(line);
  if (mode === 'full') bar.append(renderPrintPicks(data, prefs.typology));

  if (mode !== 'full' && ty) {
    const ol = el('ol', 'view-bar__steps');
    const steps: (string | Node)[][] =
      mode === 'quick'
        ? [
            ['Check when and where to vote (just below).'],
            [`Review the ${ty.name} pick on each contest. Tap one to see why or to choose differently.`],
          ]
        : [
            [`Open each contest below: the ${ty.name} pick and why come first, with full details one tap further.`],
            ['Mark your own choice right under the pick.'],
          ];
    const printBtn = el('button', 'view-bar__print', { type: 'button' });
    printBtn.textContent = 'Print cheat sheet';
    printBtn.addEventListener('click', () => {
      fillPrintSheet(data, MINE);
      window.print();
    });
    steps.push([`Print your cheat sheet or send it to your phone (buttons below). It lists your choices, with ${ty.code} picks filling any you skip.`]);
    const track = votingInfoFor(data.meta.state, data.meta.registrarLabel, data.meta.scopeLabel).returning?.track;
    if (track) steps.push([extLink(track.url, track.label, true), ' to get a text when your ballot is received and counted.']);
    const tools = el('div', 'view-bar__tools');
    tools.append(printBtn, renderShareButton(data, prefs));
    for (const parts of steps) {
      const li = el('li');
      li.append(...parts);
      ol.append(li);
    }
    const progress = el('p', 'view-bar__progress', { role: 'status' });
    const total = data.races.length;
    const refresh = () => {
      const n = countMarked(data);
      progress.textContent = n ? `You’ve marked ${n} of ${total} contests.` : `${total} contests on your ballot. None marked yet.`;
      progress.hidden = mode === 'quick' && !n;
    };
    refresh();
    document.addEventListener(CHOICES_CHANGED, refresh, { signal: renderAbort.signal });
    // Once they've started marking, the steps fold to one line so the contests sit higher on phones.
    const how = el('details', 'view-bar__how');
    const howSum = el('summary', 'view-bar__how-summary');
    howSum.textContent = 'How this works';
    how.append(howSum, ol);
    bar.append(how, tools, progress);
  }
  return bar;
}

/** Header control: pick your typology column, then print a one-page cheat sheet of those picks. */
function renderPrintPicks(data: BallotData, typology?: TypologyCode): HTMLElement {
  const wrap = el('div', 'print-picks');
  const label = el('label', 'print-picks__label', { for: 'print-typology' });
  label.textContent = 'Cheat sheet for';
  const select = el('select', 'print-picks__control', { id: 'print-typology' }) as HTMLSelectElement;
  const mine = document.createElement('option');
  mine.value = MINE;
  mine.textContent = 'My own choices';
  select.append(mine);
  for (const t of data.typologies) {
    const option = document.createElement('option');
    option.value = t.code;
    option.textContent = `${t.code} — ${t.name}`;
    select.append(option);
  }
  select.value = countMarked(data) ? MINE : (typology ?? 'LL');
  select.addEventListener('change', () => fillPrintSheet(data, select.value as PrintColumn));
  const btn = el('button', 'print-picks__button', { type: 'button' });
  btn.textContent = 'Print my picks';
  btn.addEventListener('click', () => {
    fillPrintSheet(data, select.value as PrintColumn);
    window.print();
  });
  const progress = el('span', 'print-picks__progress', { role: 'status' });
  const total = data.races.length;
  const refresh = () => {
    const n = countMarked(data);
    progress.textContent = n
      ? `You’ve marked ${n} of ${total} contests.`
      : 'Mark your own choice at the bottom of each contest to print those instead.';
  };
  refresh();
  document.addEventListener(CHOICES_CHANGED, refresh, { signal: renderAbort.signal });
  wrap.append(label, select, btn, renderShareButton(data, getViewPrefs()), progress);
  return wrap;
}

/** Cleared on every render so listeners added for the previous ballot (choices, scroll) go away with it. */
let renderAbort = new AbortController();

/** Browser toolbar color on phones, matching the view's theme. */
const THEME_COLOR: Record<string, string> = { quick: '#0f766e', guided: '#4f46e5', full: '#475569' };
function setThemeColor(theme: string | undefined): void {
  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!meta) {
    meta = el('meta', undefined, { name: 'theme-color' });
    document.head.append(meta);
  }
  meta.content = THEME_COLOR[theme ?? 'quick'];
}

/** Simple views: the ZIP box shrinks to one line (“ZIP 92126 · Mira Mesa · Change”) until opened. */
function foldZipSelector(form: HTMLElement, data: BallotData): HTMLDetailsElement {
  const d = el('details', 'zip-fold');
  const s = el('summary', 'zip-fold__summary');
  const zip = el('strong');
  zip.textContent = `ZIP ${data.meta.scopeZip}`;
  const place = el('span', 'zip-fold__place');
  place.textContent = ` · ${data.meta.scopeLabel}`;
  const change = el('span', 'zip-fold__change');
  change.textContent = 'Change';
  s.append(zip, place, change);
  d.append(s, form);
  d.addEventListener('toggle', () => {
    if (d.open) form.querySelector<HTMLInputElement>('input')?.focus();
  });
  return d;
}

const SHARE_PREFIX = '#mine=';

/** Every storage key this ballot's marks live under (race ids, plus one per justice in retention races). */
function choiceKeys(data: BallotData): string[] {
  return data.races.flatMap((r) =>
    r.kind === 'retention' && r.retention ? r.retention.justices.map((j) => retentionKey(r.id, j.name)) : [r.id],
  );
}

/** “Send to my phone”: a link carrying this ballot's marks and view in the URL fragment, which never reaches a server. */
function renderShareButton(data: BallotData, prefs: ViewPrefs): HTMLElement {
  const wrap = el('span', 'share-mine');
  const btn = el('button', 'share-mine__button', { type: 'button' });
  btn.textContent = 'Send to phone';
  const status = el('span', 'share-mine__status', { role: 'status' });
  btn.addEventListener('click', async () => {
    const url = new URL(location.href);
    url.searchParams.set('zip', data.meta.scopeZip);
    const view = prefs.mode ? `&v=${prefs.mode}${prefs.typology ? `.${prefs.typology}` : ''}` : '';
    url.hash = `${SHARE_PREFIX.slice(1)}${encodeChoices(choiceKeys(data))}${view}`;
    const link = url.toString();
    const n = countMarked(data);
    const what = n ? `your ${n} marked ${n === 1 ? 'choice' : 'choices'}` : 'this ballot and view';
    try {
      if (navigator.share && matchMedia('(pointer: coarse)').matches) {
        await navigator.share({ title: 'My ballot choices', url: link });
        return;
      }
      await navigator.clipboard.writeText(link);
      status.textContent = `Link copied with ${what}. Text or email it to yourself and open it on your phone.`;
    } catch (e) {
      if ((e as Error).name === 'AbortError') return;
      status.textContent = '';
      const field = el('input', 'share-mine__field', { type: 'text', readonly: '', 'aria-label': 'Link to your choices' }) as HTMLInputElement;
      field.value = link;
      status.append(document.createTextNode('Copy this link: '), field);
      field.select();
    }
  });
  wrap.append(btn, status);
  return wrap;
}

/** Opening a “Send to my phone” link: offer to load the marks it carries (nothing loads without a tap). */
function renderImportBanner(data: BallotData, rerender: () => void): HTMLElement | null {
  if (!location.hash.startsWith(SHARE_PREFIX)) return null;
  const params = new URLSearchParams(location.hash.slice(1));
  const incoming = decodeChoices(params.get('mine') ?? '');
  const view = params.get('v')?.split('.');
  const clearHash = () => history.replaceState(history.state, '', location.pathname + location.search);
  const keys = new Set(choiceKeys(data));
  const count = data.races.filter((r) =>
    r.kind === 'retention' && r.retention
      ? r.retention.justices.some((j) => incoming[retentionKey(r.id, j.name)])
      : incoming[r.id],
  ).length;
  const box = el('section', 'import-banner', { 'aria-label': 'Choices from a link' });
  const p = el('p', 'import-banner__text');
  p.textContent = count
    ? `This link carries ${count} marked ${count === 1 ? 'contest' : 'contests'} for ZIP ${data.meta.scopeZip}. Load them on this device? Any marks you already have for those contests will be replaced.`
    : 'This link opens your ballot and view. It has no marked choices to load.';
  const actions = el('div', 'import-banner__actions');
  const load = el('button', 'import-banner__load', { type: 'button' });
  load.textContent = count ? 'Load my choices' : 'Use this view';
  load.addEventListener('click', () => {
    importChoices(Object.fromEntries(Object.entries(incoming).filter(([k]) => keys.has(k))));
    const [mode, typology] = view ?? [];
    const cur = getViewPrefs();
    const next = { ...cur };
    if (mode === 'quick' || mode === 'guided' || mode === 'full') next.mode = mode;
    if (typology && TYPOLOGY_PLAIN[typology as TypologyCode]) next.typology = typology as TypologyCode;
    setViewPrefs(next);
    clearHash();
    rerender();
  });
  const skip = el('button', 'import-banner__skip', { type: 'button' });
  skip.textContent = 'Ignore';
  skip.addEventListener('click', () => {
    clearHash();
    box.remove();
  });
  actions.append(load, skip);
  box.append(p, actions);
  return box;
}

/** Quick view: every contest and the voter type's pick on one screen; tap a row to open that contest. */
function renderQuickList(data: BallotData, code: TypologyCode): HTMLElement {
  const sec = el('section', 'quick-list', { 'aria-labelledby': 'quick-list-title' });
  const h2 = el('h2', 'quick-list__title', { id: 'quick-list-title', tabindex: '-1' });
  const ty = data.typologies.find((t) => t.code === code);
  h2.append(typologyChip(code, { title: ty?.name ?? code }), document.createTextNode(` Your cheat sheet: ${data.races.length} contests`));
  const lede = el('p', 'quick-list__lede');
  lede.textContent = 'Tap a contest to see why, or to mark your own choice.';
  sec.append(h2, lede);
  const refreshers: (() => void)[] = [];
  for (const cat of data.categories) {
    const races = data.races.filter((r) => r.categoryId === cat.id);
    if (!races.length) continue;
    const ch = el('h3', 'quick-list__cat');
    ch.textContent = cat.label;
    const ul = el('ul', 'quick-list__rows');
    for (const race of races) {
      const row = race.crossTypology.find((r) => r.typology === code);
      const li = el('li');
      // A toggle, not a link: the contest opens right under its row.
      const a = el('button', 'quick-list__row', { type: 'button', 'aria-expanded': 'false', 'aria-controls': `quick-race-${race.id}` });
      const name = el('span', 'quick-list__name');
      name.textContent = race.tldrLabel ?? race.title;
      const pick = el('span', 'quick-list__pick');
      const tp = row ? typePick(race, row) : undefined;
      if (!tp || tp.none) {
        pick.textContent = 'No pick';
        pick.classList.add('quick-list__pick--none');
      } else {
        pick.append(tp.label);
        if (tp.flag) pick.append(pickFlagMarker(tp.flag));
        // Same SVG confidence icons as the picks tables (the ● glyph renders smaller than ◐/○ in most fonts).
        const badge = tp.tossUp ? null : confidenceBadge(tp.confidence);
        if (badge) pick.append(document.createTextNode(' '), badge);
      }
      const mine = el('span', 'quick-list__mine');
      const refresh = () => {
        const s = choiceSummary(race, true);
        mine.hidden = !s;
        mine.textContent = s ? `✓ You: ${s}` : '';
      };
      refresh();
      refreshers.push(refresh);
      a.append(name, pick, mine);
      const holder = el('div', 'quick-list__race', { id: `quick-race-${race.id}` });
      holder.hidden = true;
      const details = renderRace(race) as HTMLDetailsElement;
      details.open = true;
      holder.append(details);
      a.addEventListener('click', () => {
        holder.hidden = !holder.hidden;
        a.setAttribute('aria-expanded', String(!holder.hidden));
        li.classList.toggle('is-open', !holder.hidden);
      });
      li.append(a, holder);
      ul.append(li);
    }
    sec.append(ch, ul);
  }
  document.addEventListener(CHOICES_CHANGED, () => refreshers.forEach((f) => f()), { signal: renderAbort.signal });
  return sec;
}

/** Opens a contest, scrolls it to the top and moves focus to its summary. */
function openRace(id: string): void {
  const d = document.getElementById(`race-${id}`) as HTMLDetailsElement | null;
  if (!d) return;
  openFoldsAround(d);
  d.open = true;
  history.replaceState(history.state, '', `#race-${id}`);
  d.scrollIntoView({ block: 'start' });
  d.querySelector('summary')?.focus({ preventScroll: true });
}

/**
 * Bottom dock, shown once the header scrolls away: “Top” on every view, plus (race by race) progress and a
 * button to the next unmarked contest below where they are.
 */
function renderDock(data: BallotData, header: HTMLElement): HTMLElement {
  const dock = el('div', 'dock', { role: 'region', 'aria-label': 'Ballot shortcuts' });
  dock.hidden = true;
  const top = el('button', 'dock__top', { type: 'button' });
  // Quick view's home base is the cheat-sheet list; elsewhere it's the top (ZIP box and view bar).
  const toList = viewMode === 'quick' && Boolean(viewTypology);
  top.textContent = toList ? '↑ Cheat sheet' : '↑ Top';
  top.addEventListener('click', () => {
    const target = toList ? document.getElementById('quick-list-title') : document.querySelector<HTMLElement>('.site-header__title');
    if (toList) target?.scrollIntoView({ block: 'start' });
    else window.scrollTo({ top: 0 });
    target?.focus({ preventScroll: true });
  });
  dock.append(top);
  let onShow: (() => void) | undefined;
  if (viewMode === 'guided') {
    const progress = el('span', 'dock__progress', { 'aria-live': 'polite' });
    const next = el('button', 'dock__next', { type: 'button' });
    const total = data.races.length;
    const nextUnmarked = (): Race | undefined => {
      const unmarked = data.races.filter((r) => !choiceSummary(r));
      // First unmarked contest starting below the one at the top of the screen (an opened contest sits
      // ~5rem down, under the scroll padding), else the first one left.
      const line = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop || '0') + 48;
      return (
        unmarked.find((r) => (document.getElementById(`race-${r.id}`)?.getBoundingClientRect().top ?? -1) > line) ??
        unmarked[0]
      );
    };
    const refresh = () => {
      const n = countMarked(data);
      progress.textContent = `${n} of ${total} marked`;
      const r = nextUnmarked();
      next.textContent = r ? `Next: ${r.tldrLabel ?? r.title} →` : 'All marked · Print';
    };
    next.addEventListener('click', () => {
      const r = nextUnmarked();
      if (r) openRace(r.id);
      else {
        fillPrintSheet(data, MINE);
        window.print();
      }
    });
    refresh();
    document.addEventListener(CHOICES_CHANGED, refresh, { signal: renderAbort.signal });
    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          refresh();
        });
      },
      { passive: true, signal: renderAbort.signal },
    );
    dock.classList.add('dock--guided');
    dock.append(progress, next);
    onShow = refresh;
  }
  const io = new IntersectionObserver(([e]) => {
    dock.hidden = e.isIntersecting;
    if (!dock.hidden) onShow?.();
  });
  io.observe(header);
  renderAbort.signal.addEventListener('abort', () => io.disconnect());
  return dock;
}

/** Jump-to-section links get a check once every contest in that section is marked. */
function markTocProgress(data: BallotData, list: HTMLElement): void {
  const links = Array.from(list.querySelectorAll<HTMLAnchorElement>('.toc-nav__link'));
  const refresh = () => {
    for (const a of links) {
      const catId = a.getAttribute('href')!.slice('#cat-'.length);
      const races = data.races.filter((r) => r.categoryId === catId);
      const done = races.length > 0 && races.every((r) => choiceSummary(r));
      a.classList.toggle('toc-nav__link--done', done);
      a.querySelector('.toc-nav__done')?.remove();
      if (done) {
        const tick = el('span', 'toc-nav__done');
        tick.textContent = ' ✓';
        const sr = el('span', 'visually-hidden');
        sr.textContent = ' (all marked)';
        tick.append(sr);
        a.append(tick);
      }
    }
  };
  refresh();
  document.addEventListener(CHOICES_CHANGED, refresh, { signal: renderAbort.signal });
}

/** Print-sheet column: a typology, or the voter's own marks. */
type PrintColumn = TypologyCode | typeof MINE;
const MINE = 'MINE';
const CHOICES_CHANGED = 'my-choices-changed';

function countMarked(data: BallotData): number {
  return data.races.filter((r) => choiceSummary(r)).length;
}

/** The voter's marks for one contest as print text, or undefined when nothing is marked. */
function choiceSummary(race: Race, short = false): string | undefined {
  if (race.kind === 'retention' && race.retention) {
    const js = race.retention.justices;
    const marks = js
      .map((j) => ({ name: j.name, v: getChoice(retentionKey(race.id, j.name))[0] }))
      .filter((m) => m.v);
    if (!marks.length) return undefined;
    const yes = marks.filter((m) => m.v === 'Yes').map((m) => m.name);
    const no = marks.filter((m) => m.v === 'No').map((m) => m.name);
    if (marks.length === js.length && !no.length) return 'Yes on all';
    if (marks.length === js.length && !yes.length) return 'No on all';
    if (short) return `${marks.length} of ${js.length} marked`;
    const parts = [];
    if (yes.length) parts.push(`Yes: ${yes.join(', ')}`);
    if (no.length) parts.push(`No: ${no.join(', ')}`);
    if (marks.length < js.length) parts.push(`${js.length - marks.length} not marked`);
    return parts.join(' · ');
  }
  const v = getChoice(race.id);
  return v.length ? v.join(', ') : undefined;
}

/** Container shown only in print (see `@media print`); filled for the chosen typology. */
function renderPrintSheet(): HTMLElement {
  return el('section', 'print-sheet', { id: 'print-sheet', 'aria-hidden': 'true' });
}

/** Printable area at 0.5in margins that fits both Letter (shorter) and A4 (narrower), in CSS px. */
const PRINT_AREA = { width: 7.25 * 96, height: 9.85 * 96 };
/** Layouts to try, largest type first (one column, then two, at each size): [columns, font size in pt]. */
const PRINT_FITS: [1 | 2, number][] = [12, 11.5, 11, 10.5, 10, 9.5, 9, 8.5, 8, 7.5, 7].flatMap((pt): [1 | 2, number][] => [
  [1, pt],
  [2, pt],
]);

/**
 * Just before printing, lay the sheet out off-screen at page width and keep the roomiest layout that fits
 * one page. Very long ballots get the smallest layout and may still run onto a second page.
 */
function fitPrintSheet(): void {
  const sheet = document.getElementById('print-sheet');
  if (!sheet?.childElementCount) return;
  const apply = ([cols, pt]: [1 | 2, number]) => {
    sheet.style.setProperty('--print-fs', `${pt}pt`);
    sheet.classList.toggle('print-sheet--two-col', cols === 2);
  };
  sheet.classList.add('print-sheet--measure');
  sheet.style.width = `${PRINT_AREA.width}px`;
  const fit = PRINT_FITS.find((f) => {
    apply(f);
    return sheet.offsetHeight <= PRINT_AREA.height;
  });
  apply(fit ?? PRINT_FITS[PRINT_FITS.length - 1]);
  sheet.classList.remove('print-sheet--measure');
  sheet.style.width = '';
}
window.addEventListener('beforeprint', fitPrintSheet);

function fillPrintSheet(data: BallotData, code: PrintColumn): void {
  const sheet = document.getElementById('print-sheet');
  if (!sheet) return;
  sheet.replaceChildren();
  if (code === MINE) {
    fillMyChoicesSheet(sheet, data, viewTypology);
    return;
  }
  const ty = data.typologies.find((t) => t.code === code);
  const h = el('h2', 'print-sheet__title');
  h.textContent = `My picks — ${ty?.name ?? code} (${code})`;
  const sub = el('p', 'print-sheet__sub');
  sub.textContent = `Nov 3, 2026 · ZIP ${data.meta.scopeZip} (${data.meta.scopeLabel}) · unofficial guide — check against your official ballot.`;
  const body = el('div', 'print-sheet__body');
  sheet.append(h, sub, body);
  for (const cat of data.categories) {
    const races = data.races.filter((r) => r.categoryId === cat.id);
    if (!races.length) continue;
    const tbl = el('table', 'print-sheet__table');
    const thead = el('thead');
    thead.append(printCatRow(cat.label, 2));
    const tb = el('tbody');
    const flagMark = (flag: 'severe' | 'serious' | undefined) => (flag ? ' ⚑' : '');
    const cellText = (cell: string, flag: 'severe' | 'serious' | undefined) =>
      !cell || cell.trim().endsWith('—')
        ? '— (no pick)'
        : cell.trim().endsWith(' =')
          ? `Toss-up: ${cell.trim().slice(0, -2)}${flagMark(flag)}`
          : `${cell}${flagMark(flag)}`;
    for (const race of races) {
      const row = race.crossTypology.find((r) => r.typology === code);
      const tr = el('tr');
      const th = el('th', undefined, { scope: 'row' });
      th.textContent = race.tldrLabel ?? race.title;
      const tier = maxSeverity(row ? pickedCandidates(race, row).flatMap((c) => c.redFlags ?? []) : []);
      const fitFlag = tier === 'severe' || tier === 'serious' ? tier : undefined;
      const fitCell = row ? `${row.pick} ${row.confidence}`.trim() : '';
      const td = el('td');
      td.textContent = cellText(fitCell, fitFlag);
      tr.append(th, td);
      tb.append(tr);
    }
    tbl.append(thead, tb);
    body.append(printGroup(tbl));
  }
  const legend = el('p', 'print-sheet__sub');
  legend.textContent =
    '● high confidence · ◐ medium · ○ low · — skip / no pick · ⇄ pick changes when experience is weighed (plain type fit in brackets) · ⚑ candidate has a Severe or Serious red flag';
  sheet.append(legend);
}

/**
 * One section of the print sheet. The heading and first two contests form a block that can't split, so a
 * heading never sits alone at the bottom of a column; the rest go in a second table that can flow on.
 */
function printGroup(tbl: HTMLTableElement): HTMLElement {
  const group = el('div', 'print-sheet__group');
  const rows = Array.from(tbl.tBodies[0].rows);
  const widths = ['52%', '48%'];
  const cols = () => {
    const cg = el('colgroup');
    for (const w of widths) cg.append(el('col', undefined, { style: `width:${w}` }));
    return cg;
  };
  const head = tbl.cloneNode(false) as HTMLTableElement;
  const headBody = el('tbody');
  headBody.append(...rows.slice(0, 2));
  head.append(cols(), tbl.tHead!, headBody);
  head.classList.add('print-sheet__table--lead');
  group.append(head);
  if (rows.length > 2) {
    const rest = tbl.cloneNode(false) as HTMLTableElement;
    const restBody = el('tbody');
    restBody.append(...rows.slice(2));
    rest.append(cols(), restBody);
    group.append(rest);
  }
  return group;
}

/** Section heading as the first header row, so it never ends up alone at the bottom of a column. */
function printCatRow(label: string, span: number): HTMLTableRowElement {
  const tr = el('tr', 'print-sheet__cat-row');
  const th = el('th', 'print-sheet__cat', { colspan: String(span), scope: 'colgroup' });
  th.textContent = label;
  tr.append(th);
  return tr;
}

/** The voter's marks in ballot order; with `fallback`, unmarked contests show that type's pick instead. */
function fillMyChoicesSheet(sheet: HTMLElement, data: BallotData, fallback?: TypologyCode): void {
  const h = el('h2', 'print-sheet__title');
  h.textContent = 'My choices';
  const sub = el('p', 'print-sheet__sub');
  sub.textContent = fallback
    ? `Nov 3, 2026 · ZIP ${data.meta.scopeZip} (${data.meta.scopeLabel}) · my marks, and the ${fallback} pick where I didn’t mark one · unofficial guide — check against your official ballot.`
    : `Nov 3, 2026 · ZIP ${data.meta.scopeZip} (${data.meta.scopeLabel}) · marked by me on an unofficial guide — check against your official ballot.`;
  const body = el('div', 'print-sheet__body');
  sheet.append(h, sub, body);
  for (const cat of data.categories) {
    const races = data.races.filter((r) => r.categoryId === cat.id);
    if (!races.length) continue;
    const tbl = el('table', 'print-sheet__table print-sheet__table--mine');
    const thead = el('thead');
    thead.append(printCatRow(cat.label, 2));
    const tb = el('tbody');
    for (const race of races) {
      const tr = el('tr');
      const th = el('th', undefined, { scope: 'row' });
      th.textContent = race.tldrLabel ?? race.title;
      const td = el('td');
      const fb = fallback ? race.crossTypology.find((r) => r.typology === fallback) : undefined;
      const fbp = fb ? typePick(race, fb) : undefined;
      const fbText = fbp && !fbp.none ? `${fbp.tossUp ? fbp.label : `${fbp.pick} ${fbp.confidence}`} (${fallback} pick)`.replace(/\s+/g, ' ') : undefined;
      td.textContent = choiceSummary(race) ?? fbText ?? '— (not marked)';
      tr.append(th, td);
      tb.append(tr);
    }
    tbl.append(thead, tb);
    body.append(printGroup(tbl));
  }
  if (fallback) {
    const legend = el('p', 'print-sheet__sub');
    legend.textContent = `${fallback} picks: ● high confidence · ◐ medium · ○ low · ⇄ pick changes when experience is weighed`;
    sheet.append(legend);
  }
}

const HOW_GENERAL_CA = `
      <h2 id="how-general"><span class="intro-card__heading-icon" aria-hidden="true"></span>How the November general works</h2>
      <p>Most contests on the <strong>November 3, 2026</strong> ballot are runoffs between the <strong>top two</strong> finishers from June’s primary—sometimes two candidates from the same party. Supreme Court and Court of Appeal justices appear as <strong>yes/no retention</strong> votes, and every Californian votes on the statewide <strong>propositions</strong>.</p>
      <p><a href="https://www.sos.ca.gov/elections" target="_blank" rel="noopener noreferrer">SOS elections hub</a> ·
         <a href="https://voterguide.sos.ca.gov/" target="_blank" rel="noopener noreferrer">Official CA voter guide</a> ·
         <a href="https://california.ballottrax.net/voter/" target="_blank" rel="noopener noreferrer">Where’s My Ballot?</a></p>`;

const HOW_GENERAL_CO = `
      <h2 id="how-general"><span class="intro-card__heading-icon" aria-hidden="true"></span>How Colorado’s November general works</h2>
      <p>Colorado holds party primaries, so most partisan contests on the <strong>November 3, 2026</strong> ballot pit each party’s nominee against each other, plus minor-party and unaffiliated candidates. Judges face <strong>yes/no retention</strong> votes, and every Coloradan votes on the statewide <strong>amendments and propositions</strong>; constitutional amendments need 55% to pass.</p>
      <p><a href="https://www.coloradosos.gov/pubs/elections/main.html" target="_blank" rel="noopener noreferrer">Colorado SOS elections</a> ·
         <a href="https://leg.colorado.gov/bluebook" target="_blank" rel="noopener noreferrer">Blue Book</a> ·
         <a href="https://www.denvergov.org/elections" target="_blank" rel="noopener noreferrer">Denver Elections</a></p>`;

/** Key dates and where-to-vote links for this ZIP’s county; past dates dim and the next one is marked. */
function renderHowToVote(data: BallotData): HTMLElement {
  const info = votingInfoFor(data.meta.state, data.meta.registrarLabel, data.meta.scopeLabel);
  const sec = el('section', 'how-vote', { 'aria-labelledby': 'how-vote-title' });
  const h2 = el('h2', 'how-vote__title', { id: 'how-vote-title' });
  h2.textContent = `How and when to vote in ${info.where}`;
  sec.append(h2);
  if (info.heads) {
    const p = el('p', 'how-vote__heads');
    p.textContent = info.heads;
    sec.append(p);
  }
  const today = new Date();
  const todayIso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const nextIso = info.dates.find((d) => d.iso >= todayIso)?.iso;
  const ol = el('ol', 'how-vote__dates');
  for (const d of info.dates) {
    const state = d.iso < todayIso ? 'past' : d.iso === nextIso ? 'next' : 'later';
    const li = el('li', `how-vote__date how-vote__date--${state}`);
    const when = el('time', 'how-vote__when', { datetime: d.iso });
    when.textContent = d.label;
    li.append(when);
    if (state === 'next') {
      const tag = el('span', 'how-vote__next');
      tag.textContent = d.iso === todayIso ? 'Today' : 'Next';
      li.append(tag);
    }
    const text = el('span', 'how-vote__text');
    text.textContent = d.text;
    li.append(text);
    ol.append(li);
  }
  const links = el('ul', 'how-vote__links');
  for (const l of info.links) {
    const li = el('li');
    li.append(extLink(l.url, l.label, true));
    links.append(li);
  }
  sec.append(ol);
  if (info.returning) sec.append(renderReturning(info.returning, todayIso));
  sec.append(links);
  const upcoming = info.dates.filter((d) => d.iso >= todayIso);
  if (upcoming.length) {
    const cal = el('button', 'how-vote__calendar', { type: 'button' });
    cal.textContent = `Add ${upcoming.length === 1 ? 'this date' : `these ${upcoming.length} dates`} to my calendar`;
    cal.addEventListener('click', () => downloadCalendar(upcoming, info.where));
    sec.append(cal);
  }
  if (viewMode === 'full') return sec;
  // Simple views: one line with the next deadline; tap for all dates and where-to-vote links.
  const next = info.dates.find((d) => d.iso === nextIso);
  const wrap = el('details', 'how-vote how-vote--folded');
  const summary = el('summary', 'how-vote__summary');
  const title = el('strong', 'how-vote__summary-title');
  title.textContent = 'When and where to vote';
  summary.append(title);
  const nextLine = el('span', 'how-vote__summary-next');
  nextLine.textContent = next
    ? `${next.iso === todayIso ? 'Today' : `Next: ${next.label}`}. ${next.text.split('. ')[0].replace(/\.$/, '')}.`
    : 'Voting is over. Track your ballot to make sure it counted.';
  summary.append(nextLine);
  sec.className = 'how-vote__inner';
  h2.className = 'visually-hidden';
  wrap.append(summary, sec);
  return wrap;
}

/** “Mail it or drop it off?”: a fold in the dates box with this year's ballot-return advice and sources. */
function renderReturning(r: NonNullable<VotingInfo['returning']>, todayIso: string): HTMLDetailsElement {
  const d = el('details', 'how-vote__returning');
  const s = el('summary', 'how-vote__returning-summary');
  s.textContent = 'Mail it or drop it off? What’s safest this year';
  const ul = el('ul', 'how-vote__returning-points');
  for (const p of pointsFor(r.points, todayIso)) {
    const li = el('li');
    li.textContent = p;
    ul.append(li);
  }
  const track = el('div', 'how-vote__track');
  const why = el('p', 'how-vote__track-why');
  const strong = el('strong');
  strong.textContent = 'Track your ballot. ';
  why.append(strong, r.track.why);
  const go = extLink(r.track.url, `${r.track.label} →`);
  go.className = 'how-vote__track-link';
  track.append(why, go);
  const src = el('p', 'how-vote__returning-sources');
  src.append('Sources: ');
  r.sources.forEach((x, i) => {
    if (i) src.append(' · ');
    src.append(extLink(x.url, x.label));
  });
  d.append(s, ul, track, src);
  return d;
}

/** All-day calendar events (.ics) for the remaining voting dates, built in the browser and saved by the visitor. */
function downloadCalendar(dates: { iso: string; label: string; text: string }[], where: string): void {
  const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
  // Fold lines at 75 octets-ish (RFC 5545); 70 characters keeps multi-byte text safely under.
  const fold = (line: string) => line.match(/.{1,70}/gu)!.join('\r\n ');
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
  const nextDay = (iso: string) => {
    const d = new Date(`${iso}T12:00:00Z`);
    d.setUTCDate(d.getUTCDate() + 1);
    return d.toISOString().slice(0, 10).replace(/-/g, '');
  };
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//ca-general-26//voter guide//EN', 'CALSCALE:GREGORIAN'];
  for (const d of dates) {
    // First sentence: split at “. ” before a capital, so “7 a.m.–8 p.m. Drop boxes” keeps its “p.m.”.
    const first = d.text.split(/(?<=\.) (?=[A-Z])/)[0].replace(/(?<![ap]\.m)\.$/, '');
    lines.push(
      'BEGIN:VEVENT',
      `UID:${d.iso}-${where.replace(/\W+/g, '-').toLowerCase()}@ca-general-26`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${d.iso.replace(/-/g, '')}`,
      `DTEND;VALUE=DATE:${nextDay(d.iso)}`,
      fold(`SUMMARY:${esc(`Vote: ${first}`)}`),
      fold(`DESCRIPTION:${esc(`${d.text}\n\n${where}. Unofficial guide: ${location.origin}${location.pathname}`)}`),
      'TRANSP:TRANSPARENT',
      'END:VEVENT',
    );
  }
  lines.push('END:VCALENDAR');
  const blob = new Blob([lines.join('\r\n') + '\r\n'], { type: 'text/calendar' });
  const a = el('a', undefined, { href: URL.createObjectURL(blob), download: 'voting-dates-nov-2026.ics' });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function renderIntroBlocks(colorado: boolean): HTMLElement {
  const wrap = el('section', 'intro-grid');
  wrap.innerHTML = `
    <section class="intro-card" aria-labelledby="how-general">${colorado ? HOW_GENERAL_CO : HOW_GENERAL_CA}
    </section>
    <section class="intro-card" aria-labelledby="how-guide">
      <h2 id="how-guide"><span class="intro-card__heading-icon intro-card__heading-icon--secondary" aria-hidden="true"></span>How to use this guide</h2>
      <p>Each race includes <strong>web-condensed</strong> backgrounds, scorecards where available, money and endorsement notes, red-flag callouts, and a <strong>cross-typology recommendation row</strong> with confidence icons (see legend under the TL;DR summary).</p>
      <p>Propositions and local measures get a Yes/No pick per column; judicial retention votes are grouped into one table per court. Use <strong>Print my picks</strong> in the header for a one-page cheat sheet in ballot order.</p>
      <p>Want a simpler view? Use <strong>Switch to a simpler view</strong> under the ZIP box to switch to a quick cheat sheet or a race-by-race view for your voter type.</p>
      <p>At the bottom of each contest you can <strong>mark your own choice</strong>. Marks stay in this browser only (nothing is sent anywhere), and the cheat sheet can print them.</p>
    </section>
  `;
  wrap.querySelector('#how-general .intro-card__heading-icon')?.append(iconBallot('icon icon--intro'));
  wrap.querySelector('#how-guide .intro-card__heading-icon')?.append(iconBook('icon icon--intro'));
  return wrap;
}

function renderTypologyKey(data: BallotData): HTMLElement {
  const sec = el('section', 'typology-key');
  const h2 = el('h2');
  h2.id = 'typology-key';
  h2.textContent = 'The nine Pew typology columns';
  const lede = el('p', 'typology-key__lede');
  lede.append(
    document.createTextNode('Take the '),
    extLink(
      'https://www.pewresearch.org/politics/quiz/political-typology',
      'Pew Political Typology Quiz',
      true,
    ),
    document.createTextNode(' once so you know which column is yours.'),
  );
  const table = el('table', 'typology-key__table');
  table.setAttribute('aria-labelledby', 'typology-key');
  const thead = el('thead');
  const trh = el('tr');
  const thc = el('th', undefined, { scope: 'col' });
  thc.textContent = 'Code';
  const thn = el('th', undefined, { scope: 'col' });
  thn.textContent = 'Typology (Pew chapter)';
  trh.append(thc, thn);
  thead.append(trh);
  const tb = el('tbody');
  for (const t of data.typologies) {
    const tr = el('tr');
    const th = el('th', undefined, { scope: 'row' });
    th.append(typologyChip(t.code, { title: t.name }));
    const td = el('td');
    const profile = extLink(t.pewChapterUrl, t.name, true);
    td.append(profile, document.createTextNode(` — ${t.description}`));
    tr.append(th, td);
    tb.append(tr);
  }
  table.append(thead, tb);
  const scroll = el('div', 'table-scroll');
  scroll.append(table);
  sec.append(h2, lede, scroll);
  return sec;
}

/**
 * How picks, confidence, experience and red flags are judged: one short block each, two columns on wide screens.
 */
function renderMethodologySection(): HTMLElement {
  const sec = el('section', 'methodology');
  sec.id = 'methodology';

  const h2 = el('h2', 'methodology__title');
  h2.textContent = 'Methodology';
  const lead = el('p', 'methodology__lede');
  lead.textContent =
    'Picks translate public records, reporting and questionnaires into the values Pew describes for each group. They are our judgment, not a poll of those groups. Percentages in the reasons come from Pew’s June 2026 typology report and its July 2026 midterm survey; “about” marks a figure read from one of Pew’s charts.';

  const grid = el('div', 'methodology__grid');
  const block = (heading: string, id: string | undefined, ...children: Node[]) => {
    const b = el('div', 'methodology__block');
    const h = el('h3', 'methodology__subhead');
    h.textContent = heading;
    if (id) h.id = id;
    b.append(h, ...children);
    grid.append(b);
  };
  const text = (t: string) => {
    const p = el('p', 'methodology__text');
    p.textContent = t;
    return p;
  };

  const ulConf = el('ul', 'confidence-legend__list methodology__confidence-legend');
  for (const def of CONFIDENCE_LEVEL_ROWS) {
    const li = el('li', 'confidence-legend__item');
    const icWrap = el('span', 'confidence-legend__icon');
    const ic = confidenceIconFromChar(def.symbol);
    if (ic) icWrap.append(ic);
    const txt = el('span');
    const strong = el('strong');
    strong.textContent = def.title;
    txt.append(strong, document.createTextNode(` — ${def.methodologyDetail}`));
    li.append(icWrap, txt);
    ulConf.append(li);
  }
  block(
    'How picks are made',
    undefined,
    text(
      'For each column we pick the candidate (or Yes/No) least at odds with that group’s instincts, then check viability and red flags. Close calls say what the trade-off is.',
    ),
    ulConf,
  );

  block(
    'Experience and picks',
    undefined,
    text(
      `Experience never changes a pick. Groups that value competence, such as Pragmatic and Polite Right and Loyal Liberals, already weigh it in their picks, while others, such as Left-Out Left, deliberately favor outsiders. When a medium or low pick faces a rival at least ${COMBINED_LEVEL_GAP} experience levels higher, or a column has no pick and one candidate is clearly the most experienced, a “But consider (experience)” line joins the counter-arguments under the reason, naming that candidate and what an experience-first voter in the group would weigh.`,
    ),
  );

  const ulExp = el('ul', 'methodology__rubric');
  for (const level of EXPERIENCE_ORDER) {
    const li = el('li');
    li.append(experienceBadge(level), document.createTextNode(` ${EXPERIENCE_DEFINITION[level]}`));
    ulExp.append(li);
  }
  block(
    'How we rate experience',
    'experience-rubric',
    text(
      'Each race lists the legal requirements and 3–5 things the job needs; every finalist is checked against each (✓ met, ~ partly, ✗ not met, ? unclear) with evidence. Bar and judicial-evaluation ratings are quoted word for word. Experience informs picks but doesn’t decide them; some voters prefer outsiders.',
    ),
    ulExp,
  );

  const ulRubric = el('ul', 'methodology__rubric');
  for (const tier of SEVERITY_ORDER) {
    const li = el('li');
    li.append(severityBadge(tier), document.createTextNode(`: ${SEVERITY_DEFINITION[tier]}`));
    ulRubric.append(li);
  }
  block(
    'How we rate red flags',
    'red-flag-rubric',
    text(
      'Each flag is sourced and labeled with a tier, a status, and why it matters for that office. Policy disagreements go in Notes instead.',
    ),
    ulRubric,
    text(
      `Status: ${Object.values(STATUS_LABEL).join(', ')}. “Alleged” and “Disputed” mean nothing is proven. A Severe flag caps a pick at ◐ and is named in its rationale; Severe and Serious flags on a picked candidate are marked ⚑ in the summary and answered in the counter-arguments.`,
    ),
  );

  block(
    'Reading the cards',
    undefined,
    text(
      'Scorecards: ✓✓ strong support, ✓ support, ✗ oppose, ~ mixed, ? unclear; a muted second line compares the stance with the other candidate or the outgoing officeholder. “Record vs. change” on a contested incumbent’s card weighs what they’ve delivered against what replacing them would cost.',
    ),
  );

  const pPew = el('p', 'methodology__text');
  pPew.append(
    document.createTextNode('Pew built the nine groups in its '),
    extLink(PEW_TYPOLOGY_URL, '2026 political typology', true),
    document.createTextNode(' (June 2026) by clustering 10,357 adults’ answers to 30 values questions; our mapping of candidates to them is heuristic. Treat picks as shortcuts, and check your official ballot.'),
  );
  block('About Pew’s groups', undefined, pPew);

  sec.append(h2, lead, grid);
  return sec;
}

type TldrView = 'typology' | 'experience';

const TLDR_VIEW_KEY = 'ca-general-26:tldr-view';

const TLDR_VIEWS: { id: TldrView; label: string; caption: string }[] = [
  {
    id: 'typology',
    label: 'Typology fit',
    caption:
      'Picks by worldview. Each cell shows the recommended name plus a confidence icon (see legend above). A red flag after a name means that candidate has a Severe or Serious red flag on their card.',
  },
  {
    id: 'experience',
    label: 'Experience',
    caption:
      'The most experienced candidate in each race, using the experience rating on each candidate card. Experience doesn’t depend on worldview, so there is one column. Ballot measures and retention votes aren’t listed: there are no candidates to compare.',
  },
];

function readTldrView(): TldrView {
  try {
    const v = localStorage.getItem(TLDR_VIEW_KEY);
    if (v === 'typology' || v === 'experience') return v;
  } catch {
    /* storage unavailable: use the default */
  }
  return 'typology';
}

let tldrView: TldrView = readTldrView();

function renderTldr(data: BallotData): HTMLElement {
  const sec = el('section', 'tldr');
  const h2 = el('h2');
  h2.id = 'tldr-matrix';
  h2.textContent = 'TL;DR summary (all races)';

  const toggle = el('div', 'view-toggle', { role: 'group', 'aria-label': 'Summary view' });
  const body = el('div', 'tldr__body');
  const buttons = TLDR_VIEWS.map((v) => {
    const b = el('button', 'view-toggle__btn', { type: 'button' });
    b.textContent = v.label;
    b.addEventListener('click', () => {
      tldrView = v.id;
      try {
        localStorage.setItem(TLDR_VIEW_KEY, v.id);
      } catch {
        /* not remembered; still switches */
      }
      paint();
    });
    toggle.append(b);
    return b;
  });

  const paint = (): void => {
    buttons.forEach((b, i) => b.setAttribute('aria-pressed', String(TLDR_VIEWS[i].id === tldrView)));
    body.replaceChildren(...renderTldrView(data, tldrView));
  };
  paint();
  sec.append(h2, toggle, body);
  return sec;
}

function renderTldrView(data: BallotData, view: TldrView): HTMLElement[] {
  const cap = el('p', 'table-caption');
  cap.id = 'tldr-cap';
  cap.textContent = TLDR_VIEWS.find((v) => v.id === view)!.caption;
  if (view === 'experience') return [cap, renderExperienceTable(data)];

  const spectrum = el('div', 'typology-spectrum');
  spectrum.setAttribute('role', 'presentation');
  const spectrumLabel = el('p', 'typology-spectrum__label');
  spectrumLabel.textContent = 'Column colors: left-of-center (blue) → center → right-of-center (red).';
  const bar = el('div', 'typology-spectrum__bar');
  spectrum.append(spectrumLabel, bar);
  const legend = renderConfidenceLegend();
  const wrap = el('div', 'table-scroll');
  const table = el('table', 'matrix-table');
  table.setAttribute('aria-labelledby', 'tldr-matrix');
  table.setAttribute('aria-describedby', 'tldr-cap');
  const thead = el('thead');
  const trh = el('tr');
  const thRace = el('th', 'matrix-col matrix-col--race', { scope: 'col' });
  thRace.textContent = 'Race';
  trh.append(thRace);
  for (const code of TY_CODES) {
    const th = el('th', `matrix-col matrix-col--${code}`, { scope: 'col' });
    const title = data.typologies.find((t) => t.code === code)?.name ?? code;
    th.append(typologyChip(code, { title }));
    trh.append(th);
  }
  thead.append(trh);
  const tb = el('tbody');
  for (const row of data.tldrRows) {
    const tr = el('tr');
    const th = el('th', 'matrix-col matrix-col--race', { scope: 'row' });
    const inner = el('a', undefined, { href: `#race-${row.raceId}` });
    inner.textContent = row.label;
    th.append(inner);
    tr.append(th);
    for (const code of TY_CODES) {
      const td = el('td', `matrix-col matrix-col--${code}`);
      fillPickCell(td, row.cells[code] ?? '—', row.flags[code]);
      tr.append(td);
    }
    tb.append(tr);
  }
  table.append(thead, tb);
  wrap.append(table);
  return [spectrum, legend, cap, wrap];
}

function renderExperienceTable(data: BallotData): HTMLElement {
  const wrap = el('div', 'table-scroll');
  const table = el('table', 'matrix-table exp-table');
  table.setAttribute('aria-labelledby', 'tldr-matrix');
  table.setAttribute('aria-describedby', 'tldr-cap');
  const thead = el('thead');
  const trh = el('tr');
  const thRace = el('th', 'matrix-col matrix-col--race', { scope: 'col' });
  thRace.textContent = 'Race';
  const thExp = el('th', 'exp-table__col', { scope: 'col' });
  thExp.textContent = 'Most experienced';
  trh.append(thRace, thExp);
  thead.append(trh);
  const tb = el('tbody');
  for (const row of data.tldrRows) {
    const exp = row.experience;
    if (!exp) continue; // measures and retention votes: no candidates to compare
    const tr = el('tr');
    const th = el('th', 'matrix-col matrix-col--race', { scope: 'row' });
    const link = el('a', undefined, { href: `#race-${row.raceId}` });
    link.textContent = row.label;
    th.append(link);
    const td = el('td', 'exp-table__cell');
    const list = el('span', 'exp-table__entries');
    for (const e of exp.entries) {
      const item = el('span', 'exp-table__entry');
      const name = el('span');
      name.textContent = e.label;
      item.append(name, experienceBadge(e.level));
      list.append(item);
    }
    td.append(list);
    const note = exp.unopposed ? 'Unopposed' : exp.tie ? 'Tied' : '';
    if (note) {
      const n = el('span', 'exp-table__note');
      n.textContent = note;
      td.append(n);
    }
    tr.append(th, td);
    tb.append(tr);
  }
  table.append(thead, tb);
  wrap.append(table);
  return wrap;
}

function renderRacesByCategory(data: BallotData): DocumentFragment {
  const frag = document.createDocumentFragment();
  for (const cat of data.categories) {
    const races = data.races.filter((r) => r.categoryId === cat.id);
    if (races.length === 0) continue;
    const section = el('section', 'race-category');
    section.id = `cat-${cat.id}`;
    const h2 = el('h2', 'race-category__title');
    const iconWrap = el('span', 'race-category__icon');
    iconWrap.append(categoryIcon(cat.id));
    h2.append(iconWrap, document.createTextNode(cat.label));
    section.append(h2);
    for (const race of races) {
      section.append(renderRace(race));
    }
    frag.append(section);
  }
  return frag;
}

/** Titles of the races on the ballot being rendered, so measures can link to related measures. */
const pendingRaceTitles = new Map<string, string>();

function renderRace(race: ZipRace): HTMLElement {
  const details = el('details', 'race');
  details.id = `race-${race.id}`;
  const summary = el('summary', 'race__summary');
  const chev = iconChevron('icon icon--chevron race__chevron');
  const sumText = el('span', 'race__summary-text');
  const titleEl = el('span', 'race__summary-title');
  titleEl.textContent = race.title;
  sumText.append(titleEl);
  if (race.seatContext) {
    sumText.append(document.createTextNode(' · '));
    const seatEl = el('span', 'race__summary-seat');
    seatEl.textContent = race.seatContext;
    sumText.append(seatEl);
  }
  if (race.voteFor && race.voteFor > 1) {
    sumText.append(document.createTextNode(' · '));
    const vf = el('span', 'race__summary-seat');
    vf.textContent = `Vote for up to ${race.voteFor}`;
    sumText.append(vf);
  }
  if (race.zipSharePct !== undefined) {
    const share = el('span', 'race__zip-share', {
      title: 'Only part of this ZIP votes in this contest — check your official sample ballot.',
    });
    share.textContent = `~${Math.round(race.zipSharePct)}% of this ZIP`;
    sumText.append(document.createTextNode(' '), share);
  }
  const typeRow = viewTypology ? race.crossTypology.find((r) => r.typology === viewTypology) : undefined;
  if (typeRow) {
    const pick = el('span', 'race__typick');
    const tp = typePick(race, typeRow);
    pick.append(`${typeRow.typology}: `);
    pick.append(tp.none ? 'no pick' : tp.label);
    const badge = tp.none || tp.tossUp ? null : confidenceBadge(tp.confidence);
    if (badge) pick.append(document.createTextNode(' '), badge);
    sumText.append(document.createTextNode(' '), pick);
  }
  const mineBadge = el('span', 'race__mine');
  const refreshBadge = () => {
    const s = choiceSummary(race, true);
    mineBadge.hidden = !s;
    mineBadge.textContent = s ? `✓ ${s}` : '';
  };
  refreshBadge();
  sumText.append(document.createTextNode(' '), mineBadge);
  summary.append(chev, sumText);
  details.append(summary);

  const body = el('div', 'race__body');
  if (typeRow) body.append(renderYourTypePick(race, typeRow));
  if (race.kind === 'measure' && race.measure) {
    // Measures lead with what the vote decides and the case each way; background folds away.
    body.append(renderMeasureOverview(race.measure));
    if (race.polling?.length) body.append(renderRacePolling(race.polling));
    body.append(renderCrossTable(race));
    body.append(renderMeasureMore(race, race.measure));
  } else {
    if (race.stakesParagraphs?.length) {
      const stakeHead = el('h3', 'race__subhead race__subhead--stakes');
      stakeHead.textContent = 'What’s at stake';
      body.append(stakeHead);
      for (const p of race.stakesParagraphs) {
        const para = el('p', 'race__stakes');
        para.textContent = p;
        body.append(para);
      }
    }
    const background = raceBackground(race);
    if (background) body.append(background);

    if (race.polling?.length) body.append(renderRacePolling(race.polling));

    if (race.kind === 'candidates' && race.qualificationCriteria?.length) {
      body.append(renderQualificationComparison(race));
    }

    body.append(renderCrossTable(race));
  }

  if (race.kind === 'measure') {
    // rendered above
  } else if (race.kind === 'retention' && race.retention) {
    body.append(renderRetention(race.retention));
  } else {
    const n = race.candidates.length;
    for (const c of race.candidates) {
      body.append(renderCandidate(c, n));
    }
  }

  // Counter-arguments now sit in their typology's row of the picks table; only lines that match no row stay here.
  const unmatchedCounters = (race.counterArguments ?? []).filter((l) => !parseCounter(l));
  if (unmatchedCounters.length) {
    const h3 = el('h3', 'race__subhead');
    h3.textContent = 'Counter-arguments';
    body.append(h3);
    const ul = el('ul', 'race__counter');
    for (const line of unmatchedCounters) {
      const li = el('li');
      appendCounterArgumentRich(li, line);
      ul.append(li);
    }
    body.append(ul);
  }

  const choice = renderYourChoice(race, () => {
    refreshBadge();
    document.dispatchEvent(new Event(CHOICES_CHANGED));
  });
  body.append(choice);

  if ((viewMode === 'quick' || viewMode === 'guided') && typeRow) {
    // Quick and Race by race: the pick, your vote, and everything else one tap away.
    const callout = body.firstElementChild!;
    const rest = Array.from(body.children).filter((n) => n !== callout && n !== choice);
    body.replaceChildren(callout, choice, moreDetails(quickDetailsLabel(race), ...rest));
  }
  // Props: every “LAO” in the text links to that measure's Legislative Analyst's Office analysis.
  const lao = race.measure?.readingLinks?.find((l) => l.url.includes('lao.ca.gov'));
  if (lao) linkAcronym(body, 'LAO', lao.url, `Legislative Analyst’s Office: ${lao.label.replace(/^LAO\s*[—-]\s*/, '')}`);
  details.append(body);
  return details;
}

/** Wraps each whole-word `word` in `root`'s text (outside existing links) in a link to `url`, titled `title`. */
function linkAcronym(root: HTMLElement, word: string, url: string, title: string): void {
  const re = new RegExp(`\\b${word}\\b`);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) =>
      re.test(n.nodeValue ?? '') && !n.parentElement?.closest('a, summary, button, label') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT,
  });
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const node of nodes) {
    const parts = (node.nodeValue ?? '').split(new RegExp(`\\b(${word})\\b`));
    const frag = document.createDocumentFragment();
    parts.forEach((part, i) => {
      if (i % 2 === 0) {
        if (part) frag.append(part);
      } else {
        const a = el('a', 'acronym-link', { href: url, target: '_blank', rel: 'noopener noreferrer', title });
        a.textContent = part;
        frag.append(a);
      }
    });
    node.replaceWith(frag);
  }
}

function quickDetailsLabel(race: Race): string {
  if (race.kind === 'measure') return 'Full details: what it does, the case for and against, money and endorsements';
  if (race.kind === 'retention') return 'Full details: each judge’s background and record';
  return 'Full details: candidates, experience, money, endorsements and red flags';
}

/** “Label: Paper A; Paper B” with each paper linked to its editorial when we have the URL. */
function renderPaperLine(label: string, papers: MeasurePosition[], className = 'measure__backers'): HTMLElement {
  const p = el('p', className);
  const strong = el('strong');
  strong.textContent = `${label}: `;
  p.append(strong);
  papers.forEach((x, i) => {
    if (i) p.append('; ');
    p.append(x.url ? extLink(x.url, x.org) : x.org);
  });
  return p;
}

/** “What it means for you”: wallet, who it affects, then what a Yes and a No win would do. */
function renderForYou(f: NonNullable<MeasureBlock['forYou']>, yes: string, no: string): HTMLElement {
  const box = el('section', 'for-you', { 'aria-label': 'What it means for you' });
  const h = el('p', 'for-you__title');
  h.textContent = 'What it means for you';
  const dl = el('dl', 'for-you__list');
  const rows: [string, string, string][] = [
    ['wallet', 'Your wallet', f.wallet],
    ['who', 'Who it affects most', f.who],
    ['yes', 'If Yes wins', yes],
    ['no', 'If No wins', no],
  ];
  for (const [mod, term, text] of rows) {
    const row = el('div', `for-you__row for-you__row--${mod}`);
    const dt = el('dt');
    dt.textContent = term;
    const dd = el('dd');
    dd.textContent = text;
    row.append(dt, dd);
    dl.append(row);
  }
  box.append(h, dl);
  return box;
}

/** “News explainer: <outlet: headline>”: the measure's featured neutral news piece (`explainerUrl`), if set. */
function renderExplainerLine(m: MeasureBlock, className: string): HTMLElement | null {
  const link = m.explainerUrl ? m.readingLinks?.find((l) => l.url === m.explainerUrl) : undefined;
  if (!link) return null;
  const p = el('p', className);
  const strong = el('strong');
  strong.textContent = 'News explainer: ';
  p.append(strong, extLink(link.url, link.label, true));
  return p;
}

/** Quick/Guided measure callout: which newspaper editorial boards say Yes and which say No. */
function renderPapersAtAGlance(m: MeasureBlock): HTMLElement | null {
  const eds = (m.positions ?? []).filter((p) => p.kind === 'editorial' && p.position !== 'No position');
  if (!eds.length) return null;
  const wrap = el('div', 'your-type__papers');
  for (const side of ['Yes', 'No'] as const) {
    const list = eds.filter((p) => p.position === side);
    if (list.length) wrap.append(renderPaperLine(`Papers for ${side}`, list, 'your-type__papers-line'));
  }
  return wrap;
}

/** The pick shown for a typology: the 2026 typology pick as written (experience never changes it). */
function typePick(race: Race, row: Race['crossTypology'][number]): {
  pick: string;
  /** What to show: the pick, or “Toss-up: A / B”. */
  label: string;
  confidence: string;
  none: boolean;
  tossUp: boolean;
  flag?: 'severe' | 'serious';
} {
  const tier = maxSeverity(pickedCandidates(race, row).flatMap((c) => c.redFlags ?? []));
  const tossUp = isTossUp(row);
  return {
    pick: row.pick,
    label: tossUp ? `Toss-up: ${row.pick}` : row.pick,
    confidence: row.confidence,
    none: !row.pick || row.pick === '—',
    tossUp,
    flag: tier === 'severe' || tier === 'serious' ? tier : undefined,
  };
}

/** A far more experienced rival to a weak pick (or the most experienced candidate where there is no pick), with why. */
function experienceNote(race: Race, row: Race['crossTypology'][number]): { alt: string; reason: string } | undefined {
  if (race.kind !== 'candidates') return undefined;
  const c = combinedCellFor(race, row.pick, row.confidence);
  if (!c.reason) return undefined;
  return { alt: parsePickCell(c.cell).label, reason: row.experienceRationale ?? c.reason };
}

/** Quick/Guided: the voter's own type's pick and reason, at the top of each contest. */
function renderYourTypePick(race: Race, row: Race['crossTypology'][number]): HTMLElement {
  const box = el('div', 'your-type');
  const head = el('p', 'your-type__head');
  head.append(typologyChip(row.typology, { title: typologyNameForChip(row.typology) }), document.createTextNode(' '));
  const tp = typePick(race, row);
  const label = el('strong');
  const group = typologyNameForChip(row.typology);
  label.textContent = tp.none ? `${group}: no pick` : tp.tossUp ? `${group}: ${tp.label}` : `${group} pick: ${tp.pick}`;
  head.append(label);
  if (!tp.none && !tp.tossUp) {
    const conf = el('span', 'your-type__conf');
    const icon = confidenceBadge(tp.confidence, '');
    conf.append(document.createTextNode(' '), ...(icon ? [icon] : []), document.createTextNode(` ${srConfidenceLabel(tp.confidence).toLowerCase()}`));
    head.append(conf);
  }
  const why = el('p', 'your-type__why');
  why.textContent = row.rationale;
  box.append(head, why);
  // Measures: facts (what each outcome does) come before the trade-off; candidates have no such block.
  const trade = renderTradeoff(race, row.typology, 'your-type__tradeoff');
  if (trade && race.kind !== 'measure') box.append(trade);
  if (race.kind === 'candidates' && race.candidates.length) {
    const who = el('p', 'your-type__cands');
    const strong = el('strong');
    strong.textContent = race.candidates.length === 1 ? 'Candidate: ' : 'Candidates: ';
    who.append(strong, document.createTextNode(race.candidates.map((c) => (c.party && c.party !== 'NP' ? `${c.name} (${c.party})` : c.name)).join(' · ')));
    box.append(who);
    if (tp.flag) {
      const warn = el('p', 'your-type__flag');
      warn.textContent = `⚑ This pick has a ${SEVERITY_LABEL[tp.flag].toLowerCase()} red flag. Open the full details to read it before you decide.`;
      box.append(warn);
    }
  }
  // Race by race shows the measure's own “What it means for you” card right below, so the facts aren't repeated here.
  if (race.kind === 'measure' && race.measure?.yesMeans && race.measure.noMeans && viewMode !== 'guided') {
    const title = el('p', 'your-type__section');
    title.textContent = 'What your vote does';
    const dl = el('dl', 'your-type__means');
    const rows: [string, string, string][] = [
      ['yes', 'If Yes wins', race.measure.yesMeans],
      ['no', 'If No wins', race.measure.noMeans],
    ];
    if (race.measure.forYou) rows.unshift(['wallet', 'Your wallet', race.measure.forYou.wallet]);
    for (const [mod, term, text] of rows) {
      const dt = el('dt', `your-type__means-term your-type__means-term--${mod}`);
      dt.textContent = term;
      const dd = el('dd');
      dd.textContent = text;
      dl.append(dt, dd);
    }
    box.append(title, dl);
  }
  if (trade && race.kind === 'measure') box.append(trade);
  if (race.kind === 'measure' && race.measure) {
    const papers = renderPapersAtAGlance(race.measure);
    if (papers) box.append(papers);
    const explainer = renderExplainerLine(race.measure, 'your-type__explainer');
    if (explainer) box.append(explainer);
  }
  return box;
}

/** “Your choice” controls at the end of a contest; marks are saved in this browser only. */
function renderYourChoice(race: Race, onChange: () => void): HTMLElement {
  const box = el('fieldset', 'your-choice');
  const legend = el('legend', 'your-choice__legend');
  legend.textContent = 'Your choice';
  const hint = el('p', 'your-choice__hint');
  hint.textContent =
    viewMode === 'full'
      ? 'Saved in this browser only. Pick “My own choices” next to Print my picks to print them.'
      : 'Saved on this device only. Your marks go on your printed cheat sheet.';
  box.append(legend, hint);

  if (race.kind === 'retention' && race.retention) {
    const list = el('div', 'your-choice__justices');
    const radios: HTMLInputElement[] = [];
    race.retention.justices.forEach((j, i) => {
      const key = retentionKey(race.id, j.name);
      const row = el('div', 'your-choice__justice', { role: 'radiogroup', 'aria-label': j.name });
      const name = el('span', 'your-choice__justice-name');
      name.textContent = j.name;
      row.append(name);
      for (const v of ['Yes', 'No']) {
        const input = el('input', undefined, { type: 'radio', name: `mine-${race.id}-${i}`, value: v });
        input.checked = getChoice(key)[0] === v;
        input.dataset.key = key;
        input.addEventListener('change', () => {
          setChoice(key, [v]);
          onChange();
        });
        radios.push(input);
        const label = el('label', 'your-choice__option');
        label.append(input, document.createTextNode(v));
        row.append(label);
      }
      list.append(row);
    });
    const setAll = (v: string | null) => {
      for (const r of radios) {
        r.checked = v !== null && r.value === v;
        setChoice(r.dataset.key!, v === null ? [] : [v]);
      }
      onChange();
    };
    const actions = el('div', 'your-choice__actions');
    for (const [text, v] of [['Yes on all', 'Yes'], ['No on all', 'No'], ['Clear', null]] as const) {
      const b = el('button', 'your-choice__button', { type: 'button' });
      b.textContent = text;
      b.addEventListener('click', () => setAll(v));
      actions.append(b);
    }
    box.append(actions, list);
    return box;
  }

  const values = race.kind === 'measure' ? ['Yes', 'No'] : race.candidates.map((c) => c.name);
  const max = race.voteFor && race.voteFor > 1 ? race.voteFor : 1;
  const inputs: HTMLInputElement[] = [];
  const options = el('div', 'your-choice__options');
  const sync = () => {
    if (max === 1) return;
    const full = inputs.filter((x) => x.checked).length >= max;
    for (const x of inputs) x.disabled = full && !x.checked;
  };
  for (const v of values) {
    const input = el('input', undefined, { type: max === 1 ? 'radio' : 'checkbox', name: `mine-${race.id}`, value: v });
    input.checked = getChoice(race.id).includes(v);
    input.addEventListener('change', () => {
      setChoice(race.id, inputs.filter((x) => x.checked).map((x) => x.value));
      sync();
      onChange();
    });
    inputs.push(input);
    const label = el('label', 'your-choice__option');
    label.append(input, document.createTextNode(v));
    options.append(label);
  }
  sync();
  const clear = el('button', 'your-choice__button', { type: 'button' });
  clear.textContent = 'Clear';
  clear.addEventListener('click', () => {
    for (const x of inputs) x.checked = false;
    setChoice(race.id, []);
    sync();
    onChange();
  });
  if (max > 1) {
    const note = el('p', 'your-choice__hint');
    note.textContent = `Vote for up to ${max}.`;
    box.append(note);
  }
  options.append(clear);
  box.append(options);
  return box;
}

function experienceBadge(level: CandidateQualification['level']): HTMLElement {
  const b = el('span', `exp-badge exp-badge--${level}`, { title: EXPERIENCE_DEFINITION[level] });
  b.textContent = EXPERIENCE_LABEL[level];
  return b;
}

function externalRatingLine(r: ExternalRating, className: string): HTMLElement {
  const p = el('p', className);
  const strong = el('strong');
  strong.textContent = `${r.source}: `;
  p.append(strong, document.createTextNode(`${r.rating}${r.dateLabel ? ` (${r.dateLabel})` : ''} `));
  p.append(extLink(r.url, 'Source', true));
  return p;
}

function assessmentCell(td: HTMLTableCellElement, assessment: keyof typeof ASSESSMENT_LABEL, evidence?: string): void {
  td.classList.add('qual-cell', `qual-cell--${assessment}`);
  const mark = el('span', 'qual-cell__mark', { 'aria-hidden': 'true' });
  mark.textContent = ASSESSMENT_SYMBOL[assessment];
  const sr = el('span', 'visually-hidden');
  sr.textContent = `${ASSESSMENT_LABEL[assessment]}. `;
  td.append(mark, sr);
  if (evidence) {
    const ev = el('span', 'qual-cell__evidence');
    ev.textContent = evidence;
    td.append(ev);
  }
}

/** Side-by-side: each finalist against the office’s criteria. */
function renderQualificationComparison(race: Race): HTMLElement {
  const wrap = el('div', 'qual-compare');
  const h3 = el('h3', 'race__subhead');
  h3.textContent = 'Experience for the job';
  wrap.append(h3);
  if (race.legalRequirements) {
    const legal = el('p', 'qual-compare__legal');
    const strong = el('strong');
    strong.textContent = 'Legal requirements: ';
    legal.append(strong, document.createTextNode(race.legalRequirements));
    wrap.append(legal);
  }
  const table = el('table', 'qual-compare__table');
  const cap = el('caption', 'visually-hidden');
  cap.textContent = `Experience comparison for ${race.title}`;
  const thead = el('thead');
  const trh = el('tr');
  const th0 = el('th', undefined, { scope: 'col' });
  th0.textContent = 'What the job needs';
  trh.append(th0);
  for (const c of race.candidates) {
    const th = el('th', undefined, { scope: 'col' });
    th.textContent = c.name;
    if (c.qualification) th.append(el('br'), experienceBadge(c.qualification.level));
    trh.append(th);
  }
  thead.append(trh);
  const tb = el('tbody');
  for (const crit of race.qualificationCriteria ?? []) {
    const tr = el('tr');
    const th = el('th', undefined, { scope: 'row' });
    th.textContent = crit.label;
    if (crit.detail) {
      const d = el('span', 'qual-compare__detail');
      d.textContent = crit.detail;
      th.append(el('br'), d);
    }
    tr.append(th);
    for (const c of race.candidates) {
      const td = el('td');
      const a = c.qualification?.criteria.find((x) => x.criterionId === crit.id);
      assessmentCell(td, a?.assessment ?? 'unknown', a?.evidence);
      tr.append(td);
    }
    tb.append(tr);
  }
  table.append(cap, thead, tb);
  const scroll = el('div', 'table-scroll');
  scroll.append(table);
  const note = el('p', 'qual-compare__note');
  const rubricLink = el('a', undefined, { href: '#experience-rubric' });
  rubricLink.textContent = 'How we rate experience';
  note.append(document.createTextNode('Experience is one input, not a verdict—some voters prefer outsiders. '), rubricLink);
  wrap.append(scroll, note);
  return wrap;
}

function renderRacePolling(polls: RacePoll[]): HTMLElement {
  const wrap = el('div', 'race__polling');
  const h3 = el('h3', 'race__subhead');
  h3.textContent = 'Recent head-to-head polling';
  const ul = el('ul', 'race__polling-list');
  for (const poll of polls) {
    const li = el('li');
    const strong = el('strong');
    strong.textContent = poll.resultDisplay;
    li.append(strong, document.createTextNode(` · ${poll.pollsterCredit} (${poll.fieldDatesLabel}) `));
    li.append(extLink(poll.sourceUrl, 'Poll release', true));
    ul.append(li);
  }
  wrap.append(h3, ul);
  return wrap;
}

/** One compact table for a court’s yes/no retention votes. */
function renderRetention(block: RetentionBlock): HTMLElement {
  const wrap = el('div', 'retention');
  const h3 = el('h3', 'race__subhead');
  h3.textContent = 'Justices on the ballot';
  const note = el('p', 'retention__note');
  note.textContent =
    block.note ??
    'Each vote asks only whether that justice should serve the term on the ballot—a sitting justice’s new 12-year term, or the rest of the term for a recent appointee. If “No” wins, the governor appoints someone else. No California appellate justice has lost a retention vote since 1986.';
  const table = el('table', 'retention__table');
  const thead = el('thead');
  const trh = el('tr');
  for (const t of ['Justice', 'Court', 'Appointed by', 'Background']) {
    const th = el('th', undefined, { scope: 'col' });
    th.textContent = t;
    trh.append(th);
  }
  thead.append(trh);
  const tb = el('tbody');
  for (const j of block.justices) {
    const tr = el('tr');
    if (maxSeverity(j.redFlags) === 'severe') tr.classList.add('retention__row--alert');
    const th = el('th', undefined, { scope: 'row' });
    th.textContent = j.name;
    const title = el('span', 'retention__title');
    title.textContent = j.title;
    th.append(el('br'), title);
    const tdCourt = el('td');
    tdCourt.textContent = j.court;
    const tdAppt = el('td');
    tdAppt.textContent = j.appointedBy;
    const tdNotes = el('td');
    if (j.externalRating) tdNotes.append(externalRatingLine(j.externalRating, 'retention__rating'));
    for (const n of j.notes) {
      const p = el('p', 'retention__text');
      appendRichCandidateText(p, n);
      tdNotes.append(p);
    }
    if (j.redFlags?.length) {
      const ul = el('ul', 'retention__flags flag-list');
      for (const f of sortRedFlags(j.redFlags)) {
        const li = el('li');
        appendRedFlagListItem(li, f);
        ul.append(li);
      }
      tdNotes.append(ul);
    }
    if (j.sources?.length) {
      const p = el('p', 'retention__sources');
      j.sources.forEach((src, i) => {
        if (i > 0) p.append(document.createTextNode(' · '));
        p.append(extLink(src.url, src.label, true));
      });
      tdNotes.append(p);
    }
    tr.append(th, tdCourt, tdAppt, tdNotes);
    tb.append(tr);
  }
  table.append(thead, tb);
  const scroll = el('div', 'table-scroll');
  scroll.append(table);
  wrap.append(h3, note, scroll);
  return wrap;
}

function renderCrossTable(race: Race): HTMLElement {
  const h3 = el('h3', 'race__subhead');
  h3.textContent = 'Cross-typology picks';
  const table = el('table', 'matrix-table matrix-table--compact cross-table');
  const cap = el('caption', 'visually-hidden');
  cap.textContent = `Recommendations for ${race.title}`;
  table.append(cap);
  const thead = el('thead');
  const trh = el('tr');
  for (const text of ['Typology', 'Pick', 'Why']) {
    const th = el('th', undefined, { scope: 'col' });
    th.textContent = text;
    trh.append(th);
  }
  thead.append(trh);
  const tb = el('tbody');
  for (const row of race.crossTypology) {
    const tr = el('tr', row.typology === highlightTypology ? 'cross__row--mine' : undefined);
    const th = el('th', 'cross__ty', { scope: 'row' });
    th.append(typologyChip(row.typology, { title: typologyNameForChip(row.typology) }));
    const tp = typePick(race, row);
    const tdPick = el('td', 'cross__pick');
    fillPickCell(tdPick, `${row.pick} ${row.confidence}`.trim(), tp.flag);

    const tdWhy = el('td', 'cross__why');
    tdWhy.textContent = row.rationale;
    const trade = renderTradeoff(race, row.typology, 'cross__tradeoff');
    if (trade) tdWhy.append(trade);
    tr.append(th, tdPick, tdWhy);
    tb.append(tr);
  }
  table.append(thead, tb);
  const scroll = el('div', 'table-scroll');
  scroll.append(table);
  const wrap = el('div', 'race__cross');
  wrap.append(h3, scroll);
  return wrap;
}

/** A hinge written “Yes if <a>. No if <b>.” → [, a, b]. Kept in sync with the validator’s check. */
const HINGE_SIDES = /^Yes if ([\s\S]+?)\s+No if ([\s\S]+)$/;

/** “LP/LL (Yes ◐): But consider …” → the typology codes and the text after the colon; undefined if not that shape. */
function parseCounter(line: string): { codes: TypologyCode[]; text: string } | undefined {
  const m = new RegExp(String.raw`^((?:${TY_ALT})(?:\/(?:${TY_ALT}))*)\s*\([^)]*\):\s*([\s\S]+)$`).exec(line.trim());
  return m ? { codes: m[1].split('/') as TypologyCode[], text: m[2] } : undefined;
}

/**
 * The trade-off for one typology: its “Hinges on” line if written, else the counter-arguments aimed at it
 * (“But consider …”), plus the experience case when a far more experienced rival is running and no
 * counter-argument already names them. Undefined when there is nothing to show.
 */
function renderTradeoff(race: Race, code: TypologyCode, className: string): HTMLElement | null {
  const hinge = race.hinges?.[code];
  const p = el('p', className);
  if (hinge) {
    // “Yes if … No if …” reads best as two labeled lines; anything else falls back to one paragraph.
    const sides = HINGE_SIDES.exec(hinge);
    if (!sides) {
      const strong = el('strong');
      strong.textContent = 'Hinges on: ';
      p.append(strong, hinge);
      return p;
    }
    const box = el('div', `${className} hinge`);
    const title = el('p', 'hinge__title');
    title.textContent = 'Hinges on';
    const dl = el('dl', 'hinge__list');
    for (const [mod, label, text] of [
      ['yes', 'Vote Yes if', sides[1]],
      ['no', 'Vote No if', sides[2]],
    ] as const) {
      const row = el('div', `hinge__row hinge__row--${mod}`);
      const dt = el('dt');
      dt.textContent = label;
      const dd = el('dd');
      dd.textContent = text;
      row.append(dt, dd);
      dl.append(row);
    }
    box.append(title, dl);
    return box;
  }
  const counters = (race.counterArguments ?? []).map(parseCounter).filter((c) => c?.codes.includes(code));
  const row = race.crossTypology.find((r) => r.typology === code);
  const exp = row ? experienceNote(race, row) : undefined;
  const surname = exp?.alt.split(/\s+/).pop() ?? '';
  const showExp = exp && !counters.some((c) => surname && c!.text.includes(surname));
  const tiebreak = row ? experienceTiebreak(race, row) : undefined;
  if (!counters.length && !showExp && !tiebreak) return null;
  p.classList.add(`${className}--counter`);
  counters.forEach((c, i) => {
    if (i) p.append(' ');
    appendCounterArgumentRich(p, c!.text);
  });
  if (showExp) {
    if (counters.length) p.append(' ');
    const strong = el('strong');
    strong.textContent = 'But consider (experience): ';
    p.append(strong, exp.reason);
  }
  if (tiebreak) {
    if (counters.length) p.append(' ');
    const strong = el('strong');
    strong.textContent = 'Tiebreaker (experience): ';
    p.append(strong, tiebreak);
  }
  return p;
}

function bulletList(items: string[], className?: string): HTMLUListElement {
  const ul = el('ul', className);
  for (const b of items) {
    const li = el('li');
    li.textContent = b;
    ul.append(li);
  }
  return ul;
}

/** Collapsed “+ label” block for secondary detail. */
function moreDetails(label: string, ...children: Node[]): HTMLDetailsElement {
  const d = el('details', 'race__more');
  const s = el('summary', 'race__more-summary');
  s.textContent = label;
  const inner = el('div', 'race__more-body');
  inner.append(...children);
  d.append(s, inner);
  return d;
}

/** Candidate/retention races: background paragraphs and debate links, collapsed. */
function raceBackground(race: Race): HTMLDetailsElement | null {
  const parts: Node[] = [];
  for (const p of race.introParagraphs) {
    const para = el('p', 'race__context');
    para.textContent = p;
    parts.push(para);
  }
  if (race.readingLinks?.length) {
    const h4 = el('h4', 'race__more-heading');
    h4.textContent = 'Debates & forums';
    const ul = el('ul', 'race__reading-list measure__reading-list');
    for (const link of race.readingLinks) ul.append(renderMeasureReadingItem(link));
    parts.push(h4, ul);
  }
  if (!parts.length) return null;
  return moreDetails(race.readingLinks?.length ? 'Background, debates & forums' : 'Background', ...parts);
}

/** What the measure does, what it costs, and the case each way: the part every voter needs. */
function renderMeasureOverview(m: MeasureBlock): HTMLElement {
  const art = el('article', 'measure');
  const pq = el('p', 'measure__question');
  const label = el('span', 'measure__label');
  label.textContent = 'On the ballot';
  pq.append(label, document.createTextNode(m.question));

  if (m.forYou && m.yesMeans && m.noMeans) {
    // Props: plain-language impact first; the official (long, legal) ballot wording folds beneath it.
    art.append(renderForYou(m.forYou, m.yesMeans, m.noMeans));
    const wording = el('details', 'measure__wording');
    const s = el('summary', 'measure__wording-summary');
    s.textContent = 'Exact ballot wording';
    label.remove();
    wording.append(s, pq);
    art.append(wording);
  } else art.append(pq);

  if (!m.forYou && m.yesMeans && m.noMeans) {
    const means = el('dl', 'measure__means');
    const h = el('p', 'measure__label');
    h.textContent = 'What your vote means';
    for (const [mod, term, text] of [['yes', 'Yes', m.yesMeans], ['no', 'No', m.noMeans]] as const) {
      const row = el('div', `measure__means-row measure__means-row--${mod}`);
      const dt = el('dt');
      dt.textContent = term;
      const dd = el('dd');
      dd.textContent = text;
      row.append(dt, dd);
      means.append(row);
    }
    art.append(h, means);
  }
  const explainer = renderExplainerLine(m, 'measure__explainer');
  if (explainer) art.append(explainer);

  const related = (m.related ?? []).filter((r) => pendingRaceTitles.has(r.raceId));
  if (related.length) {
    const box = el('div', 'measure__related');
    const h = el('p', 'measure__label');
    h.textContent = 'Read with';
    const ul = el('ul', 'measure__related-list');
    for (const r of related) {
      const li = el('li');
      const a = el('a', undefined, { href: `#race-${r.raceId}` });
      a.textContent = pendingRaceTitles.get(r.raceId)!;
      a.addEventListener('click', () => {
        const target = document.getElementById(`race-${r.raceId}`);
        if (target instanceof HTMLDetailsElement) target.open = true;
      });
      li.append(a, document.createTextNode(`: ${r.note}`));
      ul.append(li);
    }
    box.append(h, ul);
    art.append(box);
  }

  const threshold = (m.voteThreshold ?? 'Simple majority').replace(/^Simple majority/, 'a simple majority');
  const meta = el('p', 'measure__meta');
  meta.textContent = [m.measureType, `Passes with ${threshold}`].filter(Boolean).join(' · ');
  art.append(meta);

  if (m.fiscalImpact) {
    const cost = el('p', 'measure__cost');
    const strong = el('strong');
    strong.textContent = 'Cost: ';
    cost.append(strong, document.createTextNode(m.fiscalImpact));
    art.append(cost);
  }

  const sides = el('div', 'measure__sides');
  const labelled = (label: string, text: string) => {
    const p = el('p', 'measure__backers');
    const strong = el('strong');
    strong.textContent = `${label}: `;
    p.append(strong, document.createTextNode(text));
    return p;
  };
  const side = (mod: 'yes' | 'no', heading: string, args: string[], backers: string | undefined, backersLabel: string) => {
    const col = el('section', `measure__side measure__side--${mod}`);
    const h = el('h3', 'measure__side-heading');
    h.textContent = heading;
    col.append(h, bulletList(args));
    const want = mod === 'yes' ? 'Yes' : 'No';
    const parties = (m.positions ?? []).filter((p) => p.kind === 'party' && p.position === want).map((p) => p.org);
    if (parties.length) col.append(labelled('Parties', parties.join('; ')));
    const papers = (m.positions ?? []).filter((p) => p.kind === 'editorial' && p.position === want);
    if (papers.length) col.append(renderPaperLine('Newspaper editorials', papers));
    if (backers?.trim()) col.append(labelled(backersLabel, backers));
    const money = m.funding?.[mod];
    if (money) {
      col.append(labelled('Raised', money.raised));
      if (money.topDonors?.length) col.append(labelled('Top donors', money.topDonors.join('; ')));
    }
    return col;
  };
  sides.append(
    side('yes', m.argumentsForHeading ?? 'Reasons to vote Yes', m.argumentsFor, m.supporters, 'Supporters'),
    side('no', m.argumentsAgainstHeading ?? 'Reasons to vote No', m.argumentsAgainst, m.opponents, 'Opponents'),
  );
  art.append(sides);

  const footnotes: Node[] = [];
  const neutral = (m.positions ?? []).filter((p) => p.position === 'No position').map((p) => p.org);
  if (neutral.length) footnotes.push(document.createTextNode(`No position: ${neutral.join('; ')}. `));
  if (m.funding) {
    if (m.funding.note) footnotes.push(document.createTextNode(`${m.funding.note} `));
    footnotes.push(document.createTextNode(`Money through ${m.funding.asOf} (`));
    m.funding.sources.forEach((src, i) => {
      if (i) footnotes.push(document.createTextNode(', '));
      footnotes.push(extLink(src.url, src.label));
    });
    footnotes.push(document.createTextNode(').'));
  }
  if (footnotes.length) {
    const p = el('p', 'measure__money-note');
    p.append(...footnotes);
    art.append(p);
  }
  return art;
}

/** Everything else about a measure, collapsed: stakes, background, who it affects, the numbers, reading. */
function renderMeasureMore(race: Race, m: MeasureBlock): HTMLElement {
  const parts: Node[] = [];
  const section = (heading: string, ...nodes: Node[]) => {
    const h = el('h4', 'race__more-heading');
    h.textContent = heading;
    parts.push(h, ...nodes);
  };
  const paras = [...(race.stakesParagraphs ?? []), ...race.introParagraphs].map((t) => {
    const p = el('p', 'race__context');
    p.textContent = t;
    return p;
  });
  if (paras.length) section('Background', ...paras);
  if (m.voterConnection?.length) section(m.forYou ? 'More on who it affects' : 'How it affects you', bulletList(m.voterConnection));
  if (m.mechanismBullets.length) section('The details', bulletList(m.mechanismBullets));
  if (m.readingLinks?.length) {
    const ul = el('ul', 'measure__reading-list');
    for (const link of m.readingLinks) ul.append(renderMeasureReadingItem(link));
    const note = el('p', 'measure__reading-note');
    note.textContent =
      'Links include official fiscal analysis, news explainers, and organized support or opposition—judge each on its own.';
    section('Further reading', ul, note);
  }
  if (race.readingLinks?.length) {
    const ul = el('ul', 'race__reading-list measure__reading-list');
    for (const link of race.readingLinks) ul.append(renderMeasureReadingItem(link));
    section('Debates & forums', ul);
  }
  const wrap = el('div', 'measure measure--more');
  wrap.append(moreDetails('Background, details & further reading', ...parts));
  return wrap;
}

function renderMeasureReadingItem(link: MeasureReadingLink): HTMLLIElement {
  const li = el('li', 'reading-link-item');
  li.append(extLink(link.url, link.label, true));
  if (link.summary) {
    const summary = el('p', 'reading-link-item__summary');
    summary.textContent = link.summary;
    li.append(summary);
  }
  if (link.debateBreakdown) {
    li.append(renderDebateBreakdown(link.debateBreakdown));
  }
  return li;
}

function renderDebateBreakdown(breakdown: DebateBreakdown): HTMLDetailsElement {
  const details = el('details', 'debate-breakdown');
  const summary = el('summary', 'debate-breakdown__summary');
  summary.textContent = breakdown.summaryLabel ?? 'Candidate stances from this debate';
  details.append(summary);

  const body = el('div', 'debate-breakdown__body');
  if (breakdown.intro) {
    const intro = el('p', 'debate-breakdown__intro');
    intro.textContent = breakdown.intro;
    body.append(intro);
  }

  const list = el('div', 'debate-breakdown__candidates');
  for (const candidate of breakdown.candidates) {
    list.append(renderDebateCandidateBreakdown(candidate));
  }
  body.append(list);
  details.append(body);
  return details;
}

function renderDebateCandidateBreakdown(
  candidate: DebateBreakdown['candidates'][number],
): HTMLElement {
  const article = el('article', 'debate-candidate');
  const name = el('h4', 'debate-candidate__name');
  name.textContent = candidate.name;
  article.append(name);

  for (const topic of candidate.topics) {
    const section = el('section', 'debate-candidate__topic');
    const heading = el('h5', 'debate-candidate__topic-label');
    heading.textContent = topic.topic;
    const ul = el('ul', 'debate-candidate__bullets');
    for (const bullet of topic.bullets) {
      const li = el('li');
      li.textContent = bullet;
      ul.append(li);
    }
    section.append(heading, ul);
    article.append(section);
  }
  return article;
}

function severityBadge(tier: RedFlag['severity']): HTMLElement {
  const b = el('span', `flag-badge flag-badge--${tier}`);
  b.textContent = SEVERITY_LABEL[tier];
  return b;
}

/** One tiered red flag: badges, neutral account, why it matters here, sources. */
function appendRedFlagListItem(li: HTMLLIElement, flag: RedFlag): void {
  li.classList.add('flag-item', `flag-item--${flag.severity}`);
  const meta = el('span', 'flag-item__meta');
  const status = el('span', 'flag-status');
  status.textContent = STATUS_LABEL[flag.status];
  meta.append(severityBadge(flag.severity), status);
  const text = el('p', 'flag-item__text');
  text.textContent = flag.text;
  const why = el('p', 'flag-item__why');
  const whyHead = el('strong');
  whyHead.textContent = 'Why it matters for this office: ';
  why.append(whyHead, document.createTextNode(flag.whyItMatters));
  li.append(meta, text, why);
  if (!flag.sources.length) return;
  const srcWrap = el('p', 'candidate-card__flag-sources');
  srcWrap.append(document.createTextNode(flag.sources.length > 1 ? 'Sources: ' : 'Source: '));
  flag.sources.forEach((src, i) => {
    if (i > 0) srcWrap.append(document.createTextNode('; '));
    srcWrap.append(extLink(src.url, src.label, true));
  });
  li.append(srcWrap);
}

/** Sitting incumbent on the ballot (excludes “unopposed” commissioner lines). */
function isSittingIncumbentRole(role: string): boolean {
  const r = role.toLowerCase();
  if (r.includes('unopposed')) return false;
  return r.includes('incumbent');
}

/**
 * “Record vs. change” blurb: only in multi-candidate races, only for roles that read as incumbent,
 * and only when copy exists.
 */
function shouldShowRecordVsChange(c: Candidate, raceCandidateCount: number): boolean {
  const text = c.recordVsChange?.trim();
  if (!text) return false;
  if (raceCandidateCount <= 1) return false;
  return isSittingIncumbentRole(c.role);
}

/** Accessible label for `party` codes in ballot data. */
function partyMarkAriaLabel(party: string): string {
  switch (party.trim()) {
    case 'D':
      return 'Democratic';
    case 'R':
      return 'Republican';
    case 'Green':
      return 'Green Party';
    case 'PF':
      return 'Peace and Freedom';
    case 'L':
      return 'Libertarian';
    case 'NP':
      return 'No party preference';
    case 'UNI':
      return 'Unity Party';
    case 'AV':
      return 'Approval Voting Party';
    case 'ACN':
      return 'American Constitution Party';
    case 'FWD':
      return 'Forward Party';
    default:
      return party;
  }
}

/** Minimal party glyph (donkey, elephant, etc.), or “NP” for no party preference. */
function partyMarkElement(party: string): HTMLElement {
  const p = party.trim();
  const label = partyMarkAriaLabel(p);
  if (p === 'NP') {
    const span = el('span', 'party-mark party-mark--np');
    span.textContent = 'NP';
    span.setAttribute('title', label);
    span.setAttribute('aria-label', `${label}, NP`);
    return span;
  }
  let mod = 'party-mark--unknown';
  if (p === 'D') mod = 'party-mark--d';
  else if (p === 'R') mod = 'party-mark--r';
  else if (p === 'Green') mod = 'party-mark--green';
  else if (p === 'PF') mod = 'party-mark--pf';
  else if (p === 'L') mod = 'party-mark--l';
  const span = el('span', `party-mark ${mod}`);
  span.setAttribute('role', 'img');
  span.setAttribute('aria-label', label);
  span.setAttribute('title', label);
  span.append(partyGlyphIcon(p));
  return span;
}

function renderCandidate(c: Candidate, raceCandidateCount: number): HTMLElement {
  const card = el('article', 'candidate-card');
  const topTier = maxSeverity(c.redFlags);
  if (topTier === 'severe') card.classList.add('candidate-card--alert');
  else if (topTier === 'serious') card.classList.add('candidate-card--caution');

  const media = el('div', 'candidate-card__media');
  const initials = c.name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .join('')
    .slice(0, 3)
    .toUpperCase();
  const base = import.meta.env.BASE_URL;
  if (c.photoSlug) {
    const img = el('img', 'candidate-card__photo', {
      src: `${base}images/candidates/${c.photoSlug}.webp`,
      alt: '',
      width: '96',
      height: '96',
      loading: 'lazy',
    });
    img.addEventListener('error', () => {
      img.replaceWith(placeholderAvatar(initials));
    });
    media.append(img);
  } else if (c.headshotUrl) {
    const img = el('img', 'candidate-card__photo', {
      src: c.headshotUrl,
      alt: '',
      width: '96',
      height: '96',
      loading: 'lazy',
      crossorigin: 'anonymous',
      referrerpolicy: 'no-referrer',
    });
    img.addEventListener('error', () => {
      img.replaceWith(placeholderAvatar(initials));
    });
    media.append(img);
  } else {
    media.append(placeholderAvatar(initials));
  }

  const text = el('div', 'candidate-card__text');
  const h3 = el('h3', 'candidate-card__name');
  const nameText = el('span', 'candidate-card__name-text');
  nameText.textContent = c.name;
  h3.append(nameText, document.createTextNode('\u00a0'), partyMarkElement(c.party));
  if (c.qualification) h3.append(document.createTextNode(' '), experienceBadge(c.qualification.level));
  const role = el('p', 'candidate-card__role');
  if (c.campaignUrl) {
    const a = extLink(c.campaignUrl, c.role, false);
    a.classList.add('candidate-card__role-link');
    role.append(a);
  } else {
    role.textContent = c.role;
  }
  text.append(h3);
  text.append(role);
  // The first bio paragraph shows; the rest folds with the other details.
  const bioMore: Node[] = [];
  c.bio.forEach((para, i) => {
    const p = el('p');
    if (/https:\/\/\S+/.test(para)) {
      appendRichCandidateText(p, para);
    } else {
      p.textContent = para;
    }
    if (i === 0) text.append(p);
    else bioMore.push(p);
  });
  if (shouldShowRecordVsChange(c, raceCandidateCount)) {
    const box = el('aside', 'candidate-card__record-vs-change');
    box.setAttribute('aria-label', 'Record versus change');
    const rh = el('h4', 'candidate-card__record-vs-change-heading');
    rh.textContent = 'Record vs. change';
    const rp = el('p', 'candidate-card__record-vs-change-text');
    rp.textContent = c.recordVsChange ?? '';
    box.append(rh, rp);
    text.append(box);
  }
  // The experience badge sits by the name; the criterion-by-criterion breakdown folds away.
  const qual = c.qualification ? renderCandidateQualification(c.qualification) : null;
  if (c.redFlags?.length) {
    const rf = el('div', 'candidate-card__flags');
    const rh = el('h4', 'candidate-card__flags-heading');
    const flagIc = iconRedFlag('icon icon--red-flag candidate-card__flags-heading-icon');
    flagIc.setAttribute('aria-hidden', 'true');
    rh.append(flagIc, document.createTextNode(' Red flags '));
    const rubricLink = el('a', 'candidate-card__flags-rubric', { href: '#red-flag-rubric' });
    rubricLink.textContent = 'How we rate these';
    rh.append(rubricLink);
    const ul = el('ul', 'flag-list');
    for (const f of sortRedFlags(c.redFlags)) {
      const li = el('li');
      appendRedFlagListItem(li, f);
      ul.append(li);
    }
    rf.append(rh, ul);
    text.append(rf);
  }
  // Rest of the bio, experience breakdown, positions, money, endorsements and notes: one tap away so the
  // name, experience level, role, first paragraph and red flags lead.
  const more: Node[] = [...bioMore, ...(qual ? [qual] : [])];
  if (c.scorecard?.length) {
    const hs = el('h4', 'candidate-card__sub');
    hs.textContent = 'Topical scorecard';
    const tbl = el('table', 'scorecard');
    const cap = el('caption', 'visually-hidden');
    cap.textContent = `Scorecard for ${c.name}`;
    tbl.append(cap);
    const thead = el('thead');
    const tr = el('tr');
    for (const lab of ['Topic', 'Position']) {
      const th = el('th', undefined, { scope: 'col' });
      th.textContent = lab;
      tr.append(th);
    }
    thead.append(tr);
    const tb = el('tbody');
    for (const row of c.scorecard) {
      const trow = el('tr');
      const th = el('th', undefined, { scope: 'row' });
      th.textContent = row.topic;
      const td = el('td');
      appendScorecardPositionCell(td, row);
      trow.append(th, td);
      tb.append(trow);
    }
    tbl.append(thead, tb);
    const scoreScroll = el('div', 'table-scroll');
    scoreScroll.append(tbl);
    more.push(hs, scoreScroll);
  }
  if (c.money) {
    const pm = el('p', 'candidate-card__meta');
    const head = el('strong');
    head.textContent = 'Money: ';
    pm.append(head);
    appendRichCandidateText(pm, c.money);
    more.push(pm);
  }
  if (c.endorsements) {
    const pe = el('p', 'candidate-card__meta candidate-card__meta--endorsements');
    const head = el('strong');
    head.textContent = 'Endorsements: ';
    pe.append(head);
    appendRichCandidateText(pe, c.endorsements);
    more.push(pe);
  }
  if (c.notes?.length) {
    const nf = el('div', 'candidate-card__notes');
    const nh = el('h4', 'candidate-card__sub');
    nh.textContent = 'Notes';
    const ul = el('ul');
    for (const n of c.notes) {
      const li = el('li');
      appendCandidateNoteLine(li, n);
      ul.append(li);
    }
    nf.append(nh, ul);
    more.push(nf);
  }

  if (more.length) {
    const label = [
      bioMore.length && 'full bio',
      qual && 'experience',
      c.scorecard?.length && 'positions',
      c.money && 'money',
      c.endorsements && 'endorsements',
      c.notes?.length && 'notes',
    ]
      .filter(Boolean)
      .join(', ')
      .replace(/^./, (ch) => ch.toUpperCase())
      .replace(/, ([^,]+)$/, ' & $1');
    const d = moreDetails(label, ...more);
    d.classList.add('candidate-card__more');
    text.append(d);
  }

  card.append(media, text);
  return card;
}

function renderCandidateQualification(q: CandidateQualification): HTMLElement {
  const box = el('div', 'candidate-card__qual');
  const h = el('h4', 'candidate-card__sub');
  h.textContent = 'Experience for the job';
  const summary = el('p');
  summary.textContent = q.summary;
  box.append(h, summary);
  if (q.legal === 'does-not-meet') {
    const warn = el('p', 'candidate-card__qual-legal');
    warn.textContent = 'Does not appear to meet the legal requirements for this office.';
    box.append(warn);
  }
  if (q.externalRating) box.append(externalRatingLine(q.externalRating, 'candidate-card__qual-rating'));
  return box;
}

function placeholderAvatar(initials: string): HTMLElement {
  const div = el('div', 'candidate-card__placeholder');
  div.setAttribute('role', 'img');
  div.setAttribute('aria-label', `No photo; initials ${initials}`);
  div.textContent = initials;
  return div;
}
