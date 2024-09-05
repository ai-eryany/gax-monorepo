// Components
import { Base, Container } from '@gax/ui';

// Types
import { Props } from '@gax/types';

function FooterLayout(props: Props<'footer'>) {
  return (
    <footer {...props}>
      <Base>
        <Container>{props.children}</Container>
      </Base>
    </footer>
  );
}

export { FooterLayout };
