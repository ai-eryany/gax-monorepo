// Utils
import { clx, cntl } from '@gax/utils';

// Types
import { Props } from '@gax/types';

const modelStyle = cntl`relative m-auto max-w-wrapper p-1`;

export default function Container(props: Props<'div'>) {
  return (
    <div {...props} className={clx(props.className, modelStyle)}>
      {props.children}
    </div>
  );
}
