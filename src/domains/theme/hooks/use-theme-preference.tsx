import { useEffect } from 'react';
import { Storage } from '@panda/core';
import { Store } from '@store';

type Props = Pick<Store, 'setTheme'>;

export default function useThemePreference(props: Props) {
  const { setTheme } = props;

  const isDarkInStorage = Storage.get('theme') === 'dark';
  const isLightInStorage = Storage.get('theme') === 'light';
  const isPreferingDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  useEffect(() => {
    if (isDarkInStorage || (isPreferingDark && !isLightInStorage)) {
      setTheme('dark');
      Storage.init('theme', 'dark');
    } else {
      setTheme('light');
      Storage.init('theme', 'light');
    }
  }, [setTheme, isDarkInStorage, isLightInStorage, isPreferingDark]);

  return null;
}
