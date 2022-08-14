import { createStore } from 'effector';
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

export const $menu = createStore<MenuKeys[]>(menuData);
