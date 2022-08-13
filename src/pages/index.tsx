import React, { FC } from 'react';
import { Route, Routes } from 'react-router';

const Basket = React.lazy(() => import('./basket'));
const FoodDetail = React.lazy(() => import('./food-detail'));
const FoodDetailSupplement = React.lazy(() => import('./food-detail-supplement'));
const MenuOfFoof = React.lazy(() => import('./food-menu'));
const Main = React.lazy(() => import('./main'));

const Pages: FC = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/menu-food" element={<MenuOfFoof />} />
    <Route path="/basket" element={<Basket />} />
    <Route path="/food-detail-supplement" element={<FoodDetailSupplement />} />
    <Route path="/food-detail" element={<FoodDetail />} />
  </Routes>
);

export default Pages;
