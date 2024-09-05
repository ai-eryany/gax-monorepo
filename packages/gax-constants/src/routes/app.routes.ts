import { Routes } from '@gax/types';

const ROUTES: Routes = {
  HOME: {
    URL: '/',
    NAME: 'HOME',
  },
  HOME_ALT: {
    URL: '/home',
    NAME: 'HOME ALT',
  },
  HOME_ALT2: {
    URL: '/index',
    NAME: 'HOME ALT2',
  },
  ABOUT: {
    URL: '/about',
    NAME: 'ABOUT',
  },
  CONTACT: {
    URL: '/contact',
    NAME: 'CONTACT',
  },
  BLOGS: {
    URL: '/blogs',
    NAME: 'BLOGS',
  },
  PROJECTS: {
    URL: '/projects',
    NAME: 'PROJECTS',
  },
  '*': {
    URL: '/*',
    NAME: '404',
  },
};

export { ROUTES };
