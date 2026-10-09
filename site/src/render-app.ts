import type {
  BallotData,
  Candidate,
  CandidateQualification,
  ExternalRating,
  MeasureBlock,
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
import { BALLOT_ZIP_OPTIONS } from './data/ballot-profiles';
import { buildBallotData, getBallotProfile } from './data/build-ballot-data';
import {
  earlierSiteUpdateBuilds,
  siteUpdateBuildForDate,
  type SiteUpdatePanel,
} from './data/site-updates';
import { TYPOLOGIES } from './data/typologies-data';
import {
  categoryIcon,
  confidenceIconFromChar,
  iconBallot,
  iconBook,
  iconChevron,
  iconExternal,
  iconReformCalifornia,
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
  resolveCandidateForPick,
  SEVERITY_DEFINITION,
  SEVERITY_LABEL,
  SEVERITY_ORDER,
  sortRedFlags,
  STATUS_LABEL,
} from './data/red-flags';
import { COMBINED_LEVEL_GAP, combinedCellFor } from './data/experience-views';

const TY_CODES: TypologyCode[] = ['PL', 'EL', 'DM', 'OL', 'SS', 'AR', 'PR', 'CC', 'FF'];

/** Leading typology token in counter-argument lines, e.g. `EL (` or `AR/FF (` */
const COUNTER_ARG_TY_PREFIX =
  /^((?:PL|EL|DM|OL|SS|AR|PR|CC|FF)(?:\/(?:PL|EL|DM|OL|SS|AR|PR|CC|FF))*)\s+\(/;

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
    default:
      return c;
  }
}

