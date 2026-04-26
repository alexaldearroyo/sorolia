import { deDateToIso } from './workspaceActions.js';

/**
 * @typedef {{ dayKey: string, kind: string, title: string, refId: string, amount?: number, status?: string, customerId?: string }} CalendarEvent
 */

/**
 * @param {Array<{ due: string, created: string, id: string, customerId: string, status: string, amount: number }>} invoices
 * @param {Array<{ date: string, vendor: string, amount: number, id: string }>} expenseItems
 * @param {Array<{ id: string, name: string, customerId: string, nextReview?: string }>} projects
 */
export function collectWorkspaceEvents(invoices, expenseItems, projects) {
  /** @type {CalendarEvent[]} */
  const out = [];

  for (const inv of invoices) {
    const dueK = deDateToIso(inv.due);
    if (dueK) {
      out.push({
        dayKey: dueK,
        kind: 'invoice-due',
        title: `${inv.id} · due`,
        refId: inv.id,
        amount: inv.amount,
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
        refId: inv.id,
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
        refId: e.id,
        amount: e.amount
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

export function formatIsoToDe(isoKey) {
  const [y, m, d] = isoKey.split('-').map((x) => Number.parseInt(x, 10));
  if (!y || !m || !d) return isoKey;
  return new Date(y, m - 1, d).toLocaleDateString('de-DE');
}

export function isoKeyFromDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/** @param {CalendarEvent[]} events */
export function countEventsBetween(events, startKey, endKey) {
  return events.filter((e) => e.dayKey >= startKey && e.dayKey <= endKey).length;
}
