// src/Components/ModelViewer.jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ModelViewer = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    const size = window.innerWidth > 768 ? 300 : 200;
    renderer.setSize(size, size);
    renderer.setClearColor(0x161513, 0);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create a laptop model using basic Three.js shapes
    const laptopGroup = new THREE.Group();

    // Laptop base
    const baseGeometry = new THREE.BoxGeometry(3, 0.2, 2);
    const baseMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x333333,
      specular: 0x777777,
      shininess: 30
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    laptopGroup.add(base);

    // Laptop screen
    const screenGeometry = new THREE.BoxGeometry(2.8, 0.1, 1.8);
    const screenBaseMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x333333,
      specular: 0x999999,
      shininess: 30
    });
    const screen = new THREE.Mesh(screenGeometry, screenBaseMaterial);
    screen.position.y = 1;
    screen.position.z = -0.9;
    screen.rotation.x = Math.PI / 6;
    laptopGroup.add(screen);

    // Laptop display
    const displayGeometry = new THREE.PlaneGeometry(2.5, 1.5);
    const displayMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x6e20e3,
      emissive: 0x072534,
      side: THREE.DoubleSide,
      shininess: 60
    });
    const display = new THREE.Mesh(displayGeometry, displayMaterial);
    display.position.y = 1.06;
    display.position.z = -0.85;
    display.rotation.x = Math.PI / 6;
    laptopGroup.add(display);

    // Add keyboard surface
    const keyboardGeometry = new THREE.PlaneGeometry(2.8, 1.8);
    const keyboardMaterial = new THREE.MeshBasicMaterial({
      color: 0x222222,
      side: THREE.DoubleSide
    });
    const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
    keyboard.rotation.x = -Math.PI / 2;
    keyboard.position.y = 0.11;
    laptopGroup.add(keyboard);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    scene.add(laptopGroup);

    // Position laptop and camera
    laptopGroup.rotation.y = Math.PI / 4;
    camera.position.z = 5;

    // Handle window resize
    const handleResize = () => {
      const newSize = window.innerWidth > 768 ? 300 : 200;
      renderer.setSize(newSize, newSize);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      laptopGroup.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="model-viewer" 
      style={{ 
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    />
  );
};

export default ModelViewer;
