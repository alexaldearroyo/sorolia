<script>
  import FolderKanban from 'lucide-svelte/icons/folder-kanban';
  import { customerName } from '../workspaceActions.js';

  let { employees, projects, customers, onOpenProject } = $props();

  function projectLabel(projectId) {
    const p = projects.find((x) => x.id === projectId);
    if (!p) return '—';
    return `${p.name} · ${customerName(customers, p.customerId)}`;
  }
</script>

<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
  {#if employees.length === 0}
    <div class="flex flex-col items-center justify-center gap-2 px-4 py-16 text-center">
      <p class="text-base font-semibold text-zinc-800">No people in this workspace</p>
      <p class="max-w-sm text-sm text-zinc-500">
        People are tied to delivery projects in the demo seed. Reset demo data to repopulate the directory.
      </p>
    </div>
  {:else}
  <div class="overflow-x-auto rounded-lg border border-zinc-200">
    <table class="w-full min-w-[520px] text-left text-sm">
      <caption class="sr-only">Employees mapped to delivery projects</caption>
      <thead>
        <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500">
          <th class="px-4 py-3" scope="col">Name</th>
          <th class="px-4 py-3" scope="col">Role</th>
          <th class="px-4 py-3" scope="col">Department</th>
          <th class="px-4 py-3" scope="col">Assignment</th>
        </tr>
      </thead>
      <tbody>
        {#each employees as e}
          <tr class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80">
            <td class="px-4 py-3 font-semibold text-zinc-900">{e.name}</td>
            <td class="px-4 py-3 text-zinc-700">{e.role}</td>
            <td class="px-4 py-3 text-zinc-600">{e.department}</td>
            <td class="px-4 py-3">
              {#if e.projectId}
                <button
                  type="button"
                  class="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold text-leah-900 hover:bg-zinc-50"
                  onclick={() => onOpenProject(e.projectId)}
                >
                  <FolderKanban class="h-3.5 w-3.5" aria-hidden="true" />
                  {projectLabel(e.projectId)}
                </button>
              {:else}
                <span class="text-zinc-400">Central function</span>
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  {/if}
</section>
