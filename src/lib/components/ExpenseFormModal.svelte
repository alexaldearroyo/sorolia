<script>
  import X from 'lucide-svelte/icons/x';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import { deDateToIso, isoDateToDe } from '../workspaceActions.js';

  let { editor, draftRow, customers, onClose, onSave, onDelete } = $props();

  let vendor = $state('');
  let type = $state('General');
  let amount = $state('');
  let dateIso = $state('');
  let supplierId = $state('');

  let errors = $state({ vendor: '', amount: '', date: '', general: '' });

  const types = ['General', 'Software', 'Infrastructure', 'Travel', 'Legal', 'Fixed'];

  function clearErrors() {
    errors = { vendor: '', amount: '', date: '', general: '' };
  }

  function todayIso() {
    return new Date().toISOString().slice(0, 10);
  }

  function sync() {
    clearErrors();
    if (!editor) return;
    if (editor.mode === 'create') {
      vendor = '';
      type = 'General';
      amount = '';
      dateIso = todayIso();
      supplierId = '';
    } else if (draftRow) {
      vendor = draftRow.vendor;
      type = draftRow.type;
      amount = String(draftRow.amount);
      dateIso = deDateToIso(draftRow.date) || todayIso();
      supplierId = draftRow.supplierCustomerId ?? '';
    }
  }

  $effect(() => {
    if (editor) sync();
  });

  $effect(() => {
    if (editor?.mode === 'edit' && !draftRow) onClose();
  });

  $effect(() => {
    if (!editor) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  function validate() {
    clearErrors();
    let ok = true;
    if (!vendor.trim()) {
      errors.vendor = 'Vendor is required.';
      ok = false;
    }
    const n = Number(amount);
    if (!String(amount).trim() || Number.isNaN(n) || n <= 0) {
      errors.amount = 'Enter an amount greater than zero.';
      ok = false;
    }
    if (!dateIso) {
      errors.date = 'Pick a posting date.';
      ok = false;
    }
    return ok;
  }

  function submit() {
    if (!validate()) return;
    const dateDe = isoDateToDe(dateIso);
    onSave({
      id: editor.mode === 'edit' && draftRow ? draftRow.id : undefined,
      vendor: vendor.trim(),
      type,
      amount: Math.round(Number(amount)),
      date: dateDe,
      supplierCustomerId: supplierId || null
    });
  }

  function remove() {
    if (!draftRow) return;
    if (!window.confirm(`Delete expense “${draftRow.vendor}”?`)) return;
    onDelete(draftRow.id);
  }

  const open = $derived(editor !== null);
  const title = $derived(
    editor?.mode === 'create' ? 'New expense' : draftRow ? `Edit ${draftRow.vendor}` : 'Edit expense'
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
      role="dialog"
      aria-modal="true"
      aria-labelledby="expense-form-title"
      class="relative z-10 w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl"
    >
      <div class="flex items-start justify-between gap-3">
        <h2 id="expense-form-title" class="text-lg font-bold text-zinc-900">{title}</h2>
        <button type="button" class="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100" onclick={onClose} aria-label="Close">
          <X class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      {#if errors.general}
        <p class="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-900">{errors.general}</p>
      {/if}

      <div class="mt-5 grid gap-4">
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
          Vendor
          <input
            bind:value={vendor}
            class="rounded-lg border bg-white px-3 py-2 text-sm {errors.vendor ? 'border-rose-500' : 'border-zinc-200'}"
          />
          {#if errors.vendor}
            <span class="text-xs font-medium text-rose-700">{errors.vendor}</span>
          {/if}
        </label>
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
          Amount (EUR)
          <input
            bind:value={amount}
            type="number"
            min="1"
            step="1"
            class="rounded-lg border bg-white px-3 py-2 text-sm tabular-nums {errors.amount
              ? 'border-rose-500'
              : 'border-zinc-200'}"
          />
          {#if errors.amount}
            <span class="text-xs font-medium text-rose-700">{errors.amount}</span>
          {/if}
        </label>
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
          Posting date
          <input
            bind:value={dateIso}
            type="date"
            class="rounded-lg border bg-white px-3 py-2 text-sm {errors.date ? 'border-rose-500' : 'border-zinc-200'}"
          />
          {#if errors.date}
            <span class="text-xs font-medium text-rose-700">{errors.date}</span>
          {/if}
        </label>
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
          Type
          <select bind:value={type} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
            {#each types as t}
              <option value={t}>{t}</option>
            {/each}
          </select>
        </label>
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
          Supplier (optional)
          <select bind:value={supplierId} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
            <option value="">— none —</option>
            {#each customers as c}
              <option value={c.id}>{c.name}</option>
            {/each}
          </select>
        </label>
      </div>

      <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
        {#if editor?.mode === 'edit'}
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-900 hover:bg-rose-100"
            onclick={remove}
          >
            <Trash2 class="h-4 w-4" aria-hidden="true" />
            Delete
          </button>
        {:else}
          <span></span>
        {/if}
        <div class="flex gap-2">
          <button
            type="button"
            class="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
            onclick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            class="rounded-lg bg-leah-900 px-4 py-2 text-sm font-semibold text-white hover:bg-leah-950"
            onclick={submit}
          >
            {editor?.mode === 'create' ? 'Save expense' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
