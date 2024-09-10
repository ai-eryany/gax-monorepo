// Utils
import { clx, cntl } from '@gax/utils';

// Types
import { Props } from '@gax/types';

const modelStyle = cntl`relative`;

function Section(props: Props<'section'>) {
    return (
        <section {...props} className={clx(props.className, modelStyle)}>
            {props.children}
        </section>
    );
}

export { Section };
