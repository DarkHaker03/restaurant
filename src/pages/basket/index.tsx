import { FC, useEffect } from 'react';
import { lowerBarModel } from 'entities/lower-bar';

const Basket: FC = () => {
  const { setLink, setText, setIsOpen } = lowerBarModel;
  useEffect(() => {
    setIsOpen(true);
    setLink('/basket');
    setText('Заказать | 349 ₽');
  }, []);
  return (
    <div>
      Basket
    </div>
  );
};

export default Basket;
