<script>
  import X from 'lucide-svelte/icons/x';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import Plus from 'lucide-svelte/icons/plus';
  import Eye from 'lucide-svelte/icons/eye';
  import UserPlus from 'lucide-svelte/icons/user-plus';
  import { deDateToIso, isoDateToDe, expectedDueFromTerms } from '../workspaceActions.js';
  import { useEscape } from '../escape.js';
  import { lockDialogFocus } from '../dialogFocus.js';
  import { summarizeLines, lineNetTotal, emptyLineItem } from '../invoiceMath.js';
  import { formatMoney } from '../fx.js';
  import InfoBox from './InfoBox.svelte';

  let {
    editor,
    draftRow,
    customers,
    projects = [],
    inventory = [],
    settings = null,
    canDelete = true,
    onClose,
    onCreate,
    onUpdate,
    onDelete,
    onPreview
  } = $props();

  /* Tax keys: simple 1–4 preset + custom (free-form number). The team uses
     German Steuerschlüssel — 1=tax-free, 2=7%, 3=19%, 4=reverse charge. */
  const TAX_KEY_PRESETS = ['1', '2', '3', '4'];

  let customerId = $state('');
  let customerInlineName = $state('');
  let customerInlineAddress = $state('');
  let customerInlineVatId = $state('');
  let customerInlineIsPrivate = $state(false);
  let useInlineCustomer = $state(false);
  let projectId = $state('');

  let dueIso = $state('');
  let status = $state('Offer');
  let title = $state('');
  let notes = $state('');
  let amountPaid = $state(0);
  let taxKey = $state('3');
  let taxKeyCustom = $state('');
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
    useInlineCustomer = false;
    customerInlineName = '';
    customerInlineAddress = '';
    customerInlineVatId = '';
    customerInlineIsPrivate = false;
    if (editor.mode === 'create') {
      customerId = customers[0]?.id ?? '';
      projectId = '';
      status = 'Offer';
      title = '';
      dueIso = plusDaysIso(defaultTermsDays(customerId));
      notes = '';
      amountPaid = 0;
      taxKey = String(settings?.defaultTaxKey ?? '3');
      taxKeyCustom = '';
      items = [{ ...emptyLineItem(), vatRate: defaultVat() }];
    } else if (draftRow) {
      customerId = draftRow.customerId;
      projectId = draftRow.projectId ?? '';
      status = draftRow.status;
      title = draftRow.title ?? '';
      dueIso = deDateToIso(draftRow.due) || plusDaysIso(defaultTermsDays(draftRow.customerId));
      notes = draftRow.notes ?? '';
      amountPaid = Number(draftRow.amountPaid ?? 0);
      const stored = String(draftRow.taxKey ?? '3');
      if (TAX_KEY_PRESETS.includes(stored)) {
        taxKey = stored;
        taxKeyCustom = '';
      } else {
        taxKey = 'custom';
        taxKeyCustom = stored;
      }
      const seedItems = (draftRow.items ?? []).map((it) => ({
        description: it.description ?? '',
        qty: it.qty ?? 1,
        unitPrice: it.unitPrice ?? 0,
        discount: it.discount ?? 0,
        vatRate: it.vatRate ?? defaultVat(),
        skuId: it.skuId ?? ''
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
    return formatMoney(value, 'EUR', 'de-DE');
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

  function onLineSkuChange(idx, skuId) {
    const sku = inventory.find((s) => s.id === skuId);
    const patch = { skuId };
    if (sku && !items[idx]?.description?.trim()) {
      patch.description = `${sku.code} · ${sku.name}`;
    }
    if (sku) {
      patch.unitPrice = sku.unitCost ?? 0;
    }
    updateLine(idx, patch);
  }

  function onCustomerChange() {
    if (editor?.mode !== 'create') return;
    dueIso = plusDaysIso(defaultTermsDays(customerId));
  }

  const availableProjects = $derived(
    useInlineCustomer ? projects : projects.filter((p) => !customerId || p.customerId === customerId)
  );

  $effect(() => {
    if (projectId && !availableProjects.some((p) => p.id === projectId)) projectId = '';
  });

  function validate() {
    clearErrors();
    let ok = true;
    if (useInlineCustomer) {
      if (!customerInlineName.trim() || customerInlineName.trim().length < 2) {
        errors.customerId = 'Type at least 2 characters for the new customer.';
        ok = false;
      }
    } else if (!customerId || !customers.some((c) => c.id === customerId)) {
      errors.customerId = 'Choose a customer or add a new one.';
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

  function resolvedTaxKey() {
    if (taxKey === 'custom') return taxKeyCustom.trim();
    return taxKey;
  }

  function buildInlineCustomerPayload() {
    if (!useInlineCustomer) return null;
    return {
      name: customerInlineName.trim(),
      country: 'DE',
      segment: 'New',
      health: 'Good',
      isPrivate: customerInlineIsPrivate,
      kind: 'customer',
      vatId: customerInlineIsPrivate ? '' : customerInlineVatId.trim(),
      address: customerInlineAddress.trim(),
      paymentTermsDays: Number(settings?.paymentTermsDays ?? 14),
      currency: 'EUR'
    };
  }

  function buildPayload() {
    const dueDe = status === 'Offer' ? '' : isoDateToDe(dueIso);
    return {
      customerId: useInlineCustomer ? null : customerId,
      inlineCustomer: buildInlineCustomerPayload(),
      projectId: projectId || null,
      status,
      title: title.trim(),
      dueDe,
      due: dueDe,
      notes: notes.trim(),
      currency: 'EUR',
      taxKey: resolvedTaxKey(),
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
    editor?.mode === 'create'
      ? status === 'Offer'
        ? 'New offer'
        : 'New invoice'
      : draftRow
      ? `Edit ${draftRow.id}`
      : 'Edit offer'
  );

  const vatOptions = $derived(settings?.vatRates?.length ? settings.vatRates : [0, 7, 19]);

  const expectedDue = $derived(
    customerId && !useInlineCustomer
      ? expectedDueFromTerms(customers.find((c) => c.id === customerId), settings)
      : ''
  );

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
            EUR · DD/MM/YYYY · default VAT {defaultVat()}% · totals computed from lines.
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

          <div class="grid gap-1.5 text-sm font-semibold text-zinc-700 sm:col-span-2">
            <span class="flex items-center gap-1.5">
              Customer
              <InfoBox helpKey="invoice.customer.inline" />
            </span>
            {#if useInlineCustomer}
              <div class="grid gap-2 rounded-lg border border-sky-200 bg-sky-50/60 p-3">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-xs font-bold uppercase tracking-wide text-sky-800">New customer</span>
                  <button
                    type="button"
                    class="text-xs font-semibold text-sky-900 hover:underline"
                    onclick={() => (useInlineCustomer = false)}
                  >
                    Use existing instead
                  </button>
                </div>
                <input
                  bind:value={customerInlineName}
                  placeholder="Customer / company name"
                  class="rounded-md border bg-white px-3 py-2 text-sm {errors.customerId ? 'border-rose-500' : 'border-zinc-200'}"
                />
                <label class="flex items-center gap-2 text-xs font-medium text-zinc-700">
                  <input type="checkbox" bind:checked={customerInlineIsPrivate} class="h-3.5 w-3.5" />
                  Private person (no VAT-ID required)
                  <InfoBox helpKey="invoice.private" />
                </label>
                <input
                  bind:value={customerInlineAddress}
                  placeholder="Address (street, postcode, city)"
                  class="rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm"
                />
                {#if !customerInlineIsPrivate}
                  <input
                    bind:value={customerInlineVatId}
                    placeholder="VAT-ID (e.g. DE123456789)"
                    class="rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm uppercase"
                  />
                {/if}
                {#if errors.customerId}
                  <span class="text-xs font-medium text-rose-700">{errors.customerId}</span>
                {/if}
              </div>
            {:else}
              <div class="flex gap-2">
                <select
                  bind:value={customerId}
                  onchange={onCustomerChange}
                  aria-invalid={errors.customerId ? 'true' : 'false'}
                  class="flex-1 rounded-lg border bg-white px-3 py-2 text-sm {errors.customerId ? 'border-rose-500' : 'border-zinc-200'}"
                >
                  {#each customers as c}
                    <option value={c.id}>{c.name}</option>
                  {/each}
                </select>
                <button
                  type="button"
                  class="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-sky-300 bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-900 hover:bg-sky-100"
                  onclick={() => (useInlineCustomer = true)}
                  title="Add a brand-new customer"
                >
                  <UserPlus class="h-3.5 w-3.5" aria-hidden="true" />
                  New
                </button>
              </div>
              {#if errors.customerId}
                <span class="text-xs font-medium text-rose-700">{errors.customerId}</span>
              {/if}
            {/if}
          </div>

          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 sm:col-span-2">
            Project
            <select bind:value={projectId} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
              <option value="">No project</option>
              {#each availableProjects as project}
                <option value={project.id}>{project.name}</option>
              {/each}
            </select>
            <span class="text-[11px] text-zinc-500">
              Connect this invoice directly to a project.
            </span>
          </label>

          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
            Status
            <select bind:value={status} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
              <option value="Offer">Offer</option>
              <option value="Open">Invoice</option>
            </select>
            <span class="text-[11px] text-zinc-500">
              {#if status === 'Offer'}
                An offer has no due date yet — set one once you issue it.
              {:else}
                "Overdue" is now auto-derived from the due date. Issued documents are locked once saved.
              {/if}
            </span>
          </label>
          {#if status !== 'Offer'}
            <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
              Due date
              <input
                bind:value={dueIso}
                type="date"
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

          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 sm:col-span-2">
            <span class="flex items-center gap-1.5">
              Tax key (Steuerschlüssel)
              <InfoBox helpKey="invoice.taxkey" />
            </span>
            <div class="flex gap-2">
              <select bind:value={taxKey} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
                {#each TAX_KEY_PRESETS as k}
                  <option value={k}>{k}</option>
                {/each}
                <option value="custom">custom</option>
              </select>
              {#if taxKey === 'custom'}
                <input
                  bind:value={taxKeyCustom}
                  type="number"
                  min="0"
                  step="1"
                  placeholder="No."
                  class="w-24 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm tabular-nums"
                />
              {/if}
            </div>
          </label>

          {#if status === 'Partially paid'}
            <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
              Paid so far (EUR)
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
          <legend class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-zinc-500">
            Line items
            <InfoBox helpKey="invoice.stock" />
          </legend>
          {#if errors.items}
            <p class="text-xs font-medium text-rose-700">{errors.items}</p>
          {/if}

          <div class="overflow-x-auto rounded-lg border border-zinc-200">
            <table class="w-full min-w-[720px] text-left text-sm">
              <thead class="sticky top-0 z-10">
                <tr class="bg-zinc-50 text-[11px] font-bold uppercase tracking-wide text-zinc-500">
                  <th class="px-3 py-2" scope="col">Description</th>
                  <th class="px-3 py-2" scope="col">SKU</th>
                  <th class="px-3 py-2 text-right" scope="col">Qty</th>
                  <th class="px-3 py-2 text-right" scope="col">Unit</th>
                  <th class="px-3 py-2 text-right" scope="col">Discount</th>
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
                    <td class="px-3 py-2">
                      <select
                        value={item.skuId ?? ''}
                        onchange={(e) => onLineSkuChange(idx, e.currentTarget.value)}
                        class="w-32 rounded-md border border-zinc-200 bg-white px-1.5 py-1.5 text-xs"
                        title="Link this line to an inventory SKU so saving the invoice deducts stock"
                      >
                        <option value="">—</option>
                        {#each inventory as sku}
                          <option value={sku.id}>{sku.code} ({sku.qty})</option>
                        {/each}
                      </select>
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
                        disabled={Boolean(item.skuId)}
                        title={item.skuId ? 'Fixed to the picked SKU unit cost' : 'Unit price'}
                        class="w-24 rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-right text-sm tabular-nums disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-500"
                      />
                    </td>
                    <td class="px-3 py-2 text-right">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="1"
                        value={item.discount ?? 0}
                        oninput={(e) => updateLine(idx, { discount: e.currentTarget.value })}
                        class="w-20 rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-right text-sm tabular-nums"
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
                      {fmt(lineNetTotal(item))}
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
            placeholder="Payment terms, internal note…"
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
