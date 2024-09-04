// Layout
import Layout from './layout';

// Types
import { Props } from '@gax/types';

export default function Main(props: Props<'main'>) {
  return <Layout {...props}>{props.children}</Layout>;
}
