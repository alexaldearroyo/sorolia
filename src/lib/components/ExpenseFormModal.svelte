<script>
  import X from 'lucide-svelte/icons/x';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import Plus from 'lucide-svelte/icons/plus';
  import { deDateToIso, isoDateToDe, expenseAmount } from '../workspaceActions.js';
  import { useEscape } from '../escape.js';
  import { lockDialogFocus } from '../dialogFocus.js';
  import InfoBox from './InfoBox.svelte';

  let {
    editor,
    draftRow,
    projects = [],
    onClose,
    onSave,
    onDelete
  } = $props();

  let vendor = $state('');
  let type = $state('General');
  let dateIso = $state('');
  let supplierId = $state('');
  let projectId = $state('');
  let items = $state(/** @type {Array<{description:string, amount:string, qty:string}>} */ ([{ description: '', amount: '', qty: '' }]));
  let isOrder = $state(false);
  let inventoryId = $state('');
  let orderEta = $state('');

  let errors = $state({ vendor: '', amount: '', date: '', general: '' });

  const types = ['General', 'Software', 'Infrastructure', 'Travel', 'Legal', 'Fixed', 'Goods'];

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
      dateIso = todayIso();
      supplierId = '';
      projectId = '';
      isOrder = false;
      inventoryId = '';
      orderEta = '';
      items = [{ description: '', amount: '', qty: '' }];
    } else if (draftRow) {
      vendor = draftRow.vendor;
      type = draftRow.type;
      dateIso = deDateToIso(draftRow.date) || todayIso();
      supplierId = draftRow.supplierCustomerId ?? '';
      projectId = draftRow.projectId ?? '';
      isOrder = Boolean(draftRow.isOrder);
      inventoryId = draftRow.inventoryId ?? '';
      orderEta = draftRow.orderEta ?? '';
      const seedItems = Array.isArray(draftRow.items) && draftRow.items.length
        ? draftRow.items.map((it) => ({
            description: String(it.description ?? ''),
            amount: String(it.amount ?? 0),
            qty: String(it.qty ?? '')
          }))
        : [{ description: 'Total', amount: String(draftRow.amount ?? ''), qty: '' }];
      items = seedItems;
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

  function addLine() {
    items = [...items, { description: '', amount: '', qty: '' }];
  }
  function removeLine(idx) {
    items = items.length > 1 ? items.filter((_, i) => i !== idx) : items;
  }
  function updateLine(idx, patch) {
    items = items.map((it, i) => (i === idx ? { ...it, ...patch } : it));
  }

  const total = $derived(items.reduce((s, it) => s + (Number(it.amount) || 0), 0));

  function validate() {
    clearErrors();
    let ok = true;
    if (!vendor.trim()) {
      errors.vendor = 'Vendor is required.';
      ok = false;
    }
    if (total <= 0) {
      errors.amount = 'Add at least one line with an amount.';
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
      amount: Math.round(total),
      items: items
        .filter((it) => (it.description ?? '').toString().trim() || Number(it.amount))
        .map((it) => ({
          description: String(it.description ?? '').trim() || 'Line',
          amount: Math.round(Number(it.amount) || 0),
          qty: Math.max(0, Math.round(Number(it.qty) || 0))
        })),
      date: dateDe,
      supplierCustomerId: supplierId || null,
      projectId: projectId || null,
      isOrder,
      inventoryId: isOrder ? inventoryId || null : null,
      orderEta: isOrder ? orderEta : '',
      orderStatus: isOrder ? draftRow?.orderStatus || 'ordered' : ''
    });
  }

  function remove() {
    if (!draftRow) return;
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
      bind:this={dialogEl}
      role="dialog"
      aria-modal="true"
      aria-labelledby="expense-form-title"
      class="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col rounded-2xl border border-zinc-200 bg-white shadow-2xl"
    >
      <header class="flex items-start justify-between gap-3 border-b border-zinc-100 px-6 py-4">
        <h2 id="expense-form-title" class="text-lg font-bold text-zinc-900">{title}</h2>
        <button type="button" class="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100" onclick={onClose} aria-label="Close">
          <X class="h-5 w-5" aria-hidden="true" />
        </button>
      </header>

      <div class="flex-1 overflow-y-auto px-6 py-5">
        {#if errors.general}
          <p class="mb-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-900">{errors.general}</p>
        {/if}

        <div class="grid gap-4 sm:grid-cols-2">
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 sm:col-span-2">
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
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 sm:col-span-2">
            Project
            <select bind:value={projectId} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
              <option value="">No project</option>
              {#each projects as project}
                <option value={project.id}>{project.name}</option>
              {/each}
            </select>
            <span class="text-[11px] text-zinc-500">
              Connect this expense directly to a project.
            </span>
          </label>
        </div>

        <fieldset class="mt-6 grid gap-2">
          <legend class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-zinc-500">
            Lines
            <InfoBox helpKey="expense.lines" />
          </legend>
          {#if errors.amount}
            <p class="text-xs font-medium text-rose-700">{errors.amount}</p>
          {/if}
          <div class="overflow-x-auto rounded-lg border border-zinc-200">
            <table class="w-full min-w-[480px] text-left text-sm">
              <thead class="sticky top-0 z-10">
                <tr class="bg-zinc-50 text-[11px] font-bold uppercase tracking-wide text-zinc-500">
                  <th class="px-3 py-2" scope="col">Description</th>
                  <th class="px-3 py-2 text-right" scope="col">Qty</th>
                  <th class="px-3 py-2 text-right" scope="col">Amount (€)</th>
                  <th class="px-3 py-2" scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {#each items as item, idx}
                  <tr class="border-t border-zinc-100">
                    <td class="px-3 py-2">
                      <input
                        value={item.description}
                        oninput={(e) => updateLine(idx, { description: e.currentTarget.value })}
                        placeholder="What was purchased"
                        class="w-full rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-sm"
                      />
                    </td>
                    <td class="px-3 py-2 text-right">
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={item.qty}
                        oninput={(e) => updateLine(idx, { qty: e.currentTarget.value })}
                        class="w-20 rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-right text-sm tabular-nums"
                      />
                    </td>
                    <td class="px-3 py-2 text-right">
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={item.amount}
                        oninput={(e) => updateLine(idx, { amount: e.currentTarget.value })}
                        class="w-28 rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-right text-sm tabular-nums"
                      />
                    </td>
                    <td class="px-3 py-2 text-right">
                      <button
                        type="button"
                        class="rounded-md border border-zinc-200 p-1.5 text-zinc-500 hover:bg-zinc-50 disabled:opacity-30"
                        onclick={() => removeLine(idx)}
                        disabled={items.length <= 1}
                        aria-label="Remove line"
                      >
                        <Trash2 class="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            class="inline-flex w-fit items-center gap-1.5 rounded-md border border-dashed border-zinc-300 px-3 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-50"
            onclick={addLine}
          >
            <Plus class="h-3.5 w-3.5" aria-hidden="true" /> Add line
          </button>
        </fieldset>

        <p class="mt-5 flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50/60 px-4 py-2 text-sm">
          <span class="text-zinc-500">Total</span>
          <span class="font-extrabold tabular-nums text-zinc-900">€ {total.toLocaleString('de-DE')}</span>
        </p>
      </div>

      <footer class="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 px-6 py-4">
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
      </footer>
    </div>
  </div>
{/if}
