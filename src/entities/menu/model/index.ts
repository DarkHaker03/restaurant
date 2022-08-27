import { createEvent, restore } from 'effector';
import { menuApi } from 'shared/api/menu';

const firstItem = menuApi.$menu.getState()[0];

const setSelectedItem = createEvent<menuApi.MenuKeys>();

const $selectedItem = restore(setSelectedItem, firstItem);

export { $selectedItem, setSelectedItem };
