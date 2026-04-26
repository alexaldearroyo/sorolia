<script>
  import Users from 'lucide-svelte/icons/users';
  import AlertTriangle from 'lucide-svelte/icons/alert-triangle';
  import { customerName } from '../workspaceActions.js';

  let { inventory, customers, highlightSupplierId, onAdjustQty, onOpenSupplier } = $props();

  function stockState(row) {
    if (row.qty <= 0) return 'out';
    if (row.qty <= row.reorder) return 'low';
    return 'ok';
  }
</script>

<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
  {#if inventory.length === 0}
    <div class="flex flex-col items-center justify-center gap-2 px-4 py-16 text-center">
      <p class="text-base font-semibold text-zinc-800">No SKUs in stock</p>
      <p class="max-w-sm text-sm text-zinc-500">
        Inventory rows in this demo are seeded — clear them and refresh the demo data to start over.
      </p>
    </div>
  {:else}
    <div class="overflow-x-auto rounded-lg border border-zinc-200">
      <table class="w-full min-w-[560px] text-left text-sm">
        <caption class="sr-only">Inventory tied to supplier customers</caption>
        <thead>
          <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500">
            <th class="px-4 py-3" scope="col">SKU</th>
            <th class="px-4 py-3" scope="col">Item</th>
            <th class="px-4 py-3 text-right" scope="col">On hand</th>
            <th class="px-4 py-3 text-right" scope="col">Reorder</th>
            <th class="px-4 py-3" scope="col">Supplier</th>
            <th class="px-4 py-3 text-right" scope="col">Adjust</th>
          </tr>
        </thead>
        <tbody>
          {#each inventory as row}
            {@const state = stockState(row)}
            <tr
              class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80 {highlightSupplierId ===
              row.supplierCustomerId
                ? 'bg-sky-50/60'
                : ''} {state === 'out' ? 'bg-rose-50/60' : state === 'low' ? 'bg-amber-50/40' : ''}"
            >
              <td class="px-4 py-3 font-mono text-xs font-semibold text-zinc-700">{row.code}</td>
              <td class="px-4 py-3 font-medium text-zinc-900">{row.name}</td>
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
                  <span class="tabular-nums font-semibold text-zinc-900">{row.qty}</span>
                </div>
              </td>
              <td class="px-4 py-3 text-right tabular-nums text-zinc-500">{row.reorder}</td>
              <td class="px-4 py-3">
                <button
                  type="button"
                  class="inline-flex items-center gap-1 text-left text-sm font-medium text-leah-800 hover:underline"
                  onclick={() => onOpenSupplier(row.supplierCustomerId)}
                >
                  <Users class="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden="true" />
                  {customerName(customers, row.supplierCustomerId)}
                </button>
              </td>
              <td class="px-4 py-3 text-right">
                <div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5">
                  <button
                    type="button"
                    class="rounded-md px-2 py-1 text-xs font-bold text-zinc-700 hover:bg-white"
                    onclick={() => onAdjustQty(row.id, -1)}
                    aria-label="Decrease {row.code} quantity"
                    title="Decrease quantity"
                  >
                    −
                  </button>
                  <button
                    type="button"
                    class="rounded-md px-2 py-1 text-xs font-bold text-zinc-700 hover:bg-white"
                    onclick={() => onAdjustQty(row.id, 1)}
                    aria-label="Increase {row.code} quantity"
                    title="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</section>
