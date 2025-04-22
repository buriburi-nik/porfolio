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

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuRef = useRef(null);

  // Observe sections to track active link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveMenu(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Close sidebar if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuClick = (id) => {
    setActiveMenu(id);
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Header with logo and toggle button */}
      <div className="nav-header">
        <img src={logo} alt="Logo" className="nav-logo" draggable="false" />
        <img
          src={menu_open}
          onClick={() => setIsSidebarOpen(true)}
          alt="Open Menu"
          className="nav-toggle-btn"
          draggable="false"
        />
      </div>

      {/* Sidebar menu */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            ref={menuRef}
            className="sidebar"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={menu_close}
              alt="Close Sidebar"
              className="sidebar-close"
              onClick={() => setIsSidebarOpen(false)}
              draggable="false"
            />
            <ul className="sidebar-menu">
              {sections.map((id) => (
                <Magnetic key={id}>
                  <li className={`nav-item ${activeMenu === id ? 'active' : ''}`}>
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
                  </li>
                </Magnetic>
              ))}

              <div className="nav-cta">
                <MagneticButton backgroundColor="#455CE9">
                  <AnchorLink href="#contact" offset={50}>
                    <p>Connect With Me</p>
                  </AnchorLink>
                </MagneticButton>
              </div>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
