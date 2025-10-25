import React from 'react';

const BottomBar = () => {
  return (
    <section className="bottom-bar">
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
    </section>
  );
};

export default BottomBar;
