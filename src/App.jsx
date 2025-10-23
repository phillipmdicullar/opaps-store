import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  // Load demo cart from API (optional — you can remove this if using local cart only)
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

  // 🔸 Function to add an item to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <BrowserRouter>
      <Navbar count={count} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        {/* 🔸 pass the add-to-cart function to ProductDetails */}
        <Route
          path="/products/:id"
          element={<ProductDetails onAddToCart={handleAddToCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
