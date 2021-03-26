import styled from 'styled-components';

export const sidebarInfoWidth = 320;

const SidebarContainer = styled.div`
  max-width: ${sidebarInfoWidth}px;
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
