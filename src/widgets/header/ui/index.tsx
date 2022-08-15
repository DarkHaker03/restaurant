import { FC } from 'react';
import { Link } from 'react-router-dom';
import cx from 'clsx';
import styles from './styles.module.scss';

const Header: FC = () => {
  console.log(3);
  return (
    <div className={cx(styles.header)}>
      <div className={cx(styles.container)}>
        <Link className={cx(styles.back)} to="/"> Cancel</Link>
        Restaurant
      </div>
    </div>
  );
};

export default Header;
