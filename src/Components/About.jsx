import './About.css'
import patterns from '../assets/theme_pattern.svg'
import profileabout from '../assets/gojo.png'
const About = () => {
  return (
    <div className='about'> 
      <div className="about-title">
        <h1>About me</h1>
        <img src={patterns} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profileabout} alt="" />
        </div>

        
        <div className="about-right">
          <div className="about-para">
            <p> 
              I am passionate software engineer with a profound understanding of user experience design. He has worked in various industries such as healthcare, finance, and education, where he has developed innovative solutions that have significantly impacted people's lives. Nikhil is currently working remotely as a software engineer at a start-up company focused on creating digital solutions for healthcare. He is eager to learn new technologies and contribute to the growing field of software engineering.
            </p>
            <p>
              I am a creative, inquisitive, and problem-solving individual. He is currently looking for a new opportunity to further his career and grow in the field of software engineering. Nikhil is a natural leader and team player, always ready to lend a hand when needed.
            </p>
            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
              <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
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
