import { Navigation } from './Header.styled';
import { HeaderLink } from './Header.styled';

const Header = () => {
  return (
    <Navigation>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/movies">Movies</HeaderLink>
    </Navigation>
  );
};

export default Header;
