// Types
import { Props } from '@gax/types';

function Main(props: Props<'main'>) {
  return (
    <main {...props} className="w-full rounded-tl-2xl">
      {props.children}
    </main>
  );
}

export { Main };
