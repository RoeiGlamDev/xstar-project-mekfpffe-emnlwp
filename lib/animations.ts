import { keyframes } from 'styled-components';

// Define keyframes for fade-in animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Define keyframes for slide-up animation
const slideUp = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Define keyframes for hover effect
const hoverEffect = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Export animations
export const animations = {
  fadeIn,
  slideUp,
  hoverEffect,
};