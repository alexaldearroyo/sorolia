<script>
  import Pencil from 'lucide-svelte/icons/pencil';
  import FileText from 'lucide-svelte/icons/file-text';
  import FolderKanban from 'lucide-svelte/icons/folder-kanban';
  import Package from 'lucide-svelte/icons/package';
  import Eye from 'lucide-svelte/icons/eye';
  import Download from 'lucide-svelte/icons/download';
  import Search from 'lucide-svelte/icons/search';
  import MoreHorizontal from 'lucide-svelte/icons/more-horizontal';
  import CustomerFormModal from '../components/CustomerFormModal.svelte';
  import EmptyState from '../components/EmptyState.svelte';

  let {
    customerEditor = $bindable(null),
    customers,
    invoices,
    projects,
    currency,
    canWrite = false,
    canDelete = false,
    canExport = false,
    onUpsertCustomer,
    onDeleteCustomer,
    onOpenCustomerDetail,
    onOpenInvoices,
    onOpenProjects,
    onOpenInventory,
    onExportCsv
  } = $props();

  let query = $state('');
  let healthFilter = $state('All');

  let customerDraft = $derived(
    customerEditor?.mode === 'edit'
      ? customers.find((c) => c.id === customerEditor.id) ?? null
      : null
  );

  function closeEditor() {
    customerEditor = null;
  }

  function saveCustomer(payload) {
    onUpsertCustomer(payload);
    closeEditor();
  }

  function deleteCustomer(id) {
    onDeleteCustomer(id);
  }

  function openCount(cid) {
    return invoices.filter(
      (i) => i.customerId === cid && (i.status === 'Open' || i.status === 'Overdue')
    ).length;
  }

  function paidTotal(cid) {
    return invoices.filter((i) => i.customerId === cid && i.status === 'Paid').reduce((s, i) => s + i.amount, 0);
  }

  function projectCount(cid) {
    return projects.filter((p) => p.customerId === cid).length;
  }

  function healthClass(h) {
    if (h === 'At risk') return 'bg-rose-100 text-rose-900 dark:bg-rose-900/30 dark:text-rose-200';
    if (h === 'Watch') return 'bg-amber-100 text-amber-950 dark:bg-amber-900/30 dark:text-amber-100';
    return 'bg-emerald-50 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-100';
  }

  /** Closes the open menu when the user clicks elsewhere or presses Escape. */
  $effect(() => {
    if (typeof document === 'undefined') return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeAllMenus();
    };
    const onClick = (e) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest('[data-row-menu]')) closeAllMenus();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  });

  function closeAllMenus() {
    if (typeof document === 'undefined') return;
    for (const el of document.querySelectorAll('[data-row-menu][open]')) {
      el.removeAttribute('open');
    }
  }

  const filtered = $derived.by(() => {
    const q = query.trim().toLowerCase();
    return customers.filter((c) => {
      if (healthFilter !== 'All' && c.health !== healthFilter) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        (c.segment ?? '').toLowerCase().includes(q) ||
        (c.country ?? '').toLowerCase().includes(q) ||
        (c.email ?? '').toLowerCase().includes(q) ||
        (c.vatId ?? '').toLowerCase().includes(q)
      );
    });
  });
</script>

<CustomerFormModal
  editor={customerEditor}
  draftRow={customerDraft}
  {canDelete}
  onClose={closeEditor}
  onSave={saveCustomer}
  onDelete={deleteCustomer}
/>

