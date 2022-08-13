import { FC } from 'react';
import cx from 'clsx';
import styles from './styles.module.scss';

const Header: FC = () => {
  console.log(3);
  return (
    <div className={cx(styles.header)}>
      Header
    </div>
  );
};

export default Header;
