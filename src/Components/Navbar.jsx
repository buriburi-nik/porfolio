import './Navbar.css';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';
import underline from '../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';
import MagneticButton from '../common/MagneticButton';
import Magnetic from '../common/Magnetic';

const sections = ['home', 'about', 'services', 'work', 'contact'];

const menuSlide = {
  initial: { x: 'calc(100% + 100px)' },
  enter: { 
    x: '0', 
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1], 
      // Delay added for opening animation
    } 
  },
  exit: { 
    x: 'calc(100% + 100px)', 
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1], 
      delay: 0.2  // Delay added for closing animation
    } 
  }
};

const slide = {
  initial: { x: 80 },
  enter: i => ({
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1], 
      delay: 0.05 * i 
    }
  }),
  exit: i => ({
    x: 80, 
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1], 
      delay: 0.5 * i 
    }
  })
};

const scale = {
  open: { scale: 1, transition: { duration: 0.7 } },
  closed: { scale: 0, transition: { duration: 0.4 } }
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isToggleClicked, setIsToggleClicked] = useState(false);  
  const menuRef = useRef(null);

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
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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

    setIsToggleClicked(true);  

    setTimeout(() => {
      setIsSidebarOpen(!isSidebarOpen);
      setIsToggleClicked(false);  
    }, 300);  
  };

  return (
    <>
      <div className="nav-header">
        <img src={logo} alt="Logo" className="nav-logo" draggable="false" />
        <img
          src={isSidebarOpen ? menu_close : menu_open}  
          onClick={toggleSidebar} 
          alt="Toggle Menu"
          className="nav-toggle-btn"
          draggable="false"
        />
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
                      <p>
                        {id === 'work' ? 'Portfolio' : id === 'about' ? 'About Me' : id.charAt(0).toUpperCase() + id.slice(1)}
                      </p>
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
};

export default Navbar;
