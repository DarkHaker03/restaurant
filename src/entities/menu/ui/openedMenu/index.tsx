import cx from 'clsx';
import React, { FC, useState } from 'react';
import { useUnit } from 'effector-react';
import check from 'shared/assets/img/check.svg';
import styles from './styles.module.scss';
import { menuModel } from '../..';

type Props = {
  onClick: React.Dispatch<React.SetStateAction<boolean>>,
}

const OpenedMenu: FC<Props> = ({ onClick }) => {
  const selectedId = useUnit(menuModel.$selectedId);
  console.log(3);
  const [a, setA] = useState(false);
  const handleClick = () => {
    setA(true);
    setTimeout(() => {
      onClick(false);
    }, 460);
  };
  return (
    <div className={cx(styles.openedMenu, styles['open-anim'], a && styles['close-anim'])}>
      <div className={cx(styles['top-row'])}>
        <div className={cx(styles.button)} onClick={handleClick}>
          <span />
          <span />
        </div>
        Меню
      </div>
      <div>
        {menuModel.ARRAY_OF_MENU.map(({ name, id }) => (
          <div key={id} className={cx(styles.item)} onClick={() => menuModel.setSelectedId(id)}>
            <span>
              {name}
            </span>
            {id === selectedId ? <img src={check} alt="check" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenedMenu;
