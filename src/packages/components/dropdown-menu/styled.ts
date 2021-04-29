import styled, { keyframes } from 'styled-components';
import { zIndex } from '../zIndex';
import { Link as StyledLink } from 'react-router-dom';

interface Props {
  delay: number;
}

const appear = keyframes`
    0%{
        transform: translateY(-20%);
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
`;

const disappear = keyframes`
    0%{
        transform: translateY(0);
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
    100%{
        transform: translateY(-20%);
    }
`;

const Menu = styled.div<Props>`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.light};
  position: absolute;
  height: min-content;
  z-index: ${zIndex.dropdownMenu};
  box-shadow: 0 0 0.15rem ${(props) => props.theme.darkBlue};
  border-radius: 5px;
  overflow: hidden;
  &.${(props) => props.className}-enter {
    animation: ${appear} ${(props) => props.delay}ms linear;
  }
  &.${(props) => props.className}-exit {
    animation: ${disappear} ${(props) => props.delay}ms linear;
    transform: translateY(-80%);
    opacity: 0;
  }
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  padding-inline-start: 0;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => props.theme.black};
  padding: 4px 10px;
  transition: 0.2s linear;
  text-transform: capitalize;
  color: ${(props) => props.theme.additionalDarkGrey};

  & div {
    display: flex;
    align-items: center;
  }

  & svg {
    width: 15px;
    height: 15px;
  }

  &:hover {
    background-color: ${(props) => props.theme.additionalLightGrey};
  }

  &:active {
    background-color: ${(props) => props.theme.primary};
  }
`;

const Link = styled(StyledLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  width: 100%;
`;

const Title = styled.span`
  padding-left: 10px;
`;

export const Styled = {
  Menu,
  List,
  MenuItem,
  Link,
  Title,
};
