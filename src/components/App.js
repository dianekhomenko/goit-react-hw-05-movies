import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Header } from './Header/Header';
import { Movie } from 'pages/Movie';
import { Cast } from 'components/MovieDetails/Cast';
import { Reviews } from 'components/MovieDetails/Reviews';
import { Container } from 'components/Container.styled'
import {Movies} from 'pages/Movies'

export const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/movies/:movieId" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
};
