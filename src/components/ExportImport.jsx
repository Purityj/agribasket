import React from 'react';
import { FaShippingFast, FaSeedling, FaBoxes, FaAward } from 'react-icons/fa';
import './ExportImport.css';

const ExportImport = () => {
  const exportProducts = [
    { name: 'Avocados', varieties: ['Hass', 'Fuerte'], icon: <FaShippingFast /> },
    { name: 'Dragon Fruits', icon: <FaShippingFast /> },
    { name: 'Onions', icon: <FaShippingFast /> },
    { name: 'Bullet Chillies', icon: <FaShippingFast /> },
    { name: 'Coffee Berries', icon: <FaShippingFast /> },
    { name: 'Fresh Cut Flowers', varieties: ['Roses', 'Ranunculus', 'Hydrangeas', 'Peonies'], icon: <FaShippingFast /> }
  ];

  const importItems = [
    { name: 'Agricultural Inputs', description: 'Fertilizers, agrochemicals, and growth enhancers', icon: <FaSeedling /> },
    { name: 'Farm Tools', description: 'Modern farming equipment and hand tools', icon: <FaBoxes /> },
    { name: 'Greenhouse Materials', description: 'High-quality greenhouse construction materials', icon: <FaAward /> }
  ];

  return (
    <section id="exports" className="export-import-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Core Business</h2>
          <p className="section-subtitle">Connecting Kenyan Agriculture to Global Markets</p>
        </div>

        <div className="business-container">
          <div className="exports-section">
            <div className="section-title">
              <h3>Our Exports</h3>
              <p>Premium Kenyan agricultural products delivered worldwide</p>
            </div>
            
            <div className="products-grid">
              {exportProducts.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-icon">{product.icon}</div>
                  <div className="product-details">
                    <h4>{product.name}</h4>
                    {product.varieties && (
                      <ul className="product-varieties">
                        {product.varieties.map((variety, i) => (
                          <li key={i}>{variety}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="imports-section">
            <div className="section-title">
              <h3>Our Imports</h3>
              <p>Quality farm inputs to enhance local production</p>
            </div>
            
            <div className="imports-grid">
              {importItems.map((item, index) => (
                <div key={index} className="import-card">
                  <div className="import-icon">{item.icon}</div>
                  <div className="import-content">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportImport;