// Types
import { Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';

const style = cntl`
    relative
    top-[80px]
    flex
    flex-col
    items-center
    justify-center
    p-4
`;

export function MainLayout(props: Props<'main'>) {
    return <main {...props} className={clx(style, props.className)} />;
}
