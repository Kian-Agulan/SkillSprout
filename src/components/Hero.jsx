import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/hobbies?search=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate('/hobbies');
    }
  };

  const handleCategoryClick = (category) => {
    navigate(`/hobbies?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="hero-freelance">
      <div className="hero-overlay"></div>
      <div className="hero-content-freelance">
        <h1>Discover Your Hobby with Expert Tutors</h1>
        <form onSubmit={handleSearch} className="search-container">
          <input
            type="text"
            placeholder="search for hobbies or tutors"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </form>
        <div className="categories">
          <button className="category-chip" onClick={() => handleCategoryClick('Arts')}>Painting</button>
          <button className="category-chip" onClick={() => handleCategoryClick('Music')}>Guitar Lessons</button>
          <button className="category-chip" onClick={() => handleCategoryClick('Crafts')}>Cooking</button>
          <button className="category-chip" onClick={() => handleCategoryClick('Arts')}>Photography</button>
          <button className="category-chip" onClick={() => handleCategoryClick('Wellness')}>Yoga</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
