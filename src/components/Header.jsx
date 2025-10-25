import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="HobbyTutor Logo" className="logo-img" />
        </div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hobbies">Hobbies</Link></li>
            <li><a href="#tutors">Tutors</a></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div className="header-right">
          <a href="#login" className="login-link">Login</a>
          <button className="register-button">Find Tutor</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
