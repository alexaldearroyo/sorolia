<script>
  import FileText from 'lucide-svelte/icons/file-text';
  import Users from 'lucide-svelte/icons/users';
  import Package from 'lucide-svelte/icons/package';
  import FolderKanban from 'lucide-svelte/icons/folder-kanban';
  import Briefcase from 'lucide-svelte/icons/briefcase';
  import { statusBadgeClass } from '../format.js';

  let {
    period = $bindable(),
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
    onGoCustomers,
    onGoInventory,
    onGoProjects,
    onGoHR
  } = $props();
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
  class="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
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
</section>

<section class="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)]">
  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h2 class="text-lg font-bold text-zinc-900">Cash movement</h2>
        <p class="text-sm text-zinc-500">
          {period === 'Monthly' ? 'Last 6 closed months · normalized stack' : 'April · weekly buckets'}
        </p>
      </div>
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-100"
        onclick={() => (period = period === 'Monthly' ? 'Weekly' : 'Monthly')}
      >
        {period === 'Monthly' ? 'Monthly' : 'Weekly'}
      </button>
    </div>
    <div class="mt-6 flex h-56 items-stretch gap-2 border-b border-zinc-200 pb-2 sm:gap-3" aria-label="Cash chart">
      {#each cashBars as item}
        <div class="flex min-w-0 flex-1 flex-col justify-end">
          <div class="grid h-full grid-cols-3 items-end gap-1">
            <span
              class="min-h-[6px] rounded-t-md bg-sky-500"
              style={`height:${item.income}%`}
              title="Inflows"
            ></span>
            <span
              class="min-h-[6px] rounded-t-md bg-rose-500"
              style={`height:${item.expenses}%`}
              title="Outflows"
            ></span>
            <span
              class="min-h-[6px] rounded-t-md bg-amber-400"
              style={`height:${item.pending}%`}
              title="In transit"
            ></span>
          </div>
          <small class="mt-2 block text-center text-[10px] font-medium leading-tight text-zinc-500 sm:text-xs">
            {item.label}
          </small>
        </div>
      {/each}
    </div>
    <div class="mt-4 flex flex-wrap gap-4 text-sm text-zinc-600">
      <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-sky-500"></i> Inflows</span>
      <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-rose-500"></i> Outflows</span>
      <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-amber-400"></i> In transit</span>
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
