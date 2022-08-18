import { FC, useEffect } from 'react';
import { lowerBarModel } from 'widgets/lower-bar';
import { Link, useNavigate } from 'react-router-dom';
import { useUnit } from 'effector-react';
import img from 'shared/assets/img/basket.svg';
import { BasketCard } from 'entities/basket-card';
import { basketModel } from '..';
import styles from './styles.module.scss';

const Basket: FC = () => {
  const navigate = useNavigate();
  const { setLink, setText, setIsOpen } = lowerBarModel;
  const basket = useUnit(basketModel.$basket);
  const sumPrice = basket.reduce((sum, item) => {
    return sum + item.price * item.counter;
  }, 0);
  console.log('page basket: map without normal key');
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
        <Link to="/" onClick={() => basketModel.setBasket([])}>
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
