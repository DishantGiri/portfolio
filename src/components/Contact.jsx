import React, { useRef, useState } from 'react';
import './Contact.css';
import facebook from '../assets/facebook1.png';
import linkedin from '../assets/linkedin1.png';
import instagram from '../assets/instagram1.png';
import github from '../assets/github1.png';
import send_icon from '../assets/send.png';
import location from '../assets/location.png';
import mail from '../assets/email1.png';
import phone from '../assets/phone1.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(
        'service_tn0vhdu',   // Replace with your EmailJS service ID
        'template_fvzgych',  // Replace with your template ID
        form.current,
        { publicKey: '1T5xKxj0pnhP0jw2g' }  // Replace with your public key
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current.reset(); // Clear form
          setTimeout(() => setSuccess(null), 5000); // Hide after 5s
        },
        (error) => {
          console.error('FAILED...', error.text);
          setSuccess(false);
          setLoading(false);
          setTimeout(() => setSuccess(null), 5000); // Hide after 5s
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form-section">
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-title-background">
              <h2 className="section-title-left">Send a Message</h2>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src={send_icon} alt="Send Icon" className="button-icon" />
            </button>

            {success === true && <p className="success-msg">Message sent successfully!</p>}
            {success === false && <p className="error-msg">Something went wrong. Try again.</p>}
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info-section">
          <h2 className="section-title-right">Get in Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <img src={mail} alt="Email Icon" />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>dishantgiri22@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src={phone} alt="Phone Icon" />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+977 9844945955</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src={location} alt="Location Icon" />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Syangja, Nepal</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-social">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/dishantgiri127" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/DishantGiri" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/dishant.java/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" style={{ borderRadius: "40%" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
