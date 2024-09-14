import { clx, cntl } from '@gax/utils';
import { Container } from '@gax/ui';
import { DesktopNavbarArea } from './Desktop.navbar.area';
import { MobileNavbarArea } from './Mobile.navbar.area';
import { elementFadeInAnimation } from '@styles';

const style = cntl`
    m-auto
    flex 
    h-full
    w-full
    max-w-7xl
    items-center
    justify-between
    text-gray-300
`;

const desktopStyle = cntl`
    hidden
`;

const mobileStyle = cntl`
   md:hidden 
`;

export function NavbarArea() {
    return (
        <Container className={clx(style, elementFadeInAnimation.fade)}>
            <DesktopNavbarArea className={clx(desktopStyle)} />
            <MobileNavbarArea className={clx(mobileStyle)} />
        </Container>
    );
}
