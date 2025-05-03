// src/App.jsx
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import CSSWaveDivider from './Components/CSSWaveDivider';

import Navbar      from "./Components/Navbar";
import Hero1       from "./Components/Hero1";
import About       from "./Components/About";
import Mywork      from "./Components/Mywork";
import Contact     from "./Components/Contact";
import Footer      from "./Components/Footer";
import Preloader   from './Components/Preloader';

import './Preloader.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [scrolled, setScrolled]           = useState(false);

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

  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <AnimatePresence>
        {showPreloader && <Preloader onFinish={() => setShowPreloader(false)} />}
      </AnimatePresence>

      {!showPreloader && (
        <>
          <Navbar scrolled={scrolled} />
          

          <Hero1 />
          <CSSWaveDivider gradient="linear-gradient(267deg,#ff87c3,#654ea3)" />

          <About />
            <CSSWaveDivider flip gradient="linear-gradient(267deg,#ff87c3,#654ea3)" />                                           
                                       

          <Mywork />
          <CSSWaveDivider gradient="linear-gradient(267deg,#ff87c3,#654ea3)" />

          <Contact />
          <CSSWaveDivider flip gradient="linear-gradient(267deg,#ff87c3,#654ea3)" />                                          

          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
