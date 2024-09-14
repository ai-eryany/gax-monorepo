import { Maybe, Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';
import { FaBars, FaTimes } from 'react-icons/fa';

type P = {
    isClicked?: Maybe<boolean>;
};

const style = cntl`
    z-10
    p-4
`;

export function HamburgerIcon(props: Props<'div', P>) {
    return (
        <div onClick={props.onClick} className={clx(style, props.className)}>
            {!props.isClicked ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>
    );
}
