// Components
import Layout from './layout';

// Hooks
import usePageTitle from '@theme/hooks/use-page-title';

// Store
import useStore from '@store';

export default function Page() {
  const pageTitle = useStore((store) => store.language)?.titles?.pageTitles
    ?.notFound;

  usePageTitle({ pageTitle });

  return (
    <Layout>
      <h1>{pageTitle}</h1>
    </Layout>
  );
}
