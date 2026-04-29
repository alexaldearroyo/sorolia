/**
 * Workspace-wide quick search. Results are bucketed by kind so the palette
 * can render labelled groups without re-sorting.
 */

function score(haystack, needle) {
  if (!needle) return 1;
  const h = haystack.toLowerCase();
  const n = needle.toLowerCase();
  if (h === n) return 100;
  if (h.startsWith(n)) return 80;
  if (h.includes(` ${n}`)) return 60;
  if (h.includes(n)) return 40;
  return 0;
}

/**
 * @param {string} query
 * @param {{
 *   customers: any[],
 *   invoices: any[],
 *   inventory: any[],
 *   projects: any[],
 *   employees: any[]
 * }} data
 */
export function searchWorkspace(query, data) {
  const q = query.trim();
  if (!q) {
    return {
      customers: data.customers.slice(0, 5).map((c) => ({ ...c, _score: 1 })),
      invoices: data.invoices.slice(0, 5).map((i) => ({ ...i, _score: 1 })),
      inventory: data.inventory.slice(0, 3).map((i) => ({ ...i, _score: 1 })),
      projects: data.projects.slice(0, 3).map((p) => ({ ...p, _score: 1 })),
      employees: data.employees.slice(0, 3).map((e) => ({ ...e, _score: 1 }))
    };
  }

  function rank(rows, fields, limit) {
    return rows
      .map((row) => {
        let s = 0;
        for (const f of fields) {
          if (!row[f]) continue;
          s = Math.max(s, score(String(row[f]), q));
        }
        return { ...row, _score: s };
      })
      .filter((r) => r._score > 0)
      .sort((a, b) => b._score - a._score)
      .slice(0, limit);
  }

  return {
    customers: rank(data.customers, ['name', 'email', 'segment', 'country', 'vatId'], 6),
    invoices: rank(data.invoices, ['id', 'customer', 'status', 'notes'], 6),
    inventory: rank(data.inventory, ['code', 'name'], 4),
    projects: rank(data.projects, ['name', 'owner', 'status'], 4),
    employees: rank(data.employees, ['name', 'role', 'department'], 4)
  };
}
