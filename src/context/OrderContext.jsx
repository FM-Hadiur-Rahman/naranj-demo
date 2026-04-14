import { createContext, useContext, useMemo, useState } from "react";
import { orders as seedOrders } from "../admin/data/orders";

const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(seedOrders);
  const [latestOrderId, setLatestOrderId] = useState(null);

  const createOrder = (orderData) => {
    const newOrder = {
      id: orderData.orderId,
      customerName: orderData.customerName,
      phone: orderData.phone,
      type: orderData.orderType,
      status: orderData.status || "confirmed",
      paymentMethod: orderData.paymentMethod,
      paymentStatus:
        orderData.paymentMethod === "Barzahlung" ? "Offen" : "Bezahlt",
      total: orderData.total,
      address: orderData.address,
      orderedAt: new Date().toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      note: orderData.note || "",
      estimatedMinutes: orderData.estimatedMinutes,
      estimatedArrival: orderData.estimatedArrival,
      items: orderData.items.map((item) => ({
        name: item.name,
        qty: item.qty || 1,
        price: item.price,
        category: item.category,
      })),
    };

    setOrders((prev) => [newOrder, ...prev]);
    setLatestOrderId(newOrder.id);

    return newOrder;
  };

  const updateOrderStatus = (orderId, nextStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: nextStatus } : order,
      ),
    );
  };

  const getOrderById = (orderId) => {
    return orders.find((order) => order.id === orderId);
  };

  const value = useMemo(
    () => ({
      orders,
      latestOrderId,
      createOrder,
      updateOrderStatus,
      getOrderById,
    }),
    [orders, latestOrderId],
  );

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrders must be used inside OrderProvider");
  }

  return context;
}
