import { FC } from 'react';
import { Route, Routes } from 'react-router';
import { Container } from 'shared/ui/container';
import { Header } from 'widgets/header';
import { Main } from 'pages/main';
import { LowerBar } from 'widgets/lower-bar';
import { Basket } from './basket';
import { FoodDetail } from './food-detail';
import { FoodDetailSupplement } from './food-detail-supplement';

const Pages: FC = () => (
  <>
    <Header />
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/food-detail-supplement" element={<FoodDetailSupplement />} />
        <Route path="/food-detail" element={<FoodDetail />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Container>
    <LowerBar />
  </>
);

export default Pages;
