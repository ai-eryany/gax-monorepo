// Packages
import { Link, LinkProps } from 'react-router-dom';

// Utils
import { clx } from '@gax/utils';

// Types
import { Maybe, Props } from '@gax/types';

type P = {
    isActive?: Maybe<boolean>;
};

function PrimaryLink(props: Props<'a', LinkProps & P>) {
    return (
        <Link {...props} className={clx(props.className)}>
            {props.children}
        </Link>
    );
}

export { PrimaryLink };
