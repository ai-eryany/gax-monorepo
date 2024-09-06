// Packages
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

// Layouts
import { Header, Main, Footer, Nav } from '@layouts';

// UI
import { HeaderImg } from '@components';

// Hooks
import { usePathNormalizer, useScroll } from '@gax/hooks';

function App() {
  usePathNormalizer();
  useScroll();
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <html dir="ltr" lang="en" className="" />
        <title>GAX</title>
        <body className="bg-gray-100" />
      </Helmet>
      <Header>
        <HeaderImg src="/lambda-half-life.png" />
        <Nav />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </HelmetProvider>
  );
}

export { App };
