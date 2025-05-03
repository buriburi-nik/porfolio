// src/App.jsx
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import CSSWaveDivider from './Components/CSSWaveDivider';

import Navbar from "./Components/Navbar";
import Hero1 from "./Components/Hero1";
import About from "./Components/About";
import Mywork from "./Components/Mywork";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Preloader from './Components/Preloader';

import './Preloader.css';
import 'font-awesome/css/font-awesome.min.css';

const themes = ['dark', 'light', 'pastel'];

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll(
      '.fade-in, .slide-up, .slide-right, .slide-left, .scale-in, .stagger-item'
    ).forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const cycleTheme = () => {
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <button
        onClick={cycleTheme}
        style={{
          position: 'fixed',
          bottom: '1rem',
          left: '1rem',
          zIndex: 99,
          background: 'var(--accent-gradient)',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background 0.3s ease'
        }}
      >
        Theme: {theme}
      </button>

      <AnimatePresence>
        {showPreloader && <Preloader onFinish={() => setShowPreloader(false)} />}
      </AnimatePresence>

      {!showPreloader && (
        <>
          <Navbar scrolled={scrolled} />
          <Hero1 />
          <CSSWaveDivider gradient="var(--divider-gradient)" />
          <About />
          <CSSWaveDivider flip gradient="var(--divider-gradient)" />
          <Mywork />
          <CSSWaveDivider gradient="var(--divider-gradient)" />
          <Contact />
          <CSSWaveDivider flip gradient="var(--divider-gradient)" />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
