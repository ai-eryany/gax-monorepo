// UI
import { Base, Page, Container } from '@gax/ui';

// Constants
import { ROUTES } from '@gax/constants';

function AboutPage() {
  return (
    <Base>
      <Page>
        <Container>
          <h1>{ROUTES?.ABOUT?.NAME}</h1>
        </Container>
      </Page>
    </Base>
  );
}

export { AboutPage };
