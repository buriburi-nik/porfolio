import profile from '../assets/gojo.png';
// import resume from '../assets/';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaDownload } from 'react-icons/fa';
import MagneticButton from '../common/MagneticButton';



const Hero = () => {
  return (
    <div id="home" className="hero">
     
      <img src={profile} alt="Profile" className="profile" />

      <h1>
        <span>{`I'm Nikhil Gharat,`}</span> a Frontend Developer
      </h1>

      <p>
        I am passionate about building user-friendly interfaces and creating engaging
        experiences.
      </p>

      <div className="hero-action">
        {/* Connect button */}
           <MagneticButton backgroundColor="#455CE9">
                <AnchorLink href="#contact" offset={50}>
                  <p>Connect With Me</p>
                </AnchorLink>
              </MagneticButton>

<MagneticButton
  className="custom-resume-button gradient-resume" backgroundColor="#FF3D00"
>
  <a
     href="/Resume.pdf" 
    download="Nikhil_Gharat_Resume.pdf"
    className="resume-link"
  >
     <p><FaDownload style={{ marginRight: '8px' }} />
    My Resume</p>
  </a>
</MagneticButton>

      </div>
    </div>
  );
};

export default Hero;
