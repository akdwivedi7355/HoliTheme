import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <h1>Holi Shop</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <button className="start-shopping-btn">Start Shopping</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
