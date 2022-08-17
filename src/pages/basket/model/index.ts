import { createStore, createEvent } from 'effector';
import { selectedFoodModel } from 'process/selectedFood';

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
