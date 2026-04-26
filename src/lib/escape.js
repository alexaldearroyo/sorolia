/**
 * Registers a global Escape keydown handler. Returns a cleanup function so it
 * plays nicely with `$effect` returns.
 *
 * @param {(e: KeyboardEvent) => void} callback
 */
export function useEscape(callback) {
  if (typeof window === 'undefined') return () => {};
  const handler = (e) => {
    if (e.key === 'Escape') callback(e);
  };
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}
