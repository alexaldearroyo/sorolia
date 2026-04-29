<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { subscribeToasts, dismissToast } from '../toasts.js';

  let toasts = $state([]);

  onMount(() => subscribeToasts((next) => (toasts = next)));

  function kindStyles(kind) {
    if (kind === 'success') return 'border-emerald-200 bg-emerald-50 text-emerald-900';
    if (kind === 'warn') return 'border-amber-200 bg-amber-50 text-amber-900';
    if (kind === 'error') return 'border-rose-200 bg-rose-50 text-rose-900';
    return 'border-slate-200 bg-white text-slate-900';
  }
</script>

<div class="pointer-events-none fixed bottom-4 right-4 z-[80] flex w-full max-w-sm flex-col gap-2 print:hidden">
  {#each toasts as toast (toast.id)}
    <div
      role="status"
      class={`pointer-events-auto rounded-2xl border px-4 py-3 shadow-lg shadow-slate-900/10 ${kindStyles(toast.kind)}`}
      transition:fly|local={{ y: 16, duration: 220 }}
    >
      <div class="flex items-start gap-3">
        <div class="flex-1 text-sm">
          {#if toast.title}<p class="font-semibold">{toast.title}</p>{/if}
          {#if toast.body}<p class="mt-0.5 text-xs opacity-90">{toast.body}</p>{/if}
        </div>
        <button
          type="button"
          class="rounded-full p-1 text-slate-500 transition hover:bg-black/5"
          aria-label="Dismiss notification"
          onclick={() => dismissToast(toast.id)}
        >
          <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  {/each}
</div>
