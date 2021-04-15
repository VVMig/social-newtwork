import styled from 'styled-components';

export const sidebarLiveWidth = 390;

const headerInfoWidth = 140;

const marginFromHeader = 5;

const SidebarContainer = styled.div`
  justify-self: end;
  max-width: ${sidebarLiveWidth}px;
  width: 100%;
  height: 100vh;
  order: 3;
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
  width: ${headerInfoWidth}px;
  cursor: pointer;

  & .dropdown-menu {
    margin-top: ${marginFromHeader}px;
    top: 100%;
    right: 10px;
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
