import { useEffect, useState } from 'react';
import { HamburgerIcon } from './Hamburger.icon';
import { MobileNavbarList } from './Mobile.navbar.list';
import { clx, cntl } from '@gax/utils';
import { Props } from '@gax/types';
import { useHeaderController } from '@gax/hooks';
import { LogoImg } from './Logo.img';

const style = cntl`
    flex
    h-full
    w-full
    items-center
    justify-between
    p-4
`;

export function MobileNavbarArea(props: Props<'div'>) {
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible] = useHeaderController();
    const handleClick = () => setIsClicked((state) => !state);

    useEffect(() => {
        setIsClicked(() => false);
    }, [isVisible]);

    return (
        <div {...props} className={clx(style, props.className)}>
            <LogoImg />
            <HamburgerIcon onClick={handleClick} isClicked={isClicked} />
            <MobileNavbarList isClicked={isClicked} isVisible={isVisible} />
        </div>
    );
}
