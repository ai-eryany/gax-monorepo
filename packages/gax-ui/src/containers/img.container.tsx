// Utils
import { clx, cntl } from '@gax/utils';

// Types
import { Props } from '@gax/types';

const modelStyle = cntl`h-auto max-w-full object-cover`;

function Img(props: Props<'img'>) {
    return (
        <div className={clx(props.className)}>
            <img {...props} className={clx(modelStyle)} />
        </div>
    );
}

export { Img };
