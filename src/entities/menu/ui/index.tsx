import cx from 'clsx';
import { useUnit } from 'effector-react';
import { FC, useState } from 'react';
import { menuModel } from '..';
import OpenedMenu from './openedMenu';
import styles from './styles.module.scss';

const Menu: FC = () => {
  const selectedId = useUnit(menuModel.$selectedId);
  const [isOpenMenuConfirm, setIsOpenMenuConfirm] = useState<boolean>(false);
  console.log(3);
  return (
    <div className={cx(styles.menu)}>
      <div className={cx(styles.button)} onClick={() => setIsOpenMenuConfirm(true)}>
        <span />
        <span />
        <span />
      </div>
      <div className={cx(styles['scroll-elemnt'])}>
        {menuModel.ARRAY_OF_MENU.map(({ name, id }) => (
          <div key={id} onClick={() => menuModel.setSelectedId(id)}>
            {name}
            {id === selectedId ? <span className={cx(styles['selected-elemnt'])} /> : null}
          </div>
        ))}
      </div>
      {isOpenMenuConfirm ? <OpenedMenu onClick={setIsOpenMenuConfirm} /> : null}
    </div>
  );
};

export default Menu;
