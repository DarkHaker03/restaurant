import React, { FC } from 'react';
import { ItemsOfArguments, IngridiensArguments } from 'pages/food-detail';
import cx from 'clsx';
import styles from './styles.module.scss';

type Props = {
  item: ItemsOfArguments,
  active: IngridiensArguments,
  activeItems: string[],
  setActiveItem: React.Dispatch<React.SetStateAction<string[]>>,
}

const ActiveItems: FC<Props> = ({
  item, active, activeItems, setActiveItem,
}) => {
  const { name, price } = item;
  const isConfirm = activeItems.some((activeItem) => activeItem === name);
  return (
    <div
      className={cx(styles['active-items'], isConfirm && styles.activeItem)}
    >
      <div>
        <input type="radio" name={active.type} onClick={() => setActiveItem([name])} />
        <span>{name}</span>
      </div>
      <span>{`${price} ₽`}</span>
    </div>
  );
};

export default ActiveItems;
