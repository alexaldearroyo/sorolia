<script>
  import Download from 'lucide-svelte/icons/download';
  import Plus from 'lucide-svelte/icons/plus';

  /**
   * @typedef {{ label: string, onClick: () => void, icon?: any }} ChromeAction
   */

  let {
    userName,
    pageTitle,
    pageSubtitle = '',
    /** @type {ChromeAction | null} */
    primaryAction = null,
    onExportWorkspace
  } = $props();

  let PrimaryIcon = $derived(primaryAction?.icon ?? Plus);
</script>

<div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
  <div class="min-w-0">
    <p class="text-sm font-medium text-zinc-500">Welcome back, {userName}</p>
    <h1 class="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">{pageTitle}</h1>
    {#if pageSubtitle}
      <p class="mt-1 text-sm text-zinc-500">{pageSubtitle}</p>
    {/if}
  </div>
  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-leah-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700"
      onclick={onExportWorkspace}
    >
      <Download class="h-4 w-4" aria-hidden="true" />
      Export workspace
    </button>
    {#if primaryAction}
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-leah-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/50"
        onclick={primaryAction.onClick}
      >
        <PrimaryIcon class="h-4 w-4" aria-hidden="true" />
        {primaryAction.label}
      </button>
    {/if}
  </div>
</div>
