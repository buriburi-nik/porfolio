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

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Only two themes
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
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

  // Toggle only dark/light
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div style={{ position: 'relative', zIndex: 0 }}>

      {/* THEME SLIDER TOGGLE */}
      <div
        onClick={toggleTheme}
        style={{
          position: "fixed",
          bottom: "1rem",
          left: "1rem",
          width: "55px",
          height: "28px",
          background: theme === "dark" ? "#333" : "#ddd",
          borderRadius: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: "3px",
          transition: "0.3s",
          zIndex: 99
        }}
      >
        <div
          style={{
            height: "22px",
            width: "22px",
            borderRadius: "50%",
            background: "var(--accent-gradient)",
            transform: theme === "dark" ? "translateX(0px)" : "translateX(27px)",
            transition: "0.3s"
          }}
        />
      </div>

      <AnimatePresence>
        {showPreloader && <Preloader onFinish={() => setShowPreloader(false)} />}
      </AnimatePresence>

      {!showPreloader && (
        <>
          <Navbar scrolled={scrolled} theme={theme} />
          <Hero1 />
          <CSSWaveDivider gradient="var(--divider-gradient)" />
          <About />
          <CSSWaveDivider flip gradient="var(--divider-gradient)" />
          <Mywork />
          <CSSWaveDivider gradient="var(--divider-gradient)" />
          <Contact />
          <CSSWaveDivider flip gradient="var(--divider-gradient)" />
          <Footer theme={theme} />
        </>
      )}
    </div>
  );
};

export default App;
