import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const size = '25px';
export const headerHeight = 70;

const Header = styled.header`
  max-width: 465px;
  width: 100%;
  height: ${headerHeight}px;
  display: inline-flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: auto;
`;

const Nav = styled.nav`
  width: 100%;
  background-color: #f2f7fb;
  border-radius: 0 0 25px 25px;
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  color: #919497;
`;

const Link = styled(NavLink)`
  color: inherit;

  &.active > * {
    background-color: #003393;
    color: #00f8ea;
    transition: 0.2s linear;
  }
`;

const NavTab = styled.div`
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
  NavTab,
  Link,
  Header,
  Nav,
};
