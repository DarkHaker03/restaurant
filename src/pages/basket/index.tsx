import { FC, useEffect } from 'react';
import { lowerBarModel } from 'entities/lower-bar';
import { useUnit } from 'effector-react';
import { $basket } from './model';

const Basket: FC = () => {
  const { setLink, setText, setIsOpen } = lowerBarModel;
  const basket = useUnit($basket);
  useEffect(() => {
    setIsOpen(true);
    setLink('');
    setText('Заказать | 349 ₽');
  }, []);
  return (
    <div>
      {basket.map(({ name, price }) => (
        <div>
          <div>{name}</div>
          <div>{price}</div>
        </div>
      ))}
    </div>
  );
};

export default Basket;
