// Packages
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import * as R from 'ramda';

// Constants
import { ROUTES } from '@constants';

// Functions
import { clx } from '@panda/core';

// Components
import Layout from './layout';

// Store
import useStore from '@store';

// Types
import { Navigations } from '@interfaces/utils';

export default function NavBar() {
  const pageTitles = useStore((store) => store.language)?.titles?.pageTitles;

  const coupledRoutes: Navigations = {
    index: {
      ...ROUTES.INDEX,
      url: ROUTES.INDEX.URL,
      name: pageTitles?.index,
    },
    about: {
      ...ROUTES.ABOUT,
      url: ROUTES.ABOUT.URL,
      name: pageTitles?.about,
    },
    contact: {
      ...ROUTES.CONTACT,
      url: ROUTES.CONTACT.URL,
      name: pageTitles?.contact,
    },
    notFound: {
      ...ROUTES.NOT_FOUND,
      url: ROUTES.NOT_FOUND.URL,
      name: pageTitles?.notFound,
    },
    constructions: {
      ...ROUTES.CONSTRUCTIONS,
      url: ROUTES.CONSTRUCTIONS.URL,
      name: pageTitles?.constructions,
    },
    test: {
      ...ROUTES.TEST,
      url: ROUTES.TEST.URL,
      name: pageTitles?.test,
    },
  };

  return (
    <Layout>
      <nav className={clx('w-full')}>
        <ul className={clx('flex justify-between items-center')}>
          {R.values(coupledRoutes).map((route) => (
            <li
              key={nanoid()}
              className={clx(
                'flex',
                'bg-tertiary rounded shadow',
                'transition-all duration-300',
                'hover:bg-slate-700 hover:text-white'
              )}
            >
              <Link
                to={route?.url ? route.url : ''}
                className={clx('px-4 py-2', 'text-text')}
              >
                {route?.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Layout>
  );
}
