import { FC } from 'react';
import { useUnit } from 'effector-react';
import { selectedFoodModel } from 'process/selected-food';
import { useNavigate } from 'react-router';
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
  const navigate = useNavigate();
  const handleClick = () => {
    setSelectedFood(item);
    navigate('/food-detail');
  };
  return (
    <div className={cx(styles['card-food'], isClickedOnPrice && styles['border-bottom'])}>
      <div onClick={handleClick}>
        <img src={image} alt={`name: ${name} ,price: ${price}`} />
        <div className={styles.name}>{name}</div>
      </div>
      <div style={{ marginBottom: '30px' }}>
        <span className={styles.weight} style={isClickedOnPrice ? { margin: '0 0 21px 12px' } : {}}>{`${weight} г`}</span>
        {isClickedOnPrice && (
          <span className={styles['pricea-after-clicked']}>
            <span>·</span>
            {price * counter}
            ₽
          </span>
        )}
      </div>
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
