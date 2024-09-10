// Types
import { Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';

const style = cntl`
    bg-primary-900
`;

function MainLayout(props: Props<'main'>) {
    return <main {...props} className={clx(style, props.className)} />;
}

export { MainLayout };
