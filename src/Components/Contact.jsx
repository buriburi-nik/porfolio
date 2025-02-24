import './Contact.css'
import u1 from '../assets/theme_pattern.svg'
import mail from '../assets/mail_icon.svg'
import locatuion from '../assets/location_icon.svg'
import call from '../assets/call_icon.svg'

const Contact = () => {
  return (
      <div className='contact'>
          <div className="contact-title">
              <h1>Get in touch</h1>
              <img src={u1} alt="" />
          </div>
      
          <div className="contact-section">
              <div className="contact-left">
                  <h1>Let's talk</h1>
                  <p>
                      Feel free to reach out to me via email, phone, or social media platforms. I'd be happy to help you with your project.
                  </p>
                  <div className="contact-details">
                      <div className="contact-detail">
                        <img src={mail} alt="" />  <p>niikgharat001@gmail.com</p>

                      </div>
                      <div className="contact-detail">
                         <img src={call} alt="" /> <p>7378633615</p>

                      </div>
                      <div className="contact-detail">
                        <img src={locatuion} alt="" /><p>Nagpur</p>
                      </div>
                  </div>
              </div>

              <form className="contact-right">
                  <label htmlFor="">Your Name</label>
                  <input type="text" placeholder="Enter your name" name='name' />
                  <label htmlFor="">Your Email</label>
                  <input type="email" placeholder="Enter your email" name='email' />
                  <label htmlFor="">Write your message here</label>
                  <textarea placeholder="Write your message here" name='message'  rows="8"/>
                    <button type="submit" className="contact-submit">Submit Now</button>
                </form>
          </div>
    </div>
  )
}

export default Contact
