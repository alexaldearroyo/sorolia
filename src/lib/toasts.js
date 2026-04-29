/**
 * Tiny toast bus. Components subscribe to render the host; any caller can
 * `pushToast({...})` from anywhere without prop-drilling.
 */

let entries = [];
let counter = 0;
const listeners = new Set();

function notify() {
  listeners.forEach((fn) => fn(entries));
}

export function subscribeToasts(fn) {
  listeners.add(fn);
  fn(entries);
  return () => listeners.delete(fn);
}

export function pushToast({ kind = 'info', title, body, ttl = 3500 }) {
  counter += 1;
  const id = `toast-${Date.now()}-${counter}`;
  const entry = { id, kind, title, body, ttl };
  entries = [...entries, entry];
  notify();
  if (ttl > 0 && typeof window !== 'undefined') {
    window.setTimeout(() => dismissToast(id), ttl);
  }
  return id;
}

export function dismissToast(id) {
  const before = entries.length;
  entries = entries.filter((t) => t.id !== id);
  if (entries.length !== before) notify();
}

export function clearToasts() {
  entries = [];
  notify();
}
