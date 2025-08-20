import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
  {
    name: 'Sophia Loren',
    feedback: 'The best cosmetics I have ever used! Luxurious and elegant.',
    image: '/images/testimonial1.jpg', // Placeholder for testimonial image
  },
  {
    name: 'Emma Watson',
    feedback: 'Absolutely love the quality and the packaging is stunning!',
    image: '/images/testimonial2.jpg', // Placeholder for testimonial image
  },
  {
    name: 'Gigi Hadid',
    feedback: 'FashionTV cosmetics are a game changer in my beauty routine.',
    image: '/images/testimonial3.jpg', // Placeholder for testimonial image
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;