'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

const words = [
  "Hello",
  "नमस्ते",       
  "नमस्कार",     
  "வணக்கம்",      
  "హలో",         
  "হ্যালো",        
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", 
  "नमों नमः",     
  "કેમ છો",       
  "السلام عليكم",  
  "ନମସ୍କାର",   
    "ಹಲೋ",  
];

export default function Preloader({ onFinish }) {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const [path, setPath] = useState('');

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
        const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`;
        setPath(initialPath);

        if (index < words.length - 1) {
            const timeout = setTimeout(() => setIndex(index + 1), index === 0 ? 1000 : 150);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setPath(targetPath);
                setTimeout(() => onFinish?.(), 1000);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className="introduction">
            {dimension.width > 0 && (
                <>
                    <motion.p variants={opacity} initial="initial" animate="enter">
                        <span></span>{words[index]}
                    </motion.p>
                    <svg>
                        <motion.path
                            initial={{ d: path }}
                            animate={{ d: path }}
                            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                        />
                    </svg>
                </>
            )}
        </motion.div>
    );
}
