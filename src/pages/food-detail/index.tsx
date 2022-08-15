import { useUnit } from 'effector-react';
import { lowerBarModel } from 'entities/lower-bar';
import { selectedFoodModel } from 'process/selectedFood';
import { FC, useEffect } from 'react';
import { Counter } from 'shared/counter';

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
      <div>{name}</div>
      <div>{description}</div>
      Выберите количество
      <Counter {...counterProps} />
      {hasIngredients
        ? (
          <div>
            <div>Выберите состав</div>
            <div>Вид лапши</div>
            <div>Соусы на выбор</div>
            <div>Дополнительно</div>
          </div>
        )
        : null}
    </div>
  );
};

export default FoodDetail;
