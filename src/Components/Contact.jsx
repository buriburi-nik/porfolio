import './Contact.css';
import u1 from '../assets/theme_pattern.svg';
import mail from '../assets/mail_icon.svg';
import location from '../assets/location_icon.svg';
// import call from '../assets/call_icon.svg';
import { useState } from 'react';
import MagneticButton from '../common/MagneticButton';
import Magnetic from '../common/Magnetic';


const Contact = () => {
  const [alertMsg, setAlertMsg] = useState(null);
  const [alertType, setAlertType] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '5058bce8-58eb-4e84-8ea3-5af035485f3d');
    formData.append('subject', 'New Message from Portfolio');
    formData.append('reply_to', formData.get('email'));

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });
      const res = await response.json();

      if (res.success) {
        setAlertType('success');
        setAlertMsg('Thank you! Your message has been sent.');
        event.target.reset();
      } else {
        setAlertType('error');
        setAlertMsg('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setAlertType('error');
      setAlertMsg('An error occurred. Please try again.');
    }

    setTimeout(() => {
      setAlertMsg(null);
      setAlertType('');
    }, 3000);
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={u1} alt="Background Pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Feel free to reach out to me via email, phone, or social media platforms.{' '}
            I&apos;d be happy to help you with your project.
          </p>
          <div className="contact-details">
             <Magnetic>
        <div className="contact-detail">
          <img src={mail} alt="Mail Icon" />
          <p>niikgharat001@gmail.com</p>
        </div>
      </Magnetic>

      {/* <Magnetic>
        <div className="contact-detail">
          <img src={call} alt="Call Icon" />
          <p>7378633615</p>
        </div>
      </Magnetic> */}

      <Magnetic>
        <div className="contact-detail">
          <img src={location} alt="Location Icon" />
          <p>Nagpur</p>
        </div>
      </Magnetic>
          </div>
        </div>

        <form className="contact-right" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />

          <label>Write your message here</label>
          <textarea
            placeholder="Write your message here"
            name="message"
            rows="8"
            required
          />
          
          <MagneticButton className="custom-resume-button gradient-resume" backgroundColor="#ffc857">
            <button type="submit" className="contact-submit">
              Submit Now
            </button>
          </MagneticButton>
        </form>
      </div>

      {alertMsg && (
        <div className={`custom-alert ${alertType}`}>
          {alertMsg}
        </div>
      )}
    </div>
  );
};

export default Contact;
