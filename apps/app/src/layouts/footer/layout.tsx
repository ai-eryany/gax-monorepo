// Components
import { Base, Container } from '@gax/ui';

// Types
import { Props } from '@gax/types';

export default function Layout(props: Props<'footer'>) {
  return (
    <footer {...props}>
      <Base>
        <Container>{props.children}</Container>
      </Base>
    </footer>
  );
}
