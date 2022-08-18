import { FC } from 'react';
import { useUnit } from 'effector-react';
import { selectedFoodModel } from 'process/selectedFood';
import { Counter } from 'shared/ui/counter';
import cx from 'clsx';
import styles from './styles.module.scss';

const CardFood: FC<selectedFoodModel.ItemOfProductsKeys> = (item) => {
  const {
    id, image, name, weight, price,
  } = item;
  const {
    $selectedFood, $counter, setSelectedFood, DEFAULT_SELECTED_FOOD, setCounter,
  } = selectedFoodModel;
  const [selectedFood, counter] = useUnit([$selectedFood, $counter]);
  const isClickedOnPrice = selectedFood.id === id;
  const counterProps = {
    leftBtn: () => (
      counter !== 1 ? setCounter(counter - 1) : setSelectedFood(DEFAULT_SELECTED_FOOD)
    ),
    counter,
    rightBtn: () => setCounter(counter + 1),
  };
  return (
    <div className={cx(styles['card-food'], isClickedOnPrice && styles['border-bottom'])}>
      <img src={image} alt={`name: ${name} ,price: ${price}`} />
      <div className={styles.name}>{name}</div>
      <div className={styles.weight} style={isClickedOnPrice ? { margin: '0 0 21px 12px' } : {}}>{`${weight} г`}</div>
      {
        isClickedOnPrice
          ? (
            <Counter {...counterProps} />
          )
          : <div className={styles.price} onClick={() => setSelectedFood(item)}>{`${price} ₽`}</div>
      }
    </div>
  );
};

export default CardFood;
