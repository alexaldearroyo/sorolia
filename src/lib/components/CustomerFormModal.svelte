<script>
  import X from 'lucide-svelte/icons/x';
  import Trash2 from 'lucide-svelte/icons/trash-2';

  let { editor, draftRow, onClose, onSave, onDelete } = $props();

  let name = $state('');
  let country = $state('');
  let segment = $state('');
  let health = $state('Good');

  let errors = $state({ name: '', country: '', segment: '', general: '' });

  const healthOptions = ['Good', 'Watch', 'At risk'];

  function clearErrors() {
    errors = { name: '', country: '', segment: '', general: '' };
  }

  function sync() {
    clearErrors();
    if (!editor) return;
    if (editor.mode === 'create') {
      name = '';
      country = 'DE';
      segment = '';
      health = 'Good';
    } else if (draftRow) {
      name = draftRow.name;
      country = draftRow.country;
      segment = draftRow.segment;
      health = draftRow.health;
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
    return ok;
  }

  function submit() {
    if (!validate()) return;
    onSave({
      id: editor.mode === 'edit' && draftRow ? draftRow.id : undefined,
      name: name.trim(),
      country: country.trim(),
      segment: segment.trim(),
      health
    });
  }

  function remove() {
    if (!draftRow) return;
    if (!window.confirm(`Delete customer “${draftRow.name}”?`)) return;
    onDelete(draftRow.id);
  }

  const open = $derived(editor !== null);
  const title = $derived(editor?.mode === 'create' ? 'New customer' : draftRow ? `Edit ${draftRow.name}` : 'Edit customer');
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
      aria-labelledby="customer-form-title"
      class="relative z-10 w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl"
    >
      <div class="flex items-start justify-between gap-3">
        <h2 id="customer-form-title" class="text-lg font-bold text-zinc-900">{title}</h2>
        <button type="button" class="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100" onclick={onClose} aria-label="Close">
          <X class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      {#if errors.general}
        <p class="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-900">{errors.general}</p>
      {/if}

      <div class="mt-5 grid gap-4">
        <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
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
          Health
          <select bind:value={health} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">
            {#each healthOptions as h}
              <option value={h}>{h}</option>
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
            {editor?.mode === 'create' ? 'Create customer' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
