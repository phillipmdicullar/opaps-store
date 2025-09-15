import React from "react";
import "./ProductCard.css";

function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p className="price">${price}</p>
    </div>
  );
}

export default ProductCard;
