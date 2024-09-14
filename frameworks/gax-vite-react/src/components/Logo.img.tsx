import { Props } from '@gax/types';
import { Img } from '@gax/ui';
import { clx, cntl } from '@gax/utils';

const style = cntl`
    flex
    h-full
    w-[20%]
    items-center
    justify-center
    overflow-hidden
`;

const imgStyle = cntl`
    h-[160px]
    w-[160px]
`;

export function LogoImg(props: Props<'img'>) {
    return (
        <Img
            src="/images/brand/logo.svg"
            alt="Logo Image"
            className={clx(style, props.className)}
            imgClassName={clx(imgStyle)}
        />
    );
}
