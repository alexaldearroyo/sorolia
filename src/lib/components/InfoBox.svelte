<script>
  /**
   * Tiny `?` icon that toggles a popover with a help text. Pass either a
   * pre-baked `text` prop or a `helpKey` resolved against `helpTexts.js`.
   *
   * Usage:
   *   <InfoBox helpKey="dashboard.opex" />
   *   <InfoBox text="Anything inline" label="Operating costs help" />
   */
  import CircleHelp from 'lucide-svelte/icons/circle-help';
  import { helpFor } from '../helpTexts.js';

  let { helpKey = null, text = null, label = 'More info', size = 'sm', placement = 'auto' } = $props();

  let open = $state(false);
  let wrapper = $state(/** @type {HTMLElement | undefined} */ (undefined));

  const resolvedText = $derived(text ?? (helpKey ? helpFor(helpKey) : null));

  $effect(() => {
    if (!open) return;
    if (typeof document === 'undefined') return;
    const onClick = (e) => {
      if (!(e.target instanceof Node)) return;
      if (wrapper && !wrapper.contains(e.target)) open = false;
    };
    const onKey = (e) => {
      if (e.key === 'Escape') open = false;
    };
    document.addEventListener('click', onClick, true);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('keydown', onKey);
    };
  });

  const dim = $derived(size === 'lg' ? 'h-4 w-4' : size === 'md' ? 'h-3.5 w-3.5' : 'h-3 w-3');
</script>

{#if resolvedText}
  <span class="relative inline-flex" bind:this={wrapper}>
    <button
      type="button"
      class="inline-flex h-4 w-4 items-center justify-center rounded-full text-zinc-400 transition hover:text-leah-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/40 dark:text-slate-400 dark:hover:text-leah-500"
      aria-label={label}
      aria-expanded={open}
      onclick={(e) => {
        e.stopPropagation();
        open = !open;
      }}
    >
      <CircleHelp class={dim} aria-hidden="true" />
    </button>
    {#if open}
      <span
        role="tooltip"
        class="absolute z-50 mt-1 w-64 rounded-lg border border-zinc-200 bg-white p-3 text-left text-xs font-normal leading-relaxed text-zinc-700 shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200
          {placement === 'left' ? 'right-0 top-full' : placement === 'right' ? 'left-0 top-full' : 'left-1/2 top-full -translate-x-1/2'}"
      >
        {resolvedText}
      </span>
    {/if}
  </span>
{/if}
