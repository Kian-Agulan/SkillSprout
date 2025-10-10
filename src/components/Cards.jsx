import React from 'react';

const Cards = () => {
  return (
    <section className="cards-section">
      <div className="container">
        <h2>Popular Hobbies</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-details">
              <h3 className="text-title">Painting Basics</h3>
              <p className="text-body">Learn fundamental techniques with a professional artist tutor.</p>
              <button className="card-button">Enroll Now</button>
            </div>
          </div>
          <div className="card">
            <div className="card-details">
              <h3 className="text-title">Guitar Lessons</h3>
              <p className="text-body">Master chords and songs from experienced guitar instructors.</p>
              <button className="card-button">Enroll Now</button>
            </div>
          </div>
          <div className="card">
            <div className="card-details">
              <h3 className="text-title">Cooking Essentials</h3>
              <p className="text-body">Discover delicious recipes guided by culinary hobby experts.</p>
              <button className="card-button">Enroll Now</button>
            </div>
          </div>
          <div className="card">
            <div className="card-details">
              <h3 className="text-title">Photography</h3>
              <p className="text-body">Capture stunning shots with tips from passionate photographers.</p>
              <button className="card-button">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
