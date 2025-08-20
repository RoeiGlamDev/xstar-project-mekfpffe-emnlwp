import React from 'react';
import styles from './AboutPage.module.css'; // Assuming you have a CSS module for styles

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>About FashionTV Cosmetics</h1>
      <p className={styles.description}>
        Welcome to FashionTV Cosmetics, where luxury meets elegance. Our products are designed for the discerning individual who appreciates high-quality cosmetics that enhance natural beauty.
      </p>
      <h2 className={styles.subTitle}>Our Mission</h2>
      <p className={styles.mission}>
        At FashionTV Cosmetics, we strive to provide an exquisite range of cosmetics that empower you to express your unique style and confidence.
      </p>
      <h2 className={styles.subTitle}>Our Vision</h2>
      <p className={styles.vision}>
        We envision a world where beauty is celebrated in all its forms, and our products reflect the sophistication and elegance that our brand embodies.
      </p>
    </div>
  );
};

export default AboutPage;