// Layout
import { FooterLayout } from './layout';

// Types
import { Props } from '@gax/types';

function Footer(props: Props<'footer'>) {
  return <FooterLayout {...props}></FooterLayout>;
}

export { Footer };
