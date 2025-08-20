import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Luxury Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic Package</h3>
                        <p className="card-price">$99</p>
                        <ul className="card-features">
                            <li>High-quality cosmetics</li>
                            <li>Elegant packaging</li>
                            <li>Exclusive discounts</li>
                        </ul>
                        <button className="card-button">Choose Package</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Premium Package</h3>
                        <p className="card-price">$199</p>
                        <ul className="card-features">
                            <li>All Basic features</li>
                            <li>Personalized consultation</li>
                            <li>Free shipping</li>
                        </ul>
                        <button className="card-button">Choose Package</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Luxury Package</h3>
                        <p className="card-price">$299</p>
                        <ul className="card-features">
                            <li>All Premium features</li>
                            <li>Exclusive access to new products</li>
                            <li>VIP customer support</li>
                        </ul>
                        <button className="card-button">Choose Package</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;