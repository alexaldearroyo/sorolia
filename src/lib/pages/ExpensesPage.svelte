<script>
  import Plus from 'lucide-svelte/icons/plus';
  import Download from 'lucide-svelte/icons/download';
  import Pencil from 'lucide-svelte/icons/pencil';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import ChevronDown from 'lucide-svelte/icons/chevron-down';
  import { customerName } from '../workspaceActions.js';
  import { formatDe } from '../format.js';
  import ExpenseFormModal from '../components/ExpenseFormModal.svelte';
  import EmptyState from '../components/EmptyState.svelte';

  let {
    expenseEditor = $bindable(null),
    expenseItems,
    expenseTotal,
    customers,
    currency,
    canWrite = false,
    canDelete = false,
    canExport = false,
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
  let quickOpen = $state(false);

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
      date: formatDe(),
      supplierCustomerId: supplierId || null
    });
    vendor = '';
    amount = '';
    supplierId = '';
    type = 'General';
    quickOpen = false;
  }

  /** Top 3 categories by amount, used in the KPI strip. */
  let breakdown = $derived.by(() => {
    const map = new Map();
    for (const e of expenseItems) {
      map.set(e.type, (map.get(e.type) ?? 0) + e.amount);
    }
    return Array.from(map.entries())
      .map(([label, total]) => ({ label, total, share: expenseTotal ? total / expenseTotal : 0 }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 3);
  });

  let topCategory = $derived(breakdown[0] ?? null);
</script>

<ExpenseFormModal
  editor={expenseEditor}
  draftRow={expenseDraft}
  {customers}
  {canDelete}
  onClose={closeEditor}
  onSave={saveFromModal}
  onDelete={deleteFromModal}
/>

<section class="grid gap-4">
  <header class="rounded-xl border border-zinc-200/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div class="flex flex-wrap items-center gap-4">
      <div class="min-w-[10rem]">
        <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Total OpEx</p>
        <p class="mt-1 text-2xl font-extrabold tabular-nums text-zinc-900 dark:text-slate-100">{currency(expenseTotal)}</p>
        <p class="text-xs text-zinc-500 dark:text-slate-400">{expenseItems.length} posting{expenseItems.length === 1 ? '' : 's'}</p>
      </div>

      {#if topCategory}
        <div class="min-w-[10rem] border-l border-zinc-100 pl-4 dark:border-slate-800">
          <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Top category</p>
          <p class="mt-1 text-base font-semibold text-zinc-900 dark:text-slate-100">{topCategory.label}</p>
          <p class="text-xs tabular-nums text-zinc-500 dark:text-slate-400">{currency(topCategory.total)} · {Math.round(topCategory.share * 100)}%</p>
        </div>

        <div class="hidden flex-1 min-w-[14rem] sm:block">
          <p class="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-slate-400">Mix</p>
          <div class="mt-1 flex h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-slate-800" aria-hidden="true">
            {#each breakdown as bucket, i}
              <div
                class="h-full {i === 0 ? 'bg-leah-700' : i === 1 ? 'bg-sky-400' : 'bg-amber-400'}"
                style={`width:${Math.max(6, bucket.share * 100)}%`}
                title={`${bucket.label} · ${currency(bucket.total)}`}
              ></div>
            {/each}
          </div>
          <p class="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-[11px] text-zinc-500 dark:text-slate-400">
            {#each breakdown as bucket, i}
              <span class="inline-flex items-center gap-1">
                <i class="h-2 w-2 rounded-full {i === 0 ? 'bg-leah-700' : i === 1 ? 'bg-sky-400' : 'bg-amber-400'}"></i>
                {bucket.label}
              </span>
            {/each}
          </p>
        </div>
      {/if}

      <div class="ml-auto flex flex-wrap items-center gap-2">
        {#if canWrite}
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            onclick={() => (quickOpen = !quickOpen)}
            aria-expanded={quickOpen}
          >
            <Plus class="h-3.5 w-3.5" aria-hidden="true" />
            Quick post
            <ChevronDown class="h-3.5 w-3.5 transition {quickOpen ? 'rotate-180' : ''}" aria-hidden="true" />
          </button>
        {/if}
        {#if canExport}
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            onclick={onDownloadCsv}
            title="CSV with supplier names resolved against the customer master"
          >
            <Download class="h-3.5 w-3.5" aria-hidden="true" />
            Export CSV
          </button>
        {/if}
      </div>
    </div>

    {#if canWrite && quickOpen}
      <div class="mt-4 grid gap-2 border-t border-zinc-100 pt-4 sm:grid-cols-[1.4fr_0.7fr_0.9fr_1fr_auto] dark:border-slate-800">
        <label class="grid gap-1 text-xs font-medium text-zinc-600 dark:text-slate-300">
          <span class="sr-only sm:not-sr-only">Vendor</span>
          <input
            bind:value={vendor}
            oninput={clearQuickErrors}
            class="rounded-lg border bg-white px-3 py-2 text-sm dark:bg-slate-900 dark:text-slate-100 {quickErrors.vendor ? 'border-rose-500' : 'border-zinc-200 dark:border-slate-700'}"
            placeholder="Vendor (e.g. AWS)"
          />
        </label>
        <label class="grid gap-1 text-xs font-medium text-zinc-600 dark:text-slate-300">
          <span class="sr-only sm:not-sr-only">Amount</span>
          <input
            bind:value={amount}
            oninput={clearQuickErrors}
            type="number"
            min="1"
            step="1"
            class="rounded-lg border bg-white px-3 py-2 text-sm tabular-nums dark:bg-slate-900 dark:text-slate-100 {quickErrors.amount ? 'border-rose-500' : 'border-zinc-200 dark:border-slate-700'}"
            placeholder="€"
          />
        </label>
        <label class="grid gap-1 text-xs font-medium text-zinc-600 dark:text-slate-300">
          <span class="sr-only sm:not-sr-only">Type</span>
          <select bind:value={type} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
            <option>General</option>
            <option>Software</option>
            <option>Infrastructure</option>
            <option>Travel</option>
            <option>Legal</option>
            <option>Fixed</option>
          </select>
        </label>
        <label class="grid gap-1 text-xs font-medium text-zinc-600 dark:text-slate-300">
          <span class="sr-only sm:not-sr-only">Supplier</span>
          <select bind:value={supplierId} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
            <option value="">— Supplier —</option>
            {#each customers as c}
              <option value={c.id}>{c.name}</option>
            {/each}
          </select>
        </label>
        <div class="flex items-end gap-2">
          <button
            type="button"
            class="inline-flex h-[38px] items-center gap-1.5 rounded-lg bg-leah-900 px-3 text-xs font-semibold text-white hover:bg-leah-950"
            onclick={submitQuick}
          >
            <Plus class="h-3.5 w-3.5" aria-hidden="true" />
            Add
          </button>
          <button
            type="button"
            class="text-xs font-semibold text-leah-800 hover:underline dark:text-leah-700"
            onclick={() => {
              quickOpen = false;
              expenseEditor = { mode: 'create' };
            }}
          >
            More fields →
          </button>
        </div>
        {#if quickErrors.vendor || quickErrors.amount}
          <p class="text-xs font-medium text-rose-700 sm:col-span-5">
            {quickErrors.vendor || quickErrors.amount}
          </p>
        {/if}
      </div>
    {/if}
  </header>

  <article class="rounded-xl border border-zinc-200/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    {#if expenseItems.length === 0}
      <EmptyState
        icon="🧾"
        title="No expenses yet"
        body={canWrite ? 'Use “Quick post” at the top, or open the full form for VAT and posting date.' : 'Ask an admin to start posting expenses.'}
        action={canWrite ? { label: 'Open full form', onClick: () => (expenseEditor = { mode: 'create' }), icon: '＋' } : null}
      />
    {:else}
      <ul class="grid divide-y divide-zinc-100 dark:divide-slate-800">
        {#each expenseItems as item}
          <li class="flex flex-wrap items-center gap-3 py-2.5 first:pt-0 last:pb-0">
            <div class="min-w-[7rem] shrink-0 text-xs text-zinc-500 dark:text-slate-400">
              <p class="font-mono text-zinc-700 dark:text-slate-300">{item.date}</p>
              <p class="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-700 dark:bg-slate-800 dark:text-slate-200 inline-block mt-0.5">
                {item.type}
              </p>
            </div>
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-semibold text-zinc-900 dark:text-slate-100">{item.vendor}</p>
              {#if item.supplierCustomerId}
                <p class="truncate text-xs text-zinc-500 dark:text-slate-400">
                  Supplier: {customerName(customers, item.supplierCustomerId)}
                </p>
              {/if}
            </div>
            <span class="text-base font-bold tabular-nums text-zinc-900 dark:text-slate-100">{currency(item.amount)}</span>
            <div class="flex shrink-0 gap-1">
              {#if canWrite}
                <button
                  type="button"
                  class="rounded-md border border-zinc-200 bg-white p-1.5 text-zinc-600 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  onclick={() => (expenseEditor = { mode: 'edit', id: item.id })}
                  aria-label="Edit expense"
                  title="Edit expense"
                >
                  <Pencil class="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              {/if}
              {#if canDelete}
                <button
                  type="button"
                  class="rounded-md border border-rose-200 bg-white p-1.5 text-rose-700 hover:bg-rose-50 dark:border-rose-700 dark:bg-slate-900 dark:text-rose-200 dark:hover:bg-rose-900/30"
                  onclick={() => onDeleteExpense(item.id)}
                  aria-label="Delete expense"
                  title="Delete expense"
                >
                  <Trash2 class="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              {/if}
            </div>
          </li>
        {/each}
      </ul>
    {/if}
  </article>
</section>
