// Components
import Layout from './layout';

// Hooks
import usePageTitle from '@theme/hooks/use-page-title';

// Store
import useStore from '@store';
import { clx } from '@panda/core';

export default function Page() {
  const pageTitle = useStore((store) => store.language)?.titles?.pageTitles
    ?.index;
  usePageTitle({ pageTitle });

  return (
    <Layout>
      <h1 className={clx('dark:text-white')}>{pageTitle}</h1>
    </Layout>
  );
}
