import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useUnit } from 'effector-react';
import img from 'shared/assets/img/basket.svg';
import { BasketCard } from 'entities/basket-card';
import { selectedFoodModel } from 'process/selected-food';
import { useLowerbar } from 'shared/hooks';
import styles from './styles.module.scss';

const Basket: FC = () => {
  const { $selectedMenu, resetMenu } = selectedFoodModel;
  const basket = useUnit($selectedMenu);
  const sumPrice = useUnit(selectedFoodModel.$sumPrice);

  const link: string = '';
  const text: string = `Заказать ${sumPrice}₽`;
  const whatToFollow = sumPrice;
  useLowerbar.withWatch(link, text, whatToFollow);

  console.log('page basket: map without normal key');

  return (
    <div>
      <div className={styles['basket-row']}>
        <span className={styles.basket}>Корзина</span>
        <Link to="/" onClick={() => resetMenu()}>
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
