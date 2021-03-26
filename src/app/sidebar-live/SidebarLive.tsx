import React from 'react';
import { Sidebar } from '../../packages/components';
import { Content } from './Content';
import { Header } from './Header';
import { Styled } from './styled';

export const SidebarLive = () => {
  return (
    <Styled.SidebarContainer>
      <Sidebar>
        <Header />
        <Content />
      </Sidebar>
    </Styled.SidebarContainer>
  );
};
