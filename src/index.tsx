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
import { config } from 'config';
import { routes } from './constants';

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
  path: routes.about.url,
  errorElement: <AboutError />,
  element: <About />,
};

const contact: RouteObject = {
  path: routes.contact.url,
  errorElement: <ContactError />,
  element: <Contact />,
};

const notFound: RouteObject = {
  path: routes.notFound.url,
  errorElement: <NotFoundError />,
  element: <NotFound />,
};

const constructions: RouteObject = {
  path: routes.constructions.url,
  errorElement: <ConstructionsError />,
  element: <Constructions />,
};

const test: RouteObject = {
  path: routes.test.url,
  errorElement: <TestError />,
  element: <Test />,
};

const structure: RouteObject = {
  path: routes.index.url,
  element: <Structure />,
  children: [index, about, contact, notFound, constructions, test],
};

createRoot(document.getElementById(config.appTag)!).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter([structure])} />
  </StrictMode>
);
