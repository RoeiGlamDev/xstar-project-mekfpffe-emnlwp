import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Assuming you have a CSS file for styling

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <Link to="/">FashionTV Cosmetics</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/collections">Collections</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="search-cart">
        <Link to="/search" className="search-icon">🔍</Link>
        <Link to="/cart" className="cart-icon">🛒</Link>
      </div>
    </nav>
  );
};

export default Navigation;