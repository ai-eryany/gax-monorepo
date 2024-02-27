import clx from '../../functions/clx';
import { Props } from '../../types/utils';

export default function Base(props: Props<'div', object>) {
  return (
    <div {...props} className={clx(props.className, 'w-full relative')}>
      {props.children}
    </div>
  );
}
