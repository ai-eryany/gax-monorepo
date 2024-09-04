// Packages
import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';

// Layouts
import {
  Header,
  HeaderLayout,
  Main,
  MainLayout,
  Footer,
  FooterLayout,
} from '@layouts';

// Constants
import { ROUTES } from '@constants';

function usePathNormalizer() {
  const { pathname } = useLocation();
  const normalizedPaths = [ROUTES.HOME_ALT.URL, ROUTES.HOME_ALT2.URL];
  useEffect(() => {
    if (normalizedPaths.includes(pathname)) window.location.href = '/';
  }, [pathname, ROUTES]);
}

function App() {
  usePathNormalizer();
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <html dir="ltr" lang="en" className="" />
        <title>GAX</title>
        <body className="bg-gray-100" />
      </Helmet>

      <div className="flex h-screen flex-col">
        <HeaderLayout>
          <Header />
        </HeaderLayout>
        <div className="flex h-full">
          <MainLayout>
            <Main>
              <Outlet />
            </Main>
          </MainLayout>
        </div>
        <FooterLayout>
          <Footer />
        </FooterLayout>
      </div>
    </HelmetProvider>
  );
}

export { App };
