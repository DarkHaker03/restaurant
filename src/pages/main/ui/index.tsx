import { lowerBarModel } from 'entities/lower-bar';
import { Menu } from 'entities/menu';
import { selectedFoodModel } from 'process/selectedFood';
import { FC, useEffect } from 'react';
import Products from './products';

const Main: FC = () => {
  const { setLink, setText, setIsOpen } = lowerBarModel;
  useEffect(() => {
    selectedFoodModel.setSelectedFood(selectedFoodModel.defaultSelectedFood);
    setIsOpen(false);
    setLink('/food-detail');
    setText('Перейти к оформлению заказа');
  }, []);
  return (
    <>
      <Menu />
      <Products />
    </>
  );
};

export default Main;
