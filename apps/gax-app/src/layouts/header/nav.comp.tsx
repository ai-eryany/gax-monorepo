// UI
import { PrimaryLink, Container } from '@gax/ui';

// Hooks
import { usePathname } from '@gax/hooks';

// Utils
import { clx, cntl } from '@gax/utils';

// Constants
import { ROUTES } from '@gax/constants';

const modelStyle = cntl`
  flex
`;

const containerStyle = cntl`
  mr-0
  flex
  gap-5
`;

function Nav() {
  const { isHome, isAbout, isContact, isBlogs, isProjects } = usePathname();
  return (
    <nav className={clx(modelStyle)}>
      <Container className={clx(containerStyle)}>
        <PrimaryLink to={clx(ROUTES?.HOME?.URL)} isActive={isHome}>
          {ROUTES?.HOME?.NAME}
        </PrimaryLink>
        <PrimaryLink to={clx(ROUTES?.ABOUT?.URL)} isActive={isAbout}>
          {ROUTES?.ABOUT?.NAME}
        </PrimaryLink>
        <PrimaryLink to={clx(ROUTES?.CONTACT?.URL)} isActive={isContact}>
          {ROUTES?.CONTACT?.NAME}
        </PrimaryLink>
        <PrimaryLink to={clx(ROUTES?.BLOGS?.URL)} isActive={isBlogs}>
          {ROUTES?.BLOGS?.NAME}
        </PrimaryLink>
        <PrimaryLink to={clx(ROUTES?.PROJECTS?.URL)} isActive={isProjects}>
          {ROUTES?.PROJECTS?.NAME}
        </PrimaryLink>
      </Container>
    </nav>
  );
}

export { Nav };
