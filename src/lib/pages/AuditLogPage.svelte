<script>
  import Download from 'lucide-svelte/icons/download';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import { actionLabel } from '../auditLog.js';
  import { roleBadgeClass, roleLabel } from '../permissions.js';

  let { entries = [], canExport = false, canClear = false, onExport, onClear } = $props();

  let action = $state('All');
  let resource = $state('All');

  const actionOptions = ['All', 'create', 'update', 'delete', 'export', 'reset', 'login', 'role-switch'];
  const resourceOptions = $derived(['All', ...new Set(entries.map((e) => e.resource))]);

  const filtered = $derived(
    entries.filter((e) => (action === 'All' || e.action === action) && (resource === 'All' || e.resource === resource))
  );

  function formatTime(iso) {
    const d = new Date(iso);
    return d.toLocaleString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  function actionClass(a) {
    switch (a) {
      case 'create':
        return 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100';
      case 'update':
        return 'bg-sky-100 text-sky-900 dark:bg-sky-900/40 dark:text-sky-100';
      case 'delete':
        return 'bg-rose-100 text-rose-900 dark:bg-rose-900/40 dark:text-rose-100';
      case 'cancel':
        return 'bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100';
      case 'export':
        return 'bg-violet-100 text-violet-900 dark:bg-violet-900/40 dark:text-violet-100';
      case 'reset':
        return 'bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100';
      case 'login':
        return 'bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-slate-200';
      case 'role-switch':
        return 'bg-indigo-100 text-indigo-900 dark:bg-indigo-900/40 dark:text-indigo-100';
      default:
        return 'bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-slate-200';
    }
  }
</script>

<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
  <header class="flex flex-wrap items-center justify-between gap-3">
    <div>
      <h2 class="text-lg font-bold text-zinc-900 dark:text-slate-100">Audit log</h2>
      <p class="text-sm text-zinc-500 dark:text-slate-400">{entries.length} events captured this session · in-memory, resets on reload.</p>
    </div>
    <div class="flex flex-wrap gap-2">
      {#if canExport}
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          onclick={onExport}
        >
          <Download class="h-4 w-4" aria-hidden="true" />
          Download CSV
        </button>
      {/if}
      {#if canClear}
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-900 hover:bg-rose-100 dark:border-rose-700 dark:bg-rose-900/30 dark:text-rose-100 dark:hover:bg-rose-900/50"
          onclick={onClear}
        >
          <Trash2 class="h-4 w-4" aria-hidden="true" />
          Clear log
        </button>
      {/if}
    </div>
  </header>

  <div class="mt-4 flex flex-wrap items-center gap-2 text-sm">
    <label class="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-slate-300">
      Action
      <select bind:value={action} class="rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
        {#each actionOptions as opt}
          <option value={opt}>{opt}</option>
        {/each}
      </select>
    </label>
    <label class="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-slate-300">
      Resource
      <select bind:value={resource} class="rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
        {#each resourceOptions as opt}
          <option value={opt}>{opt}</option>
        {/each}
      </select>
    </label>
    <span class="ml-auto text-xs text-zinc-500 dark:text-slate-400">{filtered.length} matching</span>
  </div>

  {#if filtered.length === 0}
    <p class="mt-6 rounded-lg border border-dashed border-zinc-200 bg-zinc-50/40 px-4 py-12 text-center text-sm text-zinc-500 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-400">
      Nothing yet · create or edit something and the event will land here.
    </p>
  {:else}
    <div class="mt-4 overflow-x-auto rounded-lg border border-zinc-200 dark:border-slate-700">
      <table class="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            <th class="px-4 py-3" scope="col">Time</th>
            <th class="px-4 py-3" scope="col">Actor</th>
            <th class="px-4 py-3" scope="col">Action</th>
            <th class="px-4 py-3" scope="col">Resource</th>
            <th class="px-4 py-3" scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {#each filtered as ev}
            <tr class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80 dark:border-slate-800 dark:hover:bg-slate-800/60">
              <td class="px-4 py-3 font-mono text-xs text-zinc-600 dark:text-slate-300">{formatTime(ev.at)}</td>
              <td class="px-4 py-3">
                <span class="block text-sm font-semibold text-zinc-900 dark:text-slate-100">{ev.actorName}</span>
                <span
                  class="mt-0.5 inline-flex items-center rounded-full border px-1.5 py-0 text-[10px] font-bold uppercase tracking-wide {roleBadgeClass(
                    ev.actorRole
                  )}"
                >
                  {roleLabel(ev.actorRole)}
                </span>
              </td>
              <td class="px-4 py-3">
                <span class="inline-flex rounded-md px-2 py-0.5 text-xs font-bold {actionClass(ev.action)}">
                  {actionLabel(ev.action)}
                </span>
              </td>
              <td class="px-4 py-3">
                <span class="text-sm text-zinc-800 dark:text-slate-200">{ev.resource}</span>
                {#if ev.resourceId}
                  <span class="block font-mono text-xs text-zinc-500 dark:text-slate-400">{ev.resourceId}</span>
                {/if}
              </td>
              <td class="px-4 py-3 text-sm text-zinc-600 dark:text-slate-300">{ev.summary ?? '—'}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</section>
