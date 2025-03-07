import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Testimonials from './components/Testimonials';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Hero />
      <Main />
      <Testimonials />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
