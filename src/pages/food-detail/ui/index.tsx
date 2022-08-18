import { useUnit } from 'effector-react';
import { lowerBarModel } from 'widgets/lower-bar';
import { selectedFoodModel } from 'process/selected-food';
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { INGREDIEENTS } from 'shared/api/ingridients';
import { Counter } from 'shared/ui/counter';
import styles from './styles.module.scss';

const FoodDetail: FC = () => {
  const { $selectedFood, $counter, setCounter } = selectedFoodModel;
  const [
    {
      image, name, description, hasIngredients, price,
    }, counter,
  ] = useUnit([$selectedFood, $counter]);
  const { setLink, setText, setIsOpen } = lowerBarModel;
  const counterProps = {
    leftBtn: () => (counter !== 1 ? setCounter(counter - 1) : null),
    counter,
    rightBtn: () => setCounter(counter + 1),
    supplementStyles: {
      justifyContent: 'start',
    },
  };
  useEffect(() => {
    setIsOpen(true);
    setLink('/basket');
    setText(`Добавить к заказу | ${counter * price} ₽`);
  }, []);
  useEffect(() => {
    setText(`Добавить к заказу | ${counter * price} ₽`);
  }, [counter]);
  return (
    <div>
      <img style={{ width: '100%' }} src={image} alt="1" />
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.h4}> Выберите количество</div>
      <Counter {...counterProps} />
      {hasIngredients
        ? (
          <div>
            <div className={styles.h4}>Выберите состав </div>
            {INGREDIEENTS.map(({ type }) => (
              <div className={styles.supplementWord} key={type}>
                {type}
                <Link className={styles.supplementBtn} to="/food-detail-supplement">Выбрать</Link>
              </div>
            ))}
          </div>
        )
        : null}
    </div>
  );
};

export default FoodDetail;
