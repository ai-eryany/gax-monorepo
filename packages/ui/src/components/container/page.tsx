// Utils
import { clx, cntl } from '@gax/utils';

// Types
import { Props } from '@gax/types';

const modelStyle = cntl`relative min-h-screen`;

export default function Page(props: Props<'div'>) {
  return (
    <div {...props} className={clx(props.className, modelStyle)}>
      {props.children}
    </div>
  );
}
