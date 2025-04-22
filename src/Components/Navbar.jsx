import './Navbar.css';
import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.svg';
import underline from '../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';
import MagneticButton from '../common/MagneticButton'; // Import MagneticButton
import Magnetic from '../common/Magnetic';

const sections = ["home", "about", "services", "work", "contact"];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Scroll-based active section
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

  // Close on outside click (for mobile menu)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsMenuOpen(false);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'blur-bg' : ''}`}>
      <img src={logo} alt="Logo" className="nav-logo" draggable="false" />

      <img
        src={menu_open}
        onClick={() => setIsMenuOpen(true)}
        alt="Open Menu"
        className="nav-mob-open"
        draggable="false"
        aria-label="Open navigation menu"
      />

      <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <img
          src={menu_close}
          onClick={() => setIsMenuOpen(false)}
          alt="Close Menu"
          className="nav-mob-close"
          draggable="false"
          aria-label="Close navigation menu"
        />

        {sections.map((id) => (
  <Magnetic key={id}>
    <div className="nav-item-wrapper">
      <li className="nav-item">
        <AnchorLink
          className="anchor-link"
          href={`#${id}`}
          offset={50}
          onClick={() => handleMenuClick(id)}
        >
          <p>{id === "work" ? "Portfolio" : id === "about" ? "About Me" : id.charAt(0).toUpperCase() + id.slice(1)}</p>
          {activeMenu === id && (
            <img src={underline} alt="underline" className="underline" />
          )}
        </AnchorLink>
      </li>
    </div>
  </Magnetic>
))}

      </ul>

      {/* <AnchorLink href="#contact" offset={50}>
        <button className="nav-connect">Connect With Me</button>
     </AnchorLink> */}
      <MagneticButton backgroundColor="#455CE9">
        <AnchorLink href="#contact" offset={50}>
          <p> Connect With Me</p>
        </AnchorLink>
      </MagneticButton>
    </div>
  );
};

export default Navbar;
