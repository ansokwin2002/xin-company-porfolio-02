import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const htmlElement = document.documentElement;
    const originalScrollBehavior = htmlElement.style.scrollBehavior;

    // Temporarily set scroll-behavior to 'auto' for instant scroll
    htmlElement.style.scrollBehavior = 'auto';

    // Scroll to top after DOM updates settle
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      // Restore original scroll-behavior after a short delay to ensure scroll completes
      // This timeout ensures that the 'smooth' behavior is re-applied AFTER the instant scroll.
      setTimeout(() => {
        htmlElement.style.scrollBehavior = originalScrollBehavior;
      }, 100); 
    }, 0);

    return () => {
      clearTimeout(timer);
      // Ensure behavior is restored if component unmounts quickly
      htmlElement.style.scrollBehavior = originalScrollBehavior;
    };
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRouteChange;