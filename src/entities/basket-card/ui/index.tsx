import { $basket, ItemOfProductsKeysWithCounter, setBasket } from 'pages/basket/model';
import { FC } from 'react';
import { Counter } from 'shared/counter';
import { useUnit } from 'effector-react';
import styles from './styles.module.scss';

type Props = {
  item: ItemOfProductsKeysWithCounter
}

const BasketCard: FC<Props> = ({ item }) => {
  const basket = useUnit($basket);
  const counterProps = {
    lefBtn: () => {
      const newItem = { ...item, counter: item.counter - 1 };
      if (item.counter !== 1) {
        const newBasket = basket.map((i) => { return i.id === newItem.id ? newItem : i; });
        setBasket(newBasket);
      } else {
        const newBasket = basket.filter((i) => { return i.id !== newItem.id; });
        setBasket(newBasket);
      }
    },
    rightBtn: () => {
      const newItem = { ...item, counter: item.counter + 1 };
      const newBasket = basket.map((i) => { return i.id === newItem.id ? newItem : i; });
      setBasket(newBasket);
    },
  };
  return (
    <div className={styles['item-of-backet']}>
      <img src={item.image} alt="" className={styles.img} />
      <div className={styles.container}>
        <div className={styles['top-row']}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.price}>{`${item.price * item.counter} ₽`}</span>
        </div>
        <Counter
          leftBtn={() => counterProps.lefBtn()}
          counter={item.counter}
          rightBtn={() => counterProps.rightBtn()}
          supplementStyles={{ justifyContent: 'start' }}
          supplementStylesOfCounter={{ margin: '0 14px' }}
        />
      </div>
    </div>
  );
};

export default BasketCard;
