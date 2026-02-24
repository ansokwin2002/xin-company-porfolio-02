import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'; // Removed BrowserRouter import
import { Toaster } from 'sonner';
import LoadingBar from 'react-top-loading-bar';
import LoadingScreen from './components/specific/LoadingScreen';
import { ThemeProvider } from './contexts/ThemeContext';
import AppRoutes from './AppRoutes'; // Import AppRoutes
import CursorEffect from './components/specific/CursorEffect';
import { useTranslation } from 'react-i18next';

interface MainLayoutProps {
  showAnimations: boolean;
  scrollToSection: (sectionId: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ showAnimations, scrollToSection }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
    {/* CustomCursor, Navigation, Hero, etc. are now passed via props or handled within AppRoutes/MainLayout */}
    {/* These components were part of MainLayout definition */}
  </div>
);

function App() {
  const { i18n } = useTranslation();
  const [showAnimations, setShowAnimations] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const loadingBarRef = useRef<any>(null); // Ref for LoadingBar
  const location = useLocation(); // Moved useLocation here

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Update html lang attribute
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowAnimations(true);
    }, 800); // Reduced to 800ms for faster loading

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Effect for LoadingBar on initial mount/refresh
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart();
    }

    const timer = setTimeout(() => {
      if (loadingBarRef.current) {
        loadingBarRef.current.complete();
      }
    }, 800); // Simulate initial page load time

    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array means it runs once on mount

  // Effect for LoadingBar on route change
  useEffect(() => {
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart(); // Start the loading bar
    }

    const timer = setTimeout(() => {
      if (loadingBarRef.current) {
        loadingBarRef.current.complete(); // Complete the loading bar
      }
    }, 500); // Simulate load time

    return () => {
      clearTimeout(timer);
    };
  }, [location]); // Trigger when location changes

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
      <Toaster richColors position="top-center" />
      <div className="relative">
        {/* BrowserRouter is now in main.tsx or higher */}
          <LoadingBar color="#1E88E5" height={3} ref={loadingBarRef} />
          <CursorEffect />
          <AppRoutes showAnimations={showAnimations} scrollToSection={scrollToSection} />
      </div>
    </ThemeProvider>
  );
}

export default App;

