import cx from 'clsx';
import React, { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  onClick: React.Dispatch<React.SetStateAction<boolean>>
};

const Burger: FC<Props> = ({ onClick }) => (
  <div className={cx(styles.button)} onClick={() => onClick(true)}>
    <span />
    <span />
    <span />
  </div>
);

export default Burger;
