import profile from '../assets/gojo.png';
import resume from '../assets/resume.pdf';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="hero">
     
      <img src={profile} alt="Profile" className="profile" />

      <h1>
        <span>{`I'm Nikhil Gharat,`}</span> a Frontend Developer based in India
      </h1>

      <p>
        I am passionate about building user-friendly interfaces and creating engaging
        experiences.
      </p>

      <div className="hero-action">
        {/* Connect button */}
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact" offset={50}>
            Connect with Me
          </AnchorLink>
        </div>

        {/* Resume download button */}
        <a
          className="hero-resume"
          href={resume}
          download="Nikhil_Gharat_Resume.pdf"
        >
          <FaDownload style={{ marginRight: '8px' }} />
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
