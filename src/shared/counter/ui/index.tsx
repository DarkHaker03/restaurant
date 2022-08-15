import CSS from 'csstype';
import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  leftBtn: () => void,
  counter: number,
  rightBtn: () => void,
  supplementStyles?: CSS.Properties,
};

const Counter: FC<Props> = ({
  leftBtn, counter, rightBtn, supplementStyles,
}) => (
  <div className={styles.counter} style={supplementStyles}>
    <div onClick={leftBtn} className={styles.counterBtn}>-</div>
    <div className={styles.number}>{counter}</div>
    <div onClick={rightBtn} className={styles.counterBtn}>+</div>
  </div>
);

export default Counter;
