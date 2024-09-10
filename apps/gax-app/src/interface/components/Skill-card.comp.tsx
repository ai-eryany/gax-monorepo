import { Maybe, Props } from '@gax/types';
import { clx, cntl } from '@gax/utils';
import { skillCardStyle as styles } from '@styles';
import { Img } from '@gax/ui';

type P = {
    name?: Maybe<string>;
    description?: Maybe<string>;
};

const innerStyle = cntl`
    shadow-md
    shadow-[#040c16]
`;

function SkillCardComp(props: Props<'img', P>) {
    return (
        <div className={clx(styles.flipBox)}>
            <div className={clx(innerStyle, styles.flipBoxInner)}>
                <div className={clx(styles.flipBoxFront)}>
                    <div className={clx(styles.frontMask)}></div>
                    <Img {...props} className={clx(styles.imgBox)} />
                    <p className={clx(styles.txtBox)}>{props.name}</p>
                </div>
                <div className={clx(styles.flipBoxBack)}>
                    <p className={clx(styles.descBox)}>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export { SkillCardComp };
