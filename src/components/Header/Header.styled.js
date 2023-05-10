import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  background-color: #efefef;
  padding: 30px;
  gap: 20px;
`;

export const HeaderLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;