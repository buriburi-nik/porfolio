import React from 'react';
import '../animation.css'; // Ensure this file exists and is correctly referenced

const CSSWaveDivider = ({
  flip = false,
  height = 100,
  gradient = 'var(--accent-gradient)' // Use the CSS variable here
}) => {
  const style = {
    width: '100%',
    height: `${height}px`,
    background: gradient,
    clipPath:
      'polygon(0 50%, 10% 53%, 20% 47%, 30% 52%, 40% 48%, 50% 53%, 60% 50%, 70% 54%, 80% 49%, 90% 52%, 100% 50%, 100% 100%, 0% 100%)',
    transform: flip ? 'rotate(180deg)' : undefined,
    backgroundSize: '200% 200%',
  };

  return <div className="wave-animated" style={style} />;
};

export default CSSWaveDivider;
