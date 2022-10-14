import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';
import { addBackToTop } from "vanilla-back-to-top";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() =>
  import('../pages/HomePage/MoviesPage/MoviesPage')
);
const MovieDetail = lazy(() => import('./MovieDetail/MovieDetail'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  useEffect(() => {
    addBackToTop({
      diameter: 56,
      backgroundColor: 'rgb(75, 0, 130)',
      textColor: '#fff'
    });
  }, []);

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
