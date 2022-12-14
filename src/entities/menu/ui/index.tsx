import cx from 'clsx';
import { useUnit } from 'effector-react';
import { FC, useState } from 'react';
import { Burger } from 'shared/burger';
import { menuModel } from '..';
import ItemsArray from './ItemsArray';
import OpenedMenu from './openedMenu';
import styles from './styles.module.scss';

const Menu: FC = () => {
  const selectedItem = useUnit(menuModel.$selectedItem);
  const [isOpenMenuConfirm, setIsOpenMenuConfirm] = useState<boolean>(false);

  return (
    <>
      <div className={cx(styles.menu)}>
        <Burger onClick={setIsOpenMenuConfirm} />
        <ItemsArray />
        {isOpenMenuConfirm ? <OpenedMenu onClick={setIsOpenMenuConfirm} /> : null}
      </div>
      <div className={styles.selectedItem}>
        {selectedItem.name}
      </div>
    </>
  );
};

export default Menu;
