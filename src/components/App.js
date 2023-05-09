import { Routes, Route } from 'react-router-dom';
import { Home } from 'components/Home/Home.js'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Home />} />
        <Route path="/movies/:movieId/reviews" element={<Cast />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
