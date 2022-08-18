import cx from 'clsx';
import React, { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  onClick: () => void
};

const Close: FC<Props> = ({ onClick }) => (
  <div className={cx(styles.button)} onClick={onClick}>
    <span />
    <span />
  </div>
);

export default Close;
