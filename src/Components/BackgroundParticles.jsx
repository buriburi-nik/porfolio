import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FloatingBubblesWithParallax = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);  // Transparent background

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create floating bubbles (particles)
    const bubbleCount = 150;
    const bubbles = [];
    const bubbleGeometry = new THREE.SphereGeometry(1, 32, 32);
    const bubbleMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      opacity: 0.7,
      transparent: true,
      blending: THREE.AdditiveBlending,
      wireframe: false,
    });

    const randomColor = () => new THREE.Color(Math.random(), Math.random(), Math.random());

    const createBubble = () => {
      const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
      bubble.position.set(
        (Math.random() - 0.5) * 100,  // X position
        (Math.random() - 0.5) * 100,  // Y position
        (Math.random() - 0.5) * 100   // Z position
      );
      bubble.scale.set(0.5 + Math.random() * 1.5, 0.5 + Math.random() * 1.5, 0.5 + Math.random() * 1.5);
      bubble.material.color = randomColor();
      scene.add(bubble);
      bubbles.push(bubble);
    };

    // Create bubbles
    for (let i = 0; i < bubbleCount; i++) {
      createBubble();
    }

    // Parallax effect: Mouse movement
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll parallax effect: Influencing Y position of bubbles based on scroll
    let scrollOffset = 0;
    const handleScroll = () => {
      scrollOffset = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Animation loop
    const animateBubbles = () => {
      requestAnimationFrame(animateBubbles);

      // Move bubbles with parallax effects
      bubbles.forEach((bubble) => {
        // Parallax effect based on mouse
        bubble.position.y += 0.05 * Math.sin(Date.now() * 0.001 + bubble.position.x + mouseX);  // Vertical float
        bubble.position.x += 0.02 * Math.cos(Date.now() * 0.002 + bubble.position.y + mouseY);  // Horizontal drift

        // Parallax effect based on scroll
        bubble.position.z += (Math.sin(Date.now() * 0.005 + scrollOffset) * 0.2);  // Z position changes based on scroll

        // Bounce effect
        if (bubble.position.y > 50 || bubble.position.y < -50) {
          bubble.position.y = Math.sign(bubble.position.y) * 50;
        }
        if (bubble.position.x > 50 || bubble.position.x < -50) {
          bubble.position.x = Math.sign(bubble.position.x) * 50;
        }
      });

      renderer.render(scene, camera);
    };

    // Camera setup
    camera.position.z = 30;

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Start the animation loop
    animateBubbles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        pointerEvents: 'none',  // Prevent interference with other page content
      }}
    />
  );
};

export default FloatingBubblesWithParallax;
