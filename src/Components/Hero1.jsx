// src/Components/Hero1.jsx
import profile from '../assets/gojo.png'
import './Hero.css'
import ThreeScene from './ThreeScene'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-3d-container">
        <ThreeScene />
      </div>
      <img src={profile} alt="" className='profile' />
      <h1>
        <span>{`I'm Nikhil Gharat,`}</span>
 a Frontend Developer based in India
      </h1>
      <p>I am passionate about building user-friendly interfaces and creating engaging experiences.</p>
      <div className="hero-action">
        <div className="hero-connect">
        <AnchorLink className="anchor-link" href="#contact" offset={50}>
          Connect with Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}
export default Hero