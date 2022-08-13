import { FC } from 'react';
import cx from 'clsx';
import styles from './styles.module.scss';

const Header: FC = () => {
  console.log(3);
  return (
    <div className={cx(styles.header)}>
      <div className={cx(styles.container)}>
        <span className={cx(styles.back)}> Cancel</span>
        Restaurant
      </div>
    </div>
  );
};

export default Header;
