// Utils
import clx from 'packages/core/utils/functions/clx';

// Types
import { Props } from 'packages/core/types/utils';

// Styles
import styles from './element-fade-in.module.scss';

function ElementFadeIn(props: Props<'div'>) {
  const { className } = props;

  return (
    <div {...props} className={clx(className, styles.fade)}>
      {props.children}
    </div>
  );
}

export default ElementFadeIn;
