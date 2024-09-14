import { clx, cntl } from '@gax/utils';
import { DesktopNavbarList } from './Desktop.navbar.list';
import { LogoImg } from './Logo.img';
import { Props } from '@gax/types';

const style = cntl`
    h-full
    w-full
    items-center
    justify-center
    md:flex
`;

export function DesktopNavbarArea(props: Props<'div'>) {
    return (
        <div {...props} className={clx(style, props.className)}>
            {/* Logo */}
            <LogoImg />

            {/* menu */}
            <DesktopNavbarList />
        </div>
    );
}
