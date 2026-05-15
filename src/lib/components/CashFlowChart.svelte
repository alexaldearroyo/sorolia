<script>
  /** @type {{ label: string, income: number, expenses: number, pending: number }[]} */
  let { bars, layout, periodLabel } = $props();

  const W = 640;
  const H = 220;
  const padL = 36;
  const padR = 12;
  const padT = 12;
  const padB = 36;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const n = $derived(Math.max(1, bars.length));
  const slotW = $derived(innerW / n);
  const barW = $derived(layout === 'grouped' ? Math.min(18, slotW / 4) : slotW * 0.62);

  /**
   * Y axis upper bound. In grouped mode each series is its own bar (0–100 fits).
   * In stacked mode the sum can exceed 100, so we scale up to the max sum and
   * round to a nice tick (next multiple of 25) so the eje stays legible.
   */
  const yMax = $derived.by(() => {
    if (layout !== 'stacked') return 100;
    const peak = bars.reduce(
      (m, b) => Math.max(m, b.income + b.expenses + b.pending),
      0
    );
    if (peak <= 100) return 100;
    return Math.ceil(peak / 25) * 25;
  });

  const ticks = $derived.by(() => {
    const step = yMax / 4;
    return [0, step, step * 2, step * 3, yMax].map((v) => Math.round(v));
  });

  function yForValue(v) {
    return padT + innerH * (1 - v / yMax);
  }

  /** Net pulse occupies the bottom 60% of the canvas to keep a clean separation. */
  const netPoints = $derived.by(() => {
    const pts = [];
    for (let i = 0; i < bars.length; i++) {
      const b = bars[i];
      const net = Math.max(-40, Math.min(100, b.income - b.expenses));
      const x = padL + slotW * (i + 0.5);
      const y = padT + innerH * (1 - (net + 40) / 140);
      pts.push({ x, y, net });
    }
    return pts;
  });

  const linePath = $derived.by(() => {
    const pts = netPoints;
    if (!pts.length) return '';
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
  });

  const axisLabel = $derived(layout === 'stacked' ? `0–${yMax} stacked` : '0–100 per series');
</script>

<div class="overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50/80 p-3 dark:border-slate-800 dark:bg-slate-800/40">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-2">
    <p class="text-xs font-semibold uppercase tracking-wide text-zinc-500">Rhythm · {periodLabel}</p>
    <span class="text-[10px] font-medium text-zinc-400">{axisLabel} · demo</span>
  </div>
  <svg
    class="mt-2 block h-auto w-full max-w-full text-zinc-900 dark:text-slate-100"
    viewBox={`0 0 ${W} ${H}`}
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Cash flow composition and net pulse"
  >
    {#each ticks as t}
      <line
        x1={padL}
        y1={yForValue(t)}
        x2={W - padR}
        y2={yForValue(t)}
        stroke={t === 0 || t === yMax ? '#e4e4e7' : '#f4f4f5'}
        stroke-width="1"
      />
      <text x={padL - 6} y={yForValue(t) + 3} text-anchor="end" class="fill-zinc-400 text-[9px] font-medium">
        {t}
      </text>
    {/each}

    {#each bars as b, i}
      {@const x0 = padL + slotW * i + (layout === 'grouped' ? slotW * 0.12 : slotW * 0.19)}
      {#if layout === 'stacked'}
        {@const hInc = innerH * (b.income / yMax)}
        {@const hExp = innerH * (b.expenses / yMax)}
        {@const hPen = innerH * (b.pending / yMax)}
        {@const yBase = padT + innerH}
        <rect
          x={x0}
          y={yBase - hInc}
          width={barW}
          height={hInc}
          rx="3"
          fill="#0ea5e9"
          opacity="0.92"
        >
          <title>Inflows {b.raw?.income ? `· ${b.raw.income.toLocaleString('de-DE')} €` : `· ${b.income} %`}</title>
        </rect>
        <rect
          x={x0}
          y={yBase - hInc - hExp}
          width={barW}
          height={hExp}
          rx="3"
          fill="#f43f5e"
          opacity="0.9"
        >
          <title>Outflows {b.raw?.expenses ? `· ${b.raw.expenses.toLocaleString('de-DE')} €` : `· ${b.expenses} %`}</title>
        </rect>
        <rect
          x={x0}
          y={yBase - hInc - hExp - hPen}
          width={barW}
          height={hPen}
          rx="3"
          fill="#fbbf24"
          opacity="0.95"
        >
          <title>In transit {b.raw?.pending ? `· ${b.raw.pending.toLocaleString('de-DE')} €` : `· ${b.pending} %`}</title>
        </rect>
      {:else}
        {@const gap = 4}
        {@const w3 = (barW - gap * 2) / 3}
        {#each [{ v: b.income, c: '#0ea5e9', t: 'In' }, { v: b.expenses, c: '#f43f5e', t: 'Out' }, { v: b.pending, c: '#fbbf24', t: 'Pend' }] as s, j}
          {@const h = innerH * (s.v / yMax)}
          <rect
            x={x0 + j * (w3 + gap)}
            y={padT + innerH - h}
            width={w3}
            height={h}
            rx="2"
            fill={s.c}
            opacity="0.9"
          >
            <title>{s.t} {s.v}</title>
          </rect>
        {/each}
      {/if}
      <text
        x={padL + slotW * (i + 0.5)}
        y={H - 8}
        text-anchor="middle"
        class="fill-zinc-500 text-[10px] font-semibold"
      >
        {b.label}
      </text>
    {/each}

    <path
      d={linePath}
      fill="none"
      stroke="#132447"
      stroke-width="2.25"
      stroke-linecap="round"
      stroke-linejoin="round"
      opacity="0.85"
    >
      <title>Net pulse (inflows − outflows, scaled)</title>
    </path>
    {#each netPoints as p}
      <circle cx={p.x} cy={p.y} r="3.5" fill="#132447" stroke="white" stroke-width="1.5" opacity="0.95">
        <title>Net ≈ {p.net}</title>
      </circle>
    {/each}
  </svg>
</div>
