// Types
import { Props } from '@gax/types';

function Headerlayout(props: Props<'header'>) {
    return <header {...props} className="fixed z-10 h-[80px] w-full" />;
}

export { Headerlayout };
