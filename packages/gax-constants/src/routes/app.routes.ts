// Types
import { Maybe, Routes } from '@gax/types';

const ROUTES: Maybe<Routes> = {
  HOME: {
    URL: '/',
    NAME: 'Home',
  },
  HOME_ALT: {
    URL: '/home',
    NAME: 'Home Alt',
  },
  HOME_ALT2: {
    URL: '/index',
    NAME: 'Home Alt2',
  },
  ABOUT: {
    URL: '/about',
    NAME: 'About',
  },
  CONTACT: {
    URL: '/contact',
    NAME: 'Contact',
  },
  BLOGS: {
    URL: '/blogs',
    NAME: 'Blogs',
  },
  PROJECTS: {
    URL: '/projects',
    NAME: 'Projects',
  },
  '*': {
    URL: '/*',
    NAME: '404',
  },
};

export { ROUTES };
