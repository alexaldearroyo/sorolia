<script>
  import Plus from 'lucide-svelte/icons/plus';
  import { statusBadgeClass } from '../format.js';

  let {
    filter = $bindable(),
    invoiceView = $bindable(),
    visibleInvoices,
    kanbanColumns,
    currency
  } = $props();
</script>

<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
  <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h2 class="text-xl font-bold text-zinc-900">Invoices</h2>
      <p class="mt-1 text-sm text-zinc-500">Customer invoices · EUR · net 14</p>
    </div>
    <div class="flex flex-wrap gap-2">
      <div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5">
        <button
          type="button"
          class="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold {invoiceView === 'list'
            ? 'bg-white text-leah-900 shadow-sm'
            : 'text-zinc-600 hover:text-zinc-900'}"
          onclick={() => (invoiceView = 'list')}
        >
          List
        </button>
        <button
          type="button"
          class="rounded-md px-3 py-2 text-sm font-semibold {invoiceView === 'kanban'
            ? 'bg-white text-leah-900 shadow-sm'
            : 'text-zinc-600 hover:text-zinc-900'}"
          onclick={() => (invoiceView = 'kanban')}
        >
          Kanban
        </button>
      </div>
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"
      >
        <Plus class="h-4 w-4" aria-hidden="true" />
        New invoice
      </button>
    </div>
  </div>

  <div class="mt-5 flex flex-wrap gap-2" aria-label="Invoice filters">
    {#each ['All', 'Offer', 'Open', 'Paid', 'Overdue'] as option}
      <button
        type="button"
        class="rounded-full border px-3.5 py-1.5 text-sm font-semibold transition {filter === option
          ? 'border-leah-900 bg-leah-900 text-white'
          : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300'}"
        onclick={() => (filter = option)}
      >
        {option}
      </button>
    {/each}
  </div>

  {#if invoiceView === 'list'}
    <div class="mt-6 overflow-x-auto rounded-lg border border-zinc-200">
      <table class="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500">
            <th class="px-4 py-3" scope="col">Invoice</th>
            <th class="px-4 py-3" scope="col">Created</th>
            <th class="px-4 py-3" scope="col">Due</th>
            <th class="px-4 py-3" scope="col">Customer</th>
            <th class="px-4 py-3" scope="col">Status</th>
            <th class="px-4 py-3 text-right" scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {#each visibleInvoices as invoice}
            <tr class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80">
              <td class="px-4 py-3 font-mono font-semibold text-zinc-800">{invoice.id}</td>
              <td class="px-4 py-3 text-zinc-600">{invoice.created}</td>
              <td class="px-4 py-3 text-zinc-600">{invoice.due}</td>
              <td class="px-4 py-3 font-medium text-zinc-900">{invoice.customer}</td>
              <td class="px-4 py-3">
                <span
                  class="inline-flex rounded-md px-2.5 py-1 text-xs font-bold ring-1 {statusBadgeClass(invoice.status)}"
                >
                  {invoice.status}
                </span>
              </td>
              <td class="px-4 py-3 text-right font-semibold tabular-nums text-zinc-900">
                {currency(invoice.amount)}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {#each kanbanColumns as col}
        <div class="rounded-xl border border-zinc-200 bg-zinc-50/50 p-3">
          <h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500">{col}</h3>
          <div class="flex flex-col gap-2">
            {#each visibleInvoices.filter((inv) => inv.status === col) as invoice}
              <div class="rounded-lg border border-zinc-200 bg-white p-3 shadow-sm">
                <p class="font-mono text-xs font-semibold text-zinc-500">{invoice.id}</p>
                <p class="mt-1 text-sm font-semibold text-zinc-900">{invoice.customer}</p>
                <p class="mt-2 text-sm font-bold tabular-nums text-leah-800">{currency(invoice.amount)}</p>
                <p class="mt-1 text-xs text-zinc-500">Due {invoice.due}</p>
              </div>
            {:else}
              <p class="py-6 text-center text-xs text-zinc-400">No cards</p>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>
