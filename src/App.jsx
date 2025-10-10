import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import BottomBar from './components/BottomBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Cards />
      <BottomBar />
      <Footer />
    </div>
  );
}

export default App;
