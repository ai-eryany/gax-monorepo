// Utils
import { clx, cntl } from '@gax/utils';

// Types
import { Props } from '@gax/types';

const modelStyle = cntl`h-auto max-w-full object-cover`;

export default function Img(props: Props<'img'>) {
  return (
    <div {...props} className={clx(props.className)}>
      <img className={clx(modelStyle)} src={props.src} alt={props.alt} />
    </div>
  );
}
