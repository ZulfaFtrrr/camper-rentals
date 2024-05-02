import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/global.module.css';

import SharedLayout from 'components/SharedLayout/SharedLayout';
// import Spinner from './components/Spinner/Spinner';
// import Loader from './components/Loader/Loader';

// const API_ENDPOINT = import.meta.env.API_ENDPOINT;
// console.log(API_ENDPOINT);

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage/FavoritesPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    // <AppWrapper>
    //  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<CatalogPage />} path="/catalog" />
        <Route element={<FavoritesPage />} path="/favorites" />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
    // </Suspense>
    // </AppWrapper>
  );
}
export default App;
