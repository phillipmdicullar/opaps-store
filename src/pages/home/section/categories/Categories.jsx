import React, { useEffect, useState } from "react";
import "./categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        // Group categories and pick first product image per category
        const categoryMap = {};
        data.forEach((item) => {
          if (!categoryMap[item.category]) {
            categoryMap[item.category] = item.image;
          }
        });

        setCategories(
          Object.entries(categoryMap).map(([cat, img]) => ({
            name: cat,
            image: img,
          }))
        );
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div className="categories">
      <p>Product categories</p>
      <div className="category-list">
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <div className="cat-one" key={index}>
              <a href={`#${cat.name}`}>
                <img src={cat.image} alt={cat.name} />
                <p>{cat.name}</p>
              </a>
            </div>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </div>
  );
}

export default Categories;
