import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Kian Agulan',
      bio: 'Passionate developer with expertise in full-stack development and a love for creating innovative solutions.',
      social: {
        facebook: 'https://facebook.com/kianagulan',
        instagram: 'https://instagram.com/kianagulan',
        linkedin: 'https://ph.linkedin.com/in/kian-agulan-656884369',
        github: 'https://github.com/Kian-Agulan'
      }
    },
    {
      name: 'Rom Navarro',
      bio: 'Creative coder focused on user experience and front-end technologies, always pushing the boundaries of design.',
      social: {
        facebook: 'https://facebook.com/romnavarro',
        instagram: 'https://instagram.com/romnavarro',
        linkedin: 'https://linkedin.com/in/romnavarro',
        github: 'https://github.com/AintEnma'
      }
    },
    {
      name: 'Vince Rufino',
      bio: 'Backend specialist with a knack for building robust and scalable systems, dedicated to clean code practices.',
      social: {
        facebook: 'https://facebook.com/vincerufino',
        instagram: 'https://instagram.com/vincerufino',
        linkedin: 'https://linkedin.com/in/vincerufino',
        github: 'https://github.com/Binsent0-0'
      }
    },
    {
      name: 'Lester Mendoza',
      bio: 'Tech enthusiast and problem solver, specializing in mobile app development and emerging technologies.',
      social: {
        facebook: 'https://facebook.com/lestermendoza',
        instagram: 'https://instagram.com/lestermendoza',
        linkedin: 'https://linkedin.com/in/lestermendoza',
        github: 'https://github.com/lestermendoza'
      }
    },
    {
      name: 'Andrew Victoria',
      bio: 'Data-driven developer with a passion for AI and machine learning, turning ideas into intelligent applications.',
      social: {
        facebook: 'https://facebook.com/andrewvictoria',
        instagram: 'https://instagram.com/andrewvictoria',
        linkedin: 'https://linkedin.com/in/andrewvictoria',
        github: 'https://github.com/andrewvictoria'
      }
    },
    {
      name: 'Nathaniel Santos',
      bio: 'UI/UX designer and developer, crafting intuitive interfaces that enhance user engagement and satisfaction.',
      social: {
        facebook: 'https://facebook.com/nathanielsantos',
        instagram: 'https://instagram.com/nathanielsantos',
        linkedin: 'https://linkedin.com/in/nathanielsantos',
        github: 'https://github.com/nathanielsantos'
      }
    },
    {
      name: 'Keon Chan',
      bio: 'Innovative thinker and software engineer, committed to delivering high-quality code and collaborative teamwork.',
      social: {
        facebook: 'https://facebook.com/keonchan',
        instagram: 'https://instagram.com/keonchan',
        linkedin: 'https://linkedin.com/in/keonchan',
        github: 'https://github.com/keonchan'
      }
    }
  ];

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '80px auto 0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <img src="/Pics/SkillSprout logo.jpg" alt="SkillSprout Logo" style={{ height: '80px', width: 'auto', marginBottom: '1rem' }} />
        <h1 style={{ color: '#333' }}>About Us</h1>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', border: '1px solid #ddd', textAlign: 'center', ...(index === 6 ? { gridColumn: '2' } : {}) }}>
            <img src={`https://i.pravatar.cc/100?u=${member.name.toLowerCase().replace(' ', '')}`} alt={member.name} className="profile-img" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '1rem', border: '3px solid #FFA500' }} />
            <h2 style={{ marginBottom: '1rem', color: '#FFA500' }}>{member.name}</h2>
            <p style={{ marginBottom: '1rem', color: '#666', fontSize: '0.9rem', lineHeight: '1.4' }}>{member.bio}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#4267B2', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
              <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Instagram
              </a>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#0077B5', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href={member.social.github} target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
