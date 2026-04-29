<script>
  let { icon = '✨', title, body, action = null, dense = false } = $props();
</script>

<div
  class={`flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white/60 text-center text-slate-600 dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-300 ${
    dense ? 'gap-2 px-4 py-6' : 'gap-3 px-6 py-10'
  }`}
>
  <div class="text-3xl" aria-hidden="true">{icon}</div>
  <p class={`font-semibold text-slate-900 dark:text-slate-100 ${dense ? 'text-sm' : 'text-base'}`}>{title}</p>
  {#if body}
    <p class="max-w-sm text-xs leading-relaxed opacity-80">{body}</p>
  {/if}
  {#if action}
    <button
      type="button"
      class="mt-1 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
      onclick={action.onClick}
      disabled={action.disabled}
      title={action.disabled ? action.disabledHint ?? 'Not available for this role' : ''}
    >
      {#if action.icon}<span aria-hidden="true">{action.icon}</span>{/if}
      <span>{action.label}</span>
    </button>
  {/if}
</div>
