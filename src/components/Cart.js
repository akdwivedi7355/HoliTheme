import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [items, setItems] = useState([]);

  const addItemToCart = (item) => {
    setItems([...items, item]);
  };

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {items.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <button>Checkout</button>
    </section>
  );
}

export default Cart;
