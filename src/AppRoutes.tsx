// src/AppRoutes.tsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import ScrollToTopOnRouteChange from './components/specific/ScrollToTopOnRouteChange';
import CreativeDesignsUIUX from './pages/CreativeDesignsUIUX';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import WebAppDevelopment from './pages/WebAppDevelopment'; // Import the new component
import DigitalMarketing from './pages/DigitalMarketing'; // Import the new component
import ITConsultancyDevOpsService from './pages/ITConsultancy&DevOpsService'; // Import the new component
import Login from './pages/admin/Login';
import Register from './pages/admin/Register';
import Dashboard from './pages/admin/Dashboard';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import ServicesShowcase from './components/sections/ServicesShowcase';
import OurClients from './components/sections/OurClients';
import StartYourNextBigProject from './components/sections/StartYourNextBigProject';
import TelegramLink from './components/specific/TelegramLink';
import Footer from './components/layout/Footer';
import CustomCursor from './components/specific/CustomCursor';
import ScrollToTop from './components/specific/ScrollToTop';

interface AppRoutesProps {

  showAnimations: boolean; // Passed from App

  scrollToSection: (sectionId: string) => void; // Passed from App

}

// MainLayout definition (copied from App.tsx)

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

    <ScrollToTop />

    <Footer />

  </div>

);

const AppRoutes: React.FC<AppRoutesProps> = ({ showAnimations, scrollToSection }) => {
  const location = useLocation();

  return (
    <>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<MainLayout showAnimations={showAnimations} scrollToSection={scrollToSection} />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/creative-designs-ui-ux" element={<CreativeDesignsUIUX />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/web-app-development" element={<WebAppDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/it-consultancy-devops" element={<ITConsultancyDevOpsService />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
