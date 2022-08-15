import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  leftBtn: () => void,
  counter: number,
  rightBtn: () => void,
};

const Counter: FC<Props> = ({ leftBtn, counter, rightBtn }) => (
  <div className={styles.counter}>
    <div onClick={leftBtn} className={styles.counterBtn}>-</div>
    <div className={styles.counter}>{counter}</div>
    <div onClick={rightBtn} className={styles.counterBtn}>+</div>
  </div>
);

export default Counter;
