<script>
  import Users from 'lucide-svelte/icons/users';
  import AlertTriangle from 'lucide-svelte/icons/alert-triangle';
  import Search from 'lucide-svelte/icons/search';
  import Pencil from 'lucide-svelte/icons/pencil';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import Plus from 'lucide-svelte/icons/plus';
  import { customerName } from '../workspaceActions.js';
  import EmptyState from '../components/EmptyState.svelte';
  import InventoryFormModal from '../components/InventoryFormModal.svelte';

  let {
    inventoryEditor = $bindable(null),
    inventory,
    customers,
    highlightSupplierId,
    canAdjust = false,
    canWrite = false,
    canDelete = false,
    onAdjustQty,
    onSetQty,
    onUpsertInventoryRow,
    onDeleteInventoryRow,
    onOpenSupplier
  } = $props();

  let query = $state('');
  let stockFilter = $state(/** @type {'all' | 'low' | 'out'} */ ('all'));

  function stockState(row) {
    if (row.qty <= 0) return 'out';
    if (row.qty <= row.reorder) return 'low';
    return 'ok';
  }

  function commit(id, value) {
    const n = Math.max(0, Math.round(Number(value) || 0));
    onSetQty?.(id, n);
  }

  function openRow(id) {
    if (!canWrite) return;
    inventoryEditor = { mode: 'edit', id };
  }

  function onRowKey(e, id) {
    if (!canWrite) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openRow(id);
    }
  }

  function stop(e) {
    e.stopPropagation();
  }

  let editingRow = $derived(
    inventoryEditor?.mode === 'edit'
      ? inventory.find((r) => r.id === inventoryEditor.id) ?? null
      : null
  );

  function closeEditor() {
    inventoryEditor = null;
  }

  function saveFromModal(payload) {
    onUpsertInventoryRow?.(payload);
    closeEditor();
  }

  function deleteFromModal(id) {
    onDeleteInventoryRow?.(id);
  }

  let filtered = $derived.by(() => {
    let rows = inventory;
    if (stockFilter === 'low') rows = rows.filter((r) => r.qty <= r.reorder && r.qty > 0);
    if (stockFilter === 'out') rows = rows.filter((r) => r.qty <= 0);
    if (query.trim()) {
      const q = query.toLowerCase();
      rows = rows.filter((r) =>
        [r.code, r.name, customerName(customers, r.supplierCustomerId)].some((v) =>
          (v ?? '').toString().toLowerCase().includes(q)
        )
      );
    }
    return rows;
  });
</script>

<InventoryFormModal
  editor={inventoryEditor}
  draftRow={editingRow}
  {customers}
  {canDelete}
  onClose={closeEditor}
  onSave={saveFromModal}
  onDelete={deleteFromModal}
/>

