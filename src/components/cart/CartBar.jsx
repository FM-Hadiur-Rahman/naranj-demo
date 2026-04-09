import { Link } from "react-router-dom";

function CartBar({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (!cart.length) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 px-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between rounded-2xl bg-white px-5 py-4 text-black shadow-2xl">
        <div>
          <p className="text-sm text-neutral-600">{cart.length} Artikel</p>
          <p className="text-lg font-bold">€{total.toFixed(2)}</p>
        </div>

        <Link
          to="/checkout"
          className="rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Zur Kasse
        </Link>
      </div>
    </div>
  );
}

export default CartBar;
