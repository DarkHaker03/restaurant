import { createStore, createEvent } from 'effector';
import { selectedFoodModel } from 'process/selectedFood';

export type ItemOfProductsKeysWithCounter = selectedFoodModel.ItemOfProductsKeys & {
  counter: number,
};

export const setBasket = createEvent<ItemOfProductsKeysWithCounter[]>();

export const $basket = createStore<ItemOfProductsKeysWithCounter[]>([]);

$basket
  .on(setBasket, (_, newState) => newState);
