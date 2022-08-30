import { createEvent, restore } from 'effector';
// import { selectedFoodModel } from 'process/selected-food';

export const setText = createEvent<string>();
export const setLink = createEvent<string>();
export const setIsOpen = createEvent<boolean>();
// export const setCurrentPage = createEvent<string>();

export const $text = restore(setText, 'Заказать');
export const $link = restore(setLink, '/food-detail');
export const $isOpen = restore(setIsOpen, false);
// export const $currentPage = restore(setCurrentPage, '');

// sample({
//   source: selectedFoodModel.$sumPrice,
//   fn: (sumPrice) => sumPrice !== 0,
//   target: $isOpen,
// });

// sample({
//   source: {
//     sumPrice: selectedFoodModel.$sumPrice,
//     currentPage: $currentPage,
//     selectedFood: selectedFoodModel.$selectedFood,
//   },
//   fn: ({ sumPrice, currentPage, selectedFood: { counter, price } }) => {
//     const sumPriceOfSelectedFood = price * counter;
//     if (currentPage === '/food-detail') {
//       console.log(sumPriceOfSelectedFood);
//       return `Добавить ${sumPriceOfSelectedFood}`;
//     }
//     if (currentPage === '/food-detail-supplement') {
//       return 'Готово';
//     }
//     return `Заказать ${sumPrice}₽`;
//   },
//   target: setText,
// });
