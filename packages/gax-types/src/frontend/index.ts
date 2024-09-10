// Packages
import { ComponentProps, JSX, JSXElementConstructor } from 'react';
import { Maybe } from '../shared';

//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////

// * ///////////////////////// Blocks /////////////////////////////////

// * ///////////////////////// Logic starts here /////////////////////////////////

type Props<
    Type extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
    Type2 = object,
> = ComponentProps<Type> & Type2;

// * ///////////////////////// Logic ends here /////////////////////////////////

//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////

// * ///////////////////////// Config starts here /////////////////////////////////

type Themes = {
    LIGHT?: Maybe<'light'>;
    DARK?: Maybe<'dark'>;
};

type Config = {
    api?: Maybe<string>;
    appName?: Maybe<string>;
    appTag?: Maybe<string>;
    defaultLang?: Maybe<string>;
};

type Lang = 'ar' | 'en';

type Dir = 'ltr' | 'rtl';

type Theme = 'light' | 'dark';

type RequestMethod = 'get' | 'post' | 'delete' | 'put';

type RequestParams = {
    url?: Maybe<string>;
    params?: Maybe<string>;
    method?: Maybe<RequestMethod>;
    data?: Maybe<any>;
};

type Navigation = {
    name?: Maybe<string>;
    url?: Maybe<string>;
};

type Navigations = {
    index?: Navigation;
    contact?: Navigation;
    notFound?: Navigation;
    constructions?: Navigation;
    test?: Navigation;
};

// * ///////////////////////// Config ends here /////////////////////////////////

// * ///////////////////////// Domain starts here /////////////////////////////////

type Route = {
    URL?: Maybe<string>;
    NAME?: Maybe<string>;
};

type Routes = {
    HOME?: Maybe<Route>;
    HOME_ALT?: Maybe<Route>;
    HOME_ALT2?: Maybe<Route>;
    CONTACT?: Maybe<Route>;
    ABOUT?: Maybe<Route>;
    BLOGS?: Maybe<Route>;
    PROJECTS?: Maybe<Route>;
    '*'?: Maybe<Route>;
};

//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
//* /////////////////////////////////////////////////////////////////////
export {
    Props,
    Themes,
    Config,
    Lang,
    Dir,
    Theme,
    RequestMethod,
    RequestParams,
    Navigation,
    Navigations,
    Route,
    Routes,
};
