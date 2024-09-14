import { Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';

const style = cntl`
    py-6
    text-4xl
    font-bold
`;

export function MobileNavbarLink(props: Props<'li'>) {
    return <li {...props} className={clx(style, props.className)} />;
}
