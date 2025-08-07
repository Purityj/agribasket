import React from 'react';
import { FaLeaf, FaGlobeAfrica, FaChartLine, FaHandsHelping } from 'react-icons/fa';
import './About.css';
import avocado from '../assets/cut_avocado.jpeg';
import farmers from '../assets/mango.jpeg';
import packing from '../assets/red_fruit.jpeg';

const About = () => {
  const stats = [
    { value: "200+", label: "Farmers Empowered", icon: <FaHandsHelping /> },
    { value: "15+", label: "Countries Served", icon: <FaGlobeAfrica /> },
    { value: "10K+", label: "Tonnes Exported", icon: <FaChartLine /> }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>About Agribasket</h2>
          <p className="section-subtitle">Connecting Kenyan Agriculture to Global Markets</p>
        </div>

        <div className="about-text">
          <p>
            Agribasket Limited is a premier Kenyan agribusiness specializing in the export of high-value 
            horticultural products and import of quality farm inputs. We bridge the gap between local 
            growers and international markets through sustainable sourcing practices.
          </p>
        </div>

        {/* <div className="about-image-grid">
          <div className="main-image">
            <img src={avocado} alt="Fresh avocado produce" className="img-fluid" />
          </div>
          <div className="secondary-images">
            <img src={farmers} alt="Farmers working" className="img-fluid" />
            <img src={packing} alt="Packing produce" className="img-fluid" />
          </div>
        </div> */}

        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div id="mission" className="mission-vision">
          <div className="mv-card mission">
            <div className="mv-icon">
              <FaLeaf />
            </div>
            <h3>Our Mission</h3>
            <p>
              To deliver farm-fresh, export-quality produce and flowers from Kenya to global markets while 
              promoting sustainable agricultural practices and empowering local communities.
            </p>
          </div>
          
          <div className="mv-card vision">
            <div className="mv-icon">
              <FaGlobeAfrica />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be Africa's most trusted agricultural export partner, recognized for quality, 
              reliability, and positive impact on farming communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;