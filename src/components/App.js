import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from 'pages/Home'
import {Movie} from 'pages/Movie'

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<Movie />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
