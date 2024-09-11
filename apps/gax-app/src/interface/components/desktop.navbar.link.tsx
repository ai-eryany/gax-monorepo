import { Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';

const style = cntl`
    flex
    items-center
    justify-center
    font-bold
    duration-300
    hover:text-accent
`;

function DesktopNavbarLink(props: Props<'li'>) {
    return <li {...props} className={clx(style, props.className)} />;
}

export { DesktopNavbarLink };