<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
  <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <div class="relative max-w-sm flex-1">
      <Search class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" aria-hidden="true" />
      <input
        bind:value={query}
        type="search"
        placeholder="Filter customers…"
        class="w-full rounded-lg border border-zinc-200 bg-white py-2 pl-9 pr-3 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />
    </div>
    <div class="flex flex-wrap items-center gap-2">
      <div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5 dark:border-slate-700 dark:bg-slate-800" role="group" aria-label="Health filter">
        {#each ['All', 'Good', 'Watch', 'At risk'] as opt}
          <button
            type="button"
            aria-pressed={healthFilter === opt}
            class="rounded-md px-2.5 py-1 text-xs font-semibold {healthFilter === opt
              ? 'bg-white text-leah-900 shadow-sm dark:bg-slate-900 dark:text-slate-100'
              : 'text-zinc-600 hover:text-zinc-900 dark:text-slate-300 dark:hover:text-slate-100'}"
            onclick={() => (healthFilter = opt)}
          >
            {opt}
          </button>
        {/each}
      </div>
      {#if canExport}
        <button
          type="button"
          class="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          onclick={onExportCsv}
        >
          <Download class="h-3.5 w-3.5" aria-hidden="true" />
          CSV
        </button>
      {/if}
    </div>
  </div>

  {#if filtered.length === 0}
    <div class="mt-6">
      <EmptyState
        icon="🤝"
        title="No customers match this filter"
        body="Adjust the search or health filter, or add the first account."
        action={canWrite ? { label: 'New customer', onClick: () => (customerEditor = { mode: 'create' }), icon: '＋' } : null}
      />
    </div>
  {:else}
    <!-- Mobile: card list -->
    <ul class="mt-5 grid gap-3 md:hidden">
      {#each filtered as c}
        <li class="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800/60">
          <div class="flex items-start justify-between gap-2">
            <button
              type="button"
              class="text-left text-sm font-bold text-zinc-900 hover:underline dark:text-slate-100"
              onclick={() => onOpenCustomerDetail?.(c.id)}
            >
              {c.name}
            </button>
            <span class="inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold {healthClass(c.health)}">
              {c.health}
            </span>
          </div>
          <p class="mt-1 text-xs text-zinc-500 dark:text-slate-400">{c.country} · {c.segment}</p>
          <dl class="mt-3 grid grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-slate-300">
            <div>
              <dt class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Open / overdue</dt>
              <dd class="text-sm tabular-nums text-zinc-800 dark:text-slate-100">{openCount(c.id)}</dd>
            </div>
            <div class="text-right">
              <dt class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Paid</dt>
              <dd class="text-sm font-semibold tabular-nums text-zinc-900 dark:text-slate-100">{currency(paidTotal(c.id))}</dd>
            </div>
          </dl>
          <div class="mt-3 flex flex-wrap gap-1.5">
            <button
              type="button"
              class="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              onclick={() => onOpenCustomerDetail?.(c.id)}
            >
              <Eye class="h-3.5 w-3.5" aria-hidden="true" />
              Detail
            </button>
            <button
              type="button"
              class="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              onclick={() => onOpenInvoices(c.id)}
            >
              <FileText class="h-3.5 w-3.5" aria-hidden="true" />
              Invoices
            </button>
            {#if canWrite}
              <button
                type="button"
                class="ml-auto rounded-md border border-zinc-200 bg-white p-1.5 text-zinc-700 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                onclick={() => (customerEditor = { mode: 'edit', id: c.id })}
                aria-label="Edit {c.name}"
                title="Edit"
              >
                <Pencil class="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            {/if}
          </div>
        </li>
      {/each}
    </ul>

    <!-- Desktop: table -->
    <div class="mt-5 hidden overflow-x-auto rounded-lg border border-zinc-200 md:block dark:border-slate-700">
      <table class="w-full min-w-[760px] text-left text-sm">
        <caption class="sr-only">Customer master directory · click a row to open details</caption>
        <thead>
          <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            <th class="px-4 py-3" scope="col">Customer</th>
            <th class="px-4 py-3" scope="col">Segment</th>
            <th class="px-4 py-3" scope="col">Health</th>
            <th class="px-4 py-3 text-right" scope="col">Open / overdue</th>
            <th class="px-4 py-3 text-right" scope="col">Paid (demo)</th>
            <th class="px-4 py-3 text-right" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each filtered as c}
            <tr class="cursor-pointer border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80 focus-within:bg-zinc-50/80 dark:border-slate-800 dark:hover:bg-slate-800/60">
              <td class="px-4 py-3 font-semibold text-zinc-900 dark:text-slate-100">
                <button
                  type="button"
                  class="text-left hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/40"
                  onclick={() => onOpenCustomerDetail?.(c.id)}
                >
                  {c.name}
                </button>
                <p class="mt-0.5 text-[11px] font-normal text-zinc-500 dark:text-slate-400">{c.country}</p>
              </td>
              <td class="px-4 py-3 text-zinc-600 dark:text-slate-300">{c.segment}</td>
              <td class="px-4 py-3">
                <span class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold {healthClass(c.health)}">
                  {c.health}
                </span>
              </td>
              <td class="px-4 py-3 text-right tabular-nums text-zinc-800 dark:text-slate-200">{openCount(c.id)}</td>
              <td class="px-4 py-3 text-right font-semibold tabular-nums text-zinc-900 dark:text-slate-100">{currency(paidTotal(c.id))}</td>
              <td class="px-4 py-3 text-right">
                <details data-row-menu class="relative inline-block">
                  <summary
                    class="inline-flex cursor-pointer list-none items-center justify-center rounded-md border border-zinc-200 bg-white p-1.5 text-zinc-700 hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 [&::-webkit-details-marker]:hidden"
                    aria-label="Actions for {c.name}"
                    title="Actions"
                    onclick={(e) => {
                      const me = e.currentTarget.parentElement;
                      const others = document.querySelectorAll('[data-row-menu][open]');
                      others.forEach((el) => {
                        if (el !== me) el.removeAttribute('open');
                      });
                    }}
                  >
                    <MoreHorizontal class="h-4 w-4" aria-hidden="true" />
                  </summary>
                  <div
                    role="menu"
                    class="absolute right-0 top-full z-10 mt-1 w-48 overflow-hidden rounded-lg border border-zinc-200 bg-white py-1 text-sm shadow-lg dark:border-slate-700 dark:bg-slate-900"
                  >
                    <button
                      type="button"
                      role="menuitem"
                      class="flex w-full items-center gap-2 px-3 py-2 text-left text-zinc-700 hover:bg-zinc-50 dark:text-slate-200 dark:hover:bg-slate-800"
                      onclick={() => { onOpenCustomerDetail?.(c.id); closeAllMenus(); }}
                    >
                      <Eye class="h-4 w-4" aria-hidden="true" /> Open detail
                    </button>
                    <button
                      type="button"
                      role="menuitem"
                      class="flex w-full items-center gap-2 px-3 py-2 text-left text-zinc-700 hover:bg-zinc-50 dark:text-slate-200 dark:hover:bg-slate-800"
                      onclick={() => { onOpenInvoices(c.id); closeAllMenus(); }}
                    >
                      <FileText class="h-4 w-4" aria-hidden="true" /> Invoices
                    </button>
                    <button
                      type="button"
                      role="menuitem"
                      class="flex w-full items-center gap-2 px-3 py-2 text-left text-zinc-700 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-200 dark:hover:bg-slate-800"
                      disabled={projectCount(c.id) === 0}
                      onclick={() => { onOpenProjects(c.id); closeAllMenus(); }}
                    >
                      <FolderKanban class="h-4 w-4" aria-hidden="true" />
                      Projects
                      <span class="ml-auto text-[10px] font-semibold text-zinc-400 dark:text-slate-500">{projectCount(c.id)}</span>
                    </button>
                    <button
                      type="button"
                      role="menuitem"
                      class="flex w-full items-center gap-2 px-3 py-2 text-left text-zinc-700 hover:bg-zinc-50 dark:text-slate-200 dark:hover:bg-slate-800"
                      onclick={() => { onOpenInventory(c.id); closeAllMenus(); }}
                    >
                      <Package class="h-4 w-4" aria-hidden="true" /> Stock
                    </button>
                    {#if canWrite}
                      <div class="my-1 border-t border-zinc-100 dark:border-slate-800"></div>
                      <button
                        type="button"
                        role="menuitem"
                        class="flex w-full items-center gap-2 px-3 py-2 text-left text-zinc-700 hover:bg-zinc-50 dark:text-slate-200 dark:hover:bg-slate-800"
                        onclick={() => { customerEditor = { mode: 'edit', id: c.id }; closeAllMenus(); }}
                      >
                        <Pencil class="h-4 w-4" aria-hidden="true" /> Edit customer
                      </button>
                    {/if}
                  </div>
                </details>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</section>
