<script>
  import Pencil from 'lucide-svelte/icons/pencil';
  import FileText from 'lucide-svelte/icons/file-text';
  import FolderKanban from 'lucide-svelte/icons/folder-kanban';
  import Package from 'lucide-svelte/icons/package';
  import CustomerFormModal from '../components/CustomerFormModal.svelte';

  let {
    customerEditor = $bindable(null),
    customers,
    invoices,
    projects,
    currency,
    onUpsertCustomer,
    onDeleteCustomer,
    onOpenInvoices,
    onOpenProjects,
    onOpenInventory
  } = $props();

  let customerDraft = $derived(
    customerEditor?.mode === 'edit'
      ? customers.find((c) => c.id === customerEditor.id) ?? null
      : null
  );

  function closeEditor() {
    customerEditor = null;
  }

  function saveCustomer(payload) {
    onUpsertCustomer(payload);
    closeEditor();
  }

  function deleteCustomer(id) {
    onDeleteCustomer(id);
  }

  function openCount(cid) {
    return invoices.filter(
      (i) => i.customerId === cid && (i.status === 'Open' || i.status === 'Overdue')
    ).length;
  }

  function paidTotal(cid) {
    return invoices.filter((i) => i.customerId === cid && i.status === 'Paid').reduce((s, i) => s + i.amount, 0);
  }

  function projectCount(cid) {
    return projects.filter((p) => p.customerId === cid).length;
  }
</script>

<CustomerFormModal
  editor={customerEditor}
  draftRow={customerDraft}
  onClose={closeEditor}
  onSave={saveCustomer}
  onDelete={deleteCustomer}
/>

<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
  {#if customers.length === 0}
    <div class="flex flex-col items-center justify-center gap-2 px-4 py-16 text-center">
      <p class="text-base font-semibold text-zinc-800">No customers in this workspace</p>
      <p class="max-w-sm text-sm text-zinc-500">
        Add the first account from the “New customer” button at the top — invoices, projects and stock will roll up here.
      </p>
    </div>
  {:else}
    <div class="overflow-x-auto rounded-lg border border-zinc-200">
      <table class="w-full min-w-[720px] text-left text-sm">
        <caption class="sr-only">Customer master directory</caption>
        <thead>
          <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500">
            <th class="px-4 py-3" scope="col">Customer</th>
            <th class="px-4 py-3" scope="col">Country</th>
            <th class="px-4 py-3" scope="col">Segment</th>
            <th class="px-4 py-3" scope="col">Health</th>
            <th class="px-4 py-3 text-right" scope="col">Open / overdue</th>
            <th class="px-4 py-3 text-right" scope="col">Paid (demo)</th>
            <th class="px-4 py-3" scope="col">Jump</th>
            <th class="px-4 py-3 text-right" scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {#each customers as c}
            <tr class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80">
              <td class="px-4 py-3 font-semibold text-zinc-900">{c.name}</td>
              <td class="px-4 py-3 text-zinc-600">{c.country}</td>
              <td class="px-4 py-3 text-zinc-600">{c.segment}</td>
              <td class="px-4 py-3">
                <span
                  class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold {c.health === 'At risk'
                    ? 'bg-rose-100 text-rose-900'
                    : c.health === 'Watch'
                      ? 'bg-amber-100 text-amber-950'
                      : 'bg-emerald-50 text-emerald-900'}"
                >
                  {c.health}
                </span>
              </td>
              <td class="px-4 py-3 text-right tabular-nums text-zinc-800">{openCount(c.id)}</td>
              <td class="px-4 py-3 text-right font-semibold tabular-nums text-zinc-900">{currency(paidTotal(c.id))}</td>
              <td class="px-4 py-3">
                <div class="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    class="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold text-leah-900 hover:bg-zinc-50"
                    onclick={() => onOpenInvoices(c.id)}
                  >
                    <FileText class="h-3.5 w-3.5" aria-hidden="true" />
                    Invoices
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold text-leah-900 hover:bg-zinc-50 disabled:opacity-40"
                    disabled={projectCount(c.id) === 0}
                    onclick={() => onOpenProjects(c.id)}
                  >
                    <FolderKanban class="h-3.5 w-3.5" aria-hidden="true" />
                    Projects
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold text-leah-900 hover:bg-zinc-50"
                    onclick={() => onOpenInventory(c.id)}
                  >
                    <Package class="h-3.5 w-3.5" aria-hidden="true" />
                    Stock
                  </button>
                </div>
              </td>
              <td class="px-4 py-3 text-right">
                <button
                  type="button"
                  class="rounded-md border border-zinc-200 bg-white p-2 text-zinc-700 hover:bg-zinc-50"
                  onclick={() => (customerEditor = { mode: 'edit', id: c.id })}
                  aria-label="Edit {c.name}"
                  title="Edit {c.name}"
                >
                  <Pencil class="h-4 w-4" aria-hidden="true" />
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</section>
