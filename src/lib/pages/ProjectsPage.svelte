<script>
  import Users from 'lucide-svelte/icons/users';
  import FileText from 'lucide-svelte/icons/file-text';
  import X from 'lucide-svelte/icons/x';
  import Search from 'lucide-svelte/icons/search';
  import { customerName } from '../workspaceActions.js';
  import { parseDeDate } from '../format.js';
  import EmptyState from '../components/EmptyState.svelte';

  let {
    projects,
    totalProjects,
    customers,
    currency,
    paidByCustomerId,
    projectCustomerFilter,
    projectCustomerLabel,
    onClearProjectCustomerFilter,
    onOpenCustomer,
    onOpenInvoices
  } = $props();

  let query = $state('');
  let statusFilter = $state(/** @type {'All'|'Active'|'Planning'|'On hold'} */ ('All'));

  let filtered = $derived.by(() => {
    let rows = projects;
    if (statusFilter !== 'All') rows = rows.filter((p) => p.status === statusFilter);
    if (query.trim()) {
      const q = query.toLowerCase();
      rows = rows.filter((p) =>
        [p.name, p.owner, customerName(customers, p.customerId)].some((v) =>
          (v ?? '').toString().toLowerCase().includes(q)
        )
      );
    }
    return rows;
  });

  /** Build a tiny gantt-ish timeline from the visible projects. */
  let timeline = $derived.by(() => {
    const items = filtered
      .map((p) => ({
        ...p,
        start: parseDeDate(p.startDate),
        end: parseDeDate(p.endDate)
      }))
      .filter((p) => p.start && p.end);
    if (items.length === 0) return null;
    const min = items.reduce((acc, p) => (p.start < acc ? p.start : acc), items[0].start);
    const max = items.reduce((acc, p) => (p.end > acc ? p.end : acc), items[0].end);
    const span = max.getTime() - min.getTime() || 1;
    const today = new Date();
    return {
      min,
      max,
      todayPct: Math.min(100, Math.max(0, ((today.getTime() - min.getTime()) / span) * 100)),
      bars: items.map((p) => ({
        ...p,
        leftPct: Math.max(0, ((p.start.getTime() - min.getTime()) / span) * 100),
        widthPct: Math.max(2, ((p.end.getTime() - p.start.getTime()) / span) * 100)
      }))
    };
  });

  function timelineLabel(d) {
    return d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
  }
</script>

