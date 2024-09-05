// Components
import { PrimaryLink } from '@gax/ui';

// constants
import { ROUTES } from '@gax/constants';

function HomePage() {
  return (
    <h1>
      <PrimaryLink to={ROUTES.ABOUT.URL}>{ROUTES.ABOUT.NAME}</PrimaryLink>
    </h1>
  );
}

export { HomePage };
