import { useEffect } from 'react';
import { Storage } from '@panda/core';
import { Store } from '@store';

type Props = Pick<Store, 'setTheme'>;

export default function useThemePreference(props: Props) {
  const { setTheme } = props;

  const isDarkInStorage = Storage.get('THEME') === 'DARK';
  const isLightInStorage = Storage.get('THEME') === 'LIGHT';
  const isPreferingDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  useEffect(() => {
    if (isDarkInStorage || (isPreferingDark && !isLightInStorage)) {
      setTheme('DARK');
      Storage.init('THEME', 'DARK');
    } else {
      setTheme('LIGHT');
      Storage.init('THEME', 'LIGHT');
    }
  }, [setTheme, isDarkInStorage, isLightInStorage, isPreferingDark]);

  return null;
}
