<script>
  import X from 'lucide-svelte/icons/x';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import { useEscape } from '../escape.js';
  import { lockDialogFocus } from '../dialogFocus.js';

  let {
    editor,
    draftRow,
    customers,
    canDelete = false,
    onClose,
    onSave,
    onDelete
  } = $props();

  let code = $state('');
  let name = $state('');
  let qty = $state('0');
  let reorder = $state('0');
  let unitCost = $state('0');
  let supplierId = $state('');
  let notes = $state('');

  let errors = $state({ code: '', name: '', qty: '', reorder: '' });

  function clearErrors() {
    errors = { code: '', name: '', qty: '', reorder: '' };
  }

  function sync() {
    clearErrors();
    if (!editor) return;
    if (editor.mode === 'create') {
      code = '';
      name = '';
      qty = '0';
      reorder = '0';
      unitCost = '0';
      supplierId = '';
      notes = '';
    } else if (draftRow) {
      code = draftRow.code ?? '';
      name = draftRow.name ?? '';
      qty = String(draftRow.qty ?? 0);
      reorder = String(draftRow.reorder ?? 0);
      unitCost = String(draftRow.unitCost ?? 0);
      supplierId = draftRow.supplierCustomerId ?? '';
      notes = draftRow.notes ?? '';
    }
  }

  $effect(() => {
    if (editor) sync();
  });

  $effect(() => {
    if (editor?.mode === 'edit' && !draftRow) onClose();
  });

  let dialogEl = $state();

  $effect(() => {
    if (!editor) return;
    return useEscape(onClose);
  });

  $effect(() => {
    if (!editor) return;
    return lockDialogFocus(() => dialogEl);
  });

  function validate() {
    clearErrors();
    let ok = true;
    if (!code.trim()) {
      errors.code = 'SKU code is required.';
      ok = false;
    }
    if (!name.trim()) {
      errors.name = 'Item name is required.';
      ok = false;
    }
    const q = Number(qty);
    if (Number.isNaN(q) || q < 0) {
      errors.qty = 'Quantity must be ≥ 0.';
      ok = false;
    }
    const r = Number(reorder);
    if (Number.isNaN(r) || r < 0) {
      errors.reorder = 'Reorder point must be ≥ 0.';
      ok = false;
    }
    return ok;
  }

  function submit() {
    if (!validate()) return;
    onSave({
      id: editor?.mode === 'edit' && draftRow ? draftRow.id : undefined,
      code: code.trim().toUpperCase(),
      name: name.trim(),
      qty: Math.round(Number(qty)),
      reorder: Math.round(Number(reorder)),
      unitCost: Math.round(Number(unitCost) || 0),
      supplierCustomerId: supplierId || null,
      notes: notes.trim()
    });
  }

  function remove() {
    if (!draftRow) return;
    onDelete(draftRow.id);
  }

  const open = $derived(editor !== null);
  const title = $derived(
    editor?.mode === 'create' ? 'New SKU' : draftRow ? `Edit ${draftRow.name}` : 'Edit SKU'
  );
</script>

{#if open}
  <div class="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center" role="presentation">
    <button
      type="button"
      class="absolute inset-0 bg-zinc-900/50 backdrop-blur-[1px]"
      aria-label="Close"
      onclick={onClose}
    ></button>
    <div
      bind:this={dialogEl}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inventory-form-title"
      class="relative z-10 w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
    >
      <div class="flex items-start justify-between gap-3">
        <h2 id="inventory-form-title" class="text-lg font-bold text-zinc-900 dark:text-slate-100">{title}</h2>
        <button
          type="button"
          class="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 dark:text-slate-300 dark:hover:bg-slate-800"
          onclick={onClose}
          aria-label="Close"
        >
          <X class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div class="mt-5 grid gap-4 sm:grid-cols-2">
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 dark:text-slate-300">
          SKU code
          <input
            bind:value={code}
            class="rounded-lg border bg-white px-3 py-2 text-sm font-mono uppercase tracking-wide dark:bg-slate-900 dark:text-slate-100 {errors.code ? 'border-rose-500' : 'border-zinc-200 dark:border-slate-700'}"
            placeholder="e.g. KIT-007"
          />
          {#if errors.code}
            <span class="text-xs font-medium text-rose-700">{errors.code}</span>
          {/if}
        </label>
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 dark:text-slate-300 sm:col-span-1">
          Item name
          <input
            bind:value={name}
            class="rounded-lg border bg-white px-3 py-2 text-sm dark:bg-slate-900 dark:text-slate-100 {errors.name ? 'border-rose-500' : 'border-zinc-200 dark:border-slate-700'}"
            placeholder="e.g. EnergyMaster Edge Inverter"
          />
          {#if errors.name}
            <span class="text-xs font-medium text-rose-700">{errors.name}</span>
          {/if}
        </label>
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 dark:text-slate-300">
          On-hand qty
          <input
            bind:value={qty}
            type="number"
            min="0"
            step="1"
            class="rounded-lg border bg-white px-3 py-2 text-sm tabular-nums dark:bg-slate-900 dark:text-slate-100 {errors.qty ? 'border-rose-500' : 'border-zinc-200 dark:border-slate-700'}"
          />
          {#if errors.qty}
            <span class="text-xs font-medium text-rose-700">{errors.qty}</span>
          {/if}
        </label>
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 dark:text-slate-300">
          Reorder point
          <input
            bind:value={reorder}
            type="number"
            min="0"
            step="1"
            class="rounded-lg border bg-white px-3 py-2 text-sm tabular-nums dark:bg-slate-900 dark:text-slate-100 {errors.reorder ? 'border-rose-500' : 'border-zinc-200 dark:border-slate-700'}"
          />
          {#if errors.reorder}
            <span class="text-xs font-medium text-rose-700">{errors.reorder}</span>
          {/if}
        </label>
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 dark:text-slate-300">
          Unit cost (EUR)
          <input
            bind:value={unitCost}
            type="number"
            min="0"
            step="1"
            class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm tabular-nums dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            placeholder="0"
          />
        </label>
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 dark:text-slate-300">
          Supplier
          <select
            bind:value={supplierId}
            class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            <option value="">— none —</option>
            {#each customers as c}
              <option value={c.id}>{c.name}</option>
            {/each}
          </select>
        </label>
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 dark:text-slate-300 sm:col-span-2">
          Notes (optional)
          <textarea
            bind:value={notes}
            rows="2"
            class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            placeholder="Lead time, vendor reference…"
          ></textarea>
        </label>
      </div>

      <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
        {#if editor?.mode === 'edit' && canDelete}
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-900 hover:bg-rose-100"
            onclick={remove}
          >
            <Trash2 class="h-4 w-4" aria-hidden="true" />
            Delete SKU
          </button>
        {:else}
          <span></span>
        {/if}
        <div class="flex gap-2">
          <button
            type="button"
            class="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            onclick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            class="rounded-lg bg-leah-900 px-4 py-2 text-sm font-semibold text-white hover:bg-leah-950"
            onclick={submit}
          >
            {editor?.mode === 'create' ? 'Save SKU' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
