/**
 * The voter's own marks, kept only in this browser. Keys are race ids (or `raceId::justice name` for
 * retention rows) so a choice follows the race across ZIPs that share it. Storage can be blocked
 * (private mode, previews), so every read and write fails soft to "nothing marked".
 */
const KEY = 'ca-general-26:my-choices';

type Choices = Record<string, string[]>;

let cache: Choices | null = null;

function load(): Choices {
  if (cache) return cache;
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(KEY) ?? '{}');
    cache = parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? (parsed as Choices) : {};
  } catch {
    cache = {};
  }
  return cache;
}

function save(): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(load()));
  } catch {
    // Blocked storage: marks last until the page reloads.
  }
}

export function retentionKey(raceId: string, justice: string): string {
  return `${raceId}::${justice}`;
}

export function getChoice(key: string): string[] {
  return load()[key] ?? [];
}

export function setChoice(key: string, values: string[]): void {
  const all = load();
  if (values.length) all[key] = values;
  else delete all[key];
  save();
}

/**
 * “Send to my phone” link: the marks for the given keys, packed into a URL fragment (never sent to a server).
 * Format: base64url of JSON `[[key, [values]], …]`.
 */
export function encodeChoices(keys: string[]): string {
  const all = load();
  const pairs = keys.filter((k) => all[k]?.length).map((k) => [k, all[k]]);
  const bytes = new TextEncoder().encode(JSON.stringify(pairs));
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/** Unpacks a link made by `encodeChoices`; anything malformed yields an empty object. */
export function decodeChoices(packed: string): Choices {
  try {
    const bin = atob(packed.replace(/-/g, '+').replace(/_/g, '/'));
    const json = new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
    const pairs: unknown = JSON.parse(json);
    const out: Choices = {};
    if (!Array.isArray(pairs)) return out;
    for (const p of pairs) {
      if (!Array.isArray(p) || typeof p[0] !== 'string' || !Array.isArray(p[1])) continue;
      const vals = (p[1] as unknown[]).filter((v): v is string => typeof v === 'string' && v.length < 200);
      if (vals.length && p[0].length < 200) out[p[0]] = vals;
    }
    return out;
  } catch {
    return {};
  }
}

/** Saves every mark in `incoming`, replacing any mark already kept for those contests. */
export function importChoices(incoming: Choices): void {
  Object.assign(load(), incoming);
  save();
}
