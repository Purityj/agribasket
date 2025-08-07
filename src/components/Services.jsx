import React from 'react';
import { FaShippingFast, FaTruckLoading, FaUserTie, FaAward } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Fresh Produce Export',
      description: 'Exporting premium quality avocados, onions, chillies, coffee, and flowers to international markets with strict quality control.',
      icon: <FaShippingFast />,
      color: '#2e7d32'
    },
    {
      title: 'Farm Inputs Import',
      description: 'Sourcing and supplying affordable greenhouse materials, agrochemicals, and fertilizers from global manufacturers.',
      icon: <FaTruckLoading />,
      color: '#2196F3'
    },
    {
      title: 'Farmer Empowerment',
      description: 'Providing training, market linkages, and capacity-building programs for small-scale producers.',
      icon: <FaUserTie />,
      color: '#FF9800'
    },
    {
      title: 'Quality Assurance',
      description: 'Implementing rigorous quality control measures to meet international phytosanitary standards.',
      icon: <FaAward />,
      color: '#9C27B0'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p className="section-subtitle">Comprehensive Agricultural Solutions</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ '--card-color': service.color }}
            >
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-learn-more">
                <span>Learn more</span>
                <div className="arrow-icon"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;