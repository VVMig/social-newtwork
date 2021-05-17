import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const size = '25px';
const tabState = css`
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.additional};
  transition: 0.2s linear;
`;
export const headerHeight = 70;

const Header = styled.header`
  max-width: 320px;
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
  background-color: ${(props) => props.theme.mainBackground};
  border-radius: 0 0 25px 25px;
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.greyMain};
`;

const Link = styled(NavLink)`
  color: inherit;

  &.active > * {
    ${tabState}
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
    ${tabState}
  }
`;

export const Styled = {
  NavTab,
  Link,
  Header,
  Nav,
};
