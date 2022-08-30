import { createStore, sample } from 'effector';
import { selectedFoodModel } from 'process/selected-food';
import { menuApi } from 'shared/api/menu';

export type ExpantionOfProductsKeys = {
  selectedIngridients: string[],
  selected: boolean,
  counter: number,
} & selectedFoodModel.ItemOfProductsKeys;

type MenuKeys = {
  id: number,
  name: string,
  products: ExpantionOfProductsKeys[],
}

const $defaultMenu = menuApi.$menu.map((menu) => {
  return menu.map((category) => {
    return {
      ...category,
      products: category.products.map((defaultItem) => {
        return {
          ...defaultItem,
          selectedIngridients: [],
          selected: false,
          counter: 1,
        };
      }),
    };
  });
});

export const $menu = createStore<MenuKeys[]>($defaultMenu.getState());

sample({
  source: $defaultMenu,
  clock: selectedFoodModel.$selectedMenu,
  fn: (menu: MenuKeys[], selectedMenu: ExpantionOfProductsKeys[]) => {
    console.log(selectedMenu);
    return menu.map((category) => {
      return {
        ...category,
        products: category.products.map((product) => {
          if (selectedMenu.some((item) => item.id === product.id)) {
            return selectedMenu.filter((selectedProduct) => selectedProduct.id === product.id)[0];
          }
          return product;
        }),
      };
    });
  },
  target: $menu,
});
