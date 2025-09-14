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
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar count={count}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
