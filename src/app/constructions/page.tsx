// Components
import Layout from './layout';
import UnderConstruction from '@theme/components/under-construction';

// Hooks
import usePageTitle from '@theme/hooks/use-page-title';

// Store
import useStore from '@store';

export default function Page() {
  const pageTitle = useStore((store) => store.language)?.titles?.pageTitles
    ?.constructions;

  usePageTitle({ pageTitle });

  return (
    <Layout>
      <UnderConstruction />
    </Layout>
  );
}
