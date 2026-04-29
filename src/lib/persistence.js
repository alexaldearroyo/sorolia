/**
 * Optional workspace persistence in localStorage. Owners can toggle it from
 * Settings; until then the demo is fully volatile.
 */

const STATE_KEY = 'emi-workspace-state-v1';
const PERSIST_FLAG = 'emi-pref-persist';
const AUDIT_KEY = 'emi-audit-log-v1';
const NOTI_DISMISSED = 'emi-noti-dismissed-v1';

export function loadPersistFlag() {
  if (typeof localStorage === 'undefined') return false;
  try {
    return localStorage.getItem(PERSIST_FLAG) === 'true';
  } catch {
    return false;
  }
}

export function savePersistFlag(value) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(PERSIST_FLAG, value ? 'true' : 'false');
  } catch {
    /* quota / private mode */
  }
}

export function loadWorkspaceState() {
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveWorkspaceState(state) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  } catch {
    /* quota — fall back silently */
  }
}

export function clearWorkspaceState() {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.removeItem(STATE_KEY);
  } catch {
    /* ignore */
  }
}

export function loadAuditLog() {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(AUDIT_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveAuditLog(entries) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(AUDIT_KEY, JSON.stringify(entries.slice(0, 200)));
  } catch {
    /* quota */
  }
}

export function clearAuditStorage() {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.removeItem(AUDIT_KEY);
  } catch {
    /* ignore */
  }
}

export function loadDismissedNoti() {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(NOTI_DISMISSED);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveDismissedNoti(ids) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(NOTI_DISMISSED, JSON.stringify(ids.slice(-200)));
  } catch {
    /* quota */
  }
}
