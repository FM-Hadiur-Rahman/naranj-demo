import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import Rewards from "./pages/Rewards";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminOrders from "./admin/pages/AdminOrders";
import AdminMenu from "./admin/pages/AdminMenu";
import AdminDelivery from "./admin/pages/AdminDelivery";
import AdminCustomers from "./admin/pages/AdminCustomers";
import AdminSettings from "./admin/pages/AdminSettings";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-neutral-950 text-white">
              <Navbar cartCount={cart.length} />
              <Home cart={cart} onAddToCart={handleAddToCart} />
              <Footer />
            </div>
          }
        />
        <Route
          path="/menu"
          element={
            <div className="min-h-screen bg-neutral-950 text-white">
              <Navbar cartCount={cart.length} />
              <Menu cart={cart} onAddToCart={handleAddToCart} />
              <Footer />
            </div>
          }
        />
        <Route
          path="/checkout"
          element={
            <div className="min-h-screen bg-neutral-950 text-white">
              <Navbar cartCount={cart.length} />
              <Checkout cart={cart} />
              <Footer />
            </div>
          }
        />
        <Route
          path="/rewards"
          element={
            <div className="min-h-screen bg-neutral-950 text-white">
              <Navbar cartCount={cart.length} />
              <Rewards />
              <Footer />
            </div>
          }
        />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/menu" element={<AdminMenu />} />
        <Route path="/admin/delivery" element={<AdminDelivery />} />
        <Route path="/admin/customers" element={<AdminCustomers />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
