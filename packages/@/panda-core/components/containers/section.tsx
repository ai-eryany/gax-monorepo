import clx from '../../functions/clx';
import { Props } from '../../types/utils';

export default function Section(props: Props<'section', object>) {
  return (
    <section {...props} className={clx(props.className, 'w-full relative')}>
      {props.children}
    </section>
  );
}
