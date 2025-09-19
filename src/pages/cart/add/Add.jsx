import React, { useEffect, useState } from "react";
import "./Add.css";

function Add() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        // get cart 1 for demo (you could use a logged-in user later)
        const res = await fetch("https://fakestoreapi.com/carts/1");
        const cart = await res.json();

        // fetch each product details
        const products = await Promise.all(
          cart.products.map(async (p) => {
            const productRes = await fetch(
              `https://fakestoreapi.com/products/${p.productId}`
            );
            const product = await productRes.json();
            return {
              id: product.id,
              title: product.title,
              price: product.price,
              img: product.image,
              desc: product.category,
              quantity: p.quantity,
            };
          })
        );

        setCartItems(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (loading) return <p>Loading cart...</p>;

  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="item-header">
            <input type="checkbox" />
            <span className="store-name">Opaps store</span>
            <span className="coupon">KSh 100 OFF</span>
          </div>
          <div className="item-body">
            <img src={item.img} alt={item.title} className="item-img" />
            <div className="item-info">
              <p className="item-title">{item.title}</p>
              <p className="item-desc">{item.desc}</p>
              <div className="item-actions">
                <div className="quantity">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <span className="price">KSh {item.price.toFixed(2)}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="cart-footer">
        <div className="guarantee">
          <span>7 DAYS</span> Money Back Guarantee
        </div>
        <div className="checkout">
          <span className="total">Total: KSh {total.toFixed(2)}</span>
          <button className="checkout-btn">Proceed to Checkout </button>
        </div>
      </div>
    </div>
  );
}

export default Add;
