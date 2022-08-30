import { useUnit } from 'effector-react';
import { Menu } from 'entities/menu';
import { selectedFoodModel } from 'process/selected-food';
import { FC, useEffect } from 'react';
import { useLowerbar } from 'shared/hooks';
import Products from './products';

const Main: FC = () => {
  const sumPrice = useUnit(selectedFoodModel.$sumPrice);
  useEffect(() => {
    if (sumPrice !== 0) {
      const link: string = '/basket';
      const text: string = `Заказать ${sumPrice}₽`;
      const isOpen: boolean = true;
      useLowerbar.base(link, text, isOpen);
    } else {
      useLowerbar.close();
    }
  }, [sumPrice]);
  return (
    <>
      <Menu />
      <Products />
    </>
  );
};
export default Main;
