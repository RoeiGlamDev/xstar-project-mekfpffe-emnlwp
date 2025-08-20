import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
  background: linear-gradient(135deg, #f8e1e7, #ffffff); // Pink to white gradient
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 150px; // Width of the floating element
  height: 150px; // Height of the floating element
  border-radius: 50%; // Circular shape
  background-color: #ff6f91; // Elegant pink color
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); // Subtle shadow for depth
  animation: float 3s ease-in-out infinite; // Floating animation

  @keyframes float {
    0%, 100% {
      transform: translatey(0); // Start and end position
    }
    50% {
      transform: translatey(-20px); // Float upwards
    }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement style={{ left: '10%', top: '20%' }} /> {/* Positioning for floating element */}
      <FloatingElement style={{ right: '15%', top: '50%' }} />
      <FloatingElement style={{ left: '50%', bottom: '10%' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;