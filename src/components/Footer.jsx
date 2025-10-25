import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', width: '100%' }}>
        <div className="footer-section">
          <h3>SkillSprout</h3>
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
      <div className="footer-bottom" style={{ backgroundColor: 'black', color: 'white', padding: '1rem 0', textAlign: 'center', width: '100%' }}>
        <p>&copy; 2025 SkillSprout. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
