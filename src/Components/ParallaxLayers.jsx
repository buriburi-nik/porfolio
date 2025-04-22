// src/Components/ParallaxLayers.jsx
import { useEffect, useRef, useState } from 'react';
import './ParallaxLayers.css';

const ParallaxLayers = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const layersRef = useRef(null);

  useEffect(() => {
    // Handle mouse movement for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    // Handle scrolling for parallax effect
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Apply parallax transformations to each layer
  useEffect(() => {
    if (!layersRef.current) return;
    
    const layers = layersRef.current.children;
    
    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      const depth = parseFloat(layer.getAttribute('data-depth'));
      const translateX = mousePosition.x * depth * 30; // Mouse X movement
      const translateY = mousePosition.y * depth * 30; // Mouse Y movement
      const scrollY = scrollPosition * depth * 0.3; // Scroll effect
      
      layer.style.transform = `translate3d(${translateX}px, ${translateY - scrollY}px, 0)`;
    }
  }, [mousePosition, scrollPosition]);

  return (
    <div className="parallax-container">
      <div className="parallax-layers" ref={layersRef}>
        {/* Distant stars layer */}
        <div className="parallax-layer stars-layer" data-depth="0.1">
          {Array(100).fill().map((_, i) => (
            <div 
              key={`star-${i}`} 
              className="star" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 200}%`,
                opacity: Math.random() * 0.8 + 0.2,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`
              }}
            />
          ))}
        </div>

        {/* Medium distance nebula/clouds */}
        <div className="parallax-layer nebula-layer" data-depth="0.3">
          {Array(8).fill().map((_, i) => (
            <div 
              key={`nebula-${i}`} 
              className="nebula" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 200}%`,
                opacity: Math.random() * 0.3 + 0.1,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                background: `radial-gradient(circle at center, 
                  rgba(${Math.random() * 100 + 155}, ${Math.random() * 50}, ${Math.random() * 255}, 0.3) 0%,
                  rgba(0, 0, 0, 0) 70%)`
              }}
            />
          ))}
        </div>

        {/* Closer gradient layers */}
        <div className="parallax-layer gradient-layer-1" data-depth="0.5">
          <div className="gradient" 
            style={{
              background: 'radial-gradient(circle at 20% 30%, rgba(218, 124, 37, 0.15) 0%, rgba(0, 0, 0, 0) 70%)'
            }}
          />
        </div>
        
        <div className="parallax-layer gradient-layer-2" data-depth="0.7">
          <div className="gradient" 
            style={{
              background: 'radial-gradient(circle at 80% 70%, rgba(185, 35, 225, 0.15) 0%, rgba(0, 0, 0, 0) 70%)'
            }}
          />
        </div>

        {/* Foreground floating particles */}
        <div className="parallax-layer particles-layer" data-depth="0.9">
          {Array(25).fill().map((_, i) => (
            <div 
              key={`particle-${i}`} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 200}%`,
                opacity: Math.random() * 0.5 + 0.1,
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(218, 124, 37, 0.8)`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParallaxLayers;