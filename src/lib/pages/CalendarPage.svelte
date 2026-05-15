<script>
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import {
    collectWorkspaceEvents,
    eventsByDay,
    eventsForDay,
    getCalendarGrid,
    formatIsoToDe
  } from '../calendarUtils.js';
  import { invoiceAmount } from '../format.js';

  let {
    invoices,
    expenseItems,
    projects,
    customers = [],
    locale = 'en-GB',
    onOpenInvoiceEdit,
    onOpenExpenseEdit,
    onOpenProjectById,
    embedded = false
  } = $props();

  /** @type {'all' | 'invoice-due' | 'invoice-created' | 'expense' | 'project-review'} */
  let eventKindFilter = $state('all');

  const FILTER_OPTIONS = /** @type {const} */ ([
    { id: 'all', label: 'All' },
    { id: 'invoice-due', label: 'Dues' },
    { id: 'invoice-created', label: 'Issued' },
    { id: 'expense', label: 'Expenses' },
    { id: 'project-review', label: 'Reviews' }
  ]);

  let viewYear = $state(new Date().getFullYear());
  let viewMonth = $state(new Date().getMonth());

  function prevMonth() {
    const d = new Date(viewYear, viewMonth - 1, 1);
    viewYear = d.getFullYear();
    viewMonth = d.getMonth();
  }

  function nextMonth() {
    const d = new Date(viewYear, viewMonth + 1, 1);
    viewYear = d.getFullYear();
    viewMonth = d.getMonth();
  }

  let eventsRaw = $derived(collectWorkspaceEvents(invoices, expenseItems, projects, customers));
  let eventsFlat = $derived.by(() => {
    if (eventKindFilter === 'all') return eventsRaw;
    return eventsRaw.filter((e) => e.kind === eventKindFilter);
  });
  let eventMap = $derived(eventsByDay(eventsFlat));

  let grid = $derived(getCalendarGrid(viewYear, viewMonth));

  let selectedDay = $state(/** @type {string | null} */ (null));

  $effect(() => {
    viewYear;
    viewMonth;
    eventKindFilter;
    selectedDay = null;
  });

  let selectedEvents = $derived(selectedDay ? eventsForDay(eventMap, selectedDay) : []);

  const monthTitle = $derived(
    new Date(viewYear, viewMonth, 1).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
  );

  function dotClass(kind) {
    if (kind === 'invoice-due') return 'bg-rose-500';
    if (kind === 'invoice-created') return 'bg-sky-500';
    if (kind === 'expense') return 'bg-amber-500';
    return 'bg-leah-700';
  }

  const longDate = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  function cellAriaLabel(cell, count) {
    const base = longDate.format(cell.date);
    if (!count) return `${base} · no events`;
    return `${base} · ${count} event${count === 1 ? '' : 's'}`;
  }

  function openEvent(ev) {
    if (ev.kind === 'invoice-due' || ev.kind === 'invoice-created') onOpenInvoiceEdit(ev.refId);
    else if (ev.kind === 'expense') onOpenExpenseEdit(ev.refId);
    else if (ev.kind === 'project-review') onOpenProjectById(ev.refId);
  }

  function dayEventsFiltered(isoKey) {
    return eventsForDay(eventMap, isoKey);
  }
</script>

<section
  class="rounded-xl border border-zinc-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 {embedded
    ? 'p-4 sm:p-5'
    : 'p-5'}"
