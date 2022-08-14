import { FC } from 'react';
import cx from 'clsx';
import { useUnit } from 'effector-react';
import { mainModel } from 'pages/main';
import { MenuKeys } from 'pages/main/model';
import check from 'shared/assets/img/check.svg';
import { menuModel } from '../..';
import styles from './styles.module.scss';

type ItemsArrayProps = {
  version?: string
}

type ItemProps = {
  item: MenuKeys
  selectedItem: MenuKeys
}

const Item: FC<ItemProps> = ({ item, selectedItem }) => (
  <div key={item.id} onClick={() => menuModel.setSelectedItem(item)}>
    {item.name}
    {item.id === selectedItem.id ? <span className={cx(styles['selected-element'])} /> : null}
  </div>
);

const ItemOfOpenedMenu: FC<ItemProps> = ({ item, selectedItem }) => (
  <div key={item.id} className={cx(styles.item)} onClick={() => menuModel.setSelectedItem(item)}>
    <span>
      {item.name}
    </span>
    {item.id === selectedItem.id ? <img src={check} alt="check" /> : null}
  </div>
);

const ItemsArray: FC<ItemsArrayProps> = ({ version }) => {
  const selectedItem = useUnit(menuModel.$selectedItem);
  const menu = useUnit(mainModel.$menu);
  return (
    <div className={cx(version === 'openedMenu' ? null : styles['scroll-element'])}>
      {menu.map((item) => {
        if (version === 'openedMenu') {
          return <ItemOfOpenedMenu item={item} selectedItem={selectedItem} />;
        }
        return <Item item={item} selectedItem={selectedItem} />;
      })}
    </div>
  );
};

export default ItemsArray;
