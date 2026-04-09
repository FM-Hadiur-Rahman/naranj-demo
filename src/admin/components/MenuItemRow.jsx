function MenuItemRow({ item }) {
  return (
    <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 md:grid-cols-[80px_1.4fr_0.8fr_0.5fr_0.6fr_auto] md:items-center">
      <img
        src={item.image}
        alt={item.name}
        className="h-20 w-20 rounded-2xl object-cover"
      />

      <div>
        <h3 className="text-base font-semibold text-white">{item.name}</h3>
        <p className="mt-1 text-sm text-neutral-400">{item.category}</p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          Preis
        </p>
        <p className="mt-1 text-base font-semibold text-white">
          €{item.price.toFixed(2)}
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          Status
        </p>
        <span
          className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ${
            item.available
              ? "bg-emerald-500/15 text-emerald-300 ring-emerald-500/20"
              : "bg-red-500/15 text-red-300 ring-red-500/20"
          }`}
        >
          {item.available ? "Verfügbar" : "Nicht verfügbar"}
        </span>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          Featured
        </p>
        <span
          className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ${
            item.featured
              ? "bg-orange-500/15 text-orange-300 ring-orange-500/20"
              : "bg-white/10 text-neutral-300 ring-white/10"
          }`}
        >
          {item.featured ? "Ja" : "Nein"}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.01]">
          Bearbeiten
        </button>
        <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
          Status ändern
        </button>
      </div>
    </div>
  );
}

export default MenuItemRow;
