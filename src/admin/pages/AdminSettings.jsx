import AdminLayout from "../components/AdminLayout";

function AdminSettings() {
  return (
    <AdminLayout>
      <section>
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
            Einstellungen
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Restaurant-Einstellungen
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Öffnungszeiten, Liefergebühren, Mindestbestellwert und
            Kontaktinformationen zentral verwalten.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Allgemein</h3>

            <div className="mt-6 grid gap-4">
              <input
                type="text"
                defaultValue="Naranj Restaurant"
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
              />
              <input
                type="text"
                defaultValue="Mülheim an der Ruhr"
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
              />
              <input
                type="text"
                defaultValue="+49 123 4567890"
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
              />
              <input
                type="text"
                defaultValue="https://wa.me/491234567890"
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">
              Lieferung & Zahlung
            </h3>

            <div className="mt-6 grid gap-4">
              <input
                type="text"
                defaultValue="2.90"
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
              />
              <input
                type="text"
                defaultValue="15.00"
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
              />
              <input
                type="text"
                defaultValue="5 km"
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
              />
              <select className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none">
                <option>Barzahlung</option>
                <option>Kartenzahlung</option>
                <option>Online Zahlung</option>
              </select>
            </div>
          </div>
        </div>

        <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
          Einstellungen speichern
        </button>
      </section>
    </AdminLayout>
  );
}

export default AdminSettings;