<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
  <header class="mb-4 flex flex-wrap items-center gap-3">
    <div class="relative flex-1 min-w-[14rem]">
      <Search class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" aria-hidden="true" />
      <input
        bind:value={query}
        type="search"
        placeholder="Search projects, owners, customers"
        class="w-full rounded-lg border border-zinc-200 bg-white py-2 pl-9 pr-3 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />
    </div>
    <div class="flex flex-wrap gap-2">
      {#each ['All', 'Active', 'Planning', 'On hold'] as s}
        <button
          type="button"
          aria-pressed={statusFilter === s}
          class="rounded-full border px-3 py-1 text-xs font-semibold {statusFilter === s
            ? 'border-leah-900 bg-leah-900 text-white'
            : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'}"
          onclick={() => (statusFilter = s)}
        >
          {s}
        </button>
      {/each}
    </div>
  </header>

  {#if projectCustomerFilter}
    <div class="mb-4 flex flex-wrap items-center gap-2">
      <span class="text-xs font-medium text-zinc-500 dark:text-slate-400">Filtered by customer</span>
      <span
        class="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-900 dark:border-sky-700/50 dark:bg-sky-900/40 dark:text-sky-100"
      >
        {projectCustomerLabel}
        <button
          type="button"
          class="rounded-full p-0.5 hover:bg-sky-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          onclick={onClearProjectCustomerFilter}
          aria-label="Clear customer filter"
        >
          <X class="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </span>
    </div>
  {/if}

  {#if filtered.length === 0}
    <EmptyState
      icon="📁"
      title="No projects match"
      body={projects.length === 0 ? 'No projects yet.' : 'Try clearing the search or status filter to see more projects.'}
    />
  {:else}
    {#if timeline}
      <article class="mb-5 rounded-xl border border-zinc-200 bg-zinc-50/40 p-4 dark:border-slate-700 dark:bg-slate-800/40">
        <header class="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-slate-400">
          <span>Timeline</span>
          <span>{timelineLabel(timeline.min)} → {timelineLabel(timeline.max)}</span>
        </header>
        <div class="mt-3 space-y-2">
          {#each timeline.bars as bar}
            <button
              type="button"
              class="group block w-full text-left"
              onclick={() => onOpenInvoices(bar.customerId)}
              title="{bar.startDate} → {bar.endDate} · {bar.owner}"
            >
              <div class="flex items-center justify-between text-[11px] text-zinc-600 dark:text-slate-300">
                <span class="font-semibold text-zinc-800 dark:text-slate-100">{bar.name}</span>
                <span class="text-zinc-400">{bar.owner}</span>
              </div>
              <div class="relative mt-1 h-3 rounded-full bg-zinc-200 dark:bg-slate-700">
                <div
                  class="absolute top-0 h-3 rounded-full {bar.status === 'Active'
                    ? 'bg-emerald-500/80 group-hover:bg-emerald-500'
                    : bar.status === 'Planning'
                      ? 'bg-sky-500/80 group-hover:bg-sky-500'
                      : 'bg-zinc-400 group-hover:bg-zinc-500'}"
                  style={`left:${bar.leftPct}%; width:${bar.widthPct}%`}
                ></div>
              </div>
            </button>
          {/each}
          <div class="relative h-2">
            <div
              class="absolute top-0 h-full w-px bg-rose-500"
              style={`left:${timeline.todayPct}%`}
              aria-hidden="true"
              title="Today"
            ></div>
          </div>
        </div>
      </article>
    {/if}

    <div class="grid gap-4 md:grid-cols-2">
      {#each filtered as p}
        {@const spent = paidByCustomerId(p.customerId) ?? 0}
        {@const pct = p.budget > 0 ? Math.min(100, Math.round((spent / p.budget) * 100)) : 0}
        <article class="rounded-xl border border-zinc-200 bg-zinc-50/40 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800/40">
          <div class="flex flex-wrap items-start justify-between gap-2">
            <h3 class="text-lg font-bold text-zinc-900 dark:text-slate-100">{p.name}</h3>
            <span
              class="rounded-full px-2.5 py-0.5 text-xs font-bold {p.status === 'Active'
                ? 'bg-emerald-100 text-emerald-900'
                : p.status === 'Planning'
                  ? 'bg-sky-100 text-sky-900'
                  : 'bg-zinc-200 text-zinc-700'}"
            >
              {p.status}
            </span>
          </div>
          <p class="mt-1 text-sm text-zinc-500 dark:text-slate-400">
            Owner <span class="font-medium text-zinc-700 dark:text-slate-200">{p.owner}</span>
          </p>
          {#if p.nextReview}
            <p class="mt-2 text-xs font-medium text-zinc-600 dark:text-slate-300">
              Next review <span class="font-mono text-zinc-800 dark:text-slate-100">{p.nextReview}</span>
              <span class="text-zinc-400"> · shown on Calendar</span>
            </p>
          {/if}
          <button
            type="button"
            class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-leah-800 hover:underline dark:text-leah-700"
            onclick={() => onOpenCustomer(p.customerId)}
          >
            <Users class="h-4 w-4" aria-hidden="true" />
            {customerName(customers, p.customerId)}
          </button>
          <div class="mt-4">
            <div class="flex flex-wrap justify-between gap-2 text-xs font-medium text-zinc-500 dark:text-slate-400">
              <span title="Sum of paid invoices for this customer in the demo dataset">
                Customer revenue vs budget
              </span>
              <span class="tabular-nums text-zinc-800 dark:text-slate-100">{currency(spent)} / {currency(p.budget)}</span>
            </div>
            <div class="mt-1 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-slate-700">
              <div class="h-full rounded-full bg-leah-700" style={`width:${pct}%`}></div>
            </div>
            <p class="mt-1 text-[10px] text-zinc-400">
              Demo proxy: paid invoices for this customer / project budget. Not project-level cost.
            </p>
          </div>
          <button
            type="button"
            class="mt-4 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            onclick={() => onOpenInvoices(p.customerId)}
          >
            <FileText class="h-4 w-4" aria-hidden="true" />
            Matching invoices
          </button>
        </article>
      {/each}
    </div>
  {/if}
</section>
