import profile from '../assets/gojo.png'; // Profile Image
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaDownload } from 'react-icons/fa'; // Download icon
import MagneticButton from '../common/MagneticButton';
 
const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* Profile Image */}
      <img src={profile} alt="Profile" className="profile" />

      {/* Heading */}
      <h1>
        <span>{`I'm Nikhil Gharat,`}</span> a Frontend Developer
      </h1>

      {/* Short Description */}
      <p>
      I design intuitive interfaces and immersive experiences that draw users in—where every detail is deliberate, and every interaction invites exploration.
      </p>

      {/* Actions: Buttons */}
      <div className="hero-action">
        
        {/* Connect Button */}
        <MagneticButton backgroundColor="#455CE9">
          <AnchorLink href="#contact" offset={50}>
            <p>Connect With Me</p>
          </AnchorLink>
        </MagneticButton>

        {/* Resume Button */}
        
        <MagneticButton className="custom-resume-button gradient-resume" backgroundColor="#ffc857 ">
          <a
            href="/Resume.pdf" // Ensure Resume.pdf is in the public folder
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            <p>
              <FaDownload style={{ marginRight: '8px' }} />
              View Resume
            </p>
          </a>
        </MagneticButton>

      </div>
    </div>
  );
};

export default Hero;
