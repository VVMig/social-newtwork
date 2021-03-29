import React from 'react';
import { Sidebar } from '../../packages/components';
import { Content } from './Content';
import { Header } from './Header';
import { Styled } from './styled';

interface Props {
  viewIcon: JSX.Element;
  notifyIcon: JSX.Element;
}

export const SidebarLive = ({ viewIcon, notifyIcon }: Props) => {
  return (
    <Styled.SidebarContainer>
      <Sidebar>
        <Header icon={notifyIcon} />
        <Content icon={viewIcon} />
      </Sidebar>
    </Styled.SidebarContainer>
  );
};
