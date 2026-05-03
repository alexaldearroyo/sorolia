<script>
  import FileText from 'lucide-svelte/icons/file-text';
  import Users from 'lucide-svelte/icons/users';
  import Package from 'lucide-svelte/icons/package';
  import FolderKanban from 'lucide-svelte/icons/folder-kanban';
  import Briefcase from 'lucide-svelte/icons/briefcase';
  import CalendarDays from 'lucide-svelte/icons/calendar-days';
  import Receipt from 'lucide-svelte/icons/receipt';
  import AlertTriangle from 'lucide-svelte/icons/alert-triangle';
  import { statusBadgeClass, dueTag, dueTagClass, healthBadgeClass, parseDeDate } from '../format.js';
  import CashFlowChart from '../components/CashFlowChart.svelte';

  let {
    period = $bindable(),
    chartLayout = $bindable(),
    totals,
    openCount,
    overdueCount,
    paidCount,
    expenseTotal,
    cashBars,
    invoiceRows,
    expensesCount,
    employeesCount,
    currency,
    onViewInvoices,
    onOpenInvoice,
    inventoryLowCount,
    atRiskCustomers,
    activeProjectsCount,
    upcomingFortnight,
    topOverdueCustomer = '',
    cashTrendPct = 0,
    inventory = [],
    customers = [],
    expenses = [],
    onGoCustomers,
    onGoInventory,
    onGoProjects,
    onGoExpenses = () => {},
    onGoHR,
    onGoCalendar,
    onOpenCustomer = () => {},
    onOpenExpense = () => {},
    showHR = true
  } = $props();

  let lowStockTop = $derived(
    [...inventory]
      .filter((r) => r.qty <= r.reorder)
      .sort((a, b) => (a.qty / Math.max(1, a.reorder)) - (b.qty / Math.max(1, b.reorder)))
      .slice(0, 4)
  );

  let atRiskList = $derived(customers.filter((c) => c.health === 'At risk').slice(0, 4));

  let recentExpenses = $derived(
    [...expenses]
      .sort((a, b) => {
        const da = parseDeDate(a.date)?.getTime() ?? 0;
        const db = parseDeDate(b.date)?.getTime() ?? 0;
        return db - da;
      })
      .slice(0, 5)
  );

  const periodLabel = $derived(
    period === 'Monthly'
      ? 'Last 6 closed months'
      : period === 'Weekly'
        ? 'April · weekly buckets'
        : 'Quarterly · 4 buckets'
  );

  const now = new Date();

  const cashTrendLabel = $derived.by(() => {
    if (!Number.isFinite(cashTrendPct) || cashTrendPct === 0) return 'Flat vs prior period';
    const sign = cashTrendPct > 0 ? '+' : '';
    return `${sign}${cashTrendPct.toFixed(1)}% vs prior period`;
  });
</script>

