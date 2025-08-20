import * as THREE from 'three'; // Importing THREE.js library

// Function to create a basic scene
export const createScene = () => {
    const scene = new THREE.Scene(); // Create a new scene
    scene.background = new THREE.Color(0xffffff); // Set background color to white
    return scene;
};

// Function to create a camera
export const createCamera = (aspectRatio: number) => {
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000); // Create a perspective camera
    camera.position.z = 5; // Set camera position
    return camera;
};

// Function to create a renderer
export const createRenderer = (canvas: HTMLCanvasElement) => {
    const renderer = new THREE.WebGLRenderer({ canvas }); // Create a WebGL renderer
    renderer.setSize(window.innerWidth, window.innerHeight); // Set renderer size
    return renderer;
};

// Function to create a light
export const createLight = () => {
    const light = new THREE.AmbientLight(0xffffff, 1); // Create ambient light
    return light;
};

// Function to add a cube to the scene
export const addCube = (scene: THREE.Scene) => {
    const geometry = new THREE.BoxGeometry(); // Create cube geometry
    const material = new THREE.MeshStandardMaterial({ color: 0xffc0cb }); // Create pink material
    const cube = new THREE.Mesh(geometry, material); // Create cube mesh
    scene.add(cube); // Add cube to the scene
    return cube;
};

// Function to animate the scene
export const animate = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
    const animateLoop = () => {
        requestAnimationFrame(animateLoop); // Request next frame
        renderer.render(scene, camera); // Render the scene
    };
    animateLoop(); // Start animation
}; 

export default { createScene, createCamera, createRenderer, createLight, addCube, animate }; // Default export of utility functions