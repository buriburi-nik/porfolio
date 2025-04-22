import { motion } from 'framer-motion';
import './Curve.css';

const AnimatedCurve = ({ isOpen }) => {
  const height = window.innerHeight;
  const initialPath = `M100 0 L100 ${height} Q-100 ${height / 2} 100 0`;
  const targetPath = `M100 0 L100 ${height} Q100 ${height / 2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: { d: targetPath, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
    exit: { d: initialPath, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <svg className="svg-curve">
      <motion.path
        variants={curve}
        initial="initial"
        animate={isOpen ? 'enter' : 'exit'}
        exit="exit"
      />
    </svg>
  );
};

export default AnimatedCurve;
