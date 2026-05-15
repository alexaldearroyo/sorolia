<script>
  import Users from 'lucide-svelte/icons/users';
  import AlertTriangle from 'lucide-svelte/icons/alert-triangle';
  import Search from 'lucide-svelte/icons/search';
  import Pencil from 'lucide-svelte/icons/pencil';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import Plus from 'lucide-svelte/icons/plus';
  import Package from 'lucide-svelte/icons/package';
  import ScanLine from 'lucide-svelte/icons/scan-line';
  import ShoppingBasket from 'lucide-svelte/icons/shopping-basket';
  import { customerName } from '../workspaceActions.js';
  import EmptyState from '../components/EmptyState.svelte';
  import InventoryFormModal from '../components/InventoryFormModal.svelte';
  import InfoBox from '../components/InfoBox.svelte';
  import Truck from 'lucide-svelte/icons/truck';
  import RefreshCw from 'lucide-svelte/icons/refresh-cw';

  let {
    inventoryEditor = $bindable(null),
    stockFilter = $bindable(/** @type {'all' | 'low' | 'out'} */ ('all')),
    inventory,
    customers,
    highlightSupplierId,
    canAdjust = false,
    canWrite = false,
    canDelete = false,
    onAdjustQty,
    onSetQty,
    onFillUp = () => {},
    onSetReorder = () => {},
    onUpsertInventoryRow,
    onDeleteInventoryRow,
    onOpenSupplier
  } = $props();

  let query = $state('');
  function stockState(row) {
    if (row.qty <= 0) return 'out';
    if (row.qty <= row.reorder) return 'low';
    return 'ok';
  }

  /* Pick a colour palette per tile so the wall of items looks like a
     supermarket checkout grid: each button is a saturated panel that draws
     the eye, but stock state still wins (out=rose, low=amber). */
  const TILE_PALETTES = [
    'from-sky-500 to-sky-600',
    'from-emerald-500 to-emerald-600',
    'from-violet-500 to-violet-600',
    'from-amber-500 to-amber-600',
    'from-fuchsia-500 to-fuchsia-600',
    'from-teal-500 to-teal-600',
    'from-indigo-500 to-indigo-600',
    'from-rose-500 to-rose-600'
  ];

  function tilePalette(row, state) {
    if (state === 'out') return 'from-rose-600 to-rose-700';
    if (state === 'low') return 'from-amber-500 to-amber-600';
    let h = 0;
    const code = String(row.code ?? row.id ?? '');
    for (let i = 0; i < code.length; i++) h = (h + code.charCodeAt(i)) % TILE_PALETTES.length;
    return TILE_PALETTES[h];
  }

  function shortLabel(row) {
    const code = String(row.code ?? '');
    if (!code) return '?';
    return code.slice(0, 3).toUpperCase();
  }

  function commit(id, value) {
    const n = Math.max(0, Math.round(Number(value) || 0));
    onSetQty?.(id, n);
  }

  function openRow(id) {
    if (!canWrite) return;
    inventoryEditor = { mode: 'edit', id };
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

  let lowItems = $derived(inventory.filter((r) => r.qty <= r.reorder));
  let outItems = $derived(inventory.filter((r) => r.qty <= 0));
  let totalUnits = $derived(inventory.reduce((sum, r) => sum + (Number(r.qty) || 0), 0));
  let totalValue = $derived(
    inventory.reduce((sum, r) => sum + (Number(r.qty) || 0) * (Number(r.unitCost) || 0), 0)
  );
  let euro = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  });

  const filterButtons = [
    { id: 'all', label: 'All items', tone: 'bg-leah-900 text-white border-leah-900' },
    { id: 'low', label: 'Below reorder', tone: 'bg-amber-500 text-white border-amber-500' },
    { id: 'out', label: 'Stock-out', tone: 'bg-rose-600 text-white border-rose-600' }
  ];
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

<section
  class="overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-leah-900 via-leah-800 to-leah-900 p-4 shadow-lg sm:p-6 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
  aria-label="Inventory checkout"
