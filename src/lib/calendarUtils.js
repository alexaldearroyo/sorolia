import { deDateToIso, customerName } from './workspaceActions.js';

/**
 * @typedef {{ dayKey: string, kind: string, title: string, summary: string, refId: string, amount?: number, currency?: string, status?: string, customerId?: string }} CalendarEvent
 */

/** Short label for calendar cells — drops trailing “(City)” when present. */
export function customerShortLabel(customers, customerId) {
  const full = customerName(customers, customerId);
  const cut = full.indexOf(' (');
  return cut > 0 ? full.slice(0, cut) : full;
}

/**
 * @param {Array<{ due: string, created: string, id: string, customerId: string, status: string, amount: number, currency?: string }>} invoices
 * @param {Array<{ date: string, vendor: string, amount: number, id: string }>} expenseItems
 * @param {Array<{ id: string, name: string, customerId: string, nextReview?: string }>} projects
 * @param {Array<{ id: string, name: string }>} [customers]
 */
export function collectWorkspaceEvents(invoices, expenseItems, projects, customers = []) {
  /** @type {CalendarEvent[]} */
  const out = [];

  for (const inv of invoices) {
    const who = customerShortLabel(customers, inv.customerId);
    const dueK = deDateToIso(inv.due);
    if (dueK) {
      out.push({
        dayKey: dueK,
        kind: 'invoice-due',
        title: `${inv.id} · due`,
        summary: who,
        refId: inv.id,
        amount: inv.amount,
        currency: inv.currency ?? 'EUR',
        status: inv.status,
        customerId: inv.customerId
      });
    }
    const crK = deDateToIso(inv.created);
    if (crK) {
      out.push({
        dayKey: crK,
        kind: 'invoice-created',
        title: `${inv.id} · issued`,
        summary: who,
        refId: inv.id,
        amount: inv.amount,
        currency: inv.currency ?? 'EUR',
        customerId: inv.customerId
      });
    }
  }

  for (const e of expenseItems) {
    const k = deDateToIso(e.date);
    if (k) {
      out.push({
        dayKey: k,
        kind: 'expense',
        title: e.vendor,
        summary: e.vendor,
        refId: e.id,
        amount: e.amount,
        currency: 'EUR'
      });
    }
  }

  for (const p of projects) {
    if (p.nextReview) {
      const k = deDateToIso(p.nextReview);
      if (k) {
        out.push({
          dayKey: k,
          kind: 'project-review',
          title: `${p.name} · review`,
          summary: p.name,
          refId: p.id,
          customerId: p.customerId
        });
      }
    }
  }

  return out;
}

/** @param {CalendarEvent[]} events */
export function eventsByDay(events) {
  /** @type {Map<string, CalendarEvent[]>} */
  const map = new Map();
  for (const ev of events) {
    const list = map.get(ev.dayKey) ?? [];
    list.push(ev);
    map.set(ev.dayKey, list);
  }
  return map;
}

export function eventsForDay(map, dayKey) {
  return map.get(dayKey) ?? [];
}

/** Monday = first column; 6 weeks */
export function getCalendarGrid(year, monthIndex0) {
  const first = new Date(year, monthIndex0, 1);
  const startDow = (first.getDay() + 6) % 7;
  const gridStart = new Date(year, monthIndex0, 1 - startDow);
  /** @type {{ date: Date, inMonth: boolean, isoKey: string }[]} */
  const cells = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    const inMonth = d.getMonth() === monthIndex0;
    const isoKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    cells.push({ date: d, inMonth, isoKey });
  }
  return cells;
}

export function formatIsoToDe(isoKey, locale = 'en-GB') {
  const [y, m, d] = isoKey.split('-').map((x) => Number.parseInt(x, 10));
  if (!y || !m || !d) return isoKey;
  return new Date(y, m - 1, d).toLocaleDateString(locale);
}

export function isoKeyFromDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/** @param {CalendarEvent[]} events */
export function countEventsBetween(events, startKey, endKey) {
  return events.filter((e) => e.dayKey >= startKey && e.dayKey <= endKey).length;
}
