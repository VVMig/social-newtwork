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
  justify-content: flex-end;
  align-items: center;
  padding: 0 28px 0 24px;
`;

export const Styled = {
  SidebarContainer,
  Header,
};
