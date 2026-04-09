function MenuCard({ item, onAddToCart }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="h-56 w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {item.badge}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              {item.description}
            </p>
          </div>
          <span className="whitespace-nowrap text-lg font-bold text-orange-400">
            €{item.price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
            {item.category}
          </span>

          <button
            onClick={() => onAddToCart(item)}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Hinzufügen
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
