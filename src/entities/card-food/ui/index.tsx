import { FC, useState } from 'react';
import cx from 'clsx';
import { ItemOfProductsKeys } from 'pages/main/model';
import styles from './styles.module.scss';

const CardFood: FC<ItemOfProductsKeys> = ({
  id, image, name, price, weight,
}) => {
  const [isClickedOnPrice, setIsClickedOnPrice] = useState(false);
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    counter !== 0 ? setCounter(counter - 1) : setIsClickedOnPrice(false);
  };
  return (
    <div key={id} className={cx(styles['card-food'], isClickedOnPrice && styles['border-bottom'])}>
      <img src={image} alt={`name: ${name} ,price: ${price}`} />
      <div className={styles.name}>{name}</div>
      <div className={styles.weight}>{`${weight} г`}</div>
      {
        isClickedOnPrice
          ? (
            <div className={styles.priceClicked}>
              <div onClick={handleClick} className={styles.counterBtn}>-</div>
              <div className={styles.counter}>{counter}</div>
              <div onClick={() => setCounter(counter + 1)} className={styles.counterBtn}>+</div>
            </div>
          )
          : <div className={styles.price} onClick={() => setIsClickedOnPrice(true)}>{`${price} ₽`}</div>
      }
    </div>
  );
};

export default CardFood;
