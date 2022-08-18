import { createEvent, restore, sample } from 'effector';
import { selectedFoodModel } from 'process/selected-food';

export const setText = createEvent<string>();
export const setLink = createEvent<string>();
export const setIsOpen = createEvent<boolean>();
export const clicked = createEvent();

export const $text = restore(setText, 'Перейти к оформлению заказа');
export const $link = restore(setLink, '/food-detail');
export const $isOpen = restore(setIsOpen, false);

sample({
  clock: selectedFoodModel.setSelectedFood,
  fn: ({ id }) => id !== 0,
  target: $isOpen,
});
