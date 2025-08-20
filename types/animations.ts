import { AnimationType } from './types'; // Importing AnimationType from types file

const animationTypes: AnimationType[] = [ // Defining an array of AnimationType
  {
    name: 'fadeIn', // Animation name
    duration: '0.5s', // Duration of the animation
    timingFunction: 'ease-in', // Timing function for the animation
  },
  {
    name: 'fadeOut',
    duration: '0.5s',
    timingFunction: 'ease-out',
  },
  {
    name: 'slideIn',
    duration: '0.7s',
    timingFunction: 'ease-in-out',
  },
  {
    name: 'slideOut',
    duration: '0.7s',
    timingFunction: 'ease-in-out',
  },
  {
    name: 'bounce',
    duration: '1s',
    timingFunction: 'ease-in-out',
  },
];

export default animationTypes; // Exporting the animationTypes array as default