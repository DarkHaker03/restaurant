import { FC } from 'react';
import { useUnit } from 'effector-react';
import cx from 'clsx';
import { setCounter } from 'pages/main/model';
import { mainModel } from 'pages/main';
import styles from './styles.module.scss';

const CardFood: FC<mainModel.ItemOfProductsKeys> = ({
  id, image, name, price, weight,
}) => {
  const { $idOfClickedCardFood, $counter } = mainModel;
  const [idOfClickedCardFood, counter] = useUnit([$idOfClickedCardFood, $counter]);
  const isClickedOnPrice = idOfClickedCardFood === id;
  const handleClick = () => {
    counter !== 1 ? setCounter(counter - 1) : mainModel.setIdOfClickedCardFood(0);
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
          : <div className={styles.price} onClick={() => mainModel.setIdOfClickedCardFood(id)}>{`${price} ₽`}</div>
      }
    </div>
  );
};

export default CardFood;
