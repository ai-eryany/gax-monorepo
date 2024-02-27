// Types
import { Themes } from '@interfaces/utils';

export const themes: Themes = {
  light: 'light',
  dark: 'dark',
};

export const routes = {
  index: {
    url: '/',
  },
  about: {
    url: '/about',
  },
  contact: {
    url: '/contact',
  },
  notFound: {
    url: '/*',
  },
  constructions: {
    url: '/constructions',
  },
  test: {
    url: '/test',
  },
};
