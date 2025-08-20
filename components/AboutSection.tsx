import React from 'react';
import './AboutSection.css'; // Assuming there's a CSS file for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    Welcome to FashionTV Cosmetics, where luxury meets elegance. Our products are crafted with the finest ingredients to enhance your natural beauty.
                </p>
                <p className="about-description">
                    We believe in empowering individuals through high-quality cosmetics that reflect sophistication and style. Join us in celebrating beauty in all its forms.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;