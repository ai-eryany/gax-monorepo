// UI
import { Base, Page, Container } from '@gax/ui';

// Constants
import { ROUTES } from '@gax/constants';

function BlogsPage() {
  return (
    <Base>
      <Page>
        <Container>
          <h1>{ROUTES?.BLOGS?.NAME}</h1>
        </Container>
      </Page>
    </Base>
  );
}

export { BlogsPage };
