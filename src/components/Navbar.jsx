import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Correct import
import basketImg from "../assets/basket.png"; // Correct import
import Logo from "../assets/logo.png"; // Correct import  
function Navbar() {
  return (
    <div className="navbar">
      <p className="logo">
        <img src={Logo} alt="logo" />
      </p>
     <div className="right">
       <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="login-button">
          <Link to="/login" className="text">Login</Link>
        </li>
      </ul>
      <div className="cart">
        <a href="/cart"><img src={basketImg} alt="cart" /></a>
        <span>
          <sup>20</sup>
        </span>
      </div>
     </div>
    </div>
  );
}

export default Navbar;