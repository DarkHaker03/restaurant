import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Container } from 'shared/container';
import { Header } from 'widgets/header';
import { Main } from 'pages/main';
import { LowerBar } from 'entities/lower-bar';
import { Loading } from 'shared/loading';
import Basket from './basket';
import FoodDetail from './food-detail';
import FoodDetailSupplement from './food-detail-supplement';

const Pages: FC = () => (
  <>
    <Header />
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/food-detail-supplement" element={<Suspense fallback={<Loading />}><FoodDetailSupplement /></Suspense>} />
        <Route path="/food-detail" element={<Suspense fallback={<Loading />}><FoodDetail /></Suspense>} />
        <Route path="/basket" element={<Suspense fallback={<Loading />}><Basket /></Suspense>} />
      </Routes>
    </Container>
    <LowerBar />
  </>
);

export default Pages;
