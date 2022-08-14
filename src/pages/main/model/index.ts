import {
  createEvent, createStore, restore, sample,
} from 'effector';
import { lowerBarModel } from 'entities/lower-bar';
import menuData from 'shared/assets/data/menu/menu.json';

export type ItemOfProductsKeys = {
  id: number,
  description: string,
  image: string,
  hasIngredients: boolean,
  name: string,
  price: number,
  weight: string
}
export type MenuKeys = {
  id: number,
  name: string,
  products: ItemOfProductsKeys[]
}

export const setIdOfClickedCardFood = createEvent<number>();
export const setCounter = createEvent<number>();

export const $menu = createStore<MenuKeys[]>(menuData);
export const $idOfClickedCardFood = restore<number>(setIdOfClickedCardFood, 0);
export const $counter = restore<number>(setCounter, 1);

$counter.reset(setIdOfClickedCardFood);
sample({
  clock: setIdOfClickedCardFood,
  fn: (id) => id !== 0,
  target: lowerBarModel.setIsOpen,
});
