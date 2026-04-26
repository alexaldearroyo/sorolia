/**
 * Captures the previously focused element, focuses the first form control inside the
 * supplied dialog ref on the next microtask, and restores focus on cleanup.
 *
 * Designed to be returned from a Svelte `$effect` so the cleanup runs when the dialog
 * closes (or the effect is re-run / destroyed).
 *
 * @param {() => HTMLElement | undefined | null} getDialogEl
 * @returns {() => void}
 */
export function lockDialogFocus(getDialogEl) {
  if (typeof document === 'undefined') return () => {};
  const previouslyFocused = /** @type {HTMLElement | null} */ (
    document.activeElement instanceof HTMLElement ? document.activeElement : null
  );
  queueMicrotask(() => {
    const el = getDialogEl();
    if (!el) return;
    const target = /** @type {HTMLElement | null} */ (
      el.querySelector(
        'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]):not([aria-label="Close"])'
      )
    );
    target?.focus?.();
  });
  return () => {
    if (!previouslyFocused) return;
    try {
      previouslyFocused.focus({ preventScroll: true });
    } catch {
      /* noop */
    }
  };
}
