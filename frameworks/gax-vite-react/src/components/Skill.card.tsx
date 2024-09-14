import { Maybe, Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';
import { skillCardStyle } from '@styles';
import { Img } from '@gax/ui';

type P = {
    name?: Maybe<string>;
    description?: Maybe<string>;
};

const innerStyle = cntl`
    shadow-md
    shadow-[#040c16]
`;

export function SkillCard(props: Props<'img', P>) {
    return (
        <div className={clx(skillCardStyle.flipBox)}>
            <div className={clx(innerStyle, skillCardStyle.flipBoxInner)}>
                <div className={clx(skillCardStyle.flipBoxFront)}>
                    <div className={clx(skillCardStyle.frontMask)}></div>
                    <Img {...props} className={clx(skillCardStyle.imgBox)} />
                    <p className={clx(skillCardStyle.txtBox)}>{props.name}</p>
                </div>
                <div className={clx(skillCardStyle.flipBoxBack)}>
                    <p className={clx(skillCardStyle.descBox)}>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
