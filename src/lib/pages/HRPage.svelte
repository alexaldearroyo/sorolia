<script>
  import FolderKanban from 'lucide-svelte/icons/folder-kanban';
  import Search from 'lucide-svelte/icons/search';
  import { customerName } from '../workspaceActions.js';
  import EmptyState from '../components/EmptyState.svelte';

  let { employees, projects, customers, onOpenProject } = $props();

  let query = $state('');
  let department = $state('All');

  function projectLabel(projectId) {
    const p = projects.find((x) => x.id === projectId);
    if (!p) return '—';
    return `${p.name} · ${customerName(customers, p.customerId)}`;
  }

  let departments = $derived(['All', ...new Set(employees.map((e) => e.department))]);

  let filtered = $derived.by(() => {
    let rows = employees;
    if (department !== 'All') rows = rows.filter((e) => e.department === department);
    if (query.trim()) {
      const q = query.toLowerCase();
      rows = rows.filter((e) =>
        [e.name, e.role, e.department, projectLabel(e.projectId)].some((v) =>
          (v ?? '').toString().toLowerCase().includes(q)
        )
      );
    }
    return rows;
  });
</script>

<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
  <header class="mb-4 flex flex-wrap items-center gap-3">
    <div class="relative flex-1 min-w-[14rem]">
      <Search class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" aria-hidden="true" />
      <input
        bind:value={query}
        type="search"
        placeholder="Search people, roles, projects"
        class="w-full rounded-lg border border-zinc-200 bg-white py-2 pl-9 pr-3 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />
    </div>
    <div class="flex flex-wrap gap-2">
      {#each departments as d}
        <button
          type="button"
          aria-pressed={department === d}
          class="rounded-full border px-3 py-1 text-xs font-semibold {department === d
            ? 'border-leah-900 bg-leah-900 text-white'
            : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'}"
          onclick={() => (department = d)}
        >
          {d}
        </button>
      {/each}
    </div>
  </header>

  {#if filtered.length === 0}
    <EmptyState
      icon="🧑‍💼"
      title={employees.length === 0 ? 'No people in this workspace' : 'No matches'}
      body={employees.length === 0
        ? 'People are tied to delivery projects in the demo seed. Reset demo data to repopulate the directory.'
        : 'Try clearing the search or department filter to see everyone.'}
    />
  {:else}
    <ul class="grid gap-3 md:hidden">
      {#each filtered as e}
        <li class="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <p class="text-sm font-bold text-zinc-900 dark:text-slate-100">{e.name}</p>
          <p class="text-xs text-zinc-500 dark:text-slate-400">{e.role} · {e.department}</p>
          {#if e.projectId}
            <button
              type="button"
              class="mt-3 inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              onclick={() => onOpenProject(e.projectId)}
            >
              <FolderKanban class="h-3.5 w-3.5" aria-hidden="true" />
              {projectLabel(e.projectId)}
            </button>
          {:else}
            <p class="mt-3 text-xs text-zinc-400">Central function</p>
          {/if}
        </li>
      {/each}
    </ul>

    <div class="hidden overflow-x-auto rounded-lg border border-zinc-200 md:block dark:border-slate-700">
      <table class="w-full min-w-[520px] text-left text-sm">
        <caption class="sr-only">Employees mapped to delivery projects</caption>
        <thead class="sticky top-0 z-10">
          <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            <th class="px-4 py-3" scope="col">Name</th>
            <th class="px-4 py-3" scope="col">Role</th>
            <th class="px-4 py-3" scope="col">Department</th>
            <th class="px-4 py-3" scope="col">Assignment</th>
          </tr>
        </thead>
        <tbody>
          {#each filtered as e}
            <tr class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80 dark:border-slate-800 dark:hover:bg-slate-800/60">
              <td class="px-4 py-3 font-semibold text-zinc-900 dark:text-slate-100">{e.name}</td>
              <td class="px-4 py-3 text-zinc-700 dark:text-slate-300">{e.role}</td>
              <td class="px-4 py-3 text-zinc-600 dark:text-slate-400">{e.department}</td>
              <td class="px-4 py-3">
                {#if e.projectId}
                  <button
                    type="button"
                    class="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold text-leah-900 hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
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