<section class="mb-4 grid gap-4 lg:grid-cols-3" aria-label="Headline KPIs">
  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <p class="text-[11px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Paid income · YTD</p>
    <strong class="mt-1 block text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-slate-100">{currency(totals.revenue)}</strong>
    <p
      class="mt-1 text-xs font-medium {cashTrendPct > 0
        ? 'text-emerald-700 dark:text-emerald-300'
        : cashTrendPct < 0
          ? 'text-rose-700 dark:text-rose-300'
          : 'text-zinc-500 dark:text-slate-400'}"
    >
      {cashTrendLabel}
    </p>
  </article>

  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <p class="text-[11px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Outstanding AR</p>
    <strong class="mt-1 block text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-slate-100">{currency(totals.pending)}</strong>
    <div class="mt-2 grid grid-cols-2 gap-2 text-xs">
      <div class="rounded-md bg-zinc-50 px-2 py-1.5 dark:bg-slate-800/60">
        <p class="font-semibold text-zinc-700 dark:text-slate-300">{openCount} open</p>
        <p class="text-[10px] text-zinc-500 dark:text-slate-400">awaiting payment</p>
      </div>
      <div class="rounded-md bg-rose-50 px-2 py-1.5 dark:bg-rose-900/20">
        <p class="font-semibold text-rose-800 dark:text-rose-200 tabular-nums">{currency(totals.overdue)}</p>
        <p class="text-[10px] text-rose-700/80 dark:text-rose-300/80 truncate">
          {#if overdueCount === 0}
            no overdue
          {:else if topOverdueCustomer}
            {overdueCount} overdue · {topOverdueCustomer}
          {:else}
            {overdueCount} overdue
          {/if}
        </p>
      </div>
    </div>
  </article>

  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <p class="text-[11px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">OpEx · this period</p>
    <strong class="mt-1 block text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-slate-100">{currency(expenseTotal)}</strong>
    <p class="mt-1 text-xs text-zinc-500 dark:text-slate-400">{expensesCount} posting{expensesCount === 1 ? '' : 's'} · CSV export ready</p>
  </article>
</section>

<section
  class="mb-6 rounded-xl border border-zinc-200/80 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900"
  aria-label="Cross-module signals"
>
  <div class="grid grid-cols-2 divide-x divide-zinc-100 sm:grid-cols-4 dark:divide-slate-800 {showHR ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}">
    <button
      type="button"
      class="flex items-center gap-3 px-3 py-2 text-left transition hover:bg-zinc-50 dark:hover:bg-slate-800/60"
      onclick={onGoCustomers}
    >
      <Users class="h-4 w-4 shrink-0 text-leah-800 dark:text-leah-700" aria-hidden="true" />
      <div class="min-w-0">
        <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">At-risk</p>
        <p class="text-base font-extrabold text-zinc-900 dark:text-slate-100">{atRiskCustomers}<span class="ml-1 text-[10px] font-semibold text-zinc-500 dark:text-slate-400">customers</span></p>
      </div>
    </button>
    <button
      type="button"
      class="flex items-center gap-3 px-3 py-2 text-left transition hover:bg-zinc-50 dark:hover:bg-slate-800/60"
      onclick={onGoInventory}
    >
      <Package class="h-4 w-4 shrink-0 text-leah-800 dark:text-leah-700" aria-hidden="true" />
      <div class="min-w-0">
        <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Low stock</p>
        <p class="text-base font-extrabold {inventoryLowCount > 0 ? 'text-amber-700 dark:text-amber-300' : 'text-zinc-900 dark:text-slate-100'}">{inventoryLowCount}<span class="ml-1 text-[10px] font-semibold text-zinc-500 dark:text-slate-400">SKUs</span></p>
      </div>
    </button>
    <button
      type="button"
      class="flex items-center gap-3 px-3 py-2 text-left transition hover:bg-zinc-50 dark:hover:bg-slate-800/60"
      onclick={onGoProjects}
    >
      <FolderKanban class="h-4 w-4 shrink-0 text-leah-800 dark:text-leah-700" aria-hidden="true" />
      <div class="min-w-0">
        <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Projects</p>
        <p class="text-base font-extrabold text-zinc-900 dark:text-slate-100">{activeProjectsCount}<span class="ml-1 text-[10px] font-semibold text-zinc-500 dark:text-slate-400">active</span></p>
      </div>
    </button>
    {#if showHR}
      <button
        type="button"
        class="flex items-center gap-3 px-3 py-2 text-left transition hover:bg-zinc-50 dark:hover:bg-slate-800/60"
        onclick={onGoHR}
      >
        <Briefcase class="h-4 w-4 shrink-0 text-leah-800 dark:text-leah-700" aria-hidden="true" />
        <div class="min-w-0">
          <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">People</p>
          <p class="text-base font-extrabold text-zinc-900 dark:text-slate-100">{employeesCount}<span class="ml-1 text-[10px] font-semibold text-zinc-500 dark:text-slate-400">profiles</span></p>
        </div>
      </button>
    {/if}
    <button
      type="button"
      class="flex items-center gap-3 px-3 py-2 text-left transition hover:bg-zinc-50 dark:hover:bg-slate-800/60"
      onclick={onGoCalendar}
    >
      <CalendarDays class="h-4 w-4 shrink-0 text-leah-800 dark:text-leah-700" aria-hidden="true" />
      <div class="min-w-0">
        <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Next 14d</p>
        <p class="text-base font-extrabold text-zinc-900 dark:text-slate-100">{upcomingFortnight}<span class="ml-1 text-[10px] font-semibold text-zinc-500 dark:text-slate-400">events</span></p>
      </div>
    </button>
  </div>
</section>

<section class="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)]">
  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h2 class="text-lg font-bold text-zinc-900 dark:text-slate-100">Cash movement</h2>
        <p class="text-sm text-zinc-500 dark:text-slate-400">{periodLabel} · navy line = net pulse (in − out)</p>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5 dark:border-slate-700 dark:bg-slate-800" role="group" aria-label="Cash period">
          {#each ['Monthly', 'Weekly', 'Quarterly'] as opt}
            <button
              type="button"
              aria-pressed={period === opt}
              class="rounded-md px-2.5 py-1.5 text-xs font-semibold sm:px-3 sm:text-sm {period === opt
                ? 'bg-white text-leah-900 shadow-sm dark:bg-slate-900 dark:text-slate-100'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-slate-300 dark:hover:text-slate-100'}"
              onclick={() => (period = opt)}
            >
              {opt}
            </button>
          {/each}
        </div>
        <div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5 dark:border-slate-700 dark:bg-slate-800" role="group" aria-label="Chart layout">
          <button
            type="button"
            aria-pressed={chartLayout === 'stacked'}
            class="rounded-md px-2.5 py-1.5 text-xs font-semibold sm:px-3 sm:text-sm {chartLayout === 'stacked'
              ? 'bg-white text-leah-900 shadow-sm dark:bg-slate-900 dark:text-slate-100'
              : 'text-zinc-600 hover:text-zinc-900 dark:text-slate-300 dark:hover:text-slate-100'}"
            onclick={() => (chartLayout = 'stacked')}
          >
            Stacked
          </button>
          <button
            type="button"
            aria-pressed={chartLayout === 'grouped'}
            class="rounded-md px-2.5 py-1.5 text-xs font-semibold sm:px-3 sm:text-sm {chartLayout === 'grouped'
              ? 'bg-white text-leah-900 shadow-sm dark:bg-slate-900 dark:text-slate-100'
              : 'text-zinc-600 hover:text-zinc-900 dark:text-slate-300 dark:hover:text-slate-100'}"
            onclick={() => (chartLayout = 'grouped')}
          >
            Grouped
          </button>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <CashFlowChart bars={cashBars} layout={chartLayout} {periodLabel} />
    </div>
    <div class="mt-4 flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-slate-300">
      <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-sky-500"></i> Inflows</span>
      <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-rose-500"></i> Outflows</span>
      <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-amber-400"></i> In transit</span>
      <span class="inline-flex items-center gap-2"><i class="h-2 w-2 rounded-full bg-[#132447]"></i> Net pulse</span>
    </div>
  </article>

  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div class="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h2 class="text-lg font-bold text-zinc-900 dark:text-slate-100">Latest invoices</h2>
        <p class="text-sm text-zinc-500 dark:text-slate-400">{paidCount} paid · {invoiceRows.length} in pipeline</p>
      </div>
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
        onclick={onViewInvoices}
      >
        <FileText class="h-4 w-4" aria-hidden="true" />
        View all
      </button>
    </div>
    <div class="mt-4 grid gap-2">
      {#each invoiceRows.slice(0, 5) as invoice}
        {@const tag = dueTag(invoice.status, invoice.due, now)}
        <button
          type="button"
          class="grid w-full grid-cols-1 items-center gap-2 rounded-lg border border-zinc-100 bg-zinc-50/80 p-3 text-left transition hover:border-leah-200 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/30 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:bg-slate-800 sm:grid-cols-[108px_1fr_auto]"
          onclick={() => (onOpenInvoice ? onOpenInvoice(invoice.id) : onViewInvoices?.())}
          aria-label={`Open invoice ${invoice.id} for ${invoice.customer}`}
        >
          <span class="font-mono text-xs font-semibold text-zinc-500 dark:text-slate-400">{invoice.id}</span>
          <strong class="truncate text-sm text-zinc-900 dark:text-slate-100">{invoice.customer}</strong>
          <span class="flex w-fit flex-wrap items-center gap-1.5">
            <span
              class="inline-flex w-fit items-center rounded-md px-2.5 py-1 text-xs font-bold ring-1 {statusBadgeClass(
                invoice.status
              )}"
            >
              {invoice.status}
            </span>
            {#if tag}
              <span
                class="inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold {dueTagClass(
                  tag.kind
                )}"
              >
                {tag.label}
              </span>
            {/if}
          </span>
        </button>
      {/each}
      {#if invoiceRows.length === 0}
        <p class="rounded-lg border border-dashed border-zinc-200 bg-zinc-50/40 px-4 py-6 text-center text-xs text-zinc-500 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-400">
          No invoices yet — create one to populate this view.
        </p>
      {/if}
    </div>
  </article>
</section>

<section class="mt-6 grid gap-6 lg:grid-cols-3" aria-label="Operational signals">
  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div class="flex flex-wrap items-start justify-between gap-2">
      <div>
        <h2 class="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-slate-100">
          <Package class="h-4 w-4 text-leah-700" aria-hidden="true" />
          Stock to restock
        </h2>
        <p class="text-sm text-zinc-500 dark:text-slate-400">
          {inventoryLowCount} SKU{inventoryLowCount === 1 ? '' : 's'} at or below reorder
        </p>
      </div>
      <button
        type="button"
        class="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
        onclick={onGoInventory}
      >
        Open
      </button>
    </div>
    <ul class="mt-3 grid gap-2">
      {#each lowStockTop as row}
        {@const out = row.qty <= 0}
        <li>
          <button
            type="button"
            class="flex w-full items-center justify-between gap-2 rounded-lg border border-zinc-100 bg-zinc-50/80 px-3 py-2 text-left transition hover:border-leah-200 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/30 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:bg-slate-800"
            onclick={onGoInventory}
          >
            <span class="flex min-w-0 items-center gap-2">
              <AlertTriangle class="h-4 w-4 shrink-0 {out ? 'text-rose-600' : 'text-amber-600'}" aria-hidden="true" />
              <span class="min-w-0">
                <span class="block truncate text-sm font-semibold text-zinc-900 dark:text-slate-100">{row.name}</span>
                <span class="block text-[11px] font-mono text-zinc-500 dark:text-slate-400">{row.code}</span>
              </span>
            </span>
            <span class="shrink-0 text-right">
              <span class="block text-base font-extrabold tabular-nums {out ? 'text-rose-700' : 'text-amber-700'}">
                {row.qty}
              </span>
              <span class="block text-[10px] uppercase tracking-wide text-zinc-400">/ {row.reorder}</span>
            </span>
          </button>
        </li>
      {:else}
        <li class="rounded-lg border border-dashed border-zinc-200 bg-zinc-50/40 px-3 py-4 text-center text-xs text-zinc-500 dark:border-slate-700 dark:bg-slate-800/40">
          Stock looks healthy across all SKUs.
        </li>
      {/each}
    </ul>
  </article>

  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div class="flex flex-wrap items-start justify-between gap-2">
      <div>
        <h2 class="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-slate-100">
          <Users class="h-4 w-4 text-leah-700" aria-hidden="true" />
          Customers · attention
        </h2>
        <p class="text-sm text-zinc-500 dark:text-slate-400">
          {atRiskCustomers} flagged at risk · {customers.length} total
        </p>
      </div>
      <button
        type="button"
        class="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
        onclick={onGoCustomers}
      >
        All
      </button>
    </div>
    <ul class="mt-3 grid gap-2">
      {#each atRiskList as c}
        <li>
          <button
            type="button"
            class="flex w-full items-center justify-between gap-2 rounded-lg border border-zinc-100 bg-zinc-50/80 px-3 py-2 text-left transition hover:border-leah-200 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/30 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:bg-slate-800"
            onclick={() => onOpenCustomer(c.id)}
          >
            <span class="min-w-0">
              <span class="block truncate text-sm font-semibold text-zinc-900 dark:text-slate-100">{c.name}</span>
              <span class="block truncate text-[11px] text-zinc-500 dark:text-slate-400">
                {c.segment ?? '—'} · {c.country ?? ''}
              </span>
            </span>
            <span class="shrink-0 inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide {healthBadgeClass(c.health)}">
              {c.health}
            </span>
          </button>
        </li>
      {:else}
        <li class="rounded-lg border border-dashed border-zinc-200 bg-zinc-50/40 px-3 py-4 text-center text-xs text-zinc-500 dark:border-slate-700 dark:bg-slate-800/40">
          No accounts are at risk right now.
        </li>
      {/each}
    </ul>
  </article>

  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div class="flex flex-wrap items-start justify-between gap-2">
      <div>
        <h2 class="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-slate-100">
          <Receipt class="h-4 w-4 text-leah-700" aria-hidden="true" />
          Recent expenses
        </h2>
        <p class="text-sm text-zinc-500 dark:text-slate-400">
          {expensesCount} posting{expensesCount === 1 ? '' : 's'} · {currency(expenseTotal)} this period
        </p>
      </div>
      <button
        type="button"
        class="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
        onclick={onGoExpenses}
      >
        All
      </button>
    </div>
    <ul class="mt-3 grid gap-2">
      {#each recentExpenses as e}
        <li>
          <button
            type="button"
            class="flex w-full items-center justify-between gap-2 rounded-lg border border-zinc-100 bg-zinc-50/80 px-3 py-2 text-left transition hover:border-leah-200 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/30 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:bg-slate-800"
            onclick={() => onOpenExpense(e.id)}
          >
            <span class="min-w-0">
              <span class="block truncate text-sm font-semibold text-zinc-900 dark:text-slate-100">{e.vendor}</span>
              <span class="block text-[11px] text-zinc-500 dark:text-slate-400">{e.type} · {e.date}</span>
            </span>
            <span class="shrink-0 text-right tabular-nums">
              <span class="block text-sm font-bold text-zinc-900 dark:text-slate-100">{currency(e.amount)}</span>
            </span>
          </button>
        </li>
      {:else}
        <li class="rounded-lg border border-dashed border-zinc-200 bg-zinc-50/40 px-3 py-4 text-center text-xs text-zinc-500 dark:border-slate-700 dark:bg-slate-800/40">
          No expenses logged yet.
        </li>
      {/each}
    </ul>
  </article>
</section>
