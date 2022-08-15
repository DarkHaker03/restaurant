import { FC, useEffect } from 'react';
import { lowerBarModel } from 'entities/lower-bar';
import { Link } from 'react-router-dom';
import { useUnit } from 'effector-react';
import img from 'shared/assets/img/basket.svg';
import { BasketCard } from 'entities/basket-card';
import { $basket, setBasket } from './model';
import styles from './styles.module.scss';

const Basket: FC = () => {
  const { setLink, setText, setIsOpen } = lowerBarModel;
  const basket = useUnit($basket);
  const sumPrice = basket.reduce((sum, item) => {
    return sum + item.price * item.counter;
  }, 0);
  useEffect(() => {
    setIsOpen(true);
    setLink('');
    setText(`Заказать | ${sumPrice} ₽`);
  }, []);
  useEffect(() => {
    setText(`Заказать | ${sumPrice} ₽`);
  }, [basket]);
  return (
    <div style={{ padding: '16px' }}>
      <div className={styles['basket-row']}>
        <span className={styles.basket}>Корзина</span>
        <Link to="/" onClick={() => setBasket([])}>
          <img src={img} alt="" />
        </Link>
      </div>
      <div>
        {basket.map((item) => (
          <BasketCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Basket;
