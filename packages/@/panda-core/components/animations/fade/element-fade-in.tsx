// Functions
import clx from '../../../functions/clx';

// Types
import { Props } from '../../../types/utils';

export default function ElementFadeIn(props: Props<'div', object>) {
  const { className } = props;
  return (
    <div
      {...props}
      className={clx(className, 'w-full relative', 'animate-fade')}
    >
      {props.children}
    </div>
  );
}
