// Components
import { Base, Container } from '@gax/ui';

// Types
import { Props } from '@gax/types';

function Footer(props: Props<'footer'>) {
  return (
    <footer {...props}>
      <Base>
        <Container>{props.children}</Container>
      </Base>
    </footer>
  );
}

export { Footer };
