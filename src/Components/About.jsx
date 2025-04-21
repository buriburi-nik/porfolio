// src/Components/About.jsx
import './About.css'
import patterns from '../assets/theme_pattern.svg'
// import profileabout from '../assets/gojo.png'
import ModelViewer from './ModelViewer'

const About = () => {
  return (
    <div className='about' id='about'> 
      <div className="about-title">
        <h1>About me</h1>
        <img src={patterns} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <div className="model-container">
            <ModelViewer />
          </div>
        </div>

        
        <div className="about-right">
          <div className="about-para">
            <p> 
              I am a passionate fresher with a strong foundation in software engineering and front-end development. Although  I'm just starting my career, my enthusiasm for technology drives me to continuously learn and grow. I enjoy creating user-friendly designs and innovative digital solutions, and I'm eager to bring my fresh perspective to a dynamic team. I'm ready to tackle challenges, contribute creative ideas, and build a successful career in software engineering.
            </p>
            <p>
               'I'm' a creative, inquisitive problem-solver seeking new opportunities in software engineering. As a natural leader and team player, I'm always ready to help.
            </p>
            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
              <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
              <div className="about-skill"><p>Three.js</p><hr style={{width:"40%"}}/></div>
            </div>
          </div>
        </div>

      </div>

        <div className="about-achievements">
          <div className="about-achievenment">
              <h1>FRESHER</h1>
          </div>
          <hr />
          <div className="about-achievenment">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
        </div>
    </div>
  )
}

export default About