export function currency(value) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
}

export function statusBadgeClass(status) {
  switch (String(status ?? '').toLowerCase()) {
    case 'offer':
      return 'bg-zinc-200 text-zinc-700 ring-zinc-300/80 dark:bg-slate-700 dark:text-slate-200 dark:ring-slate-600';
    case 'open':
      return 'bg-amber-100 text-amber-950 ring-amber-300/80 dark:bg-amber-900/40 dark:text-amber-100 dark:ring-amber-700';
    case 'paid':
      return 'bg-emerald-100 text-emerald-900 ring-emerald-300/80 dark:bg-emerald-900/40 dark:text-emerald-100 dark:ring-emerald-700';
    case 'overdue':
      return 'bg-rose-100 text-rose-950 ring-rose-300/80 dark:bg-rose-900/40 dark:text-rose-100 dark:ring-rose-700';
    case 'partially paid':
      return 'bg-sky-100 text-sky-900 ring-sky-300/80 dark:bg-sky-900/40 dark:text-sky-100 dark:ring-sky-700';
    case 'draft':
      return 'bg-zinc-100 text-zinc-600 ring-zinc-200 italic dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700';
    case 'cancelled':
      return 'bg-zinc-200 text-zinc-500 ring-zinc-300 line-through dark:bg-slate-700/60 dark:text-slate-400 dark:ring-slate-600';
    case 'credit note':
      return 'bg-violet-100 text-violet-900 ring-violet-300/80 dark:bg-violet-900/40 dark:text-violet-100 dark:ring-violet-700';
    default:
      return 'bg-zinc-100 text-zinc-600 ring-zinc-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700';
  }
}

/**
 * Tailwind classes for the "health" pill shown on customers. Mirrors the
 * status badge palette so the same colour grammar holds across modules.
 */
export function healthBadgeClass(health) {
  switch (String(health ?? '').toLowerCase()) {
    case 'good':
      return 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-100';
    case 'watch':
      return 'bg-amber-100 text-amber-950 dark:bg-amber-900/30 dark:text-amber-100';
    case 'at risk':
      return 'bg-rose-100 text-rose-900 dark:bg-rose-900/30 dark:text-rose-200';
    default:
      return 'bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-slate-200';
  }
}

/**
 * Formats a Date (or `new Date()` if omitted) as `dd/mm/yyyy`. The seed dataset
 * uses slashes, so all newly created rows funnel through this to stay visually
 * consistent (instead of mixing `28.03.2026` from `toLocaleDateString('de-DE')`).
 *
 * @param {Date} [d]
 */
export function formatDe(d = new Date()) {
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return `${dd}/${mm}/${d.getFullYear()}`;
}

/** Adds `days` to today and returns it formatted in dd/mm/yyyy. */
export function formatDePlusDays(days = 0) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return formatDe(d);
}

/** Parses a German-style dd/mm/yyyy or dd.mm.yyyy date into a Date, or null. */
export function parseDeDate(de) {
  const m = /^(\d{1,2})[./](\d{1,2})[./](\d{4})$/.exec(String(de ?? '').trim());
  if (!m) return null;
  const d = new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
  return Number.isNaN(d.getTime()) ? null : d;
}

/**
 * Returns whole-day delta from today to the given dd/mm/yyyy date (positive = future).
 * @param {string} dueDe
 * @param {Date} [now]
 */
export function daysUntilDue(dueDe, now = new Date()) {
  const due = parseDeDate(dueDe);
  if (!due) return null;
  const a = new Date(due.getFullYear(), due.getMonth(), due.getDate());
  const b = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((a.getTime() - b.getTime()) / 86_400_000);
}

/**
 * Returns a tag for an open/overdue invoice based on its due date.
 * Paid and Offer rows are intentionally not annotated.
 * @returns {{ kind: 'overdue' | 'due-soon', label: string } | null}
 */
export function dueTag(status, dueDe, now) {
  if (status !== 'Open' && status !== 'Overdue') return null;
  const days = daysUntilDue(dueDe, now);
  if (days == null) return null;
  if (status === 'Overdue' || days < 0) {
    const n = Math.abs(days);
    return { kind: 'overdue', label: `${n}d overdue` };
  }
  if (days <= 5) {
    if (days === 0) return { kind: 'due-soon', label: 'due today' };
    if (days === 1) return { kind: 'due-soon', label: 'due tomorrow' };
    return { kind: 'due-soon', label: `due in ${days}d` };
  }
  return null;
}

/**
 * Tailwind classes for the due-tag pill, matching the kind returned by `dueTag`.
 * @param {'overdue' | 'due-soon'} kind
 */
export function dueTagClass(kind) {
  if (kind === 'overdue')
    return 'border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-700 dark:bg-rose-900/30 dark:text-rose-200';
  if (kind === 'due-soon')
    return 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-200';
  return 'border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300';
}
