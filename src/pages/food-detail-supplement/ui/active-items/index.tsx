import React, { FC } from 'react';
import { ItemsOfArguments, IngridiensArguments } from 'pages/food-detail/ui';
import cx from 'clsx';
import styles from './styles.module.scss';

type Props = {
  item: ItemsOfArguments,
  active: IngridiensArguments,
  activeItems: string[],
  setActiveItems: React.Dispatch<React.SetStateAction<string[]>>,
}

const ActiveItems: FC<Props> = ({
  item, active, activeItems, setActiveItems,
}) => {
  const { name, price } = item;
  const { inputType } = active;
  const isConfirm = activeItems.some((activeItem) => activeItem === name);
  const handleClick = () => {
    if (isConfirm === false) {
      setActiveItems([...activeItems, name]);
    } else {
      const newActiveItems = activeItems.filter((i) => i !== name);
      setActiveItems(newActiveItems);
    }
  };
  const input = () => {
    if (inputType === 'radio') {
      return <span className={cx(styles['input-radio'], isConfirm && styles['input-radio-active'])} onClick={() => setActiveItems([name])}>{isConfirm && '✔'}</span>;
    }
    return <span className={cx(styles['input-checkbox'], isConfirm && styles['input-checkbox-active'])} onClick={handleClick}>{isConfirm && '✔'}</span>;
  };
  return (
    <div
      className={cx(styles['active-items'], isConfirm && styles.activeItem)}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {input()}
        <span>{name}</span>
      </div>
      <span>{`${price} ₽`}</span>
    </div>
  );
};

export default ActiveItems;
