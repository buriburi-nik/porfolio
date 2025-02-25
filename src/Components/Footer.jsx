import "./Footer.css"
import footer_logo from '../assets/footer_logo.svg'
import user_logo from '../assets/user_icon.svg'
const Footer = () => {
  return (
      <div className="footer">
          <div className="footer-top">
              <div className="footer-top-left">
                  <img src={footer_logo} alt="" />
                  <p>
                      I am a frontend developer. I am passionate about building user-friendly interfaces and creating engaging experience
                  </p>
              </div>

              <div className="footer-top-right">
                  <div className="footer-email">
                      <img src={user_logo} alt="" />
                      <input type="email" placeholder="Enter your email" />
                  </div>
                  <div className="footer-sub">
                      Subscribe
                  </div>
              </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <p className="footer-bottom-left">2022  All rights reserved. Designed by <a href="https://www.linkedin.com/in/nikhil-gharat-288643166/">Nikhil Gharat</a></p>
              <div className="footer-bottom-right">
                  <p>Term of Services</p>
                  <p>Privacy Policy</p>
                  <p>Connect with me</p>
              </div> 
          </div>
      
      
    </div>
  )
}

export default Footer
