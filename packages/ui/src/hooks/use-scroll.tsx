// Packages
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 100);
  }, [pathname]);

  return null;
}

export default useScroll;
