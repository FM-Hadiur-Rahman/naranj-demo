import AdminLayout from "../components/AdminLayout";
import DriverCard from "../components/DriverCard";

const drivers = [
  {
    id: 1,
    name: "Samir Khan",
    phone: "+49 176 5556677",
    vehicle: "Auto",
    activeOrders: 2,
    nextOrderId: "ORD-1044",
    address: "Düsseldorfer Straße 88, 45481 Mülheim an der Ruhr",
    status: "out_for_delivery",
  },
  {
    id: 2,
    name: "Yusuf Ali",
    phone: "+49 152 3332211",
    vehicle: "Roller",
    activeOrders: 1,
    nextOrderId: "ORD-1042",
    address: "Berliner Straße 15, 45470 Mülheim an der Ruhr",
    status: "accepted",
  },
];

function AdminDelivery() {
  return (
    <AdminLayout>
      <section>
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
            Lieferung
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Fahrer & Zustellungen
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Lieferaufträge verwalten, Fahrer koordinieren und den Status aktiver
            Zustellungen im Blick behalten.
          </p>
        </div>

        <div className="mb-6 grid gap-5 xl:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-neutral-400">Aktive Fahrer</p>
            <p className="mt-3 text-3xl font-semibold text-white">2</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-neutral-400">Laufende Lieferungen</p>
            <p className="mt-3 text-3xl font-semibold text-white">3</p>
          </div>

          <div className="rounded-3xl border border-orange-400/20 bg-gradient-to-r from-orange-500/20 to-red-500/20 p-5">
            <p className="text-sm text-neutral-200">Ø Lieferzeit</p>
            <p className="mt-3 text-3xl font-semibold text-white">29 Min</p>
          </div>
        </div>

        <div className="space-y-6">
          {drivers.map((driver) => (
            <DriverCard key={driver.id} driver={driver} />
          ))}
        </div>
      </section>
    </AdminLayout>
  );
}

export default AdminDelivery;
