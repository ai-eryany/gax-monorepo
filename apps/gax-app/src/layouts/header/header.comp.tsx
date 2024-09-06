// UI
import { Base, Container } from '@gax/ui';

// Utils
import { clx, cntl } from '@gax/utils';

// Types
import { Props } from '@gax/types';

const modelStyle = cntl`
  flex
  flex-col
  p-1
  px-10
  pt-[min(10vh,5rem)]
`;

const fontStyle = cntl`
  tracking-wide
`;

function Header(props: Props<'header'>) {
  return (
    <Base>
      <Container>
        <header {...props} className={clx(modelStyle, fontStyle)}>
          {props.children}
        </header>
      </Container>
    </Base>
  );
}

export { Header };
