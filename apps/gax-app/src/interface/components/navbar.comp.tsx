import { SocialIconsComp } from './social-icons.comp';
import { MobileNavComp } from './mobile-nav.comp';
import { DesktopNavComp } from './desktop-nav.comp';
import { LogoComp } from './logo.comp';
import { clx, cntl } from '@gax/utils';

const style = cntl`
    flex
    h-full
    w-full
    items-center
    justify-between
    bg-[#0a192f]
    px-4
    text-gray-300
`;

function NavbarComp() {
    return (
        <div className={clx(style)}>
            {/* Logo */}
            <LogoComp />

            {/* menu */}
            <DesktopNavComp />

            {/* MobileNav */}
            <MobileNavComp />

            {/* Social icons */}
            <SocialIconsComp />
        </div>
    );
}

export { NavbarComp };
