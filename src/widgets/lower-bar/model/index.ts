import { createEvent, restore } from 'effector';

export const setText = createEvent<string>();
export const setLink = createEvent<string>();
export const setIsOpen = createEvent<boolean>();
export const clicked = createEvent();

export const $text = restore(setText, 'Перейти к оформлению заказа');
export const $link = restore(setLink, '/food-detail');
export const $isOpen = restore(setIsOpen, false);
