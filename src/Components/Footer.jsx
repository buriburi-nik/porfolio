import { useState, useEffect } from 'react';
import './Footer.css';
import footer_logo from '../assets/logo.svg';
import logodark from '../assets/nikhil-logo.svg'; // dark theme logo

const Footer = ({ theme }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nikhil-gharat-dev/", icon: "fa-linkedin" },
    { name: "GitHub", url: "https://github.com/buriburi-nik", icon: "fa-github" },
    { name: "Twitter", url: "https://twitter.com", icon: "fa-twitter" }
  ];

  // Set the logo based on the theme
  const logoSrc = theme === 'pastel' ? logodark : footer_logo;
  

  return (
    <div className="footer">
      <hr className="footer-divider" />

      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logoSrc} alt="Footer Logo" className="logo footer-logo" />
          <p>
            I bring designs to life with clean code and thoughtful interactions—bridging the gap between aesthetics and usability.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-time">
            <div className="time-display">
              <span className="time">{formattedTime}</span>
              <span className="date">{formattedDate}</span>
            </div>
          </div>

          <div className="footer-social">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fa ${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="arrow-up"></div>
        <span>Back to top</span>
      </div>

      <hr className="footer-divider" />
    </div>
  );
};

export default Footer;
