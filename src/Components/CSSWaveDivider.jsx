import React, { useEffect, useState } from 'react';
import '../animation.css'; // Make sure this file is in your src folder

const CSSWaveDivider = ({
  flip = false,
  height = 100,
  gradient = 'var(--accent-gradient)'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const style = {
    width: '100%',
    height: `${height}px`,
    background: gradient,
    clipPath:
      'polygon(0% 50%, 10% 60%, 20% 55%, 30% 62%, 40% 60%, 50% 65%, 60% 62%, 70% 64%, 80% 58%, 90% 62%, 100% 55%, 100% 100%, 0% 100%)',
    transform: flip ? 'rotate(180deg)' : 'none',
    backgroundSize: '200% 200%',
    animation: isScrolled ? 'waveAnimationScrolled 6s linear infinite' : 'waveAnimation 6s linear infinite',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  };

  return (
    <div className="wave-divider-container">
      <div className="wave-animated" style={style} />
    </div>
  );
};

export default CSSWaveDivider;
