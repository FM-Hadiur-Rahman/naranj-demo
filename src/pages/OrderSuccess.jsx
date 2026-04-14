import { Link, useLocation } from "react-router-dom";
import {
  CheckCircle2,
  Clock3,
  MapPin,
  ReceiptText,
  Bike,
  ShoppingBag,
  Bell,
  Navigation,
} from "lucide-react";
import { useMemo } from "react";
import { useOrders } from "../context/OrderContext";

function OrderSuccess() {
  const { state } = useLocation();
  const { getOrderById, latestOrderId } = useOrders();

  const orderId = state?.orderId || latestOrderId;
  const sharedOrder = orderId ? getOrderById(orderId) : null;

  const order = sharedOrder || {
    id: "ORD-2048",
    customerName: "Gast",
    phone: "+49 000 000000",
    address: "Keine Adresse angegeben",
    type: "delivery",
    paymentMethod: "Barzahlung",
    note: "",
    total: 15.8,
    estimatedMinutes: "26 Minuten",
    estimatedArrival: "ca. 13:45",
    status: "confirmed",
    items: [
      { name: "Chicken Shawarma", qty: 1, price: 12.9, category: "Grill" },
    ],
  };

  const steps = [
    { key: "placed", label: "Bestellt" },
    { key: "confirmed", label: "Bestätigt" },
    { key: "accepted", label: "Akzeptiert" },
    { key: "preparing", label: "In Zubereitung" },
    { key: "ready", label: "Bereit" },
    { key: "out_for_delivery", label: "Unterwegs" },
    { key: "delivered", label: "Geliefert" },
  ];

  const statusIndexMap = {
    placed: 0,
    confirmed: 1,
    accepted: 2,
    preparing: 3,
    ready: 4,
    out_for_delivery: 5,
    delivered: 6,
  };

  const currentStepIndex = statusIndexMap[order.status] ?? 1;

  const statusLabel = useMemo(() => {
    switch (order.status) {
      case "confirmed":
        return "Bestellung bestätigt";
      case "accepted":
        return "Bestellung angenommen";
      case "preparing":
        return "In Zubereitung";
      case "ready":
        return order.type === "pickup"
          ? "Abholbereit"
          : "Fahrer wird vorbereitet";
      case "out_for_delivery":
        return "Unterwegs";
      case "delivered":
        return "Geliefert";
      case "cancelled":
        return "Storniert";
      default:
        return "Bestellung bestätigt";
    }
  }, [order.status, order.type]);

  const notificationText = useMemo(() => {
    switch (order.status) {
      case "confirmed":
        return "Ihre Bestellung wurde erfolgreich bestätigt ✅";
      case "accepted":
        return "Das Restaurant hat Ihre Bestellung angenommen 👌";
      case "preparing":
        return "Ihre Bestellung wird jetzt zubereitet 🍳";
      case "ready":
        return order.type === "pickup"
          ? "Ihre Bestellung ist zur Abholung bereit 🛍️"
          : "Ihr Fahrer wird vorbereitet 🚚";
      case "out_for_delivery":
        return "Ihr Fahrer ist unterwegs 🚚";
      case "delivered":
        return "Ihre Bestellung wurde geliefert 🎉";
      case "cancelled":
        return "Ihre Bestellung wurde storniert.";
      default:
        return "Ihre Bestellung wird bearbeitet.";
    }
  }, [order.status, order.type]);

  const subtotal = order.items.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty || 1),
    0,
  );
  const deliveryFee =
    order.type === "delivery" ? Math.max(order.total - subtotal, 0) : 0;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-orange-500/10 p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-emerald-500/15 p-3 text-emerald-400">
              <CheckCircle2 size={28} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
                Bestellung erfolgreich
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-white">
                Danke, Ihre Bestellung ist eingegangen
              </h1>
              <p className="mt-4 max-w-2xl text-neutral-300">
                Der Status wird jetzt live aus dem Restaurant-Dashboard
                aktualisiert.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-orange-400/20 bg-orange-500/10 p-4">
          <div className="flex items-center gap-3">
            <Bell size={18} className="text-orange-400" />
            <p className="text-sm font-medium text-orange-200">
              {notificationText}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-neutral-400">Bestellnummer</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">
                  {order.id}
                </h2>
              </div>

              <div className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 ring-1 ring-orange-500/20">
                {order.type === "delivery" ? "Lieferung" : "Abholung"}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
                <div className="flex items-center gap-3">
                  <Clock3 className="text-orange-400" size={18} />
                  <div>
                    <p className="text-sm text-neutral-400">Lieferzeit</p>
                    <p className="font-semibold text-white">
                      {order.estimatedMinutes || "25 Minuten"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
                <div className="flex items-center gap-3">
                  <ReceiptText className="text-orange-400" size={18} />
                  <div>
                    <p className="text-sm text-neutral-400">Voraussichtlich</p>
                    <p className="font-semibold text-white">
                      {order.estimatedArrival || "ca. 13:45"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-orange-300">
                Statusverlauf
              </p>

              <div className="grid gap-4 sm:grid-cols-4 lg:grid-cols-7">
                {steps.map((step, index) => {
                  const active = index <= currentStepIndex;

                  return (
                    <div
                      key={step.key}
                      className="flex flex-col items-center text-center"
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                          active
                            ? "bg-orange-500 text-white"
                            : "bg-white/10 text-neutral-400"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <p
                        className={`mt-3 text-sm ${
                          active ? "text-white" : "text-neutral-500"
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-neutral-900/60 p-6">
              <h3 className="text-xl font-semibold text-white">
                Ihre Bestellung
              </h3>

              <div className="mt-5 space-y-4">
                {order.items.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex items-center justify-between border-b border-white/10 pb-3"
                  >
                    <div>
                      <p className="font-medium text-white">
                        {item.qty || 1}x {item.name}
                      </p>
                      <p className="text-sm text-neutral-400">
                        {item.category}
                      </p>
                    </div>
                    <p className="font-semibold text-white">
                      €{(Number(item.price) * Number(item.qty || 1)).toFixed(2)}
                    </p>
                  </div>
                ))}
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
                  <span>€{Number(order.total).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                Lieferinformationen
              </h3>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="text-neutral-400">Kunde</p>
                  <p className="mt-1 text-white">{order.customerName}</p>
                </div>
                <div>
                  <p className="text-neutral-400">Telefon</p>
                  <p className="mt-1 text-white">{order.phone}</p>
                </div>
                <div>
                  <p className="text-neutral-400">Adresse</p>
                  <p className="mt-1 inline-flex items-start gap-2 text-white">
                    <MapPin
                      size={15}
                      className="mt-0.5 shrink-0 text-orange-400"
                    />
                    <span>{order.address}</span>
                  </p>
                </div>
                <div>
                  <p className="text-neutral-400">Bestellart</p>
                  <p className="mt-1 inline-flex items-center gap-2 text-white">
                    {order.type === "delivery" ? (
                      <Bike size={15} className="text-orange-400" />
                    ) : (
                      <ShoppingBag size={15} className="text-orange-400" />
                    )}
                    {order.type === "delivery" ? "Lieferung" : "Abholung"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-orange-400/20 bg-orange-500/10 p-6">
              <h3 className="text-xl font-semibold text-white">
                Aktueller Status
              </h3>
              <p className="mt-4 inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 ring-1 ring-orange-500/20">
                {statusLabel}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <Navigation className="text-orange-400" size={18} />
                <h3 className="text-xl font-semibold text-white">
                  Live Tracking
                </h3>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
                <p className="text-sm text-neutral-400">
                  Diese Ansicht aktualisiert sich live, sobald das Restaurant
                  den Status im Admin-Dashboard ändert.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
              >
                Weiter bestellen
              </Link>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  order.address,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
              >
                Adresse öffnen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSuccess;
