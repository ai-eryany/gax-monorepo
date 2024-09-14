// Utils
import { clx, cntl } from '@gax/utils';

// Types
import { Maybe, Props } from '@gax/types';

type P = {
    imgClassName?: Maybe<string>;
};

const imgStyle = cntl`
    h-auto 
    max-w-full 
    object-cover
`;

function Img(props: Props<'img', P>) {
    const { imgClassName, ...rest } = props;

    return (
        <div className={clx(props.className)}>
            <img {...rest} className={clx(imgStyle, imgClassName)} />
        </div>
    );
}

export { Img };
