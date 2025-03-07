import React from 'react';
import './ShopItem.css';

const ShopItem = () => {
  return (
    <div className="shop-item">
      <img src="product_image_url_here" alt="product" />
      <h3>Holi Powder Pack</h3>
      <p>Bright and colorful powder for your celebration.</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ShopItem;
