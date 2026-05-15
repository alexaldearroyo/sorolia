import LayoutDashboard from 'lucide-svelte/icons/layout-dashboard';
import FileText from 'lucide-svelte/icons/file-text';
import Receipt from 'lucide-svelte/icons/receipt';
import Package from 'lucide-svelte/icons/package';
import Users from 'lucide-svelte/icons/users';
import Truck from 'lucide-svelte/icons/truck';
import FolderKanban from 'lucide-svelte/icons/folder-kanban';
import Briefcase from 'lucide-svelte/icons/briefcase';

export const menu = [
  { id: 'home', label: 'Dashboard', key: 'H', icon: LayoutDashboard },
  { id: 'invoices', label: 'Invoices', key: 'I', icon: FileText },
  { id: 'expenses', label: 'Expenses', key: 'E', icon: Receipt },
  { id: 'inventory', label: 'Inventory', key: 'N', icon: Package },
  { id: 'customers', label: 'Customers', key: 'C', icon: Users },
  { id: 'suppliers', label: 'Suppliers', key: 'S', icon: Truck },
  { id: 'projects', label: 'Projects', key: 'P', icon: FolderKanban },
  { id: 'hr', label: 'People', key: 'R', icon: Briefcase }
];
