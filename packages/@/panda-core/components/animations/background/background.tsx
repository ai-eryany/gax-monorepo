import Container from '../../containers/container';

// Functions
import { clx } from '@panda/core';

// Types
import { Props } from '@panda/core';

// SASS
import styles from './background.module.scss';

export default function Background(props: Props<'div', object>) {
  return (
    <div className={clx(styles.background, props.className)}>
      <Container>
        <div className={clx(styles.shade1)}></div>
        {props.children}
      </Container>
    </div>
  );
}
