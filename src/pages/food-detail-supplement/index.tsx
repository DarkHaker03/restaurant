import { lowerBarModel } from 'entities/lower-bar';
import { FC, useEffect } from 'react';

const FoodDetailSupplement: FC = () => {
  const { setLink, setText, setIsOpen } = lowerBarModel;
  useEffect(() => {
    setIsOpen(true);
    setLink('/food-detail');
    setText('Готово');
  }, []);
  return (
    <div>
      FoodDetailSupplement
    </div>
  );
};

export default FoodDetailSupplement;
