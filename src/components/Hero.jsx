import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const navigate = useNavigate();

  const hobbies = [
    { name: 'Painting Basics', category: 'Arts' },
    { name: 'Guitar Lessons', category: 'Music' },
    { name: 'Cooking Essentials', category: 'Crafts' },
    { name: 'Photography 101', category: 'Arts' },
    { name: 'Yoga for Beginners', category: 'Wellness' },
    { name: 'Knitting Made Easy', category: 'Crafts' },
    { name: 'Piano Lessons', category: 'Music' },
    { name: 'Gardening for All', category: 'Sports' },
    { name: 'Baking Delicious Treats', category: 'Crafts' },
    { name: 'Sculpting with Clay', category: 'Arts' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/hobbies?search=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate('/hobbies');
    }
  };

  const handleInputChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.length > 0) {
      const suggestions = hobbies.filter(hobby =>
        hobby.name.toLowerCase().startsWith(term) ||
        hobby.category.toLowerCase().startsWith(term)
      ).slice(0, 5); // Limit to 5 suggestions
      setFilteredSuggestions(suggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name.toLowerCase());
    setShowSuggestions(false);
  };

  const handleInputFocus = () => {
    if (searchTerm.length > 0) {
      const suggestions = hobbies.filter(hobby =>
        hobby.name.toLowerCase().startsWith(searchTerm) ||
        hobby.category.toLowerCase().startsWith(searchTerm)
      ).slice(0, 5);
      setFilteredSuggestions(suggestions);
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow click on suggestion
    setTimeout(() => setShowSuggestions(false), 150);
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
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <span className="search-icon">🔍</span>
          {showSuggestions && (
            <div className="suggestions-dropdown">
              {filteredSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <strong>{suggestion.name}</strong> - <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(suggestion.category);
                    }}
                    style={{ cursor: 'pointer', color: '#FFA500' }}
                  >
                    {suggestion.category}
                  </span>
                </div>
              ))}
            </div>
          )}
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
