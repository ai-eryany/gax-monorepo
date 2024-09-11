import { Props } from '@gax/types';
import { DesktopNavbarLink } from './desktop.navbar.link';
import { clx, cntl } from '@gax/utils';

const style = cntl`
    ml-auto
    hidden
    gap-4
    md:flex
`;

function DesktopNavbarList(props: Props<'ul'>) {
    return (
        <ul className={clx(style, props.className)}>
            <DesktopNavbarLink>Home</DesktopNavbarLink>
            <DesktopNavbarLink>About</DesktopNavbarLink>
            <DesktopNavbarLink>Skills</DesktopNavbarLink>
            <DesktopNavbarLink>Work</DesktopNavbarLink>
            <DesktopNavbarLink>Contact</DesktopNavbarLink>
        </ul>
    );
}

export { DesktopNavbarList };
