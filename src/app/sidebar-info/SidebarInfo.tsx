import React from 'react';
import { Sidebar } from '../../packages/components';
import { Content } from './Content';
import { Header } from './Header';
import { SidebarItems } from './interfaces';
import { Styled } from './styled';

export const SidebarInfo = ({ friends, groups }: SidebarItems) => {
  return (
    <Styled.SidebarContainer>
      <Sidebar maxWidth={320}>
        <Header />
        <Content friends={friends} groups={groups} />
      </Sidebar>
    </Styled.SidebarContainer>
  );
};
