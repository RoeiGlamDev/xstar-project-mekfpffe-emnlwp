import React from 'react';
import './styles.css'; // Import custom styles

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="logo">FashionTV Cosmetics</h1>
      </header>
      <main className="main-content">
        <section className="hero">
          <h2 className="hero-title">Elevate Your Beauty</h2>
          <p className="hero-description">Discover luxury cosmetics that redefine elegance.</p>
          <button className="shop-now-button">Shop Now</button>
        </section>
        <section className="featured-products">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-list">
            {/* Example product card */}
            <div className="product-card">
              <img src="/path/to/product-image.jpg" alt="Product Name" className="product-image" />
              <h3 className="product-name">Product Name</h3>
              <p className="product-price">$99.99</p>
            </div>
            {/* Repeat product cards as needed */}
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">© 2023 FashionTV Cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;