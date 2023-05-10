import { Routes, Route } from 'react-router-dom';
import { Container } from 'components/Container.styled';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home'));
const Header = lazy(() => import('./Header/Header'));
const Movie = lazy(() => import('pages/Movie'));
const Cast = lazy(() => import('components/MovieDetails/Cast'));
const Reviews = lazy(() => import('components/MovieDetails/Reviews'));
const Movies = lazy(() => import('pages/Movies'));

export const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<Movie />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
};
