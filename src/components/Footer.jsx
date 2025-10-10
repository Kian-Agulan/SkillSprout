import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HobbyTutorHub</h3>
            <p>Learn hobbies with passionate tutors worldwide.</p>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="#hobbies">Hobbies</a></li>
              <li><a href="#tutors">Tutors</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Social</h4>
            <div className="social-icons">
              <span>📘</span>
              <span>🐦</span>
              <span>📷</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 HobbyTutorHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
