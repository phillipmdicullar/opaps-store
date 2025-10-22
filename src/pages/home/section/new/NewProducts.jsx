import React, { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import "./ProductsPage.css";
// import { Link } from "react-router-dom"; // Uncomment if using React Router

function NewProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc&limit=8")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="products-section">
      <div className="section-header">
        <p>New Products</p>
        {/* <Link to="/new">more</Link> */}
        <a href="/new">more</a>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      <div className="products-grid">
        {products.map(({ id, image, title, price }) => (
          <ProductCard
            key={id}
            id={id}
            image={image}
            title={title}
            price={price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewProducts;