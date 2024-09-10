// Utils
import { clx, cntl } from '@gax/utils';

// Types
import { Props } from '@gax/types';

const modelStyle = cntl`
  relative 
  m-auto
`;

function Container(props: Props<'div'>) {
    return <div {...props} className={clx(props.className, modelStyle)} />;
}

export { Container };
