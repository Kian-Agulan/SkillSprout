import React from 'react';

const Hero = () => {
  return (
    <section className="hero-freelance">
      <div className="hero-overlay"></div>
      <div className="hero-content-freelance">
        <h1>Discover Your Hobby with Expert Tutors</h1>
        <div className="search-container">
          <input type="text" placeholder="search for hobbies or tutors" className="search-input" />
          <span className="search-icon">🔍</span>
        </div>
        <div className="categories">
          <button className="category-chip">Painting</button>
          <button className="category-chip">Guitar Lessons</button>
          <button className="category-chip">Cooking</button>
          <button className="category-chip">Photography</button>
          <button className="category-chip">Yoga</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
