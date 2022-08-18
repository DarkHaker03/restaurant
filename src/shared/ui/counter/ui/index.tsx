import CSS from 'csstype';
import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  leftBtn: any,
  counter: number,
  rightBtn: any,
  supplementStyles?: CSS.Properties,
  supplementStylesOfCounter?: CSS.Properties,
};

const Counter: FC<Props> = ({
  leftBtn, counter, rightBtn, supplementStyles, supplementStylesOfCounter,
}) => (
  <div className={styles.counter} style={supplementStyles}>
    <div onClick={leftBtn} className={styles.counterBtn}>-</div>
    <div style={supplementStylesOfCounter} className={styles.number}>{counter}</div>
    <div onClick={rightBtn} className={styles.counterBtn}>+</div>
  </div>
);

export default Counter;
