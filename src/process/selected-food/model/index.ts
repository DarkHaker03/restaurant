import { createEvent, createStore } from 'effector';
import { mainModel } from 'pages/main';

export type ItemOfProductsKeys = {
  id: number,
  description: string,
  image: string,
  hasIngredients: boolean,
  name: string,
  price: number,
  weight: string
}
export const DEFAULT_FOOD = {
  id: 0,
  description: '',
  image: '',
  hasIngredients: false,
  name: '',
  price: 0,
  weight: '',
  selectedIngridients: [],
  selected: false,
  counter: 0,
};

// export const setSelectedFood = createEvent<ItemOfProductsKeys>();
// export const setCounter = createEvent<number>();

// export const $selectedFood = restore<ItemOfProductsKeys>(setSelectedFood, DEFAULT_SELECTED_FOOD);
// export const $counter = restore<number>(setCounter, 1);

// $counter.reset(setSelectedFood);

export const setSelectedMenu = createEvent<mainModel.ExpantionOfProductsKeys[]>();
export const addItemInSelectedMenu = createEvent<mainModel.ExpantionOfProductsKeys>();
export const deteleItemInSelectedMenu = createEvent<number>();
export const setSelectedFood = createEvent<mainModel.ExpantionOfProductsKeys>();
export const setCounter = createEvent<{ id: number, counter: number }>();
export const setCounterOfFood = createEvent<number>();
export const resetMenu = createEvent();

export const $selectedMenu = createStore<mainModel.ExpantionOfProductsKeys[]>([]);
export const $selectedFood = createStore<mainModel.ExpantionOfProductsKeys>(DEFAULT_FOOD);
export const $sumPrice = $selectedMenu.map(
  (selectedMenu) => selectedMenu.reduce((sum, { price, counter }) => {
    return sum + price * counter;
  }, 0),
);
export const $sumPriceOfSelectedFood = $selectedFood.map(
  ({ price, counter }) => price * counter,
);
// .on(addItemInSelectedMenu, (state, newItem) => state.map(
//   (itemOfState) => {
//     return itemOfState.id === newItem.id ? { ...newItem, selected: true } : itemOfState;
//   },
// ))

$selectedMenu
  .on(addItemInSelectedMenu, (state, newItem) => [...state, { ...newItem, selected: true }])
  .on(deteleItemInSelectedMenu, (state, idOfitemForDelete) => state.filter(
    (item) => item.id !== idOfitemForDelete,
  ))
  .on(setSelectedMenu, (_, newState) => newState)
  .on(setCounter, (state, { counter, id }) => state.map(
    (item) => {
      return item.id === id ? { ...item, counter } : item;
    },
  ))
  .reset(resetMenu);

// .on(setSelectedFood, (_, idOfNewState) => $selectedMenu.getState().filter(
//   (food) => food.id === idOfNewState,
// )[0])

// sample({
//   source: $selectedFood,
//   clock: $selectedMenu,
//   fn: (selectedFood, selectedMenu) => selectedMenu.filter(
//     (item) => selectedFood.id === item.id,
//   )[0],
//   target: $selectedFood,
// });

// sample({
//   source: $selectedMenu,
//   clock: setIdOFSelectedFood,
//   fn: (menu, idOFSelectedFood) => menu.filter((item) => item.id === idOFSelectedFood)[0],
//   target: $selectedFood,
// });

// $selectedMenu.updates.watch(() => {
//   setIdOFSelectedFood($selectedFood.getState().id);
// });

$selectedFood
  .on(setSelectedFood, (_, newState) => newState)
  .on(setCounterOfFood, (prevState, newCounter) => {
    return { ...prevState, counter: newCounter };
  });
