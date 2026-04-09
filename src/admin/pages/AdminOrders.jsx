import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import AdminLayout from "../components/AdminLayout";
import OrderCard from "../components/OrderCard";
import { orders as initialOrders } from "../data/orders";

function AdminOrders() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [orders, setOrders] = useState(initialOrders);

  const filters = [
    { key: "all", label: "Alle" },
    { key: "new", label: "Neu" },
    { key: "accepted", label: "Akzeptiert" },
    { key: "preparing", label: "In Zubereitung" },
    { key: "ready", label: "Bereit" },
    { key: "out_for_delivery", label: "Unterwegs" },
    { key: "delivered", label: "Geliefert" },
    { key: "cancelled", label: "Storniert" },
  ];

  const handleStatusChange = (orderId, nextStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: nextStatus } : order,
      ),
    );
  };

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesFilter =
        activeFilter === "all" ? true : order.status === activeFilter;

      const q = searchTerm.toLowerCase().trim();
      const matchesSearch =
        order.id.toLowerCase().includes(q) ||
        order.customerName.toLowerCase().includes(q) ||
        order.phone.toLowerCase().includes(q);

      return matchesFilter && matchesSearch;
    });
  }, [orders, activeFilter, searchTerm]);

  return (
    <AdminLayout>
      <section>
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
            Bestellungen
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Bestellungen verwalten
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Neue Bestellungen annehmen, Status aktualisieren und Liefer- oder
            Abholaufträge übersichtlich organisieren.
          </p>
        </div>

        <div className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeFilter === filter.key
                      ? "bg-white text-black"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/70 px-4 py-3 text-neutral-400">
              <Search size={18} />
              <input
                type="text"
                placeholder="Nach ID, Name oder Telefon suchen"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500 xl:w-80"
              />
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-neutral-400">Alle Bestellungen</p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {orders.length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-neutral-400">Neu</p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {orders.filter((o) => o.status === "new").length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-neutral-400">Unterwegs</p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {orders.filter((o) => o.status === "out_for_delivery").length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-neutral-400">Geliefert</p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {orders.filter((o) => o.status === "delivered").length}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onStatusChange={handleStatusChange}
              />
            ))
          ) : (
            <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-10 text-center">
              <p className="text-lg font-medium text-white">
                Keine Bestellungen gefunden
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Ändern Sie den Filter oder die Sucheingabe.
              </p>
            </div>
          )}
        </div>
      </section>
    </AdminLayout>
  );
}

export default AdminOrders;
