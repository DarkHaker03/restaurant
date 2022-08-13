import cx from 'clsx';
import { FC, useState } from 'react';
import { Burger } from 'shared/burger';
import ItemsArray from './ItemsArray';
import OpenedMenu from './openedMenu';
import styles from './styles.module.scss';

const Menu: FC = () => {
  const [isOpenMenuConfirm, setIsOpenMenuConfirm] = useState<boolean>(false);
  return (
    <div className={cx(styles.menu)}>
      <Burger onClick={setIsOpenMenuConfirm} />
      <ItemsArray />
      {isOpenMenuConfirm ? <OpenedMenu onClick={setIsOpenMenuConfirm} /> : null}
    </div>
  );
};

export default Menu;
