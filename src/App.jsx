import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // added useLocation
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/product-details/ProductDeatails";
import { useState, useEffect } from "react";

function AppContent() {
  const location = useLocation(); // get current route
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/carts/1");
        const cartData = await res.json();
        const totalItems = cartData.products.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
        setCount(totalItems);
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };
    fetchCart();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCount((prevCount) => prevCount + 1);
  };

  // Hide Navbar on login page
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar count={count} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:id"
          element={<ProductDetails onAddToCart={handleAddToCart} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
