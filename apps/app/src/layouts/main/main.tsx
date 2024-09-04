// Layout
import { MainLayout } from './layout';

// Types
import { Props } from '@gax/types';

function Main(props: Props<'main'>) {
  return (
    <MainLayout {...props}>
      <main>{props.children}</main>
    </MainLayout>
  );
}

export { Main };
