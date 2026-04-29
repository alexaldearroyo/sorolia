<script>
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import Pencil from 'lucide-svelte/icons/pencil';
  import FileText from 'lucide-svelte/icons/file-text';
  import FolderKanban from 'lucide-svelte/icons/folder-kanban';
  import Package from 'lucide-svelte/icons/package';
  import Receipt from 'lucide-svelte/icons/receipt';
  import { customerName } from '../workspaceActions.js';
  import { statusBadgeClass } from '../format.js';

  let {
    customer,
    invoices,
    projects,
    inventory,
    expenses,
    customers,
    currency,
    canEdit = false,
    onBack,
    onEdit,
    onOpenInvoiceList,
    onOpenInvoice,
    onOpenProjectList,
    onOpenInventory
  } = $props();

  let tab = $state('overview');

  const customerInvoices = $derived(invoices.filter((i) => i.customerId === customer?.id));
  const customerProjects = $derived(projects.filter((p) => p.customerId === customer?.id));
  const customerInventory = $derived(inventory.filter((s) => s.supplierCustomerId === customer?.id));
  const customerExpenses = $derived(expenses.filter((e) => e.supplierCustomerId === customer?.id));

  const paidTotal = $derived(
    customerInvoices.filter((i) => i.status === 'Paid').reduce((s, i) => s + i.amount, 0)
  );
  const pendingTotal = $derived(
    customerInvoices
      .filter((i) => i.status === 'Open' || i.status === 'Overdue')
      .reduce((s, i) => s + i.amount, 0)
  );

  function healthClass(h) {
    if (h === 'At risk') return 'bg-rose-100 text-rose-900 dark:bg-rose-900/30 dark:text-rose-200';
    if (h === 'Watch') return 'bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-100';
    return 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-100';
  }

  let detailsOpen = $state(false);
</script>

