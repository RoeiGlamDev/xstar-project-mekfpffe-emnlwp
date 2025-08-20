import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene3D: React.FC = () => {
  return (
    <Canvas style={{ background: 'white' }}> {/* Canvas background color */}
      <ambientLight intensity={0.5} /> {/* Soft ambient light */}
      <pointLight position={[10, 10, 10]} intensity={1} /> {/* Point light for highlights */}
      <OrbitControls /> {/* Allow user to rotate the view */}
      {/* Add your 3D models or components here */}
    </Canvas>
  );
};

export default Scene3D;