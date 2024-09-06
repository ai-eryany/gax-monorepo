// UI
import { Base, Page, Container } from '@gax/ui';

// Constants
import { ROUTES } from '@gax/constants';

function NotFoundPage() {
  return (
    <Base>
      <Page>
        <Container>
          <h1>{ROUTES?.['*']?.NAME}</h1>;
        </Container>
      </Page>
    </Base>
  );
}

export { NotFoundPage };
