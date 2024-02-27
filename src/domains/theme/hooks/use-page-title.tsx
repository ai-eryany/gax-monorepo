// Packages
import { useEffect } from 'react';

// Store
import useStore from '@store';

// Types
import { Maybe } from '@panda/core';

type Props = {
  pageTitle: Maybe<string>;
};

// TODO: create a state to check if the title has been set correctly otherwise show an error.
export default function usePageTitle({ pageTitle }: Props) {
  const setPageTitle = useStore((store) => store.setPageTitle);

  useEffect(() => {
    setPageTitle(pageTitle);
  }, [setPageTitle, pageTitle]);

  return null;
}