{#if customer}
  <section class="grid gap-4">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <button
        type="button"
        class="inline-flex items-center gap-1 text-sm font-semibold text-leah-800 hover:underline dark:text-leah-700"
        onclick={onBack}
      >
        <ChevronLeft class="h-4 w-4" aria-hidden="true" />
        Back to customers
      </button>
      {#if canEdit}
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          onclick={onEdit}
        >
          <Pencil class="h-4 w-4" aria-hidden="true" />
          Edit profile
        </button>
      {/if}
    </div>

    <header class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div class="min-w-0">
          <div class="flex flex-wrap items-center gap-2">
            <h2 class="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-slate-100">{customer.name}</h2>
            <span class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold {healthClass(customer.health)}">
              {customer.health}
            </span>
          </div>
          <p class="mt-1 text-sm text-zinc-500 dark:text-slate-400">{customer.segment} · {customer.country}{customer.paymentTermsDays != null ? ` · ${customer.paymentTermsDays}d net · ${customer.currency ?? 'EUR'}` : ''}</p>
        </div>

        <div class="grid grid-cols-3 divide-x divide-zinc-100 rounded-lg border border-zinc-200 bg-zinc-50/60 dark:divide-slate-800 dark:border-slate-700 dark:bg-slate-800/40">
          <div class="px-4 py-2.5 text-right">
            <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Paid</p>
            <p class="text-base font-extrabold tabular-nums text-emerald-700 dark:text-emerald-300">{currency(paidTotal)}</p>
            <p class="text-[10px] text-zinc-500 dark:text-slate-400">{customerInvoices.filter((i) => i.status === 'Paid').length} inv</p>
          </div>
          <div class="px-4 py-2.5 text-right">
            <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Outstanding</p>
            <p class="text-base font-extrabold tabular-nums text-zinc-900 dark:text-slate-100">{currency(pendingTotal)}</p>
            <p class="text-[10px] text-zinc-500 dark:text-slate-400">{customerInvoices.filter((i) => i.status === 'Open' || i.status === 'Overdue').length} open</p>
          </div>
          <div class="px-4 py-2.5 text-right">
            <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Projects</p>
            <p class="text-base font-extrabold tabular-nums text-zinc-900 dark:text-slate-100">{customerProjects.length}</p>
            <p class="text-[10px] text-zinc-500 dark:text-slate-400">linked</p>
          </div>
        </div>
      </div>

      <details class="mt-4 group" bind:open={detailsOpen}>
        <summary class="flex cursor-pointer list-none items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-zinc-800 [&::-webkit-details-marker]:hidden dark:text-slate-400 dark:hover:text-slate-200">
          <span class="text-zinc-400 transition group-open:rotate-90 dark:text-slate-500" aria-hidden="true">›</span>
          {detailsOpen ? 'Hide' : 'Show'} contact &amp; billing details
        </summary>
        <dl class="mt-3 grid gap-3 sm:grid-cols-2">
          {#if customer.email}
            <div>
              <dt class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Email</dt>
              <dd class="text-sm text-zinc-800 dark:text-slate-200"><a class="hover:underline" href={`mailto:${customer.email}`}>{customer.email}</a></dd>
            </div>
          {/if}
          {#if customer.phone}
            <div>
              <dt class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Phone</dt>
              <dd class="text-sm text-zinc-800 dark:text-slate-200">{customer.phone}</dd>
            </div>
          {/if}
          {#if customer.vatId}
            <div>
              <dt class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">VAT ID</dt>
              <dd class="text-sm text-zinc-800 dark:text-slate-200">{customer.vatId}</dd>
            </div>
          {/if}
          {#if customer.address}
            <div class="sm:col-span-2">
              <dt class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Billing address</dt>
              <dd class="text-sm text-zinc-800 dark:text-slate-200">{customer.address}</dd>
            </div>
          {/if}
          {#if customer.notes}
            <div class="sm:col-span-2">
              <dt class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Notes</dt>
              <dd class="rounded-lg bg-zinc-50 px-3 py-2 text-sm text-zinc-700 dark:bg-slate-800 dark:text-slate-200">{customer.notes}</dd>
            </div>
          {/if}
          {#if customer.contacts?.length}
            <div class="sm:col-span-2">
              <dt class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Contacts</dt>
              <ul class="mt-1 grid gap-1 sm:grid-cols-2">
                {#each customer.contacts as person}
                  <li class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
                    <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">{person.role || 'Contact'}</p>
                    <p class="font-medium text-zinc-900 dark:text-slate-100">{person.name}</p>
                    {#if person.email}<p class="text-xs"><a class="hover:underline" href={`mailto:${person.email}`}>{person.email}</a></p>{/if}
                    {#if person.phone}<p class="text-xs">{person.phone}</p>{/if}
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </dl>
      </details>
    </header>

    <div class="rounded-xl border border-zinc-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div
        class="flex flex-wrap gap-1 border-b border-zinc-200 px-3 pt-3 text-sm font-semibold dark:border-slate-700"
        role="tablist"
        aria-label="Customer detail"
      >
        {#each [
          { id: 'overview', label: 'Overview' },
          { id: 'invoices', label: `Invoices (${customerInvoices.length})` },
          { id: 'projects', label: `Projects (${customerProjects.length})` },
          { id: 'inventory', label: `Stock (${customerInventory.length})` },
          { id: 'expenses', label: `Expenses (${customerExpenses.length})` }
        ] as t}
          <button
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            class="rounded-t-md border-b-2 px-3 py-2 text-zinc-600 hover:text-zinc-900 dark:text-slate-400 dark:hover:text-slate-100 {tab === t.id
              ? 'border-leah-700 text-zinc-900 dark:text-slate-100'
              : 'border-transparent'}"
            onclick={() => (tab = t.id)}
          >
            {t.label}
          </button>
        {/each}
      </div>

      <div class="p-5">
        {#if tab === 'overview'}
          <div class="grid gap-3 text-sm text-zinc-600 sm:grid-cols-2">
            <button
              type="button"
              class="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4 text-left hover:border-leah-300 hover:bg-zinc-50"
              onclick={() => onOpenInvoiceList?.(customer.id)}
            >
              <FileText class="h-5 w-5 text-leah-700" aria-hidden="true" />
              <span class="flex-1">
                <span class="block text-sm font-semibold text-zinc-900">Open invoices view</span>
                <span class="text-xs text-zinc-500">Filter the invoices module to this customer</span>
              </span>
            </button>
            <button
              type="button"
              class="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4 text-left hover:border-leah-300 hover:bg-zinc-50 disabled:opacity-40"
              disabled={customerProjects.length === 0}
              onclick={() => onOpenProjectList?.(customer.id)}
            >
              <FolderKanban class="h-5 w-5 text-leah-700" aria-hidden="true" />
              <span class="flex-1">
                <span class="block text-sm font-semibold text-zinc-900">Open projects view</span>
                <span class="text-xs text-zinc-500">{customerProjects.length} linked</span>
              </span>
            </button>
            <button
              type="button"
              class="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4 text-left hover:border-leah-300 hover:bg-zinc-50"
              onclick={() => onOpenInventory?.(customer.id)}
            >
              <Package class="h-5 w-5 text-leah-700" aria-hidden="true" />
              <span class="flex-1">
                <span class="block text-sm font-semibold text-zinc-900">Open inventory view</span>
                <span class="text-xs text-zinc-500">{customerInventory.length} SKUs supplied</span>
              </span>
            </button>
            <div class="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm">
              <p class="text-xs font-bold uppercase tracking-wide text-zinc-500">Linked expenses</p>
              <p class="mt-1 text-zinc-700">{customerExpenses.length} postings</p>
            </div>
          </div>
        {:else if tab === 'invoices'}
          {#if customerInvoices.length === 0}
            <p class="rounded-lg border border-dashed border-zinc-200 bg-zinc-50/40 px-4 py-10 text-center text-sm text-zinc-500">
              No invoices linked to this customer yet.
            </p>
          {:else}
            <ul class="grid gap-2">
              {#each customerInvoices as inv}
                <li>
                  <button
                    type="button"
                    class="grid w-full grid-cols-1 items-center gap-2 rounded-lg border border-zinc-100 bg-zinc-50/60 p-3 text-left transition hover:border-leah-200 hover:bg-white sm:grid-cols-[120px_1fr_auto_auto]"
                    onclick={() => onOpenInvoice?.(inv.id)}
                  >
                    <span class="font-mono text-xs font-semibold text-zinc-500">{inv.id}</span>
                    <span class="text-sm text-zinc-700">{inv.created} → {inv.due}</span>
                    <span class="inline-flex w-fit rounded-md px-2.5 py-1 text-xs font-bold ring-1 {statusBadgeClass(inv.status)}">
                      {inv.status}
                    </span>
                    <span class="text-right tabular-nums text-sm font-semibold text-zinc-900">{currency(inv.amount)}</span>
                  </button>
                </li>
              {/each}
            </ul>
          {/if}
        {:else if tab === 'projects'}
          {#if customerProjects.length === 0}
            <p class="rounded-lg border border-dashed border-zinc-200 bg-zinc-50/40 px-4 py-10 text-center text-sm text-zinc-500">
              No projects linked to this customer.
            </p>
          {:else}
            <ul class="grid gap-2 md:grid-cols-2">
              {#each customerProjects as p}
                <li class="rounded-xl border border-zinc-200 bg-zinc-50/40 p-4">
                  <div class="flex items-start justify-between gap-2">
                    <strong class="text-sm text-zinc-900">{p.name}</strong>
                    <span class="rounded-full bg-zinc-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-zinc-700">
                      {p.status}
                    </span>
                  </div>
                  <p class="mt-1 text-xs text-zinc-500">Owner {p.owner} · review {p.nextReview ?? '—'}</p>
                  <p class="mt-2 text-xs text-zinc-600">Budget {currency(p.budget)}</p>
                </li>
              {/each}
            </ul>
          {/if}
        {:else if tab === 'inventory'}
          {#if customerInventory.length === 0}
            <p class="rounded-lg border border-dashed border-zinc-200 bg-zinc-50/40 px-4 py-10 text-center text-sm text-zinc-500">
              This customer is not supplying any SKU.
            </p>
          {:else}
            <ul class="grid gap-2">
              {#each customerInventory as sku}
                <li class="flex items-center justify-between gap-3 rounded-lg border border-zinc-100 bg-zinc-50/60 px-3 py-2">
                  <div>
                    <span class="font-mono text-xs font-semibold text-zinc-500">{sku.code}</span>
                    <span class="ml-2 text-sm text-zinc-800">{sku.name}</span>
                  </div>
                  <span class="text-sm tabular-nums text-zinc-700">{sku.qty} · reorder at {sku.reorder}</span>
                </li>
              {/each}
            </ul>
          {/if}
        {:else if tab === 'expenses'}
          {#if customerExpenses.length === 0}
            <p class="rounded-lg border border-dashed border-zinc-200 bg-zinc-50/40 px-4 py-10 text-center text-sm text-zinc-500">
              No expenses link to this customer.
            </p>
          {:else}
            <ul class="grid gap-2">
              {#each customerExpenses as e}
                <li class="flex items-center justify-between gap-3 rounded-lg border border-zinc-100 bg-zinc-50/60 px-3 py-2 text-sm">
                  <div class="flex items-center gap-3">
                    <Receipt class="h-4 w-4 text-leah-700" aria-hidden="true" />
                    <div>
                      <span class="block text-sm font-semibold text-zinc-900">{e.vendor}</span>
                      <span class="text-xs text-zinc-500">{e.type} · {e.date}</span>
                    </div>
                  </div>
                  <span class="tabular-nums text-zinc-900">{currency(e.amount)}</span>
                </li>
              {/each}
            </ul>
          {/if}
        {/if}
      </div>
    </div>
  </section>
{/if}
