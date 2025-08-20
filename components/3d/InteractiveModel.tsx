'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const InteractiveModel: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current?.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        camera.position.set(0, 1, 3); // Position the camera
        controls.update();

        const light = new THREE.AmbientLight(0xffffff, 1); // Soft white light
        scene.add(light);

        const geometry = new THREE.BoxGeometry(1, 1, 1); // Example geometry
        const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Pink color
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01; // Rotate cube
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mountRef.current?.removeChild(renderer.domElement); // Clean up
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />; // Fullscreen model
};

export default InteractiveModel;