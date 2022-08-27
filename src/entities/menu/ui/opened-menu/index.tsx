import cx from 'clsx';
import React, { FC, useState } from 'react';
import { Close } from 'shared/ui/close';
import ItemsArray from '../items-array';
import styles from './styles.module.scss';

type Props = {
  onClick: React.Dispatch<React.SetStateAction<boolean>>,
}

const OpenedMenu: FC<Props> = ({ onClick }) => {
  const [isAnimationClose, setIsAnimationClose] = useState(false);
  const handleClick = () => {
    setIsAnimationClose(true);
    setTimeout(() => {
      onClick(false);
    }, 460);
  };
  return (
    <>
      <div className={cx(styles.openedMenu, styles['open-anim'], isAnimationClose && styles['close-anim'])}>
        <div className={cx(styles['top-row'])}>
          <Close onClick={handleClick} />
          Меню
        </div>
        <ItemsArray closeMenu={onClick} />
      </div>
      {!isAnimationClose && <span className={styles['black-background']} />}
    </>
  );
};

export default OpenedMenu;
