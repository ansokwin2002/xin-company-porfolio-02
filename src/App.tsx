import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner'; // Import Toaster
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './contexts/ThemeContext';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServicesShowcase from './components/ServicesShowcase';
import OurClients from './components/OurClients';
import StartYourNextBigProject from './components/StartYourNextBigProject';
import TelegramLink from './components/TelegramLink';
import Footer from './components/Footer';
import CreativeDesignsUIUX from './pages/CreativeDesignsUIUX';

// Admin Components
import Login from './components/admin/Login';
import Register from './components/admin/Register';
import Dashboard from './components/admin/Dashboard';

interface MainLayoutProps {
  showAnimations: boolean;
  scrollToSection: (sectionId: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ showAnimations, scrollToSection }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
    <CustomCursor />
    <Navigation />
    <Hero showAnimations={showAnimations} />
    <ServicesShowcase />
    <OurClients/>
    <StartYourNextBigProject/>
    <TelegramLink />
    <ScrollToTop /> {/* Keep the button component */}
    <Footer />
  </div>
);

function App() {
  const [showAnimations, setShowAnimations] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <Toaster richColors position="top-center" /> {/* Add Toaster component from sonner */}
      <div className="relative">
        <BrowserRouter>
          <ScrollToTopOnRouteChange /> {/* New component to handle scroll to top on route change */}
          <Routes>
            <Route path="/" element={<MainLayout showAnimations={showAnimations} scrollToSection={scrollToSection} />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/register" element={<Register />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/creative-designs-ui-ux" element={<CreativeDesignsUIUX />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;