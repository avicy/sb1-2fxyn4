import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Philosophy from './components/Philosophy';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Philosophy />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;