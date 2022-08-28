import cx from 'clsx';
import {
  FC, useCallback, useEffect, useState,
} from 'react';
import { Burger } from 'shared/ui/burger';
import { menuModel } from '..';
import ItemsArray from './items-array';
import OpenedMenu from './opened-menu';
import styles from './styles.module.scss';

menuModel.$selectedItem.watch(({ name }) => {
  document.getElementById(name)?.scrollIntoView({ behavior: 'smooth' });
});

const Menu: FC = () => {
  const [isOpenMenuConfirm, setIsOpenMenuConfirm] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const scrollFunc = useCallback(() => {
    if (window.scrollY > 60) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, []);
  console.log(3);
  useEffect(() => {
    window.addEventListener('scroll', scrollFunc);
    // return window.addEventListener('scroll', scrollFunc);
  }, []);
  return (
    <>
      {/*
        start
        The additional element for normal scrolling
        when selected new category in menu, because
        menu changed his position from static to fixed
        what change placement of all elements on page,
        but scrollIntoView dont know about it
      */}
      {(isScroll && !isOpenMenuConfirm) && <div style={{ height: '34px' }} />}
      {/* end */}
      <div className={cx(styles.menu, (isScroll && !isOpenMenuConfirm) && styles['fixed-menu'])}>
        <Burger onClick={setIsOpenMenuConfirm} />
        <ItemsArray />
        {isOpenMenuConfirm ? <OpenedMenu onClick={setIsOpenMenuConfirm} /> : null}
      </div>
    </>
  );
};

export default Menu;