function fillPickCell(
  td: HTMLTableCellElement,
  cell: string,
  flag?: 'severe' | 'serious',
  changedReason?: string,
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
  if (changedReason) {
    if (!label.includes(',')) inner.classList.add('pick-cell--nowrap');
    const mark = el('span', 'pick-changed', { title: changedReason, tabindex: '0' });
    const sr = el('span', 'visually-hidden');
    sr.textContent = `Changed by experience: ${changedReason} `;
    const glyph = el('span', undefined, { 'aria-hidden': 'true' });
    glyph.textContent = '⇄';
    mark.append(sr, glyph);
    inner.append(mark, document.createTextNode(' '));
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
 * Renders counter-argument prose: leading `PL` / `AR/FF` tokens use matrix typology chips; `(Name ●)` confidence markers use matrix SVG icons.
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

const REFORM_CALIFORNIA_LABEL = 'Reform California';

function textMentionsReformCalifornia(text: string | undefined): boolean {
  return Boolean(text?.includes(REFORM_CALIFORNIA_LABEL));
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

/**
 * Appends plain text, turning each “Reform California” substring into a linked badge + label.
 */
function appendTextWithReformCaliforniaBadges(
  parent: HTMLElement,
  text: string,
  reformCaliforniaIconSrc: string,
): void {
  const parts = text.split(REFORM_CALIFORNIA_LABEL);
  for (let i = 0; i < parts.length; i += 1) {
    const chunk = parts[i];
    if (chunk) parent.append(document.createTextNode(chunk));
    if (i < parts.length - 1) {
      const link = extLink('https://www.reformcalifornia.org/', REFORM_CALIFORNIA_LABEL, true);
      link.classList.add('reform-california-tag');
      const mark = iconReformCalifornia(
        'icon icon--reform-california reform-california-tag__icon',
        reformCaliforniaIconSrc,
      );
      mark.setAttribute('aria-hidden', 'true');
      link.prepend(mark, document.createTextNode('\u00a0'));
      parent.append(link);
    }
  }
}

/** Appends prose with optional ` — https://…` citation tail, inline URLs, and Reform California badges. */
function appendRichCandidateText(
  parent: HTMLElement,
  text: string,
  reformCaliforniaIconSrc: string,
): void {
  const citation = text.match(/ — (https:\/\/\S+)$/);
  const body = citation ? text.slice(0, text.length - citation[0].length) : text;
  const segments = body.split(/(https:\/\/[^\s]+)/g);
  for (const segment of segments) {
    if (!segment) continue;
    if (segment.startsWith('https://')) {
      parent.append(extLink(segment, externalLinkLabel(segment), true));
    } else if (textMentionsReformCalifornia(segment)) {
      appendTextWithReformCaliforniaBadges(parent, segment, reformCaliforniaIconSrc);
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
function appendCandidateNoteLine(
  li: HTMLLIElement,
  note: string,
  reformCaliforniaIconSrc: string,
): void {
  appendRichCandidateText(li, note, reformCaliforniaIconSrc);
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
  const wrap = el('div', 'zip-select');
  const label = el('label', 'zip-select__label', { for: 'ballot-zip' });
  label.textContent = 'Ballot ZIP';
  const select = el('select', 'zip-select__control', {
    id: 'ballot-zip',
    name: 'zip',
    'aria-label': 'Choose ballot ZIP code',
  }) as HTMLSelectElement;
  for (const opt of BALLOT_ZIP_OPTIONS) {
    const option = document.createElement('option');
    option.value = opt.zip;
    option.textContent = opt.label;
    if (opt.zip === currentZip) option.selected = true;
    select.append(option);
  }
  select.addEventListener('change', () => {
    const url = new URL(location.href);
    url.searchParams.set('zip', select.value);
    history.pushState({}, '', url);
    renderApp(appRoot, select.value);
  });
  wrap.append(label, select);
  return wrap;
}

/** ZIP-specific scope note (which districts we modeled) + link to the official sample ballot. */
function renderScopeNote(data: BallotData, localPending: boolean): HTMLElement {
  const p = el('p', localPending ? 'scope-note scope-note--pending' : 'scope-note');
  p.append(document.createTextNode(`${data.meta.verificationNote} `));
  p.append(extLink(data.meta.registrarUrl, data.meta.registrarLabel, true));
  return p;
}

export function renderApp(root: HTMLElement, zip: string): void {
  const data = buildBallotData(zip);
  root.replaceChildren();
  const profile = getBallotProfile(zip);
  document.title = `Unofficial 2026 CA general election guide — ZIP ${data.meta.scopeZip} (${data.meta.scopeLabel})`;

  const header = el('header', 'site-header');
  const brand = el('div', 'site-header__brand');
  const brandIcon = el('div', 'site-header__brand-icon');
  brandIcon.append(iconBallot());
  const h1 = el('h1', 'site-header__title');
  h1.textContent = data.meta.siteTitle;
  brand.append(brandIcon, h1);
  const sub = el('p', 'site-header__subtitle');
  sub.textContent = `November 3, 2026 California general election · ZIP ${data.meta.scopeZip} ballot · unofficial independent research — not the government, not legal advice.`;
  header.append(
    brand,
    sub,
    renderZipSelector(zip, root),
    renderScopeNote(data, Boolean(profile.localPending)),
    renderPrintPicks(data),
    renderSiteUpdatesSection(data.meta.lastContentUpdated),
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

  const main = el('main', undefined, { id: 'main-content' });
  main.append(
    renderIntroBlocks(),
    renderTypologyKey(data),
    renderMethodologySection(),
    renderTldr(data),
    renderRacesByCategory(data),
  );

  const footer = el('footer', 'site-footer');
  const fp = el('p');
  fp.append(
    document.createTextNode(
      'Not affiliated with the California Secretary of State, any county registrar, or any candidate committee. Cross-typology picks are ',
    ),
    extLink(
      'https://www.pewresearch.org/politics/2021/political-typology/',
      'inferences from Pew typology descriptions',
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
  footer.append(fp, fp2);

  root.append(header, nav, main, footer, renderPrintSheet());
  fillPrintSheet(data, 'EL');
}

/** Header control: pick your typology column, then print a one-page cheat sheet of those picks. */
function renderPrintPicks(data: BallotData): HTMLElement {
  const wrap = el('div', 'print-picks');
  const label = el('label', 'print-picks__label', { for: 'print-typology' });
  label.textContent = 'Cheat sheet for';
  const select = el('select', 'print-picks__control', { id: 'print-typology' }) as HTMLSelectElement;
  for (const t of data.typologies) {
    const option = document.createElement('option');
    option.value = t.code;
    option.textContent = `${t.code} — ${t.name}`;
    if (t.code === 'EL') option.selected = true;
    select.append(option);
  }
  select.addEventListener('change', () => fillPrintSheet(data, select.value as TypologyCode));
  const btn = el('button', 'print-picks__button', { type: 'button' });
  btn.textContent = 'Print my picks';
  btn.addEventListener('click', () => {
    fillPrintSheet(data, select.value as TypologyCode);
    window.print();
  });
  wrap.append(label, select, btn);
  return wrap;
}

/** Container shown only in print (see `@media print`); filled for the chosen typology. */
function renderPrintSheet(): HTMLElement {
  return el('section', 'print-sheet', { id: 'print-sheet', 'aria-hidden': 'true' });
}

function fillPrintSheet(data: BallotData, code: TypologyCode): void {
  const sheet = document.getElementById('print-sheet');
  if (!sheet) return;
  sheet.replaceChildren();
  const ty = data.typologies.find((t) => t.code === code);
  const h = el('h2', 'print-sheet__title');
  h.textContent = `My picks — ${ty?.name ?? code} (${code})`;
  const sub = el('p', 'print-sheet__sub');
  sub.textContent = `Nov 3, 2026 · ZIP ${data.meta.scopeZip} (${data.meta.scopeLabel}) · unofficial guide — check against your official ballot.`;
  sheet.append(h, sub);
  for (const cat of data.categories) {
    const races = data.races.filter((r) => r.categoryId === cat.id);
    if (!races.length) continue;
    const ch = el('h3', 'print-sheet__cat');
    ch.textContent = cat.label;
    const tbl = el('table', 'print-sheet__table');
    const tb = el('tbody');
    for (const race of races) {
      const row = race.crossTypology.find((r) => r.typology === code);
      const tr = el('tr');
      const th = el('th', undefined, { scope: 'row' });
      th.textContent = race.tldrLabel ?? race.title;
      const td = el('td');
      const picked = row ? resolveCandidateForPick(row.pick, race.candidates) : undefined;
      const tier = maxSeverity(picked?.redFlags);
      const mark = tier === 'severe' || tier === 'serious' ? ` ⚑ ${SEVERITY_LABEL[tier].toLowerCase()} red flag` : '';
      td.textContent = row && row.confidence !== '—' ? `${row.pick} ${row.confidence}${mark}` : '— (no pick)';
      tr.append(th, td);
      tb.append(tr);
    }
    tbl.append(tb);
    sheet.append(ch, tbl);
  }
  const legend = el('p', 'print-sheet__sub');
  legend.textContent = '● high confidence · ◐ medium · ○ low · — skip / no pick · ⚑ candidate has a Severe or Serious red flag';
  sheet.append(legend);
}

function renderIntroBlocks(): HTMLElement {
  const wrap = el('section', 'intro-grid');
  wrap.innerHTML = `
    <section class="intro-card" aria-labelledby="how-general">
      <h2 id="how-general"><span class="intro-card__heading-icon" aria-hidden="true"></span>How the November general works</h2>
      <p>Most contests on the <strong>November 3, 2026</strong> ballot are runoffs between the <strong>top two</strong> finishers from June’s primary—sometimes two candidates from the same party. Supreme Court and Court of Appeal justices appear as <strong>yes/no retention</strong> votes, and every Californian votes on the statewide <strong>propositions</strong>.</p>
      <p>Mail ballots went out in early October. Return yours by mail (postmarked by Nov 3), at a drop box, or vote in person; same-day registration is available at vote centers.</p>
      <p><a href="https://www.sos.ca.gov/elections" target="_blank" rel="noopener noreferrer">SOS elections hub</a> ·
         <a href="https://voterguide.sos.ca.gov/" target="_blank" rel="noopener noreferrer">Official CA voter guide</a> ·
         <a href="https://california.ballottrax.net/voter/" target="_blank" rel="noopener noreferrer">Where’s My Ballot?</a></p>
    </section>
    <section class="intro-card" aria-labelledby="how-guide">
      <h2 id="how-guide"><span class="intro-card__heading-icon intro-card__heading-icon--secondary" aria-hidden="true"></span>How to use this guide</h2>
      <p>Each race includes <strong>web-condensed</strong> backgrounds, scorecards where available, money and endorsement notes, red-flag callouts, and a <strong>cross-typology recommendation row</strong> with confidence icons (see legend under the TL;DR summary).</p>
      <p>Propositions and local measures get a Yes/No pick per column; judicial retention votes are grouped into one table per court. Use <strong>Print my picks</strong> in the header for a one-page cheat sheet in ballot order.</p>
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
 * Documents how cross-typology picks, confidence marks, scorecards, and exclusions are evaluated.
 */
function renderMethodologySection(): HTMLElement {
  const sec = el('section', 'methodology');
  sec.id = 'methodology';

  const h2 = el('h2', 'methodology__title');
  h2.textContent = 'Methodology';

  const lead = el('p', 'methodology__lede');
  lead.textContent =
    'This guide compresses public records, reporting, and questionnaires into skimmable cards. Nothing here is a poll of Pew typology groups; it is our best-effort translation of candidate positioning into the values language those chapters describe.';

  const hCross = el('h3', 'methodology__subhead');
  hCross.textContent = 'Cross-typology recommendations';

  const pCross = el('p', 'methodology__text');
  pCross.textContent =
    'Each race and measure includes a row of suggested picks keyed to PL through FF. We ask which candidate is least mismatched with the policy and cultural instincts Pew summarizes for that bucket—then sanity-check against viability and red flags. When two candidates are both plausible, the write-up states the trade-off instead of pretending certainty.';

  const hConf = el('h3', 'methodology__subhead');
  hConf.textContent = 'Confidence symbols in the TL;DR summary';

  const ulConf = el('ul', 'confidence-legend__list methodology__confidence-legend');
  for (const def of CONFIDENCE_LEVEL_ROWS) {
    const li = el('li', 'confidence-legend__item');
    const icWrap = el('span', 'confidence-legend__icon');
    const ic = confidenceIconFromChar(def.symbol);
    if (ic) icWrap.append(ic);
    const txt = el('span');
    txt.innerHTML = `<strong>${def.title}</strong> — ${def.methodologyDetail}`;
    li.append(icWrap, txt);
    ulConf.append(li);
  }

  const hScore = el('h3', 'methodology__subhead');
  hScore.textContent = 'Candidate scorecard markers';

  const pScore = el('p', 'methodology__text');
  pScore.textContent =
    'Where a scorecard appears, leading symbols compress the stance: ✓✓ strong support, ✓ support, ✗ oppose, ~ mixed or context-dependent, ? unclear from available sources. Text after the icon carries the nuance. When a second muted line appears under a cell, it contrasts that stance with the termed-out incumbent, the sitting officeholder, or other leading candidates in the same race.';

  const hRecord = el('h3', 'methodology__subhead');
  hRecord.textContent = '“Record vs. change” on incumbent cards';

  const pRecord = el('p', 'methodology__text');
  pRecord.textContent =
    'When a sitting officeholder faces a challenger in November, some cards add a short “Record vs. change” note after the bio. It is not a second scorecard—just a plain-language read on what they have delivered in the role and when replacing them is likely worth losing seniority, committee fit, or institutional momentum. We omit it for single-candidate races and for lines labeled unopposed.';

  const hRed = el('h3', 'methodology__subhead');
  hRed.textContent = 'Red flags and picks';

  const pRed = el('p', 'methodology__text');
  pRed.textContent =
    'In a two-person runoff, a candidate with serious red flags can still be the closest fit for some columns. When that happens we keep the pick, lower the confidence, and surface the sourced warning in the profile so you are not blindsided. A column may also skip a race (—) when neither finalist is a reasonable match.';

  const hRubric = el('h3', 'methodology__subhead');
  hRubric.id = 'red-flag-rubric';
  hRubric.textContent = 'How we rate red flags';
  const pRubric = el('p', 'methodology__text');
  pRubric.textContent =
    'Every red flag links to reporting or an official record and carries three labels: a tier, a status, and a one-line note on why it matters for that particular office. Policy disagreements and opponents’ talking points are not red flags; they go in Notes.';
  const ulRubric = el('ul', 'methodology__rubric');
  for (const tier of SEVERITY_ORDER) {
    const li = el('li');
    li.append(severityBadge(tier), document.createTextNode(` — ${SEVERITY_DEFINITION[tier]}`));
    ulRubric.append(li);
  }
  const pStatus = el('p', 'methodology__text');
  pStatus.textContent = `Status tells you where the matter stands: ${Object.values(STATUS_LABEL).join(', ')}. “Alleged” and “Disputed” mean nothing has been proven.`;
  const pPicks = el('p', 'methodology__text');
  pPicks.textContent =
    'Red flags never decide a pick on their own—picks are about values fit—but a Severe flag caps that candidate’s confidence at medium (◐) and must be named in the rationale, and any Severe or Serious flag on a picked candidate is addressed in the race’s counter-arguments. Only Severe flags outline the whole candidate card in red.';

  const hExp = el('h3', 'methodology__subhead');
  hExp.id = 'experience-rubric';
  hExp.textContent = 'How we rate experience for the job';
  const pExp = el('p', 'methodology__text');
  pExp.textContent =
    'Each race lists three to five things the office actually requires, plus its legal requirements. Every finalist is checked against each one (✓ met, ~ partly, ✗ not met, ? unclear) with specific evidence, then given an overall level:';
  const ulExp = el('ul', 'methodology__rubric');
  for (const level of EXPERIENCE_ORDER) {
    const li = el('li');
    li.append(experienceBadge(level), document.createTextNode(` — ${EXPERIENCE_DEFINITION[level]}`));
    ulExp.append(li);
  }
  const pExp2 = el('p', 'methodology__text');
  pExp2.textContent =
    'Where an outside evaluator publishes a rating—bar associations for trial judges, the State Bar’s Commission on Judicial Nominees Evaluation for appellate appointees—we show it word for word. Experience informs picks but never decides them: Outsider Left and Populist Right voters, among others, often prefer a newcomer.';
  const pExp3 = el('p', 'methodology__text');
  pExp3.textContent = `The TL;DR summary has two more views. “Experience” lists the most experienced candidate in each race. “Fit + experience” starts from the typology picks: strong (●) picks stay; a medium or low pick switches to a rival rated at least ${COMBINED_LEVEL_GAP} levels more experienced (for example, Little experience to Experienced); and a race with no typology pick goes to the clearly most experienced candidate. When two rivals tie, nothing switches. Red flags are already reflected in confidence, so they don’t count twice.`;

  const hPew = el('h3', 'methodology__subhead');
  hPew.textContent = "About Pew's groups vs. our cells";

  const pPew = el('p', 'methodology__text');
  pPew.append(
    document.createTextNode(
      'Pew built the nine profiles from national survey clustering; our cells map candidates to those profiles heuristically. Read their survey and construction notes in ',
    ),
    extLink(
      'https://www.pewresearch.org/politics/2021/11/09/political-typology-appendix-b/',
      'Appendix B: Typology group creation and analysis',
      true,
    ),
    document.createTextNode(' and '),
    extLink(
      'https://www.pewresearch.org/politics/2021/11/09/political-typology-appendix-a/',
      'Appendix A: Survey methodology',
      true,
    ),
    document.createTextNode(
      `—then treat our picks as shortcuts, not substitutes for their methodology or your county's official wording.`,
    ),
  );

  sec.append(
    h2, lead, hCross, pCross, hConf, ulConf, hScore, pScore, hRecord, pRecord, hRed, pRed,
    hRubric, pRubric, ulRubric, pStatus, pPicks, hExp, pExp, ulExp, pExp2, pExp3, hPew, pPew,
  );
  return sec;
}

type TldrView = 'typology' | 'experience' | 'combined';

const TLDR_VIEW_KEY = 'ca-general-26:tldr-view';

const TLDR_VIEWS: { id: TldrView; label: string; caption: string }[] = [
  {
    id: 'combined',
    label: 'Fit + experience',
    caption: `Typology picks, adjusted for experience. Strong (●) picks stand. A medium or low pick switches to a rival who is at least ${COMBINED_LEVEL_GAP} experience levels higher, and a race with no pick goes to the clearly most experienced candidate. Switched cells are marked ⇄ and drop to low confidence (hover or tap for why). Red flags show the same marker as before and don’t change picks here.`,
  },
  {
    id: 'experience',
    label: 'Experience',
    caption:
      'The most experienced candidate in each race, using the experience rating on each candidate card. Experience doesn’t depend on worldview, so there is one column. Ballot measures and retention votes aren’t listed: there are no candidates to compare.',
  },
  {
    id: 'typology',
    label: 'Typology fit',
    caption:
      'Picks by worldview. Each cell shows the recommended name plus a confidence icon (see legend above). A red flag after a name means that candidate has a Severe or Serious red flag on their card.',
  },
];

function readTldrView(): TldrView {
  try {
    const v = localStorage.getItem(TLDR_VIEW_KEY);
    if (v === 'typology' || v === 'experience' || v === 'combined') return v;
  } catch {
    /* storage unavailable: use the default */
  }
  return 'combined';
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
      if (view === 'combined') {
        const c = row.combined[code];
        fillPickCell(td, c.cell, c.flag, c.reason);
      } else {
        fillPickCell(td, row.cells[code] ?? '—', row.flags[code]);
      }
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
  summary.append(chev, sumText);
  details.append(summary);

  const body = el('div', 'race__body');
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
  for (const p of race.introParagraphs) {
    const para = el('p', 'race__context');
    para.textContent = p;
    body.append(para);
  }

  if (race.readingLinks?.length) {
    const h3 = el('h3', 'race__subhead');
    h3.textContent = 'Debates & forums';
    const ul = el('ul', 'race__reading-list measure__reading-list');
    for (const link of race.readingLinks) {
      ul.append(renderMeasureReadingItem(link));
    }
    body.append(h3, ul);
  }

  if (race.polling?.length) body.append(renderRacePolling(race.polling));

  if (race.kind === 'candidates' && race.qualificationCriteria?.length) {
    body.append(renderQualificationComparison(race));
  }

  body.append(renderCrossTable(race));

  if (race.kind === 'measure' && race.measure) {
    body.append(renderMeasure(race.measure));
  } else if (race.kind === 'retention' && race.retention) {
    body.append(renderRetention(race.retention));
  } else {
    const n = race.candidates.length;
    for (const c of race.candidates) {
      body.append(renderCandidate(c, n));
    }
  }

  if (race.counterArguments?.length) {
    const h3 = el('h3', 'race__subhead');
    h3.textContent = 'Counter-arguments';
    body.append(h3);
    const ul = el('ul', 'race__counter');
    for (const line of race.counterArguments) {
      const li = el('li');
      appendCounterArgumentRich(li, line);
      ul.append(li);
    }
    body.append(ul);
  }

  details.append(body);
  return details;
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
  const rcIcon = `${import.meta.env.BASE_URL}images/reform-california-icon.svg`;
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
      appendRichCandidateText(p, n, rcIcon);
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
    const tr = el('tr');
    const th = el('th', 'cross__ty', { scope: 'row' });
    th.append(typologyChip(row.typology, { title: typologyNameForChip(row.typology) }));
    const c =
      race.kind === 'candidates'
        ? combinedCellFor(race, row.pick, row.confidence)
        : { cell: `${row.pick} ${row.confidence}`.trim(), reason: undefined, flag: undefined };

    const tdPick = el('td', 'cross__pick');
    fillPickCell(tdPick, c.cell, c.flag, c.reason ? 'Switched for experience' : undefined);
    if (c.reason) {
      const was = el('span', 'cross__was');
      was.append(document.createTextNode('On fit alone: '));
      const orig = el('span', 'cross__was-pick');
      fillPickCell(orig as unknown as HTMLTableCellElement, `${row.pick} ${row.confidence}`.trim());
      orig.classList.remove('matrix-pick-cell');
      was.append(orig);
      tdPick.append(was);
    }

    const tdWhy = el('td', 'cross__why');
    if (c.reason) {
      const lead = el('p', 'cross__switch');
      const strong = el('strong');
      strong.textContent = 'Switched for experience. ';
      lead.append(strong, document.createTextNode(row.experienceRationale ?? c.reason));
      const fit = el('p', 'cross__fit');
      const fitLabel = el('strong');
      fitLabel.textContent = 'On fit alone: ';
      fit.append(fitLabel, document.createTextNode(row.rationale));
      tdWhy.append(lead, fit);
    } else {
      tdWhy.textContent = row.rationale;
    }
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

function renderMeasure(m: MeasureBlock): HTMLElement {
  const art = el('article', 'measure');
  const hq = el('h3', 'race__subhead');
  hq.textContent = 'Measure summary';
  const pq = el('p', 'measure__question');
  pq.innerHTML = `<strong>Question:</strong> ${escapeHtml(m.question)}`;
  art.append(hq, pq);
  const facts: [string, string | undefined][] = [
    ['Type', m.measureType],
    ['Needs to pass', m.voteThreshold],
    ['Fiscal impact', m.fiscalImpact],
    ['Supporters', m.supporters],
    ['Opponents', m.opponents],
  ];
  const shown = facts.filter((f): f is [string, string] => Boolean(f[1]?.trim()));
  if (shown.length) {
    const dl = el('dl', 'measure__facts');
    for (const [k, v] of shown) {
      const dt = el('dt');
      dt.textContent = k;
      const dd = el('dd');
      dd.textContent = v;
      dl.append(dt, dd);
    }
    art.append(dl);
  }
  if (m.voterConnection?.length) {
    const hv = el('h4', 'measure__voter-heading');
    hv.textContent = 'Why you’re voting on this';
    const ulv = el('ul', 'measure__voter-list');
    for (const b of m.voterConnection) {
      const li = el('li');
      li.textContent = b;
      ulv.append(li);
    }
    art.append(hv, ulv);
  }
  const mech = el('h4');
  mech.textContent = 'Key facts (amounts & rules)';
  const ulm = el('ul');
  for (const b of m.mechanismBullets) {
    const li = el('li');
    li.textContent = b;
    ulm.append(li);
  }
  const hf = el('h4');
  hf.textContent = m.argumentsForHeading ?? 'Arguments for';
  const ulf = el('ul');
  for (const b of m.argumentsFor) {
    const li = el('li');
    li.textContent = b;
    ulf.append(li);
  }
  const ha = el('h4');
  ha.textContent = m.argumentsAgainstHeading ?? 'Arguments against';
  const ula = el('ul');
  for (const b of m.argumentsAgainst) {
    const li = el('li');
    li.textContent = b;
    ula.append(li);
  }
  art.append(mech, ulm, hf, ulf, ha, ula);
  if (m.readingLinks?.length) {
    const hr = el('h4');
    hr.textContent = 'Further reading';
    const ulr = el('ul', 'measure__reading-list');
    for (const link of m.readingLinks) {
      ulr.append(renderMeasureReadingItem(link));
    }
    const note = el('p', 'measure__reading-note');
    note.textContent =
      'Links include official fiscal analysis, news explainers, and organized support or opposition—judge each on its own.';
    art.append(hr, ulr, note);
  }
  return art;
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
  const reformCaliforniaIconSrc = `${base}images/reform-california-icon.svg`;
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
  for (const para of c.bio) {
    const p = el('p');
    if (textMentionsReformCalifornia(para) || /https:\/\/\S+/.test(para)) {
      appendRichCandidateText(p, para, reformCaliforniaIconSrc);
    } else {
      p.textContent = para;
    }
    text.append(p);
  }
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
  if (c.qualification) text.append(renderCandidateQualification(c.qualification));
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
    text.append(hs, scoreScroll);
  }
  if (c.money) {
    const pm = el('p', 'candidate-card__meta');
    const head = el('strong');
    head.textContent = 'Money: ';
    pm.append(head);
    appendRichCandidateText(pm, c.money, reformCaliforniaIconSrc);
    text.append(pm);
  }
  if (c.endorsements) {
    const pe = el('p', 'candidate-card__meta candidate-card__meta--endorsements');
    const head = el('strong');
    head.textContent = 'Endorsements: ';
    pe.append(head);
    appendRichCandidateText(pe, c.endorsements, reformCaliforniaIconSrc);
    text.append(pe);
  }
  if (c.reformCaliforniaSection?.length) {
    const rc = el('aside', 'candidate-card__reform-california');
    rc.setAttribute('aria-label', 'Reform California');
    const rh = el('h4', 'candidate-card__reform-california-heading');
    const mark = iconReformCalifornia(
      'icon icon--reform-california candidate-card__reform-california-icon',
      reformCaliforniaIconSrc,
    );
    mark.setAttribute('aria-hidden', 'true');
    rh.append(mark, document.createTextNode(` ${REFORM_CALIFORNIA_LABEL}`));
    rc.append(rh);
    for (const para of c.reformCaliforniaSection) {
      const rp = el('p', 'candidate-card__reform-california-text');
      appendRichCandidateText(rp, para, reformCaliforniaIconSrc);
      rc.append(rp);
    }
    text.append(rc);
  }
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
  if (c.notes?.length) {
    const nf = el('div', 'candidate-card__notes');
    const nh = el('h4', 'candidate-card__sub');
    nh.textContent = 'Notes';
    const ul = el('ul');
    for (const n of c.notes) {
      const li = el('li');
      appendCandidateNoteLine(li, n, reformCaliforniaIconSrc);
      ul.append(li);
    }
    nf.append(nh, ul);
    text.append(nf);
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

function escapeHtml(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
