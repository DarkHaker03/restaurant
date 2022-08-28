import cx from 'clsx';
import { useUnit } from 'effector-react';
import {
  FC, useEffect, useState,
} from 'react';
import { menuApi } from 'shared/api/menu';
import { Burger } from 'shared/ui/burger';
import { menuModel } from '..';
import ItemsArray from './items-array';
import OpenedMenu from './opened-menu';
import styles from './styles.module.scss';

menuModel.$selectedItem.watch(({ name }) => {
  document.getElementById(name)?.scrollIntoView({ behavior: 'smooth' });
});

const Menu: FC = () => {
  const [menu,
    setSelectedItem,
  ] = useUnit(
    [
      menuApi.$menu,
      menuModel.setSelectedItem,
    ],
  );
  const [isOpenMenuConfirm, setIsOpenMenuConfirm] = useState<boolean>(false);
  const [isPageScroll, setIsPageScroll] = useState<boolean>(false);
  const changeIsPageScroll = () => {
    if (window.scrollY > 60) {
      setIsPageScroll(true);
    } else {
      setIsPageScroll(false);
    }
  };
  let timer: any = null;
  const setWhereUserLocated = () => {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      for (const item of menu) {
        const elemPositionY = Math.round(
          document.getElementById(item.name)?.getBoundingClientRect().top ?? 0,
        );
        if (elemPositionY > -300 && elemPositionY < 300) {
          setSelectedItem(item);
        }
      }
    }, 120);
  };
  const scrollPage = () => {
    changeIsPageScroll();
    setWhereUserLocated();
  };
  console.log(3);
  useEffect(() => {
    window.addEventListener('scroll', scrollPage);
    return window.addEventListener('scroll', scrollPage);
  }, []);
  const isFixedMenu = isPageScroll && !isOpenMenuConfirm;
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
      {isFixedMenu && <div style={{ height: '34px' }} />}
      {/* end */}
      <div className={cx(styles.menu, isFixedMenu && styles['fixed-menu'])}>
        <Burger onClick={setIsOpenMenuConfirm} />
        <ItemsArray />
        {isOpenMenuConfirm ? <OpenedMenu onClick={setIsOpenMenuConfirm} /> : null}
      </div>
    </>
  );
};

export default Menu;
