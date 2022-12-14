import { FC, useEffect } from 'react';
import { lowerBarModel } from 'entities/lower-bar';
import { Link, useNavigate } from 'react-router-dom';
import { useUnit } from 'effector-react';
import img from 'shared/assets/img/basket.svg';
import { BasketCard } from 'entities/basket-card';
import { $basket, setBasket } from './model';
import styles from './styles.module.scss';

const Basket: FC = () => {
  const navigate = useNavigate();
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
    if (sumPrice !== 0) {
      setText(`Заказать | ${sumPrice} ₽`);
    } else {
      navigate('/');
    }
  }, [basket]);
  return (
    <div>
      <div className={styles['basket-row']}>
        <span className={styles.basket}>Корзина</span>
        <Link to="/" onClick={() => setBasket([])}>
          <img src={img} alt="" />
        </Link>
      </div>
      <div>
        {basket.map((item) => (
          <BasketCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Basket;
