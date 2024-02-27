// Components
import { Page, Base, Container } from '@panda/core';

// Animations
import { ElementFadeIn } from '@panda/core';

// Types
import { Props } from '@panda/core';

export default function Layout({ children }: Props<'div', object>) {
  return (
    <Base>
      <ElementFadeIn>
        <Page>
          <Container>{children}</Container>
        </Page>
      </ElementFadeIn>
    </Base>
  );
}
