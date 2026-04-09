import { useMemo, useState } from "react";
import { categories, foods } from "../data/foods";
import MenuCard from "../components/menu/MenuCard";
import CartBar from "../components/cart/CartBar";

function Menu({ cart, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredFoods = useMemo(() => {
    if (activeCategory === "Alle") return foods;
    return foods.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
            Menü
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white">
            Entdecken Sie unser Angebot
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-400">
            Premium Auswahl für Lieferung oder Abholung. Direkt bestellen,
            schnell bezahlen und Treuepunkte sammeln.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredFoods.map((item) => (
            <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <CartBar cart={cart} />
    </>
  );
}

export default Menu;
