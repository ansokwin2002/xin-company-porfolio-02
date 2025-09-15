import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import CursorEffect from './components/CursorEffect';

// Admin Components
import Login from './components/admin/Login';
import Register from './components/admin/Register';
import Dashboard from './components/admin/Dashboard';

interface MainLayoutProps {
  showAnimations: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ showAnimations }) => (
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
          <h3 className="text-2xl font-bold mb-4">An Sokwin</h3>
          <p className="text-gray-400 mb-6">Freelance Web Developer</p>
          <p className="text-gray-400 text-sm">
            © 2024 An Sokwin. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  </div>
);

function App() {
  const [showAnimations, setShowAnimations] = useState(true);

  useEffect(() => {
    // Animations will always show on refresh
    setShowAnimations(true);
  }, []);

  return (
    <>
      <CursorEffect />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainLayout showAnimations={showAnimations} />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        {/* Add more admin routes here as needed */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
