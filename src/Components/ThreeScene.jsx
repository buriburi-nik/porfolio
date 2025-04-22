import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera & Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // Clean sky blue, no fog

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, 3, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    // Resize logic
    const resize = () => {
      if (!mountRef.current) return;
      const { clientWidth: w, clientHeight: h } = mountRef.current;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    mountRef.current.appendChild(renderer.domElement);
    resize();
    window.addEventListener('resize', resize);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const spotLight = new THREE.SpotLight(0xffffff, 0.8);
    spotLight.position.set(5, 10, 5);
    spotLight.castShadow = true;
    scene.add(ambientLight, spotLight);

    // Floating Island
    const island = new THREE.Mesh(
      new THREE.CylinderGeometry(4, 6, 1.5, 32),
      new THREE.MeshStandardMaterial({ color: 0x8b4513 })
    );
    island.rotation.x = Math.PI;
    island.position.y = -1;
    island.receiveShadow = true;
    scene.add(island);

    // Grass
    const grass = new THREE.Mesh(
      new THREE.CircleGeometry(4, 32),
      new THREE.MeshStandardMaterial({ color: 0x228b22 })
    );
    grass.rotation.x = -Math.PI / 2;
    grass.position.y = -0.25;
    scene.add(grass);

    // Tree trunk
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 1, 8),
      new THREE.MeshStandardMaterial({ color: 0x8b4513 })
    );
    trunk.position.set(0, -0.25, 0);
    scene.add(trunk);

    // Tree leaves
    const leaves = new THREE.Mesh(
      new THREE.ConeGeometry(0.6, 1.5, 8),
      new THREE.MeshStandardMaterial({ color: 0x006400 })
    );
    leaves.position.set(0, 0.5, 0);
    scene.add(leaves);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="three-scene"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
};

export default ThreeScene;
