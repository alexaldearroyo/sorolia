const PREFIX = 'emi-pref-';

/**
 * Reads a preference value with an optional whitelist. Falls back to `fallback`
 * when storage is unavailable, the value is missing, or it is not in `allowed`.
 *
 * @template {string} T
 * @param {string} key
 * @param {T} fallback
 * @param {readonly T[]} [allowed]
 * @returns {T}
 */
export function loadPref(key, fallback, allowed) {
  if (typeof localStorage === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (raw == null) return fallback;
    if (allowed && !allowed.includes(/** @type {T} */ (raw))) return fallback;
    return /** @type {T} */ (raw);
  } catch {
    return fallback;
  }
}

/**
 * @param {string} key
 * @param {string} value
 */
export function savePref(key, value) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(PREFIX + key, value);
  } catch {
    /* private mode / quota */
  }
}
