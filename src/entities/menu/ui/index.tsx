import cx from 'clsx';
import { FC, useState } from 'react';
import { Burger } from 'shared/ui/burger';
import { menuModel } from '..';
import ItemsArray from './items-array';
import OpenedMenu from './opened-menu';
import styles from './styles.module.scss';

menuModel.$selectedItem.watch(({ name }) => {
  document.getElementById(name)?.scrollIntoView();
});

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
