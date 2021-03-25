import React from 'react';
import { Sidebar } from '../../packages/components/sidebar/Sidebar';
import { Content } from './Content';
import { Header } from './Header';
import { SidebarItems } from './interfaces';

export const SidebarInfo = ({ friends, groups }: SidebarItems) => {
  return (
    <Sidebar>
      <Header />
      <Content friends={friends} groups={groups} />
    </Sidebar>
  );
};
