import styled, { keyframes } from 'styled-components';

import { zIndex } from '../../packages/components';

export const sidebarLiveWidth = 390;

const delay = 300;

const headerInfoWidth = 170;

const marginFromHeader = 5;

const appearRight = keyframes`
  0%{
    transform: translate(100%);
    opacity: 0;
  }
  100%{
    transform: translate(0);
    opacity: 1;
  }
`;

const disappearRight = keyframes`
  0%{
    transform: translate(0);
    opacity: 1;
  }
  100%{
    transform: translate(100%);
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
    will-change: transform;

    &.exited {
      transform: translate(100%);
    }

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
  max-width: ${headerInfoWidth}px;
  cursor: pointer;

  & .dropdown-menu {
    margin-top: ${marginFromHeader}px;
    top: 100%;
    right: 0;
    max-width: ${headerInfoWidth}px;
    & span {
      text-transform: capitalize;
    }
  }
`;

const Content = styled.div``;

const NotificationArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & svg {
    cursor: pointer;
  }
`;

const NotificationsList = styled.div`
  width: calc(100% * 0.7);
  position: absolute;
  left: 10px;
  top: 100%;
  margin-top: ${marginFromHeader}px;
  z-index: ${zIndex.notificationsArea};

  & .avatar {
    font-size: 10px;
  }

  & .dropdown-notifications {
    text-transform: none;
  }
`;

export const Styled = {
  SidebarContainer,
  Header,
  Content,
  MenuArea,
  NotificationsList,
  NotificationArea,
};
