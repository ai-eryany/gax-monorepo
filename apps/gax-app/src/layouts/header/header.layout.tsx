import { Props } from '@gax/types';

function HeaderLayout(props: Props<'header'>) {
  return (
    <header
      {...props}
      className="relative z-50 bg-white font-sans tracking-wide shadow-md"
    >
      {props.children}
    </header>
  );
}

export { HeaderLayout };
