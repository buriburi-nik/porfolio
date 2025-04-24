import { useState, useEffect } from 'react';
import "./Footer.css";
import footer_logo from '../assets/logo.svg';

const Footer = () => {
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
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "Twitter", url: "https://twitter.com" }
  ];

  return (
      <div className="footer">
               <hr className="footer-divider" />

      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
          <p>
            I am a frontend developer. I am passionate about building user-friendly interfaces and creating engaging experiences.
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
                {link.name}
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


