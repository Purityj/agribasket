import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-title-line">Harvesting Growth,</span>
            <span className="hero-title-line">Delivering Freshness</span>
          </h1>
          <p className="hero-subtitle">
            Premium Agricultural Exports from Kenya to Global Markets
          </p>
          <div className="hero-buttons">
            <Link 
              to="exports" 
              smooth={true} 
              duration={800} 
              className="hero-btn primary-btn"
            >
              View Our Exports
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={800} 
              className="hero-btn outline-btn"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <Link to="about" smooth={true} duration={800}>
          <span className="scroll-text">Explore More</span>
          <div className="scroll-arrow"></div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;