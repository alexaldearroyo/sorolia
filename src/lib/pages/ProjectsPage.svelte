<script>
  import Users from 'lucide-svelte/icons/users';
  import FileText from 'lucide-svelte/icons/file-text';
  import X from 'lucide-svelte/icons/x';
  import { customerName } from '../workspaceActions.js';

  let {
    projects,
    totalProjects,
    customers,
    currency,
    paidByCustomerId,
    projectCustomerFilter,
    projectCustomerLabel,
    onClearProjectCustomerFilter,
    onOpenCustomer,
    onOpenInvoices
  } = $props();
</script>

<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
  <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h2 class="text-xl font-bold text-zinc-900">Project management</h2>
      <p class="mt-1 text-sm text-zinc-500">
        Budget vs paid invoices (same customer) · {totalProjects} initiatives
      </p>
    </div>
  </div>

  {#if projectCustomerFilter}
    <div class="mt-4 flex flex-wrap items-center gap-2">
      <span class="text-xs font-medium text-zinc-500">Filtered by customer</span>
      <span
        class="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-900"
      >
        {projectCustomerLabel}
        <button
          type="button"
          class="rounded-full p-0.5 hover:bg-sky-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          onclick={onClearProjectCustomerFilter}
          aria-label="Clear customer filter"
        >
          <X class="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </span>
    </div>
  {/if}

  <div class="mt-6 grid gap-4 md:grid-cols-2">
    {#each projects as p}
      {@const spent = paidByCustomerId(p.customerId) ?? 0}
      {@const pct = p.budget > 0 ? Math.min(100, Math.round((spent / p.budget) * 100)) : 0}
      <article class="rounded-xl border border-zinc-200 bg-zinc-50/40 p-4 shadow-sm">
        <div class="flex flex-wrap items-start justify-between gap-2">
          <h3 class="text-lg font-bold text-zinc-900">{p.name}</h3>
          <span
            class="rounded-full px-2.5 py-0.5 text-xs font-bold {p.status === 'Active'
              ? 'bg-emerald-100 text-emerald-900'
              : p.status === 'Planning'
                ? 'bg-sky-100 text-sky-900'
                : 'bg-zinc-200 text-zinc-700'}"
          >
            {p.status}
          </span>
        </div>
        <p class="mt-1 text-sm text-zinc-500">
          Owner <span class="font-medium text-zinc-700">{p.owner}</span>
        </p>
        <button
          type="button"
          class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-leah-800 hover:underline"
          onclick={() => onOpenCustomer(p.customerId)}
        >
          <Users class="h-4 w-4" aria-hidden="true" />
          {customerName(customers, p.customerId)}
        </button>
        <div class="mt-4">
          <div class="flex justify-between text-xs font-medium text-zinc-500">
            <span>Paid invoices (same customer)</span>
            <span class="tabular-nums text-zinc-800">{currency(spent)} / {currency(p.budget)}</span>
          </div>
          <div class="mt-1 h-2 overflow-hidden rounded-full bg-zinc-200">
            <div class="h-full rounded-full bg-leah-700" style={`width:${pct}%`}></div>
          </div>
        </div>
        <button
          type="button"
          class="mt-4 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-50"
          onclick={() => onOpenInvoices(p.customerId)}
        >
          <FileText class="h-4 w-4" aria-hidden="true" />
          Matching invoices
        </button>
      </article>
    {/each}
  </div>
</section>
