import { MobileNavbarLink } from './Mobile.navbar.link';
import { Maybe, Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';

type P = {
    isClicked?: Maybe<boolean>;
    isVisible?: Maybe<boolean>;
};

const style = cntl`
    bg-secondary-900
    absolute
    top-0
    flex
    h-svh
    w-[70%]
    flex-col
    items-center
    justify-center
    shadow-md
    duration-300
`;

const hideStyle = cntl`
    -right-full
`;

const activeStyle = cntl`
    right-0
`;

const bgContainerStyle = cntl`
    fixed
    left-0
    top-0
    h-svh
    w-screen
    cursor-default
`;

const bgStyle = cntl`
    bg-primary
    h-full
    w-full
    duration-300
`;

const activeBgStyle = cntl`
    opacity-70
`;

const hideBgStyle = cntl`
    opacity-0
`;

export function MobileNavbarList(props: Props<'ul', P>) {
    const { isClicked, isVisible, ...rest } = props;

    return (
        <>
            <div className={clx(bgContainerStyle)}>
                <div
                    className={clx(
                        bgStyle,
                        isClicked && isVisible ? activeBgStyle : hideBgStyle
                    )}
                ></div>
            </div>
            <ul
                {...rest}
                className={clx(
                    style,
                    isClicked && isVisible ? activeStyle : hideStyle,
                    props.className
                )}
            >
                <MobileNavbarLink>Home</MobileNavbarLink>
                <MobileNavbarLink>About</MobileNavbarLink>
                <MobileNavbarLink>Skills</MobileNavbarLink>
                <MobileNavbarLink>Work</MobileNavbarLink>
                <MobileNavbarLink>Contact</MobileNavbarLink>
            </ul>
        </>
    );
}
