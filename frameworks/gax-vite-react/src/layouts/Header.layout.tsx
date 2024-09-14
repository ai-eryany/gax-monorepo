// Types
import { Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';
import { useHeaderController } from '@gax/hooks';

const style = cntl`
    fixed
    z-10
    flex
    h-[80px]
    w-full
    items-center
    justify-center
    bg-secondary-900
    shadow-md
    duration-300
`;

export function HeaderLayout(props: Props<'header'>) {
    const [isVisible] = useHeaderController();

    return (
        <header
            {...props}
            className={clx(
                style,
                props.className,
                isVisible ? 'translate-y-0' : '-translate-y-full'
            )}
        />
    );
}
