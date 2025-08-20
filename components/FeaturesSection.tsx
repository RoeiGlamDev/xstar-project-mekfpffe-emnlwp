import React from 'react';
import './FeaturesSection.css'; // Assuming you have a CSS file for styles

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Luxurious Features</h2>
      <div className="features-container">
        <div className="feature-item">
          <h3 className="feature-title">Premium Quality</h3>
          <p className="feature-description">Experience the finest ingredients in our cosmetics.</p>
        </div>
        <div className="feature-item">
          <h3 className="feature-title">Elegant Packaging</h3>
          <p className="feature-description">Our products come in beautifully designed packaging.</p>
        </div>
        <div className="feature-item">
          <h3 className="feature-title">Cruelty-Free</h3>
          <p className="feature-description">We are committed to ethical beauty practices.</p>
        </div>
        <div className="feature-item">
          <h3 className="feature-title">Luxurious Scents</h3>
          <p className="feature-description">Indulge in our signature fragrances.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;