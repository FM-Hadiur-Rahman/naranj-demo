import {
  ReceiptText,
  Bike,
  ShoppingBag,
  Euro,
  Clock3,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { orders } from "../data/orders";

function AdminDashboard() {
  const totalOrders = orders.length;
  const deliveryOrders = orders.filter(
    (order) => order.type === "delivery",
  ).length;
  const pickupOrders = orders.filter((order) => order.type === "pickup").length;
  const revenueToday = orders.reduce((sum, order) => sum + order.total, 0);

  const activeOrders = orders.filter((order) =>
    ["new", "accepted", "preparing", "ready", "out_for_delivery"].includes(
      order.status,
    ),
  );

  const latestOrders = orders.slice(0, 4);

  return (
    <AdminLayout>
      <section>
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
            Übersicht
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Restaurant Dashboard
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Behalten Sie Bestellungen, Lieferungen, Abholungen und Umsatz im
            Blick — alles in einem modernen Direktbestell-System.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Bestellungen heute"
            value={totalOrders}
            subtitle="Alle eingegangenen Bestellungen"
            icon={ReceiptText}
          />
          <StatCard
            title="Lieferungen"
            value={deliveryOrders}
            subtitle="Aktive und geplante Zustellungen"
            icon={Bike}
          />
          <StatCard
            title="Abholungen"
            value={pickupOrders}
            subtitle="Kunden holen im Restaurant ab"
            icon={ShoppingBag}
          />
          <StatCard
            title="Umsatz heute"
            value={`€${revenueToday.toFixed(2)}`}
            subtitle="Direkt über eigenes System"
            icon={Euro}
          />
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-orange-300">
                  Live Bestellungen
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Aktive Aufträge
                </h3>
              </div>

              <Link
                to="/admin/orders"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Alle ansehen
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-4">
              {activeOrders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-2xl border border-white/10 bg-neutral-900/50 p-4"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h4 className="text-base font-semibold text-white">
                          {order.id}
                        </h4>
                        <StatusBadge status={order.status} />
                      </div>

                      <p className="mt-2 text-sm text-neutral-300">
                        {order.customerName} •{" "}
                        {order.type === "delivery" ? "Lieferung" : "Abholung"}
                      </p>

                      <p className="mt-1 text-sm text-neutral-500">
                        {order.address}
                      </p>
                    </div>

                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-neutral-500">
                          Gesamt
                        </p>
                        <p className="text-lg font-semibold text-white">
                          €{order.total.toFixed(2)}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide text-neutral-500">
                          Uhrzeit
                        </p>
                        <p className="inline-flex items-center gap-2 text-sm text-white">
                          <Clock3 size={14} />
                          {order.orderedAt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-orange-300">
                Direktbestellung
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Mehr Kontrolle, weniger Provision
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-200">
                Dieses Dashboard zeigt, wie das Restaurant Bestellungen direkt
                selbst verwalten kann — ohne Abhängigkeit von externen
                Plattformen.
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="text-sm text-neutral-200">
                    Eigene Bestellungen
                  </p>
                  <p className="mt-1 text-xl font-semibold text-white">
                    100% Kundenzugang
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="text-sm text-neutral-200">Provisionsvorteil</p>
                  <p className="mt-1 text-xl font-semibold text-white">
                    0% Plattformgebühr im eigenen Kanal
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-300">
                    Letzte Bestellungen
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Neu eingegangen
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {latestOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-neutral-900/50 p-4"
                  >
                    <div>
                      <p className="font-medium text-white">
                        {order.customerName}
                      </p>
                      <p className="mt-1 text-sm text-neutral-400">
                        {order.id}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-white">
                        €{order.total.toFixed(2)}
                      </p>
                      <p className="mt-1 text-sm text-neutral-400">
                        {order.orderedAt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/admin/orders"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-orange-300 transition hover:text-orange-200"
              >
                Bestellungen verwalten
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export default AdminDashboard;
