export function currency(value) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
}

export function statusBadgeClass(status) {
  switch (status.toLowerCase()) {
    case 'offer':
      return 'bg-zinc-200 text-zinc-700 ring-zinc-300/80';
    case 'open':
      return 'bg-amber-100 text-amber-950 ring-amber-300/80';
    case 'paid':
      return 'bg-green-50 text-sky-950 ring-sky-300/80';
    case 'overdue':
      return 'bg-rose-100 text-rose-950 ring-rose-300/80';
    default:
      return 'bg-zinc-100 text-zinc-600 ring-zinc-200';
  }
}
