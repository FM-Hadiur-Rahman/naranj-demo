import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import Rewards from "./pages/Rewards";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 text-white">
        <Navbar cartCount={cart.length} />

        <main>
          <Routes>
            <Route
              path="/"
              element={<Home cart={cart} onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/menu"
              element={<Menu cart={cart} onAddToCart={handleAddToCart} />}
            />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
