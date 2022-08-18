import { createEvent, restore } from 'effector';

export type ItemOfProductsKeys = {
  id: number,
  description: string,
  image: string,
  hasIngredients: boolean,
  name: string,
  price: number,
  weight: string
}
export const DEFAULT_SELECTED_FOOD = {
  id: 0,
  description: '',
  image: '',
  hasIngredients: false,
  name: '',
  price: 0,
  weight: '',
};

export const setSelectedFood = createEvent<ItemOfProductsKeys>();
export const setCounter = createEvent<number>();

export const $selectedFood = restore<ItemOfProductsKeys>(setSelectedFood, DEFAULT_SELECTED_FOOD);
export const $counter = restore<number>(setCounter, 1);

$counter.reset(setSelectedFood);
