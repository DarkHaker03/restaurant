import { useUnit } from 'effector-react';
import { lowerBarModel } from 'entities/lower-bar';
import { selectedFoodModel } from 'process/selectedFood';
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Counter } from 'shared/counter';
import styles from './styles.module.scss';

export type ItemsOfArguments = {
  name: string,
  price: number
}

export type IngridiensArguments = {
  type: string,
  items: ItemsOfArguments[]
}

export const INGREDIEENTS: IngridiensArguments[] = [
  {
    type: 'Вид лапши',
    items: [
      { name: 'Гречневая', price: 0 },
      { name: 'Гречневая1', price: 0 },
      { name: 'Гречневая2', price: 0 },
    ],
  },
  {
    type: 'Вид лапши1',
    items: [
      { name: '2Гречневая', price: 0 },
      { name: '2Гречневая3', price: 0 },
      { name: '2Гречневая2', price: 0 },
    ],
  },
  {
    type: 'Вид лапши2',
    items: [
      { name: '3Гречневая', price: 0 },
      { name: '3Гречневая4', price: 0 },
      { name: '3Гречневая2', price: 0 },
      { name: '3Гречневая3', price: 0 },
    ],
  },
  {
    type: 'Вид лапши3',
    items: [
      { name: '4Гречневая', price: 0 },
      { name: '4Гречневая5', price: 0 },
      { name: '4Гречневая2', price: 0 },
      { name: '4Гречневая3', price: 0 },
    ],
  },
];

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
