import { createStore } from 'effector';
import { selectedFoodModel } from 'process/selected-food';
import menuData from 'shared/api/menu/index.json';

export type MenuKeys = {
  id: number,
  name: string,
  products: selectedFoodModel.ItemOfProductsKeys[]
}

export const $menu = createStore<MenuKeys[]>(menuData);
