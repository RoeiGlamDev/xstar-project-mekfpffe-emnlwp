import React from 'react';
import './PricingPage.css'; // Assuming you have a CSS file for styling

const PricingPage: React.FC = () => {
  return (
    <div className="pricing-page" style={{ backgroundColor: '#fff', color: '#000' }}>
      <header className="pricing-header" style={{ backgroundColor: '#ffcccb', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Luxury FashionTV Cosmetics</h1>
        <p style={{ fontSize: '1.2rem' }}>Elevate your beauty with our exclusive products</p>
      </header>
      <main className="pricing-content" style={{ padding: '40px' }}>
        <section className="pricing-options">
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Pricing Plans</h2>
          <div className="pricing-card" style={{ border: '1px solid #ffcccb', borderRadius: '10px', padding: '20px', margin: '10px' }}>
            <h3 style={{ fontSize: '1.5rem' }}>Basic Package</h3>
            <p style={{ fontSize: '1.2rem' }}>$29.99/month</p>
            <p>Includes basic skincare products</p>
            <button style={{ backgroundColor: '#ff69b4', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px' }}>Choose Plan</button>
          </div>
          <div className="pricing-card" style={{ border: '1px solid #ffcccb', borderRadius: '10px', padding: '20px', margin: '10px' }}>
            <h3 style={{ fontSize: '1.5rem' }}>Premium Package</h3>
            <p style={{ fontSize: '1.2rem' }}>$49.99/month</p>
            <p>Includes premium skincare and makeup products</p>
            <button style={{ backgroundColor: '#ff69b4', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px' }}>Choose Plan</button>
          </div>
          <div className="pricing-card" style={{ border: '1px solid #ffcccb', borderRadius: '10px', padding: '20px', margin: '10px' }}>
            <h3 style={{ fontSize: '1.5rem' }}>Luxury Package</h3>
            <p style={{ fontSize: '1.2rem' }}>$99.99/month</p>
            <p>Includes all products and exclusive access to new releases</p>
            <button style={{ backgroundColor: '#ff69b4', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px' }}>Choose Plan</button>
          </div>
        </section>
      </main>
      <footer className="pricing-footer" style={{ backgroundColor: '#ffcccb', padding: '20px', textAlign: 'center' }}>
        <p>© 2023 Luxury FashionTV Cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PricingPage;