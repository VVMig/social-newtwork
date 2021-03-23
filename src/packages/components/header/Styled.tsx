import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
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

export const StyledLink = styled(Link)`
  color: inherit;
`;

export const Div = styled.div`
  border-radius: 7px;
  padding: 5px;
  display: flex;
  align-items: center;

  & svg {
    --size: 25px;
    width: var(--size);
    height: var(--size);
  }

  &:hover {
    background-color: #003393;
    color: #00f8ea;
    transition: 0.2s linear;
  }
`;
