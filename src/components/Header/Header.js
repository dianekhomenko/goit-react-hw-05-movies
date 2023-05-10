import { Navigation } from './Header.styled';
import { HeaderLink } from './Header.styled';

const Header = () => {
  return (
    <Navigation>
      <HeaderLink to="/goit-react-hw-05-movies/">Home</HeaderLink>
      <HeaderLink to="/goit-react-hw-05-movies/movies">Movies</HeaderLink>
    </Navigation>
  );
};

export default Header;
