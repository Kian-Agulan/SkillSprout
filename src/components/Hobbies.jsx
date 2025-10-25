import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Hobbies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const location = useLocation();

  const hobbies = [
    {
      name: 'Painting Basics',
      description: 'I will teach you painting basics and fundamental techniques.',
      category: 'Arts',
      image: 'https://source.unsplash.com/featured/?painting,300x200',
      tutor: { name: 'Jane Doe', avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026704d' },
      rating: 4.8,
      price: 50,
    },
    {
      name: 'Guitar Lessons',
      description: 'I will help you master chords and songs on the guitar.',
      category: 'Music',
      image: 'https://source.unsplash.com/featured/?guitar,300x200',
      tutor: { name: 'John Smith', avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026704e' },
      rating: 4.9,
      price: 60,
    },
    {
      name: 'Cooking Essentials',
      description: 'I will guide you through delicious and simple recipes.',
      category: 'Crafts',
      image: 'https://source.unsplash.com/featured/?cooking,300x200',
      tutor: { name: 'Emily White', avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026704f' },
      rating: 4.7,
      price: 45,
    },
    {
      name: 'Photography 101',
      description: 'I will show you how to capture stunning shots with any camera.',
      category: 'Arts',
      image: 'https://source.unsplash.com/featured/?photography,300x200',
      tutor: { name: 'Chris Green', avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026704a' },
      rating: 5.0,
      price: 75,
    },
    {
      name: 'Yoga for Beginners',
      description: 'I will help you improve flexibility and mindfulness with yoga.',
      category: 'Wellness',
      image: 'https://source.unsplash.com/featured/?yoga,300x200',
      tutor: { name: 'Sarah Brown', avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026704b' },
      rating: 4.9,
      price: 30,
    },
    {
      name: 'Knitting Made Easy',
      description: 'I will teach you to create beautiful garments with step-by-step guidance.',
      category: 'Crafts',
      image: 'https://source.unsplash.com/featured/?knitting,300x200',
      tutor: { name: 'Laura Blue', avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026704c' },
      rating: 4.8,
      price: 40,
    },
    {
      name: 'Piano Lessons',
      description: 'I will teach you to play melodies and compositions.',
      category: 'Music',
      image: 'https://source.unsplash.com/featured/?piano,300x200',
      tutor: { name: 'Mike Wilson', avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026705d' },
      rating: 4.9,
      price: 65,
    },
    {
      name: 'Gardening for All',
      description: 'I will give you expert advice to grow your own plants and vegetables.',
      category: 'Sports',
      image: 'https://source.unsplash.com/featured/?gardening,300x200',
      tutor: { name: 'Anna Black', avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026705e' },
      rating: 4.7,
      price: 35,
    },
    {
      name: 'Baking Delicious Treats',
      description: 'I will share master baker recipes for delicious treats.',
      category: 'Crafts',
      image: 'https://source.unsplash.com/featured/?baking,300x200',
      tutor: { name: 'Tom Baker', avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026705f' },
      rating: 5.0,
      price: 55,
    },
    {
      name: 'Sculpting with Clay',
      description: 'I will guide you in shaping clay into beautiful art.',
      category: 'Arts',
      image: 'https://source.unsplash.com/featured/?sculpting,300x200',
      tutor: { name: 'David Stone', avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026705a' },
      rating: 4.8,
      price: 80,
    },
  ];

  const categories = ['Arts', 'Music', 'Sports', 'Crafts', 'Language', 'Wellness'];
  const backgrounds = ['#FF9843', '#FFDD95', '#86A7FC', '#3468C0' ];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');
    const categoryQuery = searchParams.get('category');

    if (searchQuery) {
      setSearchTerm(searchQuery.toLowerCase());
    }
    if (categoryQuery) {
      setSelectedCategory(categoryQuery);
    }
  }, [location.search]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.length > 0) {
      const suggestions = hobbies.filter(hobby =>
        hobby.name.toLowerCase().startsWith(term) ||
        hobby.description.toLowerCase().startsWith(term) ||
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
        hobby.description.toLowerCase().startsWith(searchTerm) ||
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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const filteredHobbies = hobbies.filter(hobby => {
    const matchesSearch = hobby.name.toLowerCase().includes(searchTerm) ||
                          hobby.description.toLowerCase().includes(searchTerm) ||
                          hobby.category.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === '' || hobby.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="hobbies-section">
      <div className="hero-search">
        <div className="container">
          <h1>Find the perfect hobby to learn</h1>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="What do you want to learn?"
            className="search-input"
            value={searchTerm}
            onChange={handleSearch}
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
                      handleCategorySelect(suggestion.category);
                    }}
                    style={{ cursor: 'pointer', color: '#FFA500' }}
                  >
                    {suggestion.category}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="categories-container">
        <div className="container">
          <div className="categories">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="hobbies-grid">
          {filteredHobbies.map((hobby, index) => (
            <div key={index} className="card" style={{ backgroundColor: backgrounds[index % backgrounds.length] }}>
              <img src={hobby.image} alt={hobby.name} className="card-image" />
              <div className="card-tutor-info">
                <img src={hobby.tutor.avatar} alt={hobby.tutor.name} className="tutor-avatar" />
                <span className="tutor-name">{hobby.tutor.name}</span>
              </div>
              <div className="card-body">
                <h3 className="card-title">{hobby.name}</h3>
                <p className="card-description">{hobby.description}</p>
                <span className="card-category">{hobby.category}</span>
                <div className="card-rating">
                  <span className="star-icon">⭐</span>
                  <span className="rating-value">{hobby.rating}</span>
                </div>
              </div>
              <div className="card-footer">
                <span className="card-price">From ${hobby.price}</span>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
