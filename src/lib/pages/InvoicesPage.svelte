<script>
  import X from 'lucide-svelte/icons/x';
  import Pencil from 'lucide-svelte/icons/pencil';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import Ban from 'lucide-svelte/icons/ban';
  import Eye from 'lucide-svelte/icons/eye';
  import Download from 'lucide-svelte/icons/download';
  import Repeat from 'lucide-svelte/icons/repeat';
  import { statusBadgeClass, dueTag, dueTagClass, invoiceAmount } from '../format.js';
  import { isIssuedInvoice } from '../workspaceActions.js';
  import InvoiceFormModal from '../components/InvoiceFormModal.svelte';
  import EmptyState from '../components/EmptyState.svelte';

  let {
    filter = $bindable(),
    invoiceView = $bindable(),
    dateRange = $bindable(),
    selection = $bindable(),
    visibleInvoices,
    kanbanColumns,
    currency,
    invoiceCustomerFilter,
    invoiceCustomerLabel,
    onClearInvoiceCustomerFilter,
    customers,
    inventory = [],
    invoiceEditor,
    invoiceDraftRow,
    companySettings = null,
    locale = 'en-GB',
    templates = [],
    canWrite = false,
    canDelete = false,
    canExport = false,
    onCloseInvoiceEditor,
    onSaveInvoiceCreate,
    onSaveInvoiceUpdate,
    onDeleteInvoice,
    onEditInvoice,
    onPreviewInvoice,
    onOpenInvoicePreview,
    onExportCsv,
    onBulkAction,
    onGenerateTemplate,
    onCreateInvoice
  } = $props();

  const now = new Date();

  const FILTER_OPTIONS = ['All', 'Offer', 'Open', 'Partially paid', 'Paid', 'Overdue', 'Cancelled', 'Credit note'];

  /**
   * Returns a small descriptor for the destructive action shown on a row.
   * Drafts → "Delete draft"; issued → "Cancel via credit note"; locked rows
   * (cancelled originals, credit notes themselves) get no destructive action.
   */
  function destructiveMeta(invoice) {
    if (invoice.isCreditNote) {
      return { kind: 'locked', label: 'Credit note · locked', icon: null };
    }
    if (invoice.status === 'Cancelled') {
      return { kind: 'locked', label: 'Cancelled', icon: null };
    }
    if (!isIssuedInvoice(invoice)) {
      return {
        kind: 'delete',
        label: 'Delete',
        title: 'Delete offer (no document trail yet)',
        icon: Trash2,
        toneClass: 'border-rose-200 bg-rose-50 text-rose-800 hover:bg-rose-100 dark:border-rose-700 dark:bg-rose-900/30 dark:text-rose-100'
      };
    }
    return {
      kind: 'cancel',
      label: 'Cancel',
      title: 'Cancel & issue credit note (Storno)',
      icon: Ban,
      toneClass: 'border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-100'
    };
  }

  /* Issued invoices are immutable for tax / audit reasons. Offers (still in
     proposal state) are the only documents that can be edited freely. */
  function isEditable(invoice) {
    return invoice.status === 'Offer';
  }

  function toggleSelection(id) {
    if (selection.includes(id)) selection = selection.filter((s) => s !== id);
    else selection = [...selection, id];
  }

  function toggleAll() {
    if (selection.length === visibleInvoices.length) selection = [];
    else selection = visibleInvoices.map((i) => i.id);
  }

  function clearSelection() {
    selection = [];
  }

  function setRange(from, to) {
    dateRange = { from, to };
  }

  function presetRange(kind) {
    const today = new Date();
    const iso = (d) => d.toISOString().slice(0, 10);
    if (kind === 'this-month') {
      setRange(iso(new Date(today.getFullYear(), today.getMonth(), 1)), iso(today));
    } else if (kind === 'last-30') {
      const from = new Date();
      from.setDate(from.getDate() - 30);
      setRange(iso(from), iso(today));
    } else if (kind === 'ytd') {
      setRange(iso(new Date(today.getFullYear(), 0, 1)), iso(today));
    } else {
      setRange('', '');
    }
  }

  let filtersOpen = $state(false);

  let activeFilterCount = $derived(
    (filter !== 'All' ? 1 : 0) + (dateRange.from || dateRange.to ? 1 : 0) + (invoiceCustomerFilter ? 1 : 0)
  );

  function clearAllFilters() {
    filter = 'All';
    setRange('', '');
    onClearInvoiceCustomerFilter?.();
  }
