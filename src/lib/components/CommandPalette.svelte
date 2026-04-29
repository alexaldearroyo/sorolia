<script>
  import Search from 'lucide-svelte/icons/search';
  import Users from 'lucide-svelte/icons/users';
  import FileText from 'lucide-svelte/icons/file-text';
  import Package from 'lucide-svelte/icons/package';
  import FolderKanban from 'lucide-svelte/icons/folder-kanban';
  import Briefcase from 'lucide-svelte/icons/briefcase';
  import { searchWorkspace } from '../search.js';
  import { lockDialogFocus } from '../dialogFocus.js';
  import { useEscape } from '../escape.js';
  import { customerName } from '../workspaceActions.js';

  let {
    open = false,
    customers = [],
    invoices = [],
    inventory = [],
    projects = [],
    employees = [],
    onClose,
    onPickCustomer,
    onPickInvoice,
    onPickInventorySupplier,
    onPickProject,
    onPickEmployeeProject
  } = $props();

  let query = $state('');
  let dialogEl = $state();
  let inputEl = $state();
  let activeIndex = $state(0);

  $effect(() => {
    if (!open) {
      query = '';
      activeIndex = 0;
      return;
    }
    queueMicrotask(() => inputEl?.focus({ preventScroll: true }));
  });

  $effect(() => {
    if (!open) return;
    return useEscape(onClose);
  });

  $effect(() => {
    if (!open) return;
    return lockDialogFocus(() => dialogEl);
  });

  const enrichedInvoices = $derived(
    invoices.map((i) => ({
      ...i,
      customer: customerName(customers, i.customerId)
    }))
  );

  const data = $derived({
    customers,
    invoices: enrichedInvoices,
    inventory,
    projects,
    employees
  });

  const results = $derived(searchWorkspace(query, data));

  /** Flat list to support arrow-key navigation across groups. */
  const flat = $derived.by(() => {
    const list = [];
    for (const c of results.customers) list.push({ kind: 'customer', row: c });
    for (const i of results.invoices) list.push({ kind: 'invoice', row: i });
    for (const s of results.inventory) list.push({ kind: 'inventory', row: s });
    for (const p of results.projects) list.push({ kind: 'project', row: p });
    for (const e of results.employees) list.push({ kind: 'employee', row: e });
    return list;
  });

  $effect(() => {
    if (activeIndex >= flat.length) activeIndex = 0;
  });

  function handle(item) {
    if (!item) return;
    onClose?.();
    if (item.kind === 'customer') onPickCustomer?.(item.row.id);
    else if (item.kind === 'invoice') onPickInvoice?.(item.row.id);
    else if (item.kind === 'inventory') onPickInventorySupplier?.(item.row.supplierCustomerId);
    else if (item.kind === 'project') onPickProject?.(item.row.customerId);
    else if (item.kind === 'employee') onPickEmployeeProject?.(item.row.projectId);
  }

  function onKey(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (flat.length > 0) activeIndex = (activeIndex + 1) % flat.length;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (flat.length > 0) activeIndex = (activeIndex - 1 + flat.length) % flat.length;
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handle(flat[activeIndex]);
    }
  }

  function indexFor(kind, row) {
    return flat.findIndex((it) => it.kind === kind && it.row.id === row.id);
  }
</script>

