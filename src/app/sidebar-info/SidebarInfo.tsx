import React from 'react';
import { Sidebar } from '../../packages/components/sidebar/Sidebar';
import { Content } from './Content';
import { Header } from './Header';
import { SidebarItems } from './interfaces';
import { Align } from '../../packages/components';

export const SidebarInfo = ({ friends, groups }: SidebarItems) => {
  return (
    <Sidebar align={Align.left} maxWidth={320}>
      <Header />
      <Content friends={friends} groups={groups} />
    </Sidebar>
  );
};
