import './Navbar.css';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';
import logodark from '../assets/nikhil-logo.svg';
import underline from '../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MagneticButton from '../common/MagneticButton';
import Magnetic from '../common/Magnetic';

const sections = ['home', 'about', 'work', 'contact'];

const menuSlide = {
  initial: { x: 'calc(100% + 100px)' },
  enter: {
    x: '0',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
  },
  exit: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
  }
};

const slide = {
  initial: { x: 80 },
  enter: i => ({
    x: 0,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1], delay: 0.03 * i }
  }),
  exit: i => ({
    x: 80,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1], delay: 0.2 * i }
  })
};

const scale = {
  open: {
    scale: 1,
    transition: { duration: 0.3 }
  },
  closed: {
    scale: 0,
    transition: { duration: 0.2 }
  }
};

function HamburgerToggle({ toggle, scrolled }) {
  return (
    <Magnetic>
      <button
        onClick={toggle}
        className="hamburger-toggle"
        aria-label="Toggle menu"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 23 23"
          fill="none"
          stroke={scrolled ? "#00ffd5" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M 2 2.5 L 20 2.5" />
          <path d="M 2 9.423 L 20 9.423" />
          <path d="M 2 16.346 L 20 16.346" />
        </svg>
      </button>
    </Magnetic>
  );
}

export default function Navbar({ scrolled, theme }) {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isToggleClicked, setIsToggleClicked] = useState(false);
  const menuRef = useRef(null);

  // Determine which logo to display based on theme
  const logoSrc = theme === 'pastel' ? logodark : logo;

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveMenu(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuClick = id => {
    setActiveMenu(id);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    if (isToggleClicked) return;
    setIsSidebarOpen(prev => !prev);
    setIsToggleClicked(true);
    setTimeout(() => setIsToggleClicked(false), 500);
  };

  return (
    <>
      <div className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
        <AnchorLink href="#home" offset={50} onClick={() => handleMenuClick('home')}>
          <img src={logoSrc} alt="Logo" className="nav-logo" />
        </AnchorLink>
        <HamburgerToggle toggle={toggleSidebar} scrolled={scrolled} />
      </div>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            ref={menuRef}
            className="sidebar"
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <ul className="sidebar-menu">
              {sections.map((id, i) => (
                <Magnetic key={id}>
                  <motion.li
                    className={`nav-item ${activeMenu === id ? 'active' : ''}`}
                    variants={slide}
                    custom={i}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <AnchorLink href={`#${id}`} offset={50} onClick={() => handleMenuClick(id)}>
                      <p>{id === 'work' ? 'Portfolio' : id === 'about' ? 'About Me' : id.charAt(0).toUpperCase() + id.slice(1)}</p>
                      {activeMenu === id && (
                        <motion.img
                          src={underline}
                          alt="underline"
                          className="underline"
                          layoutId="underline"
                        />
                      )}
                    </AnchorLink>
                  </motion.li>
                </Magnetic>
              ))}
            </ul>

            <motion.div className="nav-cta" variants={scale} initial="closed" animate="open" exit="closed">
              <MagneticButton backgroundColor="#455CE9">
                <AnchorLink href="#contact" offset={50}>
                  <p>Connect With Me</p>
                </AnchorLink>
              </MagneticButton>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
