import React, { FC } from 'react';
import cx from 'clsx';
import { useUnit } from 'effector-react';
import { menuApi } from 'shared/api/menu';
import check from 'shared/assets/img/check.svg';
import { menuModel } from '../..';
import styles from './styles.module.scss';

type ItemsArrayProps = {
  closeMenu?: React.Dispatch<React.SetStateAction<boolean>>,
}

type ItemProps = {
  item: menuApi.MenuKeys,
}

type ItemOfOpenedMenuProps = {
  closeMenu: React.Dispatch<React.SetStateAction<boolean>>,
} & ItemProps

const Item: FC<ItemProps> = ({ item }) => {
  const selectedItem = useUnit(menuModel.$selectedItem);
  return (
    <div onClick={() => menuModel.setSelectedItem(item)}>
      {item.name}
      {item.id === selectedItem.id ? <span className={cx(styles['selected-element'])} /> : null}
    </div>
  );
};

const ItemOfOpenedMenu: FC<ItemOfOpenedMenuProps> = ({ item, closeMenu }) => {
  const selectedItem = useUnit(menuModel.$selectedItem);
  const handleClick = () => {
    closeMenu(false);
    menuModel.setSelectedItem(item);
  };
  return (
    <div className={cx(styles.item)} onClick={handleClick}>
      <span>
        {item.name}
      </span>
      {item.id === selectedItem.id ? <img src={check} alt="check" /> : null}
    </div>
  );
};

const ItemsArray: FC<ItemsArrayProps> = ({ closeMenu }) => {
  const menu = useUnit(menuApi.$menu);
  return (
    <div className={cx(closeMenu ? null : styles['scroll-element'])}>
      {menu.map((item) => {
        if (closeMenu) {
          return (
            <ItemOfOpenedMenu
              key={item.id}
              item={item}
              closeMenu={closeMenu}
            />
          );
        }
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemsArray;
