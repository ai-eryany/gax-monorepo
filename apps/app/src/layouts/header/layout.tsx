import { Props } from '@gax/types';

function HeaderLayout(props: Props<'header'>) {
  return (
    <header {...props} className="flex items-center justify-between p-4">
      header is here
    </header>
  );
}

export { HeaderLayout };
