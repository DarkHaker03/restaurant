import { useUnit } from 'effector-react';
import { lowerBarModel } from 'widgets/lower-bar';
import { selectedFoodModel } from 'process/selectedFood';
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Counter } from 'shared/ui/counter';
import styles from './styles.module.scss';

export type ItemsOfArguments = {
  name: string,
  price: number,
}

export type IngridiensArguments = {
  type: string,
  inputType: string,
  items: ItemsOfArguments[]
}

export const INGREDIEENTS: IngridiensArguments[] = [
  {
    type: 'Вид лапши',
    inputType: 'radio',
    items: [
      { name: 'Гречневая', price: 0 },
      { name: 'Яичная', price: 0 },
      { name: 'Рисовая', price: 0 },
      { name: 'Фунчоза', price: 0 },
      { name: 'Стеклянная', price: 0 },
      { name: 'Пшеничная', price: 0 },
    ],
  },
  {
    type: 'Соусы на выбор',
    inputType: 'radio',
    items: [
      { name: '1', price: 0 },
      { name: '2', price: 0 },
      { name: '3', price: 0 },
    ],
  },
  {
    type: 'Дополнительно',
    inputType: 'checkbox',
    items: [
      { name: 'Перец халапеньо1', price: 0 },
      { name: 'Двойная порци2я курицы', price: 0 },
      { name: 'Перец халапе3ньо', price: 0 },
      { name: 'Двойная порци4я курицы', price: 0 },
      { name: 'Перец халапен5ьо', price: 0 },
      { name: 'Двойная порци6я курицы', price: 0 },
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
