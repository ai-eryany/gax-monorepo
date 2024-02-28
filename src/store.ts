// Packages
import { create } from 'zustand';
import * as R from 'ramda';

// Locale
import locale from '@locale/locale';

// Config
import { config } from '@config';

// Types
import { Language, User } from '@interfaces/core';
import { Theme, Lang, Dir, Title } from '@interfaces/utils';

export type Store = {
  defaultLang: 'en';

  lang: Lang;
  setLang: (lang: Lang) => void;

  language: Language;
  setLanguage: (lang: Lang) => void;

  dir: Dir;
  setDir: (lang: Lang) => void;

  title: Title;
  setTitle: (title: Title) => void;

  pageTitle: Title;
  setPageTitle: (pageTitle: Title) => void;

  theme: Theme;
  setTheme: (theme: Theme) => void;

  user: User;
  setUser: (user: User) => void;
};
///////////////////////////////////////////////////////////
const useStore = create<Store>((set) => ({
  defaultLang: 'en',

  lang: 'en',
  setLang: (lang) => set(() => ({ lang })),

  dir: 'ltr',
  setDir: (lang) => set(() => ({ dir: R.equals('en', lang) ? 'ltr' : 'rtl' })),

  language: locale?.ar,
  setLanguage: (lang) =>
    set(() => ({ language: R.equals('en', lang) ? locale?.en : locale?.ar })),

  title: config.appName,
  setTitle: (title) => set(() => ({ title })),

  pageTitle: 'Starting -_-',
  setPageTitle: (pageTitle) => set(() => ({ pageTitle })),

  theme: undefined,
  setTheme: (theme) => set(() => ({ theme })),

  user: undefined,
  setUser: (user) => set(() => ({ user })),
}));

export default useStore;