<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
  <header class="mb-4 flex flex-wrap items-center gap-3">
    <div class="relative flex-1 min-w-[14rem]">
      <Search class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" aria-hidden="true" />
      <input
        bind:value={query}
        type="search"
        placeholder="Search SKUs, items or suppliers"
        class="w-full rounded-lg border border-zinc-200 bg-white py-2 pl-9 pr-3 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />
    </div>
    <div class="flex flex-wrap gap-2">
      {#each [{ id: 'all', label: 'All' }, { id: 'low', label: 'Below reorder' }, { id: 'out', label: 'Stock-out' }] as o}
        <button
          type="button"
          aria-pressed={stockFilter === o.id}
          class="rounded-full border px-3 py-1 text-xs font-semibold {stockFilter === o.id
            ? 'border-leah-900 bg-leah-900 text-white'
            : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'}"
          onclick={() => (stockFilter = o.id)}
        >
          {o.label}
        </button>
      {/each}
    </div>
    {#if canWrite}
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-leah-950"
        onclick={() => (inventoryEditor = { mode: 'create' })}
      >
        <Plus class="h-3.5 w-3.5" aria-hidden="true" />
        New SKU
      </button>
    {/if}
  </header>

  {#if filtered.length === 0}
    <EmptyState
      icon="📦"
      title={query || stockFilter !== 'all' ? 'No SKUs match your filter' : 'No SKUs yet'}
      body={query || stockFilter !== 'all' ? 'Try clearing search or filters.' : (canWrite ? 'Add your first SKU to start tracking stock.' : 'Inventory is empty for now.')}
      action={canWrite && !(query || stockFilter !== 'all') ? { label: 'New SKU', onClick: () => (inventoryEditor = { mode: 'create' }), icon: '＋' } : null}
    />
  {:else}
    <div class="overflow-x-auto rounded-lg border border-zinc-200 dark:border-slate-700">
      <table class="w-full min-w-[720px] text-left text-sm">
        <caption class="sr-only">Inventory tied to supplier customers</caption>
        <thead>
          <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            <th class="px-4 py-3" scope="col">SKU</th>
            <th class="px-4 py-3" scope="col">Item</th>
            <th class="px-4 py-3 text-right" scope="col">On hand</th>
            <th class="px-4 py-3 text-right" scope="col">Reorder</th>
            <th class="px-4 py-3" scope="col">Supplier</th>
            <th class="px-4 py-3 text-right" scope="col">Adjust</th>
            <th class="px-4 py-3 text-right" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each filtered as row}
            {@const state = stockState(row)}
            <tr
              role={canWrite ? 'button' : null}
              tabindex={canWrite ? 0 : null}
              aria-label={canWrite ? `Edit ${row.code} · ${row.name}` : null}
              onclick={canWrite ? () => openRow(row.id) : null}
              onkeydown={canWrite ? (e) => onRowKey(e, row.id) : null}
              class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-leah-700/40 dark:border-slate-800 dark:hover:bg-slate-800/60 {canWrite
                ? 'cursor-pointer'
                : ''} {highlightSupplierId === row.supplierCustomerId
                ? 'bg-sky-50/60 dark:bg-sky-900/20'
                : ''} {state === 'out' ? 'bg-rose-50/60 dark:bg-rose-900/20' : state === 'low' ? 'bg-amber-50/40 dark:bg-amber-900/15' : ''}"
            >
              <td class="px-4 py-3 font-mono text-xs font-semibold text-zinc-700 dark:text-slate-200">{row.code}</td>
              <td class="px-4 py-3">
                <p class="font-medium text-zinc-900 dark:text-slate-100">{row.name}</p>
                {#if row.notes}
                  <p class="mt-0.5 truncate text-xs text-zinc-500 dark:text-slate-400">{row.notes}</p>
                {/if}
              </td>
              <td class="px-4 py-3 text-right">
                <div class="inline-flex items-center justify-end gap-1.5">
                  {#if state !== 'ok'}
                    <span
                      class="inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide {state ===
                      'out'
                        ? 'border-rose-300 bg-rose-100 text-rose-900'
                        : 'border-amber-300 bg-amber-100 text-amber-900'}"
                      title={state === 'out' ? 'Stock-out' : 'At or below reorder point'}
                    >
                      <AlertTriangle class="h-3 w-3" aria-hidden="true" />
                      {state === 'out' ? 'out' : 'low'}
                    </span>
                  {/if}
                  <span class="tabular-nums font-semibold text-zinc-900 dark:text-slate-100">{row.qty}</span>
                </div>
              </td>
              <td class="px-4 py-3 text-right tabular-nums text-zinc-500 dark:text-slate-400">{row.reorder}</td>
              <td class="px-4 py-3">
                {#if row.supplierCustomerId}
                  <button
                    type="button"
                    class="inline-flex items-center gap-1 text-left text-sm font-medium text-leah-800 hover:underline dark:text-leah-700"
                    onclick={(e) => { stop(e); onOpenSupplier?.(row.supplierCustomerId); }}
                  >
                    <Users class="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden="true" />
                    {customerName(customers, row.supplierCustomerId)}
                  </button>
                {:else}
                  <span class="text-xs text-zinc-400 dark:text-slate-500">—</span>
                {/if}
              </td>
              <td class="px-4 py-3 text-right">
                {#if canAdjust}
                  <div class="inline-flex items-center gap-2">
                    <div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5 dark:border-slate-700 dark:bg-slate-800">
                      <button
                        type="button"
                        class="rounded-md px-2 py-1 text-xs font-bold text-zinc-700 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-900"
                        onclick={(e) => { stop(e); onAdjustQty(row.id, -1); }}
                        aria-label="Decrease {row.code} quantity"
                        title="Decrease quantity"
                      >
                        −
                      </button>
                      <button
                        type="button"
                        class="rounded-md px-2 py-1 text-xs font-bold text-zinc-700 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-900"
                        onclick={(e) => { stop(e); onAdjustQty(row.id, 1); }}
                        aria-label="Increase {row.code} quantity"
                        title="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    {#if onSetQty}
                      <input
                        type="number"
                        value={row.qty}
                        min="0"
                        step="1"
                        onclick={stop}
                        onchange={(e) => commit(row.id, e.currentTarget.value)}
                        class="w-16 rounded-md border border-zinc-200 bg-white px-2 py-1 text-right text-xs tabular-nums dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                        aria-label="Set {row.code} quantity"
                      />
                    {/if}
                  </div>
                {:else}
                  <span class="text-xs text-zinc-400">read-only</span>
                {/if}
              </td>
              <td class="px-4 py-3 text-right">
                <div class="inline-flex gap-1">
                  {#if canWrite}
                    <button
                      type="button"
                      class="rounded-md border border-zinc-200 bg-white p-1.5 text-zinc-600 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                      onclick={(e) => { stop(e); inventoryEditor = { mode: 'edit', id: row.id }; }}
                      aria-label="Edit {row.code}"
                      title="Edit SKU"
                    >
                      <Pencil class="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  {/if}
                  {#if canDelete}
                    <button
                      type="button"
                      class="rounded-md border border-rose-200 bg-white p-1.5 text-rose-700 hover:bg-rose-50 dark:border-rose-700 dark:bg-slate-900 dark:text-rose-200 dark:hover:bg-rose-900/30"
                      onclick={(e) => { stop(e); onDeleteInventoryRow?.(row.id); }}
                      aria-label="Delete {row.code}"
                      title="Delete SKU"
                    >
                      <Trash2 class="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  {/if}
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</section>
