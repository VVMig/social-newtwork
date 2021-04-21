import styled, { css, keyframes } from 'styled-components';
import { zIndex } from '../../packages/components';
import { SidebarTogglerProps } from './interfaces';

export const sidebarInfoWidth = 320;
const delay = 300;

const appearLeft = keyframes`
  0%{
    transform: translateX(-100%);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
`;

const disappearLeft = keyframes`
  0%{
    transform: translateX(0);
    opacity: 1;
  }
  100%{
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const SidebarContainer = styled.div`
  max-width: ${sidebarInfoWidth}px;
  height: 100vh;
  position: relative;

  & Aside {
    transform: translate(-100%);

    &.exited {
      transform: translate(-100%);
    }

    &.entering {
      animation: ${appearLeft} ${delay}ms linear;
    }
    &.entered {
      transform: translate(0);
    }
    &.exiting {
      animation: ${disappearLeft} ${delay}ms linear;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 0 28px;
`;

const SidebarToggler = styled.div<SidebarTogglerProps>`
  width: 30px;
  height: 30px;
  top: 10px;
  cursor: pointer;
  position: absolute;
  left: 100%;
  z-index: ${zIndex.sidebarToggler};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.additionalDarkGrey};
  transition: ${delay}ms linear;
  transform-origin: center;

  &:hover {
    opacity: 0.8;
  }

  ${(props) =>
    !props.showSidebar &&
    css`
      left: 0;
      transform: rotate(180deg);
    `}

  & div {
    display: flex;
    align-items: center;
  }

  & svg {
    width: 23px;
    height: 23px;
  }
`;

export const Styled = {
  SidebarContainer,
  Header,
  SidebarToggler,
};
