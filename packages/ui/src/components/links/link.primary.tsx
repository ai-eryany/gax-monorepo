// Packages
import { Link, LinkProps } from 'react-router-dom';

// Types
import { Props } from '@gax/types';

function LinkPrimary(props: Props<'a', LinkProps>) {
  return <Link {...props}>Hello</Link>;
}

export { LinkPrimary };
