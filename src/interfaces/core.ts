import { Maybe } from '@panda/core';
import { Lang } from './utils';

export type User = Maybe<{
  id: Maybe<string>;
  username: Maybe<string>;
  email: Maybe<string>;
  password: Maybe<string>;
  createdAt: Maybe<number>;
  updatedAt: Maybe<number>;
}>;

export type Post = Maybe<{
  id: Maybe<number>;
  userId: Maybe<number>;
  title: Maybe<string>;
  body: Maybe<string>;
}>;

export type Posts = Maybe<Post[]>;

/////////////////////////// Locale starts here /////////////////////////////////

export type Long = Maybe<{
  someLongStatment: Maybe<string>;
}>;

export type Short = Maybe<{
  someShortStatement: Maybe<string>;
}>;

export type Statements = Maybe<{
  long: Long;
  short: Short;
}>;
///////////////////////
export type Positive = Maybe<{
  changeToArabic: Maybe<string>;
  changeToEnglish: Maybe<string>;
  login: Maybe<string>;
}>;

export type Negative = Maybe<{
  negativeAction: Maybe<string>;
}>;

export type Actions = Maybe<{
  positive: Positive;
  negative: Negative;
}>;
///////////////////////
export type PageTitles = Maybe<{
  index: Maybe<string>;
  about: Maybe<string>;
  contact: Maybe<string>;
  signup: Maybe<string>;
  login: Maybe<string>;
  notFound: Maybe<string>;
  constructions: Maybe<string>;
  test: Maybe<string>;
}>;

export type Titles = Maybe<{
  pageTitles: PageTitles;
}>;
///////////////////////
export type Success = Maybe<{
  successMessage: Maybe<string>;
}>;
///////////////////////
export type Info = Maybe<{
  infoMessage: Maybe<string>;
}>;
///////////////////////
export type Error = Maybe<{
  errorMessage: Maybe<string>;
}>;

export type Messages = Maybe<{
  success: Success;
  info: Info;
  error: Error;
}>;

export type Language = Maybe<{
  lang: Lang;
  statements: Statements;
  actions: Actions;
  titles: Titles;
  messages: Messages;
}>;

export type Locale = Maybe<{
  ar: Language;
  en: Language;
}>;

/////////////////////////// Locale ends here /////////////////////////////////
