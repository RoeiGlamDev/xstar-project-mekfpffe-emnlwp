import autoprefixer from 'autoprefixer'; // Import autoprefixer for CSS vendor prefixes
import cssnano from 'cssnano'; // Import cssnano for optimizing CSS

export default {
  plugins: [
    autoprefixer(), // Add vendor prefixes
    cssnano({ preset: 'default' }) // Optimize CSS
  ]
};