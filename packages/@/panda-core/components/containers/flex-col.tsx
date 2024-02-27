import clx from '../../functions/clx';
import { Props } from '../../types/utils';

export default function FlexCol(props: Props<'div', object>) {
  return (
    <div
      {...props}
      className={clx(props.className, 'flex flex-col relative w-full gap-4')}
    >
      {props.children}
    </div>
  );
}
