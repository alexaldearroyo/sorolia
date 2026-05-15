<script>
  import X from 'lucide-svelte/icons/x';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import { useEscape } from '../escape.js';
  import { lockDialogFocus } from '../dialogFocus.js';

  let {
    editor,
    draftRow,
    canDelete = true,
    defaultKind = 'customer',
    onClose,
    onSave,
    onDelete
  } = $props();

  let name = $state('');
  let country = $state('');
  let segment = $state('');
  let health = $state('Good');
  let kind = $state('customer');
  let isPrivate = $state(false);
  let email = $state('');
  let phone = $state('');
  let vatId = $state('');
  let address = $state('');
  let paymentTermsDays = $state(14);
  let notes = $state('');
  let currencyCode = $state('EUR');
  let contacts = $state(/** @type {Array<{id:string, role:string, name:string, email:string, phone:string}>} */ ([]));

  let errors = $state({ name: '', country: '', segment: '', email: '', general: '' });

  const healthOptions = ['Good', 'Watch', 'At risk'];

  function clearErrors() {
    errors = { name: '', country: '', segment: '', email: '', general: '' };
  }

  function sync() {
    clearErrors();
    if (!editor) return;
    if (editor.mode === 'create') {
      name = '';
      country = 'DE';
      segment = '';
      health = 'Good';
      kind = defaultKind;
      isPrivate = false;
      email = '';
      phone = '';
      vatId = '';
      address = '';
      paymentTermsDays = 14;
      notes = '';
      currencyCode = 'EUR';
      contacts = [];
    } else if (draftRow) {
      name = draftRow.name ?? '';
      country = draftRow.country ?? '';
      segment = draftRow.segment ?? '';
      health = draftRow.health ?? 'Good';
      kind = draftRow.kind ?? 'customer';
      isPrivate = Boolean(draftRow.isPrivate);
      email = draftRow.email ?? '';
      phone = draftRow.phone ?? '';
      vatId = draftRow.vatId ?? '';
      address = draftRow.address ?? '';
      paymentTermsDays = draftRow.paymentTermsDays ?? 14;
      notes = draftRow.notes ?? '';
      currencyCode = draftRow.currency ?? 'EUR';
      contacts = (draftRow.contacts ?? []).map((c) => ({ ...c }));
    }
  }

  function addContact() {
    contacts = [...contacts, { id: `c-${Date.now()}-${contacts.length}`, role: 'Contact', name: '', email: '', phone: '' }];
  }

  function removeContact(id) {
    contacts = contacts.filter((c) => c.id !== id);
  }

  function updateContact(id, patch) {
    contacts = contacts.map((c) => (c.id === id ? { ...c, ...patch } : c));
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
    if (!name.trim() || name.trim().length < 2) {
      errors.name = 'Enter at least 2 characters.';
      ok = false;
    }
    if (!country.trim()) {
      errors.country = 'Country is required.';
      ok = false;
    }
    if (!segment.trim()) {
      errors.segment = 'Segment is required.';
      ok = false;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Enter a valid email address or leave it blank.';
      ok = false;
    }
    return ok;
  }

  function submit() {
    if (!validate()) return;
    onSave({
      id: editor.mode === 'edit' && draftRow ? draftRow.id : undefined,
      name: name.trim(),
      country: country.trim().toUpperCase(),
      segment: segment.trim(),
      health,
      kind,
      isPrivate,
      email: email.trim(),
      phone: phone.trim(),
      vatId: isPrivate ? '' : vatId.trim(),
      address: address.trim(),
      paymentTermsDays: Math.max(0, Math.min(120, Number(paymentTermsDays) || 0)),
      notes: notes.trim(),
      currency: currencyCode,
      contacts: contacts
        .filter((c) => (c.name || c.email || c.phone).toString().trim())
        .map((c) => ({
          id: c.id,
          role: (c.role || 'Contact').trim(),
          name: (c.name || '').trim(),
          email: (c.email || '').trim(),
          phone: (c.phone || '').trim()
        }))
    });
  }

  function remove() {
    if (!draftRow) return;
    onDelete(draftRow.id);
  }

  const open = $derived(editor !== null);
  const title = $derived(
    editor?.mode === 'create' ? 'New customer' : draftRow ? `Edit ${draftRow.name}` : 'Edit customer'
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
      aria-labelledby="customer-form-title"
      class="relative z-10 flex max-h-[90vh] w-full max-w-xl flex-col rounded-2xl border border-zinc-200 bg-white shadow-2xl"
    >
      <header class="flex items-start justify-between gap-3 border-b border-zinc-100 px-6 py-4">
        <h2 id="customer-form-title" class="text-lg font-bold text-zinc-900">{title}</h2>
        <button
          type="button"
          class="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100"
          onclick={onClose}
          aria-label="Close"
        >
          <X class="h-5 w-5" aria-hidden="true" />
        </button>
      </header>

      <div class="flex-1 overflow-y-auto px-6 py-5">
        {#if errors.general}
          <p class="mb-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-900">{errors.general}</p>
        {/if}

        <div class="grid gap-4 sm:grid-cols-2">
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 sm:col-span-2">
            Legal name
            <input
              bind:value={name}
              class="rounded-lg border bg-white px-3 py-2 text-sm {errors.name ? 'border-rose-500' : 'border-zinc-200'}"
              autocomplete="organization"
            />
            {#if errors.name}
              <span class="text-xs font-medium text-rose-700">{errors.name}</span>
            {/if}
          </label>
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
            Country
            <input
              bind:value={country}
              class="rounded-lg border bg-white px-3 py-2 text-sm uppercase {errors.country
                ? 'border-rose-500'
                : 'border-zinc-200'}"
              maxlength="3"
              placeholder="DE"
            />
            {#if errors.country}
              <span class="text-xs font-medium text-rose-700">{errors.country}</span>
            {/if}
          </label>
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
            Segment
            <input
              bind:value={segment}
              class="rounded-lg border bg-white px-3 py-2 text-sm {errors.segment ? 'border-rose-500' : 'border-zinc-200'}"
              placeholder="e.g. Industrial"
            />
            {#if errors.segment}
              <span class="text-xs font-medium text-rose-700">{errors.segment}</span>
            {/if}
          </label>
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
            Record type
            <select bind:value={kind} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
              <option value="customer">Customer</option>
              <option value="supplier">Supplier</option>
              <option value="both">Both</option>
            </select>
          </label>
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
            VAT ID
            <input
              bind:value={vatId}
              disabled={isPrivate}
              class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm disabled:bg-zinc-100"
              placeholder={isPrivate ? '— private person —' : 'DE…'}
            />
            <label class="mt-1 inline-flex items-center gap-1.5 text-[11px] font-medium text-zinc-500">
              <input type="checkbox" bind:checked={isPrivate} class="h-3 w-3" />
              Private person (no VAT-ID required)
            </label>
          </label>
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
            Health
            <select bind:value={health} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
              {#each healthOptions as h}
                <option value={h}>{h}</option>
              {/each}
            </select>
          </label>
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
            Billing email
            <input
              bind:value={email}
              type="email"
              class="rounded-lg border bg-white px-3 py-2 text-sm {errors.email ? 'border-rose-500' : 'border-zinc-200'}"
              placeholder="ap@…"
            />
            {#if errors.email}
              <span class="text-xs font-medium text-rose-700">{errors.email}</span>
            {/if}
          </label>
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
            Phone
            <input bind:value={phone} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
          </label>
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
            Payment terms (days)
            <input
              bind:value={paymentTermsDays}
              type="number"
              min="0"
              max="120"
              step="1"
              class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm tabular-nums"
            />
          </label>
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
            Billing currency
            <select bind:value={currencyCode} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
              <option value="EUR">EUR · €</option>
              <option value="USD">USD · $</option>
              <option value="GBP">GBP · £</option>
              <option value="CHF">CHF</option>
            </select>
          </label>
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 sm:col-span-2">
            Billing address
            <input bind:value={address} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
          </label>
          <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 sm:col-span-2">
            Internal notes
            <textarea
              bind:value={notes}
              rows="2"
              class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm"
              placeholder="Anything the team should know"
            ></textarea>
          </label>
        </div>

        <fieldset class="mt-6 grid gap-2">
          <legend class="text-xs font-bold uppercase tracking-wide text-zinc-500">Contacts</legend>
          {#if contacts.length === 0}
            <p class="text-xs text-zinc-500">No additional contacts yet.</p>
          {:else}
            <ul class="grid gap-2">
              {#each contacts as person (person.id)}
                <li class="rounded-lg border border-zinc-200 p-3">
                  <div class="grid gap-2 sm:grid-cols-2">
                    <input
                      value={person.role}
                      oninput={(e) => updateContact(person.id, { role: e.currentTarget.value })}
                      placeholder="Role (Billing, Tech, …)"
                      class="rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-sm"
                    />
                    <input
                      value={person.name}
                      oninput={(e) => updateContact(person.id, { name: e.currentTarget.value })}
                      placeholder="Name"
                      class="rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-sm"
                    />
                    <input
                      value={person.email}
                      oninput={(e) => updateContact(person.id, { email: e.currentTarget.value })}
                      type="email"
                      placeholder="email@example.com"
                      class="rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-sm"
                    />
                    <input
                      value={person.phone}
                      oninput={(e) => updateContact(person.id, { phone: e.currentTarget.value })}
                      placeholder="Phone"
                      class="rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-sm"
                    />
                  </div>
                  <button
                    type="button"
                    class="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-rose-700 hover:underline"
                    onclick={() => removeContact(person.id)}
                  >
                    <Trash2 class="h-3.5 w-3.5" aria-hidden="true" /> Remove
                  </button>
                </li>
              {/each}
            </ul>
          {/if}
          <button
            type="button"
            class="inline-flex w-fit items-center gap-1.5 rounded-md border border-dashed border-zinc-300 px-3 py-1.5 text-xs font-semibold text-leah-900 hover:bg-zinc-50"
            onclick={addContact}
          >
            ＋ Add contact
          </button>
        </fieldset>
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
            {editor?.mode === 'create' ? 'Create customer' : 'Save'}
          </button>
        </div>
      </footer>
    </div>
  </div>
{/if}
