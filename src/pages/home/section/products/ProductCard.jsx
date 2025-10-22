import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ id, image, title, price }) {
  return (
    <div className="product-card">
      <Link to={`/products/${id}`} className="product-link">
        <img src={image} alt={title} className="product-image" />
        <h4 className="product-title">{title}</h4>
      </Link>
      <p className="product-price">${price}</p>
      
    </div>
  );
}

export default ProductCard;

