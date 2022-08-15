import { FC, useEffect } from 'react';
import { lowerBarModel } from 'entities/lower-bar';
import { Link } from 'react-router-dom';
import { useUnit } from 'effector-react';
import img from 'shared/assets/img/basket.svg';
import { Counter } from 'shared/counter';
import { $basket, ItemOfProductsKeysWithCounter, setBasket } from './model';
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
  const counterProps = {
    lefBtn: (item: ItemOfProductsKeysWithCounter) => {
      const newItem = { ...item, counter: item.counter - 1 };
      const newBasket = basket.map((i) => { return i.id === newItem.id ? newItem : i; });
      setBasket(newBasket);
    },
    rightBtn: (item: ItemOfProductsKeysWithCounter) => {
      const newItem = { ...item, counter: item.counter + 1 };
      const newBasket = basket.map((i) => { return i.id === newItem.id ? newItem : i; });
      setBasket(newBasket);
    },
  };
  return (
    <div>
      <div>
        <span>Корзина</span>
        <Link to="/" onClick={() => setBasket([])}>
          <img src={img} alt="" />
        </Link>
      </div>
      <div>
        {basket.map((item) => (
          <div className={styles['item-of-backet']}>
            <img src={item.image} alt="" className={styles.img} />
            <div className={styles.container}>
              <div className={styles['top-row']}>
                <span>{item.name}</span>
                <span>{`${item.price * item.counter} ₽`}</span>
              </div>
              <Counter
                leftBtn={() => counterProps.lefBtn(item)}
                counter={item.counter}
                rightBtn={() => counterProps.rightBtn(item)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basket;
