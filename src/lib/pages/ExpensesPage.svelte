<script>
  import Plus from 'lucide-svelte/icons/plus';
  import Download from 'lucide-svelte/icons/download';
  import Pencil from 'lucide-svelte/icons/pencil';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import Receipt from 'lucide-svelte/icons/receipt';
  import { customerName } from '../workspaceActions.js';
  import ExpenseFormModal from '../components/ExpenseFormModal.svelte';

  let {
    expenseEditor = $bindable(null),
    expenseItems,
    expenseTotal,
    customers,
    currency,
    onUpsertExpense,
    onDeleteExpense,
    onDownloadCsv,
    pendingExpenseEditId = null,
    onConsumedExpenseDeepLink
  } = $props();

  $effect(() => {
    const id = pendingExpenseEditId;
    if (!id) return;
    expenseEditor = { mode: 'edit', id };
    queueMicrotask(() => onConsumedExpenseDeepLink?.());
  });

  let expenseDraft = $derived(
    expenseEditor?.mode === 'edit'
      ? expenseItems.find((e) => e.id === expenseEditor.id) ?? null
      : null
  );

  let vendor = $state('');
  let type = $state('General');
  let amount = $state('');
  let supplierId = $state('');

  let quickErrors = $state({ vendor: '', amount: '' });

  function clearQuickErrors() {
    quickErrors = { vendor: '', amount: '' };
  }

  function closeEditor() {
    expenseEditor = null;
  }

  function saveFromModal(payload) {
    onUpsertExpense(payload);
    closeEditor();
  }

  function deleteFromModal(id) {
    onDeleteExpense(id);
  }

  function submitQuick() {
    clearQuickErrors();
    let ok = true;
    if (!vendor.trim()) {
      quickErrors.vendor = 'Vendor is required.';
      ok = false;
    }
    const n = Number(amount);
    if (!String(amount).trim() || Number.isNaN(n) || n <= 0) {
      quickErrors.amount = 'Enter an amount greater than zero.';
      ok = false;
    }
    if (!ok) return;
    onUpsertExpense({
      vendor: vendor.trim(),
      type,
      amount: Math.round(n),
      date: new Date().toLocaleDateString('de-DE'),
      supplierCustomerId: supplierId || null
    });
    vendor = '';
    amount = '';
    supplierId = '';
    type = 'General';
  }
</script>

<ExpenseFormModal
  editor={expenseEditor}
  draftRow={expenseDraft}
  {customers}
  onClose={closeEditor}
  onSave={saveFromModal}
  onDelete={deleteFromModal}
/>

<section class="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.9fr)]">
  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <div class="rounded-xl border border-dashed border-zinc-300 bg-zinc-50/50 p-4">
      <p class="text-xs font-semibold uppercase tracking-wide text-zinc-500">Quick post (demo)</p>
      <div class="mt-3 grid gap-3 sm:grid-cols-2">
        <label class="grid gap-1 text-sm font-medium text-zinc-700">
          Vendor
          <input
            bind:value={vendor}
            oninput={clearQuickErrors}
            class="rounded-lg border bg-white px-3 py-2 text-sm {quickErrors.vendor ? 'border-rose-500' : 'border-zinc-200'}"
            placeholder="e.g. AWS EU billing"
          />
          {#if quickErrors.vendor}
            <span class="text-xs font-medium text-rose-700">{quickErrors.vendor}</span>
          {/if}
        </label>
        <label class="grid gap-1 text-sm font-medium text-zinc-700">
          Amount (EUR)
          <input
            bind:value={amount}
            oninput={clearQuickErrors}
            type="number"
            min="1"
            step="1"
            class="rounded-lg border bg-white px-3 py-2 text-sm tabular-nums {quickErrors.amount
              ? 'border-rose-500'
              : 'border-zinc-200'}"
            placeholder="0"
          />
          {#if quickErrors.amount}
            <span class="text-xs font-medium text-rose-700">{quickErrors.amount}</span>
          {/if}
        </label>
        <label class="grid gap-1 text-sm font-medium text-zinc-700">
          Type
          <select bind:value={type} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
            <option>General</option>
            <option>Software</option>
            <option>Infrastructure</option>
            <option>Travel</option>
            <option>Legal</option>
            <option>Fixed</option>
          </select>
        </label>
        <label class="grid gap-1 text-sm font-medium text-zinc-700">
          Supplier (optional)
          <select bind:value={supplierId} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
            <option value="">— none —</option>
            {#each customers as c}
              <option value={c.id}>{c.name}</option>
            {/each}
          </select>
        </label>
      </div>
      <div class="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          class="inline-flex items-center justify-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"
          onclick={submitQuick}
        >
          <Plus class="h-4 w-4" aria-hidden="true" />
          Add expense
        </button>
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-leah-900 hover:bg-zinc-50"
          onclick={() => (expenseEditor = { mode: 'create' })}
        >
          Open full form
        </button>
      </div>
    </div>

    {#if expenseItems.length === 0}
      <div class="mt-6 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-zinc-200 bg-zinc-50/40 px-4 py-10 text-center">
        <Receipt class="h-6 w-6 text-zinc-400" aria-hidden="true" />
        <p class="text-sm font-semibold text-zinc-700">No expenses yet</p>
        <p class="max-w-xs text-xs text-zinc-500">
          Use the quick post above or hit “New expense” at the top of the page to add the first one.
        </p>
      </div>
    {:else}
      <ul class="mt-6 grid gap-2">
        {#each expenseItems as item}
          <li
            class="flex flex-col gap-3 rounded-lg border border-zinc-100 bg-zinc-50/80 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div class="min-w-0 flex-1">
              <span class="font-semibold text-zinc-900">{item.vendor}</span>
              <span class="mt-0.5 block text-sm text-zinc-500">
                {item.type} · {item.date}
                {#if item.supplierCustomerId}
                  <span class="mt-1 block text-xs font-medium text-leah-800">
                    Supplier: {customerName(customers, item.supplierCustomerId)}
                  </span>
                {/if}
              </span>
            </div>
            <div class="flex shrink-0 items-center gap-3">
              <span class="text-lg font-bold tabular-nums text-zinc-900">{currency(item.amount)}</span>
              <div class="flex gap-1">
                <button
                  type="button"
                  class="rounded-md border border-zinc-200 bg-white p-2 text-zinc-700 hover:bg-zinc-50"
                  onclick={() => (expenseEditor = { mode: 'edit', id: item.id })}
                  aria-label="Edit expense"
                  title="Edit expense"
                >
                  <Pencil class="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  class="rounded-md border border-rose-200 bg-white p-2 text-rose-800 hover:bg-rose-50"
                  onclick={() => onDeleteExpense(item.id)}
                  aria-label="Delete expense"
                  title="Delete expense"
                >
                  <Trash2 class="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    {/if}
  </article>

  <article
    class="flex flex-col justify-center gap-4 rounded-xl border border-leah-800 bg-gradient-to-br from-leah-900 to-leah-950 p-6 text-white shadow-lg"
  >
    <h2 class="text-lg font-bold">Tax export</h2>
    <p class="text-sm leading-relaxed text-sky-100/90">
      CSV includes supplier names resolved from the customer master — same links as Finance and Inventory.
    </p>
    <p class="text-3xl font-extrabold tracking-tight">{currency(expenseTotal)}</p>
    <button
      type="button"
      class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-bold text-leah-900 shadow-sm hover:bg-sky-50"
      onclick={onDownloadCsv}
    >
      <Download class="h-4 w-4" aria-hidden="true" />
      Export CSV
    </button>
  </article>
</section>
