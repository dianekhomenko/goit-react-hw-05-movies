import { Routes, Route, Link } from 'react-router-dom';
import { Home } from 'components/Home/Home'

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
