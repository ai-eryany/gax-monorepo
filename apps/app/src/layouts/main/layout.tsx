// Types
import { Props } from '@gax/types';

export default function Layout(props: Props<'main'>) {
  return (
    <main {...props} className="w-full rounded-tl-2xl bg-white">
      {props.children}
    </main>
  );
}
