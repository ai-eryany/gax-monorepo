// SASS
import '@assets/styles/index.scss';

// Packages
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Config && Constants
import { config } from '@config';
import { ROUTES } from '@constants';

// Structure
import Structure from './structure';

// pages
import Index from '@app/page';
import IndexError from '@app/error';
import Loader from '@app/loader';

import About from '@app/about/page';
import AboutError from '@app/about/error';

import Contact from '@app/contact/page';
import ContactError from '@app/contact/error';

import NotFound from '@app/404/page';
import NotFoundError from '@app/404/error';

import Constructions from '@app/constructions/page';
import ConstructionsError from '@app/constructions/error';

import Test from '@app/test/page';
import TestError from '@app/test/error';

// routes ////////////////////////////////////////////////////////////////////
const index: RouteObject = {
  index: true,
  errorElement: <IndexError />,
  element: (
    <Suspense fallback={<Loader />}>
      <Index />
    </Suspense>
  ),
};

const about: RouteObject = {
  path: ROUTES.ABOUT.URL,
  errorElement: <AboutError />,
  element: <About />,
};

const contact: RouteObject = {
  path: ROUTES.CONTACT.URL,
  errorElement: <ContactError />,
  element: <Contact />,
};

const notFound: RouteObject = {
  path: ROUTES.NOT_FOUND.URL,
  errorElement: <NotFoundError />,
  element: <NotFound />,
};

const constructions: RouteObject = {
  path: ROUTES.CONSTRUCTIONS.URL,
  errorElement: <ConstructionsError />,
  element: <Constructions />,
};

const test: RouteObject = {
  path: ROUTES.TEST.URL,
  errorElement: <TestError />,
  element: <Test />,
};

const structure: RouteObject = {
  path: ROUTES.INDEX.URL,
  element: <Structure />,
  children: [index, about, contact, notFound, constructions, test],
};

createRoot(document.getElementById(config.appTag)!).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter([structure])} />
  </StrictMode>
);
