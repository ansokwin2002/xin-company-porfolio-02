import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

function App() {
  const [showAnimations, setShowAnimations] = useState(true);

  useEffect(() => {
    // Animations will always show on refresh
    setShowAnimations(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero showAnimations={showAnimations} />
      <About showAnimations={showAnimations} />
      <Portfolio showAnimations={showAnimations} />
      <Services showAnimations={showAnimations} />
      <FAQ showAnimations={showAnimations} />
      <Testimonials showAnimations={showAnimations} />
      <Contact showAnimations={showAnimations} />
      <ChatBot />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Alex Johnson</h3>
            <p className="text-gray-400 mb-6">Freelance Web Developer</p>
            <p className="text-gray-400 text-sm">
              © 2024 Alex Johnson. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;