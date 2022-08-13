import { FC } from 'react';
import cx from 'clsx';
import { useUnit } from 'effector-react';
import check from 'shared/assets/img/check.svg';
import { $selectedId } from 'entities/menu/model';
import { menuModel } from '../..';
import styles from './styles.module.scss';

type ItemsArrayProps = {
  version?: string
}

type ItemProps = {
  id: number,
  name: string,
  selectedId: number
}

const Item: FC<ItemProps> = ({ id, name, selectedId }) => (
  <div key={id} onClick={() => menuModel.setSelectedId(id)}>
    {name}
    {id === selectedId ? <span className={cx(styles['selected-element'])} /> : null}
  </div>
);

const ItemOfOpenedMenu: FC<ItemProps> = ({ id, name, selectedId }) => (
  <div key={id} className={cx(styles.item)} onClick={() => menuModel.setSelectedId(id)}>
    <span>
      {name}
    </span>
    {id === selectedId ? <img src={check} alt="check" /> : null}
  </div>
);

const ItemsArray: FC<ItemsArrayProps> = ({ version }) => {
  const selectedId = useUnit($selectedId);
  return (
    <div className={cx(version === 'openedMenu' ? null : styles['scroll-element'])}>
      {menuModel.ARRAY_OF_MENU.map(({ name, id }) => {
        if (version === 'openedMenu') {
          return <ItemOfOpenedMenu id={id} selectedId={selectedId} name={name} />;
        }
        return <Item id={id} selectedId={selectedId} name={name} />;
      })}
    </div>
  );
};

export default ItemsArray;
