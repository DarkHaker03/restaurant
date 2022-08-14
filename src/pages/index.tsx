import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Container } from 'shared/container';
import { Header } from 'widgets/header';
import { Main } from 'pages/main';
import { LowerBar, lowerBarModel } from 'entities/lower-bar';
import { Loading } from 'shared/loading';
import { useUnit } from 'effector-react';

const Basket = React.lazy(() => import('./basket'));
const FoodDetail = React.lazy(() => import('./food-detail'));
const FoodDetailSupplement = React.lazy(() => import('./food-detail-supplement'));
const MenuOfFoof = React.lazy(() => import('./food-menu'));
// const Main = React.lazy(() => import('./main/ui'));

const Pages: FC = () => {
  const isOpen = useUnit(lowerBarModel.$isOpen);
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu-food" element={<Suspense fallback={<Loading />}><MenuOfFoof /></Suspense>} />
          <Route path="/basket" element={<Suspense fallback={<Loading />}><Basket /></Suspense>} />
          <Route path="/food-detail-supplement" element={<Suspense fallback={<Loading />}><FoodDetailSupplement /></Suspense>} />
          <Route path="/food-detail" element={<Suspense fallback={<Loading />}><FoodDetail /></Suspense>} />
        </Routes>
      </Container>
      {isOpen && <LowerBar />}
    </>
  );
};

export default Pages;
