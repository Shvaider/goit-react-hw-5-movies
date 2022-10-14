import { useState, useEffect } from 'react';
import { fetchTrendingFilms } from '../../services/Api';
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import { Title, Button } from './HomePage.styled';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function trendingMovies() {
      try {
        setLoading(true);
        const data = await fetchTrendingFilms(page);
        setMovies(movies => [...movies, ...data.results]);
      } finally {
        setLoading(false);
      }
    }

    trendingMovies();
  }, [page]);

  function onLoadMore() {
    setPage(page => page + 1);
  }

  return (
    <>
      <Title>Trending</Title>
      {movies && <MoviesList items={movies} />}

      {loading ? (
        <Loader />
      ) : (
        <Button type="button" onClick={onLoadMore}>
          load more
        </Button>
      )}
    </>
  );
}