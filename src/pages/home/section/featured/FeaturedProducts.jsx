import React, { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import "../new/ProductsPage.css";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products-section">
      <div className="section-header">
        <p>Featured Products</p>
        <a href="/featured">more</a>
      </div>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            image={p.image}
            title={p.title}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
