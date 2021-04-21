import styled, { keyframes } from 'styled-components';

export const sidebarLiveWidth = 390;

const delay = 300;

const headerInfoWidth = 170;

const marginFromHeader = 5;

const appearRight = keyframes`
  0%{
    transform: translateX(100%);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
`;

const disappearRight = keyframes`
  0%{
    transform: translateX(0);
    opacity: 1;
  }
  100%{
    transform: translateX(100%);
    opacity: 0;
  }
`;

const SidebarContainer = styled.div`
  justify-self: end;
  max-width: ${sidebarLiveWidth}px;
  width: 100%;
  height: 100vh;
  order: 3;

  & Aside {
    transform: translate(100%);

    &.entering {
      animation: ${appearRight} ${delay}ms linear;
    }

    &.entered {
      transform: translate(0);
    }

    &.exiting {
      animation: ${disappearRight} ${delay}ms linear;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 28px 0 24px;
  position: relative;
`;

const MenuArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${headerInfoWidth}px;
  cursor: pointer;

  & .dropdown-menu {
    margin-top: ${marginFromHeader}px;
    top: 100%;
    right: 0;
    max-width: ${headerInfoWidth}px;
  }
`;

const Content = styled.div``;

export const Styled = {
  SidebarContainer,
  Header,
  Content,
  MenuArea,
};
