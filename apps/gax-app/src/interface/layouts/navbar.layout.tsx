import { Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';

const style = cntl`
    h-full
    w-full
`;

function NavbarLayout(props: Props<'nav'>) {
    return <nav {...props} className={clx(style, props.className)} />;
}

export { NavbarLayout };
