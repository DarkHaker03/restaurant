import { createEvent, restore, sample } from 'effector';
import { lowerBarModel } from 'entities/lower-bar';
import { $basket } from 'pages/basket/model';

export type ItemOfProductsKeys = {
  id: number,
  description: string,
  image: string,
  hasIngredients: boolean,
  name: string,
  price: number,
  weight: string
}
export const defaultSelectedFood = {
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

export const $selectedFood = restore<ItemOfProductsKeys>(setSelectedFood, defaultSelectedFood);
export const $counter = restore<number>(setCounter, 1);

$counter.reset(setSelectedFood);
sample({
  clock: setSelectedFood,
  fn: ({ id }) => id !== 0,
  target: lowerBarModel.setIsOpen,
});
sample({
  source: { newItem: $selectedFood, pathOfNewItem: $counter, prevState: $basket },
  clock: lowerBarModel.clicked,
  filter: () => lowerBarModel.$link.getState() === '/basket',
  fn: ({ newItem, pathOfNewItem, prevState }) => [
    ...prevState, { ...newItem, counter: pathOfNewItem },
  ],
  target: $basket,
});
