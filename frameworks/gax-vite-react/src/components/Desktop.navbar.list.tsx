import { Props } from '@gax/types';
import { DesktopNavbarLink } from './Desktop.navbar.link';
import { clx, cntl } from '@gax/utils';

const style = cntl`
    ml-auto
    flex
`;

export function DesktopNavbarList(props: Props<'ul'>) {
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