>
  <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
    <div class="flex flex-wrap items-center gap-1.5" role="group" aria-label="Event types shown on the calendar">
      {#each FILTER_OPTIONS as opt}
        <button
          type="button"
          aria-pressed={eventKindFilter === opt.id}
          class="rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide {eventKindFilter === opt.id
            ? 'border-leah-900 bg-leah-900 text-white'
            : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-300 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300'}"
          onclick={() => (eventKindFilter = opt.id)}
        >
          {opt.label}
        </button>
      {/each}
    </div>
    <div class="flex items-center justify-end gap-2 sm:justify-start">
      <button
        type="button"
        class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        onclick={prevMonth}
        aria-label="Previous month"
        title="Previous month"
      >
        <ChevronLeft class="h-4 w-4" aria-hidden="true" />
      </button>
      <span class="min-w-[10rem] text-center text-sm font-bold text-zinc-900 dark:text-slate-100">{monthTitle}</span>
      <button
        type="button"
        class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        onclick={nextMonth}
        aria-label="Next month"
        title="Next month"
      >
        <ChevronRight class="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  </div>

  <div class="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
    <div class="overflow-x-auto">
      <div class="grid grid-cols-7 gap-px rounded-lg border border-zinc-200 bg-zinc-200 text-center text-[11px] font-bold uppercase tracking-wide text-zinc-500 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-400">
        {#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as wd}
          <div class="bg-zinc-50 py-2 dark:bg-slate-800">{wd}</div>
        {/each}
      </div>
      <div class="grid grid-cols-7 gap-px rounded-b-lg border border-t-0 border-zinc-200 bg-zinc-200 dark:border-slate-700 dark:bg-slate-700">
        {#each grid as cell}
          {@const dayEvents = dayEventsFiltered(cell.isoKey)}
          <button
            type="button"
            aria-label={cellAriaLabel(cell, dayEvents.length)}
            aria-pressed={selectedDay === cell.isoKey}
            class="min-h-[5.5rem] bg-white p-1.5 text-left transition hover:bg-zinc-50 dark:bg-slate-900 dark:hover:bg-slate-800 sm:min-h-[6.5rem] {!cell.inMonth
              ? 'opacity-40'
              : ''} {selectedDay === cell.isoKey ? 'ring-2 ring-inset ring-leah-700' : ''}"
            onclick={() => (selectedDay = cell.isoKey)}
          >
            <span class="text-xs font-semibold text-zinc-800 dark:text-slate-200" aria-hidden="true">{cell.date.getDate()}</span>
            <div class="mt-1 space-y-0.5 overflow-hidden">
              {#each dayEvents.slice(0, 2) as ev}
                <p class="flex min-w-0 items-center gap-1 text-[11px] leading-snug text-zinc-600 dark:text-slate-300 sm:text-xs" title={ev.title}>
                  <span class="h-2 w-2 shrink-0 rounded-full {dotClass(ev.kind)}" aria-hidden="true"></span>
                  <span class="min-w-0 truncate font-medium">{ev.summary}</span>
                  {#if ev.amount != null}
                    <span class="ml-auto shrink-0 tabular-nums text-zinc-400 dark:text-slate-500">{invoiceAmount(ev.amount, ev.currency)}</span>
                  {/if}
                </p>
              {/each}
              {#if dayEvents.length > 2}
                <p class="text-[11px] font-bold text-zinc-400 dark:text-slate-500 sm:text-xs">+{dayEvents.length - 2} more</p>
              {/if}
            </div>
          </button>
        {/each}
      </div>
      <div class="mt-3 flex flex-wrap gap-3 text-xs text-zinc-600 dark:text-slate-300">
        <span class="inline-flex items-center gap-1.5"><i class="h-2 w-2 rounded-full bg-rose-500"></i> Invoice due</span>
        <span class="inline-flex items-center gap-1.5"><i class="h-2 w-2 rounded-full bg-sky-500"></i> Invoice issued</span>
        <span class="inline-flex items-center gap-1.5"><i class="h-2 w-2 rounded-full bg-amber-500"></i> Expense</span>
        <span class="inline-flex items-center gap-1.5"><i class="h-2 w-2 rounded-full bg-leah-700"></i> Project review</span>
      </div>
    </div>

    <aside class="rounded-xl border border-zinc-200 bg-zinc-50/60 p-4 dark:border-slate-700 dark:bg-slate-800/60">
      {#if selectedDay}
        <h3 class="text-sm font-bold text-zinc-900 dark:text-slate-100">{formatIsoToDe(selectedDay, locale)}</h3>
        <p class="mt-1 text-xs text-zinc-500 dark:text-slate-400">{selectedEvents.length} event{selectedEvents.length === 1 ? '' : 's'}</p>
        <ul class="mt-3 max-h-[min(60vh,28rem)] space-y-2 overflow-y-auto">
          {#each selectedEvents as ev}
            <li>
              <button
                type="button"
                class="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-left text-sm transition hover:border-leah-300 hover:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                onclick={() => openEvent(ev)}
              >
                <span class="block text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-slate-500"
                  >{ev.kind.replaceAll('-', ' ')}</span
                >
                <span class="mt-0.5 block font-medium text-zinc-900 dark:text-slate-100">{ev.summary || ev.title}</span>
                {#if ev.amount != null}
                  <span class="mt-0.5 block text-xs tabular-nums text-zinc-600 dark:text-slate-300">{invoiceAmount(ev.amount, ev.currency)}</span>
                {/if}
                <span class="mt-0.5 block text-[10px] text-zinc-400 dark:text-slate-500">{ev.title}</span>
              </button>
            </li>
          {:else}
            <li class="text-sm text-zinc-500 dark:text-slate-400">Nothing scheduled — pick another day.</li>
          {/each}
        </ul>
      {:else}
        <p class="text-sm text-zinc-600 dark:text-slate-300">Select a day to see linked invoices, expenses and project reviews.</p>
      {/if}
    </aside>
  </div>
</section>
