import { Maybe, Props } from '@gax/types';
import { IconType } from 'react-icons';
import { clx } from '@gax/utils';

type P = {
    Icon?: Maybe<IconType>;
    href?: Maybe<string>;
    text?: Maybe<string>;
};

function SocialIcon(props: Props<'a', P>) {
    const { Icon, href, text } = props;

    return (
        <li
            className={clx(
                'ml-[-100px] flex h-[60px] w-[160px] items-center justify-between duration-300 hover:ml-[-10px]',
                props.className
            )}
        >
            <a
                className="flex w-full items-center justify-between px-5 text-gray-300"
                target="_blank"
                href={href}
            >
                {text} {Icon && <Icon size={30} />}
            </a>
        </li>
    );
}

export { SocialIcon };
