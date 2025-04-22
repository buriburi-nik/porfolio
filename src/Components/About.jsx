import './About.css';
import { useEffect, useRef } from 'react';
import patterns from '../assets/theme_pattern.svg';
import profileabout from '../assets/about.png';
// import breaker from "../assets/reverse.png"


const skills = [
  { label: "HTML & CSS", level: 70, tooltip: "Intermediate level" },
  { label: "JavaScript", level: 50, tooltip: "Basic proficiency" },
  { label: "React JS", level: 60, tooltip: "Intermediate level" },
];

const About = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((el, index) => {
      let start = 0;
      const target = parseInt(el.getAttribute("data-target"));
      const increment = target / 60;
      const counter = () => {
        start += increment;
        if (start < target) {
          el.innerText = Math.floor(start);
          requestAnimationFrame(counter);
        } else {
          el.innerText = target;
        }
      };
      counter();
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={patterns} alt=""  className=''/>
      </div>

      <div className="about-section">
        <div className="about-left">
          <div className="model-container">
            <img src={profileabout} alt="Profile"  id='pro'/>
          </div>
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate fresher with a strong foundation in software
              engineering and front-end development. Although I'm just starting
              my career, my enthusiasm for technology drives me to continuously
              learn and grow.
            </p>
            <p>
              I'm a creative, inquisitive problem-solver seeking new opportunities
              in software engineering.
            </p>
            <div className="about-skills">
              {skills.map((skill, index) => (
                <div className="about-skill" key={index}>
                  <p>{skill.label}</p>
                  <div className="tooltip-container">
                    <hr style={{ width: `${skill.level}%` }} />
                    <span className="tooltip">{skill.tooltip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-achievements">
        <div className="about-achievenment glowing-card">
          <h1>FRESHER</h1>
        </div>
        <hr />
        <div className="about-achievenment glowing-card">
          <h1 ref={(el) => (countersRef.current[0] = el)} data-target="6">0</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievenment glowing-card">
          <h1>3</h1>
        <p>CERTIFICATES EARNED</p>
      </div>
      </div>
    </div>
  );
};

export default About;
