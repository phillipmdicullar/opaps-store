import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewProducts from "../home/section/new/NewProducts";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div style={{ display: "", padding: "2rem", gap: "2rem" }}>
    <div style={{ display: "flex", padding: "2rem", gap: "2rem" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "300px", height: "auto", borderRadius: "8px" }}
      />
      <div>
        <h2>{product.title}</h2>
        <p style={{ fontStyle: "italic", color: "gray" }}>{product.category}</p>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button style={{ padding: "0.7rem 1.5rem", background: "orange", color: "white", border: "none", borderRadius: "6px" }}>
          Add to Cart
        </button>
      </div>
    </div>
    <NewProducts />
    </div>

  );
}

export default ProductDetails;
