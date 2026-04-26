<script>
  import X from 'lucide-svelte/icons/x';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import { deDateToIso, isoDateToDe } from '../workspaceActions.js';
  import { useEscape } from '../escape.js';
  import { lockDialogFocus } from '../dialogFocus.js';

  let { editor, draftRow, customers, onClose, onCreate, onUpdate, onDelete } = $props();

  let customerId = $state('');
  let amount = $state('');
  let dueIso = $state('');
  let status = $state('Open');

  let errors = $state({ customerId: '', amount: '', due: '', general: '' });

  function clearErrors() {
    errors = { customerId: '', amount: '', due: '', general: '' };
  }

  function plusDaysIso(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  }

  function syncFromEditor() {
    clearErrors();
    if (!editor) return;
    if (editor.mode === 'create') {
      customerId = customers[0]?.id ?? '';
      amount = '';
      status = 'Open';
      dueIso = plusDaysIso(14);
    } else if (draftRow) {
      customerId = draftRow.customerId;
      amount = String(draftRow.amount);
      status = draftRow.status;
      dueIso = deDateToIso(draftRow.due) || plusDaysIso(14);
    }
  }

  $effect(() => {
    if (editor) syncFromEditor();
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
    if (!customerId || !customers.some((c) => c.id === customerId)) {
      errors.customerId = 'Choose a valid customer.';
      ok = false;
    }
    const n = Number(amount);
    if (!String(amount).trim() || Number.isNaN(n) || n <= 0) {
      errors.amount = 'Enter an amount greater than zero.';
      ok = false;
    }
    if (!dueIso) {
      errors.due = 'Pick a due date.';
      ok = false;
    }
    return ok;
  }

  function submit() {
    if (!validate()) return;
    const n = Math.round(Number(amount));
    const dueDe = isoDateToDe(dueIso);
    if (editor.mode === 'create') {
      onCreate({ customerId, amount: n, dueDe, status });
    } else if (draftRow) {
      onUpdate(draftRow.id, { customerId, amount: n, due: dueDe, status });
    }
  }

  function remove() {
    if (!draftRow) return;
    onDelete(draftRow.id);
  }

  const open = $derived(editor !== null);
  const title = $derived(
    editor?.mode === 'create' ? 'New invoice' : draftRow ? `Edit ${draftRow.id}` : 'Edit invoice'
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
      aria-labelledby="invoice-form-title"
      class="relative z-10 w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl"
    >
      <div class="flex items-start justify-between gap-3">
        <h2 id="invoice-form-title" class="text-lg font-bold text-zinc-900">{title}</h2>
        <button
          type="button"
          class="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
          onclick={onClose}
          aria-label="Close"
        >
          <X class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <p class="mt-1 text-sm text-zinc-500">All amounts are EUR · dates stored as DD/MM/YYYY (German locale).</p>
      {#if errors.general}
        <p class="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-900">{errors.general}</p>
      {/if}

      <div class="mt-5 grid gap-4">
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
          Customer
          <select
            bind:value={customerId}
            aria-invalid={errors.customerId ? 'true' : 'false'}
            class="rounded-lg border bg-white px-3 py-2 text-sm {errors.customerId ? 'border-rose-500' : 'border-zinc-200'}"
          >
            {#each customers as c}
              <option value={c.id}>{c.name}</option>
            {/each}
          </select>
          {#if errors.customerId}
            <span class="text-xs font-medium text-rose-700">{errors.customerId}</span>
          {/if}
        </label>
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
          Amount (EUR)
          <input
            bind:value={amount}
            type="number"
            min="1"
            step="1"
            aria-invalid={errors.amount ? 'true' : 'false'}
            class="rounded-lg border bg-white px-3 py-2 text-sm tabular-nums {errors.amount
              ? 'border-rose-500'
              : 'border-zinc-200'}"
            placeholder="0"
          />
          {#if errors.amount}
            <span class="text-xs font-medium text-rose-700">{errors.amount}</span>
          {/if}
        </label>
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
          Due date
          <input
            bind:value={dueIso}
            type="date"
            aria-invalid={errors.due ? 'true' : 'false'}
            class="rounded-lg border bg-white px-3 py-2 text-sm {errors.due ? 'border-rose-500' : 'border-zinc-200'}"
          />
          {#if errors.due}
            <span class="text-xs font-medium text-rose-700">{errors.due}</span>
          {/if}
        </label>
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
          Status
          <select bind:value={status} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
            <option>Offer</option>
            <option>Open</option>
            <option>Paid</option>
            <option>Overdue</option>
          </select>
        </label>
        {#if editor?.mode === 'edit' && draftRow}
          <p class="text-xs text-zinc-500">
            Created <span class="font-mono font-medium text-zinc-700">{draftRow.created}</span> · ID fixed for audit
            trail
          </p>
        {/if}
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
            {editor?.mode === 'create' ? 'Create invoice' : 'Save changes'}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
