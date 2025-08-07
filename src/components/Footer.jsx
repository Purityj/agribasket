import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'About', path: '#about' },
    { name: 'Exports', path: '#exports' },
    { name: 'Services', path: '#services' },
    { name: 'Contact', path: '#contact' }
  ];

  const services = [
    { name: 'Produce Export', path: '#exports' },
    { name: 'Inputs Import', path: '#exports' },
    { name: 'Farmer Training', path: '#services' },
    { name: 'Quality Control', path: '#services' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <span>AGRIBASKET LIMITED</span>
            </div>
            <p className="footer-description">
              Pioneering excellence in agricultural exports from Kenya, connecting local farmers to global markets.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <a href="tel:+254712345678">+254 712 345 678</a>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:info@agribasket.co.ke">info@agribasket.co.ke</a>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-list">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.path} className="footer-link">{service.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="newsletter-text">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input" 
                required 
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://facebook.com/agribasket" className="social-link">
              <FaFacebookF />
            </a>
            <a href="https://x.com/agribasket" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/company/agribasket" className="social-link">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com/agribasket" className="social-link">
              <FaInstagram />
            </a>
          </div>

          <div className="copyright">
            &copy; {new Date().getFullYear()} Agribasket Limited. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;