import { Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';

const style = cntl`
   fixed
   left-0
   top-[35%]
   z-10 
   hidden
   flex-col
   lg:flex
`;

function SidebarLayout(props: Props<'aside'>) {
    return <aside {...props} className={clx(style, props.className)} />;
}

export { SidebarLayout };
