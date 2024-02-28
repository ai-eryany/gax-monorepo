import { Maybe } from '@panda/core';

export type Themes = {
  LIGHT: Maybe<'LIGHT'>;
  DARK: Maybe<'DARK'>;
};

export type Lang = Maybe<'ar' | 'en'>;

export type Dir = Maybe<'ltr' | 'rtl'>;

export type Theme = Maybe<'LIGHT' | 'DARK'>;

export type Title = Maybe<string>;

export type RequestMethod = Maybe<'get' | 'post' | 'delete' | 'put'>;

export type RequestParams = {
  url: Maybe<string>;
  isRequesting: Maybe<boolean>;
  params?: Maybe<string>;
  method?: RequestMethod;
  data?: Maybe<object>;
};

export type Navigation = Maybe<{
  name: Maybe<string>;
  url: Maybe<string>;
}>;

export type Navigations = Maybe<{
  index: Navigation;
  about: Navigation;
  contact: Navigation;
  notFound: Navigation;
  constructions: Navigation;
  test: Navigation;
}>;

export type Some = Maybe<any>;
