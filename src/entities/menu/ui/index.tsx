import cx from 'clsx';
import { useUnit } from 'effector-react';
import { FC, useEffect, useState } from 'react';
import { Burger } from 'shared/ui/burger';
import { menuModel } from '..';
import ItemsArray from './items-array';
import OpenedMenu from './opened-menu';
import styles from './styles.module.scss';

const Menu: FC = () => {
  const selectedItem = useUnit(menuModel.$selectedItem);
  const [isOpenMenuConfirm, setIsOpenMenuConfirm] = useState<boolean>(false);
  const categoryOfFood = document.getElementById(selectedItem.name);
  useEffect(() => {
    categoryOfFood?.scrollIntoView();
  }, [selectedItem]);
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
