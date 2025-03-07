import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const images = [
    '/assets/image/img1.jpeg', // Image 1
    '/assets/image/img2.jpeg', // Image 2
    '/assets/image/img3.jpeg', // Image 3
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
  setCurrentImageIndex((prevIndex) => {
    if (prevIndex === images.length - 1) {
      return 1; 
    }
    return prevIndex + 1; 
  });
};


  useEffect(() => {
    const interval = setInterval(nextImage, 4000); 
    // return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="hero">
      <div
        className="image-slider"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`, // Slide images to the left
        }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Holi celebration ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="hero-text">
        <h1>Celebrate Holi with Colorful Joy!</h1>
        <p>Shop vibrant colors, powders, and festival essentials.</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;
