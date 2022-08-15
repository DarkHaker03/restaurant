import { createStore } from 'effector';
import { selectedFoodModel } from 'process/selectedFood';

export type ItemOfProductsKeysWithCounter = selectedFoodModel.ItemOfProductsKeys & {
  counter: number,
};

export const $basket = createStore<ItemOfProductsKeysWithCounter[]>([]);
