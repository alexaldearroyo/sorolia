<script>
  import Download from 'lucide-svelte/icons/download';
  import Plus from 'lucide-svelte/icons/plus';
  import Lock from 'lucide-svelte/icons/lock';

  /**
   * @typedef {{ label: string, onClick: () => void, icon?: any, disabled?: boolean, disabledHint?: string }} ChromeAction
   */

  let {
    userName,
    pageTitle,
    pageSubtitle = '',
    /** @type {ChromeAction | null} */
    secondaryAction = null,
    /** @type {ChromeAction | null} */
    primaryAction = null,
    showExport = false,
    onExportWorkspace
  } = $props();

  const outlineBtnClass =
    'inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-leah-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800';

  let SecondaryIcon = $derived(secondaryAction?.icon ?? Download);
  let PrimaryIcon = $derived(primaryAction?.icon ?? Plus);
</script>

<div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
  <div class="min-w-0">
    <p class="text-sm font-medium text-zinc-500 dark:text-slate-400">Welcome back, {userName}</p>
    <h1 class="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl dark:text-slate-100">{pageTitle}</h1>
    {#if pageSubtitle}
      <p class="mt-1 hidden text-sm text-zinc-500 sm:block dark:text-slate-400">{pageSubtitle}</p>
    {/if}
  </div>
  {#if secondaryAction || showExport || primaryAction}
    <div class="flex flex-wrap gap-2">
      {#if secondaryAction}
        <button
          type="button"
          class={outlineBtnClass}
          onclick={secondaryAction.onClick}
          disabled={secondaryAction.disabled}
          title={secondaryAction.disabled ? secondaryAction.disabledHint : undefined}
          aria-disabled={secondaryAction.disabled ? 'true' : 'false'}
        >
          <SecondaryIcon class="h-4 w-4" aria-hidden="true" />
          {secondaryAction.label}
        </button>
      {/if}
      {#if showExport}
        <button type="button" class={outlineBtnClass} onclick={onExportWorkspace}>
          <Download class="h-4 w-4" aria-hidden="true" />
          Export workspace
        </button>
      {/if}
      {#if primaryAction}
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-leah-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/50 disabled:cursor-not-allowed disabled:bg-zinc-200 disabled:text-zinc-500 dark:disabled:bg-slate-800 dark:disabled:text-slate-500"
          onclick={primaryAction.onClick}
          disabled={primaryAction.disabled}
          title={primaryAction.disabled ? primaryAction.disabledHint : undefined}
          aria-disabled={primaryAction.disabled ? 'true' : 'false'}
        >
          {#if primaryAction.disabled}
            <Lock class="h-4 w-4" aria-hidden="true" />
          {:else}
            <PrimaryIcon class="h-4 w-4" aria-hidden="true" />
          {/if}
          {primaryAction.label}
        </button>
      {/if}
    </div>
  {/if}
</div>
