// Types
import { Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';

const style = cntl`
    relative
    min-h-screen
`;

function Page(props: Props<'div'>) {
    return <div {...props} className={clx(style, props.className)} />;
}

export { Page };
