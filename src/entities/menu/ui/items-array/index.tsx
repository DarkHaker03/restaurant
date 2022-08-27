import { FC } from 'react';
import cx from 'clsx';
import { useUnit } from 'effector-react';
import { menuApi } from 'shared/api/menu';
import check from 'shared/assets/img/check.svg';
import { menuModel } from '../..';
import styles from './styles.module.scss';

type ItemsArrayProps = {
  version?: string
}

type ItemProps = {
  item: menuApi.MenuKeys,
  selectedItem: menuApi.MenuKeys
}

const Item: FC<ItemProps> = ({ item, selectedItem }) => (
  <div onClick={() => menuModel.setSelectedItem(item)}>
    {item.name}
    {item.id === selectedItem.id ? <span className={cx(styles['selected-element'])} /> : null}
  </div>
);

const ItemOfOpenedMenu: FC<ItemProps> = ({ item, selectedItem }) => (
  <div className={cx(styles.item)} onClick={() => menuModel.setSelectedItem(item)}>
    <span>
      {item.name}
    </span>
    {item.id === selectedItem.id ? <img src={check} alt="check" /> : null}
  </div>
);

const ItemsArray: FC<ItemsArrayProps> = ({ version }) => {
  const selectedItem = useUnit(menuModel.$selectedItem);
  const menu = useUnit(menuApi.$menu);
  return (
    <div className={cx(version === 'openedMenu' ? null : styles['scroll-element'])}>
      {menu.map((item) => {
        if (version === 'openedMenu') {
          return <ItemOfOpenedMenu key={item.id} item={item} selectedItem={selectedItem} />;
        }
        return <Item key={item.id} item={item} selectedItem={selectedItem} />;
      })}
    </div>
  );
};

export default ItemsArray;
