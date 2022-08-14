import { lowerBarModel } from 'entities/lower-bar';
import { FC, useEffect } from 'react';

const FoodDetail: FC = () => {
  const { setLink, setText, setIsOpen } = lowerBarModel;
  useEffect(() => {
    setIsOpen(true);
    setLink('/basket');
    setText('Добавить к заказу | 349 ₽');
  }, []);
  return (
    <div>
      FoodDetail
    </div>
  );
};

export default FoodDetail;
