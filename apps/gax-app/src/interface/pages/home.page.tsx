import { Props } from '@gax/types';
import { Page } from '@gax/ui';

function HomePage(props: Props<'div'>) {
    return <Page {...props} />;
}

export { HomePage };
