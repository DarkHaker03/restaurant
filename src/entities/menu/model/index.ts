import { createEvent, restore } from 'effector';

const ARRAY_OF_MENU = [
  { name: 'FEWFWEFWEF0', id: 0 },
  { name: 'FEWFWEFWEF1', id: 1 },
  { name: 'FEWFWEFWEF2', id: 2 },
  { name: 'FEWFWEFWEF3', id: 3 },
  { name: 'FEWFWEFWEF4', id: 4 },
  { name: 'FEWFWEFWEF5', id: 5 },
  { name: 'FEWFWEFWEF6', id: 6 },
];

const setSelectedId = createEvent<number>();

const $selectedId = restore(setSelectedId, 0);

export { ARRAY_OF_MENU, $selectedId, setSelectedId };
