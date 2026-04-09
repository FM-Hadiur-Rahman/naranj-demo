import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";

function Navbar({ cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 font-bold text-white shadow-lg">
            N
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[0.25em] text-white">
              NARANJ
            </p>
            <p className="text-xs text-neutral-400">Premium Demo Experience</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive ? "text-white" : "text-neutral-400 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive ? "text-white" : "text-neutral-400 hover:text-white"
              }`
            }
          >
            Menu
          </NavLink>

          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive ? "text-white" : "text-neutral-400 hover:text-white"
              }`
            }
          >
            Checkout
          </NavLink>

          <NavLink
            to="/rewards"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive ? "text-white" : "text-neutral-400 hover:text-white"
              }`
            }
          >
            Rewards
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive ? "text-white" : "text-neutral-400 hover:text-white"
              }`
            }
          >
            Admin Demo
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/rewards"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 sm:flex"
          >
            <Star size={16} />
            Treuepunkte
          </Link>

          <Link
            to="/checkout"
            className="relative flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            <ShoppingBag size={16} />
            Warenkorb
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
