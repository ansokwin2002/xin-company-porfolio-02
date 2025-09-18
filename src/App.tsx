import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './contexts/ThemeContext';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

// Admin Components
import Login from './components/admin/Login';
import Register from './components/admin/Register';
import Dashboard from './components/admin/Dashboard';

interface MainLayoutProps {
  showAnimations: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ showAnimations }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
    <CustomCursor />
    <Navigation />
    <Hero showAnimations={showAnimations} />
    <About showAnimations={showAnimations} />
    <Portfolio showAnimations={showAnimations} />
    <Services showAnimations={showAnimations} />
    <FAQ showAnimations={showAnimations} />
    <Testimonials showAnimations={showAnimations} />
    <Contact showAnimations={showAnimations} />
    <ChatBot />
    <ScrollToTop />
    
    {/* Modern Footer */}
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-gray-800 text-white py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Logo and Name */}
          <div className="space-y-4">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              An Sokwins
            </h3>
            <p className="text-xl text-gray-300 font-medium">Freelance Web Developer</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['React', 'Next.js', 'TypeScript', 'Laravel', 'Node.js', 'AI Integration', 'Tailwind CSS'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { name: 'GitHub', icon: '🔗', href: '#' },
              { name: 'LinkedIn', icon: '💼', href: '#' },
              { name: 'Twitter', icon: '🐦', href: '#' },
              { name: 'Email', icon: '📧', href: 'mailto:contact@ansokwins.dev' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-xl hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                aria-label={social.name}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm leading-relaxed">
              © {new Date().getFullYear()} An Sokwins — Crafting Digital Experiences with Modern Technologies
              <br />
              <span className="text-xs opacity-75">
                Frontend: React, Next.js, TypeScript & Tailwind CSS • Backend: Laravel & Node.js • AI Integration
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

function App() {
  const [showAnimations, setShowAnimations] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowAnimations(true);
    }, 800); // Reduced to 800ms for faster loading

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen
  if (isLoading) {
    return (
      <ThemeProvider>
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="relative">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout showAnimations={showAnimations} />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/register" element={<Register />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;