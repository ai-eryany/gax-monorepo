import clx from '../../functions/clx';
import { Props } from '../../types/utils';

export default function Page(props: Props<'div', object>) {
  return (
    <div
      {...props}
      className={clx(props.className, 'w-full relative min-h-screen')}
    >
      {props.children}
    </div>
  );
}
