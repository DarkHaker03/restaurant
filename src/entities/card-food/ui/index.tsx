import React, { FC } from 'react';
import { selectedFoodModel } from 'process/selected-food';
import { mainModel } from 'pages/main';
import { useNavigate } from 'react-router';
import { Counter } from 'shared/ui/counter';
import cx from 'clsx';
import styles from './styles.module.scss';

const CardFood: FC<mainModel.ExpantionOfProductsKeys> = React.memo((item) => {
  const {
    id,
    counter,
    image,
    name,
    weight,
    price,
    hasIngredients,
    selected,
  } = item;
  const {
    addItemInSelectedMenu,
    setCounter,
    deteleItemInSelectedMenu,
    setSelectedFood,
  } = selectedFoodModel;

  const isClickedOnPrice = selected;

  const counterProps = {
    leftBtn: () => {
      if (counter !== 1) {
        setCounter({ id, counter: counter - 1 });
      } else {
        deteleItemInSelectedMenu(id);
      }
    },
    counter,
    rightBtn: () => {
      setCounter({ id, counter: counter + 1 });
    },
  };

  const navigate = useNavigate();
  const selectItemAndNavigate = () => {
    setSelectedFood(item);
    navigate('/food-detail');
  };
  const selectItemAndNavigateWithIf = () => {
    if (hasIngredients) {
      setSelectedFood(item);
      navigate('/food-detail');
    } else {
      addItemInSelectedMenu(item);
    }
  };

  return (
    <div className={cx(styles['card-food'], isClickedOnPrice && styles['border-bottom'])}>
      <div onClick={selectItemAndNavigate}>
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
          ? <Counter {...counterProps} />
          : <div className={styles.price} onClick={selectItemAndNavigateWithIf}>{`${price} ₽`}</div>
      }
    </div>
  );
});

export default CardFood;
