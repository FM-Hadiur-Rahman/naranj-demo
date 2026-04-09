import { Link } from "react-router-dom";
import {
  Truck,
  ShoppingBag,
  Star,
  MessageCircle,
  Clock3,
  BadgePercent,
} from "lucide-react";
import { foods } from "../data/foods";
import MenuCard from "../components/menu/MenuCard";
import CartBar from "../components/cart/CartBar";

function Home({ cart, onAddToCart }) {
  const featuredFoods = foods.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.28),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.2),transparent_28%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-orange-300">
              Direct Ordering Experience
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Bestellen Sie direkt.
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Schnell. Elegant. Ohne Provision.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg">
              Premium Restaurant-Demo mit direkter Online-Bestellung, Lieferung,
              Abholung, Treuepunkten und WhatsApp-Support.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-xs font-medium text-green-400 ring-1 ring-green-500/20">
                <BadgePercent size={14} />
                0% Provision – Direktbestellung
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-neutral-300 ring-1 ring-white/10">
                <Clock3 size={14} />
                Lieferung in 25–35 Minuten • €2.90 Liefergebühr
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Jetzt bestellen
              </Link>

              <a
                href="https://wa.me/491234567890"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp Kontakt
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Truck className="mb-3 text-orange-400" size={20} />
                <p className="text-sm font-medium text-white">Lieferung</p>
                <p className="mt-1 text-sm text-neutral-400">
                  Schnell und direkt
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <ShoppingBag className="mb-3 text-orange-400" size={20} />
                <p className="text-sm font-medium text-white">Abholung</p>
                <p className="mt-1 text-sm text-neutral-400">
                  Einfach vorbestellen
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Star className="mb-3 text-orange-400" size={20} />
                <p className="text-sm font-medium text-white">Rewards</p>
                <p className="mt-1 text-sm text-neutral-400">Punkte sammeln</p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80"
                alt="Restaurant Hero"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
              Featured Menu
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Beliebte Gerichte
            </h2>
          </div>

          <Link
            to="/menu"
            className="text-sm text-neutral-300 transition hover:text-white"
          >
            Gesamtes Menü ansehen
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredFoods.map((item) => (
            <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-orange-400/20 bg-gradient-to-r from-orange-500/20 to-red-500/20 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
              Treueprogramm
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-white">
              Punkte sammeln bei jeder Bestellung
            </h3>
            <p className="mt-4 max-w-xl text-neutral-300">
              Kunden kommen häufiger zurück, wenn sie bei jeder Bestellung
              Punkte und Belohnungen bekommen.
            </p>
            <Link
              to="/rewards"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Rewards ansehen
            </Link>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="flex items-center gap-3">
              <MessageCircle className="text-green-400" />
              <h3 className="text-2xl font-semibold text-white">
                WhatsApp Bestellungen
              </h3>
            </div>
            <p className="mt-4 text-neutral-300">
              Für schnelle Rückfragen, Sonderwünsche oder Direktkontakt kann der
              Kunde auch per WhatsApp bestellen.
            </p>

            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              WhatsApp öffnen
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/491234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-6 z-40 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.03]"
      >
        WhatsApp
      </a>

      <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
        <Link
          to="/menu"
          className="block w-full rounded-full bg-orange-500 px-6 py-4 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
        >
          Jetzt bestellen
        </Link>
      </div>

      <CartBar cart={cart} />
    </>
  );
}

export default Home;
