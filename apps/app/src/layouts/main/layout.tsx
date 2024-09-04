// Types
import { Props } from '@gax/types';

function MainLayout(props: Props<'main'>) {
  return (
    <main {...props} className="w-full rounded-tl-2xl bg-white">
      {props.children}
    </main>
  );
}

export { MainLayout };
