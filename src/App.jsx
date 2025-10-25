import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Hobbies from './components/Hobbies';
import About from './components/About';
import BottomBar from './components/BottomBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Cards />
              <BottomBar />
            </>
          } />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
