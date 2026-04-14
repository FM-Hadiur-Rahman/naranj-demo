import { Phone, MapPin, Clock3, Bike, ShoppingBag } from "lucide-react";
import StatusBadge from "./StatusBadge";

function OrderCard({ order, onStatusChange }) {
  const itemCount = order.items.reduce((sum, item) => sum + (item.qty || 1), 0);

  const getNextActions = () => {
    switch (order.status) {
      case "new":
      case "confirmed":
        return [
          {
            label: "Annehmen",
            action: () => onStatusChange(order.id, "accepted"),
            primary: true,
          },
          {
            label: "Ablehnen",
            action: () => onStatusChange(order.id, "cancelled"),
          },
        ];
      case "accepted":
        return [
          {
            label: "Zubereitung",
            action: () => onStatusChange(order.id, "preparing"),
            primary: true,
          },
        ];
      case "preparing":
        return [
          {
            label: "Fertig",
            action: () => onStatusChange(order.id, "ready"),
            primary: true,
          },
        ];
      case "ready":
        return [
          order.type === "delivery"
            ? {
                label: "Zur Lieferung senden",
                action: () => onStatusChange(order.id, "out_for_delivery"),
                primary: true,
              }
            : {
                label: "Abgeholt",
                action: () => onStatusChange(order.id, "delivered"),
                primary: true,
              },
        ];
      case "out_for_delivery":
        return [
          {
            label: "Geliefert",
            action: () => onStatusChange(order.id, "delivered"),
            primary: true,
          },
        ];
      default:
        return [];
    }
  };

  const actions = getNextActions();

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold text-white">{order.id}</h3>
            <StatusBadge status={order.status} />
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ${
                order.type === "delivery"
                  ? "bg-orange-500/15 text-orange-300 ring-orange-500/20"
                  : "bg-sky-500/15 text-sky-300 ring-sky-500/20"
              }`}
            >
              {order.type === "delivery" ? (
                <Bike size={14} />
              ) : (
                <ShoppingBag size={14} />
              )}
              {order.type === "delivery" ? "Lieferung" : "Abholung"}
            </span>
          </div>

          <div>
            <p className="text-base font-medium text-white">
              {order.customerName}
            </p>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-neutral-400">
              <span className="inline-flex items-center gap-2">
                <Phone size={14} />
                {order.phone}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={14} />
                {order.orderedAt}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
            <p className="mb-2 text-sm font-medium text-neutral-300">
              Bestellte Artikel
            </p>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-neutral-200">
                    {item.qty || 1}x {item.name}
                  </span>
                  <span className="font-medium text-white">
                    €{(Number(item.qty || 1) * Number(item.price)).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 text-sm text-neutral-400">
            <p className="inline-flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <span>{order.address}</span>
            </p>
            {order.note && (
              <p>
                <span className="font-medium text-neutral-300">Notiz:</span>{" "}
                {order.note}
              </p>
            )}
          </div>
        </div>

        <div className="w-full rounded-2xl border border-white/10 bg-neutral-900/60 p-4 lg:w-72">
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between text-neutral-400">
              <span>Artikel</span>
              <span className="text-white">{itemCount}</span>
            </div>
            <div className="flex items-center justify-between text-neutral-400">
              <span>Zahlung</span>
              <span className="text-white">{order.paymentMethod}</span>
            </div>
            <div className="flex items-center justify-between text-neutral-400">
              <span>Status</span>
              <span className="text-white">{order.paymentStatus}</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-3 text-base font-semibold">
              <span className="text-neutral-300">Gesamt</span>
              <span className="text-white">
                €{Number(order.total).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {actions.map((btn, index) => (
              <button
                key={`${btn.label}-${index}`}
                onClick={btn.action}
                className={
                  btn.primary
                    ? "rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
                    : "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                }
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
