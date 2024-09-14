import { Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';

const style = cntl`
    h-full
    w-full
`;

export function NavbarLayout(props: Props<'nav'>) {
    return <nav {...props} className={clx(style, props.className)} />;
}
