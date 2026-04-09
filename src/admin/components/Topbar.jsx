import { Bell, Search, Store } from "lucide-react";

function Topbar() {
  return (
    <header className="border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="flex flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm text-neutral-400">Restaurant Admin Panel</p>
          <h1 className="mt-1 text-2xl font-semibold text-white">
            Direktbestellungen verwalten
          </h1>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-400">
            <Search size={18} />
            <input
              type="text"
              placeholder="Bestellung, Kunde oder Telefon suchen"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500 sm:w-72"
            />
          </div>

          <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
            <Bell size={18} />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-orange-500" />
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-500 text-white">
              <Store size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                Naranj Restaurant
              </p>
              <p className="text-xs text-neutral-400">Mülheim an der Ruhr</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
