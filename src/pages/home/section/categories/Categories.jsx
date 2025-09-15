import React, { useEffect, useState } from "react";
import "./categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch unique categories from products API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="categories">
      <p>Product categories</p>
      <div className="category-list">
        {categories.map((cat, index) => (
          <div className="cat-one" key={index}>
            <a href={`#${cat}`}>
              {/* fallback image, you can later map custom icons */}
              <img
                src={`https://via.placeholder.com/100?text=${cat}`}
                alt={cat}
              />
              <p>{cat}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