{#if open}
  <div class="fixed inset-0 z-[80] flex items-start justify-center p-4 pt-[10vh]" role="presentation">
    <button
      type="button"
      class="absolute inset-0 bg-zinc-900/50 backdrop-blur-[1px]"
      aria-label="Close palette"
      onclick={onClose}
    ></button>
    <div
      bind:this={dialogEl}
      role="dialog"
      aria-modal="true"
      aria-label="Workspace search"
      class="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl"
    >
      <div class="flex items-center gap-2 border-b border-zinc-100 px-3">
        <Search class="h-4 w-4 text-zinc-400" aria-hidden="true" />
        <input
          bind:this={inputEl}
          bind:value={query}
          onkeydown={onKey}
          type="search"
          class="min-h-12 w-full bg-transparent py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
          placeholder="Search customers, invoices, SKUs, projects, people…"
          aria-label="Search workspace"
        />
        <span class="hidden rounded border border-zinc-200 px-1.5 py-0.5 text-[10px] font-bold text-zinc-500 sm:inline">
          Esc
        </span>
      </div>

      <div class="max-h-[60vh] overflow-y-auto">
        {#if flat.length === 0}
          <p class="px-4 py-8 text-center text-sm text-zinc-500">
            {#if query}No matches for "<span class="font-semibold">{query}</span>"{:else}Type to search across the workspace{/if}
          </p>
        {:else}
          {#if results.customers.length}
            <section>
              <header class="flex items-center gap-2 px-3 pt-3 text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                <Users class="h-3.5 w-3.5" /> Customers
              </header>
              <ul class="grid">
                {#each results.customers as c}
                  {@const idx = indexFor('customer', c)}
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-3 px-3 py-2 text-left text-sm hover:bg-zinc-50 {idx ===
                      activeIndex
                        ? 'bg-zinc-50 ring-1 ring-inset ring-leah-200'
                        : ''}"
                      onclick={() => handle({ kind: 'customer', row: c })}
                      onmouseenter={() => (activeIndex = idx)}
                    >
                      <Users class="h-4 w-4 text-leah-700" aria-hidden="true" />
                      <span class="flex-1 truncate text-zinc-900">{c.name}</span>
                      <span class="text-xs text-zinc-500">{c.country} · {c.segment}</span>
                    </button>
                  </li>
                {/each}
              </ul>
            </section>
          {/if}

          {#if results.invoices.length}
            <section>
              <header class="flex items-center gap-2 px-3 pt-3 text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                <FileText class="h-3.5 w-3.5" /> Invoices
              </header>
              <ul class="grid">
                {#each results.invoices as inv}
                  {@const idx = indexFor('invoice', inv)}
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-3 px-3 py-2 text-left text-sm hover:bg-zinc-50 {idx ===
                      activeIndex
                        ? 'bg-zinc-50 ring-1 ring-inset ring-leah-200'
                        : ''}"
                      onclick={() => handle({ kind: 'invoice', row: inv })}
                      onmouseenter={() => (activeIndex = idx)}
                    >
                      <FileText class="h-4 w-4 text-leah-700" aria-hidden="true" />
                      <span class="font-mono text-xs text-zinc-500">{inv.id}</span>
                      <span class="flex-1 truncate text-zinc-900">{inv.customer}</span>
                      <span class="text-xs text-zinc-500">{inv.status}</span>
                    </button>
                  </li>
                {/each}
              </ul>
            </section>
          {/if}

          {#if results.inventory.length}
            <section>
              <header class="flex items-center gap-2 px-3 pt-3 text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                <Package class="h-3.5 w-3.5" /> Inventory
              </header>
              <ul class="grid">
                {#each results.inventory as sku}
                  {@const idx = indexFor('inventory', sku)}
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-3 px-3 py-2 text-left text-sm hover:bg-zinc-50 {idx ===
                      activeIndex
                        ? 'bg-zinc-50 ring-1 ring-inset ring-leah-200'
                        : ''}"
                      onclick={() => handle({ kind: 'inventory', row: sku })}
                      onmouseenter={() => (activeIndex = idx)}
                    >
                      <Package class="h-4 w-4 text-leah-700" aria-hidden="true" />
                      <span class="font-mono text-xs text-zinc-500">{sku.code}</span>
                      <span class="flex-1 truncate text-zinc-900">{sku.name}</span>
                      <span class="text-xs text-zinc-500">{sku.qty} on hand</span>
                    </button>
                  </li>
                {/each}
              </ul>
            </section>
          {/if}

          {#if results.projects.length}
            <section>
              <header class="flex items-center gap-2 px-3 pt-3 text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                <FolderKanban class="h-3.5 w-3.5" /> Projects
              </header>
              <ul class="grid">
                {#each results.projects as p}
                  {@const idx = indexFor('project', p)}
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-3 px-3 py-2 text-left text-sm hover:bg-zinc-50 {idx ===
                      activeIndex
                        ? 'bg-zinc-50 ring-1 ring-inset ring-leah-200'
                        : ''}"
                      onclick={() => handle({ kind: 'project', row: p })}
                      onmouseenter={() => (activeIndex = idx)}
                    >
                      <FolderKanban class="h-4 w-4 text-leah-700" aria-hidden="true" />
                      <span class="flex-1 truncate text-zinc-900">{p.name}</span>
                      <span class="text-xs text-zinc-500">{p.status} · {p.owner}</span>
                    </button>
                  </li>
                {/each}
              </ul>
            </section>
          {/if}

          {#if results.employees.length}
            <section>
              <header class="flex items-center gap-2 px-3 pt-3 text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                <Briefcase class="h-3.5 w-3.5" /> People
              </header>
              <ul class="grid">
                {#each results.employees as e}
                  {@const idx = indexFor('employee', e)}
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-3 px-3 py-2 text-left text-sm hover:bg-zinc-50 {idx ===
                      activeIndex
                        ? 'bg-zinc-50 ring-1 ring-inset ring-leah-200'
                        : ''}"
                      onclick={() => handle({ kind: 'employee', row: e })}
                      onmouseenter={() => (activeIndex = idx)}
                    >
                      <Briefcase class="h-4 w-4 text-leah-700" aria-hidden="true" />
                      <span class="flex-1 truncate text-zinc-900">{e.name}</span>
                      <span class="text-xs text-zinc-500">{e.role} · {e.department}</span>
                    </button>
                  </li>
                {/each}
              </ul>
            </section>
          {/if}
        {/if}
      </div>

      <footer class="flex items-center justify-between border-t border-zinc-100 px-3 py-2 text-[11px] text-zinc-500">
        <span>↑ ↓ to navigate · ↵ to open</span>
        <span class="hidden sm:inline">Ctrl/⌘ K toggles</span>
      </footer>
    </div>
  </div>
{/if}
