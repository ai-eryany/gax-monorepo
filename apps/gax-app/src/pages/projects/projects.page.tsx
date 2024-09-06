// UI
import { Base, Container, Page } from '@gax/ui';

// Constants
import { ROUTES } from '@gax/constants';

function ProjectsPage() {
  return (
    <Base>
      <Page>
        <Container>
          <h1>{ROUTES?.PROJECTS?.NAME}</h1>
        </Container>
      </Page>
    </Base>
  );
}

export { ProjectsPage };
