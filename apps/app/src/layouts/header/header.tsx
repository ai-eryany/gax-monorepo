// Layout
import { HeaderLayout } from './layout';

// Types
import { Props } from '@gax/types';

function Header(props: Props<'header'>) {
  return <HeaderLayout {...props}></HeaderLayout>;
}

export { Header };
