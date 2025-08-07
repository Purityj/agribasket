import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p className="section-subtitle">Get in touch with our team</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              <p>Reach out to us for inquiries, partnerships, or more information about our products and services.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+254 700 000000</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@agribasket.co.ke</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form 
              action="https://formsubmit.co/your@email.com" 
              method="POST"
              className="contact-form"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your email" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Subject" 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Your message here..." 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message <FaPaperPlane className="send-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;