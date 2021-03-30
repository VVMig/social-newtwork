import React from 'react';
import { Sidebar } from '../../packages/components';
import { Content } from './Content';
import { Header } from './Header';
import { Styled } from './styled';

interface Props {
  viewIcon: JSX.Element;
  notifyIcon: JSX.Element;
  sendIcon: JSX.Element;
}

export const SidebarLive = ({ viewIcon, notifyIcon, sendIcon }: Props) => {
  return (
    <Styled.SidebarContainer>
      <Sidebar>
        <Header icon={notifyIcon} />
        <Content viewIcon={viewIcon} sendIcon={sendIcon} />
      </Sidebar>
    </Styled.SidebarContainer>
  );
};
