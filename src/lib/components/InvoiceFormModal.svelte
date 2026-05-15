<script>
  import X from 'lucide-svelte/icons/x';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import Plus from 'lucide-svelte/icons/plus';
  import Eye from 'lucide-svelte/icons/eye';
  import { deDateToIso, isoDateToDe, expectedDueFromTerms } from '../workspaceActions.js';
  import { useEscape } from '../escape.js';
  import { lockDialogFocus } from '../dialogFocus.js';
  import { summarizeLines, emptyLineItem } from '../invoiceMath.js';
  import { formatMoney } from '../fx.js';

  let {
    editor,
    draftRow,
    customers,
    settings = null,
    locale = 'en-GB',
    canDelete = true,
    onClose,
    onCreate,
    onUpdate,
    onDelete,
    onPreview
  } = $props();

  let customerId = $state('');
  let dueIso = $state('');
  let status = $state('Open');
  let title = $state('');
  let notes = $state('');
  let poRef = $state('');
  let invoiceCurrency = $state('EUR');
  let amountPaid = $state(0);
  let items = $state([emptyLineItem()]);

  let errors = $state({ customerId: '', items: '', due: '', general: '' });

  function clearErrors() {
    errors = { customerId: '', items: '', due: '', general: '' };
  }

  function defaultVat() {
    return Number(settings?.defaultVat ?? 19);
  }

  function defaultTermsDays(custId) {
    const cust = customers.find((c) => c.id === custId);
    return Number(cust?.paymentTermsDays ?? settings?.paymentTermsDays ?? 14);
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
      status = 'Offer';
      title = '';
      dueIso = plusDaysIso(defaultTermsDays(customerId));
      notes = '';
      poRef = '';
      amountPaid = 0;
      const cust = customers.find((c) => c.id === customerId);
      invoiceCurrency = cust?.currency ?? settings?.currency ?? 'EUR';
      items = [{ ...emptyLineItem(), vatRate: defaultVat() }];
    } else if (draftRow) {
      customerId = draftRow.customerId;
      status = draftRow.status;
      title = draftRow.title ?? '';
      dueIso = deDateToIso(draftRow.due) || plusDaysIso(defaultTermsDays(draftRow.customerId));
      notes = draftRow.notes ?? '';
      poRef = draftRow.poRef ?? '';
      invoiceCurrency = draftRow.currency ?? 'EUR';
      amountPaid = Number(draftRow.amountPaid ?? 0);
      const seedItems = (draftRow.items ?? []).map((it) => ({
        description: it.description ?? '',
        qty: it.qty ?? 1,
        unitPrice: it.unitPrice ?? 0,
        vatRate: it.vatRate ?? defaultVat()
      }));
      items = seedItems.length ? seedItems : [{ ...emptyLineItem(), vatRate: defaultVat() }];
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

  const totals = $derived(summarizeLines(items));

  function fmt(value) {
    return formatMoney(value, invoiceCurrency, 'de-DE');
  }

  function addLine() {
    items = [...items, { ...emptyLineItem(), vatRate: defaultVat() }];
  }

  function removeLine(idx) {
    items = items.length > 1 ? items.filter((_, i) => i !== idx) : items;
  }

  function updateLine(idx, patch) {
    items = items.map((it, i) => (i === idx ? { ...it, ...patch } : it));
  }

  function onCustomerChange() {
    if (editor?.mode !== 'create') return;
    const cust = customers.find((c) => c.id === customerId);
    if (cust?.currency) invoiceCurrency = cust.currency;
    dueIso = plusDaysIso(defaultTermsDays(customerId));
  }

  function validate() {
    clearErrors();
    let ok = true;
    if (!customerId || !customers.some((c) => c.id === customerId)) {
      errors.customerId = 'Choose a valid customer.';
      ok = false;
    }
    if (status !== 'Offer' && !dueIso) {
      errors.due = 'Pick a due date.';
      ok = false;
    }
    const real = items.filter(
      (it) => (it.description ?? '').toString().trim() && Number(it.qty) > 0 && Number(it.unitPrice) >= 0
    );
    if (real.length === 0) {
      errors.items = 'Add at least one line with a description, quantity and price.';
      ok = false;
    }
    return ok;
  }

  function buildPayload() {
    const dueDe = status === 'Offer' ? '' : isoDateToDe(dueIso);
    return {
      customerId,
      status,
      title: title.trim(),
      dueDe,
      due: dueDe,
      notes: notes.trim(),
      poRef: poRef.trim(),
      currency: invoiceCurrency,
      amountPaid: status === 'Partially paid' ? Number(amountPaid) || 0 : status === 'Paid' ? totals.gross : 0,
      items
    };
  }

  function submit() {
    if (!validate()) return;
    const payload = buildPayload();
    if (editor.mode === 'create') {
      onCreate(payload);
    } else if (draftRow) {
      onUpdate(draftRow.id, payload);
    }
  }

  function preview() {
    if (!validate()) return;
    const payload = buildPayload();
    onPreview?.({
      ...payload,
      due: payload.dueDe,
      created: draftRow?.created,
      id: draftRow?.id,
      dunning: draftRow?.dunning ?? []
    });
  }

  function remove() {
    if (!draftRow) return;
    onDelete(draftRow.id);
  }

  const open = $derived(editor !== null);
  const heading = $derived(
    editor?.mode === 'create' ? 'New offer' : draftRow ? `Edit ${draftRow.id}` : 'Edit offer'
  );

  const vatOptions = $derived(settings?.vatRates?.length ? settings.vatRates : [0, 7, 19]);

  const expectedDue = $derived(
    customerId ? expectedDueFromTerms(customers.find((c) => c.id === customerId), settings) : ''
  );

  /* Issued invoices are immutable for tax / audit reasons. The UI should not
     reach this state in normal use (the Edit button is hidden for non-offers),
     but this gate is the safety net in case it does. */
  const isEditingIssued = $derived(
    editor?.mode === 'edit' && draftRow && draftRow.status !== 'Offer'
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
      class="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col rounded-2xl border border-zinc-200 bg-white shadow-2xl"
    >
      <header class="flex items-start justify-between gap-3 border-b border-zinc-100 px-6 py-4">
        <div>
          <h2 id="invoice-form-title" class="text-lg font-bold text-zinc-900">{heading}</h2>
          <p class="mt-1 text-xs text-zinc-500">
            {invoiceCurrency} · DD/MM/YYYY · default VAT {defaultVat()}% · totals computed from lines.
          </p>
        </div>
        <button
          type="button"
          class="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
          onclick={onClose}
          aria-label="Close"
        >
          <X class="h-5 w-5" aria-hidden="true" />
        </button>
      </header>

      <div class="flex-1 overflow-y-auto px-6 py-5">
        {#if isEditingIssued}
          <p class="mb-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            This invoice has already been issued and is locked for tax & audit reasons. Cancel it via credit note (Storno) to issue a corrected one. Only offers can be edited.
          </p>
        {/if}
        {#if errors.general}
          <p class="mb-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-900">{errors.general}</p>
        {/if}

        <div class="grid gap-4 sm:grid-cols-2">
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 sm:col-span-2">
            Title / subject <span class="font-normal text-zinc-400">(visible on the invoice and in lists)</span>
            <input
              bind:value={title}
              maxlength="120"
              placeholder="e.g. Q1 commissioning batch · Klärmann"
              class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm"
            />
          </label>
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
            Customer
            <select
              bind:value={customerId}
              onchange={onCustomerChange}
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
            Status
            <select bind:value={status} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
              <option>Offer</option>
              <option>Open</option>
              <option>Partially paid</option>
              <option>Paid</option>
              <option>Overdue</option>
            </select>
            <span class="text-[11px] text-zinc-500">
              {#if status === 'Offer'}
                An offer has no due date yet — set one once you issue it.
              {:else}
                Issued documents are locked once saved.
              {/if}
            </span>
          </label>
          {#if status !== 'Offer'}
            <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
              Due date
              <input
                bind:value={dueIso}
                type="date"
                lang={locale}
                aria-invalid={errors.due ? 'true' : 'false'}
                class="rounded-lg border bg-white px-3 py-2 text-sm {errors.due ? 'border-rose-500' : 'border-zinc-200'}"
              />
              {#if expectedDue && editor?.mode === 'create'}
                <span class="text-[11px] text-zinc-500">Customer terms suggest <button type="button" class="underline underline-offset-2 hover:text-leah-800" onclick={() => (dueIso = plusDaysIso(defaultTermsDays(customerId)))}>{expectedDue}</button></span>
              {/if}
              {#if errors.due}
                <span class="text-xs font-medium text-rose-700">{errors.due}</span>
              {/if}
            </label>
          {/if}
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
            Currency
            <select bind:value={invoiceCurrency} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
              <option value="EUR">EUR · €</option>
              <option value="USD">USD · $</option>
              <option value="GBP">GBP · £</option>
              <option value="CHF">CHF</option>
            </select>
          </label>
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
            PO reference
            <input
              bind:value={poRef}
              class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm"
              placeholder="PO-2026-…"
            />
          </label>
          {#if status === 'Partially paid'}
            <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
              Paid so far
              <input
                type="number"
                min="0"
                step="1"
                bind:value={amountPaid}
                class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm tabular-nums"
              />
            </label>
          {/if}
          {#if editor?.mode === 'edit' && draftRow}
            <p class="self-end text-xs text-zinc-500">
              Created <span class="font-mono font-medium text-zinc-700">{draftRow.created}</span> · ID locked for audit
            </p>
          {/if}
        </div>

        <fieldset class="mt-6 grid gap-2">
          <legend class="text-xs font-bold uppercase tracking-wide text-zinc-500">Line items</legend>
          {#if errors.items}
            <p class="text-xs font-medium text-rose-700">{errors.items}</p>
          {/if}

          <div class="overflow-x-auto rounded-lg border border-zinc-200">
            <table class="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr class="bg-zinc-50 text-[11px] font-bold uppercase tracking-wide text-zinc-500">
                  <th class="px-3 py-2" scope="col">Description</th>
                  <th class="px-3 py-2 text-right" scope="col">Qty</th>
                  <th class="px-3 py-2 text-right" scope="col">Unit</th>
                  <th class="px-3 py-2 text-right" scope="col">VAT %</th>
                  <th class="px-3 py-2 text-right" scope="col">Net</th>
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
                        placeholder="What you are billing"
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
                        value={item.unitPrice}
                        oninput={(e) => updateLine(idx, { unitPrice: e.currentTarget.value })}
                        class="w-24 rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-right text-sm tabular-nums"
                      />
                    </td>
                    <td class="px-3 py-2 text-right">
                      <select
                        value={item.vatRate}
                        onchange={(e) => updateLine(idx, { vatRate: Number(e.currentTarget.value) })}
                        class="rounded-md border border-zinc-200 bg-white px-1.5 py-1.5 text-sm tabular-nums"
                      >
                        {#each vatOptions as rate}
                          <option value={rate}>{rate}</option>
                        {/each}
                      </select>
                    </td>
                    <td class="px-3 py-2 text-right tabular-nums text-zinc-800">
                      {fmt((Number(item.qty) || 0) * (Number(item.unitPrice) || 0))}
                    </td>
                    <td class="px-3 py-2 text-right">
                      <button
                        type="button"
                        class="rounded-md border border-zinc-200 p-1.5 text-zinc-500 hover:bg-zinc-50 disabled:opacity-30"
                        onclick={() => removeLine(idx)}
                        disabled={items.length <= 1}
                        aria-label="Remove line"
                        title="Remove line"
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
            <Plus class="h-3.5 w-3.5" aria-hidden="true" />
            Add line
          </button>
        </fieldset>

        <label class="mt-6 grid gap-1.5 text-sm font-semibold text-zinc-700">
          Notes (visible on preview)
          <textarea
            bind:value={notes}
            rows="2"
            class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm"
            placeholder="Payment terms, PO reference, internal note…"
          ></textarea>
        </label>

        <dl class="mt-5 grid gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50/60 p-4 text-sm">
          <div class="flex items-center justify-between">
            <dt class="text-zinc-500">Net total</dt>
            <dd class="font-semibold tabular-nums text-zinc-800">{fmt(totals.net)}</dd>
          </div>
          {#each totals.byVat as bucket}
            <div class="flex items-center justify-between text-xs text-zinc-500">
              <dt>VAT {bucket.rate}% on {fmt(bucket.net)}</dt>
              <dd class="tabular-nums">{fmt(bucket.vat)}</dd>
            </div>
          {/each}
          <div class="mt-1 flex items-center justify-between border-t border-zinc-200 pt-2 text-base">
            <dt class="font-bold text-zinc-900">Gross total</dt>
            <dd class="font-extrabold tabular-nums text-zinc-900">{fmt(totals.gross)}</dd>
          </div>
        </dl>
      </div>

      <footer class="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 px-6 py-4">
        {#if editor?.mode === 'edit' && canDelete}
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
        <div class="flex flex-wrap gap-2">
          {#if onPreview}
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-50"
              onclick={preview}
            >
              <Eye class="h-4 w-4" aria-hidden="true" />
              Preview
            </button>
          {/if}
          <button
            type="button"
            class="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
            onclick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            class="rounded-lg bg-leah-900 px-4 py-2 text-sm font-semibold text-white hover:bg-leah-950 disabled:cursor-not-allowed disabled:bg-zinc-300"
            onclick={submit}
            disabled={isEditingIssued}
            title={isEditingIssued ? 'Issued invoices cannot be edited' : null}
          >
            {editor?.mode === 'create' ? 'Create offer' : 'Save changes'}
          </button>
        </div>
      </footer>
    </div>
  </div>
{/if}
