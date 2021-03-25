import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const size = '25px';

const Header = styled.header`
  width: 100%;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  max-width: 465px;
  width: 100%;
  background-color: #f2f7fb;
  border-radius: 0 0 25px 25px;
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  color: #919497;
`;

interface Link {
  activeClassName: string;
}

const StyledLink = styled(NavLink)<Link>`
  color: inherit;

  &.active > * {
    background-color: #003393;
    color: #00f8ea;
    transition: 0.2s linear;
  }
`;

const PageIcon = styled.div`
  border-radius: 7px;
  padding: 5px;
  display: flex;
  align-items: center;

  & svg {
    width: ${size};
    height: ${size};
  }

  &:hover {
    background-color: #003393;
    color: #00f8ea;
    transition: 0.2s linear;
  }
`;

export const Styled = {
  PageIcon,
  StyledLink,
  Header,
  Nav,
};
