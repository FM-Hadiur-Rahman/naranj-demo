import { Gift, Search, Users } from "lucide-react";
import { useMemo, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { customers } from "../data/customers";

function AdminCustomers() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(q) ||
        customer.phone.toLowerCase().includes(q) ||
        customer.segment.toLowerCase().includes(q),
    );
  }, [searchTerm]);

  return (
    <AdminLayout>
      <section>
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
            Kunden & Loyalty
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Stammkunden verwalten
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Wiederkehrende Kunden erkennen, Punkte verwalten und Aktionen für
            loyale Gäste vorbereiten.
          </p>
        </div>

        <div className="mb-6 grid gap-5 xl:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3">
              <Users className="text-orange-400" />
              <h3 className="text-lg font-semibold text-white">
                Aktive Kunden
              </h3>
            </div>
            <p className="mt-4 text-3xl font-semibold text-white">
              {customers.length}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3">
              <Gift className="text-orange-400" />
              <h3 className="text-lg font-semibold text-white">
                Rewards Programm
              </h3>
            </div>
            <p className="mt-4 text-3xl font-semibold text-white">425 Punkte</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-orange-500/20 to-red-500/20 p-5">
            <h3 className="text-lg font-semibold text-white">
              Kampagne starten
            </h3>
            <p className="mt-3 text-sm text-neutral-200">
              Senden Sie 10% Rabatt an Stammkunden.
            </p>
            <button className="mt-4 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">
              Aktion erstellen
            </button>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-400">
          <Search size={18} />
          <input
            type="text"
            placeholder="Kunde, Telefonnummer oder Segment suchen"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
          />
        </div>

        <div className="space-y-4">
          {filteredCustomers.map((customer) => (
            <div
              key={customer.id}
              className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_auto] md:items-center"
            >
              <div>
                <h3 className="text-base font-semibold text-white">
                  {customer.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  {customer.phone}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Bestellungen
                </p>
                <p className="mt-1 text-base font-semibold text-white">
                  {customer.orders}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Punkte
                </p>
                <p className="mt-1 text-base font-semibold text-white">
                  {customer.points}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Segment
                </p>
                <span className="mt-1 inline-flex rounded-full bg-orange-500/15 px-3 py-1 text-xs font-medium text-orange-300 ring-1 ring-orange-500/20">
                  {customer.segment}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black">
                  Details
                </button>
                <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
                  Coupon
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AdminLayout>
  );
}

export default AdminCustomers;
