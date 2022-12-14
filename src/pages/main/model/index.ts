import { createStore } from 'effector';
import { selectedFoodModel } from 'process/selectedFood';
import menuData from 'shared/assets/data/menu/menu.json';

export type MenuKeys = {
  id: number,
  name: string,
  products: selectedFoodModel.ItemOfProductsKeys[]
}

export const $menu = createStore<MenuKeys[]>(menuData);
