import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    orderType: "delivery",
    paymentMethod: "Barzahlung",
    note: "",
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = cart.length && form.orderType === "delivery" ? 2.9 : 0;
  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cart.length) {
      alert("Ihr Warenkorb ist leer.");
      return;
    }

    if (
      !form.name ||
      !form.phone ||
      (form.orderType === "delivery" && !form.address)
    ) {
      alert("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    const now = new Date();
    const minMinutes = 25;
    const maxMinutes = 35;
    const randomMinutes =
      Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) + minMinutes;

    const arrival = new Date(now.getTime() + randomMinutes * 60000);

    const orderData = {
      orderId: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: form.name,
      phone: form.phone,
      address:
        form.orderType === "delivery" ? form.address : "Abholung im Restaurant",
      orderType: form.orderType,
      paymentMethod: form.paymentMethod,
      note: form.note,
      subtotal,
      deliveryFee,
      total,
      estimatedMinutes: `${randomMinutes} Minuten`,
      estimatedArrival: `ca. ${arrival.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
      })}`,
      status: "confirmed",
      items: cart,
    };

    navigate("/order-success", {
      state: { order: orderData },
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
          Checkout
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Ihre Bestellung abschließen
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Lieferdetails</h2>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Vollständiger Name"
              className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-neutral-500"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Telefonnummer"
              className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-neutral-500"
            />

            {form.orderType === "delivery" && (
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Lieferadresse"
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-neutral-500"
              />
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <select
                name="orderType"
                value={form.orderType}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
              >
                <option value="delivery">Lieferung</option>
                <option value="pickup">Abholung</option>
              </select>

              <select
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
              >
                <option>Barzahlung</option>
                <option>Kartenzahlung</option>
                <option>Online Zahlung</option>
              </select>
            </div>

            <textarea
              rows="4"
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Bemerkung zur Bestellung"
              className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-neutral-500"
            />

            <button
              type="submit"
              className="mt-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              Bestellung absenden
            </button>
          </form>
        </div>

        <div className="h-fit rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">
            Bestellübersicht
          </h2>

          <div className="mt-6 space-y-4">
            {cart.length === 0 ? (
              <p className="text-neutral-400">Ihr Warenkorb ist noch leer.</p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center justify-between border-b border-white/10 pb-3"
                >
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="text-sm text-neutral-400">{item.category}</p>
                  </div>
                  <p className="font-semibold text-white">
                    €{item.price.toFixed(2)}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between text-neutral-300">
              <span>Zwischensumme</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-neutral-300">
              <span>Liefergebühr</span>
              <span>€{deliveryFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between border-t border-white/10 pt-4 text-lg font-bold text-white">
              <span>Gesamt</span>
              <span>€{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-orange-400/20 bg-orange-400/10 p-4">
            <p className="text-sm font-medium text-orange-200">
              + 12 Treuepunkte für diese Bestellung
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
