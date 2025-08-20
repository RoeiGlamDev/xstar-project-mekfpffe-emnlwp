'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 1,
      viewFactor: 0.2,
    });

    sr.reveal('.reveal', {
      origin: 'bottom',
      interval: 200, // delay between each reveal
    });
  }, []);

  return (
    <div>
      <h1 className="reveal">Welcome to Luxury FashionTV Cosmetics</h1>
      <p className="reveal">Explore our elegant collection of high-end cosmetics.</p>
      <div className="reveal">
        <img src="/path/to/image.jpg" alt="Luxury Cosmetics" />
      </div>
    </div>
  );
};

export default ScrollRevealComponent;