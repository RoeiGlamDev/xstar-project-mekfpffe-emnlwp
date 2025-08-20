import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GradientBackgroundStyled = styled.div`
  height: 100vh; // Full height
  background: linear-gradient(270deg, #f8c8d8, #ffffff); // Pink to white
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite; // Animation duration and easing
`;

const GradientBackground: React.FC = ({ children }) => {
  return <GradientBackgroundStyled>{children}</GradientBackgroundStyled>; // Render children
};

export default GradientBackground;