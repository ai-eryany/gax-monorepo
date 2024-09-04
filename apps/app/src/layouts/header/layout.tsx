import { Props } from '@gax/types';

export default function Layout(props: Props<'header'>) {
  return (
    <header {...props} className="flex items-center justify-between p-4">
      header is here
    </header>
  );
}
