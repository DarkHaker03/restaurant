import { Menu } from 'entities/menu';
import { FC } from 'react';
import Products from './products';

const Main: FC = () => {
  console.log(3);
  return (
    <>
      <Menu />
      <Products />
    </>
  );
};

export default Main;
