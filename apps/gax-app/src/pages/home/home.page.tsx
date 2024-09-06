// UI
import { Page, Base, Container } from '@gax/ui';

// Components
import { Hero } from '@components';

// constants
import { ROUTES } from '@gax/constants';

function HomePage() {
  return (
    <Base>
      <Page>
        <Container>
          <h1>{ROUTES?.HOME?.NAME}</h1>
          <Hero />
        </Container>
      </Page>
    </Base>
  );
}

export { HomePage };
