import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import AdminLayout from "../components/AdminLayout";
import OrderCard from "../components/OrderCard";
import { useOrders } from "../../context/OrderContext";

function AdminOrders() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { orders, updateOrderStatus } = useOrders();

  const filters = [
    { key: "all", label: "Alle" },
    { key: "new", label: "Neu" },
    { key: "confirmed", label: "Bestätigt" },
    { key: "accepted", label: "Akzeptiert" },
    { key: "preparing", label: "In Zubereitung" },
    { key: "ready", label: "Bereit" },
    { key: "out_for_delivery", label: "Unterwegs" },
    { key: "delivered", label: "Geliefert" },
    { key: "cancelled", label: "Storniert" },
  ];

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

        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onStatusChange={updateOrderStatus}
            />
          ))}
        </div>
      </section>
    </AdminLayout>
  );
}

export default AdminOrders;
