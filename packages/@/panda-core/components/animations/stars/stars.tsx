import { nanoid } from 'nanoid';

import styles from './stars.module.scss';

export default function Stars() {
  return (
    <div className={styles.galaxy}>
      {[...Array(61)].map((_, i: number) => {
        const cl = `star-${i}` as keyof typeof styles;
        return <div key={nanoid()} className={styles[cl]} />;
      })}
    </div>
  );
}
