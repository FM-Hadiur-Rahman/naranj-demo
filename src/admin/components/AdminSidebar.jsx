import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ReceiptText,
  UtensilsCrossed,
  Bike,
  Users,
  Settings,
} from "lucide-react";

const links = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/orders", label: "Bestellungen", icon: ReceiptText },
  { to: "/admin/menu", label: "Menü", icon: UtensilsCrossed },
  { to: "/admin/delivery", label: "Lieferung", icon: Bike },
  { to: "/admin/customers", label: "Kunden", icon: Users },
  { to: "/admin/settings", label: "Einstellungen", icon: Settings },
];

function AdminSidebar() {
  return (
    <aside className="w-full border-b border-white/10 bg-neutral-950 lg:min-h-screen lg:w-72 lg:border-b-0 lg:border-r">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 font-bold text-white shadow-lg">
            N
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[0.25em] text-white">
              NARANJ
            </p>
            <p className="text-xs text-neutral-400">Restaurant Admin</p>
          </div>
        </div>
      </div>

      <nav className="flex gap-2 overflow-x-auto px-4 pb-4 lg:block lg:space-y-2 lg:px-4">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex min-w-fit items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition lg:w-full ${
                isActive
                  ? "bg-white text-black"
                  : "bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSidebar;
