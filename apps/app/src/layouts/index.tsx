// Packages
import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';

// Structure
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

// Constants
import { ROUTES } from '@constants';

function usePathNormalizer() {
  const { pathname } = useLocation();
  const normalizedPaths = [ROUTES.HOME_ALT.URL, ROUTES.HOME_ALT2.URL];
  useEffect(() => {
    if (normalizedPaths.includes(pathname)) window.location.href = '/';
  }, [pathname, ROUTES]);
}

function Layout() {
  usePathNormalizer();
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <html dir="ltr" lang="en" className="" />
        <title>GAX</title>
        <body className="bg-gray-100" />
      </Helmet>

      <div className="flex h-screen flex-col">
        <Header />
        <div className="flex h-full">
          <Main>
            <Outlet />
          </Main>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export { Layout };
