// Packages
import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { SWRConfig } from 'swr';

// Functions
import { clx } from '@panda/core';

// Aniamtions
import { Background, Stars } from '@panda/core';

// Hooks
import useThemePreference from '@theme/hooks/use-theme-preference';

// Structure
import NavBar from '@structures/navbar/navbar';
import Footer from '@structures/footer/footer';

// API
import fetcher from '@api';

// Store
import useStore from '@store';

export default function Structure() {
  // Store
  const dir = useStore((store) => store.dir);
  const setDir = useStore((store) => store.setDir);
  const lang = useStore((store) => store.lang);
  const setLanguage = useStore((store) => store.setLanguage);
  const title = useStore((store) => store.title);
  const pageTitle = useStore((store) => store.pageTitle);
  const theme = useStore((store) => store.theme);
  const setTheme = useStore((store) => store.setTheme);

  // Hooks
  useThemePreference({ setTheme });

  // Effect stuff
  // * These effects depends on data that will change the whole application
  // * It's ok to re-render the whole application if this data change

  useEffect(() => {
    setLanguage(lang);
    setDir(lang);
  }, [lang, setLanguage, setDir]);

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <html dir={dir} lang={lang} className={clx(theme)} />
        <title>
          {title} | {pageTitle}
        </title>
        <body />
      </Helmet>
      <SWRConfig value={{ fetcher, suspense: true }}>
        {/* Header */}
        <header className={clx('fixed z-10 w-full')}>{/* <NavBar /> */}</header>
        {/* Header ends */}

        {/* Main */}
        <main>
          <Background>
            <Stars />
          </Background>
          <Outlet />
        </main>
        {/* Main ends */}

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
        {/* Footer Ends */}
      </SWRConfig>
    </HelmetProvider>
  );
}
