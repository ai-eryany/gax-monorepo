// Core functions
import { clx, Storage } from '@panda/core';

// Core components
import { Flex } from '@panda/core';

// constants
import { themes } from '@constants';

// store
import useStore from '@store';

export default function ChangeTheme() {
  const theme = useStore((store) => store.theme);
  const setTheme = useStore((store) => store.setTheme);

  const switchThemes = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
      Storage.set('theme', themes.light);
    } else {
      setTheme(themes.dark);
      Storage.set('theme', themes.dark);
    }
  };

  return (
    <Flex
      onClick={switchThemes}
      className={clx(
        'm-2',
        'max-w-14 h-6 items-center',
        'bg-slate-500',
        'dark:bg-red-400',
        'rounded-full',
        'hover:cursor-pointer'
      )}
    >
      <input type="checkbox" className={clx('sr-only')} />
      <button
        className={clx(
          'absolute',
          'w-7 h-7',
          'bg-slate-200',
          'rounded-full',
          'transition-all duration-300',
          'dark:rtl:-translate-x-full',
          'dark:translate-x-full'
        )}
      ></button>
    </Flex>
  );
}
