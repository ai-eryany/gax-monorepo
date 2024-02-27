// Components
import { Page, Base, Container } from '@panda/core';

// Types
import { Props } from '@panda/core';

export default function Layout({ children }: Props<'div', object>) {
  return (
    <Page>
      <Base>
        <Container>{children}</Container>
      </Base>
    </Page>
  );
}
