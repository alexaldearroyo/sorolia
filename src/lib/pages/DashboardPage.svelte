<script>
  import FileText from 'lucide-svelte/icons/file-text';
  import Users from 'lucide-svelte/icons/users';
  import Package from 'lucide-svelte/icons/package';
  import FolderKanban from 'lucide-svelte/icons/folder-kanban';
  import Briefcase from 'lucide-svelte/icons/briefcase';
  import CalendarDays from 'lucide-svelte/icons/calendar-days';
  import { statusBadgeClass } from '../format.js';
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
    currency,
    onViewInvoices,
    inventoryLowCount,
    atRiskCustomers,
    activeProjectsCount,
    upcomingFortnight,
    onGoCustomers,
    onGoInventory,
    onGoProjects,
    onGoHR,
    onGoCalendar
  } = $props();

  const periodLabel = $derived(
    period === 'Monthly'
      ? 'Last 6 closed months'
      : period === 'Weekly'
        ? 'April · weekly buckets'
        : 'Quarterly · 4 buckets'
  );
</script>

<section class="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Current status">
  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <span class="text-sm font-medium text-zinc-500">Paid income (YTD)</span>
    <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900">{currency(totals.revenue)}</strong>
    <small class="mt-1 block text-xs font-medium text-sky-700">+8,4% vs prior year</small>
  </article>
  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <span class="text-sm font-medium text-zinc-500">Outstanding AR</span>
    <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900">{currency(totals.pending)}</strong>
    <small class="mt-1 block text-xs text-zinc-500">{openCount} open · {overdueCount} overdue</small>
  </article>
  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <span class="text-sm font-medium text-zinc-500">Overdue exposure</span>
    <strong class="mt-2 block text-2xl font-bold tracking-tight text-rose-700">{currency(totals.overdue)}</strong>
    <small class="mt-1 block text-xs text-zinc-500">Dunning · Klärmann + others</small>
  </article>
  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <span class="text-sm font-medium text-zinc-500">OpEx (Apr.)</span>
    <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900">{currency(expenseTotal)}</strong>
    <small class="mt-1 block text-xs text-zinc-500">Posted · DATEV export ready</small>
  </article>
</section>

<section
  class="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
  aria-label="Cross-module signals"
>
  <button
    type="button"
    class="flex flex-col gap-1 rounded-xl border border-zinc-200 bg-white p-4 text-left shadow-sm transition hover:border-leah-300 hover:bg-zinc-50"
    onclick={onGoCustomers}
  >
    <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-zinc-500">
      <Users class="h-4 w-4 text-leah-800" aria-hidden="true" />
      Customers
    </span>
    <span class="text-2xl font-extrabold text-zinc-900">{atRiskCustomers}</span>
    <span class="text-xs text-zinc-500">accounts flagged at risk</span>
  </button>
  <button
    type="button"
    class="flex flex-col gap-1 rounded-xl border border-zinc-200 bg-white p-4 text-left shadow-sm transition hover:border-leah-300 hover:bg-zinc-50"
    onclick={onGoInventory}
  >
    <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-zinc-500">
      <Package class="h-4 w-4 text-leah-800" aria-hidden="true" />
      Inventory
    </span>
    <span class="text-2xl font-extrabold text-amber-700">{inventoryLowCount}</span>
    <span class="text-xs text-zinc-500">SKUs at or below reorder</span>
  </button>
  <button
    type="button"
    class="flex flex-col gap-1 rounded-xl border border-zinc-200 bg-white p-4 text-left shadow-sm transition hover:border-leah-300 hover:bg-zinc-50"
    onclick={onGoProjects}
  >
    <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-zinc-500">
      <FolderKanban class="h-4 w-4 text-leah-800" aria-hidden="true" />
      Projects
    </span>
    <span class="text-2xl font-extrabold text-zinc-900">{activeProjectsCount}</span>
    <span class="text-xs text-zinc-500">active or planning</span>
  </button>
  <button
    type="button"
    class="flex flex-col gap-1 rounded-xl border border-zinc-200 bg-white p-4 text-left shadow-sm transition hover:border-leah-300 hover:bg-zinc-50"
    onclick={onGoHR}
  >
    <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-zinc-500">
      <Briefcase class="h-4 w-4 text-leah-800" aria-hidden="true" />
      People
    </span>
    <span class="text-xs text-zinc-500">Delivery roster linked to PM</span>
  </button>
  <button
    type="button"
    class="flex flex-col gap-1 rounded-xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-4 text-left shadow-sm transition hover:border-sky-300"
    onclick={onGoCalendar}
  >
    <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-zinc-500">
      <CalendarDays class="h-4 w-4 text-leah-800" aria-hidden="true" />
      Calendar
    </span>
    <span class="text-2xl font-extrabold text-leah-900">{upcomingFortnight}</span>
    <span class="text-xs text-zinc-500">items in the next 14 days</span>
  </button>
