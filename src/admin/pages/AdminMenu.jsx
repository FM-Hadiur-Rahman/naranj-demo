import { Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import MenuItemRow from "../components/MenuItemRow";
import { menuItems } from "../data/menu";

function AdminMenu() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return menuItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q),
    );
  }, [searchTerm]);

  return (
    <AdminLayout>
      <section>
        <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
              Menüverwaltung
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Gerichte & Kategorien verwalten
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-400">
              Speisen bearbeiten, Verfügbarkeit steuern und neue Gerichte dem
              Direktbestellsystem hinzufügen.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]">
            <Plus size={18} />
            Neues Gericht
          </button>
        </div>

        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-400">
          <Search size={18} />
          <input
            type="text"
            placeholder="Nach Gericht oder Kategorie suchen"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
          />
        </div>

        <div className="space-y-4">
          {filteredItems.map((item) => (
            <MenuItemRow key={item.id} item={item} />
          ))}
        </div>
      </section>
    </AdminLayout>
  );
}

export default AdminMenu;
