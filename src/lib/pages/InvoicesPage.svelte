<script>
  import X from 'lucide-svelte/icons/x';
  import Pencil from 'lucide-svelte/icons/pencil';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import FileText from 'lucide-svelte/icons/file-text';
  import { statusBadgeClass, dueTag, dueTagClass } from '../format.js';
  import InvoiceFormModal from '../components/InvoiceFormModal.svelte';

  let {
    filter = $bindable(),
    invoiceView = $bindable(),
    visibleInvoices,
    kanbanColumns,
    currency,
    invoiceCustomerFilter,
    invoiceCustomerLabel,
    onClearInvoiceCustomerFilter,
    customers,
    invoiceEditor,
    invoiceDraftRow,
    onCloseInvoiceEditor,
    onSaveInvoiceCreate,
    onSaveInvoiceUpdate,
    onDeleteInvoice,
    onEditInvoice
  } = $props();

  const now = new Date();
</script>

<InvoiceFormModal
  editor={invoiceEditor}
  draftRow={invoiceDraftRow}
  {customers}
  onClose={onCloseInvoiceEditor}
  onCreate={onSaveInvoiceCreate}
  onUpdate={onSaveInvoiceUpdate}
  onDelete={onDeleteInvoice}
/>

<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
  <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5" role="group" aria-label="Invoice view">
      <button
        type="button"
        aria-pressed={invoiceView === 'list'}
        class="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold {invoiceView === 'list'
          ? 'bg-white text-leah-900 shadow-sm'
          : 'text-zinc-600 hover:text-zinc-900'}"
        onclick={() => (invoiceView = 'list')}
      >
        List
      </button>
      <button
        type="button"
        aria-pressed={invoiceView === 'kanban'}
        class="rounded-md px-3 py-2 text-sm font-semibold {invoiceView === 'kanban'
          ? 'bg-white text-leah-900 shadow-sm'
          : 'text-zinc-600 hover:text-zinc-900'}"
        onclick={() => (invoiceView = 'kanban')}
      >
        Kanban
      </button>
    </div>

    <div class="flex flex-wrap gap-2" role="group" aria-label="Invoice status filter">
      {#each ['All', 'Offer', 'Open', 'Paid', 'Overdue'] as option}
        <button
          type="button"
          aria-pressed={filter === option}
          class="rounded-full border px-3.5 py-1.5 text-sm font-semibold transition {filter === option
            ? 'border-leah-900 bg-leah-900 text-white'
            : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300'}"
          onclick={() => (filter = option)}
        >
          {option}
        </button>
      {/each}
    </div>
  </div>

  {#if invoiceCustomerFilter}
    <div class="mt-4 flex flex-wrap items-center gap-2">
      <span class="text-xs font-medium text-zinc-500">Scoped to customer</span>
      <span
        class="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-900"
      >
        {invoiceCustomerLabel}
        <button
          type="button"
          class="rounded-full p-0.5 hover:bg-sky-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          onclick={onClearInvoiceCustomerFilter}
          aria-label="Clear customer scope"
        >
          <X class="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </span>
    </div>
  {/if}

  {#if visibleInvoices.length === 0}
    <div class="mt-6 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-zinc-200 bg-zinc-50/40 px-4 py-12 text-center">
      <FileText class="h-6 w-6 text-zinc-400" aria-hidden="true" />
      <p class="text-sm font-semibold text-zinc-700">No invoices match this view</p>
      <p class="max-w-sm text-xs text-zinc-500">
        Try clearing the filter or scope, or create one with “New invoice” at the top of the page.
      </p>
      {#if filter !== 'All' || invoiceCustomerFilter}
        <button
          type="button"
          class="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-50"
          onclick={() => {
            filter = 'All';
            onClearInvoiceCustomerFilter?.();
          }}
        >
          <X class="h-3.5 w-3.5" aria-hidden="true" />
          Clear filters
        </button>
      {/if}
    </div>
  {:else if invoiceView === 'list'}
    <div class="mt-6 overflow-x-auto rounded-lg border border-zinc-200">
      <table class="w-full min-w-[800px] text-left text-sm">
        <caption class="sr-only">Invoices · use the filter chips above to narrow the list</caption>
        <thead>
          <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500">
            <th class="px-4 py-3" scope="col">Invoice</th>
            <th class="px-4 py-3" scope="col">Created</th>
            <th class="px-4 py-3" scope="col">Due</th>
            <th class="px-4 py-3" scope="col">Customer</th>
            <th class="px-4 py-3" scope="col">Status</th>
            <th class="px-4 py-3 text-right" scope="col">Amount</th>
            <th class="px-4 py-3 text-right" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each visibleInvoices as invoice}
            {@const tag = dueTag(invoice.status, invoice.due, now)}
            <tr class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80">
              <td class="px-4 py-3 font-mono font-semibold text-zinc-800">{invoice.id}</td>
              <td class="px-4 py-3 text-zinc-600">{invoice.created}</td>
              <td class="px-4 py-3">
                <div class="flex flex-col gap-1">
                  <span class="text-zinc-600">{invoice.due}</span>
                  {#if tag}
                    <span
                      class="inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold {dueTagClass(
                        tag.kind
                      )}"
                    >
                      {tag.label}
                    </span>
                  {/if}
                </div>
              </td>
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
              <td class="px-4 py-3 text-right">
                <div class="inline-flex justify-end gap-1">
                  <button
                    type="button"
                    class="rounded-md border border-zinc-200 bg-white p-2 text-zinc-700 hover:bg-zinc-50"
                    onclick={() => onEditInvoice(invoice.id)}
                    aria-label="Edit invoice {invoice.id}"
                    title="Edit invoice {invoice.id}"
                  >
                    <Pencil class="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    class="rounded-md border border-rose-200 bg-white p-2 text-rose-800 hover:bg-rose-50"
                    onclick={() => onDeleteInvoice(invoice.id)}
                    aria-label="Delete invoice {invoice.id}"
                    title="Delete invoice {invoice.id}"
                  >
                    <Trash2 class="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <div
      class="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-4"
    >
      {#each kanbanColumns as col}
        {@const cards = visibleInvoices.filter((inv) => inv.status === col)}
        <div
          class="w-[min(100%,280px)] shrink-0 snap-start rounded-xl border border-zinc-200 bg-zinc-50/50 p-3 md:w-auto md:min-w-0 md:shrink"
        >
          <h3 class="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-500">
            <span>{col}</span>
            <span class="rounded-full bg-white px-2 py-0.5 text-[10px] text-zinc-600 ring-1 ring-zinc-200">
              {cards.length}
            </span>
          </h3>
          <div class="flex flex-col gap-2">
            {#each cards as invoice}
              {@const tag = dueTag(invoice.status, invoice.due, now)}
              <div class="rounded-lg border border-zinc-200 bg-white p-3 shadow-sm">
                <p class="font-mono text-xs font-semibold text-zinc-500">{invoice.id}</p>
                <p class="mt-1 text-sm font-semibold text-zinc-900">{invoice.customer}</p>
                <p class="mt-2 text-sm font-bold tabular-nums text-leah-800">{currency(invoice.amount)}</p>
                <p class="mt-1 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                  <span>Due {invoice.due}</span>
                  {#if tag}
                    <span
                      class="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold {dueTagClass(
                        tag.kind
                      )}"
                    >
                      {tag.label}
                    </span>
                  {/if}
                </p>
                <div class="mt-3 flex gap-1">
                  <button
                    type="button"
                    class="flex-1 rounded-md border border-zinc-200 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-50"
                    onclick={() => onEditInvoice(invoice.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="flex-1 rounded-md border border-rose-200 py-1.5 text-xs font-semibold text-rose-800 hover:bg-rose-50"
                    onclick={() => onDeleteInvoice(invoice.id)}
                  >
                    Delete
                  </button>
                </div>
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
