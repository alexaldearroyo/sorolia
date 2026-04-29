<script>
  import Save from 'lucide-svelte/icons/save';
  import Lock from 'lucide-svelte/icons/lock';
  import RotateCcw from 'lucide-svelte/icons/rotate-ccw';

  let {
    company,
    settings,
    canWrite = false,
    canReset = false,
    persistEnabled = false,
    onSave,
    onResetDemo,
    onTogglePersist
  } = $props();

  let draft = $state({});
  let saved = $state(false);

  $effect(() => {
    draft = structuredClone({ ...company, ...settings });
  });

  function save() {
    onSave?.(draft);
    saved = true;
    setTimeout(() => (saved = false), 2400);
  }
</script>

<section class="grid gap-5">
  {#if !canWrite}
    <p class="flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <Lock class="h-4 w-4" aria-hidden="true" />
      Read-only · only the workspace Owner can change settings.
    </p>
  {/if}

  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <header>
      <h2 class="text-lg font-bold text-zinc-900">Company profile</h2>
      <p class="text-sm text-zinc-500">Used as the issuer block on invoice previews and exports.</p>
    </header>
    <fieldset class="mt-4 grid gap-4 sm:grid-cols-2" disabled={!canWrite}>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700 sm:col-span-2">
        Legal name
        <input bind:value={draft.legalName} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Trade name
        <input bind:value={draft.tradeName} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        VAT ID
        <input bind:value={draft.vatId} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Street
        <input bind:value={draft.street} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Postal code
        <input bind:value={draft.postalCode} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        City
        <input bind:value={draft.city} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Country
        <input bind:value={draft.country} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm uppercase" maxlength="3" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        IBAN
        <input bind:value={draft.iban} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        BIC
        <input bind:value={draft.bic} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Registry
        <input bind:value={draft.registry} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Phone
        <input bind:value={draft.phone} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Email
        <input bind:value={draft.email} type="email" class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Website
        <input bind:value={draft.website} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
    </fieldset>
  </article>

  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
    <header>
      <h2 class="text-lg font-bold text-zinc-900">Invoicing &amp; tax</h2>
      <p class="text-sm text-zinc-500">Defaults applied to new invoices and expense exports.</p>
    </header>
    <fieldset class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" disabled={!canWrite}>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Invoice prefix
        <input bind:value={draft.invoicePrefix} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Next invoice number
        <input
          bind:value={draft.invoiceNextNumber}
          type="number"
          min="1"
          step="1"
          class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm tabular-nums"
        />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Default VAT (%)
        <input
          bind:value={draft.defaultVat}
          type="number"
          min="0"
          max="30"
          step="1"
          class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm tabular-nums"
        />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Payment terms (days)
        <input
          bind:value={draft.paymentTermsDays}
          type="number"
          min="0"
          max="120"
          step="1"
          class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm tabular-nums"
        />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Fiscal year start (MM-DD)
        <input bind:value={draft.fiscalYearStart} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm" />
      </label>
      <label class="grid gap-1.5 text-sm font-semibold text-zinc-700">
        Currency
        <input bind:value={draft.currency} class="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm uppercase" maxlength="3" />
      </label>
    </fieldset>
  </article>

  <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <header>
      <h2 class="text-lg font-bold text-zinc-900 dark:text-slate-100">Local persistence</h2>
      <p class="text-sm text-zinc-500 dark:text-slate-400">
        Save your edits to <code>localStorage</code> so they survive page refreshes. The demo stays client-only — nothing leaves this browser.
      </p>
    </header>
    <label class="mt-3 inline-flex cursor-pointer items-center gap-3 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900">
      <input
        type="checkbox"
        checked={persistEnabled}
        onchange={(e) => onTogglePersist?.(e.currentTarget.checked)}
        class="h-4 w-4"
      />
      <span class="font-semibold text-zinc-800 dark:text-slate-100">Persist edits in this browser</span>
      <span class="text-xs text-zinc-500 dark:text-slate-400">
        {persistEnabled ? 'On · changes survive refresh' : 'Off · session-only'}
      </span>
    </label>
  </article>

  <article class="rounded-xl border border-amber-200 bg-amber-50/60 p-5 shadow-sm">
    <header class="flex items-start gap-3">
      <RotateCcw class="mt-1 h-5 w-5 text-amber-700" aria-hidden="true" />
      <div>
        <h2 class="text-lg font-bold text-amber-900">Demo workspace</h2>
        <p class="text-sm text-amber-900/80">Restore customers, invoices, expenses, projects, inventory and people from the seed dataset.</p>
      </div>
    </header>
    <button
      type="button"
      class="mt-3 inline-flex items-center gap-2 rounded-lg border border-amber-300 bg-white px-3 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-50"
      onclick={onResetDemo}
      disabled={!canReset}
    >
      <RotateCcw class="h-4 w-4" aria-hidden="true" />
      Reset demo data
    </button>
    {#if !canReset}
      <p class="mt-2 text-xs text-amber-900/70">Owner only.</p>
    {/if}
  </article>

  {#if canWrite}
    <div class="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-zinc-200/80 bg-white p-4 shadow-sm">
      <p class="text-sm text-zinc-500">
        {#if saved}
          <span class="font-semibold text-emerald-700">Saved.</span>
        {:else}
          Changes are kept in memory for this session.
        {/if}
      </p>
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2 text-sm font-semibold text-white hover:bg-leah-950"
        onclick={save}
      >
        <Save class="h-4 w-4" aria-hidden="true" />
        Save settings
      </button>
    </div>
  {/if}
</section>
