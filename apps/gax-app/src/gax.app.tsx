// Packages
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

// Layouts
import {
  Header,
  HeaderLayout,
  Main,
  MainLayout,
  Footer,
  FooterLayout,
} from '@layouts';

// UI
import { Nav } from '@layouts';

// Hooks
import { usePathNormalizer } from '@gax/hooks';

function App() {
  usePathNormalizer();
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <html dir="ltr" lang="en" className="" />
        <title>GAX</title>
        <body className="bg-gray-100" />
      </Helmet>
      <HeaderLayout>
        <Header>
          <Nav />
        </Header>
      </HeaderLayout>
      <MainLayout>
        <Main>
          <Outlet />
        </Main>
      </MainLayout>
      <FooterLayout>
        <Footer />
      </FooterLayout>
    </HelmetProvider>
  );
}

export { App };
