// Types
import { Props } from '@gax/types';

function Page(props: Props<'div'>) {
    return <div {...props} className="relative min-h-screen" />;
}

export { Page };
