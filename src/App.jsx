import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from "./Components/Navbar";
import Hero1 from "./Components/Hero1";
import About from "./Components/About";
import Mywork from "./Components/Mywork";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Preloader from './Components/Preloader'; 
import './Preloader.css'; 
import './animation.css'; // Import our new animations

const App = () => {
    const [showPreloader, setShowPreloader] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll events for navbar and other scroll effects
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);
        
        // Apply animations to elements with animation classes
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        // Target all elements with animation classes
        const animatedElements = document.querySelectorAll(
            '.fade-in, .slide-up, .slide-right, .slide-left, .scale-in, .stagger-item'
        );
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            animatedElements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, [scrolled]);

    return (
        <div style={{ position: 'relative', zIndex: 0 }}>
            <AnimatePresence>
                {showPreloader && <Preloader onFinish={() => setShowPreloader(false)} />}
            </AnimatePresence>

            {!showPreloader && (
                <>
                    <Navbar scrolled={scrolled} />
                    <Hero1 />
                    <About />
                    <Mywork />
                    <Contact />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default App;