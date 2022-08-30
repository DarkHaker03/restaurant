import { useUnit } from 'effector-react';
import { selectedFoodModel } from 'process/selected-food';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { INGREDIEENTS } from 'shared/api/ingridients/model';
import { useLowerbar } from 'shared/hooks';
import { Counter } from 'shared/ui/counter';
import styles from './styles.module.scss';

const FoodDetail: FC = () => {
  const navigate = useNavigate();
  const { $selectedFood, setCounterOfFood } = selectedFoodModel;
  const selectedFood = useUnit($selectedFood);
  const
    {
      counter,
      image,
      name,
      description,
      hasIngredients,
      weight,
    } = selectedFood;
  const counterProps = {
    leftBtn: () => {
      if (counter !== 1) {
        setCounterOfFood(counter - 1);
      } else {
        navigate('/');
      }
    },
    counter,
    rightBtn: () => {
      setCounterOfFood(counter + 1);
    },
    supplementStyles: {
      justifyContent: 'start',
    },
  };

  const sumPrice = useUnit(selectedFoodModel.$sumPriceOfSelectedFood);
  const link: string = '/food-detail-supplement';
  const text: string = `Заказать ${sumPrice}₽`;
  const whatToFollow = sumPrice;
  useLowerbar.withWatch(link, text, whatToFollow);

  return (
    <div>
      <img style={{ width: '100%' }} src={image} alt="1" />
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>
        <span>
          {weight}
          г
          <span style={{ margin: '0 5px 0 2px' }}> ·</span>
        </span>
        {description}
      </div>
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
