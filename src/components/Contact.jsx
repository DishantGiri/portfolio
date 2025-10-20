import React, { useState } from 'react';
import './Contact.css';
import facebook from '../assets/facebook1.png';
import linkedin from '../assets/linkedin1.png';
import instagram from '../assets/instagram1.png';
import github from '../assets/github1.png';
import send_icon from '../assets/send.png';
import location from '../assets/location.png'
import mail from '../assets/email1.png'
import phone from '../assets/phone1.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const data = {
      access_key: 'a34216d8-d503-4dff-b344-b7c6cf81cd87', // Replace with your key
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      redirect: '', // Optional: add a redirect URL if needed
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error('Web3Forms error:', error);
      setSuccess(false);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-title-background">
              <h2 className="section-title-left">Send a Message</h2>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src={send_icon} alt="" className='button-icon'/>
            </button>

            {success === true && <p className="success-msg">Message sent successfully!</p>}
            {success === false && <p className="error-msg">Something went wrong. Try again.</p>}
          </form>
        </div>

        {/* Contact Info & Social Links Section */}
        <div className="contact-info-section">
          <h2 className="section-title-right">Get in Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <img src={mail} alt="" />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>dishantgir22@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <img src={phone} alt="" />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+977 9844945955</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                    <img src={location} alt="" />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Syangja, Nepal</p>
              </div>
            </div>
          </div>

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
                <img src={instagram} alt="Instagram" style={{borderRadius:"40%"}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
