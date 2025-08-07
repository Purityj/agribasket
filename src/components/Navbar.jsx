import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom'; // If using React Router
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    // Add event listener
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call handler right away so state updates with initial scroll position
    handleScroll();
    
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <ScrollLink 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="navbar-logo"
          onClick={closeMobileMenu}
          offset={-80} // Adjust for navbar height
        >
          <span className="logo-text">AGRIBASKET</span>
          <span className="logo-subtext">LIMITED</span>
        </ScrollLink>

        <div 
          className={`navbar-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {['about', 'mission', 'exports', 'services', 'contact'].map((item) => (
            <li className="navbar-item" key={item}>
              <ScrollLink
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80} // Crucial: accounts for navbar height
                className="navbar-link"
                onClick={closeMobileMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace('mission', 'Mission & Vision')}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;