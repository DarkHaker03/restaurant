import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Container } from 'shared/container';
import { Header } from 'widgets/header';
import { Main } from 'pages/main';
import { LowerBar } from 'entities/lower-bar';
import { Loading } from 'shared/loading';

const Basket = React.lazy(() => import('./basket'));
const FoodDetail = React.lazy(() => import('./food-detail'));
const FoodDetailSupplement = React.lazy(() => import('./food-detail-supplement'));
// const Main = React.lazy(() => import('./main/ui'));

const Pages: FC = () => (
  <>
    <Header />
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Suspense fallback={<Loading />}><Basket /></Suspense>} />
        <Route path="/food-detail-supplement" element={<Suspense fallback={<Loading />}><FoodDetailSupplement /></Suspense>} />
        <Route path="/food-detail" element={<Suspense fallback={<Loading />}><FoodDetail /></Suspense>} />
      </Routes>
    </Container>
    <LowerBar />
  </>
);

export default Pages;