</script>

<InvoiceFormModal
  editor={invoiceEditor}
  draftRow={invoiceDraftRow}
  {customers}
  {inventory}
  settings={companySettings}
  {locale}
  {canDelete}
  onClose={onCloseInvoiceEditor}
  onCreate={onSaveInvoiceCreate}
  onUpdate={onSaveInvoiceUpdate}
  onDelete={onDeleteInvoice}
  onPreview={onPreviewInvoice}
/>

<section class="rounded-xl border border-zinc-200/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
  <div class="flex flex-wrap items-center gap-2">
    <div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5 dark:border-slate-700 dark:bg-slate-800" role="group" aria-label="Invoice view">
      <button
        type="button"
        aria-pressed={invoiceView === 'list'}
        class="rounded-md px-3 py-1.5 text-xs font-semibold {invoiceView === 'list'
          ? 'bg-white text-leah-900 shadow-sm dark:bg-slate-900 dark:text-slate-100'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-slate-300 dark:hover:text-slate-100'}"
        onclick={() => (invoiceView = 'list')}
      >
        List
      </button>
      <button
        type="button"
        aria-pressed={invoiceView === 'kanban'}
        class="rounded-md px-3 py-1.5 text-xs font-semibold {invoiceView === 'kanban'
          ? 'bg-white text-leah-900 shadow-sm dark:bg-slate-900 dark:text-slate-100'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-slate-300 dark:hover:text-slate-100'}"
        onclick={() => (invoiceView = 'kanban')}
      >
        Kanban
      </button>
    </div>

    <button
      type="button"
      class="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 {filtersOpen ? 'border-leah-900/40 bg-leah-50 text-leah-900 dark:border-leah-700 dark:bg-leah-900/30 dark:text-leah-100' : ''}"
      onclick={() => (filtersOpen = !filtersOpen)}
      aria-expanded={filtersOpen}
    >
      Filters
      {#if activeFilterCount}
        <span class="inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-leah-900 px-1 text-[10px] font-bold text-white dark:bg-leah-700">{activeFilterCount}</span>
      {/if}
    </button>

    <!-- Active filter chips -->
    {#if filter !== 'All'}
      <span class="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
        Status: {filter}
        <button type="button" class="rounded-full p-0.5 hover:bg-zinc-200 dark:hover:bg-slate-700" onclick={() => (filter = 'All')} aria-label="Clear status filter">
          <X class="h-3 w-3" aria-hidden="true" />
        </button>
      </span>
    {/if}
    {#if dateRange.from || dateRange.to}
      <span class="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
        {dateRange.from || '…'} → {dateRange.to || '…'}
        <button type="button" class="rounded-full p-0.5 hover:bg-zinc-200 dark:hover:bg-slate-700" onclick={() => presetRange('reset')} aria-label="Clear date range">
          <X class="h-3 w-3" aria-hidden="true" />
        </button>
      </span>
    {/if}
    {#if invoiceCustomerFilter}
      <span class="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-900 dark:border-sky-700/50 dark:bg-sky-900/40 dark:text-sky-100">
        {invoiceCustomerLabel}
        <button type="button" class="rounded-full p-0.5 hover:bg-sky-100 dark:hover:bg-sky-800" onclick={onClearInvoiceCustomerFilter} aria-label="Clear customer scope">
          <X class="h-3 w-3" aria-hidden="true" />
        </button>
      </span>
    {/if}
    {#if activeFilterCount > 1}
      <button
        type="button"
        class="text-xs font-semibold text-zinc-500 hover:text-zinc-800 hover:underline dark:text-slate-400 dark:hover:text-slate-200"
        onclick={clearAllFilters}
      >
        Clear all
      </button>
    {/if}

    {#if canExport}
      <button
        type="button"
        class="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        onclick={onExportCsv}
      >
        <Download class="h-3.5 w-3.5" aria-hidden="true" />
        CSV
      </button>
    {/if}
  </div>

  {#if filtersOpen}
    <div class="mt-3 grid gap-3 rounded-lg border border-zinc-200 bg-zinc-50/60 p-3 text-xs dark:border-slate-700 dark:bg-slate-800/40">
      <div>
        <p class="mb-1.5 font-semibold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Status</p>
        <div class="flex flex-wrap gap-1.5" role="group" aria-label="Invoice status filter">
          {#each FILTER_OPTIONS as option}
            <button
              type="button"
              aria-pressed={filter === option}
              class="rounded-full border px-2.5 py-1 text-xs font-semibold transition {filter === option
                ? 'border-leah-900 bg-leah-900 text-white'
                : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600'}"
              onclick={() => (filter = option)}
            >
              {option}
            </button>
          {/each}
        </div>
      </div>
      <div>
        <p class="mb-1.5 font-semibold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Date range (created)</p>
        <div class="flex flex-wrap items-center gap-2">
          <input
            type="date"
            lang={locale}
            value={dateRange.from}
            oninput={(e) => setRange(e.currentTarget.value, dateRange.to)}
            class="rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="From date"
          />
          <span aria-hidden="true" class="text-zinc-400">→</span>
          <input
            type="date"
            lang={locale}
            value={dateRange.to}
            oninput={(e) => setRange(dateRange.from, e.currentTarget.value)}
            class="rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="To date"
          />
          <button type="button" class="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800" onclick={() => presetRange('this-month')}>This month</button>
          <button type="button" class="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800" onclick={() => presetRange('last-30')}>Last 30d</button>
          <button type="button" class="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800" onclick={() => presetRange('ytd')}>YTD</button>
          {#if dateRange.from || dateRange.to}
            <button type="button" class="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800" onclick={() => presetRange('reset')}>Clear range</button>
          {/if}
        </div>
      </div>
    </div>
  {/if}

  {#if selection.length}
    <div class="mt-3 flex flex-wrap items-center gap-2 rounded-xl border border-leah-700/30 bg-leah-700/5 px-4 py-2 text-sm dark:border-leah-700/60 dark:bg-leah-900/20">
      <span class="font-semibold text-leah-900 dark:text-slate-100">{selection.length} selected</span>
      {#if canWrite}
        <button type="button" class="rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-100" onclick={() => onBulkAction('mark-paid', selection)}>Mark paid</button>
        <button type="button" class="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold text-amber-800 hover:bg-amber-50 dark:border-amber-700 dark:bg-amber-900/40 dark:text-amber-100" onclick={() => onBulkAction('mark-open', selection)}>Mark open</button>
      {/if}
      {#if canDelete}
        <button
          type="button"
          class="rounded-full border border-rose-200 bg-white px-3 py-1 text-xs font-semibold text-rose-800 hover:bg-rose-50 dark:border-rose-700 dark:bg-rose-900/30 dark:text-rose-100"
          title="Drafts are deleted; issued invoices are cancelled with a credit note."
          onclick={() => onBulkAction('delete', selection)}
        >
          Delete / Cancel
        </button>
      {/if}
      <button type="button" class="ml-auto text-xs font-semibold text-zinc-500 hover:text-zinc-800 dark:text-slate-400 dark:hover:text-slate-200" onclick={clearSelection}>Clear selection</button>
    </div>
  {/if}

  {#if visibleInvoices.length === 0}
    <div class="mt-6">
      <EmptyState
        icon="🧾"
        title="No invoices match this view"
        body="Try clearing the filters, or create a fresh invoice."
        action={canWrite ? { label: 'New invoice', onClick: onCreateInvoice, icon: '＋' } : null}
      />
      {#if filter !== 'All' || invoiceCustomerFilter || dateRange.from || dateRange.to}
        <div class="mt-3 flex justify-center">
          <button
            type="button"
            class="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            onclick={() => {
              filter = 'All';
              presetRange('reset');
              onClearInvoiceCustomerFilter?.();
            }}
          >
            <X class="h-3.5 w-3.5" aria-hidden="true" />
            Clear filters
          </button>
        </div>
      {/if}
    </div>
  {:else if invoiceView === 'list'}
    <ul class="mt-5 grid gap-3 md:hidden">
      {#each visibleInvoices as invoice}
        {@const tag = dueTag(invoice.status, invoice.due, now)}
        {@const meta = destructiveMeta(invoice)}
        {@const isLocked = invoice.isCreditNote || invoice.status === 'Cancelled'}
        {@const editable = isEditable(invoice)}
        <li class="rounded-xl border bg-white p-4 shadow-sm dark:bg-slate-900 {isLocked ? 'border-zinc-200 opacity-75 dark:border-slate-800' : 'border-zinc-200 dark:border-slate-700'}">
          <button
            type="button"
            class="block w-full text-left"
            onclick={() => onOpenInvoicePreview?.(invoice.id)}
            aria-label="Open {invoice.id}"
          >
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-start gap-2">
              {#if (canWrite || canDelete) && !isLocked}
                <input type="checkbox" class="mt-1" checked={selection.includes(invoice.id)} onchange={(e) => { e.stopPropagation(); toggleSelection(invoice.id); }} onclick={(e) => e.stopPropagation()} aria-label="Select {invoice.id}" />
              {/if}
              <div>
                <span class="font-mono text-xs font-semibold text-zinc-500 dark:text-slate-400 {invoice.status === 'Cancelled' ? 'line-through' : ''}">{invoice.id}</span>
                <p class="mt-0.5 text-sm font-bold text-zinc-900 dark:text-slate-100">{invoice.customer}</p>
                {#if invoice.title}
                  <p class="mt-0.5 text-xs italic text-zinc-600 dark:text-slate-300">{invoice.title}</p>
                {/if}
                {#if invoice.isCreditNote && invoice.referenceInvoiceId}
                  <p class="mt-0.5 text-[11px] font-medium text-violet-700 dark:text-violet-300">Credit note for {invoice.referenceInvoiceId}</p>
                {:else if invoice.creditNoteId}
                  <p class="mt-0.5 text-[11px] font-medium text-violet-700 dark:text-violet-300">Cancelled by {invoice.creditNoteId}</p>
                {/if}
              </div>
            </div>
            <span class="inline-flex rounded-md px-2.5 py-1 text-xs font-bold ring-1 {statusBadgeClass(invoice.status)}">
              {invoice.status}
            </span>
          </div>
          <p class="mt-2 text-xs text-zinc-500 dark:text-slate-400">{invoice.created}{invoice.due ? ` → ${invoice.due}` : ''}{invoice.poRef ? ` · PO ${invoice.poRef}` : ''}</p>
          <div class="mt-1 flex items-center justify-between">
            <span class="text-base font-bold tabular-nums text-zinc-900 dark:text-slate-100 {invoice.isCreditNote ? 'text-violet-800 dark:text-violet-300' : ''}">
              {invoiceAmount(invoice.amount, invoice.currency)}
            </span>
            {#if tag}
              <span class="inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold {dueTagClass(tag.kind)}">
                {tag.label}
              </span>
            {/if}
          </div>
          </button>
          <div class="mt-3 flex flex-wrap gap-1.5">
            {#if onOpenInvoicePreview}
              <button
                type="button"
                class="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                onclick={() => onOpenInvoicePreview(invoice.id)}
              >
                <Eye class="h-3.5 w-3.5" aria-hidden="true" /> Open
              </button>
            {/if}
            {#if canWrite && editable}
              <button
                type="button"
                class="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                onclick={() => onEditInvoice(invoice.id)}
              >
                <Pencil class="h-3.5 w-3.5" aria-hidden="true" /> Edit
              </button>
            {/if}
            {#if canDelete && meta.kind !== 'locked'}
              <button
                type="button"
                class="ml-auto inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-semibold {meta.toneClass}"
                onclick={() => onDeleteInvoice(invoice.id)}
                title={meta.title}
              >
                {#if meta.icon}
                  {@const Icon = meta.icon}
                  <Icon class="h-3.5 w-3.5" aria-hidden="true" />
                {/if}
                {meta.label}
              </button>
            {/if}
          </div>
        </li>
      {/each}
    </ul>

    <div class="mt-6 hidden overflow-x-auto rounded-lg border border-zinc-200 md:block dark:border-slate-700">
      <table class="w-full min-w-[860px] text-left text-sm">
        <caption class="sr-only">Invoices · use the filter chips above to narrow the list</caption>
        <thead>
          <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            <th class="px-3 py-3" scope="col">
              {#if canWrite || canDelete}
                <input type="checkbox" aria-label="Select all visible invoices" checked={selection.length === visibleInvoices.length && visibleInvoices.length > 0} onchange={toggleAll} />
              {/if}
            </th>
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
            {@const meta = destructiveMeta(invoice)}
            {@const isLocked = invoice.isCreditNote || invoice.status === 'Cancelled'}
            {@const editable = isEditable(invoice)}
            <tr
              class="cursor-pointer border-b border-zinc-100 last:border-0 hover:bg-leah-50/40 focus-within:bg-zinc-50 dark:border-slate-800 dark:hover:bg-slate-800/60 {isLocked ? 'bg-zinc-50/50 dark:bg-slate-800/40' : ''}"
              onclick={() => onOpenInvoicePreview?.(invoice.id)}
              onkeydown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && e.currentTarget === e.target) { e.preventDefault(); onOpenInvoicePreview?.(invoice.id); } }}
              tabindex="0"
              role="button"
              aria-label="Open {invoice.id}"
            >
              <td class="px-3 py-3" onclick={(e) => e.stopPropagation()}>
                {#if (canWrite || canDelete) && !isLocked}
                  <input type="checkbox" checked={selection.includes(invoice.id)} onchange={() => toggleSelection(invoice.id)} aria-label="Select {invoice.id}" />
                {/if}
              </td>
              <td class="px-4 py-3 font-mono font-semibold text-zinc-800 dark:text-slate-200">
                <span class="block text-left {invoice.status === 'Cancelled' ? 'line-through text-zinc-500' : ''} {invoice.isCreditNote ? 'text-violet-800 dark:text-violet-300' : ''}">{invoice.id}</span>
                {#if invoice.title}
                  <span class="mt-0.5 block max-w-[18rem] truncate font-sans text-[11px] font-normal italic text-zinc-500 dark:text-slate-400" title={invoice.title}>{invoice.title}</span>
                {/if}
                {#if invoice.poRef}
                  <span class="mr-1 mt-1 inline-block rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-600 dark:bg-slate-800 dark:text-slate-300">PO {invoice.poRef}</span>
                {/if}
                {#if invoice.isCreditNote && invoice.referenceInvoiceId}
                  <span class="mt-1 inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-1.5 py-0.5 text-[10px] font-semibold text-violet-900 dark:border-violet-700 dark:bg-violet-900/40 dark:text-violet-100">Storno of {invoice.referenceInvoiceId}</span>
                {:else if invoice.creditNoteId}
                  <span class="mt-1 inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-1.5 py-0.5 text-[10px] font-semibold text-violet-900 dark:border-violet-700 dark:bg-violet-900/40 dark:text-violet-100">→ {invoice.creditNoteId}</span>
                {/if}
              </td>
              <td class="px-4 py-3 text-zinc-600 dark:text-slate-300">{invoice.created}</td>
              <td class="px-4 py-3">
                <div class="flex flex-col gap-1">
                  <span class="text-zinc-600 dark:text-slate-300">{invoice.due || '—'}</span>
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
              <td class="px-4 py-3 font-medium text-zinc-900 dark:text-slate-100">{invoice.customer}</td>
              <td class="px-4 py-3">
                <span
                  class="inline-flex rounded-md px-2.5 py-1 text-xs font-bold ring-1 {statusBadgeClass(invoice.status)}"
                >
                  {invoice.status}
                </span>
                {#if invoice.status === 'Partially paid'}
                  <span class="mt-1 block text-[10px] text-sky-700 dark:text-sky-200">Paid {invoiceAmount(invoice.amountPaid ?? 0, invoice.currency)}</span>
                {/if}
              </td>
              <td class="px-4 py-3 text-right font-semibold tabular-nums text-zinc-900 dark:text-slate-100 {invoice.isCreditNote ? 'text-violet-800 dark:text-violet-300' : ''}">
                {invoiceAmount(invoice.amount, invoice.currency)}
              </td>
              <td class="px-4 py-3 text-right" onclick={(e) => e.stopPropagation()}>
                <div class="inline-flex justify-end gap-1">
                  {#if onOpenInvoicePreview}
                    <button
                      type="button"
                      class="rounded-md border border-zinc-200 bg-white p-2 text-zinc-700 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                      onclick={() => onOpenInvoicePreview(invoice.id)}
                      aria-label="Open invoice {invoice.id}"
                      title="Open"
                    >
                      <Eye class="h-4 w-4" aria-hidden="true" />
                    </button>
                  {/if}
                  {#if canWrite && editable}
                    <button
                      type="button"
                      class="rounded-md border border-zinc-200 bg-white p-2 text-zinc-700 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                      onclick={() => onEditInvoice(invoice.id)}
                      aria-label="Edit offer {invoice.id}"
                      title="Edit offer"
                    >
                      <Pencil class="h-4 w-4" aria-hidden="true" />
                    </button>
                  {/if}
                  {#if canDelete && meta.kind !== 'locked'}
                    {@const Icon = meta.icon}
                    <button
                      type="button"
                      class="rounded-md border p-2 {meta.toneClass}"
                      onclick={() => onDeleteInvoice(invoice.id)}
                      aria-label="{meta.label} invoice {invoice.id}"
                      title={meta.title}
                    >
                      <Icon class="h-4 w-4" aria-hidden="true" />
                    </button>
                  {/if}
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <div
      class="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-5"
    >
      {#each kanbanColumns as col}
        {@const cards = visibleInvoices.filter((inv) => inv.status === col)}
        <div
          class="w-[min(100%,280px)] shrink-0 snap-start rounded-xl border border-zinc-200 bg-zinc-50/50 p-3 md:w-auto md:min-w-0 md:shrink dark:border-slate-700 dark:bg-slate-800/40"
        >
          <h3 class="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-slate-400">
            <span>{col}</span>
            <span class="rounded-full bg-white px-2 py-0.5 text-[10px] text-zinc-600 ring-1 ring-zinc-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700">
              {cards.length}
            </span>
          </h3>
          <div class="flex flex-col gap-2">
            {#each cards as invoice}
              {@const tag = dueTag(invoice.status, invoice.due, now)}
              {@const meta = destructiveMeta(invoice)}
              {@const editable = isEditable(invoice)}
              <div
                role="button"
                tabindex="0"
                aria-label="Open {invoice.id}"
                class="cursor-pointer rounded-lg border border-zinc-200 bg-white p-3 text-left shadow-sm transition hover:border-leah-300 hover:bg-leah-50/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/40 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800/60"
                onclick={() => onOpenInvoicePreview?.(invoice.id)}
                onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpenInvoicePreview?.(invoice.id); } }}
              >
                <p class="font-mono text-xs font-semibold text-zinc-500 dark:text-slate-400">{invoice.id}</p>
                <p class="mt-1 text-sm font-semibold text-zinc-900 dark:text-slate-100">{invoice.customer}</p>
                {#if invoice.title}
                  <p class="mt-0.5 truncate text-[11px] italic text-zinc-500 dark:text-slate-400">{invoice.title}</p>
                {/if}
                <p class="mt-2 text-sm font-bold tabular-nums text-leah-800 dark:text-leah-700">{invoiceAmount(invoice.amount, invoice.currency)}</p>
                <p class="mt-1 flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-slate-400">
                  <span>{invoice.due ? `Due ${invoice.due}` : 'Offer · no due date'}</span>
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
                <div class="mt-3 flex flex-wrap gap-1" role="presentation" onclick={(e) => e.stopPropagation()} onkeydown={(e) => e.stopPropagation()}>
                  {#if canWrite && editable}
                    <button
                      type="button"
                      class="flex-1 rounded-md border border-zinc-200 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
                      onclick={() => onEditInvoice(invoice.id)}
                    >
                      Edit
                    </button>
                  {/if}
                  {#if canDelete && meta.kind !== 'locked'}
                    <button
                      type="button"
                      class="flex-1 rounded-md border py-1.5 text-xs font-semibold {meta.toneClass}"
                      onclick={() => onDeleteInvoice(invoice.id)}
                      title={meta.title}
                    >
                      {meta.label}
                    </button>
                  {/if}
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

{#if templates.length}
  <section class="mt-4 rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <header class="flex flex-wrap items-center justify-between gap-2">
      <div>
        <h2 class="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-slate-100">
          <Repeat class="h-4 w-4 text-leah-700" aria-hidden="true" />
          Recurring invoices
        </h2>
        <p class="text-xs text-zinc-500 dark:text-slate-400">Generate the next instalment in one click — counter and dates auto-advance.</p>
      </div>
    </header>
    <ul class="mt-3 grid gap-2 sm:grid-cols-2">
      {#each templates as tpl}
        {@const customer = customers.find((c) => c.id === tpl.customerId)}
        <li class="flex flex-col justify-between gap-3 rounded-lg border border-zinc-200 p-3 dark:border-slate-700">
          <div>
            <p class="text-sm font-semibold text-zinc-900 dark:text-slate-100">{tpl.name}</p>
            <p class="text-xs text-zinc-500 dark:text-slate-400">{customer?.name ?? 'Unknown'} · {tpl.cadence} · next {tpl.nextRunDe}</p>
          </div>
          {#if canWrite}
            <button
              type="button"
              class="inline-flex w-fit items-center gap-1 rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              onclick={() => onGenerateTemplate(tpl.id)}
            >
              Generate now
            </button>
          {:else}
            <span class="text-[11px] text-zinc-400">Read-only · ask Owner / Admin to generate</span>
          {/if}
        </li>
      {/each}
    </ul>
  </section>
{/if}
