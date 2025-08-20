import React from 'react';
import './ParallaxSection.css'; // Importing CSS for styling

const ParallaxSection: React.FC = () => {
  return (
    <div className="parallax-section">
      <div className="parallax-background" />
      <div className="parallax-content">
        <h1 className="title">Luxury FashionTV Cosmetics</h1>
        <p className="description">
          Elevate your beauty routine with our exclusive collection.
        </p>
      </div>
    </div>
  );
};

export default ParallaxSection;