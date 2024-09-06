import './index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

// Pages
import {
  HomePage,
  HomeError,
  AboutPage,
  AboutError,
  ContactPage,
  ContactError,
  BlogsPage,
  BlogsError,
  ProjectsPage,
  ProjectsError,
  NotFoundPage,
  NotFoundError,
  TestPage,
} from '@pages';

// Structure
import { App } from '@app';

// Constants
import { ROUTES } from '@gax/constants';

// Config
import { config } from '@configs';

const home: RouteObject = {
  index: true,
  element: <HomePage />,
  errorElement: <HomeError />,
};

const about: RouteObject = {
  path: ROUTES.ABOUT.URL,
  element: <AboutPage />,
  errorElement: <AboutError />,
};

const contact: RouteObject = {
  path: ROUTES.CONTACT.URL,
  element: <ContactPage />,
  errorElement: <ContactError />,
};

const blogs: RouteObject = {
  path: ROUTES.BLOGS.URL,
  element: <BlogsPage />,
  errorElement: <BlogsError />,
};

const projects: RouteObject = {
  path: ROUTES.PROJECTS.URL,
  element: <ProjectsPage />,
  errorElement: <ProjectsError />,
};

const notFound: RouteObject = {
  path: ROUTES['*'].URL,
  element: <NotFoundPage />,
  errorElement: <NotFoundError />,
};

const test: RouteObject = {
  path: '/test',
  element: <TestPage />,
};

const app: RouteObject = {
  path: ROUTES.HOME.URL,
  element: <App />,
  children: [home, about, contact, blogs, projects, notFound, test],
};

console.log(ROUTES.BLOGS.NAME);

createRoot(document.getElementById(config?.appTag || '')!).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter([app])} />
  </StrictMode>
);