>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <div class="flex flex-wrap items-center gap-3">
        <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
          <ScanLine class="h-3.5 w-3.5" aria-hidden="true" />
          Self-checkout
        </span>
        <span class="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
          {inventory.length} SKUs
        </span>
        {#if outItems.length}
          <span class="rounded-full bg-rose-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
            {outItems.length} out
          </span>
        {/if}
        {#if lowItems.length - outItems.length > 0}
          <span class="rounded-full bg-amber-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
            {lowItems.length - outItems.length} low
          </span>
        {/if}
      </div>

      <div class="relative">
        <Search class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-leah-900" aria-hidden="true" />
        <input
          bind:value={query}
          type="search"
          placeholder="Scan or search · SKU, name, supplier"
          class="w-full rounded-2xl border-2 border-white/20 bg-white py-4 pl-12 pr-4 text-base font-medium text-leah-900 shadow-inner placeholder:text-leah-700/60 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200"
        />
      </div>

      <div class="flex flex-wrap gap-2">
        {#each filterButtons as o}
          <button
            type="button"
            aria-pressed={stockFilter === o.id}
            class="rounded-2xl border-2 px-5 py-3 text-sm font-extrabold uppercase tracking-wide transition {stockFilter === o.id
              ? `${o.tone} shadow-lg shadow-black/20 scale-[1.02]`
              : 'border-white/20 bg-white/10 text-white hover:bg-white/20'}"
            onclick={() => (stockFilter = o.id)}
          >
            {o.label}
          </button>
        {/each}
      </div>

      {#if filtered.length === 0}
        <div class="rounded-2xl bg-white/95 p-6">
          <EmptyState
            icon="📦"
            title={query || stockFilter !== 'all' ? 'No SKUs match your filter' : 'No SKUs yet'}
            body={query || stockFilter !== 'all' ? 'Try clearing search or filters.' : (canWrite ? 'Add your first SKU to start tracking stock.' : 'Inventory is empty for now.')}
            action={canWrite && !(query || stockFilter !== 'all') ? { label: 'New SKU', onClick: () => (inventoryEditor = { mode: 'create' }), icon: '＋' } : null}
          />
        </div>
      {:else}
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          {#each filtered as row}
            {@const state = stockState(row)}
            {@const palette = tilePalette(row, state)}
            {@const highlighted = highlightSupplierId === row.supplierCustomerId}
            <article
              class="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-0.5 hover:shadow-xl {highlighted ? 'ring-4 ring-amber-300' : ''}"
            >
              <button
                type="button"
                onclick={() => openRow(row.id)}
                class="flex w-full flex-col items-stretch text-left disabled:cursor-default"
                disabled={!canWrite}
                aria-label={canWrite ? `Edit ${row.code} · ${row.name}` : `${row.code} · ${row.name}`}
              >
                <div class="relative flex aspect-[5/3] items-center justify-center bg-gradient-to-br {palette} text-white">
                  <Package class="absolute right-3 top-3 h-5 w-5 opacity-30" aria-hidden="true" />
                  <span class="text-3xl font-black tracking-tight drop-shadow-md sm:text-4xl">{shortLabel(row)}</span>
                  {#if state === 'out'}
                    <span class="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-rose-700">
                      <AlertTriangle class="h-3 w-3" aria-hidden="true" />
                      out
                    </span>
                  {:else if state === 'low'}
                    <span class="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-amber-700">
                      <AlertTriangle class="h-3 w-3" aria-hidden="true" />
                      low
                    </span>
                  {/if}
                </div>
                <div class="flex flex-1 flex-col gap-0.5 p-3">
                  <p class="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{row.code}</p>
                  <p class="text-sm font-bold text-zinc-900">{row.name}</p>
                  {#if row.supplierCustomerId}
                    <p class="mt-0.5 truncate text-[11px] text-zinc-500">
                      {customerName(customers, row.supplierCustomerId)}
                    </p>
                  {/if}
                  {#if (row.orderedQty ?? 0) > 0}
                    <p class="mt-1 inline-flex items-center gap-1 self-start rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-sky-900">
                      <Truck class="h-3 w-3" aria-hidden="true" />
                      Ordered {row.orderedQty}{row.orderEta ? ` · ${row.orderEta}` : ''}
                    </p>
                  {/if}
                  <div class="mt-2 flex items-end justify-between">
                    <div>
                      <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-400">On hand</p>
                      <p class="text-2xl font-black tabular-nums text-zinc-900">{row.qty}</p>
                    </div>
                    <div class="text-right">
                      <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-400">Reorder</p>
                      <p class="text-sm font-semibold tabular-nums text-zinc-500">{row.reorder}</p>
                      {#if row.unitCost}
                        <p class="mt-1 text-[10px] font-semibold tabular-nums text-zinc-500">{euro.format(row.unitCost)}</p>
                      {/if}
                    </div>
                  </div>
                </div>
              </button>

              {#if canAdjust || canDelete || row.supplierCustomerId}
                <div class="flex flex-col gap-1 border-t border-zinc-100 bg-zinc-50/80 p-1.5">
                  {#if canAdjust}
                    <div class="flex items-stretch gap-1">
                      <button
                        type="button"
                        class="flex-1 rounded-xl bg-rose-100 px-2 py-2 text-base font-black text-rose-700 transition hover:bg-rose-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                        onclick={() => onAdjustQty?.(row.id, -1)}
                        disabled={row.qty <= 0}
                        aria-label="Decrease {row.code} by one"
                        title="−1"
                      >
                        −
                      </button>
                      <button
                        type="button"
                        class="flex-1 rounded-xl bg-emerald-100 px-2 py-2 text-base font-black text-emerald-700 transition hover:bg-emerald-200 active:scale-95"
                        onclick={() => onAdjustQty?.(row.id, 1)}
                        aria-label="Increase {row.code} by one"
                        title="+1"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="inline-flex items-center gap-1 rounded-xl bg-leah-100 px-2 text-xs font-bold text-leah-900 transition hover:bg-leah-200"
                        onclick={() => onFillUp?.(row.id)}
                        title="Refill to 2× reorder point"
                        aria-label="Fill up {row.code}"
                      >
                        <RefreshCw class="h-3.5 w-3.5" aria-hidden="true" />
                        Fill
                      </button>
                    </div>
                    <label class="flex items-center justify-between gap-2 px-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                      Warning trigger
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={row.reorder}
                        onchange={(e) => onSetReorder?.(row.id, e.currentTarget.value)}
                        class="w-16 rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-right text-xs tabular-nums text-zinc-800"
                      />
                    </label>
                  {/if}
                  <div class="flex items-stretch gap-1">
                    {#if row.supplierCustomerId}
                      <button
                        type="button"
                        class="flex-1 rounded-xl border border-zinc-200 bg-white px-2 py-1 text-xs text-zinc-600 transition hover:border-leah-300 hover:text-leah-800"
                        onclick={() => onOpenSupplier?.(row.supplierCustomerId)}
                        aria-label="Open supplier"
                        title="Supplier"
                      >
                        <Users class="mx-auto h-4 w-4" aria-hidden="true" />
                      </button>
                    {/if}
                    {#if canDelete}
                      <button
                        type="button"
                        class="rounded-xl border border-rose-200 bg-white px-2 py-1 text-rose-700 transition hover:bg-rose-50"
                        onclick={() => onDeleteInventoryRow?.(row.id)}
                        aria-label="Delete {row.code}"
                        title="Delete"
                      >
                        <Trash2 class="h-4 w-4" aria-hidden="true" />
                      </button>
                    {/if}
                  </div>
                </div>
              {/if}
            </article>
          {/each}
        </div>
      {/if}
    </div>

    {#if canWrite}
      <div class="flex justify-end">
        <button
          type="button"
          class="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-5 py-3 text-sm font-extrabold uppercase tracking-wider text-leah-950 shadow-md transition hover:bg-amber-300 active:scale-[0.98]"
          onclick={() => (inventoryEditor = { mode: 'create' })}
        >
          <Plus class="h-4 w-4" aria-hidden="true" />
          Add SKU
        </button>
      </div>
    {/if}
  </div>
</section>
