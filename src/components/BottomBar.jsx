import React from 'react';

const BottomBar = () => {
  return (
    <section className="bottom-bar">
      <div className="container">
        <div className="services-grid">
          <div className="service-item">
            <span className="service-icon">🎨</span>
            <span>Arts</span>
          </div>
          <div className="service-item">
            <span className="service-icon">🎸</span>
            <span>Music</span>
          </div>
          <div className="service-item">
            <span className="service-icon">⚽</span>
            <span>Sports</span>
          </div>
          <div className="service-item">
            <span className="service-icon">✂️</span>
            <span>Crafts</span>
          </div>
          <div className="service-item">
            <span className="service-icon">🗣️</span>
            <span>Languages</span>
          </div>
          <div className="service-item">
            <span className="service-icon">🧘</span>
            <span>Wellness</span>
          </div>
        </div>
        <div className="trusted-section">
          <span className="trusted-text">Trusted by</span>
          <div className="logos">
            <img src="https://via.placeholder.com/50x30/000/fff?text=B" alt="Behance" className="logo-placeholder" />
            <img src="https://via.placeholder.com/50x30/000/fff?text=D" alt="Dribbble" className="logo-placeholder" />
            <img src="https://via.placeholder.com/50x30/000/fff?text=N" alt="Netflix" className="logo-placeholder" />
            <img src="https://via.placeholder.com/50x30/000/fff?text=H" alt="HubSpot" className="logo-placeholder" />
            <img src="https://via.placeholder.com/50x30/000/fff?text=Up" alt="Upwork" className="logo-placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBar;
