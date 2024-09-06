// UI
import { Img } from '@gax/ui';

// Utils
import { clx, cntl } from '@gax/utils';

// Types
import { Props } from '@gax/types';

const modelStyle = cntl`
  w-40
`;

function HeaderImg(props: Props<'img'>) {
  return <Img {...props} className={clx(modelStyle)} />;
}

export { HeaderImg };
