import clx from '../../functions/clx';
import { Props } from '../../types/utils';

export default function Container(props: Props<'div', object>) {
  return (
    <div
      {...props}
      className={clx(
        props.className,
        'p-5 m-auto',
        'w-full max-w-wrapper relative'
      )}
    >
      {props.children}
    </div>
  );
}
