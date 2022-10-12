import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() =>
  import('../pages/HomePage/MoviesPage/MoviesPage')
);
const MovieDetail = lazy(() => import('./MovieDetail/MovieDetail'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
