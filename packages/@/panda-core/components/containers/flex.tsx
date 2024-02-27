import clx from '../../functions/clx';
import { Props } from '../../types/utils';

export default function Flex(props: Props<'div', object>) {
  return (
    <div
      {...props}
      className={clx(props.className, 'flex flex-wrap w-full gap-4 relative')}
    >
      {props.children}
    </div>
  );
}
