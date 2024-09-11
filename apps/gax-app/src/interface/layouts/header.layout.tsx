// Types
import { Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';
import { useHeaderController } from '@gax/hooks';

const style = cntl`
    fixed
    z-10
    flex
    w-full
    items-center
    justify-center
    overflow-hidden
    bg-secondary-900
    shadow-md
    duration-300
`;

function HeaderLayout(props: Props<'header'>) {
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

export { HeaderLayout };
