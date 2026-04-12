export const SIDEBAR_COLLAPSED_KEY = 'leah-sidebar-collapsed';

export function loadSidebarCollapsed() {
  if (typeof localStorage === 'undefined') return false;
  try {
    return localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === 'true';
  } catch {
    return false;
  }
}
