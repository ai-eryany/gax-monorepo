// UI
import { PrimaryLink } from '@gax/ui';

// Hooks
import { usePathname } from '@gax/hooks';

// Constants
import { ROUTES } from '@gax/constants';

function Nav() {
  const { isHome, isAbout, isContact, isBlogs, isProjects } = usePathname();
  return (
    <nav>
      <PrimaryLink to={ROUTES.HOME.URL} isActive={isHome}>
        {ROUTES.HOME.NAME}
      </PrimaryLink>
      <PrimaryLink to={ROUTES.ABOUT.URL} isActive={isAbout}>
        {ROUTES.ABOUT.NAME}
      </PrimaryLink>
      <PrimaryLink to={ROUTES.CONTACT.URL} isActive={isContact}>
        {ROUTES.CONTACT.NAME}
      </PrimaryLink>
      <PrimaryLink to={ROUTES.BLOGS.URL} isActive={isBlogs}>
        {ROUTES.BLOGS.NAME}
      </PrimaryLink>
      <PrimaryLink to={ROUTES.PROJECTS.URL} isActive={isProjects}>
        {ROUTES.PROJECTS.NAME}
      </PrimaryLink>
    </nav>
  );
}

export { Nav };
