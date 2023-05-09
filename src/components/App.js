import { Routes, Route, Link } from 'react-router-dom';
import { Home } from 'pages/Home'
import {Movie} from 'pages/Movie'

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<Movie />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
