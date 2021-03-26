import React from 'react';
import { Sidebar } from '../../packages/components';
import { Content } from './Content';
import { Header } from './Header';
import { SidebarIcon } from './interfaces';
import { Styled } from './styled';

export const SidebarLive = ({ icon }: SidebarIcon) => {
  return (
    <Styled.SidebarContainer>
      <Sidebar>
        <Header icon={icon} />
        <Content />
      </Sidebar>
    </Styled.SidebarContainer>
  );
};
