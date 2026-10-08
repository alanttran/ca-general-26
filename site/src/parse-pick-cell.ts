import type { ConfidenceSymbol } from './types/ballot-types';

/**
 * Parse TL;DR matrix cells like "Porter ●", "— —", or "— ○" into label + trailing confidence symbol.
 */
export function parsePickCell(cell: string): { label: string; confidence: ConfidenceSymbol | null } {
  const t = cell.trim();
  const m = t.match(/^(.*?)\s+([●◐○\u2014])\s*$/u);
  if (m?.[1] !== undefined && m[2]) {
    const raw = m[2];
    const sym = (raw === '\u2014' ? '—' : raw) as ConfidenceSymbol;
    if (sym === '●' || sym === '◐' || sym === '○' || sym === '—')
      return { label: m[1].trim(), confidence: sym };
  }
  return { label: t, confidence: null };
}
