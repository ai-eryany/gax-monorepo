// Types
import { Props } from '@gax/types';

function Main(props: Props<'main'>) {
  return <>{props.children}</>;
}

export { Main };
