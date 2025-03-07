import React from 'react';
import './Main.css';
import ShopItem from './ShopItem';

const Main = () => {
  return (
    <section className="main">
      <h2>Our Holi Festival Collection</h2>
      <div className="shop-items">
        <ShopItem />
        <ShopItem />
        <ShopItem />
        {/* Add more ShopItem components here */}
      </div>
    </section>
  );
}

export default Main;
