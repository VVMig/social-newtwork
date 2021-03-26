import styled from 'styled-components';

export const sidebarLiveWidth = 390;

const SidebarContainer = styled.div`
  justify-self: end;
  max-width: ${sidebarLiveWidth}px;
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 0 28px;
  background: red;
`;

export const Styled = {
  SidebarContainer,
  Header,
};
