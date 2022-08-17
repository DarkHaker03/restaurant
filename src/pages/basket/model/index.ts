import { createStore, createEvent, sample } from 'effector';
import { selectedFoodModel } from 'process/selectedFood';
import { lowerBarModel } from 'entities/lower-bar';

export type ItemOfProductsKeysWithCounter = selectedFoodModel.ItemOfProductsKeys & {
  counter: number,
  isTable?: boolean,
};
const DEFAULT_STATE = {
  id: 3,
  description: '',
  image: '',
  hasIngredients: false,
  name: 'Номер стола',
  price: 0,
  weight: '',
  counter: 1,
  isTable: true,
};

export const setBasket = createEvent<ItemOfProductsKeysWithCounter[]>();

export const $basket = createStore<ItemOfProductsKeysWithCounter[]>([DEFAULT_STATE]);

$basket
  .on(setBasket, (_, newState) => newState);
sample({
  source: {
    newItem: selectedFoodModel.$selectedFood,
    pathOfNewItem: selectedFoodModel.$counter,
    prevState: $basket,
    link: lowerBarModel.$link,
  },
  clock: lowerBarModel.clicked,
  filter: ({ link }) => link === '/basket',
  fn: ({ newItem, pathOfNewItem, prevState }) => [
    { ...newItem, counter: pathOfNewItem }, ...prevState,
  ],
  target: $basket,
});
