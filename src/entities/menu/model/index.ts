import { createEvent, restore } from 'effector';
import { $menu, MenuKeys } from 'pages/main/model';

const firstItem = $menu.getState()[0];

const setSelectedItem = createEvent<MenuKeys>();

const $selectedItem = restore(setSelectedItem, firstItem);

export { $selectedItem, setSelectedItem };
