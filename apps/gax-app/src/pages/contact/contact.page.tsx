// UI
import { Base, Page, Container } from '@gax/ui';

//Constants
import { ROUTES } from '@gax/constants';

function ContactPage() {
  return (
    <Base>
      <Page>
        <Container>
          <h1>{ROUTES?.CONTACT?.NAME}</h1>
        </Container>
      </Page>
    </Base>
  );
}

export { ContactPage };
