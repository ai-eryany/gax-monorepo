import { MobileNavbarList } from './mobile.navbar.list';
import { DesktopNavbarList } from './desktop.navbar.list';
import { LogoImg } from './logo.img';
import { clx, cntl } from '@gax/utils';
import { Container } from '@gax/ui';
import { elementFadeInStyle } from '@styles';

const style = cntl`
    m-auto
    flex 
    h-[80px]
    w-full
    max-w-7xl
    items-center
    justify-between
    text-gray-300
`;

function NavbarArea() {
    return (
        <Container className={clx(style, elementFadeInStyle.fade)}>
            {/* Logo */}
            <LogoImg />

            {/* menu */}
            <DesktopNavbarList />

            {/* MobileNav */}
            <MobileNavbarList />
        </Container>
    );
}

export { NavbarArea };
