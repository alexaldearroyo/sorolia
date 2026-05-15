<script>
  import Users from 'lucide-svelte/icons/users';
  import FileText from 'lucide-svelte/icons/file-text';
  import X from 'lucide-svelte/icons/x';
  import Search from 'lucide-svelte/icons/search';
  import CalendarDays from 'lucide-svelte/icons/calendar-days';
  import { customerName } from '../workspaceActions.js';
  import { parseDeDate } from '../format.js';
  import EmptyState from '../components/EmptyState.svelte';
  import InfoBox from '../components/InfoBox.svelte';
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import CalendarPage from './CalendarPage.svelte';

  let {
    projects,
    totalProjects,
    customers,
    currency,
    locale = 'en-GB',
    paidByCustomerId,
    projectCustomerFilter,
    projectCustomerLabel,
    onClearProjectCustomerFilter,
    onOpenCustomer,
    onOpenInvoices,
    invoices = [],
    expenseItems = [],
    onOpenInvoiceEdit = () => {},
    onOpenExpenseEdit = () => {},
    onOpenProjectById = () => {},
    /** Increment to smooth-scroll the delivery schedule into view (e.g. #/calendar deep link). */
    scheduleScrollNonce = 0
  } = $props();

  let query = $state('');
  let statusFilter = $state(/** @type {'All'|'Active'|'Planning'|'On hold'} */ ('All'));
  /** ISO yyyy-mm of the currently focused month chip; null = show everything. */
  let focusMonthKey = $state(/** @type {string | null} */ (null));
  let monthStripEl = $state(/** @type {HTMLElement | undefined} */ (undefined));

  function monthsBetween(start, end) {
    if (!start || !end) return [];
    const out = [];
    const d = new Date(start.getFullYear(), start.getMonth(), 1);
    const stop = new Date(end.getFullYear(), end.getMonth(), 1);
    while (d <= stop) {
      out.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
      d.setMonth(d.getMonth() + 1);
    }
    return out;
  }

  let filtered = $derived.by(() => {
    let rows = projects;
    if (statusFilter !== 'All') rows = rows.filter((p) => p.status === statusFilter);
    if (focusMonthKey) {
      rows = rows.filter((p) => {
        const start = parseDeDate(p.startDate);
        const end = parseDeDate(p.endDate);
        if (!start || !end) return false;
        return monthsBetween(start, end).includes(focusMonthKey);
      });
    }
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

  /** Month chips that span every project's start–end window (deduped & sorted). */
  let monthChips = $derived.by(() => {
    const set = new Set();
    for (const p of projects) {
      const start = parseDeDate(p.startDate);
      const end = parseDeDate(p.endDate);
      if (!start || !end) continue;
      for (const k of monthsBetween(start, end)) set.add(k);
    }
    const todayKey = (() => {
      const d = new Date();
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    })();
    set.add(todayKey);
    return Array.from(set)
      .sort()
      .map((key) => {
        const [y, m] = key.split('-').map(Number);
        const label = new Date(y, m - 1, 1).toLocaleDateString('en-GB', { month: 'short', year: '2-digit' });
        return { key, label, isCurrent: key === todayKey };
      });
  });

  function scrollMonths(delta) {
    monthStripEl?.scrollBy({ left: delta, behavior: 'smooth' });
  }

  $effect(() => {
    if (!monthChips.length) return;
    queueMicrotask(() => {
      if (!monthStripEl) return;
      const current = monthStripEl.querySelector('[data-current="true"]');
      if (current instanceof HTMLElement) {
        current.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
      }
    });
  });

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

  $effect(() => {
    if (!scheduleScrollNonce) return;
    queueMicrotask(() => {
      document.getElementById('projects-schedule')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
</script>

<div class="grid gap-10">
  <section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <header class="mb-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
      <div>
        <h2 class="text-lg font-bold text-zinc-900 dark:text-slate-100">Projects &amp; budgets</h2>
        <p class="text-sm text-zinc-500 dark:text-slate-400">
          {totalProjects} initiative{totalProjects === 1 ? '' : 's'} · delivery window, customer tie-in and revenue vs budget · scroll down for the shared calendar
        </p>
      </div>
    </header>

    {#if monthChips.length}
      <div class="mb-4 flex items-center gap-2">
        <button
          type="button"
          class="hidden shrink-0 rounded-full border border-zinc-200 bg-white p-1.5 text-zinc-600 transition hover:bg-zinc-50 sm:inline-flex dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          onclick={() => scrollMonths(-240)}
          aria-label="Previous months"
        >
          <ChevronLeft class="h-4 w-4" aria-hidden="true" />
        </button>
        <div
          bind:this={monthStripEl}
          class="flex flex-1 cursor-grab snap-x snap-mandatory gap-2 overflow-x-auto pb-1 active:cursor-grabbing"
          aria-label="Months"
          role="tablist"
        >
          {#each monthChips as chip}
            <button
              type="button"
              data-current={chip.isCurrent ? 'true' : 'false'}
              aria-selected={focusMonthKey === chip.key}
              class="snap-start shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition {focusMonthKey === chip.key
                ? 'border-leah-900 bg-leah-900 text-white'
                : chip.isCurrent
                  ? 'border-amber-300 bg-amber-50 text-amber-900 hover:border-amber-400'
                  : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'}"
              onclick={() => (focusMonthKey = focusMonthKey === chip.key ? null : chip.key)}
              role="tab"
            >
              {chip.label}{chip.isCurrent ? ' · now' : ''}
            </button>
          {/each}
        </div>
        <button
          type="button"
          class="hidden shrink-0 rounded-full border border-zinc-200 bg-white p-1.5 text-zinc-600 transition hover:bg-zinc-50 sm:inline-flex dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          onclick={() => scrollMonths(240)}
          aria-label="Next months"
        >
          <ChevronRight class="h-4 w-4" aria-hidden="true" />
        </button>
        <span class="hidden lg:inline-flex">
          <InfoBox helpKey="projects.months" />
        </span>
        {#if focusMonthKey}
          <button
            type="button"
            class="shrink-0 text-xs font-semibold text-leah-800 hover:underline dark:text-leah-700"
            onclick={() => (focusMonthKey = null)}
          >
            Clear
          </button>
        {/if}
      </div>
    {/if}

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
                <span class="text-zinc-400"> · also on the calendar below</span>
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

  <div id="projects-schedule" class="scroll-mt-24">
    <div class="mb-3 flex flex-wrap items-start gap-3">
      <div
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leah-900 text-white shadow dark:bg-leah-800"
        aria-hidden="true"
      >
        <CalendarDays class="h-5 w-5" />
      </div>
      <div class="min-w-0 flex-1">
        <h2 class="text-lg font-bold text-zinc-900 dark:text-slate-100">Delivery schedule</h2>
        <p class="text-sm text-zinc-500 dark:text-slate-400">
          Same workspace data as above: invoice due dates, postings and project reviews. Filter the dots to focus on what you are steering this week.
        </p>
      </div>
    </div>
    <CalendarPage
      embedded
      {invoices}
      {expenseItems}
      projects={projects}
      {customers}
      {locale}
      {onOpenInvoiceEdit}
      {onOpenExpenseEdit}
      {onOpenProjectById}
    />
  </div>
</div>
