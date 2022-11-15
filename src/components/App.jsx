import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Converter = lazy(() => import('pages/Converter'));
const Exchange = lazy(() => import('pages/Exchange'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route to="/converter" element={<Converter />}></Route>
        <Route to="/exchange" element={<Exchange />}></Route>
      </Route>
    </Routes>
  );
};
