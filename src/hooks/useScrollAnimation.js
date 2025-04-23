// src/hooks/useScrollAnimation.js
import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once element is visible, we can stop observing it
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

// For staggered animations of multiple elements (like lists)
export const useStaggeredAnimation = (itemCount, staggerDelay = 0.1, threshold = 0.1) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    const currentRef = containerRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Create staggered animation schedule
          const items = [];
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setAnimatedItems(prev => [...prev, i]);
            }, i * (staggerDelay * 1000));
          }
          
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [itemCount, staggerDelay, threshold]);

  return { containerRef, isVisible, animatedItems };
};

export default useScrollAnimation;