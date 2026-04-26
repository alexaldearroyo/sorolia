<script>
  import Users from 'lucide-svelte/icons/users';
  import { customerName } from '../workspaceActions.js';

  let { inventory, customers, highlightSupplierId, onAdjustQty, onOpenSupplier } = $props();
</script>

<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
  <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h2 class="text-xl font-bold text-zinc-900">Inventory</h2>
      <p class="mt-1 text-sm text-zinc-500">
        SKUs tied to supplier customers · reorder hints are demo-only · {inventory.length} lines
      </p>
    </div>
  </div>

  <div class="mt-6 overflow-x-auto rounded-lg border border-zinc-200">
    <table class="w-full min-w-[560px] text-left text-sm">
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
          <tr
            class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80 {highlightSupplierId ===
            row.supplierCustomerId
              ? 'bg-sky-50/60'
              : ''}"
          >
            <td class="px-4 py-3 font-mono text-xs font-semibold text-zinc-700">{row.code}</td>
            <td class="px-4 py-3 font-medium text-zinc-900">{row.name}</td>
            <td class="px-4 py-3 text-right tabular-nums font-semibold text-zinc-900">{row.qty}</td>
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
                >
                  −
                </button>
                <button
                  type="button"
                  class="rounded-md px-2 py-1 text-xs font-bold text-zinc-700 hover:bg-white"
                  onclick={() => onAdjustQty(row.id, 1)}
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
</section>
