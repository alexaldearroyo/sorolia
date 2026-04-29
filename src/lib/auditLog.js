import { loadAuditLog, saveAuditLog, clearAuditStorage } from './persistence.js';

/**
 * Tiny audit log. Lives at module scope so any caller can append without
 * prop-drilling. Hydrates from localStorage on first access; persistence is
 * always-on for audit (this keeps the demo realistic) regardless of the
 * workspace persistence toggle.
 */

let entries = loadAuditLog();
let counter = entries.length;
const listeners = new Set();

function notify() {
  listeners.forEach((fn) => fn(entries));
  saveAuditLog(entries);
}

export function readAuditLog() {
  return entries;
}

export function subscribeAuditLog(fn) {
  listeners.add(fn);
  fn(entries);
  return () => listeners.delete(fn);
}

export function clearAuditLog() {
  entries = [];
  clearAuditStorage();
  listeners.forEach((fn) => fn(entries));
}

/**
 * @param {{
 *   actorId: string,
 *   actorName: string,
 *   actorRole: string,
 *   action: 'create' | 'update' | 'delete' | 'export' | 'reset' | 'login' | 'role-switch',
 *   resource: string,
 *   resourceId?: string,
 *   summary?: string
 * }} input
 */
export function logAuditEvent(input) {
  counter += 1;
  const entry = {
    id: `audit-${Date.now()}-${counter}`,
    at: new Date().toISOString(),
    ...input
  };
  entries = [entry, ...entries].slice(0, 500);
  notify();
  return entry;
}

const ACTION_LABELS = {
  create: 'Created',
  update: 'Updated',
  delete: 'Deleted',
  export: 'Exported',
  reset: 'Reset',
  login: 'Signed in',
  'role-switch': 'Switched role'
};

export function actionLabel(action) {
  return ACTION_LABELS[action] ?? action;
}