</section>

<section class="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)]">
  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h2 class="text-lg font-bold text-zinc-900">Cash movement</h2>
        <p class="text-sm text-zinc-500">{periodLabel} · navy line = net pulse (in − out)</p>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5">
          {#each ['Monthly', 'Weekly', 'Quarterly'] as opt}
            <button
              type="button"
              class="rounded-md px-2.5 py-1.5 text-xs font-semibold sm:px-3 sm:text-sm {period === opt
                ? 'bg-white text-leah-900 shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900'}"
              onclick={() => (period = opt)}
            >
              {opt}
            </button>
          {/each}
        </div>
        <div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5">
          <button
            type="button"
            class="rounded-md px-2.5 py-1.5 text-xs font-semibold sm:px-3 sm:text-sm {chartLayout === 'stacked'
              ? 'bg-white text-leah-900 shadow-sm'
              : 'text-zinc-600 hover:text-zinc-900'}"
            onclick={() => (chartLayout = 'stacked')}
          >
            Stacked
          </button>
          <button
            type="button"
            class="rounded-md px-2.5 py-1.5 text-xs font-semibold sm:px-3 sm:text-sm {chartLayout === 'grouped'
              ? 'bg-white text-leah-900 shadow-sm'
              : 'text-zinc-600 hover:text-zinc-900'}"
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
    <div class="mt-4 flex flex-wrap gap-4 text-sm text-zinc-600">
      <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-sky-500"></i> Inflows</span>
      <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-rose-500"></i> Outflows</span>
      <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-amber-400"></i> In transit</span>
      <span class="inline-flex items-center gap-2"><i class="h-2 w-2 rounded-full bg-[#132447]"></i> Net pulse</span>
    </div>
  </article>

  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <div class="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h2 class="text-lg font-bold text-zinc-900">Latest invoices</h2>
        <p class="text-sm text-zinc-500">{paidCount} paid · {invoiceRows.length} in pipeline</p>
      </div>
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-100"
        onclick={onViewInvoices}
      >
        <FileText class="h-4 w-4" aria-hidden="true" />
        View all
      </button>
    </div>
    <div class="mt-4 grid gap-2">
      {#each invoiceRows.slice(0, 5) as invoice}
        <button
          type="button"
          class="grid w-full grid-cols-1 items-center gap-2 rounded-lg border border-zinc-100 bg-zinc-50/80 p-3 text-left transition hover:border-zinc-200 hover:bg-zinc-50 sm:grid-cols-[108px_1fr_auto]"
          onclick={onViewInvoices}
        >
          <span class="font-mono text-xs font-semibold text-zinc-500">{invoice.id}</span>
          <strong class="text-sm text-zinc-900">{invoice.customer}</strong>
          <span
            class="inline-flex w-fit items-center rounded-md px-2.5 py-1 text-xs font-bold ring-1 {statusBadgeClass(
              invoice.status
            )}"
          >
            {invoice.status}
          </span>
        </button>
      {/each}
    </div>
  </article>
</section>
