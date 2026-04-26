<script>
  import Download from 'lucide-svelte/icons/download';
  import Plus from 'lucide-svelte/icons/plus';

  let { userName, pageTitle, onNewInvoice, onExportWorkspace } = $props();
</script>

<div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
  <div>
    <p class="text-sm font-medium text-zinc-500">Welcome back, {userName}</p>
    <h1 class="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">{pageTitle}</h1>
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
    <button
      type="button"
      class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-leah-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/50"
      onclick={onNewInvoice}
    >
      <Plus class="h-4 w-4" aria-hidden="true" />
      New invoice
    </button>
  </div>
</div>

<p
  class="mb-6 hidden rounded-lg border border-leah-700/20 bg-leah-900/5 px-4 py-3 text-sm text-zinc-700 md:block"
>
  <strong class="text-leah-900">Shortcuts:</strong> click outside any field, then
  <kbd class="rounded border border-zinc-300 bg-white px-1 font-mono text-xs">Alt</kbd>
  +
  <kbd class="rounded border border-zinc-300 bg-white px-1 font-mono text-xs">H (Dashboard) I E …</kbd>
  to switch modules. Sidebar can collapse like GitLab / ClickUp (desktop).
</p>
