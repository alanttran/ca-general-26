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
